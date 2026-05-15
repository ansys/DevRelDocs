# Structure ansys::dpf::PropertyType

<a id="structansys-dpf-propertytype"></a>

![][C++]
![][public]

User defined property type.

Allows for the definition of a new property types. Many property types are predefined. 

**See also**: [property_types](structansys-dpf-property-types.md#structansys-dpf-property-types)

## Members

* [c_str](structansys-dpf-propertytype.md#structansys-dpf-propertytype-1aaf60552ef91b8bc28eccb40557199dba)
* [operator!=](structansys-dpf-propertytype.md#structansys-dpf-propertytype-1a0c8f3b3685ac28b6fa46a263a561e5b0)
* [operator\<](structansys-dpf-propertytype.md#structansys-dpf-propertytype-1a836bd074dd3614d5f70d8e362e058802)
* [operator\<=](structansys-dpf-propertytype.md#structansys-dpf-propertytype-1ad74f013eccde6dad34abf8e9743e085c)
* [operator==](structansys-dpf-propertytype.md#structansys-dpf-propertytype-1a3d2c701a7fa239850799916427edccae)
* [PropertyType](structansys-dpf-propertytype.md#structansys-dpf-propertytype-1a8e5eb3fe693b3874c4c0c6bc472d4fc5)
* [PropertyType](structansys-dpf-propertytype.md#structansys-dpf-propertytype-1a1edbf1016ba3f0f1ddf58928fd43441a)
* [PropertyType](structansys-dpf-propertytype.md#structansys-dpf-propertytype-1ad9b89ef4cefb0be630d3f589dc07b601)

## Public functions

<a id="structansys-dpf-propertytype-1a8e5eb3fe693b3874c4c0c6bc472d4fc5"></a>
### Function PropertyType

![][public]


```cpp
ansys::dpf::PropertyType::PropertyType(std::string const &name)
```




Create new property type.



**Parameters**:

* std::string const & **name**: [in] Name of property type.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyType::PropertyType"}]}`
-->

<a id="structansys-dpf-propertytype-1a1edbf1016ba3f0f1ddf58928fd43441a"></a>
### Function PropertyType

![][public]


```cpp
ansys::dpf::PropertyType::PropertyType(PropertyType const &)=default
```








**Parameters**:

* PropertyType const &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyType::PropertyType"}]}`
-->

<a id="structansys-dpf-propertytype-1ad9b89ef4cefb0be630d3f589dc07b601"></a>
### Function PropertyType

![][public]


```cpp
ansys::dpf::PropertyType::PropertyType()=default
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyType::PropertyType"}]}`
-->

<a id="structansys-dpf-propertytype-1a3d2c701a7fa239850799916427edccae"></a>
### Function operator==

![][public]
![][const]


```cpp
bool ansys::dpf::PropertyType::operator==(PropertyType const &) const
```








**Parameters**:

* [PropertyType](structansys-dpf-propertytype.md#structansys-dpf-propertytype-1a8e5eb3fe693b3874c4c0c6bc472d4fc5) const &

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyType::operator=="}]}`
-->

<a id="structansys-dpf-propertytype-1a836bd074dd3614d5f70d8e362e058802"></a>
### Function operator\<

![][public]
![][const]


```cpp
bool ansys::dpf::PropertyType::operator<(PropertyType const &) const
```








**Parameters**:

* [PropertyType](structansys-dpf-propertytype.md#structansys-dpf-propertytype-1a8e5eb3fe693b3874c4c0c6bc472d4fc5) const &

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyType::operator<"}]}`
-->

<a id="structansys-dpf-propertytype-1ad74f013eccde6dad34abf8e9743e085c"></a>
### Function operator\<=

![][public]
![][const]


```cpp
bool ansys::dpf::PropertyType::operator<=(PropertyType const &) const
```








**Parameters**:

* [PropertyType](structansys-dpf-propertytype.md#structansys-dpf-propertytype-1a8e5eb3fe693b3874c4c0c6bc472d4fc5) const &

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyType::operator<="}]}`
-->

<a id="structansys-dpf-propertytype-1a0c8f3b3685ac28b6fa46a263a561e5b0"></a>
### Function operator!=

![][public]
![][const]


```cpp
bool ansys::dpf::PropertyType::operator!=(PropertyType const &) const
```








**Parameters**:

* [PropertyType](structansys-dpf-propertytype.md#structansys-dpf-propertytype-1a8e5eb3fe693b3874c4c0c6bc472d4fc5) const &

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyType::operator!="}]}`
-->

<a id="structansys-dpf-propertytype-1aaf60552ef91b8bc28eccb40557199dba"></a>
### Function c_str

![][public]
![][const]


```cpp
const char * ansys::dpf::PropertyType::c_str() const
```




Gets name of property type. 
**Returns**:

Name of property type.



**Return type**: const char *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::PropertyType::c_str"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)