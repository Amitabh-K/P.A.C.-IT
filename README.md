[![HitCount](http://hits.dwyl.com/Amitabh-K/PAC-IT-Buy-N-Sell.svg)](http://hits.dwyl.com/Amitabh-K/PAC-IT-Buy-N-Sell)

# PACT IT Buy & Sell
 * **MVC architectural pattern** 
    * Sequelize  ORM (MySQL) as database (MODEL)
    * HTML and Bootstrap  at Front end secured by PassportJS (VIEW)
    * NodeJS and Express at backend (CONTROLLER)
* App to allow users to sell out to, or buy from other users 
* Thus, in this app the seller posts items to sell on the PAC IT website
* Buyer  selects an item to buy and for 
* Once an item has been sold, the item will not be available for  other users
* Incorporated Login Authentication which allows users to login before the selling products



![demo](/public/images/pac.gif)

## Using the Project

Try the project  [project link](https://pac-it-buy-sell.herokuapp.com/prods/)!

### Testing the application locally:
1. Please ensure node.js is install, node.js is required to install packages from NPM. You can download the program at:

    https://nodejs.org/en/download/


2. In your terminal navigate to your specified folder, type the following to install all required packages listed in package.json:
    ```
    npm install
    ```

3. Create a SQL database with the name "pacit_db". For example in MySQL:
    ```
    CREATE DATABASE pactit_db;
    ```

4. Create a ".env" file with the following information and update the "<>" with your SQL server information.
    ```
    SEQUELIZE_USER=<root>
    SEQUELIZE_PASSWORD=<>
    SEQUELIZE_HOST=<localhost>
    ```

5. Run the server by entering the following in your terminal.
    ```
    node server.js
    ```

## Built With

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Mark up language used for structuring pages. 
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Stylesheet language used to describe presentation of pages.
* [Heroku](https://www.heroku.com/)- Cloud platform which builds databases and websites deployed online. 
* [Javascript](https://www.javascript.com/) - The scripting language used to manipulate the DOM. 
* [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/) - The web framework used for styling. 
* [jQuery](http://jquery.com/) - Javascript library for DOM and CSS manipulation.
* [Sequelize](http://docs.sequelizejs.com/) - Promise based ORM for Node that supports MySQL interactivity.
* [Node](https://nodejs.org/en) - Javascript run-time environment that exectues server side code.
* [Express](https://www.npmjs.com/package/express) - Node package used as middleware to create routes.
* [Body-Parser](https://www.npmjs.com/package/body-parser) - Node package used as middleware to extract entire body portion of an incoming request.
* [Dotenv](https://www.npmjs.com/package/dotenv) - Node package used as middlewares to keep passwords and other sensitive data from being uploaded and shared on the web through github. 
* [Passport](https://www.npmjs.com/package/passport) - Node package used as middleware for user authentication by hashing passwords. 
* [Bcrypt](https://www.npmjs.com/package/bcrypt) - Node package used as middleware with Node and passport package for user authentication and password decryption. 
* [MySql](https://www.mysql.com/) - Structured Query Language is a relational database management system used for storing data.


## Database Design:


![demo](/public/images/sql.png)


## Built and Maintained by:


* **Philip Ng**  - [Philip Ng](https://github.com/RED-NG)
* **Cherechi**  - [Cherechi](https://github.com/cherechic)
* **Amitabh Kumar**  - [Amitabh Kumar](https://github.com/Amitabh-K)


## Buy Sell & Authentication:

![demo](/public/images/buy.png)


## Cart Admin & Exit:


![demo](/public/images/sell.png)


## Wireframe:

![demo](/public/images/wireframe.png)

## Success Criteria:


![demo](/public/images/sucess.jpg)


## Acknowledgments

* **Ali MaqSood** 
* **David Bland**


