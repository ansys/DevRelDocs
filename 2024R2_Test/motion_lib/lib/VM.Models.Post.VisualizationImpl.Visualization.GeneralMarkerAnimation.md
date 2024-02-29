# <a id="VM_Models_Post_VisualizationImpl_Visualization_GeneralMarkerAnimation"></a> Class GeneralMarkerAnimation

Namespace: [VM.Models.Post.VisualizationImpl.Visualization](VM.Models.Post.VisualizationImpl.Visualization.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public class GeneralMarkerAnimation : MarkerAnimationBase, IGeneralMarkerAnimation, IMarkerAnimation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MarkerAnimationBase](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md) ← 
[GeneralMarkerAnimation](VM.Models.Post.VisualizationImpl.Visualization.GeneralMarkerAnimation.md)

#### Implements

IGeneralMarkerAnimation, 
IMarkerAnimation

#### Inherited Members

[MarkerAnimationBase.GetHitItem\(\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_GetHitItem), 
[MarkerAnimationBase.GetParentPositionAndOrientation\(int\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_GetParentPositionAndOrientation\_System\_Int32\_), 
[MarkerAnimationBase.GetParentVelocityAndAcceleration\(int\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_GetParentVelocityAndAcceleration\_System\_Int32\_), 
[MarkerAnimationBase.GetPositionAndOrientation\(int\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_GetPositionAndOrientation\_System\_Int32\_), 
[MarkerAnimationBase.Initialize\(string, double\[\]\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_Initialize\_System\_String\_System\_Double\_\_\_), 
[MarkerAnimationBase.RegionIntersect\(Camera, Point, int, int\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_RegionIntersect\_Ceetron\_CeetronDesktopComponents\_Visualization\_Camera\_System\_Drawing\_Point\_System\_Int32\_System\_Int32\_), 
[MarkerAnimationBase.Select\(bool\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_Select\_System\_Boolean\_), 
[MarkerAnimationBase.SetAnimation\(double\[\]\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_SetAnimation\_System\_Double\_\_\_), 
[MarkerAnimationBase.SetAnimation\(TMatrix\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_SetAnimation\_VM\_TMatrix\_), 
[MarkerAnimationBase.TransformToMarkerBehavior\(TMatrix, double\[\], int, double\[\], int\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_TransformToMarkerBehavior\_VM\_TMatrix\_System\_Double\_\_\_System\_Int32\_System\_Double\_\_\_System\_Int32\_), 
[MarkerAnimationBase.TransformToMarkerBehavior\(double\[\], double\[\], int, double\[\], int\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_TransformToMarkerBehavior\_System\_Double\_\_\_System\_Double\_\_\_System\_Int32\_System\_Double\_\_\_System\_Int32\_), 
[MarkerAnimationBase.UpdatePosition\(int\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_UpdatePosition\_System\_Int32\_), 
[MarkerAnimationBase.UpdateLabel\(int\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_UpdateLabel\_System\_Int32\_), 
[MarkerAnimationBase.UpdateLocalOrientation\(double\[\], double\[\]\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_UpdateLocalOrientation\_System\_Double\_\_\_System\_Double\_\_\_), 
[MarkerAnimationBase.UpdateLocalPosition\(double\[\], double\[\]\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_UpdateLocalPosition\_System\_Double\_\_\_System\_Double\_\_\_), 
[MarkerAnimationBase.Updatelocaltrasformation\(double\[\], double\[\]\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_Updatelocaltrasformation\_System\_Double\_\_\_System\_Double\_\_\_), 
[MarkerAnimationBase.UpdateMarkerSize\(\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_UpdateMarkerSize), 
[MarkerAnimationBase.UpdateTrajectory\(int\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_UpdateTrajectory\_System\_Int32\_), 
[MarkerAnimationBase.UpdateTransform\(double\[\]\)](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_UpdateTransform\_System\_Double\_\_\_), 
[MarkerAnimationBase.ColorX](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_ColorX), 
[MarkerAnimationBase.ColorY](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_ColorY), 
[MarkerAnimationBase.ColorZ](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_ColorZ), 
[MarkerAnimationBase.IsSelected](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_IsSelected), 
[MarkerAnimationBase.IsVisibleLabel](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_IsVisibleLabel), 
[MarkerAnimationBase.IsVisibleLabelBackground](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_IsVisibleLabelBackground), 
[MarkerAnimationBase.IsVisibleMarker](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_IsVisibleMarker), 
[MarkerAnimationBase.IsVisibleTrajectory](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_IsVisibleTrajectory), 
[MarkerAnimationBase.LabelBackGroundColor](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_LabelBackGroundColor), 
[MarkerAnimationBase.LabelTextColor](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_LabelTextColor), 
[MarkerAnimationBase.LocalTrasformation](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_LocalTrasformation), 
[MarkerAnimationBase.MarkerSize](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_MarkerSize), 
[MarkerAnimationBase.Name](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_Name), 
[MarkerAnimationBase.Orientation](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_Orientation), 
[MarkerAnimationBase.PartArrow](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_PartArrow), 
[MarkerAnimationBase.PartLabel](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_PartLabel), 
[MarkerAnimationBase.PartTrajectory](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_PartTrajectory), 
[MarkerAnimationBase.PartX](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_PartX), 
[MarkerAnimationBase.PartY](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_PartY), 
[MarkerAnimationBase.PartZ](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_PartZ), 
[MarkerAnimationBase.PickableParts](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_PickableParts), 
[MarkerAnimationBase.Position](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_Position), 
[MarkerAnimationBase.Size](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_Size), 
[MarkerAnimationBase.StateID](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_StateID), 
[MarkerAnimationBase.TrajectoryColor](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_TrajectoryColor), 
[MarkerAnimationBase.AnimationData](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_AnimationData), 
[MarkerAnimationBase.UnitSize](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_UnitSize), 
[MarkerAnimationBase.TransformChanged](VM.Models.Post.VisualizationImpl.Visualization.MarkerAnimationBase.md\#VM\_Models\_Post\_VisualizationImpl\_Visualization\_MarkerAnimationBase\_TransformChanged)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_Visualization_GeneralMarkerAnimation__ctor"></a> GeneralMarkerAnimation\(\)

```csharp
public GeneralMarkerAnimation()
```

## Properties

### <a id="VM_Models_Post_VisualizationImpl_Visualization_GeneralMarkerAnimation_CoordinateSystemType"></a> CoordinateSystemType

```csharp
public GeneralMarkerType CoordinateSystemType { get; set; }
```

#### Property Value

 GeneralMarkerType

### <a id="VM_Models_Post_VisualizationImpl_Visualization_GeneralMarkerAnimation_PrimaryAxis"></a> PrimaryAxis

```csharp
public CoordinateType PrimaryAxis { get; set; }
```

#### Property Value

 CoordinateType

### <a id="VM_Models_Post_VisualizationImpl_Visualization_GeneralMarkerAnimation_SecondaryAxis"></a> SecondaryAxis

```csharp
public CoordinateType SecondaryAxis { get; set; }
```

#### Property Value

 CoordinateType

### <a id="VM_Models_Post_VisualizationImpl_Visualization_GeneralMarkerAnimation_TertiaryAxis"></a> TertiaryAxis

```csharp
public CoordinateType TertiaryAxis { get; set; }
```

#### Property Value

 CoordinateType

## Methods

### <a id="VM_Models_Post_VisualizationImpl_Visualization_GeneralMarkerAnimation_GetDeformationTransform_System_Int32_System_Double___System_Double___"></a> GetDeformationTransform\(int, double\[\], double\[\]\)

```csharp
public double[] GetDeformationTransform(int stateid, double[] vector, double[] targetnodeposition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`vector` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`targetnodeposition` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_Visualization_GeneralMarkerAnimation_GetHitItem"></a> GetHitItem\(\)

```csharp
public override HitItemInfo GetHitItem()
```

#### Returns

 HitItemInfo

### <a id="VM_Models_Post_VisualizationImpl_Visualization_GeneralMarkerAnimation_GetRelativeAcceleration_System_Int32_System_Double___System_Int32_"></a> GetRelativeAcceleration\(int, double\[\], int\)

```csharp
public double[] GetRelativeAcceleration(int stateid, double[] acceleration, int offsetAcceleration)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`acceleration` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetAcceleration` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_Visualization_GeneralMarkerAnimation_GetRelativeAngularAcceleration_System_Int32_System_Double___System_Int32_System_Double___System_Int32_"></a> GetRelativeAngularAcceleration\(int, double\[\], int, double\[\], int\)

```csharp
public double[] GetRelativeAngularAcceleration(int stateid, double[] orientation, int offsetOrienation, double[] angularacceleration, int offsetAngularAcceleration)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`orientation` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetOrienation` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`angularacceleration` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetAngularAcceleration` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_Visualization_GeneralMarkerAnimation_GetRelativeAngularVelocity_System_Int32_System_Double___System_Int32_System_Double___System_Int32_"></a> GetRelativeAngularVelocity\(int, double\[\], int, double\[\], int\)

```csharp
public double[] GetRelativeAngularVelocity(int stateid, double[] orienation, int offsetOrientation, double[] angularvelocity, int offsetAngularVelocity)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`orienation` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetOrientation` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`angularvelocity` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetAngularVelocity` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_Visualization_GeneralMarkerAnimation_GetRelativeEulerZXZ_System_Int32_System_Double___System_Int32_System_Boolean_"></a> GetRelativeEulerZXZ\(int, double\[\], int, bool\)

```csharp
public double[] GetRelativeEulerZXZ(int stateid, double[] orientation, int offsetOrienation, bool degree = true)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`orientation` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetOrienation` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`degree` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_Visualization_GeneralMarkerAnimation_GetRelativePosition_System_Int32_System_Double___System_Int32_"></a> GetRelativePosition\(int, double\[\], int\)

```csharp
public double[] GetRelativePosition(int stateid, double[] position, int offsetPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`position` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetPosition` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_Visualization_GeneralMarkerAnimation_GetRelativeVelocity_System_Int32_System_Double___System_Int32_"></a> GetRelativeVelocity\(int, double\[\], int\)

```csharp
public double[] GetRelativeVelocity(int stateid, double[] velocity, int offsetVelocity)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`velocity` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetVelocity` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_Visualization_GeneralMarkerAnimation_GetTensorTransform_System_Int32_System_Double___System_Double___"></a> GetTensorTransform\(int, double\[\], double\[\]\)

```csharp
public double[] GetTensorTransform(int stateid, double[] tensor, double[] targetnodeposition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`tensor` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`targetnodeposition` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_Visualization_GeneralMarkerAnimation_GetTensorTransform_System_Int32_System_Double___System_Double___System_Int32_"></a> GetTensorTransform\(int, double\[\], double\[\], int\)

```csharp
public double[] GetTensorTransform(int stateid, double[] tensor, double[] targetnodeposition, int offsetposition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`tensor` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`targetnodeposition` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetposition` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

