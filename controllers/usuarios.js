const express = require('express');
const router = express.Router();
const Usuario = require('../model/Usuario');

router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    if (usuarios.length) {
      return res.status(200).send(usuarios);
    } else {
      throw new Error('Não existem usuários para listar');
    }
  } catch (error) {
    res.send(error.message);
  }
});

router.get('/:uuid', async (req, res) => {
  try {
    const { uuid } = req.params;
    const usuario = await Usuario.findOne({ where: { id: uuid } });
    if (usuario) {
      res.status(200).send(usuario);
    } else {
      throw new Error('Usuário não existe');
    }
  } catch (error) {
    res.send(error.message);
  }
});

router.post('/adicionar', async (req, res) => {
  try {
    const { nome, idade } = req.body;
    if (nome && idade) {
      await Usuario.create({ nome, idade });
      return res.status(200).send('Usuário cadastrado');
    } else {
      throw new Error('Nome e idade incompletos.');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put('/editar/:uuid', async (req, res) => {
  console.log(req.params);
  try {
    const { nome, idade } = req.body;
    if (nome && idade) {
      await Usuario.update({ nome, idade }, { where: { id: req.params.uuid } });
      return res.status(200).send('Usuário editado');
    } else {
      throw new Error('Nome e idade incompletos');
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/:uuid', async (req, res) => {
  try {
    const userExist = await Usuario.findOne({ where: { id: req.params.uuid } });
    if (userExist) {
      await Usuario.destroy({ where: { id: req.params.uuid } });
      return res.status(200).send('Usuário deletado');
    } else {
      throw new Error('Usuário não existe');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
