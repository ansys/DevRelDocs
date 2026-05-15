# Structure IRockySPHDeviceModel

<a id="structIRockySPHDeviceModel"></a>

![][C++]
![][public]

**#include <rocky\_sph\_model\_api.hpp>**



<code>[IRockySPHDeviceModel](structIRockySPHDeviceModel.md#structIRockySPHDeviceModel)</code> implements methods that provide general configuration parameters of the SPH model. The data associated to an <code>[IRockySPHDeviceModel](structIRockySPHDeviceModel.md#structIRockySPHDeviceModel)</code> object resides entirely on device memory, consequently, it can be accessed only within hooks executed on devices.

## Members

* [get\_damping\_coefficient](structIRockySPHDeviceModel.md#structIRockySPHDeviceModel_1a7a1b280f7d23137f75cafb3eb29cf2bd)
* [get\_element\_cloud\_point](structIRockySPHDeviceModel.md#structIRockySPHDeviceModel_1a707d2c43244e0a2db08047ba86dbfd78)
* [get\_element\_mass](structIRockySPHDeviceModel.md#structIRockySPHDeviceModel_1a2e07d8b951637326aa17c3869fa75f6f)
* [get\_fluid\_density](structIRockySPHDeviceModel.md#structIRockySPHDeviceModel_1a30c701000a588378110aa2a163a07847)
* [get\_fluid\_specific\_heat](structIRockySPHDeviceModel.md#structIRockySPHDeviceModel_1a3f511dafb251e18d7dfc8a8f7c9cfcf1)
* [get\_fluid\_thermal\_conductivity](structIRockySPHDeviceModel.md#structIRockySPHDeviceModel_1a53bf5a5c5dc38bed487a0ff75b4f881e)
* [get\_fluid\_viscosity](structIRockySPHDeviceModel.md#structIRockySPHDeviceModel_1a0e7d219d00a03afa23f4340f966f274f)
* [get\_initial\_element\_spacing](structIRockySPHDeviceModel.md#structIRockySPHDeviceModel_1aa0dda18957c28775ae86803575275db2)
* [get\_kernel\_derivative](structIRockySPHDeviceModel.md#structIRockySPHDeviceModel_1a878401756bbf4517bd2dbf7c0b6f53b5)
* [get\_kernel\_weight](structIRockySPHDeviceModel.md#structIRockySPHDeviceModel_1ac0f6dab31e47087f957b9c5f921044ca)
* [get\_minimum\_distance](structIRockySPHDeviceModel.md#structIRockySPHDeviceModel_1a11adf37fd1989526607c500a68f5a190)
* [get\_minimum\_distance\_squared](structIRockySPHDeviceModel.md#structIRockySPHDeviceModel_1a02751c7624b5eebe898fd497fd368f7e)
* [get\_smoothing\_length](structIRockySPHDeviceModel.md#structIRockySPHDeviceModel_1a08276af5f02f29358b677c6c5c4eb623)
* [get\_speed\_of\_sound](structIRockySPHDeviceModel.md#structIRockySPHDeviceModel_1a53367cb9b7f97cb102cb9e1703a95131)
* [get\_sph\_timestep](structIRockySPHDeviceModel.md#structIRockySPHDeviceModel_1a1b3b0ad0b9b4e4f723fed8cd6d859ff1)
* [get\_stiffness](structIRockySPHDeviceModel.md#structIRockySPHDeviceModel_1aa0fa9e6fb5e51db54a99a4bc45949409)
* [get\_surface\_tension](structIRockySPHDeviceModel.md#structIRockySPHDeviceModel_1ad52e0f31256e039c7043a7de165fadf7)
* [get\_turbulent\_prandtl\_number](structIRockySPHDeviceModel.md#structIRockySPHDeviceModel_1a085435fa6f49074b90d50686b5b6dd6c)
* [get\_wall\_turbulent\_thermal\_conductance](structIRockySPHDeviceModel.md#structIRockySPHDeviceModel_1a98a93eadf944d6ad89416d384e1476c3)
* [has\_turbulence\_modeling](structIRockySPHDeviceModel.md#structIRockySPHDeviceModel_1aeafb1df061969bc91b4912460cebedb5)

## Public functions

### Function get\_sph\_timestep

<a id="structIRockySPHDeviceModel_1a1b3b0ad0b9b4e4f723fed8cd6d859ff1"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHDeviceModel::get_sph_timestep() const
```




**Returns**:

The timestep value used for the integration of all SPH model equations.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHDeviceModel::get_sph_timestep"}]}`
-->

### Function get\_element\_mass

<a id="structIRockySPHDeviceModel_1a2e07d8b951637326aa17c3869fa75f6f"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHDeviceModel::get_element_mass() const
```




**Returns**:

The mass associated to each one of the SPH elements in the simulation.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHDeviceModel::get_element_mass"}]}`
-->

### Function get\_initial\_element\_spacing

<a id="structIRockySPHDeviceModel_1aa0dda18957c28775ae86803575275db2"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHDeviceModel::get_initial_element_spacing() const
```




**Returns**:

The spacing between SPH elements when they enter into the simulation. This is a characteristic length considered in several expressions in the SPH model.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHDeviceModel::get_initial_element_spacing"}]}`
-->

### Function get\_kernel\_weight

<a id="structIRockySPHDeviceModel_1ac0f6dab31e47087f957b9c5f921044ca"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHDeviceModel::get_kernel_weight(float distance) const
```




**Returns**:

The value of the kernel function evaluated at a point located at a given distance of the kernel's support region.


**Parameters**:

* **distance**: The distance from the kernel's support region at which the kernel function will be evaluated.



**Parameters**:

* float **distance**

**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHDeviceModel::get_kernel_weight"}]}`
-->

### Function get\_kernel\_derivative

<a id="structIRockySPHDeviceModel_1a878401756bbf4517bd2dbf7c0b6f53b5"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHDeviceModel::get_kernel_derivative(float distance) const
```




**Returns**:

The value of the derivative of the kernel function evaluated at a point located at a given distance of the kernel's support region.


**Parameters**:

* **distance**: The distance from the kernel's support region at which the derivative of kernel function will be evaluated.



**Parameters**:

* float **distance**

**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHDeviceModel::get_kernel_derivative"}]}`
-->

### Function get\_smoothing\_length

<a id="structIRockySPHDeviceModel_1a08276af5f02f29358b677c6c5c4eb623"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHDeviceModel::get_smoothing_length() const
```




**Returns**:

The value of the smoothing length considered in the SPH discretization. The radius of the support region of the kernel function is normally an integer multiple of the smoothing length.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHDeviceModel::get_smoothing_length"}]}`
-->

### Function get\_minimum\_distance

<a id="structIRockySPHDeviceModel_1a11adf37fd1989526607c500a68f5a190"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHDeviceModel::get_minimum_distance() const
```




**Returns**:

The value of the minimum distance between any two neighbor SPH elements in a simulation.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHDeviceModel::get_minimum_distance"}]}`
-->

### Function get\_minimum\_distance\_squared

<a id="structIRockySPHDeviceModel_1a02751c7624b5eebe898fd497fd368f7e"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHDeviceModel::get_minimum_distance_squared() const
```




**Returns**:

The squared value of the minimum distance between any two neighbor SPH elements in a simulation.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHDeviceModel::get_minimum_distance_squared"}]}`
-->

### Function get\_fluid\_viscosity

<a id="structIRockySPHDeviceModel_1a0e7d219d00a03afa23f4340f966f274f"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHDeviceModel::get_fluid_viscosity() const
```




**Returns**:

The user-prescribed value of the fluid's dynamic viscosity. Not suitable when variable molecular viscosity is enabled.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHDeviceModel::get_fluid_viscosity"}]}`
-->

### Function get\_fluid\_density

<a id="structIRockySPHDeviceModel_1a30c701000a588378110aa2a163a07847"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHDeviceModel::get_fluid_density() const
```




**Returns**:

The user-prescribed value of the fluid's density.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHDeviceModel::get_fluid_density"}]}`
-->

### Function get\_fluid\_thermal\_conductivity

<a id="structIRockySPHDeviceModel_1a53bf5a5c5dc38bed487a0ff75b4f881e"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHDeviceModel::get_fluid_thermal_conductivity() const
```




**Returns**:

The user-prescribed value of the fluid's thermal conductivity.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHDeviceModel::get_fluid_thermal_conductivity"}]}`
-->

### Function get\_fluid\_specific\_heat

<a id="structIRockySPHDeviceModel_1a3f511dafb251e18d7dfc8a8f7c9cfcf1"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHDeviceModel::get_fluid_specific_heat() const
```




**Returns**:

The user-prescribed value of the fluid's specific heat.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHDeviceModel::get_fluid_specific_heat"}]}`
-->

### Function get\_turbulent\_prandtl\_number

<a id="structIRockySPHDeviceModel_1a085435fa6f49074b90d50686b5b6dd6c"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHDeviceModel::get_turbulent_prandtl_number() const
```




**Returns**:

The user-prescribed value of the turbulent Prandtl number, which is the ratio between the momentum and the heat transfer diffusivities due turbulence.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHDeviceModel::get_turbulent_prandtl_number"}]}`
-->

### Function get\_speed\_of\_sound

<a id="structIRockySPHDeviceModel_1a53367cb9b7f97cb102cb9e1703a95131"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHDeviceModel::get_speed_of_sound() const
```




**Returns**:

The user-prescribed value of the speed of sound in the fluid.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHDeviceModel::get_speed_of_sound"}]}`
-->

### Function get\_surface\_tension

<a id="structIRockySPHDeviceModel_1ad52e0f31256e039c7043a7de165fadf7"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHDeviceModel::get_surface_tension() const
```




**Returns**:

The user-prescribed value of the surface tension at a free surface.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHDeviceModel::get_surface_tension"}]}`
-->

### Function get\_stiffness

<a id="structIRockySPHDeviceModel_1aa0fa9e6fb5e51db54a99a4bc45949409"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHDeviceModel::get_stiffness() const
```




**Returns**:

The value of the stiffness used when modeling the repulsive normal force at boundaries.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHDeviceModel::get_stiffness"}]}`
-->

### Function get\_damping\_coefficient

<a id="structIRockySPHDeviceModel_1a7a1b280f7d23137f75cafb3eb29cf2bd"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHDeviceModel::get_damping_coefficient() const
```




**Returns**:

The value of the damping coefficient used when modeling the dissipative force at boundaries.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHDeviceModel::get_damping_coefficient"}]}`
-->

### Function get\_wall\_turbulent\_thermal\_conductance

<a id="structIRockySPHDeviceModel_1a98a93eadf944d6ad89416d384e1476c3"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHDeviceModel::get_wall_turbulent_thermal_conductance(float velocity, float distance) const
```




**Returns**:

The thermal conductance between a SPH element and a geometry triangle, calculated using the thermal turbulent wall function. The corresponding heat transfer rate can be obtained by multiplying the thermal conductance by the temperature difference between the SPH element and the geometry triangle.


**Parameters**:

* **velocity**: The tangential component of the velocity of the SPH element relative to the nearest point on the geometry triangle.
* **distance**: The distance of the SPH element to the nearest point on the geometry triangle.



**Parameters**:

* float **velocity**
* float **distance**

**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHDeviceModel::get_wall_turbulent_thermal_conductance"}]}`
-->

### Function get\_element\_cloud\_point

<a id="structIRockySPHDeviceModel_1a707d2c43244e0a2db08047ba86dbfd78"></a>

![][public]


```cpp
ROCKY_FUNCTIONS IRockyCloudPoint IRockySPHDeviceModel::get_element_cloud_point(int point_cloud_index, const IRockySPHElement &element)
```




**This function gets an auxiliary object that gives access**:

to cloud point values of the nearest point to a given SPH element.


**Parameters**:

* **point_cloud_index**: The index that uniquely identifies a point cloud dataset.
* **element**: A <code>[IRockySPHElement](structIRockySPHElement.md#structIRockySPHElement)</code> whose position is used to determine the nearest cloud point.


**Returns**:

An <code>IRockySPHElementCloudPoint</code> object, which can be used to get cloud point values of the nearest point to the element passed as argument. For more information about point clouds, please refer to the Rocky User Manual.



**Parameters**:

* int **point_cloud_index**
* const [IRockySPHElement](structIRockySPHElement.md#structIRockySPHElement) & **element**

**Return type**: ROCKY_FUNCTIONS [IRockyCloudPoint](structIRockyCloudPoint.md#structIRockyCloudPoint)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHDeviceModel::get_element_cloud_point"}]}`
-->

### Function has\_turbulence\_modeling

<a id="structIRockySPHDeviceModel_1aeafb1df061969bc91b4912460cebedb5"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS bool IRockySPHDeviceModel::has_turbulence_modeling() const
```




**Returns**:

True if some turbulence model is active, false otherwise.



**Return type**: ROCKY_FUNCTIONS bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHDeviceModel::has_turbulence_modeling"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)