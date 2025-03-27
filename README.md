# MERN-MVC-GEN

- A helper toolkit for fast MERN MVC development. Easily generate controllers and integrate authentication functions like signup and signin.

## 📦 Installation

### Install via npm:

```bash

npm install merngen

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


## Indetails Functions

### Signup 

- Automatically extracts required fields from your Mongoose model
- Checks for existing unique values
- Validates request body
- Hashes password before saving

### Signin

- Verifies email and password
- Returns a JWT token with user ID and role if authentication is successful


## 🔐 Security Practices

- Passwords hashed using bcrypt
- Tokens signed with jsonwebtoken and environment-based secret keys
- Validates required fields and handles duplicate entries


## Versioning

### 1.0.0 - 27 March 2025

- Initial release
- Develop SignUp and Sigin Functions

## 🤝 Contributing

- Contributions are welcome! Please feel free to open issues or submit pull requests to improve this package.


## 👨‍💻 Author

Name: Jehan Weerasuriya

GitHub: [BackendExpert](https://github.com/BackendExpert)

NPM: [JehanKandy](https://www.npmjs.com/~jehankandy)

Portfolio: [JehanWeerasuriya](https://jehanweerasuriya.vercel.app/)