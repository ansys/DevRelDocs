#  Class ContactAPI

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for contact classes.

```csharp
public static class ContactAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ContactAPI](VM.API.Pre.ContactAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_ContactAPI_CreateAutoContact_VM_Managed_DAFUL_SubSystemDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_"></a> CreateAutoContact\(SubSystemDocument, IEnumerable<Obj\>, ExpressionValueVariable?, string\)

```csharp
[NotNull(new string[] { "subSystemDocument", "objectList" })]
public static Obj CreateAutoContact(this SubSystemDocument subSystemDocument, IEnumerable<Obj> objectList, ExpressionValueVariable? maximumDistance = null, string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

`objectList` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

`maximumDistance` ExpressionValueVariable?

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Obj](VM.API.Pre.Obj.md)

### <a id="VM_API_Pre_ContactAPI_CreateCVCV_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_System_String_VM_API_Pre_FrictionContact_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__"></a> CreateCVCV\(SubSystemDocument, Obj, Obj, string, FrictionContact, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?\)

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseCurveset", "actionCurveset" })]
[MatchTypeObj(new object[] { "baseCurveset", typeof(IContactableRigid2D), "actionCurveset", typeof(IContactableRigid2D) })]
public static Obj CreateCVCV(this SubSystemDocument subSystemDocument, Obj baseCurveset, Obj actionCurveset, string name = "", FrictionContact friction = null, ExpressionValueVariable? baseClearance = null, ExpressionValueVariable? actionClearance = null, ExpressionValueVariable? stiffScaleFactor = null)
```

#### Parameters

`subSystemDocument` SubSystemDocument

`baseCurveset` [Obj](VM.API.Pre.Obj.md)

`actionCurveset` [Obj](VM.API.Pre.Obj.md)

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`friction` [FrictionContact](VM.API.Pre.FrictionContact.md)

`baseClearance` ExpressionValueVariable?

`actionClearance` ExpressionValueVariable?

`stiffScaleFactor` ExpressionValueVariable?

#### Returns

 [Obj](VM.API.Pre.Obj.md)

### <a id="VM_API_Pre_ContactAPI_CreateColorCurveSet_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_System_Drawing_Color__System_String_"></a> CreateColorCurveSet\(SubSystemDocument, Obj, IEnumerable<Color\>, string\)

```csharp
[NotNull(new string[] { "subSystemDocument", "colors" })]
[NotNullObj(new string[] { "body" })]
public static Obj CreateColorCurveSet(this SubSystemDocument subSystemDocument, Obj body, IEnumerable<Color> colors, string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

`body` [Obj](VM.API.Pre.Obj.md)

`colors` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)\>

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Obj](VM.API.Pre.Obj.md)

### <a id="VM_API_Pre_ContactAPI_CreateColorCurveSet_VM_Managed_DAFUL_PartDocument_VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_System_Drawing_Color__System_String_"></a> CreateColorCurveSet\(PartDocument, Obj, IEnumerable<Color\>, string\)

Create <xref href="VM.Managed.DAFUL.PartSetCurveForEdges" data-throw-if-not-resolved="false"></xref> by color.

```csharp
[NotNull(new string[] { "document", "colors" })]
[NotNullObj(new string[] { "body" })]
public static Obj CreateColorCurveSet(this PartDocument document, Obj body, IEnumerable<Color> colors, string name = "")
```

#### Parameters

`document` PartDocument

The <xref href="VM.Managed.DAFUL.PartDocument" data-throw-if-not-resolved="false"></xref> to create a curve set by color.

`body` [Obj](VM.API.Pre.Obj.md)

The body of a curve set.

`colors` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)\>

The colors of edges.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a curve set. If empty, default name starts with 'CURVESET' will be generated and used.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.PartSetCurveForEdges" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'colors', 'body' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'body' is not equal to <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ContactAPI_CreateColorFaceSet_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_System_Drawing_Color__System_String_"></a> CreateColorFaceSet\(SubSystemDocument, Obj, IEnumerable<Color\>, string\)

