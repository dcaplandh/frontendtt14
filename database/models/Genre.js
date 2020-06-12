module.exports = (sequelize,DataType) => {
    var alias = "Genre"; 
    var cols = {
        id: {
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name : DataType.STRING
    }
    var config = {
        tableName: "genres",
        timestamps:false
    }
    
    
    const Genre = sequelize.define(alias,cols,config);
    return Genre;

}