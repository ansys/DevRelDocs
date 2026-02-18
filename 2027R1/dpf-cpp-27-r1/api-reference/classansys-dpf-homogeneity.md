# Class ansys::dpf::Homogeneity

<a id="classansys-dpf-homogeneity"></a>

![][C++]
![][public]

User defined physical measurement quantity.

Allows for the definition of a new measurement quantity. Many measurements quantities are predefined. 

**See also**: [homogeneities](structansys-dpf-homogeneities.md#structansys-dpf-homogeneities)

## Members

* [c\_str](classansys-dpf-homogeneity.md#classansys-dpf-homogeneity-1a74bcfe9b2ed50910f2da21944e3b7437)
* [Homogeneity](classansys-dpf-homogeneity.md#classansys-dpf-homogeneity-1a5ddd95a1b4667a297eb19531f722d27e)
* [Homogeneity](classansys-dpf-homogeneity.md#classansys-dpf-homogeneity-1a192f79a5c56ddd9304822227218b199e)
* [Homogeneity](classansys-dpf-homogeneity.md#classansys-dpf-homogeneity-1abab33dd46353450eb8b025e792a0c74f)
* [operator std::string](classansys-dpf-homogeneity.md#classansys-dpf-homogeneity-1a805990ee94e455ca6cfb4be2cb9fd1d3)
* [operator!=](classansys-dpf-homogeneity.md#classansys-dpf-homogeneity-1a10804e4a1554cd01621fceb38b77fdfe)
* [operator=](classansys-dpf-homogeneity.md#classansys-dpf-homogeneity-1a1cdc8c0da49ee50ab0111341f070322e)
* [operator==](classansys-dpf-homogeneity.md#classansys-dpf-homogeneity-1a04c1ddd43c0799283b283b6c65ee56ea)

## Public functions

<a id="classansys-dpf-homogeneity-1a5ddd95a1b4667a297eb19531f722d27e"></a>
### Function Homogeneity

![][public]


```cpp
ansys::dpf::Homogeneity::Homogeneity(std::string const &name="Unknown")
```




Create new homogeneity.



**Parameters**:

* std::string const & **name** = "Unknown" : [in] Optional name of homogeneity.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Homogeneity::Homogeneity"}]}`
-->

<a id="classansys-dpf-homogeneity-1a192f79a5c56ddd9304822227218b199e"></a>
### Function Homogeneity

![][public]


```cpp
ansys::dpf::Homogeneity::Homogeneity(Homogeneity const &)=default
```








**Parameters**:

* Homogeneity const &

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Homogeneity::Homogeneity"}]}`
-->

<a id="classansys-dpf-homogeneity-1abab33dd46353450eb8b025e792a0c74f"></a>
### Function Homogeneity

![][public]


```cpp
ansys::dpf::Homogeneity::Homogeneity(Homogeneity &&)=default
```








**Parameters**:

* Homogeneity &&

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Homogeneity::Homogeneity"}]}`
-->

<a id="classansys-dpf-homogeneity-1a1cdc8c0da49ee50ab0111341f070322e"></a>
### Function operator=

![][public]


```cpp
Homogeneity & ansys::dpf::Homogeneity::operator=(Homogeneity const &)
```








**Parameters**:

* [Homogeneity](classansys-dpf-homogeneity.md#classansys-dpf-homogeneity-1a5ddd95a1b4667a297eb19531f722d27e) const &

**Return type**: [Homogeneity](classansys-dpf-homogeneity.md#classansys-dpf-homogeneity-1a5ddd95a1b4667a297eb19531f722d27e) &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Homogeneity::operator="}]}`
-->

<a id="classansys-dpf-homogeneity-1a04c1ddd43c0799283b283b6c65ee56ea"></a>
### Function operator==

![][public]
![][const]


```cpp
bool ansys::dpf::Homogeneity::operator==(Homogeneity const &rhs) const
```








**Parameters**:

* [Homogeneity](classansys-dpf-homogeneity.md#classansys-dpf-homogeneity-1a5ddd95a1b4667a297eb19531f722d27e) const & **rhs**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Homogeneity::operator=="}]}`
-->

<a id="classansys-dpf-homogeneity-1a10804e4a1554cd01621fceb38b77fdfe"></a>
### Function operator!=

![][public]
![][const]


```cpp
bool ansys::dpf::Homogeneity::operator!=(Homogeneity const &rhs) const
```








**Parameters**:

* [Homogeneity](classansys-dpf-homogeneity.md#classansys-dpf-homogeneity-1a5ddd95a1b4667a297eb19531f722d27e) const & **rhs**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Homogeneity::operator!="}]}`
-->

<a id="classansys-dpf-homogeneity-1a805990ee94e455ca6cfb4be2cb9fd1d3"></a>
### Function operator std::string

![][public]
![][const]


```cpp
ansys::dpf::Homogeneity::operator std::string() const
```




Name of homogeneity.



**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Homogeneity::string"}]}`
-->

<a id="classansys-dpf-homogeneity-1a74bcfe9b2ed50910f2da21944e3b7437"></a>
### Function c\_str

![][public]
![][const]


```cpp
const char * ansys::dpf::Homogeneity::c_str() const
```




Gets name of homogeneity. 
**Returns**:

Name of homogeneity.



**Return type**: const char *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Homogeneity::c_str"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api_base.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)