# Namespace ZOSAPI::SystemData

<a id="namespace_z_o_s_a_p_i_1_1_system_data"></a>

![][C#]

**Definition**:


## Classes

* [ZOSAPI::SystemData::IField](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_field)
* [ZOSAPI::SystemData::IFields](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_fields)
* [ZOSAPI::SystemData::ISDAdvancedData](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_advanced_data)
* [ZOSAPI::SystemData::ISDApertureData](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data)
* [ZOSAPI::SystemData::ISDEnvironmentData](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_environment_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_environment_data)
* [ZOSAPI::SystemData::ISDFiles](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_files)
* [ZOSAPI::SystemData::ISDMaterialCatalogData](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_material_catalog_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_material_catalog_data)
* [ZOSAPI::SystemData::ISDNamedFilters](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_named_filters.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_named_filters)
* [ZOSAPI::SystemData::ISDNonSeqData](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_non_seq_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_non_seq_data)
* [ZOSAPI::SystemData::ISDPolarizationData](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_polarization_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_polarization_data)
* [ZOSAPI::SystemData::ISDRayAimingData](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data)
* [ZOSAPI::SystemData::ISDTitleNotes](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_title_notes.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_title_notes)
* [ZOSAPI::SystemData::ISDUnitsData](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_units_data)
* [ZOSAPI::SystemData::ISurfaceSelection](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_surface_selection.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_surface_selection)
* [ZOSAPI::SystemData::ISystemData](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_system_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_system_data)
* [ZOSAPI::SystemData::IWavelength](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelength.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelength)
* [ZOSAPI::SystemData::IWavelengths](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelengths.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelengths)

## Enumeration types

### Enumeration type ZemaxSystemUnits

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1aee6855a5e7c0b638c250e8f0214ca6aa"></a>

![][public]

**Definition**:


```csharp
enum ZemaxSystemUnits {
  Millimeters = 0,
  Centimeters = 1,
  Inches = 2,
  Meters = 3
}
```


Usage (see [Example 11](../apiexamples/example_11.md) for a full sample)


C# 
```csharp
            // Set system lens units to inches, scale all values with Scale Lens tool
            // For demonstration only. This file is new, so it has default units mm.
            ZemaxSystemUnits unit = TheSystemData.Units.LensUnits;
            // Open Scale Lens tool
            ScaleLens = TheSystem.Tools.OpenScale();
            // Apply Tool Settings
            ScaleLens.ScaleByUnits = true;
            ScaleLens.ScaleToUnit = ScaleToUnits.Inches;
            ScaleLens.RunAndWaitForCompletion();
            ScaleLens.Close();
```
 C++ 
```csharp
    // Set system lens units to inches, scale all values with Scale Lens tool
    // For demonstration only. This file is new, so it has default units mm.
    ZemaxSystemUnits unit = TheSystemData->Units->LensUnits;
    // Open Scale Lens tool
    IScalePtr ScaleLens = TheSystem->Tools->OpenScale();
    // Apply Tool Settings
    ScaleLens->ScaleByUnits = true;
    ScaleLens->ScaleToUnit = ScaleToUnits_Inches;
    ISystemToolPtr baseTool = ScaleLens;
    baseTool->RunAndWaitForCompletion();
    baseTool->Close();
```
 Matlab 
```csharp
    % Set system lens units to inches, scale all values with Scale Lens tool
    unit = TheSystemData.Units.LensUnits;  % For demonstration only. This file is new, so it has default units mm.
    ScaleLens = TheSystem.Tools.OpenScale();  % Open Scale Lens tool
    % Apply Tool Settings
    ScaleLens.ScaleByUnits = true;
    ScaleLens.ScaleToUnit = ZOSAPI.Tools.General.ScaleToUnits.Inches;
    ScaleLens.RunAndWaitForCompletion();
    ScaleLens.Close();
```
 Python 
```csharp
    # Set system lens units to inches, scale all values with Scale Lens tool
    unit = TheSystemData.Units.LensUnits  # For demonstration only. This file is new, so it has default units mm.
    ScaleLens = TheSystem.Tools.OpenScale()  # Open Scale Lens tool
    # Apply Tool Settings
    ScaleLens.ScaleByUnits = True
    ScaleLens.ScaleToUnit = 2  # 0=millimeters; 1=centimeters; 2=inches; 3=meters
    # Cast to ISystemTool interface to gain access to Run
    ScaleLens.RunAndWaitForCompletion()
    ScaleLens.Close()
```


#### Enumerator Millimeters

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1aee6855a5e7c0b638c250e8f0214ca6aaa3be6521a73bcafce5b38459ec548bd11"></a>


#### Enumerator Centimeters

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1aee6855a5e7c0b638c250e8f0214ca6aaa3040cc6624f5c309963dee141936b299"></a>


#### Enumerator Inches

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1aee6855a5e7c0b638c250e8f0214ca6aaad73325cdb1cb4f9a1ed11bdab879321d"></a>


#### Enumerator Meters

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1aee6855a5e7c0b638c250e8f0214ca6aaa80b4a3eed88aed8a1c7d8a4418b7f469"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ZemaxSystemUnits"}]}`
-->

### Enumeration type ZemaxSourceUnits

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a140a75572b2b9144c2929a8c0af928da"></a>

![][public]

**Definition**:


```csharp
enum ZemaxSourceUnits {
  Watts = 0,
  Lumens = 1,
  Joules = 2
}
```


#### Enumerator Watts

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a140a75572b2b9144c2929a8c0af928daa6af2670d4c6fd192d6fe6d69c2e9059b"></a>


#### Enumerator Lumens

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a140a75572b2b9144c2929a8c0af928daa9255488945454c206734ef148f9802dc"></a>


#### Enumerator Joules

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a140a75572b2b9144c2929a8c0af928daa6f96fabae3dc35745ec768c94ed665dd"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ZemaxSourceUnits"}]}`
-->

