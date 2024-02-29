# <a id="VM_Models_Post_VisualizationImpl_Visualization_View"></a> Class View

Namespace: [VM.Models.Post.VisualizationImpl.Visualization](VM.Models.Post.VisualizationImpl.Visualization.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
[DependencyResolve(typeof(IView))]
public sealed class View : IView, IAnimationViewer
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[View](VM.Models.Post.VisualizationImpl.Visualization.View.md)

#### Implements

IView, 
IAnimationViewer

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View__ctor"></a> View\(\)

```csharp
public View()
```

## Properties

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_BottomColor"></a> BottomColor

```csharp
public Color BottomColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_IsAddedModel"></a> IsAddedModel

```csharp
public bool IsAddedModel { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_IsEnabledCamera"></a> IsEnabledCamera

```csharp
public bool IsEnabledCamera { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_IsEnabledFollowingOrientation"></a> IsEnabledFollowingOrientation

```csharp
public bool IsEnabledFollowingOrientation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_IsVisibleLogo"></a> IsVisibleLogo

```csharp
public bool IsVisibleLogo { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_IsVisibleNavigationCube"></a> IsVisibleNavigationCube

```csharp
public bool IsVisibleNavigationCube { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_IsVisibleState"></a> IsVisibleState

```csharp
public bool IsVisibleState { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_LogoHeight"></a> LogoHeight

```csharp
public uint LogoHeight { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_LogoPath"></a> LogoPath

```csharp
public string LogoPath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_LogoPosition"></a> LogoPosition

```csharp
public Layout LogoPosition { get; set; }
```

#### Property Value

 Layout

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_LogoTransparency"></a> LogoTransparency

```csharp
public double LogoTransparency { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_LogoWidth"></a> LogoWidth

```csharp
public uint LogoWidth { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_NavigationCubeHeight"></a> NavigationCubeHeight

```csharp
public uint NavigationCubeHeight { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_NavigationCubePosition"></a> NavigationCubePosition

```csharp
public Layout NavigationCubePosition { get; set; }
```

#### Property Value

 Layout

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_NavigationCubeWidth"></a> NavigationCubeWidth

```csharp
public uint NavigationCubeWidth { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_StatePosition"></a> StatePosition

```csharp
public Layout StatePosition { get; set; }
```

#### Property Value

 Layout

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_StateTextColor"></a> StateTextColor

```csharp
public Color StateTextColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_TopColor"></a> TopColor

```csharp
public Color TopColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

## Methods

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_AddModel_VM_Models_Post_IModel_"></a> AddModel\(IModel\)

```csharp
public void AddModel(IModel model)
```

#### Parameters

`model` IModel

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_AddOuterSurfaceGeometries_System_Collections_Generic_IList_System_Collections_Generic_KeyValuePair_VM_Models_Post_IDataPart_System_UInt32_____"></a> AddOuterSurfaceGeometries\(IList<KeyValuePair<IDataPart, uint\[\]\>\>\)

```csharp
public void AddOuterSurfaceGeometries(IList<KeyValuePair<IDataPart, uint[]>> outerSurfacesInfo)
```

#### Parameters

`outerSurfacesInfo` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair\-2)<IDataPart, [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]\>\>

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_CheckCameraTargetNodeId"></a> CheckCameraTargetNodeId\(\)

```csharp
public int CheckCameraTargetNodeId()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_ClearAllSelection"></a> ClearAllSelection\(\)

```csharp
public void ClearAllSelection()
```

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_ClearOuterSurfaceGeometries"></a> ClearOuterSurfaceGeometries\(\)

```csharp
public void ClearOuterSurfaceGeometries()
```

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_ClearScene"></a> ClearScene\(\)

```csharp
public void ClearScene()
```

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_ClearText"></a> ClearText\(\)

```csharp
public void ClearText()
```

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_CreateView_System_Windows_Controls_Image_"></a> CreateView\(Image\)

```csharp
public bool CreateView(Image image)
```

#### Parameters

`image` [Image](https://learn.microsoft.com/dotnet/api/system.windows.controls.image)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_Destroy"></a> Destroy\(\)

```csharp
public void Destroy()
```

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_DrawText_VM_Vector_System_String_System_Boolean_"></a> DrawText\(Vector, string, bool\)

```csharp
public void DrawText(Vector position, string text, bool isMarker)
```

#### Parameters

`position` Vector

`text` [string](https://learn.microsoft.com/dotnet/api/system.string)

`isMarker` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_EndNavigation_System_Windows_Input_MouseEventArgs_"></a> EndNavigation\(MouseEventArgs\)

```csharp
public void EndNavigation(MouseEventArgs e)
```

#### Parameters

`e` [MouseEventArgs](https://learn.microsoft.com/dotnet/api/system.windows.input.mouseeventargs)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_ExportVTFxFile_System_String_"></a> ExportVTFxFile\(string\)

```csharp
public void ExportVTFxFile(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_FitView"></a> FitView\(\)

```csharp
public void FitView()
```

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_FitView_VM_Vector_VM_Vector_"></a> FitView\(Vector, Vector\)

```csharp
public void FitView(Vector dir, Vector up)
```

#### Parameters

`dir` Vector

`up` Vector

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_FitView_Ceetron_CeetronDesktopComponents_Vec3d_Ceetron_CeetronDesktopComponents_Vec3d_"></a> FitView\(Vec3d, Vec3d\)

```csharp
public void FitView(Vec3d dir, Vec3d up)
```

#### Parameters

`dir` Vec3d

`up` Vec3d

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_GetKeyValuePairGroup_System_UInt32___"></a> GetKeyValuePairGroup\(uint\[\]\)

```csharp
public static IDictionary<uint, uint> GetKeyValuePairGroup(uint[] outerSurface)
```

#### Parameters

`outerSurface` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

#### Returns

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32), [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_GetReorderedTriangles_System_Collections_Generic_IDictionary_System_UInt32_System_UInt32__System_UInt32___"></a> GetReorderedTriangles\(IDictionary<uint, uint\>, uint\[\]\)

```csharp
public static uint[] GetReorderedTriangles(IDictionary<uint, uint> keyValuePairs, uint[] outerSurface)
```

#### Parameters

`keyValuePairs` [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32), [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>

`outerSurface` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_GetSelectedItems"></a> GetSelectedItems\(\)

```csharp
public IList<HitItemInfo> GetSelectedItems()
```

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<HitItemInfo\>

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_GetView"></a> GetView\(\)

```csharp
public View GetView()
```

#### Returns

 View

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_GetWindowCoordinate_System_Double___System_Drawing_Point__"></a> GetWindowCoordinate\(double\[\], ref Point\)

```csharp
public bool GetWindowCoordinate(double[] point, ref Point viewPoint)
```

#### Parameters

`point` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`viewPoint` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_HitTestOnRectangle_System_Drawing_Point_System_Int32_System_Int32_"></a> HitTestOnRectangle\(Point, int, int\)

```csharp
public IList<HitItemInfo> HitTestOnRectangle(Point leftTop, int width, int height)
```

#### Parameters

`leftTop` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

`width` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`height` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<HitItemInfo\>

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_HitTestOnSinglePoint_System_Drawing_Point_"></a> HitTestOnSinglePoint\(Point\)

```csharp
public IList<HitItemInfo> HitTestOnSinglePoint(Point point)
```

#### Parameters

`point` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<HitItemInfo\>

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_InitFitView"></a> InitFitView\(\)

```csharp
public void InitFitView()
```

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_NavigateTarget_System_Drawing_Point_"></a> NavigateTarget\(Point\)

```csharp
public IList<HitItemInfo> NavigateTarget(Point pt)
```

#### Parameters

`pt` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<HitItemInfo\>

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_OnMouseWheel_System_Boolean_VM_Models_Post_IVisualization_Visualization_IWheelDirection_System_Windows_Input_MouseWheelEventArgs_"></a> OnMouseWheel\(bool, IWheelDirection, MouseWheelEventArgs\)

```csharp
public void OnMouseWheel(bool timerEnabled, IWheelDirection zoomin, MouseWheelEventArgs e)
```

#### Parameters

`timerEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`zoomin` IWheelDirection

`e` [MouseWheelEventArgs](https://learn.microsoft.com/dotnet/api/system.windows.input.mousewheeleventargs)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_RegisterCuttingPlanePositionUpdate_System_Action_"></a> RegisterCuttingPlanePositionUpdate\(Action\)

```csharp
public void RegisterCuttingPlanePositionUpdate(Action callback)
```

#### Parameters

`callback` [Action](https://learn.microsoft.com/dotnet/api/system.action)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_Release"></a> Release\(\)

```csharp
public void Release()
```

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_Render"></a> Render\(\)

```csharp
public void Render()
```

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_RenderToImage"></a> RenderToImage\(\)

```csharp
public Image RenderToImage()
```

#### Returns

 [Image](https://learn.microsoft.com/dotnet/api/system.windows.controls.image)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_ReplaceModel_VM_Models_Post_IModel_"></a> ReplaceModel\(IModel\)

```csharp
public void ReplaceModel(IModel model)
```

#### Parameters

`model` IModel

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_Select_System_Collections_Generic_IList_VM_Models_Post_HitItemInfo__"></a> Select\(IList<HitItemInfo\>\)

```csharp
public void Select(IList<HitItemInfo> hititems)
```

#### Parameters

`hititems` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<HitItemInfo\>

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_SetFollowingCameraTarget_VM_Models_Post_HitItemInfo_"></a> SetFollowingCameraTarget\(HitItemInfo\)

```csharp
public void SetFollowingCameraTarget(HitItemInfo targetInfo)
```

#### Parameters

`targetInfo` HitItemInfo

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_SetProjection_System_Boolean_"></a> SetProjection\(bool\)

```csharp
public void SetProjection(bool bPerspective)
```

#### Parameters

`bPerspective` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_SetRotationPoint_System_Windows_Input_MouseEventArgs_"></a> SetRotationPoint\(MouseEventArgs\)

```csharp
public void SetRotationPoint(MouseEventArgs e)
```

#### Parameters

`e` [MouseEventArgs](https://learn.microsoft.com/dotnet/api/system.windows.input.mouseeventargs)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_SetViewport_System_Int32_System_Int32_System_UInt32_System_UInt32_"></a> SetViewport\(int, int, uint, uint\)

```csharp
public void SetViewport(int x, int y, uint width, uint height)
```

#### Parameters

`x` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`y` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`width` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`height` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_SetViewport_VM_Models_Post_Viewport_VM_Models_Post_ViewPlane_VM_Models_Post_Direction_"></a> SetViewport\(Viewport, ViewPlane, Direction\)

```csharp
public void SetViewport(Viewport viewport, ViewPlane viewPlane, Direction upDirection)
```

#### Parameters

`viewport` Viewport

`viewPlane` ViewPlane

`upDirection` Direction

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_StartNavigation_VM_Models_Post_IVisualization_Visualization_INavigationType_System_Windows_Input_MouseEventArgs_"></a> StartNavigation\(INavigationType, MouseEventArgs\)

```csharp
public void StartNavigation(INavigationType type, MouseEventArgs e)
```

#### Parameters

`type` INavigationType

`e` [MouseEventArgs](https://learn.microsoft.com/dotnet/api/system.windows.input.mouseeventargs)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_UpdateNavigation_System_Boolean_System_Windows_Input_MouseEventArgs_"></a> UpdateNavigation\(bool, MouseEventArgs\)

```csharp
public void UpdateNavigation(bool timerEnabled, MouseEventArgs e)
```

#### Parameters

`timerEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`e` [MouseEventArgs](https://learn.microsoft.com/dotnet/api/system.windows.input.mouseeventargs)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_View_VisibleRotationPoint_System_Boolean_"></a> VisibleRotationPoint\(bool\)

```csharp
public void VisibleRotationPoint(bool visible)
```

#### Parameters

`visible` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

