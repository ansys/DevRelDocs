# <a id="VM_Managed_DAFUL_CPlacingConnector_PinStiffness"></a> Class PinStiffness

Namespace: [VM.Managed.DAFUL.CPlacingConnector](VM.Managed.DAFUL.CPlacingConnector.md)  
Assembly: VMDCPlacingConnector.dll  

This class is to represent the pin stiffness.

```csharp
public class PinStiffness : ComponentStiffness, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[ComponentStiffness](VM.Managed.DAFUL.CPlacingConnector.ComponentStiffness.md) ← 
[PinStiffness](VM.Managed.DAFUL.CPlacingConnector.PinStiffness.md)

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

[ComponentStiffness.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.CPlacingConnector.ComponentStiffness.md\#VM\_Managed\_DAFUL\_CPlacingConnector\_ComponentStiffness\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[ComponentStiffness.Name](VM.Managed.DAFUL.CPlacingConnector.ComponentStiffness.md\#VM\_Managed\_DAFUL\_CPlacingConnector\_ComponentStiffness\_Name), 
[ComponentStiffness.Calculated](VM.Managed.DAFUL.CPlacingConnector.ComponentStiffness.md\#VM\_Managed\_DAFUL\_CPlacingConnector\_ComponentStiffness\_Calculated), 
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

### <a id="VM_Managed_DAFUL_CPlacingConnector_PinStiffness__ctor"></a> PinStiffness\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.CPlacingConnector.PinStiffness" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PinStiffness()
```

### <a id="VM_Managed_DAFUL_CPlacingConnector_PinStiffness__ctor_System_String_"></a> PinStiffness\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.CPlacingConnector.PinStiffness" data-throw-if-not-resolved="false"></xref> class.
<param name="strName">The name.</param>

```csharp
public PinStiffness(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Managed_DAFUL_CPlacingConnector_PinStiffness_Stiffness"></a> Stiffness

Gets or sets the stiffness.

```csharp
public ExpressionValueVariable Stiffness { get; set; }
```

#### Property Value

 ExpressionValueVariable

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The stiffness is null.

## Methods

### <a id="VM_Managed_DAFUL_CPlacingConnector_PinStiffness_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes the specified factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The factor.

### <a id="VM_Managed_DAFUL_CPlacingConnector_PinStiffness_StiffnessText"></a> StiffnessText\(\)

Gets the stiffness text

```csharp
public string StiffnessText()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

