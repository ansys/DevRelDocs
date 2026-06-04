# C++ Interfaces for Participant Library

Provides C++ interfaces to the System Coupling participant library.



## Enumeration types

<a id="group__SystemCouplingParticipantAPIs_1gaffd523474fbd708f481a712f1841a967"></a>
### Enumeration type AnalysisType

![][public]

**Definition**: `CommonSettings.hpp` (line 14)


```cpp
enum AnalysisType {
  Steady = 0,
  Transient = 1,
  Mapping = 2
}
```


Provide an enum for coupled analysis type.





<a id="group__SystemCouplingParticipantAPIs_1ggaffd523474fbd708f481a712f1841a967aed2022bd80a52b241675f1bf5a1418f2"></a>
#### Enumerator Steady





<a id="group__SystemCouplingParticipantAPIs_1ggaffd523474fbd708f481a712f1841a967a9704686aedf6f368cb2f10b6fd81c4a3"></a>
#### Enumerator Transient





<a id="group__SystemCouplingParticipantAPIs_1ggaffd523474fbd708f481a712f1841a967ad7924ed33d7fda74881085e55882e8e2"></a>
#### Enumerator Mapping





<a id="group__SystemCouplingParticipantAPIs_1gad13ee117d1f4408660fa2e70ee27b454"></a>
### Enumeration type TimeIntegration

![][public]

**Definition**: `CommonSettings.hpp` (line 21)


```cpp
enum TimeIntegration {
  Implicit = 0,
  Explicit = 1
}
```


Provide an enum for time integration.





<a id="group__SystemCouplingParticipantAPIs_1ggad13ee117d1f4408660fa2e70ee27b454a07e01d7a96d9fd76cf08aa5916f7c788"></a>
#### Enumerator Implicit





<a id="group__SystemCouplingParticipantAPIs_1ggad13ee117d1f4408660fa2e70ee27b454a9d71760e2dd451db2df354d0fd29cd7f"></a>
#### Enumerator Explicit





<a id="group__SystemCouplingParticipantAPIs_1ga47c8e4142175574918b84d336780cc7c"></a>
### Enumeration type Dimension

![][public]

**Definition**: `CommonSettings.hpp` (line 27)


```cpp
enum Dimension {
  D2 = 2,
  D3 = 3
}
```


Provide an enum for participant dimension.





<a id="group__SystemCouplingParticipantAPIs_1gga47c8e4142175574918b84d336780cc7cac4d62b6dcca08e5caf06c01889282859"></a>
#### Enumerator D2





<a id="group__SystemCouplingParticipantAPIs_1gga47c8e4142175574918b84d336780cc7caa3deb6e481689f1d3303caecb8a6c401"></a>
#### Enumerator D3





<a id="group__SystemCouplingParticipantAPIs_1ga8f85e1fca4e3c3d086644ea6fb4b8fb7"></a>
### Enumeration type TensorType

![][public]

**Definition**: `CommonSettings.hpp` (line 33)


```cpp
enum TensorType {
  Scalar = 0,
  Vector = 1
}
```


Provide enum for variable tensor types.





<a id="group__SystemCouplingParticipantAPIs_1gga8f85e1fca4e3c3d086644ea6fb4b8fb7aba321b97d67a2608dc5d0f5c0c46ed6c"></a>
#### Enumerator Scalar





<a id="group__SystemCouplingParticipantAPIs_1gga8f85e1fca4e3c3d086644ea6fb4b8fb7ab763547ef771efbebfa7e079d5dac4a3"></a>
#### Enumerator Vector





<a id="group__SystemCouplingParticipantAPIs_1ga59080d26b5838a6c678ee5f0d6ff63a4"></a>
### Enumeration type RegionDiscretizationType

![][public]

**Definition**: `CommonSettings.hpp` (line 39)


```cpp
enum RegionDiscretizationType {
  MeshRegion = 0,
  PointCloudRegion = 1
}
```


Provide enum for region discretization types.





<a id="group__SystemCouplingParticipantAPIs_1gga59080d26b5838a6c678ee5f0d6ff63a4a591159c5b2e759bfe53d859dfd390dc6"></a>
#### Enumerator MeshRegion





<a id="group__SystemCouplingParticipantAPIs_1gga59080d26b5838a6c678ee5f0d6ff63a4ae80f29e862b732e9eb9ce878e5f657c2"></a>
#### Enumerator PointCloudRegion





<a id="group__SystemCouplingParticipantAPIs_1gae8967650e49639319360bad6efc649a4"></a>
### Enumeration type InterfaceSide

![][public]

**Definition**: `CommonSettings.hpp` (line 45)


```cpp
enum InterfaceSide {
  One = 1,
  Two = 2
}
```


Provide enum for coupling interface side.





<a id="group__SystemCouplingParticipantAPIs_1ggae8967650e49639319360bad6efc649a4a06c2cea18679d64399783748fa367bdd"></a>
#### Enumerator One





<a id="group__SystemCouplingParticipantAPIs_1ggae8967650e49639319360bad6efc649a4aaada29daee1d64ed0fe907043855cb7e"></a>
#### Enumerator Two





<a id="group__SystemCouplingParticipantAPIs_1gaced2664a481a6250f46140266dd38c2a"></a>
### Enumeration type Location

![][public]

**Definition**: `CommonSettings.hpp` (line 51)


```cpp
enum Location {
  Node = 0,
  Element = 1
}
```


Provide enum for variable mesh locations.





<a id="group__SystemCouplingParticipantAPIs_1ggaced2664a481a6250f46140266dd38c2aa9551eb028b9c9b5ac93773a676d2c843"></a>
#### Enumerator Node





<a id="group__SystemCouplingParticipantAPIs_1ggaced2664a481a6250f46140266dd38c2aaba25053c11347c571dcf358a79a8219e"></a>
#### Enumerator Element





<a id="group__SystemCouplingParticipantAPIs_1gab4cbdd3230a1cb38956f5b93f941f89b"></a>
### Enumeration type QuantityType

![][public]

**Definition**: `CommonSettings.hpp` (line 64)


```cpp
enum QuantityType {
  Unspecified = 0,
  Force = 1,
  IncrementalDisplacement = 2,
  Temperature = 3,
  HeatRate = 4,
  HeatTransferCoefficient = 5,
  ConvectionReferenceTemperature = 6,
  ModeShape = 7,
  ElectricalConductivity = 8
}
```


Provide an enum for variable quantity types.

