# Class WebPropertyValue
<a id="VM_Managed_DAFUL_GearTrain_WebPropertyValue"></a>

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

The value for web property

```csharp
public class WebPropertyValue : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[WebPropertyValue](VM.Managed.DAFUL.GearTrain.WebPropertyValue.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_WebPropertyValue__ctor"></a> WebPropertyValue\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.WebPropertyValue" data-throw-if-not-resolved="false"></xref> class.

```csharp
public WebPropertyValue()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_WebPropertyValue_AutoCalculationForMassInformation"></a> AutoCalculationForMassInformation

Gets or sets a value indicating whether mass information is auto calculated or not.

```csharp
public bool AutoCalculationForMassInformation { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_GearTrain_WebPropertyValue_CADDataPath"></a> CADDataPath

Gets or sets the CAD Data path.

```csharp
public string CADDataPath { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_GearTrain_WebPropertyValue_ConstantOfWeb"></a> ConstantOfWeb

Gets or sets the constant of web.

```csharp
public ConstantWeb ConstantOfWeb { get; set; }
```

#### Property Value

 [ConstantWeb](VM.Managed.DAFUL.GearTrain.ConstantWeb.md)

### <a id="VM_Managed_DAFUL_GearTrain_WebPropertyValue_FEDataPath"></a> FEDataPath

Gets or sets the FE Data path.

```csharp
public string FEDataPath { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_GearTrain_WebPropertyValue_InDiameter"></a> InDiameter

Gets or sets the in radius.

```csharp
public ExpressionValueVariable InDiameter { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_WebPropertyValue_InputTypeOfWeb"></a> InputTypeOfWeb

Gets or sets the type of web.

```csharp
public WebPropertyValue.WebType InputTypeOfWeb { get; set; }
```

#### Property Value

 [WebPropertyValue](VM.Managed.DAFUL.GearTrain.WebPropertyValue.md).[WebType](VM.Managed.DAFUL.GearTrain.WebPropertyValue.WebType.md)

### <a id="VM_Managed_DAFUL_GearTrain_WebPropertyValue_InputTypeOfWebStiffnessMethod"></a> InputTypeOfWebStiffnessMethod

Gets or sets the type of web stiffness method.

```csharp
public WebPropertyValue.WebStiffnessMethodType InputTypeOfWebStiffnessMethod { get; set; }
```

#### Property Value

 [WebPropertyValue](VM.Managed.DAFUL.GearTrain.WebPropertyValue.md).[WebStiffnessMethodType](VM.Managed.DAFUL.GearTrain.WebPropertyValue.WebStiffnessMethodType.md)

### <a id="VM_Managed_DAFUL_GearTrain_WebPropertyValue_Mass"></a> Mass

Gets or sets the mass.

```csharp
public ExpressionValueVariable Mass { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_WebPropertyValue_MomentOfInertia"></a> MomentOfInertia

Gets or sets the moment of inertia.

```csharp
public Variable[] MomentOfInertia { get; set; }
```

#### Property Value

 Variable\[\]

### <a id="VM_Managed_DAFUL_GearTrain_WebPropertyValue_MomentOfInertiaValue"></a> MomentOfInertiaValue

Gets the moment of inertia value.

```csharp
public double[] MomentOfInertiaValue { get; }
```

#### Property Value

 double\[\]

### <a id="VM_Managed_DAFUL_GearTrain_WebPropertyValue_OutDiameter"></a> OutDiameter

Gets or sets the out radius.

```csharp
public ExpressionValueVariable OutDiameter { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_WebPropertyValue_PointCountPerSection"></a> PointCountPerSection

Gets or sets the number of point for stiffness per one section.

```csharp
public ExpressionValueVariable PointCountPerSection { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_WebPropertyValue_RepeatingSectionCount"></a> RepeatingSectionCount

Gets or sets the number of repeating section.

```csharp
public ExpressionValueVariable RepeatingSectionCount { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_WebPropertyValue_StiffnessScaleFactor"></a> StiffnessScaleFactor

Gets or sets the stiffness scale factor.

```csharp
public ExpressionValueVariable StiffnessScaleFactor { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_WebPropertyValue_Thickness"></a> Thickness

Gets or sets the thickness.

```csharp
public ExpressionValueVariable Thickness { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_WebPropertyValue_VariableOfWeb"></a> VariableOfWeb

Gets or sets the variable of web.

```csharp
public VariableWeb VariableOfWeb { get; set; }
```

#### Property Value

 [VariableWeb](VM.Managed.DAFUL.GearTrain.VariableWeb.md)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_WebPropertyValue_GetResultAfterCalculateWebStiffness_System_String___"></a> GetResultAfterCalculateWebStiffness\(string\[\]\)

Get result after beam stiffness calculate.

```csharp
public static double[] GetResultAfterCalculateWebStiffness(string[] calculatedResults)
```

#### Parameters

`calculatedResults` string\[\]

The calculated results

#### Returns

 double\[\]

### <a id="VM_Managed_DAFUL_GearTrain_WebPropertyValue_InitChild_VM_Unit_ConvertFactor_"></a> InitChild\(ConvertFactor\)

Initializes the child.

```csharp
public void InitChild(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The factor.

### <a id="VM_Managed_DAFUL_GearTrain_WebPropertyValue_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

