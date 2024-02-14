<a id="class_speos_n_x_1_1_source_surface_builder"></a>
# Class SpeosNX::SourceSurfaceBuilder

![][Python]
![][public]

**Definition**: `SpeosNX.py` (line 8872)

Builder of a Surface Source.

With a surface source, you can model the light emission of a source taking into account its physical properties as the flux, the spectrum, the exitance and the intensity. A surface source can be defined with any face in a geometry which emits rays.

**Inherits from**:

* [FeatureBuilder](class_speos_n_x_1_1_feature_builder.md#class_speos_n_x_1_1_feature_builder)

## Members

* [\_\_del\_\_](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ad688cc6fcbdc96a0f324fecb70876255)
* [\_\_GetAssociatedGeometries](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a61fae35a87a9a80d93b00b00c578e73e)
* [\_\_getattr\_\_](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a09cde44d6716fb83c9aabc93abc1fdb4)
* [\_\_GetEnumIntensityType](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a3a7410e54482746a0626c7811cf67eb5)
* [\_\_GetExitanceDistributionDirectionReverse](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a7d3c372c541da77524f8f5377723d722)
* [\_\_GetExitanceDistributionFile](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a429d154ca095c7a69b53bff58c76bfba)
* [\_\_GetExitanceOriginPoint](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a2ec15fa6a4b504bfe467c29b2ca1948e)
* [\_\_GetExitanceType](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a30f692e1d269a4d3bdc31143ead4e838)
* [\_\_GetExitanceXDirection](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a50c15ae9816d8255aae9979381b6bffc)
* [\_\_GetExitanceXDirectionReverse](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1aef31e83249041b989a9ecc29347f0552)
* [\_\_GetExitanceYDirection](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1abc1d4613656792d9954020da3c351a60)
* [\_\_GetExitanceYDirectionReverse](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1abb3fb371177a7ac0f9159812aed8e38f)
* [\_\_GetExitGeometries](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a3b5d731b41525fe5e73ef868801da2c3)
* [\_\_GetFlux](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a3eb0bb71991b0ef2702cedc4acdb5922)
* [\_\_GetFluxUnitType](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a30d6a021ac15ab3b0e357a7ebae25ed6)
* [\_\_GetIntensityDistributionFile](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a4801f4646a16cd910ced7c76cc312452)
* [\_\_GetIntensityFWHMAngle](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a4d74f628b09bd5a828c81a4bfb69a896)
* [\_\_GetIntensityFWHMAngleX](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ab2ea6a6a6ebaf6c0aefc8d8c2e8203a3)
* [\_\_GetIntensityFWHMAngleY](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ab42c2a5c41b3466d7b55ffeef76ef733)
* [\_\_GetIntensityN](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a5232734fed49339b2a0ef2584c3dccfb)
* [\_\_GetIntensityOrientationType](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ae9f71be25bf1a7fc11fe7a88a05ddf97)
* [\_\_GetIntensityTotalAngle](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a92b0234424ff48f9f8686dd30a1addfc)
* [\_\_GetIntensityXDirection](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a4ada229ee33b69aa6f022f9c15ba94b8)
* [\_\_GetIntensityXDirectionReverse](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a20ef6b186621e2b1cb930af9518077f8)
* [\_\_GetIntensityYDirection](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a4eb2857ac39aa92b3574c01f74203281)
* [\_\_GetIntensityYDirectionReverse](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ac747eed795a3ea3854230def2926b651)
* [\_\_GetNumberOfRays](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a99b09ce184aff89cedc8417927c50206)
* [\_\_GetRayLength](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a1eec44d8df0a29a1175e26d9c83c4e11)
* [\_\_GetShowIntensityDistribution](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a553def5b6efa4168de874681a0e92e4f)
* [\_\_GetSourceSurfaceEmissiveFaces](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a3bc242b62e80b87d28351fcd13d12ab5)
* [\_\_GetSpectrumFile](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1acf8ac6fe2e960fba1b3b0d8e6ea4ca53)
* [\_\_GetSpectrumType](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1aa8d9903e54a2103d1588714f4a20b7f3)
* [\_\_GetTemperature](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a3dd6398b4d54fcd35bf908a4648cc023)
* [\_\_GetToggleFluxFromFile](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a080568a247f983ec00fa45574a8b288f)
* [\_\_GetWavelength](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a68bf82b68ed2add8c5689e227914c834)
* [\_\_init\_\_](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a3c8689fcd9fdf3848bc1d79d8836b863)
* [\_\_repr\_\_](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1af5ed824d5057546af31e81c6f8645990)
* [\_\_SetAssociatedGeometries](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a2231fdb4068f55e025897eb2f34bf92a)
* [\_\_setattr\_\_](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a4a647adca30982afb5e85e6629f632c9)
* [\_\_SetEnumIntensityType](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a0cff02818fa923fe2410c13f14283732)
* [\_\_SetExitanceDistributionDirectionReverse](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ae787b296f5403e5a9a0d8be5237c6a2b)
* [\_\_SetExitanceDistributionFile](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1af1924a20a7c582012d7e3b862acf0bc8)
* [\_\_SetExitanceOriginPoint](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a9117323770c98abf599f849b9d3de267)
* [\_\_SetExitanceType](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a8e631752c9e40d326f20c2f753ca5c6f)
* [\_\_SetExitanceXDirection](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a4b3d63b415d1463724217e44e077fe0a)
* [\_\_SetExitanceXDirectionReverse](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a6557f0e0f9101904418100af3721067f)
* [\_\_SetExitanceYDirection](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1afa1b252c4be88c98a01e7d949f1260fd)
* [\_\_SetExitanceYDirectionReverse](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a6eb91c3939bf7701d5d62944f1173649)
* [\_\_SetExitGeometries](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ae897b56aa36eb4edc72657252200adc9)
* [\_\_SetFlux](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1aabc1ba70165165160d4c5db88b782618)
* [\_\_SetFluxUnitType](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ae8363f09adf4fdee74202f1244795a5d)
* [\_\_SetIntensityDistributionFile](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ac8749a6aa43b06a6372f83aa97e76dfc)
* [\_\_SetIntensityFWHMAngle](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ac944f328a9a1bc16eb1896eae27663dd)
* [\_\_SetIntensityFWHMAngleX](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ab9e69b349c2c0f02bc45d269255de27f)
* [\_\_SetIntensityFWHMAngleY](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1aff2806764271814c3ffd1aff0adf8976)
* [\_\_SetIntensityN](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a88a53599a87b40a6a43df8e270beea3d)
* [\_\_SetIntensityOrientationType](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a686091ffecb70383b0fc51b8183a9840)
* [\_\_SetIntensityTotalAngle](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1afa5bde87582fb65a29a586f3b6f7dc93)
* [\_\_SetIntensityXDirection](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1aa82dde22de818f253ae21b9306a47dea)
* [\_\_SetIntensityXDirectionReverse](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a2b3663c584b01c9729f10c3def1f32fa)
* [\_\_SetIntensityYDirection](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a3ca6c693a29a77e1e60c82dbcc14bcb0)
* [\_\_SetIntensityYDirectionReverse](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a0a4e55f4d9293eae3cda2f04a4ce30f9)
* [\_\_SetNumberOfRays](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1abbd1dbc5fde613b10681bf132dc105d2)
* [\_\_SetRayLength](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a9bad3ab23ffe82ad10b4b55329e954df)
* [\_\_SetShowIntensityDistribution](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ab2370538bb2dde506395b229bd15d806)
* [\_\_SetSpectrumFile](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a53917ff20b8505963026759aaac38d7a)
* [\_\_SetSpectrumType](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a9e3ed24a7dc820a5ccab4a727aef0209)
* [\_\_SetTemperature](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ab91f8bd2ef020b6cf7d1124d9f5045e3)
* [\_\_SetToggleFluxFromFile](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1aa6b59835c2b57109da0487c31f938052)
* [\_\_SetWavelength](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a5b8bcfdc84aadb29c23aba774f8b419a)
* [\_\_swig\_destroy\_\_](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ad5d12361526dc7cfb7b24a2e5ddc5162)
* [\_\_swig\_getmethods\_\_](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a0b80c350dac1ed9c1dbecdb473550cad)
* [\_\_swig\_setmethods\_\_](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ac0e4d110feec6c2d791145b575d66fd6)
* [AssociatedGeometries](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1acd5c50bcc6e4082d7357fe3f49674070)
* [EnumIntensityType](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ac7d957a83f7fa0dd0ac0f1ecc85690f2)
* [ExitanceDistributionDirectionReverse](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1aa656811053bd381f2d211c00b29b04d6)
* [ExitanceDistributionFile](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a81f5ec0e3dceeca0bbb9553d0838698f)
* [ExitanceOriginPoint](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a7eb20874c4f768763d36d2e712d9b386)
* [ExitanceType](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a17af4859e9eda3978484661f5799c04d)
* [ExitanceXDirection](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1aa2f822bd42982d10d8e4880007d80095)
* [ExitanceXDirectionReverse](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ac740dccf0187a9e866a143f77e09b8e3)
* [ExitanceYDirection](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a40368794b4d65bfc72994598665b9d8c)
* [ExitanceYDirectionReverse](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a902b71d363e4bbcdbafcdf4955745fdc)
* [ExitGeometries](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a1b3e2e30cce533f6cd5769c31fbaaee6)
* [Flux](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ad1e0e7fa3b1f2579a8f2bfc57e140398)
* [FluxUnitType](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a19213e851dc2e86c710e1bdbaca40148)
* [IntensityDistributionFile](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a6488a0b8376a29c390292dd354edbbbd)
* [IntensityFWHMAngle](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a8e02d008bf55e5fb0254febc1a5ca1c2)
* [IntensityFWHMAngleX](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ae7bfddce8da95979dad8c4d6a5ac1b4c)
* [IntensityFWHMAngleY](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a82bf04b99fe6813c5002de1ae00cc4df)
* [IntensityN](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a0fd51bc2b984fb30d147b7cf2abbc7d0)
* [IntensityOrientationType](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1afcfe16b0ea44dc5a0983e77e710ba427)
* [IntensityTotalAngle](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a0ae6efec532e823d1c1e5e1e130b4b70)
* [IntensityXDirection](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1aef75648f34ae65c4a6e61904d4b2eeb7)
* [IntensityXDirectionReverse](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1aa0accf725d119d67ad5d470f463ba1d6)
* [IntensityYDirection](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a807426a6360930d600bf4fce5b079c89)
* [IntensityYDirectionReverse](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a19883425f2b1dfafe95edc38434ad974)
* [NumberOfRays](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a622dc1d3ba1038d63b443881726aac17)
* [RayLength](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ac34ed0a90a26560cbc5671f5f0243421)
* [ShowIntensityDistribution](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a988eaa701eb99af6e535e4d8ce8d22c4)
* [SourceSurfaceEmissiveFaces](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a0fabe741798160d40fb71e63f231fc22)
* [SpectrumFile](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ae53e1c367f3b184287e767a768803b38)
* [SpectrumType](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ab7b974cef152e339967fce62f49de0d9)
* [Temperature](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a22805146ddc4f17f31d72c5b46ece079)
* [ToggleFluxFromFile](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1af56f4c78b80cabff2d1b9f1ef33b0d8c)
* [Wavelength](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a85db82823df8e3656be173155d4f48d7)

## Private static attributes

<a id="class_speos_n_x_1_1_source_surface_builder_1ac0e4d110feec6c2d791145b575d66fd6"></a>
### Variable \_\_swig\_setmethods\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 8879)

```python
dict __swig_setmethods__ =  {}
```







**Type**: dict

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__swig_setmethods__"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a4a647adca30982afb5e85e6629f632c9"></a>
### Variable \_\_setattr\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 8882)

```python
_swig_setattr __setattr__ =  lambda self, name, value(self, [SourceSurfaceBuilder](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder), name, value)
```







**Type**: _swig_setattr

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__setattr__"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a0b80c350dac1ed9c1dbecdb473550cad"></a>
### Variable \_\_swig\_getmethods\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 8883)

```python
dict __swig_getmethods__ =  {}
```







**Type**: dict

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__swig_getmethods__"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a09cde44d6716fb83c9aabc93abc1fdb4"></a>
### Variable \_\_getattr\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 8886)

```python
_swig_getattr __getattr__ =  lambda self, name(self, [SourceSurfaceBuilder](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder), name)
```







**Type**: _swig_getattr

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__getattr__"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1af5ed824d5057546af31e81c6f8645990"></a>
### Variable \_\_repr\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 8890)

```python
__repr__ =  _swig_repr
```







**Type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__repr__"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1ad5d12361526dc7cfb7b24a2e5ddc5162"></a>
### Variable \_\_swig\_destroy\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 8891)

```python
__swig_destroy__ =  _SpeosNX.delete_SourceSurfaceBuilder
```







**Type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__swig_destroy__"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1ad688cc6fcbdc96a0f324fecb70876255"></a>
### Variable \_\_del\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 8892)

```python
None __del__ =  lambda self
```







**Type**: None

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__del__"}]}

## Properties

<a id="class_speos_n_x_1_1_source_surface_builder_1acd5c50bcc6e4082d7357fe3f49674070"></a>
### Property AssociatedGeometries

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9095)

