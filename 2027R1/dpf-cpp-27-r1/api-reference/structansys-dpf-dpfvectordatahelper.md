<a id="structansys-dpf-dpfvectordatahelper"></a>
# Structure ansys::dpf::DpfVectorDataHelper

![][C++]
![][public]





## Members

* [commitCharVector](structansys-dpf-dpfvectordatahelper.md#structansys-dpf-dpfvectordatahelper-1a4a814cbb3bf619204d823cc9c77df460)
* [deleteDpfVector](structansys-dpf-dpfvectordatahelper.md#structansys-dpf-dpfvectordatahelper-1a2dda91a62d7ebdd70238f9160857f088)
* [duplicateDpfVector](structansys-dpf-dpfvectordatahelper.md#structansys-dpf-dpfvectordatahelper-1a11b0dff203b2e45b623bce7abfa41f36)
* [initDpfVector](structansys-dpf-dpfvectordatahelper.md#structansys-dpf-dpfvectordatahelper-1a54b88c7a2dbce9e6f4097bfa1d8b80ae)
* [releaseCharVector](structansys-dpf-dpfvectordatahelper.md#structansys-dpf-dpfvectordatahelper-1acaa962e64eb410592c30e7e8a3bb567d)
* [setAsSubVecCharVector](structansys-dpf-dpfvectordatahelper.md#structansys-dpf-dpfvectordatahelper-1a75f98e11123d2f3c2cafd95e1baa4792)

## Public static functions

<a id="structansys-dpf-dpfvectordatahelper-1a54b88c7a2dbce9e6f4097bfa1d8b80ae"></a>
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

<a id="structansys-dpf-dpfvectordatahelper-1a11b0dff203b2e45b623bce7abfa41f36"></a>
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

<a id="structansys-dpf-dpfvectordatahelper-1a2dda91a62d7ebdd70238f9160857f088"></a>
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

<a id="structansys-dpf-dpfvectordatahelper-1acaa962e64eb410592c30e7e8a3bb567d"></a>
### Function releaseCharVector

![][public]
![][static]


```cpp
static void ansys::dpf::DpfVectorDataHelper::releaseCharVector(opaque::DpfVector *vector, char *data, dp_int size, bool modified)
```








**Parameters**:

* opaque::DpfVector * **vector**
* char * **data**
* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **size**
* bool **modified**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVectorDataHelper::releaseCharVector"}]}`
-->

<a id="structansys-dpf-dpfvectordatahelper-1a4a814cbb3bf619204d823cc9c77df460"></a>
### Function commitCharVector

![][public]
![][static]


```cpp
static void ansys::dpf::DpfVectorDataHelper::commitCharVector(opaque::DpfVector *vector, char *data, dp_int size, bool modified)
```








**Parameters**:

* opaque::DpfVector * **vector**
* char * **data**
* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **size**
* bool **modified**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVectorDataHelper::commitCharVector"}]}`
-->

<a id="structansys-dpf-dpfvectordatahelper-1a75f98e11123d2f3c2cafd95e1baa4792"></a>
### Function setAsSubVecCharVector

![][public]
![][static]


```cpp
static void ansys::dpf::DpfVectorDataHelper::setAsSubVecCharVector(opaque::DpfVector *vector, char *data, dp_int size, opaque::DpfVector *vector_out, dp_int starting_index, dp_int size_out, char **dataout)
```








**Parameters**:

* opaque::DpfVector * **vector**
* char * **data**
* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **size**
* opaque::DpfVector * **vector_out**
* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **starting_index**
* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **size_out**
* char ** **dataout**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::DpfVectorDataHelper::setAsSubVecCharVector"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)