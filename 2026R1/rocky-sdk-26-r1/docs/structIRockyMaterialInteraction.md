# Structure IRockyMaterialInteraction

<a id="structIRockyMaterialInteraction"></a>

![][C++]
![][public]

**#include <rocky\_material\_api.hpp>**



<code>[IRockyMaterialInteraction](structIRockyMaterialInteraction.md#structIRockyMaterialInteraction)</code> is an interface for the internal material interaction object, which gives access to values of the physical properties associated to contacts involving combinations of two materials. The values of all those properties are dimensionless values.

## Members

* [get\_dynamic\_friction\_coefficient](structIRockyMaterialInteraction.md#structIRockyMaterialInteraction_1ae9ce701837e46ca374d260c7b828dac7)
* [get\_minimum\_restitution\_coefficient](structIRockyMaterialInteraction.md#structIRockyMaterialInteraction_1a897ea40cf65b252af203bd1e9b9a3855)
* [get\_restitution\_coefficient](structIRockyMaterialInteraction.md#structIRockyMaterialInteraction_1a83c3e5bc364c65dfc9ff275e345d369c)
* [get\_static\_friction\_coefficient](structIRockyMaterialInteraction.md#structIRockyMaterialInteraction_1a4daf7d4586429504ce237697b7a7659f)
* [get\_stiffness\_multiplier](structIRockyMaterialInteraction.md#structIRockyMaterialInteraction_1af0f10152e6cba7d896304a45ed822fa8)
* [get\_tangential\_stiffness\_ratio](structIRockyMaterialInteraction.md#structIRockyMaterialInteraction_1a766d1bbd19828566927faadc683b4242)

## Public functions

<a id="structIRockyMaterialInteraction_1a83c3e5bc364c65dfc9ff275e345d369c"></a>
### Function get\_restitution\_coefficient

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyMaterialInteraction::get_restitution_coefficient() const
```




**Returns**:

The value of the coefficient of restitution, which indirectly specifies the amount of energy dissipation in a normal collision.


!> **Attention** \
The value returned by this function is always the one prescribed through the Rocky UI, therefore, it is not affected by changes introduced by a module implementing a variable restitution coefficient model.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyMaterialInteraction::get_restitution_coefficient"}]}`
-->

<a id="structIRockyMaterialInteraction_1a897ea40cf65b252af203bd1e9b9a3855"></a>
### Function get\_minimum\_restitution\_coefficient

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyMaterialInteraction::get_minimum_restitution_coefficient() const
```




**Returns**:

The value of the minimum restitution coefficient set by a module implementing a variable restitution coefficient model. This value can be used to estimate the stable timestep for a custom contact model. If the given project does not include a module that implements a variable restitution coefficient model, the constant value specified through the Rocky UI will be returned.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyMaterialInteraction::get_minimum_restitution_coefficient"}]}`
-->

<a id="structIRockyMaterialInteraction_1a4daf7d4586429504ce237697b7a7659f"></a>
### Function get\_static\_friction\_coefficient

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyMaterialInteraction::get_static_friction_coefficient() const
```




**Returns**:

The value of the static coefficient of friction, which is used in tangential force models when there is no tangential relative motion between two contacting entities.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyMaterialInteraction::get_static_friction_coefficient"}]}`
-->

<a id="structIRockyMaterialInteraction_1ae9ce701837e46ca374d260c7b828dac7"></a>
### Function get\_dynamic\_friction\_coefficient

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyMaterialInteraction::get_dynamic_friction_coefficient() const
```




**Returns**:

The value of the dynamic coefficient of friction, which is used in tangential force models when there exists tangential relative motion between two contacting entities.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyMaterialInteraction::get_dynamic_friction_coefficient"}]}`
-->

<a id="structIRockyMaterialInteraction_1af0f10152e6cba7d896304a45ed822fa8"></a>
### Function get\_stiffness\_multiplier

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyMaterialInteraction::get_stiffness_multiplier() const
```




**Returns**:

The value of the stiffness multiplier, which is used to increase the stiffness in collisions in order to prevent large overlap values.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyMaterialInteraction::get_stiffness_multiplier"}]}`
-->

<a id="structIRockyMaterialInteraction_1a766d1bbd19828566927faadc683b4242"></a>
### Function get\_tangential\_stiffness\_ratio

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double IRockyMaterialInteraction::get_tangential_stiffness_ratio() const
```




**Returns**:

The value of the tangential stiffness ratio, which is used in tangential force models to relate the tangential stiffness to the normal stiffness at a contact between two contacting entities.



**Return type**: ROCKY_FUNCTIONS double

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyMaterialInteraction::get_tangential_stiffness_ratio"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)