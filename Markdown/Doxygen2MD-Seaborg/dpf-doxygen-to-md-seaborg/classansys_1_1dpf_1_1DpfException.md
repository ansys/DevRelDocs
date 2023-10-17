<a id="classansys_1_1dpf_1_1DpfException"></a>
# Class ansys::dpf::DpfException

![][C++]
![][public]

**Definition**: `dpf\_api\_base.h` (line 1119)



Exception thrown by DPF call.

**Inherits from**:

* [std::exception](undefined.md#undefined)

## Members

* [\_error](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException_1afe43926be0e0f9cff070be7e3601d080)
* [DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException_1ab417aeb3168e72745df2f8c98d912428)
* [DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException_1a692cdeed9babf4395f9ce12c64a35818)
* [error](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException_1a07c601a38ec182b458074da6f0e52478)
* [message](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException_1ac2340d025c7b74a8031eb2d03d372e18)
* [nature](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException_1ad21aba4144b3dbcb6e619931ac6ae6ed)
* [origin](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException_1a573c794942545079768116efa7194d81)
* [what](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException_1a950039a1b9bd99886c0f690435d17fb4)
* [~DpfException](classansys_1_1dpf_1_1DpfException.md#classansys_1_1dpf_1_1DpfException_1a963149e4633f882888c9c539fddc7f11)

## Private attributes

<a id="classansys_1_1dpf_1_1DpfException_1afe43926be0e0f9cff070be7e3601d080"></a>
### Variable \_error

![][private]

**Definition**: `dpf\_api\_base.h` (line 1122)

```cpp
DpfError ansys::dpf::DpfException::_error
```







**Type**: [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError)

## Public functions

<a id="classansys_1_1dpf_1_1DpfException_1ab417aeb3168e72745df2f8c98d912428"></a>
### Function DpfException

![][public]

```cpp
ansys::dpf::DpfException::DpfException(DpfError::ErrorNature nature, std::string const &origin, std::string const &message)
```



Create exception to throw.



**Parameters**:

* [DpfError::ErrorNature](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError_1a9a3fe202cc2e46746462fdb1ce44c47f) **nature**: [in] Type of error.
* std::string const & **origin**: [in] Originator of error.
* std::string const & **message**: [in] Error message.

**Return type**: 

<a id="classansys_1_1dpf_1_1DpfException_1a692cdeed9babf4395f9ce12c64a35818"></a>
### Function DpfException

![][public]

```cpp
ansys::dpf::DpfException::DpfException(DpfError const &error)
```



Create exception to throw.



**Parameters**:

* [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError) const & **error**: [in] Error.

**Return type**: 

<a id="classansys_1_1dpf_1_1DpfException_1a963149e4633f882888c9c539fddc7f11"></a>
### Function ~DpfException

![][public]

```cpp
virtual ansys::dpf::DpfException::~DpfException()
```







**Return type**: 

<a id="classansys_1_1dpf_1_1DpfException_1a950039a1b9bd99886c0f690435d17fb4"></a>
### Function what

![][public]
![][const]

```cpp
virtual const char* ansys::dpf::DpfException::what() const noexcept
```



**Returns**:

Full error message.



**Return type**: const char *

<a id="classansys_1_1dpf_1_1DpfException_1ac2340d025c7b74a8031eb2d03d372e18"></a>
### Function message

![][public]
![][const]

```cpp
const char* ansys::dpf::DpfException::message() const noexcept
```



**Returns**:

User supplied error message.



**Return type**: const char *

<a id="classansys_1_1dpf_1_1DpfException_1a573c794942545079768116efa7194d81"></a>
### Function origin

![][public]
![][const]

```cpp
const char* ansys::dpf::DpfException::origin() const noexcept
```



**Returns**:

Originator of error.



**Return type**: const char *

<a id="classansys_1_1dpf_1_1DpfException_1ad21aba4144b3dbcb6e619931ac6ae6ed"></a>
### Function nature

![][public]
![][const]

```cpp
DpfError::ErrorNature ansys::dpf::DpfException::nature() const noexcept
```



**Returns**:

Type of error.



**Return type**: [DpfError::ErrorNature](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError_1a9a3fe202cc2e46746462fdb1ce44c47f)

<a id="classansys_1_1dpf_1_1DpfException_1a07c601a38ec182b458074da6f0e52478"></a>
### Function error

![][public]
![][const]

```cpp
DpfError ansys::dpf::DpfException::error() const noexcept
```



**Returns**:

Generated [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError).



**Return type**: [DpfError](classansys_1_1dpf_1_1DpfError.md#classansys_1_1dpf_1_1DpfError)

**TODO**:

* includes {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api_base.h"}]}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)