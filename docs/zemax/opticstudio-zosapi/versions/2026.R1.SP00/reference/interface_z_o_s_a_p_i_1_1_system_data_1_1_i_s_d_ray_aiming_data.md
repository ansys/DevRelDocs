# Interface ZOSAPI::SystemData::ISDRayAimingData

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data"></a>

![][C#]
![][public]

**Definition**:

System Explorer - Ray Aiming Data. This interface can be accessed via the ISystemData interface.


## Members

* [AutomaticallyCalculatePupilShiftsIsChecked](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1af02e24a1521a134140b7551aef7b9999)
* [Method](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1a909e599ed767d9119d20f572c64161ea)
* [NumStepsCacheSetup](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1a29aab454567901fde1d50b15a03a2a39)
* [PupilCompressX](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1ab862f73475b83337feaeff0a47e3ce49)
* [PupilCompressY](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1a3304d300642bc9d1676835c1466f9460)
* [PupilShiftX](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1afa7608bbb4f4855d5f89eff07d6395d9)
* [PupilShiftY](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1a8bf57bd3780aada3124ff96588318680)
* [PupilShiftZ](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1aa7b44c97d7d41b8f19935a14290dedb0)
* [RayAiming](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1afd1700b130f667067f6289104eb4970e)
* [ScalePupilShiftFactorsByField](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1ac71dbbcdfc8cd8d6e1e3b18e00fca6d1)
* [UseAdvancedConvergence](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1a9452f6fde0ef7e75eb0a70902ebeeab2)
* [UseEnhancedRayAiming](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1a7ab68187e0b31a6ea53a2dae0e27eaaa)
* [UseFallBackSearchDuringCacheSetup](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1abb56016d2436fd5e132c2d6d66c992f3)
* [UseRayAimingCache](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1ad609b88c03dfd4b26771636c3c58e36d)
* [UseRobustRayAiming](interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data.md#interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1a2f6e9c3adea89ae1ab13330fb81f5f95)

## Properties

### Property RayAiming

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1afd1700b130f667067f6289104eb4970e"></a>

![][public]

**Definition**:


```csharp
RayAimingMethod ZOSAPI.SystemData.ISDRayAimingData.RayAiming
```


**Return type**: [RayAimingMethod](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1a21e246c58db95fedcbb02b149cff4fd5)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDRayAimingData.RayAiming"}]}`
-->

### Property Method

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1a909e599ed767d9119d20f572c64161ea"></a>

![][public]

**Definition**:


```csharp
RayAimingType ZOSAPI.SystemData.ISDRayAimingData.Method
```


**Return type**: [RayAimingType](namespace_z_o_s_a_p_i_1_1_system_data.md#namespace_z_o_s_a_p_i_1_1_system_data_1aa11ff627e1a142e5eb2ac5631071852e)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDRayAimingData.Method"}]}`
-->

### Property UseRayAimingCache

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1ad609b88c03dfd4b26771636c3c58e36d"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.SystemData.ISDRayAimingData.UseRayAimingCache
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDRayAimingData.UseRayAimingCache"}]}`
-->

### Property UseRobustRayAiming

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1a2f6e9c3adea89ae1ab13330fb81f5f95"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.SystemData.ISDRayAimingData.UseRobustRayAiming
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDRayAimingData.UseRobustRayAiming"}]}`
-->

### Property ScalePupilShiftFactorsByField

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1ac71dbbcdfc8cd8d6e1e3b18e00fca6d1"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.SystemData.ISDRayAimingData.ScalePupilShiftFactorsByField
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDRayAimingData.ScalePupilShiftFactorsByField"}]}`
-->

### Property AutomaticallyCalculatePupilShiftsIsChecked

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1af02e24a1521a134140b7551aef7b9999"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.SystemData.ISDRayAimingData.AutomaticallyCalculatePupilShiftsIsChecked
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDRayAimingData.AutomaticallyCalculatePupilShiftsIsChecked"}]}`
-->

### Property UseEnhancedRayAiming

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1a7ab68187e0b31a6ea53a2dae0e27eaaa"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.SystemData.ISDRayAimingData.UseEnhancedRayAiming
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDRayAimingData.UseEnhancedRayAiming"}]}`
-->

### Property UseAdvancedConvergence

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1a9452f6fde0ef7e75eb0a70902ebeeab2"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.SystemData.ISDRayAimingData.UseAdvancedConvergence
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDRayAimingData.UseAdvancedConvergence"}]}`
-->

### Property UseFallBackSearchDuringCacheSetup

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1abb56016d2436fd5e132c2d6d66c992f3"></a>

![][public]

**Definition**:


```csharp
bool ZOSAPI.SystemData.ISDRayAimingData.UseFallBackSearchDuringCacheSetup
```


**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDRayAimingData.UseFallBackSearchDuringCacheSetup"}]}`
-->

### Property PupilShiftX

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1afa7608bbb4f4855d5f89eff07d6395d9"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.SystemData.ISDRayAimingData.PupilShiftX
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDRayAimingData.PupilShiftX"}]}`
-->

### Property PupilShiftY

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1a8bf57bd3780aada3124ff96588318680"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.SystemData.ISDRayAimingData.PupilShiftY
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDRayAimingData.PupilShiftY"}]}`
-->

### Property PupilShiftZ

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1aa7b44c97d7d41b8f19935a14290dedb0"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.SystemData.ISDRayAimingData.PupilShiftZ
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDRayAimingData.PupilShiftZ"}]}`
-->

### Property PupilCompressX

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1ab862f73475b83337feaeff0a47e3ce49"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.SystemData.ISDRayAimingData.PupilCompressX
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDRayAimingData.PupilCompressX"}]}`
-->

### Property PupilCompressY

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1a3304d300642bc9d1676835c1466f9460"></a>

![][public]

**Definition**:


```csharp
double ZOSAPI.SystemData.ISDRayAimingData.PupilCompressY
```


**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDRayAimingData.PupilCompressY"}]}`
-->

### Property NumStepsCacheSetup

<a id="interface_z_o_s_a_p_i_1_1_system_data_1_1_i_s_d_ray_aiming_data_1a29aab454567901fde1d50b15a03a2a39"></a>

![][public]

**Definition**:


```csharp
int ZOSAPI.SystemData.ISDRayAimingData.NumStepsCacheSetup
```


**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.SystemData.ISDRayAimingData.NumStepsCacheSetup"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
