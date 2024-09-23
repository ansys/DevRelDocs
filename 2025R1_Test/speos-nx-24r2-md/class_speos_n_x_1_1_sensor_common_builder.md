<a id="class_speos_n_x_1_1_sensor_common_builder"></a>
# Class SpeosNX::SensorCommonBuilder

![][Python]
![][public]

**Definition**: `SpeosNX.py` (line 8232)

A base class for all Sensor Builders.

A Builder is an object that is used to create and edit Features.





This is an abstract class that provides the basic functionality common to all builders. See the Builder subclasses for details of application-specific builders.





This is an abstract class, and cannot be instantiated.

**Inherits from**:

* [FeatureBuilder](class_speos_n_x_1_1_feature_builder.md#class_speos_n_x_1_1_feature_builder)

**Inherited by**:

* [SensorIntensityBuilder](class_speos_n_x_1_1_sensor_intensity_builder.md#class_speos_n_x_1_1_sensor_intensity_builder)
* [SensorIrradianceBuilder](class_speos_n_x_1_1_sensor_irradiance_builder.md#class_speos_n_x_1_1_sensor_irradiance_builder)
* [SensorRadianceBuilder](class_speos_n_x_1_1_sensor_radiance_builder.md#class_speos_n_x_1_1_sensor_radiance_builder)

## Members

* [\_\_del\_\_](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1ad688cc6fcbdc96a0f324fecb70876255)
* [\_\_getattr\_\_](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a09cde44d6716fb83c9aabc93abc1fdb4)
* [\_\_GetAxisSystem](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1ac4c4be3eb50d02d279046d98c1d6130d)
* [\_\_GetDimensionFromFile](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1ae19966418386d71fab64df6802430f07)
* [\_\_GetDisplayPropertiesFromFile](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a4bc1089d1b2573efd93ac0eeacd0d336)
* [\_\_GetGridOriginX](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a80f378e6ebf1cba00b866e1e36b03e3e)
* [\_\_GetGridOriginY](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a079315e3588da68b35a2f583d74335c0)
* [\_\_GetGridStepX](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a24ee0f217ad39a19d868d86d88fd33d9)
* [\_\_GetGridStepY](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1afec191870d9577558c3085c4a8c275fc)
* [\_\_GetSensorFilter](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a00343608abc2f67d040446a050243386)
* [\_\_GetShowGrid](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a24e15109ced51db931b59e3ea8289b19)
* [\_\_GetTemplateFilePath](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a016aed59e77ec39e26973516e46536d1)
* [\_\_GetTemplateType](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a7b0ceb0fef464451c63cbfbda09ece05)
* [\_\_GetType](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a83a144fa677ed796d4e9a89eecc15e29)
* [\_\_GetUseTemplateFile](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1ababcd8b370ed988740db309d7b06b77f)
* [\_\_GetWavelengthEnd](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1ae5083068b6536695ab95933f0277c662)
* [\_\_GetWavelengthResolution](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a9fbd2c1dc4dd711c3c4bd41fd09ae5df)
* [\_\_GetWavelengthSampling](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a4e9b3ec78474d31a23bc7b733005d7b8)
* [\_\_GetWavelengthStart](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a77a2e03bfdfaf11ccd39fddd7ace99ed)
* [\_\_GetXEnd](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1ac4d98ef744898dd28f43b2d179130cd6)
* [\_\_GetXMirroredExtent](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a56a74a84ae0f65efc51d19b097df1c59)
* [\_\_GetXResolution](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a790a00692a117c207a4701668994c9ca)
* [\_\_GetXSampling](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a1f375f6e6f7c73789846582f72b0c15e)
* [\_\_GetXStart](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1ac6a4bb8fcc3d325f42ade185e481f464)
* [\_\_GetYEnd](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a508be3f0bb72d0b06153c5605bb30337)
* [\_\_GetYMirroredExtent](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1afa2bb965d011917b7453fba9c5d6933c)
* [\_\_GetYResolution](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a7de71ca988b04cbe366efb9cca800882)
* [\_\_GetYSampling](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a5bb0b31978542a343a9c280c0d36ce5c)
* [\_\_GetYStart](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1aa0a8d19cd602348dc0b1cd0ccdc43c6f)
* [\_\_repr\_\_](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1af5ed824d5057546af31e81c6f8645990)
* [\_\_setattr\_\_](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a4a647adca30982afb5e85e6629f632c9)
* [\_\_SetDimensionFromFile](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1aca90349bc315c5302265d9415a43f7c4)
* [\_\_SetDisplayPropertiesFromFile](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1af9cfefb9ba9b10e4754c0afe3cdabcf5)
* [\_\_SetGridOriginX](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a4614aba8718cffc850b7822407339d9c)
* [\_\_SetGridOriginY](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a8a5928081aa31955ff5f7534923f8245)
* [\_\_SetGridStepX](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a266e834f1715b6d9e214eaaeb5f04d63)
* [\_\_SetGridStepY](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a4d643c8ed72082fc6ff0b2469e2e37cb)
* [\_\_SetShowGrid](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a6e8059a269170d4b0e44d9795abe6fb9)
* [\_\_SetTemplateFilePath](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a3747089e79c271f6458da2be94bdc908)
* [\_\_SetType](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a2ecfbddb2778882c830d54f9a0e7fa99)
* [\_\_SetUseTemplateFile](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a6fcb7c5e0bcd7ff7a42371855c2f7d24)
* [\_\_SetWavelengthEnd](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a1586fa50eb5e8ba09dd85684e2e387ce)
* [\_\_SetWavelengthResolution](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1ad33e7dc8bb4ddf2ff54d27f578f3d0c3)
* [\_\_SetWavelengthSampling](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1aa3dec1d751cb7a2b6c71ac626fff44c3)
* [\_\_SetWavelengthStart](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a4fb2dadea4dd31ca4d125c3b16c7b73c)
* [\_\_SetXEnd](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a6e3b5ba8492e8fb267d2e5dc7afc4b27)
* [\_\_SetXMirroredExtent](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a572b30dd05876a5b888e36194e8e9733)
* [\_\_SetXResolution](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a3cda4d5118ab678e15a19e1e5ec9ef37)
* [\_\_SetXSampling](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a30da760e2dc87853486660c98aa14425)
* [\_\_SetXStart](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a3156dc7d3ed576f8be8b0498badf8744)
* [\_\_SetYEnd](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1aad85e109ed3793a67ac436ce34a6bde7)
* [\_\_SetYMirroredExtent](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a3f5aafb44ab662f29dcf98731d4123f7)
* [\_\_SetYResolution](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a4771fd3ffcc355ea4eb4f4007245f8aa)
* [\_\_SetYSampling](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a313816b62ca0de1960b0395153c54b1e)
* [\_\_SetYStart](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a383da302b752ab18077a9ac29bd20f15)
* [\_\_swig\_destroy\_\_](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1ad5d12361526dc7cfb7b24a2e5ddc5162)
* [\_\_swig\_getmethods\_\_](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a0b80c350dac1ed9c1dbecdb473550cad)
* [\_\_swig\_setmethods\_\_](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1ac0e4d110feec6c2d791145b575d66fd6)
* [AxisSystem](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a4c4b8fa4fecce1d2737f605f77e7320a)
* [DimensionFromFile](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a200f2a3daa2b2e8c9dba7873c8113575)
* [DisplayPropertiesFromFile](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a25c27255cdce9925fc0388178c130b7e)
* [GridOriginX](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a5c64608c9fc8d2352e5deb9c2b74b3a4)
* [GridOriginY](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1aea68e71b420f605044061b8570cb2ca5)
* [GridStepX](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1ada9eb3eb967aa429dc2e928c8b2db09a)
* [GridStepY](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a1ad5c904b94df862b400a77756ffc7b0)
* [IsTemplateFileValid](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a9a725904d2ac3064228522e114d1c878)
* [SensorFilter](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1acbb4440b4c2ca6ed44ed6a3bab96d968)
* [ShowGrid](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a5878def1d46a8ca655fbe382ad940c68)
* [TemplateFilePath](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a829318693665dfa6aa63290394cea703)
* [TemplateType](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1ae080d6e5f74a3b1767c6a7b89b47530d)
* [Type](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a1d1cfd8ffb84e947f82999c682b666a7)
* [UseTemplateFile](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1aed80ae56dc61e75287ff3691ecd3460d)
* [WavelengthEnd](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a46bde9dee090ea55c3b34fdfeedd8c4c)
* [WavelengthResolution](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1ae7d4742766f2a2e3468a5a9422e7920c)
* [WavelengthSampling](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1ac0504254907d817707b6771948e9affe)
* [WavelengthStart](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a437eeee4ad26212fa85c30cfbf5b09c8)
* [XEnd](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a799203cf9eff20a5ef568bbc1b9d1a47)
* [XMirroredExtent](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a78fc5a48a0a4a6282855a28240b3f94a)
* [XResolution](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a96287c228b691e8c81135fbb396e7478)
* [XSampling](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a540f4cef446490f932858988d28b9b8b)
* [XStart](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a7963a0ff7bd1a05f42907b2e4a8912fb)
* [YEnd](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a9695e3ae4ea46b87955435354389d31e)
* [YMirroredExtent](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1aa912900c157c45f922fdb9ebdf4ae54d)
* [YResolution](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a3a4e7b1dd022a48e387495568b68fb6c)
* [YSampling](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a27b575c86195f02c2d904e8563e498b3)
* [YStart](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder_1a11a4148336b7022a46cbcf4c1706b179)

## Private static attributes

<a id="class_speos_n_x_1_1_sensor_common_builder_1ac0e4d110feec6c2d791145b575d66fd6"></a>
### Variable \_\_swig\_setmethods\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 8243)

```python
dict __swig_setmethods__ =  {}
```







**Type**: dict

<a id="class_speos_n_x_1_1_sensor_common_builder_1a4a647adca30982afb5e85e6629f632c9"></a>
### Variable \_\_setattr\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 8246)

```python
_swig_setattr __setattr__ =  lambda self, name, value(self, [SensorCommonBuilder](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder), name, value)
```







**Type**: _swig_setattr

<a id="class_speos_n_x_1_1_sensor_common_builder_1a0b80c350dac1ed9c1dbecdb473550cad"></a>
### Variable \_\_swig\_getmethods\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 8247)

```python
dict __swig_getmethods__ =  {}
```







**Type**: dict

<a id="class_speos_n_x_1_1_sensor_common_builder_1a09cde44d6716fb83c9aabc93abc1fdb4"></a>
### Variable \_\_getattr\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 8250)

```python
_swig_getattr __getattr__ =  lambda self, name(self, [SensorCommonBuilder](class_speos_n_x_1_1_sensor_common_builder.md#class_speos_n_x_1_1_sensor_common_builder), name)
```







**Type**: _swig_getattr

<a id="class_speos_n_x_1_1_sensor_common_builder_1af5ed824d5057546af31e81c6f8645990"></a>
### Variable \_\_repr\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 8254)

```python
__repr__ =  _swig_repr
```







**Type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1ad5d12361526dc7cfb7b24a2e5ddc5162"></a>
### Variable \_\_swig\_destroy\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 8255)

```python
__swig_destroy__ =  _SpeosNX.delete_SensorCommonBuilder
```







**Type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1ad688cc6fcbdc96a0f324fecb70876255"></a>
### Variable \_\_del\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 8256)

```python
None __del__ =  lambda self
```







**Type**: None

## Properties

<a id="class_speos_n_x_1_1_sensor_common_builder_1a4c4b8fa4fecce1d2737f605f77e7320a"></a>
### Property AxisSystem

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 8425)

```python
AxisSystem
```

Gets the Axis System of the Sensor.

**Value type**: AxisSystem object.



**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a200f2a3daa2b2e8c9dba7873c8113575"></a>
### Property DimensionFromFile

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 8435)

```python
DimensionFromFile
```

Gets or sets the property to enable the use of dimensions that come from File.

True: Uses the following values from the XMP template: type, X and Y size, Wavelength values.<br/>
 False: Does not use the dimension from file.<br/>






**Value type**: Boolean.<br/>






The default value is False.



**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a25c27255cdce9925fc0388178c130b7e"></a>
### Property DisplayPropertiesFromFile

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 8445)

```python
DisplayPropertiesFromFile
```

Gets or sets the property to enable the use of display properties that come from File.

True: Uses all the grid related values from the .xml file.<br/>
 False: Does not use the Display properties from file.<br/>






**Value type**: Boolean.<br/>






The default value is False.



**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a5c64608c9fc8d2352e5deb9c2b74b3a4"></a>
### Property GridOriginX

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 8452)

