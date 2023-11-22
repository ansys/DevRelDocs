<a id="classansys_1_1dpf_1_1Context"></a>
# Class ansys::dpf::Context

![][C++]
![][public]

**Definition**: `dpf\_api\_base.h` (line 1504)



[Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context) for [LibraryHandle](classansys_1_1dpf_1_1LibraryHandle.md#classansys_1_1dpf_1_1LibraryHandle). It defines the licensing logic DPF starts with. 

**See also**: [Using DPF Context](group__group__11.md#group__group__11)

## Members

* [\_context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1a12eb8216a93eeb5801f4b7a422e075d8)
* [\_setup\_file\_path](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1a7128eec50684301104a5577bf00847c1)
* [Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1ae26354fe1dea7b2691e115275704278b)
* [entryContext](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1a30b9265329478de651ae53b753831bc4)
* [getContext](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1af4b49f2ed79e09c7d20d59895d52c139)
* [getSetupFilePath](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1a1c399565886aff68774350161f50fa4a)
* [premiumContext](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1a8416bcd2b6a76249a97bf259851aa121)

## Private attributes

<a id="classansys_1_1dpf_1_1Context_1a12eb8216a93eeb5801f4b7a422e075d8"></a>
### Variable \_context

![][private]

**Definition**: `dpf\_api\_base.h` (line 1507)

```cpp
EDpfContext ansys::dpf::Context::_context
```







**Type**: [EDpfContext](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a02d1b14b4a34eeae292e89f8ee7cfe60)

<a id="classansys_1_1dpf_1_1Context_1a7128eec50684301104a5577bf00847c1"></a>
### Variable \_setup\_file\_path

![][private]

**Definition**: `dpf\_api\_base.h` (line 1508)

```cpp
std::string ansys::dpf::Context::_setup_file_path
```







**Type**: std::string

## Public functions

<a id="classansys_1_1dpf_1_1Context_1ae26354fe1dea7b2691e115275704278b"></a>
### Function Context

![][public]

```cpp
ansys::dpf::Context::Context(EDpfContext context=EDpfContext::eDefault, std::string const &setup_file_path="")
```



Defines the settings that will be used to load DPF. A DPF xml file is used to define those settings.



**Parameters**:

* [EDpfContext](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a02d1b14b4a34eeae292e89f8ee7cfe60) **context** = EDpfContext::eDefault : [in] Defines setup to use.
* std::string const & **setup_file_path** = "" : [in] Optional path to a DPF xml file if using a custom defined location.

**Return type**: 

<a id="classansys_1_1dpf_1_1Context_1af4b49f2ed79e09c7d20d59895d52c139"></a>
### Function getContext

![][public]
![][const]

```cpp
EDpfContext ansys::dpf::Context::getContext() const
```



**Returns**:

DPF context enum value.



**Return type**: [EDpfContext](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a02d1b14b4a34eeae292e89f8ee7cfe60)

<a id="classansys_1_1dpf_1_1Context_1a1c399565886aff68774350161f50fa4a"></a>
### Function getSetupFilePath

![][public]
![][const]

```cpp
std::string const& ansys::dpf::Context::getSetupFilePath() const
```



**Returns**:

DPF file path DPF has been started with, if specified.



**Return type**: std::string const  &

## Public static functions

<a id="classansys_1_1dpf_1_1Context_1a30b9265329478de651ae53b753831bc4"></a>
### Function entryContext

![][public]
![][static]

```cpp
static Context ansys::dpf::Context::entryContext()
```



**Returns**:

Entry context instance that does not allow DPF to perform any license checkout, meaning that licensed DPF operators run will fail.



**See also**: [Using DPF Context](group__group__11.md#group__group__11)



**Return type**: [Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context)

<a id="classansys_1_1dpf_1_1Context_1a8416bcd2b6a76249a97bf259851aa121"></a>
### Function premiumContext

![][public]
![][static]

```cpp
static Context ansys::dpf::Context::premiumContext()
```



**Returns**:

Premium context instance that allows DPF to perform license checkouts, allowing licensed DPF operators to run.



**See also**: [Using DPF Context](group__group__11.md#group__group__11)



**Return type**: [Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context)

**TODO**:

* includes {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api_base.h"}]}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)