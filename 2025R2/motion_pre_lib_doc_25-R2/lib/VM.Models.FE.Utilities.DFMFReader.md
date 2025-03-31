# Class DFMFReader

Namespace: [VM.Models.FE.Utilities](VM.Models.FE.Utilities.md)  
Assembly: VM.Models.FE.Utilities.dll  

```csharp
public abstract class DFMFReader : IDFMFReader
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DFMFReader](VM.Models.FE.Utilities.DFMFReader.md)

#### Derived

[DFMFManagedReader](VM.Models.FE.Utilities.DFMFManagedReader.md)

#### Implements

[IDFMFReader](VM.Models.FE.Utilities.IDFMFReader.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### DFMFReader\(\)

```csharp
protected DFMFReader()
```

## Fields

### V1Version

```csharp
protected const int V1Version = 2010011432
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### AddedNodesForRBE

```csharp
public ReadOnlyCollection<Vector> AddedNodesForRBE { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<Vector\>

### ArrudaBoyceMaterials

```csharp
public ReadOnlyCollection<MaterialAB> ArrudaBoyceMaterials { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MaterialAB](VM.Models.FE.Utilities.MaterialAB.md)\>

### AvailableAsNodal

```csharp
public bool AvailableAsNodal { get; protected set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Beam2Elements

```csharp
public ReadOnlyCollection<FEElement> Beam2Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### BeamLProperties

```csharp
public ReadOnlyCollection<FEPropertyBeamL> BeamLProperties { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEPropertyBeamL](VM.Models.FE.Utilities.FEPropertyBeamL.md)\>

### BeamProperties

```csharp
public ReadOnlyCollection<FEPropertyBeam> BeamProperties { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEPropertyBeam](VM.Models.FE.Utilities.FEPropertyBeam.md)\>

### DFMFFileType

```csharp
public DFMFFileType DFMFFileType { get; protected set; }
```

#### Property Value

 [DFMFFileType](VM.Models.FE.Utilities.DFMFFileType.md)

### EdgeSets

