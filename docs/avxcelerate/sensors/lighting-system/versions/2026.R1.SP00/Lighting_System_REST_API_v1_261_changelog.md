# Changelog

## v1 2026 R1

Here are the changes introduced in the Lighting System API v1 released in 2026 R1 compared to v1 released in 2024 R2.

[Non-breaking change] The following new methods have been added to configure a pixel beam:

-  **GET /avx-lightingsystem/v1/lightingsystems/{lightingSystemIdentifier}/projectors/{projectorIdentifier}/modules/{moduleIdentifier}/pixelbeam** to list the pixel beam properties configured for the module.
-  **PATCH /avx-lightingsystem/v1/lightingsystems/{lightingSystemIdentifier}/projectors/{projectorIdentifier}/modules/{moduleIdentifier}/pixelbeam** to configure a pixel beam for the module.

[Breaking change] The name of the property required in the request body of the **POST /avx-lightingsystem/v1/lightingsystems/packed** method has changed: it is now `file` (multipart/form-data) instead of `fileName` (multipart/form-data).

## v1 2024 R2

Here are the changes introduced in the Lighting System API v1 released in 2024 R2 compared to v1 released in 2024 R1.

The following new methods have been added to manage tags associated with lamps.

- **POST /avx-lightingsystem/v1/lightingsystems/{lightingSystemIdentifier}/projectors/{projectorIdentifier}/modules/{moduleIdentifier}/lamps/{lampIdentifier}/tags/{tagIdentifier}** to add a tag in a lamp.
- **POST/avx-lightingsystem/v1/lightingsystems/{lightingSystemIdentifier}/projectors/{projectorIdentifier}/modules/{moduleIdentifier}/lamps/{lampIdentifier}/addmultipletags** to add several tags in a lamp.
- **GET /avx-lightingsystem/v1/lightingsystems/{lightingSystemIdentifier}/projectors/{projectorIdentifier}/modules/{moduleIdentifier}/lamps/{lampIdentifier}/tags** to list of tags in a lamp.
- **DELETE /avx-lightingsystem/v1/lightingsystems/{lightingSystemIdentifier}/projectors/{projectorIdentifier}/modules/{moduleIdentifier}/lamps/{lampIdentifier}/tags/{tagIdentifier}** to remove a tag in a lamp.
- **DELETE /avx-lightingsystem/v1/lightingsystems/{lightingSystemIdentifier}/projectors/{projectorIdentifier}/modules/{moduleIdentifier}/lamps/{lampIdentifier}/tags/removemultipletags** to remove several tags in a lamp.

The new *tags* property (array of strings) has been added to the **Lamp** schema.