## About The Project
This is an application in which people can save their score. The score list is sortable by player name as well as scores (from highest to lowest).

## Built Using
This application was built using following stacks:

- [React](https://reactjs.org/)
- [UIkit](https://getuikit.com/)
- [Node.js](https://nodejs.org/en)
- [mLab](https://mlab.com)
- [Express.js](https://expressjs.com)

[Ant Design](https://ant.design/), [moment.js](https://momentjs.com/) and [axios](https://github.com/axios/axios) were also used to built this application.

## Prerequisites
Make sure you have installed all of the following prerequisites on your computer:

- Node.js - [Download and Install Node.js](https://nodejs.org/en/).
- Node Package Manager (NPM) - [npm package manager](https://www.npmjs.com/get-npm).

You also have to register in the following sites to get an API and to run the backend. 
- mLab - We've used [mLab](https://www.mlab.com/) to store data.

## App Installation

#### Backend Installation

1. Create a remote storage in mLab from [here](https://mlab.com/create/wizard#PlanType-Provider).
2. Clone the repository.

Write below command in command line to clone the repository.

```sh
git clone https://github.com/ujstha/scores-board.git
```

3. After cloning the repository, create .env file on backend directory and provide following credentials: 

```sh
- DB_URI=YOUR_MLAB_DB_URI
```
After providing credentials in `.env` file, close and save the file.

4. Now run the following command in backend directory to install the packages that are in `package.json` file: 

```sh
npm install
```

5. Now run the following command in backend directory to start the backend.

```sh
npm start
```
Backend will run on port 5000. <br />
The base URL of an API will be [http://localhost:5000/api/scores](http://localhost:5000/api/scores). <br />
I have also deployed my backend in heroku. The API URL is [https://scores-board.herokuapp.com/api/scores](https://scores-board.herokuapp.com/api/scores).

#### Client Installation

6. Run the following commands in client directory to install the packages that are in package.json file:

```sh
npm install
```

7. When the installation is completed, run the following command in client directory to start the client app.

```sh
npm start
```

#### Changes to make if backend is running on `localhost`
If you wish to use run backend locally. Then, go to following directory and open ` config.js ` file.
### `client/src/config.js`

and, replace the code on `line 2` with following code. Save and run client.

```JS
//export const API_BASE_URL = "https://scores-board.herokuapp.com/api/scores";
export const API_BASE_URL = "http://localhost:5000/api/scores";
```

## App Demo Link `for web view`

[https://scores-board.netlify.com/](https://scores-board.netlify.com/)


## License

Distributed under the MIT License. See `LICENSE` for more information.


