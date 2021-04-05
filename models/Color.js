const ColorModel = (sequelize, DataTypes) => {
    const Color = sequelize.define('color', {
        color: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,

        },

    }, { freezeTableName: true, })

    Color.beforeCreate(async (color, options) => {
        color.color += 'fav'
    })



    return Color
}

module.exports = ColorModel