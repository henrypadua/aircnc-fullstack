// Métodos index, show, store, update, destroys
// index - retorna uma listagem
// show - listar uma unica
// store - criar
// update - alterar
// destroy - deletar

const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
};
