# Structure IRockyParticleBreakageScalarsModel

<a id="structIRockyParticleBreakageScalarsModel"></a>

![][C++]
![][public]

**#include <rocky\_particle\_scalars.hpp>**



An <code>[IRockyParticleBreakageScalarsModel](structIRockyParticleBreakageScalarsModel.md#structIRockyParticleBreakageScalarsModel)</code> allows users to add new particle breakage scalars, find particle breakage scalars created in other modules or activate particle breakage scalars known to Rocky, during the setup stage of a module. Particle breakage scalars are special particle scalars which can be used to transfer data from the point where the instantaneous breakage criterion is evaluated (at the <code>ROCKY_PLUGIN_COMPUTE_INSTANTANEOUS_BREAKAGE</code> hook) to the point where the fragment size distribution is calculated (at the <code>ROCKY_PLUGIN_COMPUTE_FRAGMENTS_SIZE_DISTRIBUTION</code> hook). A typical use is to store the value of the `formula {"type":"element","name":"formula","attributes":{"id":"3"},"children":[{"type":"text","text":"$t_{10}$"}]}` parameter, which is calculated at the moment a particle breaks and is used for calculating the resulting fragment size distribution. However, users can employ these scalars to store whichever parameter that links the breakage criterion with the fragment size distribution in their models.

**Inherits from**:

* ScalarsModel\< rocky20::ParticleBreakageScalarsController \>

## Members

* [add](structIRockyParticleBreakageScalarsModel.md#structIRockyParticleBreakageScalarsModel_1a7dbaee843fb6e694d1b9a4940c9eeaa2)
* [enable\_t10](structIRockyParticleBreakageScalarsModel.md#structIRockyParticleBreakageScalarsModel_1a360827c2e0c1a676e3a8c6be6ed26362)
* [find](structIRockyParticleBreakageScalarsModel.md#structIRockyParticleBreakageScalarsModel_1a00666ca9d343b8d3284975687ce4d087)
* [reset](structIRockyParticleBreakageScalarsModel.md#structIRockyParticleBreakageScalarsModel_1aed6f4019176f0d14ff941493d3e4dcb0)
* [set\_dimension](structIRockyParticleBreakageScalarsModel.md#structIRockyParticleBreakageScalarsModel_1aa084abe67dcb26bd2e050a39061ce0e0)

## Public functions

<a id="structIRockyParticleBreakageScalarsModel_1a360827c2e0c1a676e3a8c6be6ed26362"></a>
### Function enable\_t10

![][public]


```cpp
void IRockyParticleBreakageScalarsModel::enable_t10()
```




**Enables a scalar known to Rocky that stores the t10 parameter value. A custom instantaneous**:

breakage model that is intended to work along with built-in fragment size distribution models in Rocky must enable and calculate this scalar variable.



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleBreakageScalarsModel::enable_t10"}]}`
-->

<a id="structIRockyParticleBreakageScalarsModel_1a00666ca9d343b8d3284975687ce4d087"></a>
### Function find

![][public]


```cpp
int IRockyParticleBreakageScalarsModel::find(const char *name)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleBreakageScalarsModel::find"}]}`
-->

<a id="structIRockyParticleBreakageScalarsModel_1a7dbaee843fb6e694d1b9a4940c9eeaa2"></a>
### Function add

![][public]


```cpp
int IRockyParticleBreakageScalarsModel::add(const char *name, const char *unit, bool output=true)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleBreakageScalarsModel::add"}]}`
-->

<a id="structIRockyParticleBreakageScalarsModel_1aed6f4019176f0d14ff941493d3e4dcb0"></a>
### Function reset

![][public]


```cpp
void IRockyParticleBreakageScalarsModel::reset(int scalar_index)
```




**This method resets to zero all values stored in a scalar variable.**:


**Parameters**:

* **scalar_index**: The index attributed to the scalar variable at the moment of its creation.



**Parameters**:

* int **scalar_index**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleBreakageScalarsModel::reset"}]}`
-->

<a id="structIRockyParticleBreakageScalarsModel_1aa084abe67dcb26bd2e050a39061ce0e0"></a>
### Function set\_dimension

![][public]


```cpp
void IRockyParticleBreakageScalarsModel::set_dimension(int scalar_index, double dimension_factor)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleBreakageScalarsModel::set_dimension"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)