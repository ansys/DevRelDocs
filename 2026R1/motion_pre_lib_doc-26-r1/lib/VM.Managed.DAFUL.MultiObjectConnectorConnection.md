# Class MultiObjectConnectorConnection
<a id="VM_Managed_DAFUL_MultiObjectConnectorConnection"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent multi object connection for connector object.

```csharp
public class MultiObjectConnectorConnection : MultiObjectConnection, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[MultiObjectConnection](VM.Managed.DAFUL.MultiObjectConnection.md) ← 
[MultiObjectConnectorConnection](VM.Managed.DAFUL.MultiObjectConnectorConnection.md)

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

[MultiObjectConnection.GetConnection\(object, object\)](VM.Managed.DAFUL.MultiObjectConnection.md\#VM\_Managed\_DAFUL\_MultiObjectConnection\_GetConnection\_System\_Object\_System\_Object\_), 
[MultiObjectConnection.Reset\(\)](VM.Managed.DAFUL.MultiObjectConnection.md\#VM\_Managed\_DAFUL\_MultiObjectConnection\_Reset), 
[MultiObjectConnection.Connection](VM.Managed.DAFUL.MultiObjectConnection.md\#VM\_Managed\_DAFUL\_MultiObjectConnection\_Connection), 
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

### <a id="VM_Managed_DAFUL_MultiObjectConnectorConnection__ctor"></a> MultiObjectConnectorConnection\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MultiObjectConnectorConnection" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MultiObjectConnectorConnection()
```

### <a id="VM_Managed_DAFUL_MultiObjectConnectorConnection__ctor_VM_Managed_ObjectBase_"></a> MultiObjectConnectorConnection\(ObjectBase\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MultiObjectConnection" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MultiObjectConnectorConnection(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The connection object.

## Properties

### <a id="VM_Managed_DAFUL_MultiObjectConnectorConnection_ActionMarkerTransform"></a> ActionMarkerTransform

Gets or sets the action marker transformation.

```csharp
public ConnectorMarkerTransformBase ActionMarkerTransform { get; set; }
```

#### Property Value

 [ConnectorMarkerTransformBase](VM.Managed.DAFUL.ConnectorMarkerTransformBase.md)

### <a id="VM_Managed_DAFUL_MultiObjectConnectorConnection_BaseMarkerTransform"></a> BaseMarkerTransform

Gets or sets the base marker transformation.

```csharp
public ConnectorMarkerTransformBase BaseMarkerTransform { get; set; }
```

#### Property Value

 [ConnectorMarkerTransformBase](VM.Managed.DAFUL.ConnectorMarkerTransformBase.md)

## Methods

### <a id="VM_Managed_DAFUL_MultiObjectConnectorConnection_GetConnection_System_Object_System_Object_"></a> GetConnection\(object, object\)

Gets the connection object with base-action connection information.

```csharp
public override ObjectBase GetConnection(object obBase, object obAction)
```

#### Parameters

`obBase` object

The base object for the connection object.

`obAction` object

The action object for the connection object.

#### Returns

 ObjectBase

### <a id="VM_Managed_DAFUL_MultiObjectConnectorConnection_Reset"></a> Reset\(\)

Initializes the connection object with base-action connection information..

```csharp
public override void Reset()
```

