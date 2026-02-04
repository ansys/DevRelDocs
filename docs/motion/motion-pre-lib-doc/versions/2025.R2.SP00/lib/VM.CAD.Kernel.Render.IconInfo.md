#  Class IconInfo

Namespace: [VM.CAD.Kernel.Render](VM.CAD.Kernel.Render.md)  
Assembly: VM.CAD.Kernel.dll  

This class is to represent the icon information.

```csharp
public class IconInfo
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IconInfo](VM.CAD.Kernel.Render.IconInfo.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_CAD_Kernel_Render_IconInfo__ctor"></a> IconInfo\(\)

```csharp
public IconInfo()
```

## Properties

### <a id="VM_CAD_Kernel_Render_IconInfo_Key"></a> Key

Gets or sets the draw object's key.

```csharp
public string Key { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_CAD_Kernel_Render_IconInfo_Scale"></a> Scale

Gets or sets the draw sacle.

```csharp
public double Scale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Kernel_Render_IconInfo_Transforms"></a> Transforms

Gets or sets the draw object's transformation.

```csharp
public TMatrix[] Transforms { get; set; }
```

#### Property Value

 TMatrix\[\]

### <a id="VM_CAD_Kernel_Render_IconInfo_Type"></a> Type

Gets or sets the draw object's type.

```csharp
public string Type { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

