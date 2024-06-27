# Class MeshFile

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

### MeshFile\(\)

```csharp
public MeshFile()
```

## Properties

### IsTemporary

```csharp
protected bool IsTemporary { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### Add\(object\)

```csharp
public void Add(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

### AddBunch\(IEnumerable\)

```csharp
public void AddBunch(IEnumerable enumObjs)
```

#### Parameters

`enumObjs` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

### Connect\(string\)

```csharp
public static MeshFile Connect(string pathMeshFile)
```

#### Parameters

`pathMeshFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [MeshFile](VM.Models.FE.Mesh.MeshFile.md)

### Create\(string\)

```csharp
public static MeshFile Create(string pathMeshFile)
```

#### Parameters

`pathMeshFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [MeshFile](VM.Models.FE.Mesh.MeshFile.md)

### CreateTable<T\>\(\)

```csharp
protected void CreateTable<T>() where T : new()
```

#### Type Parameters

`T` 

### CreateTemporary\(\)

```csharp
public static MeshFile CreateTemporary()
```

#### Returns

 [MeshFile](VM.Models.FE.Mesh.MeshFile.md)

### Dispose\(\)

```csharp
public void Dispose()
```

### Dispose\(bool\)

```csharp
protected virtual void Dispose(bool disposing)
```

#### Parameters

`disposing` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Initialize\(string\)

```csharp
protected void Initialize(string pathMeshFile)
```

#### Parameters

`pathMeshFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

### QueryByColumn<T\>\(string, object\)

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

### Table<T\>\(\)

```csharp
public IEnumerable<T> Table<T>() where T : class, new()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

#### Type Parameters

`T` 

### TryQueryByID<T\>\(int, out T\)

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


