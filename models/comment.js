/* COMMENT MODULE
    defines the COMMENT table that has the debate topics,
    the debate context and associated userID 
    Rebuttal will be a boolean, if true then a comment is a rebuttal
    false will indicate a concurence.
    
    Children will be a concatonated string to allow a search to get all children comments*/

    module.exports = function (sequelize, DataTypes) {
        var comments = sequelize.define("comments", {
            content: {
                type: DataTypes.STRING,
                notNull: true
            },

            //determines content type
            isRebuttal: {
                type: DataTypes.BOOLEAN,
                notNull: true
            },

            //determines if post is a child
            isChild: {
                type: DataTypes.BOOLEAN,
                notNull: true
            },

            //Concatonated string will contain all
            //children comments uuids for display
            children: {
                type: DataTypes.STRING,
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

        comments.associate = function(models) {
            // A Post can't be created without a user due to the foreign key constraint
            comments.belongsTo(models.users, {
              foreignKey: {
                allowNull: false
              }
            });

            comments.belongsTo(models.posts, {
                foreignKey: {
                  allowNull: false
                }
            });
        };
    
      return comments;  
    }