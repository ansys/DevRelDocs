<a id="classansys_1_1dpf_1_1Model"></a>
# Class ansys::dpf::Model

![][C++]
![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/helpers/dpf\_model.h` (line 13)



Encapsulation of mesh and results.

## Members

* [\_mesh\_provider](classansys_1_1dpf_1_1Model.md#classansys_1_1dpf_1_1Model_1af8652d1dd32a25aad602e81843468406)
* [\_result\_info\_provider](classansys_1_1dpf_1_1Model.md#classansys_1_1dpf_1_1Model_1afcffdbf193e399515d7eff47ef843fdc)
* [\_stream\_provider](classansys_1_1dpf_1_1Model.md#classansys_1_1dpf_1_1Model_1ae90dbe5c46a52291be19abe233a47b29)
* [\_timefreq\_support\_provider](classansys_1_1dpf_1_1Model.md#classansys_1_1dpf_1_1Model_1ac29412aa2ec099e774ae0b3c09e405a5)
* [CreateMeshQuery](classansys_1_1dpf_1_1Model.md#classansys_1_1dpf_1_1Model_1aa7b9083700bfa4fe6fae6b08c878eebc)
* [CreateResultEvaluationWorkflow](classansys_1_1dpf_1_1Model.md#classansys_1_1dpf_1_1Model_1a34060c2b318e850b8b468b9e4371e651)
* [CreateResultEvaluationWorkflow](classansys_1_1dpf_1_1Model.md#classansys_1_1dpf_1_1Model_1a346a4ed1937d88f3b094041d51b68b13)
* [getMesh](classansys_1_1dpf_1_1Model.md#classansys_1_1dpf_1_1Model_1a48c91a341bc268e48fe4efd1e8c8cb0f)
* [getMeshesContainer](classansys_1_1dpf_1_1Model.md#classansys_1_1dpf_1_1Model_1abadaeac1d698448632bc92df349f0ed9)
* [getResultInfo](classansys_1_1dpf_1_1Model.md#classansys_1_1dpf_1_1Model_1a4c81175ac5b1652728ceb587b414857e)
* [getTimeFreqSupport](classansys_1_1dpf_1_1Model.md#classansys_1_1dpf_1_1Model_1a431d3eb5237f3b5f9f99631c259c53d2)
* [init](classansys_1_1dpf_1_1Model.md#classansys_1_1dpf_1_1Model_1a535757503fa7263d0a4995bb86d69216)
* [Model](classansys_1_1dpf_1_1Model.md#classansys_1_1dpf_1_1Model_1a76d48e79b13741b01c3e0bb37ea56cc1)
* [Model](classansys_1_1dpf_1_1Model.md#classansys_1_1dpf_1_1Model_1aa7d8460544b5133e3d144a72f4f8d78b)
* [ReleaseHandles](classansys_1_1dpf_1_1Model.md#classansys_1_1dpf_1_1Model_1ac6d249ff396b756eb860b1ea46dc2fa1)
* [~Model](classansys_1_1dpf_1_1Model.md#classansys_1_1dpf_1_1Model_1a6d0f6e29b54a53f4e9c856da139fae8d)

## Private attributes

<a id="classansys_1_1dpf_1_1Model_1af8652d1dd32a25aad602e81843468406"></a>
### Variable \_mesh\_provider

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/helpers/dpf\_model.h` (line 82)


```cpp
Operator ansys::dpf::Model::_mesh_provider
```








**Type**: [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Model::_mesh_provider"}]}`
-->

<a id="classansys_1_1dpf_1_1Model_1ac29412aa2ec099e774ae0b3c09e405a5"></a>
### Variable \_timefreq\_support\_provider

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/helpers/dpf\_model.h` (line 83)


```cpp
Operator ansys::dpf::Model::_timefreq_support_provider
```








**Type**: [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Model::_timefreq_support_provider"}]}`
-->

<a id="classansys_1_1dpf_1_1Model_1ae90dbe5c46a52291be19abe233a47b29"></a>
### Variable \_stream\_provider

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/helpers/dpf\_model.h` (line 84)


```cpp
Operator ansys::dpf::Model::_stream_provider
```








**Type**: [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Model::_stream_provider"}]}`
-->

<a id="classansys_1_1dpf_1_1Model_1afcffdbf193e399515d7eff47ef843fdc"></a>
### Variable \_result\_info\_provider

![][private]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/helpers/dpf\_model.h` (line 85)


```cpp
Operator ansys::dpf::Model::_result_info_provider
```








**Type**: [Operator](classansys_1_1dpf_1_1Operator.md#classansys_1_1dpf_1_1Operator)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Model::_result_info_provider"}]}`
-->

## Public functions

<a id="classansys_1_1dpf_1_1Model_1a6d0f6e29b54a53f4e9c856da139fae8d"></a>
### Function ~Model

![][public]


```cpp
virtual ansys::dpf::Model::~Model()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Model::~Model"}]}`
-->

<a id="classansys_1_1dpf_1_1Model_1a76d48e79b13741b01c3e0bb37ea56cc1"></a>
### Function Model

![][public]


```cpp
ansys::dpf::Model::Model(const std::string &filePath)
```




Create model from given file.



**Parameters**:

* const std::string & **filePath**: @ [in] File from which to create model.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Model::Model"}]}`
-->

<a id="classansys_1_1dpf_1_1Model_1aa7d8460544b5133e3d144a72f4f8d78b"></a>
### Function Model

![][public]


```cpp
ansys::dpf::Model::Model(const DataSources &data_sources)
```




Create model from given data sources.



**Parameters**:

* const [DataSources](classansys_1_1dpf_1_1DataSources.md#classansys_1_1dpf_1_1DataSources) & **data_sources**: [in] Data sources from which to create model.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Model::Model"}]}`
-->

<a id="classansys_1_1dpf_1_1Model_1a48c91a341bc268e48fe4efd1e8c8cb0f"></a>
### Function getMesh

![][public]


```cpp
MeshedRegion ansys::dpf::Model::getMesh(int timestep=0)
```




**Returns**:

Meshed region for given timestep.



**Parameters**:

* int **timestep** = 0 : [in] Optional timestep for which to get meshed region.

**Return type**: [MeshedRegion](classansys_1_1dpf_1_1MeshedRegion.md#classansys_1_1dpf_1_1MeshedRegion)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Model::getMesh"}]}`
-->

<a id="classansys_1_1dpf_1_1Model_1abadaeac1d698448632bc92df349f0ed9"></a>
### Function getMeshesContainer

![][public]


```cpp
MeshesContainer ansys::dpf::Model::getMeshesContainer()
```




**Returns**:

Meshes container for model.



**Return type**: [MeshesContainer](classansys_1_1dpf_1_1MeshesContainer.md#classansys_1_1dpf_1_1MeshesContainer)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Model::getMeshesContainer"}]}`
-->

<a id="classansys_1_1dpf_1_1Model_1a431d3eb5237f3b5f9f99631c259c53d2"></a>
### Function getTimeFreqSupport

![][public]


```cpp
TimeFreqSupport ansys::dpf::Model::getTimeFreqSupport()
```




Retrieves the time/freq support to have access to the analysis domain (number times steps/frequences, correspending times/frequences/ harmonic indices, rpms) 
**Returns**:

Time frequency support for model.



**Return type**: [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Model::getTimeFreqSupport"}]}`
-->

<a id="classansys_1_1dpf_1_1Model_1a4c81175ac5b1652728ceb587b414857e"></a>
### Function getResultInfo

![][public]


```cpp
ResultInfo ansys::dpf::Model::getResultInfo()
```




[Result](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result) Info allows to access to:
* available results

* unit

* analysis type

* physics type








**Returns**:

[Result](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result) info for model.



**Return type**: [ResultInfo](classansys_1_1dpf_1_1ResultInfo.md#classansys_1_1dpf_1_1ResultInfo)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Model::getResultInfo"}]}`
-->

<a id="classansys_1_1dpf_1_1Model_1a34060c2b318e850b8b468b9e4371e651"></a>
### Function CreateResultEvaluationWorkflow

![][public]


```cpp
Result ansys::dpf::Model::CreateResultEvaluationWorkflow(const char *res_name, Scoping meshScoping=Scoping(), Location requested_location=Location(), int cs_id=0)
```




**Returns**:

[Result](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result) for given result name.



**Parameters**:

* const char * **res_name**: [in] Result name for which to get Result.
* [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) **meshScoping** = [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)() : [in] Scoping of mesh elements or nodes.
* [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location) **requested_location** = [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location)() : [in] Location of evaluated result (nodal, elemental, or elemental_nodal).
* int **cs_id** = 0 : [in] Not used.

**Return type**: [Result](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Model::CreateResultEvaluationWorkflow"}]}`
-->

<a id="classansys_1_1dpf_1_1Model_1a346a4ed1937d88f3b094041d51b68b13"></a>
### Function CreateResultEvaluationWorkflow

![][public]


```cpp
Result ansys::dpf::Model::CreateResultEvaluationWorkflow(const char *res_name, const char *named_selection, Location requested_location=Location(), bool bInclusive=true, int cs_id=0)
```




**Returns**:

[Result](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result) for given result name and named_selection of mesh.



**Parameters**:

* const char * **res_name**: [in] Result name for which to get Result.
* const char * **named_selection**: [in] Name of selected region in mesh. For MAPDL, names are capitalized.
* [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location) **requested_location** = [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location)() : [in] Location of evaluated result (nodal, elemental, or elemental_nodal).
* bool **bInclusive** = true : [in] When named_selection is a nodal region and requested_location is elemental, true indicates take elements with all nodes in region.
* int **cs_id** = 0 : If false, take elements with at least 1 node in region. [in] Not used.

**Return type**: [Result](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Model::CreateResultEvaluationWorkflow"}]}`
-->

<a id="classansys_1_1dpf_1_1Model_1aa7b9083700bfa4fe6fae6b08c878eebc"></a>
### Function CreateMeshQuery

![][public]


```cpp
MeshQuery ansys::dpf::Model::CreateMeshQuery()
```




**Returns**:

[MeshQuery](classansys_1_1dpf_1_1MeshQuery.md#classansys_1_1dpf_1_1MeshQuery).



**Return type**: [MeshQuery](classansys_1_1dpf_1_1MeshQuery.md#classansys_1_1dpf_1_1MeshQuery)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Model::CreateMeshQuery"}]}`
-->

<a id="classansys_1_1dpf_1_1Model_1ac6d249ff396b756eb860b1ea46dc2fa1"></a>
### Function ReleaseHandles

![][public]


```cpp
void ansys::dpf::Model::ReleaseHandles()
```


Closes the files that were kept open to retrieve data.





**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Model::ReleaseHandles"}]}`
-->

## Private functions

<a id="classansys_1_1dpf_1_1Model_1a535757503fa7263d0a4995bb86d69216"></a>
### Function init

![][private]


```cpp
void ansys::dpf::Model::init(const DataSources &data_sources)
```








**Parameters**:

* const [DataSources](classansys_1_1dpf_1_1DataSources.md#classansys_1_1dpf_1_1DataSources) & **data_sources**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Model::init"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_model.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)