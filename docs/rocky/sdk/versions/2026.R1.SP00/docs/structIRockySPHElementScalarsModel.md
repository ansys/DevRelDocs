# Structure IRockySPHElementScalarsModel

<a id="structIRockySPHElementScalarsModel"></a>

![][C++]
![][public]

**#include <rocky\_sph\_element\_scalars.hpp>**



An <code>[IRockySPHElementScalarsModel](structIRockySPHElementScalarsModel.md#structIRockySPHElementScalarsModel)</code> object allows users to add new SPH element scalars, find SPH element scalars created in other modules or activate SPH element scalars defined into the Rocky solver, during the setup stage of a module. SPH element scalars are special variables attached to SPH elements, which are able to store values per SPH element that are preserved between time iterations during a simulation.

**Inherits from**:

* ScalarsModel\< rocky20::SPHParticleScalarsController \>

## Members

* [add](structIRockySPHElementScalarsModel.md#structIRockySPHElementScalarsModel_1ab522d175868cf8f58efc33f6df21eb07)
* [enable\_variable\_molecular\_viscosity](structIRockySPHElementScalarsModel.md#structIRockySPHElementScalarsModel_1a3fbb7ee252cf15717b7fbe4dfb148fa2)
* [enable\_velocity\_gradient](structIRockySPHElementScalarsModel.md#structIRockySPHElementScalarsModel_1ac46511b18b436d5cec83047f8e1e331f)
* [find](structIRockySPHElementScalarsModel.md#structIRockySPHElementScalarsModel_1a08368398c992a677000337a1c6b87836)
* [reset](structIRockySPHElementScalarsModel.md#structIRockySPHElementScalarsModel_1a9ee97eb19ead27e53c0e240f871d09b5)
* [set\_dimension](structIRockySPHElementScalarsModel.md#structIRockySPHElementScalarsModel_1a0dd4ff3f064eea4b4d112155d20aadf1)
* [set\_operation](structIRockySPHElementScalarsModel.md#structIRockySPHElementScalarsModel_1a16f0c80fcfcc46485a0cdb5523eba2bf)

## Public functions

### Function set\_operation

<a id="structIRockySPHElementScalarsModel_1a16f0c80fcfcc46485a0cdb5523eba2bf"></a>

![][public]


```cpp
void IRockySPHElementScalarsModel::set_operation(int scalar_index, ESPHOperationType operation, ESPHOperationPlace place)
```




**SPH element scalars have a unique feature between all scalars in Rocky, which is the**:

ability of configuring automatic operations that the Rocky solver can perform over them at specific points of the iterative cycle. This method is designed for a custom module to perform such configuration. An example of the usage of such feature would be in a SPH scalar created for accumulating the heat flow rate that goes to every SPH element from its neighbors at a given time. That scalar needs to be reset before doing that accumulation, for instance, within a <code>ROCKY_PLUGIN_PRE_MOVE_ON_SPH_PARTICLE_INTERACTIONS</code>. Moreover, after performing the accumulation of individual heat flow rates, for multi-GPU simulations it will be needed to sum the values stored in halo regions before using them for solving the thermal balance equation for the SPH elements, and then update back those values across devices. The operations currently available and the points at which they can be performed are listed below.


**Parameters**:

* **scalar_index**: The index of the SPH element scalar over which the operation will be made.
* **operation**: The operation that will be performed. There are defined currently the following operations:<br/>
 <code>sphotReset</code>: reset to zero all stored values. This operation takes place at the beginning of the SPH hooks iteration.<br/>
 <code>sphotSum</code>: sum values stored in halo regions, in a multi-GPU scenario. This operation takes place after SPH Interactions hooks.<br/>
 <code>sphotUpdate</code>: update the summed values back to the halo regions, in a multi-GPU scenario. This operation takes place after SPH Particles hooks.<br/>
* **place**: The point within the iterative loop where the operation will be performed. Each possible place is associated to one of the SPH hooks described in previously in section \techref{s:sph_hooks}. The corresponding enumerate keys that can be used to define those places are the following:<br/>
 <code>sphopPreForce</code><br/>
 <code>sphopPreForce1</code><br/>
 <code>sphopPreForce2</code><br/>
 <code>sphopPreForce3</code><br/>
 <code>sphopPreForce4</code><br/>
 <code>sphopForce</code><br/>
 <code>sphopPostForce</code><br/>
 <code>sphopPostForce1</code><br/>
 <code>sphopPostForce2</code><br/>
 <code>sphopPostForce3</code><br/>
 <code>sphopPostForce4</code><br/>
 <code>sphopPreMove</code><br/>
 <code>sphopPreMove1</code><br/>
 <code>sphopPreMove2</code><br/>
 <code>sphopPreMove3</code><br/>
 <code>sphopPreMove4</code><br/>
 <code>sphopPostMove</code><br/>
 <code>sphopPostMove1</code><br/>
 <code>sphopPostMove2</code><br/>
 <code>sphopPostMove3</code><br/>
 <code>sphopPostMove4</code><br/>
 <code>sphopHeatTransfer</code><br/>



**Parameters**:

* int **scalar_index**
* ESPHOperationType **operation**
* ESPHOperationPlace **place**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementScalarsModel::set_operation"}]}`
-->

### Function enable\_velocity\_gradient

<a id="structIRockySPHElementScalarsModel_1ac46511b18b436d5cec83047f8e1e331f"></a>

![][public]
![][const]


```cpp
void IRockySPHElementScalarsModel::enable_velocity_gradient() const
```




**Enables the automatic calculation of the components of the velocity gradient, which are**:

needed for the calculation of the strain-rate tensor.



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementScalarsModel::enable_velocity_gradient"}]}`
-->

### Function enable\_variable\_molecular\_viscosity

<a id="structIRockySPHElementScalarsModel_1a3fbb7ee252cf15717b7fbe4dfb148fa2"></a>

![][public]
![][const]


```cpp
void IRockySPHElementScalarsModel::enable_variable_molecular_viscosity() const
```




**Enables a known-scalar that defines the molecular viscosity as a variable property of**:

SPH Elements. When this scalar is enabled, a different value of molecular viscosity can be specified for each element in a simulation, and this value will be used everywhere in the Rocky solver instead of the constant value specified for the fluid's material in the Rocky UI.



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementScalarsModel::enable_variable_molecular_viscosity"}]}`
-->

### Function find

<a id="structIRockySPHElementScalarsModel_1a08368398c992a677000337a1c6b87836"></a>

![][public]


```cpp
int IRockySPHElementScalarsModel::find(const char *name)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementScalarsModel::find"}]}`
-->

### Function reset

<a id="structIRockySPHElementScalarsModel_1a9ee97eb19ead27e53c0e240f871d09b5"></a>

![][public]


```cpp
void IRockySPHElementScalarsModel::reset(int scalar_index)
```




**This method resets to zero all values stored in a scalar variable.**:


**Parameters**:

* **scalar_index**: The index attributed to the scalar variable at the moment of its creation.



**Parameters**:

* int **scalar_index**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementScalarsModel::reset"}]}`
-->

### Function set\_dimension

<a id="structIRockySPHElementScalarsModel_1a0dd4ff3f064eea4b4d112155d20aadf1"></a>

![][public]


```cpp
void IRockySPHElementScalarsModel::set_dimension(int scalar_index, double dimension_factor)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementScalarsModel::set_dimension"}]}`
-->

### Function add

<a id="structIRockySPHElementScalarsModel_1ab522d175868cf8f58efc33f6df21eb07"></a>

![][public]


```cpp
int IRockySPHElementScalarsModel::add(const char *name, const char *unit, bool output=true)
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

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class _data_type"}]},{"type":"text","text":"\n            "},{"type":"element","name":"defval","attributes":{},"children":[{"type":"text","text":"float"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySPHElementScalarsModel::add"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)