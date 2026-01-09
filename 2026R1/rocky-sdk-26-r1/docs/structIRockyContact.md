<a id="structIRockyContact"></a>
# Structure IRockyContact

![][C++]
![][public]

**#include <rocky\_contact\_api.hpp>**



<code>[IRockyContact](structIRockyContact.md#structIRockyContact)</code> is an interface for the internal contact object in Rocky. A contact object is the code representation of the relationship between two particles or between a particle and a geometry triangle that have a force interaction at a given time. In the first case, it will be a _particle-to-particle contact_ (sometimes abbreviated to particle-contact), whereas in the latter case, it will be a _particle-to-triangle contact_ (sometimes abbreviated to triangle-contact).





A contact in which there exists an actual overlap between the entities is referred to as a _frictional contact_. If an adhesive model is active, an adhesive force might exist even if the entities are not physically touching each other. In that case, an _adhesive contact_ will be established between those entities.





In a particle-to-particle contact, one of the particles is identified as _home_ particle, whereas the other is identified as _near_ particle. There is no special rule for labeling particles in this type of contacts, any of the two particles can be labeled as _home_ or _near_. On the other hand, in a particle-to-triangle contact, the particle is always referred to as _home_ particle, while the triangle is referred to as _near_ triangle. Whenever it is necessary to distinguish between two contacting entities, the prefixes _home_ and _near_ are used in the associated method names. The normal unit vector associated to a contact is always constructed pointing to the home particle.





Contact scalars are special variables that store values per contact that are preserved between time iterations. The preservation of those values is guaranteed during the whole lifetime of a contact. Internally, contact scalars are stored separately for particle-to-particle contacts and for particle-to-triangle contacts. In order to differentiate them, the former are named _particle contact scalars_, whereas the latter are named _triangle contact scalars_

## Members

* [calculate\_relative\_velocity](structIRockyContact.md#structIRockyContact_1af05c086a0b75c761b13fa744061789e4)
* [get\_contact\_position](structIRockyContact.md#structIRockyContact_1aafeae8748cf36743d08f4570b198f001)
* [get\_current\_time](structIRockyContact.md#structIRockyContact_1a6cc48e3759e515587e236d283d904f00)
* [get\_dynamic\_friction\_coefficient](structIRockyContact.md#structIRockyContact_1a00daba07ec1b0b1df0be1e8d761a408e)
* [get\_equivalent\_mass](structIRockyContact.md#structIRockyContact_1ae4f9b67c0a4577089b37854e9fa5fe9b)
* [get\_equivalent\_radius](structIRockyContact.md#structIRockyContact_1a473c87b27145d22e24f15e67ab160d89)
* [get\_equivalent\_stiffness](structIRockyContact.md#structIRockyContact_1aa373c6f200518285d6bb85817d12ccae)
* [get\_home\_material](structIRockyContact.md#structIRockyContact_1ae1890c831f2bb90143d3459352dee316)
* [get\_home\_particle](structIRockyContact.md#structIRockyContact_1aed9e6fcfa92276bc514e21564f0603fb)
* [get\_home\_particle\_group\_index](structIRockyContact.md#structIRockyContact_1a2cd1c1e40befd0cf6910d663432c3695)
* [get\_home\_stiffness](structIRockyContact.md#structIRockyContact_1a1816640d165bb54d339ee9aaf2873046)
* [get\_home\_stiffness\_fraction](structIRockyContact.md#structIRockyContact_1aff778f8122d9ea2f81da59e1ff279b45)
* [get\_is\_sliding\_marker](structIRockyContact.md#structIRockyContact_1a1acfe6d4f8e36c9fd417a658aac1c041)
* [get\_material\_interaction](structIRockyContact.md#structIRockyContact_1aff52effeb3fe2a5015ac05022df63731)
* [get\_material\_interaction\_index](structIRockyContact.md#structIRockyContact_1ab05070dcc53936225c506abfc2645ff4)
* [get\_near\_geometry\_index](structIRockyContact.md#structIRockyContact_1a3f551f05cfe40b8c6b95b3df8a311ca4)
* [get\_near\_material](structIRockyContact.md#structIRockyContact_1a8ec1a085944bc63f455c4007531aea61)
* [get\_near\_particle](structIRockyContact.md#structIRockyContact_1a6c85a39640365d283d22437792c51f0f)
* [get\_near\_particle\_group\_index](structIRockyContact.md#structIRockyContact_1a244d24fa1cc78a23d6f4553d5797ab0b)
* [get\_near\_stiffness](structIRockyContact.md#structIRockyContact_1aa49e3ddd3916fabf25a90e8fefb5cc4c)
* [get\_near\_triangle](structIRockyContact.md#structIRockyContact_1aa2479a695d48de98b5caf29d52134b8a)
* [get\_normal\_adhesion\_force](structIRockyContact.md#structIRockyContact_1a21587a9de6f69f4af1d215c3879fca66)
* [get\_normal\_contact\_force](structIRockyContact.md#structIRockyContact_1a9e085d9bb5684b5d34c33525bb1d021c)
* [get\_normal\_relative\_velocity](structIRockyContact.md#structIRockyContact_1a379476b7b01576be8fc0eb3f0dde7a1e)
* [get\_normal\_unit\_vector](structIRockyContact.md#structIRockyContact_1a04a9d6e5ba1478bc00d4955bcaa1a2fd)
* [get\_overlap](structIRockyContact.md#structIRockyContact_1a26aef3fac3655fe686283be4bd2fe7f0)
* [get\_particle\_contact\_scalars](structIRockyContact.md#structIRockyContact_1af937221f53319cd4a30871829e3cc7e0)
* [get\_previous\_moment\_vector](structIRockyContact.md#structIRockyContact_1a4d10fc8ec36500e0a8f6673f3e7628fd)
* [get\_previous\_normal\_vector](structIRockyContact.md#structIRockyContact_1afa684887b3dcfad056850ccfdf399ec3)
* [get\_previous\_overlap](structIRockyContact.md#structIRockyContact_1ab6c8fca161c75cf870eb059f9ed3b11c)
* [get\_reduced\_young\_modulus](structIRockyContact.md#structIRockyContact_1acc8512372077732bfe12aa3483f2e35b)
* [get\_restitution\_coefficient](structIRockyContact.md#structIRockyContact_1a6e335a5d032dded094c6b36ad5ea23c1)
* [get\_scale\_factor](structIRockyContact.md#structIRockyContact_1ad0940d0dcefd839aaba3770689a034bb)
* [get\_sliding\_distance](structIRockyContact.md#structIRockyContact_1afe041153be8e43d3e5d7c7a500a49501)
* [get\_static\_friction\_coefficient](structIRockyContact.md#structIRockyContact_1a9b6c747c62166e351d363d693e18c46a)
* [get\_tangential\_adhesion\_force](structIRockyContact.md#structIRockyContact_1a20d7ffad55e1c1c28c848eb3b09c41f2)
* [get\_tangential\_contact\_force](structIRockyContact.md#structIRockyContact_1aca5aae0a4d0c2033bbad4da067657704)
* [get\_tangential\_relative\_velocity](structIRockyContact.md#structIRockyContact_1a9fab3f0e6f78ea64e96209fbbd540b85)
* [get\_timestep](structIRockyContact.md#structIRockyContact_1a4cc9eb65e78d4eb4cbe34bb7c7baf85d)
* [get\_triangle\_contact\_scalars](structIRockyContact.md#structIRockyContact_1ab14e84d2a580a95b2fbcb3d1f5c92a25)
* [is\_adhesive](structIRockyContact.md#structIRockyContact_1a46453e5b227065edb55c7b67177584f9)
* [is\_frictional](structIRockyContact.md#structIRockyContact_1ae83dc410da7f54a0badbfb0c75fdaa4b)
* [is\_loading](structIRockyContact.md#structIRockyContact_1a395c9be7e50adea7317a808279faec0c)
* [is\_particle\_particle\_contact](structIRockyContact.md#structIRockyContact_1a0a27611118aab7a27fb6c1e53939cba1)
* [is\_particle\_triangle\_contact](structIRockyContact.md#structIRockyContact_1a9de7fba112ea033f15e8ee1fb0305960)
* [is\_positive\_oriented](structIRockyContact.md#structIRockyContact_1a79c5a7fb09b962d62eefe61f27cddcd7)
* [is\_unloading](structIRockyContact.md#structIRockyContact_1abe5cd05335fe5264bc05d9808b23a9fe)
* [just\_finished\_adhesive](structIRockyContact.md#structIRockyContact_1a52439d8dd07c36c9475eb248d7dcb38e)
* [just\_finished\_frictional](structIRockyContact.md#structIRockyContact_1afbda49c86a367e9a4f20492ff5007333)
* [just\_started\_adhesive](structIRockyContact.md#structIRockyContact_1a33e06ba2b8ca80ff15946ac27885dbd7)
* [just\_started\_frictional](structIRockyContact.md#structIRockyContact_1ab280ec2c5bc3fe90ca4822939514d3b5)
* [set\_dynamic\_friction\_coefficient](structIRockyContact.md#structIRockyContact_1aaa4594d0c921983edc1d1033661c6500)
* [set\_previous\_moment\_vector](structIRockyContact.md#structIRockyContact_1a302215189897e9ad39f8d7a3ff571d6c)
* [set\_restitution\_coefficient](structIRockyContact.md#structIRockyContact_1ad5f45118ba3d4bdedd2194640fc4c79d)
* [set\_static\_friction\_coefficient](structIRockyContact.md#structIRockyContact_1a5a3233239461058a2f33a9f49494666c)

## Public functions

<a id="structIRockyContact_1ae1890c831f2bb90143d3459352dee316"></a>
### Function get\_home\_material

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS IRockyMaterial IRockyContact::get_home_material() const
```




**Returns**:

An <code>[IRockyMaterial](structIRockyMaterial.md#structIRockyMaterial)</code> object that gives access to the values of physical properties associated to the material from which particle labeled as _home_ is made.



**Return type**: ROCKY_FUNCTIONS [IRockyMaterial](structIRockyMaterial.md#structIRockyMaterial)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_home_material"}]}`
-->

<a id="structIRockyContact_1a8ec1a085944bc63f455c4007531aea61"></a>
### Function get\_near\_material

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS IRockyMaterial IRockyContact::get_near_material() const
```




**Returns**:

An <code>[IRockyMaterial](structIRockyMaterial.md#structIRockyMaterial)</code> object that gives access to the values of physical properties associated to the material from which the _near_ particle or triangle is made.



**Return type**: ROCKY_FUNCTIONS [IRockyMaterial](structIRockyMaterial.md#structIRockyMaterial)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_near_material"}]}`
-->

<a id="structIRockyContact_1aff52effeb3fe2a5015ac05022df63731"></a>
### Function get\_material\_interaction

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS IRockyMaterialInteraction IRockyContact::get_material_interaction() const
```




**Returns**:

An <code>[IRockyMaterialInteraction](structIRockyMaterialInteraction.md#structIRockyMaterialInteraction)</code> object that gives access to the values of physical properties associated to the material interaction that corresponds to the contact.



**Return type**: ROCKY_FUNCTIONS [IRockyMaterialInteraction](structIRockyMaterialInteraction.md#structIRockyMaterialInteraction)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_material_interaction"}]}`
-->

<a id="structIRockyContact_1ab05070dcc53936225c506abfc2645ff4"></a>
### Function get\_material\_interaction\_index

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS int IRockyContact::get_material_interaction_index() const
```




**Returns**:

The internal index of the material interaction associated to the contact. Every pair of materials defined in a project has a unique index associated to it. Both built-in and custom material interactions are stored internally using the same indexes.



**Return type**: ROCKY_FUNCTIONS int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_material_interaction_index"}]}`
-->

<a id="structIRockyContact_1aed9e6fcfa92276bc514e21564f0603fb"></a>
### Function get\_home\_particle

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS IRockyParticle IRockyContact::get_home_particle() const
```




**Returns**:

An <code>[IRockyParticle](structIRockyParticle.md#structIRockyParticle)</code> object representing the _home_ particle. This object gives access to several instantaneous properties associated to that particle.



**Return type**: ROCKY_FUNCTIONS [IRockyParticle](structIRockyParticle.md#structIRockyParticle)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_home_particle"}]}`
-->

<a id="structIRockyContact_1a2cd1c1e40befd0cf6910d663432c3695"></a>
### Function get\_home\_particle\_group\_index

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS int IRockyContact::get_home_particle_group_index() const
```




**Returns**:

The index that uniquely identifies the particle group to which the home particle belongs.



**Return type**: ROCKY_FUNCTIONS int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_home_particle_group_index"}]}`
-->

<a id="structIRockyContact_1a6c85a39640365d283d22437792c51f0f"></a>
### Function get\_near\_particle

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS IRockyParticle IRockyContact::get_near_particle() const
```




**Returns**:

An <code>[IRockyParticle](structIRockyParticle.md#structIRockyParticle)</code> object representing the _near_ particle in a particle-to-triangle contact. This object gives access to several instantaneous properties associated to that particle.



**Return type**: ROCKY_FUNCTIONS [IRockyParticle](structIRockyParticle.md#structIRockyParticle)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_near_particle"}]}`
-->

<a id="structIRockyContact_1a244d24fa1cc78a23d6f4553d5797ab0b"></a>
### Function get\_near\_particle\_group\_index

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS int IRockyContact::get_near_particle_group_index() const
```




**Returns**:

The index that uniquely identifies the particle group to which the near particle belongs, in a particle-to-particle contact.



**Return type**: ROCKY_FUNCTIONS int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_near_particle_group_index"}]}`
-->

<a id="structIRockyContact_1aa2479a695d48de98b5caf29d52134b8a"></a>
### Function get\_near\_triangle

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS IRockyGeometryTriangle IRockyContact::get_near_triangle() const
```




**Returns**:

An <code>[IRockyGeometryTriangle](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle)</code> object representing the _near_ geometry triangle in a particle-to-triangle contact. This object gives access to some geometric properties associated to that triangle.



**Return type**: ROCKY_FUNCTIONS [IRockyGeometryTriangle](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_near_triangle"}]}`
-->

<a id="structIRockyContact_1a3f551f05cfe40b8c6b95b3df8a311ca4"></a>
### Function get\_near\_geometry\_index

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS int IRockyContact::get_near_geometry_index() const
```




**Returns**:

The internal index that uniquely identifies the geometry to which belongs the geometry triangle in a particle-to-triangle contact.



**Return type**: ROCKY_FUNCTIONS int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_near_geometry_index"}]}`
-->

<a id="structIRockyContact_1a0a27611118aab7a27fb6c1e53939cba1"></a>
### Function is\_particle\_particle\_contact

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS bool IRockyContact::is_particle_particle_contact() const
```




**Returns**:

True if the contact is a particle-to-particle contact, false otherwise.



**Return type**: ROCKY_FUNCTIONS bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::is_particle_particle_contact"}]}`
-->

<a id="structIRockyContact_1a9de7fba112ea033f15e8ee1fb0305960"></a>
### Function is\_particle\_triangle\_contact

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS bool IRockyContact::is_particle_triangle_contact() const
```




**Returns**:

True if the contact is a particle-to-triangle contact, false otherwise.



**Return type**: ROCKY_FUNCTIONS bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::is_particle_triangle_contact"}]}`
-->

<a id="structIRockyContact_1ae83dc410da7f54a0badbfb0c75fdaa4b"></a>
### Function is\_frictional

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS bool IRockyContact::is_frictional() const
```




**Returns**:

True if the contact is frictional, that is, the contacting entities are touching each other. The method returns false, otherwise.



**Return type**: ROCKY_FUNCTIONS bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::is_frictional"}]}`
-->

<a id="structIRockyContact_1a46453e5b227065edb55c7b67177584f9"></a>
### Function is\_adhesive

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS bool IRockyContact::is_adhesive() const
```




**Returns**:

True if the contact is adhesive, which is the case for all contacts if an adhesive force model is active in the project. The method returns false, otherwise.



**Return type**: ROCKY_FUNCTIONS bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::is_adhesive"}]}`
-->

<a id="structIRockyContact_1ab6c8fca161c75cf870eb059f9ed3b11c"></a>
### Function get\_previous\_overlap

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyContact::get_previous_overlap() const
```




**Returns**:

The value of the overlap corresponding to the previous timestep.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_previous_overlap"}]}`
-->

<a id="structIRockyContact_1a26aef3fac3655fe686283be4bd2fe7f0"></a>
### Function get\_overlap

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyContact::get_overlap() const
```




**Returns**:

The value of the current overlap, which is the small distance that a particle overlaps with another particle or a boundary, measured in the normal direction. In contact models, it is taken as a measurement of the total deformation of the contacting entities at any given time during a collision. Therefore, it is usually the main input parameter for calculating the normal contact force. For adhesive contacts in which physical contact has not been reached yet, this function will return a negative value. In this case, the absolute value of the overlap can be interpreted as the gap between the interacting entities, measured in the direction defined by the normal unit vector. It is common for adhesive forces to be functions of this gap distance.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_overlap"}]}`
-->

<a id="structIRockyContact_1a04a9d6e5ba1478bc00d4955bcaa1a2fd"></a>
### Function get\_normal\_unit\_vector

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyContact::get_normal_unit_vector() const
```




**Returns**:

The unit normal vector in Cartesian coordinates. Conventionally, this vector is oriented always pointing to the _home_ particle.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_normal_unit_vector"}]}`
-->

<a id="structIRockyContact_1aafeae8748cf36743d08f4570b198f001"></a>
### Function get\_contact\_position

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyContact::get_contact_position() const
```




**Returns**:

The Cartesian coordinates of the point at which the contact force is applied.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_contact_position"}]}`
-->

<a id="structIRockyContact_1ad0940d0dcefd839aaba3770689a034bb"></a>
### Function get\_scale\_factor

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyContact::get_scale_factor() const
```




**Returns**:

The value of the scale factor, which is a reduction factor of the contact force attributed to an individual contact, in cases when multiple contacts points arise simultaneously between two entities. This factor is used also within collision statistics modules for determining the number of collisions based on the number of contacts registered, in cases when each collision has associated multiple contact points.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_scale_factor"}]}`
-->

<a id="structIRockyContact_1ab280ec2c5bc3fe90ca4822939514d3b5"></a>
### Function just\_started\_frictional

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS bool IRockyContact::just_started_frictional() const
```




**Returns**:

True if the contact is frictional and it has begun at the current timestep, false otherwise.



**Return type**: ROCKY_FUNCTIONS bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::just_started_frictional"}]}`
-->

<a id="structIRockyContact_1a33e06ba2b8ca80ff15946ac27885dbd7"></a>
### Function just\_started\_adhesive

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS bool IRockyContact::just_started_adhesive() const
```




**Returns**:

True if the contact is adhesive and it has begun at the current timestep, false otherwise.



**Return type**: ROCKY_FUNCTIONS bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::just_started_adhesive"}]}`
-->

<a id="structIRockyContact_1afbda49c86a367e9a4f20492ff5007333"></a>
### Function just\_finished\_frictional

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS bool IRockyContact::just_finished_frictional() const
```




**Returns**:

True if the contact is frictional and it has finished (the contacting entities stopped touching each other) at the current timestep.


!> **Attention** \
This method will work properly only if called within the <code>ROCKY_PLUGIN_POST_FORCE_ON_FINISHED_CONTACTS</code> hook.



**Return type**: ROCKY_FUNCTIONS bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::just_finished_frictional"}]}`
-->

<a id="structIRockyContact_1a52439d8dd07c36c9475eb248d7dcb38e"></a>
### Function just\_finished\_adhesive

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS bool IRockyContact::just_finished_adhesive() const
```




**Returns**:

True if the contact is adhesive and it has finished (the gap distance between the contacting entities became larger than the adhesive distance) at the current timestep.


!> **Attention** \
This method will work properly only if called within the <code>ROCKY_PLUGIN_POST_FORCE_ON_FINISHED_CONTACTS</code> hook.



**Return type**: ROCKY_FUNCTIONS bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::just_finished_adhesive"}]}`
-->

<a id="structIRockyContact_1a395c9be7e50adea7317a808279faec0c"></a>
### Function is\_loading

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS bool IRockyContact::is_loading() const
```




**Returns**:

True if the contact is in a loading period (overlap increasing), false otherwise.



**Return type**: ROCKY_FUNCTIONS bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::is_loading"}]}`
-->

<a id="structIRockyContact_1abe5cd05335fe5264bc05d9808b23a9fe"></a>
### Function is\_unloading

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS bool IRockyContact::is_unloading() const
```




**Returns**:

True if the contact is in a unloading period (overlap decreasing), false otherwise.



**Return type**: ROCKY_FUNCTIONS bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::is_unloading"}]}`
-->

<a id="structIRockyContact_1a79c5a7fb09b962d62eefe61f27cddcd7"></a>
### Function is\_positive\_oriented

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS bool IRockyContact::is_positive_oriented() const
```




**Returns**:

True if the topological orientation of the contact coincides with the conventional positive orientation.



**Return type**: ROCKY_FUNCTIONS bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::is_positive_oriented"}]}`
-->

<a id="structIRockyContact_1a6cc48e3759e515587e236d283d904f00"></a>
### Function get\_current\_time

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyContact::get_current_time() const
```




**Returns**:

The current simulation time.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_current_time"}]}`
-->

<a id="structIRockyContact_1a4cc9eb65e78d4eb4cbe34bb7c7baf85d"></a>
### Function get\_timestep

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyContact::get_timestep() const
```




**Returns**:

The magnitude of the simulation timestep.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_timestep"}]}`
-->

<a id="structIRockyContact_1af937221f53319cd4a30871829e3cc7e0"></a>
### Function get\_particle\_contact\_scalars

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS IRockyContactScalars IRockyContact::get_particle_contact_scalars() const
```




**Returns**:

An <code>[IRockyContactScalars](structIRockyContactScalars.md#structIRockyContactScalars)</code> object that gives access to all particle-to-particle contact scalars defined in the project.



**Return type**: ROCKY_FUNCTIONS [IRockyContactScalars](structIRockyContactScalars.md#structIRockyContactScalars)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_particle_contact_scalars"}]}`
-->

<a id="structIRockyContact_1ab14e84d2a580a95b2fbcb3d1f5c92a25"></a>
### Function get\_triangle\_contact\_scalars

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS IRockyContactScalars IRockyContact::get_triangle_contact_scalars() const
```




**Returns**:

An <code>[IRockyContactScalars](structIRockyContactScalars.md#structIRockyContactScalars)</code> object that gives access to all particle-to-triangle contact scalars defined in the project.



**Return type**: ROCKY_FUNCTIONS [IRockyContactScalars](structIRockyContactScalars.md#structIRockyContactScalars)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_triangle_contact_scalars"}]}`
-->

<a id="structIRockyContact_1a1816640d165bb54d339ee9aaf2873046"></a>
### Function get\_home\_stiffness

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyContact::get_home_stiffness() const
```




**Returns**:

The value of the stiffness associated to the _home_ particle. For more details about the definition of this parameter, refer to the DEM Technical Manual. The returned value is already multiplied by the numerical softening factor, which is commonly used as a practical way of increasing the simulation timestep. For more details, please refer to the DEM Technical Manual.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_home_stiffness"}]}`
-->

<a id="structIRockyContact_1aa49e3ddd3916fabf25a90e8fefb5cc4c"></a>
### Function get\_near\_stiffness

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyContact::get_near_stiffness() const
```




**Returns**:

The value of the stiffness associated to the _near_ particle or the _near_ triangle, depending on the contact type. The returned value is already multiplied by the numerical softening factor, which is commonly used as a practical way of increasing the simulation timestep. For more details, please refer to the DEM Technical Manual.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_near_stiffness"}]}`
-->

<a id="structIRockyContact_1aa373c6f200518285d6bb85817d12ccae"></a>
### Function get\_equivalent\_stiffness

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyContact::get_equivalent_stiffness() const
```




**Returns**:

The value of the equivalent stiffness for the contact. The returned value is already multiplied by the numerical softening factor, which is commonly used as a practical way of increasing the simulation timestep. For more details, please refer to the DEM Technical Manual.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_equivalent_stiffness"}]}`
-->

<a id="structIRockyContact_1aff778f8122d9ea2f81da59e1ff279b45"></a>
### Function get\_home\_stiffness\_fraction

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyContact::get_home_stiffness_fraction() const
```




**Returns**:

The fraction of the stiffness of the near entity to the sum of the stiffnesses of both entities in a contact. This fraction is used when splitting the work made by the contact force between the two contacting entities. For more details, please refer to the DEM Technical Manual.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_home_stiffness_fraction"}]}`
-->

<a id="structIRockyContact_1acc8512372077732bfe12aa3483f2e35b"></a>
### Function get\_reduced\_young\_modulus

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyContact::get_reduced_young_modulus() const
```




**Returns**:

The value of the reduced Young's modulus. This property is usually used in the Hertzian contact model and models derived from it. The returned value is already multiplied by the numerical softening factor, which is commonly used as a practical way of increasing the simulation timestep. For more details, please refer to the DEM Technical Manual.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_reduced_young_modulus"}]}`
-->

<a id="structIRockyContact_1ae4f9b67c0a4577089b37854e9fa5fe9b"></a>
### Function get\_equivalent\_mass

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyContact::get_equivalent_mass() const
```




**Returns**:

The value of the equivalent or effective mass for the contact. For more details, please refer to the DEM Technical Manual.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_equivalent_mass"}]}`
-->

<a id="structIRockyContact_1a473c87b27145d22e24f15e67ab160d89"></a>
### Function get\_equivalent\_radius

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyContact::get_equivalent_radius() const
```




**Returns**:

The value of the equivalent or effective radius for the contact. For more details, please refer to the DEM Technical Manual.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_equivalent_radius"}]}`
-->

<a id="structIRockyContact_1a9e085d9bb5684b5d34c33525bb1d021c"></a>
### Function get\_normal\_contact\_force

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyContact::get_normal_contact_force() const
```




**Returns**:

The value of the normal component of the contact force, calculated according to the active normal contact force model. Depending on the point from where this function is called, a different force value can be returned. If called from <code>ROCKY_PLUGIN_PRE_FORCE_ON_CONTACTS</code>, the returned value will correspond to the normal force component calculated during the previous timestep. On the other hand, if called from <code>ROCKY_PLUGIN_POST_FORCE_ON_CONTACTS</code>, the value will be the recently calculated normal force component for the current timestep. Moreover, this function is not supposed to be called from <code>ROCKY_PLUGIN_NORMAL_FORCE_ON_CONTACTS</code>, since this hook is meant to be used to calculate and set the normal force component for the contact.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_normal_contact_force"}]}`
-->

<a id="structIRockyContact_1aca5aae0a4d0c2033bbad4da067657704"></a>
### Function get\_tangential\_contact\_force

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyContact::get_tangential_contact_force() const
```




**Returns**:

The tangential component of the contact force as a vector in Cartesian coordinates, calculated according to the active tangential contact force model. Conventionally, the returned tangential force is the one whose orientation coincides with the tangential force acting on the home particle. <br/>
 If called from <code>ROCKY_PLUGIN_PRE_FORCE_ON_CONTACTS</code>, the returned value will correspond to the tangential force component calculated during the previous timestep. On the other hand, if called from <code>ROCKY_PLUGIN_POST_FORCE_ON_CONTACTS</code> or from other hooks executed after that point, the value will be the recently calculated tangential force component for the current timestep. Moreover, this function is not supposed to be called from <code>ROCKY_PLUGIN_TANGENTIAL_FORCE_ON_CONTACTS</code>, since this hook is meant to be used to calculate and set the tangential force component for the contact. For tangential force models other than the Linear Spring Coulomb Limit and Mindlin-Deresiewicz models, the storage of this force must be enabled explicitly by using the <code>[IRockyContactScalarsModel::enable\_storage\_tangential\_contact\_force](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1a5a65f842ce3bea36ee46b346a2741911)</code> method.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_tangential_contact_force"}]}`
-->

<a id="structIRockyContact_1af05c086a0b75c761b13fa744061789e4"></a>
### Function calculate\_relative\_velocity

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyContact::calculate_relative_velocity() const
```




**This method will calculate the relative velocity vector at the contact point.**:

This relative velocity is defined as the difference between the velocities of points located at the _home_ particle and the _near_ particle or geometry, both coincident instantaneously with the contact point.


!> **Attention** \
Since this calculation can be costly, modules that need values of this relative velocity may alternatively enable the storage of its normal and tangential components. These components are calculated internally by Rocky during the contact force calculation stage, but discarded afterwards. However, by using the <code>[IRockyContactScalarsModel::enable\_storage\_normal\_relative\_velocity](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1a30a72264168db13de798df7cdff440c5)</code> and <code>[IRockyContactScalarsModel::enable\_storage\_tangential\_relative\_velocity](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1ad8ba6db25bce594fbb62b415b0634a95)</code> methods, a module can activate the storage of those components in order to make them available at any point during a time iteration. <br/>


**Returns**:

The current relative velocity vector between two contacting particles or a particle and a geometry, at the contact point. <br/>



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::calculate_relative_velocity"}]}`
-->

<a id="structIRockyContact_1a6e335a5d032dded094c6b36ad5ea23c1"></a>
### Function get\_restitution\_coefficient

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyContact::get_restitution_coefficient() const
```




**Returns**:

The value of the coefficient of restitution associated to the contact. If the restitution coefficient is a variable property specified by a custom module, this method will return that value. Otherwise, it will return the value set through the Rocky UI for the corresponding material interaction.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_restitution_coefficient"}]}`
-->

<a id="structIRockyContact_1ad5f45118ba3d4bdedd2194640fc4c79d"></a>
### Function set\_restitution\_coefficient

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyContact::set_restitution_coefficient(double value)
```




**This method sets the value of the coefficient of restitution for a collision. **:

It can be used only if the coefficient of restitution was defined as a variable property in the module's specification file. It is important to note that the value of the restitution coefficient must be set at the beginning of a contact, before the stage of contact forces calculation. Otherwise, the value set by this method will not be used in that calculation, causing unphysical behavior in the collisions.


**Parameters**:

* **value**: The value of the coefficient of restitution that must be used in the contact.



**Parameters**:

* double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::set_restitution_coefficient"}]}`
-->

<a id="structIRockyContact_1a00daba07ec1b0b1df0be1e8d761a408e"></a>
### Function get\_dynamic\_friction\_coefficient

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyContact::get_dynamic_friction_coefficient() const
```




**Returns**:

The value of the coefficient of dynamic or kinetic friction associated to the contact. If this coefficient is defined as a variable property and its value is specified by a custom module, this method will return that value. Otherwise, it will return the value set through the Rocky UI for the corresponding material interaction.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_dynamic_friction_coefficient"}]}`
-->

<a id="structIRockyContact_1aaa4594d0c921983edc1d1033661c6500"></a>
### Function set\_dynamic\_friction\_coefficient

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyContact::set_dynamic_friction_coefficient(double value)
```




**This method sets the value of the coefficient of dynamic friction at a frictional**:

contact. It can be used only if that coefficient was defined as a variable property in the module's specification file. It is important to note that the value of this coefficient must be set at the beginning of a contact, before the stage of contact forces calculation. Otherwise, the value set by this method will not be used in that calculation, causing undefined behavior in the collisions.


**Parameters**:

* **value**: The value of the coefficient of dynamic friction that must be used in the contact.



**Parameters**:

* double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::set_dynamic_friction_coefficient"}]}`
-->

<a id="structIRockyContact_1a9b6c747c62166e351d363d693e18c46a"></a>
### Function get\_static\_friction\_coefficient

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyContact::get_static_friction_coefficient() const
```




**Returns**:

The value of the coefficient of static friction associated to the contact. If this coefficient is defined as a variable property and its value is specified by a custom module, this method will return that value. Otherwise, it will return the value set through the Rocky UI for the corresponding material interaction.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_static_friction_coefficient"}]}`
-->

<a id="structIRockyContact_1a5a3233239461058a2f33a9f49494666c"></a>
### Function set\_static\_friction\_coefficient

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyContact::set_static_friction_coefficient(double value)
```




**This method sets the value of the coefficient of static friction at a frictional contact. **:

It can be used only if that coefficient was defined as a variable property in the module's specification file. It is important to note that the value of this coefficient must be set at the beginning of a contact, before the stage of contact forces calculation. Otherwise, the value set by this method will not be used in that calculation, causing unphysical behavior in the collisions.


**Parameters**:

* **value**: The value of the coefficient of static friction that must be used in the contact.



**Parameters**:

* double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::set_static_friction_coefficient"}]}`
-->

<a id="structIRockyContact_1afe041153be8e43d3e5d7c7a500a49501"></a>
### Function get\_sliding\_distance

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyContact::get_sliding_distance() const
```




**Returns**:

The value of the sliding distance calculated during the most recent simulation timestep. The value of this distance will be available only if its storage was enabled during the setup of the module by using the <code>[IRockyContactScalarsModel::enable\_storage\_sliding\_distance](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1a8e8fb75a47341a734ee04707a58f658f)</code> method. A segmentation fault will occur otherwise.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_sliding_distance"}]}`
-->

<a id="structIRockyContact_1a1acfe6d4f8e36c9fd417a658aac1c041"></a>
### Function get\_is\_sliding\_marker

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS bool IRockyContact::get_is_sliding_marker() const
```




**Returns**:

The value of the sliding marker registered during the most recent calculation of the tangential component of the contact force. This value will be available only if its storage was enabled by using the <code>[IRockyContactScalarsModel::enable\_storage\_is\_sliding\_marker](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1a2a383fbe3de38c7aab855c0b775a293b)</code> method. A segmentation fault will occur otherwise.



**Return type**: ROCKY_FUNCTIONS bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_is_sliding_marker"}]}`
-->

<a id="structIRockyContact_1a379476b7b01576be8fc0eb3f0dde7a1e"></a>
### Function get\_normal\_relative\_velocity

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyContact::get_normal_relative_velocity() const
```




**Returns**:

The value of the normal component of the contact's relative velocity calculated during the last contact force calculation stage executed. This value will be available only if its storage was enabled by using the <code>[IRockyContactScalarsModel::enable\_storage\_normal\_relative\_velocity](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1a30a72264168db13de798df7cdff440c5)</code> method. A segmentation fault will occur otherwise.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_normal_relative_velocity"}]}`
-->

<a id="structIRockyContact_1a9fab3f0e6f78ea64e96209fbbd540b85"></a>
### Function get\_tangential\_relative\_velocity

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyContact::get_tangential_relative_velocity() const
```




**Returns**:

The value of the tangential component of the contact's relative velocity calculated during the last contact force calculation stage executed. This value will be available only if its storage was enabled by using the <code>[IRockyContactScalarsModel::enable\_storage\_tangential\_relative\_velocity](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1ad8ba6db25bce594fbb62b415b0634a95)</code> method. A segmentation fault will occur otherwise.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_tangential_relative_velocity"}]}`
-->

<a id="structIRockyContact_1a21587a9de6f69f4af1d215c3879fca66"></a>
### Function get\_normal\_adhesion\_force

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyContact::get_normal_adhesion_force() const
```




**Returns**:

The value of the normal component of the adhesion force calculated during the last adhesion force calculation stage executed. This value will be available only if its storage was enabled by using the <code>[IRockyContactScalarsModel::enable\_storage\_normal\_adhesion\_force](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1a0b773628077520e21f189ab64b8b1e69)</code> method. A segmentation fault will occur otherwise.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_normal_adhesion_force"}]}`
-->

<a id="structIRockyContact_1a20d7ffad55e1c1c28c848eb3b09c41f2"></a>
### Function get\_tangential\_adhesion\_force

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyContact::get_tangential_adhesion_force() const
```




**Returns**:

The value of the tangential component of the adhesion force calculated during the last adhesion force calculation stage executed. This value will be available only if its storage was enabled by using the <code>[IRockyContactScalarsModel::enable\_storage\_tangential\_adhesion\_force](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1ab390c75dee689878d04d1db89be3fb95)</code> method. A segmentation fault will occur otherwise.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_tangential_adhesion_force"}]}`
-->

<a id="structIRockyContact_1afa684887b3dcfad056850ccfdf399ec3"></a>
### Function get\_previous\_normal\_vector

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyContact::get_previous_normal_vector() const
```




**Returns**:

The value of the contact's normal unit vector recorded during the previous time iteration. This value will be available only if its automatic storage was enabled by using the <code>[IRockyContactScalarsModel::enable\_storage\_previous\_normal\_vector](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1a36a468305e9a49ba36de61846260c1f1)</code> method. A segmentation fault will occur otherwise.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_previous_normal_vector"}]}`
-->

<a id="structIRockyContact_1a4d10fc8ec36500e0a8f6673f3e7628fd"></a>
### Function get\_previous\_moment\_vector

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyContact::get_previous_moment_vector() const
```




**Returns**:

The value the previous rolling resistance moment stored by a custom module that implements a custom rolling resistance model. This moment will be available only if a corresponding scalar was enabled by using the <code>[IRockyContactScalarsModel::enable\_previous\_moment\_vector](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1ab2927b1c13fc4325a5bd28ba97e15230)</code> method and the module explicitly stored its value in the previous iteration, by using the <code>[IRockyContact::set\_previous\_moment\_vector](structIRockyContact.md#structIRockyContact_1a302215189897e9ad39f8d7a3ff571d6c)</code> method.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::get_previous_moment_vector"}]}`
-->

<a id="structIRockyContact_1a302215189897e9ad39f8d7a3ff571d6c"></a>
### Function set\_previous\_moment\_vector

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyContact::set_previous_moment_vector(double3 value)
```




**This method allows a module implementing a custom rolling resistance model**:

to store the value of the rolling resistance moment for availability in the next time iteration. It can be used only if the corresponding contact scalar was enabled by using the <code>[IRockyContactScalarsModel::enable\_previous\_moment\_vector](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1ab2927b1c13fc4325a5bd28ba97e15230)</code> method. The difference of the contact scalar that stores this moment in relation to a regular contact scalar is that the orientation of the stored vector is always preserved, regardless of possible internal changes in the topology of the contact.


**Parameters**:

* **value**: The value of the rolling resistance moment just calculated.



**Parameters**:

* double3 **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContact::set_previous_moment_vector"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)