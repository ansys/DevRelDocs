# Class PropertyDocumentBase
<a id="VM_Managed_PropertyDocumentBase"></a>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This base class is to represent the propety document base.

```csharp
public abstract class PropertyDocumentBase : Document, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IDocument, IObject, IEventProvider, IContainer, ILinkContainer, IOwned, IHasID, IEnableManager, IRelatedDocument, IHistorySupport, IPropertyDocument, IUnitChange, IXMLFormatable
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
Container ← 
Document ← 
[PropertyDocumentBase](VM.Managed.PropertyDocumentBase.md)

#### Derived

[PropertyDocument<TProp\>](VM.Managed.PropertyDocument\-1.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
IDocument, 
IObject, 
IEventProvider, 
IContainer, 
ILinkContainer, 
IOwned, 
IHasID, 
IEnableManager, 
IRelatedDocument, 
[IHistorySupport](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/Interfaces.cs), 
[IPropertyDocument](VM.Managed.IPropertyDocument.md), 
[IUnitChange](VM.Managed.IUnitChange.md), 
IXMLFormatable

#### Inherited Members

Document.g\_OpenDocuments, 
Document.m\_unit, 
Document.m\_unitKernal, 
Document.raise\_OnChildAdded\(object, DocumentEventArgs\), 
Document.raise\_OnChildRemoved\(object, DocumentEventArgs\), 
Document.raise\_OnChildRenamed\(object, DocumentEventArgs\), 
Document.raise\_OnChildUpdated\(object, DocumentEventArgs\), 
Document.raise\_OnChildUpdatedEnable\(object, DocumentEventArgs\), 
Document.raise\_OnChildUpdatedAll\(object, DocumentEventArgs\), 
Document.raise\_OnChildDocNameUpdated\(object, DocumentEventArgs\), 
Document.raise\_OnDependentDocumentAdded\(object, DependentDocEventArgs\), 
Document.raise\_OnDependentDocumentRemoved\(object, DependentDocEventArgs\), 
Document.raise\_OnClearSelectNavigator\(object, DocumentEventArgs\), 
Document.raise\_OnChildRootSelect\(object, DocumentEventArgs\), 
Document.raise\_OnChangeIconForNodalModal\(object, DocumentEventArgs\), 
Document.raise\_OnDoingImport\(object, DocumentEventArgs\), 
Document.raise\_OnSkipChildAdded\(object, DocumentEventArgs\), 
Document.raise\_OnSimulationCaseUpdated\(object, EventArgs\), 
Document.raise\_OnSubentityRefreshed\(object, EventArgs\), 
Document.raise\_OnSubentityAdded\(object, DocumentEventArgs\), 
Document.raise\_OnChildMultiAdded\(object, DocumentEventArgs\), 
Document.raise\_OnSingleObjectSelected\(object, ObjectBaseEventArgs\), 
Document.raise\_Destroying\(object, EventArgs\), 
Document.raise\_ChildAdded\(object, Identifier\), 
Document.raise\_ChildRemoved\(object, Identifier\), 
Document.raise\_ChildReplacing\(object, Identifier\), 
Document.raise\_ChildReplaced\(object, Identifier\), 
Document.raise\_SelectionChanged\(object, IEnumerable<Identifier\>\), 
Document.Initialize\(Document.OpenDoc, Document.BrowseFile, Document.IsOpenDoc, Document.GetDocFromOpenedDoc, Document.ActiveDocChange, Document.ActiveViewChange\), 
Document.Open\(string, bool, bool\), 
Document.Open\(string, bool\), 
Document.Open\(string\), 
Document.Open\(string, string, bool\), 
Document.Open\(string, string\), 
Document.TryOpen\(string, LoadSerializeContext, bool\), 
Document.TryOpen\(string, string, bool\), 
Document.TryOpen\(string, string\), 
Document.GetDocumentFromOpenedDocument\(string\), 
Document.IsOpen\(string\), 
Document.ActiveChangedDoc\(\), 
Document.ActiveChangedView\(\), 
Document.Save\(string\), 
Document.PostSave\(List<Document\>, bool\), 
Document.CreateView\(UIntPtr\), 
Document.CloseView\(View\), 
Document.Add\(ObjectBase\), 
Document.UpdateEnable\(ObjectBase, bool\), 
Document.UpdateInterface\(ObjectBase, bool\), 
Document.IsTypeSupported\(Type\), 
Document.AddToSelectionList\(ObjectBase\), 
Document.CancelSelection\(bool, bool\), 
Document.ExitCommandMode\(\), 
Document.PostOpenDocument\(\), 
Document.PostOpenDocumentAfterHookEvent\(\), 
Document.PostOpenDocumentAfterErrCheckEvent\(\), 
Document.PostOpenDocumentAfterRestoreObjectID\(\), 
Document.PostOpenDocumentAfterSetFilePath\(\), 
Document.PostCloseDocument\(\), 
Document.LinkRequestDestroy\(object, LinkEventArgs\), 
Document.PostOpenDocumentAndInitLayer\(\), 
Document.DisplayModeShape\(int, double\), 
Document.EnableModeShape\(bool\), 
Document.GetData\(XmlNode\), 
Document.SetData\(XmlNode\), 
Document.OperationBegin\(\), 
Document.OperationEnd\(\), 
Document.GetCopyOfUnit\(\), 
Document.GetCopyOfKernelUnit\(\), 
Document.FastToConvertUnitLength\(bool\), 
Document.ContainsNameAttribute\(string\), 
Document.ReplacesNameAttribute\(string, string\), 
Document.GetUniqueNameAttribute\(string\), 
Document.UpdateItemInNavigaterForUndoRedo\(IObjectBase\), 
Document.AddItemToNavigaterForUndoRedo\(ObjectBase\), 
Document.RemoveItemFromNavigaterForUndoRedo\(ObjectBase\), 
Document.RenameItemFromNavigaterForUndoRedo\(ObjectBase\), 
Document.UpdateAllItemInNavigaterForUndoRedo\(\), 
Document.UpdateSimulationConfigurationForUndoRedo\(\), 
Document.AddItemToSubEntityForUndoRedo\(ObjectBase\), 
Document.AddReferenceForUndoRedo\(ObjectBase\), 
Document.RefreshReferenceForUndoRedo\(ObjectBase\), 
Document.AddToIDMap\(IObject\), 
Document.FindObjectFromID\(Identifier\), 
Document.FindObjectFromKey\(UIntPtr\), 
Document.RemoveFromIDMap\(IObject\), 
Document.WriteIDInformation\(\), 
Document.GetNextIdentifier\(\), 
Document.GetChildren\(\), 
Document.Close\(\), 
Document.SetUnit\(Unit\), 
Document.SetKernelUnit\(string\), 
Document.IsEnabledImpl\(ObjectBase\), 
Document.SetEnableImpl\(ObjectBase, bool\), 
Document.OnDeserialization\(object\), 
Document.OnPostMakeDocument\(DocCreateInfo\), 
Document.RegisterAddon\(\), 
Document.OnContainerDestroy\(object, LinkEventArgs\), 
Document.ClearDocument\(\), 
Document.Dispose\(bool\), 
Document.KeepOldKernelUnit, 
Document.ClearChildInfoBeforeDeserialize, 
Document.ExpressionParser, 
Document.IsHideEntityListWindow, 
Document.IsHideFilterWindow, 
Document.SelectedLayoutAlgorithmType, 
Document.FilterdTypes, 
Document.CloseAllDialogWhenCloseDoc, 
Document.DoingOpen, 
Document.DoingClose, 
Document.Attributes, 
Document.AutoSaved, 
Document.IsChildExternable, 
Document.IsExternable, 
Document.IsReplaced, 
Document.FilePath, 
Document.DocumentName, 
Document.InitialConvertFactor, 
Document.DocumentSessionOverride, 
Document.CanClose, 
Document.Modified, 
Document.SelectionChanged, 
Document.ChildReplaced, 
Document.ChildReplacing, 
Document.ChildRemoved, 
Document.ChildAdded, 
Document.Destroying, 
Document.OnSingleObjectSelected, 
Document.OnChildMultiAdded, 
Document.OnSubentityAdded, 
Document.OnSubentityRefreshed, 
Document.OnSimulationCaseUpdated, 
Document.OnSkipChildAdded, 
Document.OnDoingImport, 
Document.OnChangeIconForNodalModal, 
Document.OnChildRootSelect, 
Document.OnClearSelectNavigator, 
Document.OnDependentDocumentRemoved, 
Document.OnDependentDocumentAdded, 
Document.OnChildDocNameUpdated, 
Document.OnChildUpdatedAll, 
Document.OnChildUpdatedEnable, 
Document.OnChildUpdated, 
Document.OnChildRenamed, 
Document.OnChildRemoved, 
Document.OnChildAdded, 
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

### <a id="VM_Managed_PropertyDocumentBase__ctor"></a> PropertyDocumentBase\(\)

Initializes a new instance of the <xref href="VM.Managed.PropertyDocumentBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected PropertyDocumentBase()
```

