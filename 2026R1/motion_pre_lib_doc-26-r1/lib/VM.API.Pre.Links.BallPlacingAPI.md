# Class BallPlacingAPI
<a id="VM_API_Pre_Links_BallPlacingAPI"></a>

Namespace: [VM.API.Pre.Links](VM.API.Pre.Links.md)  
Assembly: VM.API.Pre.Links.dll  

This class implements APIs for ball placing.

```csharp
public static class BallPlacingAPI
```

#### Inheritance

object ← 
[BallPlacingAPI](VM.API.Pre.Links.BallPlacingAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_Links_BallPlacingAPI_CreateBall_VM_Managed_DAFUL_Operation_BallInfo_"></a> CreateBall\(BallInfo\)

Create ball.

```csharp
public static Obj CreateBall(BallInfo ballInfo)
```

#### Parameters

`ballInfo` [BallInfo](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOPBallPlacing/BallInfo.cs)

The ball information to create ball.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentException

Will be thrown if the Name of 'ballInfo' is null.

 ArgumentException

Will be thrown if the Radius of 'ballInfo' is equal to or less than 0.

### <a id="VM_API_Pre_Links_BallPlacingAPI_CreateBallPlacing_VM_Managed_DAFUL_SubSystemDocument_System_String_VM_Managed_DAFUL_PathType_System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_System_Drawing_Color__"></a> CreateBallPlacing\(SubSystemDocument, string, PathType, string, ExpressionValueVariable?, ExpressionValueVariable?, Color?\)

Create ball placing <xref href="VM.Managed.DAFUL.BallPlacing" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[ExistFile(new string[] { "path" })]
public static Obj CreateBallPlacing(this SubSystemDocument document, string path, PathType pathType = PathType.Closed, string name = "", ExpressionValueVariable? ballRadius = null, ExpressionValueVariable? numberOfBall = null, Color? color = null)
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The document to create the ball placing.

`path` string

The path to create the ball placing.

`pathType` PathType

The path type. The default value is Closed.

`name` string

The name of the <xref href="VM.Managed.DAFUL.BallPlacing" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BallPlacing_' will be generated and used.

`ballRadius` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The ball radius. The default value is 2.

`numberOfBall` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The number of ball. The default value is 25.

`color` Color?

The color. The default value is '0xAAAABF'

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.BallPlacing" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document', 'body' are null.

 FileNotFoundException

Will be thrown if 'path' file path does not exist.

 ArgumentException

Will be thrown if the extension of 'path' is not 'csv'.

 ArgumentOutOfRangeException

Will be thrown if 'ballRadius' value equal to or less than 0.

 ArgumentOutOfRangeException

Will be thrown if 'numberOfBall' is less than 2 or greater than 999.

### <a id="VM_API_Pre_Links_BallPlacingAPI_CreateBallPlacingContact_VM_Managed_DAFUL_SubSystemDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__VM_API_Pre_Obj_System_String_"></a> CreateBallPlacingContact\(SubSystemDocument, IEnumerable<Obj\>, Obj, string\)

Create ball placing contact <xref href="VM.Managed.DAFUL.BallPlacingContact" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document", "baseGeometries" })]
[NotNullObj(new string[] { "ballPlacing" })]
[MatchTypeObj(new object[] { "ballPlacing", typeof(BallPlacing) })]
public static Obj CreateBallPlacingContact(this SubSystemDocument document, IEnumerable<Obj> baseGeometries, Obj ballPlacing, string name = "")
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The document to create the ball placing contact.

`baseGeometries` IEnumerable<[Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)\>

The base geometries.

`ballPlacing` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The ball placing.

`name` string

The name of the <xref href="VM.Managed.DAFUL.BallPlacingContact" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BallPlacingContact_' will be generated and used.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.BallPlacingContact" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document', 'baseGeometries', 'ballPlacing', 'ballPlacing' are null.

 ArgumentException

Will be thrown if item type of 'baseGeometries' is not <xref href="VM.Managed.DAFUL.IContactable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_Links_BallPlacingAPI_CreateBallScrew_VM_Managed_DAFUL_SubSystemDocument_VM_Vector_VM_Vector_VM_Vector_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_API_Pre_Links_ScrewHandType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_"></a> CreateBallScrew\(SubSystemDocument, Vector, Vector, Vector, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ScrewHandType, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, string\)

```csharp
[NotNull(new string[] { "document" })]
[NotZeroMagnitude(new string[] { "axisZ", "axisX" })]
public static Obj CreateBallScrew(this SubSystemDocument document, Vector shaftReferencePosition, Vector axisZ, Vector axisX, ExpressionValueVariable? shaftLength = null, ExpressionValueVariable? shaftScrewStartAngle = null, ExpressionValueVariable? shaftScrewStartPosition = null, ExpressionValueVariable? shaftScrewEndPosition = null, ExpressionValueVariable? nutLength = null, ExpressionValueVariable? nutOD = null, ExpressionValueVariable? nutStartPosition = null, ExpressionValueVariable? nutScrewStartPosition = null, ExpressionValueVariable? nutScrewEndPosition = null, ScrewHandType handOfScrew = ScrewHandType.Right, ExpressionValueVariable? lead = null, ExpressionValueVariable? shaftPCD = null, ExpressionValueVariable? nutPCD = null, ExpressionValueVariable? ballDiameter = null, string name = "")
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

`shaftReferencePosition` Vector

`axisZ` Vector

`axisX` Vector

`shaftLength` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

`shaftScrewStartAngle` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

`shaftScrewStartPosition` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

`shaftScrewEndPosition` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

`nutLength` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

`nutOD` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

`nutStartPosition` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

`nutScrewStartPosition` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

`nutScrewEndPosition` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

`handOfScrew` [ScrewHandType](VM.API.Pre.Links.ScrewHandType.md)

`lead` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

`shaftPCD` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

`nutPCD` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

`ballDiameter` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

`name` string

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

### <a id="VM_API_Pre_Links_BallPlacingAPI_CreateSurfaceWithCurvesets_VM_Managed_DAFUL_SubSystemDocument_System_String_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_API_Pre_Obj_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_"></a> CreateSurfaceWithCurvesets\(SubSystemDocument, string, Obj, Obj, Obj, ExpressionValueVariable?, ExpressionValueVariable?, string\)

Create surface with curvesets <xref href="VM.Managed.DAFUL.SurfaceWithCurvesets" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[ExistFile(new string[] { "path" })]
[NotNullObj(new string[] { "faceSet", "startCurveSet", "endCurveSet" })]
[MatchTypeObj(new object[] { "faceSet", typeof(SetFace), "startCurveSet", typeof(SetCurveForEdges), "endCurveSet", typeof(SetCurveForEdges) })]
public static Obj CreateSurfaceWithCurvesets(this SubSystemDocument document, string path, Obj faceSet, Obj startCurveSet, Obj endCurveSet, ExpressionValueVariable? numberOfSlice = null, ExpressionValueVariable? cuttingPlaneRadius = null, string name = "")
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The document to create the surface with curvesets.

`path` string

The path to create the surface with curvesets.

`faceSet` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The face set.

`startCurveSet` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The start curveset.

`endCurveSet` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The end curveset.

`numberOfSlice` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The number of slice. The default value is 19.

`cuttingPlaneRadius` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The radius of cutting plane. The default value is 10.

`name` string

The name of the <xref href="VM.Managed.DAFUL.SurfaceWithCurvesets" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'Surface_With_Curvesets_' will be generated and used.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.SurfaceWithCurvesets" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document', 'faceSet', 'startCurveSet', 'endCurveSet' are null.

 FileNotFoundException

Will be thrown if 'path' file path does not exist.

 ArgumentException

Will be thrown if the extension of 'path' is not 'csv'.

 ArgumentException

Will be thrown if Object of 'startCurveSet' and Object of 'endCurveSet' are the same.

 ArgumentException

Will be thrown if item type of 'faceSet' is not <xref href="VM.Managed.DAFUL.SetFace" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if item type of 'startCurveSet' is not <xref href="VM.Managed.DAFUL.SetCurveForEdges" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if item type of 'endCurveSet' is not <xref href="VM.Managed.DAFUL.SetCurveForEdges" data-throw-if-not-resolved="false"></xref>.

 ArgumentOutOfRangeException

Will be thrown if 'numberOfSlice', 'cuttingPlaneRadius' values equal to or less than 0.

### <a id="VM_API_Pre_Links_BallPlacingAPI_DeleteBall_VM_API_Pre_Obj_"></a> DeleteBall\(Obj\)

Delete ball.

```csharp
[NotNullObj(new string[] { "ball" })]
[MatchTypeObj(new object[] { "ball", typeof(SolidBody) })]
public static void DeleteBall(Obj ball)
```

#### Parameters

`ball` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The ball to delete ball.

#### Exceptions

 ArgumentNullException

Will be thrown if 'ball' is null.

 ArgumentException

Will be thrown if item type of 'ball' is not <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_Links_BallPlacingAPI_UpdateBall_VM_API_Pre_Obj_VM_Managed_DAFUL_Operation_BallInfo_"></a> UpdateBall\(Obj, BallInfo\)

Update ball.

```csharp
[NotNullObj(new string[] { "ball" })]
[MatchTypeObj(new object[] { "ball", typeof(SolidBody) })]
public static void UpdateBall(Obj ball, BallInfo ballInfo)
```

#### Parameters

`ball` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The ball to update ball.

`ballInfo` [BallInfo](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOPBallPlacing/BallInfo.cs)

The ball information to update ball.

#### Exceptions

 ArgumentNullException

Will be thrown if 'ball' is null.

 ArgumentException

Will be thrown if item type of 'ball' is not <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if the Name of 'ballInfo' is null.

 ArgumentException

Will be thrown if the Radius of 'ballInfo' is equal to or less than 0.

### <a id="VM_API_Pre_Links_BallPlacingAPI_UpdateFaceSet_VM_API_Pre_Obj_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_"></a> UpdateFaceSet\(Obj, ExpressionValueVariable, ExpressionValueVariable\)

Update faceset.

```csharp
[NotNullObj(new string[] { "faceset" })]
[MatchTypeObj(new object[] { "faceset", typeof(SetFace) })]
public static void UpdateFaceSet(Obj faceset, ExpressionValueVariable maximumPenetration, ExpressionValueVariable offset)
```

#### Parameters

`faceset` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The faceset to update ball.

`maximumPenetration` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The maximum penetration.

`offset` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The offset.

#### Exceptions

 ArgumentNullException

Will be thrown if 'faceset' is null.

 ArgumentException

Will be thrown if item type of 'faceset' is not <xref href="VM.Managed.DAFUL.SetFace" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_Links_BallPlacingAPI_UpdateSurfaceWithCurvesets_VM_API_Pre_Obj_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_System_Boolean_VM_Models_Pre_ExpressionValueVariable_"></a> UpdateSurfaceWithCurvesets\(Obj, ExpressionValueVariable, ExpressionValueVariable, bool, ExpressionValueVariable\)

Update surface with curvesets.

```csharp
[NotNullObj(new string[] { "surfaceWithCurvesets" })]
[MatchTypeObj(new object[] { "surfaceWithCurvesets", typeof(SurfaceWithCurvesets) })]
public static void UpdateSurfaceWithCurvesets(this Obj surfaceWithCurvesets, ExpressionValueVariable maximumPenetration, ExpressionValueVariable offset, bool isUp, ExpressionValueVariable slice)
```

#### Parameters

`surfaceWithCurvesets` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The surface with curvesets to update ball.

`maximumPenetration` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The maximum penetration.

`offset` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The offset.

`isUp` bool

The flag for up or down.

`slice` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The slice.

#### Exceptions

 ArgumentNullException

Will be thrown if 'surfaceWithCurvesets' is null.

 ArgumentException

Will be thrown if item type of 'surfaceWithCurvesets' is not <xref href="VM.Managed.DAFUL.SurfaceWithCurvesets" data-throw-if-not-resolved="false"></xref>.

