The Sensor Layouts REST API v1 is compatible with 2022 R1 and later versions.

The Lighting Systems REST API allows you to create, update and manage advanced Lighting Systems.

In Ansys AVxcelerate Sensors Simulator, a lighting system defines the ego vehicle's lightings which are rendered in camera simulation outputs.

A lighting system is composed of:

- projectors, usually 2 (front right and front left)
- one or several modules in each projector,
- one or several lamps in each module.
 
  For more information about the Lighting System elements and their properties, refer to the **Advanced Lighting System** chapter in AVxcelerate Sensors Simulator User's Guide.

With the Lighting Systems REST API you can:

- create a new lighting system, all its elements and set their respective properties,
- upload a packed lighting system, then add/remove or edit its elements or properties,
- download the lighting system as a file once the lighting system and its elements created and properties set.

  **Note**: In this API, a lighting system, as well as each element that it includes has a unique identifier which is automatically generated and not editable.
  To read or update the properties of an element and to delete an element, the required input parameters are the element's identifier and the identifier of all its predecessors. For example, to update a lamp's properties, the required input parameters are: the lighting system identifier, the projector identifier, the module identifier and the lamp identifier.        
  To create a new element, the required input parameters are the identifier of all its predecessors. For example, to create a new lamp, the required input parameters are: the lighting system identifier, the projector identifier and the module identifier.

To access the Lighting Systems REST API, start the server using the script provided in the *Lighting_System_Creation_API* folder:

- on Windows: `lighting-systems-api.ps1` 
- on Linux: `lighting-systems-api.sh` 

An interactive version of the API documentation, with a Swagger interface, is available when running the script with the `start-doc` argument. 

**Important Note**: The Lighting Systems Creation REST API is a non-persistent service. Any data created or updated via REST calls is lost as soon as the service is stopped. To save your work, always download a packed version of the created or edited lighting system(s) before stopping the service.