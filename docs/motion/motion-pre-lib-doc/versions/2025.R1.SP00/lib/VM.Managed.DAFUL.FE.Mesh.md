#  Class Mesh

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This class is to represent the mesh.

```csharp
public class Mesh : FEObject, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, ILinkContainer, IOwned, IHasID, INamed, INavigatorItem, IReferencable, IVisible, IDraw, IDrawIcon, IHasModal, IModalBody, IBodyAnalysisType, IBody, IHasSubChangableEntity
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
ContainerObject<ObjectEventCore\> ← 
[FEObject](VM.Managed.DAFUL.FE.FEObject.md) ← 
[Mesh](VM.Managed.DAFUL.FE.Mesh.md)

#### Derived

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
IHistoryObjectSerializable, 
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
IHasSubChangableEntity

#### Inherited Members

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

### <a id="VM_Managed_DAFUL_FE_Mesh__ctor"></a> Mesh\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.Mesh" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Mesh()
```

## Fields

### <a id="VM_Managed_DAFUL_FE_Mesh_g_dicMeta"></a> g\_dicMeta

Dictionary for Meta and MetaInfr.

```csharp
public static Dictionary<Mesh.Meta, Mesh.MetaInfo> g_dicMeta
```

#### Field Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[Mesh](VM.Managed.DAFUL.FE.Mesh.md).[Meta](VM.Managed.DAFUL.FE.Mesh.Meta.md), [Mesh](VM.Managed.DAFUL.FE.Mesh.md).[MetaInfo](VM.Managed.DAFUL.FE.Mesh.MetaInfo.md)\>

## Properties

### <a id="VM_Managed_DAFUL_FE_Mesh_AnalysisType"></a> AnalysisType

Gets or sets the type of body.

```csharp
BodyAnalysisType AnalysisType { get; set; }
```

#### Property Value

 BodyAnalysisType

### <a id="VM_Managed_DAFUL_FE_Mesh_BodyType"></a> BodyType

Gets or sets the body type.

```csharp
[Obsolete]
public FlexibleBodyType BodyType { get; set; }
```

#### Property Value

 [FlexibleBodyType](VM.Managed.DAFUL.FE.FlexibleBodyType.md)

### <a id="VM_Managed_DAFUL_FE_Mesh_CanSwitchNodal"></a> CanSwitchNodal

Gets or sets whether the switch is available with a nodal.

