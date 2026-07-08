#  Class BDFWriter

Namespace: [VM.Models.FE.Mesh.Writer](VM.Models.FE.Mesh.Writer.md)  
Assembly: VM.Models.FE.Mesh.dll  

```csharp
public static class BDFWriter
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BDFWriter](VM.Models.FE.Mesh.Writer.BDFWriter.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_FE_Mesh_Writer_BDFWriter_WriteMessage"></a> WriteMessage

```csharp
public static Action<string> WriteMessage { get; set; }
```

#### Property Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

## Methods

### <a id="VM_Models_FE_Mesh_Writer_BDFWriter_FormatDoubleForBDF_System_Double_"></a> FormatDoubleForBDF\(double\)

```csharp
public static string FormatDoubleForBDF(double dValue)
```

#### Parameters

`dValue` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_FE_Mesh_Writer_BDFWriter_GetElementTypeName_VM_Models_FE_Mesh_ElementTypes_"></a> GetElementTypeName\(ElementTypes\)

```csharp
public static string GetElementTypeName(ElementTypes elementType)
```

#### Parameters

`elementType` [ElementTypes](VM.Models.FE.Mesh.ElementTypes.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_FE_Mesh_Writer_BDFWriter_WriteBDFFile_VM_Models_FE_Mesh_MeshFile_System_String_System_Action_System_IO_TextWriter__System_Action_System_IO_TextWriter__"></a> WriteBDFFile\(MeshFile, string, Action<TextWriter\>, Action<TextWriter\>\)

```csharp
public static void WriteBDFFile(this MeshFile file, string pathToWrite, Action<TextWriter> actWriteBeforeBulk = null, Action<TextWriter> actWriteExtra = null)
```

#### Parameters

`file` [MeshFile](VM.Models.FE.Mesh.MeshFile.md)

`pathToWrite` [string](https://learn.microsoft.com/dotnet/api/system.string)

`actWriteBeforeBulk` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[TextWriter](https://learn.microsoft.com/dotnet/api/system.io.textwriter)\>

`actWriteExtra` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[TextWriter](https://learn.microsoft.com/dotnet/api/system.io.textwriter)\>

### <a id="VM_Models_FE_Mesh_Writer_BDFWriter_WriteBDFFile_VM_Models_FE_Mesh_MeshFile_System_IO_Stream_System_Action_System_IO_TextWriter__System_Action_System_IO_TextWriter__"></a> WriteBDFFile\(MeshFile, Stream, Action<TextWriter\>, Action<TextWriter\>\)

```csharp
public static void WriteBDFFile(this MeshFile file, Stream stream, Action<TextWriter> actWriteBeforeBulk = null, Action<TextWriter> actWriteExtra = null)
```

#### Parameters

`file` [MeshFile](VM.Models.FE.Mesh.MeshFile.md)

`stream` [Stream](https://learn.microsoft.com/dotnet/api/system.io.stream)

`actWriteBeforeBulk` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[TextWriter](https://learn.microsoft.com/dotnet/api/system.io.textwriter)\>

`actWriteExtra` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[TextWriter](https://learn.microsoft.com/dotnet/api/system.io.textwriter)\>

### <a id="VM_Models_FE_Mesh_Writer_BDFWriter_WriteBDFFile_VM_Models_FE_Mesh_MeshFile_System_IO_TextWriter_System_Action_System_IO_TextWriter__System_Action_System_IO_TextWriter__"></a> WriteBDFFile\(MeshFile, TextWriter, Action<TextWriter\>, Action<TextWriter\>\)

```csharp
public static void WriteBDFFile(this MeshFile file, TextWriter writer, Action<TextWriter> actWriteBeforeBulk = null, Action<TextWriter> actWriteExtra = null)
```

#### Parameters

`file` [MeshFile](VM.Models.FE.Mesh.MeshFile.md)

`writer` [TextWriter](https://learn.microsoft.com/dotnet/api/system.io.textwriter)

`actWriteBeforeBulk` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[TextWriter](https://learn.microsoft.com/dotnet/api/system.io.textwriter)\>

`actWriteExtra` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[TextWriter](https://learn.microsoft.com/dotnet/api/system.io.textwriter)\>

### <a id="VM_Models_FE_Mesh_Writer_BDFWriter_WriteSingleBDFElement_System_IO_TextWriter_System_Int32__System_String_"></a> WriteSingleBDFElement\(TextWriter, ref int, string\)

```csharp
public static void WriteSingleBDFElement(this TextWriter writer, ref int index, string strElement)
```

#### Parameters

`writer` [TextWriter](https://learn.microsoft.com/dotnet/api/system.io.textwriter)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`strElement` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_FE_Mesh_Writer_BDFWriter_WriteSingleBDFElement_System_IO_TextWriter_System_Int32__System_Int32_"></a> WriteSingleBDFElement\(TextWriter, ref int, int\)

```csharp
public static void WriteSingleBDFElement(this TextWriter writer, ref int index, int nElement)
```

#### Parameters

`writer` [TextWriter](https://learn.microsoft.com/dotnet/api/system.io.textwriter)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nElement` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_FE_Mesh_Writer_BDFWriter_WriteSingleBDFElement_System_IO_TextWriter_System_Int32__System_Double_"></a> WriteSingleBDFElement\(TextWriter, ref int, double\)

