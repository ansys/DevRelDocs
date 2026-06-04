# Interface ZOSAPI::SystemData::ISDApertureData

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data"></a>

![][C#]
![][public]

**Definition**:

System Explorer - Aperture Data. This interface can be accessed via the ISystemData interface.

Usage (see [Example 15](../apiexamples/example_15.md) for a full sample)


C# 
```csharp
            //Define System Explorer
            //Define Aperture
            ISystemData SystExplorer = TheSystem.SystemData;
            SystExplorer.Aperture.ApertureType = ZOSAPI.SystemData.ZemaxApertureType.EntrancePupilDiameter;
            SystExplorer.Aperture.ApertureValue = 20;
```
 C++ 
```csharp
    // Define System Explorer
    // Define Aperture
    ISystemDataPtr SystExplorer = TheSystem->SystemData;
    SystExplorer->Aperture->ApertureType = ZemaxApertureType::ZemaxApertureType_EntrancePupilDiameter;
    SystExplorer->Aperture->ApertureValue = 20;
```
 Matlab 
```csharp
    %Define System Explorer
    %Define Aperture
    SystExplorer = TheSystem.SystemData;
    SystExplorer.Aperture.ApertureType = ZOSAPI.SystemData.ZemaxApertureType.EntrancePupilDiameter;
    SystExplorer.Aperture.ApertureValue = 20;
```
 Python 
```csharp
    # Define System Explorer
    # Define Aperture
    SystExplorer = TheSystem.SystemData
    SystExplorer.Aperture.ApertureType = ZOSAPI.SystemData.ZemaxApertureType.EntrancePupilDiameter
    SystExplorer.Aperture.ApertureValue = 20
```

## Members

* [AFocalImageSpace](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1a128f10b02851cab311ef768c1749330a)
* [ApertureType](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1ad9c32311e3c6eeb25b63203c13e2df44)
* [ApertureValue](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1a08f088415232a6044eff08f94bf2e84b)
* [ApodizationFactor](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1acadab82854e57809c5191ddb826a46cd)
* [ApodizationFactorIsUsed](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1a42e94634cca25f2b2f655c2ab2f20467)
* [ApodizationType](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1a70c0506b7fead9b785d1c7c130755cab)
* [CheckGRINApertures](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1a9f8eaf2b11a9ba330114c3b4c0d9b5e3)
* [FastSemiDiameters](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1a7b0a2751b8ab841f83e3d0abb74d1271)
* [GCRS](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1a5a8a70f22cb0c10518087420f4b320a5)
* [IterateSolvesWhenUpdating](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1a5cb34fd99473e62fad7d100ecac7386e)
* [SemiDiameterMargin](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1a4a06600bd4ab3acc37f2e7a936e393f8)
* [SemiDiameterMarginPct](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1a025e40cff0b1fea79675c53ddd84f39f)
* [TelecentricObjectSpace](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1af6348052c54737ba556a55b74ab5d1d1)

## Properties

### Property ApertureType

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1ad9c32311e3c6eeb25b63203c13e2df44"></a>

![][public]

**Definition**:


```csharp
ZemaxApertureType ZOSAPI.SystemData.ISDApertureData.ApertureType
```


Usage (see [Example 15](../apiexamples/example_15.md) for a full sample)


C# 
```csharp
            //Define System Explorer
            //Define Aperture
            ISystemData SystExplorer = TheSystem.SystemData;
            SystExplorer.Aperture.ApertureType = ZOSAPI.SystemData.ZemaxApertureType.EntrancePupilDiameter;
            SystExplorer.Aperture.ApertureValue = 20;
```
 C++ 
```csharp
    // Define System Explorer
    // Define Aperture
    ISystemDataPtr SystExplorer = TheSystem->SystemData;
    SystExplorer->Aperture->ApertureType = ZemaxApertureType::ZemaxApertureType_EntrancePupilDiameter;
    SystExplorer->Aperture->ApertureValue = 20;
```
 Matlab 
```csharp
    %Define System Explorer
    %Define Aperture
    SystExplorer = TheSystem.SystemData;
    SystExplorer.Aperture.ApertureType = ZOSAPI.SystemData.ZemaxApertureType.EntrancePupilDiameter;
    SystExplorer.Aperture.ApertureValue = 20;
```
 Python 
```csharp
    # Define System Explorer
    # Define Aperture
    SystExplorer = TheSystem.SystemData
    SystExplorer.Aperture.ApertureType = ZOSAPI.SystemData.ZemaxApertureType.EntrancePupilDiameter
    SystExplorer.Aperture.ApertureValue = 20
```


**Return type**: [ZemaxApertureType](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1ad2ce4c1d99a0188d1e9ca955065d7541)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDApertureData.ApertureType"}]}`
-->

### Property ApertureValue

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1a08f088415232a6044eff08f94bf2e84b"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.SystemData.ISDApertureData.ApertureValue
```


Usage (see [Example 19](../apiexamples/example_19.md) for a full sample)


C# 
```csharp
            // ISystemData represents the System Explorer in GUI.
            // We access options in System Explorer through ISystemData in ZOS-API
            ISystemData TheSystemData = TheSystem.SystemData;
            TheSystemData.Aperture.ApertureValue = 10;
            TheSystemData.Aperture.AFocalImageSpace = true;
            TheSystemData.Wavelengths.GetWavelength(1).Wavelength = 0.55;
```
 C++ 
```csharp
    // ISystemData represents the System Explorer in GUI.
    // We access options in System Explorer through ISystemData in ZOS-API
    ISystemDataPtr TheSystemData = TheSystem->SystemData;
    TheSystemData->Aperture->ApertureValue = 10;
    TheSystemData->Aperture->AFocalImageSpace = true;
    TheSystemData->Wavelengths->GetWavelength(1)->Wavelength = 0.55;
```
 Matlab 
```csharp
    % ISystemData represents the System Explorer in GUI.
    % We access options in System Explorer through ISystemData in ZOS-API
    TheSystemData = TheSystem.SystemData;
    TheSystemData.Aperture.ApertureValue = 10;
    TheSystemData.Aperture.AFocalImageSpace = true;
    TheSystemData.Wavelengths.GetWavelength(1).Wavelength = 0.55;
```
 Python 
```csharp
    # ISystemData represents the System Explorer in GUI.
    # We access options in System Explorer through ISystemData in ZOS-API
    TheSystemData = TheSystem.SystemData
    TheSystemData.Aperture.ApertureValue = 10
    TheSystemData.Aperture.AFocalImageSpace = True
    TheSystemData.Wavelengths.GetWavelength(1).Wavelength = 0.55
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDApertureData.ApertureValue"}]}`
-->

### Property ApodizationType

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1a70c0506b7fead9b785d1c7c130755cab"></a>

![][public]

**Definition**:


```csharp
ZemaxApodizationType ZOSAPI.SystemData.ISDApertureData.ApodizationType
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


**Return type**: [ZemaxApodizationType](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1af229d8fc12249c2081ea3e10f32bbecb)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDApertureData.ApodizationType"}]}`
-->

### Property ApodizationFactor

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1acadab82854e57809c5191ddb826a46cd"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.SystemData.ISDApertureData.ApodizationFactor
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDApertureData.ApodizationFactor"}]}`
-->

### Property ApodizationFactorIsUsed

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1a42e94634cca25f2b2f655c2ab2f20467"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.SystemData.ISDApertureData.ApodizationFactorIsUsed
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDApertureData.ApodizationFactorIsUsed"}]}`
-->

### Property SemiDiameterMargin

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1a4a06600bd4ab3acc37f2e7a936e393f8"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.SystemData.ISDApertureData.SemiDiameterMargin
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDApertureData.SemiDiameterMargin"}]}`
-->

### Property SemiDiameterMarginPct

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1a025e40cff0b1fea79675c53ddd84f39f"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.SystemData.ISDApertureData.SemiDiameterMarginPct
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDApertureData.SemiDiameterMarginPct"}]}`
-->

### Property GCRS

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1a5a8a70f22cb0c10518087420f4b320a5"></a>

![][public]

**Definition**:


```csharp
ISurfaceSelection ZOSAPI.SystemData.ISDApertureData.GCRS
```


**Return type**: [ISurfaceSelection](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_surface_selection.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_surface_selection)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDApertureData.GCRS"}]}`
-->

### Property TelecentricObjectSpace

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1af6348052c54737ba556a55b74ab5d1d1"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.SystemData.ISDApertureData.TelecentricObjectSpace
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDApertureData.TelecentricObjectSpace"}]}`
-->

### Property AFocalImageSpace

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1a128f10b02851cab311ef768c1749330a"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.SystemData.ISDApertureData.AFocalImageSpace
```


Usage (see [Example 19](../apiexamples/example_19.md) for a full sample)


C# 
```csharp
            // ISystemData represents the System Explorer in GUI.
            // We access options in System Explorer through ISystemData in ZOS-API
            ISystemData TheSystemData = TheSystem.SystemData;
            TheSystemData.Aperture.ApertureValue = 10;
            TheSystemData.Aperture.AFocalImageSpace = true;
            TheSystemData.Wavelengths.GetWavelength(1).Wavelength = 0.55;
```
 C++ 
```csharp
    // ISystemData represents the System Explorer in GUI.
    // We access options in System Explorer through ISystemData in ZOS-API
    ISystemDataPtr TheSystemData = TheSystem->SystemData;
    TheSystemData->Aperture->ApertureValue = 10;
    TheSystemData->Aperture->AFocalImageSpace = true;
    TheSystemData->Wavelengths->GetWavelength(1)->Wavelength = 0.55;
```
 Matlab 
```csharp
    % ISystemData represents the System Explorer in GUI.
    % We access options in System Explorer through ISystemData in ZOS-API
    TheSystemData = TheSystem.SystemData;
    TheSystemData.Aperture.ApertureValue = 10;
    TheSystemData.Aperture.AFocalImageSpace = true;
    TheSystemData.Wavelengths.GetWavelength(1).Wavelength = 0.55;
```
 Python 
```csharp
    # ISystemData represents the System Explorer in GUI.
    # We access options in System Explorer through ISystemData in ZOS-API
    TheSystemData = TheSystem.SystemData
    TheSystemData.Aperture.ApertureValue = 10
    TheSystemData.Aperture.AFocalImageSpace = True
    TheSystemData.Wavelengths.GetWavelength(1).Wavelength = 0.55
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDApertureData.AFocalImageSpace"}]}`
-->

### Property IterateSolvesWhenUpdating

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1a5cb34fd99473e62fad7d100ecac7386e"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.SystemData.ISDApertureData.IterateSolvesWhenUpdating
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDApertureData.IterateSolvesWhenUpdating"}]}`
-->

### Property FastSemiDiameters

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1a7b0a2751b8ab841f83e3d0abb74d1271"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.SystemData.ISDApertureData.FastSemiDiameters
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDApertureData.FastSemiDiameters"}]}`
-->

### Property CheckGRINApertures

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_aperture_data_1a9f8eaf2b11a9ba330114c3b4c0d9b5e3"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.SystemData.ISDApertureData.CheckGRINApertures
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDApertureData.CheckGRINApertures"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
