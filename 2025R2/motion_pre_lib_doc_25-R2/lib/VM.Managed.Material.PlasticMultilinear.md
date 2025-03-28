# <a id="VM_Managed_Material_PlasticMultilinear"></a> Class PlasticMultilinear

Namespace: [VM.Managed.Material](VM.Managed.Material.md)  
Assembly: VMObjBase.dll  

This class is to represent plastic multi-linear material.

```csharp
public class PlasticMultilinear : Plastic, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, IMaterial, ITemplateObject, IArgument
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
[SubEntity](VM.Managed.SubEntity.md) ← 
[Plastic](VM.Managed.Material.Plastic.md) ← 
[PlasticMultilinear](VM.Managed.Material.PlasticMultilinear.md)

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

[Plastic.Initialize\(Unit.ConvertFactor\)](VM.Managed.Material.Plastic.md\#VM\_Managed\_Material\_Plastic\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[Plastic.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.Material.Plastic.md\#VM\_Managed\_Material\_Plastic\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[Plastic.CheckLinearMaterial\(\)](VM.Managed.Material.Plastic.md\#VM\_Managed\_Material\_Plastic\_CheckLinearMaterial), 
[Plastic.WriteTemplateImpl\(XmlWriter\)](VM.Managed.Material.Plastic.md\#VM\_Managed\_Material\_Plastic\_WriteTemplateImpl\_System\_Xml\_XmlWriter\_), 
[Plastic.ReadTemplateImpl\(XmlReader\)](VM.Managed.Material.Plastic.md\#VM\_Managed\_Material\_Plastic\_ReadTemplateImpl\_System\_Xml\_XmlReader\_), 
[Plastic.SetID\(uint\)](VM.Managed.Material.Plastic.md\#VM\_Managed\_Material\_Plastic\_SetID\_System\_UInt32\_), 
[Plastic.Material](VM.Managed.Material.Plastic.md\#VM\_Managed\_Material\_Plastic\_Material), 
[Plastic.\_Material](VM.Managed.Material.Plastic.md\#VM\_Managed\_Material\_Plastic\_\_Material), 
[Plastic.InitialYieldingStress](VM.Managed.Material.Plastic.md\#VM\_Managed\_Material\_Plastic\_InitialYieldingStress), 
[Plastic.HardeningType](VM.Managed.Material.Plastic.md\#VM\_Managed\_Material\_Plastic\_HardeningType), 
[Plastic.HardeningParameter](VM.Managed.Material.Plastic.md\#VM\_Managed\_Material\_Plastic\_HardeningParameter), 
[Plastic.DensityValue](VM.Managed.Material.Plastic.md\#VM\_Managed\_Material\_Plastic\_DensityValue), 
[Plastic.Index](VM.Managed.Material.Plastic.md\#VM\_Managed\_Material\_Plastic\_Index), 
[Plastic.ReferenceType](VM.Managed.Material.Plastic.md\#VM\_Managed\_Material\_Plastic\_ReferenceType), 
[Plastic.ArgumentType](VM.Managed.Material.Plastic.md\#VM\_Managed\_Material\_Plastic\_ArgumentType), 
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

### <a id="VM_Managed_Material_PlasticMultilinear__ctor"></a> PlasticMultilinear\(\)

Initializes a new instance of the <xref href="VM.Managed.Material.PlasticMultilinear" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PlasticMultilinear()
```

### <a id="VM_Managed_Material_PlasticMultilinear__ctor_System_String_"></a> PlasticMultilinear\(string\)

Initializes a new instance of the <xref href="VM.Managed.Material.PlasticMultilinear" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PlasticMultilinear(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the plastic multi-linear material.

## Properties

### <a id="VM_Managed_Material_PlasticMultilinear_Spline"></a> Spline

Gets or sets the spline.

```csharp
public ISpline Spline { get; set; }
```

#### Property Value

 ISpline

### <a id="VM_Managed_Material_PlasticMultilinear__Spline"></a> \_Spline

Gets or sets the spline.

```csharp
public Linker<ISpline> _Spline { get; set; }
```

#### Property Value

 Linker<ISpline\>

## Methods

### <a id="VM_Managed_Material_PlasticMultilinear_CheckLinearMaterial"></a> CheckLinearMaterial\(\)

check linear material.

```csharp
public override void CheckLinearMaterial()
```

### <a id="VM_Managed_Material_PlasticMultilinear_CheckLinearMaterial_VM_Managed_Material_ISO_System_String_VM_Managed_ISpline_"></a> CheckLinearMaterial\(ISO, string, ISpline\)

check linear material.

```csharp
public static void CheckLinearMaterial(ISO linearMaterial, string strName, ISpline spline)
```

#### Parameters

`linearMaterial` [ISO](VM.Managed.Material.ISO.md)

The linear material.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The plastic material name.

`spline` ISpline

The spline.

### <a id="VM_Managed_Material_PlasticMultilinear_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_Material_PlasticMultilinear_PostOpenDocument_VM_Managed_Document3D_"></a> PostOpenDocument\(Document3D\)

Posts the open document.

```csharp
public void PostOpenDocument(Document3D doc3D)
```

#### Parameters

`doc3D` Document3D

The document.

### <a id="VM_Managed_Material_PlasticMultilinear_ReadTemplateImpl_System_Xml_XmlReader_"></a> ReadTemplateImpl\(XmlReader\)

Reads the template document [implementation].

```csharp
protected override void ReadTemplateImpl(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.

### <a id="VM_Managed_Material_PlasticMultilinear_WriteTemplateImpl_System_Xml_XmlWriter_"></a> WriteTemplateImpl\(XmlWriter\)

Writes the template document [implementation].

```csharp
protected override void WriteTemplateImpl(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

