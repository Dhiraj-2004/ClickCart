# ClickCart - E-Commerce Website

ClickCart is a full-stack e-commerce web application that offers a seamless shopping experience with secure payment integration, user authentication, dynamic product catalog, and inventory management.

## Features

- **Secure Payment Integration**: Integrated Stripe and Razorpay for safe and smooth transactions.
- **User Authentication**: Implemented JWT authentication and role-based access control.
- **Product Catalog**: Dynamic product listings with search, filter, and sorting functionalities.
- **Inventory Management**: Real-time stock updates and admin-controlled product management.
- **Optimized Performance**: Implemented lazy loading, caching, and SEO best practices.

## Tech Stack

- **Frontend**: ReactJS, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT, bcrypt
- **Payments**: Stripe, Razorpay
- **Deployment**: Vercel (Frontend), Render/DigitalOcean (Backend)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/clickcart.git
   cd clickcart
   ```

2. Install dependencies:
   ```sh
   npm install
   cd client && npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root and client folders with necessary keys.

4. Start the application:
   ```sh
   npm run dev
   ```

## Folder Structure
```
ClickCart/
│── client/          # Frontend React app
│── server/          # Backend Node.js & Express API
│── models/          # Database models (MongoDB)
│── routes/          # API routes
│── controllers/     # Business logic
│── config/          # Configuration files
│── .env             # Environment variables
│── package.json     # Dependencies and scripts
```

## API Endpoints
- `GET /api/products` - Fetch all products
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/orders` - Create a new order
- `POST /api/payments` - Process payment via Stripe/Razorpay

## Contributing
Pull requests are welcome. For major changes, open an issue first to discuss the changes you want to make.

## License
This project is licensed under the MIT License.