```python
AssociatedGeometries
```

Associated geometries.

The emissive faces of a light source are associated to a lot of geometrical bodies which play a role in the optical system. 
**Parameters**:

* **Property Set**: : List of integer (tag)


**Returns**:

Property Get : List of integer (tag)



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.AssociatedGeometries"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetAssociatedGeometries, fset = __SetAssociatedGeometries)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1ac7d957a83f7fa0dd0ac0f1ecc85690f2"></a>
### Property EnumIntensityType

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9106)

```python
EnumIntensityType
```

Intensity type of the light source.

0 : Lambertian<br/>
 1 : Cos<br/>
 2 : Sym Gaussian<br/>
 3 : Asym Gaussian<br/>
 4 : Library 
**Parameters**:

* **Property Set**: : integer [0, 4]


**Returns**:

Property Get : integer [0, 4]



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.EnumIntensityType"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetEnumIntensityType, fset = __SetEnumIntensityType)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a1b3e2e30cce533f6cd5769c31fbaaee6"></a>
### Property ExitGeometries

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9113)

```python
ExitGeometries
```

Exit geometries.

With the light source definition, you can take into account elements influencing intensity distribution as for example a bulb in the case of a light bulb or a lens in the case of a LED. 
**Parameters**:

* **Property Set**: : List of integer (tag)


