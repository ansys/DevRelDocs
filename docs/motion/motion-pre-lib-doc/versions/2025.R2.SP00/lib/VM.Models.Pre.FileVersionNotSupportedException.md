#  Class FileVersionNotSupportedException

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

Represents errors that occur during opening not supported version of file.

```csharp
public class FileVersionNotSupportedException : Exception
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Exception](https://learn.microsoft.com/dotnet/api/system.exception) ← 
[FileVersionNotSupportedException](VM.Models.Pre.FileVersionNotSupportedException.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Pre_FileVersionNotSupportedException__ctor"></a> FileVersionNotSupportedException\(\)

Initialize a new instance of the <xref href="VM.Models.Pre.FileVersionNotSupportedException" data-throw-if-not-resolved="false"></xref> class.

```csharp
public FileVersionNotSupportedException()
```

### <a id="VM_Models_Pre_FileVersionNotSupportedException__ctor_System_String_"></a> FileVersionNotSupportedException\(string\)

Initialize a new instance of the <xref href="VM.Models.Pre.FileVersionNotSupportedException" data-throw-if-not-resolved="false"></xref> class with a specified error message.

```csharp
public FileVersionNotSupportedException(string version)
```

#### Parameters

`version` [string](https://learn.microsoft.com/dotnet/api/system.string)

The version of the save file.

### <a id="VM_Models_Pre_FileVersionNotSupportedException__ctor_System_String_System_Exception_"></a> FileVersionNotSupportedException\(string, Exception\)

Initialize a new instance of the <xref href="VM.Models.Pre.FileVersionNotSupportedException" data-throw-if-not-resolved="false"></xref> class with a specified error message
and a reference to the inner exception that is the cause of this exception

```csharp
public FileVersionNotSupportedException(string version, Exception innerException)
```

#### Parameters

`version` [string](https://learn.microsoft.com/dotnet/api/system.string)

The version of the save file.

`innerException` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The exception that is the cause of the current exception, or a null reference
            (Nothing in Visual Basic) if no inner exception is specified.

## Properties

### <a id="VM_Models_Pre_FileVersionNotSupportedException_IsV242Sp3"></a> IsV242Sp3

The flag indicates that the save file is saved by 2024 R2 SP3 version.

```csharp
public bool IsV242Sp3 { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Pre_FileVersionNotSupportedException_Version"></a> Version

The version of the save file

```csharp
public string Version { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

