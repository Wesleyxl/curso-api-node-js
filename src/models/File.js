import Sequelize, { Model } from "sequelize";
import appConfig from "../config/app";

export default class File extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        original_name: Sequelize.STRING,
        file_name: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${appConfig.url}/images/${this.getDataValue("file_name")}`;
          },
        },
      },
      { sequelize }
    );

    return this;
  }

  static associatie(models) {
    this.belongsTo(models.User, { foreignKey: "students_id" });
  }
}