**Returns**:

Property Get : List of integer (tag)



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.ExitGeometries"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetExitGeometries, fset = __SetExitGeometries)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1aa656811053bd381f2d211c00b29b04d6"></a>
### Property ExitanceDistributionDirectionReverse

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9121)

```python
ExitanceDistributionDirectionReverse
```

Reverse the exitance distribution.

True : Reverse the exitance distribution direction<br/>
 False : Not Reserse the exitance distribution direction 
**Parameters**:

* **Property Set**: : boolean


**Returns**:

Property Get : boolean



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.ExitanceDistributionDirectionReverse"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetExitanceDistributionDirectionReverse, fset = __SetExitanceDistributionDirectionReverse)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a81f5ec0e3dceeca0bbb9553d0838698f"></a>
### Property ExitanceDistributionFile

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9128)

```python
ExitanceDistributionFile
```

Existance Distribution File path.

When ExitanteType is set to 1, ExitanceDistributionFile is taken into account 
**Parameters**:

* **Property Set**: : string


**Returns**:

Property Get : string



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.ExitanceDistributionFile"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetExitanceDistributionFile, fset = __SetExitanceDistributionFile)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a7eb20874c4f768763d36d2e712d9b386"></a>
### Property ExitanceOriginPoint

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9134)

```python
ExitanceOriginPoint
```

