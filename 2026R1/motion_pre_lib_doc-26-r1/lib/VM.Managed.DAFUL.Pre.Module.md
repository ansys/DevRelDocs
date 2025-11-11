# Class Module
<a id="VM_Managed_DAFUL_Pre_Module"></a>

Namespace: [VM.Managed.DAFUL.Pre](VM.Managed.DAFUL.Pre.md)  
Assembly: dfpredat.dll  

This class is to represent the module.

```csharp
public class Module
```

#### Inheritance

object ← 
[Module](VM.Managed.DAFUL.Pre.Module.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Pre_Module__ctor"></a> Module\(\)

```csharp
public Module()
```

## Properties

### <a id="VM_Managed_DAFUL_Pre_Module_DocumentCommands"></a> DocumentCommands

Gets or sets the document commands.

```csharp
public List<Module.Command> DocumentCommands { get; set; }
```

#### Property Value

 List<[Module](VM.Managed.DAFUL.Pre.Module.md).[Command](VM.Managed.DAFUL.Pre.Module.Command.md)\>

### <a id="VM_Managed_DAFUL_Pre_Module_IsOverlap"></a> IsOverlap

Gets or sets a value indicating whether this instance is overlap.

```csharp
public bool IsOverlap { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_Pre_Module_Name"></a> Name

Gets or sets the name.

```csharp
public string Name { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_Module_ParentModule"></a> ParentModule

Gets or sets the parent module.

```csharp
public string ParentModule { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_Module_Toolkit"></a> Toolkit

Gets or sets the toolkit.

```csharp
public string Toolkit { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Pre_Module_ViewCommands"></a> ViewCommands

Gets or sets the view commands.

```csharp
public List<Module.Command> ViewCommands { get; set; }
```

#### Property Value

 List<[Module](VM.Managed.DAFUL.Pre.Module.md).[Command](VM.Managed.DAFUL.Pre.Module.Command.md)\>

