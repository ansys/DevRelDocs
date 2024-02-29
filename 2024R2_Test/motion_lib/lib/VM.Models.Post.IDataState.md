# <a id="VM_Models_Post_IDataState"></a> Interface IDataState

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IDataState
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_IDataState_ID"></a> ID

```csharp
int ID { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IDataState_ScalarResultMappingType"></a> ScalarResultMappingType

```csharp
ResultMapping ScalarResultMappingType { get; }
```

#### Property Value

 [ResultMapping](VM.Models.Post.ResultMapping.md)

## Methods

### <a id="VM_Models_Post_IDataState_AddDisplacements_System_Double___"></a> AddDisplacements\(double\[\]\)

```csharp
void AddDisplacements(double[] displacements)
```

#### Parameters

`displacements` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IDataState_AddScalarResult_System_Collections_Generic_IList_System_Double____"></a> AddScalarResult\(IList<double\[\]\>\)

```csharp
void AddScalarResult(IList<double[]> resultGroups)
```

#### Parameters

`resultGroups` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Models_Post_IDataState_AddScalarResult_System_Double___"></a> AddScalarResult\(double\[\]\)

```csharp
void AddScalarResult(double[] resultGroup)
```

#### Parameters

`resultGroup` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IDataState_AddTransformation_VM_Models_Post_ITransformMatrix_"></a> AddTransformation\(ITransformMatrix\)

```csharp
void AddTransformation(ITransformMatrix transformations)
```

#### Parameters

`transformations` [ITransformMatrix](VM.Models.Post.ITransformMatrix.md)

### <a id="VM_Models_Post_IDataState_AddTransformationForFollowingCam_System_Double___"></a> AddTransformationForFollowingCam\(double\[\]\)

```csharp
void AddTransformationForFollowingCam(double[] referenceframe)
```

#### Parameters

`referenceframe` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IDataState_GetDisplacements_System_UInt32_"></a> GetDisplacements\(uint\)

```csharp
double[] GetDisplacements(uint partIndex)
```

#### Parameters

`partIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IDataState_GetElementsQuery_System_UInt32_"></a> GetElementsQuery\(uint\)

```csharp
IElementsQuery GetElementsQuery(uint ipart)
```

#### Parameters

`ipart` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [IElementsQuery](VM.Models.Post.IElementsQuery.md)

### <a id="VM_Models_Post_IDataState_GetElementsQuery_System_UInt32_System_Double___"></a> GetElementsQuery\(uint, double\[\]\)

```csharp
IElementsQuery GetElementsQuery(uint ipart, double[] displacements)
```

#### Parameters

`ipart` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`displacements` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [IElementsQuery](VM.Models.Post.IElementsQuery.md)

### <a id="VM_Models_Post_IDataState_GetNode_System_Int32_System_Int32_"></a> GetNode\(int, int\)

```csharp
Vector GetNode(int ipart, int inode)
```

#### Parameters

`ipart` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`inode` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 Vector

### <a id="VM_Models_Post_IDataState_GetPartDisplacement_System_Int32_"></a> GetPartDisplacement\(int\)

```csharp
double[] GetPartDisplacement(int ipart)
```

#### Parameters

`ipart` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IDataState_GetPartScalar_System_UInt32_"></a> GetPartScalar\(uint\)

```csharp
double[] GetPartScalar(uint ipart)
```

#### Parameters

`ipart` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IDataState_GetTransformation_System_Int32_"></a> GetTransformation\(int\)

```csharp
ITransformMatrix GetTransformation(int ipart)
```

#### Parameters

`ipart` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [ITransformMatrix](VM.Models.Post.ITransformMatrix.md)

### <a id="VM_Models_Post_IDataState_GetTransformationForFollowingCam_System_Int32_"></a> GetTransformationForFollowingCam\(int\)

```csharp
double[] GetTransformationForFollowingCam(int ipart)
```

#### Parameters

`ipart` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IDataState_IncludeDisplacementResult"></a> IncludeDisplacementResult\(\)

```csharp
bool IncludeDisplacementResult()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IDataState_IncludePartDisplacementResult_System_UInt32_"></a> IncludePartDisplacementResult\(uint\)

```csharp
bool IncludePartDisplacementResult(uint partIndex)
```

#### Parameters

`partIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IDataState_Initialize_System_Int32_VM_Models_Post_IDataGeometry_"></a> Initialize\(int, IDataGeometry\)

```csharp
void Initialize(int stateid, IDataGeometry datagoemetry)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`datagoemetry` [IDataGeometry](VM.Models.Post.IDataGeometry.md)

### <a id="VM_Models_Post_IDataState_Release"></a> Release\(\)

```csharp
void Release()
```

### <a id="VM_Models_Post_IDataState_SetContourResultID_System_Int32_VM_Models_Post_ResultMapping_"></a> SetContourResultID\(int, ResultMapping\)

```csharp
void SetContourResultID(int resultid, ResultMapping type)
```

#### Parameters

`resultid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`type` [ResultMapping](VM.Models.Post.ResultMapping.md)

### <a id="VM_Models_Post_IDataState_SetDisplacementsResultID_System_Int32_"></a> SetDisplacementsResultID\(int\)

```csharp
void SetDisplacementsResultID(int resultid)
```

#### Parameters

`resultid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IDataState_SetPartDisplacement_System_Int32_System_Double___"></a> SetPartDisplacement\(int, double\[\]\)

```csharp
void SetPartDisplacement(int ipart, double[] displacement)
```

#### Parameters

`ipart` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`displacement` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IDataState_SetTransformationResult"></a> SetTransformationResult\(\)

```csharp
void SetTransformationResult()
```

