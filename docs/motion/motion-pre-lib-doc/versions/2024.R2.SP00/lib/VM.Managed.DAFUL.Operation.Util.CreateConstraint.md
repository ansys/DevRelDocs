# Class CreateConstraint

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

### CreateConstraint\(\)

```csharp
public CreateConstraint()
```

## Methods

### CreateBush\(Document, IConnectable, IConnectable, PointBase, OMatrix, string\)

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

### CreateBush\(Document, IConnectable, IConnectable, PointBase, DirectionBase, string, bool\)

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

### CreateBush\(Document, IConnectable, IConnectable, TMatrix, TMatrix, string, bool, bool\)

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

### CreateFixed\(Document3D, IConnectable, IConnectable, PointBase, string\)

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

### CreateFixed\(Document, IConnectable, IConnectable, PointBase, OMatrix, string, bool, bool\)

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

### CreateFixed\(Document, IConnectable, IConnectable, TMatrix, TMatrix, string, bool, bool\)

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

### CreateFixedToGround\(Document3D, IConnectable, PointBase, string\)

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

### CreateGeneralConnector\(Document3D, string, IConnectable, IConnectable, ConnectorType, bool, double\)

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

### CreateGeneralConnector\(Document3D, string, Body, Body, ConnectorType, bool, double\)

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

### CreateGeneralConnector\(Document3D, IConnectable, IConnectable, PointBase, DirectionBase, string, ConnectorType, bool\)

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

### CreateGeneralFixedToGround\(Document3D, IConnectable, PointBase, string, bool\)

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

### CreateGeneralRevolute\(Document, IConnectable, IConnectable, PointBase, DirectionBase, string, DriverFunction, bool\)

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

### CreateGeneralRevolute\(Document, IConnectable, IConnectable, TMatrix, TMatrix, string, DriverFunction, bool, bool\)

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

### CreateGeneralRevolute\(SubSystemDocument, IObjectBase, IObjectBase, PointBase, DirectionBase, string, bool, Function, MotionType\)

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

### CreateGeneralTranslational\(Document3D, IConnectable, IConnectable, PointBase, DirectionBase, string, bool\)

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

### CreateRevolute\(Document3D, IConnectable, IConnectable, PointBase, DirectionBase, string\)

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

### CreateTranslational\(Document3D, IConnectable, IConnectable, PointBase, DirectionBase, string\)

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

### CreateTranslational\(SubSystemDocument, IObjectBase, IObjectBase, PointBase, DirectionBase, string, DesignVariable, Function, DesignVariable, DesignVariable, bool, bool\)

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

### GetConnectorParameter\(IDocument, string, IConnectable, IConnectable, ParameterType, double, ref object\[\]\)

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

### GetConnectorParameter\(IDocument, string, Body, Body, ParameterType, double, ref object\[\]\)

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


