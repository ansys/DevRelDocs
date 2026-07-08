#  Class PropertyDocument<TProp\>

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMObjBase.dll  

This base class is to represent the propety document.

```csharp
public abstract class PropertyDocument<TProp> : PropertyDocumentBase, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IDocument, IObject, IEventProvider, IContainer, ILinkContainer, IOwned, IHasID, IEnableManager, IRelatedDocument, IHistorySupport, IPropertyDocument, IUnitChange, IXMLFormatable where TProp : Property, IFileProperty, new()
```

#### Type Parameters

`TProp` 

The type of the property.

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
Container ← 
Document ← 
[PropertyDocumentBase](VM.Managed.PropertyDocumentBase.md) ← 
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
IHistorySupport, 
[IPropertyDocument](VM.Managed.IPropertyDocument.md), 
[IUnitChange](VM.Managed.IUnitChange.md), 
IXMLFormatable

#### Inherited Members

[PropertyDocumentBase.Save\(string\)](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_Save\_System\_String\_), 
[PropertyDocumentBase.SerializeObj<T\>\(XmlWriter, T, string\)](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_SerializeObj\_\_1\_System\_Xml\_XmlWriter\_\_\_0\_System\_String\_), 
[PropertyDocumentBase.DeserializeObj<T\>\(XmlReader, string, Type\)](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_DeserializeObj\_\_1\_System\_Xml\_XmlReader\_System\_String\_System\_Type\_), 
[PropertyDocumentBase.Save\(TextWriter\)](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_Save\_System\_IO\_TextWriter\_), 
[PropertyDocumentBase.Save\(Stream\)](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_Save\_System\_IO\_Stream\_), 
[PropertyDocumentBase.Load\(string\)](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_Load\_System\_String\_), 
[PropertyDocumentBase.Load\(TextReader\)](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_Load\_System\_IO\_TextReader\_), 
[PropertyDocumentBase.Load\(Stream\)](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_Load\_System\_IO\_Stream\_), 
[PropertyDocumentBase.SetUnit\(Unit\)](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_SetUnit\_VM\_Unit\_), 
[PropertyDocumentBase.AddReferenceDocument\(Document\)](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_AddReferenceDocument\_VM\_Managed\_Document\_), 
[PropertyDocumentBase.RemoveReferenceDocument\(Document\)](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_RemoveReferenceDocument\_VM\_Managed\_Document\_), 
[PropertyDocumentBase.FindLocal\(string\)](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_FindLocal\_System\_String\_), 
[PropertyDocumentBase.Add\(ObjectBase\)](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_Add\_VM\_Managed\_ObjectBase\_), 
[PropertyDocumentBase.OnPostAdd\(ObjectBase\)](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_OnPostAdd\_VM\_Managed\_ObjectBase\_), 
[PropertyDocumentBase.AddImpl\(ObjectBase\)](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_AddImpl\_VM\_Managed\_ObjectBase\_), 
[PropertyDocumentBase.IsTypeSupported\(Type\)](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_IsTypeSupported\_System\_Type\_), 
[PropertyDocumentBase.OnDeserialization\(object\)](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_OnDeserialization\_System\_Object\_), 
[PropertyDocumentBase.CreateView\(UIntPtr\)](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_CreateView\_System\_UIntPtr\_), 
[PropertyDocumentBase.TriggerPostMakeDocument\(PropertyDocCreateInfo\)](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_TriggerPostMakeDocument\_VM\_Managed\_PropertyDocCreateInfo\_), 
[PropertyDocumentBase.OnPostMakeDocument\(DocCreateInfo\)](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_OnPostMakeDocument\_VM\_Managed\_DocCreateInfo\_), 
[PropertyDocumentBase.GetData\(XmlNode\)](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_GetData\_System\_Xml\_XmlNode\_), 
[PropertyDocumentBase.SetData\(XmlNode\)](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_SetData\_System\_Xml\_XmlNode\_), 
[PropertyDocumentBase.Reload](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_Reload), 
[PropertyDocumentBase.UntypedProperty](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_UntypedProperty), 
[PropertyDocumentBase.PropertyType](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_PropertyType), 
[PropertyDocumentBase.Modified](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_Modified), 
[PropertyDocumentBase.UntypedPropertyOwner](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_UntypedPropertyOwner), 
[PropertyDocumentBase.DocumentSessionOverride](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_DocumentSessionOverride), 
[PropertyDocumentBase.SetDocumentSessionOverride](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_SetDocumentSessionOverride), 
[PropertyDocumentBase.OwnedList](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_OwnedList), 
[PropertyDocumentBase.OwnedCollection](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_OwnedCollection), 
[PropertyDocumentBase.CanClose](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_CanClose), 
[PropertyDocumentBase.IsPropertySupport](VM.Managed.PropertyDocumentBase.md\#VM\_Managed\_PropertyDocumentBase\_IsPropertySupport), 
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

### <a id="VM_Managed_PropertyDocument_1__ctor"></a> PropertyDocument\(\)

Initializes a new instance of the <xref href="VM.Managed.PropertyDocument%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected PropertyDocument()
```

## Properties

### <a id="VM_Managed_PropertyDocument_1_FilePropertyOwner"></a> FilePropertyOwner

Gets the file property owner.

```csharp
public FilePropertyOwner<TProp> FilePropertyOwner { get; }
```

#### Property Value

 [FilePropertyOwner](VM.Managed.FilePropertyOwner\-1.md)<TProp\>

### <a id="VM_Managed_PropertyDocument_1_Property"></a> Property

Gets the property.

```csharp
public TProp Property { get; }
```

#### Property Value

 TProp

### <a id="VM_Managed_PropertyDocument_1_PropertyType"></a> PropertyType

Gets the type of the property.

```csharp
protected override Type PropertyType { get; }
```

#### Property Value

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="VM_Managed_PropertyDocument_1_UntypedProperty"></a> UntypedProperty

Gets or sets the untyped property.

```csharp
protected override Property UntypedProperty { get; set; }
```

#### Property Value

 [Property](VM.Managed.Property.md)

### <a id="VM_Managed_PropertyDocument_1_UntypedPropertyOwner"></a> UntypedPropertyOwner

Gets the untyped property owner.

```csharp
protected override ObjectBase UntypedPropertyOwner { get; }
```

#### Property Value

 ObjectBase

## Methods

### <a id="VM_Managed_PropertyDocument_1_Load_System_IO_TextReader_"></a> Load\(TextReader\)

Loads the from specified reader.

```csharp
public override void Load(TextReader reader)
```

#### Parameters

`reader` [TextReader](https://learn.microsoft.com/dotnet/api/system.io.textreader)

The reader.

### <a id="VM_Managed_PropertyDocument_1_OnPostMakeDocument_VM_Managed_DocCreateInfo_"></a> OnPostMakeDocument\(DocCreateInfo\)

Called when [post make document].

```csharp
protected override void OnPostMakeDocument(DocCreateInfo docCreateInfo)
```

#### Parameters

`docCreateInfo` DocCreateInfo

The [document create] information.

### <a id="VM_Managed_PropertyDocument_1_Save_System_IO_TextWriter_"></a> Save\(TextWriter\)

Saves the from specified writer.

```csharp
public override void Save(TextWriter writer)
```

#### Parameters

`writer` [TextWriter](https://learn.microsoft.com/dotnet/api/system.io.textwriter)

The writer.

