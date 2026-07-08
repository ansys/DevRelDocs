# Class libuserd::Variable

<a id="classlibuserd_1_1_variable"></a>

![][C++]
![][public]




This class represents a variable.

**Inherits from**:

* IVariable

## Members

* [Reader](classlibuserd_1_1_variable.md#classlibuserd_1_1_variable_1a35cb182752752c74a30050705acc3c06)
* [Variable](classlibuserd_1_1_variable.md#classlibuserd_1_1_variable_1aeb22162878742aaa4796aebf10a89b93)

## Friends

<a id="classlibuserd_1_1_variable_1a35cb182752752c74a30050705acc3c06"></a>
### Friend Reader

![][C++]
![][private]








## Private functions

<a id="classlibuserd_1_1_variable_1aeb22162878742aaa4796aebf10a89b93"></a>
### Function Variable

![][private]


```cpp
libuserd::Variable::Variable(const uint32_t _id, const std::string &_name, const std::string &_unit_label, const std::string &_unit_dims, const VariableLocation _location, const VariableType _type, const bool _time_varying, const bool _complex, const bool _interleave_flag, const uint32_t _number_of_components, const std::map< const std::string, std::string > &_metadata)
```








**Parameters**:

* const uint32_t **_id**
* const std::string & **_name**
* const std::string & **_unit_label**
* const std::string & **_unit_dims**
* const VariableLocation **_location**
* const VariableType **_type**
* const bool **_time_varying**
* const bool **_complex**
* const bool **_interleave_flag**
* const uint32_t **_number_of_components**
* const std::map< const std::string, std::string > & **_metadata**

**Return type**: 

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)