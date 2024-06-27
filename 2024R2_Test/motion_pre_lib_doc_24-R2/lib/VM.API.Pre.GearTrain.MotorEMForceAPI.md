# Class MotorEMForceAPI

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This class implements APIs for <xref href="VM.Managed.DAFUL.GearTrain.Force.MotorEMForce" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class MotorEMForceAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MotorEMForceAPI](VM.API.Pre.GearTrain.MotorEMForceAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### CreateMotorEMForce\(GearTrainDocument, Obj, Obj, Vector, Vector, Vector, Obj, string\)

Create <xref href="VM.Managed.DAFUL.GearTrain.Force.MotorEMForce" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "statorBody", "rotorBody", "referenceOfRotational" })]
[NotZeroMagnitude(new string[] { "zAxis", "xAxis" })]
public static Obj CreateMotorEMForce(this GearTrainDocument document, Obj statorBody, Obj rotorBody, Vector position, Vector zAxis, Vector xAxis, Obj referenceOfRotational, string motorEMForceName = "")
```

#### Parameters

`document` GearTrainDocument

The document to create the motor em force.

`statorBody` Obj

The stator body. The type is <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

`rotorBody` Obj

The rotor body. The type is <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

`position` Vector

The position.

`zAxis` Vector

The z axis.

`xAxis` Vector

The x axis.

`referenceOfRotational` Obj

The reference of rotational. The type is <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

`motorEMForceName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the motor em force. If empty, default name starts with 'Motor_' will be generated and used.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.Force.MotorEMForce" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'statorBody' or 'rotorBody' or 'referenceOfRotational' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of zAxis' or 'xAxis' is 0.

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if type of 'statorBody' is not <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if type of 'rotorBody' is not <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if type of 'referenceOfRotational' is not <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

### CreateMotorEMForceForANSYSMotion\(GearTrainDocument, Obj, Obj, Vector, Vector, Vector, Obj, string\)

Create <xref href="VM.Managed.DAFUL.GearTrain.Force.MotorEMForce" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "statorBody", "rotorBody", "referenceOfRotational" })]
[NotZeroMagnitude(new string[] { "zAxis", "xAxis" })]
public static Obj CreateMotorEMForceForANSYSMotion(this GearTrainDocument document, Obj statorBody, Obj rotorBody, Vector position, Vector zAxis, Vector xAxis, Obj referenceOfRotational, string motorEMForceName = "")
```

#### Parameters

`document` GearTrainDocument

The document to create the motor em force for ANSYS Motion.

`statorBody` Obj

The stator body. The type is <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

`rotorBody` Obj

The rotor body. The type is <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

`position` Vector

The position.

`zAxis` Vector

The z axis.

`xAxis` Vector

The x axis.

`referenceOfRotational` Obj

The reference of rotational. The type is <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

`motorEMForceName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the motor em force. If empty, default name starts with 'Motor_' will be generated and used.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.Force.MotorEMForce" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'statorBody' or 'rotorBody' or 'referenceOfRotational' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of zAxis' or 'xAxis' is 0.

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if type of 'statorBody' is not <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if type of 'rotorBody' is not <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if type of 'referenceOfRotational' is not <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

### CreateMotorEMForceForJMAG\(GearTrainDocument, Obj, Obj, Vector, Vector, Vector, Obj, string\)

Create <xref href="VM.Managed.DAFUL.GearTrain.Force.MotorEMForce" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "statorBody", "rotorBody", "referenceOfRotational" })]
[NotZeroMagnitude(new string[] { "zAxis", "xAxis" })]
public static Obj CreateMotorEMForceForJMAG(this GearTrainDocument document, Obj statorBody, Obj rotorBody, Vector position, Vector zAxis, Vector xAxis, Obj referenceOfRotational, string motorEMForceName = "")
```

#### Parameters

`document` GearTrainDocument

The document to create the motor em force for JMAG.

`statorBody` Obj

The stator body. The type is <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

`rotorBody` Obj

The rotor body. The type is <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

`position` Vector

The position.

`zAxis` Vector

The z axis.

`xAxis` Vector

The x axis.

`referenceOfRotational` Obj

The reference of rotational. The type is <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

`motorEMForceName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the motor em force. If empty, default name starts with 'Motor_' will be generated and used.

#### Returns

 Obj

The new <xref href="VM.Managed.DAFUL.GearTrain.Force.MotorEMForce" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' or 'statorBody' or 'rotorBody' or 'referenceOfRotational' arguments are empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of zAxis' or 'xAxis' is 0.

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if type of 'statorBody' is not <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if type of 'rotorBody' is not <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if type of 'referenceOfRotational' is not <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.


