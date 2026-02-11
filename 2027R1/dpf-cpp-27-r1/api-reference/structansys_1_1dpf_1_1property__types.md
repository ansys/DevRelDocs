<a id="structansys_1_1dpf_1_1property__types"></a>
# Structure ansys::dpf::property\_types

![][C++]
![][public]

**Definition**: `dpf\_api\_base.h` (line 246)



Predefined property types.

## Members

* [\_existing\_props](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types_1ae632da7ba6f924afd81d0734274be49d)
* [add\_custom](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types_1ad26ecf69fb0bcf015b52fdd55977b419)
* [all](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types_1a615a7b62841a0bc1ccbe546e284bec73)
* [apdl\_element\_type](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types_1a9cc9c60cd0efd36522e1f9081a002019)
* [cell\_zone\_id](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types_1acf54e38c914e28ec161dec13d6e26937)
* [connectivity](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types_1a635e2eac0083346df7a0403deae50a73)
* [coordinates](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types_1a4ea0c81e428eb05163fdde6038ea8064)
* [element\_properties](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types_1aa4fbbcfd27fb23722ee70e8785b06102)
* [element\_shape](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types_1af406e925d304de3e757eb3866e23368a)
* [element\_type](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types_1aa501bd7caa4d1252a5a0e8d12dbaa355)
* [elements\_faces\_connectivity](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types_1ad3ae6e46a0dcaf86c45205a4a3adb306)
* [elements\_faces\_reversed](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types_1accf10b5281ea85cdbb8584eee12fa9ac)
* [face\_zone\_id](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types_1a330d0c4eee86652fc54cf20b738f126d)
* [faces\_nodes\_connectivity](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types_1a045cec6548d902ddedea643c669ab466)
* [faces\_type](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types_1a71123bf897aaf8e883cd842e35f4ac85)
* [harmonic\_indices](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types_1a2d71c67f4c7a99ce657ac4c914b3d587)
* [imaginary\_freqs](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types_1a277a217dc4bf085ecde7042a188bb5f6)
* [imaginary\_freqs\_cumulative\_ids](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types_1a09ed687d86b7f75af9fef606d731660f)
* [imaginary\_freqs\_substep\_ids](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types_1ad098d8385b4950f536341b64984f8606)
* [material](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types_1aa4f6eaec75972b7eb1d0fe17a8ccf08a)
* [names](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types_1a0c7aacd1e99cffec129755334e247207)
* [part\_id](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types_1ae937b4e4dd19ad9f03978fd8353378de)
* [rpms](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types_1ae07aa6d83c8a542d894a0a305248d739)
* [section](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types_1a20bd60975a0c8d2243fb3a86099f99ea)
* [time\_freqs](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types_1ac5e5820dbebb1d236312d401cecf4b0a)
* [time\_freqs\_cumulative\_ids](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types_1a922015c78fa0f6a14f44f144e59025fe)
* [time\_freqs\_substep\_ids](structansys_1_1dpf_1_1property__types.md#structansys_1_1dpf_1_1property__types_1a1af51362a7b4941165493d13b1e4d116)

## Private static attributes

<a id="structansys_1_1dpf_1_1property__types_1ae632da7ba6f924afd81d0734274be49d"></a>
### Variable \_existing\_props

![][private]
![][static]

**Definition**: `dpf\_api\_base.h` (line 249)


```cpp
std::vector<PropertyType> ansys::dpf::property_types::_existing_props
```








**Type**: std::vector< [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType) >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::property_types::_existing_props"}]}`
-->

## Public static attributes

<a id="structansys_1_1dpf_1_1property__types_1aa4f6eaec75972b7eb1d0fe17a8ccf08a"></a>
### Variable material

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 259)


```cpp
const PropertyType ansys::dpf::property_types::material
```




Predefined material property type.



**Type**: const [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::property_types::material"}]}`
-->

<a id="structansys_1_1dpf_1_1property__types_1af406e925d304de3e757eb3866e23368a"></a>
### Variable element\_shape

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 261)


```cpp
const PropertyType ansys::dpf::property_types::element_shape
```




Predefined element_shape property type.



**Type**: const [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::property_types::element_shape"}]}`
-->

<a id="structansys_1_1dpf_1_1property__types_1aa501bd7caa4d1252a5a0e8d12dbaa355"></a>
### Variable element\_type

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 263)


```cpp
const PropertyType ansys::dpf::property_types::element_type
```




Predefined element_type property type.



**Type**: const [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::property_types::element_type"}]}`
-->

<a id="structansys_1_1dpf_1_1property__types_1aa4fbbcfd27fb23722ee70e8785b06102"></a>
### Variable element\_properties

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 265)


```cpp
const PropertyType ansys::dpf::property_types::element_properties
```




Predefined element_properties property type.



**Type**: const [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::property_types::element_properties"}]}`
-->

<a id="structansys_1_1dpf_1_1property__types_1a635e2eac0083346df7a0403deae50a73"></a>
### Variable connectivity

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 267)


```cpp
const PropertyType ansys::dpf::property_types::connectivity
```




Predefined connectivity property type.



**Type**: const [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::property_types::connectivity"}]}`
-->

<a id="structansys_1_1dpf_1_1property__types_1a9cc9c60cd0efd36522e1f9081a002019"></a>
### Variable apdl\_element\_type

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 269)


```cpp
const PropertyType ansys::dpf::property_types::apdl_element_type
```




Predefined apdl_element_type property type.



**Type**: const [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::property_types::apdl_element_type"}]}`
-->

<a id="structansys_1_1dpf_1_1property__types_1a045cec6548d902ddedea643c669ab466"></a>
### Variable faces\_nodes\_connectivity

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 271)


```cpp
const PropertyType ansys::dpf::property_types::faces_nodes_connectivity
```




Predefined faces_nodes_connectivity property type.



**Type**: const [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::property_types::faces_nodes_connectivity"}]}`
-->

<a id="structansys_1_1dpf_1_1property__types_1ad3ae6e46a0dcaf86c45205a4a3adb306"></a>
### Variable elements\_faces\_connectivity

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 273)


```cpp
const PropertyType ansys::dpf::property_types::elements_faces_connectivity
```




Predefined elements_faces_connectivity property type.



**Type**: const [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::property_types::elements_faces_connectivity"}]}`
-->

<a id="structansys_1_1dpf_1_1property__types_1accf10b5281ea85cdbb8584eee12fa9ac"></a>
### Variable elements\_faces\_reversed

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 275)


```cpp
const PropertyType ansys::dpf::property_types::elements_faces_reversed
```




Predefined elements_faces_reversed property type.



**Type**: const [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::property_types::elements_faces_reversed"}]}`
-->

<a id="structansys_1_1dpf_1_1property__types_1a4ea0c81e428eb05163fdde6038ea8064"></a>
### Variable coordinates

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 277)


```cpp
const PropertyType ansys::dpf::property_types::coordinates
```




Predefined coordinates property type.



**Type**: const [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::property_types::coordinates"}]}`
-->

<a id="structansys_1_1dpf_1_1property__types_1a71123bf897aaf8e883cd842e35f4ac85"></a>
### Variable faces\_type

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 279)


```cpp
const PropertyType ansys::dpf::property_types::faces_type
```




Predefined faces_type property type.



**Type**: const [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::property_types::faces_type"}]}`
-->

<a id="structansys_1_1dpf_1_1property__types_1ac5e5820dbebb1d236312d401cecf4b0a"></a>
### Variable time\_freqs

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 281)


```cpp
const PropertyType ansys::dpf::property_types::time_freqs
```




Predefined time_freqs [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport) property type.



**Type**: const [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::property_types::time_freqs"}]}`
-->

<a id="structansys_1_1dpf_1_1property__types_1a277a217dc4bf085ecde7042a188bb5f6"></a>
### Variable imaginary\_freqs

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 283)


```cpp
const PropertyType ansys::dpf::property_types::imaginary_freqs
```




Predefined imaginary_freqs [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport) property type.



**Type**: const [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::property_types::imaginary_freqs"}]}`
-->

<a id="structansys_1_1dpf_1_1property__types_1ae07aa6d83c8a542d894a0a305248d739"></a>
### Variable rpms

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 285)


```cpp
const PropertyType ansys::dpf::property_types::rpms
```




Predefined rpms [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport) property type.



**Type**: const [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::property_types::rpms"}]}`
-->

<a id="structansys_1_1dpf_1_1property__types_1a2d71c67f4c7a99ce657ac4c914b3d587"></a>
### Variable harmonic\_indices

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 287)


```cpp
const PropertyType ansys::dpf::property_types::harmonic_indices
```




Predefined harmonic_indices [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport) property type.



**Type**: const [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::property_types::harmonic_indices"}]}`
-->

<a id="structansys_1_1dpf_1_1property__types_1a1af51362a7b4941165493d13b1e4d116"></a>
### Variable time\_freqs\_substep\_ids

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 289)


