# Class ToothStiffness
<a id="VM_Managed_DAFUL_GearTrain_ToothStiffness"></a>

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

ToothStiffness

```csharp
public class ToothStiffness : GearPropertyBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[GearPropertyBase](VM.Managed.DAFUL.GearTrain.GearPropertyBase.md) ← 
[ToothStiffness](VM.Managed.DAFUL.GearTrain.ToothStiffness.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_ToothStiffness__ctor"></a> ToothStiffness\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.ToothStiffness" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ToothStiffness()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_ToothStiffness_BeamToothSplineValues"></a> BeamToothSplineValues

Gets or sets the beam tooth spline values.

```csharp
public SplineValue[] BeamToothSplineValues { get; set; }
```

#### Property Value

 [SplineValue](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Spline.cs)\[\]

#### Exceptions

 Exception

SplineValue list is null.
or
SplineValue list is null.
or
SplineValue is null.

### <a id="VM_Managed_DAFUL_GearTrain_ToothStiffness_FEToothSplineValues"></a> FEToothSplineValues

Gets or sets the fe tooth spline values.

```csharp
public SplineValue[] FEToothSplineValues { get; set; }
```

#### Property Value

 [SplineValue](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Spline.cs)\[\]

#### Exceptions

 Exception

SplineValue list is null.
or
SplineValue list is null.
or
SplineValue is null.

### <a id="VM_Managed_DAFUL_GearTrain_ToothStiffness_ISO6336ToothSplineValues"></a> ISO6336ToothSplineValues

Gets or sets the is o6336 tooth spline values.

```csharp
public SplineValue[] ISO6336ToothSplineValues { get; set; }
```

#### Property Value

 [SplineValue](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Spline.cs)\[\]

#### Exceptions

 Exception

SplineValue list is null.
or
SplineValue list is null.
or
SplineValue is null.

### <a id="VM_Managed_DAFUL_GearTrain_ToothStiffness_MethodTypes"></a> MethodTypes

Gets or sets the method types.

```csharp
public ToothStiffness.MethodType[] MethodTypes { get; set; }
```

#### Property Value

 [ToothStiffness](VM.Managed.DAFUL.GearTrain.ToothStiffness.md).[MethodType](VM.Managed.DAFUL.GearTrain.ToothStiffness.MethodType.md)\[\]

#### Exceptions

 Exception

MethodType list is null.
or
MethodType list is null.

### <a id="VM_Managed_DAFUL_GearTrain_ToothStiffness_UserInputFilePaths"></a> UserInputFilePaths

Gets or sets the user input file paths.

```csharp
public string[] UserInputFilePaths { get; set; }
```

#### Property Value

 string\[\]

#### Exceptions

 Exception

UserInputFilePath list is null.
or
UserInputFilePath list is null.

### <a id="VM_Managed_DAFUL_GearTrain_ToothStiffness_UserInputToothSplineValues"></a> UserInputToothSplineValues

Gets or sets the user input tooth spline values.

```csharp
public SplineValue[] UserInputToothSplineValues { get; set; }
```

#### Property Value

 [SplineValue](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Spline.cs)\[\]

#### Exceptions

 Exception

SplineValue list is null.
or
SplineValue list is null.
or
SplineValue is null.

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_ToothStiffness_GetAllSplineValue"></a> GetAllSplineValue\(\)

Gets all spline value.

```csharp
public SplineValue[] GetAllSplineValue()
```

#### Returns

 [SplineValue](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Spline.cs)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_ToothStiffness_GetSplineValue_VM_Managed_DAFUL_GearTrain_ToothStiffness_MethodType_System_Int32_"></a> GetSplineValue\(MethodType, int\)

Gets the spline value.

```csharp
public SplineValue GetSplineValue(ToothStiffness.MethodType type, int nIdx)
```

#### Parameters

`type` [ToothStiffness](VM.Managed.DAFUL.GearTrain.ToothStiffness.md).[MethodType](VM.Managed.DAFUL.GearTrain.ToothStiffness.MethodType.md)

The type.

`nIdx` int

Index of the n.

#### Returns

 [SplineValue](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Spline.cs)

### <a id="VM_Managed_DAFUL_GearTrain_ToothStiffness_GetSplineValue_System_Int32_"></a> GetSplineValue\(int\)

Gets the spline value.

```csharp
public SplineValue GetSplineValue(int nIdx)
```

#### Parameters

`nIdx` int

Index of the n.

#### Returns

 [SplineValue](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Spline.cs)

### <a id="VM_Managed_DAFUL_GearTrain_ToothStiffness_InitChild_System_Int32_"></a> InitChild\(int\)

Initializes the child.

```csharp
public override void InitChild(int nNum)
```

#### Parameters

`nNum` int

The n number.

### <a id="VM_Managed_DAFUL_GearTrain_ToothStiffness_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

### <a id="VM_Managed_DAFUL_GearTrain_ToothStiffness_RemoveSplineValue_VM_Managed_DAFUL_GearTrain_ToothStiffness_MethodType_System_Int32_"></a> RemoveSplineValue\(MethodType, int\)

Removes the spline value.

```csharp
public void RemoveSplineValue(ToothStiffness.MethodType type, int nIdx)
```

#### Parameters

`type` [ToothStiffness](VM.Managed.DAFUL.GearTrain.ToothStiffness.md).[MethodType](VM.Managed.DAFUL.GearTrain.ToothStiffness.MethodType.md)

The type.

`nIdx` int

Index of the n.

### <a id="VM_Managed_DAFUL_GearTrain_ToothStiffness_ReplaceSplineValue_VM_Managed_DAFUL_GearTrain_ToothStiffness_MethodType_System_Int32_VM_Managed_DAFUL_SplineValue_"></a> ReplaceSplineValue\(MethodType, int, SplineValue\)

Replaces the spline value.

```csharp
public void ReplaceSplineValue(ToothStiffness.MethodType type, int nIdx, SplineValue sv)
```

#### Parameters

`type` [ToothStiffness](VM.Managed.DAFUL.GearTrain.ToothStiffness.md).[MethodType](VM.Managed.DAFUL.GearTrain.ToothStiffness.MethodType.md)

The type.

`nIdx` int

Index of the n.

`sv` [SplineValue](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Spline.cs)

The sv.

### <a id="VM_Managed_DAFUL_GearTrain_ToothStiffness_SetMethodType_System_Int32_VM_Managed_DAFUL_GearTrain_ToothStiffness_MethodType_"></a> SetMethodType\(int, MethodType\)

Sets the type of the method.

```csharp
public void SetMethodType(int nIdx, ToothStiffness.MethodType typeMethod)
```

#### Parameters

`nIdx` int

Index of the n.

`typeMethod` [ToothStiffness](VM.Managed.DAFUL.GearTrain.ToothStiffness.md).[MethodType](VM.Managed.DAFUL.GearTrain.ToothStiffness.MethodType.md)

The type method.

### <a id="VM_Managed_DAFUL_GearTrain_ToothStiffness_SetUserInputFilePath_System_Int32_System_String_"></a> SetUserInputFilePath\(int, string\)

Sets the user input file path.

```csharp
public void SetUserInputFilePath(int nIdx, string strUserInputFilePath)
```

#### Parameters

`nIdx` int

Index of the n.

`strUserInputFilePath` string

The string user input file path.

