# Interface IDFMFReader

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

### AddedNodesForRBE

```csharp
ReadOnlyCollection<Vector> AddedNodesForRBE { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<Vector\>

### ArrudaBoyceMaterials

```csharp
ReadOnlyCollection<MaterialAB> ArrudaBoyceMaterials { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MaterialAB](VM.Models.FE.Utilities.MaterialAB.md)\>

### AvailableAsNodal

```csharp
bool AvailableAsNodal { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Beam2Elements

```csharp
ReadOnlyCollection<FEElement> Beam2Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### BeamLProperties

```csharp
ReadOnlyCollection<FEPropertyBeamL> BeamLProperties { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEPropertyBeamL](VM.Models.FE.Utilities.FEPropertyBeamL.md)\>

### BeamProperties

```csharp
ReadOnlyCollection<FEPropertyBeam> BeamProperties { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEPropertyBeam](VM.Models.FE.Utilities.FEPropertyBeam.md)\>

### EdgeSets

```csharp
ReadOnlyCollection<NamedSelection> EdgeSets { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[NamedSelection](VM.Models.FE.Utilities.NamedSelection.md)\>

### FactorForce

```csharp
double FactorForce { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### FactorLength

```csharp
double FactorLength { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### FactorMass

```csharp
double FactorMass { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### FactorScale

```csharp
double FactorScale { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### FactorTime

```csharp
double FactorTime { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### FilePath

```csharp
string FilePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ISOMaterials

```csharp
ReadOnlyCollection<MaterialISO> ISOMaterials { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MaterialISO](VM.Models.FE.Utilities.MaterialISO.md)\>

### InterfacePoints

```csharp
ReadOnlyCollection<Vector> InterfacePoints { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<Vector\>

### InvariantFilePosition

```csharp
long InvariantFilePosition { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### Level

```csharp
uint Level { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### MarkerPositions

```csharp
ReadOnlyCollection<Vector> MarkerPositions { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<Vector\>

### Mass

```csharp
double Mass { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### MassCenter

```csharp
Vector MassCenter { get; }
```

#### Property Value

 Vector

### MassInfoForOldVerArray

```csharp
ReadOnlyCollection<MassInfoForOldVer> MassInfoForOldVerArray { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MassInfoForOldVer](VM.Models.FE.Utilities.MassInfoForOldVer.md)\>

### MasterPoints

```csharp
ReadOnlyCollection<uint> MasterPoints { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>

### ModalType

```csharp
DFMFType ModalType { get; }
```

#### Property Value

 [DFMFType](VM.Models.FE.Utilities.DFMFType.md)

### Modes

```csharp
ReadOnlyCollection<Mode> Modes { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[Mode](VM.Models.FE.Utilities.Mode.md)\>

### MomentOfInertia

```csharp
ReadOnlyCollection<double> MomentOfInertia { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### MooneyRivlinMaterials

```csharp
ReadOnlyCollection<MaterialMR> MooneyRivlinMaterials { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MaterialMR](VM.Models.FE.Utilities.MaterialMR.md)\>

### NBodies

```csharp
ReadOnlyCollection<NBody> NBodies { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[NBody](VM.Models.FE.Utilities.NBody.md)\>

### NeoHookeanMaterials

```csharp
ReadOnlyCollection<MaterialNH> NeoHookeanMaterials { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MaterialNH](VM.Models.FE.Utilities.MaterialNH.md)\>

### NodePositions

```csharp
ReadOnlyCollection<Vector> NodePositions { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<Vector\>

### NumberOfDummyNode

```csharp
int NumberOfDummyNode { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfInterfacePoints

```csharp
int NumberOfInterfacePoints { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfMarkerPositions

```csharp
int NumberOfMarkerPositions { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfMassInfosForOldVersion

```csharp
int NumberOfMassInfosForOldVersion { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfMasterPoints

```csharp
int NumberOfMasterPoints { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfModes

```csharp
int NumberOfModes { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfNodes

```csharp
int NumberOfNodes { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfTetraConnectivities

```csharp
int NumberOfTetraConnectivities { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfTriaConnectivities

```csharp
int NumberOfTriaConnectivities { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ORTHOMaterials

```csharp
ReadOnlyCollection<MaterialORTHO> ORTHOMaterials { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MaterialORTHO](VM.Models.FE.Utilities.MaterialORTHO.md)\>

### OgdenMaterials

```csharp
ReadOnlyCollection<MaterialOG> OgdenMaterials { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MaterialOG](VM.Models.FE.Utilities.MaterialOG.md)\>

### PatchSets

```csharp
ReadOnlyCollection<NamedSelection> PatchSets { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[NamedSelection](VM.Models.FE.Utilities.NamedSelection.md)\>

### RBE2s

```csharp
ReadOnlyCollection<FEConstraintRBE> RBE2s { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEConstraintRBE](VM.Models.FE.Utilities.FEConstraintRBE.md)\>

### RBE3s

```csharp
ReadOnlyCollection<FEConstraintRBE> RBE3s { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEConstraintRBE](VM.Models.FE.Utilities.FEConstraintRBE.md)\>

### Shell3Elements

```csharp
ReadOnlyCollection<FEElement> Shell3Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### Shell4Elements

```csharp
ReadOnlyCollection<FEElement> Shell4Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### Shell6Elements

```csharp
ReadOnlyCollection<FEElement> Shell6Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### Shell8Elements

```csharp
ReadOnlyCollection<FEElement> Shell8Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### ShellProperties

```csharp
ReadOnlyCollection<FEPropertyShell> ShellProperties { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEPropertyShell](VM.Models.FE.Utilities.FEPropertyShell.md)\>

### Solid10Elements

```csharp
ReadOnlyCollection<FEElement> Solid10Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### Solid13Elements

```csharp
ReadOnlyCollection<FEElement> Solid13Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### Solid15Elements

```csharp
ReadOnlyCollection<FEElement> Solid15Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### Solid20Elements

```csharp
ReadOnlyCollection<FEElement> Solid20Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### Solid4Elements

```csharp
ReadOnlyCollection<FEElement> Solid4Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### Solid5Elements

```csharp
ReadOnlyCollection<FEElement> Solid5Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### Solid6Elements

```csharp
ReadOnlyCollection<FEElement> Solid6Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### Solid8Elements

```csharp
ReadOnlyCollection<FEElement> Solid8Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### SolidProperties

```csharp
ReadOnlyCollection<FEPropertySolid> SolidProperties { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEPropertySolid](VM.Models.FE.Utilities.FEPropertySolid.md)\>

### TetraConnectivities

```csharp
ReadOnlyCollection<int> TetraConnectivities { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### Ties

```csharp
ReadOnlyCollection<FEConstraintTie> Ties { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEConstraintTie](VM.Models.FE.Utilities.FEConstraintTie.md)\>

### TotalNodesForModal

```csharp
int TotalNodesForModal { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TriaConnectivities

```csharp
ReadOnlyCollection<int> TriaConnectivities { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### UnitForce

```csharp
double UnitForce { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### UnitLength

```csharp
double UnitLength { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### UnitMass

```csharp
double UnitMass { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### UnitTime

```csharp
double UnitTime { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Version

```csharp
uint Version { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### EqualsPatch\(FEPatchInfo\[\], FEPatchInfo\[\]\)

```csharp
bool EqualsPatch(FEPatchInfo[] infoTarget, FEPatchInfo[] infoTool)
```

#### Parameters

`infoTarget` [FEPatchInfo](VM.Models.FE.Utilities.FEPatchInfo.md)\[\]

`infoTool` [FEPatchInfo](VM.Models.FE.Utilities.FEPatchInfo.md)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetMarkerInformation\(Vector, int, out Vector, out Vector\)

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

### GetModeInterPoint\(Vector, int, out Vector, out Vector\)

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

### GetRotationalShape\(int, int, out Vector\)

```csharp
void GetRotationalShape(int modeSeq, int nodeSeq, out Vector mode)
```

#### Parameters

`modeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`mode` Vector

### GetRotationalShape\(ICollection<int\>, int, out Vector\[\]\)

```csharp
void GetRotationalShape(ICollection<int> colModeSeq, int nodeSeq, out Vector[] modes)
```

#### Parameters

`colModeSeq` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`nodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`modes` Vector\[\]

### GetStressShape\(int, int, out double\[\]\)

```csharp
void GetStressShape(int modeSeq, int nodeSeq, out double[] stress)
```

#### Parameters

`modeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`stress` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### GetStressShape\(ICollection<int\>, int, out ICollection<double\[\]\>\)

```csharp
void GetStressShape(ICollection<int> colModeSeq, int nodeSeq, out ICollection<double[]> stress)
```

#### Parameters

`colModeSeq` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`nodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`stress` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### GetTranslationalShape\(int, int, out Vector\)

```csharp
void GetTranslationalShape(int modeSeq, int nodeSeq, out Vector mode)
```

#### Parameters

`modeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`mode` Vector

### GetTranslationalShape\(ICollection<int\>, int, out Vector\[\]\)

```csharp
void GetTranslationalShape(ICollection<int> colModeSeq, int nodeSeq, out Vector[] modes)
```

#### Parameters

`colModeSeq` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`nodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`modes` Vector\[\]

### GetUnusedModeIndexes\(\)

```csharp
ReadOnlyCollection<int> GetUnusedModeIndexes()
```

#### Returns

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### SetUnusedModeIndexes\(IEnumerable<int\>\)

```csharp
void SetUnusedModeIndexes(IEnumerable<int> collection)
```

#### Parameters

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>


