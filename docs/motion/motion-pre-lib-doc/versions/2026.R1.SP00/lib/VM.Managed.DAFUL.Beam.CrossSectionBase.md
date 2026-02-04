# Class CrossSectionBase
<a id="VM_Managed_DAFUL_Beam_CrossSectionBase"></a>

Namespace: [VM.Managed.DAFUL.Beam](VM.Managed.DAFUL.Beam.md)  
Assembly: VM.Models.FE.BeamCrossSection.dll  

```csharp
public class CrossSectionBase
```

#### Inheritance

object ← 
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

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase__ctor"></a> CrossSectionBase\(\)

```csharp
public CrossSectionBase()
```

## Fields

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_m_nGeomInfoArrayCount"></a> m\_nGeomInfoArrayCount

```csharp
protected uint m_nGeomInfoArrayCount
```

#### Field Value

 uint

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_m_nNastranArrayCount"></a> m\_nNastranArrayCount

```csharp
protected uint m_nNastranArrayCount
```

#### Field Value

 uint

## Properties

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_pi"></a> pi

```csharp
protected double pi { get; }
```

#### Property Value

 double

## Methods

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_CheckDensity_System_Double_"></a> CheckDensity\(double\)

```csharp
protected void CheckDensity(double dDensity)
```

#### Parameters

`dDensity` double

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_CheckGeomInfo_System_Double___"></a> CheckGeomInfo\(double\[\]\)

```csharp
public void CheckGeomInfo(double[] dSInfo)
```

#### Parameters

`dSInfo` double\[\]

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_CheckInputCount_System_Double___"></a> CheckInputCount\(double\[\]\)

```csharp
protected void CheckInputCount(double[] dSInfo)
```

#### Parameters

`dSInfo` double\[\]

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_CheckLength_System_Double_"></a> CheckLength\(double\)

```csharp
protected void CheckLength(double dLength)
```

#### Parameters

`dLength` double

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_CheckMass_System_Double_"></a> CheckMass\(double\)

```csharp
protected void CheckMass(double dMass)
```

#### Parameters

`dMass` double

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GenerateMultiSection_System_Double___System_Int32_"></a> GenerateMultiSection\(double\[\], int\)

```csharp
public virtual double[] GenerateMultiSection(double[] dSInfo, int ElementCount)
```

#### Parameters

`dSInfo` double\[\]

`ElementCount` int

#### Returns

 double\[\]

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GenerateOneSection_System_Double___"></a> GenerateOneSection\(double\[\]\)

```csharp
public virtual double[] GenerateOneSection(double[] dSInfo)
```

#### Parameters

`dSInfo` double\[\]

#### Returns

 double\[\]

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GeneratePostConnectivities_System_Int32_System_Int32____System_Int32____"></a> GeneratePostConnectivities\(int, ref int\[\], ref int\[\]\)

```csharp
public virtual int GeneratePostConnectivities(int RenderingType, ref int[] iENodes, ref int[] iStartENodes)
```

#### Parameters

`RenderingType` int

`iENodes` int\[\]

`iStartENodes` int\[\]

#### Returns

 int

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GeneratePostOneSection_System_Double___System_Int32_"></a> GeneratePostOneSection\(double\[\], int\)

```csharp
public virtual double[] GeneratePostOneSection(double[] dSInfo, int RenderingType = 1)
```

#### Parameters

`dSInfo` double\[\]

`RenderingType` int

#### Returns

 double\[\]

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GeneratePostTwoSection_System_Double___System_Double___System_Double___System_Double___System_Double___System_Int32_"></a> GeneratePostTwoSection\(double\[\], double\[\], double\[\], double\[\], double\[\], int\)

```csharp
public virtual double[] GeneratePostTwoSection(double[] dSInfo, double[] dStartPoint, double[] dEndPoint, double[] dStartOri, double[] dEndOri, int RenderingType)
```

#### Parameters

`dSInfo` double\[\]

`dStartPoint` double\[\]

`dEndPoint` double\[\]

`dStartOri` double\[\]

`dEndOri` double\[\]

`RenderingType` int

#### Returns

 double\[\]

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GenerateTwoSection_System_Double___System_Double___System_Double___System_Double___"></a> GenerateTwoSection\(double\[\], double\[\], double\[\], double\[\]\)

```csharp
public double[,] GenerateTwoSection(double[] dSInfo, double[] dStartPoint, double[] dEndPoint, double[] dOrienMatrix)
```

#### Parameters

`dSInfo` double\[\]

`dStartPoint` double\[\]

`dEndPoint` double\[\]

`dOrienMatrix` double\[\]

