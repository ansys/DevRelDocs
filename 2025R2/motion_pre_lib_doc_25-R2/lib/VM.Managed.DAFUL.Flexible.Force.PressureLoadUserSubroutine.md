# <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadUserSubroutine"></a> Class PressureLoadUserSubroutine

Namespace: [VM.Managed.DAFUL.Flexible.Force](VM.Managed.DAFUL.Flexible.Force.md)  
Assembly: VMFlexibleBase.dll  

This class is to represent the characteristic properties of user-subroutine type.

```csharp
public sealed class PressureLoadUserSubroutine : PressureLoadFunction, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IReservable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[PressureLoadFunction](VM.Managed.DAFUL.Flexible.Force.PressureLoadFunction.md) ← 
[PressureLoadUserSubroutine](VM.Managed.DAFUL.Flexible.Force.PressureLoadUserSubroutine.md)

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
IVerifiable, 
IReservable

#### Inherited Members

[PressureLoadFunction.Type](VM.Managed.DAFUL.Flexible.Force.PressureLoadFunction.md\#VM\_Managed\_DAFUL\_Flexible\_Force\_PressureLoadFunction\_Type), 
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
LinkContainer.SetContainer\(IOwned, bool\), 
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
ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
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

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadUserSubroutine__ctor"></a> PressureLoadUserSubroutine\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Flexible.Force.PressureLoadUserSubroutine" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PressureLoadUserSubroutine()
```

## Properties

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadUserSubroutine_Type"></a> Type

Gets the function type.

```csharp
public override PressureLoadFunction.FunctionType Type { get; }
```

#### Property Value

 [PressureLoadFunction](VM.Managed.DAFUL.Flexible.Force.PressureLoadFunction.md).[FunctionType](VM.Managed.DAFUL.Flexible.Force.PressureLoadFunction.FunctionType.md)

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadUserSubroutine_UserSubroutine"></a> UserSubroutine

Gets or sets the user subroutine.

```csharp
public UserSubroutine UserSubroutine { get; set; }
```

#### Property Value

 UserSubroutine

