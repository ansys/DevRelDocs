# Interface IFaceInformation

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

### GetMinimumDistance\(IFaceInformation, TMatrix, TMatrix, double\)

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

`dLengthFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

The length factor.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

The minimum distance.

### GetMinimumDistanceAndDirection\(IFaceInformation, TMatrix, TMatrix, ref VectorBase\[\], double\)

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

`dLengthFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

The length factor.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

The minimum distance and direction.

### GetPointAndConnectivity\(ref VectorBase\[\], ref int\[\], ref int\[\], Reference, double\)

Get points and connectivity about face.

```csharp
void GetPointAndConnectivity(ref VectorBase[] arPt, ref int[] arConnectivity, ref int[] arNumOfConnectivity, Reference reference, double dLengthFactor)
```

#### Parameters

`arPt` [VectorBase](VM.Managed.VectorBase.md)\[\]

The facet point array.

`arConnectivity` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

The facet connetivity array.

`arNumOfConnectivity` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

The number of connectivity node array.

`reference` [Reference](VM.Managed.Reference.md)

The reference.

`dLengthFactor` [double](https://learn.microsoft.com/dotnet/api/system.double)

The length factor.


