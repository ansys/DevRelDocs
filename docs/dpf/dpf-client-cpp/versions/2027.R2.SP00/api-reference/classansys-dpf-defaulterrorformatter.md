# Class ansys::dpf::DefaultErrorFormatter

<a id="classansys-dpf-defaulterrorformatter"></a>

![][C++]
![][public]





**Inherits from**:

* ansys::dpf::ErrorFormatter

## Members

* [format](classansys-dpf-defaulterrorformatter.md#classansys-dpf-defaulterrorformatter-1af83491e11bea69055a9daa1121c6abc4)
* [~DefaultErrorFormatter](classansys-dpf-defaulterrorformatter.md#classansys-dpf-defaulterrorformatter-1a1ffc82ad84dd982319e368cf633d293b)
* [~ErrorFormatter](classansys-dpf-errorformatter.md#classansys-dpf-errorformatter-1a0a0369394d69af3bb1a7ebd7990fde6e)

## Public functions

<a id="classansys-dpf-defaulterrorformatter-1a1ffc82ad84dd982319e368cf633d293b"></a>
### Function ~DefaultErrorFormatter

![][public]


```cpp
virtual ansys::dpf::DefaultErrorFormatter::~DefaultErrorFormatter()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DefaultErrorFormatter::~DefaultErrorFormatter"}]}`
-->

<a id="classansys-dpf-defaulterrorformatter-1af83491e11bea69055a9daa1121c6abc4"></a>
### Function format

![][public]


```cpp
std::string ansys::dpf::DefaultErrorFormatter::format(const ansys::dpf::DpfError::ErrorNature &nature, const std::string &msg) override
```








**Parameters**:

* const [ansys::dpf::DpfError::ErrorNature](classansys-dpf-dpferror.md#classansys-dpf-dpferror-1a9a3fe202cc2e46746462fdb1ce44c47f) & **nature**
* const std::string & **msg**

**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DefaultErrorFormatter::format"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)