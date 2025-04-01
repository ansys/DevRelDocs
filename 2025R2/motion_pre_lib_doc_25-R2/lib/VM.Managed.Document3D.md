# Class Document3D

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the 3D document.

```csharp
public abstract class Document3D : HandledDocument, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IEnableManager, IRelatedDocument, IHistorySupport, ITemplateDocument, IDocument3D, IHandledDocument, IDocument, IObject, IEventProvider, IContainer, ILinkContainer, IOwned, IHasID, IDocumentOwner, ITreatValidObject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
[LinkContainer](VM.Managed.LinkContainer.md) ← 
[Container](VM.Managed.Container.md) ← 
[Document](VM.Managed.Document.md) ← 
[HandledDocument](VM.Managed.HandledDocument.md) ← 
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
[ITemplateDocument](VM.Managed.ITemplateDocument.md), 
IDocument3D, 
IHandledDocument, 
IDocument, 
IObject, 
IEventProvider, 
IContainer, 
ILinkContainer, 
IOwned, 
IHasID, 
IDocumentOwner, 
[ITreatValidObject](VM.Managed.ITreatValidObject.md)

#### Inherited Members

[HandledDocument.AddToSelectionList\(ObjectBase\)](VM.Managed.HandledDocument.md\#VM\_Managed\_HandledDocument\_AddToSelectionList\_VM\_Managed\_ObjectBase\_), 
[HandledDocument.CancelSelection\(bool, bool\)](VM.Managed.HandledDocument.md\#VM\_Managed\_HandledDocument\_CancelSelection\_System\_Boolean\_System\_Boolean\_), 
[HandledDocument.ExitCommandMode\(\)](VM.Managed.HandledDocument.md\#VM\_Managed\_HandledDocument\_ExitCommandMode), 
[HandledDocument.CancelSelectedFaceset\(bool\)](VM.Managed.HandledDocument.md\#VM\_Managed\_HandledDocument\_CancelSelectedFaceset\_System\_Boolean\_), 
[HandledDocument.SetHandle\(UIntPtr\)](VM.Managed.HandledDocument.md\#VM\_Managed\_HandledDocument\_SetHandle\_System\_UIntPtr\_), 
[HandledDocument.OnDeserialization\(object\)](VM.Managed.HandledDocument.md\#VM\_Managed\_HandledDocument\_OnDeserialization\_System\_Object\_), 
[HandledDocument.FromHandle\(UIntPtr\)](VM.Managed.HandledDocument.md\#VM\_Managed\_HandledDocument\_FromHandle\_System\_UIntPtr\_), 
[HandledDocument.PostOpenDocument\(\)](VM.Managed.HandledDocument.md\#VM\_Managed\_HandledDocument\_PostOpenDocument), 
[HandledDocument.Dispose\(bool\)](VM.Managed.HandledDocument.md\#VM\_Managed\_HandledDocument\_Dispose\_System\_Boolean\_), 
[HandledDocument.DoNotCheckHandleWhenCreate](VM.Managed.HandledDocument.md\#VM\_Managed\_HandledDocument\_DoNotCheckHandleWhenCreate), 
[HandledDocument.Handle](VM.Managed.HandledDocument.md\#VM\_Managed\_HandledDocument\_Handle), 
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
[Document.KeepOldKernelUnit](VM.Managed.Document.md\#VM\_Managed\_Document\_KeepOldKernelUnit), 
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

### Document3D\(UIntPtr\)

Initializes a new instance of the <xref href="VM.Managed.Document3D" data-throw-if-not-resolved="false"></xref> class

```csharp
public Document3D(UIntPtr pDoc)
```

#### Parameters

`pDoc` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

## Fields

### RibbonGalleryIndex

The ribbon gallery index

```csharp
public Document3D.GetRibbonGalleryIndex RibbonGalleryIndex
```

#### Field Value

 [Document3D](VM.Managed.Document3D.md).[GetRibbonGalleryIndex](VM.Managed.Document3D.GetRibbonGalleryIndex.md)

### g\_dRenderingType

```csharp
public static enRenderType g_dRenderingType
```

#### Field Value

 [enRenderType](VM.Managed.Render.enRenderType.md)

### m\_bReload

```csharp
protected bool m_bReload
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### m\_dicCategory

```csharp
[Obsolete]
protected Dictionary<string, LinkedList<Child<ObjectBase, LinkContainer.Update>>> m_dicCategory
```

#### Field Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [LinkedList](https://learn.microsoft.com/dotnet/api/system.collections.generic.linkedlist\-1)<[Child](VM.Managed.Child\-2.md)<[ObjectBase](VM.Managed.ObjectBase.md), [LinkContainer](VM.Managed.LinkContainer.md).[Update](VM.Managed.LinkContainer.Update.md)\>\>\>

### m\_dicCategoryCollection

The category container.

```csharp
protected Dictionary<string, LinkLinkedList<ObjectBase, Child<ObjectBase, LinkContainer.Update>>> m_dicCategoryCollection
```

#### Field Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [LinkLinkedList](VM.Managed.Collections.LinkLinkedList\-2.md)<[ObjectBase](VM.Managed.ObjectBase.md), [Child](VM.Managed.Child\-2.md)<[ObjectBase](VM.Managed.ObjectBase.md), [LinkContainer](VM.Managed.LinkContainer.md).[Update](VM.Managed.LinkContainer.Update.md)\>\>\>

### m\_lstAssem

The assembly container.

```csharp
protected LinkListCollection<Assembly, Link<Assembly, LinkContainer.None, LinkContainer.Update, LinkContainer.None>> m_lstAssem
```

