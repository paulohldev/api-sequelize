const router = require('express').Router();
const Produto = require('../model/Produto');

const newError = (message) => {
  throw new Error(message);
};

router.get('/', async (req, res) => {
  try {
    const products = await Produto.findAll();
    if (products.length) {
      return res.status(200).send(products);
    }

    newError('Não existem produtos para listar');
  } catch (error) {
    res.send(error.message);
  }
});

router.get('/:uuid', async (req, res) => {
  try {
    const { uuid } = req.params;
    const produto = await Produto.findOne({ where: { id: uuid } });
    if (produto) {
      return res.status(200).send(produto);
    }

    newError('Produto não existe');
  } catch (error) {
    res.send(error.message);
  }
});

router.post('/adicionar', async (req, res) => {
  try {
    const { nomeProduto, preco } = req.body;
    if (nomeProduto && preco) {
      await Produto.create({ nomeProduto, preco });
      return res.status(200).send('Produto Adicionado');
    }

    newError('Todos os campos são obrigatórios.');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.delete('/:uuid', async (req, res) => {
  try {
    const productExist = await Produto.findOne({
      where: { id: req.params.uuid },
    });
    if (productExist) {
      await Produto.destroy({ where: { id: req.params.uuid } });
      return res.status(200).send('Produto Deletado');
    }

    newError('Produto não existe');
  } catch (error) {
    res.send(error.message);
  }
});

router.put('/editar/:uuid', async (req, res) => {
  try {
    const { nomeProduto, preco } = req.body;
    if (nomeProduto && preco) {
      await Produto.update(
        { nomeProduto, preco },
        { where: { id: req.params.uuid } },
      );
      return res.status(200).send('Produto editado');
    }

    newError('Dados incompletos.');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