## Properties

### <a id="VM_Managed_PropertyDocumentBase_CanClose"></a> CanClose

Gets a value indicating whether this instance can close.

```csharp
public override sealed bool CanClose { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_PropertyDocumentBase_DocumentSessionOverride"></a> DocumentSessionOverride

Gets the document session override.

```csharp
public override SessionOverride DocumentSessionOverride { get; }
```

#### Property Value

 SessionOverride

### <a id="VM_Managed_PropertyDocumentBase_IsPropertySupport"></a> IsPropertySupport

Gets a value indicating whether this instance is property support.

```csharp
public bool IsPropertySupport { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_PropertyDocumentBase_Modified"></a> Modified

Gets or sets a value indicating whether this <xref href="VM.Managed.PropertyDocumentBase" data-throw-if-not-resolved="false"></xref> is modified.

```csharp
public override sealed bool Modified { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_PropertyDocumentBase_OwnedCollection"></a> OwnedCollection

Gets or sets the object list in propery document.

```csharp
public IList<ObjectBase> OwnedCollection { get; }
```

#### Property Value

 IList<ObjectBase\>

### <a id="VM_Managed_PropertyDocumentBase_OwnedList"></a> OwnedList

Gets or sets the object list in propery document.

```csharp
[Obsolete]
public List<Link<ObjectBase, LinkContainer.None, LinkContainer.None, LinkContainer.None>> OwnedList { get; }
```

#### Property Value

 List<Link<ObjectBase, LinkContainer.None, LinkContainer.None, LinkContainer.None\>\>

### <a id="VM_Managed_PropertyDocumentBase_PropertyType"></a> PropertyType

Gets the type of the property.

```csharp
protected abstract Type PropertyType { get; }
```

#### Property Value

 Type

### <a id="VM_Managed_PropertyDocumentBase_Reload"></a> Reload

Gets or sets a value indicating whether this <xref href="VM.Managed.PropertyDocumentBase" data-throw-if-not-resolved="false"></xref> is reload.

```csharp
public bool Reload { get; set; }
```

#### Property Value

 bool

### <a id="VM_Managed_PropertyDocumentBase_SetDocumentSessionOverride"></a> SetDocumentSessionOverride

Sets the set document session override.

```csharp
public SessionOverride SetDocumentSessionOverride { set; }
```

#### Property Value

 SessionOverride

### <a id="VM_Managed_PropertyDocumentBase_UntypedProperty"></a> UntypedProperty

Gets or sets the untyped property.

```csharp
protected abstract Property UntypedProperty { get; set; }
```

#### Property Value

 [Property](VM.Managed.Property.md)

### <a id="VM_Managed_PropertyDocumentBase_UntypedPropertyOwner"></a> UntypedPropertyOwner

Gets the untyped property owner.

```csharp
protected abstract ObjectBase UntypedPropertyOwner { get; }
```

#### Property Value

 ObjectBase

## Methods

### <a id="VM_Managed_PropertyDocumentBase_Add_VM_Managed_ObjectBase_"></a> Add\(ObjectBase\)

Adds the specified object.

```csharp
public override sealed void Add(ObjectBase obj)
```

#### Parameters

`obj` ObjectBase

The object.

### <a id="VM_Managed_PropertyDocumentBase_AddImpl_VM_Managed_ObjectBase_"></a> AddImpl\(ObjectBase\)

Adds the specified object [implementation].

```csharp
protected virtual void AddImpl(ObjectBase obj)
```

#### Parameters

`obj` ObjectBase

The object.

### <a id="VM_Managed_PropertyDocumentBase_AddReferenceDocument_VM_Managed_Document_"></a> AddReferenceDocument\(Document\)

Adds the [reference document] to a container.

```csharp
public void AddReferenceDocument(Document docReference)
```

#### Parameters

`docReference` Document

The [reference document].

### <a id="VM_Managed_PropertyDocumentBase_CreateView_System_UIntPtr_"></a> CreateView\(UIntPtr\)

Creates the view.

```csharp
public override View CreateView(UIntPtr hWnd)
```

#### Parameters

`hWnd` UIntPtr

The handle.

#### Returns

 View

The view.

### <a id="VM_Managed_PropertyDocumentBase_DeserializeObj__1_System_Xml_XmlReader_System_String_System_Type_"></a> DeserializeObj<T\>\(XmlReader, string, Type\)

Deserializes the object.

```csharp
protected static T DeserializeObj<T>(XmlReader reader, string strElementName, Type type)
```

#### Parameters

`reader` XmlReader

The reader.

`strElementName` string

Name of the element.

`type` Type

The object type.

#### Returns

 T

The deserialized object.

#### Type Parameters

`T` 

The deserialized object.

### <a id="VM_Managed_PropertyDocumentBase_FindLocal_System_String_"></a> FindLocal\(string\)

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

### <a id="VM_Managed_PropertyDocumentBase_GetData_System_Xml_XmlNode_"></a> GetData\(XmlNode\)

Gets the data [Not Implemented].

```csharp
public override void GetData(XmlNode writer)
```

#### Parameters

`writer` XmlNode

The writer.

### <a id="VM_Managed_PropertyDocumentBase_IsTypeSupported_System_Type_"></a> IsTypeSupported\(Type\)

Determines whether is [type supported] [the specified type].

```csharp
public override void IsTypeSupported(Type type)
```

#### Parameters

`type` Type

The type.

### <a id="VM_Managed_PropertyDocumentBase_Load_System_String_"></a> Load\(string\)

Loads the from specified path.

```csharp
public void Load(string strPath)
```

#### Parameters

`strPath` string

The STR path.

### <a id="VM_Managed_PropertyDocumentBase_Load_System_IO_TextReader_"></a> Load\(TextReader\)

Loads the from specified reader.

```csharp
public abstract void Load(TextReader reader)
```

#### Parameters

`reader` TextReader

The reader.

### <a id="VM_Managed_PropertyDocumentBase_Load_System_IO_Stream_"></a> Load\(Stream\)

Loads the from specified stream.

```csharp
public void Load(Stream stream)
```

#### Parameters

`stream` Stream

The stream.

### <a id="VM_Managed_PropertyDocumentBase_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object obSender)
```

#### Parameters

`obSender` object

The sender.

### <a id="VM_Managed_PropertyDocumentBase_OnPostAdd_VM_Managed_ObjectBase_"></a> OnPostAdd\(ObjectBase\)

Called when [post add].

```csharp
protected virtual void OnPostAdd(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The object.

### <a id="VM_Managed_PropertyDocumentBase_OnPostMakeDocument_VM_Managed_DocCreateInfo_"></a> OnPostMakeDocument\(DocCreateInfo\)

Called when [post make document].

```csharp
protected override void OnPostMakeDocument(DocCreateInfo info)
```

#### Parameters

`info` DocCreateInfo

The [create document] information.

### <a id="VM_Managed_PropertyDocumentBase_RemoveReferenceDocument_VM_Managed_Document_"></a> RemoveReferenceDocument\(Document\)

Removes the [reference document] to a container.

```csharp
public void RemoveReferenceDocument(Document docReference)
```

#### Parameters

`docReference` Document

The [reference document].

### <a id="VM_Managed_PropertyDocumentBase_Save_System_String_"></a> Save\(string\)

Saves the from specified path.

```csharp
public override sealed void Save(string strPath)
```

#### Parameters

`strPath` string

The path.

### <a id="VM_Managed_PropertyDocumentBase_Save_System_IO_TextWriter_"></a> Save\(TextWriter\)

Saves the from specified writer.

```csharp
public abstract void Save(TextWriter writer)
```

#### Parameters

`writer` TextWriter

The writer.

### <a id="VM_Managed_PropertyDocumentBase_Save_System_IO_Stream_"></a> Save\(Stream\)

Saves the from specified stream.

```csharp
public void Save(Stream stream)
```

#### Parameters

`stream` Stream

The stream.

### <a id="VM_Managed_PropertyDocumentBase_SerializeObj__1_System_Xml_XmlWriter___0_System_String_"></a> SerializeObj<T\>\(XmlWriter, T, string\)

Serializes the object.

```csharp
protected static void SerializeObj<T>(XmlWriter writer, T ob, string strElementName)
```

#### Parameters

`writer` XmlWriter

The writer.

`ob` T

The object.

`strElementName` string

Name of the element.

#### Type Parameters

`T` 

### <a id="VM_Managed_PropertyDocumentBase_SetData_System_Xml_XmlNode_"></a> SetData\(XmlNode\)

Sets the data [Not Implemented].

```csharp
public override void SetData(XmlNode reader)
```

#### Parameters

`reader` XmlNode

The reader.

### <a id="VM_Managed_PropertyDocumentBase_SetUnit_VM_Unit_"></a> SetUnit\(Unit\)

Sets the unit.

```csharp
protected override sealed void SetUnit(Unit unit)
```

#### Parameters

`unit` Unit

The unit.

### <a id="VM_Managed_PropertyDocumentBase_TriggerPostMakeDocument_VM_Managed_PropertyDocCreateInfo_"></a> TriggerPostMakeDocument\(PropertyDocCreateInfo\)

Triggers the [post make document].

```csharp
public void TriggerPostMakeDocument(PropertyDocCreateInfo info)
```

#### Parameters

`info` [PropertyDocCreateInfo](VM.Managed.PropertyDocCreateInfo.md)

The [create property document] information.

