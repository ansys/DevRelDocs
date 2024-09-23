<a id="class_speos_n_x_1_1_simulation_common_builder"></a>
# Class SpeosNX::SimulationCommonBuilder

![][Python]
![][public]

**Definition**: `SpeosNX.py` (line 9493)

A base class for all Simulation Builders.

A Builder is an object that is used to create and edit Features.





This is an abstract class that provides the basic functionality common to all builders. See the Builder subclasses for details of application-specific builders.





This is an abstract class, and cannot be instantiated.

**Inherits from**:

* [FeatureBuilder](class_speos_n_x_1_1_feature_builder.md#class_speos_n_x_1_1_feature_builder)

**Inherited by**:

* [SimulationDirectBuilder](class_speos_n_x_1_1_simulation_direct_builder.md#class_speos_n_x_1_1_simulation_direct_builder)
* [SimulationInteractiveBuilder](class_speos_n_x_1_1_simulation_interactive_builder.md#class_speos_n_x_1_1_simulation_interactive_builder)
* [SimulationInverseBuilder](class_speos_n_x_1_1_simulation_inverse_builder.md#class_speos_n_x_1_1_simulation_inverse_builder)

## Members

* [\_\_del\_\_](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1ad688cc6fcbdc96a0f324fecb70876255)
* [\_\_GetAllPreset](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a0c562a0b6bc52a21d21a52f3928c326f)
* [\_\_GetAmbientMaterial](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a5fefcde10ab5ffcd60bc3400690ad589)
* [\_\_getattr\_\_](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a09cde44d6716fb83c9aabc93abc1fdb4)
* [\_\_GetEstimatedRam](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a54cdec5634c1bafc018bd6809ec63ef3)
* [\_\_GetFeatureSimulation](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a3d87c4910af9a310443a970ff40bcd21)
* [\_\_GetGeometries](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a4843b8fd03d655acdb4febdfe900998c)
* [\_\_GetLightExpert](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a70c3ac790a819dbf1043956d9563bce3)
* [\_\_GetPreset](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1aa5b94a25a41a6ae442a60b80c2d24b01)
* [\_\_GetSelectAmbientMaterial](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a6f76a059fecf1563303fc8155994789d)
* [\_\_GetSensors](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a921f5ff36665ff4c79603b055e8bd1e2)
* [\_\_GetSettings](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1abc252ed2d87d755770709d780605bff7)
* [\_\_GetSources](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a2877cebc27ad78a89d6a2bcd29854319)
* [\_\_GetStandardDeviation](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a47aa332b0fe790fa0fd76596eba96f68)
* [\_\_GetUsePresetSettings](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1ad52cde58f377459e39f732e7a429d152)
* [\_\_repr\_\_](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1af5ed824d5057546af31e81c6f8645990)
* [\_\_SetAmbientMaterial](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a62346c59fa17bfec15869af25ce447ad)
* [\_\_setattr\_\_](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a4a647adca30982afb5e85e6629f632c9)
* [\_\_SetLightExpert](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a5f10bccec57a22e3a85ece6fa91ab665)
* [\_\_SetPreset](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a3a9bf60e14bc6f8c967c4f4060086d15)
* [\_\_SetSelectAmbientMaterial](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a351ce7b65d7a11858c5334b4c3181eca)
* [\_\_SetSettings](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a2a1bb20c28f4eac3b4605d85e9113ab8)
* [\_\_SetStandardDeviation](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1ae39038db44858684d5a7074ff6283ebd)
* [\_\_SetUsePresetSettings](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a8e94fa520c8d21c16b408d5ba49c60b8)
* [\_\_swig\_destroy\_\_](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1ad5d12361526dc7cfb7b24a2e5ddc5162)
* [\_\_swig\_getmethods\_\_](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a0b80c350dac1ed9c1dbecdb473550cad)
* [\_\_swig\_setmethods\_\_](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1ac0e4d110feec6c2d791145b575d66fd6)
* [AddGeometries](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a0ec813b00b8afd7a9702b5cf2f1525b2)
* [AddSensors](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a2823ee2dcd595a45c1870bcaf47205e2)
* [AddSources](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a99f17a25fe9e579fc3504b17728ca2da)
* [AllPreset](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a2d38741fb47265ebdb84e60609c7d2d8)
* [AmbientMaterial](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a641797a3dee312fe1b16f7802892cbd7)
* [EstimatedRam](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a01394f4c9bed5f61748a591f2b4ce881)
* [FeatureSimulation](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1aea2ecab47bbbf24fd10319127c9d8015)
* [Geometries](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a98788fbe263fc2e12068ecc7ddbadbc7)
* [LightExpert](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a661765be07a8c635f5abb0dab4c3927d)
* [Preset](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1ad9b61b7f2b7dbe4c6816a994778e318f)
* [RemoveGeometries](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a30e21d1cd47e7d87d547daede1cb45e4)
* [RemoveSensors](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a2cdb6d650a57ad372cff24bcf8e6ad10)
* [RemoveSources](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1ac10a0c4124712e65cb3a6c55fc1350f3)
* [SelectAmbientMaterial](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a648a4416c8d3b6af5b24abc08ed5290a)
* [Sensors](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1aa98b6524756441f584e32369e01c056e)
* [Settings](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1add3c793dad9f47bc87861b43af7038d1)
* [Sources](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a4dd596ec01d5279a29972479e475fc16)
* [StandardDeviation](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a12717ada1cb8434786097eb2e46ad8b6)
* [UsePresetSettings](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder_1a1fc3778f8d488ad1316a09023625ea3b)

## Private static attributes

<a id="class_speos_n_x_1_1_simulation_common_builder_1ac0e4d110feec6c2d791145b575d66fd6"></a>
### Variable \_\_swig\_setmethods\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 9504)

```python
dict __swig_setmethods__ =  {}
```







**Type**: dict

<a id="class_speos_n_x_1_1_simulation_common_builder_1a4a647adca30982afb5e85e6629f632c9"></a>
### Variable \_\_setattr\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 9507)

```python
_swig_setattr __setattr__ =  lambda self, name, value(self, [SimulationCommonBuilder](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder), name, value)
```







**Type**: _swig_setattr

<a id="class_speos_n_x_1_1_simulation_common_builder_1a0b80c350dac1ed9c1dbecdb473550cad"></a>
### Variable \_\_swig\_getmethods\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 9508)

```python
dict __swig_getmethods__ =  {}
```







**Type**: dict

<a id="class_speos_n_x_1_1_simulation_common_builder_1a09cde44d6716fb83c9aabc93abc1fdb4"></a>
### Variable \_\_getattr\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 9511)

```python
_swig_getattr __getattr__ =  lambda self, name(self, [SimulationCommonBuilder](class_speos_n_x_1_1_simulation_common_builder.md#class_speos_n_x_1_1_simulation_common_builder), name)
```







**Type**: _swig_getattr

<a id="class_speos_n_x_1_1_simulation_common_builder_1af5ed824d5057546af31e81c6f8645990"></a>
### Variable \_\_repr\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 9515)

```python
__repr__ =  _swig_repr
```







**Type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1ad5d12361526dc7cfb7b24a2e5ddc5162"></a>
### Variable \_\_swig\_destroy\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 9516)

```python
__swig_destroy__ =  _SpeosNX.delete_SimulationCommonBuilder
```







**Type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1ad688cc6fcbdc96a0f324fecb70876255"></a>
### Variable \_\_del\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 9517)

```python
None __del__ =  lambda self
```







**Type**: None

## Properties

<a id="class_speos_n_x_1_1_simulation_common_builder_1a2d38741fb47265ebdb84e60609c7d2d8"></a>
### Property AllPreset

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9641)

```python
AllPreset
```

Gets all Preset.

**Value type**: List of Preset object.



**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1a641797a3dee312fe1b16f7802892cbd7"></a>
### Property AmbientMaterial

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9651)

```python
AmbientMaterial
```

Gets or sets the property to enable ambient material.

True: Enables Ambient Material.<br/>
 False: Disables Ambient Material.<br/>






**Value type**: Boolean.<br/>






The default value is False.



**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1a01394f4c9bed5f61748a591f2b4ce881"></a>
### Property EstimatedRam

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9656)

```python
EstimatedRam
```

Gets the estimated RAM usage.

**Value type**: String.



**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1aea2ecab47bbbf24fd10319127c9d8015"></a>
### Property FeatureSimulation

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9663)

