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
            type: DataTypes.DATE,
            notNull: true,
            defaultValue: DataTypes.NOW
        },

        updatedAt: {
            type: DataTypes.DATE,
            notNull: true,
            defaultValue: DataTypes.NOW
        }


    });

    posts.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        posts.belongsTo(models.users, {
          foreignKey: {
            allowNull: false
          }
        });

        posts.hasMany(models.comments, {

        });
    };

  return posts;  
}