### Enumeration type ZemaxAnalysisUnits

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a8fcc51ff7eacc2e2fd0c1347adc2d9b0"></a>

![][public]

**Definition**:


```csharp
enum ZemaxAnalysisUnits {
  WattsPerMMSq = 0,
  WattsPerCMSq = 1,
  WattsPerinSq = 2,
  WattsPerMSq = 3,
  WattsPerftSq = 4
}
```


#### Enumerator WattsPerMMSq

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a8fcc51ff7eacc2e2fd0c1347adc2d9b0afc8803a18d2cd6f2c5c07fe0e3268f4d"></a>


#### Enumerator WattsPerCMSq

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a8fcc51ff7eacc2e2fd0c1347adc2d9b0ae48ef0bc2cc7efb301aa7892d05b02ab"></a>


#### Enumerator WattsPerinSq

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a8fcc51ff7eacc2e2fd0c1347adc2d9b0a60072a9c1f8a3cf18bc047afa8e7c9ee"></a>


#### Enumerator WattsPerMSq

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a8fcc51ff7eacc2e2fd0c1347adc2d9b0aa9b07ac9f2cea2450c61288abea45eb6"></a>


#### Enumerator WattsPerftSq

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a8fcc51ff7eacc2e2fd0c1347adc2d9b0a447bb4e905650f940a93149f71d1e05b"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ZemaxAnalysisUnits"}]}`
-->

### Enumeration type ZemaxUnitPrefix

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a3728ebd5f2ef3e17aab151a0906aa2fc"></a>

![][public]

**Definition**:


```csharp
enum ZemaxUnitPrefix {
  Femto = 0,
  Pico = 1,
  Nano = 2,
  Micro = 3,
  Milli = 4,
  None = 5,
  Kilo = 6,
  Mega = 7,
  Giga = 8,
  Tera = 9
}
```


#### Enumerator Femto

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a3728ebd5f2ef3e17aab151a0906aa2fca6805de99ae4312da34ebbf4a39e400c3"></a>


#### Enumerator Pico

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a3728ebd5f2ef3e17aab151a0906aa2fcacba3b736b06870457286524ba747164f"></a>


#### Enumerator Nano

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a3728ebd5f2ef3e17aab151a0906aa2fca79b048d6d742fae8fc4f0524dcb6949c"></a>


#### Enumerator Micro

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a3728ebd5f2ef3e17aab151a0906aa2fcadb1ce45d604c6b1d54c31dbc69bcdb56"></a>


#### Enumerator Milli

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a3728ebd5f2ef3e17aab151a0906aa2fca12465672495917bbec5d04198923d373"></a>


#### Enumerator None

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a3728ebd5f2ef3e17aab151a0906aa2fca6adf97f83acf6453d4a6a4b1070f3754"></a>


#### Enumerator Kilo

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a3728ebd5f2ef3e17aab151a0906aa2fca3afe87a2a8c61f8023e56883b9baccb8"></a>


#### Enumerator Mega

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a3728ebd5f2ef3e17aab151a0906aa2fcafde5020a5a97322bf5a7aee8174abbd8"></a>


#### Enumerator Giga

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a3728ebd5f2ef3e17aab151a0906aa2fca5262457500d337190c0f3484701a4ca6"></a>


#### Enumerator Tera

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a3728ebd5f2ef3e17aab151a0906aa2fca36e7fc4652810770a137e5c78a521686"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ZemaxUnitPrefix"}]}`
-->

