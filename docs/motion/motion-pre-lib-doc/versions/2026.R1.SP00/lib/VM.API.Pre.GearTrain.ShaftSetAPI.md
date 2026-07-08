# Class ShaftSetAPI
<a id="VM_API_Pre_GearTrain_ShaftSetAPI"></a>

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This class implements APIs for <xref href="VM.Managed.DAFUL.GearTrain.ShaftSet" data-throw-if-not-resolved="false"></xref>, <xref href="VM.Managed.DAFUL.GearTrain.ShaftSetFE" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.GearTrain.ShaftSetMeshFree" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class ShaftSetAPI
```

#### Inheritance

object ← 
[ShaftSetAPI](VM.API.Pre.GearTrain.ShaftSetAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_AddBearingToRBEInEFEntity_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshFreeBase_System_String_System_String_VM_Vector_VM_API_Pre_Obj_System_Nullable_VM_API_Pre_GearTrain_ClearanceParameters__"></a> AddBearingToRBEInEFEntity\(HiddenDocumentMeshFreeBase, string, string, Vector, Obj, ClearanceParameters?\)

Add bearing to rbe in EF entity.

```csharp
[MatchTypeObj(new object[] { "connectable", typeof(IConnectable) })]
public static void AddBearingToRBEInEFEntity(this HiddenDocumentMeshFreeBase document, string bearingName, string racewayName, Vector direction, Obj connectable, ClearanceParameters? clearanceParameters = null)
```

#### Parameters

`document` [HiddenDocumentMeshFreeBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentMeshFreeBase.cs)

The document to add bearing.

`bearingName` string

The bearing name.

`racewayName` string

The raceway name.

`direction` Vector

The z-axis.

`connectable` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The start rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>

`clearanceParameters` [ClearanceParameters](VM.API.Pre.GearTrain.ClearanceParameters.md)?

The clearance parameter. If it is not given, default values will be used.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'bearingName' or 'racewayName' or 'connectable' arguments are empty.

 ArgumentException

Will be thrown if magnitude of 'direction' is zero.

 ArgumentException

Will be thrown if type of 'connectable' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_AddBearingToRBEInEFEntity_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshFreeBase_VM_API_Pre_Obj_VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_RacewayType_VM_Vector_VM_API_Pre_Obj_System_Nullable_VM_API_Pre_GearTrain_ClearanceParameters__"></a> AddBearingToRBEInEFEntity\(HiddenDocumentMeshFreeBase, Obj, RacewayType, Vector, Obj, ClearanceParameters?\)

Add bearing to rbe in EF entity.

```csharp
[NotNullObj(new string[] { "bearing", "connectable" })]
[MatchTypeObj(new object[] { "bearing", typeof(Bearing), "connectable", typeof(IConnectable) })]
public static void AddBearingToRBEInEFEntity(this HiddenDocumentMeshFreeBase document, Obj bearing, RacewayGeometryInfo.RacewayType racewayType, Vector direction, Obj connectable, ClearanceParameters? clearanceParameters = null)
```

#### Parameters

`document` [HiddenDocumentMeshFreeBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentMeshFreeBase.cs)

The document to add bearing.

`bearing` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The bearing. The type is <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref>.

`racewayType` [RacewayGeometryInfo](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/BearingRacewayGeometryInfo.cs).[RacewayType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/BearingRacewayGeometryInfo.cs)

The raceway type.

`direction` Vector

The z-axis.

`connectable` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The start rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

`clearanceParameters` [ClearanceParameters](VM.API.Pre.GearTrain.ClearanceParameters.md)?

The clearance parameter. If it is not given, default values will be used.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'bearing' or 'connectable' arguments are empty.

 ArgumentException

Will be thrown if magnitude of 'direction' is zero.

 ArgumentException

Will be thrown if type of 'bearing' is not <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if type of 'connectable' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_AddBearingToRBEInFEEntity_VM_Managed_DAFUL_GearTrain_HiddenDocumentFEBase_System_String_System_String_VM_Vector_VM_API_Pre_Obj_System_Nullable_VM_API_Pre_GearTrain_ClearanceParameters__"></a> AddBearingToRBEInFEEntity\(HiddenDocumentFEBase, string, string, Vector, Obj, ClearanceParameters?\)

Add bearing to rbe in FE entity.

```csharp
[MatchTypeObj(new object[] { "connectable", typeof(IConnectable) })]
public static void AddBearingToRBEInFEEntity(this HiddenDocumentFEBase document, string bearingName, string racewayName, Vector direction, Obj connectable, ClearanceParameters? clearanceParameters = null)
```

#### Parameters

`document` [HiddenDocumentFEBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentFEBase.cs)

The document to add bearing.

`bearingName` string

The bearing name.

`racewayName` string

The raceway name.

`direction` Vector

The z-axis.

`connectable` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The start rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>

`clearanceParameters` [ClearanceParameters](VM.API.Pre.GearTrain.ClearanceParameters.md)?

The clearance parameter. If it is not given, default values will be used.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'bearingName' or 'racewayName' or 'connectable' arguments are empty.

 ArgumentNullException

Will be thrown if magnitude of 'direction' is zero.

 ArgumentNullException

Will be thrown if type of 'connectable' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_AddBearingToRBEInFEEntity_VM_Managed_DAFUL_GearTrain_HiddenDocumentFEBase_VM_API_Pre_Obj_VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_RacewayType_VM_Vector_VM_API_Pre_Obj_System_Nullable_VM_API_Pre_GearTrain_ClearanceParameters__"></a> AddBearingToRBEInFEEntity\(HiddenDocumentFEBase, Obj, RacewayType, Vector, Obj, ClearanceParameters?\)

Add bearing to rbe in FE entity.

```csharp
[NotNullObj(new string[] { "bearing", "connectable" })]
[MatchTypeObj(new object[] { "bearing", typeof(Bearing), "connectable", typeof(IConnectable) })]
public static void AddBearingToRBEInFEEntity(this HiddenDocumentFEBase document, Obj bearing, RacewayGeometryInfo.RacewayType racewayType, Vector direction, Obj connectable, ClearanceParameters? clearanceParameters = null)
```

#### Parameters

`document` [HiddenDocumentFEBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentFEBase.cs)

The document to add bearing.

`bearing` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The bearing. The type is <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref>.

`racewayType` [RacewayGeometryInfo](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/BearingRacewayGeometryInfo.cs).[RacewayType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/BearingRacewayGeometryInfo.cs)

The raceway type.

`direction` Vector

The z-axis.

`connectable` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The start rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>

`clearanceParameters` [ClearanceParameters](VM.API.Pre.GearTrain.ClearanceParameters.md)?

The clearance parameter. If it is not given, default values will be used.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'bearing' or 'connectable' arguments are empty.

 ArgumentException

Will be thrown if magnitude of 'direction' is zero.

 ArgumentException

Will be thrown if type of 'bearing' is not <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if type of 'connectable' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_AddBearingToShaftset_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_System_String_System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_API_Pre_GearTrain_AttachLocationType_VM_API_Pre_GearTrain_DirectionType_System_Nullable_VM_API_Pre_GearTrain_ClearanceParameters__"></a> AddBearingToShaftset\(HiddenShaftSetDocument, string, string, ExpressionValueVariable?, AttachLocationType, DirectionType, ClearanceParameters?\)

Add bearing to shaftset.

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "bearingName", "racewayName" })]
public static void AddBearingToShaftset(this HiddenShaftSetDocument document, string bearingName, string racewayName, ExpressionValueVariable? offset = null, AttachLocationType location = AttachLocationType.Left, DirectionType direction = DirectionType.Forward, ClearanceParameters? clearanceParameters = null)
```

#### Parameters

`document` [HiddenShaftSetDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenShaftSetDocument.cs)

The document to add bearing.

`bearingName` string

The bearing name.

`racewayName` string

The raceway name.

`offset` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The offset when attached to shaft. The default value is 0.0.

`location` [AttachLocationType](VM.API.Pre.GearTrain.AttachLocationType.md)

The location when attached to shaft. The default value is Left

`direction` [DirectionType](VM.API.Pre.GearTrain.DirectionType.md)

The direction type. The default value is Forward

`clearanceParameters` [ClearanceParameters](VM.API.Pre.GearTrain.ClearanceParameters.md)?

The clearance parameter. If it is not given, default values will be used.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'bearingName' or 'racewayName' arguments are empty.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_AddBearingToShaftset_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_VM_API_Pre_Obj_VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_RacewayType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_API_Pre_GearTrain_AttachLocationType_VM_API_Pre_GearTrain_DirectionType_System_Nullable_VM_API_Pre_GearTrain_ClearanceParameters__"></a> AddBearingToShaftset\(HiddenShaftSetDocument, Obj, RacewayType, ExpressionValueVariable?, AttachLocationType, DirectionType, ClearanceParameters?\)

