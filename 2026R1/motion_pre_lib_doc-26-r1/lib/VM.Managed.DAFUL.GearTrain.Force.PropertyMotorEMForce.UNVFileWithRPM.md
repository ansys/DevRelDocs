#  Class PropertyMotorEMForce.UNVFileWithRPM

Namespace: [VM.Managed.DAFUL.GearTrain.Force](VM.Managed.DAFUL.GearTrain.Force.md)  
Assembly: VMDGearTrain.dll  

This class is to represent the unv file whit RPM.

```csharp
public class PropertyMotorEMForce.UNVFileWithRPM : PropertyMotorEMForce.UNVFile
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PropertyMotorEMForce.UNVFile](VM.Managed.DAFUL.GearTrain.Force.PropertyMotorEMForce.UNVFile.md) ← 
[PropertyMotorEMForce.UNVFileWithRPM](VM.Managed.DAFUL.GearTrain.Force.PropertyMotorEMForce.UNVFileWithRPM.md)

#### Inherited Members

[PropertyMotorEMForce.UNVFile.StatorPath](VM.Managed.DAFUL.GearTrain.Force.PropertyMotorEMForce.UNVFile.md\#VM\_Managed\_DAFUL\_GearTrain\_Force\_PropertyMotorEMForce\_UNVFile\_StatorPath), 
[PropertyMotorEMForce.UNVFile.RotorPath](VM.Managed.DAFUL.GearTrain.Force.PropertyMotorEMForce.UNVFile.md\#VM\_Managed\_DAFUL\_GearTrain\_Force\_PropertyMotorEMForce\_UNVFile\_RotorPath)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_UNVFileWithRPM__ctor"></a> UNVFileWithRPM\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Force.PropertyMotorEMForce.UNVFileWithRPM" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UNVFileWithRPM()
```

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_UNVFileWithRPM__ctor_System_Double_System_String_System_String_"></a> UNVFileWithRPM\(double, string, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Force.PropertyMotorEMForce.UNVFileWithRPM" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UNVFileWithRPM(double dRPM, string strStatorPath, string strRotorPath)
```

#### Parameters

`dRPM` [double](https://learn.microsoft.com/dotnet/api/system.double)

The RPM.

`strStatorPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stator path.

`strRotorPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The rotor path.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_UNVFileWithRPM_RPM"></a> RPM

Gets or sets the rpm.

```csharp
public double RPM { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

