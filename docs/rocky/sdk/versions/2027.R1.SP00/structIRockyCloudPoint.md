# Structure IRockyCloudPoint

<a id="structIRockyCloudPoint"></a>

![][C++]
![][public]

**#include <rocky\_point\_cloud\_api.hpp>**



<code>[IRockyCloudPoint](structIRockyCloudPoint.md#structIRockyCloudPoint)</code> is an interface to the data of the nearest point to a given particle or SPH element at a given time.

## Members

* [add\_property](structIRockyCloudPoint.md#structIRockyCloudPoint_1a9136329c0b219a389b02ae624761b741)
* [get\_position](structIRockyCloudPoint.md#structIRockyCloudPoint_1a1d06a1eb80ad0811ab2794f2a494fe17)
* [get\_property](structIRockyCloudPoint.md#structIRockyCloudPoint_1a51d29e82619836ed172e8f3135bf0f51)
* [is\_enabled](structIRockyCloudPoint.md#structIRockyCloudPoint_1ae9e37938664d6977e49593d1ec8f3dbd)
* [is\_valid](structIRockyCloudPoint.md#structIRockyCloudPoint_1ae2fdb3bc0296a0fcb0729a5226eb7cfc)
* [set\_property](structIRockyCloudPoint.md#structIRockyCloudPoint_1a0668da5d5605bad7835355c5f6e3d269)

## Public functions

### Function get\_position

<a id="structIRockyCloudPoint_1a1d06a1eb80ad0811ab2794f2a494fe17"></a>

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

### Function get\_property

<a id="structIRockyCloudPoint_1a51d29e82619836ed172e8f3135bf0f51"></a>

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

### Function add\_property

<a id="structIRockyCloudPoint_1a9136329c0b219a389b02ae624761b741"></a>

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

### Function set\_property

<a id="structIRockyCloudPoint_1a0668da5d5605bad7835355c5f6e3d269"></a>

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

### Function is\_enabled

<a id="structIRockyCloudPoint_1ae9e37938664d6977e49593d1ec8f3dbd"></a>

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

### Function is\_valid

<a id="structIRockyCloudPoint_1ae2fdb3bc0296a0fcb0729a5226eb7cfc"></a>

![][public]
![][const]


```cpp
ROCKY_FUNCTIONS bool IRockyCloudPoint::is_valid() const
```




**Returns**:

True if the nearest point is a valid one for the particle passed to get_particle_cloud_point or get_element_cloud_point. Invalid nearest points are only marked when search_cut_off_distance is enabled for the point cloud.



**Return type**: ROCKY_FUNCTIONS bool

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyCloudPoint::is_valid"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)