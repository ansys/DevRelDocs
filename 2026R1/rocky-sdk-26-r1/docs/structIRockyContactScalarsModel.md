# Structure IRockyContactScalarsModel

<a id="structIRockyContactScalarsModel"></a>

![][C++]
![][public]

**#include <rocky\_contact\_scalars.hpp>**



During the setup phase of a module, an <code>[IRockyContactScalarsModel](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel)</code> object allows users to add new contact scalars, find contact scalars created in other modules, or activate contact scalars known to Rocky. Contact scalars are special variables attached to contacts that store per-contact values preserved between time iterations during a simulation.

**Inherits from**:

* ScalarsModel\< rocky20::BaseContactScalarsController \>

## Members

* [add](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1a00693cfaa879794cda713e943549644f)
* [add](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1a295989b18e690130d92c31881a61ba76)
* [enable\_previous\_moment\_vector](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1ab2927b1c13fc4325a5bd28ba97e15230)
* [enable\_storage\_is\_sliding\_marker](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1a2a383fbe3de38c7aab855c0b775a293b)
* [enable\_storage\_normal\_adhesion\_force](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1a0b773628077520e21f189ab64b8b1e69)
* [enable\_storage\_normal\_relative\_velocity](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1a30a72264168db13de798df7cdff440c5)
* [enable\_storage\_previous\_normal\_vector](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1a36a468305e9a49ba36de61846260c1f1)
* [enable\_storage\_sliding\_distance](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1a8e8fb75a47341a734ee04707a58f658f)
* [enable\_storage\_tangential\_adhesion\_force](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1ab390c75dee689878d04d1db89be3fb95)
* [enable\_storage\_tangential\_contact\_force](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1a5a65f842ce3bea36ee46b346a2741911)
* [enable\_storage\_tangential\_relative\_velocity](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1ad8ba6db25bce594fbb62b415b0634a95)
* [enable\_variable\_dynamic\_friction\_coefficient](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1afd6b2a12584b9aca0884eef45b372e1c)
* [enable\_variable\_restitution\_coefficient](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1a7c098d6a1bb42017f323521a267459bd)
* [enable\_variable\_static\_friction\_coefficient](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1a3a8d067f500bb3b7d39f1cb96f993f78)
* [find](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1ad35ceabceb6ec8d839a3e89086643f99)
* [mark\_scalar\_as\_history\_dependent](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1a29e181ff7eef3349c42038e6b7f9541a)
* [reset](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1a5066c63ea6e2b3b4791f4812b206a65f)
* [set\_dimension](structIRockyContactScalarsModel.md#structIRockyContactScalarsModel_1a95938d3b140e2fbf6b3f417ad88cefd8)

## Public functions

<a id="structIRockyContactScalarsModel_1ad35ceabceb6ec8d839a3e89086643f99"></a>
### Function find

![][public]


```cpp
int IRockyContactScalarsModel::find(const char *name)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactScalarsModel::find"}]}`
-->

<a id="structIRockyContactScalarsModel_1a5066c63ea6e2b3b4791f4812b206a65f"></a>
### Function reset

![][public]


```cpp
void IRockyContactScalarsModel::reset(int scalar_index)
```




**This method resets to zero all values stored in a scalar variable.**:


**Parameters**:

* **scalar_index**: The index attributed to the scalar variable at the moment of its creation.



**Parameters**:

* int **scalar_index**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactScalarsModel::reset"}]}`
-->

<a id="structIRockyContactScalarsModel_1a95938d3b140e2fbf6b3f417ad88cefd8"></a>
### Function set\_dimension

![][public]


```cpp
void IRockyContactScalarsModel::set_dimension(int scalar_index, double dimension_factor)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactScalarsModel::set_dimension"}]}`
-->

<a id="structIRockyContactScalarsModel_1a00693cfaa879794cda713e943549644f"></a>
### Function add

![][public]


```cpp
int IRockyContactScalarsModel::add(const char *name, const char *unit, bool output=true)
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

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactScalarsModel::add"}]}`
-->

<a id="structIRockyContactScalarsModel_1a295989b18e690130d92c31881a61ba76"></a>
### Function add

![][public]


```cpp
int IRockyContactScalarsModel::add(const char *name, const char *unit, bool output)
```




**This method creates a new scalar variable of type <code>data_type</code>**:

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
* bool **output**

**Return type**: int

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class data_type"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactScalarsModel::add"}]}`
-->

<a id="structIRockyContactScalarsModel_1afd6b2a12584b9aca0884eef45b372e1c"></a>
### Function enable\_variable\_dynamic\_friction\_coefficient

![][public]


```cpp
void IRockyContactScalarsModel::enable_variable_dynamic_friction_coefficient()
```




**This method enables the dynamic coefficient of friction as a variable property for contacts**:

that will override the constant values specified per material interaction in the Rocky UI. When a custom module enables this variable property, it becomes responsible for setting a custom value for every contact in the simulation by using the <code>[IRockyContact::set\_dynamic\_friction\_coefficient](structIRockyContact.md#structIRockyContact_1aaa4594d0c921983edc1d1033661c6500)</code> method.



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactScalarsModel::enable_variable_dynamic_friction_coefficient"}]}`
-->

