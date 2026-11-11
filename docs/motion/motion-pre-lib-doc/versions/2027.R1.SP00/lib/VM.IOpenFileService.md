# Interface IOpenFileService
<a id="VM_IOpenFileService"></a>

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public interface IOpenFileService : IFileSupport
```

#### Implements

[IFileSupport](VM.IFileSupport.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_IOpenFileService_FileNames"></a> FileNames

```csharp
IReadOnlyCollection<string> FileNames { get; }
```

#### Property Value

 IReadOnlyCollection<string\>

### <a id="VM_IOpenFileService_IsMultiSelect"></a> IsMultiSelect

```csharp
bool IsMultiSelect { get; set; }
```

#### Property Value

 bool

## Methods

### <a id="VM_IOpenFileService_ShowDialog"></a> ShowDialog\(\)

```csharp
bool ShowDialog()
```

#### Returns

 bool

