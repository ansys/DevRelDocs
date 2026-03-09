# Namespace ZOSAPI::Analysis::PhysicalOptics

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics"></a>

![][C#]

**Definition**:


## Classes

* [ZOSAPI::Analysis::PhysicalOptics::IAS\_PhysicalOpticsPropagation](interface_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1_1_i_a_s___physical_optics_propagation.md#interface_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1_1_i_a_s___physical_optics_propagation)

## Enumeration types

### Enumeration type POPBeamTypes

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1a511696f777f8fac40517c5d373550669"></a>

![][public]

**Definition**:


```csharp
enum POPBeamTypes {
  GaussianWaist = 0,
  GaussianAngle,
  GaussianSizeAngle,
  TopHat,
  File,
  DLL,
  Multimode,
  AstigmaticGaussian
}
```


#### Enumerator GaussianWaist

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1a511696f777f8fac40517c5d373550669a495bda6af42748fb0f56eab2b5eddad2"></a>


#### Enumerator GaussianAngle

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1a511696f777f8fac40517c5d373550669a77b0d4800107b7d1d016ff6a5427b082"></a>


#### Enumerator GaussianSizeAngle

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1a511696f777f8fac40517c5d373550669a97342b92a715b22d211e53388ec6c6c0"></a>


#### Enumerator TopHat

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1a511696f777f8fac40517c5d373550669acd678285c2431c505ac62192462e0b04"></a>


#### Enumerator File

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1a511696f777f8fac40517c5d373550669a0b27918290ff5323bea1e3b78a9cf04e"></a>


#### Enumerator DLL

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1a511696f777f8fac40517c5d373550669a5884e40d596370be5406f2711ad9e39a"></a>


#### Enumerator Multimode

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1a511696f777f8fac40517c5d373550669a8dcd3cfa735104c697732a631a536873"></a>


#### Enumerator AstigmaticGaussian

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1a511696f777f8fac40517c5d373550669abc1d30cf733912a57ac8e2f2f3946e15"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.PhysicalOptics.POPBeamTypes"}]}`
-->

### Enumeration type POPShowAsTypes

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1ae30fdb8fdb0211468f6c327078553bba"></a>

![][public]

**Definition**:


```csharp
enum POPShowAsTypes {
  Surface = 0,
  Contour,
  GrayScale,
  InverseGrayScale,
  FalseColor,
  InverseFalseColor,
  CrossX,
  CrossY,
  Encircled,
  Ensquared,
  EnslittedX,
  EnslittedY
}
```


#### Enumerator Surface

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1ae30fdb8fdb0211468f6c327078553bbaaaa0d528ba11ea1485d466dfe1ea40819"></a>


#### Enumerator Contour

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1ae30fdb8fdb0211468f6c327078553bbaa0b3303e86f36d6d2b1266da88cf76e66"></a>


#### Enumerator GrayScale

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1ae30fdb8fdb0211468f6c327078553bbaa4f90b9cafa6fec5c0bd8cb1df7281693"></a>


#### Enumerator InverseGrayScale

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1ae30fdb8fdb0211468f6c327078553bbaaada604e60926504a7f8e5deb9030f297"></a>


#### Enumerator FalseColor

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1ae30fdb8fdb0211468f6c327078553bbaa3b3314e69620db4b63df409526d034dd"></a>


#### Enumerator InverseFalseColor

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1ae30fdb8fdb0211468f6c327078553bbaa28f8d40e579b2808c44974521fcdd3a4"></a>


#### Enumerator CrossX

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1ae30fdb8fdb0211468f6c327078553bbaad4c160f7e70b4f22b820df637e41ec26"></a>


#### Enumerator CrossY

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1ae30fdb8fdb0211468f6c327078553bbaa275b69e2e80b5b1d98ab239b8071af68"></a>


#### Enumerator Encircled

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1ae30fdb8fdb0211468f6c327078553bbaa46510131c093d632cdc30a193c8a65da"></a>


#### Enumerator Ensquared

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1ae30fdb8fdb0211468f6c327078553bbaa0b5e91fb01cf07b9fd11d3e4bf25bee2"></a>


#### Enumerator EnslittedX

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1ae30fdb8fdb0211468f6c327078553bbaa144a4ce36384f908ebb69d3d357ffcd2"></a>


#### Enumerator EnslittedY

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1ae30fdb8fdb0211468f6c327078553bbaa50517896cca2753b11819b0c9972662b"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.PhysicalOptics.POPShowAsTypes"}]}`
-->

### Enumeration type POPDataTypes

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1a639669420a821cea3a7c51140a406553"></a>

![][public]

**Definition**:


```csharp
enum POPDataTypes {
  Irradiance = 0,
  EXIrradiance,
  EYIrradiance,
  Phase,
  EXPhase,
  EYPhase,
  TransferMagnitude,
  TransferPhase
}
```


#### Enumerator Irradiance

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1a639669420a821cea3a7c51140a406553acf28b3da655555d61c56fd01d012f0d2"></a>


#### Enumerator EXIrradiance

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1a639669420a821cea3a7c51140a406553a123428323a7a3102cf160dd04166bbad"></a>


#### Enumerator EYIrradiance

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1a639669420a821cea3a7c51140a406553a3135b7c9b29925d4ad5a296c92182584"></a>


#### Enumerator Phase

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1a639669420a821cea3a7c51140a406553a5e35d7fff7b903516cba242ff68fc6d3"></a>


#### Enumerator EXPhase

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1a639669420a821cea3a7c51140a406553a265b8016c44631db20fe1906d09a427c"></a>


#### Enumerator EYPhase

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1a639669420a821cea3a7c51140a406553aa7ff0493723626ea938f14cbf42ba31e"></a>


