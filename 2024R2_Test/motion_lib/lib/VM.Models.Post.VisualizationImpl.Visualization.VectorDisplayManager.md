# <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayManager"></a> Class VectorDisplayManager

Namespace: [VM.Models.Post.VisualizationImpl.Visualization](VM.Models.Post.VisualizationImpl.Visualization.md)  
Assembly: VM.Models.Post.VisualizationImpl.dll  

```csharp
public sealed class VectorDisplayManager : MarkupModel, IVectorDisplayManager, ISecondPassModel, IAnimationManager, IManager
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
RefCountedObject ← 
Model ← 
MarkupModel ← 
[VectorDisplayManager](VM.Models.Post.VisualizationImpl.Visualization.VectorDisplayManager.md)

#### Implements

IVectorDisplayManager, 
ISecondPassModel, 
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

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayManager__ctor_System_String_"></a> VectorDisplayManager\(string\)

```csharp
public VectorDisplayManager(string name)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayManager_Name"></a> Name

```csharp
public string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayManager_Add_System_String_VM_Models_Post_IVectorDisplayAnimationBase_VM_Models_OutputReader_IVectorDisplayAnimationData_"></a> Add\(string, IVectorDisplayAnimationBase, IVectorDisplayAnimationData\)

```csharp
public void Add(string key, IVectorDisplayAnimationBase ivectorDisplayBase, IVectorDisplayAnimationData vectorDisplayAnimatinoData)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`ivectorDisplayBase` IVectorDisplayAnimationBase

`vectorDisplayAnimatinoData` IVectorDisplayAnimationData

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayManager_Remove_VM_Models_Post_IVectorDisplayAnimationBase_"></a> Remove\(IVectorDisplayAnimationBase\)

```csharp
public void Remove(IVectorDisplayAnimationBase vectorDisplay)
```

#### Parameters

`vectorDisplay` IVectorDisplayAnimationBase

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayManager_SetFirstFrameLargeExt_System_Double_"></a> SetFirstFrameLargeExt\(double\)

```csharp
public void SetFirstFrameLargeExt(double lenght)
```

#### Parameters

`lenght` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayManager_TryGetAnimationData_System_String_VM_Models_OutputReader_IVectorDisplayAnimationData__"></a> TryGetAnimationData\(string, out IVectorDisplayAnimationData\)

```csharp
public bool TryGetAnimationData(string key, out IVectorDisplayAnimationData vectorDisplayAnimatinoData)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`vectorDisplayAnimatinoData` IVectorDisplayAnimationData

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayManager_Update_System_String_VM_Models_Post_IVectorDisplayAnimationBase_VM_Models_OutputReader_IVectorDisplayAnimationData_"></a> Update\(string, IVectorDisplayAnimationBase, IVectorDisplayAnimationData\)

```csharp
public void Update(string key, IVectorDisplayAnimationBase vectorDisplayBase, IVectorDisplayAnimationData vectorDisplayAnimatinoData)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`vectorDisplayBase` IVectorDisplayAnimationBase

`vectorDisplayAnimatinoData` IVectorDisplayAnimationData

### <a id="VM_Models_Post_VisualizationImpl_Visualization_VectorDisplayManager_UpdateAnimation_System_Int32_"></a> UpdateAnimation\(int\)

```csharp
public void UpdateAnimation(int stateid)
```

#### Parameters

`stateid` [int](https://learn.microsoft.com/dotnet/api/system.int32)

