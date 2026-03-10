# Interface ZOSAPI::Editors::NCE::IVMPS_PhotoluminscenceModel

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model"></a>

![][C#]
![][public]

**Definition**:

Volume Physics Model - Phosphors and Fluorescence. This interface can be accessed via the INCEVolumePhysicsData interface.

Usage (see [Example 21](page_ex21.md#page_ex21) for a full sample)


C# 
```csharp
            // Make object 3 a volume scattering material
            // VolumePhysicsData includes all settings in Object Properties > VolumePhysics.
            // Use Photoluminescence model
            Object_3.VolumePhysicsData.Model = VolumePhysicsModelType.PhotoluminescenceModel;
            IVMPS_PhotoluminscenceModel Photo_setting = Object_3.VolumePhysicsData.ModelSettings._S_PhotoluminescenceModel;
            // Use Standard Model
            Photo_setting.BasicAlgorithm = false;
            // Set absorb, emission and quantum yield spectrum files
            Photo_setting.AbsorptionFile = "_sample_3.ZAS";
            Photo_setting.EmissionFile = "_sample_3.ZES";
            Photo_setting.QuantumYield = "_sample_3.ZQE";
            // Set efficiency spectrum to quantum yield
            Photo_setting.EfficiencySpectrum = EfficiencySpectrumType.QuantumYield;
            // Set photoluminescence parameters
            Photo_setting.ExtinctionCoefficient = 1E+05;
            Photo_setting.ExtinctionWavelength = 0.47;
            Photo_setting.PLDensity = 3.1E+017;
            // Set model to ignore mie scattering
            Photo_setting.ConsiderMieScattering = false;
```
 C++ 
```csharp
    // Make object 3 a volume scattering material
    // VolumePhysicsData includes all settings in Object Properties > VolumePhysics.
    // Use Photoluminescence model
    Object_3->VolumePhysicsData->Model = VolumePhysicsModelType_PhotoluminescenceModel;
    IVMPS_PhotoluminscenceModelPtr Photo_setting = Object_3->VolumePhysicsData->ModelSettings->_S_PhotoluminescenceModel;
    // Use standard algorithm
    Photo_setting->BasicAlgorithm = false;
    // Set absorb, emission and quantum yield files
    Photo_setting->AbsorptionFile = "_sample_3.ZAS";
    Photo_setting->EmissionFile = "_sample_3.ZES";
    Photo_setting->QuantumYield = "_sample_3.ZQE";
    // Set efficiency spectrum to quantum yield
    Photo_setting->EfficiencySpectrum = EfficiencySpectrumType_QuantumYield;
    // Set photoluminescence parameters
    Photo_setting->ExtinctionCoefficient = 1e+05;
    Photo_setting->ExtinctionWavelength = 0.47;
    Photo_setting->PLDensity = 3.1e+017;
    // Set model to ignore mie scattering
    Photo_setting->ConsiderMieScattering = false;
```
 Matlab 
```csharp
    % Make object 3 a volume scattering material
    % VolumePhysicsData includes all settings in Object Properties > VolumePhysics.
    % Use Photoluminescence model
    Object_3.VolumePhysicsData.Model = ZOSAPI.Editors.NCE.VolumePhysicsModelType.PhotoluminescenceModel;
    Photo_setting = Object_3.VolumePhysicsData.ModelSettings.S_PhotoluminescenceModel_;
    % Use Standard algorithm
    Photo_setting.BasicAlgorithm = false;
    % Set absorption, emission and quantum yield files
    Photo_setting.AbsorptionFile = '_sample_3.ZAS';
    Photo_setting.EmissionFile = '_sample_3.ZES';
    Photo_setting.QuantumYield = '_sample_3.ZQE';
    % Set efficiency spectrum to quantum yield
    Photo_setting.EfficiencySpectrum = ZOSAPI.Editors.NCE.EfficiencySpectrumType.QuantumYield;
    % Set photoluminescence parameters
    Photo_setting.ExtinctionCoefficient = 1E+05;
    Photo_setting.ExtinctionWavelength = 0.47;
    Photo_setting.PLDensity = 3.1E+17;
    % Disable Mie Model
    Photo_setting.ConsiderMieScattering = false;
```
 Python 
```csharp
    # Make object 3 a volume scattering material
    # VolumePhysicsData includes all settings in Object Properties > VolumePhysics.
    # Use Photoluminescence model
    Object_3.VolumePhysicsData.Model = ZOSAPI.Editors.NCE.VolumePhysicsModelType.PhotoluminescenceModel
    Photo_setting = Object_3.VolumePhysicsData.ModelSettings._S_PhotoluminescenceModel
    # Use Standard Algorithm
    Photo_setting.BasicAlgorithm = False
    # Set absorption, emission and quantum yield files
    Photo_setting.AbsorptionFile = '_sample_3.ZAS'
    Photo_setting.EmissionFile = '_sample_3.ZES'
    Photo_setting.QuantumYield = '_sample_3.ZQE'
    # set efficiency spectrum to quantum yield
    Photo_setting.EfficiencySpectrum = ZOSAPI.Editors.NCE.EfficiencySpectrumType.QuantumYield
    # set photoluminescence parameters
    Photo_setting.ExtinctionCoefficient = 1E+05
    Photo_setting.ExtinctionWavelength = 0.47
    Photo_setting.PLDensity = 3.1E+017
    # Set Model to Ignore Mie Scattering
    Photo_setting.ConsiderMieScattering = False
```

**Inherits from**:

* [ZOSAPI.Editors.NCE.IVolumePhysicsModelSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings)

## Members

* [\_S\_AngleScattering](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings_1a0d6315e8c4490ccb8a2cf5ce52475f7c)
* [\_S\_DLLDefinedScattering](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings_1a91d7f75ed8ff7548eda882ad739bcef5)
* [\_S\_None](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings_1a2637b01347f773302d2c2f4d75fc3458)
* [\_S\_PhotoluminescenceModel](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings_1a1abfcd38f597d1840ad99c41824bbab0)
* [AbsorptionFile](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1aec3a5a7ebe78cfb1ec3104fc9a9dd516)
* [AreSettingsValid](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a0298470a1331a9c04f7c375f2875131b)
* [BasicAlgorithm](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a6135cbe995ebbaef26d79efa773f539e)
* [ConsiderMieScattering](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a0d9e24c8c65c6679956c9070d2391c8c)
* [EfficiencySpectrum](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1ad7e372eb10e718e92007fe86ffd3c5e4)
* [EmissionFile](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a65fae856f7bd170fb37f6e20e4d67a31)
* [ExcitationFile](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a7762c600628898ed50f5696e68b2d7a4)
* [ExtinctionCoefficient](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1af7b27ce6503ae0090ff52dd4be5932a0)
* [ExtinctionWavelength](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a80390122566607749841584d9c96e4a6)
* [GetAvailableAbsorptionFiles](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a2be95dc2eb5e8007eed9e2959f8c0c20)
* [GetAvailableEmissionFiles](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a926e2b915ed95c26ed17bb6869fe8eec)
* [GetAvailableExcitationFiles](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a1feb927c7a69d8cda52b62c9d2850d4f)
* [GetAvailableQuantumYieldFiles](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a7c29fa85d78cf87d126321d83ed7428e)
* [IsValid](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings_1abdd68a49b7ecece33bc38c8c639ef023)
* [MieMeanPath](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a27ed695c7697f07e7febebd78e29ce45)
* [ParticleDensity](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a928604b1a4430ffeb1b6c827d11137ae)
* [ParticleIndex](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a99c7eb9309a70dfef2809239090f6fa9)
* [ParticleRadius](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a0ea99376d055d5f0c54edb216da4b146)
* [PLDensity](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a3092214ac9602d7c4c79f54c551d89c4)
* [PLMeanPath](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a1ff430d6dbd0e860505ba3114d6a97ff)
* [QuantumYield](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a491b030a33c41aa29d23ba7c668d24f4)
* [Threshold](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1aea5a91e93141cd4fa7c7c68b948c78ad)
* [Type](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_volume_physics_model_settings_1a9007f1942da20d97b25df1bbb9cdbbb1)
* [UseMieDensity](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1af44228d87c0154b58d4cdf4c2076ed93)

## Properties

### Property AreSettingsValid

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a0298470a1331a9c04f7c375f2875131b"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.AreSettingsValid
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.AreSettingsValid"}]}`
-->

### Property AbsorptionFile

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1aec3a5a7ebe78cfb1ec3104fc9a9dd516"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.AbsorptionFile
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.AbsorptionFile"}]}`
-->

### Property EmissionFile

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a65fae856f7bd170fb37f6e20e4d67a31"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.EmissionFile
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.EmissionFile"}]}`
-->

### Property ExcitationFile

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a7762c600628898ed50f5696e68b2d7a4"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.ExcitationFile
```


ExcitationFile parameter is no longer used - please use QuantumYield!


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.ExcitationFile"}]}`
-->

### Property QuantumYield

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a491b030a33c41aa29d23ba7c668d24f4"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.QuantumYield
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.QuantumYield"}]}`
-->

### Property ParticleIndex

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a99c7eb9309a70dfef2809239090f6fa9"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.ParticleIndex
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.ParticleIndex"}]}`
-->

### Property ParticleDensity

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a928604b1a4430ffeb1b6c827d11137ae"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.ParticleDensity
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.ParticleDensity"}]}`
-->

### Property ParticleRadius

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a0ea99376d055d5f0c54edb216da4b146"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.ParticleRadius
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.ParticleRadius"}]}`
-->

### Property Threshold

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1aea5a91e93141cd4fa7c7c68b948c78ad"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.Threshold
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.Threshold"}]}`
-->

### Property BasicAlgorithm

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a6135cbe995ebbaef26d79efa773f539e"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.BasicAlgorithm
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.BasicAlgorithm"}]}`
-->

### Property PLMeanPath

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a1ff430d6dbd0e860505ba3114d6a97ff"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.PLMeanPath
```


PLMeanPath parameter is no longer used - please use ExtinctionCoefficient, ExtinctionWavelength and PLDensity instead!


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.PLMeanPath"}]}`
-->

### Property UseMieDensity

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1af44228d87c0154b58d4cdf4c2076ed93"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.UseMieDensity
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.UseMieDensity"}]}`
-->

### Property MieMeanPath

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a27ed695c7697f07e7febebd78e29ce45"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.MieMeanPath
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.MieMeanPath"}]}`
-->

### Property EfficiencySpectrum

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1ad7e372eb10e718e92007fe86ffd3c5e4"></a>

![][public]

**Definition**:


```csharp
EfficiencySpectrumType ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.EfficiencySpectrum
```


Obsolete. EfficiencySpectrum always returns QuantumYield.


**Return type**: [EfficiencySpectrumType](namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1a9ba5d28c37279724bc7bb5a569291006)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.EfficiencySpectrum"}]}`
-->

### Property ExtinctionCoefficient

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1af7b27ce6503ae0090ff52dd4be5932a0"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.ExtinctionCoefficient
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.ExtinctionCoefficient"}]}`
-->

### Property ExtinctionWavelength

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a80390122566607749841584d9c96e4a6"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.ExtinctionWavelength
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.ExtinctionWavelength"}]}`
-->

### Property PLDensity

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a3092214ac9602d7c4c79f54c551d89c4"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.PLDensity
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.PLDensity"}]}`
-->

### Property ConsiderMieScattering

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a0d9e24c8c65c6679956c9070d2391c8c"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.ConsiderMieScattering
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.ConsiderMieScattering"}]}`
-->

## Public functions

### Function GetAvailableAbsorptionFiles

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a2be95dc2eb5e8007eed9e2959f8c0c20"></a>

![][public]


```csharp
string[] ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.GetAvailableAbsorptionFiles()
```


**Return type**: string[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.GetAvailableAbsorptionFiles"}]}`
-->

### Function GetAvailableEmissionFiles

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a926e2b915ed95c26ed17bb6869fe8eec"></a>

![][public]


```csharp
string[] ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.GetAvailableEmissionFiles()
```


**Return type**: string[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.GetAvailableEmissionFiles"}]}`
-->

### Function GetAvailableExcitationFiles

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a1feb927c7a69d8cda52b62c9d2850d4f"></a>

![][public]


```csharp
string[] ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.GetAvailableExcitationFiles()
```


ExcitationFile parameter is no longer used - please use QuantumYield!


**Return type**: string[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.GetAvailableExcitationFiles"}]}`
-->

### Function GetAvailableQuantumYieldFiles

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_v_m_p_s___photoluminscence_model_1a7c29fa85d78cf87d126321d83ed7428e"></a>

![][public]


```csharp
string[] ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.GetAvailableQuantumYieldFiles()
```


**Return type**: string[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.IVMPS_PhotoluminscenceModel.GetAvailableQuantumYieldFiles"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)