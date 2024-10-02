#  Class RestrictionRotationalAngle

Namespace: [VM.Managed.DAFUL.Constraints](VM.Managed.DAFUL.Constraints.md)  
Assembly: VMDCB.dll  

This class is to represent the initial condition as rotational angle restriction.

```csharp
public sealed class RestrictionRotationalAngle : RestrictionBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[RestrictionBase](VM.Managed.DAFUL.Constraints.RestrictionBase.md) ← 
[RestrictionRotationalAngle](VM.Managed.DAFUL.Constraints.RestrictionRotationalAngle.md)

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

### <a id="VM_Managed_DAFUL_Constraints_RestrictionRotationalAngle__ctor"></a> RestrictionRotationalAngle\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Constraints.RestrictionRotationalAngle" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RestrictionRotationalAngle()
```

## Methods

### <a id="VM_Managed_DAFUL_Constraints_RestrictionRotationalAngle_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

