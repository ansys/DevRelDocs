# Class Document

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the document.

```csharp
public abstract class Document : Container, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IDocument, IObject, IEventProvider, IContainer, ILinkContainer, IOwned, IHasID, IEnableManager, IRelatedDocument, IHistorySupport
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
[LinkContainer](VM.Managed.LinkContainer.md) ← 
[Container](VM.Managed.Container.md) ← 
[Document](VM.Managed.Document.md)

#### Derived

[ControlDocument](VM.Managed.ControlDocument.md), 
[HandledDocument](VM.Managed.HandledDocument.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
[ILinkContainerEvent](VM.Managed.ILinkContainerEvent.md), 
[IVerifiable](VM.Managed.IVerifiable.md), 
IDocument, 
IObject, 
IEventProvider, 
IContainer, 
ILinkContainer, 
IOwned, 
IHasID, 
[IEnableManager](VM.Managed.IEnableManager.md), 
[IRelatedDocument](VM.Managed.IRelatedDocument.md), 
IHistorySupport

#### Inherited Members

[Container.Find\(string\)](VM.Managed.Container.md\#VM\_Managed\_Container\_Find\_System\_String\_), 
[Container.FindLocal\(string\)](VM.Managed.Container.md\#VM\_Managed\_Container\_FindLocal\_System\_String\_), 
[Container.GetUnnamedObjectName\(object\)](VM.Managed.Container.md\#VM\_Managed\_Container\_GetUnnamedObjectName\_System\_Object\_), 
[Container.GetNewEntityName\(string, bool, int, int\)](VM.Managed.Container.md\#VM\_Managed\_Container\_GetNewEntityName\_System\_String\_System\_Boolean\_System\_Int32\_System\_Int32\_), 
[Container.GetNewEntityName\(string, bool, int\)](VM.Managed.Container.md\#VM\_Managed\_Container\_GetNewEntityName\_System\_String\_System\_Boolean\_System\_Int32\_), 
[Container.GetNewEntityName\(string\)](VM.Managed.Container.md\#VM\_Managed\_Container\_GetNewEntityName\_System\_String\_), 
[LinkContainer.SetModified\(\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SetModified), 
[LinkContainer.raise\_OnUpdating\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnUpdating\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnUpdate\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnDestroying\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnDestroy\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.raise\_OnAdded\(object, AddToDocEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnAdded\_System\_Object\_VM\_Managed\_AddToDocEventArgs\_), 
[LinkContainer.raise\_OnRemoved\(object, RemoveFromDocEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_raise\_OnRemoved\_System\_Object\_VM\_Managed\_RemoveFromDocEventArgs\_), 
[LinkContainer.GetTargetListForUpdate\(\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_GetTargetListForUpdate), 
[LinkContainer.SkipUpdateObjectImpl\(\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SkipUpdateObjectImpl), 
[LinkContainer.Initialize\(Unit.ConvertFactor\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Initialize\_VM\_Unit\_ConvertFactor\_), 
[LinkContainer.SetFlagWhenXMLFile\(string, bool\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SetFlagWhenXMLFile\_System\_String\_System\_Boolean\_), 
[LinkContainer.IsSerializableEvent\(Delegate\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_IsSerializableEvent\_System\_Delegate\_), 
[LinkContainer.CustomGetObjectData\(SerializationInfo, StreamingContext\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_CustomGetObjectData\_System\_Runtime\_Serialization\_SerializationInfo\_System\_Runtime\_Serialization\_StreamingContext\_), 
[LinkContainer.GetSerializedData\(SerializationInfo, StreamingContext\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_GetSerializedData\_System\_Runtime\_Serialization\_SerializationInfo\_System\_Runtime\_Serialization\_StreamingContext\_), 
[LinkContainer.LinkRequestUpdating\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRequestUpdating\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.LinkRequestDestroy\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRequestDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.LinkAddedToDocument\(object, AddToDocEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkAddedToDocument\_System\_Object\_VM\_Managed\_AddToDocEventArgs\_), 
[LinkContainer.LinkRemovedFromDocument\(object, RemoveFromDocEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_LinkRemovedFromDocument\_System\_Object\_VM\_Managed\_RemoveFromDocEventArgs\_), 
[LinkContainer.OnLinkReserved\(ILink, object, EventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnLinkReserved\_VM\_Managed\_ILink\_System\_Object\_System\_EventArgs\_), 
[LinkContainer.CanBeDestroy\(object\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_CanBeDestroy\_System\_Object\_), 
[LinkContainer.DisposeManagedResources\(\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_DisposeManagedResources), 
[LinkContainer.SetContainer\(IOwned, bool\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_SetContainer\_VM\_Models\_Pre\_IOwned\_System\_Boolean\_), 
[LinkContainer.OnChildUpdated\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnChildUpdated\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.OnContainerDestroy\(object, LinkEventArgs\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnContainerDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[LinkContainer.OnDeserialization\(object\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnDeserialization\_System\_Object\_), 
[LinkContainer.Verify\(VerifiedResult\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Verify\_VM\_Managed\_VerifiedResult\_), 
[LinkContainer.GetCopy\(object\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_GetCopy\_System\_Object\_), 
[LinkContainer.Dispose\(bool\)](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Dispose\_System\_Boolean\_), 
[LinkContainer.ClearChildInfoBeforeDeserialize](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_ClearChildInfoBeforeDeserialize), 
[LinkContainer.Container](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Container), 
[LinkContainer.Owner](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Owner), 
[LinkContainer.Document](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_Document), 
[LinkContainer.ID](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_ID), 
[LinkContainer.IsChildExternable](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_IsChildExternable), 
[LinkContainer.IsExternable](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_IsExternable), 
[LinkContainer.OnRemoved](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnRemoved), 
[LinkContainer.OnAdded](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnAdded), 
[LinkContainer.OnDestroy](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnDestroy), 
[LinkContainer.OnDestroying](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnDestroying), 
[LinkContainer.OnUpdate](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnUpdate), 
[LinkContainer.OnUpdating](VM.Managed.LinkContainer.md\#VM\_Managed\_LinkContainer\_OnUpdating), 
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

### Document\(\)

Initializes a new instance of the <xref href="VM.Managed.LinkContainer.Document" data-throw-if-not-resolved="false"></xref> class

```csharp
protected Document()
```

## Fields

### g\_OpenDocuments

The list of open documents.

```csharp
public static List<string> g_OpenDocuments
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### m\_unit

