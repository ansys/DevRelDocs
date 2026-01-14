# Structure IRockySPHModel

<a id="structIRockySPHModel"></a>

![][C++]
![][public]

**#include <rocky\_sph\_model\_api.hpp>**



<code>[IRockySPHModel](structIRockySPHModel.md#structIRockySPHModel)</code> includes some methods that provide basic information about the SPH model. The data associated to an <code>[IRockySPHModel](structIRockySPHModel.md#structIRockySPHModel)</code> object resides entirely on host memory, consequently, it can be accessed only within hooks executed host-side.

## Members

* [get\_element\_mass](structIRockySPHModel.md#structIRockySPHModel_1afafa8461838c8fa9ca237437c074facd)
* [get\_fluid\_density](structIRockySPHModel.md#structIRockySPHModel_1a053a3b3c9bd14e5051f38a0024ab4536)
* [get\_fluid\_specific\_heat](structIRockySPHModel.md#structIRockySPHModel_1acaf7cc9d7b268d36a2f739cfc3c3f7ca)
* [get\_fluid\_thermal\_conductivity](structIRockySPHModel.md#structIRockySPHModel_1ab09538e62b2731ab25ee664d6eb08319)
* [get\_fluid\_viscosity](structIRockySPHModel.md#structIRockySPHModel_1aa34cbdb0bbe713f76a24718369445b90)
* [get\_initial\_element\_spacing](structIRockySPHModel.md#structIRockySPHModel_1a212b6dd01fb2421258372058df86ccd6)
* [get\_maximum\_refinement\_count](structIRockySPHModel.md#structIRockySPHModel_1ae218d0f1f6e78c43c02e668b2966a4be)
* [get\_maximum\_refinement\_levels](structIRockySPHModel.md#structIRockySPHModel_1ad19b2ed9afbf9b0c6dfe0792db40babe)
* [get\_number\_of\_active\_free\_sph\_elements](structIRockySPHModel.md#structIRockySPHModel_1a5f6419ca48c0e300e03e6820934a1718)
* [get\_number\_of\_active\_linked\_sph\_elements](structIRockySPHModel.md#structIRockySPHModel_1a832524def72a3d2da3bd449d5fb74368)
* [get\_number\_of\_active\_sph\_elements](structIRockySPHModel.md#structIRockySPHModel_1a53aabea7b2fb880bf83924a036badac7)
* [get\_number\_of\_sph\_elements](structIRockySPHModel.md#structIRockySPHModel_1a5a3c1e8c7b54f79f6803fb25799cbd6d)
* [get\_smoothing\_length](structIRockySPHModel.md#structIRockySPHModel_1a245fc38b2db35e544f3b78642f11aff7)
* [get\_speed\_of\_sound](structIRockySPHModel.md#structIRockySPHModel_1a223390925c0c7a8d4c0a8ceaef043fe4)
* [get\_sph\_element\_scalars](structIRockySPHModel.md#structIRockySPHModel_1a60758ee9b344fcc7c76b500c0ac8f1cc)
* [get\_surface\_tension](structIRockySPHModel.md#structIRockySPHModel_1adae7b4a0340c884eb80e14d54a1b22f5)
* [is\_enabled](structIRockySPHModel.md#structIRockySPHModel_1ab104c8f250896d3528cbe2eb045b4c69)
* [set\_htc\_distance\_factor](structIRockySPHModel.md#structIRockySPHModel_1a1627faf9bcd3eca660891efbf5d95981)

## Public functions

<a id="structIRockySPHModel_1a60758ee9b344fcc7c76b500c0ac8f1cc"></a>
### Function get\_sph\_element\_scalars

![][public]
![][const]


```cpp
IRockySPHElementScalarsModel IRockySPHModel::get_sph_element_scalars() const
```




**Returns**:

An <code>[IRockySPHElementScalarsModel](structIRockySPHElementScalarsModel.md#structIRockySPHElementScalarsModel)</code> object, that allows users to add new SPH element scalars or activate SPH element scalars known to Rocky during the setup of a module. SPH element scalars are special variables attached to SPH elements that are able to store values per element that are preserved between time iterations.



**Return type**: [IRockySPHElementScalarsModel](structIRockySPHElementScalarsModel.md#structIRockySPHElementScalarsModel)

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHModel::get_sph_element_scalars"}]}`
-->

<a id="structIRockySPHModel_1a5a3c1e8c7b54f79f6803fb25799cbd6d"></a>
### Function get\_number\_of\_sph\_elements

![][public]
![][const]


```cpp
int IRockySPHModel::get_number_of_sph_elements() const
```




**Returns**:

The total number of SPH elements generated during the preprocessing phase of the simulation.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHModel::get_number_of_sph_elements"}]}`
-->

<a id="structIRockySPHModel_1a53aabea7b2fb880bf83924a036badac7"></a>
### Function get\_number\_of\_active\_sph\_elements

![][public]
![][const]


```cpp
int IRockySPHModel::get_number_of_active_sph_elements() const
```




**Returns**:

The number of SPH elements that are currently active in the simulation. This number includes both free and DEM-coupled SPH elements.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHModel::get_number_of_active_sph_elements"}]}`
-->

<a id="structIRockySPHModel_1a5f6419ca48c0e300e03e6820934a1718"></a>
### Function get\_number\_of\_active\_free\_sph\_elements

![][public]
![][const]


```cpp
int IRockySPHModel::get_number_of_active_free_sph_elements() const
```




**Returns**:

The number of free SPH elements that are currently active in the simulation. Free SPH elements are the ones that represent the fluid in the simulation.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHModel::get_number_of_active_free_sph_elements"}]}`
-->

<a id="structIRockySPHModel_1a832524def72a3d2da3bd449d5fb74368"></a>
### Function get\_number\_of\_active\_linked\_sph\_elements

![][public]
![][const]


```cpp
int IRockySPHModel::get_number_of_active_linked_sph_elements() const
```




**Returns**:

The number of linked SPH elements that are currently active in the simulation. Linked or DEM-coupled SPH elements are the ones inside the DEM particles, used to model the interaction between fluid and DEM particles.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHModel::get_number_of_active_linked_sph_elements"}]}`
-->

<a id="structIRockySPHModel_1a212b6dd01fb2421258372058df86ccd6"></a>
### Function get\_initial\_element\_spacing

![][public]
![][const]


```cpp
float IRockySPHModel::get_initial_element_spacing() const
```




**Returns**:

The spacing between SPH elements when they enter into the simulation. This is a characteristic length considered in several expressions in the SPH model.



**Return type**: float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHModel::get_initial_element_spacing"}]}`
-->

<a id="structIRockySPHModel_1a245fc38b2db35e544f3b78642f11aff7"></a>
### Function get\_smoothing\_length

![][public]
![][const]


```cpp
float IRockySPHModel::get_smoothing_length() const
```




**Returns**:

The value of the smoothing length considered in the SPH discretization. The radius of the support region of the kernel function is normally an integer multiple of the smoothing length.



**Return type**: float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHModel::get_smoothing_length"}]}`
-->

<a id="structIRockySPHModel_1afafa8461838c8fa9ca237437c074facd"></a>
### Function get\_element\_mass

![][public]
![][const]


```cpp
float IRockySPHModel::get_element_mass() const
```




**Returns**:

The mass associated to each one of the SPH elements in the simulation.



**Return type**: float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHModel::get_element_mass"}]}`
-->

<a id="structIRockySPHModel_1aa34cbdb0bbe713f76a24718369445b90"></a>
### Function get\_fluid\_viscosity

![][public]
![][const]


```cpp
float IRockySPHModel::get_fluid_viscosity() const
```




**Returns**:

The user-prescribed value of the fluid's dynamic viscosity.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHModel::get_fluid_viscosity"}]}`
-->

<a id="structIRockySPHModel_1a053a3b3c9bd14e5051f38a0024ab4536"></a>
### Function get\_fluid\_density

![][public]
![][const]


```cpp
float IRockySPHModel::get_fluid_density() const
```




**Returns**:

The user-prescribed value of the fluid's density.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHModel::get_fluid_density"}]}`
-->

<a id="structIRockySPHModel_1ab09538e62b2731ab25ee664d6eb08319"></a>
### Function get\_fluid\_thermal\_conductivity

![][public]
![][const]


```cpp
float IRockySPHModel::get_fluid_thermal_conductivity() const
```




**Returns**:

The user-prescribed value of the fluid's thermal conductivity.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHModel::get_fluid_thermal_conductivity"}]}`
-->

<a id="structIRockySPHModel_1acaf7cc9d7b268d36a2f739cfc3c3f7ca"></a>
### Function get\_fluid\_specific\_heat

![][public]
![][const]


```cpp
float IRockySPHModel::get_fluid_specific_heat() const
```




**Returns**:

The user-prescribed value of the fluid's specific heat.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHModel::get_fluid_specific_heat"}]}`
-->

<a id="structIRockySPHModel_1a223390925c0c7a8d4c0a8ceaef043fe4"></a>
### Function get\_speed\_of\_sound

![][public]
![][const]


```cpp
float IRockySPHModel::get_speed_of_sound() const
```




**Returns**:

The user-prescribed value of the speed of sound in the fluid.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHModel::get_speed_of_sound"}]}`
-->

<a id="structIRockySPHModel_1adae7b4a0340c884eb80e14d54a1b22f5"></a>
### Function get\_surface\_tension

![][public]
![][const]


```cpp
float IRockySPHModel::get_surface_tension() const
```




**Returns**:

The user-prescribed value of the surface tension at a free surface.



**Return type**: ROCKY_FUNCTIONS float

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHModel::get_surface_tension"}]}`
-->

<a id="structIRockySPHModel_1ab104c8f250896d3528cbe2eb045b4c69"></a>
### Function is\_enabled

![][public]
![][const]


```cpp
bool IRockySPHModel::is_enabled() const
```




**Returns**:

A boolean value indicating whether the SPH model is enabled on the simulation or not.



**Return type**: bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHModel::is_enabled"}]}`
-->

<a id="structIRockySPHModel_1a1627faf9bcd3eca660891efbf5d95981"></a>
### Function set\_htc\_distance\_factor

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockySPHModel::set_htc_distance_factor(float htc_distance_factor) const
```




**This function sets a factor that will be multiplied by the SPH element size that determines**:

the distance from the triangle the SPH average properties (e.g. velocity, viscosity) will be ca calculated.


**Parameters**:

* **htc_distance_factor**: the factor that will be multiplied by the SPH element size.



**Parameters**:

* float **htc_distance_factor**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHModel::set_htc_distance_factor"}]}`
-->

<a id="structIRockySPHModel_1ae218d0f1f6e78c43c02e668b2966a4be"></a>
### Function get\_maximum\_refinement\_count

![][public]
![][const]


```cpp
int IRockySPHModel::get_maximum_refinement_count() const
```




**Returns**:

This function gets an returns the maximum number of refinement count which is how many of the finest elements can be generated from the coarsest element depending on the maximum number of refinement levels.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHModel::get_maximum_refinement_count"}]}`
-->

<a id="structIRockySPHModel_1ad19b2ed9afbf9b0c6dfe0792db40babe"></a>
### Function get\_maximum\_refinement\_levels

![][public]
![][const]


```cpp
int IRockySPHModel::get_maximum_refinement_levels() const
```




**Returns**:

This function gets an returns the maximum number of refinement levels.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHModel::get_maximum_refinement_levels"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)