```csharp
[NotNull(new string[] { "subSystemDocument", "colors" })]
[NotNullObj(new string[] { "body" })]
public static Obj CreateColorFaceSet(this SubSystemDocument subSystemDocument, Obj body, IEnumerable<Color> colors, string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

`body` [Obj](VM.API.Pre.Obj.md)

`colors` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)\>

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Obj](VM.API.Pre.Obj.md)

### <a id="VM_API_Pre_ContactAPI_CreateColorFaceSet_VM_Managed_DAFUL_PartDocument_VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_System_Drawing_Color__System_String_"></a> CreateColorFaceSet\(PartDocument, Obj, IEnumerable<Color\>, string\)

Create <xref href="VM.Managed.DAFUL.PartSetFace" data-throw-if-not-resolved="false"></xref> by color.

```csharp
[NotNull(new string[] { "document", "colors" })]
[NotNullObj(new string[] { "body" })]
public static Obj CreateColorFaceSet(this PartDocument document, Obj body, IEnumerable<Color> colors, string name = "")
```

#### Parameters

`document` PartDocument

The <xref href="VM.Managed.DAFUL.PartDocument" data-throw-if-not-resolved="false"></xref> to create a face set by color.

`body` [Obj](VM.API.Pre.Obj.md)

The body of a face set.

`colors` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)\>

The colors of faces.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a face set. If empty, default name starts with 'FACESET_' will be generated and used.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.PartSetFace" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'colors', 'body' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'body' is not equal to <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ContactAPI_CreateContactTolerance_VM_Managed_DAFUL_SubSystemDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__"></a> CreateContactTolerance\(SubSystemDocument, IEnumerable<Obj\>\)

Create contact tolerance.

```csharp
[NotNull(new string[] { "subSystemDocument", "objectList" })]
public static void CreateContactTolerance(this SubSystemDocument subSystemDocument, IEnumerable<Obj> objectList)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create contact tolerances.

`objectList` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

The object list of contacts.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'objectList' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'objectList' is not equal to <xref href="VM.Managed.DAFUL.IGapSupport" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ContactAPI_CreateCurveSet_VM_Managed_DAFUL_SubSystemDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_String_"></a> CreateCurveSet\(SubSystemDocument, IEnumerable<Obj\>, string\)

```csharp
[NotNull(new string[] { "subSystemDocument", "edges" })]
public static Obj CreateCurveSet(this SubSystemDocument subSystemDocument, IEnumerable<Obj> edges, string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

`edges` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Obj](VM.API.Pre.Obj.md)

### <a id="VM_API_Pre_ContactAPI_CreateCurveSet_VM_Managed_DAFUL_SubSystemDocument_System_String_VM_API_Pre_Obj_System_String_"></a> CreateCurveSet\(SubSystemDocument, string, Obj, string\)

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "body" })]
[ExistFile(new string[] { "filePath" })]
public static Obj CreateCurveSet(this SubSystemDocument subSystemDocument, string filePath, Obj body, string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`body` [Obj](VM.API.Pre.Obj.md)

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Obj](VM.API.Pre.Obj.md)

### <a id="VM_API_Pre_ContactAPI_CreateCurveSet_VM_Managed_DAFUL_PartDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_String_"></a> CreateCurveSet\(PartDocument, IEnumerable<Obj\>, string\)

Create <xref href="VM.Managed.DAFUL.PartSetCurveForEdges" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "document", "edges" })]
public static Obj CreateCurveSet(this PartDocument document, IEnumerable<Obj> edges, string name = "")
```

#### Parameters

`document` PartDocument

The <xref href="VM.Managed.DAFUL.PartDocument" data-throw-if-not-resolved="false"></xref> to create a curve set by edges.

`edges` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

The edges of a curve set.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a curve set. If empty, default name starts with 'CURVESET' will be generated and used.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.PartSetCurveForEdges" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'edges' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'edges' is not equal to <xref href="VM.Managed.CAD.Edge" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ContactAPI_CreateCurveSet_VM_Managed_DAFUL_PartDocument_System_String_VM_API_Pre_Obj_System_String_"></a> CreateCurveSet\(PartDocument, string, Obj, string\)

