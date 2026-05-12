#  Class DFMFReader

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

### <a id="VM_Models_FE_Utilities_DFMFReader__ctor"></a> DFMFReader\(\)

```csharp
protected DFMFReader()
```

## Fields

### <a id="VM_Models_FE_Utilities_DFMFReader_V1Version"></a> V1Version

```csharp
protected const int V1Version = 2010011432
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### <a id="VM_Models_FE_Utilities_DFMFReader_AddedNodesForRBE"></a> AddedNodesForRBE

```csharp
public ReadOnlyCollection<Vector> AddedNodesForRBE { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<Vector\>

### <a id="VM_Models_FE_Utilities_DFMFReader_ArrudaBoyceMaterials"></a> ArrudaBoyceMaterials

```csharp
public ReadOnlyCollection<MaterialAB> ArrudaBoyceMaterials { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MaterialAB](VM.Models.FE.Utilities.MaterialAB.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_AvailableAsNodal"></a> AvailableAsNodal

```csharp
public bool AvailableAsNodal { get; protected set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_FE_Utilities_DFMFReader_Beam2Elements"></a> Beam2Elements

```csharp
public ReadOnlyCollection<FEElement> Beam2Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_BeamLProperties"></a> BeamLProperties

```csharp
public ReadOnlyCollection<FEPropertyBeamL> BeamLProperties { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEPropertyBeamL](VM.Models.FE.Utilities.FEPropertyBeamL.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_BeamProperties"></a> BeamProperties

```csharp
public ReadOnlyCollection<FEPropertyBeam> BeamProperties { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEPropertyBeam](VM.Models.FE.Utilities.FEPropertyBeam.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_DFMFFileType"></a> DFMFFileType

```csharp
public DFMFFileType DFMFFileType { get; protected set; }
```

#### Property Value

 [DFMFFileType](VM.Models.FE.Utilities.DFMFFileType.md)

### <a id="VM_Models_FE_Utilities_DFMFReader_EdgeSets"></a> EdgeSets

```csharp
public ReadOnlyCollection<NamedSelection> EdgeSets { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[NamedSelection](VM.Models.FE.Utilities.NamedSelection.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_FactorForce"></a> FactorForce

```csharp
public double FactorForce { get; protected set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Utilities_DFMFReader_FactorLength"></a> FactorLength

```csharp
public double FactorLength { get; protected set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Utilities_DFMFReader_FactorMass"></a> FactorMass

```csharp
public double FactorMass { get; protected set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Utilities_DFMFReader_FactorScale"></a> FactorScale

```csharp
public double FactorScale { get; protected set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Utilities_DFMFReader_FactorTime"></a> FactorTime

```csharp
public double FactorTime { get; protected set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Utilities_DFMFReader_FilePath"></a> FilePath

```csharp
public string FilePath { get; protected set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_FE_Utilities_DFMFReader_ISOMaterials"></a> ISOMaterials

```csharp
public ReadOnlyCollection<MaterialISO> ISOMaterials { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MaterialISO](VM.Models.FE.Utilities.MaterialISO.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_InterfacePoints"></a> InterfacePoints

```csharp
public ReadOnlyCollection<Vector> InterfacePoints { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<Vector\>

### <a id="VM_Models_FE_Utilities_DFMFReader_InvariantFilePosition"></a> InvariantFilePosition

```csharp
public long InvariantFilePosition { get; protected set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="VM_Models_FE_Utilities_DFMFReader_Level"></a> Level

```csharp
public uint Level { get; protected set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_FE_Utilities_DFMFReader_MarkerPositions"></a> MarkerPositions

```csharp
public ReadOnlyCollection<Vector> MarkerPositions { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<Vector\>

### <a id="VM_Models_FE_Utilities_DFMFReader_Mass"></a> Mass

```csharp
public double Mass { get; protected set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Utilities_DFMFReader_MassCenter"></a> MassCenter

```csharp
public Vector MassCenter { get; protected set; }
```

#### Property Value

 Vector

### <a id="VM_Models_FE_Utilities_DFMFReader_MassInfoForOldVerArray"></a> MassInfoForOldVerArray

```csharp
public ReadOnlyCollection<MassInfoForOldVer> MassInfoForOldVerArray { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MassInfoForOldVer](VM.Models.FE.Utilities.MassInfoForOldVer.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_MasterPoints"></a> MasterPoints

```csharp
public ReadOnlyCollection<uint> MasterPoints { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_ModalType"></a> ModalType

```csharp
public DFMFType ModalType { get; protected set; }
```

#### Property Value

 [DFMFType](VM.Models.FE.Utilities.DFMFType.md)

### <a id="VM_Models_FE_Utilities_DFMFReader_Modes"></a> Modes

```csharp
public ReadOnlyCollection<Mode> Modes { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[Mode](VM.Models.FE.Utilities.Mode.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_MomentOfInertia"></a> MomentOfInertia

```csharp
public ReadOnlyCollection<double> MomentOfInertia { get; protected set; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_MooneyRivlinMaterials"></a> MooneyRivlinMaterials

```csharp
public ReadOnlyCollection<MaterialMR> MooneyRivlinMaterials { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MaterialMR](VM.Models.FE.Utilities.MaterialMR.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_NBodies"></a> NBodies

```csharp
public ReadOnlyCollection<NBody> NBodies { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[NBody](VM.Models.FE.Utilities.NBody.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_NeoHookeanMaterials"></a> NeoHookeanMaterials

```csharp
public ReadOnlyCollection<MaterialNH> NeoHookeanMaterials { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MaterialNH](VM.Models.FE.Utilities.MaterialNH.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_NodePositions"></a> NodePositions

```csharp
public ReadOnlyCollection<Vector> NodePositions { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<Vector\>

### <a id="VM_Models_FE_Utilities_DFMFReader_NumberOfDummyNode"></a> NumberOfDummyNode

```csharp
public int NumberOfDummyNode { get; protected set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Utilities_DFMFReader_NumberOfInterfacePoints"></a> NumberOfInterfacePoints

```csharp
public int NumberOfInterfacePoints { get; protected set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Utilities_DFMFReader_NumberOfMarkerPositions"></a> NumberOfMarkerPositions

```csharp
public int NumberOfMarkerPositions { get; protected set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Utilities_DFMFReader_NumberOfMassInfosForOldVersion"></a> NumberOfMassInfosForOldVersion

```csharp
public int NumberOfMassInfosForOldVersion { get; protected set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Utilities_DFMFReader_NumberOfMasterPoints"></a> NumberOfMasterPoints

```csharp
public int NumberOfMasterPoints { get; protected set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Utilities_DFMFReader_NumberOfModes"></a> NumberOfModes

```csharp
public int NumberOfModes { get; protected set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Utilities_DFMFReader_NumberOfNodes"></a> NumberOfNodes

```csharp
public int NumberOfNodes { get; protected set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Utilities_DFMFReader_NumberOfTetraConnectivities"></a> NumberOfTetraConnectivities

```csharp
public int NumberOfTetraConnectivities { get; protected set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Utilities_DFMFReader_NumberOfTriaConnectivities"></a> NumberOfTriaConnectivities

```csharp
public int NumberOfTriaConnectivities { get; protected set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Utilities_DFMFReader_ORTHOMaterials"></a> ORTHOMaterials

```csharp
public ReadOnlyCollection<MaterialORTHO> ORTHOMaterials { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MaterialORTHO](VM.Models.FE.Utilities.MaterialORTHO.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_OgdenMaterials"></a> OgdenMaterials

```csharp
public ReadOnlyCollection<MaterialOG> OgdenMaterials { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[MaterialOG](VM.Models.FE.Utilities.MaterialOG.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_PatchSets"></a> PatchSets

```csharp
public ReadOnlyCollection<NamedSelection> PatchSets { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[NamedSelection](VM.Models.FE.Utilities.NamedSelection.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_RBE2s"></a> RBE2s

```csharp
public ReadOnlyCollection<FEConstraintRBE> RBE2s { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEConstraintRBE](VM.Models.FE.Utilities.FEConstraintRBE.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_RBE3s"></a> RBE3s

```csharp
public ReadOnlyCollection<FEConstraintRBE> RBE3s { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEConstraintRBE](VM.Models.FE.Utilities.FEConstraintRBE.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_Shell3Elements"></a> Shell3Elements

```csharp
public ReadOnlyCollection<FEElement> Shell3Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_Shell4Elements"></a> Shell4Elements

```csharp
public ReadOnlyCollection<FEElement> Shell4Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_Shell6Elements"></a> Shell6Elements

```csharp
public ReadOnlyCollection<FEElement> Shell6Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_Shell8Elements"></a> Shell8Elements

```csharp
public ReadOnlyCollection<FEElement> Shell8Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_ShellProperties"></a> ShellProperties

```csharp
public ReadOnlyCollection<FEPropertyShell> ShellProperties { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEPropertyShell](VM.Models.FE.Utilities.FEPropertyShell.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_Solid10Elements"></a> Solid10Elements

```csharp
public ReadOnlyCollection<FEElement> Solid10Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_Solid13Elements"></a> Solid13Elements

```csharp
public ReadOnlyCollection<FEElement> Solid13Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_Solid15Elements"></a> Solid15Elements

```csharp
public ReadOnlyCollection<FEElement> Solid15Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_Solid20Elements"></a> Solid20Elements

```csharp
public ReadOnlyCollection<FEElement> Solid20Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_Solid4Elements"></a> Solid4Elements

```csharp
public ReadOnlyCollection<FEElement> Solid4Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_Solid5Elements"></a> Solid5Elements

```csharp
public ReadOnlyCollection<FEElement> Solid5Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_Solid6Elements"></a> Solid6Elements

```csharp
public ReadOnlyCollection<FEElement> Solid6Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_Solid8Elements"></a> Solid8Elements

```csharp
public ReadOnlyCollection<FEElement> Solid8Elements { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEElement](VM.Models.FE.Utilities.FEElement.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_SolidProperties"></a> SolidProperties

```csharp
public ReadOnlyCollection<FEPropertySolid> SolidProperties { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEPropertySolid](VM.Models.FE.Utilities.FEPropertySolid.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_TetraConnectivities"></a> TetraConnectivities

```csharp
public ReadOnlyCollection<int> TetraConnectivities { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_Ties"></a> Ties

```csharp
public ReadOnlyCollection<FEConstraintTie> Ties { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[FEConstraintTie](VM.Models.FE.Utilities.FEConstraintTie.md)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_TotalNodesForModal"></a> TotalNodesForModal

```csharp
public int TotalNodesForModal { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Utilities_DFMFReader_TriaConnectivities"></a> TriaConnectivities

```csharp
public ReadOnlyCollection<int> TriaConnectivities { get; }
```

#### Property Value

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_UnitForce"></a> UnitForce

```csharp
public double UnitForce { get; protected set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Utilities_DFMFReader_UnitLength"></a> UnitLength

```csharp
public double UnitLength { get; protected set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Utilities_DFMFReader_UnitMass"></a> UnitMass

```csharp
public double UnitMass { get; protected set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Utilities_DFMFReader_UnitTime"></a> UnitTime

```csharp
public double UnitTime { get; protected set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Utilities_DFMFReader_Version"></a> Version

```csharp
public uint Version { get; protected set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### <a id="VM_Models_FE_Utilities_DFMFReader_CalcUnitFactor_VM_Unit_"></a> CalcUnitFactor\(Unit\)

```csharp
protected void CalcUnitFactor(Unit unit)
```

#### Parameters

`unit` Unit

### <a id="VM_Models_FE_Utilities_DFMFReader_Create_System_String_VM_Unit_System_Boolean_"></a> Create\(string, Unit, bool\)

```csharp
public static IDFMFReader Create(string path, Unit unit, bool readAutomatically = true)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` Unit

`readAutomatically` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [IDFMFReader](VM.Models.FE.Utilities.IDFMFReader.md)

### <a id="VM_Models_FE_Utilities_DFMFReader_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
protected virtual void Dispose(bool disposing)
```

#### Parameters

`disposing` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_FE_Utilities_DFMFReader_DisposeManagedResource"></a> DisposeManagedResource\(\)

```csharp
protected virtual void DisposeManagedResource()
```

### <a id="VM_Models_FE_Utilities_DFMFReader_DisposeNativeResources"></a> DisposeNativeResources\(\)

```csharp
protected virtual void DisposeNativeResources()
```

### <a id="VM_Models_FE_Utilities_DFMFReader_EqualsPatch_VM_Models_FE_Utilities_FEPatchInfo___VM_Models_FE_Utilities_FEPatchInfo___"></a> EqualsPatch\(FEPatchInfo\[\], FEPatchInfo\[\]\)

```csharp
public bool EqualsPatch(FEPatchInfo[] infoTarget, FEPatchInfo[] infoTool)
```

#### Parameters

`infoTarget` [FEPatchInfo](VM.Models.FE.Utilities.FEPatchInfo.md)\[\]

`infoTool` [FEPatchInfo](VM.Models.FE.Utilities.FEPatchInfo.md)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_FE_Utilities_DFMFReader_Finalize"></a> \~DFMFReader\(\)

```csharp
protected ~DFMFReader()
```

### <a id="VM_Models_FE_Utilities_DFMFReader_GetMarkerInformation_VM_Vector_System_Int32_VM_Vector__VM_Vector__"></a> GetMarkerInformation\(Vector, int, out Vector, out Vector\)

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

### <a id="VM_Models_FE_Utilities_DFMFReader_GetModeInterPoint_VM_Vector_System_Int32_VM_Vector__VM_Vector__"></a> GetModeInterPoint\(Vector, int, out Vector, out Vector\)

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

### <a id="VM_Models_FE_Utilities_DFMFReader_GetMultipleShapes_VM_Models_FE_Utilities_DFMFReader_ModeMeta_System_Collections_Generic_ICollection_System_Int32__System_Int32_System_Double_VM_Vector____"></a> GetMultipleShapes\(ModeMeta, ICollection<int\>, int, double, out Vector\[\]\)

```csharp
protected abstract void GetMultipleShapes(DFMFReader.ModeMeta rotationalShape, ICollection<int> colModeSeq, int nodeSeq, double v, out Vector[] vecModes)
```

#### Parameters

`rotationalShape` [DFMFReader](VM.Models.FE.Utilities.DFMFReader.md).[ModeMeta](VM.Models.FE.Utilities.DFMFReader.ModeMeta.md)

`colModeSeq` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`nodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`v` [double](https://learn.microsoft.com/dotnet/api/system.double)

`vecModes` Vector\[\]

### <a id="VM_Models_FE_Utilities_DFMFReader_GetMultipleStress_VM_Models_FE_Utilities_DFMFReader_ModeMeta_System_Collections_Generic_ICollection_System_Int32__System_Int32_System_Double_System_Collections_Generic_ICollection_System_Double_____"></a> GetMultipleStress\(ModeMeta, ICollection<int\>, int, double, out ICollection<double\[\]\>\)

```csharp
protected abstract void GetMultipleStress(DFMFReader.ModeMeta meta, ICollection<int> colModeSeq, int nodeSeq, double factor, out ICollection<double[]> stress)
```

#### Parameters

`meta` [DFMFReader](VM.Models.FE.Utilities.DFMFReader.md).[ModeMeta](VM.Models.FE.Utilities.DFMFReader.ModeMeta.md)

`colModeSeq` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`nodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`factor` [double](https://learn.microsoft.com/dotnet/api/system.double)

`stress` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_FE_Utilities_DFMFReader_GetPointInformation_System_Collections_Generic_ICollection_VM_Vector__VM_Models_FE_Utilities_DFMFReader_ModeMeta_VM_Vector_System_Int32_VM_Vector__VM_Vector__"></a> GetPointInformation\(ICollection<Vector\>, ModeMeta, Vector, int, out Vector, out Vector\)

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

### <a id="VM_Models_FE_Utilities_DFMFReader_GetPointInformationImpl_System_Collections_Generic_ICollection_VM_Vector__VM_Models_FE_Utilities_DFMFReader_ModeMeta_VM_Vector_System_Int32_VM_Vector__VM_Vector__System_Func_System_Int32_System_ValueTuple_VM_Vector_VM_Vector___"></a> GetPointInformationImpl\(ICollection<Vector\>, ModeMeta, Vector, int, out Vector, out Vector, Func<int, \(Vector, Vector\)\>\)

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

### <a id="VM_Models_FE_Utilities_DFMFReader_GetRotationalShape_System_Int32_System_Int32_VM_Vector__"></a> GetRotationalShape\(int, int, out Vector\)

```csharp
public void GetRotationalShape(int nModeSeq, int nNodeSeq, out Vector vecMode)
```

#### Parameters

`nModeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nNodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`vecMode` Vector

### <a id="VM_Models_FE_Utilities_DFMFReader_GetRotationalShape_System_Collections_Generic_ICollection_System_Int32__System_Int32_VM_Vector____"></a> GetRotationalShape\(ICollection<int\>, int, out Vector\[\]\)

```csharp
public void GetRotationalShape(ICollection<int> colModeSeq, int nNodeSeq, out Vector[] arVecMode)
```

#### Parameters

`colModeSeq` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`nNodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`arVecMode` Vector\[\]

### <a id="VM_Models_FE_Utilities_DFMFReader_GetSingleShape_VM_Models_FE_Utilities_DFMFReader_ModeMeta_System_Int32_System_Int32_System_Double_VM_Vector__"></a> GetSingleShape\(ModeMeta, int, int, double, out Vector\)

```csharp
protected abstract void GetSingleShape(DFMFReader.ModeMeta meta, int modeSeq, int nodeSeq, double factor, out Vector mode)
```

#### Parameters

`meta` [DFMFReader](VM.Models.FE.Utilities.DFMFReader.md).[ModeMeta](VM.Models.FE.Utilities.DFMFReader.ModeMeta.md)

`modeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`factor` [double](https://learn.microsoft.com/dotnet/api/system.double)

`mode` Vector

### <a id="VM_Models_FE_Utilities_DFMFReader_GetSingleStress_VM_Models_FE_Utilities_DFMFReader_ModeMeta_System_Int32_System_Int32_System_Double_System_Double____"></a> GetSingleStress\(ModeMeta, int, int, double, out double\[\]\)

```csharp
protected abstract void GetSingleStress(DFMFReader.ModeMeta meta, int modeSeq, int nodeSeq, double factor, out double[] stress)
```

#### Parameters

`meta` [DFMFReader](VM.Models.FE.Utilities.DFMFReader.md).[ModeMeta](VM.Models.FE.Utilities.DFMFReader.ModeMeta.md)

`modeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`factor` [double](https://learn.microsoft.com/dotnet/api/system.double)

`stress` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_FE_Utilities_DFMFReader_GetStressShape_System_Int32_System_Int32_System_Double____"></a> GetStressShape\(int, int, out double\[\]\)

```csharp
public void GetStressShape(int modeSeq, int nodeSeq, out double[] stress)
```

#### Parameters

`modeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`stress` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_FE_Utilities_DFMFReader_GetStressShape_System_Collections_Generic_ICollection_System_Int32__System_Int32_System_Collections_Generic_ICollection_System_Double_____"></a> GetStressShape\(ICollection<int\>, int, out ICollection<double\[\]\>\)

```csharp
public void GetStressShape(ICollection<int> colModeSeq, int nodeSeq, out ICollection<double[]> stress)
```

#### Parameters

`colModeSeq` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`nodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`stress` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_FE_Utilities_DFMFReader_GetTranslationalShape_System_Int32_System_Int32_VM_Vector__"></a> GetTranslationalShape\(int, int, out Vector\)

```csharp
public void GetTranslationalShape(int nModeSeq, int nNodeSeq, out Vector vecMode)
```

#### Parameters

`nModeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nNodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`vecMode` Vector

### <a id="VM_Models_FE_Utilities_DFMFReader_GetTranslationalShape_System_Collections_Generic_ICollection_System_Int32__System_Int32_VM_Vector____"></a> GetTranslationalShape\(ICollection<int\>, int, out Vector\[\]\)

```csharp
public void GetTranslationalShape(ICollection<int> colModeSeq, int nNodeSeq, out Vector[] arVecMode)
```

#### Parameters

`colModeSeq` [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`nNodeSeq` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`arVecMode` Vector\[\]

### <a id="VM_Models_FE_Utilities_DFMFReader_GetUnusedModeIndexes"></a> GetUnusedModeIndexes\(\)

```csharp
public ReadOnlyCollection<int> GetUnusedModeIndexes()
```

#### Returns

 [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="VM_Models_FE_Utilities_DFMFReader_ImportImpl_System_String_VM_Unit_"></a> ImportImpl\(string, Unit\)

```csharp
protected abstract void ImportImpl(string strModeFileName, Unit unit)
```

#### Parameters

`strModeFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`unit` Unit

### <a id="VM_Models_FE_Utilities_DFMFReader_ReadConstraintInformation"></a> ReadConstraintInformation\(\)

```csharp
protected abstract void ReadConstraintInformation()
```

### <a id="VM_Models_FE_Utilities_DFMFReader_ReadInterfacePoints"></a> ReadInterfacePoints\(\)

```csharp
protected abstract void ReadInterfacePoints()
```

### <a id="VM_Models_FE_Utilities_DFMFReader_ReadMarkerPositions"></a> ReadMarkerPositions\(\)

```csharp
protected abstract void ReadMarkerPositions()
```

### <a id="VM_Models_FE_Utilities_DFMFReader_ReadMassInfoForOldVer"></a> ReadMassInfoForOldVer\(\)

```csharp
protected abstract void ReadMassInfoForOldVer()
```

### <a id="VM_Models_FE_Utilities_DFMFReader_ReadMasterPoints"></a> ReadMasterPoints\(\)

```csharp
protected abstract void ReadMasterPoints()
```

### <a id="VM_Models_FE_Utilities_DFMFReader_ReadMaterialInformation"></a> ReadMaterialInformation\(\)

```csharp
protected abstract void ReadMaterialInformation()
```

### <a id="VM_Models_FE_Utilities_DFMFReader_ReadModes"></a> ReadModes\(\)

```csharp
protected abstract void ReadModes()
```

### <a id="VM_Models_FE_Utilities_DFMFReader_ReadNBodyInformations"></a> ReadNBodyInformations\(\)

```csharp
protected abstract void ReadNBodyInformations()
```

### <a id="VM_Models_FE_Utilities_DFMFReader_ReadNamedSelectionFromConstraintInformation"></a> ReadNamedSelectionFromConstraintInformation\(\)

```csharp
protected void ReadNamedSelectionFromConstraintInformation()
```

### <a id="VM_Models_FE_Utilities_DFMFReader_ReadNamedSelectionInformation"></a> ReadNamedSelectionInformation\(\)

```csharp
protected abstract void ReadNamedSelectionInformation()
```

### <a id="VM_Models_FE_Utilities_DFMFReader_ReadPropertyInformation"></a> ReadPropertyInformation\(\)

```csharp
protected abstract void ReadPropertyInformation()
```

### <a id="VM_Models_FE_Utilities_DFMFReader_SetConstraintInformation_VM_Models_FE_Utilities_FEConstraintRBE___VM_Models_FE_Utilities_FEConstraintRBE___VM_Models_FE_Utilities_FEConstraintTie___"></a> SetConstraintInformation\(FEConstraintRBE\[\], FEConstraintRBE\[\], FEConstraintTie\[\]\)

```csharp
protected void SetConstraintInformation(FEConstraintRBE[] rbe2s, FEConstraintRBE[] rbe3s, FEConstraintTie[] ties)
```

#### Parameters

`rbe2s` [FEConstraintRBE](VM.Models.FE.Utilities.FEConstraintRBE.md)\[\]

`rbe3s` [FEConstraintRBE](VM.Models.FE.Utilities.FEConstraintRBE.md)\[\]

`ties` [FEConstraintTie](VM.Models.FE.Utilities.FEConstraintTie.md)\[\]

### <a id="VM_Models_FE_Utilities_DFMFReader_SetInterfacePoints_VM_Vector___"></a> SetInterfacePoints\(Vector\[\]\)

```csharp
protected void SetInterfacePoints(Vector[] points)
```

#### Parameters

`points` Vector\[\]

### <a id="VM_Models_FE_Utilities_DFMFReader_SetMarkerPositions_VM_Vector___"></a> SetMarkerPositions\(Vector\[\]\)

```csharp
protected void SetMarkerPositions(Vector[] points)
```

#### Parameters

`points` Vector\[\]

### <a id="VM_Models_FE_Utilities_DFMFReader_SetMassInfosForOldVer_VM_Models_FE_Utilities_MassInfoForOldVer___"></a> SetMassInfosForOldVer\(MassInfoForOldVer\[\]\)

```csharp
protected void SetMassInfosForOldVer(MassInfoForOldVer[] infos)
```

#### Parameters

`infos` [MassInfoForOldVer](VM.Models.FE.Utilities.MassInfoForOldVer.md)\[\]

### <a id="VM_Models_FE_Utilities_DFMFReader_SetMasterPoints_System_UInt32___"></a> SetMasterPoints\(uint\[\]\)

```csharp
protected void SetMasterPoints(uint[] points)
```

#### Parameters

`points` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

### <a id="VM_Models_FE_Utilities_DFMFReader_SetMaterialInformation_VM_Models_FE_Utilities_MaterialISO___VM_Models_FE_Utilities_MaterialORTHO___VM_Models_FE_Utilities_MaterialAB___VM_Models_FE_Utilities_MaterialNH___VM_Models_FE_Utilities_MaterialMR___VM_Models_FE_Utilities_MaterialOG___"></a> SetMaterialInformation\(MaterialISO\[\], MaterialORTHO\[\], MaterialAB\[\], MaterialNH\[\], MaterialMR\[\], MaterialOG\[\]\)

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

### <a id="VM_Models_FE_Utilities_DFMFReader_SetModes_VM_Models_FE_Utilities_Mode___"></a> SetModes\(Mode\[\]\)

```csharp
protected void SetModes(Mode[] modes)
```

#### Parameters

`modes` [Mode](VM.Models.FE.Utilities.Mode.md)\[\]

### <a id="VM_Models_FE_Utilities_DFMFReader_SetNBodyInformations_VM_Vector___System_Int32___System_Int32___"></a> SetNBodyInformations\(Vector\[\], int\[\], int\[\]\)

```csharp
protected void SetNBodyInformations(Vector[] nodes, int[] triaConnectivities, int[] tetraConnectivities)
```

#### Parameters

`nodes` Vector\[\]

`triaConnectivities` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

`tetraConnectivities` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_FE_Utilities_DFMFReader_SetNBodyInformations_VM_Models_FE_Utilities_NBody___VM_Models_FE_Utilities_FEElement___VM_Models_FE_Utilities_FEElement___VM_Models_FE_Utilities_FEElement___VM_Models_FE_Utilities_FEElement___VM_Models_FE_Utilities_FEElement___VM_Models_FE_Utilities_FEElement___VM_Models_FE_Utilities_FEElement___VM_Models_FE_Utilities_FEElement___VM_Models_FE_Utilities_FEElement___VM_Models_FE_Utilities_FEElement___VM_Models_FE_Utilities_FEElement___VM_Models_FE_Utilities_FEElement___VM_Models_FE_Utilities_FEElement___"></a> SetNBodyInformations\(NBody\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\], FEElement\[\]\)

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

### <a id="VM_Models_FE_Utilities_DFMFReader_SetNamedSelectionInformation_VM_Models_FE_Utilities_NamedSelection___VM_Models_FE_Utilities_NamedSelection___"></a> SetNamedSelectionInformation\(NamedSelection\[\], NamedSelection\[\]\)

```csharp
protected void SetNamedSelectionInformation(NamedSelection[] patchSets, NamedSelection[] edgeSets)
```

#### Parameters

`patchSets` [NamedSelection](VM.Models.FE.Utilities.NamedSelection.md)\[\]

`edgeSets` [NamedSelection](VM.Models.FE.Utilities.NamedSelection.md)\[\]

### <a id="VM_Models_FE_Utilities_DFMFReader_SetNodesForRBE_VM_Vector___"></a> SetNodesForRBE\(Vector\[\]\)

```csharp
protected void SetNodesForRBE(Vector[] addedNodesForRBE)
```

#### Parameters

`addedNodesForRBE` Vector\[\]

### <a id="VM_Models_FE_Utilities_DFMFReader_SetPropertyInformation_VM_Models_FE_Utilities_FEPropertyBeam___VM_Models_FE_Utilities_FEPropertyBeamL___VM_Models_FE_Utilities_FEPropertyShell___VM_Models_FE_Utilities_FEPropertySolid___"></a> SetPropertyInformation\(FEPropertyBeam\[\], FEPropertyBeamL\[\], FEPropertyShell\[\], FEPropertySolid\[\]\)

```csharp
protected void SetPropertyInformation(FEPropertyBeam[] beamProperties, FEPropertyBeamL[] beamLProperties, FEPropertyShell[] shellProperties, FEPropertySolid[] solidProperties)
```

#### Parameters

`beamProperties` [FEPropertyBeam](VM.Models.FE.Utilities.FEPropertyBeam.md)\[\]

`beamLProperties` [FEPropertyBeamL](VM.Models.FE.Utilities.FEPropertyBeamL.md)\[\]

`shellProperties` [FEPropertyShell](VM.Models.FE.Utilities.FEPropertyShell.md)\[\]

`solidProperties` [FEPropertySolid](VM.Models.FE.Utilities.FEPropertySolid.md)\[\]

### <a id="VM_Models_FE_Utilities_DFMFReader_SetUnusedModeIndexes_System_Collections_Generic_IEnumerable_System_Int32__"></a> SetUnusedModeIndexes\(IEnumerable<int\>\)

```csharp
public void SetUnusedModeIndexes(IEnumerable<int> collection)
```

#### Parameters

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

