# Class ansys::dpf::Model

<a id="classansys-dpf-model"></a>

![][C++]
![][public]



Encapsulation of mesh and results.

## Members

* [CreateMeshQuery](classansys-dpf-model.md#classansys-dpf-model-1aa7b9083700bfa4fe6fae6b08c878eebc)
* [CreateResultEvaluationWorkflow](classansys-dpf-model.md#classansys-dpf-model-1a34060c2b318e850b8b468b9e4371e651)
* [CreateResultEvaluationWorkflow](classansys-dpf-model.md#classansys-dpf-model-1a346a4ed1937d88f3b094041d51b68b13)
* [getMesh](classansys-dpf-model.md#classansys-dpf-model-1a48c91a341bc268e48fe4efd1e8c8cb0f)
* [getMeshesContainer](classansys-dpf-model.md#classansys-dpf-model-1abadaeac1d698448632bc92df349f0ed9)
* [getResultInfo](classansys-dpf-model.md#classansys-dpf-model-1a4c81175ac5b1652728ceb587b414857e)
* [getTimeFreqSupport](classansys-dpf-model.md#classansys-dpf-model-1a431d3eb5237f3b5f9f99631c259c53d2)
* [Model](classansys-dpf-model.md#classansys-dpf-model-1a76d48e79b13741b01c3e0bb37ea56cc1)
* [Model](classansys-dpf-model.md#classansys-dpf-model-1aa7d8460544b5133e3d144a72f4f8d78b)
* [ReleaseHandles](classansys-dpf-model.md#classansys-dpf-model-1ac6d249ff396b756eb860b1ea46dc2fa1)
* [~Model](classansys-dpf-model.md#classansys-dpf-model-1a6d0f6e29b54a53f4e9c856da139fae8d)

## Public functions

<a id="classansys-dpf-model-1a6d0f6e29b54a53f4e9c856da139fae8d"></a>
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

<a id="classansys-dpf-model-1a76d48e79b13741b01c3e0bb37ea56cc1"></a>
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

<a id="classansys-dpf-model-1aa7d8460544b5133e3d144a72f4f8d78b"></a>
### Function Model

![][public]


```cpp
ansys::dpf::Model::Model(const DataSources &data_sources)
```




Create model from given data sources.



**Parameters**:

* const [DataSources](classansys-dpf-datasources.md#classansys-dpf-datasources) & **data_sources**: [in] Data sources from which to create model.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Model::Model"}]}`
-->

<a id="classansys-dpf-model-1a48c91a341bc268e48fe4efd1e8c8cb0f"></a>
### Function getMesh

![][public]


```cpp
MeshedRegion ansys::dpf::Model::getMesh(int timestep=0)
```




**Returns**:

Meshed region for given timestep.



**Parameters**:

* int **timestep** = 0 : [in] Optional timestep for which to get meshed region.

**Return type**: [MeshedRegion](classansys-dpf-meshedregion.md#classansys-dpf-meshedregion)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Model::getMesh"}]}`
-->

<a id="classansys-dpf-model-1abadaeac1d698448632bc92df349f0ed9"></a>
### Function getMeshesContainer

![][public]


```cpp
MeshesContainer ansys::dpf::Model::getMeshesContainer()
```




**Returns**:

Meshes container for model.



**Return type**: [MeshesContainer](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Model::getMeshesContainer"}]}`
-->

<a id="classansys-dpf-model-1a431d3eb5237f3b5f9f99631c259c53d2"></a>
### Function getTimeFreqSupport

![][public]


```cpp
TimeFreqSupport ansys::dpf::Model::getTimeFreqSupport()
```




Retrieves the time/freq support to have access to the analysis domain (number times steps/frequences, correspending times/frequences/ harmonic indices, rpms) 
**Returns**:

Time frequency support for model.



**Return type**: [TimeFreqSupport](classansys-dpf-timefreqsupport.md#classansys-dpf-timefreqsupport)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Model::getTimeFreqSupport"}]}`
-->

<a id="classansys-dpf-model-1a4c81175ac5b1652728ceb587b414857e"></a>
### Function getResultInfo

![][public]


```cpp
ResultInfo ansys::dpf::Model::getResultInfo()
```




[Result](classansys-dpf-result.md#classansys-dpf-result) Info allows to access to:
* available results

* unit

* analysis type

* physics type








**Returns**:

[Result](classansys-dpf-result.md#classansys-dpf-result) info for model.



**Return type**: [ResultInfo](classansys-dpf-resultinfo.md#classansys-dpf-resultinfo)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Model::getResultInfo"}]}`
-->

<a id="classansys-dpf-model-1a34060c2b318e850b8b468b9e4371e651"></a>
### Function CreateResultEvaluationWorkflow

![][public]


```cpp
Result ansys::dpf::Model::CreateResultEvaluationWorkflow(const char *res_name, Scoping meshScoping=Scoping(), Location requested_location=Location(), int cs_id=0)
```




**Returns**:

[Result](classansys-dpf-result.md#classansys-dpf-result) for given result name.



**Parameters**:

* const char * **res_name**: [in] Result name for which to get Result.
* [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) **meshScoping** = [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)() : [in] Scoping of mesh elements or nodes.
* [Location](structansys-dpf-location.md#structansys-dpf-location) **requested_location** = [Location](structansys-dpf-location.md#structansys-dpf-location)() : [in] Location of evaluated result (nodal, elemental, or elemental_nodal).
* int **cs_id** = 0 : [in] Not used.

**Return type**: [Result](classansys-dpf-result.md#classansys-dpf-result)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Model::CreateResultEvaluationWorkflow"}]}`
-->

<a id="classansys-dpf-model-1a346a4ed1937d88f3b094041d51b68b13"></a>
### Function CreateResultEvaluationWorkflow

![][public]


```cpp
Result ansys::dpf::Model::CreateResultEvaluationWorkflow(const char *res_name, const char *named_selection, Location requested_location=Location(), bool bInclusive=true, int cs_id=0)
```




**Returns**:

[Result](classansys-dpf-result.md#classansys-dpf-result) for given result name and named_selection of mesh.



**Parameters**:

* const char * **res_name**: [in] Result name for which to get Result.
* const char * **named_selection**: [in] Name of selected region in mesh. For MAPDL, names are capitalized.
* [Location](structansys-dpf-location.md#structansys-dpf-location) **requested_location** = [Location](structansys-dpf-location.md#structansys-dpf-location)() : [in] Location of evaluated result (nodal, elemental, or elemental_nodal).
* bool **bInclusive** = true : [in] When named_selection is a nodal region and requested_location is elemental, true indicates take elements with all nodes in region.
* int **cs_id** = 0 : If false, take elements with at least 1 node in region. [in] Not used.

**Return type**: [Result](classansys-dpf-result.md#classansys-dpf-result)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Model::CreateResultEvaluationWorkflow"}]}`
-->

<a id="classansys-dpf-model-1aa7b9083700bfa4fe6fae6b08c878eebc"></a>
### Function CreateMeshQuery

![][public]


```cpp
MeshQuery ansys::dpf::Model::CreateMeshQuery()
```




**Returns**:

[MeshQuery](classansys-dpf-meshquery.md#classansys-dpf-meshquery).



**Return type**: [MeshQuery](classansys-dpf-meshquery.md#classansys-dpf-meshquery)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Model::CreateMeshQuery"}]}`
-->

<a id="classansys-dpf-model-1ac6d249ff396b756eb860b1ea46dc2fa1"></a>
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

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_model.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)