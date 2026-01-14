# Structure IRockyContactOutputData

<a id="structIRockyContactOutputData"></a>

![][C++]
![][public]

**#include <rocky\_contact\_output\_data\_api.hpp>**



<code>[IRockyContactOutputData](structIRockyContactOutputData.md#structIRockyContactOutputData)</code> is an interface to define some property values related to a contact, which are needed during the calculation steps of a custom contact model. The values defined through this interface can include normal and tangential forces, and impact energy.





Each <code>set</code> method present in this interface is intended to be used at a different calculation step of the contact model:






* Normal contact force calculation within the code associated to the <br/>
 <code>ROCKY_PLUGIN_NORMAL_FORCE_ON_CONTACTS</code> hook:
* <code>[IRockyContactOutputData::set\_normal\_force](structIRockyContactOutputData.md#structIRockyContactOutputData_1a396b63164b3e2d7792bca3c7ba1ae274)</code>



* Tangential contact force calculation within the code associated to the <br/>
 <code>ROCKY_PLUGIN_TANGENTIAL_FORCE_ON_CONTACTS</code> hook:
* <code>[IRockyContactOutputData::set\_tangential\_force](structIRockyContactOutputData.md#structIRockyContactOutputData_1abaf1043a614caad9555e2c909eb21e12)</code>

* <code>[IRockyContactOutputData::set\_sliding](structIRockyContactOutputData.md#structIRockyContactOutputData_1ae0f380ec4f65945e54d4e3b939116979)</code>



* Impact energy calculation within the code associated to the <br/>
 <code>ROCKY_PLUGIN_IMPACT_ENERGY_ON_CONTACTS</code> hook:
* <code>[IRockyContactOutputData::set\_home\_impact\_energy](structIRockyContactOutputData.md#structIRockyContactOutputData_1a6fa45c11ca5a3dc0e2e7ba76cceca590)</code>

* <code>[IRockyContactOutputData::set\_near\_impact\_energy](structIRockyContactOutputData.md#structIRockyContactOutputData_1afaf9777156ccff17bad6b754bd9ec0e2)</code>







It is mandatory that the values of the properties above be defined in the respective method. If not defined, the behavior of the particles during the simulation can become indeterminate. Please refer to the individual methods' documentation for further details about each of them.

## Members

* [get\_normal\_force](structIRockyContactOutputData.md#structIRockyContactOutputData_1adfb7782976874a10981521e52742a015)
* [get\_normal\_relative\_velocity](structIRockyContactOutputData.md#structIRockyContactOutputData_1adb3a62ea0f7da835ebeec3ec48d72214)
* [get\_tangential\_force](structIRockyContactOutputData.md#structIRockyContactOutputData_1a25aeef724bbfb9eb24d8297df024f208)
* [get\_tangential\_relative\_velocity](structIRockyContactOutputData.md#structIRockyContactOutputData_1aff6677ca9cfa1f58ae87e308d7b19286)
* [set\_home\_impact\_energy](structIRockyContactOutputData.md#structIRockyContactOutputData_1a6fa45c11ca5a3dc0e2e7ba76cceca590)
* [set\_home\_moment](structIRockyContactOutputData.md#structIRockyContactOutputData_1a4016d11738ce592f4e0b2853c552db13)
* [set\_near\_impact\_energy](structIRockyContactOutputData.md#structIRockyContactOutputData_1afaf9777156ccff17bad6b754bd9ec0e2)
* [set\_near\_moment](structIRockyContactOutputData.md#structIRockyContactOutputData_1a7eea9b368237f35e06d1e3381fef9a13)
* [set\_normal\_force](structIRockyContactOutputData.md#structIRockyContactOutputData_1a396b63164b3e2d7792bca3c7ba1ae274)
* [set\_rolling\_dissipated\_power](structIRockyContactOutputData.md#structIRockyContactOutputData_1ad957c62e9c6bb92c8e13ef28ea8e0a3d)
* [set\_sliding](structIRockyContactOutputData.md#structIRockyContactOutputData_1ae0f380ec4f65945e54d4e3b939116979)
* [set\_tangential\_force](structIRockyContactOutputData.md#structIRockyContactOutputData_1abaf1043a614caad9555e2c909eb21e12)

## Public functions

<a id="structIRockyContactOutputData_1a396b63164b3e2d7792bca3c7ba1ae274"></a>
### Function set\_normal\_force

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyContactOutputData::set_normal_force(double value)
```




**This method sets the value of the normal component of the contact force calculated by a custom**:

contact model. Rocky will sum this force to both entities associated to the contact (two particles or a particle and a geometry triangle) using the appropriate signs. This method is intended to be called from <code>ROCKY_PLUGIN_NORMAL_FORCE_ON_CONTACTS</code>, since this hook is meant to be used to calculate and set the normal force component for the contact. Using it outside this hook can lead to undefined behavior.


**Parameters**:

* **value**: The normal component of the contact force just calculated using a custom model.



**Parameters**:

* double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactOutputData::set_normal_force"}]}`
-->

<a id="structIRockyContactOutputData_1abaf1043a614caad9555e2c909eb21e12"></a>
### Function set\_tangential\_force

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyContactOutputData::set_tangential_force(double3 value)
```




**This method sets the value of the tangential component of the contact force calculated by a**:

custom contact model. Rocky will sum this force to both entities associated to the contact (two particles or a particle and a geometry triangle) using the appropriate signs. This method is intended to be called from <code>ROCKY_PLUGIN_TANGENTIAL_FORCE_ON_CONTACTS</code>, since this hook is meant to be used to calculate and set the tangential force component for the contact. Using it outside this hook can lead to undefined behavior.


**Parameters**:

* **value**: The tangential component of the contact force just calculated using a custom model.



**Parameters**:

* double3 **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactOutputData::set_tangential_force"}]}`
-->

<a id="structIRockyContactOutputData_1a6fa45c11ca5a3dc0e2e7ba76cceca590"></a>
### Function set\_home\_impact\_energy

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyContactOutputData::set_home_impact_energy(double value)
```




**This method must be used if users want to specify an impact energy obtained by means of a**:

special calculation scheme, different from the one defined in the DEM Technical Manual. The impact energy value specified by this method for the home particle will be used in Rocky for processing instantaneous breakage, energy spectra and collision statistics. In the specific case of instantaneous breakage, Rocky will sum the impact energies from all contacts associated to a particle in order to quantify the damage on the particle. This method is intended to be called from <code>ROCKY_PLUGIN_IMPACT_ENERGY_ON_CONTACTS</code>, since this hook is the one designed for calculating and setting the impact energy values. Using it outside this hook can lead to undefined behavior.


**Parameters**:

* **value**: The impact energy for the home particle just calculated using a custom model.



**Parameters**:

* double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactOutputData::set_home_impact_energy"}]}`
-->

<a id="structIRockyContactOutputData_1afaf9777156ccff17bad6b754bd9ec0e2"></a>
### Function set\_near\_impact\_energy

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyContactOutputData::set_near_impact_energy(double value)
```




**This method must be used if users want to specify an impact energy obtained by means of a**:

special calculation scheme, different from the one defined in the DEM Technical Manual. The impact energy value specified by this method for the near particle will be used in Rocky for processing instantaneous breakage, energy spectra and collision statistics. In the specific case of instantaneous breakage, Rocky will sum the impact energies from all contacts associated to a particle in order to quantify the damage on the particle. This method is intended to be called from <code>ROCKY_PLUGIN_IMPACT_ENERGY_ON_CONTACTS</code>, since this hook is the one designed for calculating and setting the impact energy values. Using it outside this hook can lead to undefined behavior.


**Parameters**:

* **value**: The impact energy for the near particle just calculated using a custom model.



**Parameters**:

* double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactOutputData::set_near_impact_energy"}]}`
-->

<a id="structIRockyContactOutputData_1ae0f380ec4f65945e54d4e3b939116979"></a>
### Function set\_sliding

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyContactOutputData::set_sliding(bool value)
```




**This method must be used by a module implementing a custom tangential**:

contact force model as it specifies whether the particles (or the particle and the triangle) involved in the contact are sliding on each other. This method is intended to be called from <code>ROCKY_PLUGIN_TANGENTIAL_FORCE_ON_CONTACTS</code>, since this hook is meant to be used to calculate and set the tangential force component for the contact. Using it outside this hook can lead to undefined behavior. Not defining the sliding status of the contact inside the hook can also lead to unexpected results.


**Parameters**:

* **value**: The sliding status of the contact just calculated using a custom contact model.



**Parameters**:

* bool **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactOutputData::set_sliding"}]}`
-->

<a id="structIRockyContactOutputData_1a4016d11738ce592f4e0b2853c552db13"></a>
### Function set\_home\_moment

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyContactOutputData::set_home_moment(double3 value)
```




**This method sets the value of the rolling resistance moment that must be applied to the**:

particle labeled as _home_ particle at a contact. This method is intended to be called from <code>ROCKY_PLUGIN_ROLLING_RESISTANCE_ON_CONTACTS</code>, as this hook is designed specifically to be used by a module implementing a custom rolling resistance model, to calculate and set the rolling resistance moments acting on the particles at a contact. Using this method outside that hook can lead to undefined behavior.


**Parameters**:

* **value**: The rolling resistance moment vector acting over the home particle.



**Parameters**:

* double3 **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactOutputData::set_home_moment"}]}`
-->

<a id="structIRockyContactOutputData_1a7eea9b368237f35e06d1e3381fef9a13"></a>
### Function set\_near\_moment

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyContactOutputData::set_near_moment(double3 value)
```




**This method sets the value of the rolling resistance moment that must be applied to the**:

particle labeled as _near_ particle at a particle-to-particle contact. This method is intended to be called from <code>ROCKY_PLUGIN_ROLLING_RESISTANCE_ON_CONTACTS</code>, as this hook is designed specifically to be used by a module implementing a custom rolling resistance model, to calculate and set the rolling resistance moments acting on the particles at a contact. Using this method outside that hook can lead to undefined behavior.


**Parameters**:

* **value**: The rolling resistance moment vector acting over the near particle.



**Parameters**:

* double3 **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactOutputData::set_near_moment"}]}`
-->

<a id="structIRockyContactOutputData_1ad957c62e9c6bb92c8e13ef28ea8e0a3d"></a>
### Function set\_rolling\_dissipated\_power

![][public]


```cpp
ROCKY_FUNCTIONS void IRockyContactOutputData::set_rolling_dissipated_power(double value)
```




**This method sets the value of the instantaneous power dissipated at a contact, due**:

to the action of the rolling resistance moments calculated by a custom rolling resistance model. The value of this power will be used exclusively by collision statistics and energy spectra modules, if they are active in a simulation. Because of that, the use of this method by a module implementing such a rolling resistance model is optional. If a power value is not provided and the aforementioned statistics modules need it, the Rocky solver will calculate it using a first-order accurate approximation.


**Parameters**:

* **value**: The instantaneous power dissipated at a contact by rolling resistance.



**Parameters**:

* double **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactOutputData::set_rolling_dissipated_power"}]}`
-->

<a id="structIRockyContactOutputData_1adfb7782976874a10981521e52742a015"></a>
### Function get\_normal\_force

![][public]


```cpp
ROCKY_FUNCTIONS double IRockyContactOutputData::get_normal_force()
```




**Returns**:

The normal component of the contact force calculated during the current iteration. This method is intended to be called after the normal force is calculated from the contact model pipeline (<code>ROCKY_PLUGIN_NORMAL_FORCE_ON_CONTACTS</code> in a custom implementation). If called before the moment when the normal force is set for the current contact in the current iteration, the value returned is undetermined.


!> **Attention** \
Note that the value returned by this method may differ from the value returned by <code>[IRockyContact::get\_normal\_contact\_force](structIRockyContact.md#structIRockyContact_1a9e085d9bb5684b5d34c33525bb1d021c)</code>, as the latter returns the current normal force value in memory, which is usually zero (for new contacts) or the value calculated in the last normal force step for this contact.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactOutputData::get_normal_force"}]}`
-->

<a id="structIRockyContactOutputData_1a25aeef724bbfb9eb24d8297df024f208"></a>
### Function get\_tangential\_force

![][public]


```cpp
ROCKY_FUNCTIONS double3 IRockyContactOutputData::get_tangential_force()
```




**Returns**:

The tangential component of the contact force calculated at the current iteration as a vector in Cartesian coordinates. This method is intended to be called after the tangential force calculation step from the contact model pipeline (<code>ROCKY_PLUGIN_TANGENTIAL_FORCE_ON_CONTACTS</code> in a custom implementation). If called before the moment when the tangential force is set for the current contact in the current iteration, the value returned is undetermined.


!> **Attention** \
Note that the value returned from this method may differ from the value returned by <code>[IRockyContact::get\_tangential\_contact\_force](structIRockyContact.md#structIRockyContact_1aca5aae0a4d0c2033bbad4da067657704)</code>, as the latter returns the current tangential force vector in memory, which is usually zero (for new contacts) or the value calculated in the last tangential force step for this contact.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactOutputData::get_tangential_force"}]}`
-->

<a id="structIRockyContactOutputData_1adb3a62ea0f7da835ebeec3ec48d72214"></a>
### Function get\_normal\_relative\_velocity

![][public]


```cpp
ROCKY_FUNCTIONS double IRockyContactOutputData::get_normal_relative_velocity()
```




**Returns**:

The normal component of the relative velocity at the contact point. This relative velocity is defined as the difference between the absolute velocities of points on the home particle and the near particle or boundary that instantaneously coincide with the contact point.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactOutputData::get_normal_relative_velocity"}]}`
-->

<a id="structIRockyContactOutputData_1aff6677ca9cfa1f58ae87e308d7b19286"></a>
### Function get\_tangential\_relative\_velocity

![][public]


```cpp
ROCKY_FUNCTIONS double3 IRockyContactOutputData::get_tangential_relative_velocity()
```




**Returns**:

The tangential component of the relative velocity at the contact point. This relative velocity is defined as the difference between the absolute velocities of points on the home particle and the near particle or boundary that instantaneously coincide with the contact point.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyContactOutputData::get_tangential_relative_velocity"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)