# Class ProfileSprocketBase

Namespace: [VM.Managed.CAD.Sprocket](VM.Managed.CAD.Sprocket.md)  
Assembly: VMDSprocket.dll  

The base class is sprocket profile.

```csharp
public abstract class ProfileSprocketBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ProfileSprocketBase](VM.Managed.CAD.Sprocket.ProfileSprocketBase.md)

#### Derived

[ProfileSprocket\_ASA](VM.Managed.CAD.Sprocket.ProfileSprocket\_ASA.md), 
[ProfileSprocket\_BS](VM.Managed.CAD.Sprocket.ProfileSprocket\_BS.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### ProfileSprocketBase\(ProfileDataSprocket\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Sprocket.ProfileSprocketBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ProfileSprocketBase(ProfileDataSprocket info)
```

#### Parameters

`info` [ProfileDataSprocket](VM.Managed.CAD.Sprocket.ProfileDataSprocket.md)

The info is data for creation profile.

## Fields

### m\_Info

The info is data for creation profile

```csharp
protected ProfileDataSprocket m_Info
```

#### Field Value

 [ProfileDataSprocket](VM.Managed.CAD.Sprocket.ProfileDataSprocket.md)

### m\_dRadius\_shift

Shift radius value.

```csharp
protected double m_dRadius_shift
```

#### Field Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### m\_lstPtOrigin

The original point data.

```csharp
protected List<VectorBase> m_lstPtOrigin
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\>

### m\_lstPtWorkPlane

The transformed point data to work plane.

```csharp
protected List<VectorBase> m_lstPtWorkPlane
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\>

### m\_strError

Set error message when can not calculate profile.

```csharp
protected string m_strError
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### Radius\_Shift

Gets shift radius value.

```csharp
public double Radius_Shift { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### Calculation\_Gradient\(VectorBase, VectorBase\)

Find the gradient of line equation

```csharp
protected double Calculation_Gradient(VectorBase _ptArbitrary1, VectorBase _ptArbitrary2)
```

#### Parameters

`_ptArbitrary1` VectorBase

The arbitrary point.

`_ptArbitrary2` VectorBase

The arbitrary point.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

The gradient

### Calculation\_Gradient\_Bewteen\_ArbitraryPoint\_and\_Circle\(VectorBase, VectorBase, double\)

Called when the gradient calculate between arbitrary point and circle.

```csharp
protected double[] Calculation_Gradient_Bewteen_ArbitraryPoint_and_Circle(VectorBase _ptArbitrary, VectorBase ptCenterofCircle, double _dRadiusofCircle)
```

#### Parameters

`_ptArbitrary` VectorBase

The arbitrary point.

`ptCenterofCircle` VectorBase

The center point of circle.

`_dRadiusofCircle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius of circle.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The array of gradient.

### Calculation\_TangentPoint\_Through\_Line\_Circle\(double, VectorBase, VectorBase, double\)

Called when tangent points calculates through line to circle.

```csharp
protected List<VectorBase> Calculation_TangentPoint_Through_Line_Circle(double dGradient, VectorBase _ptArbitrary, VectorBase ptCenterofCircle, double _dRadiusofCircle)
```

#### Parameters

`dGradient` [double](https://learn.microsoft.com/dotnet/api/system.double)

The gradient.

`_ptArbitrary` VectorBase

The arbitrary point.

`ptCenterofCircle` VectorBase

The center point of circle.

`_dRadiusofCircle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius of circle.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\>

The list of points

### Calculation\_TangentPosition\(double, VectorBase, VectorBase, double\)

Called when tangent points calculates bewteen arbitrary point and circle.

```csharp
protected double[] Calculation_TangentPosition(double dGradient, VectorBase _ptArbitrary, VectorBase ptCenterofCircle, double _dRadiusofCircle)
```

#### Parameters

`dGradient` [double](https://learn.microsoft.com/dotnet/api/system.double)

The gradient.

`_ptArbitrary` VectorBase

The arbitrary point.

`ptCenterofCircle` VectorBase

The center point of circle.

`_dRadiusofCircle` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius of circle.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The tangent point.

### Calculation\_line\_Equation\(VectorBase, double, ref double\)

Find line equation

```csharp
protected void Calculation_line_Equation(VectorBase _ptArbitrary, double _dGradient, ref double _dConstant)
```

#### Parameters

`_ptArbitrary` VectorBase

The arbitrary point.

`_dGradient` [double](https://learn.microsoft.com/dotnet/api/system.double)

y=mx+n<code>m</code>

`_dConstant` [double](https://learn.microsoft.com/dotnet/api/system.double)

y=mx+n<code>n</code>

### Claculation\_TangentPoint\_Between\_Two\_Circle\(VectorBase, double, VectorBase, double\)

Called when tangent points calculates bewteen two circles.

```csharp
protected List<VectorBase> Claculation_TangentPoint_Between_Two_Circle(VectorBase ptCenter1, double dR1, VectorBase ptCenter2, double dR2)
```

#### Parameters

`ptCenter1` VectorBase

The center position

`dR1` [double](https://learn.microsoft.com/dotnet/api/system.double)

The radius.

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
protected virtual bool CreateProfile()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetPointData\_For\_WorkPlane\(\)

Gets points data on work plane.

```csharp
public List<VectorBase> GetPointData_For_WorkPlane()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\>

### GetPointData\_For\_XYPlane\(\)

Gets points data on XY plane.

```csharp
public List<VectorBase> GetPointData_For_XYPlane()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<VectorBase\>

### Validation\(\)

Check validation of member variables

```csharp
protected virtual bool Validation()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### matvec\(double\[\], VectorBase\)

```csharp
protected VectorBase matvec(double[] mat, VectorBase vecA)
```

#### Parameters

`mat` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`vecA` VectorBase

#### Returns

 VectorBase

### vectlvec\(VectorBase, VectorBase\)

```csharp
protected VectorBase vectlvec(VectorBase vecA, VectorBase vecB)
```

#### Parameters

`vecA` VectorBase

`vecB` VectorBase

#### Returns

 VectorBase

### vectranspose\_vectieldvec\(VectorBase, VectorBase, VectorBase\)

```csharp
protected double vectranspose_vectieldvec(VectorBase vecDepth, VectorBase vecA, VectorBase vecB)
```

#### Parameters

`vecDepth` VectorBase

`vecA` VectorBase

`vecB` VectorBase

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)


