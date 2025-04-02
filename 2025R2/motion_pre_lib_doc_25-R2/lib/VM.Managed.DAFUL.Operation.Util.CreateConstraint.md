#  Class CreateConstraint

Namespace: [VM.Managed.DAFUL.Operation.Util](VM.Managed.DAFUL.Operation.Util.md)  
Assembly: VMOpCore.dll  

The utility class for the constraints creation.

```csharp
public class CreateConstraint
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CreateConstraint](VM.Managed.DAFUL.Operation.Util.CreateConstraint.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Operation_Util_CreateConstraint__ctor"></a> CreateConstraint\(\)

```csharp
public CreateConstraint()
```

## Methods

### <a id="VM_Managed_DAFUL_Operation_Util_CreateConstraint_CreateBush_VM_Managed_Document_VM_Managed_DAFUL_IConnectable_VM_Managed_DAFUL_IConnectable_VM_Managed_PointBase_VM_Managed_OMatrix_System_String_"></a> CreateBush\(Document, IConnectable, IConnectable, PointBase, OMatrix, string\)

Create the bushing.

```csharp
public static General CreateBush(Document document, IConnectable baseConnectable, IConnectable actionConnectable, PointBase position, OMatrix direction, string strPrefixName)
```

#### Parameters

`document` Document

`baseConnectable` IConnectable

`actionConnectable` IConnectable

`position` PointBase

`direction` OMatrix

`strPrefixName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 General

### <a id="VM_Managed_DAFUL_Operation_Util_CreateConstraint_CreateBush_VM_Managed_Document_VM_Managed_DAFUL_IConnectable_VM_Managed_DAFUL_IConnectable_VM_Managed_PointBase_VM_Managed_DirectionBase_System_String_System_Boolean_"></a> CreateBush\(Document, IConnectable, IConnectable, PointBase, DirectionBase, string, bool\)

Create the bushing.

```csharp
public static General CreateBush(Document document, IConnectable baseConnectable, IConnectable actionConnectable, PointBase position, DirectionBase dirZ, string strPrefixName, bool getNewEntityName = false)
```

#### Parameters

`document` Document

`baseConnectable` IConnectable

`actionConnectable` IConnectable

`position` PointBase

`dirZ` DirectionBase

`strPrefixName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`getNewEntityName` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Flag for creating a new entity if there is already an entity with the same name

#### Returns

 General

### <a id="VM_Managed_DAFUL_Operation_Util_CreateConstraint_CreateBush_VM_Managed_Document_VM_Managed_DAFUL_IConnectable_VM_Managed_DAFUL_IConnectable_VM_TMatrix_VM_TMatrix_System_String_System_Boolean_System_Boolean_"></a> CreateBush\(Document, IConnectable, IConnectable, TMatrix, TMatrix, string, bool, bool\)

Create the bushing.

```csharp
public static General CreateBush(Document document, IConnectable baseConnectable, IConnectable actionConnectable, TMatrix baseTransform, TMatrix actionTransform, string name, bool isPrefix = true, bool addToDocument = true)
```

#### Parameters

`document` Document

`baseConnectable` IConnectable

`actionConnectable` IConnectable

`baseTransform` TMatrix

The base transform.

`actionTransform` TMatrix

The action transform.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The fixed joint name.

`isPrefix` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`addToDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Flag for add created element to document.

#### Returns

 General

### <a id="VM_Managed_DAFUL_Operation_Util_CreateConstraint_CreateFixed_VM_Managed_Document3D_VM_Managed_DAFUL_IConnectable_VM_Managed_DAFUL_IConnectable_VM_Managed_PointBase_System_String_"></a> CreateFixed\(Document3D, IConnectable, IConnectable, PointBase, string\)

Create the fixed joint.

```csharp
public static Fixed CreateFixed(Document3D activeDocument, IConnectable baseConnectable, IConnectable actionConnectable, PointBase ptOrigin, string strPrefixName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`baseConnectable` IConnectable

The base connectable.

`actionConnectable` IConnectable

The action connectable.

`ptOrigin` PointBase

The location of fixed joint.

`strPrefixName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The fixed joint prefix name.

#### Returns

 Fixed

