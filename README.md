# CarCar

Team:

* Arielle Adams - Sales
* Yazan Salhani - Services

## How to Run this App

1. For and clone this repository to local computer
2. Run the following commands in your terminal, in the project directory:
    - docker volume create beta-data
    - docker-compose build
    - docker-compose up
 3. Open browser to localhost:5173

## Design

## API Documentation

### Sales Microservice

#### Salespeople Entity

| Action                        | Method | URL                                           | Explanation                                                                                                                                                                                               | Example                                                                                                                                                                                                         |
|-------------------------------|--------|-----------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| List all salespeople          | GET    | http://localhost:8090/api/salespeople/        | Returns an object with one key ("salespeople"), whose value is a an array containing all salespeople objects in the database.      The "employee_id" property of each salesperson object will be unique.  | E.g. (if there was one salesperson in database):         {   "salespeople": [       {         "first_name": string,         "last_name": string,         "employee_id": string,       "id": number      }   ] } |
| Create a new salesperson      | POST   | http://localhost:8090/api/salespeople/        |                                                                                                                                                                                                           |                                                                                                                                                                                                                 |
| Delete a specific salesperson | DELETE | http://localhost:8090/api/salespeople/int:pk/ |                                                                                                                                                                                                           |                                                                                                                                                                                                                 |


### Services Microservice

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
