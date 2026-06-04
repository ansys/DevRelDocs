# Class sysc::Region

![][C++]
![][public]

**Definition**: `Region.hpp` (line 30)

Provide a class for a System Coupling region.

Participant can declare which regions can be used in the coupled analysis. Each region can declare its input variables and output variables. Input variables represent physical quantities whose values the participant expects System Coupling to provide. Output variables represent physical quantities whose values System Coupling expects the participant to provide.

## Members

* [addInputVariable](classsysc_1_1Region.md#classsysc_1_1Region_1a018cbfef9eee8c3d2cd3b20084783390)
* [addOutputVariable](classsysc_1_1Region.md#classsysc_1_1Region_1a96143a5b4d943e47d335d74fa1f827be)
* [getDisplayName](classsysc_1_1Region.md#classsysc_1_1Region_1a11125400c1f87ced8251759d2ff84c1b)
* [getInputVariable](classsysc_1_1Region.md#classsysc_1_1Region_1a724b202ad1c95f18e0c01e9b962c8eed)
* [getInputVariable](classsysc_1_1Region.md#classsysc_1_1Region_1a15d47e3c4989a29033ba306b186e0c50)
* [getName](classsysc_1_1Region.md#classsysc_1_1Region_1a027b247f71dca6060a9d4f8fe029b690)
* [getNumInputVariables](classsysc_1_1Region.md#classsysc_1_1Region_1ac7632c3c0b045c7baf3aef7aaa7a4c86)
* [getNumOutputVariables](classsysc_1_1Region.md#classsysc_1_1Region_1ada5d320ba7226a798ac5683fd878035a)
* [getOutputVariable](classsysc_1_1Region.md#classsysc_1_1Region_1a7ebc9675c1f8e56560409233469e4932)
* [getOutputVariable](classsysc_1_1Region.md#classsysc_1_1Region_1aabcde4869fae1d5f3bed4a4ee7277ef9)
* [getRegionDiscretizationType](classsysc_1_1Region.md#classsysc_1_1Region_1a25fc09a4236bf1cefbac4e5ff4b9736b)
* [getTopology](classsysc_1_1Region.md#classsysc_1_1Region_1a55d078aeaec8518bbe4468e41a053c1c)
* [m\_displayName](classsysc_1_1Region.md#classsysc_1_1Region_1a6460145dc80b90b3b03a82dec4638d50)
* [m\_inputVariables](classsysc_1_1Region.md#classsysc_1_1Region_1ab866ead6aac3d955ebf3027fd152c47e)
* [m\_inputVarNameToIndex](classsysc_1_1Region.md#classsysc_1_1Region_1a19c5fa5ebfd53cd8318504217e6c900d)
* [m\_name](classsysc_1_1Region.md#classsysc_1_1Region_1ae8f94bc5f16adb5d4fba2475518de0e6)
* [m\_outputVariables](classsysc_1_1Region.md#classsysc_1_1Region_1aac4f111d98926f0310b10b2df3c3d0a0)
* [m\_outputVarNameToIndex](classsysc_1_1Region.md#classsysc_1_1Region_1a8662fa2a3ac9bb2bbfb839eb03f1ee07)
* [m\_regionDiscretizationType](classsysc_1_1Region.md#classsysc_1_1Region_1aa741f70351df860fb3f833ba4988b963)
* [m\_side0Regions](classsysc_1_1Region.md#classsysc_1_1Region_1ab94aeee1a7a34bc4fb209696d9c7cfe6)
* [m\_side1Regions](classsysc_1_1Region.md#classsysc_1_1Region_1aa77c5c58939ea4870dad2306c835c98b)
* [m\_topology](classsysc_1_1Region.md#classsysc_1_1Region_1af75329d37083b141a9414d0b52947ddb)
* [Region](classsysc_1_1Region.md#classsysc_1_1Region_1a9a3643efd6eb393f07a5e0db931dc71d)
* [Region](classsysc_1_1Region.md#classsysc_1_1Region_1a2252ae93ab73cff96e3ba621d9e29171)
* [Region](classsysc_1_1Region.md#classsysc_1_1Region_1ae497ce9374217eaf46630abc28cb8ccf)
* [Region](classsysc_1_1Region.md#classsysc_1_1Region_1a1ef115d09f9dc1c7a1670727b41f9509)
* [Region](classsysc_1_1Region.md#classsysc_1_1Region_1ac7b2a140a74fb4a6b857336316b4dd48)

## Private attributes

<a id="classsysc_1_1Region_1ae8f94bc5f16adb5d4fba2475518de0e6"></a>
### Variable m\_name

![][private]

**Definition**: `Region.hpp` (line 206)

```cpp
RegionName sysc::Region::m_name
```







**Type**: [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d)

<a id="classsysc_1_1Region_1af75329d37083b141a9414d0b52947ddb"></a>
### Variable m\_topology

![][private]

**Definition**: `Region.hpp` (line 207)

```cpp
Topology sysc::Region::m_topology
```







**Type**: [Topology](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gadbbc75f28fce0c9b5b31fa64bb8b1e39)

<a id="classsysc_1_1Region_1aa741f70351df860fb3f833ba4988b963"></a>
### Variable m\_regionDiscretizationType

![][private]

**Definition**: `Region.hpp` (line 208)

```cpp
RegionDiscretizationType sysc::Region::m_regionDiscretizationType
```







**Type**: [RegionDiscretizationType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga59080d26b5838a6c678ee5f0d6ff63a4)

<a id="classsysc_1_1Region_1a6460145dc80b90b3b03a82dec4638d50"></a>
### Variable m\_displayName

![][private]

**Definition**: `Region.hpp` (line 209)

```cpp
DisplayName sysc::Region::m_displayName
```







**Type**: [DisplayName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga708d69b0e949d6a42b6a0d7885eed90f)

<a id="classsysc_1_1Region_1ab94aeee1a7a34bc4fb209696d9c7cfe6"></a>
### Variable m\_side0Regions

![][private]

**Definition**: `Region.hpp` (line 211)

```cpp
std::vector<Region> sysc::Region::m_side0Regions
```







**Type**: std::vector< [Region](classsysc_1_1Region.md#classsysc_1_1Region) >

<a id="classsysc_1_1Region_1aa77c5c58939ea4870dad2306c835c98b"></a>
### Variable m\_side1Regions

![][private]

**Definition**: `Region.hpp` (line 212)

```cpp
std::vector<Region> sysc::Region::m_side1Regions
```







**Type**: std::vector< [Region](classsysc_1_1Region.md#classsysc_1_1Region) >

<a id="classsysc_1_1Region_1ab866ead6aac3d955ebf3027fd152c47e"></a>
### Variable m\_inputVariables

![][private]

**Definition**: `Region.hpp` (line 214)

```cpp
std::vector<Variable> sysc::Region::m_inputVariables
```







**Type**: std::vector< [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable) >

<a id="classsysc_1_1Region_1a19c5fa5ebfd53cd8318504217e6c900d"></a>
### Variable m\_inputVarNameToIndex

![][private]

**Definition**: `Region.hpp` (line 215)

```cpp
std::map<VariableName, std::size_t> sysc::Region::m_inputVarNameToIndex
```







**Type**: std::map< [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266), std::size_t >

<a id="classsysc_1_1Region_1aac4f111d98926f0310b10b2df3c3d0a0"></a>
### Variable m\_outputVariables

![][private]

**Definition**: `Region.hpp` (line 217)

```cpp
std::vector<Variable> sysc::Region::m_outputVariables
```







**Type**: std::vector< [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable) >

<a id="classsysc_1_1Region_1a8662fa2a3ac9bb2bbfb839eb03f1ee07"></a>
### Variable m\_outputVarNameToIndex

![][private]

**Definition**: `Region.hpp` (line 218)

```cpp
std::map<VariableName, std::size_t> sysc::Region::m_outputVarNameToIndex
```







**Type**: std::map< [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266), std::size_t >

## Public functions

<a id="classsysc_1_1Region_1a9a3643efd6eb393f07a5e0db931dc71d"></a>
### Function Region

![][public]

```cpp
sysc::Region::Region(const RegionName &name)
```

Create region to be used in a coupled analysis.

**Parameters**:

* **name**: - Unique name for this region.

Display name will default to the same as name.





Topology will default to surface.





[Region](classsysc_1_1Region.md#classsysc_1_1Region) mesh type will default to mesh.



**Parameters**:

* const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) & **name**

**Return type**: 

<a id="classsysc_1_1Region_1a2252ae93ab73cff96e3ba621d9e29171"></a>
### Function Region

![][public]

```cpp
sysc::Region::Region(const RegionName &name, enum Topology topology)
```

Create region to be used in a coupled analysis.

**Parameters**:

* **name**: - Unique name for this region.
* **topology**: - region topology.

Display name will default to the same as name.





[Region](classsysc_1_1Region.md#classsysc_1_1Region) mesh type will default to mesh.



**Parameters**:

* const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) & **name**
* enum [Topology](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gadbbc75f28fce0c9b5b31fa64bb8b1e39) **topology**

**Return type**: 

<a id="classsysc_1_1Region_1ae497ce9374217eaf46630abc28cb8ccf"></a>
### Function Region

![][public]

```cpp
sysc::Region::Region(const RegionName &name, enum Topology topology, const DisplayName &displayName)
```

Create region to be used in a coupled analysis.

**Parameters**:

* **name**: - Unique name for this region.
* **topology**: - region topology.
* **displayName**: - region display name.

Mesh type will default to mesh.



**Parameters**:

* const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) & **name**
* enum [Topology](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gadbbc75f28fce0c9b5b31fa64bb8b1e39) **topology**
* const [DisplayName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga708d69b0e949d6a42b6a0d7885eed90f) & **displayName**

**Return type**: 

<a id="classsysc_1_1Region_1a1ef115d09f9dc1c7a1670727b41f9509"></a>
### Function Region

![][public]

```cpp
sysc::Region::Region(const RegionName &name, enum Topology topology, enum RegionDiscretizationType regionDiscretizationType)
```

Create region to be used in a coupled analysis.

**Parameters**:

* **name**: - Unique name for this region.
* **topology**: - region topology.
* **regionDiscretizationType**: - region discretization type.

Display name will default to the same as name.



**Parameters**:

* const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) & **name**
* enum [Topology](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gadbbc75f28fce0c9b5b31fa64bb8b1e39) **topology**
* enum [RegionDiscretizationType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga59080d26b5838a6c678ee5f0d6ff63a4) **regionDiscretizationType**

**Return type**: 

<a id="classsysc_1_1Region_1ac7b2a140a74fb4a6b857336316b4dd48"></a>
### Function Region

![][public]

```cpp
sysc::Region::Region(const RegionName &name, enum Topology topology, const DisplayName &displayName, enum RegionDiscretizationType regionDiscretizationType)
```

Create region to be used in a coupled analysis.

**Parameters**:

* **name**: - Unique name for this region.
* **topology**: - region topology.
* **displayName**: - region display name.
* **regionDiscretizationType**: - region mesh type.



**Parameters**:

* const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) & **name**
* enum [Topology](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gadbbc75f28fce0c9b5b31fa64bb8b1e39) **topology**
* const [DisplayName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga708d69b0e949d6a42b6a0d7885eed90f) & **displayName**
* enum [RegionDiscretizationType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga59080d26b5838a6c678ee5f0d6ff63a4) **regionDiscretizationType**

**Return type**: 

<a id="classsysc_1_1Region_1a018cbfef9eee8c3d2cd3b20084783390"></a>
### Function addInputVariable

![][public]

```cpp
void sysc::Region::addInputVariable(const Variable &variable)
```

Provide a method to add an input variable to the region.

If this variable has already been added to the region as an input variable, then this call will have no effect.





If a different variable with the same name has already been added to the region as an input variable, then a runtime error will be thrown.





If a variable with the same name has already been added to the region as an output variable, then a runtime error will be thrown.





If the variable name contains invalid characters, a runtime error will be thrown.





If the region discretization type is point cloud, then the location of the variable added to this region is insignificant.






**Parameters**:

* **variable**: [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable) whose values are provided by System Coupling and consumed by the participant.



**Parameters**:

* const [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable) & **variable**

**Return type**: void

<a id="classsysc_1_1Region_1a96143a5b4d943e47d335d74fa1f827be"></a>
### Function addOutputVariable

![][public]

```cpp
void sysc::Region::addOutputVariable(const Variable &variable)
```

Provide a method to add an output variable to the region.

If this variable has already been added to the region as an output variable, then this call will have no effect.





If a different variable with the same name has already been added to the region as an output variable, then a runtime error will be thrown.





If a variable with the same name has already been added to the region as an input variable, then a runtime error will be thrown.





If the variable name contains invalid characters, a runtime error will be thrown.





If the region discretization type is point cloud, then the location of the variable added to this region is insignificant.






**Parameters**:

* **variable**: [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable) whose values are provided by the participant and consumed by System Coupling.



**Parameters**:

* const [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable) & **variable**

**Return type**: void

<a id="classsysc_1_1Region_1a027b247f71dca6060a9d4f8fe029b690"></a>
### Function getName

![][public]
![][const]

```cpp
const RegionName& sysc::Region::getName() const noexcept
```

Get the region's name.

**Returns**:

Return value is the region's unique name (string).



**Return type**: const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &

<a id="classsysc_1_1Region_1a55d078aeaec8518bbe4468e41a053c1c"></a>
### Function getTopology

![][public]
![][const]

```cpp
Topology sysc::Region::getTopology() const noexcept
```

Get the region's topology.

**Returns**:

Return value is the topology of this region.



**Return type**: [Topology](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gadbbc75f28fce0c9b5b31fa64bb8b1e39)

<a id="classsysc_1_1Region_1a11125400c1f87ced8251759d2ff84c1b"></a>
### Function getDisplayName

![][public]
![][const]

```cpp
const DisplayName& sysc::Region::getDisplayName() const noexcept
```

Get the region's display name.

**Returns**:

Return value is the display name of this region.



**Return type**: const [DisplayName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga708d69b0e949d6a42b6a0d7885eed90f) &

<a id="classsysc_1_1Region_1a25fc09a4236bf1cefbac4e5ff4b9736b"></a>
### Function getRegionDiscretizationType

![][public]
![][const]

```cpp
RegionDiscretizationType sysc::Region::getRegionDiscretizationType() const noexcept
```

Get the region's mesh type.

**Returns**:

Return value is the mesh type of this region.



**Return type**: [RegionDiscretizationType](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga59080d26b5838a6c678ee5f0d6ff63a4)

<a id="classsysc_1_1Region_1a724b202ad1c95f18e0c01e9b962c8eed"></a>
### Function getInputVariable

![][public]
![][const]

```cpp
const Variable& sysc::Region::getInputVariable(const VariableName &name) const
```

Get the region's input variable by name.

**Parameters**:

* **name**: Name of the desired input variable.


**Returns**:

Return is the [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable) object that was requested.



**Parameters**:

* const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) & **name**

**Return type**: const [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable) &

<a id="classsysc_1_1Region_1a7ebc9675c1f8e56560409233469e4932"></a>
### Function getOutputVariable

![][public]
![][const]

```cpp
const Variable& sysc::Region::getOutputVariable(const VariableName &name) const
```

Get the region's output variable by name.

**Parameters**:

* **name**: Name of the desired output variable.


**Returns**:

Return is the [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable) object that was requested.



**Parameters**:

* const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) & **name**

**Return type**: const [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable) &

<a id="classsysc_1_1Region_1ada5d320ba7226a798ac5683fd878035a"></a>
### Function getNumOutputVariables

![][public]
![][const]

```cpp
std::size_t sysc::Region::getNumOutputVariables() const noexcept
```

Provide a method to get number of output variables for this region.





**Return type**: std::size_t

<a id="classsysc_1_1Region_1ac7632c3c0b045c7baf3aef7aaa7a4c86"></a>
### Function getNumInputVariables

![][public]
![][const]

```cpp
std::size_t sysc::Region::getNumInputVariables() const noexcept
```

Provide a method to get number of input variables for this region.





**Return type**: std::size_t

<a id="classsysc_1_1Region_1aabcde4869fae1d5f3bed4a4ee7277ef9"></a>
### Function getOutputVariable

![][public]
![][const]

```cpp
const Variable& sysc::Region::getOutputVariable(std::size_t index) const
```

Get the region's output variable by index.





**Parameters**:

* std::size_t **index**

**Return type**: const [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable) &

<a id="classsysc_1_1Region_1a15d47e3c4989a29033ba306b186e0c50"></a>
### Function getInputVariable

![][public]
![][const]

```cpp
const Variable& sysc::Region::getInputVariable(std::size_t index) const
```

Get the region's input variable by index.





**Parameters**:

* std::size_t **index**

**Return type**: const [Variable](classsysc_1_1Variable.md#classsysc_1_1Variable) &

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)