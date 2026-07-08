# Interface ZOSAPI::Editors::LDE::ILDETiltDecenterData

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data"></a>

![][C#]
![][public]

**Definition**:

Surface properties tilt/decenter data. This interface can be accessed via the ILDERow interface.

Usage (see [Example 19](../apiexamples/example_19.md) for a full sample)


C# 
```csharp
            // GetSurfaceAt(surface number shown in LDE) will return an interface ILDERow
            // Through property TiltDecenterData of each interface ILDERow, we can modify data in Surface Properties > Tilt/Decenter section
            TheLDE.GetSurfaceAt(2).TiltDecenterData.BeforeSurfaceOrder = TiltDecenterOrderType.Decenter_Tilt;
            TheLDE.GetSurfaceAt(2).TiltDecenterData.BeforeSurfaceTiltX = 15;
            TheLDE.GetSurfaceAt(2).TiltDecenterData.AfterSurfaceTiltX = -15;
            TheLDE.GetSurfaceAt(3).TiltDecenterData.BeforeSurfaceTiltX = -15;
            TheLDE.GetSurfaceAt(3).TiltDecenterData.AfterSurfaceTiltX = 15;
```
 C++ 
```csharp
    // GetSurfaceAt(surface number shown in LDE) will return an interface ILDERow
    // Through property TiltDecenterData of each interface ILDERow, we can modify data in Surface Properties > Tilt/Decenter section
    TheLDE->GetSurfaceAt(2)->TiltDecenterData->BeforeSurfaceOrder = TiltDecenterOrderType_Decenter_Tilt;
    TheLDE->GetSurfaceAt(2)->TiltDecenterData->BeforeSurfaceTiltX = 15;
    TheLDE->GetSurfaceAt(2)->TiltDecenterData->AfterSurfaceTiltX = -15;
    TheLDE->GetSurfaceAt(3)->TiltDecenterData->BeforeSurfaceTiltX = -15;
    TheLDE->GetSurfaceAt(3)->TiltDecenterData->AfterSurfaceTiltX = 15;
```
 Matlab 
```csharp
    % GetSurfaceAt(surface number shown in LDE) will return an interface ILDERow
    % Through property TiltDecenterData of each interface ILDERow, we can modify data in Surface Properties > Tilt/Decenter section
    TheLDE.GetSurfaceAt(2).TiltDecenterData.BeforeSurfaceOrder = ZOSAPI.Editors.LDE.TiltDecenterOrderType.Decenter_Tilt;
    TheLDE.GetSurfaceAt(2).TiltDecenterData.BeforeSurfaceTiltX = 15;
    TheLDE.GetSurfaceAt(2).TiltDecenterData.AfterSurfaceTiltX = -15;
    TheLDE.GetSurfaceAt(3).TiltDecenterData.BeforeSurfaceTiltX = -15;
    TheLDE.GetSurfaceAt(3).TiltDecenterData.AfterSurfaceTiltX = 15;
```
 Python 
```csharp
    # GetSurfaceAt(surface number shown in LDE) will return an interface ILDERow
    # Through property TiltDecenterData of each interface ILDERow, we can modify data in Surface Properties > Tilt/Decenter section
    TheLDE.GetSurfaceAt(2).TiltDecenterData.BeforeSurfaceOrder = ZOSAPI.Editors.LDE.TiltDecenterOrderType.Decenter_Tilt
    TheLDE.GetSurfaceAt(2).TiltDecenterData.BeforeSurfaceTiltX = 15
    TheLDE.GetSurfaceAt(2).TiltDecenterData.AfterSurfaceTiltX = -15
    TheLDE.GetSurfaceAt(3).TiltDecenterData.BeforeSurfaceTiltX = -15
    TheLDE.GetSurfaceAt(3).TiltDecenterData.AfterSurfaceTiltX = 15
```

## Members

* [AfterSurfaceDecenterX](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a63738ef19ce4bcec03ecf2323266d7c6)
* [AfterSurfaceDecenterY](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a6ee5ad363149ff73fde0cdb58b55183c)
* [AfterSurfaceMode](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1ad56f8177de93eea91a62e2fcee5954ba)
* [AfterSurfaceModeSurface](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a701eb84fb9567705cfd83cd9945e741a)
* [AfterSurfaceModeSurfaceIsThis](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a433f1576b36d9d9aef66564709554fb3)
* [AfterSurfaceOrder](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a0d476f4db61a84d14be1a3befb28ed0c)
* [AfterSurfaceTiltX](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a714972568d80954de02bd08834658485)
* [AfterSurfaceTiltY](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a693831ae969e771a8ae4fb2a95af654e)
* [AfterSurfaceTiltZ](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1aab9c325495b2ea02c723eae8e69317a8)
* [BeforeAfterSurfaceEnabled](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a1926af5859a4a302efa1f4c02fc9e885)
* [BeforeSurfaceDecenterX](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a28e1939f45c394e8a3196745b7dbf63e)
* [BeforeSurfaceDecenterY](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1abdc0de13ca5f72c95ac671fc69bd9b57)
* [BeforeSurfaceOrder](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a4ea131c0c61fcb637370c64c95617b1d)
* [BeforeSurfaceTiltX](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1aecd58413b4158963121a05c9e45d46d3)
* [BeforeSurfaceTiltY](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a0f1d132bc806b1030448c7197c805e72)
* [BeforeSurfaceTiltZ](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a5138a633678cfbc4e16865394d9a7747)
* [CoordinateReturn](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a68375c0f991cf468a5a47795c96dff89)
* [CoordinateReturnEnabled](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1aa2b5c8af373c1c5ee83d37f99cff7bdf)
* [CoordinateReturnToSurface](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a9bbc8ab3d3d20b5f9ba1a3fb391b16a3)
* [SetAfterSurfaceModeExplicit](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1abe83fd1563741ffd2cdc9e65fa9ee737)
* [SetAfterSurfaceModePickup](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a41c9c5ff80bdef4208e3cd3af3c77813)
* [SetAfterSurfaceModePickupThis](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a956d845f3727490206f31ccfca6fa5ec)
* [SetAfterSurfaceModeReverse](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1ad932505abc696b6f2f08b291d90a2316)
* [SetAfterSurfaceModeReverseThis](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a761f0672499622b8c65e45a5d128ffea)

## Properties

### Property BeforeSurfaceOrder

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a4ea131c0c61fcb637370c64c95617b1d"></a>

![][public]

**Definition**:


```csharp
TiltDecenterOrderType ZOSAPI.Editors.LDE.ILDETiltDecenterData.BeforeSurfaceOrder
```


**Return type**: [TiltDecenterOrderType](namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1a7de46ca15ac43175ee1671ef0ad03dd0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDETiltDecenterData.BeforeSurfaceOrder"}]}`
-->

### Property BeforeSurfaceDecenterX

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a28e1939f45c394e8a3196745b7dbf63e"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.LDE.ILDETiltDecenterData.BeforeSurfaceDecenterX
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDETiltDecenterData.BeforeSurfaceDecenterX"}]}`
-->

### Property BeforeSurfaceDecenterY

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1abdc0de13ca5f72c95ac671fc69bd9b57"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.LDE.ILDETiltDecenterData.BeforeSurfaceDecenterY
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDETiltDecenterData.BeforeSurfaceDecenterY"}]}`
-->

### Property BeforeSurfaceTiltX

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1aecd58413b4158963121a05c9e45d46d3"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.LDE.ILDETiltDecenterData.BeforeSurfaceTiltX
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDETiltDecenterData.BeforeSurfaceTiltX"}]}`
-->

### Property BeforeSurfaceTiltY

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a0f1d132bc806b1030448c7197c805e72"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.LDE.ILDETiltDecenterData.BeforeSurfaceTiltY
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDETiltDecenterData.BeforeSurfaceTiltY"}]}`
-->

### Property BeforeSurfaceTiltZ

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a5138a633678cfbc4e16865394d9a7747"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.LDE.ILDETiltDecenterData.BeforeSurfaceTiltZ
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDETiltDecenterData.BeforeSurfaceTiltZ"}]}`
-->

### Property AfterSurfaceMode

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1ad56f8177de93eea91a62e2fcee5954ba"></a>

![][public]

**Definition**:


```csharp
TiltDecenterPickupType ZOSAPI.Editors.LDE.ILDETiltDecenterData.AfterSurfaceMode
```


**Return type**: [TiltDecenterPickupType](namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1a6664053c37241e711453427deaa0089f)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDETiltDecenterData.AfterSurfaceMode"}]}`
-->

### Property AfterSurfaceModeSurface

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a701eb84fb9567705cfd83cd9945e741a"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.LDE.ILDETiltDecenterData.AfterSurfaceModeSurface
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDETiltDecenterData.AfterSurfaceModeSurface"}]}`
-->

### Property AfterSurfaceModeSurfaceIsThis

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a433f1576b36d9d9aef66564709554fb3"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.LDE.ILDETiltDecenterData.AfterSurfaceModeSurfaceIsThis
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDETiltDecenterData.AfterSurfaceModeSurfaceIsThis"}]}`
-->

### Property AfterSurfaceOrder

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a0d476f4db61a84d14be1a3befb28ed0c"></a>

![][public]

**Definition**:


```csharp
TiltDecenterOrderType ZOSAPI.Editors.LDE.ILDETiltDecenterData.AfterSurfaceOrder
```


**Return type**: [TiltDecenterOrderType](namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1a7de46ca15ac43175ee1671ef0ad03dd0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDETiltDecenterData.AfterSurfaceOrder"}]}`
-->

### Property AfterSurfaceDecenterX

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a63738ef19ce4bcec03ecf2323266d7c6"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.LDE.ILDETiltDecenterData.AfterSurfaceDecenterX
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDETiltDecenterData.AfterSurfaceDecenterX"}]}`
-->

### Property AfterSurfaceDecenterY

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a6ee5ad363149ff73fde0cdb58b55183c"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.LDE.ILDETiltDecenterData.AfterSurfaceDecenterY
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDETiltDecenterData.AfterSurfaceDecenterY"}]}`
-->

### Property AfterSurfaceTiltX

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a714972568d80954de02bd08834658485"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.LDE.ILDETiltDecenterData.AfterSurfaceTiltX
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDETiltDecenterData.AfterSurfaceTiltX"}]}`
-->

### Property AfterSurfaceTiltY

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a693831ae969e771a8ae4fb2a95af654e"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.LDE.ILDETiltDecenterData.AfterSurfaceTiltY
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDETiltDecenterData.AfterSurfaceTiltY"}]}`
-->

### Property AfterSurfaceTiltZ

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1aab9c325495b2ea02c723eae8e69317a8"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.Editors.LDE.ILDETiltDecenterData.AfterSurfaceTiltZ
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDETiltDecenterData.AfterSurfaceTiltZ"}]}`
-->

### Property BeforeAfterSurfaceEnabled

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a1926af5859a4a302efa1f4c02fc9e885"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.LDE.ILDETiltDecenterData.BeforeAfterSurfaceEnabled
```


Gets a value indicating whether before/after surface data is available (<code>true</code> for most surfaces). <br/>

<code>true</code> if before/after surface data enabled; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDETiltDecenterData.BeforeAfterSurfaceEnabled"}]}`
-->

### Property CoordinateReturnEnabled

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1aa2b5c8af373c1c5ee83d37f99cff7bdf"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.Editors.LDE.ILDETiltDecenterData.CoordinateReturnEnabled
```


Gets a value indicating whether the coordinate return data is available (<code>true</code> only for coordinate breaks).

<code>true</code> if coordinate data is enabled; otherwise, <code>false</code>.


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDETiltDecenterData.CoordinateReturnEnabled"}]}`
-->

### Property CoordinateReturn

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a68375c0f991cf468a5a47795c96dff89"></a>

![][public]

**Definition**:


```csharp
CoordinateReturnType ZOSAPI.Editors.LDE.ILDETiltDecenterData.CoordinateReturn
```


**Return type**: [CoordinateReturnType](namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e.md#namespace_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1a835dcb9b2c6034a31062bb5dd4703ab3)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDETiltDecenterData.CoordinateReturn"}]}`
-->

### Property CoordinateReturnToSurface

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a9bbc8ab3d3d20b5f9ba1a3fb391b16a3"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.Editors.LDE.ILDETiltDecenterData.CoordinateReturnToSurface
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDETiltDecenterData.CoordinateReturnToSurface"}]}`
-->

## Public functions

### Function SetAfterSurfaceModeExplicit

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1abe83fd1563741ffd2cdc9e65fa9ee737"></a>

![][public]


```csharp
void ZOSAPI.Editors.LDE.ILDETiltDecenterData.SetAfterSurfaceModeExplicit()
```


**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDETiltDecenterData.SetAfterSurfaceModeExplicit"}]}`
-->

### Function SetAfterSurfaceModePickup

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a41c9c5ff80bdef4208e3cd3af3c77813"></a>

![][public]


```csharp
bool ZOSAPI.Editors.LDE.ILDETiltDecenterData.SetAfterSurfaceModePickup(int fromSurface)
```


**Parameters**:

* int **fromSurface**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDETiltDecenterData.SetAfterSurfaceModePickup"}]}`
-->

### Function SetAfterSurfaceModeReverse

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1ad932505abc696b6f2f08b291d90a2316"></a>

![][public]


```csharp
bool ZOSAPI.Editors.LDE.ILDETiltDecenterData.SetAfterSurfaceModeReverse(int fromSurface)
```


**Parameters**:

* int **fromSurface**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDETiltDecenterData.SetAfterSurfaceModeReverse"}]}`
-->

### Function SetAfterSurfaceModePickupThis

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a956d845f3727490206f31ccfca6fa5ec"></a>

![][public]


```csharp
bool ZOSAPI.Editors.LDE.ILDETiltDecenterData.SetAfterSurfaceModePickupThis()
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDETiltDecenterData.SetAfterSurfaceModePickupThis"}]}`
-->

### Function SetAfterSurfaceModeReverseThis

<a id="interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_l_d_e_tilt_decenter_data_1a761f0672499622b8c65e45a5d128ffea"></a>

![][public]


```csharp
bool ZOSAPI.Editors.LDE.ILDETiltDecenterData.SetAfterSurfaceModeReverseThis()
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Editors.LDE.ILDETiltDecenterData.SetAfterSurfaceModeReverseThis"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
