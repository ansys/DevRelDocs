<a id="structansys_1_1dpf_1_1PropertyType"></a>
# Structure ansys::dpf::PropertyType

![][C++]
![][public]

**Definition**: `dpf\_api\_base.h` (line 210)

User defined property type.

Allows for the definition of a new property types. Many property types are predefined. 

**See also**: [property\_types](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types)

## Members

* [\_value](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType_1a4ca90a12d0ab8e44814088add3bfb81d)
* [c\_str](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType_1a8b0a8c7bcef9a148b046f850cdd2ba2f)
* [operator std::string](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType_1a3d5716d1801fda4f945a6a89b4cdf0e3)
* [operator!=](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType_1a0c8f3b3685ac28b6fa46a263a561e5b0)
* [operator\<](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType_1a836bd074dd3614d5f70d8e362e058802)
* [operator\<=](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType_1ad74f013eccde6dad34abf8e9743e085c)
* [operator==](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType_1a3d2c701a7fa239850799916427edccae)
* [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType_1a8e5eb3fe693b3874c4c0c6bc472d4fc5)
* [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType_1a1edbf1016ba3f0f1ddf58928fd43441a)

## Private attributes

<a id="structansys_1_1dpf_1_1PropertyType_1a4ca90a12d0ab8e44814088add3bfb81d"></a>
### Variable \_value

![][private]

**Definition**: `dpf\_api\_base.h` (line 213)

```cpp
std::string ansys::dpf::PropertyType::_value
```







**Type**: std::string

## Public functions

<a id="structansys_1_1dpf_1_1PropertyType_1a8e5eb3fe693b3874c4c0c6bc472d4fc5"></a>
### Function PropertyType

![][public]

```cpp
ansys::dpf::PropertyType::PropertyType(std::string const &name)
```



Create new property type.



**Parameters**:

* std::string const & **name**: [in] Name of property type.

**Return type**: 

<a id="structansys_1_1dpf_1_1PropertyType_1a1edbf1016ba3f0f1ddf58928fd43441a"></a>
### Function PropertyType

![][public]

```cpp
ansys::dpf::PropertyType::PropertyType(PropertyType const &)=default
```







**Parameters**:

* [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType) const &

**Return type**: 

<a id="structansys_1_1dpf_1_1PropertyType_1a3d2c701a7fa239850799916427edccae"></a>
### Function operator==

![][public]
![][const]

```cpp
bool ansys::dpf::PropertyType::operator==(PropertyType const &) const
```







**Parameters**:

* [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType) const &

**Return type**: bool

<a id="structansys_1_1dpf_1_1PropertyType_1a836bd074dd3614d5f70d8e362e058802"></a>
### Function operator\<

![][public]
![][const]

```cpp
bool ansys::dpf::PropertyType::operator<(PropertyType const &) const
```







**Parameters**:

* [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType) const &

**Return type**: bool

<a id="structansys_1_1dpf_1_1PropertyType_1ad74f013eccde6dad34abf8e9743e085c"></a>
### Function operator\<=

![][public]
![][const]

```cpp
bool ansys::dpf::PropertyType::operator<=(PropertyType const &) const
```







**Parameters**:

* [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType) const &

**Return type**: bool

<a id="structansys_1_1dpf_1_1PropertyType_1a0c8f3b3685ac28b6fa46a263a561e5b0"></a>
### Function operator!=

![][public]
![][const]

```cpp
bool ansys::dpf::PropertyType::operator!=(PropertyType const &) const
```







**Parameters**:

* [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType) const &

**Return type**: bool

<a id="structansys_1_1dpf_1_1PropertyType_1a3d5716d1801fda4f945a6a89b4cdf0e3"></a>
### Function operator std::string

![][public]
![][const]

```cpp
ansys::dpf::PropertyType::operator std::string() const
```



Name of property type.



**Return type**: 

<a id="structansys_1_1dpf_1_1PropertyType_1a8b0a8c7bcef9a148b046f850cdd2ba2f"></a>
### Function c\_str

![][public]
![][const]

```cpp
const char* ansys::dpf::PropertyType::c_str() const
```



Gets name of property type. 
**Returns**:

Name of property type.



**Return type**: const char *

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)