Add bearing to shaftset.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "bearing" })]
[MatchTypeObj(new object[] { "bearing", typeof(Bearing) })]
public static void AddBearingToShaftset(this HiddenShaftSetDocument document, Obj bearing, RacewayGeometryInfo.RacewayType racewayType, ExpressionValueVariable? offset = null, AttachLocationType location = AttachLocationType.Left, DirectionType direction = DirectionType.Forward, ClearanceParameters? clearanceParameters = null)
```

#### Parameters

`document` [HiddenShaftSetDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenShaftSetDocument.cs)

The document to add bearing.

`bearing` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The bearing. The type is <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref>.

`racewayType` [RacewayGeometryInfo](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/BearingRacewayGeometryInfo.cs).[RacewayType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/BearingRacewayGeometryInfo.cs)

The raceway type.

`offset` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The offset when attached to shaft. The default value is 0.0.

`location` [AttachLocationType](VM.API.Pre.GearTrain.AttachLocationType.md)

The location when attached to shaft. The default value is Left

`direction` [DirectionType](VM.API.Pre.GearTrain.DirectionType.md)

The direction type. The default value is Forward

`clearanceParameters` [ClearanceParameters](VM.API.Pre.GearTrain.ClearanceParameters.md)?

The clearance parameter. If it is not given, default values will be used.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'bearing' arguments are empty.

 ArgumentException

Will be thrown if type of 'bearing' is not <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_AddGearToRBEInEFEntity_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshFreeBase_System_String_System_String_VM_Vector_VM_API_Pre_Obj_VM_API_Pre_GearTrain_ShaftAttachType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_API_Pre_GearTrain_AttachLocationType_System_Nullable_VM_API_Pre_Obj__VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_RacewayType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_API_Pre_GearTrain_AttachLocationType_System_Nullable_VM_API_Pre_GearTrain_ClearanceParameters__"></a> AddGearToRBEInEFEntity\(HiddenDocumentMeshFreeBase, string, string, Vector, Obj, ShaftAttachType, ExpressionValueVariable?, AttachLocationType, Obj?, RacewayType, ExpressionValueVariable?, AttachLocationType, ClearanceParameters?\)

Add gear to rbe in EF entity.

```csharp
public static void AddGearToRBEInEFEntity(this HiddenDocumentMeshFreeBase document, string gearSetName, string gearName, Vector direction, Obj connectable, ShaftAttachType shaftAttach = ShaftAttachType.Shaft, ExpressionValueVariable? offset = null, AttachLocationType location = AttachLocationType.Left, Obj? bearing = null, RacewayGeometryInfo.RacewayType racewayType = RacewayType.Inner, ExpressionValueVariable? bearingOffset = null, AttachLocationType bearingLocation = AttachLocationType.Left, ClearanceParameters? clearanceParameters = null)
```

#### Parameters

`document` [HiddenDocumentMeshFreeBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentMeshFreeBase.cs)

The document to add gear.

`gearSetName` string

The gear set name.

`gearName` string

The gear name.

`direction` Vector

The z-axis.

`connectable` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>

`shaftAttach` [ShaftAttachType](VM.API.Pre.GearTrain.ShaftAttachType.md)

The attach type. The default value is Shaft.

`offset` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The offset when attached to shaft. The default value is 0.0.

`location` [AttachLocationType](VM.API.Pre.GearTrain.AttachLocationType.md)

The location when attached to shaft. The default value is Left.

`bearing` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)?

The bearing.

`racewayType` [RacewayGeometryInfo](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/BearingRacewayGeometryInfo.cs).[RacewayType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/BearingRacewayGeometryInfo.cs)

The bearing raceway type.

`bearingOffset` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The offset when attached to bearing. The default value is 0.0.

`bearingLocation` [AttachLocationType](VM.API.Pre.GearTrain.AttachLocationType.md)

The location when attached to bearing. The default value is Left.

`clearanceParameters` [ClearanceParameters](VM.API.Pre.GearTrain.ClearanceParameters.md)?

The clearance parameter. If it is not given, default values will be used.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'gearSetName' or 'gearName' arguments are empty.

 ArgumentException

Will be thrown if magnitude of 'direction' is zero.

 ArgumentException

Will be thrown if type of 'connectable' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_AddGearToRBEInEFEntity_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshFreeBase_VM_API_Pre_Obj_System_Int32_VM_Vector_VM_API_Pre_Obj_VM_API_Pre_GearTrain_ShaftAttachType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_API_Pre_GearTrain_AttachLocationType_System_Nullable_VM_API_Pre_Obj__VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_RacewayType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_API_Pre_GearTrain_AttachLocationType_System_Nullable_VM_API_Pre_GearTrain_ClearanceParameters__"></a> AddGearToRBEInEFEntity\(HiddenDocumentMeshFreeBase, Obj, int, Vector, Obj, ShaftAttachType, ExpressionValueVariable?, AttachLocationType, Obj?, RacewayType, ExpressionValueVariable?, AttachLocationType, ClearanceParameters?\)

Add gear to rbe in EF entity.

```csharp
[NotNullObj(new string[] { "gearset" })]
[GreaterThanOrEqualToZero(new string[] { "gearIndex" })]
public static void AddGearToRBEInEFEntity(this HiddenDocumentMeshFreeBase document, Obj gearset, int gearIndex, Vector direction, Obj connectable, ShaftAttachType shaftAttach = ShaftAttachType.Shaft, ExpressionValueVariable? offset = null, AttachLocationType location = AttachLocationType.Left, Obj? bearing = null, RacewayGeometryInfo.RacewayType racewayType = RacewayType.Inner, ExpressionValueVariable? bearingOffset = null, AttachLocationType bearingLocation = AttachLocationType.Left, ClearanceParameters? clearanceParameters = null)
```

#### Parameters

`document` [HiddenDocumentMeshFreeBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentMeshFreeBase.cs)

The document to add gear.

`gearset` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The gear set. The type is <xref href="VM.Managed.DAFUL.GearTrain.IGearSet" data-throw-if-not-resolved="false"></xref>.

`gearIndex` int

The gear index. The value is zero base.

`direction` Vector

The z-axis.

`connectable` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>

`shaftAttach` [ShaftAttachType](VM.API.Pre.GearTrain.ShaftAttachType.md)

The attach type. The default value is Shaft.

`offset` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The offset when attached to shaft. The default value is 0.0.

`location` [AttachLocationType](VM.API.Pre.GearTrain.AttachLocationType.md)

The location when attached to shaft. The default value is Left.

`bearing` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)?

The bearing.

`racewayType` [RacewayGeometryInfo](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/BearingRacewayGeometryInfo.cs).[RacewayType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/BearingRacewayGeometryInfo.cs)

The bearing raceway type.

`bearingOffset` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The offset when attached to bearing. The default value is 0.0.

`bearingLocation` [AttachLocationType](VM.API.Pre.GearTrain.AttachLocationType.md)

The location when attached to bearing. The default value is Left.

`clearanceParameters` [ClearanceParameters](VM.API.Pre.GearTrain.ClearanceParameters.md)?

The clearance parameter. If it is not given, default values will be used.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'gearset' arguments are empty.

 ArgumentOutOfRangeException

Will be thrown if 'gearIndex' is less than zero.

 ArgumentException

Will be thrown if 'gearIndex' is greater than or equal to gear's count.

 ArgumentException

Will be thrown if magnitude of 'direction' is zero.

 ArgumentException

Will be thrown if type of 'gearset' is not <xref href="VM.Managed.DAFUL.GearTrain.IGearSet" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if type of 'connectable' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_AddGearToRBEInFEEntity_VM_Managed_DAFUL_GearTrain_HiddenDocumentFEBase_System_String_System_String_VM_Vector_VM_API_Pre_Obj_VM_API_Pre_GearTrain_ShaftAttachType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_API_Pre_GearTrain_AttachLocationType_System_Nullable_VM_API_Pre_Obj__VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_RacewayType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_API_Pre_GearTrain_AttachLocationType_System_Nullable_VM_API_Pre_GearTrain_ClearanceParameters__"></a> AddGearToRBEInFEEntity\(HiddenDocumentFEBase, string, string, Vector, Obj, ShaftAttachType, ExpressionValueVariable?, AttachLocationType, Obj?, RacewayType, ExpressionValueVariable?, AttachLocationType, ClearanceParameters?\)

Add gear to rbe in FE entity.

```csharp
public static void AddGearToRBEInFEEntity(this HiddenDocumentFEBase document, string gearSetName, string gearName, Vector direction, Obj connectable, ShaftAttachType shaftAttach = ShaftAttachType.Shaft, ExpressionValueVariable? offset = null, AttachLocationType location = AttachLocationType.Left, Obj? bearing = null, RacewayGeometryInfo.RacewayType racewayType = RacewayType.Inner, ExpressionValueVariable? bearingOffset = null, AttachLocationType bearingLocation = AttachLocationType.Left, ClearanceParameters? clearanceParameters = null)
```

#### Parameters

`document` [HiddenDocumentFEBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentFEBase.cs)

The document to add gear.

`gearSetName` string

The gear set name.

`gearName` string

The gear name.

`direction` Vector

The z-axis.

`connectable` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>

`shaftAttach` [ShaftAttachType](VM.API.Pre.GearTrain.ShaftAttachType.md)

The attach type. The default value is Shaft.

`offset` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The offset when attached to shaft. The default value is 0.0.

`location` [AttachLocationType](VM.API.Pre.GearTrain.AttachLocationType.md)

The location when attached to shaft.The default value is Left.

`bearing` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)?

The bearing.

`racewayType` [RacewayGeometryInfo](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/BearingRacewayGeometryInfo.cs).[RacewayType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/BearingRacewayGeometryInfo.cs)

The bearing raceway type.

`bearingOffset` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The offset when attached to bearing. The default value is 0.0.

`bearingLocation` [AttachLocationType](VM.API.Pre.GearTrain.AttachLocationType.md)

The location when attached to bearing. The default value is Left.

`clearanceParameters` [ClearanceParameters](VM.API.Pre.GearTrain.ClearanceParameters.md)?

The clearance parameter. If it is not given, default values will be used.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'gearSetName' or 'gearName' arguments are empty.

 ArgumentException

Will be thrown if magnitude of 'direction' is zero.

 ArgumentException

Will be thrown if type of 'connectable' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_AddGearToRBEInFEEntity_VM_Managed_DAFUL_GearTrain_HiddenDocumentFEBase_VM_API_Pre_Obj_System_Int32_VM_Vector_VM_API_Pre_Obj_VM_API_Pre_GearTrain_ShaftAttachType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_API_Pre_GearTrain_AttachLocationType_System_Nullable_VM_API_Pre_Obj__VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_RacewayType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_API_Pre_GearTrain_AttachLocationType_System_Nullable_VM_API_Pre_GearTrain_ClearanceParameters__"></a> AddGearToRBEInFEEntity\(HiddenDocumentFEBase, Obj, int, Vector, Obj, ShaftAttachType, ExpressionValueVariable?, AttachLocationType, Obj?, RacewayType, ExpressionValueVariable?, AttachLocationType, ClearanceParameters?\)

Add gear to rbe in FE entity.

```csharp
[NotNullObj(new string[] { "gearset" })]
[GreaterThanOrEqualToZero(new string[] { "gearIndex" })]
public static void AddGearToRBEInFEEntity(this HiddenDocumentFEBase document, Obj gearset, int gearIndex, Vector direction, Obj connectable, ShaftAttachType shaftAttach = ShaftAttachType.Shaft, ExpressionValueVariable? offset = null, AttachLocationType location = AttachLocationType.Left, Obj? bearing = null, RacewayGeometryInfo.RacewayType racewayType = RacewayType.Inner, ExpressionValueVariable? bearingOffset = null, AttachLocationType bearingLocation = AttachLocationType.Left, ClearanceParameters? clearanceParameters = null)
```

#### Parameters

`document` [HiddenDocumentFEBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentFEBase.cs)

The document to add gear.

`gearset` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The gear set. The type is <xref href="VM.Managed.DAFUL.GearTrain.IGearSet" data-throw-if-not-resolved="false"></xref>.

`gearIndex` int

The gear index. The value is zero base.

`direction` Vector

The z-axis.

`connectable` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>

`shaftAttach` [ShaftAttachType](VM.API.Pre.GearTrain.ShaftAttachType.md)

The attach type. The default value is Shaft.

`offset` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The offset when attached to shaft. The default value is 0.0.

`location` [AttachLocationType](VM.API.Pre.GearTrain.AttachLocationType.md)

The location when attached to shaft.The default value is Left.

`bearing` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)?

The bearing.

`racewayType` [RacewayGeometryInfo](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/BearingRacewayGeometryInfo.cs).[RacewayType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/BearingRacewayGeometryInfo.cs)

The bearing raceway type.

`bearingOffset` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The offset when attached to bearing. The default value is 0.0.

`bearingLocation` [AttachLocationType](VM.API.Pre.GearTrain.AttachLocationType.md)

The location when attached to bearing. The default value is Left.

`clearanceParameters` [ClearanceParameters](VM.API.Pre.GearTrain.ClearanceParameters.md)?

The clearance parameter. If it is not given, default values will be used.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'gearset' arguments are empty.

 ArgumentOutOfRangeException

Will be thrown if 'gearIndex' is less than zero.

 ArgumentException

Will be thrown if 'gearIndex' is greater than or equal to gear's count.

 ArgumentException

Will be thrown if magnitude of 'direction' is zero.

 ArgumentException

Will be thrown if type of 'gearset' is not <xref href="VM.Managed.DAFUL.GearTrain.IGearSet" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if type of 'connectable' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_AddGearToShaftset_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_System_String_System_String_VM_API_Pre_GearTrain_ShaftAttachType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_API_Pre_GearTrain_AttachLocationType_System_Nullable_VM_API_Pre_Obj__VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_RacewayType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_API_Pre_GearTrain_AttachLocationType_System_Nullable_VM_API_Pre_GearTrain_ClearanceParameters__"></a> AddGearToShaftset\(HiddenShaftSetDocument, string, string, ShaftAttachType, ExpressionValueVariable?, AttachLocationType, Obj?, RacewayType, ExpressionValueVariable?, AttachLocationType, ClearanceParameters?\)

Add gear to shaftset.

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "gearSetName", "gearName" })]
public static void AddGearToShaftset(this HiddenShaftSetDocument document, string gearSetName, string gearName, ShaftAttachType shaftAttach = ShaftAttachType.Shaft, ExpressionValueVariable? offset = null, AttachLocationType location = AttachLocationType.Left, Obj? bearing = null, RacewayGeometryInfo.RacewayType racewayType = RacewayType.Inner, ExpressionValueVariable? bearingOffset = null, AttachLocationType bearingLocation = AttachLocationType.Left, ClearanceParameters? clearanceParameters = null)
```

