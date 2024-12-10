#  Class FileDialogInfo

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This class is to represent the file dialog information.

```csharp
public class FileDialogInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[FileDialogInfo](VM.Managed.DAFUL.Pre.FileDialogInfo.md)

#### Derived

[OpenFileDialogInfo](VM.Managed.DAFUL.Pre.OpenFileDialogInfo.md), 
[SaveFileDialogInfo](VM.Managed.DAFUL.Pre.SaveFileDialogInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Pre_FileDialogInfo__ctor"></a> FileDialogInfo\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Pre.FileDialogInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public FileDialogInfo()
```

## Properties

### <a id="VM_Managed_DAFUL_Pre_FileDialogInfo_AddExtension"></a> AddExtension

Gets or sets the [add extension] flag.

```csharp
public bool AddExtension { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_FileDialogInfo_DefaultExt"></a> DefaultExt

Gets or sets the default extension.

```csharp
public string DefaultExt { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_FileDialogInfo_FileName"></a> FileName

Gets or sets the name of the file.

```csharp
public string FileName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_FileDialogInfo_Filter"></a> Filter

Gets or sets the filter.

```csharp
public string Filter { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_FileDialogInfo_FilterIndex"></a> FilterIndex

Gets or sets the filter index.

```csharp
public int FilterIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_Pre_FileDialogInfo_InitialDirectory"></a> InitialDirectory

Gets or sets the initial directory.

```csharp
public string InitialDirectory { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Pre_FileDialogInfo_RestoreDirectory"></a> RestoreDirectory

Gets or sets the [restore directory] flag.

```csharp
public bool RestoreDirectory { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Pre_FileDialogInfo_Title"></a> Title

Gets or sets the title.

```csharp
public string Title { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

