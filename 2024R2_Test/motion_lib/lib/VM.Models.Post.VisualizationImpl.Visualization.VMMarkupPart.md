# <a id="VM_Models_Post_VisualizationImpl_Visualization_VMMarkupPart"></a> Class VMMarkupPart

Namespace: [VM.Models.Post.VisualizationImpl.Visualization](VM.Models.Post.VisualizationImpl.Visualization.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public abstract class VMMarkupPart
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[VMMarkupPart](VM.Models.Post.VisualizationImpl.Visualization.VMMarkupPart.md)

#### Derived

[VMMarkupArc](VM.Models.Post.VisualizationImpl.Visualization.VMMarkupArc.md), 
[VMMarkupArrow](VM.Models.Post.VisualizationImpl.Visualizations.VMMarkupArrow.md), 
[VMMarkupCrossArrow](VM.Models.Post.VisualizationImpl.Visualization.VMMarkupCrossArrow.md), 
[VMMarkupPlane](VM.Models.Post.VisualizationImpl.Visualization.VMMarkupPlane.md), 
[VMMarkupSphere](VM.Models.Post.VisualizationImpl.Visualization.CuttingPlane.VMMarkupSphere.md), 
[VMMarkupSubLine](VM.Models.Post.VisualizationImpl.Visualization.VMMarkupSubLine.md), 
[VMMarkupTorus](VM.Models.Post.VisualizationImpl.Visualization.VMMarkupTorus.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VMMarkupPart__ctor_Ceetron_CeetronDesktopComponents_Visualization_MarkupModel_"></a> VMMarkupPart\(MarkupModel\)

```csharp
public VMMarkupPart(MarkupModel markupModel)
```

#### Parameters

`markupModel` MarkupModel

## Fields

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VMMarkupPart_AxisX"></a> AxisX

```csharp
public static readonly Vec3d AxisX
```

#### Field Value

 Vec3d

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VMMarkupPart_AxisY"></a> AxisY

```csharp
public static readonly Vec3d AxisY
```

#### Field Value

 Vec3d

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VMMarkupPart_AxisZ"></a> AxisZ

```csharp
public static readonly Vec3d AxisZ
```

#### Field Value

 Vec3d

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VMMarkupPart_Zero"></a> Zero

```csharp
public static readonly Vec3d Zero
```

#### Field Value

 Vec3d

## Properties

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VMMarkupPart_IsVisible"></a> IsVisible

```csharp
public bool IsVisible { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VMMarkupPart_MarkupParts"></a> MarkupParts

```csharp
protected IList<MarkupPart> MarkupParts { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<MarkupPart\>

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VMMarkupPart_ScaleFactor"></a> ScaleFactor

```csharp
protected Vec3d ScaleFactor { get; set; }
```

#### Property Value

 Vec3d

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VMMarkupPart_Transfromation"></a> Transfromation

```csharp
public Mat4d Transfromation { get; set; }
```

#### Property Value

 Mat4d

## Methods

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VMMarkupPart_Find_Ceetron_CeetronDesktopComponents_Visualization_MarkupPart_"></a> Find\(MarkupPart\)

```csharp
public bool Find(MarkupPart target)
```

#### Parameters

`target` MarkupPart

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VMMarkupPart_Hide"></a> Hide\(\)

```csharp
public void Hide()
```

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VMMarkupPart_SetMarkupPartToMarkupModel"></a> SetMarkupPartToMarkupModel\(\)

```csharp
protected void SetMarkupPartToMarkupModel()
```

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VMMarkupPart_Show"></a> Show\(\)

```csharp
public void Show()
```