#### Returns

 double\[,\]

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GetArea_System_Double___"></a> GetArea\(double\[\]\)

```csharp
public virtual double GetArea(double[] dSInfo)
```

#### Parameters

`dSInfo` double\[\]

#### Returns

 double

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GetAreaProperties_System_Double___System_Double_"></a> GetAreaProperties\(double\[\], double\)

```csharp
public virtual double[] GetAreaProperties(double[] dSInfo, double dPoissonRatio)
```

#### Parameters

`dSInfo` double\[\]

`dPoissonRatio` double

#### Returns

 double\[\]

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GetAsy_System_Double___System_Double_"></a> GetAsy\(double\[\], double\)

```csharp
public virtual double GetAsy(double[] dSInfo, double dPoissonRatio)
```

#### Parameters

`dSInfo` double\[\]

`dPoissonRatio` double

#### Returns

 double

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GetAsz_System_Double___System_Double_"></a> GetAsz\(double\[\], double\)

```csharp
public virtual double GetAsz(double[] dSInfo, double dPoissonRatio)
```

#### Parameters

`dSInfo` double\[\]

`dPoissonRatio` double

#### Returns

 double

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GetIxx_System_Double___"></a> GetIxx\(double\[\]\)

```csharp
public virtual double GetIxx(double[] dSInfo)
```

#### Parameters

`dSInfo` double\[\]

#### Returns

 double

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GetIyy_System_Double___"></a> GetIyy\(double\[\]\)

```csharp
public virtual double GetIyy(double[] dSInfo)
```

#### Parameters

`dSInfo` double\[\]

#### Returns

 double

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GetIzz_System_Double___"></a> GetIzz\(double\[\]\)

```csharp
public virtual double GetIzz(double[] dSInfo)
```

#### Parameters

`dSInfo` double\[\]

#### Returns

 double

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GetJxx_System_Double_System_Double_System_Double_"></a> GetJxx\(double, double, double\)

```csharp
public double GetJxx(double dIxx, double dDensity, double dLength)
```

#### Parameters

`dIxx` double

`dDensity` double

`dLength` double

#### Returns

 double

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GetJxx_System_Double___System_Double_System_Double_"></a> GetJxx\(double\[\], double, double\)

```csharp
public double GetJxx(double[] dSInfo, double dDensity, double dLength)
```

#### Parameters

`dSInfo` double\[\]

`dDensity` double

`dLength` double

#### Returns

 double

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GetJyy_System_Double_System_Double___System_Double_System_Double_"></a> GetJyy\(double, double\[\], double, double\)

```csharp
public virtual double GetJyy(double dMass, double[] dSInfo, double dDensity, double dLength)
```

#### Parameters

`dMass` double

`dSInfo` double\[\]

`dDensity` double

`dLength` double

#### Returns

 double

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GetJyy_System_Double___System_Double_System_Double_"></a> GetJyy\(double\[\], double, double\)

```csharp
public virtual double GetJyy(double[] dSInfo, double dDensity, double dLength)
```

#### Parameters

`dSInfo` double\[\]

`dDensity` double

`dLength` double

#### Returns

 double

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GetJzz_System_Double_System_Double___System_Double_System_Double_"></a> GetJzz\(double, double\[\], double, double\)

```csharp
public virtual double GetJzz(double dMass, double[] dSInfo, double dDensity, double dLength)
```

#### Parameters

`dMass` double

`dSInfo` double\[\]

`dDensity` double

`dLength` double

#### Returns

 double

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GetJzz_System_Double___System_Double_System_Double_"></a> GetJzz\(double\[\], double, double\)

```csharp
public virtual double GetJzz(double[] dSInfo, double dDensity, double dLength)
```

#### Parameters

`dSInfo` double\[\]

`dDensity` double

`dLength` double

#### Returns

 double

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GetMass_System_Double___System_Double_System_Double_"></a> GetMass\(double\[\], double, double\)

```csharp
public double GetMass(double[] dSInfo, double dDensity, double dLength)
```

#### Parameters

`dSInfo` double\[\]

`dDensity` double

`dLength` double

#### Returns

 double

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GetMassMomentOfInertia_System_Double_System_Double_System_Double___System_Double_System_Double_"></a> GetMassMomentOfInertia\(double, double, double\[\], double, double\)

```csharp
public virtual double[] GetMassMomentOfInertia(double dMass, double dIxx, double[] dSInfo, double dDensity, double dLength)
```

#### Parameters

`dMass` double

`dIxx` double

`dSInfo` double\[\]

`dDensity` double

`dLength` double

