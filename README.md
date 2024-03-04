<img src="./src/assets/wflogo.png" style="width: 50px, heigth:50px">

# WOMEN\_\_FEELS

## 💻 Full Stack Capstone Project

Woman's Feel is more than just an online art gallery; it is a celebration of women in their many facets, a journey through the works and stories of the extraordinary artists who have contributed significantly to art and society.
Woman’s Feel is a refined online platform dedicated exclusively to showcasing and promoting women artists in the art world. Our web app offers an engaging and interactive experience, with advanced features for both regular users and special users such as administrators and curators.
This application was developed using **ReactJS + Redux** for the front end part, **Java Spring Boot** for the back end part and **PostgreSQL** for data storage.

## 📋 Functionality

- Display the Artist list and their detail and art work. 👩🏼‍🎨
- Display, blog and you have a possibility to comment the blog. If you are a logged user you can modify and delete the comment. 📝
- Displays, events and exhibitions you can read more about and if you are interested you can purchase tickets using stripe checkout. 🎨 🏷️
- Create a new Admin user or Curator with **JWT token**. 🔐
- The Admin user can create, modify or delete every section in the site (Artists, works, blogs events or exhibitions). 🤖
- The curator user can send a request to admin to add new artist or work or exhibition and after the Admin can accept the request end post the new element.

## ⚙️ How to install

This project was developed using **React v.18.2.0** and **Vite v.5.0.8**

1. Download this project from **GitHub** and clone it on your PC
2. Download backend project from [GitHub Repository](https://github.com/plmcst96/BE-ArtGallery) and clone it on your PC:
   - Open backend project and create an `env.properties` file at the same level of `env.example` file
   - Copy the content of `env.example` file in `env.properties` file and fill in the fields with your data (server port used id 3001)
   - To use this project, it's necessary have a Cloudinary account and Stripe account
   - Run the project
     -- To view API documentation, import the `api_doc.yaml` file into Postman --
3. Open frontend project and open a terminal:

Run:

```bash
npm install
```

```bash
npm run dev
```

5. Once the application is started, you can access it in your browers at --> [http://localhost:5173/](http://localhost:5173/)

## 🖊️ Author

Cristina Palmisani 👩🏼‍🎨👩🏽‍💻

🧑‍💻 [LinkedIn](https://www.linkedin.com/in/cristina-palmisani-fullstack-developer/)
