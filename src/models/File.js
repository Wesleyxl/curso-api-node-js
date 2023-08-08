import Sequelize, { Model } from "sequelize";

export default class File extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        original_name: Sequelize.STRING,
        file_name: Sequelize.STRING,
      },
      { sequelize }
    );

    return this;
  }

  static associatie(models) {
    this.belongsTo(models.Student, { foreignKey: "students_id" });
  }
}
