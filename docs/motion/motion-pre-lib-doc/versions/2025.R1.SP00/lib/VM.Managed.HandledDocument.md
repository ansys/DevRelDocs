#  Class HandledDocument

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the handle document.

```csharp
public abstract class HandledDocument : Document, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IEnableManager, IRelatedDocument, IHistorySupport, IHandledDocument, IDocument, IObject, IEventProvider, IContainer, ILinkContainer, IOwned, IHasID
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
[LinkContainer](VM.Managed.LinkContainer.md) ← 
[Container](VM.Managed.Container.md) ← 
[Document](VM.Managed.Document.md) ← 
[HandledDocument](VM.Managed.HandledDocument.md)

#### Derived

[Document3D](VM.Managed.Document3D.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
[ILinkContainerEvent](VM.Managed.ILinkContainerEvent.md), 
[IVerifiable](VM.Managed.IVerifiable.md), 
[IEnableManager](VM.Managed.IEnableManager.md), 
[IRelatedDocument](VM.Managed.IRelatedDocument.md), 
IHistorySupport, 
IHandledDocument, 
IDocument, 
IObject, 
IEventProvider, 
IContainer, 
ILinkContainer, 
IOwned, 
IHasID

#### Inherited Members

[Document.g\_OpenDocuments](VM.Managed.Document.md\#VM\_Managed\_Document\_g\_OpenDocuments), 
[Document.m\_unit](VM.Managed.Document.md\#VM\_Managed\_Document\_m\_unit), 
[Document.m\_unitKernal](VM.Managed.Document.md\#VM\_Managed\_Document\_m\_unitKernal), 
[Document.raise\_OnChildAdded\(object, DocumentEventArgs\)](VM.Managed.Document.md\#VM\_Managed\_Document\_raise\_OnChildAdded\_System\_Object\_VM\_Managed\_DocumentEventArgs\_), 
[Document.raise\_OnChildRemoved\(object, DocumentEventArgs\)](VM.Managed.Document.md\#VM\_Managed\_Document\_raise\_OnChildRemoved\_System\_Object\_VM\_Managed\_DocumentEventArgs\_), 
[Document.raise\_OnChildRenamed\(object, DocumentEventArgs\)](VM.Managed.Document.md\#VM\_Managed\_Document\_raise\_OnChildRenamed\_System\_Object\_VM\_Managed\_DocumentEventArgs\_), 
[Document.raise\_OnChildUpdated\(object, DocumentEventArgs\)](VM.Managed.Document.md\#VM\_Managed\_Document\_raise\_OnChildUpdated\_System\_Object\_VM\_Managed\_DocumentEventArgs\_), 
[Document.raise\_OnChildUpdatedEnable\(object, DocumentEventArgs\)](VM.Managed.Document.md\#VM\_Managed\_Document\_raise\_OnChildUpdatedEnable\_System\_Object\_VM\_Managed\_DocumentEventArgs\_), 
[Document.raise\_OnChildUpdatedAll\(object, DocumentEventArgs\)](VM.Managed.Document.md\#VM\_Managed\_Document\_raise\_OnChildUpdatedAll\_System\_Object\_VM\_Managed\_DocumentEventArgs\_), 
[Document.raise\_OnChildDocNameUpdated\(object, DocumentEventArgs\)](VM.Managed.Document.md\#VM\_Managed\_Document\_raise\_OnChildDocNameUpdated\_System\_Object\_VM\_Managed\_DocumentEventArgs\_), 
[Document.raise\_OnDependentDocumentAdded\(object, DependentDocEventArgs\)](VM.Managed.Document.md\#VM\_Managed\_Document\_raise\_OnDependentDocumentAdded\_System\_Object\_VM\_Managed\_DependentDocEventArgs\_), 
[Document.raise\_OnDependentDocumentRemoved\(object, DependentDocEventArgs\)](VM.Managed.Document.md\#VM\_Managed\_Document\_raise\_OnDependentDocumentRemoved\_System\_Object\_VM\_Managed\_DependentDocEventArgs\_), 
[Document.raise\_OnClearSelectNavigator\(object, DocumentEventArgs\)](VM.Managed.Document.md\#VM\_Managed\_Document\_raise\_OnClearSelectNavigator\_System\_Object\_VM\_Managed\_DocumentEventArgs\_), 
[Document.raise\_OnChildRootSelect\(object, DocumentEventArgs\)](VM.Managed.Document.md\#VM\_Managed\_Document\_raise\_OnChildRootSelect\_System\_Object\_VM\_Managed\_DocumentEventArgs\_), 
[Document.raise\_OnChangeIconForNodalModal\(object, DocumentEventArgs\)](VM.Managed.Document.md\#VM\_Managed\_Document\_raise\_OnChangeIconForNodalModal\_System\_Object\_VM\_Managed\_DocumentEventArgs\_), 
[Document.raise\_OnDoingImport\(object, DocumentEventArgs\)](VM.Managed.Document.md\#VM\_Managed\_Document\_raise\_OnDoingImport\_System\_Object\_VM\_Managed\_DocumentEventArgs\_), 
[Document.raise\_OnSkipChildAdded\(object, DocumentEventArgs\)](VM.Managed.Document.md\#VM\_Managed\_Document\_raise\_OnSkipChildAdded\_System\_Object\_VM\_Managed\_DocumentEventArgs\_), 
[Document.raise\_OnSimulationCaseUpdated\(object, EventArgs\)](VM.Managed.Document.md\#VM\_Managed\_Document\_raise\_OnSimulationCaseUpdated\_System\_Object\_System\_EventArgs\_), 
[Document.raise\_OnSubentityRefreshed\(object, EventArgs\)](VM.Managed.Document.md\#VM\_Managed\_Document\_raise\_OnSubentityRefreshed\_System\_Object\_System\_EventArgs\_), 
[Document.raise\_OnSubentityAdded\(object, DocumentEventArgs\)](VM.Managed.Document.md\#VM\_Managed\_Document\_raise\_OnSubentityAdded\_System\_Object\_VM\_Managed\_DocumentEventArgs\_), 
[Document.raise\_OnChildMultiAdded\(object, DocumentEventArgs\)](VM.Managed.Document.md\#VM\_Managed\_Document\_raise\_OnChildMultiAdded\_System\_Object\_VM\_Managed\_DocumentEventArgs\_), 
[Document.raise\_OnSingleObjectSelected\(object, ObjectBaseEventArgs\)](VM.Managed.Document.md\#VM\_Managed\_Document\_raise\_OnSingleObjectSelected\_System\_Object\_VM\_Managed\_ObjectBaseEventArgs\_), 
[Document.raise\_Destroying\(object, EventArgs\)](VM.Managed.Document.md\#VM\_Managed\_Document\_raise\_Destroying\_System\_Object\_System\_EventArgs\_), 
[Document.raise\_ChildAdded\(object, Identifier\)](VM.Managed.Document.md\#VM\_Managed\_Document\_raise\_ChildAdded\_System\_Object\_VM\_Identifier\_), 
[Document.raise\_ChildRemoved\(object, Identifier\)](VM.Managed.Document.md\#VM\_Managed\_Document\_raise\_ChildRemoved\_System\_Object\_VM\_Identifier\_), 
[Document.raise\_ChildReplacing\(object, Identifier\)](VM.Managed.Document.md\#VM\_Managed\_Document\_raise\_ChildReplacing\_System\_Object\_VM\_Identifier\_), 
[Document.raise\_ChildReplaced\(object, Identifier\)](VM.Managed.Document.md\#VM\_Managed\_Document\_raise\_ChildReplaced\_System\_Object\_VM\_Identifier\_), 
[Document.raise\_SelectionChanged\(object, IEnumerable<Identifier\>\)](VM.Managed.Document.md\#VM\_Managed\_Document\_raise\_SelectionChanged\_System\_Object\_System\_Collections\_Generic\_IEnumerable\_VM\_Identifier\_\_), 
[Document.Initialize\(Document.OpenDoc, Document.BrowseFile, Document.IsOpenDoc, Document.GetDocFromOpenedDoc, Document.ActiveDocChange, Document.ActiveViewChange\)](VM.Managed.Document.md\#VM\_Managed\_Document\_Initialize\_VM\_Managed\_Document\_OpenDoc\_VM\_Managed\_Document\_BrowseFile\_VM\_Managed\_Document\_IsOpenDoc\_VM\_Managed\_Document\_GetDocFromOpenedDoc\_VM\_Managed\_Document\_ActiveDocChange\_VM\_Managed\_Document\_ActiveViewChange\_), 
[Document.Open\(string, bool, bool\)](VM.Managed.Document.md\#VM\_Managed\_Document\_Open\_System\_String\_System\_Boolean\_System\_Boolean\_), 
[Document.Open\(string, bool\)](VM.Managed.Document.md\#VM\_Managed\_Document\_Open\_System\_String\_System\_Boolean\_), 
[Document.Open\(string\)](VM.Managed.Document.md\#VM\_Managed\_Document\_Open\_System\_String\_), 
[Document.Open\(string, string, bool\)](VM.Managed.Document.md\#VM\_Managed\_Document\_Open\_System\_String\_System\_String\_System\_Boolean\_), 
[Document.Open\(string, string\)](VM.Managed.Document.md\#VM\_Managed\_Document\_Open\_System\_String\_System\_String\_), 
[Document.TryOpen\(string, LoadSerializeContext, bool\)](VM.Managed.Document.md\#VM\_Managed\_Document\_TryOpen\_System\_String\_VM\_Managed\_LoadSerializeContext\_System\_Boolean\_), 
[Document.TryOpen\(string, string, bool\)](VM.Managed.Document.md\#VM\_Managed\_Document\_TryOpen\_System\_String\_System\_String\_System\_Boolean\_), 
[Document.TryOpen\(string, string\)](VM.Managed.Document.md\#VM\_Managed\_Document\_TryOpen\_System\_String\_System\_String\_), 
[Document.GetDocumentFromOpenedDocument\(string\)](VM.Managed.Document.md\#VM\_Managed\_Document\_GetDocumentFromOpenedDocument\_System\_String\_), 
[Document.IsOpen\(string\)](VM.Managed.Document.md\#VM\_Managed\_Document\_IsOpen\_System\_String\_), 
[Document.ActiveChangedDoc\(\)](VM.Managed.Document.md\#VM\_Managed\_Document\_ActiveChangedDoc), 
[Document.ActiveChangedView\(\)](VM.Managed.Document.md\#VM\_Managed\_Document\_ActiveChangedView), 
[Document.Save\(string\)](VM.Managed.Document.md\#VM\_Managed\_Document\_Save\_System\_String\_), 
[Document.PostSave\(List<Document\>, bool\)](VM.Managed.Document.md\#VM\_Managed\_Document\_PostSave\_System\_Collections\_Generic\_List\_VM\_Managed\_Document\_\_System\_Boolean\_), 
[Document.CreateView\(UIntPtr\)](VM.Managed.Document.md\#VM\_Managed\_Document\_CreateView\_System\_UIntPtr\_), 
[Document.CloseView\(View\)](VM.Managed.Document.md\#VM\_Managed\_Document\_CloseView\_VM\_Managed\_View\_), 
[Document.Add\(ObjectBase\)](VM.Managed.Document.md\#VM\_Managed\_Document\_Add\_VM\_Managed\_ObjectBase\_), 
[Document.UpdateEnable\(ObjectBase, bool\)](VM.Managed.Document.md\#VM\_Managed\_Document\_UpdateEnable\_VM\_Managed\_ObjectBase\_System\_Boolean\_), 
[Document.UpdateInterface\(ObjectBase, bool\)](VM.Managed.Document.md\#VM\_Managed\_Document\_UpdateInterface\_VM\_Managed\_ObjectBase\_System\_Boolean\_), 
[Document.IsTypeSupported\(Type\)](VM.Managed.Document.md\#VM\_Managed\_Document\_IsTypeSupported\_System\_Type\_), 
[Document.AddToSelectionList\(ObjectBase\)](VM.Managed.Document.md\#VM\_Managed\_Document\_AddToSelectionList\_VM\_Managed\_ObjectBase\_), 
[Document.CancelSelection\(bool, bool\)](VM.Managed.Document.md\#VM\_Managed\_Document\_CancelSelection\_System\_Boolean\_System\_Boolean\_), 
[Document.ExitCommandMode\(\)](VM.Managed.Document.md\#VM\_Managed\_Document\_ExitCommandMode), 
[Document.PostOpenDocument\(\)](VM.Managed.Document.md\#VM\_Managed\_Document\_PostOpenDocument), 
[Document.PostOpenDocumentAfterHookEvent\(\)](VM.Managed.Document.md\#VM\_Managed\_Document\_PostOpenDocumentAfterHookEvent), 
[Document.PostOpenDocumentAfterErrCheckEvent\(\)](VM.Managed.Document.md\#VM\_Managed\_Document\_PostOpenDocumentAfterErrCheckEvent), 
[Document.PostOpenDocumentAfterRestoreObjectID\(\)](VM.Managed.Document.md\#VM\_Managed\_Document\_PostOpenDocumentAfterRestoreObjectID), 
[Document.PostOpenDocumentAfterSetFilePath\(\)](VM.Managed.Document.md\#VM\_Managed\_Document\_PostOpenDocumentAfterSetFilePath), 
[Document.PostCloseDocument\(\)](VM.Managed.Document.md\#VM\_Managed\_Document\_PostCloseDocument), 
[Document.LinkRequestDestroy\(object, LinkEventArgs\)](VM.Managed.Document.md\#VM\_Managed\_Document\_LinkRequestDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[Document.PostOpenDocumentAndInitLayer\(\)](VM.Managed.Document.md\#VM\_Managed\_Document\_PostOpenDocumentAndInitLayer), 
[Document.DisplayModeShape\(int, double\)](VM.Managed.Document.md\#VM\_Managed\_Document\_DisplayModeShape\_System\_Int32\_System\_Double\_), 
[Document.EnableModeShape\(bool\)](VM.Managed.Document.md\#VM\_Managed\_Document\_EnableModeShape\_System\_Boolean\_), 
[Document.GetData\(XmlNode\)](VM.Managed.Document.md\#VM\_Managed\_Document\_GetData\_System\_Xml\_XmlNode\_), 
[Document.SetData\(XmlNode\)](VM.Managed.Document.md\#VM\_Managed\_Document\_SetData\_System\_Xml\_XmlNode\_), 
[Document.OperationBegin\(\)](VM.Managed.Document.md\#VM\_Managed\_Document\_OperationBegin), 
[Document.OperationEnd\(\)](VM.Managed.Document.md\#VM\_Managed\_Document\_OperationEnd), 
[Document.GetCopyOfUnit\(\)](VM.Managed.Document.md\#VM\_Managed\_Document\_GetCopyOfUnit), 
[Document.GetCopyOfKernelUnit\(\)](VM.Managed.Document.md\#VM\_Managed\_Document\_GetCopyOfKernelUnit), 
[Document.FastToConvertUnitLength\(bool\)](VM.Managed.Document.md\#VM\_Managed\_Document\_FastToConvertUnitLength\_System\_Boolean\_), 
[Document.ContainsNameAttribute\(string\)](VM.Managed.Document.md\#VM\_Managed\_Document\_ContainsNameAttribute\_System\_String\_), 
[Document.ReplacesNameAttribute\(string, string\)](VM.Managed.Document.md\#VM\_Managed\_Document\_ReplacesNameAttribute\_System\_String\_System\_String\_), 
[Document.GetUniqueNameAttribute\(string\)](VM.Managed.Document.md\#VM\_Managed\_Document\_GetUniqueNameAttribute\_System\_String\_), 
[Document.UpdateItemInNavigaterForUndoRedo\(IObjectBase\)](VM.Managed.Document.md\#VM\_Managed\_Document\_UpdateItemInNavigaterForUndoRedo\_VM\_Models\_Pre\_IObjectBase\_), 
[Document.AddItemToNavigaterForUndoRedo\(ObjectBase\)](VM.Managed.Document.md\#VM\_Managed\_Document\_AddItemToNavigaterForUndoRedo\_VM\_Managed\_ObjectBase\_), 
[Document.RemoveItemFromNavigaterForUndoRedo\(ObjectBase\)](VM.Managed.Document.md\#VM\_Managed\_Document\_RemoveItemFromNavigaterForUndoRedo\_VM\_Managed\_ObjectBase\_), 
[Document.RenameItemFromNavigaterForUndoRedo\(ObjectBase\)](VM.Managed.Document.md\#VM\_Managed\_Document\_RenameItemFromNavigaterForUndoRedo\_VM\_Managed\_ObjectBase\_), 
[Document.UpdateAllItemInNavigaterForUndoRedo\(\)](VM.Managed.Document.md\#VM\_Managed\_Document\_UpdateAllItemInNavigaterForUndoRedo), 
[Document.UpdateSimulationConfigurationForUndoRedo\(\)](VM.Managed.Document.md\#VM\_Managed\_Document\_UpdateSimulationConfigurationForUndoRedo), 
[Document.AddItemToSubEntityForUndoRedo\(ObjectBase\)](VM.Managed.Document.md\#VM\_Managed\_Document\_AddItemToSubEntityForUndoRedo\_VM\_Managed\_ObjectBase\_), 
[Document.AddReferenceForUndoRedo\(ObjectBase\)](VM.Managed.Document.md\#VM\_Managed\_Document\_AddReferenceForUndoRedo\_VM\_Managed\_ObjectBase\_), 
[Document.RefreshReferenceForUndoRedo\(ObjectBase\)](VM.Managed.Document.md\#VM\_Managed\_Document\_RefreshReferenceForUndoRedo\_VM\_Managed\_ObjectBase\_), 
[Document.AddToIDMap\(IObject\)](VM.Managed.Document.md\#VM\_Managed\_Document\_AddToIDMap\_VM\_Models\_Pre\_IObject\_), 
[Document.FindObjectFromID\(Identifier\)](VM.Managed.Document.md\#VM\_Managed\_Document\_FindObjectFromID\_VM\_Identifier\_), 
[Document.FindObjectFromKey\(UIntPtr\)](VM.Managed.Document.md\#VM\_Managed\_Document\_FindObjectFromKey\_System\_UIntPtr\_), 
[Document.RemoveFromIDMap\(IObject\)](VM.Managed.Document.md\#VM\_Managed\_Document\_RemoveFromIDMap\_VM\_Models\_Pre\_IObject\_), 
[Document.WriteIDInformation\(\)](VM.Managed.Document.md\#VM\_Managed\_Document\_WriteIDInformation), 
[Document.GetNextIdentifier\(\)](VM.Managed.Document.md\#VM\_Managed\_Document\_GetNextIdentifier), 
[Document.GetChildren\(\)](VM.Managed.Document.md\#VM\_Managed\_Document\_GetChildren), 
[Document.Close\(\)](VM.Managed.Document.md\#VM\_Managed\_Document\_Close), 
[Document.SetUnit\(Unit\)](VM.Managed.Document.md\#VM\_Managed\_Document\_SetUnit\_VM\_Unit\_), 
[Document.SetKernelUnit\(string\)](VM.Managed.Document.md\#VM\_Managed\_Document\_SetKernelUnit\_System\_String\_), 
[Document.IsEnabledImpl\(ObjectBase\)](VM.Managed.Document.md\#VM\_Managed\_Document\_IsEnabledImpl\_VM\_Managed\_ObjectBase\_), 
[Document.SetEnableImpl\(ObjectBase, bool\)](VM.Managed.Document.md\#VM\_Managed\_Document\_SetEnableImpl\_VM\_Managed\_ObjectBase\_System\_Boolean\_), 
[Document.OnDeserialization\(object\)](VM.Managed.Document.md\#VM\_Managed\_Document\_OnDeserialization\_System\_Object\_), 
[Document.OnPostMakeDocument\(DocCreateInfo\)](VM.Managed.Document.md\#VM\_Managed\_Document\_OnPostMakeDocument\_VM\_Managed\_DocCreateInfo\_), 
[Document.RegisterAddon\(\)](VM.Managed.Document.md\#VM\_Managed\_Document\_RegisterAddon), 
[Document.OnContainerDestroy\(object, LinkEventArgs\)](VM.Managed.Document.md\#VM\_Managed\_Document\_OnContainerDestroy\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[Document.ClearDocument\(\)](VM.Managed.Document.md\#VM\_Managed\_Document\_ClearDocument), 
[Document.Dispose\(bool\)](VM.Managed.Document.md\#VM\_Managed\_Document\_Dispose\_System\_Boolean\_), 
[Document.ClearChildInfoBeforeDeserialize](VM.Managed.Document.md\#VM\_Managed\_Document\_ClearChildInfoBeforeDeserialize), 
[Document.ExpressionParser](VM.Managed.Document.md\#VM\_Managed\_Document\_ExpressionParser), 
[Document.IsHideEntityListWindow](VM.Managed.Document.md\#VM\_Managed\_Document\_IsHideEntityListWindow), 
[Document.IsHideFilterWindow](VM.Managed.Document.md\#VM\_Managed\_Document\_IsHideFilterWindow), 
[Document.SelectedLayoutAlgorithmType](VM.Managed.Document.md\#VM\_Managed\_Document\_SelectedLayoutAlgorithmType), 
[Document.FilterdTypes](VM.Managed.Document.md\#VM\_Managed\_Document\_FilterdTypes), 
[Document.CloseAllDialogWhenCloseDoc](VM.Managed.Document.md\#VM\_Managed\_Document\_CloseAllDialogWhenCloseDoc), 
[Document.DoingOpen](VM.Managed.Document.md\#VM\_Managed\_Document\_DoingOpen), 
[Document.DoingClose](VM.Managed.Document.md\#VM\_Managed\_Document\_DoingClose), 
[Document.Attributes](VM.Managed.Document.md\#VM\_Managed\_Document\_Attributes), 
[Document.AutoSaved](VM.Managed.Document.md\#VM\_Managed\_Document\_AutoSaved), 
[Document.IsChildExternable](VM.Managed.Document.md\#VM\_Managed\_Document\_IsChildExternable), 
[Document.IsExternable](VM.Managed.Document.md\#VM\_Managed\_Document\_IsExternable), 
[Document.IsReplaced](VM.Managed.Document.md\#VM\_Managed\_Document\_IsReplaced), 
[Document.FilePath](VM.Managed.Document.md\#VM\_Managed\_Document\_FilePath), 
[Document.DocumentName](VM.Managed.Document.md\#VM\_Managed\_Document\_DocumentName), 
[Document.InitialConvertFactor](VM.Managed.Document.md\#VM\_Managed\_Document\_InitialConvertFactor), 
[Document.DocumentSessionOverride](VM.Managed.Document.md\#VM\_Managed\_Document\_DocumentSessionOverride), 
[Document.CanClose](VM.Managed.Document.md\#VM\_Managed\_Document\_CanClose), 
[Document.Modified](VM.Managed.Document.md\#VM\_Managed\_Document\_Modified), 
[Document.SelectionChanged](VM.Managed.Document.md\#VM\_Managed\_Document\_SelectionChanged), 
[Document.ChildReplaced](VM.Managed.Document.md\#VM\_Managed\_Document\_ChildReplaced), 
[Document.ChildReplacing](VM.Managed.Document.md\#VM\_Managed\_Document\_ChildReplacing), 
[Document.ChildRemoved](VM.Managed.Document.md\#VM\_Managed\_Document\_ChildRemoved), 
[Document.ChildAdded](VM.Managed.Document.md\#VM\_Managed\_Document\_ChildAdded), 
[Document.Destroying](VM.Managed.Document.md\#VM\_Managed\_Document\_Destroying), 
[Document.OnSingleObjectSelected](VM.Managed.Document.md\#VM\_Managed\_Document\_OnSingleObjectSelected), 
[Document.OnChildMultiAdded](VM.Managed.Document.md\#VM\_Managed\_Document\_OnChildMultiAdded), 
[Document.OnSubentityAdded](VM.Managed.Document.md\#VM\_Managed\_Document\_OnSubentityAdded), 
[Document.OnSubentityRefreshed](VM.Managed.Document.md\#VM\_Managed\_Document\_OnSubentityRefreshed), 
[Document.OnSimulationCaseUpdated](VM.Managed.Document.md\#VM\_Managed\_Document\_OnSimulationCaseUpdated), 
[Document.OnSkipChildAdded](VM.Managed.Document.md\#VM\_Managed\_Document\_OnSkipChildAdded), 
[Document.OnDoingImport](VM.Managed.Document.md\#VM\_Managed\_Document\_OnDoingImport), 
[Document.OnChangeIconForNodalModal](VM.Managed.Document.md\#VM\_Managed\_Document\_OnChangeIconForNodalModal), 
[Document.OnChildRootSelect](VM.Managed.Document.md\#VM\_Managed\_Document\_OnChildRootSelect), 
[Document.OnClearSelectNavigator](VM.Managed.Document.md\#VM\_Managed\_Document\_OnClearSelectNavigator), 
[Document.OnDependentDocumentRemoved](VM.Managed.Document.md\#VM\_Managed\_Document\_OnDependentDocumentRemoved), 
[Document.OnDependentDocumentAdded](VM.Managed.Document.md\#VM\_Managed\_Document\_OnDependentDocumentAdded), 
[Document.OnChildDocNameUpdated](VM.Managed.Document.md\#VM\_Managed\_Document\_OnChildDocNameUpdated), 
[Document.OnChildUpdatedAll](VM.Managed.Document.md\#VM\_Managed\_Document\_OnChildUpdatedAll), 
[Document.OnChildUpdatedEnable](VM.Managed.Document.md\#VM\_Managed\_Document\_OnChildUpdatedEnable), 
[Document.OnChildUpdated](VM.Managed.Document.md\#VM\_Managed\_Document\_OnChildUpdated), 
[Document.OnChildRenamed](VM.Managed.Document.md\#VM\_Managed\_Document\_OnChildRenamed), 
[Document.OnChildRemoved](VM.Managed.Document.md\#VM\_Managed\_Document\_OnChildRemoved), 
[Document.OnChildAdded](VM.Managed.Document.md\#VM\_Managed\_Document\_OnChildAdded), 
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

### <a id="VM_Managed_HandledDocument__ctor_System_UIntPtr_"></a> HandledDocument\(UIntPtr\)

Initializes a new instance of the <xref href="VM.Managed.HandledDocument" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected HandledDocument(UIntPtr pDocHandle)
```

