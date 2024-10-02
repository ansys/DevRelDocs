#  Interface IDFMFReader

Namespace: [VM.Models.FE.Utilities](VM.Models.FE.Utilities.md)  
Assembly: VM.Models.FE.Utilities.dll  

```csharp
public interface IDFMFReader
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_FE_Utilities_IDFMFReader_AddedNodesForRBE"></a> AddedNodesForRBE

```csharp
ReadOnlyCollection<Vector> AddedNodesForRBE { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<Vector\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_ArrudaBoyceMaterials"></a> ArrudaBoyceMaterials

```csharp
ReadOnlyCollection<MaterialAB> ArrudaBoyceMaterials { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MaterialAB](VM.Models.FE.Utilities.MaterialAB.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_AvailableAsNodal"></a> AvailableAsNodal

```csharp
bool AvailableAsNodal { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_FE_Utilities_IDFMFReader_Beam2Elements"></a> Beam2Elements

```csharp
ReadOnlyCollection<FEElement> Beam2Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_BeamLProperties"></a> BeamLProperties

```csharp
ReadOnlyCollection<FEPropertyBeamL> BeamLProperties { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEPropertyBeamL](VM.Models.FE.Utilities.FEPropertyBeamL.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_BeamProperties"></a> BeamProperties

```csharp
ReadOnlyCollection<FEPropertyBeam> BeamProperties { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEPropertyBeam](VM.Models.FE.Utilities.FEPropertyBeam.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_DFMFFileType"></a> DFMFFileType

```csharp
DFMFFileType DFMFFileType { get; }
```

#### Property Value

 [DFMFFileType](VM.Models.FE.Utilities.DFMFFileType.md)

### <a id="VM_Models_FE_Utilities_IDFMFReader_EdgeSets"></a> EdgeSets

```csharp
ReadOnlyCollection<NamedSelection> EdgeSets { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[NamedSelection](VM.Models.FE.Utilities.NamedSelection.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_FactorForce"></a> FactorForce

```csharp
double FactorForce { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Utilities_IDFMFReader_FactorLength"></a> FactorLength

```csharp
double FactorLength { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Utilities_IDFMFReader_FactorMass"></a> FactorMass

```csharp
double FactorMass { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Utilities_IDFMFReader_FactorScale"></a> FactorScale

```csharp
double FactorScale { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Utilities_IDFMFReader_FactorTime"></a> FactorTime

```csharp
double FactorTime { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Utilities_IDFMFReader_FilePath"></a> FilePath

```csharp
string FilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_FE_Utilities_IDFMFReader_ISOMaterials"></a> ISOMaterials

```csharp
ReadOnlyCollection<MaterialISO> ISOMaterials { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MaterialISO](VM.Models.FE.Utilities.MaterialISO.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_InterfacePoints"></a> InterfacePoints

```csharp
ReadOnlyCollection<Vector> InterfacePoints { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<Vector\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_InvariantFilePosition"></a> InvariantFilePosition

```csharp
long InvariantFilePosition { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_FE_Utilities_IDFMFReader_Level"></a> Level

```csharp
uint Level { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_FE_Utilities_IDFMFReader_MarkerPositions"></a> MarkerPositions

```csharp
ReadOnlyCollection<Vector> MarkerPositions { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<Vector\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_Mass"></a> Mass

```csharp
double Mass { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Utilities_IDFMFReader_MassCenter"></a> MassCenter

```csharp
Vector MassCenter { get; }
```

#### Property Value

 Vector

### <a id="VM_Models_FE_Utilities_IDFMFReader_MassInfoForOldVerArray"></a> MassInfoForOldVerArray

```csharp
ReadOnlyCollection<MassInfoForOldVer> MassInfoForOldVerArray { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MassInfoForOldVer](VM.Models.FE.Utilities.MassInfoForOldVer.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_MasterPoints"></a> MasterPoints

```csharp
ReadOnlyCollection<uint> MasterPoints { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_ModalType"></a> ModalType

```csharp
DFMFType ModalType { get; }
```

#### Property Value

 [DFMFType](VM.Models.FE.Utilities.DFMFType.md)

### <a id="VM_Models_FE_Utilities_IDFMFReader_Modes"></a> Modes

```csharp
ReadOnlyCollection<Mode> Modes { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[Mode](VM.Models.FE.Utilities.Mode.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_MomentOfInertia"></a> MomentOfInertia

```csharp
ReadOnlyCollection<double> MomentOfInertia { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_MooneyRivlinMaterials"></a> MooneyRivlinMaterials

```csharp
ReadOnlyCollection<MaterialMR> MooneyRivlinMaterials { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MaterialMR](VM.Models.FE.Utilities.MaterialMR.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_NBodies"></a> NBodies

```csharp
ReadOnlyCollection<NBody> NBodies { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[NBody](VM.Models.FE.Utilities.NBody.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_NeoHookeanMaterials"></a> NeoHookeanMaterials

```csharp
ReadOnlyCollection<MaterialNH> NeoHookeanMaterials { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MaterialNH](VM.Models.FE.Utilities.MaterialNH.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_NodePositions"></a> NodePositions

```csharp
ReadOnlyCollection<Vector> NodePositions { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<Vector\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_NumberOfDummyNode"></a> NumberOfDummyNode

```csharp
int NumberOfDummyNode { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Utilities_IDFMFReader_NumberOfInterfacePoints"></a> NumberOfInterfacePoints

```csharp
int NumberOfInterfacePoints { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Utilities_IDFMFReader_NumberOfMarkerPositions"></a> NumberOfMarkerPositions

```csharp
int NumberOfMarkerPositions { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Utilities_IDFMFReader_NumberOfMassInfosForOldVersion"></a> NumberOfMassInfosForOldVersion

```csharp
int NumberOfMassInfosForOldVersion { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Utilities_IDFMFReader_NumberOfMasterPoints"></a> NumberOfMasterPoints

```csharp
int NumberOfMasterPoints { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Utilities_IDFMFReader_NumberOfModes"></a> NumberOfModes

```csharp
int NumberOfModes { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Utilities_IDFMFReader_NumberOfNodes"></a> NumberOfNodes

```csharp
int NumberOfNodes { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Utilities_IDFMFReader_NumberOfTetraConnectivities"></a> NumberOfTetraConnectivities

```csharp
int NumberOfTetraConnectivities { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Utilities_IDFMFReader_NumberOfTriaConnectivities"></a> NumberOfTriaConnectivities

```csharp
int NumberOfTriaConnectivities { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Utilities_IDFMFReader_ORTHOMaterials"></a> ORTHOMaterials

```csharp
ReadOnlyCollection<MaterialORTHO> ORTHOMaterials { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MaterialORTHO](VM.Models.FE.Utilities.MaterialORTHO.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_OgdenMaterials"></a> OgdenMaterials

```csharp
ReadOnlyCollection<MaterialOG> OgdenMaterials { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MaterialOG](VM.Models.FE.Utilities.MaterialOG.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_PatchSets"></a> PatchSets

```csharp
ReadOnlyCollection<NamedSelection> PatchSets { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[NamedSelection](VM.Models.FE.Utilities.NamedSelection.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_RBE2s"></a> RBE2s

```csharp
ReadOnlyCollection<FEConstraintRBE> RBE2s { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEConstraintRBE](VM.Models.FE.Utilities.FEConstraintRBE.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_RBE3s"></a> RBE3s

```csharp
ReadOnlyCollection<FEConstraintRBE> RBE3s { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEConstraintRBE](VM.Models.FE.Utilities.FEConstraintRBE.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_Shell3Elements"></a> Shell3Elements

```csharp
ReadOnlyCollection<FEElement> Shell3Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_Shell4Elements"></a> Shell4Elements

```csharp
ReadOnlyCollection<FEElement> Shell4Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_Shell6Elements"></a> Shell6Elements

```csharp
ReadOnlyCollection<FEElement> Shell6Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_Shell8Elements"></a> Shell8Elements

```csharp
ReadOnlyCollection<FEElement> Shell8Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_ShellProperties"></a> ShellProperties

```csharp
ReadOnlyCollection<FEPropertyShell> ShellProperties { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEPropertyShell](VM.Models.FE.Utilities.FEPropertyShell.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_Solid10Elements"></a> Solid10Elements

```csharp
ReadOnlyCollection<FEElement> Solid10Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_Solid13Elements"></a> Solid13Elements

```csharp
ReadOnlyCollection<FEElement> Solid13Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_Solid15Elements"></a> Solid15Elements

```csharp
ReadOnlyCollection<FEElement> Solid15Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_Solid20Elements"></a> Solid20Elements

```csharp
ReadOnlyCollection<FEElement> Solid20Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_Solid4Elements"></a> Solid4Elements

```csharp
ReadOnlyCollection<FEElement> Solid4Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_Solid5Elements"></a> Solid5Elements

```csharp
ReadOnlyCollection<FEElement> Solid5Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_Solid6Elements"></a> Solid6Elements

```csharp
ReadOnlyCollection<FEElement> Solid6Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_Solid8Elements"></a> Solid8Elements

```csharp
ReadOnlyCollection<FEElement> Solid8Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_SolidProperties"></a> SolidProperties

```csharp
ReadOnlyCollection<FEPropertySolid> SolidProperties { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEPropertySolid](VM.Models.FE.Utilities.FEPropertySolid.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_TetraConnectivities"></a> TetraConnectivities

```csharp
ReadOnlyCollection<int> TetraConnectivities { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_Ties"></a> Ties

```csharp
ReadOnlyCollection<FEConstraintTie> Ties { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEConstraintTie](VM.Models.FE.Utilities.FEConstraintTie.md)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_TotalNodesForModal"></a> TotalNodesForModal

```csharp
int TotalNodesForModal { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Utilities_IDFMFReader_TriaConnectivities"></a> TriaConnectivities

```csharp
ReadOnlyCollection<int> TriaConnectivities { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_UnitForce"></a> UnitForce

```csharp
double UnitForce { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Utilities_IDFMFReader_UnitLength"></a> UnitLength

```csharp
double UnitLength { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Utilities_IDFMFReader_UnitMass"></a> UnitMass

```csharp
double UnitMass { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Utilities_IDFMFReader_UnitTime"></a> UnitTime

```csharp
double UnitTime { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Utilities_IDFMFReader_Version"></a> Version

```csharp
uint Version { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### <a id="VM_Models_FE_Utilities_IDFMFReader_EqualsPatch_VM_Models_FE_Utilities_FEPatchInfo___VM_Models_FE_Utilities_FEPatchInfo___"></a> EqualsPatch\(FEPatchInfo\[\], FEPatchInfo\[\]\)

```csharp
bool EqualsPatch(FEPatchInfo[] infoTarget, FEPatchInfo[] infoTool)
```

#### Parameters

`infoTarget` [FEPatchInfo](VM.Models.FE.Utilities.FEPatchInfo.md)\[\]

`infoTool` [FEPatchInfo](VM.Models.FE.Utilities.FEPatchInfo.md)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_FE_Utilities_IDFMFReader_GetMarkerInformation_VM_Vector_System_Int32_VM_Vector__VM_Vector__"></a> GetMarkerInformation\(Vector, int, out Vector, out Vector\)

```csharp
bool GetMarkerInformation(Vector position, int modeSequence, out Vector trans, out Vector rot)
```

#### Parameters

`position` Vector

`modeSequence` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`trans` Vector

`rot` Vector

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_FE_Utilities_IDFMFReader_GetModeInterPoint_VM_Vector_System_Int32_VM_Vector__VM_Vector__"></a> GetModeInterPoint\(Vector, int, out Vector, out Vector\)

```csharp
bool GetModeInterPoint(Vector position, int modeSequence, out Vector transMode, out Vector rotMode)
```

#### Parameters

`position` Vector

`modeSequence` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`transMode` Vector

`rotMode` Vector

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_FE_Utilities_IDFMFReader_GetRotationalShape_System_Int32_System_Int32_VM_Vector__"></a> GetRotationalShape\(int, int, out Vector\)

```csharp
void GetRotationalShape(int modeSeq, int nodeSeq, out Vector mode)
```

#### Parameters

`modeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`mode` Vector

### <a id="VM_Models_FE_Utilities_IDFMFReader_GetRotationalShape_System_Collections_Generic_ICollection_System_Int32__System_Int32_VM_Vector____"></a> GetRotationalShape\(ICollection<int\>, int, out Vector\[\]\)

```csharp
void GetRotationalShape(ICollection<int> colModeSeq, int nodeSeq, out Vector[] modes)
```

#### Parameters

`colModeSeq` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`nodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`modes` Vector\[\]

### <a id="VM_Models_FE_Utilities_IDFMFReader_GetStressShape_System_Int32_System_Int32_System_Double____"></a> GetStressShape\(int, int, out double\[\]\)

```csharp
void GetStressShape(int modeSeq, int nodeSeq, out double[] stress)
```

#### Parameters

`modeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`stress` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_FE_Utilities_IDFMFReader_GetStressShape_System_Collections_Generic_ICollection_System_Int32__System_Int32_System_Collections_Generic_ICollection_System_Double_____"></a> GetStressShape\(ICollection<int\>, int, out ICollection<double\[\]\>\)

```csharp
void GetStressShape(ICollection<int> colModeSeq, int nodeSeq, out ICollection<double[]> stress)
```

#### Parameters

`colModeSeq` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`nodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`stress` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_GetTranslationalShape_System_Int32_System_Int32_VM_Vector__"></a> GetTranslationalShape\(int, int, out Vector\)

```csharp
void GetTranslationalShape(int modeSeq, int nodeSeq, out Vector mode)
```

#### Parameters

`modeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`mode` Vector

### <a id="VM_Models_FE_Utilities_IDFMFReader_GetTranslationalShape_System_Collections_Generic_ICollection_System_Int32__System_Int32_VM_Vector____"></a> GetTranslationalShape\(ICollection<int\>, int, out Vector\[\]\)

```csharp
void GetTranslationalShape(ICollection<int> colModeSeq, int nodeSeq, out Vector[] modes)
```

#### Parameters

`colModeSeq` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`nodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`modes` Vector\[\]

### <a id="VM_Models_FE_Utilities_IDFMFReader_GetUnusedModeIndexes"></a> GetUnusedModeIndexes\(\)

```csharp
ReadOnlyCollection<int> GetUnusedModeIndexes()
```

#### Returns

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_FE_Utilities_IDFMFReader_SetUnusedModeIndexes_System_Collections_Generic_IEnumerable_System_Int32__"></a> SetUnusedModeIndexes\(IEnumerable<int\>\)

```csharp
void SetUnusedModeIndexes(IEnumerable<int> collection)
```

#### Parameters

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

