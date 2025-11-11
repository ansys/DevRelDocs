# Class Body.ReplaceCADInfo
<a id="VM_Managed_CAD_Body_ReplaceCADInfo"></a>

Namespace: [VM.Managed.CAD](VM.Managed.CAD.md)  
Assembly: VMAppCore.dll  

This class is to represent the information for CAD replacing.

```csharp
public class Body.ReplaceCADInfo
```

#### Inheritance

object ← 
[Body.ReplaceCADInfo](VM.Managed.CAD.Body.ReplaceCADInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_CAD_Body_ReplaceCADInfo__ctor_System_String_System_String_System_Drawing_Color_"></a> ReplaceCADInfo\(string, string, Color\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Body.ReplaceCADInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ReplaceCADInfo(string strNameAttribute, string strCADFilePath, Color color)
```

#### Parameters

`strNameAttribute` string

The name attribute.

`strCADFilePath` string

The CAD file path.

`color` Color

The CAD color.

## Properties

### <a id="VM_Managed_CAD_Body_ReplaceCADInfo_CADFilePath"></a> CADFilePath

Gets or sets the CAD file path.

```csharp
public string CADFilePath { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_CAD_Body_ReplaceCADInfo_Color"></a> Color

Gets or sets the CAD color.

```csharp
public Color Color { get; set; }
```

#### Property Value

 Color

### <a id="VM_Managed_CAD_Body_ReplaceCADInfo_NameAttribute"></a> NameAttribute

Gets or sets the name attribute.

```csharp
public string NameAttribute { get; set; }
```

#### Property Value

 string

