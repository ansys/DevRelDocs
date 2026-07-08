# Structure IRockyDeviceModel

<a id="structIRockyDeviceModel"></a>

![][C++]
![][public]

**#include <rocky\_model\_api.hpp>**



<code>[IRockyDeviceModel](structIRockyDeviceModel.md#structIRockyDeviceModel)</code> includes auxiliary functions that are available only during the execution of a simulation. Hooks such as <code>ROCKY_PLUGIN_PRE_FORCE...</code>, <code>ROCKY_PLUGIN_POST_FORCE...</code>, and <code>ROCKY_PLUGIN_PRE_MOVE...</code>, provide an <code>[IRockyDeviceModel](structIRockyDeviceModel.md#structIRockyDeviceModel)</code> object as a parameter.

## Members

* [get\_current\_time](structIRockyDeviceModel.md#structIRockyDeviceModel_1a089a84ac233a433ac17ac46fbbb229b3)
* [get\_geometry\_scalars](structIRockyDeviceModel.md#structIRockyDeviceModel_1a9bd2b236ca0c6f7859924b0ed588c584)
* [get\_gravity](structIRockyDeviceModel.md#structIRockyDeviceModel_1ac59cb9db0136afc98b82bfb07573101a)
* [get\_pair\_scalars](structIRockyDeviceModel.md#structIRockyDeviceModel_1a380db6692ee5fe3c15b52d62cef723cd)
* [get\_particle\_cloud\_point](structIRockyDeviceModel.md#structIRockyDeviceModel_1ac4d4eb7321ad6815176bda70de368c17)
* [get\_timestep](structIRockyDeviceModel.md#structIRockyDeviceModel_1ab03adbadfc1d2a7a8f3a1f849be73d1a)
* [set\_gravity](structIRockyDeviceModel.md#structIRockyDeviceModel_1a9980c5362764f3bf7a159ccd7865d947)

## Public functions

### Function get\_timestep

<a id="structIRockyDeviceModel_1ab03adbadfc1d2a7a8f3a1f849be73d1a"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyDeviceModel::get_timestep() const
```




**Returns**:

The value of the simulation timestep.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyDeviceModel::get_timestep"}]}`
-->

### Function get\_current\_time

<a id="structIRockyDeviceModel_1a089a84ac233a433ac17ac46fbbb229b3"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyDeviceModel::get_current_time() const
```




**Returns**:

The value of the current time in the simulation.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyDeviceModel::get_current_time"}]}`
-->

### Function get\_gravity

<a id="structIRockyDeviceModel_1ac59cb9db0136afc98b82bfb07573101a"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyDeviceModel::get_gravity() const
```




**This functions returns the current gravity acceleration**:

in the simulation.


**Returns**:

A <code>double3</code> value representing the current gravity acceleration vector in Cartesian Coordinates.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyDeviceModel::get_gravity"}]}`
-->

### Function set\_gravity

<a id="structIRockyDeviceModel_1a9980c5362764f3bf7a159ccd7865d947"></a>

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyDeviceModel::set_gravity(const double3 &gravity)
```




**This function sets the gravity acceleration to be used**:

globally in the simulation from that time onward.


**Parameters**:

* **gravity**: A <code>double3</code> value representing the gravity acceleration vector in Cartesian Coordinates.



**Parameters**:

* const double3 & **gravity**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyDeviceModel::set_gravity"}]}`
-->

### Function get\_particle\_cloud\_point

<a id="structIRockyDeviceModel_1ac4d4eb7321ad6815176bda70de368c17"></a>

![][public]


```cpp
ROCKY_FUNCTIONS IRockyCloudPoint IRockyDeviceModel::get_particle_cloud_point(int point_cloud_index, const IRockyParticle &particle)
```




**This function gets an auxiliary object that gives access**:

to cloud point values of the nearest point to a given particle.


**Parameters**:

* **point_cloud_index**: The index that uniquely identifies a point cloud dataset.
* **particle**: A <code>[IRockyParticle](structIRockyParticle.md#structIRockyParticle)</code> whose position is used to determine the nearest cloud point.


**Returns**:

An <code>IRockyParticleCloudPoint</code> object, which can be used to get cloud point values of the nearest point to the particle passed as argument. For more information about point clouds, please refer to the Rocky User Manual.



**Parameters**:

* int **point_cloud_index**
* const [IRockyParticle](structIRockyParticle.md#structIRockyParticle) & **particle**

**Return type**: ROCKY_FUNCTIONS [IRockyCloudPoint](structIRockyCloudPoint.md#structIRockyCloudPoint)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyDeviceModel::get_particle_cloud_point"}]}`
-->

### Function get\_pair\_scalars

<a id="structIRockyDeviceModel_1a380db6692ee5fe3c15b52d62cef723cd"></a>

![][public]


```cpp
ROCKY_FUNCTIONS IRockyPairScalars IRockyDeviceModel::get_pair_scalars(int pair_index)
```




**Returns**:

An <code>[IRockyPairScalars](structIRockyPairScalars.md#structIRockyPairScalars)</code> object, that gives access to all pair scalars defined in a project.


**Parameters**:

* **pair_index**: The index that identifies a specific pair of particle groups or a pair formed by a particle group and a geometry.



**Parameters**:

* int **pair_index**

**Return type**: ROCKY_FUNCTIONS [IRockyPairScalars](structIRockyPairScalars.md#structIRockyPairScalars)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyDeviceModel::get_pair_scalars"}]}`
-->

### Function get\_geometry\_scalars

<a id="structIRockyDeviceModel_1a9bd2b236ca0c6f7859924b0ed588c584"></a>

![][public]


```cpp
ROCKY_FUNCTIONS IRockyGeometryScalars IRockyDeviceModel::get_geometry_scalars(int geometry_index)
```




**Returns**:

An <code>[IRockyGeometryScalars](structIRockyGeometryScalars.md#structIRockyGeometryScalars)</code> object, that gives access to all geometry scalars defined in a project.


**Parameters**:

* **geometry_index**: The index that identifies a specific geometry within a Rocky project.



**Parameters**:

* int **geometry_index**

**Return type**: ROCKY_FUNCTIONS [IRockyGeometryScalars](structIRockyGeometryScalars.md#structIRockyGeometryScalars)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyDeviceModel::get_geometry_scalars"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)