# <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart"></a> Class DataPart

Namespace: [VM.Models.Post.VisualizationImpl.UnstructGrid](VM.Models.Post.VisualizationImpl.UnstructGrid.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public class DataPart : IDataPart, IExtremalValueVisible
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DataPart](VM.Models.Post.VisualizationImpl.UnstructGrid.DataPart.md)

#### Implements

IDataPart, 
IExtremalValueVisible

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart__ctor"></a> DataPart\(\)

```csharp
public DataPart()
```

## Properties

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_DATAPART"></a> DATAPART

```csharp
public DataPart DATAPART { get; }
```

#### Property Value

 DataPart

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_DummyNodes"></a> DummyNodes

```csharp
public int DummyNodes { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_ElementCount"></a> ElementCount

```csharp
public uint ElementCount { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_ElementStartIndexes"></a> ElementStartIndexes

```csharp
public uint[] ElementStartIndexes { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_ElementsFromNode"></a> ElementsFromNode

```csharp
public uint[][] ElementsFromNode { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_ElementsNodeCount"></a> ElementsNodeCount

```csharp
public uint ElementsNodeCount { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_ElementsTopBottom"></a> ElementsTopBottom

```csharp
public bool[] ElementsTopBottom { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_IsSupportElementNodeTypeContour"></a> IsSupportElementNodeTypeContour

```csharp
public bool IsSupportElementNodeTypeContour { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_NodesCount"></a> NodesCount

```csharp
public uint NodesCount { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_PartIndex"></a> PartIndex

```csharp
public int PartIndex { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_PartSettings"></a> PartSettings

```csharp
public IPartSettings PartSettings { get; set; }
```

#### Property Value

 IPartSettings

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_SixDOFNodes"></a> SixDOFNodes

```csharp
public bool[] SixDOFNodes { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_UnReferencedNodeflags"></a> UnReferencedNodeflags

```csharp
public bool[] UnReferencedNodeflags { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_Visible"></a> Visible

```csharp
public bool Visible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_AddElements_VM_Models_Post_ElementType_System_UInt32_System_UInt32___System_Boolean_"></a> AddElements\(ElementType, uint, uint\[\], bool\)

```csharp
public void AddElements(ElementType elementType, uint elementCount, uint[] elementNodes, bool makeElementNode = false)
```

#### Parameters

`elementType` ElementType

`elementCount` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`elementNodes` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

`makeElementNode` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_EdgesPerElement_System_UInt32_"></a> EdgesPerElement\(uint\)

```csharp
public uint EdgesPerElement(uint elementIndex)
```

#### Parameters

`elementIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_ElementId_System_UInt32_"></a> ElementId\(uint\)

```csharp
public int ElementId(uint elementIndex)
```

#### Parameters

`elementIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_ElementIndex_System_Int32_"></a> ElementIndex\(int\)

```csharp
public uint ElementIndex(int elementId)
```

#### Parameters

`elementId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_ElementNodes_System_UInt32_"></a> ElementNodes\(uint\)

```csharp
public uint[] ElementNodes(uint elementIndex)
```

#### Parameters

`elementIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_ElementType_System_UInt32_"></a> ElementType\(uint\)

```csharp
public ElementType ElementType(uint elementIndex)
```

#### Parameters

`elementIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 ElementType

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_GetElementIds"></a> GetElementIds\(\)

```csharp
public int[] GetElementIds()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_GetInitialReference"></a> GetInitialReference\(\)

```csharp
public ITransformMatrix GetInitialReference()
```

#### Returns

 ITransformMatrix

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_GetInitialTransform"></a> GetInitialTransform\(\)

```csharp
public ITransformMatrix GetInitialTransform()
```

#### Returns

 ITransformMatrix

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_GetNodeIds"></a> GetNodeIds\(\)

```csharp
public int[] GetNodeIds()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_GetNodePosition_System_UInt32_"></a> GetNodePosition\(uint\)

```csharp
public Vector GetNodePosition(uint nodeIndex)
```

#### Parameters

`nodeIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 Vector

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_GetNodes"></a> GetNodes\(\)

```csharp
public double[] GetNodes()
```

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_Initialize_System_Boolean_System_UInt32_System_Int32_"></a> Initialize\(bool, uint, int\)

```csharp
public void Initialize(bool hasids, uint nprop, int partID)
```

#### Parameters

`hasids` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`nprop` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`partID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_InitializePartSettings_System_Int32_VM_Models_Post_IUnstructGridModel_System_Drawing_Color_System_Drawing_Bitmap_"></a> InitializePartSettings\(int, IUnstructGridModel, Color, Bitmap\)

```csharp
public void InitializePartSettings(int partIndex, IUnstructGridModel unstructGridModel, Color color, Bitmap textureImage)
```

#### Parameters

`partIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`unstructGridModel` IUnstructGridModel

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

`textureImage` [Bitmap](https://learn.microsoft.com/dotnet/api/system.drawing.bitmap)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_NodeId_System_UInt32_"></a> NodeId\(uint\)

```csharp
public int NodeId(uint nodeIndex)
```

#### Parameters

`nodeIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_NodeIndex_System_Int32_"></a> NodeIndex\(int\)

```csharp
public uint NodeIndex(int nodeID)
```

#### Parameters

`nodeID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_NodesPerElement_System_UInt32_"></a> NodesPerElement\(uint\)

```csharp
public uint NodesPerElement(uint elementIndex)
```

#### Parameters

`elementIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_RemoveAllElements"></a> RemoveAllElements\(\)

```csharp
public void RemoveAllElements()
```

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_SetAsEmpty_System_Int32_"></a> SetAsEmpty\(int\)

```csharp
public void SetAsEmpty(int partID)
```

#### Parameters

`partID` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_SetElementIds_System_UInt32_System_Int32___"></a> SetElementIds\(uint, int\[\]\)

```csharp
public void SetElementIds(uint destinationindex, int[] elementIds)
```

#### Parameters

`destinationindex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`elementIds` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_SetInitialReference_VM_Models_Post_ITransformMatrix_"></a> SetInitialReference\(ITransformMatrix\)

```csharp
public void SetInitialReference(ITransformMatrix transform)
```

#### Parameters

`transform` ITransformMatrix

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_SetInitialTransform_VM_Models_Post_ITransformMatrix_"></a> SetInitialTransform\(ITransformMatrix\)

```csharp
public void SetInitialTransform(ITransformMatrix transform)
```

#### Parameters

`transform` ITransformMatrix

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_SetNodeIds_System_Int32___"></a> SetNodeIds\(int\[\]\)

```csharp
public void SetNodeIds(int[] nodeIds)
```

#### Parameters

`nodeIds` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_SetNodes_System_Double___"></a> SetNodes\(double\[\]\)

```csharp
public void SetNodes(double[] positions)
```

#### Parameters

`positions` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_SetUserProperties_System_UInt32_System_UInt32_System_Int32___"></a> SetUserProperties\(uint, uint, int\[\]\)

```csharp
public void SetUserProperties(uint userPropertyIndex, uint destinationindex, int[] userProperties)
```

#### Parameters

`userPropertyIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`destinationindex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`userProperties` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_SurfacesPerElement_System_UInt32_"></a> SurfacesPerElement\(uint\)

```csharp
public uint SurfacesPerElement(uint elementIndex)
```

#### Parameters

`elementIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_UpdateEigenvalueDataPart_VM_Models_Post_IDataState_VM_Models_Post_BodyType_VM_Models_Post_IDataPart_"></a> UpdateEigenvalueDataPart\(IDataState, BodyType, IDataPart\)

```csharp
public void UpdateEigenvalueDataPart(IDataState targetDataState, BodyType bodyType, IDataPart targetDataPart)
```

#### Parameters

`targetDataState` IDataState

`bodyType` BodyType

`targetDataPart` IDataPart

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_UpdateElementNodesIndexes"></a> UpdateElementNodesIndexes\(\)

```csharp
public void UpdateElementNodesIndexes()
```

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_UpdateElementStartIndexes"></a> UpdateElementStartIndexes\(\)

```csharp
public void UpdateElementStartIndexes()
```

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_UpdatePartInformation_System_Boolean_"></a> UpdatePartInformation\(bool\)

```csharp
public bool UpdatePartInformation(bool treatallas3dof)
```

#### Parameters

`treatallas3dof` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_UnstructGrid_DataPart_UserProperty_System_UInt32_System_UInt32_"></a> UserProperty\(uint, uint\)

```csharp
public int UserProperty(uint userPropertyIndex, uint elementIndex)
```

#### Parameters

`userPropertyIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`elementIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

