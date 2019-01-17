/* POST MODULE
    defines the POST table that has the debate topics,
    the debate context and associated userID */

module.exports = function (sequelize, DataTypes) {
    var posts = sequelize.define("posts", {
        title: {
            type: DataTypes.STRING,
            notNull: true
        },

        context: {
            type: DataTypes.STRING
        },

        user: {
            type: sequelize.uuid,
            primaryKey: true,
            notNull: true
        },

        //Added to help search feature on main page (delimit by #?)
        tags: {
            type: DataTypes.STRING
        },

        upVotes: {
            type: DataTypes.INTEGER,
            notNull: true,
            defaultValue: 0
        },

        downVotes: {
            type: DataTypes.INTEGER,
            notNull: true,
            defaultValue: 0
        },

        createdAt: {
            type: DataTypes.Date,
            notNull: true,
            defaultValue: DataTypes.NOW
        },

        updatedAt: {
            type: DataTypes.Date,
            notNull: true,
            defaultValue: DataTypes.NOW
        }


    })

  return posts;  
}