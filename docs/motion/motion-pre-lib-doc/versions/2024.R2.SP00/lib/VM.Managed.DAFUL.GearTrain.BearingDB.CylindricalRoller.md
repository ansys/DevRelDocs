# Class CylindricalRoller

Namespace: [VM.Managed.DAFUL.GearTrain.BearingDB](VM.Managed.DAFUL.GearTrain.BearingDB.md)  
Assembly: VMDGearTrain.dll  

Cylindricall roller bearing

```csharp
public class CylindricalRoller : DBRecordForBearing
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
Record ← 
DBRecord ← 
[DBRecordForBearing](VM.Managed.DAFUL.GearTrain.BearingDB.DBRecordForBearing.md) ← 
[CylindricalRoller](VM.Managed.DAFUL.GearTrain.BearingDB.CylindricalRoller.md)

#### Inherited Members

[DBRecordForBearing.Company](VM.Managed.DAFUL.GearTrain.BearingDB.DBRecordForBearing.md\#VM\_Managed\_DAFUL\_GearTrain\_BearingDB\_DBRecordForBearing\_Company), 
[DBRecordForBearing.Designation](VM.Managed.DAFUL.GearTrain.BearingDB.DBRecordForBearing.md\#VM\_Managed\_DAFUL\_GearTrain\_BearingDB\_DBRecordForBearing\_Designation), 
[DBRecordForBearing.Type](VM.Managed.DAFUL.GearTrain.BearingDB.DBRecordForBearing.md\#VM\_Managed\_DAFUL\_GearTrain\_BearingDB\_DBRecordForBearing\_Type), 
[DBRecordForBearing.nRows](VM.Managed.DAFUL.GearTrain.BearingDB.DBRecordForBearing.md\#VM\_Managed\_DAFUL\_GearTrain\_BearingDB\_DBRecordForBearing\_nRows), 
[DBRecordForBearing.Bore](VM.Managed.DAFUL.GearTrain.BearingDB.DBRecordForBearing.md\#VM\_Managed\_DAFUL\_GearTrain\_BearingDB\_DBRecordForBearing\_Bore), 
[DBRecordForBearing.OutDia](VM.Managed.DAFUL.GearTrain.BearingDB.DBRecordForBearing.md\#VM\_Managed\_DAFUL\_GearTrain\_BearingDB\_DBRecordForBearing\_OutDia), 
[DBRecordForBearing.Width](VM.Managed.DAFUL.GearTrain.BearingDB.DBRecordForBearing.md\#VM\_Managed\_DAFUL\_GearTrain\_BearingDB\_DBRecordForBearing\_Width), 
Record.RecordNo

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### CylindricalRoller\(\)

```csharp
public CylindricalRoller()
```

## Fields

### C0r

Basic static radial load rating

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? C0r
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### Cr

Basic dynamic radial load rating

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? Cr
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### IRSDia

Inner raceway shoulder diameter

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? IRSDia
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### LS

Limiting Speed

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? LS
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### Mass

Mass

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? Mass
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### ORSBore

Outer raceway shoulder bore

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? ORSBore
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### Pu

Pu

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? Pu
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### RS

Reference Speed

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? RS
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### RolDia

Roller diameter

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? RolDia
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### RolLen

Roller length

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? RolLen
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### RolPDia

Roller pitch diameter

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? RolPDia
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### RoundR

Rounding radius

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? RoundR
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### nRoller

Number of roller

```csharp
[Column(Width = 4, Type = ColumnType.NUMERICAL)]
public int? nRoller
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

## Methods

### GetDefaultBearing\(ConvertFactor\)

Get the default bearing.

```csharp
public static CylindricalRoller GetDefaultBearing(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

#### Returns

 [CylindricalRoller](VM.Managed.DAFUL.GearTrain.BearingDB.CylindricalRoller.md)

The default bearing

### UnitConvert\(ref CylindricalRoller, ConvertFactor\)

Convert bearing dimension unit.

```csharp
public void UnitConvert(ref CylindricalRoller br, Unit.ConvertFactor factor)
```

#### Parameters

`br` [CylindricalRoller](VM.Managed.DAFUL.GearTrain.BearingDB.CylindricalRoller.md)

The target bearing.

`factor` Unit.ConvertFactor

The unit convert factor.

### UnitConvert\(ref CylindricalRoller, double, double, double\)

Convert bearing dimension unit.

```csharp
public void UnitConvert(ref CylindricalRoller br, double dLengthFactor, double dForceFactor, double dMassFactor)
```

#### Parameters

`br` [CylindricalRoller](VM.Managed.DAFUL.GearTrain.BearingDB.CylindricalRoller.md)

The target bearing.

`dLengthFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

The length factor.

`dForceFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

The force factor.

`dMassFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

The mass factor.


