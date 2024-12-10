#  Class SplitAPI

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for split.

```csharp
public static class SplitAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SplitAPI](VM.API.Pre.SplitAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_SplitAPI_SplitFaceWithCirclePlane_VM_Models_Pre_IDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__VM_Vector_VM_Vector_System_Nullable_VM_Models_Pre_ExpressionValueVariable__"></a> SplitFaceWithCirclePlane\(IDocument, IEnumerable<Obj\>, Vector, Vector, ExpressionValueVariable?\)

Split a face with circle plane.

```csharp
[NotNull(new string[] { "document", "targetFaces" })]
public static void SplitFaceWithCirclePlane(this IDocument document, IEnumerable<Obj> targetFaces, Vector point, Vector direction, ExpressionValueVariable? radius = null)
```

#### Parameters

`document` IDocument

The <xref href="VM.Models.Pre.IDocument" data-throw-if-not-resolved="false"></xref> to split a face with circle plane.

`targetFaces` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

The target faces of a face with circle plane.

`point` Vector

The point of a face with circle plane.

`direction` Vector

The direction of a face with circle plane.

`radius` ExpressionValueVariable?

The radius of a face with circle plane.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'targetFaces' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'document' is not <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.PartDocument" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'targetFaces' is not <xref href="VM.Managed.CAD.Face" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the 'radius' value is equal to or less than 0.

### <a id="VM_API_Pre_SplitAPI_SplitFaceWithImprintFaceAndBody_VM_Models_Pre_IDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__VM_API_Pre_Obj_System_Boolean_"></a> SplitFaceWithImprintFaceAndBody\(IDocument, IEnumerable<Obj\>, Obj, bool\)

Split a face with Imprint.

```csharp
[NotNull(new string[] { "document", "targetFaces" })]
[NotNullObj(new string[] { "toolBody" })]
public static void SplitFaceWithImprintFaceAndBody(this IDocument document, IEnumerable<Obj> targetFaces, Obj toolBody, bool parametric = true)
```

#### Parameters

`document` IDocument

The <xref href="VM.Models.Pre.IDocument" data-throw-if-not-resolved="false"></xref> to split a face with imprint using face and body.

`targetFaces` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

The target faces of a face with imprint.

`toolBody` [Obj](VM.API.Pre.Obj.md)

The tool body of a face with imprint.

`parametric` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of parametric of a face with imprint.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'targetFaces', 'toolBody' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'document' is not <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.PartDocument" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'targetFaces' is not <xref href="VM.Managed.CAD.Face" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'toolBody' is not <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_SplitAPI_SplitFaceWithImprintTwoBodies_VM_Models_Pre_IDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_System_Boolean_"></a> SplitFaceWithImprintTwoBodies\(IDocument, Obj, Obj, bool\)

Split a face with Imprint.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "targetBody", "toolBody" })]
public static void SplitFaceWithImprintTwoBodies(this IDocument document, Obj targetBody, Obj toolBody, bool parametric = true)
```

#### Parameters

`document` IDocument

The <xref href="VM.Models.Pre.IDocument" data-throw-if-not-resolved="false"></xref> to split a face with imprint using two bodies.

`targetBody` [Obj](VM.API.Pre.Obj.md)

The target body of a face with imprint.

`toolBody` [Obj](VM.API.Pre.Obj.md)

The tool body of a face with imprint.

`parametric` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of parametric of a face with imprint.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'targetBody', 'toolBody' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'document' is not <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.PartDocument" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'targetBody', 'toolBody' is not <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the 'toolBody' is equal to the 'targetBody'.

### <a id="VM_API_Pre_SplitAPI_SplitFaceWithImprintTwoFaces_VM_Models_Pre_IDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_Boolean_"></a> SplitFaceWithImprintTwoFaces\(IDocument, IEnumerable<Obj\>, IEnumerable<Obj\>, bool\)

Split a face with Imprint.

```csharp
[NotNull(new string[] { "document", "targetFaces", "toolFaces" })]
public static void SplitFaceWithImprintTwoFaces(this IDocument document, IEnumerable<Obj> targetFaces, IEnumerable<Obj> toolFaces, bool parametric = true)
```

#### Parameters

`document` IDocument

The <xref href="VM.Models.Pre.IDocument" data-throw-if-not-resolved="false"></xref> to split a face with imprint using two faces.

`targetFaces` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

The target faces of a face with imprint.

`toolFaces` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

The tool faces of a face with imprint.

`parametric` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of parametric of a face with imprint.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'targetFaces', 'toolFaces' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'document' is not <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.PartDocument" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'targetFaces', 'toolFaces' is not <xref href="VM.Managed.CAD.Face" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_SplitAPI_SplitFaceWithRectanglePlane_VM_Models_Pre_IDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__VM_Vector_VM_TMatrix_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__"></a> SplitFaceWithRectanglePlane\(IDocument, IEnumerable<Obj\>, Vector, TMatrix, ExpressionValueVariable?, ExpressionValueVariable?\)

Split a face with rectangle plane.

```csharp
[NotNull(new string[] { "document", "targetFaces" })]
public static void SplitFaceWithRectanglePlane(this IDocument document, IEnumerable<Obj> targetFaces, Vector point, TMatrix transform, ExpressionValueVariable? width = null, ExpressionValueVariable? height = null)
```

#### Parameters

`document` IDocument

The <xref href="VM.Models.Pre.IDocument" data-throw-if-not-resolved="false"></xref> to split a face with rectangle plane.

`targetFaces` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Obj](VM.API.Pre.Obj.md)\>

The target faces of a face with rectangle plane.

`point` Vector

The point of a face with rectangle plane.

`transform` TMatrix

The transform of a face with rectangle plane.

`width` ExpressionValueVariable?

The width of a face with rectangle plane.

`height` ExpressionValueVariable?

The height of a face with rectangle plane.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'targetFaces' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'document' is not <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.PartDocument" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'targetFaces' is not <xref href="VM.Managed.CAD.Face" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of transform X, Y, Z values is equal to 0.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'width', 'height' values are equal to or less than 0.

