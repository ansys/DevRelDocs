# Class ShoeProfileTriple

Namespace: [VM.Managed.CAD.Track](VM.Managed.CAD.Track.md)  
Assembly: VMDTrackBase.dll  

The class for triple shoe profile.

```csharp
public class ShoeProfileTriple : ShoeProfileParametric
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ShoeProfileBase](VM.Managed.CAD.Track.ShoeProfileBase.md) ← 
[ShoeProfileParametric](VM.Managed.CAD.Track.ShoeProfileParametric.md) ← 
[ShoeProfileTriple](VM.Managed.CAD.Track.ShoeProfileTriple.md)

#### Inherited Members

[ShoeProfileParametric.CreateProfile\(\)](VM.Managed.CAD.Track.ShoeProfileParametric.md\#VM\_Managed\_CAD\_Track\_ShoeProfileParametric\_CreateProfile), 
[ShoeProfileParametric.Validation\(\)](VM.Managed.CAD.Track.ShoeProfileParametric.md\#VM\_Managed\_CAD\_Track\_ShoeProfileParametric\_Validation), 
[ShoeProfileParametric.CheckValidationAboutBuild\(\)](VM.Managed.CAD.Track.ShoeProfileParametric.md\#VM\_Managed\_CAD\_Track\_ShoeProfileParametric\_CheckValidationAboutBuild), 
[ShoeProfileParametric.GetX\_UsingEquationOfCircle\(VectorBase, double, double\)](VM.Managed.CAD.Track.ShoeProfileParametric.md\#VM\_Managed\_CAD\_Track\_ShoeProfileParametric\_GetX\_UsingEquationOfCircle\_VM\_Managed\_VectorBase\_System\_Double\_System\_Double\_), 
[ShoeProfileParametric.GetY\_UsingEquationOfCircle\(VectorBase, double, double\)](VM.Managed.CAD.Track.ShoeProfileParametric.md\#VM\_Managed\_CAD\_Track\_ShoeProfileParametric\_GetY\_UsingEquationOfCircle\_VM\_Managed\_VectorBase\_System\_Double\_System\_Double\_), 
[ShoeProfileParametric.GetAngleUsingCosine2Law\(VectorBase, VectorBase, VectorBase\)](VM.Managed.CAD.Track.ShoeProfileParametric.md\#VM\_Managed\_CAD\_Track\_ShoeProfileParametric\_GetAngleUsingCosine2Law\_VM\_Managed\_VectorBase\_VM\_Managed\_VectorBase\_VM\_Managed\_VectorBase\_), 
[ShoeProfileParametric.Claculation\_TangentPoint\_Between\_Two\_Circle\(VectorBase, double, VectorBase, double\)](VM.Managed.CAD.Track.ShoeProfileParametric.md\#VM\_Managed\_CAD\_Track\_ShoeProfileParametric\_Claculation\_TangentPoint\_Between\_Two\_Circle\_VM\_Managed\_VectorBase\_System\_Double\_VM\_Managed\_VectorBase\_System\_Double\_), 
[ShoeProfileParametric.VDP1](VM.Managed.CAD.Track.ShoeProfileParametric.md\#VM\_Managed\_CAD\_Track\_ShoeProfileParametric\_VDP1), 
[ShoeProfileParametric.LDP1](VM.Managed.CAD.Track.ShoeProfileParametric.md\#VM\_Managed\_CAD\_Track\_ShoeProfileParametric\_LDP1), 
[ShoeProfileParametric.RP1](VM.Managed.CAD.Track.ShoeProfileParametric.md\#VM\_Managed\_CAD\_Track\_ShoeProfileParametric\_RP1), 
[ShoeProfileParametric.VDP2](VM.Managed.CAD.Track.ShoeProfileParametric.md\#VM\_Managed\_CAD\_Track\_ShoeProfileParametric\_VDP2), 
[ShoeProfileParametric.LDP2](VM.Managed.CAD.Track.ShoeProfileParametric.md\#VM\_Managed\_CAD\_Track\_ShoeProfileParametric\_LDP2), 
[ShoeProfileParametric.RP2](VM.Managed.CAD.Track.ShoeProfileParametric.md\#VM\_Managed\_CAD\_Track\_ShoeProfileParametric\_RP2), 
[ShoeProfileParametric.VDQ1](VM.Managed.CAD.Track.ShoeProfileParametric.md\#VM\_Managed\_CAD\_Track\_ShoeProfileParametric\_VDQ1), 
[ShoeProfileParametric.LDQ1](VM.Managed.CAD.Track.ShoeProfileParametric.md\#VM\_Managed\_CAD\_Track\_ShoeProfileParametric\_LDQ1), 
[ShoeProfileParametric.RQ1](VM.Managed.CAD.Track.ShoeProfileParametric.md\#VM\_Managed\_CAD\_Track\_ShoeProfileParametric\_RQ1), 
[ShoeProfileParametric.ShoeDistance1](VM.Managed.CAD.Track.ShoeProfileParametric.md\#VM\_Managed\_CAD\_Track\_ShoeProfileParametric\_ShoeDistance1), 
[ShoeProfileParametric.FirstGH](VM.Managed.CAD.Track.ShoeProfileParametric.md\#VM\_Managed\_CAD\_Track\_ShoeProfileParametric\_FirstGH), 
[ShoeProfileParametric.FirstGUW](VM.Managed.CAD.Track.ShoeProfileParametric.md\#VM\_Managed\_CAD\_Track\_ShoeProfileParametric\_FirstGUW), 
[ShoeProfileParametric.FirstGLW](VM.Managed.CAD.Track.ShoeProfileParametric.md\#VM\_Managed\_CAD\_Track\_ShoeProfileParametric\_FirstGLW), 
[ShoeProfileBase.m\_lstPtOrigin](VM.Managed.CAD.Track.ShoeProfileBase.md\#VM\_Managed\_CAD\_Track\_ShoeProfileBase\_m\_lstPtOrigin), 
[ShoeProfileBase.m\_lstPtWorkPlane](VM.Managed.CAD.Track.ShoeProfileBase.md\#VM\_Managed\_CAD\_Track\_ShoeProfileBase\_m\_lstPtWorkPlane), 
[ShoeProfileBase.GetPointData\_For\_XYPlane\(\)](VM.Managed.CAD.Track.ShoeProfileBase.md\#VM\_Managed\_CAD\_Track\_ShoeProfileBase\_GetPointData\_For\_XYPlane), 
[ShoeProfileBase.CreateProfile\(\)](VM.Managed.CAD.Track.ShoeProfileBase.md\#VM\_Managed\_CAD\_Track\_ShoeProfileBase\_CreateProfile), 
[ShoeProfileBase.Validation\(\)](VM.Managed.CAD.Track.ShoeProfileBase.md\#VM\_Managed\_CAD\_Track\_ShoeProfileBase\_Validation), 
[ShoeProfileBase.CheckValidationAboutBuild\(\)](VM.Managed.CAD.Track.ShoeProfileBase.md\#VM\_Managed\_CAD\_Track\_ShoeProfileBase\_CheckValidationAboutBuild), 
[ShoeProfileBase.GetWorkPlaneData\(\)](VM.Managed.CAD.Track.ShoeProfileBase.md\#VM\_Managed\_CAD\_Track\_ShoeProfileBase\_GetWorkPlaneData), 
[ShoeProfileBase.SetInitializeValue\(\)](VM.Managed.CAD.Track.ShoeProfileBase.md\#VM\_Managed\_CAD\_Track\_ShoeProfileBase\_SetInitializeValue), 
[ShoeProfileBase.BasePlateHeight](VM.Managed.CAD.Track.ShoeProfileBase.md\#VM\_Managed\_CAD\_Track\_ShoeProfileBase\_BasePlateHeight), 
[ShoeProfileBase.ShoeLength](VM.Managed.CAD.Track.ShoeProfileBase.md\#VM\_Managed\_CAD\_Track\_ShoeProfileBase\_ShoeLength)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### ShoeProfileTriple\(\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Track.ShoeProfileTriple" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ShoeProfileTriple()
```