```python
GridOriginX
```

Gets or sets the grid X origin.

**Value type**: Double.<br/>






The default value is 0.0.



**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1aea68e71b420f605044061b8570cb2ca5"></a>
### Property GridOriginY

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 8459)

```python
GridOriginY
```

Gets or sets the grid Y origin.

**Value type**: Double.<br/>






The default value is 0.0.



**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1ada9eb3eb967aa429dc2e928c8b2db09a"></a>
### Property GridStepX

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 8467)

```python
GridStepX
```

Gets or sets the grid X step.

**Value type**: Double.<br/>
 **Range**: The value must be superior to 0.<br/>






The default value is 10.0.



**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a1ad5c904b94df862b400a77756ffc7b0"></a>
### Property GridStepY

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 8475)

```python
GridStepY
```

Gets or sets the grid Y step.

**Value type**: Double.<br/>
 **Range**: The value must be superior to 0.<br/>






The default value is 10.0.



**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1acbb4440b4c2ca6ed44ed6a3bab96d968"></a>
### Property SensorFilter

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 8480)

```python
SensorFilter
```

Gets the sensor filter.

**Value type**: SensorFilter object.



**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a5878def1d46a8ca655fbe382ad940c68"></a>
### Property ShowGrid

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 8490)

```python
ShowGrid
```

