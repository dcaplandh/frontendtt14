module.exports = (sequelize,DataType) => {
    var alias = "Movie"; 
    var cols = {
        /*id: {
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },*/
        title : DataType.STRING,
        release_date: {
            type: DataType.DATE,
            field:"release_date"
        },
        awards: DataType.INTEGER,
        rating: DataType.INTEGER,
        genre_id: DataType.INTEGER,
        length: DataType.INTEGER
    }
    var config = {
        tableName: "movies",
        timestamps:false
    }  
    const Movie = sequelize.define(alias,cols,config);

    Movie.associate = (models)=>{
        Movie.belongsTo(models.Genre,{
            as:"genero",
            foreignKey: "genre_id"
        });
        Movie.belongsToMany(models.Actor,{
            as : "losActoresDeLaPeli",
            through: "actor_movie",
            foreignKey:"movie_id",
            otherKey:"actor_id",
            timestamps:false
        });
    }

    return Movie;

}