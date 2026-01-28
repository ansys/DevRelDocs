# Class CylindricalRoller
<a id="VM_Managed_DAFUL_GearTrain_BearingDB_CylindricalRoller"></a>

Namespace: [VM.Managed.DAFUL.GearTrain.BearingDB](VM.Managed.DAFUL.GearTrain.BearingDB.md)  
Assembly: VMDGearTrain.dll  

Cylindricall roller bearing

```csharp
public class CylindricalRoller : DBRecordForBearing
```

#### Inheritance

object ← 
[Record](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VMManagedUtil/DBF/DBRecord.cs) ← 
[DBRecord](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VMManagedUtil/DBF/DBRecord.cs) ← 
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
[Record.RecordNo](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Common/VMManagedUtil/DBF/DBRecord.cs)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_CylindricalRoller__ctor"></a> CylindricalRoller\(\)

```csharp
public CylindricalRoller()
```

## Fields

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_CylindricalRoller_C0r"></a> C0r

Basic static radial load rating

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? C0r
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_CylindricalRoller_Cr"></a> Cr

Basic dynamic radial load rating

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? Cr
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_CylindricalRoller_IRSDia"></a> IRSDia

Inner raceway shoulder diameter

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? IRSDia
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_CylindricalRoller_LS"></a> LS

Limiting Speed

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? LS
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_CylindricalRoller_Mass"></a> Mass

Mass

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? Mass
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_CylindricalRoller_ORSBore"></a> ORSBore

Outer raceway shoulder bore

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? ORSBore
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_CylindricalRoller_Pu"></a> Pu

Pu

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? Pu
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_CylindricalRoller_RS"></a> RS

Reference Speed

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? RS
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_CylindricalRoller_RolDia"></a> RolDia

Roller diameter

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? RolDia
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_CylindricalRoller_RolLen"></a> RolLen

Roller length

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? RolLen
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_CylindricalRoller_RolPDia"></a> RolPDia

Roller pitch diameter

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? RolPDia
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_CylindricalRoller_RoundR"></a> RoundR

Rounding radius

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? RoundR
```

#### Field Value

 double?

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_CylindricalRoller_nRoller"></a> nRoller

Number of roller

```csharp
[Column(Width = 4, Type = ColumnType.NUMERICAL)]
public int? nRoller
```

#### Field Value

 int?

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_CylindricalRoller_GetDefaultBearing_VM_Unit_ConvertFactor_"></a> GetDefaultBearing\(ConvertFactor\)

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

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_CylindricalRoller_UnitConvert_VM_Managed_DAFUL_GearTrain_BearingDB_CylindricalRoller__VM_Unit_ConvertFactor_"></a> UnitConvert\(ref CylindricalRoller, ConvertFactor\)

Convert bearing dimension unit.

```csharp
public void UnitConvert(ref CylindricalRoller br, Unit.ConvertFactor factor)
```

#### Parameters

`br` [CylindricalRoller](VM.Managed.DAFUL.GearTrain.BearingDB.CylindricalRoller.md)

The target bearing.

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_GearTrain_BearingDB_CylindricalRoller_UnitConvert_VM_Managed_DAFUL_GearTrain_BearingDB_CylindricalRoller__System_Double_System_Double_System_Double_"></a> UnitConvert\(ref CylindricalRoller, double, double, double\)

Convert bearing dimension unit.

```csharp
public void UnitConvert(ref CylindricalRoller br, double dLengthFactor, double dForceFactor, double dMassFactor)
```

#### Parameters

`br` [CylindricalRoller](VM.Managed.DAFUL.GearTrain.BearingDB.CylindricalRoller.md)

The target bearing.

`dLengthFactor` double

The length factor.

`dForceFactor` double

The force factor.

`dMassFactor` double

The mass factor.