Quantity type provides information about the physical meaning of the variable. This can be useful for detecting validation errors during the coupled analysis setup. If the variable does not match any of the provided quantity types, quantity type can be set to unspecified.



<a id="group__SystemCouplingParticipantAPIs_1ggab4cbdd3230a1cb38956f5b93f941f89bac11f48f9402560fdacecd5b0524bee21"></a>
#### Enumerator Unspecified





<a id="group__SystemCouplingParticipantAPIs_1ggab4cbdd3230a1cb38956f5b93f941f89ba9846558f80a3dfdb81662f8b478793f2"></a>
#### Enumerator Force





<a id="group__SystemCouplingParticipantAPIs_1ggab4cbdd3230a1cb38956f5b93f941f89ba6b6230fdc12f7e3357e7a7c2e48abe32"></a>
#### Enumerator IncrementalDisplacement





<a id="group__SystemCouplingParticipantAPIs_1ggab4cbdd3230a1cb38956f5b93f941f89ba832a4fab2f6f7c48b8ff7346039ecdbe"></a>
#### Enumerator Temperature





<a id="group__SystemCouplingParticipantAPIs_1ggab4cbdd3230a1cb38956f5b93f941f89ba995609fd76c6ce7a5a94fb68a04c0de7"></a>
#### Enumerator HeatRate





<a id="group__SystemCouplingParticipantAPIs_1ggab4cbdd3230a1cb38956f5b93f941f89ba0e45879a36aca3b228a8b288cec37a5c"></a>
#### Enumerator HeatTransferCoefficient





<a id="group__SystemCouplingParticipantAPIs_1ggab4cbdd3230a1cb38956f5b93f941f89bae1ac9d55d476664359492c087f1057aa"></a>
#### Enumerator ConvectionReferenceTemperature





<a id="group__SystemCouplingParticipantAPIs_1ggab4cbdd3230a1cb38956f5b93f941f89ba0d1bbcf4a470b8947de19d2b32f8850b"></a>
#### Enumerator ModeShape





<a id="group__SystemCouplingParticipantAPIs_1ggab4cbdd3230a1cb38956f5b93f941f89ba9f04c799ae4c74fd28d525b6a79a2c74"></a>
#### Enumerator ElectricalConductivity





<a id="group__SystemCouplingParticipantAPIs_1ga027fa6f9b7d7164dc4428aa4151c0ead"></a>
### Enumeration type ParticipantType

![][public]

**Definition**: `CommonSettings.hpp` (line 124)


```cpp
enum ParticipantType {
  DEFAULT = 0,
  CFX = 1,
  FLUENT = 2,
  MAPDL = 3,
  AEDT = 4,
  FMU = 5,
  FMU_PROXY = 6,
  EXTERNALDATA = 7,
  FORTE = 8,
  DEFAULT_SRV = 9,
  MECH_SRV = 10,
  CFD_SRV = 11,
  SCDT_SRV = 12,
  THERMAL_DESKTOP = 13,
  LS_DYNA = 14,
  ROCKY = 15,
  FILE = 16
}
```








<a id="group__SystemCouplingParticipantAPIs_1gga027fa6f9b7d7164dc4428aa4151c0eada5b39c8b553c821e7cddc6da64b5bd2ee"></a>
#### Enumerator DEFAULT





<a id="group__SystemCouplingParticipantAPIs_1gga027fa6f9b7d7164dc4428aa4151c0eada5dc894c15f1e915c3c645fccccf0bdcb"></a>
#### Enumerator CFX





<a id="group__SystemCouplingParticipantAPIs_1gga027fa6f9b7d7164dc4428aa4151c0eada7a24eed6e9339ece7b5a570dc73ef9b5"></a>
#### Enumerator FLUENT





<a id="group__SystemCouplingParticipantAPIs_1gga027fa6f9b7d7164dc4428aa4151c0eada6913fdfd6da5ea7a03738db6b7bc05dd"></a>
#### Enumerator MAPDL





<a id="group__SystemCouplingParticipantAPIs_1gga027fa6f9b7d7164dc4428aa4151c0eada69167616d87e60c33061de51f7aed6d1"></a>
#### Enumerator AEDT





<a id="group__SystemCouplingParticipantAPIs_1gga027fa6f9b7d7164dc4428aa4151c0eadad440c558a9c8c6a54cc6b04b9dfce1fe"></a>
#### Enumerator FMU





<a id="group__SystemCouplingParticipantAPIs_1gga027fa6f9b7d7164dc4428aa4151c0eada634acd4d7cb1aff078329d8ac7946491"></a>
#### Enumerator FMU\_PROXY





<a id="group__SystemCouplingParticipantAPIs_1gga027fa6f9b7d7164dc4428aa4151c0eada7715f8174337720ef73255e93d779aae"></a>
#### Enumerator EXTERNALDATA





<a id="group__SystemCouplingParticipantAPIs_1gga027fa6f9b7d7164dc4428aa4151c0eadaaea7e346465ac78c96e0ae6514590e27"></a>
#### Enumerator FORTE





<a id="group__SystemCouplingParticipantAPIs_1gga027fa6f9b7d7164dc4428aa4151c0eada7fa489782c1bf5ffb44aee8a0ff6c2ac"></a>
#### Enumerator DEFAULT\_SRV





<a id="group__SystemCouplingParticipantAPIs_1gga027fa6f9b7d7164dc4428aa4151c0eada4e1b4dc853b578f8c812187c37c32dc9"></a>
#### Enumerator MECH\_SRV





<a id="group__SystemCouplingParticipantAPIs_1gga027fa6f9b7d7164dc4428aa4151c0eada1f73a7243a42341b52d78a0ea18a0584"></a>
#### Enumerator CFD\_SRV





<a id="group__SystemCouplingParticipantAPIs_1gga027fa6f9b7d7164dc4428aa4151c0eadafce31b302e963fe6a87adc6e0214ecea"></a>
#### Enumerator SCDT\_SRV





<a id="group__SystemCouplingParticipantAPIs_1gga027fa6f9b7d7164dc4428aa4151c0eadae2344ba1990077ba754a7dfe168fe05f"></a>
#### Enumerator THERMAL\_DESKTOP





<a id="group__SystemCouplingParticipantAPIs_1gga027fa6f9b7d7164dc4428aa4151c0eada5aecd34705157c204ed569de97ce94ca"></a>
#### Enumerator LS\_DYNA





