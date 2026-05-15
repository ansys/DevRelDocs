# Interface ZOSAPI::SystemData::IWavelengths

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelengths"></a>

![][C#]
![][public]

**Definition**:

System Explorer - Wavelengths Data. This interface can be accessed via the ISystemData interface.


## Members

* [AddWavelength](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelengths.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelengths_1af5dbb0d8728f022a0ba82e691c0c7dc1)
* [GaussianQuadrature](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelengths.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelengths_1a8a2bf14cb6a1f3519592e6cf5406641e)
* [GetWavelength](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelengths.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelengths_1a31ddb977e30e298c8f8281b0694af0c9)
* [NumberOfWavelengths](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelengths.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelengths_1a3ba4a2fd5ee756d2d750a9983960a1ac)
* [RemoveWavelength](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelengths.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelengths_1a4c84bc4075a4c3b5a434366dd9f66d4e)
* [SelectWavelengthPreset](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelengths.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelengths_1a8d96b6f0046e8e23bf6a9b60525b95a0)

## Properties

### Property NumberOfWavelengths

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelengths_1a3ba4a2fd5ee756d2d750a9983960a1ac"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.SystemData.IWavelengths.NumberOfWavelengths
```


Gets the number of wavelengths currently defined in the system.

Usage (see [Example 22](../apiexamples/example_22.md) for a full sample)


C# 
```csharp
            // Define batch ray trace constants
            double hx = 0.0;
            int max_wave = TheSystem.SystemData.Wavelengths.NumberOfWavelengths;
            int num_fields = TheSystem.SystemData.Fields.NumberOfFields;
            double[] hy_ary = new double[] { 0, 0.707, 1 };
```
 C++ 
```csharp
    // Define batch ray trace constants
    double hx = 0.0;
    int max_wave = TheSystem->SystemData->Wavelengths->NumberOfWavelengths;
    int num_fields = TheSystem->SystemData->Fields->NumberOfFields;
    double hy_ary[] = { 0, 0.707, 1 };
```
 Matlab 
```csharp
    % define batch ray trace constants
    hx = 0;
    max_wave = TheSystem.SystemData.Wavelengths.NumberOfWavelengths;
    hy_ary = [0, 0.707, 1];
```
 Python 
```csharp
    # Define batch ray trace constants
    hx = 0.0
    max_wave = TheSystem.SystemData.Wavelengths.NumberOfWavelengths
    num_fields = TheSystem.SystemData.Fields.NumberOfFields
    hy_ary = np.array([0, 0.707, 1])
```
 


The number of wavelengths.


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IWavelengths.NumberOfWavelengths"}]}`
-->

## Public functions

### Function GetWavelength

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelengths_1a31ddb977e30e298c8f8281b0694af0c9"></a>

![][public]


```csharp
IWavelength ZOSAPI.SystemData.IWavelengths.GetWavelength(int position)
```


Gets the specified wavelength."/>.

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
 


**Parameters**:

* **position**: The wavelength * to retrieve (1-24).


**Returns**:

The specified IWavelength, if the position is valid; otherwise, <code>null</code>.


**Parameters**:

* int **position**

**Return type**: [IWavelength](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelength.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelength)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IWavelengths.GetWavelength"}]}`
-->

### Function AddWavelength

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelengths_1af5dbb0d8728f022a0ba82e691c0c7dc1"></a>

![][public]


```csharp
IWavelength ZOSAPI.SystemData.IWavelengths.AddWavelength(double Wavelength, double Weight)
```


Add a new wavelengths, after all the current wavelengths.

**Parameters**:

* **Wavelength**: The wavelength (um).
* **Weight**: The weight.


**Returns**:

The new IWavelength if there were less than twelve wavelengths; otherwise, 
```csharp
null
```
.


**Parameters**:

* double **Wavelength**
* double **Weight**

**Return type**: [IWavelength](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelength.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelength)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IWavelengths.AddWavelength"}]}`
-->

### Function RemoveWavelength

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelengths_1a4c84bc4075a4c3b5a434366dd9f66d4e"></a>

![][public]


```csharp
bool ZOSAPI.SystemData.IWavelengths.RemoveWavelength(int position)
```


Removes the specified wavelength.

**Parameters**:

* **position**: The wavelength # to remove (1-24).


**Returns**:


```csharp
true
```
 if the position is valid and there were at least two wavelengths in the system; otherwise, 
```csharp
false
```
.


**Parameters**:

* int **position**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IWavelengths.RemoveWavelength"}]}`
-->

### Function SelectWavelengthPreset

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelengths_1a8d96b6f0046e8e23bf6a9b60525b95a0"></a>

![][public]


```csharp
bool ZOSAPI.SystemData.IWavelengths.SelectWavelengthPreset(WavelengthPreset preset)
```


Replaces all system wavelengths with a preset definition.

Usage (see [Example 15](../apiexamples/example_15.md) for a full sample)


C# 
```csharp
            //Add 3 wavelengths: F,d,C
            bool slPreset = SystExplorer.Wavelengths.SelectWavelengthPreset(ZOSAPI.SystemData.WavelengthPreset.FdC_Visible);
```
 C++ 
```csharp
    // Add 3 wavelengths: F, d, C
    bool slPreset = SystExplorer->Wavelengths->SelectWavelengthPreset(WavelengthPreset::WavelengthPreset_FdC_Visible);
```
 Matlab 
```csharp
    %Add 3 wavelengths: F,d,C
    slPreset = SystExplorer.Wavelengths.SelectWavelengthPreset(ZOSAPI.SystemData.WavelengthPreset.FdC_Visible);                  
```
 Python 
```csharp
    # Add 3 wavelengths: F,d,C
    slPreset = SystExplorer.Wavelengths.SelectWavelengthPreset(ZOSAPI.SystemData.WavelengthPreset.FdC_Visible)
```
 


**Parameters**:

* **preset**: The new preset.


**Returns**:


**Parameters**:

* [WavelengthPreset](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1af09b97b3888a6e2576ed1e0baa359b92) **preset**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IWavelengths.SelectWavelengthPreset"}]}`
-->

### Function GaussianQuadrature

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_wavelengths_1a8a2bf14cb6a1f3519592e6cf5406641e"></a>

![][public]


```csharp
bool ZOSAPI.SystemData.IWavelengths.GaussianQuadrature(double minWave, double maxWave, QuadratureSteps numSteps)
```


Generates a new set of system wavelengths based on a Gaussian Quadrature method.

Usage (see [Example 12](../apiexamples/example_12.md) for a full sample)


C# 
```csharp
            // Select 6 wavelengths using a Gaussian Quadrature algorithm
            ZOSAPI.SystemData.IWavelengths sysWave = TheSystem.SystemData.Wavelengths;
            sysWave.GaussianQuadrature(0.45, 0.65, ZOSAPI.SystemData.QuadratureSteps.S6);
```
 C++ 
```csharp
    ZOSAPI_Interfaces::IWavelengthsPtr sysWave = TheSystem->SystemData->Wavelengths;
    sysWave->GaussianQuadrature(0.45, 0.65, ZOSAPI_Interfaces::QuadratureSteps_S6);
```
 Matlab 
```csharp
    % Select 6 wavelengths using a Gaussian Quadrature algorithm
    sysWave = TheSystem.SystemData.Wavelengths;
    sysWave.GaussianQuadrature(0.45, 0.65, ZOSAPI.SystemData.QuadratureSteps.S6);
```
 Python 
```csharp
    # Select 6 wavelengths with Gaussian Quadrature algorithm
    sysWave = TheSystem.SystemData.Wavelengths
    sysWave.GaussianQuadrature(0.45, 0.65, ZOSAPI.SystemData.QuadratureSteps.S6)
```
 


<br/>


**Parameters**:

* **minWave**: The starting wavelength (microns).
* **maxWave**: The ending wavelength (microns).
* **numSteps**: The total number of wavelengths (2-24).


**Returns**:


**Parameters**:

* double **minWave**
* double **maxWave**
* [QuadratureSteps](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1a167b0c990e8a883f504c111394d8901b) **numSteps**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.IWavelengths.GaussianQuadrature"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