#### Parameters

`document` [HiddenShaftSetDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenShaftSetDocument.cs)

The document to add gear.

`gearSetName` string

The gear set name.

`gearName` string

The gear name.

`shaftAttach` [ShaftAttachType](VM.API.Pre.GearTrain.ShaftAttachType.md)

The attach type. The default value is Shaft.

`offset` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The offset when attached to shaft. The default value is 0.0.

`location` [AttachLocationType](VM.API.Pre.GearTrain.AttachLocationType.md)

The location when attached to shaft. The default value is Left

`bearing` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)?

The bearing.

`racewayType` [RacewayGeometryInfo](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/BearingRacewayGeometryInfo.cs).[RacewayType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/BearingRacewayGeometryInfo.cs)

The bearing raceway type.

`bearingOffset` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The offset when attached to bearing. The default value is 0.0

`bearingLocation` [AttachLocationType](VM.API.Pre.GearTrain.AttachLocationType.md)

The location when attached to bearing. The default value is Left

`clearanceParameters` [ClearanceParameters](VM.API.Pre.GearTrain.ClearanceParameters.md)?

The clearance parameter. If it is not given, default values will be used.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'gearSetName' or 'gearName' arguments are empty.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_AddGearToShaftset_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_VM_API_Pre_Obj_System_Int32_VM_API_Pre_GearTrain_ShaftAttachType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_API_Pre_GearTrain_AttachLocationType_System_Nullable_VM_API_Pre_Obj__VM_Managed_DAFUL_GearTrain_RacewayGeometryInfo_RacewayType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_API_Pre_GearTrain_AttachLocationType_System_Nullable_VM_API_Pre_GearTrain_ClearanceParameters__"></a> AddGearToShaftset\(HiddenShaftSetDocument, Obj, int, ShaftAttachType, ExpressionValueVariable?, AttachLocationType, Obj?, RacewayType, ExpressionValueVariable?, AttachLocationType, ClearanceParameters?\)

