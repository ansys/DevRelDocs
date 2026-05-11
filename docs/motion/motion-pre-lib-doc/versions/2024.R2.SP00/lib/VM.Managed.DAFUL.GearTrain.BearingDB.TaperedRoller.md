# Class TaperedRoller

Namespace: [VM.Managed.DAFUL.GearTrain.BearingDB](VM.Managed.DAFUL.GearTrain.BearingDB.md)  
Assembly: VMDGearTrain.dll  

Tapered roller bearing

```csharp
public class TaperedRoller : DBRecordForBearing
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
Record ← 
DBRecord ← 
[DBRecordForBearing](VM.Managed.DAFUL.GearTrain.BearingDB.DBRecordForBearing.md) ← 
[TaperedRoller](VM.Managed.DAFUL.GearTrain.BearingDB.TaperedRoller.md)

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

### TaperedRoller\(\)

```csharp
public TaperedRoller()
```

## Fields

### ActionP

Action point

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? ActionP
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### Alpha

Contact angle

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? Alpha
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### Beta

Roller tapered angle

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? Beta
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### C0r

Basic static radial load rating

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? C0r
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### ConeW

Width of cone

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? ConeW
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

### CupW

Width of cup

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? CupW
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

### RolCP

Roller center point

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? RolCP
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

### RolPR

Roller pitch radius

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? RolPR
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### RoundR1

Rounding radius of cone

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? RoundR1
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### RoundR2

Rounding radius of cup

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? RoundR2
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### Y

Y

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? Y
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### Y0

Y0

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? Y0
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### d1

Cone shoulder diameter

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? d1
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### e

e

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? e
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
public static TaperedRoller GetDefaultBearing(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

#### Returns

 [TaperedRoller](VM.Managed.DAFUL.GearTrain.BearingDB.TaperedRoller.md)

The default bearing

### UnitConvert\(ref TaperedRoller, ConvertFactor\)

Convert bearing dimension unit.

```csharp
public void UnitConvert(ref TaperedRoller br, Unit.ConvertFactor factor)
```

#### Parameters

`br` [TaperedRoller](VM.Managed.DAFUL.GearTrain.BearingDB.TaperedRoller.md)

The target bearing.

`factor` Unit.ConvertFactor

The unit convert factor.

### UnitConvert\(ref TaperedRoller, double, double, double\)

Convert bearing dimension unit.

```csharp
public void UnitConvert(ref TaperedRoller br, double dLengthFactor, double dForceFactor, double dMassFactor)
```

#### Parameters

`br` [TaperedRoller](VM.Managed.DAFUL.GearTrain.BearingDB.TaperedRoller.md)

The target bearing.

`dLengthFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

The length factor.

`dForceFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

The force factor.

`dMassFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

The mass factor.


