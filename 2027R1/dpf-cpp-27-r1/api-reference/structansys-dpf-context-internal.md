<a id="structansys_1_1dpf_1_1Context_1_1internal"></a>
# Structure ansys::dpf::Context::internal

![][C++]
![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api\_base.h` (line 1860)





## Members

* [contextToDataTree](structansys_1_1dpf_1_1Context_1_1internal.md#structansys_1_1dpf_1_1Context_1_1internal_1a66bc5304c6c05f5d54a2dc3a83815626)
* [getAPIVersion](structansys_1_1dpf_1_1Context_1_1internal.md#structansys_1_1dpf_1_1Context_1_1internal_1ac3e28262cfa961c2d354169056226ef1)

## Public static functions

<a id="structansys_1_1dpf_1_1Context_1_1internal_1ac3e28262cfa961c2d354169056226ef1"></a>
### Function getAPIVersion

![][public]
![][static]


```cpp
static int ansys::dpf::Context::internal::getAPIVersion(Context const &context)
```








**Parameters**:

* [Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1ae26354fe1dea7b2691e115275704278b) const & **context**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::internal::getAPIVersion"}]}`
-->

<a id="structansys_1_1dpf_1_1Context_1_1internal_1a66bc5304c6c05f5d54a2dc3a83815626"></a>
### Function contextToDataTree

![][public]
![][static]


```cpp
static DataTree ansys::dpf::Context::internal::contextToDataTree(Context const &context, Client const *const client=nullptr)
```








**Parameters**:

* [Context](classansys_1_1dpf_1_1Context.md#classansys_1_1dpf_1_1Context_1ae26354fe1dea7b2691e115275704278b) const & **context**
* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client** = nullptr 

**Return type**: [DataTree](classansys_1_1dpf_1_1DataTree.md#classansys_1_1dpf_1_1DataTree)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Context::internal::contextToDataTree"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)