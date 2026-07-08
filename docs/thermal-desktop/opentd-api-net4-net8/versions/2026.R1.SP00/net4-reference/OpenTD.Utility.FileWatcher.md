# Class FileWatcher

Namespace: [OpenTD.Utility](OpenTD.Utility.md)  
Assembly: OpenTD.dll  

```csharp
public class FileWatcher
```

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FileWatcher](OpenTD.Utility.FileWatcher.md)

## Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Constructors

### FileWatcher\(string\)

```csharp
public FileWatcher(string pathname)
```

#### Parameters

`pathname` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### FileChanged

```csharp
public bool FileChanged { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Pathname

```csharp
public string Pathname { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### Close\(\)

```csharp
public void Close()
```

### \~FileWatcher\(\)

```csharp
protected ~FileWatcher()
```

### Reset\(\)

```csharp
public void Reset()
```

### Changed

```csharp
public event FileSystemEventHandler Changed
```

#### Event Type

 [FileSystemEventHandler](https://learn.microsoft.com/dotnet/api/system.io.filesystemeventhandler)

### Deleted

```csharp
public event FileSystemEventHandler Deleted
```

#### Event Type

 [FileSystemEventHandler](https://learn.microsoft.com/dotnet/api/system.io.filesystemeventhandler)