```python
FeatureSimulation
```

Gets the simulation feature object.

Gets the simulation feature in order to launch simulations.<br/>






**Value type**: FeatureSimulation object.



**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1a98788fbe263fc2e12068ecc7ddbadbc7"></a>
### Property Geometries

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9669)

```python
Geometries
```

Gets geometries tag.

The Geometries property returns a list of feature tag. 
**Returns**:

List of integer.



**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1a661765be07a8c635f5abb0dab4c3927d"></a>
### Property LightExpert

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9679)

```python
LightExpert
```

Gets or sets the property to enable Light Expert.

True: Enables Light Expert.<br/>
 False: Disables Light Expert.<br/>






**Value type**: Boolean.<br/>






The default value is False.



**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1ad9b61b7f2b7dbe4c6816a994778e318f"></a>
### Property Preset

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9688)

```python
Preset
```

Gets or sets the Preset object.

A preset is a predefined set of the general simulation settings.<br/>






**Value type**: Preset object.<br/>






The default value is None.



**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1a648a4416c8d3b6af5b24abc08ed5290a"></a>
### Property SelectAmbientMaterial

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9697)

```python
SelectAmbientMaterial
```

Gets or set the ambient material.

The SelectedAmbientMaterial property takes a feature tag and returns a feature tag.<br/>






