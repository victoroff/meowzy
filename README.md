Cats API

This is the documentation for the Cats API.

API Definition
OpenAPI Version: 3.0.0
Title: Cats API
Version: 1.0.0
Server URL: http://localhost:6360
Global Middlewares
CORS middleware is used to allow cross-origin requests.
Express JSON middleware is used to parse JSON request bodies.
API Documentation
API documentation is available at the following endpoint:

Endpoint: /api-docs
Documentation: Swagger UI
Swagger Spec: OpenAPI 3.0
Routes
The Cats API provides the following routes:

/cats: Handles requests related to cats.
Server Setup
The server is set up to listen on the specified port and URL.

Port: 6360
URL: http://localhost
If the NODE_ENV environment variable is not set to 'test', the server will start and the following message will be displayed:

