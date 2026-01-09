<a id="classIRockyInteractionCalculationsData"></a>
# Class IRockyInteractionCalculationsData

![][C++]
![][public]

**#include <rocky\_timestep\_api.h>**



<code>[IRockyInteractionCalculationsData](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData)</code> gives access to data and methods needed for calculations related to materials, material interactions and particle groups, during the setup phase of a module. <code>[IRockyInteractionCalculationsData](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData)</code> is a non-instantiable class, only derived classes can be used through Rocky API.

**Inherited by**:

* [IRockyAdhesiveDistanceData](classIRockyAdhesiveDistanceData.md#classIRockyAdhesiveDistanceData)
* [IRockyTimestepData](classIRockyTimestepData.md#classIRockyTimestepData)

## Members

* [get\_geometry\_material\_index](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1a05cb28a940233bc976b806a5893c639c)
* [get\_material](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1a609eb08b9a568e07c35953bd616d9551)
* [get\_material\_interaction](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1aeb94fd8ed1f75bd0523634285ad94e4d)
* [get\_material\_interaction\_index](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1a1cf7ad2b906aa2f033494b390522bbb3)
* [get\_number\_geometry\_materials](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1a986da6321cca08d20d20dbd43962a74a)
* [get\_number\_particle\_groups](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1ab5fb8e3d498bfc78f116eec7b53b22b8)
* [get\_particle\_material\_index](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1a700a3993ce6c50786c1323e0b91a7c3a)
* [get\_particle\_max\_sieve\_size](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1ac12016128279790932537b32c1c7410d)
* [get\_particle\_min\_mass](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1a641adbab81c6c430aa1b0eae6eff29f4)
* [get\_particle\_min\_sieve\_size](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1a1ce09b00f677c903a2d25426f8447300)

## Public functions

<a id="classIRockyInteractionCalculationsData_1ab5fb8e3d498bfc78f116eec7b53b22b8"></a>
### Function get\_number\_particle\_groups

![][public]
![][const]


```cpp
int IRockyInteractionCalculationsData::get_number_particle_groups() const
```




**Returns**:

The total number of particle groups defined in the project. A particle group is a category of particles with the same shape and material.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyInteractionCalculationsData::get_number_particle_groups"}]}`
-->

<a id="classIRockyInteractionCalculationsData_1a700a3993ce6c50786c1323e0b91a7c3a"></a>
### Function get\_particle\_material\_index

![][public]
![][const]


```cpp
int IRockyInteractionCalculationsData::get_particle_material_index(int group_index) const
```




**Returns**:

The index that uniquely identifies internally in Rocky the material associated with a particle group.


**Parameters**:

* **group_index**: The index that identifies internally a particle group in Rocky.



**Parameters**:

* int **group_index**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyInteractionCalculationsData::get_particle_material_index"}]}`
-->

<a id="classIRockyInteractionCalculationsData_1a1ce09b00f677c903a2d25426f8447300"></a>
### Function get\_particle\_min\_sieve\_size

![][public]
![][const]


```cpp
double IRockyInteractionCalculationsData::get_particle_min_sieve_size(int group_index) const
```




**Returns**:

The sieve size of the smallest particle in a particle group. Zero is returned if no particles belonging to the particle group are actually injected into the simulation.


**Parameters**:

* **group_index**: The index that identifies internally a particle group in Rocky.



**Parameters**:

* int **group_index**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyInteractionCalculationsData::get_particle_min_sieve_size"}]}`
-->

<a id="classIRockyInteractionCalculationsData_1ac12016128279790932537b32c1c7410d"></a>
### Function get\_particle\_max\_sieve\_size

![][public]
![][const]


```cpp
double IRockyInteractionCalculationsData::get_particle_max_sieve_size(int group_index) const
```




**Returns**:

The sieve size of the largest particle in a particle group. Zero is returned if no particles belonging to the particle group are actually injected into the simulation.


**Parameters**:

* **group_index**: The index that identifies internally a particle group in Rocky.



**Parameters**:

* int **group_index**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyInteractionCalculationsData::get_particle_max_sieve_size"}]}`
-->

<a id="classIRockyInteractionCalculationsData_1a641adbab81c6c430aa1b0eae6eff29f4"></a>
### Function get\_particle\_min\_mass

![][public]
![][const]


```cpp
double IRockyInteractionCalculationsData::get_particle_min_mass(int group_index) const
```




**Returns**:

The mass of the smallest particle in a particle group. Zero is returned if no particles belonging to the particle group are actually injected into the simulation.


**Parameters**:

* **group_index**: The index that identifies internally a particle group in Rocky.



**Parameters**:

* int **group_index**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyInteractionCalculationsData::get_particle_min_mass"}]}`
-->

<a id="classIRockyInteractionCalculationsData_1a986da6321cca08d20d20dbd43962a74a"></a>
### Function get\_number\_geometry\_materials

![][public]
![][const]


```cpp
int IRockyInteractionCalculationsData::get_number_geometry_materials() const
```




**Returns**:

The total number of different materials associated to the geometries or boundaries in a project.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyInteractionCalculationsData::get_number_geometry_materials"}]}`
-->

<a id="classIRockyInteractionCalculationsData_1a05cb28a940233bc976b806a5893c639c"></a>
### Function get\_geometry\_material\_index

![][public]
![][const]


```cpp
int IRockyInteractionCalculationsData::get_geometry_material_index(int index) const
```




**Returns**:

The internal index in Rocky that identifies a material.


**Parameters**:

* **index**: The index of a geometry material in a loop over all materials associated to geometries in a project.



**Parameters**:

* int **index**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyInteractionCalculationsData::get_geometry_material_index"}]}`
-->

<a id="classIRockyInteractionCalculationsData_1a609eb08b9a568e07c35953bd616d9551"></a>
### Function get\_material

![][public]
![][const]


```cpp
IRockyMaterial IRockyInteractionCalculationsData::get_material(int index) const
```




**Returns**:

An <code>[IRockyMaterial](structIRockyMaterial.md#structIRockyMaterial)</code> object that gives access to the property values associated to a given material.


**Parameters**:

* **index**: The internal index in Rocky that identifies a material.



**Parameters**:

* int **index**

**Return type**: [IRockyMaterial](structIRockyMaterial.md#structIRockyMaterial)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyInteractionCalculationsData::get_material"}]}`
-->

<a id="classIRockyInteractionCalculationsData_1a1cf7ad2b906aa2f033494b390522bbb3"></a>
### Function get\_material\_interaction\_index

![][public]
![][const]


```cpp
int IRockyInteractionCalculationsData::get_material_interaction_index(int home_index, int near_index) const
```




**Returns**:

The internal index in Rocky that identifies a material interaction.


**Parameters**:

* **home_index**: The index of the first material.
* **near_index**: The index of the second material.



**Parameters**:

* int **home_index**
* int **near_index**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyInteractionCalculationsData::get_material_interaction_index"}]}`
-->

<a id="classIRockyInteractionCalculationsData_1aeb94fd8ed1f75bd0523634285ad94e4d"></a>
### Function get\_material\_interaction

![][public]
![][const]


```cpp
IRockyMaterialInteraction IRockyInteractionCalculationsData::get_material_interaction(int home_index, int near_index) const
```




**Returns**:

An <code>[IRockyMaterialInteraction](structIRockyMaterialInteraction.md#structIRockyMaterialInteraction)</code> object that gives access to the property values associated to a given material interaction.


**Parameters**:

* **home_index**: The index of the first material.
* **near_index**: The index of the second material.



**Parameters**:

* int **home_index**
* int **near_index**

**Return type**: [IRockyMaterialInteraction](structIRockyMaterialInteraction.md#structIRockyMaterialInteraction)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyInteractionCalculationsData::get_material_interaction"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"rocky__timestep__api_8h"},"children":[{"type":"text","text":"rocky_timestep_api.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)