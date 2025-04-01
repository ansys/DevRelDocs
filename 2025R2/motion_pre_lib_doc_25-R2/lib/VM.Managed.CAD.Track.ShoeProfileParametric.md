# Class ShoeProfileParametric

Namespace: [VM.Managed.CAD.Track](VM.Managed.CAD.Track.md)  
Assembly: VMDTrackBase.dll  

The abstract class for parametric shoe

```csharp
public abstract class ShoeProfileParametric : ShoeProfileBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ShoeProfileBase](VM.Managed.CAD.Track.ShoeProfileBase.md) ← 
[ShoeProfileParametric](VM.Managed.CAD.Track.ShoeProfileParametric.md)

#### Derived

[ShoeProfileDouble](VM.Managed.CAD.Track.ShoeProfileDouble.md), 
[ShoeProfileSingle](VM.Managed.CAD.Track.ShoeProfileSingle.md), 
[ShoeProfileTriple](VM.Managed.CAD.Track.ShoeProfileTriple.md)

#### Inherited Members

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

### ShoeProfileParametric\(\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Track.ShoeProfileParametric" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ShoeProfileParametric()
```

## Properties

### FirstGH

Gets and sets height for first grouser .

```csharp
public double FirstGH { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### FirstGLW

Gets and sets lower width for first grouser.

```csharp
public double FirstGLW { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### FirstGUW

Gets and sets upper width for first grouser

```csharp
public double FirstGUW { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### LDP1

Gets and sets longitudinal distance from reference position to p1.

```csharp
public double LDP1 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### LDP2

Gets and sets longitudinal distance from reference position to p2.

```csharp
public double LDP2 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### LDQ1

Gets and sets longitudinal distance from reference position to q1.

```csharp
public double LDQ1 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### RP1

Gets and sets arc radius with respect to p1.

```csharp
public double RP1 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### RP2

Gets and sets arc radius with respect to p2.

```csharp
public double RP2 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### RQ1

Gets and sets arc radius with respect to q1.

```csharp
public double RQ1 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### ShoeDistance1

Gets and sets longitudinal distance from reference position to shoe head.

```csharp
public double ShoeDistance1 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### VDP1

Gets and sets vertical distance from reference position to p1.

```csharp
public double VDP1 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### VDP2

Gets and sets vertical distance from reference position to p2.

```csharp
public double VDP2 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### VDQ1

Gets and sets vertical distance from reference position to q1.

```csharp
public double VDQ1 { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### CheckValidationAboutBuild\(\)

Checks the validation about build.

```csharp
public override void CheckValidationAboutBuild()
```

### Claculation\_TangentPoint\_Between\_Two\_Circle\(VectorBase, double, VectorBase, double\)

Called when tangent points calculates bewteen two circles.

```csharp
protected List<VectorBase> Claculation_TangentPoint_Between_Two_Circle(VectorBase ptCenter1, double dR1, VectorBase ptCenter2, double dR2)
```

#### Parameters

`ptCenter1` VectorBase

The center position of reference

`dR1` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius of reference.

`ptCenter2` VectorBase

The center position.

`dR2` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\>

The list of points

### CreateProfile\(\)

Create profile data.

```csharp
protected override bool CreateProfile()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetAngleUsingCosine2Law\(VectorBase, VectorBase, VectorBase\)

Gets angle using laq of cosine

```csharp
protected double GetAngleUsingCosine2Law(VectorBase vecA, VectorBase vecB, VectorBase vecC)
```

#### Parameters

`vecA` VectorBase

Point A

`vecB` VectorBase

Point B

`vecC` VectorBase

Point C

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

angle value

### GetX\_UsingEquationOfCircle\(VectorBase, double, double\)

Gets x data using Equations of circles

```csharp
protected double[] GetX_UsingEquationOfCircle(VectorBase vecCP, double _dy, double _radius)
```

#### Parameters

`vecCP` VectorBase

Center position of circle

`_dy` [double](https://learn.microsoft.com/dotnet/api/system.double)

y-value

`_radius` [double](https://learn.microsoft.com/dotnet/api/system.double)

radius

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

x-value array

### GetY\_UsingEquationOfCircle\(VectorBase, double, double\)

Gets y data using Equations of circles

```csharp
protected double[] GetY_UsingEquationOfCircle(VectorBase vecCP, double _dx, double _radius)
```

#### Parameters

`vecCP` VectorBase

Center position of circle

`_dx` [double](https://learn.microsoft.com/dotnet/api/system.double)

x-value

`_radius` [double](https://learn.microsoft.com/dotnet/api/system.double)

radius

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

y-value array

### Validation\(\)

Check validation for member variables.

```csharp
public override void Validation()
```


