# Class MeshReader
<a id="VM_Managed_DAFUL_FE_MeshReader"></a>

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This class is to represent mesh reader.

```csharp
public class MeshReader : Mesh, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, ILinkContainer, IOwned, IHasID, INamed, INavigatorItem, IReferencable, IVisible, IDraw, IDrawIcon, IHasModal, IModalBody, IBodyAnalysisType, IBody, IHasSubChangableEntity, IMesh
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
ContainerObject<ObjectEventCore\> ← 
[FEObject](VM.Managed.DAFUL.FE.FEObject.md) ← 
[Mesh](VM.Managed.DAFUL.FE.Mesh.md) ← 
[MeshReader](VM.Managed.DAFUL.FE.MeshReader.md)

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
[IHistoryObjectSerializable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/Interfaces.cs), 
IAttributeContainer, 
IContainer, 
ILinkContainer, 
IOwned, 
IHasID, 
INamed, 
INavigatorItem, 
IReferencable, 
IVisible, 
IDraw, 
IDrawIcon, 
[IHasModal](VM.Managed.DAFUL.FE.IHasModal.md), 
[IModalBody](VM.Managed.DAFUL.FE.IModalBody.md), 
IBodyAnalysisType, 
IBody, 
IHasSubChangableEntity, 
IMesh

#### Inherited Members

[Mesh.g\_dicMeta](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_g\_dicMeta), 
[Mesh.Add\(ObjectBase\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_Add\_VM\_Managed\_ObjectBase\_), 
[Mesh.CalcMassProperty\(\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_CalcMassProperty), 
[Mesh.CalcMassProperty\(list<\_VM\_VECTOR,std::allocator<\_VM\_VECTOR\> \>\*, double\*, \_VM\_VECTOR\*, double\*, double\*, double\*, double\*, double\*, double\*\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_CalcMassProperty\_std\_list\_\_VM\_VECTOR\_std), 
[Mesh.CalcMassProperty\(double\*, \_VM\_VECTOR\*, double\*, double\*, double\*, double\*, double\*, double\*\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_CalcMassProperty\_System\_Double\_\_\_VM\_VECTOR\_\_System\_Double\_\_System\_Double\_\_System\_Double\_\_System\_Double\_\_System\_Double\_\_System\_Double\_\_), 
[Mesh.IsDeleteMaterial\(IMaterial\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_IsDeleteMaterial\_VM\_Managed\_Material\_IMaterial\_), 
[Mesh.IsDeletePatchSet\(SetPatchBase\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_IsDeletePatchSet\_VM\_Managed\_DAFUL\_FE\_SetPatchBase\_), 
[Mesh.IsOnlyLinearMaterial\(\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_IsOnlyLinearMaterial), 
[Mesh.GetNodeInfoForCalcMass\(uint, double, ref VectorBase, ref \_MomentOfInertia, ref double, ref uint\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_GetNodeInfoForCalcMass\_System\_UInt32\_System\_Double\_VM\_Managed\_VectorBase\_\_VM\_Managed\_DAFUL\_FE\_\_MomentOfInertia\_\_System\_Double\_\_System\_UInt32\_\_), 
[Mesh.GetNodeID\(uint\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_GetNodeID\_System\_UInt32\_), 
[Mesh.GetNodeIndex\(uint\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_GetNodeIndex\_System\_UInt32\_), 
[Mesh.GetAllNodePosition\(ref Vector\[\]\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_GetAllNodePosition\_VM\_Vector\_\_\_\_), 
[Mesh.GetAllNodePosition\(ref VectorBase\[\]\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_GetAllNodePosition\_VM\_Managed\_VectorBase\_\_\_\_), 
[Mesh.AddDesignPointForInterfaceNode\(VectorBase\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_AddDesignPointForInterfaceNode\_VM\_Managed\_VectorBase\_), 
[Mesh.ConvertShellToSolid\(Mesh.ShellThicknessType, double\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_ConvertShellToSolid\_VM\_Managed\_DAFUL\_FE\_Mesh\_ShellThicknessType\_System\_Double\_), 
[Mesh.Draw\(Canvas\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_Draw\_VM\_CAD\_Kernel\_Render\_Canvas\_), 
[Mesh.UpdateMesh\(\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_UpdateMesh), 
[Mesh.GetElementID\(ElementType, uint\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_GetElementID\_VM\_Managed\_DAFUL\_FE\_ElementType\_System\_UInt32\_), 
[Mesh.GetMaterials\(\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_GetMaterials), 
[Mesh.GetEdgesWithNodes\(uint\[\]\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_GetEdgesWithNodes\_System\_UInt32\_\_\_), 
[Mesh.GetOuterNodes\(IEnumerable<uint\>\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_GetOuterNodes\_System\_Collections\_Generic\_IEnumerable\_System\_UInt32\_\_), 
[Mesh.GetPropertyNameToOuterNodes\(\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_GetPropertyNameToOuterNodes), 
[Mesh.GetNodePosition\(uint\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_GetNodePosition\_System\_UInt32\_), 
[Mesh.FindPointMass\(FRBE\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_FindPointMass\_VM\_Managed\_DAFUL\_FE\_FRBE\_), 
[Mesh.get\_Elements\(ElementType\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_get\_Elements\_VM\_Managed\_DAFUL\_FE\_ElementType\_), 
[Mesh.SetBodyAnalysisType\(BodyAnalysisType\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_SetBodyAnalysisType\_VM\_Managed\_DAFUL\_BodyAnalysisType\_), 
[Mesh.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[Mesh.FixUp\(ObjectBase\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_FixUp\_VM\_Managed\_ObjectBase\_), 
[Mesh.FindLocal\(string\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_FindLocal\_System\_String\_), 
[Mesh.GetSubChangableEntityImpl\(Dictionary<string, ObjectBase\>\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_GetSubChangableEntityImpl\_System\_Collections\_Generic\_Dictionary\_System\_String\_VM\_Managed\_ObjectBase\_\_), 
[Mesh.SkipUpdateObjectImpl\(\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_SkipUpdateObjectImpl), 
[Mesh.ReDraw\(\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_ReDraw), 
[Mesh.ReDrawForHistory\(\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_ReDrawForHistory), 
[Mesh.OnDeserialization\(object\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_OnDeserialization\_System\_Object\_), 
[Mesh.ConnectProxy\(\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_ConnectProxy), 
[Mesh.LinkRequestDestroy\(object, LinkEventArgs\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_LinkRequestDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[Mesh.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[Mesh.IsVisible](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_IsVisible), 
[Mesh.AnalysisType](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_AnalysisType), 
[Mesh.BodyType](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_BodyType), 
[Mesh.ConvertUnitLength](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_ConvertUnitLength), 
[Mesh.NonSymmetricName](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_NonSymmetricName), 
[Mesh.FullName](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_FullName), 
[Mesh.Name](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_Name), 
[Mesh.IsHide](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_IsHide), 
[Mesh.ModalUserDefinedFilter](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_ModalUserDefinedFilter), 
[Mesh.ModalANSYSFilter](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_ModalANSYSFilter), 
[Mesh.ModalNASTRANFilter](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_ModalNASTRANFilter), 
[Mesh.NodalFilter](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_NodalFilter), 
[Mesh.UseDFMF](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_UseDFMF), 
[Mesh.TypeOfDFMF](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_TypeOfDFMF), 
[Mesh.ModalMassCenter](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_ModalMassCenter), 
[Mesh.ModalInertia](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_ModalInertia), 
[Mesh.ModalMass](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_ModalMass), 
[Mesh.IsModalBody](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_IsModalBody), 
[Mesh.StartModeName](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_StartModeName), 
[Mesh.SelectedModeCount](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_SelectedModeCount), 
[Mesh.ModalFileRelativePath](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_ModalFileRelativePath), 
[Mesh.ModalFileAbsolutePath](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_ModalFileAbsolutePath), 
[Mesh.Layer](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_Layer), 
[Mesh.MassCenter](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_MassCenter), 
[Mesh.MomentOfInertiaValue](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_MomentOfInertiaValue), 
[Mesh.MassValue](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_MassValue), 
[Mesh.\_Color](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_\_Color), 
[Mesh.Color](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_Color), 
[Mesh.Markers](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_Markers), 
[Mesh.ModeInterfacePoints](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_ModeInterfacePoints), 
[Mesh.ModeMasterPoints](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_ModeMasterPoints), 
[Mesh.Modes](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_Modes), 
[Mesh.CanSwitchNodal](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_CanSwitchNodal), 
[Mesh.ModalReferencePosition](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_ModalReferencePosition), 
[Mesh.UseModalReferencePosition](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_UseModalReferencePosition), 
[Mesh.Sets](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_Sets), 
[Mesh.FEMass](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_FEMass), 
[Mesh.RigidBodyElements](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_RigidBodyElements), 
[Mesh.Properties](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_Properties), 
[Mesh.Materials](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_Materials), 
[Mesh.Elements\[ElementType\]](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_Elements\_VM\_Managed\_DAFUL\_FE\_ElementType\_), 
[Mesh.Nodes](VM.Managed.DAFUL.FE.Mesh.md\#VM\_Managed\_DAFUL\_FE\_Mesh\_Nodes), 
ContainerObject<ObjectEventCore\>.Find\(string\), 
ContainerObject<ObjectEventCore\>.FindLocal\(string\), 
ContainerObject<ObjectEventCore\>.GetUnnamedObjectName\(object\), 
ContainerObject<ObjectEventCore\>.GetNewEntityName\(string\), 
ContainerObject<ObjectEventCore\>.GetNewEntityName\(string, bool, int\), 
ContainerObject<ObjectEventCore\>.GetNewEntityName\(string, bool, int, int\), 
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
[LinkableBase.OnDeserialization\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs), 
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

### <a id="VM_Managed_DAFUL_FE_MeshReader__ctor"></a> MeshReader\(\)

```csharp
public MeshReader()
```

## Properties

### <a id="VM_Managed_DAFUL_FE_MeshReader_NodeForMesher"></a> NodeForMesher

```csharp
public List<Vector> NodeForMesher { get; }
```

#### Property Value

 List<Vector\>

### <a id="VM_Managed_DAFUL_FE_MeshReader_TetraForMesher"></a> TetraForMesher

```csharp
public List<uint> TetraForMesher { get; }
```

#### Property Value

 List<uint\>

