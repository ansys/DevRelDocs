# Class BuilderNut
<a id="VM_Managed_DAFUL_BuilderNut"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDBallPlacing.dll  

The class for nut builder.

```csharp
public class BuilderNut : BuilderColorGeom, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IHasReplaceableEntity
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
[BuilderNut](VM.Managed.DAFUL.BuilderNut.md)

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

### <a id="VM_Managed_DAFUL_BuilderNut__ctor"></a> BuilderNut\(\)

```csharp
public BuilderNut()
```

## Properties

### <a id="VM_Managed_DAFUL_BuilderNut_BallDiameter"></a> BallDiameter

Gets and sets the ball diameter.

```csharp
public Variable BallDiameter { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_BuilderNut_IsRight"></a> IsRight

Gets or sets a value indicating whether screw is right handed.

```csharp
public bool IsRight { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_BuilderNut_Lead"></a> Lead

Gets and sets the lead.

```csharp
public Variable Lead { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_BuilderNut_NutChamperAngle"></a> NutChamperAngle

Gets and sets the nut champer angle.

```csharp
public Variable NutChamperAngle { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_BuilderNut_NutConformity"></a> NutConformity

Gets and sets the nut conformity.

```csharp
public Variable NutConformity { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_BuilderNut_NutContactAngle"></a> NutContactAngle

Gets and sets the nut contact angle.

```csharp
public Variable NutContactAngle { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_BuilderNut_NutInnerRadius"></a> NutInnerRadius

Gets and sets the nut inner radius.

```csharp
public Variable NutInnerRadius { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_BuilderNut_NutLength"></a> NutLength

Gets and sets the nut length.

```csharp
public Variable NutLength { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_BuilderNut_NutOD"></a> NutOD

Gets and sets the nut OD.

```csharp
public Variable NutOD { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_BuilderNut_NutPCD"></a> NutPCD

Gets and sets the nut PCD.

```csharp
public Variable NutPCD { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_BuilderNut_NutScrewEndLength"></a> NutScrewEndLength

Gets and sets the nut screw end length.

```csharp
public Variable NutScrewEndLength { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_BuilderNut_NutScrewStartLength"></a> NutScrewStartLength

Gets and sets the nut screw start length.

```csharp
public Variable NutScrewStartLength { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_BuilderNut_NutShoulderRadius"></a> NutShoulderRadius

Gets and sets the nut shoulder radius.

```csharp
public Variable NutShoulderRadius { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_BuilderNut_NutShoulderType"></a> NutShoulderType

Gets and sets the nut shoulder type.

```csharp
public ShoulderType NutShoulderType { get; set; }
```

#### Property Value

 [ShoulderType](VM.Managed.DAFUL.ShoulderType.md)

### <a id="VM_Managed_DAFUL_BuilderNut_NutStartArcAngle"></a> NutStartArcAngle

Gets and sets the nut start arc angle.

```csharp
public Variable NutStartArcAngle { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_BuilderNut_NutStartLength"></a> NutStartLength

Gets and sets the nut start length.

```csharp
public Variable NutStartLength { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_BuilderNut_Position"></a> Position

Gets and sets the position.

```csharp
public Vector Position { get; set; }
```

#### Property Value

 Vector

### <a id="VM_Managed_DAFUL_BuilderNut_ShaftLength"></a> ShaftLength

Gets and sets the shaft length.

```csharp
public Variable ShaftLength { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_BuilderNut_ShaftScrewEndLength"></a> ShaftScrewEndLength

Gets and sets the shaft screw end length.

```csharp
public Variable ShaftScrewEndLength { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_BuilderNut_ShaftScrewStartAngle"></a> ShaftScrewStartAngle

Gets and sets the shaft screw start angle.

```csharp
public Variable ShaftScrewStartAngle { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_BuilderNut_ShaftScrewStartLength"></a> ShaftScrewStartLength

Gets and sets the shaft screw start length.

```csharp
public Variable ShaftScrewStartLength { get; set; }
```

#### Property Value

 Variable

### <a id="VM_Managed_DAFUL_BuilderNut_XAxis"></a> XAxis

Gets and sets the x-axis.

```csharp
public Vector XAxis { get; set; }
```

#### Property Value

 Vector

### <a id="VM_Managed_DAFUL_BuilderNut_ZAxis"></a> ZAxis

Gets and sets the z-axis.

```csharp
public Vector ZAxis { get; set; }
```

#### Property Value

 Vector

## Methods

### <a id="VM_Managed_DAFUL_BuilderNut_CreateParameter"></a> CreateParameter\(\)

Create Parameter

```csharp
protected override BuilderParamBase CreateParameter()
```

#### Returns

 [BuilderParamBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders/VMAppCore/BuilderParamBase.cs)

### <a id="VM_Managed_DAFUL_BuilderNut_FillParameter_VM_CAD_Builders_BuilderParamBase_"></a> FillParameter\(BuilderParamBase\)

Fill Parameter

```csharp
protected override void FillParameter(BuilderParamBase parameter)
```

#### Parameters

`parameter` [BuilderParamBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Builders/VM.CAD.Builders/VMAppCore/BuilderParamBase.cs)

