import Student from "../models/Student";

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      name: "Wesley",
      last_name: "Alves",
      email: "wesley@gmail.com",
      age: 25,
      weight: 75.0,
      height: 1.75,
    });

    res.json(newStudent);
  }
}

export default new HomeController();
