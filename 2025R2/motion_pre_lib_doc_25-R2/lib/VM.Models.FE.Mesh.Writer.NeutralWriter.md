# Class NeutralWriter

Namespace: [VM.Models.FE.Mesh.Writer](VM.Models.FE.Mesh.Writer.md)  
Assembly: VM.Models.FE.Mesh.dll  

```csharp
public static class NeutralWriter
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[NeutralWriter](VM.Models.FE.Mesh.Writer.NeutralWriter.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### WriteBigBlock\(BinaryWriter, string, Action\)

```csharp
public static BinaryWriter WriteBigBlock(this BinaryWriter writer, string blockName, Action writeBlock)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`blockName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`writeBlock` [Action](https://learn.microsoft.com/dotnet/api/system.action)

#### Returns

 [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

### WriteBlock<T\>\(BinaryWriter, MeshFile, string, int, Action<T\>\)

```csharp
public static BinaryWriter WriteBlock<T>(this BinaryWriter writer, MeshFile file, string blockName, int nBlockVersion, Action<T> actWrite) where T : class, new()
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`file` [MeshFile](VM.Models.FE.Mesh.MeshFile.md)

`blockName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`nBlockVersion` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`actWrite` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<T\>

#### Returns

 [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

#### Type Parameters

`T` 

### WriteBlock<T\>\(BinaryWriter, ReadOnlyCollection<T\>, string, int, Action<T\>\)

```csharp
public static BinaryWriter WriteBlock<T>(this BinaryWriter writer, ReadOnlyCollection<T> file, string blockName, int nBlockVersion, Action<T> actWrite) where T : struct
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`file` [ReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection\-1)<T\>

`blockName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`nBlockVersion` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`actWrite` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<T\>

#### Returns

 [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

#### Type Parameters

`T` 

### WriteContact\(BinaryWriter, FEConstraintTie, uint, uint\)

```csharp
public static void WriteContact(BinaryWriter writer, FEConstraintTie tie, uint baseGeomID, uint actionGeomID)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`tie` FEConstraintTie

`baseGeomID` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`actionGeomID` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### WriteElement\(BinaryWriter, Element\)

```csharp
public static void WriteElement(BinaryWriter writer, Element element)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`element` [Element](VM.Models.FE.Mesh.Elements.Element.md)

### WriteElement\(BinaryWriter, FEElement\)

```csharp
public static void WriteElement(BinaryWriter writer, FEElement element)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`element` FEElement

### WriteElementRBE\(BinaryWriter, FEConstraintRBE\)

```csharp
public static void WriteElementRBE(BinaryWriter writer, FEConstraintRBE rbe)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`rbe` FEConstraintRBE

### WriteElementRBE2\(BinaryWriter, RBE2\)

```csharp
public static void WriteElementRBE2(BinaryWriter writer, RBE2 rbe)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`rbe` [RBE2](VM.Models.FE.Mesh.Elements.RBE2.md)

### WriteEmptyBlock\(BinaryWriter, string, int\)

```csharp
public static BinaryWriter WriteEmptyBlock(this BinaryWriter writer, string blockName, int blockVersion)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`blockName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`blockVersion` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

### WriteMaterialArrudaBoyce\(BinaryWriter, MaterialAB, bool, int\)

```csharp
public static void WriteMaterialArrudaBoyce(BinaryWriter writer, MaterialAB mat, bool bUseIndex, int nIndex)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`mat` MaterialAB

`bUseIndex` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`nIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### WriteMaterialISO\(BinaryWriter, ISO\)

```csharp
public static void WriteMaterialISO(BinaryWriter writer, ISO mat)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`mat` [ISO](VM.Models.FE.Mesh.Materials.ISO.md)

### WriteMaterialISO\(BinaryWriter, MaterialISO, bool, int\)

```csharp
public static void WriteMaterialISO(BinaryWriter writer, MaterialISO mat, bool bUseIndex, int nIndex)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`mat` MaterialISO

`bUseIndex` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`nIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### WriteMaterialMooneyRivlin\(BinaryWriter, MaterialMR, bool, int\)

```csharp
public static void WriteMaterialMooneyRivlin(BinaryWriter writer, MaterialMR mat, bool bUseIndex, int nIndex)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`mat` MaterialMR

`bUseIndex` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`nIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### WriteMaterialNeoHookean\(BinaryWriter, MaterialNH, bool, int\)

```csharp
public static void WriteMaterialNeoHookean(BinaryWriter writer, MaterialNH mat, bool bUseIndex, int nIndex)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`mat` MaterialNH

`bUseIndex` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`nIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### WriteMaterialORTHO\(BinaryWriter, MaterialORTHO, bool, int\)

```csharp
public static void WriteMaterialORTHO(BinaryWriter writer, MaterialORTHO mat, bool bUseIndex, int nIndex)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`mat` MaterialORTHO

