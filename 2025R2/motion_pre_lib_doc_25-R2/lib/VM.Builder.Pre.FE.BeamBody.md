# Class BeamBody

Namespace: [VM.Builder.Pre.FE](VM.Builder.Pre.FE.md)  
Assembly: VM.Builder.Pre.FE.dll  

```csharp
public class BeamBody : IBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BeamBody](VM.Builder.Pre.FE.BeamBody.md)

#### Implements

IBuilder

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### BeamBody\(\)

```csharp
public BeamBody()
```

## Properties

### EndPoint

```csharp
public PointBase EndPoint { get; }
```

#### Property Value

 PointBase

### MeshFilePath

```csharp
public string MeshFilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### NoOfBeamNodes

```csharp
public int NoOfBeamNodes { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NoOfCircularNodes

```csharp
public int NoOfCircularNodes { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NodalBody

```csharp
public NodalBody NodalBody { get; }
```

#### Property Value

 NodalBody

### Parameters

```csharp
public PickedResult[] Parameters { get; set; }
```

#### Property Value

 PickedResult\[\]

### Radius

```csharp
public double Radius { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### StartPoint

```csharp
public PointBase StartPoint { get; }
```

#### Property Value

 PointBase

### YDirection

```csharp
public DirectionBase YDirection { get; }
```

#### Property Value

 DirectionBase