```csharp
public ReadOnlyCollection<NamedSelection> EdgeSets { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[NamedSelection](VM.Models.FE.Utilities.NamedSelection.md)\>

### FactorForce

```csharp
public double FactorForce { get; protected set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### FactorLength

```csharp
public double FactorLength { get; protected set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### FactorMass

```csharp
public double FactorMass { get; protected set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### FactorScale

```csharp
public double FactorScale { get; protected set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### FactorTime

```csharp
public double FactorTime { get; protected set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### FilePath

```csharp
public string FilePath { get; protected set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ISOMaterials

```csharp
public ReadOnlyCollection<MaterialISO> ISOMaterials { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MaterialISO](VM.Models.FE.Utilities.MaterialISO.md)\>

### InterfacePoints

```csharp
public ReadOnlyCollection<Vector> InterfacePoints { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<Vector\>

### InvariantFilePosition

```csharp
public long InvariantFilePosition { get; protected set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### Level

```csharp
public uint Level { get; protected set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### MarkerPositions

```csharp
public ReadOnlyCollection<Vector> MarkerPositions { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<Vector\>

### Mass

```csharp
public double Mass { get; protected set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### MassCenter

```csharp
public Vector MassCenter { get; protected set; }
```

#### Property Value

 Vector

### MassInfoForOldVerArray

```csharp
public ReadOnlyCollection<MassInfoForOldVer> MassInfoForOldVerArray { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MassInfoForOldVer](VM.Models.FE.Utilities.MassInfoForOldVer.md)\>

### MasterPoints

```csharp
public ReadOnlyCollection<uint> MasterPoints { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>

### ModalType

```csharp
public DFMFType ModalType { get; protected set; }
```

#### Property Value

 [DFMFType](VM.Models.FE.Utilities.DFMFType.md)

### Modes

```csharp
public ReadOnlyCollection<Mode> Modes { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[Mode](VM.Models.FE.Utilities.Mode.md)\>

### MomentOfInertia

```csharp
public ReadOnlyCollection<double> MomentOfInertia { get; protected set; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### MooneyRivlinMaterials

```csharp
public ReadOnlyCollection<MaterialMR> MooneyRivlinMaterials { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MaterialMR](VM.Models.FE.Utilities.MaterialMR.md)\>

### NBodies

```csharp
public ReadOnlyCollection<NBody> NBodies { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[NBody](VM.Models.FE.Utilities.NBody.md)\>

### NeoHookeanMaterials

```csharp
public ReadOnlyCollection<MaterialNH> NeoHookeanMaterials { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MaterialNH](VM.Models.FE.Utilities.MaterialNH.md)\>

### NodePositions

```csharp
public ReadOnlyCollection<Vector> NodePositions { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<Vector\>

### NumberOfDummyNode

```csharp
public int NumberOfDummyNode { get; protected set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfInterfacePoints

```csharp
public int NumberOfInterfacePoints { get; protected set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfMarkerPositions

```csharp
public int NumberOfMarkerPositions { get; protected set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfMassInfosForOldVersion

```csharp
public int NumberOfMassInfosForOldVersion { get; protected set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfMasterPoints

```csharp
public int NumberOfMasterPoints { get; protected set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfModes

```csharp
public int NumberOfModes { get; protected set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfNodes

```csharp
public int NumberOfNodes { get; protected set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfTetraConnectivities

```csharp
public int NumberOfTetraConnectivities { get; protected set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfTriaConnectivities

```csharp
public int NumberOfTriaConnectivities { get; protected set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### ORTHOMaterials

```csharp
public ReadOnlyCollection<MaterialORTHO> ORTHOMaterials { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MaterialORTHO](VM.Models.FE.Utilities.MaterialORTHO.md)\>

### OgdenMaterials

```csharp
public ReadOnlyCollection<MaterialOG> OgdenMaterials { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MaterialOG](VM.Models.FE.Utilities.MaterialOG.md)\>

### PatchSets

```csharp
public ReadOnlyCollection<NamedSelection> PatchSets { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[NamedSelection](VM.Models.FE.Utilities.NamedSelection.md)\>

### RBE2s

```csharp
public ReadOnlyCollection<FEConstraintRBE> RBE2s { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEConstraintRBE](VM.Models.FE.Utilities.FEConstraintRBE.md)\>

### RBE3s

```csharp
public ReadOnlyCollection<FEConstraintRBE> RBE3s { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEConstraintRBE](VM.Models.FE.Utilities.FEConstraintRBE.md)\>

### Shell3Elements

```csharp
public ReadOnlyCollection<FEElement> Shell3Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### Shell4Elements

```csharp
public ReadOnlyCollection<FEElement> Shell4Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### Shell6Elements

```csharp
public ReadOnlyCollection<FEElement> Shell6Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### Shell8Elements

```csharp
public ReadOnlyCollection<FEElement> Shell8Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### ShellProperties

```csharp
public ReadOnlyCollection<FEPropertyShell> ShellProperties { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEPropertyShell](VM.Models.FE.Utilities.FEPropertyShell.md)\>

### Solid10Elements

```csharp
public ReadOnlyCollection<FEElement> Solid10Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### Solid13Elements

```csharp
public ReadOnlyCollection<FEElement> Solid13Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### Solid15Elements

```csharp
public ReadOnlyCollection<FEElement> Solid15Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### Solid20Elements

```csharp
public ReadOnlyCollection<FEElement> Solid20Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### Solid4Elements

```csharp
public ReadOnlyCollection<FEElement> Solid4Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### Solid5Elements

```csharp
public ReadOnlyCollection<FEElement> Solid5Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### Solid6Elements

```csharp
public ReadOnlyCollection<FEElement> Solid6Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### Solid8Elements

```csharp
public ReadOnlyCollection<FEElement> Solid8Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### SolidProperties

```csharp
public ReadOnlyCollection<FEPropertySolid> SolidProperties { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEPropertySolid](VM.Models.FE.Utilities.FEPropertySolid.md)\>

### TetraConnectivities

```csharp
public ReadOnlyCollection<int> TetraConnectivities { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### Ties

```csharp
public ReadOnlyCollection<FEConstraintTie> Ties { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEConstraintTie](VM.Models.FE.Utilities.FEConstraintTie.md)\>

### TotalNodesForModal

```csharp
public int TotalNodesForModal { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### TriaConnectivities

```csharp
public ReadOnlyCollection<int> TriaConnectivities { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### UnitForce

```csharp
public double UnitForce { get; protected set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### UnitLength

```csharp
public double UnitLength { get; protected set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### UnitMass

```csharp
public double UnitMass { get; protected set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### UnitTime

```csharp
public double UnitTime { get; protected set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Version

```csharp
public uint Version { get; protected set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### CalcUnitFactor\(Unit\)

```csharp
protected void CalcUnitFactor(Unit unit)
```

#### Parameters

`unit` Unit

### Create\(string, Unit, bool\)

```csharp
public static IDFMFReader Create(string path, Unit unit, bool readAutomatically = true)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` Unit

`readAutomatically` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [IDFMFReader](VM.Models.FE.Utilities.IDFMFReader.md)

### Dispose\(bool\)

```csharp
protected virtual void Dispose(bool disposing)
```

#### Parameters

`disposing` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DisposeManagedResource\(\)

```csharp
protected virtual void DisposeManagedResource()
```

### DisposeNativeResources\(\)

```csharp
protected virtual void DisposeNativeResources()
```

### EqualsPatch\(FEPatchInfo\[\], FEPatchInfo\[\]\)

```csharp
public bool EqualsPatch(FEPatchInfo[] infoTarget, FEPatchInfo[] infoTool)
```

#### Parameters

`infoTarget` [FEPatchInfo](VM.Models.FE.Utilities.FEPatchInfo.md)\[\]

`infoTool` [FEPatchInfo](VM.Models.FE.Utilities.FEPatchInfo.md)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### \~DFMFReader\(\)

```csharp
protected ~DFMFReader()
```

### GetMarkerInformation\(Vector, int, out Vector, out Vector\)

```csharp
public bool GetMarkerInformation(Vector position, int modeSequence, out Vector vecTrans, out Vector vecRot)
```

#### Parameters

`position` Vector

`modeSequence` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`vecTrans` Vector

`vecRot` Vector

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetModeInterPoint\(Vector, int, out Vector, out Vector\)

```csharp
public bool GetModeInterPoint(Vector position, int modeSequence, out Vector vecTransMode, out Vector vecRotMode)
```

#### Parameters

`position` Vector

`modeSequence` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`vecTransMode` Vector

`vecRotMode` Vector

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetMultipleShapes\(ModeMeta, ICollection<int\>, int, double, out Vector\[\]\)

```csharp
protected abstract void GetMultipleShapes(DFMFReader.ModeMeta rotationalShape, ICollection<int> colModeSeq, int nodeSeq, double v, out Vector[] vecModes)
```

#### Parameters

`rotationalShape` [DFMFReader](VM.Models.FE.Utilities.DFMFReader.md).[ModeMeta](VM.Models.FE.Utilities.DFMFReader.ModeMeta.md)

`colModeSeq` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`nodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`v` [double](https://learn.microsoft.com/dotnet/api/system.double)

`vecModes` Vector\[\]

### GetMultipleStress\(ModeMeta, ICollection<int\>, int, double, out ICollection<double\[\]\>\)

```csharp
protected abstract void GetMultipleStress(DFMFReader.ModeMeta meta, ICollection<int> colModeSeq, int nodeSeq, double factor, out ICollection<double[]> stress)
```

#### Parameters

`meta` [DFMFReader](VM.Models.FE.Utilities.DFMFReader.md).[ModeMeta](VM.Models.FE.Utilities.DFMFReader.ModeMeta.md)

`colModeSeq` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`nodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`factor` [double](https://learn.microsoft.com/dotnet/api/system.double)

`stress` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### GetPointInformation\(ICollection<Vector\>, ModeMeta, Vector, int, out Vector, out Vector\)

```csharp
protected abstract bool GetPointInformation(ICollection<Vector> points, DFMFReader.ModeMeta meta, Vector position, int modeSequence, out Vector vecTra, out Vector vecRot)
```

#### Parameters

`points` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<Vector\>

`meta` [DFMFReader](VM.Models.FE.Utilities.DFMFReader.md).[ModeMeta](VM.Models.FE.Utilities.DFMFReader.ModeMeta.md)

`position` Vector

`modeSequence` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`vecTra` Vector

`vecRot` Vector

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetPointInformationImpl\(ICollection<Vector\>, ModeMeta, Vector, int, out Vector, out Vector, Func<int, \(Vector, Vector\)\>\)

```csharp
protected bool GetPointInformationImpl(ICollection<Vector> points, DFMFReader.ModeMeta meta, Vector position, int modeSequence, out Vector vecTra, out Vector vecRot, Func<int, (Vector, Vector)> functionToRead)
```

#### Parameters

`points` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<Vector\>

`meta` [DFMFReader](VM.Models.FE.Utilities.DFMFReader.md).[ModeMeta](VM.Models.FE.Utilities.DFMFReader.ModeMeta.md)

`position` Vector

`modeSequence` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`vecTra` Vector

`vecRot` Vector

`functionToRead` [Func](https://learn.microsoft.com/dotnet/api/system.func\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), \(Vector, Vector\)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetRotationalShape\(int, int, out Vector\)

```csharp
public void GetRotationalShape(int nModeSeq, int nNodeSeq, out Vector vecMode)
```

#### Parameters

`nModeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nNodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`vecMode` Vector

### GetRotationalShape\(ICollection<int\>, int, out Vector\[\]\)

```csharp
public void GetRotationalShape(ICollection<int> colModeSeq, int nNodeSeq, out Vector[] arVecMode)
```

#### Parameters

`colModeSeq` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`nNodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`arVecMode` Vector\[\]

### GetSingleShape\(ModeMeta, int, int, double, out Vector\)

```csharp
protected abstract void GetSingleShape(DFMFReader.ModeMeta meta, int modeSeq, int nodeSeq, double factor, out Vector mode)
```

#### Parameters

`meta` [DFMFReader](VM.Models.FE.Utilities.DFMFReader.md).[ModeMeta](VM.Models.FE.Utilities.DFMFReader.ModeMeta.md)

`modeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`factor` [double](https://learn.microsoft.com/dotnet/api/system.double)

`mode` Vector

### GetSingleStress\(ModeMeta, int, int, double, out double\[\]\)

```csharp
protected abstract void GetSingleStress(DFMFReader.ModeMeta meta, int modeSeq, int nodeSeq, double factor, out double[] stress)
```

#### Parameters

`meta` [DFMFReader](VM.Models.FE.Utilities.DFMFReader.md).[ModeMeta](VM.Models.FE.Utilities.DFMFReader.ModeMeta.md)

`modeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`factor` [double](https://learn.microsoft.com/dotnet/api/system.double)

`stress` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### GetStressShape\(int, int, out double\[\]\)

```csharp
public void GetStressShape(int modeSeq, int nodeSeq, out double[] stress)
```

#### Parameters

`modeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`stress` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### GetStressShape\(ICollection<int\>, int, out ICollection<double\[\]\>\)

```csharp
public void GetStressShape(ICollection<int> colModeSeq, int nodeSeq, out ICollection<double[]> stress)
```

#### Parameters

`colModeSeq` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`nodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`stress` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### GetTranslationalShape\(int, int, out Vector\)

```csharp
public void GetTranslationalShape(int nModeSeq, int nNodeSeq, out Vector vecMode)
```

#### Parameters

`nModeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nNodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`vecMode` Vector

### GetTranslationalShape\(ICollection<int\>, int, out Vector\[\]\)

```csharp
public void GetTranslationalShape(ICollection<int> colModeSeq, int nNodeSeq, out Vector[] arVecMode)
```

#### Parameters

`colModeSeq` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`nNodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`arVecMode` Vector\[\]

### GetUnusedModeIndexes\(\)

```csharp
public ReadOnlyCollection<int> GetUnusedModeIndexes()
```

#### Returns

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### ImportImpl\(string, Unit\)

```csharp
protected abstract void ImportImpl(string strModeFileName, Unit unit)
```

#### Parameters

`strModeFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` Unit

### ReadConstraintInformation\(\)

```csharp
protected abstract void ReadConstraintInformation()
```

### ReadInterfacePoints\(\)

```csharp
protected abstract void ReadInterfacePoints()
```

### ReadMarkerPositions\(\)

```csharp
protected abstract void ReadMarkerPositions()
```

### ReadMassInfoForOldVer\(\)

```csharp
protected abstract void ReadMassInfoForOldVer()
```

### ReadMasterPoints\(\)

```csharp
protected abstract void ReadMasterPoints()
```

### ReadMaterialInformation\(\)

```csharp
protected abstract void ReadMaterialInformation()
```

### ReadModes\(\)

```csharp
protected abstract void ReadModes()
```

### ReadNBodyInformations\(\)

```csharp
protected abstract void ReadNBodyInformations()
```

### ReadNamedSelectionFromConstraintInformation\(\)

```csharp
protected void ReadNamedSelectionFromConstraintInformation()
```

### ReadNamedSelectionInformation\(\)

```csharp
protected abstract void ReadNamedSelectionInformation()
```

### ReadPropertyInformation\(\)

```csharp
protected abstract void ReadPropertyInformation()
```

### SetConstraintInformation\(FEConstraintRBE\[\], FEConstraintRBE\[\], FEConstraintTie\[\]\)

```csharp
protected void SetConstraintInformation(FEConstraintRBE[] rbe2s, FEConstraintRBE[] rbe3s, FEConstraintTie[] ties)
```

#### Parameters

`rbe2s` [FEConstraintRBE](VM.Models.FE.Utilities.FEConstraintRBE.md)\[\]

`rbe3s` [FEConstraintRBE](VM.Models.FE.Utilities.FEConstraintRBE.md)\[\]

`ties` [FEConstraintTie](VM.Models.FE.Utilities.FEConstraintTie.md)\[\]

### SetInterfacePoints\(Vector\[\]\)

```csharp
protected void SetInterfacePoints(Vector[] points)
```

#### Parameters

`points` Vector\[\]

### SetMarkerPositions\(Vector\[\]\)

```csharp
protected void SetMarkerPositions(Vector[] points)
```

#### Parameters

`points` Vector\[\]

### SetMassInfosForOldVer\(MassInfoForOldVer\[\]\)

```csharp
protected void SetMassInfosForOldVer(MassInfoForOldVer[] infos)
```

#### Parameters

`infos` [MassInfoForOldVer](VM.Models.FE.Utilities.MassInfoForOldVer.md)\[\]

### SetMasterPoints\(uint\[\]\)

```csharp
protected void SetMasterPoints(uint[] points)
```

#### Parameters

`points` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

### SetMaterialInformation\(MaterialISO\[\], MaterialORTHO\[\], MaterialAB\[\], MaterialNH\[\], MaterialMR\[\], MaterialOG\[\]\)

```csharp
protected void SetMaterialInformation(MaterialISO[] isoMaterials, MaterialORTHO[] orthoMaterials, MaterialAB[] arrudaboyceMaterials, MaterialNH[] neohookeanMaterials, MaterialMR[] mooneyrivlinMaterials, MaterialOG[] ogdenMaterials)
```

#### Parameters

`isoMaterials` [MaterialISO](VM.Models.FE.Utilities.MaterialISO.md)\[\]

`orthoMaterials` [MaterialORTHO](VM.Models.FE.Utilities.MaterialORTHO.md)\[\]

`arrudaboyceMaterials` [MaterialAB](VM.Models.FE.Utilities.MaterialAB.md)\[\]

`neohookeanMaterials` [MaterialNH](VM.Models.FE.Utilities.MaterialNH.md)\[\]

`mooneyrivlinMaterials` [MaterialMR](VM.Models.FE.Utilities.MaterialMR.md)\[\]

`ogdenMaterials` [MaterialOG](VM.Models.FE.Utilities.MaterialOG.md)\[\]

### SetModes\(Mode\[\]\)

```csharp
protected void SetModes(Mode[] modes)
```

#### Parameters

`modes` [Mode](VM.Models.FE.Utilities.Mode.md)\[\]

### SetNBodyInformations\(Vector\[\], int\[\], int\[\]\)

```csharp
protected void SetNBodyInformations(Vector[] nodes, int[] triaConnectivities, int[] tetraConnectivities)
```

#### Parameters

`nodes` Vector\[\]

`triaConnectivities` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

`tetraConnectivities` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### SetNBodyInformations\(NBody\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\]\)

```csharp
protected void SetNBodyInformations(NBody[] nodes, FEElement[] beam2Elements, FEElement[] shell3Elements, FEElement[] shell4Elements, FEElement[] shell6Elements, FEElement[] shell8Elements, FEElement[] solid4Elements, FEElement[] solid5Elements, FEElement[] solid6Elements, FEElement[] solid8Elements, FEElement[] solid10Elements, FEElement[] solid13Elements, FEElement[] solid15Elements, FEElement[] solid20Elements)
```

#### Parameters

`nodes` [NBody](VM.Models.FE.Utilities.NBody.md)\[\]

`beam2Elements` [FEElement](VM.Models.FE.Utilities.FEElement.md)\[\]

`shell3Elements` [FEElement](VM.Models.FE.Utilities.FEElement.md)\[\]

`shell4Elements` [FEElement](VM.Models.FE.Utilities.FEElement.md)\[\]

`shell6Elements` [FEElement](VM.Models.FE.Utilities.FEElement.md)\[\]

`shell8Elements` [FEElement](VM.Models.FE.Utilities.FEElement.md)\[\]

`solid4Elements` [FEElement](VM.Models.FE.Utilities.FEElement.md)\[\]

`solid5Elements` [FEElement](VM.Models.FE.Utilities.FEElement.md)\[\]

`solid6Elements` [FEElement](VM.Models.FE.Utilities.FEElement.md)\[\]

`solid8Elements` [FEElement](VM.Models.FE.Utilities.FEElement.md)\[\]

`solid10Elements` [FEElement](VM.Models.FE.Utilities.FEElement.md)\[\]

`solid13Elements` [FEElement](VM.Models.FE.Utilities.FEElement.md)\[\]

`solid15Elements` [FEElement](VM.Models.FE.Utilities.FEElement.md)\[\]

`solid20Elements` [FEElement](VM.Models.FE.Utilities.FEElement.md)\[\]

### SetNamedSelectionInformation\(NamedSelection\[\], NamedSelection\[\]\)

```csharp
protected void SetNamedSelectionInformation(NamedSelection[] patchSets, NamedSelection[] edgeSets)
```

#### Parameters

`patchSets` [NamedSelection](VM.Models.FE.Utilities.NamedSelection.md)\[\]

`edgeSets` [NamedSelection](VM.Models.FE.Utilities.NamedSelection.md)\[\]

### SetNodesForRBE\(Vector\[\]\)

```csharp
protected void SetNodesForRBE(Vector[] addedNodesForRBE)
```

#### Parameters

`addedNodesForRBE` Vector\[\]

### SetPropertyInformation\(FEPropertyBeam\[\], FEPropertyBeamL\[\], FEPropertyShell\[\], FEPropertySolid\[\]\)

```csharp
protected void SetPropertyInformation(FEPropertyBeam[] beamProperties, FEPropertyBeamL[] beamLProperties, FEPropertyShell[] shellProperties, FEPropertySolid[] solidProperties)
```

#### Parameters

`beamProperties` [FEPropertyBeam](VM.Models.FE.Utilities.FEPropertyBeam.md)\[\]

`beamLProperties` [FEPropertyBeamL](VM.Models.FE.Utilities.FEPropertyBeamL.md)\[\]

`shellProperties` [FEPropertyShell](VM.Models.FE.Utilities.FEPropertyShell.md)\[\]

`solidProperties` [FEPropertySolid](VM.Models.FE.Utilities.FEPropertySolid.md)\[\]

### SetUnusedModeIndexes\(IEnumerable<int\>\)

```csharp
public void SetUnusedModeIndexes(IEnumerable<int> collection)
```

#### Parameters

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>


