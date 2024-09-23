<a id="class_speos_n_x_1_1_source_surface_builder"></a>
# Class SpeosNX::SourceSurfaceBuilder

![][Python]
![][public]

**Definition**: `SpeosNX.py` (line 10933)

Represents a Surface Source Builder.

The Surface Source Builder creates or edits Surface Source features. <br/>






To create a new instance of this class, use FeatureCollection.CreateSourceSurfaceBuilder.<br/>






With a surface source, you can model the light emission of a source taking into account its physical properties as the flux, the spectrum, the exitance and the intensity. A surface source can be defined with any face in a geometry which emits rays.

**Inherits from**:

* [FeatureBuilder](class_speos_n_x_1_1_feature_builder.md#class_speos_n_x_1_1_feature_builder)

## Members

* [\_\_del\_\_](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ad688cc6fcbdc96a0f324fecb70876255)
* [\_\_GetAssociatedGeometries](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a61fae35a87a9a80d93b00b00c578e73e)
* [\_\_getattr\_\_](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a09cde44d6716fb83c9aabc93abc1fdb4)
* [\_\_GetExitance](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ab2d3e7f3620d9b38677ff2c4c7402e74)
* [\_\_GetExitanceDistributionDirectionReverse](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a7d3c372c541da77524f8f5377723d722)
* [\_\_GetExitanceDistributionFilePath](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a43d4df9ecf758c590b9f168f40ea5208)
* [\_\_GetExitanceOriginPoint](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a2ec15fa6a4b504bfe467c29b2ca1948e)
* [\_\_GetExitanceXDirection](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a50c15ae9816d8255aae9979381b6bffc)
* [\_\_GetExitanceXDirectionReversed](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a66dcd896cc04cc0f61419cb84bf9d3f1)
* [\_\_GetExitanceYDirection](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1abc1d4613656792d9954020da3c351a60)
* [\_\_GetExitanceYDirectionReversed](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a018b6c771b771a4eda7a6d8c783a7fac)
* [\_\_GetExitGeometries](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a3b5d731b41525fe5e73ef868801da2c3)
* [\_\_GetFlux](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a3eb0bb71991b0ef2702cedc4acdb5922)
* [\_\_GetFluxUnit](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a39a59d59f2216a470e44638e87429d26)
* [\_\_GetIntensityDistributionFilePath](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a69d29b6219f8580f20ac8550d172b77c)
* [\_\_GetIntensityFWHMAngle](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a4d74f628b09bd5a828c81a4bfb69a896)
* [\_\_GetIntensityFWHMAngleX](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ab2ea6a6a6ebaf6c0aefc8d8c2e8203a3)
* [\_\_GetIntensityFWHMAngleY](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ab42c2a5c41b3466d7b55ffeef76ef733)
* [\_\_GetIntensityN](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a5232734fed49339b2a0ef2584c3dccfb)
* [\_\_GetIntensityOrientation](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a7b0984e40116bcdd4004f52384e9c3a3)
* [\_\_GetIntensityTotalAngle](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a92b0234424ff48f9f8686dd30a1addfc)
* [\_\_GetIntensityType](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a16dc01341e8e37e354bcf5cf6dec7f99)
* [\_\_GetIntensityXDirection](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a4ada229ee33b69aa6f022f9c15ba94b8)
* [\_\_GetIntensityXDirectionReversed](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a0a3f5ae51687fe97c233ee8b581ea305)
* [\_\_GetIntensityYDirection](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a4eb2857ac39aa92b3574c01f74203281)
* [\_\_GetIntensityYDirectionReversed](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a6cece87534ac104e070ef781236dc433)
* [\_\_GetNumberOfRays](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a99b09ce184aff89cedc8417927c50206)
* [\_\_GetRayLength](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a1eec44d8df0a29a1175e26d9c83c4e11)
* [\_\_GetShowIntensityDistribution](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a553def5b6efa4168de874681a0e92e4f)
* [\_\_GetSourceSurfaceEmissiveFaces](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a3bc242b62e80b87d28351fcd13d12ab5)
* [\_\_GetSpectrum](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a3e572f32265c719c7c103394f3d811b0)
* [\_\_GetSpectrumFilePath](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1adda7d75d7ad5311ff6c0f5403c1069be)
* [\_\_GetTemperature](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a3dd6398b4d54fcd35bf908a4648cc023)
* [\_\_GetUseFluxFromFile](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a8358b1878ae1d500b1ed1e79b85923a2)
* [\_\_GetWavelength](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a68bf82b68ed2add8c5689e227914c834)
* [\_\_repr\_\_](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1af5ed824d5057546af31e81c6f8645990)
* [\_\_SetAssociatedGeometries](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a2231fdb4068f55e025897eb2f34bf92a)
* [\_\_setattr\_\_](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a4a647adca30982afb5e85e6629f632c9)
* [\_\_SetExitance](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a544514cbec03b9e9c4bfcf1b56864f54)
* [\_\_SetExitanceDistributionDirectionReverse](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ae787b296f5403e5a9a0d8be5237c6a2b)
* [\_\_SetExitanceDistributionFilePath](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a687cf17b34bd505cc7657e062266380f)
* [\_\_SetExitanceOriginPoint](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a9117323770c98abf599f849b9d3de267)
* [\_\_SetExitanceXDirection](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a4b3d63b415d1463724217e44e077fe0a)
* [\_\_SetExitanceXDirectionReversed](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a5b64b65cf15a752be0c571c37bc93faf)
* [\_\_SetExitanceYDirection](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1afa1b252c4be88c98a01e7d949f1260fd)
* [\_\_SetExitanceYDirectionReversed](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a375c7324355e920c7ffc1fb4c54cae50)
* [\_\_SetExitGeometries](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ae897b56aa36eb4edc72657252200adc9)
* [\_\_SetFlux](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1aabc1ba70165165160d4c5db88b782618)
* [\_\_SetFluxUnit](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a62f29c7cb2fd1a1792716867c08136aa)
* [\_\_SetIntensityDistributionFilePath](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a8b92283123a11cef49145c1227679f8e)
* [\_\_SetIntensityFWHMAngle](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ac944f328a9a1bc16eb1896eae27663dd)
* [\_\_SetIntensityFWHMAngleX](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ab9e69b349c2c0f02bc45d269255de27f)
* [\_\_SetIntensityFWHMAngleY](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1aff2806764271814c3ffd1aff0adf8976)
* [\_\_SetIntensityN](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a88a53599a87b40a6a43df8e270beea3d)
* [\_\_SetIntensityOrientation](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a299e50d827b640ab27422a69722cd1ec)
* [\_\_SetIntensityTotalAngle](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1afa5bde87582fb65a29a586f3b6f7dc93)
* [\_\_SetIntensityType](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a7e1faa532868300456f212bf099554c3)
* [\_\_SetIntensityXDirection](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1aa82dde22de818f253ae21b9306a47dea)
* [\_\_SetIntensityXDirectionReversed](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a0b9c66f238770762d4bf3a8318ad4b7f)
* [\_\_SetIntensityYDirection](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a3ca6c693a29a77e1e60c82dbcc14bcb0)
* [\_\_SetIntensityYDirectionReversed](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1aff6617ff5cfc2120eddb79f6dc920a49)
* [\_\_SetNumberOfRays](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1abbd1dbc5fde613b10681bf132dc105d2)
* [\_\_SetRayLength](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a9bad3ab23ffe82ad10b4b55329e954df)
* [\_\_SetShowIntensityDistribution](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ab2370538bb2dde506395b229bd15d806)
* [\_\_SetSpectrum](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a8a667163a8fbe29855c9a48d8b5e13a4)
* [\_\_SetSpectrumFilePath](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a1d726d969a690479ad9746a9dedd4a42)
* [\_\_SetTemperature](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ab91f8bd2ef020b6cf7d1124d9f5045e3)
* [\_\_SetUseFluxFromFile](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ae096098d8056de95acc9568abefd3a3b)
* [\_\_SetWavelength](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a5b8bcfdc84aadb29c23aba774f8b419a)
* [\_\_swig\_destroy\_\_](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ad5d12361526dc7cfb7b24a2e5ddc5162)
* [\_\_swig\_getmethods\_\_](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a0b80c350dac1ed9c1dbecdb473550cad)
* [\_\_swig\_setmethods\_\_](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ac0e4d110feec6c2d791145b575d66fd6)
* [AssociatedGeometries](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1acd5c50bcc6e4082d7357fe3f49674070)
* [Exitance](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1afeff9077a25cfcf21f12c594dcd16f8f)
* [ExitanceDistributionDirectionReverse](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1aa656811053bd381f2d211c00b29b04d6)
* [ExitanceDistributionFilePath](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a83ad166620a158b981d26efe766bbd44)
* [ExitanceOriginPoint](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a7eb20874c4f768763d36d2e712d9b386)
* [ExitanceXDirection](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1aa2f822bd42982d10d8e4880007d80095)
* [ExitanceXDirectionReversed](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a92ad86cfc1d53d133ac28c9e7c1e26ca)
* [ExitanceYDirection](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a40368794b4d65bfc72994598665b9d8c)
* [ExitanceYDirectionReversed](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a98f6bca3bf7ce4db48c77ae0ff1f89b8)
* [ExitGeometries](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a1b3e2e30cce533f6cd5769c31fbaaee6)
* [Flux](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ad1e0e7fa3b1f2579a8f2bfc57e140398)
* [FluxUnit](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a7923861a00fbf8f6f36b062ecab43370)
* [IntensityDistributionFilePath](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a8b3ce6e48f447b499e7952ee4fe14fba)
* [IntensityFWHMAngle](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a8e02d008bf55e5fb0254febc1a5ca1c2)
* [IntensityFWHMAngleX](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ae7bfddce8da95979dad8c4d6a5ac1b4c)
* [IntensityFWHMAngleY](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a82bf04b99fe6813c5002de1ae00cc4df)
* [IntensityN](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a0fd51bc2b984fb30d147b7cf2abbc7d0)
* [IntensityOrientation](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a695ea32e58f9eb5ffde0d972726920fb)
* [IntensityTotalAngle](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a0ae6efec532e823d1c1e5e1e130b4b70)
* [IntensityType](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1aa14d1fc77993a0b6b6816a4d0441561a)
* [IntensityXDirection](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1aef75648f34ae65c4a6e61904d4b2eeb7)
* [IntensityXDirectionReversed](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a5818b425981c1a3950d217a9b620272d)
* [IntensityYDirection](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a807426a6360930d600bf4fce5b079c89)
* [IntensityYDirectionReversed](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a606ff2a8fbc28c89fa8348934dbcd0f2)
* [NumberOfRays](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a622dc1d3ba1038d63b443881726aac17)
* [RayLength](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1ac34ed0a90a26560cbc5671f5f0243421)
* [ShowIntensityDistribution](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a988eaa701eb99af6e535e4d8ce8d22c4)
* [SourceSurfaceEmissiveFaces](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a0fabe741798160d40fb71e63f231fc22)
* [Spectrum](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a1c58086357a2035379972e873865a4a8)
* [SpectrumFilePath](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a1cca2d58b30206743ddcb68d2a673380)
* [Temperature](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a22805146ddc4f17f31d72c5b46ece079)
* [UseFluxFromFile](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a76576e1b4b5c9e7680eb2947b95f530c)
* [Wavelength](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder_1a85db82823df8e3656be173155d4f48d7)

## Private static attributes

<a id="class_speos_n_x_1_1_source_surface_builder_1ac0e4d110feec6c2d791145b575d66fd6"></a>
### Variable \_\_swig\_setmethods\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 10944)

```python
dict __swig_setmethods__ =  {}
```







**Type**: dict

<a id="class_speos_n_x_1_1_source_surface_builder_1a4a647adca30982afb5e85e6629f632c9"></a>
### Variable \_\_setattr\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 10947)

```python
_swig_setattr __setattr__ =  lambda self, name, value(self, [SourceSurfaceBuilder](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder), name, value)
```







**Type**: _swig_setattr

<a id="class_speos_n_x_1_1_source_surface_builder_1a0b80c350dac1ed9c1dbecdb473550cad"></a>
### Variable \_\_swig\_getmethods\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 10948)

```python
dict __swig_getmethods__ =  {}
```







**Type**: dict

<a id="class_speos_n_x_1_1_source_surface_builder_1a09cde44d6716fb83c9aabc93abc1fdb4"></a>
### Variable \_\_getattr\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 10951)

```python
_swig_getattr __getattr__ =  lambda self, name(self, [SourceSurfaceBuilder](class_speos_n_x_1_1_source_surface_builder.md#class_speos_n_x_1_1_source_surface_builder), name)
```







**Type**: _swig_getattr

<a id="class_speos_n_x_1_1_source_surface_builder_1af5ed824d5057546af31e81c6f8645990"></a>
### Variable \_\_repr\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 10955)

```python
__repr__ =  _swig_repr
```







**Type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1ad5d12361526dc7cfb7b24a2e5ddc5162"></a>
### Variable \_\_swig\_destroy\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 10956)

```python
__swig_destroy__ =  _SpeosNX.delete_SourceSurfaceBuilder
```







**Type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1ad688cc6fcbdc96a0f324fecb70876255"></a>
### Variable \_\_del\_\_

![][private]
![][static]

**Definition**: `SpeosNX.py` (line 10957)

```python
None __del__ =  lambda self
```







**Type**: None

## Properties

<a id="class_speos_n_x_1_1_source_surface_builder_1acd5c50bcc6e4082d7357fe3f49674070"></a>
### Property AssociatedGeometries

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11162)

