# Structure IRockyPairScalarsModel

<a id="structIRockyPairScalarsModel"></a>

![][C++]
![][public]

**#include <rocky\_pair\_scalars.hpp>**



An <code>[IRockyPairScalarsModel](structIRockyPairScalarsModel.md#structIRockyPairScalarsModel)</code> object allows users to create and configure custom pair scalars. Pair scalars are special variables with a value attached to every combination of two particle groups and each combination of a particle group and a geometry. Their typical use is the accumulation of collision data for inter-group collision statistics, but they can be used in any other application in which it is necessary to associate values to such combination pairs.

**Inherits from**:

* ScalarsModel\< rocky20::PairScalarsController \>

## Members

* [add](structIRockyPairScalarsModel.md#structIRockyPairScalarsModel_1ac7c9db171244f51dd12e41bcd16629a8)
* [find](structIRockyPairScalarsModel.md#structIRockyPairScalarsModel_1a9db6d59f40d249a8bee649b0830a3cd2)
* [get\_statistics\_accumulator\_array](structIRockyPairScalarsModel.md#structIRockyPairScalarsModel_1ab74d805c25cdf60a17a2df3addd8e1df)
* [get\_statistics\_adder\_array](structIRockyPairScalarsModel.md#structIRockyPairScalarsModel_1a6c98a12b64d8698092cf6977a1c2b1ca)
* [reset](structIRockyPairScalarsModel.md#structIRockyPairScalarsModel_1aae898890d803e0df2c0bf0ac23553f6a)
* [set\_dimension](structIRockyPairScalarsModel.md#structIRockyPairScalarsModel_1a4134ab37bc984b4443ecf94dff64e720)

## Public functions

<a id="structIRockyPairScalarsModel_1a6c98a12b64d8698092cf6977a1c2b1ca"></a>
### Function get\_statistics\_adder\_array

![][public]


```cpp
IRockyStatisticsAdder * IRockyPairScalarsModel::get_statistics_adder_array(int scalar_index)
```




**Returns**:

The array of all <code>[IRockyStatisticsAdder](structIRockyStatisticsAdder.md#structIRockyStatisticsAdder)</code> objects currently stored in a given scalar. The size of this array will be the number of combinations between particle groups plus the number of combinations between particle groups and geometries in a project.


**Parameters**:

* **scalar_index**: The index that identifies the scalar, attributed when it was created.



**Parameters**:

* int **scalar_index**

**Return type**: [IRockyStatisticsAdder](structIRockyStatisticsAdder.md#structIRockyStatisticsAdder) *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPairScalarsModel::get_statistics_adder_array"}]}`
-->

<a id="structIRockyPairScalarsModel_1ab74d805c25cdf60a17a2df3addd8e1df"></a>
### Function get\_statistics\_accumulator\_array

![][public]


```cpp
IRockyStatisticsAccumulator * IRockyPairScalarsModel::get_statistics_accumulator_array(int scalar_index)
```




**Returns**:

The array of all <code>[IRockyStatisticsAccumulator](structIRockyStatisticsAccumulator.md#structIRockyStatisticsAccumulator)</code> objects currently stored in a given scalar. The size of this array will be the number of combinations between particle groups plus the number of combinations between particle groups and geometries in a project.


**Parameters**:

* **scalar_index**: The index that identifies the scalar, attributed when it was created.



**Parameters**:

* int **scalar_index**

**Return type**: [IRockyStatisticsAccumulator](structIRockyStatisticsAccumulator.md#structIRockyStatisticsAccumulator) *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPairScalarsModel::get_statistics_accumulator_array"}]}`
-->

<a id="structIRockyPairScalarsModel_1a9db6d59f40d249a8bee649b0830a3cd2"></a>
### Function find

![][public]


```cpp
int IRockyPairScalarsModel::find(const char *name)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPairScalarsModel::find"}]}`
-->

<a id="structIRockyPairScalarsModel_1ac7c9db171244f51dd12e41bcd16629a8"></a>
### Function add

![][public]


```cpp
int IRockyPairScalarsModel::add(const char *name, const char *unit, bool output=true)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPairScalarsModel::add"}]}`
-->

<a id="structIRockyPairScalarsModel_1aae898890d803e0df2c0bf0ac23553f6a"></a>
### Function reset

![][public]


```cpp
void IRockyPairScalarsModel::reset(int scalar_index)
```




**This method resets to zero all values stored in a scalar variable.**:


**Parameters**:

* **scalar_index**: The index attributed to the scalar variable at the moment of its creation.



**Parameters**:

* int **scalar_index**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPairScalarsModel::reset"}]}`
-->

<a id="structIRockyPairScalarsModel_1a4134ab37bc984b4443ecf94dff64e720"></a>
### Function set\_dimension

![][public]


```cpp
void IRockyPairScalarsModel::set_dimension(int scalar_index, double dimension_factor)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyPairScalarsModel::set_dimension"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)