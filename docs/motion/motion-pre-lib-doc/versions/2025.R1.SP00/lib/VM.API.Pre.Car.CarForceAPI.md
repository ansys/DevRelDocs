#  Class CarForceAPI

Namespace: [VM.API.Pre.Car](VM.API.Pre.Car.md)  
Assembly: VM.API.Pre.Car.dll  

This class implements APIs for car force.

```csharp
public static class CarForceAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CarForceAPI](VM.API.Pre.Car.CarForceAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_Car_CarForceAPI_CreateBumpStop_VM_Managed_IPostTemplateBasedDocument_System_String_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_System_String_VM_Managed_SymmetricType_"></a> CreateBumpStop\(IPostTemplateBasedDocument, string, Obj, Obj, Vector, Vector, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Car.Force.Bumpstop" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
[ExistFile(new string[] { "propertyFilePath" })]
public static Obj CreateBumpStop(this IPostTemplateBasedDocument document, string propertyFilePath, Obj baseEntity, Obj actionEntity, Vector basePosition, Vector actionPosition, string name = "", SymmetricType symmetricType = SymmetricType.Left)
```

#### Parameters

`document` IPostTemplateBasedDocument

The <xref href="VM.Managed.IPostTemplateBasedDocument" data-throw-if-not-resolved="false"></xref> to create a bump stop.

`propertyFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The bump stop property file path.

`baseEntity` Obj

The base entity of a bump stop.

`actionEntity` Obj

The action entity of a bump stop.

`basePosition` Vector

The base position of a bump stop.

`actionPosition` Vector

The action position of a bump stop.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a bump stop.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Car.Force.Bumpstop" data-throw-if-not-resolved="false"></xref>.

#### Returns

 Obj

the new <xref href="VM.Managed.DAFUL.Car.Force.Bumpstop" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'baseEntity', 'actionEntity' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if extension of 'propertyFilePath' is not .cpfbsxml.

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if 'propertyFilePath' does not exist.

### <a id="VM_API_Pre_Car_CarForceAPI_CreateBush_VM_Managed_IPostTemplateBasedDocument_System_String_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_System_Nullable_VM_OMatrix__System_String_VM_Managed_SymmetricType_"></a> CreateBush\(IPostTemplateBasedDocument, string, Obj, Obj, Vector, OMatrix?, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Force.Bush" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
[ExistFile(new string[] { "propertyFilePath" })]
public static Obj CreateBush(this IPostTemplateBasedDocument document, string propertyFilePath, Obj baseEntity, Obj actionEntity, Vector basePosition, OMatrix? orientation = null, string name = "", SymmetricType symmetricType = SymmetricType.Left)
```

#### Parameters

`document` IPostTemplateBasedDocument

The <xref href="VM.Managed.IPostTemplateBasedDocument" data-throw-if-not-resolved="false"></xref> to create a bush.

`propertyFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The bush property file path.

`baseEntity` Obj

The base entity of a bush.

`actionEntity` Obj

The action entity of a bush.

`basePosition` Vector

The base position of a bush.

`orientation` OMatrix?

The orientation of a bush force. The default value is identity.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a bush.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Force.Bush" data-throw-if-not-resolved="false"></xref>.

#### Returns

 Obj

the new <xref href="VM.Managed.DAFUL.Force.Bush" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'baseEntity', 'actionEntity' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if extension of 'propertyFilePath' is not .dfpfbxml.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of 'orientation' is 0.

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if 'propertyFilePath' does not exist.

### <a id="VM_API_Pre_Car_CarForceAPI_CreateDamper_VM_Managed_IPostTemplateBasedDocument_System_String_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_System_String_VM_Managed_SymmetricType_"></a> CreateDamper\(IPostTemplateBasedDocument, string, Obj, Obj, Vector, Vector, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Car.Force.Damper" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
[ExistFile(new string[] { "propertyFilePath" })]
public static Obj CreateDamper(this IPostTemplateBasedDocument document, string propertyFilePath, Obj baseEntity, Obj actionEntity, Vector basePosition, Vector actionPosition, string name = "", SymmetricType symmetricType = SymmetricType.Left)
```

#### Parameters

`document` IPostTemplateBasedDocument

The <xref href="VM.Managed.IPostTemplateBasedDocument" data-throw-if-not-resolved="false"></xref> to create a damper.

`propertyFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The damper property file path.

`baseEntity` Obj

The base entity of a damper.

`actionEntity` Obj

The action entity of a damper.

`basePosition` Vector

The base position of a damper.

`actionPosition` Vector

The action position of a damper.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a damper.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Car.Force.Damper" data-throw-if-not-resolved="false"></xref>.

#### Returns

 Obj

the new <xref href="VM.Managed.DAFUL.Car.Force.Damper" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'baseEntity', 'actionEntity' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if extension of 'propertyFilePath' is not .cpfdxml.

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if 'propertyFilePath' does not exist.

### <a id="VM_API_Pre_Car_CarForceAPI_CreateReboundStop_VM_Managed_IPostTemplateBasedDocument_System_String_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_System_String_VM_Managed_SymmetricType_"></a> CreateReboundStop\(IPostTemplateBasedDocument, string, Obj, Obj, Vector, Vector, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Car.Force.Reboundstop" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
[ExistFile(new string[] { "propertyFilePath" })]
public static Obj CreateReboundStop(this IPostTemplateBasedDocument document, string propertyFilePath, Obj baseEntity, Obj actionEntity, Vector basePosition, Vector actionPosition, string name = "", SymmetricType symmetricType = SymmetricType.Left)
```