```python
AssociatedGeometries
```

Gets or sets associated geometries.

The AssociatedGeometries property takes a list of feature tag and returns a list of feature tag.<br/>






**Value type**: List of integer.<br/>






The default value is an empty list.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a1b3e2e30cce533f6cd5769c31fbaaee6"></a>
### Property ExitGeometries

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11171)

```python
ExitGeometries
```

Gets or sets the exit geometries.

The ExitGeometries property takes a list of feature tag and returns a list of feature tag.<br/>






**Value type**: List of integer.<br/>






The default value is an empty list.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1afeff9077a25cfcf21f12c594dcd16f8f"></a>
### Property Exitance

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11184)

```python
Exitance
```

Gets or sets the exitance type.

Exitance of a source describes how each point of a surface emits rays.<br/>






The values are:<br/>
 0 - Constant, ray energy is constant over surface source face.<br/>
 1 - Variable, ray energy depends on xmp energy distribution.<br/>






**Value type**: Integer.<br/>






The default value is 0.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1aa656811053bd381f2d211c00b29b04d6"></a>
### Property ExitanceDistributionDirectionReverse

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11196)

```python
ExitanceDistributionDirectionReverse
```

Gets or sets the property to reverse the exitance distribution.

**Prerequisite**: The ExitanteType property must be 0.<br/>






