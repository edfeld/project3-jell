/* Badges chron will check all users in the database and update their badges
according to their status as a user and various achievements. This loop should be run daily 
badges are represented as an array of strings that correspond to icons in client/public/badges.json */

var db = require("../models");

//asynch promise to find all users along with their associated posts and comments
var getAllUsers = new Promise( function(resolve, reject) {
    db.users.find(
        {
            //need to adjust to exclude personal info
            attributes: ['username', 'userType', 'badges', 'createdAt'],
            include: [{model: db.posts, as: 'posts'}, 
                      {model: db.comments, as: 'comments'}]
        }).then(function(result) {
            resolve.json(result);
        }).catch(function(err) {
            reject(err);
        });
});

//Checks the user's type and updates badges accordingly
function userTypeCheck (user) {
    let badges = user.badges.split(":");
    let type = user.userType;
    //no basic badge if advanced user
    if(type !== "basic" && badges.includes("basic")) {
        badges.splice(badges.indexOf("basic"), 1);
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
    let badges = user.badges.split(":");
}


//main function loops through users and updates their badges accordingly
function checkAndUpdateBadges(users) {
    users.forEach(user => {
        userTypeCheck(user);
        achievementCheck(user);
        db.users.update({badges: user.badges}, {where: {id: user.id}});
    });
}

module.exports = {

    //main Chron loop started by the server
    run: function () {
        //Interval set to run for one day
        setInterval(function () {
            //get all users and their associated posts and comments
            getAllUsers()
                .then(function (result) {

                    checkAndUpdateBadges(result);

                }).catch(function (error) {

                    console.log('ERROR: ', error)

                })

        //runs daily
        }, 86400000)
    },




}