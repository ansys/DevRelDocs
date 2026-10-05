# Class ansys::dpf::ErrorFormatter

<a id="classansys-dpf-errorformatter"></a>

![][C++]
![][public]





**Inherited by**:

* [ansys::dpf::DefaultErrorFormatter](classansys-dpf-defaulterrorformatter.md#classansys-dpf-defaulterrorformatter)

## Members

* [format](classansys-dpf-errorformatter.md#classansys-dpf-errorformatter-1a074574a7227a6314c489beda322220fa)
* [~ErrorFormatter](classansys-dpf-errorformatter.md#classansys-dpf-errorformatter-1a0a0369394d69af3bb1a7ebd7990fde6e)

## Public functions

<a id="classansys-dpf-errorformatter-1a0a0369394d69af3bb1a7ebd7990fde6e"></a>
### Function ~ErrorFormatter

![][public]


```cpp
virtual ansys::dpf::ErrorFormatter::~ErrorFormatter()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ErrorFormatter::~ErrorFormatter"}]}`
-->

<a id="classansys-dpf-errorformatter-1a074574a7227a6314c489beda322220fa"></a>
### Function format

![][public]


```cpp
virtual std::string ansys::dpf::ErrorFormatter::format(const ansys::dpf::DpfError::ErrorNature &nature, const std::string &msg)=0
```








**Parameters**:

* const [ansys::dpf::DpfError::ErrorNature](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47f) & **nature**
* const std::string & **msg**

**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::ErrorFormatter::format"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)