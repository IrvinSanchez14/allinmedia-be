# All in Media BE
How to run this project

## Steps

- clone the repository
- move to the porject `cd allinmedia-be`
- run `npm install` we use the node version `18.18.0`
- run `npm run start` to create the `dist` folder
- run `docker-compose up --build` to create the database `sqlite`
- run `npm run dev` if you want to see the changes in real time

## Stucture API

the stucture of api is the next 

- `URL:PORT/api`
    - `/task` (GET)
    - `/task` (POST)
    - `/task/:id` (PATH)
    - `/task/:id` (DELETE)


