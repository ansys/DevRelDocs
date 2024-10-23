# Reference documentation

## asset_preparation_api/common/chunk.proto

This file describes the messages used for import/export.

### Chunk

A block of data.

Note: The recommended size is in the range 256kB to 1MB.

 No data higher than 2GB can be handled.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| metadata | [Chunk.MetadataEntry](#metadataentry) | repeated |  |
| bytes | [bytes](#bytes) |  |  |

### Chunk-MetadataEntry

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |

Back to [Top](#reference-documentation)

## asset_preparation_api/common/common.proto

This file describes the messages used in several proto files.

### ColorHsv

Hsv value of a color.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hue | [google.protobuf.DoubleValue](#doublevalue) |  | Unit: Degree<br> <br>Note: Must be a double in the range [0,360]. |
| saturation | [google.protobuf.DoubleValue](#doublevalue) |  | Note: Must be a double in the range [0,100]. |
| value | [google.protobuf.DoubleValue](#doublevalue) |  | Note: Must be a double in the range [0,100]. |

### ColorRgb

RGB value of a color.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| red | [google.protobuf.Int32Value](#int32value) |  | Note: Must be an integer in the range [0,255]. |
| green | [google.protobuf.Int32Value](#int32value) |  | Note: Must be an integer in the range [0,255]. |
| blue | [google.protobuf.Int32Value](#int32value) |  | Note: Must be an integer in the range [0,255]. |

### Empty

An empty message used for none type.

### ConflictPolicy

The conflict policy to define what should be imported when there is any name conflict detected between objects from the environment or scene tree to import and the objects already existing on the server.

Note: Scene trees, light instances, nodes and material parts cannot have name conflicts.

| Name | Number | Description |
| ---- | ------ | ----------- |
| CONFLICT_POLICY_UNSPECIFIED | 0 | Unspecified conflict policy. |
| CONFLICT_POLICY_STOP | 1 | The import operation is canceled when there is a conflict with <br>the server's objects.<br><br>Note: This is the default behavior when no policy is specified. |
| CONFLICT_POLICY_KEEP_EXISTING | 2 | When there is a conflict with the server's objects, the import operation<br>continues without importing the conflicting objects. The already <br>existing objects are used in the imported environment/scene tree. |
| CONFLICT_POLICY_OVERRIDE | 3 | When there is a conflict with the server's objects, the import operation <br>continues and the objects from the imported environment/scene tree <br>override the already existing objects. |
| CONFLICT_POLICY_KEEP_BOTH | 4 | When there is a conflict with the server's objects, the import operation <br>continues and both conflicting objects are kept: the objects already <br>existing remains on the server and the objects coming from the import <br>operation are automatically renamed and used in the imported <br>environment/scene tree. |

Back to [Top](#reference-documentation)

## asset_preparation_api/common/reset.proto

This file describes the service used to reset the server.

### Reset

Reset Preparation Service

This service is used to clear the server.

Note: Resetting the server removes from the server all the "in-memory" data,
namely all the data imported or created, collections and identifiers.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Reset | [.google.protobuf.Empty](#empty) | [ResetResponse](#resetresponse) | Reset server, all collections and identifiers. |

Back to [Top](#reference-documentation)

## asset_preparation_api/common/reset_description.proto

This file describes the messages used to reset the server.

### ResetResponse

The information required to reset the server.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the reset operation. |

Back to [Top](#reference-documentation)

## asset_preparation_api/common/status.proto

This file describes the status messages used in several proto files.

### Status

A status message informing about the success of a request.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| code | [int32](#int32) |  | The status code. |
| feedback_message | [string](#string) |  | The feedback message. |
| level | [Level](#level) |  | The severity level. |

### Level

The severity of the feedback on an operation.

| Name | Number | Description |
| ---- | ------ | ----------- |
| LEVEL_UNSPECIFIED | 0 | The severity is unspecified. |
| LEVEL_ERROR | 1 | The operation returned an error. |
| LEVEL_WARNING | 2 | The operation succeeded with warnings. |
| LEVEL_INFORMATION | 3 | The operation fully succeeded. |

Back to [Top](#reference-documentation)

## asset_preparation_api/common/tag.proto

This file describes the messages used to define tags.

### Properties

The properties of a tag.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| label | [google.protobuf.StringValue](#stringvalue) |  | Optional label.<br><br> Note: It can be added only for the tags with the following types:<br><br> BASIC_TYPE_PEDESTRIAN<br> BASIC_TYPE_VEHICLE<br> BASIC_TYPE_ANIMAL<br> BASIC_TYPE_STREET_LIGHT<br> BASIC_TYPE_ROAD_SIGN<br> BASIC_TYPE_SIMULATION_OBJECT<br> BASIC_TYPE_CUSTOM_OBJECT<br> BASIC_TYPE_ILLUMINANCE_SENSOR |
| name | [google.protobuf.StringValue](#stringvalue) |  | The name of the custom tag.<br><br> Note: Needed only for the tags with the BASIC_TYPE_CUSTOM_OBJECT type. |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the wheel tag.<br><br> Note: Needed only for the tags with the BASIC_TYPE_WHEEL type.<br><br> Here is the convention for wheel identifier in AVX:<br> The front left wheel identifier must be 0.<br> The front right wheel identifier must be 1.<br> The rear left wheel identifier must be 2.<br> The rear right wheel identifier must be 3. |
| position | [SidePosition](#sideposition) |  | The position of the lighting element.<br><br> Note: Needed only for the tags with the LIGHTING_TYPE_TURN_INDICATOR<br> and LIGHTING_TYPE_DAYTIME_RUNNING_LIGHT types. |
| irradiance_map_identifier | [google.protobuf.Int32Value](#int32value) |  | Optional identifier of the irradiance map.<br><br> Note: It can be added only for the tags <br> with the BASIC_TYPE_VEHICLE type. |

### Tag

The definition of a tag.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| basic_type | [BasicType](#basictype) |  | Basic tag type. |
| lighting_type | [LightingType](#lightingtype) |  | Lighting tag type. |
| properties | [Properties](#properties) |  | Properties of the tag. |

### TagIdentity

The identity of a tag.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| basic_type | [BasicType](#basictype) |  | Basic tag type. |
| lighting_type | [LightingType](#lightingtype) |  | Lighting tag type. |
| name | [google.protobuf.StringValue](#stringvalue) |  | The name of the tag.<br><br> Note: Needed only for the tags with the BASIC_TYPE_CUSTOM_OBJECT type. |

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
| BASIC_TYPE_CUSTOM_OBJECT | 7 | The element is tagged as a custom simulation object.<br><br> Note: If you want to tag a dynamic asset as a custom simulation object,<br> you must add the custom tag first, then add a second asset tag:<br> BASIC_TYPE_VEHICLE, BASIC_TYPE_PEDESTRIAN or BASIC_TYPE_ANIMAL,<br> in this specific order. |
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

 Note: Needed only for the tags with the LIGHTING_TYPE_TURN_INDICATOR and
 LIGHTING_TYPE_DAYTIME_RUNNING_LIGHT types.

| Name | Number | Description |
| ---- | ------ | ----------- |
| SIDE_POSITION_UNSPECIFIED | 0 | The position of the lighting element is unspecified. |
| SIDE_POSITION_LEFT | 1 | The lighting element is on the left side of the vehicle. |
| SIDE_POSITION_RIGHT | 2 | The lighting element is on the right side of the vehicle. |

Back to [Top](#reference-documentation)

## asset_preparation_api/directionalLight/directional_light.proto

This file describes the service used to create, edit and manage directional lights.

### DirectionalLightPreparation

Directional Light Preparation Service

This service is used to create, edit and manage directional lights.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateDirectionalLight | [CreateDirectionalLightRequest](#createdirectionallightrequest) | [CreateDirectionalLightResponse](#createdirectionallightresponse) | Creates a new directional light with an optional name, type and shadows.<br><br>Note: Names must be unique amongst directional lights.<br><br>Note: If unspecified, default values are used.<br><br>Returns the identifier of the created directional light. |
| GetDirectionalLight | [GetDirectionalLightRequest](#getdirectionallightrequest) | [GetDirectionalLightResponse](#getdirectionallightresponse) | Gets the properties of a directional light, given its identifier. <br><br>Returns the directional light properties. |
| ListDirectionalLights | [.google.protobuf.Empty](#empty) | [ListDirectionalLightsResponse](#listdirectionallightsresponse) | Lists all the created directional lights.<br><br>Returns the identifiers and names of the directional lights. |
| UpdateDirectionalLight | [UpdateDirectionalLightRequest](#updatedirectionallightrequest) | [UpdateDirectionalLightResponse](#updatedirectionallightresponse) | Edits the properties of a directional light, given its identifier.<br><br>Note: Names must be unique amongst directional lights. |
| DeleteDirectionalLight | [DeleteDirectionalLightRequest](#deletedirectionallightrequest) | [DeleteDirectionalLightResponse](#deletedirectionallightresponse) | Deletes a directional light, given its identifier. |
| CreateDirectionalLightState | [CreateDirectionalLightStateRequest](#createdirectionallightstaterequest) | [CreateDirectionalLightStateResponse](#createdirectionallightstateresponse) | Creates a new directional light state with optional properties.<br><br>Note: Names must be unique amongst sibling directional light states.<br><br>Note: "Default" name is reserved.<br><br>Note: If some properties are not specified, default values are used. <br><br>Returns the information about the created directional light state. |
| GetDirectionalLightState | [GetDirectionalLightStateRequest](#getdirectionallightstaterequest) | [GetDirectionalLightStateResponse](#getdirectionallightstateresponse) | Gets the properties of a directional light state, <br>given the parent directional light identifier and the state name.<br><br>Returns the directional light state properties. |
| UpdateDirectionalLightState | [UpdateDirectionalLightStateRequest](#updatedirectionallightstaterequest) | [UpdateDirectionalLightStateResponse](#updatedirectionallightstateresponse) | Edits the properties of a state, <br>given the parent directional light identifier and the state name.<br><br>Note: Names must be unique amongst sibling directional light states.<br><br>Note: "Default" name is reserved. |
| DeleteDirectionalLightState | [DeleteDirectionalLightStateRequest](#deletedirectionallightstaterequest) | [DeleteDirectionalLightStateResponse](#deletedirectionallightstateresponse) | Deletes a directional light state, <br>given the parent directional light identifier and the state name. |

Back to [Top](#reference-documentation)

## asset_preparation_api/directionalLight/directional_light_description.proto

This file describes the messages used to create, edit and manage directional lights.

### BlackBody

Spectrum based on a black body.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| temperature | [google.protobuf.DoubleValue](#doublevalue) |  | The temperature of the black body.<br><br>Unit: Kelvin (K)<br><br>Note: Must be in the range [0,30000].<br><br>Note: The default value is 5500. |

### CreateDirectionalLightRequest

The information required to create a directional light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [google.protobuf.StringValue](#stringvalue) |  | The directional light name.<br><br>Note: Names must be unique amongst directional lights.<br><br>Note: If no name is defined, a default unique name is automatically set. |
| properties | [DirectionalLightProperties](#directionallightproperties) |  | The directional light properties. |

### CreateDirectionalLightResponse

The identifier of the created directional light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identity | [DirectionalLightIdentity](#directionallightidentity) |  | The identity of the directional light.<br><br>Returns null in case of failure. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### CreateDirectionalLightStateRequest

The information required to create a directional light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The directional light identifier. |
| state_name | [string](#string) |  | The state name.<br> <br>Note: Names must be unique amongst sibling directional light states.<br><br>Note: "Default" name is reserved. |
| base_state_name | [google.protobuf.StringValue](#stringvalue) |  | The name of an already existing state on which will be based <br>the state to create.<br><br>Note: If not defined, the directional light properties are used. |
| state_properties | [DirectionalLightProperties](#directionallightproperties) |  | The state properties. |

### CreateDirectionalLightStateResponse

The response returned when creating a directional light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The directional light identifier. |
| state_name | [string](#string) |  | The new state name. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### Custom

The properties of a custom directional light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exitance | [google.protobuf.DoubleValue](#doublevalue) |  | The directional light exitance.<br><br>Unit: lm/m<sup>2</sup><br><br>Note: Must be positive.<br><br>Note: The default value is 40000. |
| spectrum_library | [SpectrumLibrary](#spectrumlibrary) |  | Spectrum based on a spectrum file.<br><br> Note: This is the default type of spectrum. |
| black_body | [BlackBody](#blackbody) |  | Spectrum based on a black body. |
| monochromatic | [Monochromatic](#monochromatic) |  | Monochromatic spectrum. |
| color_rgb | [asset_preparation.v3.common.ColorRgb](#colorrgb) |  | Spectrum based on a RGB color. <br><br>Note: Default value is (255,255,255). |
| color_hsv | [asset_preparation.v3.common.ColorHsv](#colorhsv) |  | Spectrum based on an HSV color. <br><br>Note: Default value is (0,0,100). |

### DeleteDirectionalLightRequest

The information required to delete a directional light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the directional light to delete. |

### DeleteDirectionalLightResponse

The response returned when deleting a directional light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DeleteDirectionalLightStateRequest

The information required to delete a directional light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The directional light identifier. |
| state_name | [string](#string) |  | The name of the state to delete. |

### DeleteDirectionalLightStateResponse

The response returned when deleting a directional light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DirectionalLightIdentity

The full identity of a directional light, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The directional light identifier. |
| name | [string](#string) |  | The directional light name. |

### DirectionalLightProperties

The properties of a directional light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sun | [Sun](#sun) |  | Sun directional light.<br><br>Note: This is the default type of directional light. |
| custom | [Custom](#custom) |  | Custom directional light. |
| no_shadow | [asset_preparation.v3.common.Empty](#empty) |  | The directional light does not cast shadows. |
| dynamic_accurate_shadows | [DynamicAccurateShadows](#dynamicaccurateshadows) |  | The directional light produces shadows <br>with Parallel-Split Shadow Maps with adaptive details.<br><br>Note: This is the default type of shadows. |

### DynamicAccurateShadows

The properties of dynamic accurate shadows.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| shadow_offset_ratio | [google.protobuf.DoubleValue](#doublevalue) |  | The shadow offset ratio.<br><br>Note: Must be above 0.00001.<br><br>Note: The default value is 0.01. |
| shadow_radius | [google.protobuf.DoubleValue](#doublevalue) |  | The shadow radius.<br><br>Note: Must be equal or superior to 0.<br><br>Note: The default value is 0. |
| softness | [google.protobuf.DoubleValue](#doublevalue) |  | The softness.<br><br>Note: Must be in the range [0,2].<br><br>Note: The default value is 0. |
| resolution | [google.protobuf.Int32Value](#int32value) |  | The resolution.<br><br>Note: Must be an integer in the range [1,8].<br><br>Note: The default value is 4. |
| near_field_precision | [google.protobuf.DoubleValue](#doublevalue) |  | The near field precision.<br><br>Note: Must be in the range [0,1].<br><br>Note: The default value is 0.99. |

### GetDirectionalLightRequest

The information required to examine a directional light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the directional light to examine. |

### GetDirectionalLightResponse

The information about a directional light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identity | [DirectionalLightIdentity](#directionallightidentity) |  | The directional light identity. |
| properties | [DirectionalLightProperties](#directionallightproperties) |  | The directional light properties. |
| state_names | [string](#string) | repeated | The names of the directional light states. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### GetDirectionalLightStateRequest

The information required to examine a state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the directional light. |
| state_name | [string](#string) |  | The name of the state to examine. |

### GetDirectionalLightStateResponse

The information about a directional light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The identifier of the examined directional light. |
| state_name | [string](#string) |  | The state name. |
| state_properties | [DirectionalLightProperties](#directionallightproperties) |  | The properties of the examined state. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the reading operation. |

### ListDirectionalLightsResponse

The identities of all directional lights in the collection.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| directional_lights | [DirectionalLightIdentity](#directionallightidentity) | repeated | Directional light identities. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the listing operation. |

### Monochromatic

Monochromatic spectrum.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| wavelength | [google.protobuf.DoubleValue](#doublevalue) |  | The emission wavelength of the Spectrum.<br><br>Unit: nanometer (nm)<br><br>Note: Must be in the range [360,813].<br><br>Note: The default value is 580. |

### SpectrumLibrary

Spectrum based on a spectrum file.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| spectrum_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the spectrum (created using the Resource service) <br>referenced in the directional light.<br><br>Note: The spectrum reference can be removed by setting the value '-1'. |

### Sun

The properties of a sun directional light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| turbidity | [google.protobuf.DoubleValue](#doublevalue) |  | The sun turbidity.<br><br>Note: Must be in the range [2,9].<br><br>Note: The default value is 3. |

### UpdateDirectionalLightRequest

The information required to update a directional light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the directional light to update. |
| name | [google.protobuf.StringValue](#stringvalue) |  | The directional light name.<br><br>Note: Names must be unique amongst directional lights.<br><br>Note: If no name is defined, the name is not updated. |
| properties | [DirectionalLightProperties](#directionallightproperties) |  | The directional light properties.<br><br>Note: All the properties are optional. |

### UpdateDirectionalLightResponse

The response returned when updating a directional light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### UpdateDirectionalLightStateRequest

The information required to update a directional light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The directional light identifier. |
| state_name | [string](#string) |  | The current name of the state. |
| state_new_name | [google.protobuf.StringValue](#stringvalue) |  | The new name of the state.<br><br>Note: Names must be unique amongst sibling directional light states.<br><br>Note: "Default" name is reserved. |
| state_properties | [DirectionalLightProperties](#directionallightproperties) |  | The new state properties. |

### UpdateDirectionalLightStateResponse

The response returned when updating a directional light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| state_name | [string](#string) |  | The state name. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

Back to [Top](#reference-documentation)

## asset_preparation_api/environment/environment.proto

This file describes the service used to create, edit and manage environments.

### EnvironmentPreparation

Environment Preparation Service

This service is used to create, edit and manage environments.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateEnvironment | [CreateEnvironmentRequest](#createenvironmentrequest) | [CreateEnvironmentResponse](#createenvironmentresponse) | Creates a new environment with an optional given name.<br><br>Note: Names must be unique amongst environments.<br><br>Returns the identifier of the created environment. |
| GetEnvironment | [GetEnvironmentRequest](#getenvironmentrequest) | [GetEnvironmentResponse](#getenvironmentresponse) | Gets an environment properties, given its identifier.<br><br>Returns the environment properties. |
| ListEnvironments | [.google.protobuf.Empty](#empty) | [ListEnvironmentsResponse](#listenvironmentsresponse) | Lists all the created environments.<br><br>Returns the identifiers and names of the environments. |
| UpdateEnvironment | [UpdateEnvironmentRequest](#updateenvironmentrequest) | [UpdateEnvironmentResponse](#updateenvironmentresponse) | Edits the properties of an environment, given its identifier.<br><br>Note: Names must be unique amongst environments. |
| DeleteEnvironment | [DeleteEnvironmentRequest](#deleteenvironmentrequest) | [DeleteEnvironmentResponse](#deleteenvironmentresponse) | Deletes an environment, given its identifier. |
| PutEnvironmentFromTrackChunks | [.asset_preparation.v3.common.Chunk](#chunk) stream | [PutEnvironmentFromTrackResponse](#putenvironmentfromtrackresponse) | Creates a new environment on the server by uploading a track as a given <br>stream of chunks containing the "AVX ConflictPolicy" metadata.<br>All dependencies are uploaded into corresponding services, depending on <br>the given conflict policy.<br><br>Note: It is not possible to upload a track including an object<br>in which several states have the same name, or including a geometry<br>with several material parts with the same name. |
| PutEnvironmentFromTrackFile | [PutEnvironmentFromTrackFileRequest](#putenvironmentfromtrackfilerequest) | [PutEnvironmentFromTrackResponse](#putenvironmentfromtrackresponse) | Creates a new environment on the server by uploading a given track file.<br>All dependencies are uploaded into corresponding services, depending on <br>the given conflict policy.<br><br>Note: It is not possible to upload a track including an object<br>in which several states have the same name, or including a geometry<br>with several material parts with the same name. |
| GetTrackChunks | [GetTrackChunksRequest](#gettrackchunksrequest) | [.asset_preparation.v3.common.Chunk](#chunk) stream | Packages the environment as a track and exports it as a byte stream.<br><br>Note: The last chunk of the stream provides the metadata<br>"AVX Status Error" if an error occurred, "AVX Status Warning" or <br>"AVX Status Info" if the export succeeded. |
| GetTrackFile | [GetTrackFileRequest](#gettrackfilerequest) | [GetTrackFileResponse](#gettrackfileresponse) | Packages the environment as a track and exports it as a .track file. |

Back to [Top](#reference-documentation)

## asset_preparation_api/environment/environment_description.proto

This file describes the messages used to create, edit and manage environments.

### CreateEnvironmentRequest

The information required to create an environment.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [google.protobuf.StringValue](#stringvalue) |  | The environment name.<br><br>Note: Names must be unique amongst environments.<br><br>Note: If no name is defined, a default unique name is automatically set. |
| properties | [EnvironmentProperties](#environmentproperties) |  | The environment properties. |

### CreateEnvironmentResponse

The identifier of the created environment.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identity | [EnvironmentIdentity](#environmentidentity) |  | The environment identity.<br><br>Returns null in case of failure. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### DeleteEnvironmentRequest

The information required to delete an environment.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the environment to delete. |

### DeleteEnvironmentResponse

The response returned when deleting an environment.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### EnvironmentIdentity

The full identity of an environment, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The environment identifier. |
| name | [string](#string) |  | The environment name. |

### EnvironmentProperties

The properties of an environment.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| scene_tree | [google.protobuf.Int32Value](#int32value) |  | The identifier of the scene tree referenced in the environment.<br><br>Note: The scene tree reference can be removed by setting the value '-1'.<br><br>Note: A scene tree reference must be provided before exporting the track. |
| added_skies | [SkyLists](#skylists) |  | The identifiers of the skies to add to the environment. |
| removed_skies | [SkyLists](#skylists) |  | The identifiers of the skies to remove from the environment. |
| no_active_sky | [asset_preparation.v3.common.Empty](#empty) |  | No active sky. <br><br>Note: If the active sky is not defined, the first sky added <br>to the environment will be set as active. <br>If there is no sky in the environment, a default natural sky <br>is created at export and set as active. |
| active_natural_sky | [int32](#int32) |  | The natural sky to set as active. |
| active_hdri_sky | [int32](#int32) |  | The HDRI sky to set as active. |

### GetEnvironmentRequest

The information required to examine an environment.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the environment to examine. |

### GetEnvironmentResponse

The information about an environment.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identity | [EnvironmentIdentity](#environmentidentity) |  | The environment identity. |
| properties | [EnvironmentProperties](#environmentproperties) |  | The environment properties. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### GetTrackChunksRequest

The information required to export an environment as a stream of track chunks.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the environment to export. |

### GetTrackFileRequest

The information required to export an environment as a track file.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the environment to export. |
| file_path | [string](#string) |  | The path of the exported file. |
| overwrite | [google.protobuf.BoolValue](#boolvalue) |  | Describes whether the file should be overwritten.<br><br>Note: The default value is true. |

### GetTrackFileResponse

The response returned when exporting an environment as a track file.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the export operation. |

### ListEnvironmentsResponse

The identities of all environments in the collection.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| environments | [EnvironmentIdentity](#environmentidentity) | repeated | Environment identities. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the listing operation. |

### PutEnvironmentFromTrackFileRequest

The information required to create an environment from an uploaded track file.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| file_path | [string](#string) |  | The path of the .track file to upload. |
| name_conflict_policy | [asset_preparation.v3.common.ConflictPolicy](#conflictpolicy) |  | The policy to follow in case of name conflict with server's objects. |

### PutEnvironmentFromTrackResponse

The response returned when uploading a track.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The imported environment identifier. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the upload operation. |

### SkyLists

Lists of identifiers for natural skies and HDRI skies.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hdri_skies | [int32](#int32) | repeated | The identifiers of HDRI skies. |
| natural_skies | [int32](#int32) | repeated | The identifiers of natural skies. |

### UpdateEnvironmentRequest

The information required to update an environment.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the environment to update. |
| name | [google.protobuf.StringValue](#stringvalue) |  | The environment name.<br><br>Note: Names must be unique amongst environments.<br><br>Note: If no name is defined, the name is not updated. |
| properties | [EnvironmentProperties](#environmentproperties) |  | The environment properties.<br><br>Note: All the properties are optional. |

### UpdateEnvironmentResponse

The response returned when updating an environment.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

Back to [Top](#reference-documentation)

## asset_preparation_api/geometry/geometry.proto

This file describes the service used to create, edit and manage geometries.

### GeometryPreparation

Geometry Preparation Service

This service is used to create, edit and manage geometries.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateGeometry | [CreateGeometryRequest](#creategeometryrequest) | [CreateGeometryResponse](#creategeometryresponse) | Creates a new geometry with an optional given name and winding order.<br><br>Note: Names must be unique amongst geometries.<br><br>Returns the identifier of the created geometry. |
| GetGeometry | [GetGeometryRequest](#getgeometryrequest) | [GetGeometryResponse](#getgeometryresponse) | Gets the properties of a geometry, given its identifier.<br><br>Returns the geometry properties. |
| ListGeometries | [.google.protobuf.Empty](#empty) | [ListGeometriesResponse](#listgeometriesresponse) | Lists all the created geometries.<br><br>Returns the identifiers and names of the geometries. |
| UpdateGeometry | [UpdateGeometryRequest](#updategeometryrequest) | [UpdateGeometryResponse](#updategeometryresponse) | Edits the properties of a geometry, given its identifier.<br><br>Note: Names must be unique amongst geometries. |
| DeleteGeometry | [DeleteGeometryRequest](#deletegeometryrequest) | [DeleteGeometryResponse](#deletegeometryresponse) | Deletes a geometry, given its identifier. |
| CreateMaterialPart | [CreateMaterialPartRequest](#creatematerialpartrequest) | [CreateMaterialPartResponse](#creatematerialpartresponse) | Creates a material part as a child of a geometry, given the parent geometry<br>identifier, with optional material part parameters.<br><br>Note: Names must be unique amongst sibling material parts.<br><br>Returns the identifier of the created material part. |
| GetMaterialPart | [GetMaterialPartRequest](#getmaterialpartrequest) | [GetMaterialPartResponse](#getmaterialpartresponse) | Gets the properties of a material part, given its identifier.<br><br>Returns the material part properties. |
| UpdateMaterialPart | [UpdateMaterialPartRequest](#updatematerialpartrequest) | [UpdateMaterialPartResponse](#updatematerialpartresponse) | Edits the properties of a material part, given its identifier.<br><br>Note: Names must be unique amongst sibling material parts. |
| DeleteMaterialPart | [DeleteMaterialPartRequest](#deletematerialpartrequest) | [DeleteMaterialPartResponse](#deletematerialpartresponse) | Deletes a material part, given its identifier. |
| PushVertices | [PushVerticesRequest](#pushverticesrequest) stream | [PushVerticesResponse](#pushverticesresponse) | Pushes vertices to a geometry, given a stream of geometry identifiers <br>and vertices to push. |
| PushIndices | [PushIndicesRequest](#pushindicesrequest) stream | [PushIndicesResponse](#pushindicesresponse) | Pushes indices to a geometry, given a stream of geometry identifiers <br>and indices to push.<br><br>Note: Indices must reference already pushed vertices. |
| GetGeometryVertices | [GetGeometryVerticesRequest](#getgeometryverticesrequest) | [GetGeometryVerticesResponse](#getgeometryverticesresponse) stream | Gets the vertices of a geometry, given its identifier. |
| GetGeometryIndices | [GetGeometryIndicesRequest](#getgeometryindicesrequest) | [GetGeometryIndicesResponse](#getgeometryindicesresponse) stream | Gets the indices of a geometry, given its identifier. |

Back to [Top](#reference-documentation)

## asset_preparation_api/geometry/geometry_description.proto

This file describes the messages used to create, edit and manage geometries.

### CreateGeometryRequest

The information required to create a geometry.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [google.protobuf.StringValue](#stringvalue) |  | The geometry name.<br><br>Note: Names must be unique amongst geometries.<br><br>Note: If no name is defined, a default unique name is automatically set. |
| properties | [GeometryProperties](#geometryproperties) |  | The properties of a geometry. |

### CreateGeometryResponse

The identity of the created geometry.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identity | [GeometryIdentity](#geometryidentity) |  | The identity of the geometry.<br><br>Returns null in case of failure. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### CreateMaterialPartRequest

The information required to create a material part under a geometry.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| geometry_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the parent geometry. |
| name | [google.protobuf.StringValue](#stringvalue) |  | The material part name.<br><br>Note: Names must be unique amongst sibling material parts.<br><br>Note: If no name is defined, a default unique name is automatically set. |
| properties | [MaterialPartProperties](#materialpartproperties) |  | The properties of the material part. |

### CreateMaterialPartResponse

The identifier of the created material part.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| geometry_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the parent geometry. |
| material_part_identity | [MaterialPartIdentity](#materialpartidentity) |  | The identity of the material part.<br><br>Returns null in case of failure. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### DeleteGeometryRequest

The information required to delete a geometry.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the geometry to delete. |

### DeleteGeometryResponse

The response returned when deleting a geometry.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DeleteMaterialPartRequest

The information required to delete a material part.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| geometry_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the parent geometry. |
| material_part_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the material part. |

### DeleteMaterialPartResponse

The response returned when deleting a material part.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### GeometryIdentity

The full identity of a geometry, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The geometry identifier. |
| name | [string](#string) |  | The geometry name. |

### GeometryProperties

The properties of a geometry.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| winding_order | [WindingOrder](#windingorder) |  | The geometry winding order. |
| has_binormals | [google.protobuf.BoolValue](#boolvalue) |  | Whether the vertices should have binormals defined.<br><br>Note: The default value is false. |
| has_tangents | [google.protobuf.BoolValue](#boolvalue) |  | Whether the vertices should have tangents defined.<br><br>Note: The default value is false. |
| uv_count | [google.protobuf.Int32Value](#int32value) |  | The number of UV coordinates that the vertices should have defined.<br><br>Note: The UV count should be in the range [0, 4].<br><br>Note: The default value is 0. |

### GetGeometryIndicesRequest

The information required to get the geometry indices.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the geometry. |

### GetGeometryIndicesResponse

The information about the geometry indices.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| indices | [int32](#int32) | repeated | The indices of the geometry. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the get indices operation. |

### GetGeometryRequest

The information required to examine a geometry.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the geometry to examine. |

### GetGeometryResponse

The information about a geometry.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identity | [GeometryIdentity](#geometryidentity) |  | The identity of the geometry. |
| properties | [GeometryProperties](#geometryproperties) |  | The geometry properties. |
| material_parts | [MaterialPartIdentity](#materialpartidentity) | repeated | The identities of the material parts composing the geometry. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### GetGeometryVerticesRequest

The information required to get the geometry vertices.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the geometry. |

### GetGeometryVerticesResponse

The information about the geometry vertices.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vertices | [Vertex](#vertex) | repeated | The vertices of the geometry. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the get vertices operation. |

### GetMaterialPartRequest

The information required to examine a material part.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the material part to examine. |

### GetMaterialPartResponse

The information about a material part.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identity | [MaterialPartIdentity](#materialpartidentity) |  | The identity of the material part. |
| properties | [MaterialPartProperties](#materialpartproperties) |  | The material part properties. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### ListGeometriesResponse

The identities of all geometries in the collection.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| geometries | [GeometryIdentity](#geometryidentity) | repeated | Geometry identities. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the listing operation. |

### MaterialPartIdentity

The full identity of a material part, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The material part identifier. |
| name | [string](#string) |  | The material part name. |

### MaterialPartProperties

The properties of the material part.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| transparency_mode | [TransparencyMode](#transparencymode) |  | The material part transparency mode. |
| surface_source_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the surface source.<br><br>Note: Optional field. <br><br>Note: The surface source reference can be removed by setting the <br>value '-1'. |
| material_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the material.<br><br>Note: The material reference can be removed by setting the <br>value '-1' and the default material is applied in this case. |
| start_index | [google.protobuf.Int32Value](#int32value) |  | The position of the first index from the indices array to reference<br>vertices where the associated material should be applied. |
| indices_count | [google.protobuf.Int32Value](#int32value) |  | The number of indices from the indices array to reference<br>vertices where the associated material should be applied. |
| temperature_variation_texture_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the temperature variation texture.<br><br>Note: Optional field.<br><br>Note: The temperature variation texture reference can be removed by <br>setting the value '-1'. |
| temperature_variation_uv_channel | [google.protobuf.Int32Value](#int32value) |  | The temperature variation UV channel.<br><br>Note: Must be 1, 2, 3 or 4.<br><br>Note: The default value is 1. |
| temperature_variation_amplitude | [google.protobuf.DoubleValue](#doublevalue) |  | The temperature variation amplitude.<br><br>Unit: Degree<br><br>Note: Must be a double in the range [0,2000].<br><br>Note: The default value is 0.<br><br>Note: If the temperature variation texture is not defined, <br>the amplitude will be ignored. |
| removed_tags | [asset_preparation.v3.common.TagIdentity](#tagidentity) | repeated | Tag(s) to remove from the material part. |
| added_tags | [asset_preparation.v3.common.Tag](#tag) | repeated | Tag(s) to add to the material part. <br><br>Note: Only LightingType Tags are allowed. |

### PushIndicesRequest

The information required to push indices to a geometry.
The recommended size of the request is in range 256kB to 1MB.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| geometry_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the geometry. |
| indices | [int32](#int32) | repeated | The indices to push in the geometry. |

### PushIndicesResponse

The response returned when pushing indices to a geometry.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the push operation. |

### PushVerticesRequest

The information required to push vertices to a geometry.
The recommended size of the request is in range 256kB to 1MB.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| geometry_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the geometry. |
| vertices | [Vertex](#vertex) | repeated | The vertices to push in the geometry. |

### PushVerticesResponse

The response returned when pushing vertices to a geometry.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the push operation. |

### UpdateGeometryRequest

The information required to update a geometry.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the geometry to update. |
| name | [google.protobuf.StringValue](#stringvalue) |  | The geometry name.<br><br>Note: Names must be unique amongst geometries.<br><br>Note: If no name is defined, the name is not updated. |
| properties | [GeometryProperties](#geometryproperties) |  | The geometry properties.<br><br>Note: All the properties are optional. |

### UpdateGeometryResponse

The response returned when updating a geometry.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### UpdateMaterialPartRequest

The information required to update a material part.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| geometry_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the parent geometry. |
| material_part_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the material part. |
| name | [google.protobuf.StringValue](#stringvalue) |  | The material part name.<br><br>Note: Names must be unique amongst sibling material parts.<br><br>Note: If no name is defined, the name is not updated. |
| properties | [MaterialPartProperties](#materialpartproperties) |  | The material part properties.<br><br>Note: All the properties are optional. |

### UpdateMaterialPartResponse

The response returned when updating a material part.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### UvCoordinates

The UV coordinates.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [google.protobuf.DoubleValue](#doublevalue) |  | Coordinate along the X axis. |
| y | [google.protobuf.DoubleValue](#doublevalue) |  | Coordinate along the Y axis. |

### Vertex

The properties of a vertex.

Note: The X, Y and Z coordinates of the binormals are required only when has_binormals is set to true.

Note: The X, Y and Z coordinates of the tangents are required only when has_tangents is set to true.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x_position | [google.protobuf.DoubleValue](#doublevalue) |  | The position of the vertex along the X axis.<br><br> Unit: Meter |
| y_position | [google.protobuf.DoubleValue](#doublevalue) |  | The position of the vertex along the Y axis.<br><br> Unit: Meter |
| z_position | [google.protobuf.DoubleValue](#doublevalue) |  | The position of the vertex along the Z axis.<br><br> Unit: Meter |
| x_normal | [google.protobuf.DoubleValue](#doublevalue) |  | The X-coordinate of the normal of the vertex.<br><br> Unit: Meter |
| y_normal | [google.protobuf.DoubleValue](#doublevalue) |  | The Y-coordinate of the normal of the vertex.<br><br> Unit: Meter |
| z_normal | [google.protobuf.DoubleValue](#doublevalue) |  | The Z-coordinate of the normal of the vertex.<br><br> Unit: Meter |
| x_binormal | [google.protobuf.DoubleValue](#doublevalue) |  | The X-coordinate of the binormal of the vertex.<br><br> Unit: Meter<br><br>Note: Required only when has_binormals is set to true. |
| y_binormal | [google.protobuf.DoubleValue](#doublevalue) |  | The Y-coordinate of the binormal of the vertex.<br><br> Unit: Meter<br><br>Note: Required only when has_binormals is set to true. |
| z_binormal | [google.protobuf.DoubleValue](#doublevalue) |  | The Z-coordinate of the binormal of the vertex.<br><br> Unit: Meter<br><br>Note: Required only when has_binormals is set to true. |
| x_tangent | [google.protobuf.DoubleValue](#doublevalue) |  | The X-coordinate of the tangent of the vertex.<br><br> Unit: Meter<br><br>Note: Required only when has_tangents is set to true. |
| y_tangent | [google.protobuf.DoubleValue](#doublevalue) |  | The Y-coordinate of the tangent of the vertex.<br><br> Unit: Meter<br><br>Note: Required only when has_tangents is set to true. |
| z_tangent | [google.protobuf.DoubleValue](#doublevalue) |  | The Z-coordinate of the tangent of the vertex.<br><br> Unit: Meter<br><br>Note: Required only when has_tangents is set to true. |
| uv_coordinates | [UvCoordinates](#uvcoordinates) | repeated | The UV coordinates for each UV layer defined for the vertex. |
| ambient_occlusion | [google.protobuf.DoubleValue](#doublevalue) |  | The ambient occlusion of the vertex. |

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

Back to [Top](#reference-documentation)

## asset_preparation_api/hdriSky/hdri_sky.proto

This file describes the service used to create, edit and manage HDRI skies.

### HdriSkyPreparation

HDRI Sky Preparation Service

This service is used to create, edit and manage HDRI skies.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateHdriSky | [CreateHdriSkyRequest](#createhdriskyrequest) | [CreateHdriSkyResponse](#createhdriskyresponse) | Creates a new HDRI sky with an optional name.<br><br>Note: Names must be unique amongst skies.<br><br>Note: If unspecified, default values are used.<br><br>Returns the identifier of the created HDRI sky. |
| GetHdriSky | [GetHdriSkyRequest](#gethdriskyrequest) | [GetHdriSkyResponse](#gethdriskyresponse) | Gets the properties of an HDRI sky, given its identifier.<br><br>Returns the HDRI sky properties. |
| ListHdriSkies | [.google.protobuf.Empty](#empty) | [ListHdriSkiesResponse](#listhdriskiesresponse) | Lists all the created HDRI skies.<br><br>Returns the identifiers and names of the HDRI skies. |
| UpdateHdriSky | [UpdateHdriSkyRequest](#updatehdriskyrequest) | [UpdateHdriSkyResponse](#updatehdriskyresponse) | Edits the properties of an HDRI sky, given its identifier.<br><br>Note: Names must be unique amongst skies. |
| DeleteHdriSky | [DeleteHdriSkyRequest](#deletehdriskyrequest) | [DeleteHdriSkyResponse](#deletehdriskyresponse) | Deletes an HDRI sky, given its identifier.<br><br>Note: If you delete an HDRI sky that is set as the active_sky in an <br>environment, the environment is updated with the default sky set as<br>the active sky. |
| CreateHdriSkyState | [CreateHdriSkyStateRequest](#createhdriskystaterequest) | [CreateHdriSkyStateResponse](#createhdriskystateresponse) | Creates a new HDRI sky state with optional properties.<br><br>Note: Names must be unique amongst sibling states.<br><br>Note: "Default" name is reserved.<br><br>Note: If some properties are not specified, default values are used. <br><br>Returns the information about the created HDRI sky state. |
| GetHdriSkyState | [GetHdriSkyStateRequest](#gethdriskystaterequest) | [GetHdriSkyStateResponse](#gethdriskystateresponse) | Gets the properties of an HDRI sky state, <br>given the parent HDRI sky identifier and the state name.<br><br>Returns the HDRI sky state properties. |
| UpdateHdriSkyState | [UpdateHdriSkyStateRequest](#updatehdriskystaterequest) | [UpdateHdriSkyStateResponse](#updatehdriskystateresponse) | Edits the properties of a state, <br>given the parent HDRI sky identifier and the state name.<br><br>Note: Names must be unique amongst sibling states.<br><br>Note: "Default" name is reserved. |
| DeleteHdriSkyState | [DeleteHdriSkyStateRequest](#deletehdriskystaterequest) | [DeleteHdriSkyStateResponse](#deletehdriskystateresponse) | Deletes an HDRI sky state, <br>given the parent HDRI sky identifier and the state name. |

Back to [Top](#reference-documentation)

## asset_preparation_api/hdriSky/hdri_sky_description.proto

This file describes the messages used to create, edit and manage HDRI skies.

### CreateHdriSkyRequest

The information required to create an HDRI sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [google.protobuf.StringValue](#stringvalue) |  | The HDRI sky name.<br><br>Note: Names must be unique amongst skies.<br><br>Note: If no name is defined, a default unique name is automatically set. |
| properties | [HdriSkyProperties](#hdriskyproperties) |  | The HDRI sky properties. |

### CreateHdriSkyResponse

The identifier of the created HDRI sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identity | [HdriSkyIdentity](#hdriskyidentity) |  | The identity of an HDRI sky.<br><br>Returns null in case of failure. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### CreateHdriSkyStateRequest

The information required to create an HDRI sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The HDRI sky identifier. |
| state_name | [string](#string) |  | The state name.<br> <br>Note: Names must be unique amongst sibling HDRI sky states.<br><br>Note: "Default" name is reserved. |
| base_state_name | [google.protobuf.StringValue](#stringvalue) |  | The name of an already existing state on which will be based <br>the state to create.<br><br>Note: If not defined, the HDRI sky properties are used. |
| state_properties | [HdriSkyProperties](#hdriskyproperties) |  | The state properties. |

### CreateHdriSkyStateResponse

The response returned when creating an HDRI sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The HDRI sky identifier. |
| state_name | [string](#string) |  | The new state name. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### DeleteHdriSkyRequest

The information required to delete an HDRI sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the HDRI sky to delete. |

### DeleteHdriSkyResponse

The response returned when deleting an HDRI sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DeleteHdriSkyStateRequest

The information required to delete an HDRI sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The HDRI sky identifier. |
| state_name | [string](#string) |  | The name of the state to delete. |

### DeleteHdriSkyStateResponse

The response returned when deleting an HDRI sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### GetHdriSkyRequest

The information required to examine an HDRI sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the HDRI sky to examine. |

### GetHdriSkyResponse

The information about an HDRI sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identity | [HdriSkyIdentity](#hdriskyidentity) |  | The HDRI sky identity. |
| properties | [HdriSkyProperties](#hdriskyproperties) |  | The HDRI sky properties. |
| state_names | [string](#string) | repeated | The names of the HDRI sky states. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### GetHdriSkyStateRequest

The information required to examine a state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the HDRI sky. |
| state_name | [string](#string) |  | The name of the state to examine. |

### GetHdriSkyStateResponse

The information about an HDRI sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The identifier of the examined HDRI sky. |
| state_name | [string](#string) |  | The state name. |
| state_properties | [HdriSkyProperties](#hdriskyproperties) |  | The properties of the examined state. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the reading operation. |

### HdriSkyIdentity

The full identity of an HDRI sky, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The HDRI sky identifier. |
| name | [string](#string) |  | The HDRI sky name. |

### HdriSkyProperties

The properties of an HDRI sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| texture_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the texture (created using the Resource service) <br>referenced in the HDRI sky.<br><br>Note: The texture reference can be removed by setting the value '-1'.<br><br>Note: The identifier must reference a texture with ".hdr" extension. |
| projection_type | [ProjectionType](#projectiontype) |  | The type of projection.<br><br>Note: The default value is SPHERE. |
| ground_radius | [google.protobuf.DoubleValue](#doublevalue) |  | The radius of the virtual ground.<br><br>Note: Must be equal or superior to 0.<br><br>Note: The default value is 0. |
| orientation | [google.protobuf.DoubleValue](#doublevalue) |  | The HDRI sky orientation.<br><br>Unit: Degree<br><br>Note: Must be in the range [0,359].<br><br>Note: The default value is 0. |
| luminance_factor | [google.protobuf.DoubleValue](#doublevalue) |  | The luminance factor applied to the HDRI texture.<br><br>Note: Must be equal or superior to 0.<br><br>Note: The default value is 1. |
| ambient_factor | [google.protobuf.DoubleValue](#doublevalue) |  | The ambient factor for opaque objects in Shadics rendering engine.<br><br>Note: Must be equal or superior to 0.<br><br>Note: The default value is 1. |

### ListHdriSkiesResponse

The identities of all HDRI skies in the collection.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| skies | [HdriSkyIdentity](#hdriskyidentity) | repeated | HDRI sky identities. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the listing operation. |

### UpdateHdriSkyRequest

The information required to update an HDRI sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the HDRI sky to update. |
| name | [google.protobuf.StringValue](#stringvalue) |  | The new HDRI sky name.<br><br>Note: Names must be unique amongst skies.<br><br>Note: If no name is defined, the name is not updated. |
| properties | [HdriSkyProperties](#hdriskyproperties) |  | The HDRI sky properties.<br><br>Note: All the properties are optional. |

### UpdateHdriSkyResponse

The response returned when updating an HDRI sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### UpdateHdriSkyStateRequest

The information required to update an HDRI sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The HDRI sky identifier. |
| state_name | [string](#string) |  | The current name of the state. |
| state_new_name | [google.protobuf.StringValue](#stringvalue) |  | The new name of the state.<br><br>Note: Names must be unique amongst sibling HDRI sky states.<br><br>Note: "Default" name is reserved. |
| state_properties | [HdriSkyProperties](#hdriskyproperties) |  | The new state properties. |

### UpdateHdriSkyStateResponse

The response returned when updating an HDRI sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| state_name | [string](#string) |  | The state name. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### ProjectionType

The type of projection.

| Name | Number | Description |
| ---- | ------ | ----------- |
| PROJECTION_TYPE_UNSPECIFIED | 0 | Unspecified projection type. |
| PROJECTION_TYPE_SPHERE | 1 | The sphere projection. |
| PROJECTION_TYPE_DOME | 2 | The dome projection. |

Back to [Top](#reference-documentation)

## asset_preparation_api/information/health.proto

This file describes the Asset Preparation API services' health.

### GetHealthResponse

This message describes the health response.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| is_healthy | [bool](#bool) |  | Whether the server is healthy. |

Back to [Top](#reference-documentation)

## asset_preparation_api/information/information.proto

This file describes the service used to check the Asset Preparation API services' health.

### Information

Information Service

This service is used to get information about the API services.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetHealth | [.google.protobuf.Empty](#empty) | [GetHealthResponse](#gethealthresponse) | Tests if the server is healthy.<br><br>Note: Checks that all repositories are available for all services<br>to work correctly. |

Back to [Top](#reference-documentation)

## asset_preparation_api/material/material.proto

This file describes the service used to create, edit and manage materials.

### MaterialPreparation

Material Preparation Service

This service is used to create, edit and manage materials.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateMaterial | [CreateMaterialRequest](#creatematerialrequest) | [CreateMaterialResponse](#creatematerialresponse) | Creates a new material with optional properties.<br><br>Note: Names must be unique amongst materials.<br><br>Note: If some properties are not specified, default values are used <br>and no dielectric properties are defined. <br><br>Returns the information about the created material. |
| GetMaterial | [GetMaterialRequest](#getmaterialrequest) | [GetMaterialResponse](#getmaterialresponse) | Gets the properties of a material, given its identifier. <br><br>Returns the material properties. |
| ListMaterials | [.google.protobuf.Empty](#empty) | [ListMaterialsResponse](#listmaterialsresponse) | Lists all the stored materials.<br><br>Returns the identifiers and names of the stored materials. |
| UpdateMaterial | [UpdateMaterialRequest](#updatematerialrequest) | [UpdateMaterialResponse](#updatematerialresponse) | Edits the properties of a material, given its identifier.<br><br>Note: Names must be unique amongst materials. |
| DeleteMaterial | [DeleteMaterialRequest](#deletematerialrequest) | [DeleteMaterialResponse](#deletematerialresponse) | Deletes a material, given its identifier. |
| CreateMaterialState | [CreateMaterialStateRequest](#creatematerialstaterequest) | [CreateMaterialStateResponse](#creatematerialstateresponse) | Creates a new material state with optional properties.<br><br>Note: Names must be unique amongst sibling material states.<br><br>Note: "Default" name is reserved.<br><br>Note: If some properties are not specified, default values are used <br>and no dielectric properties are defined. <br><br>Returns the information about the created material state. |
| GetMaterialState | [GetMaterialStateRequest](#getmaterialstaterequest) | [GetMaterialStateResponse](#getmaterialstateresponse) | Gets the properties of a material state, <br>given the parent material identifier and the state name.<br><br>Returns the material state properties. |
| UpdateMaterialState | [UpdateMaterialStateRequest](#updatematerialstaterequest) | [UpdateMaterialStateResponse](#updatematerialstateresponse) | Edits the properties of a state, <br>given the parent material identifier and the state name.<br><br>Note: Names must be unique amongst sibling material states.<br><br>Note: "Default" name is reserved. |
| DeleteMaterialState | [DeleteMaterialStateRequest](#deletematerialstaterequest) | [DeleteMaterialStateResponse](#deletematerialstateresponse) | Deletes a material state, <br>given the parent material identifier and the state name. |

Back to [Top](#reference-documentation)

## asset_preparation_api/material/material_description.proto

This file describes the messages used to create, edit and manage materials.

### AnisotropyProperties

The anisotropy properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| no_anisotropy | [asset_preparation.v3.common.Empty](#empty) |  | No anisotropy.<br><br>Note: This is the default anisotropy contribution type. |
| texture | [AnisotropyTexture](#anisotropytexture) |  | Anisotropy based on an anisotropic tangent map file. |
| color | [GreyLevel](#greylevel) |  | Anisotropy based on a color, in grey level. |

### AnisotropyTexture

The texture properties of an anisotropy.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| map_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the anisotropy map referenced in the material.<br><br>Note: The anisotropy map reference can be removed <br>by setting the value '-1'. |
| map_uv_channel | [google.protobuf.Int32Value](#int32value) |  | The anisotropy map UV channel.<br><br>Note: Must be 1, 2, 3 or 4.<br><br>Note: The default value is 1. |

### CreateMaterialRequest

The information required to create a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [google.protobuf.StringValue](#stringvalue) |  | The material name.<br><br>Note: Names must be unique amongst materials.<br><br>Note: If no name is defined, a default unique name is automatically set. |
| properties | [MaterialProperties](#materialproperties) |  | The properties of a material.<br><br>Note: If no properties are defined, the default properties are <br>automatically set. |

### CreateMaterialResponse

The identifier of the created material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identity | [MaterialIdentity](#materialidentity) |  | The new material identity.<br><br>Returns null in case of failure. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### CreateMaterialStateRequest

The information required to create a material state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The material identifier. |
| state_name | [string](#string) |  | The state name.<br> <br>Note: Names must be unique amongst sibling material states.<br><br>Note: "Default" name is reserved. |
| base_state_name | [google.protobuf.StringValue](#stringvalue) |  | The name of an already existing state on which will be based <br>the state to create.<br><br>Note: If not defined, the material properties are used. |
| state_properties | [MaterialProperties](#materialproperties) |  | The state properties. |

### CreateMaterialStateResponse

The response returned when creating a material state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The material identifier. |
| state_name | [string](#string) |  | The new state name. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### DeleteMaterialRequest

The information required to delete a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the material to delete. |

### DeleteMaterialResponse

The response returned when deleting a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DeleteMaterialStateRequest

The information required to delete a material state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The material identifier. |
| state_name | [string](#string) |  | The name of the state to delete. |

### DeleteMaterialStateResponse

The response returned when deleting a material state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DielectricProperties

The dielectric properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| dielectric_material_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the dielectric material<br>referenced in the material.<br><br>Note: The dielectric material reference can be removed<br>by setting the value '-1'. |

### DiffuseProperties

The diffuse properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| color_rgb | [Rgb](#rgb) |  | Diffuse based on a RGB color. |
| color_hsv | [Hsv](#hsv) |  | Diffuse based on an HSV color. |
| texture | [DiffuseTexture](#diffusetexture) |  | Diffuse based on a diffuse map file. <br><br>Note: This is the default diffuse contribution type. |

### DiffuseTexture

Texture properties for diffuse contribution.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| map_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the diffuse map referenced in the material.<br><br>Note: The diffuse map reference can be removed <br>by setting the value '-1'. |
| map_uv_channel | [google.protobuf.Int32Value](#int32value) |  | The diffuse map UV channel.<br><br>Note: Must be 1, 2, 3 or 4.<br><br>Note: The default value is 1. |
| alpha_uv_channel | [google.protobuf.Int32Value](#int32value) |  | The diffuse alpha map UV channel.<br><br>Note: Must be 1, 2, 3 or 4.<br><br>Note: The default value is 1.<br><br>Note: It can be set only for layer 1. |

### GetMaterialRequest

The information required to examine a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the material to examine. |

### GetMaterialResponse

The information about a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identity | [MaterialIdentity](#materialidentity) |  | The material identity. |
| properties | [MaterialProperties](#materialproperties) |  | The material properties. |
| state_names | [string](#string) | repeated | The names of the material states. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### GetMaterialStateRequest

The information required to examine a state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the material. |
| state_name | [string](#string) |  | The name of the state to examine. |

### GetMaterialStateResponse

The information about a material state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The identifier of the examined material. |
| state_name | [string](#string) |  | The state name. |
| state_properties | [MaterialProperties](#materialproperties) |  | The properties of the examined state. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the reading operation. |

### GreyLevel

Grey level value.

Note: Default value is 128.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| level | [int32](#int32) |  | Note: Must be an integer in the range [0,255]. |

### Hsv

HSV value of a color.

Note: Default value is (0,0,50).

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hue | [double](#double) |  | Unit: Degree<br> <br>Note: Must be a double in the range [0,360]. |
| saturation | [double](#double) |  | Note: Must be a double in the range [0,100]. |
| value | [double](#double) |  | Note: Must be a double in the range [0,100]. |

### LambertianLayer

The properties of the lambertian layer.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| absorption | [google.protobuf.DoubleValue](#doublevalue) |  | The Lambertian absorption.<br><br>Unit: Percentage (%)<br><br>Note: Must be a double in the range [0,100].<br><br>Note: The default value is 0. |
| diffuse_properties | [DiffuseProperties](#diffuseproperties) |  | The diffuse properties. |
| normal_properties | [NormalProperties](#normalproperties) |  | The normal properties. |
| anisotropy_properties | [AnisotropyProperties](#anisotropyproperties) |  | The anisotropy properties. |
| mask_properties | [MaskProperties](#maskproperties) |  | The Mask properties.<br><br>Note: Layer 1 must not contain a Mask. |

### Layer

The layer properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| no_layer | [asset_preparation.v3.common.Empty](#empty) |  | No layer.<br><br>Note: This is the default type for layer 2 and layer 3. |
| lambertian_layer | [LambertianLayer](#lambertianlayer) |  | Lambertian layer type.<br><br>Note: This is the default type for layer 1. |
| mirror_layer | [MirrorLayer](#mirrorlayer) |  | Mirror layer type. |
| optical_polish_layer | [OpticalPolishLayer](#opticalpolishlayer) |  | Optical polish layer type. |
| library_layer | [LibraryLayer](#librarylayer) |  | Library layer type. |
| rendering_layer | [RenderingLayer](#renderinglayer) |  | Rendering layer type. |

### LibraryLayer

The properties of the library layer.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| surface_state_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the surface state referenced in the material.<br><br>Note: The surface state reference can be removed <br>by setting the value '-1'. |
| diffuse_properties | [DiffuseProperties](#diffuseproperties) |  | The diffuse properties. |
| normal_properties | [NormalProperties](#normalproperties) |  | The normal properties. |
| anisotropy_properties | [AnisotropyProperties](#anisotropyproperties) |  | The anisotropy properties. |
| mask_properties | [MaskProperties](#maskproperties) |  | The Mask properties.<br><br>Note: Layer 1 must not contain a Mask. |

### LibraryVolumeOpticalProperties

The library volume optical properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| volume_material_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the volume material referenced in the material.<br><br>Note: The volume material reference can be removed <br>by setting the value '-1'. |

### ListMaterialsResponse

The identities of all materials in the collection.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| materials | [MaterialIdentity](#materialidentity) | repeated | Material identities. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the listing operation. |

### MaskProperties

The mask properties of a material.

Note: No mask properties should be set for layer 1.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| color | [GreyLevel](#greylevel) |  | Mask based on a color in grey level. |
| texture | [MaskTexture](#masktexture) |  | Mask based on a texture file.<br><br>Note: This is the default mask contribution type. |

### MaskTexture

Texture properties for mask.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| map_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the mask map referenced in the material.<br><br>Note: The mask map reference can be removed <br>by setting the value '-1'. |
| map_uv_channel | [google.protobuf.Int32Value](#int32value) |  | The mask map UV channel.<br><br>Note: Must be 1, 2, 3 or 4.<br><br>Note: The default value is 1. |

### MaterialIdentity

The full identity of a material, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The material identifier. |
| name | [string](#string) |  | The material name. |

### MaterialProperties

The properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| surface_optical_properties | [SurfaceOpticalProperties](#surfaceopticalproperties) |  | The surface optical properties. |
| volume_optical_properties | [VolumeOpticalProperties](#volumeopticalproperties) |  | The volume optical properties. |
| thermal_properties | [ThermalProperties](#thermalproperties) |  | The thermal properties. |
| dielectric_properties | [DielectricProperties](#dielectricproperties) |  | The dielectric properties.<br><br>Note: Optional field. |
| reflection_effect | [ReflectionEffectProperties](#reflectioneffectproperties) |  | The reflection effect properties. |

### MirrorLayer

The properties of the mirror layer.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| reflectivity | [google.protobuf.DoubleValue](#doublevalue) |  | The mirror reflectivity.<br> <br>Unit: Percentage (%)<br><br>Note: Must be a double in the range [0,100].<br><br>Note: The default value is 100. |
| diffuse_properties | [DiffuseProperties](#diffuseproperties) |  | The diffuse properties. |
| normal_properties | [NormalProperties](#normalproperties) |  | The normal properties. |
| anisotropy_properties | [AnisotropyProperties](#anisotropyproperties) |  | The anisotropy properties. |
| mask_properties | [MaskProperties](#maskproperties) |  | The Mask properties.<br><br>Note: Layer 1 must not contain a Mask. |

### NormalProperties

The normal properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| no_normal | [asset_preparation.v3.common.Empty](#empty) |  | No normal. |
| texture | [NormalTexture](#normaltexture) |  | Normal properties based on a normal map.<br><br>Note: This is the default normal contribution type. |

### NormalTexture

Texture properties for normal contribution.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| map_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the normal map referenced in the material.<br><br>Note: The normal map reference can be removed by setting the value '-1'. |
| map_uv_channel | [google.protobuf.Int32Value](#int32value) |  | The normal map UV channel.<br><br>Note: Must be 1, 2, 3 or 4.<br><br>Note: The default value is 1. |
| intensity | [google.protobuf.DoubleValue](#doublevalue) |  | The normal intensity.<br><br>Unit: Percentage (%)<br><br>Note: Must be a double in the range [-100,100].<br><br>Note: The default value is 100.<br><br>Note: If the normal map is not defined, the intensity will be ignored. |

### Opaque

The opaque volume optical type.

### OpticVolumeOpticalProperties

The optic volume optical properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| absorption | [google.protobuf.DoubleValue](#doublevalue) |  | The optical absorption.<br><br>Unit: Inverse millimeter (mm<sup>-1</sup>)<br><br>Note: Must be equal or superior to 0.<br><br>Note: The default value is 0. |
| refractive_index | [google.protobuf.DoubleValue](#doublevalue) |  | The refractive index.<br><br>Note: The default value is 1.52. |
| constringency | [google.protobuf.DoubleValue](#doublevalue) |  | The constringency.<br><br>Note: Must be a double in the range [20,90].<br><br>Note: The default value is 40. |

### OpticalPolishLayer

The properties of the optical polish layer.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| diffuse_properties | [DiffuseProperties](#diffuseproperties) |  | The diffuse properties. |
| normal_properties | [NormalProperties](#normalproperties) |  | The normal properties. |
| anisotropy_properties | [AnisotropyProperties](#anisotropyproperties) |  | The anisotropy properties. |
| mask_properties | [MaskProperties](#maskproperties) |  | The Mask properties.<br><br>Note: Layer 1 must not contain a Mask. |

### ReflectionEffect

The reflection effect properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| reflectivity | [google.protobuf.DoubleValue](#doublevalue) |  | The reflection effect reflectivity.<br><br>Unit: Percentage (%)<br><br>Note: Must be a double in the range [0,100].<br><br>Note: The default value is 100. |
| size | [google.protobuf.DoubleValue](#doublevalue) |  | The reflection effect size.<br><br>Unit: meter (m)<br><br>Note: The default value is 0. |
| index_of_refraction | [google.protobuf.DoubleValue](#doublevalue) |  | The index of refraction.<br><br>Note: Must be a double in the range [1,100].<br><br>Note: The default value is 1.45. |

### ReflectionEffectProperties

The reflection effect properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| no_reflection_effect | [asset_preparation.v3.common.Empty](#empty) |  | No reflection effect on material.<br><br>note This is the default reflection effect contribution type. |
| scene_hdri | [ReflectionEffect](#reflectioneffect) |  | Apply a reflection effect that projects an HDRI Sky on the material. |

### RenderingLayer

The properties of the rendering layer.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| specular_properties | [SpecularProperties](#specularproperties) |  | The specular properties. |
| roughness_properties | [RoughnessProperties](#roughnessproperties) |  | The roughness properties. |
| diffuse_properties | [DiffuseProperties](#diffuseproperties) |  | The diffuse properties. |
| normal_properties | [NormalProperties](#normalproperties) |  | The normal properties. |
| anisotropy_properties | [AnisotropyProperties](#anisotropyproperties) |  | The anisotropy properties. |
| mask_properties | [MaskProperties](#maskproperties) |  | The Mask properties.<br><br>Note: Layer 1 must not contain a Mask. |

### Rgb

RGB value of a color.

Note: Default value is (128,128,128).

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| red | [int32](#int32) |  | Note: Must be an integer in the range [0,255]. |
| green | [int32](#int32) |  | Note: Must be an integer in the range [0,255]. |
| blue | [int32](#int32) |  | Note: Must be an integer in the range [0,255]. |

### RoughnessProperties

The roughness properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| texture | [RoughnessTexture](#roughnesstexture) |  | Roughness texture type.<br><br>Note: This is the default roughness contribution type. |
| color | [GreyLevel](#greylevel) |  | Color roughness type, in grey level. |

### RoughnessTexture

The roughness texture properties.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| map_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the roughness map referenced in the material.<br><br>Note: The roughness map reference can be removed <br>by setting the value '-1'. |
| map_uv_channel | [google.protobuf.Int32Value](#int32value) |  | The roughness map UV channel.<br><br>Note: Must be an integer in the range [1,4].<br><br>Note: The default value is 1. |
| intensity | [google.protobuf.DoubleValue](#doublevalue) |  | The roughness intensity.<br><br>Note: Must be a double in the range [0,200].<br><br>Note: The default value is 100.<br><br>Note: If the roughness map is not defined, the intensity will be ignored. |

### SpecularProperties

The specular properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| color_rgb | [Rgb](#rgb) |  | Specular based on a RGB color. |
| color_hsv | [Hsv](#hsv) |  | Specular based on an HSV color. |
| texture | [SpecularTexture](#speculartexture) |  | Specular based on a specular map file. <br><br>Note: This is the default specular contribution type. |

### SpecularTexture

Texture properties for specular contribution.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| map_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the specular map referenced in the material.<br><br>Note: The specular map reference can be removed <br>by setting the value '-1'. |
| map_uv_channel | [google.protobuf.Int32Value](#int32value) |  | The UV channel.<br><br>Note: Must be 1, 2, 3 or 4.<br><br>Note: The default value is 1. |
| intensity | [google.protobuf.DoubleValue](#doublevalue) |  | The specular intensity.<br><br>Note: Must be a double in the range [0,200].<br><br>Note: The default value is 100.<br><br>Note: If the specular map is not defined, the intensity will be ignored. |

### SurfaceOpticalProperties

The surface optical properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| texture_normalization | [TextureNormalization](#texturenormalization) |  | Texture normalization type.<br><br>Note: The default value is None. |
| layer_1 | [Layer](#layer) |  | The surface optical layers.<br><br>Note: Layer 1 is mandatory. Layers 2 and 3 are optional.<br><br>Note: Layer 3 must not be set without layer 2. |
| layer_2 | [Layer](#layer) |  |  |
| layer_3 | [Layer](#layer) |  |  |

### ThermalProperties

The thermal properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| emissivity | [google.protobuf.DoubleValue](#doublevalue) |  | The emissivity.<br><br>Unit: Percentage (%)<br><br>Note: Must be a double in the range [0,100].<br><br>Note: The default value is 0. |
| emissivity_variation_texture_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the emissivity variation texture<br>referenced in the material.<br><br>Note: Optional field. <br><br>Note: The emissivity variation texture reference can be removed<br>by setting the value '-1'. |
| emissivity_variation_uv_channel | [google.protobuf.Int32Value](#int32value) |  | The emissivity variation UV channel.<br><br>Note: Must be 1, 2, 3 or 4.<br><br>Note: The default value is 1. |
| emissivity_variation_amplitude | [google.protobuf.DoubleValue](#doublevalue) |  | The emissivity variation amplitude.<br><br>Unit: Percentage (%)<br><br>Note: Must be a double in the range [0,100].<br><br>Note: The default value is 0.<br><br>Note: If the emissivity variation texture is not defined, <br>the amplitude will be ignored. |
| reflection_coefficient | [google.protobuf.DoubleValue](#doublevalue) |  | The reflection coefficient.<br><br>Unit: Percentage (%)<br><br>Note: Must be a double in the range [0,100].<br><br>Note: The default value is 0. |
| shininess | [google.protobuf.DoubleValue](#doublevalue) |  | The shininess.<br><br>Note: Must be a double in the range [1,10].<br><br>Note: The default value is 1. |
| thermal_coefficient | [google.protobuf.DoubleValue](#doublevalue) |  | The thermal coefficient.<br><br>Note: Must be a double in the range [0,1].<br><br>Note: The default value is 1. |

### UpdateMaterialRequest

The information required to update a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the material to update. |
| name | [google.protobuf.StringValue](#stringvalue) |  | The material name.<br><br>Note: Names must be unique amongst materials.<br><br>Note: If no name is defined, the name is not updated. |
| properties | [MaterialProperties](#materialproperties) |  | The material properties.<br><br>Note: All the properties are optional. |

### UpdateMaterialResponse

The response returned when updating a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### UpdateMaterialStateRequest

The information required to update a material state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The material identifier. |
| state_name | [string](#string) |  | The current name of the state. |
| state_new_name | [google.protobuf.StringValue](#stringvalue) |  | The new name of the state.<br><br>Note: Names must be unique amongst sibling material states.<br><br>Note: "Default" name is reserved. |
| state_properties | [MaterialProperties](#materialproperties) |  | The new state properties. |

### UpdateMaterialStateResponse

The response returned when updating a material state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| state_name | [string](#string) |  | The state name. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### VolumeOpticalProperties

The volume optical properties of a material.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| opaque | [Opaque](#opaque) |  | Opaque for non transparent material.<br><br>Note: This is the default volume optical properties contribution type. |
| optic | [OpticVolumeOpticalProperties](#opticvolumeopticalproperties) |  | Optic for transparent colorless material without bulk scattering. |
| volume_optical_library | [LibraryVolumeOpticalProperties](#libraryvolumeopticalproperties) |  | Volume optical property based on a VOP file. |
| fast_transmission_gathering | [google.protobuf.BoolValue](#boolvalue) |  | Enable fast transmission gathering.<br><br>Note: The default value is false. |

### TextureNormalization

The possible types of texture normalization method.

| Name | Number | Description |
| ---- | ------ | ----------- |
| TEXTURE_NORMALIZATION_UNSPECIFIED | 0 | Unspecified texture normalization type. |
| TEXTURE_NORMALIZATION_NONE | 1 | No texture normalization.<br><br>Note: The BRDF is blended with the texture not preserving<br>the color and luminance. |
| TEXTURE_NORMALIZATION_COLOR_FROM_TEXTURE | 2 | Blend using the Color from texture mode. |
| TEXTURE_NORMALIZATION_COLOR_FROM_BRDF | 3 | Blend using the Color from BRDF mode. |

Back to [Top](#reference-documentation)

## asset_preparation_api/naturalSky/natural_sky.proto

This file describes the service used to create, edit and manage natural skies.

### NaturalSkyPreparation

Natural Sky Preparation Service

This service is used to create, edit and manage natural skies.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateNaturalSky | [CreateNaturalSkyRequest](#createnaturalskyrequest) | [CreateNaturalSkyResponse](#createnaturalskyresponse) | Creates a new natural sky with an optional name.<br><br>Note: Names must be unique amongst skies.<br><br>Note: If unspecified, default values are used.<br><br>Returns the identifier of the created natural sky. |
| GetNaturalSky | [GetNaturalSkyRequest](#getnaturalskyrequest) | [GetNaturalSkyResponse](#getnaturalskyresponse) | Gets the properties of a natural sky, given its identifier.<br><br>Returns the natural sky properties. |
| ListNaturalSkies | [.google.protobuf.Empty](#empty) | [ListNaturalSkiesResponse](#listnaturalskiesresponse) | Lists all the created natural skies.<br><br>Returns the identifiers and names of the natural skies. |
| UpdateNaturalSky | [UpdateNaturalSkyRequest](#updatenaturalskyrequest) | [UpdateNaturalSkyResponse](#updatenaturalskyresponse) | Edits the properties of a natural sky, given its identifier.<br><br>Note: Names must be unique amongst skies. |
| DeleteNaturalSky | [DeleteNaturalSkyRequest](#deletenaturalskyrequest) | [DeleteNaturalSkyResponse](#deletenaturalskyresponse) | Deletes a natural sky, given its identifier.<br><br>Note: If you delete a natural sky that is set as the active_sky in an <br>environment, the environment is updated with the default sky set as<br>the active sky. |
| CreateNaturalSkyState | [CreateNaturalSkyStateRequest](#createnaturalskystaterequest) | [CreateNaturalSkyStateResponse](#createnaturalskystateresponse) | Creates a new natural sky state with optional properties.<br><br>Note: Names must be unique amongst sibling states.<br><br>Note: "Default" name is reserved.<br><br>Note: If some properties are not specified, default values are used. <br><br>Returns the information about the created natural sky state. |
| GetNaturalSkyState | [GetNaturalSkyStateRequest](#getnaturalskystaterequest) | [GetNaturalSkyStateResponse](#getnaturalskystateresponse) | Gets the properties of a natural sky state, <br>given the parent natural sky identifier and the state name.<br><br>Returns the natural sky state properties. |
| UpdateNaturalSkyState | [UpdateNaturalSkyStateRequest](#updatenaturalskystaterequest) | [UpdateNaturalSkyStateResponse](#updatenaturalskystateresponse) | Edits the properties of a state, <br>given the parent natural sky identifier and the state name.<br><br>Note: Names must be unique amongst sibling states.<br><br>Note: "Default" name is reserved. |
| DeleteNaturalSkyState | [DeleteNaturalSkyStateRequest](#deletenaturalskystaterequest) | [DeleteNaturalSkyStateResponse](#deletenaturalskystateresponse) | Deletes a natural sky state, <br>given the parent natural sky identifier and the state name. |

Back to [Top](#reference-documentation)

## asset_preparation_api/naturalSky/natural_sky_description.proto

This file describes the messages used to create, edit and manage natural skies.

### AmbientConditions

The ambient conditions properties.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| turbidity | [google.protobuf.DoubleValue](#doublevalue) |  | The sky turbidity.<br><br>Note: Must be in the range [2,9].<br><br>Note: The default value is 3. |
| ambient_temperature | [google.protobuf.DoubleValue](#doublevalue) |  | The ambient temperature.<br><br>Unit: Degree Celsius<br><br>Note: Must be in the range [-25,65].<br><br>Note: The default value is 25. |
| relative_humidity | [google.protobuf.DoubleValue](#doublevalue) |  | The relative humidity.<br><br>Unit: Percentage (%)<br><br>Note: Must be in the range [0,100].<br><br>Note: The default value is 50. |
| no_override | [asset_preparation.v3.common.Empty](#empty) |  | The maximum solar warming is not overridden.<br><br>Note: This is the default mode.<br><br>Note: With this mode, the max_solar_warming is automatically <br>computed. |
| max_solar_warming | [google.protobuf.DoubleValue](#doublevalue) |  | The maximum solar warming, describing the maximal temperature<br>difference between shadowed and sun-exposed road.<br><br>Unit: Degree Celsius<br><br>Note: Must be in the range [0,100].<br><br>Note: The default value is 0. |
| mean_road_emissivity | [google.protobuf.DoubleValue](#doublevalue) |  | Mean road emissivity.<br><br>Unit: Percentage (%)<br><br>Note: Must be in the range [0,100].<br><br>Note: The default value is 10. |

### CreateNaturalSkyRequest

The information required to create a natural sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [google.protobuf.StringValue](#stringvalue) |  | The natural sky name.<br><br>Note: Names must be unique amongst skies.<br><br>Note: If no name is defined, a default unique name is automatically set. |
| properties | [NaturalSkyProperties](#naturalskyproperties) |  | The natural sky properties. |

### CreateNaturalSkyResponse

The identifier of the created natural sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identity | [NaturalSkyIdentity](#naturalskyidentity) |  | The identity of a natural sky.<br><br>Returns null in case of failure. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### CreateNaturalSkyStateRequest

The information required to create a natural sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The natural sky identifier. |
| state_name | [string](#string) |  | The state name.<br> <br>Note: Names must be unique amongst sibling states.<br><br>Note: "Default" name is reserved. |
| base_state_name | [google.protobuf.StringValue](#stringvalue) |  | The name of an already existing state on which will be based <br>the state to create.<br><br>Note: If not defined, the natural sky properties are used. |
| state_properties | [NaturalSkyProperties](#naturalskyproperties) |  | The state properties. |

### CreateNaturalSkyStateResponse

The response returned when creating a natural sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The natural sky identifier. |
| state_name | [string](#string) |  | The new state name. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### Date

The date of a natural sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| day | [int32](#int32) |  |  |
| month | [int32](#int32) |  |  |
| year | [int32](#int32) |  |  |

### DeleteNaturalSkyRequest

The information required to delete a natural sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the natural sky to delete. |

### DeleteNaturalSkyResponse

The response returned when deleting a natural sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DeleteNaturalSkyStateRequest

The information required to delete a natural sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The natural sky identifier. |
| state_name | [string](#string) |  | The name of the state to delete. |

### DeleteNaturalSkyStateResponse

The response returned when deleting a natural sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DynamicAccurateShadows

The properties of dynamic accurate shadows.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| shadow_offset_ratio | [google.protobuf.DoubleValue](#doublevalue) |  | The shadow offset ratio.<br><br>Note: Must be above 0.00001.<br><br>Note: The default value is 0.01. |
| shadow_radius | [google.protobuf.DoubleValue](#doublevalue) |  | The shadow radius.<br><br>Note: Must be equal or superior to 0.<br><br>Note: The default value is 0. |
| softness | [google.protobuf.DoubleValue](#doublevalue) |  | The softness.<br><br>Note: Must be in the range [0,2].<br><br>Note: The default value is 0. |
| resolution | [google.protobuf.Int32Value](#int32value) |  | The resolution.<br><br>Note: Must be an integer in the range [1,8].<br><br>Note: The default value is 4. |
| near_field_precision | [google.protobuf.DoubleValue](#doublevalue) |  | The near field precision.<br><br>Note: Must be in the range [0,1].<br><br>Note: The default value is 0.99. |

### GetNaturalSkyRequest

The information required to examine a natural sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the natural sky to examine. |

### GetNaturalSkyResponse

The information about a natural sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identity | [NaturalSkyIdentity](#naturalskyidentity) |  | The natural sky identity. |
| properties | [NaturalSkyProperties](#naturalskyproperties) |  | The natural sky properties. |
| state_names | [string](#string) | repeated | The names of the natural sky states. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### GetNaturalSkyStateRequest

The information required to examine a state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the natural sky. |
| state_name | [string](#string) |  | The name of the state to examine. |

### GetNaturalSkyStateResponse

The information about a natural sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The identifier of the examined natural sky. |
| state_name | [string](#string) |  | The state name. |
| state_properties | [NaturalSkyProperties](#naturalskyproperties) |  | The properties of the examined state. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the reading operation. |

### ListNaturalSkiesResponse

The identities of all the natural skies in the collection.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| skies | [NaturalSkyIdentity](#naturalskyidentity) | repeated | Natural sky identities. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the listing operation. |

### Location

The location properties.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| latitude | [google.protobuf.DoubleValue](#doublevalue) |  | The latitude describing the south-north position. <br><br>Unit: Degree<br><br>Note: Must be in the range [-90,90].<br><br>Note: The default value is 48. |
| longitude | [google.protobuf.DoubleValue](#doublevalue) |  | The longitude describing the east-west position. <br><br>Unit: Degree<br><br>Note: Must be in the range [-180,180].<br><br>Note: The default value is 2. |
| cardinal_direction | [google.protobuf.DoubleValue](#doublevalue) |  | The cardinal direction for the X axis of the environment. <br><br>Unit: Degree<br><br>Note: Must be in the range [0,359].<br><br>Note: The default value is 0. |

### NaturalSkyIdentity

The full identity of a natural sky, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The natural sky identifier. |
| name | [string](#string) |  | The natural sky name. |

### NaturalSkyProperties

The properties of a natural sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| time | [Time](#time) |  | The time of the day.<br><br>Note: The default value is 12:00. |
| date | [Date](#date) |  | The date.<br><br>Note: The default value is 02-15-2018 (mm-dd-yyyy). |
| location | [Location](#location) |  | The location. |
| ambient_conditions | [AmbientConditions](#ambientconditions) |  | The ambient conditions. |
| no_shadow | [asset_preparation.v3.common.Empty](#empty) |  | The sky does not cast shadows. |
| dynamic_accurate_shadows | [DynamicAccurateShadows](#dynamicaccurateshadows) |  | The sky produces shadows <br>with Parallel-Split Shadow Maps with adaptive detailed.<br><br>Note: this is the default type of shadows. |

### Time

The time of a natural sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hours | [int32](#int32) |  |  |
| minutes | [int32](#int32) |  |  |

### UpdateNaturalSkyRequest

The information required to update a natural sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the natural sky to update. |
| name | [google.protobuf.StringValue](#stringvalue) |  | The new natural sky name.<br><br>Note: Names must be unique amongst skies.<br><br>Note: If no name is defined, the name is not updated. |
| properties | [NaturalSkyProperties](#naturalskyproperties) |  | The natural sky properties.<br><br>Note: All the properties are optional. |

### UpdateNaturalSkyResponse

The response returned when updating a natural sky.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### UpdateNaturalSkyStateRequest

The information required to update a natural sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The natural sky identifier. |
| state_name | [string](#string) |  | The current name of the state. |
| state_new_name | [google.protobuf.StringValue](#stringvalue) |  | The new name of the state.<br><br>Note: Names must be unique amongst sibling states.<br><br>Note: "Default" name is reserved. |
| state_properties | [NaturalSkyProperties](#naturalskyproperties) |  | The new state properties. |

### UpdateNaturalSkyStateResponse

The response returned when updating a natural sky state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| state_name | [string](#string) |  | The state name. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

Back to [Top](#reference-documentation)

## asset_preparation_api/pointLight/point_light.proto

This file describes the service used to create, edit and manage point lights.

### PointLightPreparation

Point Light Preparation Service

This service is used to create, edit and manage point lights.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreatePointLight | [CreatePointLightRequest](#createpointlightrequest) | [CreatePointLightResponse](#createpointlightresponse) | Creates a new point light with optional properties.<br><br>Note: Names must be unique amongst point lights.<br><br>Note: If unspecified, default values are used.<br><br>Returns the identifier of the created point light. |
| GetPointLight | [GetPointLightRequest](#getpointlightrequest) | [GetPointLightResponse](#getpointlightresponse) | Gets the properties of a point light, given its identifier. <br><br>Returns the point light properties. |
| ListPointLights | [.google.protobuf.Empty](#empty) | [ListPointLightsResponse](#listpointlightsresponse) | Lists all the created point lights.<br><br>Returns the identifiers and names of the point lights. |
| UpdatePointLight | [UpdatePointLightRequest](#updatepointlightrequest) | [UpdatePointLightResponse](#updatepointlightresponse) | Edits the properties of a point light, given its identifier.<br><br>Note: Names must be unique amongst point lights. |
| DeletePointLight | [DeletePointLightRequest](#deletepointlightrequest) | [DeletePointLightResponse](#deletepointlightresponse) | Deletes a point light, given its identifier. |
| CreatePointLightState | [CreatePointLightStateRequest](#createpointlightstaterequest) | [CreatePointLightStateResponse](#createpointlightstateresponse) | Creates a new point light state with optional properties.<br><br>Note: Names must be unique amongst sibling point light states.<br><br>Note: "Default" name is reserved.<br><br>Note: If some properties are not specified, default values are used. <br><br>Returns the information about the created point light state. |
| GetPointLightState | [GetPointLightStateRequest](#getpointlightstaterequest) | [GetPointLightStateResponse](#getpointlightstateresponse) | Gets the properties of a point light state, <br>given the parent point light identifier and the state name.<br><br>Returns the point light state properties. |
| UpdatePointLightState | [UpdatePointLightStateRequest](#updatepointlightstaterequest) | [UpdatePointLightStateResponse](#updatepointlightstateresponse) | Edits the properties of a state, <br>given the parent point light identifier and the state name.<br><br>Note: Names must be unique amongst sibling point light states.<br><br>Note: "Default" name is reserved. |
| DeletePointLightState | [DeletePointLightStateRequest](#deletepointlightstaterequest) | [DeletePointLightStateResponse](#deletepointlightstateresponse) | Deletes a point light state, <br>given the parent point light identifier and the state name. |

Back to [Top](#reference-documentation)

## asset_preparation_api/pointLight/point_light_description.proto

This file describes the messages used to create, edit and manage 
point lights.

### BlackBody

Spectrum based on a black body.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| temperature | [google.protobuf.DoubleValue](#doublevalue) |  | The temperature of the black body.<br><br>Unit: Kelvin (K)<br><br>Note: Must be in the range [0,30000].<br><br>Note: The default value is 5500. |

### CreatePointLightRequest

The information required to create a point light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [google.protobuf.StringValue](#stringvalue) |  | The point light name.<br><br>Note: Names must be unique amongst point lights.<br><br>Note: If no name is defined, a default unique name is automatically set. |
| properties | [PointLightProperties](#pointlightproperties) |  | The point light properties. |

### CreatePointLightResponse

The identifier of the created point light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identity | [PointLightIdentity](#pointlightidentity) |  | The identity of a point light.<br><br>Returns null in case of failure. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### CreatePointLightStateRequest

The information required to create a point light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The point light identifier. |
| state_name | [string](#string) |  | The state name.<br> <br>Note: Names must be unique amongst sibling point light states.<br><br>Note: "Default" name is reserved. |
| base_state_name | [google.protobuf.StringValue](#stringvalue) |  | The name of an already existing state on which will be based <br>the state to create.<br><br>Note: If not defined, the point light properties are used. |
| state_properties | [PointLightProperties](#pointlightproperties) |  | The state properties. |

### CreatePointLightStateResponse

The response returned when creating a point light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The point light identifier. |
| state_name | [string](#string) |  | The new state name. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### DeletePointLightRequest

The information required to delete a point light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the point light to delete. |

### DeletePointLightResponse

The response returned when deleting a point light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DeletePointLightStateRequest

The information required to delete a point light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The point light identifier. |
| state_name | [string](#string) |  | The name of the state to delete. |

### DeletePointLightStateResponse

The response returned when deleting a point light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### GaussianDiagram

The properties of gaussian angular diagram.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [google.protobuf.DoubleValue](#doublevalue) |  | Value along the X axis.<br><br>Unit: Degree<br><br>Note: Must be in the range [0,180].<br><br>Note: The default value is 45. |
| y | [google.protobuf.DoubleValue](#doublevalue) |  | Value along the Y axis.<br><br>Unit: Degree<br><br>Note: Must be in the range [0,180].<br><br>Note: The default value is 45. |

### GetPointLightRequest

The information required to examine a point light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the point light to examine. |

### GetPointLightResponse

The information about a point light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identity | [PointLightIdentity](#pointlightidentity) |  | The point light identity. |
| properties | [PointLightProperties](#pointlightproperties) |  | The point light properties. |
| state_names | [string](#string) | repeated | The names of the point light states. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### GetPointLightStateRequest

The information required to examine a state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the point light. |
| state_name | [string](#string) |  | The name of the state to examine. |

### GetPointLightStateResponse

The information about a point light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The identifier of the examined point light. |
| state_name | [string](#string) |  | The state name. |
| state_properties | [PointLightProperties](#pointlightproperties) |  | The properties of the examined state. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the reading operation. |

### Intensity

The properties of a custom point light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| flux | [google.protobuf.DoubleValue](#doublevalue) |  | The flux.<br><br>Unit: lm<br><br>Note: Must be positive.<br><br>Note: The default value is 1000. |
| angular_precision | [google.protobuf.DoubleValue](#doublevalue) |  | The angular precision.<br><br>Unit: Degree<br><br>Note: Must be in the range [0,57].<br><br>Note: The default value is 0. |
| diagram_library | [LibraryDiagram](#librarydiagram) |  | Intensity based on a library angular diagram. |
| lambertian | [LambertianDiagram](#lambertiandiagram) |  | Intensity based on a lambertian angular diagram. |
| gaussian | [GaussianDiagram](#gaussiandiagram) |  | Intensity based on a gaussian angular diagram. |
| isotropic | [IsotropicDiagram](#isotropicdiagram) |  | Intensity based on an isotropic angular diagram.<br><br>Note: This is the default type of angular diagram. |

### IsotropicDiagram

Isotropic angular diagram.

### LambertianDiagram

Lambertian angular diagram.

### LibraryDiagram

The properties of library angular diagram.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| diagram_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the intensity diagram (created using the <br>Resource service) referenced in the point light.<br><br>Note: The intensity diagram reference can be removed by setting <br>the value '-1'. |

### ListPointLightsResponse

The identities of all point lights in the collection.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| point_lights | [PointLightIdentity](#pointlightidentity) | repeated | Point light identities. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the listing operation. |

### Monochromatic

Monochromatic spectrum.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| wavelength | [google.protobuf.DoubleValue](#doublevalue) |  | The emission wavelength of the Spectrum.<br><br>Unit: nanometer (nm)<br><br>Note: Must be in the range [360,813].<br><br>Note: The default value is 580. |

### PointLightIdentity

The full identity of a point light, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The point light identifier. |
| name | [string](#string) |  | The point light name. |

### PointLightProperties

The properties of a point light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| intensity | [Intensity](#intensity) |  | The intensity. |
| spectrum_library | [SpectrumLibrary](#spectrumlibrary) |  | Spectrum based on a spectrum file. |
| black_body | [BlackBody](#blackbody) |  | Spectrum based on a black body.<br><br>Note: This is the default type of spectrum. |
| monochromatic | [Monochromatic](#monochromatic) |  | Monochromatic spectrum. |
| color_rgb | [asset_preparation.v3.common.ColorRgb](#colorrgb) |  | Spectrum based on a RGB color. <br><br>Note: Default value is (255,255,255). |
| color_hsv | [asset_preparation.v3.common.ColorHsv](#colorhsv) |  | Spectrum based on an HSV color. <br><br>Note: Default value is (0,0,100). |
| no_shadow | [asset_preparation.v3.common.Empty](#empty) |  | The point light does not cast shadows. |
| static_shadows | [Shadows](#shadows) |  | The point light produces static shadows. |
| dynamic_shadows | [Shadows](#shadows) |  | The point light produces dynamic shadows.<br><br>Note: This is the default type of shadows. |
| rendering | [Rendering](#rendering) |  | The rendering properties. |

### Rendering

The rendering properties.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| range | [google.protobuf.DoubleValue](#doublevalue) |  | The range describing the maximum distance of the light radiation.<br><br>Unit: Meter (m)<br><br>Note: Must be positive.<br><br>Note: The default value is 128. |

### Shadows

The properties of shadows.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| near_clip | [google.protobuf.DoubleValue](#doublevalue) |  | The near clip.<br><br>Unit: Meter (m)<br><br>Note: Must be positive.<br><br>Note: The default value is 0.1. |
| shadows_offset_ratio | [google.protobuf.DoubleValue](#doublevalue) |  | The shadow offset ratio.<br><br>Note: Must be above 0.00001.<br><br>Note: The default value is 0.01. |
| softness | [google.protobuf.DoubleValue](#doublevalue) |  | The softness.<br><br>Note: Must be in the range [0,2].<br><br>Note: The default value is 0. |

### SpectrumLibrary

Spectrum based on a spectrum file.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| spectrum_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the spectrum (created using the Resource service) <br>referenced in the point light.<br><br>Note: The spectrum reference can be removed by setting the value '-1'. |

### UpdatePointLightRequest

The information required to update a point light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the point light to update. |
| name | [google.protobuf.StringValue](#stringvalue) |  | The point light name.<br><br>Note: Names must be unique amongst point lights.<br><br>Note: If no name is defined, the name is not updated. |
| properties | [PointLightProperties](#pointlightproperties) |  | The point light properties.<br><br>Note: All the properties are optional. |

### UpdatePointLightResponse

The response returned when updating a point light.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### UpdatePointLightStateRequest

The information required to update a point light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The point light identifier. |
| state_name | [string](#string) |  | The current name of the state. |
| state_new_name | [google.protobuf.StringValue](#stringvalue) |  | The new name of the state.<br><br>Note: Names must be unique amongst sibling point light states.<br><br>Note: "Default" name is reserved. |
| state_properties | [PointLightProperties](#pointlightproperties) |  | The new state properties. |

### UpdatePointLightStateResponse

The response returned when updating a point light state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| state_name | [string](#string) |  | The state name. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

Back to [Top](#reference-documentation)

## asset_preparation_api/resource/resource.proto

This file describes the service used to manage resources.

### ResourcePreparation

Resource Preparation Service

This service is used to manage resources.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| UploadResource | [.asset_preparation.v3.common.Chunk](#chunk) stream | [UploadResourceResponse](#uploadresourceresponse) | Uploads a new resource with a given stream of chunks containing<br>the "AVX MIMEType" metadata.<br><br>Note: A resource name can be provided using the "AVX DataName"<br>key in the metadata.<br><br>Note: Importing an irradiance map may take several minutes. <br>The server response may be "freezing" during the import time.<br><br>Returns the identity of the created resource. |
| DownloadResourceAsChunks | [DownloadResourceAsChunksRequest](#downloadresourceaschunksrequest) | [.asset_preparation.v3.common.Chunk](#chunk) stream | Downloads a resource binary content as a stream of chunks with a given<br>identifier and type.<br><br>Note: The first chunk of the stream provides the metadata<br>"AVX MIMEType" and "AVX DataName". The last chunk of the stream <br>provides the metadata "AVX Status Error" if an error occurred, <br>"AVX Status Warning" or "AVX Status Info" if the export succeeded.<br><br>Note: Irradiance maps cannot be downloaded. |
| DownloadResourceAsFile | [DownloadResourceAsFileRequest](#downloadresourceasfilerequest) | [DownloadResourceAsFileResponse](#downloadresourceasfileresponse) | Downloads a resource file with a given identifier, type and destination<br>path.<br><br>Note: Irradiance maps cannot be downloaded. |
| ListResources | [ListResourcesRequest](#listresourcesrequest) | [ListResourcesResponse](#listresourcesresponse) | Lists the identity of each resource of the given type.<br><br>Note: If no type is provided, all the resources are listed. |
| DeleteResource | [DeleteResourceRequest](#deleteresourcerequest) | [DeleteResourceResponse](#deleteresourceresponse) | Deletes a resource, given its identifier and type. <br><br>Note: If no identifier and type are provided, all the resources are<br>released.<br><br>Note: If only the type is provided, all the resources of the given type<br>are released. |

Back to [Top](#reference-documentation)

## asset_preparation_api/resource/resource_description.proto

This file describes the messages used to manage resources.

### DeleteResourceRequest

The information required to delete a resource from the collection.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the resource to delete. |
| type | [google.protobuf.StringValue](#stringvalue) |  | The type of the resource to delete. |

### DeleteResourceResponse

The response returned when deleting a resource.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DownloadResourceAsChunksRequest

The request to export a resource as a stream.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the resource to download. |
| type | [string](#string) |  | The type of the resource to download. |

### DownloadResourceAsFileRequest

The request to export a resource as a file.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the resource to download. |
| type | [string](#string) |  | The type of the resource to download. |
| file_path | [string](#string) |  | The path of the exported file.<br><br>Note: The file extension must be correct according to the resource type. |
| overwrite | [google.protobuf.BoolValue](#boolvalue) |  | Describes whether the file should be overwritten.<br><br>Note: The default value is true. |

### DownloadResourceAsFileResponse

The response returned when downloading a resource as a file.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the download operation. |

### ListResourcesRequest

The request to list all the uploaded resources of a specific type,
if defined.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [google.protobuf.StringValue](#stringvalue) |  | The type of resources to list. |

### ListResourcesResponse

The identities of all resources in the collection.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifiers | [ResourceIdentity](#resourceidentity) | repeated | Resource identities. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the listing operation. |

### ResourceIdentity

The full identity of a resource, consisting of an identifier, a type and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The identifier of the resource. |
| type | [string](#string) |  | The type of the resource. |
| name | [string](#string) |  | The name of the resource. |

### UploadResourceResponse

The identity of the uploaded resource.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identity | [ResourceIdentity](#resourceidentity) |  | The resource identity. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the upload operation. |

Back to [Top](#reference-documentation)

## asset_preparation_api/scenetree/scenetree.proto

This file describes the service used to define, edit and manage scene trees.

### SceneTreePreparation

Scene Tree Preparation Service

This service is used to create, edit and manage scene trees.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateSceneTree | [CreateSceneTreeRequest](#createscenetreerequest) | [CreateSceneTreeResponse](#createscenetreeresponse) | Creates a new scene tree with an optional given name.<br><br>Returns the identifier of the created scene tree. |
| GetSceneTree | [GetSceneTreeRequest](#getscenetreerequest) | [GetSceneTreeResponse](#getscenetreeresponse) | Gets the properties of a scene tree, given its identifier. <br><br>Returns the scene tree properties. |
| ListSceneTrees | [.google.protobuf.Empty](#empty) | [ListSceneTreesResponse](#listscenetreesresponse) | Lists all the created scene trees. <br><br>Returns the identifiers and names of the scene trees. |
| UpdateSceneTree | [UpdateSceneTreeRequest](#updatescenetreerequest) | [UpdateSceneTreeResponse](#updatescenetreeresponse) | Edits the properties of a scene tree, given its identifier. |
| DeleteSceneTree | [DeleteSceneTreeRequest](#deletescenetreerequest) | [DeleteSceneTreeResponse](#deletescenetreeresponse) | Deletes a scene tree, given its identifier. |
| CreateNode | [CreateNodeRequest](#createnoderequest) | [CreateNodeResponse](#createnoderesponse) | Creates a node given the parent scene tree or node <br>identifier, with optional node parameters.<br><br>Note: Names must be unique amongst sibling nodes.<br><br>Note: The node is visible by default.<br><br>Returns the identifier of the created node. |
| GetNode | [GetNodeRequest](#getnoderequest) | [GetNodeResponse](#getnoderesponse) | Gets the properties of a node, given its identifier.<br><br>Returns the node properties. |
| UpdateNode | [UpdateNodeRequest](#updatenoderequest) | [UpdateNodeResponse](#updatenoderesponse) | Edits the properties of a node, given its identifier.<br><br>Note: Names must be unique amongst sibling nodes. |
| DeleteNode | [DeleteNodeRequest](#deletenoderequest) | [DeleteNodeResponse](#deletenoderesponse) | Deletes a node, given its identifier. |
| CreateGeometryInstance | [CreateGeometryInstanceRequest](#creategeometryinstancerequest) | [CreateGeometryInstanceResponse](#creategeometryinstanceresponse) | Creates a geometry instance under a node, given the node identifier<br>and geometry instance parameters.<br><br>Note: The geometry instance is visible by default.<br><br>Returns the identifier of the created geometry instance. |
| GetGeometryInstance | [GetGeometryInstanceRequest](#getgeometryinstancerequest) | [GetGeometryInstanceResponse](#getgeometryinstanceresponse) | Gets the properties of a geometry instance, given its identifier.<br><br>Returns the geometry instances properties. |
| UpdateGeometryInstance | [UpdateGeometryInstanceRequest](#updategeometryinstancerequest) | [UpdateGeometryInstanceResponse](#updategeometryinstanceresponse) | Edits the properties of a geometry instance, given its identifier. |
| DeleteGeometryInstance | [DeleteGeometryInstanceRequest](#deletegeometryinstancerequest) | [DeleteGeometryInstanceResponse](#deletegeometryinstanceresponse) | Deletes a geometry instance, given its identifier. |
| CreateDirectionalLightInstance | [CreateDirectionalLightInstanceRequest](#createdirectionallightinstancerequest) | [CreateDirectionalLightInstanceResponse](#createdirectionallightinstanceresponse) | Creates a directional light instance under a node, given the <br>node identifier and directional light instance parameters.<br><br>Note: The directional light instance is visible by default.<br><br>Returns the identifier of the created directional light instance. |
| GetDirectionalLightInstance | [GetDirectionalLightInstanceRequest](#getdirectionallightinstancerequest) | [GetDirectionalLightInstanceResponse](#getdirectionallightinstanceresponse) | Gets the properties of a directional light instance, given its<br>identifier.<br><br>Returns the directional light instance properties. |
| UpdateDirectionalLightInstance | [UpdateDirectionalLightInstanceRequest](#updatedirectionallightinstancerequest) | [UpdateDirectionalLightInstanceResponse](#updatedirectionallightinstanceresponse) | Edits the properties of a directional light instance, given its <br>identifier. |
| DeleteDirectionalLightInstance | [DeleteDirectionalLightInstanceRequest](#deletedirectionallightinstancerequest) | [DeleteDirectionalLightInstanceResponse](#deletedirectionallightinstanceresponse) | Deletes a directional light instance, given its identifier. |
| CreatePointLightInstance | [CreatePointLightInstanceRequest](#createpointlightinstancerequest) | [CreatePointLightInstanceResponse](#createpointlightinstanceresponse) | Creates a point light instance under a node, given the <br>node identifier and point light instance parameters.<br><br>Note: The point light instance is visible by default.<br><br>Returns the identifier of the created point light instance. |
| GetPointLightInstance | [GetPointLightInstanceRequest](#getpointlightinstancerequest) | [GetPointLightInstanceResponse](#getpointlightinstanceresponse) | Gets the properties of a point light instance, given its<br>identifier.<br><br>Returns the point light instance properties. |
| UpdatePointLightInstance | [UpdatePointLightInstanceRequest](#updatepointlightinstancerequest) | [UpdatePointLightInstanceResponse](#updatepointlightinstanceresponse) | Edits the properties of a point light instance, given its <br>identifier. |
| DeletePointLightInstance | [DeletePointLightInstanceRequest](#deletepointlightinstancerequest) | [DeletePointLightInstanceResponse](#deletepointlightinstanceresponse) | Deletes a point light instance, given its identifier. |
| PutSceneTreeFromAssetChunks | [.asset_preparation.v3.common.Chunk](#chunk) stream | [PutSceneTreeFromAssetResponse](#putscenetreefromassetresponse) | Creates a new scene tree on the server by uploading an asset as a given <br>stream of chunks containing the "AVX ConflictPolicy" metadata.<br>All dependencies are uploaded into corresponding services, depending on <br>the given conflict policy.<br><br>Note: It is not possible to upload an asset including an object<br>in which several states have the same name, or including a geometry<br>with several material parts with the same name. |
| PutSceneTreeFromAssetFile | [PutSceneTreeFromAssetFileRequest](#putscenetreefromassetfilerequest) | [PutSceneTreeFromAssetResponse](#putscenetreefromassetresponse) | Creates a new scene tree on the server by uploading a given asset file.<br>All dependencies are uploaded into corresponding services, depending on <br>the given conflict policy.<br><br>Note: It is not possible to upload an asset including an object<br>in which several states have the same name, or including a geometry<br>with several material parts with the same name. |
| GetAssetChunks | [GetAssetChunksRequest](#getassetchunksrequest) | [.asset_preparation.v3.common.Chunk](#chunk) stream | Packages the scene tree as an asset and exports it as a byte stream.<br><br>Note: The last chunk of the stream provides the metadata<br>"AVX Status Error" if an error occurred, "AVX Status Warning" or <br>"AVX Status Info" if the export succeeded. |
| GetAssetFile | [GetAssetFileRequest](#getassetfilerequest) | [GetAssetFileResponse](#getassetfileresponse) | Packages the scene tree as an asset and exports it as a .asset file. |

Back to [Top](#reference-documentation)

## asset_preparation_api/scenetree/scenetree_description.proto

This file describes the messages used to define, edit and manage scene trees.

### CreateDirectionalLightInstanceRequest

The information required to create a directional light instance under a node. 

Note: The directional light instance is visible by default.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the parent node. |
| name | [google.protobuf.StringValue](#stringvalue) |  | The name of the directional light instance.<br> <br>Note: Names must be unique amongst siblings <br>(nodes, geometries and light instances).<br><br>Note: If no name is defined, a default unique name is automatically set. |
| properties | [DirectionalLightInstanceProperties](#directionallightinstanceproperties) |  | The directional light instance properties. |

### CreateDirectionalLightInstanceResponse

The identifier of the created directional light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the parent node. |
| instance_identity | [DirectionalLightInstanceIdentity](#directionallightinstanceidentity) |  | The identifier of the directional light instance.<br><br>Returns null in case of failure. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### CreateGeometryInstanceRequest

The information required to create a geometry instance under a node. 

Note: The geometry instance is visible by default.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the parent node. |
| name | [google.protobuf.StringValue](#stringvalue) |  | The name of the geometry instance.<br><br>Note: Names must be unique amongst siblings <br>(nodes, geometries and light instances).<br> <br>Note: If no name is defined, a default unique name is automatically set. |
| properties | [GeometryInstanceProperties](#geometryinstanceproperties) |  | The geometry instance properties. |

### CreateGeometryInstanceResponse

The identifier of the created geometry instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the parent node. |
| instance_identity | [GeometryInstanceIdentity](#geometryinstanceidentity) |  | The identity of the geometry instance.<br><br>Returns null in case of failure. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### CreateNodeRequest

The information required to create a node under a scene tree or a node.

Note: The node is visible by default.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| scene_tree_identifier | [int32](#int32) |  | The identifier of the parent scene tree. |
| node_identifier | [int32](#int32) |  | The identifier of the parent node. |
| name | [google.protobuf.StringValue](#stringvalue) |  | The node name.<br><br>Note: Names must be unique amongst siblings <br>(nodes, geometries and light instances).<br><br>Note: If no name is defined, a default unique name is automatically set. |
| properties | [NodeProperties](#nodeproperties) |  | The node properties. |

### CreateNodeResponse

The identifier of the created node.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| scene_tree_identifier | [int32](#int32) |  | The identifier of the parent scene tree. |
| node_identifier | [int32](#int32) |  | The identifier of the parent node. |
| identity | [NodeIdentity](#nodeidentity) |  | The identity of the node.<br><br>Returns null in case of failure. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### CreatePointLightInstanceRequest

The information required to create a point light instance under a node. 

Note: The point light instance is visible by default.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the parent node. |
| name | [google.protobuf.StringValue](#stringvalue) |  | The name of the point light instance.<br> <br>Note: Names must be unique amongst siblings <br>(nodes, geometries and light instances).<br><br>Note: If no name is defined, a default unique name is automatically set. |
| properties | [PointLightInstanceProperties](#pointlightinstanceproperties) |  | The point light instance properties. |

### CreatePointLightInstanceResponse

The identifier of the created point light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the parent node. |
| instance_identity | [PointLightInstanceIdentity](#pointlightinstanceidentity) |  | The identity of the point light instance.<br><br>Returns null in case of failure. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### CreateSceneTreeRequest

The information required to create a scene tree.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [google.protobuf.StringValue](#stringvalue) |  | The scene tree name.<br> <br>Note: If no name is defined, a default unique name is automatically set. |

### CreateSceneTreeResponse

The identity of the created scene tree.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identity | [SceneTreeIdentity](#scenetreeidentity) |  | The scene tree identity.<br><br>Returns null in case of failure. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### CustomTemperature

The custom temperature.

Unit: Degree Celsius

Note: Must be in the range [-40,100].

Note: The default value is 0.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [google.protobuf.DoubleValue](#doublevalue) |  | The temperature value. |

### DeleteDirectionalLightInstanceRequest

The information required to delete a directional light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the parent node. |
| instance_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the directional light instance. |

### DeleteDirectionalLightInstanceResponse

The response returned when deleting a directional light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DeleteGeometryInstanceRequest

The information required to delete a geometry instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the parent node. |
| instance_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the geometry instance. |

### DeleteGeometryInstanceResponse

The response returned when deleting a geometry instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DeleteNodeRequest

The information required to delete a node.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| scene_tree_identifier | [int32](#int32) |  | The identifier of the parent scene tree. |
| node_identifier | [int32](#int32) |  | The identifier of the parent node. |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the node. |

### DeleteNodeResponse

The response returned when deleting a node.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DeletePointLightInstanceRequest

The information required to delete a point light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the parent node. |
| instance_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the point light instance. |

### DeletePointLightInstanceResponse

The response returned when deleting a point light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DeleteSceneTreeRequest

The information required to delete a scene tree.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the scene tree to delete. |

### DeleteSceneTreeResponse

The response returned when deleting a scene tree.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DirectionalLightInstanceIdentity

The full identity of a directional light instance, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The directional light instance identifier. |
| name | [string](#string) |  | The directional light instance name. |

### DirectionalLightInstanceProperties

The properties of a directional light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| directional_light_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the referenced directional light.<br><br>Note: Mandatory for creation. Ignored during edition. |
| transform | [Transform](#transform) |  | The directional light instance transformation.<br><br>Note: The scale should not be set for light instances. <br>If defined, it will be ignored. |
| visibility | [google.protobuf.BoolValue](#boolvalue) |  | The directional light instance visibility.<br><br>Note: The directional light instance is visible by default. |

### GeometryInstanceIdentity

The full identity of a geometry instance, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The geometry instance identifier. |
| name | [string](#string) |  | The geometry instance name. |

### GeometryInstanceProperties

The properties of a geometry instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| geometry_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the referenced geometry.<br><br>Note: Mandatory for creation. Ignored during edition. |
| transform | [Transform](#transform) |  | The geometry instance transformation. |
| visibility | [google.protobuf.BoolValue](#boolvalue) |  | The geometry instance visibility.<br><br>Note: The geometry instance is visible by default. |
| thermal_properties | [ThermalProperties](#thermalproperties) |  | The thermal properties of the instance.<br><br>Note: The thermal properties are not set by default. |
| removed_tags | [asset_preparation.v3.common.TagIdentity](#tagidentity) | repeated | Tags to remove from the geometry instance. |
| added_tags | [asset_preparation.v3.common.Tag](#tag) | repeated | Tag(s) to add to the geometry instance.<br><br>Note: If you want to tag a dynamic asset as a custom simulation object,<br> you must add the custom tag first, then add a second asset tag:<br> BASIC_TYPE_VEHICLE, BASIC_TYPE_PEDESTRIAN or BASIC_TYPE_ANIMAL,<br> in this specific order. |

### GetAssetChunksRequest

The information required to export a scene tree as a stream of asset chunks.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the scene tree to export. |

### GetAssetFileRequest

The information required to export a scene tree as an asset file.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the scene tree to export. |
| file_path | [string](#string) |  | The path of the exported file. |
| overwrite | [google.protobuf.BoolValue](#boolvalue) |  | Describes whether the file should be overwritten. |

### GetAssetFileResponse

The response returned when exporting a scene tree as an asset file.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the export operation. |

### GetDirectionalLightInstanceRequest

The information required to examine a directional light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the directional light instance to examine. |

### GetDirectionalLightInstanceResponse

The information about a directional light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identity | [DirectionalLightInstanceIdentity](#directionallightinstanceidentity) |  | The identity of the directional light instance. |
| properties | [DirectionalLightInstanceProperties](#directionallightinstanceproperties) |  | The directional light instance properties. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### GetGeometryInstanceRequest

The information required to examine a geometry instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the geometry instance to examine. |

### GetGeometryInstanceResponse

The information about a geometry instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identity | [GeometryInstanceIdentity](#geometryinstanceidentity) |  | The identity of the geometry instance. |
| properties | [GeometryInstanceProperties](#geometryinstanceproperties) |  | The geometry instance properties. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### GetNodeRequest

The information required to examine a node.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the node to examine. |

### GetNodeResponse

The information about a node.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identity | [NodeIdentity](#nodeidentity) |  | The identity of the node. |
| properties | [NodeProperties](#nodeproperties) |  | The node properties. |
| nodes | [NodeIdentity](#nodeidentity) | repeated | The identities of all the direct child nodes. |
| geometry_instances | [GeometryInstanceIdentity](#geometryinstanceidentity) | repeated | The identities of all the geometries instantiated under<br>the current node. |
| directional_light_instances | [DirectionalLightInstanceIdentity](#directionallightinstanceidentity) | repeated | The identities of all the directional lights instantiated<br>under the current node. |
| point_light_instances | [PointLightInstanceIdentity](#pointlightinstanceidentity) | repeated | The identities of all the point lights instantiated<br>under the current node. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### GetPointLightInstanceRequest

The information required to examine a point light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the point light instance to examine. |

### GetPointLightInstanceResponse

The information about a point light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identity | [PointLightInstanceIdentity](#pointlightinstanceidentity) |  | The identity of the point light instance. |
| properties | [PointLightInstanceProperties](#pointlightinstanceproperties) |  | The point light instance properties. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### GetSceneTreeRequest

The information required to examine a scene tree.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the scene tree to examine. |

### GetSceneTreeResponse

The information about a scene tree.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identity | [SceneTreeIdentity](#scenetreeidentity) |  | The scene tree identity. |
| nodes | [NodeIdentity](#nodeidentity) | repeated | The identities of all the nodes in the scene tree (direct children only). |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### ListSceneTreesResponse

The identities of all scene trees in the collection.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| scene_trees | [SceneTreeIdentity](#scenetreeidentity) | repeated | Scene tree identities. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the listing operation. |

### NodeIdentity

The full identity of a node, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The node identifier. |
| name | [string](#string) |  | The node name. |

### NodeProperties

The properties of a node.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| transform | [Transform](#transform) |  | The node transformation. |
| visibility | [google.protobuf.BoolValue](#boolvalue) |  | The node visibility.<br><br>Note: The node is visible by default. |
| removed_tags | [asset_preparation.v3.common.TagIdentity](#tagidentity) | repeated | Tag(s) to remove from the node. |
| added_tags | [asset_preparation.v3.common.Tag](#tag) | repeated | Tag(s) to add to the node.<br><br>Note: If you want to tag a dynamic asset as a custom simulation object,<br> you must add the custom tag first, then add a second asset tag:<br> BASIC_TYPE_VEHICLE, BASIC_TYPE_PEDESTRIAN or BASIC_TYPE_ANIMAL,<br> in this specific order. |

### PointLightInstanceIdentity

The full identity of a point light instance, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The point light instance identifier. |
| name | [string](#string) |  | The point light instance name. |

### PointLightInstanceProperties

The properties of a point light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| point_light_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the referenced point light.<br><br>Note: Mandatory for creation. Ignored during edition. |
| transform | [Transform](#transform) |  | The point light instance transformation.<br><br>Note: The scale should not be set for light instances. <br>If defined, it will be ignored. |
| visibility | [google.protobuf.BoolValue](#boolvalue) |  | The point light instance visibility.<br><br>Note: The point light instance is visible by default. |
| removed_tags | [asset_preparation.v3.common.TagIdentity](#tagidentity) | repeated | Tags to remove from the point light instance. |
| added_tags | [asset_preparation.v3.common.Tag](#tag) | repeated | Tag(s) to add to the point light instance.<br><br>Note: Only LightingType Tags are allowed. |

### PutSceneTreeFromAssetFileRequest

The information required to create a scene tree from an uploaded asset file.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| file_path | [string](#string) |  | The path of the .asset file to upload. |
| name_conflict_policy | [asset_preparation.v3.common.ConflictPolicy](#conflictpolicy) |  | The policy to follow in case of name conflict with server's objects. |

### PutSceneTreeFromAssetResponse

The response returned when uploading an asset.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The imported scene tree identifier. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the upload operation. |

### SceneTreeIdentity

The full identity of a scene tree, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The scene tree identifier. |
| name | [string](#string) |  | The scene tree name. |

### ThermalProperties

The thermal properties.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| no_custom_temperature | [asset_preparation.v3.common.Empty](#empty) |  | No custom temperature.<br><br>Note: This is the default mode.<br><br>With this mode, if a natural sky is set in the environment, the <br>temperature of the geometry instance will be the Ambient Temperature<br>set in the sky properties. |
| custom_temperature | [CustomTemperature](#customtemperature) |  | The custom temperature. |

### UpdateDirectionalLightInstanceRequest

The information required to edit the properties of a directional light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the parent node. |
| instance_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the directional light instance. |
| name | [google.protobuf.StringValue](#stringvalue) |  | The name of the directional light instance.<br> <br>Note: Names must be unique amongst siblings <br>(nodes, geometries and light instances).<br><br>Note: If no name is defined, the name is not updated. |
| properties | [DirectionalLightInstanceProperties](#directionallightinstanceproperties) |  | The new directional light instance properties.<br><br>Note: All the properties are optional. |

### UpdateDirectionalLightInstanceResponse

The response returned when updating a directional light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### UpdateGeometryInstanceRequest

The information required to update a geometry instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the parent node. |
| instance_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the geometry instance. |
| name | [google.protobuf.StringValue](#stringvalue) |  | The name of the geometry instance.<br><br>Note: Names must be unique amongst siblings <br>(nodes, geometries and light instances).<br><br>Note: If no name is defined, the name is not updated. |
| properties | [GeometryInstanceProperties](#geometryinstanceproperties) |  | The geometry instance properties.<br><br>Note: All the properties are optional. |

### UpdateGeometryInstanceResponse

The response returned when updating a geometry instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### UpdateNodeRequest

The information required to update a node.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| scene_tree_identifier | [int32](#int32) |  | The identifier of the parent scene tree. |
| node_identifier | [int32](#int32) |  | The identifier of the parent node. |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the node. |
| name | [google.protobuf.StringValue](#stringvalue) |  | The node name.<br><br>Note: Names must be unique amongst siblings <br>(nodes, geometries and light instances).<br><br>Note: If no name is defined, the name is not updated. |
| properties | [NodeProperties](#nodeproperties) |  | The node properties.<br><br>Note: All the properties are optional. |

### UpdateNodeResponse

The response returned when updating a node.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### UpdatePointLightInstanceRequest

The information required to update a point light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| node_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the parent node. |
| instance_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the point light instance. |
| name | [google.protobuf.StringValue](#stringvalue) |  | The name of the point light instance.<br> <br>Note: Names must be unique amongst siblings <br>(nodes, geometries and light instances).<br><br>Note: If no name is defined, the name is not updated. |
| properties | [PointLightInstanceProperties](#pointlightinstanceproperties) |  | The new point light instance properties.<br><br>Note: All the properties are optional. |

### UpdatePointLightInstanceResponse

The response returned when updating a point light instance.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### UpdateSceneTreeRequest

The information required to update a scene tree.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the scene tree to update. |
| name | [google.protobuf.StringValue](#stringvalue) |  | The scene tree name.<br> <br>Note: If no name is defined, the name is not updated. |

### UpdateSceneTreeResponse

The response returned when updating a scene tree.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

Back to [Top](#reference-documentation)

## asset_preparation_api/scenetree/transform.proto

This file describes the messages used to transform objects in the scene tree hierarchy.

### EulerAngles

Euler angles.

Unit: Degree

Note: Rotations expressed in Euler Angles are applied following 
the intrinsic sequence: pitch (X), yaw (Y), roll (Z).
When a rotation is set around 2 axes or more, the vertex is rotated 
first around the X axis.
Then, the rotation around the Y axis is applied to the vertex rotated on X.
Finally, the rotation around the Z axis is applied to the vertex rotated 
on X and Y.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [double](#double) |  | Rotation along the X axis. |
| y | [double](#double) |  | Rotation along the Y axis. |
| z | [double](#double) |  | Rotation along the Z axis. |

### Quaternion

A quaternion.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [double](#double) |  | X value of the quaternion. |
| y | [double](#double) |  | Y value of the quaternion. |
| z | [double](#double) |  | Z value of the quaternion. |
| w | [double](#double) |  | W value of the quaternion. |

### Transform

The transformation of an object in the scene tree hierarchy.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x_position | [google.protobuf.DoubleValue](#doublevalue) |  | Position along the X axis.<br><br>Unit: meter (m) |
| y_position | [google.protobuf.DoubleValue](#doublevalue) |  | Position along the Y axis.<br><br>Unit: meter (m) |
| z_position | [google.protobuf.DoubleValue](#doublevalue) |  | Position along the Z axis.<br><br>Unit: meter (m) |
| quaternion | [Quaternion](#quaternion) |  | Rotation expressed as a quaternion. |
| euler_angles | [EulerAngles](#eulerangles) |  | Rotation expressed as Euler angles. |
| x_scale | [google.protobuf.DoubleValue](#doublevalue) |  | Scale along the X axis. |
| y_scale | [google.protobuf.DoubleValue](#doublevalue) |  | Scale along the Y axis. |
| z_scale | [google.protobuf.DoubleValue](#doublevalue) |  | Scale along the Z axis. |
| relativity | [Relativity](#relativity) |  | Relativity. |

### Relativity

Relativity of a transformation.

| Name | Number | Description |
| ---- | ------ | ----------- |
| RELATIVITY_UNSPECIFIED | 0 | The transformation relativity is unspecified. |
| RELATIVITY_RELATIVE | 1 | The transformation is relative to the object's parent. |
| RELATIVITY_ABSOLUTE | 2 | The transformation is in world coordinates. |

Back to [Top](#reference-documentation)

## asset_preparation_api/surfaceSource/surface_source.proto

### SurfaceSourcePreparation

Surface Source Preparation Service

This service is used to create, edit and manage surface sources.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateSurfaceSource | [CreateSurfaceSourceRequest](#createsurfacesourcerequest) | [CreateSurfaceSourceResponse](#createsurfacesourceresponse) | Creates a new surface source with an optional name and properties.<br><br>Note: If unspecified, default values are used.<br><br>Returns the identifier of the created surface source. |
| GetSurfaceSource | [GetSurfaceSourceRequest](#getsurfacesourcerequest) | [GetSurfaceSourceResponse](#getsurfacesourceresponse) | Gets the properties of a surface source, given its identifier. <br><br>Returns the surface source or display source properties. |
| ListSurfaceSources | [.google.protobuf.Empty](#empty) | [ListSurfaceSourcesResponse](#listsurfacesourcesresponse) | Lists all the created surface sources.<br><br>Returns the identifiers and names of the surface sources. |
| UpdateSurfaceSource | [UpdateSurfaceSourceRequest](#updatesurfacesourcerequest) | [UpdateSurfaceSourceResponse](#updatesurfacesourceresponse) | Edits the properties of a surface source, given its identifier.<br><br>Note: Names must be unique amongst surface sources. |
| DeleteSurfaceSource | [DeleteSurfaceSourceRequest](#deletesurfacesourcerequest) | [DeleteSurfaceSourceResponse](#deletesurfacesourceresponse) | Deletes a surface source, given its identifier. |
| CreateSurfaceSourceState | [CreateSurfaceSourceStateRequest](#createsurfacesourcestaterequest) | [CreateSurfaceSourceStateResponse](#createsurfacesourcestateresponse) | Creates a new surface source state with optional properties.<br><br>Note: Names must be unique amongst sibling surface source states.<br><br>Note: "Default" name is reserved.<br><br>Note: If some properties are not specified, default values are used. <br><br>Returns the information about the created surface source state. |
| GetSurfaceSourceState | [GetSurfaceSourceStateRequest](#getsurfacesourcestaterequest) | [GetSurfaceSourceStateResponse](#getsurfacesourcestateresponse) | Gets the properties of a surface source state, <br>given the parent surface source identifier and the state name.<br><br>Returns the surface source state properties. |
| UpdateSurfaceSourceState | [UpdateSurfaceSourceStateRequest](#updatesurfacesourcestaterequest) | [UpdateSurfaceSourceStateResponse](#updatesurfacesourcestateresponse) | Edits the properties of a state, <br>given the parent surface source identifier and the state name.<br><br>Note: Names must be unique amongst sibling surface source states.<br><br>Note: "Default" name is reserved. |
| DeleteSurfaceSourceState | [DeleteSurfaceSourceStateRequest](#deletesurfacesourcestaterequest) | [DeleteSurfaceSourceStateResponse](#deletesurfacesourcestateresponse) | Deletes a surface source state, <br>given the parent surface source identifier and the state name. |

Back to [Top](#reference-documentation)

## asset_preparation_api/surfaceSource/surface_source_description.proto

This file describes the messages used to create, edit and manage surface sources.

### BlackBody

Spectrum based on a black body.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| temperature | [google.protobuf.DoubleValue](#doublevalue) |  | The temperature of the black body.<br><br>Unit: Kelvin (K)<br><br>Note: Must be in the range [0,30000].<br><br>Note: The default value is 5500. |

### CreateSurfaceSourceRequest

The information required to create a surface source.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [google.protobuf.StringValue](#stringvalue) |  | The surface source name.<br><br>Note: Names must be unique amongst surface sources.<br><br>Note: If no name is defined, a default unique name is automatically set. |
| properties | [SourceProperties](#sourceproperties) |  | The source properties. |

### CreateSurfaceSourceResponse

The identity of the created surface source.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identity | [SurfaceSourceIdentity](#surfacesourceidentity) |  | The identity of a surface source.<br><br>Returns null in case of failure. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### CreateSurfaceSourceStateRequest

The information required to create a surface source state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The surface source identifier. |
| state_name | [string](#string) |  | The state name.<br> <br>Note: Names must be unique amongst sibling surface source states.<br><br>Note: "Default" name is reserved. |
| base_state_name | [google.protobuf.StringValue](#stringvalue) |  | The name of an already existing state on which will be based <br>the state to create.<br><br>Note: If not defined, the surface source properties are used. |
| state_properties | [SourceProperties](#sourceproperties) |  | The state properties. |

### CreateSurfaceSourceStateResponse

The response returned when creating a surface source state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The surface source identifier. |
| state_name | [string](#string) |  | The new state name. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the creation operation. |

### DeleteSurfaceSourceRequest

The information required to delete a surface source.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the surface source to delete. |

### DeleteSurfaceSourceResponse

The response returned when deleting a surface source.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DeleteSurfaceSourceStateRequest

The information required to delete a surface source state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The surface source identifier. |
| state_name | [string](#string) |  | The name of the state to delete. |

### DeleteSurfaceSourceStateResponse

The response returned when deleting a surface source state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the delete operation. |

### DisplaySourceProperties

The properties of a display source.

Note: For display sources, the spectrum is only needed if the display source contributes to lighting.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| luminance | [google.protobuf.DoubleValue](#doublevalue) |  | The display source luminance.<br><br>Unit: candela/sq. meter (cd/m<sup>2</sup>)<br><br>Note: Must be positive.<br><br>Note: The default value is 0. |
| angular_precision | [google.protobuf.DoubleValue](#doublevalue) |  | The angular precision.<br><br>Unit: Degree<br><br>Note: Must be in the range [0,57].<br><br>Note: The default value is 0. |
| lambertian | [LambertianDiagram](#lambertiandiagram) |  | Intensity based on a Lambertian angular diagram.<br><br>Note: This is the default type of angular diagram. |
| diagram_library | [LibraryDiagram](#librarydiagram) |  | Intensity based on a library angular diagram. |
| gaussian | [GaussianDiagram](#gaussiandiagram) |  | Intensity based on a gaussian angular diagram. |
| reverse_direction | [google.protobuf.BoolValue](#boolvalue) |  | Whether the direction of the display source is reversed. |
| no_contribution | [asset_preparation.v3.common.Empty](#empty) |  | The display source does not contribute to lighting.<br><br>Note: This is the default value. |
| lighting_contribution | [LightingContribution](#lightingcontribution) |  | The lighting contribution of the display source. |
| spectrum_library | [SpectrumLibrary](#spectrumlibrary) |  | Spectrum based on a spectrum file.<br><br>Note: This is the default spectrum type. |
| black_body | [BlackBody](#blackbody) |  | Spectrum based on a black body. |
| monochromatic | [Monochromatic](#monochromatic) |  | Monochromatic spectrum. |
| color_rgb | [asset_preparation.v3.common.ColorRgb](#colorrgb) |  | Spectrum based on a RGB color. <br><br>Note: Default value is (255,255,255). |
| color_hsv | [asset_preparation.v3.common.ColorHsv](#colorhsv) |  | Spectrum based on an HSV color. <br><br>Note: Default value is (0,0,100). |
| texture_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the display texture (created using the Resource service)<br>referenced in the display source.<br><br>Note: The texture reference can be removed by setting the value '-1'. |
| uv_channel | [google.protobuf.Int32Value](#int32value) |  | The UV channel used to map the texture.<br><br>Note: Must be in the range [1,4].<br><br>Note: The default value is 1. |

### GaussianDiagram

The properties of gaussian angular diagram.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [google.protobuf.DoubleValue](#doublevalue) |  | Value along the X axis.<br><br>Unit: Degree<br><br>Note: Must be in the range [0,180].<br><br>Note: The default value is 45. |
| y | [google.protobuf.DoubleValue](#doublevalue) |  | Value along the Y axis.<br><br>Unit: Degree<br><br>Note: Must be in the range [0,180].<br><br>Note: The default value is 45. |

### GetSurfaceSourceRequest

The information required to examine a surface source.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the surface source to examine. |

### GetSurfaceSourceResponse

The properties of a surface source.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identity | [SurfaceSourceIdentity](#surfacesourceidentity) |  | The identifier of the surface source. |
| properties | [SourceProperties](#sourceproperties) |  | The surface source properties. |
| state_names | [string](#string) | repeated | The names of the surface source states. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the examination operation. |

### GetSurfaceSourceStateRequest

The information required to examine a state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the surface source. |
| state_name | [string](#string) |  | The name of the state to examine. |

### GetSurfaceSourceStateResponse

The information about a surface source state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The identifier of the examined surface source. |
| state_name | [string](#string) |  | The state name. |
| state_properties | [SourceProperties](#sourceproperties) |  | The properties of the examined state. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the reading operation. |

### LambertianDiagram

Lambertian angular diagram.

### LibraryDiagram

The properties of library angular diagram.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| diagram_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the intensity diagram (created using the <br>Resource service) referenced in the surface source.<br><br>Note: The intensity diagram reference can be removed by setting<br>the value '-1'. |
| offset | [Vector3](#vector3) |  | The intensity diagram offset.<br><br>Unit: Degree |

### LightingContribution

Describes how a surface or display source contributes to the scene lighting, including whether the different surfaces composing the geometry must be joint or disjoint.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| joint | [asset_preparation.v3.common.Empty](#empty) |  | With joint surfaces, the surface or display source acts as a <br>single point light for contribution to the scene lighting.<br><br>Note: This is the default value. |
| disjoint_flux_distribution | [DisjointFluxDistributionType](#disjointfluxdistributiontype) |  | With disjoint surfaces, the surface or display source acts as<br>several point lights (as many point lights as there are <br>surfaces in the geometry) for contribution to the scene <br>lighting. |
| orientation_offset | [Vector3](#vector3) |  | The orientation offset.<br><br>Unit: Degree |
| position_offset | [google.protobuf.DoubleValue](#doublevalue) |  | The position offset.<br><br>Unit: Millimeter (mm)<br><br>Note: The default value is 0. |
| rendering | [Rendering](#rendering) |  | The rendering properties. |
| no_shadow | [asset_preparation.v3.common.Empty](#empty) |  | The surface source does not cast shadows.<br><br>Note: This is the default value. |
| static_shadows | [Shadows](#shadows) |  | The surface source produces static shadows. |
| dynamic_shadows | [Shadows](#shadows) |  | The surface source produces dynamic shadows. |

### ListSurfaceSourcesResponse

The identities of all surface sources in the collection.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| surface_sources | [SurfaceSourceIdentity](#surfacesourceidentity) | repeated | Surface source identities. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the listing operation. |

### Monochromatic

Monochromatic spectrum.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| wavelength | [google.protobuf.DoubleValue](#doublevalue) |  | The emission wavelength of the Spectrum.<br><br>Unit: nanometer (nm)<br><br>Note: Must be in the range [360,813].<br><br>Note: The default value is 580. |

### Rendering

The rendering properties.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| range | [google.protobuf.DoubleValue](#doublevalue) |  | The range describing the maximum distance of the light radiation.<br><br>Unit: Meter (m)<br><br>Note: Must be positive.<br><br>Note: The default value is 128. |

### Shadows

The properties of shadows.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| near_clip | [google.protobuf.DoubleValue](#doublevalue) |  | The near clip.<br><br>Unit: Meter (m)<br><br>Note: Must be positive.<br><br>Note: The default value is 0.1. |
| shadows_offset_ratio | [google.protobuf.DoubleValue](#doublevalue) |  | The shadow offset ratio.<br><br>Note: Must be above 0.00001.<br><br>Note: The default value is 0.01. |
| softness | [google.protobuf.DoubleValue](#doublevalue) |  | The softness.<br><br>Note: Must be in the range [0,2].<br><br>Note: The default value is 0. |

### SourceProperties

The source properties.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| surface_source | [SurfaceSourceProperties](#surfacesourceproperties) |  | Surface source.<br><br>Note: This is the default type. |
| display_source | [DisplaySourceProperties](#displaysourceproperties) |  | Display source. |

### SpectrumLibrary

Spectrum based on a spectrum file.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| spectrum_identifier | [google.protobuf.Int32Value](#int32value) |  | The identifier of the spectrum (created using the Resource service) <br>referenced in the surface source.<br><br>Note: The spectrum reference can be removed by setting the value '-1'. |

### SurfaceSourceIdentity

The full identity of a surface source, consisting of an identifier and a name.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [int32](#int32) |  | The surface source identifier. |
| name | [string](#string) |  | The surface source name. |

### SurfaceSourceProperties

The properties of a surface source.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| flux | [google.protobuf.DoubleValue](#doublevalue) |  | The surface source flux.<br><br>Unit: lumen (lm)<br><br>Note: Must be positive.<br><br>Note: The default value is 500. |
| angular_precision | [google.protobuf.DoubleValue](#doublevalue) |  | The angular precision.<br><br>Unit: Degree<br><br>Note: Must be in the range [0,57].<br><br>Note: The default value is 0. |
| lambertian | [LambertianDiagram](#lambertiandiagram) |  | Intensity based on a lambertian angular diagram. |
| diagram_library | [LibraryDiagram](#librarydiagram) |  | Intensity based on a library angular diagram.<br><br>Note: This is the default type of angular diagram. |
| gaussian | [GaussianDiagram](#gaussiandiagram) |  | Intensity based on a gaussian angular diagram. |
| reverse_direction | [google.protobuf.BoolValue](#boolvalue) |  | Whether the direction of the surface source is reversed. |
| no_contribution | [asset_preparation.v3.common.Empty](#empty) |  | The surface source does not contribute to lighting.<br><br>Note: This is the default value. |
| lighting_contribution | [LightingContribution](#lightingcontribution) |  | The lighting contribution of the surface source. |
| spectrum_library | [SpectrumLibrary](#spectrumlibrary) |  | Spectrum based on a spectrum file.<br><br>Note: This is the default spectrum type. |
| black_body | [BlackBody](#blackbody) |  | Spectrum based on a black body. |
| monochromatic | [Monochromatic](#monochromatic) |  | Monochromatic spectrum. |
| color_rgb | [asset_preparation.v3.common.ColorRgb](#colorrgb) |  | Spectrum based on a RGB color. |
| color_hsv | [asset_preparation.v3.common.ColorHsv](#colorhsv) |  | Spectrum based on an HSV color. |

### UpdateSurfaceSourceRequest

The information required to update a surface source.

Note: All the properties are optional so you can modify only one property.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The surface source identifier. |
| name | [google.protobuf.StringValue](#stringvalue) |  | The surface source name.<br><br>Note: Names must be unique amongst surface sources.<br><br>Note: If no name is defined, the name is not updated. |
| properties | [SourceProperties](#sourceproperties) |  | The surface source properties. |

### UpdateSurfaceSourceResponse

The response returned when updating a surface source.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### UpdateSurfaceSourceStateRequest

The information required to update a surface source state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [google.protobuf.Int32Value](#int32value) |  | The surface source identifier. |
| state_name | [string](#string) |  | The current name of the state. |
| state_new_name | [google.protobuf.StringValue](#stringvalue) |  | The new name of the state.<br><br>Note: Names must be unique amongst sibling surface source states.<br><br>Note: "Default" name is reserved. |
| state_properties | [SourceProperties](#sourceproperties) |  | The new state properties. |

### UpdateSurfaceSourceStateResponse

The response returned when updating a surface source state.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| state_name | [string](#string) |  | The state name. |
| status | [asset_preparation.v3.common.Status](#status) |  | The feedback status of the update operation. |

### Vector3

Vector in a 3D referential.

Note: The default value is 0.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [google.protobuf.DoubleValue](#doublevalue) |  | Value along the X axis. |
| y | [google.protobuf.DoubleValue](#doublevalue) |  | Value along the Y axis. |
| z | [google.protobuf.DoubleValue](#doublevalue) |  | Value along the Z axis. |

### DisjointFluxDistributionType

The type of disjoint flux distribution.

| Name | Number | Description |
| ---- | ------ | ----------- |
| DISTRIBUTION_TYPE_UNSPECIFIED | 0 | Unspecified disjoint flux distribution type. |
| DISTRIBUTION_TYPE_PROPORTIONAL | 1 | Flux distributed proportionally to the area of each disjoint<br>surface.<br><br>Note: With this distribution type, the power emitted by one<br>disjoint surface is equal to the power defined in the surface <br> source properties multiplied by the ratio of area of the <br>disjoint surface to the total area. |
| DISTRIBUTION_TYPE_EVEN | 2 | Flux distributed evenly among the disjoint surfaces. <br><br>Note: With this distribution type, each disjoint surface emits<br>the same power. The power of each disjoint surface is equal to <br>the power defined in the surface source properties divided by <br>the number of surfaces. |

## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <div><h4 id="double" /></div><a name="double" /> double |  |  | double | double | float | float64 | double | float | Float |
| <div><h4 id="float" /></div><a name="float" /> float |  |  | float | float | float | float32 | float | float | Float |
| <div><h4 id="int32" /></div><a name="int32" /> int32 |  | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <div><h4 id="int64" /></div><a name="int64" /> int64 |  | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <div><h4 id="uint32" /></div><a name="uint32" /> uint32 |  | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <div><h4 id="uint64" /></div><a name="uint64" /> uint64 |  | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <div><h4 id="sint32" /></div><a name="sint32" /> sint32 |  | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <div><h4 id="sint64" /></div><a name="sint64" /> sint64 |  | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <div><h4 id="fixed32" /></div><a name="fixed32" /> fixed32 |  | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <div><h4 id="fixed64" /></div><a name="fixed64" /> fixed64 |  | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <div><h4 id="sfixed32" /></div><a name="sfixed32" /> sfixed32 |  | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <div><h4 id="sfixed64" /></div><a name="sfixed64" /> sfixed64 |  | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <div><h4 id="bool" /></div><a name="bool" /> bool |  |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <div><h4 id="string" /></div><a name="string" /> string |  | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <div><h4 id="bytes" /></div><a name="bytes" /> bytes |  | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |


