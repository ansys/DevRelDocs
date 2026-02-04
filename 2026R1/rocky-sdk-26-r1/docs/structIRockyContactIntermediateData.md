# Structure IRockyContactIntermediateData

<a id="structIRockyContactIntermediateData"></a>

![][C++]
![][public]

**#include <rocky\_contact\_intermediate\_data\_api.hpp>**



<code>[IRockyContactIntermediateData](structIRockyContactIntermediateData.md#structIRockyContactIntermediateData)</code> is an interface to access some useful property values related to the contact that can be needed during the calculation steps of a custom contact model, i.e. calculation of the normal and tangential forces, and calculation of the impact energy.

## Members

* [get\_friction\_coefficient](structIRockyContactIntermediateData.md#structIRockyContactIntermediateData_1a3efba296a1d32e115acbb7071cdbf775)
* [get\_home\_centroid\_to\_contact\_point\_vector](structIRockyContactIntermediateData.md#structIRockyContactIntermediateData_1ae7271a8689305777b1f39beb47898553)
* [get\_near\_centroid\_to\_contact\_point\_vector](structIRockyContactIntermediateData.md#structIRockyContactIntermediateData_1a00c355cde831bad36cd029544a7bbb16)

## Public functions

### Function get\_home\_centroid\_to\_contact\_point\_vector

<a id="structIRockyContactIntermediateData_1ae7271a8689305777b1f39beb47898553"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyContactIntermediateData::get_home_centroid_to_contact_point_vector() const
```




**Returns**:

Cartesian coordinates of the vector that joins the home particle centroid to the contact point.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactIntermediateData::get_home_centroid_to_contact_point_vector"}]}`
-->

### Function get\_near\_centroid\_to\_contact\_point\_vector

<a id="structIRockyContactIntermediateData_1a00c355cde831bad36cd029544a7bbb16"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyContactIntermediateData::get_near_centroid_to_contact_point_vector() const
```




**Returns**:

Cartesian coordinates of the vector that joins the near particle centroid to the contact point. If the near entity is a triangle instead of a particle, a zero vector will be returned.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactIntermediateData::get_near_centroid_to_contact_point_vector"}]}`
-->

### Function get\_friction\_coefficient

<a id="structIRockyContactIntermediateData_1a3efba296a1d32e115acbb7071cdbf775"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyContactIntermediateData::get_friction_coefficient() const
```




**Returns**:

The coefficient of friction, which is the ratio of the frictional force resisting the motion of the two surfaces in contact to the normal force pressing the two surfaces together. The coefficient of friction is equal to the dynamic or static friction coefficient defined for the corresponding material interaction, depending on the existence or not of sliding at the contact. Since the sliding condition must be specified by a module in <code>ROCKY_PLUGIN_TANGENTIAL_FORCE_ON_CONTACTS</code>, this method must be called after that hook. If called before that point, the returned value is undetermined.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactIntermediateData::get_friction_coefficient"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)