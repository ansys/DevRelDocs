<a id="classansys_1_1dpf_1_1Context"></a>
# Class ansys::dpf::Context

![][C++]
![][public]

**Definition**: `dpf\_api\_base.h` (line 1721)

The class representing the DPF execution context. This is used to configure several aspects of DPF like:

* The XML configuration file to be loaded.

* The license context to be used.









**See also**: [dpf::LibraryHandle](classansys_1_1dpf_1_1LibraryHandle.md#classansys_1_1dpf_1_1LibraryHandle), [dpf::core::applyContext](classansys_1_1dpf_1_1core.md#classansys_1_1dpf_1_1core_1a5fbdf727da47ba6dd749ade51f1f2dcc)

## Inner classes

* [ansys::dpf::Context::internal](structansys_1_1dpf_1_1Context_1_1internal.md#structansys_1_1dpf_1_1Context_1_1internal)

## Members

* [\_api\_version](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1a822209dea29d84819b629ab3f239cf76)
* [\_context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1a12eb8216a93eeb5801f4b7a422e075d8)
* [\_error\_on\_plugin\_load](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1aab9892b123af666e0f0b85820c73ee76)
* [\_license\_context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1aea7a0e0d152c2184879bf4b22c09c8d1)
* [\_setup\_file\_path](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1a7128eec50684301104a5577bf00847c1)
* [Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1ae26354fe1dea7b2691e115275704278b)
* [defaultContext](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1a05d1af3aea226b6cb8547d1d56c9c146)
* [EDpfLicenseContext](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1a1149672f0fad6470e3533a15d358baef)
* [entryContext](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1a30b9265329478de651ae53b753831bc4)
* [errorOnPluginLoad](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1ab36cb19d02596f0c9e84670632a7567c)
* [getContext](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1af4b49f2ed79e09c7d20d59895d52c139)
* [getLicenseContext](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1a75bf6a9e641e9c9f24d61ef6364672c8)
* [getSetupFilePath](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1a8e69df73d5d7695a12619e98bb4ef82b)
* [PluginLoadErrorMode](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1a89c9954b0806e1ffbefd5d413d44a8e3)
* [premiumContext](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1a8416bcd2b6a76249a97bf259851aa121)
* [setApiV2](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1a430c254316b18a31fb167483750c96fa)
* [standaloneContext](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1a327ad3dde1ba5c314c34d5b2552156f9)
* [userDefinedContext](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1af2efd2673fef4ce34b56f85dad9d5520)
* [withEntryLevelLicense](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1a6848f3f755ec83e57544e688182d534d)
* [withErrorOnPluginLoad](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1a5fe6bfb18b6d33dd88f16bb006bb0d8c)
* [withPremiumLicense](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1a33a89b830c012a1563bf6534d5de7d48)

## Public types

<a id="classansys_1_1dpf_1_1Context_1a1149672f0fad6470e3533a15d358baef"></a>
### Enumeration type EDpfLicenseContext

![][public]

**Definition**: `dpf\_api\_base.h` (line 1728)


```cpp
enum EDpfLicenseContext {
  eNone = 0,
  eEntryLevel = 1,
  ePremium = 2
}
```


Enum to select the license context.





<a id="classansys_1_1dpf_1_1Context_1a1149672f0fad6470e3533a15d358baefabe988781e4e1de1c6a36fb698afbbe1f"></a>
#### Enumerator eNone





<a id="classansys_1_1dpf_1_1Context_1a1149672f0fad6470e3533a15d358baefa3524bc6ef2b323544131910a168307e4"></a>
#### Enumerator eEntryLevel





<a id="classansys_1_1dpf_1_1Context_1a1149672f0fad6470e3533a15d358baefaac9bc97d5be545de7d5d731807e6238b"></a>
#### Enumerator ePremium





<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::EDpfLicenseContext"}]}`
-->

<a id="classansys_1_1dpf_1_1Context_1a89c9954b0806e1ffbefd5d413d44a8e3"></a>
### Enumeration type PluginLoadErrorMode

![][public]

**Definition**: `dpf\_api\_base.h` (line 1739)


```cpp
enum PluginLoadErrorMode {
  eSilent = 0,
  eReportFirst = 1,
  eReportAll = 2
}
```


Enum that determines the error reporting strategy during plugin loading.





<a id="classansys_1_1dpf_1_1Context_1a89c9954b0806e1ffbefd5d413d44a8e3a1bca7792b0764f5436105430db6f5f91"></a>
#### Enumerator eSilent





<a id="classansys_1_1dpf_1_1Context_1a89c9954b0806e1ffbefd5d413d44a8e3af61fe2506df3f2bd107cfb1d8b4fa566"></a>
#### Enumerator eReportFirst





<a id="classansys_1_1dpf_1_1Context_1a89c9954b0806e1ffbefd5d413d44a8e3a826fa616dd3899272e97b80a5c73dabc"></a>
#### Enumerator eReportAll





<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::PluginLoadErrorMode"}]}`
-->

## Private attributes

<a id="classansys_1_1dpf_1_1Context_1a12eb8216a93eeb5801f4b7a422e075d8"></a>
### Variable \_context

![][private]

**Definition**: `dpf\_api\_base.h` (line 1748)


```cpp
EDpfContext ansys::dpf::Context::_context = EDpfContext::eDefault
```








**Type**: [EDpfContext](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a02d1b14b4a34eeae292e89f8ee7cfe60)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::_context"}]}`
-->

<a id="classansys_1_1dpf_1_1Context_1a7128eec50684301104a5577bf00847c1"></a>
### Variable \_setup\_file\_path

![][private]

**Definition**: `dpf\_api\_base.h` (line 1749)


```cpp
std::string ansys::dpf::Context::_setup_file_path = ""
```








**Type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::_setup_file_path"}]}`
-->

<a id="classansys_1_1dpf_1_1Context_1aab9892b123af666e0f0b85820c73ee76"></a>
### Variable \_error\_on\_plugin\_load

![][private]

**Definition**: `dpf\_api\_base.h` (line 1752)


```cpp
PluginLoadErrorMode ansys::dpf::Context::_error_on_plugin_load = PluginLoadErrorMode::eSilent
```








**Type**: [PluginLoadErrorMode](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1a89c9954b0806e1ffbefd5d413d44a8e3)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::_error_on_plugin_load"}]}`
-->

<a id="classansys_1_1dpf_1_1Context_1aea7a0e0d152c2184879bf4b22c09c8d1"></a>
### Variable \_license\_context

![][private]

**Definition**: `dpf\_api\_base.h` (line 1753)


```cpp
EDpfLicenseContext ansys::dpf::Context::_license_context = EDpfLicenseContext::eNone
```








**Type**: [EDpfLicenseContext](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1a1149672f0fad6470e3533a15d358baef)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::_license_context"}]}`
-->

<a id="classansys_1_1dpf_1_1Context_1a822209dea29d84819b629ab3f239cf76"></a>
### Variable \_api\_version

![][private]

**Definition**: `dpf\_api\_base.h` (line 1754)


```cpp
int ansys::dpf::Context::_api_version = 1
```








**Type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::_api_version"}]}`
-->

## Friends

<a id="classansys_1_1dpf_1_1Context_1a87c891c29622c0cbaa03d5ef05f0e4b6"></a>
### Friend internal

![][C++]
![][public]

**Definition**: `dpf\_api\_base.h` (line 1866)







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"struct"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend struct internal"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::internal"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"internal"}]},{"type":"text","text":"\n        "}]}`
-->

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
* std::string const & **setup_file_path** = "" : [in] Optional path to a DPF xml file if using a custom defined location. If a file name is passed, instead of a path, it will search for it int the predefined location dpf/utilities.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::Context"}]}`
-->

