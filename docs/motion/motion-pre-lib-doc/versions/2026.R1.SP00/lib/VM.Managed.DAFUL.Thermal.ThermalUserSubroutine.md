# Class ThermalUserSubroutine
<a id="VM_Managed_DAFUL_Thermal_ThermalUserSubroutine"></a>

Namespace: [VM.Managed.DAFUL.Thermal](VM.Managed.DAFUL.Thermal.md)  
Assembly: VMThermalBase.dll  

This class is to represent the thermal charactoristic properties of user-subroutine type.

```csharp
public sealed class ThermalUserSubroutine : ThermalFunction, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IReservable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[ThermalFunction](VM.Managed.DAFUL.Thermal.ThermalFunction.md) ← 
[ThermalUserSubroutine](VM.Managed.DAFUL.Thermal.ThermalUserSubroutine.md)

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

[ThermalFunction.Type](VM.Managed.DAFUL.Thermal.ThermalFunction.md\#VM\_Managed\_DAFUL\_Thermal\_ThermalFunction\_Type), 
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

### <a id="VM_Managed_DAFUL_Thermal_ThermalUserSubroutine__ctor"></a> ThermalUserSubroutine\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Thermal.ThermalUserSubroutine" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ThermalUserSubroutine()
```

### <a id="VM_Managed_DAFUL_Thermal_ThermalUserSubroutine__ctor_VM_Managed_DAFUL_Thermal_PropertyThermalBase_"></a> ThermalUserSubroutine\(PropertyThermalBase\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Thermal.ThermalUserSubroutine" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ThermalUserSubroutine(PropertyThermalBase owner)
```

#### Parameters

`owner` [PropertyThermalBase](VM.Managed.DAFUL.Thermal.PropertyThermalBase.md)

The owner thermal property.

## Properties

### <a id="VM_Managed_DAFUL_Thermal_ThermalUserSubroutine_Type"></a> Type

Gets the function type.

```csharp
public override ThermalFunction.FunctionType Type { get; }
```

#### Property Value

 [ThermalFunction](VM.Managed.DAFUL.Thermal.ThermalFunction.md).[FunctionType](VM.Managed.DAFUL.Thermal.ThermalFunction.FunctionType.md)

### <a id="VM_Managed_DAFUL_Thermal_ThermalUserSubroutine_UserSubroutine"></a> UserSubroutine

Gets or sets the user subroutine.

```csharp
public UserSubroutine UserSubroutine { get; set; }
```

#### Property Value

 [UserSubroutine](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSP/UserSubroutine.cs)

