# Class DesignVariable

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This class is to represent the design variable.

```csharp
public class DesignVariable : DesignSubEntity, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, INamed, INavigatorItem, IInterface, ITemplateObject, IEntityRelation, IDesignVariable, IDesignSubEntity, ISubEntity, IEntityBase, IObjectBase, IHasKeyObject, IHasName, IEnabled, IHasComment, IVariable, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IDraw, IReferencable, IArgument
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
[SubEntity](VM.Managed.SubEntity.md) ← 
[DesignSubEntity](VM.Managed.DesignSubEntity.md) ← 
[DesignVariable](VM.Managed.DesignVariable.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
IHistoryObjectSerializable, 
IAttributeContainer, 
INamed, 
INavigatorItem, 
[IInterface](VM.Managed.IInterface.md), 
ITemplateObject, 
IEntityRelation, 
IDesignVariable, 
IDesignSubEntity, 
ISubEntity, 
IEntityBase, 
IObjectBase, 
IHasKeyObject, 
IHasName, 
IEnabled, 
IHasComment, 
IVariable, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
IDraw, 
IReferencable, 
IArgument

#### Inherited Members

[DesignSubEntity.m\_bSkipToUpdateSymmetric](VM.Managed.DesignSubEntity.md\#VM\_Managed\_DesignSubEntity\_m\_bSkipToUpdateSymmetric), 
[DesignSubEntity.g\_dicUpdatedDesignSubEntity](VM.Managed.DesignSubEntity.md\#VM\_Managed\_DesignSubEntity\_g\_dicUpdatedDesignSubEntity), 
[DesignSubEntity.FixUp\(ObjectBase\)](VM.Managed.DesignSubEntity.md\#VM\_Managed\_DesignSubEntity\_FixUp\_VM\_Managed\_ObjectBase\_), 
[DesignSubEntity.CheckCircularReference\(\)](VM.Managed.DesignSubEntity.md\#VM\_Managed\_DesignSubEntity\_CheckCircularReference), 
[DesignSubEntity.BindInterfaceImpl\(TMatrix, TMatrix, IInterface\)](VM.Managed.DesignSubEntity.md\#VM\_Managed\_DesignSubEntity\_BindInterfaceImpl\_VM\_Managed\_TMatrix\_VM\_Managed\_TMatrix\_VM\_Managed\_IInterface\_), 
[DesignSubEntity.IsInterface](VM.Managed.DesignSubEntity.md\#VM\_Managed\_DesignSubEntity\_IsInterface), 
[SubEntity.Initialize\(Unit.ConvertFactor\)](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[SubEntity.GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_GetModelNavigatorInformationImpl\_System\_Xml\_XmlDocument\_System\_Xml\_XmlElement\_System\_Boolean\_), 
[SubEntity.FixUp\(ObjectBase\)](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_FixUp\_VM\_Managed\_ObjectBase\_), 
[SubEntity.WriteTemplateImpl\(XmlWriter\)](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_WriteTemplateImpl\_System\_Xml\_XmlWriter\_), 
[SubEntity.ReadTemplateImpl\(XmlReader\)](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_ReadTemplateImpl\_System\_Xml\_XmlReader\_), 
[SubEntity.Name](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_Name), 
[SubEntity.FullName](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_FullName), 
[SubEntity.NonSymmetricName](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_NonSymmetricName), 
[SubEntity.DisplayName](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_DisplayName), 
[SubEntity.IsEnabled](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_IsEnabled), 
[SubEntity.Comment](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_Comment), 
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

### DesignVariable\(\)

Initializes a new instance of the <xref href="VM.Managed.DesignVariable" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DesignVariable()
```

### DesignVariable\(string\)

Initializes a new instance of the <xref href="VM.Managed.DesignVariable" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DesignVariable(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the design variable.

## Properties

### ArgumentType

Gets the type of the argument

```csharp
public ArgumentTypes ArgumentType { get; }
```

#### Property Value

 ArgumentTypes

### Hide

Gets or sets a value indicating whether this instance is hide.

```csharp
public bool Hide { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsDesignParam

Gets or sets a value indicating whether this instance is the peformance index.

```csharp
public bool IsDesignParam { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ReferenceType

Gets the type of the array for argument.

```csharp
public string ReferenceType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Value

Gets the value.

```csharp
public double Value { get; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### Variable

Gets or sets the expression value.

```csharp
public ExpressionValueVariable Variable { get; set; }
```

#### Property Value

 ExpressionValueVariable

## Methods

### BindInterfaceImpl\(TMatrix, TMatrix, IInterface\)

Binds the interface [implementation].

```csharp
protected override sealed void BindInterfaceImpl(TMatrix matFrom, TMatrix matTo, IInterface itf)
```

#### Parameters

`matFrom` TMatrix

The matrix before transformation.

`matTo` TMatrix

The matrix after transformation.

`itf` [IInterface](VM.Managed.IInterface.md)

The interface.

### Draw\(Canvas\)

Draws the icon.

```csharp
public virtual void Draw(Canvas canvas)
```

#### Parameters

`canvas` Canvas

The canvas has icon information.

### FinalizeUpdate\(\)

Finalize the update.

```csharp
public bool FinalizeUpdate()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetFullName\(\)

Gets the full name.

```csharp
public string GetFullName()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The full name.

### Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### IsEmptyFinalizeUpdate\(\)

```csharp
public bool IsEmptyFinalizeUpdate()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### ReadTemplateImpl\(XmlReader\)

Reads the template document [implementation].

```csharp
protected override void ReadTemplateImpl(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.

### WriteTemplateImpl\(XmlWriter\)

Writes the template document [implementation].

```csharp
protected override void WriteTemplateImpl(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

### OnFinalizeUpdate

```csharp
public event DesignVariable.FinalizeUpdateCallBack OnFinalizeUpdate
```

#### Event Type

 [DesignVariable](VM.Managed.DesignVariable.md).[FinalizeUpdateCallBack](VM.Managed.DesignVariable.FinalizeUpdateCallBack.md)


