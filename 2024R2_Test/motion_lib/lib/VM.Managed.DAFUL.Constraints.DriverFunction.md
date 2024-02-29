# <a id="VM_Managed_DAFUL_Constraints_DriverFunction"></a> Class DriverFunction

Namespace: [VM.Managed.DAFUL.Constraints](VM.Managed.DAFUL.Constraints.md)  
Assembly: VMDCB.dll  

```csharp
public sealed class DriverFunction : Driver, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IEnableForSimulationScenario
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[Driver](VM.Managed.DAFUL.Constraints.Driver.md) ← 
[DriverFunction](VM.Managed.DAFUL.Constraints.DriverFunction.md)

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

### <a id="VM_Managed_DAFUL_Constraints_DriverFunction__ctor"></a> DriverFunction\(\)

```csharp
public DriverFunction()
```

### <a id="VM_Managed_DAFUL_Constraints_DriverFunction__ctor_VM_Managed_DAFUL_Constraints_PropertyConstraint_"></a> DriverFunction\(PropertyConstraint\)

```csharp
public DriverFunction(PropertyConstraint owner)
```

#### Parameters

`owner` [PropertyConstraint](VM.Managed.DAFUL.Constraints.PropertyConstraint.md)

## Fields

### <a id="VM_Managed_DAFUL_Constraints_DriverFunction_Motion"></a> Motion

```csharp
public DriverFunction.MotionType Motion
```

#### Field Value

 [DriverFunction](VM.Managed.DAFUL.Constraints.DriverFunction.md).[MotionType](VM.Managed.DAFUL.Constraints.DriverFunction.MotionType.md)

## Properties

### <a id="VM_Managed_DAFUL_Constraints_DriverFunction_Function"></a> Function

```csharp
public Function Function { get; set; }
```

#### Property Value

 Function

### <a id="VM_Managed_DAFUL_Constraints_DriverFunction_InitialCondition"></a> InitialCondition

```csharp
public InitialCondition InitialCondition { get; set; }
```

#### Property Value

 [InitialCondition](VM.Managed.DAFUL.Constraints.InitialCondition.md)

### <a id="VM_Managed_DAFUL_Constraints_DriverFunction_Type"></a> Type

```csharp
public override Driver.DriverType Type { get; protected set; }
```

#### Property Value

 [Driver](VM.Managed.DAFUL.Constraints.Driver.md).[DriverType](VM.Managed.DAFUL.Constraints.Driver.DriverType.md)