```csharp
public bool CanSwitchNodal { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_FE_Mesh_Color"></a> Color

Gets or sets the color.

```csharp
public Color Color { get; set; }
```

#### Property Value

 [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

### <a id="VM_Managed_DAFUL_FE_Mesh_ConvertUnitLength"></a> ConvertUnitLength

Gets the length of converted unit.

```csharp
public double ConvertUnitLength { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_FE_Mesh_Elements_VM_Managed_DAFUL_FE_ElementType_"></a> Elements\[ElementType\]

Gets element container form element type.

```csharp
public Mesh.ElementContainer Elements[ElementType type] { get; }
```

#### Property Value

 [Mesh](VM.Managed.DAFUL.FE.Mesh.md).[ElementContainer](VM.Managed.DAFUL.FE.Mesh.ElementContainer.md)

### <a id="VM_Managed_DAFUL_FE_Mesh_FEMass"></a> FEMass

Gets or sets the rigid body elements.

```csharp
public NamedObjectDictionary<FMassBase> FEMass { get; set; }
```

#### Property Value

 NamedObjectDictionary<[FMassBase](VM.Managed.DAFUL.FE.FMassBase.md)\>

### <a id="VM_Managed_DAFUL_FE_Mesh_FullName"></a> FullName

Gets the full name.

```csharp
public virtual string FullName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_FE_Mesh_IsHide"></a> IsHide

Gets or sets a value indicating whether this instance is hide.

```csharp
bool IsHide { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_FE_Mesh_IsModalBody"></a> IsModalBody

Gets a value indicating whether is modal body.

```csharp
public bool IsModalBody { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_FE_Mesh_IsVisible"></a> IsVisible

Gets or sets a value indicating whether object is visible.

```csharp
bool IsVisible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_FE_Mesh_Layer"></a> Layer

Gets or sets the layer.

```csharp
Layer Layer { get; set; }
```

#### Property Value

 Layer

### <a id="VM_Managed_DAFUL_FE_Mesh_Markers"></a> Markers

Gets or sets markers.

```csharp
public NamedObjectDictionary<MarkerOnNode> Markers { get; set; }
```

#### Property Value

 NamedObjectDictionary<[MarkerOnNode](VM.Managed.DAFUL.FE.MarkerOnNode.md)\>

### <a id="VM_Managed_DAFUL_FE_Mesh_MassCenter"></a> MassCenter

Gets the mass center.

```csharp
public Vector MassCenter { get; }
```

#### Property Value

 Vector

### <a id="VM_Managed_DAFUL_FE_Mesh_MassValue"></a> MassValue

Gets the mass.

```csharp
public double MassValue { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_FE_Mesh_Materials"></a> Materials

Gets the material container.

```csharp
public List<IMaterial> Materials { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<IMaterial\>

### <a id="VM_Managed_DAFUL_FE_Mesh_ModalANSYSFilter"></a> ModalANSYSFilter

```csharp
public static string ModalANSYSFilter { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_FE_Mesh_ModalFileAbsolutePath"></a> ModalFileAbsolutePath

Gets the absolute file path for modal.

```csharp
public string ModalFileAbsolutePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_FE_Mesh_ModalFileRelativePath"></a> ModalFileRelativePath

Gets the relative file path for modal.

```csharp
public string ModalFileRelativePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_FE_Mesh_ModalInertia"></a> ModalInertia

Gets the moment of inertia value for modal.

```csharp
public _MomentOfInertia ModalInertia { get; }
```

#### Property Value

 [\_MomentOfInertia](VM.Managed.DAFUL.FE.\_MomentOfInertia.md)

### <a id="VM_Managed_DAFUL_FE_Mesh_ModalMass"></a> ModalMass

Gets the mass for modal.

```csharp
public double ModalMass { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_FE_Mesh_ModalMassCenter"></a> ModalMassCenter

Gets the mass center for modal.

```csharp
public Vector ModalMassCenter { get; }
```

#### Property Value

 Vector

### <a id="VM_Managed_DAFUL_FE_Mesh_ModalNASTRANFilter"></a> ModalNASTRANFilter

```csharp
public static string ModalNASTRANFilter { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_FE_Mesh_ModalReferencePosition"></a> ModalReferencePosition

Gets or sets the modal reference position.

```csharp
public PointBase ModalReferencePosition { get; set; }
```

#### Property Value

 PointBase

### <a id="VM_Managed_DAFUL_FE_Mesh_ModalUserDefinedFilter"></a> ModalUserDefinedFilter

```csharp
public static string ModalUserDefinedFilter { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_FE_Mesh_ModeInterfacePoints"></a> ModeInterfacePoints

Gets or sets the interface points.

```csharp
public ModeInterfacePoint[] ModeInterfacePoints { get; set; }
```

#### Property Value

 [ModeInterfacePoint](VM.Managed.DAFUL.FE.ModeInterfacePoint.md)\[\]

### <a id="VM_Managed_DAFUL_FE_Mesh_ModeMasterPoints"></a> ModeMasterPoints

Gets or sets the masterpoints.

```csharp
public ModeMasterPoint[] ModeMasterPoints { get; set; }
```

#### Property Value

 [ModeMasterPoint](VM.Managed.DAFUL.FE.ModeMasterPoint.md)\[\]

### <a id="VM_Managed_DAFUL_FE_Mesh_Modes"></a> Modes

Gets or sets the modes.

```csharp
public Mode[] Modes { get; set; }
```

#### Property Value

 [Mode](VM.Managed.DAFUL.FE.Mode.md)\[\]

### <a id="VM_Managed_DAFUL_FE_Mesh_MomentOfInertiaValue"></a> MomentOfInertiaValue

Gets the moment of inertia.

```csharp
public _MomentOfInertia MomentOfInertiaValue { get; }
```

#### Property Value

 [\_MomentOfInertia](VM.Managed.DAFUL.FE.\_MomentOfInertia.md)

### <a id="VM_Managed_DAFUL_FE_Mesh_Name"></a> Name

Gets or sets the name.

```csharp
public virtual string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_FE_Mesh_NodalFilter"></a> NodalFilter

```csharp
public static string NodalFilter { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_FE_Mesh_Nodes"></a> Nodes

Gets node container.

```csharp
public Mesh.NodeContainer Nodes { get; }
```

#### Property Value

 [Mesh](VM.Managed.DAFUL.FE.Mesh.md).[NodeContainer](VM.Managed.DAFUL.FE.Mesh.NodeContainer.md)

### <a id="VM_Managed_DAFUL_FE_Mesh_NonSymmetricName"></a> NonSymmetricName

Gets the name of the non symmetric.

```csharp
public virtual string NonSymmetricName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_FE_Mesh_Properties"></a> Properties

Gets or sets the properties.

```csharp
public Properties Properties { get; set; }
```

#### Property Value

 [Properties](VM.Managed.DAFUL.FE.Property.Properties.md)

### <a id="VM_Managed_DAFUL_FE_Mesh_RigidBodyElements"></a> RigidBodyElements

Gets or sets the rigid body elements.

```csharp
public NamedObjectDictionary<FRBE> RigidBodyElements { get; set; }
```

#### Property Value

 NamedObjectDictionary<[FRBE](VM.Managed.DAFUL.FE.FRBE.md)\>

### <a id="VM_Managed_DAFUL_FE_Mesh_SelectedModeCount"></a> SelectedModeCount

Gets the selected mode's count.

```csharp
public int SelectedModeCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_FE_Mesh_Sets"></a> Sets

Gets or sets the sets.

```csharp
public Sets Sets { get; set; }
```

#### Property Value

 [Sets](VM.Managed.DAFUL.FE.Sets.md)

### <a id="VM_Managed_DAFUL_FE_Mesh_StartModeName"></a> StartModeName

Gets the mode name at first.

```csharp
public string StartModeName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_FE_Mesh_TypeOfDFMF"></a> TypeOfDFMF

```csharp
public Mesh.DFMFType TypeOfDFMF { get; }
```

#### Property Value

 [Mesh](VM.Managed.DAFUL.FE.Mesh.md).[DFMFType](VM.Managed.DAFUL.FE.Mesh.DFMFType.md)

### <a id="VM_Managed_DAFUL_FE_Mesh_UseDFMF"></a> UseDFMF

```csharp
public bool UseDFMF { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_FE_Mesh_UseModalReferencePosition"></a> UseModalReferencePosition

Gets or sets the use modal reference position.

```csharp
public bool UseModalReferencePosition { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_FE_Mesh__Color"></a> \_Color

Gets or sets the color.

```csharp
public int _Color { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="VM_Managed_DAFUL_FE_Mesh_Add_VM_Managed_ObjectBase_"></a> Add\(ObjectBase\)

classify the type and Add.

```csharp
public void Add(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The object.

### <a id="VM_Managed_DAFUL_FE_Mesh_AddDesignPointForInterfaceNode_VM_Managed_VectorBase_"></a> AddDesignPointForInterfaceNode\(VectorBase\)

```csharp
public DesignPoint AddDesignPointForInterfaceNode(VectorBase vecPos)
```

#### Parameters

`vecPos` VectorBase

#### Returns

 DesignPoint

### <a id="VM_Managed_DAFUL_FE_Mesh_CalcMassProperty"></a> CalcMassProperty\(\)

Calculate mass property.

```csharp
public void CalcMassProperty()
```

### <a id="VM_Managed_DAFUL_FE_Mesh_CalcMassProperty_std_list__VM_VECTOR_std__allocator__VM_VECTOR_____System_Double___VM_VECTOR__System_Double__System_Double__System_Double__System_Double__System_Double__System_Double__"></a> CalcMassProperty\(list<\_VM\_VECTOR,std::allocator<\_VM\_VECTOR\> \>\*, double\*, \_VM\_VECTOR\*, double\*, double\*, double\*, double\*, double\*, double\*\)

```csharp
public void CalcMassProperty(list<_VM_VECTOR,std::allocator<_VM_VECTOR> >* lstVecNodePosition, double* dMass, _VM_VECTOR* vecMassCenter, double* dJxx, double* dJyy, double* dJzz, double* dJxy, double* dJyz, double* dJxz)
```

#### Parameters

`lstVecNodePosition` [list<\_VM\_VECTOR,std::allocator<\_VM\_VECTOR\> \>](std.list<\_VM\_VECTOR,std.md)\*

`dMass` [double](https://learn.microsoft.com/dotnet/api/system.double)\*

`vecMassCenter` [\_VM\_VECTOR](\_VM\_VECTOR.md)\*

`dJxx` [double](https://learn.microsoft.com/dotnet/api/system.double)\*

`dJyy` [double](https://learn.microsoft.com/dotnet/api/system.double)\*

`dJzz` [double](https://learn.microsoft.com/dotnet/api/system.double)\*

`dJxy` [double](https://learn.microsoft.com/dotnet/api/system.double)\*

`dJyz` [double](https://learn.microsoft.com/dotnet/api/system.double)\*

`dJxz` [double](https://learn.microsoft.com/dotnet/api/system.double)\*

### <a id="VM_Managed_DAFUL_FE_Mesh_CalcMassProperty_System_Double___VM_VECTOR__System_Double__System_Double__System_Double__System_Double__System_Double__System_Double__"></a> CalcMassProperty\(double\*, \_VM\_VECTOR\*, double\*, double\*, double\*, double\*, double\*, double\*\)

```csharp
public void CalcMassProperty(double* dMass, _VM_VECTOR* vecMassCenter, double* dJxx, double* dJyy, double* dJzz, double* dJxy, double* dJyz, double* dJxz)
```

#### Parameters

`dMass` [double](https://learn.microsoft.com/dotnet/api/system.double)\*

`vecMassCenter` [\_VM\_VECTOR](\_VM\_VECTOR.md)\*

`dJxx` [double](https://learn.microsoft.com/dotnet/api/system.double)\*

`dJyy` [double](https://learn.microsoft.com/dotnet/api/system.double)\*

`dJzz` [double](https://learn.microsoft.com/dotnet/api/system.double)\*

`dJxy` [double](https://learn.microsoft.com/dotnet/api/system.double)\*

`dJyz` [double](https://learn.microsoft.com/dotnet/api/system.double)\*

`dJxz` [double](https://learn.microsoft.com/dotnet/api/system.double)\*

### <a id="VM_Managed_DAFUL_FE_Mesh_ConnectProxy"></a> ConnectProxy\(\)

```csharp
protected override void ConnectProxy()
```

### <a id="VM_Managed_DAFUL_FE_Mesh_ConvertShellToSolid_VM_Managed_DAFUL_FE_Mesh_ShellThicknessType_System_Double_"></a> ConvertShellToSolid\(ShellThicknessType, double\)

```csharp
public bool ConvertShellToSolid(Mesh.ShellThicknessType typeOfThickness, double dThickness)
```

#### Parameters

`typeOfThickness` [Mesh](VM.Managed.DAFUL.FE.Mesh.md).[ShellThicknessType](VM.Managed.DAFUL.FE.Mesh.ShellThicknessType.md)

`dThickness` [double](https://learn.microsoft.com/dotnet/api/system.double)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_FE_Mesh_Draw_VM_CAD_Kernel_Render_Canvas_"></a> Draw\(Canvas\)

Draws the icon.

```csharp
public virtual void Draw(Canvas canvas)
```

#### Parameters

`canvas` Canvas

The canvas has icon information.

### <a id="VM_Managed_DAFUL_FE_Mesh_FindLocal_System_String_"></a> FindLocal\(string\)

Finds an object that matches a specified name in local.

```csharp
public override IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name to search for.

#### Returns

 IObjectBase

An object that matches a specified name.

### <a id="VM_Managed_DAFUL_FE_Mesh_FindPointMass_VM_Managed_DAFUL_FE_FRBE_"></a> FindPointMass\(FRBE\)

Finds point mass with rbe.

```csharp
public PointMass FindPointMass(FRBE rbe)
```

#### Parameters

`rbe` [FRBE](VM.Managed.DAFUL.FE.FRBE.md)

The rigid body element.

#### Returns

 [PointMass](VM.Managed.DAFUL.FE.PointMass.md)

### <a id="VM_Managed_DAFUL_FE_Mesh_FixUp_VM_Managed_ObjectBase_"></a> FixUp\(ObjectBase\)

Before destroy the old object, perform a work.

```csharp
public override bool FixUp(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The old object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_FE_Mesh_GetAllNodePosition_VM_Vector____"></a> GetAllNodePosition\(ref Vector\[\]\)

Gets the node position.

```csharp
public void GetAllNodePosition(ref Vector[] arVec)
```

#### Parameters

`arVec` Vector\[\]

The position array.

### <a id="VM_Managed_DAFUL_FE_Mesh_GetAllNodePosition_VM_Managed_VectorBase____"></a> GetAllNodePosition\(ref VectorBase\[\]\)

Gets the node position.

```csharp
public void GetAllNodePosition(ref VectorBase[] arVec)
```

#### Parameters

`arVec` VectorBase\[\]

The position array.

### <a id="VM_Managed_DAFUL_FE_Mesh_GetEdgesWithNodes_System_UInt32___"></a> GetEdgesWithNodes\(uint\[\]\)

```csharp
public Tuple<uint, uint>[] GetEdgesWithNodes(uint[] arNodeIndex)
```

#### Parameters

`arNodeIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]

#### Returns

 [Tuple](https://learn.microsoft.com/dotnet/api/system.tuple\-2)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32), [uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>\[\]

### <a id="VM_Managed_DAFUL_FE_Mesh_GetElementID_VM_Managed_DAFUL_FE_ElementType_System_UInt32_"></a> GetElementID\(ElementType, uint\)

Gets element id.

```csharp
public int GetElementID(ElementType type, uint nIndex)
```

#### Parameters

`type` [ElementType](VM.Managed.DAFUL.FE.ElementType.md)

The element type.

`nIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The element index.

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_FE_Mesh_GetMaterials"></a> GetMaterials\(\)

Gets the materials.

```csharp
public IEnumerable<IMaterial> GetMaterials()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IMaterial\>

### <a id="VM_Managed_DAFUL_FE_Mesh_GetNodeID_System_UInt32_"></a> GetNodeID\(uint\)

Gets the node ID.

```csharp
public uint GetNodeID(uint nIndex)
```

#### Parameters

`nIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The node index.

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_DAFUL_FE_Mesh_GetNodeIndex_System_UInt32_"></a> GetNodeIndex\(uint\)

Gets the node Index.

```csharp
public uint GetNodeIndex(uint nID)
```

#### Parameters

`nID` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The node ID.

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="VM_Managed_DAFUL_FE_Mesh_GetNodeInfoForCalcMass_System_UInt32_System_Double_VM_Managed_VectorBase__VM_Managed_DAFUL_FE__MomentOfInertia__System_Double__System_UInt32__"></a> GetNodeInfoForCalcMass\(uint, double, ref VectorBase, ref \_MomentOfInertia, ref double, ref uint\)

Gets the node information for [mass calculation].

```csharp
public void GetNodeInfoForCalcMass(uint nIndex, double dConvertUnitLength, ref VectorBase vecPosition, ref _MomentOfInertia inertia, ref double dMass, ref uint nID)
```

#### Parameters

`nIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The node index.

`dConvertUnitLength` [double](https://learn.microsoft.com/dotnet/api/system.double)

The length of converted unit.

`vecPosition` VectorBase

The specified position of node.

`inertia` [\_MomentOfInertia](VM.Managed.DAFUL.FE.\_MomentOfInertia.md)

The specified inertia of node.

`dMass` [double](https://learn.microsoft.com/dotnet/api/system.double)

The specified mass of node.

`nID` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The specified id of node.

### <a id="VM_Managed_DAFUL_FE_Mesh_GetNodePosition_System_UInt32_"></a> GetNodePosition\(uint\)

```csharp
public Vector GetNodePosition(uint nIndex)
```

#### Parameters

`nIndex` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 Vector

### <a id="VM_Managed_DAFUL_FE_Mesh_GetOuterNodes_System_Collections_Generic_IEnumerable_System_UInt32__"></a> GetOuterNodes\(IEnumerable<uint\>\)

```csharp
public IEnumerable<uint> GetOuterNodes(IEnumerable<uint> lstNodeIndex)
```

#### Parameters

`lstNodeIndex` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\>

### <a id="VM_Managed_DAFUL_FE_Mesh_GetPropertyNameToOuterNodes"></a> GetPropertyNameToOuterNodes\(\)

```csharp
public Dictionary<string, List<uint[]>> GetPropertyNameToOuterNodes()
```

#### Returns

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)\[\]\>\>

### <a id="VM_Managed_DAFUL_FE_Mesh_GetSubChangableEntityImpl_System_Collections_Generic_Dictionary_System_String_VM_Managed_ObjectBase__"></a> GetSubChangableEntityImpl\(Dictionary<string, ObjectBase\>\)

Gets the sub changable entity.

```csharp
void GetSubChangableEntityImpl(Dictionary<string, ObjectBase> dicObj)
```

#### Parameters

`dicObj` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), ObjectBase\>

The object dictionary.

### <a id="VM_Managed_DAFUL_FE_Mesh_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor A_0)
```

#### Parameters

`A_0` Unit.ConvertFactor

### <a id="VM_Managed_DAFUL_FE_Mesh_IsDeleteMaterial_VM_Managed_Material_IMaterial_"></a> IsDeleteMaterial\(IMaterial\)

Determines whether is [delete material] [the specified material].

```csharp
public bool IsDeleteMaterial(IMaterial mat)
```

#### Parameters

`mat` IMaterial

The material.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if is [delete material] [the specified material]; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_FE_Mesh_IsDeletePatchSet_VM_Managed_DAFUL_FE_SetPatchBase_"></a> IsDeletePatchSet\(SetPatchBase\)

Determines whether is [delete setpatch] [the specified setpatch].

```csharp
public bool IsDeletePatchSet(SetPatchBase setPatch)
```

#### Parameters

`setPatch` [SetPatchBase](VM.Managed.DAFUL.FE.SetPatchBase.md)

The setpatch.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if is [delete setpatch] [the specified setpatch]; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_FE_Mesh_IsOnlyLinearMaterial"></a> IsOnlyLinearMaterial\(\)

Determines whether refer linear material only.

```csharp
public bool IsOnlyLinearMaterial()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if this instance refer only linear material; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_FE_Mesh_LinkRequestDestroy_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroy\(object, LinkEventArgs\)

Request for destroy the linked object.

```csharp
protected override void LinkRequestDestroy(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_FE_Mesh_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_FE_Mesh_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_DAFUL_FE_Mesh_ReDraw"></a> ReDraw\(\)

Redraw.

```csharp
public virtual void ReDraw()
```

### <a id="VM_Managed_DAFUL_FE_Mesh_ReDrawForHistory"></a> ReDrawForHistory\(\)

Redraw for undo/redo

```csharp
void ReDrawForHistory()
```

### <a id="VM_Managed_DAFUL_FE_Mesh_SetBodyAnalysisType_VM_Managed_DAFUL_BodyAnalysisType_"></a> SetBodyAnalysisType\(BodyAnalysisType\)

```csharp
public void SetBodyAnalysisType(BodyAnalysisType type)
```

#### Parameters

`type` BodyAnalysisType

### <a id="VM_Managed_DAFUL_FE_Mesh_SkipUpdateObjectImpl"></a> SkipUpdateObjectImpl\(\)

Skip the object that updated.

```csharp
public override bool SkipUpdateObjectImpl()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_FE_Mesh_UpdateMesh"></a> UpdateMesh\(\)

Update mesh.

```csharp
public virtual void UpdateMesh()
```

### <a id="VM_Managed_DAFUL_FE_Mesh_get_Elements_VM_Managed_DAFUL_FE_ElementType_"></a> get\_Elements\(ElementType\)

```csharp
public Mesh.ElementContainer get_Elements(ElementType type)
```

#### Parameters

`type` [ElementType](VM.Managed.DAFUL.FE.ElementType.md)

#### Returns

 [Mesh](VM.Managed.DAFUL.FE.Mesh.md).[ElementContainer](VM.Managed.DAFUL.FE.Mesh.ElementContainer.md)

