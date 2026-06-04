#  Class BuilderRollerFlange

Namespace: [VM.Managed.CAD.Roller](VM.Managed.CAD.Roller.md)  
Assembly: VMDRoller.dll  

The base builder class of flange roller.

```csharp
public abstract class BuilderRollerFlange : BuilderRollerShaft, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
Builder ← 
BuilderTransform ← 
BuilderColorGeom ← 
BuilderHasTransform ← 
[BuilderRollerBase](VM.Managed.CAD.Roller.BuilderRollerBase.md) ← 
[BuilderRollerTread](VM.Managed.CAD.Roller.BuilderRollerTread.md) ← 
[BuilderRollerShaft](VM.Managed.CAD.Roller.BuilderRollerShaft.md) ← 
[BuilderRollerFlange](VM.Managed.CAD.Roller.BuilderRollerFlange.md)

#### Derived

[BuilderRollerCenterFlangeSimple](VM.Managed.CAD.Roller.BuilderRollerCenterFlangeSimple.md), 
[BuilderRollerDoubleFlangeSimple](VM.Managed.CAD.Roller.BuilderRollerDoubleFlangeSimple.md), 
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
IHistoryObjectSerializable, 
IAttributeContainer

#### Inherited Members

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

### <a id="VM_Managed_CAD_Roller_BuilderRollerFlange__ctor"></a> BuilderRollerFlange\(\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Roller.BuilderRollerFlange" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BuilderRollerFlange()
```

## Fields

### <a id="VM_Managed_CAD_Roller_BuilderRollerFlange_m_FlangeAngle"></a> m\_FlangeAngle

The flange angle

```csharp
protected Child<Variable, ObjectBase.Update> m_FlangeAngle
```

#### Field Value

 Child<Variable, ObjectBase.Update\>

### <a id="VM_Managed_CAD_Roller_BuilderRollerFlange_m_FlangeDistance"></a> m\_FlangeDistance

The flange distance.

```csharp
protected Child<Variable, ObjectBase.Update> m_FlangeDistance
```

#### Field Value

 Child<Variable, ObjectBase.Update\>

## Properties

### <a id="VM_Managed_CAD_Roller_BuilderRollerFlange_FlangeAngle"></a> FlangeAngle

Gets and sets flange angle.

```csharp
public ExpressionValueVariable FlangeAngle { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_CAD_Roller_BuilderRollerFlange_FlangeDistance"></a> FlangeDistance

Gets and sets flange distance.

```csharp
public Variable FlangeDistance { get; set; }
```

#### Property Value

 Variable

## Methods

### <a id="VM_Managed_CAD_Roller_BuilderRollerFlange_CheckValidationAboutBuild"></a> CheckValidationAboutBuild\(\)

Checks the validation about build.

```csharp
public override void CheckValidationAboutBuild()
```

### <a id="VM_Managed_CAD_Roller_BuilderRollerFlange_GetLinkEventArg"></a> GetLinkEventArg\(\)

Gets the event reason.
This function use internally.

```csharp
public NotifyReason GetLinkEventArg()
```

#### Returns

 NotifyReason

The reason.

### <a id="VM_Managed_CAD_Roller_BuilderRollerFlange_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Links the request update.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The obj notifier.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_CAD_Roller_BuilderRollerFlange_SetLinkEventArg_VM_Managed_NotifyReason_"></a> SetLinkEventArg\(NotifyReason\)

Sets the event reason
This function use internally.

```csharp
public void SetLinkEventArg(NotifyReason reason)
```

#### Parameters

`reason` NotifyReason

The reason

