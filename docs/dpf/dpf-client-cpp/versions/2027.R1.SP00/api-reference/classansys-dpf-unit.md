# Class ansys::dpf::Unit

<a id="classansys-dpf-unit"></a>

![][C++]
![][public]



Definition of a unit.

## Members

* [c_str](classansys-dpf-unit.md#classansys-dpf-unit-1af130c0a87a7006258b3fb1e8b83d785b)
* [conversionFactorTo](classansys-dpf-unit.md#classansys-dpf-unit-1a8ca3445a56c372fd3734b5a7d00537f1)
* [divideBy](classansys-dpf-unit.md#classansys-dpf-unit-1af8033c3d0b41a3ea626221e21a7efce7)
* [homogeneity](classansys-dpf-unit.md#classansys-dpf-unit-1a2ca6139006413a975a4995505ab826fc)
* [HomogeneityIdToHomogeneity](classansys-dpf-unit.md#classansys-dpf-unit-1a902fcfaa2fd6df783400f963d557c357)
* [invert](classansys-dpf-unit.md#classansys-dpf-unit-1adfd11657f700e8a4061d56aba08198ba)
* [isHomogeneousTo](classansys-dpf-unit.md#classansys-dpf-unit-1af4a5b081eaec3c708f1488f6191b397e)
* [multiplyWith](classansys-dpf-unit.md#classansys-dpf-unit-1ae55af41a7a8ed1d0a41a5468b74e7d34)
* [operator==](classansys-dpf-unit.md#classansys-dpf-unit-1a7fec3a530cb4a824b017781c476134d2)
* [pow](classansys-dpf-unit.md#classansys-dpf-unit-1a9fe7810a66d3e479ad4dccff226933d8)
* [shiftTo](classansys-dpf-unit.md#classansys-dpf-unit-1a93b566af024726b9b9e2c0687976b10a)
* [toString](classansys-dpf-unit.md#classansys-dpf-unit-1aed255d78340372d1dd05461d8bc29d38)
* [Unit](classansys-dpf-unit.md#classansys-dpf-unit-1a3a9ceab17e3c6f63fed02c704fb8ce0d)
* [Unit](classansys-dpf-unit.md#classansys-dpf-unit-1aa05714fa7ba83322ad7c7e44a7d4da8f)
* [Unit](classansys-dpf-unit.md#classansys-dpf-unit-1af2bd161c5fa67f3f9bf58b9441692753)
* [Unit](classansys-dpf-unit.md#classansys-dpf-unit-1a45db3ce814a1fc50bc7cea8bab197005)

## Public functions

<a id="classansys-dpf-unit-1a3a9ceab17e3c6f63fed02c704fb8ce0d"></a>
### Function Unit

![][public]


```cpp
ansys::dpf::Unit::Unit()
```








**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Unit::Unit"}]}`
-->

<a id="classansys-dpf-unit-1aa05714fa7ba83322ad7c7e44a7d4da8f"></a>
### Function Unit

![][public]


```cpp
ansys::dpf::Unit::Unit(std::string const &symbol)
```




Create a [Unit](classansys-dpf-unit.md#classansys-dpf-unit) with given name.



**Parameters**:

* std::string const & **symbol**: [in] Symbol name of unit.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Unit::Unit"}]}`
-->

<a id="classansys-dpf-unit-1af2bd161c5fa67f3f9bf58b9441692753"></a>
### Function Unit

![][public]


```cpp
ansys::dpf::Unit::Unit(Homogeneity const &homogeneity, UnitSystem const &unit_system)
```




Create a [Unit](classansys-dpf-unit.md#classansys-dpf-unit) with a given homogeneity from given unit_system.



**Parameters**:

* [Homogeneity](classansys-dpf-homogeneity.md#classansys-dpf-homogeneity) const & **homogeneity**: [in] Measurement quantity.
* [UnitSystem](structansys-dpf-unitsystem.md#structansys-dpf-unitsystem) const & **unit_system**: [in] [Unit](classansys-dpf-unit.md#classansys-dpf-unit) system from which to create unit.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Unit::Unit"}]}`
-->

<a id="classansys-dpf-unit-1a45db3ce814a1fc50bc7cea8bab197005"></a>
### Function Unit

![][public]


```cpp
ansys::dpf::Unit::Unit(Homogeneity const &homogeneity, std::string const &symbol)
```




Create a [Unit](classansys-dpf-unit.md#classansys-dpf-unit) with a given homogeneity and a given symbol.



**Parameters**:

* [Homogeneity](classansys-dpf-homogeneity.md#classansys-dpf-homogeneity) const & **homogeneity**: [in] Measurement quantity.
* std::string const & **symbol**: [in] Symbol name of unit.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Unit::Unit"}]}`
-->

<a id="classansys-dpf-unit-1a7fec3a530cb4a824b017781c476134d2"></a>
### Function operator==

![][public]
![][const]


```cpp
bool ansys::dpf::Unit::operator==(Unit const &unit) const
```








**Parameters**:

* Unit const & **unit**

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Unit::operator=="}]}`
-->

<a id="classansys-dpf-unit-1a8ca3445a56c372fd3734b5a7d00537f1"></a>
### Function conversionFactorTo

![][public]
![][const]


```cpp
double ansys::dpf::Unit::conversionFactorTo(Unit const &rhs) const
```




**Returns**:

Multiplication factor required to convert to new unit system.



**Parameters**:

* Unit const & **rhs**: [in] [Unit](classansys-dpf-unit.md#classansys-dpf-unit) system to which to convert.

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Unit::conversionFactorTo"}]}`
-->

<a id="classansys-dpf-unit-1a93b566af024726b9b9e2c0687976b10a"></a>
### Function shiftTo

![][public]
![][const]


```cpp
double ansys::dpf::Unit::shiftTo(Unit const &rhs) const
```




**Returns**:

Additive factor required to convert to new unit system.



**Parameters**:

* Unit const & **rhs**: [in] [Unit](classansys-dpf-unit.md#classansys-dpf-unit) system to which to convert.

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Unit::shiftTo"}]}`
-->

<a id="classansys-dpf-unit-1af4a5b081eaec3c708f1488f6191b397e"></a>
### Function isHomogeneousTo

![][public]
![][const]


```cpp
bool ansys::dpf::Unit::isHomogeneousTo(Unit const &) const
```




**Returns**:

Indication of same measurement quantities.



**Parameters**:

* Unit const &

**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Unit::isHomogeneousTo"}]}`
-->

<a id="classansys-dpf-unit-1a2ca6139006413a975a4995505ab826fc"></a>
### Function homogeneity

![][public]
![][const]


```cpp
ansys::dpf::Homogeneity const  & ansys::dpf::Unit::homogeneity() const
```




**Returns**:

Measurement quantity.



**Return type**: [ansys::dpf::Homogeneity](classansys-dpf-homogeneity.md#classansys-dpf-homogeneity) const &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Unit::homogeneity"}]}`
-->

<a id="classansys-dpf-unit-1aed255d78340372d1dd05461d8bc29d38"></a>
### Function toString

![][public]
![][const]


```cpp
std::string const  & ansys::dpf::Unit::toString() const
```




**Returns**:

Symbol name.



**Return type**: std::string const &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Unit::toString"}]}`
-->

<a id="classansys-dpf-unit-1af130c0a87a7006258b3fb1e8b83d785b"></a>
### Function c_str

![][public]
![][const]


```cpp
const char * ansys::dpf::Unit::c_str() const
```




**Returns**:

Symbol name.



**Return type**: const char *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Unit::c_str"}]}`
-->

<a id="classansys-dpf-unit-1ae55af41a7a8ed1d0a41a5468b74e7d34"></a>
### Function multiplyWith

![][public]
![][const]


```cpp
Unit ansys::dpf::Unit::multiplyWith(Unit const &rhs) const
```




**Returns**:

new unit that is the product of this unit and another one.

Works only for in process API.



**Parameters**:

* Unit const & **rhs**

**Return type**: Unit

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Unit::multiplyWith"}]}`
-->

<a id="classansys-dpf-unit-1af8033c3d0b41a3ea626221e21a7efce7"></a>
### Function divideBy

![][public]
![][const]


```cpp
Unit ansys::dpf::Unit::divideBy(Unit const &rhs) const
```




**Returns**:

new unit that is the division of this unit by another one.

Works only for in process API.



**Parameters**:

* Unit const & **rhs**

**Return type**: Unit

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Unit::divideBy"}]}`
-->

<a id="classansys-dpf-unit-1adfd11657f700e8a4061d56aba08198ba"></a>
### Function invert

![][public]
![][const]


```cpp
Unit ansys::dpf::Unit::invert() const
```




**Returns**:

new the inverse unit to this one.

Works only for in process API.



**Return type**: Unit

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Unit::invert"}]}`
-->

<a id="classansys-dpf-unit-1a9fe7810a66d3e479ad4dccff226933d8"></a>
### Function pow

![][public]
![][const]


```cpp
Unit ansys::dpf::Unit::pow(double power) const
```




**Returns**:

the powed unit.

Works only for in process API.



**Parameters**:

* double **power**

**Return type**: Unit

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Unit::pow"}]}`
-->

## Public static functions

<a id="classansys-dpf-unit-1a902fcfaa2fd6df783400f963d557c357"></a>
### Function HomogeneityIdToHomogeneity

![][public]
![][static]


```cpp
static Homogeneity ansys::dpf::Unit::HomogeneityIdToHomogeneity(int id)
```




**Returns**:

the homogeneity corresponding to a homogeneity id



**Parameters**:

* int **id**

**Return type**: [Homogeneity](classansys-dpf-homogeneity.md#classansys-dpf-homogeneity)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Unit::HomogeneityIdToHomogeneity"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)