# Interface ZOSAPI::SystemData::IWavelength

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelength"></a>

![][C#]
![][public]

**Definition**:

System wavelength data. This interface can be accessed via the IWavelengths interface.


## Members

* [IsActive](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelength.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelength_1adc899f4a51983df21a664e89680a6dad)
* [IsPrimary](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelength.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelength_1a2196797adaafc0eef2726cd5b3830746)
* [MakePrimary](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelength.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelength_1a3c485839ad8b541f50fd168471539b03)
* [Wavelength](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelength.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelength_1a2f68612c372cdf2bf87a169090304a94)
* [WavelengthNumber](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelength.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelength_1a99294996b181051e630243d5f524873d)
* [Weight](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelength.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelength_1aee86b7dcac32b572c04a523aa233eef5)

## Properties

### Property WavelengthNumber

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelength_1a99294996b181051e630243d5f524873d"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.SystemData.IWavelength.WavelengthNumber
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IWavelength.WavelengthNumber"}]}`
-->

### Property IsActive

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelength_1adc899f4a51983df21a664e89680a6dad"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.SystemData.IWavelength.IsActive
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IWavelength.IsActive"}]}`
-->

### Property IsPrimary

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelength_1a2196797adaafc0eef2726cd5b3830746"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.SystemData.IWavelength.IsPrimary
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IWavelength.IsPrimary"}]}`
-->

### Property Wavelength

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelength_1a2f68612c372cdf2bf87a169090304a94"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.SystemData.IWavelength.Wavelength
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IWavelength.Wavelength"}]}`
-->

### Property Weight

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelength_1aee86b7dcac32b572c04a523aa233eef5"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.SystemData.IWavelength.Weight
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IWavelength.Weight"}]}`
-->

## Public functions

### Function MakePrimary

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelength_1a3c485839ad8b541f50fd168471539b03"></a>

![][public]


```csharp
void ZOSAPI.SystemData.IWavelength.MakePrimary()
```


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IWavelength.MakePrimary"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
