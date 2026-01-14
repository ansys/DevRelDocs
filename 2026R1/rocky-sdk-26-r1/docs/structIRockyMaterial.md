# Structure IRockyMaterial

<a id="structIRockyMaterial"></a>

![][C++]
![][public]

**#include <rocky\_material\_api.hpp>**



<code>[IRockyMaterial](structIRockyMaterial.md#structIRockyMaterial)</code> is an interface for the internal material object, which gives access to values of the physical properties associated to the material that makes up some entity in Rocky. The values of all those properties are dimensionless values.

## Members

* [get\_density](structIRockyMaterial.md#structIRockyMaterial_1ac4a3805a7f95f47fbd93761d1b2013fe)
* [get\_poisson\_ratio](structIRockyMaterial.md#structIRockyMaterial_1a77ed523db8076cb87c69334481e0ad9b)
* [get\_specific\_heat](structIRockyMaterial.md#structIRockyMaterial_1ab0f6b6ddb2c899c76bad757864649a22)
* [get\_thermal\_conductivity](structIRockyMaterial.md#structIRockyMaterial_1a35481246571a954fa8954efc49631ba5)
* [get\_young\_modulus](structIRockyMaterial.md#structIRockyMaterial_1ac2296f9b2afe54b6660f584d5d937994)

## Public functions

<a id="structIRockyMaterial_1ac2296f9b2afe54b6660f584d5d937994"></a>
### Function get\_young\_modulus

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyMaterial::get_young_modulus() const
```




**Returns**:

The value of the Young's or elastic modulus. This value is the product of the Young's modulus specified for the material and the numerical softening factor, which is commonly used for reducing the stiffness and, in turn, increasing the simulation timestep. For more details, please refer to the DEM Technical Manual.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyMaterial::get_young_modulus"}]}`
-->

<a id="structIRockyMaterial_1a77ed523db8076cb87c69334481e0ad9b"></a>
### Function get\_poisson\_ratio

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyMaterial::get_poisson_ratio() const
```




**Returns**:

The value of the Poisson's ratio specified for the material.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyMaterial::get_poisson_ratio"}]}`
-->

<a id="structIRockyMaterial_1ac4a3805a7f95f47fbd93761d1b2013fe"></a>
### Function get\_density

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyMaterial::get_density() const
```




**Returns**:

The value of the density of the material.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyMaterial::get_density"}]}`
-->

<a id="structIRockyMaterial_1ab0f6b6ddb2c899c76bad757864649a22"></a>
### Function get\_specific\_heat

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyMaterial::get_specific_heat() const
```




**Returns**:

The value of the specific heat of the material.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyMaterial::get_specific_heat"}]}`
-->

<a id="structIRockyMaterial_1a35481246571a954fa8954efc49631ba5"></a>
### Function get\_thermal\_conductivity

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyMaterial::get_thermal_conductivity() const
```




**Returns**:

The value of the thermal conductivity of the material.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyMaterial::get_thermal_conductivity"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)