True: Reverses the exitance distribution direction.<br/>
 False: Does not reverse the exitance distribution direction.<br/>






**Value type**: Boolean.<br/>






The default value is False.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a83ad166620a158b981d26efe766bbd44"></a>
### Property ExitanceDistributionFilePath

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11205)

```python
ExitanceDistributionFilePath
```

Gets or sets the exitance distribution file.

**Prerequisite**: The ExitanteType property must be 1.<br/>






**Value type**: String.<br/>






The default value is an empty string.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a7eb20874c4f768763d36d2e712d9b386"></a>
### Property ExitanceOriginPoint

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11216)

```python
ExitanceOriginPoint
```

Gets or sets the exitance origin Point.

**Prerequisite**: The ExitanceType property must be 1.<br/>






The ExitanceOriginPoint property takes a feature tag and returns a feature tag.<br/>






**Value type**: Integer.<br/>






The default value is 0.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1aa2f822bd42982d10d8e4880007d80095"></a>
### Property ExitanceXDirection

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11227)

```python
ExitanceXDirection
```

Gets or sets the exitance X direction.

**Prerequisite**: The ExitanteType property must be 1.<br/>






The ExitanceXDirection property takes a feature tag and returns a feature tag.<br/>






**Value type**: Integer.<br/>






The default value is 0.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a92ad86cfc1d53d133ac28c9e7c1e26ca"></a>
### Property ExitanceXDirectionReversed

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11239)

