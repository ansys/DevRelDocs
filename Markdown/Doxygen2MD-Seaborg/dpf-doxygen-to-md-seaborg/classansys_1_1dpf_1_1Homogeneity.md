<a id="classansys_1_1dpf_1_1Homogeneity"></a>
# Class ansys::dpf::Homogeneity

![][C++]
![][public]

**Definition**: `dpf\_api\_base.h` (line 290)

User defined physical measurement quantity.

Allows for the definition of a new measurement quantity. Many measurements quantities are predefined. 

**See also**: [homogeneities](structansys_1_1dpf_1_1homogeneities.md#structansys_1_1dpf_1_1homogeneities)

## Members

* [\_name](classansys_1_1dpf_1_1Homogeneity.md#classansys_1_1dpf_1_1Homogeneity_1a46338f4219da9f13d04fb0061bb81188)
* [c\_str](classansys_1_1dpf_1_1Homogeneity.md#classansys_1_1dpf_1_1Homogeneity_1a3e58d30893e865103c6921f24d5d542e)
* [Homogeneity](classansys_1_1dpf_1_1Homogeneity.md#classansys_1_1dpf_1_1Homogeneity_1a5ddd95a1b4667a297eb19531f722d27e)
* [Homogeneity](classansys_1_1dpf_1_1Homogeneity.md#classansys_1_1dpf_1_1Homogeneity_1a192f79a5c56ddd9304822227218b199e)
* [Homogeneity](classansys_1_1dpf_1_1Homogeneity.md#classansys_1_1dpf_1_1Homogeneity_1abab33dd46353450eb8b025e792a0c74f)
* [operator std::string](classansys_1_1dpf_1_1Homogeneity.md#classansys_1_1dpf_1_1Homogeneity_1a805990ee94e455ca6cfb4be2cb9fd1d3)
* [operator!=](classansys_1_1dpf_1_1Homogeneity.md#classansys_1_1dpf_1_1Homogeneity_1a10804e4a1554cd01621fceb38b77fdfe)
* [operator=](classansys_1_1dpf_1_1Homogeneity.md#classansys_1_1dpf_1_1Homogeneity_1a2cc6b0ed8e40bf623ed6c3664959b94a)
* [operator==](classansys_1_1dpf_1_1Homogeneity.md#classansys_1_1dpf_1_1Homogeneity_1a04c1ddd43c0799283b283b6c65ee56ea)

## Private attributes

<a id="classansys_1_1dpf_1_1Homogeneity_1a46338f4219da9f13d04fb0061bb81188"></a>
### Variable \_name

![][private]

**Definition**: `dpf\_api\_base.h` (line 293)

```cpp
std::string ansys::dpf::Homogeneity::_name
```







**Type**: std::string

## Public functions

<a id="classansys_1_1dpf_1_1Homogeneity_1a5ddd95a1b4667a297eb19531f722d27e"></a>
### Function Homogeneity

![][public]

```cpp
ansys::dpf::Homogeneity::Homogeneity(std::string const &name="Unknown")
```



Create new homogeneity.



**Parameters**:

* std::string const & **name** = "Unknown" : [in] Optional name of homogeneity.

**Return type**: 

<a id="classansys_1_1dpf_1_1Homogeneity_1a192f79a5c56ddd9304822227218b199e"></a>
### Function Homogeneity

![][public]

```cpp
ansys::dpf::Homogeneity::Homogeneity(Homogeneity const &)=default
```







**Parameters**:

* [Homogeneity](classansys_1_1dpf_1_1Homogeneity.md#classansys_1_1dpf_1_1Homogeneity) const &

**Return type**: 

<a id="classansys_1_1dpf_1_1Homogeneity_1abab33dd46353450eb8b025e792a0c74f"></a>
### Function Homogeneity

![][public]

```cpp
ansys::dpf::Homogeneity::Homogeneity(Homogeneity &&)=default
```







**Parameters**:

* [Homogeneity](classansys_1_1dpf_1_1Homogeneity.md#classansys_1_1dpf_1_1Homogeneity) &&

**Return type**: 

<a id="classansys_1_1dpf_1_1Homogeneity_1a2cc6b0ed8e40bf623ed6c3664959b94a"></a>
### Function operator=

![][public]

```cpp
Homogeneity& ansys::dpf::Homogeneity::operator=(Homogeneity const &)
```







**Parameters**:

* [Homogeneity](classansys_1_1dpf_1_1Homogeneity.md#classansys_1_1dpf_1_1Homogeneity) const &

**Return type**: [Homogeneity](classansys_1_1dpf_1_1Homogeneity.md#classansys_1_1dpf_1_1Homogeneity) &

<a id="classansys_1_1dpf_1_1Homogeneity_1a04c1ddd43c0799283b283b6c65ee56ea"></a>
### Function operator==

![][public]
![][const]

```cpp
bool ansys::dpf::Homogeneity::operator==(Homogeneity const &rhs) const
```







**Parameters**:

* [Homogeneity](classansys_1_1dpf_1_1Homogeneity.md#classansys_1_1dpf_1_1Homogeneity) const & **rhs**

**Return type**: bool

<a id="classansys_1_1dpf_1_1Homogeneity_1a10804e4a1554cd01621fceb38b77fdfe"></a>
### Function operator!=

![][public]
![][const]

```cpp
bool ansys::dpf::Homogeneity::operator!=(Homogeneity const &rhs) const
```







**Parameters**:

* [Homogeneity](classansys_1_1dpf_1_1Homogeneity.md#classansys_1_1dpf_1_1Homogeneity) const & **rhs**

**Return type**: bool

<a id="classansys_1_1dpf_1_1Homogeneity_1a805990ee94e455ca6cfb4be2cb9fd1d3"></a>
### Function operator std::string

![][public]
![][const]

```cpp
ansys::dpf::Homogeneity::operator std::string() const
```



Name of homogeneity.



**Return type**: 

<a id="classansys_1_1dpf_1_1Homogeneity_1a3e58d30893e865103c6921f24d5d542e"></a>
### Function c\_str

![][public]
![][const]

```cpp
const char* ansys::dpf::Homogeneity::c_str() const
```



Gets name of homogeneity. 
**Returns**:

Name of homogeneity.



**Return type**: const char *

**TODO**:

* includes {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api_base.h"}]}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)