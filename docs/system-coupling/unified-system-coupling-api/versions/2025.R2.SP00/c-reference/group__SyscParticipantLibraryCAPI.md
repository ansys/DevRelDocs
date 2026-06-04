# C Interfaces for Participant Library

Provides C interfaces to the System Coupling participant library.

The C interface closely follows the C++ interface, and is implemented as a wrapper around the latter.

## Enumeration types

<a id="group__SyscParticipantLibraryCAPI_1gade42aba1a68acbbf5956edcd388cdcda"></a>
### Enumeration type SyscLocation

![][public]

**Definition**: `syscCommonTypes.h` (line 26)

```
enum SyscLocation {
  SyscNode = 0,
  SyscElement = 1
}
```

Provide an enum for variable mesh locations.





<a id="group__SyscParticipantLibraryCAPI_1ggade42aba1a68acbbf5956edcd388cdcdaae4692f269a846a3f5bec23a9e61f0b8b"></a>
#### Enumerator SyscNode



Nodal data.

<a id="group__SyscParticipantLibraryCAPI_1ggade42aba1a68acbbf5956edcd388cdcdaa0a0e08aa104422e8676637671cf2a482"></a>
#### Enumerator SyscElement



Data on elements.

<a id="group__SyscParticipantLibraryCAPI_1ga007e2fd66e7263a63c114a6d12b3808d"></a>
### Enumeration type SyscTensorType

![][public]

**Definition**: `syscCommonTypes.h` (line 32)

```
enum SyscTensorType {
  SyscScalar = 0,
  SyscVector = 1
}
```

Provide an enum for variable tensor type.





<a id="group__SyscParticipantLibraryCAPI_1gga007e2fd66e7263a63c114a6d12b3808dacb8fa2f95d3959accf13d5f9da32bec2"></a>
#### Enumerator SyscScalar



Scalar

<a id="group__SyscParticipantLibraryCAPI_1gga007e2fd66e7263a63c114a6d12b3808da7b45d832dc633190003739983e661ea1"></a>
#### Enumerator SyscVector



Vector

<a id="group__SyscParticipantLibraryCAPI_1gabf36499a0f333dc9b856c4bcbb25385a"></a>
### Enumeration type SyscTopology

![][public]

**Definition**: `syscCommonTypes.h` (line 38)

```
enum SyscTopology {
  SyscSurface = 2,
  SyscVolume = 3
}
```

Provide an enum for region topologies.





<a id="group__SyscParticipantLibraryCAPI_1ggabf36499a0f333dc9b856c4bcbb25385aa8247153584a945a1be42cfea251acbdb"></a>
#### Enumerator SyscSurface



Surface topology.

<a id="group__SyscParticipantLibraryCAPI_1ggabf36499a0f333dc9b856c4bcbb25385aa38f18def976473946d3405a115fbd6d0"></a>
#### Enumerator SyscVolume



Volume topology.

<a id="group__SyscParticipantLibraryCAPI_1ga83942e23c7ff51ec76e4632612a34d45"></a>
### Enumeration type SyscRegionDiscretizationType

![][public]

**Definition**: `syscCommonTypes.h` (line 44)

```
enum SyscRegionDiscretizationType {
  SyscMeshRegion = 0,
  SyscPointCloudRegion = 1
}
```

Provide an enum for region mesh type.





<a id="group__SyscParticipantLibraryCAPI_1gga83942e23c7ff51ec76e4632612a34d45a8693102131c222ff51685d060bc8d1d3"></a>
#### Enumerator SyscMeshRegion



Mesh region discretization.

<a id="group__SyscParticipantLibraryCAPI_1gga83942e23c7ff51ec76e4632612a34d45a72b4ce23e1c7d4a5981f5ffe6a1928b6"></a>
#### Enumerator SyscPointCloudRegion



Point cloud region discretization.

<a id="group__SyscParticipantLibraryCAPI_1gacf32f1d9c1566f28bee2b348b2dcd9f5"></a>
### Enumeration type SyscInterfaceSide

![][public]

**Definition**: `syscCommonTypes.h` (line 50)

```
enum SyscInterfaceSide {
  SyscInterfaceSide_One = 1,
  SyscInterfaceSide_Two = 2
}
```

Provide enum for coupling interface side.





<a id="group__SyscParticipantLibraryCAPI_1ggacf32f1d9c1566f28bee2b348b2dcd9f5a7c5c48f8ed70c17f777260b3d5963ea3"></a>
#### Enumerator SyscInterfaceSide\_One





<a id="group__SyscParticipantLibraryCAPI_1ggacf32f1d9c1566f28bee2b348b2dcd9f5aca2e8fc2e6fa8407ae40a13bfbedb3ff"></a>
#### Enumerator SyscInterfaceSide\_Two





<a id="group__SyscParticipantLibraryCAPI_1gac5a5f66ee72fd8015eab632a642cf26d"></a>
### Enumeration type SyscDimension

![][public]

**Definition**: `syscCommonTypes.h` (line 56)

```
enum SyscDimension {
  SyscD2 = 2,
  SyscD3 = 3
}
```

Provide enum for system coupling dimension.





<a id="group__SyscParticipantLibraryCAPI_1ggac5a5f66ee72fd8015eab632a642cf26da0c9eff9b65e904d28255b8b08777b297"></a>
#### Enumerator SyscD2





<a id="group__SyscParticipantLibraryCAPI_1ggac5a5f66ee72fd8015eab632a642cf26da322819738b608cfda776ab25cf6a5200"></a>
#### Enumerator SyscD3





<a id="group__SyscParticipantLibraryCAPI_1gaedf008f34febb068e44cb21292dc167f"></a>
### Enumeration type SyscTimeIntegration

![][public]

**Definition**: `syscCommonTypes.h` (line 62)

```
enum SyscTimeIntegration {
  SyscImplicit = 0,
  SyscExplicit = 1
}
```

Provide an enum for time integration.





<a id="group__SyscParticipantLibraryCAPI_1ggaedf008f34febb068e44cb21292dc167fa593d91cbed6aa180b936b20b74a54b71"></a>
#### Enumerator SyscImplicit





<a id="group__SyscParticipantLibraryCAPI_1ggaedf008f34febb068e44cb21292dc167faadc57672e0587e6a52b44f367095b500"></a>
#### Enumerator SyscExplicit





<a id="group__SyscParticipantLibraryCAPI_1gaa28a3de6c7c91003a8a15721a5301f12"></a>
### Enumeration type SyscQuantityType

![][public]

**Definition**: `syscCommonTypes.h` (line 91)

```
enum SyscQuantityType {
  SyscUnspecified = 0,
  SyscForce = 1,
  SyscIncrementalDisplacement = 2,
  SyscTemperature = 3,
  SyscHeatRate = 4,
  SyscHeatTransferCoefficient = 5,
  SyscConvectionReferenceTemperature = 6,
  SyscModeShape = 7,
  SyscElectricalConductivity = 8
}
```

Provide an enum for supported quantity types.

Quantity type provides information about the physical meaning of the variable. This can be useful for detecting validation errors during the coupled analysis setup. If the variable does not match any of the provided quantity types, quantity type can be set to unspecified.



<a id="group__SyscParticipantLibraryCAPI_1ggaa28a3de6c7c91003a8a15721a5301f12af38a3461bab7f9a97b75952b43b40e59"></a>
#### Enumerator SyscUnspecified





<a id="group__SyscParticipantLibraryCAPI_1ggaa28a3de6c7c91003a8a15721a5301f12ae6aa8fd95dcfbbbbc5c31a6c25f64bd5"></a>
#### Enumerator SyscForce





<a id="group__SyscParticipantLibraryCAPI_1ggaa28a3de6c7c91003a8a15721a5301f12acc64cea65ff9ea214fefb2308a5b0b80"></a>
#### Enumerator SyscIncrementalDisplacement





<a id="group__SyscParticipantLibraryCAPI_1ggaa28a3de6c7c91003a8a15721a5301f12ac04825292451f0435241336e6bf9d586"></a>
#### Enumerator SyscTemperature





<a id="group__SyscParticipantLibraryCAPI_1ggaa28a3de6c7c91003a8a15721a5301f12ad3ae742f14341f0cab7b7866aea51dac"></a>
#### Enumerator SyscHeatRate





<a id="group__SyscParticipantLibraryCAPI_1ggaa28a3de6c7c91003a8a15721a5301f12ab27e48f0cf93d6e42aaabf065e51c0ae"></a>
#### Enumerator SyscHeatTransferCoefficient





<a id="group__SyscParticipantLibraryCAPI_1ggaa28a3de6c7c91003a8a15721a5301f12a249378fcb9803c0d94fa56b9db0e0136"></a>
#### Enumerator SyscConvectionReferenceTemperature





<a id="group__SyscParticipantLibraryCAPI_1ggaa28a3de6c7c91003a8a15721a5301f12ac67477bfe4fbe7f99b4ceb8e00ba679e"></a>
#### Enumerator SyscModeShape





<a id="group__SyscParticipantLibraryCAPI_1ggaa28a3de6c7c91003a8a15721a5301f12aa1b2cf043f26c7e4b42a86fd62c0ab58"></a>
#### Enumerator SyscElectricalConductivity





<a id="group__SyscParticipantLibraryCAPI_1ga1e750bcf34a1c16aed218b03a95ee7ed"></a>
### Enumeration type SyscDataType

![][public]

**Definition**: `syscCommonTypes.h` (line 103)

```
enum SyscDataType {
  SyscDataType_Real = 0,
  SyscDataType_Complex = 1
}
```







<a id="group__SyscParticipantLibraryCAPI_1gga1e750bcf34a1c16aed218b03a95ee7eda6b75c7944f0ea0fb9185ffe4f405e45e"></a>
#### Enumerator SyscDataType\_Real





<a id="group__SyscParticipantLibraryCAPI_1gga1e750bcf34a1c16aed218b03a95ee7edacff35d3f643883c35a2390b28e4f73a1"></a>
#### Enumerator SyscDataType\_Complex





<a id="group__SyscParticipantLibraryCAPI_1ga10ce3774353dfbc811147a9ad211b3cd"></a>
### Enumeration type SyscConvergenceStatus

![][public]

**Definition**: `syscCommonTypes.h` (line 109)

```
enum SyscConvergenceStatus {
  SyscDiverging = -1,
  SyscNotYetConverged = 0,
  SyscConverged = 1,
  SyscComplete = 2,
  SyscNotEvaluated = 3
}
```

Provide enum for participant's solver convergence status.





<a id="group__SyscParticipantLibraryCAPI_1gga10ce3774353dfbc811147a9ad211b3cda7466043ed7106086c08d595333e17f52"></a>
#### Enumerator SyscDiverging





<a id="group__SyscParticipantLibraryCAPI_1gga10ce3774353dfbc811147a9ad211b3cdac97f645aa14099d533bbaea696aae752"></a>
#### Enumerator SyscNotYetConverged





<a id="group__SyscParticipantLibraryCAPI_1gga10ce3774353dfbc811147a9ad211b3cda90e0d458e61026cacc99e563aae9bf5e"></a>
#### Enumerator SyscConverged





<a id="group__SyscParticipantLibraryCAPI_1gga10ce3774353dfbc811147a9ad211b3cda69c6ee0eaef6f36ff519c6386cbb33fc"></a>
#### Enumerator SyscComplete





<a id="group__SyscParticipantLibraryCAPI_1gga10ce3774353dfbc811147a9ad211b3cdae11a117c36c99017d0ab07b5f3ba20e0"></a>
#### Enumerator SyscNotEvaluated





<a id="group__SyscParticipantLibraryCAPI_1ga7d5b3786948265c902f7231abe6d79b5"></a>
### Enumeration type SyscAnalysisType

![][public]

**Definition**: `syscCommonTypes.h` (line 118)

```
enum SyscAnalysisType {
  SyscSteady = 0,
  SyscTransient = 1
}
```

Provide an enum for coupled analysis type.





<a id="group__SyscParticipantLibraryCAPI_1gga7d5b3786948265c902f7231abe6d79b5ad0d53c33e61857fdfe41e2501eebc8dd"></a>
#### Enumerator SyscSteady



Steady analysis type.

<a id="group__SyscParticipantLibraryCAPI_1gga7d5b3786948265c902f7231abe6d79b5ac22067ff2e9230dd35621612f4ab4365"></a>
#### Enumerator SyscTransient



Transient (unsteady) analysis type.

<a id="group__SyscParticipantLibraryCAPI_1gade3becc3625d881bdd988111e0895a3c"></a>
### Enumeration type SyscPrimitiveType

![][public]

**Definition**: `syscCommonTypes.h` (line 147)

```
enum SyscPrimitiveType {
  SyscFloat = 0,
  SyscDouble = 1,
  SyscInt32 = 2,
  SyscInt64 = 3,
  SyscUnsignedInt16 = 4,
  SyscUnsignedInt64 = 5
}
```

Provide an enum for supported primitive types.





<a id="group__SyscParticipantLibraryCAPI_1ggade3becc3625d881bdd988111e0895a3ca6ecfee4aefddc0fd0e974f4949883f0f"></a>
#### Enumerator SyscFloat



Single-precision floating point type.

<a id="group__SyscParticipantLibraryCAPI_1ggade3becc3625d881bdd988111e0895a3ca3c8390a23ce87c17dcaffccfd72fe344"></a>
#### Enumerator SyscDouble



Double-precision floating point type.

<a id="group__SyscParticipantLibraryCAPI_1ggade3becc3625d881bdd988111e0895a3ca21752be8ce378ed3c47cddd1210657f2"></a>
#### Enumerator SyscInt32



Signed 32-bit integer.

<a id="group__SyscParticipantLibraryCAPI_1ggade3becc3625d881bdd988111e0895a3cad2b2abd943a30d3ec7509f53cb5b1239"></a>
#### Enumerator SyscInt64



Signed 64-bit integer.

<a id="group__SyscParticipantLibraryCAPI_1ggade3becc3625d881bdd988111e0895a3cadd05bd1ee15d3dd17e7836e2a96c4f52"></a>
#### Enumerator SyscUnsignedInt16



Unsigned 16-bit integer.

<a id="group__SyscParticipantLibraryCAPI_1ggade3becc3625d881bdd988111e0895a3caba28d71a9abf40c318a16365a2eb091c"></a>
#### Enumerator SyscUnsignedInt64



Unsigned 64-bit integer.

<a id="group__SyscParticipantLibraryCAPI_1gab997855544b4c0ac77104b89faffae5d"></a>
### Enumeration type SyscParticipantType

![][public]

**Definition**: `syscCommonTypes.h` (line 156)

```
enum SyscParticipantType {
  SyscDEFAULT = 0,
  SyscCFX = 1,
  SyscFLUENT = 2,
  SyscMAPDL = 3,
  SyscAEDT = 4,
  SyscFMU = 5,
  SyscFMU_PROXY = 6,
  SyscEXTERNALDATA = 7,
  SyscFORTE = 8,
  SyscDEFAULT_SRV = 9,
  SyscMECH_SRV = 10,
  SyscCFD_SRV = 11,
  SyscSCDT_SRV = 12,
  SyscTHERMAL_DESKTOP = 13,
  SyscLS_DYNA = 14,
  SyscROCKY = 15
}
```







<a id="group__SyscParticipantLibraryCAPI_1ggab997855544b4c0ac77104b89faffae5da1f314de13dbd0c48f0339c633203741e"></a>
#### Enumerator SyscDEFAULT





<a id="group__SyscParticipantLibraryCAPI_1ggab997855544b4c0ac77104b89faffae5da6e0f41b213afb0edc478f680075324cc"></a>
#### Enumerator SyscCFX





<a id="group__SyscParticipantLibraryCAPI_1ggab997855544b4c0ac77104b89faffae5dac8857c92c41c39b56581f08cc236f176"></a>
#### Enumerator SyscFLUENT





<a id="group__SyscParticipantLibraryCAPI_1ggab997855544b4c0ac77104b89faffae5dabd0c957458ea1368773e54818d15435c"></a>
#### Enumerator SyscMAPDL





<a id="group__SyscParticipantLibraryCAPI_1ggab997855544b4c0ac77104b89faffae5daf1b337725648c27ffc0f7ade76d2a6cc"></a>
#### Enumerator SyscAEDT





<a id="group__SyscParticipantLibraryCAPI_1ggab997855544b4c0ac77104b89faffae5da0f20720c60a86e4a909a46820586334c"></a>
#### Enumerator SyscFMU





<a id="group__SyscParticipantLibraryCAPI_1ggab997855544b4c0ac77104b89faffae5dade3420bdc27918d3c2c70518f7c9cc19"></a>
#### Enumerator SyscFMU\_PROXY





<a id="group__SyscParticipantLibraryCAPI_1ggab997855544b4c0ac77104b89faffae5daf45662ff29c501232068091a5e19a336"></a>
#### Enumerator SyscEXTERNALDATA





<a id="group__SyscParticipantLibraryCAPI_1ggab997855544b4c0ac77104b89faffae5da87d294213bc3285652129a5a97a24d21"></a>
#### Enumerator SyscFORTE





<a id="group__SyscParticipantLibraryCAPI_1ggab997855544b4c0ac77104b89faffae5da5d362f01300701305b1a228eccac06f0"></a>
#### Enumerator SyscDEFAULT\_SRV





<a id="group__SyscParticipantLibraryCAPI_1ggab997855544b4c0ac77104b89faffae5da0932e47107334a3c6e520b74dd2279b9"></a>
#### Enumerator SyscMECH\_SRV





<a id="group__SyscParticipantLibraryCAPI_1ggab997855544b4c0ac77104b89faffae5dad4851acec7cfe371b4a6b9a9d8e8a6ac"></a>
#### Enumerator SyscCFD\_SRV





<a id="group__SyscParticipantLibraryCAPI_1ggab997855544b4c0ac77104b89faffae5da38d1e472e60e35f9a8044ccb93a5e5b3"></a>
#### Enumerator SyscSCDT\_SRV





<a id="group__SyscParticipantLibraryCAPI_1ggab997855544b4c0ac77104b89faffae5dacf58fe46486ad60bb7b0930cbe29826c"></a>
#### Enumerator SyscTHERMAL\_DESKTOP





<a id="group__SyscParticipantLibraryCAPI_1ggab997855544b4c0ac77104b89faffae5da154ed7cf7815e00c77d7239ea0cfe184"></a>
#### Enumerator SyscLS\_DYNA





<a id="group__SyscParticipantLibraryCAPI_1ggab997855544b4c0ac77104b89faffae5dad9bcd21c67d707283ef0a44e57b69f22"></a>
#### Enumerator SyscROCKY





<a id="group__SyscParticipantLibraryCAPI_1gab18060c2493ddba0678016696642f005"></a>
### Enumeration type SyscElementTypes

![][public]

**Definition**: `syscElementTypes.h` (line 238)

```
enum SyscElementTypes {
  SyscTri3 = 5,
  SyscTri6 = 6,
  SyscQuad4 = 7,
  SyscQuad8 = 8,
  SyscTet4 = 9,
  SyscTet10 = 10,
  SyscHex8 = 11,
  SyscHex20 = 12,
  SyscWedge6 = 13,
  SyscWedge15 = 14,
  SyscPyramid5 = 15,
  SyscPyramid13 = 16,
  SyscPolygon = 18,
  SyscPolyhedron = 19
}
```

Provide an enum for element types.





<a id="group__SyscParticipantLibraryCAPI_1ggab18060c2493ddba0678016696642f005a77470006c9f90e0699d34cb4529977bd"></a>
#### Enumerator SyscTri3



Trilateral element with corner nodes only.

<a id="group__SyscParticipantLibraryCAPI_1ggab18060c2493ddba0678016696642f005ad973b33a8c615a7088218bb68c95cef1"></a>
#### Enumerator SyscTri6



Trilateral element with corner and mid-side nodes.

<a id="group__SyscParticipantLibraryCAPI_1ggab18060c2493ddba0678016696642f005ac829eb996aacda6977a2633d3d4b6ae0"></a>
#### Enumerator SyscQuad4



Quadrilateral element with corner nodes only.

<a id="group__SyscParticipantLibraryCAPI_1ggab18060c2493ddba0678016696642f005aefd1fe32f0987d59a023071a8d6729a9"></a>
#### Enumerator SyscQuad8



Quadrilateral element with corner and mid-side nodes.

<a id="group__SyscParticipantLibraryCAPI_1ggab18060c2493ddba0678016696642f005afb767ddc846b275cc9f06f4c552ef8ea"></a>
#### Enumerator SyscTet4



Tetrahedral element with corner nodes only.

<a id="group__SyscParticipantLibraryCAPI_1ggab18060c2493ddba0678016696642f005a706ca034c9b7e05f8f2a87301b72a6be"></a>
#### Enumerator SyscTet10



Tetrahedral element with corner and mid-side nodes.

<a id="group__SyscParticipantLibraryCAPI_1ggab18060c2493ddba0678016696642f005a15bbc3ed5ebf288d89e4e9af7ce9e0ae"></a>
#### Enumerator SyscHex8



Hexahedral element with corner nodes only.

<a id="group__SyscParticipantLibraryCAPI_1ggab18060c2493ddba0678016696642f005a4eaa66437832a76bdcbc92a727dfedd1"></a>
#### Enumerator SyscHex20



Hexahedral element with corner and mid-side nodes.

<a id="group__SyscParticipantLibraryCAPI_1ggab18060c2493ddba0678016696642f005a05727b1e9b0ab410f1d5f9c31337b508"></a>
#### Enumerator SyscWedge6



Wedge element with corner nodes only.

<a id="group__SyscParticipantLibraryCAPI_1ggab18060c2493ddba0678016696642f005a53a4340e11f6e1a6b75f084f2518649a"></a>
#### Enumerator SyscWedge15



Wedge element with corner and mid-side nodes.

<a id="group__SyscParticipantLibraryCAPI_1ggab18060c2493ddba0678016696642f005a6389c588d45313437139bcea52d94866"></a>
#### Enumerator SyscPyramid5



Pyramid element with corner nodes only.

<a id="group__SyscParticipantLibraryCAPI_1ggab18060c2493ddba0678016696642f005a366c507804e6022a52b6f38852861b1b"></a>
#### Enumerator SyscPyramid13



Pyramid element with corner and mid-side nodes.

<a id="group__SyscParticipantLibraryCAPI_1ggab18060c2493ddba0678016696642f005ac46af723ae879263d8c74a0cd91dfb9e"></a>
#### Enumerator SyscPolygon



Arbitrary polygon.

<a id="group__SyscParticipantLibraryCAPI_1ggab18060c2493ddba0678016696642f005aa1667251e6eb0b96ab2b003591a8983f"></a>
#### Enumerator SyscPolyhedron



Arbitrary polyhedron.

## Typedefs

<a id="group__SyscParticipantLibraryCAPI_1gaaabd83bdde051f257f11c5c0cdd73990"></a>
### Typedef SyscSolutionControl

![][public]

**Definition**: `syscCommonTypes.h` (line 134)

```
typedef struct SyscSolutionControl SyscSolutionControl
```

Provide a structure containing solution control.