```python
ExitanceXDirectionReversed
```

Gets or sets the property to reverse the exitance of X direction.

**Prerequisite**: The ExitanceType property must be 1.<br/>






True: Reverses the exitance direction X.<br/>
 False: Does not reverse the exitance direction X.<br/>






**Value type**: Boolean.<br/>






The default value is False.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a40368794b4d65bfc72994598665b9d8c"></a>
### Property ExitanceYDirection

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11250)

```python
ExitanceYDirection
```

Gets or sets the exitance Y direction.

**Prerequisite**: The ExitanteType property must be 1.<br/>






The ExitanceYDirection property takes a feature tag and returns a feature tag.<br/>






**Value type**: Integer.<br/>






The default value is 0.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a98f6bca3bf7ce4db48c77ae0ff1f89b8"></a>
### Property ExitanceYDirectionReversed

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11262)

```python
ExitanceYDirectionReversed
```

Gets or sets the property to reverse the exitance of Y direction.

**Prerequisite**: The ExitanceType property must be 1.<br/>






True: Reverses the exitance direction Y.<br/>
 False: Does not reverse the exitance direction Y.<br/>






**Value type**: Boolean.<br/>






The default value is False.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1ad1e0e7fa3b1f2579a8f2bfc57e140398"></a>
### Property Flux

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11272)

```python
Flux
```

Gets or sets the flux.

The unit depends on the FluxUnitType.<br/>






**Value type**: Double (in lm, W or cd).<br/>
 **Range**: The value must be superior to 0.0.<br/>






The default value is 683.0 lm for FluxUnitType = 0, 1.0 W for FluxUnitType = 1 and 5.0 cd for FluxUnitType = 2.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a7923861a00fbf8f6f36b062ecab43370"></a>
### Property FluxUnit

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11284)

```python
FluxUnit
```

Gets or sets the flux unit type.

The values are: <br/>
 0 - Lumen.<br/>
 1 - Watt.<br/>
 2 - Candela.<br/>






**Value type: Integer.<br/>
**





** The default value is 0. **



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a8b3ce6e48f447b499e7952ee4fe14fba"></a>
### Property IntensityDistributionFilePath

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11293)

```python
IntensityDistributionFilePath
```

Gets or sets the distribution file.