Gets or sets the property to enable grid preview.

True: Displays a grid on the sensor.<br/>
 False: Does not display a grid on the sensor.<br/>






**Value type**: Boolean.<br/>






The default value is True.



**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a829318693665dfa6aa63290394cea703"></a>
### Property TemplateFilePath

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 8497)

```python
TemplateFilePath
```

Gets or sets the template file's path.

**Value type**: String.<br/>






The default value is an empty string.



**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1ae080d6e5f74a3b1767c6a7b89b47530d"></a>
### Property TemplateType

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 8509)

```python
TemplateType
```

Gets or sets the template type.

The values are:<br/>
 0 - None<br/>
 1 - Measure<br/>
 2 - Template <br/>






**Value type**: Integer.<br/>






The default value is 0.



**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a1d1cfd8ffb84e947f82999c682b666a7"></a>
### Property Type

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 8522)

```python
Type
```

Gets or sets the type of the sensor.

The values are:<br/>
 0 - Photometric, results in cd.<br/>
 1 - Colorimetric, color results in cd or W/sr.<br/>
 2 - Radiometric, results in W/sr.<br/>
 3 - Spectral, results in cd or W/sr.<br/>






**Value type**: Integer.<br/>






The default value is 0.



**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1aed80ae56dc61e75287ff3691ecd3460d"></a>
### Property UseTemplateFile

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 8530)