Add gear to shaftset.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "gearSet" })]
[GreaterThanOrEqualToZero(new string[] { "gearIndex" })]
[MatchTypeObj(new object[] { "gearSet", typeof(IGearSet) })]
public static void AddGearToShaftset(this HiddenShaftSetDocument document, Obj gearSet, int gearIndex, ShaftAttachType shaftAttach = ShaftAttachType.Shaft, ExpressionValueVariable? offset = null, AttachLocationType location = AttachLocationType.Left, Obj? bearing = null, RacewayGeometryInfo.RacewayType racewayType = RacewayType.Inner, ExpressionValueVariable? bearingOffset = null, AttachLocationType bearingLocation = AttachLocationType.Left, ClearanceParameters? clearanceParameters = null)
```

#### Parameters

`document` [HiddenShaftSetDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenShaftSetDocument.cs)

The document to add gear.

`gearSet` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The gear set. The type is <xref href="VM.Managed.DAFUL.GearTrain.IGearSet" data-throw-if-not-resolved="false"></xref>.

`gearIndex` int

The gear index. The value is zero base.

`shaftAttach` [ShaftAttachType](VM.API.Pre.GearTrain.ShaftAttachType.md)

The attach type. The default value is Shaft.

`offset` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The offset when attached to shaft. The default value is 0.0.

`location` [AttachLocationType](VM.API.Pre.GearTrain.AttachLocationType.md)

The location when attached to shaft. The default value is Left

`bearing` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)?

The bearing.

`racewayType` [RacewayGeometryInfo](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/BearingRacewayGeometryInfo.cs).[RacewayType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/BearingRacewayGeometryInfo.cs)

The bearing raceway type.

`bearingOffset` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The offset when attached to bearing. The default value is 0.0

`bearingLocation` [AttachLocationType](VM.API.Pre.GearTrain.AttachLocationType.md)

The location when attached to bearing. The default value is Left

`clearanceParameters` [ClearanceParameters](VM.API.Pre.GearTrain.ClearanceParameters.md)?

The clearance parameter. If it is not given, default values will be used.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'gearSet' arguments are empty.

 ArgumentOutOfRangeException

Will be thrown if 'gearIndex' is less than zero.

 ArgumentException

Will be thrown if 'gearIndex' is greater than or equal to gear's count.

 ArgumentException

Will be thrown if type of 'gearset' is not <xref href="VM.Managed.DAFUL.GearTrain.IGearSet" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_AddRackToRBEInEFEntity_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshFreeBase_System_String_System_String_VM_Vector_VM_API_Pre_Obj_VM_API_Pre_Obj_System_Boolean_System_Boolean_System_Nullable_VM_Models_Pre_ExpressionValueVariable__"></a> AddRackToRBEInEFEntity\(HiddenDocumentMeshFreeBase, string, string, Vector, Obj, Obj, bool, bool, ExpressionValueVariable?\)

Add rack to rbe in EF entity.

```csharp
public static void AddRackToRBEInEFEntity(this HiddenDocumentMeshFreeBase document, string gearSetName, string gearName, Vector direction, Obj connectableStart, Obj connectableEnd, bool useStart = true, bool useEnd = true, ExpressionValueVariable? initialAngle = null)
```

#### Parameters

`document` [HiddenDocumentMeshFreeBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentMeshFreeBase.cs)

The document to add gear.

`gearSetName` string

The gear set name.

`gearName` string

The gear name.

`direction` Vector

The z-axis.

`connectableStart` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The start rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>

`connectableEnd` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The end rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>

`useStart` bool

The flag for whether using start rbe.

`useEnd` bool

The flag for whether using end rbe.

`initialAngle` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The initial angle. The default value is 0.0.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'gearSetName' or 'gearName' or 'connectableStart' or 'connectableEnd' arguments are empty.

 ArgumentException

Will be thrown if magnitude of 'direction' is zero.

 ArgumentException

Will be thrown if type of 'connectableStart' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if type of 'connectableEnd' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_AddRackToRBEInEFEntity_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshFreeBase_VM_API_Pre_Obj_System_Int32_VM_Vector_VM_API_Pre_Obj_VM_API_Pre_Obj_System_Boolean_System_Boolean_System_Nullable_VM_Models_Pre_ExpressionValueVariable__"></a> AddRackToRBEInEFEntity\(HiddenDocumentMeshFreeBase, Obj, int, Vector, Obj, Obj, bool, bool, ExpressionValueVariable?\)

Add rack to rbe in EF entity.

```csharp
[NotNullObj(new string[] { "gearSetRackAndPinion", "connectableStart", "connectableEnd" })]
[GreaterThanOrEqualToZero(new string[] { "gearIndex" })]
public static void AddRackToRBEInEFEntity(this HiddenDocumentMeshFreeBase document, Obj gearSetRackAndPinion, int gearIndex, Vector direction, Obj connectableStart, Obj connectableEnd, bool useStart = true, bool useEnd = true, ExpressionValueVariable? initialAngle = null)
```

#### Parameters

`document` [HiddenDocumentMeshFreeBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentMeshFreeBase.cs)

The document to add gear.

`gearSetRackAndPinion` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The gear set name. The type is <xref href="VM.Managed.DAFUL.GearTrain.GearSetRackAndPinion" data-throw-if-not-resolved="false"></xref>.

`gearIndex` int

The gear name.

`direction` Vector

The z-axis.

`connectableStart` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The start rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>

`connectableEnd` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The end rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>

`useStart` bool

The flag for whether using start rbe.

`useEnd` bool

The flag for whether using end rbe.

`initialAngle` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The initial angle. The default value is 0.0.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'gearSetName' or 'gearName' or 'connectableStart' or 'connectableEnd' arguments are empty.

 ArgumentOutOfRangeException

Will be thrown if 'gearIndex' is less than zero.

 ArgumentException

Will be thrown if 'gearIndex' is greater than or equal to gear's count.

 ArgumentException

Will be thrown if magnitude of 'direction' is zero.

 ArgumentException

Will be thrown if type of 'gearSetRackAndPinion' is not <xref href="VM.Managed.DAFUL.GearTrain.GearSetRackAndPinion" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if type of 'connectableStart' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if type of 'connectableEnd' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_AddRackToRBEInFEEntity_VM_Managed_DAFUL_GearTrain_HiddenDocumentFEBase_System_String_System_String_VM_Vector_VM_API_Pre_Obj_VM_API_Pre_Obj_System_Boolean_System_Boolean_System_Nullable_VM_Models_Pre_ExpressionValueVariable__"></a> AddRackToRBEInFEEntity\(HiddenDocumentFEBase, string, string, Vector, Obj, Obj, bool, bool, ExpressionValueVariable?\)

Add gear to rack in FE entity.

```csharp
public static void AddRackToRBEInFEEntity(this HiddenDocumentFEBase document, string gearSetName, string gearName, Vector direction, Obj connectableStart, Obj connectableEnd, bool useStart = true, bool useEnd = true, ExpressionValueVariable? initialAngle = null)
```

#### Parameters

`document` [HiddenDocumentFEBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentFEBase.cs)

The document to add gear.

`gearSetName` string

The gear set name.

`gearName` string

The gear name.

`direction` Vector

The z-axis.

`connectableStart` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The start rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>

`connectableEnd` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The end rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>

`useStart` bool

The flag for whether using start rbe.

`useEnd` bool

The flag for whether using end rbe.

`initialAngle` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The initial angle. The default value is 0.0.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'gearSetName' or 'gearName' or 'connectableStart' or 'connectableEnd' arguments are empty.

 ArgumentException

Will be thrown if magnitude of 'direction' is zero.

 ArgumentException

Will be thrown if type of 'connectableStart' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if type of 'connectableEnd' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_AddRackToRBEInFEEntity_VM_Managed_DAFUL_GearTrain_HiddenDocumentFEBase_VM_API_Pre_Obj_System_Int32_VM_Vector_VM_API_Pre_Obj_VM_API_Pre_Obj_System_Boolean_System_Boolean_System_Nullable_VM_Models_Pre_ExpressionValueVariable__"></a> AddRackToRBEInFEEntity\(HiddenDocumentFEBase, Obj, int, Vector, Obj, Obj, bool, bool, ExpressionValueVariable?\)

Add gear to rack in FE entity.

```csharp
[NotNullObj(new string[] { "gearSetRackAndPinion", "connectableStart", "connectableEnd" })]
[GreaterThanOrEqualToZero(new string[] { "gearIndex" })]
public static void AddRackToRBEInFEEntity(this HiddenDocumentFEBase document, Obj gearSetRackAndPinion, int gearIndex, Vector direction, Obj connectableStart, Obj connectableEnd, bool useStart = true, bool useEnd = true, ExpressionValueVariable? initialAngle = null)
```

#### Parameters

`document` [HiddenDocumentFEBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentFEBase.cs)

The document to add gear.

`gearSetRackAndPinion` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The gear set name. The type is <xref href="VM.Managed.DAFUL.GearTrain.GearSetRackAndPinion" data-throw-if-not-resolved="false"></xref>.

`gearIndex` int

The gear name.

`direction` Vector

The z-axis.

`connectableStart` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The start rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>

`connectableEnd` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The end rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>

`useStart` bool

The flag for whether using start rbe.

`useEnd` bool

The flag for whether using end rbe.

`initialAngle` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The initial angle. The default value is 0.0.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'gearSetRackAndPinion' or 'connectableStart' or 'connectableEnd' arguments are empty.

 ArgumentOutOfRangeException

Will be thrown if 'gearIndex' is less than zero.

 ArgumentException

Will be thrown if 'gearIndex' is greater than or equal to gear's count.

 ArgumentException

Will be thrown if magnitude of 'direction' is zero.

 ArgumentException

Will be thrown if type of 'gearSetRackAndPinion' is not <xref href="VM.Managed.DAFUL.GearTrain.GearSetRackAndPinion" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if type of 'connectableStart' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if type of 'connectableEnd' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_AddRackToShaftset_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_System_String_System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Int32_"></a> AddRackToShaftset\(HiddenShaftSetDocument, string, string, ExpressionValueVariable?, int\)

Add rack to shaftset.

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "gearSetName", "gearName" })]
public static void AddRackToShaftset(this HiddenShaftSetDocument document, string gearSetName, string gearName, ExpressionValueVariable? initialAngle = null, int gearIndex = 0)
```

#### Parameters

`document` [HiddenShaftSetDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenShaftSetDocument.cs)

The document to add rack.

`gearSetName` string

The gear set name.

`gearName` string

The rack name.

`initialAngle` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The initial angle. The default value is 0.0.

`gearIndex` int

The gear index. The value is zero base.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'gearSetName' or 'gearName' arguments are empty.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_AddRackToShaftset_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_VM_API_Pre_Obj_System_Int32_System_Nullable_VM_Models_Pre_ExpressionValueVariable__"></a> AddRackToShaftset\(HiddenShaftSetDocument, Obj, int, ExpressionValueVariable?\)

