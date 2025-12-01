# Class HydroDynamicAPI
<a id="VM_API_Pre_Links_HydroDynamicAPI"></a>

Namespace: [VM.API.Pre.Links](VM.API.Pre.Links.md)  
Assembly: VM.API.Pre.Links.dll  

This class implements APIs for hydro dynamic.

```csharp
public static class HydroDynamicAPI
```

#### Inheritance

object ← 
[HydroDynamicAPI](VM.API.Pre.Links.HydroDynamicAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_Links_HydroDynamicAPI_CreateHydroForce_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_String_"></a> CreateHydroForce\(SubSystemDocument, Obj, Obj, IEnumerable<Obj\>, string\)

```csharp
[NotNullObj(new string[] { "baseWater", "hullBody" })]
[MatchTypeObj(new object[] { "baseWater", typeof(IWater), "hullBody", typeof(IConnectable) })]
public static Obj CreateHydroForce(this SubSystemDocument document, Obj baseWater, Obj hullBody, IEnumerable<Obj> actionEntities = null, string name = "")
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

`baseWater` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

`hullBody` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

`actionEntities` IEnumerable<[Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)\>

`name` string

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

### <a id="VM_API_Pre_Links_HydroDynamicAPI_CreateMasslessTrackLink_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_VM_API_Pre_Links_PathData__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_"></a> CreateMasslessTrackLink\(SubSystemDocument, Obj, Obj, IEnumerable<PathData\>, ExpressionValueVariable?, ExpressionValueVariable?, string\)

Create <xref href="VM.Managed.DAFUL.Track.MTL" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNullObj(new string[] { "baseEntity", "hullMarker" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IContactableRigid3D), "hullMarker", typeof(IMarker) })]
[NotNull(new string[] { "paths" })]
public static Obj CreateMasslessTrackLink(this SubSystemDocument document, Obj baseEntity, Obj hullMarker, IEnumerable<PathData> paths, ExpressionValueVariable? thickness = null, ExpressionValueVariable? width = null, string name = "")
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The document to create the massless track link.

`baseEntity` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The base entity.

`hullMarker` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The hull marker.

`paths` IEnumerable<[PathData](VM.API.Pre.Links.PathData.md)\>

The path information.

`thickness` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The thickness.

`width` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The width.

`name` string

The name of the <xref href="VM.Managed.DAFUL.Track.MTL" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'MTL_' will be generated and used.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.Track.MTL" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document', 'baseEntity', 'hullMarker' are null.

 ArgumentNullException

Will be thrown if 'paths' is null.

 ArgumentException

Will be thrown if type of 'baseEntity' is not <xref href="VM.Managed.DAFUL.IContactableRigid3D" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if type of 'hullMarker' is not <xref href="VM.Managed.IMarker" data-throw-if-not-resolved="false"></xref>.

 ArgumentOutOfRangeException

Will be thrown if 'thickness', 'width' value equal to or less than 0.

 ArgumentException

Will be thrown if type of 'Marker' of paths is not <xref href="VM.Managed.IMarker" data-throw-if-not-resolved="false"></xref>.

 ArgumentOutOfRangeException

Will be thrown if type of 'WindingRadius' of paths value equal to or less than 0.

### <a id="VM_API_Pre_Links_HydroDynamicAPI_CreateMultiMasslessTrackLink_VM_Managed_DAFUL_SubSystemDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_VM_API_Pre_Links_PathData__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_"></a> CreateMultiMasslessTrackLink\(SubSystemDocument, IEnumerable<Obj\>, Obj, IEnumerable<PathData\>, ExpressionValueVariable?, ExpressionValueVariable?, string\)

Create <xref href="VM.Managed.DAFUL.Track.MTL" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNullObj(new string[] { "hullMarker" })]
[NotNull(new string[] { "baseEntities", "paths" })]
[MatchTypeObj(new object[] { "hullMarker", typeof(IMarker), "hullMarker", typeof(IMarker) })]
public static void CreateMultiMasslessTrackLink(this SubSystemDocument document, IEnumerable<Obj> baseEntities, Obj hullMarker, IEnumerable<PathData> paths, ExpressionValueVariable? thickness = null, ExpressionValueVariable? width = null, string name = "")
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The document to create the massless track link.

`baseEntities` IEnumerable<[Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)\>

The base entities.

`hullMarker` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The hull marker.

`paths` IEnumerable<[PathData](VM.API.Pre.Links.PathData.md)\>

The path information.

`thickness` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The thickness.

`width` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The width.

`name` string

The name of the <xref href="VM.Managed.DAFUL.Track.MTL" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'MTL_' will be generated and used.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document', 'baseEntities', 'hullMarker' are null.

 ArgumentNullException

Will be thrown if 'paths' is null.

 ArgumentException

Will be thrown if type of Obj of 'baseEntities' is not <xref href="VM.Managed.DAFUL.IContactableRigid3D" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if type of 'hullMarker' is not <xref href="VM.Managed.IMarker" data-throw-if-not-resolved="false"></xref>.

 ArgumentOutOfRangeException

Will be thrown if 'thickness', 'width' value equal to or less than 0.

 ArgumentException

Will be thrown if type of 'Marker' of paths is not <xref href="VM.Managed.IMarker" data-throw-if-not-resolved="false"></xref>.

 ArgumentOutOfRangeException

Will be thrown if type of 'WindingRadius' of paths value equal to or less than 0.

### <a id="VM_API_Pre_Links_HydroDynamicAPI_CreateSoilInteraction_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_String_"></a> CreateSoilInteraction\(SubSystemDocument, Obj, IEnumerable<Obj\>, string\)

Create <xref href="VM.Managed.DAFUL.Track.SoilInteraction" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNullObj(new string[] { "baseEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IContactableRigid3D) })]
public static Obj CreateSoilInteraction(this SubSystemDocument document, Obj baseEntity, IEnumerable<Obj> actionEntities, string name = "")
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The document to create the soil interaction.

`baseEntity` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The base entity.

`actionEntities` IEnumerable<[Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)\>

The action entities.

`name` string

The name of the <xref href="VM.Managed.DAFUL.Track.SoilInteraction" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'SoilInteraction_' will be generated and used.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.Track.SoilInteraction" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document', 'baseEntity' are null.

 ArgumentException

Will be thrown if type of 'baseEntity' is not <xref href="VM.Managed.DAFUL.IContactableRigid3D" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if item type of 'actionEntities' is not <xref href="VM.Managed.IMarker" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_Links_HydroDynamicAPI_CreateThrustForce_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_System_String_"></a> CreateThrustForce\(SubSystemDocument, Obj, Obj, Vector, Vector, string\)

```csharp
[NotNullObj(new string[] { "baseWater", "body" })]
[MatchTypeObj(new object[] { "baseWater", typeof(IWater), "body", typeof(IConnectable) })]
[NotZeroMagnitude(new string[] { "thrustingAxis" })]
public static Obj CreateThrustForce(this SubSystemDocument document, Obj baseWater, Obj body, Vector position, Vector thrustingAxis, string name = "")
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

`baseWater` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

`body` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

`position` Vector

`thrustingAxis` Vector

`name` string

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

### <a id="VM_API_Pre_Links_HydroDynamicAPI_CreateWater_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_Vector_VM_Vector_VM_Vector_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_"></a> CreateWater\(SubSystemDocument, Obj, Vector, Vector, Vector, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, string\)

Create <xref href="VM.Managed.DAFUL.Track.Water" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNullObj(new string[] { "body" })]
[MatchTypeObj(new object[] { "body", typeof(IConnectable) })]
[NotZeroMagnitude(new string[] { "axisZ", "axisX" })]
public static Obj CreateWater(this SubSystemDocument document, Obj body, Vector position, Vector axisZ, Vector axisX, ExpressionValueVariable? lengthInXAxis = null, ExpressionValueVariable? widthInYAxis = null, ExpressionValueVariable? depthOfDeepWater = null, string name = "")
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The document to create the water.

`body` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The body.

`position` Vector

The position.

`axisZ` Vector

The z axis.

`axisX` Vector

The x axis.

`lengthInXAxis` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The length in x axis.

`widthInYAxis` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The width in y axis.

`depthOfDeepWater` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The depth of deep water.

`name` string

The name of the <xref href="VM.Managed.DAFUL.Track.Water" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'Water_' will be generated and used.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.Track.Water" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document', 'baseEntity' are null.

 ArgumentException

Will be thrown if type of 'baseEntity' is not <xref href="VM.Managed.DAFUL.IContactableRigid3D" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if type of 'actionEntities' is not <xref href="VM.Managed.IMarker" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if the magnitude of 'axisZ'.

 ArgumentException

Will be thrown if the magnitude of 'axisX'.

 ArgumentException

Will be thrown if 'axisZ' is equal to 'axisX'.

