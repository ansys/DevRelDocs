# <a id="VM_Models_Post_IDFMFReader"></a> Interface IDFMFReader

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public interface IDFMFReader
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Post_IDFMFReader_ReadHeaderInfo_VM_Models_Post_MetaInfo_VM_Models_Post_ModeShapeInfo_"></a> ReadHeaderInfo\(MetaInfo, ModeShapeInfo\)

```csharp
void ReadHeaderInfo(MetaInfo metainfo, ModeShapeInfo modeshapeinfo)
```

#### Parameters

`metainfo` [MetaInfo](VM.Models.Post.MetaInfo.md)

`modeshapeinfo` [ModeShapeInfo](VM.Models.Post.ModeShapeInfo.md)

### <a id="VM_Models_Post_IDFMFReader_ReadNodeMass_System_Int32_VM_Models_Post_ModeShapeInfo_VM_Models_Post_IModal_System_Int32_"></a> ReadNodeMass\(int, ModeShapeInfo, IModal, int\)

```csharp
double ReadNodeMass(int nodalBodyCount, ModeShapeInfo modeShapeInfo, IModal body, int iNode)
```

#### Parameters

`nodalBodyCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`modeShapeInfo` [ModeShapeInfo](VM.Models.Post.ModeShapeInfo.md)

`body` [IModal](VM.Models.Post.IModal.md)

`iNode` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_IDFMFReader_ReadRModeShapeForBody_VM_Models_Post_IDataPart_VM_Models_Post_ModeShapeFileInfo_System_Int32_System_Double____"></a> ReadRModeShapeForBody\(IDataPart, ModeShapeFileInfo, int, ref double\[\]\)

```csharp
bool ReadRModeShapeForBody(IDataPart datapart, ModeShapeFileInfo fileinfo, int indexselectedmode, ref double[] modeshape)
```

#### Parameters

`datapart` [IDataPart](VM.Models.Post.IDataPart.md)

`fileinfo` [ModeShapeFileInfo](VM.Models.Post.ModeShapeFileInfo.md)

`indexselectedmode` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`modeshape` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IDFMFReader_ReadRModeShapesForNode_System_Collections_Generic_List_System_Int32__VM_Models_Post_IDataPart_VM_Models_Post_ModeShapeFileInfo_System_Int32_System_Collections_Generic_List_System_Double_____"></a> ReadRModeShapesForNode\(List<int\>, IDataPart, ModeShapeFileInfo, int, ref List<double\[\]\>\)

```csharp
bool ReadRModeShapesForNode(List<int> indexesselectedmodes, IDataPart datapart, ModeShapeFileInfo fileinfo, int indexnode, ref List<double[]> modeshapes)
```

#### Parameters

`indexesselectedmodes` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`datapart` [IDataPart](VM.Models.Post.IDataPart.md)

`fileinfo` [ModeShapeFileInfo](VM.Models.Post.ModeShapeFileInfo.md)

`indexnode` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`modeshapes` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IDFMFReader_ReadRModeShapesForNodes_System_Collections_Generic_List_System_Int32__VM_Models_Post_IDataPart_VM_Models_Post_ModeShapeFileInfo_System_Int32___System_Collections_Generic_List_System_Double_____"></a> ReadRModeShapesForNodes\(List<int\>, IDataPart, ModeShapeFileInfo, int\[\], ref List<double\[\]\>\)

```csharp
bool ReadRModeShapesForNodes(List<int> indexesselectedmodes, IDataPart datapart, ModeShapeFileInfo fileinfo, int[] nodesindex, ref List<double[]> modeshapes)
```

#### Parameters

`indexesselectedmodes` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`datapart` [IDataPart](VM.Models.Post.IDataPart.md)

`fileinfo` [ModeShapeFileInfo](VM.Models.Post.ModeShapeFileInfo.md)

`nodesindex` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

`modeshapes` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IDFMFReader_ReadTModeShapeForBody_VM_Models_Post_IDataPart_VM_Models_Post_ModeShapeFileInfo_System_Int32_System_Double____"></a> ReadTModeShapeForBody\(IDataPart, ModeShapeFileInfo, int, ref double\[\]\)

```csharp
bool ReadTModeShapeForBody(IDataPart datapart, ModeShapeFileInfo fileinfo, int indexselectedmode, ref double[] modeshape)
```

#### Parameters

`datapart` [IDataPart](VM.Models.Post.IDataPart.md)

`fileinfo` [ModeShapeFileInfo](VM.Models.Post.ModeShapeFileInfo.md)

`indexselectedmode` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`modeshape` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IDFMFReader_ReadTModeShapesForNode_System_Collections_Generic_List_System_Int32__VM_Models_Post_IDataPart_VM_Models_Post_ModeShapeFileInfo_System_Int32_System_Collections_Generic_List_System_Double_____"></a> ReadTModeShapesForNode\(List<int\>, IDataPart, ModeShapeFileInfo, int, ref List<double\[\]\>\)

```csharp
bool ReadTModeShapesForNode(List<int> indexesselectedmodes, IDataPart datapart, ModeShapeFileInfo fileinfo, int indexnode, ref List<double[]> modeshapes)
```

#### Parameters

`indexesselectedmodes` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`datapart` [IDataPart](VM.Models.Post.IDataPart.md)

`fileinfo` [ModeShapeFileInfo](VM.Models.Post.ModeShapeFileInfo.md)

`indexnode` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`modeshapes` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IDFMFReader_ReadTModeShapesForNodes_System_Collections_Generic_List_System_Int32__VM_Models_Post_IDataPart_VM_Models_Post_ModeShapeFileInfo_System_Int32___System_Collections_Generic_List_System_Double_____"></a> ReadTModeShapesForNodes\(List<int\>, IDataPart, ModeShapeFileInfo, int\[\], ref List<double\[\]\>\)

```csharp
bool ReadTModeShapesForNodes(List<int> indexesselectedmodes, IDataPart datapart, ModeShapeFileInfo fileinfo, int[] nodesindex, ref List<double[]> modeshapes)
```

#### Parameters

`indexesselectedmodes` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

`datapart` [IDataPart](VM.Models.Post.IDataPart.md)

`fileinfo` [ModeShapeFileInfo](VM.Models.Post.ModeShapeFileInfo.md)

`nodesindex` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

`modeshapes` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IDFMFReader_ReadTotalRModeShapesForBody_VM_Models_Post_IModal_VM_Models_Post_ModeShapeFileInfo_System_Collections_Generic_IList_System_Double_____"></a> ReadTotalRModeShapesForBody\(IModal, ModeShapeFileInfo, ref IList<double\[\]\>\)

```csharp
bool ReadTotalRModeShapesForBody(IModal modal, ModeShapeFileInfo fileinfo, ref IList<double[]> rmodeshapesGroup)
```

#### Parameters

`modal` [IModal](VM.Models.Post.IModal.md)

`fileinfo` [ModeShapeFileInfo](VM.Models.Post.ModeShapeFileInfo.md)

`rmodeshapesGroup` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_IDFMFReader_ReadTotalTModeShapesForBody_VM_Models_Post_IModal_VM_Models_Post_ModeShapeFileInfo_System_Collections_Generic_IList_System_Double_____"></a> ReadTotalTModeShapesForBody\(IModal, ModeShapeFileInfo, ref IList<double\[\]\>\)

```csharp
bool ReadTotalTModeShapesForBody(IModal modal, ModeShapeFileInfo fileinfo, ref IList<double[]> tmodeshapeGroup)
```

#### Parameters

`modal` [IModal](VM.Models.Post.IModal.md)

`fileinfo` [ModeShapeFileInfo](VM.Models.Post.ModeShapeFileInfo.md)

`tmodeshapeGroup` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