### Enumeration type ZemaxAfocalModeUnits

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a9341304e8307cb43b4b559f5804db9bc"></a>

![][public]

**Definition**:


```csharp
enum ZemaxAfocalModeUnits {
  Microradians = 0,
  Milliradians = 1,
  Radians = 2,
  ArcSeconds = 3,
  ArcMinutes = 4,
  Degrees = 5
}
```


#### Enumerator Microradians

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a9341304e8307cb43b4b559f5804db9bca0e8108df7c6eb024556909467fb384e9"></a>


#### Enumerator Milliradians

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a9341304e8307cb43b4b559f5804db9bca202e3d350b11bac8e5250b0c1bb205b8"></a>


#### Enumerator Radians

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a9341304e8307cb43b4b559f5804db9bca682f5298cdcce11e567b7f833843d3be"></a>


#### Enumerator ArcSeconds

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a9341304e8307cb43b4b559f5804db9bca5b211695448f7fca5184e96b6835ae00"></a>


#### Enumerator ArcMinutes

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a9341304e8307cb43b4b559f5804db9bcafaa2d4581806944ee3bdf4b18ac967a4"></a>


#### Enumerator Degrees

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a9341304e8307cb43b4b559f5804db9bca9ef125630442bb42e2e367e0cf70d892"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ZemaxAfocalModeUnits"}]}`
-->

### Enumeration type ZemaxMTFUnits

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1aec2d84a4137a22c3130246a6cf6eaeaf"></a>

![][public]

**Definition**:


```csharp
enum ZemaxMTFUnits {
  CyclesPerMillimeter,
  CyclesPerMilliradian
}
```


#### Enumerator CyclesPerMillimeter

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1aec2d84a4137a22c3130246a6cf6eaeafaed3f2d1978759ca9be77f2a0ea56c3f6"></a>


#### Enumerator CyclesPerMilliradian

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1aec2d84a4137a22c3130246a6cf6eaeafab3b01114c7d95fdc1e29727a530ed8ae"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ZemaxMTFUnits"}]}`
-->

### Enumeration type ZemaxApertureType

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1ad2ce4c1d99a0188d1e9ca955065d7541"></a>

![][public]

**Definition**:


```csharp
enum ZemaxApertureType {
  EntrancePupilDiameter = 0,
  ImageSpaceFNum = 1,
  ObjectSpaceNA = 2,
  FloatByStopSize = 3,
  ParaxialWorkingFNum = 4,
  ObjectConeAngle = 5
}
```


#### Enumerator EntrancePupilDiameter

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1ad2ce4c1d99a0188d1e9ca955065d7541a082d47f529c10e144d15340582675e0c"></a>


#### Enumerator ImageSpaceFNum

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1ad2ce4c1d99a0188d1e9ca955065d7541adc437cb9038155f001d354c7008c4180"></a>


#### Enumerator ObjectSpaceNA

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1ad2ce4c1d99a0188d1e9ca955065d7541a0fdfaa24333719bc16be4a2c3f8729b8"></a>


#### Enumerator FloatByStopSize

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1ad2ce4c1d99a0188d1e9ca955065d7541a8933f8609e6be5a326ee3af2bc31a1af"></a>


#### Enumerator ParaxialWorkingFNum

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1ad2ce4c1d99a0188d1e9ca955065d7541a1f7b52338e2baac635899c80a40c3e4c"></a>


