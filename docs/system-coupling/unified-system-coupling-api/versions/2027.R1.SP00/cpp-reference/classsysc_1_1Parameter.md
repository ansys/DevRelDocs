# Class sysc::Parameter

![][C++]
![][public]

**Definition**: `Parameter.hpp` (line 18)

Provide a class for a System Coupling parameter.



## Members

* [getDisplayName](classsysc_1_1Parameter.md#classsysc_1_1Parameter_1a309396745f0c716783f66f839bb6418a)
* [getName](classsysc_1_1Parameter.md#classsysc_1_1Parameter_1afc5054b0dd289cca6a1acf3756d0512d)
* [m\_displayName](classsysc_1_1Parameter.md#classsysc_1_1Parameter_1afcc1b63f9dccd824a8753dc8261174d7)
* [m\_name](classsysc_1_1Parameter.md#classsysc_1_1Parameter_1ae96949384d110b3787d58695a23faf02)
* [Parameter](classsysc_1_1Parameter.md#classsysc_1_1Parameter_1af44e2bc5630c6c4b6cc0bfda64b7b226)
* [Parameter](classsysc_1_1Parameter.md#classsysc_1_1Parameter_1af200cccf063261a6c37d2ecb523a65fe)

## Private attributes

<a id="classsysc_1_1Parameter_1ae96949384d110b3787d58695a23faf02"></a>
### Variable m\_name

![][private]

**Definition**: `Parameter.hpp` (line 53)


```cpp
ParameterName sysc::Parameter::m_name
```




Unique name for this parameter.



**Type**: [ParameterName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga08f98c067d8788e94493cb57f95f700d)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::Parameter::m_name"}]}`
-->

<a id="classsysc_1_1Parameter_1afcc1b63f9dccd824a8753dc8261174d7"></a>
### Variable m\_displayName

![][private]

**Definition**: `Parameter.hpp` (line 54)


```cpp
DisplayName sysc::Parameter::m_displayName
```




User-friendly name.



**Type**: [DisplayName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga796c7c19b4b350965c7e8249733dda29)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::Parameter::m_displayName"}]}`
-->

## Public functions

<a id="classsysc_1_1Parameter_1af44e2bc5630c6c4b6cc0bfda64b7b226"></a>
### Function Parameter

![][public]


```cpp
sysc::Parameter::Parameter(ParameterName name)
```


Provide a constructor for the [Parameter](classsysc_1_1Parameter.md#classsysc_1_1Parameter) class.

**Parameters**:

* **name**: Unique name for this parameter.

Display name will default to the same as name.



**Parameters**:

* [ParameterName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga08f98c067d8788e94493cb57f95f700d) **name**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::Parameter::Parameter"}]}`
-->

<a id="classsysc_1_1Parameter_1af200cccf063261a6c37d2ecb523a65fe"></a>
### Function Parameter

![][public]


```cpp
sysc::Parameter::Parameter(ParameterName name, DisplayName displayName)
```


Provide a constructor for the [Parameter](classsysc_1_1Parameter.md#classsysc_1_1Parameter) class.

**Parameters**:

* **name**: - Unique name for this parameter.
* **displayName**: - parameter display name.



**Parameters**:

* [ParameterName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga08f98c067d8788e94493cb57f95f700d) **name**
* [DisplayName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga796c7c19b4b350965c7e8249733dda29) **displayName**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::Parameter::Parameter"}]}`
-->

<a id="classsysc_1_1Parameter_1afc5054b0dd289cca6a1acf3756d0512d"></a>
### Function getName

![][public]
![][const]


```cpp
const ParameterName & sysc::Parameter::getName() const noexcept
```


Get the [Parameter](classsysc_1_1Parameter.md#classsysc_1_1Parameter)'s name.

**Returns**:

Return is the name of this parameter (string).



**Return type**: const [ParameterName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga08f98c067d8788e94493cb57f95f700d) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::Parameter::getName"}]}`
-->

<a id="classsysc_1_1Parameter_1a309396745f0c716783f66f839bb6418a"></a>
### Function getDisplayName

![][public]
![][const]


```cpp
const DisplayName & sysc::Parameter::getDisplayName() const noexcept
```


Get the [Parameter](classsysc_1_1Parameter.md#classsysc_1_1Parameter)'s display name.

**Returns**:

Return is the display name of this parameter (string).



**Return type**: const [DisplayName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga796c7c19b4b350965c7e8249733dda29) &

**References**:

* [getDisplayName](classsysc_1_1Parameter.md#classsysc_1_1Parameter_1a309396745f0c716783f66f839bb6418a)

**Referenced by**:

* [getDisplayName](classsysc_1_1Parameter.md#classsysc_1_1Parameter_1a309396745f0c716783f66f839bb6418a)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::Parameter::getDisplayName"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"Parameter_8hpp"},"children":[{"type":"text","text":"Parameter.hpp"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)