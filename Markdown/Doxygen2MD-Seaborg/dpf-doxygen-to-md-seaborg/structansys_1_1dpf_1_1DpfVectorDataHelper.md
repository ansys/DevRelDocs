<a id="structansys_1_1dpf_1_1DpfVectorDataHelper"></a>
# Structure ansys::dpf::DpfVectorDataHelper

![][C++]
![][public]

**Definition**: `dpf\_api\_base.h` (line 1148)





## Members

* [commitCharVector](structansys_1_1dpf_1_1DpfVectorDataHelper.md#structansys_1_1dpf_1_1DpfVectorDataHelper_1a4a814cbb3bf619204d823cc9c77df460)
* [deleteDpfVector](structansys_1_1dpf_1_1DpfVectorDataHelper.md#structansys_1_1dpf_1_1DpfVectorDataHelper_1a2dda91a62d7ebdd70238f9160857f088)
* [initDpfVector](structansys_1_1dpf_1_1DpfVectorDataHelper.md#structansys_1_1dpf_1_1DpfVectorDataHelper_1a8ff7a033fc497fb43a72db364ec1434a)
* [releaseCharVector](structansys_1_1dpf_1_1DpfVectorDataHelper.md#structansys_1_1dpf_1_1DpfVectorDataHelper_1acaa962e64eb410592c30e7e8a3bb567d)

## Public static functions

<a id="structansys_1_1dpf_1_1DpfVectorDataHelper_1a8ff7a033fc497fb43a72db364ec1434a"></a>
### Function initDpfVector

![][public]
![][static]

```cpp
static opaque::DpfVector* ansys::dpf::DpfVectorDataHelper::initDpfVector(opaque::DpfObject const *object=nullptr)
```







**Parameters**:

* opaque::DpfObject const * **object** = nullptr 

**Return type**: opaque::DpfVector *

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

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)