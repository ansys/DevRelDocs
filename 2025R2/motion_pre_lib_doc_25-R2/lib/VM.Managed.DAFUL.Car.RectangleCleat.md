# <a id="VM_Managed_DAFUL_Car_RectangleCleat"></a> Class RectangleCleat

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

The rectangle cleat shape class

```csharp
public class RectangleCleat : CleatShape
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CleatShape](VM.Managed.DAFUL.Car.CleatShape.md) ← 
[RectangleCleat](VM.Managed.DAFUL.Car.RectangleCleat.md)

#### Inherited Members

[CleatShape.GetXZData\(double\)](VM.Managed.DAFUL.Car.CleatShape.md\#VM\_Managed\_DAFUL\_Car\_CleatShape\_GetXZData\_System\_Double\_), 
[CleatShape.TypeOfCleatShape](VM.Managed.DAFUL.Car.CleatShape.md\#VM\_Managed\_DAFUL\_Car\_CleatShape\_TypeOfCleatShape), 
[CleatShape.RideDrum](VM.Managed.DAFUL.Car.CleatShape.md\#VM\_Managed\_DAFUL\_Car\_CleatShape\_RideDrum)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Car_RectangleCleat__ctor"></a> RectangleCleat\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.RectangleCleat" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RectangleCleat()
```

### <a id="VM_Managed_DAFUL_Car_RectangleCleat__ctor_VM_Managed_DAFUL_Car_AnalysisRideDrum_"></a> RectangleCleat\(AnalysisRideDrum\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.RectangleCleat" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RectangleCleat(AnalysisRideDrum RideDrum)
```

#### Parameters

`RideDrum` [AnalysisRideDrum](VM.Managed.DAFUL.Car.AnalysisRideDrum.md)

The ride drum.

## Properties

### <a id="VM_Managed_DAFUL_Car_RectangleCleat_Height"></a> Height

Gets or sets the height.

```csharp
public double Height { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_RectangleCleat_Length"></a> Length

Gets or sets the length.

```csharp
public double Length { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Car_RectangleCleat_TypeOfCleatShape"></a> TypeOfCleatShape

Gets the type of cleat shape.

```csharp
public override CleatShapeType TypeOfCleatShape { get; }
```

#### Property Value

 [CleatShapeType](VM.Managed.DAFUL.Car.CleatShapeType.md)

## Methods

### <a id="VM_Managed_DAFUL_Car_RectangleCleat_GetXZData_System_Double_"></a> GetXZData\(double\)

Gets the XZ data.

```csharp
public override string GetXZData(double dEndTime)
```

#### Parameters

`dEndTime` [double](https://learn.microsoft.com/dotnet/api/system.double)

The d end time.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

