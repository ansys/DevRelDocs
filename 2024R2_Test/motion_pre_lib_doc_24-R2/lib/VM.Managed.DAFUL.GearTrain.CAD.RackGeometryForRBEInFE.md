# Class RackGeometryForRBEInFE

Namespace: [VM.Managed.DAFUL.GearTrain.CAD](VM.Managed.DAFUL.GearTrain.CAD.md)  
Assembly: VMDGearTrain.dll  

The rack geometry for FE

```csharp
public class RackGeometryForRBEInFE : GeometryBase, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IReferencable, ITransformable, INavigatorItem, IContainer, ILinkContainer, IOwned, IHasID, IVisible, IMultiChangable, IEnabled, ITransparentable, IPartMarkerParent, IDrawFacet, IPostDeserialized, INamed, IDimension
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
Body ← 
[GeometryBase](VM.Managed.DAFUL.GearTrain.CAD.GeometryBase.md) ← 
[RackGeometryForRBEInFE](VM.Managed.DAFUL.GearTrain.CAD.RackGeometryForRBEInFE.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObjectBase, 
IObject, 
IEventProvider, 
IHasKeyObject, 
ILinkContainerEvent, 
IVerifiable, 
IHistoryObjectSerializable, 
IAttributeContainer, 
IReferencable, 
ITransformable, 
INavigatorItem, 
IContainer, 
ILinkContainer, 
IOwned, 
IHasID, 
IVisible, 
IMultiChangable, 
IEnabled, 
ITransparentable, 
IPartMarkerParent, 
IDrawFacet, 
IPostDeserialized, 
INamed, 
[IDimension](VM.Managed.DAFUL.GearTrain.IDimension.md)

#### Inherited Members

[GeometryBase.m\_strNameWhenDelete](VM.Managed.DAFUL.GearTrain.CAD.GeometryBase.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GeometryBase\_m\_strNameWhenDelete), 
[GeometryBase.LinkRequestDestroy\(object, LinkEventArgs\)](VM.Managed.DAFUL.GearTrain.CAD.GeometryBase.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GeometryBase\_LinkRequestDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[GeometryBase.GetNameWhenDelete\(\)](VM.Managed.DAFUL.GearTrain.CAD.GeometryBase.md\#VM\_Managed\_DAFUL\_GearTrain\_CAD\_GeometryBase\_GetNameWhenDelete), 
Body.g\_dAccuracyForMassCalculate, 
Body.g\_dAccuracyForCADImportMassCalculate, 
Body.CalculateMassProperty\(ref double, ref double, ref TMatrix, ref double\[\], ref bool, double, bool\), 
Body.CalculateMassProperty\(ref double, ref double, ref TMatrix, ref double\[\], ref bool, bool, double\), 
Body.CalculateMassProperty\(ref double, ref double, ref TMatrix, ref double\[\], ref bool, double\), 
Body.CalculateMassProperty\(ref double, ref double, ref TMatrix, ref double\[\], ref bool, bool\), 
Body.CalculateMassProperty\(ref double, ref double, ref TMatrix, ref double\[\], ref bool\), 
Body.CalculateMassProperty\(ref double, ref double, ref TMatrix, ref double\[\], ref bool, double, double, bool\), 
Body.CalculateMassPropertyForAssembly\(ref double, ref double, ref TMatrix, ref double\[\], ref bool, double\), 
Body.GetPointAndDirection\(ref VectorBase, ref VectorBase\), 
Body.GetDefaultMaxPenetration\(ref double\), 
Body.SetColor\(Color\), 
Body.GetColor\(\), 
Body.SetTransparency\(double\), 
Body.AddBodyCreatedList\(\), 
Body.ResetBuildInfo\(string\), 
Body.GetFacetInfo\(ref VectorBase\[\], ref int\[\]\), 
Body.LinkRequestUpdate\(object, LinkEventArgs\), 
Body.Initialize\(Unit.ConvertFactor\), 
Body.FixUp\(ObjectBase\), 
Body.DoWorkAfterUpdateContents\(\), 
Body.CheckValidationAboutBuild\(string\), 
Body.DrawFacet\(Canvas\), 
Body.DrawFacetByDefaultParameters\(Canvas\), 
Body.SetGeometryRepresentation\(string, string, bool\), 
Body.DrawFacetInGlobal\(Canvas\), 
Body.ReDrawChangeFacet\(\), 
Body.Find\(string\), 
Body.FindLocal\(string\), 
Body.GetUnnamedObjectName\(object\), 
Body.GetNewEntityName\(string, bool, int, int\), 
Body.GetNewEntityName\(string, bool, int\), 
Body.GetNewEntityName\(string\), 
Body.PostRemoveFromDocument\(Document\), 
Body.HighlightBuilder\(\), 
Body.GetFacesInfo\_NormalAndCenterPt\(List<Face\>, ref Dictionary<Face, VectorBase\>, ref Dictionary<Face, VectorBase\>\), 
Body.GetFaces\(ICollection<int\>\), 
Body.GetFaces\(\), 
Body.GetFaceColors\(\), 
Body.GetEdges\(ICollection<int\>\), 
Body.GetEdges\(\), 
Body.PrepareFacesWithColor\(\), 
Body.IsWireBody\(\), 
Body.IsNonManifold\(\), 
Body.GetSortOfBody\(\), 
Body.GetWirePoints\(double, ref List<VectorBase\>\), 
Body.GetWirePointsAndTangents\(double, ref List<VectorBase\>, ref List<VectorBase\>\), 
Body.GetWirePointsAndTangentsWithSection\(double, VectorBase, VectorBase, ref List<VectorBase\>, ref List<VectorBase\>\), 
Body.GetNormalOnFace\(VectorBase, ref VectorBase\), 
Body.GetAllFacePointAndNormal\(ref List<VectorBase\>, ref List<VectorBase\>\), 
Body.GetWireLastPoint\(ref VectorBase\), 
Body.RepairTopology\(\), 
Body.RelationWithPoint\(VectorBase\), 
Body.GetVoidCount\(\), 
Body.GetVoidPoints\(double\[\], ref VectorBase\[\]\), 
Body.GetLumpCount\(\), 
Body.GetEdgeCount\(\), 
Body.GetEdgePoints\(int, double, TMatrix, ref List<VectorBase\>\), 
Body.DrawEdge\(int, double, TMatrix, Canvas\), 
Body.GetTargetListForUpdate\(\), 
Body.GetBoundingBox\(TMatrix, ref VectorBase, ref VectorBase, BoxingMode\), 
Body.GetBoundingBox\(TMatrix, ref VectorBase, ref VectorBase\), 
Body.GetBodyGeomInfo\(vector<\_VM\_VECTOR,std::allocator<\_VM\_VECTOR\> \>\*, vector<unsigned int,std::allocator<unsigned int\> \>\*, AttributeFacetRefinementBase, double, bool\), 
Body.GetBodyGeomInfo\(ref VectorBase\[\], ref uint\[\], AttributeFacetRefinementBase, double, bool\), 
Body.GetBodyGeomInfo\(ref VectorBase\[\], ref uint\[\], AttributeFacetRefinementBase, double\), 
Body.ClearFacetDictionary\(\), 
Body.GetBodyGeomInfoForDFG\(AttributeFacetRefinementBase, ref VectorBase\[\], ref uint\[\]\), 
Body.RunTetraMesher\(string, vector<\_VM\_VECTOR,std::allocator<\_VM\_VECTOR\> \>\*, vector<unsigned int,std::allocator<unsigned int\> \>\*, vector<\_VM\_VECTOR,std::allocator<\_VM\_VECTOR\> \>\*, vector<unsigned int,std::allocator<unsigned int\> \>\*\), 
Body.RunTetraMesher\(string, ref VectorBase\[\], ref uint\[\], ref VectorBase\[\], ref uint\[\]\), 
Body.GenerateMeshInfo\(string, AttributeFacetRefinementBase, Unit.ConvertFactor, MeshFreeMeshType, ref MeshFreeMeshType, ref VectorBase\[\], ref uint\[\], ref VectorBase\[\], ref uint\[\], bool\), 
Body.GenerateMeshInfo\(string, AttributeFacetRefinementBase, Unit.ConvertFactor, MeshFreeMeshType, ref MeshFreeMeshType, ref VectorBase\[\], ref uint\[\], ref VectorBase\[\], ref uint\[\]\), 
Body.CreateNastranFile\(string, VectorBase\[\], uint\[\], uint\[\]\), 
Body.ConvertVectorNative2Managed\(vector<\_VM\_VECTOR,std::allocator<\_VM\_VECTOR\> \>\*, ref VectorBase\[\]\), 
Body.ConvertVectorManaged2Native\(ref VectorBase\[\], vector<\_VM\_VECTOR,std::allocator<\_VM\_VECTOR\> \>\*\), 
Body.ConvertUInt32Native2Managed\(vector<unsigned int,std::allocator<unsigned int\> \>\*, ref uint\[\]\), 
Body.ConvertUInt32Managed2Native\(ref uint\[\], vector<unsigned int,std::allocator<unsigned int\> \>\*\), 
Body.ExportPatch\(string, Unit.ConvertFactor, string\), 
Body.ExportSolid\(string, Unit.ConvertFactor, string\), 
Body.GetAnalysisLevelInfo\(double, ref List<double\>, ref List<uint\>\), 
Body.GetAnalysisLevelInfo\(ref List<double\>, ref List<uint\>\), 
Body.GetNearestPointOnFace\(VectorBase, ref VectorBase\), 
Body.GetNearestPointOnFaceWithDirection\(VectorBase, VectorBase, double, ref VectorBase\), 
Body.GetNearest4PointOnFaceWithRange\(VectorBase, double, VectorBase, VectorBase, bool, VectorBase\[\]\), 
Body.GetNearestPointAndNormalOnFace\(VectorBase, VectorBase, VectorBase\), 
Body.SetModifiedBody\(\), 
Body.GetStartPointOfClosedLoop\(List<Edge\>, ref VectorBase\), 
Body.SortEdges\(List<Edge\>\), 
Body.OnPostDeserialized\(StreamingContext\), 
Body.GetFaceIndex\(ValueType\), 
Body.GetEdgeIndex\(ValueType\), 
Body.GetVertexIndex\(ValueType\), 
Body.ExistFace\(ValueType\), 
Body.InitialSetBuildInfo\(string\), 
Body.UpdateBody\(bool\), 
Body.UpdateBody\(\), 
Body.ReplaceCAD\(List<Body.ReplaceCADInfo\>\), 
Body.GetCADGeomNameAttribute\(string, ref List<string\>\), 
Body.AddNameAttribute\(string\), 
Body.OnDeserialization\(object\), 
Body.ConnectProxy\(\), 
Body.RebuildGeometry\(object, LinkEventArgs\), 
Body.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
Body.GetAttrFacetRefineBase\(\), 
Body.GetDefaultMaxFacetSize\(\), 
Body.DrawFacetsOfFaces\(IDrawFacet\[\], string, Canvas\), 
Body.GetGeomInfoOfFaces\(Body, Face\[\], string, bool, UIntPtr\), 
Body.GetFacetPositions\(Face\[\], string\), 
Body.Invalid, 
Body.SkipRebuildGeometry, 
Body.SkipCalcMassProp, 
Body.AccuracyForMassCalc, 
Body.TransparentObjects, 
Body.TransparentObject, 
Body.IsEnabled, 
Body.Layer, 
Body.IsVisible, 
Body.IndexCont, 
Body.Vertices, 
Body.Edges, 
Body.Faces, 
Body.NameAttribute, 
Body.UseRepairPatch, 
Body.UseApprox\_eval, 
Body.UseGRID\_TO\_EDGES, 
Body.UseFacetAspectRatio, 
Body.UseSurfaceAngularTolerance, 
Body.UseMaximumFacetSize, 
Body.UseMaximumGridLine, 
Body.FacetAspectRatio, 
Body.SurfaceAngularTolerance, 
Body.MaximumFacetSize, 
Body.MaximumGridLine, 
Body.\_Material, 
Body.Material, 
Body.Builder, 
Object<ObjectEventCore\>.GetKey\(\), 
Object<ObjectEventCore\>.Initialize\(Unit.ConvertFactor\), 
Object<ObjectEventCore\>.SetIconColor\(Canvas\), 
Object<ObjectEventCore\>.OnDeserialization\(object\), 
Object<ObjectEventCore\>.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
Object<ObjectEventCore\>.RollbackEvent\(\), 
Object<ObjectEventCore\>.OnDeserializedCore\(object\), 
Object<ObjectEventCore\>.Key, 
Object<ObjectEventCore\>.UntypedEventCore, 
Object<ObjectEventCore\>.EventCore, 
Object<ObjectEventCore\>.Attributes, 
ObjectBase.ReplaceEventCore\(ObjectEventCore\), 
ObjectBase.SetModifiedCore\(ModifiedResult.ModifiedType\), 
ObjectBase.AddPostDeserialize\(StreamingContext\), 
ObjectBase.LinkAddedToDocumentCore\(IOwned, bool\), 
ObjectBase.SetModified\(ModifiedResult.ModifiedType\), 
ObjectBase.SetModified\(\), 
ObjectBase.SetModified\(ModifiedResult.ModifiedType, IDocument\), 
ObjectBase.DestroyObject\(object, LinkEventArgs\), 
ObjectBase.DestroyObject\(DestroyEventArgs\), 
ObjectBase.DestroyObject\(\), 
ObjectBase.Initialize\(Unit.ConvertFactor\), 
ObjectBase.FixUp\(ObjectBase\), 
ObjectBase.DoWorkAfterUpdateContents\(\), 
ObjectBase.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\), 
ObjectBase.SetIconColor\(Canvas\), 
ObjectBase.RemoveFromCreatedList\(\), 
ObjectBase.PostAddToDocument\(\), 
ObjectBase.PostRemoveFromDocument\(Document\), 
ObjectBase.GetArgumentList\(LinkedList<ObjectBase\>\), 
ObjectBase.ResetInvalidEntity\(\), 
ObjectBase.OnDeserialization\(object\), 
ObjectBase.IsSerializableEvent\(Delegate\), 
ObjectBase.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
ObjectBase.CheckAndUpdateLink\(HashSet<ObjectBase\>\), 
ObjectBase.Verify\(VerifiedResult\), 
ObjectBase.ConnectProxy\(\), 
ObjectBase.RollbackEvent\(\), 
ObjectBase.LinkRequestUpdating\(object, LinkEventArgs\), 
ObjectBase.LinkRequestUpdate\(object, LinkEventArgs\), 
ObjectBase.LinkRequestDestroying\(object, LinkEventArgs\), 
ObjectBase.LinkRequestDestroy\(object, LinkEventArgs\), 
ObjectBase.LinkAddedToDocument\(object, AddToDocEventArgs\), 
ObjectBase.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
ObjectBase.DisposeManagedResources\(\), 
ObjectBase.GetDestroyEventExtraData\(\), 
ObjectBase.OnLinkReserved\(ILink, object, EventArgs\), 
ObjectBase.CreateEntityWhenUpdateContents\(Action\), 
ObjectBase.GetObjectByKey\(UIntPtr\), 
ObjectBase.FindObjectOnXmlDeserialize\(string\), 
ObjectBase.UpdateContents\(XmlReader, ObjectBase, string\), 
ObjectBase.UpdateContents\(XmlReader, ObjectBase\), 
ObjectBase.UpdateContents\(string, string\), 
ObjectBase.UpdateContents\(string\), 
ObjectBase.SetFlagWhenXMLFile\(string, bool\), 
ObjectBase.IsEqualArray<T\>\(T\[\], T\[\]\), 
ObjectBase.IsEqualList\(List<double\>, List<double\>\), 
ObjectBase.SetContainer\(IOwned, bool\), 
ObjectBase.GetTargetListForUpdate\(\), 
ObjectBase.SkipUpdateObjectImpl\(\), 
ObjectBase.raise\_OnUpdating\(object, LinkEventArgs\), 
ObjectBase.raise\_OnUpdate\(object, LinkEventArgs\), 
ObjectBase.raise\_OnDestroying\(object, LinkEventArgs\), 
ObjectBase.raise\_OnDestroy\(object, LinkEventArgs\), 
ObjectBase.raise\_Destroying\(object, Identifier\), 
ObjectBase.raise\_OnAdded\(object, AddToDocEventArgs\), 
ObjectBase.raise\_OnRemoved\(object, RemoveFromDocEventArgs\), 
ObjectBase.raise\_OnContentsUpdated\(object, EventArgs\), 
ObjectBase.Dispose\(bool\), 
ObjectBase.SkipModified, 
ObjectBase.ClearChildInfoBeforeDeserialize, 
ObjectBase.KeyImpl, 
ObjectBase.ID, 
ObjectBase.TopologyEntityTypeName, 
ObjectBase.ObjectStateForCircularError, 
ObjectBase.ObjectState, 
ObjectBase.IsChildExternable, 
ObjectBase.IsExternable, 
ObjectBase.Container, 
ObjectBase.Owner, 
ObjectBase.Document, 
ObjectBase.UntypedEventCore, 
ObjectBase.KernelKey, 
ObjectBase.Key, 
ObjectBase.OnContentsUpdated, 
ObjectBase.OnRemoved, 
ObjectBase.OnAdded, 
ObjectBase.Destroying, 
ObjectBase.OnDestroy, 
ObjectBase.OnDestroying, 
ObjectBase.OnUpdate, 
ObjectBase.OnUpdating, 
LinkableBase.OnDeserialization\(object\), 
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

### RackGeometryForRBEInFE\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.CAD.RackGeometryForRBEInFE" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RackGeometryForRBEInFE()
```

### RackGeometryForRBEInFE\(Builder\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.CAD.RackGeometryForRBEInFE" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RackGeometryForRBEInFE(Builder builder)
```

#### Parameters

`builder` Builder

## Methods

### TemperaryRackGeometry\(GearGeometryInfo, IConnectable, IConnectable, HiddenDocumentMeshBase, DirectionBase, OMatrix\)

Temperaries the rack geometry.

```csharp
public static RackGeometryForRBEInFE TemperaryRackGeometry(GearGeometryInfo gInfo, IConnectable conStart, IConnectable conEnd, HiddenDocumentMeshBase doc, DirectionBase dirZ, OMatrix matO)
```

#### Parameters

`gInfo` [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

The g information.

`conStart` IConnectable

The con start.

`conEnd` IConnectable

The con end.

`doc` [HiddenDocumentMeshBase](VM.Managed.DAFUL.GearTrain.HiddenDocumentMeshBase.md)

The document.

`dirZ` DirectionBase

The dir z.

`matO` OMatrix

The mat o.

#### Returns

 [RackGeometryForRBEInFE](VM.Managed.DAFUL.GearTrain.CAD.RackGeometryForRBEInFE.md)


