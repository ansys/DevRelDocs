<a id="structansys_1_1dpf_1_1QuantityType"></a>
# Structure ansys::dpf::QuantityType

![][C++]
![][public]

**Definition**: `dpf\_api\_base.h` (line 77)

User defined quantity type.

Allows for the definition of a new quantity type. Many quantity types are predefined. 

**See also**: [quantity\_types](structansys_1_1dpf_1_1quantity__types.md#structansys_1_1dpf_1_1quantity__types)

## Members

* [\_value](structansys_1_1dpf_1_1QuantityType.md#structansys_1_1dpf_1_1QuantityType_1a3c44846971e03cd97816d56777e5c5ad)
* [c\_str](structansys_1_1dpf_1_1QuantityType.md#structansys_1_1dpf_1_1QuantityType_1abdfb356d30de73b4bae958a5a22eb186)
* [empty](structansys_1_1dpf_1_1QuantityType.md#structansys_1_1dpf_1_1QuantityType_1a013520e0f57e0ad6bcd8a533d8639b21)
* [operator std::string](structansys_1_1dpf_1_1QuantityType.md#structansys_1_1dpf_1_1QuantityType_1ad86c0033431ec42817dafdbef89e650a)
* [operator!=](structansys_1_1dpf_1_1QuantityType.md#structansys_1_1dpf_1_1QuantityType_1ab55b06401adb7a8017fadc7e860f9477)
* [operator\<](structansys_1_1dpf_1_1QuantityType.md#structansys_1_1dpf_1_1QuantityType_1af0c5735179d5e5ad3949052f551d5777)
* [operator\<=](structansys_1_1dpf_1_1QuantityType.md#structansys_1_1dpf_1_1QuantityType_1ab3a03a40046da3dc03075230b395df8b)
* [operator==](structansys_1_1dpf_1_1QuantityType.md#structansys_1_1dpf_1_1QuantityType_1ab135777e525e088d662ef15beb5badf0)
* [QuantityType](structansys_1_1dpf_1_1QuantityType.md#structansys_1_1dpf_1_1QuantityType_1aad0ded6e541fc561a3c3d1c28cdcaf3f)
* [QuantityType](structansys_1_1dpf_1_1QuantityType.md#structansys_1_1dpf_1_1QuantityType_1a7f106d62dad9bf5f6bcf4cde9beb3b14)

## Private attributes

<a id="structansys_1_1dpf_1_1QuantityType_1a3c44846971e03cd97816d56777e5c5ad"></a>
### Variable \_value

![][private]

**Definition**: `dpf\_api\_base.h` (line 80)


```cpp
std::string ansys::dpf::QuantityType::_value
```








**Type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::QuantityType::_value"}]}`
-->

## Public functions

<a id="structansys_1_1dpf_1_1QuantityType_1aad0ded6e541fc561a3c3d1c28cdcaf3f"></a>
### Function QuantityType

![][public]


```cpp
ansys::dpf::QuantityType::QuantityType(std::string const &name="")
```




Create new location.



**Parameters**:

* std::string const & **name** = "" : [in] Optional name of quanty type.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::QuantityType::QuantityType"}]}`
-->

<a id="structansys_1_1dpf_1_1QuantityType_1a7f106d62dad9bf5f6bcf4cde9beb3b14"></a>
### Function QuantityType

![][public]


```cpp
ansys::dpf::QuantityType::QuantityType(QuantityType const &)=default
```








**Parameters**:

* QuantityType const &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::QuantityType::QuantityType"}]}`
-->

<a id="structansys_1_1dpf_1_1QuantityType_1ab135777e525e088d662ef15beb5badf0"></a>
### Function operator==

![][public]
![][const]


```cpp
bool ansys::dpf::QuantityType::operator==(QuantityType const &) const
```








**Parameters**:

* [QuantityType](structansys_1_1dpf_1_1QuantityType.md#structansys_1_1dpf_1_1QuantityType_1aad0ded6e541fc561a3c3d1c28cdcaf3f) const &

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::QuantityType::operator=="}]}`
-->

<a id="structansys_1_1dpf_1_1QuantityType_1af0c5735179d5e5ad3949052f551d5777"></a>
### Function operator\<

![][public]
![][const]


```cpp
bool ansys::dpf::QuantityType::operator<(QuantityType const &) const
```








**Parameters**:

* [QuantityType](structansys_1_1dpf_1_1QuantityType.md#structansys_1_1dpf_1_1QuantityType_1aad0ded6e541fc561a3c3d1c28cdcaf3f) const &

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::QuantityType::operator<"}]}`
-->

<a id="structansys_1_1dpf_1_1QuantityType_1ab3a03a40046da3dc03075230b395df8b"></a>
### Function operator\<=

![][public]
![][const]


```cpp
bool ansys::dpf::QuantityType::operator<=(QuantityType const &) const
```








**Parameters**:

* [QuantityType](structansys_1_1dpf_1_1QuantityType.md#structansys_1_1dpf_1_1QuantityType_1aad0ded6e541fc561a3c3d1c28cdcaf3f) const &

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::QuantityType::operator<="}]}`
-->

<a id="structansys_1_1dpf_1_1QuantityType_1ab55b06401adb7a8017fadc7e860f9477"></a>
### Function operator!=

![][public]
![][const]


```cpp
bool ansys::dpf::QuantityType::operator!=(QuantityType const &) const
```








**Parameters**:

* [QuantityType](structansys_1_1dpf_1_1QuantityType.md#structansys_1_1dpf_1_1QuantityType_1aad0ded6e541fc561a3c3d1c28cdcaf3f) const &

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::QuantityType::operator!="}]}`
-->

<a id="structansys_1_1dpf_1_1QuantityType_1ad86c0033431ec42817dafdbef89e650a"></a>
### Function operator std::string

![][public]
![][const]


```cpp
ansys::dpf::QuantityType::operator std::string() const
```




Name of quantity type.



**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::QuantityType::string"}]}`
-->

<a id="structansys_1_1dpf_1_1QuantityType_1a013520e0f57e0ad6bcd8a533d8639b21"></a>
### Function empty

![][public]
![][const]


```cpp
bool ansys::dpf::QuantityType::empty() const
```








**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::QuantityType::empty"}]}`
-->

<a id="structansys_1_1dpf_1_1QuantityType_1abdfb356d30de73b4bae958a5a22eb186"></a>
### Function c\_str

![][public]
![][const]


```cpp
const char * ansys::dpf::QuantityType::c_str() const
```




Gets name of quantity type. 
**Returns**:

Name of quantity type.



**Return type**: const char *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::QuantityType::c_str"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)