# Structure IRockyParticleTransferScalarsModel

<a id="structIRockyParticleTransferScalarsModel"></a>

![][C++]
![][public]

**#include <rocky\_particle\_scalars.hpp>**



An <code>[IRockyParticleTransferScalarsModel](structIRockyParticleTransferScalarsModel.md#structIRockyParticleTransferScalarsModel)</code> allows users to add new particle transfer scalars, find particle transfer scalars created in other modules or activate particle transfer scalars known to Rocky, during the setup stage of a module. Particle transfer scalars are special particle scalars whose values are reset automatically to zero at the beginning of a new time iteration.

**Inherits from**:

* ScalarsModel\< rocky20::ParticleTransferScalarsController \>

## Members

* [add](structIRockyParticleTransferScalarsModel.md#structIRockyParticleTransferScalarsModel_1acbfca5e53543c5617fe3197d57bcb011)
* [find](structIRockyParticleTransferScalarsModel.md#structIRockyParticleTransferScalarsModel_1a6d1850250b4509904702af664aed3e26)
* [reset](structIRockyParticleTransferScalarsModel.md#structIRockyParticleTransferScalarsModel_1a631c82eba37e60df503645f60d8ddd24)
* [set\_dimension](structIRockyParticleTransferScalarsModel.md#structIRockyParticleTransferScalarsModel_1a6d5cd79b547774f98c5c692afe75a87f)

## Public functions

### Function find

<a id="structIRockyParticleTransferScalarsModel_1a6d1850250b4509904702af664aed3e26"></a>

![][public]


```cpp
int IRockyParticleTransferScalarsModel::find(const char *name)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleTransferScalarsModel::find"}]}`
-->

### Function add

<a id="structIRockyParticleTransferScalarsModel_1acbfca5e53543c5617fe3197d57bcb011"></a>

![][public]


```cpp
int IRockyParticleTransferScalarsModel::add(const char *name, const char *unit, bool output=true)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleTransferScalarsModel::add"}]}`
-->

### Function reset

<a id="structIRockyParticleTransferScalarsModel_1a631c82eba37e60df503645f60d8ddd24"></a>

![][public]


```cpp
void IRockyParticleTransferScalarsModel::reset(int scalar_index)
```




**This method resets to zero all values stored in a scalar variable.**:


**Parameters**:

* **scalar_index**: The index attributed to the scalar variable at the moment of its creation.



**Parameters**:

* int **scalar_index**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleTransferScalarsModel::reset"}]}`
-->

### Function set\_dimension

<a id="structIRockyParticleTransferScalarsModel_1a6d5cd79b547774f98c5c692afe75a87f"></a>

![][public]


```cpp
void IRockyParticleTransferScalarsModel::set_dimension(int scalar_index, double dimension_factor)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyParticleTransferScalarsModel::set_dimension"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)