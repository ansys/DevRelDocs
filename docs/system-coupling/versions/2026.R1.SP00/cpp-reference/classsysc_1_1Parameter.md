# Class sysc::Parameter

![][C++]
![][public]

**Definition**: `Parameter.hpp` (line 18)

Provide a class for a System Coupling parameter.



## Members

* [getDisplayName](classsysc_1_1Parameter.md#classsysc_1_1Parameter_1af0011280c07765df22e4214dfadc9d95)
* [getName](classsysc_1_1Parameter.md#classsysc_1_1Parameter_1aeb9269ef83cd91e544362ae9a9e1eae3)
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



**Type**: [ParameterName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga9cadba4f4e91a46ad88e42877c682d46)

<a id="classsysc_1_1Parameter_1afcc1b63f9dccd824a8753dc8261174d7"></a>
### Variable m\_displayName

![][private]

**Definition**: `Parameter.hpp` (line 54)

```cpp
DisplayName sysc::Parameter::m_displayName
```



User-friendly name.



**Type**: [DisplayName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga708d69b0e949d6a42b6a0d7885eed90f)

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

* [ParameterName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga9cadba4f4e91a46ad88e42877c682d46) **name**

**Return type**: 

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

* [ParameterName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga9cadba4f4e91a46ad88e42877c682d46) **name**
* [DisplayName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga708d69b0e949d6a42b6a0d7885eed90f) **displayName**

**Return type**: 

<a id="classsysc_1_1Parameter_1aeb9269ef83cd91e544362ae9a9e1eae3"></a>
### Function getName

![][public]
![][const]

```cpp
const ParameterName& sysc::Parameter::getName() const noexcept
```

Get the [Parameter](classsysc_1_1Parameter.md#classsysc_1_1Parameter)'s name.

**Returns**:

Return is the name of this parameter (string).



**Return type**: const [ParameterName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga9cadba4f4e91a46ad88e42877c682d46) &

<a id="classsysc_1_1Parameter_1af0011280c07765df22e4214dfadc9d95"></a>
### Function getDisplayName

![][public]
![][const]

```cpp
const DisplayName& sysc::Parameter::getDisplayName() const noexcept
```

Get the [Parameter](classsysc_1_1Parameter.md#classsysc_1_1Parameter)'s display name.

**Returns**:

Return is the display name of this parameter (string).



**Return type**: const [DisplayName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga708d69b0e949d6a42b6a0d7885eed90f) &

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)