```python
UseTemplateFile
```

Gets or sets the property to enable the use of template file.

True: Enables Template File. <br/>
 False: Disables Template File. <br/>






**Value type**: Boolean.



**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a46bde9dee090ea55c3b34fdfeedd8c4c"></a>
### Property WavelengthEnd

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 8541)

```python
WavelengthEnd
```

Gets or sets the wavelength ending border.

**Prerequisite**: The Type property must be 1 or 3.<br/>






The sensor does not take account wavelengths beyond the borders that you define.<br/>






**Value type**: Double (in nm).<br/>






The default value is 700.0 nm.



**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1ae7d4742766f2a2e3468a5a9422e7920c"></a>
### Property WavelengthResolution

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 8548)

```python
WavelengthResolution
```

Gets or sets the Wavelength resolution.

**Prerequisite**: The Type property must be 1 or 3.<br/>






**Value type**: Double.<br/>



**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1ac0504254907d817707b6771948e9affe"></a>
### Property WavelengthSampling

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 8558)

```python
WavelengthSampling
```

Gets or sets the wavelength sampling.

**Prerequisite**: The Type property must be 1 or 3.<br/>






**Value type**: Integer.<br/>
 **Range**: The value must be superior to 0.<br/>






The default value is 13.



**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a437eeee4ad26212fa85c30cfbf5b09c8"></a>
### Property WavelengthStart

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 8569)

