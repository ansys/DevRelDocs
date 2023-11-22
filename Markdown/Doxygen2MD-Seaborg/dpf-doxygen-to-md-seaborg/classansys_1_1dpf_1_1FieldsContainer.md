<a id="classansys_1_1dpf_1_1FieldsContainer"></a>
# Class ansys::dpf::FieldsContainer

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 1565)

Contains a group of fields.

[FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer) is a group of fields, used mainly in transient, harmonic, modal or multi-steps static analysis, where we can have a field for each time step or for each frequency. Consequently the fields container can describle a complete analysis with all its details.





The fields container is designed as a set of fields ordered through labels and ids. Labels identify how the fields are filtered. The most common fields container have the label "time" with ids corresponding to each time sets, the label "complex" will allow to separate real parts (id=0) from imaginary parts (id=1) in a harmonic analysis. 

**See also**: [Using collections and labels](group__group__12.md#group__group__12)

**Inherits from**:

* [ansys::dpf::DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes)

## Members

* [add](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1a0c6bd75cbd78e7a25784ccc4a9f609d5)
* [addLabel](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1aa9912d3ca0991feecc57765ec816505a)
* [addLabel](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1a1d5a4855c67db5f95789024142140a1f)
* [addLabels](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1a9e099c6e48bb4786e95168f1e69a635f)
* [at](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1addfee935e69fe9fb9e0e533449f9a5bc)
* [at](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1a475eafcf1caa61c8113d4ea4dbcaa881)
* [callAPI](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a1ef954a45b178eac4de68813168db6fb)
* [createSubFieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1a218a256c1ff051e4c3b9e979f1af3599)
* [deep\_copy](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1a7292a30f43f3d0276829f2a704569304)
* [describe](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a9977945710983bc03d2940fa007847b2)
* [empty](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a39cd546c42518e2332be8f287db95459)
* [emptyFieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1af4bcbf19662088a80192c4306e76eab9)
* [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1a6e2dbd7ed3c00c205066d33c96c3cc4d)
* [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1af6a2e4828fd3c8447c0bad7c985b31a0)
* [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1acf61fba680e2cf1bfeefc199751fc8aa)
* [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1ac721796f129c6e8986be8ce5977eefcc)
* [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1a8f56a88941a626857bb11528368f08e6)
* [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1a22e1ed19ab76ad96df74d2084c9ea4f4)
* [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1a85f22edc2a63a092cf00e9fc839a28e6)
* [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1ad5ccfb39967a33d0dc8eeba9283516dd)
* [getClient](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a968afd9daa0b0f13b65a2ac61369d73a)
* [getField](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1aeb12b6212b016653f1eb325f19a9d1ce)
* [getFields](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1a72e507d5933e2469405243ddcb8f0f58)
* [getFieldsForTimeId](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1a8507e8f2014f975ed140ebee1d18d18c)
* [getFieldsIndeces](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1a3e5c7a3eec4268f88a3568b6035b93be)
* [getLabelSpace](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1add7a3418e9a0efb753d0c48d0359a261)
* [getSizeFor](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1a8daf89e0cf634d805ab5d476c20fd608)
* [hasBeenMovedLocally](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a1a5634202c15404b6b24e8f50e51cb66)
* [hasLabel](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1ac73c0843a3b6ed0604428a21a9be416f)
* [id](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1a3e262e4f6ade30a6a42198a117839751)
* [isOnCommonAPI](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1a9f9789ff61cc9d400a2a344830706b73)
* [isSameObject](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1aa64d5f8fcd7d85ad6ebf708494dbefd7)
* [labels](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1a5eb5ee414b37c1f49f30bb240a648a87)
* [labelScoping](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1afd031defd3088051030347232478ee35)
* [name](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1a760ef1dc58e7a70fe2b7367f552f7cef)
* [operator=](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1a92bb968272f8ff43248b2ee84cdcbf83)
* [operator=](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1ae2f60f8cbdfae4491703b72052e0d3b4)
* [operator[]](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1aea6b234cdf457204b5fa9c8e62c7b691)
* [reserve](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1a83521da3efc008468f37f05153691696)
* [resize](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1a5790b17b68590cdecccc9642df172d39)
* [setId](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1a18bc8706153e4f3bd44c1a0476fa40e2)
* [setLabels](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1a6a0b5c5fa59ff9247f3e298116a89b21)
* [setName](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1ad1a087694be9c5bed7a8f2b5d16b89b8)
* [setSupport](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1afdd882211d61a75c92fbc18a9e813113)
* [setSupport](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1a12fb445a1e6ec8e1dc05e2463fb17641)
* [size](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1a0f93949d1256055fd0a85a70cd62aab4)
* [support](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1ab7f848fe1501deb9257a041f1fac0b44)
* [update](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1a9f0704e94d480481e50abd20df33317c)
* [~DpfTypes](classansys_1_1dpf_1_1DpfTypes.md#classansys_1_1dpf_1_1DpfTypes_1ab7c83b6ea160c2b115e056f6c312112f)
* [~FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer_1a784977bc0973ea5711aaf7e3dbddbb5d)

## Friends

<a id="classansys_1_1dpf_1_1FieldsContainer_1a33ff3f826991522d2e77c1c523f33e19"></a>
### Friend Operator

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 1567)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Operator"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1Operator"},"children":[{"type":"text","text":"Operator"}]}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1FieldsContainer_1afa07847c7cb432b260e61a0c18025ba3"></a>
### Friend Workflow

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 1568)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Workflow"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1Workflow"},"children":[{"type":"text","text":"Workflow"}]}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1FieldsContainer_1a81d95df60edf516a1de9878b780f8fb3"></a>
### Friend OperatorMain

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 1569)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class OperatorMain"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1OperatorMain"},"children":[{"type":"text","text":"OperatorMain"}]}]},{"type":"text","text":"\n        "}]}

