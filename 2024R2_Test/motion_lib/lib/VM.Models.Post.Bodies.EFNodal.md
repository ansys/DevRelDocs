# <a id="VM_Models_Post_Bodies_EFNodal"></a> Class EFNodal

Namespace: [VM.Models.Post.Bodies](VM.Models.Post.Bodies.md)  
Assembly: VM.Models.Post.dll  

```csharp
public sealed class EFNodal : Nodal, IObservableObject, IDisposableObject, IPlottable, IContourable, INodal, IFEBody, IBody, IBodyBase, IEntity, IObject, IHasName, IHasIndex, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
[ObjectBase](VM.Models.Post.ObjectBase.md) ← 
[EntityBase](VM.Models.Post.EntityBase.md) ← 
[BodyBase](VM.Models.Post.Bodies.BodyBase.md) ← 
[FEBody](VM.Models.Post.Bodies.FEBody.md) ← 
[Nodal](VM.Models.Post.Bodies.Nodal.md) ← 
[EFNodal](VM.Models.Post.Bodies.EFNodal.md)

#### Implements

IObservableObject, 
IDisposableObject, 
[IPlottable](VM.Models.Post.IPlottable.md), 
[IContourable](VM.Models.Post.IContourable.md), 
[INodal](VM.Models.Post.INodal.md), 
[IFEBody](VM.Models.Post.IFEBody.md), 
[IBody](VM.Models.Post.IBody.md), 
[IBodyBase](VM.Models.Post.IBodyBase.md), 
[IEntity](VM.Models.Post.IEntity.md), 
[IObject](VM.Models.Post.IObject.md), 
IHasName, 
[IHasIndex](VM.Models.Post.IHasIndex.md), 
IHasID

#### Inherited Members

[Nodal.CreateElement\(HitItemElementInfo, PlotDataType\)](VM.Models.Post.Bodies.Nodal.md\#VM\_Models\_Post\_Bodies\_Nodal\_CreateElement\_VM\_Models\_Post\_HitItemElementInfo\_VM\_Models\_PlotDataType\_), 
[Nodal.CreateNode\(HitItemNodeInfo, PlotDataType\)](VM.Models.Post.Bodies.Nodal.md\#VM\_Models\_Post\_Bodies\_Nodal\_CreateNode\_VM\_Models\_Post\_HitItemNodeInfo\_VM\_Models\_PlotDataType\_), 
[Nodal.BodyType](VM.Models.Post.Bodies.Nodal.md\#VM\_Models\_Post\_Bodies\_Nodal\_BodyType), 
[Nodal.CategoryType](VM.Models.Post.Bodies.Nodal.md\#VM\_Models\_Post\_Bodies\_Nodal\_CategoryType), 
[Nodal.NodeSets](VM.Models.Post.Bodies.Nodal.md\#VM\_Models\_Post\_Bodies\_Nodal\_NodeSets), 
[Nodal.PlottableType](VM.Models.Post.Bodies.Nodal.md\#VM\_Models\_Post\_Bodies\_Nodal\_PlottableType), 
[FEBody.AddElement\(HitItemElementInfo\)](VM.Models.Post.Bodies.FEBody.md\#VM\_Models\_Post\_Bodies\_FEBody\_AddElement\_VM\_Models\_Post\_HitItemElementInfo\_), 
[FEBody.AddNode\(HitItemNodeInfo, PlotDataType\)](VM.Models.Post.Bodies.FEBody.md\#VM\_Models\_Post\_Bodies\_FEBody\_AddNode\_VM\_Models\_Post\_HitItemNodeInfo\_VM\_Models\_PlotDataType\_), 
[FEBody.CanContour\(ContourMappingType\)](VM.Models.Post.Bodies.FEBody.md\#VM\_Models\_Post\_Bodies\_FEBody\_CanContour\_VM\_Models\_ContourMappingType\_), 
[FEBody.CreateElement\(HitItemElementInfo, PlotDataType\)](VM.Models.Post.Bodies.FEBody.md\#VM\_Models\_Post\_Bodies\_FEBody\_CreateElement\_VM\_Models\_Post\_HitItemElementInfo\_VM\_Models\_PlotDataType\_), 
[FEBody.CreateNode\(HitItemNodeInfo, PlotDataType\)](VM.Models.Post.Bodies.FEBody.md\#VM\_Models\_Post\_Bodies\_FEBody\_CreateNode\_VM\_Models\_Post\_HitItemNodeInfo\_VM\_Models\_PlotDataType\_), 
[FEBody.GetBodyComponentType\(bool\)](VM.Models.Post.Bodies.FEBody.md\#VM\_Models\_Post\_Bodies\_FEBody\_GetBodyComponentType\_System\_Boolean\_), 
[FEBody.GetConnectableObservable\(bool\)](VM.Models.Post.Bodies.FEBody.md\#VM\_Models\_Post\_Bodies\_FEBody\_GetConnectableObservable\_System\_Boolean\_), 
[FEBody.TryGetNode\(int, PlotDataType, out NodeBase\)](VM.Models.Post.Bodies.FEBody.md\#VM\_Models\_Post\_Bodies\_FEBody\_TryGetNode\_System\_Int32\_VM\_Models\_PlotDataType\_VM\_Models\_Post\_Bodies\_NodeBase\_\_), 
[FEBody.UpdateDeformationScale\(Vector, Vector, IEnumerable<IDataState\>, bool\)](VM.Models.Post.Bodies.FEBody.md\#VM\_Models\_Post\_Bodies\_FEBody\_UpdateDeformationScale\_VM\_Vector\_VM\_Vector\_System\_Collections\_Generic\_IEnumerable\_VM\_Models\_Post\_IDataState\_\_System\_Boolean\_), 
[FEBody.Alpha](VM.Models.Post.Bodies.FEBody.md\#VM\_Models\_Post\_Bodies\_FEBody\_Alpha), 
[FEBody.AnalysisMethodEN](VM.Models.Post.Bodies.FEBody.md\#VM\_Models\_Post\_Bodies\_FEBody\_AnalysisMethodEN), 
[FEBody.ContourTypes](VM.Models.Post.Bodies.FEBody.md\#VM\_Models\_Post\_Bodies\_FEBody\_ContourTypes), 
[FEBody.CoordinateSystem](VM.Models.Post.Bodies.FEBody.md\#VM\_Models\_Post\_Bodies\_FEBody\_CoordinateSystem), 
[FEBody.Elements](VM.Models.Post.Bodies.FEBody.md\#VM\_Models\_Post\_Bodies\_FEBody\_Elements), 
[FEBody.ElementSets](VM.Models.Post.Bodies.FEBody.md\#VM\_Models\_Post\_Bodies\_FEBody\_ElementSets), 
[FEBody.FatigueAnalysisType](VM.Models.Post.Bodies.FEBody.md\#VM\_Models\_Post\_Bodies\_FEBody\_FatigueAnalysisType), 
[FEBody.FatigueMaterial](VM.Models.Post.Bodies.FEBody.md\#VM\_Models\_Post\_Bodies\_FEBody\_FatigueMaterial), 
[FEBody.Material](VM.Models.Post.Bodies.FEBody.md\#VM\_Models\_Post\_Bodies\_FEBody\_Material), 
[FEBody.MeanStressCorrection](VM.Models.Post.Bodies.FEBody.md\#VM\_Models\_Post\_Bodies\_FEBody\_MeanStressCorrection), 
[FEBody.MeshLine](VM.Models.Post.Bodies.FEBody.md\#VM\_Models\_Post\_Bodies\_FEBody\_MeshLine), 
[FEBody.Nodes](VM.Models.Post.Bodies.FEBody.md\#VM\_Models\_Post\_Bodies\_FEBody\_Nodes), 
[FEBody.PlasticityCorrection](VM.Models.Post.Bodies.FEBody.md\#VM\_Models\_Post\_Bodies\_FEBody\_PlasticityCorrection), 
[FEBody.PreviousCoordinateSystem](VM.Models.Post.Bodies.FEBody.md\#VM\_Models\_Post\_Bodies\_FEBody\_PreviousCoordinateSystem), 
[FEBody.Properties](VM.Models.Post.Bodies.FEBody.md\#VM\_Models\_Post\_Bodies\_FEBody\_Properties), 
[FEBody.Scale](VM.Models.Post.Bodies.FEBody.md\#VM\_Models\_Post\_Bodies\_FEBody\_Scale), 
[FEBody.StressStrainCombination](VM.Models.Post.Bodies.FEBody.md\#VM\_Models\_Post\_Bodies\_FEBody\_StressStrainCombination), 
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
ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
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

### <a id="VM_Models_Post_Bodies_EFNodal__ctor_VM_Models_Post_ResultDocument_VM_Identifier_System_String_System_Int32___"></a> EFNodal\(ResultDocument, Identifier, string, int\[\]\)

```csharp
public EFNodal(ResultDocument parentDocument, Identifier analysisResultID, string fullName, int[] markerIndexes)
```

#### Parameters

`parentDocument` [ResultDocument](VM.Models.Post.ResultDocument.md)

`analysisResultID` Identifier

`fullName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`markerIndexes` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

