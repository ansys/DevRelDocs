# Class BodyAPI

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class BodyAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BodyAPI](VM.API.Pre.BodyAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### CreateMeshFileInPart\(Obj, string, bool, FacetParameters?\)

Generate mesh file with given <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> entity.

```csharp
[NotNullObj(new string[] { "body" })]
[NotNullOrEmpty(new string[] { "pathMeshFile" })]
[MatchTypeObj(new object[] { "body", typeof(Body) })]
public static void CreateMeshFileInPart(this Obj body, string pathMeshFile, bool addToModel = true, FacetParameters? facetParameters = null)
```

#### Parameters

`body` [Obj](VM.API.Pre.Obj.md)

The <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> to generate mesh file.

`pathMeshFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

Generated mesh file path.

`addToModel` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag that indicates adding new mesh file to the model.

`facetParameters` [FacetParameters](VM.API.Pre.FacetParameters.md)?

Facet parameters. If it is not given, default values will be used.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if body or pathMeshFile arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'body' is not <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref>.

### CreatePartMarker\(PartDocument, Obj, TMatrix, string\)

Create <xref href="VM.Managed.DAFUL.Builder.PartMarker" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNullObj(new string[] { "body" })]
public static Obj CreatePartMarker(this PartDocument document, Obj body, TMatrix transform, string markerName = "")
```

#### Parameters

`document` PartDocument

The document to create a marker.

`body` [Obj](VM.API.Pre.Obj.md)

The <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> to create a marker.

`transform` TMatrix

The transformation matrix for a marker.

`markerName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the marker. If empty, default name starts with 'MK_' will be generated and used.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Managed.DAFUL.Builder.PartMarker" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'body' is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'body' is not <xref href="VM.Managed.IPartMarkerParent" data-throw-if-not-resolved="false"></xref>.

### CreateSolidBlock\(PartDocument, Vector, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, Color?\)

Create <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.DAFUL.Builder.SolidBlockSimple" data-throw-if-not-resolved="false"></xref> builder.

```csharp
[NotNull(new string[] { "document" })]
[GreaterThanZero(new string[] { "width", "height", "depth" })]
public static Obj CreateSolidBlock(this PartDocument document, Vector position, ExpressionValueVariable width, ExpressionValueVariable height, ExpressionValueVariable depth, Color? color = null)
```

#### Parameters

`document` PartDocument

The document to create the block solid body.

`position` Vector

The position to create the block solid body.

`width` ExpressionValueVariable

The width of the block.

`height` ExpressionValueVariable

The height of the block.

`depth` ExpressionValueVariable

The depth of the blodk.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new block geometry. The default value is '0xBFAAAA'

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'width', 'height', 'depth' values are equal to or less than 0.

### CreateSolidBlock\(PartDocument, Vector\)

Create <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.DAFUL.Builder.SolidBlockSimple" data-throw-if-not-resolved="false"></xref> builder.

```csharp
public static Obj CreateSolidBlock(this PartDocument document, Vector position)
```

#### Parameters

`document` PartDocument

The document to create the block solid body.

`position` Vector

The position to create the block solid body.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> object created by this API.

### CreateSolidCylinder\(PartDocument, Vector, Vector, ExpressionValueVariable, Color?\)

Create <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.DAFUL.Builder.SolidCylinderSimple" data-throw-if-not-resolved="false"></xref> builder.

```csharp
[NotNull(new string[] { "document" })]
[GreaterThanZero(new string[] { "radius" })]
public static Obj CreateSolidCylinder(this PartDocument document, Vector bottomPosition, Vector topPosition, ExpressionValueVariable radius, Color? color = null)
```

#### Parameters

`document` PartDocument

The document to create the cylinder solid body.

`bottomPosition` Vector

The bottom position to create the cylinder solid body.

`topPosition` Vector

The top position to create the cylinder solid body.

`radius` ExpressionValueVariable

The radius of the cylinder.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new cylinder geometry. The default value is '0xBFAAAA'

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'radius' value is equal to or less than 0.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'bottomPosition' is not equal to 'topPosition'.

### CreateSolidCylinder\(PartDocument, Vector, Vector\)

Create <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.DAFUL.Builder.SolidCylinderSimple" data-throw-if-not-resolved="false"></xref> builder.

```csharp
public static Obj CreateSolidCylinder(this PartDocument document, Vector bottomPosition, Vector topPosition)
```

#### Parameters

`document` PartDocument

The document to create the cylinder solid body.

`bottomPosition` Vector

The bottom position to create the cylinder solid body.

`topPosition` Vector

The top position to create the cylinder solid body.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> object created by this API.

### CreateSolidSphere\(PartDocument, Vector, ExpressionValueVariable, Color?\)

Create <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.BuilderSphereSimple" data-throw-if-not-resolved="false"></xref> builder.

```csharp
[NotNull(new string[] { "document" })]
[GreaterThanZero(new string[] { "radius" })]
public static Obj CreateSolidSphere(this PartDocument document, Vector centerPosition, ExpressionValueVariable radius, Color? color = null)
```

#### Parameters

`document` PartDocument

The document to create the sphere solid body.

`centerPosition` Vector

The center position to create the sphere solid body.

`radius` ExpressionValueVariable

The radius of the sphere.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new sphere geometry. The default value is '0xBFAAAA'

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'radius' value is equal to or less than 0.

### CreateSolidSphere\(PartDocument, Vector\)

Create <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.BuilderSphereSimple" data-throw-if-not-resolved="false"></xref> builder.

```csharp
public static Obj CreateSolidSphere(this PartDocument document, Vector centerPosition)
```

#### Parameters

`document` PartDocument

The document to create the sphere solid body.

`centerPosition` Vector

The center position to create the sphere solid body.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> object created by this API.

### CreateSolidTriPlate\(PartDocument, Vector, Vector, Vector, ExpressionValueVariable, Color?\)

Create <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.BuilderTriPlateSimple" data-throw-if-not-resolved="false"></xref> builder.

```csharp
[NotNull(new string[] { "document" })]
[GreaterThanZero(new string[] { "height" })]
public static Obj CreateSolidTriPlate(this PartDocument document, Vector firstPosition, Vector secondPosition, Vector thirdPosition, ExpressionValueVariable height, Color? color = null)
```

#### Parameters

`document` PartDocument

The document to create the triplate solid body.

`firstPosition` Vector

The first position to create the triplate solid body.

`secondPosition` Vector

The second position to create the triplate solid body.

`thirdPosition` Vector

The third position to create the triplate solid body.

`height` ExpressionValueVariable

The height of the triplate.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new triplate geometry. The default value is '0xBFAAAA'

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'height' value is equal to or less than 0.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the condition of triangle's crossproduct is not met.

### CreateSolidTriPlate\(PartDocument, Vector, Vector, Vector\)

Create <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.BuilderTriPlateSimple" data-throw-if-not-resolved="false"></xref> builder.

```csharp
public static Obj CreateSolidTriPlate(this PartDocument document, Vector firstPosition, Vector secondPosition, Vector thirdPosition)
```

#### Parameters

`document` PartDocument

The document to create the triplate solid body.

`firstPosition` Vector

The first position to create the triplate solid body.

`secondPosition` Vector

The second position to create the triplate solid body.

`thirdPosition` Vector

The third position to create the triplate solid body.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> object created by this API.


