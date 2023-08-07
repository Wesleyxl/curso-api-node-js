import jwt from "jsonwebtoken";

import User from "../models/User";

class TokenController {
  async store(req, res) {
    const { email = "", password = "" } = req.body;

    if (!email || !password) {
      res.status(401).json({
        errors: ["Credenciais inválidas!"],
      });
    }

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      res.status(401).json({
        errors: ["Usuário não encontrado!"],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      res.status(400).json({ errors: ["Senha invalida"] });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE_IN,
    });

    res.json({ access_token: token });
  }
}

export default new TokenController();
