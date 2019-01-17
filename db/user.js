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
	});
  
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
  
  /* 
	-- users
  CREATE TABLE users
  (
	  id int NOT NULL AUTO_INCREMENT,
	  username varchar(300) NOT NULL,
	  first_name varchar(300) NOT NULL, 
	  last_name varchar(300) NOT NULL,
	  street_address1 varchar(300) NOT NULL, 
	  street_address2 varchar(300),
	  city varchar(300) NOT NULL,
	  _state varchar(300) NOT NULL,
	  zip int NOT NULL,
	  email_address varchar(300) NOT NULL,
	  phone1 varchar(300) NOT NULL, 
	  phone2 varchar(300),
	  PRIMARY KEY (id)
	);
	*/