Origin point of exitance.

The property takes the tag of a point as input and return the current select objet's tag as output 
**Parameters**:

* **Property Set**: : integer


**Returns**:

Property Get : integer



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.ExitanceOriginPoint"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetExitanceOriginPoint, fset = __SetExitanceOriginPoint)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a17af4859e9eda3978484661f5799c04d"></a>
### Property ExitanceType

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9142)

```python
ExitanceType
```

Exitance of a source describes how each point of a surface emits rays.

0 : Constant, ray energy is constant over surface source face.<br/>
 1 : Variable, ray energy depends on xmp energy distribution. 
**Parameters**:

* **Property Set**: : integer [0, 1]


**Returns**:

Property Get : integer [0, 1]



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.ExitanceType"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetExitanceType, fset = __SetExitanceType)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1aa2f822bd42982d10d8e4880007d80095"></a>
### Property ExitanceXDirection

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9148)

```python
ExitanceXDirection
```

X Direction of exitance.

The property takes the tag of a direction as input and return the current select objet's tag as output 
**Parameters**:

* **Property Set**: : integer


**Returns**:

Property Get : integer



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.ExitanceXDirection"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetExitanceXDirection, fset = __SetExitanceXDirection)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1ac740dccf0187a9e866a143f77e09b8e3"></a>
### Property ExitanceXDirectionReverse

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9156)

```python
ExitanceXDirectionReverse
```

Reverse the exitance of X direction.

True : Reverse the exitance direction X<br/>
 False : Not reverse the exitance direction X 
**Parameters**:

* **Property Set**: : boolean


**Returns**:

Property Get : boolean



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.ExitanceXDirectionReverse"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetExitanceXDirectionReverse, fset = __SetExitanceXDirectionReverse)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a40368794b4d65bfc72994598665b9d8c"></a>
### Property ExitanceYDirection

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9162)

```python
ExitanceYDirection
```

Y Direction of exitance.

The property takes the tag of a direction as input and return the current select objet's tag as output 
**Parameters**:

* **Property Set**: : integer


**Returns**:

Property Get : integer



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.ExitanceYDirection"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetExitanceYDirection, fset = __SetExitanceYDirection)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a902b71d363e4bbcdbafcdf4955745fdc"></a>
### Property ExitanceYDirectionReverse

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9171)

```python
ExitanceYDirectionReverse
```

Reverse the exitance of Y direction.

Read & Write, property boolean<br/>
<br/>
 True : Reverse the exitance direction Y<br/>
 False : Not reverse the exitance direction Y 
**Parameters**:

* **Property Set**: : boolean


**Returns**:

Property Get : boolean



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.ExitanceYDirectionReverse"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetExitanceYDirectionReverse, fset = __SetExitanceYDirectionReverse)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1ad1e0e7fa3b1f2579a8f2bfc57e140398"></a>
### Property Flux

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9178)

```python
Flux
```

Value of the flux.

The value depends on FluxUnitType 
**Parameters**:

* **Property Set**: : double


**Returns**:

Property Get : double



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.Flux"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetFlux, fset = __SetFlux)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a19213e851dc2e86c710e1bdbaca40148"></a>
### Property FluxUnitType

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9187)

```python
FluxUnitType
```

Unit of the flux.

0 : lm<br/>
 1 : W<br/>
 2 : cd 
**Parameters**:

* **Property Set**: : integer [0, 2]


**Returns**:

Property Get : Integer [0, 2]



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.FluxUnitType"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetFluxUnitType, fset = __SetFluxUnitType)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a6488a0b8376a29c390292dd354edbbbd"></a>
### Property IntensityDistributionFile

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9194)

```python
IntensityDistributionFile
```

Distribution file.

Taken into account if EnumIntensityType = 4 
**Parameters**:

* **Property Set**: : string


**Returns**:

Property Get : string



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.IntensityDistributionFile"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetIntensityDistributionFile, fset = __SetIntensityDistributionFile)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a8e02d008bf55e5fb0254febc1a5ca1c2"></a>
### Property IntensityFWHMAngle

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9201)

```python
IntensityFWHMAngle
```

FWHM Angle.

Taken into account if EnumIntensityType = 2 
**Parameters**:

* **Property Set**: : double


**Returns**:

Property Get : double



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.IntensityFWHMAngle"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetIntensityFWHMAngle, fset = __SetIntensityFWHMAngle)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1ae7bfddce8da95979dad8c4d6a5ac1b4c"></a>
### Property IntensityFWHMAngleX

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9208)

```python
IntensityFWHMAngleX
```

FWHM Angle X.

Taken into account if EnumIntensityType = 3 
**Parameters**:

* **Property Set**: : double


**Returns**:

Property Get : double



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.IntensityFWHMAngleX"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetIntensityFWHMAngleX, fset = __SetIntensityFWHMAngleX)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a82bf04b99fe6813c5002de1ae00cc4df"></a>
### Property IntensityFWHMAngleY

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9215)

```python
IntensityFWHMAngleY
```

FWHM Angle Y.

Taken into account if EnumIntensityType = 3 
**Parameters**:

* **Property Set**: : double


**Returns**:

