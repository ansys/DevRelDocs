<a id="structansys_1_1dpf_1_1locations"></a>
# Structure ansys::dpf::locations

![][C++]
![][public]

**Definition**: `dpf\_api\_base.h` (line 164)

Predefined location quantities.

Results are evaluated at locations. 

**See also**: [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location)

## Members

* [\_existing\_locations](structansys_1_1dpf_1_1locations.md#structansys_1_1dpf_1_1locations_1a2ba6480847faea7bb400aa585efde371)
* [add\_custom](structansys_1_1dpf_1_1locations.md#structansys_1_1dpf_1_1locations_1a2b734a87208388ed01d8cb587043405b)
* [all](structansys_1_1dpf_1_1locations.md#structansys_1_1dpf_1_1locations_1a271a9fed8a1f57c015715167a8ce72c0)
* [band](structansys_1_1dpf_1_1locations.md#structansys_1_1dpf_1_1locations_1a6441fe6518684351e3f3f7ba52396615)
* [body](structansys_1_1dpf_1_1locations.md#structansys_1_1dpf_1_1locations_1acfb36fa3e6c22d12b971fdf941d6dab8)
* [contact](structansys_1_1dpf_1_1locations.md#structansys_1_1dpf_1_1locations_1ae0384994ee793ef9de351b28c49ba706)
* [elemental](structansys_1_1dpf_1_1locations.md#structansys_1_1dpf_1_1locations_1a3f66169a86ab935fb398b3fdde98bb04)
* [elemental\_and\_faces](structansys_1_1dpf_1_1locations.md#structansys_1_1dpf_1_1locations_1a0a70014790184f7fd2e4341c2bdb7711)
* [elemental\_nodal](structansys_1_1dpf_1_1locations.md#structansys_1_1dpf_1_1locations_1a0bda534055805adc4c08bece34989ff3)
* [elemental\_nodal\_centroid](structansys_1_1dpf_1_1locations.md#structansys_1_1dpf_1_1locations_1a5b54316cebce849e6a8489d19a990246)
* [faces](structansys_1_1dpf_1_1locations.md#structansys_1_1dpf_1_1locations_1a111716841842157a978ebebdc9c503b6)
* [harmonic\_index](structansys_1_1dpf_1_1locations.md#structansys_1_1dpf_1_1locations_1a46ac72d7066346bc309dfb44de1a20cf)
* [joint](structansys_1_1dpf_1_1locations.md#structansys_1_1dpf_1_1locations_1a0a7d57a4476a34178090d4fa96f0c550)
* [nodal](structansys_1_1dpf_1_1locations.md#structansys_1_1dpf_1_1locations_1aa4e1967b0838d8597200c606c8564d29)
* [nodal\_elemental](structansys_1_1dpf_1_1locations.md#structansys_1_1dpf_1_1locations_1aba56d24e91e52e4742ee5505dff04b94)
* [overall](structansys_1_1dpf_1_1locations.md#structansys_1_1dpf_1_1locations_1ada5a62dea9a6a1bf156f90282a273959)
* [phase](structansys_1_1dpf_1_1locations.md#structansys_1_1dpf_1_1locations_1abaf9f2158d14707096139ab5eb27d70d)
* [species](structansys_1_1dpf_1_1locations.md#structansys_1_1dpf_1_1locations_1a76bdfc819d94d708b849281adf480677)
* [time\_set](structansys_1_1dpf_1_1locations.md#structansys_1_1dpf_1_1locations_1a3cf1bbc2ad6d8b8f6173e83b5118031a)
* [time\_step](structansys_1_1dpf_1_1locations.md#structansys_1_1dpf_1_1locations_1abc48364ef6b184ddf696099c9a2993cd)
* [topology](structansys_1_1dpf_1_1locations.md#structansys_1_1dpf_1_1locations_1a3049c32b1dc96441810bd53803916a58)
* [udf\_criteria](structansys_1_1dpf_1_1locations.md#structansys_1_1dpf_1_1locations_1af0cfa3922b89f1b5be079a47a714241a)
* [unknown](structansys_1_1dpf_1_1locations.md#structansys_1_1dpf_1_1locations_1a223dc0f57d600b9acf15ac72a603835c)
* [zone](structansys_1_1dpf_1_1locations.md#structansys_1_1dpf_1_1locations_1a2c1aea4cc98bb70ffb146a163121b8e4)

## Private static attributes

<a id="structansys_1_1dpf_1_1locations_1a2ba6480847faea7bb400aa585efde371"></a>
### Variable \_existing\_locations

![][private]
![][static]

**Definition**: `dpf\_api\_base.h` (line 167)


```cpp
std::vector<Location> ansys::dpf::locations::_existing_locations
```








**Type**: std::vector< [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location) >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::locations::_existing_locations"}]}`
-->

## Public static attributes

<a id="structansys_1_1dpf_1_1locations_1aa4e1967b0838d8597200c606c8564d29"></a>
### Variable nodal

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 177)


```cpp
const Location ansys::dpf::locations::nodal
```




Predefined nodal location.



**Type**: const [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::locations::nodal"}]}`
-->

<a id="structansys_1_1dpf_1_1locations_1a3f66169a86ab935fb398b3fdde98bb04"></a>
### Variable elemental

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 179)


```cpp
const Location ansys::dpf::locations::elemental
```




Predefined elemental location.



**Type**: const [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::locations::elemental"}]}`
-->

<a id="structansys_1_1dpf_1_1locations_1a0bda534055805adc4c08bece34989ff3"></a>
### Variable elemental\_nodal

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 181)


```cpp
const Location ansys::dpf::locations::elemental_nodal
```




Predefined elemental_nodal location.



**Type**: const [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::locations::elemental_nodal"}]}`
-->

<a id="structansys_1_1dpf_1_1locations_1a5b54316cebce849e6a8489d19a990246"></a>
### Variable elemental\_nodal\_centroid

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 183)


```cpp
const Location ansys::dpf::locations::elemental_nodal_centroid
```




Predefined elemental_nodal_centroid location.



**Type**: const [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::locations::elemental_nodal_centroid"}]}`
-->

<a id="structansys_1_1dpf_1_1locations_1ada5a62dea9a6a1bf156f90282a273959"></a>
### Variable overall

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 185)


```cpp
const Location ansys::dpf::locations::overall
```




Predefined overall location.



**Type**: const [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::locations::overall"}]}`
-->

<a id="structansys_1_1dpf_1_1locations_1aba56d24e91e52e4742ee5505dff04b94"></a>
### Variable nodal\_elemental

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 187)


```cpp
const Location ansys::dpf::locations::nodal_elemental
```




Predefined nodal_elemental location.



**Type**: const [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::locations::nodal_elemental"}]}`
-->

<a id="structansys_1_1dpf_1_1locations_1a111716841842157a978ebebdc9c503b6"></a>
### Variable faces

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 189)


```cpp
const Location ansys::dpf::locations::faces
```




Predefined faces location.



**Type**: const [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::locations::faces"}]}`
-->

<a id="structansys_1_1dpf_1_1locations_1a0a70014790184f7fd2e4341c2bdb7711"></a>
### Variable elemental\_and\_faces

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 191)


```cpp
const Location ansys::dpf::locations::elemental_and_faces
```




Predefined elemental_and_faces location.



**Type**: const [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::locations::elemental_and_faces"}]}`
-->

<a id="structansys_1_1dpf_1_1locations_1acfb36fa3e6c22d12b971fdf941d6dab8"></a>
### Variable body

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 193)


```cpp
const Location ansys::dpf::locations::body
```




Predefined body location.



**Type**: const [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::locations::body"}]}`
-->

<a id="structansys_1_1dpf_1_1locations_1ae0384994ee793ef9de351b28c49ba706"></a>
### Variable contact

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 195)


```cpp
const Location ansys::dpf::locations::contact
```




Predefined contact location.



**Type**: const [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::locations::contact"}]}`
-->

<a id="structansys_1_1dpf_1_1locations_1a0a7d57a4476a34178090d4fa96f0c550"></a>
### Variable joint

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 197)


```cpp
const Location ansys::dpf::locations::joint
```




Predefined joint location.



**Type**: const [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::locations::joint"}]}`
-->

<a id="structansys_1_1dpf_1_1locations_1a3049c32b1dc96441810bd53803916a58"></a>
### Variable topology

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 199)


```cpp
const Location ansys::dpf::locations::topology
```




Predefined topology location.



**Type**: const [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::locations::topology"}]}`
-->

<a id="structansys_1_1dpf_1_1locations_1af0cfa3922b89f1b5be079a47a714241a"></a>
### Variable udf\_criteria

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 201)


```cpp
const Location ansys::dpf::locations::udf_criteria
```




Predefined udf_criteria location.



**Type**: const [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::locations::udf_criteria"}]}`
-->

<a id="structansys_1_1dpf_1_1locations_1abc48364ef6b184ddf696099c9a2993cd"></a>
### Variable time\_step

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 203)


```cpp
const Location ansys::dpf::locations::time_step
```




Predefined time_step location.



**Type**: const [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::locations::time_step"}]}`
-->

<a id="structansys_1_1dpf_1_1locations_1a3cf1bbc2ad6d8b8f6173e83b5118031a"></a>
### Variable time\_set

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 205)


```cpp
const Location ansys::dpf::locations::time_set
```




Predefined time_set location.



**Type**: const [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::locations::time_set"}]}`
-->

<a id="structansys_1_1dpf_1_1locations_1a46ac72d7066346bc309dfb44de1a20cf"></a>
### Variable harmonic\_index

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 207)


```cpp
const Location ansys::dpf::locations::harmonic_index
```




Predefined harmonic_index location.



**Type**: const [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::locations::harmonic_index"}]}`
-->

<a id="structansys_1_1dpf_1_1locations_1abaf9f2158d14707096139ab5eb27d70d"></a>
### Variable phase

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 209)


```cpp
const Location ansys::dpf::locations::phase
```




Predefined phase location.



**Type**: const [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::locations::phase"}]}`
-->

<a id="structansys_1_1dpf_1_1locations_1a76bdfc819d94d708b849281adf480677"></a>
### Variable species

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 211)


```cpp
const Location ansys::dpf::locations::species
```




Predefined species location.



**Type**: const [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::locations::species"}]}`
-->

<a id="structansys_1_1dpf_1_1locations_1a2c1aea4cc98bb70ffb146a163121b8e4"></a>
### Variable zone

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 213)


```cpp
const Location ansys::dpf::locations::zone
```




Predefined zones location.



**Type**: const [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::locations::zone"}]}`
-->

<a id="structansys_1_1dpf_1_1locations_1a6441fe6518684351e3f3f7ba52396615"></a>
### Variable band

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 215)


```cpp
const Location ansys::dpf::locations::band
```




Predefined band location.



**Type**: const [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::locations::band"}]}`
-->

<a id="structansys_1_1dpf_1_1locations_1a223dc0f57d600b9acf15ac72a603835c"></a>
### Variable unknown

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 217)


```cpp
const Location ansys::dpf::locations::unknown
```




Predefined unknown location.



**Type**: const [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::locations::unknown"}]}`
-->

## Public static functions

<a id="structansys_1_1dpf_1_1locations_1a271a9fed8a1f57c015715167a8ce72c0"></a>
### Function all

![][public]
![][static]


```cpp
static std::vector< Location > const  & ansys::dpf::locations::all()
```




Gets all user-defined and predefined locations. 
**Returns**:

All locations.



**Return type**: std::vector< [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location) > const &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::locations::all"}]}`
-->

<a id="structansys_1_1dpf_1_1locations_1a2b734a87208388ed01d8cb587043405b"></a>
### Function add\_custom

![][public]
![][static]


```cpp
static void ansys::dpf::locations::add_custom(Location const &)
```




Adds a custom defined location.



**Parameters**:

* [Location](structansys_1_1dpf_1_1Location.md#structansys_1_1dpf_1_1Location) const &

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::locations::add_custom"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)