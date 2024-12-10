#  Class ForceCarPropertyDocument<TProp\>

Namespace: [VM.Managed.DAFUL.Car.Force](VM.Managed.DAFUL.Car.Force.md)  
Assembly: VMDCar.dll  

The base class of car force property documents.

```csharp
public abstract class ForceCarPropertyDocument<TProp> : PropertyDocument<TProp>, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IDocument, IObject, IEventProvider, IContainer, ILinkContainer, IOwned, IHasID, IEnableManager, IRelatedDocument, IHistorySupport, IPropertyDocument, IUnitChange, IXMLFormatable, IForcePropertyDocument where TProp : PropertyCarForce, IFileProperty, new()
```

#### Type Parameters

`TProp` 

The type of the prop.

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
Container ← 
Document ← 
PropertyDocumentBase ← 
PropertyDocument<TProp\> ← 
[ForceCarPropertyDocument<TProp\>](VM.Managed.DAFUL.Car.Force.ForceCarPropertyDocument\-1.md)

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
IPropertyDocument, 
IUnitChange, 
IXMLFormatable, 
IForcePropertyDocument

#### Inherited Members

PropertyDocument<TProp\>.Save\(TextWriter\), 
PropertyDocument<TProp\>.Load\(TextReader\), 
PropertyDocument<TProp\>.OnPostMakeDocument\(DocCreateInfo\), 
PropertyDocument<TProp\>.Property, 
PropertyDocument<TProp\>.UntypedProperty, 
PropertyDocument<TProp\>.UntypedPropertyOwner, 
PropertyDocument<TProp\>.FilePropertyOwner, 
PropertyDocument<TProp\>.PropertyType, 
PropertyDocumentBase.Save\(string\), 
PropertyDocumentBase.SerializeObj<T\>\(XmlWriter, T, string\), 
PropertyDocumentBase.DeserializeObj<T\>\(XmlReader, string, Type\), 
PropertyDocumentBase.Save\(TextWriter\), 
PropertyDocumentBase.Save\(Stream\), 
PropertyDocumentBase.Load\(string\), 
PropertyDocumentBase.Load\(TextReader\), 
PropertyDocumentBase.Load\(Stream\), 
PropertyDocumentBase.SetUnit\(Unit\), 
PropertyDocumentBase.AddReferenceDocument\(Document\), 
PropertyDocumentBase.RemoveReferenceDocument\(Document\), 
PropertyDocumentBase.FindLocal\(string\), 
PropertyDocumentBase.Add\(ObjectBase\), 
PropertyDocumentBase.OnPostAdd\(ObjectBase\), 
PropertyDocumentBase.AddImpl\(ObjectBase\), 
PropertyDocumentBase.IsTypeSupported\(Type\), 
PropertyDocumentBase.OnDeserialization\(object\), 
PropertyDocumentBase.CreateView\(UIntPtr\), 
PropertyDocumentBase.TriggerPostMakeDocument\(PropertyDocCreateInfo\), 
PropertyDocumentBase.OnPostMakeDocument\(DocCreateInfo\), 
PropertyDocumentBase.GetData\(XmlNode\), 
PropertyDocumentBase.SetData\(XmlNode\), 
PropertyDocumentBase.Reload, 
PropertyDocumentBase.UntypedProperty, 
PropertyDocumentBase.PropertyType, 
PropertyDocumentBase.Modified, 
PropertyDocumentBase.UntypedPropertyOwner, 
PropertyDocumentBase.DocumentSessionOverride, 
PropertyDocumentBase.SetDocumentSessionOverride, 
PropertyDocumentBase.OwnedList, 
PropertyDocumentBase.OwnedCollection, 
PropertyDocumentBase.CanClose, 
PropertyDocumentBase.IsPropertySupport, 
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

### <a id="VM_Managed_DAFUL_Car_Force_ForceCarPropertyDocument_1__ctor"></a> ForceCarPropertyDocument\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Car.Force.ForceCarPropertyDocument%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ForceCarPropertyDocument()
```

## Methods

### <a id="VM_Managed_DAFUL_Car_Force_ForceCarPropertyDocument_1_AddImpl_VM_Managed_ObjectBase_"></a> AddImpl\(ObjectBase\)

Adds the specified object [implementation].

```csharp
protected override void AddImpl(ObjectBase obj)
```

#### Parameters

`obj` ObjectBase

The object.

### <a id="VM_Managed_DAFUL_Car_Force_ForceCarPropertyDocument_1_FindLocal_System_String_"></a> FindLocal\(string\)

Finds an object that matches a specified name in local.

```csharp
public override IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name to search for.

#### Returns

 IObjectBase

An object that matches a specified name.

### <a id="VM_Managed_DAFUL_Car_Force_ForceCarPropertyDocument_1_IsEnabledImpl_VM_Managed_ObjectBase_"></a> IsEnabledImpl\(ObjectBase\)

Determines whether is enabled [the specified object] [implementation].

```csharp
protected override bool IsEnabledImpl(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if is enabled [the specified object]; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_Car_Force_ForceCarPropertyDocument_1_IsTypeSupported_System_Type_"></a> IsTypeSupported\(Type\)

Determines whether is type supported or not.

```csharp
public override void IsTypeSupported(Type type)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The type.

### <a id="VM_Managed_DAFUL_Car_Force_ForceCarPropertyDocument_1_OnPostMakeDocument_VM_Managed_DocCreateInfo_"></a> OnPostMakeDocument\(DocCreateInfo\)

Called when document is made.

```csharp
protected override void OnPostMakeDocument(DocCreateInfo docCreateInfo)
```

#### Parameters

`docCreateInfo` DocCreateInfo

The document create information.

### <a id="VM_Managed_DAFUL_Car_Force_ForceCarPropertyDocument_1_SetEnableImpl_VM_Managed_ObjectBase_System_Boolean_"></a> SetEnableImpl\(ObjectBase, bool\)

Sets the enable [implementation].

```csharp
protected override void SetEnableImpl(ObjectBase ob, bool bEnable)
```

#### Parameters

`ob` ObjectBase

The object.

`bEnable` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> enable.

### <a id="VM_Managed_DAFUL_Car_Force_ForceCarPropertyDocument_1_UpdateEnable_VM_Managed_ObjectBase_System_Boolean_"></a> UpdateEnable\(ObjectBase, bool\)

Update object to enable or disable.

```csharp
public override void UpdateEnable(ObjectBase obj, bool bEnabled)
```

#### Parameters

`obj` ObjectBase

The object.

`bEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether object is enable.

