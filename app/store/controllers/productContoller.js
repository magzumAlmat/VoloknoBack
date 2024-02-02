// controllers/ProductController.js
const Product = require("../models/Product");
const { Op } = require("sequelize");
const Order = require("../models/Order");

async function createProduct(req, res) {
  console.log(req.body);
  const files = req.files;
  const filePaths = files.map((file) => file.path);
  console.log("10 string -----------", filePaths);
  let imageUrls = "";
  for (let i = 0; i < filePaths.length; i++) {
    imageUrls = imageUrls + filePaths[i] + ",";
  }
  imageUrls = imageUrls.slice(0, -1);

  console.log("imageUrls", imageUrls);

  try {
    const { mainType, type, name, price, description } = req.body;
    console.log(req.body, req.file);
    const newProduct = await Product.create({
      mainType,
      type,
      name,
      price,
      count: 1,
      image: imageUrls,
      description,
    });
    console.log('NEW PRODUCT', newProduct);
    return res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getAllProducts(req, res) {
  try {
    const products = await Product.findAll();
    return res.status(200).json(products);
  } catch (er) {
    console.log(er);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findAll({
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    });
    return res.status(200).json(product);
  } catch (er) {
    console.log(er);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// async function editProduct(req, res) {
//   const productId = req.params.id;
//   console.log(req.body, req.params.id);
//   try {
//     await Product.update(
//       {
//         mainType: req.body.mainType,
//         type: req.body.type,
//         name: req.body.name,
//         price: req.body.price,
//         description: req.body.description,
//       },
//       {
//         where: { id: productId },
//         returning: true,
//       }
//     );
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Internal Server Error" });
//   }
// }
async function editProduct(req, res) {

  const files = req.files;
  console.log(files)
  const filePaths = files.map(file => file.path);
  console.log('10 string -----------', filePaths)
  let imageUrls = ''
  for (let i = 0; i < filePaths.length; i++) {
      imageUrls = imageUrls + filePaths[i] + ','
  }
  imageUrls = imageUrls.slice(0, -1);

  const productId = req.params.id
  console.log("EDIT ---------", productId);

  try {
      const product = Product.update({
          mainType: req.body.mainType,
          type: req.body.type,
          name: req.body.name,
          price: req.body.price,
          count: 1,
          image: imageUrls,
          description: req.body.description,
      }, {
          where: { id: productId },
      });
      console.log('EDIT PRODUCT',{product});


      return res.status(200).json({product})
  } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
  }
}

const deleteProductById = async (req, res) => {
  const { id } = req.params;
  try {
    // Ищем продукт по идентификатору и удаляем его
    const product = await Product.destroy({
      where: { id: id },
    });

    // Если продукт не найден, возвращаем ошибку
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Возвращаем успешный статус и информацию об удаленном продукте
    return res.status(200).json({
      message: "Product deleted successfully",
      deletedProduct: product,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  editProduct,
  deleteProductById,
};
