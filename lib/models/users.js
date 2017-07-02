// User model

// The User has a "username" attribute of type DataTypes.String

module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
	    username: {
	      type: DataTypes.STRING,
	      // If a customer is to be created, they must have a name
	      allowNull: false
	    }, 
	    email: {
		  type: DataTypes.STRING,
		  allowNull: false
	    },
	    password : {
	      type: DataTypes.STRING,
	      allowNull: false
	    }
  	},{
    timestamps: false
	});
  return users;
};
