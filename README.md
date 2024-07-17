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

#### Salespeople

| Action                        | Method | URL                                           |
|-------------------------------|--------|-----------------------------------------------|
| List all salespeople          | GET    | http://localhost:8090/api/salespeople/        |
| Create a new salesperson      | POST   | http://localhost:8090/api/salespeople/        |
| Delete a specific salesperson | DELETE | http://localhost:8090/api/salespeople/int:pk/ |

##### List all salespeople:

Returns a dictionary with one key ("salespeople"), whose value is a list of all salesperson objects in the database.

Each salesperson will be an object containing four keys ("first_name", "last_name", and "employee_id", and "id"), with the "employee_id" and "id" values being unique.

E.g. (if there was only one salesperson in the database):

{ <br>
    "salespeople": [ <br>
        { <br>
            "first_name": string, <br>
            "last_name": string, <br>
            "employee_id": string, <br>
            "id": number <br>
        } <br>
    ] <br>
} <br>

##### Create a new salesperson:

Creates a new salesperson object, and returns the details of the salesperson object that was created.

Each salesperson will be an object containing four keys ("first_name", "last_name", and "employee_id", and "id"), with the "employee_id" and "id" values being unique to each salesperson.

The body of the POST request should follow this structure, and the data returned will also follow this structure:

{ <br>
    "salespeople": [ <br>
        { <br>
            "first_name": string, <br>
            "last_name": string, <br>
            "employee_id": string, <br>
            "id": number <br>
        } <br>
    ] <br>
} <br>

##### Delete a salesperson:

Deletes a specific salesperson (as specified by the int:pk) from the database . The return value will be a dictionary containing a message of success or failure.

If the salesperson was successfully deleted, the return will be:

{ "deleted": true }

If the salesperson was not successfully deleted, the return will be:

{ "deleted": false }




#### Customers

| Action                        | Method | URL                                           |
|-------------------------------|--------|-----------------------------------------------|
| List all customers            | GET    | http://localhost:8090/api/customers/          |
| Create a new customer         | POST   | http://localhost:8090/api/customers/          |
| Delete a specific customer    | DELETE | hhttp://localhost:8090/api/customers/int:pk/  |

##### List all customers:

Returns a dictionary with one key ("customers"), whose value is a list of all customer objects in the database.

Each customer will be an object containing five keys ("first_name", "last_name", and "address", "phone_number", and "id"). The "address", "phone_number", and "id" values willl be unique to each customer.

E.g. (if there was only one customer in the database):

{<br>
    "customers": [ <br>
        { <br>
            "first_name": string, <br>
            "last_name": string, <br>
            "address": string, <br>
            "phone_number": string, <br>
            "id": number <br>
        } <br>
    ] <br>
} <br>

##### Create a new customer:

Creates a new customer object, and returns the details of the customer object that was created.

Each customer will be an object containing five keys ("first_name", "last_name", and "address", "phone_number", and "id"). The "address", "phone_number", and "id" values willl be unique to each customer.

The body of the POST request should follow this structure, and the data returned will also follow this structure:

{<br>
    "customers": [ <br>
        { <br>
            "first_name": string, <br>
            "last_name": string, <br>
            "address": string, <br>
            "phone_number": string, <br>
            "id": number <br>
        } <br>
    ] <br>
} <br>

##### Delete a customer:

Deletes a specific customer (as specified by the int:pk) from the database. The return value will be a dictionary containing a message of success or failure.

If the customer was successfully deleted, the return will be:

{ "deleted": true }

If the customer was not successfully deleted, the return will be:

{ "deleted": false }




#### Sales

| Action                        | Method | URL                                           |
|-------------------------------|--------|-----------------------------------------------|
| List all sales                | GET    | http://localhost:8090/api/sales/              |
| Create a sale                 | POST   | http://localhost:8090/api/sales/              |
| Delete a specific sale        | DELETE | hhttp://localhost:8090/api/sales/int:pk/      |

##### List all sales:

Returns a dictionary with one key ("sales"), whose value is a list of all sales objects in the database.

Each sale will be an object containing five keys ("price", "automobile", and "salesperson", "customer", and "id").

The "automobile", "salesperson", and "customer" properties are foreign keys to their respective models, and the data will return the associated object of each for the specific sale.

E.g. (if there was only one sale in the database):

{<br>
    "sales": [ <br>
        "price": number,<br>
        "automobile": {<br>
            "vin": string,<br>
            "sold": boolean<br>
        },<br>
        "salesperson": {<br>
            "first_name": string,<br>
            "last_name": string,<br>
            "employee_id": string,<br>
            "id": number<br>
        },<br>
        "customer": {<br>
            "first_name": string,<br>
            "last_name": string,<br>
            "address": string,<br>
            "phone_number": string,<br>
            "id": number<br>
        },<br>
        "id": number<br>
    ]<br>
},<br>

##### Create a new sale:

Creates a new sale object, and returns the details of the sale object that was created.

Each sale will be an object containing five keys ("price", "automobile", and "salesperson", "customer", and "id").

The "automobile", "salesperson", and "customer" properties are foreign keys to their respective models, and the data will return the associated object of each for the specific sale.

The body of the POST request should follow this structure, with the automobile string containing the unique "vin" for the associated automobile, and the numbers for salesperson and customer being the ids of the associated salesperson and customer (respectively):

{<br>
	"automobile": string, <br>
	"salesperson": number, <br>
	"customer": number, <br>
	"price": number <br>
}<br>


The data returned will also follow this structure:

{<br>
    "sales": [ <br>
        "price": number,<br>
        "automobile": {<br>
            "vin": string,<br>
            "sold": boolean<br>
        },<br>
        "salesperson": {<br>
            "first_name": string,<br>
            "last_name": string,<br>
            "employee_id": string,<br>
            "id": number<br>
        },<br>
        "customer": {<br>
            "first_name": string,<br>
            "last_name": string,<br>
            "address": string,<br>
            "phone_number": string,<br>
            "id": number<br>
        },<br>
        "id": number<br>
    ]<br>
},<br>

##### Delete a sale:

Deletes a specific sale (as specified by the int:pk) from the database. The return value will be a dictionary containing a message of success or failure.

If the sale was successfully deleted, the return will be:

{ "deleted": true }

If the sale was not successfully deleted, the return will be:

{ "deleted": false }



### Services Microservice

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
