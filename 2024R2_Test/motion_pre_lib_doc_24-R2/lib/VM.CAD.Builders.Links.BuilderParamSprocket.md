# Class BuilderParamSprocket

Namespace: [VM.CAD.Builders.Links](VM.CAD.Builders.Links.md)  
Assembly: VM.CAD.Builders.Links.dll  

```csharp
public class BuilderParamSprocket : BuilderParamTransform
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderParamBase ← 
BuilderParamColorGeom ← 
BuilderParamTransform ← 
[BuilderParamSprocket](VM.CAD.Builders.Links.BuilderParamSprocket.md)

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

### BuilderParamSprocket\(\)

```csharp
public BuilderParamSprocket()
```

## Properties

### BooleanType

```csharp
public BooleanType BooleanType { get; set; }
```

#### Property Value

 [BooleanType](VM.CAD.Builders.Links.BooleanType.md)

### ExtrudeAxis

```csharp
public Vector ExtrudeAxis { get; set; }
```

#### Property Value

 Vector

### NumberOfTooth

```csharp
public int NumberOfTooth { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Points

```csharp
public List<Vector> Points { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Vector\>

### ShaftRadius

```csharp
public double ShaftRadius { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ShaftWidth

```csharp
public double ShaftWidth { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### SprocketWidth

```csharp
public double SprocketWidth { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### UseShaft

```csharp
public bool UseShaft { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WorkPlane

```csharp
public Plane WorkPlane { get; set; }
```

#### Property Value

 Plane