The kernal unit.

```csharp
protected Unit m_unit
```

#### Field Value

 Unit

### m\_unitKernal

```csharp
protected Unit m_unitKernal
```

#### Field Value

 Unit

## Properties

### Attributes

Gets or sets the Attribute to collection.

```csharp
public AttributeCollection Attributes { get; set; }
```

#### Property Value

 [AttributeCollection](VM.Managed.AttributeCollection.md)

### AutoSaved

Gets the document's auto save state.

```csharp
public bool AutoSaved { get; protected set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CanClose

Gets a value indicating that whether document can close.

```csharp
public abstract bool CanClose { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ClearChildInfoBeforeDeserialize

Gets a value indicating whether [clear child info before deserialize].

```csharp
protected override bool ClearChildInfoBeforeDeserialize { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CloseAllDialogWhenCloseDoc

Gets a value indicating that whether all dialog is closing when document is closed.

```csharp
public bool CloseAllDialogWhenCloseDoc { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DocumentName

Gets or sets the document name.

```csharp
public string DocumentName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### DocumentSessionOverride

Gets the document session override.

```csharp
public virtual SessionOverride DocumentSessionOverride { get; }
```

#### Property Value

 [SessionOverride](VM.Managed.Operation.SessionOverride.md)

### DoingClose

Gets a value indicating that whether document is closing.

```csharp
public virtual bool DoingClose { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DoingOpen

Gets or sets a value indicating whether this instance is loading.

```csharp
public virtual bool DoingOpen { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ExpressionParser

```csharp
public virtual ExpressionParser ExpressionParser { get; }
```

#### Property Value

 ExpressionParser

### FilePath

Gets or sets the document file path.

```csharp
public virtual string FilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### FilterdTypes

```csharp
public List<int> FilterdTypes { get; set; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### InitialConvertFactor

Gets the initialized convert factor.

```csharp
public virtual Unit.ConvertFactor InitialConvertFactor { get; }
```

#### Property Value

 Unit.ConvertFactor

### IsChildExternable

Gets a value indicating whether this instance's child is externable.

```csharp
public override bool IsChildExternable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsExternable

Gets a value indicating whether this instance is externable.

```csharp
public override bool IsExternable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsHideEntityListWindow

```csharp
public bool IsHideEntityListWindow { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsHideFilterWindow

```csharp
public bool IsHideFilterWindow { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsReplaced

Gets or sets the replaced document flag.

```csharp
public bool IsReplaced { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### KeepOldKernelUnit

Keep old kernel unit during convert ACIS to Parasolid

```csharp
protected virtual bool KeepOldKernelUnit { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Modified

Gets or sets the document's modify state.

```csharp
public abstract bool Modified { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SelectedLayoutAlgorithmType

```csharp
public int SelectedLayoutAlgorithmType { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### ActiveChangedDoc\(\)

Active document.

```csharp
public static void ActiveChangedDoc()
```

### ActiveChangedView\(\)

Active view.

```csharp
public static void ActiveChangedView()
```

### Add\(ObjectBase\)

Add object to document.

```csharp
public abstract void Add(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

### AddItemToNavigaterForUndoRedo\(ObjectBase\)

Add item to navigator for undo/redo.

```csharp
public void AddItemToNavigaterForUndoRedo(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

### AddItemToSubEntityForUndoRedo\(ObjectBase\)

Add item to subentity for undo/redo.

```csharp
public void AddItemToSubEntityForUndoRedo(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

### AddReferenceForUndoRedo\(ObjectBase\)

Add reference for undo/redo.

```csharp
public void AddReferenceForUndoRedo(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

### AddToIDMap\(IObject\)

add id to map

```csharp
public virtual void AddToIDMap(IObject obj)
```

#### Parameters

`obj` IObject

The object.

### AddToSelectionList\(ObjectBase\)

Add to selection list.

```csharp
public virtual void AddToSelectionList(ObjectBase A_0)
```

#### Parameters

`A_0` [ObjectBase](VM.Managed.ObjectBase.md)

### CancelSelection\(bool, bool\)

Cancel selection.

```csharp
public virtual void CancelSelection(bool A_0, bool A_1)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`A_1` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ClearDocument\(\)

Clears the document.

```csharp
protected virtual void ClearDocument()
```

### Close\(\)

```csharp
public void Close()
```

### CloseView\(View\)

Close view.

```csharp
public virtual void CloseView(View view)
```

#### Parameters

`view` [View](VM.Managed.View.md)

The view.

### ContainsNameAttribute\(string\)

Contains the name attribute.

```csharp
public bool ContainsNameAttribute(string strNameAttribute)
```

#### Parameters

`strNameAttribute` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name value.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CreateView\(UIntPtr\)

Create view.

```csharp
public abstract View CreateView(UIntPtr hWnd)
```

#### Parameters

`hWnd` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The view handle.

#### Returns

 [View](VM.Managed.View.md)

### DisplayModeShape\(int, double\)

Display mode shape with scale factor.

```csharp
public virtual void DisplayModeShape(int A_0, double A_1)
```

#### Parameters

`A_0` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`A_1` [double](https://learn.microsoft.com/dotnet/api/system.double)

### Dispose\(bool\)

```csharp
[HandleProcessCorruptedStateExceptions]
protected override void Dispose(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EnableModeShape\(bool\)

Disable the mode shape displaying.

```csharp
public virtual void EnableModeShape(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ExitCommandMode\(\)

Exit kernel command mode.

```csharp
public virtual void ExitCommandMode()
```

### FastToConvertUnitLength\(bool\)

Fast convert unit length .

```csharp
public virtual double FastToConvertUnitLength(bool bReverse)
```

#### Parameters

`bReverse` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The reverse state.

#### Returns

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### \~Document\(\)

```csharp
protected ~Document()
```

### FindObjectFromID\(Identifier\)

FInd object form id.

```csharp
public virtual IObject FindObjectFromID(Identifier id)
```

#### Parameters

`id` Identifier

The id.

#### Returns

 IObject

### FindObjectFromKey\(UIntPtr\)

Find object from key.

```csharp
public virtual IObject FindObjectFromKey(UIntPtr key)
```

#### Parameters

`key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The key.

#### Returns

 IObject

Find object

### GetChildren\(\)

```csharp
public virtual IEnumerable<IObject> GetChildren()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IObject\>

### GetCopyOfKernelUnit\(\)

Gets the document kernel unit from copy.

```csharp
public virtual Unit GetCopyOfKernelUnit()
```

#### Returns

 Unit

### GetCopyOfUnit\(\)

Gets the document unit from copy.

```csharp
public virtual Unit GetCopyOfUnit()
```

#### Returns

 Unit

### GetData\(XmlNode\)

Gets the analysis document information data.

```csharp
public virtual void GetData(XmlNode writer)
```

#### Parameters

`writer` [XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)

The writer.

### GetDocumentFromOpenedDocument\(string\)

Get document from already opened document.

```csharp
public static Document GetDocumentFromOpenedDocument(string strFilePath)
```

#### Parameters

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path.

#### Returns

 [Document](VM.Managed.Document.md)

### GetNextIdentifier\(\)

Gets the next object identifier.

```csharp
public virtual Identifier GetNextIdentifier()
```

#### Returns

 Identifier

### GetUniqueNameAttribute\(string\)

Gets the unique name attribute.

```csharp
public string GetUniqueNameAttribute(string strNameAttribute)
```

#### Parameters

`strNameAttribute` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name value.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Initialize\(OpenDoc, BrowseFile, IsOpenDoc, GetDocFromOpenedDoc, ActiveDocChange, ActiveViewChange\)

Initialize delegate.

```csharp
public static void Initialize(Document.OpenDoc delOpenDoc, Document.BrowseFile delBrowse, Document.IsOpenDoc delIsOpen, Document.GetDocFromOpenedDoc delOpenedDoc, Document.ActiveDocChange delActiveDocChange, Document.ActiveViewChange delActiveViewChange)
```

#### Parameters

`delOpenDoc` [Document](VM.Managed.Document.md).[OpenDoc](VM.Managed.Document.OpenDoc.md)

The OpenDoc delegate.

`delBrowse` [Document](VM.Managed.Document.md).[BrowseFile](VM.Managed.Document.BrowseFile.md)

The BrowseFile delegate.

`delIsOpen` [Document](VM.Managed.Document.md).[IsOpenDoc](VM.Managed.Document.IsOpenDoc.md)

The IsOpen delegate.

`delOpenedDoc` [Document](VM.Managed.Document.md).[GetDocFromOpenedDoc](VM.Managed.Document.GetDocFromOpenedDoc.md)

The OpenedDoc delegate.

`delActiveDocChange` [Document](VM.Managed.Document.md).[ActiveDocChange](VM.Managed.Document.ActiveDocChange.md)

The ActiveDocChange delegate.

`delActiveViewChange` [Document](VM.Managed.Document.md).[ActiveViewChange](VM.Managed.Document.ActiveViewChange.md)

The ActiveViewChange delegate.

### IsEnabledImpl\(ObjectBase\)

Determines whether is enabled [the specified object] [implementation].

```csharp
abstract bool IsEnabledImpl(ObjectBase ob)
```

#### Parameters

`ob` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if is enabled [the specified object]; otherwise, <code>false</code>.

### IsOpen\(string\)

Whether document is open.

```csharp
public static bool IsOpen(string strFilePath)
```

#### Parameters

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsTypeSupported\(Type\)

Determines whether is [supported type] [the specified type].

```csharp
[Conditional("DEBUG")]
public abstract void IsTypeSupported(Type type)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The type.

### LinkRequestDestroy\(object, LinkEventArgs\)

The destroy event occured from the linked object.

```csharp
protected override void LinkRequestDestroy(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The destroy event information.

### OnContainerDestroy\(object, LinkEventArgs\)

Called when [container destroy].

```csharp
protected override void OnContainerDestroy(object obj, LinkEventArgs args)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object.

`args` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object obSender)
```

#### Parameters

`obSender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### OnPostMakeDocument\(DocCreateInfo\)

Called when [post make document] [implementation].

```csharp
protected virtual void OnPostMakeDocument(DocCreateInfo A_0)
```

#### Parameters

`A_0` [DocCreateInfo](VM.Managed.DocCreateInfo.md)

### Open\(string, bool, bool\)

Open document.

```csharp
public static Document Open(string strFullFilePath, bool bActivate, bool bHidden)
```

#### Parameters

`strFullFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The full file path.

`bActivate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`bHidden` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

hidden file flag.

#### Returns

 [Document](VM.Managed.Document.md)

### Open\(string, bool\)

Open document.

```csharp
public static Document Open(string strFullFilePath, bool bActivate)
```

#### Parameters

`strFullFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The full file path.

`bActivate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether document is acivate.

#### Returns

 [Document](VM.Managed.Document.md)

### Open\(string\)

Open document.

```csharp
public static Document Open(string strFullFilePath)
```

#### Parameters

`strFullFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The full file path.

#### Returns

 [Document](VM.Managed.Document.md)

### Open\(string, string, bool\)

Open document.

```csharp
public static Document Open(string strRelativeFilePath, string strRefDir, bool bActivate)
```

#### Parameters

`strRelativeFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The relative file path.

`strRefDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

The reference directory.

`bActivate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether document is acivate.

#### Returns

 [Document](VM.Managed.Document.md)

### Open\(string, string\)

Open document.

```csharp
public static Document Open(string strRelativeFilePath, string strRefDir)
```

#### Parameters

`strRelativeFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The relative file path.

`strRefDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

The reference directory.

#### Returns

 [Document](VM.Managed.Document.md)

### OperationBegin\(\)

Begin of operation.

```csharp
public virtual void OperationBegin()
```

### OperationEnd\(\)

End of operation.

```csharp
public virtual void OperationEnd()
```

### PostCloseDocument\(\)

Call when post [close document].

```csharp
public virtual void PostCloseDocument()
```

### PostOpenDocument\(\)

Call when post [open document].

```csharp
public virtual void PostOpenDocument()
```

### PostOpenDocumentAfterErrCheckEvent\(\)

Posts the open document after err check event.

```csharp
public virtual void PostOpenDocumentAfterErrCheckEvent()
```

### PostOpenDocumentAfterHookEvent\(\)

Call when post [open document] after hook event.

```csharp
public virtual void PostOpenDocumentAfterHookEvent()
```

### PostOpenDocumentAfterRestoreObjectID\(\)

Posts the open document after restore object id.

```csharp
public virtual void PostOpenDocumentAfterRestoreObjectID()
```

### PostOpenDocumentAfterSetFilePath\(\)

Call when post [open document] after set file path.

```csharp
public virtual void PostOpenDocumentAfterSetFilePath()
```

### PostOpenDocumentAndInitLayer\(\)

Call [Open Document] for initialize layer.

```csharp
public virtual void PostOpenDocumentAndInitLayer()
```

### PostSave\(List<Document\>, bool\)

```csharp
public virtual void PostSave(List<Document> lstOpenDocs, bool bModified)
```

#### Parameters

`lstOpenDocs` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Document](VM.Managed.Document.md)\>

`bModified` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RefreshReferenceForUndoRedo\(ObjectBase\)

Refresh reference for undo/redo.

```csharp
public void RefreshReferenceForUndoRedo(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

### RegisterAddon\(\)

Register addon

```csharp
protected virtual void RegisterAddon()
```

### RemoveFromIDMap\(IObject\)

remove id from map

```csharp
public void RemoveFromIDMap(IObject obj)
```

#### Parameters

`obj` IObject

The object.

### RemoveItemFromNavigaterForUndoRedo\(ObjectBase\)

Remove item from navigator for undo/redo.

```csharp
public void RemoveItemFromNavigaterForUndoRedo(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

### RenameItemFromNavigaterForUndoRedo\(ObjectBase\)

Rename item from navigator for undo/redo.

```csharp
public void RenameItemFromNavigaterForUndoRedo(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

### ReplacesNameAttribute\(string, string\)

Replaces the name attribute.

```csharp
public bool ReplacesNameAttribute(string strNameAttributeOld, string strNameAttributeNew)
```

#### Parameters

`strNameAttributeOld` [string](https://learn.microsoft.com/dotnet/api/system.string)

The old name value.

`strNameAttributeNew` [string](https://learn.microsoft.com/dotnet/api/system.string)

The new name value.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Save\(string\)

Save document.

```csharp
public abstract void Save(string strPath)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path to save.

### SetData\(XmlNode\)

Sets the analysis document information data.

```csharp
public virtual void SetData(XmlNode reader)
```

#### Parameters

`reader` [XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)

The reader.

### SetEnableImpl\(ObjectBase, bool\)

Sets the enable [implementation].

```csharp
abstract void SetEnableImpl(ObjectBase ob, bool bEnable)
```

#### Parameters

`ob` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

`bEnable` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> enable.

### SetKernelUnit\(string\)

Sets the kernel unit with length.

```csharp
protected virtual void SetKernelUnit(string strLength)
```

#### Parameters

`strLength` [string](https://learn.microsoft.com/dotnet/api/system.string)

The length unit.

### SetUnit\(Unit\)

Sets the document unit.

```csharp
protected virtual void SetUnit(Unit unit)
```

#### Parameters

`unit` Unit

The document unit.

### TryOpen\(string, LoadSerializeContext, bool\)

Try opening document.

```csharp
public static Document TryOpen(string strRelativeFilePath, LoadSerializeContext context, bool bActivate)
```

#### Parameters

`strRelativeFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The relative file path.

`context` [LoadSerializeContext](VM.Managed.LoadSerializeContext.md)

The context info.

`bActivate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether document is acivate.

#### Returns

 [Document](VM.Managed.Document.md)

### TryOpen\(string, string, bool\)

Try opening document.

```csharp
public static Document TryOpen(string strRelativeFilePath, string strRefDir, bool bActivate)
```

#### Parameters

`strRelativeFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The relative file path.

`strRefDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

The reference directory.

`bActivate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether document is acivate.

#### Returns

 [Document](VM.Managed.Document.md)

### TryOpen\(string, string\)

Try opening document.

```csharp
public static Document TryOpen(string strRelativeFilePath, string strRefDir)
```

#### Parameters

`strRelativeFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The relative file path.

`strRefDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

The reference directory.

#### Returns

 [Document](VM.Managed.Document.md)

### UpdateAllItemInNavigaterForUndoRedo\(\)

Update all item in navigator for undo/redo.

```csharp
public void UpdateAllItemInNavigaterForUndoRedo()
```

### UpdateEnable\(ObjectBase, bool\)

Update object to enable or disable.

```csharp
public abstract void UpdateEnable(ObjectBase obj, bool bEnabled)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

`bEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether object is enable.

### UpdateInterface\(ObjectBase, bool\)

Update interface.

```csharp
public virtual void UpdateInterface(ObjectBase obj, bool bInterfaced)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

`bInterfaced` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether object is interfaced.

### UpdateItemInNavigaterForUndoRedo\(IObjectBase\)

Update item in navigator for undo/redo.

```csharp
public void UpdateItemInNavigaterForUndoRedo(IObjectBase obj)
```

#### Parameters

`obj` IObjectBase

The object.

### UpdateSimulationConfigurationForUndoRedo\(\)

Update simulation configuration for undo/redo.

```csharp
public void UpdateSimulationConfigurationForUndoRedo()
```

### WriteIDInformation\(\)

write id information

```csharp
public string WriteIDInformation()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### raise\_ChildAdded\(object, Identifier\)

```csharp
protected virtual void raise_ChildAdded(object value0, Identifier value1)
```

#### Parameters

`value0` [object](https://learn.microsoft.com/dotnet/api/system.object)

`value1` Identifier

### raise\_ChildRemoved\(object, Identifier\)

```csharp
protected virtual void raise_ChildRemoved(object value0, Identifier value1)
```

#### Parameters

`value0` [object](https://learn.microsoft.com/dotnet/api/system.object)

`value1` Identifier

### raise\_ChildReplaced\(object, Identifier\)

```csharp
protected virtual void raise_ChildReplaced(object value0, Identifier value1)
```

#### Parameters

`value0` [object](https://learn.microsoft.com/dotnet/api/system.object)

`value1` Identifier

### raise\_ChildReplacing\(object, Identifier\)

```csharp
protected virtual void raise_ChildReplacing(object value0, Identifier value1)
```

#### Parameters

`value0` [object](https://learn.microsoft.com/dotnet/api/system.object)

`value1` Identifier

### raise\_Destroying\(object, EventArgs\)

```csharp
protected virtual void raise_Destroying(object value0, EventArgs value1)
```

#### Parameters

`value0` [object](https://learn.microsoft.com/dotnet/api/system.object)

`value1` [EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs)

### raise\_OnChangeIconForNodalModal\(object, DocumentEventArgs\)

```csharp
public void raise_OnChangeIconForNodalModal(object objNotifier, DocumentEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [DocumentEventArgs](VM.Managed.DocumentEventArgs.md)

### raise\_OnChildAdded\(object, DocumentEventArgs\)

```csharp
public void raise_OnChildAdded(object objNotifier, DocumentEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [DocumentEventArgs](VM.Managed.DocumentEventArgs.md)

### raise\_OnChildDocNameUpdated\(object, DocumentEventArgs\)

```csharp
public void raise_OnChildDocNameUpdated(object objNotifier, DocumentEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [DocumentEventArgs](VM.Managed.DocumentEventArgs.md)

### raise\_OnChildMultiAdded\(object, DocumentEventArgs\)

```csharp
public void raise_OnChildMultiAdded(object objNotifier, DocumentEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [DocumentEventArgs](VM.Managed.DocumentEventArgs.md)

### raise\_OnChildRemoved\(object, DocumentEventArgs\)

```csharp
public void raise_OnChildRemoved(object objNotifier, DocumentEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [DocumentEventArgs](VM.Managed.DocumentEventArgs.md)

### raise\_OnChildRenamed\(object, DocumentEventArgs\)

```csharp
public void raise_OnChildRenamed(object objNotifier, DocumentEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [DocumentEventArgs](VM.Managed.DocumentEventArgs.md)

### raise\_OnChildRootSelect\(object, DocumentEventArgs\)

```csharp
public void raise_OnChildRootSelect(object objNotifier, DocumentEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [DocumentEventArgs](VM.Managed.DocumentEventArgs.md)

### raise\_OnChildUpdated\(object, DocumentEventArgs\)

```csharp
public void raise_OnChildUpdated(object objNotifier, DocumentEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [DocumentEventArgs](VM.Managed.DocumentEventArgs.md)

### raise\_OnChildUpdatedAll\(object, DocumentEventArgs\)

```csharp
public void raise_OnChildUpdatedAll(object objNotifier, DocumentEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [DocumentEventArgs](VM.Managed.DocumentEventArgs.md)

### raise\_OnChildUpdatedEnable\(object, DocumentEventArgs\)

```csharp
public void raise_OnChildUpdatedEnable(object objNotifier, DocumentEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [DocumentEventArgs](VM.Managed.DocumentEventArgs.md)

### raise\_OnClearSelectNavigator\(object, DocumentEventArgs\)

```csharp
public void raise_OnClearSelectNavigator(object objNotifier, DocumentEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [DocumentEventArgs](VM.Managed.DocumentEventArgs.md)

### raise\_OnDependentDocumentAdded\(object, DependentDocEventArgs\)

```csharp
public void raise_OnDependentDocumentAdded(object objNotifier, DependentDocEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [DependentDocEventArgs](VM.Managed.DependentDocEventArgs.md)

### raise\_OnDependentDocumentRemoved\(object, DependentDocEventArgs\)

```csharp
public void raise_OnDependentDocumentRemoved(object objNotifier, DependentDocEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [DependentDocEventArgs](VM.Managed.DependentDocEventArgs.md)

### raise\_OnDoingImport\(object, DocumentEventArgs\)

```csharp
public void raise_OnDoingImport(object objNotifier, DocumentEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [DocumentEventArgs](VM.Managed.DocumentEventArgs.md)

### raise\_OnSimulationCaseUpdated\(object, EventArgs\)

```csharp
public void raise_OnSimulationCaseUpdated(object objNotifier, EventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs)

### raise\_OnSingleObjectSelected\(object, ObjectBaseEventArgs\)

```csharp
protected void raise_OnSingleObjectSelected(object value0, ObjectBaseEventArgs value1)
```

#### Parameters

`value0` [object](https://learn.microsoft.com/dotnet/api/system.object)

`value1` [ObjectBaseEventArgs](VM.Managed.ObjectBaseEventArgs.md)

### raise\_OnSkipChildAdded\(object, DocumentEventArgs\)

```csharp
public void raise_OnSkipChildAdded(object objNotifier, DocumentEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [DocumentEventArgs](VM.Managed.DocumentEventArgs.md)

### raise\_OnSubentityAdded\(object, DocumentEventArgs\)

```csharp
public void raise_OnSubentityAdded(object objNotifier, DocumentEventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [DocumentEventArgs](VM.Managed.DocumentEventArgs.md)

### raise\_OnSubentityRefreshed\(object, EventArgs\)

```csharp
public void raise_OnSubentityRefreshed(object objNotifier, EventArgs args)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`args` [EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs)

### raise\_SelectionChanged\(object, IEnumerable<Identifier\>\)

```csharp
protected virtual void raise_SelectionChanged(object value0, IEnumerable<Identifier> value1)
```

#### Parameters

`value0` [object](https://learn.microsoft.com/dotnet/api/system.object)

`value1` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Identifier\>

### ChildAdded

Occurs when [on added child].

```csharp
public virtual event EventHandler<Identifier> ChildAdded
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<Identifier\>

### ChildRemoved

Occurs when [on removed child].

```csharp
public virtual event EventHandler<Identifier> ChildRemoved
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<Identifier\>

### ChildReplaced

Occurs when [on replaced child].

```csharp
public virtual event EventHandler<Identifier> ChildReplaced
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<Identifier\>

### ChildReplacing

Occurs when [on replacing child].

```csharp
public virtual event EventHandler<Identifier> ChildReplacing
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<Identifier\>

### Destroying

Occurs when [on destroying child].

```csharp
public virtual event EventHandler Destroying
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

### OnChangeIconForNodalModal

Occurs when [on clear selected navigator item].

```csharp
public event EventHandler<DocumentEventArgs> OnChangeIconForNodalModal
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[DocumentEventArgs](VM.Managed.DocumentEventArgs.md)\>

### OnChildAdded

Occurs when [on added child].

```csharp
public event EventHandler<DocumentEventArgs> OnChildAdded
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[DocumentEventArgs](VM.Managed.DocumentEventArgs.md)\>

### OnChildDocNameUpdated

Occurs when [on updated child's document name].

```csharp
public event EventHandler<DocumentEventArgs> OnChildDocNameUpdated
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[DocumentEventArgs](VM.Managed.DocumentEventArgs.md)\>

### OnChildMultiAdded

Occurs when [on multi added child].

```csharp
public event EventHandler<DocumentEventArgs> OnChildMultiAdded
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[DocumentEventArgs](VM.Managed.DocumentEventArgs.md)\>

### OnChildRemoved

Occurs when [on removed child].

```csharp
public event EventHandler<DocumentEventArgs> OnChildRemoved
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[DocumentEventArgs](VM.Managed.DocumentEventArgs.md)\>

### OnChildRenamed

Occurs when [on renamed child].

```csharp
public event EventHandler<DocumentEventArgs> OnChildRenamed
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[DocumentEventArgs](VM.Managed.DocumentEventArgs.md)\>

### OnChildRootSelect

Occurs when [on child root select].

```csharp
public event EventHandler<DocumentEventArgs> OnChildRootSelect
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[DocumentEventArgs](VM.Managed.DocumentEventArgs.md)\>

### OnChildUpdated

Occurs when [on updated child].

```csharp
public event EventHandler<DocumentEventArgs> OnChildUpdated
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[DocumentEventArgs](VM.Managed.DocumentEventArgs.md)\>

### OnChildUpdatedAll

Occurs when [on updated child's everything].

```csharp
public event EventHandler<DocumentEventArgs> OnChildUpdatedAll
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[DocumentEventArgs](VM.Managed.DocumentEventArgs.md)\>

### OnChildUpdatedEnable

Occurs when [on updated child's enablement].

```csharp
public event EventHandler<DocumentEventArgs> OnChildUpdatedEnable
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[DocumentEventArgs](VM.Managed.DocumentEventArgs.md)\>

### OnClearSelectNavigator

Occurs when [on clear selected navigator item].

```csharp
public event EventHandler<DocumentEventArgs> OnClearSelectNavigator
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[DocumentEventArgs](VM.Managed.DocumentEventArgs.md)\>

### OnDependentDocumentAdded

Occurs when [on added dependent document].

```csharp
public event EventHandler<DependentDocEventArgs> OnDependentDocumentAdded
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[DependentDocEventArgs](VM.Managed.DependentDocEventArgs.md)\>

### OnDependentDocumentRemoved

Occurs when [on removed dependent document].

```csharp
public event EventHandler<DependentDocEventArgs> OnDependentDocumentRemoved
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[DependentDocEventArgs](VM.Managed.DependentDocEventArgs.md)\>

### OnDoingImport

Occurs when [on doing import].

```csharp
public event EventHandler<DocumentEventArgs> OnDoingImport
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[DocumentEventArgs](VM.Managed.DocumentEventArgs.md)\>

### OnSimulationCaseUpdated

Occurs when [on simulation case updated].

```csharp
public event EventHandler<EventArgs> OnSimulationCaseUpdated
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs)\>

### OnSingleObjectSelected

```csharp
public event EventHandler<ObjectBaseEventArgs> OnSingleObjectSelected
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[ObjectBaseEventArgs](VM.Managed.ObjectBaseEventArgs.md)\>

### OnSkipChildAdded

Occurs when [on skip to add child].

```csharp
public event EventHandler<DocumentEventArgs> OnSkipChildAdded
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[DocumentEventArgs](VM.Managed.DocumentEventArgs.md)\>

### OnSubentityAdded

Occurs when [on subentity added].

```csharp
public event EventHandler<DocumentEventArgs> OnSubentityAdded
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[DocumentEventArgs](VM.Managed.DocumentEventArgs.md)\>

### OnSubentityRefreshed

Occurs when [on subentity refreshed].

```csharp
public event EventHandler<EventArgs> OnSubentityRefreshed
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs)\>

### SelectionChanged

Occurs when [on child selection changed].

```csharp
public virtual event EventHandler<IEnumerable<Identifier>> SelectionChanged
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler\-1)<[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<Identifier\>\>


