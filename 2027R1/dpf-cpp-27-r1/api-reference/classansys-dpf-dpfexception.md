# Class ansys::dpf::DpfException

<a id="classansys-dpf-dpfexception"></a>

![][C++]
![][public]



Exception thrown by DPF call.

**Inherits from**:

* std::exception

## Members

* [DpfException](classansys-dpf-dpfexception.md#classansys-dpf-dpfexception-1ab417aeb3168e72745df2f8c98d912428)
* [DpfException](classansys-dpf-dpfexception.md#classansys-dpf-dpfexception-1a692cdeed9babf4395f9ce12c64a35818)
* [error](classansys-dpf-dpfexception.md#classansys-dpf-dpfexception-1a07c601a38ec182b458074da6f0e52478)
* [message](classansys-dpf-dpfexception.md#classansys-dpf-dpfexception-1a69cc4e277ea17f9e7d83872db1edbf24)
* [nature](classansys-dpf-dpfexception.md#classansys-dpf-dpfexception-1ad21aba4144b3dbcb6e619931ac6ae6ed)
* [origin](classansys-dpf-dpfexception.md#classansys-dpf-dpfexception-1a613c503433eb563fed99099941cc416d)
* [what](classansys-dpf-dpfexception.md#classansys-dpf-dpfexception-1a0df1c0ba45617a9f207739f935d0e074)
* [~DpfException](classansys-dpf-dpfexception.md#classansys-dpf-dpfexception-1a963149e4633f882888c9c539fddc7f11)

## Public functions

<a id="classansys-dpf-dpfexception-1ab417aeb3168e72745df2f8c98d912428"></a>
### Function DpfException

![][public]


```cpp
ansys::dpf::DpfException::DpfException(DpfError::ErrorNature nature, std::string const &origin, std::string const &message)
```




Create exception to throw.



**Parameters**:

* [DpfError::ErrorNature](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47f) **nature**: [in] Type of error.
* std::string const & **origin**: [in] Originator of error.
* std::string const & **message**: [in] Error message.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfException::DpfException"}]}`
-->

<a id="classansys-dpf-dpfexception-1a692cdeed9babf4395f9ce12c64a35818"></a>
### Function DpfException

![][public]


```cpp
ansys::dpf::DpfException::DpfException(DpfError const &error)
```




Create exception to throw.



**Parameters**:

* [DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror) const & **error**: [in] Error.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfException::DpfException"}]}`
-->

<a id="classansys-dpf-dpfexception-1a963149e4633f882888c9c539fddc7f11"></a>
### Function ~DpfException

![][public]


```cpp
virtual ansys::dpf::DpfException::~DpfException()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfException::~DpfException"}]}`
-->

<a id="classansys-dpf-dpfexception-1a0df1c0ba45617a9f207739f935d0e074"></a>
### Function what

![][public]
![][const]


```cpp
virtual const char * ansys::dpf::DpfException::what() const noexcept
```




**Returns**:

Full error message.



**Return type**: const char *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfException::what"}]}`
-->

<a id="classansys-dpf-dpfexception-1a69cc4e277ea17f9e7d83872db1edbf24"></a>
### Function message

![][public]
![][const]


```cpp
const char * ansys::dpf::DpfException::message() const noexcept
```




**Returns**:

User supplied error message.



**Return type**: const char *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfException::message"}]}`
-->

<a id="classansys-dpf-dpfexception-1a613c503433eb563fed99099941cc416d"></a>
### Function origin

![][public]
![][const]


```cpp
const char * ansys::dpf::DpfException::origin() const noexcept
```




**Returns**:

Originator of error.



**Return type**: const char *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfException::origin"}]}`
-->

<a id="classansys-dpf-dpfexception-1ad21aba4144b3dbcb6e619931ac6ae6ed"></a>
### Function nature

![][public]
![][const]


```cpp
DpfError::ErrorNature ansys::dpf::DpfException::nature() const noexcept
```




**Returns**:

Type of error.



**Return type**: [DpfError::ErrorNature](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47f)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfException::nature"}]}`
-->

<a id="classansys-dpf-dpfexception-1a07c601a38ec182b458074da6f0e52478"></a>
### Function error

![][public]
![][const]


```cpp
DpfError ansys::dpf::DpfException::error() const noexcept
```




**Returns**:

Generated [DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror).



**Return type**: [DpfError](classansys-dpf-dpferror.md#classansys-dpf-dpferror)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfException::error"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api_base.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)