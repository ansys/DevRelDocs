# <a id="VM_Models_Post_Bodies_FEBody"></a> Class FEBody

Namespace: [VM.Models.Post.Bodies](VM.Models.Post.Bodies.md)  
Assembly: VM.Models.Post.dll  

```csharp
public abstract class FEBody : BodyBase, IObservableObject, IDisposableObject, IPlottable, IFEBody, IBody, IBodyBase, IContourable, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[EntityBase](VM.Models.Post.EntityBase.md) ← 
[BodyBase](VM.Models.Post.Bodies.BodyBase.md) ← 
[FEBody](VM.Models.Post.Bodies.FEBody.md)

#### Derived

[Modal](VM.Models.Post.Bodies.Modal.md), 
[Nodal](VM.Models.Post.Bodies.Nodal.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[IPlottable](VM.Models.Post.IPlottable.md), 
[IFEBody](VM.Models.Post.IFEBody.md), 
[IBody](VM.Models.Post.IBody.md), 
[IBodyBase](VM.Models.Post.IBodyBase.md), 
[IContourable](VM.Models.Post.IContourable.md), 
[IEntity](VM.Models.Post.IEntity.md), 
[IObject](VM.Models.Post.IObject.md), 
IHasName, 
[IHasIndex](VM.Models.Post.IHasIndex.md), 
IHasID

#### Inherited Members

[BodyBase.ContainsMarker\(int\)](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_ContainsMarker\_System\_Int32\_), 
[BodyBase.ContainsPartIndex\(int\)](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_ContainsPartIndex\_System\_Int32\_), 
[BodyBase.AssociatedParts](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_AssociatedParts), 
[BodyBase.BodyType](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_BodyType), 
[BodyBase.Color](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_Color), 
[BodyBase.CoordinateSystem](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_CoordinateSystem), 
[BodyBase.DataParts](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_DataParts), 
[BodyBase.DisplacementVisible](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_DisplacementVisible), 
[BodyBase.DisplayName](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_DisplayName), 
[BodyBase.EntityType](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_EntityType), 
[BodyBase.FringeVisible](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_FringeVisible), 
[BodyBase.IsVisible](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_IsVisible), 
[BodyBase.PlottableType](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_PlottableType), 
[BodyBase.PointSize](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_PointSize), 
[BodyBase.RenderType](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_RenderType), 
[BodyBase.SmoothShading](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_SmoothShading), 
[BodyBase.TextureImage](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_TextureImage), 
[BodyBase.Transparency](VM.Models.Post.Bodies.BodyBase.md\#VM\_Models\_Post\_Bodies\_BodyBase\_Transparency), 
[EntityBase.IsSupported\(EntityFilterMode\)](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_IsSupported\_VM\_Models\_Post\_EntityFilterMode\_), 
[EntityBase.CategoryType](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_CategoryType), 
[EntityBase.EntityType](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_EntityType), 
[EntityBase.HasGeometry](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_HasGeometry), 
[EntityBase.ID](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_ID), 
[EntityBase.Index](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_Index), 
[EntityBase.InitialValues](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_InitialValues), 
[EntityBase.IsDummy](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_IsDummy), 
[EntityBase.IsPlottable](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_IsPlottable), 
[EntityBase.IsSupportedGeneralMode](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_IsSupportedGeneralMode), 
[EntityBase.IsSupportedVectorDisplayMode](VM.Models.Post.EntityBase.md\#VM\_Models\_Post\_EntityBase\_IsSupportedVectorDisplayMode), 
[ObjectBase.GetUnstructGridModel\(\)](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_GetUnstructGridModel), 
[ObjectBase.SetName\(string\)](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_SetName\_System\_String\_), 
[ObjectBase.UpdateAnimation\(UpdateActionType\)](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_UpdateAnimation\_VM\_Models\_Post\_UpdateActionType\_), 
[ObjectBase.AnalysisResult](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_AnalysisResult), 
[ObjectBase.AnalysisResultID](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_AnalysisResultID), 
[ObjectBase.AnalysisResultType](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_AnalysisResultType), 
[ObjectBase.DisplayName](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_DisplayName), 
[ObjectBase.FullName](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_FullName), 
[ObjectBase.Name](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_Name), 
[ObjectBase.ParentDocument](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_ParentDocument), 
[ObjectBase.CanLoad](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_CanLoad), 
[ObjectBase.CanSave](VM.Models.Post.ObjectBase.md\#VM\_Models\_Post\_ObjectBase\_CanSave), 
ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
ObservableObject.Dispose\(bool\), 
ObservableObject.DisposeManagedResources\(\), 
ObservableObject.DisposeUnmanagedResources\(\), 
ObservableObject.IsDisposed, 
ObservableObject.TryDisposing, 
ObservableObject.Disposed, 
ObservableObject.Disposing, 
ObservableObject.PropertyChanged

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Models_Post_Bodies_FEBody__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_System_Int32___"></a> FEBody\(ResultDocument, Identifier, string, int\[\]\)

```csharp
protected FEBody(ResultDocument parentDocument, Identifier analysisResultID, string fullName, int[] markerIndexes)
```

#### Parameters

`parentDocument` [ResultDocument](VM.Models.Post.ResultDocument.md)

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`markerIndexes` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

## Properties

### <a id="VM_Models_Post_Bodies_FEBody_Alpha"></a> Alpha

```csharp
[SaveProperty(false)]
public Vector Alpha { get; set; }
```

#### Property Value

 Vector

### <a id="VM_Models_Post_Bodies_FEBody_AnalysisMethodEN"></a> AnalysisMethodEN

```csharp
[SaveProperty(false)]
public AnalysisMethodEN AnalysisMethodEN { get; set; }
```

#### Property Value

 [AnalysisMethodEN](VM.Models.Post.AnalysisMethodEN.md)

### <a id="VM_Models_Post_Bodies_FEBody_ContourTypes"></a> ContourTypes

```csharp
public Dictionary<AnalysisResultType, Dictionary<ContourMappingType, Dictionary<string, (string, int)[]>>> ContourTypes { get; }
```

#### Property Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<AnalysisResultType, [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<ContourMappingType, [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), \([string](https://learn.microsoft.com/dotnet/api/system.string), [int](https://learn.microsoft.com/dotnet/api/system.int32)\)\[\]\>\>\>

### <a id="VM_Models_Post_Bodies_FEBody_CoordinateSystem"></a> CoordinateSystem

```csharp
public override GeneralMarker CoordinateSystem { get; set; }
```

#### Property Value

 [GeneralMarker](VM.Models.Post.GeneralMarker.md)

### <a id="VM_Models_Post_Bodies_FEBody_ElementSets"></a> ElementSets

```csharp
public IEnumerable<ElementSet> ElementSets { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[ElementSet](VM.Models.Post.ElementSet.md)\>

### <a id="VM_Models_Post_Bodies_FEBody_Elements"></a> Elements

```csharp
public IEnumerable<ElementBase> Elements { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[ElementBase](VM.Models.Post.Bodies.ElementBase.md)\>

### <a id="VM_Models_Post_Bodies_FEBody_FatigueAnalysisType"></a> FatigueAnalysisType

```csharp
[SaveProperty(false)]
public FatigueAnalysisType FatigueAnalysisType { get; set; }
```

#### Property Value

 [FatigueAnalysisType](VM.Models.Post.FatigueAnalysisType.md)

### <a id="VM_Models_Post_Bodies_FEBody_FatigueMaterial"></a> FatigueMaterial

```csharp
[SaveProperty(false)]
public FatigueMaterial FatigueMaterial { get; set; }
```

#### Property Value

 [FatigueMaterial](VM.Models.Post.FatigueMaterial.md)

### <a id="VM_Models_Post_Bodies_FEBody_Material"></a> Material

```csharp
[SaveProperty(false)]
public MaterialBase Material { get; set; }
```

#### Property Value

 [MaterialBase](VM.Models.Post.Materials.MaterialBase.md)

### <a id="VM_Models_Post_Bodies_FEBody_MeanStressCorrection"></a> MeanStressCorrection

```csharp
[SaveProperty(false)]
public MeanStressCorrection MeanStressCorrection { get; set; }
```

#### Property Value

 [MeanStressCorrection](VM.Models.Post.MeanStressCorrection.md)

### <a id="VM_Models_Post_Bodies_FEBody_MeshLine"></a> MeshLine

```csharp
public bool MeshLine { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Bodies_FEBody_Nodes"></a> Nodes

```csharp
public IEnumerable<NodeBase> Nodes { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[NodeBase](VM.Models.Post.Bodies.NodeBase.md)\>

### <a id="VM_Models_Post_Bodies_FEBody_PlasticityCorrection"></a> PlasticityCorrection

```csharp
[SaveProperty(false)]
public PlasticityCorrection PlasticityCorrection { get; set; }
```

#### Property Value

 [PlasticityCorrection](VM.Models.Post.PlasticityCorrection.md)

### <a id="VM_Models_Post_Bodies_FEBody_PreviousCoordinateSystem"></a> PreviousCoordinateSystem

```csharp
public double[] PreviousCoordinateSystem { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

### <a id="VM_Models_Post_Bodies_FEBody_Properties"></a> Properties

```csharp
public IEnumerable<FEPropertyBase> Properties { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[FEPropertyBase](VM.Models.Post.FEProperties.FEPropertyBase.md)\>

### <a id="VM_Models_Post_Bodies_FEBody_Scale"></a> Scale

```csharp
[SaveProperty(false)]
public double Scale { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Models_Post_Bodies_FEBody_StressStrainCombination"></a> StressStrainCombination

```csharp
[SaveProperty(false)]
public StressStrainCombinationType StressStrainCombination { get; set; }
```

#### Property Value

 StressStrainCombinationType

## Methods

### <a id="VM_Models_Post_Bodies_FEBody_AddElement_VM_Models_Post_HitItemElementInfo_"></a> AddElement\(HitItemElementInfo\)

```csharp
public ElementBase AddElement(HitItemElementInfo hitItemElementInfo)
```

#### Parameters

`hitItemElementInfo` [HitItemElementInfo](VM.Models.Post.HitItemElementInfo.md)

#### Returns

 [ElementBase](VM.Models.Post.Bodies.ElementBase.md)

### <a id="VM_Models_Post_Bodies_FEBody_AddNode_VM_Models_Post_HitItemNodeInfo_VM_Models_PlotDataType_"></a> AddNode\(HitItemNodeInfo, PlotDataType\)

```csharp
public NodeBase AddNode(HitItemNodeInfo hitItemNodeInfo, PlotDataType plotDataType = PlotDataType.DEFAULT)
```

#### Parameters

`hitItemNodeInfo` [HitItemNodeInfo](VM.Models.Post.HitItemNodeInfo.md)

`plotDataType` PlotDataType

#### Returns

 [NodeBase](VM.Models.Post.Bodies.NodeBase.md)

### <a id="VM_Models_Post_Bodies_FEBody_CanContour_VM_Models_ContourMappingType_"></a> CanContour\(ContourMappingType\)

```csharp
public bool CanContour(ContourMappingType contourMappingType)
```

#### Parameters

`contourMappingType` ContourMappingType

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Bodies_FEBody_CreateElement_VM_Models_Post_HitItemElementInfo_VM_Models_PlotDataType_"></a> CreateElement\(HitItemElementInfo, PlotDataType\)

```csharp
public abstract ElementBase CreateElement(HitItemElementInfo hitItemElementInfo, PlotDataType plotDataType = PlotDataType.DEFAULT)
```

#### Parameters

`hitItemElementInfo` [HitItemElementInfo](VM.Models.Post.HitItemElementInfo.md)

`plotDataType` PlotDataType

#### Returns

 [ElementBase](VM.Models.Post.Bodies.ElementBase.md)

### <a id="VM_Models_Post_Bodies_FEBody_CreateNode_VM_Models_Post_HitItemNodeInfo_VM_Models_PlotDataType_"></a> CreateNode\(HitItemNodeInfo, PlotDataType\)

```csharp
public abstract NodeBase CreateNode(HitItemNodeInfo hitItemNodeInfo, PlotDataType plotDataType = PlotDataType.DEFAULT)
```

#### Parameters

`hitItemNodeInfo` [HitItemNodeInfo](VM.Models.Post.HitItemNodeInfo.md)

`plotDataType` PlotDataType

#### Returns

 [NodeBase](VM.Models.Post.Bodies.NodeBase.md)

### <a id="VM_Models_Post_Bodies_FEBody_DisposeManagedResources"></a> DisposeManagedResources\(\)

```csharp
protected override void DisposeManagedResources()
```

### <a id="VM_Models_Post_Bodies_FEBody_GetBodyComponentType_System_Boolean_"></a> GetBodyComponentType\(bool\)

```csharp
public Type GetBodyComponentType(bool isNode)
```

#### Parameters

`isNode` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="VM_Models_Post_Bodies_FEBody_GetConnectableObservable_System_Boolean_"></a> GetConnectableObservable\(bool\)

```csharp
public IConnectableObservable<IChangeSet<EntityBase, Identifier>> GetConnectableObservable(bool isReplay = true)
```

#### Parameters

`isReplay` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 IConnectableObservable<IChangeSet<[EntityBase](VM.Models.Post.EntityBase.md), Identifier\>\>

### <a id="VM_Models_Post_Bodies_FEBody_TryGetNode_System_Int32_VM_Models_PlotDataType_VM_Models_Post_Bodies_NodeBase__"></a> TryGetNode\(int, PlotDataType, out NodeBase\)

```csharp
public bool TryGetNode(int id, PlotDataType plotDataType, out NodeBase node)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`plotDataType` PlotDataType

`node` [NodeBase](VM.Models.Post.Bodies.NodeBase.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Models_Post_Bodies_FEBody_UpdateDeformationScale_VM_Vector_VM_Vector_System_Collections_Generic_IEnumerable_VM_Models_Post_IDataState__System_Boolean_"></a> UpdateDeformationScale\(Vector, Vector, IEnumerable<IDataState\>, bool\)

```csharp
public void UpdateDeformationScale(Vector previousScale, Vector newScale, IEnumerable<IDataState> dataStates = null, bool recoverOrignalScale = true)
```

#### Parameters

`previousScale` Vector

`newScale` Vector

`dataStates` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[IDataState](VM.Models.Post.IDataState.md)\>

`recoverOrignalScale` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