#### Parameters

`pDocHandle` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The document handle.

## Properties

### <a id="VM_Managed_HandledDocument_DoNotCheckHandleWhenCreate"></a> DoNotCheckHandleWhenCreate

```csharp
public static bool DoNotCheckHandleWhenCreate { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_HandledDocument_Handle"></a> Handle

Gets the document handle.

```csharp
public virtual UIntPtr Handle { get; }
```

#### Property Value

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

## Methods

### <a id="VM_Managed_HandledDocument_AddToSelectionList_VM_Managed_ObjectBase_"></a> AddToSelectionList\(ObjectBase\)

Add to selection list.

```csharp
public override void AddToSelectionList(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The selected object.

### <a id="VM_Managed_HandledDocument_CancelSelectedFaceset_System_Boolean_"></a> CancelSelectedFaceset\(bool\)

```csharp
protected void CancelSelectedFaceset(bool bLock)
```

#### Parameters

`bLock` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_HandledDocument_CancelSelection_System_Boolean_System_Boolean_"></a> CancelSelection\(bool, bool\)

Cancel selection.

```csharp
public override void CancelSelection(bool bLock, bool bUnHighlight)
```

#### Parameters

`bLock` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Thread lock flag.

`bUnHighlight` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_HandledDocument_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
[HandleProcessCorruptedStateExceptions]
protected override void Dispose(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_HandledDocument_ExitCommandMode"></a> ExitCommandMode\(\)

Exit kernel command mode.

```csharp
public override void ExitCommandMode()
```

### <a id="VM_Managed_HandledDocument_FromHandle_System_UIntPtr_"></a> FromHandle\(UIntPtr\)

Get document from handle.

```csharp
public static HandledDocument FromHandle(UIntPtr pHandle)
```

#### Parameters

`pHandle` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The document handle.

#### Returns

 [HandledDocument](VM.Managed.HandledDocument.md)

### <a id="VM_Managed_HandledDocument_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object obSender)
```

#### Parameters

`obSender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_HandledDocument_PostOpenDocument"></a> PostOpenDocument\(\)

Call when post [open document].

```csharp
public override void PostOpenDocument()
```

### <a id="VM_Managed_HandledDocument_SetHandle_System_UIntPtr_"></a> SetHandle\(UIntPtr\)

Set document handle.

```csharp
protected virtual void SetHandle(UIntPtr pDocHandle)
```

#### Parameters

`pDocHandle` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The document handle.

