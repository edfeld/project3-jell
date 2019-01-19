module.exports = function (sequelize, DataTypes) {
	var users = sequelize.define("users", {
	  username: {
		type: DataTypes.STRING,
		notNull: true
	  },
	  passwordHashSalt: DataTypes.STRING,
	  userType: {
		type: DataTypes.STRING,
		notNull: true
		},
		firstName: {
			type: DataTypes.STRING,
			notNull: false
		},
		lastName: {
			type: DataTypes.STRING,
			notNull: false
		},
		googleId: {
				type: DataTypes.STRING,
				notNull: false
		}
	}, 
	{
		timestamps: false
	}
	);
  
	users.associate = function (models) {
	  // We're saying that a login should belong to an user
	  // A login can't be created without an user due to the foreign key constraint
	  // users.hasOne(models.logins, {
	  //   foreignKey: {
	  //     allowNull: false
	  //   }
	  // });
	  // users.hasMany(models.inventory, {
		// foreignKey: {
		//   allowNull: false
		// }
	  // });
	};
	
	
	return users;
  };
  
  