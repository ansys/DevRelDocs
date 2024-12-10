#  Class EquationFunctionDiff

Namespace: [VM.Managed.DAFUL.Equation](VM.Managed.DAFUL.Equation.md)  
Assembly: VMDEq.dll  

This base class is to represent the differential equation charactoristic properties.

```csharp
public abstract class EquationFunctionDiff : EquationFunction, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[EquationFunction](VM.Managed.DAFUL.Equation.EquationFunction.md) ← 
[EquationFunctionDiff](VM.Managed.DAFUL.Equation.EquationFunctionDiff.md)

#### Derived

[EquationDiffStandard](VM.Managed.DAFUL.Equation.EquationDiffStandard.md), 
[EquationDiffUserSubroutine](VM.Managed.DAFUL.Equation.EquationDiffUserSubroutine.md)

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

[EquationFunction.InitialDisp](VM.Managed.DAFUL.Equation.EquationFunction.md\#VM\_Managed\_DAFUL\_Equation\_EquationFunction\_InitialDisp), 
[EquationFunction.Type](VM.Managed.DAFUL.Equation.EquationFunction.md\#VM\_Managed\_DAFUL\_Equation\_EquationFunction\_Type), 
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

### <a id="VM_Managed_DAFUL_Equation_EquationFunctionDiff__ctor"></a> EquationFunctionDiff\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Equation.EquationFunctionDiff" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected EquationFunctionDiff()
```

### <a id="VM_Managed_DAFUL_Equation_EquationFunctionDiff__ctor_VM_Managed_DAFUL_Equation_Equation_"></a> EquationFunctionDiff\(Equation\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Equation.EquationFunctionDiff" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected EquationFunctionDiff(Equation owner)
```

#### Parameters

`owner` [Equation](VM.Managed.DAFUL.Equation.Equation.md)

The owner equation.

## Properties

### <a id="VM_Managed_DAFUL_Equation_EquationFunctionDiff_DifferentialFunctionType"></a> DifferentialFunctionType

Gets or sets the type of the differential function.

```csharp
public EquationFunctionDiff.FunctionEquType DifferentialFunctionType { get; set; }
```

#### Property Value

 [EquationFunctionDiff](VM.Managed.DAFUL.Equation.EquationFunctionDiff.md).[FunctionEquType](VM.Managed.DAFUL.Equation.EquationFunctionDiff.FunctionEquType.md)

### <a id="VM_Managed_DAFUL_Equation_EquationFunctionDiff_InitialVel"></a> InitialVel

Gets or sets the initial velocity.

```csharp
public Variable InitialVel { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_Equation_EquationFunctionDiff_IsUseHold"></a> IsUseHold

Gets or sets a value indicating whether this instance use hold.

```csharp
public bool IsUseHold { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