**Value type**: Integer.<br/>






The default value is 0.



**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1aa98b6524756441f584e32369e01c056e"></a>
### Property Sensors

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9704)

```python
Sensors
```

Gets sensor features.

Gets the current sensor features that are in the simulation.<br/>






**Value type**: List of Feature object.



**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1add3c793dad9f47bc87861b43af7038d1"></a>
### Property Settings

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9709)

```python
Settings
```

Gets or sets the simulation settings.

**Value type**: SimulationSettings object.



**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1a4dd596ec01d5279a29972479e475fc16"></a>
### Property Sources

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9716)

```python
Sources
```

Gets source features.

Gets the current source features that are in the simulation.<br/>






**Value type**: List of Feature object.



**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1a12717ada1cb8434786097eb2e46ad8b6"></a>
### Property StandardDeviation

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9717)

```python
StandardDeviation
```







**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1a1fc3778f8d488ad1316a09023625ea3b"></a>
### Property UsePresetSettings

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9727)

```python
UsePresetSettings
```

Gets or sets the property to enable preset settings.

True: Enable Preset Settings<br/>
 False: Disable Preset Settings<br/>






**Value type**: Boolean.<br/>






The default value is False.



**Return type**: 

## Private functions

<a id="class_speos_n_x_1_1_simulation_common_builder_1a3d87c4910af9a310443a970ff40bcd21"></a>
### Function \_\_GetFeatureSimulation

![][private]

