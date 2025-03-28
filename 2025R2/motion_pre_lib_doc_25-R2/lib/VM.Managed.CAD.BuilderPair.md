# <a id="VM_Managed_CAD_BuilderPair"></a> Class BuilderPair

Namespace: [VM.Managed.CAD](VM.Managed.CAD.md)  
Assembly: VMAppCore.dll  

This class is to represent the builder that has pair builder.

```csharp
public abstract class BuilderPair : BuilderBoolean, IObservableObject, IDisposableObject, ILinkable, IObjectBase, IObject, IEventProvider, IHasKeyObject, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, IContainer, ILinkContainer, IOwned, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
[ObjectBase](VM.Managed.ObjectBase.md) ← 
[Object<ObjectEventCore\>](VM.Managed.Object\-1.md) ← 
[Builder](VM.Managed.CAD.Builder.md) ← 
[BuilderTransform](VM.Managed.CAD.BuilderTransform.md) ← 
[BuilderColorGeom](VM.Managed.CAD.BuilderColorGeom.md) ← 
[BuilderBoolean](VM.Managed.CAD.BuilderBoolean.md) ← 
[BuilderPair](VM.Managed.CAD.BuilderPair.md)

#### Derived

[BuilderImprint](VM.Managed.CAD.BuilderImprint.md), 
[BuilderIntersect](VM.Managed.CAD.BuilderIntersect.md), 
[BuilderSubtract](VM.Managed.CAD.BuilderSubtract.md), 
[BuilderUnite](VM.Managed.CAD.BuilderUnite.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObjectBase, 
IObject, 
IEventProvider, 
IHasKeyObject, 
[ILinkContainerEvent](VM.Managed.ILinkContainerEvent.md), 
[IVerifiable](VM.Managed.IVerifiable.md), 
IHistoryObjectSerializable, 
[IAttributeContainer](VM.Managed.IAttributeContainer.md), 
IContainer, 
ILinkContainer, 
IOwned, 
IHasID

#### Inherited Members

[BuilderBoolean.ReplaceBuild\(Builder, Builder\)](VM.Managed.CAD.BuilderBoolean.md\#VM\_Managed\_CAD\_BuilderBoolean\_ReplaceBuild\_VM\_Managed\_CAD\_Builder\_VM\_Managed\_CAD\_Builder\_), 
[BuilderColorGeom.m\_color](VM.Managed.CAD.BuilderColorGeom.md\#VM\_Managed\_CAD\_BuilderColorGeom\_m\_color), 
[BuilderColorGeom.CheckValidationAboutBuild\(\)](VM.Managed.CAD.BuilderColorGeom.md\#VM\_Managed\_CAD\_BuilderColorGeom\_CheckValidationAboutBuild), 
[BuilderColorGeom.OnDeserialization\(object\)](VM.Managed.CAD.BuilderColorGeom.md\#VM\_Managed\_CAD\_BuilderColorGeom\_OnDeserialization\_System\_Object\_), 
[BuilderColorGeom.FillParameter\(BuilderParamBase\)](VM.Managed.CAD.BuilderColorGeom.md\#VM\_Managed\_CAD\_BuilderColorGeom\_FillParameter\_VM\_CAD\_Builders\_BuilderParamBase\_), 
[BuilderColorGeom.Color](VM.Managed.CAD.BuilderColorGeom.md\#VM\_Managed\_CAD\_BuilderColorGeom\_Color), 
[BuilderColorGeom.DrawingColor](VM.Managed.CAD.BuilderColorGeom.md\#VM\_Managed\_CAD\_BuilderColorGeom\_DrawingColor), 
[BuilderTransform.SetTransform\(TMatrix\)](VM.Managed.CAD.BuilderTransform.md\#VM\_Managed\_CAD\_BuilderTransform\_SetTransform\_VM\_Managed\_TMatrix\_), 
[BuilderTransform.IsParameterized](VM.Managed.CAD.BuilderTransform.md\#VM\_Managed\_CAD\_BuilderTransform\_IsParameterized), 
[Builder.CheckValidationAboutBuild\(\)](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_CheckValidationAboutBuild), 
[Builder.CheckCircularReference\(ObjectBase\)](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_CheckCircularReference\_VM\_Managed\_ObjectBase\_), 
[Builder.ChangeDataForCircularReference\(\)](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_ChangeDataForCircularReference), 
[Builder.GetUnnamedObjectName\(object\)](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_GetUnnamedObjectName\_System\_Object\_), 
[Builder.FindLocal\(string\)](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_FindLocal\_System\_String\_), 
[Builder.CopyFilePathWhenImportBuilder\(Builder\)](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_CopyFilePathWhenImportBuilder\_VM\_Managed\_CAD\_Builder\_), 
[Builder.Contains\(Type\)](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_Contains\_System\_Type\_), 
[Builder.GetBodyType\(\)](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_GetBodyType), 
[Builder.ReplaceData\(string, object\)](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_ReplaceData\_System\_String\_System\_Object\_), 
[Builder.GetNameAttribute\(string, ref List<string\>\)](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_GetNameAttribute\_System\_String\_System\_Collections\_Generic\_List\_System\_String\_\_\_), 
[Builder.AddUneditableAttribute\(\)](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_AddUneditableAttribute), 
[Builder.GetParentBody\(\)](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_GetParentBody), 
[Builder.Clone\(\)](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_Clone), 
[Builder.Initialize\(Unit.ConvertFactor\)](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[Builder.OnDeserialization\(object\)](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_OnDeserialization\_System\_Object\_), 
[Builder.CreateParameter\(\)](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_CreateParameter), 
[Builder.FillParameter\(BuilderParamBase\)](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_FillParameter\_VM\_CAD\_Builders\_BuilderParamBase\_), 
[Builder.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[Builder.PostWorkWhenFailedToGetXmlString\(\)](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_PostWorkWhenFailedToGetXmlString), 
[Builder.GetFilledParameter\(\)](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_GetFilledParameter), 
[Builder.GetXmlString\(\)](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_GetXmlString), 
[Builder.GetFactorForLength\(\)](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_GetFactorForLength), 
[Builder.CheckCircularReferenceForPoint\(PointBase, ObjectBase\)](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_CheckCircularReferenceForPoint\_VM\_Managed\_PointBase\_VM\_Managed\_ObjectBase\_), 
[Builder.CheckCircularReferenceForDirection\(DirectionBase, ObjectBase\)](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_CheckCircularReferenceForDirection\_VM\_Managed\_DirectionBase\_VM\_Managed\_ObjectBase\_), 
[Builder.CheckCircularReferenceForOrientation\(OrientationBase, ObjectBase\)](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_CheckCircularReferenceForOrientation\_VM\_Managed\_OrientationBase\_VM\_Managed\_ObjectBase\_), 
[Builder.CheckCircularReferenceForTransform\(TransformBase, ObjectBase\)](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_CheckCircularReferenceForTransform\_VM\_Managed\_TransformBase\_VM\_Managed\_ObjectBase\_), 
[Builder.GetUnitScale\(\)](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_GetUnitScale), 
[Builder.InitialKernelLengthUnit](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_InitialKernelLengthUnit), 
[Builder.IsExternable](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_IsExternable), 
[Builder.Uneditable](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_Uneditable), 
[Builder.TypeOfBuilder](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_TypeOfBuilder), 
[Builder.Transparency](VM.Managed.CAD.Builder.md\#VM\_Managed\_CAD\_Builder\_Transparency), 
[Object<ObjectEventCore\>.GetKey\(\)](VM.Managed.Object\-1.md\#VM\_Managed\_Object\_1\_GetKey), 
[Object<ObjectEventCore\>.Initialize\(Unit.ConvertFactor\)](VM.Managed.Object\-1.md\#VM\_Managed\_Object\_1\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[Object<ObjectEventCore\>.SetIconColor\(Canvas\)](VM.Managed.Object\-1.md\#VM\_Managed\_Object\_1\_SetIconColor\_VM\_CAD\_Kernel\_Render\_Canvas\_), 
[Object<ObjectEventCore\>.OnDeserialization\(object\)](VM.Managed.Object\-1.md\#VM\_Managed\_Object\_1\_OnDeserialization\_System\_Object\_), 
[Object<ObjectEventCore\>.CustomGetObjectData\(SerializationInfo, StreamingContext\)](VM.Managed.Object\-1.md\#VM\_Managed\_Object\_1\_CustomGetObjectData\_System\_Runtime\_Serialization\_SerializationInfo\_System\_Runtime\_Serialization\_StreamingContext\_), 
[Object<ObjectEventCore\>.RollbackEvent\(\)](VM.Managed.Object\-1.md\#VM\_Managed\_Object\_1\_RollbackEvent), 
[Object<ObjectEventCore\>.OnDeserializedCore\(object\)](VM.Managed.Object\-1.md\#VM\_Managed\_Object\_1\_OnDeserializedCore\_System\_Object\_), 
[Object<ObjectEventCore\>.Key](VM.Managed.Object\-1.md\#VM\_Managed\_Object\_1\_Key), 
[Object<ObjectEventCore\>.UntypedEventCore](VM.Managed.Object\-1.md\#VM\_Managed\_Object\_1\_UntypedEventCore), 
[Object<ObjectEventCore\>.EventCore](VM.Managed.Object\-1.md\#VM\_Managed\_Object\_1\_EventCore), 
[Object<ObjectEventCore\>.Attributes](VM.Managed.Object\-1.md\#VM\_Managed\_Object\_1\_Attributes), 
[ObjectBase.ReplaceEventCore\(ObjectEventCore\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_ReplaceEventCore\_VM\_Managed\_ObjectEventCore\_), 
[ObjectBase.SetModifiedCore\(ModifiedResult.ModifiedType\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_SetModifiedCore\_VM\_Managed\_ModifiedResult\_ModifiedType\_), 
[ObjectBase.AddPostDeserialize\(StreamingContext\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_AddPostDeserialize\_System\_Runtime\_Serialization\_StreamingContext\_), 
[ObjectBase.LinkAddedToDocumentCore\(IOwned, bool\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_LinkAddedToDocumentCore\_VM\_Models\_Pre\_IOwned\_System\_Boolean\_), 
[ObjectBase.SetModified\(ModifiedResult.ModifiedType\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_SetModified\_VM\_Managed\_ModifiedResult\_ModifiedType\_), 
[ObjectBase.SetModified\(\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_SetModified), 
[ObjectBase.SetModified\(ModifiedResult.ModifiedType, IDocument\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_SetModified\_VM\_Managed\_ModifiedResult\_ModifiedType\_VM\_Models\_Pre\_IDocument\_), 
[ObjectBase.DestroyObject\(object, LinkEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_DestroyObject\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[ObjectBase.DestroyObject\(DestroyEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_DestroyObject\_VM\_Managed\_DestroyEventArgs\_), 
[ObjectBase.DestroyObject\(\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_DestroyObject), 
[ObjectBase.Initialize\(Unit.ConvertFactor\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[ObjectBase.FixUp\(ObjectBase\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_FixUp\_VM\_Managed\_ObjectBase\_), 
[ObjectBase.DoWorkAfterUpdateContents\(\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_DoWorkAfterUpdateContents), 
[ObjectBase.SetOldNameWithNewEntity\(ObjectBase, ObjectBase\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_SetOldNameWithNewEntity\_VM\_Managed\_ObjectBase\_VM\_Managed\_ObjectBase\_), 
[ObjectBase.SetIconColor\(Canvas\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_SetIconColor\_VM\_CAD\_Kernel\_Render\_Canvas\_), 
[ObjectBase.RemoveFromCreatedList\(\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_RemoveFromCreatedList), 
[ObjectBase.PostAddToDocument\(\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_PostAddToDocument), 
[ObjectBase.PostRemoveFromDocument\(Document\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_PostRemoveFromDocument\_VM\_Managed\_Document\_), 
[ObjectBase.GetArgumentList\(LinkedList<ObjectBase\>\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_GetArgumentList\_System\_Collections\_Generic\_LinkedList\_VM\_Managed\_ObjectBase\_\_), 
[ObjectBase.ResetInvalidEntity\(\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_ResetInvalidEntity), 
[ObjectBase.OnDeserialization\(object\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_OnDeserialization\_System\_Object\_), 
[ObjectBase.IsSerializableEvent\(Delegate\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_IsSerializableEvent\_System\_Delegate\_), 
[ObjectBase.CustomGetObjectData\(SerializationInfo, StreamingContext\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_CustomGetObjectData\_System\_Runtime\_Serialization\_SerializationInfo\_System\_Runtime\_Serialization\_StreamingContext\_), 
[ObjectBase.CheckAndUpdateLink\(HashSet<ObjectBase\>\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_CheckAndUpdateLink\_System\_Collections\_Generic\_HashSet\_VM\_Managed\_ObjectBase\_\_), 
[ObjectBase.Verify\(VerifiedResult\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_Verify\_VM\_Managed\_VerifiedResult\_), 
[ObjectBase.ConnectProxy\(\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_ConnectProxy), 
[ObjectBase.RollbackEvent\(\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_RollbackEvent), 
[ObjectBase.LinkRequestUpdating\(object, LinkEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_LinkRequestUpdating\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[ObjectBase.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[ObjectBase.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[ObjectBase.LinkRequestDestroy\(object, LinkEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_LinkRequestDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[ObjectBase.LinkAddedToDocument\(object, AddToDocEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_LinkAddedToDocument\_System\_Object\_VM\_Managed\_AddToDocEventArgs\_), 
[ObjectBase.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_LinkRemovedFromDocument\_System\_Object\_VM\_Managed\_RemoveFromDocEventArgs\_), 
[ObjectBase.DisposeManagedResources\(\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_DisposeManagedResources), 
[ObjectBase.GetDestroyEventExtraData\(\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_GetDestroyEventExtraData), 
[ObjectBase.OnLinkReserved\(ILink, object, EventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_OnLinkReserved\_VM\_Managed\_ILink\_System\_Object\_System\_EventArgs\_), 
[ObjectBase.CreateEntityWhenUpdateContents\(Action\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_CreateEntityWhenUpdateContents\_System\_Action\_), 
[ObjectBase.GetObjectByKey\(UIntPtr\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_GetObjectByKey\_System\_UIntPtr\_), 
[ObjectBase.FindObjectOnXmlDeserialize\(string\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_FindObjectOnXmlDeserialize\_System\_String\_), 
[ObjectBase.UpdateContents\(XmlReader, ObjectBase, string\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_UpdateContents\_System\_Xml\_XmlReader\_VM\_Managed\_ObjectBase\_System\_String\_), 
[ObjectBase.UpdateContents\(XmlReader, ObjectBase\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_UpdateContents\_System\_Xml\_XmlReader\_VM\_Managed\_ObjectBase\_), 
[ObjectBase.UpdateContents\(string, string\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_UpdateContents\_System\_String\_System\_String\_), 
[ObjectBase.UpdateContents\(string\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_UpdateContents\_System\_String\_), 
[ObjectBase.SetFlagWhenXMLFile\(string, bool\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_SetFlagWhenXMLFile\_System\_String\_System\_Boolean\_), 
[ObjectBase.IsEqualArray<T\>\(T\[\], T\[\]\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_IsEqualArray\_\_1\_\_\_0\_\_\_\_\_0\_\_\_), 
[ObjectBase.IsEqualList\(List<double\>, List<double\>\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_IsEqualList\_System\_Collections\_Generic\_List\_System\_Double\_\_System\_Collections\_Generic\_List\_System\_Double\_\_), 
[ObjectBase.SetContainer\(IOwned, bool\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_SetContainer\_VM\_Models\_Pre\_IOwned\_System\_Boolean\_), 
[ObjectBase.GetTargetListForUpdate\(\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_GetTargetListForUpdate), 
[ObjectBase.SkipUpdateObjectImpl\(\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_SkipUpdateObjectImpl), 
[ObjectBase.raise\_OnUpdating\(object, LinkEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_raise\_OnUpdating\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[ObjectBase.raise\_OnUpdate\(object, LinkEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_raise\_OnUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[ObjectBase.raise\_OnDestroying\(object, LinkEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_raise\_OnDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[ObjectBase.raise\_OnDestroy\(object, LinkEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_raise\_OnDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[ObjectBase.raise\_Destroying\(object, Identifier\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_raise\_Destroying\_System\_Object\_VM\_Identifier\_), 
[ObjectBase.raise\_OnAdded\(object, AddToDocEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_raise\_OnAdded\_System\_Object\_VM\_Managed\_AddToDocEventArgs\_), 
[ObjectBase.raise\_OnRemoved\(object, RemoveFromDocEventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_raise\_OnRemoved\_System\_Object\_VM\_Managed\_RemoveFromDocEventArgs\_), 
[ObjectBase.raise\_OnContentsUpdated\(object, EventArgs\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_raise\_OnContentsUpdated\_System\_Object\_System\_EventArgs\_), 
[ObjectBase.Dispose\(bool\)](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_Dispose\_System\_Boolean\_), 
[ObjectBase.SkipModified](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_SkipModified), 
[ObjectBase.ClearChildInfoBeforeDeserialize](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_ClearChildInfoBeforeDeserialize), 
[ObjectBase.KeyImpl](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_KeyImpl), 
[ObjectBase.ID](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_ID), 
[ObjectBase.TopologyEntityTypeName](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_TopologyEntityTypeName), 
[ObjectBase.ObjectStateForCircularError](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_ObjectStateForCircularError), 
[ObjectBase.ObjectState](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_ObjectState), 
[ObjectBase.IsChildExternable](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_IsChildExternable), 
[ObjectBase.IsExternable](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_IsExternable), 
[ObjectBase.Container](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_Container), 
[ObjectBase.Owner](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_Owner), 
[ObjectBase.Document](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_Document), 
[ObjectBase.UntypedEventCore](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_UntypedEventCore), 
[ObjectBase.KernelKey](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_KernelKey), 
[ObjectBase.Key](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_Key), 
[ObjectBase.OnContentsUpdated](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_OnContentsUpdated), 
[ObjectBase.OnRemoved](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_OnRemoved), 
[ObjectBase.OnAdded](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_OnAdded), 
[ObjectBase.Destroying](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_Destroying), 
[ObjectBase.OnDestroy](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_OnDestroy), 
[ObjectBase.OnDestroying](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_OnDestroying), 
[ObjectBase.OnUpdate](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_OnUpdate), 
[ObjectBase.OnUpdating](VM.Managed.ObjectBase.md\#VM\_Managed\_ObjectBase\_OnUpdating), 
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

### <a id="VM_Managed_CAD_BuilderPair__ctor_VM_Managed_CAD_Builder_VM_Managed_CAD_Builder_"></a> BuilderPair\(Builder, Builder\)

Initializes a new instance of the <xref href="VM.Managed.CAD.BuilderBoolean" data-throw-if-not-resolved="false"></xref> class

```csharp
public BuilderPair(Builder builderTarget, Builder builderTool)
```

#### Parameters

`builderTarget` [Builder](VM.Managed.CAD.Builder.md)

The target builder.

`builderTool` [Builder](VM.Managed.CAD.Builder.md)

The tool builder.

### <a id="VM_Managed_CAD_BuilderPair__ctor"></a> BuilderPair\(\)

Initializes a new instance of the <xref href="VM.Managed.CAD.BuilderBoolean" data-throw-if-not-resolved="false"></xref> class

```csharp
public BuilderPair()
```

## Properties

### <a id="VM_Managed_CAD_BuilderPair_Target"></a> Target

Gets or sets the target builder.

```csharp
public Builder Target { get; set; }
```

#### Property Value

 [Builder](VM.Managed.CAD.Builder.md)

### <a id="VM_Managed_CAD_BuilderPair_Tool"></a> Tool

Gets or sets the tool builder.

```csharp
public Builder Tool { get; set; }
```

#### Property Value

 [Builder](VM.Managed.CAD.Builder.md)

## Methods

### <a id="VM_Managed_CAD_BuilderPair_Contains_System_Type_"></a> Contains\(Type\)

```csharp
public override bool Contains(Type typeBuilder)
```

#### Parameters

`typeBuilder` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_CAD_BuilderPair_CopyFilePathWhenImportBuilder_VM_Managed_CAD_Builder_"></a> CopyFilePathWhenImportBuilder\(Builder\)

```csharp
public override void CopyFilePathWhenImportBuilder(Builder buiOriginal)
```

#### Parameters

`buiOriginal` [Builder](VM.Managed.CAD.Builder.md)

### <a id="VM_Managed_CAD_BuilderPair_FillParameter_VM_CAD_Builders_BuilderParamBase_"></a> FillParameter\(BuilderParamBase\)

```csharp
protected override void FillParameter(BuilderParamBase parameter)
```

#### Parameters

`parameter` BuilderParamBase

### <a id="VM_Managed_CAD_BuilderPair_Find_System_String_"></a> Find\(string\)

Find DAFUL object from the container by full name.

```csharp
public virtual IObjectBase Find(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object full name.

#### Returns

 IObjectBase

The DAFUL object.

### <a id="VM_Managed_CAD_BuilderPair_FindLocal_System_String_"></a> FindLocal\(string\)

```csharp
public override ObjectBase FindLocal(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [ObjectBase](VM.Managed.ObjectBase.md)

### <a id="VM_Managed_CAD_BuilderPair_FindLocalImpl_System_String_"></a> FindLocalImpl\(string\)

Find DAFUL object from the container by name.

```csharp
virtual IObjectBase FindLocalImpl(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object name.

#### Returns

 IObjectBase

The DAFUL object.

### <a id="VM_Managed_CAD_BuilderPair_GetBodyType"></a> GetBodyType\(\)

Gets the type of body.

```csharp
public override BodyCreateType GetBodyType()
```

#### Returns

 [BodyCreateType](VM.Managed.CAD.BodyCreateType.md)

### <a id="VM_Managed_CAD_BuilderPair_GetBuildExtraXml_System_Text_StringBuilder_"></a> GetBuildExtraXml\(StringBuilder\)

Get extra build xml info.

```csharp
protected virtual void GetBuildExtraXml(StringBuilder A_0)
```

#### Parameters

`A_0` [StringBuilder](https://learn.microsoft.com/dotnet/api/system.text.stringbuilder)

### <a id="VM_Managed_CAD_BuilderPair_GetNameAttribute_System_String_System_Collections_Generic_List_System_String___"></a> GetNameAttribute\(string, ref List<string\>\)

```csharp
public override void GetNameAttribute(string strPrefix, ref List<string> lstName)
```

#### Parameters

`strPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

`lstName` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Managed_CAD_BuilderPair_GetNewEntityName_System_String_System_Boolean_System_Int32_System_Int32_"></a> GetNewEntityName\(string, bool, int, int\)

Generate an unique DAFUL object name from the container using the prefix name.

```csharp
public virtual string GetNewEntityName(string strPrefix, bool bUseUnderLine, int nNumFigure, int nStartIndex)
```

#### Parameters

`strPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object prefix name.

`bUseUnderLine` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether use underline.

`nNumFigure` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The Number of Figure.

`nStartIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The start index.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object name.

### <a id="VM_Managed_CAD_BuilderPair_GetNewEntityName_System_String_System_Boolean_System_Int32_"></a> GetNewEntityName\(string, bool, int\)

Generate an unique DAFUL object name from the container using the prefix name.

```csharp
public virtual string GetNewEntityName(string strPrefix, bool bUseUnderLine, int nNumFigure)
```

#### Parameters

`strPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object prefix name.

`bUseUnderLine` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether use underline.

`nNumFigure` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The Number of Figure.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object name.

### <a id="VM_Managed_CAD_BuilderPair_GetNewEntityName_System_String_"></a> GetNewEntityName\(string\)

Generate an unique DAFUL object name from the container using the prefix name.

```csharp
public virtual string GetNewEntityName(string strPrefix)
```

#### Parameters

`strPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object prefix name.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object name.

### <a id="VM_Managed_CAD_BuilderPair_GetUnnamedObjectName_System_Object_"></a> GetUnnamedObjectName\(object\)

```csharp
public override string GetUnnamedObjectName(object obUnnamed)
```

#### Parameters

`obUnnamed` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_CAD_BuilderPair_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_CAD_BuilderPair_RebuildGeometry_System_Object_VM_Managed_LinkEventArgs_"></a> RebuildGeometry\(object, LinkEventArgs\)

Rebuild geometry.

```csharp
protected virtual void RebuildGeometry(object objBuilder, LinkEventArgs args)
```

#### Parameters

`objBuilder` [object](https://learn.microsoft.com/dotnet/api/system.object)

The builder.

`args` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The event handler.

### <a id="VM_Managed_CAD_BuilderPair_RemoveFromCreatedList"></a> RemoveFromCreatedList\(\)

```csharp
[Obsolete]
public override void RemoveFromCreatedList()
```

### <a id="VM_Managed_CAD_BuilderPair_ReplaceBuild_VM_Managed_CAD_Builder_VM_Managed_CAD_Builder_"></a> ReplaceBuild\(Builder, Builder\)

```csharp
public override void ReplaceBuild(Builder buildOriginal, Builder buildReplace)
```

#### Parameters

`buildOriginal` [Builder](VM.Managed.CAD.Builder.md)

`buildReplace` [Builder](VM.Managed.CAD.Builder.md)

### <a id="VM_Managed_CAD_BuilderPair_ReplaceData_System_String_System_Object_"></a> ReplaceData\(string, object\)

Replace data

```csharp
public override bool ReplaceData(string strKey, object data)
```

#### Parameters

`strKey` [string](https://learn.microsoft.com/dotnet/api/system.string)

The target data information.

`data` [object](https://learn.microsoft.com/dotnet/api/system.object)

The data for replacing.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_CAD_BuilderPair_SetTransform_VM_Managed_TMatrix_"></a> SetTransform\(TMatrix\)

Sets the transform info.

```csharp
public override void SetTransform(TMatrix matT)
```

#### Parameters

`matT` [TMatrix](VM.Managed.TMatrix.md)

The transform info.

