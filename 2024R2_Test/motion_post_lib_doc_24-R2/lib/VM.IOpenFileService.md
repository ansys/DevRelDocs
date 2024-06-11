# Interface IOpenFileService

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public interface IOpenFileService : IFileSupport
```

#### Implements

[IFileSupport](VM.IFileSupport.md)

## Properties

### FileNames

```csharp
IReadOnlyCollection<string> FileNames { get; }
```

#### Property Value

 [IReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### IsMultiSelect

```csharp
bool IsMultiSelect { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### ShowDialog\(\)

```csharp
bool ShowDialog()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


