# Class CrossSectionBase

Namespace: [VM.Managed.DAFUL.Beam](VM.Managed.DAFUL.Beam.md)  
Assembly: VM.Models.FE.BeamCrossSection.dll  

```csharp
public class CrossSectionBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CrossSectionBase](VM.Managed.DAFUL.Beam.CrossSectionBase.md)

#### Derived

[CIRCULAR](VM.Managed.DAFUL.Beam.CIRCULAR.md), 
[ELLIPTICAL](VM.Managed.DAFUL.Beam.ELLIPTICAL.md), 
[HOLLOW\_RECTANGULAR](VM.Managed.DAFUL.Beam.HOLLOW\_RECTANGULAR.md), 
[HOLLOW\_TAPERED\_CIRCULAR](VM.Managed.DAFUL.Beam.HOLLOW\_TAPERED\_CIRCULAR.md), 
[I\_BEAM](VM.Managed.DAFUL.Beam.I\_BEAM.md), 
[RECTANGULAR](VM.Managed.DAFUL.Beam.RECTANGULAR.md), 
[THIN\_TUBE](VM.Managed.DAFUL.Beam.THIN\_TUBE.md), 
[T\_BEAM](VM.Managed.DAFUL.Beam.T\_BEAM.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### CrossSectionBase\(\)

```csharp
public CrossSectionBase()
```

## Fields

### m\_nGeomInfoArrayCount

```csharp
protected uint m_nGeomInfoArrayCount
```

#### Field Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### m\_nNastranArrayCount

```csharp
protected uint m_nNastranArrayCount
```

#### Field Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Properties

### pi

```csharp
protected double pi { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### CheckDensity\(double\)

```csharp
protected void CheckDensity(double dDensity)
```

#### Parameters

`dDensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

### CheckGeomInfo\(double\[\]\)

```csharp
public void CheckGeomInfo(double[] dSInfo)
```

#### Parameters

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### CheckInputCount\(double\[\]\)

```csharp
protected void CheckInputCount(double[] dSInfo)
```

#### Parameters

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### CheckLength\(double\)

```csharp
protected void CheckLength(double dLength)
```

#### Parameters

`dLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

### CheckMass\(double\)

```csharp
protected void CheckMass(double dMass)
```

#### Parameters

`dMass` [double](https://learn.microsoft.com/dotnet/api/system.double)

### GenerateMultiSection\(double\[\], int\)

```csharp
public virtual double[] GenerateMultiSection(double[] dSInfo, int ElementCount)
```

#### Parameters

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`ElementCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### GenerateOneSection\(double\[\]\)

```csharp
public virtual double[] GenerateOneSection(double[] dSInfo)
```

#### Parameters

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### GeneratePostConnectivities\(int, ref int\[\], ref int\[\]\)

```csharp
public virtual int GeneratePostConnectivities(int RenderingType, ref int[] iENodes, ref int[] iStartENodes)
```

#### Parameters

`RenderingType` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`iENodes` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

`iStartENodes` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GeneratePostOneSection\(double\[\], int\)

```csharp
public virtual double[] GeneratePostOneSection(double[] dSInfo, int RenderingType = 1)
```

#### Parameters

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`RenderingType` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### GeneratePostTwoSection\(double\[\], double\[\], double\[\], double\[\], double\[\], int\)

```csharp
public virtual double[] GeneratePostTwoSection(double[] dSInfo, double[] dStartPoint, double[] dEndPoint, double[] dStartOri, double[] dEndOri, int RenderingType)
```

#### Parameters

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dStartPoint` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dEndPoint` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dStartOri` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dEndOri` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`RenderingType` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### GenerateTwoSection\(double\[\], double\[\], double\[\], double\[\]\)

```csharp
public double[,] GenerateTwoSection(double[] dSInfo, double[] dStartPoint, double[] dEndPoint, double[] dOrienMatrix)
```

#### Parameters

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dStartPoint` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dEndPoint` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dOrienMatrix` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[,\]

### GetArea\(double\[\]\)

```csharp
public virtual double GetArea(double[] dSInfo)
```

#### Parameters

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetAreaProperties\(double\[\], double\)

```csharp
public virtual double[] GetAreaProperties(double[] dSInfo, double dPoissonRatio)
```

#### Parameters

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dPoissonRatio` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### GetAsy\(double\[\], double\)

```csharp
public virtual double GetAsy(double[] dSInfo, double dPoissonRatio)
```

#### Parameters

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dPoissonRatio` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetAsz\(double\[\], double\)

```csharp
public virtual double GetAsz(double[] dSInfo, double dPoissonRatio)
```

#### Parameters

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dPoissonRatio` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetIxx\(double\[\]\)

```csharp
public virtual double GetIxx(double[] dSInfo)
```

#### Parameters

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetIyy\(double\[\]\)

```csharp
public virtual double GetIyy(double[] dSInfo)
```

#### Parameters

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetIzz\(double\[\]\)

```csharp
public virtual double GetIzz(double[] dSInfo)
```

#### Parameters

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetJxx\(double, double, double\)

```csharp
public double GetJxx(double dIxx, double dDensity, double dLength)
```

#### Parameters

`dIxx` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dDensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetJxx\(double\[\], double, double\)

```csharp
public double GetJxx(double[] dSInfo, double dDensity, double dLength)
```

#### Parameters

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dDensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetJyy\(double, double\[\], double, double\)

```csharp
public virtual double GetJyy(double dMass, double[] dSInfo, double dDensity, double dLength)
```

#### Parameters

`dMass` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dDensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetJyy\(double\[\], double, double\)

```csharp
public virtual double GetJyy(double[] dSInfo, double dDensity, double dLength)
```

#### Parameters

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dDensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetJzz\(double, double\[\], double, double\)

```csharp
public virtual double GetJzz(double dMass, double[] dSInfo, double dDensity, double dLength)
```

#### Parameters

`dMass` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dDensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetJzz\(double\[\], double, double\)

```csharp
public virtual double GetJzz(double[] dSInfo, double dDensity, double dLength)
```

#### Parameters

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dDensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetMass\(double\[\], double, double\)

```csharp
public double GetMass(double[] dSInfo, double dDensity, double dLength)
```

#### Parameters

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dDensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetMassMomentOfInertia\(double, double, double\[\], double, double\)

```csharp
public virtual double[] GetMassMomentOfInertia(double dMass, double dIxx, double[] dSInfo, double dDensity, double dLength)
```

#### Parameters

`dMass` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dIxx` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dDensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### GetMassProperties\(double\[\], double, double\)

```csharp
public virtual double[] GetMassProperties(double[] dSInfo, double dDensity, double dLength)
```

#### Parameters

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dDensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### GetNumSideEdges\(int\)

```csharp
public virtual int GetNumSideEdges(int RenderingType = 1)
```

#### Parameters

`RenderingType` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetNumTotalElements\(int\)

```csharp
public virtual int GetNumTotalElements(int RenderingType = 1)
```

#### Parameters

`RenderingType` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetNumTotalNodes\(int\)

```csharp
public virtual int GetNumTotalNodes(int RenderingType = 1)
```

#### Parameters

`RenderingType` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetRequiredInputCount\(CrossSectionType\)

```csharp
public virtual uint GetRequiredInputCount(CrossSectionType sectionEnumType)
```

#### Parameters

`sectionEnumType` [CrossSectionType](VM.Managed.DAFUL.Beam.CrossSectionType.md)

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GetSphereBodyRadius\(double\[\]\)

```csharp
public virtual double GetSphereBodyRadius(double[] dSInfo)
```

#### Parameters

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### GetStiffnessElementsOfMatrixForceByCoef\(double, double, double, double, double, double, double, double, double, double, double\)

```csharp
public double[] GetStiffnessElementsOfMatrixForceByCoef(double dArea, double dIyy, double dIzz, double dIxx, double dAsy, double dAsz, double dLength, double dPoissonRatio, double dDensity, double dYoungsModulus, double dShearModulus)
```

#### Parameters

`dArea` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dIyy` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dIzz` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dIxx` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dAsy` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dAsz` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dPoissonRatio` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dDensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dYoungsModulus` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dShearModulus` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### GetStiffnessElementsOfMatrixForceByGeom\(double\[\], double, double, double, double, double\)

```csharp
public double[] GetStiffnessElementsOfMatrixForceByGeom(double[] dSInfo, double dLength, double dPoissonRatio, double dDensity, double dYoungsModulus, double dShearModulus)
```

#### Parameters

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dPoissonRatio` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dDensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dYoungsModulus` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dShearModulus` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### SetVariablesFromArray2Local\(double\[\]\)

```csharp
protected virtual void SetVariablesFromArray2Local(double[] dSInfo)
```

#### Parameters

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### TranslateNastran2DAFUL\(double\[\]\)

```csharp
public virtual double[] TranslateNastran2DAFUL(double[] dNastran)
```

#### Parameters

`dNastran` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### cos\(double\)

```csharp
protected double cos(double a)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### mattrvec\(double\[\], double\[\]\)

```csharp
protected double[] mattrvec(double[] a, double[] b)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### matvec\(double\[\], double\[\]\)

```csharp
protected double[] matvec(double[] a, double[] b)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`b` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### sin\(double\)

```csharp
protected double sin(double a)
```

#### Parameters

`a` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)


