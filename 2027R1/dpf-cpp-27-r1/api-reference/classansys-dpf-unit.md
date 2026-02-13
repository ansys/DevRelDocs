<a id="classansys_1_1dpf_1_1Unit"></a>
# Class ansys::dpf::Unit

![][C++]
![][public]

**Definition**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/dpf\_api.h` (line 333)

Definition of a unit.

## Members

* [\_homo](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1a014762fb8e86eb940385dd8e538011bb)
* [\_symbol](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1a4372f8b13cf1da6c3036430303d9765f)
* [c\_str](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1af130c0a87a7006258b3fb1e8b83d785b)
* [conversionFactorTo](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1a8ca3445a56c372fd3734b5a7d00537f1)
* [divideBy](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1af8033c3d0b41a3ea626221e21a7efce7)
* [homogeneity](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1a2ca6139006413a975a4995505ab826fc)
* [HomogeneityIdToHomogeneity](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1a902fcfaa2fd6df783400f963d557c357)
* [invert](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1adfd11657f700e8a4061d56aba08198ba)
* [isHomogeneousTo](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1af4a5b081eaec3c708f1488f6191b397e)
* [multiplyWith](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1ae55af41a7a8ed1d0a41a5468b74e7d34)
* [operator==](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1a7fec3a530cb4a824b017781c476134d2)
* [pow](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1a9fe7810a66d3e479ad4dccff226933d8)
* [shiftTo](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1a93b566af024726b9b9e2c0687976b10a)
* [toString](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1aed255d78340372d1dd05461d8bc29d38)
* [Unit](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1a3a9ceab17e3c6f63fed02c704fb8ce0d)
* [Unit](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1aa05714fa7ba83322ad7c7e44a7d4da8f)
* [Unit](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1af2bd161c5fa67f3f9bf58b9441692753)
* [Unit](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1a45db3ce814a1fc50bc7cea8bab197005)

## Private attributes

## Public functions

<a id="classansys_1_1dpf_1_1Unit_1a3a9ceab17e3c6f63fed02c704fb8ce0d"></a>
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

<a id="classansys_1_1dpf_1_1Unit_1aa05714fa7ba83322ad7c7e44a7d4da8f"></a>
### Function Unit

![][public]

```cpp
ansys::dpf::Unit::Unit(std::string const &symbol)
```

Create a [Unit](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit) with given name.

**Parameters**:

* std::string const & **symbol**: [in] Symbol name of unit.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Unit::Unit"}]}`
-->

<a id="classansys_1_1dpf_1_1Unit_1af2bd161c5fa67f3f9bf58b9441692753"></a>
### Function Unit

![][public]

```cpp
ansys::dpf::Unit::Unit(Homogeneity const &homogeneity, UnitSystem const &unit_system)
```

Create a [Unit](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit) with a given homogeneity from given unit_system.

**Parameters**:

* [Homogeneity](classansys_1_1dpf_1_1Homogeneity.md#classansys_1_1dpf_1_1Homogeneity) const & **homogeneity**: [in] Measurement quantity.
* [UnitSystem](structansys_1_1dpf_1_1UnitSystem.md#structansys_1_1dpf_1_1UnitSystem) const & **unit_system**: [in] [Unit](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit) system from which to create unit.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Unit::Unit"}]}`
-->

<a id="classansys_1_1dpf_1_1Unit_1a45db3ce814a1fc50bc7cea8bab197005"></a>
### Function Unit

![][public]

```cpp
ansys::dpf::Unit::Unit(Homogeneity const &homogeneity, std::string const &symbol)
```

Create a [Unit](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit) with a given homogeneity and a given symbol.

**Parameters**:

* [Homogeneity](classansys_1_1dpf_1_1Homogeneity.md#classansys_1_1dpf_1_1Homogeneity) const & **homogeneity**: [in] Measurement quantity.
* std::string const & **symbol**: [in] Symbol name of unit.

**Return type**: 

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Unit::Unit"}]}`
-->

<a id="classansys_1_1dpf_1_1Unit_1a7fec3a530cb4a824b017781c476134d2"></a>
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

<a id="classansys_1_1dpf_1_1Unit_1a8ca3445a56c372fd3734b5a7d00537f1"></a>
### Function conversionFactorTo

![][public]
![][const]

```cpp
double ansys::dpf::Unit::conversionFactorTo(Unit const &rhs) const
```

**Returns**:

Multiplication factor required to convert to new unit system.

**Parameters**:

* Unit const & **rhs**: [in] [Unit](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit) system to which to convert.

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Unit::conversionFactorTo"}]}`
-->

<a id="classansys_1_1dpf_1_1Unit_1a93b566af024726b9b9e2c0687976b10a"></a>
### Function shiftTo

![][public]
![][const]

```cpp
double ansys::dpf::Unit::shiftTo(Unit const &rhs) const
```

**Returns**:

Additive factor required to convert to new unit system.

**Parameters**:

* Unit const & **rhs**: [in] [Unit](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit) system to which to convert.

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Unit::shiftTo"}]}`
-->

<a id="classansys_1_1dpf_1_1Unit_1af4a5b081eaec3c708f1488f6191b397e"></a>
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

<a id="classansys_1_1dpf_1_1Unit_1a2ca6139006413a975a4995505ab826fc"></a>
### Function homogeneity

![][public]
![][const]

```cpp
ansys::dpf::Homogeneity const  & ansys::dpf::Unit::homogeneity() const
```

**Returns**:

Measurement quantity.

**Return type**: [ansys::dpf::Homogeneity](classansys_1_1dpf_1_1Homogeneity.md#classansys_1_1dpf_1_1Homogeneity) const &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Unit::homogeneity"}]}`
-->

<a id="classansys_1_1dpf_1_1Unit_1aed255d78340372d1dd05461d8bc29d38"></a>
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

<a id="classansys_1_1dpf_1_1Unit_1af130c0a87a7006258b3fb1e8b83d785b"></a>
### Function c\_str

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

<a id="classansys_1_1dpf_1_1Unit_1ae55af41a7a8ed1d0a41a5468b74e7d34"></a>
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

<a id="classansys_1_1dpf_1_1Unit_1af8033c3d0b41a3ea626221e21a7efce7"></a>
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

<a id="classansys_1_1dpf_1_1Unit_1adfd11657f700e8a4061d56aba08198ba"></a>
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

<a id="classansys_1_1dpf_1_1Unit_1a9fe7810a66d3e479ad4dccff226933d8"></a>
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

<a id="classansys_1_1dpf_1_1Unit_1a902fcfaa2fd6df783400f963d557c357"></a>
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

**Return type**: [Homogeneity](classansys_1_1dpf_1_1Homogeneity.md#classansys_1_1dpf_1_1Homogeneity)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::Unit::HomogeneityIdToHomogeneity"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}`
-->

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)