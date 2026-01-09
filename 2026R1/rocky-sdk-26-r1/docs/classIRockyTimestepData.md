<a id="classIRockyTimestepData"></a>
# Class IRockyTimestepData

![][C++]
![][public]

**#include <rocky\_timestep\_api.h>**



An <code>[IRockyTimestepData](classIRockyTimestepData.md#classIRockyTimestepData)</code> object provides the data and methods needed to estimate a stable simulation timestep when a module implements a custom contact force model. The class <code>[IRockyTimestepData](classIRockyTimestepData.md#classIRockyTimestepData)</code> inherits all public methods of the class <code>[IRockyInteractionCalculationsData](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData)</code>.

**Inherits from**:

* [IRockyInteractionCalculationsData](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData)

## Members

* [get\_geometry\_material\_index](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1a05cb28a940233bc976b806a5893c639c)
* [get\_loading\_n\_steps](classIRockyTimestepData.md#classIRockyTimestepData_1a3a8aecd285747c87e9987fd439a14a3b)
* [get\_material](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1a609eb08b9a568e07c35953bd616d9551)
* [get\_material\_interaction](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1aeb94fd8ed1f75bd0523634285ad94e4d)
* [get\_material\_interaction\_index](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1a1cf7ad2b906aa2f033494b390522bbb3)
* [get\_number\_geometry\_materials](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1a986da6321cca08d20d20dbd43962a74a)
* [get\_number\_particle\_groups](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1ab5fb8e3d498bfc78f116eec7b53b22b8)
* [get\_particle\_material\_index](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1a700a3993ce6c50786c1323e0b91a7c3a)
* [get\_particle\_max\_sieve\_size](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1ac12016128279790932537b32c1c7410d)
* [get\_particle\_min\_mass](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1a641adbab81c6c430aa1b0eae6eff29f4)
* [get\_particle\_min\_sieve\_size](classIRockyInteractionCalculationsData.md#classIRockyInteractionCalculationsData_1a1ce09b00f677c903a2d25426f8447300)

## Public functions

<a id="classIRockyTimestepData_1a3a8aecd285747c87e9987fd439a14a3b"></a>
### Function get\_loading\_n\_steps

![][public]
![][const]


```cpp
int IRockyTimestepData::get_loading_n_steps() const
```




**Returns**:

The minimum number of timesteps that the loading period of the shortest collision in a simulation can have. This is a parameter whose value is specified through the Rocky UI.



**Return type**: int

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyTimestepData::get_loading_n_steps"}]}`
-->

<!--
**TODO**:

* `includes  {"type":"element","name":"includes","attributes":{"local":"no","refid":"rocky__timestep__api_8h"},"children":[{"type":"text","text":"rocky_timestep_api.h"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)