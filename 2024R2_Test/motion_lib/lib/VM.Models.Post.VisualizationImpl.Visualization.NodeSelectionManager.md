# <a id="VM_Models_Post_VisualizationImpl_Visualization_NodeSelectionManager"></a> Class NodeSelectionManager

Namespace: [VM.Models.Post.VisualizationImpl.Visualization](VM.Models.Post.VisualizationImpl.Visualization.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public class NodeSelectionManager : MarkupModel, INodeSelectionManager, ISelectionManager, IAnimationManager, IManager
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
RefCountedObject ← 
Model ← 
MarkupModel ← 
[NodeSelectionManager](VM.Models.Post.VisualizationImpl.Visualization.NodeSelectionManager.md)

#### Implements

INodeSelectionManager, 
ISelectionManager, 
IAnimationManager, 
IManager

#### Inherited Members

MarkupModel.getCPtr\(MarkupModel\), 
MarkupModel.Dispose\(\), 
MarkupModel.ToString\(\), 
MarkupModel.partIndex\(MarkupPart\), 
MarkupModel.part\(uint\), 
MarkupModel.addPart\(MarkupPart\), 
MarkupModel.removePart\(MarkupPart\), 
MarkupModel.removeAllParts\(\), 
MarkupModel.rayIntersect\(Ray, View\), 
MarkupModel.rayIntersect\(Ray, View, MarkupModelHitItem\), 
MarkupModel.rayIntersectAllHits\(Ray, View, MarkupModelHitItemCollection\), 
MarkupModel.isViewClippingIgnored\(\), 
MarkupModel.setIgnoreViewClipping\(bool\), 
MarkupModel.castFromBaseClass\(Model\), 
MarkupModel.PartCount, 
Model.getCPtr\(Model\), 
Model.Dispose\(\), 
Model.Name, 
Model.BoundingBox, 
Model.Use2dPixelProjection, 
Model.ModelInfo, 
RefCountedObject.swigCMemOwn, 
RefCountedObject.getCPtr\(RefCountedObject\), 
RefCountedObject.Dispose\(\), 
RefCountedObject.addRef\(\), 
RefCountedObject.release\(\), 
RefCountedObject.refCount\(\), 
RefCountedObject.setRefCountZero\(\)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_VisualizationImpl_Visualization_NodeSelectionManager__ctor_System_String_"></a> NodeSelectionManager\(string\)

```csharp
public NodeSelectionManager(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_VisualizationImpl_Visualization_NodeSelectionManager_Name"></a> Name

```csharp
public string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Models_Post_VisualizationImpl_Visualization_NodeSelectionManager_ClearAllSelection"></a> ClearAllSelection\(\)

```csharp
public void ClearAllSelection()
```

### <a id="VM_Models_Post_VisualizationImpl_Visualization_NodeSelectionManager_GetSelectedItems"></a> GetSelectedItems\(\)

```csharp
public IList<HitItemInfo> GetSelectedItems()
```

#### Returns

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<HitItemInfo\>

### <a id="VM_Models_Post_VisualizationImpl_Visualization_NodeSelectionManager_Initialize_VM_Models_Post_VisualizationImpl_UnstructGrid_UnstructGridModel_"></a> Initialize\(UnstructGridModel\)

```csharp
public void Initialize(UnstructGridModel ug)
```

#### Parameters

`ug` [UnstructGridModel](VM.Models.Post.VisualizationImpl.UnstructGrid.UnstructGridModel.md)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_NodeSelectionManager_Select_System_Collections_Generic_IList_VM_Models_Post_HitItemInfo__"></a> Select\(IList<HitItemInfo\>\)

```csharp
public void Select(IList<HitItemInfo> hititems)
```

#### Parameters

`hititems` [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<HitItemInfo\>

### <a id="VM_Models_Post_VisualizationImpl_Visualization_NodeSelectionManager_UpdateAnimation_System_Int32_"></a> UpdateAnimation\(int\)

```csharp
public void UpdateAnimation(int stateid)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

