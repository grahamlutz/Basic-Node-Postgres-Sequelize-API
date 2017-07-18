// User model

// The User has a "username" attribute of type DataTypes.String

module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
	    username: {
	      type: DataTypes.STRING,
	      // If a customer is to be created, they must have a name
	      allowNull: false,
	      validate: {
	        len: [6,20]
	      },
	      unique: true
	    }, 
	    email: {
		  type: DataTypes.STRING,
		  allowNull: false,
		  unique: true
	    },
	    password : {
	      type: DataTypes.STRING,
	      allowNull: false
	    },
	    age: {
	    	type: DataTypes.NUMBER
	    },
	    sex: {
	    	type: DataTypes.STRING
	    }
  	},{
    timestamps: false
	});
  return users;
};