<a id="group__SystemCouplingParticipantAPIs_1gga027fa6f9b7d7164dc4428aa4151c0eada6cd910740cbbbbd0f55238a93fba157d"></a>
#### Enumerator ROCKY





<a id="group__SystemCouplingParticipantAPIs_1gga027fa6f9b7d7164dc4428aa4151c0eada9fc5887c030f7a3e19821ebec457e719"></a>
#### Enumerator FILE





<a id="group__SystemCouplingParticipantAPIs_1ga0b8801743579159eb41cf07d8372a734"></a>
### Enumeration type ConvergenceStatus

![][public]

**Definition**: `CommonTypes.hpp` (line 28)


```cpp
enum ConvergenceStatus {
  Diverging = -1,
  NotYetConverged = 0,
  Converged = 1,
  Complete = 2,
  NotEvaluated = 3
}
```


Provide enum for participant's solver convergence status.

Possible values are <code>Converged</code>, <code>NotYetConverged</code>, <code>Diverging</code>, <code>Complete</code> (can be used if, for example, direct solver is used), and <code>NotEvaluated</code>.



<a id="group__SystemCouplingParticipantAPIs_1gga0b8801743579159eb41cf07d8372a734ad3e9cc5b9b54b42ddc2f0e7f5ca01dd8"></a>
#### Enumerator Diverging





<a id="group__SystemCouplingParticipantAPIs_1gga0b8801743579159eb41cf07d8372a734a8cdad8d7c18d873855614a7259f56092"></a>
#### Enumerator NotYetConverged





<a id="group__SystemCouplingParticipantAPIs_1gga0b8801743579159eb41cf07d8372a734a03f8296c70552eabb3a27b2c9ecad828"></a>
#### Enumerator Converged





<a id="group__SystemCouplingParticipantAPIs_1gga0b8801743579159eb41cf07d8372a734ac4dbb40897291ab4cc092a0ff96c1e5b"></a>
#### Enumerator Complete





<a id="group__SystemCouplingParticipantAPIs_1gga0b8801743579159eb41cf07d8372a734af71064fc6024d2e2a9cc81abb1d25537"></a>
#### Enumerator NotEvaluated





<a id="group__SystemCouplingParticipantAPIs_1ga8c2b9557240fd9b2f908c98e3b1b27d3"></a>
### Enumeration type DataType

![][public]

**Definition**: `CommonTypes.hpp` (line 37)


```cpp
enum DataType {
  Real = 0,
  Complex = 1
}
```


Provide enum for variable data types.





<a id="group__SystemCouplingParticipantAPIs_1gga8c2b9557240fd9b2f908c98e3b1b27d3a7f80fcc452c2f1ed2bb51b39d0864df1"></a>
#### Enumerator Real





<a id="group__SystemCouplingParticipantAPIs_1gga8c2b9557240fd9b2f908c98e3b1b27d3a10b4eb76294b70d7fd6df997ff06edb1"></a>
#### Enumerator Complex





<a id="group__SystemCouplingParticipantAPIs_1gadbbc75f28fce0c9b5b31fa64bb8b1e39"></a>
### Enumeration type Topology

![][public]

**Definition**: `CommonTypes.hpp` (line 211)


```cpp
enum Topology {
  Surface = 2,
  Volume = 3
}
```


Provide enum for region topologies.





<a id="group__SystemCouplingParticipantAPIs_1ggadbbc75f28fce0c9b5b31fa64bb8b1e39a6fc82413309f82daff44c6e85922b314"></a>
#### Enumerator Surface





<a id="group__SystemCouplingParticipantAPIs_1ggadbbc75f28fce0c9b5b31fa64bb8b1e39a737a5ee3ec25ba0001091f96a7e8f301"></a>
#### Enumerator Volume





<a id="group__SystemCouplingParticipantAPIs_1gad3b1c73e4a63f4d292d65f3db875e844"></a>
### Enumeration type PrimitiveType

![][public]

**Definition**: `CommonTypes.hpp` (line 257)


```cpp
enum PrimitiveType {
  Float = 0,
  Double = 1,
  Int32 = 2,
  Int64 = 3,
  UnsignedInt16 = 4,
  UnsignedInt64 = 5
}
```


Provide enum for supported primitive types.





<a id="group__SystemCouplingParticipantAPIs_1ggad3b1c73e4a63f4d292d65f3db875e844af25f11e4d5a18405d2880727956e3c06"></a>
#### Enumerator Float



Single-precision floating point.

<a id="group__SystemCouplingParticipantAPIs_1ggad3b1c73e4a63f4d292d65f3db875e844a29843d2c1bb5760f768dcc066dac1ac1"></a>
#### Enumerator Double



Double-precision floating point.

<a id="group__SystemCouplingParticipantAPIs_1ggad3b1c73e4a63f4d292d65f3db875e844a65168a2fa10ccf906e55b9ae11f4d98d"></a>
#### Enumerator Int32



Signed 32-bit integer.

<a id="group__SystemCouplingParticipantAPIs_1ggad3b1c73e4a63f4d292d65f3db875e844a7280672fe5e965512085d9837dbacf7f"></a>
#### Enumerator Int64



Signed 64-bit integer.

<a id="group__SystemCouplingParticipantAPIs_1ggad3b1c73e4a63f4d292d65f3db875e844aa75e06a552b1c3cbfd131efe80431fa0"></a>
#### Enumerator UnsignedInt16



Unsigned 16-bit integer.

<a id="group__SystemCouplingParticipantAPIs_1ggad3b1c73e4a63f4d292d65f3db875e844a89e71558fbcaabe137d0bcf04df90462"></a>
#### Enumerator UnsignedInt64



Unsigned 64-bit integer.

<a id="group__SystemCouplingParticipantAPIs_1ga0ae3dc5b82c48ff55c9a7b8064b67323"></a>
### Enumeration type ElementTypes

![][public]

**Definition**: `ElementTypes.hpp` (line 233)


```cpp
enum ElementTypes {
  Tri3 = 5u,
  Tri6 = 6u,
  Quad4 = 7u,
  Quad8 = 8u,
  Tet4 = 9u,
  Tet10 = 10u,
  Hex8 = 11u,
  Hex20 = 12u,
  Wedge6 = 13u,
  Wedge15 = 14u,
  Pyramid5 = 15u,
  Pyramid13 = 16u,
  Polygon = 18u,
  Polyhedron = 19u
}
```


