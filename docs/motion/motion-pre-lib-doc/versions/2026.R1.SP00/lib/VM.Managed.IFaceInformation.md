# Interface IFaceInformation
<a id="VM_Managed_IFaceInformation"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This interface is to represent the face information.

```csharp
public interface IFaceInformation
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Managed_IFaceInformation_GetMinimumDistance_VM_Managed_IFaceInformation_VM_Managed_TMatrix_VM_Managed_TMatrix_System_Double_"></a> GetMinimumDistance\(IFaceInformation, TMatrix, TMatrix, double\)

Gets the minimum distance.

```csharp
double GetMinimumDistance(IFaceInformation compare_info, TMatrix mat, TMatrix compare_mat, double dLengthFactor)
```

#### Parameters

`compare_info` [IFaceInformation](VM.Managed.IFaceInformation.md)

The face information of compare.

`mat` [TMatrix](VM.Managed.TMatrix.md)

The matrix.

`compare_mat` [TMatrix](VM.Managed.TMatrix.md)

The matrix of compare.

`dLengthFactor` double

The length factor.

#### Returns

 double

The minimum distance.

### <a id="VM_Managed_IFaceInformation_GetMinimumDistanceAndDirection_VM_Managed_IFaceInformation_VM_Managed_TMatrix_VM_Managed_TMatrix_VM_Managed_VectorBase____System_Double_"></a> GetMinimumDistanceAndDirection\(IFaceInformation, TMatrix, TMatrix, ref VectorBase\[\], double\)

Gets the minimum distance.

```csharp
double GetMinimumDistanceAndDirection(IFaceInformation compare_info, TMatrix mat, TMatrix compare_mat, ref VectorBase[] arDirection, double dLengthFactor)
```

#### Parameters

`compare_info` [IFaceInformation](VM.Managed.IFaceInformation.md)

The face information of compare.

`mat` [TMatrix](VM.Managed.TMatrix.md)

The matrix.

`compare_mat` [TMatrix](VM.Managed.TMatrix.md)

The matrix of compare.

`arDirection` [VectorBase](VM.Managed.VectorBase.md)\[\]

The direction.

`dLengthFactor` double

The length factor.

#### Returns

 double

The minimum distance and direction.

### <a id="VM_Managed_IFaceInformation_GetPointAndConnectivity_VM_Models_Pre_FacetOption_VM_Managed_VectorBase____System_Int32____System_Int32____VM_Managed_Reference_System_Double_"></a> GetPointAndConnectivity\(FacetOption, ref VectorBase\[\], ref int\[\], ref int\[\], Reference, double\)

Get points and connectivity about face.

```csharp
void GetPointAndConnectivity(FacetOption facetOptions, ref VectorBase[] arPt, ref int[] arConnectivity, ref int[] arNumOfConnectivity, Reference reference, double dLengthFactor)
```

#### Parameters

`facetOptions` [FacetOption](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/FacetOption.cs)

The facet options.

`arPt` [VectorBase](VM.Managed.VectorBase.md)\[\]

The facet point array.

`arConnectivity` int\[\]

The facet connetivity array.

`arNumOfConnectivity` int\[\]

The number of connectivity node array.

`reference` [Reference](VM.Managed.Reference.md)

The reference.

`dLengthFactor` double

The length factor.

