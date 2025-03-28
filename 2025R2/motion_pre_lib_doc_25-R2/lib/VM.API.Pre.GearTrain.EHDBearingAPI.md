# <a id="VM_API_Pre_GearTrain_EHDBearingAPI"></a> Class EHDBearingAPI

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This class implements APIs for <xref href="VM.Managed.DAFUL.Bearing.EHDBearing" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class EHDBearingAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EHDBearingAPI](VM.API.Pre.GearTrain.EHDBearingAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_GearTrain_EHDBearingAPI_CreateEHDBearing_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_VM_Vector_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_System_String_"></a> CreateEHDBearing\(GearTrainDocument, Obj, Obj, Vector, Vector, Vector, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, string\)

Create <xref href="VM.Managed.DAFUL.Bearing.EHDBearing" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "baseGeometry", "actionGeometry" })]
[NotZeroMagnitude(new string[] { "zAxis", "xAxis" })]
[GreaterThanZero(new string[] { "baseRadius", "actionRadius", "width" })]
public static Obj CreateEHDBearing(this GearTrainDocument document, Obj baseGeometry, Obj actionGeometry, Vector position, Vector zAxis, Vector xAxis, ExpressionValueVariable baseRadius, ExpressionValueVariable actionRadius, ExpressionValueVariable width, string ehdBearingName = "")
```

#### Parameters

`document` GearTrainDocument

The document to create the ehd bearing.

`baseGeometry` Obj

The base geometry. The type is <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

`actionGeometry` Obj

The action geometry. The type is <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

`position` Vector

The position.

`zAxis` Vector

The z axis.

`xAxis` Vector

The x axis.

`baseRadius` ExpressionValueVariable

The base radius.

`actionRadius` ExpressionValueVariable

The action radius.

`width` ExpressionValueVariable

The width.

`ehdBearingName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the ehd bearing. If empty, default name starts with 'EHDBearing_' will be generated and used.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Bearing.EHDBearing" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'baseGeometry' or 'actionGeometry' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of zAxis' or 'xAxis' is 0.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if zAxis' is equal to 'xAxis'.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the 'baseRadius' is less than 'actionRadius'.

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if type of 'baseGeometry' is not <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if type of 'actionGeometry' is not <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_EHDBearingAPI_CreateEHDBearing_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_VM_Vector_VM_Vector_VM_Vector_VM_Vector_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_System_String_"></a> CreateEHDBearing\(GearTrainDocument, Obj, Obj, Vector, Vector, Vector, Vector, Vector, Vector, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, string\)

Create <xref href="VM.Managed.DAFUL.Bearing.EHDBearing" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "baseGeometry", "actionGeometry" })]
[NotZeroMagnitude(new string[] { "baseZAxis", "baseXAxis", "actionZAxis", "actionXAxis" })]
[GreaterThanZero(new string[] { "baseRadius", "actionRadius", "width" })]
public static Obj CreateEHDBearing(this GearTrainDocument document, Obj baseGeometry, Obj actionGeometry, Vector basePosition, Vector baseZAxis, Vector baseXAxis, Vector actionPosition, Vector actionZAxis, Vector actionXAxis, ExpressionValueVariable baseRadius, ExpressionValueVariable actionRadius, ExpressionValueVariable width, string ehdBearingName = "")
```

#### Parameters

`document` GearTrainDocument

The document to create the ehd bearing.

`baseGeometry` Obj

The base geometry. The type is <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

`actionGeometry` Obj

The action geometry. The type is <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

`basePosition` Vector

The base position.

`baseZAxis` Vector

The base z axis.

`baseXAxis` Vector

The base x axis.

`actionPosition` Vector

The action position.

`actionZAxis` Vector

The action z axis.

`actionXAxis` Vector

The action x axis.

`baseRadius` ExpressionValueVariable

The base radius.

`actionRadius` ExpressionValueVariable

The action radius.

`width` ExpressionValueVariable

The width.

`ehdBearingName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the ehd bearing. If empty, default name starts with 'EHDBearing_' will be generated and used.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.Bearing.EHDBearing" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'baseGeometry' or 'actionGeometry' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of baseZAxis' or 'baseXAxis' or 'actionZAxis' or 'actionXAxis' is 0.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if baseZAxis' is equal to 'baseXAxis'.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if actionZAxis' is equal to 'actionXAxis'.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the 'baseRadius' is less than 'actionRadius'.

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if type of 'baseGeometry' is not <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if type of 'actionGeometry' is not <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