Provide an enum for element types.





<a id="group__SystemCouplingParticipantAPIs_1gga0ae3dc5b82c48ff55c9a7b8064b67323a9623fe6fd6981ce17add24f854d83dd9"></a>
#### Enumerator Tri3





<a id="group__SystemCouplingParticipantAPIs_1gga0ae3dc5b82c48ff55c9a7b8064b67323ad299a283927ee1bd30da2030d7d170e7"></a>
#### Enumerator Tri6





<a id="group__SystemCouplingParticipantAPIs_1gga0ae3dc5b82c48ff55c9a7b8064b67323a7e543de6ba602d09b9bd5cb5e1eee77c"></a>
#### Enumerator Quad4





<a id="group__SystemCouplingParticipantAPIs_1gga0ae3dc5b82c48ff55c9a7b8064b67323a81a164b246c5014e888b66929f52f590"></a>
#### Enumerator Quad8





<a id="group__SystemCouplingParticipantAPIs_1gga0ae3dc5b82c48ff55c9a7b8064b67323aefce62c84b71a450f18ff1dcbcdd2a2a"></a>
#### Enumerator Tet4





<a id="group__SystemCouplingParticipantAPIs_1gga0ae3dc5b82c48ff55c9a7b8064b67323aaf7603f71de7e48a157bf9fb1430f847"></a>
#### Enumerator Tet10





<a id="group__SystemCouplingParticipantAPIs_1gga0ae3dc5b82c48ff55c9a7b8064b67323af386881f58c90062b2624e9377036e02"></a>
#### Enumerator Hex8





<a id="group__SystemCouplingParticipantAPIs_1gga0ae3dc5b82c48ff55c9a7b8064b67323ac89524890b1e59e0ee0f4912dc050886"></a>
#### Enumerator Hex20





<a id="group__SystemCouplingParticipantAPIs_1gga0ae3dc5b82c48ff55c9a7b8064b67323a6646d3d53789f96a67e59db2fe7388eb"></a>
#### Enumerator Wedge6





<a id="group__SystemCouplingParticipantAPIs_1gga0ae3dc5b82c48ff55c9a7b8064b67323a6699b3e9656913b877a359eeb1b2f193"></a>
#### Enumerator Wedge15





<a id="group__SystemCouplingParticipantAPIs_1gga0ae3dc5b82c48ff55c9a7b8064b67323a5c9c4ee84fc999f7ab2f0c4e051fdb92"></a>
#### Enumerator Pyramid5





<a id="group__SystemCouplingParticipantAPIs_1gga0ae3dc5b82c48ff55c9a7b8064b67323ad8acfb9686b5763429e1cea71a055445"></a>
#### Enumerator Pyramid13





<a id="group__SystemCouplingParticipantAPIs_1gga0ae3dc5b82c48ff55c9a7b8064b67323a4c0a11247d92f73fb84baa51e37a3263"></a>
#### Enumerator Polygon





<a id="group__SystemCouplingParticipantAPIs_1gga0ae3dc5b82c48ff55c9a7b8064b67323a3d217ee3a015efcd968eff5f36a5f671"></a>
#### Enumerator Polyhedron





## Typedefs

<a id="group__SystemCouplingParticipantAPIs_1ga3dcc936dd59c405f399086e6488a83a1"></a>
### Typedef OpaqueDataAccess

![][public]

**Definition**: `CommonTypes.hpp` (line 266)


```cpp
using sysc::OpaqueDataAccess =  void*
```




Declare an opaque pointer type.



**Return type**: void *

<a id="group__SystemCouplingParticipantAPIs_1ga9bdc82c1ffda4e71e561435ff5743d80"></a>
### Typedef RegionName

![][public]

**Definition**: `CommonTypes.hpp` (line 268)


```cpp
using sysc::RegionName =  std::string
```




An alias for region name.



**Return type**: std::string

<a id="group__SystemCouplingParticipantAPIs_1gae0e04e97184eb0498ef2c5889482f226"></a>
### Typedef VariableName

![][public]

**Definition**: `CommonTypes.hpp` (line 269)


```cpp
using sysc::VariableName =  std::string
```




An alias for variable name.



**Return type**: std::string

<a id="group__SystemCouplingParticipantAPIs_1ga5dfb2720e04b5892c7174b54825e4a4c"></a>
### Typedef CouplingInterfaceName

![][public]

**Definition**: `CommonTypes.hpp` (line 270)


```cpp
using sysc::CouplingInterfaceName =  std::string
```




An alias for coupling interface name.



**Return type**: std::string

<a id="group__SystemCouplingParticipantAPIs_1ga3cd8c51acd0c07398338175ddde509ed"></a>
### Typedef RestartPoint

![][public]

**Definition**: `CommonTypes.hpp` (line 271)


```cpp
using sysc::RestartPoint =  std::string
```




An alias for restart point.



**Return type**: std::string

<a id="group__SystemCouplingParticipantAPIs_1ga7a4734ac8b9777365c9b5882ce4c83c4"></a>
### Typedef TargetDataLocation

![][public]

**Definition**: `CommonTypes.hpp` (line 272)


```cpp
using sysc::TargetDataLocation =  std::string
```




An alias for target data location.



**Return type**: std::string

<a id="group__SystemCouplingParticipantAPIs_1ga796c7c19b4b350965c7e8249733dda29"></a>
### Typedef DisplayName

![][public]

**Definition**: `CommonTypes.hpp` (line 273)


```cpp
using sysc::DisplayName =  std::string
```




An alias for display name.



**Return type**: std::string

<a id="group__SystemCouplingParticipantAPIs_1gadd7264f1feec4bb8bcba956857090025"></a>
### Typedef AttributeName

![][public]

**Definition**: `CommonTypes.hpp` (line 274)


```cpp
using sysc::AttributeName =  std::string
```




An alias for attribute name.



**Return type**: std::string

<a id="group__SystemCouplingParticipantAPIs_1ga08f98c067d8788e94493cb57f95f700d"></a>
### Typedef ParameterName

![][public]

**Definition**: `CommonTypes.hpp` (line 275)


```cpp
using sysc::ParameterName =  std::string
```




An alias for parameter name.



**Return type**: std::string

<a id="group__SystemCouplingParticipantAPIs_1ga447faf26b625c405b29e9650df671f3b"></a>
### Typedef Port

![][public]

**Definition**: `CommonTypes.hpp` (line 276)


```cpp
using sysc::Port =  unsigned short
```




