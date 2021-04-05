const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,

        },

    }, {
        freezeTableName: true,
    })

    User.associate = models => {
        // User.belongsToMany(models.Color, {
        //     through: 'favorite_colors',
        //     foreignKey: {
        //         name: 'user_id',

        //         allowNull: false,
        //     },
        //     onDelete: 'CASCADE'
        // })

        User.belongsTo(models.Color, {
            foreignKey: {
                name: 'color_id',

                allowNull: false,
            },
            onDelete: 'CASCADE'
        })

    }

    return User
}

module.exports = UserModel