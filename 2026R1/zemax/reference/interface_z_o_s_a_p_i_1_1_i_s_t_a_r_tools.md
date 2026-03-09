# Interface ZOSAPI::ISTARTools

<a id="interface_z_o_s_a_p_i_1_1_i_s_t_a_r_tools"></a>

![][C#]
![][public]

**Definition**:

General collection of STAR tools that do not interact with the current Optical System.


## Members

* [DataTypeFromFileHeader](interface_z_o_s_a_p_i_1_1_i_s_t_a_r_tools.md#interface_z_o_s_a_p_i_1_1_i_s_t_a_r_tools_1a17ff361a8532620f2f6e67b0b2f31a3c)
* [ReadDeformationsFromFEAFile](interface_z_o_s_a_p_i_1_1_i_s_t_a_r_tools.md#interface_z_o_s_a_p_i_1_1_i_s_t_a_r_tools_1aaa7409a2076364a8b40c1b0a889c0af3)
* [ReadDeformationsWithWeightFromFEAFile](interface_z_o_s_a_p_i_1_1_i_s_t_a_r_tools.md#interface_z_o_s_a_p_i_1_1_i_s_t_a_r_tools_1a2fbfded311d4b601e28611565ae5af01)
* [ReadDirectIndexFromFEAFile](interface_z_o_s_a_p_i_1_1_i_s_t_a_r_tools.md#interface_z_o_s_a_p_i_1_1_i_s_t_a_r_tools_1a522fbdd4399f942a48d6d86fa55d96a6)
* [ReadStressFromFEAFile](interface_z_o_s_a_p_i_1_1_i_s_t_a_r_tools.md#interface_z_o_s_a_p_i_1_1_i_s_t_a_r_tools_1a8dbf0a894749f1aed629f7c826b48208)
* [ReadTemperaturesFromFEAFile](interface_z_o_s_a_p_i_1_1_i_s_t_a_r_tools.md#interface_z_o_s_a_p_i_1_1_i_s_t_a_r_tools_1ac44efeaa809c936fdc61598cab714951)

## Public functions

### Function DataTypeFromFileHeader

<a id="interface_z_o_s_a_p_i_1_1_i_s_t_a_r_tools_1a17ff361a8532620f2f6e67b0b2f31a3c"></a>

![][public]


```csharp
int ZOSAPI.ISTARTools.DataTypeFromFileHeader(string filename)
```


Check the header of the file - if any - to see what data type it contains.

**Parameters**:

* **filename**: Full path of the file containing the FEA data


**Returns**:

Returns the type of data contained in the file, according to the header, encoded as the following integer: `table {"type":"element","name":"table","attributes":{"cols":"16","rows":"1"},"children":[{"type":"element","name":"row","attributes":{},"children":[{"type":"text","text":"\n"},{"type":"element","name":"entry","attributes":{"thead":"yes"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"Value "}]},{"type":"text","text":"\n"}]},{"type":"element","name":"entry","attributes":{"thead":"yes"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"Meaning "}]},{"type":"text","text":"\n"}]},{"type":"element","name":"entry","attributes":{"thead":"yes"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"-2 "}]},{"type":"text","text":"\n"}]},{"type":"element","name":"entry","attributes":{"thead":"yes"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"OpticStudio was unable to open the file, or the header is malformed. "}]},{"type":"text","text":"\n"}]},{"type":"element","name":"entry","attributes":{"thead":"yes"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"-1 "}]},{"type":"text","text":"\n"}]},{"type":"element","name":"entry","attributes":{"thead":"yes"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"Unknown: the file has no header. "}]},{"type":"text","text":"\n"}]},{"type":"element","name":"entry","attributes":{"thead":"yes"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"0 "}]},{"type":"text","text":"\n"}]},{"type":"element","name":"entry","attributes":{"thead":"yes"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"Deformation. "}]},{"type":"text","text":"\n"}]},{"type":"element","name":"entry","attributes":{"thead":"yes"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"1 "}]},{"type":"text","text":"\n"}]},{"type":"element","name":"entry","attributes":{"thead":"yes"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"Deformation with weight. "}]},{"type":"text","text":"\n"}]},{"type":"element","name":"entry","attributes":{"thead":"yes"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"2 "}]},{"type":"text","text":"\n"}]},{"type":"element","name":"entry","attributes":{"thead":"yes"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"Temperature "}]},{"type":"text","text":"\n"}]},{"type":"element","name":"entry","attributes":{"thead":"yes"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"3 "}]},{"type":"text","text":"\n"}]},{"type":"element","name":"entry","attributes":{"thead":"yes"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"Direct Index "}]},{"type":"text","text":"\n"}]},{"type":"element","name":"entry","attributes":{"thead":"yes"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"4 "}]},{"type":"text","text":"\n"}]},{"type":"element","name":"entry","attributes":{"thead":"yes"},"children":[{"type":"element","name":"para","attributes":{},"children":[{"type":"text","text":"Stress Tensor "}]},{"type":"text","text":"\n"}]}]},{"type":"text","text":"\n"}]}`


**Parameters**:

* string **filename**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.ISTARTools.DataTypeFromFileHeader"}]}`
-->

### Function ReadDirectIndexFromFEAFile

<a id="interface_z_o_s_a_p_i_1_1_i_s_t_a_r_tools_1a522fbdd4399f942a48d6d86fa55d96a6"></a>

![][public]


```csharp
ISTAR_PointWithIndex[] ZOSAPI.ISTARTools.ReadDirectIndexFromFEAFile(string filename)
```


**Parameters**:

* string **filename**

**Return type**: [ISTAR\_PointWithIndex](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___point_with_index.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___point_with_index)[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.ISTARTools.ReadDirectIndexFromFEAFile"}]}`
-->

### Function ReadTemperaturesFromFEAFile

<a id="interface_z_o_s_a_p_i_1_1_i_s_t_a_r_tools_1ac44efeaa809c936fdc61598cab714951"></a>

![][public]


```csharp
ISTAR_PointWithTemperature[] ZOSAPI.ISTARTools.ReadTemperaturesFromFEAFile(string filename)
```


**Parameters**:

* string **filename**

**Return type**: [ISTAR\_PointWithTemperature](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___point_with_temperature.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___point_with_temperature)[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.ISTARTools.ReadTemperaturesFromFEAFile"}]}`
-->

### Function ReadDeformationsFromFEAFile

<a id="interface_z_o_s_a_p_i_1_1_i_s_t_a_r_tools_1aaa7409a2076364a8b40c1b0a889c0af3"></a>

![][public]


```csharp
ISTAR_PointWithDeformation[] ZOSAPI.ISTARTools.ReadDeformationsFromFEAFile(string filename)
```


**Parameters**:

* string **filename**

**Return type**: [ISTAR\_PointWithDeformation](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___point_with_deformation.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___point_with_deformation)[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.ISTARTools.ReadDeformationsFromFEAFile"}]}`
-->

### Function ReadDeformationsWithWeightFromFEAFile

<a id="interface_z_o_s_a_p_i_1_1_i_s_t_a_r_tools_1a2fbfded311d4b601e28611565ae5af01"></a>

![][public]


```csharp
ISTAR_PointWithDeformationAndWeight[] ZOSAPI.ISTARTools.ReadDeformationsWithWeightFromFEAFile(string filename)
```


**Parameters**:

* string **filename**

**Return type**: [ISTAR\_PointWithDeformationAndWeight](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___point_with_deformation_and_weight.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___point_with_deformation_and_weight)[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.ISTARTools.ReadDeformationsWithWeightFromFEAFile"}]}`
-->

### Function ReadStressFromFEAFile

<a id="interface_z_o_s_a_p_i_1_1_i_s_t_a_r_tools_1a8dbf0a894749f1aed629f7c826b48208"></a>

![][public]


```csharp
ISTAR_PointWithStress[] ZOSAPI.ISTARTools.ReadStressFromFEAFile(string filename)
```


**Parameters**:

* string **filename**

**Return type**: [ISTAR\_PointWithStress](interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___point_with_stress.md#interface_z_o_s_a_p_i_1_1_editors_1_1_l_d_e_1_1_i_s_t_a_r___point_with_stress)[]

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.ISTARTools.ReadStressFromFEAFile"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)