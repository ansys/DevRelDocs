# Class GlueAPI
<a id="VM_API_Pre_EasyFlex_GlueAPI"></a>

Namespace: [VM.API.Pre.EasyFlex](VM.API.Pre.EasyFlex.md)  
Assembly: VM.API.Pre.EasyFlex.dll  

This class implements APIs for <xref href="VM.Managed.DAFUL.Builder.FE.Contact.Tie" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.MeshFree.Weld" data-throw-if-not-resolved="false"></xref>class.

```csharp
public static class GlueAPI
```

#### Inheritance

object ← 
[GlueAPI](VM.API.Pre.EasyFlex.GlueAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_EasyFlex_GlueAPI_CreateTieWithColor_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_System_Drawing_Color__VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_System_Drawing_Color__System_String_VM_Managed_SymmetricType_"></a> CreateTieWithColor\(SubSystemDocument, Obj, IEnumerable<Color\>, Obj, IEnumerable<Color\>, string, SymmetricType\)

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "baseBody", "actionBody" })]
[MatchTypeObj(new object[] { "baseBody", typeof(SolidBody), "actionBody", typeof(SolidBody) })]
public static Obj CreateTieWithColor(this SubSystemDocument document, Obj baseBody, IEnumerable<Color> baseColors, Obj actionBody, IEnumerable<Color> actionColors, string tieName = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

`baseBody` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

`baseColors` IEnumerable<Color\>

`actionBody` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

`actionColors` IEnumerable<Color\>

`tieName` string

`symmetricType` SymmetricType

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

### <a id="VM_API_Pre_EasyFlex_GlueAPI_CreateTieWithColor_VM_Managed_DAFUL_PartDocument_VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_System_Drawing_Color__VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_System_Drawing_Color__System_String_VM_Managed_SymmetricType_"></a> CreateTieWithColor\(PartDocument, Obj, IEnumerable<Color\>, Obj, IEnumerable<Color\>, string, SymmetricType\)

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "baseBody", "actionBody" })]
public static Obj CreateTieWithColor(this PartDocument document, Obj baseBody, IEnumerable<Color> baseColors, Obj actionBody, IEnumerable<Color> actionColors, string tieName = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`document` [PartDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/PartDocument.cs)

`baseBody` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

`baseColors` IEnumerable<Color\>

`actionBody` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

`actionColors` IEnumerable<Color\>

`tieName` string

`symmetricType` SymmetricType

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

### <a id="VM_API_Pre_EasyFlex_GlueAPI_CreateTieWithFaces_VM_Models_Pre_IDocument_System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_Collections_Generic_IEnumerable_VM_API_Pre_Obj__System_String_VM_Managed_SymmetricType_"></a> CreateTieWithFaces\(IDocument, IEnumerable<Obj\>, IEnumerable<Obj\>, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Builder.FE.Contact.Tie" data-throw-if-not-resolved="false"></xref> with faces.

```csharp
[NotNull(new string[] { "document", "baseFaces", "actionFaces" })]
public static Obj CreateTieWithFaces(this IDocument document, IEnumerable<Obj> baseFaces, IEnumerable<Obj> actionFaces, string tieName = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`document` IDocument

The document to create the tie.

`baseFaces` IEnumerable<[Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)\>

The base faces

`actionFaces` IEnumerable<[Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)\>

The action faces

`tieName` string

The name of the tie. If empty, default name starts with 'TIE_' will be generated and used.

`symmetricType` SymmetricType

The symmetric type

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.Builder.FE.Contact.Tie" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'baseContactable' or 'actionContactable' arguments are empty.

 ArgumentException

Will be thrown if the type of 'document' is not SubSystemDocument and PartDocument.

### <a id="VM_API_Pre_EasyFlex_GlueAPI_CreateTieWithFaceset_VM_Models_Pre_IDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_System_String_VM_Managed_SymmetricType_"></a> CreateTieWithFaceset\(IDocument, Obj, Obj, string, SymmetricType\)

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "baseGeometry", "actionGeometry" })]
[MatchTypeObj(new object[] { "baseGeometry", typeof(IContactableRigid3D), "actionGeometry", typeof(IContactableRigid3D) })]
public static Obj CreateTieWithFaceset(this IDocument document, Obj baseGeometry, Obj actionGeometry, string tieName = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`document` IDocument

`baseGeometry` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

`actionGeometry` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

`tieName` string

`symmetricType` SymmetricType

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

### <a id="VM_API_Pre_EasyFlex_GlueAPI_CreateWeld_VM_Models_Pre_IDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_System_Nullable_VM_Vector__System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_API_Pre_Obj__System_Nullable_System_Drawing_Color__"></a> CreateWeld\(IDocument, Obj, Obj, Vector, Vector, Vector?, string, ExpressionValueVariable?, ExpressionValueVariable?, Obj?, Color?\)

Create <xref href="VM.Managed.DAFUL.MeshFree.Weld" data-throw-if-not-resolved="false"></xref> with two points.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "baseBody", "actionBody" })]
[MatchTypeObj(new object[] { "material", typeof(ISO) })]
public static Obj CreateWeld(this IDocument document, Obj baseBody, Obj actionBody, Vector startPoint, Vector endPoint, Vector? tangentialDirection = null, string name = "", ExpressionValueVariable? number = null, ExpressionValueVariable? halfLength = null, Obj? material = null, Color? color = null)
```

#### Parameters

`document` IDocument

The <xref href="VM.Models.Pre.IDocument" data-throw-if-not-resolved="false"></xref> to create the weld in mesh free.

`baseBody` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The base body of the weld in mesh free.

`actionBody` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The action body of the weld in mesh free.

`startPoint` Vector

The start point of the weld in mesh free.

`endPoint` Vector

The end point of the weld in mesh free.

`tangentialDirection` Vector?

The tangential direction of the weld in mesh free.

`name` string

The name of the weld in mesh free.

`number` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The num of element of the weld in mesh free.

`halfLength` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The half length of element of the weld in mesh free.

`material` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)?

