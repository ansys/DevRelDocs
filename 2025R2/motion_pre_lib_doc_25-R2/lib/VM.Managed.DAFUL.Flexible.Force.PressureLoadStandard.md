# <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadStandard"></a> Class PressureLoadStandard

Namespace: [VM.Managed.DAFUL.Flexible.Force](VM.Managed.DAFUL.Flexible.Force.md)  
Assembly: VMFlexibleBase.dll  

This class is to represent the characteristic properties of standard type.

```csharp
public sealed class PressureLoadStandard : PressureLoadFunction, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable, IReserved
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[PressureLoadFunction](VM.Managed.DAFUL.Flexible.Force.PressureLoadFunction.md) ← 
[PressureLoadStandard](VM.Managed.DAFUL.Flexible.Force.PressureLoadStandard.md)

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
IReserved

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

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadStandard__ctor"></a> PressureLoadStandard\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Flexible.Force.PressureLoadStandard" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PressureLoadStandard()
```

## Properties

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadStandard_Normal"></a> Normal

Gets or sets the normal.

```csharp
public CompositeFieldUsable Normal { get; set; }
```

#### Property Value

 CompositeFieldUsable

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadStandard_PrimaryTangential"></a> PrimaryTangential

Gets or sets the primary tangential.

```csharp
public CompositeFieldUsable PrimaryTangential { get; set; }
```

#### Property Value

 CompositeFieldUsable

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadStandard_SecondaryTangential"></a> SecondaryTangential

Gets or sets the secondary tangential.

```csharp
public CompositeFieldUsable SecondaryTangential { get; set; }
```

#### Property Value

 CompositeFieldUsable

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadStandard_TangentialSecDirection"></a> TangentialSecDirection

Gets or sets the tangential secondary direction.

```csharp
public DirectionBase TangentialSecDirection { get; set; }
```

#### Property Value

 DirectionBase

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadStandard_Type"></a> Type

Gets the function type.

```csharp
public override PressureLoadFunction.FunctionType Type { get; }
```

#### Property Value

 [PressureLoadFunction](VM.Managed.DAFUL.Flexible.Force.PressureLoadFunction.md).[FunctionType](VM.Managed.DAFUL.Flexible.Force.PressureLoadFunction.FunctionType.md)

## Methods

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadStandard_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_Flexible_Force_PressureLoadStandard_InitializeReservedObject"></a> InitializeReservedObject\(\)

Initialize the reserved object.

```csharp
public void InitializeReservedObject()
```

