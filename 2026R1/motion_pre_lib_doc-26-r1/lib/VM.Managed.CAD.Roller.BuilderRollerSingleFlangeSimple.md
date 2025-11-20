# Class BuilderRollerSingleFlangeSimple
<a id="VM_Managed_CAD_Roller_BuilderRollerSingleFlangeSimple"></a>

Namespace: [VM.Managed.CAD.Roller](VM.Managed.CAD.Roller.md)  
Assembly: VMDRoller.dll  

The single flange roller builder class.

```csharp
public class BuilderRollerSingleFlangeSimple : BuilderRollerFlange, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IHasReplaceableEntity
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
[BuilderRollerBase](VM.Managed.CAD.Roller.BuilderRollerBase.md) ← 
[BuilderRollerTread](VM.Managed.CAD.Roller.BuilderRollerTread.md) ← 
[BuilderRollerShaft](VM.Managed.CAD.Roller.BuilderRollerShaft.md) ← 
[BuilderRollerFlange](VM.Managed.CAD.Roller.BuilderRollerFlange.md) ← 
[BuilderRollerSingleFlangeSimple](VM.Managed.CAD.Roller.BuilderRollerSingleFlangeSimple.md)

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

[BuilderRollerFlange.m\_FlangeDistance](VM.Managed.CAD.Roller.BuilderRollerFlange.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerFlange\_m\_FlangeDistance), 
[BuilderRollerFlange.m\_FlangeAngle](VM.Managed.CAD.Roller.BuilderRollerFlange.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerFlange\_m\_FlangeAngle), 
[BuilderRollerFlange.CheckValidationAboutBuild\(\)](VM.Managed.CAD.Roller.BuilderRollerFlange.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerFlange\_CheckValidationAboutBuild), 
[BuilderRollerFlange.GetLinkEventArg\(\)](VM.Managed.CAD.Roller.BuilderRollerFlange.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerFlange\_GetLinkEventArg), 
[BuilderRollerFlange.SetLinkEventArg\(NotifyReason\)](VM.Managed.CAD.Roller.BuilderRollerFlange.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerFlange\_SetLinkEventArg\_VM\_Managed\_NotifyReason\_), 
[BuilderRollerFlange.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.CAD.Roller.BuilderRollerFlange.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerFlange\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[BuilderRollerFlange.FlangeDistance](VM.Managed.CAD.Roller.BuilderRollerFlange.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerFlange\_FlangeDistance), 
[BuilderRollerFlange.FlangeAngle](VM.Managed.CAD.Roller.BuilderRollerFlange.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerFlange\_FlangeAngle), 
[BuilderRollerShaft.m\_enShaftType](VM.Managed.CAD.Roller.BuilderRollerShaft.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerShaft\_m\_enShaftType), 
[BuilderRollerShaft.m\_bCreateShaft](VM.Managed.CAD.Roller.BuilderRollerShaft.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerShaft\_m\_bCreateShaft), 
[BuilderRollerShaft.lstRadius](VM.Managed.CAD.Roller.BuilderRollerShaft.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerShaft\_lstRadius), 
[BuilderRollerShaft.lstTop](VM.Managed.CAD.Roller.BuilderRollerShaft.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerShaft\_lstTop), 
[BuilderRollerShaft.lstBottom](VM.Managed.CAD.Roller.BuilderRollerShaft.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerShaft\_lstBottom), 
[BuilderRollerShaft.lstPosition](VM.Managed.CAD.Roller.BuilderRollerShaft.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerShaft\_lstPosition), 
[BuilderRollerShaft.Initialize\(Unit.ConvertFactor\)](VM.Managed.CAD.Roller.BuilderRollerShaft.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerShaft\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[BuilderRollerShaft.CheckValidationAboutBuild\(\)](VM.Managed.CAD.Roller.BuilderRollerShaft.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerShaft\_CheckValidationAboutBuild), 
[BuilderRollerShaft.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.CAD.Roller.BuilderRollerShaft.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerShaft\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[BuilderRollerShaft.ShaftWidth](VM.Managed.CAD.Roller.BuilderRollerShaft.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerShaft\_ShaftWidth), 
[BuilderRollerShaft.ShaftDiameter](VM.Managed.CAD.Roller.BuilderRollerShaft.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerShaft\_ShaftDiameter), 
[BuilderRollerShaft.CreateShaft](VM.Managed.CAD.Roller.BuilderRollerShaft.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerShaft\_CreateShaft), 
[BuilderRollerShaft.ShaftType](VM.Managed.CAD.Roller.BuilderRollerShaft.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerShaft\_ShaftType), 
[BuilderRollerTread.CheckValidationAboutBuild\(\)](VM.Managed.CAD.Roller.BuilderRollerTread.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerTread\_CheckValidationAboutBuild), 
[BuilderRollerTread.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.CAD.Roller.BuilderRollerTread.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerTread\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[BuilderRollerTread.TreadWidth](VM.Managed.CAD.Roller.BuilderRollerTread.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerTread\_TreadWidth), 
[BuilderRollerTread.TreadDiameter](VM.Managed.CAD.Roller.BuilderRollerTread.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerTread\_TreadDiameter), 
[BuilderRollerBase.m\_enRollerType](VM.Managed.CAD.Roller.BuilderRollerBase.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerBase\_m\_enRollerType), 
[BuilderRollerBase.m\_LinkEventReason](VM.Managed.CAD.Roller.BuilderRollerBase.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerBase\_m\_LinkEventReason), 
[BuilderRollerBase.SetApplyToFileProperty\(bool\)](VM.Managed.CAD.Roller.BuilderRollerBase.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerBase\_SetApplyToFileProperty\_System\_Boolean\_), 
[BuilderRollerBase.SetTransform\(TMatrix\)](VM.Managed.CAD.Roller.BuilderRollerBase.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerBase\_SetTransform\_VM\_Managed\_TMatrix\_), 
[BuilderRollerBase.CreateParameter\(\)](VM.Managed.CAD.Roller.BuilderRollerBase.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerBase\_CreateParameter), 
[BuilderRollerBase.FillParameter\(BuilderParamBase\)](VM.Managed.CAD.Roller.BuilderRollerBase.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerBase\_FillParameter\_VM\_CAD\_Builders\_BuilderParamBase\_), 
[BuilderRollerBase.Transform](VM.Managed.CAD.Roller.BuilderRollerBase.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerBase\_Transform), 
[BuilderRollerBase.ApplyToFileProperty](VM.Managed.CAD.Roller.BuilderRollerBase.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerBase\_ApplyToFileProperty), 
[BuilderRollerBase.Uneditable](VM.Managed.CAD.Roller.BuilderRollerBase.md\#VM\_Managed\_CAD\_Roller\_BuilderRollerBase\_Uneditable), 
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

### <a id="VM_Managed_CAD_Roller_BuilderRollerSingleFlangeSimple__ctor"></a> BuilderRollerSingleFlangeSimple\(\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Roller.BuilderRollerSingleFlangeSimple" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BuilderRollerSingleFlangeSimple()
```

