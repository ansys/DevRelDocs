#  Class EFForceAPI

Namespace: [VM.API.Pre.EasyFlex](VM.API.Pre.EasyFlex.md)  
Assembly: VM.API.Pre.EasyFlex.dll  

This class implements APIs for <xref href="VM.Managed.DAFUL.Flexible.Force.ConcentratedLoad" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.Flexible.Force.PressureLoad" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class EFForceAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EFForceAPI](VM.API.Pre.EasyFlex.EFForceAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_EasyFlex_EFForceAPI_CreateConcentratedLoadFaceWithColor_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_System_Drawing_Color__System_Nullable_VM_Vector__System_String_System_String_"></a> CreateConcentratedLoadFaceWithColor\(SubSystemDocument, Obj, IEnumerable<Color\>, Vector?, string, string\)

Create <xref href="VM.Managed.DAFUL.Flexible.Force.ConcentratedLoad" data-throw-if-not-resolved="false"></xref> with colors.

```csharp
[NotNull(new string[] { "subSystemDocument", "colors" })]
[NotNullObj(new string[] { "body" })]
[MatchTypeObj(new object[] { "body", typeof(SolidBody) })]
public static Obj CreateConcentratedLoadFaceWithColor(this SubSystemDocument subSystemDocument, Obj body, IEnumerable<Color> colors, Vector? direction = null, string force = "1.0", string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create the concentrated load.

`body` Obj

The body of the concentrated load

`colors` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)\>

The colors of the concentrated load.

`direction` Vector?

The direction of the concentrated load.

`force` [string](https://learn.microsoft.com/dotnet/api/system.string)

The force of the concentrated load.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the concentrated load. If empty, default name starts with 'CLOAD_' will be generated and used.

#### Returns

 Obj

the new <xref href="VM.Managed.DAFUL.Flexible.Force.ConcentratedLoad" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'body', 'colors' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'body' is not <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of 'direction' is 0.

### <a id="VM_API_Pre_EasyFlex_EFForceAPI_CreateConcentratedLoadFaceWithFaces_VM_Managed_DAFUL_SubSystemDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_Nullable_VM_Vector__System_String_System_String_"></a> CreateConcentratedLoadFaceWithFaces\(SubSystemDocument, IEnumerable<Obj\>, Vector?, string, string\)

Create <xref href="VM.Managed.DAFUL.Flexible.Force.ConcentratedLoad" data-throw-if-not-resolved="false"></xref> with faces.

```csharp
[NotNull(new string[] { "subSystemDocument", "baseGeometry" })]
public static Obj CreateConcentratedLoadFaceWithFaces(this SubSystemDocument subSystemDocument, IEnumerable<Obj> baseGeometry, Vector? direction = null, string force = "1.0", string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create the concentrated load.

`baseGeometry` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Obj\>

The base geometry of the concentrated load

`direction` Vector?

The direction of the concentrated load.

`force` [string](https://learn.microsoft.com/dotnet/api/system.string)

The force of the concentrated load.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the concentrated load. If empty, default name starts with 'CLOAD_' will be generated and used.

#### Returns

 Obj

the new <xref href="VM.Managed.DAFUL.Flexible.Force.ConcentratedLoad" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'baseGeometry' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'baseGeometry' is not <xref href="VM.Managed.CAD.Face" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of 'direction' is 0.

### <a id="VM_API_Pre_EasyFlex_EFForceAPI_CreateConcentratedLoadFaceWithFaceset_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_Nullable_VM_Vector__System_String_System_String_"></a> CreateConcentratedLoadFaceWithFaceset\(SubSystemDocument, Obj, Vector?, string, string\)

Create <xref href="VM.Managed.DAFUL.Flexible.Force.ConcentratedLoad" data-throw-if-not-resolved="false"></xref> with faceset.

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseGeometry" })]
[MatchTypeObj(new object[] { "baseGeometry", typeof(IContactableRigid3D) })]
public static Obj CreateConcentratedLoadFaceWithFaceset(this SubSystemDocument subSystemDocument, Obj baseGeometry, Vector? direction = null, string force = "1.0", string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create the concentrated load.

`baseGeometry` Obj

The base geometry of the concentrated load

`direction` Vector?

The direction of the concentrated load.

`force` [string](https://learn.microsoft.com/dotnet/api/system.string)

The force of the concentrated load.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the concentrated load. If empty, default name starts with 'CLOAD_' will be generated and used.

#### Returns

 Obj

the new <xref href="VM.Managed.DAFUL.Flexible.Force.ConcentratedLoad" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'baseGeometry' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'baseGeometry' is not <xref href="VM.Managed.DAFUL.IContactableRigid3D" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of 'direction' is 0.

### <a id="VM_API_Pre_EasyFlex_EFForceAPI_CreateConcentratedLoadRange_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_Vector_VM_Vector_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Vector__System_String_System_String_"></a> CreateConcentratedLoadRange\(SubSystemDocument, Obj, Vector, Vector, ExpressionValueVariable?, Vector?, string, string\)

Create <xref href="VM.Managed.DAFUL.Flexible.Force.ConcentratedLoad" data-throw-if-not-resolved="false"></xref> with range.

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "body" })]
[NotZeroMagnitude(new string[] { "normalDirectionOfRange" })]
public static Obj CreateConcentratedLoadRange(this SubSystemDocument subSystemDocument, Obj body, Vector point, Vector normalDirectionOfRange, ExpressionValueVariable? radius = null, Vector? direction = null, string force = "1.0", string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create the concentrated load.

`body` Obj

The body of the concentrated load

`point` Vector

The point of the concentrated load.

`normalDirectionOfRange` Vector

The normal direction of the concentrated load.

`radius` ExpressionValueVariable?

The radius of the concentrated load.

`direction` Vector?

The direction of the concentrated load.

`force` [string](https://learn.microsoft.com/dotnet/api/system.string)

The force of the concentrated load.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the concentrated load. If empty, default name starts with 'CLOAD_' will be generated and used.

#### Returns

 Obj

the new <xref href="VM.Managed.DAFUL.Flexible.Force.ConcentratedLoad" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'body' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'body' is not <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of 'normalDirectionOfRange' is 0.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if the magnitude of 'direction' is 0 or if the 'radius' value is equal to or less than 0.

### <a id="VM_API_Pre_EasyFlex_EFForceAPI_CreatePressureLoadWithColor_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_System_Drawing_Color__System_Boolean_System_String_System_String_"></a> CreatePressureLoadWithColor\(SubSystemDocument, Obj, IEnumerable<Color\>, bool, string, string\)

Create <xref href="VM.Managed.DAFUL.Flexible.Force.PressureLoad" data-throw-if-not-resolved="false"></xref> with colors.

```csharp
[NotNull(new string[] { "subSystemDocument", "colors" })]
[NotNullObj(new string[] { "body" })]
[MatchTypeObj(new object[] { "body", typeof(SolidBody) })]
public static Obj CreatePressureLoadWithColor(this SubSystemDocument subSystemDocument, Obj body, IEnumerable<Color> colors, bool isNormal = true, string normal = "1.0", string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create the pressure load.

`body` Obj

The body of the pressure load

`colors` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)\>

The colors of the pressure load.

`isNormal` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of normal of the pressure load.

`normal` [string](https://learn.microsoft.com/dotnet/api/system.string)

The normal of the pressure load.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the pressure load. If empty, default name starts with 'PLOAD_' will be generated and used.

#### Returns

 Obj

the new <xref href="VM.Managed.DAFUL.Flexible.Force.PressureLoad" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'body', 'colors' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'body' is not <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of 'direction' is 0.

### <a id="VM_API_Pre_EasyFlex_EFForceAPI_CreatePressureLoadWithFaces_VM_Managed_DAFUL_SubSystemDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_Boolean_System_String_System_String_"></a> CreatePressureLoadWithFaces\(SubSystemDocument, IEnumerable<Obj\>, bool, string, string\)

Create <xref href="VM.Managed.DAFUL.Flexible.Force.PressureLoad" data-throw-if-not-resolved="false"></xref> with faces.

```csharp
[NotNull(new string[] { "subSystemDocument", "baseGeometry" })]
public static Obj CreatePressureLoadWithFaces(this SubSystemDocument subSystemDocument, IEnumerable<Obj> baseGeometry, bool isNormal = true, string normal = "1.0", string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create the pressure load.

`baseGeometry` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Obj\>

The base geometry of the pressure load

`isNormal` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of normal of the pressure load.

`normal` [string](https://learn.microsoft.com/dotnet/api/system.string)

The normal of the pressure load.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the pressure load. If empty, default name starts with 'PLOAD_' will be generated and used.

#### Returns

 Obj

the new <xref href="VM.Managed.DAFUL.Flexible.Force.PressureLoad" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'baseGeometry' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'baseGeometry' is not <xref href="VM.Managed.CAD.Face" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_EasyFlex_EFForceAPI_CreatePressureLoadWithFaceset_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_Boolean_System_String_System_String_"></a> CreatePressureLoadWithFaceset\(SubSystemDocument, Obj, bool, string, string\)

Create <xref href="VM.Managed.DAFUL.Flexible.Force.PressureLoad" data-throw-if-not-resolved="false"></xref> with faceset.

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "baseGeometry" })]
[MatchTypeObj(new object[] { "baseGeometry", typeof(IContactableRigid3D) })]
public static Obj CreatePressureLoadWithFaceset(this SubSystemDocument subSystemDocument, Obj baseGeometry, bool isNormal = true, string normal = "1.0", string name = "")
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create the pressure load.

`baseGeometry` Obj

The base geometry of the pressure load

`isNormal` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of normal of the pressure load.

`normal` [string](https://learn.microsoft.com/dotnet/api/system.string)

The normal of the pressure load.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the pressure load. If empty, default name starts with 'PLOAD_' will be generated and used.

#### Returns

 Obj

the new <xref href="VM.Managed.DAFUL.Flexible.Force.PressureLoad" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument', 'baseGeometry' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'baseGeometry' is not <xref href="VM.Managed.DAFUL.IContactableRigid3D" data-throw-if-not-resolved="false"></xref>.