An alias for port.



**Return type**: unsigned short

<a id="group__SystemCouplingParticipantAPIs_1gab30e3c61a7028c8f25acf9ae24062249"></a>
### Typedef Host

![][public]

**Definition**: `CommonTypes.hpp` (line 277)


```cpp
using sysc::Host =  std::string
```




An alias for host name.



**Return type**: std::string

<a id="group__SystemCouplingParticipantAPIs_1gaaad04c765c24612e77d18d91557af35b"></a>
### Typedef InputScalarDataAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 38)


```cpp
using sysc::InputScalarDataAccess =  InputScalarData(
  const RegionName&, const VariableName&)
```


Provide function prototype for access to input scalar data.

This function takes in the region and variable names and returns an [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData) object which provides access to the field data for that variable on that region.



**Return type**: InputScalarData( const RegionName &, const VariableName &)

<a id="group__SystemCouplingParticipantAPIs_1ga8be3c231601025fc2420af6e75ff6af6"></a>
### Typedef InputScalarDataAccessWithPointer

![][public]

**Definition**: `FunctionTypes.hpp` (line 48)


```cpp
using sysc::InputScalarDataAccessWithPointer =  InputScalarData(
  OpaqueDataAccess, const RegionName&, const VariableName&)
```


Provide function prototype for access to input scalar data.

