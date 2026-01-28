# Class BuilderSingleSprocketSimple
<a id="VM_Managed_CAD_Sprocket_BuilderSingleSprocketSimple"></a>

Namespace: [VM.Managed.CAD.Sprocket](VM.Managed.CAD.Sprocket.md)  
Assembly: VMDSprocket.dll  

The single sprocket builder class.

```csharp
public class BuilderSingleSprocketSimple : BuilderSprocket, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IHasReplaceableEntity
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
Builder ← 
BuilderTransform ← 
BuilderColorGeom ← 
BuilderHasTransform ← 
[BuilderSprocket](VM.Managed.CAD.Sprocket.BuilderSprocket.md) ← 
[BuilderSingleSprocketSimple](VM.Managed.CAD.Sprocket.BuilderSingleSprocketSimple.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObjectBase, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
IHasKeyObject, 
ILinkContainerEvent, 
IVerifiable, 
[IHistoryObjectSerializable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/Interfaces.cs), 
IAttributeContainer, 
IHasReplaceableEntity

#### Inherited Members

[BuilderSprocket.m\_LinkEventReason](VM.Managed.CAD.Sprocket.BuilderSprocket.md\#VM\_Managed\_CAD\_Sprocket\_BuilderSprocket\_m\_LinkEventReason), 
[BuilderSprocket.SetToCreateShaft\(bool\)](VM.Managed.CAD.Sprocket.BuilderSprocket.md\#VM\_Managed\_CAD\_Sprocket\_BuilderSprocket\_SetToCreateShaft\_System\_Boolean\_), 
[BuilderSprocket.SetToApplyToFileProperty\(bool\)](VM.Managed.CAD.Sprocket.BuilderSprocket.md\#VM\_Managed\_CAD\_Sprocket\_BuilderSprocket\_SetToApplyToFileProperty\_System\_Boolean\_), 
[BuilderSprocket.SetTransform\(TMatrix\)](VM.Managed.CAD.Sprocket.BuilderSprocket.md\#VM\_Managed\_CAD\_Sprocket\_BuilderSprocket\_SetTransform\_VM\_Managed\_TMatrix\_), 
[BuilderSprocket.SprocketType](VM.Managed.CAD.Sprocket.BuilderSprocket.md\#VM\_Managed\_CAD\_Sprocket\_BuilderSprocket\_SprocketType), 
[BuilderSprocket.BooleanType](VM.Managed.CAD.Sprocket.BuilderSprocket.md\#VM\_Managed\_CAD\_Sprocket\_BuilderSprocket\_BooleanType), 
[BuilderSprocket.ProfileType](VM.Managed.CAD.Sprocket.BuilderSprocket.md\#VM\_Managed\_CAD\_Sprocket\_BuilderSprocket\_ProfileType), 
[BuilderSprocket.ShaftWidth](VM.Managed.CAD.Sprocket.BuilderSprocket.md\#VM\_Managed\_CAD\_Sprocket\_BuilderSprocket\_ShaftWidth), 
[BuilderSprocket.ShaftDiameter](VM.Managed.CAD.Sprocket.BuilderSprocket.md\#VM\_Managed\_CAD\_Sprocket\_BuilderSprocket\_ShaftDiameter), 
[BuilderSprocket.CreateShaft](VM.Managed.CAD.Sprocket.BuilderSprocket.md\#VM\_Managed\_CAD\_Sprocket\_BuilderSprocket\_CreateShaft), 
[BuilderSprocket.SprocketWidth](VM.Managed.CAD.Sprocket.BuilderSprocket.md\#VM\_Managed\_CAD\_Sprocket\_BuilderSprocket\_SprocketWidth), 
[BuilderSprocket.Transform](VM.Managed.CAD.Sprocket.BuilderSprocket.md\#VM\_Managed\_CAD\_Sprocket\_BuilderSprocket\_Transform), 
[BuilderSprocket.ApplyToFileProperty](VM.Managed.CAD.Sprocket.BuilderSprocket.md\#VM\_Managed\_CAD\_Sprocket\_BuilderSprocket\_ApplyToFileProperty), 
[BuilderSprocket.Uneditable](VM.Managed.CAD.Sprocket.BuilderSprocket.md\#VM\_Managed\_CAD\_Sprocket\_BuilderSprocket\_Uneditable), 
BuilderHasTransform.TransformationMatrix, 
BuilderHasTransform.Transform, 
BuilderHasTransform.IsParameterized, 
BuilderColorGeom.m\_color, 
BuilderColorGeom.CheckValidationAboutBuild\(\), 
BuilderColorGeom.OnDeserialization\(object\), 
BuilderColorGeom.FillParameter\(BuilderParamBase\), 
BuilderColorGeom.Color, 
BuilderColorGeom.DrawingColor, 
BuilderTransform.SetTransform\(TMatrix\), 
BuilderTransform.IsParameterized, 
Builder.CheckValidationAboutBuild\(\), 
Builder.CheckCircularReference\(ObjectBase\), 
Builder.ChangeDataForCircularReference\(\), 
Builder.GetUnnamedObjectName\(object\), 
Builder.FindLocal\(string\), 
Builder.CopyFilePathWhenImportBuilder\(Builder\), 
Builder.Contains\(Type\), 
Builder.GetBodyType\(\), 
Builder.ReplaceData\(string, object\), 
Builder.GetNameAttribute\(string, ref List<string\>\), 
Builder.AddUneditableAttribute\(\), 
Builder.GetParentBody\(\), 
Builder.Clone\(\), 
Builder.Initialize\(Unit.ConvertFactor\), 
Builder.OnDeserialization\(object\), 
Builder.CreateParameter\(\), 
Builder.FillParameter\(BuilderParamBase\), 
Builder.LinkRequestUpdate\(object, LinkEventArgs\), 
Builder.PostWorkWhenFailedToGetXmlString\(\), 
Builder.GetFilledParameter\(\), 
Builder.GetXmlString\(\), 
Builder.HasReplaceableEntity\(IObjectBase\), 
Builder.ReplaceEntity\(IObjectBase, IObjectBase\), 
Builder.GetFactorForLength\(\), 
Builder.CheckCircularReferenceForPoint\(PointBase, ObjectBase\), 
Builder.CheckCircularReferenceForDirection\(DirectionBase, ObjectBase\), 
Builder.CheckCircularReferenceForOrientation\(OrientationBase, ObjectBase\), 
Builder.CheckCircularReferenceForTransform\(TransformBase, ObjectBase\), 
Builder.GetUnitScale\(\), 
Builder.InitialKernelLengthUnit, 
Builder.IsExternable, 
Builder.Uneditable, 
Builder.TypeOfBuilder, 
Builder.Transparency, 
Object<ObjectEventCore\>.GetKey\(\), 
Object<ObjectEventCore\>.Initialize\(Unit.ConvertFactor\), 
Object<ObjectEventCore\>.SetIconColor\(Canvas\), 
Object<ObjectEventCore\>.OnDeserialization\(object\), 
Object<ObjectEventCore\>.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
Object<ObjectEventCore\>.RollbackEvent\(\), 
Object<ObjectEventCore\>.OnDeserializedCore\(object\), 
Object<ObjectEventCore\>.Key, 
Object<ObjectEventCore\>.UntypedEventCore, 
Object<ObjectEventCore\>.EventCore, 
Object<ObjectEventCore\>.Attributes, 
ObjectBase.ReplaceEventCore\(ObjectEventCore\), 
ObjectBase.SetModifiedCore\(ModifiedResult.ModifiedType\), 
ObjectBase.AddPostDeserialize\(StreamingContext\), 
ObjectBase.LinkAddedToDocumentCore\(IOwned, bool\), 
ObjectBase.SetModified\(ModifiedResult.ModifiedType\), 
ObjectBase.SetModified\(\), 
ObjectBase.SetModified\(ModifiedResult.ModifiedType, IDocument\), 
ObjectBase.DestroyObject\(object, LinkEventArgs\), 
ObjectBase.DestroyObject\(DestroyEventArgs\), 
ObjectBase.DestroyObject\(\), 
ObjectBase.Initialize\(Unit.ConvertFactor\), 
ObjectBase.FixUp\(ObjectBase\), 
ObjectBase.DoWorkAfterUpdateContents\(\), 
ObjectBase.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\), 
ObjectBase.SetIconColor\(Canvas\), 
ObjectBase.RemoveFromCreatedList\(\), 
ObjectBase.PostAddToDocument\(\), 
ObjectBase.PostRemoveFromDocument\(Document\), 
ObjectBase.GetArgumentList\(LinkedList<ObjectBase\>\), 
ObjectBase.ResetInvalidEntity\(\), 
ObjectBase.OnDeserialization\(object\), 
ObjectBase.IsSerializableEvent\(Delegate\), 
ObjectBase.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
ObjectBase.CheckAndUpdateLink\(HashSet<ObjectBase\>\), 
ObjectBase.Verify\(VerifiedResult\), 
ObjectBase.ConnectProxy\(\), 
ObjectBase.RollbackEvent\(\), 
ObjectBase.LinkRequestUpdating\(object, LinkEventArgs\), 
ObjectBase.LinkRequestUpdate\(object, LinkEventArgs\), 
ObjectBase.LinkRequestDestroying\(object, LinkEventArgs\), 
ObjectBase.LinkRequestDestroy\(object, LinkEventArgs\), 
ObjectBase.LinkAddedToDocument\(object, AddToDocEventArgs\), 
ObjectBase.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
ObjectBase.DisposeManagedResources\(\), 
ObjectBase.GetDestroyEventExtraData\(\), 
ObjectBase.OnLinkReserved\(ILink, object, EventArgs\), 
ObjectBase.CreateEntityWhenUpdateContents\(Action\), 
ObjectBase.GetObjectByKey\(UIntPtr\), 
ObjectBase.FindObjectOnXmlDeserialize\(string\), 
ObjectBase.UpdateContents\(XmlReader, ObjectBase, string\), 
ObjectBase.UpdateContents\(XmlReader, ObjectBase\), 
ObjectBase.UpdateContents\(string, string\), 
ObjectBase.UpdateContents\(string\), 
ObjectBase.SetFlagWhenXMLFile\(string, bool\), 
ObjectBase.IsEqualArray<T\>\(T\[\], T\[\]\), 
ObjectBase.IsEqualList\(List<double\>, List<double\>\), 
ObjectBase.SetContainer\(IOwned, bool\), 
ObjectBase.GetTargetListForUpdate\(\), 
ObjectBase.SkipUpdateObjectImpl\(\), 
ObjectBase.raise\_OnUpdating\(object, LinkEventArgs\), 
ObjectBase.raise\_OnUpdate\(object, LinkEventArgs\), 
ObjectBase.raise\_OnDestroying\(object, LinkEventArgs\), 
ObjectBase.raise\_OnDestroy\(object, LinkEventArgs\), 
ObjectBase.raise\_Destroying\(object, Identifier\), 
ObjectBase.raise\_OnAdded\(object, AddToDocEventArgs\), 
ObjectBase.raise\_OnRemoved\(object, RemoveFromDocEventArgs\), 
ObjectBase.raise\_OnContentsUpdated\(object, EventArgs\), 
ObjectBase.Dispose\(bool\), 
ObjectBase.SkipModified, 
ObjectBase.ClearChildInfoBeforeDeserialize, 
ObjectBase.KeyImpl, 
ObjectBase.ID, 
ObjectBase.TopologyEntityTypeName, 
ObjectBase.ObjectStateForCircularError, 
ObjectBase.ObjectState, 
ObjectBase.IsChildExternable, 
ObjectBase.IsExternable, 
ObjectBase.Container, 
ObjectBase.Owner, 
ObjectBase.Document, 
ObjectBase.UntypedEventCore, 
ObjectBase.KernelKey, 
ObjectBase.Key, 
ObjectBase.OnContentsUpdated, 
ObjectBase.OnRemoved, 
ObjectBase.OnAdded, 
ObjectBase.Destroying, 
ObjectBase.OnDestroy, 
ObjectBase.OnDestroying, 
ObjectBase.OnUpdate, 
ObjectBase.OnUpdating, 
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

### <a id="VM_Managed_CAD_Sprocket_BuilderSingleSprocketSimple__ctor"></a> BuilderSingleSprocketSimple\(\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Sprocket.BuilderSingleSprocketSimple" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BuilderSingleSprocketSimple()
```

