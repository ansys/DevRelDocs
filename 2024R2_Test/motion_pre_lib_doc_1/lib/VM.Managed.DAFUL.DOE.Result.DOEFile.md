# Class DOEFile

Namespace: [VM.Managed.DAFUL.DOE.Result](VM.Managed.DAFUL.DOE.Result.md)  
Assembly: VMDDOEResult.dll  

```csharp
public class DOEFile
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DOEFile](VM.Managed.DAFUL.DOE.Result.DOEFile.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### DOEFile\(enProc\)

```csharp
public DOEFile(enProc proc)
```

#### Parameters

`proc` [enProc](VM.Managed.DAFUL.DOE.Result.enProc.md)

### DOEFile\(enProc, string\)

```csharp
public DOEFile(enProc proc, string strPath)
```

#### Parameters

`proc` [enProc](VM.Managed.DAFUL.DOE.Result.enProc.md)

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### CanWrite\(\)

```csharp
public bool CanWrite()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CanWrite\(string\)

```csharp
public static bool CanWrite(string strPath)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ClosePost\(\)

```csharp
public bool ClosePost()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CloseSolver\(\)

```csharp
public bool CloseSolver()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ConverMemToObjet\(MemoryStream, Type\)

```csharp
public static object ConverMemToObjet(MemoryStream stream, Type type)
```

#### Parameters

`stream` [MemoryStream](https://learn.microsoft.com/dotnet/api/system.io.memorystream)

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### Create\(string\)

```csharp
public bool Create(string strPath)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### \~DOEFile\(\)

```csharp
protected ~DOEFile()
```

### GetCurrentCase\(\)

```csharp
public int GetCurrentCase()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetDefaultInnerFileName\(enProc\)

```csharp
public string GetDefaultInnerFileName(enProc proc)
```

#### Parameters

`proc` [enProc](VM.Managed.DAFUL.DOE.Result.enProc.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetDefaultInnerFileName\(enProc, int\)

```csharp
public string GetDefaultInnerFileName(enProc proc, int nCaseIdx)
```

#### Parameters

`proc` [enProc](VM.Managed.DAFUL.DOE.Result.enProc.md)

`nCaseIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### GetResult\(DOEFile, enProc\)

```csharp
public static object GetResult(DOEFile doe_file, enProc proc)
```

#### Parameters

`doe_file` [DOEFile](VM.Managed.DAFUL.DOE.Result.DOEFile.md)

`proc` [enProc](VM.Managed.DAFUL.DOE.Result.enProc.md)

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### GetResult\(DOEFile, enProc, int\)

```csharp
public static object GetResult(DOEFile doe_file, enProc proc, int nIdx)
```

#### Parameters

`doe_file` [DOEFile](VM.Managed.DAFUL.DOE.Result.DOEFile.md)

`proc` [enProc](VM.Managed.DAFUL.DOE.Result.enProc.md)

`nIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)

### IsExists\(\)

```csharp
public bool IsExists()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsExists\(enProc\)

```csharp
public bool IsExists(enProc proc)
```

#### Parameters

`proc` [enProc](VM.Managed.DAFUL.DOE.Result.enProc.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Load\(enProc, ref MemoryStream\)

```csharp
public bool Load(enProc proc, ref MemoryStream stream)
```

#### Parameters

`proc` [enProc](VM.Managed.DAFUL.DOE.Result.enProc.md)

`stream` [MemoryStream](https://learn.microsoft.com/dotnet/api/system.io.memorystream)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LoadCase\(int, ref MemoryStream\)

```csharp
public bool LoadCase(int nCaseIdx, ref MemoryStream stream)
```

#### Parameters

`nCaseIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`stream` [MemoryStream](https://learn.microsoft.com/dotnet/api/system.io.memorystream)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Save\(MemoryStream\)

```csharp
public bool Save(MemoryStream stream)
```

#### Parameters

`stream` [MemoryStream](https://learn.microsoft.com/dotnet/api/system.io.memorystream)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SaveAs\(string, MemoryStream\)

```csharp
public bool SaveAs(string strNewPath, MemoryStream stream)
```

#### Parameters

`strNewPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`stream` [MemoryStream](https://learn.microsoft.com/dotnet/api/system.io.memorystream)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SaveCase\(int, MemoryStream\)

```csharp
public bool SaveCase(int nCaseIdx, MemoryStream stream)
```

#### Parameters

`nCaseIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`stream` [MemoryStream](https://learn.microsoft.com/dotnet/api/system.io.memorystream)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


