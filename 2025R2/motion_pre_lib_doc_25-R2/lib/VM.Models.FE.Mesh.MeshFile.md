#  Class MeshFile

Namespace: [VM.Models.FE.Mesh](VM.Models.FE.Mesh.md)  
Assembly: VM.Models.FE.Mesh.dll  

```csharp
public class MeshFile
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MeshFile](VM.Models.FE.Mesh.MeshFile.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[BDFWriter.WriteBDFFile\(MeshFile, string, Action<TextWriter\>, Action<TextWriter\>\)](VM.Models.FE.Mesh.Writer.BDFWriter.md\#VM\_Models\_FE\_Mesh\_Writer\_BDFWriter\_WriteBDFFile\_VM\_Models\_FE\_Mesh\_MeshFile\_System\_String\_System\_Action\_System\_IO\_TextWriter\_\_System\_Action\_System\_IO\_TextWriter\_\_), 
[BDFWriter.WriteBDFFile\(MeshFile, Stream, Action<TextWriter\>, Action<TextWriter\>\)](VM.Models.FE.Mesh.Writer.BDFWriter.md\#VM\_Models\_FE\_Mesh\_Writer\_BDFWriter\_WriteBDFFile\_VM\_Models\_FE\_Mesh\_MeshFile\_System\_IO\_Stream\_System\_Action\_System\_IO\_TextWriter\_\_System\_Action\_System\_IO\_TextWriter\_\_), 
[BDFWriter.WriteBDFFile\(MeshFile, TextWriter, Action<TextWriter\>, Action<TextWriter\>\)](VM.Models.FE.Mesh.Writer.BDFWriter.md\#VM\_Models\_FE\_Mesh\_Writer\_BDFWriter\_WriteBDFFile\_VM\_Models\_FE\_Mesh\_MeshFile\_System\_IO\_TextWriter\_System\_Action\_System\_IO\_TextWriter\_\_System\_Action\_System\_IO\_TextWriter\_\_), 
[NeutralWriter.WriteNeutralFile\(MeshFile, string\)](VM.Models.FE.Mesh.Writer.NeutralWriter.md\#VM\_Models\_FE\_Mesh\_Writer\_NeutralWriter\_WriteNeutralFile\_VM\_Models\_FE\_Mesh\_MeshFile\_System\_String\_), 
[NeutralWriter.WriteNeutralFile\(MeshFile, Stream\)](VM.Models.FE.Mesh.Writer.NeutralWriter.md\#VM\_Models\_FE\_Mesh\_Writer\_NeutralWriter\_WriteNeutralFile\_VM\_Models\_FE\_Mesh\_MeshFile\_System\_IO\_Stream\_), 
[NeutralWriter.WriteNeutralFile\(MeshFile, BinaryWriter\)](VM.Models.FE.Mesh.Writer.NeutralWriter.md\#VM\_Models\_FE\_Mesh\_Writer\_NeutralWriter\_WriteNeutralFile\_VM\_Models\_FE\_Mesh\_MeshFile\_System\_IO\_BinaryWriter\_)

## Constructors

### <a id="VM_Models_FE_Mesh_MeshFile__ctor"></a> MeshFile\(\)

```csharp
public MeshFile()
```

## Properties

### <a id="VM_Models_FE_Mesh_MeshFile_IsTemporary"></a> IsTemporary

```csharp
protected bool IsTemporary { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Models_FE_Mesh_MeshFile_Add_System_Object_"></a> Add\(object\)

```csharp
public void Add(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

### <a id="VM_Models_FE_Mesh_MeshFile_AddBunch_System_Collections_IEnumerable_"></a> AddBunch\(IEnumerable\)

```csharp
public void AddBunch(IEnumerable enumObjs)
```

#### Parameters

`enumObjs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

### <a id="VM_Models_FE_Mesh_MeshFile_Connect_System_String_"></a> Connect\(string\)

```csharp
public static MeshFile Connect(string pathMeshFile)
```

#### Parameters

`pathMeshFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [MeshFile](VM.Models.FE.Mesh.MeshFile.md)

### <a id="VM_Models_FE_Mesh_MeshFile_Create_System_String_"></a> Create\(string\)

```csharp
public static MeshFile Create(string pathMeshFile)
```

#### Parameters

`pathMeshFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [MeshFile](VM.Models.FE.Mesh.MeshFile.md)

### <a id="VM_Models_FE_Mesh_MeshFile_CreateTable__1"></a> CreateTable<T\>\(\)

```csharp
protected void CreateTable<T>() where T : new()
```

#### Type Parameters

`T` 

### <a id="VM_Models_FE_Mesh_MeshFile_CreateTemporary"></a> CreateTemporary\(\)

```csharp
public static MeshFile CreateTemporary()
```

#### Returns

 [MeshFile](VM.Models.FE.Mesh.MeshFile.md)

### <a id="VM_Models_FE_Mesh_MeshFile_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="VM_Models_FE_Mesh_MeshFile_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
protected virtual void Dispose(bool disposing)
```

#### Parameters

`disposing` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_FE_Mesh_MeshFile_Initialize_System_String_"></a> Initialize\(string\)

```csharp
protected void Initialize(string pathMeshFile)
```

#### Parameters

`pathMeshFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_FE_Mesh_MeshFile_QueryByColumn__1_System_String_System_Object_"></a> QueryByColumn<T\>\(string, object\)

```csharp
public IEnumerable<T> QueryByColumn<T>(string columnName, object value) where T : class, new()
```

#### Parameters

`columnName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`value` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

#### Type Parameters

`T` 

### <a id="VM_Models_FE_Mesh_MeshFile_Table__1"></a> Table<T\>\(\)

```csharp
public IEnumerable<T> Table<T>() where T : class, new()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

#### Type Parameters

`T` 

### <a id="VM_Models_FE_Mesh_MeshFile_TryQueryByID__1_System_Int32___0__"></a> TryQueryByID<T\>\(int, out T\)

```csharp
public bool TryQueryByID<T>(int id, out T result) where T : class, new()
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`result` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

