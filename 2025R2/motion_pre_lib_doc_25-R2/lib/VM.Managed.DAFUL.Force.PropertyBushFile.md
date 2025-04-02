#  Class PropertyBushFile

Namespace: [VM.Managed.DAFUL.Force](VM.Managed.DAFUL.Force.md)  
Assembly: VMDFB.dll  

This class is to represent the bush force File property.

```csharp
public class PropertyBushFile : PropertyBush, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, ILinkContainer, IOwned, IHasID, IArgument, IFileProperty
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<PropertyEventCore\> ← 
ContainerObject<PropertyEventCore\> ← 
Property ← 
[PropertyForce](VM.Managed.DAFUL.Force.PropertyForce.md) ← 
[PropertyBush](VM.Managed.DAFUL.Force.PropertyBush.md) ← 
[PropertyBushFile](VM.Managed.DAFUL.Force.PropertyBushFile.md)

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
IArgument, 
IFileProperty

#### Inherited Members

[PropertyBush.Draw\(Canvas, TMatrix, TMatrix, bool\)](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_Draw\_VM\_CAD\_Kernel\_Render\_Canvas\_VM\_Managed\_TMatrix\_VM\_Managed\_TMatrix\_System\_Boolean\_), 
[PropertyBush.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[PropertyBush.OnDeserialization\(object\)](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_OnDeserialization\_System\_Object\_), 
[PropertyBush.OnLinkReserved\(ILink, object, EventArgs\)](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_OnLinkReserved\_VM\_Managed\_ILink\_System\_Object\_System\_EventArgs\_), 
[PropertyBush.GraphicDiameter](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_GraphicDiameter), 
[PropertyBush.GraphicLength](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_GraphicLength), 
[PropertyBush.TransKX](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TransKX), 
[PropertyBush.TransKY](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TransKY), 
[PropertyBush.TransKZ](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TransKZ), 
[PropertyBush.TransCX](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TransCX), 
[PropertyBush.TransCY](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TransCY), 
[PropertyBush.TransCZ](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TransCZ), 
[PropertyBush.RotKX](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_RotKX), 
[PropertyBush.RotKY](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_RotKY), 
[PropertyBush.RotKZ](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_RotKZ), 
[PropertyBush.RotCX](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_RotCX), 
[PropertyBush.RotCY](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_RotCY), 
[PropertyBush.RotCZ](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_RotCZ), 
[PropertyBush.PreloadX](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_PreloadX), 
[PropertyBush.PreloadY](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_PreloadY), 
[PropertyBush.PreloadZ](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_PreloadZ), 
[PropertyBush.PreTorqueX](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_PreTorqueX), 
[PropertyBush.PreTorqueY](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_PreTorqueY), 
[PropertyBush.PreTorqueZ](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_PreTorqueZ), 
[PropertyBush.TransKXSpline](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TransKXSpline), 
[PropertyBush.TransKYSpline](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TransKYSpline), 
[PropertyBush.TransKZSpline](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TransKZSpline), 
[PropertyBush.TransCXSpline](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TransCXSpline), 
[PropertyBush.TransCYSpline](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TransCYSpline), 
[PropertyBush.TransCZSpline](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TransCZSpline), 
[PropertyBush.RotKXSpline](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_RotKXSpline), 
[PropertyBush.RotKYSpline](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_RotKYSpline), 
[PropertyBush.RotKZSpline](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_RotKZSpline), 
[PropertyBush.RotCXSpline](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_RotCXSpline), 
[PropertyBush.RotCYSpline](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_RotCYSpline), 
[PropertyBush.RotCZSpline](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_RotCZSpline), 
[PropertyBush.IsUsePreload](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_IsUsePreload), 
[PropertyBush.IsUsePreTorque](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_IsUsePreTorque), 
[PropertyBush.IsUseStaticBushing](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_IsUseStaticBushing), 
[PropertyBush.TransKType](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TransKType), 
[PropertyBush.TransCType](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TransCType), 
[PropertyBush.RotKType](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_RotKType), 
[PropertyBush.RotCType](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_RotCType), 
[PropertyBush.TypeOfTransKX](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TypeOfTransKX), 
[PropertyBush.TypeOfTransKY](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TypeOfTransKY), 
[PropertyBush.TypeOfTransKZ](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TypeOfTransKZ), 
[PropertyBush.TypeOfTransCX](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TypeOfTransCX), 
[PropertyBush.TypeOfTransCY](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TypeOfTransCY), 
[PropertyBush.TypeOfTransCZ](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TypeOfTransCZ), 
[PropertyBush.TypeOfRotKX](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TypeOfRotKX), 
[PropertyBush.TypeOfRotKY](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TypeOfRotKY), 
[PropertyBush.TypeOfRotKZ](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TypeOfRotKZ), 
[PropertyBush.TypeOfRotCX](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TypeOfRotCX), 
[PropertyBush.TypeOfRotCY](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TypeOfRotCY), 
[PropertyBush.TypeOfRotCZ](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TypeOfRotCZ), 
[PropertyBush.TranslationalOneSideBushingX](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TranslationalOneSideBushingX), 
[PropertyBush.TranslationalOneSideBushingY](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TranslationalOneSideBushingY), 
[PropertyBush.TranslationalOneSideBushingZ](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_TranslationalOneSideBushingZ), 
[PropertyBush.RotationalOneSideBushingX](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_RotationalOneSideBushingX), 
[PropertyBush.RotationalOneSideBushingY](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_RotationalOneSideBushingY), 
[PropertyBush.RotationalOneSideBushingZ](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_RotationalOneSideBushingZ), 
[PropertyBush.ReferenceType](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_ReferenceType), 
[PropertyBush.ArgumentType](VM.Managed.DAFUL.Force.PropertyBush.md\#VM\_Managed\_DAFUL\_Force\_PropertyBush\_ArgumentType), 
[PropertyForce.ArgumentType](VM.Managed.DAFUL.Force.PropertyForce.md\#VM\_Managed\_DAFUL\_Force\_PropertyForce\_ArgumentType), 
[PropertyForce.ReferenceType](VM.Managed.DAFUL.Force.PropertyForce.md\#VM\_Managed\_DAFUL\_Force\_PropertyForce\_ReferenceType), 
Property.Initialize\(Unit.ConvertFactor\), 
Property.PropertyRequestUpdate\(object, LinkEventArgs\), 
Property.OnUpdatePropertyImpl\(Property, LinkEventArgs\), 
Property.GetUnnamedObjectName\(object\), 
Property.FindLocal\(string\), 
Property.Draw\(Canvas, TMatrix, TMatrix, bool\), 
ContainerObject<PropertyEventCore\>.Find\(string\), 
ContainerObject<PropertyEventCore\>.FindLocal\(string\), 
ContainerObject<PropertyEventCore\>.GetUnnamedObjectName\(object\), 
ContainerObject<PropertyEventCore\>.GetNewEntityName\(string\), 
ContainerObject<PropertyEventCore\>.GetNewEntityName\(string, bool, int\), 
ContainerObject<PropertyEventCore\>.GetNewEntityName\(string, bool, int, int\), 
Object<PropertyEventCore\>.GetKey\(\), 
Object<PropertyEventCore\>.Initialize\(Unit.ConvertFactor\), 
Object<PropertyEventCore\>.SetIconColor\(Canvas\), 
Object<PropertyEventCore\>.OnDeserialization\(object\), 
Object<PropertyEventCore\>.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
Object<PropertyEventCore\>.RollbackEvent\(\), 
Object<PropertyEventCore\>.OnDeserializedCore\(object\), 
Object<PropertyEventCore\>.Key, 
Object<PropertyEventCore\>.UntypedEventCore, 
Object<PropertyEventCore\>.EventCore, 
Object<PropertyEventCore\>.Attributes, 
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

### <a id="VM_Managed_DAFUL_Force_PropertyBushFile__ctor"></a> PropertyBushFile\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Force.PropertyBushFile" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PropertyBushFile()
```

## Methods

### <a id="VM_Managed_DAFUL_Force_PropertyBushFile_SetModified"></a> SetModified\(\)

Called when object modified.

```csharp
protected override void SetModified()
```

### <a id="VM_Managed_DAFUL_Force_PropertyBushFile_SetModified_VM_Managed_ModifiedResult_ModifiedType_"></a> SetModified\(ModifiedType\)

Called when object modified.

```csharp
protected override void SetModified(ModifiedResult.ModifiedType type)
```

#### Parameters

`type` ModifiedResult.ModifiedType

The modifed type.

