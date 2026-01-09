<a id="structIRockyGeometryScalarsModel"></a>
# Structure IRockyGeometryScalarsModel

![][C++]
![][public]

**#include <rocky\_boundary\_scalars.hpp>**



An <code>[IRockyGeometryScalarsModel](structIRockyGeometryScalarsModel.md#structIRockyGeometryScalarsModel)</code> object allows users to create and configure custom geometry scalars. Geometry scalars are special variables that can have a value associated to every geometry defined in the project.

**Inherits from**:

* ScalarsModel\< rocky20::BoundaryScalarsController \>

## Members

* [add](structIRockyGeometryScalarsModel.md#structIRockyGeometryScalarsModel_1ac5361e4dec1e3d63aa923b3576d8cb69)
* [find](structIRockyGeometryScalarsModel.md#structIRockyGeometryScalarsModel_1a8605e8eb24231ebdcbd9087602aa64fa)
* [get\_statistics\_accumulator\_array](structIRockyGeometryScalarsModel.md#structIRockyGeometryScalarsModel_1af5e62356931688660f277719ca88ff2c)
* [get\_statistics\_adder\_array](structIRockyGeometryScalarsModel.md#structIRockyGeometryScalarsModel_1a1cc2456dbf51f7f97c9cfd4c08fd890b)
* [reset](structIRockyGeometryScalarsModel.md#structIRockyGeometryScalarsModel_1a0c029b4e23f71891ed12a704f0f0cde4)
* [set\_dimension](structIRockyGeometryScalarsModel.md#structIRockyGeometryScalarsModel_1aa7148cfa90081ff19a8fda5e7e1cb379)

## Public functions

<a id="structIRockyGeometryScalarsModel_1a1cc2456dbf51f7f97c9cfd4c08fd890b"></a>
### Function get\_statistics\_adder\_array

![][public]


```cpp
IRockyStatisticsAdder * IRockyGeometryScalarsModel::get_statistics_adder_array(int scalar_index)
```




**Returns**:

The array of all <code>[IRockyStatisticsAdder](structIRockyStatisticsAdder.md#structIRockyStatisticsAdder)</code> objects currently stored in a given scalar. The size of this array will be equal to the number of geometries in the project, and the contained objects will be ordered according to the geometry indexes.


**Parameters**:

* **scalar_index**: The index that identifies the scalar, attributed when it was created.



**Parameters**:

* int **scalar_index**

**Return type**: [IRockyStatisticsAdder](structIRockyStatisticsAdder.md#structIRockyStatisticsAdder) *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryScalarsModel::get_statistics_adder_array"}]}`
-->

<a id="structIRockyGeometryScalarsModel_1af5e62356931688660f277719ca88ff2c"></a>
### Function get\_statistics\_accumulator\_array

![][public]


```cpp
IRockyStatisticsAccumulator * IRockyGeometryScalarsModel::get_statistics_accumulator_array(int scalar_index)
```




**Returns**:

The array of all <code>[IRockyStatisticsAccumulator](structIRockyStatisticsAccumulator.md#structIRockyStatisticsAccumulator)</code> objects currently stored in a given scalar. The size of this array will be equal to the number of geometries in the project, and the contained objects will be ordered according to the geometry indexes.


**Parameters**:

* **scalar_index**: The index that identifies the scalar, attributed when it was created.



**Parameters**:

* int **scalar_index**

**Return type**: [IRockyStatisticsAccumulator](structIRockyStatisticsAccumulator.md#structIRockyStatisticsAccumulator) *

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryScalarsModel::get_statistics_accumulator_array"}]}`
-->

<a id="structIRockyGeometryScalarsModel_1a8605e8eb24231ebdcbd9087602aa64fa"></a>
### Function find

![][public]


```cpp
int IRockyGeometryScalarsModel::find(const char *name)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryScalarsModel::find"}]}`
-->

<a id="structIRockyGeometryScalarsModel_1ac5361e4dec1e3d63aa923b3576d8cb69"></a>
### Function add

![][public]


```cpp
int IRockyGeometryScalarsModel::add(const char *name, const char *unit, bool output=true)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryScalarsModel::add"}]}`
-->

<a id="structIRockyGeometryScalarsModel_1a0c029b4e23f71891ed12a704f0f0cde4"></a>
### Function reset

![][public]


```cpp
void IRockyGeometryScalarsModel::reset(int scalar_index)
```




**This method resets to zero all values stored in a scalar variable.**:


**Parameters**:

* **scalar_index**: The index attributed to the scalar variable at the moment of its creation.



**Parameters**:

* int **scalar_index**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryScalarsModel::reset"}]}`
-->

<a id="structIRockyGeometryScalarsModel_1aa7148cfa90081ff19a8fda5e7e1cb379"></a>
### Function set\_dimension

![][public]


```cpp
void IRockyGeometryScalarsModel::set_dimension(int scalar_index, double dimension_factor)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyGeometryScalarsModel::set_dimension"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)