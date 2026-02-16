# <a id="OpenTD_Utility_FileWatcher"></a> Class FileWatcher

Namespace: [OpenTD.Utility](OpenTD.Utility.md)  
Assembly: OpenTD.dll  

```csharp
public class FileWatcher
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FileWatcher](OpenTD.Utility.FileWatcher.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### <a id="OpenTD_Utility_FileWatcher__ctor_System_String_"></a> FileWatcher\(string\)

```csharp
public FileWatcher(string pathname)
```

#### Parameters

`pathname` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="OpenTD_Utility_FileWatcher_FileChanged"></a> FileChanged

```csharp
public bool FileChanged { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OpenTD_Utility_FileWatcher_Pathname"></a> Pathname

```csharp
public string Pathname { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="OpenTD_Utility_FileWatcher_Close"></a> Close\(\)

```csharp
public void Close()
```

### <a id="OpenTD_Utility_FileWatcher_Finalize"></a> \~FileWatcher\(\)

```csharp
protected ~FileWatcher()
```

### <a id="OpenTD_Utility_FileWatcher_Reset"></a> Reset\(\)

```csharp
public void Reset()
```

### <a id="OpenTD_Utility_FileWatcher_Changed"></a> Changed

```csharp
public event FileSystemEventHandler Changed
```

#### Event Type

 [FileSystemEventHandler](https://learn.microsoft.com/dotnet/api/system.io.filesystemeventhandler)

### <a id="OpenTD_Utility_FileWatcher_Deleted"></a> Deleted

```csharp
public event FileSystemEventHandler Deleted
```

#### Event Type

 [FileSystemEventHandler](https://learn.microsoft.com/dotnet/api/system.io.filesystemeventhandler)