Add rack to shaftset.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "gearSetRackAndPinion" })]
[GreaterThanOrEqualToZero(new string[] { "gearIndex" })]
[MatchTypeObj(new object[] { "gearSetRackAndPinion", typeof(GearSetRackAndPinion) })]
public static void AddRackToShaftset(this HiddenShaftSetDocument document, Obj gearSetRackAndPinion, int gearIndex, ExpressionValueVariable? initialAngle = null)
```

#### Parameters

`document` [HiddenShaftSetDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenShaftSetDocument.cs)

The document to add rack.

`gearSetRackAndPinion` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The rack and  pinion gear set. The type is <xref href="VM.Managed.DAFUL.GearTrain.GearSetRackAndPinion" data-throw-if-not-resolved="false"></xref>.

`gearIndex` int

The gear index. The value is zero base.

`initialAngle` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The initial angle. The default value is 0.0.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'gearSetRackAndPinion' arguments are empty.

 ArgumentOutOfRangeException

Will be thrown if 'gearIndex' is less than zero.

 ArgumentException

Will be thrown if 'gearIndex' is greater than or equal to gear's count.

 ArgumentException

Will be thrown if type of 'gearSetRackAndPinion' is not <xref href="VM.Managed.DAFUL.GearTrain.GearSetRackAndPinion" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_AddSectionInSimpleShaftset_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_API_Pre_GearTrain_CrossSectionType_System_Collections_Generic_IEnumerable_VM_Models_Pre_ExpressionValueVariable__System_String_"></a> AddSectionInSimpleShaftset\(HiddenShaftSetDocument, ExpressionValueVariable?, CrossSectionType, IEnumerable<ExpressionValueVariable\>, string\)

Add section in simple shaftset.

```csharp
[NotNull(new string[] { "document" })]
public static void AddSectionInSimpleShaftset(this HiddenShaftSetDocument document, ExpressionValueVariable? length = null, CrossSectionType crossSection = CrossSectionType.CIRCULAR, IEnumerable<ExpressionValueVariable> diameters = null, string sectionName = "")
```

#### Parameters

`document` [HiddenShaftSetDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenShaftSetDocument.cs)

The document to add section.

`length` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The added section length. The default value is 1.0.

`crossSection` [CrossSectionType](VM.API.Pre.GearTrain.CrossSectionType.md)

The cross section type. The default value is CIRCULAR

`diameters` IEnumerable<[ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)\>

The width when add to shaft. If it is null, default values based on cross section will be used.

`sectionName` string

The name of the section. If empty, default name starts with 'Section_' will be generated and used.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' argument is empty.

 ArgumentException

Will be thrown if 'crossSection' and 'diameters' argument do not match.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_AddSlidingBearingToRBEInEFEntity_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshFreeBase_System_String_VM_API_Pre_Obj_VM_Managed_DAFUL_GearTrain_enSBContactType_"></a> AddSlidingBearingToRBEInEFEntity\(HiddenDocumentMeshFreeBase, string, Obj, enSBContactType\)

Add sliding bearing to rbe in EF entity.

```csharp
[MatchTypeObj(new object[] { "connectable", typeof(IConnectable) })]
public static void AddSlidingBearingToRBEInEFEntity(this HiddenDocumentMeshFreeBase document, string slidingBearingName, Obj connectable, enSBContactType contact = enSBContactType.OUTER_FIX)
```

#### Parameters

`document` [HiddenDocumentMeshFreeBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentMeshFreeBase.cs)

The document to add sliding bearing.

`slidingBearingName` string

The sliding bearing name.

`connectable` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

`contact` enSBContactType

The contact type. The default value is outer fix.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'slidingBearingName' or 'connectable' arguments are empty.

 ArgumentException

Will be thrown if type of 'connectable' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_AddSlidingBearingToRBEInEFEntity_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshFreeBase_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Managed_DAFUL_GearTrain_enSBContactType_"></a> AddSlidingBearingToRBEInEFEntity\(HiddenDocumentMeshFreeBase, Obj, Obj, enSBContactType\)

Add sliding bearing to rbe in EF entity.

```csharp
[NotNullObj(new string[] { "slidingBearing", "connectable" })]
[MatchTypeObj(new object[] { "slidingBearing", typeof(SlidingBearing), "connectable", typeof(IConnectable) })]
public static void AddSlidingBearingToRBEInEFEntity(this HiddenDocumentMeshFreeBase document, Obj slidingBearing, Obj connectable, enSBContactType contact = enSBContactType.OUTER_FIX)
```

#### Parameters

`document` [HiddenDocumentMeshFreeBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentMeshFreeBase.cs)

The document to add sliding bearing.

`slidingBearing` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The sliding bearing. The type is <xref href="VM.Managed.DAFUL.GearTrain.SlidingBearing" data-throw-if-not-resolved="false"></xref>

`connectable` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

`contact` enSBContactType

The contact type. The default value is outer fix.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'slidingBearing' or 'connectable' arguments are empty.

 ArgumentException

Will be thrown if type of 'slidingBearing' is not <xref href="VM.Managed.DAFUL.GearTrain.SlidingBearing" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if type of 'connectable' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_AddSlidingBearingToRBEInFEEntity_VM_Managed_DAFUL_GearTrain_HiddenDocumentFEBase_System_String_VM_API_Pre_Obj_VM_Managed_DAFUL_GearTrain_enSBContactType_"></a> AddSlidingBearingToRBEInFEEntity\(HiddenDocumentFEBase, string, Obj, enSBContactType\)

Add sliding bearing to rbe in FE entity.

```csharp
[MatchTypeObj(new object[] { "connectable", typeof(IConnectable) })]
public static void AddSlidingBearingToRBEInFEEntity(this HiddenDocumentFEBase document, string slidingBearingName, Obj connectable, enSBContactType contact = enSBContactType.OUTER_FIX)
```

#### Parameters

`document` [HiddenDocumentFEBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentFEBase.cs)

The document to add sliding bearing.

`slidingBearingName` string

The sliding bearing name.

`connectable` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

`contact` enSBContactType

The contact type. The default value is outer fix.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'slidingBearingName' or 'connectable' arguments are empty.

 ArgumentNullException

Will be thrown if type of 'connectable' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_AddSlidingBearingToRBEInFEEntity_VM_Managed_DAFUL_GearTrain_HiddenDocumentFEBase_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Managed_DAFUL_GearTrain_enSBContactType_"></a> AddSlidingBearingToRBEInFEEntity\(HiddenDocumentFEBase, Obj, Obj, enSBContactType\)

Add sliding bearing to rbe in FE entity.

```csharp
[NotNullObj(new string[] { "slidingBearing", "connectable" })]
[MatchTypeObj(new object[] { "slidingBearing", typeof(SlidingBearing), "connectable", typeof(IConnectable) })]
public static void AddSlidingBearingToRBEInFEEntity(this HiddenDocumentFEBase document, Obj slidingBearing, Obj connectable, enSBContactType contact = enSBContactType.OUTER_FIX)
```

#### Parameters

`document` [HiddenDocumentFEBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentFEBase.cs)

The document to add sliding bearing.

`slidingBearing` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The sliding bearing. The type is <xref href="VM.Managed.DAFUL.GearTrain.SlidingBearing" data-throw-if-not-resolved="false"></xref>

`connectable` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

`contact` enSBContactType

The contact type. The default value is outer fix.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'slidingBearing' or 'connectable' arguments are empty.

 ArgumentException

Will be thrown if type of 'slidingBearing' is not <xref href="VM.Managed.DAFUL.GearTrain.SlidingBearing" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if type of 'connectable' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_AddSlidingBearingToShaftset_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_System_String_VM_Managed_DAFUL_GearTrain_enSBContactType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_API_Pre_GearTrain_AttachLocationType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__"></a> AddSlidingBearingToShaftset\(HiddenShaftSetDocument, string, enSBContactType, ExpressionValueVariable?, AttachLocationType, ExpressionValueVariable?\)

Add sliding bearing to shaftset.

```csharp
[NotNull(new string[] { "document" })]
[NotNullOrEmpty(new string[] { "slidingBearingName" })]
public static void AddSlidingBearingToShaftset(this HiddenShaftSetDocument document, string slidingBearingName, enSBContactType contact = enSBContactType.INNER_CONTACT, ExpressionValueVariable? offset = null, AttachLocationType location = AttachLocationType.Left, ExpressionValueVariable? startAngle = null)
```

#### Parameters

`document` [HiddenShaftSetDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenShaftSetDocument.cs)

The document to add sliding bearing.

`slidingBearingName` string

The sliding bearing name.

`contact` enSBContactType

The contact type. The default value is inner contact.

`offset` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The offset when attached to shaft. The default value is 0.0.

`location` [AttachLocationType](VM.API.Pre.GearTrain.AttachLocationType.md)

The location when attached to shaft. The default value is Left

`startAngle` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The start angle. The default value is 0.0.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'slidingBearingName' arguments are empty.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_AddSlidingBearingToShaftset_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_VM_API_Pre_Obj_VM_Managed_DAFUL_GearTrain_enSBContactType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_API_Pre_GearTrain_AttachLocationType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__"></a> AddSlidingBearingToShaftset\(HiddenShaftSetDocument, Obj, enSBContactType, ExpressionValueVariable?, AttachLocationType, ExpressionValueVariable?\)

Add sliding bearing to shaftset.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "slidingBearing" })]
[MatchTypeObj(new object[] { "slidingBearing", typeof(SlidingBearing) })]
public static void AddSlidingBearingToShaftset(this HiddenShaftSetDocument document, Obj slidingBearing, enSBContactType contact = enSBContactType.INNER_CONTACT, ExpressionValueVariable? offset = null, AttachLocationType location = AttachLocationType.Left, ExpressionValueVariable? startAngle = null)
```

