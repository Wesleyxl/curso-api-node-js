const bcryptjs = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "john@email.com",
          password_hash: await bcryptjs.hash("teste@123", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Maria Silva",
          email: "mary@email.com",
          password_hash: await bcryptjs.hash("teste@123", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