## Properties

### <a id="VM_Models_Post_Bodies_EFNodal_BodyType"></a> BodyType

```csharp
public override BodyType BodyType { get; }
```

#### Property Value

 [BodyType](VM.Models.Post.BodyType.md)

### <a id="VM_Models_Post_Bodies_EFNodal_CategoryType"></a> CategoryType

```csharp
public override CategoryType CategoryType { get; }
```

#### Property Value

 [CategoryType](VM.Models.Post.CategoryType.md)

## Methods

### <a id="VM_Models_Post_Bodies_EFNodal_CreateElement_VM_Models_Post_HitItemElementInfo_VM_Models_PlotDataType_"></a> CreateElement\(HitItemElementInfo, PlotDataType\)

```csharp
public override ElementBase CreateElement(HitItemElementInfo hitItemElementInfo, PlotDataType plotDataType = PlotDataType.DEFAULT)
```

#### Parameters

`hitItemElementInfo` [HitItemElementInfo](VM.Models.Post.HitItemElementInfo.md)

`plotDataType` PlotDataType

#### Returns

 [ElementBase](VM.Models.Post.Bodies.ElementBase.md)

### <a id="VM_Models_Post_Bodies_EFNodal_CreateNode_VM_Models_Post_HitItemNodeInfo_VM_Models_PlotDataType_"></a> CreateNode\(HitItemNodeInfo, PlotDataType\)

```csharp
public override NodeBase CreateNode(HitItemNodeInfo hitItemNodeInfo, PlotDataType plotDataType = PlotDataType.DEFAULT)
```

#### Parameters

`hitItemNodeInfo` [HitItemNodeInfo](VM.Models.Post.HitItemNodeInfo.md)

`plotDataType` PlotDataType

#### Returns

 [NodeBase](VM.Models.Post.Bodies.NodeBase.md)

