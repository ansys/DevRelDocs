# Structure IRockyJointScalarsModel

<a id="structIRockyJointScalarsModel"></a>

![][C++]
![][public]

**#include <rocky\_joint\_scalars.hpp>**



<code>[IRockyJointScalarsModel](structIRockyJointScalarsModel.md#structIRockyJointScalarsModel)</code> allows users to add new joint scalars, find joint scalars created in other modules or activate joint scalars known to Rocky, during the setup phase of a module. Joint scalars are special variables attached to the joints of flexible multi-element particles, which are able to store values per joint that are preserved between time iterations during a simulation.

**Inherits from**:

* ScalarsModel\< rocky20::JointScalarsController \>

## Members

* [add](structIRockyJointScalarsModel.md#structIRockyJointScalarsModel_1a31fa0b2b6d8243aa4bc8513edf3c6b0c)
* [find](structIRockyJointScalarsModel.md#structIRockyJointScalarsModel_1ac684ddb11f55d3edbbb5606ea6ea633a)
* [reset](structIRockyJointScalarsModel.md#structIRockyJointScalarsModel_1ad8c7b148adb48869b7d0d7b4ccea6280)
* [set\_dimension](structIRockyJointScalarsModel.md#structIRockyJointScalarsModel_1af5bcf3383dfd931122762e839dd0750b)

## Public functions

<a id="structIRockyJointScalarsModel_1ac684ddb11f55d3edbbb5606ea6ea633a"></a>
### Function find

![][public]


```cpp
int IRockyJointScalarsModel::find(const char *name)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJointScalarsModel::find"}]}`
-->

<a id="structIRockyJointScalarsModel_1a31fa0b2b6d8243aa4bc8513edf3c6b0c"></a>
### Function add

![][public]


```cpp
int IRockyJointScalarsModel::add(const char *name, const char *unit, bool output=true)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJointScalarsModel::add"}]}`
-->

<a id="structIRockyJointScalarsModel_1ad8c7b148adb48869b7d0d7b4ccea6280"></a>
### Function reset

![][public]


```cpp
void IRockyJointScalarsModel::reset(int scalar_index)
```




**This method resets to zero all values stored in a scalar variable.**:


**Parameters**:

* **scalar_index**: The index attributed to the scalar variable at the moment of its creation.



**Parameters**:

* int **scalar_index**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJointScalarsModel::reset"}]}`
-->

<a id="structIRockyJointScalarsModel_1af5bcf3383dfd931122762e839dd0750b"></a>
### Function set\_dimension

![][public]


```cpp
void IRockyJointScalarsModel::set_dimension(int scalar_index, double dimension_factor)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyJointScalarsModel::set_dimension"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)