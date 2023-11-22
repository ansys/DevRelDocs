<a id="structansys_1_1dpf_1_1quantity__types"></a>
# Structure ansys::dpf::quantity\_types

![][C++]
![][public]

**Definition**: `dpf\_api\_base.h` (line 90)

Predefined quantity types.

Data is defined with a quantity type.

## Members

* [\_existing\_quantity\_types](structansys_1_1dpf_1_1quantity__types.md#structansys_1_1dpf_1_1quantity__types_1a58fe45f1c17d242148f181d23d80b1e3)
* [add\_custom](structansys_1_1dpf_1_1quantity__types.md#structansys_1_1dpf_1_1quantity__types_1a32aaa6266dab39ee8aeb01f81f6ba327)
* [all](structansys_1_1dpf_1_1quantity__types.md#structansys_1_1dpf_1_1quantity__types_1ae46021a085dc4a9c826054e8789bb372)
* [continuous](structansys_1_1dpf_1_1quantity__types.md#structansys_1_1dpf_1_1quantity__types_1a8c7ced680f31c1cc9bb219c14641c29f)
* [discret](structansys_1_1dpf_1_1quantity__types.md#structansys_1_1dpf_1_1quantity__types_1aaeedb3e644391be386435c1a358cf3d3)
* [frequency](structansys_1_1dpf_1_1quantity__types.md#structansys_1_1dpf_1_1quantity__types_1aafd216e8bd12a3ea87d44fa0d893fce1)
* [increment](structansys_1_1dpf_1_1quantity__types.md#structansys_1_1dpf_1_1quantity__types_1a52a2e8c72ef5af56a6732717fa2facd9)
* [integrated](structansys_1_1dpf_1_1quantity__types.md#structansys_1_1dpf_1_1quantity__types_1ad18a5fed8aaa1182529aa96e37757347)
* [mode](structansys_1_1dpf_1_1quantity__types.md#structansys_1_1dpf_1_1quantity__types_1a37b69863399f1749845f812e405605b5)
* [position](structansys_1_1dpf_1_1quantity__types.md#structansys_1_1dpf_1_1quantity__types_1a34af00c2bbea7d4a10dc8fd21f13f7b2)
* [time](structansys_1_1dpf_1_1quantity__types.md#structansys_1_1dpf_1_1quantity__types_1ac66abf24f8860b9c74f9196ce770ec52)
* [unknown](structansys_1_1dpf_1_1quantity__types.md#structansys_1_1dpf_1_1quantity__types_1af098512bba4229bfb8996c55dc979ec6)

## Private static attributes

<a id="structansys_1_1dpf_1_1quantity__types_1a58fe45f1c17d242148f181d23d80b1e3"></a>
### Variable \_existing\_quantity\_types

![][private]
![][static]

**Definition**: `dpf\_api\_base.h` (line 93)

```cpp
std::vector<QuantityType> ansys::dpf::quantity_types::_existing_quantity_types
```







**Type**: std::vector< [QuantityType](structansys_1_1dpf_1_1QuantityType.md#structansys_1_1dpf_1_1QuantityType) >

## Public static attributes

<a id="structansys_1_1dpf_1_1quantity__types_1aaeedb3e644391be386435c1a358cf3d3"></a>
### Variable discret

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 103)

```cpp
const QuantityType ansys::dpf::quantity_types::discret
```



Predefined discret quantity type, can not be interpolated.



**Type**: const [QuantityType](structansys_1_1dpf_1_1QuantityType.md#structansys_1_1dpf_1_1QuantityType)

<a id="structansys_1_1dpf_1_1quantity__types_1a8c7ced680f31c1cc9bb219c14641c29f"></a>
### Variable continuous

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 105)

```cpp
const QuantityType ansys::dpf::quantity_types::continuous
```



Predefined continuous quantity type.



**Type**: const [QuantityType](structansys_1_1dpf_1_1QuantityType.md#structansys_1_1dpf_1_1QuantityType)

<a id="structansys_1_1dpf_1_1quantity__types_1ad18a5fed8aaa1182529aa96e37757347"></a>
### Variable integrated

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 107)

```cpp
const QuantityType ansys::dpf::quantity_types::integrated
```



Predefined integrated quantity type, can not be averaged.



**Type**: const [QuantityType](structansys_1_1dpf_1_1QuantityType.md#structansys_1_1dpf_1_1QuantityType)

<a id="structansys_1_1dpf_1_1quantity__types_1a34af00c2bbea7d4a10dc8fd21f13f7b2"></a>
### Variable position

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 109)

```cpp
const QuantityType ansys::dpf::quantity_types::position
```



Predefined position quantity type.



**Type**: const [QuantityType](structansys_1_1dpf_1_1QuantityType.md#structansys_1_1dpf_1_1QuantityType)

<a id="structansys_1_1dpf_1_1quantity__types_1a52a2e8c72ef5af56a6732717fa2facd9"></a>
### Variable increment

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 111)

```cpp
const QuantityType ansys::dpf::quantity_types::increment
```



Predefined increment quantity type.



**Type**: const [QuantityType](structansys_1_1dpf_1_1QuantityType.md#structansys_1_1dpf_1_1QuantityType)

<a id="structansys_1_1dpf_1_1quantity__types_1ac66abf24f8860b9c74f9196ce770ec52"></a>
### Variable time

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 113)

```cpp
const QuantityType ansys::dpf::quantity_types::time
```



Predefined time quantity type.



**Type**: const [QuantityType](structansys_1_1dpf_1_1QuantityType.md#structansys_1_1dpf_1_1QuantityType)

<a id="structansys_1_1dpf_1_1quantity__types_1aafd216e8bd12a3ea87d44fa0d893fce1"></a>
### Variable frequency

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 115)

```cpp
const QuantityType ansys::dpf::quantity_types::frequency
```



Predefined frequency quantity type.



**Type**: const [QuantityType](structansys_1_1dpf_1_1QuantityType.md#structansys_1_1dpf_1_1QuantityType)

<a id="structansys_1_1dpf_1_1quantity__types_1a37b69863399f1749845f812e405605b5"></a>
### Variable mode

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 117)

```cpp
const QuantityType ansys::dpf::quantity_types::mode
```



Predefined mode quantity type.



**Type**: const [QuantityType](structansys_1_1dpf_1_1QuantityType.md#structansys_1_1dpf_1_1QuantityType)

<a id="structansys_1_1dpf_1_1quantity__types_1af098512bba4229bfb8996c55dc979ec6"></a>
### Variable unknown

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 120)

```cpp
const QuantityType ansys::dpf::quantity_types::unknown
```



Predefined unknown location.



**Type**: const [QuantityType](structansys_1_1dpf_1_1QuantityType.md#structansys_1_1dpf_1_1QuantityType)

## Public static functions

<a id="structansys_1_1dpf_1_1quantity__types_1ae46021a085dc4a9c826054e8789bb372"></a>
### Function all

![][public]
![][static]

```cpp
static std::vector<QuantityType> const& ansys::dpf::quantity_types::all()
```



Gets all user-defined and predefined quantities types. 
**Returns**:

All quantity types.



**Return type**: std::vector< [QuantityType](structansys_1_1dpf_1_1QuantityType.md#structansys_1_1dpf_1_1QuantityType) > const  &

<a id="structansys_1_1dpf_1_1quantity__types_1a32aaa6266dab39ee8aeb01f81f6ba327"></a>
### Function add\_custom

![][public]
![][static]

```cpp
static void ansys::dpf::quantity_types::add_custom(QuantityType const &)
```



Adds a custom defined location.



**Parameters**:

* [QuantityType](structansys_1_1dpf_1_1QuantityType.md#structansys_1_1dpf_1_1QuantityType) const &

**Return type**: void

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)