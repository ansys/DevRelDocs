#  Class BeamCrossSection

Namespace: [VM.Managed.DAFUL.Beam](VM.Managed.DAFUL.Beam.md)  
Assembly: VM.Models.FE.BeamCrossSection.dll  

```csharp
public static class BeamCrossSection
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BeamCrossSection](VM.Managed.DAFUL.Beam.BeamCrossSection.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_CheckGeomInfo_VM_Managed_DAFUL_Beam_CrossSectionType_System_Double___System_Boolean__"></a> CheckGeomInfo\(CrossSectionType, double\[\], ref bool\)

```csharp
public static bool CheckGeomInfo(CrossSectionType sectionEnumType, double[] dSInfo, ref bool bValid)
```

#### Parameters

`sectionEnumType` [CrossSectionType](VM.Managed.DAFUL.Beam.CrossSectionType.md)

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`bValid` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_CheckYDirection_System_Double___System_Double___System_Double___"></a> CheckYDirection\(double\[\], double\[\], double\[\]\)

```csharp
public static bool CheckYDirection(double[] dblStartPoint, double[] dblEndPoint, double[] dblYDir)
```

#### Parameters

`dblStartPoint` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dblEndPoint` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dblYDir` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_ConnectivityGenerator_System_String_System_Int32_System_Int32____System_Int32____"></a> ConnectivityGenerator\(string, int, ref int\[\], ref int\[\]\)

```csharp
public static int ConnectivityGenerator(string sectionStrType, int RenderingType, ref int[] iENodes, ref int[] iStartENodes)
```

#### Parameters

`sectionStrType` [string](https://learn.microsoft.com/dotnet/api/system.string)

`RenderingType` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`iENodes` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

`iStartENodes` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_ConnectivityGenerator_System_String_System_Int32__System_Int32__System_Int32____System_Int32____"></a> ConnectivityGenerator\(string, ref int, ref int, ref int\[\], ref int\[\]\)

```csharp
public static bool ConnectivityGenerator(string sectionStrType, ref int nTElement, ref int nTEdge, ref int[] iENodes, ref int[] iStartENodes)
```

#### Parameters

`sectionStrType` [string](https://learn.microsoft.com/dotnet/api/system.string)

`nTElement` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nTEdge` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`iENodes` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

`iStartENodes` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_ConvertSectionEnum2String_VM_Managed_DAFUL_Beam_CrossSectionType_"></a> ConvertSectionEnum2String\(CrossSectionType\)

```csharp
public static string ConvertSectionEnum2String(CrossSectionType sectionEnumType)
```

#### Parameters

`sectionEnumType` [CrossSectionType](VM.Managed.DAFUL.Beam.CrossSectionType.md)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_ConvertSectionString2Enum_System_String_"></a> ConvertSectionString2Enum\(string\)

```csharp
public static CrossSectionType ConvertSectionString2Enum(string strType)
```

#### Parameters

`strType` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [CrossSectionType](VM.Managed.DAFUL.Beam.CrossSectionType.md)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_GetCrossProduct_System_Double___System_Double___"></a> GetCrossProduct\(double\[\], double\[\]\)

```csharp
public static double[] GetCrossProduct(double[] vec1, double[] vec2)
```

#### Parameters

`vec1` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`vec2` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_GetInnerProduct_System_Double___System_Double___"></a> GetInnerProduct\(double\[\], double\[\]\)

```csharp
public static double[] GetInnerProduct(double[] vec1, double[] vec2)
```

#### Parameters

`vec1` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`vec2` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_GetMagnitude_System_Double___"></a> GetMagnitude\(double\[\]\)

```csharp
public static double GetMagnitude(double[] dblAry)
```

#### Parameters

`dblAry` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_GetNumElements_System_String_System_Int32_"></a> GetNumElements\(string, int\)

```csharp
public static int GetNumElements(string sectionStrType, int RenderingType)
```

#### Parameters