#### Enumerator ObjectConeAngle

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1ad2ce4c1d99a0188d1e9ca955065d7541a5245e7c0c222e8f1b5cbb0e1c278d55e"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ZemaxApertureType"}]}`
-->

### Enumeration type ZemaxApodizationType

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af229d8fc12249c2081ea3e10f32bbecb"></a>

![][public]

**Definition**:


```csharp
enum ZemaxApodizationType {
  Uniform = 0,
  Gaussian = 1,
  CosineCubed = 2
}
```


Usage (see [Example 11](../apiexamples/example_11.md) for a full sample)


C# 
```csharp
            // Changing System Explorer Settings
            // Set Aperture
            ISystemData TheSystemData = TheSystem.SystemData;
            TheSystemData.Aperture.ApertureValue = 20;
            TheSystem.SystemData.MaterialCatalogs.AddCatalog("SCHOTT");

            // Set Apodization Type to Gaussian, and set apodization factor to 1
            TheSystemData.Aperture.ApodizationType = ZemaxApodizationType.Gaussian;
            TheSystemData.Aperture.ApodizationFactor = 1;
            // Set Wavelength
            TheSystemData.Wavelengths.SelectWavelengthPreset(WavelengthPreset.FdC_Visible);
```
 C++ 
```csharp
    // Changing System Explorer Settings
    // Set Aperture
    ISystemDataPtr TheSystemData = TheSystem->SystemData;
    TheSystemData->Aperture->ApertureValue = 20;
    ISDMaterialCatalogDataPtr(TheSystem->SystemData->MaterialCatalogs)->AddCatalog("SCHOTT");


    // Set Apodization Type to Gaussian, and set apodization factor to 1
    TheSystemData->Aperture->ApodizationType = ZemaxApodizationType_Gaussian;
    TheSystemData->Aperture->ApodizationFactor = 1;
    // Set Wavelength
    TheSystemData->Wavelengths->SelectWavelengthPreset(WavelengthPreset_FdC_Visible);
```
 Matlab 
```csharp
    % Changing System Explorer Settings
    % Set Aperture
    TheSystemData = TheSystem.SystemData;
    TheSystemData.Aperture.ApertureValue = 20;
    TheSystem.SystemData.MaterialCatalogs.AddCatalog('SCHOTT');

    % Set Apodization Type to Gaussian, and set apodization factor to 1
    TheSystemData.Aperture.ApodizationType = ZOSAPI.SystemData.ZemaxApodizationType.Gaussian;
    TheSystemData.Aperture.ApodizationFactor = 1;
    % Set Wavelength
    TheSystemData.Wavelengths.SelectWavelengthPreset(ZOSAPI.SystemData.WavelengthPreset.FdC_Visible);
```
 Python 
```csharp
    # Changing System Explorer Settings
    # Set Aperture
    TheSystemData = TheSystem.SystemData
    TheSystemData.Aperture.ApertureValue = 20
    TheSystem.SystemData.MaterialCatalogs.AddCatalog('SCHOTT')

    # Set Apodization Type to Gaussian, and set apodization factor to 1
    TheSystemData.Aperture.ApodizationType = 1  # ApodizationType 0 = uniform; 1 = gaussian; 2 = Cosine Cubed
    TheSystemData.Aperture.ApodizationFactor = 1
    # Set Wavelength
    TheSystemData.Wavelengths.SelectWavelengthPreset(ZOSAPI.SystemData.WavelengthPreset.FdC_Visible)
```


#### Enumerator Uniform

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af229d8fc12249c2081ea3e10f32bbecbaf19516d11f2946f894070e92fcb56b6d"></a>


#### Enumerator Gaussian

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af229d8fc12249c2081ea3e10f32bbecbafedf7ba6075fb5526a7ace0b9385528d"></a>


#### Enumerator CosineCubed

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af229d8fc12249c2081ea3e10f32bbecba4b76501471f9f9d91b69b6be90b9de06"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ZemaxApodizationType"}]}`
-->

### Enumeration type WavelengthPreset

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92"></a>

![][public]

**Definition**:


