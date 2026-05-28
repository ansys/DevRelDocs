---
title: "Class sysc::Parameter"
---

![][C++]
![][public]

**Definition**: `Parameter.hpp` (line 18)

Provide a class for a System Coupling parameter.



## Members

* [getDisplayName](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1Parameter)
* [getName](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1Parameter)
* [m\_displayName](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1Parameter)
* [m\_name](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1Parameter)
* [Parameter](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1Parameter)
* [Parameter](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1Parameter)

## Private attributes

<a id="classsysc_1_1Parameter_1ae96949384d110b3787d58695a23faf02"></a>
### Variable m\_name

![][private]

**Definition**: `Parameter.hpp` (line 53)

```cpp
ParameterName sysc::Parameter::m_name
```



Unique name for this parameter.



**Type**: [ParameterName](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/namespacesysc)

<a id="classsysc_1_1Parameter_1afcc1b63f9dccd824a8753dc8261174d7"></a>
### Variable m\_displayName

![][private]

**Definition**: `Parameter.hpp` (line 54)

```cpp
DisplayName sysc::Parameter::m_displayName
```



User-friendly name.



**Type**: [DisplayName](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/namespacesysc)

## Public functions

<a id="classsysc_1_1Parameter_1af44e2bc5630c6c4b6cc0bfda64b7b226"></a>
### Function Parameter

![][public]

```cpp
sysc::Parameter::Parameter(ParameterName name)
```

Provide a constructor for the [Parameter](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1Parameter) class.

**Parameters**:

* **name**: Unique name for this parameter.

Display name will default to the same as name.



**Parameters**:

* [ParameterName](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/namespacesysc) **name**

**Return type**: 

<a id="classsysc_1_1Parameter_1af200cccf063261a6c37d2ecb523a65fe"></a>
### Function Parameter

![][public]

```cpp
sysc::Parameter::Parameter(ParameterName name, DisplayName displayName)
```

Provide a constructor for the [Parameter](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1Parameter) class.

**Parameters**:

* **name**: - Unique name for this parameter.
* **displayName**: - parameter display name.



**Parameters**:

* [ParameterName](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/namespacesysc) **name**
* [DisplayName](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/namespacesysc) **displayName**

**Return type**: 

<a id="classsysc_1_1Parameter_1aeb9269ef83cd91e544362ae9a9e1eae3"></a>
### Function getName

![][public]
![][const]

```cpp
const ParameterName& sysc::Parameter::getName() const noexcept
```

Get the [Parameter](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1Parameter)'s name.

**Returns**:

Return is the name of this parameter (string).



**Return type**: const [ParameterName](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/namespacesysc) &

<a id="classsysc_1_1Parameter_1af0011280c07765df22e4214dfadc9d95"></a>
### Function getDisplayName

![][public]
![][const]

```cpp
const DisplayName& sysc::Parameter::getDisplayName() const noexcept
```

Get the [Parameter](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/classsysc_1_1Parameter)'s display name.

**Returns**:

Return is the display name of this parameter (string).



**Return type**: const [DisplayName](/docs/system-coupling/system-coupling-api/versions/2025.R2.SP00/cpp-reference/namespacesysc) &

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)