# Class TrackedSystemAPI

Namespace: [VM.API.Pre.Links](VM.API.Pre.Links.md)  
Assembly: VM.API.Pre.Links.dll  

This class implements APIs for chained system.

```csharp
public static class TrackedSystemAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TrackedSystemAPI](VM.API.Pre.Links.TrackedSystemAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### AddPathObjectToDocument\(Obj, IEnumerable<Obj\>, IEnumerable<Document3D\>\)

Add path to active document.

```csharp
[NotNullObj(new string[] { "trackPlacing" })]
[MatchTypeObj(new object[] { "trackPlacing", typeof(TrackPlacing) })]
[NotNull(new string[] { "paths", "pathDocuments" })]
public static IEnumerable<Obj> AddPathObjectToDocument(this Obj trackPlacing, IEnumerable<Obj> paths, IEnumerable<Document3D> pathDocuments)
```

#### Parameters

`trackPlacing` Obj

The track placing to add object.

`paths` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Obj\>

The paths.

`pathDocuments` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Document3D\>

The path data documents.

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Obj\>

The new path list

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'trackPlacing' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if type of 'trackPlacing' is not <xref href="VM.Managed.DAFUL.Track.TrackPlacing" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'paths', 'pathDocuments' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if length of 'paths' and length of 'pathDocuments' are not equal.

### CreateDouble\(DocumentChainedSegment, string, Color?, bool\)

Create double shoe <xref href="VM.Managed.DAFUL.Track.SolidBodyShoe" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Track.BuilderShoeUserDefined" data-throw-if-not-resolved="false"></xref> builder.

```csharp
public static Obj CreateDouble(this DocumentChainedSegment document, string bodyName = "", Color? color = null, bool isInterface = false)
```

#### Parameters

`document` DocumentChainedSegment

The document to create the double shoe solid body.

`bodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.Track.SolidBodyShoe" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BD_' will be generated and used.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

`isInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

'true' if it is interface body. Otherwise, 'false'.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Track.SolidBodyShoe" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

### CreateDouble\(PartDocumentChainedSegment, Color?\)

Create double shoe <xref href="VM.Managed.CAD.Track.BodyShoe" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Track.BuilderShoeUserDefined" data-throw-if-not-resolved="false"></xref> builder in part.

```csharp
public static Obj CreateDouble(this PartDocumentChainedSegment document, Color? color = null)
```

#### Parameters

`document` PartDocumentChainedSegment

The document to create the double shoe body.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

#### Returns

 Obj

The new <xref href="VM.Managed.CAD.Track.BodyLink" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

### CreateSimple\(DocumentChainedSegment, string, Color?, bool\)

Create simple link <xref href="VM.Managed.DAFUL.Track.SolidBodyLink" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Track.BuilderLinkUserDefined" data-throw-if-not-resolved="false"></xref> builder.

```csharp
public static Obj CreateSimple(this DocumentChainedSegment document, string bodyName = "", Color? color = null, bool isInterface = false)
```

#### Parameters

`document` DocumentChainedSegment

The document to create the simple link solid body.

`bodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.Track.SolidBodyLink" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BD_' will be generated and used.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

`isInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

'true' if it is interface body. Otherwise, 'false'.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Track.SolidBodyLink" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

### CreateSimple\(PartDocumentChainedSegment, Color?\)

Create simple link <xref href="VM.Managed.CAD.Track.BodyLink" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Track.BuilderLinkUserDefined" data-throw-if-not-resolved="false"></xref> builder in part.

```csharp
public static Obj CreateSimple(this PartDocumentChainedSegment document, Color? color = null)
```

#### Parameters

`document` PartDocumentChainedSegment

The document to create the simple link body.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

#### Returns

 Obj

The new <xref href="VM.Managed.CAD.Track.BodyLink" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

### CreateSingle\(DocumentChainedSegment, string, Color?, bool\)

Create single shoe <xref href="VM.Managed.DAFUL.Track.SolidBodyShoe" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Track.BuilderShoeUserDefined" data-throw-if-not-resolved="false"></xref> builder.

```csharp
public static Obj CreateSingle(this DocumentChainedSegment document, string bodyName = "", Color? color = null, bool isInterface = false)
```

#### Parameters

`document` DocumentChainedSegment

The document to create the single shoe solid body.

`bodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.Track.SolidBodyShoe" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BD_' will be generated and used.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

`isInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

'true' if it is interface body. Otherwise, 'false'.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Track.SolidBodyShoe" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

### CreateSingle\(PartDocumentChainedSegment, Color?\)

Create single shoe <xref href="VM.Managed.CAD.Track.BodyShoe" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Track.BuilderShoeUserDefined" data-throw-if-not-resolved="false"></xref> builder in part.

```csharp
public static Obj CreateSingle(this PartDocumentChainedSegment document, Color? color = null)
```

#### Parameters

`document` PartDocumentChainedSegment

The document to create the single shoe body.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

#### Returns

 Obj

The new <xref href="VM.Managed.CAD.Track.BodyLink" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

### CreateTrackedSystem\(SubSystemDocument, string\)

Create tracked system <xref href="VM.Managed.DAFUL.Track.TrackPlacing" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
public static Obj CreateTrackedSystem(this SubSystemDocument document, string name = "")
```

#### Parameters

`document` SubSystemDocument

The document to create the tracked system.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.Track.TrackPlacing" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'TPlacing_' will be generated and used.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Track.TrackPlacing" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

### CreateTriple\(DocumentChainedSegment, string, Color?, bool\)

