# Class MotorDesigner.EMForceSection.UserDefinedMethod
<a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_EMForceSection_UserDefinedMethod"></a>

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

user defined method class

```csharp
public class MotorDesigner.EMForceSection.UserDefinedMethod : MotorDesigner.EMForceSection.MethodBase, IObservableObject, IDisposableObject, ILinkable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, ILinkContainerEvent, IVerifiable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
[MotorDesigner.EMForceSection.MethodBase](VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.MethodBase.md) ← 
[MotorDesigner.EMForceSection.UserDefinedMethod](VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.UserDefinedMethod.md)

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

[MotorDesigner.EMForceSection.MethodBase.Initialize\(Unit.ConvertFactor\)](VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.MethodBase.md\#VM\_Managed\_DAFUL\_GearTrain\_MotorDesigner\_EMForceSection\_MethodBase\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[MotorDesigner.EMForceSection.MethodBase.TypeOfGeometryCreation](VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.MethodBase.md\#VM\_Managed\_DAFUL\_GearTrain\_MotorDesigner\_EMForceSection\_MethodBase\_TypeOfGeometryCreation), 
[MotorDesigner.EMForceSection.MethodBase.Scale](VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.MethodBase.md\#VM\_Managed\_DAFUL\_GearTrain\_MotorDesigner\_EMForceSection\_MethodBase\_Scale), 
[MotorDesigner.EMForceSection.MethodBase.RadialSpline](VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.MethodBase.md\#VM\_Managed\_DAFUL\_GearTrain\_MotorDesigner\_EMForceSection\_MethodBase\_RadialSpline), 
[MotorDesigner.EMForceSection.MethodBase.TangentialSpline](VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.MethodBase.md\#VM\_Managed\_DAFUL\_GearTrain\_MotorDesigner\_EMForceSection\_MethodBase\_TangentialSpline), 
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

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_EMForceSection_UserDefinedMethod__ctor"></a> UserDefinedMethod\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.UserDefinedMethod" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UserDefinedMethod()
```

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_EMForceSection_UserDefinedMethod_Harmonics"></a> Harmonics

Gets or sets the harmonics.

```csharp
public MotorDesigner.EMForceSection.Harmonic[] Harmonics { get; set; }
```

#### Property Value

 [MotorDesigner](VM.Managed.DAFUL.GearTrain.MotorDesigner.md).[EMForceSection](VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.md).[Harmonic](VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.Harmonic.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_EMForceSection_UserDefinedMethod_NumberOfMagnetPole"></a> NumberOfMagnetPole

Gets or sets the number of magnet pole.

```csharp
public ExpressionValueVariable NumberOfMagnetPole { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_EMForceSection_UserDefinedMethod_NumberOfPhase"></a> NumberOfPhase

Gets or sets the number of phase.

```csharp
public ExpressionValueVariable NumberOfPhase { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_EMForceSection_UserDefinedMethod_RotorVectorSet"></a> RotorVectorSet

Gets or sets the vector set for rotor.

```csharp
public MotorDesigner.EMForceSection.VectorUserDefinedCreator[] RotorVectorSet { get; set; }
```

#### Property Value

 [MotorDesigner](VM.Managed.DAFUL.GearTrain.MotorDesigner.md).[EMForceSection](VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.md).[VectorUserDefinedCreator](VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.VectorUserDefinedCreator.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_EMForceSection_UserDefinedMethod_StatorVectorSet"></a> StatorVectorSet

Gets or sets the vector set for stator.

```csharp
public MotorDesigner.EMForceSection.VectorUserDefinedCreator[] StatorVectorSet { get; set; }
```

#### Property Value

 [MotorDesigner](VM.Managed.DAFUL.GearTrain.MotorDesigner.md).[EMForceSection](VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.md).[VectorUserDefinedCreator](VM.Managed.DAFUL.GearTrain.MotorDesigner.EMForceSection.VectorUserDefinedCreator.md)\[\]

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_EMForceSection_UserDefinedMethod_TNCurveSpline"></a> TNCurveSpline

Gets or sets the T-N curve spline.

```csharp
public Spline TNCurveSpline { get; set; }
```

#### Property Value

 [Spline](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Spline.cs)

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_EMForceSection_UserDefinedMethod_TNCurveValue"></a> TNCurveValue

Gets or sets the T-N curve.

```csharp
public SplineValue TNCurveValue { get; set; }
```

#### Property Value

 [SplineValue](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Spline.cs)

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_EMForceSection_UserDefinedMethod_TypeOfGeometryCreation"></a> TypeOfGeometryCreation

Gets the method type.

```csharp
public override MotorDesigner.GeometryCreationType TypeOfGeometryCreation { get; }
```

#### Property Value

 [MotorDesigner](VM.Managed.DAFUL.GearTrain.MotorDesigner.md).[GeometryCreationType](VM.Managed.DAFUL.GearTrain.MotorDesigner.GeometryCreationType.md)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_EMForceSection_UserDefinedMethod_CanBeDestroy_System_Object_"></a> CanBeDestroy\(object\)

Whether can be destroy or not.

```csharp
protected override bool CanBeDestroy(object objNotifier)
```

#### Parameters

`objNotifier` object

The destroy object.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_EMForceSection_UserDefinedMethod_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_DAFUL_GearTrain_MotorDesigner_EMForceSection_UserDefinedMethod_LinkRequestDestroying_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroying\(object, LinkEventArgs\)

The destroying event occured from the linked object.

```csharp
protected override void LinkRequestDestroying(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

The linked object.

`arg` LinkEventArgs

The destroy event information.