```python
__GetFeatureSimulation(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1a2877cebc27ad78a89d6a2bcd29854319"></a>
### Function \_\_GetSources

![][private]

```python
__GetSources(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1a4843b8fd03d655acdb4febdfe900998c"></a>
### Function \_\_GetGeometries

![][private]

```python
__GetGeometries(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1a921f5ff36665ff4c79603b055e8bd1e2"></a>
### Function \_\_GetSensors

![][private]

```python
__GetSensors(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1a54cdec5634c1bafc018bd6809ec63ef3"></a>
### Function \_\_GetEstimatedRam

![][private]

```python
__GetEstimatedRam(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1a70c3ac790a819dbf1043956d9563bce3"></a>
### Function \_\_GetLightExpert

![][private]

```python
__GetLightExpert(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1a5f10bccec57a22e3a85ece6fa91ab665"></a>
### Function \_\_SetLightExpert

![][private]

```python
__SetLightExpert(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1a5fefcde10ab5ffcd60bc3400690ad589"></a>
### Function \_\_GetAmbientMaterial

![][private]

```python
__GetAmbientMaterial(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1a62346c59fa17bfec15869af25ce447ad"></a>
### Function \_\_SetAmbientMaterial

![][private]

```python
__SetAmbientMaterial(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1a6f76a059fecf1563303fc8155994789d"></a>
### Function \_\_GetSelectAmbientMaterial

![][private]

```python
__GetSelectAmbientMaterial(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1a351ce7b65d7a11858c5334b4c3181eca"></a>
### Function \_\_SetSelectAmbientMaterial

![][private]

```python
__SetSelectAmbientMaterial(self, tag)
```







**Parameters**:

* selfself
* tagtag

**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1a47aa332b0fe790fa0fd76596eba96f68"></a>
### Function \_\_GetStandardDeviation

![][private]

```python
__GetStandardDeviation(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1ae39038db44858684d5a7074ff6283ebd"></a>
### Function \_\_SetStandardDeviation

![][private]

```python
__SetStandardDeviation(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1ad52cde58f377459e39f732e7a429d152"></a>
### Function \_\_GetUsePresetSettings

![][private]

```python
__GetUsePresetSettings(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1a8e94fa520c8d21c16b408d5ba49c60b8"></a>
### Function \_\_SetUsePresetSettings

![][private]

```python
__SetUsePresetSettings(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1aa5b94a25a41a6ae442a60b80c2d24b01"></a>
### Function \_\_GetPreset

![][private]

```python
__GetPreset(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1a3a9bf60e14bc6f8c967c4f4060086d15"></a>
### Function \_\_SetPreset

![][private]

```python
__SetPreset(self, preset)
```







**Parameters**:

* selfself
* presetpreset

**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1a0c562a0b6bc52a21d21a52f3928c326f"></a>
### Function \_\_GetAllPreset

![][private]

```python
__GetAllPreset(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1abc252ed2d87d755770709d780605bff7"></a>
### Function \_\_GetSettings

![][private]

```python
__GetSettings(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1a2a1bb20c28f4eac3b4605d85e9113ab8"></a>
### Function \_\_SetSettings

![][private]

```python
__SetSettings(self, settings)
```







**Parameters**:

* selfself
* settingssettings

**Return type**: 

## Public functions

<a id="class_speos_n_x_1_1_simulation_common_builder_1a99f17a25fe9e579fc3504b17728ca2da"></a>
### Function AddSources

![][public]

```python
AddSources(self, sources)
```

Adds sources into the simulation.

**Parameters**:

* **sources**: : List of Feature object


**Returns**:

void.



**Parameters**:

* selfself
* sourcessources

**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1ac10a0c4124712e65cb3a6c55fc1350f3"></a>
### Function RemoveSources

![][public]

```python
RemoveSources(self, sources)
```

Deletes sources from the simulation.

**Parameters**:

* **sources**: : List of Feature object


**Returns**:

void.



**Parameters**:

* selfself
* sourcessources

**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1a0ec813b00b8afd7a9702b5cf2f1525b2"></a>
### Function AddGeometries

![][public]

```python
AddGeometries(self, tags)
```

Adds geometries into the simulation.

The AddGeometries function takes a list of feature tag as parameter. 
**Parameters**:

* **tags**: : List of integer.


**Returns**:

void.



**Parameters**:

* selfself
* tagstags

**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1a30e21d1cd47e7d87d547daede1cb45e4"></a>
### Function RemoveGeometries

![][public]

```python
RemoveGeometries(self, tags)
```

Deletes geometries from the simulation.

The DeleteGeometries function takes a list of feature tag as parameter. 
**Parameters**:

* **tags**: : List of integer.


**Returns**:

void.



**Parameters**:

* selfself
* tagstags

**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1a2823ee2dcd595a45c1870bcaf47205e2"></a>
### Function AddSensors

![][public]

```python
AddSensors(self, sensors)
```

Adds sensors into the simulation.

**Parameters**:

* **sensors**: : List of Feature object.


**Returns**:

void.



**Parameters**:

* selfself
* sensorssensors

**Return type**: 

<a id="class_speos_n_x_1_1_simulation_common_builder_1a2cdb6d650a57ad372cff24bcf8e6ad10"></a>
### Function RemoveSensors

![][public]

```python
RemoveSensors(self, sensors)
```

Deletes sensors from the simulation.

**Parameters**:

* **sensors**: : List of Feature object.


**Returns**:

void.



**Parameters**:

* selfself
* sensorssensors

**Return type**: 

[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[public]: https://img.shields.io/badge/-public-brightgreen (public)