<a id="classansys_1_1dpf_1_1WorkflowStep"></a>
# Class ansys::dpf::WorkflowStep

![][C++]
![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 5642)





## Members

* [\_data](classansys_1_1dpf_1_1WorkflowStep.md#classansys_1_1dpf_1_1WorkflowStep_1ac0a7bd013a5230b049573cfaa8d2c1e3)
* [get](classansys_1_1dpf_1_1WorkflowStep.md#classansys_1_1dpf_1_1WorkflowStep_1a89cfcb8795b8cfbf1050a20c3af16c81)
* [getOperatorIds](classansys_1_1dpf_1_1WorkflowStep.md#classansys_1_1dpf_1_1WorkflowStep_1a79fdd5d6be1d5b5409b01dbf77a18b00)
* [size](classansys_1_1dpf_1_1WorkflowStep.md#classansys_1_1dpf_1_1WorkflowStep_1a78ba80973788621ef27f4e00787870be)
* [WorkflowStep](classansys_1_1dpf_1_1WorkflowStep.md#classansys_1_1dpf_1_1WorkflowStep_1acfde4ebb904fc8b665294dd3cc1c95e4)
* [WorkflowStep](classansys_1_1dpf_1_1WorkflowStep.md#classansys_1_1dpf_1_1WorkflowStep_1ac894460c996de745e94c8ce11fd2274f)

## Private attributes

<a id="classansys_1_1dpf_1_1WorkflowStep_1ac0a7bd013a5230b049573cfaa8d2c1e3"></a>
### Variable \_data

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 5653)


```cpp
DataTree ansys::dpf::WorkflowStep::_data
```








**Type**: [DataTree](classansys_1_1dpf_1_1DataTree.md#classansys_1_1dpf_1_1DataTree)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::WorkflowStep::_data"}]}`
-->

## Public functions

<a id="classansys_1_1dpf_1_1WorkflowStep_1acfde4ebb904fc8b665294dd3cc1c95e4"></a>
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

<a id="classansys_1_1dpf_1_1WorkflowStep_1ac894460c996de745e94c8ce11fd2274f"></a>
### Function WorkflowStep

![][public]


```cpp
ansys::dpf::WorkflowStep::WorkflowStep(const std::vector< int > &ids)
```








**Parameters**:

* const std::vector< int > & **ids**

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::WorkflowStep::WorkflowStep"}]}`
-->

<a id="classansys_1_1dpf_1_1WorkflowStep_1a78ba80973788621ef27f4e00787870be"></a>
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

<a id="classansys_1_1dpf_1_1WorkflowStep_1a79fdd5d6be1d5b5409b01dbf77a18b00"></a>
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

<a id="classansys_1_1dpf_1_1WorkflowStep_1a89cfcb8795b8cfbf1050a20c3af16c81"></a>
### Function get

![][public]
![][const]


```cpp
const DataTree & ansys::dpf::WorkflowStep::get() const
```








**Return type**: const [DataTree](classansys_1_1dpf_1_1DataTree.md#classansys_1_1dpf_1_1DataTree) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::WorkflowStep::get"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)