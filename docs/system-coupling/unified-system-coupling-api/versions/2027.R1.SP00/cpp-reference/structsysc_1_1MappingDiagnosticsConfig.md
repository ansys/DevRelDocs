# Structure sysc::MappingDiagnosticsConfig

![][C++]
![][public]

**Definition**: `MappingDiagnosticsConfig.hpp` (line 19)

Structure to hold mapping diagnostics settings.

The name conventions for the diagnostics variable are as follows: MappedNode_<interfaceName>_<targetVariableName> for nodes and MappedElement_<interfaceName>_<targetVariableName> for elements.

## Members

* [enableDiagnostics](structsysc_1_1MappingDiagnosticsConfig.md#structsysc_1_1MappingDiagnosticsConfig_1ad72489d3a716a3a069525755a855c520)
* [generateElemsDiagnostics](structsysc_1_1MappingDiagnosticsConfig.md#structsysc_1_1MappingDiagnosticsConfig_1acb8887b835cc5b98b8c7f21597952d99)
* [generateNodesDiagnostics](structsysc_1_1MappingDiagnosticsConfig.md#structsysc_1_1MappingDiagnosticsConfig_1ae0d517c783d39cd93a53181ffdf54a87)
* [getMappedDiagnosticVariableName](structsysc_1_1MappingDiagnosticsConfig.md#structsysc_1_1MappingDiagnosticsConfig_1a2d26da338783eb1c07d957cf0415bbbf)

## Public attributes

<a id="structsysc_1_1MappingDiagnosticsConfig_1ad72489d3a716a3a069525755a855c520"></a>
### Variable enableDiagnostics

![][public]

**Definition**: `MappingDiagnosticsConfig.hpp` (line 38)


```cpp
bool sysc::MappingDiagnosticsConfig::enableDiagnostics {false}
```


Flag to enable mapping diagnostics.





**Type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::MappingDiagnosticsConfig::enableDiagnostics"}]}`
-->

<a id="structsysc_1_1MappingDiagnosticsConfig_1ae0d517c783d39cd93a53181ffdf54a87"></a>
### Variable generateNodesDiagnostics

![][public]

**Definition**: `MappingDiagnosticsConfig.hpp` (line 39)


```cpp
bool sysc::MappingDiagnosticsConfig::generateNodesDiagnostics {false}
```


Flag to enable diagnostics for mapped nodes.





**Type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::MappingDiagnosticsConfig::generateNodesDiagnostics"}]}`
-->

<a id="structsysc_1_1MappingDiagnosticsConfig_1acb8887b835cc5b98b8c7f21597952d99"></a>
### Variable generateElemsDiagnostics

![][public]

**Definition**: `MappingDiagnosticsConfig.hpp` (line 40)


```cpp
bool sysc::MappingDiagnosticsConfig::generateElemsDiagnostics {false}
```


Flag to enable diagnostics for mapped elements.





**Type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::MappingDiagnosticsConfig::generateElemsDiagnostics"}]}`
-->

## Public functions

<a id="structsysc_1_1MappingDiagnosticsConfig_1a2d26da338783eb1c07d957cf0415bbbf"></a>
### Function getMappedDiagnosticVariableName

![][public]
![][const]


```cpp
std::string sysc::MappingDiagnosticsConfig::getMappedDiagnosticVariableName(const std::string &interfaceName, const std::string &targetVariableName, Location location) const
```








**Parameters**:

* const std::string & **interfaceName**
* const std::string & **targetVariableName**
* [Location](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gaced2664a481a6250f46140266dd38c2a) **location**

**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"sysc::MappingDiagnosticsConfig::getMappedDiagnosticVariableName"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)