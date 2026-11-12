# Class ShoeProfileParametric
<a id="VM_Managed_CAD_Track_ShoeProfileParametric"></a>

Namespace: [VM.Managed.CAD.Track](VM.Managed.CAD.Track.md)  
Assembly: VMDTrackBase.dll  

The abstract class for parametric shoe

```csharp
public abstract class ShoeProfileParametric : ShoeProfileBase
```

#### Inheritance

object ← 
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

### <a id="VM_Managed_CAD_Track_ShoeProfileParametric__ctor"></a> ShoeProfileParametric\(\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Track.ShoeProfileParametric" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ShoeProfileParametric()
```

## Properties

### <a id="VM_Managed_CAD_Track_ShoeProfileParametric_FirstGH"></a> FirstGH

Gets and sets height for first grouser .

```csharp
public double FirstGH { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_CAD_Track_ShoeProfileParametric_FirstGLW"></a> FirstGLW

Gets and sets lower width for first grouser.

```csharp
public double FirstGLW { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_CAD_Track_ShoeProfileParametric_FirstGUW"></a> FirstGUW

Gets and sets upper width for first grouser

```csharp
public double FirstGUW { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_CAD_Track_ShoeProfileParametric_LDP1"></a> LDP1

Gets and sets longitudinal distance from reference position to p1.

```csharp
public double LDP1 { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_CAD_Track_ShoeProfileParametric_LDP2"></a> LDP2

Gets and sets longitudinal distance from reference position to p2.

```csharp
public double LDP2 { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_CAD_Track_ShoeProfileParametric_LDQ1"></a> LDQ1

Gets and sets longitudinal distance from reference position to q1.

```csharp
public double LDQ1 { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_CAD_Track_ShoeProfileParametric_RP1"></a> RP1

Gets and sets arc radius with respect to p1.

```csharp
public double RP1 { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_CAD_Track_ShoeProfileParametric_RP2"></a> RP2

Gets and sets arc radius with respect to p2.

```csharp
public double RP2 { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_CAD_Track_ShoeProfileParametric_RQ1"></a> RQ1

Gets and sets arc radius with respect to q1.

```csharp
public double RQ1 { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_CAD_Track_ShoeProfileParametric_ShoeDistance1"></a> ShoeDistance1

Gets and sets longitudinal distance from reference position to shoe head.

```csharp
public double ShoeDistance1 { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_CAD_Track_ShoeProfileParametric_VDP1"></a> VDP1

Gets and sets vertical distance from reference position to p1.

```csharp
public double VDP1 { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_CAD_Track_ShoeProfileParametric_VDP2"></a> VDP2

Gets and sets vertical distance from reference position to p2.

```csharp
public double VDP2 { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_CAD_Track_ShoeProfileParametric_VDQ1"></a> VDQ1

Gets and sets vertical distance from reference position to q1.

```csharp
public double VDQ1 { get; set; }
```

#### Property Value

 double

## Methods

### <a id="VM_Managed_CAD_Track_ShoeProfileParametric_CheckValidationAboutBuild"></a> CheckValidationAboutBuild\(\)

Checks the validation about build.

```csharp
public override void CheckValidationAboutBuild()
```

### <a id="VM_Managed_CAD_Track_ShoeProfileParametric_Claculation_TangentPoint_Between_Two_Circle_VM_Managed_VectorBase_System_Double_VM_Managed_VectorBase_System_Double_"></a> Claculation\_TangentPoint\_Between\_Two\_Circle\(VectorBase, double, VectorBase, double\)

Called when tangent points calculates bewteen two circles.

```csharp
protected List<VectorBase> Claculation_TangentPoint_Between_Two_Circle(VectorBase ptCenter1, double dR1, VectorBase ptCenter2, double dR2)
```

#### Parameters

`ptCenter1` VectorBase

The center position of reference

`dR1` double

The radius of reference.

`ptCenter2` VectorBase

The center position.

`dR2` double

The radius.

#### Returns

 List<VectorBase\>

The list of points

### <a id="VM_Managed_CAD_Track_ShoeProfileParametric_CreateProfile"></a> CreateProfile\(\)

Create profile data.

```csharp
protected override bool CreateProfile()
```

#### Returns

 bool

### <a id="VM_Managed_CAD_Track_ShoeProfileParametric_GetAngleUsingCosine2Law_VM_Managed_VectorBase_VM_Managed_VectorBase_VM_Managed_VectorBase_"></a> GetAngleUsingCosine2Law\(VectorBase, VectorBase, VectorBase\)

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

 double

angle value

### <a id="VM_Managed_CAD_Track_ShoeProfileParametric_GetX_UsingEquationOfCircle_VM_Managed_VectorBase_System_Double_System_Double_"></a> GetX\_UsingEquationOfCircle\(VectorBase, double, double\)

Gets x data using Equations of circles

```csharp
protected double[] GetX_UsingEquationOfCircle(VectorBase vecCP, double _dy, double _radius)
```

#### Parameters

`vecCP` VectorBase

Center position of circle

`_dy` double

y-value

`_radius` double

radius

#### Returns

 double\[\]

x-value array

### <a id="VM_Managed_CAD_Track_ShoeProfileParametric_GetY_UsingEquationOfCircle_VM_Managed_VectorBase_System_Double_System_Double_"></a> GetY\_UsingEquationOfCircle\(VectorBase, double, double\)

Gets y data using Equations of circles

```csharp
protected double[] GetY_UsingEquationOfCircle(VectorBase vecCP, double _dx, double _radius)
```

#### Parameters

`vecCP` VectorBase

Center position of circle

`_dx` double

x-value

`_radius` double

radius

#### Returns

 double\[\]

y-value array

### <a id="VM_Managed_CAD_Track_ShoeProfileParametric_Validation"></a> Validation\(\)

Check validation for member variables.

```csharp
public override void Validation()
```