## Properties

### <a id="VM_Managed_CAD_Sprocket_BuilderSingleSprocketSimple_AddendumCircleDiameter"></a> AddendumCircleDiameter

Gets and sets addendum circle diameter.

```csharp
public ExpressionValueVariable AddendumCircleDiameter { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Sprocket_BuilderSingleSprocketSimple_AngleBetweenTeeth"></a> AngleBetweenTeeth

Gets and sets angle between teeth.

```csharp
public ExpressionValueVariable AngleBetweenTeeth { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Sprocket_BuilderSingleSprocketSimple_BushingRadius"></a> BushingRadius

Gets and sets bushing radius.

```csharp
public ExpressionValueVariable BushingRadius { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Sprocket_BuilderSingleSprocketSimple_ClearanceofToothRoot"></a> ClearanceofToothRoot

Gets and sets clearance of tooth root.

```csharp
public ExpressionValueVariable ClearanceofToothRoot { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Sprocket_BuilderSingleSprocketSimple_DedendumCircleDiameter"></a> DedendumCircleDiameter

Gets and sets dedendum circle diameter

```csharp
public ExpressionValueVariable DedendumCircleDiameter { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Sprocket_BuilderSingleSprocketSimple_NoOfTeeth"></a> NoOfTeeth

Gets and sets Number of teeth

```csharp
public int NoOfTeeth { get; set; }
```

#### Property Value

 int

### <a id="VM_Managed_CAD_Sprocket_BuilderSingleSprocketSimple_PitchCircleDiameter"></a> PitchCircleDiameter

Gets and sets pitch circle diameter.

```csharp
public ExpressionValueVariable PitchCircleDiameter { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Sprocket_BuilderSingleSprocketSimple_ProfileCreationType"></a> ProfileCreationType

Gets and sets profile type.

```csharp
public ToothProfileType ProfileCreationType { get; set; }
```

#### Property Value

 [ToothProfileType](VM.Managed.CAD.Sprocket.ToothProfileType.md)

### <a id="VM_Managed_CAD_Sprocket_BuilderSingleSprocketSimple_Spline"></a> Spline

Gets and sets tooth profile

```csharp
public Spline Spline { get; set; }
```

#### Property Value

 [Spline](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Spline.cs)

### <a id="VM_Managed_CAD_Sprocket_BuilderSingleSprocketSimple_ToothRoundRadius"></a> ToothRoundRadius

Gets and sets rounding radius at tooth tip.

```csharp
public ExpressionValueVariable ToothRoundRadius { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Sprocket_BuilderSingleSprocketSimple_TypeOfBuilder"></a> TypeOfBuilder

```csharp
public override string TypeOfBuilder { get; set; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_CAD_Sprocket_BuilderSingleSprocketSimple_CheckValidationAboutBuild"></a> CheckValidationAboutBuild\(\)

Checks the validation about build.

```csharp
public override void CheckValidationAboutBuild()
```

### <a id="VM_Managed_CAD_Sprocket_BuilderSingleSprocketSimple_CreateParameter"></a> CreateParameter\(\)

```csharp
protected override BuilderParamBase CreateParameter()
```

#### Returns

 [BuilderParamBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders/VMAppCore/BuilderParamBase.cs)

### <a id="VM_Managed_CAD_Sprocket_BuilderSingleSprocketSimple_FillParameter_VM_CAD_Builders_BuilderParamBase_"></a> FillParameter\(BuilderParamBase\)

```csharp
protected override void FillParameter(BuilderParamBase parameter)
```

#### Parameters

`parameter` [BuilderParamBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders/VMAppCore/BuilderParamBase.cs)

### <a id="VM_Managed_CAD_Sprocket_BuilderSingleSprocketSimple_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_CAD_Sprocket_BuilderSingleSprocketSimple_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Links the request update.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

The obj notifier.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_CAD_Sprocket_BuilderSingleSprocketSimple_Set_Radius_Shift_System_Double_"></a> Set\_Radius\_Shift\(double\)

Sets Y-axis shift value

```csharp
public void Set_Radius_Shift(double dShift)
```

#### Parameters

`dShift` double

The radius shift

