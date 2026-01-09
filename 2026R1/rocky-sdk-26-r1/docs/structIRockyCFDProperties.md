<a id="structIRockyCFDProperties"></a>
# Structure IRockyCFDProperties

![][C++]
![][public]

**#include <rocky\_cfd.hpp>**



<code>[IRockyCFDProperties](structIRockyCFDProperties.md#structIRockyCFDProperties)</code> gives access to data and utility methods commonly needed for calculating interaction magnitudes between the fluid flow and a particle. The property values returned by those methods are referred either to a particle, or the CFD cell in which that particle is currently located, or both. In the special case of a 1-way constant coupling mode, as there is no CFD mesh associated, the fluid properties returned are the constant values prescribed through the Rocky UI.

## Members

* [compute\_fluid\_vorticity](structIRockyCFDProperties.md#structIRockyCFDProperties_1a9070705d5011bf627a5ca1e083b28bb7)
* [compute\_relative\_angular\_reynolds\_number](structIRockyCFDProperties.md#structIRockyCFDProperties_1adc32c375f6f3d377b21cd019c336e8c5)
* [compute\_vorticity\_reynolds\_number](structIRockyCFDProperties.md#structIRockyCFDProperties_1a6fd3d1388c1b57c53e0d6a0966ecbd0b)
* [get\_cell\_volume](structIRockyCFDProperties.md#structIRockyCFDProperties_1a07a10f12cf5cb16540107a1272e3cea9)
* [get\_cfd\_time\_step](structIRockyCFDProperties.md#structIRockyCFDProperties_1a39fb9991d8c793491701fa07c269de2e)
* [get\_fluid\_density](structIRockyCFDProperties.md#structIRockyCFDProperties_1ad1b8eb5a0bb1345469d62bcd8429daf8)
* [get\_fluid\_pressure\_gradient](structIRockyCFDProperties.md#structIRockyCFDProperties_1a50a9b64cedef031bdf38377de0d0665a)
* [get\_fluid\_specific\_heat](structIRockyCFDProperties.md#structIRockyCFDProperties_1a6f7d6f28278bd653921f6dd19b8972f1)
* [get\_fluid\_temperature](structIRockyCFDProperties.md#structIRockyCFDProperties_1a9efc8d5c0074cae18fcbcada620ae162)
* [get\_fluid\_thermal\_conductivity](structIRockyCFDProperties.md#structIRockyCFDProperties_1a2bc489cf137e3010d27ee7165d62f8ef)
* [get\_fluid\_viscosity](structIRockyCFDProperties.md#structIRockyCFDProperties_1ace8fe3ed8b6755c7594c337ded2fbe58)
* [get\_prandtl\_number](structIRockyCFDProperties.md#structIRockyCFDProperties_1a345be7a5c45f89f292fb864311c36ad6)
* [get\_relative\_velocity](structIRockyCFDProperties.md#structIRockyCFDProperties_1a891e79c0311177f586f49ead9b9a182f)
* [get\_reynolds\_number](structIRockyCFDProperties.md#structIRockyCFDProperties_1a56a3b748ff0a15c3b4870b5fd240bd53)
* [get\_scalars](structIRockyCFDProperties.md#structIRockyCFDProperties_1a995c4c9158aff6f72e0b1fdfe39dac9f)
* [get\_solid\_fraction](structIRockyCFDProperties.md#structIRockyCFDProperties_1af868d4c581ae2e98db27b2785523b688)

## Public functions

<a id="structIRockyCFDProperties_1ad1b8eb5a0bb1345469d62bcd8429daf8"></a>
### Function get\_fluid\_density

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyCFDProperties::get_fluid_density() const
```




**Returns**:

The value of the fluid density within the CFD cell in which the interacting particle is located.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCFDProperties::get_fluid_density"}]}`
-->

<a id="structIRockyCFDProperties_1ace8fe3ed8b6755c7594c337ded2fbe58"></a>
### Function get\_fluid\_viscosity

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyCFDProperties::get_fluid_viscosity() const
```




**Returns**:

The value of the fluid absolute viscosity within the CFD cell in which the interacting particle is located.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCFDProperties::get_fluid_viscosity"}]}`
-->

<a id="structIRockyCFDProperties_1a9efc8d5c0074cae18fcbcada620ae162"></a>
### Function get\_fluid\_temperature

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyCFDProperties::get_fluid_temperature() const
```




**Returns**:

The value of the fluid temperature within the CFD cell in which the interacting particle is located. This temperature will be available only if the energy equation is solved in Fluent and/or thermal modeling is enabled in Rocky.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCFDProperties::get_fluid_temperature"}]}`
-->

<a id="structIRockyCFDProperties_1a6f7d6f28278bd653921f6dd19b8972f1"></a>
### Function get\_fluid\_specific\_heat

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyCFDProperties::get_fluid_specific_heat() const
```




**Returns**:

The value of the fluid specific heat within the CFD cell in which the interacting particle is located.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCFDProperties::get_fluid_specific_heat"}]}`
-->

<a id="structIRockyCFDProperties_1a2bc489cf137e3010d27ee7165d62f8ef"></a>
### Function get\_fluid\_thermal\_conductivity

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyCFDProperties::get_fluid_thermal_conductivity() const
```




**Returns**:

The value of the fluid thermal conductivity within the CFD cell in which the interacting particle is located.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCFDProperties::get_fluid_thermal_conductivity"}]}`
-->

<a id="structIRockyCFDProperties_1a50a9b64cedef031bdf38377de0d0665a"></a>
### Function get\_fluid\_pressure\_gradient

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyCFDProperties::get_fluid_pressure_gradient() const
```




**Returns**:

The pressure gradient in the fluid within the CFD cell in which the interacting particle is located, expressed in Cartesian coordinates.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCFDProperties::get_fluid_pressure_gradient"}]}`
-->

<a id="structIRockyCFDProperties_1a9070705d5011bf627a5ca1e083b28bb7"></a>
### Function compute\_fluid\_vorticity

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyCFDProperties::compute_fluid_vorticity() const
```




**Returns**:

The vorticity vector associated to the fluid flow within the CFD cell in which the interacting particle is located. The vorticity is defined as the curl of the fluid velocity.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCFDProperties::compute_fluid_vorticity"}]}`
-->

<a id="structIRockyCFDProperties_1a891e79c0311177f586f49ead9b9a182f"></a>
### Function get\_relative\_velocity

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyCFDProperties::get_relative_velocity() const
```




**Returns**:

The relative velocity vector in Cartesian coordinates. In this context, the relative velocity is defined as the difference between the fluid velocity and the particle velocity.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCFDProperties::get_relative_velocity"}]}`
-->

<a id="structIRockyCFDProperties_1a56a3b748ff0a15c3b4870b5fd240bd53"></a>
### Function get\_reynolds\_number

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyCFDProperties::get_reynolds_number() const
```




**Returns**:

The Reynolds number value, based on the relative velocity and the particle's equivalent diameter. For more details, please refer to the DEM-CFD Coupling Technical Manual regarding this topic. Drag coefficients in most of the drag laws found in the literature are expressed as functions of this Reynolds number.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCFDProperties::get_reynolds_number"}]}`
-->

<a id="structIRockyCFDProperties_1a6fd3d1388c1b57c53e0d6a0966ecbd0b"></a>
### Function compute\_vorticity\_reynolds\_number

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyCFDProperties::compute_vorticity_reynolds_number() const
```




**Returns**:

The Reynolds number value, based on the flow vorticity and the particle's equivalent diameter. For more details, please refer to the DEM-CFD Coupling Technical Manual regarding this topic. Lift coefficients are usually expressed as functions of this Reynolds number.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCFDProperties::compute_vorticity_reynolds_number"}]}`
-->

<a id="structIRockyCFDProperties_1adc32c375f6f3d377b21cd019c336e8c5"></a>
### Function compute\_relative\_angular\_reynolds\_number

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyCFDProperties::compute_relative_angular_reynolds_number(const double3 &particle_angular_velocity) const
```




**Returns**:

The Reynolds number value, based on the relative angular velocity and the particle's equivalent diameter. For more details, please refer to the DEM-CFD Coupling Technical Manual regarding this topic. Torque laws are commonly expressed using this Reynolds number.



**Parameters**:

* const double3 & **particle_angular_velocity**

**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCFDProperties::compute_relative_angular_reynolds_number"}]}`
-->

<a id="structIRockyCFDProperties_1a345be7a5c45f89f292fb864311c36ad6"></a>
### Function get\_prandtl\_number

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyCFDProperties::get_prandtl_number() const
```




**Returns**:

The Prandtl number value, defined as the ratio of the fluid's momentum diffusivity to its thermal diffusivity. For more details, please refer to the DEM-CFD Coupling Technical Manual regarding this topic.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCFDProperties::get_prandtl_number"}]}`
-->

<a id="structIRockyCFDProperties_1af868d4c581ae2e98db27b2785523b688"></a>
### Function get\_solid\_fraction

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyCFDProperties::get_solid_fraction() const
```




**Returns**:

The solid fraction at the CFD cell in which the interacting particle is located. This parameter is defined as the ratio between the volume of the particles within that cell to the volume of the cell itself. In Fluent Two Way cases, the value of the solid fraction may be altered by a Lagrangian-to-Eulerian mapping procedure. For more details, please refer to the DEM-CFD Coupling Technical Manual.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCFDProperties::get_solid_fraction"}]}`
-->

<a id="structIRockyCFDProperties_1a07a10f12cf5cb16540107a1272e3cea9"></a>
### Function get\_cell\_volume

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyCFDProperties::get_cell_volume() const
```




**Returns**:

The volume of the CFD cell in which the interacting particle is located. Before calling this method, one should enable it by calling the method <code>[IRockyFluidScalarsModel::enable\_storage\_cell\_volume()](structIRockyFluidScalarsModel.md#structIRockyFluidScalarsModel_1a6f1e21645261447c930050eff3ecb35b)</code>



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCFDProperties::get_cell_volume"}]}`
-->

<a id="structIRockyCFDProperties_1a995c4c9158aff6f72e0b1fdfe39dac9f"></a>
### Function get\_scalars

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS IRockyFluidScalars IRockyCFDProperties::get_scalars() const
```




**Returns**:

An <code>[IRockyFluidScalars](structIRockyFluidScalars.md#structIRockyFluidScalars)</code> object that gives access to the values of all CFD fluid scalars defined in the project at the CFD cell in which the interacting particle is located.



**Return type**: ROCKY_FUNCTIONS [IRockyFluidScalars](structIRockyFluidScalars.md#structIRockyFluidScalars)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCFDProperties::get_scalars"}]}`
-->

<a id="structIRockyCFDProperties_1a39fb9991d8c793491701fa07c269de2e"></a>
### Function get\_cfd\_time\_step

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyCFDProperties::get_cfd_time_step() const
```




**Returns**:

The CFD time step



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCFDProperties::get_cfd_time_step"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)