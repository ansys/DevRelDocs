#  Interface IOpenFileService

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public interface IOpenFileService : IFileSupport
```

#### Implements

[IFileSupport](VM.IFileSupport.md)

## Properties

### <a id="VM_IOpenFileService_FileNames"></a> FileNames

```csharp
IReadOnlyCollection<string> FileNames { get; }
```

#### Property Value

 [IReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_IOpenFileService_IsMultiSelect"></a> IsMultiSelect

```csharp
bool IsMultiSelect { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_IOpenFileService_ShowDialog"></a> ShowDialog\(\)

```csharp
bool ShowDialog()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

