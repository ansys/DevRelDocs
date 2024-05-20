# Class EFConstraintAPI

Namespace: [VM.API.Pre.EasyFlex](VM.API.Pre.EasyFlex.md)  
Assembly: VM.API.Pre.EasyFlex.dll  

This class implements APIs for <xref href="VM.Managed.DAFUL.Flexible.BoundaryCondition" data-throw-if-not-resolved="false"></xref>, <xref href="VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle" data-throw-if-not-resolved="false"></xref>, <xref href="VM.Managed.DAFUL.MeshFree.RigidBodyElementPair" data-throw-if-not-resolved="false"></xref>,  <xref href="VM.Managed.DAFUL.Range" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class EFConstraintAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EFConstraintAPI](VM.API.Pre.EasyFlex.EFConstraintAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### CreateBoundaryConditionWithColor\(SubSystemDocument, Obj, IEnumerable<Color\>, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, Obj?, string\)

```csharp
[NotNull(new string[] { "document", "colors" })]
[NotNullObj(new string[] { "body" })]
[MatchTypeObj(new object[] { "body", typeof(SolidBody) })]
public static Obj CreateBoundaryConditionWithColor(this SubSystemDocument document, Obj body, IEnumerable<Color> colors, ExpressionValueVariable? pointX = null, ExpressionValueVariable? pointY = null, ExpressionValueVariable? pointZ = null, Obj? referenceFrame = null, string name = "")
```

#### Parameters

`document` SubSystemDocument

`body` Obj

`colors` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)\>

`pointX` ExpressionValueVariable?

`pointY` ExpressionValueVariable?

`pointZ` ExpressionValueVariable?

`referenceFrame` Obj?

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 Obj

### CreateBoundaryConditionWithFaces\(SubSystemDocument, IEnumerable<Obj\>, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, Obj?, string\)

```csharp
[NotNull(new string[] { "document", "baseGeometry" })]
public static Obj CreateBoundaryConditionWithFaces(this SubSystemDocument document, IEnumerable<Obj> baseGeometry, ExpressionValueVariable? pointX = null, ExpressionValueVariable? pointY = null, ExpressionValueVariable? pointZ = null, Obj? referenceFrame = null, string name = "")
```

#### Parameters

`document` SubSystemDocument

`baseGeometry` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Obj\>

`pointX` ExpressionValueVariable?

`pointY` ExpressionValueVariable?

`pointZ` ExpressionValueVariable?

`referenceFrame` Obj?

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 Obj

### CreateBoundaryConditionWithFaceset\(SubSystemDocument, Obj, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, Obj?, string\)

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "baseGeometry" })]
[MatchTypeObj(new object[] { "baseGeometry", typeof(IContactableRigid3D) })]
public static Obj CreateBoundaryConditionWithFaceset(this SubSystemDocument document, Obj baseGeometry, ExpressionValueVariable? pointX = null, ExpressionValueVariable? pointY = null, ExpressionValueVariable? pointZ = null, Obj? referenceFrame = null, string name = "")
```

#### Parameters

`document` SubSystemDocument

`baseGeometry` Obj

`pointX` ExpressionValueVariable?

`pointY` ExpressionValueVariable?

`pointZ` ExpressionValueVariable?

`referenceFrame` Obj?

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 Obj

### CreateRange\(SubSystemDocument, Obj, Vector, Vector, ExpressionValueVariable?, string\)

Create <xref href="VM.Managed.DAFUL.Range" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "body" })]
[MatchTypeObj(new object[] { "body", typeof(SolidBody) })]
[NotZeroMagnitude(new string[] { "normalDirectionOfRange" })]
public static Obj CreateRange(this SubSystemDocument subSystemDocument, Obj body, Vector point, Vector normalDirectionOfRange, ExpressionValueVariable? radius = null, string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create the range.

`body` Obj

The body of the range.

`point` Vector

The point of the range.

`normalDirectionOfRange` Vector

The normal direction of the range.

`radius` ExpressionValueVariable?

The radius of the range.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the range. If empty, default name starts with 'RANGE_' will be generated and used.

#### Returns

 Obj

the new General object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'body' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'body' is not <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> or if the magnitude of 'normalDirectionOfRange' is 0.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if the 'radius' value is equal to or less than 0.

### CreateRigidBodyElementPairWithColor\(SubSystemDocument, Obj, IEnumerable<Color\>, Obj, IEnumerable<Color\>, Vector, string\)

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "baseBody", "actionBody" })]
[MatchTypeObj(new object[] { "baseBody", typeof(SolidBody), "actionBody", typeof(SolidBody) })]
public static Obj CreateRigidBodyElementPairWithColor(this SubSystemDocument document, Obj baseBody, IEnumerable<Color> baseColors, Obj actionBody, IEnumerable<Color> actionColors, Vector point, string name = "")
```

