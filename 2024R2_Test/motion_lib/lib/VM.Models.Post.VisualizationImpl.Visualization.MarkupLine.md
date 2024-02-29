# <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkupLine"></a> Class MarkupLine

Namespace: [VM.Models.Post.VisualizationImpl.Visualization](VM.Models.Post.VisualizationImpl.Visualization.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public class MarkupLine
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MarkupLine](VM.Models.Post.VisualizationImpl.Visualization.MarkupLine.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkupLine__ctor_Ceetron_CeetronDesktopComponents_Color3f_System_Int32_"></a> MarkupLine\(Color3f, int\)

```csharp
public MarkupLine(Color3f color, int lineWidth)
```

#### Parameters

`color` Color3f

`lineWidth` [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkupLine_MarkupParts"></a> MarkupParts

```csharp
public IList<MarkupPart> MarkupParts { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<MarkupPart\>

## Methods

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkupLine_SetLineColor_Ceetron_CeetronDesktopComponents_Color3f_"></a> SetLineColor\(Color3f\)

```csharp
public void SetLineColor(Color3f color)
```

#### Parameters

`color` Color3f

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkupLine_SetLineWidth_System_Int32_"></a> SetLineWidth\(int\)

```csharp
public void SetLineWidth(int width)
```

#### Parameters

`width` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkupLine_SetVisible_System_Boolean_"></a> SetVisible\(bool\)

```csharp
public void SetVisible(bool visible)
```

#### Parameters

`visible` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkupLine_SetZeroScale"></a> SetZeroScale\(\)

```csharp
public void SetZeroScale()
```

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkupLine_Update_Ceetron_CeetronDesktopComponents_Vec3d_Ceetron_CeetronDesktopComponents_Vec3d_Ceetron_CeetronDesktopComponents_Vec3d_"></a> Update\(Vec3d, Vec3d, Vec3d\)

```csharp
public void Update(Vec3d startPoint, Vec3d endPoint, Vec3d center)
```

#### Parameters

`startPoint` Vec3d

`endPoint` Vec3d

`center` Vec3d

