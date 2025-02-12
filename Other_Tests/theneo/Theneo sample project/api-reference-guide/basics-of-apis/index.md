Theneo offers a comprehensive and flexible selection of API formats and collection types to meet diverse integration and development needs. Our platform supports various API formats, such as REST, SOAP, GraphQL, and Async APIs, each designed for specific use cases and requirements. We also provide compatibility with multiple API specification collections, ensuring smooth integration and an efficient development process.

### HTTP Methods

HTTP methods, or verbs, denote actions performed on resources. Theneo APIs support various HTTP methods:

*   **GET:** Retrieve a representation of a specific resource.
    
    *   Example: Retrieving transaction details.
        
*   **POST:** Submit data to create a new resource or trigger a state change.
    
    *   Example: Creating a new customer profile.
        
*   **PUT:** Replace all representations of a target resource with the provided payload.
    
    *   Example: Updating a subscription plan.
        
*   **DELETE:** Remove a specified resource.
    
    *   Example: Deleting a stored card.
        
*   **PATCH:** Apply partial modifications to a resource.
    
    *   Example: Changing the status of an existing order.
        

### Parameters

Parameters allow customization of API requests and responses. Theneo APIs support four types of parameters:

*   **Path Parameters:** Integral parts of the endpoint URL, identifying specific resources.
    
*   **Query Parameters:** Appended to the endpoint URL to filter or paginate results.
    
*   **Request Body Parameters:** Included in the request body, transmitting data to the API server.
    
*   **Response Body Parameters:** Represent data returned by the server in response to a request.
    

### HTTP Status Codes

HTTP status codes communicate the outcome of client requests. Theneo employs HTTP status codes categorized into the following classes:

*   **Success (200):** The request was successfully processed.
    
    *   Example: Successfully retrieved a resource or completed an action.
        
*   **400 (Bad Request):** The server could not understand the request due to invalid syntax.
    
    *   Example: Missing required parameters in the request.
        
*   **401 (Unauthorized):** Authentication is required and has failed or has not yet been provided.
    
    *   Example: Invalid or missing API key.
        
*   **402 (Request Failed):** The parameters were valid but the request failed.
    
    *   Example: Insufficient funds or expired credit card.
        
*   **403 (Forbidden):** The client does not have access rights to the content.
    
    *   Example: Attempting to access a resource without the necessary permissions.
        
*   **404 (Not Found):** The server can not find the requested resource.
    
    *   Example: Trying to access an endpoint that does not exist.