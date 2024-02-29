# <a id="VM_Models_Post_IGeneralMarkerAnimation"></a> Interface IGeneralMarkerAnimation

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IGeneralMarkerAnimation : IMarkerAnimation
```

#### Implements

[IMarkerAnimation](VM.Models.Post.IMarkerAnimation.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_IGeneralMarkerAnimation_CoordinateSystemType"></a> CoordinateSystemType

```csharp
GeneralMarkerType CoordinateSystemType { get; set; }
```

#### Property Value

 [GeneralMarkerType](VM.Models.Post.GeneralMarkerType.md)

### <a id="VM_Models_Post_IGeneralMarkerAnimation_Name"></a> Name

```csharp
string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_IGeneralMarkerAnimation_PrimaryAxis"></a> PrimaryAxis

```csharp
CoordinateType PrimaryAxis { get; set; }
```

#### Property Value

 [CoordinateType](VM.Models.Post.CoordinateType.md)

### <a id="VM_Models_Post_IGeneralMarkerAnimation_SecondaryAxis"></a> SecondaryAxis

```csharp
CoordinateType SecondaryAxis { get; set; }
```

#### Property Value

 [CoordinateType](VM.Models.Post.CoordinateType.md)

### <a id="VM_Models_Post_IGeneralMarkerAnimation_TertiaryAxis"></a> TertiaryAxis

```csharp
CoordinateType TertiaryAxis { get; set; }
```

#### Property Value

 [CoordinateType](VM.Models.Post.CoordinateType.md)

## Methods

### <a id="VM_Models_Post_IGeneralMarkerAnimation_GetDeformationTransform_System_Int32_System_Double___System_Double___"></a> GetDeformationTransform\(int, double\[\], double\[\]\)

```csharp
double[] GetDeformationTransform(int stateid, double[] tensor, double[] targetnodeposition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`tensor` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`targetnodeposition` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IGeneralMarkerAnimation_GetRelativeAcceleration_System_Int32_System_Double___System_Int32_"></a> GetRelativeAcceleration\(int, double\[\], int\)

```csharp
double[] GetRelativeAcceleration(int stateid, double[] acceleration, int offsetAcceleration)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`acceleration` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetAcceleration` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IGeneralMarkerAnimation_GetRelativeAngularAcceleration_System_Int32_System_Double___System_Int32_System_Double___System_Int32_"></a> GetRelativeAngularAcceleration\(int, double\[\], int, double\[\], int\)

```csharp
double[] GetRelativeAngularAcceleration(int stateid, double[] orientation, int offsetOrienation, double[] angularacceleration, int offsetAngularAcceleration)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`orientation` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetOrienation` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`angularacceleration` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetAngularAcceleration` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IGeneralMarkerAnimation_GetRelativeAngularVelocity_System_Int32_System_Double___System_Int32_System_Double___System_Int32_"></a> GetRelativeAngularVelocity\(int, double\[\], int, double\[\], int\)

```csharp
double[] GetRelativeAngularVelocity(int stateid, double[] orienation, int offsetOrientation, double[] angularvelocity, int offsetAngularVelocity)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`orienation` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetOrientation` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`angularvelocity` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetAngularVelocity` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IGeneralMarkerAnimation_GetRelativeEulerZXZ_System_Int32_System_Double___System_Int32_System_Boolean_"></a> GetRelativeEulerZXZ\(int, double\[\], int, bool\)

```csharp
double[] GetRelativeEulerZXZ(int stateid, double[] orientation, int offsetOrienation, bool degree = true)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`orientation` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetOrienation` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`degree` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IGeneralMarkerAnimation_GetRelativePosition_System_Int32_System_Double___System_Int32_"></a> GetRelativePosition\(int, double\[\], int\)

```csharp
double[] GetRelativePosition(int stateid, double[] position, int offsetPosition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`position` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetPosition` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IGeneralMarkerAnimation_GetRelativeVelocity_System_Int32_System_Double___System_Int32_"></a> GetRelativeVelocity\(int, double\[\], int\)

```csharp
double[] GetRelativeVelocity(int stateid, double[] velocity, int offsetVelocity)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`velocity` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetVelocity` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IGeneralMarkerAnimation_GetTensorTransform_System_Int32_System_Double___System_Double___"></a> GetTensorTransform\(int, double\[\], double\[\]\)

```csharp
double[] GetTensorTransform(int stateid, double[] tensor, double[] targetnodeposition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`tensor` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`targetnodeposition` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IGeneralMarkerAnimation_GetTensorTransform_System_Int32_System_Double___System_Double___System_Int32_"></a> GetTensorTransform\(int, double\[\], double\[\], int\)

```csharp
double[] GetTensorTransform(int stateid, double[] tensor, double[] targetnodeposition, int offsetposition)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`tensor` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`targetnodeposition` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetposition` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

