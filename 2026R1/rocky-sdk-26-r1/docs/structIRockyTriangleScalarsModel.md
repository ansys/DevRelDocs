# Structure IRockyTriangleScalarsModel

<a id="structIRockyTriangleScalarsModel"></a>

![][C++]
![][public]

**#include <rocky\_triangle\_scalars.hpp>**



<code>[IRockyTriangleScalarsModel](structIRockyTriangleScalarsModel.md#structIRockyTriangleScalarsModel)</code> allows users to add new triangle scalars, find triangle scalars created in other modules or activate triangle scalars known to Rocky, during the setup phase of a module. Triangle scalars are special variables attached to boundary triangles, which are able to store values per triangle that are preserved between time iterations during a simulation.

**Inherits from**:

* ScalarsModel\< rocky20::TriangleScalarsController \>

## Members

* [add](structIRockyTriangleScalarsModel.md#structIRockyTriangleScalarsModel_1a41b8986cbde7d37e0946a3a8a8361d19)
* [add\_accumulation\_scalar](structIRockyTriangleScalarsModel.md#structIRockyTriangleScalarsModel_1ac3e84af17e0dfaea602eab3a7a888b83)
* [calculate\_sum\_over\_geometries](structIRockyTriangleScalarsModel.md#structIRockyTriangleScalarsModel_1acba5f06875d88bba1d66bd829c37fb52)
* [enable\_storage\_of\_exchanged\_heat](structIRockyTriangleScalarsModel.md#structIRockyTriangleScalarsModel_1a01f4979062e25a0fb10b874f9f1f81d9)
* [find](structIRockyTriangleScalarsModel.md#structIRockyTriangleScalarsModel_1afc273a1e67e4995f848452fda3f71c31)
* [pull\_scalar\_from\_devices](structIRockyTriangleScalarsModel.md#structIRockyTriangleScalarsModel_1a60ee5f18541c3104a7a286d244a5f896)
* [push\_scalar\_to\_devices](structIRockyTriangleScalarsModel.md#structIRockyTriangleScalarsModel_1a1111ee6479b40ce1e086aec31c405e3e)
* [reset](structIRockyTriangleScalarsModel.md#structIRockyTriangleScalarsModel_1ae4f5d565ed2b3fa05b52f9274d542d69)
* [reset\_exchanged\_heat](structIRockyTriangleScalarsModel.md#structIRockyTriangleScalarsModel_1abe794fd133422249549fad8c56fee6eb)
* [set\_dimension](structIRockyTriangleScalarsModel.md#structIRockyTriangleScalarsModel_1aa02d862be5d91a62af18a1b1320286e7)

## Public functions

<a id="structIRockyTriangleScalarsModel_1afc273a1e67e4995f848452fda3f71c31"></a>
### Function find

![][public]


```cpp
int IRockyTriangleScalarsModel::find(const char *name)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyTriangleScalarsModel::find"}]}`
-->

<a id="structIRockyTriangleScalarsModel_1a41b8986cbde7d37e0946a3a8a8361d19"></a>
### Function add

![][public]


```cpp
int IRockyTriangleScalarsModel::add(const char *name, const char *unit, bool output=true)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyTriangleScalarsModel::add"}]}`
-->

<a id="structIRockyTriangleScalarsModel_1ac3e84af17e0dfaea602eab3a7a888b83"></a>
### Function add\_accumulation\_scalar

![][public]


```cpp
int IRockyTriangleScalarsModel::add_accumulation_scalar(const char *name, const char *unit, bool output=true)
```




**This method creates a new scalar variable of type defined by template parameter**:

<code>data_type</code> for storing custom values during a simulation, preserving them between time iterations. The scalar added with this method has a special behavior defined for pulling data from devices in multi-gpu simulations: It will accumulate those values in the host memory.


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

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class data_type"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyTriangleScalarsModel::add_accumulation_scalar"}]}`
-->

<a id="structIRockyTriangleScalarsModel_1ae4f5d565ed2b3fa05b52f9274d542d69"></a>
### Function reset

![][public]


```cpp
void IRockyTriangleScalarsModel::reset(int scalar_index)
```




**This method resets to zero all values stored in a scalar variable.**:


**Parameters**:

* **scalar_index**: The index attributed to the scalar variable at the moment of its creation.



**Parameters**:

* int **scalar_index**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyTriangleScalarsModel::reset"}]}`
-->

<a id="structIRockyTriangleScalarsModel_1aa02d862be5d91a62af18a1b1320286e7"></a>
### Function set\_dimension

![][public]


```cpp
void IRockyTriangleScalarsModel::set_dimension(int scalar_index, double dimension_factor)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyTriangleScalarsModel::set_dimension"}]}`
-->

<a id="structIRockyTriangleScalarsModel_1a01f4979062e25a0fb10b874f9f1f81d9"></a>
### Function enable\_storage\_of\_exchanged\_heat

![][public]


```cpp
void IRockyTriangleScalarsModel::enable_storage_of_exchanged_heat()
```




**This method activates an internal triangle scalar that accumulates the heat **:

exchanged by geometry triangles with surrounding particles and/or SPH fluid elements during a simulation. The value of this scalar at each geometry triangle and at a given time will be equal to the sum of the heat received by the triangle from all particles and/or SPH elements that interacted with it since the last reset event, which is triggered by the <code>[IRockyTriangleScalarsModel::reset\_exchanged\_heat()](structIRockyTriangleScalarsModel.md#structIRockyTriangleScalarsModel_1abe794fd133422249549fad8c56fee6eb)</code> function.



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyTriangleScalarsModel::enable_storage_of_exchanged_heat"}]}`
-->

<a id="structIRockyTriangleScalarsModel_1abe794fd133422249549fad8c56fee6eb"></a>
### Function reset\_exchanged\_heat

![][public]


```cpp
void IRockyTriangleScalarsModel::reset_exchanged_heat()
```




**This method resets an internal triangle scalar that accumulates the heat **:

exchanged by geometry triangles with surrounding particles and/or SPH fluid elements. For example, this function may be called from within the <code>ROCKY_PLUGIN_BEGIN_ITERATION</code> hook. In that case, at the end of an iteration, a custom module can get the value of the total heat received by each triangle during the last timestep.



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyTriangleScalarsModel::reset_exchanged_heat"}]}`
-->

<a id="structIRockyTriangleScalarsModel_1acba5f06875d88bba1d66bd829c37fb52"></a>
### Function calculate\_sum\_over\_geometries

![][public]


```cpp
std::vector< double > IRockyTriangleScalarsModel::calculate_sum_over_geometries(int scalar_index)
```




**Returns**:

A vector of the size of geometries in a project, in which every value is the sum of the triangle scalar values associated to the triangles belonging to a geometry. Those values are ordered in the vector according to the indices assigned to the geometries in a project. The sums are performed only if the triangle scalars are of type <code>double</code> or <code>[IRockyStatisticsAccumulator](structIRockyStatisticsAccumulator.md#structIRockyStatisticsAccumulator)</code>.



**Parameters**:

* int **scalar_index**

**Return type**: std::vector< double >

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyTriangleScalarsModel::calculate_sum_over_geometries"}]}`
-->

<a id="structIRockyTriangleScalarsModel_1a60ee5f18541c3104a7a286d244a5f896"></a>
### Function pull\_scalar\_from\_devices

![][public]


```cpp
void IRockyTriangleScalarsModel::pull_scalar_from_devices(int scalar_index)
```




Copies the scalar values defined by scalar_index from the device memory to the host memory (DRAM). When running a simulation in multi-GPU, the values of different devices will be accumulated (summed) in the scalar host memory. This method can only be called for scalars added with add_accumulation_scalar in multi-gpu simulations.






**Parameters**:

* **scalar_index**: the index of the scalar we want to copy.



**Parameters**:

* int **scalar_index**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyTriangleScalarsModel::pull_scalar_from_devices"}]}`
-->

<a id="structIRockyTriangleScalarsModel_1a1111ee6479b40ce1e086aec31c405e3e"></a>
### Function push\_scalar\_to\_devices

![][public]


```cpp
void IRockyTriangleScalarsModel::push_scalar_to_devices(int scalar_index)
```




Send the current scalar values defined by scalar_index located in host memory (DRAM) to the devices memory.






**Parameters**:

* **scalar_index**: the index of the scalar we want to push to devices.



**Parameters**:

* int **scalar_index**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyTriangleScalarsModel::push_scalar_to_devices"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)