#### Parameters

`document` [HiddenShaftSetDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenShaftSetDocument.cs)

The document to add sliding bearing.

`slidingBearing` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The sliding bearing. The type is <xref href="VM.Managed.DAFUL.GearTrain.SlidingBearing" data-throw-if-not-resolved="false"></xref>

`contact` enSBContactType

The contact type. The default value is inner contact.

`offset` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The offset when attached to shaft. The default value is 0.0.

`location` [AttachLocationType](VM.API.Pre.GearTrain.AttachLocationType.md)

The location when attached to shaft. The default value is Left

`startAngle` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The start angle. The default value is 0.0.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'slidingBearing' arguments are empty.

 ArgumentException

Will be thrown if type of 'slidingBearing' is not <xref href="VM.Managed.DAFUL.GearTrain.SlidingBearing" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_ComponentAnalysisInShaftSet_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_System_Boolean_"></a> ComponentAnalysisInShaftSet\(HiddenShaftSetDocument, bool\)

Component analysis In simple shaftset designer.

```csharp
[NotNull(new string[] { "document" })]
public static void ComponentAnalysisInShaftSet(this HiddenShaftSetDocument document, bool openPost = false)
```

#### Parameters

`document` [HiddenShaftSetDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenShaftSetDocument.cs)

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenShaftSetDocument" data-throw-if-not-resolved="false"></xref> for simulate. If null, the active document will be used.

`openPost` bool

The flag for whether opening post processor. The default value is false.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' argument is empty.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_ComponentAnalysisInShaftSet_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshBase_System_Boolean_"></a> ComponentAnalysisInShaftSet\(HiddenDocumentMeshBase, bool\)

Component analysis In simple shaftset designer.

```csharp
[NotNull(new string[] { "document" })]
public static void ComponentAnalysisInShaftSet(this HiddenDocumentMeshBase document, bool openPost = false)
```

#### Parameters

`document` [HiddenDocumentMeshBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentFEBase.cs)

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenShaftSetDocument" data-throw-if-not-resolved="false"></xref> for simulate. If null, the active document will be used.

`openPost` bool

The flag for whether opening post processor. The default value is false.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' argument is empty.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_CreateConceptCarrier_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_API_Pre_Obj_System_Nullable_VM_Vector__System_Nullable_VM_Vector__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_API_Pre_GearTrain_PinionInstallMethodType_System_Nullable_VM_API_Pre_Obj__System_Nullable_System_Drawing_Color__"></a> CreateConceptCarrier\(GearTrainDocument, Obj, Vector?, Vector?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, PinionInstallMethodType, Obj?, Color?\)

Create concept carrier.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "gearSet" })]
[MatchTypeObj(new object[] { "gearSet", typeof(IGearSet) })]
public static void CreateConceptCarrier(this GearTrainDocument document, Obj gearSet, Vector? position = null, Vector? rotateAxis = null, ExpressionValueVariable? pinionShaftLength = null, ExpressionValueVariable? pinionShaftDiameter = null, ExpressionValueVariable? carrierThickness = null, PinionInstallMethodType pinionInstallMethodType = PinionInstallMethodType.Constraint, Obj? bearing = null, Color? color = null)
```

#### Parameters

`document` [GearTrainDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GearTrainDocument.cs)

The document to add concept carrier.

`gearSet` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The planetary gearset. The type is <xref href="VM.Managed.DAFUL.GearTrain.IGearSet" data-throw-if-not-resolved="false"></xref>.

`position` Vector?

The position. The default value is 0,0,0.

`rotateAxis` Vector?

The rotate axis. The default value is 0,1,0.

`pinionShaftLength` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The pinion shaft length. The default value is 100.

`pinionShaftDiameter` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The pinion shaft diameter. The default value is 20.

`carrierThickness` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The carrier thickness. The default value is 3.

`pinionInstallMethodType` [PinionInstallMethodType](VM.API.Pre.GearTrain.PinionInstallMethodType.md)

The pinion install method type. The default value is Constraint.

`bearing` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)?

The bearing when 'pinionInstallMethodType' is selected as bearing. The default value is null.
            The type is <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref>.

`color` Color?

The color of the concept carrier.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'gearSet' arguments are empty.

 ArgumentException

Will be thrown if 'rotateAxis' is not null and the magnitude of 'rotateAxis' is 0.

 ArgumentException

Will be thrown if 'pinionInstallMethodType' is Bearing and the 'bearing' is null.

 ArgumentException

Will be thrown if 'gearSet' is not planetary.

 ArgumentException

Will be thrown if type of 'gearSet' is not IGearSet gearSet.

 ArgumentException

Will be thrown if type of 'bearing' is not <xref href="VM.Managed.DAFUL.GearTrain.Bearing" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_CreateEFShaftset_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_"></a> CreateEFShaftset\(GearTrainDocument, string\)

Create <xref href="VM.Managed.DAFUL.GearTrain.ShaftSetMeshFree" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateEFShaftset(this GearTrainDocument document, string shaftName = "")
```

#### Parameters

`document` [GearTrainDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GearTrainDocument.cs)

The document to create the EF shaft set.

`shaftName` string

The name of the EF shaft set. If empty, default name starts with 'ShaftSet_' will be generated and used.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.GearTrain.ShaftSetMeshFree" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' argument is empty.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_CreateFEShaftset_VM_Managed_DAFUL_GearTrain_GearTrainDocument_System_String_"></a> CreateFEShaftset\(GearTrainDocument, string\)

Create <xref href="VM.Managed.DAFUL.GearTrain.ShaftSetFE" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateFEShaftset(this GearTrainDocument document, string shaftName = "")
```

#### Parameters

`document` [GearTrainDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GearTrainDocument.cs)

The document to create the FE shaft set.

`shaftName` string

The name of the FE shaft set. If empty, default name starts with 'ShaftSet_' will be generated and used.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.GearTrain.ShaftSetFE" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' argument is empty.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_CreateMeasurePointToShaftset_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_Managed_DAFUL_GearTrain_PointEntityOnShaftSet_ReferenceType_"></a> CreateMeasurePointToShaftset\(HiddenShaftSetDocument, string, ExpressionValueVariable?, ReferenceType\)

Create measure point in simple shaftset <xref href="VM.Managed.DAFUL.GearTrain.MeasurePoint" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateMeasurePointToShaftset(this HiddenShaftSetDocument document, string measurePointName = "", ExpressionValueVariable? offset = null, PointEntityOnShaftSet.ReferenceType reference = ReferenceType.Start)
```

#### Parameters

`document` [HiddenShaftSetDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenShaftSetDocument.cs)

The document to create measure point.

`measurePointName` string

The name of the measure point. If empty, default name starts with 'MeasurePt_' will be generated and used.

`offset` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The offset when add to shaft. The default value is 0.0.

`reference` [PointEntityOnShaftSet](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/PointEntityOnShaftSet.cs).[ReferenceType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/PointEntityOnShaftSet.cs)

The reference type. The default value is Start

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.GearTrain.MeasurePoint" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' argument is empty.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_CreatePointLoadToRBE_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshBase_VM_API_Pre_Obj_VM_Vector_System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__"></a> CreatePointLoadToRBE\(HiddenDocumentMeshBase, Obj, Vector, string, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?\)

Create point load in FE/EF shaftset <xref href="VM.Managed.DAFUL.GearTrain.PointLoadOnRBE" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "connectable" })]
[NotZeroMagnitude(new string[] { "direction" })]
[MatchTypeObj(new object[] { "connectable", typeof(IConnectable) })]
public static Obj CreatePointLoadToRBE(this HiddenDocumentMeshBase document, Obj connectable, Vector direction, string pointLoadName = "", ExpressionValueVariable? forceX = null, ExpressionValueVariable? forceY = null, ExpressionValueVariable? forceZ = null, ExpressionValueVariable? torqueX = null, ExpressionValueVariable? torqueY = null)
```

#### Parameters

`document` [HiddenDocumentMeshBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentFEBase.cs)

The document to create point load.

`connectable` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

`direction` Vector

The z-axis.

`pointLoadName` string

The name of the point load. If empty, default name starts with 'PointLoad_' will be generated and used.

`forceX` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The x-axis force. The default value is 10.0

`forceY` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The y-axis force. The default value is 10.0

`forceZ` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The z-axis force. The default value is 10.0

`torqueX` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The x-axis torque. The default value is 10.0

`torqueY` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The y-axis torque. The default value is 10.0

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.GearTrain.PointLoadOnRBE" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'connectable' argumenta are empty.

 ArgumentException

Will be thrown if magnitude of 'direction' is zero.

 ArgumentException

Will be thrown if type of 'connectable' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_CreatePointLoadToShaftset_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_Managed_DAFUL_GearTrain_PointEntityOnShaftSet_ReferenceType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__"></a> CreatePointLoadToShaftset\(HiddenShaftSetDocument, string, ExpressionValueVariable?, ReferenceType, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?\)

Create point load in simple shaftset <xref href="VM.Managed.DAFUL.GearTrain.PointLoad" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreatePointLoadToShaftset(this HiddenShaftSetDocument document, string pointLoadName = "", ExpressionValueVariable? offset = null, PointEntityOnShaftSet.ReferenceType reference = ReferenceType.Start, ExpressionValueVariable? width = null, ExpressionValueVariable? forceX = null, ExpressionValueVariable? forceY = null, ExpressionValueVariable? forceZ = null, ExpressionValueVariable? torqueX = null, ExpressionValueVariable? torqueY = null)
```

