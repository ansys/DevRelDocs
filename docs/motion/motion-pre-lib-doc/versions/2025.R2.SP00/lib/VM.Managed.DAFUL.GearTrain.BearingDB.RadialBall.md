#  Class RadialBall

Namespace: [VM.Managed.DAFUL.GearTrain.BearingDB](VM.Managed.DAFUL.GearTrain.BearingDB.md)  
Assembly: VMDGearTrain.dll  

Radial ball bearing

```csharp
public class RadialBall : DBRecordForBearing
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
Record ← 
DBRecord ← 
[DBRecordForBearing](VM.Managed.DAFUL.GearTrain.BearingDB.DBRecordForBearing.md) ← 
[RadialBall](VM.Managed.DAFUL.GearTrain.BearingDB.RadialBall.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_RadialBall__ctor"></a> RadialBall\(\)

```csharp
public RadialBall()
```

## Fields

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_RadialBall_BallDia"></a> BallDia

Ball diameter

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? BallDia
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_RadialBall_BallPDia"></a> BallPDia

Ball pitch diameter

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? BallPDia
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_RadialBall_C0r"></a> C0r

Basic static radial load rating

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? C0r
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_RadialBall_Cr"></a> Cr

Basic dynamic radial load rating

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? Cr
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_RadialBall_IRSDia"></a> IRSDia

Inner raceway shoulder diameter

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? IRSDia
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_RadialBall_Mass"></a> Mass

Mass

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? Mass
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_RadialBall_ORSBore"></a> ORSBore

Outer raceway shoulder bore

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? ORSBore
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_RadialBall_RoundR"></a> RoundR

Rounding radius

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? RoundR
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_RadialBall_f0"></a> f0

Factor for calculation of basic static load rating

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? f0
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_RadialBall_nBall"></a> nBall

Number of ball

```csharp
[Column(Width = 4, Type = ColumnType.NUMERICAL)]
public int? nBall
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_RadialBall_ra"></a> ra

ra

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? ra
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_RadialBall_GetDefaultBearing_VM_Unit_ConvertFactor_"></a> GetDefaultBearing\(ConvertFactor\)

Get the default bearing.

```csharp
public static RadialBall GetDefaultBearing(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

#### Returns

 [RadialBall](VM.Managed.DAFUL.GearTrain.BearingDB.RadialBall.md)

The default bearing

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_RadialBall_UnitConvert_VM_Managed_DAFUL_GearTrain_BearingDB_RadialBall__VM_Unit_ConvertFactor_"></a> UnitConvert\(ref RadialBall, ConvertFactor\)

Convert bearing dimension unit.

```csharp
public void UnitConvert(ref RadialBall br, Unit.ConvertFactor factor)
```

#### Parameters

`br` [RadialBall](VM.Managed.DAFUL.GearTrain.BearingDB.RadialBall.md)

The target bearing.

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_RadialBall_UnitConvert_VM_Managed_DAFUL_GearTrain_BearingDB_RadialBall__System_Double_System_Double_System_Double_"></a> UnitConvert\(ref RadialBall, double, double, double\)

Convert bearing dimension unit.

```csharp
public void UnitConvert(ref RadialBall br, double dLengthFactor, double dForceFactor, double dMassFactor)
```

#### Parameters

`br` [RadialBall](VM.Managed.DAFUL.GearTrain.BearingDB.RadialBall.md)

The target bearing.

`dLengthFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

The length factor.

`dForceFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

The force factor.

`dMassFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

The mass factor.

