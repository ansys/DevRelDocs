# Class ansys::dpf::CollectionBase

<a id="classansys-dpf-collectionbase"></a>

![][C++]
![][public]





**Inherits from**:

* [ansys::dpf::DpfTypes](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes)

**Inherited by**:

* [ansys::dpf::Collection\< DataT \>](classansys-dpf-collection.md#classansys-dpf-collection)
* [ansys::dpf::CustomTypeFieldsContainer](classansys-dpf-customtypefieldscontainer.md#classansys-dpf-customtypefieldscontainer)
* [ansys::dpf::FieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer)
* [ansys::dpf::MeshesContainer](classansys-dpf-meshescontainer.md#classansys-dpf-meshescontainer)
* [ansys::dpf::ScopingsContainer](classansys-dpf-scopingscontainer.md#classansys-dpf-scopingscontainer)

## Members

* [addLabel](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a623a0b168512a4621fb7af8084f9872b)
* [addLabel](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1ac6ce7bc876d6a94a97996d5febba5116)
* [addLabels](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1ae97480559c14c59e830559582c1f2cd5)
* [callAPI](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1aea34d37e0c080126eff70db34bf46597)
* [describe](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a9977945710983bc03d2940fa007847b2)
* [empty](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a39cd546c42518e2332be8f287db95459)
* [getClient](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a968afd9daa0b0f13b65a2ac61369d73a)
* [getLabelSpace](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a66d62492d07889a95a5d10f9d827cd11)
* [getSizeFor](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1aab65999d65acb4eab6aa7375266e5456)
* [hasBeenMovedLocally](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a1a5634202c15404b6b24e8f50e51cb66)
* [hasInternalObject](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1ae198f89868d85c7db6dc1a934a1d3c15)
* [hasLabel](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a82ac9433fd3963b37b07989ef05de331)
* [id](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a5e8d2dd8b9b6cf273985ce3ead392830)
* [isOnCommonAPI](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a9f9789ff61cc9d400a2a344830706b73)
* [isSameObject](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1aa64d5f8fcd7d85ad6ebf708494dbefd7)
* [labels](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a2c1bb3718e1a96d3f40b64794eb25f91)
* [labelScoping](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1ac61aef82ffe249c95dd10cf40de7c910)
* [name](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a691450ab7c89db80f39d6bb2d10eace4)
* [reserve](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a98ab98c9a6b91b886fd600ed7d9e633b)
* [resize](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1ac88664d3e1d22abb74a95c8223b1e771)
* [setId](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a93ebbfe9396dd1c4f447e799db6cbf3b)
* [setName](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a44394f964c6130dcbaed446cec3b0197)
* [setSupport](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1ae6f7683496d153ed944856d42b97dc82)
* [setSupport](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1ada2a037068417557fd7d410577a7fbb9)
* [size](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a69e6878d2d691807f8a45ddfbda42f9e)
* [support](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a9830a03b992af391bf03acad90eac372)
* [~CollectionBase](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a99e04439d35f26b89f4d66813d74035b)
* [~DpfTypes](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1ab7c83b6ea160c2b115e056f6c312112f)

## Friends

<a id="classansys-dpf-collectionbase-1ab2e4916b9d046a72d197238993a71433"></a>
### Friend internal::set\_prop

![][C++]
![][public]







<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename T"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename isBaseOfDpfTypes"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"typename isBaseOfCustomContainerBase"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"struct"}]}`
* `definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend struct internal::set_prop"}]}`
* `argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CollectionBase::set_prop"}]}`
* `param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"internal::set_prop"}]},{"type":"text","text":"\n        "}]}`
-->

## Public functions

<a id="classansys-dpf-collectionbase-1a99e04439d35f26b89f4d66813d74035b"></a>
### Function ~CollectionBase

![][public]


```cpp
virtual ansys::dpf::CollectionBase::~CollectionBase()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CollectionBase::~CollectionBase"}]}`
-->

<a id="classansys-dpf-collectionbase-1a69e6878d2d691807f8a45ddfbda42f9e"></a>
### Function size

![][public]
![][const]


```cpp
dp_int ansys::dpf::CollectionBase::size() const
```




Get Number of entries in container. 
**Returns**:

Number of entries.



**Return type**: [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CollectionBase::size"}]}`
-->

<a id="classansys-dpf-collectionbase-1a98ab98c9a6b91b886fd600ed7d9e633b"></a>
### Function reserve

![][public]


```cpp
void ansys::dpf::CollectionBase::reserve(dp_int size)
```




Reserve space for entries



**Parameters**:

* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **size**: [in] Number of entries for which to reserve space.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CollectionBase::reserve"}]}`
-->

<a id="classansys-dpf-collectionbase-1ac88664d3e1d22abb74a95c8223b1e771"></a>
### Function resize

![][public]


```cpp
void ansys::dpf::CollectionBase::resize(dp_int size)
```




Resize container to given size.



**Parameters**:

* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **size**: [in] Set container to number of entries.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CollectionBase::resize"}]}`
-->

<a id="classansys-dpf-collectionbase-1a623a0b168512a4621fb7af8084f9872b"></a>
### Function addLabel

![][public]


```cpp
void ansys::dpf::CollectionBase::addLabel(std::string const &label)
```




Add new label to field.



**Parameters**:

* std::string const & **label**: [in] New label.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CollectionBase::addLabel"}]}`
-->

<a id="classansys-dpf-collectionbase-1ac6ce7bc876d6a94a97996d5febba5116"></a>
### Function addLabel

![][public]


```cpp
void ansys::dpf::CollectionBase::addLabel(std::string const &label, dp_id default_value)
```




Add new label with value.



**Parameters**:

* std::string const & **label**: [in] New label.
* [dp\_id](namespaceansys-dpf.md#namespaceansys-dpf-1ab4574c9af3f2bb8011da7d1f4c8da20e) **default_value**: [in] Value of label.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CollectionBase::addLabel"}]}`
-->

<a id="classansys-dpf-collectionbase-1ae97480559c14c59e830559582c1f2cd5"></a>
### Function addLabels

![][public]


```cpp
void ansys::dpf::CollectionBase::addLabels(std::vector< std::string > const &labels)
```




Add vector of labels to field.



**Parameters**:

* std::vector< std::string > const & **labels**: [in] Vector of labels to add.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CollectionBase::addLabels"}]}`
-->

<a id="classansys-dpf-collectionbase-1aab65999d65acb4eab6aa7375266e5456"></a>
### Function getSizeFor

![][public]
![][const]


```cpp
dp_int ansys::dpf::CollectionBase::getSizeFor(LabelSpace const &lab_space) const
```




**Returns**:

Number of entries for given [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace).



**Parameters**:

* [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) const & **lab_space**: [in] [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) for which to get number of entries.

**Return type**: [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CollectionBase::getSizeFor"}]}`
-->

<a id="classansys-dpf-collectionbase-1a2c1bb3718e1a96d3f40b64794eb25f91"></a>
### Function labels

![][public]
![][const]


```cpp
std::vector< std::string > ansys::dpf::CollectionBase::labels() const
```




**Returns**:

Vector of labels of entries container.



**Return type**: std::vector< std::string >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CollectionBase::labels"}]}`
-->

<a id="classansys-dpf-collectionbase-1a66d62492d07889a95a5d10f9d827cd11"></a>
### Function getLabelSpace

![][public]
![][const]


```cpp
LabelSpace ansys::dpf::CollectionBase::getLabelSpace(dp_index index) const
```




**Returns**:

[LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) for given field index.



**Parameters**:

* [dp\_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920) **index**: [in] Index of field.

**Return type**: [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CollectionBase::getLabelSpace"}]}`
-->

<a id="classansys-dpf-collectionbase-1ac61aef82ffe249c95dd10cf40de7c910"></a>
### Function labelScoping

![][public]
![][const]


```cpp
Scoping ansys::dpf::CollectionBase::labelScoping(std::string const &label) const
```




**Returns**:

[Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping) for field given by label.



**Parameters**:

* std::string const & **label**: [in] [Field](classansys-dpf-field.md#classansys-dpf-field) for which to get scoping.

**Return type**: [Scoping](classansys-dpf-scoping.md#classansys-dpf-scoping)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CollectionBase::labelScoping"}]}`
-->

<a id="classansys-dpf-collectionbase-1a82ac9433fd3963b37b07989ef05de331"></a>
### Function hasLabel

![][public]
![][const]


```cpp
bool ansys::dpf::CollectionBase::hasLabel(std::string const &label) const
```




**Returns**:

Indication that CollectionBase has field given by label.



**Parameters**:

* std::string const & **label**: [in] [Field](classansys-dpf-field.md#classansys-dpf-field) label.

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CollectionBase::hasLabel"}]}`
-->

<a id="classansys-dpf-collectionbase-1a9830a03b992af391bf03acad90eac372"></a>
### Function support

![][public]
![][const]


```cpp
Support ansys::dpf::CollectionBase::support(std::string const &label=labels::time) const
```




**Returns**:

[Support](classansys-dpf-support.md#classansys-dpf-support) for given label.



**Parameters**:

* std::string const & **label** = [labels::time](structansys-dpf-labels.md#structansys-dpf-labels-1a22ee1a5e3be8ad98c20c5ca52e247914) : [in] [Label](structansys-dpf-label.md#structansys-dpf-label) for which to get [Support](classansys-dpf-support.md#classansys-dpf-support).

**Return type**: [Support](classansys-dpf-support.md#classansys-dpf-support)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CollectionBase::support"}]}`
-->

<a id="classansys-dpf-collectionbase-1ae6f7683496d153ed944856d42b97dc82"></a>
### Function setSupport

![][public]


```cpp
void ansys::dpf::CollectionBase::setSupport(ansys::dpf::Support const &support, std::string const &label=labels::time)
```




Set [Support](classansys-dpf-support.md#classansys-dpf-support) for given label.



**Parameters**:

* [ansys::dpf::Support](classansys-dpf-support.md#classansys-dpf-support) const & **support**: [in] [Support](classansys-dpf-support.md#classansys-dpf-support) value.
* std::string const & **label** = [labels::time](structansys-dpf-labels.md#structansys-dpf-labels-1a22ee1a5e3be8ad98c20c5ca52e247914) : [in] [Label](structansys-dpf-label.md#structansys-dpf-label) for which to set support.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CollectionBase::setSupport"}]}`
-->

<a id="classansys-dpf-collectionbase-1ada2a037068417557fd7d410577a7fbb9"></a>
### Function setSupport

![][public]


```cpp
void ansys::dpf::CollectionBase::setSupport(ansys::dpf::TimeFreqSupport const &support, std::string const &label=labels::time)
```




Set [TimeFreqSupport](classansys-dpf-timefreqsupport.md#classansys-dpf-timefreqsupport) for given label.



**Parameters**:

* [ansys::dpf::TimeFreqSupport](classansys-dpf-timefreqsupport.md#classansys-dpf-timefreqsupport) const & **support**: [in] [Support](classansys-dpf-support.md#classansys-dpf-support) value.
* std::string const & **label** = [labels::time](structansys-dpf-labels.md#structansys-dpf-labels-1a22ee1a5e3be8ad98c20c5ca52e247914) : [in] [Label](structansys-dpf-label.md#structansys-dpf-label) for which to set support.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CollectionBase::setSupport"}]}`
-->

<a id="classansys-dpf-collectionbase-1a691450ab7c89db80f39d6bb2d10eace4"></a>
### Function name

![][public]
![][const]


```cpp
std::string ansys::dpf::CollectionBase::name() const
```




**Returns**:

Name of CollectionBase.



**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CollectionBase::name"}]}`
-->

<a id="classansys-dpf-collectionbase-1a44394f964c6130dcbaed446cec3b0197"></a>
### Function setName

![][public]


```cpp
void ansys::dpf::CollectionBase::setName(std::string const &name)
```




Set name of CollectionBase.



**Parameters**:

* std::string const & **name**: [in] New name.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CollectionBase::setName"}]}`
-->

<a id="classansys-dpf-collectionbase-1a5e8d2dd8b9b6cf273985ce3ead392830"></a>
### Function id

![][public]
![][const]


```cpp
dp_id ansys::dpf::CollectionBase::id() const
```




**Returns**:

Id of CollectionBase.



**Return type**: [dp\_id](namespaceansys-dpf.md#namespaceansys-dpf-1ab4574c9af3f2bb8011da7d1f4c8da20e)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CollectionBase::id"}]}`
-->

<a id="classansys-dpf-collectionbase-1a93ebbfe9396dd1c4f447e799db6cbf3b"></a>
### Function setId

![][public]


```cpp
void ansys::dpf::CollectionBase::setId(dp_id id)
```




Set Id of CollectionBase.



**Parameters**:

* [dp\_id](namespaceansys-dpf.md#namespaceansys-dpf-1ab4574c9af3f2bb8011da7d1f4c8da20e) **id**: [in] New id.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::CollectionBase::setId"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)