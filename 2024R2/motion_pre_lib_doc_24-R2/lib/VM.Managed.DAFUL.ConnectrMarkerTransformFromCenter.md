# Class ConnectrMarkerTransformFromCenter

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent transformation information for marker of connector.

```csharp
public class ConnectrMarkerTransformFromCenter : ConnectorMarkerTransformBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[ConnectorMarkerTransformBase](VM.Managed.DAFUL.ConnectorMarkerTransformBase.md) ← 
[ConnectrMarkerTransformFromCenter](VM.Managed.DAFUL.ConnectrMarkerTransformFromCenter.md)

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

[ConnectorMarkerTransformBase.CalcMarkerTransform\(ObjectBase, ObjectBase\)](VM.Managed.DAFUL.ConnectorMarkerTransformBase.md\#VM\_Managed\_DAFUL\_ConnectorMarkerTransformBase\_CalcMarkerTransform\_VM\_Managed\_ObjectBase\_VM\_Managed\_ObjectBase\_), 
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

### ConnectrMarkerTransformFromCenter\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.ConnectrMarkerTransformFromCenter" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ConnectrMarkerTransformFromCenter()
```

### ConnectrMarkerTransformFromCenter\(IOwned\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.ConnectrMarkerTransformFromCenter" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ConnectrMarkerTransformFromCenter(IOwned owner)
```

#### Parameters

`owner` IOwned

The owner.

## Properties

### TransformFromCenter

Gets or sets the transformation from reference coordinate.

```csharp
public TransformBase TransformFromCenter { get; set; }
```

#### Property Value

 TransformBase

### TypeOfCenter

Gets or sets the type of the reference coordinate.

```csharp
public ConnectrMarkerTransformFromCenter.RefFrameType TypeOfCenter { get; set; }
```

#### Property Value

 [ConnectrMarkerTransformFromCenter](VM.Managed.DAFUL.ConnectrMarkerTransformFromCenter.md).[RefFrameType](VM.Managed.DAFUL.ConnectrMarkerTransformFromCenter.RefFrameType.md)

## Methods

### CalcMarkerTransform\(ObjectBase, ObjectBase\)

Calculate the transformation matrix for marker.

```csharp
public override TMatrix CalcMarkerTransform(ObjectBase ob, ObjectBase obSupport)
```

#### Parameters

`ob` ObjectBase

The object(Body) for marker.

`obSupport` ObjectBase

The support object(Body) to calculate transformation matirx. In this function, this parameter is ignored.

#### Returns

 TMatrix