**Prerequisite**: The EnumIntensityType property must be 4.<br/>






**Value type**: String.<br/>






The default value is an empty string.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a8e02d008bf55e5fb0254febc1a5ca1c2"></a>
### Property IntensityFWHMAngle

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11303)

```python
IntensityFWHMAngle
```

Gets or sets the Full Width At Half Maximum (FWHM) angle.

**Prerequisite**: The EnumIntensityType property must be 2.<br/>






**Value type**: Double (in degrees).<br/>
 **Range**: [0, 180].<br/>






The default value is 30.0 degrees.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1ae7bfddce8da95979dad8c4d6a5ac1b4c"></a>
### Property IntensityFWHMAngleX

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11313)

```python
IntensityFWHMAngleX
```

Gets or sets the Full Width At Half Maximum (FWHM) X angle.

**Prerequisite**: The EnumIntensityType property must be 3.<br/>






**Value type**: Double (in degrees).<br/>
 **Range**: [0, 180].<br/>






The default value is 30.0 degrees.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a82bf04b99fe6813c5002de1ae00cc4df"></a>
### Property IntensityFWHMAngleY

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11323)

```python
IntensityFWHMAngleY
```

Gets or sets the Full Width At Half Maximum (FWHM) Y angle.

**Prerequisite**: The EnumIntensityType property must be 3.<br/>






**Value type**: Double (in degrees).<br/>
 **Range**: [0, 180].<br/>






The default value is 30.0 degrees.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a0fd51bc2b984fb30d147b7cf2abbc7d0"></a>
### Property IntensityN

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11333)

```python
IntensityN
```

Gets or sets the N.

**Prerequisite**: The EnumIntensityType property must be 1.<br/>






**Value type**: Double.<br/>
 **Range**: The value must be superior to -1.0.<br/>






The default value is 3.0.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a695ea32e58f9eb5ffde0d972726920fb"></a>
### Property IntensityOrientation

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11345)

```python
IntensityOrientation
```

Gets or sets the orientation type.

The values are:<br/>
 0 - AxisSystem.<br/>
 1 - NormalToSurface.<br/>
 2 - NormalToUVMap.<br/>






**Value type**: Integer.<br/>






The default value is 0.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a0ae6efec532e823d1c1e5e1e130b4b70"></a>
### Property IntensityTotalAngle

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11355)

```python
IntensityTotalAngle
```

Gets or sets the intensity total angle.

**Prerequisite**: The EnumIntensityType property must be 0, 1, 2 or 3.<br/>






**Value type**: Double (in degrees).<br/>
 **Range**: [0, 180].<br/>






The default value is 180.0 degrees.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1aa14d1fc77993a0b6b6816a4d0441561a"></a>
### Property IntensityType

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11370)

```python
IntensityType
```

Gets or sets the intensity type of the light source.

The values are:<br/>
 0 - Lambertian.<br/>
 1 - Cos.<br/>
 2 - Symmetric Gaussian.<br/>
 3 - Asymmetric Gaussian.<br/>
 4 - Library.<br/>






**Value type**: Integer.<br/>






The default value is 0.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1aef75648f34ae65c4a6e61904d4b2eeb7"></a>
### Property IntensityXDirection

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11381)

```python
IntensityXDirection
```

Gets or sets the intensity X Direction.

**Prerequisite**: The EnumIntensityType property must be 3.<br/>






The property IntensityXDirection takes a feature tag and returns a feature tag.<br/>






**Value type**: Integer.<br/>






The default value is 0.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a5818b425981c1a3950d217a9b620272d"></a>
### Property IntensityXDirectionReversed

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11393)

```python
IntensityXDirectionReversed
```

Gets or sets the property to reverse the intensity X direction.

**Prerequisite**: The EnumIntensityType property must be 3.<br/>






True: Reverses the intensity X direction.<br/>
 False: Does not reverse the intensity X direction.<br/>






**Value type**: Boolean.<br/>






The default value is False.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a807426a6360930d600bf4fce5b079c89"></a>
### Property IntensityYDirection

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11404)

```python
IntensityYDirection
```

Gets or sets the intensity Y Direction.

**Prerequisite**: The EnumIntensityType property must be 3.<br/>






The property IntensityYDirection takes a feature tag and returns a feature tag.<br/>






**Value type**: Integer.<br/>






The default value is 0.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a606ff2a8fbc28c89fa8348934dbcd0f2"></a>
### Property IntensityYDirectionReversed

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11416)

```python
IntensityYDirectionReversed
```

Gets or sets the property to reverse the intensity Y direction.

**Prerequisite**: The EnumIntensityType property must be 3 or The IntensityOrientationType must be 0.<br/>






True: Reverses the intensity Y direction.<br/>
 False: Does not reverse the intensity Y direction.<br/>






