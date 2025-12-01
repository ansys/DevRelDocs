# Class TrackedSystemAPI
<a id="VM_API_Pre_Links_TrackedSystemAPI"></a>

Namespace: [VM.API.Pre.Links](VM.API.Pre.Links.md)  
Assembly: VM.API.Pre.Links.dll  

This class implements APIs for chained system.

```csharp
public static class TrackedSystemAPI
```

#### Inheritance

object ← 
[TrackedSystemAPI](VM.API.Pre.Links.TrackedSystemAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_Links_TrackedSystemAPI_AddPathObjectToDocument_VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_Collections_Generic_IEnumerable_VM_Managed_Document3D__"></a> AddPathObjectToDocument\(Obj, IEnumerable<Obj\>, IEnumerable<Document3D\>\)

Add path to active document.

```csharp
[NotNullObj(new string[] { "trackPlacing" })]
[MatchTypeObj(new object[] { "trackPlacing", typeof(TrackPlacing) })]
[NotNull(new string[] { "paths", "pathDocuments" })]
public static IEnumerable<Obj> AddPathObjectToDocument(this Obj trackPlacing, IEnumerable<Obj> paths, IEnumerable<Document3D> pathDocuments)
```

#### Parameters

`trackPlacing` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The track placing to add object.

`paths` IEnumerable<[Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)\>

The paths.

`pathDocuments` IEnumerable<Document3D\>

The path data documents.

#### Returns

 IEnumerable<[Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)\>

The new path list

#### Exceptions

 ArgumentNullException

Will be thrown if 'trackPlacing' arguments are empty.

 ArgumentException

Will be thrown if type of 'trackPlacing' is not <xref href="VM.Managed.DAFUL.Track.TrackPlacing" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if 'paths', 'pathDocuments' arguments are empty.

 ArgumentException

Will be thrown if length of 'paths' and length of 'pathDocuments' are not equal.

### <a id="VM_API_Pre_Links_TrackedSystemAPI_CreateDouble_VM_Managed_DAFUL_Chained_DocumentChainedSegment_System_String_System_Nullable_System_Drawing_Color__System_Boolean_"></a> CreateDouble\(DocumentChainedSegment, string, Color?, bool\)

Create double shoe <xref href="VM.Managed.DAFUL.Track.SolidBodyShoe" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Track.BuilderShoeUserDefined" data-throw-if-not-resolved="false"></xref> builder.

```csharp
public static Obj CreateDouble(this DocumentChainedSegment document, string bodyName = "", Color? color = null, bool isInterface = false)
```

#### Parameters

`document` [DocumentChainedSegment](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDChainedBase/DocumentChainedSegment.cs)

The document to create the double shoe solid body.

`bodyName` string

The name of the <xref href="VM.Managed.DAFUL.Track.SolidBodyShoe" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BD_' will be generated and used.

`color` Color?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

`isInterface` bool

'true' if it is interface body. Otherwise, 'false'.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.Track.SolidBodyShoe" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' is null.

### <a id="VM_API_Pre_Links_TrackedSystemAPI_CreateDouble_VM_Managed_DAFUL_Chained_PartDocumentChainedSegment_System_Nullable_System_Drawing_Color__"></a> CreateDouble\(PartDocumentChainedSegment, Color?\)

Create double shoe <xref href="VM.Managed.CAD.Track.BodyShoe" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Track.BuilderShoeUserDefined" data-throw-if-not-resolved="false"></xref> builder in part.

```csharp
public static Obj CreateDouble(this PartDocumentChainedSegment document, Color? color = null)
```

#### Parameters

`document` [PartDocumentChainedSegment](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDChainedBase/PartDocumentChainedSegment.cs)

The document to create the double shoe body.

`color` Color?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.CAD.Track.BodyLink" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' is null.

### <a id="VM_API_Pre_Links_TrackedSystemAPI_CreateSimple_VM_Managed_DAFUL_Chained_DocumentChainedSegment_System_String_System_Nullable_System_Drawing_Color__System_Boolean_"></a> CreateSimple\(DocumentChainedSegment, string, Color?, bool\)

Create simple link <xref href="VM.Managed.DAFUL.Track.SolidBodyLink" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Track.BuilderLinkUserDefined" data-throw-if-not-resolved="false"></xref> builder.

```csharp
public static Obj CreateSimple(this DocumentChainedSegment document, string bodyName = "", Color? color = null, bool isInterface = false)
```

#### Parameters

`document` [DocumentChainedSegment](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDChainedBase/DocumentChainedSegment.cs)

The document to create the simple link solid body.

`bodyName` string

The name of the <xref href="VM.Managed.DAFUL.Track.SolidBodyLink" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BD_' will be generated and used.

`color` Color?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

`isInterface` bool

'true' if it is interface body. Otherwise, 'false'.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.Track.SolidBodyLink" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' is null.

### <a id="VM_API_Pre_Links_TrackedSystemAPI_CreateSimple_VM_Managed_DAFUL_Chained_PartDocumentChainedSegment_System_Nullable_System_Drawing_Color__"></a> CreateSimple\(PartDocumentChainedSegment, Color?\)

Create simple link <xref href="VM.Managed.CAD.Track.BodyLink" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Track.BuilderLinkUserDefined" data-throw-if-not-resolved="false"></xref> builder in part.

```csharp
public static Obj CreateSimple(this PartDocumentChainedSegment document, Color? color = null)
```

#### Parameters

`document` [PartDocumentChainedSegment](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDChainedBase/PartDocumentChainedSegment.cs)

The document to create the simple link body.

`color` Color?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.CAD.Track.BodyLink" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' is null.

### <a id="VM_API_Pre_Links_TrackedSystemAPI_CreateSingle_VM_Managed_DAFUL_Chained_DocumentChainedSegment_System_String_System_Nullable_System_Drawing_Color__System_Boolean_"></a> CreateSingle\(DocumentChainedSegment, string, Color?, bool\)

Create single shoe <xref href="VM.Managed.DAFUL.Track.SolidBodyShoe" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Track.BuilderShoeUserDefined" data-throw-if-not-resolved="false"></xref> builder.

```csharp
public static Obj CreateSingle(this DocumentChainedSegment document, string bodyName = "", Color? color = null, bool isInterface = false)
```

#### Parameters

`document` [DocumentChainedSegment](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDChainedBase/DocumentChainedSegment.cs)

The document to create the single shoe solid body.

`bodyName` string

The name of the <xref href="VM.Managed.DAFUL.Track.SolidBodyShoe" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BD_' will be generated and used.

`color` Color?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

`isInterface` bool

'true' if it is interface body. Otherwise, 'false'.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.Track.SolidBodyShoe" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' is null.

### <a id="VM_API_Pre_Links_TrackedSystemAPI_CreateSingle_VM_Managed_DAFUL_Chained_PartDocumentChainedSegment_System_Nullable_System_Drawing_Color__"></a> CreateSingle\(PartDocumentChainedSegment, Color?\)

Create single shoe <xref href="VM.Managed.CAD.Track.BodyShoe" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Track.BuilderShoeUserDefined" data-throw-if-not-resolved="false"></xref> builder in part.

```csharp
public static Obj CreateSingle(this PartDocumentChainedSegment document, Color? color = null)
```

#### Parameters

`document` [PartDocumentChainedSegment](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDChainedBase/PartDocumentChainedSegment.cs)

The document to create the single shoe body.

`color` Color?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.CAD.Track.BodyLink" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' is null.

### <a id="VM_API_Pre_Links_TrackedSystemAPI_CreateTrackedSystem_VM_Managed_DAFUL_SubSystemDocument_System_String_"></a> CreateTrackedSystem\(SubSystemDocument, string\)

Create tracked system <xref href="VM.Managed.DAFUL.Track.TrackPlacing" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateTrackedSystem(this SubSystemDocument document, string name = "")
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The document to create the tracked system.

`name` string

The name of the <xref href="VM.Managed.DAFUL.Track.TrackPlacing" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'TPlacing_' will be generated and used.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.Track.TrackPlacing" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' is null.

### <a id="VM_API_Pre_Links_TrackedSystemAPI_CreateTriple_VM_Managed_DAFUL_Chained_DocumentChainedSegment_System_String_System_Nullable_System_Drawing_Color__System_Boolean_"></a> CreateTriple\(DocumentChainedSegment, string, Color?, bool\)

Create triple shoe <xref href="VM.Managed.DAFUL.Track.SolidBodyShoe" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Track.BuilderShoeUserDefined" data-throw-if-not-resolved="false"></xref> builder.

```csharp
public static Obj CreateTriple(this DocumentChainedSegment document, string bodyName = "", Color? color = null, bool isInterface = false)
```

#### Parameters

`document` [DocumentChainedSegment](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDChainedBase/DocumentChainedSegment.cs)

The document to create the triple shoe solid body.

`bodyName` string

The name of the <xref href="VM.Managed.DAFUL.Track.SolidBodyShoe" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BD_' will be generated and used.

`color` Color?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

`isInterface` bool

'true' if it is interface body. Otherwise, 'false'.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.Track.SolidBodyShoe" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' is null.

### <a id="VM_API_Pre_Links_TrackedSystemAPI_CreateTriple_VM_Managed_DAFUL_Chained_PartDocumentChainedSegment_System_Nullable_System_Drawing_Color__"></a> CreateTriple\(PartDocumentChainedSegment, Color?\)

Create triple shoe <xref href="VM.Managed.CAD.Track.BodyShoe" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Track.BuilderShoeUserDefined" data-throw-if-not-resolved="false"></xref> builder in part.

```csharp
public static Obj CreateTriple(this PartDocumentChainedSegment document, Color? color = null)
```

#### Parameters

`document` [PartDocumentChainedSegment](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDChainedBase/PartDocumentChainedSegment.cs)

The document to create the triple shoe body.

`color` Color?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.CAD.Track.BodyLink" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' is null.

### <a id="VM_API_Pre_Links_TrackedSystemAPI_CreateUserDefined_VM_Managed_DAFUL_Chained_DocumentChainedSegment_System_String_System_Nullable_System_Drawing_Color__System_Boolean_"></a> CreateUserDefined\(DocumentChainedSegment, string, Color?, bool\)

Create user-defined shoe <xref href="VM.Managed.DAFUL.Track.SolidBodyShoe" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Track.BuilderShoeUserDefined" data-throw-if-not-resolved="false"></xref> builder.

```csharp
public static Obj CreateUserDefined(this DocumentChainedSegment document, string bodyName = "", Color? color = null, bool isInterface = false)
```

#### Parameters

`document` [DocumentChainedSegment](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDChainedBase/DocumentChainedSegment.cs)

The document to create the user-defined shoe solid body.

`bodyName` string

The name of the <xref href="VM.Managed.DAFUL.Track.SolidBodyShoe" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BD_' will be generated and used.

`color` Color?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

`isInterface` bool

'true' if it is interface body. Otherwise, 'false'.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.Track.SolidBodyShoe" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' is null.

### <a id="VM_API_Pre_Links_TrackedSystemAPI_CreateUserDefined_VM_Managed_DAFUL_Chained_PartDocumentChainedSegment_System_Nullable_System_Drawing_Color__"></a> CreateUserDefined\(PartDocumentChainedSegment, Color?\)

Create user-defined shoe <xref href="VM.Managed.CAD.Track.BodyShoe" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Track.BuilderShoeUserDefined" data-throw-if-not-resolved="false"></xref> builder in part.

```csharp
public static Obj CreateUserDefined(this PartDocumentChainedSegment document, Color? color = null)
```

#### Parameters

`document` [PartDocumentChainedSegment](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDChainedBase/PartDocumentChainedSegment.cs)

The document to create the user-defined shoe body.

`color` Color?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.CAD.Track.BodyLink" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' is null.

### <a id="VM_API_Pre_Links_TrackedSystemAPI_CreateVType_VM_Managed_DAFUL_Chained_DocumentChainedSegment_System_String_System_Nullable_System_Drawing_Color__System_Boolean_"></a> CreateVType\(DocumentChainedSegment, string, Color?, bool\)

Create V-type link <xref href="VM.Managed.DAFUL.Track.SolidBodyLink" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Track.BuilderLinkUserDefined" data-throw-if-not-resolved="false"></xref> builder.

```csharp
public static Obj CreateVType(this DocumentChainedSegment document, string bodyName = "", Color? color = null, bool isInterface = false)
```

#### Parameters

`document` [DocumentChainedSegment](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDChainedBase/DocumentChainedSegment.cs)

The document to create the V-type link solid body.

`bodyName` string

The name of the <xref href="VM.Managed.DAFUL.Track.SolidBodyLink" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BD_' will be generated and used.

`color` Color?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

`isInterface` bool

'true' if it is interface body. Otherwise, 'false'.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.Track.SolidBodyLink" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' is null.

### <a id="VM_API_Pre_Links_TrackedSystemAPI_CreateVType_VM_Managed_DAFUL_Chained_PartDocumentChainedSegment_System_Nullable_System_Drawing_Color__"></a> CreateVType\(PartDocumentChainedSegment, Color?\)

Create V-type link <xref href="VM.Managed.CAD.Track.BodyLink" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Track.BuilderLinkUserDefined" data-throw-if-not-resolved="false"></xref> builder in part.

```csharp
public static Obj CreateVType(this PartDocumentChainedSegment document, Color? color = null)
```

#### Parameters

`document` [PartDocumentChainedSegment](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDChainedBase/PartDocumentChainedSegment.cs)

The document to create the V-type link body.

`color` Color?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.CAD.Track.BodyLink" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' is null.

### <a id="VM_API_Pre_Links_TrackedSystemAPI_ReplaceDesignPosition_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Models_Pre_ExpressionValueVariable_VM_TMatrix_"></a> ReplaceDesignPosition\(Obj, Obj, ExpressionValueVariable, TMatrix\)

Replace design position.

```csharp
[NotNullObj(new string[] { "segmentBody", "designPoint" })]
[MatchTypeObj(new object[] { "designPoint", typeof(DesignPoint) })]
public static void ReplaceDesignPosition(this Obj segmentBody, Obj designPoint, ExpressionValueVariable value, TMatrix matT)
```

#### Parameters

`segmentBody` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The segment body.

`designPoint` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The design point to be replaced.

`value` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The value to be replaced with axis.

`matT` TMatrix

The transformation to be replaced.

#### Exceptions

 ArgumentNullException

Will be thrown if 'segmentBody','designPoint' arguments are empty.

 ArgumentException

Will be thrown if type of 'segmentBody' is not <xref href="VM.Managed.CAD.Track.BodyShoe" data-throw-if-not-resolved="false"></xref> or <xref href="VM.Managed.CAD.Track.BodyLink" data-throw-if-not-resolved="false"></xref> or <xref href="VM.Managed.DAFUL.Track.SolidBodyShoe" data-throw-if-not-resolved="false"></xref> or <xref href="VM.Managed.DAFUL.Track.SolidBodyLink" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if type of 'designPoint' is not <xref href="VM.Managed.DesignPoint" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_Links_TrackedSystemAPI_RestorePathToOriginPositionAndOrientation_VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_Collections_Generic_IEnumerable_VM_TMatrix__"></a> RestorePathToOriginPositionAndOrientation\(Obj, IEnumerable<Obj\>, IEnumerable<TMatrix\>\)

```csharp
[NotNullObj(new string[] { "trackPlacing" })]
[MatchTypeObj(new object[] { "trackPlacing", typeof(TrackPlacing) })]
[NotNull(new string[] { "paths", "transforms" })]
public static void RestorePathToOriginPositionAndOrientation(this Obj trackPlacing, IEnumerable<Obj> paths, IEnumerable<TMatrix> transforms)
```

#### Parameters

`trackPlacing` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

`paths` IEnumerable<[Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)\>

`transforms` IEnumerable<TMatrix\>