```python
WavelengthStart
```

Gets or sets the wavelength starting border.

**Prerequisite**: The Type property must be 1 or 3.<br/>






The sensor does not take account wavelengths beyond the borders that you define.<br/>






**Value type**: Double (in nm).<br/>






The default value is 400.0 nm.



**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a799203cf9eff20a5ef568bbc1b9d1a47"></a>
### Property XEnd

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 8576)

```python
XEnd
```

Gets or sets the Sensor X end dimension value.

**Value type**: Double (in mm).<br/>






The default value is 50.0 mm.



**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a78fc5a48a0a4a6282855a28240b3f94a"></a>
### Property XMirroredExtent

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 8586)

```python
XMirroredExtent
```

Gets the Sensor X dimension mirrored extent value.

True: XStart == -XEnd, you can only change the XEnd value.<br/>
 False: XStart and XEnd can have different value.<br/>






**Value type**: Boolean.<br/>






The default value is False.



**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a96287c228b691e8c81135fbb396e7478"></a>
### Property XResolution

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 8591)

```python
XResolution
```

Gets or sets the Sensor X dimension resolution value.

**Value type**: Double.



**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a540f4cef446490f932858988d28b9b8b"></a>
### Property XSampling

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 8598)

```python
XSampling
```

Gets or sets the Sensor X dimension sampling value.

**Value type**: Integer.<br/>






The default value is 100.



**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a7963a0ff7bd1a05f42907b2e4a8912fb"></a>
### Property XStart

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 8605)

```python
XStart
```

Gets or sets the Sensor X start dimension value.

**Value type**: Double (in mm).<br/>






The default value is -50.0 mm.



**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a9695e3ae4ea46b87955435354389d31e"></a>
### Property YEnd

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 8612)

```python
YEnd
```

Gets or sets the Sensor Y end dimension value.

**Value type**: Double (in mm).<br/>






The default value is 50.0 mm.



**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1aa912900c157c45f922fdb9ebdf4ae54d"></a>
### Property YMirroredExtent

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 8622)

```python
YMirroredExtent
```

Gets the Sensor Y dimension mirrored extent value.

True: YStart == -YEnd, you can only change the YEnd value.<br/>
 False: YStart and YEnd can have different value.<br/>






**Value type**: Boolean.<br/>






The default value is False.



**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a3a4e7b1dd022a48e387495568b68fb6c"></a>
### Property YResolution

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 8627)

```python
YResolution
```

Gets or sets the Sensor Y dimension resolution value.

**Value type**: Double.



**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a27b575c86195f02c2d904e8563e498b3"></a>
### Property YSampling

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 8634)

```python
YSampling
```

Gets or sets the Sensor Y dimension sampling value.

**Value type**: Integer.<br/>






The default value is 100.



**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a11a4148336b7022a46cbcf4c1706b179"></a>
### Property YStart

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 8641)

```python
YStart
```

Gets or sets the Sensor Y start dimension value.

**Value type**: Double (in mm).<br/>






The default value is -50.0 mm.



**Return type**: 

## Private functions

<a id="class_speos_n_x_1_1_sensor_common_builder_1a83a144fa677ed796d4e9a89eecc15e29"></a>
### Function \_\_GetType

![][private]