#### Parameters

`document` [HiddenShaftSetDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenShaftSetDocument.cs)

The document to create point load.

`pointLoadName` string

The name of the point load. If empty, default name starts with 'PointLoad_' will be generated and used.

`offset` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The offset when add to shaft. The default value is 0.0.

`reference` [PointEntityOnShaftSet](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/PointEntityOnShaftSet.cs).[ReferenceType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/PointEntityOnShaftSet.cs)

The reference type. The default value is Start

`width` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The width when add to shaft. The default value is 1.0

`forceX` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The x-axis force. The default value is 10.0

`forceY` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The y-axis force. The default value is 10.0

`forceZ` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The z-axis force. The default value is 10.0

`torqueX` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The x-axis torque. The default value is 10.0

`torqueY` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The y-axis torque. The default value is 10.0

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.GearTrain.PointLoad" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' argument is empty.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_CreatePowerLoadToRBE_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshBase_VM_API_Pre_Obj_VM_Vector_System_String_VM_Managed_DAFUL_GearTrain_PowerLoad_PowerLoadType_"></a> CreatePowerLoadToRBE\(HiddenDocumentMeshBase, Obj, Vector, string, PowerLoadType\)

Create power load in FE/EF shaftset <xref href="VM.Managed.DAFUL.GearTrain.PowerLoadOnRBE" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "connectable" })]
[NotZeroMagnitude(new string[] { "direction" })]
[MatchTypeObj(new object[] { "connectable", typeof(IConnectable) })]
public static Obj CreatePowerLoadToRBE(this HiddenDocumentMeshBase document, Obj connectable, Vector direction, string powerLoadName = "", PowerLoad.PowerLoadType role = PowerLoadType.Input)
```

#### Parameters

`document` [HiddenDocumentMeshBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentFEBase.cs)

The document to create power load.

`connectable` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

`direction` Vector

The z-axis.

`powerLoadName` string

The name of the power load. If empty, default name starts with 'PowerLoad_' will be generated and used.

`role` [PowerLoad](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/PowerLoad.cs).[PowerLoadType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/PowerLoad.cs)

The role type. The default value is Input.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.GearTrain.PowerLoadOnRBE" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' argument is empty.

 ArgumentException

Will be thrown if 'document' is FE/EF housing.

 ArgumentException

Will be thrown if magnitude of 'direction' is zero.

 ArgumentException

Will be thrown if type of 'connectable' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_CreatePowerloadToShaftset_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_Managed_DAFUL_GearTrain_PointEntityOnShaftSet_ReferenceType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_Managed_DAFUL_GearTrain_PowerLoad_PowerLoadType_"></a> CreatePowerloadToShaftset\(HiddenShaftSetDocument, string, ExpressionValueVariable?, ReferenceType, ExpressionValueVariable?, PowerLoadType\)

Create power load in simple shaftset <xref href="VM.Managed.DAFUL.GearTrain.PowerLoad" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreatePowerloadToShaftset(this HiddenShaftSetDocument document, string powerLoadName = "", ExpressionValueVariable? offset = null, PointEntityOnShaftSet.ReferenceType reference = ReferenceType.Start, ExpressionValueVariable? width = null, PowerLoad.PowerLoadType role = PowerLoadType.Input)
```

#### Parameters

`document` [HiddenShaftSetDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenShaftSetDocument.cs)

The document to create power load.

`powerLoadName` string

The name of the power load. If empty, default name starts with 'PowerLoad_' will be generated and used.

`offset` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The offset when add to shaft. The default value is 0.0.

`reference` [PointEntityOnShaftSet](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/PointEntityOnShaftSet.cs).[ReferenceType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/PointEntityOnShaftSet.cs)

The reference type. The default value is Start

`width` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The width when add to shaft. The default value is 1.0

`role` [PowerLoad](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/PowerLoad.cs).[PowerLoadType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/PowerLoad.cs)

The role type. The default value is Input.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.GearTrain.PowerLoad" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' argument is empty.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_CreateSimpleShaftset_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_Vector_VM_Vector_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_System_String_System_Int32_System_Nullable_System_Drawing_Color__"></a> CreateSimpleShaftset\(GearTrainDocument, Vector, Vector, ExpressionValueVariable, ExpressionValueVariable, string, int, Color?\)

Create <xref href="VM.Managed.DAFUL.GearTrain.ShaftSet" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotZeroMagnitude(new string[] { "rotateAxis" })]
[GreaterThanZero(new string[] { "length", "diameter", "numSection" })]
public static Obj CreateSimpleShaftset(this GearTrainDocument document, Vector position, Vector rotateAxis, ExpressionValueVariable length, ExpressionValueVariable diameter, string shaftName = "", int numSection = 3, Color? color = null)
```

#### Parameters

`document` [GearTrainDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GearTrainDocument.cs)

The document to create the simple shaft set.

`position` Vector

The position

`rotateAxis` Vector

The rotate axis.

`length` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The length of the simple shaft set

`diameter` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The diameter of the simple shaft set

`shaftName` string

The name of the simple shaft set. If empty, default name starts with 'ShaftSet_' will be generated and used.

`numSection` int

The number of section of the simple shaft set. The default value is 3.

`color` Color?

The color of the simple shaft set.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.GearTrain.ShaftSet" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'rotateAxis' arguments are empty.

 ArgumentException

Will be thrown if the magnitude of 'rotateAxis' is 0.

 ArgumentOutOfRangeException

Will be thrown if 'length' or 'diameter' or 'numSection' value equal to or less than 0.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_CreateSimpleShaftset_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_Vector_"></a> CreateSimpleShaftset\(GearTrainDocument, Vector\)

Create <xref href="VM.Managed.DAFUL.GearTrain.ShaftSet" data-throw-if-not-resolved="false"></xref>.

```csharp
public static Obj CreateSimpleShaftset(this GearTrainDocument document, Vector position)
```

#### Parameters

`document` [GearTrainDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GearTrainDocument.cs)

The document to create the simple shaft set.

`position` Vector

The position

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.GearTrain.ShaftSet" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' argument is empty.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_CreateSimpleShaftset_VM_Managed_DAFUL_GearTrain_GearTrainDocument_"></a> CreateSimpleShaftset\(GearTrainDocument\)

Create <xref href="VM.Managed.DAFUL.GearTrain.ShaftSet" data-throw-if-not-resolved="false"></xref>.

```csharp
public static Obj CreateSimpleShaftset(this GearTrainDocument document)
```

#### Parameters

`document` [GearTrainDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GearTrainDocument.cs)

The document to create the simple shaft set.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.GearTrain.ShaftSet" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' argument is empty.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_CreateUnbalanceMassToRBE_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshBase_VM_API_Pre_Obj_VM_Vector_System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__"></a> CreateUnbalanceMassToRBE\(HiddenDocumentMeshBase, Obj, Vector, string, ExpressionValueVariable?, ExpressionValueVariable?\)

Create unbalance mass in FE/EF shaftset <xref href="VM.Managed.DAFUL.GearTrain.UnbalanceMassOnRBE" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "connectable" })]
[NotZeroMagnitude(new string[] { "direction" })]
[MatchTypeObj(new object[] { "connectable", typeof(IConnectable) })]
public static Obj CreateUnbalanceMassToRBE(this HiddenDocumentMeshBase document, Obj connectable, Vector direction, string unbalanceMassName = "", ExpressionValueVariable? mass = null, ExpressionValueVariable? momentArm = null)
```

#### Parameters

`document` [HiddenDocumentMeshBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentFEBase.cs)

The document to create unbalance mass.

`connectable` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The rbe. The type is <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

`direction` Vector

The z-axis.

`unbalanceMassName` string

The name of the unbalance mass. If empty, default name starts with 'UnbalanceMass_' will be generated and used.

`mass` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The mass. The default value is 1.0

`momentArm` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The moment arm. The default value is 0.0

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.GearTrain.UnbalanceMassOnRBE" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'connectable' argumenta are empty.

 ArgumentException

Will be thrown if magnitude of 'direction' is zero.

 ArgumentException