```csharp
enum WavelengthPreset {
  FdC_Visible = 0,
  Photopic_Bright = 1,
  Scotopic_Dark = 2,
  HeNe_0p6328 = 3,
  HeNe_0p5438 = 4,
  Argon_0p4880 = 5,
  Argon_0p5145 = 6,
  NDYAG_1p0641 = 7,
  NDGlass_1p054 = 8,
  CO2_10p60 = 9,
  CrLiSAF_0p840 = 10,
  TiAl203_0p760 = 11,
  Ruby_0p6943 = 12,
  HeCadmium_0p4416 = 13,
  HeCadmium_0p3536 = 14,
  HeCadmium_0p3250 = 15,
  t_1p014 = 16,
  r_0p707 = 17,
  C_0p656 = 18,
  d_0p587 = 19,
  F_0p486 = 20,
  g_0p436 = 21,
  i_0p365 = 22,
  Fp_0p365 = 23,
  e_0p54607 = 24,
  Cp_0p6438469 = 25,
  FpeCp_Visible = 26,
  THz_193p10 = 27
}
```


Usage (see [Example 01](../apiexamples/example_01.md) for a full sample)


C# 
```csharp
            // Wavelength preset
            bool slPreset = TheSystemData.Wavelengths.SelectWavelengthPreset(WavelengthPreset.d_0p587);
```
 C++ 
```csharp
    // Wavelength preset
    bool slPreset = TheSystemData->Wavelengths->SelectWavelengthPreset(WavelengthPreset_d_0p587);
```
 Matlab 
```csharp
    % Wavelength preset
    slPreset = TheSystemData.Wavelengths.SelectWavelengthPreset(ZOSAPI.SystemData.WavelengthPreset.d_0p587);
```
 Python 
```csharp
    # Wavelength preset
    slPreset = TheSystemData.Wavelengths.SelectWavelengthPreset(ZOSAPI.SystemData.WavelengthPreset.d_0p587)
```


#### Enumerator FdC_Visible

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92ad9a97efe0753d91bdb174150a4831148"></a>


#### Enumerator Photopic_Bright

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92aa6966d3cc47d5ccc4e8b3685c247b13d"></a>


#### Enumerator Scotopic_Dark

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92af216dd6c0313231e15a8d1ad1f846b9e"></a>


#### Enumerator HeNe_0p6328

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92acde83a4af7cc9cd86138d0af34e16101"></a>


#### Enumerator HeNe_0p5438

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92a0320b6e4f8e96d1564ea935e28fef47a"></a>


#### Enumerator Argon_0p4880

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92a91f76e5972b7d1efd8dd3a81cbf3ebc8"></a>


#### Enumerator Argon_0p5145

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92ab91f2c772108b2439ab300ce788bfc46"></a>


#### Enumerator NDYAG_1p0641

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92a8390d6fcab17a728e63e6d6a945ace27"></a>


#### Enumerator NDGlass_1p054

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92acf0947131b68421a4263b3ae347406a6"></a>


#### Enumerator CO2_10p60

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92a1a66c83eb7c4cf5c953423a6e7db8aec"></a>


#### Enumerator CrLiSAF_0p840

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92af5b080c0f14e2cd5820acea9691ae837"></a>


#### Enumerator TiAl203_0p760

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92a09f32e8e7ad9f00b33457ee1c48fff60"></a>


#### Enumerator Ruby_0p6943

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92a3d63716cc1e445f6c2b5188f4c620ada"></a>


#### Enumerator HeCadmium_0p4416

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92a264dd31467470687f85536ebdc8063c8"></a>


#### Enumerator HeCadmium_0p3536

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92ad51ef1b8b3faeae988be66ad63ee1dc1"></a>


#### Enumerator HeCadmium_0p3250

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92a903ec92d8d0e5b0af46bc9734a86ad6c"></a>


#### Enumerator t_1p014

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92a91a2fcbaf60e65c41cb814d98f5a96a9"></a>


#### Enumerator r_0p707

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92a8ead3635711ab4909fae5c0126a5ac59"></a>


#### Enumerator C_0p656

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92ab732382ba8dcd4d7d0cbcc4d007ab0d9"></a>


#### Enumerator d_0p587

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92a41bc487e85b1e4d0e43d4af94dbd7cb5"></a>


#### Enumerator F_0p486

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92a92213197501cc425821374dd56c845e9"></a>


#### Enumerator g_0p436

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92a476c229579cd5bea319c32660d43d689"></a>


#### Enumerator i_0p365

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92a68ab269c88315ec2d98e64af76f73625"></a>


#### Enumerator Fp_0p365

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92a9c8554c137c78084def1da5b99fcc261"></a>


#### Enumerator e_0p54607

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92aa86bbc2874b76c8f518959ca57ba7e0c"></a>


