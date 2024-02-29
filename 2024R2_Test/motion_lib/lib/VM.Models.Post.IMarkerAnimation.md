# <a id="VM_Models_Post_IMarkerAnimation"></a> Interface IMarkerAnimation

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IMarkerAnimation
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_IMarkerAnimation_IsVisibleLabel"></a> IsVisibleLabel

```csharp
bool IsVisibleLabel { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IMarkerAnimation_IsVisibleLabelBackground"></a> IsVisibleLabelBackground

```csharp
bool IsVisibleLabelBackground { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IMarkerAnimation_IsVisibleMarker"></a> IsVisibleMarker

```csharp
bool IsVisibleMarker { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IMarkerAnimation_IsVisibleTrajectory"></a> IsVisibleTrajectory

```csharp
bool IsVisibleTrajectory { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IMarkerAnimation_LabelBackGroundColor"></a> LabelBackGroundColor

```csharp
Color LabelBackGroundColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_IMarkerAnimation_LabelTextColor"></a> LabelTextColor

```csharp
Color LabelTextColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Models_Post_IMarkerAnimation_LocalTrasformation"></a> LocalTrasformation

```csharp
double[] LocalTrasformation { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IMarkerAnimation_MarkerSize"></a> MarkerSize

```csharp
double MarkerSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IMarkerAnimation_Orientation"></a> Orientation

```csharp
double[] Orientation { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IMarkerAnimation_Position"></a> Position

```csharp
double[] Position { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IMarkerAnimation_Size"></a> Size

```csharp
uint? Size { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)?

### <a id="VM_Models_Post_IMarkerAnimation_StateID"></a> StateID

```csharp
int StateID { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IMarkerAnimation_TrajectoryColor"></a> TrajectoryColor

```csharp
Color TrajectoryColor { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

## Methods

### <a id="VM_Models_Post_IMarkerAnimation_GetHitItem"></a> GetHitItem\(\)

```csharp
HitItemInfo GetHitItem()
```

#### Returns

 [HitItemInfo](VM.Models.Post.HitItemInfo.md)

### <a id="VM_Models_Post_IMarkerAnimation_GetParentPositionAndOrientation_System_Int32_"></a> GetParentPositionAndOrientation\(int\)

```csharp
double[] GetParentPositionAndOrientation(int stateid)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IMarkerAnimation_GetParentVelocityAndAcceleration_System_Int32_"></a> GetParentVelocityAndAcceleration\(int\)

```csharp
double[] GetParentVelocityAndAcceleration(int stateid)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IMarkerAnimation_GetPositionAndOrientation_System_Int32_"></a> GetPositionAndOrientation\(int\)

```csharp
double[] GetPositionAndOrientation(int stateid)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IMarkerAnimation_Initialize_System_String_System_Double___"></a> Initialize\(string, double\[\]\)

```csharp
void Initialize(string name, double[] initialposition)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`initialposition` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IMarkerAnimation_Select_System_Boolean_"></a> Select\(bool\)

```csharp
void Select(bool select)
```

#### Parameters

`select` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IMarkerAnimation_SetAnimation_System_Double___"></a> SetAnimation\(double\[\]\)

```csharp
void SetAnimation(double[] data)
```

#### Parameters

`data` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IMarkerAnimation_SetAnimation_VM_TMatrix_"></a> SetAnimation\(TMatrix\)

```csharp
void SetAnimation(TMatrix transformationMatrix)
```

#### Parameters

`transformationMatrix` TMatrix

### <a id="VM_Models_Post_IMarkerAnimation_TransformToMarkerBehavior_System_Double___System_Double___System_Int32_System_Double___System_Int32_"></a> TransformToMarkerBehavior\(double\[\], double\[\], int, double\[\], int\)

```csharp
double[] TransformToMarkerBehavior(double[] offset, double[] positionAndOrientaton, int offsetPositionAndOrientaton, double[] velocityAndAcceleration, int offsetVelocityAndAcceleration)
```

#### Parameters

`offset` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`positionAndOrientaton` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetPositionAndOrientaton` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`velocityAndAcceleration` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetVelocityAndAcceleration` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IMarkerAnimation_TransformToMarkerBehavior_VM_TMatrix_System_Double___System_Int32_System_Double___System_Int32_"></a> TransformToMarkerBehavior\(TMatrix, double\[\], int, double\[\], int\)

```csharp
double[] TransformToMarkerBehavior(TMatrix transformation, double[] positionAndOrientaton, int offsetPositionAndOrientaton, double[] velocityAndAcceleration, int offsetVelocityAndAcceleration)
```

#### Parameters

`transformation` TMatrix

`positionAndOrientaton` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetPositionAndOrientaton` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`velocityAndAcceleration` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetVelocityAndAcceleration` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IMarkerAnimation_TransformChanged"></a> TransformChanged

```csharp
event EventHandler TransformChanged
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