This function takes the opaque pointer that is passed when this function is registered, as well as the region and variable names and returns an [InputScalarData](structsysc_1_1InputScalarData.md#structsysc_1_1InputScalarData) object which provides access to the field data for that variable on that region.



**Return type**: InputScalarData( OpaqueDataAccess, const RegionName &, const VariableName &)

<a id="group__SystemCouplingParticipantAPIs_1ga7d3b007f0179ce78753d7d9d56293c34"></a>
### Typedef InputVectorDataAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 57)


```cpp
using sysc::InputVectorDataAccess =  InputVectorData(
  const RegionName&, const VariableName&)
```


Provide function prototype for access to input vector data.

This function takes in the region and variable names and returns an [InputVectorData](structsysc_1_1InputVectorData.md#structsysc_1_1InputVectorData) object which provides access to the field data for that variable on that region.



**Return type**: InputVectorData( const RegionName &, const VariableName &)

<a id="group__SystemCouplingParticipantAPIs_1gaebbcb892cdae179c7a6799ad6a58deab"></a>
### Typedef InputVectorDataAccessWithPointer

![][public]

**Definition**: `FunctionTypes.hpp` (line 67)


```cpp
using sysc::InputVectorDataAccessWithPointer =  InputVectorData(
  OpaqueDataAccess, const RegionName&, const VariableName&)
```


Provide function prototype for access to input vector data.

This function takes the opaque pointer that is passed when this function is registered, as well as the region and variable names and returns an [InputVectorData](structsysc_1_1InputVectorData.md#structsysc_1_1InputVectorData) object which provides access to the field data for that variable on that region.



**Return type**: InputVectorData( OpaqueDataAccess, const RegionName &, const VariableName &)

<a id="group__SystemCouplingParticipantAPIs_1ga2ed324adff947c3aff51a2e9b7f7ccd6"></a>
### Typedef OutputScalarDataAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 76)


```cpp
using sysc::OutputScalarDataAccess =  OutputScalarData(
  const RegionName&, const VariableName&)
```


Provide function prototype for access to output scalar data.

This function takes in the region and variable names and returns an [OutputScalarData](structsysc_1_1OutputScalarData.md#structsysc_1_1OutputScalarData) object which provides access to the field data for that variable on that region.



**Return type**: OutputScalarData( const RegionName &, const VariableName &)

<a id="group__SystemCouplingParticipantAPIs_1gad3d92daebfeba1bdb4bcbeb87568e48d"></a>
### Typedef OutputScalarDataAccessWithPointer

![][public]

**Definition**: `FunctionTypes.hpp` (line 86)


```cpp
using sysc::OutputScalarDataAccessWithPointer =  OutputScalarData(
  OpaqueDataAccess, const RegionName&, const VariableName&)
```


Provide function prototype for access to output scalar data.

This function takes the opaque pointer that is passed when this function is registered, as well as the region and variable names and returns an [OutputScalarData](structsysc_1_1OutputScalarData.md#structsysc_1_1OutputScalarData) object which provides access to the field data for that variable on that region.



**Return type**: OutputScalarData( OpaqueDataAccess, const RegionName &, const VariableName &)

<a id="group__SystemCouplingParticipantAPIs_1ga4ffeb6edbdc770571fe4e862d39126f3"></a>
### Typedef OutputVectorDataAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 95)


```cpp
using sysc::OutputVectorDataAccess =  OutputVectorData(
  const RegionName&, const VariableName&)
```


Provide function prototype for access to output vector data.

This function takes in the region and variable names and returns an [OutputVectorData](structsysc_1_1OutputVectorData.md#structsysc_1_1OutputVectorData) object which provides access to the field data for that variable on that region.



**Return type**: OutputVectorData( const RegionName &, const VariableName &)

<a id="group__SystemCouplingParticipantAPIs_1ga758bd2ddfa1cf72f026de47d331bf6bb"></a>
### Typedef OutputVectorDataAccessWithPointer

![][public]

**Definition**: `FunctionTypes.hpp` (line 105)


```cpp
using sysc::OutputVectorDataAccessWithPointer =  OutputVectorData(
  OpaqueDataAccess, const RegionName&, const VariableName&)
```


Provide function prototype for access to output vector data.

This function takes the opaque pointer that is passed when this function is registered, as well as the region and variable names and returns an [OutputVectorData](structsysc_1_1OutputVectorData.md#structsysc_1_1OutputVectorData) object which provides access to the field data for that variable on that region.



**Return type**: OutputVectorData( OpaqueDataAccess, const RegionName &, const VariableName &)

<a id="group__SystemCouplingParticipantAPIs_1ga36d8b724b8d29446befcbbfd36bc9081"></a>
### Typedef InputComplexScalarDataAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 114)


```cpp
using sysc::InputComplexScalarDataAccess =  InputComplexScalarData(
  const RegionName&, const VariableName&)
```


Provide function prototype for access to input complex scalar data.

This function takes in the region and variable names and returns an [InputComplexScalarData](structsysc_1_1InputComplexScalarData.md#structsysc_1_1InputComplexScalarData) object which provides access to the field data for that variable on that region.



**Return type**: InputComplexScalarData( const RegionName &, const VariableName &)

<a id="group__SystemCouplingParticipantAPIs_1gaccd9f8071ee9ed85364112763c5a9c23"></a>
### Typedef InputComplexScalarDataAccessWithPointer

![][public]

**Definition**: `FunctionTypes.hpp` (line 124)


```cpp
using sysc::InputComplexScalarDataAccessWithPointer =  InputComplexScalarData(
  OpaqueDataAccess, const RegionName&, const VariableName&)
```


Provide function prototype for access to input complex scalar data.

This function takes the opaque pointer that is passed when this function is registered, as well as the region and variable names and returns an [InputComplexScalarData](structsysc_1_1InputComplexScalarData.md#structsysc_1_1InputComplexScalarData) object which provides access to the field data for that variable on that region.



**Return type**: InputComplexScalarData( OpaqueDataAccess, const RegionName &, const VariableName &)

<a id="group__SystemCouplingParticipantAPIs_1gadfb35e26b2c76666bb102245bea94b0e"></a>
### Typedef InputComplexVectorDataAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 133)


```cpp
using sysc::InputComplexVectorDataAccess =  InputComplexVectorData(
  const RegionName&, const VariableName&)
```


Provide function prototype for access to input complex vector data.

This function takes in the region and variable names and returns an [InputComplexVectorData](structsysc_1_1InputComplexVectorData.md#structsysc_1_1InputComplexVectorData) object which provides access to the field data for that variable on that region.



**Return type**: InputComplexVectorData( const RegionName &, const VariableName &)

<a id="group__SystemCouplingParticipantAPIs_1ga250cf80ce1d710c0d7497ba705d1f993"></a>
### Typedef InputComplexVectorDataAccessWithPointer

![][public]

**Definition**: `FunctionTypes.hpp` (line 143)


```cpp
using sysc::InputComplexVectorDataAccessWithPointer =  InputComplexVectorData(
  OpaqueDataAccess, const RegionName&, const VariableName&)
```


Provide function prototype for access to input complex vector data.

This function takes the opaque pointer that is passed when this function is registered, as well as the region and variable names and returns an [InputComplexVectorData](structsysc_1_1InputComplexVectorData.md#structsysc_1_1InputComplexVectorData) object which provides access to the field data for that variable on that region.



**Return type**: InputComplexVectorData( OpaqueDataAccess, const RegionName &, const VariableName &)

<a id="group__SystemCouplingParticipantAPIs_1ga431c9f845cb4bbad9174e3a70d81ff0f"></a>
### Typedef OutputComplexScalarDataAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 152)


```cpp
using sysc::OutputComplexScalarDataAccess =  OutputComplexScalarData(
  const RegionName&, const VariableName&)
```


Provide function prototype for access to output complex scalar data.

This function takes in the region and variable names and returns an [OutputComplexScalarData](structsysc_1_1OutputComplexScalarData.md#structsysc_1_1OutputComplexScalarData) object which provides access to the field data for that variable on that region.



**Return type**: OutputComplexScalarData( const RegionName &, const VariableName &)

<a id="group__SystemCouplingParticipantAPIs_1ga85c1b08d51d12738d273e29fe40cc48b"></a>
### Typedef OutputComplexScalarDataAccessWithPointer

![][public]

**Definition**: `FunctionTypes.hpp` (line 162)


```cpp
using sysc::OutputComplexScalarDataAccessWithPointer =  OutputComplexScalarData(
  OpaqueDataAccess, const RegionName&, const VariableName&)
```


Provide function prototype for access to output complex scalar data.

This function takes the opaque pointer that is passed when this function is registered, as well as the region and variable names and returns an [OutputComplexScalarData](structsysc_1_1OutputComplexScalarData.md#structsysc_1_1OutputComplexScalarData) object which provides access to the field data for that variable on that region.



**Return type**: OutputComplexScalarData( OpaqueDataAccess, const RegionName &, const VariableName &)

<a id="group__SystemCouplingParticipantAPIs_1gab30052bc6d510993ef246d210be731af"></a>
### Typedef OutputComplexVectorDataAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 171)


```cpp
using sysc::OutputComplexVectorDataAccess =  OutputComplexVectorData(
  const RegionName&, const VariableName&)
```


Provide function prototype for access to output complex vector data.

This function takes in the region and variable names and returns an [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData) object which provides access to the field data for that variable on that region.



**Return type**: OutputComplexVectorData( const RegionName &, const VariableName &)

<a id="group__SystemCouplingParticipantAPIs_1ga9bd48650ddd8c04c50cb6d37e1fa86cd"></a>
### Typedef OutputComplexVectorDataAccessWithPointer

![][public]

**Definition**: `FunctionTypes.hpp` (line 181)


```cpp
using sysc::OutputComplexVectorDataAccessWithPointer =  OutputComplexVectorData(
  OpaqueDataAccess, const RegionName&, const VariableName&)
```


Provide function prototype for access to output complex vector data.

This function takes the opaque pointer that is passed when this function is registered, as well as the region and variable names and returns an [OutputComplexVectorData](structsysc_1_1OutputComplexVectorData.md#structsysc_1_1OutputComplexVectorData) object which provides access to the field data for that variable on that region.



**Return type**: OutputComplexVectorData( OpaqueDataAccess, const RegionName &, const VariableName &)

<a id="group__SystemCouplingParticipantAPIs_1ga1f81d467a0a6b65c123eaef21f2957c2"></a>
### Typedef SurfaceMeshAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 190)


```cpp
using sysc::SurfaceMeshAccess =  SurfaceMesh(const RegionName&)
```


Provide alias for function that provides access to surface mesh.

This function takes in a region name and returns a [SurfaceMesh](classsysc_1_1SurfaceMesh.md#classsysc_1_1SurfaceMesh) object which provides access to the surface mesh of that region. [Topology](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gadbbc75f28fce0c9b5b31fa64bb8b1e39) of this region must be surface.



**Return type**: SurfaceMesh(const RegionName &)

<a id="group__SystemCouplingParticipantAPIs_1gad421257a5f7eb321610c366044df8036"></a>
### Typedef SurfaceMeshAccessWithPointer

![][public]

**Definition**: `FunctionTypes.hpp` (line 199)


```cpp
using sysc::SurfaceMeshAccessWithPointer =  SurfaceMesh(
  OpaqueDataAccess, const RegionName&)
```


Provide alias for function that provides access to surface mesh.

This function takes the opaque pointer that is passed when this function is registered, as well as the region name and returns a [SurfaceMesh](classsysc_1_1SurfaceMesh.md#classsysc_1_1SurfaceMesh) object which provides access to the surface mesh of that region. [Topology](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gadbbc75f28fce0c9b5b31fa64bb8b1e39) of this region must be surface.



**Return type**: SurfaceMesh( OpaqueDataAccess, const RegionName &)

<a id="group__SystemCouplingParticipantAPIs_1ga0a208b57582effc248e5445827b6a6c9"></a>
### Typedef VolumeMeshAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 208)


```cpp
using sysc::VolumeMeshAccess =  VolumeMesh(const RegionName&)
```


Provide alias for function that provides access to volume mesh.

This function takes in a region name and returns a [VolumeMesh](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh) object which provides access to the volume mesh of that region. [Topology](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gadbbc75f28fce0c9b5b31fa64bb8b1e39) of this region must be volume.



**Return type**: VolumeMesh(const RegionName &)

<a id="group__SystemCouplingParticipantAPIs_1ga7f26b781fad3f81fd3b9f1b77dde92df"></a>
### Typedef VolumeMeshAccessWithPointer

![][public]

**Definition**: `FunctionTypes.hpp` (line 217)


```cpp
using sysc::VolumeMeshAccessWithPointer =  VolumeMesh(
  OpaqueDataAccess, const RegionName&)
```


Provide alias for function that provides access to volume mesh.

This function takes the opaque pointer that is passed when this function is registered, as well as the region name and returns a [VolumeMesh](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh) object which provides access to the volume mesh of that region. [Topology](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gadbbc75f28fce0c9b5b31fa64bb8b1e39) of this region must be volume.



**Return type**: VolumeMesh( OpaqueDataAccess, const RegionName &)

<a id="group__SystemCouplingParticipantAPIs_1gaf2a06ec2fdba6d1763472e2699ee662d"></a>
### Typedef PointCloudAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 225)


```cpp
using sysc::PointCloudAccess =  PointCloud(const RegionName&)
```


Provide alias for function that provides access to point cloud.

This function takes in a region name and returns a [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud) object which provides access to the point cloud of that region.



**Return type**: PointCloud(const RegionName &)

<a id="group__SystemCouplingParticipantAPIs_1ga0c727c4ddff53d39d3d2235532fcea44"></a>
### Typedef PointCloudAccessWithPointer

![][public]

**Definition**: `FunctionTypes.hpp` (line 233)


```cpp
using sysc::PointCloudAccessWithPointer =  PointCloud(
  OpaqueDataAccess, const RegionName&)
```


Provide alias for function that provides access to point cloud.

This function takes the opaque pointer that is passed when this function is registered, as well as the region name and returns a [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud) object which provides access to the point cloud of that region.



**Return type**: PointCloud( OpaqueDataAccess, const RegionName &)

<a id="group__SystemCouplingParticipantAPIs_1ga10b7fde7db0b79ac52507dff4c2fdade"></a>
### Typedef RestartPointCreation

![][public]

**Definition**: `FunctionTypes.hpp` (line 241)


```cpp
using sysc::RestartPointCreation =  RestartPoint()
```


Provide an alias for function prototype that creates restart points.

This function may be called only during outputs update, and is expected to return a unique string identifier for a given restart point.



**Return type**: RestartPoint()

<a id="group__SystemCouplingParticipantAPIs_1gac8e3eabf1da13fa5ad1ac0da238ee26b"></a>
### Typedef TargetDataCreation

![][public]

**Definition**: `FunctionTypes.hpp` (line 249)


```cpp
using sysc::TargetDataCreation =  TargetDataLocation(bool)
```


Provide an alias for function prototype that write target data.

This function may be called only during user friendly mapping workflow after Map() command, and is expected to return a unique string identifier for a target data file location.



**Return type**: TargetDataLocation(bool)

<a id="group__SystemCouplingParticipantAPIs_1gaddb896b8711d7b317b4d602c0d0141d8"></a>
### Typedef TargetDataCreationWithPointer

![][public]

**Definition**: `FunctionTypes.hpp` (line 257)


```cpp
using sysc::TargetDataCreationWithPointer =  TargetDataLocation(OpaqueDataAccess, bool)
```


Provide an alias for function prototype that write target data.

This function may be called only during user friendly mapping workflow after Map() command, and is expected to return a unique string identifier for a target data file location.



**Return type**: TargetDataLocation(OpaqueDataAccess, bool)

<a id="group__SystemCouplingParticipantAPIs_1gaba5568096ba658b537a5ec4fe00e5060"></a>
### Typedef TargetDataExistenceChecker

![][public]

**Definition**: `FunctionTypes.hpp` (line 267)


```cpp
using sysc::TargetDataExistenceChecker =  bool()
```


Provide an alias for function prototype that checks if target data exists.

this function may be called only during user friendly mapping workflow after map() command and before writetargetdata(), and is expected to return a boolean value indicating if target data exists. True value indicates that target data exists.



**Return type**: bool()

<a id="group__SystemCouplingParticipantAPIs_1ga1a63f9a3c9d308e6f928e993ef935df0"></a>
### Typedef TargetDataExistenceCheckerWithPointer

![][public]

**Definition**: `FunctionTypes.hpp` (line 277)


```cpp
using sysc::TargetDataExistenceCheckerWithPointer =  bool(OpaqueDataAccess)
```


Provide an alias for function prototype that checks if target data exists.

this function may be called only during user friendly mapping workflow after map() command and before writetargetdata(), and is expected to return a boolean value indicating if target data exists. True value indicates that target data exists.



**Return type**: bool(OpaqueDataAccess)

<a id="group__SystemCouplingParticipantAPIs_1ga5f7da21956734ed623b76b3db7c185dd"></a>
### Typedef ZoneCountAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 282)


```cpp
using sysc::ZoneCountAccess =  std::uint16_t(OpaqueDataAccess, const RegionName&)
```


Function prototype to get the number of zones for a given region.





**Return type**: std::uint16_t(OpaqueDataAccess, const RegionName &)

<a id="group__SystemCouplingParticipantAPIs_1ga85572f066de1fd0ea3323dc49a3b57c8"></a>
### Typedef SurfaceMeshMultiZoneAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 289)


```cpp
using sysc::SurfaceMeshMultiZoneAccess =  SurfaceMesh(
  OpaqueDataAccess, const RegionName&, std::uint16_t zoneIndex)
```


Function prototype to get the mesh zone, given region name and zone index.

Certain restrictions apply:
* Surface mesh objects must provide correct face ids.



**Return type**: SurfaceMesh( OpaqueDataAccess, const RegionName &, std::uint16_t zoneIndex)

<a id="group__SystemCouplingParticipantAPIs_1gae0735f235b4f4e1f21725a25aa63b0f4"></a>
### Typedef VolumeMeshMultiZoneAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 298)


```cpp
using sysc::VolumeMeshMultiZoneAccess =  VolumeMesh(
  OpaqueDataAccess, const RegionName&, std::uint16_t zoneIndex)
```


Function prototype to get the mesh zone, given region name and zone index.

This function is provided for consistency only. Only one volume zone per region is supported.



**Return type**: VolumeMesh( OpaqueDataAccess, const RegionName &, std::uint16_t zoneIndex)

<a id="group__SystemCouplingParticipantAPIs_1ga3b925104b916cfc930ad9a726d7c5940"></a>
### Typedef PointCloudMultiZoneAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 306)


```cpp
using sysc::PointCloudMultiZoneAccess =  PointCloud(
  OpaqueDataAccess,
  const RegionName&,
  std::uint16_t zoneIndex)
```


Provide alias for function that provides access to point cloud.

This function is provided for consistency only. Only one point cloud zone per region is supported.



**Return type**: PointCloud( OpaqueDataAccess, const RegionName &, std::uint16_t zoneIndex)

<a id="group__SystemCouplingParticipantAPIs_1ga2962e05d522b984ea8241abdcad09015"></a>
### Typedef InputScalarDataMultiZoneAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 313)


```cpp
using sysc::InputScalarDataMultiZoneAccess =  InputScalarData(
  OpaqueDataAccess,
  const RegionName&,
  const VariableName&,
  std::uint16_t zoneIndex)
```


Function prototype to get the input scalar data, given region name and zone index.





**Return type**: InputScalarData( OpaqueDataAccess, const RegionName &, const VariableName &, std::uint16_t zoneIndex)

<a id="group__SystemCouplingParticipantAPIs_1gaa0c79a8e65b88dab8f342493762c9e50"></a>
### Typedef OutputScalarDataMultiZoneAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 321)


```cpp
using sysc::OutputScalarDataMultiZoneAccess =  OutputScalarData(
  OpaqueDataAccess,
  const RegionName&,
  const VariableName&,
  std::uint16_t zoneIndex)
```


Function prototype to get the output scalar data, given region name and zone index.





**Return type**: OutputScalarData( OpaqueDataAccess, const RegionName &, const VariableName &, std::uint16_t zoneIndex)

<a id="group__SystemCouplingParticipantAPIs_1gaedb303c7c00603bde9fd8c06125a54f1"></a>
### Typedef InputVectorDataMultiZoneAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 329)


```cpp
using sysc::InputVectorDataMultiZoneAccess =  InputVectorData(
  OpaqueDataAccess,
  const RegionName&,
  const VariableName&,
  std::uint16_t zoneIndex)
```


Function prototype to get the input vector data, given region name and zone index.





**Return type**: InputVectorData( OpaqueDataAccess, const RegionName &, const VariableName &, std::uint16_t zoneIndex)

<a id="group__SystemCouplingParticipantAPIs_1gac54de00f4fd635c5a82631e4384d76c3"></a>
### Typedef OutputVectorDataMultiZoneAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 337)


```cpp
using sysc::OutputVectorDataMultiZoneAccess =  OutputVectorData(
  OpaqueDataAccess,
  const RegionName&,
  const VariableName&,
  std::uint16_t zoneIndex)
```


Function prototype to get the input vector data, given region name and zone index.





**Return type**: OutputVectorData( OpaqueDataAccess, const RegionName &, const VariableName &, std::uint16_t zoneIndex)

<a id="group__SystemCouplingParticipantAPIs_1gadfa6efe7c3ce9d18208a20a55051f986"></a>
### Typedef InputScalarVariableAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 346)


```cpp
using sysc::InputScalarVariableAccess =  InputScalarData(const std::string&, const std::string&)
```


This alias will be deprecated - use [InputScalarDataAccess](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gaaad04c765c24612e77d18d91557af35b) instead.





**Return type**: InputScalarData(const std::string &, const std::string &)

<a id="group__SystemCouplingParticipantAPIs_1ga97cd3cc86cafa5b2e0d8d3dcc39fdbc1"></a>
### Typedef InputVectorVariableAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 349)


```cpp
using sysc::InputVectorVariableAccess =  InputVectorData(const std::string&, const std::string&)
```


This alias will be deprecated - use [InputVectorDataAccess](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga7d3b007f0179ce78753d7d9d56293c34) instead.





**Return type**: InputVectorData(const std::string &, const std::string &)

<a id="group__SystemCouplingParticipantAPIs_1ga42a90b77233b800e4d25e43c6fef424e"></a>
### Typedef OutputScalarVariableAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 352)


```cpp
using sysc::OutputScalarVariableAccess =  OutputScalarData(const std::string&, const std::string&)
```


This alias will be deprecated - use [OutputScalarDataAccess](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga2ed324adff947c3aff51a2e9b7f7ccd6) instead.





**Return type**: OutputScalarData(const std::string &, const std::string &)

<a id="group__SystemCouplingParticipantAPIs_1ga0c35e736c316605eab45af1226580adb"></a>
### Typedef OutputVectorVariableAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 355)


```cpp
using sysc::OutputVectorVariableAccess =  OutputVectorData(const std::string&, const std::string&)
```


This alias will be deprecated - use [OutputVectorDataAccess](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga4ffeb6edbdc770571fe4e862d39126f3) instead.





**Return type**: OutputVectorData(const std::string &, const std::string &)

## Functions

<a id="group__SystemCouplingParticipantAPIs_1ga75cd680a61b7057bc3683398c645c1e8"></a>
### Function throwNonFatalError

![][public]


```cpp
void SYSTEM_COUPLING_PARTICIPANT_DLL sysc::throwNonFatalError(const std::string &errorMessage)
```


Provide a helper function to throw a non-fatal error.





**Parameters**:

* const std::string & **errorMessage**

**Return type**: void SYSTEM_COUPLING_PARTICIPANT_DLL

[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)