Create <xref href="VM.Managed.DAFUL.PartSetCurveForImport" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "body" })]
[ExistFile(new string[] { "filePath" })]
public static Obj CreateCurveSet(this PartDocument document, string filePath, Obj body, string name = "")
```

#### Parameters

`document` PartDocument

The <xref href="VM.Managed.DAFUL.PartDocument" data-throw-if-not-resolved="false"></xref> to create a curve set by file import.

`filePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path about points of a curve set.

`body` [Obj](VM.API.Pre.Obj.md)

The body of a curve set.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a curve set. If empty, default name starts with 'CURVESET' will be generated and used.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.PartSetCurveForImport" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'body' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'body' is not equal to <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ContactAPI_CreateCylinderToMultiCurveContact_VM_Managed_DAFUL_SubSystemDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__VM_API_Pre_Obj_System_String_"></a> CreateCylinderToMultiCurveContact\(SubSystemDocument, IEnumerable<Obj\>, Obj, string\)

```csharp
[NotNull(new string[] { "subSystemDocument", "baseGeomerty" })]
[NotNullObj(new string[] { "actionGeomerty" })]
public static Obj CreateCylinderToMultiCurveContact(this SubSystemDocument subSystemDocument, IEnumerable<Obj> baseGeomerty, Obj actionGeomerty, string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

`baseGeomerty` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

`actionGeomerty` [Obj](VM.API.Pre.Obj.md)

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Obj](VM.API.Pre.Obj.md)

### <a id="VM_API_Pre_ContactAPI_CreateCylinderToMultiCurveContact_VM_Managed_DAFUL_SubSystemDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__VM_API_Pre_Obj_VM_Vector_VM_Vector_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_"></a> CreateCylinderToMultiCurveContact\(SubSystemDocument, IEnumerable<Obj\>, Obj, Vector, Vector, ExpressionValueVariable?, string\)

```csharp
[NotNull(new string[] { "subSystemDocument", "baseGeomerty" })]
[NotNullObj(new string[] { "actionGeomerty" })]
public static Obj CreateCylinderToMultiCurveContact(this SubSystemDocument subSystemDocument, IEnumerable<Obj> baseGeomerty, Obj actionGeomerty, Vector bottomPosition, Vector topPosition, ExpressionValueVariable? radius = null, string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

`baseGeomerty` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

`actionGeomerty` [Obj](VM.API.Pre.Obj.md)

`bottomPosition` Vector

`topPosition` Vector

`radius` ExpressionValueVariable?

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Obj](VM.API.Pre.Obj.md)

### <a id="VM_API_Pre_ContactAPI_CreateExtractFaceSet_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_System_Boolean_System_String_System_Boolean_"></a> CreateExtractFaceSet\(SubSystemDocument, Obj, Obj, ExpressionValueVariable?, string, bool, string, bool\)

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "firstBody", "secondBody" })]
public static void CreateExtractFaceSet(this SubSystemDocument subSystemDocument, Obj firstBody, Obj secondBody, ExpressionValueVariable? tolerance = null, string firstFacesetName = "", bool splitFirstBody = false, string secondFacesetName = "", bool splitSecondBody = false)
```

#### Parameters

`subSystemDocument` SubSystemDocument

`firstBody` [Obj](VM.API.Pre.Obj.md)

`secondBody` [Obj](VM.API.Pre.Obj.md)

`tolerance` ExpressionValueVariable?

`firstFacesetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`splitFirstBody` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`secondFacesetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`splitSecondBody` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_API_Pre_ContactAPI_CreateExtractFaceSet_VM_Managed_DAFUL_SubSystemDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__VM_API_Pre_Obj_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_System_Boolean_System_String_System_Boolean_"></a> CreateExtractFaceSet\(SubSystemDocument, IEnumerable<Obj\>, Obj, ExpressionValueVariable?, string, bool, string, bool\)

```csharp
[NotNull(new string[] { "subSystemDocument", "faces" })]
[NotNullObj(new string[] { "secondBody" })]
public static void CreateExtractFaceSet(this SubSystemDocument subSystemDocument, IEnumerable<Obj> faces, Obj secondBody, ExpressionValueVariable? tolerance = null, string firstFacesetName = "", bool splitFirstBody = false, string secondFacesetName = "", bool splitSecondBody = false)
```

#### Parameters

`subSystemDocument` SubSystemDocument

`faces` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

`secondBody` [Obj](VM.API.Pre.Obj.md)

`tolerance` ExpressionValueVariable?

`firstFacesetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`splitFirstBody` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`secondFacesetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`splitSecondBody` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_API_Pre_ContactAPI_CreateFaceSet_VM_Managed_DAFUL_SubSystemDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_String_"></a> CreateFaceSet\(SubSystemDocument, IEnumerable<Obj\>, string\)

```csharp
[NotNull(new string[] { "subSystemDocument", "faces" })]
public static Obj CreateFaceSet(this SubSystemDocument subSystemDocument, IEnumerable<Obj> faces, string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

`faces` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Obj](VM.API.Pre.Obj.md)

