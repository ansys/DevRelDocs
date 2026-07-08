#  Class SymmetricManager

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This class is to represent the symmetric manager.

```csharp
public sealed class SymmetricManager : SubEntity, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IHistoryObjectSerializable, IAttributeContainer, ISubEntity, IEntityBase, IObjectBase, IObject, ILinkContainer, IOwned, IHasID, IEventProvider, IHasKeyObject, IHasName, IEnabled, IHasComment, INamed, INavigatorItem, ISymmetricManager, ITransformable, ISetLinkForSymmetricManager
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
ObjectBase ← 
Object<ObjectEventCore\> ← 
[SubEntity](VM.Managed.SubEntity.md) ← 
[SymmetricManager](VM.Managed.SymmetricManager.md)

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
ISymmetricManager, 
ITransformable, 
[ISetLinkForSymmetricManager](VM.Managed.ISetLinkForSymmetricManager.md)

#### Inherited Members

[SubEntity.Initialize\(Unit.ConvertFactor\)](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[SubEntity.FixUp\(ObjectBase\)](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_FixUp\_VM\_Managed\_ObjectBase\_), 
[SubEntity.Name](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_Name), 
[SubEntity.FullName](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_FullName), 
[SubEntity.NonSymmetricName](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_NonSymmetricName), 
[SubEntity.DisplayName](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_DisplayName), 
[SubEntity.IsEnabled](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_IsEnabled), 
[SubEntity.Comment](VM.Managed.SubEntity.md\#VM\_Managed\_SubEntity\_Comment), 
Object<ObjectEventCore\>.GetKey\(\), 
Object<ObjectEventCore\>.Initialize\(Unit.ConvertFactor\), 
Object<ObjectEventCore\>.SetIconColor\(Canvas\), 
Object<ObjectEventCore\>.OnDeserializedCore\(object\), 
Object<ObjectEventCore\>.Key, 
Object<ObjectEventCore\>.UntypedEventCore, 
Object<ObjectEventCore\>.EventCore, 
Object<ObjectEventCore\>.Attributes, 
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
ObservableObject.Dispose\(\), 
ObservableObject.RaisePropertyChanged\(string\), 
ObservableObject.RaisePropertyChanged\(string, object, object\), 
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

### <a id="VM_Managed_SymmetricManager__ctor_VM_Managed_ObjectBase_VM_Managed_Document3D_"></a> SymmetricManager\(ObjectBase, Document3D\)

Initializes a new instance of the <xref href="VM.Managed.SymmetricManager" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SymmetricManager(ObjectBase Obj, Document3D docOwner)
```

#### Parameters

`Obj` ObjectBase

The object.

`docOwner` Document3D

The document.

## Fields

### <a id="VM_Managed_SymmetricManager_dgOnlyUpdateName"></a> dgOnlyUpdateName

delegate for update name

```csharp
public SymmetricManager.OnlyUpdateName dgOnlyUpdateName
```

#### Field Value

 [SymmetricManager](VM.Managed.SymmetricManager.md).[OnlyUpdateName](VM.Managed.SymmetricManager.OnlyUpdateName.md)

## Properties

### <a id="VM_Managed_SymmetricManager_Left"></a> Left

Gets or sets the left object.