Will be thrown if type of 'connectable' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_CreateUnbalanceMassToShaftset_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__VM_Managed_DAFUL_GearTrain_PointEntityOnShaftSet_ReferenceType_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__"></a> CreateUnbalanceMassToShaftset\(HiddenShaftSetDocument, string, ExpressionValueVariable?, ReferenceType, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?\)

Create unbalance mass in simple shaftset <xref href="VM.Managed.DAFUL.GearTrain.UnbalanceMass" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateUnbalanceMassToShaftset(this HiddenShaftSetDocument document, string unbalanceMassName = "", ExpressionValueVariable? offset = null, PointEntityOnShaftSet.ReferenceType reference = ReferenceType.Start, ExpressionValueVariable? width = null, ExpressionValueVariable? mass = null, ExpressionValueVariable? momentArm = null)
```

#### Parameters

`document` [HiddenShaftSetDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenShaftSetDocument.cs)

The document to create unbalance mass.

`unbalanceMassName` string

The name of the unbalance mass. If empty, default name starts with 'UnbalanceMass_' will be generated and used.

`offset` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The offset when add to shaft. The default value is 0.0.

`reference` [PointEntityOnShaftSet](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/PointEntityOnShaftSet.cs).[ReferenceType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/PointEntityOnShaftSet.cs)

The reference type. The default value is Start

`width` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The width when add to shaft. The default value is 1.0

`mass` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The mass. The default value is 1.0

`momentArm` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The moment arm. The default value is 0.0

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.GearTrain.UnbalanceMass" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' argument is empty.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_ImportMeshIntoFEEntity_VM_Managed_DAFUL_GearTrain_HiddenDocumentFEBase_VM_TMatrix_System_String_System_Nullable_System_Drawing_Color__System_String_System_Boolean_VM_API_Pre_LengthUnitType_VM_API_Pre_MassUnitType_VM_API_Pre_TimeUnitType_System_String_"></a> ImportMeshIntoFEEntity\(HiddenDocumentFEBase, TMatrix, string, Color?, string, bool, LengthUnitType, MassUnitType, TimeUnitType, string\)

Import mesh into FE Entity.

```csharp
[NotNull(new string[] { "document" })]
[ExistFile(new string[] { "feDataFilePath" })]
public static void ImportMeshIntoFEEntity(this HiddenDocumentFEBase document, TMatrix transform, string feDataFilePath, Color? color = null, string modalDataFilePath = "", bool useUnit = false, LengthUnitType lengthUnit = LengthUnitType.MM, MassUnitType massUnit = MassUnitType.KG, TimeUnitType timeUnit = TimeUnitType.SEC, string meshName = "")
```

#### Parameters

`document` [HiddenDocumentFEBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentFEBase.cs)

The document to import mesh file.

`transform` TMatrix

The transformation matrix for a nodal body.

`feDataFilePath` string

The fe data file path.

`color` Color?

The color of the nodal body.

`modalDataFilePath` string

The modal data file path.

`useUnit` bool

The unit flag. The default value is false

`lengthUnit` LengthUnitType

The length unit. The default value is mm.

`massUnit` MassUnitType

The mass unit. The default value is kg.

`timeUnit` TimeUnitType

The time unit. The default value is sec.

`meshName` string

The mesh file name.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' arguments are empty.

 FileNotFoundException

Will be thrown if 'feDataFilePath' does not exist.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_ImportPartIntoEFEntity_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshFreeBase_VM_TMatrix_System_String_VM_API_Pre_CADImportResultType_VM_Managed_Document3D_CadImportUnitType_System_Boolean_VM_Managed_Document3D_CadImportColorType_System_Nullable_System_Drawing_Color__System_String_"></a> ImportPartIntoEFEntity\(HiddenDocumentMeshFreeBase, TMatrix, string, CADImportResultType, CadImportUnitType, bool, CadImportColorType, Color?, string\)

Import part into EF Entity.

```csharp
[NotNull(new string[] { "document", "transform" })]
[ExistFile(new string[] { "cadFilePath" })]
public static void ImportPartIntoEFEntity(this HiddenDocumentMeshFreeBase document, TMatrix transform, string cadFilePath, CADImportResultType cadImportResult = CADImportResultType.Default, Document3D.CadImportUnitType cadImportUnit = CadImportUnitType.Auto, bool healing = true, Document3D.CadImportColorType cadImportColor = CadImportColorType.Default, Color? color = null, string partName = "")
```

#### Parameters

`document` [HiddenDocumentMeshFreeBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentMeshFreeBase.cs)

The document to import part file.

`transform` TMatrix

The transformation matrix for a assembled body.

`cadFilePath` string

The cad data file path.

`cadImportResult` CADImportResultType

The cad import result type. The default value is Default.

`cadImportUnit` Document3D.CadImportUnitType

The cad import unit type. The default value is Auto.

`healing` bool

The healing flag. The default value is true.

`cadImportColor` Document3D.CadImportColorType

The cad import color. The default value is Default.

`color` Color?

The color of the assembled body.

`partName` string

The part file name.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' arguments are empty.

 FileNotFoundException

Will be thrown if 'cadFilePath' does not exist.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_SplitSectionInSimpleShaftset_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_VM_API_Pre_Obj_"></a> SplitSectionInSimpleShaftset\(HiddenShaftSetDocument, Obj\)

Split section in simple shaftset.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "section" })]
[MatchTypeObj(new object[] { "section", typeof(Section) })]
public static void SplitSectionInSimpleShaftset(this HiddenShaftSetDocument document, Obj section)
```

#### Parameters

`document` [HiddenShaftSetDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenShaftSetDocument.cs)

The document to add section.

`section` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The section to be splitted. The type is CAD.Section.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'section' arguments are empty.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_SplitSectionInSimpleShaftset_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_System_Int32_"></a> SplitSectionInSimpleShaftset\(HiddenShaftSetDocument, int\)

Split section in simple shaftset.

```csharp
[NotNull(new string[] { "document" })]
[GreaterThanOrEqualToZero(new string[] { "sectionIndex" })]
public static void SplitSectionInSimpleShaftset(this HiddenShaftSetDocument document, int sectionIndex)
```

#### Parameters

`document` [HiddenShaftSetDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenShaftSetDocument.cs)

The document to add section.

`sectionIndex` int

The section index. The value is zero base.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'section' arguments are empty.

 ArgumentOutOfRangeException

Will be thrown if 'sectionIndex' is less than zero or greater than length of section -1.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_UpdatePointEntity_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_VM_API_Pre_Obj_"></a> UpdatePointEntity\(HiddenShaftSetDocument, Obj\)

Update point entity in shaftset designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "pointEntityOnShaftSet" })]
[MatchTypeObj(new object[] { "pointEntityOnShaftSet", typeof(PointEntityOnShaftSet) })]
public static void UpdatePointEntity(this HiddenShaftSetDocument document, Obj pointEntityOnShaftSet)
```

#### Parameters

`document` [HiddenShaftSetDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenShaftSetDocument.cs)

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenShaftSetDocument" data-throw-if-not-resolved="false"></xref> to exist point entity.

`pointEntityOnShaftSet` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The point entity to exist on simple shaftset. The type is <xref href="VM.Managed.DAFUL.GearTrain.PointEntityOnShaftSet" data-throw-if-not-resolved="false"></xref>.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' 'pointEntityOnShaftSet' arguments are empty.

 ArgumentException

Will be thrown if type of 'pointEntityOnShaftSet' is not <xref href="VM.Managed.DAFUL.GearTrain.PointEntityOnShaftSet" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_UpdatePointEntityOnRBE_VM_Managed_DAFUL_GearTrain_HiddenDocumentMeshBase_VM_API_Pre_Obj_"></a> UpdatePointEntityOnRBE\(HiddenDocumentMeshBase, Obj\)

Update point entity in FE/EF shaftset/housing designer.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "pointEntityOnRBE" })]
[MatchTypeObj(new object[] { "pointEntityOnRBE", typeof(PointEntityOnRBE) })]
public static void UpdatePointEntityOnRBE(this HiddenDocumentMeshBase document, Obj pointEntityOnRBE)
```

#### Parameters

`document` [HiddenDocumentMeshBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenDocumentFEBase.cs)

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenDocumentMeshBase" data-throw-if-not-resolved="false"></xref> to exist point entity.

`pointEntityOnRBE` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The point entity to exist on RBE. The type is <xref href="VM.Managed.DAFUL.GearTrain.PointEntityOnRBE" data-throw-if-not-resolved="false"></xref>.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' 'pointEntityOnRBE' arguments are empty.

 ArgumentException

Will be thrown if type of 'pointEntityOnRBE' is not <xref href="VM.Managed.DAFUL.GearTrain.PointEntityOnRBE" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_ShaftSetAPI_UpdateShaftSet_VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_"></a> UpdateShaftSet\(HiddenShaftSetDocument\)

Update simple shaftset in shaftset designer.

```csharp
[NotNull(new string[] { "document" })]
public static void UpdateShaftSet(this HiddenShaftSetDocument document)
```

#### Parameters

`document` [HiddenShaftSetDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/HiddenShaftSetDocument.cs)

The <xref href="VM.Managed.DAFUL.GearTrain.HiddenShaftSetDocument" data-throw-if-not-resolved="false"></xref> to exist EF shaftset.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' argument is empty.