The new fixed joint.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateConstraint_CreateFixed_VM_Managed_Document_VM_Managed_DAFUL_IConnectable_VM_Managed_DAFUL_IConnectable_VM_Managed_PointBase_VM_Managed_OMatrix_System_String_System_Boolean_System_Boolean_"></a> CreateFixed\(Document, IConnectable, IConnectable, PointBase, OMatrix, string, bool, bool\)

Create the fixed joint.

```csharp
public static General CreateFixed(Document document, IConnectable baseConnectable, IConnectable actionConnectable, PointBase ptOrigin, OMatrix matO, string name, bool isPrefix = true, bool addToDocument = true)
```

#### Parameters

`document` Document

The active document.

`baseConnectable` IConnectable

The base connectable.

`actionConnectable` IConnectable

The action connectable.

`ptOrigin` PointBase

The location of fixed joint.

`matO` OMatrix

The orientation matrix.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The fixed joint name.

`isPrefix` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`addToDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Flag for add created element to document.

#### Returns

 General

The new fixed joint.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateConstraint_CreateFixed_VM_Managed_Document_VM_Managed_DAFUL_IConnectable_VM_Managed_DAFUL_IConnectable_VM_TMatrix_VM_TMatrix_System_String_System_Boolean_System_Boolean_"></a> CreateFixed\(Document, IConnectable, IConnectable, TMatrix, TMatrix, string, bool, bool\)

Create the fixed joint.

```csharp
public static General CreateFixed(Document document, IConnectable baseConnectable, IConnectable actionConnectable, TMatrix baseTransform, TMatrix actionTransform, string name, bool isPrefix = true, bool addToDocument = true)
```

#### Parameters

`document` Document

The active document.

`baseConnectable` IConnectable

The base connectable.

`actionConnectable` IConnectable

The action connectable.

`baseTransform` TMatrix

The base transform.

`actionTransform` TMatrix

The action transform.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The fixed joint name.

`isPrefix` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`addToDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Flag for add created element to document.

#### Returns

 General

The new fixed joint.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateConstraint_CreateFixedToGround_VM_Managed_Document3D_VM_Managed_DAFUL_IConnectable_VM_Managed_PointBase_System_String_"></a> CreateFixedToGround\(Document3D, IConnectable, PointBase, string\)

Create the fixed joint to ground.

```csharp
public static Fixed CreateFixedToGround(Document3D activeDocument, IConnectable actionConnectable, PointBase ptOrigin, string strPrefixName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`actionConnectable` IConnectable

The action connectable.

`ptOrigin` PointBase

The location of fixed joint.

`strPrefixName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The fixed joint prefix name.

#### Returns

 Fixed

The new fixed joint.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateConstraint_CreateGeneralConnector_VM_Managed_Document3D_System_String_VM_Managed_DAFUL_IConnectable_VM_Managed_DAFUL_IConnectable_VM_Models_Pre_Connections_PropertyGeneral_ConnectorType_System_Boolean_System_Double_"></a> CreateGeneralConnector\(Document3D, string, IConnectable, IConnectable, ConnectorType, bool, double\)

Create general connector

```csharp
public static General CreateGeneralConnector(Document3D doc, string strName, IConnectable connectableFirst, IConnectable connectableSecond, PropertyGeneral.ConnectorType type, bool bAuto, double dTolerance)
```

#### Parameters

`doc` Document3D

The document

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name

`connectableFirst` IConnectable

The base connectable

`connectableSecond` IConnectable

The action connectable

`type` PropertyGeneral.ConnectorType

The connector type

`bAuto` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The auto flag

