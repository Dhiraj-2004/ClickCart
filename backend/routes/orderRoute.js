import express from 'express'
import { placeorder, placeorderStripe, placeorderRazorpay, allOrders, userOrders, updateStatus } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

// For Admin
orderRouter.post('list', adminAuth, allOrders)
orderRouter.post('/status', adminAuth, updateStatus)

// For Payments
orderRouter.post('/place', authUser, placeorder)
orderRouter.post('/stripe', authUser, placeorderStripe)
orderRouter.post('/razorpay', authUser, placeorderRazorpay)

// For User
orderRouter.post('/userorders', authUser, userOrders)

export default orderRouter