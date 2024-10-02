#  Class ComponentAnalysis

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Component analysis

```csharp
public class ComponentAnalysis : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
[ComponentAnalysis](VM.Managed.DAFUL.GearTrain.ComponentAnalysis.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_ComponentAnalysis__ctor"></a> ComponentAnalysis\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.ComponentAnalysis" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ComponentAnalysis()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_ComponentAnalysis_EndConnectable"></a> EndConnectable

Gets or sets the end connectable.

```csharp
public IConnectable EndConnectable { get; set; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_GearTrain_ComponentAnalysis_EndPointInfo"></a> EndPointInfo

Gets or sets the end point.

```csharp
public ComponentAnalysis.BoundaryCondition EndPointInfo { get; set; }
```

#### Property Value

 [ComponentAnalysis](VM.Managed.DAFUL.GearTrain.ComponentAnalysis.md).[BoundaryCondition](VM.Managed.DAFUL.GearTrain.ComponentAnalysis.BoundaryCondition.md)

### <a id="VM_Managed_DAFUL_GearTrain_ComponentAnalysis_InputTypeOfAnalysis"></a> InputTypeOfAnalysis

Gets or sets the type of analysis.

```csharp
public ComponentAnalysis.AnalysisType InputTypeOfAnalysis { get; set; }
```

#### Property Value

 [ComponentAnalysis](VM.Managed.DAFUL.GearTrain.ComponentAnalysis.md).[AnalysisType](VM.Managed.DAFUL.GearTrain.ComponentAnalysis.AnalysisType.md)

### <a id="VM_Managed_DAFUL_GearTrain_ComponentAnalysis_MaximumNumberOfNode"></a> MaximumNumberOfNode

Gets or sets the maximum number of node.

```csharp
public ExpressionValueVariable MaximumNumberOfNode { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_ComponentAnalysis_ResultFilePath"></a> ResultFilePath

Gets or sets the result path.

```csharp
public string ResultFilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_GearTrain_ComponentAnalysis_RotationalPenalty"></a> RotationalPenalty

Gets or sets the rotational penalty.

```csharp
public ExpressionValueVariable RotationalPenalty { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_ComponentAnalysis_StartConnectable"></a> StartConnectable

Gets or sets the start connectable.

```csharp
public IConnectable StartConnectable { get; set; }
```

#### Property Value

 IConnectable

### <a id="VM_Managed_DAFUL_GearTrain_ComponentAnalysis_StartPointInfo"></a> StartPointInfo

Gets or sets the start point.

```csharp
public ComponentAnalysis.BoundaryCondition StartPointInfo { get; set; }
```

#### Property Value

 [ComponentAnalysis](VM.Managed.DAFUL.GearTrain.ComponentAnalysis.md).[BoundaryCondition](VM.Managed.DAFUL.GearTrain.ComponentAnalysis.BoundaryCondition.md)

### <a id="VM_Managed_DAFUL_GearTrain_ComponentAnalysis_TranslationalPenalty"></a> TranslationalPenalty

Gets or sets the translational penalty.

```csharp
public ExpressionValueVariable TranslationalPenalty { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_DAFUL_GearTrain_ComponentAnalysis__EndConnectable"></a> \_EndConnectable

Gets or sets the _ end connectable.

```csharp
public Linker<IConnectable> _EndConnectable { get; set; }
```

#### Property Value

 Linker<IConnectable\>

### <a id="VM_Managed_DAFUL_GearTrain_ComponentAnalysis__StartConnectable"></a> \_StartConnectable

Gets or sets the _ start connectable.

```csharp
public Linker<IConnectable> _StartConnectable { get; set; }
```

#### Property Value

 Linker<IConnectable\>

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_ComponentAnalysis_InitChild_VM_Unit_ConvertFactor_"></a> InitChild\(ConvertFactor\)

Initializes the child.

```csharp
public void InitChild(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