**Return type**: struct [SyscSolutionControl](structSyscSolutionControl.md#structSyscSolutionControl)

<a id="group__SyscParticipantLibraryCAPI_1ga17ef60969b3c919163ba2471eb95a28b"></a>
### Typedef SyscOpaqueDataAccess

![][public]

**Definition**: `syscCommonTypes.h` (line 175)

```
typedef void* SyscOpaqueDataAccess
```



Declare an opaque pointer type.



**Return type**: void *

<a id="group__SyscParticipantLibraryCAPI_1ga80be2caaea1dd7e82a2da155c7283875"></a>
### Typedef SyscSetupInfo

![][public]

**Definition**: `syscCommonTypes.h` (line 197)

```
typedef struct SyscSetupInfo SyscSetupInfo
```

Provide a structure for System Coupling setup information.

To create and/or initialize the [SyscSetupInfo](structSyscSetupInfo.md#structSyscSetupInfo) struct, it is highly recommended to use one of the functions with names starting with <code>syscGetSetupInfo</code>. These functions will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```
SyscSetupInfo setupInfo = syscGetSetupInfoA(SyscSteady); 
```



**Return type**: struct [SyscSetupInfo](structSyscSetupInfo.md#structSyscSetupInfo)

<a id="group__SyscParticipantLibraryCAPI_1ga97036eb61b15d6efd5f9602bd19bb562"></a>
### Typedef SyscSetupFileInfo

![][public]

**Definition**: `syscCommonTypes.h` (line 297)

```
typedef struct SyscSetupFileInfo SyscSetupFileInfo
```

Provide a structure for writing System Coupling setup files.

To create and/or initialize the [SyscSetupFileInfo](structSyscSetupFileInfo.md#structSyscSetupFileInfo) struct, it is highly recommended to use <code>syscGetSetupFileInfo</code> function. This function will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```
SyscSetupFileInfo setupFileInfo = syscGetSetupFileInfo("setup.scp");
```



**Return type**: struct [SyscSetupFileInfo](structSyscSetupFileInfo.md#structSyscSetupFileInfo)

<a id="group__SyscParticipantLibraryCAPI_1gacab0987c6f6f3da0ae499505c3f67d9e"></a>
### Typedef SyscResultsInfo

![][public]

**Definition**: `syscCommonTypes.h` (line 316)

```
typedef struct SyscResultsInfo SyscResultsInfo
```

Provide a structure for writing results files.





**Return type**: struct [SyscResultsInfo](structSyscResultsInfo.md#structSyscResultsInfo)

<a id="group__SyscParticipantLibraryCAPI_1ga828a191dd9fffcb117c398848b9ad10b"></a>
### Typedef SyscCouplingInterface

![][public]

**Definition**: `syscCouplingInterface.h` (line 47)

```
typedef struct SyscCouplingInterface SyscCouplingInterface
```

Provide a struct for a coupling interface.

Coupling interface can be used to set up the transfers of data between different regions within the same participant solver. Interface contains two sides and each side can contain one or more regions. Data transfers are automatically defined: if a variable is defined as an output on all regions on one side of the interface and as an input on all regions on the opposide side of the interface, then it will be mapped from the former side to the latter side.





All regions on one side of the interface must have the same topology.





To create and/or initialize the [SyscCouplingInterface](structSyscCouplingInterface.md#structSyscCouplingInterface) struct, it is highly recommended to use the <code>syscGetCouplingInterface</code> function. This function will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```
SyscCouplingInterface reg = syscGetCouplingInterface("FSI"); 
```



**Return type**: struct [SyscCouplingInterface](structSyscCouplingInterface.md#structSyscCouplingInterface)

<a id="group__SyscParticipantLibraryCAPI_1ga8e23d76b7478495ca52b0e1f719607fc"></a>
### Typedef SyscDataTransfer

![][public]

**Definition**: `syscDataTransfer.h` (line 33)

```
typedef struct SyscDataTransfer SyscDataTransfer
```

Provide a struct for a data transfer.

Data transfer specifies the source and target variables for mapping.



**Return type**: struct [SyscDataTransfer](structSyscDataTransfer.md#structSyscDataTransfer)

<a id="group__SyscParticipantLibraryCAPI_1gaaf3788ac706a730edbf6093c7e543681"></a>
### Typedef SyscInputScalarDataAccess

![][public]

**Definition**: `syscFunctionTypes.h` (line 39)

```
typedef SyscInputScalarData(* SyscInputScalarDataAccess) (const char *regionName, const char *variableName)
```

Provide function prototype for access to input scalar data.





**Return type**: [SyscInputScalarData](structSyscInputScalarData.md#structSyscInputScalarData)(*

<a id="group__SyscParticipantLibraryCAPI_1gad41922f1a4f5abb891d5a913ba5fcccf"></a>
### Typedef SyscInputScalarDataAccessWithPointer

![][public]

**Definition**: `syscFunctionTypes.h` (line 46)

```
typedef SyscInputScalarData(* SyscInputScalarDataAccessWithPointer) (SyscOpaqueDataAccess opaqueDataAccess, const char *regionName, const char *variableName)
```

Provide function prototype for access to input scalar data with opaque pointer.





**Return type**: [SyscInputScalarData](structSyscInputScalarData.md#structSyscInputScalarData)(*

<a id="group__SyscParticipantLibraryCAPI_1ga844dc6322bd6e4eabc2d3d2d9e69bdb1"></a>
### Typedef SyscInputScalarDataMultiZoneAccess

![][public]

**Definition**: `syscFunctionTypes.h` (line 54)

```
typedef SyscInputScalarData(* SyscInputScalarDataMultiZoneAccess) (SyscOpaqueDataAccess opaqueDataAccess, const char *regionName, const char *variableName, uint16_t zoneIndex)
```

Provide function prototype for access to multi-zone input scalar data.





**Return type**: [SyscInputScalarData](structSyscInputScalarData.md#structSyscInputScalarData)(*

<a id="group__SyscParticipantLibraryCAPI_1ga8d5f53de4e65a4bacef0f25ba8b46483"></a>
### Typedef SyscInputVectorDataAccess

![][public]

**Definition**: `syscFunctionTypes.h` (line 63)

```
typedef SyscInputVectorData(* SyscInputVectorDataAccess) (const char *regionName, const char *variableName)
```

Provide function prototype for access to input vector data.





**Return type**: [SyscInputVectorData](structSyscInputVectorData.md#structSyscInputVectorData)(*

<a id="group__SyscParticipantLibraryCAPI_1gae7c6372393f3ec720b8d6d1535fcf9b3"></a>
### Typedef SyscInputVectorDataAccessWithPointer

![][public]

**Definition**: `syscFunctionTypes.h` (line 70)

```
typedef SyscInputVectorData(* SyscInputVectorDataAccessWithPointer) (SyscOpaqueDataAccess opaqueDataAccess, const char *regionName, const char *variableName)
```

Provide function prototype for access to input vector data with opaque pointer.





**Return type**: [SyscInputVectorData](structSyscInputVectorData.md#structSyscInputVectorData)(*

<a id="group__SyscParticipantLibraryCAPI_1gae2e92f1b7ae911c36bf3606c60a01511"></a>
### Typedef SyscInputVectorDataMultiZoneAccess

![][public]

**Definition**: `syscFunctionTypes.h` (line 78)

```
typedef SyscInputVectorData(* SyscInputVectorDataMultiZoneAccess) (SyscOpaqueDataAccess opaqueDataAccess, const char *regionName, const char *variableName, uint16_t zoneIndex)
```

Provide function prototype for access to multi-zone input vector data.





**Return type**: [SyscInputVectorData](structSyscInputVectorData.md#structSyscInputVectorData)(*

<a id="group__SyscParticipantLibraryCAPI_1gabd35283796cae3d3dbc851ac66b8564f"></a>
### Typedef SyscOutputScalarDataAccess

![][public]

**Definition**: `syscFunctionTypes.h` (line 87)

```
typedef SyscOutputScalarData(* SyscOutputScalarDataAccess) (const char *regionName, const char *variableName)
```

Provide function prototype for access to output scalar data.





**Return type**: [SyscOutputScalarData](structSyscOutputScalarData.md#structSyscOutputScalarData)(*

<a id="group__SyscParticipantLibraryCAPI_1gab378ed75ffd9b081ad7eccf8107a5542"></a>
### Typedef SyscOutputScalarDataAccessWithPointer

![][public]

**Definition**: `syscFunctionTypes.h` (line 94)

```
typedef SyscOutputScalarData(* SyscOutputScalarDataAccessWithPointer) (SyscOpaqueDataAccess opaqueDataAccess, const char *regionName, const char *variableName)
```

Provide function prototype for access to output scalar data with opaque pointer.





**Return type**: [SyscOutputScalarData](structSyscOutputScalarData.md#structSyscOutputScalarData)(*

<a id="group__SyscParticipantLibraryCAPI_1ga7767f728d880014dfbd853bbb8e0eb07"></a>
### Typedef SyscOutputScalarDataMultiZoneAccess

![][public]

**Definition**: `syscFunctionTypes.h` (line 102)

```
typedef SyscOutputScalarData(* SyscOutputScalarDataMultiZoneAccess) (SyscOpaqueDataAccess opaqueDataAccess, const char *regionName, const char *variableName, uint16_t zoneIndex)
```

Provide function prototype for access to multi-zone output scalar data.





**Return type**: [SyscOutputScalarData](structSyscOutputScalarData.md#structSyscOutputScalarData)(*

<a id="group__SyscParticipantLibraryCAPI_1gae99c8cb78199403b9e74217557be206a"></a>
### Typedef SyscOutputVectorDataAccess

![][public]

**Definition**: `syscFunctionTypes.h` (line 111)

```
typedef SyscOutputVectorData(* SyscOutputVectorDataAccess) (const char *regionName, const char *variableName)
```

Provide function prototype for access to output vector data.





**Return type**: [SyscOutputVectorData](structSyscOutputVectorData.md#structSyscOutputVectorData)(*

<a id="group__SyscParticipantLibraryCAPI_1gab30cbe5478bf769c81f5c0a07e885afd"></a>
### Typedef SyscOutputVectorDataAccessWithPointer

![][public]

**Definition**: `syscFunctionTypes.h` (line 118)

```
typedef SyscOutputVectorData(* SyscOutputVectorDataAccessWithPointer) (SyscOpaqueDataAccess opaqueDataAccess, const char *regionName, const char *variableName)
```

Provide function prototype for access to output vector data with opaque pointer.





**Return type**: [SyscOutputVectorData](structSyscOutputVectorData.md#structSyscOutputVectorData)(*

<a id="group__SyscParticipantLibraryCAPI_1ga1d6d5d9fa806ac5820d9a6ed85811804"></a>
### Typedef SyscOutputVectorDataMultiZoneAccess

![][public]

**Definition**: `syscFunctionTypes.h` (line 126)

```
typedef SyscOutputVectorData(* SyscOutputVectorDataMultiZoneAccess) (SyscOpaqueDataAccess opaqueDataAccess, const char *regionName, const char *variableName, uint16_t zoneIndex)
```

Provide function prototype for access to multi-zone output vector data.





**Return type**: [SyscOutputVectorData](structSyscOutputVectorData.md#structSyscOutputVectorData)(*

<a id="group__SyscParticipantLibraryCAPI_1gab388f936f3a73b9b480a792c401a95a1"></a>
### Typedef SyscInputComplexScalarDataAccess

![][public]

**Definition**: `syscFunctionTypes.h` (line 135)

```
typedef SyscInputComplexScalarData(* SyscInputComplexScalarDataAccess) (const char *regionName, const char *variableName)
```

Provide function prototype for access to input complex scalar data.





**Return type**: [SyscInputComplexScalarData](structSyscInputComplexScalarData.md#structSyscInputComplexScalarData)(*

<a id="group__SyscParticipantLibraryCAPI_1ga7a0c5889de7b17b59d44595d7636747e"></a>
### Typedef SyscInputComplexScalarDataAccessWithPointer

![][public]

**Definition**: `syscFunctionTypes.h` (line 142)

```
typedef SyscInputComplexScalarData(* SyscInputComplexScalarDataAccessWithPointer) (SyscOpaqueDataAccess opaqueDataAccess, const char *regionName, const char *variableName)
```

Provide function prototype for access to input complex scalar data with opaque pointer.





**Return type**: [SyscInputComplexScalarData](structSyscInputComplexScalarData.md#structSyscInputComplexScalarData)(*

<a id="group__SyscParticipantLibraryCAPI_1gace54794852b48d8725b930f1aed89c4d"></a>
### Typedef SyscInputComplexVectorDataAccess

![][public]

**Definition**: `syscFunctionTypes.h` (line 150)

```
typedef SyscInputComplexVectorData(* SyscInputComplexVectorDataAccess) (const char *regionName, const char *variableName)
```

Provide function prototype for access to input complex vector data.





**Return type**: [SyscInputComplexVectorData](structSyscInputComplexVectorData.md#structSyscInputComplexVectorData)(*

<a id="group__SyscParticipantLibraryCAPI_1ga68dcce877e8cc69f13bee845c76f1b4d"></a>
### Typedef SyscInputComplexVectorDataAccessWithPointer

![][public]

**Definition**: `syscFunctionTypes.h` (line 157)

```
typedef SyscInputComplexVectorData(* SyscInputComplexVectorDataAccessWithPointer) (SyscOpaqueDataAccess opaqueDataAccess, const char *regionName, const char *variableName)
```

Provide function prototype for access to input complex vector data with opaque pointer.





**Return type**: [SyscInputComplexVectorData](structSyscInputComplexVectorData.md#structSyscInputComplexVectorData)(*

<a id="group__SyscParticipantLibraryCAPI_1ga17d96c2c29a44374309efafdfb8fef62"></a>
### Typedef SyscOutputComplexScalarDataAccess

![][public]

**Definition**: `syscFunctionTypes.h` (line 165)

```
typedef SyscOutputComplexScalarData(* SyscOutputComplexScalarDataAccess) (const char *regionName, const char *variableName)
```

Provide function prototype for access to output complex scalar data.





**Return type**: [SyscOutputComplexScalarData](structSyscOutputComplexScalarData.md#structSyscOutputComplexScalarData)(*

<a id="group__SyscParticipantLibraryCAPI_1ga71ac4910edd87d8d62e871001258c698"></a>
### Typedef SyscOutputComplexScalarDataAccessWithPointer

![][public]

**Definition**: `syscFunctionTypes.h` (line 172)

```
typedef SyscOutputComplexScalarData(* SyscOutputComplexScalarDataAccessWithPointer) (SyscOpaqueDataAccess opaqueDataAccess, const char *regionName, const char *variableName)
```

Provide function prototype for access to output complex scalar data with opaque pointer.





**Return type**: [SyscOutputComplexScalarData](structSyscOutputComplexScalarData.md#structSyscOutputComplexScalarData)(*

<a id="group__SyscParticipantLibraryCAPI_1ga65a0f3a119f2cec715ac89798f16a97c"></a>
### Typedef SyscOutputComplexVectorDataAccess

![][public]

**Definition**: `syscFunctionTypes.h` (line 180)

```
typedef SyscOutputComplexVectorData(* SyscOutputComplexVectorDataAccess) (const char *regionName, const char *variableName)
```

Provide function prototype for access to output complex vector data.





**Return type**: [SyscOutputComplexVectorData](structSyscOutputComplexVectorData.md#structSyscOutputComplexVectorData)(*

<a id="group__SyscParticipantLibraryCAPI_1ga18e31a00d833843895c731e69ca006b0"></a>
### Typedef SyscOutputComplexVectorDataAccessWithPointer

![][public]

**Definition**: `syscFunctionTypes.h` (line 187)

```
typedef SyscOutputComplexVectorData(* SyscOutputComplexVectorDataAccessWithPointer) (SyscOpaqueDataAccess opaqueDataAccess, const char *regionName, const char *variableName)
```

Provide function prototype for access to output complex vector data with opaque pointer.





**Return type**: [SyscOutputComplexVectorData](structSyscOutputComplexVectorData.md#structSyscOutputComplexVectorData)(*

<a id="group__SyscParticipantLibraryCAPI_1ga71e4eb102d00dd0a211f6dc2f4d24222"></a>
### Typedef SyscSurfMeshAccess

![][public]

**Definition**: `syscFunctionTypes.h` (line 195)

```
typedef SyscSurfaceMesh(* SyscSurfMeshAccess) (const char *regionName)
```

Provide function prototype for access to surface mesh.





**Return type**: [SyscSurfaceMesh](structSyscSurfaceMesh.md#structSyscSurfaceMesh)(*

<a id="group__SyscParticipantLibraryCAPI_1gafbfb299099d65e3f232bb67a04d1a8e9"></a>
### Typedef SyscSurfaceMeshAccessWithPointer

![][public]

**Definition**: `syscFunctionTypes.h` (line 201)

```
typedef SyscSurfaceMesh(* SyscSurfaceMeshAccessWithPointer) (SyscOpaqueDataAccess opaqueDataAccess, const char *regionName)
```

Provide function prototype for access to surface mesh with opaque pointer.





**Return type**: [SyscSurfaceMesh](structSyscSurfaceMesh.md#structSyscSurfaceMesh)(*

<a id="group__SyscParticipantLibraryCAPI_1ga9ffe052c4c28ff40b4a14b32cd9f227c"></a>
### Typedef SyscSurfaceMeshMultiZoneAccess

![][public]

**Definition**: `syscFunctionTypes.h` (line 206)

```
typedef SyscSurfaceMesh(* SyscSurfaceMeshMultiZoneAccess) (SyscOpaqueDataAccess opaqueDataAccess, const char *regionName, uint16_t zoneIndex)
```

Provide function prototype for access to multi-zone surface mesh.





**Return type**: [SyscSurfaceMesh](structSyscSurfaceMesh.md#structSyscSurfaceMesh)(*

<a id="group__SyscParticipantLibraryCAPI_1gad0ff77c2af045d3294b149219123a084"></a>
### Typedef SyscVolumeMeshAccess

![][public]

**Definition**: `syscFunctionTypes.h` (line 214)

```
typedef SyscVolumeMesh(* SyscVolumeMeshAccess) (const char *regionName)
```

Provide function prototype for access to volume mesh.





**Return type**: [SyscVolumeMesh](structSyscVolumeMesh.md#structSyscVolumeMesh)(*

<a id="group__SyscParticipantLibraryCAPI_1gadcb6262e27485836632696e52cf80fb9"></a>
### Typedef SyscVolumeMeshAccessWithPointer

![][public]

**Definition**: `syscFunctionTypes.h` (line 220)

```
typedef SyscVolumeMesh(* SyscVolumeMeshAccessWithPointer) (SyscOpaqueDataAccess opaqueDataAccess, const char *regionName)
```

Provide function prototype for access to volume mesh with opaque pointer.





**Return type**: [SyscVolumeMesh](structSyscVolumeMesh.md#structSyscVolumeMesh)(*

<a id="group__SyscParticipantLibraryCAPI_1gaf381b799bec1baf9f3ab727b61458b59"></a>
### Typedef SyscVolumeMeshMultiZoneAccess

![][public]

**Definition**: `syscFunctionTypes.h` (line 225)

```
typedef SyscVolumeMesh(* SyscVolumeMeshMultiZoneAccess) (SyscOpaqueDataAccess opaqueDataAccess, const char *regionName, uint16_t zoneIndex)
```

Provide function prototype for access to multi-zone volume mesh.





**Return type**: [SyscVolumeMesh](structSyscVolumeMesh.md#structSyscVolumeMesh)(*

<a id="group__SyscParticipantLibraryCAPI_1gae999907f608779e525e34f60d2803038"></a>
### Typedef SyscPointCloudAccess

![][public]

**Definition**: `syscFunctionTypes.h` (line 233)

```
typedef SyscPointCloud(* SyscPointCloudAccess) (const char *regionName)
```

Provide function prototype for access to point cloud.





**Return type**: [SyscPointCloud](structSyscPointCloud.md#structSyscPointCloud)(*

<a id="group__SyscParticipantLibraryCAPI_1gafa62fd6d86905625ae071dea4749a8df"></a>
### Typedef SyscPointCloudAccessWithPointer

![][public]

**Definition**: `syscFunctionTypes.h` (line 239)

```
typedef SyscPointCloud(* SyscPointCloudAccessWithPointer) (SyscOpaqueDataAccess opaqueDataAccess, const char *regionName)
```

Provide function prototype for access to point cloud with an opaque pointer.





**Return type**: [SyscPointCloud](structSyscPointCloud.md#structSyscPointCloud)(*

<a id="group__SyscParticipantLibraryCAPI_1gac4a0788f14f0d473372f07638e9dceaa"></a>
### Typedef SyscPointCloudMultiZoneAccess

![][public]

**Definition**: `syscFunctionTypes.h` (line 244)

```
typedef SyscPointCloud(* SyscPointCloudMultiZoneAccess) (SyscOpaqueDataAccess opaqueDataAccess, const char *regionName, uint16_t zoneIndex)
```

Provide function prototype for access to multi-zone point cloud.





**Return type**: [SyscPointCloud](structSyscPointCloud.md#structSyscPointCloud)(*

<a id="group__SyscParticipantLibraryCAPI_1gaabc0678095ad5a5efb8be4d666ce2677"></a>
### Typedef SyscZoneCountAccess

![][public]

**Definition**: `syscFunctionTypes.h` (line 252)

```
typedef uint16_t(* SyscZoneCountAccess) (SyscOpaqueDataAccess opaqueDataAccess, const char *regionName)
```

Provide function prototype for access to zone count.





**Return type**: uint16_t(*

<a id="group__SyscParticipantLibraryCAPI_1ga6d3934571a8dcc03e2ecbe724a808c1b"></a>
### Typedef SyscRestartPointCreation

![][public]

**Definition**: `syscFunctionTypes.h` (line 263)

```
typedef const char*(* SyscRestartPointCreation) ()
```

Provide function prototype for creating restart points.

This function may be called only during outputs update, and is expected to return a unique string identifier for a given restart point.



**Return type**: const char *(*

<a id="group__SyscParticipantLibraryCAPI_1ga9d97e53f3f34b91249f3002d73dc939e"></a>
### Typedef SyscParameter

![][public]

**Definition**: `syscParameter.h` (line 29)

```
typedef struct SyscParameter SyscParameter
```

Provide a struct for a System Coupling parameter.





**Return type**: struct [SyscParameter](structSyscParameter.md#structSyscParameter)

<a id="group__SyscParticipantLibraryCAPI_1gac5687e76cd2c5d1249d8b3ac43ff29b4"></a>
### Typedef SyscRegion

![][public]

**Definition**: `syscRegion.h` (line 47)

```
typedef struct SyscRegion SyscRegion
```

Provide a struct for a System Coupling region.

Participant can declare which regions can be used in the coupled analysis. Each region can declare its input variables and output variables. Input variables represent physical quantities whose values the participant expects System Coupling to provide. Output variables represent physical quantities whose values System Coupling expects the participant to provide.





To create and/or initialize the [SyscRegion](structSyscRegion.md#structSyscRegion) struct, it is highly recommended to use one of the functions with names starting with <code>syscGetRegion</code>. These functions will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```
SyscRegion reg = syscGetRegionT("Wall", SyscSurface);
```



**Return type**: struct [SyscRegion](structSyscRegion.md#structSyscRegion)

<a id="group__SyscParticipantLibraryCAPI_1ga7a8d294476240d2f3844a608e71efe29"></a>
### Typedef SyscVariable

![][public]

**Definition**: `syscVariable.h` (line 45)

```
typedef struct SyscVariable SyscVariable
```

Provide a struct for a System Coupling variable.

To create and/or initialize the [SyscVariable](structSyscVariable.md#structSyscVariable) struct, it is highly recommended to use one of the functions with names starting with <code>syscGetVariable</code>. These functions will initialize all members to the correct values and will help to avoid back-compatibility issues in the future. For example:





```
SyscVariable var = syscGetVariableTE(
  "Temperature", SyscScalar, 0, SyscNode);
```



**Return type**: struct [SyscVariable](structSyscVariable.md#structSyscVariable)

## Functions

<a id="group__SyscParticipantLibraryCAPI_1ga7025ebcdef40667b4c2df0d2b087f600"></a>
### Function syscGetRealAttribute

![][public]

```
SyscRealAttribute syscGetRealAttribute(const char *name, double value, SyscDimensionality dimensionality)
```

Create a real-valued attribute.

**Parameters**:

* **name**: - attribute name.
* **value**: - attribute value.
* **dimensionality**: - attribute dimensionality.



**Parameters**:

* const char * **name**
* double **value**
* [SyscDimensionality](structSyscDimensionality.md#structSyscDimensionality) **dimensionality**

**Return type**: [SyscRealAttribute](structSyscRealAttribute.md#structSyscRealAttribute)

<a id="group__SyscParticipantLibraryCAPI_1ga65737d6497a88298c80afab5d62f7687"></a>
### Function syscGetRealAttributeVDM

![][public]

```
SyscRealAttribute syscGetRealAttributeVDM(const char *name, double value, SyscDimensionality dimensionality, int modifiable)
```

Create a real-valued attribute.

**Parameters**:

* **name**: - attribute name.
* **value**: - attribute value.
* **dimensionality**: - attribute dimensionality.
* **modifiable**: - attribute is modifiable.



**Parameters**:

* const char * **name**
* double **value**
* [SyscDimensionality](structSyscDimensionality.md#structSyscDimensionality) **dimensionality**
* int **modifiable**

**Return type**: [SyscRealAttribute](structSyscRealAttribute.md#structSyscRealAttribute)

<a id="group__SyscParticipantLibraryCAPI_1gaf6d02a55f607a7af07039957b21ab511"></a>
### Function syscGetIntegerAttribute

![][public]

```
SyscIntegerAttribute syscGetIntegerAttribute(const char *name, long long int value)
```

Create an integer-valued attribute.

**Parameters**:

* **name**: - attribute name.
* **value**: - attribute value.



**Parameters**:

* const char * **name**
* long long int **value**

**Return type**: [SyscIntegerAttribute](structSyscIntegerAttribute.md#structSyscIntegerAttribute)

<a id="group__SyscParticipantLibraryCAPI_1gac3ae9103fa3cad3c60b1f794ecb27752"></a>
### Function syscGetIntegerAttributeVM

![][public]

```
SyscIntegerAttribute syscGetIntegerAttributeVM(const char *name, long long int value, int modifiable)
```

Create an integer-valued attribute.

**Parameters**:

* **name**: - attribute name.
* **value**: - attribute value.
* **modifiable**: - attribute is modifiable.



**Parameters**:

* const char * **name**
* long long int **value**
* int **modifiable**

**Return type**: [SyscIntegerAttribute](structSyscIntegerAttribute.md#structSyscIntegerAttribute)

<a id="group__SyscParticipantLibraryCAPI_1ga22ab81fcb82b1eb1b58bac1dd3fbcf0d"></a>
### Function syscGetDimensionality

![][public]

```
SyscDimensionality syscGetDimensionality()
```

Get dimensionality.





**Return type**: [SyscDimensionality](structSyscDimensionality.md#structSyscDimensionality)

<a id="group__SyscParticipantLibraryCAPI_1ga1d656df31d1a737654883968e029eb72"></a>
### Function syscGetSyscError

![][public]

```
SyscError syscGetSyscError(int retcode, const char *message)
```

Provide a function to return [SyscError](structSyscError.md#structSyscError) struct.





**Parameters**:

* int **retcode**
* const char * **message**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga65a1735a49d0e0ab7f32d03f27f325a3"></a>
### Function syscGetSetupInfo

![][public]

```
SyscSetupInfo syscGetSetupInfo()
```

Create a setup info struct.

Analysis type will be set to steady. Restarts supported flag will be set to false.



**Return type**: [SyscSetupInfo](structSyscSetupInfo.md#structSyscSetupInfo)

<a id="group__SyscParticipantLibraryCAPI_1gae399cbc645966a48cc2928bb51018d9b"></a>
### Function syscGetSetupInfoA

![][public]

```
SyscSetupInfo syscGetSetupInfoA(enum SyscAnalysisType analysisType)
```

Create a setup info struct.

**Parameters**:

* **analysisType**: - analysis type.

Restarts supported flag will be set to false.



**Parameters**:

* enum [SyscAnalysisType](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga7d5b3786948265c902f7231abe6d79b5) **analysisType**

**Return type**: [SyscSetupInfo](structSyscSetupInfo.md#structSyscSetupInfo)

<a id="group__SyscParticipantLibraryCAPI_1ga49c86c342e0c0d2881958a7a752eb99b"></a>
### Function syscGetSetupInfoAR

![][public]

```
SyscSetupInfo syscGetSetupInfoAR(enum SyscAnalysisType analysisType, int restartsSupported)
```

Create a setup info struct.

**Parameters**:

* **analysisType**: - analysis type.
* **restartsSupported**: - flag indicating whether restarts are supported.



**Parameters**:

* enum [SyscAnalysisType](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga7d5b3786948265c902f7231abe6d79b5) **analysisType**
* int **restartsSupported**

**Return type**: [SyscSetupInfo](structSyscSetupInfo.md#structSyscSetupInfo)

<a id="group__SyscParticipantLibraryCAPI_1gae3a34c9ed638c50c65e1d87dabe66737"></a>
### Function syscGetSetupInfoARD

![][public]

```
SyscSetupInfo syscGetSetupInfoARD(enum SyscAnalysisType analysisType, int restartsSupported, enum SyscDimension dimension)
```

Create a setup info struct.

**Parameters**:

* **analysisType**: - analysis type.
* **restartsSupported**: - flag indicating whether restarts are supported.
* **dimension**: - dimension of the participant.



**Parameters**:

* enum [SyscAnalysisType](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga7d5b3786948265c902f7231abe6d79b5) **analysisType**
* int **restartsSupported**
* enum [SyscDimension](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gac5a5f66ee72fd8015eab632a642cf26d) **dimension**

**Return type**: [SyscSetupInfo](structSyscSetupInfo.md#structSyscSetupInfo)

<a id="group__SyscParticipantLibraryCAPI_1gaf3b03ee2974bbd198008e70e15dd1d1a"></a>
### Function syscGetSetupInfoARDT

![][public]

```
SyscSetupInfo syscGetSetupInfoARDT(enum SyscAnalysisType analysisType, int restartsSupported, enum SyscDimension dimension, enum SyscTimeIntegration timeIntegration)
```

Create a setup info struct.

**Parameters**:

* **analysisType**: - analysis type.
* **restartsSupported**: - flag indicating whether restarts are supported.
* **dimension**: - dimension of the participant.
* **timeIntegration**: - Time integration method



**Parameters**:

* enum [SyscAnalysisType](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga7d5b3786948265c902f7231abe6d79b5) **analysisType**
* int **restartsSupported**
* enum [SyscDimension](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gac5a5f66ee72fd8015eab632a642cf26d) **dimension**
* enum [SyscTimeIntegration](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gaedf008f34febb068e44cb21292dc167f) **timeIntegration**

**Return type**: [SyscSetupInfo](structSyscSetupInfo.md#structSyscSetupInfo)

<a id="group__SyscParticipantLibraryCAPI_1ga34fa5345c4ca947eca11bd6ee25f09ab"></a>
### Function syscGetSetupInfoARDTP

![][public]

```
SyscSetupInfo syscGetSetupInfoARDTP(enum SyscAnalysisType analysisType, int restartsSupported, enum SyscDimension dimension, enum SyscTimeIntegration timeIntegration, enum SyscParticipantType participantType)
```

Create a setup info struct.

**Parameters**:

* **analysisType**: - analysis type.
* **restartsSupported**: - flag indicating whether restarts are supported.
* **dimension**: - dimension of the participant.
* **timeIntegration**: - Time integration method
* **participantType**: - Participant type



**Parameters**:

* enum [SyscAnalysisType](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga7d5b3786948265c902f7231abe6d79b5) **analysisType**
* int **restartsSupported**
* enum [SyscDimension](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gac5a5f66ee72fd8015eab632a642cf26d) **dimension**
* enum [SyscTimeIntegration](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gaedf008f34febb068e44cb21292dc167f) **timeIntegration**
* enum SyscParticipantType **participantType**

**Return type**: [SyscSetupInfo](structSyscSetupInfo.md#structSyscSetupInfo)

<a id="group__SyscParticipantLibraryCAPI_1gac80fa7c7f1ebe9a8d9ef3c4f90d274eb"></a>
### Function syscGetSetupFileInfo

![][public]

```
SyscSetupFileInfo syscGetSetupFileInfo(const char *setupFileName)
```

Provide a function to create SetupFileInfo struct.

**Parameters**:

* **setupFileName**: Setup file name.

Restarts supported flag will be set to false.



**Parameters**:

* const char * **setupFileName**

**Return type**: [SyscSetupFileInfo](structSyscSetupFileInfo.md#structSyscSetupFileInfo)

<a id="group__SyscParticipantLibraryCAPI_1gabf49efc0bc2492b1c8198ba9bd3dab06"></a>
### Function syscGetResultsInfo

![][public]

```
SyscResultsInfo syscGetResultsInfo(const char *baseFileName)
```

Provide a function to create SetupFileInfo struct.

**Parameters**:

* **baseFileName**: - base results file name.



**Parameters**:

* const char * **baseFileName**

**Return type**: [SyscResultsInfo](structSyscResultsInfo.md#structSyscResultsInfo)

<a id="group__SyscParticipantLibraryCAPI_1gae356c9cb4c0dd69f5e1ea9eef6a7c63b"></a>
### Function syscGetCouplingInterface

![][public]

```
SyscCouplingInterface syscGetCouplingInterface(const char *name)
```

Create a coupling interface.

**Parameters**:

* **name**: - Unique name for this interface. String length should not exceed SYSC_STRING_LENGTH.



**Parameters**:

* const char * **name**

**Return type**: [SyscCouplingInterface](structSyscCouplingInterface.md#structSyscCouplingInterface)

<a id="group__SyscParticipantLibraryCAPI_1gaa8401af709fa7638f76f168aa05784a3"></a>
### Function syscAddSideOneRegion

![][public]

```
SyscError syscAddSideOneRegion(const SyscCouplingInterface couplingInterface, const SyscRegion region)
```

Add region to side one of the interface.

If this region has already been added to the interface on side one, then this call will have no effect.





If a different region with the same name has already been added to the interface on side one, then a runtime error will be thrown.





If a region with the same name has already been added to the interface on side two, then a runtime error will be thrown.





If the region name contains invalid characters, a runtime error will be thrown.






**Parameters**:

* **couplingInterface**: Coupling interface to which the output variable is to be added.
* **region**: Region to be added to side one of the interface.



**Parameters**:

* const [SyscCouplingInterface](structSyscCouplingInterface.md#structSyscCouplingInterface) **couplingInterface**
* const [SyscRegion](structSyscRegion.md#structSyscRegion) **region**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga3bbbec8ccb73b5da2997d2cdcd7abb6b"></a>
### Function syscAddSideTwoRegion

![][public]

```
SyscError syscAddSideTwoRegion(const SyscCouplingInterface couplingInterface, const SyscRegion region)
```

Add region to side two of the interface.

If this region has already been added to the interface on side two, then this call will have no effect.





If a different region with the same name has already been added to the interface on side two, then a runtime error will be thrown.





If a region with the same name has already been added to the interface on side one, then a runtime error will be thrown.





If the region name contains invalid characters, a runtime error will be thrown.






**Parameters**:

* **couplingInterface**: Coupling interface to which the output variable is to be added.
* **region**: Region to be added to side two of the interface.



**Parameters**:

* const [SyscCouplingInterface](structSyscCouplingInterface.md#structSyscCouplingInterface) **couplingInterface**
* const [SyscRegion](structSyscRegion.md#structSyscRegion) **region**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1gaec7e1373da295e5fb0c7ecfc52409888"></a>
### Function syscAddDataTransfer

![][public]

```
SyscError syscAddDataTransfer(SyscCouplingInterface couplingInterface, SyscDataTransfer dataTransfer)
```

Add the data transfer to the coupling interface.





**Parameters**:

* [SyscCouplingInterface](structSyscCouplingInterface.md#structSyscCouplingInterface) **couplingInterface**
* [SyscDataTransfer](structSyscDataTransfer.md#structSyscDataTransfer) **dataTransfer**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1gade11af63d2e79ab75e7db7919998e6b5"></a>
### Function syscCouplingInterfaceGetNumDataTransfers

![][public]

```
size_t syscCouplingInterfaceGetNumDataTransfers(SyscCouplingInterface couplingInterface)
```

Get number of data transfer for a given coupling interface.





**Parameters**:

* [SyscCouplingInterface](structSyscCouplingInterface.md#structSyscCouplingInterface) **couplingInterface**

**Return type**: size_t

<a id="group__SyscParticipantLibraryCAPI_1ga13eed5fd3144989e2f7dc2265f6a199e"></a>
### Function syscCouplingInterfaceGetNumSideOneRegions

![][public]

```
size_t syscCouplingInterfaceGetNumSideOneRegions(SyscCouplingInterface couplingInterface)
```

Get number of side one regions for a given coupling interface.





**Parameters**:

* [SyscCouplingInterface](structSyscCouplingInterface.md#structSyscCouplingInterface) **couplingInterface**

**Return type**: size_t

<a id="group__SyscParticipantLibraryCAPI_1gaf2e509aada51179b4ddab8d343f5e392"></a>
### Function syscCouplingInterfaceGetNumSideTwoRegions

![][public]

```
size_t syscCouplingInterfaceGetNumSideTwoRegions(SyscCouplingInterface couplingInterface)
```

Get number of side two regions for a given coupling interface.





**Parameters**:

* [SyscCouplingInterface](structSyscCouplingInterface.md#structSyscCouplingInterface) **couplingInterface**

**Return type**: size_t

<a id="group__SyscParticipantLibraryCAPI_1ga40ed5be0892f1d14a520221f8b439a45"></a>
### Function syscCouplingInterfaceGetDataTransfer

![][public]

```
SyscDataTransfer syscCouplingInterfaceGetDataTransfer(SyscCouplingInterface couplingInterface, size_t index)
```

Get the data transfer at specified index for a given coupling interface.





**Parameters**:

* [SyscCouplingInterface](structSyscCouplingInterface.md#structSyscCouplingInterface) **couplingInterface**
* size_t **index**

**Return type**: [SyscDataTransfer](structSyscDataTransfer.md#structSyscDataTransfer)

<a id="group__SyscParticipantLibraryCAPI_1ga7ab5c93d920b15c8d2e7ba6baddddb28"></a>
### Function syscCouplingInterfaceGetSideOneRegion

![][public]

```
SyscRegion syscCouplingInterfaceGetSideOneRegion(SyscCouplingInterface couplingInterface, size_t index)
```

Get the side one region at specified index for a given coupling interface.





**Parameters**:

* [SyscCouplingInterface](structSyscCouplingInterface.md#structSyscCouplingInterface) **couplingInterface**
* size_t **index**

**Return type**: [SyscRegion](structSyscRegion.md#structSyscRegion)

<a id="group__SyscParticipantLibraryCAPI_1ga1747f6ce3729ff459e26175ded7059f0"></a>
### Function syscCouplingInterfaceGetSideTwoRegion

![][public]

```
SyscRegion syscCouplingInterfaceGetSideTwoRegion(SyscCouplingInterface couplingInterface, size_t index)
```

Get the side two region at specified index for a given coupling interface.





**Parameters**:

* [SyscCouplingInterface](structSyscCouplingInterface.md#structSyscCouplingInterface) **couplingInterface**
* size_t **index**

**Return type**: [SyscRegion](structSyscRegion.md#structSyscRegion)

<a id="group__SyscParticipantLibraryCAPI_1ga10c3562aba2bdcef468fbde205008112"></a>
### Function syscGetDataTransfer

![][public]

```
SyscDataTransfer syscGetDataTransfer(SyscVariable sideOneVariable, SyscVariable sideTwoVariable, enum SyscInterfaceSide targetSide)
```

Create a data transfer using side{One|Two}Variable.

**Parameters**:

* **sideOneVariable**: - side one variable.
* **sideTwoVariable**: - side two variable.
* **targetSide**: - target side.



**Parameters**:

* [SyscVariable](structSyscVariable.md#structSyscVariable) **sideOneVariable**
* [SyscVariable](structSyscVariable.md#structSyscVariable) **sideTwoVariable**
* enum [SyscInterfaceSide](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gacf32f1d9c1566f28bee2b348b2dcd9f5) **targetSide**

**Return type**: [SyscDataTransfer](structSyscDataTransfer.md#structSyscDataTransfer)

<a id="group__SyscParticipantLibraryCAPI_1gadb07659695562864d8bc0df67bec847e"></a>
### Function syscGetDataTransferST

![][public]

```
SyscDataTransfer syscGetDataTransferST(SyscVariable sourceVariable, SyscVariable targetVariable, enum SyscInterfaceSide targetSide)
```

Create a data transfer using {source|target}Variable.

**Parameters**:

* **sourceVariable**: - source variable.
* **targetVariable**: - target variable.
* **targetSide**: - target side.



**Parameters**:

* [SyscVariable](structSyscVariable.md#structSyscVariable) **sourceVariable**
* [SyscVariable](structSyscVariable.md#structSyscVariable) **targetVariable**
* enum [SyscInterfaceSide](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gacf32f1d9c1566f28bee2b348b2dcd9f5) **targetSide**

**Return type**: [SyscDataTransfer](structSyscDataTransfer.md#structSyscDataTransfer)

<a id="group__SyscParticipantLibraryCAPI_1ga1843bbb3648ac07766c7e6ea9f309a54"></a>
### Function syscGetInputComplexScalarData

![][public]

```
SyscInputComplexScalarData syscGetInputComplexScalarData()
```

Create an empty input copmlex scalar data access struct.

Primitive type will default to double-precision. Data size will be set to zero. Data pointers will be set to null.



**Return type**: [SyscInputComplexScalarData](structSyscInputComplexScalarData.md#structSyscInputComplexScalarData)

<a id="group__SyscParticipantLibraryCAPI_1gaaed0337275d991d2cd2a1ec4dbf2a595"></a>
### Function syscGetInputComplexScalarDataSplitDouble

![][public]

```
SyscInputComplexScalarData syscGetInputComplexScalarDataSplitDouble(double *const dataReal, double *const dataImag, size_t dataSize)
```

Create a complex input scalar data access struct.

**Parameters**:

* **dataReal**: - pointer to the double-precision real data component.
* **dataImag**: - pointer to the double-precision imaginary data component.
* **dataSize**: - data size.



**Parameters**:

* double *const **dataReal**
* double *const **dataImag**
* size_t **dataSize**

**Return type**: [SyscInputComplexScalarData](structSyscInputComplexScalarData.md#structSyscInputComplexScalarData)

<a id="group__SyscParticipantLibraryCAPI_1ga11c65e99f509cd226f13b0932aba8eb7"></a>
### Function syscGetInputComplexScalarDataSplitFloat

![][public]

```
SyscInputComplexScalarData syscGetInputComplexScalarDataSplitFloat(float *const dataReal, float *const dataImag, size_t dataSize)
```

Create a complex input scalar data access struct.

**Parameters**:

* **dataReal**: - pointer to the single-precision real data component.
* **dataImag**: - pointer to the single-precision imaginary data component.
* **dataSize**: - data size.



**Parameters**:

* float *const **dataReal**
* float *const **dataImag**
* size_t **dataSize**

**Return type**: [SyscInputComplexScalarData](structSyscInputComplexScalarData.md#structSyscInputComplexScalarData)

<a id="group__SyscParticipantLibraryCAPI_1ga5cbb0ff3aa857c03d3626038e3a20ffa"></a>
### Function syscGetInputComplexScalarDataCompactDouble

![][public]

```
SyscInputComplexScalarData syscGetInputComplexScalarDataCompactDouble(double *const data, size_t dataSize)
```

Create a complex input scalar data access struct.

**Parameters**:

* **data**: - pointer to the double-precision data.
* **dataSize**: - data size.



**Parameters**:

* double *const **data**
* size_t **dataSize**

**Return type**: [SyscInputComplexScalarData](structSyscInputComplexScalarData.md#structSyscInputComplexScalarData)

<a id="group__SyscParticipantLibraryCAPI_1ga0ff093e80497efd6dccb6ea29c9face3"></a>
### Function syscGetInputComplexScalarDataCompactFloat

![][public]

```
SyscInputComplexScalarData syscGetInputComplexScalarDataCompactFloat(float *const data, size_t dataSize)
```

Create a complex input scalar data access struct.

**Parameters**:

* **data**: - pointer to the single-precision data.
* **dataSize**: - data size.



**Parameters**:

* float *const **data**
* size_t **dataSize**

**Return type**: [SyscInputComplexScalarData](structSyscInputComplexScalarData.md#structSyscInputComplexScalarData)

<a id="group__SyscParticipantLibraryCAPI_1gaa7291e96ae240db79de4b35ad82c4cc0"></a>
### Function syscGetInputComplexVectorData

![][public]

```
SyscInputComplexVectorData syscGetInputComplexVectorData()
```

Create an empty input complex vector data access struct.

Primitive type will default to double-precision. Data size will be set to zero. Data pointers will be set to null.



**Return type**: [SyscInputComplexVectorData](structSyscInputComplexVectorData.md#structSyscInputComplexVectorData)

<a id="group__SyscParticipantLibraryCAPI_1ga311e2b750be4212f60557b49870f1eac"></a>
### Function syscGetInputCompactComplexCompactVectorDataDouble

![][public]

```
SyscInputComplexVectorData syscGetInputCompactComplexCompactVectorDataDouble(double *const data, size_t dataSize)
```

Create a 3D complex input vector data access struct.

**Parameters**:

* **data**: - pointer to the double-precision complex data.
* **dataSize**: - data size.



**Parameters**:

* double *const **data**
* size_t **dataSize**

**Return type**: [SyscInputComplexVectorData](structSyscInputComplexVectorData.md#structSyscInputComplexVectorData)

<a id="group__SyscParticipantLibraryCAPI_1ga5396c1513b3448bfd783c2db743606d2"></a>
### Function syscGetInputCompactComplexCompactVectorDataFloat

![][public]

```
SyscInputComplexVectorData syscGetInputCompactComplexCompactVectorDataFloat(float *const data, size_t dataSize)
```

Create a 3D complex input vector data access struct.

**Parameters**:

* **data**: - pointer to the single-precision complex data.
* **dataSize**: - data size.



**Parameters**:

* float *const **data**
* size_t **dataSize**

**Return type**: [SyscInputComplexVectorData](structSyscInputComplexVectorData.md#structSyscInputComplexVectorData)

<a id="group__SyscParticipantLibraryCAPI_1ga8cce8fbb7655b448cd3c6c08772e1766"></a>
### Function syscGetInputSplitComplexCompactVectorDataDouble

![][public]

```
SyscInputComplexVectorData syscGetInputSplitComplexCompactVectorDataDouble(double *const dataReal, double *const dataImag, size_t dataSize)
```

Create a 3D complex input vector data access struct.

**Parameters**:

* **dataReal**: - pointer to the double-precision complex data (real components).
* **dataImag**: - pointer to the double-precision complex data (imaginary components).
* **dataSize**: - data size.



**Parameters**:

* double *const **dataReal**
* double *const **dataImag**
* size_t **dataSize**

**Return type**: [SyscInputComplexVectorData](structSyscInputComplexVectorData.md#structSyscInputComplexVectorData)

<a id="group__SyscParticipantLibraryCAPI_1ga0c9104179a6e98a7a043e4412f1dafd5"></a>
### Function syscGetInputSplitComplexCompactVectorDataFloat

![][public]

```
SyscInputComplexVectorData syscGetInputSplitComplexCompactVectorDataFloat(float *const dataReal, float *const dataImag, size_t dataSize)
```

Create a 3D complex input vector data access struct.

**Parameters**:

* **dataReal**: - pointer to the single-precision complex data (real components).
* **dataImag**: - pointer to the single-precision complex data (imaginary components).
* **dataSize**: - data size.



**Parameters**:

* float *const **dataReal**
* float *const **dataImag**
* size_t **dataSize**

**Return type**: [SyscInputComplexVectorData](structSyscInputComplexVectorData.md#structSyscInputComplexVectorData)

<a id="group__SyscParticipantLibraryCAPI_1ga7eefc4444dbdf8924e4074046de5eba2"></a>
### Function syscGetInputCompactComplexSplitVectorDataDouble

![][public]

```
SyscInputComplexVectorData syscGetInputCompactComplexSplitVectorDataDouble(double *const data1, double *const data2, double *const data3, size_t dataSize)
```

Create a 3D complex input vector data access struct.

**Parameters**:

* **data1**: - pointer to the double-precision complex data (first component).
* **data2**: - pointer to the double-precision complex data (second component).
* **data3**: - pointer to the double-precision complex data (third component).
* **dataSize**: - data size.



**Parameters**:

* double *const **data1**
* double *const **data2**
* double *const **data3**
* size_t **dataSize**

**Return type**: [SyscInputComplexVectorData](structSyscInputComplexVectorData.md#structSyscInputComplexVectorData)

<a id="group__SyscParticipantLibraryCAPI_1ga513ecaae813a2904f6926c5839cc11a1"></a>
### Function syscGetInputCompactComplexSplitVectorDataFloat

![][public]

```
SyscInputComplexVectorData syscGetInputCompactComplexSplitVectorDataFloat(float *const data1, float *const data2, float *const data3, size_t dataSize)
```

Create a 3D complex input vector data access struct.

**Parameters**:

* **data1**: - pointer to the single-precision complex data (first component).
* **data2**: - pointer to the single-precision complex data (second component).
* **data3**: - pointer to the single-precision complex data (third component).
* **dataSize**: - data size.



**Parameters**:

* float *const **data1**
* float *const **data2**
* float *const **data3**
* size_t **dataSize**

**Return type**: [SyscInputComplexVectorData](structSyscInputComplexVectorData.md#structSyscInputComplexVectorData)

<a id="group__SyscParticipantLibraryCAPI_1ga1fd576a79df5e1b27247f4b71e2afbf0"></a>
### Function syscGetInputSplitComplexSplitVectorDataDouble

![][public]

```
SyscInputComplexVectorData syscGetInputSplitComplexSplitVectorDataDouble(double *const data1Real, double *const data1Imag, double *const data2Real, double *const data2Imag, double *const data3Real, double *const data3Imag, size_t dataSize)
```

Create a 3D complex input vector data access struct.

**Parameters**:

* **data1Real**: - pointer to the double-precision complex data (first real component).
* **data1Imag**: - pointer to the double-precision complex data (first imagindary component).
* **data2Real**: - pointer to the double-precision complex data (second real component).
* **data2Imag**: - pointer to the double-precision complex data (second imagindary component).
* **data3Real**: - pointer to the double-precision complex data (third real component).
* **data3Imag**: - pointer to the double-precision complex data (third imagindary component).
* **dataSize**: - data size.



**Parameters**:

* double *const **data1Real**
* double *const **data1Imag**
* double *const **data2Real**
* double *const **data2Imag**
* double *const **data3Real**
* double *const **data3Imag**
* size_t **dataSize**

**Return type**: [SyscInputComplexVectorData](structSyscInputComplexVectorData.md#structSyscInputComplexVectorData)

<a id="group__SyscParticipantLibraryCAPI_1ga6b650f50fa53c996a07147474343f55f"></a>
### Function syscGetInputSplitComplexSplitVectorDataFloat

![][public]

```
SyscInputComplexVectorData syscGetInputSplitComplexSplitVectorDataFloat(float *const data1Real, float *const data1Imag, float *const data2Real, float *const data2Imag, float *const data3Real, float *const data3Imag, size_t dataSize)
```

Create a 3D complex input vector data access struct.

**Parameters**:

* **data1Real**: - pointer to the single-precision complex data (first real component).
* **data1Imag**: - pointer to the single-precision complex data (first imagindary component).
* **data2Real**: - pointer to the single-precision complex data (second real component).
* **data2Imag**: - pointer to the single-precision complex data (second imagindary component).
* **data3Real**: - pointer to the single-precision complex data (third real component).
* **data3Imag**: - pointer to the single-precision complex data (third imagindary component).
* **dataSize**: - data size.



**Parameters**:

* float *const **data1Real**
* float *const **data1Imag**
* float *const **data2Real**
* float *const **data2Imag**
* float *const **data3Real**
* float *const **data3Imag**
* size_t **dataSize**

**Return type**: [SyscInputComplexVectorData](structSyscInputComplexVectorData.md#structSyscInputComplexVectorData)

<a id="group__SyscParticipantLibraryCAPI_1ga93d5fd27a2899ea57f88958aa29506cd"></a>
### Function syscGetInputCompactComplexCompactVectorDataDoubleDim

![][public]

```
SyscInputComplexVectorData syscGetInputCompactComplexCompactVectorDataDoubleDim(double *const data, size_t dataSize, enum SyscDimension dimension)
```

Create a complex input vector data access struct based on dimension.

**Parameters**:

* **data**: - pointer to the double-precision complex data.
* **dataSize**: - data size.
* **dimension**: - dimension of complex vector data.



**Parameters**:

* double *const **data**
* size_t **dataSize**
* enum [SyscDimension](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gac5a5f66ee72fd8015eab632a642cf26d) **dimension**

**Return type**: [SyscInputComplexVectorData](structSyscInputComplexVectorData.md#structSyscInputComplexVectorData)

<a id="group__SyscParticipantLibraryCAPI_1ga6fa6c5f2890928560f68ebb6d45cabc9"></a>
### Function syscGetInputCompactComplexCompactVectorDataFloatDim

![][public]

```
SyscInputComplexVectorData syscGetInputCompactComplexCompactVectorDataFloatDim(float *const data, size_t dataSize, enum SyscDimension dimension)
```

Create a complex input vector data access struct based on dimension.

**Parameters**:

* **data**: - pointer to the single-precision complex data.
* **dataSize**: - data size.
* **dimension**: - dimension of complex vector data.



**Parameters**:

* float *const **data**
* size_t **dataSize**
* enum [SyscDimension](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gac5a5f66ee72fd8015eab632a642cf26d) **dimension**

**Return type**: [SyscInputComplexVectorData](structSyscInputComplexVectorData.md#structSyscInputComplexVectorData)

<a id="group__SyscParticipantLibraryCAPI_1ga4f26c699d6b93f7d62ad88e69822e1e2"></a>
### Function syscGetInputScalarData

![][public]

```
SyscInputScalarData syscGetInputScalarData()
```

Create an input scalar data access struct.

Primitive type will default to double-precision. Data size will be set to zero. Data pointer will be set to null.



**Return type**: [SyscInputScalarData](structSyscInputScalarData.md#structSyscInputScalarData)

<a id="group__SyscParticipantLibraryCAPI_1ga3b76afcedb8ced51695a0a56dabfb3af"></a>
### Function syscGetInputScalarDataDouble

![][public]

```
SyscInputScalarData syscGetInputScalarDataDouble(double *const data, size_t dataSize)
```

Create an input scalar data access struct.

**Parameters**:

* **data**: - pointer to the double-precision (64-bit) array of data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* double *const **data**
* size_t **dataSize**

**Return type**: [SyscInputScalarData](structSyscInputScalarData.md#structSyscInputScalarData)

<a id="group__SyscParticipantLibraryCAPI_1ga09e03b4996d73e37c1748eb00a8c76c8"></a>
### Function syscGetInputScalarDataFloat

![][public]

```
SyscInputScalarData syscGetInputScalarDataFloat(float *const data, size_t dataSize)
```

Create an input scalar data access struct.

**Parameters**:

* **data**: - pointer to the single-precision (32-bit) array of data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* float *const **data**
* size_t **dataSize**

**Return type**: [SyscInputScalarData](structSyscInputScalarData.md#structSyscInputScalarData)

<a id="group__SyscParticipantLibraryCAPI_1ga8609363d94eccb5ac5113332b5bd0d77"></a>
### Function syscGetInputVectorData

![][public]

```
SyscInputVectorData syscGetInputVectorData()
```

Create an input vector data access struct.

Primitive type will default to double-precision. Data size will be set to zero. Data pointers will be set to null.



**Return type**: [SyscInputVectorData](structSyscInputVectorData.md#structSyscInputVectorData)

<a id="group__SyscParticipantLibraryCAPI_1ga21f7b8327230f78d41e61bdac3f073c0"></a>
### Function syscGetInputVectorDataCompactDouble

![][public]

```
SyscInputVectorData syscGetInputVectorDataCompactDouble(double *const data, size_t dataSize)
```

Create an 3D input vector data access struct with compact storage.

**Parameters**:

* **data**: - pointer to the array of double-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* double *const **data**
* size_t **dataSize**

**Return type**: [SyscInputVectorData](structSyscInputVectorData.md#structSyscInputVectorData)

<a id="group__SyscParticipantLibraryCAPI_1ga1dab4c326c88b20cb402ca06c84d39c2"></a>
### Function syscGetInputVectorDataCompactFloat

![][public]

```
SyscInputVectorData syscGetInputVectorDataCompactFloat(float *const data, size_t dataSize)
```

Create an 3D input vector data access struct with compact storage.

**Parameters**:

* **data**: - pointer to the array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* float *const **data**
* size_t **dataSize**

**Return type**: [SyscInputVectorData](structSyscInputVectorData.md#structSyscInputVectorData)

<a id="group__SyscParticipantLibraryCAPI_1ga5432989ff9b68845634e551c6246e42e"></a>
### Function syscGetInputVectorDataSplitDouble

![][public]

```
SyscInputVectorData syscGetInputVectorDataSplitDouble(double *const data0, double *const data1, double *const data2, size_t dataSize)
```

Create an 3D input vector data access struct with split storage.

**Parameters**:

* **data0**: - pointer to the first array of double-precision data
* **data1**: - pointer to the second array of double-precision data
* **data2**: - pointer to the third array of double-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* double *const **data0**
* double *const **data1**
* double *const **data2**
* size_t **dataSize**

**Return type**: [SyscInputVectorData](structSyscInputVectorData.md#structSyscInputVectorData)

<a id="group__SyscParticipantLibraryCAPI_1ga774cdf0f3bb11efe50a587e6a11e7539"></a>
### Function syscGetInputVectorDataSplitFloat

![][public]

```
SyscInputVectorData syscGetInputVectorDataSplitFloat(float *const data0, float *const data1, float *const data2, size_t dataSize)
```

Create an 3D input vector data access struct with split storage.

**Parameters**:

* **data0**: - pointer to the first array of single-precision data
* **data1**: - pointer to the second array of single-precision data
* **data2**: - pointer to the third array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* float *const **data0**
* float *const **data1**
* float *const **data2**
* size_t **dataSize**

**Return type**: [SyscInputVectorData](structSyscInputVectorData.md#structSyscInputVectorData)

<a id="group__SyscParticipantLibraryCAPI_1gadc1d6ed1a05cf21b0b38af4ea8247eb3"></a>
### Function syscGetInputVectorDataCompactDoubleDim

![][public]

```
SyscInputVectorData syscGetInputVectorDataCompactDoubleDim(double *const data, size_t dataSize, enum SyscDimension dimension)
```

Create an input vector data access struct with compact storage based on dimension.

**Parameters**:

* **data**: - pointer to the array of double-precision data
* **dataSize**: - number of vectors.
* **dimension**: - dimension of complex vector data.



**Parameters**:

* double *const **data**
* size_t **dataSize**
* enum [SyscDimension](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gac5a5f66ee72fd8015eab632a642cf26d) **dimension**

**Return type**: [SyscInputVectorData](structSyscInputVectorData.md#structSyscInputVectorData)

<a id="group__SyscParticipantLibraryCAPI_1ga0e5591d56881dec17e9ebaa087a7a198"></a>
### Function syscGetInputVectorDataCompactFloatDim

![][public]

```
SyscInputVectorData syscGetInputVectorDataCompactFloatDim(float *const data, size_t dataSize, enum SyscDimension dimension)
```

Create an input vector data access struct with compact storage based on dimension.

**Parameters**:

* **data**: - pointer to the array of single-precision data
* **dataSize**: - number of vectors.
* **dimension**: - dimension of complex vector data.



**Parameters**:

* float *const **data**
* size_t **dataSize**
* enum [SyscDimension](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gac5a5f66ee72fd8015eab632a642cf26d) **dimension**

**Return type**: [SyscInputVectorData](structSyscInputVectorData.md#structSyscInputVectorData)

<a id="group__SyscParticipantLibraryCAPI_1gab707ea57d70a474cfdab07c35dc7dcf7"></a>
### Function syscGetInput2DVectorDataSplitDouble

![][public]

```
SyscInputVectorData syscGetInput2DVectorDataSplitDouble(double *const data0, double *const data1, size_t dataSize)
```

Create an 2D input vector data access struct with split storage.

**Parameters**:

* **data0**: - pointer to the first array of double-precision data
* **data1**: - pointer to the second array of double-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* double *const **data0**
* double *const **data1**
* size_t **dataSize**

**Return type**: [SyscInputVectorData](structSyscInputVectorData.md#structSyscInputVectorData)

<a id="group__SyscParticipantLibraryCAPI_1gad39531d8943485fe6a586ce4dbdc5107"></a>
### Function syscGetInput2DVectorDataSplitFloat

![][public]

```
SyscInputVectorData syscGetInput2DVectorDataSplitFloat(float *const data0, float *const data1, size_t dataSize)
```

Create an 2D input vector data access struct with split storage.

**Parameters**:

* **data0**: - pointer to the first array of single-precision data
* **data1**: - pointer to the second array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* float *const **data0**
* float *const **data1**
* size_t **dataSize**

**Return type**: [SyscInputVectorData](structSyscInputVectorData.md#structSyscInputVectorData)

<a id="group__SyscParticipantLibraryCAPI_1gaf412d269c5805e7e6b8600f2690cb874"></a>
### Function syscGetNodeData

![][public]

```
SyscNodeData syscGetNodeData()
```

Create a mesh node data access struct.

Returns an empty mesh node data access struct. All member will be assigned default values.



**Return type**: [SyscNodeData](structSyscNodeData.md#structSyscNodeData)

<a id="group__SyscParticipantLibraryCAPI_1ga8b43e51f7a5fa3f6a2d280c177ca3f8e"></a>
### Function syscGetNodeDataIC

![][public]

```
SyscNodeData syscGetNodeDataIC(SyscOutputIntegerData nodeIds, SyscOutputVectorData nodeCoords)
```

Create a mesh node data access struct, given node ids and node coords in same order.





**Parameters**:

* [SyscOutputIntegerData](structSyscOutputIntegerData.md#structSyscOutputIntegerData) **nodeIds**
* [SyscOutputVectorData](structSyscOutputVectorData.md#structSyscOutputVectorData) **nodeCoords**

**Return type**: [SyscNodeData](structSyscNodeData.md#structSyscNodeData)

<a id="group__SyscParticipantLibraryCAPI_1gaf5a3d9825d0c59c4517ccaccb332e6b5"></a>
### Function syscGetNodeDataC

![][public]

```
SyscNodeData syscGetNodeDataC(SyscOutputVectorData nodeCoords)
```

Creates a mesh node data access struct, given node coordinates in ascending node ids order.





**Parameters**:

* [SyscOutputVectorData](structSyscOutputVectorData.md#structSyscOutputVectorData) **nodeCoords**

**Return type**: [SyscNodeData](structSyscNodeData.md#structSyscNodeData)

<a id="group__SyscParticipantLibraryCAPI_1gac9a38bc69d5b0a77d09be64f73693f46"></a>
### Function syscGetElementTypeDataEmpty

![][public]

```
SyscElementTypeData syscGetElementTypeDataEmpty()
```

Create an empty mesh element type data access struct.

Returns an empty mesh element type data access struct. All member will be assigned default values.



**Return type**: [SyscElementTypeData](structSyscElementTypeData.md#structSyscElementTypeData)

<a id="group__SyscParticipantLibraryCAPI_1ga0edaf6355561dfffffeeea47d5ff796d"></a>
### Function syscGetElementTypeData

![][public]

```
SyscElementTypeData syscGetElementTypeData(SyscOutputIntegerData elemTypes)
```

Create an mesh element type data access struct, given element types.





**Parameters**:

* [SyscOutputIntegerData](structSyscOutputIntegerData.md#structSyscOutputIntegerData) **elemTypes**

**Return type**: [SyscElementTypeData](structSyscElementTypeData.md#structSyscElementTypeData)

<a id="group__SyscParticipantLibraryCAPI_1ga621f044b4d075369865572cc0d68aa97"></a>
### Function syscGetElementNodeCountDataEmpty

![][public]

```
SyscElementNodeCountData syscGetElementNodeCountDataEmpty()
```

Create an empty mesh element node count data access struct.

Returns an empty mesh element node count data access struct. All member will be assigned default values.



**Return type**: [SyscElementNodeCountData](structSyscElementNodeCountData.md#structSyscElementNodeCountData)

<a id="group__SyscParticipantLibraryCAPI_1ga69b8dd901387b03935a8f2aa4c576903"></a>
### Function syscGetElementNodeCountData

![][public]

```
SyscElementNodeCountData syscGetElementNodeCountData(SyscOutputIntegerData elemNodeCount)
```

Create an mesh element node count data access struct, given element node counts.





**Parameters**:

* [SyscOutputIntegerData](structSyscOutputIntegerData.md#structSyscOutputIntegerData) **elemNodeCount**

**Return type**: [SyscElementNodeCountData](structSyscElementNodeCountData.md#structSyscElementNodeCountData)

<a id="group__SyscParticipantLibraryCAPI_1ga827af0f4c18717284c76b8804056a24d"></a>
### Function syscGetElementNodeConnectivityDataEmpty

![][public]

```
SyscElementNodeConnectivityData syscGetElementNodeConnectivityDataEmpty()
```

Create an empty element-to-node connectivity data access struct.

Returns an empty element-to-node connectivity data access struct. All member will be assigned default values.



**Return type**: [SyscElementNodeConnectivityData](structSyscElementNodeConnectivityData.md#structSyscElementNodeConnectivityData)

<a id="group__SyscParticipantLibraryCAPI_1gae4888763deed0388634cd4174e06a027"></a>
### Function syscGetElementNodeConnectivityData

![][public]

```
SyscElementNodeConnectivityData syscGetElementNodeConnectivityData(SyscOutputIntegerData elemNodeIds)
```

Create an element-to-node connectivity data access struct, given element node ids.





**Parameters**:

* [SyscOutputIntegerData](structSyscOutputIntegerData.md#structSyscOutputIntegerData) **elemNodeIds**

**Return type**: [SyscElementNodeConnectivityData](structSyscElementNodeConnectivityData.md#structSyscElementNodeConnectivityData)

<a id="group__SyscParticipantLibraryCAPI_1ga5efb9f82d5def3b2399291a763d72d65"></a>
### Function syscGetFaceCellConnectivityDataEmpty

![][public]

```
SyscFaceCellConnectivityData syscGetFaceCellConnectivityDataEmpty()
```

Create empty face-to-cell connectivity.





**Return type**: [SyscFaceCellConnectivityData](structSyscFaceCellConnectivityData.md#structSyscFaceCellConnectivityData)

<a id="group__SyscParticipantLibraryCAPI_1ga604b682ca22d2b4898d6aedae4d9fb1c"></a>
### Function syscGetFaceCellConnectivityData

![][public]

```
SyscFaceCellConnectivityData syscGetFaceCellConnectivityData(SyscOutputIntegerData cell0Ids, SyscOutputIntegerData cell1Ids)
```

Create face-to-cell connectivity given cell0 and cell1 arrays.





**Parameters**:

* [SyscOutputIntegerData](structSyscOutputIntegerData.md#structSyscOutputIntegerData) **cell0Ids**
* [SyscOutputIntegerData](structSyscOutputIntegerData.md#structSyscOutputIntegerData) **cell1Ids**

**Return type**: [SyscFaceCellConnectivityData](structSyscFaceCellConnectivityData.md#structSyscFaceCellConnectivityData)

<a id="group__SyscParticipantLibraryCAPI_1ga9c98c0bc4f190c90ec8bb034ab6e6781"></a>
### Function syscGetCellIdDataEmpty

![][public]

```
SyscCellIdData syscGetCellIdDataEmpty()
```

Create empty cell id data.





**Return type**: [SyscCellIdData](structSyscCellIdData.md#structSyscCellIdData)

<a id="group__SyscParticipantLibraryCAPI_1gaf52ba7465086cb0c3faf0a6b9473853e"></a>
### Function syscGetCellIdData

![][public]

```
SyscCellIdData syscGetCellIdData(SyscOutputIntegerData cellIds)
```

Create cell id data given cell ids array.





**Parameters**:

* [SyscOutputIntegerData](structSyscOutputIntegerData.md#structSyscOutputIntegerData) **cellIds**

**Return type**: [SyscCellIdData](structSyscCellIdData.md#structSyscCellIdData)

<a id="group__SyscParticipantLibraryCAPI_1ga7c6f7645530e97adaa7fca97bebbf050"></a>
### Function syscGetElementIdDataEmpty

![][public]

```
SyscElementIdData syscGetElementIdDataEmpty()
```

Create empty element id data.





**Return type**: [SyscElementIdData](structSyscElementIdData.md#structSyscElementIdData)

<a id="group__SyscParticipantLibraryCAPI_1ga1d1688e7751b27c15a57a78a244b0261"></a>
### Function syscGetElementIdData

![][public]

```
SyscElementIdData syscGetElementIdData(SyscOutputIntegerData elementIds)
```

Create cell id data given cell ids array.





**Parameters**:

* [SyscOutputIntegerData](structSyscOutputIntegerData.md#structSyscOutputIntegerData) **elementIds**

**Return type**: [SyscElementIdData](structSyscElementIdData.md#structSyscElementIdData)

<a id="group__SyscParticipantLibraryCAPI_1ga5fe1aa7a9f98270030fc7138c4860217"></a>
### Function syscGetFaceDataEmpty

![][public]

```
SyscFaceData syscGetFaceDataEmpty()
```

Create empty face data.





**Return type**: [SyscFaceData](structSyscFaceData.md#structSyscFaceData)

<a id="group__SyscParticipantLibraryCAPI_1gadc25b2855aac9a4c02706bb94cb1d47e"></a>
### Function syscGetFaceDataITCNF

![][public]

```
SyscFaceData syscGetFaceDataITCNF(SyscElementIdData faceIds, SyscElementTypeData faceTypes, SyscElementNodeCountData faceNodeCounts, SyscElementNodeConnectivityData faceNodeConnectivity, SyscFaceCellConnectivityData faceCellConnectivity)
```

Create face data given face ids, types, node counts, node-to-face connectivity, face-to-cell connectivity.





**Parameters**:

* [SyscElementIdData](structSyscElementIdData.md#structSyscElementIdData) **faceIds**
* [SyscElementTypeData](structSyscElementTypeData.md#structSyscElementTypeData) **faceTypes**
* [SyscElementNodeCountData](structSyscElementNodeCountData.md#structSyscElementNodeCountData) **faceNodeCounts**
* [SyscElementNodeConnectivityData](structSyscElementNodeConnectivityData.md#structSyscElementNodeConnectivityData) **faceNodeConnectivity**
* [SyscFaceCellConnectivityData](structSyscFaceCellConnectivityData.md#structSyscFaceCellConnectivityData) **faceCellConnectivity**

**Return type**: [SyscFaceData](structSyscFaceData.md#structSyscFaceData)

<a id="group__SyscParticipantLibraryCAPI_1gab1f554f37a4e5dc06cdfc15d7ca4b6c7"></a>
### Function syscGetFaceDataICNF

![][public]

```
SyscFaceData syscGetFaceDataICNF(SyscElementIdData faceIds, SyscElementNodeCountData faceNodeCounts, SyscElementNodeConnectivityData faceNodeConnectivity, SyscFaceCellConnectivityData faceCellConnectivity)
```

Create face data given face ids, types, node-to-face connectivity, face-to-cell connectivity.





**Parameters**:

* [SyscElementIdData](structSyscElementIdData.md#structSyscElementIdData) **faceIds**
* [SyscElementNodeCountData](structSyscElementNodeCountData.md#structSyscElementNodeCountData) **faceNodeCounts**
* [SyscElementNodeConnectivityData](structSyscElementNodeConnectivityData.md#structSyscElementNodeConnectivityData) **faceNodeConnectivity**
* [SyscFaceCellConnectivityData](structSyscFaceCellConnectivityData.md#structSyscFaceCellConnectivityData) **faceCellConnectivity**

**Return type**: [SyscFaceData](structSyscFaceData.md#structSyscFaceData)

<a id="group__SyscParticipantLibraryCAPI_1ga7fecaea46eac9057909b0d0901cfbea8"></a>
### Function syscGetFaceDataITN

![][public]

```
SyscFaceData syscGetFaceDataITN(SyscElementIdData faceIds, SyscElementTypeData faceTypes, SyscElementNodeConnectivityData faceNodeConnectivity)
```

Create face data given face ids, types, node-to-face connectivity, face-to-cell connectivity.





**Parameters**:

* [SyscElementIdData](structSyscElementIdData.md#structSyscElementIdData) **faceIds**
* [SyscElementTypeData](structSyscElementTypeData.md#structSyscElementTypeData) **faceTypes**
* [SyscElementNodeConnectivityData](structSyscElementNodeConnectivityData.md#structSyscElementNodeConnectivityData) **faceNodeConnectivity**

**Return type**: [SyscFaceData](structSyscFaceData.md#structSyscFaceData)

<a id="group__SyscParticipantLibraryCAPI_1gae75c9db974a962c76ce593cc24ddd85c"></a>
### Function syscGetFaceDataCN

![][public]

```
SyscFaceData syscGetFaceDataCN(SyscElementNodeCountData faceNodeCounts, SyscElementNodeConnectivityData faceNodeConnectivity)
```

Create face data given face node counts, node-to-face connectivity.





**Parameters**:

* [SyscElementNodeCountData](structSyscElementNodeCountData.md#structSyscElementNodeCountData) **faceNodeCounts**
* [SyscElementNodeConnectivityData](structSyscElementNodeConnectivityData.md#structSyscElementNodeConnectivityData) **faceNodeConnectivity**

**Return type**: [SyscFaceData](structSyscFaceData.md#structSyscFaceData)

<a id="group__SyscParticipantLibraryCAPI_1gaea5a7a8c0e8b5424fbaa50edb7bc32ce"></a>
### Function syscGetCellDataEmpty

![][public]

```
SyscCellData syscGetCellDataEmpty()
```

Create empty cell data.





**Return type**: [SyscCellData](structSyscCellData.md#structSyscCellData)

<a id="group__SyscParticipantLibraryCAPI_1gabc9c52c2b18a3bbb00d87891b4039315"></a>
### Function syscGetCellDataITN

![][public]

```
SyscCellData syscGetCellDataITN(SyscElementIdData cellIds, SyscElementTypeData cellTypes, SyscElementNodeConnectivityData cellNodeConnectivity)
```

Create cell data given cell ids, types, cell-to-node connectivity.





**Parameters**:

* [SyscElementIdData](structSyscElementIdData.md#structSyscElementIdData) **cellIds**
* [SyscElementTypeData](structSyscElementTypeData.md#structSyscElementTypeData) **cellTypes**
* [SyscElementNodeConnectivityData](structSyscElementNodeConnectivityData.md#structSyscElementNodeConnectivityData) **cellNodeConnectivity**

**Return type**: [SyscCellData](structSyscCellData.md#structSyscCellData)

<a id="group__SyscParticipantLibraryCAPI_1gadb4f24988bf2684dd5bb9d6032a37fca"></a>
### Function syscGetCellDataI

![][public]

```
SyscCellData syscGetCellDataI(SyscElementIdData cellIds)
```

Create cell data given cell ids.





**Parameters**:

* [SyscElementIdData](structSyscElementIdData.md#structSyscElementIdData) **cellIds**

**Return type**: [SyscCellData](structSyscCellData.md#structSyscCellData)

<a id="group__SyscParticipantLibraryCAPI_1ga900dee185f65895511a89b29af40c6f8"></a>
### Function syscGetCellDataTN

![][public]

```
SyscCellData syscGetCellDataTN(SyscElementTypeData cellTypes, SyscElementNodeConnectivityData cellNodeConnectivity)
```

Create cell data given cell types, cell-to-node connectivity.





**Parameters**:

* [SyscElementTypeData](structSyscElementTypeData.md#structSyscElementTypeData) **cellTypes**
* [SyscElementNodeConnectivityData](structSyscElementNodeConnectivityData.md#structSyscElementNodeConnectivityData) **cellNodeConnectivity**

**Return type**: [SyscCellData](structSyscCellData.md#structSyscCellData)

<a id="group__SyscParticipantLibraryCAPI_1ga1ed999efcf217211831e6e440c9b6789"></a>
### Function syscGetOutputComplexScalarData

![][public]

```
SyscOutputComplexScalarData syscGetOutputComplexScalarData()
```

Create an empty output complex scalar data access struct.

Primitive type will default to double-precision. Data size will be set to zero. Data pointers will be set to null.



**Return type**: [SyscOutputComplexScalarData](structSyscOutputComplexScalarData.md#structSyscOutputComplexScalarData)

<a id="group__SyscParticipantLibraryCAPI_1ga55ed1d17c6d2f849b9588531d7c516d9"></a>
### Function syscGetOutputComplexScalarDataSplitDouble

![][public]

```
SyscOutputComplexScalarData syscGetOutputComplexScalarDataSplitDouble(const double *const dataReal, const double *const dataImag, size_t dataSize)
```

Create a complex output scalar data access struct.

**Parameters**:

* **dataReal**: - pointer to the double-precision real data component.
* **dataImag**: - pointer to the double-precision imaginary data component.
* **dataSize**: - data size.



**Parameters**:

* const double *const **dataReal**
* const double *const **dataImag**
* size_t **dataSize**

**Return type**: [SyscOutputComplexScalarData](structSyscOutputComplexScalarData.md#structSyscOutputComplexScalarData)

<a id="group__SyscParticipantLibraryCAPI_1ga0e86f0bfb33258007eb2b2ecd6b44dec"></a>
### Function syscGetOutputComplexScalarDataSplitFloat

![][public]

```
SyscOutputComplexScalarData syscGetOutputComplexScalarDataSplitFloat(const float *const dataReal, const float *const dataImag, size_t dataSize)
```

Create a complex output scalar data access struct.

**Parameters**:

* **dataReal**: - pointer to the single-precision real data component.
* **dataImag**: - pointer to the single-precision imaginary data component.
* **dataSize**: - data size.



**Parameters**:

* const float *const **dataReal**
* const float *const **dataImag**
* size_t **dataSize**

**Return type**: [SyscOutputComplexScalarData](structSyscOutputComplexScalarData.md#structSyscOutputComplexScalarData)

<a id="group__SyscParticipantLibraryCAPI_1ga08d88f4495f347260e4678ab6bedbf75"></a>
### Function syscGetOutputComplexScalarDataCompactDouble

![][public]

```
SyscOutputComplexScalarData syscGetOutputComplexScalarDataCompactDouble(const double *const data, size_t dataSize)
```

Create a complex output scalar data access struct.

**Parameters**:

* **data**: - pointer to the double-precision data.
* **dataSize**: - data size.



**Parameters**:

* const double *const **data**
* size_t **dataSize**

**Return type**: [SyscOutputComplexScalarData](structSyscOutputComplexScalarData.md#structSyscOutputComplexScalarData)

<a id="group__SyscParticipantLibraryCAPI_1ga3d806d095d2d333f2a78abb38f7cddf6"></a>
### Function syscGetOutputComplexScalarDataCompactFloat

![][public]

```
SyscOutputComplexScalarData syscGetOutputComplexScalarDataCompactFloat(const float *const data, size_t dataSize)
```

Create a complex output scalar data access struct.

**Parameters**:

* **data**: - pointer to the single-precision data.
* **dataSize**: - data size.



**Parameters**:

* const float *const **data**
* size_t **dataSize**

**Return type**: [SyscOutputComplexScalarData](structSyscOutputComplexScalarData.md#structSyscOutputComplexScalarData)

<a id="group__SyscParticipantLibraryCAPI_1gafd1174430666266b1337c8e1d3569aa6"></a>
### Function syscGetOutputComplexVectorData

![][public]

```
SyscOutputComplexVectorData syscGetOutputComplexVectorData()
```

Create an empty output complex vector data access struct.

Primitive type will default to double-precision. Data size will be set to zero. Data pointers will be set to null.



**Return type**: [SyscOutputComplexVectorData](structSyscOutputComplexVectorData.md#structSyscOutputComplexVectorData)

<a id="group__SyscParticipantLibraryCAPI_1gab9832696d96ffd32917b2211497c31e1"></a>
### Function syscGetOutputCompactComplexCompactVectorDataDouble

![][public]

```
SyscOutputComplexVectorData syscGetOutputCompactComplexCompactVectorDataDouble(const double *const data, size_t dataSize)
```

Create a 3D complex output vector data access struct.

**Parameters**:

* **data**: - pointer to the double-precision complex data.
* **dataSize**: - data size.



**Parameters**:

* const double *const **data**
* size_t **dataSize**

**Return type**: [SyscOutputComplexVectorData](structSyscOutputComplexVectorData.md#structSyscOutputComplexVectorData)

<a id="group__SyscParticipantLibraryCAPI_1ga1bddd7590dc1c4e4b488981694a723fc"></a>
### Function syscGetOutputCompactComplexCompactVectorDataFloat

![][public]

```
SyscOutputComplexVectorData syscGetOutputCompactComplexCompactVectorDataFloat(const float *const data, size_t dataSize)
```

Create a 3D complex output vector data access struct.

**Parameters**:

* **data**: - pointer to the single-precision complex data.
* **dataSize**: - data size.



**Parameters**:

* const float *const **data**
* size_t **dataSize**

**Return type**: [SyscOutputComplexVectorData](structSyscOutputComplexVectorData.md#structSyscOutputComplexVectorData)

<a id="group__SyscParticipantLibraryCAPI_1ga619a769c0b474a093ca8df07fa23c745"></a>
### Function syscGetOutputSplitComplexCompactVectorDataDouble

![][public]

```
SyscOutputComplexVectorData syscGetOutputSplitComplexCompactVectorDataDouble(const double *const dataReal, const double *const dataImag, size_t dataSize)
```

Create a 3D complex output vector data access struct.

**Parameters**:

* **dataReal**: - pointer to the double-precision complex data (real components).
* **dataImag**: - pointer to the double-precision complex data (imaginary components).
* **dataSize**: - data size.



**Parameters**:

* const double *const **dataReal**
* const double *const **dataImag**
* size_t **dataSize**

**Return type**: [SyscOutputComplexVectorData](structSyscOutputComplexVectorData.md#structSyscOutputComplexVectorData)

<a id="group__SyscParticipantLibraryCAPI_1ga9c6fb47e5c54e7f1ee9bfdd2a6b78f96"></a>
### Function syscGetOutputSplitComplexCompactVectorDataFloat

![][public]

```
SyscOutputComplexVectorData syscGetOutputSplitComplexCompactVectorDataFloat(const float *const dataReal, const float *const dataImag, size_t dataSize)
```

Create a 3D complex output vector data access struct.

**Parameters**:

* **dataReal**: - pointer to the single-precision complex data (real components).
* **dataImag**: - pointer to the single-precision complex data (imaginary components).
* **dataSize**: - data size.



**Parameters**:

* const float *const **dataReal**
* const float *const **dataImag**
* size_t **dataSize**

**Return type**: [SyscOutputComplexVectorData](structSyscOutputComplexVectorData.md#structSyscOutputComplexVectorData)

<a id="group__SyscParticipantLibraryCAPI_1ga36581954b1bed9e21ddd6d6951478a45"></a>
### Function syscGetOutputCompactComplexSplitVectorDataDouble

![][public]

```
SyscOutputComplexVectorData syscGetOutputCompactComplexSplitVectorDataDouble(const double *const data1, const double *const data2, const double *const data3, size_t dataSize)
```

Create a 3D complex output vector data access struct.

**Parameters**:

* **data1**: - pointer to the double-precision complex data (first component).
* **data2**: - pointer to the double-precision complex data (second component).
* **data3**: - pointer to the double-precision complex data (third component).
* **dataSize**: - data size.



**Parameters**:

* const double *const **data1**
* const double *const **data2**
* const double *const **data3**
* size_t **dataSize**

**Return type**: [SyscOutputComplexVectorData](structSyscOutputComplexVectorData.md#structSyscOutputComplexVectorData)

<a id="group__SyscParticipantLibraryCAPI_1ga6fab1156fcb4f29d454bd3574b7472a7"></a>
### Function syscGetOutputCompactComplexSplitVectorDataFloat

![][public]

```
SyscOutputComplexVectorData syscGetOutputCompactComplexSplitVectorDataFloat(const float *const data1, const float *const data2, const float *const data3, size_t dataSize)
```

Create a 3D complex output vector data access struct.

**Parameters**:

* **data1**: - pointer to the single-precision complex data (first component).
* **data2**: - pointer to the single-precision complex data (second component).
* **data3**: - pointer to the single-precision complex data (third component).
* **dataSize**: - data size.



**Parameters**:

* const float *const **data1**
* const float *const **data2**
* const float *const **data3**
* size_t **dataSize**

**Return type**: [SyscOutputComplexVectorData](structSyscOutputComplexVectorData.md#structSyscOutputComplexVectorData)

<a id="group__SyscParticipantLibraryCAPI_1gaceabb4ea93346ecbbdda387e7f067465"></a>
### Function syscGetOutputSplitComplexSplitVectorDataDouble

![][public]

```
SyscOutputComplexVectorData syscGetOutputSplitComplexSplitVectorDataDouble(const double *const data1Real, const double *const data1Imag, const double *const data2Real, const double *const data2Imag, const double *const data3Real, const double *const data3Imag, size_t dataSize)
```

Create a 3D complex output vector data access struct.

**Parameters**:

* **data1Real**: - pointer to the double-precision complex data (first real component).
* **data1Imag**: - pointer to the double-precision complex data (first imagindary component).
* **data2Real**: - pointer to the double-precision complex data (second real component).
* **data2Imag**: - pointer to the double-precision complex data (second imagindary component).
* **data3Real**: - pointer to the double-precision complex data (third real component).
* **data3Imag**: - pointer to the double-precision complex data (third imagindary component).
* **dataSize**: - data size.



**Parameters**:

* const double *const **data1Real**
* const double *const **data1Imag**
* const double *const **data2Real**
* const double *const **data2Imag**
* const double *const **data3Real**
* const double *const **data3Imag**
* size_t **dataSize**

**Return type**: [SyscOutputComplexVectorData](structSyscOutputComplexVectorData.md#structSyscOutputComplexVectorData)

<a id="group__SyscParticipantLibraryCAPI_1ga3d957a5fa32db290017e2f23d15311f2"></a>
### Function syscGetOutputSplitComplexSplitVectorDataFloat

![][public]

```
SyscOutputComplexVectorData syscGetOutputSplitComplexSplitVectorDataFloat(const float *const data1Real, const float *const data1Imag, const float *const data2Real, const float *const data2Imag, const float *const data3Real, const float *const data3Imag, size_t dataSize)
```

Create a 3D complex output vector data access struct.

**Parameters**:

* **data1Real**: - pointer to the single-precision complex data (first real component).
* **data1Imag**: - pointer to the single-precision complex data (first imagindary component).
* **data2Real**: - pointer to the single-precision complex data (second real component).
* **data2Imag**: - pointer to the single-precision complex data (second imagindary component).
* **data3Real**: - pointer to the single-precision complex data (third real component).
* **data3Imag**: - pointer to the single-precision complex data (third imagindary component).
* **dataSize**: - data size.



**Parameters**:

* const float *const **data1Real**
* const float *const **data1Imag**
* const float *const **data2Real**
* const float *const **data2Imag**
* const float *const **data3Real**
* const float *const **data3Imag**
* size_t **dataSize**

**Return type**: [SyscOutputComplexVectorData](structSyscOutputComplexVectorData.md#structSyscOutputComplexVectorData)

<a id="group__SyscParticipantLibraryCAPI_1gac98c66232a8c5c204c4bad9f0dd5585c"></a>
### Function syscGetOutputCompactComplexCompactVectorDataDoubleDim

![][public]

```
SyscOutputComplexVectorData syscGetOutputCompactComplexCompactVectorDataDoubleDim(const double *const data, size_t dataSize, enum SyscDimension dimension)
```

Create a complex output vector data access struct based on dimension.

**Parameters**:

* **data**: - pointer to the double-precision complex data.
* **dataSize**: - data size.
* **dimension**: - dimension of complex vector data.



**Parameters**:

* const double *const **data**
* size_t **dataSize**
* enum [SyscDimension](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gac5a5f66ee72fd8015eab632a642cf26d) **dimension**

**Return type**: [SyscOutputComplexVectorData](structSyscOutputComplexVectorData.md#structSyscOutputComplexVectorData)

<a id="group__SyscParticipantLibraryCAPI_1gab1ea60c9d226cf14e580d6d3c945f3ab"></a>
### Function syscGetOutputCompactComplexCompactVectorDataFloatDim

![][public]

```
SyscOutputComplexVectorData syscGetOutputCompactComplexCompactVectorDataFloatDim(const float *const data, size_t dataSize, enum SyscDimension dimension)
```

Create a complex output vector data access struct based on dimension.

**Parameters**:

* **data**: - pointer to the single-precision complex data.
* **dataSize**: - data size.
* **dimension**: - dimension of complex vector data.



**Parameters**:

* const float *const **data**
* size_t **dataSize**
* enum [SyscDimension](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gac5a5f66ee72fd8015eab632a642cf26d) **dimension**

**Return type**: [SyscOutputComplexVectorData](structSyscOutputComplexVectorData.md#structSyscOutputComplexVectorData)

<a id="group__SyscParticipantLibraryCAPI_1gac46cbb29463ecf81dfbba42a81e5b5c9"></a>
### Function syscGetOutputIntegerData

![][public]

```
SyscOutputIntegerData syscGetOutputIntegerData()
```

Create an output integer data access struct.

Primitive type will default to 64-bit signed integer. Data size will be set to zero. Data pointer will be set to null.



**Return type**: [SyscOutputIntegerData](structSyscOutputIntegerData.md#structSyscOutputIntegerData)

<a id="group__SyscParticipantLibraryCAPI_1gaea5bb5bd0b4ddd4217745dad38b405b2"></a>
### Function syscGetOutputIntegerDataInt32

![][public]

```
SyscOutputIntegerData syscGetOutputIntegerDataInt32(const int32_t *const data, size_t dataSize)
```

Create an output integer data access struct.

**Parameters**:

* **data**: - pointer to the signed (32-bit) array of data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* const int32_t *const **data**
* size_t **dataSize**

**Return type**: [SyscOutputIntegerData](structSyscOutputIntegerData.md#structSyscOutputIntegerData)

<a id="group__SyscParticipantLibraryCAPI_1ga43be8cb6b2e2b156d7c40fa3cbf28f03"></a>
### Function syscGetOutputIntegerDataInt64

![][public]

```
SyscOutputIntegerData syscGetOutputIntegerDataInt64(const int64_t *const data, size_t dataSize)
```

Create an output integer data access struct.

**Parameters**:

* **data**: - pointer to the 64-bit array of integer data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* const int64_t *const **data**
* size_t **dataSize**

**Return type**: [SyscOutputIntegerData](structSyscOutputIntegerData.md#structSyscOutputIntegerData)

<a id="group__SyscParticipantLibraryCAPI_1ga46a87bfd729531e482d320f695537c0b"></a>
### Function syscGetOutputIntegerDataUInt16

![][public]

```
SyscOutputIntegerData syscGetOutputIntegerDataUInt16(const uint16_t *const data, size_t dataSize)
```

Create an output integer data access struct.

**Parameters**:

* **data**: - pointer to the 16-bit array of unsigned integer data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* const uint16_t *const **data**
* size_t **dataSize**

**Return type**: [SyscOutputIntegerData](structSyscOutputIntegerData.md#structSyscOutputIntegerData)

<a id="group__SyscParticipantLibraryCAPI_1gaed7a48d94e2545e78562b8ff911dfd2a"></a>
### Function syscGetOutputIntegerDataUInt64

![][public]

```
SyscOutputIntegerData syscGetOutputIntegerDataUInt64(const uint64_t *const data, size_t dataSize)
```

Create an output integer data access struct.

**Parameters**:

* **data**: - pointer to the 64-bit array of unsigned integer data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* const uint64_t *const **data**
* size_t **dataSize**

**Return type**: [SyscOutputIntegerData](structSyscOutputIntegerData.md#structSyscOutputIntegerData)

<a id="group__SyscParticipantLibraryCAPI_1ga0097e203d597949f887e2f804c01fd21"></a>
### Function syscGetOutputScalarData

![][public]

```
SyscOutputScalarData syscGetOutputScalarData()
```

Create an output scalar data access struct.

Primitive type will default to double-precision. Data size will be set to zero. Data pointer will be set to null.



**Return type**: [SyscOutputScalarData](structSyscOutputScalarData.md#structSyscOutputScalarData)

<a id="group__SyscParticipantLibraryCAPI_1ga8a2803af36638c2ce3387bf89b83cda0"></a>
### Function syscGetOutputScalarDataDouble

![][public]

```
SyscOutputScalarData syscGetOutputScalarDataDouble(const double *const data, size_t dataSize)
```

Create an output scalar data access struct.

**Parameters**:

* **data**: - pointer to the double-precision (64-bit) array of data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* const double *const **data**
* size_t **dataSize**

**Return type**: [SyscOutputScalarData](structSyscOutputScalarData.md#structSyscOutputScalarData)

<a id="group__SyscParticipantLibraryCAPI_1ga0b0ae9e5ede552958b8bce1efd9b4978"></a>
### Function syscGetOutputScalarDataFloat

![][public]

```
SyscOutputScalarData syscGetOutputScalarDataFloat(const float *const data, size_t dataSize)
```

Create an output scalar data access struct.

**Parameters**:

* **data**: - pointer to the single-precision (32-bit) array of data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* const float *const **data**
* size_t **dataSize**

**Return type**: [SyscOutputScalarData](structSyscOutputScalarData.md#structSyscOutputScalarData)

<a id="group__SyscParticipantLibraryCAPI_1ga2334c8e25481b098d4263a2f60a7dac2"></a>
### Function syscGetOutputScalarDataInt32

![][public]

```
SyscOutputScalarData syscGetOutputScalarDataInt32(const int32_t *const data, size_t dataSize)
```

Create an output scalar data access struct.

**Parameters**:

* **data**: - pointer to the 32-bit array of integer data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* const int32_t *const **data**
* size_t **dataSize**

**Return type**: [SyscOutputScalarData](structSyscOutputScalarData.md#structSyscOutputScalarData)

<a id="group__SyscParticipantLibraryCAPI_1ga7a305d185afe565e1d3e8de66d7beca3"></a>
### Function syscGetOutputScalarDataInt64

![][public]

```
SyscOutputScalarData syscGetOutputScalarDataInt64(const int64_t *const data, size_t dataSize)
```

Create an output scalar data access struct.

**Parameters**:

* **data**: - pointer to the 64-bit array of integer data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* const int64_t *const **data**
* size_t **dataSize**

**Return type**: [SyscOutputScalarData](structSyscOutputScalarData.md#structSyscOutputScalarData)

<a id="group__SyscParticipantLibraryCAPI_1gabfcf7be83419cc31611e2ad100fdecb6"></a>
### Function syscGetOutputScalarDataUInt16

![][public]

```
SyscOutputScalarData syscGetOutputScalarDataUInt16(const uint16_t *const data, size_t dataSize)
```

Create an output scalar data access struct.

**Parameters**:

* **data**: - pointer to the 16-bit array of unsigned integer data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* const uint16_t *const **data**
* size_t **dataSize**

**Return type**: [SyscOutputScalarData](structSyscOutputScalarData.md#structSyscOutputScalarData)

<a id="group__SyscParticipantLibraryCAPI_1ga6645e1e9d1b163cea069ce42077f419f"></a>
### Function syscGetOutputScalarDataUInt64

![][public]

```
SyscOutputScalarData syscGetOutputScalarDataUInt64(const uint64_t *const data, size_t dataSize)
```

Create an output scalar data access struct.

**Parameters**:

* **data**: - pointer to the 64-bit array of unsigned integer data.
* **dataSize**: - number of elements in the array.



**Parameters**:

* const uint64_t *const **data**
* size_t **dataSize**

**Return type**: [SyscOutputScalarData](structSyscOutputScalarData.md#structSyscOutputScalarData)

<a id="group__SyscParticipantLibraryCAPI_1ga950a6f2a746b4667aa10216ad3adfba6"></a>
### Function syscGetOutputVectorData

![][public]

```
SyscOutputVectorData syscGetOutputVectorData()
```

Create an output vector data access struct.

Primitive type will default to double-precision. Data size will be set to zero. Data pointers will be set to null.



**Return type**: [SyscOutputVectorData](structSyscOutputVectorData.md#structSyscOutputVectorData)

<a id="group__SyscParticipantLibraryCAPI_1gacb630e9f5b846eb243f4cb6e67907885"></a>
### Function syscGetOutputVectorDataCompactDouble

![][public]

```
SyscOutputVectorData syscGetOutputVectorDataCompactDouble(const double *const data, size_t dataSize)
```

Create an 3D output vector data access struct with compact storage.

**Parameters**:

* **data**: - pointer to the array of double-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* const double *const **data**
* size_t **dataSize**

**Return type**: [SyscOutputVectorData](structSyscOutputVectorData.md#structSyscOutputVectorData)

<a id="group__SyscParticipantLibraryCAPI_1ga1bec0ed33e0603a25d69f98efd68177a"></a>
### Function syscGetOutputVectorDataCompactFloat

![][public]

```
SyscOutputVectorData syscGetOutputVectorDataCompactFloat(const float *const data, size_t dataSize)
```

Create an 3D output vector data access struct with compact storage.

**Parameters**:

* **data**: - pointer to the array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* const float *const **data**
* size_t **dataSize**

**Return type**: [SyscOutputVectorData](structSyscOutputVectorData.md#structSyscOutputVectorData)

<a id="group__SyscParticipantLibraryCAPI_1gaaa51c47ef1d83c217ac1d10080de120c"></a>
### Function syscGetOutputVectorDataSplitDouble

![][public]

```
SyscOutputVectorData syscGetOutputVectorDataSplitDouble(const double *const data0, const double *const data1, const double *const data2, size_t dataSize)
```

Create an 3D output vector data access struct with split storage.

**Parameters**:

* **data0**: - pointer to the first array of double-precision data
* **data1**: - pointer to the second array of double-precision data
* **data2**: - pointer to the third array of double-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* const double *const **data0**
* const double *const **data1**
* const double *const **data2**
* size_t **dataSize**

**Return type**: [SyscOutputVectorData](structSyscOutputVectorData.md#structSyscOutputVectorData)

<a id="group__SyscParticipantLibraryCAPI_1gac91454fccf5ff91fdb82fa976bf5bc3c"></a>
### Function syscGetOutputVectorDataSplitFloat

![][public]

```
SyscOutputVectorData syscGetOutputVectorDataSplitFloat(const float *const data0, const float *const data1, const float *const data2, size_t dataSize)
```

Create an 3D output vector data access struct with split storage.

**Parameters**:

* **data0**: - pointer to the first array of single-precision data
* **data1**: - pointer to the second array of single-precision data
* **data2**: - pointer to the third array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* const float *const **data0**
* const float *const **data1**
* const float *const **data2**
* size_t **dataSize**

**Return type**: [SyscOutputVectorData](structSyscOutputVectorData.md#structSyscOutputVectorData)

<a id="group__SyscParticipantLibraryCAPI_1ga3ff75e8ebe2bf6e850544f378cb240c6"></a>
### Function syscGetOutputVectorDataCompactDoubleDim

![][public]

```
SyscOutputVectorData syscGetOutputVectorDataCompactDoubleDim(const double *const data, size_t dataSize, enum SyscDimension dimension)
```

Create an output vector data access struct with compact storage based on dimension.

**Parameters**:

* **data**: - pointer to the array of double-precision data
* **dataSize**: - number of vectors.
* **dimension**: - dimension of complex vector data.



**Parameters**:

* const double *const **data**
* size_t **dataSize**
* enum [SyscDimension](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gac5a5f66ee72fd8015eab632a642cf26d) **dimension**

**Return type**: [SyscOutputVectorData](structSyscOutputVectorData.md#structSyscOutputVectorData)

<a id="group__SyscParticipantLibraryCAPI_1gaa09a2e4358b2a5459db179c5da641be8"></a>
### Function syscGetOutputVectorDataCompactFloatDim

![][public]

```
SyscOutputVectorData syscGetOutputVectorDataCompactFloatDim(const float *const data, size_t dataSize, enum SyscDimension dimension)
```

Create an output vector data access struct with compact storage based on dimension.

**Parameters**:

* **data**: - pointer to the array of single-precision data
* **dataSize**: - number of vectors.
* **dimension**: - dimension of complex vector data.



**Parameters**:

* const float *const **data**
* size_t **dataSize**
* enum [SyscDimension](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gac5a5f66ee72fd8015eab632a642cf26d) **dimension**

**Return type**: [SyscOutputVectorData](structSyscOutputVectorData.md#structSyscOutputVectorData)

<a id="group__SyscParticipantLibraryCAPI_1gac737552145182f1de70e347531477a88"></a>
### Function syscGetOutput2DVectorDataSplitDouble

![][public]

```
SyscOutputVectorData syscGetOutput2DVectorDataSplitDouble(const double *const data0, const double *const data1, size_t dataSize)
```

Create a 2D output vector data access struct with split storage.

**Parameters**:

* **data0**: - pointer to the first array of double-precision data
* **data1**: - pointer to the second array of double-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* const double *const **data0**
* const double *const **data1**
* size_t **dataSize**

**Return type**: [SyscOutputVectorData](structSyscOutputVectorData.md#structSyscOutputVectorData)

<a id="group__SyscParticipantLibraryCAPI_1ga22d069eb2d95a8060a0dfdaf9a5d43aa"></a>
### Function syscGetOutput2DVectorDataSplitFloat

![][public]

```
SyscOutputVectorData syscGetOutput2DVectorDataSplitFloat(const float *const data0, const float *const data1, size_t dataSize)
```

Create an output vector data access struct with split storage.

**Parameters**:

* **data0**: - pointer to the first array of single-precision data
* **data1**: - pointer to the second array of single-precision data
* **dataSize**: - number of vectors.



**Parameters**:

* const float *const **data0**
* const float *const **data1**
* size_t **dataSize**

**Return type**: [SyscOutputVectorData](structSyscOutputVectorData.md#structSyscOutputVectorData)

<a id="group__SyscParticipantLibraryCAPI_1gaf44d7cf2e3d05e5cf0990b6fe946c50d"></a>
### Function syscGetParameter

![][public]

```
SyscParameter syscGetParameter(const char *name)
```

Create parameter to be used in a coupled analysis.

**Parameters**:

* **name**: - Unique name for this parameter. String length should not exceed SYSC_STRING_LENGTH.

Display name will default to the same as name.



**Parameters**:

* const char * **name**

**Return type**: [SyscParameter](structSyscParameter.md#structSyscParameter)

<a id="group__SyscParticipantLibraryCAPI_1gafa0e858b9dc47ded43bd3fbf97c25206"></a>
### Function syscGetParameterD

![][public]

```
SyscParameter syscGetParameterD(const char *name, const char *displayName)
```

Create parameter to be used in a coupled analysis.

**Parameters**:

* **name**: - Unique name for this parameter. String length should not exceed SYSC_STRING_LENGTH.
* **displayName**: - parameter display name. String length should not exceed SYSC_STRING_LENGTH.



**Parameters**:

* const char * **name**
* const char * **displayName**

**Return type**: [SyscParameter](structSyscParameter.md#structSyscParameter)

<a id="group__SyscParticipantLibraryCAPI_1ga256e2f74a04a52d19232bd163921131c"></a>
### Function syscGetPointCloudEmpty

![][public]

```
SyscPointCloud syscGetPointCloudEmpty()
```

Create a point cloud access struct.

Returns a struct representing empty point cloud. All member will be assigned default values.



**Return type**: [SyscPointCloud](structSyscPointCloud.md#structSyscPointCloud)

<a id="group__SyscParticipantLibraryCAPI_1ga0a8b0fe8c0c57374a3ef69d1f678fdab"></a>
### Function syscGetPointCloud

![][public]

```
SyscPointCloud syscGetPointCloud(SyscOutputIntegerData nodeIds, SyscOutputVectorData nodeCoords)
```

Create a point cloud access struct.

**Parameters**:

* **nodeIds**: - output integer data access for node ids
* **nodeCoords**: - output vector data access for node coordinates, provided in the same order as node ids



**Parameters**:

* [SyscOutputIntegerData](structSyscOutputIntegerData.md#structSyscOutputIntegerData) **nodeIds**
* [SyscOutputVectorData](structSyscOutputVectorData.md#structSyscOutputVectorData) **nodeCoords**

**Return type**: [SyscPointCloud](structSyscPointCloud.md#structSyscPointCloud)

<a id="group__SyscParticipantLibraryCAPI_1gaf8dee311cddc012ce6b54998fde8e29f"></a>
### Function syscGetRegion

![][public]

```
SyscRegion syscGetRegion(const char *name)
```

Create region to be used in a coupled analysis.

**Parameters**:

* **name**: - Unique name for this region. String length should not exceed SYSC_STRING_LENGTH.

Display name will default to the same as name.





Topology will default to surface.





Region mesh type will default to mesh.



**Parameters**:

* const char * **name**

**Return type**: [SyscRegion](structSyscRegion.md#structSyscRegion)

<a id="group__SyscParticipantLibraryCAPI_1ga26c8d2435b5cd3c525d5221298ad3aaa"></a>
### Function syscGetRegionT

![][public]

```
SyscRegion syscGetRegionT(const char *name, enum SyscTopology topology)
```

Create region to be used in a coupled analysis.

**Parameters**:

* **name**: - Unique name for this region. String length should not exceed SYSC_STRING_LENGTH.
* **topology**: - region topology.

Display name will default to the same as name.





Region mesh type will default to mesh.



**Parameters**:

* const char * **name**
* enum [SyscTopology](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gabf36499a0f333dc9b856c4bcbb25385a) **topology**

**Return type**: [SyscRegion](structSyscRegion.md#structSyscRegion)

<a id="group__SyscParticipantLibraryCAPI_1ga88d428a1852eeec9b7b7156e33b57822"></a>
### Function syscGetRegionDT

![][public]

```
SyscRegion syscGetRegionDT(const char *name, const char *displayName, enum SyscTopology topology)
```

Create region to be used in a coupled analysis.

**Parameters**:

* **name**: - Unique name for this region. String length should not exceed SYSC_STRING_LENGTH.
* **displayName**: - region display name. String length should not exceed SYSC_STRING_LENGTH.
* **topology**: - region topology.

Region mesh type will default to mesh.



**Parameters**:

* const char * **name**
* const char * **displayName**
* enum [SyscTopology](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gabf36499a0f333dc9b856c4bcbb25385a) **topology**

**Return type**: [SyscRegion](structSyscRegion.md#structSyscRegion)

<a id="group__SyscParticipantLibraryCAPI_1ga9e0af352921275419da93341f7186f46"></a>
### Function syscGetRegionTM

![][public]

```
SyscRegion syscGetRegionTM(const char *name, enum SyscTopology topology, enum SyscRegionDiscretizationType regionDiscretizationType)
```

Create region to be used in a coupled analysis.

**Parameters**:

* **name**: - Unique name for this region. String length should not exceed SYSC_STRING_LENGTH.
* **topology**: - region topology.
* **regionDiscretizationType**: - region mesh type.

Display names will be same as name.



**Parameters**:

* const char * **name**
* enum [SyscTopology](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gabf36499a0f333dc9b856c4bcbb25385a) **topology**
* enum [SyscRegionDiscretizationType](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga83942e23c7ff51ec76e4632612a34d45) **regionDiscretizationType**

**Return type**: [SyscRegion](structSyscRegion.md#structSyscRegion)

<a id="group__SyscParticipantLibraryCAPI_1gaaae89f288494cc67e8f05cab0f5d1b8b"></a>
### Function syscGetRegionDTM

![][public]

```
SyscRegion syscGetRegionDTM(const char *name, const char *displayName, enum SyscTopology topology, enum SyscRegionDiscretizationType regionDiscretizationType)
```

Create region to be used in a coupled analysis.

**Parameters**:

* **name**: - Unique name for this region. String length should not exceed SYSC_STRING_LENGTH.
* **displayName**: - region display name. String length should not exceed SYSC_STRING_LENGTH.
* **topology**: - region topology.
* **regionDiscretizationType**: - region mesh type.



**Parameters**:

* const char * **name**
* const char * **displayName**
* enum [SyscTopology](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gabf36499a0f333dc9b856c4bcbb25385a) **topology**
* enum [SyscRegionDiscretizationType](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga83942e23c7ff51ec76e4632612a34d45) **regionDiscretizationType**

**Return type**: [SyscRegion](structSyscRegion.md#structSyscRegion)

<a id="group__SyscParticipantLibraryCAPI_1ga9ae6fafcce6987fa18ba762a1ee7a7be"></a>
### Function syscAddInputVariable

![][public]

```
SyscError syscAddInputVariable(const SyscRegion region, const SyscVariable variable)
```

Provide a function to add an input variable to the region.

If this variable has already been added to the region as an input variable, then this call will have no effect.





If a different variable with the same name has already been added to the region as an input variable, then an error will be returned.





If a variable with the same name has already been added to the region as an output variable, then an error will be returned.





If the variable name contains invalid characters, then an error will be returned.





If the region discretization type is point cloud, then the location of the variable added to this region is insignificant.






**Parameters**:

* **region**: Region to which the input variable is to be added.
* **variable**: Variable whose values are provided by System Coupling and consumed by the participant.



**Parameters**:

* const [SyscRegion](structSyscRegion.md#structSyscRegion) **region**
* const [SyscVariable](structSyscVariable.md#structSyscVariable) **variable**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga9615f371d829935af745eb63a1ea99bc"></a>
### Function syscAddOutputVariable

![][public]

```
SyscError syscAddOutputVariable(const SyscRegion region, const SyscVariable variable)
```

Provide a function to add an output variable to the region.

If this variable has already been added to the region as an output variable, then this call will have no effect.





If a different variable with the same name has already been added to the region as an output variable, then an error will be returned.





If a variable with the same name has already been added to the region as an input variable, then an error will be returned.





If the variable name contains invalid characters, then an error will be returned.





If the region discretization type is point cloud, then the location of the variable added to this region is insignificant.






**Parameters**:

* **region**: Region to which the output variable is to be added.
* **variable**: Variable whose values are consumed by System Coupling and provided by the participant.



**Parameters**:

* const [SyscRegion](structSyscRegion.md#structSyscRegion) **region**
* const [SyscVariable](structSyscVariable.md#structSyscVariable) **variable**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1gabec39110fe9da4d54a32653e6bf43196"></a>
### Function syscGetNumInputVariables

![][public]

```
size_t syscGetNumInputVariables(const SyscRegion region)
```

Provide a function to return the number of input variables.

**Parameters**:

* **region**: - region


**Returns**:

Number of input variables for the region.



**Parameters**:

* const [SyscRegion](structSyscRegion.md#structSyscRegion) **region**

**Return type**: size_t

<a id="group__SyscParticipantLibraryCAPI_1gaef15224138a4f29e892a63e5e8db2feb"></a>
### Function syscGetInputVariable

![][public]

```
SyscVariable syscGetInputVariable(const SyscRegion region, size_t index)
```

Return an input variable.

**Parameters**:

* **region**: - region
* **index**: - region index


**Returns**:

Variable at specified index.



**Parameters**:

* const [SyscRegion](structSyscRegion.md#structSyscRegion) **region**
* size_t **index**

**Return type**: [SyscVariable](structSyscVariable.md#structSyscVariable)

<a id="group__SyscParticipantLibraryCAPI_1ga99fda03ac99e590196d180ea23214217"></a>
### Function syscGetNumOutputVariables

![][public]

```
size_t syscGetNumOutputVariables(const SyscRegion region)
```

Provide a function to return the number of output variables.

**Parameters**:

* **region**: - region


**Returns**:

Number of output variables for the region.



**Parameters**:

* const [SyscRegion](structSyscRegion.md#structSyscRegion) **region**

**Return type**: size_t

<a id="group__SyscParticipantLibraryCAPI_1ga55a99079e5dc9d025f3816d5e7bdd163"></a>
### Function syscGetOutputVariable

![][public]

```
SyscVariable syscGetOutputVariable(const SyscRegion region, size_t index)
```

Return an output variable.

**Parameters**:

* **region**: - region
* **index**: - region index


**Returns**:

Variable at specified index.



**Parameters**:

* const [SyscRegion](structSyscRegion.md#structSyscRegion) **region**
* size_t **index**

**Return type**: [SyscVariable](structSyscVariable.md#structSyscVariable)

<a id="group__SyscParticipantLibraryCAPI_1ga9f7aaa68f00cc2d98f98c458b5388f3a"></a>
### Function syscGetSurfaceMesh

![][public]

```
SyscSurfaceMesh syscGetSurfaceMesh()
```

Create a surface mesh access struct.

Returns a struct representing empty surface mesh. All member will be assigned default values.



**Return type**: [SyscSurfaceMesh](structSyscSurfaceMesh.md#structSyscSurfaceMesh)

<a id="group__SyscParticipantLibraryCAPI_1gafad33a17c7266f386e1bf42c66a9340f"></a>
### Function syscGetSurfaceMeshNF

![][public]

```
SyscSurfaceMesh syscGetSurfaceMeshNF(SyscNodeData nodes, SyscFaceData faces)
```

Create a surface mesh access struct.

**Parameters**:

* **nodes**: - node data
* **faces**: - face data



**Parameters**:

* [SyscNodeData](structSyscNodeData.md#structSyscNodeData) **nodes**
* [SyscFaceData](structSyscFaceData.md#structSyscFaceData) **faces**

**Return type**: [SyscSurfaceMesh](structSyscSurfaceMesh.md#structSyscSurfaceMesh)

<a id="group__SyscParticipantLibraryCAPI_1gaf61b2f4b29e77812cee161e63ff28e34"></a>
### Function syscGetSurfaceMeshNTCI

![][public]

```
SyscSurfaceMesh syscGetSurfaceMeshNTCI(SyscNodeData nodes, SyscElementTypeData elemTypes, SyscElementNodeCountData elemNodeCounts, SyscElementNodeConnectivityData elemNodeConnectivity)
```

Create a surface mesh access struct.

Both element types and element node counts are provided.






**Parameters**:

* **nodes**: - mesh nodes
* **elemTypes**: - element types
* **elemNodeCounts**: - element node counts
* **elemNodeConnectivity**: - element-to-node connectivity



**Parameters**:

* [SyscNodeData](structSyscNodeData.md#structSyscNodeData) **nodes**
* [SyscElementTypeData](structSyscElementTypeData.md#structSyscElementTypeData) **elemTypes**
* [SyscElementNodeCountData](structSyscElementNodeCountData.md#structSyscElementNodeCountData) **elemNodeCounts**
* [SyscElementNodeConnectivityData](structSyscElementNodeConnectivityData.md#structSyscElementNodeConnectivityData) **elemNodeConnectivity**

**Return type**: [SyscSurfaceMesh](structSyscSurfaceMesh.md#structSyscSurfaceMesh)

<a id="group__SyscParticipantLibraryCAPI_1ga239ac08da048715f5832302851960053"></a>
### Function syscGetSurfaceMeshNCI

![][public]

```
SyscSurfaceMesh syscGetSurfaceMeshNCI(SyscNodeData nodes, SyscElementNodeCountData elemNodeCounts, SyscElementNodeConnectivityData elemNodeConnectivity)
```

Create a surface mesh access struct.

Element node counts are provided, element types are deduced from element node counts.






**Parameters**:

* **nodes**: - mesh nodes
* **elemNodeCounts**: - element node counts
* **elemNodeConnectivity**: - element-to-node connectivity



**Parameters**:

* [SyscNodeData](structSyscNodeData.md#structSyscNodeData) **nodes**
* [SyscElementNodeCountData](structSyscElementNodeCountData.md#structSyscElementNodeCountData) **elemNodeCounts**
* [SyscElementNodeConnectivityData](structSyscElementNodeConnectivityData.md#structSyscElementNodeConnectivityData) **elemNodeConnectivity**

**Return type**: [SyscSurfaceMesh](structSyscSurfaceMesh.md#structSyscSurfaceMesh)

<a id="group__SyscParticipantLibraryCAPI_1ga734facb70a9948732d08eaccf4bb5102"></a>
### Function syscGetSurfaceMeshNCIF

![][public]

```
SyscSurfaceMesh syscGetSurfaceMeshNCIF(SyscNodeData nodes, SyscElementNodeCountData elemNodeCounts, SyscElementNodeConnectivityData elemNodeConnectivity, SyscFaceCellConnectivityData faceCellConnectivty)
```

Create a surface mesh access struct.

Element node counts are provided, element types are deduced from element node counts. Face-to-cell connectivity is provided as well.






**Parameters**:

* **nodes**: - mesh nodes
* **elemNodeCounts**: - element node counts
* **elemNodeConnectivity**: - element-to-node connectivity
* **faceCellConnectivity**: - face-to-cell connectivity



**Parameters**:

* [SyscNodeData](structSyscNodeData.md#structSyscNodeData) **nodes**
* [SyscElementNodeCountData](structSyscElementNodeCountData.md#structSyscElementNodeCountData) **elemNodeCounts**
* [SyscElementNodeConnectivityData](structSyscElementNodeConnectivityData.md#structSyscElementNodeConnectivityData) **elemNodeConnectivity**
* [SyscFaceCellConnectivityData](structSyscFaceCellConnectivityData.md#structSyscFaceCellConnectivityData) **faceCellConnectivty**

**Return type**: [SyscSurfaceMesh](structSyscSurfaceMesh.md#structSyscSurfaceMesh)

<a id="group__SyscParticipantLibraryCAPI_1ga481a20e443f5b245640441f47e455c67"></a>
### Function syscGetSurfaceMeshNTI

![][public]

```
SyscSurfaceMesh syscGetSurfaceMeshNTI(SyscNodeData nodes, SyscElementTypeData elemTypes, SyscElementNodeConnectivityData elemNodeConnectivity)
```

Create a surface mesh access struct.

Element types are provided, element node counts are deduced from element types.






**Parameters**:

* **nodes**: - mesh nodes
* **elemTypes**: - element types
* **elemNodeConnectivity**: - element-to-node connectivity



**Parameters**:

* [SyscNodeData](structSyscNodeData.md#structSyscNodeData) **nodes**
* [SyscElementTypeData](structSyscElementTypeData.md#structSyscElementTypeData) **elemTypes**
* [SyscElementNodeConnectivityData](structSyscElementNodeConnectivityData.md#structSyscElementNodeConnectivityData) **elemNodeConnectivity**

**Return type**: [SyscSurfaceMesh](structSyscSurfaceMesh.md#structSyscSurfaceMesh)

<a id="group__SyscParticipantLibraryCAPI_1ga0241a6779e5c1e1dc0a339893805a9dd"></a>
### Function syscGetSurfaceMeshA

![][public]

```
SyscSurfaceMesh syscGetSurfaceMeshA(SyscOutputScalarData nodeIds, SyscOutputVectorData nodeCoords, SyscOutputScalarData elemNodeCounts, SyscOutputScalarData elemNodeIds)
```

Create a surface mesh access struct.

Note: this function is deprecated. Use syscGetSurfaceMeshNCI instead.






**Parameters**:

* **nodeIds**: - output scalar data access for node ids
* **nodeCoords**: - output vector data access for node coordinates, provided in the same order as node ids
* **elemNodeCounts**: - output scalar data access for element node counts
* **elemNodeIds**: - output scalar data access for element node ids



**Parameters**:

* [SyscOutputScalarData](structSyscOutputScalarData.md#structSyscOutputScalarData) **nodeIds**
* [SyscOutputVectorData](structSyscOutputVectorData.md#structSyscOutputVectorData) **nodeCoords**
* [SyscOutputScalarData](structSyscOutputScalarData.md#structSyscOutputScalarData) **elemNodeCounts**
* [SyscOutputScalarData](structSyscOutputScalarData.md#structSyscOutputScalarData) **elemNodeIds**

**Return type**: [SyscSurfaceMesh](structSyscSurfaceMesh.md#structSyscSurfaceMesh)

<a id="group__SyscParticipantLibraryCAPI_1ga0745adffa475d10edb703906ed5d2772"></a>
### Function syscGetSurfaceMeshB

![][public]

```
SyscSurfaceMesh syscGetSurfaceMeshB(SyscOutputVectorData nodeCoords, SyscOutputScalarData elemNodeCounts, SyscOutputScalarData elemNodeIds)
```

Create a surface mesh access struct.

Note: this function is deprecated. Use syscGetSurfaceMeshNCI instead.






**Parameters**:

* **nodeCoords**: - output vector data access for node coordinates, provided in ascending node ids order
* **elemNodeCounts**: - output scalar data access for element node counts
* **elemNodeIds**: - output scalar data access for element node ids



**Parameters**:

* [SyscOutputVectorData](structSyscOutputVectorData.md#structSyscOutputVectorData) **nodeCoords**
* [SyscOutputScalarData](structSyscOutputScalarData.md#structSyscOutputScalarData) **elemNodeCounts**
* [SyscOutputScalarData](structSyscOutputScalarData.md#structSyscOutputScalarData) **elemNodeIds**

**Return type**: [SyscSurfaceMesh](structSyscSurfaceMesh.md#structSyscSurfaceMesh)

<a id="group__SyscParticipantLibraryCAPI_1ga862e7375111dcee847bc05463c72b329"></a>
### Function syscStartStandaloneParallel

![][public]

```
SyscError syscStartStandaloneParallel(const size_t mpiCommunicator)
```

Provide a function to start standalone mode in parallel.

**Parameters**:

* **mpiCommunicator**: MPI communicator cast to size_t.

This will initialize the participant library in standalone mode and will use the provided MPI communicator for all parallel communication.





Note that if the MPI communicator is MPI_COMM_WORLD, then it is not necessary to call this function.



**Parameters**:

* const size_t **mpiCommunicator**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga1404ad75fb1f5b1515dae967b71b1725"></a>
### Function syscConnect

![][public]

```
SyscError syscConnect(const char *scHost, const unsigned short scPort, const char *participantName, const char *buildInformation)
```

Provide a function to establish connection to System Coupling.

A participant must have obtained the host and port information from System Coupling prior to calling this function (e.g. via an input argument when participant application was started).






**Parameters**:

* **scHost**: Name of the host on which System Coupling is running.
* **scPort**: Port number on which System Coupling is listening for participant connections.
* **participantName**: Name of this participant (e.g. "MAPDL-1").
* **buildInformation**: Information about the build of this participant solver.


**Returns**:

[SyscError](structSyscError.md#structSyscError) Can be checked for any errors.



**Parameters**:

* const char * **scHost**
* const unsigned short **scPort**
* const char * **participantName**
* const char * **buildInformation**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga68a9b5b64715ad6ffde1c7b145bb4d0f"></a>
### Function syscConnectParallel

![][public]

```
SyscError syscConnectParallel(const char *scHost, const unsigned short scPort, const char *participantName, const size_t communicator, const char *buildInformation)
```

Provide a function to establish connection to System Coupling in parallel.

This function is an alternative to syscConnect function. It works the same way as syscConnect, but it takes in one additional argument, which is the MPI communicator, cast as size_t.





Note that if the MPI communicator is MPI_COMM_WORLD, then it is not necessary to call this function and [syscConnect()](syscSystemCoupling_8h.md#group__SyscParticipantLibraryCAPI_1ga1404ad75fb1f5b1515dae967b71b1725) can be used instead.



**Parameters**:

* const char * **scHost**
* const unsigned short **scPort**
* const char * **participantName**
* const size_t **communicator**
* const char * **buildInformation**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga8d84278ef4d48a739948f0a952cb2a00"></a>
### Function syscConnectUseStruct

![][public]

```
SyscError syscConnectUseStruct(SyscParticipantInfo participantInfo)
```

Provide a function to establish connection to System Coupling in serial using a C structure.

**Parameters**:

* **participantInfo**: A C structure containing the participant attributes


**Returns**:

[SyscError](structSyscError.md#structSyscError)



**Parameters**:

* [SyscParticipantInfo](structSyscParticipantInfo.md#structSyscParticipantInfo) **participantInfo**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1gac695e9f06d272958b8fc81bff07708fb"></a>
### Function syscConnectParallelUseStruct

![][public]

```
SyscError syscConnectParallelUseStruct(SyscParticipantInfo participantInfo, const size_t communicator)
```

Provide a function to establish connection to System Coupling in parallel using a C structure.

**Parameters**:

* **participantInfo**: A C structure containing the participant attributes
* **communicator**: A size_t flag signifying what mode to run in parallel with.


**Returns**:

[SyscError](structSyscError.md#structSyscError)



**Parameters**:

* [SyscParticipantInfo](structSyscParticipantInfo.md#structSyscParticipantInfo) **participantInfo**
* const size_t **communicator**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga3c895512d255076ce0b7dcc0b527991b"></a>
### Function syscAddRegion

![][public]

```
SyscError syscAddRegion(const SyscRegion region)
```

Provide a function to add a region that could be used in a coupled analysis.

If this region has already been added, then this call will have no effect.





If a different region with the same has already been added, then an error will be returned.





If the region name contains invalid characters, then a runtime error will be thrown.



**Parameters**:

* const [SyscRegion](structSyscRegion.md#structSyscRegion) **region**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga360d447bbaffa2035ddd9675457027cc"></a>
### Function syscAddInputParameter

![][public]

```
SyscError syscAddInputParameter(const SyscParameter parameter)
```

Provide a method to add an input parameter that could be used in a coupled analysis.

If this parameter has already been added as an input solver parameter, then this call will have no effect.





If a different parameter with the same name has already been added as an input parameter, then a runtime error will be thrown.





If a parameter with the same name has already been added as an output parameter, then a runtime error will be thrown.





If the parameter name contains invalid characters, a runtime error will be thrown.






**Parameters**:

* **parameter**: Parameter whose values are provided by System Coupling and consumed by the participant.



**Parameters**:

* const [SyscParameter](structSyscParameter.md#structSyscParameter) **parameter**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1gaf25cfa8761182ab33ee1a58171ba8aff"></a>
### Function syscAddOutputParameter

![][public]

```
SyscError syscAddOutputParameter(const SyscParameter parameter)
```

Provide a method to add an output parameter that could be used in a coupled analysis.

If this parameter has already been added as an output solver parameter, then this call will have no effect.





If a different parameter with the same name has already been added as an output parameter, then a runtime error will be thrown.





If a parameter with the same name has already been added as an input parameter, then a runtime error will be thrown.





If the parameter name contains invalid characters, a runtime error will be thrown.






**Parameters**:

* **parameter**: Parameter whose values are provided by System Coupling and consumed by the participant.



**Parameters**:

* const [SyscParameter](structSyscParameter.md#structSyscParameter) **parameter**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga0c8432c9735a99af8f502a0d399fcb53"></a>
### Function syscGetNumInputParameters

![][public]

```
size_t syscGetNumInputParameters()
```

Provide a method to get the number of input parameters.

**Returns**:

Number of input parameters.



**Return type**: size_t

<a id="group__SyscParticipantLibraryCAPI_1gaa589afb854fc7ccbc1aadd35148748c4"></a>
### Function syscGetNumOutputParameters

![][public]

```
size_t syscGetNumOutputParameters()
```

Provide a method to get the number of output parameters.

**Returns**:

Number of output parameters.



**Return type**: size_t

<a id="group__SyscParticipantLibraryCAPI_1ga0a1c350da5591ae0ece58abaa8dfd9d2"></a>
### Function syscGetAddedInputParameter

![][public]

```
SyscParameter syscGetAddedInputParameter(size_t index)
```

Provide a function to return input parameter information.

**Parameters**:

* **index**: - input parameter index


**Returns**:

Input parameter information at specified index.



**Parameters**:

* size_t **index**

**Return type**: [SyscParameter](structSyscParameter.md#structSyscParameter)

<a id="group__SyscParticipantLibraryCAPI_1gaa7fff9647ad264d5f2d6231472667e0d"></a>
### Function syscGetAddedOutputParameter

![][public]

```
SyscParameter syscGetAddedOutputParameter(size_t index)
```

Provide a function to return input parameter information.

**Parameters**:

* **index**: - input parameter index


**Returns**:

Output parameter information at specified index.



**Parameters**:

* size_t **index**

**Return type**: [SyscParameter](structSyscParameter.md#structSyscParameter)

<a id="group__SyscParticipantLibraryCAPI_1gac60dbcde01c9373bfd367aaaa956cba5"></a>
### Function syscGetNumRealAttributes

![][public]

```
size_t syscGetNumRealAttributes()
```

Provide a function to get the number of real attributes.

**Returns**:

Number of real attributes.



**Return type**: size_t

<a id="group__SyscParticipantLibraryCAPI_1gaf49b872e961009e614ed67759e1a60d4"></a>
### Function syscGetNumIntegerAttributes

![][public]

```
size_t syscGetNumIntegerAttributes()
```

Provide a function to get the number of integer attributes.

**Returns**:

Number of integer attributes.



**Return type**: size_t

<a id="group__SyscParticipantLibraryCAPI_1gaefc1d756871febf4805c2df08334e7b8"></a>
### Function syscGetAddedRealAttribute

![][public]

```
SyscRealAttribute syscGetAddedRealAttribute(size_t index)
```

Provide a function to return real attribute information.

**Parameters**:

* **index**: - real attribute index.


**Returns**:

Real attribute information at specified index.



**Parameters**:

* size_t **index**

**Return type**: [SyscRealAttribute](structSyscRealAttribute.md#structSyscRealAttribute)

<a id="group__SyscParticipantLibraryCAPI_1ga700bc8178a51d4eeaa596eb6d4737fcb"></a>
### Function syscGetAddedIntegerAttribute

![][public]

```
SyscIntegerAttribute syscGetAddedIntegerAttribute(size_t index)
```

Provide a function to return integer attribute information.

**Parameters**:

* **index**: - integer attribute index.


**Returns**:

Integer attribute information at specified index.



**Parameters**:

* size_t **index**

**Return type**: [SyscIntegerAttribute](structSyscIntegerAttribute.md#structSyscIntegerAttribute)

<a id="group__SyscParticipantLibraryCAPI_1gad0272110e6eaf4c7f16bf96d3556106e"></a>
### Function syscAddRealAttribute

![][public]

```
SyscError syscAddRealAttribute(const SyscRealAttribute attribute)
```

Provide a method to add a real attribute that could be used in a coupled analysis.

If this attribute has already been added as a real attribute, then this call will have no effect.





If a different real attribute with the same name has already been added, then a runtime error will be thrown.





If a an attribute with the same name has already been added as an integer attribute, then a runtime error will be thrown.





If the attribute name contains invalid characters, a runtime error will be thrown.






**Parameters**:

* **attribute**: Real attribute.



**Parameters**:

* const [SyscRealAttribute](structSyscRealAttribute.md#structSyscRealAttribute) **attribute**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga7ef7712e40081015520c18ae54509930"></a>
### Function syscAddIntegerAttribute

![][public]

```
SyscError syscAddIntegerAttribute(const SyscIntegerAttribute attribute)
```

Provide a method to add an integer attribute that could be used in a coupled analysis.

If this attribute has already been added as an integer attribute, then this call will have no effect.





If a different integer attribute with the same name has already been added, then a runtime error will be thrown.





If a an attribute with the same name has already been added as a real attribute, then a runtime error will be thrown.





If the attribute name contains invalid characters, a runtime error will be thrown.






**Parameters**:

* **attribute**: Integer attribute.



**Parameters**:

* const [SyscIntegerAttribute](structSyscIntegerAttribute.md#structSyscIntegerAttribute) **attribute**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga534e802afae31ae7134e23a00d2872f9"></a>
### Function syscGetParameterValue

![][public]

```
double syscGetParameterValue(const char *parameterName, SyscError *errorCode)
```

Provide a function to get a Parameter value.

**Parameters**:

* **parameterName**: - name of the parameter.
* **errorCode**: - error status for the fuction.



**Parameters**:

* const char * **parameterName**
* [SyscError](structSyscError.md#structSyscError) * **errorCode**

**Return type**: double

<a id="group__SyscParticipantLibraryCAPI_1ga67c13bf8cd7fedeb86ac32b6d919eeb0"></a>
### Function syscSetParameterValue

![][public]

```
SyscError syscSetParameterValue(const char *parameterName, double value)
```

Provide a function to set a Parameter value.

**Parameters**:

* **parameterName**: - name of the parameter.
* **value**: - value of the parameter.



**Parameters**:

* const char * **parameterName**
* double **value**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1gaf5625adaeb366d18725d1e9560d5910d"></a>
### Function syscGetRealAttributeValue

![][public]

```
double syscGetRealAttributeValue(const char *attributeName, SyscError *errorCode)
```

Provide a function to get a RealAttribute value.

**Parameters**:

* **attributeName**: - name of the attribute.
* **errorCode**: - error status for the function.



**Parameters**:

* const char * **attributeName**
* [SyscError](structSyscError.md#structSyscError) * **errorCode**

**Return type**: double

<a id="group__SyscParticipantLibraryCAPI_1ga126dcce7d793eb854bdccd42e6a62e10"></a>
### Function syscGetIntegerAttributeValue

![][public]

```
int64_t syscGetIntegerAttributeValue(const char *attributeName, SyscError *errorCode)
```

Provide a function to get an IntegerAttribute value.

**Parameters**:

* **attributeName**: - name of the attribute.
* **errorCode**: - error status for the function.



**Parameters**:

* const char * **attributeName**
* [SyscError](structSyscError.md#structSyscError) * **errorCode**

**Return type**: int64_t

<a id="group__SyscParticipantLibraryCAPI_1ga5330416d093678fc96231257a88ea337"></a>
### Function syscAddCouplingInterface

![][public]

```
SyscError syscAddCouplingInterface(const SyscCouplingInterface couplingInterface)
```

Provide a function to add a coupling interface.

If this coupling interface has already been added, then this call will have no effect.





If a different coupling interface with the same has already been added, then an error status will be returned.





If the coupling interface name contains invalid characters, then an error status will be returned.





See [SyscCouplingInterface](structSyscCouplingInterface.md#structSyscCouplingInterface) for more details.



**Parameters**:

* const [SyscCouplingInterface](structSyscCouplingInterface.md#structSyscCouplingInterface) **couplingInterface**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1gadec9e44f001d4ec2b8139e096ab93ac7"></a>
### Function syscAddCouplingInterfaceA

![][public]

```
SyscError syscAddCouplingInterfaceA(const SyscCouplingInterface couplingInterface, int autoGenerateDataTransfers)
```

Provide a function to add a coupling interface.

If this coupling interface has already been added, then this call will have no effect.





If a different coupling interface with the same has already been added, then an error status will be returned.





If the coupling interface name contains invalid characters, then an error status will be returned.





See [SyscCouplingInterface](structSyscCouplingInterface.md#structSyscCouplingInterface) for more details.



**Parameters**:

* const [SyscCouplingInterface](structSyscCouplingInterface.md#structSyscCouplingInterface) **couplingInterface**
* int **autoGenerateDataTransfers**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga831884747873b947fcdc57ef31adce27"></a>
### Function syscCompleteSetup

![][public]

```
SyscError syscCompleteSetup(const SyscSetupInfo setupInfo)
```

Provide a function to notify System Coupling that setup can be completed.

After this function is called, coupled analysis setup can no longer be updated, i.e. regions and variables cannot be changed.





Once the setup is complete, any subsequent call to complete the setup will have no effect.






**Parameters**:

* **setupInfo**: - setup information.



**Parameters**:

* const [SyscSetupInfo](structSyscSetupInfo.md#structSyscSetupInfo) **setupInfo**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga06c366cb935ade55b7b90de9691d3f38"></a>
### Function syscRegisterInputScalarDataAccess

![][public]

```
SyscError syscRegisterInputScalarDataAccess(SyscInputScalarDataAccess dataAccess)
```

Provide a function to register input scalar data access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to SyscInputScalarDataAccess prototype.



**Parameters**:

* [SyscInputScalarDataAccess](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1gaaf3788ac706a730edbf6093c7e543681) **dataAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga04bbb44826997f602707b9e01d07d78e"></a>
### Function syscRegisterInputScalarDataAccessWithPointer

![][public]

```
SyscError syscRegisterInputScalarDataAccessWithPointer(SyscOpaqueDataAccess opaqueDataAccess, SyscInputScalarDataAccessWithPointer dataAccess)
```

Provide a function to register input scalar data access.

**Parameters**:

* **opaqueDataAccess**: - a pointer to an address in memory. This pointer will be passed into the callback function.
* **dataAccess**: - a pointer to the function that conforms to SyscInputScalarDataAccessWithPointer prototype.



**Parameters**:

* [SyscOpaqueDataAccess](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga17ef60969b3c919163ba2471eb95a28b) **opaqueDataAccess**
* [SyscInputScalarDataAccessWithPointer](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1gad41922f1a4f5abb891d5a913ba5fcccf) **dataAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga6b2aee555f07109357958edc9898b8b5"></a>
### Function syscRegisterInputScalarDataMultiZoneAccess

![][public]

```
SyscError syscRegisterInputScalarDataMultiZoneAccess(SyscOpaqueDataAccess opaqueDataAccess, SyscInputScalarDataMultiZoneAccess dataAccess)
```

Provide a function to register input scalar data multi-zone access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to SyscInputScalarDataMultiZoneAccess prototype.



**Parameters**:

* [SyscOpaqueDataAccess](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga17ef60969b3c919163ba2471eb95a28b) **opaqueDataAccess**
* [SyscInputScalarDataMultiZoneAccess](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga844dc6322bd6e4eabc2d3d2d9e69bdb1) **dataAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga36e9fe53c70f9c15cbcfc3957f80852b"></a>
### Function syscRegisterInputVectorDataAccess

![][public]

```
SyscError syscRegisterInputVectorDataAccess(SyscInputVectorDataAccess dataAccess)
```

Provide a function to register input vector data access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to SyscInputVectorDataAccess prototype.



**Parameters**:

* [SyscInputVectorDataAccess](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga8d5f53de4e65a4bacef0f25ba8b46483) **dataAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga46b386f0c3ed52071dd851b55763b1c8"></a>
### Function syscRegisterInputVectorDataAccessWithPointer

![][public]

```
SyscError syscRegisterInputVectorDataAccessWithPointer(SyscOpaqueDataAccess opaqueDataAccess, SyscInputVectorDataAccessWithPointer dataAccess)
```

Provide a function to register input vector data access.

**Parameters**:

* **opaqueDataAccess**: - a pointer to an address in memory. This pointer will be passed into the callback function.
* **dataAccess**: - a pointer to the function that conforms to SyscInputVectorDataAccessWithPointer prototype.



**Parameters**:

* [SyscOpaqueDataAccess](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga17ef60969b3c919163ba2471eb95a28b) **opaqueDataAccess**
* [SyscInputVectorDataAccessWithPointer](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1gae7c6372393f3ec720b8d6d1535fcf9b3) **dataAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1gad7774418be78b8b39c9b45b7fcade1d3"></a>
### Function syscRegisterInputVectorDataMultiZoneAccess

![][public]

```
SyscError syscRegisterInputVectorDataMultiZoneAccess(SyscOpaqueDataAccess opaqueDataAccess, SyscInputVectorDataMultiZoneAccess dataAccess)
```

Provide a function to register input vector data multi-zone access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to SyscInputVectorDataMultiZoneAccess prototype.



**Parameters**:

* [SyscOpaqueDataAccess](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga17ef60969b3c919163ba2471eb95a28b) **opaqueDataAccess**
* [SyscInputVectorDataMultiZoneAccess](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1gae2e92f1b7ae911c36bf3606c60a01511) **dataAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga6e187589ca426402ee045ccecfec21d3"></a>
### Function syscRegisterOutputScalarDataAccess

![][public]

```
SyscError syscRegisterOutputScalarDataAccess(SyscOutputScalarDataAccess dataAccess)
```

Provide a function to register output scalar data access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to SyscOutputScalarDataAccess prototype.



**Parameters**:

* [SyscOutputScalarDataAccess](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1gabd35283796cae3d3dbc851ac66b8564f) **dataAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga2c90e2ea571de3b7ce5e1ca65a996d8a"></a>
### Function syscRegisterOutputScalarDataAccessWithPointer

![][public]

```
SyscError syscRegisterOutputScalarDataAccessWithPointer(SyscOpaqueDataAccess opaqueDataAccess, SyscOutputScalarDataAccessWithPointer dataAccess)
```

Provide a function to register output scalar data access.

**Parameters**:

* **opaqueDataAccess**: - a pointer to an address in memory. This pointer will be passed into the callback function.
* **dataAccess**: - a pointer to the function that conforms to SyscOutputScalarDataAccessWithPointer prototype.



**Parameters**:

* [SyscOpaqueDataAccess](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga17ef60969b3c919163ba2471eb95a28b) **opaqueDataAccess**
* [SyscOutputScalarDataAccessWithPointer](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1gab378ed75ffd9b081ad7eccf8107a5542) **dataAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga7880daf983c8bac7db920281fdc937c1"></a>
### Function syscRegisterOutputScalarDataMultiZoneAccess

![][public]

```
SyscError syscRegisterOutputScalarDataMultiZoneAccess(SyscOpaqueDataAccess opaqueDataAccess, SyscOutputScalarDataMultiZoneAccess dataAccess)
```

Provide a function to register output scalar data multi-zone access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to SyscOutputScalarDataMultiZoneAccess prototype.



**Parameters**:

* [SyscOpaqueDataAccess](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga17ef60969b3c919163ba2471eb95a28b) **opaqueDataAccess**
* [SyscOutputScalarDataMultiZoneAccess](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga7767f728d880014dfbd853bbb8e0eb07) **dataAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1gaa3956909f65a425bec64c86ec5d5515b"></a>
### Function syscRegisterOutputVectorDataAccess

![][public]

```
SyscError syscRegisterOutputVectorDataAccess(SyscOutputVectorDataAccess dataAccess)
```

Provide a function to register output vector data access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to SyscOutputVectorDataAccess prototype.



**Parameters**:

* [SyscOutputVectorDataAccess](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1gae99c8cb78199403b9e74217557be206a) **dataAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga9793fb31fe905768b175842ceab722e5"></a>
### Function syscRegisterOutputVectorDataAccessWithPointer

![][public]

```
SyscError syscRegisterOutputVectorDataAccessWithPointer(SyscOpaqueDataAccess opaqueDataAccess, SyscOutputVectorDataAccessWithPointer dataAccess)
```

Provide a function to register output vector data access.

**Parameters**:

* **opaqueDataAccess**: - a pointer to an address in memory. This pointer will be passed into the callback function.
* **dataAccess**: - a pointer to the function that conforms to SyscOutputVectorDataAccessWithPointer prototype.



**Parameters**:

* [SyscOpaqueDataAccess](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga17ef60969b3c919163ba2471eb95a28b) **opaqueDataAccess**
* [SyscOutputVectorDataAccessWithPointer](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1gab30cbe5478bf769c81f5c0a07e885afd) **dataAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1gad5c33007c0067ab6edf8a72ab422ff7d"></a>
### Function syscRegisterOutputVectorDataMultiZoneAccess

![][public]

```
SyscError syscRegisterOutputVectorDataMultiZoneAccess(SyscOpaqueDataAccess opaqueDataAccess, SyscOutputVectorDataMultiZoneAccess dataAccess)
```

Provide a function to register output vector data multi-zone access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to SyscOutputVectorDataMultiZoneAccess prototype.



**Parameters**:

* [SyscOpaqueDataAccess](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga17ef60969b3c919163ba2471eb95a28b) **opaqueDataAccess**
* [SyscOutputVectorDataMultiZoneAccess](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga1d6d5d9fa806ac5820d9a6ed85811804) **dataAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga1f4ab3d781755660f64b5a2cb691abe9"></a>
### Function syscRegisterInputComplexScalarDataAccess

![][public]

```
SyscError syscRegisterInputComplexScalarDataAccess(SyscInputComplexScalarDataAccess dataAccess)
```

Provide a function to register input complex scalar data access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to SyscInputComplexScalarDataAccess prototype.



**Parameters**:

* [SyscInputComplexScalarDataAccess](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1gab388f936f3a73b9b480a792c401a95a1) **dataAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga55a307bf13f2d002f05660d781fef50e"></a>
### Function syscRegisterInputComplexScalarDataAccessWithPointer

![][public]

```
SyscError syscRegisterInputComplexScalarDataAccessWithPointer(SyscOpaqueDataAccess opaqueDataAccess, SyscInputComplexScalarDataAccessWithPointer dataAccess)
```

Provide a function to register input complex scalar data access.

**Parameters**:

* **opaqueDataAccess**: - a pointer to an address in memory. This pointer will be passed into the callback function.
* **dataAccess**: - a pointer to the function that conforms to SyscInputComplexScalarDataAccessWithPointer prototype.



**Parameters**:

* [SyscOpaqueDataAccess](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga17ef60969b3c919163ba2471eb95a28b) **opaqueDataAccess**
* [SyscInputComplexScalarDataAccessWithPointer](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga7a0c5889de7b17b59d44595d7636747e) **dataAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1gaf281613584c91fb460de5e4557f16767"></a>
### Function syscRegisterInputComplexVectorDataAccess

![][public]

```
SyscError syscRegisterInputComplexVectorDataAccess(SyscInputComplexVectorDataAccess dataAccess)
```

Provide a function to register input complex vector data access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to SyscInputComplexVectorDataAccess prototype.



**Parameters**:

* [SyscInputComplexVectorDataAccess](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1gace54794852b48d8725b930f1aed89c4d) **dataAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1gadfee511d3a3021907ee187716fff0944"></a>
### Function syscRegisterInputComplexVectorDataAccessWithPointer

![][public]

```
SyscError syscRegisterInputComplexVectorDataAccessWithPointer(SyscOpaqueDataAccess opaqueDataAccess, SyscInputComplexVectorDataAccessWithPointer dataAccess)
```

Provide a function to register input complex vector data access.

**Parameters**:

* **opaqueDataAccess**: - a pointer to an address in memory. This pointer will be passed into the callback function.
* **dataAccess**: - a pointer to the function that conforms to SyscInputComplexVectorDataAccessWithPointer prototype.



**Parameters**:

* [SyscOpaqueDataAccess](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga17ef60969b3c919163ba2471eb95a28b) **opaqueDataAccess**
* [SyscInputComplexVectorDataAccessWithPointer](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga68dcce877e8cc69f13bee845c76f1b4d) **dataAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga1c0e074f2239faf10594e3139d32efe1"></a>
### Function syscRegisterOutputComplexScalarDataAccess

![][public]

```
SyscError syscRegisterOutputComplexScalarDataAccess(SyscOutputComplexScalarDataAccess dataAccess)
```

Provide a function to register output complex scalar data access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to SyscOutputComplexScalarDataAccess prototype.



**Parameters**:

* [SyscOutputComplexScalarDataAccess](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga17d96c2c29a44374309efafdfb8fef62) **dataAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga5a7faf0c3fe80ffc7925da217ecce202"></a>
### Function syscRegisterOutputComplexScalarDataAccessWithPointer

![][public]

```
SyscError syscRegisterOutputComplexScalarDataAccessWithPointer(SyscOpaqueDataAccess opaqueDataAccess, SyscOutputComplexScalarDataAccessWithPointer dataAccess)
```

Provide a function to register output complex scalar data access.

**Parameters**:

* **opaqueDataAccess**: - a pointer to an address in memory. This pointer will be passed into the callback function.
* **dataAccess**: - a pointer to the function that conforms to SyscOutputComplexScalarDataAccessWithPointer prototype.



**Parameters**:

* [SyscOpaqueDataAccess](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga17ef60969b3c919163ba2471eb95a28b) **opaqueDataAccess**
* [SyscOutputComplexScalarDataAccessWithPointer](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga71ac4910edd87d8d62e871001258c698) **dataAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga1cb92c5ccc643abce68fba25f61e3d41"></a>
### Function syscRegisterOutputComplexVectorDataAccess

![][public]

```
SyscError syscRegisterOutputComplexVectorDataAccess(SyscOutputComplexVectorDataAccess dataAccess)
```

Provide a function to register output complex vector data access.

**Parameters**:

* **dataAccess**: - a pointer to the function that conforms to SyscOutputComplexVectorDataAccess prototype.



**Parameters**:

* [SyscOutputComplexVectorDataAccess](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga65a0f3a119f2cec715ac89798f16a97c) **dataAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga859961191e2943afd73b8e31cbd010c9"></a>
### Function syscRegisterOutputComplexVectorDataAccessWithPointer

![][public]

```
SyscError syscRegisterOutputComplexVectorDataAccessWithPointer(SyscOpaqueDataAccess opaqueDataAccess, SyscOutputComplexVectorDataAccessWithPointer dataAccess)
```

Provide a function to register output complex vector data access.

**Parameters**:

* **opaqueDataAccess**: - a pointer to an address in memory. This pointer will be passed into the callback function.
* **dataAccess**: - a pointer to the function that conforms to SyscOutputComplexVectorDataAccessWithPointer prototype.



**Parameters**:

* [SyscOpaqueDataAccess](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga17ef60969b3c919163ba2471eb95a28b) **opaqueDataAccess**
* [SyscOutputComplexVectorDataAccessWithPointer](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga18e31a00d833843895c731e69ca006b0) **dataAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga044974d4f159fd35669b77e5111fe7e0"></a>
### Function syscRegisterSurfMeshAccess

![][public]

```
SyscError syscRegisterSurfMeshAccess(SyscSurfMeshAccess meshAccess)
```

Provide a function to register surface mesh access.

**Parameters**:

* **meshAccess**: - a pointer to the function that conforms to SyscSurfMeshAccess prototype.



**Parameters**:

* [SyscSurfMeshAccess](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga71e4eb102d00dd0a211f6dc2f4d24222) **meshAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1gadddd0903fcab2450b14f54157e283302"></a>
### Function syscRegisterSurfaceMeshAccessWithPointer

![][public]

```
SyscError syscRegisterSurfaceMeshAccessWithPointer(SyscOpaqueDataAccess opaqueDataAccess, SyscSurfaceMeshAccessWithPointer meshAccess)
```

Provide a function to register surface mesh access.

**Parameters**:

* **opaqueDataAccess**: - a pointer to an address in memory. This pointer will be passed into the callback function.
* **meshAccess**: - a pointer to the function that conforms to SyscSurfaceMeshAccessWithPointer prototype.



**Parameters**:

* [SyscOpaqueDataAccess](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga17ef60969b3c919163ba2471eb95a28b) **opaqueDataAccess**
* [SyscSurfaceMeshAccessWithPointer](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1gafbfb299099d65e3f232bb67a04d1a8e9) **meshAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga3261b0b3eb6278c380a5b59894a7b533"></a>
### Function syscRegisterSurfaceMeshMultiZoneAccess

![][public]

```
SyscError syscRegisterSurfaceMeshMultiZoneAccess(SyscOpaqueDataAccess opaqueDataAccess, SyscSurfaceMeshMultiZoneAccess meshAccess)
```

Provide a function to register surface mesh multi-zone access.

**Parameters**:

* **opaqueDataAccess**: - a pointer to an address in memory. This pointer will be passed into the callback function.
* **meshAccess**: - a pointer to the function that conforms to SyscSurfaceMeshMultiZoneAccess prototype.



**Parameters**:

* [SyscOpaqueDataAccess](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga17ef60969b3c919163ba2471eb95a28b) **opaqueDataAccess**
* [SyscSurfaceMeshMultiZoneAccess](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga9ffe052c4c28ff40b4a14b32cd9f227c) **meshAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga27ba2e330c4d2c20b692a7ab66852721"></a>
### Function syscRegisterVolumeMeshAccess

![][public]

```
SyscError syscRegisterVolumeMeshAccess(SyscVolumeMeshAccess meshAccess)
```

Provide a function to register volume mesh access.

**Parameters**:

* **meshAccess**: - a pointer to the function that conforms to SyscVolumeMeshAccess prototype.



**Parameters**:

* [SyscVolumeMeshAccess](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1gad0ff77c2af045d3294b149219123a084) **meshAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga3b90426f24a434668b5270930192fec6"></a>
### Function syscRegisterVolumeMeshAccessWithPointer

![][public]

```
SyscError syscRegisterVolumeMeshAccessWithPointer(SyscOpaqueDataAccess opaqueDataAccess, SyscVolumeMeshAccessWithPointer meshAccess)
```

Provide a function to register volume mesh access.

**Parameters**:

* **opaqueDataAccess**: - a pointer to an address in memory. This pointer will be passed into the callback function.
* **meshAccess**: - a pointer to the function that conforms to SyscVolumeMeshAccessWithPointer prototype.



**Parameters**:

* [SyscOpaqueDataAccess](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga17ef60969b3c919163ba2471eb95a28b) **opaqueDataAccess**
* [SyscVolumeMeshAccessWithPointer](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1gadcb6262e27485836632696e52cf80fb9) **meshAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1gab71a3bc5775e830b2dac81dd6828cb13"></a>
### Function syscRegisterVolumeMeshMultiZoneAccess

![][public]

```
SyscError syscRegisterVolumeMeshMultiZoneAccess(SyscOpaqueDataAccess opaqueDataAccess, SyscVolumeMeshMultiZoneAccess meshAccess)
```

Provide a function to register volume mesh multi-zone access.

**Parameters**:

* **opaqueDataAccess**: - a pointer to an address in memory. This pointer will be passed into the callback function.
* **meshAccess**: - a pointer to the function that conforms to SyscVolumeMeshMultiZoneAccess prototype.



**Parameters**:

* [SyscOpaqueDataAccess](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga17ef60969b3c919163ba2471eb95a28b) **opaqueDataAccess**
* [SyscVolumeMeshMultiZoneAccess](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1gaf381b799bec1baf9f3ab727b61458b59) **meshAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1gade30d8ccbbad0236ace57edfe55181d5"></a>
### Function syscRegisterPointCloudAccess

![][public]

```
SyscError syscRegisterPointCloudAccess(SyscPointCloudAccess pointCloudAccess)
```

Provide a function to register point cloud access.

**Parameters**:

* **pointCloudAccess**: - a pointer to the function that conforms to SyscPointCloudAccess prototype.



**Parameters**:

* [SyscPointCloudAccess](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1gae999907f608779e525e34f60d2803038) **pointCloudAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1gaedae298744b65c453c7dac3e8dc1d68a"></a>
### Function syscRegisterPointCloudAccessWithPointer

![][public]

```
SyscError syscRegisterPointCloudAccessWithPointer(SyscOpaqueDataAccess opaqueDataAccess, SyscPointCloudAccessWithPointer pointCloudAccess)
```

Provide a function to register point cloud access.

**Parameters**:

* **opaqueDataAccess**: - a pointer to an address in memory. This pointer will be passed into the callback function.
* **pointCloudAccess**: - a pointer to the function that conforms to SyscPointCloudAccessWithPointer prototype.



**Parameters**:

* [SyscOpaqueDataAccess](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga17ef60969b3c919163ba2471eb95a28b) **opaqueDataAccess**
* [SyscPointCloudAccessWithPointer](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1gafa62fd6d86905625ae071dea4749a8df) **pointCloudAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga77d6e90a118be65eeb86ce08a3a3dea5"></a>
### Function syscRegisterPointCloudMultiZoneAccess

![][public]

```
SyscError syscRegisterPointCloudMultiZoneAccess(SyscOpaqueDataAccess opaqueDataAccess, SyscPointCloudMultiZoneAccess pointCloudAccess)
```

Provide a function to register point cloud multi-zone access.

**Parameters**:

* **opaqueDataAccess**: - a pointer to an address in memory. This pointer will be passed into the callback function.
* **meshAccess**: - a pointer to the function that conforms to SyscPointCloudMultiZoneAccess prototype.



**Parameters**:

* [SyscOpaqueDataAccess](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga17ef60969b3c919163ba2471eb95a28b) **opaqueDataAccess**
* [SyscPointCloudMultiZoneAccess](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1gac4a0788f14f0d473372f07638e9dceaa) **pointCloudAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1gad49e03082ae93fdd7f96a3b7601ca9a8"></a>
### Function syscRegisterZoneCountAccess

![][public]

```
SyscError syscRegisterZoneCountAccess(SyscOpaqueDataAccess opaqueDataAccess, SyscZoneCountAccess zoneCountAccess)
```

Provide a function to register zone count access.





**Parameters**:

* [SyscOpaqueDataAccess](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga17ef60969b3c919163ba2471eb95a28b) **opaqueDataAccess**
* [SyscZoneCountAccess](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1gaabc0678095ad5a5efb8be4d666ce2677) **zoneCountAccess**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga30880d98428a08962ab027267c66c2ae"></a>
### Function syscRegisterRestartPointCreation

![][public]

```
SyscError syscRegisterRestartPointCreation(SyscRestartPointCreation restartPointCreation)
```

Provide a function to register restart point creation callback.

**Parameters**:

* **restartPointCreation**: - a pointer to the function that conforms to SyscRestartPointCreation function prototype. See SyscRestartPointCreation for details.



**Parameters**:

* [SyscRestartPointCreation](syscFunctionTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga6d3934571a8dcc03e2ecbe724a808c1b) **restartPointCreation**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1gaa26049072c61f17c4e1296490c00abc5"></a>
### Function syscInitializeAnalysis

![][public]

```
SyscError syscInitializeAnalysis()
```

Provide a function to notify System Coupling that analysis initialization can be completed.

This function must be called after registering mesh and variable data access and prior to entering the coupled analysis loop.





If this function is called before the coupled analysis is complete, it will automatically complete the coupled analysis and assume steady analysis type.



**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1gaea2bf4afeff9dd606125e00bb6c475a0"></a>
### Function syscDoIteration

![][public]

```
int syscDoIteration()
```

Provide a function to check whether to do a coupling iteration.

This function returns 1 (true) if another coupling iteration is required, otherwise it returns 0 (false).



**Return type**: int

<a id="group__SyscParticipantLibraryCAPI_1gaf701624f0add6b5d7a5fd2d9dcf8e298"></a>
### Function syscDoTimeStep

![][public]

```
int syscDoTimeStep()
```

Provide a function to check whether to do a coupling time step.

This function returns 1 (true) if another coupling time step is required, otherwise it returns 0 (false).





This function should be called to check if another coupling time step should be done. If the previous coupling time step is finished and another time step should be performed, then calling this function will tell System Coupling that the coupling participant is going to advance to the next time step (i.e. calling [syscDoTimeStep()](syscSystemCoupling_8h.md#group__SyscParticipantLibraryCAPI_1gaf701624f0add6b5d7a5fd2d9dcf8e298) will cause [syscDoIteration()](syscSystemCoupling_8h.md#group__SyscParticipantLibraryCAPI_1gaea2bf4afeff9dd606125e00bb6c475a0) to change from returning false to returning true, under the conditions described above).





This function only makes sense for transient analysis. It will always return false for steady analysis.



**Return type**: int

<a id="group__SyscParticipantLibraryCAPI_1gace1009120d02713ffe0b625d1cadd33d"></a>
### Function syscGetCurrentTimeStep

![][public]

```
SyscTimeStep syscGetCurrentTimeStep()
```

Provide a function to get current time step.

This function returns a time step struct, which contains time step number, start time, and time step size for the current coupling time step.





A default value (time step number 0, start time 0.0, time step size 0.0) is returned if this function is called outside the coupled analysis loop or if the analysis is steady.



**Return type**: [SyscTimeStep](structSyscTimeStep.md#structSyscTimeStep)

<a id="group__SyscParticipantLibraryCAPI_1ga8445069f0234978743203e1d5c0cb62c"></a>
### Function syscUpdateInputs

![][public]

```
SyscError syscUpdateInputs()
```

Provide a function to update the participants input variables.

Solution data for all input variables will be updated. Depending on the defined interfaces, data will be transferred from another coupling participant solver, or from the opposite side of the same-participant coupling interface.





When doing cosimulation, this function must be called from inside the coupled analysis loop. It tells System Coupling that the participant is about to begin its solver iterations. All input variable data will be up-to-date after returning from this function. If any local coupling interfaces are defined, all corresponding input variable data will also be updated.





When doing same-participant mapping only (without cosimulation), this function should be called whenever input data needs to be brought up-to-date.



**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga3b5e8e0315bbbe48526324439c422733"></a>
### Function syscUpdateOutputs

![][public]

```
SyscError syscUpdateOutputs(const enum SyscConvergenceStatus convStatus)
```

Provide a function to update the participants output variables.

This function must be called from inside the coupled analysis loop. It tells System Coupling that the participant has finished performing its solver iterations.



**Parameters**:

* const enum [SyscConvergenceStatus](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga10ce3774353dfbc811147a9ad211b3cd) **convStatus**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga09a7259037537f2d3d0403788d80e2e1"></a>
### Function syscDisconnect

![][public]

```
SyscError syscDisconnect()
```

Provide a function to end the analysis and disconnect from System Coupling.





**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga009687c58ccf588d2c94d879a2769541"></a>
### Function syscFatalError

![][public]

```
void syscFatalError(const char *errorMessage)
```

Provide a function to notify System Coupling about a fatal error.





**Parameters**:

* const char * **errorMessage**

**Return type**: void

<a id="group__SyscParticipantLibraryCAPI_1gafc80abbd0874c5da3d80ec2d8258eb02"></a>
### Function syscNonFatalError

![][public]

```
void syscNonFatalError(const char *errorMessage)
```

Provide a function to notify System Coupling about a non fatal error.





**Parameters**:

* const char * **errorMessage**

**Return type**: void

<a id="group__SyscParticipantLibraryCAPI_1ga456487cb20f8a9b6c392eec4d0eaceb7"></a>
### Function syscCheckSurfaceMeshValidity

![][public]

```
SyscError syscCheckSurfaceMeshValidity(SyscSurfaceMesh mesh)
```

Provide a function to perform simple mesh validity checks.

This function is provided as a testing and debugging tool and is not meant to be used in production workflows. System Coupling itself will not call this function for performance reasons.





The function will check the surface mesh for detectable problems. For example, it will check if array sizes are consistent, that elemNodeIds array only contains ids that are found in nodeIds array, etc. It is not an exhaustive validity check - the mesh can still have problems even if all checks passed.






**Returns**:

Return value is [SyscError](structSyscError.md#structSyscError) struct. If mesh checks passed, then retcode will be 0. If mesh checks failed, then retcode will be not 0 and message that contains information about about the particular issue.



**Parameters**:

* [SyscSurfaceMesh](structSyscSurfaceMesh.md#structSyscSurfaceMesh) **mesh**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1gad55adabb4ed5bdb44833c06671541921"></a>
### Function syscWriteSetupFile

![][public]

```
int syscWriteSetupFile(const SyscSetupFileInfo setupFileInfo)
```

Provide a function to write the setup file.

This function can be used to generate a System Coupling setup file, which contains participant's setup information. It should be called after calling syscCompleteCouplingSetup.





It takes [SyscSetupFileInfo](structSyscSetupFileInfo.md#structSyscSetupFileInfo) struct as input parameter.





It will return true (1) if the setup file was successfully written, and false (0) otherwise.



**Parameters**:

* const [SyscSetupFileInfo](structSyscSetupFileInfo.md#structSyscSetupFileInfo) **setupFileInfo**

**Return type**: int

<a id="group__SyscParticipantLibraryCAPI_1gafb6abc910fc014d46cb46dc86cf48c60"></a>
### Function syscWriteResults

![][public]

```
SyscError syscWriteResults(const SyscResultsInfo resultsInfo)
```

Write results to a file.





**Parameters**:

* const [SyscResultsInfo](structSyscResultsInfo.md#structSyscResultsInfo) **resultsInfo**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga5783653d3a5994b0bccb7471843e72eb"></a>
### Function syscGetNumRegions

![][public]

```
size_t syscGetNumRegions()
```

Provide a function to return the number of added regions.

**Returns**:

Number of regions.



**Return type**: size_t

<a id="group__SyscParticipantLibraryCAPI_1ga73a2e2125fd1a583b152012a8d7f9ce9"></a>
### Function syscGetAddedRegion

![][public]

```
SyscRegion syscGetAddedRegion(size_t index)
```

Provide a function to return added region given the region index.

**Parameters**:

* **index**: - region index. Use [syscGetNumRegions()](syscSystemCoupling_8h.md#group__SyscParticipantLibraryCAPI_1ga5783653d3a5994b0bccb7471843e72eb) to get the number of regions.


**Returns**:

Region at specified index.



**Parameters**:

* size_t **index**

**Return type**: [SyscRegion](structSyscRegion.md#structSyscRegion)

<a id="group__SyscParticipantLibraryCAPI_1ga47273dac1bc54d406c085bee823c5131"></a>
### Function syscGetSolutionControl

![][public]

```
SyscSolutionControl syscGetSolutionControl()
```

Get solution control.





**Return type**: [SyscSolutionControl](structSyscSolutionControl.md#structSyscSolutionControl)

<a id="group__SyscParticipantLibraryCAPI_1ga8987dbe52eb06c7d089663d4c29c17ed"></a>
### Function syscGetNumCouplingInterfaces

![][public]

```
size_t syscGetNumCouplingInterfaces()
```

Provide a function to return the number of added coupling interfaces.

**Returns**:

Number of coupling interfaces.



**Return type**: size_t

<a id="group__SyscParticipantLibraryCAPI_1ga13a0798c28a54535f42c8cf240ed7d40"></a>
### Function syscGetAddedCouplingInterface

![][public]

```
SyscCouplingInterface syscGetAddedCouplingInterface(size_t index)
```







**Parameters**:

* size_t **index**

**Return type**: [SyscCouplingInterface](structSyscCouplingInterface.md#structSyscCouplingInterface)

<a id="group__SyscParticipantLibraryCAPI_1ga11cda8cc3f7f76d71b87baabbfe53304"></a>
### Function syscGetVariable

![][public]

```
SyscVariable syscGetVariable(const char *name)
```

Create variable to be used in a coupled analysis.

**Parameters**:

* **name**: - Unique name for this variable. String length should not exceed SYSC_STRING_LENGTH.

Display name will default to the same as name.





Tensor type will default to scalar.





Is extensive flag will default to false (to non-extensive).





Location will default to nodes.





Quantity type will default to unspecified.



**Parameters**:

* const char * **name**

**Return type**: [SyscVariable](structSyscVariable.md#structSyscVariable)

<a id="group__SyscParticipantLibraryCAPI_1ga41420b43584d7b7ab11d94c2c4e4ccdb"></a>
### Function syscGetVariableDTELQD

![][public]

```
SyscVariable syscGetVariableDTELQD(const char *name, const char *displayName, enum SyscTensorType tensorType, int isExtensive, enum SyscLocation location, enum SyscQuantityType quantityType, enum SyscDataType dataType)
```

Create variable to be used in a coupled analysis.

**Parameters**:

* **name**: - Unique name for this variable. String length should not exceed SYSC_STRING_LENGTH.
* **displayName**: - variable display name. String length should not exceed SYSC_STRING_LENGTH.
* **tensorType**: - variable tensor type.
* **isExtensive**: - flag indicating if it's an extensive property.
* **location**: - variable location (e.g element or node).
* **quantityType**: - variable quantity type.
* **dataType**: - variable data type.



**Parameters**:

* const char * **name**
* const char * **displayName**
* enum [SyscTensorType](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga007e2fd66e7263a63c114a6d12b3808d) **tensorType**
* int **isExtensive**
* enum [SyscLocation](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gade42aba1a68acbbf5956edcd388cdcda) **location**
* enum [SyscQuantityType](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gaa28a3de6c7c91003a8a15721a5301f12) **quantityType**
* enum SyscDataType **dataType**

**Return type**: [SyscVariable](structSyscVariable.md#structSyscVariable)

<a id="group__SyscParticipantLibraryCAPI_1ga3aceb66e0d37a5de11b76fd4c1d7293d"></a>
### Function syscGetVariableTE

![][public]

```
SyscVariable syscGetVariableTE(const char *name, enum SyscTensorType tensorType, int isExtensive, enum SyscLocation location)
```

Create variable to be used in a coupled analysis.

**Parameters**:

* **name**: - Unique name for this variable. String length should not exceed SYSC_STRING_LENGTH.
* **tensorType**: - variable tensor type.
* **isExtensive**: - flag indicating if it's an extensive property.
* **location**: - variable location (e.g element or node).

Display name will default to the same as name.





Quantity type will default to unspecified.



**Parameters**:

* const char * **name**
* enum [SyscTensorType](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga007e2fd66e7263a63c114a6d12b3808d) **tensorType**
* int **isExtensive**
* enum [SyscLocation](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gade42aba1a68acbbf5956edcd388cdcda) **location**

**Return type**: [SyscVariable](structSyscVariable.md#structSyscVariable)

<a id="group__SyscParticipantLibraryCAPI_1ga8c3a0f01eb353ffcb981281a76dde4b3"></a>
### Function syscGetVariableTEQ

![][public]

```
SyscVariable syscGetVariableTEQ(const char *name, const char *displayName, enum SyscTensorType tensorType, int isExtensive, enum SyscLocation location, enum SyscQuantityType quantityType)
```

Create variable to be used in a coupled analysis.

**Parameters**:

* **name**: - Unique name for this variable. String length should not exceed SYSC_STRING_LENGTH.
* **displayName**: - variable display name. String length should not exceed SYSC_STRING_LENGTH.
* **tensorType**: - variable tensor type.
* **isExtensive**: - flag indicating if it's an extensive property.
* **location**: - variable location (e.g element or node).
* **quantityType**: - variable quantity type.



**Parameters**:

* const char * **name**
* const char * **displayName**
* enum [SyscTensorType](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1ga007e2fd66e7263a63c114a6d12b3808d) **tensorType**
* int **isExtensive**
* enum [SyscLocation](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gade42aba1a68acbbf5956edcd388cdcda) **location**
* enum [SyscQuantityType](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gaa28a3de6c7c91003a8a15721a5301f12) **quantityType**

**Return type**: [SyscVariable](structSyscVariable.md#structSyscVariable)

<a id="group__SyscParticipantLibraryCAPI_1gabcbdf21641e68a17e941a6c8da2afdc9"></a>
### Function syscGetVariableQ

![][public]

```
SyscVariable syscGetVariableQ(const char *name, const char *displayName, enum SyscLocation location, enum SyscQuantityType quantityType)
```

Create variable to be used in a coupled analysis.

**Parameters**:

* **name**: - Unique name for this variable. String length should not exceed SYSC_STRING_LENGTH.
* **displayName**: - variable display name. String length should not exceed SYSC_STRING_LENGTH.
* **location**: - variable location (e.g element or node).
* **quantityType**: - variable quantity type.

The variable tensor type and is extensive properties will be inferred from the quantity type, according to the following rules:





```
Quantity Type                     Tensor Type      Is Extensive
----------------------------------------------------------------
Force                             Vector           True
Incremental Displacement          Vector           False
Temperature                       Scalar           False
Heat Rate                         Scalar           True
Heat Transfer Coefficient         Scalar           False
Convection Reference Temperature  Scalar           False
```





If any other quantity type is specified, tensor type will be set to scalar and is extensive will be set to false.



**Parameters**:

* const char * **name**
* const char * **displayName**
* enum [SyscLocation](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gade42aba1a68acbbf5956edcd388cdcda) **location**
* enum [SyscQuantityType](syscCommonTypes_8h.md#group__SyscParticipantLibraryCAPI_1gaa28a3de6c7c91003a8a15721a5301f12) **quantityType**

**Return type**: [SyscVariable](structSyscVariable.md#structSyscVariable)

<a id="group__SyscParticipantLibraryCAPI_1ga36e1b9748fe759040360468c2b863753"></a>
### Function syscVariableAddRealAttribute

![][public]

```
SyscError syscVariableAddRealAttribute(SyscVariable variable, SyscRealAttribute attribute)
```

Add real-valued attribute to the variable.





**Parameters**:

* [SyscVariable](structSyscVariable.md#structSyscVariable) **variable**
* [SyscRealAttribute](structSyscRealAttribute.md#structSyscRealAttribute) **attribute**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga2c8d8b670d660f646fbe0d81dbc7914b"></a>
### Function syscVariableAddIntegerAttribute

![][public]

```
SyscError syscVariableAddIntegerAttribute(SyscVariable variable, SyscIntegerAttribute attribute)
```

Add integer-valued attribute to the variable.





**Parameters**:

* [SyscVariable](structSyscVariable.md#structSyscVariable) **variable**
* [SyscIntegerAttribute](structSyscIntegerAttribute.md#structSyscIntegerAttribute) **attribute**

**Return type**: [SyscError](structSyscError.md#structSyscError)

<a id="group__SyscParticipantLibraryCAPI_1ga3cb95d52ef66ec8339bff5dc9c2c28bb"></a>
### Function syscVariableGetNumRealAttributes

![][public]

```
size_t syscVariableGetNumRealAttributes(SyscVariable variable)
```

Get number of real-valued attributes.





**Parameters**:

* [SyscVariable](structSyscVariable.md#structSyscVariable) **variable**

**Return type**: size_t

<a id="group__SyscParticipantLibraryCAPI_1gae744a1029ca1d356c8ef9a81b6a41df6"></a>
### Function syscVariableGetNumIntegerAttributes

![][public]

```
size_t syscVariableGetNumIntegerAttributes(SyscVariable variable)
```

Get number of integer-valued attributes.





**Parameters**:

* [SyscVariable](structSyscVariable.md#structSyscVariable) **variable**

**Return type**: size_t

<a id="group__SyscParticipantLibraryCAPI_1ga7d8fce6af6169d53f48e92cb90224bff"></a>
### Function syscVariableGetRealAttribute

![][public]

```
SyscRealAttribute syscVariableGetRealAttribute(SyscVariable variable, size_t index)
```

Return the real-valued attribute at the given index.





**Parameters**:

* [SyscVariable](structSyscVariable.md#structSyscVariable) **variable**
* size_t **index**

**Return type**: [SyscRealAttribute](structSyscRealAttribute.md#structSyscRealAttribute)

<a id="group__SyscParticipantLibraryCAPI_1gacd6d89e8e016b12cf558b312619201a4"></a>
### Function syscVariableGetIntegerAttribute

![][public]

```
SyscIntegerAttribute syscVariableGetIntegerAttribute(SyscVariable variable, size_t index)
```

Return the integer-valued attribute at the given index.





**Parameters**:

* [SyscVariable](structSyscVariable.md#structSyscVariable) **variable**
* size_t **index**

**Return type**: [SyscIntegerAttribute](structSyscIntegerAttribute.md#structSyscIntegerAttribute)

<a id="group__SyscParticipantLibraryCAPI_1ga44f0210eb99864864b6ea802b5c8c857"></a>
### Function syscGetVolumeMeshEmpty

![][public]

```
SyscVolumeMesh syscGetVolumeMeshEmpty()
```

Create an empty volume mesh access struct.

Returns a struct representing empty volume mesh. All member will be assigned default values.



**Return type**: [SyscVolumeMesh](structSyscVolumeMesh.md#structSyscVolumeMesh)

<a id="group__SyscParticipantLibraryCAPI_1gaa082ad5a3f9a308f6dfb794e8bdcd8cd"></a>
### Function syscGetVolumeMeshNFC

![][public]

```
SyscVolumeMesh syscGetVolumeMeshNFC(SyscNodeData nodes, SyscFaceData faces, SyscCellData cells)
```

Create a volume mesh access struct.

**Parameters**:

* **nodes**: - node data
* **faces**: - face data
* **cells**: - cell data



**Parameters**:

* [SyscNodeData](structSyscNodeData.md#structSyscNodeData) **nodes**
* [SyscFaceData](structSyscFaceData.md#structSyscFaceData) **faces**
* [SyscCellData](structSyscCellData.md#structSyscCellData) **cells**

**Return type**: [SyscVolumeMesh](structSyscVolumeMesh.md#structSyscVolumeMesh)

<a id="group__SyscParticipantLibraryCAPI_1gacdd4cb0f44e5d2e94a0ed34e0dc96bbe"></a>
### Function syscGetVolumeMeshElementBased

![][public]

```
SyscVolumeMesh syscGetVolumeMeshElementBased(SyscNodeData nodes, SyscElementTypeData cellTypes, SyscElementNodeConnectivityData cellNodeConnectivity)
```

Create an element-based volume mesh access struct.

**Parameters**:

* **nodes**: - node data
* **cellTypes**: - cell types
* **cellNodeConnectivity**: - cell-to-node connectivity



**Parameters**:

* [SyscNodeData](structSyscNodeData.md#structSyscNodeData) **nodes**
* [SyscElementTypeData](structSyscElementTypeData.md#structSyscElementTypeData) **cellTypes**
* [SyscElementNodeConnectivityData](structSyscElementNodeConnectivityData.md#structSyscElementNodeConnectivityData) **cellNodeConnectivity**

**Return type**: [SyscVolumeMesh](structSyscVolumeMesh.md#structSyscVolumeMesh)

<a id="group__SyscParticipantLibraryCAPI_1gae426344ef494aa92411c8c3856cdcb7f"></a>
### Function syscGetVolumeMeshFaceBased

![][public]

```
SyscVolumeMesh syscGetVolumeMeshFaceBased(SyscNodeData nodes, SyscElementNodeCountData faceNodeCounts, SyscElementNodeConnectivityData faceNodeConnectivity, SyscFaceCellConnectivityData faceCellConnectivity, SyscCellIdData cellIds)
```

Create a face-based volume mesh access struct.

**Parameters**:

* **nodes**: - node data
* **faceNodeCounts**: - face node counts
* **faceNodeConnectivity**: - face-to-node connectivity
* **faceCellConnectivity**: - face-to-cell connectivity
* **cellIds**: - cell ids



**Parameters**:

* [SyscNodeData](structSyscNodeData.md#structSyscNodeData) **nodes**
* [SyscElementNodeCountData](structSyscElementNodeCountData.md#structSyscElementNodeCountData) **faceNodeCounts**
* [SyscElementNodeConnectivityData](structSyscElementNodeConnectivityData.md#structSyscElementNodeConnectivityData) **faceNodeConnectivity**
* [SyscFaceCellConnectivityData](structSyscFaceCellConnectivityData.md#structSyscFaceCellConnectivityData) **faceCellConnectivity**
* [SyscCellIdData](structSyscCellIdData.md#structSyscCellIdData) **cellIds**

**Return type**: [SyscVolumeMesh](structSyscVolumeMesh.md#structSyscVolumeMesh)

## Macros

<a id="group__SyscParticipantLibraryCAPI_1gab4cd55b5b37dd76c5755020302086b15"></a>
### Macro SYSC\_STRING\_LENGTH

![][public]

```
#define SYSC_STRING_LENGTH 256
```

Define maximum string length.





[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C]: https://img.shields.io/badge/language-C-blue (C)