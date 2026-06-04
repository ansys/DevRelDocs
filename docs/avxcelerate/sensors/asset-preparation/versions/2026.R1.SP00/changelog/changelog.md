# Changelog

## v3 2026 R1

This section lists the changes introduced in Asset Preparation API version 3 delivered in 2026 R1 compared to version v3 delivered in 2025 R1 and 2025 R2.

### Changes to Resource Preparation Service

Service robustness enhanced when trying to download resources as file using the **DownloadResourceAsFileRequest** method with incorrect inputs (empty `FilePath`, `FilePath` without extension, or wrong type).

#### resource_description.proto

[Non-breaking changes] Return file extension in ResourceIdentity

### Changes to Material Preparation Service

#### material_description.proto

[Non-breaking changes] The `texture_normalization_2` and `texture_normalization_3` fields have been added to the **SurfaceOpticalProperties** message so that the texture normalization can now be set per layer.
The already existing `texture_normalization` field now applies to the first layer only when the new `texture_normalization_2` and `texture_normalization_3` fields are set.

## v3 2025 R2

No change has been made to the Asset Preparation API version 3 delivered in 2025 R2 compared to version v3 delivered in 2025 R1.

## v3 2025 R1

This section lists all the changes introduced in Asset Preparation API version 3 delivered in 2025 R1 compared to version v3 delivered in 2024 R2.

### Changes to Geometry Preparation Service

#### geometry_description.proto

[Behavior-breaking change] The default value for the `ambient_occlusion` property of vertices is now 1 (instead of 0).

### Changes to the Environment Preparation service

#### environment.proto

[Non-breaking changes] New methods have been added to the *Environment Preparation* service to import an environment from:

- a .track file: **PutEnvironmentFromTrackFile**
- a stream of chunks: **PutEnvironmentFromTrackChunks**

[Behavior breaking change] When importing a track including a surface source or point light with a **GaussianDiagram**  angle (x or y) set to a value superior to 180, it will be automatically set to 180.

[Behavior breaking change] When importing a track including a surface source, a directional light or point light with a wavelength for the **Monochromatic** spectrum set to a value inferior to 360 (that is to say out of the validity range [360, 813]), the value will be automatically set to 360.

#### environment_description.proto

[Non-breaking changes] The **PutEnvironmentFromTrackFileRequest** and **PutEnvironmentFromTrackResponse** messages have been added.

### Changes to the Scene Tree Preparation service

#### scenetree.proto

[Non-breaking changes] New methods have been added to the *Scene Tree Preparation* service to import a scene tree from:

- a .asset file: **PutSceneTreeFromTrackFile**
- a stream of chunks: **PutSceneTreeFromTrackChunks**

[Behavior change] Several scene trees can now have the same name.

[Behavior breaking change] When importing an asset including a surface source or point light with a **GaussianDiagram**  angle (x or y) set to a value superior to 180, it will be automatically set to 180.

[Behavior breaking change] When importing an asset including a surface source, a directional light or point light with a wavelength for the **Monochromatic** spectrum set to a value inferior to 360 (that is to say out of the validity range [360, 813]), the value will be automatically set to 360.

#### scenetree_description.proto

The **PutSceneTreeFromTrackFileRequest** and **PutSceneTreeFromTrackResponse** messages have been added.

[Behavior change] Several scene trees can now have the same name.
### Changes to Point Light Preparation service

#### point_light_description.proto

[Behavior breaking change] An upper limit has been added to the Angular Precision field. This value cannot exceed 57 degrees anymore.

[Non-breaking changes] Two new possibilities have been added to the **Spectrum** oneOf: `ColorRgb` and `ColorHsv`.

### Changes to Surface Source Preparation service

#### surface_source_description.proto

[Behavior breaking change] An upper limit has been added to the `Angular Precision` field. This value cannot exceed 57 degrees anymore.

[Non-breaking changes] Two new possibilities have been added to the **Spectrum** oneOf: `ColorRgb` and `ColorHsv`.

### Changes to Directional Light Preparation service

#### directional_light_description.proto

[Non-breaking changes] Two new possibilities have been added to the **Spectrum** oneOf: `ColorRgb` and `ColorHsv`.

### Changes to the common.proto

[Non-breaking changes] The `ConflictPolicy` enumeration has been added.

[Non-breaking changes] Two new messages have been added: **ColorHsv** and **ColorRgb**. Those new messages are used in the `Spectrum` oneOf in *directional_light_description.proto*, *surface_source_description.proto* and *point_light_description.proto*.

### Changes to the tag.proto

[Non-breaking changes] The **BASIC_TYPE_ILLUMINANCE_SENSOR** has been added to the `BasicType` enumeration.

## v3 2024 R2

The changes introduced in Asset Preparation API version 3 delivered in 2024 R2 compared to version v2 delivered in 2024 R1 are listed in the [2024 R2 AVxcelerate Sensors Release Notes](https://ansyshelp.ansys.com/account/secured?returnurl=/Views/Secured/corp/v242/en/vss_releasenotes/vss_releasenotes.html) in the section **Changes** > **Asset Preparation API Changelog** > **AVxcelerate Asset Preparation API v3**.
