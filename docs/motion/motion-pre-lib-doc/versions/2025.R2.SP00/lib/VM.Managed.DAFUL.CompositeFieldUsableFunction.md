#  Class CompositeFieldUsableFunction

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDSB.dll  

This class is to represent the composited field with usable function.

```csharp
public class CompositeFieldUsableFunction : CompositeFieldUsable, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
CompositeField ← 
CompositeFieldUsable ← 
[CompositeFieldUsableFunction](VM.Managed.DAFUL.CompositeFieldUsableFunction.md)

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

CompositeFieldUsable.IsUse, 
CompositeFieldUsable.Use, 
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

### <a id="VM_Managed_DAFUL_CompositeFieldUsableFunction__ctor"></a> CompositeFieldUsableFunction\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.CompositeFieldUsableFunction" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CompositeFieldUsableFunction()
```

### <a id="VM_Managed_DAFUL_CompositeFieldUsableFunction__ctor_VM_Managed_Property_"></a> CompositeFieldUsableFunction\(Property\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.CompositeFieldUsableFunction" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CompositeFieldUsableFunction(Property owner)
```

#### Parameters

`owner` Property

The owner.

### <a id="VM_Managed_DAFUL_CompositeFieldUsableFunction__ctor_VM_Managed_Property_VM_Managed_DAFUL_Function_"></a> CompositeFieldUsableFunction\(Property, Function\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.CompositeFieldUsableFunction" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CompositeFieldUsableFunction(Property owner, Function func)
```

#### Parameters

`owner` Property

The owner.

`func` [Function](VM.Managed.DAFUL.Function.md)

The function.

### <a id="VM_Managed_DAFUL_CompositeFieldUsableFunction__ctor_VM_Managed_DAFUL_Function_"></a> CompositeFieldUsableFunction\(Function\)

```csharp
public CompositeFieldUsableFunction(Function func)
```

#### Parameters

`func` [Function](VM.Managed.DAFUL.Function.md)

## Properties

### <a id="VM_Managed_DAFUL_CompositeFieldUsableFunction_Function"></a> Function

Gets or sets the function.

```csharp
public Function Function { get; set; }
```

#### Property Value

 [Function](VM.Managed.DAFUL.Function.md)

### <a id="VM_Managed_DAFUL_CompositeFieldUsableFunction_IsUse"></a> IsUse

Gets or sets a value indicating whether this <xref href="VM.Managed.DAFUL.CompositeFieldUsable" data-throw-if-not-resolved="false"></xref> is use.

```csharp
public override bool IsUse { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_CompositeFieldUsableFunction_TypeOfLink"></a> TypeOfLink

Gets the type of link.

```csharp
public CompositeFieldUsableFunction.LinkType TypeOfLink { get; }
```

#### Property Value

 [CompositeFieldUsableFunction](VM.Managed.DAFUL.CompositeFieldUsableFunction.md).[LinkType](VM.Managed.DAFUL.CompositeFieldUsableFunction.LinkType.md)

### <a id="VM_Managed_DAFUL_CompositeFieldUsableFunction_Use"></a> Use

Gets or sets a value indicating whether this <xref href="VM.Managed.DAFUL.CompositeFieldUsable" data-throw-if-not-resolved="false"></xref> is use.

```csharp
protected override bool Use { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