`dTolerance` [double](https://learn.microsoft.com/dotnet/api/system.double)

The tolerance

#### Returns

 General

### <a id="VM_Managed_DAFUL_Operation_Util_CreateConstraint_CreateGeneralConnector_VM_Managed_Document3D_System_String_VM_Managed_CAD_Body_VM_Managed_CAD_Body_VM_Models_Pre_Connections_PropertyGeneral_ConnectorType_System_Boolean_System_Double_"></a> CreateGeneralConnector\(Document3D, string, Body, Body, ConnectorType, bool, double\)

Create general connector

```csharp
public static General CreateGeneralConnector(Document3D doc, string strName, Body bodyFirst, Body bodySecond, PropertyGeneral.ConnectorType type, bool bAuto, double dTolerance)
```

#### Parameters

`doc` Document3D

The document

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name

`bodyFirst` Body

The base connectable

`bodySecond` Body

The action connectable

`type` PropertyGeneral.ConnectorType

The connector type

`bAuto` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The auto flag

`dTolerance` [double](https://learn.microsoft.com/dotnet/api/system.double)

The tolerance

#### Returns

 General

### <a id="VM_Managed_DAFUL_Operation_Util_CreateConstraint_CreateGeneralConnector_VM_Managed_Document3D_VM_Managed_DAFUL_IConnectable_VM_Managed_DAFUL_IConnectable_VM_Managed_PointBase_VM_Managed_DirectionBase_System_String_VM_Models_Pre_Connections_PropertyGeneral_ConnectorType_System_Boolean_"></a> CreateGeneralConnector\(Document3D, IConnectable, IConnectable, PointBase, DirectionBase, string, ConnectorType, bool\)

Create the general connector.

```csharp
public static General CreateGeneralConnector(Document3D activeDocument, IConnectable baseConnectable, IConnectable actionConnectable, PointBase ptOrigin, DirectionBase dirZ, string name, PropertyGeneral.ConnectorType connectorType, bool getNewEntityName = false)
```

#### Parameters

`activeDocument` Document3D

The active document.

`baseConnectable` IConnectable

The base connectable.

`actionConnectable` IConnectable

The action connectable.

`ptOrigin` PointBase

The location of revolute joint.

`dirZ` DirectionBase

The z-direction of revolute joint.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The revolute joint prefix name.

`connectorType` PropertyGeneral.ConnectorType

The connector type

`getNewEntityName` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Flag for creating a new entity if there is already an entity with the same name

#### Returns

 General

The new revolute joint.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateConstraint_CreateGeneralFixedToGround_VM_Managed_Document3D_VM_Managed_DAFUL_IConnectable_VM_Managed_PointBase_System_String_System_Boolean_"></a> CreateGeneralFixedToGround\(Document3D, IConnectable, PointBase, string, bool\)

Create the fixed joint to ground.

```csharp
public static General CreateGeneralFixedToGround(Document3D activeDocument, IConnectable actionConnectable, PointBase ptOrigin, string name, bool isPrefix = false)
```

#### Parameters

`activeDocument` Document3D

The active document.

`actionConnectable` IConnectable

The action connectable.

`ptOrigin` PointBase

The location of fixed joint.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The fixed joint prefix name.

`isPrefix` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 General

The new fixed joint.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateConstraint_CreateGeneralRevolute_VM_Managed_Document_VM_Managed_DAFUL_IConnectable_VM_Managed_DAFUL_IConnectable_VM_Managed_PointBase_VM_Managed_DirectionBase_System_String_VM_Managed_DAFUL_Constraints_DriverFunction_System_Boolean_"></a> CreateGeneralRevolute\(Document, IConnectable, IConnectable, PointBase, DirectionBase, string, DriverFunction, bool\)

Create the revolute joint.

```csharp
public static General CreateGeneralRevolute(Document document, IConnectable baseConnectable, IConnectable actionConnectable, PointBase ptOrigin, DirectionBase dirZ, string name, DriverFunction driverFunction, bool getNewEntityName = false)
```

#### Parameters

`document` Document

The active document.

`baseConnectable` IConnectable

The base connectable.

`actionConnectable` IConnectable

The action connectable.

`ptOrigin` PointBase

The location of revolute joint.

`dirZ` DirectionBase

The z-direction of revolute joint.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The revolute joint prefix name.

`driverFunction` DriverFunction

`getNewEntityName` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Flag for creating a new entity if there is already an entity with the same name

#### Returns

 General

The new revolute joint.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateConstraint_CreateGeneralRevolute_VM_Managed_Document_VM_Managed_DAFUL_IConnectable_VM_Managed_DAFUL_IConnectable_VM_TMatrix_VM_TMatrix_System_String_VM_Managed_DAFUL_Constraints_DriverFunction_System_Boolean_System_Boolean_"></a> CreateGeneralRevolute\(Document, IConnectable, IConnectable, TMatrix, TMatrix, string, DriverFunction, bool, bool\)

Create the revolute joint.

```csharp
public static General CreateGeneralRevolute(Document document, IConnectable baseConnectable, IConnectable actionConnectable, TMatrix baseTransform, TMatrix actionTransform, string name, DriverFunction driverFunction, bool isPrefix = true, bool addToDocument = true)
```

#### Parameters

`document` Document

The active document.

`baseConnectable` IConnectable

The base connectable.

`actionConnectable` IConnectable

The action connectable.

`baseTransform` TMatrix

The base transform.

`actionTransform` TMatrix

The action transform.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The fixed joint name.

`driverFunction` DriverFunction

`isPrefix` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`addToDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Flag for add created element to document.

#### Returns

 General

The new revolute joint.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateConstraint_CreateGeneralRevolute_VM_Managed_DAFUL_SubSystemDocument_VM_Models_Pre_IObjectBase_VM_Models_Pre_IObjectBase_VM_Managed_PointBase_VM_Managed_DirectionBase_System_String_System_Boolean_VM_Managed_DAFUL_Function_VM_Managed_DAFUL_Constraints_DriverFunction_MotionType_"></a> CreateGeneralRevolute\(SubSystemDocument, IObjectBase, IObjectBase, PointBase, DirectionBase, string, bool, Function, MotionType\)

Create the revolute joint.

```csharp
public static General CreateGeneralRevolute(SubSystemDocument subSystemDocument, IObjectBase baseBody, IObjectBase actionBody, PointBase pointBase, DirectionBase direction, string name, bool getNewEntityName = false, Function function = null, DriverFunction.MotionType motionType = MotionType.Displacement)
```

#### Parameters

`subSystemDocument` SubSystemDocument

`baseBody` IObjectBase

`actionBody` IObjectBase

`pointBase` PointBase

`direction` DirectionBase

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`getNewEntityName` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Flag for creating a new entity if there is already an entity with the same name

`function` Function

`motionType` DriverFunction.MotionType

#### Returns

 General

### <a id="VM_Managed_DAFUL_Operation_Util_CreateConstraint_CreateGeneralTranslational_VM_Managed_Document3D_VM_Managed_DAFUL_IConnectable_VM_Managed_DAFUL_IConnectable_VM_Managed_PointBase_VM_Managed_DirectionBase_System_String_System_Boolean_"></a> CreateGeneralTranslational\(Document3D, IConnectable, IConnectable, PointBase, DirectionBase, string, bool\)

Create the translational joint.

```csharp
public static General CreateGeneralTranslational(Document3D activeDocument, IConnectable baseConnectable, IConnectable actionConnectable, PointBase ptOrigin, DirectionBase dirZ, string name, bool getNewEntityName = false)
```

#### Parameters

`activeDocument` Document3D

The active document.

`baseConnectable` IConnectable

The base connectable.

`actionConnectable` IConnectable

The action connectable.

`ptOrigin` PointBase

The location of translational joint.

`dirZ` DirectionBase

The z-direction of translational joint.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The translational joint prefix name.

`getNewEntityName` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Flag for creating a new entity if there is already an entity with the same name

#### Returns

 General

The new translational joint.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateConstraint_CreateRevolute_VM_Managed_Document3D_VM_Managed_DAFUL_IConnectable_VM_Managed_DAFUL_IConnectable_VM_Managed_PointBase_VM_Managed_DirectionBase_System_String_"></a> CreateRevolute\(Document3D, IConnectable, IConnectable, PointBase, DirectionBase, string\)

Create the revolute joint.

```csharp
public static Revolute CreateRevolute(Document3D activeDocument, IConnectable baseConnectable, IConnectable actionConnectable, PointBase ptOrigin, DirectionBase dirZ, string strPrefixName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`baseConnectable` IConnectable

The base connectable.

`actionConnectable` IConnectable

The action connectable.

`ptOrigin` PointBase

The location of revolute joint.

`dirZ` DirectionBase

The z-direction of revolute joint.

`strPrefixName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The revolute joint prefix name.

#### Returns

 Revolute

The new revolute joint.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateConstraint_CreateTranslational_VM_Managed_Document3D_VM_Managed_DAFUL_IConnectable_VM_Managed_DAFUL_IConnectable_VM_Managed_PointBase_VM_Managed_DirectionBase_System_String_"></a> CreateTranslational\(Document3D, IConnectable, IConnectable, PointBase, DirectionBase, string\)

Create the translational joint.

```csharp
public static Translational CreateTranslational(Document3D activeDocument, IConnectable baseConnectable, IConnectable actionConnectable, PointBase ptOrigin, DirectionBase dirZ, string strPrefixName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`baseConnectable` IConnectable

The base connectable.

`actionConnectable` IConnectable

The action connectable.

`ptOrigin` PointBase

The location of translational joint.

`dirZ` DirectionBase

The z-direction of translational joint.

`strPrefixName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The translational joint prefix name.

#### Returns

 Translational

The new translational joint.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateConstraint_CreateTranslational_VM_Managed_DAFUL_SubSystemDocument_VM_Models_Pre_IObjectBase_VM_Models_Pre_IObjectBase_VM_Managed_PointBase_VM_Managed_DirectionBase_System_String_VM_Managed_DesignVariable_VM_Managed_DAFUL_Function_VM_Managed_DesignVariable_VM_Managed_DesignVariable_System_Boolean_System_Boolean_"></a> CreateTranslational\(SubSystemDocument, IObjectBase, IObjectBase, PointBase, DirectionBase, string, DesignVariable, Function, DesignVariable, DesignVariable, bool, bool\)

Create the translational joint.

```csharp
public static General CreateTranslational(SubSystemDocument subSystemDocument, IObjectBase baseBody, IObjectBase actionBody, PointBase pointBase, DirectionBase direction, string name, DesignVariable functionValue, Function functionZero, DesignVariable restrict_k, DesignVariable restrict_c, bool usePlus, bool getNewEntityName = false)
```

#### Parameters

`subSystemDocument` SubSystemDocument

`baseBody` IObjectBase

`actionBody` IObjectBase

`pointBase` PointBase

`direction` DirectionBase

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`functionValue` DesignVariable

`functionZero` Function

`restrict_k` DesignVariable

`restrict_c` DesignVariable

`usePlus` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`getNewEntityName` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Flag for creating a new entity if there is already an entity with the same name

#### Returns

 General

### <a id="VM_Managed_DAFUL_Operation_Util_CreateConstraint_GetConnectorParameter_VM_Models_Pre_IDocument_System_String_VM_Managed_DAFUL_IConnectable_VM_Managed_DAFUL_IConnectable_VM_Managed_DAFUL_Operation_Util_CreateConstraint_ParameterType_System_Double_System_Object____"></a> GetConnectorParameter\(IDocument, string, IConnectable, IConnectable, ParameterType, double, ref object\[\]\)

Gets connector parameter.

```csharp
public static bool GetConnectorParameter(IDocument doc, string strName, IConnectable connectableFirst, IConnectable connectableSecond, CreateConstraint.ParameterType parameterType, double dTolerance, ref object[] pickedResults)
```

#### Parameters

`doc` IDocument

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`connectableFirst` IConnectable

`connectableSecond` IConnectable

`parameterType` [CreateConstraint](VM.Managed.DAFUL.Operation.Util.CreateConstraint.md).[ParameterType](VM.Managed.DAFUL.Operation.Util.CreateConstraint.ParameterType.md)

`dTolerance` [double](https://learn.microsoft.com/dotnet/api/system.double)

`pickedResults` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Operation_Util_CreateConstraint_GetConnectorParameter_VM_Models_Pre_IDocument_System_String_VM_Managed_CAD_Body_VM_Managed_CAD_Body_VM_Managed_DAFUL_Operation_Util_CreateConstraint_ParameterType_System_Double_System_Object____"></a> GetConnectorParameter\(IDocument, string, Body, Body, ParameterType, double, ref object\[\]\)

Gets connector parameter.

```csharp
public static bool GetConnectorParameter(IDocument doc, string strName, Body bodyFirst, Body bodySecond, CreateConstraint.ParameterType parameterType, double dTolerance, ref object[] pickedResults)
```

#### Parameters

`doc` IDocument

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`bodyFirst` Body

`bodySecond` Body

`parameterType` [CreateConstraint](VM.Managed.DAFUL.Operation.Util.CreateConstraint.md).[ParameterType](VM.Managed.DAFUL.Operation.Util.CreateConstraint.ParameterType.md)

`dTolerance` [double](https://learn.microsoft.com/dotnet/api/system.double)

`pickedResults` [object](https://learn.microsoft.com/dotnet/api/system.object)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

