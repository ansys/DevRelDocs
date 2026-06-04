# Class sysc::DataTransfer

![][C++]
![][public]

**Definition**: `DataTransfer.hpp` (line 21)

Provide a class for a data transfer.

Data transfer specifies the source and target variables for mapping.

## Members

* [DataTransfer](classsysc_1_1DataTransfer.md#classsysc_1_1DataTransfer_1a9a4412f47dbd13ece79d35b0876ace13)
* [getSideOneVariable](classsysc_1_1DataTransfer.md#classsysc_1_1DataTransfer_1ac9ae876a20ec454c591ae7aac97758c6)
* [getSideTwoVariable](classsysc_1_1DataTransfer.md#classsysc_1_1DataTransfer_1a4c9015e16e6fc254ee795254fbbcf8b9)
* [getSourceSide](classsysc_1_1DataTransfer.md#classsysc_1_1DataTransfer_1a7788b20c57fe5479500101f705d0aaf8)
* [getSourceVariable](classsysc_1_1DataTransfer.md#classsysc_1_1DataTransfer_1aceb91e53a56a9ef07b94c987296ffbcd)
* [getTargetSide](classsysc_1_1DataTransfer.md#classsysc_1_1DataTransfer_1a737e25f50bae13a64f047a7b84d5e378)
* [getTargetVariable](classsysc_1_1DataTransfer.md#classsysc_1_1DataTransfer_1a7782efd24aafc93df895f2a10ad4fb60)
* [m\_sourceVariable](classsysc_1_1DataTransfer.md#classsysc_1_1DataTransfer_1a6ee52e13f6f319cb2834615dd0a2769a)
* [m\_targetSide](classsysc_1_1DataTransfer.md#classsysc_1_1DataTransfer_1a37cef8a76bd2a277bdc0884160cc4b57)
* [m\_targetVariable](classsysc_1_1DataTransfer.md#classsysc_1_1DataTransfer_1a3e549fdfc54ed56822a7aec8252debcf)

## Private attributes

<a id="classsysc_1_1DataTransfer_1a6ee52e13f6f319cb2834615dd0a2769a"></a>
### Variable m\_sourceVariable

![][private]

**Definition**: `DataTransfer.hpp` (line 56)

```cpp
Variable sysc::DataTransfer::m_sourceVariable
```







**Type**: [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable)

<a id="classsysc_1_1DataTransfer_1a3e549fdfc54ed56822a7aec8252debcf"></a>
### Variable m\_targetVariable

![][private]

**Definition**: `DataTransfer.hpp` (line 57)

```cpp
Variable sysc::DataTransfer::m_targetVariable
```







**Type**: [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable)

<a id="classsysc_1_1DataTransfer_1a37cef8a76bd2a277bdc0884160cc4b57"></a>
### Variable m\_targetSide

![][private]

**Definition**: `DataTransfer.hpp` (line 58)

```cpp
InterfaceSide sysc::DataTransfer::m_targetSide
```







**Type**: [InterfaceSide](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gae8967650e49639319360bad6efc649a4)

## Public functions

<a id="classsysc_1_1DataTransfer_1a9a4412f47dbd13ece79d35b0876ace13"></a>
### Function DataTransfer

![][public]

```cpp
sysc::DataTransfer::DataTransfer(Variable sourceVariable, Variable targetVariable, enum InterfaceSide targetSide)
```

Provide a constructor for the [DataTransfer](classsysc_1_1DataTransfer.md#classsysc_1_1DataTransfer) class.

**Parameters**:

* **sourceVariable**: - source variable.
* **targetVariable**: - target variable.
* **targetSide**: - target side.



**Parameters**:

* [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable) **sourceVariable**
* [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable) **targetVariable**
* enum [InterfaceSide](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gae8967650e49639319360bad6efc649a4) **targetSide**

**Return type**: 

<a id="classsysc_1_1DataTransfer_1aceb91e53a56a9ef07b94c987296ffbcd"></a>
### Function getSourceVariable

![][public]
![][const]

```cpp
const Variable& sysc::DataTransfer::getSourceVariable() const noexcept
```

Get the source variable.





**Return type**: const [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable) &

<a id="classsysc_1_1DataTransfer_1a7782efd24aafc93df895f2a10ad4fb60"></a>
### Function getTargetVariable

![][public]
![][const]

```cpp
const Variable& sysc::DataTransfer::getTargetVariable() const noexcept
```

Get the target variable.





**Return type**: const [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable) &

<a id="classsysc_1_1DataTransfer_1ac9ae876a20ec454c591ae7aac97758c6"></a>
### Function getSideOneVariable

![][public]
![][const]

```cpp
const Variable& sysc::DataTransfer::getSideOneVariable() const noexcept
```

Get the variable on side one.





**Return type**: const [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable) &

<a id="classsysc_1_1DataTransfer_1a4c9015e16e6fc254ee795254fbbcf8b9"></a>
### Function getSideTwoVariable

![][public]
![][const]

```cpp
const Variable& sysc::DataTransfer::getSideTwoVariable() const noexcept
```

Get the variable on side two.





**Return type**: const [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable) &

<a id="classsysc_1_1DataTransfer_1a737e25f50bae13a64f047a7b84d5e378"></a>
### Function getTargetSide

![][public]
![][const]

```cpp
InterfaceSide sysc::DataTransfer::getTargetSide() const noexcept
```

Get the source side.





**Return type**: [InterfaceSide](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gae8967650e49639319360bad6efc649a4)

<a id="classsysc_1_1DataTransfer_1a7788b20c57fe5479500101f705d0aaf8"></a>
### Function getSourceSide

![][public]
![][const]

```cpp
InterfaceSide sysc::DataTransfer::getSourceSide() const noexcept
```

Get the target side.





**Return type**: [InterfaceSide](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gae8967650e49639319360bad6efc649a4)

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)