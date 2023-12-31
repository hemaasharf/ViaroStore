# ViraoBook E-Commerce App

ViraoBook is an e-commerce web application for book enthusiasts. Browse and shop for your favorite books in a user-friendly interface.

## Features

- Browse a collection of featured books
- Toggle between light and dark mode
- Search for books using keywords
- Add books to your cart and see real-time updates
- Sign up and log in to access your personalized dashboard
- Place orders and view order history
- Responsive design for mobile and desktop devices
- Filter books using various criteria using the FilterBar

## FilterBar Feature

Enhance your shopping experience with the FilterBar feature:

- Click on the three dots on the product list page to reveal the FilterBar.
- Filter books by best seller status, price range (high to low or low to high), availability (in stock), and ratings.
- Quickly find the books that match your preferences and needs.

## Technologies Used

- React.js for building the user interface
- React Router for navigation
- Tailwind CSS for styling
- React Icons for icons
- Context API and useReducer for state management
- axios for handling API requests
- json-server for simulating backend APIs
- json-server-auth for user authentication
- react-toastify for displaying error messages
- react-helmet for dynamic page titles
- Netlify for front-end deployment
- Express server for serving the front-end and proxying API requests
- Netlify for deploying the front-end
- Render for deploying the backend

## Deployment Setup

To deploy the ViraoBook E-Commerce App, the following steps were taken:

1. The front-end was deployed on Netlify. You can check out the live demo [here](https://viarostore.netlify.app/).

2. The back-end was deployed using the Render platform. The Express server serves the front-end and proxies API requests to the backend.

## Getting Started

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Set up the backend by running json-server with your data.
4. Set the backend server URL in the `.env` file (`REACT_APP_HOST`).

## Usage

1. Sign up with your email to create an account.
2. Browse the featured books on the home page.
3. Click on a book to view details.
4. Use the FilterBar to refine your book selection based on different criteria.
5. Add books to your cart and proceed to checkout.
6. View and manage your cart on the cart page.
7. Place an order and provide your name and email.
8. Pay securely and receive a success or failure message.

## Contributing

Contributions are welcome! If you find a bug or want to add a feature, please open an issue or submit a pull request.

## Contact

For any inquiries or feedback, please contact [ebrahimosamadawoud@gmail.com](mailto:ebrahimosamadawoud@gmail.com).
