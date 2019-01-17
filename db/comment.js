/* COMMENT MODULE
    defines the COMMENT table that has the debate topics,
    the debate context and associated userID 
    Rebuttal will be a boolean, if true then a comment is a rebuttal
    false will indicate a concurence.
    
    Children will be a concatonated string to allow a search to get all children comments*/

    module.exports = function (sequelize, DataTypes) {
        var commments = sequelize.define("comments", {
            content: {
                type: DataTypes.STRING,
                notNull: true
            },

            //determines content type
            isRebuttal: {
                type: DataTypes.BOOLEAN,
                notNull: true
            },
    
            user: {
                type: sequelize.uuid,
                primaryKey: true,
                notNull: true
            },

            post: {
                type: sequelize.uuid,
                primaryKey: true,
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