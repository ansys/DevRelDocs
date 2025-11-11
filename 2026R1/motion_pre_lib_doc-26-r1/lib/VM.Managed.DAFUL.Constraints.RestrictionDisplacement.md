# Class RestrictionDisplacement
<a id="VM_Managed_DAFUL_Constraints_RestrictionDisplacement"></a>

Namespace: [VM.Managed.DAFUL.Constraints](VM.Managed.DAFUL.Constraints.md)  
Assembly: VMDCB.dll  

This class is to represent the initial condition as displacement restriction.

```csharp
public sealed class RestrictionDisplacement : RestrictionBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[RestrictionBase](VM.Managed.DAFUL.Constraints.RestrictionBase.md) ← 
[RestrictionDisplacement](VM.Managed.DAFUL.Constraints.RestrictionDisplacement.md)

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

[RestrictionBase.IsUseRestriction\(\)](VM.Managed.DAFUL.Constraints.RestrictionBase.md\#VM\_Managed\_DAFUL\_Constraints\_RestrictionBase\_IsUseRestriction), 
[RestrictionBase.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.Constraints.RestrictionBase.md\#VM\_Managed\_DAFUL\_Constraints\_RestrictionBase\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[RestrictionBase.UsePlus](VM.Managed.DAFUL.Constraints.RestrictionBase.md\#VM\_Managed\_DAFUL\_Constraints\_RestrictionBase\_UsePlus), 
[RestrictionBase.UseMinus](VM.Managed.DAFUL.Constraints.RestrictionBase.md\#VM\_Managed\_DAFUL\_Constraints\_RestrictionBase\_UseMinus), 
[RestrictionBase.Plus](VM.Managed.DAFUL.Constraints.RestrictionBase.md\#VM\_Managed\_DAFUL\_Constraints\_RestrictionBase\_Plus), 
[RestrictionBase.Minus](VM.Managed.DAFUL.Constraints.RestrictionBase.md\#VM\_Managed\_DAFUL\_Constraints\_RestrictionBase\_Minus), 
[RestrictionBase.StiffnessCoefficient](VM.Managed.DAFUL.Constraints.RestrictionBase.md\#VM\_Managed\_DAFUL\_Constraints\_RestrictionBase\_StiffnessCoefficient), 
[RestrictionBase.ExponentOfPenetration](VM.Managed.DAFUL.Constraints.RestrictionBase.md\#VM\_Managed\_DAFUL\_Constraints\_RestrictionBase\_ExponentOfPenetration), 
[RestrictionBase.MaxDampingCoefficient](VM.Managed.DAFUL.Constraints.RestrictionBase.md\#VM\_Managed\_DAFUL\_Constraints\_RestrictionBase\_MaxDampingCoefficient), 
[RestrictionBase.BoundaryPenetration](VM.Managed.DAFUL.Constraints.RestrictionBase.md\#VM\_Managed\_DAFUL\_Constraints\_RestrictionBase\_BoundaryPenetration), 
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

### <a id="VM_Managed_DAFUL_Constraints_RestrictionDisplacement__ctor"></a> RestrictionDisplacement\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Constraints.RestrictionDisplacement" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RestrictionDisplacement()
```

## Methods

### <a id="VM_Managed_DAFUL_Constraints_RestrictionDisplacement_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

