# React + Vite

Packages to Install
Before running the project, make sure you have all the required packages installed. Below is a list of the packages you'll need:
1. React: The core library for building user interfaces.
     -> npm install react react-dom

2. Tailwind CSS: A utility-first CSS framework for designing the layout and styling.
      -> npm install -D tailwindcss postcss autoprefixer
      -> npx tailwindcss init -p
3. React Icons: For adding scalable vector icons to the project.
      -> npm install react-icons

4. AOS (Animate on Scroll): A library for adding animations as you scroll down the page.
      -> npm install aos

5. React Router (Optional): If your project includes routing, install React Router.
      ->npm install react-router-dom

6. Dark Mode Package (Optional): If you are using a specific dark mode toggle package, ensure to include it here.
      -> npm install use-dark-mode

7. Axios (Optional): If you're fetching data from an API, Axios can be useful.
      ->npm install axios

8. Vite (Optional): If you're using Vite as the build tool instead of Create React App.    
      -> npm create vite@latest

- Installation and Setup:
- 1. Clone the repository:
     git clone https://github.com/nayanacgowda08/E_Commerce-Website.git
     cd E_Commerce-Website

  2. Install dependencies:
     npm install

3. Start the development server:
   npm run dev -> Vite+React
   npm start -> my-create-app


- E-Commerce Website
- This project is a modern e-commerce website built using React.js and Tailwind CSS. It provides a seamless user experience with dynamic product displays, 
  interactive navigation, and responsive design.

Features

1. Responsive Design:
Fully responsive across various devices and screen sizes, ensuring a smooth experience on both mobile and desktop.

2. Product Categories:
Organized product categories like "Kids Wear," "Mens Wear," and "Electronics" for easy navigation.

3. Dropdown Menus:
Dropdown menus for product categories, such as "Trending Products" and "Best Selling," enhancing navigation.

4. Dark Mode:
A toggle for dark mode, allowing users to switch between light and dark themes.

5. Shopping Cart:
A shopping cart feature with an indicator showing the number of items, including an "Order" button to proceed with the purchase.

6. Animated Transitions:
Smooth animated transitions for elements like the search bar and dropdown menus, providing an enhanced user experience.

7. Accessibility:
Implemented accessibility best practices, including keyboard navigation and ARIA attributes.

8.Search Functionality:
An intuitive search bar allowing users to quickly find products.

Technologies Used:

-> React.js: For building the user interface components.
-> Tailwind CSS: For styling and responsive design.
-> React Icons: For iconography used across the website.
-> AOS (Animate on Scroll): For smooth scroll animations.

Project Structure :

-> /src/components: Contains all the reusable components like Navbar, Footer, Product Cards, etc.
-> /src/pages: Contains different pages of the website like Home, Product Listing, and Cart.
-> /src/styles: Custom Tailwind CSS configurations and global styles.
-> /src/assets: Images, icons, and other static resources.

Functionalities

1.Navigation Bar:
  Contains links to various product categories and a dropdown menu for trending products.

2. Search Bar:
  Expands on focus, allowing users to search for products. Integrated with a search icon for better UX.

3. Product Display:
  Products are displayed in a grid layout, with cards showing product images, names, and prices.

4. Add to Cart:
  Users can add products to their cart directly from the product cards.

5. Cart Overview:
  A brief overview of the cart, displaying the number of items and the total price, with a link to the checkout page.

6.Dark Mode Toggle:
  Allows users to switch between light and dark themes, with the preference saved in local storage.
