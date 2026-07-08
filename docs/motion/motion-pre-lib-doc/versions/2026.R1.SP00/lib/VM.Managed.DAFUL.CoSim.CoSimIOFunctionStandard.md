# Class CoSimIOFunctionStandard
<a id="VM_Managed_DAFUL_CoSim_CoSimIOFunctionStandard"></a>

Namespace: [VM.Managed.DAFUL.CoSim](VM.Managed.DAFUL.CoSim.md)  
Assembly: VMDCoSimCore.dll  

The standard CoSim I/O function class

```csharp
public sealed class CoSimIOFunctionStandard : CoSimIOFunction, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[CoSimIOFunction](VM.Managed.DAFUL.CoSim.CoSimIOFunction.md) ← 
[CoSimIOFunctionStandard](VM.Managed.DAFUL.CoSim.CoSimIOFunctionStandard.md)

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

### <a id="VM_Managed_DAFUL_CoSim_CoSimIOFunctionStandard__ctor"></a> CoSimIOFunctionStandard\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.CoSim.CoSimIOFunctionStandard" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CoSimIOFunctionStandard()
```

### <a id="VM_Managed_DAFUL_CoSim_CoSimIOFunctionStandard__ctor_VM_Managed_DAFUL_CoSim_CoSimIO_"></a> CoSimIOFunctionStandard\(CoSimIO\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.CoSim.CoSimIOFunctionStandard" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CoSimIOFunctionStandard(CoSimIO objParent)
```

#### Parameters

`objParent` [CoSimIO](VM.Managed.DAFUL.CoSim.CoSimIO.md)

The obj parent.

## Properties

### <a id="VM_Managed_DAFUL_CoSim_CoSimIOFunctionStandard_Function"></a> Function

Gets or sets the function.

```csharp
public Function Function { get; set; }
```

#### Property Value

 [Function](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Function.cs)