`sectionStrType` [string](https://learn.microsoft.com/dotnet/api/system.string)

`RenderingType` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_GetNumNodes_System_String_System_Int32_"></a> GetNumNodes\(string, int\)

```csharp
public static int GetNumNodes(string sectionStrType, int RenderingType)
```

#### Parameters

`sectionStrType` [string](https://learn.microsoft.com/dotnet/api/system.string)

`RenderingType` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_GetNumNodes_System_String_"></a> GetNumNodes\(string\)

```csharp
public static int GetNumNodes(string sectionStrType)
```

#### Parameters

`sectionStrType` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_GetRequiredInputCount_VM_Managed_DAFUL_Beam_CrossSectionType_"></a> GetRequiredInputCount\(CrossSectionType\)

```csharp
public static uint GetRequiredInputCount(CrossSectionType sectionEnumType)
```

#### Parameters

`sectionEnumType` [CrossSectionType](VM.Managed.DAFUL.Beam.CrossSectionType.md)

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_GetSphereBodyRadius_VM_Managed_DAFUL_Beam_CrossSectionType_System_Double___"></a> GetSphereBodyRadius\(CrossSectionType, double\[\]\)

```csharp
public static double GetSphereBodyRadius(CrossSectionType sectionEnumType, double[] dSInfo)
```

#### Parameters

`sectionEnumType` [CrossSectionType](VM.Managed.DAFUL.Beam.CrossSectionType.md)

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_GetStiffnessElementsOfMatrixForceByCoef_VM_Managed_DAFUL_Beam_CrossSectionType_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double_System_Double____"></a> GetStiffnessElementsOfMatrixForceByCoef\(CrossSectionType, double, double, double, double, double, double, double, double, double, double, double, ref double\[\]\)

```csharp
public static bool GetStiffnessElementsOfMatrixForceByCoef(CrossSectionType sectionEnumType, double dArea, double dIyy, double dIzz, double dIxx, double dAsy, double dAsz, double dLength, double dPoissonRatio, double dDensity, double dYoungsModulus, double dShearModulus, ref double[] dOutput)
```

#### Parameters

`sectionEnumType` [CrossSectionType](VM.Managed.DAFUL.Beam.CrossSectionType.md)

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

`dOutput` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_GetStiffnessElementsOfMatrixForceByGeom_VM_Managed_DAFUL_Beam_CrossSectionType_System_Double___System_Double_System_Double_System_Double_System_Double_System_Double_System_Double____"></a> GetStiffnessElementsOfMatrixForceByGeom\(CrossSectionType, double\[\], double, double, double, double, double, ref double\[\]\)

```csharp
public static bool GetStiffnessElementsOfMatrixForceByGeom(CrossSectionType sectionEnumType, double[] dSInfo, double dLength, double dPoissonRatio, double dDensity, double dYoungsModulus, double dShearModulus, ref double[] dOutput)
```

#### Parameters

`sectionEnumType` [CrossSectionType](VM.Managed.DAFUL.Beam.CrossSectionType.md)

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dPoissonRatio` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dDensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dYoungsModulus` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dShearModulus` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dOutput` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_SectionAreaProperties_System_String_System_Double___System_Double_System_Double____"></a> SectionAreaProperties\(string, double\[\], double, ref double\[\]\)

```csharp
public static bool SectionAreaProperties(string sectionStrType, double[] dSInfo, double dPoissonRatio, ref double[] dOutput)
```

#### Parameters

`sectionStrType` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dPoissonRatio` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dOutput` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_SectionAreaProperties_VM_Managed_DAFUL_Beam_CrossSectionType_System_Double___System_Double_System_Double____"></a> SectionAreaProperties\(CrossSectionType, double\[\], double, ref double\[\]\)

```csharp
public static bool SectionAreaProperties(CrossSectionType sectionEnumType, double[] dSInfo, double dPoissonRatio, ref double[] dOutput)
```

#### Parameters

`sectionEnumType` [CrossSectionType](VM.Managed.DAFUL.Beam.CrossSectionType.md)

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dPoissonRatio` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dOutput` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_SectionGenerator_VM_Managed_DAFUL_Beam_ResultType_System_String_System_Double___System_Double____"></a> SectionGenerator\(ResultType, string, double\[\], ref double\[\]\)

```csharp
public static bool SectionGenerator(ResultType resultEnumType, string sectionStrType, double[] dSInfo, ref double[] dOutput)
```

#### Parameters

`resultEnumType` [ResultType](VM.Managed.DAFUL.Beam.ResultType.md)

`sectionStrType` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dOutput` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_SectionGenerator_VM_Managed_DAFUL_Beam_CrossSectionType_System_Double___System_Double____"></a> SectionGenerator\(CrossSectionType, double\[\], ref double\[\]\)

```csharp
public static bool SectionGenerator(CrossSectionType sectionEnumType, double[] dSInfo, ref double[] dOutput)
```

#### Parameters

`sectionEnumType` [CrossSectionType](VM.Managed.DAFUL.Beam.CrossSectionType.md)

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dOutput` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_SectionGenerator_System_String_System_Double___System_Double____"></a> SectionGenerator\(string, double\[\], ref double\[\]\)

```csharp
public static bool SectionGenerator(string sectionStrType, double[] dSInfo, ref double[] dOutput)
```

#### Parameters

`sectionStrType` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dOutput` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_SectionGenerator_VM_Managed_DAFUL_Beam_ResultType_VM_Managed_DAFUL_Beam_CrossSectionType_System_Double___System_Double____"></a> SectionGenerator\(ResultType, CrossSectionType, double\[\], ref double\[\]\)

```csharp
public static bool SectionGenerator(ResultType resultEnumType, CrossSectionType sectionEnumType, double[] dSInfo, ref double[] dOutput)
```

#### Parameters

`resultEnumType` [ResultType](VM.Managed.DAFUL.Beam.ResultType.md)

`sectionEnumType` [CrossSectionType](VM.Managed.DAFUL.Beam.CrossSectionType.md)

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dOutput` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_SectionGenerator_VM_Managed_DAFUL_Beam_ResultType_System_String_System_Double___System_Double___System_Double___System_Double___System_Double_0__0____"></a> SectionGenerator\(ResultType, string, double\[\], double\[\], double\[\], double\[\], ref double\[,\]\)

```csharp
public static bool SectionGenerator(ResultType resultEnumType, string sectionStrType, double[] dSInfo, double[] dStartPoint, double[] dEndPoint, double[] dOrienMatrix, ref double[,] dOutput)
```

#### Parameters

`resultEnumType` [ResultType](VM.Managed.DAFUL.Beam.ResultType.md)

`sectionStrType` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dStartPoint` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dEndPoint` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dOrienMatrix` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dOutput` [double](https://learn.microsoft.com/dotnet/api/system.double)\[,\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_SectionGenerator_VM_Managed_DAFUL_Beam_CrossSectionType_System_Double___System_Double___System_Double___System_Double___System_Double_0__0____"></a> SectionGenerator\(CrossSectionType, double\[\], double\[\], double\[\], double\[\], ref double\[,\]\)

```csharp
public static bool SectionGenerator(CrossSectionType sectionEnumType, double[] dSInfo, double[] dStartPoint, double[] dEndPoint, double[] dOrienMatrix, ref double[,] dOutput)
```

#### Parameters

`sectionEnumType` [CrossSectionType](VM.Managed.DAFUL.Beam.CrossSectionType.md)

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dStartPoint` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dEndPoint` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dOrienMatrix` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dOutput` [double](https://learn.microsoft.com/dotnet/api/system.double)\[,\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_SectionGenerator_System_String_System_Double___System_Double___System_Double___System_Double___System_Double_0__0____"></a> SectionGenerator\(string, double\[\], double\[\], double\[\], double\[\], ref double\[,\]\)

```csharp
public static bool SectionGenerator(string sectionStrType, double[] dSInfo, double[] dStartPoint, double[] dEndPoint, double[] dOrienMatrix, ref double[,] dOutput)
```

#### Parameters

`sectionStrType` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dStartPoint` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dEndPoint` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dOrienMatrix` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dOutput` [double](https://learn.microsoft.com/dotnet/api/system.double)\[,\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_SectionGenerator_VM_Managed_DAFUL_Beam_ResultType_VM_Managed_DAFUL_Beam_CrossSectionType_System_Double___System_Double___System_Double___System_Double___System_Double_0__0____"></a> SectionGenerator\(ResultType, CrossSectionType, double\[\], double\[\], double\[\], double\[\], ref double\[,\]\)

```csharp
public static bool SectionGenerator(ResultType resultEnumType, CrossSectionType sectionEnumType, double[] dSInfo, double[] dStartPoint, double[] dEndPoint, double[] dOrienMatrix, ref double[,] dOutput)
```

#### Parameters

`resultEnumType` [ResultType](VM.Managed.DAFUL.Beam.ResultType.md)

`sectionEnumType` [CrossSectionType](VM.Managed.DAFUL.Beam.CrossSectionType.md)

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dStartPoint` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dEndPoint` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dOrienMatrix` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dOutput` [double](https://learn.microsoft.com/dotnet/api/system.double)\[,\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_SectionGenerator_VM_Managed_DAFUL_Beam_ResultType_System_String_System_Double___System_Double___System_Double___System_Double___System_Double___System_Int32_System_Double____"></a> SectionGenerator\(ResultType, string, double\[\], double\[\], double\[\], double\[\], double\[\], int, ref double\[\]\)

```csharp
public static bool SectionGenerator(ResultType resultEnumType, string sectionStrType, double[] dSInfo, double[] dStartPoint, double[] dEndPoint, double[] dStartOri, double[] dEndOri, int RenderingType, ref double[] dOutput)
```

#### Parameters

`resultEnumType` [ResultType](VM.Managed.DAFUL.Beam.ResultType.md)

`sectionStrType` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dStartPoint` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dEndPoint` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dStartOri` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dEndOri` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`RenderingType` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`dOutput` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_SectionGeomProperty_VM_Managed_DAFUL_Beam_ResultType_System_String_System_Double___System_Double___System_Double__"></a> SectionGeomProperty\(ResultType, string, double\[\], double\[\], ref double\)

```csharp
public static bool SectionGeomProperty(ResultType resultEnumType, string sectionStrType, double[] dSInfo, double[] dOtherInfos, ref double dOutput)
```

#### Parameters

`resultEnumType` [ResultType](VM.Managed.DAFUL.Beam.ResultType.md)

`sectionStrType` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dOtherInfos` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dOutput` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_SectionGeomProperty_VM_Managed_DAFUL_Beam_ResultType_VM_Managed_DAFUL_Beam_CrossSectionType_System_Double___System_Double___System_Double__"></a> SectionGeomProperty\(ResultType, CrossSectionType, double\[\], double\[\], ref double\)

```csharp
public static bool SectionGeomProperty(ResultType resultEnumType, CrossSectionType sectionEnumType, double[] dSInfo, double[] dOtherInfos, ref double dOutput)
```

#### Parameters

`resultEnumType` [ResultType](VM.Managed.DAFUL.Beam.ResultType.md)

`sectionEnumType` [CrossSectionType](VM.Managed.DAFUL.Beam.CrossSectionType.md)

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dOtherInfos` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dOutput` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_SectionMass_System_String_System_Double_System_Double_System_Double_System_Double__"></a> SectionMass\(string, double, double, double, ref double\)

```csharp
public static bool SectionMass(string sectionStrType, double dArea, double dDensity, double dLength, ref double dOutput)
```

#### Parameters

`sectionStrType` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dArea` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dDensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dOutput` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_SectionMass_VM_Managed_DAFUL_Beam_CrossSectionType_System_Double_System_Double_System_Double_System_Double__"></a> SectionMass\(CrossSectionType, double, double, double, ref double\)

```csharp
public static bool SectionMass(CrossSectionType sectionEnumType, double dArea, double dDensity, double dLength, ref double dOutput)
```

#### Parameters

`sectionEnumType` [CrossSectionType](VM.Managed.DAFUL.Beam.CrossSectionType.md)

`dArea` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dDensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dOutput` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_SectionMassMomentOfInertia_System_String_System_Double_System_Double_System_Double___System_Double_System_Double_System_Double____"></a> SectionMassMomentOfInertia\(string, double, double, double\[\], double, double, ref double\[\]\)

```csharp
public static bool SectionMassMomentOfInertia(string sectionStrType, double dMass, double dIxx, double[] dSInfo, double dDensity, double dLength, ref double[] dOutput)
```

#### Parameters

`sectionStrType` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dMass` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dIxx` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dDensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dOutput` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_SectionMassMomentOfInertia_VM_Managed_DAFUL_Beam_CrossSectionType_System_Double_System_Double_System_Double___System_Double_System_Double_System_Double____"></a> SectionMassMomentOfInertia\(CrossSectionType, double, double, double\[\], double, double, ref double\[\]\)

```csharp
public static bool SectionMassMomentOfInertia(CrossSectionType sectionEnumType, double dMass, double dIxx, double[] dSInfo, double dDensity, double dLength, ref double[] dOutput)
```

#### Parameters

`sectionEnumType` [CrossSectionType](VM.Managed.DAFUL.Beam.CrossSectionType.md)

`dMass` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dIxx` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dDensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dOutput` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_SectionMassProperties_System_String_System_Double___System_Double_System_Double_System_Double____"></a> SectionMassProperties\(string, double\[\], double, double, ref double\[\]\)

```csharp
public static bool SectionMassProperties(string sectionStrType, double[] dSInfo, double dDensity, double dLength, ref double[] dOutput)
```

#### Parameters

`sectionStrType` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dDensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dOutput` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_SectionMassProperties_VM_Managed_DAFUL_Beam_CrossSectionType_System_Double___System_Double_System_Double_System_Double____"></a> SectionMassProperties\(CrossSectionType, double\[\], double, double, ref double\[\]\)

```csharp
public static bool SectionMassProperties(CrossSectionType sectionEnumType, double[] dSInfo, double dDensity, double dLength, ref double[] dOutput)
```

#### Parameters

`sectionEnumType` [CrossSectionType](VM.Managed.DAFUL.Beam.CrossSectionType.md)

`dSInfo` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dDensity` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

`dOutput` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_SetUnitVector_System_Double___"></a> SetUnitVector\(double\[\]\)

```csharp
public static void SetUnitVector(double[] dblAry)
```

#### Parameters

`dblAry` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_TranslateNastran2DAFUL_VM_Managed_DAFUL_Beam_ResultType_VM_Managed_DAFUL_Beam_CrossSectionType_System_Double___System_Double____"></a> TranslateNastran2DAFUL\(ResultType, CrossSectionType, double\[\], ref double\[\]\)

```csharp
public static bool TranslateNastran2DAFUL(ResultType resultEnumType, CrossSectionType sectionEnumType, double[] dNastran, ref double[] dDAFUL)
```

#### Parameters

`resultEnumType` [ResultType](VM.Managed.DAFUL.Beam.ResultType.md)

`sectionEnumType` [CrossSectionType](VM.Managed.DAFUL.Beam.CrossSectionType.md)

`dNastran` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dDAFUL` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Beam_BeamCrossSection_TranslateNastran2DAFUL_VM_Managed_DAFUL_Beam_ResultType_System_String_System_Double___System_Double____"></a> TranslateNastran2DAFUL\(ResultType, string, double\[\], ref double\[\]\)

```csharp
public static bool TranslateNastran2DAFUL(ResultType resultEnumType, string sectionStrType, double[] dNastran, ref double[] dDAFUL)
```

#### Parameters

`resultEnumType` [ResultType](VM.Managed.DAFUL.Beam.ResultType.md)

`sectionStrType` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dNastran` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dDAFUL` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