#### Enumerator Cp_0p6438469

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92a763bb5936a05c00fb6e75d9b1ee9b045"></a>


#### Enumerator FpeCp_Visible

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92a893e5ea3ea01a459873ebdfa3bb2d735"></a>


#### Enumerator THz_193p10

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92a6cbeef73428bdfb240e9298fdaa9685c"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.WavelengthPreset"}]}`
-->

### Enumeration type QuadratureSteps

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a167b0c990e8a883f504c111394d8901b"></a>

![][public]

**Definition**:


```csharp
enum QuadratureSteps {
  S2,
  S4,
  S6,
  S8,
  S10,
  S12
}
```


#### Enumerator S2

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a167b0c990e8a883f504c111394d8901bab9eeaf6a16ca49f37df57620aed91b62"></a>


#### Enumerator S4

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a167b0c990e8a883f504c111394d8901bad59a89abb4af5bc4dd85243d5f75bcac"></a>


#### Enumerator S6

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a167b0c990e8a883f504c111394d8901baa1d6f48030ed59e7372531b3555f8e31"></a>


#### Enumerator S8

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a167b0c990e8a883f504c111394d8901baafb0fced528eaac5fe170b763cda5975"></a>


#### Enumerator S10

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a167b0c990e8a883f504c111394d8901ba27d889be8a04837b5e6de309b746c57e"></a>


#### Enumerator S12

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a167b0c990e8a883f504c111394d8901ba0dddeed4b0f51aaad8bcaf380fcbe48f"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.QuadratureSteps"}]}`
-->

### Enumeration type FieldType

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a61be382314bb098512c3475bdeac2dd5"></a>

![][public]

**Definition**:


```csharp
enum FieldType {
  Angle = 0,
  ObjectHeight = 1,
  ParaxialImageHeight = 2,
  RealImageHeight = 3,
  TheodoliteAngle = 4
}
```


#### Enumerator Angle

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a61be382314bb098512c3475bdeac2dd5a45f4ce6c3306644b1efe333f4f8d6929"></a>


#### Enumerator ObjectHeight

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a61be382314bb098512c3475bdeac2dd5ad2500b243d8aaafda1d4bd503e14bd15"></a>


#### Enumerator ParaxialImageHeight

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a61be382314bb098512c3475bdeac2dd5a9d9ee62420084481f68e011ba21eb22c"></a>


#### Enumerator RealImageHeight

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a61be382314bb098512c3475bdeac2dd5aac5847db2b0744acf9fe5910a609889c"></a>


#### Enumerator TheodoliteAngle

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a61be382314bb098512c3475bdeac2dd5ab030dd6bc49f26b44598009544391b2a"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.FieldType"}]}`
-->

### Enumeration type PolarizationMethod

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a4f300115208d94d8c2d5581565764939"></a>

![][public]

**Definition**:


```csharp
enum PolarizationMethod {
  XAxisMethod = 0,
  YAxisMethod = 1,
  ZAxisMethod = 2
}
```


Usage (see [Example 12](../apiexamples/example_12.md) for a full sample)


C# 
```csharp
            // Change polarization axis reference to be Y
            ZOSAPI.SystemData.ISDPolarizationData sysPol = TheSystem.SystemData.Polarization;
            sysPol.Method = ZOSAPI.SystemData.PolarizationMethod.YAxisMethod;
```
 C++ 
```csharp
    // Change polarization axis reference to be Y
    ZOSAPI_Interfaces::ISDPolarizationDataPtr sysPol = TheSystem->SystemData->Polarization;
    sysPol->Method = ZOSAPI_Interfaces::PolarizationMethod_YAxisMethod;
```
 Matlab 
```csharp
    % Change polarization axis reference to be Y
    sysPol = TheSystem.SystemData.Polarization;
    sysPol.Method = ZOSAPI.SystemData.PolarizationMethod.YAxisMethod;
```
 Python 
```csharp
    # Change polarization axis reference to be Y
    sysPol = TheSystem.SystemData.Polarization
    sysPol.Method = ZOSAPI.SystemData.PolarizationMethod.YAxisMethod
```


#### Enumerator XAxisMethod

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a4f300115208d94d8c2d5581565764939a722152c7c5b31afc9601e060c72d3f28"></a>


#### Enumerator YAxisMethod

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a4f300115208d94d8c2d5581565764939ada260c52c52b14c1d425746f85e23cd3"></a>


#### Enumerator ZAxisMethod

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a4f300115208d94d8c2d5581565764939aad4890a345e2602805e9be395a541bc2"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.PolarizationMethod"}]}`
-->