```cpp
const PropertyType ansys::dpf::property_types::time_freqs_substep_ids
```




Predefined time_freqs_substep_ids [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport) property type.



**Type**: const [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::property_types::time_freqs_substep_ids"}]}`
-->

<a id="structansys_1_1dpf_1_1property__types_1a922015c78fa0f6a14f44f144e59025fe"></a>
### Variable time\_freqs\_cumulative\_ids

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 291)


```cpp
const PropertyType ansys::dpf::property_types::time_freqs_cumulative_ids
```




Predefined time_freqs_cumulative_ids [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport) property type.



**Type**: const [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::property_types::time_freqs_cumulative_ids"}]}`
-->

<a id="structansys_1_1dpf_1_1property__types_1ad098d8385b4950f536341b64984f8606"></a>
### Variable imaginary\_freqs\_substep\_ids

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 293)


```cpp
const PropertyType ansys::dpf::property_types::imaginary_freqs_substep_ids
```




Predefined imaginary_freqs_substep_ids [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport) property type.



**Type**: const [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::property_types::imaginary_freqs_substep_ids"}]}`
-->

<a id="structansys_1_1dpf_1_1property__types_1a09ed687d86b7f75af9fef606d731660f"></a>
### Variable imaginary\_freqs\_cumulative\_ids

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 295)


```cpp
const PropertyType ansys::dpf::property_types::imaginary_freqs_cumulative_ids
```




Predefined imaginary_freqs_cumulative_ids [TimeFreqSupport](classansys_1_1dpf_1_1TimeFreqSupport.md#classansys_1_1dpf_1_1TimeFreqSupport) property type.



**Type**: const [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::property_types::imaginary_freqs_cumulative_ids"}]}`
-->

<a id="structansys_1_1dpf_1_1property__types_1a0c7aacd1e99cffec129755334e247207"></a>
### Variable names

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 297)


```cpp
const PropertyType ansys::dpf::property_types::names
```




Predefined names CommonSupport property type.



**Type**: const [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::property_types::names"}]}`
-->

<a id="structansys_1_1dpf_1_1property__types_1acf54e38c914e28ec161dec13d6e26937"></a>
### Variable cell\_zone\_id

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 299)


```cpp
const PropertyType ansys::dpf::property_types::cell_zone_id
```




Predefined cell_zone_id property type.



**Type**: const [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::property_types::cell_zone_id"}]}`
-->

<a id="structansys_1_1dpf_1_1property__types_1a330d0c4eee86652fc54cf20b738f126d"></a>
### Variable face\_zone\_id

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 301)


```cpp
const PropertyType ansys::dpf::property_types::face_zone_id
```




Predefined face_zone_id property type.



**Type**: const [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::property_types::face_zone_id"}]}`
-->

<a id="structansys_1_1dpf_1_1property__types_1ae937b4e4dd19ad9f03978fd8353378de"></a>
### Variable part\_id

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 303)


```cpp
const PropertyType ansys::dpf::property_types::part_id
```




Predefined part_id property type.



**Type**: const [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::property_types::part_id"}]}`
-->

<a id="structansys_1_1dpf_1_1property__types_1a20bd60975a0c8d2243fb3a86099f99ea"></a>
### Variable section

![][public]
![][static]

**Definition**: `dpf\_api\_base.h` (line 305)


```cpp
const PropertyType ansys::dpf::property_types::section
```




Predefined section property type.



**Type**: const [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::property_types::section"}]}`
-->

## Public static functions

<a id="structansys_1_1dpf_1_1property__types_1a615a7b62841a0bc1ccbe546e284bec73"></a>
### Function all

![][public]
![][static]


```cpp
static std::vector< PropertyType > const  & ansys::dpf::property_types::all()
```




Gets all user-defined and predefined property types. 
**Returns**:

All property types.



**Return type**: std::vector< [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType) > const &

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::property_types::all"}]}`
-->

<a id="structansys_1_1dpf_1_1property__types_1ad26ecf69fb0bcf015b52fdd55977b419"></a>
### Function add\_custom

![][public]
![][static]


```cpp
static void ansys::dpf::property_types::add_custom(PropertyType const &rhs)
```




Adds a custom defined property type.



**Parameters**:

* [PropertyType](structansys_1_1dpf_1_1PropertyType.md#structansys_1_1dpf_1_1PropertyType) const & **rhs**: [in] Property object.

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ansys::dpf::property_types::add_custom"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)