<a id="structIRockyContactScalarsModel_1a3a8d067f500bb3b7d39f1cb96f993f78"></a>
### Function enable\_variable\_static\_friction\_coefficient

![][public]


```cpp
void IRockyContactScalarsModel::enable_variable_static_friction_coefficient()
```




**This method enables the static coefficient of friction as a variable property for contacts**:

that will override the constant values specified per material interaction in the Rocky UI. When a custom module enables this variable property, it becomes responsible for setting a custom value for every contact in the simulation by using the <code>[IRockyContact::set\_static\_friction\_coefficient](structIRockyContact.md#structIRockyContact_1a5a3233239461058a2f33a9f49494666c)</code> method.



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactScalarsModel::enable_variable_static_friction_coefficient"}]}`
-->

<a id="structIRockyContactScalarsModel_1a7c098d6a1bb42017f323521a267459bd"></a>
### Function enable\_variable\_restitution\_coefficient

![][public]


```cpp
void IRockyContactScalarsModel::enable_variable_restitution_coefficient()
```




**This method enables a known-scalar that defines the restitution coefficient as a variable **:

property at contacts. When this scalar is enabled, a different value of the restitution coefficient can be specified for each contact that arises in a simulation, using the <code>[IRockyContact::set\_restitution\_coefficient](structIRockyContact.md#structIRockyContact_1ad5f45118ba3d4bdedd2194640fc4c79d)</code> method. In this case, that value will override the constant values specified for this property through the Rocky UI.



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactScalarsModel::enable_variable_restitution_coefficient"}]}`
-->

<a id="structIRockyContactScalarsModel_1a8e8fb75a47341a734ee04707a58f658f"></a>
### Function enable\_storage\_sliding\_distance

![][public]


```cpp
void IRockyContactScalarsModel::enable_storage_sliding_distance()
```




**This method enables a known-scalar that stores the value calculated for the sliding **:

distance during the processing of the contact forces. In this way, that value will be accessible to custom models that may need it for their own calculations. The sliding distance is the distance that a contact point moves parallel to the tangential contact plane during a timestep. When its storage has been enabled, the value of the sliding distance can be accessed by using the <code>[IRockyContact::get\_sliding\_distance](structIRockyContact.md#structIRockyContact_1afe041153be8e43d3e5d7c7a500a49501)</code> method.



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactScalarsModel::enable_storage_sliding_distance"}]}`
-->

<a id="structIRockyContactScalarsModel_1a2a383fbe3de38c7aab855c0b775a293b"></a>
### Function enable\_storage\_is\_sliding\_marker

![][public]


```cpp
void IRockyContactScalarsModel::enable_storage_is_sliding_marker()
```




**This method enables a known-scalar that will store a marker that indicates whether a contact**:

is sliding or not at a given moment. Normally this marker is used only internally in Rocky, but this method can make it available to custom models that may need that information. When that storage has been enabled, the value of the marker for sliding can be accessed by using the <code>[IRockyContact::get\_is\_sliding\_marker](structIRockyContact.md#structIRockyContact_1a1acfe6d4f8e36c9fd417a658aac1c041)</code> method.



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactScalarsModel::enable_storage_is_sliding_marker"}]}`
-->

<a id="structIRockyContactScalarsModel_1a5a65f842ce3bea36ee46b346a2741911"></a>
### Function enable\_storage\_tangential\_contact\_force

![][public]


```cpp
void IRockyContactScalarsModel::enable_storage_tangential_contact_force()
```




**This method enables a known-scalar that makes available to custom modules the tangential**:

force vector that is calculated by any contact tangential force model active in a simulation. The value of this force is not always automatically accessible by custom models. For instance, if users want to use the tangential force value when the Coulomb Limit or any other custom contact tangential force model is active, they will need to enable its storage using this method. When that storage has been enabled, the value of the tangential force vector can be accessed by using the <code>[IRockyContact::get\_tangential\_contact\_force](structIRockyContact.md#structIRockyContact_1aca5aae0a4d0c2033bbad4da067657704)</code> method.



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactScalarsModel::enable_storage_tangential_contact_force"}]}`
-->

<a id="structIRockyContactScalarsModel_1a30a72264168db13de798df7cdff440c5"></a>
### Function enable\_storage\_normal\_relative\_velocity

![][public]


```cpp
void IRockyContactScalarsModel::enable_storage_normal_relative_velocity()
```




**This method enables a known-scalar that stores the value of the normal component of the **:

relative velocity at a contact. In this way that value, which is normally calculated internally by the Rocky solver and used on its own calculations, will be made available for custom modules as well. This can be preferable to the use of the <code>[IRockyContact::calculate\_relative\_velocity](structIRockyContact.md#structIRockyContact_1af05c086a0b75c761b13fa744061789e4)</code> method, since that calculation may be expensive. When its storage has been enabled, the value of the normal relative velocity component can be accessed by using the <code>[IRockyContact::get\_normal\_relative\_velocity](structIRockyContact.md#structIRockyContact_1a379476b7b01576be8fc0eb3f0dde7a1e)</code> method.



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactScalarsModel::enable_storage_normal_relative_velocity"}]}`
-->

<a id="structIRockyContactScalarsModel_1ad8ba6db25bce594fbb62b415b0634a95"></a>
### Function enable\_storage\_tangential\_relative\_velocity

![][public]


```cpp
void IRockyContactScalarsModel::enable_storage_tangential_relative_velocity()
```




**This method enables a known-scalar that stores the value of the normal component of the**:

relative velocity at a contact. In this way that value, which is normally calculated internally by the Rocky solver and used on its own calculations, will be made available for custom modules as well. This can be preferable to the use of the <code>[IRockyContact::calculate\_relative\_velocity](structIRockyContact.md#structIRockyContact_1af05c086a0b75c761b13fa744061789e4)</code> method, since that calculation may be expensive. When its storage has been enabled, the value of the tangential relative velocity vector can be accessed by using the <code>[IRockyContact::get\_tangential\_relative\_velocity](structIRockyContact.md#structIRockyContact_1a9fab3f0e6f78ea64e96209fbbd540b85)</code> method.



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactScalarsModel::enable_storage_tangential_relative_velocity"}]}`
-->

<a id="structIRockyContactScalarsModel_1a0b773628077520e21f189ab64b8b1e69"></a>
### Function enable\_storage\_normal\_adhesion\_force

![][public]


```cpp
void IRockyContactScalarsModel::enable_storage_normal_adhesion_force()
```




**This method enables a known-scalar that stores the value of the normal component of the**:

adhesion force. In this way, if an adhesive force model is active in a simulation, a custom module will have access to the value of that force. When that storage has been enabled, the value of the normal adhesion force can be accessed by using the <code>[IRockyContact::get\_normal\_adhesion\_force](structIRockyContact.md#structIRockyContact_1a21587a9de6f69f4af1d215c3879fca66)</code> method.



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactScalarsModel::enable_storage_normal_adhesion_force"}]}`
-->

<a id="structIRockyContactScalarsModel_1ab390c75dee689878d04d1db89be3fb95"></a>
### Function enable\_storage\_tangential\_adhesion\_force

![][public]


```cpp
void IRockyContactScalarsModel::enable_storage_tangential_adhesion_force()
```




**This method enables a known-scalar that stores the value of the tangential component of the**:

adhesion force. Only some external modules, such as the Liquid Bridge Model module, implement a model in which the adhesion force may have a tangential component. If one of such modules is active in a simulation, a custom module will have access to the value of that force when its storage has been enabled with this method. Then, during the simulation, the value of the tangential adhesion force can be accessed by using the <code>[IRockyContact::get\_tangential\_adhesion\_force](structIRockyContact.md#structIRockyContact_1a20d7ffad55e1c1c28c848eb3b09c41f2)</code> method.



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactScalarsModel::enable_storage_tangential_adhesion_force"}]}`
-->

<a id="structIRockyContactScalarsModel_1a36a468305e9a49ba36de61846260c1f1"></a>
### Function enable\_storage\_previous\_normal\_vector

![][public]


```cpp
void IRockyContactScalarsModel::enable_storage_previous_normal_vector()
```




**This method enables a known-scalar that stores automatically the value of the contact's**:

normal unit vector at the end of a time iteration, with the purpose of making it available during the next time iteration. If the storage of this vector has been enabled, it can be accessed during a simulation by using the <code>[IRockyContact::get\_previous\_normal\_vector](structIRockyContact.md#structIRockyContact_1afa684887b3dcfad056850ccfdf399ec3)</code> method. By comparing this vector to the current normal unit vector, a custom module will be able to determine if a change on the contact's normal direction has occurred between iterations. The Rocky solver will correct the orientation of this vector automatically if the contact topology is altered because of an internal reorganization of the array of contacts (a regular contact scalar will not be corrected in such an event).



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactScalarsModel::enable_storage_previous_normal_vector"}]}`
-->

<a id="structIRockyContactScalarsModel_1ab2927b1c13fc4325a5bd28ba97e15230"></a>
### Function enable\_previous\_moment\_vector

![][public]


```cpp
void IRockyContactScalarsModel::enable_previous_moment_vector()
```




**This method is intended for modules implementing a custom rolling resistance model**:

in which the rolling resistance is updated on each time iteration. It enables a contact scalar that can be used by a module for storing the moment calculated at a given time iteration in order to make it available in the following iteration. It is highly recommended to use that contact scalar instead of a regular contact scalar, because the Rocky solver will correct the orientation of the stored vector automatically if the contact topology is altered because of an internal reorganization of the array of contacts (a regular contact scalar will not be corrected in such an event).



**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactScalarsModel::enable_previous_moment_vector"}]}`
-->

<a id="structIRockyContactScalarsModel_1a29e181ff7eef3349c42038e6b7f9541a"></a>
### Function mark\_scalar\_as\_history\_dependent

![][public]


```cpp
void IRockyContactScalarsModel::mark_scalar_as_history_dependent(int scalar_index)
```




**This method must be used to inform Rocky that a given particle-to-particle contact**:

scalar stores a 3D vector whose value depends on the history of the contact. Typical cases are 3D vectors whose values are obtained incrementally over time, or a 3D vector whose value is stored for the next time iteration in order to approximate its time derivative. When such scalars are marked using this method, Rocky takes care of preserving the orientation of the vector whenever an internal reordering of the particle indices causes a topological reversal of the contact. If a particle-to-particle contact scalar depending on time is not marked with this method, contact reversals may destabilize the simulation or may lead to completely incorrect results.


**Parameters**:

* **scalar_index**: The index that identifies the specific contact scalar that must be marked as dependent on history. Only particle-to-particle contact scalars of type <code>double3</code> are able to be marked with this method. Any other scalar type will not be affected by contact reversals.



**Parameters**:

* int **scalar_index**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactScalarsModel::mark_scalar_as_history_dependent"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)