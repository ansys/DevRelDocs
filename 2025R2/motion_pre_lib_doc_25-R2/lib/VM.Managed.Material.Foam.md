# <a id="VM_Managed_Material_Foam"></a> Class Foam

Namespace: [VM.Managed.Material](VM.Managed.Material.md)  
Assembly: VMObjBase.dll  

This class is to represent foam material.

```csharp
public class Foam : MaterialBase, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, IMaterial, ITemplateObject, IArgument
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
[SubEntity](VM.Managed.SubEntity.md) ← 
[MaterialBase](VM.Managed.Material.MaterialBase.md) ← 
[Foam](VM.Managed.Material.Foam.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
IHistoryObjectSerializable, 
IAttributeContainer, 
ISubEntity, 
IEntityBase, 
IObjectBase, 
IObject, 
ILinkContainer, 
IOwned, 
IHasID, 
IEventProvider, 
IHasKeyObject, 
IHasName, 
IEnabled, 
IHasComment, 
INamed, 
INavigatorItem, 
IMaterial, 
ITemplateObject, 
IArgument

#### Inherited Members

[MaterialBase.Initialize\(Unit.ConvertFactor\)](VM.Managed.Material.MaterialBase.md\#VM\_Managed\_Material\_MaterialBase\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[MaterialBase.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.Material.MaterialBase.md\#VM\_Managed\_Material\_MaterialBase\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[MaterialBase.SetID\(uint\)](VM.Managed.Material.MaterialBase.md\#VM\_Managed\_Material\_MaterialBase\_SetID\_System\_UInt32\_), 
[MaterialBase.WriteTemplateImpl\(XmlWriter\)](VM.Managed.Material.MaterialBase.md\#VM\_Managed\_Material\_MaterialBase\_WriteTemplateImpl\_System\_Xml\_XmlWriter\_), 
[MaterialBase.ReadTemplateImpl\(XmlReader\)](VM.Managed.Material.MaterialBase.md\#VM\_Managed\_Material\_MaterialBase\_ReadTemplateImpl\_System\_Xml\_XmlReader\_), 
[MaterialBase.Density](VM.Managed.Material.MaterialBase.md\#VM\_Managed\_Material\_MaterialBase\_Density), 
[MaterialBase.DensityValue](VM.Managed.Material.MaterialBase.md\#VM\_Managed\_Material\_MaterialBase\_DensityValue), 
[MaterialBase.Index](VM.Managed.Material.MaterialBase.md\#VM\_Managed\_Material\_MaterialBase\_Index), 
[MaterialBase.ReferenceType](VM.Managed.Material.MaterialBase.md\#VM\_Managed\_Material\_MaterialBase\_ReferenceType), 
[MaterialBase.ArgumentType](VM.Managed.Material.MaterialBase.md\#VM\_Managed\_Material\_MaterialBase\_ArgumentType), 
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

### <a id="VM_Managed_Material_Foam__ctor"></a> Foam\(\)

Initializes a new instance of the <xref href="VM.Managed.Material.Foam" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Foam()
```

### <a id="VM_Managed_Material_Foam__ctor_System_String_"></a> Foam\(string\)

Initializes a new instance of the <xref href="VM.Managed.Material.Foam" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Foam(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the foam material.

## Properties

### <a id="VM_Managed_Material_Foam_DampingRatio"></a> DampingRatio

Gets or sets the damping ratio.

```csharp
public ExpressionValueVariable DampingRatio { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_Material_Foam_DisableHScaleFactor"></a> DisableHScaleFactor

Gets or sets a value indicating whether [disable H scale factor].
Use SetDisableHScaleFactor() when this instance sets for undo/redo

```csharp
public bool DisableHScaleFactor { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Material_Foam_Spline"></a> Spline

Gets or sets the spline.

```csharp
public ISpline Spline { get; set; }
```

#### Property Value

 ISpline

### <a id="VM_Managed_Material_Foam_YModulus"></a> YModulus

Gets or sets the Y modulus.

```csharp
public ExpressionValueVariable YModulus { get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_Managed_Material_Foam__Spline"></a> \_Spline

Gets or sets the spline.

```csharp
public Linker<ISpline> _Spline { get; set; }
```

#### Property Value

 Linker<ISpline\>

## Methods

### <a id="VM_Managed_Material_Foam_Initialize_VM_Unit_ConvertFactor_"></a> Initialize\(ConvertFactor\)

Initializes member through unit convert factor.

```csharp
public override void Initialize(Unit.ConvertFactor factor)
```

#### Parameters

`factor` Unit.ConvertFactor

The unit convert factor.

### <a id="VM_Managed_Material_Foam_ReadTemplateImpl_System_Xml_XmlReader_"></a> ReadTemplateImpl\(XmlReader\)

Reads the template document [implementation].

```csharp
protected override void ReadTemplateImpl(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.

### <a id="VM_Managed_Material_Foam_SetDisableHScaleFactor_System_Boolean_"></a> SetDisableHScaleFactor\(bool\)

Set [disable Hscale] factor.

```csharp
public void SetDisableHScaleFactor(bool bFactor)
```

#### Parameters

`bFactor` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The [disable Hscale] factor.

### <a id="VM_Managed_Material_Foam_WriteTemplateImpl_System_Xml_XmlWriter_"></a> WriteTemplateImpl\(XmlWriter\)

Writes the template document [implementation].

```csharp
protected override void WriteTemplateImpl(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

