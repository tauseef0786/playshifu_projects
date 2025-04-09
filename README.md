# playshifu_projects

## Screen Shots
####Home Page
![image](https://github.com/user-attachments/assets/73db2147-a115-4ffc-a078-74b3ca61e1b1)

#### Card Details
![image](https://github.com/user-attachments/assets/f320914a-20da-4d6d-8302-690f3e328526)


## Routes

#### User Routes
    // POST :  https://playshifu-apies.onrender.com/api/auth/register
    // POST :  https://playshifu-apies.onrender.com/api/auth/login
 
 #### Auth routes protected 
    // GET :   https://playshifu-apies.onrender.com/api/auth/profile  
    // PUT :   https://playshifu-apies.onrender.com/api/auth/change-password

#### Product Routes 
    // GET:   https://playshifu-apies.onrender.com/api/products
    // GET :  https://playshifu-apies.onrender.com/api/products/id
####  by admin only 
     // POST:     https://playshifu-apies.onrender.com/api/products       
     // PUT:      https://playshifu-apies.onrender.com/api/products/id   
     // DELETE:   https://playshifu-apies.onrender.com/api/products/id


## Folder Structure

    playshifu_projects/
    ├── client/
    │   ├── node_modules/
    │   ├── public/
    │   └── src/
    │       ├── assets/
    │       │   └── react.svg
    │       ├── components/
    │       │   ├── Footer.jsx
    │       │   ├── Hero.jsx
    │       │   ├── MenuBar.jsx
    │       │   ├── Navbar.jsx
    │       │   ├── OffersSection.jsx
    │       │   ├── ProductCard.jsx
    │       │   └── TopBanner.jsx
    │       ├── context/
    │       │   └── CartContext.jsx
    │       ├── data/
    │       │   └── countries.js
    │       ├── pages/
    │       │   ├── Home.jsx
    │       │   └── ProductDetails.jsx
    │       ├── apiClient.js
    │       ├── App.css
    │       ├── App.jsx
    │       ├── index.css
    │       ├── index.html
    │       └── main.jsx
    ├── server/
    │   ├── config/
    │   │   └── db.js
    │   ├── controllers/
    │   │   ├── auth.controller.js
    │   │   └── product.controller.js
    │   ├── middleware/
    │   │   └── auth.middleware.js
    │   ├── models/
    │   │   ├── product.model.js
    │   │   └── user.model.js
    │   ├── routes/
    │   │   ├── auth.routes.js
    │   │   └── product.routes.js
    │   ├── node_modules/
    │   ├── .env
    │   ├── .gitignore
    │   ├── index.js
    │   ├── package.json
    │   ├── package-lock.json
    │   └── vercel.json
    ├── README.md
