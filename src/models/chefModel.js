import { DataTypes } from "sequelize";
import { conn } from "../config/sequelize.js";

const chefModel = conn.define(
    "chef",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        biografia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        especialidade: {
            type: DataTypes.STRING,
            allowNull: false
        },
        experiencia: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nacionalidade:{
              type: DataTypes.STRING,
            allowNull: false
        },

    },
    {
        tableName: "chefs",
        timestamps:true,
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
)

export default chefModel;