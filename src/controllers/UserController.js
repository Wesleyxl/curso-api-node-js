import User from "../models/User";

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);

      res.json(newUser);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await User.findAll();

      return res.json(users);
    } catch (e) {
      return res.json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // show
  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      return res.json(user);
    } catch (e) {
      return res.json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // updated
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ errors: ["Id não encontrado"] });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({ errors: ["Usuário não encontrado"] });
      }

      const userUpdate = await user.update(req.body);

      return res.json(userUpdate);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // delete
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ errors: ["Id não encontrado"] });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({ errors: ["Usuário não encontrado"] });
      }

      await user.destroy(req.body);

      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
