#  Class NeutralWriter

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

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WriteBigBlock_System_IO_BinaryWriter_System_String_System_Action_"></a> WriteBigBlock\(BinaryWriter, string, Action\)

```csharp
public static BinaryWriter WriteBigBlock(this BinaryWriter writer, string blockName, Action writeBlock)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`blockName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`writeBlock` [Action](https://learn.microsoft.com/dotnet/api/system.action)

#### Returns

 [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WriteBlock__1_System_IO_BinaryWriter_VM_Models_FE_Mesh_MeshFile_System_String_System_Int32_System_Action___0__"></a> WriteBlock<T\>\(BinaryWriter, MeshFile, string, int, Action<T\>\)

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

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WriteBlock__1_System_IO_BinaryWriter_System_Collections_ObjectModel_ReadOnlyCollection___0__System_String_System_Int32_System_Action___0__"></a> WriteBlock<T\>\(BinaryWriter, ReadOnlyCollection<T\>, string, int, Action<T\>\)

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

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WriteContact_System_IO_BinaryWriter_VM_Models_FE_Utilities_FEConstraintTie_System_UInt32_System_UInt32_"></a> WriteContact\(BinaryWriter, FEConstraintTie, uint, uint\)

```csharp
public static void WriteContact(BinaryWriter writer, FEConstraintTie tie, uint baseGeomID, uint actionGeomID)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`tie` FEConstraintTie

`baseGeomID` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`actionGeomID` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WriteElement_System_IO_BinaryWriter_VM_Models_FE_Mesh_Elements_Element_"></a> WriteElement\(BinaryWriter, Element\)

```csharp
public static void WriteElement(BinaryWriter writer, Element element)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`element` [Element](VM.Models.FE.Mesh.Elements.Element.md)

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WriteElement_System_IO_BinaryWriter_VM_Models_FE_Utilities_FEElement_"></a> WriteElement\(BinaryWriter, FEElement\)

```csharp
public static void WriteElement(BinaryWriter writer, FEElement element)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`element` FEElement

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WriteElementRBE_System_IO_BinaryWriter_VM_Models_FE_Utilities_FEConstraintRBE_"></a> WriteElementRBE\(BinaryWriter, FEConstraintRBE\)

```csharp
public static void WriteElementRBE(BinaryWriter writer, FEConstraintRBE rbe)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`rbe` FEConstraintRBE

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WriteElementRBE2_System_IO_BinaryWriter_VM_Models_FE_Mesh_Elements_RBE2_"></a> WriteElementRBE2\(BinaryWriter, RBE2\)

```csharp
public static void WriteElementRBE2(BinaryWriter writer, RBE2 rbe)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`rbe` [RBE2](VM.Models.FE.Mesh.Elements.RBE2.md)

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WriteEmptyBlock_System_IO_BinaryWriter_System_String_System_Int32_"></a> WriteEmptyBlock\(BinaryWriter, string, int\)

```csharp
public static BinaryWriter WriteEmptyBlock(this BinaryWriter writer, string blockName, int blockVersion)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`blockName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`blockVersion` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WriteMaterialArrudaBoyce_System_IO_BinaryWriter_VM_Models_FE_Utilities_MaterialAB_System_Boolean_System_Int32_"></a> WriteMaterialArrudaBoyce\(BinaryWriter, MaterialAB, bool, int\)

```csharp
public static void WriteMaterialArrudaBoyce(BinaryWriter writer, MaterialAB mat, bool bUseIndex, int nIndex)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`mat` MaterialAB

`bUseIndex` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`nIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WriteMaterialISO_System_IO_BinaryWriter_VM_Models_FE_Mesh_Materials_ISO_"></a> WriteMaterialISO\(BinaryWriter, ISO\)

```csharp
public static void WriteMaterialISO(BinaryWriter writer, ISO mat)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`mat` [ISO](VM.Models.FE.Mesh.Materials.ISO.md)

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WriteMaterialISO_System_IO_BinaryWriter_VM_Models_FE_Utilities_MaterialISO_System_Boolean_System_Int32_"></a> WriteMaterialISO\(BinaryWriter, MaterialISO, bool, int\)

```csharp
public static void WriteMaterialISO(BinaryWriter writer, MaterialISO mat, bool bUseIndex, int nIndex)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`mat` MaterialISO

`bUseIndex` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`nIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WriteMaterialMooneyRivlin_System_IO_BinaryWriter_VM_Models_FE_Utilities_MaterialMR_System_Boolean_System_Int32_"></a> WriteMaterialMooneyRivlin\(BinaryWriter, MaterialMR, bool, int\)

```csharp
public static void WriteMaterialMooneyRivlin(BinaryWriter writer, MaterialMR mat, bool bUseIndex, int nIndex)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`mat` MaterialMR

`bUseIndex` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`nIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WriteMaterialNeoHookean_System_IO_BinaryWriter_VM_Models_FE_Utilities_MaterialNH_System_Boolean_System_Int32_"></a> WriteMaterialNeoHookean\(BinaryWriter, MaterialNH, bool, int\)

```csharp
public static void WriteMaterialNeoHookean(BinaryWriter writer, MaterialNH mat, bool bUseIndex, int nIndex)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`mat` MaterialNH

`bUseIndex` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`nIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WriteMaterialORTHO_System_IO_BinaryWriter_VM_Models_FE_Utilities_MaterialORTHO_System_Boolean_System_Int32_"></a> WriteMaterialORTHO\(BinaryWriter, MaterialORTHO, bool, int\)

```csharp
public static void WriteMaterialORTHO(BinaryWriter writer, MaterialORTHO mat, bool bUseIndex, int nIndex)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`mat` MaterialORTHO

`bUseIndex` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`nIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WriteMaterialOgden_System_IO_BinaryWriter_VM_Models_FE_Utilities_MaterialOG_System_Boolean_System_Int32_"></a> WriteMaterialOgden\(BinaryWriter, MaterialOG, bool, int\)

```csharp
public static void WriteMaterialOgden(BinaryWriter writer, MaterialOG mat, bool bUseIndex, int nIndex)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`mat` MaterialOG

`bUseIndex` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`nIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WriteNeutralFile_VM_Models_FE_Mesh_MeshFile_System_String_"></a> WriteNeutralFile\(MeshFile, string\)

```csharp
public static void WriteNeutralFile(this MeshFile file, string pathToWrite)
```

#### Parameters

`file` [MeshFile](VM.Models.FE.Mesh.MeshFile.md)

`pathToWrite` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WriteNeutralFile_VM_Models_FE_Mesh_MeshFile_System_IO_Stream_"></a> WriteNeutralFile\(MeshFile, Stream\)

```csharp
public static void WriteNeutralFile(this MeshFile file, Stream stream)
```

#### Parameters

`file` [MeshFile](VM.Models.FE.Mesh.MeshFile.md)

`stream` [Stream](https://learn.microsoft.com/dotnet/api/system.io.stream)

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WriteNeutralFile_VM_Models_FE_Mesh_MeshFile_System_IO_BinaryWriter_"></a> WriteNeutralFile\(MeshFile, BinaryWriter\)

```csharp
public static void WriteNeutralFile(this MeshFile file, BinaryWriter writer)
```

#### Parameters

`file` [MeshFile](VM.Models.FE.Mesh.MeshFile.md)

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WriteNeutralFile_VM_Models_FE_Utilities_IDFMFReader_System_String_"></a> WriteNeutralFile\(IDFMFReader, string\)

```csharp
public static void WriteNeutralFile(this IDFMFReader file, string pathToWrite)
```

#### Parameters

`file` IDFMFReader

`pathToWrite` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WriteNeutralFile_VM_Models_FE_Utilities_IDFMFReader_System_IO_Stream_"></a> WriteNeutralFile\(IDFMFReader, Stream\)

```csharp
public static void WriteNeutralFile(this IDFMFReader file, Stream stream)
```

#### Parameters

`file` IDFMFReader

`stream` [Stream](https://learn.microsoft.com/dotnet/api/system.io.stream)

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WriteNeutralFile_VM_Models_FE_Utilities_IDFMFReader_System_IO_BinaryWriter_"></a> WriteNeutralFile\(IDFMFReader, BinaryWriter\)

```csharp
public static void WriteNeutralFile(this IDFMFReader file, BinaryWriter writer)
```

#### Parameters

`file` IDFMFReader

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WriteNode_System_IO_BinaryWriter_VM_Models_FE_Mesh_Node_"></a> WriteNode\(BinaryWriter, Node\)

```csharp
public static void WriteNode(BinaryWriter writer, Node node)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`node` [Node](VM.Models.FE.Mesh.Node.md)

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WriteNode_System_IO_BinaryWriter_VM_Models_FE_Utilities_NBody_"></a> WriteNode\(BinaryWriter, NBody\)

```csharp
public static void WriteNode(BinaryWriter writer, NBody node)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`node` NBody

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WritePropertyBeam_System_IO_BinaryWriter_VM_Models_FE_Mesh_Properties_BeamL_"></a> WritePropertyBeam\(BinaryWriter, BeamL\)

```csharp
public static void WritePropertyBeam(BinaryWriter writer, BeamL prop)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`prop` [BeamL](VM.Models.FE.Mesh.Properties.BeamL.md)

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WritePropertyBeam_System_IO_BinaryWriter_VM_Models_FE_Utilities_FEPropertyBeam_System_Boolean_System_Int32_"></a> WritePropertyBeam\(BinaryWriter, FEPropertyBeam, bool, int\)

```csharp
public static void WritePropertyBeam(BinaryWriter writer, FEPropertyBeam prop, bool bUseIndex, int nIndex)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`prop` FEPropertyBeam

`bUseIndex` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`nIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WritePropertyBeamL_System_IO_BinaryWriter_VM_Models_FE_Utilities_FEPropertyBeamL_System_Boolean_System_Int32_"></a> WritePropertyBeamL\(BinaryWriter, FEPropertyBeamL, bool, int\)

```csharp
public static void WritePropertyBeamL(BinaryWriter writer, FEPropertyBeamL prop, bool bUseIndex, int nIndex)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`prop` FEPropertyBeamL

`bUseIndex` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`nIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WritePropertyShell_System_IO_BinaryWriter_VM_Models_FE_Mesh_Properties_Shell_"></a> WritePropertyShell\(BinaryWriter, Shell\)

```csharp
public static void WritePropertyShell(BinaryWriter writer, Shell prop)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`prop` [Shell](VM.Models.FE.Mesh.Properties.Shell.md)

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WritePropertyShell_System_IO_BinaryWriter_VM_Models_FE_Utilities_FEPropertyShell_System_Boolean_System_Int32_"></a> WritePropertyShell\(BinaryWriter, FEPropertyShell, bool, int\)

```csharp
public static void WritePropertyShell(BinaryWriter writer, FEPropertyShell prop, bool bUseIndex, int nIndex)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`prop` FEPropertyShell

`bUseIndex` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`nIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WritePropertySolid_System_IO_BinaryWriter_VM_Models_FE_Mesh_Properties_Solid_"></a> WritePropertySolid\(BinaryWriter, Solid\)

```csharp
public static void WritePropertySolid(BinaryWriter writer, Solid prop)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`prop` [Solid](VM.Models.FE.Mesh.Properties.Solid.md)

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WritePropertySolid_System_IO_BinaryWriter_VM_Models_FE_Utilities_FEPropertySolid_System_Boolean_System_Int32_"></a> WritePropertySolid\(BinaryWriter, FEPropertySolid, bool, int\)

```csharp
public static void WritePropertySolid(BinaryWriter writer, FEPropertySolid prop, bool bUseIndex, int nIndex)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`prop` FEPropertySolid

`bUseIndex` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`nIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WriteSet_System_IO_BinaryWriter_VM_Models_FE_Mesh_Sets_Set_"></a> WriteSet\(BinaryWriter, Set\)

```csharp
public static void WriteSet(BinaryWriter writer, Set set)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`set` [Set](VM.Models.FE.Mesh.Sets.Set.md)

### <a id="VM_Models_FE_Mesh_Writer_NeutralWriter_WriteSet_System_IO_BinaryWriter_VM_Models_FE_Utilities_NamedSelection_"></a> WriteSet\(BinaryWriter, NamedSelection\)

```csharp
public static void WriteSet(BinaryWriter writer, NamedSelection namedSelection)
```

#### Parameters

`writer` [BinaryWriter](https://learn.microsoft.com/dotnet/api/system.io.binarywriter)

`namedSelection` NamedSelection

