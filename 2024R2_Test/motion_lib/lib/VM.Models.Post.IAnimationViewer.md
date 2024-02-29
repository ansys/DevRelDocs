# <a id="VM_Models_Post_IAnimationViewer"></a> Interface IAnimationViewer

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IAnimationViewer
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_IAnimationViewer_BottomColor"></a> BottomColor

```csharp
Color BottomColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_IAnimationViewer_IsAddedModel"></a> IsAddedModel

```csharp
bool IsAddedModel { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IAnimationViewer_IsEnabledCamera"></a> IsEnabledCamera

```csharp
bool IsEnabledCamera { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IAnimationViewer_IsEnabledFollowingOrientation"></a> IsEnabledFollowingOrientation

```csharp
bool IsEnabledFollowingOrientation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IAnimationViewer_IsVisibleLogo"></a> IsVisibleLogo

```csharp
bool IsVisibleLogo { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IAnimationViewer_IsVisibleNavigationCube"></a> IsVisibleNavigationCube

```csharp
bool IsVisibleNavigationCube { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IAnimationViewer_IsVisibleState"></a> IsVisibleState

```csharp
bool IsVisibleState { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IAnimationViewer_LogoHeight"></a> LogoHeight

```csharp
uint LogoHeight { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_IAnimationViewer_LogoPath"></a> LogoPath

```csharp
string LogoPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_IAnimationViewer_LogoPosition"></a> LogoPosition

```csharp
Layout LogoPosition { get; set; }
```

#### Property Value

 [Layout](VM.Models.Post.Layout.md)

### <a id="VM_Models_Post_IAnimationViewer_LogoTransparency"></a> LogoTransparency

```csharp
double LogoTransparency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IAnimationViewer_LogoWidth"></a> LogoWidth

```csharp
uint LogoWidth { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_IAnimationViewer_NavigationCubeHeight"></a> NavigationCubeHeight

```csharp
uint NavigationCubeHeight { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_IAnimationViewer_NavigationCubePosition"></a> NavigationCubePosition

```csharp
Layout NavigationCubePosition { get; set; }
```

#### Property Value

 [Layout](VM.Models.Post.Layout.md)

### <a id="VM_Models_Post_IAnimationViewer_NavigationCubeWidth"></a> NavigationCubeWidth

```csharp
uint NavigationCubeWidth { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_IAnimationViewer_StatePosition"></a> StatePosition

```csharp
Layout StatePosition { get; set; }
```

#### Property Value

 [Layout](VM.Models.Post.Layout.md)

### <a id="VM_Models_Post_IAnimationViewer_StateTextColor"></a> StateTextColor

```csharp
Color StateTextColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_IAnimationViewer_TopColor"></a> TopColor

```csharp
Color TopColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

## Methods

### <a id="VM_Models_Post_IAnimationViewer_AddModel_VM_Models_Post_IModel_"></a> AddModel\(IModel\)

```csharp
void AddModel(IModel model)
```

#### Parameters

`model` [IModel](VM.Models.Post.IModel.md)

### <a id="VM_Models_Post_IAnimationViewer_AddOuterSurfaceGeometries_System_Collections_Generic_IList_System_Collections_Generic_KeyValuePair_VM_Models_Post_IDataPart_System_UInt32_____"></a> AddOuterSurfaceGeometries\(IList<KeyValuePair<IDataPart, uint\[\]\>\>\)

```csharp
void AddOuterSurfaceGeometries(IList<KeyValuePair<IDataPart, uint[]>> outerSurfaces)
```

#### Parameters

`outerSurfaces` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair\-2)<[IDataPart](VM.Models.Post.IDataPart.md), [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]\>\>

### <a id="VM_Models_Post_IAnimationViewer_CheckCameraTargetNodeId"></a> CheckCameraTargetNodeId\(\)

```csharp
int CheckCameraTargetNodeId()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IAnimationViewer_ClearAllSelection"></a> ClearAllSelection\(\)

```csharp
void ClearAllSelection()
```

### <a id="VM_Models_Post_IAnimationViewer_ClearOuterSurfaceGeometries"></a> ClearOuterSurfaceGeometries\(\)

```csharp
void ClearOuterSurfaceGeometries()
```

### <a id="VM_Models_Post_IAnimationViewer_ClearScene"></a> ClearScene\(\)

```csharp
void ClearScene()
```

### <a id="VM_Models_Post_IAnimationViewer_ClearText"></a> ClearText\(\)

```csharp
void ClearText()
```

### <a id="VM_Models_Post_IAnimationViewer_Destroy"></a> Destroy\(\)

```csharp
void Destroy()
```

### <a id="VM_Models_Post_IAnimationViewer_DrawText_VM_Vector_System_String_System_Boolean_"></a> DrawText\(Vector, string, bool\)

```csharp
void DrawText(Vector position, string text, bool isMarker)
```

#### Parameters

`position` Vector

`text` [string](https://learn.microsoft.com/dotnet/api/system.string)

`isMarker` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IAnimationViewer_ExportVTFxFile_System_String_"></a> ExportVTFxFile\(string\)

```csharp
void ExportVTFxFile(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_IAnimationViewer_FitView"></a> FitView\(\)

```csharp
void FitView()
```

### <a id="VM_Models_Post_IAnimationViewer_FitView_VM_Vector_VM_Vector_"></a> FitView\(Vector, Vector\)

```csharp
void FitView(Vector dir, Vector up)
```

#### Parameters

`dir` Vector

`up` Vector

### <a id="VM_Models_Post_IAnimationViewer_GetSelectedItems"></a> GetSelectedItems\(\)

```csharp
IList<HitItemInfo> GetSelectedItems()
```

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[HitItemInfo](VM.Models.Post.HitItemInfo.md)\>

### <a id="VM_Models_Post_IAnimationViewer_GetWindowCoordinate_System_Double___System_Drawing_Point__"></a> GetWindowCoordinate\(double\[\], ref Point\)

```csharp
bool GetWindowCoordinate(double[] point, ref Point viewPoint)
```

#### Parameters

`point` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`viewPoint` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IAnimationViewer_HitTestOnRectangle_System_Drawing_Point_System_Int32_System_Int32_"></a> HitTestOnRectangle\(Point, int, int\)

```csharp
IList<HitItemInfo> HitTestOnRectangle(Point leftTop, int width, int height)
```

#### Parameters

`leftTop` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

`width` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`height` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[HitItemInfo](VM.Models.Post.HitItemInfo.md)\>

### <a id="VM_Models_Post_IAnimationViewer_InitFitView"></a> InitFitView\(\)

```csharp
void InitFitView()
```

### <a id="VM_Models_Post_IAnimationViewer_NavigateTarget_System_Drawing_Point_"></a> NavigateTarget\(Point\)

```csharp
IList<HitItemInfo> NavigateTarget(Point pt)
```

#### Parameters

`pt` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[HitItemInfo](VM.Models.Post.HitItemInfo.md)\>

### <a id="VM_Models_Post_IAnimationViewer_RegisterCuttingPlanePositionUpdate_System_Action_"></a> RegisterCuttingPlanePositionUpdate\(Action\)

```csharp
void RegisterCuttingPlanePositionUpdate(Action callback)
```

#### Parameters

`callback` [Action](https://learn.microsoft.com/dotnet/api/system.action)

### <a id="VM_Models_Post_IAnimationViewer_Release"></a> Release\(\)

```csharp
void Release()
```

### <a id="VM_Models_Post_IAnimationViewer_Render"></a> Render\(\)

```csharp
void Render()
```

### <a id="VM_Models_Post_IAnimationViewer_ReplaceModel_VM_Models_Post_IModel_"></a> ReplaceModel\(IModel\)

```csharp
void ReplaceModel(IModel model)
```

#### Parameters

`model` [IModel](VM.Models.Post.IModel.md)

### <a id="VM_Models_Post_IAnimationViewer_Select_System_Collections_Generic_IList_VM_Models_Post_HitItemInfo__"></a> Select\(IList<HitItemInfo\>\)

```csharp
void Select(IList<HitItemInfo> hititems)
```

#### Parameters

`hititems` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[HitItemInfo](VM.Models.Post.HitItemInfo.md)\>

### <a id="VM_Models_Post_IAnimationViewer_SetFollowingCameraTarget_VM_Models_Post_HitItemInfo_"></a> SetFollowingCameraTarget\(HitItemInfo\)

```csharp
void SetFollowingCameraTarget(HitItemInfo hitItemInfo)
```

#### Parameters

`hitItemInfo` [HitItemInfo](VM.Models.Post.HitItemInfo.md)

### <a id="VM_Models_Post_IAnimationViewer_SetProjection_System_Boolean_"></a> SetProjection\(bool\)

```csharp
void SetProjection(bool bPerspective)
```

#### Parameters

`bPerspective` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IAnimationViewer_SetViewport_VM_Models_Post_Viewport_VM_Models_Post_ViewPlane_VM_Models_Post_Direction_"></a> SetViewport\(Viewport, ViewPlane, Direction\)

```csharp
void SetViewport(Viewport viewport, ViewPlane viewPlane, Direction upDirection)
```

#### Parameters

`viewport` [Viewport](VM.Models.Post.Viewport.md)

`viewPlane` [ViewPlane](VM.Models.Post.ViewPlane.md)

`upDirection` [Direction](VM.Models.Post.Direction.md)

### <a id="VM_Models_Post_IAnimationViewer_SetViewport_System_Int32_System_Int32_System_UInt32_System_UInt32_"></a> SetViewport\(int, int, uint, uint\)

```csharp
void SetViewport(int x, int y, uint width, uint height)
```

#### Parameters

`x` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`y` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`width` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`height` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_IAnimationViewer_VisibleRotationPoint_System_Boolean_"></a> VisibleRotationPoint\(bool\)

```csharp
void VisibleRotationPoint(bool visible)
```

#### Parameters

`visible` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