#### Parameters

`document` IPostTemplateBasedDocument

The <xref href="VM.Managed.IPostTemplateBasedDocument" data-throw-if-not-resolved="false"></xref> to create a rebound stop.

`propertyFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The rebound stop property file path.

`baseEntity` Obj

The base entity of a rebound stop.

`actionEntity` Obj

The action entity of a rebound stop.

`basePosition` Vector

The base position of a rebound stop.

`actionPosition` Vector

The action position of a rebound stop.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a rebound stop.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Car.Force.Reboundstop" data-throw-if-not-resolved="false"></xref>.

#### Returns

 Obj

the new <xref href="VM.Managed.DAFUL.Car.Force.Reboundstop" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'baseEntity', 'actionEntity' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if extension of 'propertyFilePath' is not .cpfrbsxml.

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if 'propertyFilePath' does not exist.

### <a id="VM_API_Pre_Car_CarForceAPI_CreateSpring_VM_Managed_IPostTemplateBasedDocument_System_String_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_System_String_VM_Managed_SymmetricType_"></a> CreateSpring\(IPostTemplateBasedDocument, string, Obj, Obj, Vector, Vector, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Car.Force.Spring" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "baseEntity", "actionEntity" })]
[MatchTypeObj(new object[] { "baseEntity", typeof(IConnectable), "actionEntity", typeof(IConnectable) })]
[ExistFile(new string[] { "propertyFilePath" })]
public static Obj CreateSpring(this IPostTemplateBasedDocument document, string propertyFilePath, Obj baseEntity, Obj actionEntity, Vector basePosition, Vector actionPosition, string name = "", SymmetricType symmetricType = SymmetricType.Left)
```

#### Parameters

`document` IPostTemplateBasedDocument

The <xref href="VM.Managed.IPostTemplateBasedDocument" data-throw-if-not-resolved="false"></xref> to create a spring.

`propertyFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The spring property file path.

`baseEntity` Obj

The base entity of a spring.

`actionEntity` Obj

The action entity of a spring.

`basePosition` Vector

The base position of a spring.

`actionPosition` Vector

The action position of a spring.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a spring.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Car.Force.Spring" data-throw-if-not-resolved="false"></xref>.

#### Returns

 Obj

the new <xref href="VM.Managed.DAFUL.Car.Force.Spring" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'baseEntity', 'actionEntity' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the type of 'baseEntity', 'actionEntity' is not <xref href="VM.Managed.DAFUL.IConnectable" data-throw-if-not-resolved="false"></xref>.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if extension of 'propertyFilePath' is not .cpfsxml.

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if 'propertyFilePath' does not exist.

### <a id="VM_API_Pre_Car_CarForceAPI_CreateTire_VM_Managed_DAFUL_SubSystemDocument_System_String_VM_TMatrix_VM_Managed_DAFUL_Tire_WheelBodyBase_SideType_System_String_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_System_Drawing_Color__VM_Managed_SymmetricType_System_Boolean_"></a> CreateTire\(SubSystemDocument, string, TMatrix, SideType, string, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, ExpressionValueVariable?, Color?, SymmetricType, bool\)

Create <xref href="VM.Managed.DAFUL.Tire.Car.Force.TireCar" data-throw-if-not-resolved="false"></xref>

```csharp
[NotNull(new string[] { "subSystemDocument" })]
[ExistFile(new string[] { "tirePropertyFile" })]
public static Obj CreateTire(this SubSystemDocument subSystemDocument, string tirePropertyFile, TMatrix transform, WheelBodyBase.SideType side = SideType.Left, string name = "", ExpressionValueVariable? cmOffset = null, ExpressionValueVariable? mass = null, ExpressionValueVariable? lxxlyy = null, ExpressionValueVariable? lzz = null, ExpressionValueVariable? wheelCenterOffset = null, Color? color = null, SymmetricType symmetricType = SymmetricType.Left, bool isInterface = false)
```

#### Parameters

`subSystemDocument` SubSystemDocument

The <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> to create a  tire force.

`tirePropertyFile` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tire property file of a tire force.

`transform` TMatrix

The transform of a tire force.

`side` WheelBodyBase.SideType

The side of a tire force.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a leaf spring.

`cmOffset` ExpressionValueVariable?

The CM Offset of a tire force.

`mass` ExpressionValueVariable?

The mass of a tire force.

`lxxlyy` ExpressionValueVariable?

The lxxlyy of a tire force.

`lzz` ExpressionValueVariable?

The lzz of a tire force.

`wheelCenterOffset` ExpressionValueVariable?

The wheel center offset of a tire force.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)?

The color of a tire force.

`symmetricType` SymmetricType

The symmetric type of the new Tire.

`isInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

'true' if it is interface body. Otherwise, 'false'.

#### Returns

 Obj

the new Tire object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'subSystemDocument' argument is null.

 [FileNotFoundException](https://learn.microsoft.com/dotnet/api/system.io.filenotfoundexception)

Will be thrown if 'tirePropertyFile' file does not exist.

