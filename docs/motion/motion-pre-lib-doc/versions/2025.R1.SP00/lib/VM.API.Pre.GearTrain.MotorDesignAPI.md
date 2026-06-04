#  Class MotorDesignAPI

Namespace: [VM.API.Pre.GearTrain](VM.API.Pre.GearTrain.md)  
Assembly: VM.API.Pre.GearTrain.dll  

This class implements APIs for drivetrain class.

```csharp
public static class MotorDesignAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MotorDesignAPI](VM.API.Pre.GearTrain.MotorDesignAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_GearTrain_MotorDesignAPI_CreateMotorDesigner_VM_Managed_DAFUL_GearTrain_GearTrainDocument_VM_Vector_VM_Vector_VM_Managed_DAFUL_GearTrain_MotorDesigner_HousingType_VM_Managed_DAFUL_GearTrain_MotorDesigner_StatorMountingType_System_String_"></a> CreateMotorDesigner\(GearTrainDocument, Vector, Vector, HousingType, StatorMountingType, string\)

Create <xref href="VM.Managed.DSDL.DAFUL.GearTrain.MotorDesigner" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotZeroMagnitude(new string[] { "rotateAxis" })]
public static Obj CreateMotorDesigner(this GearTrainDocument document, Vector position, Vector rotateAxis, MotorDesigner.HousingType housingType = HousingType.Integrated, MotorDesigner.StatorMountingType statorMountingType = StatorMountingType.PressFit, string name = "")
```

#### Parameters

`document` GearTrainDocument

The document to create the <xref href="VM.Managed.DSDL.DAFUL.GearTrain.MotorDesigner" data-throw-if-not-resolved="false"></xref>..

`position` Vector

The position of the motor designer.

`rotateAxis` Vector

The rotate axis of the motor designer.

`housingType` MotorDesigner.HousingType

The housing type of the motor designer.

`statorMountingType` MotorDesigner.StatorMountingType

The stator mounting type of the motor designer.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the motor designer.

#### Returns

 Obj

the new <xref href="VM.Managed.DSDL.DAFUL.GearTrain.MotorDesigner" data-throw-if-not-resolved="false"></xref> object created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document' argument is empty.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if the magnitude of 'rotateAxis' is 0.

