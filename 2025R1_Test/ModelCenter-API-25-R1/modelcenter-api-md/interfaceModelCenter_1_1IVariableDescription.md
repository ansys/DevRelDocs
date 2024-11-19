<a id="interfaceModelCenter_1_1IVariableDescription"></a>
# Interface ModelCenter::IVariableDescription

![][IDL]
![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 5973)



COM Instance.

## Members

* [equation](interfaceModelCenter_1_1IVariableDescription.md#interfaceModelCenter_1_1IVariableDescription_1aa42abd87b11af98fcb67926472408801)
* [fullName](interfaceModelCenter_1_1IVariableDescription.md#interfaceModelCenter_1_1IVariableDescription_1aa3c8267507d2f0d6cbbd35a33de0fca3)
* [isCustom](interfaceModelCenter_1_1IVariableDescription.md#interfaceModelCenter_1_1IVariableDescription_1ae6ba3b64b599b6df11a39f0c3fa1b078)
* [isNumeric](interfaceModelCenter_1_1IVariableDescription.md#interfaceModelCenter_1_1IVariableDescription_1ac7d823563278b1abbc458b61aa5eb686)
* [name](interfaceModelCenter_1_1IVariableDescription.md#interfaceModelCenter_1_1IVariableDescription_1a5430f2b928f3f8fc672dc2dcf8c6db03)
* [state](interfaceModelCenter_1_1IVariableDescription.md#interfaceModelCenter_1_1IVariableDescription_1ace7a19354a1c40a3f64464fb87b992ba)
* [type](interfaceModelCenter_1_1IVariableDescription.md#interfaceModelCenter_1_1IVariableDescription_1a8fc783420e2ab3163a2552436d694d0a)
* [units](interfaceModelCenter_1_1IVariableDescription.md#interfaceModelCenter_1_1IVariableDescription_1abea210199b644bc3da685775950b9368)

## Properties

<a id="interfaceModelCenter_1_1IVariableDescription_1a5430f2b928f3f8fc672dc2dcf8c6db03"></a>
### Property name

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
BSTR ModelCenter::IVariableDescription::name
```



Name of the variable.



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IVariableDescription_1aa3c8267507d2f0d6cbbd35a33de0fca3"></a>
### Property fullName

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
BSTR ModelCenter::IVariableDescription::fullName
```



Full ModelCenter path of the variable.



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IVariableDescription_1ace7a19354a1c40a3f64464fb87b992ba"></a>
### Property state

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
short ModelCenter::IVariableDescription::state
```



State of the variable.





Possible states:
* 0 (INPUT)

* 1 (OUTPUT)



**Return type**: short

<a id="interfaceModelCenter_1_1IVariableDescription_1abea210199b644bc3da685775950b9368"></a>
### Property units

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
BSTR ModelCenter::IVariableDescription::units
```



Units of the variable.



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IVariableDescription_1ae6ba3b64b599b6df11a39f0c3fa1b078"></a>
### Property isCustom

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
boolean ModelCenter::IVariableDescription::isCustom
```



Whether or not the variable is custom.



**Return type**: boolean

<a id="interfaceModelCenter_1_1IVariableDescription_1aa42abd87b11af98fcb67926472408801"></a>
### Property equation

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
BSTR ModelCenter::IVariableDescription::equation
```



Equation of the variable.



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IVariableDescription_1a8fc783420e2ab3163a2552436d694d0a"></a>
### Property type

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
BSTR ModelCenter::IVariableDescription::type
```



Type of the variable.



**Return type**: BSTR

<a id="interfaceModelCenter_1_1IVariableDescription_1ac7d823563278b1abbc458b61aa5eb686"></a>
### Property isNumeric

![][public]

**Definition**: `ModelCenter/src/ModelCenter.odl` (line 1)

```
boolean ModelCenter::IVariableDescription::isNumeric
```



Whether or not the variable is numeric.



**Return type**: boolean

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[IDL]: https://img.shields.io/badge/language-IDL-blue (IDL)