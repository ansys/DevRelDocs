<a id="classansys-dpf-context"></a>
# Class ansys::dpf::Context

![][C++]
![][public]

The class representing the DPF execution context. This is used to configure several aspects of DPF like:

* The XML configuration file to be loaded.

* The license context to be used.









**See also**: [dpf::LibraryHandle](classansys-dpf-libraryhandle.md#classansys-dpf-libraryhandle), [dpf::core::applyContext](classansys-dpf-core.md#classansys-dpf-core-1a5fbdf727da47ba6dd749ade51f1f2dcc)

## Inner classes

* [ansys::dpf::Context::internal](structansys-dpf-context-internal.md#structansys-dpf-context-internal)

## Members

* [Context](classansys-dpf-context.md#classansys-dpf-context-1ae26354fe1dea7b2691e115275704278b)
* [defaultContext](classansys-dpf-context.md#classansys-dpf-context-1a05d1af3aea226b6cb8547d1d56c9c146)
* [EDpfLicenseContext](classansys-dpf-context.md#classansys-dpf-context-1a1149672f0fad6470e3533a15d358baef)
* [entryContext](classansys-dpf-context.md#classansys-dpf-context-1a30b9265329478de651ae53b753831bc4)
* [errorOnPluginLoad](classansys-dpf-context.md#classansys-dpf-context-1ab36cb19d02596f0c9e84670632a7567c)
* [getContext](classansys-dpf-context.md#classansys-dpf-context-1af4b49f2ed79e09c7d20d59895d52c139)
* [getLicenseContext](classansys-dpf-context.md#classansys-dpf-context-1a75bf6a9e641e9c9f24d61ef6364672c8)
* [getSetupFilePath](classansys-dpf-context.md#classansys-dpf-context-1a8e69df73d5d7695a12619e98bb4ef82b)
* [PluginLoadErrorMode](classansys-dpf-context.md#classansys-dpf-context-1a89c9954b0806e1ffbefd5d413d44a8e3)
* [premiumContext](classansys-dpf-context.md#classansys-dpf-context-1a8416bcd2b6a76249a97bf259851aa121)
* [standaloneContext](classansys-dpf-context.md#classansys-dpf-context-1a327ad3dde1ba5c314c34d5b2552156f9)
* [userDefinedContext](classansys-dpf-context.md#classansys-dpf-context-1af2efd2673fef4ce34b56f85dad9d5520)
* [withEntryLevelLicense](classansys-dpf-context.md#classansys-dpf-context-1a6848f3f755ec83e57544e688182d534d)
* [withErrorOnPluginLoad](classansys-dpf-context.md#classansys-dpf-context-1a5fe6bfb18b6d33dd88f16bb006bb0d8c)
* [withPremiumLicense](classansys-dpf-context.md#classansys-dpf-context-1a33a89b830c012a1563bf6534d5de7d48)

## Public types

<a id="classansys-dpf-context-1a1149672f0fad6470e3533a15d358baef"></a>
### Enumeration type EDpfLicenseContext

![][public]


```cpp
enum EDpfLicenseContext {
  eNone = 0,
  eEntryLevel = 1,
  ePremium = 2
}
```


Enum to select the license context.





<a id="classansys-dpf-context-1a1149672f0fad6470e3533a15d358baefabe988781e4e1de1c6a36fb698afbbe1f"></a>
#### Enumerator eNone





<a id="classansys-dpf-context-1a1149672f0fad6470e3533a15d358baefa3524bc6ef2b323544131910a168307e4"></a>
#### Enumerator eEntryLevel





<a id="classansys-dpf-context-1a1149672f0fad6470e3533a15d358baefaac9bc97d5be545de7d5d731807e6238b"></a>
#### Enumerator ePremium





<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::EDpfLicenseContext"}]}`
-->

<a id="classansys-dpf-context-1a89c9954b0806e1ffbefd5d413d44a8e3"></a>
### Enumeration type PluginLoadErrorMode

![][public]


```cpp
enum PluginLoadErrorMode {
  eSilent = 0,
  eReportFirst = 1,
  eReportAll = 2
}
```


Enum that determines the error reporting strategy during plugin loading.





<a id="classansys-dpf-context-1a89c9954b0806e1ffbefd5d413d44a8e3a1bca7792b0764f5436105430db6f5f91"></a>
#### Enumerator eSilent





<a id="classansys-dpf-context-1a89c9954b0806e1ffbefd5d413d44a8e3af61fe2506df3f2bd107cfb1d8b4fa566"></a>
#### Enumerator eReportFirst





<a id="classansys-dpf-context-1a89c9954b0806e1ffbefd5d413d44a8e3a826fa616dd3899272e97b80a5c73dabc"></a>
#### Enumerator eReportAll





<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::PluginLoadErrorMode"}]}`
-->

## Friends

<a id="classansys-dpf-context-1a87c891c29622c0cbaa03d5ef05f0e4b6"></a>
### Friend internal

![][C++]
![][public]







<!--
**TODO**:

* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"struct"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend struct internal"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::internal"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"internal"}]},{"type":"text","text":"\n        "}]}`
-->

## Public functions

<a id="classansys-dpf-context-1ae26354fe1dea7b2691e115275704278b"></a>
### Function Context

![][public]


```cpp
ansys::dpf::Context::Context(EDpfContext context=EDpfContext::eDefault, std::string const &setup_file_path="")
```




Defines the settings that will be used to load DPF. A DPF xml file is used to define those settings.



**Parameters**:

* [EDpfContext](namespaceansys-dpf.md#namespaceansys-dpf-1a02d1b14b4a34eeae292e89f8ee7cfe60) **context** = EDpfContext::eDefault : [in] Defines setup to use.
* std::string const & **setup_file_path** = "" : [in] Optional path to a DPF xml file if using a custom defined location. If a file name is passed, instead of a path, it will search for it int the predefined location dpf/utilities.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::Context"}]}`
-->

<a id="classansys-dpf-context-1af4b49f2ed79e09c7d20d59895d52c139"></a>
### Function getContext

![][public]
![][const]


```cpp
EDpfContext ansys::dpf::Context::getContext() const
```


Get the DPF context enum value.

**Returns**:

[EDpfContext](namespaceansys-dpf.md#namespaceansys-dpf-1a02d1b14b4a34eeae292e89f8ee7cfe60)



**Return type**: [EDpfContext](namespaceansys-dpf.md#namespaceansys-dpf-1a02d1b14b4a34eeae292e89f8ee7cfe60)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::getContext"}]}`
-->

<a id="classansys-dpf-context-1a8e69df73d5d7695a12619e98bb4ef82b"></a>
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

<a id="classansys-dpf-context-1a75bf6a9e641e9c9f24d61ef6364672c8"></a>
### Function getLicenseContext

![][public]
![][const]


```cpp
EDpfLicenseContext ansys::dpf::Context::getLicenseContext() const
```


Get the DPF license context enum value.

Use with DPF runtime R2025R1 or later.






**Returns**:

[EDpfLicenseContext](classansys-dpf-context.md#classansys-dpf-context-1a1149672f0fad6470e3533a15d358baef)



**Return type**: [EDpfLicenseContext](classansys-dpf-context.md#classansys-dpf-context-1a1149672f0fad6470e3533a15d358baef)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::getLicenseContext"}]}`
-->

<a id="classansys-dpf-context-1ab36cb19d02596f0c9e84670632a7567c"></a>
### Function errorOnPluginLoad

![][public]
![][const]


```cpp
PluginLoadErrorMode ansys::dpf::Context::errorOnPluginLoad() const
```


Get the error reporting mode for plugin loading.

Use with DPF runtime R2025R1 or later.






**Returns**:

[PluginLoadErrorMode](classansys-dpf-context.md#classansys-dpf-context-1a89c9954b0806e1ffbefd5d413d44a8e3)



**Return type**: [PluginLoadErrorMode](classansys-dpf-context.md#classansys-dpf-context-1a89c9954b0806e1ffbefd5d413d44a8e3)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::errorOnPluginLoad"}]}`
-->

<a id="classansys-dpf-context-1a5fe6bfb18b6d33dd88f16bb006bb0d8c"></a>
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

[Context](classansys-dpf-context.md#classansys-dpf-context)&



**Parameters**:

* [PluginLoadErrorMode](classansys-dpf-context.md#classansys-dpf-context-1a89c9954b0806e1ffbefd5d413d44a8e3) **error_mode**

**Return type**: [Context](classansys-dpf-context.md#classansys-dpf-context-1ae26354fe1dea7b2691e115275704278b) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::withErrorOnPluginLoad"}]}`
-->

<a id="classansys-dpf-context-1a33a89b830c012a1563bf6534d5de7d48"></a>
### Function withPremiumLicense

![][public]


```cpp
Context & ansys::dpf::Context::withPremiumLicense()
```


Sets the license context to Premium.

Use with DPF runtime R2025R1 or later.






**Returns**:

[Context](classansys-dpf-context.md#classansys-dpf-context)&



**Return type**: [Context](classansys-dpf-context.md#classansys-dpf-context-1ae26354fe1dea7b2691e115275704278b) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::withPremiumLicense"}]}`
-->

<a id="classansys-dpf-context-1a6848f3f755ec83e57544e688182d534d"></a>
### Function withEntryLevelLicense

![][public]


```cpp
Context & ansys::dpf::Context::withEntryLevelLicense()
```


Sets the license context to Entry.

Use with DPF runtime R2025R1 or later.






**Returns**:

[Context](classansys-dpf-context.md#classansys-dpf-context)&



**Return type**: [Context](classansys-dpf-context.md#classansys-dpf-context-1ae26354fe1dea7b2691e115275704278b) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::withEntryLevelLicense"}]}`
-->

## Public static functions

<a id="classansys-dpf-context-1a30b9265329478de651ae53b753831bc4"></a>
### Function entryContext

![][public]
![][static]


```cpp
static Context ansys::dpf::Context::entryContext()
```




**Returns**:

Entry context instance that does not allow DPF to perform any license checkout, meaning that licensed DPF operators run will fail.



**Return type**: [Context](classansys-dpf-context.md#classansys-dpf-context-1ae26354fe1dea7b2691e115275704278b)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::entryContext"}]}`
-->

<a id="classansys-dpf-context-1a8416bcd2b6a76249a97bf259851aa121"></a>
### Function premiumContext

![][public]
![][static]


```cpp
static Context ansys::dpf::Context::premiumContext()
```




**Returns**:

Premium context instance that allows DPF to perform license checkouts, allowing licensed DPF operators to run.



**Return type**: [Context](classansys-dpf-context.md#classansys-dpf-context-1ae26354fe1dea7b2691e115275704278b)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::premiumContext"}]}`
-->

<a id="classansys-dpf-context-1a05d1af3aea226b6cb8547d1d56c9c146"></a>
### Function defaultContext

![][public]
![][static]


```cpp
static Context ansys::dpf::Context::defaultContext()
```


Creates a default context.

Use with DPF runtime R2025R1 or later.






**Returns**:

[Context](classansys-dpf-context.md#classansys-dpf-context)



**Return type**: [Context](classansys-dpf-context.md#classansys-dpf-context-1ae26354fe1dea7b2691e115275704278b)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::defaultContext"}]}`
-->

<a id="classansys-dpf-context-1a327ad3dde1ba5c314c34d5b2552156f9"></a>
### Function standaloneContext

![][public]
![][static]


```cpp
static Context ansys::dpf::Context::standaloneContext()
```


Creates a standalone context.

**Returns**:

[Context](classansys-dpf-context.md#classansys-dpf-context)



**Return type**: [Context](classansys-dpf-context.md#classansys-dpf-context-1ae26354fe1dea7b2691e115275704278b)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::standaloneContext"}]}`
-->

<a id="classansys-dpf-context-1af2efd2673fef4ce34b56f85dad9d5520"></a>
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

[Context](classansys-dpf-context.md#classansys-dpf-context)



**Parameters**:

* std::string const & **setup_file** = "DpfCustomDefined.xml" 

**Return type**: [Context](classansys-dpf-context.md#classansys-dpf-context-1ae26354fe1dea7b2691e115275704278b)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::userDefinedContext"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api_base.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)