<a id="classansys_1_1dpf_1_1Context_1af4b49f2ed79e09c7d20d59895d52c139"></a>
### Function getContext

![][public]
![][const]


```cpp
EDpfContext ansys::dpf::Context::getContext() const
```


Get the DPF context enum value.

**Returns**:

[EDpfContext](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a02d1b14b4a34eeae292e89f8ee7cfe60)



**Return type**: [EDpfContext](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a02d1b14b4a34eeae292e89f8ee7cfe60)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::getContext"}]}`
-->

<a id="classansys_1_1dpf_1_1Context_1a8e69df73d5d7695a12619e98bb4ef82b"></a>
### Function getSetupFilePath

![][public]
![][const]


```cpp
std::string const  & ansys::dpf::Context::getSetupFilePath() const
```


Get the path to the XML file used to configure DPF.

**Returns**:

std::string const&



**Return type**: std::string const &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::getSetupFilePath"}]}`
-->

<a id="classansys_1_1dpf_1_1Context_1a75bf6a9e641e9c9f24d61ef6364672c8"></a>
### Function getLicenseContext

![][public]
![][const]


```cpp
EDpfLicenseContext ansys::dpf::Context::getLicenseContext() const
```


Get the DPF license context enum value.

Use with DPF runtime R2025R1 or later.






**Returns**:

[EDpfLicenseContext](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1a1149672f0fad6470e3533a15d358baef)



**Return type**: [EDpfLicenseContext](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1a1149672f0fad6470e3533a15d358baef)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::getLicenseContext"}]}`
-->

