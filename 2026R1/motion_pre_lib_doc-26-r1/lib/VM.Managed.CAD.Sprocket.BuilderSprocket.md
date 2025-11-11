# Class BuilderSprocket
<a id="VM_Managed_CAD_Sprocket_BuilderSprocket"></a>

Namespace: [VM.Managed.CAD.Sprocket](VM.Managed.CAD.Sprocket.md)  
Assembly: VMDSprocket.dll  

The base builder class for sprocket

```csharp
public abstract class BuilderSprocket : BuilderHasTransform, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IHasReplaceableEntity
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
[BuilderSprocket](VM.Managed.CAD.Sprocket.BuilderSprocket.md)

#### Derived

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

### <a id="VM_Managed_CAD_Sprocket_BuilderSprocket__ctor"></a> BuilderSprocket\(\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Sprocket.BuilderSprocket" data-throw-if-not-resolved="false"></xref> class.

```csharp
public BuilderSprocket()
```

## Fields

### <a id="VM_Managed_CAD_Sprocket_BuilderSprocket_m_LinkEventReason"></a> m\_LinkEventReason

Gets and sets linkeventargs

```csharp
protected NotifyReason m_LinkEventReason
```

#### Field Value

 NotifyReason

## Properties

### <a id="VM_Managed_CAD_Sprocket_BuilderSprocket_ApplyToFileProperty"></a> ApplyToFileProperty

Gets and sets boolean
Use SetToApplyToFileProperty() when this instance sets for undo/redo

```csharp
public bool ApplyToFileProperty { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_CAD_Sprocket_BuilderSprocket_BooleanType"></a> BooleanType

Gets and sets boolean type.

```csharp
public BooleanType BooleanType { get; set; }
```

#### Property Value

 [BooleanType](VM.Managed.CAD.Sprocket.BooleanType.md)

### <a id="VM_Managed_CAD_Sprocket_BuilderSprocket_CreateShaft"></a> CreateShaft

Gets and sets a value indicating whether [creation shaft]
Use SetToCreateShaft() when this instance sets for undo/redo

```csharp
public bool CreateShaft { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_CAD_Sprocket_BuilderSprocket_ProfileType"></a> ProfileType

Gets and sets work plane

```csharp
public InputType ProfileType { get; set; }
```

#### Property Value

 [InputType](VM.Managed.CAD.Sprocket.InputType.md)

### <a id="VM_Managed_CAD_Sprocket_BuilderSprocket_ShaftDiameter"></a> ShaftDiameter

Gets and sets shaft diameter.

```csharp
public Variable ShaftDiameter { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_CAD_Sprocket_BuilderSprocket_ShaftWidth"></a> ShaftWidth

Gets and sets shaft width.

```csharp
public Variable ShaftWidth { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_CAD_Sprocket_BuilderSprocket_SprocketType"></a> SprocketType

Gets and sets Number of teeth

```csharp
public SprocketType SprocketType { get; }
```

#### Property Value

 [SprocketType](VM.Managed.CAD.Sprocket.SprocketType.md)

### <a id="VM_Managed_CAD_Sprocket_BuilderSprocket_SprocketWidth"></a> SprocketWidth

Gets and sets sprocket width.

```csharp
public Variable SprocketWidth { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_CAD_Sprocket_BuilderSprocket_Transform"></a> Transform

Gets and sets Transformation.

```csharp
public override sealed TransformBase Transform { get; set; }
```

#### Property Value

 TransformBase

### <a id="VM_Managed_CAD_Sprocket_BuilderSprocket_Uneditable"></a> Uneditable

Gets or sets Uneditable value..

```csharp
public override bool Uneditable { get; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Managed_CAD_Sprocket_BuilderSprocket_SetToApplyToFileProperty_System_Boolean_"></a> SetToApplyToFileProperty\(bool\)

Apply to file property.

```csharp
public void SetToApplyToFileProperty(bool bFlag)
```

#### Parameters

`bFlag` bool

The flag.

### <a id="VM_Managed_CAD_Sprocket_BuilderSprocket_SetToCreateShaft_System_Boolean_"></a> SetToCreateShaft\(bool\)

Create shaft.

```csharp
public void SetToCreateShaft(bool bFlag)
```

#### Parameters

`bFlag` bool

The flag.

### <a id="VM_Managed_CAD_Sprocket_BuilderSprocket_SetTransform_VM_Managed_TMatrix_"></a> SetTransform\(TMatrix\)

Sets the transform information.

```csharp
public override void SetTransform(TMatrix matT)
```

#### Parameters

`matT` TMatrix

The transform information.

