# <a id="OpenTD_Utility_FileUtility"></a> Class FileUtility

Namespace: [OpenTD.Utility](OpenTD.Utility.md)  
Assembly: OpenTD.dll  

Utility methods for working with files.

```csharp
public static class FileUtility
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FileUtility](OpenTD.Utility.FileUtility.md)

#### Inherited Members

[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

## Methods

### <a id="OpenTD_Utility_FileUtility_GetEndOfPath_System_String_"></a> GetEndOfPath\(string\)

Returns either the filename or directory name at the end of the input path.

```csharp
public static string GetEndOfPath(string path)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

System.String.

### <a id="OpenTD_Utility_FileUtility_IsDirectory_System_String_"></a> IsDirectory\(string\)

Determines whether the specified path is a directory.

```csharp
public static bool IsDirectory(string path)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if the specified path is a directory; otherwise, <code>false</code>.

### <a id="OpenTD_Utility_FileUtility_IsFileLocked_System_IO_FileInfo_"></a> IsFileLocked\(FileInfo\)

Determines whether a file is locked for use.

```csharp
public static bool IsFileLocked(FileInfo file)
```

#### Parameters

`file` [FileInfo](https://learn.microsoft.com/dotnet/api/system.io.fileinfo)

The file.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

