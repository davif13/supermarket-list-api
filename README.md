# SuperMarket List API (Back-End)

## Intro

This is an API created using Node.js, Express and Mongoose to connect to a MongoDB Database.
The main goal is to create an application to manage a supermarket list.

# Documentation:

Use Insomnia to import the file below:
https://github.com/davif13/supermarket-list-api/blob/main/insomnia_doc.json

## Technologies

- Node.js
- Express
- Mongoose
- MongoDB
- Nodemon

## Requirements

- Node.js (https://nodejs.org)
- MongoDB instance running:
  Ex: Running with docker

```
docker run --name supermarket-list -p 27017:27017 -d mongo
```

## Steps to run this project

1. Clone the project

```
git clone https://github.com/davif13/supermarket-list-api
```

2. Navigate to project folder and install dependencies

```
cd wallet-app-backend
npm install
```

4. Run the API

```
npm run start:dev
```