```python
__GetType(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a2ecfbddb2778882c830d54f9a0e7fa99"></a>
### Function \_\_SetType

![][private]

```python
__SetType(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1ac4c4be3eb50d02d279046d98c1d6130d"></a>
### Function \_\_GetAxisSystem

![][private]

```python
__GetAxisSystem(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1ac6a4bb8fcc3d325f42ade185e481f464"></a>
### Function \_\_GetXStart

![][private]

```python
__GetXStart(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a3156dc7d3ed576f8be8b0498badf8744"></a>
### Function \_\_SetXStart

![][private]

```python
__SetXStart(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1ac4d98ef744898dd28f43b2d179130cd6"></a>
### Function \_\_GetXEnd

![][private]

```python
__GetXEnd(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a6e3b5ba8492e8fb267d2e5dc7afc4b27"></a>
### Function \_\_SetXEnd

![][private]

```python
__SetXEnd(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a1f375f6e6f7c73789846582f72b0c15e"></a>
### Function \_\_GetXSampling

![][private]

```python
__GetXSampling(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a30da760e2dc87853486660c98aa14425"></a>
### Function \_\_SetXSampling

![][private]

```python
__SetXSampling(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a790a00692a117c207a4701668994c9ca"></a>
### Function \_\_GetXResolution

![][private]

```python
__GetXResolution(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a3cda4d5118ab678e15a19e1e5ec9ef37"></a>
### Function \_\_SetXResolution

![][private]

```python
__SetXResolution(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a56a74a84ae0f65efc51d19b097df1c59"></a>
### Function \_\_GetXMirroredExtent

![][private]

```python
__GetXMirroredExtent(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a572b30dd05876a5b888e36194e8e9733"></a>
### Function \_\_SetXMirroredExtent

![][private]

```python
__SetXMirroredExtent(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1aa0a8d19cd602348dc0b1cd0ccdc43c6f"></a>
### Function \_\_GetYStart

![][private]

```python
__GetYStart(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a383da302b752ab18077a9ac29bd20f15"></a>
### Function \_\_SetYStart

![][private]

```python
__SetYStart(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a508be3f0bb72d0b06153c5605bb30337"></a>
### Function \_\_GetYEnd

![][private]

```python
__GetYEnd(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1aad85e109ed3793a67ac436ce34a6bde7"></a>
### Function \_\_SetYEnd

![][private]

```python
__SetYEnd(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a5bb0b31978542a343a9c280c0d36ce5c"></a>
### Function \_\_GetYSampling

![][private]

```python
__GetYSampling(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a313816b62ca0de1960b0395153c54b1e"></a>
### Function \_\_SetYSampling

![][private]

```python
__SetYSampling(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a7de71ca988b04cbe366efb9cca800882"></a>
### Function \_\_GetYResolution

![][private]

```python
__GetYResolution(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a4771fd3ffcc355ea4eb4f4007245f8aa"></a>
### Function \_\_SetYResolution

![][private]

```python
__SetYResolution(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1afa2bb965d011917b7453fba9c5d6933c"></a>
### Function \_\_GetYMirroredExtent

![][private]

```python
__GetYMirroredExtent(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a3f5aafb44ab662f29dcf98731d4123f7"></a>
### Function \_\_SetYMirroredExtent

![][private]

```python
__SetYMirroredExtent(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a77a2e03bfdfaf11ccd39fddd7ace99ed"></a>
### Function \_\_GetWavelengthStart

![][private]

```python
__GetWavelengthStart(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a4fb2dadea4dd31ca4d125c3b16c7b73c"></a>
### Function \_\_SetWavelengthStart

![][private]

```python
__SetWavelengthStart(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1ae5083068b6536695ab95933f0277c662"></a>
### Function \_\_GetWavelengthEnd

![][private]

```python
__GetWavelengthEnd(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a1586fa50eb5e8ba09dd85684e2e387ce"></a>
### Function \_\_SetWavelengthEnd

![][private]

```python
__SetWavelengthEnd(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a4e9b3ec78474d31a23bc7b733005d7b8"></a>
### Function \_\_GetWavelengthSampling

![][private]

```python
__GetWavelengthSampling(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1aa3dec1d751cb7a2b6c71ac626fff44c3"></a>
### Function \_\_SetWavelengthSampling

![][private]

```python
__SetWavelengthSampling(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a9fbd2c1dc4dd711c3c4bd41fd09ae5df"></a>
### Function \_\_GetWavelengthResolution

![][private]

```python
__GetWavelengthResolution(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1ad33e7dc8bb4ddf2ff54d27f578f3d0c3"></a>
### Function \_\_SetWavelengthResolution

![][private]

```python
__SetWavelengthResolution(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1ababcd8b370ed988740db309d7b06b77f"></a>
### Function \_\_GetUseTemplateFile

![][private]

```python
__GetUseTemplateFile(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a6fcb7c5e0bcd7ff7a42371855c2f7d24"></a>
### Function \_\_SetUseTemplateFile

![][private]

```python
__SetUseTemplateFile(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1ae19966418386d71fab64df6802430f07"></a>
### Function \_\_GetDimensionFromFile

![][private]

```python
__GetDimensionFromFile(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1aca90349bc315c5302265d9415a43f7c4"></a>
### Function \_\_SetDimensionFromFile

![][private]

```python
__SetDimensionFromFile(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a4bc1089d1b2573efd93ac0eeacd0d336"></a>
### Function \_\_GetDisplayPropertiesFromFile

![][private]

```python
__GetDisplayPropertiesFromFile(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1af9cfefb9ba9b10e4754c0afe3cdabcf5"></a>
### Function \_\_SetDisplayPropertiesFromFile

![][private]

```python
__SetDisplayPropertiesFromFile(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a016aed59e77ec39e26973516e46536d1"></a>
### Function \_\_GetTemplateFilePath

![][private]

```python
__GetTemplateFilePath(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a3747089e79c271f6458da2be94bdc908"></a>
### Function \_\_SetTemplateFilePath

![][private]

```python
__SetTemplateFilePath(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a7b0ceb0fef464451c63cbfbda09ece05"></a>
### Function \_\_GetTemplateType

![][private]

```python
__GetTemplateType(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a00343608abc2f67d040446a050243386"></a>
### Function \_\_GetSensorFilter

![][private]

```python
__GetSensorFilter(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a24e15109ced51db931b59e3ea8289b19"></a>
### Function \_\_GetShowGrid

![][private]

```python
__GetShowGrid(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a6e8059a269170d4b0e44d9795abe6fb9"></a>
### Function \_\_SetShowGrid

![][private]

```python
__SetShowGrid(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a80f378e6ebf1cba00b866e1e36b03e3e"></a>
### Function \_\_GetGridOriginX

![][private]

```python
__GetGridOriginX(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a4614aba8718cffc850b7822407339d9c"></a>
### Function \_\_SetGridOriginX

![][private]

```python
__SetGridOriginX(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a079315e3588da68b35a2f583d74335c0"></a>
### Function \_\_GetGridOriginY

![][private]

```python
__GetGridOriginY(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a8a5928081aa31955ff5f7534923f8245"></a>
### Function \_\_SetGridOriginY

![][private]

```python
__SetGridOriginY(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a24ee0f217ad39a19d868d86d88fd33d9"></a>
### Function \_\_GetGridStepX

![][private]

```python
__GetGridStepX(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a266e834f1715b6d9e214eaaeb5f04d63"></a>
### Function \_\_SetGridStepX

![][private]

```python
__SetGridStepX(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1afec191870d9577558c3085c4a8c275fc"></a>
### Function \_\_GetGridStepY

![][private]

```python
__GetGridStepY(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_sensor_common_builder_1a4d643c8ed72082fc6ff0b2469e2e37cb"></a>
### Function \_\_SetGridStepY

![][private]

```python
__SetGridStepY(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

## Public functions

<a id="class_speos_n_x_1_1_sensor_common_builder_1a9a725904d2ac3064228522e114d1c878"></a>
### Function IsTemplateFileValid

![][public]

```python
IsTemplateFileValid(self)
```

Checks whether the template file is valid.

**Returns**:

True: The template file is valid.<br/>
 False: The template file is not valid.



**Parameters**:

* selfself

**Return type**: 

[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[public]: https://img.shields.io/badge/-public-brightgreen (public)