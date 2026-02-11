<a id="structansys_1_1dpf_1_1DpfVectorDataHelper"></a>
# Structure ansys::dpf::DpfVectorDataHelper

![][C++]
![][public]

**Definition**: `dpf\_api\_base.h` (line 1228)





## Members

* [commitCharVector](structansys_1_1dpf_1_1DpfVectorDataHelper.md#structansys_1_1dpf_1_1DpfVectorDataHelper_1a4a814cbb3bf619204d823cc9c77df460)
* [deleteDpfVector](structansys_1_1dpf_1_1DpfVectorDataHelper.md#structansys_1_1dpf_1_1DpfVectorDataHelper_1a2dda91a62d7ebdd70238f9160857f088)
* [duplicateDpfVector](structansys_1_1dpf_1_1DpfVectorDataHelper.md#structansys_1_1dpf_1_1DpfVectorDataHelper_1a11b0dff203b2e45b623bce7abfa41f36)
* [initDpfVector](structansys_1_1dpf_1_1DpfVectorDataHelper.md#structansys_1_1dpf_1_1DpfVectorDataHelper_1a54b88c7a2dbce9e6f4097bfa1d8b80ae)
* [releaseCharVector](structansys_1_1dpf_1_1DpfVectorDataHelper.md#structansys_1_1dpf_1_1DpfVectorDataHelper_1acaa962e64eb410592c30e7e8a3bb567d)
* [setAsSubVecCharVector](structansys_1_1dpf_1_1DpfVectorDataHelper.md#structansys_1_1dpf_1_1DpfVectorDataHelper_1a75f98e11123d2f3c2cafd95e1baa4792)

## Public static functions

<a id="structansys_1_1dpf_1_1DpfVectorDataHelper_1a54b88c7a2dbce9e6f4097bfa1d8b80ae"></a>
### Function initDpfVector

![][public]
![][static]


```cpp
static opaque::DpfVector * ansys::dpf::DpfVectorDataHelper::initDpfVector(opaque::DpfObject const *object=nullptr)
```








**Parameters**:

* opaque::DpfObject const * **object** = nullptr 

**Return type**: opaque::DpfVector *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVectorDataHelper::initDpfVector"}]}`
-->

<a id="structansys_1_1dpf_1_1DpfVectorDataHelper_1a11b0dff203b2e45b623bce7abfa41f36"></a>
### Function duplicateDpfVector

![][public]
![][static]


```cpp
static opaque::DpfVector * ansys::dpf::DpfVectorDataHelper::duplicateDpfVector(opaque::DpfVector *)
```








**Parameters**:

* opaque::DpfVector *

**Return type**: opaque::DpfVector *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVectorDataHelper::duplicateDpfVector"}]}`
-->

<a id="structansys_1_1dpf_1_1DpfVectorDataHelper_1a2dda91a62d7ebdd70238f9160857f088"></a>
### Function deleteDpfVector

![][public]
![][static]


```cpp
static void ansys::dpf::DpfVectorDataHelper::deleteDpfVector(opaque::DpfVector *vector)
```








**Parameters**:

* opaque::DpfVector * **vector**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVectorDataHelper::deleteDpfVector"}]}`
-->

<a id="structansys_1_1dpf_1_1DpfVectorDataHelper_1acaa962e64eb410592c30e7e8a3bb567d"></a>
### Function releaseCharVector

![][public]
![][static]


```cpp
static void ansys::dpf::DpfVectorDataHelper::releaseCharVector(opaque::DpfVector *vector, char *data, dp_int size, bool modified)
```








**Parameters**:

* opaque::DpfVector * **vector**
* char * **data**
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **size**
* bool **modified**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVectorDataHelper::releaseCharVector"}]}`
-->

<a id="structansys_1_1dpf_1_1DpfVectorDataHelper_1a4a814cbb3bf619204d823cc9c77df460"></a>
### Function commitCharVector

![][public]
![][static]


```cpp
static void ansys::dpf::DpfVectorDataHelper::commitCharVector(opaque::DpfVector *vector, char *data, dp_int size, bool modified)
```








**Parameters**:

* opaque::DpfVector * **vector**
* char * **data**
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **size**
* bool **modified**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVectorDataHelper::commitCharVector"}]}`
-->

<a id="structansys_1_1dpf_1_1DpfVectorDataHelper_1a75f98e11123d2f3c2cafd95e1baa4792"></a>
### Function setAsSubVecCharVector

![][public]
![][static]


```cpp
static void ansys::dpf::DpfVectorDataHelper::setAsSubVecCharVector(opaque::DpfVector *vector, char *data, dp_int size, opaque::DpfVector *vector_out, dp_int starting_index, dp_int size_out, char **dataout)
```








**Parameters**:

* opaque::DpfVector * **vector**
* char * **data**
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **size**
* opaque::DpfVector * **vector_out**
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **starting_index**
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **size_out**
* char ** **dataout**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVectorDataHelper::setAsSubVecCharVector"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)