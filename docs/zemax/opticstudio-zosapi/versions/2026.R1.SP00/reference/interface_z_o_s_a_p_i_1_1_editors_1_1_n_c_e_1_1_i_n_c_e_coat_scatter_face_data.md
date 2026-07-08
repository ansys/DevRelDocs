# Interface ZOSAPI::Editors::NCE::INCECoatScatterFaceData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data"></a>

![][C#]
![][public]

**Definition**:

Coat/Scatter settings for a specific face. This interface can be accessed via the INCECoatScatterData interface.

Usage (see [Example 21](../apiexamples/example_21.md) for a full sample)


C# 
```csharp
            // Make Face 1 of object 3 has Lambertian scattering properties
            // To set scatter properties, you need to first create "ScatteringSettings" by "CreateScatterModelSettings()" method.
            // And then assign is to object 3 by ChangeScatterModelSettings().
            IObjectScatteringSettings ScatType_Lam = Object_3.CoatScatterData.GetFaceData(1).CreateScatterModelSettings(ObjectScatteringTypes.Lambertian);
            ScatType_Lam._S_Lambertian.ScatterFraction = 1;
            Object_3.CoatScatterData.GetFaceData(1).ChangeScatterModelSettings(ScatType_Lam);
            Object_3.CoatScatterData.GetFaceData(1).NumberOfRays = 1;
```
 C++ 
```csharp
    // Make Face 1 of object 3 has Lambertian scattering properties
    // To set scatter properties, you need to first create "ScatteringSettings" by "CreateScatterModelSettings()" method.
    // And then assign is to object 3 by ChangeScatterModelSettings().
    IObjectScatteringSettingsPtr ScatType_Lam = Object_3->CoatScatterData->GetFaceData(1)->CreateScatterModelSettings(ObjectScatteringTypes_Lambertian);
    ScatType_Lam->_S_Lambertian->ScatterFraction = 1;
    Object_3->CoatScatterData->GetFaceData(1)->ChangeScatterModelSettings(ScatType_Lam);
    Object_3->CoatScatterData->GetFaceData(1)->NumberOfRays = 1;
```
 Matlab 
```csharp
    % Make Face 1 of object 3 has Lambertian scattering properties
    % To set scatter properties, you need to first create "ScatteringSettings" by "CreateScatterModelSettings()" method.
    % And then assign is to object 3 by ChangeScatterModelSettings().
    ScatType_Lam = Object_3.CoatScatterData.GetFaceData(1).CreateScatterModelSettings(ZOSAPI.Editors.NCE.ObjectScatteringTypes.Lambertian);
    ScatType_Lam.S_Lambertian_.ScatterFraction = 1;
    Object_3.CoatScatterData.GetFaceData(1).ChangeScatterModelSettings(ScatType_Lam);
    Object_3.CoatScatterData.GetFaceData(1).NumberOfRays = 1;
```
 Python 
```csharp
    # Make Face 1 of object 3 has Lambertian scattering properties
    # To set scatter properties, you need to first create "ScatteringSettings" by "CreateScatterModelSettings()" method.
    # And then assign is to object 3 by ChangeScatterModelSettings().
    ScatType_Lam = Object_3.CoatScatterData.GetFaceData(1).CreateScatterModelSettings(ZOSAPI.Editors.NCE.ObjectScatteringTypes.Lambertian)
    ScatType_Lam._S_Lambertian.ScatterFraction = 1
    Object_3.CoatScatterData.GetFaceData(1).ChangeScatterModelSettings(ScatType_Lam)
    Object_3.CoatScatterData.GetFaceData(1).NumberOfRays = 1
```

## Members

* [ChangeScatterModelSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1aa11035827e3fe36d04a7da7c142dc6a7)
* [Coating](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1ac3b2d7eaf1d4d95a8254349caebea43d)
* [CopySettingsFrom](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1af319f159aa0d2ada4e835f21ee97bcdb)
* [CreateScatterModelSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1aab27c8591e3674cede79490a9561efee)
* [CurrentScatterModel](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1a62d69dfc5b56100b72ecf22fbf371af8)
* [CurrentScatterModelSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1a7c14911ba3df7131456aad9934b25aa6)
* [DeleteProfile](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1ad1f66fb0d1cdfae2ba7790a9c73cda57)
* [FaceIs](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1a7ecc4bc5b1e69305b9e4085b22347914)
* [FaceName](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1aee7e322b75be5c7024dc85c92402afae)
* [FaceNumber](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1a620113a5ab0eed294c8642d540132d75)
* [GetAvailableCoatings](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1ac3ff9ea08a6354ae6c6b19a61995bfd5)
* [GetAvailableProfiles](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1a50c5e294093b116170af3afe6b0fc517)
* [IsCustom](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1aac4888c6136e0a35180b232f69401a64)
* [IsProfile](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1ae3a0b6c9b34057606156ad55bf99dc82)
* [IsReadOnly](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1ad815497db177045fce21c334526a4d8a)
* [IsValid](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1af241d481bf41d80274844768b0895eac)
* [NumberOfRays](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1a6dbb88bb5802a119a890aaa4e6f9572a)
* [ProfileName](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1a0aedaa9704ff5a01904af99da587c7ac)
* [SaveProfile](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1a6bda59c3b874e66ad9090347fd404d45)
* [ThinWindowScattering](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1a8e5c7cf6481627a596d13a3371171f44)
* [UseCustomSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1aa924e01d2b48c13c062c9a1b55ee188a)
* [UseProfile](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1a8ab2f0612ca5ae34407327c383516356)

## Properties

### Property IsValid

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1af241d481bf41d80274844768b0895eac"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.INCECoatScatterFaceData.IsValid
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECoatScatterFaceData.IsValid"}]}`
-->

### Property FaceNumber

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1a620113a5ab0eed294c8642d540132d75"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.INCECoatScatterFaceData.FaceNumber
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECoatScatterFaceData.FaceNumber"}]}`
-->

### Property FaceName

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1aee7e322b75be5c7024dc85c92402afae"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Editors.NCE.INCECoatScatterFaceData.FaceName
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECoatScatterFaceData.FaceName"}]}`
-->

### Property IsReadOnly

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1ad815497db177045fce21c334526a4d8a"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.INCECoatScatterFaceData.IsReadOnly
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECoatScatterFaceData.IsReadOnly"}]}`
-->

### Property IsCustom

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1aac4888c6136e0a35180b232f69401a64"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.INCECoatScatterFaceData.IsCustom
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECoatScatterFaceData.IsCustom"}]}`
-->

### Property IsProfile

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1ae3a0b6c9b34057606156ad55bf99dc82"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.INCECoatScatterFaceData.IsProfile
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECoatScatterFaceData.IsProfile"}]}`
-->

### Property ProfileName

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1a0aedaa9704ff5a01904af99da587c7ac"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Editors.NCE.INCECoatScatterFaceData.ProfileName
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECoatScatterFaceData.ProfileName"}]}`
-->

### Property FaceIs

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1a7ecc4bc5b1e69305b9e4085b22347914"></a>

![][public]

**Definition**:


```csharp
FaceIsType ZOSAPI.Editors.NCE.INCECoatScatterFaceData.FaceIs
```


Usage (see [Example 24](../apiexamples/example_24.md) for a full sample)


C# 
```csharp
            // Changes face type and coating properties
            TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(0).FaceIs = ZOSAPI.Editors.NCE.FaceIsType.Absorbing;
            TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(1).FaceIs = ZOSAPI.Editors.NCE.FaceIsType.ObjectDefault;
            TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(1).Coating = "I.50";
```
 C++ 
```csharp
    // Changes face type and coating properties
    TheNCE->GetObjectAt(3)->CoatScatterData->GetFaceData(0)->FaceIs = FaceIsType_Absorbing;
    TheNCE->GetObjectAt(3)->CoatScatterData->GetFaceData(1)->FaceIs = FaceIsType_ObjectDefault;
    TheNCE->GetObjectAt(3)->CoatScatterData->GetFaceData(1)->Coating = "I.50";
```
 Matlab 
```csharp
    % changes face type and coating properties
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(0).FaceIs = ZOSAPI.Editors.NCE.FaceIsType.Absorbing;
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(1).FaceIs = ZOSAPI.Editors.NCE.FaceIsType.ObjectDefault;
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(1).Coating = 'I.50';
```
 Python 
```csharp
    # changes face type and coating properties
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(0).FaceIs = ZOSAPI.Editors.NCE.FaceIsType.Absorbing
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(1).FaceIs = ZOSAPI.Editors.NCE.FaceIsType.ObjectDefault
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(1).Coating = 'I.50'
```


**Return type**: [FaceIsType](namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1afc75ea3c4a7da5b2c508a5b556e81751)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECoatScatterFaceData.FaceIs"}]}`
-->

### Property Coating

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1ac3b2d7eaf1d4d95a8254349caebea43d"></a>

![][public]

**Definition**:


```csharp
string ZOSAPI.Editors.NCE.INCECoatScatterFaceData.Coating
```


Usage (see [Example 24](../apiexamples/example_24.md) for a full sample)


C# 
```csharp
            // Changes face type and coating properties
            TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(0).FaceIs = ZOSAPI.Editors.NCE.FaceIsType.Absorbing;
            TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(1).FaceIs = ZOSAPI.Editors.NCE.FaceIsType.ObjectDefault;
            TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(1).Coating = "I.50";
```
 C++ 
```csharp
    // Changes face type and coating properties
    TheNCE->GetObjectAt(3)->CoatScatterData->GetFaceData(0)->FaceIs = FaceIsType_Absorbing;
    TheNCE->GetObjectAt(3)->CoatScatterData->GetFaceData(1)->FaceIs = FaceIsType_ObjectDefault;
    TheNCE->GetObjectAt(3)->CoatScatterData->GetFaceData(1)->Coating = "I.50";
```
 Matlab 
```csharp
    % changes face type and coating properties
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(0).FaceIs = ZOSAPI.Editors.NCE.FaceIsType.Absorbing;
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(1).FaceIs = ZOSAPI.Editors.NCE.FaceIsType.ObjectDefault;
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(1).Coating = 'I.50';
```
 Python 
```csharp
    # changes face type and coating properties
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(0).FaceIs = ZOSAPI.Editors.NCE.FaceIsType.Absorbing
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(1).FaceIs = ZOSAPI.Editors.NCE.FaceIsType.ObjectDefault
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(1).Coating = 'I.50'
```


**Return type**: string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECoatScatterFaceData.Coating"}]}`
-->

### Property CurrentScatterModel

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1a62d69dfc5b56100b72ecf22fbf371af8"></a>

![][public]

**Definition**:


```csharp
ObjectScatteringTypes ZOSAPI.Editors.NCE.INCECoatScatterFaceData.CurrentScatterModel
```


**Return type**: [ObjectScatteringTypes](namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1aa304775d54d1966c4f42071aa30d0010)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECoatScatterFaceData.CurrentScatterModel"}]}`
-->

### Property CurrentScatterModelSettings

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1a7c14911ba3df7131456aad9934b25aa6"></a>

![][public]

**Definition**:


```csharp
IObjectScatteringSettings ZOSAPI.Editors.NCE.INCECoatScatterFaceData.CurrentScatterModelSettings
```


**Return type**: [IObjectScatteringSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECoatScatterFaceData.CurrentScatterModelSettings"}]}`
-->

### Property ThinWindowScattering

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1a8e5c7cf6481627a596d13a3371171f44"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.NCE.INCECoatScatterFaceData.ThinWindowScattering
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECoatScatterFaceData.ThinWindowScattering"}]}`
-->

### Property NumberOfRays

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1a6dbb88bb5802a119a890aaa4e6f9572a"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.NCE.INCECoatScatterFaceData.NumberOfRays
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECoatScatterFaceData.NumberOfRays"}]}`
-->

## Public functions

### Function UseCustomSettings

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1aa924e01d2b48c13c062c9a1b55ee188a"></a>

![][public]


```csharp
bool ZOSAPI.Editors.NCE.INCECoatScatterFaceData.UseCustomSettings()
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECoatScatterFaceData.UseCustomSettings"}]}`
-->

### Function UseProfile

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1a8ab2f0612ca5ae34407327c383516356"></a>

![][public]


```csharp
bool ZOSAPI.Editors.NCE.INCECoatScatterFaceData.UseProfile(string profile)
```


**Parameters**:

* string **profile**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECoatScatterFaceData.UseProfile"}]}`
-->

### Function GetAvailableProfiles

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1a50c5e294093b116170af3afe6b0fc517"></a>

![][public]


```csharp
string[] ZOSAPI.Editors.NCE.INCECoatScatterFaceData.GetAvailableProfiles()
```


**Return type**: string[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECoatScatterFaceData.GetAvailableProfiles"}]}`
-->

### Function DeleteProfile

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1ad1f66fb0d1cdfae2ba7790a9c73cda57"></a>

![][public]


```csharp
bool ZOSAPI.Editors.NCE.INCECoatScatterFaceData.DeleteProfile()
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECoatScatterFaceData.DeleteProfile"}]}`
-->

### Function SaveProfile

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1a6bda59c3b874e66ad9090347fd404d45"></a>

![][public]


```csharp
bool ZOSAPI.Editors.NCE.INCECoatScatterFaceData.SaveProfile(string profileName)
```


**Parameters**:

* string **profileName**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECoatScatterFaceData.SaveProfile"}]}`
-->

### Function GetAvailableCoatings

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1ac3ff9ea08a6354ae6c6b19a61995bfd5"></a>

![][public]


```csharp
string[] ZOSAPI.Editors.NCE.INCECoatScatterFaceData.GetAvailableCoatings()
```


**Return type**: string[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECoatScatterFaceData.GetAvailableCoatings"}]}`
-->

### Function CreateScatterModelSettings

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1aab27c8591e3674cede79490a9561efee"></a>

![][public]


```csharp
IObjectScatteringSettings ZOSAPI.Editors.NCE.INCECoatScatterFaceData.CreateScatterModelSettings(ObjectScatteringTypes type)
```


Usage (see [Example 24](../apiexamples/example_24.md) for a full sample)


C# 
```csharp
            // changes scatter profile on face
            ZOSAPI.Editors.NCE.IObjectScatteringSettings o3_Scatter = TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(2).CreateScatterModelSettings(ZOSAPI.Editors.NCE.ObjectScatteringTypes.Lambertian);
            o3_Scatter._S_Lambertian.ScatterFraction = 0.5;
            TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(2).ChangeScatterModelSettings(o3_Scatter);
            TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(2).NumberOfRays = 2;
```
 C++ 
```csharp
    // changes scatter profile on face
    IObjectScatteringSettingsPtr o3_scatter = TheNCE->GetObjectAt(3)->CoatScatterData->GetFaceData(2)->CreateScatterModelSettings(ObjectScatteringTypes::ObjectScatteringTypes_Lambertian);
    o3_scatter->_S_Lambertian->ScatterFraction = 0.5;
    TheNCE->GetObjectAt(3)->CoatScatterData->GetFaceData(2)->ChangeScatterModelSettings(o3_scatter);
    TheNCE->GetObjectAt(3)->CoatScatterData->GetFaceData(2)->NumberOfRays = 2;
```
 Matlab 
```csharp
    % changes scatter profile on face
    o3_Scatter = TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(2).CreateScatterModelSettings(ZOSAPI.Editors.NCE.ObjectScatteringTypes.Lambertian);
    o3_Scatter.S_Lambertian_.ScatterFraction = 0.5;
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(2).ChangeScatterModelSettings(o3_Scatter);
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(2).NumberOfRays = 2;
```
 Python 
```csharp
    # changes scatter profile on face
    o3_Scatter = TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(2).CreateScatterModelSettings(ZOSAPI.Editors.NCE.ObjectScatteringTypes.Lambertian)
    o3_Scatter._S_Lambertian.ScatterFraction = 0.5
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(2).ChangeScatterModelSettings(o3_Scatter)
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(2).NumberOfRays = 2
```


**Parameters**:

* [ObjectScatteringTypes](namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1aa304775d54d1966c4f42071aa30d0010) **type**

**Return type**: [IObjectScatteringSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECoatScatterFaceData.CreateScatterModelSettings"}]}`
-->

### Function ChangeScatterModelSettings

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1aa11035827e3fe36d04a7da7c142dc6a7"></a>

![][public]


```csharp
bool ZOSAPI.Editors.NCE.INCECoatScatterFaceData.ChangeScatterModelSettings(IObjectScatteringSettings newSettings)
```


Usage (see [Example 24](../apiexamples/example_24.md) for a full sample)


C# 
```csharp
            // changes scatter profile on face
            ZOSAPI.Editors.NCE.IObjectScatteringSettings o3_Scatter = TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(2).CreateScatterModelSettings(ZOSAPI.Editors.NCE.ObjectScatteringTypes.Lambertian);
            o3_Scatter._S_Lambertian.ScatterFraction = 0.5;
            TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(2).ChangeScatterModelSettings(o3_Scatter);
            TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(2).NumberOfRays = 2;
```
 C++ 
```csharp
    // changes scatter profile on face
    IObjectScatteringSettingsPtr o3_scatter = TheNCE->GetObjectAt(3)->CoatScatterData->GetFaceData(2)->CreateScatterModelSettings(ObjectScatteringTypes::ObjectScatteringTypes_Lambertian);
    o3_scatter->_S_Lambertian->ScatterFraction = 0.5;
    TheNCE->GetObjectAt(3)->CoatScatterData->GetFaceData(2)->ChangeScatterModelSettings(o3_scatter);
    TheNCE->GetObjectAt(3)->CoatScatterData->GetFaceData(2)->NumberOfRays = 2;
```
 Matlab 
```csharp
    % changes scatter profile on face
    o3_Scatter = TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(2).CreateScatterModelSettings(ZOSAPI.Editors.NCE.ObjectScatteringTypes.Lambertian);
    o3_Scatter.S_Lambertian_.ScatterFraction = 0.5;
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(2).ChangeScatterModelSettings(o3_Scatter);
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(2).NumberOfRays = 2;
```
 Python 
```csharp
    # changes scatter profile on face
    o3_Scatter = TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(2).CreateScatterModelSettings(ZOSAPI.Editors.NCE.ObjectScatteringTypes.Lambertian)
    o3_Scatter._S_Lambertian.ScatterFraction = 0.5
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(2).ChangeScatterModelSettings(o3_Scatter)
    TheNCE.GetObjectAt(3).CoatScatterData.GetFaceData(2).NumberOfRays = 2
```


**Parameters**:

* [IObjectScatteringSettings](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_object_scattering_settings) **newSettings**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECoatScatterFaceData.ChangeScatterModelSettings"}]}`
-->

### Function CopySettingsFrom

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data_1af319f159aa0d2ada4e835f21ee97bcdb"></a>

![][public]


```csharp
void ZOSAPI.Editors.NCE.INCECoatScatterFaceData.CopySettingsFrom(INCECoatScatterFaceData fromFace)
```


Copies the coat/scatter settings from the specified face to this face.

**Parameters**:

* **fromFace**: The coat/scatter settings to copy.


**Parameters**:

* [INCECoatScatterFaceData](interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_n_c_e_1_1_i_n_c_e_coat_scatter_face_data) **fromFace**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.NCE.INCECoatScatterFaceData.CopySettingsFrom"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
