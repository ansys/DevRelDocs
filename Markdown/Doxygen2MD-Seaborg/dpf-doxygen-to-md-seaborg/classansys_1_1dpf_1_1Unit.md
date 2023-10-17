<a id="classansys_1_1dpf_1_1Unit"></a>
# Class ansys::dpf::Unit

![][C++]
![][public]

**Definition**: `dpf\_api.h` (line 225)



Definition of a unit.

## Members

* [\_homo](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1a014762fb8e86eb940385dd8e538011bb)
* [\_symbol](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1a4372f8b13cf1da6c3036430303d9765f)
* [c\_str](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1a162cecd466c06b2349677b1b042725f7)
* [conversionFactorTo](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1a8ca3445a56c372fd3734b5a7d00537f1)
* [homogeneity](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1a3751d2190e447351e436af02ce350a8a)
* [isHomogeneousTo](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1af4a5b081eaec3c708f1488f6191b397e)
* [operator==](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1a7fec3a530cb4a824b017781c476134d2)
* [shiftTo](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1a93b566af024726b9b9e2c0687976b10a)
* [toString](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1a88d468246bd8443ff401bf3d7259e127)
* [Unit](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1a3a9ceab17e3c6f63fed02c704fb8ce0d)
* [Unit](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1aa05714fa7ba83322ad7c7e44a7d4da8f)
* [Unit](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit_1af2bd161c5fa67f3f9bf58b9441692753)

## Private attributes

<a id="classansys_1_1dpf_1_1Unit_1a014762fb8e86eb940385dd8e538011bb"></a>
### Variable \_homo

![][private]

**Definition**: `dpf\_api.h` (line 228)

```cpp
Homogeneity ansys::dpf::Unit::_homo
```







**Type**: [Homogeneity](classansys_1_1dpf_1_1Homogeneity.md#classansys_1_1dpf_1_1Homogeneity)

<a id="classansys_1_1dpf_1_1Unit_1a4372f8b13cf1da6c3036430303d9765f"></a>
### Variable \_symbol

![][private]

**Definition**: `dpf\_api.h` (line 229)

```cpp
std::string ansys::dpf::Unit::_symbol
```







**Type**: std::string

## Public functions

<a id="classansys_1_1dpf_1_1Unit_1a3a9ceab17e3c6f63fed02c704fb8ce0d"></a>
### Function Unit

![][public]

```cpp
ansys::dpf::Unit::Unit()
```







**Return type**: 

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

<a id="classansys_1_1dpf_1_1Unit_1a7fec3a530cb4a824b017781c476134d2"></a>
### Function operator==

![][public]
![][const]

```cpp
bool ansys::dpf::Unit::operator==(Unit const &unit) const
```







**Parameters**:

* [Unit](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit) const & **unit**

**Return type**: bool

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

* [Unit](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit) const & **rhs**: [in] [Unit](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit) system to which to convert.

**Return type**: double

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

* [Unit](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit) const & **rhs**: [in] [Unit](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit) system to which to convert.

**Return type**: double

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

* [Unit](classansys_1_1dpf_1_1Unit.md#classansys_1_1dpf_1_1Unit) const &

**Return type**: bool

<a id="classansys_1_1dpf_1_1Unit_1a3751d2190e447351e436af02ce350a8a"></a>
### Function homogeneity

![][public]
![][const]

```cpp
ansys::dpf::Homogeneity const& ansys::dpf::Unit::homogeneity() const
```



**Returns**:

Measurement quantity.



**Return type**: [ansys::dpf::Homogeneity](classansys_1_1dpf_1_1Homogeneity.md#classansys_1_1dpf_1_1Homogeneity) const  &

<a id="classansys_1_1dpf_1_1Unit_1a88d468246bd8443ff401bf3d7259e127"></a>
### Function toString

![][public]
![][const]

```cpp
std::string const& ansys::dpf::Unit::toString() const
```



**Returns**:

Symbol name.



**Return type**: std::string const  &

<a id="classansys_1_1dpf_1_1Unit_1a162cecd466c06b2349677b1b042725f7"></a>
### Function c\_str

![][public]
![][const]

```cpp
const char* ansys::dpf::Unit::c_str() const
```



**Returns**:

Symbol name.



**Return type**: const char *

**TODO**:

* includes {"type":"element","name":"includes","attributes":{"local":"no"},"children":[{"type":"text","text":"dpf_api.h"}]}

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)