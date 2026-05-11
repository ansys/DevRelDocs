# Class BeamFile

Namespace: [VM.Models.FE.Mesh.Generator](VM.Models.FE.Mesh.Generator.md)  
Assembly: VM.Models.FE.Mesh.Generator.dll  

```csharp
public sealed class BeamFile
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BeamFile](VM.Models.FE.Mesh.Generator.BeamFile.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### BeamFile\(double, int, int, Vector, Vector, Vector\)

```csharp
public BeamFile(double radius, int numberOfCircularNodes, int numberOfBeamNodes, Vector startPoint, Vector endPoint, Vector yDirection)
```

#### Parameters

`radius` [double](https://learn.microsoft.com/dotnet/api/system.double)

`numberOfCircularNodes` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`numberOfBeamNodes` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`startPoint` Vector

`endPoint` Vector

`yDirection` Vector

### BeamFile\(BeamFileParams\)

```csharp
public BeamFile(BeamFileParams param)
```

#### Parameters

`param` [BeamFileParams](VM.Models.FE.Mesh.Generator.BeamFileParams.md)

## Properties

### BeamMaterialDampingRatio

```csharp
public double BeamMaterialDampingRatio { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### BeamMaterialDensity

```csharp
public double BeamMaterialDensity { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### BeamMaterialPoissonsRatio

```csharp
public double BeamMaterialPoissonsRatio { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### BeamMaterialShearModulus

```csharp
public double BeamMaterialShearModulus { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### BeamMaterialYoungsModulus

```csharp
public double BeamMaterialYoungsModulus { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### BufferCount

```csharp
public int BufferCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GenerateInnerRBE

```csharp
public bool GenerateInnerRBE { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InnerRBEs

```csharp
public IEnumerable<RBE2> InnerRBEs { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<RBE2\>

### NumberOfBeamNodes

```csharp
public int NumberOfBeamNodes { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### NumberOfCircularNodes

```csharp
public int NumberOfCircularNodes { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Radius

```csharp
public double Radius { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### WriteMessage

```csharp
public Action<string> WriteMessage { get; set; }
```

#### Property Value

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### YDirection

```csharp
public Vector YDirection { get; }
```

#### Property Value

 Vector

## Methods

### Generate\(string\)

```csharp
public void Generate(string bdfFilePath)
```

#### Parameters

`bdfFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)


