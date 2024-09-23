<a id="class_speos_n_x_1_1_feature_builder"></a>
# Class SpeosNX::FeatureBuilder

![][Python]
![][public]

**Definition**: `SpeosNX.py` (line 5247)

A base class for all Builders.

A Builder is an object that is used to create and edit Features.





This is an abstract class that provides the basic functionality common to all builders. See the Builder subclasses for details of application-specific builders.





This is an abstract class, and cannot be instantiated.

**Inherits from**:

* [\_object](class_speos_n_x_1_1__object.md#class_speos_n_x_1_1__object)

**Inherited by**:

* [FolderBuilder](class_speos_n_x_1_1_folder_builder.md#class_speos_n_x_1_1_folder_builder)
* [OpticalPropertiesBuilder](class_speos_n_x_1_1_optical_properties_builder.md#class_speos_n_x_1_1_optical_properties_builder)
* [Sensor3DEnergyDensityBuilder](class_speos_n_x_1_1_sensor3_d_energy_density_builder.md#class_speos_n_x_1_1_sensor3_d_energy_density_builder)
* [Sensor3DIrradianceBuilder](class_speos_n_x_1_1_sensor3_d_irradiance_builder.md#class_speos_n_x_1_1_sensor3_d_irradiance_builder)
* [SensorCommonBuilder](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder)
* [SensorObserverBuilder](class_speos_n_x_1_1_sensor_observer_builder.md#class_speos_n_x_1_1_sensor_observer_builder)
* [SensorVRImmersiveBuilder](class_speos_n_x_1_1_sensor_v_r_immersive_builder.md#class_speos_n_x_1_1_sensor_v_r_immersive_builder)
* [SimulationCommonBuilder](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder)
* [SourceAmbientCommonBuilder](class_speos_n_x_1_1_source_ambient_common_builder.md#class_speos_n_x_1_1_source_ambient_common_builder)
* [SourceAmbientEnvironmentBuilder](class_speos_n_x_1_1_source_ambient_environment_builder.md#class_speos_n_x_1_1_source_ambient_environment_builder)
* [SourceDisplayBuilder](class_speos_n_x_1_1_source_display_builder.md#class_speos_n_x_1_1_source_display_builder)
* [SourceLuminaireBuilder](class_speos_n_x_1_1_source_luminaire_builder.md#class_speos_n_x_1_1_source_luminaire_builder)
* [SourceRayFileBuilder](class_speos_n_x_1_1_source_ray_file_builder.md#class_speos_n_x_1_1_source_ray_file_builder)
* [SourceSurfaceBuilder](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder)
* [SpeosPatternBuilder](class_speos_n_x_1_1_speos_pattern_builder.md#class_speos_n_x_1_1_speos_pattern_builder)

## Members

* [\_\_del\_\_](class_speos_n_x_1_1_feature_builder.md#class_speos_n_x_1_1_feature_builder_1ad688cc6fcbdc96a0f324fecb70876255)
* [\_\_getattr\_\_](class_speos_n_x_1_1_feature_builder.md#class_speos_n_x_1_1_feature_builder_1a09cde44d6716fb83c9aabc93abc1fdb4)
* [\_\_GetFeature](class_speos_n_x_1_1_feature_builder.md#class_speos_n_x_1_1_feature_builder_1a8ee1781a39566848b74b7c5bf59094e2)
* [\_\_GetFullName](class_speos_n_x_1_1_feature_builder.md#class_speos_n_x_1_1_feature_builder_1a2704752af824d2da5933ce1fbb7aac8a)
* [\_\_GetName](class_speos_n_x_1_1_feature_builder.md#class_speos_n_x_1_1_feature_builder_1ab4bfa442cab5629bbe3318cfe5605459)
* [\_\_GetNameWithContext](class_speos_n_x_1_1_feature_builder.md#class_speos_n_x_1_1_feature_builder_1afb63b5aba30c860ce4e0695921dc1e36)
* [\_\_GetStatus](class_speos_n_x_1_1_feature_builder.md#class_speos_n_x_1_1_feature_builder_1a2ff670465c1bf02ad16f7c0fe174dbca)
* [\_\_repr\_\_](class_speos_n_x_1_1_feature_builder.md#class_speos_n_x_1_1_feature_builder_1af5ed824d5057546af31e81c6f8645990)
* [\_\_setattr\_\_](class_speos_n_x_1_1_feature_builder.md#class_speos_n_x_1_1_feature_builder_1a4a647adca30982afb5e85e6629f632c9)
* [\_\_SetName](class_speos_n_x_1_1_feature_builder.md#class_speos_n_x_1_1_feature_builder_1ab00f2e0646aa5d3c9bc8828f0674560b)
* [\_\_swig\_destroy\_\_](class_speos_n_x_1_1_feature_builder.md#class_speos_n_x_1_1_feature_builder_1ad5d12361526dc7cfb7b24a2e5ddc5162)
* [\_\_swig\_getmethods\_\_](class_speos_n_x_1_1_feature_builder.md#class_speos_n_x_1_1_feature_builder_1a0b80c350dac1ed9c1dbecdb473550cad)
* [\_\_swig\_setmethods\_\_](class_speos_n_x_1_1_feature_builder.md#class_speos_n_x_1_1_feature_builder_1ac0e4d110feec6c2d791145b575d66fd6)
* [Commit](class_speos_n_x_1_1_feature_builder.md#class_speos_n_x_1_1_feature_builder_1a2b74e1b440341a82332053432b52b42c)
* [Feature](class_speos_n_x_1_1_feature_builder.md#class_speos_n_x_1_1_feature_builder_1a94ea57aab7fe0356cbfbd048b1ad971e)
* [FullName](class_speos_n_x_1_1_feature_builder.md#class_speos_n_x_1_1_feature_builder_1a0b7259da2de11c688aa435d1f0509134)
* [Name](class_speos_n_x_1_1_feature_builder.md#class_speos_n_x_1_1_feature_builder_1aa5998168cabfb2b2e41151349077812c)
* [NameWithContext](class_speos_n_x_1_1_feature_builder.md#class_speos_n_x_1_1_feature_builder_1a99e8764720550e4ed0eba629a625b2e3)
* [ShowResult](class_speos_n_x_1_1_feature_builder.md#class_speos_n_x_1_1_feature_builder_1af46ee7a28cb7c93fbc6b6c4c4a7c7a53)
* [Status](class_speos_n_x_1_1_feature_builder.md#class_speos_n_x_1_1_feature_builder_1a67a0db04d321a74b7e7fcfd3f1a3f70b)

## Private static attributes

<a id="class_speos_n_x_1_1_feature_builder_1ac0e4d110feec6c2d791145b575d66fd6"></a>
### Variable \_\_swig\_setmethods\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 5258)

```python
dict __swig_setmethods__ =  {}
```







**Type**: dict

<a id="class_speos_n_x_1_1_feature_builder_1a4a647adca30982afb5e85e6629f632c9"></a>
### Variable \_\_setattr\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 5259)

```python
_swig_setattr __setattr__ =  lambda self, name, value(self, [FeatureBuilder](class_speos_n_x_1_1_feature_builder.md#class_speos_n_x_1_1_feature_builder), name, value)
```







**Type**: _swig_setattr

<a id="class_speos_n_x_1_1_feature_builder_1a0b80c350dac1ed9c1dbecdb473550cad"></a>
### Variable \_\_swig\_getmethods\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 5260)

```python
dict __swig_getmethods__ =  {}
```







**Type**: dict

<a id="class_speos_n_x_1_1_feature_builder_1a09cde44d6716fb83c9aabc93abc1fdb4"></a>
### Variable \_\_getattr\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 5261)

```python
_swig_getattr __getattr__ =  lambda self, name(self, [FeatureBuilder](class_speos_n_x_1_1_feature_builder.md#class_speos_n_x_1_1_feature_builder), name)
```







**Type**: _swig_getattr

<a id="class_speos_n_x_1_1_feature_builder_1af5ed824d5057546af31e81c6f8645990"></a>
### Variable \_\_repr\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 5265)

```python
__repr__ =  _swig_repr
```







**Type**: 

<a id="class_speos_n_x_1_1_feature_builder_1ad5d12361526dc7cfb7b24a2e5ddc5162"></a>
### Variable \_\_swig\_destroy\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 5266)

```python
__swig_destroy__ =  _SpeosNX.delete_FeatureBuilder
```







**Type**: 

<a id="class_speos_n_x_1_1_feature_builder_1ad688cc6fcbdc96a0f324fecb70876255"></a>
### Variable \_\_del\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 5267)

```python
None __del__ =  lambda self
```







**Type**: None

## Properties

<a id="class_speos_n_x_1_1_feature_builder_1a94ea57aab7fe0356cbfbd048b1ad971e"></a>
### Property Feature

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 5307)

```python
Feature
```

Returns the feature being edited, or the created feature if the builder is being used in creation mode.

Returns the feature currently being edited by this builder.<br/>
 If a new feature is being created, and the builder has not yet been commited, returns Null. 
**Returns**:

The feature being edited, or the created one or Null.



**Return type**: 

<a id="class_speos_n_x_1_1_feature_builder_1a0b7259da2de11c688aa435d1f0509134"></a>
### Property FullName

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 5314)

```python
FullName
```

Gets the full name of the feature being edited.

**Value type**: String.<br/>






The default value is the current feature full name.



**Return type**: 

<a id="class_speos_n_x_1_1_feature_builder_1aa5998168cabfb2b2e41151349077812c"></a>
### Property Name

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 5321)

```python
Name
```

Gets or sets the name of the feature being edited.

**Value type**: String.<br/>






The default value is the current feature name.



**Return type**: 

<a id="class_speos_n_x_1_1_feature_builder_1a99e8764720550e4ed0eba629a625b2e3"></a>
### Property NameWithContext

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 5326)

```python
NameWithContext
```

Gets the name with context of the feature being edited.

**Value type**: String.<br/>



**Return type**: 

<a id="class_speos_n_x_1_1_feature_builder_1a67a0db04d321a74b7e7fcfd3f1a3f70b"></a>
### Property Status

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 5333)

```python
Status
```

Returns the status of the feature being edited.

Returns a value corresponding to the status of the feature being edited.<br/>






**Value type**: Integer.



**Return type**: 

## Public functions

<a id="class_speos_n_x_1_1_feature_builder_1a2b74e1b440341a82332053432b52b42c"></a>
### Function Commit

![][public]

```python
Commit(self)
```

Commits any edits that have been applied to the builder.

Commits any edits that have been applied to the feature being edited, or a new feature if the builder is being used in creation mode.



**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_feature_builder_1af46ee7a28cb7c93fbc6b6c4c4a7c7a53"></a>
### Function ShowResult

![][public]

```python
ShowResult(self)
```

Updates the feature to reflect the result of an edit to the feature for all builders that support showing results.





**Parameters**:

* selfself

**Return type**: 

## Private functions

<a id="class_speos_n_x_1_1_feature_builder_1a8ee1781a39566848b74b7c5bf59094e2"></a>
### Function \_\_GetFeature

![][private]

```python
__GetFeature(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_feature_builder_1a2ff670465c1bf02ad16f7c0fe174dbca"></a>
### Function \_\_GetStatus

![][private]

```python
__GetStatus(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_feature_builder_1ab4bfa442cab5629bbe3318cfe5605459"></a>
### Function \_\_GetName

![][private]

```python
__GetName(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_feature_builder_1ab00f2e0646aa5d3c9bc8828f0674560b"></a>
### Function \_\_SetName

![][private]

```python
__SetName(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_feature_builder_1a2704752af824d2da5933ce1fbb7aac8a"></a>
### Function \_\_GetFullName

![][private]

```python
__GetFullName(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_feature_builder_1afb63b5aba30c860ce4e0695921dc1e36"></a>
### Function \_\_GetNameWithContext

![][private]

```python
__GetNameWithContext(self)
```







**Parameters**:

* selfself

**Return type**: 

[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[public]: https://img.shields.io/badge/-public-brightgreen (public)