# Class ModelTemplate
<a id="VM_Managed_DAFUL_Pre_ModelTemplate"></a>

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This class is to represent the model template.

```csharp
public class ModelTemplate : FileGroup<Model.ModelItemGroup, GroupItem>, IFileGroup
```

#### Inheritance

object ← 
[Group<Model.ModelItemGroup, GroupItem\>](VM.Managed.DAFUL.Pre.Group\-2.md) ← 
[FileGroup<Model.ModelItemGroup, GroupItem\>](VM.Managed.DAFUL.Pre.FileGroup\-2.md) ← 
[ModelTemplate](VM.Managed.DAFUL.Pre.ModelTemplate.md)

#### Implements

[IFileGroup](VM.Managed.DAFUL.Pre.IFileGroup.md)

#### Inherited Members

[FileGroup<Model.ModelItemGroup, GroupItem\>.Path](VM.Managed.DAFUL.Pre.FileGroup\-2.md\#VM\_Managed\_DAFUL\_Pre\_FileGroup\_2\_Path), 
[Group<Model.ModelItemGroup, GroupItem\>.Initialize\(\)](VM.Managed.DAFUL.Pre.Group\-2.md\#VM\_Managed\_DAFUL\_Pre\_Group\_2\_Initialize), 
[Group<Model.ModelItemGroup, GroupItem\>.Name](VM.Managed.DAFUL.Pre.Group\-2.md\#VM\_Managed\_DAFUL\_Pre\_Group\_2\_Name), 
[Group<Model.ModelItemGroup, GroupItem\>.SubGroups](VM.Managed.DAFUL.Pre.Group\-2.md\#VM\_Managed\_DAFUL\_Pre\_Group\_2\_SubGroups), 
[Group<Model.ModelItemGroup, GroupItem\>.SubItems](VM.Managed.DAFUL.Pre.Group\-2.md\#VM\_Managed\_DAFUL\_Pre\_Group\_2\_SubItems)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Pre_ModelTemplate__ctor"></a> ModelTemplate\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Pre.ModelTemplate" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ModelTemplate()
```

## Properties

### <a id="VM_Managed_DAFUL_Pre_ModelTemplate_DefaultName"></a> DefaultName

Gets or sets the default name.

```csharp
public string DefaultName { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_ModelTemplate_Description"></a> Description

Gets or sets the description.

```csharp
public string Description { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_ModelTemplate_Extension"></a> Extension

Gets or sets the extension.

```csharp
public string Extension { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_ModelTemplate_Folders"></a> Folders

Gets or sets the folders.

```csharp
public List<string> Folders { get; set; }
```

#### Property Value

 List<string\>

### <a id="VM_Managed_DAFUL_Pre_ModelTemplate_IconPath"></a> IconPath

Gets or sets the icon path.

```csharp
public string IconPath { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_ModelTemplate_ToolKit"></a> ToolKit

Gets or sets the tool kit.

```csharp
public string ToolKit { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_ModelTemplate_Type"></a> Type

Gets or sets the type.

```csharp
public string Type { get; set; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_Pre_ModelTemplate_CreateModel_System_String_"></a> CreateModel\(string\)

Creates the model.

```csharp
public Model CreateModel(string strModelFileName)
```

#### Parameters

`strModelFileName` string

Name of the model.

#### Returns

 [Model](VM.Managed.DAFUL.Pre.Model.md)

The new model.