## Properties

### <a id="VM_Managed_CAD_Roller_BuilderRollerSingleFlangeSimple_RollerType"></a> RollerType

Gets roller type.

```csharp
public RollerType RollerType { get; set; }
```

#### Property Value

 [RollerType](VM.Managed.CAD.Roller.RollerType.md)

### <a id="VM_Managed_CAD_Roller_BuilderRollerSingleFlangeSimple_SideFlangeDiameter"></a> SideFlangeDiameter

Gets and sets center flange diameter.

```csharp
public ExpressionValueVariable SideFlangeDiameter { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Roller_BuilderRollerSingleFlangeSimple_SideFlangeWidth"></a> SideFlangeWidth

Gets and sets center flange width.

```csharp
public ExpressionValueVariable SideFlangeWidth { get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_Managed_CAD_Roller_BuilderRollerSingleFlangeSimple_TypeOfBuilder"></a> TypeOfBuilder

```csharp
public override string TypeOfBuilder { get; set; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_CAD_Roller_BuilderRollerSingleFlangeSimple_CheckValidationAboutBuild"></a> CheckValidationAboutBuild\(\)

Checks the validation about build.

```csharp
public override void CheckValidationAboutBuild()
```

### <a id="VM_Managed_CAD_Roller_BuilderRollerSingleFlangeSimple_FillParameter_VM_CAD_Builders_BuilderParamBase_"></a> FillParameter\(BuilderParamBase\)

```csharp
protected override void FillParameter(BuilderParamBase parameter)
```

#### Parameters

`parameter` [BuilderParamBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders/VMAppCore/BuilderParamBase.cs)

### <a id="VM_Managed_CAD_Roller_BuilderRollerSingleFlangeSimple_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_CAD_Roller_BuilderRollerSingleFlangeSimple_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Links the request update.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` object

The obj notifier.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

