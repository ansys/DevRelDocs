# Structure IRockyFluidScalarsModel

<a id="structIRockyFluidScalarsModel"></a>

![][C++]
![][public]

**#include <rocky\_fluid\_scalars.hpp>**



An <code>[IRockyFluidScalarsModel](structIRockyFluidScalarsModel.md#structIRockyFluidScalarsModel)</code> allows users to add new fluid scalars, or find fluid scalars created in other modules, all during the setup phase of a module. Fluid scalars are special variables attached to CFD cell elements that store per-cell values preserved between simulation time iterations.

**Inherits from**:

* ScalarsModel\< rocky20::FluidScalarsController \>

## Members

* [add](structIRockyFluidScalarsModel.md#structIRockyFluidScalarsModel_1a9e0b69da64fd09543ff1b9a43c30e6b3)
* [enable\_storage\_cell\_volume](structIRockyFluidScalarsModel.md#structIRockyFluidScalarsModel_1a6f1e21645261447c930050eff3ecb35b)
* [find](structIRockyFluidScalarsModel.md#structIRockyFluidScalarsModel_1a9b9a2807854efdeaea33d558210c3901)
* [find\_species\_scalar](structIRockyFluidScalarsModel.md#structIRockyFluidScalarsModel_1a427a7869774490548c1bf586eb982efd)
* [get\_scalar\_name](structIRockyFluidScalarsModel.md#structIRockyFluidScalarsModel_1a42b5926c5293c2e9b6e1ae0bf6f3db2c)
* [get\_scalar\_unit](structIRockyFluidScalarsModel.md#structIRockyFluidScalarsModel_1a702ee4844ebadeb36f72564dd8b6a732)
* [MassDiffusivity](structIRockyFluidScalarsModel.md#structIRockyFluidScalarsModel_1a1465371482cae63842154f22ab4ebbb4afe8ce5347f023f3151d502f2941eebd3)
* [MassSource](structIRockyFluidScalarsModel.md#structIRockyFluidScalarsModel_1a1465371482cae63842154f22ab4ebbb4a5e73301a4198a91d715a1b5cc230a19a)
* [MolecularWeight](structIRockyFluidScalarsModel.md#structIRockyFluidScalarsModel_1a1465371482cae63842154f22ab4ebbb4a320e4c7d7e00d2d08a58569ef770bc64)
* [MoleFraction](structIRockyFluidScalarsModel.md#structIRockyFluidScalarsModel_1a1465371482cae63842154f22ab4ebbb4a44a1737f86fd00acf12d92df0013d543)
* [reset](structIRockyFluidScalarsModel.md#structIRockyFluidScalarsModel_1a91892f2da14aaaf2473361223db628c4)
* [set\_dimension](structIRockyFluidScalarsModel.md#structIRockyFluidScalarsModel_1aceb74d48527a53376833f9336f0073cd)
* [SpeciesVariableType](structIRockyFluidScalarsModel.md#structIRockyFluidScalarsModel_1a1465371482cae63842154f22ab4ebbb4)

## Public types

### Enumeration type SpeciesVariableType

<a id="structIRockyFluidScalarsModel_1a1465371482cae63842154f22ab4ebbb4"></a>

![][public]

**#include <rocky\_fluid\_scalars.hpp>**


```cpp
enum SpeciesVariableType {
  MoleFraction,
  MassDiffusivity,
  MolecularWeight,
  MassSource
}
```




**Enumerate with the types of species variables**:



#### Enumerator MoleFraction

<a id="structIRockyFluidScalarsModel_1a1465371482cae63842154f22ab4ebbb4a44a1737f86fd00acf12d92df0013d543"></a>





#### Enumerator MassDiffusivity

<a id="structIRockyFluidScalarsModel_1a1465371482cae63842154f22ab4ebbb4afe8ce5347f023f3151d502f2941eebd3"></a>





#### Enumerator MolecularWeight

<a id="structIRockyFluidScalarsModel_1a1465371482cae63842154f22ab4ebbb4a320e4c7d7e00d2d08a58569ef770bc64"></a>





#### Enumerator MassSource

<a id="structIRockyFluidScalarsModel_1a1465371482cae63842154f22ab4ebbb4a5e73301a4198a91d715a1b5cc230a19a"></a>





<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyFluidScalarsModel::SpeciesVariableType"}]}`
-->

## Public functions

### Function enable\_storage\_cell\_volume

<a id="structIRockyFluidScalarsModel_1a6f1e21645261447c930050eff3ecb35b"></a>

![][public]


```cpp
void IRockyFluidScalarsModel::enable_storage_cell_volume()
```




**This method enables the fluid cell volume scalar.**:



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyFluidScalarsModel::enable_storage_cell_volume"}]}`
-->

### Function find\_species\_scalar

<a id="structIRockyFluidScalarsModel_1a427a7869774490548c1bf586eb982efd"></a>

![][public]


```cpp
int IRockyFluidScalarsModel::find_species_scalar(const SpeciesVariableType type, const std::string species_name="", const std::string phase_name="")
```




**This method searches for a species scalar variable already created by the CFD module,**:

in order to allow access to its values, or store new values on it, during the execution of the simulation.


**Parameters**:

* **type**: The type of the species variable according to the enum SpeciesVariableType
* **species_name**: The species name
* **phase_name**: The phase name


**Returns**:

The index that uniquely identifies the wanted scalar if it was actually found. It returns -1 otherwise.



**Parameters**:

* const [SpeciesVariableType](structIRockyFluidScalarsModel.md#structIRockyFluidScalarsModel_1a1465371482cae63842154f22ab4ebbb4) **type**
* const std::string **species_name** = "" 
* const std::string **phase_name** = "" 

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyFluidScalarsModel::find_species_scalar"}]}`
-->

### Function get\_scalar\_name

<a id="structIRockyFluidScalarsModel_1a42b5926c5293c2e9b6e1ae0bf6f3db2c"></a>

![][public]


```cpp
std::string IRockyFluidScalarsModel::get_scalar_name(int index)
```




**This method returns the scalar name if it exists.**:


**Parameters**:

* **index**: The index of the scalar


**Returns**:

the scalar name if the index is valid. Throws an error otherwise.



**Parameters**:

* int **index**

**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyFluidScalarsModel::get_scalar_name"}]}`
-->

### Function get\_scalar\_unit

<a id="structIRockyFluidScalarsModel_1a702ee4844ebadeb36f72564dd8b6a732"></a>

![][public]


```cpp
std::string IRockyFluidScalarsModel::get_scalar_unit(int index)
```




**This method returns the scalar unit if it exists.**:


**Parameters**:

* **index**: The index of the scalar


**Returns**:

the scalar unit if the index is valid. Throws an error otherwise..



**Parameters**:

* int **index**

**Return type**: std::string

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyFluidScalarsModel::get_scalar_unit"}]}`
-->

### Function find

<a id="structIRockyFluidScalarsModel_1a9b9a2807854efdeaea33d558210c3901"></a>

![][public]


```cpp
int IRockyFluidScalarsModel::find(const char *name)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyFluidScalarsModel::find"}]}`
-->

### Function add

<a id="structIRockyFluidScalarsModel_1a9e0b69da64fd09543ff1b9a43c30e6b3"></a>

![][public]


```cpp
int IRockyFluidScalarsModel::add(const char *name, const char *unit, bool output=true)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyFluidScalarsModel::add"}]}`
-->

### Function reset

<a id="structIRockyFluidScalarsModel_1a91892f2da14aaaf2473361223db628c4"></a>

![][public]


```cpp
void IRockyFluidScalarsModel::reset(int scalar_index)
```




**This method resets to zero all values stored in a scalar variable.**:


**Parameters**:

* **scalar_index**: The index attributed to the scalar variable at the moment of its creation.



**Parameters**:

* int **scalar_index**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyFluidScalarsModel::reset"}]}`
-->

### Function set\_dimension

<a id="structIRockyFluidScalarsModel_1aceb74d48527a53376833f9336f0073cd"></a>

![][public]


```cpp
void IRockyFluidScalarsModel::set_dimension(int scalar_index, double dimension_factor)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyFluidScalarsModel::set_dimension"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)