<a id="classansys_1_1dpf_1_1Context_1ab36cb19d02596f0c9e84670632a7567c"></a>
### Function errorOnPluginLoad

![][public]
![][const]


```cpp
PluginLoadErrorMode ansys::dpf::Context::errorOnPluginLoad() const
```


Get the error reporting mode for plugin loading.

Use with DPF runtime R2025R1 or later.






**Returns**:

[PluginLoadErrorMode](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1a89c9954b0806e1ffbefd5d413d44a8e3)



**Return type**: [PluginLoadErrorMode](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1a89c9954b0806e1ffbefd5d413d44a8e3)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::errorOnPluginLoad"}]}`
-->

<a id="classansys_1_1dpf_1_1Context_1a5fe6bfb18b6d33dd88f16bb006bb0d8c"></a>
### Function withErrorOnPluginLoad

![][public]


```cpp
Context & ansys::dpf::Context::withErrorOnPluginLoad(PluginLoadErrorMode error_mode)
```


Sets the mode in which DPF report errors when plugins are loaded.

Use with DPF runtime R2025R1 or later.






**Parameters**:

* **error_mode**: The strategy for error reporting.


**Returns**:

[Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context)&



**Parameters**:

* [PluginLoadErrorMode](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1a89c9954b0806e1ffbefd5d413d44a8e3) **error_mode**

**Return type**: [Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1ae26354fe1dea7b2691e115275704278b) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::withErrorOnPluginLoad"}]}`
-->

<a id="classansys_1_1dpf_1_1Context_1a33a89b830c012a1563bf6534d5de7d48"></a>
### Function withPremiumLicense

![][public]


```cpp
Context & ansys::dpf::Context::withPremiumLicense()
```


Sets the license context to Premium.

Use with DPF runtime R2025R1 or later.






**Returns**:

[Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context)&



**Return type**: [Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1ae26354fe1dea7b2691e115275704278b) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::withPremiumLicense"}]}`
-->

<a id="classansys_1_1dpf_1_1Context_1a6848f3f755ec83e57544e688182d534d"></a>
### Function withEntryLevelLicense

![][public]


```cpp
Context & ansys::dpf::Context::withEntryLevelLicense()
```


Sets the license context to Entry.

Use with DPF runtime R2025R1 or later.






**Returns**:

[Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context)&



**Return type**: [Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1ae26354fe1dea7b2691e115275704278b) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::withEntryLevelLicense"}]}`
-->

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



**Return type**: [Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1ae26354fe1dea7b2691e115275704278b)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::entryContext"}]}`
-->

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



**Return type**: [Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1ae26354fe1dea7b2691e115275704278b)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::premiumContext"}]}`
-->

<a id="classansys_1_1dpf_1_1Context_1a05d1af3aea226b6cb8547d1d56c9c146"></a>
### Function defaultContext

![][public]
![][static]


```cpp
static Context ansys::dpf::Context::defaultContext()
```


Creates a default context.

Use with DPF runtime R2025R1 or later.






**Returns**:

[Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context)



**Return type**: [Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1ae26354fe1dea7b2691e115275704278b)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::defaultContext"}]}`
-->

<a id="classansys_1_1dpf_1_1Context_1a327ad3dde1ba5c314c34d5b2552156f9"></a>
### Function standaloneContext

![][public]
![][static]


```cpp
static Context ansys::dpf::Context::standaloneContext()
```


Creates a standalone context.

**Returns**:

[Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context)



**Return type**: [Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1ae26354fe1dea7b2691e115275704278b)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::standaloneContext"}]}`
-->

<a id="classansys_1_1dpf_1_1Context_1af2efd2673fef4ce34b56f85dad9d5520"></a>
### Function userDefinedContext

![][public]
![][static]


```cpp
static Context ansys::dpf::Context::userDefinedContext(std::string const &setup_file="DpfCustomDefined.xml")
```


Creates a user-defined context.

Use with DPF runtime R2025R1 or later.






**Parameters**:

* **setup_file**: The path to the DPF XML file with the user configuration. If a file name is provided as parameter, it will search in /utilities for it. The default XML file used is /utilities/DpfCustomDefined.xml, that the user can edit.


**Returns**:

[Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context)



**Parameters**:

* std::string const & **setup_file** = "DpfCustomDefined.xml" 

**Return type**: [Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1ae26354fe1dea7b2691e115275704278b)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::userDefinedContext"}]}`
-->

## Private functions

<a id="classansys_1_1dpf_1_1Context_1a430c254316b18a31fb167483750c96fa"></a>
### Function setApiV2

![][private]


```cpp
Context & ansys::dpf::Context::setApiV2()
```








**Return type**: [Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1ae26354fe1dea7b2691e115275704278b) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::setApiV2"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api_base.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)