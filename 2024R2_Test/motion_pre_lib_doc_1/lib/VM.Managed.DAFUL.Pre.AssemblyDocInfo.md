# Class AssemblyDocInfo

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This class is to represent the document information for assembly.

```csharp
public class AssemblyDocInfo : DocInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DocInfo](VM.Managed.DAFUL.Pre.DocInfo.md) ← 
[AssemblyDocInfo](VM.Managed.DAFUL.Pre.AssemblyDocInfo.md)

#### Derived

[HiddenDocInfo](VM.Managed.DAFUL.Pre.HiddenDocInfo.md), 
[TemplateAssemblyDocInfo](VM.Managed.DAFUL.Pre.TemplateAssemblyDocInfo.md)

#### Inherited Members

[DocInfo.Icon](VM.Managed.DAFUL.Pre.DocInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocInfo\_Icon), 
[DocInfo.IsFailedLicense](VM.Managed.DAFUL.Pre.DocInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocInfo\_IsFailedLicense), 
[DocInfo.Type](VM.Managed.DAFUL.Pre.DocInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocInfo\_Type), 
[DocInfo.Name](VM.Managed.DAFUL.Pre.DocInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocInfo\_Name), 
[DocInfo.TypeName](VM.Managed.DAFUL.Pre.DocInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocInfo\_TypeName), 
[DocInfo.Extension](VM.Managed.DAFUL.Pre.DocInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocInfo\_Extension), 
[DocInfo.Description](VM.Managed.DAFUL.Pre.DocInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocInfo\_Description), 
[DocInfo.IconFile](VM.Managed.DAFUL.Pre.DocInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocInfo\_IconFile), 
[DocInfo.Filter](VM.Managed.DAFUL.Pre.DocInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocInfo\_Filter), 
[DocInfo.TypeID](VM.Managed.DAFUL.Pre.DocInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocInfo\_TypeID), 
[DocInfo.NewFormType](VM.Managed.DAFUL.Pre.DocInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocInfo\_NewFormType), 
[DocInfo.DocCreateInfo](VM.Managed.DAFUL.Pre.DocInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocInfo\_DocCreateInfo), 
[DocInfo.Handle](VM.Managed.DAFUL.Pre.DocInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocInfo\_Handle), 
[DocInfo.Modules](VM.Managed.DAFUL.Pre.DocInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocInfo\_Modules), 
[DocInfo.Mode](VM.Managed.DAFUL.Pre.DocInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocInfo\_Mode), 
[DocInfo.DocumentType](VM.Managed.DAFUL.Pre.DocInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocInfo\_DocumentType), 
[DocInfo.Helper](VM.Managed.DAFUL.Pre.DocInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocInfo\_Helper), 
[DocInfo.UntitledDocCount](VM.Managed.DAFUL.Pre.DocInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocInfo\_UntitledDocCount), 
[DocInfo.NewDocumentName](VM.Managed.DAFUL.Pre.DocInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocInfo\_NewDocumentName), 
[DocInfo.Group](VM.Managed.DAFUL.Pre.DocInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocInfo\_Group), 
[DocInfo.Toolkit](VM.Managed.DAFUL.Pre.DocInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocInfo\_Toolkit), 
[DocInfo.Hidden](VM.Managed.DAFUL.Pre.DocInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocInfo\_Hidden), 
[DocInfo.Designer](VM.Managed.DAFUL.Pre.DocInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocInfo\_Designer), 
[DocInfo.Navigator](VM.Managed.DAFUL.Pre.DocInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocInfo\_Navigator), 
[DocInfo.ActiveWork](VM.Managed.DAFUL.Pre.DocInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocInfo\_ActiveWork), 
[DocInfo.ActiveModel](VM.Managed.DAFUL.Pre.DocInfo.md\#VM\_Managed\_DAFUL\_Pre\_DocInfo\_ActiveModel)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### AssemblyDocInfo\(\)

```csharp
public AssemblyDocInfo()
```

## Fields

### BuilderType

Builder Type of Assmebly.

```csharp
public string BuilderType
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Format

Sets the format info.

```csharp
public Document3D.FileFormat Format
```

#### Field Value

 Document3D.FileFormat

## Properties

### BaseType

Gets or sets the type of the base.

```csharp
public AssemblyDocInfo.AssemblyType BaseType { get; set; }
```

#### Property Value

 [AssemblyDocInfo](VM.Managed.DAFUL.Pre.AssemblyDocInfo.md).[AssemblyType](VM.Managed.DAFUL.Pre.AssemblyDocInfo.AssemblyType.md)

### CategoryName

Gets or sets the category file.

```csharp
public string CategoryName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ChangeUsageForCADExport

Gets or sets a value indicating whether [change usage for cad export].

```csharp
public bool ChangeUsageForCADExport { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ChangeUsageForCADImport

Gets or sets a value indicating whether [change usage for cad import].

```csharp
public bool ChangeUsageForCADImport { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ChangeUsageForFEImport

Gets or sets a value indicating whether [change usage for fe import].

```csharp
public bool ChangeUsageForFEImport { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ChangeUsageForMeshAssembly

Gets or sets a value indicating whether [change usage for mesh assembly].

```csharp
public bool ChangeUsageForMeshAssembly { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ChangeUsageForPartAssembly

Gets or sets a value indicating whether [change usage for part assembly].

```csharp
public bool ChangeUsageForPartAssembly { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ChangeUsageForSubsystemAssembly

Gets or sets a value indicating whether [change usage for subsystem assembly].

```csharp
public bool ChangeUsageForSubsystemAssembly { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IconFiles

Gets or sets the icon files.

```csharp
public static string[] IconFiles { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

### PriorityType

Gets or sets the type of the base.

```csharp
public AssemblyDocInfo.AddDocTemplatePriorityType PriorityType { get; set; }
```

#### Property Value

 [AssemblyDocInfo](VM.Managed.DAFUL.Pre.AssemblyDocInfo.md).[AddDocTemplatePriorityType](VM.Managed.DAFUL.Pre.AssemblyDocInfo.AddDocTemplatePriorityType.md)


