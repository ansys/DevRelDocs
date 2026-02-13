<a id="namespacehelper"></a>
# Namespace helper

![][C++]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api\_base.h` (line 39)

## Functions

<a id="dpf__api__base_8h_1a3536bcf1fa71355264a220b8d375579d"></a>
### Function call\_function

![][public]
![][static]

```cpp
static void helper::call_function(FunctionT f, ansys::dpf::so::API const *api, ArgsT... args)
```

**Parameters**:

* FunctionT **f**
* ansys::dpf::so::API const * **api**
* ArgsT... **args**

**Return type**: void

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename FunctionT"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename ..."}]},{"type":"text","text":"\n            "},{"type":"element","name":"declname","attributes":{},"children":[{"type":"text","text":"ArgsT"}]},{"type":"text","text":"\n            "},{"type":"element","name":"defname","attributes":{},"children":[{"type":"text","text":"ArgsT"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"helper::call_function"}]}`
-->

<a id="dpf__api__base_8h_1af26176cb86f1989ba2c112d62d53a865"></a>
### Function throw\_dpf\_exception\_if\_necessary

![][public]

```cpp
void helper::throw_dpf_exception_if_necessary(std::string const &origin, int error_size, _TCHAR *text, const ansys::dpf::so::API *api)
```

**Parameters**:

* std::string const & **origin**
* int **error_size**
* _TCHAR * **text**
* const ansys::dpf::so::API * **api**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"helper::throw_dpf_exception_if_necessary"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)