#  Class ChainedSystemAPI

Namespace: [VM.API.Pre.Links](VM.API.Pre.Links.md)  
Assembly: VM.API.Pre.Links.dll  

This class implements APIs for chained system.

```csharp
public static class ChainedSystemAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ChainedSystemAPI](VM.API.Pre.Links.ChainedSystemAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_Links_ChainedSystemAPI_AddObjectToActiveDocument_VM_API_Pre_Obj_System_Int32_System_Int32_System_Collections_Generic_IEnumerable_System_String__System_Collections_Generic_IEnumerable_VM_TMatrix__System_Collections_Generic_IEnumerable_VM_Managed_Document3D__System_Boolean_"></a> AddObjectToActiveDocument\(Obj, int, int, IEnumerable<string\>, IEnumerable<TMatrix\>, IEnumerable<Document3D\>, bool\)

Add object to active document.

```csharp
[NotNullObj(new string[] { "chainedPlacing" })]
[NotNull(new string[] { "preFixed", "transforms", "segmentDocuments" })]
[MatchTypeObj(new object[] { "chainedPlacing", typeof(ChainedPlacing) })]
public static IEnumerable<Obj> AddObjectToActiveDocument(this Obj chainedPlacing, int numberOfSegment, int numberOfSegmentData, IEnumerable<string> preFixed, IEnumerable<TMatrix> transforms, IEnumerable<Document3D> segmentDocuments, bool isCreate)
```

#### Parameters

`chainedPlacing` Obj

The chained placing to add object.

`numberOfSegment` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of segment.

`numberOfSegmentData` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of segment data.

`preFixed` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The pre-fixed names. The length is 'numberOfSegmentData'.

`transforms` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<TMatrix\>

The segment transforms. The length is 'numberOfSegment'.

`segmentDocuments` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Document3D\>

The segment data documents. The length is 'numberOfSegmentData'.

`isCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The create flag. If operation is modify state, You can put the value in 'false'.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Obj\>

The new segment list

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'chainedPlacing' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if type of 'chainedPlacing' is not <xref href="VM.Managed.DAFUL.Chained.ChainedPlacing" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if type of 'preFixed', 'transforms', 'segmentDocuments' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'numberOfSegmentData' value is greater than 'numberOfSegment' value.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the length of 'preFixed' is not equal 'numberOfSegmentData' value.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the length of 'segmentDocuments' is not equal 'numberOfSegmentData' value.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the length of 'transforms' is not equal 'numberOfSegment' value.

### <a id="VM_API_Pre_Links_ChainedSystemAPI_ChangeObjectLayer_VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_Collections_Generic_IEnumerable_System_Boolean__"></a> ChangeObjectLayer\(Obj, IEnumerable<Obj\>, IEnumerable<bool\>\)

Change object layer.

```csharp
[NotNullObj(new string[] { "chainedPlacing" })]
[NotNull(new string[] { "visibleObjects", "visibleStates" })]
[MatchTypeObj(new object[] { "chainedPlacing", typeof(ChainedPlacing) })]
public static void ChangeObjectLayer(this Obj chainedPlacing, IEnumerable<Obj> visibleObjects, IEnumerable<bool> visibleStates)
```

#### Parameters

`chainedPlacing` Obj

The chained placing to change object.

`visibleObjects` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Obj\>

The objects to be changed.

`visibleStates` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

The vislble flags.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'chainedPlacing' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if type of 'chainedPlacing' is not <xref href="VM.Managed.DAFUL.Chained.ChainedPlacing" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if type of 'visibleObjects', 'visibleStates' argument is empty.

### <a id="VM_API_Pre_Links_ChainedSystemAPI_CreateCenter_VM_Managed_DAFUL_Chained_DocumentChainedPath_System_String_System_Nullable_System_Drawing_Color__System_Boolean_"></a> CreateCenter\(DocumentChainedPath, string, Color?, bool\)