#### Enumerator TransferMagnitude

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1a639669420a821cea3a7c51140a406553a0a58b64be0e4a67d8319d44f06d38f90"></a>


#### Enumerator TransferPhase

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1a639669420a821cea3a7c51140a406553ada71346f0ac3c9740c4405fedeae85fe"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.PhysicalOptics.POPDataTypes"}]}`
-->

### Enumeration type POPProjectionTypes

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1a6f171b2f8d8d89d0820f9027aa4213a5"></a>

![][public]

**Definition**:


```csharp
enum POPProjectionTypes {
  AlongBeam = 0,
  AlongNormal,
  AlongLocalZ
}
```


#### Enumerator AlongBeam

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1a6f171b2f8d8d89d0820f9027aa4213a5a85283c942755f54531c09e2ef754b23f"></a>


#### Enumerator AlongNormal

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1a6f171b2f8d8d89d0820f9027aa4213a5a98da9db0be3f1bb15652eefac923dcbc"></a>


#### Enumerator AlongLocalZ

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1a6f171b2f8d8d89d0820f9027aa4213a5ae57a0dcf668b1c9ec9a731ab02e3a6ce"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.PhysicalOptics.POPProjectionTypes"}]}`
-->

### Enumeration type POPScaleTypes

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1aa93bf9b40b23578a6b2200bc655be1fd"></a>

![][public]

**Definition**:


```csharp
enum POPScaleTypes {
  Linear = 0,
  Log_Minus_5,
  Log_Minus_10,
  Log_Minus_15
}
```


#### Enumerator Linear

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1aa93bf9b40b23578a6b2200bc655be1fda32a843da6ea40ab3b17a3421ccdf671b"></a>


#### Enumerator Log\_Minus\_5

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1aa93bf9b40b23578a6b2200bc655be1fdafe0a6990e4852712c7ad0222a8e51007"></a>


#### Enumerator Log\_Minus\_10

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1aa93bf9b40b23578a6b2200bc655be1fdacf1e3b9b35b12816f0e0afb7b26a51e5"></a>


#### Enumerator Log\_Minus\_15

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1aa93bf9b40b23578a6b2200bc655be1fda74f280695bee2053c0e5823d031f0c17"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.PhysicalOptics.POPScaleTypes"}]}`
-->

### Enumeration type POPZoomTypes

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1af19eef04769de9e8125514369b54e3d4"></a>

![][public]

**Definition**:


```csharp
enum POPZoomTypes {
  NoZoom = 0,
  X2,
  X4,
  X8,
  X16
}
```


#### Enumerator NoZoom

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1af19eef04769de9e8125514369b54e3d4a0fcb7858120d7271d24175c450bd11d4"></a>


#### Enumerator X2

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1af19eef04769de9e8125514369b54e3d4a54105bddbfe3f639d49cbe8f5182c958"></a>


#### Enumerator X4

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1af19eef04769de9e8125514369b54e3d4a7d71ed2af4cc5c6a8380324d9bc4a45f"></a>


#### Enumerator X8

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1af19eef04769de9e8125514369b54e3d4ab8295fda5d2245c683e47e1137656c78"></a>


#### Enumerator X16

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1af19eef04769de9e8125514369b54e3d4a8566d518618cc93194d9e7688e2dafa2"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.PhysicalOptics.POPZoomTypes"}]}`
-->

### Enumeration type POPFiberTypes

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1ab67d078e8b3e99d4bd1151f740eb6291"></a>

![][public]

**Definition**:


```csharp
enum POPFiberTypes {
  GaussianWaist = 0,
  GaussianAngle,
  GaussianSizeAngle,
  TopHat,
  File,
  DLL,
  AstigmaticGaussian
}
```


#### Enumerator GaussianWaist

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1ab67d078e8b3e99d4bd1151f740eb6291a495bda6af42748fb0f56eab2b5eddad2"></a>


#### Enumerator GaussianAngle

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1ab67d078e8b3e99d4bd1151f740eb6291a77b0d4800107b7d1d016ff6a5427b082"></a>


#### Enumerator GaussianSizeAngle

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1ab67d078e8b3e99d4bd1151f740eb6291a97342b92a715b22d211e53388ec6c6c0"></a>


#### Enumerator TopHat

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1ab67d078e8b3e99d4bd1151f740eb6291acd678285c2431c505ac62192462e0b04"></a>


#### Enumerator File

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1ab67d078e8b3e99d4bd1151f740eb6291a0b27918290ff5323bea1e3b78a9cf04e"></a>


#### Enumerator DLL

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1ab67d078e8b3e99d4bd1151f740eb6291a5884e40d596370be5406f2711ad9e39a"></a>


#### Enumerator AstigmaticGaussian

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1ab67d078e8b3e99d4bd1151f740eb6291abc1d30cf733912a57ac8e2f2f3946e15"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.PhysicalOptics.POPFiberTypes"}]}`
-->

### Enumeration type POPFiberPositions

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1a19ee41c9db559c87637118ded506bb64"></a>

![][public]

**Definition**:


```csharp
enum POPFiberPositions {
  ChiefRay = 0,
  SurfaceVertex
}
```


#### Enumerator ChiefRay

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1a19ee41c9db559c87637118ded506bb64ab67fb49a78858076df25bdcc64755c34"></a>


#### Enumerator SurfaceVertex

<a id="namespace_z_o_s_a_p_i_1_1_analysis_1_1_physical_optics_1a19ee41c9db559c87637118ded506bb64a54e997d90d985ec30028a196b248db63"></a>


<!--
**TODO**:

* `qualifiedname {"type":"element","name":"qualifiedname","attributes":{},"children":[{"type":"text","text":"ZOSAPI.Analysis.PhysicalOptics.POPFiberPositions"}]}`
-->

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[package]: https://img.shields.io/badge/-package-blueviolet (package)