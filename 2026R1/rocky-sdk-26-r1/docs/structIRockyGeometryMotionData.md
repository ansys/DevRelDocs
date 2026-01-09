<a id="structIRockyGeometryMotionData"></a>
# Structure IRockyGeometryMotionData

![][C++]
![][public]

**#include <rocky\_boundary\_api.hpp>**



<code>[IRockyGeometryMotionData](structIRockyGeometryMotionData.md#structIRockyGeometryMotionData)</code> is an interface for a geometry motion in Rocky. A geometry motion represents the information from the motion applied to the geometry in Rocky's last simulation timestep. This information includes for Rocky's current simulation timestep, the forces and moments from the particles that are being applied to the geometry, and also the position, translational velocity, rotational velocity and orientation of the geometry from the previous timestep's motion. The information represented in a geometry motion are the forces and moments from the particles simulation, the position, translational velocity, rotational velocity and orientation of the geometry from the previous motion. To move the geometry within Rocky's current simulation timestep, the same motion information, i.e. (the new position, translational velocity, rotational velocity and orientation of the geometry) must be defined as within the previous timestep. If no motion is applied to the geometry, nothing is required to be set. If the geometry has no motion applied to it, the geometry's translational and rotational velocities are zero and its position and orientation are equal to the ones set at the end of the previous timestep. All property and variable values made available through <code>[IRockyGeometryMotionData](structIRockyGeometryMotionData.md#structIRockyGeometryMotionData)</code> are dimensionless.






!> **Attention** \
The geometry's gravity center is the reference position Rocky uses for the geometry's motions. Thus, the geometry's gravity center will have a new position after each motion applied.

## Members

* [get\_force](structIRockyGeometryMotionData.md#structIRockyGeometryMotionData_1a5be8af9c351470d287879e3d6f2a10e9)
* [get\_id](structIRockyGeometryMotionData.md#structIRockyGeometryMotionData_1a21c87d2c5d4ad69dfd28651613888be7)
* [get\_moment](structIRockyGeometryMotionData.md#structIRockyGeometryMotionData_1af213ddfd08829027f4c45d73cf566ff1)
* [get\_name](structIRockyGeometryMotionData.md#structIRockyGeometryMotionData_1ae4a43219e823a55f3ced79f234d7a6d9)
* [get\_orientation\_euler\_angles](structIRockyGeometryMotionData.md#structIRockyGeometryMotionData_1a0dbec31c54d9c33096a0841ac1379fc2)
* [get\_orientation\_quaternion](structIRockyGeometryMotionData.md#structIRockyGeometryMotionData_1a1a5cc239a4d3485280530fc6a46fe9d4)
* [get\_position](structIRockyGeometryMotionData.md#structIRockyGeometryMotionData_1ac676748d6121c999c4d5097ab7246e08)
* [get\_rotational\_velocity](structIRockyGeometryMotionData.md#structIRockyGeometryMotionData_1ad0aa494b8066b46a6d983031d1a53538)
* [get\_translational\_velocity](structIRockyGeometryMotionData.md#structIRockyGeometryMotionData_1a08d097c2e959733cb32c365c3fb2eef7)
* [has\_linked\_motion\_frame](structIRockyGeometryMotionData.md#structIRockyGeometryMotionData_1a03b51d01d3dcaaff8bfbd132e92370e7)
* [set\_orientation](structIRockyGeometryMotionData.md#structIRockyGeometryMotionData_1a7169363d2fe6b5631ce18293cb31144b)
* [set\_orientation\_angles](structIRockyGeometryMotionData.md#structIRockyGeometryMotionData_1a059a62e2d9453660725a0dc88313c73c)
* [set\_position](structIRockyGeometryMotionData.md#structIRockyGeometryMotionData_1ab3fc0d338a140c8ca95b78bd2e8c4c94)
* [set\_rotational\_velocity](structIRockyGeometryMotionData.md#structIRockyGeometryMotionData_1a90073262648b9550296f899fc4e85127)
* [set\_translational\_velocity](structIRockyGeometryMotionData.md#structIRockyGeometryMotionData_1a4f37dc923051f58381e6268199936eac)

## Public functions

<a id="structIRockyGeometryMotionData_1a21c87d2c5d4ad69dfd28651613888be7"></a>
### Function get\_id

![][public]
![][const]


```cpp
int IRockyGeometryMotionData::get_id() const
```




**Returns**:

The ID of the geometry.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryMotionData::get_id"}]}`
-->

<a id="structIRockyGeometryMotionData_1ae4a43219e823a55f3ced79f234d7a6d9"></a>
### Function get\_name

![][public]
![][const]


```cpp
std::string IRockyGeometryMotionData::get_name() const
```




**Returns**:

The name of the geometry.



**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryMotionData::get_name"}]}`
-->

<a id="structIRockyGeometryMotionData_1a5be8af9c351470d287879e3d6f2a10e9"></a>
### Function get\_force

![][public]
![][const]


```cpp
double3 IRockyGeometryMotionData::get_force() const
```




**Returns**:

The Cartesian components of the force applied by Rocky to the geometry.



**Return type**: double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryMotionData::get_force"}]}`
-->

<a id="structIRockyGeometryMotionData_1af213ddfd08829027f4c45d73cf566ff1"></a>
### Function get\_moment

![][public]
![][const]


```cpp
double3 IRockyGeometryMotionData::get_moment() const
```




**Returns**:

The Cartesian components of the moment applied by Rocky to the geometry.



**Return type**: double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryMotionData::get_moment"}]}`
-->

<a id="structIRockyGeometryMotionData_1ac676748d6121c999c4d5097ab7246e08"></a>
### Function get\_position

![][public]
![][const]


```cpp
double3 IRockyGeometryMotionData::get_position() const
```




**Returns**:

The Cartesian coordinates of the reference position for the motion, which coincides with the geometry's gravity center.



**Return type**: double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryMotionData::get_position"}]}`
-->

<a id="structIRockyGeometryMotionData_1a08d097c2e959733cb32c365c3fb2eef7"></a>
### Function get\_translational\_velocity

![][public]
![][const]


```cpp
double3 IRockyGeometryMotionData::get_translational_velocity() const
```




**Returns**:

The Cartesian components of the geometry's translational velocity.



**Return type**: double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryMotionData::get_translational_velocity"}]}`
-->

<a id="structIRockyGeometryMotionData_1a1a5cc239a4d3485280530fc6a46fe9d4"></a>
### Function get\_orientation\_quaternion

![][public]
![][const]


```cpp
double4 IRockyGeometryMotionData::get_orientation_quaternion() const
```




**Returns**:

The orientation of the geometry expressed as a quaternion (w, x, y and z).



**Return type**: double4

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryMotionData::get_orientation_quaternion"}]}`
-->

<a id="structIRockyGeometryMotionData_1a0dbec31c54d9c33096a0841ac1379fc2"></a>
### Function get\_orientation\_euler\_angles

![][public]
![][const]


```cpp
double3 IRockyGeometryMotionData::get_orientation_euler_angles() const
```




**Returns**:

A vector whose components are the Euler angles that define the orientation of the geometry. In this vector, the x-component is the roll angle, the y-component is the pitch angle and the z-component is the yaw angle.



**Return type**: double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryMotionData::get_orientation_euler_angles"}]}`
-->

<a id="structIRockyGeometryMotionData_1ad0aa494b8066b46a6d983031d1a53538"></a>
### Function get\_rotational\_velocity

![][public]
![][const]


```cpp
double3 IRockyGeometryMotionData::get_rotational_velocity() const
```




**Returns**:

The Cartesian components of the geometry's rotational velocity.



**Return type**: double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryMotionData::get_rotational_velocity"}]}`
-->

<a id="structIRockyGeometryMotionData_1ab3fc0d338a140c8ca95b78bd2e8c4c94"></a>
### Function set\_position

![][public]


```cpp
void IRockyGeometryMotionData::set_position(double3 position)
```




**Sets the new position for the geometry according to the motion that was applied.**:

Rocky uses the geometry's gravity center as the reference position for the geometry's motions. Thus, the geometry's gravity center will have a new position after each motion applied.


**Parameters**:

* **position**: The Cartesian components of the geometry's new position, which is equal to the new location of its gravity center.


!> **Attention** \
Calling set_position in a geometry that is already linked to a motion frame is not allowed.



**Parameters**:

* double3 **position**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryMotionData::set_position"}]}`
-->

<a id="structIRockyGeometryMotionData_1a4f37dc923051f58381e6268199936eac"></a>
### Function set\_translational\_velocity

![][public]


```cpp
void IRockyGeometryMotionData::set_translational_velocity(double3 v)
```




**Sets the geometry's new translational velocity according to the motion that was applied.**:


**Parameters**:

* **v**: The Cartesian components of the geometry's new translational velocity.


!> **Attention** \
Calling set_translational_velocity in a geometry that is already linked to a motion frame is not allowed.



**Parameters**:

* double3 **v**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryMotionData::set_translational_velocity"}]}`
-->

<a id="structIRockyGeometryMotionData_1a7169363d2fe6b5631ce18293cb31144b"></a>
### Function set\_orientation

![][public]


```cpp
void IRockyGeometryMotionData::set_orientation(double4 quat)
```




**Sets the geometry's new orientation (quaternion) according to the motion that was applied.**:


**Parameters**:

* **quat**: The geometry's new orientation expressed as a quaternion (w, x, y and z).


!> **Attention** \
Calling set_orientation in a geometry that is already linked to a motion frame is not allowed.



**Parameters**:

* double4 **quat**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryMotionData::set_orientation"}]}`
-->

<a id="structIRockyGeometryMotionData_1a059a62e2d9453660725a0dc88313c73c"></a>
### Function set\_orientation\_angles

![][public]


```cpp
void IRockyGeometryMotionData::set_orientation_angles(double3 angles)
```




**Sets the geometry's new orientation in Euler angles according to the motion that was applied.**:


**Parameters**:

* **angles**: A vector whose components are the Euler angles that define the new orientation of the geometry. In this vector, the x-component is the roll angle, the y-component is the pitch angle and the z-component is the yaw angle.


!> **Attention** \
Calling set_orientation_angles in a geometry that is already linked to a motion frame is not allowed.



**Parameters**:

* double3 **angles**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryMotionData::set_orientation_angles"}]}`
-->

<a id="structIRockyGeometryMotionData_1a90073262648b9550296f899fc4e85127"></a>
### Function set\_rotational\_velocity

![][public]


```cpp
void IRockyGeometryMotionData::set_rotational_velocity(double3 w)
```




**Sets the geometry's new rotational velocity according to the motion that was applied.**:


**Parameters**:

* **w**: The Cartesian components of the geometry's new rotational velocity.


!> **Attention** \
Calling set_rotational_velocity in a geometry that is already linked to a motion frame is not allowed.



**Parameters**:

* double3 **w**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryMotionData::set_rotational_velocity"}]}`
-->

<a id="structIRockyGeometryMotionData_1a03b51d01d3dcaaff8bfbd132e92370e7"></a>
### Function has\_linked\_motion\_frame

![][public]
![][const]


```cpp
bool IRockyGeometryMotionData::has_linked_motion_frame() const
```




**Returns**:

True if the geometry has motion from the Rocky's internal motion kernel implementation. False otherwise.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryMotionData::has_linked_motion_frame"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)