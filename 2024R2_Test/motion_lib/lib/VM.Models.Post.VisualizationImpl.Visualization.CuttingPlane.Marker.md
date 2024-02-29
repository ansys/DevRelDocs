# <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlane_Marker"></a> Class Marker

Namespace: [VM.Models.Post.VisualizationImpl.Visualization.CuttingPlane](VM.Models.Post.VisualizationImpl.Visualization.CuttingPlane.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public class Marker
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Marker](VM.Models.Post.VisualizationImpl.Visualization.CuttingPlane.Marker.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlane_Marker__ctor_Ceetron_CeetronDesktopComponents_Visualization_MarkupModel_"></a> Marker\(MarkupModel\)

```csharp
public Marker(MarkupModel markupModel)
```

#### Parameters

`markupModel` MarkupModel

## Properties

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlane_Marker_SelectedComponent"></a> SelectedComponent

```csharp
public ComponentType SelectedComponent { get; }
```

#### Property Value

 [ComponentType](VM.Models.Post.VisualizationImpl.Visualization.CuttingPlane.ComponentType.md)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlane_Marker_Transformation"></a> Transformation

```csharp
public Mat4d Transformation { get; set; }
```

#### Property Value

 Mat4d

## Methods

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlane_Marker_GetAxisFromType_VM_Models_Post_VisualizationImpl_Visualization_CuttingPlane_ComponentType_Ceetron_CeetronDesktopComponents_Mat4d_"></a> GetAxisFromType\(ComponentType, Mat4d\)

```csharp
public static Vec3d GetAxisFromType(ComponentType type, Mat4d mat)
```

#### Parameters

`type` [ComponentType](VM.Models.Post.VisualizationImpl.Visualization.CuttingPlane.ComponentType.md)

`mat` Mat4d

#### Returns

 Vec3d

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlane_Marker_Initialize_Ceetron_CeetronDesktopComponents_Vec3d_Ceetron_CeetronDesktopComponents_Vec3d_"></a> Initialize\(Vec3d, Vec3d\)

```csharp
public void Initialize(Vec3d position, Vec3d normal)
```

#### Parameters

`position` Vec3d

`normal` Vec3d

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlane_Marker_IsCutPlaneRotateTransType_VM_Models_Post_VisualizationImpl_Visualization_CuttingPlane_ComponentType_"></a> IsCutPlaneRotateTransType\(ComponentType\)

```csharp
public static int IsCutPlaneRotateTransType(ComponentType type)
```

#### Parameters

`type` [ComponentType](VM.Models.Post.VisualizationImpl.Visualization.CuttingPlane.ComponentType.md)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlane_Marker_IsRotation_VM_Models_Post_VisualizationImpl_Visualization_CuttingPlane_ComponentType_"></a> IsRotation\(ComponentType\)

```csharp
public static bool IsRotation(ComponentType type)
```

#### Parameters

`type` [ComponentType](VM.Models.Post.VisualizationImpl.Visualization.CuttingPlane.ComponentType.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlane_Marker_IsTranslation_VM_Models_Post_VisualizationImpl_Visualization_CuttingPlane_ComponentType_"></a> IsTranslation\(ComponentType\)

```csharp
public static bool IsTranslation(ComponentType type)
```

#### Parameters

`type` [ComponentType](VM.Models.Post.VisualizationImpl.Visualization.CuttingPlane.ComponentType.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlane_Marker_PickObject_Ceetron_CeetronDesktopComponents_Visualization_View_System_Int32_System_Int32_"></a> PickObject\(View, int, int\)

```csharp
public MarkerSelectedInfo PickObject(View view, int x, int y)
```

#### Parameters

`view` View

`x` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`y` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [MarkerSelectedInfo](VM.Models.Post.VisualizationImpl.Visualization.CuttingPlane.MarkerSelectedInfo.md)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlane_Marker_Selected_VM_Models_Post_VisualizationImpl_Visualization_CuttingPlane_MarkerSelectedInfo_"></a> Selected\(MarkerSelectedInfo\)

```csharp
public void Selected(MarkerSelectedInfo selectedInfo)
```

#### Parameters

`selectedInfo` [MarkerSelectedInfo](VM.Models.Post.VisualizationImpl.Visualization.CuttingPlane.MarkerSelectedInfo.md)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlane_Marker_SetPosition_Ceetron_CeetronDesktopComponents_Vec3d_"></a> SetPosition\(Vec3d\)

```csharp
public void SetPosition(Vec3d position)
```

#### Parameters

`position` Vec3d

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlane_Marker_SetVisible_System_Boolean_"></a> SetVisible\(bool\)

```csharp
public void SetVisible(bool visible)
```

#### Parameters

`visible` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_CuttingPlane_Marker_UpdateTransformation_Ceetron_CeetronDesktopComponents_Visualization_View_System_Int32_System_Int32_System_Int32_System_Int32_System_Double__"></a> UpdateTransformation\(View, int, int, int, int, ref double\)

```csharp
public bool UpdateTransformation(View view, int preX, int preY, int x, int y, ref double doffset)
```

#### Parameters

`view` View

`preX` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`preY` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`x` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`y` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`doffset` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

