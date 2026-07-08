# Class MotorEMForceAPI
<a id="VM_API_Pre_GearTrain_MotorEMForceAPI"></a>

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This class implements APIs for <xref href="VM.Managed.DAFUL.GearTrain.Force.MotorEMForce" data-throw-if-not-resolved="false"></xref> class.

```csharp
public static class MotorEMForceAPI
```

#### Inheritance

object ← 
[MotorEMForceAPI](VM.API.Pre.GearTrain.MotorEMForceAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_GearTrain_MotorEMForceAPI_CreateMotorEMForce_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_VM_Vector_VM_API_Pre_Obj_System_String_"></a> CreateMotorEMForce\(GearTrainDocument, Obj, Obj, Vector, Vector, Vector, Obj, string\)

Create <xref href="VM.Managed.DAFUL.GearTrain.Force.MotorEMForce" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "statorBody", "rotorBody", "referenceOfRotational" })]
[NotZeroMagnitude(new string[] { "zAxis", "xAxis" })]
public static Obj CreateMotorEMForce(this GearTrainDocument document, Obj statorBody, Obj rotorBody, Vector position, Vector zAxis, Vector xAxis, Obj referenceOfRotational, string motorEMForceName = "")
```

#### Parameters

`document` [GearTrainDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GearTrainDocument.cs)

The document to create the motor em force.

`statorBody` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The stator body. The type is <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

`rotorBody` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The rotor body. The type is <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

`position` Vector

The position.

`zAxis` Vector

The z axis.

`xAxis` Vector

The x axis.

`referenceOfRotational` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The reference of rotational. The type is <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

`motorEMForceName` string

The name of the motor em force. If empty, default name starts with 'Motor_' will be generated and used.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.GearTrain.Force.MotorEMForce" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'statorBody' or 'rotorBody' or 'referenceOfRotational' arguments are empty.

 ArgumentException

Will be thrown if the magnitude of zAxis' or 'xAxis' is 0.

 ArgumentNullException

Will be thrown if type of 'statorBody' is not <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

 ArgumentNullException

Will be thrown if type of 'rotorBody' is not <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

 ArgumentNullException

Will be thrown if type of 'referenceOfRotational' is not <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_MotorEMForceAPI_CreateMotorEMForceForANSYSMotion_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_VM_Vector_VM_API_Pre_Obj_System_String_"></a> CreateMotorEMForceForANSYSMotion\(GearTrainDocument, Obj, Obj, Vector, Vector, Vector, Obj, string\)

Create <xref href="VM.Managed.DAFUL.GearTrain.Force.MotorEMForce" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "statorBody", "rotorBody", "referenceOfRotational" })]
[NotZeroMagnitude(new string[] { "zAxis", "xAxis" })]
public static Obj CreateMotorEMForceForANSYSMotion(this GearTrainDocument document, Obj statorBody, Obj rotorBody, Vector position, Vector zAxis, Vector xAxis, Obj referenceOfRotational, string motorEMForceName = "")
```

#### Parameters

`document` [GearTrainDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GearTrainDocument.cs)

The document to create the motor em force for ANSYS Motion.

`statorBody` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The stator body. The type is <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

`rotorBody` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The rotor body. The type is <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

`position` Vector

The position.

`zAxis` Vector

The z axis.

`xAxis` Vector

The x axis.

`referenceOfRotational` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The reference of rotational. The type is <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

`motorEMForceName` string

The name of the motor em force. If empty, default name starts with 'Motor_' will be generated and used.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.GearTrain.Force.MotorEMForce" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'statorBody' or 'rotorBody' or 'referenceOfRotational' arguments are empty.

 ArgumentException

Will be thrown if the magnitude of zAxis' or 'xAxis' is 0.

 ArgumentNullException

Will be thrown if type of 'statorBody' is not <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

 ArgumentNullException

Will be thrown if type of 'rotorBody' is not <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

 ArgumentNullException

Will be thrown if type of 'referenceOfRotational' is not <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_GearTrain_MotorEMForceAPI_CreateMotorEMForceForJMAG_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_API_Pre_Obj_VM_API_Pre_Obj_VM_Vector_VM_Vector_VM_Vector_VM_API_Pre_Obj_System_String_"></a> CreateMotorEMForceForJMAG\(GearTrainDocument, Obj, Obj, Vector, Vector, Vector, Obj, string\)

Create <xref href="VM.Managed.DAFUL.GearTrain.Force.MotorEMForce" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "statorBody", "rotorBody", "referenceOfRotational" })]
[NotZeroMagnitude(new string[] { "zAxis", "xAxis" })]
public static Obj CreateMotorEMForceForJMAG(this GearTrainDocument document, Obj statorBody, Obj rotorBody, Vector position, Vector zAxis, Vector xAxis, Obj referenceOfRotational, string motorEMForceName = "")
```

#### Parameters

`document` [GearTrainDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDGearTrain/GearTrainDocument.cs)

The document to create the motor em force for JMAG.

`statorBody` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The stator body. The type is <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

`rotorBody` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The rotor body. The type is <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

`position` Vector

The position.

`zAxis` Vector

The z axis.

`xAxis` Vector

The x axis.

`referenceOfRotational` [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The reference of rotational. The type is <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

`motorEMForceName` string

The name of the motor em force. If empty, default name starts with 'Motor_' will be generated and used.

#### Returns

 [Obj](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/API/VM.API.Pre/Models/Obj.cs)

The new <xref href="VM.Managed.DAFUL.GearTrain.Force.MotorEMForce" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document' or 'statorBody' or 'rotorBody' or 'referenceOfRotational' arguments are empty.

 ArgumentException

Will be thrown if the magnitude of zAxis' or 'xAxis' is 0.

 ArgumentNullException

Will be thrown if type of 'statorBody' is not <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

 ArgumentNullException

Will be thrown if type of 'rotorBody' is not <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

 ArgumentNullException

Will be thrown if type of 'referenceOfRotational' is not <xref href="VM.Managed.ObjectBase" data-throw-if-not-resolved="false"></xref>.

