# Class CleatShape
<a id="VM_Managed_DAFUL_Car_CleatShape"></a>

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The cleat shape base class

```csharp
public abstract class CleatShape
```

#### Inheritance

object ← 
[CleatShape](VM.Managed.DAFUL.Car.CleatShape.md)

#### Derived

[RectangleCleat](VM.Managed.DAFUL.Car.RectangleCleat.md), 
[RectangleWithBevelEdgeCleat](VM.Managed.DAFUL.Car.RectangleWithBevelEdgeCleat.md), 
[SemicircleCleat](VM.Managed.DAFUL.Car.SemicircleCleat.md), 
[TrapezoidCleat](VM.Managed.DAFUL.Car.TrapezoidCleat.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Car_CleatShape__ctor"></a> CleatShape\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.CleatShape" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CleatShape()
```

### <a id="VM_Managed_DAFUL_Car_CleatShape__ctor_VM_Managed_DAFUL_Car_AnalysisRideDrum_"></a> CleatShape\(AnalysisRideDrum\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.CleatShape" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CleatShape(AnalysisRideDrum RideDrum)
```

#### Parameters

`RideDrum` [AnalysisRideDrum](VM.Managed.DAFUL.Car.AnalysisRideDrum.md)

The ride drum.

## Properties

### <a id="VM_Managed_DAFUL_Car_CleatShape_RideDrum"></a> RideDrum

Gets the ride drum.

```csharp
public AnalysisRideDrum RideDrum { get; }
```

#### Property Value

 [AnalysisRideDrum](VM.Managed.DAFUL.Car.AnalysisRideDrum.md)

### <a id="VM_Managed_DAFUL_Car_CleatShape_TypeOfCleatShape"></a> TypeOfCleatShape

Gets the type of cleat shape.

```csharp
public abstract CleatShapeType TypeOfCleatShape { get; }
```

#### Property Value

 [CleatShapeType](VM.Managed.DAFUL.Car.CleatShapeType.md)

## Methods

### <a id="VM_Managed_DAFUL_Car_CleatShape_GetXZData_System_Double_"></a> GetXZData\(double\)

Gets the XZ data.

```csharp
public abstract string GetXZData(double dEndTime)
```

#### Parameters

`dEndTime` double

The d end time.

#### Returns

 string

