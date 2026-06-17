# Class ansys::dpf::WorkflowStep

<a id="classansys-dpf-workflowstep"></a>

![][C++]
![][public]





## Members

* [cachePriority](classansys-dpf-workflowstep.md#classansys-dpf-workflowstep-1a67520fc69913abb475f04d03d98a1be7)
* [get](classansys-dpf-workflowstep.md#classansys-dpf-workflowstep-1a89cfcb8795b8cfbf1050a20c3af16c81)
* [getOperatorIds](classansys-dpf-workflowstep.md#classansys-dpf-workflowstep-1a79fdd5d6be1d5b5409b01dbf77a18b00)
* [size](classansys-dpf-workflowstep.md#classansys-dpf-workflowstep-1a78ba80973788621ef27f4e00787870be)
* [WorkflowStep](classansys-dpf-workflowstep.md#classansys-dpf-workflowstep-1acfde4ebb904fc8b665294dd3cc1c95e4)
* [WorkflowStep](classansys-dpf-workflowstep.md#classansys-dpf-workflowstep-1a6926c176f689a2052f5e194613b7fbf6)

## Public functions

<a id="classansys-dpf-workflowstep-1acfde4ebb904fc8b665294dd3cc1c95e4"></a>
### Function WorkflowStep

![][public]


```cpp
ansys::dpf::WorkflowStep::WorkflowStep()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::WorkflowStep::WorkflowStep"}]}`
-->

<a id="classansys-dpf-workflowstep-1a6926c176f689a2052f5e194613b7fbf6"></a>
### Function WorkflowStep

![][public]


```cpp
ansys::dpf::WorkflowStep::WorkflowStep(const std::vector< int > &ids, int cachePriority=0)
```








**Parameters**:

* const std::vector< int > & **ids**
* int **cachePriority** = 0 

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::WorkflowStep::WorkflowStep"}]}`
-->

<a id="classansys-dpf-workflowstep-1a78ba80973788621ef27f4e00787870be"></a>
### Function size

![][public]
![][const]


```cpp
std::size_t ansys::dpf::WorkflowStep::size() const
```








**Return type**: std::size_t

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::WorkflowStep::size"}]}`
-->

<a id="classansys-dpf-workflowstep-1a79fdd5d6be1d5b5409b01dbf77a18b00"></a>
### Function getOperatorIds

![][public]
![][const]


```cpp
std::vector< int > ansys::dpf::WorkflowStep::getOperatorIds() const
```








**Return type**: std::vector< int >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::WorkflowStep::getOperatorIds"}]}`
-->

<a id="classansys-dpf-workflowstep-1a67520fc69913abb475f04d03d98a1be7"></a>
### Function cachePriority

![][public]
![][const]


```cpp
int ansys::dpf::WorkflowStep::cachePriority() const
```








**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::WorkflowStep::cachePriority"}]}`
-->

<a id="classansys-dpf-workflowstep-1a89cfcb8795b8cfbf1050a20c3af16c81"></a>
### Function get

![][public]
![][const]


```cpp
const DataTree & ansys::dpf::WorkflowStep::get() const
```








**Return type**: const [DataTree](classansys-dpf-datatree.md#classansys-dpf-datatree) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::WorkflowStep::get"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)