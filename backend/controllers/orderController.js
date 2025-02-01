import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js"

// Plcaing orders using COD Method
const placeorder = async (req, res) => {
    try {
        
        const {userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount, 
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, {cartData:{}})

        res.json({success: true, message: "Order Placed"})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

// Plcaing orders using Stripe Method
const placeorderStripe = async (req, res) => {
    
}

// Plcaing orders using Razorpay Method
const placeorderRazorpay = async (req, res) => {
    
}

// All Order for Admin panel
const allOrders = async () => {

}

// User Order data for frontend
const userOrders = async () => {
    
}

// Updating order status
const updateStatus = async () => {
    
}

export {placeorder, placeorderStripe, placeorderRazorpay, allOrders, userOrders, updateStatus}