Property Get : double



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.IntensityFWHMAngleY"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetIntensityFWHMAngleY, fset = __SetIntensityFWHMAngleY)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a0fd51bc2b984fb30d147b7cf2abbc7d0"></a>
### Property IntensityN

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9222)

```python
IntensityN
```

N.

Taken into account if EnumIntensityType = 1 
**Parameters**:

* **Property Set**: : double


**Returns**:

Property Get : double



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.IntensityN"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetIntensityN, fset = __SetIntensityN)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1afcfe16b0ea44dc5a0983e77e710ba427"></a>
### Property IntensityOrientationType

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9231)

```python
IntensityOrientationType
```

Orientation type.

0 : AxisSystem<br/>
 1 : NormalToSurface<br/>
 2 : NormalToUVMap 
**Parameters**:

* **Property Set**: : integer [0, 2]


**Returns**:

Property Get : integer [0, 2]



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.IntensityOrientationType"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetIntensityOrientationType, fset = __SetIntensityOrientationType)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a0ae6efec532e823d1c1e5e1e130b4b70"></a>
### Property IntensityTotalAngle

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9238)

```python
IntensityTotalAngle
```

Total Angle.

Taken into account if EnumIntensityType = 0, 1, 2 or 3 
**Parameters**:

* **Property Set**: : double


**Returns**:

Property Get : double



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.IntensityTotalAngle"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetIntensityTotalAngle, fset = __SetIntensityTotalAngle)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1aef75648f34ae65c4a6e61904d4b2eeb7"></a>
### Property IntensityXDirection

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9245)

```python
IntensityXDirection
```

Select the intensity Y Direction.

Taken into account if EnumIntensityType = 3 
**Parameters**:

* **Property Set**: : integer (tag)


**Returns**:

Property Get : integer (tag)



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.IntensityXDirection"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetIntensityXDirection, fset = __SetIntensityXDirection)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1aa0accf725d119d67ad5d470f463ba1d6"></a>
### Property IntensityXDirectionReverse

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9254)

```python
IntensityXDirectionReverse
```

Reverse intensity X Direction.

Taken into account if EnumIntensityType = 3<br/>
 True : Reverse X direction False : Not reverse X direction 
**Parameters**:

* **Property Set**: : boolean


**Returns**:

Property Get : boolean



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.IntensityXDirectionReverse"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetIntensityXDirectionReverse, fset = __SetIntensityXDirectionReverse)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a807426a6360930d600bf4fce5b079c89"></a>
### Property IntensityYDirection

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9261)

```python
IntensityYDirection
```

Select the intensity X Direction.

Taken into account if EnumIntensityType = 3 
**Parameters**:

* **Property Set**: : integer (tag)


**Returns**:

Property Get : integer (tag)



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.IntensityYDirection"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetIntensityYDirection, fset = __SetIntensityYDirection)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a19883425f2b1dfafe95edc38434ad974"></a>
### Property IntensityYDirectionReverse

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9270)

```python
IntensityYDirectionReverse
```

Reverse intensity Y Direction.

Taken into account if EnumIntensityType = 3 True : Reverse Y direction False : Not reverse Y direction 
**Parameters**:

* **Property Set**: : boolean


**Returns**:

Property Get : boolean



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.IntensityYDirectionReverse"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetIntensityYDirectionReverse, fset = __SetIntensityYDirectionReverse)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a622dc1d3ba1038d63b443881726aac17"></a>
### Property NumberOfRays

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9276)

```python
NumberOfRays
```

Number of rays.

Edit the value to set the number of rays displayed in the preview. 
**Parameters**:

* **Property Set**: : integer


**Returns**:

Property Get : integer



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.NumberOfRays"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetNumberOfRays, fset = __SetNumberOfRays)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1ac34ed0a90a26560cbc5671f5f0243421"></a>
### Property RayLength

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9282)

```python
RayLength
```

Ray length.

Edit the value to set the length of the rays preview in the 3D view. 
**Parameters**:

* **Property Set**: double


**Returns**:

Property Get : double



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.RayLength"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetRayLength, fset = __SetRayLength)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a988eaa701eb99af6e535e4d8ce8d22c4"></a>
### Property ShowIntensityDistribution

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9290)

```python
ShowIntensityDistribution
```

Shows the intensity distribution.

True : Show the intensity distribution in the preview False : Not show the intensity distribution in the preview 
**Parameters**:

* **Property Set**: : boolean


**Returns**:

Property Get : boolean



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.ShowIntensityDistribution"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetShowIntensityDistribution, fset = __SetShowIntensityDistribution)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a0fabe741798160d40fb71e63f231fc22"></a>
### Property SourceSurfaceEmissiveFaces

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9294)

```python
SourceSurfaceEmissiveFaces
```

Get a list of emissive faces.

**Returns**:

Property Get : SourceSurfaceEmissiveFaces



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.SourceSurfaceEmissiveFaces"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetSourceSurfaceEmissiveFaces)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1ae53e1c367f3b184287e767a768803b38"></a>
### Property SpectrumFile

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9301)

```python
SpectrumFile
```

Spectrum File.

Select a file path 
**Parameters**:

* **Property Set**: : string


**Returns**:

Property Get : string



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.SpectrumFile"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetSpectrumFile, fset = __SetSpectrumFile)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1ab7b974cef152e339967fce62f49de0d9"></a>
### Property SpectrumType

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9310)

```python
SpectrumType
```

Spectrum type.

