# Class EFConstraintAPI
<a id="VM_API_Pre_EasyFlex_EFConstraintAPI"></a>

Namespace: [VM.API.Pre.EasyFlex](VM.API.Pre.EasyFlex.md)  
Assembly: VM.API.Pre.EasyFlex.dll  

This class implements APIs for <xref href="VM.Managed.DAFUL.Flexible.BoundaryCondition" data-throw-if-not-resolved="false"></xref>, <xref href="VM.Managed.DAFUL.MeshFree.RigidBodyElementSingle" data-throw-if-not-resolved="false"></xref>, <xref href="VM.Managed.DAFUL.MeshFree.RigidBodyElementPair" data-throw-if-not-resolved="false"></xref>,  <xref href="VM.Managed.DAFUL.Range" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class EFConstraintAPI
```

#### Inheritance

object ← 
[EFConstraintAPI](VM.API.Pre.EasyFlex.EFConstraintAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_EasyFlex_EFConstraintAPI_CreateBoundaryConditionWithColor_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_System_Drawing_Color__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_API_Pre_Obj__System_String_"></a> CreateBoundaryConditionWithColor\(SubSystemDocument, Obj, IEnumerable<Color\>, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, Obj?, string\)

```csharp
[NotNull(new string[] { "document", "colors" })]
[NotNullObj(new string[] { "body" })]
[MatchTypeObj(new object[] { "body", typeof(SolidBody) })]
public static Obj CreateBoundaryConditionWithColor(this SubSystemDocument document, Obj body, IEnumerable<Color> colors, ExpressionValueVariable? pointX = null, ExpressionValueVariable? pointY = null, ExpressionValueVariable? pointZ = null, Obj? referenceFrame = null, string name = "")
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

`body` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

`colors` IEnumerable<Color\>

`pointX` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

`pointY` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

`pointZ` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

`referenceFrame` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)?

`name` string

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

### <a id="VM_API_Pre_EasyFlex_EFConstraintAPI_CreateBoundaryConditionWithFaces_VM_Managed_DAFUL_SubSystemDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_API_Pre_Obj__System_String_"></a> CreateBoundaryConditionWithFaces\(SubSystemDocument, IEnumerable<Obj\>, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, Obj?, string\)

```csharp
[NotNull(new string[] { "document", "baseGeometry" })]
public static Obj CreateBoundaryConditionWithFaces(this SubSystemDocument document, IEnumerable<Obj> baseGeometry, ExpressionValueVariable? pointX = null, ExpressionValueVariable? pointY = null, ExpressionValueVariable? pointZ = null, Obj? referenceFrame = null, string name = "")
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

`baseGeometry` IEnumerable<[Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)\>

`pointX` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

`pointY` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

`pointZ` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

`referenceFrame` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)?

`name` string

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

### <a id="VM_API_Pre_EasyFlex_EFConstraintAPI_CreateBoundaryConditionWithFaceset_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_API_Pre_Obj__System_String_"></a> CreateBoundaryConditionWithFaceset\(SubSystemDocument, Obj, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, Obj?, string\)

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "baseGeometry" })]
[MatchTypeObj(new object[] { "baseGeometry", typeof(IContactableRigid3D) })]
public static Obj CreateBoundaryConditionWithFaceset(this SubSystemDocument document, Obj baseGeometry, ExpressionValueVariable? pointX = null, ExpressionValueVariable? pointY = null, ExpressionValueVariable? pointZ = null, Obj? referenceFrame = null, string name = "")
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

`baseGeometry` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

`pointX` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

`pointY` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

`pointZ` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

`referenceFrame` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)?

`name` string

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

### <a id="VM_API_Pre_EasyFlex_EFConstraintAPI_CreateRange_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_VM_Vector_VM_Vector_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_"></a> CreateRange\(SubSystemDocument, Obj, Vector, Vector, ExpressionValueVariable?, string\)

Create <xref href="VM.Managed.DAFUL.Range" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[NotNullObj(new string[] { "body" })]
[MatchTypeObj(new object[] { "body", typeof(SolidBody) })]
[NotZeroMagnitude(new string[] { "normalDirectionOfRange" })]
public static Obj CreateRange(this SubSystemDocument subSystemDocument, Obj body, Vector point, Vector normalDirectionOfRange, ExpressionValueVariable? radius = null, string name = "")
```

#### Parameters

`subSystemDocument` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create the range.

`body` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The body of the range.

`point` Vector

The point of the range.

`normalDirectionOfRange` Vector

The normal direction of the range.

`radius` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The radius of the range.

`name` string

The name of the range. If empty, default name starts with 'RANGE_' will be generated and used.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

the new General object created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'subSystemDocument', 'body' argument is null.

 ArgumentException

Will be thrown if the type of 'body' is not <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> or if the magnitude of 'normalDirectionOfRange' is 0.

 ArgumentOutOfRangeException

Will be thrown if the 'radius' value is equal to or less than 0.

### <a id="VM_API_Pre_EasyFlex_EFConstraintAPI_CreateRigidBodyElementPairWithColor_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_System_Drawing_Color__VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_System_Drawing_Color__VM_Vector_System_String_"></a> CreateRigidBodyElementPairWithColor\(SubSystemDocument, Obj, IEnumerable<Color\>, Obj, IEnumerable<Color\>, Vector, string\)

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "baseBody", "actionBody" })]
[MatchTypeObj(new object[] { "baseBody", typeof(SolidBody), "actionBody", typeof(SolidBody) })]
public static Obj CreateRigidBodyElementPairWithColor(this SubSystemDocument document, Obj baseBody, IEnumerable<Color> baseColors, Obj actionBody, IEnumerable<Color> actionColors, Vector point, string name = "")
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

