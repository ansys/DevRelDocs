# Structure IRockyCloudPoint

<a id="structIRockyCloudPoint"></a>

![][C++]
![][public]

**#include <rocky\_point\_cloud\_api.hpp>**



<code>[IRockyCloudPoint](structIRockyCloudPoint.md#structIRockyCloudPoint)</code> is an interface to the data of the nearest point to a given particle or SPH element at a given time.

## Members

* [add\_property](structIRockyCloudPoint.md#structIRockyCloudPoint_1a9136329c0b219a389b02ae624761b741)
* [add\_property](structIRockyCloudPoint.md#structIRockyCloudPoint_1a2cb5ab14f36601af7337fd8ac71363fa)
* [get\_position](structIRockyCloudPoint.md#structIRockyCloudPoint_1a1d06a1eb80ad0811ab2794f2a494fe17)
* [get\_property](structIRockyCloudPoint.md#structIRockyCloudPoint_1a51d29e82619836ed172e8f3135bf0f51)
* [is\_enabled](structIRockyCloudPoint.md#structIRockyCloudPoint_1ae9e37938664d6977e49593d1ec8f3dbd)
* [is\_valid](structIRockyCloudPoint.md#structIRockyCloudPoint_1a79dfeecd7f7360ed1e25135ed54ed312)
* [set\_property](structIRockyCloudPoint.md#structIRockyCloudPoint_1a0668da5d5605bad7835355c5f6e3d269)
* [set\_property](structIRockyCloudPoint.md#structIRockyCloudPoint_1a92918f0daa29121981d3549569518573)

## Public functions

<a id="structIRockyCloudPoint_1a1d06a1eb80ad0811ab2794f2a494fe17"></a>
### Function get\_position

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS double3 IRockyCloudPoint::get_position() const
```




**Returns**:

The Cartesian coordinates of the referred point in the cloud point.



**Return type**: ROCKY_FUNCTIONS double3

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCloudPoint::get_position"}]}`
-->

<a id="structIRockyCloudPoint_1a51d29e82619836ed172e8f3135bf0f51"></a>
### Function get\_property

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS _data_type IRockyCloudPoint::get_property(int property_index) const
```




**Returns**:

The value of a property in the cloud point dataset, corresponding to the referred point in the point cloud.



**Parameters**:

* int **property_index**

**Return type**: ROCKY_FUNCTIONS _data_type

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class _data_type"}]},{"type":"text","text":"\n            "},{"type":"element","name":"defval","attributes":{},"children":[{"type":"text","text":"double"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCloudPoint::get_property"}]}`
-->

<a id="structIRockyCloudPoint_1a9136329c0b219a389b02ae624761b741"></a>
### Function add\_property

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyCloudPoint::add_property(int property_index, _data_type value) const
```




Adds value to the current property value identified by property_index. This method is intended to be used only for user-defined point cloud properties of <code>CollectiveOperationType=cotIntegrated</code>, because these properties are automatically accumulated at post-forces hook. Using it on properties with a different <code>CollectiveOperationType</code> can lead to unexpected results. 
**Parameters**:

* **property_index**: The index that identifies the point cloud property
* **value**: Value to add on property



**Parameters**:

* int **property_index**
* _data_type **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class _data_type"}]},{"type":"text","text":"\n            "},{"type":"element","name":"defval","attributes":{},"children":[{"type":"text","text":"double"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCloudPoint::add_property"}]}`
-->

<a id="structIRockyCloudPoint_1a0668da5d5605bad7835355c5f6e3d269"></a>
### Function set\_property

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS void IRockyCloudPoint::set_property(int property_index, _data_type value) const
```




Set the value of property identified by property_index to the passed value. This method is intended to be used only for user-defined point cloud properties. 
**Parameters**:

* **property_index**: The index that identifies the point cloud property
* **value**: Value to add on property



**Parameters**:

* int **property_index**
* _data_type **value**

**Return type**: ROCKY_FUNCTIONS void

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class _data_type"}]},{"type":"text","text":"\n            "},{"type":"element","name":"defval","attributes":{},"children":[{"type":"text","text":"double"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCloudPoint::set_property"}]}`
-->

<a id="structIRockyCloudPoint_1ae9e37938664d6977e49593d1ec8f3dbd"></a>
### Function is\_enabled

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS bool IRockyCloudPoint::is_enabled() const
```




**Returns**:

True if the current point cloud is enabled, false otherwise.



**Return type**: ROCKY_FUNCTIONS bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCloudPoint::is_enabled"}]}`
-->

<a id="structIRockyCloudPoint_1a79dfeecd7f7360ed1e25135ed54ed312"></a>
### Function is\_valid

![][public]
![][const]


```cpp
bool IRockyCloudPoint::is_valid() const
```




**Returns**:

True if the nearest point is a valid one for the particle passed to get_particle_cloud_point or get_element_cloud_point. Invalid nearest points are only marked when search_cut_off_distance is enabled for the point cloud.



**Return type**: ROCKY_FUNCTIONS bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCloudPoint::is_valid"}]}`
-->

<a id="structIRockyCloudPoint_1a2cb5ab14f36601af7337fd8ac71363fa"></a>
### Function add\_property

![][public]
![][const]


```cpp
void IRockyCloudPoint::add_property(int property_index, const _data_type value) const
```








**Parameters**:

* int **property_index**
* const _data_type **value**

**Return type**: void

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class _data_type"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCloudPoint::add_property"}]}`
-->

<a id="structIRockyCloudPoint_1a92918f0daa29121981d3549569518573"></a>
### Function set\_property

![][public]
![][const]


```cpp
void IRockyCloudPoint::set_property(int property_index, _data_type value) const
```








**Parameters**:

* int **property_index**
* _data_type **value**

**Return type**: void

<!--
**TODO**:

* `templateparamlist {"type":"element","name":"templateparamlist","attributes":{},"children":[{"type":"text","text":"\n          "},{"type":"element","name":"param","attributes":{},"children":[{"type":"text","text":"\n            "},{"type":"element","name":"type","attributes":{},"children":[{"type":"text","text":"class _data_type"}]},{"type":"text","text":"\n          "}]},{"type":"text","text":"\n        "}]}`
* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCloudPoint::set_property"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)