# Class SemicircleCleat
<a id="VM_Managed_DAFUL_Car_SemicircleCleat"></a>

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The semi-circle cleat shape class

```csharp
public class SemicircleCleat : CleatShape
```

#### Inheritance

object ← 
[CleatShape](VM.Managed.DAFUL.Car.CleatShape.md) ← 
[SemicircleCleat](VM.Managed.DAFUL.Car.SemicircleCleat.md)

#### Inherited Members

[CleatShape.GetXZData\(double\)](VM.Managed.DAFUL.Car.CleatShape.md\#VM\_Managed\_DAFUL\_Car\_CleatShape\_GetXZData\_System\_Double\_), 
[CleatShape.TypeOfCleatShape](VM.Managed.DAFUL.Car.CleatShape.md\#VM\_Managed\_DAFUL\_Car\_CleatShape\_TypeOfCleatShape), 
[CleatShape.RideDrum](VM.Managed.DAFUL.Car.CleatShape.md\#VM\_Managed\_DAFUL\_Car\_CleatShape\_RideDrum)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Car_SemicircleCleat__ctor"></a> SemicircleCleat\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.SemicircleCleat" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SemicircleCleat()
```

### <a id="VM_Managed_DAFUL_Car_SemicircleCleat__ctor_VM_Managed_DAFUL_Car_AnalysisRideDrum_"></a> SemicircleCleat\(AnalysisRideDrum\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.SemicircleCleat" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SemicircleCleat(AnalysisRideDrum RideDrum)
```

#### Parameters

`RideDrum` [AnalysisRideDrum](VM.Managed.DAFUL.Car.AnalysisRideDrum.md)

The ride drum.

## Properties

### <a id="VM_Managed_DAFUL_Car_SemicircleCleat_Radius"></a> Radius

Gets or sets the radius.

```csharp
public double Radius { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_SemicircleCleat_TypeOfCleatShape"></a> TypeOfCleatShape

Gets the type of cleat shape.

```csharp
public override CleatShapeType TypeOfCleatShape { get; }
```

#### Property Value

 [CleatShapeType](VM.Managed.DAFUL.Car.CleatShapeType.md)

## Methods

### <a id="VM_Managed_DAFUL_Car_SemicircleCleat_GetXZData_System_Double_"></a> GetXZData\(double\)

Gets the XZ data.

```csharp
public override string GetXZData(double dEndTime)
```

#### Parameters

`dEndTime` double

The d end time.

#### Returns

 string