`baseBody` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

`baseColors` IEnumerable<Color\>

`actionBody` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

`actionColors` IEnumerable<Color\>

`point` Vector

`name` string

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

### <a id="VM_API_Pre_EasyFlex_EFConstraintAPI_CreateRigidBodyElementPairWithColor_VM_Managed_DAFUL_PartDocument_VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_System_Drawing_Color__VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_System_Drawing_Color__VM_Vector_System_String_"></a> CreateRigidBodyElementPairWithColor\(PartDocument, Obj, IEnumerable<Color\>, Obj, IEnumerable<Color\>, Vector, string\)

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "baseBody", "actionBody" })]
public static Obj CreateRigidBodyElementPairWithColor(this PartDocument document, Obj baseBody, IEnumerable<Color> baseColors, Obj actionBody, IEnumerable<Color> actionColors, Vector point, string name = "")
```

#### Parameters

`document` [PartDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/PartDocument.cs)

`baseBody` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

`baseColors` IEnumerable<Color\>

`actionBody` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

`actionColors` IEnumerable<Color\>

`point` Vector

`name` string

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

### <a id="VM_API_Pre_EasyFlex_EFConstraintAPI_CreateRigidBodyElementPairWithFaces_VM_Models_Pre_IDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__VM_Vector_System_String_"></a> CreateRigidBodyElementPairWithFaces\(IDocument, IEnumerable<Obj\>, IEnumerable<Obj\>, Vector, string\)

```csharp
[NotNull(new string[] { "document", "baseGeometry", "actionGeometry" })]
public static Obj CreateRigidBodyElementPairWithFaces(this IDocument document, IEnumerable<Obj> baseGeometry, IEnumerable<Obj> actionGeometry, Vector point, string name = "")
```

#### Parameters

`document` IDocument

`baseGeometry` IEnumerable<[Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)\>

`actionGeometry` IEnumerable<[Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)\>

`point` Vector

`name` string

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

### <a id="VM_API_Pre_EasyFlex_EFConstraintAPI_CreateRigidBodyElementPairWithFaceset_VM_Models_Pre_IDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_System_String_"></a> CreateRigidBodyElementPairWithFaceset\(IDocument, Obj, Obj, Vector, string\)

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "baseGeometry", "actionGeometry" })]
[MatchTypeObj(new object[] { "baseGeometry", typeof(IContactableRigid3D), "actionGeometry", typeof(IContactableRigid3D) })]
public static Obj CreateRigidBodyElementPairWithFaceset(this IDocument document, Obj baseGeometry, Obj actionGeometry, Vector point, string name = "")
```

#### Parameters

`document` IDocument

`baseGeometry` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

`actionGeometry` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

`point` Vector

`name` string

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

### <a id="VM_API_Pre_EasyFlex_EFConstraintAPI_CreateRigidBodyElementWithColor_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_System_Drawing_Color__VM_Vector_System_String_"></a> CreateRigidBodyElementWithColor\(SubSystemDocument, Obj, IEnumerable<Color\>, Vector, string\)

```csharp
[NotNull(new string[] { "document", "colors" })]
[NotNullObj(new string[] { "body" })]
[MatchTypeObj(new object[] { "body", typeof(SolidBody) })]
public static Obj CreateRigidBodyElementWithColor(this SubSystemDocument document, Obj body, IEnumerable<Color> colors, Vector point, string name = "")
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

`body` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

`colors` IEnumerable<Color\>

`point` Vector

`name` string

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

### <a id="VM_API_Pre_EasyFlex_EFConstraintAPI_CreateRigidBodyElementWithColor_VM_Managed_DAFUL_PartDocument_VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_System_Drawing_Color__VM_Vector_System_String_"></a> CreateRigidBodyElementWithColor\(PartDocument, Obj, IEnumerable<Color\>, Vector, string\)

```csharp
[NotNull(new string[] { "document", "colors" })]
[NotNullObj(new string[] { "body" })]
public static Obj CreateRigidBodyElementWithColor(this PartDocument document, Obj body, IEnumerable<Color> colors, Vector point, string name = "")
```

#### Parameters

`document` [PartDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/PartDocument.cs)

`body` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

`colors` IEnumerable<Color\>

`point` Vector

`name` string

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

### <a id="VM_API_Pre_EasyFlex_EFConstraintAPI_CreateRigidBodyElementWithFaces_VM_Models_Pre_IDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__VM_Vector_System_String_"></a> CreateRigidBodyElementWithFaces\(IDocument, IEnumerable<Obj\>, Vector, string\)

```csharp
[NotNull(new string[] { "document", "baseGeometry" })]
public static Obj CreateRigidBodyElementWithFaces(this IDocument document, IEnumerable<Obj> baseGeometry, Vector point, string name = "")
```

#### Parameters

`document` IDocument

`baseGeometry` IEnumerable<[Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)\>

`point` Vector

`name` string

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

### <a id="VM_API_Pre_EasyFlex_EFConstraintAPI_CreateRigidBodyElementWithFaceset_VM_Models_Pre_IDocument_VM_API_Pre_Obj_VM_Vector_System_String_"></a> CreateRigidBodyElementWithFaceset\(IDocument, Obj, Vector, string\)

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "baseGeometry" })]
[MatchTypeObj(new object[] { "baseGeometry", typeof(IContactableRigid3D) })]
public static Obj CreateRigidBodyElementWithFaceset(this IDocument document, Obj baseGeometry, Vector point, string name = "")
```

#### Parameters

`document` IDocument

`baseGeometry` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

`point` Vector

`name` string

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

