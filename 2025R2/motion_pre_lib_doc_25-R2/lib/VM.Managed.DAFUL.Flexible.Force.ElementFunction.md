# <a id="VM_Managed_DAFUL_Flexible_Force_ElementFunction"></a> Class ElementFunction

Namespace: [VM.Managed.DAFUL.Flexible.Force](VM.Managed.DAFUL.Flexible.Force.md)  
Assembly: VMFlexibleBase.dll  

This class is to represent the element function.

```csharp
public class ElementFunction : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[ElementFunction](VM.Managed.DAFUL.Flexible.Force.ElementFunction.md)

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

### <a id="VM_Managed_DAFUL_Flexible_Force_ElementFunction__ctor"></a> ElementFunction\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Flexible.Force.ElementFunction" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ElementFunction()
```

### <a id="VM_Managed_DAFUL_Flexible_Force_ElementFunction__ctor_System_String_"></a> ElementFunction\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Flexible.Force.ElementFunction" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ElementFunction(string strUniqueName)
```

#### Parameters

`strUniqueName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Managed_DAFUL_Flexible_Force_ElementFunction_DisplayFunctionNumber"></a> DisplayFunctionNumber

Gets or set the diaplay function number.

```csharp
public ElementFunction.DisplayNumber DisplayFunctionNumber { get; set; }
```

#### Property Value

 [ElementFunction](VM.Managed.DAFUL.Flexible.Force.ElementFunction.md).[DisplayNumber](VM.Managed.DAFUL.Flexible.Force.ElementFunction.DisplayNumber.md)

### <a id="VM_Managed_DAFUL_Flexible_Force_ElementFunction_FunctionX"></a> FunctionX

Gets or sets the X function.

```csharp
public CompositeFieldUsable FunctionX { get; set; }
```

#### Property Value

 CompositeFieldUsable

### <a id="VM_Managed_DAFUL_Flexible_Force_ElementFunction_FunctionY"></a> FunctionY

Gets or sets the Y function.

```csharp
public CompositeFieldUsable FunctionY { get; set; }
```

#### Property Value

 CompositeFieldUsable

### <a id="VM_Managed_DAFUL_Flexible_Force_ElementFunction_FunctionZ"></a> FunctionZ

Gets or sets the Z function.

```csharp
public CompositeFieldUsable FunctionZ { get; set; }
```

#### Property Value

 CompositeFieldUsable

### <a id="VM_Managed_DAFUL_Flexible_Force_ElementFunction_Orientation"></a> Orientation

Gets or sets the orientation.

```csharp
public OrientationBase Orientation { get; set; }
```

#### Property Value

 OrientationBase

## Methods

### <a id="VM_Managed_DAFUL_Flexible_Force_ElementFunction_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

