# Class ansys::dpf::HgpDpfException

<a id="classansys-dpf-hgpdpfexception"></a>

![][C++]
![][public]





**Inherits from**:

* std::exception

## Members

* [HgpDpfException](classansys-dpf-hgpdpfexception.md#classansys-dpf-hgpdpfexception-1a277677e718b9c0644b258c631345f53c)
* [kvals](classansys-dpf-hgpdpfexception.md#classansys-dpf-hgpdpfexception-1a5a4f71981a8a09abbef160bedca11449)
* [type](classansys-dpf-hgpdpfexception.md#classansys-dpf-hgpdpfexception-1a3a7d37008efda652aa2df1ccdd5249a1)
* [what](classansys-dpf-hgpdpfexception.md#classansys-dpf-hgpdpfexception-1ac279dc3a00e542fef44ea89381d7207f)

## Public functions

<a id="classansys-dpf-hgpdpfexception-1a277677e718b9c0644b258c631345f53c"></a>
### Function HgpDpfException

![][public]


```cpp
ansys::dpf::HgpDpfException::HgpDpfException(const std::string &type, const std::string &what, std::initializer_list< kv_t > kvals)
```








**Parameters**:

* const std::string & **type**
* const std::string & **what**
* std::initializer_list< kv_t > **kvals**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::HgpDpfException::HgpDpfException"}]}`
-->

<a id="classansys-dpf-hgpdpfexception-1ac279dc3a00e542fef44ea89381d7207f"></a>
### Function what

![][public]
![][const]


```cpp
const char * ansys::dpf::HgpDpfException::what() const noexcept override
```








**Return type**: const char *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::HgpDpfException::what"}]}`
-->

<a id="classansys-dpf-hgpdpfexception-1a3a7d37008efda652aa2df1ccdd5249a1"></a>
### Function type

![][public]
![][const]


```cpp
const char * ansys::dpf::HgpDpfException::type() const
```








**Return type**: const char *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::HgpDpfException::type"}]}`
-->

<a id="classansys-dpf-hgpdpfexception-1a5a4f71981a8a09abbef160bedca11449"></a>
### Function kvals

![][public]
![][const]


```cpp
const std::unordered_map< std::string, std::string > ansys::dpf::HgpDpfException::kvals() const
```








**Return type**: const std::unordered_map< std::string, std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::HgpDpfException::kvals"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)