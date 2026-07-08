# Class TrapezoidCleat
<a id="VM_Managed_DAFUL_Car_TrapezoidCleat"></a>

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The trapezoid cleat shape class

```csharp
public class TrapezoidCleat : CleatShape
```

#### Inheritance

object ← 
[CleatShape](VM.Managed.DAFUL.Car.CleatShape.md) ← 
[TrapezoidCleat](VM.Managed.DAFUL.Car.TrapezoidCleat.md)

#### Inherited Members

[CleatShape.GetXZData\(double\)](VM.Managed.DAFUL.Car.CleatShape.md\#VM\_Managed\_DAFUL\_Car\_CleatShape\_GetXZData\_System\_Double\_), 
[CleatShape.TypeOfCleatShape](VM.Managed.DAFUL.Car.CleatShape.md\#VM\_Managed\_DAFUL\_Car\_CleatShape\_TypeOfCleatShape), 
[CleatShape.RideDrum](VM.Managed.DAFUL.Car.CleatShape.md\#VM\_Managed\_DAFUL\_Car\_CleatShape\_RideDrum)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Car_TrapezoidCleat__ctor"></a> TrapezoidCleat\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.TrapezoidCleat" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TrapezoidCleat()
```

### <a id="VM_Managed_DAFUL_Car_TrapezoidCleat__ctor_VM_Managed_DAFUL_Car_AnalysisRideDrum_"></a> TrapezoidCleat\(AnalysisRideDrum\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.TrapezoidCleat" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TrapezoidCleat(AnalysisRideDrum RideDrum)
```

#### Parameters

`RideDrum` [AnalysisRideDrum](VM.Managed.DAFUL.Car.AnalysisRideDrum.md)

The ride drum.

## Properties

### <a id="VM_Managed_DAFUL_Car_TrapezoidCleat_BottomLength"></a> BottomLength

Gets or sets the length of the bottom.

```csharp
public double BottomLength { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_TrapezoidCleat_Height"></a> Height

Gets or sets the height.

```csharp
public double Height { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_TrapezoidCleat_TopLength"></a> TopLength

Gets or sets the length of the top.

```csharp
public double TopLength { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_Car_TrapezoidCleat_TypeOfCleatShape"></a> TypeOfCleatShape

Gets the type of cleat shape.

```csharp
public override CleatShapeType TypeOfCleatShape { get; }
```

#### Property Value

 [CleatShapeType](VM.Managed.DAFUL.Car.CleatShapeType.md)

## Methods

### <a id="VM_Managed_DAFUL_Car_TrapezoidCleat_GetXZData_System_Double_"></a> GetXZData\(double\)

Gets the XZ data.

```csharp
public override string GetXZData(double dEndTime)
```

#### Parameters

`dEndTime` double

The d end time.

#### Returns

 string

