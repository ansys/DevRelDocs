# Class ansys::dpf::FieldsContainer

<a id="classansys-dpf-fieldscontainer"></a>

![][C++]
![][public]

Contains a group of fields.

[FieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer) is a group of fields, used mainly in transient, harmonic, modal or multi-steps static analysis, where we can have a field for each time step or for each frequency. Consequently the fields container can describle a complete analysis with all its details.





The fields container is designed as a set of fields ordered through labels and ids. Labels identify how the fields are filtered. The most common fields container have the label "time" with ids corresponding to each time sets, the label "complex" will allow to separate real parts (id=0) from imaginary parts (id=1) in a harmonic analysis.

**Inherits from**:

* ansys::dpf::CollectionBase

## Members

* [add](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer-1a72def09614e6d238cbb144229f1f1f5e)
* [addLabel](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a623a0b168512a4621fb7af8084f9872b)
* [addLabel](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1ac6ce7bc876d6a94a97996d5febba5116)
* [addLabels](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1ae97480559c14c59e830559582c1f2cd5)
* [at](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer-1addfee935e69fe9fb9e0e533449f9a5bc)
* [at](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer-1a475eafcf1caa61c8113d4ea4dbcaa881)
* [callAPI](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1aea34d37e0c080126eff70db34bf46597)
* [createSubFieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer-1a218a256c1ff051e4c3b9e979f1af3599)
* [deep\_copy](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer-1a7292a30f43f3d0276829f2a704569304)
* [describe](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a9977945710983bc03d2940fa007847b2)
* [empty](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a39cd546c42518e2332be8f287db95459)
* [emptyFieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer-1af4bcbf19662088a80192c4306e76eab9)
* [FieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer-1af6a2e4828fd3c8447c0bad7c985b31a0)
* [FieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer-1acf61fba680e2cf1bfeefc199751fc8aa)
* [FieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer-1ac721796f129c6e8986be8ce5977eefcc)
* [FieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer-1a8f56a88941a626857bb11528368f08e6)
* [FieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer-1a22e1ed19ab76ad96df74d2084c9ea4f4)
* [FieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer-1a85f22edc2a63a092cf00e9fc839a28e6)
* [FieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer-1abedc3efe1ad10ebdb110da6561a858e8)
* [getClient](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1a968afd9daa0b0f13b65a2ac61369d73a)
* [getField](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer-1aeb12b6212b016653f1eb325f19a9d1ce)
* [getFields](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer-1aaa1bd58f282cf7e3bebb1fd1cfe6adbc)
* [getFieldsForTimeId](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer-1a45536132d19f7a61af3ff18e660ad8de)
* [getFieldsIndeces](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer-1a3a8ce9d9bf9a5ad8e4e3efb22d224cef)
* [getLabelSpace](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a66d62492d07889a95a5d10f9d827cd11)
* [getMatchingField](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer-1a5122abf49c4bab17a4f7350abd5b53bb)
* [getMatchingFieldIndices](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer-1aaeedf76765d3269c083354a462fc7340)
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
* [operator=](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer-1a8c309f116e976d6270f9e7ccbc320fad)
* [operator=](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer-1ae1fc1fa17432b002face34b00493093e)
* [operator[]](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer-1aea6b234cdf457204b5fa9c8e62c7b691)
* [reserve](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a98ab98c9a6b91b886fd600ed7d9e633b)
* [resize](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1ac88664d3e1d22abb74a95c8223b1e771)
* [setId](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a93ebbfe9396dd1c4f447e799db6cbf3b)
* [setName](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a44394f964c6130dcbaed446cec3b0197)
* [setSupport](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1ae6f7683496d153ed944856d42b97dc82)
* [setSupport](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1ada2a037068417557fd7d410577a7fbb9)
* [size](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a69e6878d2d691807f8a45ddfbda42f9e)
* [support](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a9830a03b992af391bf03acad90eac372)
* [update](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer-1a9f0704e94d480481e50abd20df33317c)
* [~CollectionBase](classansys-dpf-collectionbase.md#classansys-dpf-collectionbase-1a99e04439d35f26b89f4d66813d74035b)
* [~DpfTypes](classansys-dpf-dpftypes.md#classansys-dpf-dpftypes-1ab7c83b6ea160c2b115e056f6c312112f)
* [~FieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer-1a784977bc0973ea5711aaf7e3dbddbb5d)

## Friends

## Public functions

<a id="classansys-dpf-fieldscontainer-1af6a2e4828fd3c8447c0bad7c985b31a0"></a>
### Function FieldsContainer

![][public]


```cpp
ansys::dpf::FieldsContainer::FieldsContainer()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldsContainer::FieldsContainer"}]}`
-->

<a id="classansys-dpf-fieldscontainer-1acf61fba680e2cf1bfeefc199751fc8aa"></a>
### Function FieldsContainer

![][public]


```cpp
ansys::dpf::FieldsContainer::FieldsContainer(Client const *const client)
```




Create a new fields container on a server.



**Parameters**:

* [Client](classansys-dpf-client.md#classansys-dpf-client) const *const **client**: [in] [Client](classansys-dpf-client.md#classansys-dpf-client) instance designating the IP, port and protocol to use.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldsContainer::FieldsContainer"}]}`
-->

<a id="classansys-dpf-fieldscontainer-1ac721796f129c6e8986be8ce5977eefcc"></a>
### Function FieldsContainer

![][public]


```cpp
ansys::dpf::FieldsContainer::FieldsContainer(Client const *const client, std::vector< std::string > const &labels)
```




Create a collection of fields with the given labels on a server.



**Parameters**:

* [Client](classansys-dpf-client.md#classansys-dpf-client) const *const **client**: [in] [Client](classansys-dpf-client.md#classansys-dpf-client) instance designating the IP, port and protocol to use.
* std::vector< std::string > const & **labels**: [in] Labels for fields.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldsContainer::FieldsContainer"}]}`
-->

<a id="classansys-dpf-fieldscontainer-1a8f56a88941a626857bb11528368f08e6"></a>
### Function FieldsContainer

![][public]


```cpp
ansys::dpf::FieldsContainer::FieldsContainer(int id, Client const *const client)
```




Retrieve an existing instance of [FieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer) on a server.



**Parameters**:

* int **id**: [in] Id of the [FieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer) object on the server's database.
* [Client](classansys-dpf-client.md#classansys-dpf-client) const *const **client**: [in] [Client](classansys-dpf-client.md#classansys-dpf-client) instance designating the IP, port and protocol to use.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldsContainer::FieldsContainer"}]}`
-->

<a id="classansys-dpf-fieldscontainer-1a22e1ed19ab76ad96df74d2084c9ea4f4"></a>
### Function FieldsContainer

![][public]


```cpp
ansys::dpf::FieldsContainer::FieldsContainer(const std::vector< std::string > &labels)
```




Create a collection of fields with the given labels.



**Parameters**:

* const std::vector< std::string > & **labels**: [in] Labels for fields.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldsContainer::FieldsContainer"}]}`
-->

<a id="classansys-dpf-fieldscontainer-1a784977bc0973ea5711aaf7e3dbddbb5d"></a>
### Function ~FieldsContainer

![][public]


```cpp
virtual ansys::dpf::FieldsContainer::~FieldsContainer()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldsContainer::~FieldsContainer"}]}`
-->

<a id="classansys-dpf-fieldscontainer-1a85f22edc2a63a092cf00e9fc839a28e6"></a>
### Function FieldsContainer

![][public]


```cpp
ansys::dpf::FieldsContainer::FieldsContainer(FieldsContainer const &)
```








**Parameters**:

* FieldsContainer const &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldsContainer::FieldsContainer"}]}`
-->

<a id="classansys-dpf-fieldscontainer-1abedc3efe1ad10ebdb110da6561a858e8"></a>
### Function FieldsContainer

![][public]


```cpp
ansys::dpf::FieldsContainer::FieldsContainer(FieldsContainer &&) noexcept
```








**Parameters**:

* FieldsContainer &&

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldsContainer::FieldsContainer"}]}`
-->

<a id="classansys-dpf-fieldscontainer-1a8c309f116e976d6270f9e7ccbc320fad"></a>
### Function operator=

![][public]


```cpp
FieldsContainer & ansys::dpf::FieldsContainer::operator=(FieldsContainer const &)
```








**Parameters**:

* FieldsContainer const &

**Return type**: FieldsContainer &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldsContainer::operator="}]}`
-->

<a id="classansys-dpf-fieldscontainer-1ae1fc1fa17432b002face34b00493093e"></a>
### Function operator=

![][public]


```cpp
FieldsContainer & ansys::dpf::FieldsContainer::operator=(FieldsContainer &&) noexcept
```








**Parameters**:

* FieldsContainer &&

**Return type**: FieldsContainer &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldsContainer::operator="}]}`
-->

<a id="classansys-dpf-fieldscontainer-1aea6b234cdf457204b5fa9c8e62c7b691"></a>
### Function operator[]

![][public]


```cpp
Field ansys::dpf::FieldsContainer::operator[](dp_int index)
```




Get field at index. 
**Returns**:

[Field](classansys-dpf-field.md#classansys-dpf-field) given by index.



**Parameters**:

* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **index**: [in] Index of field within container.

**Return type**: [Field](classansys-dpf-field.md#classansys-dpf-field)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldsContainer::operator[]"}]}`
-->

<a id="classansys-dpf-fieldscontainer-1addfee935e69fe9fb9e0e533449f9a5bc"></a>
### Function at

![][public]


```cpp
Field ansys::dpf::FieldsContainer::at(dp_index index)
```




Get field at index. 
**Returns**:

[Field](classansys-dpf-field.md#classansys-dpf-field) given by index.



**Parameters**:

* [dp\_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920) **index**: [in] Index of field within container.

**Return type**: [Field](classansys-dpf-field.md#classansys-dpf-field)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldsContainer::at"}]}`
-->

<a id="classansys-dpf-fieldscontainer-1a475eafcf1caa61c8113d4ea4dbcaa881"></a>
### Function at

![][public]
![][const]


```cpp
const Field ansys::dpf::FieldsContainer::at(dp_index index) const
```




Get field at index. 
**Returns**:

[Field](classansys-dpf-field.md#classansys-dpf-field) given by index.



**Parameters**:

* [dp\_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920) **index**: [in] Index of field.

**Return type**: const [Field](classansys-dpf-field.md#classansys-dpf-field)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldsContainer::at"}]}`
-->

<a id="classansys-dpf-fieldscontainer-1a9f0704e94d480481e50abd20df33317c"></a>
### Function update

![][public]


```cpp
void ansys::dpf::FieldsContainer::update(Field &f, dp_index index)
```




Update [Field](classansys-dpf-field.md#classansys-dpf-field) at index



**Parameters**:

* [Field](classansys-dpf-field.md#classansys-dpf-field) & **f**: [in] New field data.
* [dp\_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920) **index**: [in] Index of field within container.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldsContainer::update"}]}`
-->

<a id="classansys-dpf-fieldscontainer-1a72def09614e6d238cbb144229f1f1f5e"></a>
### Function add

![][public]


```cpp
void ansys::dpf::FieldsContainer::add(LabelSpace const &lab_space, Field const &f, bool can_replace=true)
```




Add [Field](classansys-dpf-field.md#classansys-dpf-field) to [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace).



**Parameters**:

* [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) const & **lab_space**: [in] [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) to which to add [Field](classansys-dpf-field.md#classansys-dpf-field).
* [Field](classansys-dpf-field.md#classansys-dpf-field) const & **f**: [in] [Field](classansys-dpf-field.md#classansys-dpf-field) to add to [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace).
* bool **can_replace** = true : [in] if can_replace is false, then, the entity is pushed back without checking if the label space already exists.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldsContainer::add"}]}`
-->

<a id="classansys-dpf-fieldscontainer-1aaa1bd58f282cf7e3bebb1fd1cfe6adbc"></a>
### Function getFields

![][public]
![][const]


```cpp
std::vector< Field > ansys::dpf::FieldsContainer::getFields(LabelSpace const &lab_space) const
```




**Returns**:

Fields given by [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace)



**Parameters**:

* [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) const & **lab_space**: [in] [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) for which to get fields.

**Return type**: std::vector< [Field](classansys-dpf-field.md#classansys-dpf-field) >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldsContainer::getFields"}]}`
-->

<a id="classansys-dpf-fieldscontainer-1aeb12b6212b016653f1eb325f19a9d1ce"></a>
### Function getField

![][public]
![][const]


```cpp
Field ansys::dpf::FieldsContainer::getField(LabelSpace const &lab_space) const
```




**Returns**:

First [Field](classansys-dpf-field.md#classansys-dpf-field) given by [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace)



**Parameters**:

* [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) const & **lab_space**: [in] [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) for which to get field.

**Return type**: [Field](classansys-dpf-field.md#classansys-dpf-field)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldsContainer::getField"}]}`
-->

<a id="classansys-dpf-fieldscontainer-1a3a8ce9d9bf9a5ad8e4e3efb22d224cef"></a>
### Function getFieldsIndeces

![][public]
![][const]


```cpp
std::vector< int > ansys::dpf::FieldsContainer::getFieldsIndeces(LabelSpace const &lab_space) const
```




**Returns**:

[Field](classansys-dpf-field.md#classansys-dpf-field) indices for field given by [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace)



**Parameters**:

* [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) const & **lab_space**: [in] [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) defining field for which to get indices.

**Return type**: std::vector< int >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldsContainer::getFieldsIndeces"}]}`
-->

<a id="classansys-dpf-fieldscontainer-1a5122abf49c4bab17a4f7350abd5b53bb"></a>
### Function getMatchingField

![][public]
![][const]


```cpp
Field ansys::dpf::FieldsContainer::getMatchingField(LabelSpace const &label_space) const
```




**Returns**:

First matching [Field](classansys-dpf-field.md#classansys-dpf-field) for given label space.



**Parameters**:

* [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) const & **label_space**: [in] [Label](structansys-dpf-label.md#structansys-dpf-label) space for which to get [Any](classansys-dpf-any.md#classansys-dpf-any).

**Return type**: [Field](classansys-dpf-field.md#classansys-dpf-field)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldsContainer::getMatchingField"}]}`
-->

<a id="classansys-dpf-fieldscontainer-1aaeedf76765d3269c083354a462fc7340"></a>
### Function getMatchingFieldIndices

![][public]
![][const]


```cpp
DpfVector< dp_index > ansys::dpf::FieldsContainer::getMatchingFieldIndices(LabelSpace const &label_space) const
```




**Returns**:

Vector of matching [Field](classansys-dpf-field.md#classansys-dpf-field) to the given label space.



**Parameters**:

* [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) const & **label_space**: [in] [Label](structansys-dpf-label.md#structansys-dpf-label) space for which to get entries.

**Return type**: [DpfVector](classansys-dpf-dpfvector.md#classansys-dpf-dpfvector)< [dp\_index](namespaceansys-dpf.md#namespaceansys-dpf-1a417548d1b705a9ba54ba9429afe68920) >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldsContainer::getMatchingFieldIndices"}]}`
-->

<a id="classansys-dpf-fieldscontainer-1a45536132d19f7a61af3ff18e660ad8de"></a>
### Function getFieldsForTimeId

![][public]
![][const]


```cpp
std::vector< Field > ansys::dpf::FieldsContainer::getFieldsForTimeId(dp_int time_id, dp_int complex_id=0) const
```




**Returns**:

Real or imaginary (by default real) Fields at given time set.



**Parameters**:

* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **time_id**: [in] Time Set Id (1 to # of time sets).
* [dp\_int](namespaceansys-dpf.md#namespaceansys-dpf-1a60d181a1f9d29cc7cc38b25dac4401f0) **complex_id** = 0 : [in] Flag indicating to return imaginary part of result (0 = real part, 1 = imaginary part).

**Return type**: std::vector< [Field](classansys-dpf-field.md#classansys-dpf-field) >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldsContainer::getFieldsForTimeId"}]}`
-->

<a id="classansys-dpf-fieldscontainer-1a218a256c1ff051e4c3b9e979f1af3599"></a>
### Function createSubFieldsContainer

![][public]
![][const]


```cpp
FieldsContainer ansys::dpf::FieldsContainer::createSubFieldsContainer(LabelSpace const &lab_space) const
```




Create a new fields container with all the fields corresponding to the label space in input. 
**Returns**:

Created fields container.



**Parameters**:

* [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) const & **lab_space**: [in] [LabelSpace](classansys-dpf-labelspace.md#classansys-dpf-labelspace) from which to get fields.

**Return type**: FieldsContainer

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldsContainer::createSubFieldsContainer"}]}`
-->

<a id="classansys-dpf-fieldscontainer-1a7292a30f43f3d0276829f2a704569304"></a>
### Function deep\_copy

![][public]
![][const]


```cpp
FieldsContainer ansys::dpf::FieldsContainer::deep_copy(ansys::dpf::Client const *const client=nullptr) const
```




Create a new [FieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer) on a server by copying all the data of this [FieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer).



**Parameters**:

* [ansys::dpf::Client](classansys-dpf-client.md#classansys-dpf-client) const *const **client** = nullptr : [in] [Client](classansys-dpf-client.md#classansys-dpf-client) instance designating the IP, port and protocol to use.

**Return type**: FieldsContainer

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldsContainer::deep_copy"}]}`
-->

## Public static functions

<a id="classansys-dpf-fieldscontainer-1af4bcbf19662088a80192c4306e76eab9"></a>
### Function emptyFieldsContainer

![][public]
![][static]


```cpp
static FieldsContainer ansys::dpf::FieldsContainer::emptyFieldsContainer()
```




Create an empty fields container. 
**Returns**:

Empty [FieldsContainer](classansys-dpf-fieldscontainer.md#classansys-dpf-fieldscontainer).



**Return type**: FieldsContainer

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::FieldsContainer::emptyFieldsContainer"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)