**Value type**: Boolean.<br/>






The default value is False.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a622dc1d3ba1038d63b443881726aac17"></a>
### Property NumberOfRays

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11425)

```python
NumberOfRays
```

Gets or sets the number of rays.

Edits the value to set the number of rays displayed in the preview.





**Value type**: Integer.<br/>
 **Range**: The value must be superior to 0.<br/>






The default value is 100.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1ac34ed0a90a26560cbc5671f5f0243421"></a>
### Property RayLength

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11435)

```python
RayLength
```

Gets or sets the ray length.

Edits the value to set the length of the rays preview in the 3D view.





**Value type**: Double (in mm).<br/>
 **Range**: The value must be superior to 0.0.<br/>






The default value is 75.0 mm.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a988eaa701eb99af6e535e4d8ce8d22c4"></a>
### Property ShowIntensityDistribution

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11445)

```python
ShowIntensityDistribution
```

Gets or sets the property to show the intensity distribution.

True: Shows the intensity distribution in the preview.<br/>
 False: Does not show the intensity distribution in the preview.<br/>






**Value type**: Boolean.<br/>






The default value is False.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a0fabe741798160d40fb71e63f231fc22"></a>
### Property SourceSurfaceEmissiveFaces

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11452)

```python
SourceSurfaceEmissiveFaces
```

Returns the interface to edit the emissive faces of the source.

**Prerequisite**: The ExitanteType property must be 0.<br/>






**Value type**: SourceSurfaceEmissiveFaces object.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a1c58086357a2035379972e873865a4a8"></a>
### Property Spectrum

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11464)

```python
Spectrum
```

Gets or sets the spectrum type.

The values are:<br/>
 0 - Monochromatic, you can edit the wavelength value.<br/>
 1 - Blackbody, you can edit the temperature value.<br/>
 2 - Library, you can browse a .spectrum file.<br/>






**Value type**: Integer.<br/>






The default value is 0.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a1cca2d58b30206743ddcb68d2a673380"></a>
### Property SpectrumFilePath

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11473)

```python
SpectrumFilePath
```

Gets or sets the spectrum file.

**Prerequisite**: The SpectrumType property must be 2.<br/>






**Value type**: String.<br/>






The default value is an empty string.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a22805146ddc4f17f31d72c5b46ece079"></a>
### Property Temperature

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11483)

```python
Temperature
```

Gets or sets the temperature.

**Prerequisite**: The SpectrumType property must be 1.<br/>






**Value type**: Double (in Kelvin).<br/>
 **Range**: The value must be superior to 0.0.<br/>






The default value is 2856.0 Kelvin.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a76576e1b4b5c9e7680eb2947b95f530c"></a>
### Property UseFluxFromFile

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11493)

```python
UseFluxFromFile
```

Gets or sets the property to use the flux from file.

True: Uses the flux from a file.<br/>
 False: Does not use the flux from a file.<br/>






**Value type**: Boolean.<br/>






The default value is False.



**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a85db82823df8e3656be173155d4f48d7"></a>
### Property Wavelength

![][public]
![][static]

**Definition**: `SpeosNX.py` (line 11503)

```python
Wavelength
```

Gets or sets the wavelength.

**Prerequisite**: The SpectrumType property must be 0.<br/>






**Value type**: Double (in nm).<br/>
 **Range**: The value must be superior to 0.0.<br/>






The default value is 555.0 nm.



**Return type**: 

## Private functions

<a id="class_speos_n_x_1_1_source_surface_builder_1a39a59d59f2216a470e44638e87429d26"></a>
### Function \_\_GetFluxUnit

![][private]