0 : Monochromatic, you can edit the wavelength value<br/>
 1 : Blackbody, you can edit the temperature value<br/>
 2 : Library, you can browse a .spectrum file 
**Parameters**:

* **Property Set**: : integer [0, 2]


**Returns**:

Property Get : integer [0, 2]



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.SpectrumType"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetSpectrumType, fset = __SetSpectrumType)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a22805146ddc4f17f31d72c5b46ece079"></a>
### Property Temperature

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9317)

```python
Temperature
```

Temperature.

Temperature is in Kelvin 
**Parameters**:

* **Property Set**: : double


**Returns**:

Property Get : double



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.Temperature"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetTemperature, fset = __SetTemperature)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1af56f4c78b80cabff2d1b9f1ef33b0d8c"></a>
### Property ToggleFluxFromFile

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9325)

```python
ToggleFluxFromFile
```

Toggle the use of a flux from a file.

True : Using a flux from a file<br/>
 False : Not using a flux from a file 
**Parameters**:

* **Property Set**: : boolean


**Returns**:

Property Get : boolean



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.ToggleFluxFromFile"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetToggleFluxFromFile, fset = __SetToggleFluxFromFile)"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a85db82823df8e3656be173155d4f48d7"></a>
### Property Wavelength

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 9332)

```python
Wavelength
```

Wavelength.

Wavelength in nm 
**Parameters**:

* **Property Set**: : double


**Returns**:

Property Get : double



**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.Wavelength"}]}
* initializer {"type":"element","name":"initializer","attributes":{},"children":[{"type":"text","text":"=  property(fget = __GetWavelength, fset = __SetWavelength)"}]}

## Public functions

<a id="class_speos_n_x_1_1_source_surface_builder_1a3c8689fcd9fdf3848bc1d79d8836b863"></a>
### Function \_\_init\_\_

![][public]

```python
__init__(self, *args, **kwargs)
```







**Parameters**:

* selfself
* * **args**
* ** **kwargs**

**Return type**: 