### <a id="VM_API_Pre_ContactAPI_CreateFaceSet_VM_Managed_DAFUL_PartDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_String_"></a> CreateFaceSet\(PartDocument, IEnumerable<Obj\>, string\)

Create <xref href="VM.Managed.DAFUL.PartSetFace" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "document", "faces" })]
public static Obj CreateFaceSet(this PartDocument document, IEnumerable<Obj> faces, string name = "")
```

#### Parameters

`document` PartDocument

The <xref href="VM.Managed.DAFUL.PartDocument" data-throw-if-not-resolved="false"></xref> to create a face set.

`faces` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

The faces of a face set.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a face set. If empty, default name starts with 'FACESET_' will be generated and used.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.PartSetFace" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'faces' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'faces' is not equal to <xref href="VM.Managed.CAD.Face" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ContactAPI_CreateGeneralContact_VM_Models_Pre_IDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_System_String_"></a> CreateGeneralContact\(IDocument, Obj, Obj, string\)

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
public static Obj CreateGeneralContact(this IDocument document, Obj baseEntity, Obj actionEntity, string contactName = "")
```

#### Parameters

`document` IDocument

`baseEntity` [Obj](VM.API.Pre.Obj.md)

`actionEntity` [Obj](VM.API.Pre.Obj.md)

`contactName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Obj](VM.API.Pre.Obj.md)

### <a id="VM_API_Pre_ContactAPI_CreateGeneralContactWithFaces_VM_Models_Pre_IDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_String_"></a> CreateGeneralContactWithFaces\(IDocument, IEnumerable<Obj\>, IEnumerable<Obj\>, string\)

```csharp
[NotNull(new string[] { "document", "baseFaces", "actionFaces" })]
public static Obj CreateGeneralContactWithFaces(this IDocument document, IEnumerable<Obj> baseFaces, IEnumerable<Obj> actionFaces, string contactName = "")
```

#### Parameters

`document` IDocument

`baseFaces` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

`actionFaces` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

`contactName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Obj](VM.API.Pre.Obj.md)

### <a id="VM_API_Pre_ContactAPI_CreateMbyNContact_VM_Managed_DAFUL_SubSystemDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_String_"></a> CreateMbyNContact\(SubSystemDocument, IEnumerable<Obj\>, IEnumerable<Obj\>, string\)

