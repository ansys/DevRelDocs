#  Class AttributeBodyToDTBearing

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

The attribute of body to dt for bearing

```csharp
public class AttributeBodyToDTBearing : AttributeBodyToAttachedDT, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
AttributeBase ← 
[AttributeBodyToDT](VM.Managed.DAFUL.GearTrain.AttributeBodyToDT.md) ← 
[AttributeBodyToAttachedDT](VM.Managed.DAFUL.GearTrain.AttributeBodyToAttachedDT.md) ← 
[AttributeBodyToDTBearing](VM.Managed.DAFUL.GearTrain.AttributeBodyToDTBearing.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
ILinkContainerEvent, 
IVerifiable

#### Inherited Members

[AttributeBodyToAttachedDT.Position](VM.Managed.DAFUL.GearTrain.AttributeBodyToAttachedDT.md\#VM\_Managed\_DAFUL\_GearTrain\_AttributeBodyToAttachedDT\_Position), 
[AttributeBodyToDT.AddConnectable\(IConnectable\)](VM.Managed.DAFUL.GearTrain.AttributeBodyToDT.md\#VM\_Managed\_DAFUL\_GearTrain\_AttributeBodyToDT\_AddConnectable\_VM\_Managed\_DAFUL\_IConnectable\_), 
[AttributeBodyToDT.ContainsConnectable\(IConnectable\)](VM.Managed.DAFUL.GearTrain.AttributeBodyToDT.md\#VM\_Managed\_DAFUL\_GearTrain\_AttributeBodyToDT\_ContainsConnectable\_VM\_Managed\_DAFUL\_IConnectable\_), 
[AttributeBodyToDT.OnDeserialization\(object\)](VM.Managed.DAFUL.GearTrain.AttributeBodyToDT.md\#VM\_Managed\_DAFUL\_GearTrain\_AttributeBodyToDT\_OnDeserialization\_System\_Object\_), 
[AttributeBodyToDT.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.DAFUL.GearTrain.AttributeBodyToDT.md\#VM\_Managed\_DAFUL\_GearTrain\_AttributeBodyToDT\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[AttributeBodyToDT.ConnectableList](VM.Managed.DAFUL.GearTrain.AttributeBodyToDT.md\#VM\_Managed\_DAFUL\_GearTrain\_AttributeBodyToDT\_ConnectableList), 
[AttributeBodyToDT.\_ConnectableList](VM.Managed.DAFUL.GearTrain.AttributeBodyToDT.md\#VM\_Managed\_DAFUL\_GearTrain\_AttributeBodyToDT\_\_ConnectableList), 
AttributeBase.OnDeserializationAttribute\(\), 
AttributeBase.LinkRequestUpdate\(object, LinkEventArgs\), 
LinkContainer.SetModified\(\), 
LinkContainer.raise\_OnUpdating\(object, LinkEventArgs\), 
LinkContainer.raise\_OnUpdate\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroying\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroy\(object, LinkEventArgs\), 
LinkContainer.raise\_OnAdded\(object, AddToDocEventArgs\), 
LinkContainer.raise\_OnRemoved\(object, RemoveFromDocEventArgs\), 
LinkContainer.GetTargetListForUpdate\(\), 
LinkContainer.SkipUpdateObjectImpl\(\), 
LinkContainer.Initialize\(Unit.ConvertFactor\), 
LinkContainer.SetFlagWhenXMLFile\(string, bool\), 
LinkContainer.IsSerializableEvent\(Delegate\), 
LinkContainer.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
LinkContainer.GetSerializedData\(SerializationInfo, StreamingContext\), 
LinkContainer.LinkRequestUpdating\(object, LinkEventArgs\), 
LinkContainer.LinkRequestUpdate\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroying\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroy\(object, LinkEventArgs\), 
LinkContainer.LinkAddedToDocument\(object, AddToDocEventArgs\), 
LinkContainer.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
LinkContainer.OnLinkReserved\(ILink, object, EventArgs\), 
LinkContainer.CanBeDestroy\(object\), 
LinkContainer.DisposeManagedResources\(\), 
LinkContainer.SetContainer\(IOwned, bool\), 
LinkContainer.OnChildUpdated\(object, LinkEventArgs\), 
LinkContainer.OnContainerDestroy\(object, LinkEventArgs\), 
LinkContainer.OnDeserialization\(object\), 
LinkContainer.Verify\(VerifiedResult\), 
LinkContainer.GetCopy\(object\), 
LinkContainer.Dispose\(bool\), 
LinkContainer.ClearChildInfoBeforeDeserialize, 
LinkContainer.Container, 
LinkContainer.Owner, 
LinkContainer.Document, 
LinkContainer.ID, 
LinkContainer.IsChildExternable, 
LinkContainer.IsExternable, 
LinkContainer.OnRemoved, 
LinkContainer.OnAdded, 
LinkContainer.OnDestroy, 
LinkContainer.OnDestroying, 
LinkContainer.OnUpdate, 
LinkContainer.OnUpdating, 
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

### <a id="VM_Managed_DAFUL_GearTrain_AttributeBodyToDTBearing__ctor"></a> AttributeBodyToDTBearing\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.AttributeBodyToDTBearing" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AttributeBodyToDTBearing()
```