**Reimplements**: [\_\_init\_\_](class_speos_n_x_1_1_feature_builder.md#class_speos_n_x_1_1_feature_builder_1a3c8689fcd9fdf3848bc1d79d8836b863)

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__init__"}]}

## Private functions

<a id="class_speos_n_x_1_1_source_surface_builder_1a30d6a021ac15ab3b0e357a7ebae25ed6"></a>
### Function \_\_GetFluxUnitType

![][private]

```python
__GetFluxUnitType(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetFluxUnitType"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1ae8363f09adf4fdee74202f1244795a5d"></a>
### Function \_\_SetFluxUnitType

![][private]

```python
__SetFluxUnitType(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetFluxUnitType"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a3eb0bb71991b0ef2702cedc4acdb5922"></a>
### Function \_\_GetFlux

![][private]

```python
__GetFlux(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetFlux"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1aabc1ba70165165160d4c5db88b782618"></a>
### Function \_\_SetFlux

![][private]

```python
__SetFlux(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetFlux"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a080568a247f983ec00fa45574a8b288f"></a>
### Function \_\_GetToggleFluxFromFile

![][private]

```python
__GetToggleFluxFromFile(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetToggleFluxFromFile"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1aa6b59835c2b57109da0487c31f938052"></a>
### Function \_\_SetToggleFluxFromFile

![][private]

```python
__SetToggleFluxFromFile(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetToggleFluxFromFile"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1aa8d9903e54a2103d1588714f4a20b7f3"></a>
### Function \_\_GetSpectrumType

![][private]

```python
__GetSpectrumType(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetSpectrumType"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a9e3ed24a7dc820a5ccab4a727aef0209"></a>
### Function \_\_SetSpectrumType

![][private]

```python
__SetSpectrumType(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetSpectrumType"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a68bf82b68ed2add8c5689e227914c834"></a>
### Function \_\_GetWavelength

![][private]

```python
__GetWavelength(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetWavelength"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a5b8bcfdc84aadb29c23aba774f8b419a"></a>
### Function \_\_SetWavelength

![][private]

```python
__SetWavelength(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetWavelength"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a3dd6398b4d54fcd35bf908a4648cc023"></a>
### Function \_\_GetTemperature

![][private]

```python
__GetTemperature(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetTemperature"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1ab91f8bd2ef020b6cf7d1124d9f5045e3"></a>
### Function \_\_SetTemperature

![][private]

```python
__SetTemperature(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetTemperature"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1acf8ac6fe2e960fba1b3b0d8e6ea4ca53"></a>
### Function \_\_GetSpectrumFile

![][private]

```python
__GetSpectrumFile(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetSpectrumFile"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a53917ff20b8505963026759aaac38d7a"></a>
### Function \_\_SetSpectrumFile

![][private]

```python
__SetSpectrumFile(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetSpectrumFile"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a30f692e1d269a4d3bdc31143ead4e838"></a>
### Function \_\_GetExitanceType

![][private]

```python
__GetExitanceType(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetExitanceType"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a8e631752c9e40d326f20c2f753ca5c6f"></a>
### Function \_\_SetExitanceType

![][private]

```python
__SetExitanceType(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetExitanceType"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a429d154ca095c7a69b53bff58c76bfba"></a>
### Function \_\_GetExitanceDistributionFile

![][private]

```python
__GetExitanceDistributionFile(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetExitanceDistributionFile"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1af1924a20a7c582012d7e3b862acf0bc8"></a>
### Function \_\_SetExitanceDistributionFile

![][private]

```python
__SetExitanceDistributionFile(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetExitanceDistributionFile"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a3bc242b62e80b87d28351fcd13d12ab5"></a>
### Function \_\_GetSourceSurfaceEmissiveFaces

![][private]

```python
__GetSourceSurfaceEmissiveFaces(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetSourceSurfaceEmissiveFaces"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a7d3c372c541da77524f8f5377723d722"></a>
### Function \_\_GetExitanceDistributionDirectionReverse

![][private]

```python
__GetExitanceDistributionDirectionReverse(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetExitanceDistributionDirectionReverse"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1ae787b296f5403e5a9a0d8be5237c6a2b"></a>
### Function \_\_SetExitanceDistributionDirectionReverse

![][private]

```python
__SetExitanceDistributionDirectionReverse(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetExitanceDistributionDirectionReverse"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1aef31e83249041b989a9ecc29347f0552"></a>
### Function \_\_GetExitanceXDirectionReverse

![][private]

```python
__GetExitanceXDirectionReverse(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetExitanceXDirectionReverse"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a6557f0e0f9101904418100af3721067f"></a>
### Function \_\_SetExitanceXDirectionReverse

![][private]

```python
__SetExitanceXDirectionReverse(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetExitanceXDirectionReverse"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1abb3fb371177a7ac0f9159812aed8e38f"></a>
### Function \_\_GetExitanceYDirectionReverse

![][private]

```python
__GetExitanceYDirectionReverse(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetExitanceYDirectionReverse"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a6eb91c3939bf7701d5d62944f1173649"></a>
### Function \_\_SetExitanceYDirectionReverse

![][private]

```python
__SetExitanceYDirectionReverse(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetExitanceYDirectionReverse"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a2ec15fa6a4b504bfe467c29b2ca1948e"></a>
### Function \_\_GetExitanceOriginPoint

![][private]

```python
__GetExitanceOriginPoint(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetExitanceOriginPoint"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a9117323770c98abf599f849b9d3de267"></a>
### Function \_\_SetExitanceOriginPoint

![][private]

```python
__SetExitanceOriginPoint(self, tag)
```







**Parameters**:

* selfself
* tagtag

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetExitanceOriginPoint"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a50c15ae9816d8255aae9979381b6bffc"></a>
### Function \_\_GetExitanceXDirection

![][private]

```python
__GetExitanceXDirection(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetExitanceXDirection"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a4b3d63b415d1463724217e44e077fe0a"></a>
### Function \_\_SetExitanceXDirection

![][private]

```python
__SetExitanceXDirection(self, tag)
```







**Parameters**:

* selfself
* tagtag

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetExitanceXDirection"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1abc1d4613656792d9954020da3c351a60"></a>
### Function \_\_GetExitanceYDirection

![][private]

```python
__GetExitanceYDirection(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetExitanceYDirection"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1afa1b252c4be88c98a01e7d949f1260fd"></a>
### Function \_\_SetExitanceYDirection

![][private]

```python
__SetExitanceYDirection(self, tag)
```







**Parameters**:

* selfself
* tagtag

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetExitanceYDirection"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a3a7410e54482746a0626c7811cf67eb5"></a>
### Function \_\_GetEnumIntensityType

![][private]

```python
__GetEnumIntensityType(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetEnumIntensityType"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a0cff02818fa923fe2410c13f14283732"></a>
### Function \_\_SetEnumIntensityType

![][private]

```python
__SetEnumIntensityType(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetEnumIntensityType"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a92b0234424ff48f9f8686dd30a1addfc"></a>
### Function \_\_GetIntensityTotalAngle

![][private]

```python
__GetIntensityTotalAngle(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetIntensityTotalAngle"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1afa5bde87582fb65a29a586f3b6f7dc93"></a>
### Function \_\_SetIntensityTotalAngle

![][private]

```python
__SetIntensityTotalAngle(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetIntensityTotalAngle"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a5232734fed49339b2a0ef2584c3dccfb"></a>
### Function \_\_GetIntensityN

![][private]

```python
__GetIntensityN(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetIntensityN"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a88a53599a87b40a6a43df8e270beea3d"></a>
### Function \_\_SetIntensityN

![][private]

```python
__SetIntensityN(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetIntensityN"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a4d74f628b09bd5a828c81a4bfb69a896"></a>
### Function \_\_GetIntensityFWHMAngle

![][private]

```python
__GetIntensityFWHMAngle(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetIntensityFWHMAngle"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1ac944f328a9a1bc16eb1896eae27663dd"></a>
### Function \_\_SetIntensityFWHMAngle

![][private]

```python
__SetIntensityFWHMAngle(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetIntensityFWHMAngle"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1ab2ea6a6a6ebaf6c0aefc8d8c2e8203a3"></a>
### Function \_\_GetIntensityFWHMAngleX

![][private]

```python
__GetIntensityFWHMAngleX(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetIntensityFWHMAngleX"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1ab9e69b349c2c0f02bc45d269255de27f"></a>
### Function \_\_SetIntensityFWHMAngleX

![][private]

```python
__SetIntensityFWHMAngleX(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetIntensityFWHMAngleX"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1ab42c2a5c41b3466d7b55ffeef76ef733"></a>
### Function \_\_GetIntensityFWHMAngleY

![][private]

```python
__GetIntensityFWHMAngleY(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetIntensityFWHMAngleY"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1aff2806764271814c3ffd1aff0adf8976"></a>
### Function \_\_SetIntensityFWHMAngleY

![][private]

```python
__SetIntensityFWHMAngleY(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetIntensityFWHMAngleY"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a4801f4646a16cd910ced7c76cc312452"></a>
### Function \_\_GetIntensityDistributionFile

![][private]

```python
__GetIntensityDistributionFile(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetIntensityDistributionFile"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1ac8749a6aa43b06a6372f83aa97e76dfc"></a>
### Function \_\_SetIntensityDistributionFile

![][private]

```python
__SetIntensityDistributionFile(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetIntensityDistributionFile"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1ae9f71be25bf1a7fc11fe7a88a05ddf97"></a>
### Function \_\_GetIntensityOrientationType

![][private]

```python
__GetIntensityOrientationType(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetIntensityOrientationType"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a686091ffecb70383b0fc51b8183a9840"></a>
### Function \_\_SetIntensityOrientationType

![][private]

```python
__SetIntensityOrientationType(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetIntensityOrientationType"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a1eec44d8df0a29a1175e26d9c83c4e11"></a>
### Function \_\_GetRayLength

![][private]

```python
__GetRayLength(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetRayLength"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a9bad3ab23ffe82ad10b4b55329e954df"></a>
### Function \_\_SetRayLength

![][private]

```python
__SetRayLength(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetRayLength"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a99b09ce184aff89cedc8417927c50206"></a>
### Function \_\_GetNumberOfRays

![][private]

```python
__GetNumberOfRays(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetNumberOfRays"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1abbd1dbc5fde613b10681bf132dc105d2"></a>
### Function \_\_SetNumberOfRays

![][private]

```python
__SetNumberOfRays(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetNumberOfRays"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a553def5b6efa4168de874681a0e92e4f"></a>
### Function \_\_GetShowIntensityDistribution

![][private]

```python
__GetShowIntensityDistribution(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetShowIntensityDistribution"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1ab2370538bb2dde506395b229bd15d806"></a>
### Function \_\_SetShowIntensityDistribution

![][private]

```python
__SetShowIntensityDistribution(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetShowIntensityDistribution"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a61fae35a87a9a80d93b00b00c578e73e"></a>
### Function \_\_GetAssociatedGeometries

![][private]

```python
__GetAssociatedGeometries(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetAssociatedGeometries"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a2231fdb4068f55e025897eb2f34bf92a"></a>
### Function \_\_SetAssociatedGeometries

![][private]

```python
__SetAssociatedGeometries(self, tags)
```







**Parameters**:

* selfself
* tagstags

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetAssociatedGeometries"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a3b5d731b41525fe5e73ef868801da2c3"></a>
### Function \_\_GetExitGeometries

![][private]

```python
__GetExitGeometries(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetExitGeometries"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1ae897b56aa36eb4edc72657252200adc9"></a>
### Function \_\_SetExitGeometries

![][private]

```python
__SetExitGeometries(self, tags)
```







**Parameters**:

* selfself
* tagstags

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetExitGeometries"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a4ada229ee33b69aa6f022f9c15ba94b8"></a>
### Function \_\_GetIntensityXDirection

![][private]

```python
__GetIntensityXDirection(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetIntensityXDirection"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1aa82dde22de818f253ae21b9306a47dea"></a>
### Function \_\_SetIntensityXDirection

![][private]

```python
__SetIntensityXDirection(self, tag)
```







**Parameters**:

* selfself
* tagtag

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetIntensityXDirection"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a4eb2857ac39aa92b3574c01f74203281"></a>
### Function \_\_GetIntensityYDirection

![][private]

```python
__GetIntensityYDirection(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetIntensityYDirection"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a3ca6c693a29a77e1e60c82dbcc14bcb0"></a>
### Function \_\_SetIntensityYDirection

![][private]

```python
__SetIntensityYDirection(self, tag)
```







**Parameters**:

* selfself
* tagtag

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetIntensityYDirection"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a20ef6b186621e2b1cb930af9518077f8"></a>
### Function \_\_GetIntensityXDirectionReverse

![][private]

```python
__GetIntensityXDirectionReverse(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetIntensityXDirectionReverse"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a2b3663c584b01c9729f10c3def1f32fa"></a>
### Function \_\_SetIntensityXDirectionReverse

![][private]

```python
__SetIntensityXDirectionReverse(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetIntensityXDirectionReverse"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1ac747eed795a3ea3854230def2926b651"></a>
### Function \_\_GetIntensityYDirectionReverse

![][private]

```python
__GetIntensityYDirectionReverse(self)
```







**Parameters**:

* selfself

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__GetIntensityYDirectionReverse"}]}

<a id="class_speos_n_x_1_1_source_surface_builder_1a0a4e55f4d9293eae3cda2f04a4ce30f9"></a>
### Function \_\_SetIntensityYDirectionReverse

![][private]

```python
__SetIntensityYDirectionReverse(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

**TODO**:

* qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"SpeosNX.SourceSurfaceBuilder.__SetIntensityYDirectionReverse"}]}

[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[public]: https://img.shields.io/badge/-public-brightgreen (public)