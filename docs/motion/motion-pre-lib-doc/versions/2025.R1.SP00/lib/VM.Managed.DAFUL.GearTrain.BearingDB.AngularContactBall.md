#  Class AngularContactBall

Namespace: [VM.Managed.DAFUL.GearTrain.BearingDB](VM.Managed.DAFUL.GearTrain.BearingDB.md)  
Assembly: VMDGearTrain.dll  

Angular contact ball bearing

```csharp
public class AngularContactBall : DBRecordForBearing
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
Record ← 
DBRecord ← 
[DBRecordForBearing](VM.Managed.DAFUL.GearTrain.BearingDB.DBRecordForBearing.md) ← 
[AngularContactBall](VM.Managed.DAFUL.GearTrain.BearingDB.AngularContactBall.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_AngularContactBall__ctor"></a> AngularContactBall\(\)

```csharp
public AngularContactBall()
```

## Fields

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_AngularContactBall_ActionP"></a> ActionP

Action point

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? ActionP
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_AngularContactBall_BallDia"></a> BallDia

Ball diameter

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? BallDia
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_AngularContactBall_BallPDia"></a> BallPDia

Ball pitch diameter

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? BallPDia
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_AngularContactBall_C0r"></a> C0r

Basic static radial load rating

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? C0r
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_AngularContactBall_Cr"></a> Cr

Basic dynamic radial load rating

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? Cr
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_AngularContactBall_IRSDia"></a> IRSDia

Inner raceway shoulder diameter

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? IRSDia
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_AngularContactBall_IRSDia2"></a> IRSDia2

Inner raceway shoulder diameter 2

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? IRSDia2
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_AngularContactBall_Mass"></a> Mass

Mass

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? Mass
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_AngularContactBall_ORSBore"></a> ORSBore

Outer raceway shoulder bore

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? ORSBore
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_AngularContactBall_ORSBore2"></a> ORSBore2

Outer raceway shoulder boer 2

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? ORSBore2
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_AngularContactBall_RoundR"></a> RoundR

Rounding radius

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? RoundR
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_AngularContactBall_f0"></a> f0

Factor for calculation of basic static load rating

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? f0
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_AngularContactBall_nBall"></a> nBall

Number of ball

```csharp
[Column(Width = 4, Type = ColumnType.NUMERICAL)]
public int? nBall
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_AngularContactBall_ra"></a> ra

ra

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? ra
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_AngularContactBall_GetDefaultBearing_VM_Unit_ConvertFactor_"></a> GetDefaultBearing\(ConvertFactor\)

Get the default bearing.

```csharp
public static AngularContactBall GetDefaultBearing(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

#### Returns

 [AngularContactBall](VM.Managed.DAFUL.GearTrain.BearingDB.AngularContactBall.md)

The default bearing

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_AngularContactBall_UnitConvert_VM_Managed_DAFUL_GearTrain_BearingDB_AngularContactBall__VM_Unit_ConvertFactor_"></a> UnitConvert\(ref AngularContactBall, ConvertFactor\)

Convert bearing dimension unit.

```csharp
public void UnitConvert(ref AngularContactBall br, Unit.ConvertFactor factor)
```

#### Parameters

`br` [AngularContactBall](VM.Managed.DAFUL.GearTrain.BearingDB.AngularContactBall.md)

The target bearing.

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_AngularContactBall_UnitConvert_VM_Managed_DAFUL_GearTrain_BearingDB_AngularContactBall__System_Double_System_Double_System_Double_"></a> UnitConvert\(ref AngularContactBall, double, double, double\)

Convert bearing dimension unit.

```csharp
public void UnitConvert(ref AngularContactBall br, double dLengthFactor, double dForceFactor, double dMassFactor)
```

#### Parameters

`br` [AngularContactBall](VM.Managed.DAFUL.GearTrain.BearingDB.AngularContactBall.md)

The target bearing.

`dLengthFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

The length factor.

`dForceFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

The force factor.

`dMassFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

The mass factor.

