# Class BuilderParamLink

Namespace: [VM.CAD.Builders.Links](VM.CAD.Builders.Links.md)  
Assembly: VM.CAD.Builders.Links.dll  

This class represents the builder parameter for the link geometry.

```csharp
public class BuilderParamLink : BuilderParamTransform
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderParamBase ← 
BuilderParamColorGeom ← 
BuilderParamTransform ← 
[BuilderParamLink](VM.CAD.Builders.Links.BuilderParamLink.md)

#### Derived

[BuilderParamLinkSimple](VM.CAD.Builders.Links.BuilderParamLinkSimple.md), 
[BuilderParamLinkV](VM.CAD.Builders.Links.BuilderParamLinkV.md)

#### Inherited Members

BuilderParamTransform.Transform, 
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

### BuilderParamLink\(\)

```csharp
public BuilderParamLink()
```

## Properties

### BushBooleanType

```csharp
public BooleanType BushBooleanType { get; set; }
```

#### Property Value

 [BooleanType](VM.CAD.Builders.Links.BooleanType.md)

### InnerGauge

```csharp
public double InnerGauge { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### LinkGeometry

```csharp
public BuilderParamMultiUnite LinkGeometry { get; set; }
```

#### Property Value

 BuilderParamMultiUnite

### LinkHeight1

```csharp
public double LinkHeight1 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### LinkHeight2

```csharp
public double LinkHeight2 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### LinkPitch

```csharp
public double LinkPitch { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### LinkTransform

```csharp
public TMatrix LinkTransform { get; set; }
```

#### Property Value

 TMatrix

### LinkType

```csharp
public LinkType LinkType { get; set; }
```

#### Property Value

 [LinkType](VM.CAD.Builders.Links.LinkType.md)

### OuterGauge

```csharp
public double OuterGauge { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### PinBooleanType

```csharp
public BooleanType PinBooleanType { get; set; }
```

#### Property Value

 [BooleanType](VM.CAD.Builders.Links.BooleanType.md)

### PinDiameter

```csharp
public double PinDiameter { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### PinWidth

```csharp
public double PinWidth { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### AddCylinder\(double, double, double, BooleanType\)

```csharp
protected void AddCylinder(double diameter, double xPosition, double zPosition, BooleanType booleanType)
```

#### Parameters

`diameter` [double](https://learn.microsoft.com/dotnet/api/system.double)

`xPosition` [double](https://learn.microsoft.com/dotnet/api/system.double)

`zPosition` [double](https://learn.microsoft.com/dotnet/api/system.double)

`booleanType` [BooleanType](VM.CAD.Builders.Links.BooleanType.md)

### AddSubtractBuilderParam\(BuilderParamBase\)

```csharp
public void AddSubtractBuilderParam(BuilderParamBase builderParam)
```

#### Parameters

`builderParam` BuilderParamBase

### AddSubtractBuilderParam\(IEnumerable<BuilderParamBase\>\)

```csharp
public void AddSubtractBuilderParam(IEnumerable<BuilderParamBase> builderParams)
```

#### Parameters

`builderParams` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<BuilderParamBase\>

### AddUniteBuilderParam\(BuilderParamBase\)

```csharp
public void AddUniteBuilderParam(BuilderParamBase builderParam)
```

#### Parameters

`builderParam` BuilderParamBase

### AddUniteBuilderParam\(IEnumerable<BuilderParamBase\>\)

```csharp
public void AddUniteBuilderParam(IEnumerable<BuilderParamBase> builderParams)
```

#### Parameters

`builderParams` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<BuilderParamBase\>


