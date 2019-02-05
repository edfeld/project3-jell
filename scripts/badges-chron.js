/* Badges chron will check all users in the database and update their badges
according to their status as a user and various achievements. This loop should be run daily 
badges are represented as an array of strings that correspond to icons in client/public/badges.json */

var db = require("../models");

//asynch promise to find all users along with their associated posts and comments
var getAllUsers = new Promise( function(resolve, reject) {
    db.users.findAll(
        {
            //need to adjust to exclude personal info
            attributes: ['username', 'userType', 'badges', 'createdAt'],
            include: [{model: db.posts, as: 'posts'}, 
                      {model: db.comments, as: 'comments'}]
        }).then(function(result) {
            resolve(result);
        }).catch(function(err) {
            reject(err);
        });
});

//Checks the user's type and updates badges accordingly
function userTypeCheck (user) {
    let badges;
    if(user.badges) {
        badges = user.badges.split(":");
    } else {
        badges = [];
    }
    let type = user.userType;
    // Basic badge should only be shown if no other type badges present

    //removes basic badge if user has been upgraded
    if (type !== "basic" && badges.includes("basic")){
        badges.splice(badges.indexOf('basic'), 1);
    }

    if(type === "admin") {
        if(badges.indexOf("poster") === -1){
            badges.push("poster");
        }
        if(badges.indexOf("admin") === -1) {
            badges.push("admin");
        }
    } else if (type === "poster" && badges.indexOf("poster") === -1) {
        badges.push("poster");
    }
    user.badges = badges.join(":");
}

//checks if user has met certain conditions and distributes badges accordingly
function achievementCheck (user){
    let badges;
    if(user.badges) {
        badges = user.badges.split(":");
    } else {
        badges = [];
    }
    let {upvotes, downvotes} = totalVotes(user);

    //User's got the goods
    if (upvotes >= 100 && !badges.includes("enlightened")) {
        badges.push("enlightened");
    }
    //User's widely dispised
    if(downvotes >= 100 && !badges.includes("controversial")) {
        badges.push("controversial");
    }
    //User is a prolific poster
    if(user.comments.length >= 100 || user.posts.length >= 100) {
        badges.push("prolific");
    }
    user.badges = badges.join(":");
}

//gets all of the upvotes/downvotes for the user between posts and comments
function totalVotes (user) {
    let upvotes = 0;
    let downvotes = 0;
    user.comments.forEach(comment => {
        upvotes += comment.upvotes;
        downvotes += comment.downvotes;
    });

    user.posts.forEach(post => {
        upvotes += post.upvotes;
        downvotes += post.downvotes;
    });

    return {upvotes: upvotes, downvotes: downvotes};
}

//main function loops through users and updates their badges accordingly
function checkAndUpdateBadges(users) {
    users.forEach(user => {
        console.log("user: ", user.username);
        userTypeCheck(user);
        achievementCheck(user);
        db.users.update({badges: user.badges}, {where: {username: user.username}})
        .then(function (result) {
            console.log("Updated:", result);
        }).catch(function(error) {
            console.log("Error: ", error);
        });
    });
}



module.exports = {

    //main Chron loop started by the server
    run: function () {
        //Interval set to run for one day
        setInterval(function () {
            console.log("Badge update initiated...");
            //get all users and their associated posts and comments
            getAllUsers
                .then(function (result) {
                    console.log("Data Collected, updating badges");
                    // console.log("result", result);
                    checkAndUpdateBadges(result);

                }).catch(function (error) {

                    console.log('ERROR: ', error)

                });

        //runs daily
        }, 86400000) //6000)//86400000)
    }
}