The material of the weld in mesh free. This type should be <xref href="VM.Managed.Material.ISO" data-throw-if-not-resolved="false"></xref>.

`color` Color?

The color of the weld in mesh free.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

the new <xref href="VM.Managed.DAFUL.MeshFree.Weld" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document', 'baseBody', 'actionBody' argument is null.

 ArgumentException

Will be thrown if the magnitude of 'tangentialDirection' is 0 and if the type of 'material' is not 'ISO'.

 ArgumentException

Will be thrown if 'document' is not <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.PartDocument" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if 'baseBody', 'actionBody' is not <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> or if 'baseBody' is equal to 'actionBody'.

 ArgumentOutOfRangeException

Will be thrown if 'number' value is less than 2.

### <a id="VM_API_Pre_EasyFlex_GlueAPI_CreateWeld_VM_Models_Pre_IDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_System_Collections_Generic_IEnumerable_VM_Vector__System_Nullable_VM_Vector__System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_API_Pre_Obj__System_Nullable_System_Drawing_Color__"></a> CreateWeld\(IDocument, Obj, Obj, IEnumerable<Vector\>, Vector?, string, ExpressionValueVariable?, Obj?, Color?\)

Create <xref href="VM.Managed.DAFUL.MeshFree.Weld" data-throw-if-not-resolved="false"></xref> with multi points.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "baseBody", "actionBody" })]
[MatchTypeObj(new object[] { "material", typeof(ISO) })]
public static Obj CreateWeld(this IDocument document, Obj baseBody, Obj actionBody, IEnumerable<Vector> positions, Vector? tangentialDirection = null, string name = "", ExpressionValueVariable? halfLength = null, Obj? material = null, Color? color = null)
```

#### Parameters

`document` IDocument

The <xref href="VM.Models.Pre.IDocument" data-throw-if-not-resolved="false"></xref> to create the weld in mesh free.

`baseBody` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The base body of the weld in mesh free.

`actionBody` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The action body of the weld in mesh free.

`positions` IEnumerable<Vector\>

The positions of the weld in mesh free.

`tangentialDirection` Vector?

The tangential direction of the weld in mesh free.

`name` string

The name of the weld in mesh free.

`halfLength` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The half length of element of the weld in mesh free.

`material` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)?

The material of the weld in mesh free. This type should be <xref href="VM.Managed.Material.ISO" data-throw-if-not-resolved="false"></xref>.

`color` Color?

The color of the weld in mesh free.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

the new <xref href="VM.Managed.DAFUL.MeshFree.Weld" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document', 'baseBody', 'actionBody' argument is null.

 ArgumentException

Will be thrown if the magnitude of 'tangentialDirection' is 0 and if the type of 'material' is not 'ISO'.

 ArgumentException

Will be thrown if 'document' is not <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.PartDocument" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if 'baseBody', 'actionBody' is not <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> or if 'baseBody' is equal to 'actionBody'.

### <a id="VM_API_Pre_EasyFlex_GlueAPI_CreateWeld_VM_Models_Pre_IDocument_System_String_VM_API_Pre_Obj_VM_API_Pre_Obj_System_String_System_Nullable_VM_API_Pre_Obj__System_Nullable_System_Drawing_Color__"></a> CreateWeld\(IDocument, string, Obj, Obj, string, Obj?, Color?\)

Create <xref href="VM.Managed.DAFUL.MeshFree.Weld" data-throw-if-not-resolved="false"></xref> with file.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "baseBody", "actionBody" })]
[MatchTypeObj(new object[] { "material", typeof(ISO) })]
[ExistFile(new string[] { "filePath" })]
public static Obj CreateWeld(this IDocument document, string filePath, Obj baseBody, Obj actionBody, string name = "", Obj? material = null, Color? color = null)
```

#### Parameters

`document` IDocument

The <xref href="VM.Models.Pre.IDocument" data-throw-if-not-resolved="false"></xref> to create the weld in mesh free.

`filePath` string

The file path of the weld in mesh free.

`baseBody` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The base body of the weld in mesh free.

`actionBody` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The action body of the weld in mesh free.

`name` string

The name of the weld in mesh free.

`material` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)?

The material of the weld in mesh free. This type should be <xref href="VM.Managed.Material.ISO" data-throw-if-not-resolved="false"></xref>.

`color` Color?

The color of the weld in mesh free.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

the new <xref href="VM.Managed.DAFUL.MeshFree.Weld" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document', 'baseBody', 'actionBody' argument is null.

 ArgumentException

Will be thrown if the type of 'material' is not 'ISO'.

 FileNotFoundException

Will be thrown if 'filePath' files are not exist.

 ArgumentException

Will be thrown if 'document' is not <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.PartDocument" data-throw-if-not-resolved="false"></xref>.

 ArgumentException

Will be thrown if 'baseBody', 'actionBody' is not <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> or if 'baseBody' is equal to 'actionBody'.

