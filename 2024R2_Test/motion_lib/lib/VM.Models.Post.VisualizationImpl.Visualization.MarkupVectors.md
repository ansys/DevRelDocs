# <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkupVectors"></a> Class MarkupVectors

Namespace: [VM.Models.Post.VisualizationImpl.Visualization](VM.Models.Post.VisualizationImpl.Visualization.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public class MarkupVectors
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MarkupVectors](VM.Models.Post.VisualizationImpl.Visualization.MarkupVectors.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkupVectors__ctor_VM_Models_Post_VectorDisplayType_System_Drawing_Color_System_Boolean_System_Double_"></a> MarkupVectors\(VectorDisplayType, Color, bool, double\)

```csharp
public MarkupVectors(VectorDisplayType vectorDisplayType, Color color, bool visible, double firstFrameLargeExt)
```

#### Parameters

`vectorDisplayType` VectorDisplayType

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

`visible` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`firstFrameLargeExt` [double](https://learn.microsoft.com/dotnet/api/system.double)

## Properties

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkupVectors_MarkupCone"></a> MarkupCone

```csharp
public MarkupPartInstancedGeometry MarkupCone { get; }
```

#### Property Value

 MarkupPartInstancedGeometry

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkupVectors_MarkupLines"></a> MarkupLines

```csharp
public MarkupPartInstancedGeometry MarkupLines { get; }
```

#### Property Value

 MarkupPartInstancedGeometry

## Methods

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkupVectors_SetColor_Ceetron_CeetronDesktopComponents_Color3f_"></a> SetColor\(Color3f\)

```csharp
public void SetColor(Color3f color)
```

#### Parameters

`color` Color3f

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkupVectors_SetVectorDisplayType_VM_Models_Post_VectorDisplayType_"></a> SetVectorDisplayType\(VectorDisplayType\)

```csharp
public void SetVectorDisplayType(VectorDisplayType type)
```

#### Parameters

`type` VectorDisplayType

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkupVectors_SetVisible_System_Boolean_"></a> SetVisible\(bool\)

```csharp
public void SetVisible(bool visible)
```

#### Parameters

`visible` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkupVectors_Update_Ceetron_CeetronDesktopComponents_Vec3d_Ceetron_CeetronDesktopComponents_Vec3d_System_Double_System_Boolean_System_Double_"></a> Update\(Vec3d, Vec3d, double, bool, double\)

```csharp
public void Update(Vec3d position, Vec3d vector, double localScale, bool isLog, double largeExtentOfBoundingBox)
```

#### Parameters

`position` Vec3d

`vector` Vec3d

`localScale` [double](https://learn.microsoft.com/dotnet/api/system.double)

`isLog` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`largeExtentOfBoundingBox` [double](https://learn.microsoft.com/dotnet/api/system.double)