### Enumeration type ReferenceOPDSetting

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1ac785eb9bc009ab14b3151d30ffbc2814"></a>

![][public]

**Definition**:


```csharp
enum ReferenceOPDSetting {
  Absolute = 0,
  Infinity = 1,
  ExitPupil = 2,
  Absolute2 = 3
}
```


#### Enumerator Absolute

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1ac785eb9bc009ab14b3151d30ffbc2814ab51ca26c6c89cfc9bec338f7a0d3e0c8"></a>


#### Enumerator Infinity

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1ac785eb9bc009ab14b3151d30ffbc2814aeb2ac5b04180d8d6011a016aeb8f75b3"></a>


#### Enumerator ExitPupil

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1ac785eb9bc009ab14b3151d30ffbc2814ad117b9d4c5bbb7a89852bd67bdbde074"></a>


#### Enumerator Absolute2

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1ac785eb9bc009ab14b3151d30ffbc2814afe9d1cf6033d8b506755e8569254de17"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ReferenceOPDSetting"}]}`
-->

### Enumeration type ParaxialRaysSetting

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1ad94330d5a774cac868576265094501b9"></a>

![][public]

**Definition**:


```csharp
enum ParaxialRaysSetting {
  ConsiderCoordinateBreaks = 0,
  IgnoreCoordinateBreaks = 1
}
```


#### Enumerator ConsiderCoordinateBreaks

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1ad94330d5a774cac868576265094501b9ad19edf26a94d92fd9be3d8d744503a50"></a>


#### Enumerator IgnoreCoordinateBreaks

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1ad94330d5a774cac868576265094501b9a0ea7a89795ed8b6480b6f7045a68a1d0"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ParaxialRaysSetting"}]}`
-->

### Enumeration type HuygensIntegralSettings

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a09887aac1eb9e7c52855adf04a194ea2"></a>

![][public]

**Definition**:


```csharp
enum HuygensIntegralSettings {
  Auto = 0,
  Planar = 1,
  Spherical = 2
}
```


#### Enumerator Auto

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a09887aac1eb9e7c52855adf04a194ea2a06b9281e396db002010bde1de57262eb"></a>


#### Enumerator Planar

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a09887aac1eb9e7c52855adf04a194ea2a93a097009b6443e711996c50b5354adf"></a>


#### Enumerator Spherical

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a09887aac1eb9e7c52855adf04a194ea2a24e5c24fabd1c081d4c729094df0b947"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.HuygensIntegralSettings"}]}`
-->

### Enumeration type FNumberComputationType

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1ae75b21c589365893cc2e73447ea57165"></a>

![][public]

**Definition**:


```csharp
enum FNumberComputationType {
  TracingRays = 0,
  PupilSizePosition = 1
}
```


#### Enumerator TracingRays

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1ae75b21c589365893cc2e73447ea57165a20fa5ad04f2021b4145ec9a651e37c65"></a>


#### Enumerator PupilSizePosition

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1ae75b21c589365893cc2e73447ea57165a101e42d51cd852a2ef7c774375dbbce7"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.FNumberComputationType"}]}`
-->

### Enumeration type RayAimingMethod

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a21e246c58db95fedcbb02b149cff4fd5"></a>

![][public]

**Definition**:


```csharp
enum RayAimingMethod {
  Off = 0,
  Paraxial = 1,
  Real = 2
}
```


#### Enumerator Off

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a21e246c58db95fedcbb02b149cff4fd5ad15305d7a4e34e02489c74a5ef542f36"></a>


#### Enumerator Paraxial

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a21e246c58db95fedcbb02b149cff4fd5a4d1e0dc13a68dd70bdd172c880844a31"></a>


#### Enumerator Real

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a21e246c58db95fedcbb02b149cff4fd5a7f80fcc452c2f1ed2bb51b39d0864df1"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.RayAimingMethod"}]}`
-->

### Enumeration type RayAimingType

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1aa11ff627e1a142e5eb2ac5631071852e"></a>

![][public]

**Definition**:


```csharp
enum RayAimingType {
  Heuristic = 0,
  Optimize = 1
}
```


#### Enumerator Heuristic

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1aa11ff627e1a142e5eb2ac5631071852ea271aa2fdaeb524af30faf88584424763"></a>


#### Enumerator Optimize

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1aa11ff627e1a142e5eb2ac5631071852ea8346db516e5f3aa534827e7d6c166744"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.RayAimingType"}]}`
-->

