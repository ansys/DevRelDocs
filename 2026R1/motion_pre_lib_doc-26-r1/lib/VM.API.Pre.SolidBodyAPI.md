#  Class SolidBodyAPI

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This class implements APIs for <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class SolidBodyAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SolidBodyAPI](VM.API.Pre.SolidBodyAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_SolidBodyAPI_ChangeSolidBodyAnalysisSetting_VM_API_Pre_Obj_VM_Managed_DAFUL_BodyAnalysisType_"></a> ChangeSolidBodyAnalysisSetting\(Obj, BodyAnalysisType\)

Change the analysis setting of solid body.

```csharp
[NotNullObj(new string[] { "solidBody" })]
[MatchTypeObj(new object[] { "solidBody", typeof(SolidBody) })]
public static void ChangeSolidBodyAnalysisSetting(this Obj solidBody, BodyAnalysisType type)
```

#### Parameters

`solidBody` [Obj](VM.API.Pre.Obj.md)

The solid body to be changed.

`type` BodyAnalysisType

The body analysis type to be changed.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'solidBody' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'solidBody' argument is not empty and type of 'solidBody' is not <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_SolidBodyAPI_CreateMarker_VM_API_Pre_Obj_VM_TMatrix_System_String_VM_Managed_SymmetricType_"></a> CreateMarker\(Obj, TMatrix, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Marker" data-throw-if-not-resolved="false"></xref> at the given <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNullObj(new string[] { "body" })]
public static Obj CreateMarker(this Obj body, TMatrix transform, string markerName = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`body` [Obj](VM.API.Pre.Obj.md)

The <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> to create a marker.

`transform` TMatrix

The transformation matrix for a marker.

`markerName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the marker. If empty, default name starts with 'MK_' will be generated and used.

`symmetricType` SymmetricType

The symmetric type

#### Returns

 [Obj](VM.API.Pre.Obj.md)

the new <xref href="VM.Managed.DAFUL.Marker" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'solidBody' is null.

### <a id="VM_API_Pre_SolidBodyAPI_CreateMeshFile_VM_API_Pre_Obj_System_String_System_String_System_Boolean_System_Boolean_System_Boolean_System_String_System_Nullable_VM_API_Pre_FacetParameters__"></a> CreateMeshFile\(Obj, string, string, bool, bool, bool, string, FacetParameters?\)

Generate mesh file with given <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> entity.

```csharp
[NotNullObj(new string[] { "body" })]
[NotNullOrEmpty(new string[] { "pathMeshFile" })]
public static Obj CreateMeshFile(this Obj body, string pathMeshFile, string nodalBodyName = "", bool importMeshAfterCreate = true, bool addToModel = true, bool createGroup = false, string groupName = "", FacetParameters? facetParameters = null)
```

#### Parameters

`body` [Obj](VM.API.Pre.Obj.md)

The <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> to generate mesh file.

`pathMeshFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

Generated mesh file path.

`nodalBodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the new nodal body. If empty, default name will be generated.

`importMeshAfterCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag that indicates importing new mesh file into the <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> or not.

`addToModel` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag that indicates adding new mesh file to the model.

`createGroup` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag that indicates creating new group by using the solid body and the new nodal body.

`groupName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the new group.

`facetParameters` [FacetParameters](VM.API.Pre.FacetParameters.md)?

Facet parameters. If it is not given, default values will be used.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new NodalBody entity if importMeshAfterCreate flag is true. Otherwise, empty <xref href="VM.API.Pre.Obj" data-throw-if-not-resolved="false"></xref> will be returned.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if body or pathMeshFile arguments are empty.

### <a id="VM_API_Pre_SolidBodyAPI_CreateSolidBlock_VM_Managed_DAFUL_SubSystemDocument_VM_Vector_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_System_String_VM_API_Pre_BooleanOperationType_System_Nullable_System_Drawing_Color__VM_Managed_SymmetricType_System_Boolean_"></a> CreateSolidBlock\(SubSystemDocument, Vector, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, string, BooleanOperationType, Color?, SymmetricType, bool\)

Create <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.BuilderBlockSimple" data-throw-if-not-resolved="false"></xref> builder.

```csharp
[NotNull(new string[] { "document" })]
[GreaterThanZero(new string[] { "width", "height", "depth" })]
public static Obj CreateSolidBlock(this SubSystemDocument document, Vector position, ExpressionValueVariable width, ExpressionValueVariable height, ExpressionValueVariable depth, string bodyName = "", BooleanOperationType booleanOperationType = BooleanOperationType.None, Color? color = null, SymmetricType symmetricType = SymmetricType.None, bool isInterface = false)
```

#### Parameters

`document` SubSystemDocument

The document to create the block solid body.

`position` Vector

The position to create the block solid body.

`width` ExpressionValueVariable

The width of the block.

`height` ExpressionValueVariable

The height of the block.

`depth` ExpressionValueVariable

The depth of the blodk.

`bodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BD_' will be generated and used. If booleanOperationType argument is other than 'None', this argument must be the existing <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> name.

`booleanOperationType` [BooleanOperationType](VM.API.Pre.BooleanOperationType.md)

The boolean operation type. If None, new <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> will be created. otherwise, New block geometry will be merged to the existing <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> which has same name with 'name' argument.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new block geometry. The default value is '0xBFAAAA'

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref>.

`isInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

'true' if it is interface body. Otherwise, 'false'.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'width', 'height', 'depth' values equal to or less than 0.

### <a id="VM_API_Pre_SolidBodyAPI_CreateSolidBlock_VM_Managed_DAFUL_SubSystemDocument_VM_Vector_System_String_"></a> CreateSolidBlock\(SubSystemDocument, Vector, string\)

Create <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.BuilderBlockSimple" data-throw-if-not-resolved="false"></xref> builder.

```csharp
public static Obj CreateSolidBlock(this SubSystemDocument document, Vector position, string bodyName)
```

#### Parameters

`document` SubSystemDocument

The document to create the block solid body.

`position` Vector

The position to create the block solid body.

`bodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BD_' will be generated and used. If booleanOperationType argument is other than 'None', this argument must be the existing <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> name.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> object created by this API.

### <a id="VM_API_Pre_SolidBodyAPI_CreateSolidCylinder_VM_Managed_DAFUL_SubSystemDocument_VM_Vector_VM_Vector_VM_Models_Pre_ExpressionValueVariable_System_String_VM_API_Pre_BooleanOperationType_System_Nullable_System_Drawing_Color__VM_Managed_SymmetricType_System_Boolean_"></a> CreateSolidCylinder\(SubSystemDocument, Vector, Vector, ExpressionValueVariable, string, BooleanOperationType, Color?, SymmetricType, bool\)

Create <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.BuilderCylinderSimple" data-throw-if-not-resolved="false"></xref> builder.

```csharp
[NotNull(new string[] { "document" })]
[GreaterThanZero(new string[] { "radius" })]
public static Obj CreateSolidCylinder(this SubSystemDocument document, Vector bottomPosition, Vector topPosition, ExpressionValueVariable radius, string bodyName = "", BooleanOperationType booleanOperationType = BooleanOperationType.None, Color? color = null, SymmetricType symmetricType = SymmetricType.None, bool isInterface = false)
```

#### Parameters

`document` SubSystemDocument

The document to create the cylinder solid body.

`bottomPosition` Vector

The bottom position to create the cylinder solid body.

`topPosition` Vector

The top position to create the cylinder solid body.

`radius` ExpressionValueVariable

The radius of the cylinder.

`bodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BD_' will be generated and used. If booleanOperationType argument is other than 'None', this argument must be the existing <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> name.

`booleanOperationType` [BooleanOperationType](VM.API.Pre.BooleanOperationType.md)

The boolean operation type. If None, new <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> will be created. otherwise, New cylinder geometry will be merged to the existing <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> which has same name with 'name' argument.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new cylinder geometry. The default value is '0xBFAAAA'

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref>.

`isInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

'true' if it is interface body. Otherwise, 'false'.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'radius' value equal to or less than 0.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'bottomPosition' equal to 'topPosition'.

### <a id="VM_API_Pre_SolidBodyAPI_CreateSolidCylinder_VM_Managed_DAFUL_SubSystemDocument_VM_Vector_VM_Vector_System_String_"></a> CreateSolidCylinder\(SubSystemDocument, Vector, Vector, string\)

Create <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.BuilderCylinderSimple" data-throw-if-not-resolved="false"></xref> builder.

```csharp
public static Obj CreateSolidCylinder(this SubSystemDocument document, Vector bottomPosition, Vector topPosition, string bodyName)
```

#### Parameters

`document` SubSystemDocument

The document to create the cylinder solid body.

`bottomPosition` Vector

The bottom position to create the cylinder solid body.

`topPosition` Vector

The top position to create the cylinder solid body.

`bodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BD_' will be generated and used. If booleanOperationType argument is other than 'None', this argument must be the existing <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> name.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> object created by this API.

### <a id="VM_API_Pre_SolidBodyAPI_CreateSolidSphere_VM_Managed_DAFUL_SubSystemDocument_VM_Vector_VM_Models_Pre_ExpressionValueVariable_System_String_VM_API_Pre_BooleanOperationType_System_Nullable_System_Drawing_Color__VM_Managed_SymmetricType_System_Boolean_"></a> CreateSolidSphere\(SubSystemDocument, Vector, ExpressionValueVariable, string, BooleanOperationType, Color?, SymmetricType, bool\)

Create <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.BuilderSphereSimple" data-throw-if-not-resolved="false"></xref> builder.

```csharp
[NotNull(new string[] { "document" })]
[GreaterThanZero(new string[] { "radius" })]
public static Obj CreateSolidSphere(this SubSystemDocument document, Vector centerPosition, ExpressionValueVariable radius, string bodyName = "", BooleanOperationType booleanOperationType = BooleanOperationType.None, Color? color = null, SymmetricType symmetricType = SymmetricType.None, bool isInterface = false)
```

#### Parameters

`document` SubSystemDocument

The document to create the sphere solid body.

`centerPosition` Vector

The center position to create the sphere solid body.

`radius` ExpressionValueVariable

The radius of the sphere.

`bodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BD_' will be generated and used. If booleanOperationType argument is other than 'None', this argument must be the existing <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> name.

`booleanOperationType` [BooleanOperationType](VM.API.Pre.BooleanOperationType.md)

The boolean operation type. If None, new <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> will be created. otherwise, New sphere geometry will be merged to the existing <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> which has same name with 'name' argument.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new sphere geometry. The default value is '0xBFAAAA'

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref>.

`isInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

'true' if it is interface body. Otherwise, 'false'.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'radius' value equal to or less than 0.

### <a id="VM_API_Pre_SolidBodyAPI_CreateSolidSphere_VM_Managed_DAFUL_SubSystemDocument_VM_Vector_System_String_"></a> CreateSolidSphere\(SubSystemDocument, Vector, string\)

Create <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.BuilderSphereSimple" data-throw-if-not-resolved="false"></xref> builder.

```csharp
public static Obj CreateSolidSphere(this SubSystemDocument document, Vector centerPosition, string bodyName)
```

#### Parameters

`document` SubSystemDocument

The document to create the sphere solid body.

`centerPosition` Vector

The center position to create the sphere solid body.

`bodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BD_' will be generated and used. If booleanOperationType argument is other than 'None', this argument must be the existing <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> name.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> object created by this API.

### <a id="VM_API_Pre_SolidBodyAPI_CreateSolidTriPlate_VM_Managed_DAFUL_SubSystemDocument_VM_Vector_VM_Vector_VM_Vector_VM_Models_Pre_ExpressionValueVariable_System_String_VM_API_Pre_BooleanOperationType_System_Nullable_System_Drawing_Color__VM_Managed_SymmetricType_System_Boolean_"></a> CreateSolidTriPlate\(SubSystemDocument, Vector, Vector, Vector, ExpressionValueVariable, string, BooleanOperationType, Color?, SymmetricType, bool\)

Create <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.BuilderTriPlateSimple" data-throw-if-not-resolved="false"></xref> builder.

```csharp
[NotNull(new string[] { "document" })]
[GreaterThanZero(new string[] { "height" })]
public static Obj CreateSolidTriPlate(this SubSystemDocument document, Vector firstPosition, Vector secondPosition, Vector thirdPosition, ExpressionValueVariable height, string bodyName = "", BooleanOperationType booleanOperationType = BooleanOperationType.None, Color? color = null, SymmetricType symmetricType = SymmetricType.None, bool isInterface = false)
```

#### Parameters

`document` SubSystemDocument

The document to create the triplate solid body.

`firstPosition` Vector

The first position to create the triplate solid body.

`secondPosition` Vector

The second position to create the triplate solid body.

`thirdPosition` Vector

The third position to create the triplate solid body.

`height` ExpressionValueVariable

The height of the triplate.

`bodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BD_' will be generated and used. If booleanOperationType argument is other than 'None', this argument must be the existing <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> name.

`booleanOperationType` [BooleanOperationType](VM.API.Pre.BooleanOperationType.md)

The boolean operation type. If None, new <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> will be created. otherwise, New triplate geometry will be merged to the existing <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> which has same name with 'name' argument.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of the new triplate geometry. The default value is '0xBFAAAA'

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref>.

`isInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

'true' if it is interface body. Otherwise, 'false'.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' is null.

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

Will be thrown if 'height' value equal to or less than 0.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the condition of triangle's crossproduct is not met.

### <a id="VM_API_Pre_SolidBodyAPI_CreateSolidTriPlate_VM_Managed_DAFUL_SubSystemDocument_VM_Vector_VM_Vector_VM_Vector_System_String_"></a> CreateSolidTriPlate\(SubSystemDocument, Vector, Vector, Vector, string\)

Create <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> with <xref href="VM.Managed.CAD.BuilderTriPlateSimple" data-throw-if-not-resolved="false"></xref> builder.

```csharp
public static Obj CreateSolidTriPlate(this SubSystemDocument document, Vector firstPosition, Vector secondPosition, Vector thirdPosition, string bodyName)
```

#### Parameters

`document` SubSystemDocument

The document to create the triplate solid body.

`firstPosition` Vector

The first position to create the triplate solid body.

`secondPosition` Vector

The second position to create the triplate solid body.

`thirdPosition` Vector

The third position to create the triplate solid body.

`bodyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref>. If empty, default name starts with 'BD_' will be generated and used. If booleanOperationType argument is other than 'None', this argument must be the existing <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> name.

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> object created by this API.

### <a id="VM_API_Pre_SolidBodyAPI_UpdateBody_VM_API_Pre_Obj_"></a> UpdateBody\(Obj\)

Update body.

```csharp
[NotNullObj(new string[] { "body" })]
public static void UpdateBody(this Obj body)
```

#### Parameters

`body` [Obj](VM.API.Pre.Obj.md)

The body to be updated.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'body' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'body' argument is not empty and type of 'body' is not <xref href="VM.Managed.DAFUL.SolidBody" data-throw-if-not-resolved="false"></xref> or <xref href="VM.Managed.CAD.Body" data-throw-if-not-resolved="false"></xref>.

