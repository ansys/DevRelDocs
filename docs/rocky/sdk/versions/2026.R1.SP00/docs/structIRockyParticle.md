# Structure IRockyParticle

<a id="structIRockyParticle"></a>

![][C++]
![][public]

**#include <rocky\_particle\_api.hpp>**



<code>[IRockyParticle](structIRockyParticle.md#structIRockyParticle)</code> is an interface for the internal particle object in Rocky. A particle object is the code representation of an individual particle in a Rocky simulation. It has several access methods to particle-related properties, as well as _particle scalars_, which are special variables that store values per particle that are preserved between time iterations. Values of _particle scalars_ can be displayed in a 3D window as any other built-in particle property in Rocky. All property and variable values made available through <code>[IRockyParticle](structIRockyParticle.md#structIRockyParticle)</code> are dimensionless.

## Members

* [add\_force](structIRockyParticle.md#structIRockyParticle_1aebc83f532d4bd643046c1c8a93e09f1d)
* [add\_moment](structIRockyParticle.md#structIRockyParticle_1a8bb789078434998231949cc5c7c5f3b4)
* [add\_to\_contacts\_search](structIRockyParticle.md#structIRockyParticle_1afe35f545701281de61b805237f4c5d8f)
* [disable\_related\_particle\_contacts](structIRockyParticle.md#structIRockyParticle_1a98c502d7e6af16bbefdb1ff769810980)
* [disable\_related\_triangle\_contacts](structIRockyParticle.md#structIRockyParticle_1a1c445981cc6ac5392560d863927b4211)
* [enable\_related\_particle\_contacts](structIRockyParticle.md#structIRockyParticle_1a964a3f27bd8217bbff4301539ecbc1fc)
* [enable\_related\_triangle\_contacts](structIRockyParticle.md#structIRockyParticle_1a6d87618d43d29b5d2dcd7f5946e1d0f4)
* [get\_assembly\_part\_material](structIRockyParticle.md#structIRockyParticle_1a1a737fd34952d960d93f4f8940fd804e)
* [get\_breakage\_scalars](structIRockyParticle.md#structIRockyParticle_1a9efea10efd70526b3ffe3f723253e44e)
* [get\_centroid\_position](structIRockyParticle.md#structIRockyParticle_1ab6a1844166c571196740d7cb3e8331a2)
* [get\_cgm\_scale\_factor](structIRockyParticle.md#structIRockyParticle_1ad931e6e8afe554323408148c245a537e)
* [get\_equivalent\_diameter](structIRockyParticle.md#structIRockyParticle_1a5951469e0997dab052087895e2ebd95c)
* [get\_gravity](structIRockyParticle.md#structIRockyParticle_1a42a986a1659cf8a4374bf43ef6a53f63)
* [get\_impact\_energy](structIRockyParticle.md#structIRockyParticle_1a35881133856b678e30b00dfa1c604b96)
* [get\_mass](structIRockyParticle.md#structIRockyParticle_1a9acf8ddfc5a9c3974e19e616193de571)
* [get\_material](structIRockyParticle.md#structIRockyParticle_1a39ab5586c7a893cbe156d211a10c5efd)
* [get\_material\_index](structIRockyParticle.md#structIRockyParticle_1a42f25fc898697efc23ee5576b936efa4)
* [get\_moment\_of\_inertia](structIRockyParticle.md#structIRockyParticle_1a0ddf76406051617c1cf3ad5602230e74)
* [get\_number\_of\_assembly\_parts](structIRockyParticle.md#structIRockyParticle_1a7174efcf1264a05c6bd5cabe2e927148)
* [get\_orientation\_axis\_angle](structIRockyParticle.md#structIRockyParticle_1adf12c219fb518212af2932b99c39ae52)
* [get\_orientation\_quaternion](structIRockyParticle.md#structIRockyParticle_1afd3262f90c7304197e8915b4d40a58f6)
* [get\_original\_mass](structIRockyParticle.md#structIRockyParticle_1a0239b6fe520fb1bc69196cf4c7c298ac)
* [get\_particle\_group\_index](structIRockyParticle.md#structIRockyParticle_1a063a7d183c621dfffd7fdd644635e51a)
* [get\_poisson\_ratio](structIRockyParticle.md#structIRockyParticle_1a6d11bc8367e406b7a56f98d92871f059)
* [get\_release\_time](structIRockyParticle.md#structIRockyParticle_1af2ebac6fa5a5f9dbb5c37423ef96c471)
* [get\_resultant\_force](structIRockyParticle.md#structIRockyParticle_1ac520e2ca9342f42a1260d42bb1f882a0)
* [get\_resultant\_moment](structIRockyParticle.md#structIRockyParticle_1a58a9a71f0e2cd25a475c5681682a8c7e)
* [get\_rolling\_resistance\_coefficient](structIRockyParticle.md#structIRockyParticle_1ad9ba593e2adb58a8273b23214b14b60b)
* [get\_rotational\_velocity](structIRockyParticle.md#structIRockyParticle_1a1520d3fc8a40e54ad4c47ddb428fddff)
* [get\_scalars](structIRockyParticle.md#structIRockyParticle_1a305fe472ba945e793d450053dc3b092f)
* [get\_scalars](structIRockyParticle.md#structIRockyParticle_1a0899498770cbebb4b538cbc736e82231)
* [get\_size](structIRockyParticle.md#structIRockyParticle_1a702b4bce44c268065cf9961ea88375c3)
* [get\_solid\_volume](structIRockyParticle.md#structIRockyParticle_1a0fac38fa13ec5aa6495119247b8aa5d6)
* [get\_specific\_heat](structIRockyParticle.md#structIRockyParticle_1a5007ecaea7e26cfe50579a959ba91c07)
* [get\_sphericity](structIRockyParticle.md#structIRockyParticle_1ad60e62be9c1084b624f690d94ce0474b)
* [get\_strength](structIRockyParticle.md#structIRockyParticle_1a3479e29c70b861ee7724b3dec473f126)
* [get\_surface\_area](structIRockyParticle.md#structIRockyParticle_1a2200149822388403dfd42afe5574f1f9)
* [get\_tag](structIRockyParticle.md#structIRockyParticle_1a2949c9bf228226090d1e7cf95b63c38f)
* [get\_thermal\_conductivity](structIRockyParticle.md#structIRockyParticle_1a8c3db18d0afb4ebe6d4654d833d904cb)
* [get\_transfer\_scalars](structIRockyParticle.md#structIRockyParticle_1af1bcfda3336619839953a01fbe7828ea)
* [get\_translational\_velocity](structIRockyParticle.md#structIRockyParticle_1a38420bd69fec1d3a803cbc5d79ea0197)
* [get\_volume](structIRockyParticle.md#structIRockyParticle_1a9a1df9319687462ce0c43b10e691299f)
* [is\_assembly](structIRockyParticle.md#structIRockyParticle_1a7324f759e40ff9147728dd7e666f9816)
* [is\_element](structIRockyParticle.md#structIRockyParticle_1a0ede768e89206dcba2b8929eefa961e7)
* [remove](structIRockyParticle.md#structIRockyParticle_1a2fdb4c9362bd6b650aba18ad2fb6c66d)
* [remove\_from\_contacts\_search](structIRockyParticle.md#structIRockyParticle_1af4d25f3ada35c955fd0fe7ba24a244c4)
* [set\_frozen](structIRockyParticle.md#structIRockyParticle_1ae6c885d84af14576949205c3b9fb5bd5)
* [set\_poisson\_ratio](structIRockyParticle.md#structIRockyParticle_1a7225418a496fdaae3dc3ba7bc3d7ebca)
* [set\_specific\_heat](structIRockyParticle.md#structIRockyParticle_1a6ea5a3cc6356d1b80b3e8cde1fe43211)
* [set\_thermal\_conductivity](structIRockyParticle.md#structIRockyParticle_1a876773eeef5269e1335ae8a43cbb2d97)

## Public functions

### Function get\_material

<a id="structIRockyParticle_1a39ab5586c7a893cbe156d211a10c5efd"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS IRockyMaterial IRockyParticle::get_material() const
```




**Returns**:

An <code>[IRockyMaterial](structIRockyMaterial.md#structIRockyMaterial)</code> object that gives access to the values of physical properties associated to the material from which the particle is made.


!> **Attention** \
Invoking this method on assembly particles results on undefined behavior, as assembly particles may have multiple materials. Prefer to use <code>[IRockyParticle::get\_assembly\_part\_material](structIRockyParticle.md#structIRockyParticle_1a1a737fd34952d960d93f4f8940fd804e)</code> instead.



**Return type**: ROCKY_FUNCTIONS [IRockyMaterial](structIRockyMaterial.md#structIRockyMaterial)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_material"}]}`
-->

### Function get\_centroid\_position

<a id="structIRockyParticle_1ab6a1844166c571196740d7cb3e8331a2"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyParticle::get_centroid_position() const
```




**Returns**:

The Cartesian coordinates of the current position of the particle's centroid.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_centroid_position"}]}`
-->

### Function get\_mass

<a id="structIRockyParticle_1a9acf8ddfc5a9c3974e19e616193de571"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyParticle::get_mass() const
```




**Returns**:

The current value of the particle's mass. This value will be different from the original particle's mass only if the mass increment particle scalar is enabled in the simulation.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_mass"}]}`
-->

### Function get\_original\_mass

<a id="structIRockyParticle_1a0239b6fe520fb1bc69196cf4c7c298ac"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyParticle::get_original_mass() const
```




**Returns**:

The original value of the mass of a particle when it enters into the simulation.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_original_mass"}]}`
-->

### Function get\_size

<a id="structIRockyParticle_1a702b4bce44c268065cf9961ea88375c3"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyParticle::get_size() const
```




**Returns**:

The current value of the particle's size.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_size"}]}`
-->

### Function get\_release\_time

<a id="structIRockyParticle_1af2ebac6fa5a5f9dbb5c37423ef96c471"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyParticle::get_release_time() const
```




**Returns**:

The time at which the particle was released.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_release_time"}]}`
-->

### Function get\_cgm\_scale\_factor

<a id="structIRockyParticle_1ad931e6e8afe554323408148c245a537e"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyParticle::get_cgm_scale_factor() const
```




**Returns**:

The particle's Coarse-grain Modeling (CGM) scale factor.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_cgm_scale_factor"}]}`
-->

### Function get\_volume

<a id="structIRockyParticle_1a9a1df9319687462ce0c43b10e691299f"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyParticle::get_volume() const
```




**Returns**:

The current value of the particle's volume. If the particle is porous (porosity > 0), the volume returned is the particle's total or bulk volume, that is the volume obtained by summing the solid volume and the pore volume.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_volume"}]}`
-->

### Function get\_solid\_volume

<a id="structIRockyParticle_1a0fac38fa13ec5aa6495119247b8aa5d6"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyParticle::get_solid_volume() const
```




**Returns**:

The current value of the particle's solid volume. If the particle is porous (porosity > 0), the solid volume is the volume of the solid matrix. Otherwise, the volume returned by this function will coincide with the one returned by the <code>get_volume</code> function.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_solid_volume"}]}`
-->

### Function get\_surface\_area

<a id="structIRockyParticle_1a2200149822388403dfd42afe5574f1f9"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyParticle::get_surface_area() const
```




**Returns**:

The current value of the particle's surface area.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_surface_area"}]}`
-->

### Function get\_equivalent\_diameter

<a id="structIRockyParticle_1a5951469e0997dab052087895e2ebd95c"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyParticle::get_equivalent_diameter() const
```




**Returns**:

The equivalent diameter of the particle, which is defined as the diameter of a sphere of volume equal to the particle's volume.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_equivalent_diameter"}]}`
-->

### Function get\_sphericity

<a id="structIRockyParticle_1ad60e62be9c1084b624f690d94ce0474b"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyParticle::get_sphericity() const
```




**Returns**:

The particle's sphericity value, which is defined as the ratio of `formula {"type":"element","name":"formula","attributes":{"id":"0"},"children":[{"type":"text","text":"$A_s$"}]}` to `formula {"type":"element","name":"formula","attributes":{"id":"1"},"children":[{"type":"text","text":"$A_p$"}]}`, where `formula {"type":"element","name":"formula","attributes":{"id":"0"},"children":[{"type":"text","text":"$A_s$"}]}` is the surface area of a sphere with the same volume as the particle, whereas `formula {"type":"element","name":"formula","attributes":{"id":"1"},"children":[{"type":"text","text":"$A_p$"}]}` is the surface area of the particle itself. In general terms, the sphericity measures how closely the particle's actual shape resembles the shape of a perfect sphere.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_sphericity"}]}`
-->

### Function get\_translational\_velocity

<a id="structIRockyParticle_1a38420bd69fec1d3a803cbc5d79ea0197"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyParticle::get_translational_velocity() const
```




**Returns**:

The current particle's translational velocity vector expressed in Cartesian coordinates.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_translational_velocity"}]}`
-->

### Function get\_rotational\_velocity

<a id="structIRockyParticle_1a1520d3fc8a40e54ad4c47ddb428fddff"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyParticle::get_rotational_velocity() const
```




**Returns**:

The current particle's rotational velocity vector expressed in Cartesian coordinates.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_rotational_velocity"}]}`
-->

### Function get\_impact\_energy

<a id="structIRockyParticle_1a35881133856b678e30b00dfa1c604b96"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyParticle::get_impact_energy() const
```




**Returns**:

The sum of the impact energy registered in all active contacts on the surface of the particle until the current time.


!> **Attention** \
This value will be available only if an instantaneous breakage model is enabled in the simulation.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_impact_energy"}]}`
-->

### Function get\_strength

<a id="structIRockyParticle_1a3479e29c70b861ee7724b3dec473f126"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyParticle::get_strength() const
```




**Returns**:

A random value between 0 and 1 assigned to a particle at the time of generation. This value can be related to the breakage probability in a custom instantaneous breakage model.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_strength"}]}`
-->

### Function get\_gravity

<a id="structIRockyParticle_1a42a986a1659cf8a4374bf43ef6a53f63"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyParticle::get_gravity() const
```




**Returns**:

The gravitational acceleration vector in Cartesian coordinates.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_gravity"}]}`
-->

### Function get\_particle\_group\_index

<a id="structIRockyParticle_1a063a7d183c621dfffd7fdd644635e51a"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS int IRockyParticle::get_particle_group_index() const
```




**Returns**:

The index that uniquely identifies the particle group to which the particle belongs.



**Return type**: ROCKY_FUNCTIONS int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_particle_group_index"}]}`
-->

### Function get\_material\_index

<a id="structIRockyParticle_1a42f25fc898697efc23ee5576b936efa4"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS int IRockyParticle::get_material_index() const
```




**Returns**:

The material index associated to that particle



**Return type**: ROCKY_FUNCTIONS int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_material_index"}]}`
-->

### Function get\_rolling\_resistance\_coefficient

<a id="structIRockyParticle_1ad9ba593e2adb58a8273b23214b14b60b"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyParticle::get_rolling_resistance_coefficient() const
```




**Returns**:

The particle's rolling resistance coefficient



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_rolling_resistance_coefficient"}]}`
-->

### Function get\_orientation\_axis\_angle

<a id="structIRockyParticle_1adf12c219fb518212af2932b99c39ae52"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS thrust::tuple< double3, double > IRockyParticle::get_orientation_axis_angle() const
```




**Returns**:

A tuple whose two components define the axis-angle particle orientation. The first one is a three dimensional vector representing the orientation axis, the second one is a single value representing the angle.



**Return type**: ROCKY_FUNCTIONS thrust::tuple< double3, double >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_orientation_axis_angle"}]}`
-->

### Function get\_orientation\_quaternion

<a id="structIRockyParticle_1afd3262f90c7304197e8915b4d40a58f6"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double4 IRockyParticle::get_orientation_quaternion() const
```




**Returns**:

The quaternion that represents the particle's orientation, expressed as a four-dimensional array `formula {"type":"element","name":"formula","attributes":{"id":"2"},"children":[{"type":"text","text":"$(q_r, q_i, q_j, q_k)$"}]}`.



**Return type**: ROCKY_FUNCTIONS double4

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_orientation_quaternion"}]}`
-->

### Function get\_resultant\_force

<a id="structIRockyParticle_1ac520e2ca9342f42a1260d42bb1f882a0"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyParticle::get_resultant_force() const
```




**Returns**:

The resultant force vector acting on the particle, in Cartesian coordinates. This force is a combination of the forces calculated during the current time iteration that are applied on the particle, including contact forces, joint forces, fluid forces, and other forces coming from custom modules. If this method is called before the force calculation stage it will return a zero vector.


!> **Attention** \
The force of gravity acting on the particle is not included in this resultant force.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_resultant_force"}]}`
-->

### Function get\_resultant\_moment

<a id="structIRockyParticle_1a58a9a71f0e2cd25a475c5681682a8c7e"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyParticle::get_resultant_moment() const
```




**Returns**:

The resultant moment vector applied to the particle, in Cartesian coordinates. The resultant moment is the combination of all moments caused by the forces acting upon the particle, including contact forces, joint forces, fluid forces, and other forces coming from custom modules. If this method is called before the force calculation stage it will return a zero vector.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_resultant_moment"}]}`
-->

### Function get\_thermal\_conductivity

<a id="structIRockyParticle_1a8c3db18d0afb4ebe6d4654d833d904cb"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyParticle::get_thermal_conductivity() const
```




**Returns**:

The particle's thermal conductivity. If this property was defined as variable in the module's specification file, the method will return the value specifically assigned to the particle. Otherwise, it will return the value specified in the Rocky UI for the particle's associated material.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_thermal_conductivity"}]}`
-->

### Function set\_thermal\_conductivity

<a id="structIRockyParticle_1a876773eeef5269e1335ae8a43cbb2d97"></a>

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticle::set_thermal_conductivity(double value)
```




**This method sets the thermal conductivity value for the particle. This operation will**:

be allowed only if thermal conductivity was defined as a variable property for particles in the module's specification file. Otherwise, a segmentation fault will occur.


**Parameters**:

* **value**: The thermal conductivity to be set.



**Parameters**:

* double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::set_thermal_conductivity"}]}`
-->

### Function get\_poisson\_ratio

<a id="structIRockyParticle_1a6d11bc8367e406b7a56f98d92871f059"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyParticle::get_poisson_ratio() const
```




**Returns**:

The particle's Poisson's ratio value. If this property was defined as variable in the module's specification file, the method will return the value specifically assigned to the particle. Otherwise, it will return the value specified in the Rocky UI for the particle's associated material.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_poisson_ratio"}]}`
-->

### Function set\_poisson\_ratio

<a id="structIRockyParticle_1a7225418a496fdaae3dc3ba7bc3d7ebca"></a>

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticle::set_poisson_ratio(double value)
```




**This method sets the Poisson's ratio value for the particle. This operation will**:

be allowed only if Poisson's ratio was defined as a variable property for particles in the module's specification file. Otherwise, a segmentation fault will occur.


**Parameters**:

* **value**: The Poisson's ratio to be set.



**Parameters**:

* double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::set_poisson_ratio"}]}`
-->

### Function get\_specific\_heat

<a id="structIRockyParticle_1a5007ecaea7e26cfe50579a959ba91c07"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyParticle::get_specific_heat() const
```




**Returns**:

The particle's specific heat value. If this property was defined as variable in the module's specification file, the method will return the value specifically assigned to the particle. Otherwise, it will return the value specified in the Rocky UI for the particle's associated material.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_specific_heat"}]}`
-->

### Function get\_tag

<a id="structIRockyParticle_1a2949c9bf228226090d1e7cf95b63c38f"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS int IRockyParticle::get_tag() const
```




**Returns**:

The tag value inherited from the tags assigned to the segments of a custom fiber, if the <code>[IRockyParticle](structIRockyParticle.md#structIRockyParticle)</code> object represents an element of a custom fiber. The values of those tags must be specified in the column labeled "tag" in the csv file that defines the geometry of a custom fiber. All elements that arise from the subdivision of a given segment inherit the tag value assigned to that segment. If tags are not defined for a custom fiber or if this function is used with particles which are not elements of a custom fiber, this function will return -1.



**Return type**: ROCKY_FUNCTIONS int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_tag"}]}`
-->

### Function set\_specific\_heat

<a id="structIRockyParticle_1a6ea5a3cc6356d1b80b3e8cde1fe43211"></a>

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticle::set_specific_heat(double value)
```




**This method sets the specific heat value for the particle. This operation will**:

be allowed only if Poisson's ratio was defined as a variable property for particles in the module's specification file. Otherwise, a segmentation fault will occur.


**Parameters**:

* **value**: The specific heat to be set.



**Parameters**:

* double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::set_specific_heat"}]}`
-->

### Function get\_scalars

<a id="structIRockyParticle_1a305fe472ba945e793d450053dc3b092f"></a>

![][public]


```cpp
ROCKY_FUNCTIONS IRockyParticleScalars IRockyParticle::get_scalars()
```




**Returns**:

An <code>[IRockyParticleScalars](structIRockyParticleScalars.md#structIRockyParticleScalars)</code> object, that gives access to all particle scalars variables defined in the project.



**Return type**: ROCKY_FUNCTIONS [IRockyParticleScalars](structIRockyParticleScalars.md#structIRockyParticleScalars)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_scalars"}]}`
-->

### Function get\_scalars

<a id="structIRockyParticle_1a0899498770cbebb4b538cbc736e82231"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS const IRockyParticleScalars IRockyParticle::get_scalars() const
```




**Returns**:

A const <code>[IRockyParticleScalars](structIRockyParticleScalars.md#structIRockyParticleScalars)</code> object, that gives access to all particle scalars variables defined in the project.



**Return type**: ROCKY_FUNCTIONS const [IRockyParticleScalars](structIRockyParticleScalars.md#structIRockyParticleScalars)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_scalars"}]}`
-->

### Function get\_transfer\_scalars

<a id="structIRockyParticle_1af1bcfda3336619839953a01fbe7828ea"></a>

![][public]


```cpp
ROCKY_FUNCTIONS IRockyParticleTransferScalars IRockyParticle::get_transfer_scalars()
```




**Returns**:

An <code>[IRockyParticleTransferScalars](structIRockyParticleTransferScalars.md#structIRockyParticleTransferScalars)</code> object, that gives access to all particle transfer scalars variables defined in the project.



**Return type**: ROCKY_FUNCTIONS [IRockyParticleTransferScalars](structIRockyParticleTransferScalars.md#structIRockyParticleTransferScalars)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_transfer_scalars"}]}`
-->

### Function get\_breakage\_scalars

<a id="structIRockyParticle_1a9efea10efd70526b3ffe3f723253e44e"></a>

![][public]


```cpp
ROCKY_FUNCTIONS IRockyParticleBreakageScalars IRockyParticle::get_breakage_scalars()
```




**Returns**:

An <code>[IRockyParticleBreakageScalars](structIRockyParticleBreakageScalars.md#structIRockyParticleBreakageScalars)</code> object, that gives access to all particle breakage scalars variables defined in the project.



**Return type**: ROCKY_FUNCTIONS [IRockyParticleBreakageScalars](structIRockyParticleBreakageScalars.md#structIRockyParticleBreakageScalars)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_breakage_scalars"}]}`
-->

### Function remove

<a id="structIRockyParticle_1a2fdb4c9362bd6b650aba18ad2fb6c66d"></a>

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticle::remove()
```




**This method removes permanently the particle from the simulation.**:



**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::remove"}]}`
-->

### Function add\_force

<a id="structIRockyParticle_1aebc83f532d4bd643046c1c8a93e09f1d"></a>

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticle::add_force(const double3 &force)
```




**This method sums a custom calculated force to the contact and body forces**:

acting on the particle.


**Parameters**:

* **force**: The custom force vector in Cartesian coordinates.



**Parameters**:

* const double3 & **force**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::add_force"}]}`
-->

### Function add\_moment

<a id="structIRockyParticle_1a8bb789078434998231949cc5c7c5f3b4"></a>

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticle::add_moment(const double3 &moment)
```




**This method sums a custom calculated moment to the moments**:

acting on the particle.


**Parameters**:

* **moment**: The custom moment vector in Cartesian coordinates.



**Parameters**:

* const double3 & **moment**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::add_moment"}]}`
-->

### Function set\_frozen

<a id="structIRockyParticle_1ae6c885d84af14576949205c3b9fb5bd5"></a>

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticle::set_frozen(bool frozen)
```




**This method sets the frozen state of a particle. When the frozen state of a particle**:

is set to <code>true</code>, the solution of the motion equations for this particle are skipped afterwards.


**Parameters**:

* **frozen**: True if the particle should be frozen, false otherwise.



**Parameters**:

* bool **frozen**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::set_frozen"}]}`
-->

### Function disable\_related\_particle\_contacts

<a id="structIRockyParticle_1a98c502d7e6af16bbefdb1ff769810980"></a>

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticle::disable_related_particle_contacts()
```




**This method activates the conditional disabling of particle-to-particle contacts detection.**:

A given particle-to-particle contact will be ignored during the detection stage only if this method has been applied to both particles.



**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::disable_related_particle_contacts"}]}`
-->

### Function enable\_related\_particle\_contacts

<a id="structIRockyParticle_1a964a3f27bd8217bbff4301539ecbc1fc"></a>

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticle::enable_related_particle_contacts()
```




**This method deactivates the conditional disabling of particle-to-particle contact detection,**:

previously activated using the <code>[IRockyParticle::disable\_related\_particle\_contacts](structIRockyParticle.md#structIRockyParticle_1a98c502d7e6af16bbefdb1ff769810980)</code>



**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::enable_related_particle_contacts"}]}`
-->

### Function disable\_related\_triangle\_contacts

<a id="structIRockyParticle_1a1c445981cc6ac5392560d863927b4211"></a>

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticle::disable_related_triangle_contacts()
```




**This method disables the detection of particle-to-triangle contacts for the particle.**:



**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::disable_related_triangle_contacts"}]}`
-->

### Function enable\_related\_triangle\_contacts

<a id="structIRockyParticle_1a6d87618d43d29b5d2dcd7f5946e1d0f4"></a>

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticle::enable_related_triangle_contacts()
```




**This method enables the detection of particle-to-triangle contacts for the particle.**:



**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::enable_related_triangle_contacts"}]}`
-->

### Function get\_moment\_of\_inertia

<a id="structIRockyParticle_1a0ddf76406051617c1cf3ad5602230e74"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS const double3 IRockyParticle::get_moment_of_inertia() const
```




**Returns**:

A 3D vector whose components are the principal values of the particle's moment of inertia tensor.



**Return type**: ROCKY_FUNCTIONS const double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_moment_of_inertia"}]}`
-->

### Function is\_element

<a id="structIRockyParticle_1a0ede768e89206dcba2b8929eefa961e7"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS bool IRockyParticle::is_element() const
```




**Returns**:

True if the given particle is an element within a flexible particle, false otherwise.



**Return type**: ROCKY_FUNCTIONS bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::is_element"}]}`
-->

### Function is\_assembly

<a id="structIRockyParticle_1a7324f759e40ff9147728dd7e666f9816"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS bool IRockyParticle::is_assembly() const
```




**Returns**:

True if the given particle is an assembly, false otherwise.



**Return type**: ROCKY_FUNCTIONS bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::is_assembly"}]}`
-->

### Function get\_number\_of\_assembly\_parts

<a id="structIRockyParticle_1a7174efcf1264a05c6bd5cabe2e927148"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS size_t IRockyParticle::get_number_of_assembly_parts() const
```




**Returns**:

The number of parts that compose the assembly.



**Return type**: ROCKY_FUNCTIONS size_t

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_number_of_assembly_parts"}]}`
-->

### Function get\_assembly\_part\_material

<a id="structIRockyParticle_1a1a737fd34952d960d93f4f8940fd804e"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS IRockyMaterial IRockyParticle::get_assembly_part_material(size_t part_id) const
```




**Parameters**:

* **part_id**: The index of an assembly part.


**Returns**:

An <code>[IRockyMaterial](structIRockyMaterial.md#structIRockyMaterial)</code> object that gives access to the values of physical properties associated to the material from which the assembly part referent to <code>part_id</code> is made.



**Parameters**:

* size_t **part_id**

**Return type**: ROCKY_FUNCTIONS [IRockyMaterial](structIRockyMaterial.md#structIRockyMaterial)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::get_assembly_part_material"}]}`
-->

### Function remove\_from\_contacts\_search

<a id="structIRockyParticle_1af4d25f3ada35c955fd0fe7ba24a244c4"></a>

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticle::remove_from_contacts_search()
```




**This method disables the detection of all contacts for the particle.**:



**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::remove_from_contacts_search"}]}`
-->

### Function add\_to\_contacts\_search

<a id="structIRockyParticle_1afe35f545701281de61b805237f4c5d8f"></a>

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyParticle::add_to_contacts_search()
```




**This method enables the detection of all contacts for the particle.**:



**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticle::add_to_contacts_search"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)