<a id="classansys_1_1dpf_1_1FieldsContainer_1a9820c685b67a3355c042bb0b3365d9e2"></a>
### Friend Any

![][C++]
![][private]

**Definition**: `dpf\_api.h` (line 1570)







**TODO**:

* type {"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class"}]}
* definition {"type":"element","name":"definition","attributes":{},"children":[{"type":"text","text":"friend class Any"}]}
* argsstring {"type":"element","name":"argsstring","attributes":{},"children":[]}
* param {"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"type","attributes":{},"children":[{"type":"element","name":"ref","attributes":{"kindref":"compound","refid":"classansys_1_1dpf_1_1Any"},"children":[{"type":"text","text":"Any"}]}]},{"type":"text","text":"\n        "}]}

## Private functions

<a id="classansys_1_1dpf_1_1FieldsContainer_1a6e2dbd7ed3c00c205066d33c96c3cc4d"></a>
### Function FieldsContainer

![][private]

```cpp
ansys::dpf::FieldsContainer::FieldsContainer(opaque::DpfInternalSharedObject *)
```







**Parameters**:

* opaque::DpfInternalSharedObject *

**Return type**: 

<a id="classansys_1_1dpf_1_1FieldsContainer_1a6a0b5c5fa59ff9247f3e298116a89b21"></a>
### Function setLabels

![][private]

```cpp
void ansys::dpf::FieldsContainer::setLabels(const std::vector< std::string > &)
```







**Parameters**:

* const std::vector< std::string > &

**Return type**: void

## Public functions

<a id="classansys_1_1dpf_1_1FieldsContainer_1af6a2e4828fd3c8447c0bad7c985b31a0"></a>
### Function FieldsContainer

![][public]

```cpp
ansys::dpf::FieldsContainer::FieldsContainer()
```







**Return type**: 

<a id="classansys_1_1dpf_1_1FieldsContainer_1acf61fba680e2cf1bfeefc199751fc8aa"></a>
### Function FieldsContainer

![][public]

```cpp
ansys::dpf::FieldsContainer::FieldsContainer(Client const *const client)
```



Create a new fields container on a server.



**Parameters**:

* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client**: [in] [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) instance designating the IP, port and protocol to use.

**Return type**: 

<a id="classansys_1_1dpf_1_1FieldsContainer_1ac721796f129c6e8986be8ce5977eefcc"></a>
### Function FieldsContainer

![][public]

```cpp
ansys::dpf::FieldsContainer::FieldsContainer(Client const *const client, std::vector< std::string > const &labels)
```



Create a collection of fields with the given labels on a server.



**Parameters**:

* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client**: [in] [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) instance designating the IP, port and protocol to use.
* std::vector< std::string > const & **labels**: [in] Labels for fields.

**Return type**: 

<a id="classansys_1_1dpf_1_1FieldsContainer_1a8f56a88941a626857bb11528368f08e6"></a>
### Function FieldsContainer

![][public]

```cpp
ansys::dpf::FieldsContainer::FieldsContainer(int id, Client const *const client)
```



Retrieve an existing instance of [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer) on a server. <br/>



**Parameters**:

* int **id**: [in] Id of the [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer) object on the server's database.
* [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client**: [in] [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) instance designating the IP, port and protocol to use.

**Return type**: 

<a id="classansys_1_1dpf_1_1FieldsContainer_1a22e1ed19ab76ad96df74d2084c9ea4f4"></a>
### Function FieldsContainer

![][public]

```cpp
ansys::dpf::FieldsContainer::FieldsContainer(const std::vector< std::string > &labels)
```



Create a collection of fields with the given labels.



**Parameters**:

* const std::vector< std::string > & **labels**: [in] Labels for fields.

**Return type**: 

<a id="classansys_1_1dpf_1_1FieldsContainer_1a784977bc0973ea5711aaf7e3dbddbb5d"></a>
### Function ~FieldsContainer

![][public]

```cpp
virtual ansys::dpf::FieldsContainer::~FieldsContainer()
```







**Return type**: 

<a id="classansys_1_1dpf_1_1FieldsContainer_1a85f22edc2a63a092cf00e9fc839a28e6"></a>
### Function FieldsContainer

![][public]

```cpp
ansys::dpf::FieldsContainer::FieldsContainer(FieldsContainer const &)
```







**Parameters**:

* [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer) const &

**Return type**: 

<a id="classansys_1_1dpf_1_1FieldsContainer_1ad5ccfb39967a33d0dc8eeba9283516dd"></a>
### Function FieldsContainer

![][public]

```cpp
ansys::dpf::FieldsContainer::FieldsContainer(FieldsContainer &&)
```







**Parameters**:

* [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer) &&

**Return type**: 

<a id="classansys_1_1dpf_1_1FieldsContainer_1a92bb968272f8ff43248b2ee84cdcbf83"></a>
### Function operator=

![][public]

```cpp
FieldsContainer& ansys::dpf::FieldsContainer::operator=(FieldsContainer const &)
```







**Parameters**:

* [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer) const &

**Return type**: [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer) &

<a id="classansys_1_1dpf_1_1FieldsContainer_1ae2f60f8cbdfae4491703b72052e0d3b4"></a>
### Function operator=

![][public]

```cpp
FieldsContainer& ansys::dpf::FieldsContainer::operator=(FieldsContainer &&)
```







**Parameters**:

* [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer) &&

**Return type**: [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer) &

<a id="classansys_1_1dpf_1_1FieldsContainer_1aea6b234cdf457204b5fa9c8e62c7b691"></a>
### Function operator[]

![][public]

```cpp
Field ansys::dpf::FieldsContainer::operator[](dp_int index)
```



Get field at index. 
**Returns**:

[Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) given by index.



**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **index**: [in] Index of field within container.

**Return type**: [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field)

<a id="classansys_1_1dpf_1_1FieldsContainer_1a0f93949d1256055fd0a85a70cd62aab4"></a>
### Function size

![][public]
![][const]

```cpp
dp_int ansys::dpf::FieldsContainer::size() const
```



Get Number of fields in container. 
**Returns**:

Number of fields.



**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<a id="classansys_1_1dpf_1_1FieldsContainer_1addfee935e69fe9fb9e0e533449f9a5bc"></a>
### Function at

![][public]

```cpp
Field ansys::dpf::FieldsContainer::at(dp_index index)
```



Get field at index. 
**Returns**:

[Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) given by index.



**Parameters**:

* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **index**: [in] Index of field within container.

**Return type**: [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field)

<a id="classansys_1_1dpf_1_1FieldsContainer_1a475eafcf1caa61c8113d4ea4dbcaa881"></a>
### Function at

![][public]
![][const]

```cpp
const Field ansys::dpf::FieldsContainer::at(dp_index index) const
```



Get field at index. 
**Returns**:

[Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) given by index.



**Parameters**:

* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **index**: [in] Index of field.

**Return type**: const [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field)

<a id="classansys_1_1dpf_1_1FieldsContainer_1a9f0704e94d480481e50abd20df33317c"></a>
### Function update

![][public]

```cpp
void ansys::dpf::FieldsContainer::update(Field &f, dp_index index)
```



Update [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) at index



**Parameters**:

* [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) & **f**: [in] New field data.
* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **index**: [in] Index of field within container.

**Return type**: void

<a id="classansys_1_1dpf_1_1FieldsContainer_1a83521da3efc008468f37f05153691696"></a>
### Function reserve

![][public]

```cpp
void ansys::dpf::FieldsContainer::reserve(dp_int size)
```



Reserve space for fields



**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **size**: [in] Number of fields for which to reserve space.

**Return type**: void

<a id="classansys_1_1dpf_1_1FieldsContainer_1a5790b17b68590cdecccc9642df172d39"></a>
### Function resize

![][public]

```cpp
void ansys::dpf::FieldsContainer::resize(dp_int size)
```



Resize container to given size.



**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **size**: [in] Set container to number of fields.

**Return type**: void

<a id="classansys_1_1dpf_1_1FieldsContainer_1aa9912d3ca0991feecc57765ec816505a"></a>
### Function addLabel

![][public]

```cpp
void ansys::dpf::FieldsContainer::addLabel(std::string const &label)
```



Add new label to field.



**Parameters**:

* std::string const & **label**: [in] New label.

**Return type**: void

<a id="classansys_1_1dpf_1_1FieldsContainer_1a1d5a4855c67db5f95789024142140a1f"></a>
### Function addLabel

![][public]

```cpp
void ansys::dpf::FieldsContainer::addLabel(std::string const &label, dp_id default_value)
```



Add new label with value.



**Parameters**:

* std::string const & **label**: [in] New label.
* [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e) **default_value**: [in] Value of label.

**Return type**: void

<a id="classansys_1_1dpf_1_1FieldsContainer_1a9e099c6e48bb4786e95168f1e69a635f"></a>
### Function addLabels

![][public]

```cpp
void ansys::dpf::FieldsContainer::addLabels(std::vector< std::string > const &labels)
```



Add vector of labels to field.



**Parameters**:

* std::vector< std::string > const & **labels**: [in] Vector of labels to add.

**Return type**: void

<a id="classansys_1_1dpf_1_1FieldsContainer_1a0c6bd75cbd78e7a25784ccc4a9f609d5"></a>
### Function add

![][public]

```cpp
void ansys::dpf::FieldsContainer::add(LabelSpace const &lab_space, Field const &f)
```



Add [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) to [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace).



**Parameters**:

* [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) const & **lab_space**: [in] [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) to which to add [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field).
* [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) const & **f**: [in] [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) to add to [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace).

**Return type**: void

<a id="classansys_1_1dpf_1_1FieldsContainer_1a8daf89e0cf634d805ab5d476c20fd608"></a>
### Function getSizeFor

![][public]
![][const]

```cpp
dp_int ansys::dpf::FieldsContainer::getSizeFor(LabelSpace const &lab_space) const
```



**Returns**:

Number of fields for given [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace).



**Parameters**:

* [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) const & **lab_space**: [in] [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) for which to get number of fields.

**Return type**: [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0)

<a id="classansys_1_1dpf_1_1FieldsContainer_1a72e507d5933e2469405243ddcb8f0f58"></a>
### Function getFields

![][public]
![][const]

```cpp
std::vector<Field> ansys::dpf::FieldsContainer::getFields(LabelSpace const &lab_space) const
```



**Returns**:

Fields given by [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace)



**Parameters**:

* [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) const & **lab_space**: [in] [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) for which to get fields.

**Return type**: std::vector< [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) >

<a id="classansys_1_1dpf_1_1FieldsContainer_1aeb12b6212b016653f1eb325f19a9d1ce"></a>
### Function getField

![][public]
![][const]

```cpp
Field ansys::dpf::FieldsContainer::getField(LabelSpace const &lab_space) const
```



**Returns**:

First [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) given by [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace)



**Parameters**:

* [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) const & **lab_space**: [in] [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) for which to get field.

**Return type**: [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field)

<a id="classansys_1_1dpf_1_1FieldsContainer_1a3e5c7a3eec4268f88a3568b6035b93be"></a>
### Function getFieldsIndeces

![][public]
![][const]

```cpp
std::vector<int> ansys::dpf::FieldsContainer::getFieldsIndeces(LabelSpace const &lab_space) const
```



**Returns**:

[Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) indices for field given by [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace)



**Parameters**:

* [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) const & **lab_space**: [in] [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) defining field for which to get indices.

**Return type**: std::vector< int >

<a id="classansys_1_1dpf_1_1FieldsContainer_1a5eb5ee414b37c1f49f30bb240a648a87"></a>
### Function labels

![][public]
![][const]

```cpp
std::vector<std::string> ansys::dpf::FieldsContainer::labels() const
```



**Returns**:

Vector of labels of fields container.



**Return type**: std::vector< std::string >

<a id="classansys_1_1dpf_1_1FieldsContainer_1add7a3418e9a0efb753d0c48d0359a261"></a>
### Function getLabelSpace

![][public]
![][const]

```cpp
LabelSpace ansys::dpf::FieldsContainer::getLabelSpace(dp_index index) const
```



**Returns**:

[LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) for given field index.



**Parameters**:

* [dp\_index](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a417548d1b705a9ba54ba9429afe68920) **index**: [in] Index of field.

**Return type**: [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace)

<a id="classansys_1_1dpf_1_1FieldsContainer_1afd031defd3088051030347232478ee35"></a>
### Function labelScoping

![][public]
![][const]

```cpp
Scoping ansys::dpf::FieldsContainer::labelScoping(std::string const &label) const
```



**Returns**:

[Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping) for field given by label.



**Parameters**:

* std::string const & **label**: [in] [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) for which to get scoping.

**Return type**: [Scoping](classansys_1_1dpf_1_1Scoping.md#classansys_1_1dpf_1_1Scoping)

<a id="classansys_1_1dpf_1_1FieldsContainer_1a8507e8f2014f975ed140ebee1d18d18c"></a>
### Function getFieldsForTimeId

![][public]
![][const]

```cpp
std::vector<Field> ansys::dpf::FieldsContainer::getFieldsForTimeId(dp_int time_id, dp_int complex_id=0) const
```



**Returns**:

Real or imaginary (by default real) Fields at given time set.



**Parameters**:

* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **time_id**: [in] Time Set Id (1 to # of time sets).
* [dp\_int](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1a60d181a1f9d29cc7cc38b25dac4401f0) **complex_id** = 0 : [in] Flag indicating to return imaginary part of result (0 = real part, 1 = imaginary part).

**Return type**: std::vector< [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) >

<a id="classansys_1_1dpf_1_1FieldsContainer_1ac73c0843a3b6ed0604428a21a9be416f"></a>
### Function hasLabel

![][public]
![][const]

```cpp
bool ansys::dpf::FieldsContainer::hasLabel(std::string const &label) const
```



**Returns**:

Indication that [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer) has field given by label.



**Parameters**:

* std::string const & **label**: [in] [Field](classansys_1_1dpf_1_1Field.md#classansys_1_1dpf_1_1Field) label.

**Return type**: bool

<a id="classansys_1_1dpf_1_1FieldsContainer_1ab7f848fe1501deb9257a041f1fac0b44"></a>
### Function support

![][public]
![][const]

```cpp
Support ansys::dpf::FieldsContainer::support(std::string const &label=labels::time) const
```



**Returns**:

[Support](classansys_1_1dpf_1_1Support.md#classansys_1_1dpf_1_1Support) for given label.



**Parameters**:

* std::string const & **label** = [labels::time](structansys_1_1dpf_1_1labels.md#structansys_1_1dpf_1_1labels_1a22ee1a5e3be8ad98c20c5ca52e247914) : [in] [Label](structansys_1_1dpf_1_1Label.md#structansys_1_1dpf_1_1Label) for which to get [Support](classansys_1_1dpf_1_1Support.md#classansys_1_1dpf_1_1Support).

**Return type**: [Support](classansys_1_1dpf_1_1Support.md#classansys_1_1dpf_1_1Support)

<a id="classansys_1_1dpf_1_1FieldsContainer_1afdd882211d61a75c92fbc18a9e813113"></a>
### Function setSupport

![][public]

```cpp
void ansys::dpf::FieldsContainer::setSupport(ansys::dpf::Support const &support, std::string const &label=labels::time)
```



Set [Support](classansys_1_1dpf_1_1Support.md#classansys_1_1dpf_1_1Support) for given label.



**Parameters**:

* [ansys::dpf::Support](classansys_1_1dpf_1_1Support.md#classansys_1_1dpf_1_1Support) const & **support**: [in] [Support](classansys_1_1dpf_1_1Support.md#classansys_1_1dpf_1_1Support) value.
* std::string const & **label** = [labels::time](structansys_1_1dpf_1_1labels.md#structansys_1_1dpf_1_1labels_1a22ee1a5e3be8ad98c20c5ca52e247914) : [in] [Label](structansys_1_1dpf_1_1Label.md#structansys_1_1dpf_1_1Label) for which to set support.

**Return type**: void

<a id="classansys_1_1dpf_1_1FieldsContainer_1a12fb445a1e6ec8e1dc05e2463fb17641"></a>
### Function setSupport

![][public]

```cpp
void ansys::dpf::FieldsContainer::setSupport(ansys::dpf::TimeFreqSupport const &support, std::string const &label=labels::time)
```



Set [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport) for given label.



**Parameters**:

* [ansys::dpf::TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport) const & **support**: [in] [Support](classansys_1_1dpf_1_1Support.md#classansys_1_1dpf_1_1Support) value.
* std::string const & **label** = [labels::time](structansys_1_1dpf_1_1labels.md#structansys_1_1dpf_1_1labels_1a22ee1a5e3be8ad98c20c5ca52e247914) : [in] [Label](structansys_1_1dpf_1_1Label.md#structansys_1_1dpf_1_1Label) for which to set support.

**Return type**: void

<a id="classansys_1_1dpf_1_1FieldsContainer_1a218a256c1ff051e4c3b9e979f1af3599"></a>
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

* [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) const & **lab_space**: [in] [LabelSpace](classansys_1_1dpf_1_1LabelSpace.md#classansys_1_1dpf_1_1LabelSpace) from which to get fields.

**Return type**: [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer)

<a id="classansys_1_1dpf_1_1FieldsContainer_1a760ef1dc58e7a70fe2b7367f552f7cef"></a>
### Function name

![][public]
![][const]

```cpp
std::string ansys::dpf::FieldsContainer::name() const
```



**Returns**:

Name of [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer).



**Return type**: std::string

<a id="classansys_1_1dpf_1_1FieldsContainer_1ad1a087694be9c5bed7a8f2b5d16b89b8"></a>
### Function setName

![][public]

```cpp
void ansys::dpf::FieldsContainer::setName(std::string name)
```



Set name of [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer).



**Parameters**:

* std::string **name**: [in] New name.

**Return type**: void

<a id="classansys_1_1dpf_1_1FieldsContainer_1a3e262e4f6ade30a6a42198a117839751"></a>
### Function id

![][public]
![][const]

```cpp
dp_id ansys::dpf::FieldsContainer::id() const
```



**Returns**:

Id of [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer).



**Return type**: [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e)

<a id="classansys_1_1dpf_1_1FieldsContainer_1a18bc8706153e4f3bd44c1a0476fa40e2"></a>
### Function setId

![][public]

```cpp
void ansys::dpf::FieldsContainer::setId(dp_id id)
```



Set Id of [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer).



**Parameters**:

* [dp\_id](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf_1ab4574c9af3f2bb8011da7d1f4c8da20e) **id**: [in] New id.

**Return type**: void

<a id="classansys_1_1dpf_1_1FieldsContainer_1a7292a30f43f3d0276829f2a704569304"></a>
### Function deep\_copy

![][public]
![][const]

```cpp
FieldsContainer ansys::dpf::FieldsContainer::deep_copy(ansys::dpf::Client const *const client=nullptr) const
```



Create a new [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer) on a server by copying all the data of this [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer).



**Parameters**:

* [ansys::dpf::Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) const *const **client** = nullptr : [in] [Client](classansys_1_1dpf_1_1Client.md#classansys_1_1dpf_1_1Client) instance designating the IP, port and protocol to use.

**Return type**: [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer)

## Public static functions

<a id="classansys_1_1dpf_1_1FieldsContainer_1af4bcbf19662088a80192c4306e76eab9"></a>
### Function emptyFieldsContainer

![][public]
![][static]

```cpp
static FieldsContainer ansys::dpf::FieldsContainer::emptyFieldsContainer()
```



Create an empty fields container. 
**Returns**:

Empty [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer).



**Return type**: [FieldsContainer](classansys_1_1dpf_1_1FieldsContainer.md#classansys_1_1dpf_1_1FieldsContainer)

**TODO**:

* includes {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)