`bUseIndex` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`nIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### WriteMaterialOgden\(BinaryWriter, MaterialOG, bool, int\)

```csharp
public static void WriteMaterialOgden(BinaryWriter writer, MaterialOG mat, bool bUseIndex, int nIndex)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`mat` MaterialOG

`bUseIndex` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`nIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### WriteNeutralFile\(MeshFile, string\)

```csharp
public static void WriteNeutralFile(this MeshFile file, string pathToWrite)
```

#### Parameters

`file` [MeshFile](VM.Models.FE.Mesh.MeshFile.md)

`pathToWrite` [string](https://learn.microsoft.com/dotnet/api/system.string)

### WriteNeutralFile\(MeshFile, Stream\)

```csharp
public static void WriteNeutralFile(this MeshFile file, Stream stream)
```

#### Parameters

`file` [MeshFile](VM.Models.FE.Mesh.MeshFile.md)

`stream` [Stream](https://learn.microsoft.com/dotnet/api/system.io.stream)

### WriteNeutralFile\(MeshFile, BinaryWriter\)

```csharp
public static void WriteNeutralFile(this MeshFile file, BinaryWriter writer)
```

#### Parameters

`file` [MeshFile](VM.Models.FE.Mesh.MeshFile.md)

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

### WriteNeutralFile\(IDFMFReader, string\)

```csharp
public static void WriteNeutralFile(this IDFMFReader file, string pathToWrite)
```

#### Parameters

`file` IDFMFReader

`pathToWrite` [string](https://learn.microsoft.com/dotnet/api/system.string)

### WriteNeutralFile\(IDFMFReader, Stream\)

```csharp
public static void WriteNeutralFile(this IDFMFReader file, Stream stream)
```

#### Parameters

`file` IDFMFReader

`stream` [Stream](https://learn.microsoft.com/dotnet/api/system.io.stream)

### WriteNeutralFile\(IDFMFReader, BinaryWriter\)

```csharp
public static void WriteNeutralFile(this IDFMFReader file, BinaryWriter writer)
```

#### Parameters

`file` IDFMFReader

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

### WriteNode\(BinaryWriter, Node\)

```csharp
public static void WriteNode(BinaryWriter writer, Node node)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`node` [Node](VM.Models.FE.Mesh.Node.md)

### WriteNode\(BinaryWriter, NBody\)

```csharp
public static void WriteNode(BinaryWriter writer, NBody node)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`node` NBody

### WritePropertyBeam\(BinaryWriter, BeamL\)

```csharp
public static void WritePropertyBeam(BinaryWriter writer, BeamL prop)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`prop` [BeamL](VM.Models.FE.Mesh.Properties.BeamL.md)

### WritePropertyBeam\(BinaryWriter, FEPropertyBeam, bool, int\)

```csharp
public static void WritePropertyBeam(BinaryWriter writer, FEPropertyBeam prop, bool bUseIndex, int nIndex)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`prop` FEPropertyBeam

`bUseIndex` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`nIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### WritePropertyBeamL\(BinaryWriter, FEPropertyBeamL, bool, int\)

```csharp
public static void WritePropertyBeamL(BinaryWriter writer, FEPropertyBeamL prop, bool bUseIndex, int nIndex)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`prop` FEPropertyBeamL

`bUseIndex` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`nIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### WritePropertyShell\(BinaryWriter, Shell\)

```csharp
public static void WritePropertyShell(BinaryWriter writer, Shell prop)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`prop` [Shell](VM.Models.FE.Mesh.Properties.Shell.md)

### WritePropertyShell\(BinaryWriter, FEPropertyShell, bool, int\)

```csharp
public static void WritePropertyShell(BinaryWriter writer, FEPropertyShell prop, bool bUseIndex, int nIndex)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`prop` FEPropertyShell

`bUseIndex` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`nIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### WritePropertySolid\(BinaryWriter, Solid\)

```csharp
public static void WritePropertySolid(BinaryWriter writer, Solid prop)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`prop` [Solid](VM.Models.FE.Mesh.Properties.Solid.md)

### WritePropertySolid\(BinaryWriter, FEPropertySolid, bool, int\)

```csharp
public static void WritePropertySolid(BinaryWriter writer, FEPropertySolid prop, bool bUseIndex, int nIndex)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`prop` FEPropertySolid

`bUseIndex` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`nIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### WriteSet\(BinaryWriter, Set\)

```csharp
public static void WriteSet(BinaryWriter writer, Set set)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`set` [Set](VM.Models.FE.Mesh.Sets.Set.md)

### WriteSet\(BinaryWriter, NamedSelection\)

```csharp
public static void WriteSet(BinaryWriter writer, NamedSelection namedSelection)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`namedSelection` NamedSelection


