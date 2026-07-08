# Class Sets
<a id="VM_Managed_DAFUL_FE_Sets"></a>

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This class is to represent the various set.

```csharp
public class Sets : Container, IObservableObject, IDisposableObject, ILinkable, IObject, IEventProvider, ILinkContainerEvent, IVerifiable, IContainer, ILinkContainer, IOwned, IHasID
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
Container ← 
[Sets](VM.Managed.DAFUL.FE.Sets.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
IObject, 
IEventProvider, 
ILinkContainerEvent, 
IVerifiable, 
IContainer, 
ILinkContainer, 
IOwned, 
IHasID

#### Inherited Members

Container.Find\(string\), 
Container.FindLocal\(string\), 
Container.GetUnnamedObjectName\(object\), 
Container.GetNewEntityName\(string, bool, int, int\), 
Container.GetNewEntityName\(string, bool, int\), 
Container.GetNewEntityName\(string\), 
LinkContainer.SetModified\(\), 
LinkContainer.raise\_OnUpdating\(object, LinkEventArgs\), 
LinkContainer.raise\_OnUpdate\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroying\(object, LinkEventArgs\), 
LinkContainer.raise\_OnDestroy\(object, LinkEventArgs\), 
LinkContainer.raise\_OnAdded\(object, AddToDocEventArgs\), 
LinkContainer.raise\_OnRemoved\(object, RemoveFromDocEventArgs\), 
LinkContainer.GetTargetListForUpdate\(\), 
LinkContainer.SkipUpdateObjectImpl\(\), 
LinkContainer.Initialize\(Unit.ConvertFactor\), 
LinkContainer.SetFlagWhenXMLFile\(string, bool\), 
LinkContainer.IsSerializableEvent\(Delegate\), 
LinkContainer.CustomGetObjectData\(SerializationInfo, StreamingContext\), 
LinkContainer.GetSerializedData\(SerializationInfo, StreamingContext\), 
LinkContainer.LinkRequestUpdating\(object, LinkEventArgs\), 
LinkContainer.LinkRequestUpdate\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroying\(object, LinkEventArgs\), 
LinkContainer.LinkRequestDestroy\(object, LinkEventArgs\), 
LinkContainer.LinkAddedToDocument\(object, AddToDocEventArgs\), 
LinkContainer.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\), 
LinkContainer.OnLinkReserved\(ILink, object, EventArgs\), 
LinkContainer.CanBeDestroy\(object\), 
LinkContainer.DisposeManagedResources\(\), 
LinkContainer.SetContainer\(IOwned, bool\), 
LinkContainer.OnChildUpdated\(object, LinkEventArgs\), 
LinkContainer.OnContainerDestroy\(object, LinkEventArgs\), 
LinkContainer.OnDeserialization\(object\), 
LinkContainer.Verify\(VerifiedResult\), 
LinkContainer.GetCopy\(object\), 
LinkContainer.Dispose\(bool\), 
LinkContainer.ClearChildInfoBeforeDeserialize, 
LinkContainer.Container, 
LinkContainer.Owner, 
LinkContainer.Document, 
LinkContainer.ID, 
LinkContainer.IsChildExternable, 
LinkContainer.IsExternable, 
LinkContainer.OnRemoved, 
LinkContainer.OnAdded, 
LinkContainer.OnDestroy, 
LinkContainer.OnDestroying, 
LinkContainer.OnUpdate, 
LinkContainer.OnUpdating, 
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

### <a id="VM_Managed_DAFUL_FE_Sets__ctor"></a> Sets\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.Sets" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Sets()
```

## Properties

### <a id="VM_Managed_DAFUL_FE_Sets_EdgeSets"></a> EdgeSets

Gets the edge set container.

```csharp
public NamedObjectDictionary<SetEdge> EdgeSets { get; }
```

#### Property Value

 [NamedObjectDictionary](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/NamedObjectDictionary.cs)<[SetEdge](VM.Managed.DAFUL.FE.SetEdge.md)\>

### <a id="VM_Managed_DAFUL_FE_Sets_ElementSets"></a> ElementSets

Gets the element set container.

```csharp
public NamedObjectDictionary<SetElement> ElementSets { get; }
```

