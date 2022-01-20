//Komponenta za kreiranje colone u bazi podataka pod imenom Users i ostale kolone
//a da bi bilo ovo sve ucitano u bazu podataka moramo ponovo pokrenuti server(terminal) - npm start u ovom slucaju 
//posto smo u package.json u script , stavili 'start' za pokretanje servera u terminalu 

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Users.associate = (models) => {
        Users.hasMany(models.Likes, {
          onDelete: "cascade",
        });
 
        Users.hasMany(models.Posts, {
            onDelete: "cascade",
          });
    }
    return Users;
};