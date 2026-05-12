#  Class MarkerOnNode

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This class is to represent the marker on node.

```csharp
public class MarkerOnNode : Marker, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, INamed, INavigatorItem, IDesignSubEntity, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, IInterface, ITemplateObject, IEntityRelation, IDraw, IDrawIcon, ITransform, IPoint, IOrientation, IDirectionContainer, IDesignParameter, IReferencable, ITransformable, IVisible, IDesignFrame, IArgument, IMarker, IFEMeshChildItem, IChildItem
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
SubEntity ← 
DesignSubEntity ← 
DesignFrame ← 
Marker ← 
[MarkerOnNode](VM.Managed.DAFUL.FE.MarkerOnNode.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
IHistoryObjectSerializable, 
IAttributeContainer, 
INamed, 
INavigatorItem, 
IDesignSubEntity, 
ISubEntity, 
IEntityBase, 
IObjectBase, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
IHasKeyObject, 
IHasName, 
IEnabled, 
IHasComment, 
IInterface, 
ITemplateObject, 
IEntityRelation, 
IDraw, 
IDrawIcon, 
ITransform, 
IPoint, 
IOrientation, 
IDirectionContainer, 
IDesignParameter, 
IReferencable, 
ITransformable, 
IVisible, 
IDesignFrame, 
IArgument, 
IMarker, 
[IFEMeshChildItem](VM.Managed.DAFUL.FE.IFEMeshChildItem.md), 
IChildItem

#### Inherited Members

Marker.Initialize\(Unit.ConvertFactor\), 
Marker.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\), 
Marker.LinkRequestUpdating\(object, LinkEventArgs\), 
Marker.LinkRequestUpdate\(object, LinkEventArgs\), 
Marker.LinkRequestDestroy\(object, LinkEventArgs\), 
Marker.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
Marker.GetModelNavigatorInformationImplCore\(XmlDocument, XmlElement, bool\), 
Marker.ParentConnectable, 
Marker.\_ParentConnectable, 
Marker.ReferenceType, 
Marker.ArgumentType, 
Marker.FrameIconName, 
DesignFrame.Initialize\(Unit.ConvertFactor\), 
DesignFrame.LinkRequestUpdate\(object, LinkEventArgs\), 
DesignFrame.GetDirection\(Coordinate\), 
DesignFrame.GetFullName\(\), 
DesignFrame.Draw\(Canvas\), 
DesignFrame.ReDraw\(\), 
DesignFrame.InstantiateImpl\(Reference, Canvas\), 
DesignFrame.BindInterfaceImpl\(TMatrix, TMatrix, IInterface\), 
DesignFrame.WriteTemplateImpl\(XmlWriter\), 
DesignFrame.ReadTemplateImpl\(XmlReader\), 
DesignFrame.Transformation, 
DesignFrame.Value, 
DesignFrame.X, 
DesignFrame.Y, 
DesignFrame.Z, 
DesignFrame.Orientation, 
DesignFrame.Position, 
DesignFrame.TransformationMatrix, 
DesignFrame.Hide, 
DesignFrame.FrameIconName, 
DesignFrame.Layer, 
DesignFrame.IsVisible, 
DesignSubEntity.m\_bSkipToUpdateSymmetric, 
DesignSubEntity.g\_dicUpdatedDesignSubEntity, 
DesignSubEntity.FixUp\(ObjectBase\), 
DesignSubEntity.CheckCircularReference\(\), 
DesignSubEntity.BindInterfaceImpl\(TMatrix, TMatrix, IInterface\), 
DesignSubEntity.IsInterface, 
SubEntity.Initialize\(Unit.ConvertFactor\), 
SubEntity.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\), 
SubEntity.FixUp\(ObjectBase\), 
SubEntity.WriteTemplateImpl\(XmlWriter\), 
SubEntity.ReadTemplateImpl\(XmlReader\), 
SubEntity.Name, 
SubEntity.FullName, 
SubEntity.NonSymmetricName, 
SubEntity.DisplayName, 
SubEntity.IsEnabled, 
SubEntity.Comment, 
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

### <a id="VM_Managed_DAFUL_FE_MarkerOnNode__ctor_System_String_"></a> MarkerOnNode\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.MarkerOnNode" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MarkerOnNode(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the FRBE.

### <a id="VM_Managed_DAFUL_FE_MarkerOnNode__ctor"></a> MarkerOnNode\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.MarkerOnNode" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MarkerOnNode()
```

## Properties

### <a id="VM_Managed_DAFUL_FE_MarkerOnNode_Name"></a> Name

Gets or sets the name.

```csharp
public override string Name { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_FE_MarkerOnNode_GetModelNavigatorInformationImpl_System_Xml_XmlDocument_System_Xml_XmlElement_System_Boolean_"></a> GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)

Gets the object information for model navigator [implementation].

```csharp
protected override bool GetModelNavigatorInformationImpl(XmlDocument xmlDom, XmlElement xmlEle, bool bHasChild)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XmlDocument for object.

`xmlEle` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

The XmlElement for object.

`bHasChild` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [has child].

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_FE_MarkerOnNode_InstantiateImpl_VM_Managed_Reference_VM_CAD_Kernel_Render_Canvas_"></a> InstantiateImpl\(Reference, Canvas\)

Instantiates the specified reference.

```csharp
protected override void InstantiateImpl(Reference reference, Canvas canvas)
```

#### Parameters

`reference` Reference

The reference

`canvas` Canvas

The canvas

### <a id="VM_Managed_DAFUL_FE_MarkerOnNode_RecalcTransform"></a> RecalcTransform\(\)

```csharp
public void RecalcTransform()
```

