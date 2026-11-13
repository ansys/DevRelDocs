# Interface ZOSAPI::IDesignParameters

<a id="interface_z_o_s_a_p_i_1_1_i_design_parameters"></a>

![][C#]
![][public]

**Definition**:

Collection of API methods that interact with the requirements editor and design parameters.


## Members

* [DesignParameterRequiresExtraValue](interface_z_o_s_a_p_i_1_1_i_design_parameters.md#interface_z_o_s_a_p_i_1_1_i_design_parameters_1a30332eedaf27b37d24259ddbdd328d77)
* [GetDesignParameterData](interface_z_o_s_a_p_i_1_1_i_design_parameters.md#interface_z_o_s_a_p_i_1_1_i_design_parameters_1a73539c66442333ee3829b4333cda9e2c)
* [GetDesignParameterValueWithExtraValue](interface_z_o_s_a_p_i_1_1_i_design_parameters.md#interface_z_o_s_a_p_i_1_1_i_design_parameters_1a810531e472568c11a3fc88732d771b90)

## Public functions

### Function DesignParameterRequiresExtraValue

<a id="interface_z_o_s_a_p_i_1_1_i_design_parameters_1a30332eedaf27b37d24259ddbdd328d77"></a>

![][public]


```csharp
bool ZOSAPI.IDesignParameters.DesignParameterRequiresExtraValue(DesignParameterId id)
```


Returns whether a given design parameter requires an extra value.

For example, the MTF at a specific spatial frequency would require that spatial frequency as an extra value, while the effective focal length would not require any extra value. 

**Parameters**:

* **id**:


**Returns**:


**Parameters**:

* [DesignParameterId](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i_1a86ca059a862b4e5b7b4f283b3b4c29e2) **id**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IDesignParameters.DesignParameterRequiresExtraValue"}]}`
-->

### Function GetDesignParameterValueWithExtraValue

<a id="interface_z_o_s_a_p_i_1_1_i_design_parameters_1a810531e472568c11a3fc88732d771b90"></a>

![][public]


```csharp
double ZOSAPI.IDesignParameters.GetDesignParameterValueWithExtraValue(DesignParameterId id, double extraValue)
```


Returns the value of a design parameter for the current system. If the parameter does not require an extra value, the extraValue argument is ignored. If the parameter does require an extra value, then the returned value will depend on the provided extraValue (for example, the MTF at a specific spatial frequency will require that spatial frequency as an extra value). If the current system does not have the specified design parameter, or if the provided extraValue is invalid, this method will return NaN.

**Parameters**:

* **id**: 
* **extraValue**:


**Returns**:


**Parameters**:

* [DesignParameterId](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i_1a86ca059a862b4e5b7b4f283b3b4c29e2) **id**
* double **extraValue**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IDesignParameters.GetDesignParameterValueWithExtraValue"}]}`
-->

### Function GetDesignParameterData

<a id="interface_z_o_s_a_p_i_1_1_i_design_parameters_1a73539c66442333ee3829b4333cda9e2c"></a>

![][public]


```csharp
IDesignParameterData ZOSAPI.IDesignParameters.GetDesignParameterData(DesignParameterId id)
```


**Parameters**:

* [DesignParameterId](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i_1a86ca059a862b4e5b7b4f283b3b4c29e2) **id**

**Return type**: [IDesignParameterData](interface_z_o_s_a_p_i_1_1_i_design_parameter_data.md#interface_z_o_s_a_p_i_1_1_i_design_parameter_data)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.IDesignParameters.GetDesignParameterData"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
