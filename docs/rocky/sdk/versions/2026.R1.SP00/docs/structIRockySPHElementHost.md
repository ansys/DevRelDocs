# Structure IRockySPHElementHost

<a id="structIRockySPHElementHost"></a>

![][C++]
![][public]

**#include <rocky\_sph\_element\_api.hpp>**



<code>[IRockySPHElementHost](structIRockySPHElementHost.md#structIRockySPHElementHost)</code> is the host counterpart of <code>[IRockySPHElement](structIRockySPHElement.md#structIRockySPHElement)</code>. Both share the same data, the main difference between them is that the data of <code>[IRockySPHElementHost](structIRockySPHElementHost.md#structIRockySPHElementHost)</code> resides within the host memory; therefore, it is used exclusively within initialization hooks, which are executed always in the host.






!> **Attention** \
This class is deprecated in favor of [IRockySPHElement](structIRockySPHElement.md#structIRockySPHElement) and will be removed in Rocky version 25.2

**Inherits from**:

* [IRockySPHElement](structIRockySPHElement.md#structIRockySPHElement)

## Members

* [add\_acceleration](structIRockySPHElement.md#structIRockySPHElement_1a2f90b3a2980c2fa73cd53e72ea277f76)
* [add\_force](structIRockySPHElement.md#structIRockySPHElement_1a0d51cf017a85bd175db6d18538c9d2e0)
* [get\_acceleration](structIRockySPHElementHost.md#structIRockySPHElementHost_1a9118b2d9c4e8d7f185d453503bfbb04f)
* [get\_density](structIRockySPHElementHost.md#structIRockySPHElementHost_1a246b2e85d4b1568d8db488e0f212a358)
* [get\_force](structIRockySPHElementHost.md#structIRockySPHElementHost_1aa1c7a1c2190108886098cf3918d29588)
* [get\_kernel](structIRockySPHElement.md#structIRockySPHElement_1a0d1898e6d543bbe3af9cb951646491ee)
* [get\_kernel\_derivative](structIRockySPHElement.md#structIRockySPHElement_1a480a6f0abe070040e11affa55f24c43f)
* [get\_linked\_dem\_particle](structIRockySPHElementHost.md#structIRockySPHElementHost_1ac189516559b776a629f56aead8ac886b)
* [get\_linked\_dem\_particle](structIRockySPHElement.md#structIRockySPHElement_1a82b39eaf0e1f5b9f09367fcb994af3d9)
* [get\_mass](structIRockySPHElement.md#structIRockySPHElement_1ac3520dd9ddfb74c066ba7aef4737a455)
* [get\_molecular\_viscosity](structIRockySPHElement.md#structIRockySPHElement_1ac526f6d9758c69d4d7270317c327546a)
* [get\_normal](structIRockySPHElementHost.md#structIRockySPHElementHost_1a9cae6ab2f89fc02fd3e944a5f1059d2d)
* [get\_position](structIRockySPHElementHost.md#structIRockySPHElementHost_1a518652c4c9aaba36c6e2137c3ff60f70)
* [get\_pressure](structIRockySPHElementHost.md#structIRockySPHElementHost_1a1e02d98c42706aad00a15f84090046b7)
* [get\_refinement\_count](structIRockySPHElement.md#structIRockySPHElement_1aee53743f819eff8293099eb4d0d9fce4)
* [get\_release\_time](structIRockySPHElementHost.md#structIRockySPHElementHost_1a300c46b79175d050ec9e96c736732b98)
* [get\_scalars](structIRockySPHElementHost.md#structIRockySPHElementHost_1a333bb7196556fbe6da90abe079747071)
* [get\_size](structIRockySPHElement.md#structIRockySPHElement_1a38068aa228cc70686e89149e9aa4edb8)
* [get\_smoothing\_length](structIRockySPHElement.md#structIRockySPHElement_1a040d1e15607c23a673614e3506a2e971)
* [get\_strain\_rate\_tensor](structIRockySPHElementHost.md#structIRockySPHElementHost_1a0540a21d1483e3848494d71a7145d8ff)
* [get\_temperature](structIRockySPHElement.md#structIRockySPHElement_1ae7191bebe8d701047d69b8bc9f590b16)
* [get\_velocity](structIRockySPHElementHost.md#structIRockySPHElementHost_1a1d9f8648a1c0ac0b575c9361ca5b9b96)
* [is\_dem\_coupled](structIRockySPHElementHost.md#structIRockySPHElementHost_1abe5925c0999262fc7128da90d3a3f401)
* [is\_enabled](structIRockySPHElement.md#structIRockySPHElement_1af514a8db990dff91c80abef70c29d604)
* [is\_frozen](structIRockySPHElement.md#structIRockySPHElement_1a8a513f4cacbb94a272332beb8c8a371c)
* [set\_frozen](structIRockySPHElement.md#structIRockySPHElement_1a258ae430ddd628d1b3375680774fd748)
* [set\_marked\_for\_refinement](structIRockySPHElement.md#structIRockySPHElement_1ade543270436529233566364fd3112017)
* [set\_molecular\_viscosity](structIRockySPHElement.md#structIRockySPHElement_1abc6efc9b72adc7c3b487e760a2c53534)
* [set\_skip\_for\_coarsening](structIRockySPHElement.md#structIRockySPHElement_1a9c45d8c165fb26ff079a52aedacda8c1)

## Public functions

### Function get\_linked\_dem\_particle

<a id="structIRockySPHElementHost_1ac189516559b776a629f56aead8ac886b"></a>

![][public]
![][const]


```cpp
IRockyParticleHost IRockySPHElementHost::get_linked_dem_particle(IRockyModel &model) const
```




**Returns**:

An <code>[IRockyParticleHost](structIRockyParticleHost.md#structIRockyParticleHost)</code> object representing the DEM particle linked to the SPH particle, if the latter is actually a DEM-coupled SPH element.



**Parameters**:

* [IRockyModel](structIRockyModel.md#structIRockyModel) & **model**

**Return type**: [IRockyParticleHost](structIRockyParticleHost.md#structIRockyParticleHost)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementHost::get_linked_dem_particle"}]}`
-->

### Function is\_dem\_coupled

<a id="structIRockySPHElementHost_1abe5925c0999262fc7128da90d3a3f401"></a>

![][public]
![][const]


```cpp
bool IRockySPHElementHost::is_dem_coupled() const
```




**Returns**:

True, if the SPH element is placed inside a DEM particle in order to model the interaction between the fluid flow and the DEM particles. False, otherwise.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementHost::is_dem_coupled"}]}`
-->

### Function get\_density

<a id="structIRockySPHElementHost_1a246b2e85d4b1568d8db488e0f212a358"></a>

![][public]
![][const]


```cpp
float IRockySPHElementHost::get_density() const
```




**Returns**:

The current value of density calculated for the SPH element.



**Return type**: float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementHost::get_density"}]}`
-->

### Function get\_pressure

<a id="structIRockySPHElementHost_1a1e02d98c42706aad00a15f84090046b7"></a>

![][public]
![][const]


```cpp
float IRockySPHElementHost::get_pressure() const
```




**Returns**:

The current value of the pressure at the location coincident with the SPH element.



**Return type**: float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementHost::get_pressure"}]}`
-->

### Function get\_release\_time

<a id="structIRockySPHElementHost_1a300c46b79175d050ec9e96c736732b98"></a>

![][public]
![][const]


```cpp
float IRockySPHElementHost::get_release_time() const
```




**Returns**:

The time at which the SPH element entered into the simulation.



**Return type**: float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementHost::get_release_time"}]}`
-->

### Function get\_position

<a id="structIRockySPHElementHost_1a518652c4c9aaba36c6e2137c3ff60f70"></a>

![][public]
![][const]


```cpp
float3 IRockySPHElementHost::get_position() const
```




**Returns**:

The Cartesian coordinates of the point at which the SPH element is currently located.



**Return type**: float3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementHost::get_position"}]}`
-->

### Function get\_velocity

<a id="structIRockySPHElementHost_1a1d9f8648a1c0ac0b575c9361ca5b9b96"></a>

![][public]
![][const]


```cpp
float3 IRockySPHElementHost::get_velocity() const
```




**Returns**:

The velocity vector at which the SPH element is currently moving, expressed in Cartesian coordinates.



**Return type**: float3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementHost::get_velocity"}]}`
-->

### Function get\_normal

<a id="structIRockySPHElementHost_1a9cae6ab2f89fc02fd3e944a5f1059d2d"></a>

![][public]
![][const]


```cpp
float3 IRockySPHElementHost::get_normal() const
```




**Returns**:

An approximation of the normal vector to a free surface, if the SPH element is located near one, for use on the implementation of custom surface tension models. This vector is obtained by using the standard continuum approximation of interfaces, which is based on the gradient of the so called color function. In this approximation, an interface has a finite thickness over which the color function varies smoothly between zero and one. Because of this, a normal vector is calculated for every SPH element in the solution domain. However, only elements located near a free surface will have a normal vector with length significantly different from zero. It is worth noting that this vector is not normalized, therefore, its length will vary from one element to another. Moreover, these normal vectors are calculated internally only if a surface tension model is active in the simulation, therefore, a runtime error will be generated if this method is used otherwise.



**Return type**: float3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementHost::get_normal"}]}`
-->

### Function get\_force

<a id="structIRockySPHElementHost_1aa1c7a1c2190108886098cf3918d29588"></a>

![][public]
![][const]


```cpp
float3 IRockySPHElementHost::get_force() const
```




**Returns**:

The resultant of the forces currently acting over the SPH element, expressed in Cartesian coordinates. If this method is called before the stage of force calculation, a zero vector will be returned.



**Return type**: float3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementHost::get_force"}]}`
-->

### Function get\_acceleration

<a id="structIRockySPHElementHost_1a9118b2d9c4e8d7f185d453503bfbb04f"></a>

![][public]
![][const]


```cpp
float3 IRockySPHElementHost::get_acceleration() const
```




**Returns**:

The current acceleration resultant vector of the SPH element, expressed in Cartesian coordinates. If this method is called before the stage of force calculation, a zero vector will be returned.



**Return type**: float3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementHost::get_acceleration"}]}`
-->

### Function get\_scalars

<a id="structIRockySPHElementHost_1a333bb7196556fbe6da90abe079747071"></a>

![][public]


```cpp
IRockySPHElementScalars IRockySPHElementHost::get_scalars()
```




**Returns**:

An <code>[IRockySPHElementScalars](structIRockySPHElementScalars.md#structIRockySPHElementScalars)</code> object that gives access to all SPH element scalars variables defined in the project.



**Return type**: [IRockySPHElementScalars](structIRockySPHElementScalars.md#structIRockySPHElementScalars)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementHost::get_scalars"}]}`
-->

### Function get\_strain\_rate\_tensor

<a id="structIRockySPHElementHost_1a0540a21d1483e3848494d71a7145d8ff"></a>

![][public]


```cpp
ROCKY_FUNCTIONS SymmetricTensor< float > IRockySPHElementHost::get_strain_rate_tensor()
```




**Returns**:

A <code>SymmetricTensor<float></code> object that represents the strain rate tensor of the element. To get strain rate, please enable the Gradient Velocity Scalars by calling <code>IRockySPHElementScalarsModel::enable_gradient_velocity()</code> at setup hook.



**Return type**: ROCKY_FUNCTIONS SymmetricTensor< float >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementHost::get_strain_rate_tensor"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)