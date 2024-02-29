# <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataState"></a> Class DataState

Namespace: [VM.Models.Post.VisualizationImpl.UnstructGrid](VM.Models.Post.VisualizationImpl.UnstructGrid.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
[DependencyResolve(typeof(IDataState))]
public class DataState : IDataState
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DataState](VM.Models.Post.VisualizationImpl.UnstructGrid.DataState.md)

#### Implements

IDataState

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataState__ctor"></a> DataState\(\)

```csharp
public DataState()
```

## Properties

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataState_ID"></a> ID

```csharp
public int ID { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataState_ScalarResultMappingType"></a> ScalarResultMappingType

```csharp
public ResultMapping ScalarResultMappingType { get; }
```

#### Property Value

 ResultMapping

## Methods

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataState_AddDisplacements_System_Double___"></a> AddDisplacements\(double\[\]\)

```csharp
public void AddDisplacements(double[] displacements)
```

#### Parameters

`displacements` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataState_AddScalarResult_System_Collections_Generic_IList_System_Double____"></a> AddScalarResult\(IList<double\[\]\>\)

```csharp
public void AddScalarResult(IList<double[]> resultGroups)
```

#### Parameters

`resultGroups` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataState_AddScalarResult_System_Double___"></a> AddScalarResult\(double\[\]\)

```csharp
public void AddScalarResult(double[] resultGroup)
```

#### Parameters

`resultGroup` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataState_AddTransformation_VM_Models_Post_ITransformMatrix_"></a> AddTransformation\(ITransformMatrix\)

```csharp
public void AddTransformation(ITransformMatrix transformation)
```

#### Parameters

`transformation` ITransformMatrix

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataState_AddTransformationForFollowingCam_System_Double___"></a> AddTransformationForFollowingCam\(double\[\]\)

```csharp
public void AddTransformationForFollowingCam(double[] referenceframe)
```

#### Parameters

`referenceframe` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataState_GetDisplacements_System_UInt32_"></a> GetDisplacements\(uint\)

```csharp
public double[] GetDisplacements(uint partIndex)
```

#### Parameters

`partIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataState_GetElementsQuery_System_UInt32_"></a> GetElementsQuery\(uint\)

```csharp
public IElementsQuery GetElementsQuery(uint ipart)
```

#### Parameters

`ipart` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 IElementsQuery

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataState_GetElementsQuery_System_UInt32_System_Double___"></a> GetElementsQuery\(uint, double\[\]\)

```csharp
public IElementsQuery GetElementsQuery(uint ipart, double[] displacements)
```

#### Parameters

`ipart` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`displacements` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 IElementsQuery

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataState_GetNode_System_Int32_System_Int32_"></a> GetNode\(int, int\)

```csharp
public Vector GetNode(int ipart, int inode)
```

#### Parameters

`ipart` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`inode` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 Vector

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataState_GetPartDisplacement_System_Int32_"></a> GetPartDisplacement\(int\)

```csharp
public double[] GetPartDisplacement(int ipart)
```

#### Parameters

`ipart` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataState_GetPartScalar_System_UInt32_"></a> GetPartScalar\(uint\)

```csharp
public double[] GetPartScalar(uint ipart)
```

#### Parameters

`ipart` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataState_GetTransformation_System_Int32_"></a> GetTransformation\(int\)

```csharp
public ITransformMatrix GetTransformation(int ipart)
```

#### Parameters

`ipart` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 ITransformMatrix

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataState_GetTransformationForFollowingCam_System_Int32_"></a> GetTransformationForFollowingCam\(int\)

```csharp
public double[] GetTransformationForFollowingCam(int ipart)
```

#### Parameters

`ipart` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataState_IncludeDisplacementResult"></a> IncludeDisplacementResult\(\)

```csharp
public bool IncludeDisplacementResult()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataState_IncludePartDisplacementResult_System_UInt32_"></a> IncludePartDisplacementResult\(uint\)

```csharp
public bool IncludePartDisplacementResult(uint partIndex)
```

#### Parameters

`partIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataState_Initialize_System_Int32_VM_Models_Post_IDataGeometry_"></a> Initialize\(int, IDataGeometry\)

```csharp
public void Initialize(int stateid, IDataGeometry datagoemetry)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`datagoemetry` IDataGeometry

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataState_Release"></a> Release\(\)

```csharp
public void Release()
```

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataState_SetContourResultID_System_Int32_VM_Models_Post_ResultMapping_"></a> SetContourResultID\(int, ResultMapping\)

```csharp
public void SetContourResultID(int resultid, ResultMapping type)
```

#### Parameters

`resultid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`type` ResultMapping

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataState_SetDisplacementsResultID_System_Int32_"></a> SetDisplacementsResultID\(int\)

```csharp
public void SetDisplacementsResultID(int resultid)
```

#### Parameters

`resultid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataState_SetPartDisplacement_System_Int32_System_Double___"></a> SetPartDisplacement\(int, double\[\]\)

```csharp
public void SetPartDisplacement(int ipart, double[] displacement)
```

#### Parameters

`ipart` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`displacement` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataState_SetTransformationResult"></a> SetTransformationResult\(\)

```csharp
public void SetTransformationResult()
```

