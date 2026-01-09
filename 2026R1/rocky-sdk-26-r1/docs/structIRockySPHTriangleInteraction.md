<a id="structIRockySPHTriangleInteraction"></a>
# Structure IRockySPHTriangleInteraction

![][C++]
![][public]

**#include <rocky\_sph\_interaction\_api.hpp>**



<code>[IRockySPHTriangleInteraction](structIRockySPHTriangleInteraction.md#structIRockySPHTriangleInteraction)</code> is a code representation of a pair of neighbor SPH element / geometry triangle with a force interaction. Within Rocky, this pair is usually called _SPH triangle interaction_.

## Members

* [add\_acceleration](structIRockySPHTriangleInteraction.md#structIRockySPHTriangleInteraction_1a1578dfd6da083096eb169fe24913dd5b)
* [add\_force](structIRockySPHTriangleInteraction.md#structIRockySPHTriangleInteraction_1a749ae0224b1bd279d33404b3d0b84010)
* [calculate\_element\_triangle\_distance](structIRockySPHTriangleInteraction.md#structIRockySPHTriangleInteraction_1a6bfc347dab63cdbb89a8045f878ba16f)
* [get\_boundary\_velocity](structIRockySPHTriangleInteraction.md#structIRockySPHTriangleInteraction_1ab240320819db1ece083e25b69f305e12)
* [get\_home\_element](structIRockySPHTriangleInteraction.md#structIRockySPHTriangleInteraction_1ae83d8750e222b2a46e6f901fd20b80d5)
* [get\_home\_element\_velocity](structIRockySPHTriangleInteraction.md#structIRockySPHTriangleInteraction_1afc2786e2e46e3b025371c17290a88f45)
* [get\_near\_triangle](structIRockySPHTriangleInteraction.md#structIRockySPHTriangleInteraction_1a469b4ac53234c9e707fee62725b0470a)
* [get\_normal\_relative\_velocity](structIRockySPHTriangleInteraction.md#structIRockySPHTriangleInteraction_1a9df83c2a83bd932798eba6a099398ce4)
* [get\_orthogonal\_projection](structIRockySPHTriangleInteraction.md#structIRockySPHTriangleInteraction_1a665a945d4045772b3a4759b76daf697b)
* [get\_tangential\_relative\_velocity](structIRockySPHTriangleInteraction.md#structIRockySPHTriangleInteraction_1a5ff11979743a9bd389afbc153b7124d9)
* [get\_unit\_vector](structIRockySPHTriangleInteraction.md#structIRockySPHTriangleInteraction_1a23aa813897c50610e3989dc625f1993a)
* [get\_wall\_turbulent\_thermal\_conductance](structIRockySPHTriangleInteraction.md#structIRockySPHTriangleInteraction_1aaae7a8fe9a92cdcd25f7f4d84a21a9f8)

## Public functions

<a id="structIRockySPHTriangleInteraction_1ae83d8750e222b2a46e6f901fd20b80d5"></a>
### Function get\_home\_element

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS IRockySPHElement IRockySPHTriangleInteraction::get_home_element() const
```




**Returns**:

An <code>[IRockySPHElement](structIRockySPHElement.md#structIRockySPHElement)</code> object representing the SPH element labeled as _home_ in the _SPH interaction_.



**Return type**: ROCKY_FUNCTIONS [IRockySPHElement](structIRockySPHElement.md#structIRockySPHElement)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHTriangleInteraction::get_home_element"}]}`
-->

<a id="structIRockySPHTriangleInteraction_1a469b4ac53234c9e707fee62725b0470a"></a>
### Function get\_near\_triangle

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS IRockyGeometryTriangle IRockySPHTriangleInteraction::get_near_triangle() const
```




**Returns**:

An <code>[IRockyGeometryTriangle](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle)</code> object representing the geometry triangle labeled as _near_ in the _SPH triangle interaction_.



**Return type**: ROCKY_FUNCTIONS [IRockyGeometryTriangle](structIRockyGeometryTriangle.md#structIRockyGeometryTriangle)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHTriangleInteraction::get_near_triangle"}]}`
-->

<a id="structIRockySPHTriangleInteraction_1a6bfc347dab63cdbb89a8045f878ba16f"></a>
### Function calculate\_element\_triangle\_distance

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHTriangleInteraction::calculate_element_triangle_distance() const
```




**Returns**:

The distance between the SPH element and the near geometry triangle, measured in the normal direction to the triangle's plane.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHTriangleInteraction::calculate_element_triangle_distance"}]}`
-->

<a id="structIRockySPHTriangleInteraction_1a665a945d4045772b3a4759b76daf697b"></a>
### Function get\_orthogonal\_projection

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float3 IRockySPHTriangleInteraction::get_orthogonal_projection() const
```




**Returns**:

The Cartesian coordinates of the orthogonal projection of the home SPH element position onto the near geometry triangle.



**Return type**: ROCKY_FUNCTIONS float3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHTriangleInteraction::get_orthogonal_projection"}]}`
-->

<a id="structIRockySPHTriangleInteraction_1a23aa813897c50610e3989dc625f1993a"></a>
### Function get\_unit\_vector

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float3 IRockySPHTriangleInteraction::get_unit_vector() const
```




**Returns**:

The unit vector normal to the near geometry triangle. This vector always points to the position of the home SPH element.



**Return type**: ROCKY_FUNCTIONS float3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHTriangleInteraction::get_unit_vector"}]}`
-->

<a id="structIRockySPHTriangleInteraction_1afc2786e2e46e3b025371c17290a88f45"></a>
### Function get\_home\_element\_velocity

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float3 IRockySPHTriangleInteraction::get_home_element_velocity() const
```




**Returns**:

The velocity vector of the SPH element labeled as _home_ in the SPH interaction.



**Return type**: ROCKY_FUNCTIONS float3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHTriangleInteraction::get_home_element_velocity"}]}`
-->

<a id="structIRockySPHTriangleInteraction_1ab240320819db1ece083e25b69f305e12"></a>
### Function get\_boundary\_velocity

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float3 IRockySPHTriangleInteraction::get_boundary_velocity() const
```




**Returns**:

The instantaneous velocity of the point that coincides with the orthogonal projection of the SPH element position onto the near geometry triangle, expressed in Cartesian coordinates.



**Return type**: ROCKY_FUNCTIONS float3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHTriangleInteraction::get_boundary_velocity"}]}`
-->

<a id="structIRockySPHTriangleInteraction_1a9df83c2a83bd932798eba6a099398ce4"></a>
### Function get\_normal\_relative\_velocity

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS real_sph IRockySPHTriangleInteraction::get_normal_relative_velocity() const
```




**Returns**:

The normal component of the SPH element's velocity relative to the the velocity of the nearest point on that triangle.



**Return type**: ROCKY_FUNCTIONS real_sph

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHTriangleInteraction::get_normal_relative_velocity"}]}`
-->

<a id="structIRockySPHTriangleInteraction_1a5ff11979743a9bd389afbc153b7124d9"></a>
### Function get\_tangential\_relative\_velocity

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS real_sph IRockySPHTriangleInteraction::get_tangential_relative_velocity() const
```




**Returns**:

The tangential component of the SPH element's velocity relative to the the velocity of the nearest point on that triangle.



**Return type**: ROCKY_FUNCTIONS real_sph

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHTriangleInteraction::get_tangential_relative_velocity"}]}`
-->

<a id="structIRockySPHTriangleInteraction_1aaae7a8fe9a92cdcd25f7f4d84a21a9f8"></a>
### Function get\_wall\_turbulent\_thermal\_conductance

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHTriangleInteraction::get_wall_turbulent_thermal_conductance(const float &v_tang, const float &dst_wall) const
```




**Returns**:

The thermal conductance between a SPH element and a geometry triangle, calculated using the thermal turbulent wall function. The corresponding heat transfer rate can be obtained by multiplying the thermal conductance by the temperature difference between the SPH element and the geometry triangle.


**Parameters**:

* **velocity**: The tangential component of the velocity of the SPH element relative to the nearest point on the geometry triangle.
* **distance**: The distance of the SPH element to the nearest point on the geometry triangle.



**Parameters**:

* const float & **v_tang**
* const float & **dst_wall**

**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHTriangleInteraction::get_wall_turbulent_thermal_conductance"}]}`
-->

<a id="structIRockySPHTriangleInteraction_1a749ae0224b1bd279d33404b3d0b84010"></a>
### Function add\_force

![][public]


```cpp
ROCKY_FUNCTIONS void IRockySPHTriangleInteraction::add_force(float3 force)
```




**By using this method, a SPH module can pass custom calculated forces to the Rocky solver,**:

so they are applied to the SPH element and the geometry triangle in the referred _SPH triangle interaction_.


**Parameters**:

* **force**: The force to be applied to the SPH element in the _SPH triangle interaction_, and its triangle counterpart, expressed in Cartesian coordinates.



**Parameters**:

* float3 **force**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHTriangleInteraction::add_force"}]}`
-->

<a id="structIRockySPHTriangleInteraction_1a1578dfd6da083096eb169fe24913dd5b"></a>
### Function add\_acceleration

![][public]


```cpp
ROCKY_FUNCTIONS void IRockySPHTriangleInteraction::add_acceleration(float3 acceleration)
```




**By using this method, a SPH module can pass custom calculated accelerations to the Rocky**:

solver, so they are added to the SPH element and the geometry triangle in the referred _SPH triangle interaction_.


**Parameters**:

* **acceleration**: The acceleration to be added to the SPH element in the _SPH triangle interaction_, and its triangle counterpart, expressed in Cartesian coordinates.



**Parameters**:

* float3 **acceleration**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHTriangleInteraction::add_acceleration"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)