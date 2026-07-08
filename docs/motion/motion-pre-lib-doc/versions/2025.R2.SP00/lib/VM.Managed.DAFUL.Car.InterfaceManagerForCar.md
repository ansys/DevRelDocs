#  Class InterfaceManagerForCar

Namespace: [VM.Managed.DAFUL.Car](VM.Managed.DAFUL.Car.md)  
Assembly: VMDCar.dll  

This interface is to represent interface manager for car.

```csharp
public class InterfaceManagerForCar : InterfaceManager, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
InterfaceManager ← 
[InterfaceManagerForCar](VM.Managed.DAFUL.Car.InterfaceManagerForCar.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObjectBase, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
IHasKeyObject, 
ILinkContainerEvent, 
IVerifiable, 
IHistoryObjectSerializable, 
IAttributeContainer

#### Inherited Members

InterfaceManager.AddInterface\(IInterface\), 
InterfaceManager.RemoveInterface\(IInterface\), 
InterfaceManager.Add\(IInterface\), 
InterfaceManager.IsInterface\(IInterface\), 
InterfaceManager.MakeXml\(object\), 
InterfaceManager.GetInterfaceNames\(IInterface\), 
InterfaceManager.GetInterfaceNames\(string\), 
InterfaceManager.SetInterfaceNames\(IInterface, ICollection<string\>\), 
InterfaceManager.SetInterfaceNames\(IInterface, ArraySegment<string\>\), 
InterfaceManager.LinkRequestUpdate\(object, LinkEventArgs\), 
InterfaceManager.GetNumInterfaceObject\(\), 
InterfaceManager.IsExternable, 
InterfaceManager.InterfaceInfos, 
InterfaceManager.Interfaces, 
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

### <a id="VM_Managed_DAFUL_Car_InterfaceManagerForCar__ctor"></a> InterfaceManagerForCar\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.InterfaceManagerForCar" data-throw-if-not-resolved="false"></xref> class.

```csharp
public InterfaceManagerForCar()
```

### <a id="VM_Managed_DAFUL_Car_InterfaceManagerForCar__ctor_VM_Managed_InterfaceManager_"></a> InterfaceManagerForCar\(InterfaceManager\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.InterfaceManagerForCar" data-throw-if-not-resolved="false"></xref> class.

```csharp
public InterfaceManagerForCar(InterfaceManager itfMgr)
```

#### Parameters

`itfMgr` InterfaceManager

The itf MGR.

## Methods

### <a id="VM_Managed_DAFUL_Car_InterfaceManagerForCar_Add_VM_Managed_IInterface_"></a> Add\(IInterface\)

Adds the specified itf.

```csharp
protected override void Add(IInterface itf)
```

#### Parameters

`itf` IInterface

The itf.

### <a id="VM_Managed_DAFUL_Car_InterfaceManagerForCar_GetMinorRoleForInterface_VM_Managed_IInterface_VM_Managed_DAFUL_Car_MinorRole__"></a> GetMinorRoleForInterface\(IInterface, ref MinorRole\)

Gets the minor role for interface.

```csharp
public bool GetMinorRoleForInterface(IInterface itf, ref MinorRole role)
```

#### Parameters

`itf` IInterface

The itf.

`role` [MinorRole](VM.Managed.DAFUL.Car.MinorRole.md)

The role.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Car_InterfaceManagerForCar_RemoveInterface_VM_Managed_IInterface_"></a> RemoveInterface\(IInterface\)

Removes the interface to interface manager.

```csharp
public override void RemoveInterface(IInterface itf)
```

#### Parameters

`itf` IInterface

The interface.

### <a id="VM_Managed_DAFUL_Car_InterfaceManagerForCar_SetMinorRoleForInterface_VM_Managed_IInterface_VM_Managed_DAFUL_Car_MinorRole_"></a> SetMinorRoleForInterface\(IInterface, MinorRole\)

Sets the minor role for interface.

```csharp
public bool SetMinorRoleForInterface(IInterface itf, MinorRole role)
```

#### Parameters

`itf` IInterface

The itf.

`role` [MinorRole](VM.Managed.DAFUL.Car.MinorRole.md)

The role.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

