# Class PropertyMotorEMForce.UNVFile
<a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_UNVFile"></a>

Namespace: [VM.Managed.DAFUL.GearTrain.Force](VM.Managed.DAFUL.GearTrain.Force.md)  
Assembly: VMDGearTrain.dll  

This class is to represent the unv file.

```csharp
public class PropertyMotorEMForce.UNVFile
```

#### Inheritance

object ← 
[PropertyMotorEMForce.UNVFile](VM.Managed.DAFUL.GearTrain.Force.PropertyMotorEMForce.UNVFile.md)

#### Derived

[PropertyMotorEMForce.UNVFileWithRPM](VM.Managed.DAFUL.GearTrain.Force.PropertyMotorEMForce.UNVFileWithRPM.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_UNVFile__ctor"></a> UNVFile\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Force.PropertyMotorEMForce.UNVFile" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UNVFile()
```

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_UNVFile__ctor_System_String_System_String_"></a> UNVFile\(string, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Force.PropertyMotorEMForce.UNVFile" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UNVFile(string strStatorPath, string strRotorPath)
```

#### Parameters

`strStatorPath` string

The stator path.

`strRotorPath` string

The rotor path.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_UNVFile_RotorPath"></a> RotorPath

Gets or sets the rotor path.

```csharp
public string RotorPath { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_GearTrain_Force_PropertyMotorEMForce_UNVFile_StatorPath"></a> StatorPath

Gets or sets the stator path.

```csharp
public string StatorPath { get; set; }
```

#### Property Value

 string

