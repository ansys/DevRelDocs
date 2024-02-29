# <a id="VM_Models_Post_PostSlv"></a> Class PostSlv

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.PostSlv.dll  

```csharp
public class PostSlv
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PostSlv](VM.Models.Post.PostSlv.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_PostSlv__ctor_VM_Models_Post_IFEProperty___VM_Models_Post_Materials_MaterialBase___"></a> PostSlv\(IFEProperty\[\], MaterialBase\[\]\)

```csharp
public PostSlv(IFEProperty[] feproperties, MaterialBase[] materials)
```

#### Parameters

`feproperties` IFEProperty\[\]

`materials` MaterialBase\[\]

## Methods

### <a id="VM_Models_Post_PostSlv_Contact_Result_Calc_System_Int32_System_Collections_Generic_List_System_Double____System_Int32_System_Int32_System_Collections_Generic_List_System_Collections_Generic_List_System_Double_____System_Collections_Generic_List_System_Collections_Generic_Dictionary_System_Int32_System_Double___"></a> Contact\_Result\_Calc\(int, List<double\[\]\>, int, int, List<List<double\[\]\>\>, List<Dictionary<int, double\>\>\)

```csharp
public void Contact_Result_Calc(int version, List<double[]> nodesGroups, int type, int dir, List<List<double[]>> contactPoints, List<Dictionary<int, double>> results)
```

#### Parameters

`version` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nodesGroups` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

`type` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`dir` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`contactPoints` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>\>

