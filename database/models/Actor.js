module.exports = (sequelize,DataType) => {
    var alias = "Actor"; 
    var cols = {
        id: {
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name : DataType.STRING,
        last_name : DataType.STRING,
        rating: DataType.INTEGER,
        favorite_movie_id: DataType.INTEGER
    }
    var config = {
        tableName: "actors",
        timestamps:false
    }
    
    
    const Actor = sequelize.define(alias,cols,config);
    
    Actor.associate = (models)=>{
        Actor.belongsToMany(models.Movie,{
            as : "peliculas",
            through: "actor_movie",
            foreignKey:"actor_id",
            otherKey:"movie_id",
            timestamps:false
        });
    }

    return Actor;

}