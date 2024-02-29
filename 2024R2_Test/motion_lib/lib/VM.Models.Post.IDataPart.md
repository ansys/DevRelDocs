# <a id="VM_Models_Post_IDataPart"></a> Interface IDataPart

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IDataPart : IExtremalValueVisible
```

#### Implements

[IExtremalValueVisible](VM.Models.Post.IExtremalValueVisible.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### <a id="VM_Models_Post_IDataPart_DummyNodes"></a> DummyNodes

```csharp
int DummyNodes { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IDataPart_ElementCount"></a> ElementCount

```csharp
uint ElementCount { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_IDataPart_ElementStartIndexes"></a> ElementStartIndexes

```csharp
uint[] ElementStartIndexes { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

### <a id="VM_Models_Post_IDataPart_ElementsFromNode"></a> ElementsFromNode

```csharp
uint[][] ElementsFromNode { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]\[\]

### <a id="VM_Models_Post_IDataPart_ElementsNodeCount"></a> ElementsNodeCount

```csharp
uint ElementsNodeCount { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_IDataPart_ElementsTopBottom"></a> ElementsTopBottom

```csharp
bool[] ElementsTopBottom { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\[\]

### <a id="VM_Models_Post_IDataPart_IsSupportElementNodeTypeContour"></a> IsSupportElementNodeTypeContour

```csharp
bool IsSupportElementNodeTypeContour { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IDataPart_NodesCount"></a> NodesCount

```csharp
uint NodesCount { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_IDataPart_PartIndex"></a> PartIndex

```csharp
int PartIndex { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IDataPart_PartSettings"></a> PartSettings

```csharp
IPartSettings PartSettings { get; set; }
```

#### Property Value

 [IPartSettings](VM.Models.Post.IPartSettings.md)

### <a id="VM_Models_Post_IDataPart_SixDOFNodes"></a> SixDOFNodes

```csharp
bool[] SixDOFNodes { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\[\]

### <a id="VM_Models_Post_IDataPart_UnReferencedNodeflags"></a> UnReferencedNodeflags

```csharp
bool[] UnReferencedNodeflags { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\[\]

## Methods

### <a id="VM_Models_Post_IDataPart_AddElements_VM_Models_Post_ElementType_System_UInt32_System_UInt32___System_Boolean_"></a> AddElements\(ElementType, uint, uint\[\], bool\)

```csharp
void AddElements(ElementType elementType, uint elementCount, uint[] elementNodes, bool bmodal)
```

#### Parameters

`elementType` [ElementType](VM.Models.Post.ElementType.md)

`elementCount` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`elementNodes` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

`bmodal` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IDataPart_EdgesPerElement_System_UInt32_"></a> EdgesPerElement\(uint\)

```csharp
uint EdgesPerElement(uint elementIndex)
```

#### Parameters

`elementIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_IDataPart_ElementId_System_UInt32_"></a> ElementId\(uint\)

```csharp
int ElementId(uint elementIndex)
```

#### Parameters

`elementIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IDataPart_ElementIndex_System_Int32_"></a> ElementIndex\(int\)

```csharp
uint ElementIndex(int elementId)
```

#### Parameters

`elementId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_IDataPart_ElementNodes_System_UInt32_"></a> ElementNodes\(uint\)

```csharp
uint[] ElementNodes(uint elementIndex)
```

#### Parameters

`elementIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

### <a id="VM_Models_Post_IDataPart_ElementType_System_UInt32_"></a> ElementType\(uint\)

```csharp
ElementType ElementType(uint elementIndex)
```

#### Parameters

`elementIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [ElementType](VM.Models.Post.ElementType.md)

### <a id="VM_Models_Post_IDataPart_GetElementIds"></a> GetElementIds\(\)

```csharp
int[] GetElementIds()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_IDataPart_GetInitialReference"></a> GetInitialReference\(\)

```csharp
ITransformMatrix GetInitialReference()
```

#### Returns

 [ITransformMatrix](VM.Models.Post.ITransformMatrix.md)

### <a id="VM_Models_Post_IDataPart_GetInitialTransform"></a> GetInitialTransform\(\)

```csharp
ITransformMatrix GetInitialTransform()
```

#### Returns

 [ITransformMatrix](VM.Models.Post.ITransformMatrix.md)

### <a id="VM_Models_Post_IDataPart_GetNodeIds"></a> GetNodeIds\(\)

```csharp
int[] GetNodeIds()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_IDataPart_GetNodePosition_System_UInt32_"></a> GetNodePosition\(uint\)

```csharp
Vector GetNodePosition(uint nodeIndex)
```

#### Parameters

`nodeIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 Vector

### <a id="VM_Models_Post_IDataPart_GetNodes"></a> GetNodes\(\)

```csharp
double[] GetNodes()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IDataPart_Initialize_System_Boolean_System_UInt32_System_Int32_"></a> Initialize\(bool, uint, int\)

```csharp
void Initialize(bool hasids, uint nprop, int partID)
```

#### Parameters

`hasids` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`nprop` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`partID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IDataPart_InitializePartSettings_System_Int32_VM_Models_Post_IUnstructGridModel_System_Drawing_Color_System_Drawing_Bitmap_"></a> InitializePartSettings\(int, IUnstructGridModel, Color, Bitmap\)

```csharp
void InitializePartSettings(int partIndex, IUnstructGridModel unstructGridModel, Color color, Bitmap textureImage)
```

#### Parameters

`partIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`unstructGridModel` [IUnstructGridModel](VM.Models.Post.IUnstructGridModel.md)

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

`textureImage` Bitmap

### <a id="VM_Models_Post_IDataPart_NodeId_System_UInt32_"></a> NodeId\(uint\)

```csharp
int NodeId(uint nodeIndex)
```

#### Parameters

`nodeIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IDataPart_NodeIndex_System_Int32_"></a> NodeIndex\(int\)

```csharp
uint NodeIndex(int nodeID)
```

#### Parameters

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_IDataPart_NodesPerElement_System_UInt32_"></a> NodesPerElement\(uint\)

```csharp
uint NodesPerElement(uint elementIndex)
```

#### Parameters

`elementIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_IDataPart_RemoveAllElements"></a> RemoveAllElements\(\)

```csharp
void RemoveAllElements()
```

### <a id="VM_Models_Post_IDataPart_SetAsEmpty_System_Int32_"></a> SetAsEmpty\(int\)

```csharp
void SetAsEmpty(int partID)
```

#### Parameters

`partID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_IDataPart_SetElementIds_System_UInt32_System_Int32___"></a> SetElementIds\(uint, int\[\]\)

```csharp
void SetElementIds(uint destinationIndex, int[] elementIds)
```

#### Parameters

`destinationIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`elementIds` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_IDataPart_SetInitialReference_VM_Models_Post_ITransformMatrix_"></a> SetInitialReference\(ITransformMatrix\)

```csharp
void SetInitialReference(ITransformMatrix transform)
```

#### Parameters

`transform` [ITransformMatrix](VM.Models.Post.ITransformMatrix.md)

### <a id="VM_Models_Post_IDataPart_SetInitialTransform_VM_Models_Post_ITransformMatrix_"></a> SetInitialTransform\(ITransformMatrix\)

```csharp
void SetInitialTransform(ITransformMatrix transform)
```

#### Parameters

`transform` [ITransformMatrix](VM.Models.Post.ITransformMatrix.md)

### <a id="VM_Models_Post_IDataPart_SetNodeIds_System_Int32___"></a> SetNodeIds\(int\[\]\)

```csharp
void SetNodeIds(int[] nodeIds)
```

#### Parameters

`nodeIds` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_IDataPart_SetNodes_System_Double___"></a> SetNodes\(double\[\]\)

```csharp
void SetNodes(double[] nodes)
```

#### Parameters

`nodes` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_IDataPart_SetUserProperties_System_UInt32_System_UInt32_System_Int32___"></a> SetUserProperties\(uint, uint, int\[\]\)

```csharp
void SetUserProperties(uint userPropertyIndex, uint destinationindex, int[] userProperty)
```

#### Parameters

`userPropertyIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`destinationindex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`userProperty` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_IDataPart_SurfacesPerElement_System_UInt32_"></a> SurfacesPerElement\(uint\)

```csharp
uint SurfacesPerElement(uint elementIndex)
```

#### Parameters

`elementIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_IDataPart_UpdateEigenvalueDataPart_VM_Models_Post_IDataState_VM_Models_Post_BodyType_VM_Models_Post_IDataPart_"></a> UpdateEigenvalueDataPart\(IDataState, BodyType, IDataPart\)

```csharp
void UpdateEigenvalueDataPart(IDataState targetDataState, BodyType bodyType, IDataPart targetDataPart)
```

#### Parameters

`targetDataState` [IDataState](VM.Models.Post.IDataState.md)

`bodyType` [BodyType](VM.Models.Post.BodyType.md)

`targetDataPart` [IDataPart](VM.Models.Post.IDataPart.md)

### <a id="VM_Models_Post_IDataPart_UpdateElementNodesIndexes"></a> UpdateElementNodesIndexes\(\)

```csharp
void UpdateElementNodesIndexes()
```

### <a id="VM_Models_Post_IDataPart_UpdateElementStartIndexes"></a> UpdateElementStartIndexes\(\)

```csharp
void UpdateElementStartIndexes()
```

### <a id="VM_Models_Post_IDataPart_UpdatePartInformation_System_Boolean_"></a> UpdatePartInformation\(bool\)

```csharp
bool UpdatePartInformation(bool treatallas3dof)
```

#### Parameters

`treatallas3dof` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IDataPart_UserProperty_System_UInt32_System_UInt32_"></a> UserProperty\(uint, uint\)

```csharp
int UserProperty(uint userPropertyIndex, uint elementIndex)
```

#### Parameters

`userPropertyIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`elementIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