```python
__GetFluxUnit(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a62f29c7cb2fd1a1792716867c08136aa"></a>
### Function \_\_SetFluxUnit

![][private]

```python
__SetFluxUnit(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a3eb0bb71991b0ef2702cedc4acdb5922"></a>
### Function \_\_GetFlux

![][private]

```python
__GetFlux(self)
```







**Parameters**:

* selfself

**Return type**: 

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

<a id="class_speos_n_x_1_1_source_surface_builder_1a8358b1878ae1d500b1ed1e79b85923a2"></a>
### Function \_\_GetUseFluxFromFile

![][private]

```python
__GetUseFluxFromFile(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1ae096098d8056de95acc9568abefd3a3b"></a>
### Function \_\_SetUseFluxFromFile

![][private]

```python
__SetUseFluxFromFile(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a3e572f32265c719c7c103394f3d811b0"></a>
### Function \_\_GetSpectrum

![][private]

```python
__GetSpectrum(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a8a667163a8fbe29855c9a48d8b5e13a4"></a>
### Function \_\_SetSpectrum

![][private]

```python
__SetSpectrum(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a68bf82b68ed2add8c5689e227914c834"></a>
### Function \_\_GetWavelength

![][private]

```python
__GetWavelength(self)
```







**Parameters**:

* selfself

**Return type**: 

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

<a id="class_speos_n_x_1_1_source_surface_builder_1a3dd6398b4d54fcd35bf908a4648cc023"></a>
### Function \_\_GetTemperature

![][private]

```python
__GetTemperature(self)
```







**Parameters**:

* selfself

**Return type**: 

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

<a id="class_speos_n_x_1_1_source_surface_builder_1adda7d75d7ad5311ff6c0f5403c1069be"></a>
### Function \_\_GetSpectrumFilePath

![][private]

```python
__GetSpectrumFilePath(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a1d726d969a690479ad9746a9dedd4a42"></a>
### Function \_\_SetSpectrumFilePath

![][private]

```python
__SetSpectrumFilePath(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1ab2d3e7f3620d9b38677ff2c4c7402e74"></a>
### Function \_\_GetExitance

![][private]

```python
__GetExitance(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a544514cbec03b9e9c4bfcf1b56864f54"></a>
### Function \_\_SetExitance

![][private]

```python
__SetExitance(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a43d4df9ecf758c590b9f168f40ea5208"></a>
### Function \_\_GetExitanceDistributionFilePath

![][private]

```python
__GetExitanceDistributionFilePath(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a687cf17b34bd505cc7657e062266380f"></a>
### Function \_\_SetExitanceDistributionFilePath

![][private]

```python
__SetExitanceDistributionFilePath(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a3bc242b62e80b87d28351fcd13d12ab5"></a>
### Function \_\_GetSourceSurfaceEmissiveFaces

![][private]

```python
__GetSourceSurfaceEmissiveFaces(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a7d3c372c541da77524f8f5377723d722"></a>
### Function \_\_GetExitanceDistributionDirectionReverse

![][private]

```python
__GetExitanceDistributionDirectionReverse(self)
```







**Parameters**:

* selfself

**Return type**: 

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

<a id="class_speos_n_x_1_1_source_surface_builder_1a66dcd896cc04cc0f61419cb84bf9d3f1"></a>
### Function \_\_GetExitanceXDirectionReversed

![][private]

```python
__GetExitanceXDirectionReversed(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a5b64b65cf15a752be0c571c37bc93faf"></a>
### Function \_\_SetExitanceXDirectionReversed

![][private]

```python
__SetExitanceXDirectionReversed(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a018b6c771b771a4eda7a6d8c783a7fac"></a>
### Function \_\_GetExitanceYDirectionReversed

![][private]

```python
__GetExitanceYDirectionReversed(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a375c7324355e920c7ffc1fb4c54cae50"></a>
### Function \_\_SetExitanceYDirectionReversed

![][private]

```python
__SetExitanceYDirectionReversed(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a2ec15fa6a4b504bfe467c29b2ca1948e"></a>
### Function \_\_GetExitanceOriginPoint

![][private]

```python
__GetExitanceOriginPoint(self)
```







**Parameters**:

* selfself

**Return type**: 

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

<a id="class_speos_n_x_1_1_source_surface_builder_1a50c15ae9816d8255aae9979381b6bffc"></a>
### Function \_\_GetExitanceXDirection

![][private]

```python
__GetExitanceXDirection(self)
```







**Parameters**:

* selfself

**Return type**: 

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

<a id="class_speos_n_x_1_1_source_surface_builder_1abc1d4613656792d9954020da3c351a60"></a>
### Function \_\_GetExitanceYDirection

![][private]

```python
__GetExitanceYDirection(self)
```







**Parameters**:

* selfself

**Return type**: 

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

<a id="class_speos_n_x_1_1_source_surface_builder_1a16dc01341e8e37e354bcf5cf6dec7f99"></a>
### Function \_\_GetIntensityType

![][private]

```python
__GetIntensityType(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a7e1faa532868300456f212bf099554c3"></a>
### Function \_\_SetIntensityType

![][private]

```python
__SetIntensityType(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a92b0234424ff48f9f8686dd30a1addfc"></a>
### Function \_\_GetIntensityTotalAngle

![][private]

```python
__GetIntensityTotalAngle(self)
```







**Parameters**:

* selfself

**Return type**: 

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

<a id="class_speos_n_x_1_1_source_surface_builder_1a5232734fed49339b2a0ef2584c3dccfb"></a>
### Function \_\_GetIntensityN

![][private]

```python
__GetIntensityN(self)
```







**Parameters**:

* selfself

**Return type**: 

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

<a id="class_speos_n_x_1_1_source_surface_builder_1a4d74f628b09bd5a828c81a4bfb69a896"></a>
### Function \_\_GetIntensityFWHMAngle

![][private]

```python
__GetIntensityFWHMAngle(self)
```







**Parameters**:

* selfself

**Return type**: 

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

<a id="class_speos_n_x_1_1_source_surface_builder_1ab2ea6a6a6ebaf6c0aefc8d8c2e8203a3"></a>
### Function \_\_GetIntensityFWHMAngleX

![][private]

```python
__GetIntensityFWHMAngleX(self)
```







**Parameters**:

* selfself

**Return type**: 

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

<a id="class_speos_n_x_1_1_source_surface_builder_1ab42c2a5c41b3466d7b55ffeef76ef733"></a>
### Function \_\_GetIntensityFWHMAngleY

![][private]

```python
__GetIntensityFWHMAngleY(self)
```







**Parameters**:

* selfself

**Return type**: 

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

<a id="class_speos_n_x_1_1_source_surface_builder_1a69d29b6219f8580f20ac8550d172b77c"></a>
### Function \_\_GetIntensityDistributionFilePath

![][private]

```python
__GetIntensityDistributionFilePath(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a8b92283123a11cef49145c1227679f8e"></a>
### Function \_\_SetIntensityDistributionFilePath

![][private]

```python
__SetIntensityDistributionFilePath(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a7b0984e40116bcdd4004f52384e9c3a3"></a>
### Function \_\_GetIntensityOrientation

![][private]

```python
__GetIntensityOrientation(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a299e50d827b640ab27422a69722cd1ec"></a>
### Function \_\_SetIntensityOrientation

![][private]

```python
__SetIntensityOrientation(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a1eec44d8df0a29a1175e26d9c83c4e11"></a>
### Function \_\_GetRayLength

![][private]

```python
__GetRayLength(self)
```







**Parameters**:

* selfself

**Return type**: 

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

<a id="class_speos_n_x_1_1_source_surface_builder_1a99b09ce184aff89cedc8417927c50206"></a>
### Function \_\_GetNumberOfRays

![][private]

```python
__GetNumberOfRays(self)
```







**Parameters**:

* selfself

**Return type**: 

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

<a id="class_speos_n_x_1_1_source_surface_builder_1a553def5b6efa4168de874681a0e92e4f"></a>
### Function \_\_GetShowIntensityDistribution

![][private]

```python
__GetShowIntensityDistribution(self)
```







**Parameters**:

* selfself

**Return type**: 

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

<a id="class_speos_n_x_1_1_source_surface_builder_1a61fae35a87a9a80d93b00b00c578e73e"></a>
### Function \_\_GetAssociatedGeometries

![][private]

```python
__GetAssociatedGeometries(self)
```







**Parameters**:

* selfself

**Return type**: 

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

<a id="class_speos_n_x_1_1_source_surface_builder_1a3b5d731b41525fe5e73ef868801da2c3"></a>
### Function \_\_GetExitGeometries

![][private]

```python
__GetExitGeometries(self)
```







**Parameters**:

* selfself

**Return type**: 

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

<a id="class_speos_n_x_1_1_source_surface_builder_1a4ada229ee33b69aa6f022f9c15ba94b8"></a>
### Function \_\_GetIntensityXDirection

![][private]

```python
__GetIntensityXDirection(self)
```







**Parameters**:

* selfself

**Return type**: 

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

<a id="class_speos_n_x_1_1_source_surface_builder_1a4eb2857ac39aa92b3574c01f74203281"></a>
### Function \_\_GetIntensityYDirection

![][private]

```python
__GetIntensityYDirection(self)
```







**Parameters**:

* selfself

**Return type**: 

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

<a id="class_speos_n_x_1_1_source_surface_builder_1a0a3f5ae51687fe97c233ee8b581ea305"></a>
### Function \_\_GetIntensityXDirectionReversed

![][private]

```python
__GetIntensityXDirectionReversed(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a0b9c66f238770762d4bf3a8318ad4b7f"></a>
### Function \_\_SetIntensityXDirectionReversed

![][private]

```python
__SetIntensityXDirectionReversed(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1a6cece87534ac104e070ef781236dc433"></a>
### Function \_\_GetIntensityYDirectionReversed

![][private]

```python
__GetIntensityYDirectionReversed(self)
```







**Parameters**:

* selfself

**Return type**: 

<a id="class_speos_n_x_1_1_source_surface_builder_1aff6617ff5cfc2120eddb79f6dc920a49"></a>
### Function \_\_SetIntensityYDirectionReversed

![][private]

```python
__SetIntensityYDirectionReversed(self, value)
```







**Parameters**:

* selfself
* valuevalue

**Return type**: 

[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[private]: https://img.shields.io/badge/-private-red (private)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)