#### Field Value

 [LinkListCollection](VM.Managed.Collections.LinkListCollection\-2.md)<[Assembly](VM.Managed.Assembly.md), [Link](VM.Managed.Link\-4.md)<[Assembly](VM.Managed.Assembly.md), [LinkContainer](VM.Managed.LinkContainer.md).[None](VM.Managed.LinkContainer.None.md), [LinkContainer](VM.Managed.LinkContainer.md).[Update](VM.Managed.LinkContainer.Update.md), [LinkContainer](VM.Managed.LinkContainer.md).[None](VM.Managed.LinkContainer.None.md)\>\>

### m\_strVersion

```csharp
protected string m_strVersion
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### AssembledBodyList

Gets or sets the assembled body list.

```csharp
public virtual ObjectBase[] AssembledBodyList { get; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md)\[\]

### CanClose

Gets a value indicating that whether document can close.

```csharp
public override bool CanClose { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Categories

Gets the categorys.

```csharp
public ICollection<string> Categories { get; }
```

#### Property Value

 [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### CategoryInfo

```csharp
public static CategoryInfo CategoryInfo { get; }
```

#### Property Value

 [CategoryInfo](VM.Managed.CategoryInfo.md)

### ChangeReference

Gets a value indicating that whether reference is changed.

```csharp
protected bool ChangeReference { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CommentOfDocument

Sets/Gets a comment of document.
It has a character of seperator. The Character is ';'.

```csharp
public string CommentOfDocument { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### CountOfSelectionObject

Get count of selected object.

```csharp
public int CountOfSelectionObject { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CountOfUnderCursorObject

Get count of Under-Cursor object.

```csharp
public int CountOfUnderCursorObject { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CountOfUnderCursorPickableObject

Get count of Under-Cursor pickable object.

```csharp
public int CountOfUnderCursorPickableObject { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CurrentBasicOp

Gets the type of current basic operation.

```csharp
public Document3D.BasicOpType CurrentBasicOp { get; }
```

#### Property Value

 [Document3D](VM.Managed.Document3D.md).[BasicOpType](VM.Managed.Document3D.BasicOpType.md)

### CustomDesignParameterList

Gets or sets the custom design parameter list.

```csharp
public virtual ObjectBase[] CustomDesignParameterList { get; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md)\[\]

### CustomPerformanceIndexList

Gets or sets the custom performance index list.

```csharp
public virtual ObjectBase[] CustomPerformanceIndexList { get; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md)\[\]

### DoingCreateEntityOperation

Gets a value indicating that whether [create entity operation] is executing.

```csharp
public bool DoingCreateEntityOperation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DoingTemplateBasedXml

Gets a value indicating that whether [Load TemplateBasedXml] is doing.

```csharp
public bool DoingTemplateBasedXml { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ExtensionName

Gets or sets the name of extension.

```csharp
public string ExtensionName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Format

Gets or sets the type of fileformat.

```csharp
public Document3D.FileFormat Format { get; set; }
```

#### Property Value

 [Document3D](VM.Managed.Document3D.md).[FileFormat](VM.Managed.Document3D.FileFormat.md)

### FromTemplate

Gets a value indicating whether [from template].

```csharp
public bool FromTemplate { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IconSize

Gets or sets the icon size.

```csharp
public virtual double IconSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### InitialCategories

Gets the initialize categories.

```csharp
protected abstract List<string> InitialCategories { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### IsAdvancedMode

Gets or sets a value indicating whether this instance is advanced mode.

```csharp
public bool IsAdvancedMode { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsPropertySupport

Gets a value indicating whether this instance is property support.

```csharp
public virtual bool IsPropertySupport { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LayerManager

Gets the layer manager.

```csharp
public LayerManager LayerManager { get; }
```

#### Property Value

 [LayerManager](VM.Managed.LayerManager.md)

### LoadingExceptions

Gets the exceptions that occurred when loading.

```csharp
public List<Exception> LoadingExceptions { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Exception](https://learn.microsoft.com/dotnet/api/system.exception)\>

### MessageWhenLoad

Gets or sets message when document load.

```csharp
public string MessageWhenLoad { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Modified

Gets or sets the document's modify state.

```csharp
public override bool Modified { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### NodalBodyList

Gets the nodal body list.

```csharp
public virtual ObjectBase[] NodalBodyList { get; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md)\[\]

### NodalOutputCandidateObjects

Get nodal output candidate.

```csharp
public List<INodalOutputCandidate> NodalOutputCandidateObjects { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[INodalOutputCandidate](VM.Managed.INodalOutputCandidate.md)\>

### SelectionObjects

Get selected object container.

```csharp
public List<ObjectBase> SelectionObjects { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

### SkipUIUpdating

Gets or sets the document's skip ui updating state.

```csharp
public bool SkipUIUpdating { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SymmetricPlane

Gets or sets the symmetric plane.

```csharp
public Plane SymmetricPlane { get; set; }
```

#### Property Value

 Plane

### TemplatePath

Gets or sets the template path.

```csharp
public string TemplatePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### ToolKitName

Gets or sets the name of toolkit.

```csharp
public string ToolKitName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### UnderCursorObjects

Get selected object container.

```csharp
public List<ObjectBase> UnderCursorObjects { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

### UnderCursorPickableObjects

Get pickable object container.

```csharp
public List<ObjectBase> UnderCursorPickableObjects { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

### UseMultipleAddition

Gets or sets the multiple addition use flag.

```csharp
public bool UseMultipleAddition { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseSymmetric

Gets or sets a value indicating whether use symmetric option.

```csharp
public bool UseSymmetric { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### VersionInfo

Gets a version of document.

```csharp
public string VersionInfo { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### VisibleTarget

Gets or sets the visible target.

```csharp
public virtual ObjectBase[] VisibleTarget { get; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md)\[\]

### this\[string\]

```csharp
public ICollection<ObjectBase> this[string strCategory] { get; }
```

#### Property Value

 [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

## Methods

### Activate\(\)

Activate document.

```csharp
public void Activate()
```

### ActivateDocument\(\)

Activate document.

```csharp
public void ActivateDocument()
```

### ActiveCurveset\(UIntPtr, bool\)

Activate curveset.

```csharp
public void ActiveCurveset(UIntPtr curveset_key, bool bActive)
```

#### Parameters

`curveset_key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The edge key.

`bActive` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> active.

### ActiveFaceset\(UIntPtr, bool\)

Activate faceset.

```csharp
public void ActiveFaceset(UIntPtr faceset_key, bool bActive)
```

#### Parameters

`faceset_key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The facet key.

`bActive` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> active.

### ActiveObject\(List<ObjectBase\>\)

```csharp
public void ActiveObject(List<ObjectBase> lstObject)
```

#### Parameters

`lstObject` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

### Add\(ObjectBase, ObjectBase\)

Add object to document.

```csharp
public virtual void Add(ObjectBase objAdd, ObjectBase objExistAfter)
```

#### Parameters

`objAdd` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

`objExistAfter` [ObjectBase](VM.Managed.ObjectBase.md)

The object that exist added object after.

### Add\(ObjectBase\)

Add object to document.

```csharp
public override void Add(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

### AddAssembly\(Assembly\)

Add assembly to assembly container.

```csharp
public void AddAssembly(Assembly assem)
```

#### Parameters

`assem` [Assembly](VM.Managed.Assembly.md)

The assembly.

### AddInterface\(string\)

Add interface.

```csharp
public void AddInterface(string strXml)
```

#### Parameters

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The interface information.

### AddNewReference\(ObjectBase\[\], string\)

Add object for new reference.

```csharp
public virtual void AddNewReference(ObjectBase[] arObj, string strCategory)
```

#### Parameters

`arObj` [ObjectBase](VM.Managed.ObjectBase.md)\[\]

The object array.

`strCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The category name.

### AddNewReference\(ObjectBase\)

Add object for new reference.

```csharp
public virtual void AddNewReference(ObjectBase ob)
```

#### Parameters

`ob` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

### AfterDelete\(\)

```csharp
public virtual void AfterDelete()
```

### BeforeDelete\(ObjectBase\)

```csharp
public virtual void BeforeDelete(ObjectBase A_0)
```

#### Parameters

`A_0` [ObjectBase](VM.Managed.ObjectBase.md)

### BeforePostDeserialized\(\)

```csharp
public virtual void BeforePostDeserialized()
```

### ChangeKernelUnitWithScale\(string\)

change kernel unit.

```csharp
public void ChangeKernelUnitWithScale(string strLength)
```

#### Parameters

`strLength` [string](https://learn.microsoft.com/dotnet/api/system.string)

The length unit.

### ChangeTopologyForVMPID\(\)

```csharp
public virtual void ChangeTopologyForVMPID()
```

### CheckBeforeSave\(\)

```csharp
protected virtual void CheckBeforeSave()
```

### CheckMassPropForCADImport\(\)

Check mass property for CAD Import.

```csharp
public virtual string CheckMassPropForCADImport()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The error message.

### ChildAdd\(ObjectBase, string\)

Call OnChildAdded.

```csharp
public void ChildAdd(ObjectBase obj, string strXml)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The information.

### ChildRemove\(ObjectBase, string\)

Call OnChildRemove.

```csharp
public void ChildRemove(ObjectBase obj, string strXml)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The information.

### ChildRename\(ObjectBase, string\)

Call OnChildRename.

```csharp
public void ChildRename(ObjectBase obj, string strXml)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The information.

### ChildUpdate\(ObjectBase, string\)

Call OnChildUpdate.

```csharp
public void ChildUpdate(ObjectBase obj, string strXml)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The information.

### ClearAssembly\(\)

Clear assembly.

```csharp
public void ClearAssembly()
```

### ClearDocument\(\)

Clears the document.

```csharp
protected override void ClearDocument()
```

### ContainsEntityToEntityDictionary\(ObjectBase\)

Determines whether contains [entity to entity dictionary].

```csharp
public bool ContainsEntityToEntityDictionary(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CreateAssembly\(\)

Create assembly.

```csharp
public Assembly CreateAssembly()
```

#### Returns

 [Assembly](VM.Managed.Assembly.md)

### CreateAssemblyImpl\(\)

Creates the assembly [implementation].

```csharp
protected abstract Assembly CreateAssemblyImpl()
```

#### Returns

 [Assembly](VM.Managed.Assembly.md)

The assembly

### CreateCanvas\(bool\)

Create canvas.

```csharp
public Canvas CreateCanvas(bool bThreadSafeCanvas)
```

#### Parameters

`bThreadSafeCanvas` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> thread safely canvas.

#### Returns

 Canvas

The canvas.

### CreateCanvas\(\)

Create canvas.

```csharp
public Canvas CreateCanvas()
```

#### Returns

 Canvas

The canvas.

### CreateView\(UIntPtr\)

Create view.

```csharp
public override View CreateView(UIntPtr hWnd)
```

#### Parameters

`hWnd` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The view handle.

#### Returns

 [View](VM.Managed.View.md)

### CreateViewCore\(UIntPtr\)

Create view [Core].

```csharp
protected virtual View CreateViewCore(UIntPtr pView)
```

#### Parameters

`pView` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The view handle.

#### Returns

 [View](VM.Managed.View.md)

### DecreaseReferedDocumentCount\(\)

```csharp
public void DecreaseReferedDocumentCount()
```

### DeleteCore\(List<ObjectBase\>, List<DestroyEventArgs\>\)

```csharp
public void DeleteCore(List<ObjectBase> lstObjNew, List<DestroyEventArgs> lstArg)
```

#### Parameters

`lstObjNew` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

`lstArg` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[DestroyEventArgs](VM.Managed.DestroyEventArgs.md)\>

### DeleteObjectBases\(ref DestroyType, IEnumerable<ObjectBase\>, bool\)

```csharp
public bool DeleteObjectBases(ref DestroyType typeDestroy, IEnumerable<ObjectBase> targetObjectBases, bool bNotUseDelMsg)
```

#### Parameters

`typeDestroy` [DestroyType](VM.Managed.DestroyType.md)

`targetObjectBases` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

`bNotUseDelMsg` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DeleteObjectBases\(ref DestroyType, IEnumerable<ObjectBase\>\)

```csharp
public bool DeleteObjectBases(ref DestroyType typeDestroy, IEnumerable<ObjectBase> targetObjectBases)
```

#### Parameters

`typeDestroy` [DestroyType](VM.Managed.DestroyType.md)

`targetObjectBases` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DeleteWithSelectionObjects\(ref DestroyType, bool\)

Delete with Selection Objects.

```csharp
public bool DeleteWithSelectionObjects(ref DestroyType typeDestroy, bool bNotUseDelMsg)
```

#### Parameters

`typeDestroy` [DestroyType](VM.Managed.DestroyType.md)

The destroy type.

`bNotUseDelMsg` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Not use delete message

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DeleteWithSelectionObjects\(ref DestroyType\)

Delete with Selection Objects.

```csharp
public bool DeleteWithSelectionObjects(ref DestroyType typeDestroy)
```

#### Parameters

`typeDestroy` [DestroyType](VM.Managed.DestroyType.md)

The destroy type.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DeleteWithSelectionObjects\(\)

Delete with Selection Objects.

```csharp
public virtual bool DeleteWithSelectionObjects()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### DisplayModeShape\(int, double\)

Display mode shape with scale factor.

```csharp
public override void DisplayModeShape(int A_0, double A_1)
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
public override void EnableModeShape(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### EndCADImportLog\(\)

Ends the CAD import log.

```csharp
protected virtual void EndCADImportLog()
```

### EraseAllDisplayObject\(\)

```csharp
protected void EraseAllDisplayObject()
```

### ExistUnderCursor\(\)

Whether object exists under cursor.

```csharp
public bool ExistUnderCursor()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if object exists under cursor; otherwise, <code>false</code>.

### ExportCADBody\(string, List<ExportBodyInfo\>, string, string\)

```csharp
public virtual void ExportCADBody(string strFilePath, List<Document3D.ExportBodyInfo> lstBodyInfo, string strCADConvert, string strOption)
```

#### Parameters

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`lstBodyInfo` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Document3D](VM.Managed.Document3D.md).[ExportBodyInfo](VM.Managed.Document3D.ExportBodyInfo.md)\>

`strCADConvert` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strOption` [string](https://learn.microsoft.com/dotnet/api/system.string)

### ExportCADBody\(string, List<ExportBodyInfo\>, string\)

```csharp
public virtual void ExportCADBody(string strFilePath, List<Document3D.ExportBodyInfo> lstBodyInfo, string strAcisVer)
```

#### Parameters

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`lstBodyInfo` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Document3D](VM.Managed.Document3D.md).[ExportBodyInfo](VM.Managed.Document3D.ExportBodyInfo.md)\>

`strAcisVer` [string](https://learn.microsoft.com/dotnet/api/system.string)

### ExportCADFile\(string, string, string\)

Export cad file.

```csharp
public virtual void ExportCADFile(string strFilePath, string strCADConvert, string strOption)
```

#### Parameters

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The cad import file path.

`strCADConvert` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of cad convert exe.

`strOption` [string](https://learn.microsoft.com/dotnet/api/system.string)

The option.

### \~Document3D\(\)

Releases unmanaged resources and performs other cleanup operations before the
<xref href="VM.Managed.Document3D" data-throw-if-not-resolved="false"></xref> is reclaimed by garbage collection.

```csharp
protected ~Document3D()
```

### FindBodyFromCADBody\(ObjectBase\)

Finds the body from CAD body.

```csharp
public virtual ObjectBase FindBodyFromCADBody(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The CAD body.

#### Returns

 [ObjectBase](VM.Managed.ObjectBase.md)

The body such as solid body, assembled body.

### FindCategory\(string\)

Finds the category.

```csharp
public abstract string FindCategory(string strType)
```

#### Parameters

`strType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The fullname of type.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The category name

### FindCurveset\(UIntPtr, bool\)

Find curveset.

```csharp
public UIntPtr FindCurveset(UIntPtr edge_key, bool bQuickSearch)
```

#### Parameters

`edge_key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The edge key.

`bQuickSearch` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> quick search.

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The edge handle.

### FindFaceset\(UIntPtr, bool\)

Find faceset.

```csharp
public UIntPtr FindFaceset(UIntPtr face_key, bool bQuickSearch)
```

#### Parameters

`face_key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The facet key.

`bQuickSearch` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> quick search.

#### Returns

 [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The facet handle.

### FindLocal\(string\)

Find DAFUL object from the container by name.

```csharp
public override IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The DAFUL object name.

#### Returns

 IObjectBase

The DAFUL object.

### FindObjectForSelection\(ObjectBase, OperationTypeForSelection\)

Finds the object for show property.

```csharp
public virtual ObjectBase FindObjectForSelection(ObjectBase obj, Document3D.OperationTypeForSelection enType)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The obj.

`enType` [Document3D](VM.Managed.Document3D.md).[OperationTypeForSelection](VM.Managed.Document3D.OperationTypeForSelection.md)

The Operation Type for Selection

#### Returns

 [ObjectBase](VM.Managed.ObjectBase.md)

### GetAllArgumentList\(\)

```csharp
public virtual List<KeyValuePair<string, string>> GetAllArgumentList()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### GetAssembly\(\)

Get assembly container.

```csharp
public Assembly[] GetAssembly()
```

#### Returns

 [Assembly](VM.Managed.Assembly.md)\[\]

### GetBodies\(ref List<ObjectBase\>\)

```csharp
protected virtual void GetBodies(ref List<ObjectBase> lstBody)
```

#### Parameters

`lstBody` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

### GetBodyAndTransformation\(ref List<ExportBodyInfo\>\)

```csharp
public virtual void GetBodyAndTransformation(ref List<Document3D.ExportBodyInfo> A_0)
```

#### Parameters

`A_0` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Document3D](VM.Managed.Document3D.md).[ExportBodyInfo](VM.Managed.Document3D.ExportBodyInfo.md)\>

### GetCADBodyNameAttribute\(ref List<string\>\)

```csharp
public virtual void GetCADBodyNameAttribute(ref List<string> lstName)
```

#### Parameters

`lstName` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### GetCategoryChildren\(string\)

Gets the object category container from category name.

```csharp
public virtual IEnumerable<IObjectBase> GetCategoryChildren(string categoryName)
```

#### Parameters

`categoryName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IObjectBase\>

The object category container.

### GetCuttingPlane\(\)

```csharp
public bool GetCuttingPlane()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetData\(XmlNode\)

Gets the analysis document information data.

```csharp
public override void GetData(XmlNode writer)
```

#### Parameters

`writer` [XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)

The writer.

### GetImportCADBody\(\)

Gets the Import CAD Body.

```csharp
public virtual List<ObjectBase> GetImportCADBody()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

### GetInfoFromDocumentPropertyGrid\(XmlDocument, XmlDocument\)

Gets the information from document property grid.

```csharp
public virtual void GetInfoFromDocumentPropertyGrid(XmlDocument xmlTarget, XmlDocument xmlTool)
```

#### Parameters

`xmlTarget` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The target xml.

`xmlTool` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The tool xml.

### GetNearestUnderCursorObject\(\)

Get the nearest Under-Cursor object.

```csharp
public ObjectBase GetNearestUnderCursorObject()
```

#### Returns

 [ObjectBase](VM.Managed.ObjectBase.md)

The nearest Under-Cursor object.

### GetObjectsForChangeAssembly\(\)

```csharp
public virtual List<ObjectBase> GetObjectsForChangeAssembly()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

### GetOwnedDocuments\(LinkedList<IDocument\>\)

Gets the owned documents.

```csharp
virtual void GetOwnedDocuments(LinkedList<IDocument> lstOwnedDoc)
```

#### Parameters

`lstOwnedDoc` [LinkedList](https://learn.microsoft.com/dotnet/api/system.collections.generic.linkedlist\-1)<IDocument\>

### GetReferDocument\(ref List<Document3D\>\)

```csharp
public virtual void GetReferDocument(ref List<Document3D> lstDocument)
```

#### Parameters

`lstDocument` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Document3D](VM.Managed.Document3D.md)\>

### GetReferedDocumentCount\(\)

```csharp
public int GetReferedDocumentCount()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetReference\(ObjectBase, ref List<Reference\>, ref List<ObjectBase\>\)

```csharp
public virtual void GetReference(ObjectBase obSub, ref List<Reference> lstRef, ref List<ObjectBase> lstOther)
```

#### Parameters

`obSub` [ObjectBase](VM.Managed.ObjectBase.md)

`lstRef` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Reference](VM.Managed.Reference.md)\>

`lstOther` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

### GetReplaceableInfo\(BuilderImport\[\]\)

Gets the replaceable information.

```csharp
protected List<Body.ReplaceCADInfo> GetReplaceableInfo(BuilderImport[] arBuilder)
```

#### Parameters

`arBuilder` [BuilderImport](VM.Managed.CAD.BuilderImport.md)\[\]

The builder object array.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Body](VM.Managed.CAD.Body.md).[ReplaceCADInfo](VM.Managed.CAD.Body.ReplaceCADInfo.md)\>

The list of replaceable information.

### GetUnnamedObjectName\(object\)

Get an unnamed object name.

```csharp
public override string GetUnnamedObjectName(object obUnnamed)
```

#### Parameters

`obUnnamed` [object](https://learn.microsoft.com/dotnet/api/system.object)

The unnamed object.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The unnamed object name.

### HideObjectInReading\(\)

Hide object in reading template.

```csharp
protected virtual void HideObjectInReading()
```

### ImportCADBody\(BuilderImport\[\]\)

Imports the CAD body.

```csharp
protected virtual void ImportCADBody(BuilderImport[] arOb)
```

#### Parameters

`arOb` [BuilderImport](VM.Managed.CAD.BuilderImport.md)\[\]

The build object array.

### IncreaseReferedDocumentCount\(\)

```csharp
public void IncreaseReferedDocumentCount()
```

### InitCategory\(\)

Initialize category.

```csharp
public void InitCategory()
```

### InitializeKernelUnit\(\)

Initialize kernel unit.

```csharp
public void InitializeKernelUnit()
```

### IsContainsCategoryName\(string\)

Determines whether is [contains category name] [the specified category name].

```csharp
public bool IsContainsCategoryName(string strCategoryName)
```

#### Parameters

`strCategoryName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the category.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if is [contains category name] [the specified category name]; otherwise, <code>false</code>.

### IsCuttingPlaneSelected\(\)

```csharp
public bool IsCuttingPlaneSelected()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsMatchSelectObjectAndUnderCursorObject\(\)

check match of select object and under cursor object.

```csharp
public bool IsMatchSelectObjectAndUnderCursorObject()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsSelectFromUnderCursor\(ulong\)

Determines whether selected object.

```csharp
public bool IsSelectFromUnderCursor(ulong keyObject)
```

#### Parameters

`keyObject` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

The object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if already selected; otherwise, <code>false</code>.

### IsTypeSupported\(Type\)

Determines whether is [supported type] [the specified type].

```csharp
public override void IsTypeSupported(Type type)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The type.

### LinkRequestUpdate\(object, LinkEventArgs\)

The update event occured from the linked object.

```csharp
protected override void LinkRequestUpdate(object obNotifier, LinkEventArgs arg)
```

#### Parameters

`obNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The update event information.

### Load\(XmlReader\)

Load document [Not Implemented].

```csharp
protected virtual void Load(XmlReader A_0)
```

#### Parameters

`A_0` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

### LoadCADFile\(string, CadImportColorType, Color, CadImportResultType, CadImportUnitType, string\)

Load cad import file.

```csharp
public void LoadCADFile(string strPath, Document3D.CadImportColorType color_type, Color color, Document3D.CadImportResultType type, Document3D.CadImportUnitType typeUnit, string strCADConvert)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The cad import file path.

`color_type` [Document3D](VM.Managed.Document3D.md).[CadImportColorType](VM.Managed.Document3D.CadImportColorType.md)

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

The cad import color.

`type` [Document3D](VM.Managed.Document3D.md).[CadImportResultType](VM.Managed.Document3D.CadImportResultType.md)

The cad import result type.

`typeUnit` [Document3D](VM.Managed.Document3D.md).[CadImportUnitType](VM.Managed.Document3D.CadImportUnitType.md)

The cad import unit type.

`strCADConvert` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of cad convert exe.

### LoadCADFile\(string, CadImportResultType, CadImportUnitType\)

Load cad import file.

```csharp
public void LoadCADFile(string strPath, Document3D.CadImportResultType type, Document3D.CadImportUnitType typeUnit)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The cad import file path.

`type` [Document3D](VM.Managed.Document3D.md).[CadImportResultType](VM.Managed.Document3D.CadImportResultType.md)

The cad import result type.

`typeUnit` [Document3D](VM.Managed.Document3D.md).[CadImportUnitType](VM.Managed.Document3D.CadImportUnitType.md)

The cad import unit type.

### LoadCADFile\(string, Color, CadImportResultType\)

Load cad import file.

```csharp
public void LoadCADFile(string strPath, Color color, Document3D.CadImportResultType type)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The cad import file path.

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

The cad import color.

`type` [Document3D](VM.Managed.Document3D.md).[CadImportResultType](VM.Managed.Document3D.CadImportResultType.md)

The cad import result type.

### LoadCADFile\(string, CadImportResultType, string\)

Load cad import file.

```csharp
public void LoadCADFile(string strPath, Document3D.CadImportResultType type, string strCADConvert)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The cad import file path.

`type` [Document3D](VM.Managed.Document3D.md).[CadImportResultType](VM.Managed.Document3D.CadImportResultType.md)

The cad import result type.

`strCADConvert` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of cad convert exe.

### LoadCADFile\(string, CadImportResultType\)

Load cad import file.

```csharp
public void LoadCADFile(string strPath, Document3D.CadImportResultType type)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The cad import file path.

`type` [Document3D](VM.Managed.Document3D.md).[CadImportResultType](VM.Managed.Document3D.CadImportResultType.md)

The cad import result type.

### LoadCategoryFiles\(string\)

Loads the category files.

```csharp
public static void LoadCategoryFiles(string strCategoryDir)
```

#### Parameters

`strCategoryDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

The category directory.

### LoadCategoryInfoFromFile\(string, Dictionary<string, string\>, List<string\>\)

```csharp
protected static void LoadCategoryInfoFromFile(string strCategoryName, Dictionary<string, string> dicTypeCategory, List<string> lstCategory)
```

#### Parameters

`strCategoryName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dicTypeCategory` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

`lstCategory` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### LoadTemplateBasedXml\(XmlReader\)

Loads the XML for template based document.

```csharp
protected virtual void LoadTemplateBasedXml(XmlReader A_0)
```

#### Parameters

`A_0` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

### MakeXmlForDocumentPropertyGrid\(XmlDocument, ref string\)

Makes the XML for document property grid.

```csharp
public virtual string MakeXmlForDocumentPropertyGrid(XmlDocument xmlDom, ref string strGroupName)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XML DOM.

`strGroupName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string group.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### MappingEntity\(\)

```csharp
protected virtual void MappingEntity()
```

### OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### OnPostMakeDocument\(DocCreateInfo\)

Called when [post make document] [implementation].

```csharp
protected override void OnPostMakeDocument(DocCreateInfo A_0)
```

#### Parameters

`A_0` [DocCreateInfo](VM.Managed.DocCreateInfo.md)

### OpenPropertyObjectBases\(List<ObjectBase\>\)

```csharp
public bool OpenPropertyObjectBases(List<ObjectBase> targetObjectBases)
```

#### Parameters

`targetObjectBases` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OpenPropertyWithFirstSelectionObject\(\)

Open property dialog with Selection Objects.

```csharp
public bool OpenPropertyWithFirstSelectionObject()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### OpenPropertyWithSelectionObjects\(\)

Open property dialog with Selection Objects.

```csharp
public bool OpenPropertyWithSelectionObjects()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PostCloseDocument\(\)

Call when post [close document].

```csharp
public override void PostCloseDocument()
```

### PostOpenDocument\(\)

Call when post [open document].

```csharp
public override void PostOpenDocument()
```

### PostOpenDocumentAndInitLayer\(\)

Call [Open Document] for initialize layer.

```csharp
public override sealed void PostOpenDocumentAndInitLayer()
```

### PostSave\(List<Document\>, bool\)

```csharp
public override void PostSave(List<Document> lstOpenDocs, bool bModified)
```

#### Parameters

`lstOpenDocs` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Document](VM.Managed.Document.md)\>

`bModified` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PreloadCADFile\(string, CadImportColorType, Color, CadImportResultType, CadImportUnitType, string, ref BuilderImport\[\]\)

Preload cad import file.

```csharp
public void PreloadCADFile(string strPath, Document3D.CadImportColorType color_type, Color color, Document3D.CadImportResultType type, Document3D.CadImportUnitType typeUnit, string strCADConvert, ref BuilderImport[] arBuilderInfo)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The cad import file path.

`color_type` [Document3D](VM.Managed.Document3D.md).[CadImportColorType](VM.Managed.Document3D.CadImportColorType.md)

`color` [Color](https://learn.microsoft.com/dotnet/api/system.drawing.color)

The cad import color.

`type` [Document3D](VM.Managed.Document3D.md).[CadImportResultType](VM.Managed.Document3D.CadImportResultType.md)

The cad import result type.

`typeUnit` [Document3D](VM.Managed.Document3D.md).[CadImportUnitType](VM.Managed.Document3D.CadImportUnitType.md)

The cad import unit type.

`strCADConvert` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of cad convert exe.

`arBuilderInfo` [BuilderImport](VM.Managed.CAD.BuilderImport.md)\[\]

The output builder information.

### ReAssemblyCore\(\)

Reassembly

```csharp
protected virtual bool ReAssemblyCore()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### ReAssemblyImpl\(ObjectBase\)

Reassembly [implementation].

```csharp
protected virtual bool ReAssemblyImpl(ObjectBase ob)
```

#### Parameters

`ob` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### ReInitInterfaceForAssembly\(\)

Reinitialize interface for assembly.

```csharp
public virtual void ReInitInterfaceForAssembly()
```

### ReadCategoryXml\(string, string, XmlReader\)

Read objects in specialized category from xml reader.

```csharp
protected void ReadCategoryXml(string strCategoryName, string strElementName, XmlReader reader)
```

#### Parameters

`strCategoryName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The category name.

`strElementName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The element name.

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.

### RedrawCuttingPlane\(\)

```csharp
public void RedrawCuttingPlane()
```

### RefreshAllViews\(\)

Refresh all views.

```csharp
public void RefreshAllViews()
```

### RegisterCurveset\(UIntPtr, UIntPtr, bool\)

Register curveset.

```csharp
public void RegisterCurveset(UIntPtr curveset_key, UIntPtr edge_key, bool bAdd)
```

#### Parameters

`curveset_key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The curveset key.

`edge_key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The edge key.

`bAdd` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> add.

### RegisterFaceset\(UIntPtr, UIntPtr, bool\)

Register faceset.

```csharp
public void RegisterFaceset(UIntPtr faceset_key, UIntPtr face_key, bool bAdd)
```

#### Parameters

`faceset_key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The facet key.

`face_key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The face key.

`bAdd` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> add.

### RegisterLoadingException\(Exception\)

Registers the exception.

```csharp
public void RegisterLoadingException(Exception exception)
```

#### Parameters

`exception` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The exception.

### RemoveAssembly\(Assembly\)

Remove assembly.

```csharp
public void RemoveAssembly(Assembly assem)
```

#### Parameters

`assem` [Assembly](VM.Managed.Assembly.md)

The assembly.

### RemoveEntityForReplace\(ObjectBase\)

Remove entity for replace.

```csharp
public void RemoveEntityForReplace(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

### RemoveInterface\(string\)

Remove interface.

```csharp
public void RemoveInterface(string strXml)
```

#### Parameters

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The interface information.

### RenameEntityImpl\(string, ObjectBase\)

Rename entity [Implementation].

```csharp
protected virtual void RenameEntityImpl(string strOldName, ObjectBase namedObj)
```

#### Parameters

`strOldName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The old name.

`namedObj` [ObjectBase](VM.Managed.ObjectBase.md)

The new object.

### RenameInterface\(string\)

Rename interface.

```csharp
public void RenameInterface(string strXml)
```

#### Parameters

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The interface information.

### Repair\(\)

```csharp
public void Repair()
```

### RepairImpl\(\)

Repair a document.

```csharp
protected virtual void RepairImpl()
```

### ReplaceCADBody\(BuilderImport\[\]\)

Replaces the CAD body.

```csharp
public virtual void ReplaceCADBody(BuilderImport[] arBuilder)
```

#### Parameters

`arBuilder` [BuilderImport](VM.Managed.CAD.BuilderImport.md)\[\]

The builder object array.

### ResetFacesetSurfaceType\(\)

```csharp
public void ResetFacesetSurfaceType()
```

### RunPredefinedOperation\(\)

Run pre-defined operation.

```csharp
public virtual void RunPredefinedOperation()
```

### Save\(XmlWriter\)

Save document [Not Implemented].

```csharp
protected virtual void Save(XmlWriter A_0)
```

#### Parameters

`A_0` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

### Save\(string\)

Save document.

```csharp
public override sealed void Save(string strPath)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path to save.

### Save\(string, bool, Dictionary<string, string\>\)

```csharp
public void Save(string strPath, bool bAutoSave, Dictionary<string, string> mapSubPath)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`bAutoSave` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`mapSubPath` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### Save\(string, bool, bool\)

save document.

```csharp
public void Save(string strPath, bool bAutoSave, bool bUseBackUpFile)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path.

`bAutoSave` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The auto save state.

`bUseBackUpFile` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The backup flag.

### Save\(string, bool\)

save document with autosave.

```csharp
public void Save(string strPath, bool bAutoSave)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path.

`bAutoSave` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The auto save state.

### SaveDocument\(string, Dictionary<string, string\>\)

```csharp
public void SaveDocument(string strPath, Dictionary<string, string> mapSubPath)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`mapSubPath` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### SaveTemplateBasedXml\(XmlWriter\)

Saves the XML for template based document.

```csharp
protected virtual void SaveTemplateBasedXml(XmlWriter A_0)
```

#### Parameters

`A_0` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

### SetData\(XmlNode\)

Sets the analysis document information data.

```csharp
public override void SetData(XmlNode reader)
```

#### Parameters

`reader` [XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)

The reader.

### SetHandle\(UIntPtr\)

Set document handle.

```csharp
protected override void SetHandle(UIntPtr pDocHandle)
```

#### Parameters

`pDocHandle` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The document handle.

### SetPickFromUnderCursor\(ulong\)

Set picked object.

```csharp
public void SetPickFromUnderCursor(ulong keyObject)
```

#### Parameters

`keyObject` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

The object will be picked.

### SetRenderingMode\(enRenderingMode\)

```csharp
public void SetRenderingMode(Document3D.enRenderingMode mode)
```

#### Parameters

`mode` [Document3D](VM.Managed.Document3D.md).[enRenderingMode](VM.Managed.Document3D.enRenderingMode.md)

### SetSelectFromUnderCursor\(ulong\)

Set selected object.

```csharp
public void SetSelectFromUnderCursor(ulong keyObject)
```

#### Parameters

`keyObject` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

The object will be selected.

### SetSelectFromUnderCursor\(ObjectBase\)

Set selected object.

```csharp
public void SetSelectFromUnderCursor(ObjectBase objUnderCursor)
```

#### Parameters

`objUnderCursor` [ObjectBase](VM.Managed.ObjectBase.md)

The object will be selected.

### SetSelectionObject\(List<ObjectBase\>\)

```csharp
public virtual void SetSelectionObject(List<ObjectBase> lstObj)
```

#### Parameters

`lstObj` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

### SetUnselectFromUnderCursor\(ulong\)

Set unselected object.

```csharp
public void SetUnselectFromUnderCursor(ulong keyObject)
```

#### Parameters

`keyObject` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

The object will be unselected.

### ShowHideObjectBases\(bool, List<ObjectBase\>\)

```csharp
public bool ShowHideObjectBases(bool bShow, List<ObjectBase> lstSel)
```

#### Parameters

`bShow` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`lstSel` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ShowHideWithSelectionObjects\(bool\)

show hide with Selection Objects.

```csharp
public bool ShowHideWithSelectionObjects(bool bShow)
```

#### Parameters

`bShow` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SkipAddToDSDLWithCategory\(string\)

```csharp
public virtual bool SkipAddToDSDLWithCategory(string strCategory)
```

#### Parameters

`strCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SkipAddToDSDLWithEntity\(ObjectBase\)

```csharp
public virtual bool SkipAddToDSDLWithEntity(ObjectBase ob)
```

#### Parameters

`ob` [ObjectBase](VM.Managed.ObjectBase.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SkipDelete\(ObjectBase\)

Skips the delete.

```csharp
protected virtual bool SkipDelete(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The obj.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SkipObjectInWriting\(ObjectBase\)

Skip object in writing template.

```csharp
protected virtual bool SkipObjectInWriting(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SkipShowHide\(ObjectBase\)

Skips the show hide.

```csharp
protected virtual bool SkipShowHide(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The obj.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### StartBasicOp\(BasicOpType\)

Start basic operation.

```csharp
public void StartBasicOp(Document3D.BasicOpType type)
```

#### Parameters

`type` [Document3D](VM.Managed.Document3D.md).[BasicOpType](VM.Managed.Document3D.BasicOpType.md)

The type of basic operation.

### StartCADImportLog\(string\)

Starts the CAD import log.

```csharp
protected virtual void StartCADImportLog(string strLogPath)
```

#### Parameters

`strLogPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The log path.

### ToggleCuttingPlane\(OMatrix\)

```csharp
public void ToggleCuttingPlane(OMatrix matOri)
```

#### Parameters

`matOri` [OMatrix](VM.Managed.OMatrix.md)

### ToggleCuttingPlane\(\)

```csharp
public void ToggleCuttingPlane()
```

### UpdateEnable\(ObjectBase, bool\)

Update object to enable or disable.

```csharp
public override void UpdateEnable(ObjectBase obj, bool bEnabled)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

`bEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether object is enable.

### UpdateInterface\(ObjectBase, bool\)

Update interface.

```csharp
public override void UpdateInterface(ObjectBase obj, bool bInterfaced)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

`bInterfaced` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether object is interfaced.

### VerifyAllEntity\(\)

verify all entity.

```csharp
public bool VerifyAllEntity()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### WriteCategoryToXml\(string, string, XmlWriter\)

Write objects in specialized category to xml writer.

```csharp
protected void WriteCategoryToXml(string strCategoryName, string strElementName, XmlWriter writer)
```

#### Parameters

`strCategoryName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The category name.

`strElementName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The element name.

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

### WriteMessageForShowHide\(\)

Writes the message for show hide.

```csharp
protected virtual void WriteMessageForShowHide()
```

### XmlDocumentReLoad\(XmlReader\)

Reload documnet.

```csharp
public virtual void XmlDocumentReLoad(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.


