#  Class UserSubroutine.UserDefinedDisplay.DisplaySet

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDSP.dll  

This class is to represent the display set of user defined display.

```csharp
public class UserSubroutine.UserDefinedDisplay.DisplaySet : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[UserSubroutine.UserDefinedDisplay.DisplaySet](VM.Managed.DAFUL.UserSubroutine.UserDefinedDisplay.DisplaySet.md)

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

### <a id="VM_Managed_DAFUL_UserSubroutine_UserDefinedDisplay_DisplaySet__ctor"></a> DisplaySet\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.UserSubroutine.UserDefinedDisplay.DisplaySet" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DisplaySet()
```

## Properties

### <a id="VM_Managed_DAFUL_UserSubroutine_UserDefinedDisplay_DisplaySet_DisplaySequence"></a> DisplaySequence

Gets the display sequence.

```csharp
public int DisplaySequence { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_UserSubroutine_UserDefinedDisplay_DisplaySet_MultiPositionAndScalarSequence"></a> MultiPositionAndScalarSequence

Gets or sets the multi position and scalar sequence.

```csharp
public UserSubroutine.UserDefinedDisplay.DisplaySet.PositionAndScalarStartSequence[] MultiPositionAndScalarSequence { get; set; }
```

#### Property Value

 [UserSubroutine](VM.Managed.DAFUL.UserSubroutine.md).[UserDefinedDisplay](VM.Managed.DAFUL.UserSubroutine.UserDefinedDisplay.md).[DisplaySet](VM.Managed.DAFUL.UserSubroutine.UserDefinedDisplay.DisplaySet.md).[PositionAndScalarStartSequence](VM.Managed.DAFUL.UserSubroutine.UserDefinedDisplay.DisplaySet.PositionAndScalarStartSequence.md)\[\]

### <a id="VM_Managed_DAFUL_UserSubroutine_UserDefinedDisplay_DisplaySet_ParentBody"></a> ParentBody

Gets or sets the Parent body.

```csharp
public ObjectBase ParentBody { get; set; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_DAFUL_UserSubroutine_UserDefinedDisplay_DisplaySet_SinglePositionSequence"></a> SinglePositionSequence

Gets the single position sequence.

```csharp
public int SinglePositionSequence { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_UserSubroutine_UserDefinedDisplay_DisplaySet_SingleScalarSequence"></a> SingleScalarSequence

Gets the single scalar sequence.

```csharp
public int SingleScalarSequence { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

