# Lighting Systems REST API Description

## Introduction

With the Lighting Systems REST API, you can:

-   create a new lighting system and all its elements, then set their respective properties,
-   upload a packed lighting system, then add/remove or edit its elements or properties,
-   download the lighting system as a file once the lighting system and its elements are created and their properties are set.

To use Lighting Systems REST API, you have to install the AVxcelerate Sensors package.

To operate Lighting Systems REST API uses TCP port 5127.

To access the Lighting Systems REST API, start the server using the script provided in the *Lighting\_System\_Creation\_API* folder:

-   on Windows: `lighting-systems-api.ps1`
-   on Linux: `lighting-systems-api.sh`

An interactive version of the API documentation, with a Swagger interface, is available when running the script with the \`start-doc\` argument.

The **REFERENCE DOCUMENTATION** provided on the Developer Portal is not testable.

## Resources

In AVxcelerate Sensors Simulator, a lighting system defines the ego vehicle's lightings which are rendered in camera simulation outputs.

A lighting system is composed of:

-   projectors, usually 2 \(front right and front left\)
-   one or several modules in each projector
-   one or several lamps in each module

For more information about the Lighting System elements and their properties, refer to the **Advanced Lighting System** chapter in AVxcelerate Sensors Simulator User's Guide.

In Lighting Systems REST API, a lighting system, as well as each element that it includes, has a unique identifier that is automatically generated and not editable. To read or update the properties of an element and to delete an element, the required input parameters are the element's identifier and the identifier of all its predecessors. For example, to update a lamp's properties, the required input parameters are the lighting system identifier, the projector identifier, the module identifier and the lamp identifier. To create a new element, the required input parameters are the identifier of all its predecessors. For example, to create a new lamp, the required input parameters are the lighting system identifier, the projector identifier and the module identifier.

**Important Note**: The Lighting Systems REST API is a non-persistent service. Any data created or updated via REST calls is lost as soon as the service is stopped. To save your work, always download a packed version of the created or edited lighting system\(s\) before stopping the service.

## Platform overview

Creating advanced Lighting Systems is one of the steps needed to prepare a sensor simulation to be run in AVxcelerate Sensors Simulator.

Once created, an advanced Lighting System can be downloaded as a packed file \(.lightingsystemx\) so that it can be set as a resource for simulation in AVxcelerate Sensors Simulator.

![](images/Lighting_Systems_API.png)

Using Lighting Systems REST API, you can develop applications for batch creation and management of advanced Lighting Systems.

## Requests

The easiest way to send API requests is using the Swagger UI interactive documentation, however you can also use Curl or Postman.

Here are some request examples.

**GET request**

To list all the Lighting Systems:

Curl

```
curl -X 'GET' \
  'http://localhost:5126/avx-lightingsystem/v1/lightingsystems' \
  -H 'accept: application/json'
```

Postman

**GET** `http://localhost:5126/avx-lightingsystem/v1/lightingsystems`

**POST request**

To create a new empty Lighting System:

Curl

```
curl -X 'POST' \
  'http://localhost:5126/avx-lightingsystem/v1/lightingsystems' \
  -H 'accept: application/json' \
  -d ''
```

Postman

**POST** `http://localhost:5126/avx-lightingsystem/v1/lightingsystems`

**PATCH request**

To modify the name of a Lighting System:

Curl

```
curl -X 'PATCH' \
  'http://localhost:5126/avx-lightingsystem/v1/lightingsystems/a2d588b2-7ff4-4f99-a6d8-acac8b383790' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json-patch+json' \
  -d '{
  "name": "new LS name"
}'
```

Postman

**PATCH** `http://localhost:5126/avx-lightingsystem/v1/lightingsystems/a2d588b2-7ff4-4f99-a6d8-acac8b383790`

In the request body, select **Raw \> json**, then define the name, for example:

```
{ 
    "name": "new LS name"
}
```

**DELETE request**

To delete a Lighting System:

Curl

```
curl -X 'DELETE' \
  'http://localhost:5126/avx-lightingsystem/v1/lightingsystems/2bbfca3b-356c-46bc-8ade-64ce2ad2a59a' \
  -H 'accept: application/json'
```

Postman

**DELETE** `http://localhost:5126/avx-lightingsystem/v1/lightingsystems/2bbfca3b-356c-46bc-8ade-64ce2ad2a59a`

## Responses

The **REFERENCE DOCUMENTATION** provides response samples in json format for each endpoint.

Here are the possible response types:

|Response|Description|
|--------|-----------|
|`200 Success`|Success with or without response body.|
|`400 Bad Request`| |
|`404 Not Found`| |
|`Default Error`| |

