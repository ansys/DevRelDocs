# <a id="VM_Models_Post_IDataRoadGeometryPart"></a> Interface IDataRoadGeometryPart

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IDataRoadGeometryPart
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_IDataRoadGeometryPart_ColorScheme"></a> ColorScheme

```csharp
ColorSchemeTable ColorScheme { get; set; }
```

#### Property Value

 [ColorSchemeTable](VM.Models.Post.ColorSchemeTable.md)

### <a id="VM_Models_Post_IDataRoadGeometryPart_CurrentColorScheme"></a> CurrentColorScheme

```csharp
IList<Color> CurrentColorScheme { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)\>

### <a id="VM_Models_Post_IDataRoadGeometryPart_EnableContour"></a> EnableContour

```csharp
bool EnableContour { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IDataRoadGeometryPart_FilePath"></a> FilePath

```csharp
string FilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_IDataRoadGeometryPart_FitAllRelatedViews"></a> FitAllRelatedViews

```csharp
Action FitAllRelatedViews { get; set; }
```

#### Property Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action)

### <a id="VM_Models_Post_IDataRoadGeometryPart_LegendContinuousDomain"></a> LegendContinuousDomain

```csharp
IOverlayLegendContinuousDomain LegendContinuousDomain { get; set; }
```

#### Property Value

 [IOverlayLegendContinuousDomain](VM.Models.Post.IOverlayLegendContinuousDomain.md)

### <a id="VM_Models_Post_IDataRoadGeometryPart_LegendFontColor"></a> LegendFontColor

```csharp
Color LegendFontColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_IDataRoadGeometryPart_LegendVisible"></a> LegendVisible

```csharp
bool LegendVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IDataRoadGeometryPart_Name"></a> Name

```csharp
string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_IDataRoadGeometryPart_ParentIndex"></a> ParentIndex

```csharp
int ParentIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IDataRoadGeometryPart_PartColor"></a> PartColor

```csharp
Color PartColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_IDataRoadGeometryPart_PartVisible"></a> PartVisible

```csharp
bool PartVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IDataRoadGeometryPart_SystemUnit"></a> SystemUnit

```csharp
ExtendedUnit SystemUnit { get; set; }
```

#### Property Value

 [ExtendedUnit](VM.Models.Post.ExtendedUnit.md)

### <a id="VM_Models_Post_IDataRoadGeometryPart_Unit"></a> Unit

```csharp
string Unit { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