### Enumeration type FieldNormalizationType

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a2993a68c549ae59374e93cf93cc0174a"></a>

![][public]

**Definition**:


```csharp
enum FieldNormalizationType {
  Radial = 0,
  Rectangular
}
```


#### Enumerator Radial

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a2993a68c549ae59374e93cf93cc0174aafdc32a55217f1ca054f1f2b51ef4f6ec"></a>


#### Enumerator Rectangular

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a2993a68c549ae59374e93cf93cc0174aa7545c5d3ad246a683a197a2903a4d5e6"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.FieldNormalizationType"}]}`
-->

### Enumeration type FieldPattern

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a09989c77446012631abf14d0b69f8cbd"></a>

![][public]

**Definition**:


```csharp
enum FieldPattern {
  UniformY = 0,
  EqualAreaY,
  UniformX,
  EqualAreaX,
  Grid,
  UniformRadial,
  EqualAreaRadial
}
```


#### Enumerator UniformY

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a09989c77446012631abf14d0b69f8cbdaf681f4ddb96fa3379e5699c1ea7cd242"></a>


#### Enumerator EqualAreaY

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a09989c77446012631abf14d0b69f8cbdaacf36710b55c1e8a92b60693fa3b435f"></a>


#### Enumerator UniformX

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a09989c77446012631abf14d0b69f8cbda8bb6ef785611c617bdaf4f12e4f03bc6"></a>


#### Enumerator EqualAreaX

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a09989c77446012631abf14d0b69f8cbdab320eb7f84df281bebf1962470c91e16"></a>


#### Enumerator Grid

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a09989c77446012631abf14d0b69f8cbda5174d1309f275ba6f275db3af9eb3e18"></a>


#### Enumerator UniformRadial

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a09989c77446012631abf14d0b69f8cbda0d824ffa5f6297d00e3f45e73368e11e"></a>


#### Enumerator EqualAreaRadial

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a09989c77446012631abf14d0b69f8cbda16250a0f1e02fa48fe6d959264d179ec"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.FieldPattern"}]}`
-->

### Enumeration type FieldColumn

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a70cc1840e9a3033871dbfbec920217ab"></a>

![][public]

**Definition**:


```csharp
enum FieldColumn {
  Comment = 0,
  X = 1,
  Y = 2,
  Weight = 3,
  VDX = 4,
  VDY = 5,
  VCX = 6,
  VCY = 7,
  TAN = 8,
  VAN = 8
}
```


#### Enumerator Comment

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a70cc1840e9a3033871dbfbec920217aba0be8406951cdfda82f00f79328cf4efc"></a>


#### Enumerator X

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a70cc1840e9a3033871dbfbec920217aba02129bb861061d1a052c592e2dc6b383"></a>


#### Enumerator Y

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a70cc1840e9a3033871dbfbec920217aba57cec4137b614c87cb4e24a3d003a3e0"></a>


#### Enumerator Weight

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a70cc1840e9a3033871dbfbec920217aba8c489d0946f66d17d73f26366a4bf620"></a>


#### Enumerator VDX

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a70cc1840e9a3033871dbfbec920217abae0072b1dca7b6c00ad5433f438ec3f53"></a>


#### Enumerator VDY

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a70cc1840e9a3033871dbfbec920217abaa92823a3fe99b13e3996bf5dd83524a1"></a>


#### Enumerator VCX

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a70cc1840e9a3033871dbfbec920217aba05f6675caf8f9ac19245661f374ff1f9"></a>


#### Enumerator VCY

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a70cc1840e9a3033871dbfbec920217aba7052358a097ffa3ff8e58d57f96e80fb"></a>


#### Enumerator TAN

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a70cc1840e9a3033871dbfbec920217aba71211c96ad35b40178446956e22be10e"></a>


#### Enumerator VAN

<a id="namespace_z_o_s_a_p_i_1_1_system_data_1a70cc1840e9a3033871dbfbec920217aba31db0ae86df18419363153d98368c366"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.FieldColumn"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