#### Returns

 double\[\]

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GetMassProperties_System_Double___System_Double_System_Double_"></a> GetMassProperties\(double\[\], double, double\)

```csharp
public virtual double[] GetMassProperties(double[] dSInfo, double dDensity, double dLength)
```

#### Parameters

`dSInfo` double\[\]

`dDensity` double

`dLength` double

#### Returns

 double\[\]

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GetNumSideEdges_System_Int32_"></a> GetNumSideEdges\(int\)

```csharp
public virtual int GetNumSideEdges(int RenderingType = 1)
```

#### Parameters

`RenderingType` int

#### Returns

 int

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GetNumTotalElements_System_Int32_"></a> GetNumTotalElements\(int\)

```csharp
public virtual int GetNumTotalElements(int RenderingType = 1)
```

#### Parameters

`RenderingType` int

#### Returns

 int

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GetNumTotalNodes_System_Int32_"></a> GetNumTotalNodes\(int\)

```csharp
public virtual int GetNumTotalNodes(int RenderingType = 1)
```

#### Parameters

`RenderingType` int

#### Returns

 int

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GetRequiredInputCount_VM_Managed_DAFUL_Beam_CrossSectionType_"></a> GetRequiredInputCount\(CrossSectionType\)

```csharp
public virtual uint GetRequiredInputCount(CrossSectionType sectionEnumType)
```

#### Parameters

`sectionEnumType` [CrossSectionType](VM.Managed.DAFUL.Beam.CrossSectionType.md)

#### Returns

 uint

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GetSphereBodyRadius_System_Double___"></a> GetSphereBodyRadius\(double\[\]\)

```csharp
public virtual double GetSphereBodyRadius(double[] dSInfo)
```

#### Parameters

`dSInfo` double\[\]

#### Returns

 double

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GetStiffnessElementsOfMatrixForceByCoef_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_"></a> GetStiffnessElementsOfMatrixForceByCoef\(double, double, double, double, double, double, double, double, double, double, double\)

```csharp
public double[] GetStiffnessElementsOfMatrixForceByCoef(double dArea, double dIyy, double dIzz, double dIxx, double dAsy, double dAsz, double dLength, double dPoissonRatio, double dDensity, double dYoungsModulus, double dShearModulus)
```

#### Parameters

`dArea` double

`dIyy` double

`dIzz` double

`dIxx` double

`dAsy` double

`dAsz` double

`dLength` double

`dPoissonRatio` double

`dDensity` double

`dYoungsModulus` double

`dShearModulus` double

#### Returns

 double\[\]

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_GetStiffnessElementsOfMatrixForceByGeom_System_Double___System_Double_System_Double_System_Double_System_Double_System_Double_"></a> GetStiffnessElementsOfMatrixForceByGeom\(double\[\], double, double, double, double, double\)

```csharp
public double[] GetStiffnessElementsOfMatrixForceByGeom(double[] dSInfo, double dLength, double dPoissonRatio, double dDensity, double dYoungsModulus, double dShearModulus)
```

#### Parameters

`dSInfo` double\[\]

`dLength` double

`dPoissonRatio` double

`dDensity` double

`dYoungsModulus` double

`dShearModulus` double

#### Returns

 double\[\]

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_SetVariablesFromArray2Local_System_Double___"></a> SetVariablesFromArray2Local\(double\[\]\)

```csharp
protected virtual void SetVariablesFromArray2Local(double[] dSInfo)
```

#### Parameters

`dSInfo` double\[\]

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_TranslateNastran2DAFUL_System_Double___"></a> TranslateNastran2DAFUL\(double\[\]\)

```csharp
public virtual double[] TranslateNastran2DAFUL(double[] dNastran)
```

#### Parameters

`dNastran` double\[\]

#### Returns

 double\[\]

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_cos_System_Double_"></a> cos\(double\)

```csharp
protected double cos(double a)
```

#### Parameters

`a` double

#### Returns

 double

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_mattrvec_System_Double___System_Double___"></a> mattrvec\(double\[\], double\[\]\)

```csharp
protected double[] mattrvec(double[] a, double[] b)
```

#### Parameters

`a` double\[\]

`b` double\[\]

#### Returns

 double\[\]

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_matvec_System_Double___System_Double___"></a> matvec\(double\[\], double\[\]\)

```csharp
protected double[] matvec(double[] a, double[] b)
```

#### Parameters

`a` double\[\]

`b` double\[\]

#### Returns

 double\[\]

### <a id="VM_Managed_DAFUL_Beam_CrossSectionBase_sin_System_Double_"></a> sin\(double\)

```csharp
protected double sin(double a)
```

#### Parameters

`a` double

#### Returns

 double

