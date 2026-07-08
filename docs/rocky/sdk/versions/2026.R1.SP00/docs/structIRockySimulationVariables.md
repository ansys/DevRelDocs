# Structure IRockySimulationVariables

<a id="structIRockySimulationVariables"></a>

![][C++]
![][public]

**#include <rocky\_simulation\_variables\_api.h>**



<code>[IRockySimulationVariables](structIRockySimulationVariables.md#structIRockySimulationVariables)</code> is an interface that allows users to find and access existing simulation variables during the simulation. Similar to scalars, users can use the <code>[IRockySimulationVariables](structIRockySimulationVariables.md#structIRockySimulationVariables)</code> find methods to get the variable index passing the variable name, and call <code>get_variable</code> using this index to retrieve its value at any moment in the simulation.





Its role is to allow access to an internally represented simulation variable, making it possible to retrieve its value at any given time in the simulation within hooks executed on the host side. The values returned for the variables depend on the update frequency of it, if a variable is configured to update only at output, its value will only change when a simulation output happens. The other option for update frequency is at the solver curves frequency, which can be configured in the project setup.





Variables associated with surfaces may return different values at each iteration. This is because their update frequency happens in solver iterations frequency due to the particles surface crossing verification. And also, these variables have an accumulation behavior until reaching its output time. So variables of type average, for example, will return the current average value until it got written to disk. The same is true for variables of type rate. They will return the accumulated value up to the current time.

## Members

* [find\_particles\_variable](structIRockySimulationVariables.md#structIRockySimulationVariables_1a72c8b7810fadee28bc24ceb891dad77c)
* [find\_sph\_variable](structIRockySimulationVariables.md#structIRockySimulationVariables_1aa2cc11d88530b413d94a92480553db87)
* [get\_variable](structIRockySimulationVariables.md#structIRockySimulationVariables_1a90ff535fc5c8542919ac42b6dc889f50)

## Public functions

### Function find\_particles\_variable

<a id="structIRockySimulationVariables_1a72c8b7810fadee28bc24ceb891dad77c"></a>

![][public]
![][const]


```cpp
int IRockySimulationVariables::find_particles_variable(const char *name) const
```




**This method searches for a particle simulation variable already created, in order to**:

allow access to its values during the execution of the simulation.


**Parameters**:

* **name**: The name given to the simulation variable at the moment of its creation.


**Returns**:

The index that uniquely identifies the wanted variable if it was actually found. It returns -1 otherwise.



**Parameters**:

* const char * **name**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySimulationVariables::find_particles_variable"}]}`
-->

### Function find\_sph\_variable

<a id="structIRockySimulationVariables_1aa2cc11d88530b413d94a92480553db87"></a>

![][public]
![][const]


```cpp
int IRockySimulationVariables::find_sph_variable(const char *name) const
```




**This method searches for an SPH simulation variable already created, in order to**:

allow access to its values during the execution of the simulation.


**Parameters**:

* **name**: The name given to the simulation variable at the moment of its creation.


**Returns**:

The index that uniquely identifies the wanted variable if it was actually found. It returns -1 otherwise.



**Parameters**:

* const char * **name**

**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySimulationVariables::find_sph_variable"}]}`
-->

### Function get\_variable

<a id="structIRockySimulationVariables_1a90ff535fc5c8542919ac42b6dc889f50"></a>

![][public]
![][const]


```cpp
double IRockySimulationVariables::get_variable(int variable_index) const
```




**If a simulation variable was defined during the setup of the module, the value currently**:

stored can be accessed with this method.


**Parameters**:

* **variable_index**: The integer index that was associated to the simulation variable during the setup of the module.


**Returns**:

The value currently stored in the scalar variable.



**Parameters**:

* int **variable_index**

**Return type**: double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockySimulationVariables::get_variable"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)