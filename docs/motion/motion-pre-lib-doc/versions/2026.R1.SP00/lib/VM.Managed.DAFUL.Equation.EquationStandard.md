# Class EquationStandard
<a id="VM_Managed_DAFUL_Equation_EquationStandard"></a>

Namespace: [VM.Managed.DAFUL.Equation](VM.Managed.DAFUL.Equation.md)  
Assembly: VMDEq.dll  

This class is to represent the equation charactoristic properties of standard type.

```csharp
public sealed class EquationStandard : EquationFunction, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[EquationFunction](VM.Managed.DAFUL.Equation.EquationFunction.md) ← 
[EquationStandard](VM.Managed.DAFUL.Equation.EquationStandard.md)

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

### <a id="VM_Managed_DAFUL_Equation_EquationStandard__ctor"></a> EquationStandard\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Equation.EquationStandard" data-throw-if-not-resolved="false"></xref> class.

```csharp
public EquationStandard()
```

### <a id="VM_Managed_DAFUL_Equation_EquationStandard__ctor_VM_Managed_DAFUL_Equation_Equation_"></a> EquationStandard\(Equation\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Equation.EquationStandard" data-throw-if-not-resolved="false"></xref> class.

```csharp
public EquationStandard(Equation owner)
```

#### Parameters

`owner` [Equation](VM.Managed.DAFUL.Equation.Equation.md)

The owner equation.

## Properties

### <a id="VM_Managed_DAFUL_Equation_EquationStandard_Function"></a> Function

Gets or sets the function.

```csharp
public Function Function { get; set; }
```

#### Property Value

 [Function](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Function.cs)

### <a id="VM_Managed_DAFUL_Equation_EquationStandard_Type"></a> Type

Gets the function type.

```csharp
public override EquationFunction.FunctionType Type { get; }
```

#### Property Value

 [EquationFunction](VM.Managed.DAFUL.Equation.EquationFunction.md).[FunctionType](VM.Managed.DAFUL.Equation.EquationFunction.FunctionType.md)