Create <xref href="VM.Managed.DAFUL.Contact.MbyNContact" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument", "baseGeomerty", "actionGeomerty" })]
public static Obj CreateMbyNContact(this SubSystemDocument subSystemDocument, IEnumerable<Obj> baseGeomerty, IEnumerable<Obj> actionGeomerty, string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create M by N contacts.

`baseGeomerty` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

The base geomerty of M by N contacts.

`actionGeomerty` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

The action geomerty of M by N contacts.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of M by N contacts. If empty, default name starts with 'MbyN' will be generated and used.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.Contact.MbyNContact" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'baseGeomerty', 'actionGeomerty' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'baseGeomerty', 'actionGeomerty' is not equal to <xref href="VM.Managed.DAFUL.IContactable3D" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ContactAPI_CreateMultiCurveToMultiCurveContact_VM_Managed_DAFUL_SubSystemDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_String_"></a> CreateMultiCurveToMultiCurveContact\(SubSystemDocument, IEnumerable<Obj\>, IEnumerable<Obj\>, string\)

```csharp
[NotNull(new string[] { "subSystemDocument", "baseGeomerty", "actionGeomerty" })]
public static Obj CreateMultiCurveToMultiCurveContact(this SubSystemDocument subSystemDocument, IEnumerable<Obj> baseGeomerty, IEnumerable<Obj> actionGeomerty, string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

`baseGeomerty` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

`actionGeomerty` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Obj](VM.API.Pre.Obj.md)

### <a id="VM_API_Pre_ContactAPI_CreateNCombinationContact_VM_Managed_DAFUL_SubSystemDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_String_"></a> CreateNCombinationContact\(SubSystemDocument, IEnumerable<Obj\>, string\)

Create <xref href="VM.Managed.DAFUL.Contact.NCombinationContact" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument", "geomerty" })]
public static Obj CreateNCombinationContact(this SubSystemDocument subSystemDocument, IEnumerable<Obj> geomerty, string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create N combination contacts.

`geomerty` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

The geomerty of N combination contacts.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of N combination contacts. If empty, default name starts with 'NCombi' will be generated and used.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.Contact.NCombinationContact" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'geomerty' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'geomerty' is not equal to <xref href="VM.Managed.DAFUL.IContactable3D" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_ContactAPI_CreatePTCV_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_System_String_VM_API_Pre_Relative_VM_API_Pre_FrictionContact_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__"></a> CreatePTCV\(SubSystemDocument, Obj, Obj, Vector, string, Relative, FrictionContact, ExpressionValueVariable?, ExpressionValueVariable?\)

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseCurveset", "actionBody" })]
[MatchTypeObj(new object[] { "baseCurveset", typeof(IContactableRigid2D), "actionBody", typeof(IConnectable) })]
public static Obj CreatePTCV(this SubSystemDocument subSystemDocument, Obj baseCurveset, Obj actionBody, Vector actionPosition, string name = "", Relative relative = null, FrictionContact friction = null, ExpressionValueVariable? baseClearance = null, ExpressionValueVariable? stiffScaleFactor = null)
```

#### Parameters

`subSystemDocument` SubSystemDocument

`baseCurveset` [Obj](VM.API.Pre.Obj.md)

`actionBody` [Obj](VM.API.Pre.Obj.md)

`actionPosition` Vector

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`relative` [Relative](VM.API.Pre.Relative.md)

`friction` [FrictionContact](VM.API.Pre.FrictionContact.md)

`baseClearance` ExpressionValueVariable?

`stiffScaleFactor` ExpressionValueVariable?

#### Returns

 [Obj](VM.API.Pre.Obj.md)

### <a id="VM_API_Pre_ContactAPI_CreateSphereToMultiCurveContact_VM_Managed_DAFUL_SubSystemDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__VM_API_Pre_Obj_System_String_"></a> CreateSphereToMultiCurveContact\(SubSystemDocument, IEnumerable<Obj\>, Obj, string\)

```csharp
[NotNull(new string[] { "subSystemDocument", "baseGeomerty" })]
[NotNullObj(new string[] { "actionGeomerty" })]
public static Obj CreateSphereToMultiCurveContact(this SubSystemDocument subSystemDocument, IEnumerable<Obj> baseGeomerty, Obj actionGeomerty, string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

`baseGeomerty` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

`actionGeomerty` [Obj](VM.API.Pre.Obj.md)

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Obj](VM.API.Pre.Obj.md)

### <a id="VM_API_Pre_ContactAPI_CreateSphereToMultiCurveContact_VM_Managed_DAFUL_SubSystemDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__VM_API_Pre_Obj_VM_Vector_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_"></a> CreateSphereToMultiCurveContact\(SubSystemDocument, IEnumerable<Obj\>, Obj, Vector, ExpressionValueVariable?, string\)

```csharp
[NotNull(new string[] { "subSystemDocument", "baseGeomerty" })]
[NotNullObj(new string[] { "actionGeomerty" })]
public static Obj CreateSphereToMultiCurveContact(this SubSystemDocument subSystemDocument, IEnumerable<Obj> baseGeomerty, Obj actionGeomerty, Vector centerPosition, ExpressionValueVariable? radius = null, string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

`baseGeomerty` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

`actionGeomerty` [Obj](VM.API.Pre.Obj.md)

`centerPosition` Vector

`radius` ExpressionValueVariable?

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [Obj](VM.API.Pre.Obj.md)

