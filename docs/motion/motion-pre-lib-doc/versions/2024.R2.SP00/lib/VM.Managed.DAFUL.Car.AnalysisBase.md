# Class AnalysisBase

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The car analysis base class

```csharp
public abstract class AnalysisBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnalysisBase](VM.Managed.DAFUL.Car.AnalysisBase.md)

#### Derived

[AnalysisExternFiles](VM.Managed.DAFUL.Car.AnalysisExternFiles.md), 
[AnalysisRandomMotion](VM.Managed.DAFUL.Car.AnalysisRandomMotion.md), 
[FullCarAnalysisBase](VM.Managed.DAFUL.Car.FullCarAnalysisBase.md), 
[SuspensionAnalysisBase](VM.Managed.DAFUL.Car.SuspensionAnalysisBase.md), 
[TireAnalysisBase](VM.Managed.DAFUL.Car.TireAnalysisBase.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### AnalysisBase\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisBase()
```

### AnalysisBase\(ILinkContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.AnalysisBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AnalysisBase(ILinkContainer lnkContainer)
```

#### Parameters

`lnkContainer` ILinkContainer

The link container.

## Fields

### m\_pLnkContainer

```csharp
protected ILinkContainer m_pLnkContainer
```

#### Field Value

 ILinkContainer

## Properties

### IsSim

Gets or sets a value indicating whether this instance is simulation.

```csharp
public bool IsSim { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### GetConvertUnit\(LengthUnitType\)

Gets the convert unit for length.

```csharp
protected double GetConvertUnit(LengthUnitType type)
```

#### Parameters

`type` LengthUnitType

The type.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetConvertUnit\(VelocityUnitType\)

Gets the convert unit for velocity.

```csharp
protected double GetConvertUnit(VelocityUnitType type)
```

#### Parameters

`type` [VelocityUnitType](VM.Managed.DAFUL.Car.Analysis.VelocityUnitType.md)

The type.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetConvertUnit\(AccelerationUnitType\)

Gets the convert unit for acceleration.

```csharp
protected double GetConvertUnit(AccelerationUnitType type)
```

#### Parameters

`type` [AccelerationUnitType](VM.Managed.DAFUL.Car.Analysis.AccelerationUnitType.md)

The type.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetGravity\(\)

```csharp
protected double GetGravity()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetTestRigMotionUSUBArgument\(string\[\]\)

Gets the test-rig motion USUB argument.

```csharp
public virtual void GetTestRigMotionUSUBArgument(string[] arParameter)
```

#### Parameters

`arParameter` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The parameter array.

### SetModified\(\)

Set modified flag.

```csharp
protected void SetModified()
```


