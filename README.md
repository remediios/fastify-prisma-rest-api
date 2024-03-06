# Fastify-Prisma-Rest-API

## Project Overview

This project is a boilerplate codebase for building a RESTful API using Fastify, Prisma, Zod, and TypeScript. This project includes user and product management endpoints, authentication, request and response validation, and Swagger documentation.

<img width="1920" alt="postman-api" src="https://github.com/remediios/fastify-prisma-rest-api/assets/60504347/84fd086c-f699-4c72-b474-52d6ea787ada">

## Technologies Used

1. **Fastify - Web Server:** Employed for its exceptional speed and low overhead.
2. **Prisma - Database ORM:** Serves as the Database Object-Relational Mapping (ORM) tool.
3. **Zod - Request and Response Validation:** Integrated for comprehensive validation of requests and responses.
4. **Swagger - API Docs:** Utilized for automatically generating comprehensive API documentation.
5. **TypeScript :** Enhances code quality by introducing static typing and other advanced features.

## Prerequisites

Before getting started with the project, ensure you have the following tools installed:

- **Postman:** Used for making API requests and testing the functionality of the endpoints.
- **Prisma Studio:** Essential for viewing and interacting with the data stored in the database.
- **PostgreSQL Database:** PostgreSQL as the database for this application.
- **Docker:** Used for containerization, including Docker Compose for running the PostgreSQL instance.


## Features

The project boasts the following features:

- **User Management:** Create a user, login, and list users.
- **Product Management:** Create a product and list products.
- **Authentication:** Implement secure JWT authentication mechanisms for user-related operations.
- **Request & Response Validation:** Zod is employed to validate incoming requests and ensure accurate and secure responses.
- **Swagger Docs:** Automatically generated API documentation using Swagger for easy reference.

## Installation

To get started with the project, follow the instructions below:

1. Clone the repository: `https://github.com/remediios/fastify-prisma-rest-api.git`
2. Navigate to the project directory: `cd fastify-prisma-rest-api`
3. Install the dependencies: `yarn install`

4. Create a `.env` file with the following credentials:

```env
# .env Example

# PostgreSQL Database URL
DATABASE_URL="postgresql://postgres:<yourDBPassword>@localhost:5432/fastify-prisma-rest-api?schema=public"

# JWT Secret for Authentication
JWT_SECRET="Your random JWT Secret up to your choice"
```
5. Check the `docker-compose.yml` file and change any properties you'd like, e.g. `POSTGRES_PASSWORD` for any of your choice. (it should match the `.env` Database URL password)
6. Start your Docker PostgreSQL container with `docker compose up -d` (-d to run in the background)

5. Push the Prisma schema to reflect on the PostgreSQL Database with `npx prisma db push` or `npx prisma migrate dev --name init` (for historical migration's records)

7. Run the application with `yarn dev`
8. Lastly, if needed, import the Postman collection file example `Fastify Prisma API.postman_collection.json` into your Postman environment to facilitate API testing.

After completing these steps, you should be able to run this project locally. If you encounter any issues or have any questions, please don't hesitate to reach out.



## Usage

After running the application, you can access it at `http://localhost:3000/documentation`. Explore the API using Postman, test the functionality, and refer to the Swagger documentation for endpoint details.

![swagger-docs](https://github.com/remediios/fastify-prisma-rest-api/assets/60504347/8af1e116-9d67-448a-a62d-171f189a4e7c)

## Contributing

Contributions to the project are more than welcome. Please submit a pull request with a detailed description of your changes.

## License

Fastify-Prisma-Rest-API is open-source software licensed under the [MIT License](LICENSE).

## Contact

For any questions or feedback, please reach out to `miguelremediioss@gmail.com`.
