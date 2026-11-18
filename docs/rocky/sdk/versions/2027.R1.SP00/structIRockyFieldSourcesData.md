# Structure IRockyFieldSourcesData

<a id="structIRockyFieldSourcesData"></a>

![][C++]
![][public]

**#include <rocky\_field\_source.h>**



<code>[IRockyFieldSourcesData](structIRockyFieldSourcesData.md#structIRockyFieldSourcesData)</code> is a data structure intended to provide methods to manage field sources in the simulation. A field source can be configured to be mapped to different simulation entities like DEM or SPH particles.

## Members

* [enable\_dem\_field\_source\_mapping](structIRockyFieldSourcesData.md#structIRockyFieldSourcesData_1a480036c6864e301d17e789566c101bc5)
* [enable\_sph\_field\_source\_mapping](structIRockyFieldSourcesData.md#structIRockyFieldSourcesData_1a994857897433c0c6b730127323c02125)

## Public functions

### Function enable\_dem\_field\_source\_mapping

<a id="structIRockyFieldSourcesData_1a480036c6864e301d17e789566c101bc5"></a>

![][public]
![][const]


```cpp
void IRockyFieldSourcesData::enable_dem_field_source_mapping(int field_source_index) const
```




**This method associates the targeted field source with DEM particles, so they get mapped to**:

the nearest field source element during simulation. This enables one to use the <code>[IRockyFieldSourceElement](structIRockyFieldSourceElement.md#structIRockyFieldSourceElement)</code> interface with the <code>[IRockyParticle](structIRockyParticle.md#structIRockyParticle)</code> particles through the <code>get_field_source</code> method of <code>[IRockyDeviceModel](structIRockyDeviceModel.md#structIRockyDeviceModel)</code>.


!> **Attention** \
This must be called during simulation setup.


**Parameters**:

* **field_source_index**: The unique identifier for the field source



**Parameters**:

* int **field_source_index**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyFieldSourcesData::enable_dem_field_source_mapping"}]}`
-->

### Function enable\_sph\_field\_source\_mapping

<a id="structIRockyFieldSourcesData_1a994857897433c0c6b730127323c02125"></a>

![][public]
![][const]


```cpp
void IRockyFieldSourcesData::enable_sph_field_source_mapping(int field_source_index) const
```




**This method associates the targeted field source with SPH particles, so they get mapped to**:

the nearest field source element during simulation. This enables one to use the <code>[IRockyFieldSourceElement](structIRockyFieldSourceElement.md#structIRockyFieldSourceElement)</code> interface with the <code>[IRockySPHElement](structIRockySPHElement.md#structIRockySPHElement)</code> particles through the <code>get_field_source</code> method of <code>[IRockySPHDeviceModel](structIRockySPHDeviceModel.md#structIRockySPHDeviceModel)</code>.


!> **Attention** \
This must be called during simulation setup.


**Parameters**:

* **field_source_index**: The unique identifier for the field source



**Parameters**:

* int **field_source_index**

**Return type**: void

<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"IRockyFieldSourcesData::enable_sph_field_source_mapping"}]}`
-->

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)