#### Parameters

`document` SubSystemDocument

`baseBody` Obj

`baseColors` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)\>

`actionBody` Obj

`actionColors` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)\>

`point` Vector

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 Obj

### CreateRigidBodyElementPairWithColor\(PartDocument, Obj, IEnumerable<Color\>, Obj, IEnumerable<Color\>, Vector, string\)

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "baseBody", "actionBody" })]
public static Obj CreateRigidBodyElementPairWithColor(this PartDocument document, Obj baseBody, IEnumerable<Color> baseColors, Obj actionBody, IEnumerable<Color> actionColors, Vector point, string name = "")
```

#### Parameters

`document` PartDocument

`baseBody` Obj

`baseColors` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)\>

`actionBody` Obj

`actionColors` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)\>

`point` Vector

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 Obj

### CreateRigidBodyElementPairWithFaces\(IDocument, IEnumerable<Obj\>, IEnumerable<Obj\>, Vector, string\)

```csharp
[NotNull(new string[] { "document", "baseGeometry", "actionGeometry" })]
public static Obj CreateRigidBodyElementPairWithFaces(this IDocument document, IEnumerable<Obj> baseGeometry, IEnumerable<Obj> actionGeometry, Vector point, string name = "")
```

#### Parameters

`document` IDocument

`baseGeometry` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Obj\>

`actionGeometry` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Obj\>

`point` Vector

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 Obj

### CreateRigidBodyElementPairWithFaceset\(IDocument, Obj, Obj, Vector, string\)

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "baseGeometry", "actionGeometry" })]
[MatchTypeObj(new object[] { "baseGeometry", typeof(IContactableRigid3D), "actionGeometry", typeof(IContactableRigid3D) })]
public static Obj CreateRigidBodyElementPairWithFaceset(this IDocument document, Obj baseGeometry, Obj actionGeometry, Vector point, string name = "")
```

#### Parameters

`document` IDocument

`baseGeometry` Obj

`actionGeometry` Obj

`point` Vector

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 Obj

### CreateRigidBodyElementWithColor\(SubSystemDocument, Obj, IEnumerable<Color\>, Vector, string\)

```csharp
[NotNull(new string[] { "document", "colors" })]
[NotNullObj(new string[] { "body" })]
[MatchTypeObj(new object[] { "body", typeof(SolidBody) })]
public static Obj CreateRigidBodyElementWithColor(this SubSystemDocument document, Obj body, IEnumerable<Color> colors, Vector point, string name = "")
```

#### Parameters

`document` SubSystemDocument

`body` Obj

`colors` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)\>

`point` Vector

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 Obj

### CreateRigidBodyElementWithColor\(PartDocument, Obj, IEnumerable<Color\>, Vector, string\)

```csharp
[NotNull(new string[] { "document", "colors" })]
[NotNullObj(new string[] { "body" })]
public static Obj CreateRigidBodyElementWithColor(this PartDocument document, Obj body, IEnumerable<Color> colors, Vector point, string name = "")
```

#### Parameters

`document` PartDocument

`body` Obj

`colors` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)\>

`point` Vector

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 Obj

### CreateRigidBodyElementWithFaces\(IDocument, IEnumerable<Obj\>, Vector, string\)

```csharp
[NotNull(new string[] { "document", "baseGeometry" })]
public static Obj CreateRigidBodyElementWithFaces(this IDocument document, IEnumerable<Obj> baseGeometry, Vector point, string name = "")
```

#### Parameters

`document` IDocument

`baseGeometry` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Obj\>

`point` Vector

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 Obj

### CreateRigidBodyElementWithFaceset\(IDocument, Obj, Vector, string\)

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "baseGeometry" })]
[MatchTypeObj(new object[] { "baseGeometry", typeof(IContactableRigid3D) })]
public static Obj CreateRigidBodyElementWithFaceset(this IDocument document, Obj baseGeometry, Vector point, string name = "")
```

#### Parameters

`document` IDocument

`baseGeometry` Obj

`point` Vector

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 Obj


