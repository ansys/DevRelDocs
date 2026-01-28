# Class DriverUserSubroutine
<a id="VM_Managed_DAFUL_Constraints_DriverUserSubroutine"></a>

Namespace: [VM.Managed.DAFUL.Constraints](VM.Managed.DAFUL.Constraints.md)  
Assembly: VMDCB.dll  

This class is to represent the user subroutine as driver.

```csharp
public sealed class DriverUserSubroutine : Driver, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IEnableForSimulationScenario
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[Driver](VM.Managed.DAFUL.Constraints.Driver.md) ← 
[DriverUserSubroutine](VM.Managed.DAFUL.Constraints.DriverUserSubroutine.md)

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
IEnableForSimulationScenario

#### Inherited Members

[Driver.Type](VM.Managed.DAFUL.Constraints.Driver.md\#VM\_Managed\_DAFUL\_Constraints\_Driver\_Type), 
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

### <a id="VM_Managed_DAFUL_Constraints_DriverUserSubroutine__ctor"></a> DriverUserSubroutine\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Constraints.DriverUserSubroutine" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DriverUserSubroutine()
```

### <a id="VM_Managed_DAFUL_Constraints_DriverUserSubroutine__ctor_VM_Managed_DAFUL_Constraints_PropertyConstraint_"></a> DriverUserSubroutine\(PropertyConstraint\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Constraints.DriverUserSubroutine" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DriverUserSubroutine(PropertyConstraint owner)
```

#### Parameters

`owner` [PropertyConstraint](VM.Managed.DAFUL.Constraints.PropertyConstraint.md)

owner constraint property.

## Properties

### <a id="VM_Managed_DAFUL_Constraints_DriverUserSubroutine_Type"></a> Type

Gets or sets the driver type.

```csharp
public override Driver.DriverType Type { get; protected set; }
```

#### Property Value

 [Driver](VM.Managed.DAFUL.Constraints.Driver.md).[DriverType](VM.Managed.DAFUL.Constraints.Driver.DriverType.md)

### <a id="VM_Managed_DAFUL_Constraints_DriverUserSubroutine_UserSubroutine"></a> UserSubroutine

Gets or sets the user subroutine.

```csharp
public UserSubroutine UserSubroutine { get; set; }
```

#### Property Value

 [UserSubroutine](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSP/UserSubroutine.cs)

