# MERN-MVC-GEN

- A helper toolkit for fast MERN MVC development. Easily generate controllers and integrate authentication functions like signup and signin and also auth and Image Upload Middlewares.

## 📦 Installation

### Install via npm:

```bash

npm install mern-mvc-gen

```

## IMPORTANT 

1. in Signup function required feilds are unique fields in Your Model
2. You must need to create frontend veriables as same as in Your Model
(if not got errors)


## 🛠️ Features

- Lightweight and beginner-friendly
- Designed for MVC pattern in MERN applications

## Function

### SignUp

- Password Hash using `bcrypt`

### SignIn

- Check Password using `bcrypt`
- build-in authentication using `jwt` (`jsonwebtokens`)

### AuthMiddleware

- Check the authentication before access the route
- must provide a login token for this 

### ImageUpload Middleware

- helps to upload images in Project

## Indetails Functions

### Signup 

- Automatically extracts required fields from your Mongoose model
- Checks for existing unique values
- Validates request body
- Hashes password before saving

### Signin

- Verifies email and password
- Returns a JWT token with user ID and role if authentication is successful


### AuthMiddleware

- Must need login token to run this fucntion

### ImageUpload Middleware

- image uploading (jpeg, png, gif) only accept

## 🔐 Security Practices

- Passwords hashed using bcrypt
- Tokens signed with jsonwebtoken and environment-based secret keys
- Validates required fields and handles duplicate entries


## Versioning

### 1.0.0 - 27 March 2025

- Initial release
- Develop SignUp and Sigin Functions

### 2.0.0 - 01 April 2025

- 2nd release
- Develop Auth and ImageUpload Middleware


## Common Limitations

- ImageUpload Middleware (Following image extension only can upload with this middelware)
- - jpeg
- - png
- - gif

## 🤝 Contributing

- Contributions are welcome! Please feel free to open issues or submit pull requests to improve this package.

## ScreenShorts

1. Normal SignUp

<img src='https://github.com/BackendExpert/mern-mvc-gen/blob/master/imgs/signup1.PNG'>
<img src='https://github.com/BackendExpert/mern-mvc-gen/blob/master/imgs/signup2.PNG'>

2. Using This Npm Package

<img src='https://github.com/BackendExpert/mern-mvc-gen/blob/master/imgs/signup3.PNG'>

- According to SignUp("User") mean "User" is Model Name

3. Auth and ImageUpload Middelware

<img src='https://github.com/BackendExpert/mern-mvc-gen/blob/master/imgs/imageuploadandauthmiddle.PNG'>

## 👨‍💻 Author

Name: Jehan Weerasuriya

GitHub: [BackendExpert](https://github.com/BackendExpert)

NPM: [JehanKandy](https://www.npmjs.com/~jehankandy)

Portfolio: [JehanWeerasuriya](https://jehanweerasuriya.vercel.app/)