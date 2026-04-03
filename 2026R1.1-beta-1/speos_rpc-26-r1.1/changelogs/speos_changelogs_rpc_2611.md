# Speos RPC Changelog

## Common (common/v1/data.proto)

- Added [arcminutes](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [arcseconds](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [candelas_per_square_centimeter](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [candelas_per_square_foot](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [candelas_per_square_foot_nanometer](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [diopters](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [feet](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [foot_candles_seconds](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [foot_candles_seconds_per_nanometer](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [foot_lamberts](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [foot_lamberts_per_nanometer](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [inches](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [invert_foot](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [invert_inch](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [invert_meter](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [invert_millimeter](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [invert_steradian](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [joules_per_square_centimeter](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [joules_per_square_foot](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [joules_per_square_foot_nanometer](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [kelvin](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [lumens_per_cubic_meter](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [lumens_seconds_per_square_centimeter](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [millidiopters](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [milliradians](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [unit_precision](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [watts_per_cubic_centimeter](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [watts_per_cubic_meter](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [watts_per_square_centimeter](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [watts_per_square_foot_steradian](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [watts_per_square_foot_steradian_nanometer](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)
- Added [watts_per_square_meter_steradian_nanometer](../api-reference.md#unit) as new value of **Unit** enum in **common v1** (common/v1/data.proto)

## Lightbox

- Added [password](../api-reference.md#savefile_request-2) as new field of **SaveFile_Request** object in **scene v2** (scene/v2/scene.proto)
- Added [is_black_boxed](../api-reference.md#savefile_request-2) as new field of **SaveFile_Request** object in **scene v2** (scene/v2/scene.proto)

## Service updates

- [SaveFile](../api-reference.md#savefile_request-2) service in **scene v2** (scene/v2/scene.proto) is now fully supported (previously marked as unsupported)

## Timeline - Animated simulation

- Added [timeline](../api-reference.md#jobinversemcsimulationproperties) as new field of **Job.InverseMCSimulationProperties** object in **job v2** (job/v2/job.proto)
- Added [Job.Timeline](../api-reference.md#jobtimeline) as new object of **Job** object in **job v2** (job/v2/job.proto)
- Added [timeline](../api-reference.md#sourcetemplatesurface) as new field of **SourceTemplate.Surface** object in **source v1** (source/v1/source.proto)
- Added [SourceTemplate.Surface.Timeline](../api-reference.md#sourcetemplatesurfacetimeline) as new object of **SourceTemplate.Surface** object in **source v1** (source/v1/source.proto)
- Added [trajectory_file_uri](../api-reference.md#scenesceneinstance-1) as new field of **Scene.SceneInstance** object in **scene v2** (scene/v2/scene.proto)