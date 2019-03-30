module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD

=======
>>>>>>> 5b21ca68bb3a24d79ef0ee52e822dba956d2f15b
  var Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING(16),
      isAlphanumeric: true,
      allowNull: false
    },
    password: {
<<<<<<< HEAD
      type: DataTypes.STRING(32),
=======
      type: DataTypes.STRING,
>>>>>>> 5b21ca68bb3a24d79ef0ee52e822dba956d2f15b
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(16),
      allowNull: false
    }
<<<<<<< HEAD
  })

  return Users;

=======
  });

  return Users;
>>>>>>> 5b21ca68bb3a24d79ef0ee52e822dba956d2f15b
};
