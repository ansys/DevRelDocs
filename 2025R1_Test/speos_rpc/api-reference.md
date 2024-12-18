# Reference documentation

<a name="top"></a>

<a name="ansys_api_speos_LTF_v1_LTF-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/LTF/v1/LTF.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="ansys-api-speos-LTF-v1-Filename"></a>

### Filename



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| filename | [string](#string) |  |  |






<a name="ansys-api-speos-LTF-v1-LightTransferData"></a>

### LightTransferData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| object_direction | [Vector3d](#ansys-api-speos-LTF-v1-Vector3d) |  |  |
| start_point | [Point3d](#ansys-api-speos-LTF-v1-Point3d) |  |  |
| emissivity | [double](#double) |  |  |
| focus_distance | [double](#double) |  |  |
| divergence_X | [double](#double) |  |  |
| divergence_Y | [double](#double) |  |  |
| pupil_surface | [LightTransferData.PupilSurface](#ansys-api-speos-LTF-v1-LightTransferData-PupilSurface) |  |  |






<a name="ansys-api-speos-LTF-v1-LightTransferData-PupilSurface"></a>

### LightTransferData.PupilSurface



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| disk | [PupilSurfaceDisk](#ansys-api-speos-LTF-v1-PupilSurfaceDisk) |  |  |
| ellipse | [PupilSurfaceEllipse](#ansys-api-speos-LTF-v1-PupilSurfaceEllipse) |  |  |
| polygon | [PupilSurfacePolygon](#ansys-api-speos-LTF-v1-PupilSurfacePolygon) |  |  |






<a name="ansys-api-speos-LTF-v1-LightTransferDataDistribution"></a>

### LightTransferDataDistribution



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [LightTransferData](#ansys-api-speos-LTF-v1-LightTransferData) | repeated |  |






<a name="ansys-api-speos-LTF-v1-Point2d"></a>

### Point2d



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [double](#double) |  |  |
| y | [double](#double) |  |  |






<a name="ansys-api-speos-LTF-v1-Point3d"></a>

### Point3d



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [double](#double) |  |  |
| y | [double](#double) |  |  |
| z | [double](#double) |  |  |






<a name="ansys-api-speos-LTF-v1-PupilSurfaceDisk"></a>

### PupilSurfaceDisk



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| radius | [double](#double) |  |  |






<a name="ansys-api-speos-LTF-v1-PupilSurfaceEllipse"></a>

### PupilSurfaceEllipse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| alpha | [double](#double) |  |  |
| semi_major_axis | [double](#double) |  |  |
| semi_minor_axis | [double](#double) |  |  |






<a name="ansys-api-speos-LTF-v1-PupilSurfacePolygon"></a>

### PupilSurfacePolygon



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| nb_points | [int32](#int32) |  |  |
| points | [Point2d](#ansys-api-speos-LTF-v1-Point2d) | repeated |  |






<a name="ansys-api-speos-LTF-v1-SpectralLightTransferDataDistribution"></a>

### SpectralLightTransferDataDistribution



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| wavelength_samples | [double](#double) | repeated |  |
| sensor_sampling_type | [SensorSamplingType](#ansys-api-speos-LTF-v1-SensorSamplingType) |  |  |
| sensor_samples_X | [double](#double) | repeated |  |
| sensor_samples_Y | [double](#double) | repeated |  |
| pupil_surface_type | [PupilSurfaceType](#ansys-api-speos-LTF-v1-PupilSurfaceType) |  |  |
| ltf_samples | [LightTransferDataDistribution](#ansys-api-speos-LTF-v1-LightTransferDataDistribution) | repeated |  |






<a name="ansys-api-speos-LTF-v1-Vector3d"></a>

### Vector3d



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [double](#double) |  |  |
| y | [double](#double) |  |  |
| z | [double](#double) |  |  |





 


<a name="ansys-api-speos-LTF-v1-PupilSurfaceType"></a>

### PupilSurfaceType


| Name | Number | Description |
| ---- | ------ | ----------- |
| POINT | 0 |  |
| DISK | 1 |  |
| ELLIPSE | 2 |  |
| POLYGON | 3 |  |



<a name="ansys-api-speos-LTF-v1-SensorSamplingType"></a>

### SensorSamplingType
the sensor sampling type :
symmetric = polar coordinates
asymmetric = cartesian coordinates

| Name | Number | Description |
| ---- | ------ | ----------- |
| SYMMETRIC | 0 |  |
| ASYMMETRIC | 1 |  |


 

 


<a name="ansys-api-speos-LTF-v1-LightTransferFunctionService"></a>

### LightTransferFunctionService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Load | [Filename](#ansys-api-speos-LTF-v1-Filename) | [.google.protobuf.Empty](#google-protobuf-Empty) | Serialization for *.OPTDistortion files |
| Save | [Filename](#ansys-api-speos-LTF-v1-Filename) | [.google.protobuf.Empty](#google-protobuf-Empty) |  |
| Import | [SpectralLightTransferDataDistribution](#ansys-api-speos-LTF-v1-SpectralLightTransferDataDistribution) | [.google.protobuf.Empty](#google-protobuf-Empty) | Import/Export of LightTransferDataDistribution |
| Export | [.google.protobuf.Empty](#google-protobuf-Empty) | [SpectralLightTransferDataDistribution](#ansys-api-speos-LTF-v1-SpectralLightTransferDataDistribution) |  |

 



<a name="ansys_api_speos_bsdf_v1_anisotropic_bsdf-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/bsdf/v1/anisotropic_bsdf.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-AnisotropicBsdfData"></a>

### AnisotropicBsdfData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| description | [string](#string) |  |  |
| anisotropy_vector | [AnisotropicBsdfData.Double3](#ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-AnisotropicBsdfData-Double3) |  |  |
| reflection | [AnisotropicBsdfData.Bsdf](#ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-AnisotropicBsdfData-Bsdf) |  |  |
| transmission | [AnisotropicBsdfData.Bsdf](#ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-AnisotropicBsdfData-Bsdf) |  |  |






<a name="ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-AnisotropicBsdfData-Bsdf"></a>

### AnisotropicBsdfData.Bsdf



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| spectrum_incidence | [double](#double) |  | spectrum information radians in [0, pi/2] |
| spectrum_anisotropy | [double](#double) |  | radians in [0, 2*pi] |
| spectrum | [AnisotropicBsdfData.Bsdf.WavelengthCoefficientPair](#ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-AnisotropicBsdfData-Bsdf-WavelengthCoefficientPair) | repeated |  |
| anisotropic_samples | [AnisotropicBsdfData.Bsdf.AnisotropicSample](#ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-AnisotropicBsdfData-Bsdf-AnisotropicSample) | repeated |  |






<a name="ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-AnisotropicBsdfData-Bsdf-AnisotropicSample"></a>

### AnisotropicBsdfData.Bsdf.AnisotropicSample



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| anisotropic_sample | [double](#double) |  | radians in [0, pi/2] or [0, pi] or [0, 2*pi] |
| incidence_samples | [AnisotropicBsdfData.Bsdf.AnisotropicSample.IncidenceSample](#ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-AnisotropicBsdfData-Bsdf-AnisotropicSample-IncidenceSample) | repeated |  |






<a name="ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-AnisotropicBsdfData-Bsdf-AnisotropicSample-IncidenceSample"></a>

### AnisotropicBsdfData.Bsdf.AnisotropicSample.IncidenceSample



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| incidence_sample | [double](#double) |  | radians in [0, pi/2] |
| theta_samples | [double](#double) | repeated | intensity diagram radians in [0, pi/2] for reflection // radians in [pi/2, pi] for transmission |
| phi_samples | [double](#double) | repeated | radians in [0, 2*pi] |
| bsdf_cos_theta | [double](#double) | repeated | 1/steradians |
| integral | [double](#double) |  | reflection/transmission coefficient |






<a name="ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-AnisotropicBsdfData-Bsdf-WavelengthCoefficientPair"></a>

### AnisotropicBsdfData.Bsdf.WavelengthCoefficientPair



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| wavelength | [double](#double) |  | nanometers |
| coefficient | [double](#double) |  | in [0, 1] interval |






<a name="ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-AnisotropicBsdfData-Double3"></a>

### AnisotropicBsdfData.Double3



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [double](#double) |  | direction cosines: |
| y | [double](#double) |  |  |
| z | [double](#double) |  |  |






<a name="ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-ConoscopicMap"></a>

### ConoscopicMap



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| output_file_name | [string](#string) |  | .xmp |
| wavelength | [double](#double) |  | nanometers |
| anisotropic_angle | [double](#double) |  | radians in [0, 2*pi] |
| side | [ConoscopicMap.BsdfSide](#ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-ConoscopicMap-BsdfSide) |  |  |
| resolution | [int32](#int32) |  |  |






<a name="ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-FileName"></a>

### FileName



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| file_name | [string](#string) |  |  |






<a name="ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-InterpolationEnhancementData"></a>

### InterpolationEnhancementData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| anisotropic_samples | [InterpolationEnhancementData.AnisotropicSample](#ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-InterpolationEnhancementData-AnisotropicSample) | repeated |  |






<a name="ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-InterpolationEnhancementData-AnisotropicSample"></a>

### InterpolationEnhancementData.AnisotropicSample



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| incidence_samples | [InterpolationEnhancementData.AnisotropicSample.ConeData](#ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-InterpolationEnhancementData-AnisotropicSample-ConeData) | repeated |  |






<a name="ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-InterpolationEnhancementData-AnisotropicSample-ConeData"></a>

### InterpolationEnhancementData.AnisotropicSample.ConeData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| cone_half_angle | [double](#double) |  | radians in [0, pi/2] |
| cone_height | [double](#double) |  | value &gt;= 0 |






<a name="ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-RefractiveIndices"></a>

### RefractiveIndices



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| refractive_index_1 | [double](#double) |  |  |
| refractive_index_2 | [double](#double) |  |  |






<a name="ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-SpectrumImport"></a>

### SpectrumImport



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| incidence_angle | [double](#double) |  | radians in [0, pi/2] |
| anisotropy_angle | [double](#double) |  | radians in [0, 2*pi] |
| file_name | [string](#string) |  |  |






<a name="ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-SpecularInterpolationEnhancementData"></a>

### SpecularInterpolationEnhancementData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| reflection | [InterpolationEnhancementData](#ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-InterpolationEnhancementData) |  |  |
| transmission | [InterpolationEnhancementData](#ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-InterpolationEnhancementData) |  |  |
| refractive_index_1 | [double](#double) |  |  |
| refractive_index_2 | [double](#double) |  |  |






<a name="ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-Wavelength"></a>

### Wavelength



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| wavelength | [double](#double) |  | in nanometers |





 


<a name="ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-ConoscopicMap-BsdfSide"></a>

### ConoscopicMap.BsdfSide


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 |  |
| REFLECTION | 1 |  |
| TRANSMISSION | 2 |  |


 

 


<a name="ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-AnisotropicBsdfService"></a>

### AnisotropicBsdfService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Load | [FileName](#ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-FileName) | [.google.protobuf.Empty](#google-protobuf-Empty) | serialization for native *.anisotropicbsdf files |
| Save | [FileName](#ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-FileName) | [.google.protobuf.Empty](#google-protobuf-Empty) |  |
| Import | [AnisotropicBsdfData](#ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-AnisotropicBsdfData) | [.google.protobuf.Empty](#google-protobuf-Empty) | to and from AnisoptropicSpeosBsdf.AnisotropicBsdfData |
| Export | [.google.protobuf.Empty](#google-protobuf-Empty) | [AnisotropicBsdfData](#ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-AnisotropicBsdfData) |  |
| ImportFile | [FileName](#ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-FileName) | [.google.protobuf.Empty](#google-protobuf-Empty) | to and from serialized AnisoptropicSpeosBsdf.AnisotropicBsdfData |
| ExportFile | [FileName](#ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-FileName) | [.google.protobuf.Empty](#google-protobuf-Empty) |  |
| GenerateSpecularInterpolationEnhancementData | [RefractiveIndices](#ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-RefractiveIndices) | [.google.protobuf.Empty](#google-protobuf-Empty) | interpolation enhancement for specular |
| GetSpecularInterpolationEnhancementData | [.google.protobuf.Empty](#google-protobuf-Empty) | [SpecularInterpolationEnhancementData](#ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-SpecularInterpolationEnhancementData) |  |
| SetSpecularInterpolationEnhancementData | [SpecularInterpolationEnhancementData](#ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-SpecularInterpolationEnhancementData) | [.google.protobuf.Empty](#google-protobuf-Empty) |  |
| GenerateRetroReflectionInterpolationEnhancementData | [.google.protobuf.Empty](#google-protobuf-Empty) | [.google.protobuf.Empty](#google-protobuf-Empty) | interpolation enhancement for retro reflection |
| GetRetroReflectionInterpolationEnhancementData | [.google.protobuf.Empty](#google-protobuf-Empty) | [InterpolationEnhancementData](#ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-InterpolationEnhancementData) |  |
| SetRetroReflectionInterpolationEnhancementData | [InterpolationEnhancementData](#ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-InterpolationEnhancementData) | [.google.protobuf.Empty](#google-protobuf-Empty) |  |
| EnableWhiteSpecular | [Wavelength](#ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-Wavelength) | [.google.protobuf.Empty](#google-protobuf-Empty) | white specular |
| DisableWhiteSpecular | [.google.protobuf.Empty](#google-protobuf-Empty) | [.google.protobuf.Empty](#google-protobuf-Empty) |  |
| ImportReflectionSpectrum | [SpectrumImport](#ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-SpectrumImport) | [.google.protobuf.Empty](#google-protobuf-Empty) | spectrum import |
| ImportTransmissionSpectrum | [SpectrumImport](#ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-SpectrumImport) | [.google.protobuf.Empty](#google-protobuf-Empty) |  |
| FreezeAbsorptionReflectionTransmissionCoefficients | [.google.protobuf.Empty](#google-protobuf-Empty) | [.google.protobuf.Empty](#google-protobuf-Empty) | constant absorption |
| ExportToConoscopicMap | [ConoscopicMap](#ansys-api-speos-bsdf-v1-AnisotropicSpeosBsdf-ConoscopicMap) | [.google.protobuf.Empty](#google-protobuf-Empty) | export to conoscopic map |

 



<a name="ansys_api_speos_bsdf_v1_bsdf_creation-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/bsdf/v1/bsdf_creation.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="ansys-api-speos-bsdf-v1-SpeosBsdfCreation-AnisotropicBsdfInputData"></a>

### AnisotropicBsdfInputData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| input_anisotropic_bsdf_samples | [AnisotropicBsdfInputData.Sample](#ansys-api-speos-bsdf-v1-SpeosBsdfCreation-AnisotropicBsdfInputData-Sample) | repeated |  |
| fix_disparity | [bool](#bool) |  |  |
| output_file_name | [string](#string) |  | .anisotropicbsdf |






<a name="ansys-api-speos-bsdf-v1-SpeosBsdfCreation-AnisotropicBsdfInputData-Sample"></a>

### AnisotropicBsdfInputData.Sample



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| anisotropic_angle | [double](#double) |  | radians in [0, 2*pi] |
| file_name | [string](#string) |  | .anisotropicbsdf |






<a name="ansys-api-speos-bsdf-v1-SpeosBsdfCreation-Bsdf180InputData"></a>

### Bsdf180InputData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| input_front_bsdf_file_name | [string](#string) |  | .coated *.brdf *.anisotropicbsdf *.scattering |
| input_opposite_bsdf_file_name | [string](#string) |  | .coated *.brdf *.anisotropicbsdf *.scattering |
| output_file_name | [string](#string) |  | .bsdf180 |






<a name="ansys-api-speos-bsdf-v1-SpeosBsdfCreation-SpectralBsdfInputData"></a>

### SpectralBsdfInputData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| input_anisotropic_samples | [SpectralBsdfInputData.Sample](#ansys-api-speos-bsdf-v1-SpeosBsdfCreation-SpectralBsdfInputData-Sample) | repeated |  |
| output_file_name | [string](#string) |  | .brdf |






<a name="ansys-api-speos-bsdf-v1-SpeosBsdfCreation-SpectralBsdfInputData-Sample"></a>

### SpectralBsdfInputData.Sample



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| wavelength | [double](#double) |  | nanometers |
| file_name | [string](#string) |  | .anisotropicbsdf |





 

 

 


<a name="ansys-api-speos-bsdf-v1-SpeosBsdfCreation-BsdfCreationService"></a>

### BsdfCreationService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| BuildBsdf180 | [Bsdf180InputData](#ansys-api-speos-bsdf-v1-SpeosBsdfCreation-Bsdf180InputData) | [.google.protobuf.Empty](#google-protobuf-Empty) | create a bsdf180 file |
| BuildSpectralBsdf | [SpectralBsdfInputData](#ansys-api-speos-bsdf-v1-SpeosBsdfCreation-SpectralBsdfInputData) | [.google.protobuf.Empty](#google-protobuf-Empty) | create spectral bsdf file |
| BuildAnisotropicBsdf | [AnisotropicBsdfInputData](#ansys-api-speos-bsdf-v1-SpeosBsdfCreation-AnisotropicBsdfInputData) | [.google.protobuf.Empty](#google-protobuf-Empty) | build anisotropic bsdf file |

 



<a name="ansys_api_speos_bsdf_v1_spectral_bsdf-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/bsdf/v1/spectral_bsdf.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-ConoscopicMap"></a>

### ConoscopicMap



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| output_file_name | [string](#string) |  | .xmp |
| wavelength | [double](#double) |  | nanometers |
| side | [ConoscopicMap.BsdfSide](#ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-ConoscopicMap-BsdfSide) |  |  |
| resolution | [int32](#int32) |  |  |






<a name="ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-FileName"></a>

### FileName



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| file_name | [string](#string) |  |  |






<a name="ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-RefractiveIndices"></a>

### RefractiveIndices



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| refractive_index_1 | [double](#double) |  |  |
| refractive_index_2 | [double](#double) |  |  |






<a name="ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-SpectralBsdfData"></a>

### SpectralBsdfData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| description | [string](#string) |  |  |
| incidence_samples | [double](#double) | repeated | radians in [0, pi/2] |
| wavelength_samples | [double](#double) | repeated | nanometers |
| wavelength_incidence_samples | [SpectralBsdfData.WavelengthIncidence](#ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-SpectralBsdfData-WavelengthIncidence) | repeated |  |






<a name="ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-SpectralBsdfData-WavelengthIncidence"></a>

### SpectralBsdfData.WavelengthIncidence



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| reflection | [SpectralBsdfData.WavelengthIncidence.Diagram](#ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-SpectralBsdfData-WavelengthIncidence-Diagram) |  |  |
| transmission | [SpectralBsdfData.WavelengthIncidence.Diagram](#ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-SpectralBsdfData-WavelengthIncidence-Diagram) |  |  |






<a name="ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-SpectralBsdfData-WavelengthIncidence-Diagram"></a>

### SpectralBsdfData.WavelengthIncidence.Diagram



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| theta_samples | [double](#double) | repeated | radians in [0, pi/2] |
| phi_samples | [double](#double) | repeated | radians in [0, 2*pi] |
| bsdf_cos_theta | [double](#double) | repeated | 1/steradians |
| integral | [double](#double) |  | reflection/transmission coefficient in [0, 1] interval |






<a name="ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-SpecularInterpolationEnhancementData"></a>

### SpecularInterpolationEnhancementData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| incidence_nb | [int32](#int32) |  |  |
| wavelength_nb | [int32](#int32) |  |  |
| refractive_index_1 | [double](#double) |  |  |
| refractive_index_2 | [double](#double) |  |  |
| wavelength_incidence_samples | [SpecularInterpolationEnhancementData.WavelengthIncidence](#ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-SpecularInterpolationEnhancementData-WavelengthIncidence) | repeated |  |






<a name="ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-SpecularInterpolationEnhancementData-WavelengthIncidence"></a>

### SpecularInterpolationEnhancementData.WavelengthIncidence



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| reflection | [SpecularInterpolationEnhancementData.WavelengthIncidence.ConeData](#ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-SpecularInterpolationEnhancementData-WavelengthIncidence-ConeData) |  |  |
| transmission | [SpecularInterpolationEnhancementData.WavelengthIncidence.ConeData](#ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-SpecularInterpolationEnhancementData-WavelengthIncidence-ConeData) |  |  |






<a name="ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-SpecularInterpolationEnhancementData-WavelengthIncidence-ConeData"></a>

### SpecularInterpolationEnhancementData.WavelengthIncidence.ConeData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| cone_half_angle | [double](#double) |  | radians in [0, pi/2] |
| cone_height | [double](#double) |  | value &gt;= 0 |





 


<a name="ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-ConoscopicMap-BsdfSide"></a>

### ConoscopicMap.BsdfSide


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNKNOWN | 0 |  |
| REFLECTION | 1 |  |
| TRANSMISSION | 2 |  |


 

 


<a name="ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-SpectralBsdfService"></a>

### SpectralBsdfService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Load | [FileName](#ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-FileName) | [.google.protobuf.Empty](#google-protobuf-Empty) | serialization for native *.brdf files |
| Save | [FileName](#ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-FileName) | [.google.protobuf.Empty](#google-protobuf-Empty) |  |
| Import | [SpectralBsdfData](#ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-SpectralBsdfData) | [.google.protobuf.Empty](#google-protobuf-Empty) | to and from SpectralSpeosBsdf.SpectralBsdfData |
| Export | [.google.protobuf.Empty](#google-protobuf-Empty) | [SpectralBsdfData](#ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-SpectralBsdfData) |  |
| ImportFile | [FileName](#ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-FileName) | [.google.protobuf.Empty](#google-protobuf-Empty) | to and from serialized SpectralSpeosBsdf.SpectralBsdfData |
| ExportFile | [FileName](#ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-FileName) | [.google.protobuf.Empty](#google-protobuf-Empty) |  |
| GenerateSpecularInterpolationEnhancementData | [RefractiveIndices](#ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-RefractiveIndices) | [.google.protobuf.Empty](#google-protobuf-Empty) | interpolation enhancement for specular |
| GetSpecularInterpolationEnhancementData | [.google.protobuf.Empty](#google-protobuf-Empty) | [SpecularInterpolationEnhancementData](#ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-SpecularInterpolationEnhancementData) |  |
| SetSpecularInterpolationEnhancementData | [SpecularInterpolationEnhancementData](#ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-SpecularInterpolationEnhancementData) | [.google.protobuf.Empty](#google-protobuf-Empty) |  |
| ExportToConoscopicMap | [ConoscopicMap](#ansys-api-speos-bsdf-v1-SpectralSpeosBsdf-ConoscopicMap) | [.google.protobuf.Empty](#google-protobuf-Empty) | export to conoscopic map |

 



<a name="ansys_api_speos_common_v1_data-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/common/v1/data.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. ANSYS Confidential Information


<a name="ansys-api-speos-common-v1-DataBytes"></a>

### DataBytes
raw buffer in bytes, to send any kind of data


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| values | [bytes](#bytes) |  | raw values |
| magnitude_size | [uint64](#uint64) |  | number of values needed to describe the magnitude (ex : simple value=1 / vector=3 / color_rgb=3 ...) |
| dimensions | [uint64](#uint64) | repeated | size of dimensions where the magnitudes are applied = total number of dimension representation of the data, each value representing its dimension size |
| magnitude | [Magnitude](#ansys-api-speos-common-v1-Magnitude) |  | magnitude of the value cf what we have received |
| unit | [Unit](#ansys-api-speos-common-v1-Unit) |  | units of the values |






<a name="ansys-api-speos-common-v1-DataDoubles"></a>

### DataDoubles
arrays values of doubles


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| values | [double](#double) | repeated | raw values |
| magnitude_size | [uint64](#uint64) |  | number of values needed to describe the magnitude (ex : simple value=1 / vector=3 / color_rgb=3 ...) |
| dimensions | [uint64](#uint64) | repeated | size of dimensions where the magnitudes are applied = total number of dimension representation of the data, each value representing its dimension size |
| magnitude | [Magnitude](#ansys-api-speos-common-v1-Magnitude) |  | magnitude of the value cf what we have received |
| unit | [Unit](#ansys-api-speos-common-v1-Unit) |  | units of the values |






<a name="ansys-api-speos-common-v1-DataFloats"></a>

### DataFloats
arrays values of floats


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| values | [float](#float) | repeated | raw values |
| magnitude_size | [uint64](#uint64) |  | number of values needed to describe the magnitude (ex : simple value=1 / vector=3 / color_rgb=3 ...) |
| dimensions | [uint64](#uint64) | repeated | size of dimensions where the magnitudes are applied = total number of dimension representation of the data, each value representing its dimension size |
| magnitude | [Magnitude](#ansys-api-speos-common-v1-Magnitude) |  | magnitude of the value cf what we have received |
| unit | [Unit](#ansys-api-speos-common-v1-Unit) |  | units of the values |






<a name="ansys-api-speos-common-v1-DataIntegers32"></a>

### DataIntegers32
arrays values of integers


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| values | [int32](#int32) | repeated | raw values |
| magnitude_size | [uint64](#uint64) |  | number of values needed to describe the magnitude (ex : simple value=1 / vector=3 / color_rgb=3 ...) |
| dimensions | [uint64](#uint64) | repeated | size of dimensions where the magnitudes are applied = total number of dimension representation of the data, each value representing its dimension size |
| magnitude | [Magnitude](#ansys-api-speos-common-v1-Magnitude) |  | magnitude of the value cf what we have received |
| unit | [Unit](#ansys-api-speos-common-v1-Unit) |  | units of the values |






<a name="ansys-api-speos-common-v1-DataIntegers64"></a>

### DataIntegers64
arrays values of integers


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| values | [int64](#int64) | repeated | raw values |
| magnitude_size | [uint64](#uint64) |  | number of values needed to describe the magnitude (ex : simple value=1 / vector=3 / color_rgb=3 ...) |
| dimensions | [uint64](#uint64) | repeated | size of dimensions where the magnitudes are applied = total number of dimension representation of the data, each value representing its dimension size |
| magnitude | [Magnitude](#ansys-api-speos-common-v1-Magnitude) |  | magnitude of the value cf what we have received |
| unit | [Unit](#ansys-api-speos-common-v1-Unit) |  | units of the values |






<a name="ansys-api-speos-common-v1-DataUIntegers32"></a>

### DataUIntegers32
arrays values of integers


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| values | [uint32](#uint32) | repeated | raw values |
| magnitude_size | [uint64](#uint64) |  | number of values needed to describe the magnitude (ex : simple value=1 / vector=3 / color_rgb=3 ...) |
| dimensions | [uint64](#uint64) | repeated | size of dimensions where the magnitudes are applied = total number of dimension representation of the data, each value representing its dimension size |
| magnitude | [Magnitude](#ansys-api-speos-common-v1-Magnitude) |  | magnitude of the value cf what we have received |
| unit | [Unit](#ansys-api-speos-common-v1-Unit) |  | units of the values |






<a name="ansys-api-speos-common-v1-DataUIntegers64"></a>

### DataUIntegers64
arrays values of integers


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| values | [uint64](#uint64) | repeated | raw values |
| magnitude_size | [uint64](#uint64) |  | number of values needed to describe the magnitude (ex : simple value=1 / vector=3 / color_rgb=3 ...) |
| dimensions | [uint64](#uint64) | repeated | size of dimensions where the magnitudes are applied = total number of dimension representation of the data, each value representing its dimension size |
| magnitude | [Magnitude](#ansys-api-speos-common-v1-Magnitude) |  | magnitude of the value cf what we have received |
| unit | [Unit](#ansys-api-speos-common-v1-Unit) |  | units of the values |





 


<a name="ansys-api-speos-common-v1-Magnitude"></a>

### Magnitude
magnitudes in Speos data

| Name | Number | Description |
| ---- | ------ | ----------- |
| irradiance | 0 | radiometric irradiance |
| illuminance | 1 | photometric irradiance |
| spectral_irradiance | 2 | spectral irradiance |
| spectral_illuminance | 3 | spectral photometric irradiance |
| radiance | 4 | radiometric radiance |
| luminance | 5 | photometric radiance |
| spectral_radiance | 6 | spectral radiometric radiance |
| spectral_luminance | 7 | spectral photometric radiance |
| radiant_intensity | 8 | radiometric intensity |
| luminous_intensity | 9 | photometric intensity |
| spectral_radiant_intensity | 10 | spectral radiometric intensity |
| spectral_luminous_intensity | 11 | spectral photometric intensity |
| exposure | 12 | radiometric exposure |
| luminous_exposure | 13 | photometric exposure |
| spectral_exposure | 14 | spectral radiometric exposure |
| spectral_luminous_exposure | 15 | spectral photometric exposure |
| radiant_flux | 16 | radiometric flux |
| luminous_flux | 17 | photometric flux |
| ratio | 27 | magnitude ratio |
| color | 37 | color |



<a name="ansys-api-speos-common-v1-Unit"></a>

### Unit
Units used in Speos data

| Name | Number | Description |
| ---- | ------ | ----------- |
| watts | 0 | W |
| watts_per_square_meters | 1 | W/(m2) |
| watts_per_steradians | 2 | W/(sr) |
| watts_per_nanometers | 3 | W/(nm) |
| watts_per_square_meters_steradians | 4 | W/(m2.sr) |
| watts_per_steradians_nanometers | 5 | W/(sr.nm) |
| watts_per_square_meters_nanometers | 6 | W/(m2.nm) |
| joules | 16 | J |
| joules_per_nanometers | 17 | J/(nm) |
| joules_per_square_meters | 18 | J/(m2) |
| joules_per_square_meters_nanometers | 19 | J/(m2.nm) |
| luxes | 29 | lx |
| luxes_seconds | 30 | lx.s |
| luxes_per_nanometers | 31 | lx.s/(nm) |
| luxes_seconds_per_nanometers | 32 | lx.s/(nm) |
| candelas | 42 | cd |
| candelas_per_square_meters | 43 | cd/(m2) |
| candelas_per_nanometers | 44 | cd/(m2) |
| candelas_per_squaremeters_nanometers | 45 | cd/(m2.nm) |
| lumens | 55 | lm |
| lumens_seconds | 56 | lm.s |
| lumens_per_nanometers | 57 | lm/(nm) |
| lumens_per_square_meters_nanometers | 49 | lm/(m2.nm) |
| percent | 60 | % |
| color_XYZ | 70 | XYZ CIE |
| color_xyY | 71 | xy CIE |
| color_uvY | 72 | uvY 1960 UCS CIE |
| color_uvY_prime | 73 | u&#39;v&#39;Y&#39; 1976 UCS CIE |
| color_Luv | 74 | L*u*v CIELUV |
| color_Lab | 75 | L*a*b CIELAB |
| color_LCh | 76 | L*C*h CIELAB |
| color_rgb | 77 | rgb |
| color_rgba | 79 | rgba |
| nanometers | 120 | nm |
| micrometers | 121 | um |
| millimeters | 122 | mm |
| meters | 123 | m |
| radians | 124 | rad |
| degrees | 125 | deg |
| steradians | 126 | sr |


 

 

 



<a name="ansys_api_speos_file_v1_file_transfer-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/file/v1/file_transfer.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="ansys-api-speos-file-v1-AddDependencies_Request"></a>

### AddDependencies_Request



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| uri | [string](#string) |  | uri of the FileSystemItem to be completed with dependencies |
| dependency_uris | [string](#string) | repeated | FileSystemItem uris to be added as dependencies |






<a name="ansys-api-speos-file-v1-AddDependencies_Response"></a>

### AddDependencies_Response







<a name="ansys-api-speos-file-v1-Chunk"></a>

### Chunk



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| binary | [bytes](#bytes) |  |  |
| size | [int64](#int64) |  |  |






<a name="ansys-api-speos-file-v1-Delete_Request"></a>

### Delete_Request



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| uri | [string](#string) |  | uri of the FileSystemItem to be deleted |






<a name="ansys-api-speos-file-v1-Delete_Response"></a>

### Delete_Response







<a name="ansys-api-speos-file-v1-Download_Request"></a>

### Download_Request



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| uri | [string](#string) |  | uri of the FileSystemItem to be downloaded |






<a name="ansys-api-speos-file-v1-Download_Response"></a>

### Download_Response
Used in File Transfer helpers


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| info | [FileSystemItemInformation](#ansys-api-speos-file-v1-FileSystemItemInformation) |  | Information about the FileSystemItem downloaded |
| download_duration | [google.protobuf.Duration](#google-protobuf-Duration) |  |  |






<a name="ansys-api-speos-file-v1-FileSystemItemInformation"></a>

### FileSystemItemInformation



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| uri | [string](#string) |  | FileSystemItem uri |
| file_name | [string](#string) |  |  |
| file_size | [uint64](#uint64) |  |  |






<a name="ansys-api-speos-file-v1-ListDependencies_Request"></a>

### ListDependencies_Request



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| uri | [string](#string) |  | uri of the FileSystemItem |






<a name="ansys-api-speos-file-v1-ListDependencies_Response"></a>

### ListDependencies_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| dependency_infos | [FileSystemItemInformation](#ansys-api-speos-file-v1-FileSystemItemInformation) | repeated | Information about the FileSystemItems noticed as dependencies |






<a name="ansys-api-speos-file-v1-Reserve_Request"></a>

### Reserve_Request







<a name="ansys-api-speos-file-v1-Reserve_Response"></a>

### Reserve_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| uri | [string](#string) |  | uri of the FileSystemItem reserved |






<a name="ansys-api-speos-file-v1-Upload_Response"></a>

### Upload_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| info | [FileSystemItemInformation](#ansys-api-speos-file-v1-FileSystemItemInformation) |  | Information about the FileSystemItem created |
| upload_duration | [google.protobuf.Duration](#google-protobuf-Duration) |  |  |





 

 

 


<a name="ansys-api-speos-file-v1-FileTransferService"></a>

### FileTransferService


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Reserve | [Reserve_Request](#ansys-api-speos-file-v1-Reserve_Request) | [Reserve_Response](#ansys-api-speos-file-v1-Reserve_Response) | Reserve a FileSystemItem |
| Upload | [Chunk](#ansys-api-speos-file-v1-Chunk) stream | [Upload_Response](#ansys-api-speos-file-v1-Upload_Response) | Upload a file Mandatory Client&#39;s Metadata: key: &#34;file-name&#34; - value: file name key: &#34;file-size&#34; - value: size of the file in bytes |
| Download | [Download_Request](#ansys-api-speos-file-v1-Download_Request) | [Chunk](#ansys-api-speos-file-v1-Chunk) stream | Download a FileSystemItem Server&#39;s&#39; Initial Metadata: key: &#34;file-name&#34; - value: file name key: &#34;file-size&#34; - value: size of the file in bytes |
| Delete | [Delete_Request](#ansys-api-speos-file-v1-Delete_Request) | [Delete_Response](#ansys-api-speos-file-v1-Delete_Response) | Delete a FileSystemItem |
| AddDependencies | [AddDependencies_Request](#ansys-api-speos-file-v1-AddDependencies_Request) | [AddDependencies_Response](#ansys-api-speos-file-v1-AddDependencies_Response) | Add dependencies to a FileSystemItem |
| ListDependencies | [ListDependencies_Request](#ansys-api-speos-file-v1-ListDependencies_Request) | [ListDependencies_Response](#ansys-api-speos-file-v1-ListDependencies_Response) | List all dependencies of a FileSystemItem |

 



<a name="ansys_api_speos_intensity_v1_intensity-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/intensity/v1/intensity.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. ANSYS Confidential Information


<a name="ansys-api-speos-intensity-v1-Create_Request"></a>

### Create_Request
Request to create a Intensity in IntensityTemplatesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| intensity_template | [IntensityTemplate](#ansys-api-speos-intensity-v1-IntensityTemplate) |  | Intensity containing its basic characteristics |






<a name="ansys-api-speos-intensity-v1-Create_Response"></a>

### Create_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Intensity created in IntensityTemplatesManager |






<a name="ansys-api-speos-intensity-v1-Delete_Request"></a>

### Delete_Request
Request to delete a Intensity in IntensityTemplatesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Intensity to be deleted |






<a name="ansys-api-speos-intensity-v1-Delete_Response"></a>

### Delete_Response







<a name="ansys-api-speos-intensity-v1-GetLibraryTypeInfo_Request"></a>

### GetLibraryTypeInfo_Request
Request of GetLibraryTypeInfo


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the IntensityTemplate to get information about intensity file (example: flux). Only for IntensityTemplate of type Library. |






<a name="ansys-api-speos-intensity-v1-GetLibraryTypeInfo_Response"></a>

### GetLibraryTypeInfo_Response
Response of GetLibraryTypeInfo


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| flux | [ansys.api.speos.common.v1.DataDoubles](#ansys-api-speos-common-v1-DataDoubles) |  | Flux of the intensity file |






<a name="ansys-api-speos-intensity-v1-IntensityTemplate"></a>

### IntensityTemplate
Intensity with its basic characteristics


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Intensity name |
| description | [string](#string) |  | Intensity descrition |
| metadata | [IntensityTemplate.MetadataEntry](#ansys-api-speos-intensity-v1-IntensityTemplate-MetadataEntry) | repeated | User defined metadatas |
| library | [IntensityTemplate.Library](#ansys-api-speos-intensity-v1-IntensityTemplate-Library) |  | From file |
| lambertian | [IntensityTemplate.Lambertian](#ansys-api-speos-intensity-v1-IntensityTemplate-Lambertian) |  | Lambertian distribution |
| cos | [IntensityTemplate.Cos](#ansys-api-speos-intensity-v1-IntensityTemplate-Cos) |  | Lambert cosine law distribution |
| symmetric_gaussian | [IntensityTemplate.SymmetricGaussian](#ansys-api-speos-intensity-v1-IntensityTemplate-SymmetricGaussian) |  | Deprecated (use gaussian instead) - Symmetric gaussian distribution |
| asymmetric_gaussian | [IntensityTemplate.AsymmetricGaussian](#ansys-api-speos-intensity-v1-IntensityTemplate-AsymmetricGaussian) |  | Deprecated (use gaussian instead) - Asymmetric gaussian distribution |
| gaussian | [IntensityTemplate.Gaussian](#ansys-api-speos-intensity-v1-IntensityTemplate-Gaussian) |  | Gaussian distribution |






<a name="ansys-api-speos-intensity-v1-IntensityTemplate-AsymmetricGaussian"></a>

### IntensityTemplate.AsymmetricGaussian



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| FWHM_angle_x | [double](#double) |  | Full Width in degrees following x at Half Maximum |
| FWHM_angle_y | [double](#double) |  | Full Width in degrees following y at Half Maximum |
| total_angle | [double](#double) |  | total angle in degrees of the emission of the light source |






<a name="ansys-api-speos-intensity-v1-IntensityTemplate-Cos"></a>

### IntensityTemplate.Cos



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| N | [double](#double) |  | Order of cos law |
| total_angle | [double](#double) |  | total angle in degrees of the emission of the light source |






<a name="ansys-api-speos-intensity-v1-IntensityTemplate-Gaussian"></a>

### IntensityTemplate.Gaussian



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| FWHM_angle_x | [double](#double) |  | Full Width in degrees following x at Half Maximum |
| FWHM_angle_y | [double](#double) |  | Full Width in degrees following y at Half Maximum |
| total_angle | [double](#double) |  | total angle in degrees of the emission of the light source |






<a name="ansys-api-speos-intensity-v1-IntensityTemplate-Lambertian"></a>

### IntensityTemplate.Lambertian



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| total_angle | [double](#double) |  | total angle in degrees of the emission of the light source |






<a name="ansys-api-speos-intensity-v1-IntensityTemplate-Library"></a>

### IntensityTemplate.Library



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| intensity_file_uri | [string](#string) |  | uri of the intensity file IES (.ies), Eulumdat (.ldt), speos intensities (.xmp) |






<a name="ansys-api-speos-intensity-v1-IntensityTemplate-MetadataEntry"></a>

### IntensityTemplate.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="ansys-api-speos-intensity-v1-IntensityTemplate-SymmetricGaussian"></a>

### IntensityTemplate.SymmetricGaussian



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| FWHM_angle | [double](#double) |  | Full Width in degrees at Half Maximum |
| total_angle | [double](#double) |  | total angle in degrees of the emission of the light source |






<a name="ansys-api-speos-intensity-v1-List_Request"></a>

### List_Request







<a name="ansys-api-speos-intensity-v1-List_Response"></a>

### List_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guids | [string](#string) | repeated | Guids of the Intensitys in IntensityTemplatesManager |






<a name="ansys-api-speos-intensity-v1-Read_Request"></a>

### Read_Request
Request to read a Intensity in IntensityTemplatesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Intensity to be read |






<a name="ansys-api-speos-intensity-v1-Read_Response"></a>

### Read_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| intensity_template | [IntensityTemplate](#ansys-api-speos-intensity-v1-IntensityTemplate) |  | Intensity corresponding to the guid given in Read_Request |






<a name="ansys-api-speos-intensity-v1-Update_Request"></a>

### Update_Request
Request to update a Intensity in IntensityTemplatesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Intensity to be updated |
| intensity_template | [IntensityTemplate](#ansys-api-speos-intensity-v1-IntensityTemplate) |  | Intensity that will be used for the update |






<a name="ansys-api-speos-intensity-v1-Update_Response"></a>

### Update_Response






 

 

 


<a name="ansys-api-speos-intensity-v1-IntensityTemplateActions"></a>

### IntensityTemplateActions
Actions available on a IntensityTemplate

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetLibraryTypeInfo | [GetLibraryTypeInfo_Request](#ansys-api-speos-intensity-v1-GetLibraryTypeInfo_Request) | [GetLibraryTypeInfo_Response](#ansys-api-speos-intensity-v1-GetLibraryTypeInfo_Response) | Get information about intensity library template |


<a name="ansys-api-speos-intensity-v1-IntensityTemplatesManager"></a>

### IntensityTemplatesManager


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Create | [Create_Request](#ansys-api-speos-intensity-v1-Create_Request) | [Create_Response](#ansys-api-speos-intensity-v1-Create_Response) | Create a Intensity |
| Read | [Read_Request](#ansys-api-speos-intensity-v1-Read_Request) | [Read_Response](#ansys-api-speos-intensity-v1-Read_Response) | Read a Intensity |
| Update | [Update_Request](#ansys-api-speos-intensity-v1-Update_Request) | [Update_Response](#ansys-api-speos-intensity-v1-Update_Response) | Update a Intensity |
| Delete | [Delete_Request](#ansys-api-speos-intensity-v1-Delete_Request) | [Delete_Response](#ansys-api-speos-intensity-v1-Delete_Response) | Delete a Intensity |
| List | [List_Request](#ansys-api-speos-intensity-v1-List_Request) | [List_Response](#ansys-api-speos-intensity-v1-List_Response) | List all Intensities in manager |

 



<a name="ansys_api_speos_intensity_distributions_v1_base_map_template-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/intensity_distributions/v1/base_map_template.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="ansys-api-speos-intensity_distributions-v1-xmp-LayerData"></a>

### LayerData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| layer_name | [string](#string) |  |  |
| initial_source_power | [double](#double) |  |  |
| initial_source_power_watt | [double](#double) |  |  |
| initial_source_power_lumen | [double](#double) |  |  |
| wavelength | [double](#double) | repeated |  |
| value | [double](#double) | repeated |  |






<a name="ansys-api-speos-intensity_distributions-v1-xmp-Map"></a>

### Map



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x_nb | [int32](#int32) |  | number of x samples |
| y_nb | [int32](#int32) |  | number of y samples |
| layer_nb | [int32](#int32) |  | number of layers |
| x_min | [double](#double) |  |  |
| x_max | [double](#double) |  |  |
| y_min | [double](#double) |  |  |
| y_max | [double](#double) |  |  |
| precision | [double](#double) |  |  |
| value_type | [ValueTypes](#ansys-api-speos-intensity_distributions-v1-xmp-ValueTypes) |  |  |
| intensity_type | [IntensityTypes](#ansys-api-speos-intensity_distributions-v1-xmp-IntensityTypes) |  |  |
| unit_type | [UnitTypes](#ansys-api-speos-intensity_distributions-v1-xmp-UnitTypes) |  |  |
| colorimetric_standard | [CIEStandard](#ansys-api-speos-intensity_distributions-v1-xmp-CIEStandard) |  |  |
| coordinate_unit | [CoordinateUnits](#ansys-api-speos-intensity_distributions-v1-xmp-CoordinateUnits) |  |  |
| map_type | [MapTypes](#ansys-api-speos-intensity_distributions-v1-xmp-MapTypes) |  |  |
| layer_type | [LayerTypes](#ansys-api-speos-intensity_distributions-v1-xmp-LayerTypes) |  |  |
| layer | [LayerData](#ansys-api-speos-intensity_distributions-v1-xmp-LayerData) | repeated |  |
| is_finite_distance | [bool](#bool) |  |  |
| finite_difference_sensor_radius | [double](#double) |  |  |
| detector_extent | [bool](#bool) |  |  |
| rad_angular_resolution_radius | [double](#double) |  |  |





 


<a name="ansys-api-speos-intensity_distributions-v1-xmp-CIEStandard"></a>

### CIEStandard


| Name | Number | Description |
| ---- | ------ | ----------- |
| CIE_STANDARD_UNKNOWN | 0 |  |
| CIE_STANDARD_1931 | 1 |  |
| CIE_STANDARD_1964 | 2 |  |



<a name="ansys-api-speos-intensity_distributions-v1-xmp-CoordinateUnits"></a>

### CoordinateUnits


| Name | Number | Description |
| ---- | ------ | ----------- |
| OptisUnitDefault | 0 |  |
| OptisUnitMillimetre | 1 |  |
| OptisUnitDegree | 2 |  |
| OptisUnitRadian | 3 |  |
| OptisUnitFeet | 4 |  |
| OptisUnitMicrometre | 5 |  |
| OptisUnitNanometre | 6 |  |
| OptisUnitMetre | 7 |  |
| OptisUnitPercent | 8 |  |
| OptisUnitdB | 9 |  |
| OptisUnitInvertMillimetre | 10 |  |
| OptisUnitNoUnit | 11 |  |
| OptisUnitWave | 12 |  |



<a name="ansys-api-speos-intensity_distributions-v1-xmp-IntensityTypes"></a>

### IntensityTypes


| Name | Number | Description |
| ---- | ------ | ----------- |
| OptisIntensityOptis | 0 |  |
| OptisIntensitySAETypeA | 1 |  |
| OptisIntensitySAETypeB | 2 |  |
| OptisIntensityConoscopic | 3 |  |



<a name="ansys-api-speos-intensity_distributions-v1-xmp-LayerTypes"></a>

### LayerTypes


| Name | Number | Description |
| ---- | ------ | ----------- |
| OptisMapLayerTypeNone | 0 |  |
| OptisMapLayerTypeSource | 1 |  |
| OptisMapLayerTypeSurface | 2 |  |
| OptisMapLayerTypeError | 3 |  |
| OptisMapLayerTypeSequence | 4 |  |
| OptisMapLayerTypePolarization | 5 |  |
| OptisMapLayerTypeIncidenceAngle | 6 |  |



<a name="ansys-api-speos-intensity_distributions-v1-xmp-MapTypes"></a>

### MapTypes


| Name | Number | Description |
| ---- | ------ | ----------- |
| OptisMapTypeBasic | 0 |  |
| OptisMapTypeLaser | 1 |  |
| OptisMapTypeSpectral | 2 |  |
| OptisMapTypeExtended | 3 |  |
| OptisMapTypeUnknown | 4 |  |
| OptisMapTypeGainMatrix | 5 |  |
| OptisMapTypeRays | 6 |  |
| OptisMapTypeFTM | 7 |  |
| OptisMapTypeOptisVR | 8 |  |
| OptisMapType3D | 9 |  |



<a name="ansys-api-speos-intensity_distributions-v1-xmp-UnitTypes"></a>

### UnitTypes


| Name | Number | Description |
| ---- | ------ | ----------- |
| OptisUnitTypeRadiometric | 0 |  |
| OptisUnitTypePhotometric | 1 |  |
| OptisUnitTypeTemperature | 2 |  |
| OptisUnitTypeUnknown | 3 |  |
| OptisUnitTypeFTM | 4 |  |
| OptisUnitTypeDegree | 5 |  |
| OptisUnitTypeInverseMeter | 6 |  |
| OptisUnitTypeInverseSquareMeter | 7 |  |
| OptisUnitTypePercent | 8 |  |
| OptisUnitTypeDiopter | 9 |  |
| OptisUnitTypeMeter | 10 |  |
| OptisUnitTypeInverseSteradian | 11 |  |



<a name="ansys-api-speos-intensity_distributions-v1-xmp-ValueTypes"></a>

### ValueTypes


| Name | Number | Description |
| ---- | ------ | ----------- |
| OptisValueTypeIrradiance | 0 |  |
| OptisValueTypeIntensity | 1 |  |
| OptisValueTypeRadiance | 2 |  |
| OptisValueTypeVisual | 3 |  |
| OptisValueTypeSel | 4 |  |
| OptisValueTypeLaserPhase | 5 |  |
| OptisValueTypeLaserPhasePlane | 6 |  |
| OptisValueTypeDirectionalIrradiance | 7 |  |
| OptisValueTypeGain | 8 |  |
| OptisValueTypeWaveFront | 9 |  |
| OptisValueTypeFTM | 10 |  |
| OptisValueTypeRP | 11 |  |
| OptisValueTypePowerDensity | 12 |  |
| OptisValueTypePopulation | 13 |  |
| OptisValueTypeTemperature | 14 |  |
| OptisValueTypeAngle | 15 |  |
| OptisValueTypeCurvature | 16 |  |
| OptisValueTypeCurvatureProduct | 17 |  |
| OptisValueTypePercentage | 18 |  |
| OptisValueTypeUnknown | 19 |  |
| OptisValueTypeRefractivePower | 20 |  |
| OptisValueTypeFlyThrough | 21 |  |
| OptisValueTypeColorimetricError | 22 |  |
| OptisValueTypeConoscopicRadiance | 23 |  |
| OptisValueTypeSNR | 24 |  |
| OptisValueTypeSNRIntensity | 25 |  |
| OptisValueTypeSNRDirectionalIrradiance | 26 |  |
| OptisValueTypePrecision | 27 |  |
| OptisValueTypePrecisionIntensity | 28 |  |
| OptisValueTypePrecisionDirectionalIrradiance | 29 |  |
| OptisValueTypeDistance | 30 |  |
| OptisValueTypeEyeSensorRadiance | 31 |  |
| OptisValueTypeSphericalProbabilityDensity | 32 |  |
| OptisValueTypeRSE | 33 |  |
| OptisValueTypeRSEIntensity | 34 |  |
| OptisValueTypeExposure | 35 |  |


 

 

 



<a name="ansys_api_speos_intensity_distributions_v1_eulumdat-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/intensity_distributions/v1/eulumdat.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="ansys-api-speos-intensity_distributions-v1-eulumdat-EulumdatFileInformation"></a>

### EulumdatFileInformation



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| company_identification | [string](#string) |  |  |
| measurement_report_number | [string](#string) |  |  |
| luminaire_name | [string](#string) |  |  |
| luminaire_number | [string](#string) |  |  |
| file_name | [string](#string) |  |  |
| date | [string](#string) |  |  |






<a name="ansys-api-speos-intensity_distributions-v1-eulumdat-EulumdatIntensityData"></a>

### EulumdatIntensityData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| number_lamps | [int32](#int32) |  |  |
| type_lamps | [string](#string) |  |  |
| total_luminous_flux | [double](#double) |  |  |
| color_temperature | [string](#string) |  |  |
| color_rendering_index | [string](#string) |  |  |
| wattage_including_ballast | [double](#double) |  |  |






<a name="ansys-api-speos-intensity_distributions-v1-eulumdat-EulumdatIntensityDistribution"></a>

### EulumdatIntensityDistribution



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| description | [string](#string) |  |  |
| file_info | [EulumdatFileInformation](#ansys-api-speos-intensity_distributions-v1-eulumdat-EulumdatFileInformation) |  |  |
| type_indicator | [int32](#int32) |  |  |
| symmetry_indicator | [int32](#int32) |  |  |
| c_plane_number | [int32](#int32) |  |  |
| distance_c_planes | [double](#double) |  |  |
| g_angle_number | [int32](#int32) |  |  |
| distance_g_angle | [double](#double) |  |  |
| diameter_luminaire | [double](#double) |  |  |
| width_luminaire | [double](#double) |  |  |
| height_luminaire | [double](#double) |  |  |
| diameter_luminous_area | [double](#double) |  |  |
| width_luminous_area | [double](#double) |  |  |
| height_luminous_area_c0 | [double](#double) |  |  |
| height_luminous_area_c90 | [double](#double) |  |  |
| height_luminous_area_c180 | [double](#double) |  |  |
| height_luminous_area_c270 | [double](#double) |  |  |
| downward_flux_fraction | [double](#double) |  |  |
| light_ouput_ratio | [double](#double) |  |  |
| conversion_factor | [double](#double) |  |  |
| measurement_tilt | [double](#double) |  |  |
| number_standard_set_lamps | [int32](#int32) |  |  |
| lamp_distribution | [EulumdatIntensityData](#ansys-api-speos-intensity_distributions-v1-eulumdat-EulumdatIntensityData) | repeated |  |
| direct_ratio | [double](#double) | repeated |  |
| c_plane | [double](#double) | repeated |  |
| g_angle | [double](#double) | repeated |  |
| luminous_intensity_per_klm | [double](#double) | repeated |  |






<a name="ansys-api-speos-intensity_distributions-v1-eulumdat-Export_Request"></a>

### Export_Request







<a name="ansys-api-speos-intensity_distributions-v1-eulumdat-Import_Response"></a>

### Import_Response







<a name="ansys-api-speos-intensity_distributions-v1-eulumdat-Load_Request"></a>

### Load_Request



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| file_uri | [string](#string) |  |  |






<a name="ansys-api-speos-intensity_distributions-v1-eulumdat-Load_Response"></a>

### Load_Response







<a name="ansys-api-speos-intensity_distributions-v1-eulumdat-Save_Request"></a>

### Save_Request



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| file_uri | [string](#string) |  |  |






<a name="ansys-api-speos-intensity_distributions-v1-eulumdat-Save_Response"></a>

### Save_Response






 

 

 


<a name="ansys-api-speos-intensity_distributions-v1-eulumdat-EulumdatIntensityService"></a>

### EulumdatIntensityService
service to manage eulumdat file

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Load | [Load_Request](#ansys-api-speos-intensity_distributions-v1-eulumdat-Load_Request) | [Load_Response](#ansys-api-speos-intensity_distributions-v1-eulumdat-Load_Response) | Load CEulumdat from filename |
| Save | [Save_Request](#ansys-api-speos-intensity_distributions-v1-eulumdat-Save_Request) | [Save_Response](#ansys-api-speos-intensity_distributions-v1-eulumdat-Save_Response) | Save CEulumdat to filename |
| Import | [EulumdatIntensityDistribution](#ansys-api-speos-intensity_distributions-v1-eulumdat-EulumdatIntensityDistribution) | [Import_Response](#ansys-api-speos-intensity_distributions-v1-eulumdat-Import_Response) | import EulumdatIntensityDistribution to CEulumdat |
| Export | [Export_Request](#ansys-api-speos-intensity_distributions-v1-eulumdat-Export_Request) | [EulumdatIntensityDistribution](#ansys-api-speos-intensity_distributions-v1-eulumdat-EulumdatIntensityDistribution) | export CEulumdat to EulumdatIntensityDistribution |

 



<a name="ansys_api_speos_intensity_distributions_v1_extended_map_template-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/intensity_distributions/v1/extended_map_template.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="ansys-api-speos-intensity_distributions-v1-xmp-ExtendedMap"></a>

### ExtendedMap



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| base_data | [Map](#ansys-api-speos-intensity_distributions-v1-xmp-Map) |  |  |
| value | [Values](#ansys-api-speos-intensity_distributions-v1-xmp-Values) |  |  |






<a name="ansys-api-speos-intensity_distributions-v1-xmp-Values"></a>

### Values



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| layer | [Values.Layers](#ansys-api-speos-intensity_distributions-v1-xmp-Values-Layers) | repeated | map layers |






<a name="ansys-api-speos-intensity_distributions-v1-xmp-Values-Layers"></a>

### Values.Layers



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| y | [Values.Layers.ys](#ansys-api-speos-intensity_distributions-v1-xmp-Values-Layers-ys) | repeated | y samples of the map |






<a name="ansys-api-speos-intensity_distributions-v1-xmp-Values-Layers-ys"></a>

### Values.Layers.ys



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [double](#double) | repeated | x samples of the map |





 

 

 

 



<a name="ansys_api_speos_intensity_distributions_v1_ies-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/intensity_distributions/v1/ies.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="ansys-api-speos-intensity_distributions-v1-ies-Export_Request"></a>

### Export_Request







<a name="ansys-api-speos-intensity_distributions-v1-ies-IesIntensityDistribution"></a>

### IesIntensityDistribution



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| norme_version | [int32](#int32) |  |  |
| key_words | [string](#string) | repeated |  |
| unit | [int32](#int32) |  |  |
| nb_vertical_angle | [int32](#int32) |  |  |
| nb_horizontal_angle | [int32](#int32) |  |  |
| tilt_type | [int32](#int32) |  |  |
| tilt_geometry | [int32](#int32) |  |  |
| nb_lamp | [int32](#int32) |  |  |
| photo_type | [int32](#int32) |  |  |
| lumen_lamp | [double](#double) |  |  |
| multiplier | [double](#double) |  |  |
| width | [double](#double) |  |  |
| length | [double](#double) |  |  |
| height | [double](#double) |  |  |
| ballast | [double](#double) |  |  |
| future_use | [double](#double) |  |  |
| input_watt | [double](#double) |  |  |
| vertical_angle | [double](#double) | repeated |  |
| horizontal_angle | [double](#double) | repeated |  |
| candela_value | [double](#double) | repeated |  |
| tilt_angle | [double](#double) | repeated |  |
| tilt_mult_factor | [double](#double) | repeated |  |
| local_vert | [double](#double) |  |  |
| tilt_nb_pair_angle | [int32](#int32) |  |  |






<a name="ansys-api-speos-intensity_distributions-v1-ies-Import_Response"></a>

### Import_Response







<a name="ansys-api-speos-intensity_distributions-v1-ies-Load_Request"></a>

### Load_Request



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| file_uri | [string](#string) |  |  |






<a name="ansys-api-speos-intensity_distributions-v1-ies-Load_Response"></a>

### Load_Response







<a name="ansys-api-speos-intensity_distributions-v1-ies-Save_Request"></a>

### Save_Request



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| file_uri | [string](#string) |  |  |






<a name="ansys-api-speos-intensity_distributions-v1-ies-Save_Response"></a>

### Save_Response






 

 

 


<a name="ansys-api-speos-intensity_distributions-v1-ies-IesIntensityService"></a>

### IesIntensityService
service to manage IES files

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Load | [Load_Request](#ansys-api-speos-intensity_distributions-v1-ies-Load_Request) | [Load_Response](#ansys-api-speos-intensity_distributions-v1-ies-Load_Response) | serialization for native files |
| Save | [Save_Request](#ansys-api-speos-intensity_distributions-v1-ies-Save_Request) | [Save_Response](#ansys-api-speos-intensity_distributions-v1-ies-Save_Response) |  |
| Import | [IesIntensityDistribution](#ansys-api-speos-intensity_distributions-v1-ies-IesIntensityDistribution) | [Import_Response](#ansys-api-speos-intensity_distributions-v1-ies-Import_Response) | import export of IesIntensityDistribution to CIES |
| Export | [Export_Request](#ansys-api-speos-intensity_distributions-v1-ies-Export_Request) | [IesIntensityDistribution](#ansys-api-speos-intensity_distributions-v1-ies-IesIntensityDistribution) |  |

 



<a name="ansys_api_speos_intensity_distributions_v1_spectral_map_template-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/intensity_distributions/v1/spectral_map_template.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="ansys-api-speos-intensity_distributions-v1-xmp-ColorValues"></a>

### ColorValues



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| layer | [ColorValues.Layers](#ansys-api-speos-intensity_distributions-v1-xmp-ColorValues-Layers) | repeated | map layer |






<a name="ansys-api-speos-intensity_distributions-v1-xmp-ColorValues-Layers"></a>

### ColorValues.Layers



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| y | [ColorValues.Layers.ys](#ansys-api-speos-intensity_distributions-v1-xmp-ColorValues-Layers-ys) | repeated | y samples of the map |






<a name="ansys-api-speos-intensity_distributions-v1-xmp-ColorValues-Layers-ys"></a>

### ColorValues.Layers.ys



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [ColorValues.Layers.ys.xs](#ansys-api-speos-intensity_distributions-v1-xmp-ColorValues-Layers-ys-xs) | repeated | x samples of the map |






<a name="ansys-api-speos-intensity_distributions-v1-xmp-ColorValues-Layers-ys-xs"></a>

### ColorValues.Layers.ys.xs



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| color_x | [float](#float) |  |  |
| color_y | [float](#float) |  |  |
| color_z | [float](#float) |  |  |
| radio | [float](#float) |  |  |






<a name="ansys-api-speos-intensity_distributions-v1-xmp-Depth"></a>

### Depth



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| y | [Depth.ys](#ansys-api-speos-intensity_distributions-v1-xmp-Depth-ys) | repeated | y samples of the map |






<a name="ansys-api-speos-intensity_distributions-v1-xmp-Depth-ys"></a>

### Depth.ys



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [float](#float) | repeated | x samples of the map |






<a name="ansys-api-speos-intensity_distributions-v1-xmp-SpectralMap"></a>

### SpectralMap



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| base_data | [Map](#ansys-api-speos-intensity_distributions-v1-xmp-Map) |  |  |
| wavelength_nb | [int32](#int32) |  |  |
| wavelength_min | [double](#double) |  |  |
| wavelength_max | [double](#double) |  |  |
| spectral_value | [SpectralValues](#ansys-api-speos-intensity_distributions-v1-xmp-SpectralValues) |  | spectral values |
| color_value | [ColorValues](#ansys-api-speos-intensity_distributions-v1-xmp-ColorValues) |  | colorimetric and radiometric data |
| depth_value | [Depth](#ansys-api-speos-intensity_distributions-v1-xmp-Depth) |  |  |
| spectral_data_loaded | [bool](#bool) |  | spectral data is not always loaded unless explicitly specified |
| depth_data_loaded | [bool](#bool) |  | depth data not always filled out |






<a name="ansys-api-speos-intensity_distributions-v1-xmp-SpectralValues"></a>

### SpectralValues



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| layer | [SpectralValues.Layers](#ansys-api-speos-intensity_distributions-v1-xmp-SpectralValues-Layers) | repeated | map layer |






<a name="ansys-api-speos-intensity_distributions-v1-xmp-SpectralValues-Layers"></a>

### SpectralValues.Layers



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| wavelength | [SpectralValues.Layers.Wavelengths](#ansys-api-speos-intensity_distributions-v1-xmp-SpectralValues-Layers-Wavelengths) | repeated | wavelength |






<a name="ansys-api-speos-intensity_distributions-v1-xmp-SpectralValues-Layers-Wavelengths"></a>

### SpectralValues.Layers.Wavelengths



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| y | [SpectralValues.Layers.Wavelengths.ys](#ansys-api-speos-intensity_distributions-v1-xmp-SpectralValues-Layers-Wavelengths-ys) | repeated | y samples of the map |






<a name="ansys-api-speos-intensity_distributions-v1-xmp-SpectralValues-Layers-Wavelengths-ys"></a>

### SpectralValues.Layers.Wavelengths.ys



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [float](#float) | repeated | x samples of the map |





 

 

 

 



<a name="ansys_api_speos_intensity_distributions_v1_xmp-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/intensity_distributions/v1/xmp.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="ansys-api-speos-intensity_distributions-v1-xmp-Export_Request"></a>

### Export_Request







<a name="ansys-api-speos-intensity_distributions-v1-xmp-Import_Response"></a>

### Import_Response







<a name="ansys-api-speos-intensity_distributions-v1-xmp-Load_Request"></a>

### Load_Request



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| file_uri | [string](#string) |  |  |






<a name="ansys-api-speos-intensity_distributions-v1-xmp-Load_Response"></a>

### Load_Response







<a name="ansys-api-speos-intensity_distributions-v1-xmp-Save_Request"></a>

### Save_Request



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| file_uri | [string](#string) |  |  |






<a name="ansys-api-speos-intensity_distributions-v1-xmp-Save_Response"></a>

### Save_Response







<a name="ansys-api-speos-intensity_distributions-v1-xmp-XmpDistribution"></a>

### XmpDistribution
xmp map definition


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| extended_map | [ExtendedMap](#ansys-api-speos-intensity_distributions-v1-xmp-ExtendedMap) |  |  |
| spectral_map | [SpectralMap](#ansys-api-speos-intensity_distributions-v1-xmp-SpectralMap) |  |  |





 

 

 


<a name="ansys-api-speos-intensity_distributions-v1-xmp-XmpIntensityService"></a>

### XmpIntensityService
service to manage XMP files

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Load | [Load_Request](#ansys-api-speos-intensity_distributions-v1-xmp-Load_Request) | [Load_Response](#ansys-api-speos-intensity_distributions-v1-xmp-Load_Response) | Load XMP intensity distributions from file |
| Save | [Save_Request](#ansys-api-speos-intensity_distributions-v1-xmp-Save_Request) | [Save_Response](#ansys-api-speos-intensity_distributions-v1-xmp-Save_Response) | Save XMP intensity distributions to file |
| Import | [XmpDistribution](#ansys-api-speos-intensity_distributions-v1-xmp-XmpDistribution) | [Import_Response](#ansys-api-speos-intensity_distributions-v1-xmp-Import_Response) | import XmpDistribution to COptisMap |
| Export | [Export_Request](#ansys-api-speos-intensity_distributions-v1-xmp-Export_Request) | [XmpDistribution](#ansys-api-speos-intensity_distributions-v1-xmp-XmpDistribution) | export COPtisMap to XmpDistribution |

 



<a name="ansys_api_speos_job_v2_job-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/job/v2/job.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. ANSYS Confidential Information


<a name="ansys-api-speos-job-v2-Create_Request"></a>

### Create_Request
Request to create a Job in JobsManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| job | [Job](#ansys-api-speos-job-v2-Job) |  | Job characteristics |






<a name="ansys-api-speos-job-v2-Create_Response"></a>

### Create_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Job created in JobsManager |






<a name="ansys-api-speos-job-v2-Delete_Request"></a>

### Delete_Request
Request to delete a Job in JobsManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Job to be deleted |






<a name="ansys-api-speos-job-v2-Delete_Response"></a>

### Delete_Response







<a name="ansys-api-speos-job-v2-GetError_Request"></a>

### GetError_Request



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Job in JobsManager. |






<a name="ansys-api-speos-job-v2-GetError_Response"></a>

### GetError_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| category | [string](#string) |  |  |
| severity | [int32](#int32) |  |  |
| request | [string](#string) |  |  |
| diagnostic | [string](#string) |  |  |
| advice | [string](#string) |  |  |
| error_file | [string](#string) |  |  |
| error_line | [int32](#int32) |  |  |






<a name="ansys-api-speos-job-v2-GetInformation_Request"></a>

### GetInformation_Request



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Job in JobsManager. |






<a name="ansys-api-speos-job-v2-GetInformation_Response"></a>

### GetInformation_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  |  |
| name | [string](#string) |  |  |
| infos | [string](#string) |  |  |
| progress | [double](#double) |  | value between 0.0 and 1.0 |
| elapsed_time | [google.protobuf.Duration](#google-protobuf-Duration) |  |  |
| remaining_time | [google.protobuf.Duration](#google-protobuf-Duration) |  |  |
| process_unit_models | [string](#string) | repeated | Depending on the Job::Type, list of the CPU or GPU models |
| rays_number | [uint64](#uint64) |  | Number of rays emitted since the (re)start of the simulation |
| rays_number_per_second | [uint64](#uint64) |  | Number of rays emitted in the last second |






<a name="ansys-api-speos-job-v2-GetProgressStatus_Request"></a>

### GetProgressStatus_Request



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Job in JobsManager. |






<a name="ansys-api-speos-job-v2-GetProgressStatus_Response"></a>

### GetProgressStatus_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| title | [string](#string) |  |  |
| name | [string](#string) |  |  |
| infos | [string](#string) |  |  |
| progress | [double](#double) |  | value between 0.0 and 1.0 |
| elapsed_time | [google.protobuf.Duration](#google-protobuf-Duration) |  |  |
| remaining_time | [google.protobuf.Duration](#google-protobuf-Duration) |  |  |
| process_unit_models | [string](#string) | repeated | Depending on the Job::Type, list of the CPU or GPU models |
| rays_number | [uint64](#uint64) |  | Number of rays emitted since the (re)start of the simulation |
| rays_number_per_second | [uint64](#uint64) |  | Number of rays emitted in the last second |






<a name="ansys-api-speos-job-v2-GetRayPaths_Request"></a>

### GetRayPaths_Request



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Job in JobsManager. |
| raw_data | [bool](#bool) | optional | Boolean to get the wavelengths in response stream |
| display_data | [bool](#bool) | optional | Boolean to get the colors (RGB24 format) in response stream |






<a name="ansys-api-speos-job-v2-GetResults_Request"></a>

### GetResults_Request



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Job in JobsManager. |






<a name="ansys-api-speos-job-v2-GetResults_Response"></a>

### GetResults_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| results | [Result](#ansys-api-speos-job-v2-Result) | repeated | list of the Job results |






<a name="ansys-api-speos-job-v2-GetState_Request"></a>

### GetState_Request



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Job in JobsManager. |






<a name="ansys-api-speos-job-v2-GetState_Response"></a>

### GetState_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| state | [Job.State](#ansys-api-speos-job-v2-Job-State) |  |  |






<a name="ansys-api-speos-job-v2-Job"></a>

### Job



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Job name |
| description | [string](#string) |  | Job descrition |
| metadata | [Job.MetadataEntry](#ansys-api-speos-job-v2-Job-MetadataEntry) | repeated | User defined metadatas |
| scene_guid | [string](#string) |  | Guid of the Scene in ScenesManager |
| simulation_path | [string](#string) |  | simulation path in the scene that will be used by the job |
| job_type | [Job.Type](#ansys-api-speos-job-v2-Job-Type) |  | Type of the job : CPU, GPU, ... |
| direct_mc_simulation_properties | [Job.DirectMCSimulationProperties](#ansys-api-speos-job-v2-Job-DirectMCSimulationProperties) |  | Properties to be filled for simulation based on DirectMCSimulationTemplate |
| inverse_mc_simulation_properties | [Job.InverseMCSimulationProperties](#ansys-api-speos-job-v2-Job-InverseMCSimulationProperties) |  | Properties to be filled for simulation based on InverseMCSimulationTemplate |
| interactive_simulation_properties | [Job.InteractiveSimulationProperties](#ansys-api-speos-job-v2-Job-InteractiveSimulationProperties) |  | Properties to be filled for simulation based on Interactive |






<a name="ansys-api-speos-job-v2-Job-DirectMCSimulationProperties"></a>

### Job.DirectMCSimulationProperties
If several stop conditions are set, the first condition reached ends the simulation.
If no stop condition is set, the simulation ends when you stop the process.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| stop_condition_rays_number | [int64](#int64) | optional | To stop the simulation after a certain number of rays were sent |
| stop_condition_duration | [int64](#int64) | optional | To stop the simulation after a certain duration |
| automatic_save_frequency | [int32](#int32) |  | Define a backup interval (s). This option is useful when computing long simulations. But a reduced number of save operations naturally increases the simulation performance |






<a name="ansys-api-speos-job-v2-Job-InteractiveSimulationProperties"></a>

### Job.InteractiveSimulationProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| rays_number_per_sources | [Job.InteractiveSimulationProperties.RaysNumberPerSource](#ansys-api-speos-job-v2-Job-InteractiveSimulationProperties-RaysNumberPerSource) | repeated | If a source present in Scene::SimulationInstance is not mentionned here, its rays_nb is defaulted to 100. |
| light_expert | [bool](#bool) |  | To generate a light expert file. |
| impact_report | [bool](#bool) |  | To integrate details like number of impacts, position and surface state to the HTML simulation report. |






<a name="ansys-api-speos-job-v2-Job-InteractiveSimulationProperties-RaysNumberPerSource"></a>

### Job.InteractiveSimulationProperties.RaysNumberPerSource



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| source_path | [string](#string) |  | path to the source. Hint: same path that was given in Scene::SimulationInstance |
| rays_nb | [uint32](#uint32) | optional | Number of rays sent by the source referenced via its source_path. Default 100 |






<a name="ansys-api-speos-job-v2-Job-InverseMCSimulationProperties"></a>

### Job.InverseMCSimulationProperties
If several stop conditions are set, the first condition reached ends the simulation.
If no stop condition is set, the simulation ends when you stop the process.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| optimized_propagation_none | [Job.InverseMCSimulationProperties.OptimizedPropagationNone](#ansys-api-speos-job-v2-Job-InverseMCSimulationProperties-OptimizedPropagationNone) |  | No optimization. Don&#39;t forget to fill stop conditions if needed. |
| optimized_propagation_relative | [Job.InverseMCSimulationProperties.OptimizedPropagationRelative](#ansys-api-speos-job-v2-Job-InverseMCSimulationProperties-OptimizedPropagationRelative) |  |  |
| optimized_propagation_absolute | [Job.InverseMCSimulationProperties.OptimizedPropagationAbsolute](#ansys-api-speos-job-v2-Job-InverseMCSimulationProperties-OptimizedPropagationAbsolute) |  |  |
| stop_condition_duration | [int64](#int64) | optional | To stop the simulation after a certain duration |
| automatic_save_frequency | [int32](#int32) |  | Define a backup interval (s). This option is useful when computing long simulations. But a reduced number of save operations naturally increases the simulation performance |






<a name="ansys-api-speos-job-v2-Job-InverseMCSimulationProperties-OptimizedPropagationAbsolute"></a>

### Job.InverseMCSimulationProperties.OptimizedPropagationAbsolute
The algorithm adapts the number of passes per pixel to send the optimal number of rays according to the signal each pixel needs.
As a result, the SNR is adequate in areas where pixels need more rays thus giving a balanced image.
The Optimized propagation algorithm is only compatible with the Radiance sensors.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| min_pass_number | [uint32](#uint32) |  | Minimum number of passes without pass optimization. |
| stop_condition_absolute_value | [uint32](#uint32) |  | Absolute photometric value of pixel standard deviation threshold |






<a name="ansys-api-speos-job-v2-Job-InverseMCSimulationProperties-OptimizedPropagationNone"></a>

### Job.InverseMCSimulationProperties.OptimizedPropagationNone
No optimization : the same number of passes is used for each pixel of the image


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| stop_condition_passes_number | [uint32](#uint32) | optional | To stop the simulation after a certain number of passes |






<a name="ansys-api-speos-job-v2-Job-InverseMCSimulationProperties-OptimizedPropagationRelative"></a>

### Job.InverseMCSimulationProperties.OptimizedPropagationRelative
The algorithm adapts the number of passes per pixel to send the optimal number of rays according to the signal each pixel needs.
As a result, the SNR is adequate in areas where pixels need more rays thus giving a balanced image.
The Optimized propagation algorithm is only compatible with the Radiance sensors.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| min_pass_number | [uint32](#uint32) |  | Minimum number of passes without pass optimization. |
| stop_condition_relative_value | [uint32](#uint32) |  | Relative pixel standard deviation threshold, in percent. Value expected from 0 to 100. |






<a name="ansys-api-speos-job-v2-Job-MetadataEntry"></a>

### Job.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="ansys-api-speos-job-v2-List_Request"></a>

### List_Request







<a name="ansys-api-speos-job-v2-List_Response"></a>

### List_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guids | [string](#string) | repeated | Guids of the Jobs in JobsManager |






<a name="ansys-api-speos-job-v2-Read_Request"></a>

### Read_Request
Request to read a Job in JobsManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Job to be read |






<a name="ansys-api-speos-job-v2-Read_Response"></a>

### Read_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| job | [Job](#ansys-api-speos-job-v2-Job) |  | Job corresponding to the guid given in Read_Request |






<a name="ansys-api-speos-job-v2-Result"></a>

### Result



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| path | [string](#string) |  | result path on the server |
| upload_response | [ansys.api.speos.file.v1.Upload_Response](#ansys-api-speos-file-v1-Upload_Response) |  | result uploaded to server&#39;s file system (via FileTransferService) -&gt; returns Upload_Response |






<a name="ansys-api-speos-job-v2-Start_Request"></a>

### Start_Request



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Job in JobsManager. |






<a name="ansys-api-speos-job-v2-Start_Response"></a>

### Start_Response







<a name="ansys-api-speos-job-v2-Stop_Request"></a>

### Stop_Request



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Job in JobsManager. |






<a name="ansys-api-speos-job-v2-Stop_Response"></a>

### Stop_Response







<a name="ansys-api-speos-job-v2-Update_Request"></a>

### Update_Request
Request to update a Job in JobsManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Job to be updated |
| job | [Job](#ansys-api-speos-job-v2-Job) |  | Job that will be used for the update |






<a name="ansys-api-speos-job-v2-Update_Response"></a>

### Update_Response






 


<a name="ansys-api-speos-job-v2-Job-State"></a>

### Job.State


| Name | Number | Description |
| ---- | ------ | ----------- |
| QUEUED | 0 |  |
| RUNNING | 1 |  |
| PAUSED | 2 |  |
| STOPPED | 3 |  |
| FINISHED | 4 |  |
| IN_ERROR | 5 |  |



<a name="ansys-api-speos-job-v2-Job-Type"></a>

### Job.Type


| Name | Number | Description |
| ---- | ------ | ----------- |
| CPU | 0 |  |
| GPU | 1 |  |


 

 


<a name="ansys-api-speos-job-v2-JobActions"></a>

### JobActions
Service to handle a job

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetState | [GetState_Request](#ansys-api-speos-job-v2-GetState_Request) | [GetState_Response](#ansys-api-speos-job-v2-GetState_Response) | Get the state of a Job |
| Start | [Start_Request](#ansys-api-speos-job-v2-Start_Request) | [Start_Response](#ansys-api-speos-job-v2-Start_Response) | Start a Job |
| Stop | [Stop_Request](#ansys-api-speos-job-v2-Stop_Request) | [Stop_Response](#ansys-api-speos-job-v2-Stop_Response) | Stop a Job |
| GetError | [GetError_Request](#ansys-api-speos-job-v2-GetError_Request) | [GetError_Response](#ansys-api-speos-job-v2-GetError_Response) | Get error of a Job |
| GetResults | [GetResults_Request](#ansys-api-speos-job-v2-GetResults_Request) | [GetResults_Response](#ansys-api-speos-job-v2-GetResults_Response) | Get the results of a Job |
| GetInformation | [GetInformation_Request](#ansys-api-speos-job-v2-GetInformation_Request) | [GetInformation_Response](#ansys-api-speos-job-v2-GetInformation_Response) | Get Information about a Job |
| GetRayPaths | [GetRayPaths_Request](#ansys-api-speos-job-v2-GetRayPaths_Request) | [.ansys.api.speos.results.v1.RayPath](#ansys-api-speos-results-v1-RayPath) stream | Get RayPaths generated by a Job based on an interactive simulation |
| GetProgressStatus | [GetProgressStatus_Request](#ansys-api-speos-job-v2-GetProgressStatus_Request) | [GetProgressStatus_Response](#ansys-api-speos-job-v2-GetProgressStatus_Response) | Get progress status about a Job |


<a name="ansys-api-speos-job-v2-JobsManager"></a>

### JobsManager


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Create | [Create_Request](#ansys-api-speos-job-v2-Create_Request) | [Create_Response](#ansys-api-speos-job-v2-Create_Response) | Create a Job |
| Read | [Read_Request](#ansys-api-speos-job-v2-Read_Request) | [Read_Response](#ansys-api-speos-job-v2-Read_Response) | Read a Job |
| Update | [Update_Request](#ansys-api-speos-job-v2-Update_Request) | [Update_Response](#ansys-api-speos-job-v2-Update_Response) | Update a Job |
| Delete | [Delete_Request](#ansys-api-speos-job-v2-Delete_Request) | [Delete_Response](#ansys-api-speos-job-v2-Delete_Response) | Delete a Job |
| List | [List_Request](#ansys-api-speos-job-v2-List_Request) | [List_Response](#ansys-api-speos-job-v2-List_Response) | List all Jobs in manager |

 



<a name="ansys_api_speos_lpf_v2_lpf_file_reader-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/lpf/v2/lpf_file_reader.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="ansys-api-speos-lpf-v2-CloseLpfFileName_Request_Mono"></a>

### CloseLpfFileName_Request_Mono







<a name="ansys-api-speos-lpf-v2-CloseLpfFileName_Request_Multi"></a>

### CloseLpfFileName_Request_Multi



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| lpf_reader_guid | [string](#string) |  |  |






<a name="ansys-api-speos-lpf-v2-CloseLpfFileName_Response"></a>

### CloseLpfFileName_Response







<a name="ansys-api-speos-lpf-v2-ComputeUniqueFaceId_Request_Mono"></a>

### ComputeUniqueFaceId_Request_Mono



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| body_context_id | [uint32](#uint32) |  |  |
| face_id | [uint32](#uint32) |  |  |






<a name="ansys-api-speos-lpf-v2-ComputeUniqueFaceId_Request_Multi"></a>

### ComputeUniqueFaceId_Request_Multi



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| lpf_reader_guid | [string](#string) |  |  |
| body_context_id | [uint32](#uint32) |  |  |
| face_id | [uint32](#uint32) |  |  |






<a name="ansys-api-speos-lpf-v2-ComputeUniqueFaceId_Response"></a>

### ComputeUniqueFaceId_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| unique_face_id | [uint32](#uint32) |  |  |






<a name="ansys-api-speos-lpf-v2-Create_Request_Multi"></a>

### Create_Request_Multi







<a name="ansys-api-speos-lpf-v2-Create_Response"></a>

### Create_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| lpf_reader_guid | [string](#string) |  |  |






<a name="ansys-api-speos-lpf-v2-Delete_Request_Multi"></a>

### Delete_Request_Multi



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| lpf_reader_guid | [string](#string) |  |  |






<a name="ansys-api-speos-lpf-v2-Delete_Response"></a>

### Delete_Response







<a name="ansys-api-speos-lpf-v2-DoubletDouble"></a>

### DoubletDouble



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [double](#double) |  |  |
| y | [double](#double) |  |  |






<a name="ansys-api-speos-lpf-v2-GetInformation_Request_Mono"></a>

### GetInformation_Request_Mono







<a name="ansys-api-speos-lpf-v2-GetInformation_Request_Multi"></a>

### GetInformation_Request_Multi



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| lpf_reader_guid | [string](#string) |  |  |






<a name="ansys-api-speos-lpf-v2-GetInformation_Response"></a>

### GetInformation_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| nb_of_traces | [int64](#int64) |  |  |
| nb_of_xmps | [uint32](#uint32) |  |  |
| has_sensor_contributions | [bool](#bool) |  |  |
| sensor_names | [string](#string) | repeated | The sensor position in the repeated field sensor_names gives the sensor_id |






<a name="ansys-api-speos-lpf-v2-InitLpfFileName_Request_Mono"></a>

### InitLpfFileName_Request_Mono



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| lpf_file_uri | [string](#string) |  | This can be uri returned by the server when uploading the file, or a local path (in this case the file has to be accessible by the server) |






<a name="ansys-api-speos-lpf-v2-InitLpfFileName_Request_Multi"></a>

### InitLpfFileName_Request_Multi



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| lpf_reader_guid | [string](#string) |  |  |
| lpf_file_uri | [string](#string) |  | This can be uri returned by the server when uploading the file, or a local path (in this case the file has to be accessible by the server) |






<a name="ansys-api-speos-lpf-v2-InitLpfFileName_Response"></a>

### InitLpfFileName_Response







<a name="ansys-api-speos-lpf-v2-RayPath"></a>

### RayPath



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| impacts | [TripletFloat](#ansys-api-speos-lpf-v2-TripletFloat) | repeated |  |
| wavelengths | [double](#double) | repeated |  |
| body_context_ids | [uint32](#uint32) | repeated |  |
| unique_face_ids | [uint32](#uint32) | repeated |  |
| interaction_statuses | [RayPath.PhotonStatus](#ansys-api-speos-lpf-v2-RayPath-PhotonStatus) | repeated |  |
| lastDirection | [TripletFloat](#ansys-api-speos-lpf-v2-TripletFloat) |  |  |
| sensor_contributions | [RayPath.SensorContribution](#ansys-api-speos-lpf-v2-RayPath-SensorContribution) | repeated |  |






<a name="ansys-api-speos-lpf-v2-RayPath-SensorContribution"></a>

### RayPath.SensorContribution



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sensor_id | [uint32](#uint32) |  | The sensor_id corresponds to the position of the sensor in the repeated field GetInformation_Response::sensor_names |
| coordinates | [DoubletDouble](#ansys-api-speos-lpf-v2-DoubletDouble) |  |  |






<a name="ansys-api-speos-lpf-v2-Read_Request_Mono"></a>

### Read_Request_Mono







<a name="ansys-api-speos-lpf-v2-Read_Request_Multi"></a>

### Read_Request_Multi



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| lpf_reader_guid | [string](#string) |  |  |






<a name="ansys-api-speos-lpf-v2-TripletFloat"></a>

### TripletFloat



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x | [float](#float) |  |  |
| y | [float](#float) |  |  |
| z | [float](#float) |  |  |





 


<a name="ansys-api-speos-lpf-v2-RayPath-PhotonStatus"></a>

### RayPath.PhotonStatus


| Name | Number | Description |
| ---- | ------ | ----------- |
| StatusAbsorbed | 0 |  |
| StatusSpecularTransmitted | 1 |  |
| StatusGaussianTransmitted | 2 |  |
| StatusLambertianTransmitted | 3 |  |
| StatusVolumicDiffused | 4 |  |
| StatusJustEmitted | 5 |  |
| StatusDiracTransmitted | 6 |  |
| StatusError | 7 |  |
| StatusErrorVolumicBodyNotClosed | 8 |  |
| StatusErrorVolumeConflict | 9 |  |
| StatusError2DTangency | 10 |  |
| StatusError2DIntersect3DWarning | 11 |  |
| StatusErrorNonOpticalMaterial | 12 |  |
| StatusErrorIntersection | 13 |  |
| StatusErrorNonOpticalMaterialAtEmission | 14 |  |
| StatusError3DTextureSupportTangency | 15 |  |
| StatusLast | 16 |  |
| StatusFirst | -7 |  |
| StatusDiracReflected | -6 |  |
| StatusReserved | -5 |  |
| StatusGrinStep | -4 |  |
| StatusLambertianReflected | -3 |  |
| StatusGaussianReflected | -2 |  |
| StatusSpecularReflected | -1 |  |


 

 


<a name="ansys-api-speos-lpf-v2-LpfFileReader_Mono"></a>

### LpfFileReader_Mono
service to read lpf file - server can handle one reading - call CloseLpfFileName then InitLpfFileName to start another reading.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| InitLpfFileName | [InitLpfFileName_Request_Mono](#ansys-api-speos-lpf-v2-InitLpfFileName_Request_Mono) | [InitLpfFileName_Response](#ansys-api-speos-lpf-v2-InitLpfFileName_Response) | Init the lpf file with its path - returns nothing |
| GetInformation | [GetInformation_Request_Mono](#ansys-api-speos-lpf-v2-GetInformation_Request_Mono) | [GetInformation_Response](#ansys-api-speos-lpf-v2-GetInformation_Response) | Get information about the lpf file, for example number of traces, number of xmps... |
| CloseLpfFileName | [CloseLpfFileName_Request_Mono](#ansys-api-speos-lpf-v2-CloseLpfFileName_Request_Mono) | [CloseLpfFileName_Response](#ansys-api-speos-lpf-v2-CloseLpfFileName_Response) | Close the lpf file - returns nothing |
| Read | [Read_Request_Mono](#ansys-api-speos-lpf-v2-Read_Request_Mono) | [RayPath](#ansys-api-speos-lpf-v2-RayPath) stream | Read lpf file and get all the ray paths |
| ComputeUniqueFaceId | [ComputeUniqueFaceId_Request_Mono](#ansys-api-speos-lpf-v2-ComputeUniqueFaceId_Request_Mono) | [ComputeUniqueFaceId_Response](#ansys-api-speos-lpf-v2-ComputeUniqueFaceId_Response) | Compute a unique face id from bodyContextId and faceId |


<a name="ansys-api-speos-lpf-v2-LpfFileReader_Multi"></a>

### LpfFileReader_Multi
service to read lpf file - server can handle several reading.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Create | [Create_Request_Multi](#ansys-api-speos-lpf-v2-Create_Request_Multi) | [Create_Response](#ansys-api-speos-lpf-v2-Create_Response) | Create a lpf file reader - returns its guid |
| InitLpfFileName | [InitLpfFileName_Request_Multi](#ansys-api-speos-lpf-v2-InitLpfFileName_Request_Multi) | [InitLpfFileName_Response](#ansys-api-speos-lpf-v2-InitLpfFileName_Response) | Init the lpf file with its path - returns nothing |
| GetInformation | [GetInformation_Request_Multi](#ansys-api-speos-lpf-v2-GetInformation_Request_Multi) | [GetInformation_Response](#ansys-api-speos-lpf-v2-GetInformation_Response) | Get information about the lpf file, for example number of traces, number of xmps... |
| CloseLpfFileName | [CloseLpfFileName_Request_Multi](#ansys-api-speos-lpf-v2-CloseLpfFileName_Request_Multi) | [CloseLpfFileName_Response](#ansys-api-speos-lpf-v2-CloseLpfFileName_Response) | Close the lpf file - returns nothing |
| Read | [Read_Request_Multi](#ansys-api-speos-lpf-v2-Read_Request_Multi) | [RayPath](#ansys-api-speos-lpf-v2-RayPath) stream | Read lpf file and get all the ray paths |
| ComputeUniqueFaceId | [ComputeUniqueFaceId_Request_Multi](#ansys-api-speos-lpf-v2-ComputeUniqueFaceId_Request_Multi) | [ComputeUniqueFaceId_Response](#ansys-api-speos-lpf-v2-ComputeUniqueFaceId_Response) | Compute a unique face id from bodyContextId and faceId |
| Delete | [Delete_Request_Multi](#ansys-api-speos-lpf-v2-Delete_Request_Multi) | [Delete_Response](#ansys-api-speos-lpf-v2-Delete_Response) | Delete a lpf file reader - returns nothing |

 



<a name="ansys_api_speos_part_v1_body-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/part/v1/body.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. ANSYS Confidential Information


<a name="ansys-api-speos-body-v1-Body"></a>

### Body
CRUD //
////////
Body definition made of faces


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| metadata | [Body.MetadataEntry](#ansys-api-speos-body-v1-Body-MetadataEntry) | repeated | User defined metadatas |
| face_guids | [string](#string) | repeated | List of faces constituting the body |






<a name="ansys-api-speos-body-v1-Body-MetadataEntry"></a>

### Body.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="ansys-api-speos-body-v1-Create_Request"></a>

### Create_Request
Request to create a body


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| body | [Body](#ansys-api-speos-body-v1-Body) |  | body to create |






<a name="ansys-api-speos-body-v1-Create_Response"></a>

### Create_Response
Response to create a body


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the created body |






<a name="ansys-api-speos-body-v1-Delete_Request"></a>

### Delete_Request
Request to delete a body


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the body to be deleted |






<a name="ansys-api-speos-body-v1-Delete_Response"></a>

### Delete_Response
Response to delete a body






<a name="ansys-api-speos-body-v1-List_Request"></a>

### List_Request
Request to list all bodies






<a name="ansys-api-speos-body-v1-List_Response"></a>

### List_Response
Response to list all bodies


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guids | [string](#string) | repeated | Guids of all bodies |






<a name="ansys-api-speos-body-v1-Read_Request"></a>

### Read_Request
Request to read a body


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the body to be read |






<a name="ansys-api-speos-body-v1-Read_Response"></a>

### Read_Response
Response to read a body


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| body | [Body](#ansys-api-speos-body-v1-Body) |  | body corresponding to the guid given in Read_Request |






<a name="ansys-api-speos-body-v1-Update_Request"></a>

### Update_Request
Request to update a body


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the body to be updated |
| body | [Body](#ansys-api-speos-body-v1-Body) |  | New body that will be used for the update |






<a name="ansys-api-speos-body-v1-Update_Response"></a>

### Update_Response
Response to update a body





 

 

 


<a name="ansys-api-speos-body-v1-BodiesManager"></a>

### BodiesManager


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Create | [Create_Request](#ansys-api-speos-body-v1-Create_Request) | [Create_Response](#ansys-api-speos-body-v1-Create_Response) | Create a new body |
| Read | [Read_Request](#ansys-api-speos-body-v1-Read_Request) | [Read_Response](#ansys-api-speos-body-v1-Read_Response) | Read a body |
| Update | [Update_Request](#ansys-api-speos-body-v1-Update_Request) | [Update_Response](#ansys-api-speos-body-v1-Update_Response) | Update a body |
| Delete | [Delete_Request](#ansys-api-speos-body-v1-Delete_Request) | [Delete_Response](#ansys-api-speos-body-v1-Delete_Response) | Delete a body |
| List | [List_Request](#ansys-api-speos-body-v1-List_Request) | [List_Response](#ansys-api-speos-body-v1-List_Response) | List all body in manager |


<a name="ansys-api-speos-body-v1-BodyActions"></a>

### BodyActions
ACTIONS //
///////////
Actions available on a body

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|

 



<a name="ansys_api_speos_part_v1_face-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/part/v1/face.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. ANSYS Confidential Information


<a name="ansys-api-speos-face-v1-Chunk"></a>

### Chunk
ACTIONS //
///////////
Chunk of a Face


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| face_header | [Chunk.FaceHeader](#ansys-api-speos-face-v1-Chunk-FaceHeader) |  | Common face data - Field used only in first Chunk (to take advantage of vectors sizes) |
| vertices | [Chunk.Vertices](#ansys-api-speos-face-v1-Chunk-Vertices) |  | coordinates of all points (p1x p1y p1z p2x p2y p2z ...) |
| facets | [Chunk.Facets](#ansys-api-speos-face-v1-Chunk-Facets) |  | indexes of points for all triangles (t1_1 t1_2 t1_3 t2_1 t2_2 t2_3 ...) |
| normals | [Chunk.Normals](#ansys-api-speos-face-v1-Chunk-Normals) |  | normal vector for all points (n1x n1y n1z n2x n2y n2z ...) |
| texture_coordinates_channels | [Chunk.TextureCoordinatesChannels](#ansys-api-speos-face-v1-Chunk-TextureCoordinatesChannels) |  |  |






<a name="ansys-api-speos-face-v1-Chunk-FaceHeader"></a>

### Chunk.FaceHeader



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of a FacesManager element - Used for FaceActions.Upload rpc |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| metadata | [Chunk.FaceHeader.MetadataEntry](#ansys-api-speos-face-v1-Chunk-FaceHeader-MetadataEntry) | repeated |  |
| sizes | [int32](#int32) | repeated | total sizes for vectors: (vertices_normals_size, facets_size, texture_coordinates_channels_size) - vertices and normals vectors have same size, that&#39;s why it is gathered in vertices_normals_size |






<a name="ansys-api-speos-face-v1-Chunk-FaceHeader-MetadataEntry"></a>

### Chunk.FaceHeader.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="ansys-api-speos-face-v1-Chunk-Facets"></a>

### Chunk.Facets



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [uint32](#uint32) | repeated |  |






<a name="ansys-api-speos-face-v1-Chunk-Normals"></a>

### Chunk.Normals



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [float](#float) | repeated |  |






<a name="ansys-api-speos-face-v1-Chunk-TextureCoordinatesChannels"></a>

### Chunk.TextureCoordinatesChannels



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [Face.TextureCoordinates](#ansys-api-speos-face-v1-Face-TextureCoordinates) | repeated |  |






<a name="ansys-api-speos-face-v1-Chunk-Vertices"></a>

### Chunk.Vertices



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| data | [float](#float) | repeated |  |






<a name="ansys-api-speos-face-v1-Create_Request"></a>

### Create_Request
Request to create a face


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| face | [Face](#ansys-api-speos-face-v1-Face) |  | face to create |






<a name="ansys-api-speos-face-v1-Create_Response"></a>

### Create_Response
Response to create a face


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the created face |






<a name="ansys-api-speos-face-v1-Delete_Request"></a>

### Delete_Request
Request to delete a face


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the face to be deleted |






<a name="ansys-api-speos-face-v1-Delete_Response"></a>

### Delete_Response
Response to delete a face






<a name="ansys-api-speos-face-v1-Download_Request"></a>

### Download_Request



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of a FacesManager element |






<a name="ansys-api-speos-face-v1-Face"></a>

### Face
Face definition with meshing information


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| metadata | [Face.MetadataEntry](#ansys-api-speos-face-v1-Face-MetadataEntry) | repeated | user defined metadatas |
| vertices | [float](#float) | repeated | coordinates of all points (p1x p1y p1z p2x p2y p2z ...) |
| facets | [uint32](#uint32) | repeated | indexes of points for all triangles (t1_1 t1_2 t1_3 t2_1 t2_2 t2_3 ...) |
| normals | [float](#float) | repeated | normal vector for all points (n1x n1y n1z n2x n2y n2z ...) |
| texture_coordinates_channels | [Face.TextureCoordinates](#ansys-api-speos-face-v1-Face-TextureCoordinates) | repeated | if we want apply textures on this face, we have to set a TextureCoordinates per texture |






<a name="ansys-api-speos-face-v1-Face-MetadataEntry"></a>

### Face.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="ansys-api-speos-face-v1-Face-TextureCoordinates"></a>

### Face.TextureCoordinates



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| uv | [float](#float) | repeated | coordinates (u_1 v_1 ... u_NbPoints v_NbPoints) representating bridge between vertices and point on texture |






<a name="ansys-api-speos-face-v1-List_Request"></a>

### List_Request
Request to list all faces






<a name="ansys-api-speos-face-v1-List_Response"></a>

### List_Response
Response to list all faces


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guids | [string](#string) | repeated | Guids of all faces |






<a name="ansys-api-speos-face-v1-Read_Request"></a>

### Read_Request
Request to read a face


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the face to be read |






<a name="ansys-api-speos-face-v1-Read_Response"></a>

### Read_Response
Response to read a face


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| face | [Face](#ansys-api-speos-face-v1-Face) |  | face corresponding to the guid given in Read_Request |






<a name="ansys-api-speos-face-v1-Update_Request"></a>

### Update_Request
Request to update a face


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the face to be updated |
| face | [Face](#ansys-api-speos-face-v1-Face) |  | New face that will be used for the update |






<a name="ansys-api-speos-face-v1-Update_Response"></a>

### Update_Response
Response to update a face






<a name="ansys-api-speos-face-v1-Upload_Response"></a>

### Upload_Response






 

 

 


<a name="ansys-api-speos-face-v1-FaceActions"></a>

### FaceActions
Actions available on a face

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Upload | [Chunk](#ansys-api-speos-face-v1-Chunk) stream | [Upload_Response](#ansys-api-speos-face-v1-Upload_Response) | Update a face via streaming |
| Download | [Download_Request](#ansys-api-speos-face-v1-Download_Request) | [Chunk](#ansys-api-speos-face-v1-Chunk) stream | Read a face via streaming |


<a name="ansys-api-speos-face-v1-FacesManager"></a>

### FacesManager


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Create | [Create_Request](#ansys-api-speos-face-v1-Create_Request) | [Create_Response](#ansys-api-speos-face-v1-Create_Response) | Create a new face |
| Read | [Read_Request](#ansys-api-speos-face-v1-Read_Request) | [Read_Response](#ansys-api-speos-face-v1-Read_Response) | Read a face |
| Update | [Update_Request](#ansys-api-speos-face-v1-Update_Request) | [Update_Response](#ansys-api-speos-face-v1-Update_Response) | Update a face |
| Delete | [Delete_Request](#ansys-api-speos-face-v1-Delete_Request) | [Delete_Response](#ansys-api-speos-face-v1-Delete_Response) | Delete a face |
| List | [List_Request](#ansys-api-speos-face-v1-List_Request) | [List_Response](#ansys-api-speos-face-v1-List_Response) | List all face in manager |

 



<a name="ansys_api_speos_part_v1_part-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/part/v1/part.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. ANSYS Confidential Information


<a name="ansys-api-speos-part-v1-Create_Request"></a>

### Create_Request
Request to create an element


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| part | [Part](#ansys-api-speos-part-v1-Part) |  | Element to create |






<a name="ansys-api-speos-part-v1-Create_Response"></a>

### Create_Response
Response to create an element


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the created element |






<a name="ansys-api-speos-part-v1-Delete_Request"></a>

### Delete_Request
Request to delete an element


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the element to be deleted |






<a name="ansys-api-speos-part-v1-Delete_Response"></a>

### Delete_Response
Response to delete an element






<a name="ansys-api-speos-part-v1-List_Request"></a>

### List_Request
Request to list all elements






<a name="ansys-api-speos-part-v1-List_Response"></a>

### List_Response
Response to list all elements


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guids | [string](#string) | repeated | Guids of all Parts |






<a name="ansys-api-speos-part-v1-Part"></a>

### Part
Part definition, a Part is related to a CAD part file (scdocx, prt, ...) made of meshed bodies and faces


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| metadata | [Part.MetadataEntry](#ansys-api-speos-part-v1-Part-MetadataEntry) | repeated | User defined metadatas |
| body_guids | [string](#string) | repeated | List of bodies constituting the part |
| parts | [Part.PartInstance](#ansys-api-speos-part-v1-Part-PartInstance) | repeated | List of sub parts |






<a name="ansys-api-speos-part-v1-Part-MetadataEntry"></a>

### Part.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="ansys-api-speos-part-v1-Part-PartInstance"></a>

### Part.PartInstance
Instance of Part in parent coordinates system


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| part_guid | [string](#string) |  | Guid of Part in PartsManager |
| axis_system | [double](#double) | repeated | Part position relative to parent reference (Ox Oy Oz Xx Xy Xz Yx Yy Yz Zx Zy Zz) |






<a name="ansys-api-speos-part-v1-Read_Request"></a>

### Read_Request
Request to read an element


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the element to be read |






<a name="ansys-api-speos-part-v1-Read_Response"></a>

### Read_Response
Response to read an element


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| part | [Part](#ansys-api-speos-part-v1-Part) |  | Element corresponding to the guid given in Read_Request |






<a name="ansys-api-speos-part-v1-Update_Request"></a>

### Update_Request
Request to update an element


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the PartTemplate to be updated |
| part | [Part](#ansys-api-speos-part-v1-Part) |  | New element that will be used for the update |






<a name="ansys-api-speos-part-v1-Update_Response"></a>

### Update_Response
Response to update an element





 

 

 


<a name="ansys-api-speos-part-v1-PartActions"></a>

### PartActions
Actions available on a Part

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|


<a name="ansys-api-speos-part-v1-PartsManager"></a>

### PartsManager
Service to manage geometrical objects

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Create | [Create_Request](#ansys-api-speos-part-v1-Create_Request) | [Create_Response](#ansys-api-speos-part-v1-Create_Response) | Create a new part |
| Read | [Read_Request](#ansys-api-speos-part-v1-Read_Request) | [Read_Response](#ansys-api-speos-part-v1-Read_Response) | Read a part |
| Update | [Update_Request](#ansys-api-speos-part-v1-Update_Request) | [Update_Response](#ansys-api-speos-part-v1-Update_Response) | Update a part |
| Delete | [Delete_Request](#ansys-api-speos-part-v1-Delete_Request) | [Delete_Response](#ansys-api-speos-part-v1-Delete_Response) | Delete a part |
| List | [List_Request](#ansys-api-speos-part-v1-List_Request) | [List_Response](#ansys-api-speos-part-v1-List_Response) | List all part in manager |

 



<a name="ansys_api_speos_results_v1_ray_path-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/results/v1/ray_path.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. ANSYS Confidential Information


<a name="ansys-api-speos-results-v1-RayPath"></a>

### RayPath



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| impacts_coordinates | [float](#float) | repeated | Impacts coordinates of this RayPath. (i0x, i0y, i0z, i1x, i1y, i1z, ..., iNx, iNy, iNz) with N&#43;1 impacts |
| wavelengths | [double](#double) | repeated | Wavelength at each impact. |
| body_context_ids | [uint32](#uint32) | repeated | ID of the body impacted at each impact. |
| unique_face_ids | [uint32](#uint32) | repeated | ID of the face impacted at each impact. |
| interaction_statuses | [RayPath.PhotonStatus](#ansys-api-speos-results-v1-RayPath-PhotonStatus) | repeated | Interaction type at each impact with the elements encountered. |
| last_direction | [float](#float) | repeated | Direction after the last impact. (x, y, z) |
| colors | [ansys.api.speos.common.v1.DataBytes](#ansys-api-speos-common-v1-DataBytes) |  | The color in RGB24 format at each impact |





 


<a name="ansys-api-speos-results-v1-RayPath-PhotonStatus"></a>

### RayPath.PhotonStatus


| Name | Number | Description |
| ---- | ------ | ----------- |
| StatusAbsorbed | 0 |  |
| StatusSpecularTransmitted | 1 |  |
| StatusGaussianTransmitted | 2 |  |
| StatusLambertianTransmitted | 3 |  |
| StatusVolumicDiffused | 4 |  |
| StatusJustEmitted | 5 |  |
| StatusDiracTransmitted | 6 |  |
| StatusError | 7 |  |
| StatusErrorVolumicBodyNotClosed | 8 |  |
| StatusErrorVolumeConflict | 9 |  |
| StatusError2DTangency | 10 |  |
| StatusError2DIntersect3DWarning | 11 |  |
| StatusErrorNonOpticalMaterial | 12 |  |
| StatusErrorIntersection | 13 |  |
| StatusErrorNonOpticalMaterialAtEmission | 14 |  |
| StatusError3DTextureSupportTangency | 15 |  |
| StatusLast | 16 |  |
| StatusFirst | -7 |  |
| StatusDiracReflected | -6 |  |
| StatusReserved | -5 |  |
| StatusGrinStep | -4 |  |
| StatusLambertianReflected | -3 |  |
| StatusGaussianReflected | -2 |  |
| StatusSpecularReflected | -1 |  |


 

 

 



<a name="ansys_api_speos_scene_v1_scene-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/scene/v1/scene.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. ANSYS Confidential Information


<a name="ansys-api-speos-scene-v1-Create_Request"></a>

### Create_Request
Request to create a Scene in ScenesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| scene | [Scene](#ansys-api-speos-scene-v1-Scene) |  |  |






<a name="ansys-api-speos-scene-v1-Create_Response"></a>

### Create_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Scene created in ScenesManager |






<a name="ansys-api-speos-scene-v1-Delete_Request"></a>

### Delete_Request
Request to delete a Scene in ScenesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Scene to be deleted |






<a name="ansys-api-speos-scene-v1-Delete_Response"></a>

### Delete_Response







<a name="ansys-api-speos-scene-v1-GetSourceRayPaths_Request"></a>

### GetSourceRayPaths_Request



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of a ScenesManager element |
| source_path | [string](#string) |  | path to the source in the Scene : &#34;&lt;source name&gt;&#34; for a specific source in the current scene, or &#34;&lt;scene name&gt;/&lt;source name&gt;&#34; for a specific source in a specific sub scene |
| rays_nb | [uint32](#uint32) | optional | Number of rays sent by the source. Default 100 |
| raw_data | [bool](#bool) | optional | Boolean to get the wavelengths in response stream |
| display_data | [bool](#bool) | optional | Boolean to get the colors (RGB24 format) in response stream |






<a name="ansys-api-speos-scene-v1-List_Request"></a>

### List_Request







<a name="ansys-api-speos-scene-v1-List_Response"></a>

### List_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guids | [string](#string) | repeated | Guids of the Scenes in ScenesManager |






<a name="ansys-api-speos-scene-v1-LoadFile_Request"></a>

### LoadFile_Request
Request to LoadFile service


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of a ScenesManager element to update |
| file_uri | [string](#string) |  | File uri (path or guid from FileTransferService) |






<a name="ansys-api-speos-scene-v1-LoadFile_Response"></a>

### LoadFile_Response
Response to LoadFile service






<a name="ansys-api-speos-scene-v1-Read_Request"></a>

### Read_Request
Request to read a Scene in ScenesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Scene to be read |






<a name="ansys-api-speos-scene-v1-Read_Response"></a>

### Read_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| scene | [Scene](#ansys-api-speos-scene-v1-Scene) |  | Scene corresponding to the guid given in Read_Request |






<a name="ansys-api-speos-scene-v1-SaveFile_Request"></a>

### SaveFile_Request
Request to SaveFile service


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of a ScenesManager element to save |
| file_uri | [string](#string) |  | File uri (path or guid from FileTransferService) |






<a name="ansys-api-speos-scene-v1-SaveFile_Response"></a>

### SaveFile_Response
Response to SaveFile service






<a name="ansys-api-speos-scene-v1-Scene"></a>

### Scene
Optical scene definition made of parts, optical properties, sources, sensors and simulations


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| metadata | [Scene.MetadataEntry](#ansys-api-speos-scene-v1-Scene-MetadataEntry) | repeated | User defined metadatas |
| part_guid | [string](#string) |  | Guid from PartsManager of the geometrical part included inside the scene |
| vops | [Scene.VOPInstance](#ansys-api-speos-scene-v1-Scene-VOPInstance) | repeated | The volume materials applied on geometries |
| sops | [Scene.SOPInstance](#ansys-api-speos-scene-v1-Scene-SOPInstance) | repeated | The surface materials applied on geometries |
| sources | [Scene.SourceInstance](#ansys-api-speos-scene-v1-Scene-SourceInstance) | repeated | The sources added in the scene |
| sensors | [Scene.SensorInstance](#ansys-api-speos-scene-v1-Scene-SensorInstance) | repeated | The sensors added in the scene |
| simulations | [Scene.SimulationInstance](#ansys-api-speos-scene-v1-Scene-SimulationInstance) | repeated | The simulations added in the scene |
| scenes | [Scene.SceneInstance](#ansys-api-speos-scene-v1-Scene-SceneInstance) | repeated | Sub scenes |






<a name="ansys-api-speos-scene-v1-Scene-GeoPaths"></a>

### Scene.GeoPaths
Geometry path of object that will include the specific property (can be sub-scene/part/body/face). 
Empty or &#34;&#34; for all geometries, or in the format : &lt;sub-scene name&gt;/&lt;part name&gt;/&lt;body name&gt;/&lt;face name&gt; (no name by default for root scene and root part).
&#34;part1&#34; -&gt; part1 of the root part in the root scene
&#34;part1/body1/face1&#34; -&gt; face1 in body1 in part1 of the root part in the root scene
&#34;subScene1&#34; -&gt; root part in the sub scene subScene1
&#34;subScene1/part2&#34; -&gt; part2 of the sub scene subScene1


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| geo_paths | [string](#string) | repeated | list of geo paths |






<a name="ansys-api-speos-scene-v1-Scene-MetadataEntry"></a>

### Scene.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="ansys-api-speos-scene-v1-Scene-SOPInstance"></a>

### Scene.SOPInstance
Instance of a SOP to apply on geometries of the scene


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| metadata | [Scene.SOPInstance.MetadataEntry](#ansys-api-speos-scene-v1-Scene-SOPInstance-MetadataEntry) | repeated | User defined metadatas |
| sop_guid | [string](#string) |  | Guid of the element to instanciate |
| geometries | [Scene.GeoPaths](#ansys-api-speos-scene-v1-Scene-GeoPaths) |  | Geometries that will use this material |






<a name="ansys-api-speos-scene-v1-Scene-SOPInstance-MetadataEntry"></a>

### Scene.SOPInstance.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="ansys-api-speos-scene-v1-Scene-SceneInstance"></a>

### Scene.SceneInstance



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| metadata | [Scene.SceneInstance.MetadataEntry](#ansys-api-speos-scene-v1-Scene-SceneInstance-MetadataEntry) | repeated | User defined metadatas |
| scene_guid | [string](#string) |  | Guid of the element to instantiate |
| axis_system | [double](#double) | repeated | Scene position relative to parent PartTemplate reference (Ox Oy Oz Xx Xy Xz Yx Yy Yz Zx Zy Zz) |






<a name="ansys-api-speos-scene-v1-Scene-SceneInstance-MetadataEntry"></a>

### Scene.SceneInstance.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="ansys-api-speos-scene-v1-Scene-SensorInstance"></a>

### Scene.SensorInstance
Instance of a sensor to add in the scene


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| metadata | [Scene.SensorInstance.MetadataEntry](#ansys-api-speos-scene-v1-Scene-SensorInstance-MetadataEntry) | repeated | User defined metadatas |
| sensor_guid | [string](#string) |  | Guid of the SensorTemplate in SensorTemplatesManager to instantiate |
| result_file_name | [string](#string) |  | Result file name without extention. Result files of the sensor will be based on this name. |
| camera_sensor_properties | [Scene.SensorInstance.CameraSensorProperties](#ansys-api-speos-scene-v1-Scene-SensorInstance-CameraSensorProperties) |  | To be filled if the sensor_guid corresponds to a SensorTemplate of type CameraSensorTemplate |
| irradiance_sensor_properties | [Scene.SensorInstance.IrradianceSensorProperties](#ansys-api-speos-scene-v1-Scene-SensorInstance-IrradianceSensorProperties) |  | To be filled if the sensor_guid corresponds to a SensorTemplate of type IrradianceSensorTemplate |
| radiance_sensor_properties | [Scene.SensorInstance.RadianceSensorProperties](#ansys-api-speos-scene-v1-Scene-SensorInstance-RadianceSensorProperties) |  | To be filled if the sensor_guid corresponds to a SensorTemplate of type SensorTemplate::Radiance |






<a name="ansys-api-speos-scene-v1-Scene-SensorInstance-CameraSensorProperties"></a>

### Scene.SensorInstance.CameraSensorProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| axis_system | [double](#double) | repeated | Position of the sensor (Ox Oy Oz Xx Xy Xz Yx Yy Yz Zx Zy Zz) |
| trajectory_file_uri | [string](#string) |  | Trajectory file, used to define the position and orientations of the Camera sensor in time. |
| layer_type_none | [Scene.SensorInstance.LayerTypeNone](#ansys-api-speos-scene-v1-Scene-SensorInstance-LayerTypeNone) |  | Layer type : None |
| layer_type_source | [Scene.SensorInstance.LayerTypeSource](#ansys-api-speos-scene-v1-Scene-SensorInstance-LayerTypeSource) |  | Layer type : Source |






<a name="ansys-api-speos-scene-v1-Scene-SensorInstance-IrradianceSensorProperties"></a>

### Scene.SensorInstance.IrradianceSensorProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| axis_system | [double](#double) | repeated | Position of the sensor (Ox Oy Oz Xx Xy Xz Yx Yy Yz Zx Zy Zz) |
| ray_file_type | [Scene.SensorInstance.EnumRayFileType](#ansys-api-speos-scene-v1-Scene-SensorInstance-EnumRayFileType) |  | Choose type of ray file generated after the simulation. |
| layer_type_none | [Scene.SensorInstance.LayerTypeNone](#ansys-api-speos-scene-v1-Scene-SensorInstance-LayerTypeNone) |  | Layer type : None |
| layer_type_source | [Scene.SensorInstance.LayerTypeSource](#ansys-api-speos-scene-v1-Scene-SensorInstance-LayerTypeSource) |  | Layer type : Source |
| layer_type_face | [Scene.SensorInstance.LayerTypeFace](#ansys-api-speos-scene-v1-Scene-SensorInstance-LayerTypeFace) |  | Layer type : Face |
| layer_type_sequence | [Scene.SensorInstance.LayerTypeSequence](#ansys-api-speos-scene-v1-Scene-SensorInstance-LayerTypeSequence) |  | Layer type : Sequence |
| layer_type_polarization | [Scene.SensorInstance.LayerTypePolarization](#ansys-api-speos-scene-v1-Scene-SensorInstance-LayerTypePolarization) |  | Layer type : Polarization |
| layer_type_incidence_angle | [Scene.SensorInstance.LayerTypeIncidenceAngle](#ansys-api-speos-scene-v1-Scene-SensorInstance-LayerTypeIncidenceAngle) |  | Layer type : Incidence angle |
| integration_direction | [double](#double) | repeated | Sensor global integration direction [x,y,z], optional (default direction is normal to sensor plane (anti-normal of the sensor)) and only settable for sensor template with IlluminanceTypePlanar or IlluminanceTypeSemiCylindrical as illuminance_type |
| output_face_geometries | [Scene.GeoPaths](#ansys-api-speos-scene-v1-Scene-GeoPaths) |  | List of output faces for inverse simulation optimization |






<a name="ansys-api-speos-scene-v1-Scene-SensorInstance-LayerTypeFace"></a>

### Scene.SensorInstance.LayerTypeFace
Includes one layer per surface selected in the result.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sca_filtering_mode | [Scene.SensorInstance.LayerTypeFace.EnumSCAFilteringType](#ansys-api-speos-scene-v1-Scene-SensorInstance-LayerTypeFace-EnumSCAFilteringType) |  |  |
| layers | [Scene.SensorInstance.LayerTypeFace.Layer](#ansys-api-speos-scene-v1-Scene-SensorInstance-LayerTypeFace-Layer) | repeated | Layers that will be taken into account in the result. |






<a name="ansys-api-speos-scene-v1-Scene-SensorInstance-LayerTypeFace-Layer"></a>

### Scene.SensorInstance.LayerTypeFace.Layer



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Name of the layer (will appear for example in Virtual Photometric Lab) |
| geometries | [Scene.GeoPaths](#ansys-api-speos-scene-v1-Scene-GeoPaths) |  | Surface selected. |






<a name="ansys-api-speos-scene-v1-Scene-SensorInstance-LayerTypeIncidenceAngle"></a>

### Scene.SensorInstance.LayerTypeIncidenceAngle
Include one layer per range of incident angles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sampling | [uint32](#uint32) |  |  |






<a name="ansys-api-speos-scene-v1-Scene-SensorInstance-LayerTypeNone"></a>

### Scene.SensorInstance.LayerTypeNone
Includes the simulation&#39;s results in one layer.






<a name="ansys-api-speos-scene-v1-Scene-SensorInstance-LayerTypePolarization"></a>

### Scene.SensorInstance.LayerTypePolarization
Includes one layer per Stokes parameter using the polarization parameter.






<a name="ansys-api-speos-scene-v1-Scene-SensorInstance-LayerTypeSequence"></a>

### Scene.SensorInstance.LayerTypeSequence
Includes one layer per sequence in the result.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| maximum_nb_of_sequence | [uint32](#uint32) |  |  |
| define_sequence_per | [Scene.SensorInstance.LayerTypeSequence.EnumSequenceType](#ansys-api-speos-scene-v1-Scene-SensorInstance-LayerTypeSequence-EnumSequenceType) |  |  |






<a name="ansys-api-speos-scene-v1-Scene-SensorInstance-LayerTypeSource"></a>

### Scene.SensorInstance.LayerTypeSource
Includes one layer per active source in the result.






<a name="ansys-api-speos-scene-v1-Scene-SensorInstance-MetadataEntry"></a>

### Scene.SensorInstance.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="ansys-api-speos-scene-v1-Scene-SensorInstance-RadianceSensorProperties"></a>

### Scene.SensorInstance.RadianceSensorProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| axis_system | [double](#double) | repeated | Position of the sensor (Ox Oy Oz Xx Xy Xz Yx Yy Yz Zx Zy Zz) |
| observer_point | [double](#double) | repeated | Position of the observer point (Ox Oy Oz), optional (default: focal length is used) |
| layer_type_none | [Scene.SensorInstance.LayerTypeNone](#ansys-api-speos-scene-v1-Scene-SensorInstance-LayerTypeNone) |  | Layer type : None |
| layer_type_source | [Scene.SensorInstance.LayerTypeSource](#ansys-api-speos-scene-v1-Scene-SensorInstance-LayerTypeSource) |  | Layer type : Source |
| layer_type_face | [Scene.SensorInstance.LayerTypeFace](#ansys-api-speos-scene-v1-Scene-SensorInstance-LayerTypeFace) |  | Layer type : Face |
| layer_type_sequence | [Scene.SensorInstance.LayerTypeSequence](#ansys-api-speos-scene-v1-Scene-SensorInstance-LayerTypeSequence) |  | Layer type : Sequence |






<a name="ansys-api-speos-scene-v1-Scene-SimulationInstance"></a>

### Scene.SimulationInstance
Instance of a simulation to add in the scene


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| metadata | [Scene.SimulationInstance.MetadataEntry](#ansys-api-speos-scene-v1-Scene-SimulationInstance-MetadataEntry) | repeated | User defined metadatas |
| simulation_guid | [string](#string) |  | Guid of the element to instantiate |
| sensor_paths | [string](#string) | repeated | Sensors that this simulation will include (empty or &#34;&#34; for all sensors, &#34;&lt;sensor name&gt;&#34; for a specific sensor in the current scene, or &#34;&lt;scene name&gt;/&lt;sensor name&gt;&#34; for a specific sensor in a specific sub scene) |
| source_paths | [string](#string) | repeated | Sources that this simulation will include (empty or &#34;&#34; for all sources, &#34;&lt;source name&gt;&#34; for a specific source in the current scene, or &#34;&lt;scene name&gt;/&lt;source name&gt;&#34; for a specific source in a specific sub scene) |
| geometries | [Scene.GeoPaths](#ansys-api-speos-scene-v1-Scene-GeoPaths) |  | Geometries that this simulation will include (empty to select the root part and all the subscenes) |






<a name="ansys-api-speos-scene-v1-Scene-SimulationInstance-MetadataEntry"></a>

### Scene.SimulationInstance.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="ansys-api-speos-scene-v1-Scene-SourceInstance"></a>

### Scene.SourceInstance
Instance of a source to add in the scene


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| metadata | [Scene.SourceInstance.MetadataEntry](#ansys-api-speos-scene-v1-Scene-SourceInstance-MetadataEntry) | repeated | User defined metadatas |
| source_guid | [string](#string) |  | Guid of the SourceTemplate in SourceTemplatesManager to instantiate |
| luminaire_properties | [Scene.SourceInstance.LuminaireProperties](#ansys-api-speos-scene-v1-Scene-SourceInstance-LuminaireProperties) |  | To be filled if the source_guid corresponds to a SourceTemplate of type Luminaire |
| surface_properties | [Scene.SourceInstance.SurfaceProperties](#ansys-api-speos-scene-v1-Scene-SourceInstance-SurfaceProperties) |  | To be filled if the source_guid corresponds to a SourceTemplate of type Surface |
| rayfile_properties | [Scene.SourceInstance.RayFileProperties](#ansys-api-speos-scene-v1-Scene-SourceInstance-RayFileProperties) |  | To be filled if the source_guid corresponds to a SourceTemplate of type RayFile |






<a name="ansys-api-speos-scene-v1-Scene-SourceInstance-IntensityProperties"></a>

### Scene.SourceInstance.IntensityProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| library_properties | [Scene.SourceInstance.IntensityProperties.LibraryProperties](#ansys-api-speos-scene-v1-Scene-SourceInstance-IntensityProperties-LibraryProperties) |  | To be filled if the intensity_guid of the source template corresponds to an IntensityTemplate of type Library |
| asymmetric_gaussian_properties | [Scene.SourceInstance.IntensityProperties.AsymmetricGaussianProperties](#ansys-api-speos-scene-v1-Scene-SourceInstance-IntensityProperties-AsymmetricGaussianProperties) |  | Deprecated (use gaussian_properties instead) - To be filled if the intensity_guid of the source template corresponds to an IntensityTemplate of type AsymmetricGaussian |
| gaussian_properties | [Scene.SourceInstance.IntensityProperties.GaussianProperties](#ansys-api-speos-scene-v1-Scene-SourceInstance-IntensityProperties-GaussianProperties) |  | To be filled if the intensity_guid of the source template corresponds to an IntensityTemplate of type Gaussian |






<a name="ansys-api-speos-scene-v1-Scene-SourceInstance-IntensityProperties-AsymmetricGaussianProperties"></a>

### Scene.SourceInstance.IntensityProperties.AsymmetricGaussianProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| axis_system | [double](#double) | repeated | orientation (Ox Oy Oz Xx Xy Xz Yx Yy Yz Zx Zy Zz) |






<a name="ansys-api-speos-scene-v1-Scene-SourceInstance-IntensityProperties-GaussianProperties"></a>

### Scene.SourceInstance.IntensityProperties.GaussianProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| axis_system | [double](#double) | repeated | optional - orientation of the intensity distribution (Ox Oy Oz Xx Xy Xz Yx Yy Yz Zx Zy Zz) - if not filled : normal to surface map. |






<a name="ansys-api-speos-scene-v1-Scene-SourceInstance-IntensityProperties-LibraryProperties"></a>

### Scene.SourceInstance.IntensityProperties.LibraryProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exit_geometries | [Scene.GeoPaths](#ansys-api-speos-scene-v1-Scene-GeoPaths) |  | Exit Geometries that will use this surface source |
| axis_system | [Scene.SourceInstance.IntensityProperties.LibraryProperties.AxisSystem](#ansys-api-speos-scene-v1-Scene-SourceInstance-IntensityProperties-LibraryProperties-AxisSystem) |  | orientation (Ox Oy Oz Xx Xy Xz Yx Yy Yz Zx Zy Zz) |
| normal_to_surface | [Scene.SourceInstance.IntensityProperties.LibraryProperties.NormalToSurface](#ansys-api-speos-scene-v1-Scene-SourceInstance-IntensityProperties-LibraryProperties-NormalToSurface) |  | Define the intensity distribution as normal to the selected surface. |
| normal_to_uv_map | [Scene.SourceInstance.IntensityProperties.LibraryProperties.NormalToUVMap](#ansys-api-speos-scene-v1-Scene-SourceInstance-IntensityProperties-LibraryProperties-NormalToUVMap) |  | Define the intensity distribution as normal to the selected emissive surface and its orientation on the emissive surface. |






<a name="ansys-api-speos-scene-v1-Scene-SourceInstance-IntensityProperties-LibraryProperties-AxisSystem"></a>

### Scene.SourceInstance.IntensityProperties.LibraryProperties.AxisSystem



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| values | [double](#double) | repeated | orientation (Ox Oy Oz Xx Xy Xz Yx Yy Yz Zx Zy Zz) |






<a name="ansys-api-speos-scene-v1-Scene-SourceInstance-IntensityProperties-LibraryProperties-NormalToSurface"></a>

### Scene.SourceInstance.IntensityProperties.LibraryProperties.NormalToSurface
Define the intensity distribution as normal to the selected surface.






<a name="ansys-api-speos-scene-v1-Scene-SourceInstance-IntensityProperties-LibraryProperties-NormalToUVMap"></a>

### Scene.SourceInstance.IntensityProperties.LibraryProperties.NormalToUVMap
Define the intensity distribution as normal to the selected emissive surface and its orientation on the emissive surface.






<a name="ansys-api-speos-scene-v1-Scene-SourceInstance-LuminaireProperties"></a>

### Scene.SourceInstance.LuminaireProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| axis_system | [double](#double) | repeated | Position of the source (Ox Oy Oz Xx Xy Xz Yx Yy Yz Zx Zy Zz) |






<a name="ansys-api-speos-scene-v1-Scene-SourceInstance-MetadataEntry"></a>

### Scene.SourceInstance.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="ansys-api-speos-scene-v1-Scene-SourceInstance-RayFileProperties"></a>

### Scene.SourceInstance.RayFileProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| axis_system | [double](#double) | repeated | Position of the source (Ox Oy Oz Xx Xy Xz Yx Yy Yz Zx Zy Zz) |
| exit_geometries | [Scene.GeoPaths](#ansys-api-speos-scene-v1-Scene-GeoPaths) |  | Exit Geometries that will use this rayfile source |






<a name="ansys-api-speos-scene-v1-Scene-SourceInstance-SurfaceProperties"></a>

### Scene.SourceInstance.SurfaceProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exitance_constant_properties | [Scene.SourceInstance.SurfaceProperties.ExitanceConstantProperties](#ansys-api-speos-scene-v1-Scene-SourceInstance-SurfaceProperties-ExitanceConstantProperties) |  | To be filled if the Surface SourceTemplate has ExitanceConstant |
| exitance_variable_properties | [Scene.SourceInstance.SurfaceProperties.ExitanceVariableProperties](#ansys-api-speos-scene-v1-Scene-SourceInstance-SurfaceProperties-ExitanceVariableProperties) |  | To be filled if the Surface SourceTemplate has ExitanceVariable |
| intensity_properties | [Scene.SourceInstance.IntensityProperties](#ansys-api-speos-scene-v1-Scene-SourceInstance-IntensityProperties) |  |  |






<a name="ansys-api-speos-scene-v1-Scene-SourceInstance-SurfaceProperties-ExitanceConstantProperties"></a>

### Scene.SourceInstance.SurfaceProperties.ExitanceConstantProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| geo_paths | [Scene.SourceInstance.SurfaceProperties.ExitanceConstantProperties.GeoPath](#ansys-api-speos-scene-v1-Scene-SourceInstance-SurfaceProperties-ExitanceConstantProperties-GeoPath) | repeated |  |






<a name="ansys-api-speos-scene-v1-Scene-SourceInstance-SurfaceProperties-ExitanceConstantProperties-GeoPath"></a>

### Scene.SourceInstance.SurfaceProperties.ExitanceConstantProperties.GeoPath



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| geo_path | [string](#string) |  | Geometry that will use this surface source (&#34;&lt;body name&gt;&#34; for a whole body, or &#34;&lt;body name&gt;/&lt;face name&gt;&#34; for a specific face) |
| reverse_normal | [bool](#bool) | optional | optional - if not set or false : normal is not reversed. |






<a name="ansys-api-speos-scene-v1-Scene-SourceInstance-SurfaceProperties-ExitanceVariableProperties"></a>

### Scene.SourceInstance.SurfaceProperties.ExitanceVariableProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| axis_plane | [double](#double) | repeated | Position of the exitance map (Ox Oy Oz Xx Xy Xz Yx Yy Yz) |






<a name="ansys-api-speos-scene-v1-Scene-VOPInstance"></a>

### Scene.VOPInstance
Instance of a VOP to apply on geometries of the scene


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| metadata | [Scene.VOPInstance.MetadataEntry](#ansys-api-speos-scene-v1-Scene-VOPInstance-MetadataEntry) | repeated | User defined metadatas |
| vop_guid | [string](#string) |  | Guid of the element to instanciate |
| geometries | [Scene.GeoPaths](#ansys-api-speos-scene-v1-Scene-GeoPaths) |  | Geometries that will use this material |






<a name="ansys-api-speos-scene-v1-Scene-VOPInstance-MetadataEntry"></a>

### Scene.VOPInstance.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="ansys-api-speos-scene-v1-Update_Request"></a>

### Update_Request
Request to update a Scene in ScenesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Scene to be updated |
| scene | [Scene](#ansys-api-speos-scene-v1-Scene) |  | Scene that will be used for the update |






<a name="ansys-api-speos-scene-v1-Update_Response"></a>

### Update_Response






 


<a name="ansys-api-speos-scene-v1-Scene-SensorInstance-EnumRayFileType"></a>

### Scene.SensorInstance.EnumRayFileType
Ray file types available

| Name | Number | Description |
| ---- | ------ | ----------- |
| RayFileNone | 0 | Generates no ray file. |
| RayFileClassic | 1 | Generates a ray file without polarization data. |
| RayFilePolarization | 2 | Generates a ray file with the polarization data for each ray. |
| RayFileTM25 | 3 | Generates a .tm25ray file with polarization data for each ray. |
| RayFileTM25NoPolarization | 4 | Generates a .tm25ray file without polarization data. |



<a name="ansys-api-speos-scene-v1-Scene-SensorInstance-LayerTypeFace-EnumSCAFilteringType"></a>

### Scene.SensorInstance.LayerTypeFace.EnumSCAFilteringType


| Name | Number | Description |
| ---- | ------ | ----------- |
| LastImpact | 0 |  |
| IntersectedOneTime | 1 |  |



<a name="ansys-api-speos-scene-v1-Scene-SensorInstance-LayerTypeSequence-EnumSequenceType"></a>

### Scene.SensorInstance.LayerTypeSequence.EnumSequenceType


| Name | Number | Description |
| ---- | ------ | ----------- |
| Geometries | 0 |  |
| Faces | 1 |  |


 

 


<a name="ansys-api-speos-scene-v1-SceneActions"></a>

### SceneActions
Actions available on a Scene

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| LoadFile | [LoadFile_Request](#ansys-api-speos-scene-v1-LoadFile_Request) | [LoadFile_Response](#ansys-api-speos-scene-v1-LoadFile_Response) | Load .speos file |
| SaveFile | [SaveFile_Request](#ansys-api-speos-scene-v1-SaveFile_Request) | [SaveFile_Response](#ansys-api-speos-scene-v1-SaveFile_Response) | Save .speos file |
| GetSourceRayPaths | [GetSourceRayPaths_Request](#ansys-api-speos-scene-v1-GetSourceRayPaths_Request) | [.ansys.api.speos.results.v1.RayPath](#ansys-api-speos-results-v1-RayPath) stream | Get RayPaths generated by a source |


<a name="ansys-api-speos-scene-v1-ScenesManager"></a>

### ScenesManager
Manager for Scenes

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Create | [Create_Request](#ansys-api-speos-scene-v1-Create_Request) | [Create_Response](#ansys-api-speos-scene-v1-Create_Response) | Create a Scene |
| Read | [Read_Request](#ansys-api-speos-scene-v1-Read_Request) | [Read_Response](#ansys-api-speos-scene-v1-Read_Response) | Read a Scene |
| Update | [Update_Request](#ansys-api-speos-scene-v1-Update_Request) | [Update_Response](#ansys-api-speos-scene-v1-Update_Response) | Update a Scene |
| Delete | [Delete_Request](#ansys-api-speos-scene-v1-Delete_Request) | [Delete_Response](#ansys-api-speos-scene-v1-Delete_Response) | Delete a Scene |
| List | [List_Request](#ansys-api-speos-scene-v1-List_Request) | [List_Response](#ansys-api-speos-scene-v1-List_Response) | List all Scenes in manager |

 



<a name="ansys_api_speos_scene_v2_scene-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/scene/v2/scene.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. ANSYS Confidential Information


<a name="ansys-api-speos-scene-v2-Create_Request"></a>

### Create_Request
Request to create a Scene in ScenesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| scene | [Scene](#ansys-api-speos-scene-v2-Scene) |  |  |






<a name="ansys-api-speos-scene-v2-Create_Response"></a>

### Create_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Scene created in ScenesManager |






<a name="ansys-api-speos-scene-v2-Delete_Request"></a>

### Delete_Request
Request to delete a Scene in ScenesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Scene to be deleted |






<a name="ansys-api-speos-scene-v2-Delete_Response"></a>

### Delete_Response







<a name="ansys-api-speos-scene-v2-GetSourceRayPaths_Request"></a>

### GetSourceRayPaths_Request



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of a ScenesManager element |
| source_path | [string](#string) |  | path to the source in the Scene : &#34;&lt;source name&gt;&#34; for a specific source in the current scene, or &#34;&lt;scene name&gt;/&lt;source name&gt;&#34; for a specific source in a specific sub scene |
| rays_nb | [uint32](#uint32) | optional | Number of rays sent by the source. Default 100 |
| raw_data | [bool](#bool) | optional | Boolean to get the wavelengths in response stream |
| display_data | [bool](#bool) | optional | Boolean to get the colors (RGB24 format) in response stream |






<a name="ansys-api-speos-scene-v2-List_Request"></a>

### List_Request







<a name="ansys-api-speos-scene-v2-List_Response"></a>

### List_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guids | [string](#string) | repeated | Guids of the Scenes in ScenesManager |






<a name="ansys-api-speos-scene-v2-LoadFile_Request"></a>

### LoadFile_Request
Request to LoadFile service


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of a ScenesManager element to update |
| file_uri | [string](#string) |  | File uri (path or guid from FileTransferService) |






<a name="ansys-api-speos-scene-v2-LoadFile_Response"></a>

### LoadFile_Response
Response to LoadFile service






<a name="ansys-api-speos-scene-v2-Read_Request"></a>

### Read_Request
Request to read a Scene in ScenesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Scene to be read |






<a name="ansys-api-speos-scene-v2-Read_Response"></a>

### Read_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| scene | [Scene](#ansys-api-speos-scene-v2-Scene) |  | Scene corresponding to the guid given in Read_Request |






<a name="ansys-api-speos-scene-v2-SaveFile_Request"></a>

### SaveFile_Request
Request to SaveFile service


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of a ScenesManager element to save |
| file_uri | [string](#string) |  | File uri (path or guid from FileTransferService) |






<a name="ansys-api-speos-scene-v2-SaveFile_Response"></a>

### SaveFile_Response
Response to SaveFile service






<a name="ansys-api-speos-scene-v2-Scene"></a>

### Scene
Optical scene definition made of parts, optical properties, sources, sensors and simulations


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| metadata | [Scene.MetadataEntry](#ansys-api-speos-scene-v2-Scene-MetadataEntry) | repeated | User defined metadatas |
| part_guid | [string](#string) |  | Guid from PartsManager of the geometrical part included inside the scene |
| sources | [Scene.SourceInstance](#ansys-api-speos-scene-v2-Scene-SourceInstance) | repeated | The sources added in the scene |
| sensors | [Scene.SensorInstance](#ansys-api-speos-scene-v2-Scene-SensorInstance) | repeated | The sensors added in the scene |
| simulations | [Scene.SimulationInstance](#ansys-api-speos-scene-v2-Scene-SimulationInstance) | repeated | The simulations added in the scene |
| materials | [Scene.MaterialInstance](#ansys-api-speos-scene-v2-Scene-MaterialInstance) | repeated | The materials (volume &#43; surface) applied on geometries |
| scenes | [Scene.SceneInstance](#ansys-api-speos-scene-v2-Scene-SceneInstance) | repeated | Sub scenes |






<a name="ansys-api-speos-scene-v2-Scene-GeoPath"></a>

### Scene.GeoPath



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| geo_path | [string](#string) |  | Geometry that will be used (&#34;&lt;body name&gt;&#34; for a whole body, or &#34;&lt;body name&gt;/&lt;face name&gt;&#34; for a specific face) |
| reverse_normal | [bool](#bool) | optional | optional - if not set or false : normal is not reversed. |






<a name="ansys-api-speos-scene-v2-Scene-GeoPaths"></a>

### Scene.GeoPaths
Geometry path of object that will include the specific property (can be sub-scene/part/body/face). 
geo_path in the format : &#34;&lt;sub-scene name&gt;/&lt;part name&gt;/&lt;body name&gt;/&lt;face name&gt;&#34; (no name by default for root scene and root part).
&#34;body0&#34; -&gt; body0 of the root part in the root scene
&#34;body0/face0&#34; -&gt; face0 in body0 of the root part in the root scene
&#34;part1&#34; -&gt; part1 of the root part in the root scene
&#34;part1/body1/face1&#34; -&gt; face1 in body1 in part1 of the root part in the root scene
&#34;subScene1&#34; -&gt; root part in the sub scene subScene1
&#34;subScene1/part2&#34; -&gt; part2 of the sub scene subScene1
Particularities:
If the object GeoPaths is defined and geo_paths left empty, this means &#34;All geometry selected&#34;.
If the object GeoPaths is NOT defined, this means &#34;No geometry selected&#34;.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| geo_paths | [string](#string) | repeated | list of geo paths |






<a name="ansys-api-speos-scene-v2-Scene-MaterialInstance"></a>

### Scene.MaterialInstance
Instance of a Material to apply on geometries of the scene


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| metadata | [Scene.MaterialInstance.MetadataEntry](#ansys-api-speos-scene-v2-Scene-MaterialInstance-MetadataEntry) | repeated | User defined metadatas |
| vop_guid | [string](#string) | optional | optional - Guid of the volume optical property to instanciate |
| sop_guids | [string](#string) | repeated | Guid(s) of the surface optical property(ies) to instanciate |
| geometries | [Scene.GeoPaths](#ansys-api-speos-scene-v2-Scene-GeoPaths) |  | Geometries that will use this material |






<a name="ansys-api-speos-scene-v2-Scene-MaterialInstance-MetadataEntry"></a>

### Scene.MaterialInstance.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="ansys-api-speos-scene-v2-Scene-MetadataEntry"></a>

### Scene.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="ansys-api-speos-scene-v2-Scene-SceneInstance"></a>

### Scene.SceneInstance



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| metadata | [Scene.SceneInstance.MetadataEntry](#ansys-api-speos-scene-v2-Scene-SceneInstance-MetadataEntry) | repeated | User defined metadatas |
| scene_guid | [string](#string) |  | Guid of the element to instantiate |
| axis_system | [double](#double) | repeated | Scene position relative to parent PartTemplate reference (Ox Oy Oz Xx Xy Xz Yx Yy Yz Zx Zy Zz) |






<a name="ansys-api-speos-scene-v2-Scene-SceneInstance-MetadataEntry"></a>

### Scene.SceneInstance.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="ansys-api-speos-scene-v2-Scene-SensorInstance"></a>

### Scene.SensorInstance
Instance of a sensor to add in the scene


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| metadata | [Scene.SensorInstance.MetadataEntry](#ansys-api-speos-scene-v2-Scene-SensorInstance-MetadataEntry) | repeated | User defined metadatas |
| sensor_guid | [string](#string) |  | Guid of the SensorTemplate in SensorTemplatesManager to instantiate |
| result_file_name | [string](#string) |  | Result file name without extention. Result files of the sensor will be based on this name. |
| camera_properties | [Scene.SensorInstance.CameraProperties](#ansys-api-speos-scene-v2-Scene-SensorInstance-CameraProperties) |  | To be filled if the sensor_guid corresponds to a SensorTemplate of type CameraSensorTemplate |
| irradiance_properties | [Scene.SensorInstance.IrradianceProperties](#ansys-api-speos-scene-v2-Scene-SensorInstance-IrradianceProperties) |  | To be filled if the sensor_guid corresponds to a SensorTemplate of type IrradianceSensorTemplate |
| radiance_properties | [Scene.SensorInstance.RadianceProperties](#ansys-api-speos-scene-v2-Scene-SensorInstance-RadianceProperties) |  | To be filled if the sensor_guid corresponds to a SensorTemplate of type SensorTemplate::Radiance |






<a name="ansys-api-speos-scene-v2-Scene-SensorInstance-CameraProperties"></a>

### Scene.SensorInstance.CameraProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| axis_system | [double](#double) | repeated | Position of the sensor (Ox Oy Oz Xx Xy Xz Yx Yy Yz Zx Zy Zz) |
| trajectory_file_uri | [string](#string) |  | Trajectory file, used to define the position and orientations of the Camera sensor in time. |
| layer_type_none | [Scene.SensorInstance.LayerTypeNone](#ansys-api-speos-scene-v2-Scene-SensorInstance-LayerTypeNone) |  | Layer type : None |
| layer_type_source | [Scene.SensorInstance.LayerTypeSource](#ansys-api-speos-scene-v2-Scene-SensorInstance-LayerTypeSource) |  | Layer type : Source |






<a name="ansys-api-speos-scene-v2-Scene-SensorInstance-IrradianceProperties"></a>

### Scene.SensorInstance.IrradianceProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| axis_system | [double](#double) | repeated | Position of the sensor (Ox Oy Oz Xx Xy Xz Yx Yy Yz Zx Zy Zz) |
| ray_file_type | [Scene.SensorInstance.EnumRayFileType](#ansys-api-speos-scene-v2-Scene-SensorInstance-EnumRayFileType) |  | Choose type of ray file generated after the simulation. |
| layer_type_none | [Scene.SensorInstance.LayerTypeNone](#ansys-api-speos-scene-v2-Scene-SensorInstance-LayerTypeNone) |  | Layer type : None |
| layer_type_source | [Scene.SensorInstance.LayerTypeSource](#ansys-api-speos-scene-v2-Scene-SensorInstance-LayerTypeSource) |  | Layer type : Source |
| layer_type_face | [Scene.SensorInstance.LayerTypeFace](#ansys-api-speos-scene-v2-Scene-SensorInstance-LayerTypeFace) |  | Layer type : Face |
| layer_type_sequence | [Scene.SensorInstance.LayerTypeSequence](#ansys-api-speos-scene-v2-Scene-SensorInstance-LayerTypeSequence) |  | Layer type : Sequence |
| layer_type_polarization | [Scene.SensorInstance.LayerTypePolarization](#ansys-api-speos-scene-v2-Scene-SensorInstance-LayerTypePolarization) |  | Layer type : Polarization |
| layer_type_incidence_angle | [Scene.SensorInstance.LayerTypeIncidenceAngle](#ansys-api-speos-scene-v2-Scene-SensorInstance-LayerTypeIncidenceAngle) |  | Layer type : Incidence angle |
| integration_direction | [double](#double) | repeated | Sensor global integration direction [x,y,z], optional (default direction is normal to sensor plane (anti-normal of the sensor)) and only settable for sensor template with IlluminanceTypePlanar or IlluminanceTypeSemiCylindrical as illuminance_type |
| output_face_geometries | [Scene.GeoPaths](#ansys-api-speos-scene-v2-Scene-GeoPaths) |  | List of output faces for inverse simulation optimization |






<a name="ansys-api-speos-scene-v2-Scene-SensorInstance-LayerTypeFace"></a>

### Scene.SensorInstance.LayerTypeFace
Includes one layer per surface selected in the result.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sca_filtering_mode | [Scene.SensorInstance.LayerTypeFace.EnumSCAFilteringType](#ansys-api-speos-scene-v2-Scene-SensorInstance-LayerTypeFace-EnumSCAFilteringType) |  |  |
| layers | [Scene.SensorInstance.LayerTypeFace.Layer](#ansys-api-speos-scene-v2-Scene-SensorInstance-LayerTypeFace-Layer) | repeated | Layers that will be taken into account in the result. |






<a name="ansys-api-speos-scene-v2-Scene-SensorInstance-LayerTypeFace-Layer"></a>

### Scene.SensorInstance.LayerTypeFace.Layer



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Name of the layer (will appear for example in Virtual Photometric Lab) |
| geometries | [Scene.GeoPaths](#ansys-api-speos-scene-v2-Scene-GeoPaths) |  | Surface selected. |






<a name="ansys-api-speos-scene-v2-Scene-SensorInstance-LayerTypeIncidenceAngle"></a>

### Scene.SensorInstance.LayerTypeIncidenceAngle
Include one layer per range of incident angles.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sampling | [uint32](#uint32) |  |  |






<a name="ansys-api-speos-scene-v2-Scene-SensorInstance-LayerTypeNone"></a>

### Scene.SensorInstance.LayerTypeNone
Includes the simulation&#39;s results in one layer.






<a name="ansys-api-speos-scene-v2-Scene-SensorInstance-LayerTypePolarization"></a>

### Scene.SensorInstance.LayerTypePolarization
Includes one layer per Stokes parameter using the polarization parameter.






<a name="ansys-api-speos-scene-v2-Scene-SensorInstance-LayerTypeSequence"></a>

### Scene.SensorInstance.LayerTypeSequence
Includes one layer per sequence in the result.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| maximum_nb_of_sequence | [uint32](#uint32) |  |  |
| define_sequence_per | [Scene.SensorInstance.LayerTypeSequence.EnumSequenceType](#ansys-api-speos-scene-v2-Scene-SensorInstance-LayerTypeSequence-EnumSequenceType) |  |  |






<a name="ansys-api-speos-scene-v2-Scene-SensorInstance-LayerTypeSource"></a>

### Scene.SensorInstance.LayerTypeSource
Includes one layer per active source in the result.






<a name="ansys-api-speos-scene-v2-Scene-SensorInstance-MetadataEntry"></a>

### Scene.SensorInstance.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="ansys-api-speos-scene-v2-Scene-SensorInstance-RadianceProperties"></a>

### Scene.SensorInstance.RadianceProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| axis_system | [double](#double) | repeated | Position of the sensor (Ox Oy Oz Xx Xy Xz Yx Yy Yz Zx Zy Zz) |
| observer_point | [double](#double) | repeated | Position of the observer point (Ox Oy Oz), optional (default: focal length is used) |
| layer_type_none | [Scene.SensorInstance.LayerTypeNone](#ansys-api-speos-scene-v2-Scene-SensorInstance-LayerTypeNone) |  | Layer type : None |
| layer_type_source | [Scene.SensorInstance.LayerTypeSource](#ansys-api-speos-scene-v2-Scene-SensorInstance-LayerTypeSource) |  | Layer type : Source |
| layer_type_face | [Scene.SensorInstance.LayerTypeFace](#ansys-api-speos-scene-v2-Scene-SensorInstance-LayerTypeFace) |  | Layer type : Face |
| layer_type_sequence | [Scene.SensorInstance.LayerTypeSequence](#ansys-api-speos-scene-v2-Scene-SensorInstance-LayerTypeSequence) |  | Layer type : Sequence |






<a name="ansys-api-speos-scene-v2-Scene-SimulationInstance"></a>

### Scene.SimulationInstance
Instance of a simulation to add in the scene


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| metadata | [Scene.SimulationInstance.MetadataEntry](#ansys-api-speos-scene-v2-Scene-SimulationInstance-MetadataEntry) | repeated | User defined metadatas |
| simulation_guid | [string](#string) |  | Guid of the element to instantiate |
| sensor_paths | [string](#string) | repeated | Sensors that this simulation will include (empty for no sensor, [&#34;&#34;] for all sensors, &#34;&lt;sensor name&gt;&#34; for a specific sensor in the current scene, or &#34;&lt;scene name&gt;/&lt;sensor name&gt;&#34; for a specific sensor in a specific sub scene) |
| source_paths | [string](#string) | repeated | Sources that this simulation will include (empty for no source, [&#34;&#34;] for all sources, &#34;&lt;source name&gt;&#34; for a specific source in the current scene, or &#34;&lt;scene name&gt;/&lt;source name&gt;&#34; for a specific source in a specific sub scene) |
| geometries | [Scene.GeoPaths](#ansys-api-speos-scene-v2-Scene-GeoPaths) |  | Geometries that this simulation will include - Not yet functional (All geometry is included by default to each simulation) |






<a name="ansys-api-speos-scene-v2-Scene-SimulationInstance-MetadataEntry"></a>

### Scene.SimulationInstance.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="ansys-api-speos-scene-v2-Scene-SourceInstance"></a>

### Scene.SourceInstance
Instance of a source to add in the scene


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  |  |
| description | [string](#string) |  |  |
| metadata | [Scene.SourceInstance.MetadataEntry](#ansys-api-speos-scene-v2-Scene-SourceInstance-MetadataEntry) | repeated | User defined metadatas |
| source_guid | [string](#string) |  | Guid of the SourceTemplate in SourceTemplatesManager to instantiate |
| luminaire_properties | [Scene.SourceInstance.LuminaireProperties](#ansys-api-speos-scene-v2-Scene-SourceInstance-LuminaireProperties) |  | To be filled if the source_guid corresponds to a SourceTemplate of type Luminaire |
| surface_properties | [Scene.SourceInstance.SurfaceProperties](#ansys-api-speos-scene-v2-Scene-SourceInstance-SurfaceProperties) |  | To be filled if the source_guid corresponds to a SourceTemplate of type Surface |
| rayfile_properties | [Scene.SourceInstance.RayFileProperties](#ansys-api-speos-scene-v2-Scene-SourceInstance-RayFileProperties) |  | To be filled if the source_guid corresponds to a SourceTemplate of type RayFile |






<a name="ansys-api-speos-scene-v2-Scene-SourceInstance-IntensityProperties"></a>

### Scene.SourceInstance.IntensityProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| library_properties | [Scene.SourceInstance.IntensityProperties.LibraryProperties](#ansys-api-speos-scene-v2-Scene-SourceInstance-IntensityProperties-LibraryProperties) |  | To be filled if the intensity_guid of the source template corresponds to an IntensityTemplate of type Library |
| gaussian_properties | [Scene.SourceInstance.IntensityProperties.GaussianProperties](#ansys-api-speos-scene-v2-Scene-SourceInstance-IntensityProperties-GaussianProperties) |  | To be filled if the intensity_guid of the source template corresponds to an IntensityTemplate of type Gaussian |






<a name="ansys-api-speos-scene-v2-Scene-SourceInstance-IntensityProperties-GaussianProperties"></a>

### Scene.SourceInstance.IntensityProperties.GaussianProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| axis_system | [double](#double) | repeated | optional - orientation of the intensity distribution (Ox Oy Oz Xx Xy Xz Yx Yy Yz Zx Zy Zz) - if not filled : normal to surface map. |






<a name="ansys-api-speos-scene-v2-Scene-SourceInstance-IntensityProperties-LibraryProperties"></a>

### Scene.SourceInstance.IntensityProperties.LibraryProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exit_geometries | [Scene.GeoPaths](#ansys-api-speos-scene-v2-Scene-GeoPaths) |  | Exit Geometries that will use this surface source |
| axis_system | [Scene.SourceInstance.IntensityProperties.LibraryProperties.AxisSystem](#ansys-api-speos-scene-v2-Scene-SourceInstance-IntensityProperties-LibraryProperties-AxisSystem) |  | orientation (Ox Oy Oz Xx Xy Xz Yx Yy Yz Zx Zy Zz) |
| normal_to_surface | [Scene.SourceInstance.IntensityProperties.LibraryProperties.NormalToSurface](#ansys-api-speos-scene-v2-Scene-SourceInstance-IntensityProperties-LibraryProperties-NormalToSurface) |  | Define the intensity distribution as normal to the selected surface. |
| normal_to_uv_map | [Scene.SourceInstance.IntensityProperties.LibraryProperties.NormalToUVMap](#ansys-api-speos-scene-v2-Scene-SourceInstance-IntensityProperties-LibraryProperties-NormalToUVMap) |  | Define the intensity distribution as normal to the selected emissive surface and its orientation on the emissive surface. |






<a name="ansys-api-speos-scene-v2-Scene-SourceInstance-IntensityProperties-LibraryProperties-AxisSystem"></a>

### Scene.SourceInstance.IntensityProperties.LibraryProperties.AxisSystem



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| values | [double](#double) | repeated | orientation (Ox Oy Oz Xx Xy Xz Yx Yy Yz Zx Zy Zz) |






<a name="ansys-api-speos-scene-v2-Scene-SourceInstance-IntensityProperties-LibraryProperties-NormalToSurface"></a>

### Scene.SourceInstance.IntensityProperties.LibraryProperties.NormalToSurface
Define the intensity distribution as normal to the selected surface.






<a name="ansys-api-speos-scene-v2-Scene-SourceInstance-IntensityProperties-LibraryProperties-NormalToUVMap"></a>

### Scene.SourceInstance.IntensityProperties.LibraryProperties.NormalToUVMap
Define the intensity distribution as normal to the selected emissive surface and its orientation on the emissive surface.






<a name="ansys-api-speos-scene-v2-Scene-SourceInstance-LuminaireProperties"></a>

### Scene.SourceInstance.LuminaireProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| axis_system | [double](#double) | repeated | Position of the source (Ox Oy Oz Xx Xy Xz Yx Yy Yz Zx Zy Zz) |






<a name="ansys-api-speos-scene-v2-Scene-SourceInstance-MetadataEntry"></a>

### Scene.SourceInstance.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="ansys-api-speos-scene-v2-Scene-SourceInstance-RayFileProperties"></a>

### Scene.SourceInstance.RayFileProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| axis_system | [double](#double) | repeated | Position of the source (Ox Oy Oz Xx Xy Xz Yx Yy Yz Zx Zy Zz) |
| exit_geometries | [Scene.GeoPaths](#ansys-api-speos-scene-v2-Scene-GeoPaths) |  | Exit Geometries that will use this rayfile source |






<a name="ansys-api-speos-scene-v2-Scene-SourceInstance-SurfaceProperties"></a>

### Scene.SourceInstance.SurfaceProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exitance_constant_properties | [Scene.SourceInstance.SurfaceProperties.ExitanceConstantProperties](#ansys-api-speos-scene-v2-Scene-SourceInstance-SurfaceProperties-ExitanceConstantProperties) |  | To be filled if the Surface SourceTemplate has ExitanceConstant |
| exitance_variable_properties | [Scene.SourceInstance.SurfaceProperties.ExitanceVariableProperties](#ansys-api-speos-scene-v2-Scene-SourceInstance-SurfaceProperties-ExitanceVariableProperties) |  | To be filled if the Surface SourceTemplate has ExitanceVariable |
| intensity_properties | [Scene.SourceInstance.IntensityProperties](#ansys-api-speos-scene-v2-Scene-SourceInstance-IntensityProperties) |  |  |






<a name="ansys-api-speos-scene-v2-Scene-SourceInstance-SurfaceProperties-ExitanceConstantProperties"></a>

### Scene.SourceInstance.SurfaceProperties.ExitanceConstantProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| geo_paths | [Scene.GeoPath](#ansys-api-speos-scene-v2-Scene-GeoPath) | repeated |  |






<a name="ansys-api-speos-scene-v2-Scene-SourceInstance-SurfaceProperties-ExitanceVariableProperties"></a>

### Scene.SourceInstance.SurfaceProperties.ExitanceVariableProperties



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| axis_plane | [double](#double) | repeated | Position of the exitance map (Ox Oy Oz Xx Xy Xz Yx Yy Yz) |






<a name="ansys-api-speos-scene-v2-Update_Request"></a>

### Update_Request
Request to update a Scene in ScenesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Scene to be updated |
| scene | [Scene](#ansys-api-speos-scene-v2-Scene) |  | Scene that will be used for the update |






<a name="ansys-api-speos-scene-v2-Update_Response"></a>

### Update_Response






 


<a name="ansys-api-speos-scene-v2-Scene-SensorInstance-EnumRayFileType"></a>

### Scene.SensorInstance.EnumRayFileType
Ray file types available

| Name | Number | Description |
| ---- | ------ | ----------- |
| RayFileNone | 0 | Generates no ray file. |
| RayFileClassic | 1 | Generates a ray file without polarization data. |
| RayFilePolarization | 2 | Generates a ray file with the polarization data for each ray. |
| RayFileTM25 | 3 | Generates a .tm25ray file with polarization data for each ray. |
| RayFileTM25NoPolarization | 4 | Generates a .tm25ray file without polarization data. |



<a name="ansys-api-speos-scene-v2-Scene-SensorInstance-LayerTypeFace-EnumSCAFilteringType"></a>

### Scene.SensorInstance.LayerTypeFace.EnumSCAFilteringType


| Name | Number | Description |
| ---- | ------ | ----------- |
| LastImpact | 0 |  |
| IntersectedOneTime | 1 |  |



<a name="ansys-api-speos-scene-v2-Scene-SensorInstance-LayerTypeSequence-EnumSequenceType"></a>

### Scene.SensorInstance.LayerTypeSequence.EnumSequenceType


| Name | Number | Description |
| ---- | ------ | ----------- |
| Geometries | 0 |  |
| Faces | 1 |  |


 

 


<a name="ansys-api-speos-scene-v2-SceneActions"></a>

### SceneActions
Actions available on a Scene

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| LoadFile | [LoadFile_Request](#ansys-api-speos-scene-v2-LoadFile_Request) | [LoadFile_Response](#ansys-api-speos-scene-v2-LoadFile_Response) | Load .speos file |
| SaveFile | [SaveFile_Request](#ansys-api-speos-scene-v2-SaveFile_Request) | [SaveFile_Response](#ansys-api-speos-scene-v2-SaveFile_Response) | Save .speos file |
| GetSourceRayPaths | [GetSourceRayPaths_Request](#ansys-api-speos-scene-v2-GetSourceRayPaths_Request) | [.ansys.api.speos.results.v1.RayPath](#ansys-api-speos-results-v1-RayPath) stream | Get RayPaths generated by a source |


<a name="ansys-api-speos-scene-v2-ScenesManager"></a>

### ScenesManager
Manager for Scenes

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Create | [Create_Request](#ansys-api-speos-scene-v2-Create_Request) | [Create_Response](#ansys-api-speos-scene-v2-Create_Response) | Create a Scene |
| Read | [Read_Request](#ansys-api-speos-scene-v2-Read_Request) | [Read_Response](#ansys-api-speos-scene-v2-Read_Response) | Read a Scene |
| Update | [Update_Request](#ansys-api-speos-scene-v2-Update_Request) | [Update_Response](#ansys-api-speos-scene-v2-Update_Response) | Update a Scene |
| Delete | [Delete_Request](#ansys-api-speos-scene-v2-Delete_Request) | [Delete_Response](#ansys-api-speos-scene-v2-Delete_Response) | Delete a Scene |
| List | [List_Request](#ansys-api-speos-scene-v2-List_Request) | [List_Response](#ansys-api-speos-scene-v2-List_Response) | List all Scenes in manager |

 



<a name="ansys_api_speos_sensor_v1_camera_sensor-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/sensor/v1/camera_sensor.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="ansys-api-speos-sensor-v1-CameraSensorTemplate"></a>

### CameraSensorTemplate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sensor_mode_geometric | [SensorCameraModeGeometric](#ansys-api-speos-sensor-v1-SensorCameraModeGeometric) |  | Sensor mode : Geometric |
| sensor_mode_photometric | [SensorCameraModePhotometric](#ansys-api-speos-sensor-v1-SensorCameraModePhotometric) |  | Sensor mode : Photometric |
| focal_length | [double](#double) |  | Distance between the center of the optical system and the focus. (mm) |
| imager_distance | [double](#double) |  | Imager distance in mm, the imager is located at the focal point. The Imager distance has no impact on the result. |
| f_number | [double](#double) |  | F-number represent the aperture of the front lens. F number has no impact on the result. |
| distorsion_file_uri | [string](#string) |  | Will be deprecated soon due to typo error - better use distortion_file_uri |
| distortion_file_uri | [string](#string) |  | Optical aberration that deforms and bend straight lines. The distortion is expressed in a .OPTDistortion file. |
| horz_pixel | [uint32](#uint32) |  | Defines the horizontal pixels number corresponding to the camera resolution. |
| vert_pixel | [uint32](#uint32) |  | Defines the vertical pixels number corresponding to the camera resolution. |
| width | [double](#double) |  | Defines the sensor&#39;s width in mm. |
| height | [double](#double) |  | Defines the sensor&#39;s height in mm. |






<a name="ansys-api-speos-sensor-v1-SensorCameraBalanceModeDisplay"></a>

### SensorCameraBalanceModeDisplay
Spectral results are converted in a three channels result. Then a post-treatment is realized to take the distortion induced by the display devices into account. With this method, displayed results are similar to what the camera really gets.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| red_display_file_uri | [string](#string) |  |  |
| green_display_file_uri | [string](#string) |  |  |
| blue_display_file_uri | [string](#string) |  |  |






<a name="ansys-api-speos-sensor-v1-SensorCameraBalanceModeGreyworld"></a>

### SensorCameraBalanceModeGreyworld
The grey world assumption states that the content of the image is grey on average. This method converts spectral results in a three channel results with the basic conversion. Then it computes and applies coefficients to the red, green and blue images to make sure their averages are equal.






<a name="ansys-api-speos-sensor-v1-SensorCameraBalanceModeNone"></a>

### SensorCameraBalanceModeNone
The spectral transmittance of the optical system and the spectral sensitivity for each channel are applied to the detected spectral image before the conversion in a three channel results. This method is referred to as the basic conversion.






<a name="ansys-api-speos-sensor-v1-SensorCameraBalanceModeUserwhite"></a>

### SensorCameraBalanceModeUserwhite
In addition to the basic treatment, it allows you to apply your own coefficients to the red, green, blue images.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| red_gain | [double](#double) |  |  |
| green_gain | [double](#double) |  |  |
| blue_gain | [double](#double) |  |  |






<a name="ansys-api-speos-sensor-v1-SensorCameraColorModeColor"></a>

### SensorCameraColorModeColor
Simulation results are available in color according to the White Balance mode.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| red_spectrum_file_uri | [string](#string) |  |  |
| green_spectrum_file_uri | [string](#string) |  |  |
| blue_spectrum_file_uri | [string](#string) |  |  |
| balance_mode_none | [SensorCameraBalanceModeNone](#ansys-api-speos-sensor-v1-SensorCameraBalanceModeNone) |  | Balance mode : None |
| balance_mode_greyworld | [SensorCameraBalanceModeGreyworld](#ansys-api-speos-sensor-v1-SensorCameraBalanceModeGreyworld) |  | Balance mode : Greyworld |
| balance_mode_userwhite | [SensorCameraBalanceModeUserwhite](#ansys-api-speos-sensor-v1-SensorCameraBalanceModeUserwhite) |  | Balance mode : Userwhite |
| balance_mode_display | [SensorCameraBalanceModeDisplay](#ansys-api-speos-sensor-v1-SensorCameraBalanceModeDisplay) |  | Balance mode : Display |






<a name="ansys-api-speos-sensor-v1-SensorCameraColorModeMonochromatic"></a>

### SensorCameraColorModeMonochromatic
Simulation results are available in grey scale.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| spectrum_file_uri | [string](#string) |  |  |






<a name="ansys-api-speos-sensor-v1-SensorCameraModeGeometric"></a>

### SensorCameraModeGeometric
Simplified version of the Camera Sensor definition parameters






<a name="ansys-api-speos-sensor-v1-SensorCameraModePhotometric"></a>

### SensorCameraModePhotometric
Allows to set every Camera Sensor parameters, including the photometric definition parameters


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| acquisition_integration | [double](#double) |  | Acquisition integration in s |
| acquisition_lag_time | [double](#double) |  | Acquisition lag time in s |
| transmittance_file_uri | [string](#string) |  | Amount of light of the source that passes through the lens and reaches the sensor. The transmittance is expressed in a .spectrum file. |
| gamma_correction | [float](#float) |  | Compensation of the curve before the display on the screen. |
| png_bits | [EnumSensorCameraPNGBits](#ansys-api-speos-sensor-v1-EnumSensorCameraPNGBits) |  | Choose between 8, 10, 12 and 16-bit. |
| color_mode_color | [SensorCameraColorModeColor](#ansys-api-speos-sensor-v1-SensorCameraColorModeColor) |  | Color mode : Color |
| color_mode_monochromatic | [SensorCameraColorModeMonochromatic](#ansys-api-speos-sensor-v1-SensorCameraColorModeMonochromatic) |  | Color mode : Monochromatic |
| wavelengths_range | [WavelengthsRange](#ansys-api-speos-sensor-v1-WavelengthsRange) |  | Spectral excursion to use for simulation |





 


<a name="ansys-api-speos-sensor-v1-EnumSensorCameraPNGBits"></a>

### EnumSensorCameraPNGBits


| Name | Number | Description |
| ---- | ------ | ----------- |
| PNG_08 | 0 |  |
| PNG_10 | 1 |  |
| PNG_12 | 2 |  |
| PNG_16 | 3 |  |


 

 

 



<a name="ansys_api_speos_sensor_v1_common-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/sensor/v1/common.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="ansys-api-speos-sensor-v1-IlluminanceTypeCylindrical"></a>

### IlluminanceTypeCylindrical







<a name="ansys-api-speos-sensor-v1-IlluminanceTypeHemispherical"></a>

### IlluminanceTypeHemispherical







<a name="ansys-api-speos-sensor-v1-IlluminanceTypePlanar"></a>

### IlluminanceTypePlanar
Integration made orthogonally with the sensor plan.






<a name="ansys-api-speos-sensor-v1-IlluminanceTypeRadial"></a>

### IlluminanceTypeRadial







<a name="ansys-api-speos-sensor-v1-IlluminanceTypeSemiCylindrical"></a>

### IlluminanceTypeSemiCylindrical







<a name="ansys-api-speos-sensor-v1-SensorDimensions"></a>

### SensorDimensions
Dimensions of the sensor


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| x_start | [double](#double) |  | (mm) |
| x_end | [double](#double) |  | (mm) |
| x_sampling | [uint32](#uint32) |  | Corresponds to the number of pixels of the XMP map. |
| y_start | [double](#double) |  | (mm) |
| y_end | [double](#double) |  | (mm) |
| y_sampling | [uint32](#uint32) |  | Corresponds to the number of pixels of the XMP map. |






<a name="ansys-api-speos-sensor-v1-SensorTypeColorimetric"></a>

### SensorTypeColorimetric
Color results without any spectral data or layer separation (in lx or W//m2).


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| wavelengths_range | [WavelengthsRange](#ansys-api-speos-sensor-v1-WavelengthsRange) |  | Spectral excursion to use for simulation |






<a name="ansys-api-speos-sensor-v1-SensorTypePhotometric"></a>

### SensorTypePhotometric
The sensor considers the visible spectrum and gets the results in lm/m2 or lx.






<a name="ansys-api-speos-sensor-v1-SensorTypeRadiometric"></a>

### SensorTypeRadiometric
The sensor considers the entire spectrum and gets the results in W/m2.






<a name="ansys-api-speos-sensor-v1-SensorTypeSpectral"></a>

### SensorTypeSpectral
Color results and spectral data separated by wavelength (in lx or W/m2).


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| wavelengths_range | [WavelengthsRange](#ansys-api-speos-sensor-v1-WavelengthsRange) |  | Spectral excursion to use for simulation |






<a name="ansys-api-speos-sensor-v1-WavelengthsRange"></a>

### WavelengthsRange
Spectral excursion to use for simulation


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| w_start | [double](#double) |  | Defines the minimum wavelength. (nm) |
| w_end | [double](#double) |  | Defines the maximum wavelength. (nm) |
| w_sampling | [uint32](#uint32) |  | Defines the number of wavelength to be taken into account between the minimum and minimum wavelengths set. |





 

 

 

 



<a name="ansys_api_speos_sensor_v1_irradiance_sensor-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/sensor/v1/irradiance_sensor.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="ansys-api-speos-sensor-v1-IrradianceSensorTemplate"></a>

### IrradianceSensorTemplate



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sensor_type_photometric | [SensorTypePhotometric](#ansys-api-speos-sensor-v1-SensorTypePhotometric) |  | Sensor type : Photometric |
| sensor_type_colorimetric | [SensorTypeColorimetric](#ansys-api-speos-sensor-v1-SensorTypeColorimetric) |  | Sensor type : Colorimetric |
| sensor_type_radiometric | [SensorTypeRadiometric](#ansys-api-speos-sensor-v1-SensorTypeRadiometric) |  | Sensor type : Radiometric |
| sensor_type_spectral | [SensorTypeSpectral](#ansys-api-speos-sensor-v1-SensorTypeSpectral) |  | Sensor type : Spectral |
| illuminance_type_planar | [IlluminanceTypePlanar](#ansys-api-speos-sensor-v1-IlluminanceTypePlanar) |  | Illuminance type : Planar |
| illuminance_type_radial | [IlluminanceTypeRadial](#ansys-api-speos-sensor-v1-IlluminanceTypeRadial) |  | Illuminance type : Radial |
| illuminance_type_hemispherical | [IlluminanceTypeHemispherical](#ansys-api-speos-sensor-v1-IlluminanceTypeHemispherical) |  | Illuminance type : Hemispherical |
| illuminance_type_cylindrical | [IlluminanceTypeCylindrical](#ansys-api-speos-sensor-v1-IlluminanceTypeCylindrical) |  | Illuminance type : Cylindrical |
| illuminance_type_semi_cylindrical | [IlluminanceTypeSemiCylindrical](#ansys-api-speos-sensor-v1-IlluminanceTypeSemiCylindrical) |  | Illuminance type : SemiCylindrical |
| dimensions | [SensorDimensions](#ansys-api-speos-sensor-v1-SensorDimensions) |  | Dimensions of the sensor |





 

 

 

 



<a name="ansys_api_speos_sensor_v1_sensor-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/sensor/v1/sensor.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="ansys-api-speos-sensor-v1-Create_Request"></a>

### Create_Request
Request to create a SensorTemplate in SensorTemplatesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sensor_template | [SensorTemplate](#ansys-api-speos-sensor-v1-SensorTemplate) |  | SensorTemplate containing its basic characteristics |






<a name="ansys-api-speos-sensor-v1-Create_Response"></a>

### Create_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the SensorTemplate created in SensorTemplatesManager |






<a name="ansys-api-speos-sensor-v1-Delete_Request"></a>

### Delete_Request
Request to delete a SensorTemplate in SensorTemplatesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the SensorTemplate to be deleted |






<a name="ansys-api-speos-sensor-v1-Delete_Response"></a>

### Delete_Response







<a name="ansys-api-speos-sensor-v1-List_Request"></a>

### List_Request







<a name="ansys-api-speos-sensor-v1-List_Response"></a>

### List_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guids | [string](#string) | repeated | Guids of the SensorTemplates in SensorTemplatesManager |






<a name="ansys-api-speos-sensor-v1-Read_Request"></a>

### Read_Request
Request to read a SensorTemplate in SensorTemplatesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the SensorTemplate to be read |






<a name="ansys-api-speos-sensor-v1-Read_Response"></a>

### Read_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sensor_template | [SensorTemplate](#ansys-api-speos-sensor-v1-SensorTemplate) |  | SensorTemplate corresponding to the guid given in Read_Request |






<a name="ansys-api-speos-sensor-v1-SensorTemplate"></a>

### SensorTemplate
Sensor template with its basic characteristics


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | SensorTemplate name |
| description | [string](#string) |  | SensorTemplate description |
| metadata | [SensorTemplate.MetadataEntry](#ansys-api-speos-sensor-v1-SensorTemplate-MetadataEntry) | repeated | User defined metadatas |
| camera_sensor_template | [CameraSensorTemplate](#ansys-api-speos-sensor-v1-CameraSensorTemplate) |  |  |
| irradiance_sensor_template | [IrradianceSensorTemplate](#ansys-api-speos-sensor-v1-IrradianceSensorTemplate) |  |  |
| radiance_sensor_template | [SensorTemplate.Radiance](#ansys-api-speos-sensor-v1-SensorTemplate-Radiance) |  |  |






<a name="ansys-api-speos-sensor-v1-SensorTemplate-MetadataEntry"></a>

### SensorTemplate.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="ansys-api-speos-sensor-v1-SensorTemplate-Radiance"></a>

### SensorTemplate.Radiance



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sensor_type_photometric | [SensorTypePhotometric](#ansys-api-speos-sensor-v1-SensorTypePhotometric) |  | Sensor type : Photometric |
| sensor_type_colorimetric | [SensorTypeColorimetric](#ansys-api-speos-sensor-v1-SensorTypeColorimetric) |  | Sensor type : Colorimetric |
| sensor_type_radiometric | [SensorTypeRadiometric](#ansys-api-speos-sensor-v1-SensorTypeRadiometric) |  | Sensor type : Radiometric |
| sensor_type_spectral | [SensorTypeSpectral](#ansys-api-speos-sensor-v1-SensorTypeSpectral) |  | Sensor type : Spectral |
| focal | [double](#double) |  | Observer type : focal (mm) |
| integration_angle | [double](#double) |  | Integration angle, in degree |
| dimensions | [SensorDimensions](#ansys-api-speos-sensor-v1-SensorDimensions) |  | Dimensions of the sensor |






<a name="ansys-api-speos-sensor-v1-Update_Request"></a>

### Update_Request
Request to update a SensorTemplate in SensorTemplatesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the SensorTemplate to be updated |
| sensor_template | [SensorTemplate](#ansys-api-speos-sensor-v1-SensorTemplate) |  | SensorTemplate that will be used for the update |






<a name="ansys-api-speos-sensor-v1-Update_Response"></a>

### Update_Response






 

 

 


<a name="ansys-api-speos-sensor-v1-SensorTemplatesManager"></a>

### SensorTemplatesManager


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Create | [Create_Request](#ansys-api-speos-sensor-v1-Create_Request) | [Create_Response](#ansys-api-speos-sensor-v1-Create_Response) | Create a SensorTemplate |
| Read | [Read_Request](#ansys-api-speos-sensor-v1-Read_Request) | [Read_Response](#ansys-api-speos-sensor-v1-Read_Response) | Read a SensorTemplate |
| Update | [Update_Request](#ansys-api-speos-sensor-v1-Update_Request) | [Update_Response](#ansys-api-speos-sensor-v1-Update_Response) | Update a SensorTemplate |
| Delete | [Delete_Request](#ansys-api-speos-sensor-v1-Delete_Request) | [Delete_Response](#ansys-api-speos-sensor-v1-Delete_Response) | Delete a SensorTemplate |
| List | [List_Request](#ansys-api-speos-sensor-v1-List_Request) | [List_Response](#ansys-api-speos-sensor-v1-List_Response) | List all SensorTemplates in manager |

 



<a name="ansys_api_speos_simulation_v1_simulation_template-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/simulation/v1/simulation_template.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="ansys-api-speos-simulation-v1-templates-Create_Request"></a>

### Create_Request
Request to create a SimulationTemplate in SimulationTemplatesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| simulation_template | [SimulationTemplate](#ansys-api-speos-simulation-v1-templates-SimulationTemplate) |  | SimulationTemplate containing its basic characteristics |






<a name="ansys-api-speos-simulation-v1-templates-Create_Response"></a>

### Create_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the SimulationTemplate created in SimulationTemplatesManager |






<a name="ansys-api-speos-simulation-v1-templates-Delete_Request"></a>

### Delete_Request
Request to delete a SimulationTemplate in SimulationTemplatesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the SimulationTemplate to be deleted |






<a name="ansys-api-speos-simulation-v1-templates-Delete_Response"></a>

### Delete_Response







<a name="ansys-api-speos-simulation-v1-templates-DirectMCSimulationTemplate"></a>

### DirectMCSimulationTemplate
The Direct Simulation is commonly used to analyze standard optical systems.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| geom_distance_tolerance | [double](#double) |  | Maximum distance in mm to consider two faces as tangent. |
| max_impact | [int32](#int32) |  | Define a value to determine the maximum number of ray impacts during propagation. When a ray has interacted N times with the geometry, the propagation of the ray stops. |
| weight | [Weight](#ansys-api-speos-simulation-v1-templates-Weight) |  | Activates Weight. Highly recommended to fill |
| colorimetric_standard | [EnumColorimetricStandard](#ansys-api-speos-simulation-v1-templates-EnumColorimetricStandard) |  | Default Colorimetric Standard |
| dispersion | [bool](#bool) |  | To activate the dispersion calculation. |
| fast_transmission_gathering | [bool](#bool) |  | To accelerate the simulation by neglecting the light refraction that occurs when the light is being transmitted though a transparent surface. |
| ambient_material_uri | [string](#string) |  | To define the environment in which the light will propagate (water, fog, smoke etc.). It is expressed in a .material file |






<a name="ansys-api-speos-simulation-v1-templates-InverseMCSimulationTemplate"></a>

### InverseMCSimulationTemplate
The Inverse Simulation allows to reverse the light trajectory direction. 
The propagation is done from the sensors to the sources. It is useful when needing to analyze optical systems where the sensors are small and the sources are diffuse.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| geom_distance_tolerance | [double](#double) |  | Maximum distance in mm to consider two faces as tangent. |
| max_impact | [int32](#int32) |  | Define a value to determine the maximum number of ray impacts during propagation. When a ray has interacted N times with the geometry, the propagation of the ray stops. |
| weight | [Weight](#ansys-api-speos-simulation-v1-templates-Weight) |  | Activates Weight. Highly recommended to fill |
| colorimetric_standard | [EnumColorimetricStandard](#ansys-api-speos-simulation-v1-templates-EnumColorimetricStandard) |  | Default Colorimetric Standard |
| dispersion | [bool](#bool) |  | To activate the dispersion calculation. |
| splitting | [bool](#bool) |  | To split each propagated ray into several paths at their first impact after leaving the observer point. |
| number_of_gathering_rays_per_source | [uint32](#uint32) |  | This number pilots the number of shadow rays to target at each source. |
| maximum_gathering_error | [uint32](#uint32) |  | This value defines the level below which a source can be neglected. 0, the default value means that no approximation will be done. |
| fast_transmission_gathering | [bool](#bool) |  | To accelerate the simulation by neglecting the light refraction that occurs when the light is being transmitted though a transparent surface. |
| ambient_material_uri | [string](#string) |  | To define the environment in which the light will propagate (water, fog, smoke etc.). It is expressed in a .material file |






<a name="ansys-api-speos-simulation-v1-templates-List_Request"></a>

### List_Request







<a name="ansys-api-speos-simulation-v1-templates-List_Response"></a>

### List_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guids | [string](#string) | repeated | Guids of the SimulationTemplates in SimulationTemplatesManager |






<a name="ansys-api-speos-simulation-v1-templates-Read_Request"></a>

### Read_Request
Request to read a SimulationTemplate in SimulationTemplatesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the SimulationTemplate to be read |






<a name="ansys-api-speos-simulation-v1-templates-Read_Response"></a>

### Read_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| simulation_template | [SimulationTemplate](#ansys-api-speos-simulation-v1-templates-SimulationTemplate) |  | SimulationTemplate corresponding to the guid given in Read_Request |






<a name="ansys-api-speos-simulation-v1-templates-SimulationTemplate"></a>

### SimulationTemplate
Simulation template with its basic characteristics


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Simulation name |
| description | [string](#string) |  | Simulation description |
| metadata | [SimulationTemplate.MetadataEntry](#ansys-api-speos-simulation-v1-templates-SimulationTemplate-MetadataEntry) | repeated | User defined metadatas |
| direct_mc_simulation_template | [DirectMCSimulationTemplate](#ansys-api-speos-simulation-v1-templates-DirectMCSimulationTemplate) |  |  |
| inverse_mc_simulation_template | [InverseMCSimulationTemplate](#ansys-api-speos-simulation-v1-templates-InverseMCSimulationTemplate) |  |  |
| interactive_simulation_template | [SimulationTemplate.Interactive](#ansys-api-speos-simulation-v1-templates-SimulationTemplate-Interactive) |  |  |






<a name="ansys-api-speos-simulation-v1-templates-SimulationTemplate-Interactive"></a>

### SimulationTemplate.Interactive



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| geom_distance_tolerance | [double](#double) |  | Maximum distance in mm to consider two faces as tangent. |
| max_impact | [int32](#int32) |  | Define a value to determine the maximum number of ray impacts during propagation. When a ray has interacted N times with the geometry, the propagation of the ray stops. |
| weight | [Weight](#ansys-api-speos-simulation-v1-templates-Weight) |  | Activates Weight. Highly recommended to fill |
| colorimetric_standard | [EnumColorimetricStandard](#ansys-api-speos-simulation-v1-templates-EnumColorimetricStandard) |  | Default Colorimetric Standard |
| ambient_material_uri | [string](#string) |  | To define the environment in which the light will propagate (water, fog, smoke etc.). It is expressed in a .material file |






<a name="ansys-api-speos-simulation-v1-templates-SimulationTemplate-MetadataEntry"></a>

### SimulationTemplate.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="ansys-api-speos-simulation-v1-templates-Update_Request"></a>

### Update_Request
Request to update a SimulationTemplate in SimulationTemplatesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the SimulationTemplate to be updated |
| simulation_template | [SimulationTemplate](#ansys-api-speos-simulation-v1-templates-SimulationTemplate) |  | SimulationTemplate that will be use for the update |






<a name="ansys-api-speos-simulation-v1-templates-Update_Response"></a>

### Update_Response







<a name="ansys-api-speos-simulation-v1-templates-Weight"></a>

### Weight
The Weight represents the ray energy. In real life, a ray looses some energy (power) when it interacts with an object.
Activating weight means that the Weight message is present.
When weight is not activated, rays&#39; energy stay constant and probability laws dictate if they continue or stop propagating.
When weight is activated, the ray&#39;s energy evolves with interactions until they reach the sensors.
It is highly recommended to fill this parameter excepted in interactive simulation.
Not fill this parameter is useful to understand certain phenomena as absorption.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| minimum_energy_percentage | [double](#double) |  | The Minimum energy percentage parameter defines the minimum energy ratio to continue to propagate a ray with weight. |





 


<a name="ansys-api-speos-simulation-v1-templates-EnumColorimetricStandard"></a>

### EnumColorimetricStandard
Default Colorimetric Standard

| Name | Number | Description |
| ---- | ------ | ----------- |
| CIE_1931 | 0 | 2 degrees CIE Standard Colorimetric Observer Data. |
| CIE_1964 | 1 | 10 degrees CIE Standard Colorimetric Observer Data. |


 

 


<a name="ansys-api-speos-simulation-v1-templates-SimulationTemplatesManager"></a>

### SimulationTemplatesManager


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Create | [Create_Request](#ansys-api-speos-simulation-v1-templates-Create_Request) | [Create_Response](#ansys-api-speos-simulation-v1-templates-Create_Response) | Create a SimulationTemplate |
| Read | [Read_Request](#ansys-api-speos-simulation-v1-templates-Read_Request) | [Read_Response](#ansys-api-speos-simulation-v1-templates-Read_Response) | Read a SimulationTemplate |
| Update | [Update_Request](#ansys-api-speos-simulation-v1-templates-Update_Request) | [Update_Response](#ansys-api-speos-simulation-v1-templates-Update_Response) | Update a SimulationTemplate |
| Delete | [Delete_Request](#ansys-api-speos-simulation-v1-templates-Delete_Request) | [Delete_Response](#ansys-api-speos-simulation-v1-templates-Delete_Response) | Delete a SimulationTemplate |
| List | [List_Request](#ansys-api-speos-simulation-v1-templates-List_Request) | [List_Response](#ansys-api-speos-simulation-v1-templates-List_Response) | List all SimulationTemplates in manager |

 



<a name="ansys_api_speos_sop_v1_sop-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/sop/v1/sop.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. ANSYS Confidential Information


<a name="ansys-api-speos-sop-v1-Create_Request"></a>

### Create_Request
Request to create a SOPTemplate in SOPTemplatesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sop_template | [SOPTemplate](#ansys-api-speos-sop-v1-SOPTemplate) |  | SOPTemplate containing its basic characteristics |






<a name="ansys-api-speos-sop-v1-Create_Response"></a>

### Create_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the SOPTemplate created in SOPTemplatesManager |






<a name="ansys-api-speos-sop-v1-Delete_Request"></a>

### Delete_Request
Request to delete a SOPTemplate in SOPTemplatesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the SOPTemplate to be deleted |






<a name="ansys-api-speos-sop-v1-Delete_Response"></a>

### Delete_Response







<a name="ansys-api-speos-sop-v1-List_Request"></a>

### List_Request







<a name="ansys-api-speos-sop-v1-List_Response"></a>

### List_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guids | [string](#string) | repeated | Guids of the SOPTemplates in SOPTemplatesManager |






<a name="ansys-api-speos-sop-v1-Read_Request"></a>

### Read_Request
Request to read a SOPTemplate in SOPTemplatesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the SOPTemplate to be read |






<a name="ansys-api-speos-sop-v1-Read_Response"></a>

### Read_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sop_template | [SOPTemplate](#ansys-api-speos-sop-v1-SOPTemplate) |  | SOPTemplate corresponding to the guid given in Read_Request |






<a name="ansys-api-speos-sop-v1-SOPTemplate"></a>

### SOPTemplate
SOP: Surface Optical Properties
Defines the behavior of light rays when they hit the surface of a body.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | SOPTemplate name |
| description | [string](#string) |  | SOPTemplate description |
| metadata | [SOPTemplate.MetadataEntry](#ansys-api-speos-sop-v1-SOPTemplate-MetadataEntry) | repeated | User defined metadatas |
| mirror | [SOPTemplate.Mirror](#ansys-api-speos-sop-v1-SOPTemplate-Mirror) |  | Perfect specular surface |
| optical_polished | [SOPTemplate.OpticalPolished](#ansys-api-speos-sop-v1-SOPTemplate-OpticalPolished) |  | Transparent or perfectly polished material (glass, plastic) |
| library | [SOPTemplate.Library](#ansys-api-speos-sop-v1-SOPTemplate-Library) |  | Based on surface optical properties file |
| plugin | [SOPTemplate.Plugin](#ansys-api-speos-sop-v1-SOPTemplate-Plugin) |  | Custom made plug-in |






<a name="ansys-api-speos-sop-v1-SOPTemplate-Library"></a>

### SOPTemplate.Library



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| sop_file_uri | [string](#string) |  | Surface optical properties file, *.scattering, *.bsdf, *.brdf, *.coated, ... |






<a name="ansys-api-speos-sop-v1-SOPTemplate-MetadataEntry"></a>

### SOPTemplate.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="ansys-api-speos-sop-v1-SOPTemplate-Mirror"></a>

### SOPTemplate.Mirror
Perfect specular surface


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| reflectance | [double](#double) |  | Reflectance, expected from 0. to 100. in % |






<a name="ansys-api-speos-sop-v1-SOPTemplate-OpticalPolished"></a>

### SOPTemplate.OpticalPolished
Transparent or perfectly polished material (glass, plastic)






<a name="ansys-api-speos-sop-v1-SOPTemplate-Plugin"></a>

### SOPTemplate.Plugin
Custom made plug-in


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| plugin_sop_file_uri | [string](#string) |  | .sop plug-in |
| parameters_file_uri | [string](#string) |  | parameters file needed for the plug-in |






<a name="ansys-api-speos-sop-v1-Update_Request"></a>

### Update_Request
Request to update a SOPTemplate in SOPTemplatesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the SOPTemplate to be updated |
| sop_template | [SOPTemplate](#ansys-api-speos-sop-v1-SOPTemplate) |  | SOPTemplate that will be used for the update |






<a name="ansys-api-speos-sop-v1-Update_Response"></a>

### Update_Response






 

 

 


<a name="ansys-api-speos-sop-v1-SOPTemplateActions"></a>

### SOPTemplateActions
Actions available on a SOPTemplate

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|


<a name="ansys-api-speos-sop-v1-SOPTemplatesManager"></a>

### SOPTemplatesManager
Manager for SOPTemplates (SOP: Surface Optical Properties)

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Create | [Create_Request](#ansys-api-speos-sop-v1-Create_Request) | [Create_Response](#ansys-api-speos-sop-v1-Create_Response) | Create a SOPTemplate |
| Read | [Read_Request](#ansys-api-speos-sop-v1-Read_Request) | [Read_Response](#ansys-api-speos-sop-v1-Read_Response) | Read a SOPTemplate |
| Update | [Update_Request](#ansys-api-speos-sop-v1-Update_Request) | [Update_Response](#ansys-api-speos-sop-v1-Update_Response) | Update a SOPTemplate |
| Delete | [Delete_Request](#ansys-api-speos-sop-v1-Delete_Request) | [Delete_Response](#ansys-api-speos-sop-v1-Delete_Response) | Delete a SOPTemplate |
| List | [List_Request](#ansys-api-speos-sop-v1-List_Request) | [List_Response](#ansys-api-speos-sop-v1-List_Response) | List all SOPTemplates in manager |

 



<a name="ansys_api_speos_source_v1_source-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/source/v1/source.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. ANSYS Confidential Information


<a name="ansys-api-speos-source-v1-Create_Request"></a>

### Create_Request
Request to create a SourceTemplate in SourceTemplatesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| source_template | [SourceTemplate](#ansys-api-speos-source-v1-SourceTemplate) |  | SourceTemplate containing its basic characteristics |






<a name="ansys-api-speos-source-v1-Create_Response"></a>

### Create_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the SourceTemplate created in SourceTemplatesManager |






<a name="ansys-api-speos-source-v1-Delete_Request"></a>

### Delete_Request
Request to delete a SourceTemplate in SourceTemplatesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the SourceTemplate to be deleted |






<a name="ansys-api-speos-source-v1-Delete_Response"></a>

### Delete_Response







<a name="ansys-api-speos-source-v1-GetRayFileInfo_Request"></a>

### GetRayFileInfo_Request
Request of GetRayFileInfo


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the SourceTemplate to get information about ray file (example: flux). Only for SourceTemplate of type RayFile. |






<a name="ansys-api-speos-source-v1-GetRayFileInfo_Response"></a>

### GetRayFileInfo_Response
Response of GetRayFileInfo


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| flux | [ansys.api.speos.common.v1.DataDoubles](#ansys-api-speos-common-v1-DataDoubles) |  | Flux of the ray file |






<a name="ansys-api-speos-source-v1-List_Request"></a>

### List_Request







<a name="ansys-api-speos-source-v1-List_Response"></a>

### List_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guids | [string](#string) | repeated | Guids of the SourceTemplates in SourceTemplatesManager |






<a name="ansys-api-speos-source-v1-Read_Request"></a>

### Read_Request
Request to read a SourceTemplate in SourceTemplatesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the SourceTemplate to be read |






<a name="ansys-api-speos-source-v1-Read_Response"></a>

### Read_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| source_template | [SourceTemplate](#ansys-api-speos-source-v1-SourceTemplate) |  | SourceTemplate corresponding to the guid given in Read_Request |






<a name="ansys-api-speos-source-v1-SourceTemplate"></a>

### SourceTemplate
Source template with its basic characteristics


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | SourceTemplate name |
| description | [string](#string) |  | SourceTemplate description |
| metadata | [SourceTemplate.MetadataEntry](#ansys-api-speos-source-v1-SourceTemplate-MetadataEntry) | repeated | User defined metadatas |
| luminaire | [SourceTemplate.Luminaire](#ansys-api-speos-source-v1-SourceTemplate-Luminaire) |  |  |
| surface | [SourceTemplate.Surface](#ansys-api-speos-source-v1-SourceTemplate-Surface) |  |  |
| rayfile | [SourceTemplate.RayFile](#ansys-api-speos-source-v1-SourceTemplate-RayFile) |  |  |






<a name="ansys-api-speos-source-v1-SourceTemplate-FromIntensityFile"></a>

### SourceTemplate.FromIntensityFile
Flux messages






<a name="ansys-api-speos-source-v1-SourceTemplate-FromRayFile"></a>

### SourceTemplate.FromRayFile







<a name="ansys-api-speos-source-v1-SourceTemplate-Luminaire"></a>

### SourceTemplate.Luminaire



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| flux_from_intensity_file | [SourceTemplate.FromIntensityFile](#ansys-api-speos-source-v1-SourceTemplate-FromIntensityFile) |  | Take flux from intensity file provided |
| luminous_flux | [SourceTemplate.Luminous](#ansys-api-speos-source-v1-SourceTemplate-Luminous) |  | Luminous flux in lumens, must be positive |
| radiant_flux | [SourceTemplate.Radiant](#ansys-api-speos-source-v1-SourceTemplate-Radiant) |  | Radiant flux in watts, must be positive |
| intensity_file_uri | [string](#string) |  | IES or EULUMDAT format file uri |
| spectrum_guid | [string](#string) |  | Spectrum guid in spectrum manager |






<a name="ansys-api-speos-source-v1-SourceTemplate-Luminous"></a>

### SourceTemplate.Luminous



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| luminous_value | [double](#double) |  | Luminous flux in lumens |






<a name="ansys-api-speos-source-v1-SourceTemplate-LuminousIntensity"></a>

### SourceTemplate.LuminousIntensity



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| luminous_intensity_value | [double](#double) |  | Luminous intensity in candelas |






<a name="ansys-api-speos-source-v1-SourceTemplate-MetadataEntry"></a>

### SourceTemplate.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="ansys-api-speos-source-v1-SourceTemplate-Radiant"></a>

### SourceTemplate.Radiant



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| radiant_value | [double](#double) |  | Radiant flux in watts |






<a name="ansys-api-speos-source-v1-SourceTemplate-RayFile"></a>

### SourceTemplate.RayFile



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| ray_file_uri | [string](#string) |  | Rayfile format file uri (.ray or .tm25ray files expected) |
| flux_from_ray_file | [SourceTemplate.FromRayFile](#ansys-api-speos-source-v1-SourceTemplate-FromRayFile) |  | Take flux from ray file provided |
| luminous_flux | [SourceTemplate.Luminous](#ansys-api-speos-source-v1-SourceTemplate-Luminous) |  | Luminous flux in lumens, must be positive |
| radiant_flux | [SourceTemplate.Radiant](#ansys-api-speos-source-v1-SourceTemplate-Radiant) |  | Radiant flux in watts, must be positive |
| spectrum_from_ray_file | [SourceTemplate.RayFile.SpectrumFromRayFile](#ansys-api-speos-source-v1-SourceTemplate-RayFile-SpectrumFromRayFile) |  | Take spectrum from ray file provided |
| spectrum_guid | [string](#string) |  | Spectrum guid in spectrum manager |






<a name="ansys-api-speos-source-v1-SourceTemplate-RayFile-SpectrumFromRayFile"></a>

### SourceTemplate.RayFile.SpectrumFromRayFile
Spectrum messages






<a name="ansys-api-speos-source-v1-SourceTemplate-Surface"></a>

### SourceTemplate.Surface



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| flux_from_intensity_file | [SourceTemplate.FromIntensityFile](#ansys-api-speos-source-v1-SourceTemplate-FromIntensityFile) |  | Take flux from intensity file provided |
| luminous_flux | [SourceTemplate.Luminous](#ansys-api-speos-source-v1-SourceTemplate-Luminous) |  | Luminous flux in lumens |
| radiant_flux | [SourceTemplate.Radiant](#ansys-api-speos-source-v1-SourceTemplate-Radiant) |  | Radiant flux in watts |
| luminous_intensity_flux | [SourceTemplate.LuminousIntensity](#ansys-api-speos-source-v1-SourceTemplate-LuminousIntensity) |  | Luminous intensity in candelas |
| intensity_guid | [string](#string) |  | Intensity guid in intensity manager |
| exitance_constant | [SourceTemplate.Surface.ExitanceConstant](#ansys-api-speos-source-v1-SourceTemplate-Surface-ExitanceConstant) |  | Constant |
| exitance_variable | [SourceTemplate.Surface.ExitanceVariable](#ansys-api-speos-source-v1-SourceTemplate-Surface-ExitanceVariable) |  | Taken from XMP map |
| spectrum_from_xmp_file | [SourceTemplate.Surface.SpectrumFromXMPFile](#ansys-api-speos-source-v1-SourceTemplate-Surface-SpectrumFromXMPFile) |  | Take spectrum from xmp file provided |
| spectrum_guid | [string](#string) |  | Spectrum guid in spectrum manager |






<a name="ansys-api-speos-source-v1-SourceTemplate-Surface-ExitanceConstant"></a>

### SourceTemplate.Surface.ExitanceConstant







<a name="ansys-api-speos-source-v1-SourceTemplate-Surface-ExitanceVariable"></a>

### SourceTemplate.Surface.ExitanceVariable
Exitance messages


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| exitance_xmp_file_uri | [string](#string) |  | XMP file describing exitance, if spectral, spectrum is not needed in source definition |






<a name="ansys-api-speos-source-v1-SourceTemplate-Surface-SpectrumFromXMPFile"></a>

### SourceTemplate.Surface.SpectrumFromXMPFile
Spectrum messages






<a name="ansys-api-speos-source-v1-Update_Request"></a>

### Update_Request
Request to update a SourceTemplate in SourceTemplatesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the SourceTemplate to be updated |
| source_template | [SourceTemplate](#ansys-api-speos-source-v1-SourceTemplate) |  | SourceTemplate that will be used for the update |






<a name="ansys-api-speos-source-v1-Update_Response"></a>

### Update_Response






 

 

 


<a name="ansys-api-speos-source-v1-SourceTemplateActions"></a>

### SourceTemplateActions
Actions available on a SourceTemplate

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetRayFileInfo | [GetRayFileInfo_Request](#ansys-api-speos-source-v1-GetRayFileInfo_Request) | [GetRayFileInfo_Response](#ansys-api-speos-source-v1-GetRayFileInfo_Response) | Get Flux from ray file |


<a name="ansys-api-speos-source-v1-SourceTemplatesManager"></a>

### SourceTemplatesManager
Manager for SourceTemplates

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Create | [Create_Request](#ansys-api-speos-source-v1-Create_Request) | [Create_Response](#ansys-api-speos-source-v1-Create_Response) | Create a SourceTemplate |
| Read | [Read_Request](#ansys-api-speos-source-v1-Read_Request) | [Read_Response](#ansys-api-speos-source-v1-Read_Response) | Read a SourceTemplate |
| Update | [Update_Request](#ansys-api-speos-source-v1-Update_Request) | [Update_Response](#ansys-api-speos-source-v1-Update_Response) | Update a SourceTemplate |
| Delete | [Delete_Request](#ansys-api-speos-source-v1-Delete_Request) | [Delete_Response](#ansys-api-speos-source-v1-Delete_Response) | Delete a SourceTemplate |
| List | [List_Request](#ansys-api-speos-source-v1-List_Request) | [List_Response](#ansys-api-speos-source-v1-List_Response) | List all SourceTemplates in manager |

 



<a name="ansys_api_speos_spectrum_v1_spectrum-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/spectrum/v1/spectrum.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="ansys-api-speos-spectrum-v1-Create_Request"></a>

### Create_Request
Request to create a Spectrum in SpectrumsManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| spectrum | [Spectrum](#ansys-api-speos-spectrum-v1-Spectrum) |  | Spectrum containing its basic characteristics |






<a name="ansys-api-speos-spectrum-v1-Create_Response"></a>

### Create_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Spectrum created in SpectrumsManager |






<a name="ansys-api-speos-spectrum-v1-Delete_Request"></a>

### Delete_Request
Request to delete a Spectrum in SpectrumsManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Spectrum to be deleted |






<a name="ansys-api-speos-spectrum-v1-Delete_Response"></a>

### Delete_Response







<a name="ansys-api-speos-spectrum-v1-List_Request"></a>

### List_Request







<a name="ansys-api-speos-spectrum-v1-List_Response"></a>

### List_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guids | [string](#string) | repeated | Guids of the Spectrums in SpectrumsManager |






<a name="ansys-api-speos-spectrum-v1-Read_Request"></a>

### Read_Request
Request to read a Spectrum in SpectrumsManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Spectrum to be read |






<a name="ansys-api-speos-spectrum-v1-Read_Response"></a>

### Read_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| spectrum | [Spectrum](#ansys-api-speos-spectrum-v1-Spectrum) |  | Spectrum corresponding to the guid given in Read_Request |






<a name="ansys-api-speos-spectrum-v1-Spectrum"></a>

### Spectrum
Spectrum with its basic characteristics


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | Spectrum name |
| description | [string](#string) |  | Spectrum descrition |
| metadata | [Spectrum.MetadataEntry](#ansys-api-speos-spectrum-v1-Spectrum-MetadataEntry) | repeated | User defined metadatas |
| monochromatic | [Spectrum.Monochromatic](#ansys-api-speos-spectrum-v1-Spectrum-Monochromatic) |  |  |
| blackbody | [Spectrum.BlackBody](#ansys-api-speos-spectrum-v1-Spectrum-BlackBody) |  |  |
| sampled | [Spectrum.Sampled](#ansys-api-speos-spectrum-v1-Spectrum-Sampled) |  |  |
| library | [Spectrum.Library](#ansys-api-speos-spectrum-v1-Spectrum-Library) |  |  |
| predefined | [Spectrum.Predefined](#ansys-api-speos-spectrum-v1-Spectrum-Predefined) |  |  |






<a name="ansys-api-speos-spectrum-v1-Spectrum-BlackBody"></a>

### Spectrum.BlackBody



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| temperature | [double](#double) |  | Temperature of the blackbody, in K |






<a name="ansys-api-speos-spectrum-v1-Spectrum-DaylightFluorescent"></a>

### Spectrum.DaylightFluorescent







<a name="ansys-api-speos-spectrum-v1-Spectrum-Halogen"></a>

### Spectrum.Halogen







<a name="ansys-api-speos-spectrum-v1-Spectrum-HighPressureSodium"></a>

### Spectrum.HighPressureSodium







<a name="ansys-api-speos-spectrum-v1-Spectrum-Incandescent"></a>

### Spectrum.Incandescent







<a name="ansys-api-speos-spectrum-v1-Spectrum-Library"></a>

### Spectrum.Library



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| file_uri | [string](#string) |  | uri of the spectrum file |






<a name="ansys-api-speos-spectrum-v1-Spectrum-MetadataEntry"></a>

### Spectrum.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="ansys-api-speos-spectrum-v1-Spectrum-MetalHalide"></a>

### Spectrum.MetalHalide







<a name="ansys-api-speos-spectrum-v1-Spectrum-Monochromatic"></a>

### Spectrum.Monochromatic



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| wavelength | [double](#double) |  | Wavelength of the monochromatic spectrum, in nm |






<a name="ansys-api-speos-spectrum-v1-Spectrum-Predefined"></a>

### Spectrum.Predefined
Predefined sampled spectrums


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| incandescent | [Spectrum.Incandescent](#ansys-api-speos-spectrum-v1-Spectrum-Incandescent) |  |  |
| warmwhitefluorescent | [Spectrum.WarmWhiteFluorescent](#ansys-api-speos-spectrum-v1-Spectrum-WarmWhiteFluorescent) |  |  |
| daylightfluorescent | [Spectrum.DaylightFluorescent](#ansys-api-speos-spectrum-v1-Spectrum-DaylightFluorescent) |  |  |
| whiteLED | [Spectrum.WhiteLED](#ansys-api-speos-spectrum-v1-Spectrum-WhiteLED) |  |  |
| halogen | [Spectrum.Halogen](#ansys-api-speos-spectrum-v1-Spectrum-Halogen) |  |  |
| metalhalide | [Spectrum.MetalHalide](#ansys-api-speos-spectrum-v1-Spectrum-MetalHalide) |  |  |
| highpressuresodium | [Spectrum.HighPressureSodium](#ansys-api-speos-spectrum-v1-Spectrum-HighPressureSodium) |  |  |






<a name="ansys-api-speos-spectrum-v1-Spectrum-Sampled"></a>

### Spectrum.Sampled



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| wavelengths | [double](#double) | repeated | List of wavelengths, in nm |
| values | [double](#double) | repeated | List of values, expected from 0. to 100. in % |






<a name="ansys-api-speos-spectrum-v1-Spectrum-WarmWhiteFluorescent"></a>

### Spectrum.WarmWhiteFluorescent







<a name="ansys-api-speos-spectrum-v1-Spectrum-WhiteLED"></a>

### Spectrum.WhiteLED







<a name="ansys-api-speos-spectrum-v1-Update_Request"></a>

### Update_Request
Request to update a Spectrum in SpectrumsManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the Spectrum to be updated |
| spectrum | [Spectrum](#ansys-api-speos-spectrum-v1-Spectrum) |  | Spectrum that will be used for the update |






<a name="ansys-api-speos-spectrum-v1-Update_Response"></a>

### Update_Response






 

 

 


<a name="ansys-api-speos-spectrum-v1-SpectrumsManager"></a>

### SpectrumsManager


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Create | [Create_Request](#ansys-api-speos-spectrum-v1-Create_Request) | [Create_Response](#ansys-api-speos-spectrum-v1-Create_Response) | Create a Spectrum |
| Read | [Read_Request](#ansys-api-speos-spectrum-v1-Read_Request) | [Read_Response](#ansys-api-speos-spectrum-v1-Read_Response) | Read a Spectrum |
| Update | [Update_Request](#ansys-api-speos-spectrum-v1-Update_Request) | [Update_Response](#ansys-api-speos-spectrum-v1-Update_Response) | Update a Spectrum |
| Delete | [Delete_Request](#ansys-api-speos-spectrum-v1-Delete_Request) | [Delete_Response](#ansys-api-speos-spectrum-v1-Delete_Response) | Delete a Spectrum |
| List | [List_Request](#ansys-api-speos-spectrum-v1-List_Request) | [List_Response](#ansys-api-speos-spectrum-v1-List_Response) | List all Spectrums in manager |

 



<a name="ansys_api_speos_vop_v1_vop-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/vop/v1/vop.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited. ANSYS Confidential Information


<a name="ansys-api-speos-vop-v1-Create_Request"></a>

### Create_Request
Request to create a VOPTemplate in VOPTemplatesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vop_template | [VOPTemplate](#ansys-api-speos-vop-v1-VOPTemplate) |  | VOPTemplate containing its basic characteristics |






<a name="ansys-api-speos-vop-v1-Create_Response"></a>

### Create_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the VOPTemplate created in VOPTemplatesManager |






<a name="ansys-api-speos-vop-v1-Delete_Request"></a>

### Delete_Request
Request to delete a VOPTemplate in VOPTemplatesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the VOPTemplate to be deleted |






<a name="ansys-api-speos-vop-v1-Delete_Response"></a>

### Delete_Response







<a name="ansys-api-speos-vop-v1-List_Request"></a>

### List_Request







<a name="ansys-api-speos-vop-v1-List_Response"></a>

### List_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guids | [string](#string) | repeated | Guids of the VOPTemplates in VOPTemplatesManager |






<a name="ansys-api-speos-vop-v1-Read_Request"></a>

### Read_Request
Request to read a VOPTemplate in VOPTemplatesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the VOPTemplate to be read |






<a name="ansys-api-speos-vop-v1-Read_Response"></a>

### Read_Response



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| vop_template | [VOPTemplate](#ansys-api-speos-vop-v1-VOPTemplate) |  | VOPTemplate corresponding to the guid given in Read_Request |






<a name="ansys-api-speos-vop-v1-Update_Request"></a>

### Update_Request
Request to update a VOPTemplate in VOPTemplatesManager


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| guid | [string](#string) |  | Guid of the VOPTemplate to be updated |
| vop_template | [VOPTemplate](#ansys-api-speos-vop-v1-VOPTemplate) |  | VOPTemplate that will be used for the update |






<a name="ansys-api-speos-vop-v1-Update_Response"></a>

### Update_Response







<a name="ansys-api-speos-vop-v1-VOPTemplate"></a>

### VOPTemplate
VOP: Volume Optical Properties
Defines the behavior of light rays when they are propagated in a body.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| name | [string](#string) |  | VOPTemplate name |
| description | [string](#string) |  | VOPTemplate description |
| metadata | [VOPTemplate.MetadataEntry](#ansys-api-speos-vop-v1-VOPTemplate-MetadataEntry) | repeated | User defined metadatas |
| opaque | [VOPTemplate.Opaque](#ansys-api-speos-vop-v1-VOPTemplate-Opaque) |  | Non transparent material |
| optic | [VOPTemplate.Optic](#ansys-api-speos-vop-v1-VOPTemplate-Optic) |  | Transparent colorless material without bulk scattering |
| library | [VOPTemplate.Library](#ansys-api-speos-vop-v1-VOPTemplate-Library) |  | Based on *.material file |
| non_homogeneous | [VOPTemplate.NonHomogeneous](#ansys-api-speos-vop-v1-VOPTemplate-NonHomogeneous) |  | Material with non-homogeneous refractive index |






<a name="ansys-api-speos-vop-v1-VOPTemplate-Library"></a>

### VOPTemplate.Library



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| material_file_uri | [string](#string) |  | .material file |






<a name="ansys-api-speos-vop-v1-VOPTemplate-MetadataEntry"></a>

### VOPTemplate.MetadataEntry



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| key | [string](#string) |  |  |
| value | [string](#string) |  |  |






<a name="ansys-api-speos-vop-v1-VOPTemplate-NonHomogeneous"></a>

### VOPTemplate.NonHomogeneous
Material with non-homogeneous refractive index


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| gradedmaterial_file_uri | [string](#string) |  | .gradedmaterial file that describes the spectral variations of refractive index and absorption with the respect to position in space |






<a name="ansys-api-speos-vop-v1-VOPTemplate-Opaque"></a>

### VOPTemplate.Opaque
Non transparent material






<a name="ansys-api-speos-vop-v1-VOPTemplate-Optic"></a>

### VOPTemplate.Optic
Transparent colorless material without bulk scattering


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| index | [double](#double) |  | Refractive index |
| absorption | [double](#double) |  |  |
| constringence | [double](#double) | optional | Abbe number |





 

 

 


<a name="ansys-api-speos-vop-v1-VOPTemplateActions"></a>

### VOPTemplateActions
Actions available on a VOPTemplate

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|


<a name="ansys-api-speos-vop-v1-VOPTemplatesManager"></a>

### VOPTemplatesManager
Manager for VOPTemplates (VOP: Volume Optical Properties)

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Create | [Create_Request](#ansys-api-speos-vop-v1-Create_Request) | [Create_Response](#ansys-api-speos-vop-v1-Create_Response) | Create a VOPTemplate |
| Read | [Read_Request](#ansys-api-speos-vop-v1-Read_Request) | [Read_Response](#ansys-api-speos-vop-v1-Read_Response) | Read a VOPTemplate |
| Update | [Update_Request](#ansys-api-speos-vop-v1-Update_Request) | [Update_Response](#ansys-api-speos-vop-v1-Update_Response) | Update a VOPTemplate |
| Delete | [Delete_Request](#ansys-api-speos-vop-v1-Delete_Request) | [Delete_Response](#ansys-api-speos-vop-v1-Delete_Response) | Delete a VOPTemplate |
| List | [List_Request](#ansys-api-speos-vop-v1-List_Request) | [List_Response](#ansys-api-speos-vop-v1-List_Response) | List all VOPTemplates in manager |

 



<a name="ansys_api_speos_xmp_v1_xmp_file-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## ansys/api/speos/xmp/v1/xmp_file.proto
(c) 2025 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.


<a name="ansys-api-speos-xmp-v1-Coordinate2d"></a>

### Coordinate2d



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pixel_x | [uint32](#uint32) |  |  |
| pixel_y | [uint32](#uint32) |  |  |






<a name="ansys-api-speos-xmp-v1-FileName"></a>

### FileName



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| file_name | [string](#string) |  |  |






<a name="ansys-api-speos-xmp-v1-Pixel"></a>

### Pixel



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| nb_pixel | [uint32](#uint32) |  |  |






<a name="ansys-api-speos-xmp-v1-Value"></a>

### Value



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| value | [float](#float) |  |  |





 

 

 


<a name="ansys-api-speos-xmp-v1-XmpFileService_Mono"></a>

### XmpFileService_Mono
service to manage xmp file

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| CreateXMPFileInfo | [FileName](#ansys-api-speos-xmp-v1-FileName) | [.google.protobuf.Empty](#google-protobuf-Empty) | ! @brief Create Xmp file Info @param[in] FileName The Path to the Xmp file. |
| BuildMapRelativeStandardError | [.google.protobuf.Empty](#google-protobuf-Empty) | [.google.protobuf.Empty](#google-protobuf-Empty) | ! @brief Build Relative Standard Error accessor Xmp file |
| GetValueRelativeStandardError | [Coordinate2d](#ansys-api-speos-xmp-v1-Coordinate2d) | [Value](#ansys-api-speos-xmp-v1-Value) | ! @brief Get Value Relative Standard Error file |
| GetNbPixelXRelativeStandardError | [.google.protobuf.Empty](#google-protobuf-Empty) | [Pixel](#ansys-api-speos-xmp-v1-Pixel) | ! @brief Get Nb pixel X Relative Standard Error file |
| GetNbPixelYRelativeStandardError | [.google.protobuf.Empty](#google-protobuf-Empty) | [Pixel](#ansys-api-speos-xmp-v1-Pixel) | ! @brief Get Nb pixel Y Relative Standard Error file |
| ExportXmpFileRelativeStandardError | [FileName](#ansys-api-speos-xmp-v1-FileName) | [.google.protobuf.Empty](#google-protobuf-Empty) | ! @brief Export Xmp File Relative Standard Error |

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

