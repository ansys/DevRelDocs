# Class BuilderParamShoe

Namespace: [VM.CAD.Builders.Links](VM.CAD.Builders.Links.md)  
Assembly: VM.CAD.Builders.Links.dll  

```csharp
public class BuilderParamShoe : BuilderParamTransform
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
BuilderParamBase ← 
BuilderParamColorGeom ← 
BuilderParamTransform ← 
[BuilderParamShoe](VM.CAD.Builders.Links.BuilderParamShoe.md)

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

### BuilderParamShoe\(\)

```csharp
public BuilderParamShoe()
```

## Properties

### Cylinders

```csharp
public List<BuilderParamCylinder> Cylinders { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<BuilderParamCylinder\>

### ExtrudeAxis

```csharp
public Vector ExtrudeAxis { get; set; }
```

#### Property Value

 Vector

### Points

```csharp
public List<Vector> Points { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Vector\>

### Width

```csharp
public double Width { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### WorkPlane

```csharp
public Plane WorkPlane { get; set; }
```

#### Property Value

 Plane


