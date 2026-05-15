# Reference documentation

## asset_preparation_api/common/chunk.proto

This file describes the messages used for import/export.

### Chunk

A block of data.

Note: The recommended size is in the range 256kB to 1MB.

No data higher than 2GB can be handled.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `metadata` | [map Chunk-MetadataEntry](#chunk-metadataentry) | repeated |  |
| `bytes` | bytes |  |  |

### Chunk-MetadataEntry

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `key` | string |  |  |
| `value` | string |  |  |

## asset_preparation_api/common/common.proto

This file describes the messages used in several proto files.

### ColorHsv

Hsv value of a color.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `hue` | google.protobuf.DoubleValue |  | Hue <br>Unit: Degree<br>Range: [0,360] |
| `saturation` | google.protobuf.DoubleValue |  | Intensity <br>Range: [0,100] |
| `value` | google.protobuf.DoubleValue |  | Value <br>Range: [0,100] |

### ColorRgb

RGB value of a color.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `red` | google.protobuf.Int32Value |  | Value for the red component.<br>Range: [0,255] |
| `green` | google.protobuf.Int32Value |  | Value for the green component.<br>Range: [0,255] |
| `blue` | google.protobuf.Int32Value |  | Value for the blue component.<br>Range: [0,255] |

### Empty

An empty message used for none type.

### ConflictPolicy

The conflict policy to define what should be imported when there is any name conflict detected between objects from the environment or scene tree to import and the objects already existing on the server.

Note: Scene trees, light instances, nodes and material parts cannot have name conflicts.

| Name | Number | Description |
| ---- | ------ | ----------- |
| CONFLICT_POLICY_UNSPECIFIED | 0 | Unspecified conflict policy. |
| CONFLICT_POLICY_STOP | 1 | The import operation is canceled when there is a conflict with the server's objects.<br>Note: This is the default behavior when no policy is specified. |
| CONFLICT_POLICY_KEEP_EXISTING | 2 | When there is a conflict with the server's objects, the import operation continues without importing the conflicting objects. The already existing objects are used in the imported environment/scene tree. |
| CONFLICT_POLICY_OVERRIDE | 3 | When there is a conflict with the server's objects, the import operation continues and the objects from the imported environment/scene tree override the already existing objects. |
| CONFLICT_POLICY_KEEP_BOTH | 4 | When there is a conflict with the server's objects, the import operation continues and both conflicting objects are kept: the objects already existing remains on the server and the objects coming from the import operation are automatically renamed and used in the imported environment/scene tree. |

## asset_preparation_api/common/protection.proto

### Protection

Protection Service

This service is used to protect existing track or asset files.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Protect | [ProtectRequest](#protectrequest) | [ProtectResponse](#protectresponse) | Protects an existing track or asset file. |

## asset_preparation_api/common/protection_description.proto

### ProtectRequest

The information required to protect an existing track or asset file.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `path` | string |  | The path to the existing track or asset file to protect.<br>Note: The file extension must be either .track or .asset. |
|  </small> `output_path` | string | optional | The optional output path for the protected file.<br>If the output path is not defined, the protected file is placed next to the original file, with the same name and the .protected.track or <br>.protected.asset extension.<br>Note: The extension must be either .track or .asset. The path must point to a different location than the input path. |
| `overwrite_existing_output` | bool |  | Defines whether existing output file, if any, should be overwritten or not. |

### ProtectResponse

The response returned after protecting an existing track or asset file.

## asset_preparation_api/common/reset.proto

This file describes the service used to reset the server.

### Reset

Reset Preparation Service

This service is used to clear the server.

Note: Resetting the server removes from the server all the "in-memory" data, namely all the data imported or created, collections and identifiers.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Reset | .google.protobuf.Empty | [ResetResponse](#resetresponse) | Reset server, all collections and identifiers. |

## asset_preparation_api/common/reset_description.proto

This file describes the messages used to reset the server.

### ResetResponse

The information required to reset the server.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the reset operation. |

## asset_preparation_api/common/status.proto

This file describes the status messages used in several proto files.

### Status

A status message informing about the success of a request.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `code` | int32 |  | The status code. |
| `feedback_message` | string |  | The feedback message. |
| `level` | [Level](#level) |  | The severity level. |

### Level

The severity of the feedback on an operation.

| Name | Number | Description |
| ---- | ------ | ----------- |
| LEVEL_UNSPECIFIED | 0 | The severity is unspecified. |
| LEVEL_ERROR | 1 | The operation returned an error. |
| LEVEL_WARNING | 2 | The operation succeeded with warnings. |
| LEVEL_INFORMATION | 3 | The operation fully succeeded. |

## asset_preparation_api/common/tag.proto

This file describes the messages used to define tags.

### Properties

The properties of a tag.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `label` | google.protobuf.StringValue |  | Optional label.<br>Note: It can be added only for the tags with the following types:<br> BASIC_TYPE_PEDESTRIAN <br> BASIC_TYPE_VEHICLE <br> BASIC_TYPE_ANIMAL <br> BASIC_TYPE_STREET_LIGHT <br> BASIC_TYPE_ROAD_SIGN <br> BASIC_TYPE_SIMULATION_OBJECT <br> BASIC_TYPE_CUSTOM_OBJECT <br> BASIC_TYPE_ILLUMINANCE_SENSOR |
| `name` | google.protobuf.StringValue |  | The name of the custom tag.<br>Note: Needed only for the tags with the `BASIC_TYPE_CUSTOM_OBJECT` type. |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the wheel tag.<br>Note: Needed only for the tags with the `BASIC_TYPE_WHEEL` type.<br>Here is a convention for wheel identifier in AVX, when the vehicle has four wheels:<br>The front left wheel identifier must be 0.<br>The front right wheel identifier must be 1.<br>The rear left wheel identifier must be 2.<br>The rear right wheel identifier must be 3. |
| `position` | [SidePosition](#sideposition) |  | The position of the lighting element.<br>Note: Needed only for the tags with the `LIGHTING_TYPE_TURN_INDICATOR` and `LIGHTING_TYPE_DAYTIME_RUNNING_LIGHT` types. |
| `irradiance_map_identifier` | google.protobuf.Int32Value |  | Optional identifier of the irradiance map.<br>Note: It can be added only for the tags with the `BASIC_TYPE_VEHICLE` type. |

### Tag

The definition of a tag.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>tag_type</code></small> `basic_type` | [BasicType](#basictype) |  | Basic tag type. |
| <small><strong>oneof</strong> <code>tag_type</code></small> `lighting_type` | [LightingType](#lightingtype) |  | Lighting tag type. |
| `properties` | [Properties](#properties) |  | Properties of the tag. |

### TagIdentity

The identity of a tag.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>tag_type</code></small> `basic_type` | [BasicType](#basictype) |  | Basic tag type. |
| <small><strong>oneof</strong> <code>tag_type</code></small> `lighting_type` | [LightingType](#lightingtype) |  | Lighting tag type. |
| `name` | google.protobuf.StringValue |  | The name of the tag.<br>Note: Needed only for the tags with the `BASIC_TYPE_CUSTOM_OBJECT` type. |

### BasicType

Types for a basic element tag.

| Name | Number | Description |
| ---- | ------ | ----------- |
| BASIC_TYPE_UNSPECIFIED | 0 | The basic tag type is unspecified. |
| BASIC_TYPE_PEDESTRIAN | 1 | The element is tagged as a pedestrian. |
| BASIC_TYPE_VEHICLE | 2 | The element is tagged as a vehicle. |
| BASIC_TYPE_ANIMAL | 3 | The element is tagged as an animal. |
| BASIC_TYPE_STREET_LIGHT | 4 | The element is tagged as a street light. |
| BASIC_TYPE_ROAD_SIGN | 5 | The element is tagged as a road sign. |
| BASIC_TYPE_SIMULATION_OBJECT | 6 | The element is tagged as a simulation object. |
| BASIC_TYPE_CUSTOM_OBJECT | 7 | The element is tagged as a custom simulation object.<br>Note: If you want to tag a dynamic asset as a custom simulation object, you must add the custom tag first, then add a second asset tag, `BASIC_TYPE_VEHICLE`, `BASIC_TYPE_PEDESTRIAN` or `BASIC_TYPE_ANIMAL`, in this specific order. |
| BASIC_TYPE_VEHICLE_BODY | 8 | The element is tagged as a vehicle body. |
| BASIC_TYPE_SENSOR_REFERENTIAL | 9 | The element is tagged as the sensor referential of a vehicle. |
| BASIC_TYPE_LIGHTING_SYSTEM_REFERENTIAL | 10 | The element is tagged as the lighting system referential of a vehicle. |
| BASIC_TYPE_WHEEL | 11 | The element is tagged as a wheel of a vehicle. |
| BASIC_TYPE_STEERING_WHEEL | 12 | The element is tagged as the steering wheel of a vehicle. |
| BASIC_TYPE_ILLUMINANCE_SENSOR | 13 | The element is tagged as the illuminance sensor anchor node of a vehicle. |

### LightingType

Types for a lighting element tag.

| Name | Number | Description |
| ---- | ------ | ----------- |
| LIGHTING_TYPE_UNSPECIFIED | 0 | The lighting tag type is unspecified. |
| LIGHTING_TYPE_BRAKE_LIGHT | 1 | The lighting element is tagged as a brake light. |
| LIGHTING_TYPE_LOW_BEAM | 2 | The lighting element is tagged as a low beam. |
| LIGHTING_TYPE_HIGH_BEAM | 3 | The lighting element is tagged as a high beam. |
| LIGHTING_TYPE_TURN_INDICATOR | 4 | The lighting element is tagged as a turn indicator. |
| LIGHTING_TYPE_REAR_FOG_LIGHT | 5 | The lighting element is tagged as a rear fog light. |
| LIGHTING_TYPE_FRONT_FOG_LIGHT | 6 | The lighting element is tagged as a front fog light. |
| LIGHTING_TYPE_SIDE_LIGHT | 7 | The lighting element is tagged as a side light. |
| LIGHTING_TYPE_REAR_POSITION_LIGHT | 8 | The lighting element is tagged as a rear position light. |
| LIGHTING_TYPE_REVERSE_LIGHT | 9 | The lighting element is tagged as a reverse light. |
| LIGHTING_TYPE_LICENSE_PLATE_LIGHT | 10 | The lighting element is tagged as a license plate light. |
| LIGHTING_TYPE_DAYTIME_RUNNING_LIGHT | 11 | The lighting element is tagged as a daytime running light. |

### SidePosition

The position of the lighting element.

Note: Needed only for the tags with the `LIGHTING_TYPE_TURN_INDICATOR` and `LIGHTING_TYPE_DAYTIME_RUNNING_LIGHT` types.

| Name | Number | Description |
| ---- | ------ | ----------- |
| SIDE_POSITION_UNSPECIFIED | 0 | The position of the lighting element is unspecified. |
| SIDE_POSITION_LEFT | 1 | The lighting element is on the left side of the vehicle. |
| SIDE_POSITION_RIGHT | 2 | The lighting element is on the right side of the vehicle. |

## asset_preparation_api/directionalLight/directional_light.proto

This file describes the service used to create, edit and manage directional lights.

### DirectionalLightPreparation

Directional Light Preparation Service

This service is used to create, edit and manage directional lights.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateDirectionalLight | [CreateDirectionalLightRequest](#createdirectionallightrequest) | [CreateDirectionalLightResponse](#createdirectionallightresponse) | Creates a new directional light with an optional name, type and shadows.<br>Note: Names must be unique amongst directional lights.<br>Note: If unspecified, default values are used.<br>Returns the identifier of the created directional light. |
| GetDirectionalLight | [GetDirectionalLightRequest](#getdirectionallightrequest) | [GetDirectionalLightResponse](#getdirectionallightresponse) | Gets the properties of a directional light, given its identifier. <br>Returns the directional light properties. |
| ListDirectionalLights | .google.protobuf.Empty | [ListDirectionalLightsResponse](#listdirectionallightsresponse) | Lists all the created directional lights.<br>Returns the identifiers and names of the directional lights. |
| UpdateDirectionalLight | [UpdateDirectionalLightRequest](#updatedirectionallightrequest) | [UpdateDirectionalLightResponse](#updatedirectionallightresponse) | Edits the properties of a directional light, given its identifier.<br>Note: Names must be unique amongst directional lights. |
| DeleteDirectionalLight | [DeleteDirectionalLightRequest](#deletedirectionallightrequest) | [DeleteDirectionalLightResponse](#deletedirectionallightresponse) | Deletes a directional light, given its identifier. |
| CreateDirectionalLightState | [CreateDirectionalLightStateRequest](#createdirectionallightstaterequest) | [CreateDirectionalLightStateResponse](#createdirectionallightstateresponse) | Creates a new directional light state with optional properties.<br>Note: Names must be unique amongst sibling directional light states.<br>Note: "Default" name is reserved.<br>Note: If some properties are not specified, default values are used. <br>Returns the information about the created directional light state. |
| GetDirectionalLightState | [GetDirectionalLightStateRequest](#getdirectionallightstaterequest) | [GetDirectionalLightStateResponse](#getdirectionallightstateresponse) | Gets the properties of a directional light state, given the parent directional light identifier and the state name.<br>Returns the directional light state properties. |
| UpdateDirectionalLightState | [UpdateDirectionalLightStateRequest](#updatedirectionallightstaterequest) | [UpdateDirectionalLightStateResponse](#updatedirectionallightstateresponse) | Edits the properties of a state, given the parent directional light identifier and the state name.<br>Note: Names must be unique amongst sibling directional light states.<br>Note: "Default" name is reserved. |
| DeleteDirectionalLightState | [DeleteDirectionalLightStateRequest](#deletedirectionallightstaterequest) | [DeleteDirectionalLightStateResponse](#deletedirectionallightstateresponse) | Deletes a directional light state, given the parent directional light identifier and the state name. |

## asset_preparation_api/directionalLight/directional_light_description.proto

This file describes the messages used to create, edit and manage directional lights.

### BlackBody

Spectrum based on a black body.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `temperature` | google.protobuf.DoubleValue |  | The temperature of the black body.<br>Unit: Kelvin (K)<br>Range: [0,30000]<br>Default value: 5500 |

### CreateDirectionalLightRequest

The information required to create a directional light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `name` | google.protobuf.StringValue |  | The directional light name.<br>Note: Names must be unique amongst directional lights.<br>Note: If no name is defined, a default unique name is automatically set. |
| `properties` | [DirectionalLightProperties](#directionallightproperties) |  | The directional light properties. |

### CreateDirectionalLightResponse

The identifier of the created directional light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identity` | [DirectionalLightIdentity](#directionallightidentity) |  | The identity of the directional light.<br>Returns null in case of failure. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### CreateDirectionalLightStateRequest

The information required to create a directional light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The directional light identifier. |
| `state_name` | string |  | The state name.<br>Note: Names must be unique amongst sibling directional light states.<br>Note: "Default" name is reserved. |
| `base_state_name` | google.protobuf.StringValue |  | The name of an already existing state on which will be based the state to create.<br>Note: If not defined, the directional light properties are used. |
| `state_properties` | [DirectionalLightProperties](#directionallightproperties) |  | The state properties. |

### CreateDirectionalLightStateResponse

The response returned when creating a directional light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The directional light identifier. |
| `state_name` | string |  | The new state name. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### Custom

The properties of a custom directional light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `exitance` | google.protobuf.DoubleValue |  | The directional light exitance.<br>Unit: lm/m<sup>2</sup><br>Note: Must be positive.<br>Default value: 40000 |
| <small><strong>oneof</strong> <code>spectrum</code></small> `spectrum_library` | [SpectrumLibrary](#spectrumlibrary) |  | Spectrum based on a spectrum file.<br>Note: This is the default type of spectrum. |
| <small><strong>oneof</strong> <code>spectrum</code></small> `black_body` | [BlackBody](#blackbody) |  | Spectrum based on a black body. |
| <small><strong>oneof</strong> <code>spectrum</code></small> `monochromatic` | [Monochromatic](#monochromatic) |  | Monochromatic spectrum. |
| <small><strong>oneof</strong> <code>spectrum</code></small> `color_rgb` | [asset_preparation.v3.common.ColorRgb](#colorrgb) |  | Spectrum based on a RGB color. <br>Default value: (255,255,255) |
| <small><strong>oneof</strong> <code>spectrum</code></small> `color_hsv` | [asset_preparation.v3.common.ColorHsv](#colorhsv) |  | Spectrum based on an HSV color. <br>Default value: (0,0,100) |

### DeleteDirectionalLightRequest

The information required to delete a directional light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the directional light to delete. |

### DeleteDirectionalLightResponse

The response returned when deleting a directional light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DeleteDirectionalLightStateRequest

The information required to delete a directional light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The directional light identifier. |
| `state_name` | string |  | The name of the state to delete. |

### DeleteDirectionalLightStateResponse

The response returned when deleting a directional light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DirectionalLightIdentity

The full identity of a directional light, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The directional light identifier. |
| `name` | string |  | The directional light name. |

### DirectionalLightProperties

The properties of a directional light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>light</code></small> `sun` | [Sun](#sun) |  | Sun directional light.<br>Note: This is the default type of directional light. |
| <small><strong>oneof</strong> <code>light</code></small> `custom` | [Custom](#custom) |  | Custom directional light. |
| <small><strong>oneof</strong> <code>shadows</code></small> `no_shadow` | [asset_preparation.v3.common.Empty](#empty) |  | The directional light does not cast shadows. |
| <small><strong>oneof</strong> <code>shadows</code></small> `dynamic_accurate_shadows` | [DynamicAccurateShadows](#dynamicaccurateshadows) |  | The directional light produces shadows with Parallel-Split Shadow Maps with adaptive details.<br>Note: This is the default type of shadows. |

### DynamicAccurateShadows

The properties of dynamic accurate shadows.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `shadow_offset_ratio` | google.protobuf.DoubleValue |  | The shadow offset ratio.<br>Note: Must be above 0.00001.<br>Default value: 0.01 |
| `shadow_radius` | google.protobuf.DoubleValue |  | The shadow radius.<br>Note: Must be equal or superior to 0.<br>Default value: 0 |
| `softness` | google.protobuf.DoubleValue |  | The softness.<br>Range: [0,2]<br>Default value: 0 |
| `resolution` | google.protobuf.Int32Value |  | The resolution.<br>Range: [1,8]<br>Default value: 0 |
| `near_field_precision` | google.protobuf.DoubleValue |  | The near field precision.<br>Range: [0,1]<br>Default value: 0.99 |

### GetDirectionalLightRequest

The information required to examine a directional light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the directional light to examine. |

### GetDirectionalLightResponse

The information about a directional light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identity` | [DirectionalLightIdentity](#directionallightidentity) |  | The directional light identity. |
| `properties` | [DirectionalLightProperties](#directionallightproperties) |  | The directional light properties. |
| `state_names` | string | repeated | The names of the directional light states. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### GetDirectionalLightStateRequest

The information required to examine a state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the directional light. |
| `state_name` | string |  | The name of the state to examine. |

### GetDirectionalLightStateResponse

The information about a directional light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The identifier of the examined directional light. |
| `state_name` | string |  | The state name. |
| `state_properties` | [DirectionalLightProperties](#directionallightproperties) |  | The properties of the examined state. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the reading operation. |

### ListDirectionalLightsResponse

The identities of all directional lights in the collection.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `directional_lights` | [DirectionalLightIdentity](#directionallightidentity) | repeated | Directional light identities. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the listing operation. |

### Monochromatic

Monochromatic spectrum.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `wavelength` | google.protobuf.DoubleValue |  | The emission wavelength of the Spectrum.<br>Unit: nanometer (nm)<br>Range: [360,813]<br>Default value: 580 |

### SpectrumLibrary

Spectrum based on a spectrum file.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `spectrum_identifier` | google.protobuf.Int32Value |  | The identifier of the spectrum (created using the Resource service) referenced in the directional light.<br>Note: The spectrum reference can be removed by setting the value '-1'. |

### Sun

The properties of a sun directional light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `turbidity` | google.protobuf.DoubleValue |  | The sun turbidity.<br>Range: [2,9]<br>Default value: 3 |

### UpdateDirectionalLightRequest

The information required to update a directional light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the directional light to update. |
| `name` | google.protobuf.StringValue |  | The directional light name.<br>Note: Names must be unique amongst directional lights.<br>Note: If no name is defined, the name is not updated. |
| `properties` | [DirectionalLightProperties](#directionallightproperties) |  | The directional light properties.<br>Note: All the properties are optional. |

### UpdateDirectionalLightResponse

The response returned when updating a directional light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### UpdateDirectionalLightStateRequest

The information required to update a directional light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The directional light identifier. |
| `state_name` | string |  | The current name of the state. |
| `state_new_name` | google.protobuf.StringValue |  | The new name of the state.<br>Note: Names must be unique amongst sibling directional light states.<br>Note: "Default" name is reserved.<br>Note: If no name is defined, the name is not updated. |
| `state_properties` | [DirectionalLightProperties](#directionallightproperties) |  | The new state properties. |

### UpdateDirectionalLightStateResponse

The response returned when updating a directional light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `state_name` | string |  | The state name. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

## asset_preparation_api/environment/environment.proto

This file describes the service used to create, edit and manage environments.

### EnvironmentPreparation

Environment Preparation Service

This service is used to create, edit and manage environments.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateEnvironment | [CreateEnvironmentRequest](#createenvironmentrequest) | [CreateEnvironmentResponse](#createenvironmentresponse) | Creates a new environment with an optional given name.<br>Note: Names must be unique amongst environments.<br>Returns the identifier of the created environment. |
| GetEnvironment | [GetEnvironmentRequest](#getenvironmentrequest) | [GetEnvironmentResponse](#getenvironmentresponse) | Gets an environment properties, given its identifier.<br>Returns the environment properties. |
| ListEnvironments | .google.protobuf.Empty | [ListEnvironmentsResponse](#listenvironmentsresponse) | Lists all the created environments.<br>Returns the identifiers and names of the environments. |
| UpdateEnvironment | [UpdateEnvironmentRequest](#updateenvironmentrequest) | [UpdateEnvironmentResponse](#updateenvironmentresponse) | Edits the properties of an environment, given its identifier.<br>Note: Names must be unique amongst environments. |
| DeleteEnvironment | [DeleteEnvironmentRequest](#deleteenvironmentrequest) | [DeleteEnvironmentResponse](#deleteenvironmentresponse) | Deletes an environment, given its identifier. |
| PutEnvironmentFromTrackChunks | [.asset_preparation.v3.common.Chunk](#chunk) stream | [PutEnvironmentFromTrackResponse](#putenvironmentfromtrackresponse) | Creates a new environment on the server by uploading a track as a given stream of chunks containing the "AVX ConflictPolicy" metadata. <br>All dependencies are uploaded into corresponding services, depending on the given conflict policy.<br>Note: It is not possible to upload a track including an object in which several states have the same name, or including a geometry with several material parts with the same name. |
| PutEnvironmentFromTrackFile | [PutEnvironmentFromTrackFileRequest](#putenvironmentfromtrackfilerequest) | [PutEnvironmentFromTrackResponse](#putenvironmentfromtrackresponse) | Creates a new environment on the server by uploading a given track file. <br>All dependencies are uploaded into corresponding services, depending on the given conflict policy.<br>Note: It is not possible to upload a track including an object in which several states have the same name, or including a geometry with several material parts with the same name. |
| GetTrackChunks | [GetTrackChunksRequest](#gettrackchunksrequest) | [.asset_preparation.v3.common.Chunk](#chunk) stream | Packages the environment as a track and exports it as a byte stream.<br>Note: The last chunk of the stream provides the metadata "AVX Status Error" if an error occurred, "AVX Status Warning" or "AVX Status Info" if the export succeeded. |
| GetTrackFile | [GetTrackFileRequest](#gettrackfilerequest) | [GetTrackFileResponse](#gettrackfileresponse) | Packages the environment as a track and exports it as a .track file. |

## asset_preparation_api/environment/environment_description.proto

This file describes the messages used to create, edit and manage environments.

### CreateEnvironmentRequest

The information required to create an environment.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `name` | google.protobuf.StringValue |  | The environment name.<br>Note: Names must be unique amongst environments.<br>Note: If no name is defined, a default unique name is automatically set. |
| `properties` | [EnvironmentProperties](#environmentproperties) |  | The environment properties. |

### CreateEnvironmentResponse

The identifier of the created environment.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identity` | [EnvironmentIdentity](#environmentidentity) |  | The environment identity.<br>Returns null in case of failure. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### DeleteEnvironmentRequest

The information required to delete an environment.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the environment to delete. |

### DeleteEnvironmentResponse

The response returned when deleting an environment.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### EnvironmentIdentity

The full identity of an environment, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The environment identifier. |
| `name` | string |  | The environment name. |

### EnvironmentProperties

The properties of an environment.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `scene_tree` | google.protobuf.Int32Value |  | The identifier of the scene tree referenced in the environment.<br>Note: The scene tree reference can be removed by setting the value '-1'.<br>Note: A scene tree reference must be provided before exporting the track. |
| `added_skies` | [SkyLists](#skylists) |  | The identifiers of the skies to add to the environment. |
| `removed_skies` | [SkyLists](#skylists) |  | The identifiers of the skies to remove from the environment. |
| <small><strong>oneof</strong> <code>active_sky</code></small> `no_active_sky` | [asset_preparation.v3.common.Empty](#empty) |  | No active sky. <br>Note: If the active sky is not defined, the first sky added to the environment will be set as active. <br>If there is no sky in the environment, a default natural sky is created at export and set as active. |
| <small><strong>oneof</strong> <code>active_sky</code></small> `active_natural_sky` | int32 |  | The natural sky to set as active. |
| <small><strong>oneof</strong> <code>active_sky</code></small> `active_hdri_sky` | int32 |  | The HDRI sky to set as active. |

### GetEnvironmentRequest

The information required to examine an environment.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the environment to examine. |

### GetEnvironmentResponse

The information about an environment.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identity` | [EnvironmentIdentity](#environmentidentity) |  | The environment identity. |
| `properties` | [EnvironmentProperties](#environmentproperties) |  | The environment properties. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### GetTrackChunksRequest

The information required to export an environment as a stream of track chunks.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the environment to export. |
| `protect` | bool |  | Defines whether the generated track should be protected from import or not.<br>Note: Protection is irreversible.<br>Default value: `false` |

### GetTrackFileRequest

The information required to export an environment as a track file.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the environment to export. |
| `file_path` | string |  | The path of the exported file. |
| `overwrite` | google.protobuf.BoolValue |  | Defines whether the file should be overwritten or not.<br>Default value: `true` |
| `protect` | bool |  | Defines whether the generated track should be protected from import or not.<br>Note: Protection is irreversible.<br>Default value: `false` |

### GetTrackFileResponse

The response returned when exporting an environment as a track file.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the export operation. |

### ListEnvironmentsResponse

The identities of all environments in the collection.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `environments` | [EnvironmentIdentity](#environmentidentity) | repeated | Environment identities. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the listing operation. |

### PutEnvironmentFromTrackFileRequest

The information required to create an environment from an uploaded track file.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `file_path` | string |  | The path of the .track file to upload. |
| `name_conflict_policy` | [asset_preparation.v3.common.ConflictPolicy](#conflictpolicy) |  | The policy to follow in case of name conflict with server's objects. |

### PutEnvironmentFromTrackResponse

The response returned when uploading a track.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The imported environment identifier. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the upload operation. |

### SkyLists

Lists of identifiers for natural skies and HDRI skies.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `hdri_skies` | int32 | repeated | The identifiers of HDRI skies. |
| `natural_skies` | int32 | repeated | The identifiers of natural skies. |

### UpdateEnvironmentRequest

The information required to update an environment.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the environment to update. |
| `name` | google.protobuf.StringValue |  | The environment name.<br>Note: Names must be unique amongst environments.<br>Note: If no name is defined, the name is not updated. |
| `properties` | [EnvironmentProperties](#environmentproperties) |  | The environment properties.<br>Note: All the properties are optional. |

### UpdateEnvironmentResponse

The response returned when updating an environment.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

## asset_preparation_api/geometry/geometry.proto

This file describes the service used to create, edit and manage geometries.

### GeometryPreparation

Geometry Preparation Service

This service is used to create, edit and manage geometries.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateGeometry | [CreateGeometryRequest](#creategeometryrequest) | [CreateGeometryResponse](#creategeometryresponse) | Creates a new geometry with an optional given name and winding order.<br>Note: Names must be unique amongst geometries.<br>Returns the identifier of the created geometry. |
| GetGeometry | [GetGeometryRequest](#getgeometryrequest) | [GetGeometryResponse](#getgeometryresponse) | Gets the properties of a geometry, given its identifier.<br>Returns the geometry properties. |
| ListGeometries | .google.protobuf.Empty | [ListGeometriesResponse](#listgeometriesresponse) | Lists all the created geometries.<br>Returns the identifiers and names of the geometries. |
| UpdateGeometry | [UpdateGeometryRequest](#updategeometryrequest) | [UpdateGeometryResponse](#updategeometryresponse) | Edits the properties of a geometry, given its identifier.<br>Note: Names must be unique amongst geometries. |
| DeleteGeometry | [DeleteGeometryRequest](#deletegeometryrequest) | [DeleteGeometryResponse](#deletegeometryresponse) | Deletes a geometry, given its identifier. |
| CreateMaterialPart | [CreateMaterialPartRequest](#creatematerialpartrequest) | [CreateMaterialPartResponse](#creatematerialpartresponse) | Creates a material part as a child of a geometry, given the parent geometry identifier, with optional material part parameters.<br>Note: Names must be unique amongst sibling material parts.<br>Returns the identifier of the created material part. |
| GetMaterialPart | [GetMaterialPartRequest](#getmaterialpartrequest) | [GetMaterialPartResponse](#getmaterialpartresponse) | Gets the properties of a material part, given its identifier.<br>Returns the material part properties. |
| UpdateMaterialPart | [UpdateMaterialPartRequest](#updatematerialpartrequest) | [UpdateMaterialPartResponse](#updatematerialpartresponse) | Edits the properties of a material part, given its identifier.<br>Note: Names must be unique amongst sibling material parts. |
| DeleteMaterialPart | [DeleteMaterialPartRequest](#deletematerialpartrequest) | [DeleteMaterialPartResponse](#deletematerialpartresponse) | Deletes a material part, given its identifier. |
| PushVertices | [PushVerticesRequest](#pushverticesrequest) stream | [PushVerticesResponse](#pushverticesresponse) | Pushes vertices to a geometry, given a stream of geometry identifiers and vertices to push. |
| PushIndices | [PushIndicesRequest](#pushindicesrequest) stream | [PushIndicesResponse](#pushindicesresponse) | Pushes indices to a geometry, given a stream of geometry identifiers and indices to push.<br>Note: Indices must reference already pushed vertices. |
| GetGeometryVertices | [GetGeometryVerticesRequest](#getgeometryverticesrequest) | [GetGeometryVerticesResponse](#getgeometryverticesresponse) stream | Gets the vertices of a geometry, given its identifier. |
| GetGeometryIndices | [GetGeometryIndicesRequest](#getgeometryindicesrequest) | [GetGeometryIndicesResponse](#getgeometryindicesresponse) stream | Gets the indices of a geometry, given its identifier. |

## asset_preparation_api/geometry/geometry_description.proto

This file describes the messages used to create, edit and manage geometries.

### CreateGeometryRequest

The information required to create a geometry.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `name` | google.protobuf.StringValue |  | The geometry name.<br>Note: Names must be unique amongst geometries.<br>Note: If no name is defined, a default unique name is automatically set. |
| `properties` | [GeometryProperties](#geometryproperties) |  | The properties of a geometry. |

### CreateGeometryResponse

The identity of the created geometry.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identity` | [GeometryIdentity](#geometryidentity) |  | The identity of the geometry.<br>Returns null in case of failure. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### CreateMaterialPartRequest

The information required to create a material part under a geometry.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `geometry_identifier` | google.protobuf.Int32Value |  | The identifier of the parent geometry. |
| `name` | google.protobuf.StringValue |  | The material part name.<br>Note: Names must be unique amongst sibling material parts.<br>Note: If no name is defined, a default unique name is automatically set. |
| `properties` | [MaterialPartProperties](#materialpartproperties) |  | The properties of the material part. |

### CreateMaterialPartResponse

The identifier of the created material part.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `geometry_identifier` | google.protobuf.Int32Value |  | The identifier of the parent geometry. |
| `material_part_identity` | [MaterialPartIdentity](#materialpartidentity) |  | The identity of the material part.<br>Returns null in case of failure. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### DeleteGeometryRequest

The information required to delete a geometry.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the geometry to delete. |

### DeleteGeometryResponse

The response returned when deleting a geometry.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DeleteMaterialPartRequest

The information required to delete a material part.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `geometry_identifier` | google.protobuf.Int32Value |  | The identifier of the parent geometry. |
| `material_part_identifier` | google.protobuf.Int32Value |  | The identifier of the material part. |

### DeleteMaterialPartResponse

The response returned when deleting a material part.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### GeometryIdentity

The full identity of a geometry, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The geometry identifier. |
| `name` | string |  | The geometry name. |

### GeometryProperties

The properties of a geometry.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `winding_order` | [WindingOrder](#windingorder) |  | The geometry winding order. |
| `has_binormals` | google.protobuf.BoolValue |  | Defines whether the vertices should have binormals defined or not.<br>Default value: `false` |
| `has_tangents` | google.protobuf.BoolValue |  | Defines whether the vertices should have tangents defined or not.<br>Default value: `false` |
| `uv_count` | google.protobuf.Int32Value |  | The number of UV coordinates that the vertices should have defined.<br>Range: [0, 4].<br>Default value: 0 |

### GetGeometryIndicesRequest

The information required to get the geometry indices.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the geometry. |

### GetGeometryIndicesResponse

The information about the geometry indices.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `indices` | int32 | repeated | The indices of the geometry. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the get indices operation. |

### GetGeometryRequest

The information required to examine a geometry.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the geometry to examine. |

### GetGeometryResponse

The information about a geometry.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identity` | [GeometryIdentity](#geometryidentity) |  | The identity of the geometry. |
| `properties` | [GeometryProperties](#geometryproperties) |  | The geometry properties. |
| `material_parts` | [MaterialPartIdentity](#materialpartidentity) | repeated | The identities of the material parts composing the geometry. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### GetGeometryVerticesRequest

The information required to get the geometry vertices.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the geometry. |

### GetGeometryVerticesResponse

The information about the geometry vertices.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `vertices` | [Vertex](#vertex) | repeated | The vertices of the geometry. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the get vertices operation. |

### GetMaterialPartRequest

The information required to examine a material part.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the material part to examine. |

### GetMaterialPartResponse

The information about a material part.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identity` | [MaterialPartIdentity](#materialpartidentity) |  | The identity of the material part. |
| `properties` | [MaterialPartProperties](#materialpartproperties) |  | The material part properties. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### ListGeometriesResponse

The identities of all geometries in the collection.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `geometries` | [GeometryIdentity](#geometryidentity) | repeated | Geometry identities. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the listing operation. |

### MaterialPartIdentity

The full identity of a material part, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The material part identifier. |
| `name` | string |  | The material part name. |

### MaterialPartProperties

The properties of the material part.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `transparency_mode` | [TransparencyMode](#transparencymode) |  | The material part transparency mode. |
| `surface_source_identifier` | google.protobuf.Int32Value |  | The identifier of the surface source.<br>Note: Optional field. <br>Note: The surface source reference can be removed by setting the value '-1'. |
| `material_identifier` | google.protobuf.Int32Value |  | The identifier of the material.<br>Note: The material reference can be removed by setting the value '-1' and the default material is applied in this case. |
| `start_index` | google.protobuf.Int32Value |  | The position of the first index from the indices array to reference vertices where the associated material should be applied. |
| `indices_count` | google.protobuf.Int32Value |  | The number of indices from the indices array to reference vertices where the associated material should be applied. |
| `temperature_variation_texture_identifier` | google.protobuf.Int32Value |  | The identifier of the temperature variation texture.<br>Note: Optional field.<br>Note: The temperature variation texture reference can be removed by setting the value '-1'. |
| `temperature_variation_uv_channel` | google.protobuf.Int32Value |  | The temperature variation UV channel.<br>Note: Must be 1, 2, 3 or 4.<br>Default value: 1 |
| `temperature_variation_amplitude` | google.protobuf.DoubleValue |  | The temperature variation amplitude.<br>Unit: Degree<br>Range: [0,2000]<br>Default value: 0<br>Note: If the temperature variation texture is not defined, the amplitude will be ignored. |
| `removed_tags` | [asset_preparation.v3.common.TagIdentity](#tagidentity) | repeated | Tag(s) to remove from the material part. |
| `added_tags` | [asset_preparation.v3.common.Tag](#tag) | repeated | Tag(s) to add to the material part. <br>Note: Only LightingType Tags are allowed. |

### PushIndicesRequest

The information required to push indices to a geometry. The recommended size of the request is in range 256kB to 1MB.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `geometry_identifier` | google.protobuf.Int32Value |  | The identifier of the geometry. |
| `indices` | int32 | repeated | The indices to push in the geometry. |

### PushIndicesResponse

The response returned when pushing indices to a geometry.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the push operation. |

### PushVerticesRequest

The information required to push vertices to a geometry. The recommended size of the request is in range 256kB to 1MB.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `geometry_identifier` | google.protobuf.Int32Value |  | The identifier of the geometry. |
| `vertices` | [Vertex](#vertex) | repeated | The vertices to push in the geometry. |

### PushVerticesResponse

The response returned when pushing vertices to a geometry.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the push operation. |

### UpdateGeometryRequest

The information required to update a geometry.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the geometry to update. |
| `name` | google.protobuf.StringValue |  | The geometry name.<br>Note: Names must be unique amongst geometries.<br>Note: If no name is defined, the name is not updated. |
| `properties` | [GeometryProperties](#geometryproperties) |  | The geometry properties.<br>Note: All the properties are optional. |

### UpdateGeometryResponse

The response returned when updating a geometry.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### UpdateMaterialPartRequest

The information required to update a material part.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `geometry_identifier` | google.protobuf.Int32Value |  | The identifier of the parent geometry. |
| `material_part_identifier` | google.protobuf.Int32Value |  | The identifier of the material part. |
| `name` | google.protobuf.StringValue |  | The material part name.<br>Note: Names must be unique amongst sibling material parts.<br>Note: If no name is defined, the name is not updated. |
| `properties` | [MaterialPartProperties](#materialpartproperties) |  | The material part properties.<br>Note: All the properties are optional. |

### UpdateMaterialPartResponse

The response returned when updating a material part.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### UvCoordinates

The UV coordinates.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `x` | google.protobuf.DoubleValue |  | Coordinate along the X axis. |
| `y` | google.protobuf.DoubleValue |  | Coordinate along the Y axis. |

### Vertex

The properties of a vertex.

Note: The X, Y and Z coordinates of the binormals are required only when `has_binormals` is set to `true`.

Note: The X, Y and Z coordinates of the tangents are required only when `has_tangents` is set to `true`.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `x_position` | google.protobuf.DoubleValue |  | The position of the vertex along the X axis.<br>Unit: Meter |
| `y_position` | google.protobuf.DoubleValue |  | The position of the vertex along the Y axis.<br>Unit: Meter |
| `z_position` | google.protobuf.DoubleValue |  | The position of the vertex along the Z axis.<br>Unit: Meter |
| `x_normal` | google.protobuf.DoubleValue |  | The X-coordinate of the normal of the vertex.<br>Unit: Meter |
| `y_normal` | google.protobuf.DoubleValue |  | The Y-coordinate of the normal of the vertex.<br>Unit: Meter |
| `z_normal` | google.protobuf.DoubleValue |  | The Z-coordinate of the normal of the vertex.<br>Unit: Meter |
| `x_binormal` | google.protobuf.DoubleValue |  | The X-coordinate of the binormal of the vertex.<br>Unit: Meter<br>Note: Required only when `has_binormals` is set to `true`. |
| `y_binormal` | google.protobuf.DoubleValue |  | The Y-coordinate of the binormal of the vertex.<br>Unit: Meter<br>Note: Required only when `has_binormals` is set to `true`. |
| `z_binormal` | google.protobuf.DoubleValue |  | The Z-coordinate of the binormal of the vertex.<br>Unit: Meter<br>Note: Required only when `has_binormals` is set to `true`. |
| `x_tangent` | google.protobuf.DoubleValue |  | The X-coordinate of the tangent of the vertex.<br>Unit: Meter<br>Note: Required only when `has_tangents` is set to `true`. |
| `y_tangent` | google.protobuf.DoubleValue |  | The Y-coordinate of the tangent of the vertex.<br>Unit: Meter<br>Note: Required only when `has_tangents` is set to `true`. |
| `z_tangent` | google.protobuf.DoubleValue |  | The Z-coordinate of the tangent of the vertex.<br>Unit: Meter<br>Note: Required only when `has_tangents` is set to `true`. |
| `uv_coordinates` | [UvCoordinates](#uvcoordinates) | repeated | The UV coordinates for each UV layer defined for the vertex. |
| `ambient_occlusion` | google.protobuf.DoubleValue |  | The ambient occlusion of the vertex. |

### TransparencyMode

Transparency mode of a material part.

| Name | Number | Description |
| ---- | ------ | ----------- |
| TRANSPARENCY_MODE_UNSPECIFIED | 0 | Unspecified transparency mode. |
| TRANSPARENCY_MODE_OPAQUE | 1 | The material part is opaque. |
| TRANSPARENCY_MODE_WITH_HOLES | 2 | The material part contains holes. |
| TRANSPARENCY_MODE_SEMI_TRANSPARENT | 3 | The material part is semi-transparent. |

### WindingOrder

Winding order of the vertices inside a geometry.

| Name | Number | Description |
| ---- | ------ | ----------- |
| WINDING_ORDER_UNSPECIFIED | 0 | Unspecified winding order. |
| WINDING_ORDER_DOUBLE_SIDED | 1 | For double-sided meshes. |
| WINDING_ORDER_CLOCKWISE | 2 | Vertices are ordered clockwise. |
| WINDING_ORDER_COUNTER_CLOCKWISE | 3 | Vertices are ordered counter-clockwise. |

## asset_preparation_api/hdriSky/hdri_sky.proto

This file describes the service used to create, edit and manage HDRI skies.

### HdriSkyPreparation

HDRI Sky Preparation Service

This service is used to create, edit and manage HDRI skies.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateHdriSky | [CreateHdriSkyRequest](#createhdriskyrequest) | [CreateHdriSkyResponse](#createhdriskyresponse) | Creates a new HDRI sky with an optional name.<br>Note: Names must be unique amongst skies.<br>Note: If unspecified, default values are used.<br>Returns the identifier of the created HDRI sky. |
| GetHdriSky | [GetHdriSkyRequest](#gethdriskyrequest) | [GetHdriSkyResponse](#gethdriskyresponse) | Gets the properties of an HDRI sky, given its identifier.<br>Returns the HDRI sky properties. |
| ListHdriSkies | .google.protobuf.Empty | [ListHdriSkiesResponse](#listhdriskiesresponse) | Lists all the created HDRI skies.<br>Returns the identifiers and names of the HDRI skies. |
| UpdateHdriSky | [UpdateHdriSkyRequest](#updatehdriskyrequest) | [UpdateHdriSkyResponse](#updatehdriskyresponse) | Edits the properties of an HDRI sky, given its identifier.<br>Note: Names must be unique amongst skies. |
| DeleteHdriSky | [DeleteHdriSkyRequest](#deletehdriskyrequest) | [DeleteHdriSkyResponse](#deletehdriskyresponse) | Deletes an HDRI sky, given its identifier.<br>Note: If you delete an HDRI sky that is set as the `active_sky` in an environment, the environment is updated with the default sky set as the active sky. |
| CreateHdriSkyState | [CreateHdriSkyStateRequest](#createhdriskystaterequest) | [CreateHdriSkyStateResponse](#createhdriskystateresponse) | Creates a new HDRI sky state with optional properties.<br>Note: Names must be unique amongst sibling states.<br>Note: "Default" name is reserved.<br>Note: If some properties are not specified, default values are used. <br>Returns the information about the created HDRI sky state. |
| GetHdriSkyState | [GetHdriSkyStateRequest](#gethdriskystaterequest) | [GetHdriSkyStateResponse](#gethdriskystateresponse) | Gets the properties of an HDRI sky state, given the parent HDRI sky identifier and the state name.<br>Returns the HDRI sky state properties. |
| UpdateHdriSkyState | [UpdateHdriSkyStateRequest](#updatehdriskystaterequest) | [UpdateHdriSkyStateResponse](#updatehdriskystateresponse) | Edits the properties of a state, given the parent HDRI sky identifier and the state name.<br>Note: Names must be unique amongst sibling states.<br>Note: "Default" name is reserved. |
| DeleteHdriSkyState | [DeleteHdriSkyStateRequest](#deletehdriskystaterequest) | [DeleteHdriSkyStateResponse](#deletehdriskystateresponse) | Deletes an HDRI sky state, given the parent HDRI sky identifier and the state name. |

## asset_preparation_api/hdriSky/hdri_sky_description.proto

This file describes the messages used to create, edit and manage HDRI skies.

### CreateHdriSkyRequest

The information required to create an HDRI sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `name` | google.protobuf.StringValue |  | The HDRI sky name.<br>Note: Names must be unique amongst skies.<br>Note: If no name is defined, a default unique name is automatically set. |
| `properties` | [HdriSkyProperties](#hdriskyproperties) |  | The HDRI sky properties. |

### CreateHdriSkyResponse

The identifier of the created HDRI sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identity` | [HdriSkyIdentity](#hdriskyidentity) |  | The identity of an HDRI sky.<br>Returns null in case of failure. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### CreateHdriSkyStateRequest

The information required to create an HDRI sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The HDRI sky identifier. |
| `state_name` | string |  | The state name.<br>Note: Names must be unique amongst sibling HDRI sky states.<br>Note: "Default" name is reserved. |
| `base_state_name` | google.protobuf.StringValue |  | The name of an already existing state on which will be based the state to create.<br>Note: If not defined, the HDRI sky properties are used. |
| `state_properties` | [HdriSkyProperties](#hdriskyproperties) |  | The state properties. |

### CreateHdriSkyStateResponse

The response returned when creating an HDRI sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The HDRI sky identifier. |
| `state_name` | string |  | The new state name. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### DeleteHdriSkyRequest

The information required to delete an HDRI sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the HDRI sky to delete. |

### DeleteHdriSkyResponse

The response returned when deleting an HDRI sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DeleteHdriSkyStateRequest

The information required to delete an HDRI sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The HDRI sky identifier. |
| `state_name` | string |  | The name of the state to delete. |

### DeleteHdriSkyStateResponse

The response returned when deleting an HDRI sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### GetHdriSkyRequest

The information required to examine an HDRI sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the HDRI sky to examine. |

### GetHdriSkyResponse

The information about an HDRI sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identity` | [HdriSkyIdentity](#hdriskyidentity) |  | The HDRI sky identity. |
| `properties` | [HdriSkyProperties](#hdriskyproperties) |  | The HDRI sky properties. |
| `state_names` | string | repeated | The names of the HDRI sky states. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### GetHdriSkyStateRequest

The information required to examine a state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the HDRI sky. |
| `state_name` | string |  | The name of the state to examine. |

### GetHdriSkyStateResponse

The information about an HDRI sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The identifier of the examined HDRI sky. |
| `state_name` | string |  | The state name. |
| `state_properties` | [HdriSkyProperties](#hdriskyproperties) |  | The properties of the examined state. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the reading operation. |

### HdriSkyIdentity

The full identity of an HDRI sky, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The HDRI sky identifier. |
| `name` | string |  | The HDRI sky name. |

### HdriSkyProperties

The properties of an HDRI sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `texture_identifier` | google.protobuf.Int32Value |  | The identifier of the texture (created using the Resource service) referenced in the HDRI sky.<br>Note: The texture reference can be removed by setting the value '-1'.<br>Note: The identifier must reference a texture with ".hdr" extension. |
| `projection_type` | [ProjectionType](#projectiontype) |  | The type of projection.<br> Default value: `SPHERE` |
| `ground_radius` | google.protobuf.DoubleValue |  | The radius of the virtual ground.<br>Note: Must be equal or superior to 0.<br>Default value: 0 |
| `orientation` | google.protobuf.DoubleValue |  | The HDRI sky orientation.<br>Unit: Degree<br>Range: [0,359]<br>Default value: 0 |
| `luminance_factor` | google.protobuf.DoubleValue |  | The luminance factor applied to the HDRI texture.<br>Note: Must be equal or superior to 0.<br>Default value: 1 |
| `ambient_factor` | google.protobuf.DoubleValue |  | The ambient factor for opaque objects in Shadics rendering engine.<br>Note: Must be equal or superior to 0.<br>Default value: 1 |

### ListHdriSkiesResponse

The identities of all HDRI skies in the collection.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `skies` | [HdriSkyIdentity](#hdriskyidentity) | repeated | HDRI sky identities. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the listing operation. |

### UpdateHdriSkyRequest

The information required to update an HDRI sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the HDRI sky to update. |
| `name` | google.protobuf.StringValue |  | The new HDRI sky name.<br>Note: Names must be unique amongst skies.<br>Note: If no name is defined, the name is not updated. |
| `properties` | [HdriSkyProperties](#hdriskyproperties) |  | The HDRI sky properties.<br>Note: All the properties are optional. |

### UpdateHdriSkyResponse

The response returned when updating an HDRI sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### UpdateHdriSkyStateRequest

The information required to update an HDRI sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The HDRI sky identifier. |
| `state_name` | string |  | The current name of the state. |
| `state_new_name` | google.protobuf.StringValue |  | The new name of the state.<br>Note: Names must be unique amongst sibling HDRI sky states.<br>Note: "Default" name is reserved.<br>Note: If no name is defined, the name is not updated. |
| `state_properties` | [HdriSkyProperties](#hdriskyproperties) |  | The new state properties. |

### UpdateHdriSkyStateResponse

The response returned when updating an HDRI sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `state_name` | string |  | The state name. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### ProjectionType

The type of projection.

| Name | Number | Description |
| ---- | ------ | ----------- |
| PROJECTION_TYPE_UNSPECIFIED | 0 | Unspecified projection type. |
| PROJECTION_TYPE_SPHERE | 1 | The sphere projection. |
| PROJECTION_TYPE_DOME | 2 | The dome projection. |

## asset_preparation_api/information/health.proto

This file describes the Asset Preparation API services' health.

### GetHealthResponse

This message describes the health response.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `is_healthy` | bool |  | Defines whether the server is healthy or not. |

## asset_preparation_api/information/information.proto

This file describes the service used to check the Asset Preparation API services' health.

### Information

Information Service

This service is used to get information about the API services.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetHealth | .google.protobuf.Empty | [GetHealthResponse](#gethealthresponse) | Tests if the server is healthy.<br>Note: Checks that all repositories are available for all services to work correctly. |

## asset_preparation_api/material/material.proto

This file describes the service used to create, edit and manage materials.

### MaterialPreparation

Material Preparation Service

This service is used to create, edit and manage materials.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateMaterial | [CreateMaterialRequest](#creatematerialrequest) | [CreateMaterialResponse](#creatematerialresponse) | Creates a new material with optional properties.<br>Note: Names must be unique amongst materials.<br>Note: If some properties are not specified, default values are used and no dielectric properties are defined. <br>Returns the information about the created material. |
| GetMaterial | [GetMaterialRequest](#getmaterialrequest) | [GetMaterialResponse](#getmaterialresponse) | Gets the properties of a material, given its identifier. <br>Returns the material properties. |
| ListMaterials | .google.protobuf.Empty | [ListMaterialsResponse](#listmaterialsresponse) | Lists all the stored materials.<br>Returns the identifiers and names of the stored materials. |
| UpdateMaterial | [UpdateMaterialRequest](#updatematerialrequest) | [UpdateMaterialResponse](#updatematerialresponse) | Edits the properties of a material, given its identifier.<br>Note: Names must be unique amongst materials. |
| DeleteMaterial | [DeleteMaterialRequest](#deletematerialrequest) | [DeleteMaterialResponse](#deletematerialresponse) | Deletes a material, given its identifier. |
| CreateMaterialState | [CreateMaterialStateRequest](#creatematerialstaterequest) | [CreateMaterialStateResponse](#creatematerialstateresponse) | Creates a new material state with optional properties.<br>Note: Names must be unique amongst sibling material states.<br>Note: "Default" name is reserved.<br>Note: If some properties are not specified, default values are used and no dielectric properties are defined. <br>Returns the information about the created material state. |
| GetMaterialState | [GetMaterialStateRequest](#getmaterialstaterequest) | [GetMaterialStateResponse](#getmaterialstateresponse) | Gets the properties of a material state, given the parent material identifier and the state name.<br>Returns the material state properties. |
| UpdateMaterialState | [UpdateMaterialStateRequest](#updatematerialstaterequest) | [UpdateMaterialStateResponse](#updatematerialstateresponse) | Edits the properties of a state, given the parent material identifier and the state name.<br>Note: Names must be unique amongst sibling material states.<br>Note: "Default" name is reserved. |
| DeleteMaterialState | [DeleteMaterialStateRequest](#deletematerialstaterequest) | [DeleteMaterialStateResponse](#deletematerialstateresponse) | Deletes a material state, given the parent material identifier and the state name. |

## asset_preparation_api/material/material_description.proto

This file describes the messages used to create, edit and manage materials.

### AnisotropyProperties

The anisotropy properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>contribution</code></small> `no_anisotropy` | [asset_preparation.v3.common.Empty](#empty) |  | No anisotropy.<br>Note: This is the default anisotropy contribution type. |
| <small><strong>oneof</strong> <code>contribution</code></small> `texture` | [AnisotropyTexture](#anisotropytexture) |  | Anisotropy based on an anisotropic tangent map file. |
| <small><strong>oneof</strong> <code>contribution</code></small> `color` | [GreyLevel](#greylevel) |  | Anisotropy based on a color, in grey level. |

### AnisotropyTexture

The texture properties of an anisotropy.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `map_identifier` | google.protobuf.Int32Value |  | The identifier of the anisotropy map referenced in the material.<br>Note: The anisotropy map reference can be removed by setting the value '-1'. |
| `map_uv_channel` | google.protobuf.Int32Value |  | The anisotropy map UV channel.<br>Note: Must be 1, 2, 3 or 4.<br>Default value: 1 |

### CreateMaterialRequest

The information required to create a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `name` | google.protobuf.StringValue |  | The material name.<br>Note: Names must be unique amongst materials.<br>Note: If no name is defined, a default unique name is automatically set. |
| `properties` | [MaterialProperties](#materialproperties) |  | The properties of a material.<br>Note: If no properties are defined, the default properties are automatically set. |

### CreateMaterialResponse

The identifier of the created material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identity` | [MaterialIdentity](#materialidentity) |  | The new material identity.<br>Returns null in case of failure. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### CreateMaterialStateRequest

The information required to create a material state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The material identifier. |
| `state_name` | string |  | The state name.<br>Note: Names must be unique amongst sibling material states.<br>Note: "Default" name is reserved. |
| `base_state_name` | google.protobuf.StringValue |  | The name of an already existing state on which will be based the state to create.<br>Note: If not defined, the material properties are used. |
| `state_properties` | [MaterialProperties](#materialproperties) |  | The state properties. |

### CreateMaterialStateResponse

The response returned when creating a material state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The material identifier. |
| `state_name` | string |  | The new state name. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### DeleteMaterialRequest

The information required to delete a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the material to delete. |

### DeleteMaterialResponse

The response returned when deleting a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DeleteMaterialStateRequest

The information required to delete a material state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The material identifier. |
| `state_name` | string |  | The name of the state to delete. |

### DeleteMaterialStateResponse

The response returned when deleting a material state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DielectricProperties

The dielectric properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `dielectric_material_identifier` | google.protobuf.Int32Value |  | The identifier of the dielectric material referenced in the material.<br>Note: The dielectric material reference can be removed by setting the value '-1'. |

### DiffuseProperties

The diffuse properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>contribution</code></small> `color_rgb` | [Rgb](#rgb) |  | Diffuse based on a RGB color. |
| <small><strong>oneof</strong> <code>contribution</code></small> `color_hsv` | [Hsv](#hsv) |  | Diffuse based on an HSV color. |
| <small><strong>oneof</strong> <code>contribution</code></small> `texture` | [DiffuseTexture](#diffusetexture) |  | Diffuse based on a diffuse map file. <br>Note: This is the default diffuse contribution type. |

### DiffuseTexture

Texture properties for diffuse contribution.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `map_identifier` | google.protobuf.Int32Value |  | The identifier of the diffuse map referenced in the material.<br>Note: The diffuse map reference can be removed by setting the value '-1'. |
| `map_uv_channel` | google.protobuf.Int32Value |  | The diffuse map UV channel.<br>Note: Must be 1, 2, 3 or 4.<br>Default value: 1 |
| `alpha_uv_channel` | google.protobuf.Int32Value |  | The diffuse alpha map UV channel.<br>Note: Must be 1, 2, 3 or 4.<br>Default value: 1<br>Note: It can be set only for layer 1. |

### GetMaterialRequest

The information required to examine a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the material to examine. |

### GetMaterialResponse

The information about a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identity` | [MaterialIdentity](#materialidentity) |  | The material identity. |
| `properties` | [MaterialProperties](#materialproperties) |  | The material properties. |
| `state_names` | string | repeated | The names of the material states. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### GetMaterialStateRequest

The information required to examine a state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the material. |
| `state_name` | string |  | The name of the state to examine. |

### GetMaterialStateResponse

The information about a material state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The identifier of the examined material. |
| `state_name` | string |  | The state name. |
| `state_properties` | [MaterialProperties](#materialproperties) |  | The properties of the examined state. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the reading operation. |

### GreyLevel

Grey level value.

Note: Default value is 128.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `level` | int32 |  | Range [0,255] |

### Hsv

HSV value of a color.

Note: Default value is (0,0,50).

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `hue` | double |  | Hue <br>Unit: Degree<br>Range: [0,360] |
| `saturation` | double |  | Intensity <br>Range: [0,100] |
| `value` | double |  | Value <br>Range: [0,100] |

### LambertianLayer

The properties of the lambertian layer.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `absorption` | google.protobuf.DoubleValue |  | The Lambertian absorption.<br>Unit: Percentage (%)<br>Range: [0,100]<br>Default value: 0 |
| `diffuse_properties` | [DiffuseProperties](#diffuseproperties) |  | The diffuse properties. |
| `normal_properties` | [NormalProperties](#normalproperties) |  | The normal properties. |
| `anisotropy_properties` | [AnisotropyProperties](#anisotropyproperties) |  | The anisotropy properties. |
| `mask_properties` | [MaskProperties](#maskproperties) |  | The Mask properties.<br>Note: Layer 1 must not contain a Mask. |

### Layer

The layer properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>layer</code></small> `no_layer` | [asset_preparation.v3.common.Empty](#empty) |  | No layer.<br>Note: This is the default type for layer 2 and layer 3. |
| <small><strong>oneof</strong> <code>layer</code></small> `lambertian_layer` | [LambertianLayer](#lambertianlayer) |  | Lambertian layer type.<br>Note: This is the default type for layer 1. |
| <small><strong>oneof</strong> <code>layer</code></small> `mirror_layer` | [MirrorLayer](#mirrorlayer) |  | Mirror layer type. |
| <small><strong>oneof</strong> <code>layer</code></small> `optical_polish_layer` | [OpticalPolishLayer](#opticalpolishlayer) |  | Optical polish layer type. |
| <small><strong>oneof</strong> <code>layer</code></small> `library_layer` | [LibraryLayer](#librarylayer) |  | Library layer type. |
| <small><strong>oneof</strong> <code>layer</code></small> `rendering_layer` | [RenderingLayer](#renderinglayer) |  | Rendering layer type. |

### LibraryLayer

The properties of the library layer.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `surface_state_identifier` | google.protobuf.Int32Value |  | The identifier of the surface state referenced in the material.<br>Note: The surface state reference can be removed by setting the value '-1'. |
| `diffuse_properties` | [DiffuseProperties](#diffuseproperties) |  | The diffuse properties. |
| `normal_properties` | [NormalProperties](#normalproperties) |  | The normal properties. |
| `anisotropy_properties` | [AnisotropyProperties](#anisotropyproperties) |  | The anisotropy properties. |
| `mask_properties` | [MaskProperties](#maskproperties) |  | The Mask properties.<br>Note: Layer 1 must not contain a Mask. |

### LibraryVolumeOpticalProperties

The library volume optical properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `volume_material_identifier` | google.protobuf.Int32Value |  | The identifier of the volume material referenced in the material.<br>Note: The volume material reference can be removed by setting the value '-1'. |

### ListMaterialsResponse

The identities of all materials in the collection.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `materials` | [MaterialIdentity](#materialidentity) | repeated | Material identities. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the listing operation. |

### MaskProperties

The mask properties of a material.

Note: No mask properties should be set for layer 1.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>contribution</code></small> `color` | [GreyLevel](#greylevel) |  | Mask based on a color in grey level. |
| <small><strong>oneof</strong> <code>contribution</code></small> `texture` | [MaskTexture](#masktexture) |  | Mask based on a texture file.<br>Note: This is the default mask contribution type. |

### MaskTexture

Texture properties for mask.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `map_identifier` | google.protobuf.Int32Value |  | The identifier of the mask map referenced in the material.<br>Note: The mask map reference can be removed by setting the value '-1'. |
| `map_uv_channel` | google.protobuf.Int32Value |  | The mask map UV channel.<br>Note: Must be 1, 2, 3 or 4.<br>Default value: 1 |

### MaterialIdentity

The full identity of a material, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The material identifier. |
| `name` | string |  | The material name. |

### MaterialProperties

The properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `surface_optical_properties` | [SurfaceOpticalProperties](#surfaceopticalproperties) |  | The surface optical properties. |
| `volume_optical_properties` | [VolumeOpticalProperties](#volumeopticalproperties) |  | The volume optical properties. |
| `thermal_properties` | [ThermalProperties](#thermalproperties) |  | The thermal properties. |
| `dielectric_properties` | [DielectricProperties](#dielectricproperties) |  | The dielectric properties.<br>Note: Optional field. |
| `reflection_effect` | [ReflectionEffectProperties](#reflectioneffectproperties) |  | The reflection effect properties. |

### MirrorLayer

The properties of the mirror layer.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `reflectivity` | google.protobuf.DoubleValue |  | The mirror reflectivity.<br>Unit: Percentage (%)<br>Range: [0,100]<br>Default value: 100 |
| `diffuse_properties` | [DiffuseProperties](#diffuseproperties) |  | The diffuse properties. |
| `normal_properties` | [NormalProperties](#normalproperties) |  | The normal properties. |
| `anisotropy_properties` | [AnisotropyProperties](#anisotropyproperties) |  | The anisotropy properties. |
| `mask_properties` | [MaskProperties](#maskproperties) |  | The Mask properties.<br>Note: Layer 1 must not contain a Mask. |

### NormalProperties

The normal properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>contribution</code></small> `no_normal` | [asset_preparation.v3.common.Empty](#empty) |  | No normal. |
| <small><strong>oneof</strong> <code>contribution</code></small> `texture` | [NormalTexture](#normaltexture) |  | Normal properties based on a normal map.<br>Note: This is the default normal contribution type. |

### NormalTexture

Texture properties for normal contribution.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `map_identifier` | google.protobuf.Int32Value |  | The identifier of the normal map referenced in the material.<br>Note: The normal map reference can be removed by setting the value '-1'. |
| `map_uv_channel` | google.protobuf.Int32Value |  | The normal map UV channel.<br>Note: Must be 1, 2, 3 or 4.<br>Default value: 1 |
| `intensity` | google.protobuf.DoubleValue |  | The normal intensity.<br>Unit: Percentage (%)<br>Range: [-100,100]<br>Default value: 100<br>Note: If the normal map is not defined, the intensity will be ignored. |

### Opaque

The opaque volume optical type.

### OpticVolumeOpticalProperties

The optic volume optical properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `absorption` | google.protobuf.DoubleValue |  | The optical absorption.<br>Unit: Inverse millimeter (mm<sup>-1</sup>)<br>Note: Must be equal or superior to 0.<br>Default value: 0 |
| `refractive_index` | google.protobuf.DoubleValue |  | The refractive index.<br>Default value: 1.52 |
| `constringency` | google.protobuf.DoubleValue |  | The constringency.<br>Range: [20,90]<br>Default value: 40 |

### OpticalPolishLayer

The properties of the optical polish layer.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `diffuse_properties` | [DiffuseProperties](#diffuseproperties) |  | The diffuse properties. |
| `normal_properties` | [NormalProperties](#normalproperties) |  | The normal properties. |
| `anisotropy_properties` | [AnisotropyProperties](#anisotropyproperties) |  | The anisotropy properties. |
| `mask_properties` | [MaskProperties](#maskproperties) |  | The Mask properties.<br>Note: Layer 1 must not contain a Mask. |

### ReflectionEffect

The reflection effect properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `reflectivity` | google.protobuf.DoubleValue |  | The reflection effect reflectivity.<br>Unit: Percentage (%)<br>Range: [0,100]<br>Default value: 100 |
| `size` | google.protobuf.DoubleValue |  | The reflection effect size.<br>Unit: meter (m)<br>Default value: 0 |
| `index_of_refraction` | google.protobuf.DoubleValue |  | The index of refraction.<br>Range: [1,100]<br>Default value: 1.45 |

### ReflectionEffectProperties

The reflection effect properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>contribution</code></small> `no_reflection_effect` | [asset_preparation.v3.common.Empty](#empty) |  | No reflection effect on material.<br>Note: This is the default reflection effect contribution type. |
| <small><strong>oneof</strong> <code>contribution</code></small> `scene_hdri` | [ReflectionEffect](#reflectioneffect) |  | Apply a reflection effect that projects an HDRI Sky on the material. |

### RenderingLayer

The properties of the rendering layer.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `specular_properties` | [SpecularProperties](#specularproperties) |  | The specular properties. |
| `roughness_properties` | [RoughnessProperties](#roughnessproperties) |  | The roughness properties. |
| `diffuse_properties` | [DiffuseProperties](#diffuseproperties) |  | The diffuse properties. |
| `normal_properties` | [NormalProperties](#normalproperties) |  | The normal properties. |
| `anisotropy_properties` | [AnisotropyProperties](#anisotropyproperties) |  | The anisotropy properties. |
| `mask_properties` | [MaskProperties](#maskproperties) |  | The Mask properties.<br>Note: Layer 1 must not contain a Mask. |

### Rgb

RGB value of a color.

Note: Default value is (128,128,128).

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `red` | int32 |  | Value for the red component.<br>Range: [0,255] |
| `green` | int32 |  | Value for the green component.<br>Range: [0,255] |
| `blue` | int32 |  | Value for the blue component.<br>Range: [0,255] |

### RoughnessProperties

The roughness properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>contribution</code></small> `texture` | [RoughnessTexture](#roughnesstexture) |  | Roughness texture type.<br>Note: This is the default roughness contribution type. |
| <small><strong>oneof</strong> <code>contribution</code></small> `color` | [GreyLevel](#greylevel) |  | Color roughness type, in grey level. |

### RoughnessTexture

The roughness texture properties.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `map_identifier` | google.protobuf.Int32Value |  | The identifier of the roughness map referenced in the material.<br>Note: The roughness map reference can be removed by setting the value '-1'. |
| `map_uv_channel` | google.protobuf.Int32Value |  | The roughness map UV channel.<br>Note: Must be 1, 2, 3 or 4.<br>Default value: 1 |
| `intensity` | google.protobuf.DoubleValue |  | The roughness intensity.<br>Range: [0,200]<br>Default value: 100<br>Note: If the roughness map is not defined, the intensity will be ignored. |

### SpecularProperties

The specular properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>contribution</code></small> `color_rgb` | [Rgb](#rgb) |  | Specular based on a RGB color. |
| <small><strong>oneof</strong> <code>contribution</code></small> `color_hsv` | [Hsv](#hsv) |  | Specular based on an HSV color. |
| <small><strong>oneof</strong> <code>contribution</code></small> `texture` | [SpecularTexture](#speculartexture) |  | Specular based on a specular map file. <br>Note: This is the default specular contribution type. |

### SpecularTexture

Texture properties for specular contribution.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `map_identifier` | google.protobuf.Int32Value |  | The identifier of the specular map referenced in the material.<br>Note: The specular map reference can be removed by setting the value '-1'. |
| `map_uv_channel` | google.protobuf.Int32Value |  | The UV channel.<br>Note: Must be 1, 2, 3 or 4.<br>Default value: 1 |
| `intensity` | google.protobuf.DoubleValue |  | The specular intensity.<br>Range: [0,200]<br>Default value: 100<br>Note: If the specular map is not defined, the intensity will be ignored. |

### SurfaceOpticalProperties

The surface optical properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `texture_normalization` | [TextureNormalization](#texturenormalization) |  | Texture normalization type for layer 1.<br>Default value: `None` |
| `layer_1` | [Layer](#layer) |  | The surface optical layers.<br>Note: Layer 1 is mandatory. Layers 2 and 3 are optional.<br>Note: Layer 3 must not be set without layer 2. |
| `layer_2` | [Layer](#layer) |  |  |
| `layer_3` | [Layer](#layer) |  |  |
|  </small> `texture_normalization_2` | [TextureNormalization](#texturenormalization) | optional | Texture normalization type for layer 2.<br>Note: If not defined, the type of texture normalization for layer 2 defaults to that of layer 1 set in `TextureNormalization`. |
|  </small> `texture_normalization_3` | [TextureNormalization](#texturenormalization) | optional | Texture normalization type for layer 3.<br>Note: If not defined, the type of texture normalization for layer 3 defaults to that of layer 1 set in `TextureNormalization`. |

### ThermalProperties

The thermal properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `emissivity` | google.protobuf.DoubleValue |  | The emissivity.<br>Unit: Percentage (%)<br>Range: [0,100]<br>Default value: 0 |
| `emissivity_variation_texture_identifier` | google.protobuf.Int32Value |  | The identifier of the emissivity variation texture referenced in the material.<br>Note: Optional field. <br>Note: The emissivity variation texture reference can be removed by setting the value '-1'. |
| `emissivity_variation_uv_channel` | google.protobuf.Int32Value |  | The emissivity variation UV channel.<br>Note: Must be 1, 2, 3 or 4.<br>Default value: 1 |
| `emissivity_variation_amplitude` | google.protobuf.DoubleValue |  | The emissivity variation amplitude.<br>Unit: Percentage (%)<br>Range: [0,100]<br>Default value: 0<br>Note: If the emissivity variation texture is not defined, the amplitude will be ignored. |
| `reflection_coefficient` | google.protobuf.DoubleValue |  | The reflection coefficient.<br>Unit: Percentage (%)<br>Range: [0,100]<br>Default value: 0 |
| `shininess` | google.protobuf.DoubleValue |  | The shininess.<br>Range: [1,10]<br>Default value: 1 |
| `thermal_coefficient` | google.protobuf.DoubleValue |  | The thermal coefficient.<br>Range: [0,1]<br>Default value: 1 |

### UpdateMaterialRequest

The information required to update a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the material to update. |
| `name` | google.protobuf.StringValue |  | The material name.<br>Note: Names must be unique amongst materials.<br>Note: If no name is defined, the name is not updated. |
| `properties` | [MaterialProperties](#materialproperties) |  | The material properties.<br>Note: All the properties are optional. |

### UpdateMaterialResponse

The response returned when updating a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### UpdateMaterialStateRequest

The information required to update a material state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The material identifier. |
| `state_name` | string |  | The current name of the state. |
| `state_new_name` | google.protobuf.StringValue |  | The new name of the state.<br>Note: Names must be unique amongst sibling material states.<br>Note: "Default" name is reserved.<br>Note: If no name is defined, the name is not updated. |
| `state_properties` | [MaterialProperties](#materialproperties) |  | The new state properties. |

### UpdateMaterialStateResponse

The response returned when updating a material state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `state_name` | string |  | The state name. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### VolumeOpticalProperties

The volume optical properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>contribution</code></small> `opaque` | [Opaque](#opaque) |  | Opaque for non transparent material.<br>Note: This is the default volume optical properties contribution type. |
| <small><strong>oneof</strong> <code>contribution</code></small> `optic` | [OpticVolumeOpticalProperties](#opticvolumeopticalproperties) |  | Optic for transparent colorless material without bulk scattering. |
| <small><strong>oneof</strong> <code>contribution</code></small> `volume_optical_library` | [LibraryVolumeOpticalProperties](#libraryvolumeopticalproperties) |  | Volume optical property based on a VOP file. |
| `fast_transmission_gathering` | google.protobuf.BoolValue |  | Activation of fast transmission gathering.<br>Default value: `false` |

### TextureNormalization

The possible types of texture normalization method.

| Name | Number | Description |
| ---- | ------ | ----------- |
| TEXTURE_NORMALIZATION_UNSPECIFIED | 0 | Unspecified texture normalization type. |
| TEXTURE_NORMALIZATION_NONE | 1 | No texture normalization.<br>Note: The BRDF is blended with the texture not preserving the color and luminance. |
| TEXTURE_NORMALIZATION_COLOR_FROM_TEXTURE | 2 | Blend using the Color from texture mode. |
| TEXTURE_NORMALIZATION_COLOR_FROM_BRDF | 3 | Blend using the Color from BRDF mode. |

## asset_preparation_api/naturalSky/natural_sky.proto

This file describes the service used to create, edit and manage natural skies.

### NaturalSkyPreparation

Natural Sky Preparation Service

This service is used to create, edit and manage natural skies.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateNaturalSky | [CreateNaturalSkyRequest](#createnaturalskyrequest) | [CreateNaturalSkyResponse](#createnaturalskyresponse) | Creates a new natural sky with an optional name.<br>Note: Names must be unique amongst skies.<br>Note: If unspecified, default values are used.<br>Returns the identifier of the created natural sky. |
| GetNaturalSky | [GetNaturalSkyRequest](#getnaturalskyrequest) | [GetNaturalSkyResponse](#getnaturalskyresponse) | Gets the properties of a natural sky, given its identifier.<br>Returns the natural sky properties. |
| ListNaturalSkies | .google.protobuf.Empty | [ListNaturalSkiesResponse](#listnaturalskiesresponse) | Lists all the created natural skies.<br>Returns the identifiers and names of the natural skies. |
| UpdateNaturalSky | [UpdateNaturalSkyRequest](#updatenaturalskyrequest) | [UpdateNaturalSkyResponse](#updatenaturalskyresponse) | Edits the properties of a natural sky, given its identifier.<br>Note: Names must be unique amongst skies. |
| DeleteNaturalSky | [DeleteNaturalSkyRequest](#deletenaturalskyrequest) | [DeleteNaturalSkyResponse](#deletenaturalskyresponse) | Deletes a natural sky, given its identifier.<br>Note: If you delete a natural sky that is set as the active_sky in an environment, the environment is updated with the default sky set as the active sky. |
| CreateNaturalSkyState | [CreateNaturalSkyStateRequest](#createnaturalskystaterequest) | [CreateNaturalSkyStateResponse](#createnaturalskystateresponse) | Creates a new natural sky state with optional properties.<br>Note: Names must be unique amongst sibling states.<br>Note: "Default" name is reserved.<br>Note: If some properties are not specified, default values are used. <br>Returns the information about the created natural sky state. |
| GetNaturalSkyState | [GetNaturalSkyStateRequest](#getnaturalskystaterequest) | [GetNaturalSkyStateResponse](#getnaturalskystateresponse) | Gets the properties of a natural sky state, given the parent natural sky identifier and the state name.<br>Returns the natural sky state properties. |
| UpdateNaturalSkyState | [UpdateNaturalSkyStateRequest](#updatenaturalskystaterequest) | [UpdateNaturalSkyStateResponse](#updatenaturalskystateresponse) | Edits the properties of a state, given the parent natural sky identifier and the state name.<br>Note: Names must be unique amongst sibling states.<br>Note: "Default" name is reserved. |
| DeleteNaturalSkyState | [DeleteNaturalSkyStateRequest](#deletenaturalskystaterequest) | [DeleteNaturalSkyStateResponse](#deletenaturalskystateresponse) | Deletes a natural sky state, given the parent natural sky identifier and the state name. |

## asset_preparation_api/naturalSky/natural_sky_description.proto

This file describes the messages used to create, edit and manage natural skies.

### AmbientConditions

The ambient conditions properties.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `turbidity` | google.protobuf.DoubleValue |  | The sky turbidity.<br>Range: [2,9]<br>Default value: 3 |
| `ambient_temperature` | google.protobuf.DoubleValue |  | The ambient temperature.<br>Unit: Degree Celsius<br>Range: [-25,65]<br>Default value: 25 |
| `relative_humidity` | google.protobuf.DoubleValue |  | The relative humidity.<br>Unit: Percentage (%)<br>Range: [0,100]<br>Default value: 50 |
| <small><strong>oneof</strong> <code>override_max_solar_warming</code></small> `no_override` | [asset_preparation.v3.common.Empty](#empty) |  | The maximum solar warming is not overridden.<br>Note: This is the default mode.<br>Note: With this mode, the max_solar_warming is automatically computed. |
| <small><strong>oneof</strong> <code>override_max_solar_warming</code></small> `max_solar_warming` | google.protobuf.DoubleValue |  | The maximum solar warming, describing the maximal temperature difference between shadowed and sun-exposed road.<br>Unit: Degree Celsius<br>Range: [0,100]<br>Default value: 0 |
| `mean_road_emissivity` | google.protobuf.DoubleValue |  | Mean road emissivity.<br>Unit: Percentage (%)<br>Range: [0,100]<br>Default value: 10 |

### CreateNaturalSkyRequest

The information required to create a natural sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `name` | google.protobuf.StringValue |  | The natural sky name.<br>Note: Names must be unique amongst skies.<br>Note: If no name is defined, a default unique name is automatically set. |
| `properties` | [NaturalSkyProperties](#naturalskyproperties) |  | The natural sky properties. |

### CreateNaturalSkyResponse

The identifier of the created natural sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identity` | [NaturalSkyIdentity](#naturalskyidentity) |  | The identity of a natural sky.<br>Returns null in case of failure. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### CreateNaturalSkyStateRequest

The information required to create a natural sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The natural sky identifier. |
| `state_name` | string |  | The state name.<br>Note: Names must be unique amongst sibling states.<br>Note: "Default" name is reserved. |
| `base_state_name` | google.protobuf.StringValue |  | The name of an already existing state on which will be based the state to create.<br>Note: If not defined, the natural sky properties are used. |
| `state_properties` | [NaturalSkyProperties](#naturalskyproperties) |  | The state properties. |

### CreateNaturalSkyStateResponse

The response returned when creating a natural sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The natural sky identifier. |
| `state_name` | string |  | The new state name. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### Date

The date of a natural sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `day` | int32 |  |  |
| `month` | int32 |  |  |
| `year` | int32 |  |  |

### DeleteNaturalSkyRequest

The information required to delete a natural sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the natural sky to delete. |

### DeleteNaturalSkyResponse

The response returned when deleting a natural sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DeleteNaturalSkyStateRequest

The information required to delete a natural sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The natural sky identifier. |
| `state_name` | string |  | The name of the state to delete. |

### DeleteNaturalSkyStateResponse

The response returned when deleting a natural sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DynamicAccurateShadows

The properties of dynamic accurate shadows.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `shadow_offset_ratio` | google.protobuf.DoubleValue |  | The shadow offset ratio.<br>Note: Must be above 0.00001.<br>Default value: 0.01. |
| `shadow_radius` | google.protobuf.DoubleValue |  | The shadow radius.<br>Note: Must be equal or superior to 0.<br>Default value: 0 |
| `softness` | google.protobuf.DoubleValue |  | The softness.<br>Range: [0,2]<br>Default value: 0 |
| `resolution` | google.protobuf.Int32Value |  | The resolution.<br>Range: [1,8]<br>Default value: 4 |
| `near_field_precision` | google.protobuf.DoubleValue |  | The near field precision.<br>Range: [0,1]<br>Default value: 0.99. |

### GetNaturalSkyRequest

The information required to examine a natural sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the natural sky to examine. |

### GetNaturalSkyResponse

The information about a natural sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identity` | [NaturalSkyIdentity](#naturalskyidentity) |  | The natural sky identity. |
| `properties` | [NaturalSkyProperties](#naturalskyproperties) |  | The natural sky properties. |
| `state_names` | string | repeated | The names of the natural sky states. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### GetNaturalSkyStateRequest

The information required to examine a state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the natural sky. |
| `state_name` | string |  | The name of the state to examine. |

### GetNaturalSkyStateResponse

The information about a natural sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The identifier of the examined natural sky. |
| `state_name` | string |  | The state name. |
| `state_properties` | [NaturalSkyProperties](#naturalskyproperties) |  | The properties of the examined state. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the reading operation. |

### ListNaturalSkiesResponse

The identities of all the natural skies in the collection.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `skies` | [NaturalSkyIdentity](#naturalskyidentity) | repeated | Natural sky identities. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the listing operation. |

### Location

The location properties.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `latitude` | google.protobuf.DoubleValue |  | The latitude describing the south-north position. <br>Unit: Degree<br>Range: [-90,90]<br>Default value: 48 |
| `longitude` | google.protobuf.DoubleValue |  | The longitude describing the east-west position. <br>Unit: Degree<br>Range: [-180,180]<br>Default value: 2 |
| `cardinal_direction` | google.protobuf.DoubleValue |  | The cardinal direction for the X axis of the environment. <br>Unit: Degree<br>Range: [0,359]<br>Default value: 0 |

### NaturalSkyIdentity

The full identity of a natural sky, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The natural sky identifier. |
| `name` | string |  | The natural sky name. |

### NaturalSkyProperties

The properties of a natural sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `time` | [Time](#time) |  | The time of the day.<br>Default value: 12:00 |
| `date` | [Date](#date) |  | The date.<br>Default value: 02-15-2018 (mm-dd-yyyy) |
| `location` | [Location](#location) |  | The location. |
| `ambient_conditions` | [AmbientConditions](#ambientconditions) |  | The ambient conditions. |
| <small><strong>oneof</strong> <code>shadows</code></small> `no_shadow` | [asset_preparation.v3.common.Empty](#empty) |  | The sky does not cast shadows. |
| <small><strong>oneof</strong> <code>shadows</code></small> `dynamic_accurate_shadows` | [DynamicAccurateShadows](#dynamicaccurateshadows) |  | The sky produces shadows with Parallel-Split Shadow Maps with adaptive detailed.<br>Note: this is the default type of shadows. |

### Time

The time of a natural sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `hours` | int32 |  |  |
| `minutes` | int32 |  |  |

### UpdateNaturalSkyRequest

The information required to update a natural sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the natural sky to update. |
| `name` | google.protobuf.StringValue |  | The new natural sky name.<br>Note: Names must be unique amongst skies.<br>Note: If no name is defined, the name is not updated. |
| `properties` | [NaturalSkyProperties](#naturalskyproperties) |  | The natural sky properties.<br>Note: All the properties are optional. |

### UpdateNaturalSkyResponse

The response returned when updating a natural sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### UpdateNaturalSkyStateRequest

The information required to update a natural sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The natural sky identifier. |
| `state_name` | string |  | The current name of the state. |
| `state_new_name` | google.protobuf.StringValue |  | The new name of the state.<br>Note: Names must be unique amongst sibling states.<br>Note: "Default" name is reserved.<br>Note: If no name is defined, the name is not updated. |
| `state_properties` | [NaturalSkyProperties](#naturalskyproperties) |  | The new state properties. |

### UpdateNaturalSkyStateResponse

The response returned when updating a natural sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `state_name` | string |  | The state name. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

## asset_preparation_api/pointLight/point_light.proto

This file describes the service used to create, edit and manage point lights.

### PointLightPreparation

Point Light Preparation Service

This service is used to create, edit and manage point lights.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreatePointLight | [CreatePointLightRequest](#createpointlightrequest) | [CreatePointLightResponse](#createpointlightresponse) | Creates a new point light with optional properties.<br>Note: Names must be unique amongst point lights.<br>Note: If unspecified, default values are used.<br>Returns the identifier of the created point light. |
| GetPointLight | [GetPointLightRequest](#getpointlightrequest) | [GetPointLightResponse](#getpointlightresponse) | Gets the properties of a point light, given its identifier. <br>Returns the point light properties. |
| ListPointLights | .google.protobuf.Empty | [ListPointLightsResponse](#listpointlightsresponse) | Lists all the created point lights.<br>Returns the identifiers and names of the point lights. |
| UpdatePointLight | [UpdatePointLightRequest](#updatepointlightrequest) | [UpdatePointLightResponse](#updatepointlightresponse) | Edits the properties of a point light, given its identifier.<br>Note: Names must be unique amongst point lights. |
| DeletePointLight | [DeletePointLightRequest](#deletepointlightrequest) | [DeletePointLightResponse](#deletepointlightresponse) | Deletes a point light, given its identifier. |
| CreatePointLightState | [CreatePointLightStateRequest](#createpointlightstaterequest) | [CreatePointLightStateResponse](#createpointlightstateresponse) | Creates a new point light state with optional properties.<br>Note: Names must be unique amongst sibling point light states.<br>Note: "Default" name is reserved.<br>Note: If some properties are not specified, default values are used. <br>Returns the information about the created point light state. |
| GetPointLightState | [GetPointLightStateRequest](#getpointlightstaterequest) | [GetPointLightStateResponse](#getpointlightstateresponse) | Gets the properties of a point light state, given the parent point light identifier and the state name.<br>Returns the point light state properties. |
| UpdatePointLightState | [UpdatePointLightStateRequest](#updatepointlightstaterequest) | [UpdatePointLightStateResponse](#updatepointlightstateresponse) | Edits the properties of a state, given the parent point light identifier and the state name.<br>Note: Names must be unique amongst sibling point light states.<br>Note: "Default" name is reserved. |
| DeletePointLightState | [DeletePointLightStateRequest](#deletepointlightstaterequest) | [DeletePointLightStateResponse](#deletepointlightstateresponse) | Deletes a point light state, given the parent point light identifier and the state name. |

## asset_preparation_api/pointLight/point_light_description.proto

This file describes the messages used to create, edit and manage point lights.

### BlackBody

Spectrum based on a black body.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `temperature` | google.protobuf.DoubleValue |  | The temperature of the black body.<br>Unit: Kelvin (K)<br>Range: [0,30000]<br>Default value: 5500 |

### CreatePointLightRequest

The information required to create a point light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `name` | google.protobuf.StringValue |  | The point light name.<br>Note: Names must be unique amongst point lights.<br>Note: If no name is defined, a default unique name is automatically set. |
| `properties` | [PointLightProperties](#pointlightproperties) |  | The point light properties. |

### CreatePointLightResponse

The identifier of the created point light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identity` | [PointLightIdentity](#pointlightidentity) |  | The identity of a point light.<br>Returns null in case of failure. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### CreatePointLightStateRequest

The information required to create a point light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The point light identifier. |
| `state_name` | string |  | The state name.<br>Note: Names must be unique amongst sibling point light states.<br>Note: "Default" name is reserved. |
| `base_state_name` | google.protobuf.StringValue |  | The name of an already existing state on which will be based the state to create.<br>Note: If not defined, the point light properties are used. |
| `state_properties` | [PointLightProperties](#pointlightproperties) |  | The state properties. |

### CreatePointLightStateResponse

The response returned when creating a point light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The point light identifier. |
| `state_name` | string |  | The new state name. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### DeletePointLightRequest

The information required to delete a point light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the point light to delete. |

### DeletePointLightResponse

The response returned when deleting a point light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DeletePointLightStateRequest

The information required to delete a point light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The point light identifier. |
| `state_name` | string |  | The name of the state to delete. |

### DeletePointLightStateResponse

The response returned when deleting a point light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### GaussianDiagram

The properties of gaussian angular diagram.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `x` | google.protobuf.DoubleValue |  | Value along the X axis.<br>Unit: Degree<br>Range: [0,180]<br>Default value: 45 |
| `y` | google.protobuf.DoubleValue |  | Value along the Y axis.<br>Unit: Degree<br>Range: [0,180]<br>Default value: 45 |

### GetPointLightRequest

The information required to examine a point light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the point light to examine. |

### GetPointLightResponse

The information about a point light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identity` | [PointLightIdentity](#pointlightidentity) |  | The point light identity. |
| `properties` | [PointLightProperties](#pointlightproperties) |  | The point light properties. |
| `state_names` | string | repeated | The names of the point light states. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### GetPointLightStateRequest

The information required to examine a state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the point light. |
| `state_name` | string |  | The name of the state to examine. |

### GetPointLightStateResponse

The information about a point light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The identifier of the examined point light. |
| `state_name` | string |  | The state name. |
| `state_properties` | [PointLightProperties](#pointlightproperties) |  | The properties of the examined state. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the reading operation. |

### Intensity

The properties of a custom point light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `flux` | google.protobuf.DoubleValue |  | The flux.<br>Unit: lm<br>Note: Must be positive.<br>Default value: 1000 |
| `angular_precision` | google.protobuf.DoubleValue |  | The angular precision.<br>Unit: Degree<br>Range: [0,57]<br>Default value: 0 |
| <small><strong>oneof</strong> <code>angular_diagram</code></small> `diagram_library` | [LibraryDiagram](#librarydiagram) |  | Intensity based on a library angular diagram. |
| <small><strong>oneof</strong> <code>angular_diagram</code></small> `lambertian` | [LambertianDiagram](#lambertiandiagram) |  | Intensity based on a lambertian angular diagram. |
| <small><strong>oneof</strong> <code>angular_diagram</code></small> `gaussian` | [GaussianDiagram](#gaussiandiagram) |  | Intensity based on a gaussian angular diagram. |
| <small><strong>oneof</strong> <code>angular_diagram</code></small> `isotropic` | [IsotropicDiagram](#isotropicdiagram) |  | Intensity based on an isotropic angular diagram.<br>Note: This is the default type of angular diagram. |

### IsotropicDiagram

Isotropic angular diagram.

### LambertianDiagram

Lambertian angular diagram.

### LibraryDiagram

The properties of library angular diagram.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `diagram_identifier` | google.protobuf.Int32Value |  | The identifier of the intensity diagram (created using the <br>Resource service) referenced in the point light.<br>Note: The intensity diagram reference can be removed by setting the value '-1'. |

### ListPointLightsResponse

The identities of all point lights in the collection.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `point_lights` | [PointLightIdentity](#pointlightidentity) | repeated | Point light identities. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the listing operation. |

### Monochromatic

Monochromatic spectrum.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `wavelength` | google.protobuf.DoubleValue |  | The emission wavelength of the Spectrum.<br>Unit: nanometer (nm)<br>Range: [360,813]<br>Default value: 580 |

### PointLightIdentity

The full identity of a point light, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The point light identifier. |
| `name` | string |  | The point light name. |

### PointLightProperties

The properties of a point light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `intensity` | [Intensity](#intensity) |  | The intensity. |
| <small><strong>oneof</strong> <code>spectrum</code></small> `spectrum_library` | [SpectrumLibrary](#spectrumlibrary) |  | Spectrum based on a spectrum file. |
| <small><strong>oneof</strong> <code>spectrum</code></small> `black_body` | [BlackBody](#blackbody) |  | Spectrum based on a black body.<br>Note: This is the default type of spectrum. |
| <small><strong>oneof</strong> <code>spectrum</code></small> `monochromatic` | [Monochromatic](#monochromatic) |  | Monochromatic spectrum. |
| <small><strong>oneof</strong> <code>spectrum</code></small> `color_rgb` | [asset_preparation.v3.common.ColorRgb](#colorrgb) |  | Spectrum based on a RGB color. <br>Default value: (255,255,255) |
| <small><strong>oneof</strong> <code>spectrum</code></small> `color_hsv` | [asset_preparation.v3.common.ColorHsv](#colorhsv) |  | Spectrum based on an HSV color. <br>Default value: (0,0,100) |
| <small><strong>oneof</strong> <code>shadows</code></small> `no_shadow` | [asset_preparation.v3.common.Empty](#empty) |  | The point light does not cast shadows. |
| <small><strong>oneof</strong> <code>shadows</code></small> `static_shadows` | [Shadows](#shadows) |  | The point light produces static shadows. |
| <small><strong>oneof</strong> <code>shadows</code></small> `dynamic_shadows` | [Shadows](#shadows) |  | The point light produces dynamic shadows.<br>Note: This is the default type of shadows. |
| `rendering` | [Rendering](#rendering) |  | The rendering properties. |

### Rendering

The rendering properties.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `range` | google.protobuf.DoubleValue |  | The range describing the maximum distance of the light radiation.<br>Unit: Meter (m)<br>Note: Must be positive.<br>Default value: 128 |

### Shadows

The properties of shadows.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `near_clip` | google.protobuf.DoubleValue |  | The near clip.<br>Unit: Meter (m)<br>Note: Must be positive.<br>Default value: 0.1. |
| `shadows_offset_ratio` | google.protobuf.DoubleValue |  | The shadow offset ratio.<br>Note: Must be above 0.00001.<br>Default value: 0.01. |
| `softness` | google.protobuf.DoubleValue |  | The softness.<br>Range: [0,2]<br>Default value: 0 |

### SpectrumLibrary

Spectrum based on a spectrum file.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `spectrum_identifier` | google.protobuf.Int32Value |  | The identifier of the spectrum (created using the Resource service) referenced in the point light.<br>Note: The spectrum reference can be removed by setting the value '-1'. |

### UpdatePointLightRequest

The information required to update a point light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the point light to update. |
| `name` | google.protobuf.StringValue |  | The point light name.<br>Note: Names must be unique amongst point lights.<br>Note: If no name is defined, the name is not updated. |
| `properties` | [PointLightProperties](#pointlightproperties) |  | The point light properties.<br>Note: All the properties are optional. |

### UpdatePointLightResponse

The response returned when updating a point light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### UpdatePointLightStateRequest

The information required to update a point light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The point light identifier. |
| `state_name` | string |  | The current name of the state. |
| `state_new_name` | google.protobuf.StringValue |  | The new name of the state.<br>Note: Names must be unique amongst sibling point light states.<br>Note: "Default" name is reserved.<br>Note: If no name is defined, the name is not updated. |
| `state_properties` | [PointLightProperties](#pointlightproperties) |  | The new state properties. |

### UpdatePointLightStateResponse

The response returned when updating a point light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `state_name` | string |  | The state name. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

## asset_preparation_api/resource/resource.proto

This file describes the service used to manage resources.

### ResourcePreparation

Resource Preparation Service

This service is used to manage resources.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| UploadResource | [.asset_preparation.v3.common.Chunk](#chunk) stream | [UploadResourceResponse](#uploadresourceresponse) | Uploads a new resource with a given stream of chunks containing the "AVX MIMEType" metadata.<br>Note: A resource name can be provided using the "AVX DataName" key in the metadata.<br>Note: Importing an irradiance map may take several minutes. <br>The server response may be "freezing" during the import time.<br>Returns the identity of the created resource. |
| DownloadResourceAsChunks | [DownloadResourceAsChunksRequest](#downloadresourceaschunksrequest) | [.asset_preparation.v3.common.Chunk](#chunk) stream | Downloads a resource binary content as a stream of chunks with a given identifier and type.<br>Note: The first chunk of the stream provides the metadata "AVX MIMEType" and "AVX DataName". The last chunk of the stream provides the metadata "AVX Status Error" if an error occurred, "AVX Status Warning" or "AVX Status Info" if the export succeeded.<br>Note: Irradiance maps cannot be downloaded. |
| DownloadResourceAsFile | [DownloadResourceAsFileRequest](#downloadresourceasfilerequest) | [DownloadResourceAsFileResponse](#downloadresourceasfileresponse) | Downloads a resource file with a given identifier, type and destination path.<br>Note: Irradiance maps cannot be downloaded. |
| ListResources | [ListResourcesRequest](#listresourcesrequest) | [ListResourcesResponse](#listresourcesresponse) | Lists the identity of each resource of the given type.<br>Note: If no type is provided, all the resources are listed. |
| DeleteResource | [DeleteResourceRequest](#deleteresourcerequest) | [DeleteResourceResponse](#deleteresourceresponse) | Deletes a resource, given its identifier and type. <br>Note: If no identifier and type are provided, all the resources are released.<br>Note: If only the type is provided, all the resources of the given type are released. |

## asset_preparation_api/resource/resource_description.proto

This file describes the messages used to manage resources.

### DeleteResourceRequest

The information required to delete a resource from the collection.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the resource to delete. |
| `type` | google.protobuf.StringValue |  | The type of the resource to delete. |

### DeleteResourceResponse

The response returned when deleting a resource.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DownloadResourceAsChunksRequest

The request to export a resource as a stream.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the resource to download. |
| `type` | string |  | The type of the resource to download. |

### DownloadResourceAsFileRequest

The request to export a resource as a file.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the resource to download. |
| `type` | string |  | The type of the resource to download. |
| `file_path` | string |  | The path of the exported file.<br>Note: The file extension must be correct according to the resource type.<br>If extension is missing, it will be added automatically according to the resource type. |
| `overwrite` | google.protobuf.BoolValue |  | Describes whether the file should be overwritten or not.<br>Default value: `true` |

### DownloadResourceAsFileResponse

The response returned when downloading a resource as a file.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the download operation. |

### ListResourcesRequest

The request to list all the uploaded resources of a specific type, if defined.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `type` | google.protobuf.StringValue |  | The type of resources to list. |

### ListResourcesResponse

The identities of all resources in the collection.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifiers` | [ResourceIdentity](#resourceidentity) | repeated | Resource identities. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the listing operation. |

### ResourceIdentity

The full identity of a resource, consisting of an identifier, a type, a name and an extension.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The identifier of the resource. |
| `type` | string |  | The type of the resource. |
| `name` | string |  | The name of the resource. |
| `extension` | string |  | The resource extension. |

### UploadResourceResponse

The identity of the uploaded resource.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identity` | [ResourceIdentity](#resourceidentity) |  | The resource identity. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the upload operation. |

## asset_preparation_api/scenetree/scenetree.proto

This file describes the service used to define, edit and manage scene trees.

### SceneTreePreparation

Scene Tree Preparation Service

This service is used to create, edit and manage scene trees.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateSceneTree | [CreateSceneTreeRequest](#createscenetreerequest) | [CreateSceneTreeResponse](#createscenetreeresponse) | Creates a new scene tree with an optional given name.<br>Returns the identifier of the created scene tree. |
| GetSceneTree | [GetSceneTreeRequest](#getscenetreerequest) | [GetSceneTreeResponse](#getscenetreeresponse) | Gets the properties of a scene tree, given its identifier. <br>Returns the scene tree properties. |
| ListSceneTrees | .google.protobuf.Empty | [ListSceneTreesResponse](#listscenetreesresponse) | Lists all the created scene trees. <br>Returns the identifiers and names of the scene trees. |
| UpdateSceneTree | [UpdateSceneTreeRequest](#updatescenetreerequest) | [UpdateSceneTreeResponse](#updatescenetreeresponse) | Edits the properties of a scene tree, given its identifier. |
| DeleteSceneTree | [DeleteSceneTreeRequest](#deletescenetreerequest) | [DeleteSceneTreeResponse](#deletescenetreeresponse) | Deletes a scene tree, given its identifier. |
| CreateNode | [CreateNodeRequest](#createnoderequest) | [CreateNodeResponse](#createnoderesponse) | Creates a node given the parent scene tree or node identifier, with optional node parameters.<br>Note: Names must be unique amongst sibling nodes.<br>Note: The node is visible by default.<br>Returns the identifier of the created node. |
| GetNode | [GetNodeRequest](#getnoderequest) | [GetNodeResponse](#getnoderesponse) | Gets the properties of a node, given its identifier.<br>Returns the node properties. |
| UpdateNode | [UpdateNodeRequest](#updatenoderequest) | [UpdateNodeResponse](#updatenoderesponse) | Edits the properties of a node, given its identifier.<br>Note: Names must be unique amongst sibling nodes. |
| DeleteNode | [DeleteNodeRequest](#deletenoderequest) | [DeleteNodeResponse](#deletenoderesponse) | Deletes a node, given its identifier. |
| CreateGeometryInstance | [CreateGeometryInstanceRequest](#creategeometryinstancerequest) | [CreateGeometryInstanceResponse](#creategeometryinstanceresponse) | Creates a geometry instance under a node, given the node identifier and geometry instance parameters.<br>Note: The geometry instance is visible by default.<br>Returns the identifier of the created geometry instance. |
| GetGeometryInstance | [GetGeometryInstanceRequest](#getgeometryinstancerequest) | [GetGeometryInstanceResponse](#getgeometryinstanceresponse) | Gets the properties of a geometry instance, given its identifier.<br>Returns the geometry instances properties. |
| UpdateGeometryInstance | [UpdateGeometryInstanceRequest](#updategeometryinstancerequest) | [UpdateGeometryInstanceResponse](#updategeometryinstanceresponse) | Edits the properties of a geometry instance, given its identifier. |
| DeleteGeometryInstance | [DeleteGeometryInstanceRequest](#deletegeometryinstancerequest) | [DeleteGeometryInstanceResponse](#deletegeometryinstanceresponse) | Deletes a geometry instance, given its identifier. |
| CreateDirectionalLightInstance | [CreateDirectionalLightInstanceRequest](#createdirectionallightinstancerequest) | [CreateDirectionalLightInstanceResponse](#createdirectionallightinstanceresponse) | Creates a directional light instance under a node, given the node identifier and directional light instance parameters.<br>Note: The directional light instance is visible by default.<br>Returns the identifier of the created directional light instance. |
| GetDirectionalLightInstance | [GetDirectionalLightInstanceRequest](#getdirectionallightinstancerequest) | [GetDirectionalLightInstanceResponse](#getdirectionallightinstanceresponse) | Gets the properties of a directional light instance, given its identifier.<br>Returns the directional light instance properties. |
| UpdateDirectionalLightInstance | [UpdateDirectionalLightInstanceRequest](#updatedirectionallightinstancerequest) | [UpdateDirectionalLightInstanceResponse](#updatedirectionallightinstanceresponse) | Edits the properties of a directional light instance, given its identifier. |
| DeleteDirectionalLightInstance | [DeleteDirectionalLightInstanceRequest](#deletedirectionallightinstancerequest) | [DeleteDirectionalLightInstanceResponse](#deletedirectionallightinstanceresponse) | Deletes a directional light instance, given its identifier. |
| CreatePointLightInstance | [CreatePointLightInstanceRequest](#createpointlightinstancerequest) | [CreatePointLightInstanceResponse](#createpointlightinstanceresponse) | Creates a point light instance under a node, given the node identifier and point light instance parameters.<br>Note: The point light instance is visible by default.<br>Returns the identifier of the created point light instance. |
| GetPointLightInstance | [GetPointLightInstanceRequest](#getpointlightinstancerequest) | [GetPointLightInstanceResponse](#getpointlightinstanceresponse) | Gets the properties of a point light instance, given its identifier.<br>Returns the point light instance properties. |
| UpdatePointLightInstance | [UpdatePointLightInstanceRequest](#updatepointlightinstancerequest) | [UpdatePointLightInstanceResponse](#updatepointlightinstanceresponse) | Edits the properties of a point light instance, given its identifier. |
| DeletePointLightInstance | [DeletePointLightInstanceRequest](#deletepointlightinstancerequest) | [DeletePointLightInstanceResponse](#deletepointlightinstanceresponse) | Deletes a point light instance, given its identifier. |
| PutSceneTreeFromAssetChunks | [.asset_preparation.v3.common.Chunk](#chunk) stream | [PutSceneTreeFromAssetResponse](#putscenetreefromassetresponse) | Creates a new scene tree on the server by uploading an asset as a given stream of chunks containing the "AVX ConflictPolicy" metadata. <br>All dependencies are uploaded into corresponding services, depending on the given conflict policy.<br>Note: It is not possible to upload an asset including an object in which several states have the same name, or including a geometry with several material parts with the same name. |
| PutSceneTreeFromAssetFile | [PutSceneTreeFromAssetFileRequest](#putscenetreefromassetfilerequest) | [PutSceneTreeFromAssetResponse](#putscenetreefromassetresponse) | Creates a new scene tree on the server by uploading a given asset file. <br>All dependencies are uploaded into corresponding services, depending on the given conflict policy.<br>Note: It is not possible to upload an asset including an object in which several states have the same name, or including a geometry with several material parts with the same name. |
| GetAssetChunks | [GetAssetChunksRequest](#getassetchunksrequest) | [.asset_preparation.v3.common.Chunk](#chunk) stream | Packages the scene tree as an asset and exports it as a byte stream.<br>Note: The last chunk of the stream provides the metadata "AVX Status Error" if an error occurred, "AVX Status Warning" or "AVX Status Info" if the export succeeded. |
| GetAssetFile | [GetAssetFileRequest](#getassetfilerequest) | [GetAssetFileResponse](#getassetfileresponse) | Packages the scene tree as an asset and exports it as a .asset file. |

## asset_preparation_api/scenetree/scenetree_description.proto

This file describes the messages used to define, edit and manage scene trees.

### CreateDirectionalLightInstanceRequest

The information required to create a directional light instance under a node. 

Note: The directional light instance is visible by default.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `node_identifier` | google.protobuf.Int32Value |  | The identifier of the parent node. |
| `name` | google.protobuf.StringValue |  | The name of the directional light instance.<br>Note: Names must be unique amongst siblings (nodes, geometries and light instances).<br>Note: If no name is defined, a default unique name is automatically set. |
| `properties` | [DirectionalLightInstanceProperties](#directionallightinstanceproperties) |  | The directional light instance properties. |

### CreateDirectionalLightInstanceResponse

The identifier of the created directional light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `node_identifier` | google.protobuf.Int32Value |  | The identifier of the parent node. |
| `instance_identity` | [DirectionalLightInstanceIdentity](#directionallightinstanceidentity) |  | The identifier of the directional light instance.<br>Returns null in case of failure. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### CreateGeometryInstanceRequest

The information required to create a geometry instance under a node.

Note: The geometry instance is visible by default.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `node_identifier` | google.protobuf.Int32Value |  | The identifier of the parent node. |
| `name` | google.protobuf.StringValue |  | The name of the geometry instance.<br>Note: Names must be unique amongst siblings (nodes, geometries and light instances).<br>Note: If no name is defined, a default unique name is automatically set. |
| `properties` | [GeometryInstanceProperties](#geometryinstanceproperties) |  | The geometry instance properties. |

### CreateGeometryInstanceResponse

The identifier of the created geometry instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `node_identifier` | google.protobuf.Int32Value |  | The identifier of the parent node. |
| `instance_identity` | [GeometryInstanceIdentity](#geometryinstanceidentity) |  | The identity of the geometry instance.<br>Returns null in case of failure. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### CreateNodeRequest

The information required to create a node under a scene tree or a node.

Note: The node is visible by default.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>parent</code></small> `scene_tree_identifier` | int32 |  | The identifier of the parent scene tree. |
| <small><strong>oneof</strong> <code>parent</code></small> `node_identifier` | int32 |  | The identifier of the parent node. |
| `name` | google.protobuf.StringValue |  | The node name.<br>Note: Names must be unique amongst siblings (nodes, geometries and light instances).<br>Note: If no name is defined, a default unique name is automatically set. |
| `properties` | [NodeProperties](#nodeproperties) |  | The node properties. |

### CreateNodeResponse

The identifier of the created node.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>parent</code></small> `scene_tree_identifier` | int32 |  | The identifier of the parent scene tree. |
| <small><strong>oneof</strong> <code>parent</code></small> `node_identifier` | int32 |  | The identifier of the parent node. |
| `identity` | [NodeIdentity](#nodeidentity) |  | The identity of the node.<br>Returns null in case of failure. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### CreatePointLightInstanceRequest

The information required to create a point light instance under a node. 

Note: The point light instance is visible by default.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `node_identifier` | google.protobuf.Int32Value |  | The identifier of the parent node. |
| `name` | google.protobuf.StringValue |  | The name of the point light instance.<br>Note: Names must be unique amongst siblings (nodes, geometries and light instances).<br>Note: If no name is defined, a default unique name is automatically set. |
| `properties` | [PointLightInstanceProperties](#pointlightinstanceproperties) |  | The point light instance properties. |

### CreatePointLightInstanceResponse

The identifier of the created point light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `node_identifier` | google.protobuf.Int32Value |  | The identifier of the parent node. |
| `instance_identity` | [PointLightInstanceIdentity](#pointlightinstanceidentity) |  | The identity of the point light instance.<br>Returns null in case of failure. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### CreateSceneTreeRequest

The information required to create a scene tree.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `name` | google.protobuf.StringValue |  | The scene tree name.<br>Note: If no name is defined, a default unique name is automatically set. |

### CreateSceneTreeResponse

The identity of the created scene tree.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identity` | [SceneTreeIdentity](#scenetreeidentity) |  | The scene tree identity.<br>Returns null in case of failure. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### CustomTemperature

The custom temperature.

Unit: Degree Celsius

Range: [-40,100]

Default value: 0

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `value` | google.protobuf.DoubleValue |  | The temperature value. |

### DeleteDirectionalLightInstanceRequest

The information required to delete a directional light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `node_identifier` | google.protobuf.Int32Value |  | The identifier of the parent node. |
| `instance_identifier` | google.protobuf.Int32Value |  | The identifier of the directional light instance. |

### DeleteDirectionalLightInstanceResponse

The response returned when deleting a directional light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DeleteGeometryInstanceRequest

The information required to delete a geometry instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `node_identifier` | google.protobuf.Int32Value |  | The identifier of the parent node. |
| `instance_identifier` | google.protobuf.Int32Value |  | The identifier of the geometry instance. |

### DeleteGeometryInstanceResponse

The response returned when deleting a geometry instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DeleteNodeRequest

The information required to delete a node.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>parent</code></small> `scene_tree_identifier` | int32 |  | The identifier of the parent scene tree. |
| <small><strong>oneof</strong> <code>parent</code></small> `node_identifier` | int32 |  | The identifier of the parent node. |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the node. |

### DeleteNodeResponse

The response returned when deleting a node.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DeletePointLightInstanceRequest

The information required to delete a point light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `node_identifier` | google.protobuf.Int32Value |  | The identifier of the parent node. |
| `instance_identifier` | google.protobuf.Int32Value |  | The identifier of the point light instance. |

### DeletePointLightInstanceResponse

The response returned when deleting a point light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DeleteSceneTreeRequest

The information required to delete a scene tree.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the scene tree to delete. |

### DeleteSceneTreeResponse

The response returned when deleting a scene tree.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DirectionalLightInstanceIdentity

The full identity of a directional light instance, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The directional light instance identifier. |
| `name` | string |  | The directional light instance name. |

### DirectionalLightInstanceProperties

The properties of a directional light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `directional_light_identifier` | google.protobuf.Int32Value |  | The identifier of the referenced directional light.<br>Note: Mandatory for creation. Ignored during edition. |
| `transform` | [Transform](#transform) |  | The directional light instance transformation.<br>Note: The scale should not be set for light instances. <br>If defined, it will be ignored. |
| `visibility` | google.protobuf.BoolValue |  | The directional light instance visibility.<br>Note: The directional light instance is visible by default. |

### GeometryInstanceIdentity

The full identity of a geometry instance, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The geometry instance identifier. |
| `name` | string |  | The geometry instance name. |

### GeometryInstanceProperties

The properties of a geometry instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `geometry_identifier` | google.protobuf.Int32Value |  | The identifier of the referenced geometry.<br>Note: Mandatory for creation. Ignored during edition. |
| `transform` | [Transform](#transform) |  | The geometry instance transformation. |
| `visibility` | google.protobuf.BoolValue |  | The geometry instance visibility.<br>Note: The geometry instance is visible by default. |
| `thermal_properties` | [ThermalProperties](#thermalproperties) |  | The thermal properties of the instance.<br>Note: The thermal properties are not set by default. |
| `removed_tags` | [asset_preparation.v3.common.TagIdentity](#tagidentity) | repeated | Tags to remove from the geometry instance. |
| `added_tags` | [asset_preparation.v3.common.Tag](#tag) | repeated | Tag(s) to add to the geometry instance.<br>Note: If you want to tag a dynamic asset as a custom simulation object, you must add the custom tag first, then add a second asset tag: <br>BASIC_TYPE_VEHICLE, BASIC_TYPE_PEDESTRIAN or BASIC_TYPE_ANIMAL, in this specific order. |

### GetAssetChunksRequest

The information required to export a scene tree as a stream of asset chunks.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the scene tree to export. |
| `protect` | bool |  | Defines whether the generated asset should be protected from import or not.<br>Note: Protection is irreversible.<br>Default value: `false` |

### GetAssetFileRequest

The information required to export a scene tree as an asset file.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the scene tree to export. |
| `file_path` | string |  | The path of the exported file. |
| `overwrite` | google.protobuf.BoolValue |  | Defines whether the file should be overwritten or not.<br>Default value: `true` |
| `protect` | bool |  | Defines whether the generated asset should be protected from import or not.<br>Note: Protection is irreversible.<br>Default value: `false` |

### GetAssetFileResponse

The response returned when exporting a scene tree as an asset file.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the export operation. |

### GetDirectionalLightInstanceRequest

The information required to examine a directional light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the directional light instance to examine. |

### GetDirectionalLightInstanceResponse

The information about a directional light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identity` | [DirectionalLightInstanceIdentity](#directionallightinstanceidentity) |  | The identity of the directional light instance. |
| `properties` | [DirectionalLightInstanceProperties](#directionallightinstanceproperties) |  | The directional light instance properties. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### GetGeometryInstanceRequest

The information required to examine a geometry instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the geometry instance to examine. |

### GetGeometryInstanceResponse

The information about a geometry instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identity` | [GeometryInstanceIdentity](#geometryinstanceidentity) |  | The identity of the geometry instance. |
| `properties` | [GeometryInstanceProperties](#geometryinstanceproperties) |  | The geometry instance properties. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### GetNodeRequest

The information required to examine a node.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the node to examine. |

### GetNodeResponse

The information about a node.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identity` | [NodeIdentity](#nodeidentity) |  | The identity of the node. |
| `properties` | [NodeProperties](#nodeproperties) |  | The node properties. |
| `nodes` | [NodeIdentity](#nodeidentity) | repeated | The identities of all the direct child nodes. |
| `geometry_instances` | [GeometryInstanceIdentity](#geometryinstanceidentity) | repeated | The identities of all the geometries instantiated under the current node. |
| `directional_light_instances` | [DirectionalLightInstanceIdentity](#directionallightinstanceidentity) | repeated | The identities of all the directional lights instantiated under the current node. |
| `point_light_instances` | [PointLightInstanceIdentity](#pointlightinstanceidentity) | repeated | The identities of all the point lights instantiated under the current node. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### GetPointLightInstanceRequest

The information required to examine a point light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the point light instance to examine. |

### GetPointLightInstanceResponse

The information about a point light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identity` | [PointLightInstanceIdentity](#pointlightinstanceidentity) |  | The identity of the point light instance. |
| `properties` | [PointLightInstanceProperties](#pointlightinstanceproperties) |  | The point light instance properties. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### GetSceneTreeRequest

The information required to examine a scene tree.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the scene tree to examine. |

### GetSceneTreeResponse

The information about a scene tree.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identity` | [SceneTreeIdentity](#scenetreeidentity) |  | The scene tree identity. |
| `nodes` | [NodeIdentity](#nodeidentity) | repeated | The identities of all the nodes in the scene tree (direct children only). |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### ListSceneTreesResponse

The identities of all scene trees in the collection.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `scene_trees` | [SceneTreeIdentity](#scenetreeidentity) | repeated | Scene tree identities. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the listing operation. |

### NodeIdentity

The full identity of a node, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The node identifier. |
| `name` | string |  | The node name. |

### NodeProperties

The properties of a node.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `transform` | [Transform](#transform) |  | The node transformation. |
| `visibility` | google.protobuf.BoolValue |  | The node visibility.<br>Note: The node is visible by default. |
| `removed_tags` | [asset_preparation.v3.common.TagIdentity](#tagidentity) | repeated | Tag(s) to remove from the node. |
| `added_tags` | [asset_preparation.v3.common.Tag](#tag) | repeated | Tag(s) to add to the node.<br>Note: If you want to tag a dynamic asset as a custom simulation object, you must add the custom tag first, then add a second asset tag: <br>BASIC_TYPE_VEHICLE, BASIC_TYPE_PEDESTRIAN or BASIC_TYPE_ANIMAL, in this specific order. |

### PointLightInstanceIdentity

The full identity of a point light instance, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The point light instance identifier. |
| `name` | string |  | The point light instance name. |

### PointLightInstanceProperties

The properties of a point light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `point_light_identifier` | google.protobuf.Int32Value |  | The identifier of the referenced point light.<br>Note: Mandatory for creation. Ignored during edition. |
| `transform` | [Transform](#transform) |  | The point light instance transformation.<br>Note: The scale should not be set for light instances. <br>If defined, it will be ignored. |
| `visibility` | google.protobuf.BoolValue |  | The point light instance visibility.<br>Note: The point light instance is visible by default. |
| `removed_tags` | [asset_preparation.v3.common.TagIdentity](#tagidentity) | repeated | Tags to remove from the point light instance. |
| `added_tags` | [asset_preparation.v3.common.Tag](#tag) | repeated | Tag(s) to add to the point light instance.<br>Note: Only LightingType Tags are allowed. |

### PutSceneTreeFromAssetFileRequest

The information required to create a scene tree from an uploaded asset file.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `file_path` | string |  | The path of the .asset file to upload. |
| `name_conflict_policy` | [asset_preparation.v3.common.ConflictPolicy](#conflictpolicy) |  | The policy to follow in case of name conflict with server's objects. |

### PutSceneTreeFromAssetResponse

The response returned when uploading an asset.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The imported scene tree identifier. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the upload operation. |

### SceneTreeIdentity

The full identity of a scene tree, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The scene tree identifier. |
| `name` | string |  | The scene tree name. |

### ThermalProperties

The thermal properties.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>temperature</code></small> `no_custom_temperature` | [asset_preparation.v3.common.Empty](#empty) |  | No custom temperature.<br>Note: This is the default mode.<br>With this mode, if a natural sky is set in the environment, the temperature of the geometry instance will be the Ambient Temperature set in the sky properties. |
| <small><strong>oneof</strong> <code>temperature</code></small> `custom_temperature` | [CustomTemperature](#customtemperature) |  | The custom temperature. |

### UpdateDirectionalLightInstanceRequest

The information required to edit the properties of a directional light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `node_identifier` | google.protobuf.Int32Value |  | The identifier of the parent node. |
| `instance_identifier` | google.protobuf.Int32Value |  | The identifier of the directional light instance. |
| `name` | google.protobuf.StringValue |  | The name of the directional light instance.<br>Note: Names must be unique amongst siblings (nodes, geometries and light instances).<br>Note: If no name is defined, the name is not updated. |
| `properties` | [DirectionalLightInstanceProperties](#directionallightinstanceproperties) |  | The new directional light instance properties.<br>Note: All the properties are optional. |

### UpdateDirectionalLightInstanceResponse

The response returned when updating a directional light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### UpdateGeometryInstanceRequest

The information required to update a geometry instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `node_identifier` | google.protobuf.Int32Value |  | The identifier of the parent node. |
| `instance_identifier` | google.protobuf.Int32Value |  | The identifier of the geometry instance. |
| `name` | google.protobuf.StringValue |  | The name of the geometry instance.<br>Note: Names must be unique amongst siblings (nodes, geometries and light instances).<br>Note: If no name is defined, the name is not updated. |
| `properties` | [GeometryInstanceProperties](#geometryinstanceproperties) |  | The geometry instance properties.<br>Note: All the properties are optional. |

### UpdateGeometryInstanceResponse

The response returned when updating a geometry instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### UpdateNodeRequest

The information required to update a node.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>parent</code></small> `scene_tree_identifier` | int32 |  | The identifier of the parent scene tree. |
| <small><strong>oneof</strong> <code>parent</code></small> `node_identifier` | int32 |  | The identifier of the parent node. |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the node. |
| `name` | google.protobuf.StringValue |  | The node name.<br>Note: Names must be unique amongst siblings (nodes, geometries and light instances).<br>Note: If no name is defined, the name is not updated. |
| `properties` | [NodeProperties](#nodeproperties) |  | The node properties.<br>Note: All the properties are optional. |

### UpdateNodeResponse

The response returned when updating a node.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### UpdatePointLightInstanceRequest

The information required to update a point light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `node_identifier` | google.protobuf.Int32Value |  | The identifier of the parent node. |
| `instance_identifier` | google.protobuf.Int32Value |  | The identifier of the point light instance. |
| `name` | google.protobuf.StringValue |  | The name of the point light instance.<br>Note: Names must be unique amongst siblings (nodes, geometries and light instances).<br>Note: If no name is defined, the name is not updated. |
| `properties` | [PointLightInstanceProperties](#pointlightinstanceproperties) |  | The new point light instance properties.<br>Note: All the properties are optional. |

### UpdatePointLightInstanceResponse

The response returned when updating a point light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### UpdateSceneTreeRequest

The information required to update a scene tree.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the scene tree to update. |
| `name` | google.protobuf.StringValue |  | The scene tree name.<br>Note: If no name is defined, the name is not updated. |

### UpdateSceneTreeResponse

The response returned when updating a scene tree.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

## asset_preparation_api/scenetree/transform.proto

This file describes the messages used to transform objects in the scene tree hierarchy.

### EulerAngles

Euler angles.

Unit: Degree

Note: Rotations expressed in Euler Angles are applied following the intrinsic sequence: pitch (X), yaw (Y), roll (Z). When a rotation is set around 2 axes or more, the vertex is rotated first around the X axis. Then, the rotation around the Y axis is applied to the vertex rotated on X. Finally, the rotation around the Z axis is applied to the vertex rotated on X and Y.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `x` | double |  | Rotation along the X axis. |
| `y` | double |  | Rotation along the Y axis. |
| `z` | double |  | Rotation along the Z axis. |

### Quaternion

A quaternion.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `x` | double |  | X value of the quaternion. |
| `y` | double |  | Y value of the quaternion. |
| `z` | double |  | Z value of the quaternion. |
| `w` | double |  | W value of the quaternion. |

### Transform

The transformation of an object in the scene tree hierarchy.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `x_position` | google.protobuf.DoubleValue |  | Position along the X axis.<br>Unit: meter (m) |
| `y_position` | google.protobuf.DoubleValue |  | Position along the Y axis.<br>Unit: meter (m) |
| `z_position` | google.protobuf.DoubleValue |  | Position along the Z axis.<br>Unit: meter (m) |
| <small><strong>oneof</strong> <code>rotation</code></small> `quaternion` | [Quaternion](#quaternion) |  | Rotation expressed as a quaternion. |
| <small><strong>oneof</strong> <code>rotation</code></small> `euler_angles` | [EulerAngles](#eulerangles) |  | Rotation expressed as Euler angles. |
| `x_scale` | google.protobuf.DoubleValue |  | Scale along the X axis. |
| `y_scale` | google.protobuf.DoubleValue |  | Scale along the Y axis. |
| `z_scale` | google.protobuf.DoubleValue |  | Scale along the Z axis. |
| `relativity` | [Relativity](#relativity) |  | Relativity. |

### Relativity

Relativity of a transformation.

| Name | Number | Description |
| ---- | ------ | ----------- |
| RELATIVITY_UNSPECIFIED | 0 | The transformation relativity is unspecified. |
| RELATIVITY_RELATIVE | 1 | The transformation is relative to the object's parent. |
| RELATIVITY_ABSOLUTE | 2 | The transformation is in world coordinates. |

## asset_preparation_api/surfaceSource/surface_source.proto

This file describes the service used to create, edit and manage surface sources.

### SurfaceSourcePreparation

Surface Source Preparation Service

This service is used to create, edit and manage surface sources.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateSurfaceSource | [CreateSurfaceSourceRequest](#createsurfacesourcerequest) | [CreateSurfaceSourceResponse](#createsurfacesourceresponse) | Creates a new surface source with an optional name and properties.<br>Note: If unspecified, default values are used.<br>Returns the identifier of the created surface source. |
| GetSurfaceSource | [GetSurfaceSourceRequest](#getsurfacesourcerequest) | [GetSurfaceSourceResponse](#getsurfacesourceresponse) | Gets the properties of a surface source, given its identifier. <br>Returns the surface source or display source properties. |
| ListSurfaceSources | .google.protobuf.Empty | [ListSurfaceSourcesResponse](#listsurfacesourcesresponse) | Lists all the created surface sources.<br>Returns the identifiers and names of the surface sources. |
| UpdateSurfaceSource | [UpdateSurfaceSourceRequest](#updatesurfacesourcerequest) | [UpdateSurfaceSourceResponse](#updatesurfacesourceresponse) | Edits the properties of a surface source, given its identifier.<br>Note: Names must be unique amongst surface sources. |
| DeleteSurfaceSource | [DeleteSurfaceSourceRequest](#deletesurfacesourcerequest) | [DeleteSurfaceSourceResponse](#deletesurfacesourceresponse) | Deletes a surface source, given its identifier. |
| CreateSurfaceSourceState | [CreateSurfaceSourceStateRequest](#createsurfacesourcestaterequest) | [CreateSurfaceSourceStateResponse](#createsurfacesourcestateresponse) | Creates a new surface source state with optional properties.<br>Note: Names must be unique amongst sibling surface source states.<br>Note: "Default" name is reserved.<br>Note: If some properties are not specified, default values are used. <br>Returns the information about the created surface source state. |
| GetSurfaceSourceState | [GetSurfaceSourceStateRequest](#getsurfacesourcestaterequest) | [GetSurfaceSourceStateResponse](#getsurfacesourcestateresponse) | Gets the properties of a surface source state, given the parent surface source identifier and the state name.<br>Returns the surface source state properties. |
| UpdateSurfaceSourceState | [UpdateSurfaceSourceStateRequest](#updatesurfacesourcestaterequest) | [UpdateSurfaceSourceStateResponse](#updatesurfacesourcestateresponse) | Edits the properties of a state, given the parent surface source identifier and the state name.<br>Note: Names must be unique amongst sibling surface source states.<br>Note: "Default" name is reserved. |
| DeleteSurfaceSourceState | [DeleteSurfaceSourceStateRequest](#deletesurfacesourcestaterequest) | [DeleteSurfaceSourceStateResponse](#deletesurfacesourcestateresponse) | Deletes a surface source state, given the parent surface source identifier and the state name. |

## asset_preparation_api/surfaceSource/surface_source_description.proto

This file describes the messages used to create, edit and manage surface sources.

### BlackBody

Spectrum based on a black body.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `temperature` | google.protobuf.DoubleValue |  | The temperature of the black body.<br>Unit: Kelvin (K)<br>Range: [0,30000]<br>Default value: 5500 |

### CreateSurfaceSourceRequest

The information required to create a surface source.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `name` | google.protobuf.StringValue |  | The surface source name.<br>Note: Names must be unique amongst surface sources.<br>Note: If no name is defined, a default unique name is automatically set. |
| `properties` | [SourceProperties](#sourceproperties) |  | The source properties. |

### CreateSurfaceSourceResponse

The identity of the created surface source.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identity` | [SurfaceSourceIdentity](#surfacesourceidentity) |  | The identity of a surface source.<br>Returns null in case of failure. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### CreateSurfaceSourceStateRequest

The information required to create a surface source state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The surface source identifier. |
| `state_name` | string |  | The state name.<br>Note: Names must be unique amongst sibling surface source states.<br>Note: "Default" name is reserved. |
| `base_state_name` | google.protobuf.StringValue |  | The name of an already existing state on which will be based the state to create.<br>Note: If not defined, the surface source properties are used. |
| `state_properties` | [SourceProperties](#sourceproperties) |  | The state properties. |

### CreateSurfaceSourceStateResponse

The response returned when creating a surface source state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The surface source identifier. |
| `state_name` | string |  | The new state name. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### DeleteSurfaceSourceRequest

The information required to delete a surface source.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the surface source to delete. |

### DeleteSurfaceSourceResponse

The response returned when deleting a surface source.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DeleteSurfaceSourceStateRequest

The information required to delete a surface source state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The surface source identifier. |
| `state_name` | string |  | The name of the state to delete. |

### DeleteSurfaceSourceStateResponse

The response returned when deleting a surface source state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DisplaySourceProperties

The properties of a display source.

Note: For display sources, the spectrum is only needed if the display source contributes to lighting.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `luminance` | google.protobuf.DoubleValue |  | The display source luminance.<br>Unit: candela/sq. meter (cd/m<sup>2</sup>)<br>Note: Must be positive.<br>Default value: 0 |
| `angular_precision` | google.protobuf.DoubleValue |  | The angular precision.<br>Unit: Degree<br>Range: [0,57]<br>Default value: 0 |
| <small><strong>oneof</strong> <code>angular_diagram</code></small> `lambertian` | [LambertianDiagram](#lambertiandiagram) |  | Intensity based on a Lambertian angular diagram.<br>Note: This is the default type of angular diagram. |
| <small><strong>oneof</strong> <code>angular_diagram</code></small> `diagram_library` | [LibraryDiagram](#librarydiagram) |  | Intensity based on a library angular diagram. |
| <small><strong>oneof</strong> <code>angular_diagram</code></small> `gaussian` | [GaussianDiagram](#gaussiandiagram) |  | Intensity based on a gaussian angular diagram. |
| `reverse_direction` | google.protobuf.BoolValue |  | Defines whether the direction of the display source is reversed.<br>Default value: `false` |
| <small><strong>oneof</strong> <code>contribution</code></small> `no_contribution` | [asset_preparation.v3.common.Empty](#empty) |  | The display source does not contribute to lighting.<br>Note: This is the default value. |
| <small><strong>oneof</strong> <code>contribution</code></small> `lighting_contribution` | [LightingContribution](#lightingcontribution) |  | The lighting contribution of the display source. |
| <small><strong>oneof</strong> <code>spectrum</code></small> `spectrum_library` | [SpectrumLibrary](#spectrumlibrary) |  | Spectrum based on a spectrum file.<br>Note: This is the default spectrum type. |
| <small><strong>oneof</strong> <code>spectrum</code></small> `black_body` | [BlackBody](#blackbody) |  | Spectrum based on a black body. |
| <small><strong>oneof</strong> <code>spectrum</code></small> `monochromatic` | [Monochromatic](#monochromatic) |  | Monochromatic spectrum. |
| <small><strong>oneof</strong> <code>spectrum</code></small> `color_rgb` | [asset_preparation.v3.common.ColorRgb](#colorrgb) |  | Spectrum based on a RGB color. <br>Default value: (255,255,255) |
| <small><strong>oneof</strong> <code>spectrum</code></small> `color_hsv` | [asset_preparation.v3.common.ColorHsv](#colorhsv) |  | Spectrum based on an HSV color. <br>Default value: (0,0,100) |
| `texture_identifier` | google.protobuf.Int32Value |  | The identifier of the display texture (created using the Resource service) referenced in the display source.<br>Note: The texture reference can be removed by setting the value '-1'. |
| `uv_channel` | google.protobuf.Int32Value |  | The UV channel used to map the texture.<br>Range: [1,4]<br>Default value: 1 |

### GaussianDiagram

The properties of gaussian angular diagram.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `x` | google.protobuf.DoubleValue |  | Value along the X axis.<br>Unit: Degree<br>Range: [0,180]<br>Default value: 45 |
| `y` | google.protobuf.DoubleValue |  | Value along the Y axis.<br>Unit: Degree<br>Range: [0,180]<br>Default value: 45 |

### GetSurfaceSourceRequest

The information required to examine a surface source.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the surface source to examine. |

### GetSurfaceSourceResponse

The properties of a surface source.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identity` | [SurfaceSourceIdentity](#surfacesourceidentity) |  | The identifier of the surface source. |
| `properties` | [SourceProperties](#sourceproperties) |  | The surface source properties. |
| `state_names` | string | repeated | The names of the surface source states. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### GetSurfaceSourceStateRequest

The information required to examine a state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The identifier of the surface source. |
| `state_name` | string |  | The name of the state to examine. |

### GetSurfaceSourceStateResponse

The information about a surface source state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The identifier of the examined surface source. |
| `state_name` | string |  | The state name. |
| `state_properties` | [SourceProperties](#sourceproperties) |  | The properties of the examined state. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the reading operation. |

### LambertianDiagram

Lambertian angular diagram.

### LibraryDiagram

The properties of library angular diagram.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `diagram_identifier` | google.protobuf.Int32Value |  | The identifier of the intensity diagram (created using the <br>Resource service) referenced in the surface source.<br>Note: The intensity diagram reference can be removed by setting the value '-1'. |
| `offset` | [Vector3](#vector3) |  | The intensity diagram offset.<br>Unit: Degree |

### LightingContribution

Describes how a surface or display source contributes to the scene lighting, including whether the different surfaces composing the geometry must be joint or disjoint.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>disjoint_surfaces</code></small> `joint` | [asset_preparation.v3.common.Empty](#empty) |  | With joint surfaces, the surface or display source acts as a single point light for contribution to the scene lighting.<br>Note: This is the default value. |
| <small><strong>oneof</strong> <code>disjoint_surfaces</code></small> `disjoint_flux_distribution` | [DisjointFluxDistributionType](#disjointfluxdistributiontype) |  | With disjoint surfaces, the surface or display source acts as several point lights (as many point lights as there are surfaces in the geometry) for contribution to the scene lighting. |
| `orientation_offset` | [Vector3](#vector3) |  | The orientation offset.<br>Unit: Degree |
| `position_offset` | google.protobuf.DoubleValue |  | The position offset.<br>Unit: Millimeter (mm)<br>Default value: 0 |
| `rendering` | [Rendering](#rendering) |  | The rendering properties. |
| <small><strong>oneof</strong> <code>shadows</code></small> `no_shadow` | [asset_preparation.v3.common.Empty](#empty) |  | The surface source does not cast shadows.<br>Note: This is the default value. |
| <small><strong>oneof</strong> <code>shadows</code></small> `static_shadows` | [Shadows](#shadows) |  | The surface source produces static shadows. |
| <small><strong>oneof</strong> <code>shadows</code></small> `dynamic_shadows` | [Shadows](#shadows) |  | The surface source produces dynamic shadows. |

### ListSurfaceSourcesResponse

The identities of all surface sources in the collection.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `surface_sources` | [SurfaceSourceIdentity](#surfacesourceidentity) | repeated | Surface source identities. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the listing operation. |

### Monochromatic

Monochromatic spectrum.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `wavelength` | google.protobuf.DoubleValue |  | The emission wavelength of the Spectrum.<br>Unit: nanometer (nm)<br>Range: [360,813]<br>Default value: 580 |

### Rendering

The rendering properties.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `range` | google.protobuf.DoubleValue |  | The range describing the maximum distance of the light radiation.<br>Unit: Meter (m)<br>Note: Must be positive.<br>Default value: 128 |

### Shadows

The properties of shadows.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `near_clip` | google.protobuf.DoubleValue |  | The near clip.<br>Unit: Meter (m)<br>Note: Must be positive.<br>Default value: 0.1. |
| `shadows_offset_ratio` | google.protobuf.DoubleValue |  | The shadow offset ratio.<br>Note: Must be above 0.00001.<br>Default value: 0.01. |
| `softness` | google.protobuf.DoubleValue |  | The softness.<br>Range: [0,2]<br>Default value: 0 |

### SourceProperties

The source properties.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| <small><strong>oneof</strong> <code>source</code></small> `surface_source` | [SurfaceSourceProperties](#surfacesourceproperties) |  | Surface source.<br>Note: This is the default type. |
| <small><strong>oneof</strong> <code>source</code></small> `display_source` | [DisplaySourceProperties](#displaysourceproperties) |  | Display source. |

### SpectrumLibrary

Spectrum based on a spectrum file.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `spectrum_identifier` | google.protobuf.Int32Value |  | The identifier of the spectrum (created using the Resource service) referenced in the surface source.<br>Note: The spectrum reference can be removed by setting the value '-1'. |

### SurfaceSourceIdentity

The full identity of a surface source, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | int32 |  | The surface source identifier. |
| `name` | string |  | The surface source name. |

### SurfaceSourceProperties

The properties of a surface source.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `flux` | google.protobuf.DoubleValue |  | The surface source flux.<br>Unit: lumen (lm)<br>Note: Must be positive.<br>Default value: 500 |
| `angular_precision` | google.protobuf.DoubleValue |  | The angular precision.<br>Unit: Degree<br>Range: [0,57]<br>Default value: 0 |
| <small><strong>oneof</strong> <code>angular_diagram</code></small> `lambertian` | [LambertianDiagram](#lambertiandiagram) |  | Intensity based on a lambertian angular diagram. |
| <small><strong>oneof</strong> <code>angular_diagram</code></small> `diagram_library` | [LibraryDiagram](#librarydiagram) |  | Intensity based on a library angular diagram.<br>Note: This is the default type of angular diagram. |
| <small><strong>oneof</strong> <code>angular_diagram</code></small> `gaussian` | [GaussianDiagram](#gaussiandiagram) |  | Intensity based on a gaussian angular diagram. |
| `reverse_direction` | google.protobuf.BoolValue |  | Defines whether the direction of the surface source is reversed or not.<br>Default value: `false` |
| <small><strong>oneof</strong> <code>contribution</code></small> `no_contribution` | [asset_preparation.v3.common.Empty](#empty) |  | The surface source does not contribute to lighting.<br>Note: This is the default value. |
| <small><strong>oneof</strong> <code>contribution</code></small> `lighting_contribution` | [LightingContribution](#lightingcontribution) |  | The lighting contribution of the surface source. |
| <small><strong>oneof</strong> <code>spectrum</code></small> `spectrum_library` | [SpectrumLibrary](#spectrumlibrary) |  | Spectrum based on a spectrum file.<br>Note: This is the default spectrum type. |
| <small><strong>oneof</strong> <code>spectrum</code></small> `black_body` | [BlackBody](#blackbody) |  | Spectrum based on a black body. |
| <small><strong>oneof</strong> <code>spectrum</code></small> `monochromatic` | [Monochromatic](#monochromatic) |  | Monochromatic spectrum. |
| <small><strong>oneof</strong> <code>spectrum</code></small> `color_rgb` | [asset_preparation.v3.common.ColorRgb](#colorrgb) |  | Spectrum based on a RGB color. |
| <small><strong>oneof</strong> <code>spectrum</code></small> `color_hsv` | [asset_preparation.v3.common.ColorHsv](#colorhsv) |  | Spectrum based on an HSV color. |

### UpdateSurfaceSourceRequest

The information required to update a surface source.

Note: All the properties are optional so you can modify only one property.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The surface source identifier. |
| `name` | google.protobuf.StringValue |  | The surface source name.<br>Note: Names must be unique amongst surface sources.<br>Note: If no name is defined, the name is not updated. |
| `properties` | [SourceProperties](#sourceproperties) |  | The surface source properties. |

### UpdateSurfaceSourceResponse

The response returned when updating a surface source.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### UpdateSurfaceSourceStateRequest

The information required to update a surface source state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `identifier` | google.protobuf.Int32Value |  | The surface source identifier. |
| `state_name` | string |  | The current name of the state. |
| `state_new_name` | google.protobuf.StringValue |  | The new name of the state.<br>Note: Names must be unique amongst sibling surface source states.<br>Note: "Default" name is reserved.<br>Note: If no name is defined, the name is not updated. |
| `state_properties` | [SourceProperties](#sourceproperties) |  | The new state properties. |

### UpdateSurfaceSourceStateResponse

The response returned when updating a surface source state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `state_name` | string |  | The state name. |
| `status` | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### Vector3

Vector in a 3D referential.

Note: The default value is 0.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| `x` | google.protobuf.DoubleValue |  | Value along the X axis. |
| `y` | google.protobuf.DoubleValue |  | Value along the Y axis. |
| `z` | google.protobuf.DoubleValue |  | Value along the Z axis. |

### DisjointFluxDistributionType

The type of disjoint flux distribution.

| Name | Number | Description |
| ---- | ------ | ----------- |
| DISTRIBUTION_TYPE_UNSPECIFIED | 0 | Unspecified disjoint flux distribution type. |
| DISTRIBUTION_TYPE_PROPORTIONAL | 1 | Flux distributed proportionally to the area of each disjoint surface.<br>Note: With this distribution type, the power emitted by one disjoint surface is equal to the power defined in the surface source properties multiplied by the ratio of area of the disjoint surface to the total area. |
| DISTRIBUTION_TYPE_EVEN | 2 | Flux distributed evenly among the disjoint surfaces. <br>Note: With this distribution type, each disjoint surface emits the same power. The power of each disjoint surface is equal to the power defined in the surface source properties divided by the number of surfaces. |