Create center roller <xref href="VM.Managed.DAFUL.Roller.SolidBodyRoller" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Roller.BuilderRollerCenterFlangeSimple" data-throw-if-not-resolved="false"></xref> builder.

```csharp
public static Obj CreateCenter(this DocumentChainedPath document, string bodyName = "", Color? color = null, bool isInterface = false)
```

#### Parameters

`document` DocumentChainedPath

The document to create the center roller solid body.

`bodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.Roller.SolidBodyRoller" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BD_' will be generated and used.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

`isInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

'true' if it is interface body. Otherwise, 'false'.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Roller.SolidBodyRoller" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

### <a id="VM_API_Pre_Links_ChainedSystemAPI_CreateCenter_VM_Managed_DAFUL_Chained_PartDocumentChainedPath_System_Nullable_System_Drawing_Color__"></a> CreateCenter\(PartDocumentChainedPath, Color?\)

Create center roller <xref href="VM.Managed.CAD.Roller.BodyRoller" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Roller.BuilderRollerCenterFlangeSimple" data-throw-if-not-resolved="false"></xref> builder in part.

```csharp
public static Obj CreateCenter(this PartDocumentChainedPath document, Color? color = null)
```

#### Parameters

`document` PartDocumentChainedPath

The document to create the center roller body.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

#### Returns

 Obj

The new <xref href="VM.Managed.CAD.Roller.BodyRoller" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

### <a id="VM_API_Pre_Links_ChainedSystemAPI_CreateChainedSystem_VM_Managed_DAFUL_SubSystemDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_String_"></a> CreateChainedSystem\(SubSystemDocument, IEnumerable<Obj\>, string\)

Create chained system <xref href="VM.Managed.DAFUL.Chained.ChainedPlacing" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document", "pathList" })]
public static Obj CreateChainedSystem(this SubSystemDocument document, IEnumerable<Obj> pathList, string name = "")
```

#### Parameters

`document` SubSystemDocument

The document to create the chained system.

`pathList` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Obj\>

The path list.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.Chained.ChainedPlacing" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'CPlacing_' will be generated and used.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Chained.ChainedPlacing" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' , 'pathList' are null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if item type of 'pathList' is not <xref href="VM.Managed.InstanceContainer" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_Links_ChainedSystemAPI_CreateDouble_VM_Managed_DAFUL_Chained_DocumentChainedPath_System_String_System_Nullable_System_Drawing_Color__System_Boolean_"></a> CreateDouble\(DocumentChainedPath, string, Color?, bool\)

Create double roller <xref href="VM.Managed.DAFUL.Roller.SolidBodyRoller" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Roller.BuilderRollerDoubleFlangeSimple" data-throw-if-not-resolved="false"></xref> builder.

```csharp
public static Obj CreateDouble(this DocumentChainedPath document, string bodyName = "", Color? color = null, bool isInterface = false)
```

#### Parameters

`document` DocumentChainedPath

The document to create the double roller solid body.

`bodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.Roller.SolidBodyRoller" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BD_' will be generated and used.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

`isInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

'true' if it is interface body. Otherwise, 'false'.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Roller.SolidBodyRoller" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

### <a id="VM_API_Pre_Links_ChainedSystemAPI_CreateDouble_VM_Managed_DAFUL_Chained_PartDocumentChainedPath_System_Nullable_System_Drawing_Color__"></a> CreateDouble\(PartDocumentChainedPath, Color?\)

Create double roller <xref href="VM.Managed.CAD.Roller.BodyRoller" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Roller.BuilderRollerDoubleFlangeSimple" data-throw-if-not-resolved="false"></xref> builder in part.

```csharp
public static Obj CreateDouble(this PartDocumentChainedPath document, Color? color = null)
```

#### Parameters

`document` PartDocumentChainedPath

The document to create the double roller body.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

#### Returns

 Obj

The new <xref href="VM.Managed.CAD.Roller.BodyRoller" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

### <a id="VM_API_Pre_Links_ChainedSystemAPI_CreateFlat_VM_Managed_DAFUL_Chained_DocumentChainedPath_System_String_System_Nullable_System_Drawing_Color__System_Boolean_"></a> CreateFlat\(DocumentChainedPath, string, Color?, bool\)

Create flat roller <xref href="VM.Managed.DAFUL.Roller.SolidBodyRoller" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Roller.BuilderRollerFlatSimple" data-throw-if-not-resolved="false"></xref> builder.

```csharp
public static Obj CreateFlat(this DocumentChainedPath document, string bodyName = "", Color? color = null, bool isInterface = false)
```

#### Parameters

`document` DocumentChainedPath

The document to create the flat roller solid body.

`bodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.Roller.SolidBodyRoller" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BD_' will be generated and used.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

`isInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

'true' if it is interface body. Otherwise, 'false'.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Roller.SolidBodyRoller" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

### <a id="VM_API_Pre_Links_ChainedSystemAPI_CreateFlat_VM_Managed_DAFUL_Chained_PartDocumentChainedPath_System_Nullable_System_Drawing_Color__"></a> CreateFlat\(PartDocumentChainedPath, Color?\)

Create flat roller <xref href="VM.Managed.CAD.Roller.BodyRoller" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Roller.BuilderRollerFlatSimple" data-throw-if-not-resolved="false"></xref> builder in part.

```csharp
public static Obj CreateFlat(this PartDocumentChainedPath document, Color? color = null)
```

#### Parameters

`document` PartDocumentChainedPath

The document to create the flat roller body.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

#### Returns

 Obj

The new <xref href="VM.Managed.CAD.Roller.BodyRoller" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

### <a id="VM_API_Pre_Links_ChainedSystemAPI_CreateGeneral_VM_Managed_DAFUL_Chained_DocumentChainedPath_System_String_System_Nullable_System_Drawing_Color__System_Boolean_"></a> CreateGeneral\(DocumentChainedPath, string, Color?, bool\)

Create general roller <xref href="VM.Managed.DAFUL.Roller.SolidBodyRoller" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Roller.BuilderRollerGeneralSimple" data-throw-if-not-resolved="false"></xref> builder.

```csharp
public static Obj CreateGeneral(this DocumentChainedPath document, string bodyName = "", Color? color = null, bool isInterface = false)
```

#### Parameters

`document` DocumentChainedPath

The document to create the general roller solid body.

`bodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.Roller.SolidBodyRoller" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BD_' will be generated and used.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

`isInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

'true' if it is interface body. Otherwise, 'false'.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Roller.SolidBodyRoller" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

### <a id="VM_API_Pre_Links_ChainedSystemAPI_CreateGeneral_VM_Managed_DAFUL_Chained_PartDocumentChainedPath_System_Nullable_System_Drawing_Color__"></a> CreateGeneral\(PartDocumentChainedPath, Color?\)

Create general roller <xref href="VM.Managed.CAD.Roller.BodyRoller" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Roller.BuilderRollerGeneralSimple" data-throw-if-not-resolved="false"></xref> builder in part.

```csharp
public static Obj CreateGeneral(this PartDocumentChainedPath document, Color? color = null)
```

#### Parameters

`document` PartDocumentChainedPath

The document to create the general roller body.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

#### Returns

 Obj

The new <xref href="VM.Managed.CAD.Roller.BodyRoller" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

### <a id="VM_API_Pre_Links_ChainedSystemAPI_CreateSingle_VM_Managed_DAFUL_Chained_DocumentChainedPath_System_String_System_Nullable_System_Drawing_Color__System_Boolean_"></a> CreateSingle\(DocumentChainedPath, string, Color?, bool\)

Create single roller <xref href="VM.Managed.DAFUL.Roller.SolidBodyRoller" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Roller.BuilderRollerSingleFlangeSimple" data-throw-if-not-resolved="false"></xref> builder.

```csharp
public static Obj CreateSingle(this DocumentChainedPath document, string bodyName = "", Color? color = null, bool isInterface = false)
```

#### Parameters

`document` DocumentChainedPath

The document to create the single roller solid body.

`bodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.Roller.SolidBodyRoller" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BD_' will be generated and used.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

`isInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

'true' if it is interface body. Otherwise, 'false'.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Roller.SolidBodyRoller" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

### <a id="VM_API_Pre_Links_ChainedSystemAPI_CreateSingle_VM_Managed_DAFUL_Chained_PartDocumentChainedPath_System_Nullable_System_Drawing_Color__"></a> CreateSingle\(PartDocumentChainedPath, Color?\)

Create single roller <xref href="VM.Managed.CAD.Roller.BodyRoller" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Roller.BuilderRollerSingleFlangeSimple" data-throw-if-not-resolved="false"></xref> builder in part.

```csharp
public static Obj CreateSingle(this PartDocumentChainedPath document, Color? color = null)
```

#### Parameters

`document` PartDocumentChainedPath

The document to create the single roller body.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

#### Returns

 Obj

The new <xref href="VM.Managed.CAD.Roller.BodyRoller" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

### <a id="VM_API_Pre_Links_ChainedSystemAPI_CreateSprocket_VM_Managed_DAFUL_Chained_DocumentChainedPath_System_String_System_Nullable_System_Drawing_Color__System_Boolean_"></a> CreateSprocket\(DocumentChainedPath, string, Color?, bool\)

Create sprocket <xref href="VM.Managed.DAFUL.Sprocket.SolidBodySprocket" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Sprocket.BuilderSingleSprocketSimple" data-throw-if-not-resolved="false"></xref> builder.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateSprocket(this DocumentChainedPath document, string bodyName = "", Color? color = null, bool isInterface = false)
```

#### Parameters

`document` DocumentChainedPath

The document to create the sprocket solid body.

`bodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.Sprocket.SolidBodySprocket" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BD_' will be generated and used.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

`isInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

'true' if it is interface body. Otherwise, 'false'.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Sprocket.SolidBodySprocket" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

### <a id="VM_API_Pre_Links_ChainedSystemAPI_CreateSprocket_VM_Managed_DAFUL_Chained_PartDocumentChainedPath_System_Nullable_System_Drawing_Color__"></a> CreateSprocket\(PartDocumentChainedPath, Color?\)

Create sprocket <xref href="VM.Managed.CAD.Sprocket.BodySprocket" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Sprocket.BuilderSingleSprocketSimple" data-throw-if-not-resolved="false"></xref> builder in part.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateSprocket(this PartDocumentChainedPath document, Color? color = null)
```

#### Parameters

`document` PartDocumentChainedPath

The document to create the sprocket body.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

#### Returns

 Obj

The new <xref href="VM.Managed.CAD.Sprocket.BodySprocket" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

### <a id="VM_API_Pre_Links_ChainedSystemAPI_DeleteObjectList_VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__"></a> DeleteObjectList\(Obj, IEnumerable<Obj\>\)

Add object to active document.

```csharp
[NotNullObj(new string[] { "chainedPlacing" })]
[NotNull(new string[] { "deletedObjects" })]
[MatchTypeObj(new object[] { "chainedPlacing", typeof(ChainedPlacing) })]
public static void DeleteObjectList(this Obj chainedPlacing, IEnumerable<Obj> deletedObjects)
```

#### Parameters

`chainedPlacing` Obj

The chained placing to delete object.

`deletedObjects` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Obj\>

The objects to be deleted.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'chainedPlacing' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if type of 'chainedPlacing' is not <xref href="VM.Managed.DAFUL.Chained.ChainedPlacing" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if type of 'deletedObjects' argument is empty.