```csharp
public static void WriteSingleBDFElement(this TextWriter writer, ref int index, double dElement)
```

#### Parameters

`writer` [TextWriter](https://learn.microsoft.com/dotnet/api/system.io.textwriter)

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`dElement` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_FE_Mesh_Writer_BDFWriter_WriteToBDF_VM_Models_FE_Mesh_Node_System_IO_TextWriter_"></a> WriteToBDF\(Node, TextWriter\)

```csharp
public static void WriteToBDF(this Node node, TextWriter writer)
```

#### Parameters

`node` [Node](VM.Models.FE.Mesh.Node.md)

`writer` [TextWriter](https://learn.microsoft.com/dotnet/api/system.io.textwriter)

### <a id="VM_Models_FE_Mesh_Writer_BDFWriter_WriteToBDF_VM_Models_FE_Mesh_Materials_ISO_System_IO_TextWriter_"></a> WriteToBDF\(ISO, TextWriter\)

```csharp
public static void WriteToBDF(this ISO material, TextWriter writer)
```

#### Parameters

`material` [ISO](VM.Models.FE.Mesh.Materials.ISO.md)

`writer` [TextWriter](https://learn.microsoft.com/dotnet/api/system.io.textwriter)

### <a id="VM_Models_FE_Mesh_Writer_BDFWriter_WriteToBDF_VM_Models_FE_Mesh_Properties_BeamL_System_IO_TextWriter_"></a> WriteToBDF\(BeamL, TextWriter\)

```csharp
public static void WriteToBDF(this BeamL property, TextWriter writer)
```

#### Parameters

`property` [BeamL](VM.Models.FE.Mesh.Properties.BeamL.md)

`writer` [TextWriter](https://learn.microsoft.com/dotnet/api/system.io.textwriter)

### <a id="VM_Models_FE_Mesh_Writer_BDFWriter_WriteToBDF_VM_Models_FE_Mesh_Properties_Solid_System_IO_TextWriter_"></a> WriteToBDF\(Solid, TextWriter\)

```csharp
public static void WriteToBDF(this Solid property, TextWriter writer)
```

#### Parameters

`property` [Solid](VM.Models.FE.Mesh.Properties.Solid.md)

`writer` [TextWriter](https://learn.microsoft.com/dotnet/api/system.io.textwriter)

### <a id="VM_Models_FE_Mesh_Writer_BDFWriter_WriteToBDF_VM_Models_FE_Mesh_Elements_Beam2_System_IO_TextWriter_VM_Models_FE_Mesh_MeshFile_"></a> WriteToBDF\(Beam2, TextWriter, MeshFile\)

```csharp
public static void WriteToBDF(this Beam2 beam, TextWriter writer, MeshFile file)
```

#### Parameters

`beam` [Beam2](VM.Models.FE.Mesh.Elements.Beam2.md)

`writer` [TextWriter](https://learn.microsoft.com/dotnet/api/system.io.textwriter)

`file` [MeshFile](VM.Models.FE.Mesh.MeshFile.md)

### <a id="VM_Models_FE_Mesh_Writer_BDFWriter_WriteToBDF_VM_Models_FE_Mesh_Elements_Element_System_IO_TextWriter_"></a> WriteToBDF\(Element, TextWriter\)

```csharp
public static void WriteToBDF(this Element element, TextWriter writer)
```

#### Parameters

`element` [Element](VM.Models.FE.Mesh.Elements.Element.md)

`writer` [TextWriter](https://learn.microsoft.com/dotnet/api/system.io.textwriter)

### <a id="VM_Models_FE_Mesh_Writer_BDFWriter_WriteToBDF_VM_Models_FE_Mesh_Elements_RBE2_System_IO_TextWriter_"></a> WriteToBDF\(RBE2, TextWriter\)

```csharp
public static void WriteToBDF(this RBE2 rbe, TextWriter writer)
```

#### Parameters

`rbe` [RBE2](VM.Models.FE.Mesh.Elements.RBE2.md)

`writer` [TextWriter](https://learn.microsoft.com/dotnet/api/system.io.textwriter)

