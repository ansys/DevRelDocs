#  Class BuilderParamGear

Namespace: [VM.CAD.Builders.DriveTrain](VM.CAD.Builders.DriveTrain.md)  
Assembly: VM.CAD.Builders.DriveTrain.dll  

This class represents the builder parameter for the gear geometry

```csharp
public abstract class BuilderParamGear : BuilderParamColorGeom
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderParamBase ← 
BuilderParamColorGeom ← 
[BuilderParamGear](VM.CAD.Builders.DriveTrain.BuilderParamGear.md)

#### Derived

[BuilderParamGearForGearTrain](VM.CAD.Builders.DriveTrain.BuilderParamGearForGearTrain.md), 
[BuilderParamRack](VM.CAD.Builders.DriveTrain.BuilderParamRack.md)

#### Inherited Members

BuilderParamColorGeom.Color, 
BuilderParamBase.ToXmlString\(\), 
BuilderParamBase.FinalizeParameter\(\), 
BuilderParamBase.SetTypeName\(\), 
BuilderParamBase.Key, 
BuilderParamBase.TypeName, 
BuilderParamBase.Transparency

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_CAD_Builders_DriveTrain_BuilderParamGear__ctor"></a> BuilderParamGear\(\)

```csharp
protected BuilderParamGear()
```

## Properties

### <a id="VM_CAD_Builders_DriveTrain_BuilderParamGear_CenterPosition"></a> CenterPosition

```csharp
public Vector CenterPosition { get; set; }
```

#### Property Value

 Vector

### <a id="VM_CAD_Builders_DriveTrain_BuilderParamGear_FaceWidth"></a> FaceWidth

```csharp
public double FaceWidth { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Builders_DriveTrain_BuilderParamGear_HelixAngle"></a> HelixAngle

```csharp
public double HelixAngle { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Builders_DriveTrain_BuilderParamGear_HelixDir"></a> HelixDir

```csharp
public double HelixDir { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Builders_DriveTrain_BuilderParamGear_MatchAngle"></a> MatchAngle

```csharp
public double MatchAngle { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Builders_DriveTrain_BuilderParamGear_NumOfTeeth"></a> NumOfTeeth

```csharp
public int NumOfTeeth { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_CAD_Builders_DriveTrain_BuilderParamGear_Orientation"></a> Orientation

```csharp
public OMatrix Orientation { get; set; }
```

#### Property Value

 OMatrix

### <a id="VM_CAD_Builders_DriveTrain_BuilderParamGear_PitchRadius"></a> PitchRadius

```csharp
public double PitchRadius { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_CAD_Builders_DriveTrain_BuilderParamGear_Splines"></a> Splines

```csharp
public List<SplineInfo> Splines { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<SplineInfo\>

