<a id="structIRockyParticleHost"></a>
# Structure IRockyParticleHost

![][C++]
![][public]

**#include <rocky\_particle\_api.hpp>**



<code>[IRockyParticleHost](structIRockyParticleHost.md#structIRockyParticleHost)</code> is an interface for the internal particle object in Rocky. A particle object is the code representation of an individual particle in a Rocky simulation. It has several access methods to particle-related properties, as well as _particle scalars_, which are special variables that store values per particle that are preserved between time iterations. The main difference in relation to <code>[IRockyParticle](structIRockyParticle.md#structIRockyParticle)</code> is that all <code>[IRockyParticleHost](structIRockyParticleHost.md#structIRockyParticleHost)</code>'s property and variable values have their original dimensions as defined within the project, and its data resides within host memory (DRAM).

## Members

* [get\_assembly\_part\_material](structIRockyParticleHost.md#structIRockyParticleHost_1ab51842eff963f1aff610a41827fcfaf4)
* [get\_centroid\_position](structIRockyParticleHost.md#structIRockyParticleHost_1abae259f977de47fccdca78f6bc2372bb)
* [get\_cgm\_scale\_factor](structIRockyParticleHost.md#structIRockyParticleHost_1a4c893d6e3f9e6782b321d1a83514c1f0)
* [get\_equivalent\_diameter](structIRockyParticleHost.md#structIRockyParticleHost_1a5e52a50ea3dbc5b60da1c238141b5afb)
* [get\_material](structIRockyParticleHost.md#structIRockyParticleHost_1a6044e78b75c3721beeba25b84eacd71b)
* [get\_material\_index](structIRockyParticleHost.md#structIRockyParticleHost_1af4ec43778fa07b66072fbaa4aee18610)
* [get\_number\_of\_assembly\_parts](structIRockyParticleHost.md#structIRockyParticleHost_1a25e3ed57098b86c2020628039d361cbe)
* [get\_original\_mass](structIRockyParticleHost.md#structIRockyParticleHost_1ad82707a32ee8ebe4027b058b826e2d32)
* [get\_original\_solid\_volume](structIRockyParticleHost.md#structIRockyParticleHost_1af76866e13dbf69fbfd426852a9e21c36)
* [get\_original\_volume](structIRockyParticleHost.md#structIRockyParticleHost_1add7a3f8b7dba238add5ecfdee139acdb)
* [get\_particle\_group\_index](structIRockyParticleHost.md#structIRockyParticleHost_1a2a4385212dafdcb7e825adff5b7785d7)
* [get\_release\_time](structIRockyParticleHost.md#structIRockyParticleHost_1ac3ba8bc7577f65c66c5be6e0e08c3c19)
* [get\_scalars](structIRockyParticleHost.md#structIRockyParticleHost_1a589677fa645912fa42565f4a2fa25d46)
* [get\_size](structIRockyParticleHost.md#structIRockyParticleHost_1ac34b4f3510097e7387b000838703b028)
* [get\_tag](structIRockyParticleHost.md#structIRockyParticleHost_1a3d0328eb18856e3120730d0151e6801d)
* [is\_assembly](structIRockyParticleHost.md#structIRockyParticleHost_1a6c3f1e0a3df5f1fffc124c982d6a793f)
* [is\_element](structIRockyParticleHost.md#structIRockyParticleHost_1afc51932894666b7743f6109cf46ca07a)
* [is\_released](structIRockyParticleHost.md#structIRockyParticleHost_1ad76a0dcd79d1d14afb7323220fe6b8cc)

## Public functions

<a id="structIRockyParticleHost_1add7a3f8b7dba238add5ecfdee139acdb"></a>
### Function get\_original\_volume

![][public]
![][const]


```cpp
double IRockyParticleHost::get_original_volume() const
```




**Returns**:

The original value of the particle's volume. If the particle is porous, this function will return the original total volume of the particle, that is, the sum of the volumes of the solid matrix and the porous space.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleHost::get_original_volume"}]}`
-->

<a id="structIRockyParticleHost_1af76866e13dbf69fbfd426852a9e21c36"></a>
### Function get\_original\_solid\_volume

![][public]
![][const]


```cpp
double IRockyParticleHost::get_original_solid_volume() const
```




**Returns**:

The original value of the particle's solid volume, which is the volume of the solid matrix if the particle is porous. Otherwise, this function will return the same value that the <code>get_original_volume</code> function.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleHost::get_original_solid_volume"}]}`
-->

<a id="structIRockyParticleHost_1af4ec43778fa07b66072fbaa4aee18610"></a>
### Function get\_material\_index

![][public]
![][const]


```cpp
int IRockyParticleHost::get_material_index() const
```




**Returns**:

The material index associated to the particle



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleHost::get_material_index"}]}`
-->

<a id="structIRockyParticleHost_1a5e52a50ea3dbc5b60da1c238141b5afb"></a>
### Function get\_equivalent\_diameter

![][public]
![][const]


```cpp
double IRockyParticleHost::get_equivalent_diameter() const
```




**Returns**:

The equivalent diameter of the particle, which is defined as the diameter of a sphere of volume equal to the particle's volume.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleHost::get_equivalent_diameter"}]}`
-->

<a id="structIRockyParticleHost_1a6044e78b75c3721beeba25b84eacd71b"></a>
### Function get\_material

![][public]
![][const]


```cpp
IRockyMaterial IRockyParticleHost::get_material() const
```




**Returns**:

An <code>[IRockyMaterial](structIRockyMaterial.md#structIRockyMaterial)</code> object that gives access to the values of physical properties associated to the material from which the particle is made.



**Return type**: [IRockyMaterial](structIRockyMaterial.md#structIRockyMaterial)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleHost::get_material"}]}`
-->

<a id="structIRockyParticleHost_1abae259f977de47fccdca78f6bc2372bb"></a>
### Function get\_centroid\_position

![][public]
![][const]


```cpp
double3 IRockyParticleHost::get_centroid_position() const
```




**Returns**:

The Cartesian coordinates of the current position of the particle's centroid.



**Return type**: double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleHost::get_centroid_position"}]}`
-->

<a id="structIRockyParticleHost_1ad82707a32ee8ebe4027b058b826e2d32"></a>
### Function get\_original\_mass

![][public]
![][const]


```cpp
double IRockyParticleHost::get_original_mass() const
```




**Returns**:

The original value of the particle's mass.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleHost::get_original_mass"}]}`
-->

<a id="structIRockyParticleHost_1ac34b4f3510097e7387b000838703b028"></a>
### Function get\_size

![][public]
![][const]


```cpp
double IRockyParticleHost::get_size() const
```




**Returns**:

The current value of the particle's size.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleHost::get_size"}]}`
-->

<a id="structIRockyParticleHost_1ac3ba8bc7577f65c66c5be6e0e08c3c19"></a>
### Function get\_release\_time

![][public]
![][const]


```cpp
double IRockyParticleHost::get_release_time() const
```




**Returns**:

The time particle was released.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleHost::get_release_time"}]}`
-->

<a id="structIRockyParticleHost_1a4c893d6e3f9e6782b321d1a83514c1f0"></a>
### Function get\_cgm\_scale\_factor

![][public]
![][const]


```cpp
double IRockyParticleHost::get_cgm_scale_factor() const
```




**Returns**:

The particle's Coarse-grain Modeling (CGM) scale factor.



**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleHost::get_cgm_scale_factor"}]}`
-->

<a id="structIRockyParticleHost_1a3d0328eb18856e3120730d0151e6801d"></a>
### Function get\_tag

![][public]
![][const]


```cpp
int IRockyParticleHost::get_tag() const
```




**Returns**:

The tag value inherited from the tags assigned to the segments of a custom fiber, if the <code>[IRockyParticleHost](structIRockyParticleHost.md#structIRockyParticleHost)</code> object represents an element of a custom fiber. The values of those tags must be specified in the column labeled "tag" in the csv file that defines the geometry of a custom fiber. All elements that arise from the subdivision of a given segment inherit the tag value assigned to that segment. If tags are not defined for a custom fiber or if this function is used with particles which are not elements of a custom fiber, this function will return -1.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleHost::get_tag"}]}`
-->

<a id="structIRockyParticleHost_1ad76a0dcd79d1d14afb7323220fe6b8cc"></a>
### Function is\_released

![][public]
![][const]


```cpp
bool IRockyParticleHost::is_released() const
```




**Returns**:

A <code>true</code> value if the particle was released into the simulation domain, <code>false</code> otherwise.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleHost::is_released"}]}`
-->

<a id="structIRockyParticleHost_1afc51932894666b7743f6109cf46ca07a"></a>
### Function is\_element

![][public]
![][const]


```cpp
bool IRockyParticleHost::is_element() const
```




**Returns**:

True if the given particle is an element within a flexible particle, false otherwise.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleHost::is_element"}]}`
-->

<a id="structIRockyParticleHost_1a6c3f1e0a3df5f1fffc124c982d6a793f"></a>
### Function is\_assembly

![][public]
![][const]


```cpp
bool IRockyParticleHost::is_assembly() const
```




**Returns**:

True if the given particle is an assembly, false otherwise.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleHost::is_assembly"}]}`
-->

<a id="structIRockyParticleHost_1a25e3ed57098b86c2020628039d361cbe"></a>
### Function get\_number\_of\_assembly\_parts

![][public]
![][const]


```cpp
size_t IRockyParticleHost::get_number_of_assembly_parts() const
```




**Returns**:

The number of parts that compose the assembly.



**Return type**: size_t

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleHost::get_number_of_assembly_parts"}]}`
-->

<a id="structIRockyParticleHost_1ab51842eff963f1aff610a41827fcfaf4"></a>
### Function get\_assembly\_part\_material

![][public]
![][const]


```cpp
IRockyMaterial IRockyParticleHost::get_assembly_part_material(size_t part_id) const
```




**Parameters**:

* **part_id**: The index of an assembly part.


**Returns**:

An <code>[IRockyMaterial](structIRockyMaterial.md#structIRockyMaterial)</code> object that gives access to the values of physical properties associated to the material from which the assembly part referent to <code>part_id</code> is made.



**Parameters**:

* size_t **part_id**

**Return type**: [IRockyMaterial](structIRockyMaterial.md#structIRockyMaterial)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleHost::get_assembly_part_material"}]}`
-->

<a id="structIRockyParticleHost_1a589677fa645912fa42565f4a2fa25d46"></a>
### Function get\_scalars

![][public]
![][const]


```cpp
IRockyParticleScalars IRockyParticleHost::get_scalars() const
```




**Returns**:

An <code>[IRockyParticleScalars](structIRockyParticleScalars.md#structIRockyParticleScalars)</code> object, that gives access to all particle scalars variables defined in the project.



**Return type**: [IRockyParticleScalars](structIRockyParticleScalars.md#structIRockyParticleScalars)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleHost::get_scalars"}]}`
-->

<a id="structIRockyParticleHost_1a2a4385212dafdcb7e825adff5b7785d7"></a>
### Function get\_particle\_group\_index

![][public]
![][const]


```cpp
int IRockyParticleHost::get_particle_group_index() const
```




**Returns**:

The index that uniquely identifies the particle group to which the particle belongs.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleHost::get_particle_group_index"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)