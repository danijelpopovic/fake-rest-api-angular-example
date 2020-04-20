# fake-rest-api


[MicroENV](https://microenv.com)

Example of MicroENV - fake REST API:
Integration service to angular web application

Fake REST API service:
- Get all users (GET) - https://app.microenv.com/backend/key/014546ad252a5d83568908/rest/users/
- Get user by ID (GET) - https://app.microenv.com/backend/key/014546ad252a5d83568908/rest/users/1
- Update User (PUT) - https://app.microenv.com/backend/key/014546ad252a5d83568908/rest/users/1
- Create User (POST) - https://app.microenv.com/backend/key/014546ad252a5d83568908/rest/users/
- Delete User (DELETE) - https://app.microenv.com/backend/key/014546ad252a5d83568908/rest/users/1
- Auth (POST) - https://app.microenv.com/backend/key/014546ad252a5d83568908/rest/token/generate-token

1. Clone git repository
2. Execute npm install in local repo folder
3. Execute command for run: sudo npm start

Setup of URL: /src/app/service/api.service.ts