```csharp
public ObjectBase Left { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_SymmetricManager_NonSymmetric"></a> NonSymmetric

Gets or sets a value indicating whether [non symmetric].

```csharp
public bool NonSymmetric { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_SymmetricManager_Original"></a> Original

Gets the original object.

```csharp
public ObjectBase Original { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_SymmetricManager_Right"></a> Right

Gets or sets the right object.

```csharp
public ObjectBase Right { get; }
```

#### Property Value

 ObjectBase

### <a id="VM_Managed_SymmetricManager_SymType"></a> SymType

Gets or sets the type of the symmetric.

```csharp
public SymmetricType SymType { get; set; }
```

#### Property Value

 SymmetricType

### <a id="VM_Managed_SymmetricManager_SymmetricBuilder"></a> SymmetricBuilder

Gets the symmetric builder.

```csharp
public static SymmetricManager.SymmetricFactory<ISymmetricBuilder> SymmetricBuilder { get; }
```

#### Property Value

 [SymmetricManager](VM.Managed.SymmetricManager.md).[SymmetricFactory](VM.Managed.SymmetricManager.SymmetricFactory\-1.md)<ISymmetricBuilder\>

### <a id="VM_Managed_SymmetricManager_SymmetricUpdater"></a> SymmetricUpdater

Gets the symmetric updater.

```csharp
public static SymmetricManager.SymmetricFactory<ISymmetricUpdater> SymmetricUpdater { get; }
```

#### Property Value

 [SymmetricManager](VM.Managed.SymmetricManager.md).[SymmetricFactory](VM.Managed.SymmetricManager.SymmetricFactory\-1.md)<ISymmetricUpdater\>

## Methods

### <a id="VM_Managed_SymmetricManager_FixUp_VM_Managed_ObjectBase_"></a> FixUp\(ObjectBase\)

Before destroy the old object, perform a work.

```csharp
public override bool FixUp(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The old object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_SymmetricManager_GetModelNavigatorInformationImpl_System_Xml_XmlDocument_System_Xml_XmlElement_System_Boolean_"></a> GetModelNavigatorInformationImpl\(XmlDocument, XmlElement, bool\)

Gets the object information for model navigator [implementation].

```csharp
protected override bool GetModelNavigatorInformationImpl(XmlDocument xmlDom, XmlElement xmlEle, bool bHasChild)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XmlDocument for object.

`xmlEle` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

The XmlElement for object.

`bHasChild` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [b has child].

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_SymmetricManager_GetSchema"></a> GetSchema\(\)

This method is reserved and should not be used. When implementing the IXmlSerializable interface, you should return null (Nothing in Visual Basic) from this method, and instead, if specifying a custom schema is required, apply the <xref href="System.Xml.Serialization.XmlSchemaProviderAttribute" data-throw-if-not-resolved="false"></xref> to the class.

```csharp
public XmlSchema GetSchema()
```

#### Returns

 [XmlSchema](https://learn.microsoft.com/dotnet/api/system.xml.schema.xmlschema)

An <xref href="System.Xml.Schema.XmlSchema" data-throw-if-not-resolved="false"></xref> that describes the XML representation of the object that is produced by the <xref href="System.Xml.Serialization.IXmlSerializable.WriteXml(System.Xml.XmlWriter)" data-throw-if-not-resolved="false"></xref> method and consumed by the <xref href="System.Xml.Serialization.IXmlSerializable.ReadXml(System.Xml.XmlReader)" data-throw-if-not-resolved="false"></xref> method.

### <a id="VM_Managed_SymmetricManager_LinkRequestDestroy_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroy\(object, LinkEventArgs\)

Request for destroy the linked object.

```csharp
protected override void LinkRequestDestroy(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_SymmetricManager_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_SymmetricManager_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

Generates an object from its XML representation.

```csharp
public void ReadXml(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The <xref href="System.Xml.XmlReader" data-throw-if-not-resolved="false"></xref> stream from which the object is deserialized.

### <a id="VM_Managed_SymmetricManager_SetDataAfterAddManager_VM_Managed_Document_"></a> SetDataAfterAddManager\(Document\)

Sets the data after add manager.

```csharp
public void SetDataAfterAddManager(Document doc)
```

#### Parameters

`doc` Document

### <a id="VM_Managed_SymmetricManager_SetSymType_VM_Managed_SymmetricType_"></a> SetSymType\(SymmetricType\)

Set symmetric type.

```csharp
public void SetSymType(SymmetricType type)
```

#### Parameters

`type` SymmetricType

The symmetric type.

### <a id="VM_Managed_SymmetricManager_SetSymmetricDictionary_System_String_"></a> SetSymmetricDictionary\(string\)

Sets the symmetric dictionary.

```csharp
public static bool SetSymmetricDictionary(string fileDir)
```

#### Parameters

`fileDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file directory.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_SymmetricManager_SkipUpdateObjectImpl"></a> SkipUpdateObjectImpl\(\)

Skip the object that updated.

```csharp
public override bool SkipUpdateObjectImpl()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_SymmetricManager_UpdateAssembly_VM_Managed_Document_VM_Managed_ObjectBase_"></a> UpdateAssembly\(Document, ObjectBase\)

Updates the assembly.

```csharp
public void UpdateAssembly(Document doc, ObjectBase target)
```

#### Parameters

`doc` Document

The document.

`target` ObjectBase

The target object.

### <a id="VM_Managed_SymmetricManager_UpdateSymmetric"></a> UpdateSymmetric\(\)

Updates the symmetric objects.

```csharp
public void UpdateSymmetric()
```

### <a id="VM_Managed_SymmetricManager_UpdateSymmetric_VM_Managed_ObjectBase_"></a> UpdateSymmetric\(ObjectBase\)

Updates the symmetric objects.
<param name="objTarget">The target.</param>

```csharp
public void UpdateSymmetric(ObjectBase objTarget)
```

#### Parameters

`objTarget` ObjectBase

### <a id="VM_Managed_SymmetricManager_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

Converts an object into its XML representation.

```csharp
public void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The <xref href="System.Xml.XmlWriter" data-throw-if-not-resolved="false"></xref> stream to which the object is serialized.

