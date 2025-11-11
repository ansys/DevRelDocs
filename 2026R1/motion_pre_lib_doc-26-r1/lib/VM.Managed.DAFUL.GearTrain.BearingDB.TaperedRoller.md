# Class TaperedRoller
<a id="VM_Managed_DAFUL_GearTrain_BearingDB_TaperedRoller"></a>

Namespace: [VM.Managed.DAFUL.GearTrain.BearingDB](VM.Managed.DAFUL.GearTrain.BearingDB.md)  
Assembly: VMDGearTrain.dll  

Tapered roller bearing

```csharp
public class TaperedRoller : DBRecordForBearing
```

#### Inheritance

object ← 
[Record](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VMManagedUtil/DBF/DBRecord.cs) ← 
[DBRecord](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VMManagedUtil/DBF/DBRecord.cs) ← 
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
[Record.RecordNo](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VMManagedUtil/DBF/DBRecord.cs)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_TaperedRoller__ctor"></a> TaperedRoller\(\)

```csharp
public TaperedRoller()
```

## Fields

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_TaperedRoller_ActionP"></a> ActionP

Action point

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? ActionP
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_TaperedRoller_Alpha"></a> Alpha

Contact angle

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? Alpha
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_TaperedRoller_Beta"></a> Beta

Roller tapered angle

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? Beta
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_TaperedRoller_C0r"></a> C0r

Basic static radial load rating

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? C0r
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_TaperedRoller_ConeW"></a> ConeW

Width of cone

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? ConeW
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_TaperedRoller_Cr"></a> Cr

Basic dynamic radial load rating

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? Cr
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_TaperedRoller_CupW"></a> CupW

Width of cup

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? CupW
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_TaperedRoller_Mass"></a> Mass

Mass

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? Mass
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_TaperedRoller_RolCP"></a> RolCP

Roller center point

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? RolCP
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_TaperedRoller_RolDia"></a> RolDia

Roller diameter

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? RolDia
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_TaperedRoller_RolLen"></a> RolLen

Roller length

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? RolLen
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_TaperedRoller_RolPR"></a> RolPR

Roller pitch radius

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? RolPR
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_TaperedRoller_RoundR1"></a> RoundR1

Rounding radius of cone

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? RoundR1
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_TaperedRoller_RoundR2"></a> RoundR2

Rounding radius of cup

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? RoundR2
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_TaperedRoller_Y"></a> Y

Y

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? Y
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_TaperedRoller_Y0"></a> Y0

Y0

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? Y0
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_TaperedRoller_d1"></a> d1

Cone shoulder diameter

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? d1
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_TaperedRoller_e"></a> e

e

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? e
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_TaperedRoller_nRoller"></a> nRoller

Number of roller

```csharp
[Column(Width = 4, Type = ColumnType.NUMERICAL)]
public int? nRoller
```

#### Field Value

 int?

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_TaperedRoller_GetDefaultBearing_VM_Unit_ConvertFactor_"></a> GetDefaultBearing\(ConvertFactor\)

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

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_TaperedRoller_UnitConvert_VM_Managed_DAFUL_GearTrain_BearingDB_TaperedRoller__VM_Unit_ConvertFactor_"></a> UnitConvert\(ref TaperedRoller, ConvertFactor\)

Convert bearing dimension unit.

```csharp
public void UnitConvert(ref TaperedRoller br, Unit.ConvertFactor factor)
```

#### Parameters

`br` [TaperedRoller](VM.Managed.DAFUL.GearTrain.BearingDB.TaperedRoller.md)

The target bearing.

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_TaperedRoller_UnitConvert_VM_Managed_DAFUL_GearTrain_BearingDB_TaperedRoller__System_Double_System_Double_System_Double_"></a> UnitConvert\(ref TaperedRoller, double, double, double\)

Convert bearing dimension unit.

```csharp
public void UnitConvert(ref TaperedRoller br, double dLengthFactor, double dForceFactor, double dMassFactor)
```

#### Parameters

`br` [TaperedRoller](VM.Managed.DAFUL.GearTrain.BearingDB.TaperedRoller.md)

The target bearing.

`dLengthFactor` double

The length factor.

`dForceFactor` double

The force factor.

`dMassFactor` double

The mass factor.

