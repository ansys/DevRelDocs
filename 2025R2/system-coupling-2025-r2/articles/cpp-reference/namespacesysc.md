# Namespace sysc

![][C++]

**Definition**: `Attribute.hpp` (line 13)





## Classes

* [sysc::RealAttribute](classsysc_1_1RealAttribute.md#classsysc_1_1RealAttribute)
* [sysc::IntegerAttribute](classsysc_1_1IntegerAttribute.md#classsysc_1_1IntegerAttribute)
* [sysc::StringAttribute](classsysc_1_1StringAttribute.md#classsysc_1_1StringAttribute)
* [sysc::Dimensionality](structsysc_1_1Dimensionality.md#structsysc_1_1Dimensionality)
* [sysc::TimeStep](structsysc_1_1TimeStep.md#structsysc_1_1TimeStep)
* [sysc::SolutionControl](structsysc_1_1SolutionControl.md#structsysc_1_1SolutionControl)
* [sysc::SetupInfo](structsysc_1_1SetupInfo.md#structsysc_1_1SetupInfo)
* [sysc::SetupFileInfo](structsysc_1_1SetupFileInfo.md#structsysc_1_1SetupFileInfo)
* [sysc::ResultsInfo](structsysc_1_1ResultsInfo.md#structsysc_1_1ResultsInfo)
* [sysc::ValidityStatus](structsysc_1_1ValidityStatus.md#structsysc_1_1ValidityStatus)
* [sysc::MeshValidityStatus](structsysc_1_1MeshValidityStatus.md#structsysc_1_1MeshValidityStatus)
* [sysc::ParticipantInfo](structsysc_1_1ParticipantInfo.md#structsysc_1_1ParticipantInfo)
* [sysc::CouplingInterface](classsysc_1_1CouplingInterface.md#classsysc_1_1CouplingInterface)
* [sysc::DataTransfer](classsysc_1_1DataTransfer.md#classsysc_1_1DataTransfer)
* [sysc::InputComplexScalarData](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData)
* [sysc::InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData)
* [sysc::InputIntegerData](classsysc_1_1InputIntegerData.md#classsysc_1_1InputIntegerData)
* [sysc::InputScalarData](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData)
* [sysc::InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData)
* [sysc::ElementIdData](structsysc_1_1ElementIdData.md#structsysc_1_1ElementIdData)
* [sysc::ElementTypeData](structsysc_1_1ElementTypeData.md#structsysc_1_1ElementTypeData)
* [sysc::ElementNodeCountData](structsysc_1_1ElementNodeCountData.md#structsysc_1_1ElementNodeCountData)
* [sysc::ElementNodeConnectivityData](structsysc_1_1ElementNodeConnectivityData.md#structsysc_1_1ElementNodeConnectivityData)
* [sysc::FaceCellConnectivityData](structsysc_1_1FaceCellConnectivityData.md#structsysc_1_1FaceCellConnectivityData)
* [sysc::CellIdData](structsysc_1_1CellIdData.md#structsysc_1_1CellIdData)
* [sysc::NodeData](structsysc_1_1NodeData.md#structsysc_1_1NodeData)
* [sysc::FaceData](structsysc_1_1FaceData.md#structsysc_1_1FaceData)
* [sysc::CellData](structsysc_1_1CellData.md#structsysc_1_1CellData)
* [sysc::NonFatalError](classsysc_1_1NonFatalError.md#classsysc_1_1NonFatalError)
* [sysc::OutputComplexScalarData](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData)
* [sysc::OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData)
* [sysc::OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData)
* [sysc::OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData)
* [sysc::OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData)
* [sysc::Parameter](classsysc_1_1Parameter.md#classsysc_1_1Parameter)
* [sysc::PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud)
* [sysc::InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud)
* [sysc::Region](classsysc_1_1Region.md#classsysc_1_1Region)
* [sysc::SurfaceMesh](classsysc_1_1SurfaceMesh.md#classsysc_1_1SurfaceMesh)
* [sysc::HostAndPort](structsysc_1_1HostAndPort.md#structsysc_1_1HostAndPort)
* [sysc::SystemCoupling](classsysc_1_1SystemCoupling.md#classsysc_1_1SystemCoupling)
* [sysc::Variable](classsysc_1_1Variable.md#classsysc_1_1Variable)
* [sysc::VolumeMesh](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh)

## Enumeration types

<a id="group__SystemCouplingParticipantAPIs_1gaffd523474fbd708f481a712f1841a967"></a>
### Enumeration type AnalysisType

![][public]

**Definition**: `CommonSettings.hpp` (line 14)

```cpp
enum AnalysisType {
  Steady = 0,
  Transient = 1
}
```

Provide an enum for coupled analysis type.





<a id="group__SystemCouplingParticipantAPIs_1ggaffd523474fbd708f481a712f1841a967aed2022bd80a52b241675f1bf5a1418f2"></a>
#### Enumerator Steady





<a id="group__SystemCouplingParticipantAPIs_1ggaffd523474fbd708f481a712f1841a967a9704686aedf6f368cb2f10b6fd81c4a3"></a>
#### Enumerator Transient





<a id="group__SystemCouplingParticipantAPIs_1gad13ee117d1f4408660fa2e70ee27b454"></a>
### Enumeration type TimeIntegration

![][public]

**Definition**: `CommonSettings.hpp` (line 20)

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

**Definition**: `CommonSettings.hpp` (line 26)

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

**Definition**: `CommonSettings.hpp` (line 32)

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

**Definition**: `CommonSettings.hpp` (line 38)

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

**Definition**: `CommonSettings.hpp` (line 44)

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

**Definition**: `CommonSettings.hpp` (line 50)

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

**Definition**: `CommonSettings.hpp` (line 63)

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

**Definition**: `CommonSettings.hpp` (line 123)

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
  ROCKY = 15
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





<a id="group__SystemCouplingParticipantAPIs_1ga0b8801743579159eb41cf07d8372a734"></a>
### Enumeration type ConvergenceStatus

![][public]

**Definition**: `CommonTypes.hpp` (line 27)

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

**Definition**: `CommonTypes.hpp` (line 36)

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

**Definition**: `CommonTypes.hpp` (line 196)

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

**Definition**: `CommonTypes.hpp` (line 242)

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

<a id="group__SystemCouplingParticipantAPIs_1ga23b9971b358756814178dd1cb3c0bc80"></a>
### Typedef OpaqueDataAccess

![][public]

**Definition**: `CommonTypes.hpp` (line 251)

```cpp
using sysc::OpaqueDataAccess = typedef void*
```



Declare an opaque pointer type.



**Return type**: void *

<a id="group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d"></a>
### Typedef RegionName

![][public]

**Definition**: `CommonTypes.hpp` (line 253)

```cpp
using sysc::RegionName = typedef std::string
```



An alias for region name.



**Return type**: std::string

<a id="group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266"></a>
### Typedef VariableName

![][public]

**Definition**: `CommonTypes.hpp` (line 254)

```cpp
using sysc::VariableName = typedef std::string
```



An alias for variable name.



**Return type**: std::string

<a id="group__SystemCouplingParticipantAPIs_1ga8a62847c55d192b835faff927dbf41a3"></a>
### Typedef CouplingInterfaceName

![][public]

**Definition**: `CommonTypes.hpp` (line 255)

```cpp
using sysc::CouplingInterfaceName = typedef std::string
```



An alias for coupling interface name.



**Return type**: std::string

<a id="group__SystemCouplingParticipantAPIs_1gaf2402e0ffcce217d0b9d2dda8dc2e61f"></a>
### Typedef RestartPoint

![][public]

**Definition**: `CommonTypes.hpp` (line 256)

```cpp
using sysc::RestartPoint = typedef std::string
```



An alias for restart point.



**Return type**: std::string

<a id="group__SystemCouplingParticipantAPIs_1ga3733298ae4c96b207d4f4caf77dfad7d"></a>
### Typedef TargetDataLocation

![][public]

**Definition**: `CommonTypes.hpp` (line 257)

```cpp
using sysc::TargetDataLocation = typedef std::string
```



An alias for target data location.



**Return type**: std::string

<a id="group__SystemCouplingParticipantAPIs_1ga708d69b0e949d6a42b6a0d7885eed90f"></a>
### Typedef DisplayName

![][public]

**Definition**: `CommonTypes.hpp` (line 258)

```cpp
using sysc::DisplayName = typedef std::string
```



An alias for display name.



**Return type**: std::string

<a id="group__SystemCouplingParticipantAPIs_1gadb06eacf4ed0787d18e8ddbf0612c83c"></a>
### Typedef AttributeName

![][public]

**Definition**: `CommonTypes.hpp` (line 259)

```cpp
using sysc::AttributeName = typedef std::string
```



An alias for attribute name.



**Return type**: std::string

<a id="group__SystemCouplingParticipantAPIs_1ga9cadba4f4e91a46ad88e42877c682d46"></a>
### Typedef ParameterName

![][public]

**Definition**: `CommonTypes.hpp` (line 260)

```cpp
using sysc::ParameterName = typedef std::string
```



An alias for parameter name.



**Return type**: std::string

<a id="group__SystemCouplingParticipantAPIs_1ga0c12006dc920d82ffa7185811c164f54"></a>
### Typedef Port

![][public]

**Definition**: `CommonTypes.hpp` (line 261)

```cpp
using sysc::Port = typedef unsigned short
```



An alias for port.



**Return type**: unsigned short

<a id="group__SystemCouplingParticipantAPIs_1ga2738c290fa117dc95b32cc858abbb6af"></a>
### Typedef Host

![][public]

**Definition**: `CommonTypes.hpp` (line 262)

```cpp
using sysc::Host = typedef std::string
```



An alias for host name.



**Return type**: std::string

<a id="ElementTypes_8hpp_1a63631abf689d8a965cbd258439d4e3cc"></a>
### Typedef ElementTypeUnderlyingType

![][public]

**Definition**: `ElementTypes.hpp` (line 250)

```cpp
using sysc::ElementTypeUnderlyingType = typedef typename std::underlying_type<ElementTypes>::type
```







**Return type**: typename std::underlying_type< [ElementTypes](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga0ae3dc5b82c48ff55c9a7b8064b67323) >::type

<a id="group__SystemCouplingParticipantAPIs_1ga7dd9c918ef6adb34c5e7832dfb077cf2"></a>
### Typedef InputScalarDataAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 38)

```cpp
using sysc::InputScalarDataAccess = typedef InputScalarData( const RegionName&, const VariableName&)
```

Provide function prototype for access to input scalar data.

This function takes in the region and variable names and returns an [InputScalarData](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData) object which provides access to the field data for that variable on that region.



**Return type**: [InputScalarData](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData)(const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &, const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) &)

<a id="group__SystemCouplingParticipantAPIs_1ga31d70598dce8c2bef6ec3f0c167ab271"></a>
### Typedef InputScalarDataAccessWithPointer

![][public]

**Definition**: `FunctionTypes.hpp` (line 48)

```cpp
using sysc::InputScalarDataAccessWithPointer = typedef InputScalarData( OpaqueDataAccess, const RegionName&, const VariableName&)
```

Provide function prototype for access to input scalar data.

This function takes the opaque pointer that is passed when this function is registered, as well as the region and variable names and returns an [InputScalarData](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData) object which provides access to the field data for that variable on that region.



**Return type**: [InputScalarData](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData)([OpaqueDataAccess](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga23b9971b358756814178dd1cb3c0bc80), const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &, const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) &)

<a id="group__SystemCouplingParticipantAPIs_1gab7625786f580e802bcae651a9e6b8ab6"></a>
### Typedef InputVectorDataAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 57)

```cpp
using sysc::InputVectorDataAccess = typedef InputVectorData( const RegionName&, const VariableName&)
```

Provide function prototype for access to input vector data.

This function takes in the region and variable names and returns an [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData) object which provides access to the field data for that variable on that region.



**Return type**: [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData)(const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &, const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) &)

<a id="group__SystemCouplingParticipantAPIs_1ga12662b1595f7ffd8429f9e6d6cdcf4e5"></a>
### Typedef InputVectorDataAccessWithPointer

![][public]

**Definition**: `FunctionTypes.hpp` (line 67)

```cpp
using sysc::InputVectorDataAccessWithPointer = typedef InputVectorData( OpaqueDataAccess, const RegionName&, const VariableName&)
```

Provide function prototype for access to input vector data.

This function takes the opaque pointer that is passed when this function is registered, as well as the region and variable names and returns an [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData) object which provides access to the field data for that variable on that region.



**Return type**: [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData)([OpaqueDataAccess](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga23b9971b358756814178dd1cb3c0bc80), const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &, const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) &)

<a id="group__SystemCouplingParticipantAPIs_1gaf919dd1650fbc5b6cede63027640a40f"></a>
### Typedef OutputScalarDataAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 76)

```cpp
using sysc::OutputScalarDataAccess = typedef OutputScalarData( const RegionName&, const VariableName&)
```

Provide function prototype for access to output scalar data.

This function takes in the region and variable names and returns an [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData) object which provides access to the field data for that variable on that region.



**Return type**: [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData)(const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &, const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) &)

<a id="group__SystemCouplingParticipantAPIs_1ga0198dfa2f53816088cfc3c0f94b33fb5"></a>
### Typedef OutputScalarDataAccessWithPointer

![][public]

**Definition**: `FunctionTypes.hpp` (line 86)

```cpp
using sysc::OutputScalarDataAccessWithPointer = typedef OutputScalarData( OpaqueDataAccess, const RegionName&, const VariableName&)
```

Provide function prototype for access to output scalar data.

This function takes the opaque pointer that is passed when this function is registered, as well as the region and variable names and returns an [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData) object which provides access to the field data for that variable on that region.



**Return type**: [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData)([OpaqueDataAccess](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga23b9971b358756814178dd1cb3c0bc80), const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &, const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) &)

<a id="group__SystemCouplingParticipantAPIs_1ga3af176d8520259b81f0460e1299e04b6"></a>
### Typedef OutputVectorDataAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 95)

```cpp
using sysc::OutputVectorDataAccess = typedef OutputVectorData( const RegionName&, const VariableName&)
```

Provide function prototype for access to output vector data.

This function takes in the region and variable names and returns an [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData) object which provides access to the field data for that variable on that region.



**Return type**: [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData)(const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &, const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) &)

<a id="group__SystemCouplingParticipantAPIs_1ga816b3979bcee14cdb92a88c0621a8e1e"></a>
### Typedef OutputVectorDataAccessWithPointer

![][public]

**Definition**: `FunctionTypes.hpp` (line 105)

```cpp
using sysc::OutputVectorDataAccessWithPointer = typedef OutputVectorData( OpaqueDataAccess, const RegionName&, const VariableName&)
```

Provide function prototype for access to output vector data.

This function takes the opaque pointer that is passed when this function is registered, as well as the region and variable names and returns an [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData) object which provides access to the field data for that variable on that region.



**Return type**: [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData)([OpaqueDataAccess](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga23b9971b358756814178dd1cb3c0bc80), const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &, const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) &)

<a id="group__SystemCouplingParticipantAPIs_1gac45104dcb153caae0c4edac26e46351e"></a>
### Typedef InputComplexScalarDataAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 114)

```cpp
using sysc::InputComplexScalarDataAccess = typedef InputComplexScalarData( const RegionName&, const VariableName&)
```

Provide function prototype for access to input complex scalar data.

This function takes in the region and variable names and returns an [InputComplexScalarData](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData) object which provides access to the field data for that variable on that region.



**Return type**: [InputComplexScalarData](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData)(const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &, const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) &)

<a id="group__SystemCouplingParticipantAPIs_1ga90ec216c6ff3f8ada5d0b0b4ea362b15"></a>
### Typedef InputComplexScalarDataAccessWithPointer

![][public]

**Definition**: `FunctionTypes.hpp` (line 124)

```cpp
using sysc::InputComplexScalarDataAccessWithPointer = typedef InputComplexScalarData( OpaqueDataAccess, const RegionName&, const VariableName&)
```

Provide function prototype for access to input complex scalar data.

This function takes the opaque pointer that is passed when this function is registered, as well as the region and variable names and returns an [InputComplexScalarData](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData) object which provides access to the field data for that variable on that region.



**Return type**: [InputComplexScalarData](classsysc_1_1InputComplexScalarData.md#classsysc_1_1InputComplexScalarData)([OpaqueDataAccess](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga23b9971b358756814178dd1cb3c0bc80), const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &, const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) &)

<a id="group__SystemCouplingParticipantAPIs_1ga0cc318418bce4c3aa356f91798e962e7"></a>
### Typedef InputComplexVectorDataAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 133)

```cpp
using sysc::InputComplexVectorDataAccess = typedef InputComplexVectorData( const RegionName&, const VariableName&)
```

Provide function prototype for access to input complex vector data.

This function takes in the region and variable names and returns an [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData) object which provides access to the field data for that variable on that region.



**Return type**: [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData)(const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &, const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) &)

<a id="group__SystemCouplingParticipantAPIs_1gaf213c1ae6a1bff131c598f99ad9320b4"></a>
### Typedef InputComplexVectorDataAccessWithPointer

![][public]

**Definition**: `FunctionTypes.hpp` (line 143)

```cpp
using sysc::InputComplexVectorDataAccessWithPointer = typedef InputComplexVectorData( OpaqueDataAccess, const RegionName&, const VariableName&)
```

Provide function prototype for access to input complex vector data.

This function takes the opaque pointer that is passed when this function is registered, as well as the region and variable names and returns an [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData) object which provides access to the field data for that variable on that region.



**Return type**: [InputComplexVectorData](classsysc_1_1InputComplexVectorData.md#classsysc_1_1InputComplexVectorData)([OpaqueDataAccess](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga23b9971b358756814178dd1cb3c0bc80), const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &, const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) &)

<a id="group__SystemCouplingParticipantAPIs_1gaeb662bc24c2d2c6f4248f038eee43e74"></a>
### Typedef OutputComplexScalarDataAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 152)

```cpp
using sysc::OutputComplexScalarDataAccess = typedef OutputComplexScalarData( const RegionName&, const VariableName&)
```

Provide function prototype for access to output complex scalar data.

This function takes in the region and variable names and returns an [OutputComplexScalarData](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData) object which provides access to the field data for that variable on that region.



**Return type**: [OutputComplexScalarData](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData)(const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &, const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) &)

<a id="group__SystemCouplingParticipantAPIs_1ga74e6e9bec4808c21fab845daa661b50c"></a>
### Typedef OutputComplexScalarDataAccessWithPointer

![][public]

**Definition**: `FunctionTypes.hpp` (line 162)

```cpp
using sysc::OutputComplexScalarDataAccessWithPointer = typedef OutputComplexScalarData( OpaqueDataAccess, const RegionName&, const VariableName&)
```

Provide function prototype for access to output complex scalar data.

This function takes the opaque pointer that is passed when this function is registered, as well as the region and variable names and returns an [OutputComplexScalarData](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData) object which provides access to the field data for that variable on that region.



**Return type**: [OutputComplexScalarData](classsysc_1_1OutputComplexScalarData.md#classsysc_1_1OutputComplexScalarData)([OpaqueDataAccess](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga23b9971b358756814178dd1cb3c0bc80), const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &, const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) &)

<a id="group__SystemCouplingParticipantAPIs_1gaec1b87f8104f48c01859a46d280894db"></a>
### Typedef OutputComplexVectorDataAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 171)

```cpp
using sysc::OutputComplexVectorDataAccess = typedef OutputComplexVectorData( const RegionName&, const VariableName&)
```

Provide function prototype for access to output complex vector data.

This function takes in the region and variable names and returns an [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData) object which provides access to the field data for that variable on that region.



**Return type**: [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData)(const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &, const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) &)

<a id="group__SystemCouplingParticipantAPIs_1gaa3871403c3c169499a051ce8cc88d9a7"></a>
### Typedef OutputComplexVectorDataAccessWithPointer

![][public]

**Definition**: `FunctionTypes.hpp` (line 181)

```cpp
using sysc::OutputComplexVectorDataAccessWithPointer = typedef OutputComplexVectorData( OpaqueDataAccess, const RegionName&, const VariableName&)
```

Provide function prototype for access to output complex vector data.

This function takes the opaque pointer that is passed when this function is registered, as well as the region and variable names and returns an [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData) object which provides access to the field data for that variable on that region.



**Return type**: [OutputComplexVectorData](classsysc_1_1OutputComplexVectorData.md#classsysc_1_1OutputComplexVectorData)([OpaqueDataAccess](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga23b9971b358756814178dd1cb3c0bc80), const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &, const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) &)

<a id="group__SystemCouplingParticipantAPIs_1ga31a21ade99a36c30fdc24d33c6d5c9aa"></a>
### Typedef SurfaceMeshAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 190)

```cpp
using sysc::SurfaceMeshAccess = typedef SurfaceMesh(const RegionName&)
```

Provide alias for function that provides access to surface mesh.

This function takes in a region name and returns a [SurfaceMesh](classsysc_1_1SurfaceMesh.md#classsysc_1_1SurfaceMesh) object which provides access to the surface mesh of that region. Topology of this region must be surface.



**Return type**: [SurfaceMesh](classsysc_1_1SurfaceMesh.md#classsysc_1_1SurfaceMesh)(const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &)

<a id="group__SystemCouplingParticipantAPIs_1gaefc47d665f38f4380346fb9c29b9c8ff"></a>
### Typedef SurfaceMeshAccessWithPointer

![][public]

**Definition**: `FunctionTypes.hpp` (line 199)

```cpp
using sysc::SurfaceMeshAccessWithPointer = typedef SurfaceMesh( OpaqueDataAccess, const RegionName&)
```

Provide alias for function that provides access to surface mesh.

This function takes the opaque pointer that is passed when this function is registered, as well as the region name and returns a [SurfaceMesh](classsysc_1_1SurfaceMesh.md#classsysc_1_1SurfaceMesh) object which provides access to the surface mesh of that region. Topology of this region must be surface.



**Return type**: [SurfaceMesh](classsysc_1_1SurfaceMesh.md#classsysc_1_1SurfaceMesh)([OpaqueDataAccess](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga23b9971b358756814178dd1cb3c0bc80), const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &)

<a id="group__SystemCouplingParticipantAPIs_1ga7a37f14608ada16bb16d44c498325fff"></a>
### Typedef VolumeMeshAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 208)

```cpp
using sysc::VolumeMeshAccess = typedef VolumeMesh(const RegionName&)
```

Provide alias for function that provides access to volume mesh.

This function takes in a region name and returns a [VolumeMesh](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh) object which provides access to the volume mesh of that region. Topology of this region must be volume.



**Return type**: [VolumeMesh](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh)(const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &)

<a id="group__SystemCouplingParticipantAPIs_1ga6c3e4e3f977efd6284430b6f8e918ce1"></a>
### Typedef VolumeMeshAccessWithPointer

![][public]

**Definition**: `FunctionTypes.hpp` (line 217)

```cpp
using sysc::VolumeMeshAccessWithPointer = typedef VolumeMesh( OpaqueDataAccess, const RegionName&)
```

Provide alias for function that provides access to volume mesh.

This function takes the opaque pointer that is passed when this function is registered, as well as the region name and returns a [VolumeMesh](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh) object which provides access to the volume mesh of that region. Topology of this region must be volume.



**Return type**: [VolumeMesh](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh)([OpaqueDataAccess](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga23b9971b358756814178dd1cb3c0bc80), const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &)

<a id="group__SystemCouplingParticipantAPIs_1ga1651bb5df846358dfae0401b4a51331d"></a>
### Typedef PointCloudAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 225)

```cpp
using sysc::PointCloudAccess = typedef PointCloud(const RegionName&)
```

Provide alias for function that provides access to point cloud.

This function takes in a region name and returns a [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud) object which provides access to the point cloud of that region.



**Return type**: [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud)(const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &)

<a id="group__SystemCouplingParticipantAPIs_1ga1ec70c59d86f6f43cc865c72e4a9d76e"></a>
### Typedef PointCloudAccessWithPointer

![][public]

**Definition**: `FunctionTypes.hpp` (line 233)

```cpp
using sysc::PointCloudAccessWithPointer = typedef PointCloud( OpaqueDataAccess, const RegionName&)
```

Provide alias for function that provides access to point cloud.

This function takes the opaque pointer that is passed when this function is registered, as well as the region name and returns a [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud) object which provides access to the point cloud of that region.



**Return type**: [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud)([OpaqueDataAccess](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga23b9971b358756814178dd1cb3c0bc80), const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &)

<a id="group__SystemCouplingParticipantAPIs_1ga871467e0179633e71b13d4a1904ad732"></a>
### Typedef RestartPointCreation

![][public]

**Definition**: `FunctionTypes.hpp` (line 241)

```cpp
using sysc::RestartPointCreation = typedef RestartPoint()
```

Provide an alias for function prototype that creates restart points.

This function may be called only during outputs update, and is expected to return a unique string identifier for a given restart point.



**Return type**: [RestartPoint](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gaf2402e0ffcce217d0b9d2dda8dc2e61f)()

<a id="group__SystemCouplingParticipantAPIs_1ga23c842f309f11150deb4dda666115091"></a>
### Typedef TargetDataCreation

![][public]

**Definition**: `FunctionTypes.hpp` (line 249)

```cpp
using sysc::TargetDataCreation = typedef TargetDataLocation(bool)
```

Provide an alias for function prototype that write target data.

This function may be called only during user friendly mapping workflow after Map() command, and is expected to return a unique string identifier for a target data file location.



**Return type**: [TargetDataLocation](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga3733298ae4c96b207d4f4caf77dfad7d)(bool)

<a id="group__SystemCouplingParticipantAPIs_1ga62d0a9b9a904f4345ff12f30b052e278"></a>
### Typedef TargetDataCreationWithPointer

![][public]

**Definition**: `FunctionTypes.hpp` (line 257)

```cpp
using sysc::TargetDataCreationWithPointer = typedef TargetDataLocation(OpaqueDataAccess, bool)
```

Provide an alias for function prototype that write target data.

This function may be called only during user friendly mapping workflow after Map() command, and is expected to return a unique string identifier for a target data file location.



**Return type**: [TargetDataLocation](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga3733298ae4c96b207d4f4caf77dfad7d)([OpaqueDataAccess](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga23b9971b358756814178dd1cb3c0bc80), bool)

<a id="group__SystemCouplingParticipantAPIs_1ga5a236a23cab8fd793659e3ff0ded7aff"></a>
### Typedef TargetDataExistenceChecker

![][public]

**Definition**: `FunctionTypes.hpp` (line 267)

```cpp
using sysc::TargetDataExistenceChecker = typedef bool()
```

Provide an alias for function prototype that checks if target data exists.

this function may be called only during user friendly mapping workflow after map() command and before writetargetdata(), and is expected to return a boolean value indicating if target data exists. True value indicates that target data exists.



**Return type**: bool()

<a id="group__SystemCouplingParticipantAPIs_1gaf91c64729b5c36e4ed316a3f0fe533ff"></a>
### Typedef TargetDataExistenceCheckerWithPointer

![][public]

**Definition**: `FunctionTypes.hpp` (line 277)

```cpp
using sysc::TargetDataExistenceCheckerWithPointer = typedef bool(OpaqueDataAccess)
```

Provide an alias for function prototype that checks if target data exists.

this function may be called only during user friendly mapping workflow after map() command and before writetargetdata(), and is expected to return a boolean value indicating if target data exists. True value indicates that target data exists.



**Return type**: bool([OpaqueDataAccess](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga23b9971b358756814178dd1cb3c0bc80))

<a id="group__SystemCouplingParticipantAPIs_1ga67496d998ace1dd2796a5a96f6356483"></a>
### Typedef ZoneCountAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 282)

```cpp
using sysc::ZoneCountAccess = typedef std::uint16_t(OpaqueDataAccess, const RegionName&)
```

Function prototype to get the number of zones for a given region.





**Return type**: std::uint16_t([OpaqueDataAccess](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga23b9971b358756814178dd1cb3c0bc80), const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &)

<a id="group__SystemCouplingParticipantAPIs_1ga78db51b86b998102a74753c41118d0de"></a>
### Typedef SurfaceMeshMultiZoneAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 289)

```cpp
using sysc::SurfaceMeshMultiZoneAccess = typedef SurfaceMesh( OpaqueDataAccess, const RegionName&, std::uint16_t zoneIndex)
```

Function prototype to get the mesh zone, given region name and zone index.

Certain restrictions apply:
* Surface mesh objects must provide correct face ids.



**Return type**: [SurfaceMesh](classsysc_1_1SurfaceMesh.md#classsysc_1_1SurfaceMesh)([OpaqueDataAccess](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga23b9971b358756814178dd1cb3c0bc80), const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &, std::uint16_t zoneIndex)

<a id="group__SystemCouplingParticipantAPIs_1gaf8cf8d3d04cd46c0841bd0d1fdb54158"></a>
### Typedef VolumeMeshMultiZoneAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 298)

```cpp
using sysc::VolumeMeshMultiZoneAccess = typedef VolumeMesh( OpaqueDataAccess, const RegionName&, std::uint16_t zoneIndex)
```

Function prototype to get the mesh zone, given region name and zone index.

This function is provided for consistency only. Only one volume zone per region is supported.



**Return type**: [VolumeMesh](classsysc_1_1VolumeMesh.md#classsysc_1_1VolumeMesh)([OpaqueDataAccess](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga23b9971b358756814178dd1cb3c0bc80), const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &, std::uint16_t zoneIndex)

<a id="group__SystemCouplingParticipantAPIs_1ga2108977976cabe1b6207eb8bc58175f4"></a>
### Typedef PointCloudMultiZoneAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 306)

```cpp
using sysc::PointCloudMultiZoneAccess = typedef PointCloud( OpaqueDataAccess, const RegionName&, std::uint16_t zoneIndex)
```

Provide alias for function that provides access to point cloud.

This function is provided for consistency only. Only one point cloud zone per region is supported.



**Return type**: [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud)([OpaqueDataAccess](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga23b9971b358756814178dd1cb3c0bc80), const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &, std::uint16_t zoneIndex)

<a id="group__SystemCouplingParticipantAPIs_1ga3b4a0b9036a3be955d417a16c6acb695"></a>
### Typedef InputScalarDataMultiZoneAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 313)

```cpp
using sysc::InputScalarDataMultiZoneAccess = typedef InputScalarData( OpaqueDataAccess, const RegionName&, const VariableName&, std::uint16_t zoneIndex)
```

Function prototype to get the input scalar data, given region name and zone index.





**Return type**: [InputScalarData](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData)([OpaqueDataAccess](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga23b9971b358756814178dd1cb3c0bc80), const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &, const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) &, std::uint16_t zoneIndex)

<a id="group__SystemCouplingParticipantAPIs_1gaad003be96e3cd29fc18e0d2a27889db4"></a>
### Typedef OutputScalarDataMultiZoneAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 321)

```cpp
using sysc::OutputScalarDataMultiZoneAccess = typedef OutputScalarData( OpaqueDataAccess, const RegionName&, const VariableName&, std::uint16_t zoneIndex)
```

Function prototype to get the output scalar data, given region name and zone index.





**Return type**: [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData)([OpaqueDataAccess](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga23b9971b358756814178dd1cb3c0bc80), const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &, const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) &, std::uint16_t zoneIndex)

<a id="group__SystemCouplingParticipantAPIs_1ga59cfd8bf053c1492e4c0a6b4c0109ef6"></a>
### Typedef InputVectorDataMultiZoneAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 329)

```cpp
using sysc::InputVectorDataMultiZoneAccess = typedef InputVectorData( OpaqueDataAccess, const RegionName&, const VariableName&, std::uint16_t zoneIndex)
```

Function prototype to get the input vector data, given region name and zone index.





**Return type**: [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData)([OpaqueDataAccess](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga23b9971b358756814178dd1cb3c0bc80), const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &, const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) &, std::uint16_t zoneIndex)

<a id="group__SystemCouplingParticipantAPIs_1ga46429473df8e53efff6e5d967897a291"></a>
### Typedef OutputVectorDataMultiZoneAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 337)

```cpp
using sysc::OutputVectorDataMultiZoneAccess = typedef OutputVectorData( OpaqueDataAccess, const RegionName&, const VariableName&, std::uint16_t zoneIndex)
```

Function prototype to get the input vector data, given region name and zone index.





**Return type**: [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData)([OpaqueDataAccess](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga23b9971b358756814178dd1cb3c0bc80), const [RegionName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1gad700042fb75659f4591c4dae6560a62d) &, const [VariableName](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga500337cdc8405b3e819ca3623bb44266) &, std::uint16_t zoneIndex)

<a id="group__SystemCouplingParticipantAPIs_1gabfe4908649fe177d889ed488b090fdea"></a>
### Typedef InputScalarVariableAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 346)

```cpp
using sysc::InputScalarVariableAccess = typedef InputScalarData(const std::string&, const std::string&)
```

This alias will be deprecated - use InputScalarDataAccess instead.





**Return type**: [InputScalarData](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData)(const std::string &, const std::string &)

<a id="group__SystemCouplingParticipantAPIs_1ga9b14545ae1ed82c6d1471c1672ca5247"></a>
### Typedef InputVectorVariableAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 349)

```cpp
using sysc::InputVectorVariableAccess = typedef InputVectorData(const std::string&, const std::string&)
```

This alias will be deprecated - use InputVectorDataAccess instead.





**Return type**: [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData)(const std::string &, const std::string &)

<a id="group__SystemCouplingParticipantAPIs_1ga81e8c19ed24a2ea0433af309188710a6"></a>
### Typedef OutputScalarVariableAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 352)

```cpp
using sysc::OutputScalarVariableAccess = typedef OutputScalarData(const std::string&, const std::string&)
```

This alias will be deprecated - use OutputScalarDataAccess instead.





**Return type**: [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData)(const std::string &, const std::string &)

<a id="group__SystemCouplingParticipantAPIs_1ga4684b116da21b415e4e63ae927ba12ae"></a>
### Typedef OutputVectorVariableAccess

![][public]

**Definition**: `FunctionTypes.hpp` (line 355)

```cpp
using sysc::OutputVectorVariableAccess = typedef OutputVectorData(const std::string&, const std::string&)
```

This alias will be deprecated - use OutputVectorDataAccess instead.





**Return type**: [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData)(const std::string &, const std::string &)

## Functions

<a id="Datashipper_8hpp_1aec7b7f49f20e797297505a85e0dc410a"></a>
### Function rearrange

![][public]

```cpp
void SYSTEM_COUPLING_PARTICIPANT_DLL sysc::rearrange(OutputScalarData source, InputScalarData target)
```

Function to re-arrange distributed parallel scalar data.

This function can be used in the context of distributed parallel applications, interconnected by SCP library. It performs an efficient parallel re-distribution of data, from the order implied in the source data to the order implied in the target data.





Constraints:





global size of source and target datas must match. An exception will be thrown otherwise.





Connection must be initialized (i.e. [sysc::SystemCoupling](classsysc_1_1SystemCoupling.md#classsysc_1_1SystemCoupling) object correctly constructed). An exception will be thrown otherwise.



**Parameters**:

* [OutputScalarData](classsysc_1_1OutputScalarData.md#classsysc_1_1OutputScalarData) **source**
* [InputScalarData](classsysc_1_1InputScalarData.md#classsysc_1_1InputScalarData) **target**

**Return type**: void SYSTEM_COUPLING_PARTICIPANT_DLL

<a id="Datashipper_8hpp_1a31beddf1436d2416b97f69fb1f09313a"></a>
### Function rearrange

![][public]

```cpp
void SYSTEM_COUPLING_PARTICIPANT_DLL sysc::rearrange(OutputVectorData source, InputVectorData target)
```

Similar function as <code>rearrange(OutputScalarData source, InputScalarData target)</code>, but it operates on vector data.





**Parameters**:

* [OutputVectorData](classsysc_1_1OutputVectorData.md#classsysc_1_1OutputVectorData) **source**
* [InputVectorData](classsysc_1_1InputVectorData.md#classsysc_1_1InputVectorData) **target**

**Return type**: void SYSTEM_COUPLING_PARTICIPANT_DLL

<a id="Datashipper_8hpp_1a3e73aa9be927d6eb71c55d3c240a1ba8"></a>
### Function rearrange

![][public]

```cpp
void SYSTEM_COUPLING_PARTICIPANT_DLL sysc::rearrange(OutputIntegerData source, InputIntegerData target)
```

Similar function as <code>rearrange(OutputScalarData source, InputScalarData target)</code>, but it operates on integer data.





**Parameters**:

* [OutputIntegerData](classsysc_1_1OutputIntegerData.md#classsysc_1_1OutputIntegerData) **source**
* [InputIntegerData](classsysc_1_1InputIntegerData.md#classsysc_1_1InputIntegerData) **target**

**Return type**: void SYSTEM_COUPLING_PARTICIPANT_DLL

<a id="Datashipper_8hpp_1a16a75516f9b72b42ba82ba9b390a938d"></a>
### Function rearrange

![][public]

```cpp
void SYSTEM_COUPLING_PARTICIPANT_DLL sysc::rearrange(PointCloud source, InputPointCloud target)
```

Function to re-arrange distributed parallel point cloud data.

This function is analogous to <code>rearrange(OutputScalarData source, InputScalarData target)</code>, and has the same constraints, but it operates on point cloud data.



**Parameters**:

* [PointCloud](classsysc_1_1PointCloud.md#classsysc_1_1PointCloud) **source**
* [InputPointCloud](structsysc_1_1InputPointCloud.md#structsysc_1_1InputPointCloud) **target**

**Return type**: void SYSTEM_COUPLING_PARTICIPANT_DLL

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

<a id="SyscComm_8hpp_1a0302b93f4ce01f1d4521b4e0d45b4a1e"></a>
### Function createRootServer

![][public]

```cpp
HostAndPort SYSTEM_COUPLING_PARTICIPANT_DLL sysc::createRootServer(Host host, Port port)
```

Provide a function to create a remote server for connecting multiple applications.

If it is desired to connect multiple applications using the SCP library, the global root rank must create a remote server for client connections from other processes. This function creates this remote server and returns its host name and port number. Note that only the global root process should call this function.





The returned host and port structure provides the information for other processes to connect to the global root process. The connections are established during the constructor of [sysc::SystemCoupling](classsysc_1_1SystemCoupling.md#classsysc_1_1SystemCoupling) object. See the SCP library developer's guide for more details.






**Parameters**:

* **host**: Host name for the remote server. If left empty, SCP library will automatically determine the host name and return the value. If the non-empty host name is provided, it will be respected and returned in the host and port structure.
* **port**: Port number for the remote server. If zero value is provided, SCP library will automatically determine the available port number on which the remote server is listening for incoming connections and return the value. If non-zero value is provided, SCP library will attempt to start the remote server on that port. If the requested port is not available, an exception will be thrown.



**Parameters**:

* [Host](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga2738c290fa117dc95b32cc858abbb6af) **host**
* [Port](namespacesysc.md#group__SystemCouplingParticipantAPIs_1ga0c12006dc920d82ffa7185811c164f54) **port**

**Return type**: [HostAndPort](structsysc_1_1HostAndPort.md#structsysc_1_1HostAndPort) SYSTEM_COUPLING_PARTICIPANT_DLL

<a id="SyscComm_8hpp_1a406b211aa7cab59559ff1ea93d28e86f"></a>
### Function isRootServerCreated

![][public]

```cpp
bool SYSTEM_COUPLING_PARTICIPANT_DLL sysc::isRootServerCreated()
```

Query is the root server has been created. This function should only be called on the global root process.





**Return type**: bool SYSTEM_COUPLING_PARTICIPANT_DLL

<a id="SyscComm_8hpp_1a75eca848e9890227763f3260309c729b"></a>
### Function getMyRank

![][public]

```cpp
int SYSTEM_COUPLING_PARTICIPANT_DLL sysc::getMyRank()
```

Get the unique rank assigned to this process by the SCP library.





**Return type**: int SYSTEM_COUPLING_PARTICIPANT_DLL

<a id="SyscComm_8hpp_1aea59cac7fe2167170146839811bc8d29"></a>
### Function getNumRanks

![][public]

```cpp
int SYSTEM_COUPLING_PARTICIPANT_DLL sysc::getNumRanks()
```

Get the total number of processes connected by the SCP library.





**Return type**: int SYSTEM_COUPLING_PARTICIPANT_DLL

<a id="SyscComm_8hpp_1ae23b912a93ea9234dd8ba913c9dcd943"></a>
### Function reduceMax

![][public]

```cpp
double SYSTEM_COUPLING_PARTICIPANT_DLL sysc::reduceMax(double value)
```

Perform a reduction to get max value across all processes, connected by the SCP library.





**Parameters**:

* double **value**

**Return type**: double SYSTEM_COUPLING_PARTICIPANT_DLL

<a id="SyscComm_8hpp_1a3634907b260bd70e565d315659ad90c1"></a>
### Function reduceSum

![][public]

```cpp
std::uint64_t SYSTEM_COUPLING_PARTICIPANT_DLL sysc::reduceSum(std::uint64_t value)
```

Perform a reduction to get sum of value across all processes, connected by the SCP library.





**Parameters**:

* std::uint64_t **value**

**Return type**: std::uint64_t SYSTEM_COUPLING_PARTICIPANT_DLL

<a id="SyscComm_8hpp_1a7dfc4e837c274f4101120cb95b0d6117"></a>
### Function reduceAnd

![][public]

```cpp
bool SYSTEM_COUPLING_PARTICIPANT_DLL sysc::reduceAnd(bool value)
```

Perform a reduction to get logical AND of value across all processes, connected by the SCP library.





**Parameters**:

* bool **value**

**Return type**: bool SYSTEM_COUPLING_PARTICIPANT_DLL

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)