# <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase"></a> Class MarkerAnimationBase

Namespace: [VM.Models.Post.VisualizationImpl.Visualization](VM.Models.Post.VisualizationImpl.Visualization.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public abstract class MarkerAnimationBase : IMarkerAnimation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MarkerAnimationBase](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md)

#### Derived

[GeneralMarkerAnimation](VM.Models.Post.VisualizationImpl.Visualization.GeneralMarkerAnimation.md), 
[ResultMarkerAnimation](VM.Models.Post.VisualizationImpl.Visualization.ResultMarkerAnimation.md)

#### Implements

IMarkerAnimation

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase__ctor"></a> MarkerAnimationBase\(\)

```csharp
public MarkerAnimationBase()
```

## Properties

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_AnimationData"></a> AnimationData

```csharp
protected double[] AnimationData { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_ColorX"></a> ColorX

```csharp
public Color3f ColorX { get; set; }
```

#### Property Value

 Color3f

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_ColorY"></a> ColorY

```csharp
public Color3f ColorY { get; set; }
```

#### Property Value

 Color3f

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_ColorZ"></a> ColorZ

```csharp
public Color3f ColorZ { get; set; }
```

#### Property Value

 Color3f

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_IsSelected"></a> IsSelected

```csharp
public bool IsSelected { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_IsVisibleLabel"></a> IsVisibleLabel

```csharp
public virtual bool IsVisibleLabel { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_IsVisibleLabelBackground"></a> IsVisibleLabelBackground

```csharp
public bool IsVisibleLabelBackground { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_IsVisibleMarker"></a> IsVisibleMarker

```csharp
public virtual bool IsVisibleMarker { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_IsVisibleTrajectory"></a> IsVisibleTrajectory

```csharp
public virtual bool IsVisibleTrajectory { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_LabelBackGroundColor"></a> LabelBackGroundColor

```csharp
public Color LabelBackGroundColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_LabelTextColor"></a> LabelTextColor

```csharp
public Color LabelTextColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_LocalTrasformation"></a> LocalTrasformation

```csharp
public double[] LocalTrasformation { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_MarkerSize"></a> MarkerSize

```csharp
public double MarkerSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_Name"></a> Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_Orientation"></a> Orientation

```csharp
public double[] Orientation { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_PartArrow"></a> PartArrow

```csharp
public MarkupPartLines PartArrow { get; set; }
```

#### Property Value

 MarkupPartLines

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_PartLabel"></a> PartLabel

```csharp
public MarkupPartLabels PartLabel { get; set; }
```

#### Property Value

 MarkupPartLabels

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_PartTrajectory"></a> PartTrajectory

```csharp
public MarkupPartLines PartTrajectory { get; set; }
```

#### Property Value

 MarkupPartLines

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_PartX"></a> PartX

```csharp
public MarkupPartLines PartX { get; set; }
```

#### Property Value

 MarkupPartLines

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_PartY"></a> PartY

```csharp
public MarkupPartLines PartY { get; set; }
```

#### Property Value

 MarkupPartLines

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_PartZ"></a> PartZ

```csharp
public MarkupPartLines PartZ { get; set; }
```

#### Property Value

 MarkupPartLines

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_PickableParts"></a> PickableParts

```csharp
public IList<MarkupPartLines> PickableParts { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<MarkupPartLines\>

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_Position"></a> Position

```csharp
public double[] Position { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_Size"></a> Size

```csharp
public uint? Size { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)?

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_StateID"></a> StateID

```csharp
public int StateID { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_TrajectoryColor"></a> TrajectoryColor

```csharp
public Color TrajectoryColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_UnitSize"></a> UnitSize

```csharp
protected int UnitSize { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_GetHitItem"></a> GetHitItem\(\)

```csharp
public abstract HitItemInfo GetHitItem()
```

#### Returns

 HitItemInfo

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_GetParentPositionAndOrientation_System_Int32_"></a> GetParentPositionAndOrientation\(int\)

```csharp
public double[] GetParentPositionAndOrientation(int stateid)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_GetParentVelocityAndAcceleration_System_Int32_"></a> GetParentVelocityAndAcceleration\(int\)

```csharp
public double[] GetParentVelocityAndAcceleration(int stateid)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_GetPositionAndOrientation_System_Int32_"></a> GetPositionAndOrientation\(int\)

```csharp
public double[] GetPositionAndOrientation(int stateid)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_Initialize_System_String_System_Double___"></a> Initialize\(string, double\[\]\)

```csharp
public void Initialize(string name, double[] initialpositionandorienation)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`initialpositionandorienation` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_RegionIntersect_Ceetron_CeetronDesktopComponents_Visualization_Camera_System_Drawing_Point_System_Int32_System_Int32_"></a> RegionIntersect\(Camera, Point, int, int\)

```csharp
public HitItemInfo RegionIntersect(Camera camera, Point leftbottom, int width, int height)
```

#### Parameters

`camera` Camera

`leftbottom` [Point](https://learn.microsoft.com/dotnet/api/system.drawing.point)

`width` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`height` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 HitItemInfo

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_Select_System_Boolean_"></a> Select\(bool\)

```csharp
public void Select(bool select)
```

#### Parameters

`select` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_SetAnimation_System_Double___"></a> SetAnimation\(double\[\]\)

```csharp
public void SetAnimation(double[] data)
```

#### Parameters

`data` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_SetAnimation_VM_TMatrix_"></a> SetAnimation\(TMatrix\)

```csharp
public void SetAnimation(TMatrix transformationMatrix)
```

#### Parameters

`transformationMatrix` TMatrix

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_TransformToMarkerBehavior_VM_TMatrix_System_Double___System_Int32_System_Double___System_Int32_"></a> TransformToMarkerBehavior\(TMatrix, double\[\], int, double\[\], int\)

```csharp
public double[] TransformToMarkerBehavior(TMatrix transformation, double[] positionAndOrientaton, int offsetPositionAndOrientaton, double[] velocityAndAcceleration, int offsetVelocityAndAcceleration)
```

#### Parameters

`transformation` TMatrix

`positionAndOrientaton` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetPositionAndOrientaton` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`velocityAndAcceleration` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetVelocityAndAcceleration` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_TransformToMarkerBehavior_System_Double___System_Double___System_Int32_System_Double___System_Int32_"></a> TransformToMarkerBehavior\(double\[\], double\[\], int, double\[\], int\)

```csharp
public double[] TransformToMarkerBehavior(double[] markerLocal, double[] positionAndOrientaton, int arrayIndex1, double[] velocityAndAcceleration, int arrayIndex2)
```

#### Parameters

`markerLocal` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`positionAndOrientaton` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`arrayIndex1` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`velocityAndAcceleration` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`arrayIndex2` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_UpdateLabel_System_Int32_"></a> UpdateLabel\(int\)

```csharp
protected void UpdateLabel(int stateId)
```

#### Parameters

`stateId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_UpdateLocalOrientation_System_Double___System_Double___"></a> UpdateLocalOrientation\(double\[\], double\[\]\)

```csharp
protected void UpdateLocalOrientation(double[] iorientation, double[] ori)
```

#### Parameters

`iorientation` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`ori` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_UpdateLocalPosition_System_Double___System_Double___"></a> UpdateLocalPosition\(double\[\], double\[\]\)

```csharp
protected void UpdateLocalPosition(double[] posAndOrienation, double[] pos)
```

#### Parameters

`posAndOrienation` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pos` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_UpdateMarkerSize"></a> UpdateMarkerSize\(\)

```csharp
protected void UpdateMarkerSize()
```

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_UpdatePosition_System_Int32_"></a> UpdatePosition\(int\)

```csharp
public bool UpdatePosition(int stateid)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_UpdateTrajectory_System_Int32_"></a> UpdateTrajectory\(int\)

```csharp
protected void UpdateTrajectory(int stateId)
```

#### Parameters

`stateId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_UpdateTransform_System_Double___"></a> UpdateTransform\(double\[\]\)

```csharp
protected void UpdateTransform(double[] positionAndOrientation)
```

#### Parameters

`positionAndOrientation` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_Updatelocaltrasformation_System_Double___System_Double___"></a> Updatelocaltrasformation\(double\[\], double\[\]\)

```csharp
protected void Updatelocaltrasformation(double[] ipositionAndOrientation, double[] positionAndOrientation)
```

#### Parameters

`ipositionAndOrientation` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`positionAndOrientation` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_Visualization_MarkerAnimationBase_TransformChanged"></a> TransformChanged

```csharp
public event EventHandler TransformChanged
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

