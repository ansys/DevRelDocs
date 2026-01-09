<a id="structIRockySPHElement"></a>
# Structure IRockySPHElement

![][C++]
![][public]

**#include <rocky\_sph\_element\_api.hpp>**



<code>[IRockySPHElement](structIRockySPHElement.md#structIRockySPHElement)</code> is the code representation of an individual SPH element, which is the basic unit for representing the fluid flow in a SPH model. It has several methods to access the values of physical properties carried by the SPH elements, as well as _ SPH element scalars_, which are special variables that store custom property values per SPH element that are preserved between time iterations.

**Inherited by**:

* [IRockySPHElementHost](structIRockySPHElementHost.md#structIRockySPHElementHost)

## Members

* [add\_acceleration](structIRockySPHElement.md#structIRockySPHElement_1a2f90b3a2980c2fa73cd53e72ea277f76)
* [add\_force](structIRockySPHElement.md#structIRockySPHElement_1a0d51cf017a85bd175db6d18538c9d2e0)
* [get\_acceleration](structIRockySPHElement.md#structIRockySPHElement_1a9bbac7594cfc7a8dd14fee220a59cc0d)
* [get\_density](structIRockySPHElement.md#structIRockySPHElement_1a630d5e1aaea6b7c2f8f51c30089e07cd)
* [get\_force](structIRockySPHElement.md#structIRockySPHElement_1ab81b9afbefc503f46027274878703a3c)
* [get\_kernel](structIRockySPHElement.md#structIRockySPHElement_1a0d1898e6d543bbe3af9cb951646491ee)
* [get\_kernel\_derivative](structIRockySPHElement.md#structIRockySPHElement_1a480a6f0abe070040e11affa55f24c43f)
* [get\_linked\_dem\_particle](structIRockySPHElement.md#structIRockySPHElement_1a82b39eaf0e1f5b9f09367fcb994af3d9)
* [get\_mass](structIRockySPHElement.md#structIRockySPHElement_1ac3520dd9ddfb74c066ba7aef4737a455)
* [get\_molecular\_viscosity](structIRockySPHElement.md#structIRockySPHElement_1ac526f6d9758c69d4d7270317c327546a)
* [get\_normal](structIRockySPHElement.md#structIRockySPHElement_1af2f5b34f666646f5d1f19207bac5cb2d)
* [get\_position](structIRockySPHElement.md#structIRockySPHElement_1a7bd5a61c05ac4a77a61d3a0fc09597c5)
* [get\_pressure](structIRockySPHElement.md#structIRockySPHElement_1a52f9c9ca275229c97e0fee6c2962e65f)
* [get\_refinement\_count](structIRockySPHElement.md#structIRockySPHElement_1aee53743f819eff8293099eb4d0d9fce4)
* [get\_release\_time](structIRockySPHElement.md#structIRockySPHElement_1a9be557e2ec8056dd05338a651f5da171)
* [get\_scalars](structIRockySPHElement.md#structIRockySPHElement_1a326bd60795936f9c4b77a9e000b1fa99)
* [get\_size](structIRockySPHElement.md#structIRockySPHElement_1a38068aa228cc70686e89149e9aa4edb8)
* [get\_smoothing\_length](structIRockySPHElement.md#structIRockySPHElement_1a040d1e15607c23a673614e3506a2e971)
* [get\_strain\_rate\_tensor](structIRockySPHElement.md#structIRockySPHElement_1ac28f2f31caf98235f3281c9c9f417474)
* [get\_temperature](structIRockySPHElement.md#structIRockySPHElement_1ae7191bebe8d701047d69b8bc9f590b16)
* [get\_velocity](structIRockySPHElement.md#structIRockySPHElement_1ab57e961ebc05e415bacc7c2236749428)
* [is\_dem\_coupled](structIRockySPHElement.md#structIRockySPHElement_1a3cd85ecace2e2784572a2e01397237f3)
* [is\_enabled](structIRockySPHElement.md#structIRockySPHElement_1af514a8db990dff91c80abef70c29d604)
* [is\_frozen](structIRockySPHElement.md#structIRockySPHElement_1a8a513f4cacbb94a272332beb8c8a371c)
* [set\_frozen](structIRockySPHElement.md#structIRockySPHElement_1a258ae430ddd628d1b3375680774fd748)
* [set\_marked\_for\_refinement](structIRockySPHElement.md#structIRockySPHElement_1ade543270436529233566364fd3112017)
* [set\_molecular\_viscosity](structIRockySPHElement.md#structIRockySPHElement_1abc6efc9b72adc7c3b487e760a2c53534)
* [set\_skip\_for\_coarsening](structIRockySPHElement.md#structIRockySPHElement_1a9c45d8c165fb26ff079a52aedacda8c1)

## Public functions

<a id="structIRockySPHElement_1a82b39eaf0e1f5b9f09367fcb994af3d9"></a>
### Function get\_linked\_dem\_particle

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS IRockyParticle IRockySPHElement::get_linked_dem_particle(IRockyDeviceModel &model) const
```




**Returns**:

An <code>[IRockyParticle](structIRockyParticle.md#structIRockyParticle)</code> object representing the DEM particle linked to the SPH particle, if the latter is actually a DEM-coupled SPH element.



**Parameters**:

* [IRockyDeviceModel](structIRockyDeviceModel.md#structIRockyDeviceModel) & **model**

**Return type**: ROCKY_FUNCTIONS [IRockyParticle](structIRockyParticle.md#structIRockyParticle)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::get_linked_dem_particle"}]}`
-->

<a id="structIRockySPHElement_1a0d51cf017a85bd175db6d18538c9d2e0"></a>
### Function add\_force

![][public]


```cpp
ROCKY_FUNCTIONS void IRockySPHElement::add_force(const float3 &force)
```




**This method adds a new force to the set of acting forces over the SPH element.**:


**Parameters**:

* **force**: The added force vector, expressed in Cartesian coordinates.



**Parameters**:

* const float3 & **force**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::add_force"}]}`
-->

<a id="structIRockySPHElement_1a2f90b3a2980c2fa73cd53e72ea277f76"></a>
### Function add\_acceleration

![][public]


```cpp
ROCKY_FUNCTIONS void IRockySPHElement::add_acceleration(const float3 &acceleration)
```




**This method adds an acceleration component caused by an external force to the SPH element's**:

acceleration internally calculated by Rocky.


**Parameters**:

* **acceleration**: The added acceleration vector, expressed in Cartesian coordinates.



**Parameters**:

* const float3 & **acceleration**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::add_acceleration"}]}`
-->

<a id="structIRockySPHElement_1af514a8db990dff91c80abef70c29d604"></a>
### Function is\_enabled

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS bool IRockySPHElement::is_enabled() const
```




**Returns**:

True if the SPH element is enabled. False, otherwise.



**Return type**: ROCKY_FUNCTIONS bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::is_enabled"}]}`
-->

<a id="structIRockySPHElement_1a258ae430ddd628d1b3375680774fd748"></a>
### Function set\_frozen

![][public]


```cpp
ROCKY_FUNCTIONS void IRockySPHElement::set_frozen(bool frozen)
```




**This method sets the frozen state of a SPH element. When the frozen state of an element**:

is set to <code>true</code>, the solution of the motion equations for it is skipped.


**Parameters**:

* **frozen**: True if the particle should be frozen. False, otherwise.



**Parameters**:

* bool **frozen**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::set_frozen"}]}`
-->

<a id="structIRockySPHElement_1a8a513f4cacbb94a272332beb8c8a371c"></a>
### Function is\_frozen

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS bool IRockySPHElement::is_frozen() const
```




**Returns**:

True if the SPH element is frozen. False, otherwise.



**Return type**: ROCKY_FUNCTIONS bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::is_frozen"}]}`
-->

<a id="structIRockySPHElement_1a3cd85ecace2e2784572a2e01397237f3"></a>
### Function is\_dem\_coupled

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS bool IRockySPHElement::is_dem_coupled() const
```




**Returns**:

True, if the SPH element is placed inside a DEM particle in order to model the interaction between the fluid flow and the DEM particles. False, otherwise.



**Return type**: ROCKY_FUNCTIONS bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::is_dem_coupled"}]}`
-->

<a id="structIRockySPHElement_1a630d5e1aaea6b7c2f8f51c30089e07cd"></a>
### Function get\_density

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHElement::get_density() const
```




**Returns**:

The current value of density calculated for the SPH element.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::get_density"}]}`
-->

<a id="structIRockySPHElement_1a52f9c9ca275229c97e0fee6c2962e65f"></a>
### Function get\_pressure

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHElement::get_pressure() const
```




**Returns**:

The current value of the pressure at the location coincident with the SPH element.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::get_pressure"}]}`
-->

<a id="structIRockySPHElement_1ae7191bebe8d701047d69b8bc9f590b16"></a>
### Function get\_temperature

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHElement::get_temperature() const
```




**Returns**:

The current value of the temperature of the SPH element.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::get_temperature"}]}`
-->

<a id="structIRockySPHElement_1a9be557e2ec8056dd05338a651f5da171"></a>
### Function get\_release\_time

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHElement::get_release_time() const
```




**Returns**:

The time at which the SPH element entered into the simulation.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::get_release_time"}]}`
-->

<a id="structIRockySPHElement_1a7bd5a61c05ac4a77a61d3a0fc09597c5"></a>
### Function get\_position

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float3 IRockySPHElement::get_position() const
```




**Returns**:

The Cartesian coordinates of the point at which the SPH element is currently located.



**Return type**: ROCKY_FUNCTIONS float3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::get_position"}]}`
-->

<a id="structIRockySPHElement_1ab57e961ebc05e415bacc7c2236749428"></a>
### Function get\_velocity

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float3 IRockySPHElement::get_velocity() const
```




**Returns**:

The velocity vector at which the SPH element is currently moving, expressed in Cartesian coordinates.



**Return type**: ROCKY_FUNCTIONS float3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::get_velocity"}]}`
-->

<a id="structIRockySPHElement_1af2f5b34f666646f5d1f19207bac5cb2d"></a>
### Function get\_normal

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float3 IRockySPHElement::get_normal() const
```




**Returns**:

An approximation of the normal vector to a free surface, if the SPH element is located near one, for use on the implementation of custom surface tension models. This vector is obtained by using the standard continuum approximation of interfaces, which is based on the gradient of the so called color function. In this approximation, an interface has a finite thickness over which the color function varies smoothly between zero and one. Because of this, a normal vector is calculated for every SPH element in the solution domain. However, only elements located near a free surface will have a normal vector with length significantly different from zero. It is worth noting that this vector is not normalized, therefore, its length will vary from one element to another. Moreover, these normal vectors are calculated internally only if a surface tension model is active in the simulation, therefore, a runtime error will be generated if this method is used otherwise.



**Return type**: ROCKY_FUNCTIONS float3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::get_normal"}]}`
-->

<a id="structIRockySPHElement_1ab81b9afbefc503f46027274878703a3c"></a>
### Function get\_force

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float3 IRockySPHElement::get_force() const
```




**Returns**:

The resultant of the forces currently acting over the SPH element, expressed in Cartesian coordinates. If this method is called before the stage of force calculation, a zero vector will be returned.



**Return type**: ROCKY_FUNCTIONS float3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::get_force"}]}`
-->

<a id="structIRockySPHElement_1a9bbac7594cfc7a8dd14fee220a59cc0d"></a>
### Function get\_acceleration

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float3 IRockySPHElement::get_acceleration() const
```




**Returns**:

The current acceleration resultant vector of the SPH element, expressed in Cartesian coordinates. If this method is called before the stage of force calculation, a zero vector will be returned.



**Return type**: ROCKY_FUNCTIONS float3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::get_acceleration"}]}`
-->

<a id="structIRockySPHElement_1a0d1898e6d543bbe3af9cb951646491ee"></a>
### Function get\_kernel

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHElement::get_kernel(const float distance, const IRockySPHElement &near_element) const
```




**Returns**:

The value of the kernel function evaluated at a point located at a given distance of the SPH element from which this method is called. The smoothing length considered is an average of the smoothing lengths of the pair formed by that element and a neighbor one.


**Parameters**:

* **distance**: The distance from the SPH element to the point at which the kernel function will be evaluated.
* **near_element**: The near element used to calculate the average smoothing length.



**Parameters**:

* const float **distance**
* const [IRockySPHElement](structIRockySPHElement.md#structIRockySPHElement) & **near_element**

**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::get_kernel"}]}`
-->

<a id="structIRockySPHElement_1a480a6f0abe070040e11affa55f24c43f"></a>
### Function get\_kernel\_derivative

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHElement::get_kernel_derivative(const float distance, const IRockySPHElement &near_element) const
```




**Returns**:

The value of the derivative of the kernel function evaluated at a point located at a given distance of the SPH element from which this method is called. The smoothing length considered is an average of the smoothing lengths of the pair formed by that element and a neighbor one.


**Parameters**:

* **distance**: The distance from the SPH element to the point at which the kernel function will be evaluated.
* **near_element**: The near element used to calculate the average smoothing length.



**Parameters**:

* const float **distance**
* const [IRockySPHElement](structIRockySPHElement.md#structIRockySPHElement) & **near_element**

**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::get_kernel_derivative"}]}`
-->

<a id="structIRockySPHElement_1ac3520dd9ddfb74c066ba7aef4737a455"></a>
### Function get\_mass

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHElement::get_mass() const
```




**Returns**:

The mass associated to the given SPH element.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::get_mass"}]}`
-->

<a id="structIRockySPHElement_1a040d1e15607c23a673614e3506a2e971"></a>
### Function get\_smoothing\_length

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHElement::get_smoothing_length() const
```




**Returns**:

The value of the smoothing length based on the size of the given SPH element. The radius of the support region of the kernel function is normally an integer multiple of the smoothing length.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::get_smoothing_length"}]}`
-->

<a id="structIRockySPHElement_1a38068aa228cc70686e89149e9aa4edb8"></a>
### Function get\_size

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHElement::get_size() const
```




**Returns**:

The spacing between SPH elements when they enter into the simulation. This is a characteristic length considered in several expressions in the SPH model.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::get_size"}]}`
-->

<a id="structIRockySPHElement_1a326bd60795936f9c4b77a9e000b1fa99"></a>
### Function get\_scalars

![][public]


```cpp
ROCKY_FUNCTIONS IRockySPHElementScalars IRockySPHElement::get_scalars()
```




**Returns**:

An <code>[IRockySPHElementScalars](structIRockySPHElementScalars.md#structIRockySPHElementScalars)</code> object that gives access to all SPH element scalars variables defined in the project.



**Return type**: ROCKY_FUNCTIONS [IRockySPHElementScalars](structIRockySPHElementScalars.md#structIRockySPHElementScalars)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::get_scalars"}]}`
-->

<a id="structIRockySPHElement_1ac28f2f31caf98235f3281c9c9f417474"></a>
### Function get\_strain\_rate\_tensor

![][public]


```cpp
ROCKY_FUNCTIONS SymmetricTensor< float > IRockySPHElement::get_strain_rate_tensor()
```




**Returns**:

A <code>SymmetricTensor<float></code> object that represents the strain rate tensor of the element. To get strain rate, please enable the Gradient Velocity Scalars by calling <code>IRockySPHElementScalarsModel::enable_gradient_velocity()</code> at setup hook.



**Return type**: ROCKY_FUNCTIONS SymmetricTensor< float >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::get_strain_rate_tensor"}]}`
-->

<a id="structIRockySPHElement_1ac526f6d9758c69d4d7270317c327546a"></a>
### Function get\_molecular\_viscosity

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS float IRockySPHElement::get_molecular_viscosity() const
```




**Returns**:

The value of the molecular viscosity attributed to a given SPH element.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::get_molecular_viscosity"}]}`
-->

<a id="structIRockySPHElement_1abc6efc9b72adc7c3b487e760a2c53534"></a>
### Function set\_molecular\_viscosity

![][public]


```cpp
ROCKY_FUNCTIONS void IRockySPHElement::set_molecular_viscosity(const float molecular_viscosity)
```




**This method sets the value of the molecular viscosity attributed to a given SPH element.**:



**Parameters**:

* const float **molecular_viscosity**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::set_molecular_viscosity"}]}`
-->

<a id="structIRockySPHElement_1aee53743f819eff8293099eb4d0d9fce4"></a>
### Function get\_refinement\_count

![][public]


```cpp
ROCKY_FUNCTIONS int IRockySPHElement::get_refinement_count()
```




**This the value of the refinement count of an element, which gives how many of the finest**:

element are represented are represented by the current element



**Return type**: ROCKY_FUNCTIONS int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::get_refinement_count"}]}`
-->

<a id="structIRockySPHElement_1ade543270436529233566364fd3112017"></a>
### Function set\_marked\_for\_refinement

![][public]


```cpp
ROCKY_FUNCTIONS void IRockySPHElement::set_marked_for_refinement(bool mark_for_refinement=true)
```




**This method marks the current element to be refined or not on the next refinement cycle**:



**Parameters**:

* bool **mark_for_refinement** = true 

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::set_marked_for_refinement"}]}`
-->

<a id="structIRockySPHElement_1a9c45d8c165fb26ff079a52aedacda8c1"></a>
### Function set\_skip\_for\_coarsening

![][public]


```cpp
ROCKY_FUNCTIONS void IRockySPHElement::set_skip_for_coarsening(bool skip_for_coarsening=true)
```




**This method marks the current element to be skipped on the next coarsening cycle. All the**:

elements that are not marked to be skipped can be candidates for coarsening.



**Parameters**:

* bool **skip_for_coarsening** = true 

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElement::set_skip_for_coarsening"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)