#### Property Value

 [NamedObjectDictionary](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/NamedObjectDictionary.cs)<[SetElement](VM.Managed.DAFUL.FE.SetElement.md)\>

### <a id="VM_Managed_DAFUL_FE_Sets_NodeSets"></a> NodeSets

Gets the node set container.

```csharp
public NamedObjectDictionary<SetNode> NodeSets { get; }
```

#### Property Value

 [NamedObjectDictionary](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/NamedObjectDictionary.cs)<[SetNode](VM.Managed.DAFUL.FE.SetNode.md)\>

### <a id="VM_Managed_DAFUL_FE_Sets_PatchSets"></a> PatchSets

Gets the patch set container.

```csharp
public NamedObjectDictionary<SetPatch> PatchSets { get; }
```

#### Property Value

 [NamedObjectDictionary](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/NamedObjectDictionary.cs)<[SetPatch](VM.Managed.DAFUL.FE.SetPatch.md)\>

## Methods

### <a id="VM_Managed_DAFUL_FE_Sets_Add_System_Object_"></a> Add\(object\)

Add set to this instance.

```csharp
public void Add(object ob)
```

#### Parameters

`ob` object

The set.

### <a id="VM_Managed_DAFUL_FE_Sets_FindLocal_System_String_"></a> FindLocal\(string\)

Finds an object that matches a specified name in local.

```csharp
public override IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` string

Name to search for.

#### Returns

 IObjectBase

An object that matches a specified name.

### <a id="VM_Managed_DAFUL_FE_Sets_GetSchema"></a> GetSchema\(\)

This method is reserved and should not be used. When implementing the IXmlSerializable interface, you should return null (Nothing in Visual Basic) from this method, and instead, if specifying a custom schema is required, apply the <xref href="System.Xml.Serialization.XmlSchemaProviderAttribute" data-throw-if-not-resolved="false"></xref> to the class.

```csharp
public virtual XmlSchema GetSchema()
```

#### Returns

 XmlSchema

An <xref href="System.Xml.Schema.XmlSchema" data-throw-if-not-resolved="false"></xref> that describes the XML representation of the object that is produced by the <xref href="System.Xml.Serialization.IXmlSerializable.WriteXml(System.Xml.XmlWriter)" data-throw-if-not-resolved="false"></xref> method and consumed by the <xref href="System.Xml.Serialization.IXmlSerializable.ReadXml(System.Xml.XmlReader)" data-throw-if-not-resolved="false"></xref> method.

### <a id="VM_Managed_DAFUL_FE_Sets_InitChilds"></a> InitChilds\(\)

Initializes sets in this instance.

```csharp
public void InitChilds()
```

### <a id="VM_Managed_DAFUL_FE_Sets_MakeReference_System_Collections_Generic_LinkedList_VM_Managed_Reference__"></a> MakeReference\(LinkedList<Reference\>\)

```csharp
public void MakeReference(LinkedList<Reference> lstRef)
```

#### Parameters

`lstRef` LinkedList<Reference\>

### <a id="VM_Managed_DAFUL_FE_Sets_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
public override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

### <a id="VM_Managed_DAFUL_FE_Sets_ReadXml_System_Xml_XmlReader_"></a> ReadXml\(XmlReader\)

Generates an object from its XML representation.

```csharp
public virtual void ReadXml(XmlReader reader)
```

#### Parameters

`reader` XmlReader

The <xref href="System.Xml.XmlReader" data-throw-if-not-resolved="false"></xref> stream from which the object is deserialized.

### <a id="VM_Managed_DAFUL_FE_Sets_Remove_System_Object_"></a> Remove\(object\)

Remove set from this instance.

```csharp
public void Remove(object ob)
```

#### Parameters

`ob` object

The set.

### <a id="VM_Managed_DAFUL_FE_Sets_WriteXml_System_Xml_XmlWriter_"></a> WriteXml\(XmlWriter\)

Converts an object into its XML representation.

```csharp
public virtual void WriteXml(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

The <xref href="System.Xml.XmlWriter" data-throw-if-not-resolved="false"></xref> stream to which the object is serialized.

