# Class DocInfo

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This class is to represent the document information.

```csharp
public class DocInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DocInfo](VM.Managed.DAFUL.Pre.DocInfo.md)

#### Derived

[AssemblyDocInfo](VM.Managed.DAFUL.Pre.AssemblyDocInfo.md), 
[ControlDocInfo](VM.Managed.DAFUL.Pre.ControlDocInfo.md), 
[PropertyDocInfo](VM.Managed.DAFUL.Pre.PropertyDocInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### DocInfo\(\)

```csharp
public DocInfo()
```

## Properties

### ActiveModel

Gets or sets the active model.

```csharp
public Model ActiveModel { get; set; }
```

#### Property Value

 [Model](VM.Managed.DAFUL.Pre.Model.md)

### ActiveWork

Gets or sets the active work.

```csharp
public Work ActiveWork { get; set; }
```

#### Property Value

 [Work](VM.Managed.DAFUL.Pre.Work.md)

### Description

Gets or sets the description.

```csharp
public string Description { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Designer

Gets or sets the designer.

```csharp
public string Designer { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### DocCreateInfo

Gets or sets the doc create info.

```csharp
public DocCreateInfo DocCreateInfo { get; set; }
```

#### Property Value

 DocCreateInfo

### DocumentType

Gets the type of the document.

```csharp
public Type DocumentType { get; }
```

#### Property Value

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### Extension

Gets or sets the extension.

```csharp
public string Extension { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Filter

Gets or sets the filter.

```csharp
public string Filter { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Group

Gets or sets the group.

```csharp
public string Group { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Handle

Gets or sets the handle.

```csharp
public UIntPtr Handle { get; set; }
```

#### Property Value

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

### Helper

Gets or sets the helper.

```csharp
public IDocInfoHelper Helper { set; }
```

#### Property Value

 [IDocInfoHelper](VM.Managed.DAFUL.Pre.IDocInfoHelper.md)

### Hidden

Gets or sets the hidden state.

```csharp
public string Hidden { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Icon

Gets or sets the icon.

```csharp
public Icon Icon { get; }
```

#### Property Value

 [Icon](https://learn.microsoft.com/dotnet/api/system.drawing.icon)

### IconFile

Gets or sets the icon file.

```csharp
public string IconFile { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### IsFailedLicense

Gets a value indicating whether this instance's license is failed.

```csharp
public bool IsFailedLicense { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Mode

Gets or sets the mode.

```csharp
public string Mode { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Modules

Gets or sets the module files.

```csharp
public string[] Modules { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### Name

Gets or sets the name.

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Navigator

Gets or sets the navigator.

```csharp
public string Navigator { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### NewDocumentName

Gets the new name of the document.

```csharp
public string NewDocumentName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### NewFormType

Gets or sets the new type of the form.

```csharp
public string NewFormType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Toolkit

Gets or sets the toolkit.

```csharp
public string Toolkit { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Type

Gets or sets the type.

```csharp
public string Type { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TypeID

Gets or sets the type ID.

```csharp
public string TypeID { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### TypeName

Gets or sets the name of the type.

```csharp
public string TypeName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### UntitledDocCount

Gets or sets the untitled doc count.

```csharp
public uint UntitledDocCount { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)


