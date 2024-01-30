// controllers/OrderController.js
const Order = require('../models/Order');
const {Op} = require("sequelize");

async function createOrder(req, res) {
    try {
        const { product_ids, username, address, phone, status, totalPrice } = req.body;
        console.log(req.body)
        const newOrder = await Order.create({
            product_ids,
            username,
            address,
            phone,
            status,
            totalPrice
        });
        return res.status(201).json(newOrder);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function editOrder(req, res) {
    const orderId = req.params.id
    console.log(req.body, req.params.id)
    try {
        Order.update({
            username: req.body.username,
            phone: req.body.phone,
            address: req.body.address,
            status: req.body.status,
            totalPrice: req.body.totalPrice,
        }, {
            where: { id: orderId },
            returning: true,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function getAllOrders(req, res) {
    try {
        const orders = await Order.findAll();
        return res.status(200).json(orders);
    } catch (er) {
        console.log(er)
        return res.status(500).json({error: 'Internal Server Error'})
    }
}

const getOrderById = async (req, res) => {
    const {id} = req.params;

    try {
        const order = await Order.findAll({
            where: {
                id: {
                    [Op.eq]: id,
                }
            }
        });
        return res.status(200).json(order);
    } catch (er) {
        console.log(er)
        return res.status(500).json({error: 'Internal Server Error'})
    }

}

module.exports = {
    getOrderById,
    getAllOrders,
    createOrder,
    editOrder
}
