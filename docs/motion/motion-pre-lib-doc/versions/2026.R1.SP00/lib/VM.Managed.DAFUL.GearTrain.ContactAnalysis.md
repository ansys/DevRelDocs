# Class ContactAnalysis
<a id="VM_Managed_DAFUL_GearTrain_ContactAnalysis"></a>

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Contact analysis

```csharp
public class ContactAnalysis : GearPropertyBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[GearPropertyBase](VM.Managed.DAFUL.GearTrain.GearPropertyBase.md) ← 
[ContactAnalysis](VM.Managed.DAFUL.GearTrain.ContactAnalysis.md)

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

[GearPropertyBase.InitChild\(int\)](VM.Managed.DAFUL.GearTrain.GearPropertyBase.md\#VM\_Managed\_DAFUL\_GearTrain\_GearPropertyBase\_InitChild\_System\_Int32\_), 
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
[LinkableBase.OnDeserialization\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs), 
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

### <a id="VM_Managed_DAFUL_GearTrain_ContactAnalysis__ctor"></a> ContactAnalysis\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.ContactAnalysis" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ContactAnalysis()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_ContactAnalysis_IsUsePower"></a> IsUsePower

Gets or sets a value indicating whether [use power].

```csharp
public bool IsUsePower { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_GearTrain_ContactAnalysis_Power"></a> Power

Gets or sets the power.

```csharp
public ExpressionValueVariable Power { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_ContactAnalysis_RatingAnalysis"></a> RatingAnalysis

Gets or sets the rating analysis.

```csharp
public Rating RatingAnalysis { get; set; }
```

#### Property Value

 [Rating](VM.Managed.DAFUL.GearTrain.Rating.md)

### <a id="VM_Managed_DAFUL_GearTrain_ContactAnalysis_ResultFilePath"></a> ResultFilePath

Gets or sets the result path.

```csharp
public string ResultFilePath { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_GearTrain_ContactAnalysis_SamplingFrequency"></a> SamplingFrequency

Gets or sets the sampling frequency.

```csharp
public ExpressionValueVariable SamplingFrequency { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_ContactAnalysis_Speed"></a> Speed

Gets or sets the speed.

```csharp
public ExpressionValueVariable Speed { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_ContactAnalysis_TransmissionErrors"></a> TransmissionErrors

Gets or sets the transmission errors.

```csharp
public TransmissionError[] TransmissionErrors { get; set; }
```

#### Property Value

 [TransmissionError](VM.Managed.DAFUL.GearTrain.TransmissionError.md)\[\]

#### Exceptions

 Exception

SplineValue list is null.
or
SplineValue list is null.
or
SplineValue is null.

### <a id="VM_Managed_DAFUL_GearTrain_ContactAnalysis_TypeOfAlign"></a> TypeOfAlign

Gets or sets the align type.

```csharp
public ContactAnalysis.AlignType TypeOfAlign { get; set; }
```

#### Property Value

 [ContactAnalysis](VM.Managed.DAFUL.GearTrain.ContactAnalysis.md).[AlignType](VM.Managed.DAFUL.GearTrain.ContactAnalysis.AlignType.md)

### <a id="VM_Managed_DAFUL_GearTrain_ContactAnalysis_TypeOfAnalysis"></a> TypeOfAnalysis

Gets or sets the analysis type.

```csharp
public ContactAnalysis.AnalysisType TypeOfAnalysis { get; set; }
```

#### Property Value

 [ContactAnalysis](VM.Managed.DAFUL.GearTrain.ContactAnalysis.md).[AnalysisType](VM.Managed.DAFUL.GearTrain.ContactAnalysis.AnalysisType.md)

### <a id="VM_Managed_DAFUL_GearTrain_ContactAnalysis_UseGearPairs"></a> UseGearPairs

Gets or sets the gear pair usage.

```csharp
public bool[] UseGearPairs { get; set; }
```

#### Property Value

 bool\[\]

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_ContactAnalysis_InitChild_System_Int32_"></a> InitChild\(int\)

Initializes the child.

```csharp
public override void InitChild(int nNum)
```

#### Parameters

`nNum` int

The n number.

### <a id="VM_Managed_DAFUL_GearTrain_ContactAnalysis_InitChildForPair_System_Int32_"></a> InitChildForPair\(int\)

Initializes the child for pair.

```csharp
public void InitChildForPair(int nNum)
```

#### Parameters

`nNum` int

The n number.

### <a id="VM_Managed_DAFUL_GearTrain_ContactAnalysis_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

### <a id="VM_Managed_DAFUL_GearTrain_ContactAnalysis_RemoveSplineValue_System_String_"></a> RemoveSplineValue\(string\)

Removes the spline value.

```csharp
public void RemoveSplineValue(string strName)
```

#### Parameters

`strName` string

Name of the string.

### <a id="VM_Managed_DAFUL_GearTrain_ContactAnalysis_ReplaceSplineValue_System_Int32_VM_Managed_DAFUL_GearTrain_TransmissionError_"></a> ReplaceSplineValue\(int, TransmissionError\)

Replaces the spline value.

```csharp
public void ReplaceSplineValue(int nIdx, TransmissionError te)
```

#### Parameters

`nIdx` int

Index of the n.

`te` [TransmissionError](VM.Managed.DAFUL.GearTrain.TransmissionError.md)

The te.