`results` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [double](https://learn.microsoft.com/dotnet/api/system.double)\>\>

### <a id="VM_Models_Post_PostSlv_Contact_Result_Init_System_String_VM_Models_Post_ContactPairsInfo_System_Collections_Generic_List_System_Double____System_Collections_Generic_List_System_UInt32____System_Collections_Generic_List_System_Int32__System_Boolean_"></a> Contact\_Result\_Init\(string, ContactPairsInfo, List<double\[\]\>, List<uint\[\]\>, List<int\>, bool\)

```csharp
public void Contact_Result_Init(string filepath, ContactPairsInfo contactPairInfos, List<double[]> nodesGroups, List<uint[]> connectivitiesGroups, List<int> nPatchGroups, bool isPlotMode)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`contactPairInfos` [ContactPairsInfo](VM.Models.Post.ContactPairsInfo.md)

`nodesGroups` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

`connectivitiesGroups` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]\>

`nPatchGroups` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`isPlotMode` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_PostSlv_Contact_Result_Release"></a> Contact\_Result\_Release\(\)

```csharp
public void Contact_Result_Release()
```

### <a id="VM_Models_Post_PostSlv_Contour_ElementNode_Strain_System_Double___System_Double___System_Double___System_Single___System_Int32_"></a> Contour\_ElementNode\_Strain\(double\[\], double\[\], double\[\], float\[\], int\)

```csharp
public void Contour_ElementNode_Strain(double[] pRC, double[] pEC, double[] pAfC, float[] enstrain, int gflag)
```

#### Parameters

`pRC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pEC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pAfC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`enstrain` [float](https://learn.microsoft.com/dotnet/api/system.single)\[\]

`gflag` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_PostSlv_Contour_ElementNode_Stress_System_Double___System_Double___System_Double___System_Single___System_Int32_"></a> Contour\_ElementNode\_Stress\(double\[\], double\[\], double\[\], float\[\], int\)

```csharp
public void Contour_ElementNode_Stress(double[] pRC, double[] pEC, double[] pAfC, float[] enstress, int gflag)
```

#### Parameters

`pRC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pEC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pAfC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`enstress` [float](https://learn.microsoft.com/dotnet/api/system.single)\[\]

`gflag` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_PostSlv_Contour_Element_Strain_System_Double___System_Double___System_Double___System_Single___"></a> Contour\_Element\_Strain\(double\[\], double\[\], double\[\], float\[\]\)

```csharp
public void Contour_Element_Strain(double[] pRC, double[] pEC, double[] pAfC, float[] estrain)
```

#### Parameters

`pRC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pEC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pAfC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`estrain` [float](https://learn.microsoft.com/dotnet/api/system.single)\[\]

### <a id="VM_Models_Post_PostSlv_Contour_Element_Stress_System_Double___System_Double___System_Double___System_Single___"></a> Contour\_Element\_Stress\(double\[\], double\[\], double\[\], float\[\]\)

```csharp
public void Contour_Element_Stress(double[] pRC, double[] pEC, double[] pAfC, float[] estress)
```

#### Parameters

`pRC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pEC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pAfC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`estress` [float](https://learn.microsoft.com/dotnet/api/system.single)\[\]

### <a id="VM_Models_Post_PostSlv_Contour_End"></a> Contour\_End\(\)

```csharp
public void Contour_End()
```

### <a id="VM_Models_Post_PostSlv_Contour_Node_Strain_System_Double___System_Double___System_Double___System_Single___"></a> Contour\_Node\_Strain\(double\[\], double\[\], double\[\], float\[\]\)

```csharp
public void Contour_Node_Strain(double[] pRC, double[] pEC, double[] pAfC, float[] nstrain)
```

#### Parameters

`pRC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pEC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pAfC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`nstrain` [float](https://learn.microsoft.com/dotnet/api/system.single)\[\]

### <a id="VM_Models_Post_PostSlv_Contour_Node_Stress_System_Double___System_Double___System_Double___System_Single___"></a> Contour\_Node\_Stress\(double\[\], double\[\], double\[\], float\[\]\)

```csharp
public void Contour_Node_Stress(double[] pRC, double[] pEC, double[] pAfC, float[] nstress)
```

#### Parameters

`pRC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pEC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pAfC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`nstress` [float](https://learn.microsoft.com/dotnet/api/system.single)\[\]

### <a id="VM_Models_Post_PostSlv_Contour_Start_VM_Models_Post_IDataPart_System_Double___System_Double___System_Double___System_Int32_"></a> Contour\_Start\(IDataPart, double\[\], double\[\], double\[\], int\)

```csharp
public void Contour_Start(IDataPart pPart, double[] RI, double[] EI, double[] pAfI, int gflag)
```

#### Parameters

`pPart` IDataPart

`RI` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`EI` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pAfI` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`gflag` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_PostSlv_ConvertResultFromHPCToPost_System_String_"></a> ConvertResultFromHPCToPost\(string\)

```csharp
public static int ConvertResultFromHPCToPost(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_PostSlv_Deformation_vector_System_Double___System_Int32_System_Double___System_Int32_System_Double___System_Int32_System_Double___System_Int32_System_Double___System_Int32_"></a> Deformation\_vector\(double\[\], int, double\[\], int, double\[\], int, double\[\], int, double\[\], int\)

```csharp
public void Deformation_vector(double[] ri, int offsetR_i, double[] rc, int offsetR_c, double[] ac, int offsetA_c, double[] si0, int offsetSi_0, double[] d, int offsetDeformation)
```

#### Parameters

`ri` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetR_i` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`rc` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetR_c` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`ac` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetA_c` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`si0` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetSi_0` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`d` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`offsetDeformation` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_PostSlv_Deformation_vector_System_Double___System_Double___System_Double___System_Double___System_Double___"></a> Deformation\_vector\(double\[\], double\[\], double\[\], double\[\], double\[\]\)

```csharp
public void Deformation_vector(double[] ri, double[] rc, double[] ac, double[] si0, double[] d)
```

#### Parameters

`ri` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`rc` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`ac` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`si0` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`d` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_PostSlv_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
protected virtual void Dispose(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_PostSlv_Dispose"></a> Dispose\(\)

```csharp
public override sealed void Dispose()
```

### <a id="VM_Models_Post_PostSlv_GetContactPairsInfo"></a> GetContactPairsInfo\(\)

```csharp
public ContactPairsInfo GetContactPairsInfo()
```

#### Returns

 [ContactPairsInfo](VM.Models.Post.ContactPairsInfo.md)

### <a id="VM_Models_Post_PostSlv_Plot_Element_strain_VM_Models_Post_IDataPart_System_Double___System_Double___System_Double___System_Double___System_Double___System_Double___System_Int32_System_Int32_System_Double___"></a> Plot\_Element\_strain\(IDataPart, double\[\], double\[\], double\[\], double\[\], double\[\], double\[\], int, int, double\[\]\)

```csharp
public void Plot_Element_strain(IDataPart part, double[] pRC, double[] pEC, double[] pAfC, double[] pRI, double[] pEI, double[] pAfI, int bTop, int nID, double[] strain)
```

#### Parameters

`part` IDataPart

`pRC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pEC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pAfC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pRI` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pEI` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pAfI` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`bTop` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`strain` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_PostSlv_Plot_Element_stress_VM_Models_Post_IDataPart_System_Double___System_Double___System_Double___System_Double___System_Double___System_Double___System_Int32_System_Int32_System_Double___"></a> Plot\_Element\_stress\(IDataPart, double\[\], double\[\], double\[\], double\[\], double\[\], double\[\], int, int, double\[\]\)

```csharp
public void Plot_Element_stress(IDataPart part, double[] pRC, double[] pEC, double[] pAfC, double[] pRI, double[] pEI, double[] pAfI, int bTop, int nID, double[] stress)
```

#### Parameters

`part` IDataPart

`pRC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pEC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pAfC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pRI` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pEI` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pAfI` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`bTop` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`stress` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_PostSlv_Plot_Node_strain_VM_Models_Post_IDataPart_System_Double___System_Double___System_Double___System_Double___System_Double___System_Double___System_Int32_System_Int32_System_Double___"></a> Plot\_Node\_strain\(IDataPart, double\[\], double\[\], double\[\], double\[\], double\[\], double\[\], int, int, double\[\]\)

```csharp
public void Plot_Node_strain(IDataPart part, double[] pRC, double[] pEC, double[] pAfC, double[] pRI, double[] pEI, double[] pAfI, int bTop, int nID, double[] strain)
```

#### Parameters

`part` IDataPart

`pRC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pEC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pAfC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pRI` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pEI` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pAfI` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`bTop` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`strain` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_PostSlv_Plot_Node_stress_VM_Models_Post_IDataPart_System_Double___System_Double___System_Double___System_Double___System_Double___System_Double___System_Int32_System_Int32_System_Double___"></a> Plot\_Node\_stress\(IDataPart, double\[\], double\[\], double\[\], double\[\], double\[\], double\[\], int, int, double\[\]\)

```csharp
public void Plot_Node_stress(IDataPart part, double[] pRC, double[] pEC, double[] pAfC, double[] pRI, double[] pEI, double[] pAfI, int bTop, int nID, double[] stress)
```

#### Parameters

`part` IDataPart

`pRC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pEC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pAfC` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pRI` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pEI` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`pAfI` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`bTop` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`nID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`stress` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_PostSlv_RecoverOriginalPosition_System_Double___System_Double___System_Double___System_Double___System_Double___"></a> RecoverOriginalPosition\(double\[\], double\[\], double\[\], double\[\], double\[\]\)

```csharp
public static void RecoverOriginalPosition(double[] dirty_position, double[] reference, double[] si0, double[] sf, double[] orignal_position)
```

#### Parameters

`dirty_position` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`reference` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`si0` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`sf` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`orignal_position` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_PostSlv_RunFatigueAnalysis_System_String_"></a> RunFatigueAnalysis\(string\)

```csharp
public int RunFatigueAnalysis(string filepath)
```

#### Parameters

`filepath` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_PostSlv_UpdateDeformationScale_System_Double___System_Double___System_Double___System_Double___System_Double___"></a> UpdateDeformationScale\(double\[\], double\[\], double\[\], double\[\], double\[\]\)

```csharp
public static void UpdateDeformationScale(double[] reference, double[] si0, double[] original_position, double[] sf, double[] dirty_position)
```

#### Parameters

`reference` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`si0` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`original_position` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`sf` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

`dirty_position` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