## Properties

### SecondGH

Gets and sets height for second grouser .

```csharp
public double SecondGH { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### SecondGLW

Gets and sets lower width for second grouser.

```csharp
public double SecondGLW { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### SecondGUW

Gets and sets upper width for second grouser

```csharp
public double SecondGUW { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ShoeDistance2

Gets and sets longitudinal distance from reference position to second grouser center position.

```csharp
public double ShoeDistance2 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ShoeDistance3

Gets and sets longitudinal distance from reference position to third grouser center position.

```csharp
public double ShoeDistance3 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### TailHeight

Gets and sets height for tail.

```csharp
public double TailHeight { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ThirdGH

Gets and sets height for third grouser .

```csharp
public double ThirdGH { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ThirdGLW

Gets and sets lower width for third grouser.

```csharp
public double ThirdGLW { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ThirdGUW

Gets and sets upper width for third grouser

```csharp
public double ThirdGUW { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### CheckValidationAboutBuild\(\)

Checks the validation about build.

```csharp
public override void CheckValidationAboutBuild()
```

### CreateProfile\(\)

Create profile data.

```csharp
protected override bool CreateProfile()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetInitializeValue\(\)

```csharp
public override void SetInitializeValue()
```

### Validation\(\)

Check validation for member variables.

```csharp
public override void Validation()
```


