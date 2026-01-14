# Structure IRockyParticleScalarsModel

<a id="structIRockyParticleScalarsModel"></a>

![][C++]
![][public]

**#include <rocky\_particle\_scalars.hpp>**



An <code>[IRockyParticleScalarsModel](structIRockyParticleScalarsModel.md#structIRockyParticleScalarsModel)</code> allows users to add new particle scalars, find particle scalars created in other modules or activate particle scalars known to Rocky, during the setup stage of a module. Particle scalars are special variables attached to particles, which are able to store values per particle that are preserved between time iterations during a simulation.

**Inherits from**:

* ScalarsModel\< rocky20::ParticleScalarsController \>

## Members

* [add](structIRockyParticleScalarsModel.md#structIRockyParticleScalarsModel_1a6c5d694427108fb05dbe32f418394f71)
* [enable\_mass\_increment](structIRockyParticleScalarsModel.md#structIRockyParticleScalarsModel_1a82310007a102c845cbb5e6163a8863b0)
* [enable\_variable\_poisson\_ratio](structIRockyParticleScalarsModel.md#structIRockyParticleScalarsModel_1acd067b0a46a10fd2c931702257974e2b)
* [enable\_variable\_specific\_heat](structIRockyParticleScalarsModel.md#structIRockyParticleScalarsModel_1a7527c9be8d999b23208f43917f13a5a0)
* [enable\_variable\_thermal\_conductivity](structIRockyParticleScalarsModel.md#structIRockyParticleScalarsModel_1aa415607030884508e190c512b1218856)
* [enable\_volume\_increment](structIRockyParticleScalarsModel.md#structIRockyParticleScalarsModel_1ab60645cee4e4e0dc368f0f11bc9b75d9)
* [find](structIRockyParticleScalarsModel.md#structIRockyParticleScalarsModel_1a2fe0d14a5fc4f803eb04374ec6d2a40f)
* [reset](structIRockyParticleScalarsModel.md#structIRockyParticleScalarsModel_1a4884be92519fd1d4d274d7558864b85f)
* [set\_dimension](structIRockyParticleScalarsModel.md#structIRockyParticleScalarsModel_1a40b74ee0226b8f635092a200a7be71b1)

## Public functions

<a id="structIRockyParticleScalarsModel_1a82310007a102c845cbb5e6163a8863b0"></a>
### Function enable\_mass\_increment

![][public]


```cpp
void IRockyParticleScalarsModel::enable_mass_increment()
```




**Enables a known-scalar that associates a mass increment value to each particle in a simulation.**:

When this scalar is enabled, the instantaneous mass of a particle is equal to the original mass defined at the beginning of a simulation plus the value of that mass increment.



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalarsModel::enable_mass_increment"}]}`
-->

<a id="structIRockyParticleScalarsModel_1ab60645cee4e4e0dc368f0f11bc9b75d9"></a>
### Function enable\_volume\_increment

![][public]


```cpp
void IRockyParticleScalarsModel::enable_volume_increment()
```




**Enables a known-scalar that associates a volume increment value to each particle in a simulation.**:

When this scalar is enabled, the instantaneous volume of a particle is equal to the original volume defined at the beginning of a simulation plus the value of that volume increment.



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalarsModel::enable_volume_increment"}]}`
-->

<a id="structIRockyParticleScalarsModel_1aa415607030884508e190c512b1218856"></a>
### Function enable\_variable\_thermal\_conductivity

![][public]


```cpp
void IRockyParticleScalarsModel::enable_variable_thermal_conductivity()
```




**Enables a known-scalar that defines the thermal conductivity as a variable property between particles.**:

When this scalar is enabled, a different value of thermal conductivity can be specified for each particle in a simulation, and this value will be used everywhere in the Rocky solver instead of the constant value specified for the particle's material in the Rocky UI.



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalarsModel::enable_variable_thermal_conductivity"}]}`
-->

<a id="structIRockyParticleScalarsModel_1acd067b0a46a10fd2c931702257974e2b"></a>
### Function enable\_variable\_poisson\_ratio

![][public]


```cpp
void IRockyParticleScalarsModel::enable_variable_poisson_ratio()
```




**Enables a known-scalar defining Poisson's ratio value to each particle in a simulation.**:

When this scalar is enabled, the instantaneous Poisson's ratio is defined as a variable property, with possibly a different value and used everywhere in the simulation, instead of the constant value of particle's material



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalarsModel::enable_variable_poisson_ratio"}]}`
-->

<a id="structIRockyParticleScalarsModel_1a7527c9be8d999b23208f43917f13a5a0"></a>
### Function enable\_variable\_specific\_heat

![][public]


```cpp
void IRockyParticleScalarsModel::enable_variable_specific_heat()
```




**Enables a known-scalar defining specific heat value to each particle in a simulation.**:

When this scalar is enabled, the instantaneous specific heat is defined as a variable property, with possibly a different value and used everywhere in the simulation, instead of the constant value of particle's material



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalarsModel::enable_variable_specific_heat"}]}`
-->

<a id="structIRockyParticleScalarsModel_1a2fe0d14a5fc4f803eb04374ec6d2a40f"></a>
### Function find

![][public]


```cpp
int IRockyParticleScalarsModel::find(const char *name)
```




**This method searches for a scalar variable already created by other modules,**:

in order to allow access to its values, or store new values on it, during the execution of the simulation.


**Parameters**:

* **name**: The name given to the scalar at the moment of its creation.


**Returns**:

The index that uniquely identifies the wanted scalar if it was actually found. It returns -1 otherwise.



**Parameters**:

* const char * **name**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalarsModel::find"}]}`
-->

<a id="structIRockyParticleScalarsModel_1a6c5d694427108fb05dbe32f418394f71"></a>
### Function add

![][public]


```cpp
int IRockyParticleScalarsModel::add(const char *name, const char *unit, bool output=true)
```




**This method creates a new scalar variable of type <code>double</code>**:

for storing custom values during a simulation, preserving them between time iterations.


**Parameters**:

* **name**: The name given to the scalar variable. The purpose of this name is twofold. First, it enables to find this scalar variable from other module, in order to share their values. Second, if the scalar variable can be displayed in a 3D window as a property, this name will identify it in the Rocky UI.
* **unit**: A string specifying the unit in S.I. associated to the scalar variable.
* **output**: Enables/disables the storage in disk at output times, for the visualization and post-processing of the scalar values.


**Returns**:

The index that will uniquely identify the scalar variable during the execution of the simulation.



**Parameters**:

* const char * **name**
* const char * **unit**
* bool **output** = true 

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalarsModel::add"}]}`
-->

<a id="structIRockyParticleScalarsModel_1a4884be92519fd1d4d274d7558864b85f"></a>
### Function reset

![][public]


```cpp
void IRockyParticleScalarsModel::reset(int scalar_index)
```




**This method resets to zero all values stored in a scalar variable.**:


**Parameters**:

* **scalar_index**: The index attributed to the scalar variable at the moment of its creation.



**Parameters**:

* int **scalar_index**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalarsModel::reset"}]}`
-->

<a id="structIRockyParticleScalarsModel_1a40b74ee0226b8f635092a200a7be71b1"></a>
### Function set\_dimension

![][public]


```cpp
void IRockyParticleScalarsModel::set_dimension(int scalar_index, double dimension_factor)
```




**The purpose of this method is to associate a dimensional factor**:

to a scalar variable. This factor will be used to nondimensionalize their values. For instance, if the scalar represents a force, a force dimensional factor must be associated through this method. Dimensional factors for the fundamental magnitudes are provided by functions of a <code>[IRockyModel](structIRockyModel.md#structIRockyModel)</code> object.


**Parameters**:

* **scalar_index**: The index attributed to the scalar variable at the moment of its creation.
* **dimension_factor**: The appropriate dimensional factor for the scalar variable.



**Parameters**:

* int **scalar_index**
* double **dimension_factor**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleScalarsModel::set_dimension"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)