Create triple shoe <xref href="VM.Managed.DAFUL.Track.SolidBodyShoe" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Track.BuilderShoeUserDefined" data-throw-if-not-resolved="false"></xref> builder.

```csharp
public static Obj CreateTriple(this DocumentChainedSegment document, string bodyName = "", Color? color = null, bool isInterface = false)
```

#### Parameters

`document` DocumentChainedSegment

The document to create the triple shoe solid body.

`bodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.Track.SolidBodyShoe" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BD_' will be generated and used.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

`isInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

'true' if it is interface body. Otherwise, 'false'.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Track.SolidBodyShoe" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

### CreateTriple\(PartDocumentChainedSegment, Color?\)

Create triple shoe <xref href="VM.Managed.CAD.Track.BodyShoe" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Track.BuilderShoeUserDefined" data-throw-if-not-resolved="false"></xref> builder in part.

```csharp
public static Obj CreateTriple(this PartDocumentChainedSegment document, Color? color = null)
```

#### Parameters

`document` PartDocumentChainedSegment

The document to create the triple shoe body.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

#### Returns

 Obj

The new <xref href="VM.Managed.CAD.Track.BodyLink" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

### CreateUserDefined\(DocumentChainedSegment, string, Color?, bool\)

Create user-defined shoe <xref href="VM.Managed.DAFUL.Track.SolidBodyShoe" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Track.BuilderShoeUserDefined" data-throw-if-not-resolved="false"></xref> builder.

```csharp
public static Obj CreateUserDefined(this DocumentChainedSegment document, string bodyName = "", Color? color = null, bool isInterface = false)
```

#### Parameters

`document` DocumentChainedSegment

The document to create the user-defined shoe solid body.

`bodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.Track.SolidBodyShoe" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BD_' will be generated and used.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

`isInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

'true' if it is interface body. Otherwise, 'false'.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Track.SolidBodyShoe" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

### CreateUserDefined\(PartDocumentChainedSegment, Color?\)

Create user-defined shoe <xref href="VM.Managed.CAD.Track.BodyShoe" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Track.BuilderShoeUserDefined" data-throw-if-not-resolved="false"></xref> builder in part.

```csharp
public static Obj CreateUserDefined(this PartDocumentChainedSegment document, Color? color = null)
```

#### Parameters

`document` PartDocumentChainedSegment

The document to create the user-defined shoe body.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

#### Returns

 Obj

The new <xref href="VM.Managed.CAD.Track.BodyLink" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

### CreateVType\(DocumentChainedSegment, string, Color?, bool\)

Create V-type link <xref href="VM.Managed.DAFUL.Track.SolidBodyLink" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Track.BuilderLinkUserDefined" data-throw-if-not-resolved="false"></xref> builder.

```csharp
public static Obj CreateVType(this DocumentChainedSegment document, string bodyName = "", Color? color = null, bool isInterface = false)
```

#### Parameters

`document` DocumentChainedSegment

The document to create the V-type link solid body.

`bodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.Track.SolidBodyLink" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BD_' will be generated and used.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

`isInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

'true' if it is interface body. Otherwise, 'false'.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Track.SolidBodyLink" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

### CreateVType\(PartDocumentChainedSegment, Color?\)

Create V-type link <xref href="VM.Managed.CAD.Track.BodyLink" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.Track.BuilderLinkUserDefined" data-throw-if-not-resolved="false"></xref> builder in part.

```csharp
public static Obj CreateVType(this PartDocumentChainedSegment document, Color? color = null)
```

#### Parameters

`document` PartDocumentChainedSegment

The document to create the V-type link body.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new flat roller geometry. The default value is '0xBFAAAA'

#### Returns

 Obj

The new <xref href="VM.Managed.CAD.Track.BodyLink" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

### ReplaceDesignPosition\(Obj, Obj, ExpressionValueVariable, TMatrix\)

Replace design position.

```csharp
[NotNullObj(new string[] { "segmentBody", "designPoint" })]
[MatchTypeObj(new object[] { "designPoint", typeof(DesignPoint) })]
public static void ReplaceDesignPosition(this Obj segmentBody, Obj designPoint, ExpressionValueVariable value, TMatrix matT)
```

#### Parameters

`segmentBody` Obj

The segment body.

`designPoint` Obj

The design point to be replaced.

`value` ExpressionValueVariable

The value to be replaced with axis.

`matT` TMatrix

The transformation to be replaced.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'segmentBody','designPoint' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if type of 'segmentBody' is not <xref href="VM.Managed.CAD.Track.BodyShoe" data-throw-if-not-resolved="false"></xref> or <xref href="VM.Managed.CAD.Track.BodyLink" data-throw-if-not-resolved="false"></xref> or <xref href="VM.Managed.DAFUL.Track.SolidBodyShoe" data-throw-if-not-resolved="false"></xref> or <xref href="VM.Managed.DAFUL.Track.SolidBodyLink" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if type of 'designPoint' is not <xref href="VM.Managed.DesignPoint" data-throw-if-not-resolved="false"></xref>.

### RestorePathToOriginPositionAndOrientation\(Obj, IEnumerable<Obj\>, IEnumerable<TMatrix\>\)

```csharp
[NotNullObj(new string[] { "trackPlacing" })]
[MatchTypeObj(new object[] { "trackPlacing", typeof(TrackPlacing) })]
[NotNull(new string[] { "paths", "transforms" })]
public static void RestorePathToOriginPositionAndOrientation(this Obj trackPlacing, IEnumerable<Obj> paths, IEnumerable<TMatrix> transforms)
```

#### Parameters

`trackPlacing` Obj

`paths` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Obj\>

`transforms` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<TMatrix\>


