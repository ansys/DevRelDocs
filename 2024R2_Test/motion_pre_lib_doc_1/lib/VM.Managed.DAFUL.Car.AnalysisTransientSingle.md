# Class AnalysisTransientSingle

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The handling transient single analysis class

```csharp
public class AnalysisTransientSingle : TireAnalysisBase, IHasInitialVel
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisBase](VM.Managed.DAFUL.Car.AnalysisBase.md) ← 
[TireAnalysisBase](VM.Managed.DAFUL.Car.TireAnalysisBase.md) ← 
[AnalysisTransientSingle](VM.Managed.DAFUL.Car.AnalysisTransientSingle.md)

#### Implements

IHasInitialVel

#### Inherited Members

[TireAnalysisBase.GetConvertUnitToMMKS\(VelocityUnitType\)](VM.Managed.DAFUL.Car.TireAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_TireAnalysisBase\_GetConvertUnitToMMKS\_VM\_Managed\_DAFUL\_Car\_Analysis\_VelocityUnitType\_), 
[TireAnalysisBase.GetTestRigMotionUSUBArgumentCore\(string, string, AnalysisInfo, string\[\]\)](VM.Managed.DAFUL.Car.TireAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_TireAnalysisBase\_GetTestRigMotionUSUBArgumentCore\_System\_String\_System\_String\_VM\_Managed\_DAFUL\_Car\_AnalysisInfo\_System\_String\_\_\_), 
[TireAnalysisBase.TypeOfSimulation](VM.Managed.DAFUL.Car.TireAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_TireAnalysisBase\_TypeOfSimulation), 
[TireAnalysisBase.InitialVelocity](VM.Managed.DAFUL.Car.TireAnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_TireAnalysisBase\_InitialVelocity), 
[AnalysisBase.m\_pLnkContainer](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_m\_pLnkContainer), 
[AnalysisBase.SetModified\(\)](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_SetModified), 
[AnalysisBase.GetTestRigMotionUSUBArgument\(string\[\]\)](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_GetTestRigMotionUSUBArgument\_System\_String\_\_\_), 
[AnalysisBase.GetConvertUnit\(LengthUnitType\)](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_GetConvertUnit\_VM\_Models\_Pre\_LengthUnitType\_), 
[AnalysisBase.GetGravity\(\)](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_GetGravity), 
[AnalysisBase.GetConvertUnit\(VelocityUnitType\)](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_GetConvertUnit\_VM\_Managed\_DAFUL\_Car\_Analysis\_VelocityUnitType\_), 
[AnalysisBase.GetConvertUnit\(AccelerationUnitType\)](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_GetConvertUnit\_VM\_Managed\_DAFUL\_Car\_Analysis\_AccelerationUnitType\_), 
[AnalysisBase.IsSim](VM.Managed.DAFUL.Car.AnalysisBase.md\#VM\_Managed\_DAFUL\_Car\_AnalysisBase\_IsSim)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### AnalysisTransientSingle\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisTransientSingle" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisTransientSingle()
```

### AnalysisTransientSingle\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisTransientSingle" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisTransientSingle(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Properties

### InitialVelocity

Gets the initial velocity.

```csharp
protected override double InitialVelocity { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### SingleInfo

Gets or sets the single.

```csharp
public AnalysisInfo SingleInfo { get; set; }
```

#### Property Value

 [AnalysisInfo](VM.Managed.DAFUL.Car.AnalysisInfo.md)

## Methods

### GetTestRigMotionUSUBArgument\(string\[\]\)

Gets the test-rig motion USUB argument.

```csharp
public override void GetTestRigMotionUSUBArgument(string[] arParameter)
```

#### Parameters

`arParameter` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The parameter array.


