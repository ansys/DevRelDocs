# Class DBRecordForBearing

Namespace: [VM.Managed.DAFUL.GearTrain.BearingDB](VM.Managed.DAFUL.GearTrain.BearingDB.md)  
Assembly: VMDGearTrain.dll  

Common bearing data

```csharp
public class DBRecordForBearing : DBRecord
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
Record ← 
DBRecord ← 
[DBRecordForBearing](VM.Managed.DAFUL.GearTrain.BearingDB.DBRecordForBearing.md)

#### Derived

[AngularContactBall](VM.Managed.DAFUL.GearTrain.BearingDB.AngularContactBall.md), 
[CylindricalRoller](VM.Managed.DAFUL.GearTrain.BearingDB.CylindricalRoller.md), 
[RadialBall](VM.Managed.DAFUL.GearTrain.BearingDB.RadialBall.md), 
[TaperedRoller](VM.Managed.DAFUL.GearTrain.BearingDB.TaperedRoller.md)

#### Inherited Members

Record.RecordNo

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### DBRecordForBearing\(\)

```csharp
public DBRecordForBearing()
```

## Fields

### Bore

Bore

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? Bore
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### Company

Company

```csharp
[Column(Width = 8)]
public string Company
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Designation

Designation

```csharp
[Column(Width = 32)]
public string Designation
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### OutDia

Outer diameter

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? OutDia
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### Type

Bearing type

```csharp
[Column(Width = 32)]
public string Type
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Width

Width

```csharp
[Column(Width = 16, Type = ColumnType.NUMERICAL)]
public double? Width
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)?

### nRows

Number of row

```csharp
[Column(Width = 4, Type = ColumnType.NUMERICAL)]
public int? nRows
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?


