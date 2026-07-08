# Class PowerFlow
<a id="VM_Managed_DAFUL_GearTrain_PowerFlow"></a>

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

Power Flow

```csharp
public class PowerFlow : LinkContainer, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[PowerFlow](VM.Managed.DAFUL.GearTrain.PowerFlow.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow__ctor"></a> PowerFlow\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.PowerFlow" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PowerFlow()
```

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow__ctor_VM_Models_Pre_IOwned_"></a> PowerFlow\(IOwned\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.PowerFlow" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PowerFlow(IOwned owner)
```

#### Parameters

`owner` IOwned

The owner object.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_DurationValue"></a> DurationValue

Gets or sets the duration.

```csharp
public double DurationValue { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_EndTimeValue"></a> EndTimeValue

Gets or sets the end time.

```csharp
public double EndTimeValue { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_GearPairs"></a> GearPairs

Gets or sets the gear sets.

```csharp
public GearPair[] GearPairs { get; set; }
```

#### Property Value

 [GearPair](VM.Managed.DAFUL.GearTrain.GearPair.md)\[\]

#### Exceptions

 Exception

GearSet list is null.
            or
            GearSet list is null.
            or
            GearSet is null.

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_InputEndSpeedValue"></a> InputEndSpeedValue

Gets or sets the input end speed.

```csharp
public double InputEndSpeedValue { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_InputPowerFilePath"></a> InputPowerFilePath

Gets or sets the input power path.

```csharp
public string InputPowerFilePath { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_InputPowerValue"></a> InputPowerValue

Gets or sets the input power.

```csharp
public double InputPowerValue { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_InputShaftSet"></a> InputShaftSet

Gets or sets the input shaft set.

```csharp
public IHasPowerLoad InputShaftSet { get; set; }
```

#### Property Value

 [IHasPowerLoad](VM.Managed.DAFUL.GearTrain.IHasPowerLoad.md)

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_InputShaftSetInfos"></a> InputShaftSetInfos

Gets or sets the input shaft set information.

```csharp
public InputShaftSetInfo[] InputShaftSetInfos { get; set; }
```

#### Property Value

 [InputShaftSetInfo](VM.Managed.DAFUL.GearTrain.InputShaftSetInfo.md)\[\]

#### Exceptions

 Exception

InputShaftSetInfo list is null.
or
InputShaftSetInfo list is null.
or
InputShaftSetInfo is null.

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_InputSpeedFilePath"></a> InputSpeedFilePath

Gets or sets the input speed path.

```csharp
public string InputSpeedFilePath { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_InputStartSpeedValue"></a> InputStartSpeedValue

Gets or sets the input start speed.

```csharp
public double InputStartSpeedValue { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_IsExternable"></a> IsExternable

Gets a value indicating whether this instance is Externable.

```csharp
public override bool IsExternable { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_IsUseCW"></a> IsUseCW

Gets or sets a value indicating whether this instance is cw.

```csharp
public bool IsUseCW { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_MaxTorqueValue"></a> MaxTorqueValue

Gets or sets the max torque.

```csharp
public double MaxTorqueValue { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_NameOfResult"></a> NameOfResult

Gets or sets the name of the result.

```csharp
public string NameOfResult { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_NumberOfInterpolation"></a> NumberOfInterpolation

Gets or sets the number of interpolation.

```csharp
public double NumberOfInterpolation { get; set; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_OutputShaftSetInfos"></a> OutputShaftSetInfos

Gets or sets the output shaft set information.

```csharp
public OutputShaftSetInfo[] OutputShaftSetInfos { get; set; }
```

#### Property Value

 [OutputShaftSetInfo](VM.Managed.DAFUL.GearTrain.OutputShaftSetInfo.md)\[\]

#### Exceptions

 Exception

OutputShaftSetInfo list is null.
or
OutputShaftSetInfo list is null.
or
OutputShaftSetInfo is null.

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_SamplingFrequencyValue"></a> SamplingFrequencyValue

Gets or sets the sampling frequency.

```csharp
public uint SamplingFrequencyValue { get; set; }
```

#### Property Value

 uint

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_TMScenarioFile"></a> TMScenarioFile

Gets or sets the TM scenario file.

```csharp
public string TMScenarioFile { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_TypeOfSimulation"></a> TypeOfSimulation

Gets or sets the type.

```csharp
public PowerFlow.SimulationType TypeOfSimulation { get; set; }
```

#### Property Value

 [PowerFlow](VM.Managed.DAFUL.GearTrain.PowerFlow.md).[SimulationType](VM.Managed.DAFUL.GearTrain.PowerFlow.SimulationType.md)

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_UsableOutputShaftSetInfos"></a> UsableOutputShaftSetInfos

Gets the usable output shaftset information

```csharp
public OutputShaftSetInfo[] UsableOutputShaftSetInfos { get; }
```

#### Property Value

 [OutputShaftSetInfo](VM.Managed.DAFUL.GearTrain.OutputShaftSetInfo.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_VehicleSimulatorResultFile"></a> VehicleSimulatorResultFile

Gets or sets the vehicle simulator result file.

```csharp
public string VehicleSimulatorResultFile { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow__InputShaftSet"></a> \_InputShaftSet

Gets or sets the _ input shaft set.

```csharp
public Linker<IHasPowerLoad> _InputShaftSet { get; set; }
```

#### Property Value

 Linker<[IHasPowerLoad](VM.Managed.DAFUL.GearTrain.IHasPowerLoad.md)\>

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_AddGearSetForPair_VM_Managed_DAFUL_GearTrain_GearPair_"></a> AddGearSetForPair\(GearPair\)

Adds the gear set for pair.

```csharp
public void AddGearSetForPair(GearPair gp)
```

#### Parameters

`gp` [GearPair](VM.Managed.DAFUL.GearTrain.GearPair.md)

The gp.

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_AddInputShaftSetInfo_VM_Managed_DAFUL_GearTrain_IHasPowerLoad_"></a> AddInputShaftSetInfo\(IHasPowerLoad\)

Add to input shaft set information.

```csharp
public InputShaftSetInfo AddInputShaftSetInfo(IHasPowerLoad ss)
```

#### Parameters

`ss` [IHasPowerLoad](VM.Managed.DAFUL.GearTrain.IHasPowerLoad.md)

The input shaft set.

#### Returns

 [InputShaftSetInfo](VM.Managed.DAFUL.GearTrain.InputShaftSetInfo.md)

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_AddOutputShaftSetInfo_VM_Managed_DAFUL_GearTrain_IHasPowerLoad_"></a> AddOutputShaftSetInfo\(IHasPowerLoad\)

Add to output shaft set information.

```csharp
public OutputShaftSetInfo AddOutputShaftSetInfo(IHasPowerLoad ss)
```

#### Parameters

`ss` [IHasPowerLoad](VM.Managed.DAFUL.GearTrain.IHasPowerLoad.md)

The output shaft set.

#### Returns

 [OutputShaftSetInfo](VM.Managed.DAFUL.GearTrain.OutputShaftSetInfo.md)

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_ClearInput"></a> ClearInput\(\)

Clears input data.

```csharp
public void ClearInput()
```

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_ClearOutput"></a> ClearOutput\(\)

Clears output data.

```csharp
public void ClearOutput()
```

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_GetInputSplineValue_VM_Managed_Document3D_System_ValueTuple_System_String_VM_Managed_DAFUL_SplineValue____System_String_"></a> GetInputSplineValue\(Document3D, \(string, SplineValue\)\[\], string\)

```csharp
public static SplineValue GetInputSplineValue(Document3D doc, (string, SplineValue)[] splineTuple, string strShaftSet)
```

#### Parameters

`doc` Document3D

`splineTuple` \(string, [SplineValue](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Spline.cs)\)\[\]

`strShaftSet` string

#### Returns

 [SplineValue](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Spline.cs)

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_GetOutputSplineValue_VM_Managed_Document3D_System_ValueTuple_System_String_VM_Managed_DAFUL_SplineValue____System_String_"></a> GetOutputSplineValue\(Document3D, \(string, SplineValue\)\[\], string\)

```csharp
public static SplineValue GetOutputSplineValue(Document3D doc, (string, SplineValue)[] splineTuple, string strShaftSet)
```

#### Parameters

`doc` Document3D

`splineTuple` \(string, [SplineValue](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Spline.cs)\)\[\]

`strShaftSet` string

#### Returns

 [SplineValue](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Spline.cs)

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_GetSplineValueFromResultFile_System_String_"></a> GetSplineValueFromResultFile\(string\)

Gets spline value from TM scenario file.

```csharp
public static (string, SplineValue)[] GetSplineValueFromResultFile(string strResultScenarioFile)
```

#### Parameters

`strResultScenarioFile` string

#### Returns

 \(string, [SplineValue](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Spline.cs)\)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_GetSplineValueWithPowerLoad_System_ValueTuple_System_String_VM_Managed_DAFUL_SplineValue____System_String_"></a> GetSplineValueWithPowerLoad\(\(string, SplineValue\)\[\], string\)

Gets the spline value with power load

```csharp
public static SplineValue GetSplineValueWithPowerLoad((string, SplineValue)[] splineTuple, string strPowerLoad)
```

#### Parameters

`splineTuple` \(string, [SplineValue](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Spline.cs)\)\[\]

The spline tuple

`strPowerLoad` string

The power load name

#### Returns

 [SplineValue](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Spline.cs)

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_Remove_VM_Managed_DAFUL_GearTrain_IHasPowerLoad_VM_Managed_DAFUL_GearTrain_PowerLoad_"></a> Remove\(IHasPowerLoad, PowerLoad\)

Removes the power load information.

```csharp
public void Remove(IHasPowerLoad ss, PowerLoad pl)
```

#### Parameters

`ss` [IHasPowerLoad](VM.Managed.DAFUL.GearTrain.IHasPowerLoad.md)

The shaftset.

`pl` [PowerLoad](VM.Managed.DAFUL.GearTrain.PowerLoad.md)

The power load.

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_RemoveGearSetForPair_VM_Managed_DAFUL_GearTrain_GeometryInfoBase_"></a> RemoveGearSetForPair\(GeometryInfoBase\)

Removes the gear set for pair.

```csharp
public void RemoveGearSetForPair(GeometryInfoBase geometryInfoBase)
```

#### Parameters

`geometryInfoBase` [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md)

The geometry info

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_RemoveInputShaftSetInfo_VM_Managed_DAFUL_GearTrain_InputShaftSetInfo_"></a> RemoveInputShaftSetInfo\(InputShaftSetInfo\)

Removes the input shaft set information.

```csharp
public void RemoveInputShaftSetInfo(InputShaftSetInfo info)
```

#### Parameters

`info` [InputShaftSetInfo](VM.Managed.DAFUL.GearTrain.InputShaftSetInfo.md)

The information.

### <a id="VM_Managed_DAFUL_GearTrain_PowerFlow_RemoveOutputShaftSetInfo_VM_Managed_DAFUL_GearTrain_OutputShaftSetInfo_"></a> RemoveOutputShaftSetInfo\(OutputShaftSetInfo\)

Removes the output shaft set information.

```csharp
public void RemoveOutputShaftSetInfo(OutputShaftSetInfo info)
```

#### Parameters

`info` [OutputShaftSetInfo](VM.Managed.DAFUL.GearTrain.OutputShaftSetInfo.md)

The information.

