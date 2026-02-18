# Class sysc::NonFatalError

![][C++]
![][public]

**Definition**: `NonFatalError.hpp` (line 23)

Provide a class for non-fatal errors.

Non-fatal errors are used to indicate that an error occurred, but the connection between the System Coupling Participant and the System Coupling is still valid.

**Inherits from**:

* [std::exception](undefined.md#undefined)

## Members

* [m\_str](classsysc_1_1NonFatalError.md#classsysc_1_1NonFatalError_1aa34688645322b17d666940b619a0b8af)
* [NonFatalError](classsysc_1_1NonFatalError.md#classsysc_1_1NonFatalError_1a11fc4107b05f61a8e8bfeb6e70fe3b0f)
* [what](classsysc_1_1NonFatalError.md#classsysc_1_1NonFatalError_1a0c8c4306ac5e82f459e1aa4730f36a88)
* [~NonFatalError](classsysc_1_1NonFatalError.md#classsysc_1_1NonFatalError_1a06517a21ef77776d83a580cd53e81585)

## Private attributes

<a id="classsysc_1_1NonFatalError_1aa34688645322b17d666940b619a0b8af"></a>
### Variable m\_str

![][private]

**Definition**: `NonFatalError.hpp` (line 33)

```cpp
std::string sysc::NonFatalError::m_str
```







**Type**: std::string

## Public functions

<a id="classsysc_1_1NonFatalError_1a11fc4107b05f61a8e8bfeb6e70fe3b0f"></a>
### Function NonFatalError

![][public]

```cpp
sysc::NonFatalError::NonFatalError(std::string str)
```







**Parameters**:

* std::string **str**

**Return type**: 

<a id="classsysc_1_1NonFatalError_1a06517a21ef77776d83a580cd53e81585"></a>
### Function ~NonFatalError

![][public]

```cpp
sysc::NonFatalError::~NonFatalError() noexcept override=default
```







**Return type**: 

<a id="classsysc_1_1NonFatalError_1a0c8c4306ac5e82f459e1aa4730f36a88"></a>
### Function what

![][public]
![][const]

```cpp
const char* sysc::NonFatalError::what() const noexcept override
```







**Return type**: const char *

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)