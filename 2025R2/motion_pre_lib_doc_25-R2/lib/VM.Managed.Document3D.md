#  Class Document3D

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

### <a id="VM_Managed_Document3D__ctor_System_UIntPtr_"></a> Document3D\(UIntPtr\)

Initializes a new instance of the <xref href="VM.Managed.Document3D" data-throw-if-not-resolved="false"></xref> class

```csharp
public Document3D(UIntPtr pDoc)
```

#### Parameters

`pDoc` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

## Fields

### <a id="VM_Managed_Document3D_RibbonGalleryIndex"></a> RibbonGalleryIndex

The ribbon gallery index

```csharp
public Document3D.GetRibbonGalleryIndex RibbonGalleryIndex
```

#### Field Value

 [Document3D](VM.Managed.Document3D.md).[GetRibbonGalleryIndex](VM.Managed.Document3D.GetRibbonGalleryIndex.md)

### <a id="VM_Managed_Document3D_g_dRenderingType"></a> g\_dRenderingType

```csharp
public static enRenderType g_dRenderingType
```

#### Field Value

 [enRenderType](VM.Managed.Render.enRenderType.md)

### <a id="VM_Managed_Document3D_m_bReload"></a> m\_bReload

```csharp
protected bool m_bReload
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_m_dicCategory"></a> m\_dicCategory

```csharp
[Obsolete]
protected Dictionary<string, LinkedList<Child<ObjectBase, LinkContainer.Update>>> m_dicCategory
```

#### Field Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [LinkedList](https://learn.microsoft.com/dotnet/api/system.collections.generic.linkedlist\-1)<[Child](VM.Managed.Child\-2.md)<[ObjectBase](VM.Managed.ObjectBase.md), [LinkContainer](VM.Managed.LinkContainer.md).[Update](VM.Managed.LinkContainer.Update.md)\>\>\>

### <a id="VM_Managed_Document3D_m_dicCategoryCollection"></a> m\_dicCategoryCollection

The category container.

```csharp
protected Dictionary<string, LinkLinkedList<ObjectBase, Child<ObjectBase, LinkContainer.Update>>> m_dicCategoryCollection
```

#### Field Value

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [LinkLinkedList](VM.Managed.Collections.LinkLinkedList\-2.md)<[ObjectBase](VM.Managed.ObjectBase.md), [Child](VM.Managed.Child\-2.md)<[ObjectBase](VM.Managed.ObjectBase.md), [LinkContainer](VM.Managed.LinkContainer.md).[Update](VM.Managed.LinkContainer.Update.md)\>\>\>

### <a id="VM_Managed_Document3D_m_lstAssem"></a> m\_lstAssem

The assembly container.

```csharp
protected LinkListCollection<Assembly, Link<Assembly, LinkContainer.None, LinkContainer.Update, LinkContainer.None>> m_lstAssem
```

#### Field Value

 [LinkListCollection](VM.Managed.Collections.LinkListCollection\-2.md)<[Assembly](VM.Managed.Assembly.md), [Link](VM.Managed.Link\-4.md)<[Assembly](VM.Managed.Assembly.md), [LinkContainer](VM.Managed.LinkContainer.md).[None](VM.Managed.LinkContainer.None.md), [LinkContainer](VM.Managed.LinkContainer.md).[Update](VM.Managed.LinkContainer.Update.md), [LinkContainer](VM.Managed.LinkContainer.md).[None](VM.Managed.LinkContainer.None.md)\>\>

### <a id="VM_Managed_Document3D_m_strVersion"></a> m\_strVersion

```csharp
protected string m_strVersion
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Managed_Document3D_AssembledBodyList"></a> AssembledBodyList

Gets or sets the assembled body list.

```csharp
public virtual ObjectBase[] AssembledBodyList { get; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md)\[\]

### <a id="VM_Managed_Document3D_CanClose"></a> CanClose

Gets a value indicating that whether document can close.

```csharp
public override bool CanClose { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_Categories"></a> Categories

Gets the categorys.

```csharp
public ICollection<string> Categories { get; }
```

#### Property Value

 [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Managed_Document3D_CategoryInfo"></a> CategoryInfo

```csharp
public static CategoryInfo CategoryInfo { get; }
```

#### Property Value

 [CategoryInfo](VM.Managed.CategoryInfo.md)

### <a id="VM_Managed_Document3D_ChangeReference"></a> ChangeReference

Gets a value indicating that whether reference is changed.

```csharp
protected bool ChangeReference { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_CommentOfDocument"></a> CommentOfDocument

Sets/Gets a comment of document.
It has a character of seperator. The Character is ';'.

```csharp
public string CommentOfDocument { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_Document3D_CountOfSelectionObject"></a> CountOfSelectionObject

Get count of selected object.

```csharp
public int CountOfSelectionObject { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_Document3D_CountOfUnderCursorObject"></a> CountOfUnderCursorObject

Get count of Under-Cursor object.

```csharp
public int CountOfUnderCursorObject { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_Document3D_CountOfUnderCursorPickableObject"></a> CountOfUnderCursorPickableObject

Get count of Under-Cursor pickable object.

```csharp
public int CountOfUnderCursorPickableObject { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_Document3D_CurrentBasicOp"></a> CurrentBasicOp

Gets the type of current basic operation.

```csharp
public Document3D.BasicOpType CurrentBasicOp { get; }
```

#### Property Value

 [Document3D](VM.Managed.Document3D.md).[BasicOpType](VM.Managed.Document3D.BasicOpType.md)

### <a id="VM_Managed_Document3D_CustomDesignParameterList"></a> CustomDesignParameterList

Gets or sets the custom design parameter list.

```csharp
public virtual ObjectBase[] CustomDesignParameterList { get; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md)\[\]

### <a id="VM_Managed_Document3D_CustomPerformanceIndexList"></a> CustomPerformanceIndexList

Gets or sets the custom performance index list.

```csharp
public virtual ObjectBase[] CustomPerformanceIndexList { get; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md)\[\]

### <a id="VM_Managed_Document3D_DoingCreateEntityOperation"></a> DoingCreateEntityOperation

Gets a value indicating that whether [create entity operation] is executing.

```csharp
public bool DoingCreateEntityOperation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_DoingTemplateBasedXml"></a> DoingTemplateBasedXml

Gets a value indicating that whether [Load TemplateBasedXml] is doing.

```csharp
public bool DoingTemplateBasedXml { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_ExtensionName"></a> ExtensionName

Gets or sets the name of extension.

```csharp
public string ExtensionName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_Document3D_Format"></a> Format

Gets or sets the type of fileformat.

```csharp
public Document3D.FileFormat Format { get; set; }
```

#### Property Value

 [Document3D](VM.Managed.Document3D.md).[FileFormat](VM.Managed.Document3D.FileFormat.md)

### <a id="VM_Managed_Document3D_FromTemplate"></a> FromTemplate

Gets a value indicating whether [from template].

```csharp
public bool FromTemplate { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_IconSize"></a> IconSize

Gets or sets the icon size.

```csharp
public virtual double IconSize { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_Document3D_InitialCategories"></a> InitialCategories

Gets the initialize categories.

```csharp
protected abstract List<string> InitialCategories { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Managed_Document3D_IsAdvancedMode"></a> IsAdvancedMode

Gets or sets a value indicating whether this instance is advanced mode.

```csharp
public bool IsAdvancedMode { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_IsPropertySupport"></a> IsPropertySupport

Gets a value indicating whether this instance is property support.

```csharp
public virtual bool IsPropertySupport { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_LayerManager"></a> LayerManager

Gets the layer manager.

```csharp
public LayerManager LayerManager { get; }
```

#### Property Value

 [LayerManager](VM.Managed.LayerManager.md)

### <a id="VM_Managed_Document3D_LoadingExceptions"></a> LoadingExceptions

Gets the exceptions that occurred when loading.

```csharp
public List<Exception> LoadingExceptions { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Exception](https://learn.microsoft.com/dotnet/api/system.exception)\>

### <a id="VM_Managed_Document3D_MessageWhenLoad"></a> MessageWhenLoad

Gets or sets message when document load.

```csharp
public string MessageWhenLoad { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_Document3D_Modified"></a> Modified

Gets or sets the document's modify state.

```csharp
public override bool Modified { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_NodalBodyList"></a> NodalBodyList

Gets the nodal body list.

```csharp
public virtual ObjectBase[] NodalBodyList { get; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md)\[\]

### <a id="VM_Managed_Document3D_NodalOutputCandidateObjects"></a> NodalOutputCandidateObjects

Get nodal output candidate.

```csharp
public List<INodalOutputCandidate> NodalOutputCandidateObjects { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[INodalOutputCandidate](VM.Managed.INodalOutputCandidate.md)\>

### <a id="VM_Managed_Document3D_SelectionObjects"></a> SelectionObjects

Get selected object container.

```csharp
public List<ObjectBase> SelectionObjects { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

### <a id="VM_Managed_Document3D_SkipUIUpdating"></a> SkipUIUpdating

Gets or sets the document's skip ui updating state.

```csharp
public bool SkipUIUpdating { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_SymmetricPlane"></a> SymmetricPlane

Gets or sets the symmetric plane.

```csharp
public Plane SymmetricPlane { get; set; }
```

#### Property Value

 Plane

### <a id="VM_Managed_Document3D_TemplatePath"></a> TemplatePath

Gets or sets the template path.

```csharp
public string TemplatePath { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_Document3D_ToolKitName"></a> ToolKitName

Gets or sets the name of toolkit.

```csharp
public string ToolKitName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_Document3D_UnderCursorObjects"></a> UnderCursorObjects

Get selected object container.

```csharp
public List<ObjectBase> UnderCursorObjects { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

### <a id="VM_Managed_Document3D_UnderCursorPickableObjects"></a> UnderCursorPickableObjects

Get pickable object container.

```csharp
public List<ObjectBase> UnderCursorPickableObjects { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

### <a id="VM_Managed_Document3D_UseMultipleAddition"></a> UseMultipleAddition

Gets or sets the multiple addition use flag.

```csharp
public bool UseMultipleAddition { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_UseSymmetric"></a> UseSymmetric

Gets or sets a value indicating whether use symmetric option.

```csharp
public bool UseSymmetric { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_VersionInfo"></a> VersionInfo

Gets a version of document.

```csharp
public string VersionInfo { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_Document3D_VisibleTarget"></a> VisibleTarget

Gets or sets the visible target.

```csharp
public virtual ObjectBase[] VisibleTarget { get; }
```

#### Property Value

 [ObjectBase](VM.Managed.ObjectBase.md)\[\]

### <a id="VM_Managed_Document3D_Item_System_String_"></a> this\[string\]

```csharp
public ICollection<ObjectBase> this[string strCategory] { get; }
```

#### Property Value

 [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

## Methods

### <a id="VM_Managed_Document3D_Activate"></a> Activate\(\)

Activate document.

```csharp
public void Activate()
```

### <a id="VM_Managed_Document3D_ActivateDocument"></a> ActivateDocument\(\)

Activate document.

```csharp
public void ActivateDocument()
```

### <a id="VM_Managed_Document3D_ActiveCurveset_System_UIntPtr_System_Boolean_"></a> ActiveCurveset\(UIntPtr, bool\)

Activate curveset.

```csharp
public void ActiveCurveset(UIntPtr curveset_key, bool bActive)
```

#### Parameters

`curveset_key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The edge key.

`bActive` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> active.

### <a id="VM_Managed_Document3D_ActiveFaceset_System_UIntPtr_System_Boolean_"></a> ActiveFaceset\(UIntPtr, bool\)

Activate faceset.

```csharp
public void ActiveFaceset(UIntPtr faceset_key, bool bActive)
```

#### Parameters

`faceset_key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The facet key.

`bActive` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> active.

### <a id="VM_Managed_Document3D_ActiveObject_System_Collections_Generic_List_VM_Managed_ObjectBase__"></a> ActiveObject\(List<ObjectBase\>\)

```csharp
public void ActiveObject(List<ObjectBase> lstObject)
```

#### Parameters

`lstObject` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

### <a id="VM_Managed_Document3D_Add_VM_Managed_ObjectBase_VM_Managed_ObjectBase_"></a> Add\(ObjectBase, ObjectBase\)

Add object to document.

```csharp
public virtual void Add(ObjectBase objAdd, ObjectBase objExistAfter)
```

#### Parameters

`objAdd` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

`objExistAfter` [ObjectBase](VM.Managed.ObjectBase.md)

The object that exist added object after.

### <a id="VM_Managed_Document3D_Add_VM_Managed_ObjectBase_"></a> Add\(ObjectBase\)

Add object to document.

```csharp
public override void Add(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

### <a id="VM_Managed_Document3D_AddAssembly_VM_Managed_Assembly_"></a> AddAssembly\(Assembly\)

Add assembly to assembly container.

```csharp
public void AddAssembly(Assembly assem)
```

#### Parameters

`assem` [Assembly](VM.Managed.Assembly.md)

The assembly.

### <a id="VM_Managed_Document3D_AddInterface_System_String_"></a> AddInterface\(string\)

Add interface.

```csharp
public void AddInterface(string strXml)
```

#### Parameters

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The interface information.

### <a id="VM_Managed_Document3D_AddNewReference_VM_Managed_ObjectBase___System_String_"></a> AddNewReference\(ObjectBase\[\], string\)

Add object for new reference.

```csharp
public virtual void AddNewReference(ObjectBase[] arObj, string strCategory)
```

#### Parameters

`arObj` [ObjectBase](VM.Managed.ObjectBase.md)\[\]

The object array.

`strCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The category name.

### <a id="VM_Managed_Document3D_AddNewReference_VM_Managed_ObjectBase_"></a> AddNewReference\(ObjectBase\)

Add object for new reference.

```csharp
public virtual void AddNewReference(ObjectBase ob)
```

#### Parameters

`ob` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

### <a id="VM_Managed_Document3D_AfterDelete"></a> AfterDelete\(\)

```csharp
public virtual void AfterDelete()
```

### <a id="VM_Managed_Document3D_BeforeDelete_VM_Managed_ObjectBase_"></a> BeforeDelete\(ObjectBase\)

```csharp
public virtual void BeforeDelete(ObjectBase A_0)
```

#### Parameters

`A_0` [ObjectBase](VM.Managed.ObjectBase.md)

### <a id="VM_Managed_Document3D_BeforePostDeserialized"></a> BeforePostDeserialized\(\)

```csharp
public virtual void BeforePostDeserialized()
```

### <a id="VM_Managed_Document3D_ChangeKernelUnitWithScale_System_String_"></a> ChangeKernelUnitWithScale\(string\)

change kernel unit.

```csharp
public void ChangeKernelUnitWithScale(string strLength)
```

#### Parameters

`strLength` [string](https://learn.microsoft.com/dotnet/api/system.string)

The length unit.

### <a id="VM_Managed_Document3D_ChangeTopologyForVMPID"></a> ChangeTopologyForVMPID\(\)

```csharp
public virtual void ChangeTopologyForVMPID()
```

### <a id="VM_Managed_Document3D_CheckBeforeSave"></a> CheckBeforeSave\(\)

```csharp
protected virtual void CheckBeforeSave()
```

### <a id="VM_Managed_Document3D_CheckMassPropForCADImport"></a> CheckMassPropForCADImport\(\)

Check mass property for CAD Import.

```csharp
public virtual string CheckMassPropForCADImport()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The error message.

### <a id="VM_Managed_Document3D_ChildAdd_VM_Managed_ObjectBase_System_String_"></a> ChildAdd\(ObjectBase, string\)

Call OnChildAdded.

```csharp
public void ChildAdd(ObjectBase obj, string strXml)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The information.

### <a id="VM_Managed_Document3D_ChildRemove_VM_Managed_ObjectBase_System_String_"></a> ChildRemove\(ObjectBase, string\)

Call OnChildRemove.

```csharp
public void ChildRemove(ObjectBase obj, string strXml)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The information.

### <a id="VM_Managed_Document3D_ChildRename_VM_Managed_ObjectBase_System_String_"></a> ChildRename\(ObjectBase, string\)

Call OnChildRename.

```csharp
public void ChildRename(ObjectBase obj, string strXml)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The information.

### <a id="VM_Managed_Document3D_ChildUpdate_VM_Managed_ObjectBase_System_String_"></a> ChildUpdate\(ObjectBase, string\)

Call OnChildUpdate.

```csharp
public void ChildUpdate(ObjectBase obj, string strXml)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The information.

### <a id="VM_Managed_Document3D_ClearAssembly"></a> ClearAssembly\(\)

Clear assembly.

```csharp
public void ClearAssembly()
```

### <a id="VM_Managed_Document3D_ClearDocument"></a> ClearDocument\(\)

Clears the document.

```csharp
protected override void ClearDocument()
```

### <a id="VM_Managed_Document3D_ContainsEntityToEntityDictionary_VM_Managed_ObjectBase_"></a> ContainsEntityToEntityDictionary\(ObjectBase\)

Determines whether contains [entity to entity dictionary].

```csharp
public bool ContainsEntityToEntityDictionary(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_CreateAssembly"></a> CreateAssembly\(\)

Create assembly.

```csharp
public Assembly CreateAssembly()
```

#### Returns

 [Assembly](VM.Managed.Assembly.md)

### <a id="VM_Managed_Document3D_CreateAssemblyImpl"></a> CreateAssemblyImpl\(\)

Creates the assembly [implementation].

```csharp
protected abstract Assembly CreateAssemblyImpl()
```

#### Returns

 [Assembly](VM.Managed.Assembly.md)

The assembly

### <a id="VM_Managed_Document3D_CreateCanvas_System_Boolean_"></a> CreateCanvas\(bool\)

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

### <a id="VM_Managed_Document3D_CreateCanvas"></a> CreateCanvas\(\)

Create canvas.

```csharp
public Canvas CreateCanvas()
```

#### Returns

 Canvas

The canvas.

### <a id="VM_Managed_Document3D_CreateView_System_UIntPtr_"></a> CreateView\(UIntPtr\)

Create view.

```csharp
public override View CreateView(UIntPtr hWnd)
```

#### Parameters

`hWnd` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The view handle.

#### Returns

 [View](VM.Managed.View.md)

### <a id="VM_Managed_Document3D_CreateViewCore_System_UIntPtr_"></a> CreateViewCore\(UIntPtr\)

Create view [Core].

```csharp
protected virtual View CreateViewCore(UIntPtr pView)
```

#### Parameters

`pView` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The view handle.

#### Returns

 [View](VM.Managed.View.md)

### <a id="VM_Managed_Document3D_DecreaseReferedDocumentCount"></a> DecreaseReferedDocumentCount\(\)

```csharp
public void DecreaseReferedDocumentCount()
```

### <a id="VM_Managed_Document3D_DeleteCore_System_Collections_Generic_List_VM_Managed_ObjectBase__System_Collections_Generic_List_VM_Managed_DestroyEventArgs__"></a> DeleteCore\(List<ObjectBase\>, List<DestroyEventArgs\>\)

```csharp
public void DeleteCore(List<ObjectBase> lstObjNew, List<DestroyEventArgs> lstArg)
```

#### Parameters

`lstObjNew` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

`lstArg` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[DestroyEventArgs](VM.Managed.DestroyEventArgs.md)\>

### <a id="VM_Managed_Document3D_DeleteObjectBases_VM_Managed_DestroyType__System_Collections_Generic_IEnumerable_VM_Managed_ObjectBase__System_Boolean_"></a> DeleteObjectBases\(ref DestroyType, IEnumerable<ObjectBase\>, bool\)

```csharp
public bool DeleteObjectBases(ref DestroyType typeDestroy, IEnumerable<ObjectBase> targetObjectBases, bool bNotUseDelMsg)
```

#### Parameters

`typeDestroy` [DestroyType](VM.Managed.DestroyType.md)

`targetObjectBases` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

`bNotUseDelMsg` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_DeleteObjectBases_VM_Managed_DestroyType__System_Collections_Generic_IEnumerable_VM_Managed_ObjectBase__"></a> DeleteObjectBases\(ref DestroyType, IEnumerable<ObjectBase\>\)

```csharp
public bool DeleteObjectBases(ref DestroyType typeDestroy, IEnumerable<ObjectBase> targetObjectBases)
```

#### Parameters

`typeDestroy` [DestroyType](VM.Managed.DestroyType.md)

`targetObjectBases` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_DeleteWithSelectionObjects_VM_Managed_DestroyType__System_Boolean_"></a> DeleteWithSelectionObjects\(ref DestroyType, bool\)

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

### <a id="VM_Managed_Document3D_DeleteWithSelectionObjects_VM_Managed_DestroyType__"></a> DeleteWithSelectionObjects\(ref DestroyType\)

Delete with Selection Objects.

```csharp
public bool DeleteWithSelectionObjects(ref DestroyType typeDestroy)
```

#### Parameters

`typeDestroy` [DestroyType](VM.Managed.DestroyType.md)

The destroy type.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_DeleteWithSelectionObjects"></a> DeleteWithSelectionObjects\(\)

Delete with Selection Objects.

```csharp
public virtual bool DeleteWithSelectionObjects()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_DisplayModeShape_System_Int32_System_Double_"></a> DisplayModeShape\(int, double\)

Display mode shape with scale factor.

```csharp
public override void DisplayModeShape(int A_0, double A_1)
```

#### Parameters

`A_0` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`A_1` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_Document3D_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
[HandleProcessCorruptedStateExceptions]
protected override void Dispose(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_EnableModeShape_System_Boolean_"></a> EnableModeShape\(bool\)

Disable the mode shape displaying.

```csharp
public override void EnableModeShape(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_EndCADImportLog"></a> EndCADImportLog\(\)

Ends the CAD import log.

```csharp
protected virtual void EndCADImportLog()
```

### <a id="VM_Managed_Document3D_EraseAllDisplayObject"></a> EraseAllDisplayObject\(\)

```csharp
protected void EraseAllDisplayObject()
```

### <a id="VM_Managed_Document3D_ExistUnderCursor"></a> ExistUnderCursor\(\)

Whether object exists under cursor.

```csharp
public bool ExistUnderCursor()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if object exists under cursor; otherwise, <code>false</code>.

### <a id="VM_Managed_Document3D_ExportCADBody_System_String_System_Collections_Generic_List_VM_Managed_Document3D_ExportBodyInfo__System_String_System_String_"></a> ExportCADBody\(string, List<ExportBodyInfo\>, string, string\)

```csharp
public virtual void ExportCADBody(string strFilePath, List<Document3D.ExportBodyInfo> lstBodyInfo, string strCADConvert, string strOption)
```

#### Parameters

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`lstBodyInfo` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Document3D](VM.Managed.Document3D.md).[ExportBodyInfo](VM.Managed.Document3D.ExportBodyInfo.md)\>

`strCADConvert` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strOption` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_Document3D_ExportCADBody_System_String_System_Collections_Generic_List_VM_Managed_Document3D_ExportBodyInfo__System_String_"></a> ExportCADBody\(string, List<ExportBodyInfo\>, string\)

```csharp
public virtual void ExportCADBody(string strFilePath, List<Document3D.ExportBodyInfo> lstBodyInfo, string strAcisVer)
```

#### Parameters

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`lstBodyInfo` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Document3D](VM.Managed.Document3D.md).[ExportBodyInfo](VM.Managed.Document3D.ExportBodyInfo.md)\>

`strAcisVer` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_Document3D_ExportCADFile_System_String_System_String_System_String_"></a> ExportCADFile\(string, string, string\)

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

### <a id="VM_Managed_Document3D_Finalize"></a> \~Document3D\(\)

Releases unmanaged resources and performs other cleanup operations before the
<xref href="VM.Managed.Document3D" data-throw-if-not-resolved="false"></xref> is reclaimed by garbage collection.

```csharp
protected ~Document3D()
```

### <a id="VM_Managed_Document3D_FindBodyFromCADBody_VM_Managed_ObjectBase_"></a> FindBodyFromCADBody\(ObjectBase\)

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

### <a id="VM_Managed_Document3D_FindCategory_System_String_"></a> FindCategory\(string\)

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

### <a id="VM_Managed_Document3D_FindCurveset_System_UIntPtr_System_Boolean_"></a> FindCurveset\(UIntPtr, bool\)

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

### <a id="VM_Managed_Document3D_FindFaceset_System_UIntPtr_System_Boolean_"></a> FindFaceset\(UIntPtr, bool\)

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

### <a id="VM_Managed_Document3D_FindLocal_System_String_"></a> FindLocal\(string\)

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

### <a id="VM_Managed_Document3D_FindObjectForSelection_VM_Managed_ObjectBase_VM_Managed_Document3D_OperationTypeForSelection_"></a> FindObjectForSelection\(ObjectBase, OperationTypeForSelection\)

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

### <a id="VM_Managed_Document3D_GetAllArgumentList"></a> GetAllArgumentList\(\)

```csharp
public virtual List<KeyValuePair<string, string>> GetAllArgumentList()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

### <a id="VM_Managed_Document3D_GetAssembly"></a> GetAssembly\(\)

Get assembly container.

```csharp
public Assembly[] GetAssembly()
```

#### Returns

 [Assembly](VM.Managed.Assembly.md)\[\]

### <a id="VM_Managed_Document3D_GetBodies_System_Collections_Generic_List_VM_Managed_ObjectBase___"></a> GetBodies\(ref List<ObjectBase\>\)

```csharp
protected virtual void GetBodies(ref List<ObjectBase> lstBody)
```

#### Parameters

`lstBody` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

### <a id="VM_Managed_Document3D_GetBodyAndTransformation_System_Collections_Generic_List_VM_Managed_Document3D_ExportBodyInfo___"></a> GetBodyAndTransformation\(ref List<ExportBodyInfo\>\)

```csharp
public virtual void GetBodyAndTransformation(ref List<Document3D.ExportBodyInfo> A_0)
```

#### Parameters

`A_0` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Document3D](VM.Managed.Document3D.md).[ExportBodyInfo](VM.Managed.Document3D.ExportBodyInfo.md)\>

### <a id="VM_Managed_Document3D_GetCADBodyNameAttribute_System_Collections_Generic_List_System_String___"></a> GetCADBodyNameAttribute\(ref List<string\>\)

```csharp
public virtual void GetCADBodyNameAttribute(ref List<string> lstName)
```

#### Parameters

`lstName` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Managed_Document3D_GetCategoryChildren_System_String_"></a> GetCategoryChildren\(string\)

Gets the object category container from category name.

```csharp
public virtual IEnumerable<IObjectBase> GetCategoryChildren(string categoryName)
```

#### Parameters

`categoryName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IObjectBase\>

The object category container.

### <a id="VM_Managed_Document3D_GetCuttingPlane"></a> GetCuttingPlane\(\)

```csharp
public bool GetCuttingPlane()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_GetData_System_Xml_XmlNode_"></a> GetData\(XmlNode\)

Gets the analysis document information data.

```csharp
public override void GetData(XmlNode writer)
```

#### Parameters

`writer` [XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)

The writer.

### <a id="VM_Managed_Document3D_GetImportCADBody"></a> GetImportCADBody\(\)

Gets the Import CAD Body.

```csharp
public virtual List<ObjectBase> GetImportCADBody()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

### <a id="VM_Managed_Document3D_GetInfoFromDocumentPropertyGrid_System_Xml_XmlDocument_System_Xml_XmlDocument_"></a> GetInfoFromDocumentPropertyGrid\(XmlDocument, XmlDocument\)

Gets the information from document property grid.

```csharp
public virtual void GetInfoFromDocumentPropertyGrid(XmlDocument xmlTarget, XmlDocument xmlTool)
```

#### Parameters

`xmlTarget` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The target xml.

`xmlTool` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The tool xml.

### <a id="VM_Managed_Document3D_GetNearestUnderCursorObject"></a> GetNearestUnderCursorObject\(\)

Get the nearest Under-Cursor object.

```csharp
public ObjectBase GetNearestUnderCursorObject()
```

#### Returns

 [ObjectBase](VM.Managed.ObjectBase.md)

The nearest Under-Cursor object.

### <a id="VM_Managed_Document3D_GetObjectsForChangeAssembly"></a> GetObjectsForChangeAssembly\(\)

```csharp
public virtual List<ObjectBase> GetObjectsForChangeAssembly()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

### <a id="VM_Managed_Document3D_GetOwnedDocuments_System_Collections_Generic_LinkedList_VM_Models_Pre_IDocument__"></a> GetOwnedDocuments\(LinkedList<IDocument\>\)

Gets the owned documents.

```csharp
virtual void GetOwnedDocuments(LinkedList<IDocument> lstOwnedDoc)
```

#### Parameters

`lstOwnedDoc` [LinkedList](https://learn.microsoft.com/dotnet/api/system.collections.generic.linkedlist\-1)<IDocument\>

### <a id="VM_Managed_Document3D_GetReferDocument_System_Collections_Generic_List_VM_Managed_Document3D___"></a> GetReferDocument\(ref List<Document3D\>\)

```csharp
public virtual void GetReferDocument(ref List<Document3D> lstDocument)
```

#### Parameters

`lstDocument` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Document3D](VM.Managed.Document3D.md)\>

### <a id="VM_Managed_Document3D_GetReferedDocumentCount"></a> GetReferedDocumentCount\(\)

```csharp
public int GetReferedDocumentCount()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_Document3D_GetReference_VM_Managed_ObjectBase_System_Collections_Generic_List_VM_Managed_Reference___System_Collections_Generic_List_VM_Managed_ObjectBase___"></a> GetReference\(ObjectBase, ref List<Reference\>, ref List<ObjectBase\>\)

```csharp
public virtual void GetReference(ObjectBase obSub, ref List<Reference> lstRef, ref List<ObjectBase> lstOther)
```

#### Parameters

`obSub` [ObjectBase](VM.Managed.ObjectBase.md)

`lstRef` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Reference](VM.Managed.Reference.md)\>

`lstOther` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

### <a id="VM_Managed_Document3D_GetReplaceableInfo_VM_Managed_CAD_BuilderImport___"></a> GetReplaceableInfo\(BuilderImport\[\]\)

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

### <a id="VM_Managed_Document3D_GetUnnamedObjectName_System_Object_"></a> GetUnnamedObjectName\(object\)

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

### <a id="VM_Managed_Document3D_HideObjectInReading"></a> HideObjectInReading\(\)

Hide object in reading template.

```csharp
protected virtual void HideObjectInReading()
```

### <a id="VM_Managed_Document3D_ImportCADBody_VM_Managed_CAD_BuilderImport___"></a> ImportCADBody\(BuilderImport\[\]\)

Imports the CAD body.

```csharp
protected virtual void ImportCADBody(BuilderImport[] arOb)
```

#### Parameters

`arOb` [BuilderImport](VM.Managed.CAD.BuilderImport.md)\[\]

The build object array.

### <a id="VM_Managed_Document3D_IncreaseReferedDocumentCount"></a> IncreaseReferedDocumentCount\(\)

```csharp
public void IncreaseReferedDocumentCount()
```

### <a id="VM_Managed_Document3D_InitCategory"></a> InitCategory\(\)

Initialize category.

```csharp
public void InitCategory()
```

### <a id="VM_Managed_Document3D_InitializeKernelUnit"></a> InitializeKernelUnit\(\)

Initialize kernel unit.

```csharp
public void InitializeKernelUnit()
```

### <a id="VM_Managed_Document3D_IsContainsCategoryName_System_String_"></a> IsContainsCategoryName\(string\)

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

### <a id="VM_Managed_Document3D_IsCuttingPlaneSelected"></a> IsCuttingPlaneSelected\(\)

```csharp
public bool IsCuttingPlaneSelected()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_IsMatchSelectObjectAndUnderCursorObject"></a> IsMatchSelectObjectAndUnderCursorObject\(\)

check match of select object and under cursor object.

```csharp
public bool IsMatchSelectObjectAndUnderCursorObject()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_IsSelectFromUnderCursor_System_UInt64_"></a> IsSelectFromUnderCursor\(ulong\)

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

### <a id="VM_Managed_Document3D_IsTypeSupported_System_Type_"></a> IsTypeSupported\(Type\)

Determines whether is [supported type] [the specified type].

```csharp
public override void IsTypeSupported(Type type)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

The type.

### <a id="VM_Managed_Document3D_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

The update event occured from the linked object.

```csharp
protected override void LinkRequestUpdate(object obNotifier, LinkEventArgs arg)
```

#### Parameters

`obNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

`arg` [LinkEventArgs](VM.Managed.LinkEventArgs.md)

The update event information.

### <a id="VM_Managed_Document3D_Load_System_Xml_XmlReader_"></a> Load\(XmlReader\)

Load document [Not Implemented].

```csharp
protected virtual void Load(XmlReader A_0)
```

#### Parameters

`A_0` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

### <a id="VM_Managed_Document3D_LoadCADFile_System_String_VM_Managed_Document3D_CadImportColorType_System_Drawing_Color_VM_Managed_Document3D_CadImportResultType_VM_Managed_Document3D_CadImportUnitType_System_String_"></a> LoadCADFile\(string, CadImportColorType, Color, CadImportResultType, CadImportUnitType, string\)

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

### <a id="VM_Managed_Document3D_LoadCADFile_System_String_VM_Managed_Document3D_CadImportResultType_VM_Managed_Document3D_CadImportUnitType_"></a> LoadCADFile\(string, CadImportResultType, CadImportUnitType\)

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

### <a id="VM_Managed_Document3D_LoadCADFile_System_String_System_Drawing_Color_VM_Managed_Document3D_CadImportResultType_"></a> LoadCADFile\(string, Color, CadImportResultType\)

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

### <a id="VM_Managed_Document3D_LoadCADFile_System_String_VM_Managed_Document3D_CadImportResultType_System_String_"></a> LoadCADFile\(string, CadImportResultType, string\)

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

### <a id="VM_Managed_Document3D_LoadCADFile_System_String_VM_Managed_Document3D_CadImportResultType_"></a> LoadCADFile\(string, CadImportResultType\)

Load cad import file.

```csharp
public void LoadCADFile(string strPath, Document3D.CadImportResultType type)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The cad import file path.

`type` [Document3D](VM.Managed.Document3D.md).[CadImportResultType](VM.Managed.Document3D.CadImportResultType.md)

The cad import result type.

### <a id="VM_Managed_Document3D_LoadCategoryFiles_System_String_"></a> LoadCategoryFiles\(string\)

Loads the category files.

```csharp
public static void LoadCategoryFiles(string strCategoryDir)
```

#### Parameters

`strCategoryDir` [string](https://learn.microsoft.com/dotnet/api/system.string)

The category directory.

### <a id="VM_Managed_Document3D_LoadCategoryInfoFromFile_System_String_System_Collections_Generic_Dictionary_System_String_System_String__System_Collections_Generic_List_System_String__"></a> LoadCategoryInfoFromFile\(string, Dictionary<string, string\>, List<string\>\)

```csharp
protected static void LoadCategoryInfoFromFile(string strCategoryName, Dictionary<string, string> dicTypeCategory, List<string> lstCategory)
```

#### Parameters

`strCategoryName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`dicTypeCategory` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

`lstCategory` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Managed_Document3D_LoadTemplateBasedXml_System_Xml_XmlReader_"></a> LoadTemplateBasedXml\(XmlReader\)

Loads the XML for template based document.

```csharp
protected virtual void LoadTemplateBasedXml(XmlReader A_0)
```

#### Parameters

`A_0` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

### <a id="VM_Managed_Document3D_MakeXmlForDocumentPropertyGrid_System_Xml_XmlDocument_System_String__"></a> MakeXmlForDocumentPropertyGrid\(XmlDocument, ref string\)

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

### <a id="VM_Managed_Document3D_MappingEntity"></a> MappingEntity\(\)

```csharp
protected virtual void MappingEntity()
```

### <a id="VM_Managed_Document3D_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_Document3D_OnPostMakeDocument_VM_Managed_DocCreateInfo_"></a> OnPostMakeDocument\(DocCreateInfo\)

Called when [post make document] [implementation].

```csharp
protected override void OnPostMakeDocument(DocCreateInfo A_0)
```

#### Parameters

`A_0` [DocCreateInfo](VM.Managed.DocCreateInfo.md)

### <a id="VM_Managed_Document3D_OpenPropertyObjectBases_System_Collections_Generic_List_VM_Managed_ObjectBase__"></a> OpenPropertyObjectBases\(List<ObjectBase\>\)

```csharp
public bool OpenPropertyObjectBases(List<ObjectBase> targetObjectBases)
```

#### Parameters

`targetObjectBases` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_OpenPropertyWithFirstSelectionObject"></a> OpenPropertyWithFirstSelectionObject\(\)

Open property dialog with Selection Objects.

```csharp
public bool OpenPropertyWithFirstSelectionObject()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_OpenPropertyWithSelectionObjects"></a> OpenPropertyWithSelectionObjects\(\)

Open property dialog with Selection Objects.

```csharp
public bool OpenPropertyWithSelectionObjects()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_PostCloseDocument"></a> PostCloseDocument\(\)

Call when post [close document].

```csharp
public override void PostCloseDocument()
```

### <a id="VM_Managed_Document3D_PostOpenDocument"></a> PostOpenDocument\(\)

Call when post [open document].

```csharp
public override void PostOpenDocument()
```

### <a id="VM_Managed_Document3D_PostOpenDocumentAndInitLayer"></a> PostOpenDocumentAndInitLayer\(\)

Call [Open Document] for initialize layer.

```csharp
public override sealed void PostOpenDocumentAndInitLayer()
```

### <a id="VM_Managed_Document3D_PostSave_System_Collections_Generic_List_VM_Managed_Document__System_Boolean_"></a> PostSave\(List<Document\>, bool\)

```csharp
public override void PostSave(List<Document> lstOpenDocs, bool bModified)
```

#### Parameters

`lstOpenDocs` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[Document](VM.Managed.Document.md)\>

`bModified` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_PreloadCADFile_System_String_VM_Managed_Document3D_CadImportColorType_System_Drawing_Color_VM_Managed_Document3D_CadImportResultType_VM_Managed_Document3D_CadImportUnitType_System_String_VM_Managed_CAD_BuilderImport____"></a> PreloadCADFile\(string, CadImportColorType, Color, CadImportResultType, CadImportUnitType, string, ref BuilderImport\[\]\)

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

### <a id="VM_Managed_Document3D_ReAssemblyCore"></a> ReAssemblyCore\(\)

Reassembly

```csharp
protected virtual bool ReAssemblyCore()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_Document3D_ReAssemblyImpl_VM_Managed_ObjectBase_"></a> ReAssemblyImpl\(ObjectBase\)

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

### <a id="VM_Managed_Document3D_ReInitInterfaceForAssembly"></a> ReInitInterfaceForAssembly\(\)

Reinitialize interface for assembly.

```csharp
public virtual void ReInitInterfaceForAssembly()
```

### <a id="VM_Managed_Document3D_ReadCategoryXml_System_String_System_String_System_Xml_XmlReader_"></a> ReadCategoryXml\(string, string, XmlReader\)

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

### <a id="VM_Managed_Document3D_RedrawCuttingPlane"></a> RedrawCuttingPlane\(\)

```csharp
public void RedrawCuttingPlane()
```

### <a id="VM_Managed_Document3D_RefreshAllViews"></a> RefreshAllViews\(\)

Refresh all views.

```csharp
public void RefreshAllViews()
```

### <a id="VM_Managed_Document3D_RegisterCurveset_System_UIntPtr_System_UIntPtr_System_Boolean_"></a> RegisterCurveset\(UIntPtr, UIntPtr, bool\)

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

### <a id="VM_Managed_Document3D_RegisterFaceset_System_UIntPtr_System_UIntPtr_System_Boolean_"></a> RegisterFaceset\(UIntPtr, UIntPtr, bool\)

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

### <a id="VM_Managed_Document3D_RegisterLoadingException_System_Exception_"></a> RegisterLoadingException\(Exception\)

Registers the exception.

```csharp
public void RegisterLoadingException(Exception exception)
```

#### Parameters

`exception` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The exception.

### <a id="VM_Managed_Document3D_RemoveAssembly_VM_Managed_Assembly_"></a> RemoveAssembly\(Assembly\)

Remove assembly.

```csharp
public void RemoveAssembly(Assembly assem)
```

#### Parameters

`assem` [Assembly](VM.Managed.Assembly.md)

The assembly.

### <a id="VM_Managed_Document3D_RemoveEntityForReplace_VM_Managed_ObjectBase_"></a> RemoveEntityForReplace\(ObjectBase\)

Remove entity for replace.

```csharp
public void RemoveEntityForReplace(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

### <a id="VM_Managed_Document3D_RemoveInterface_System_String_"></a> RemoveInterface\(string\)

Remove interface.

```csharp
public void RemoveInterface(string strXml)
```

#### Parameters

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The interface information.

### <a id="VM_Managed_Document3D_RenameEntityImpl_System_String_VM_Managed_ObjectBase_"></a> RenameEntityImpl\(string, ObjectBase\)

Rename entity [Implementation].

```csharp
protected virtual void RenameEntityImpl(string strOldName, ObjectBase namedObj)
```

#### Parameters

`strOldName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The old name.

`namedObj` [ObjectBase](VM.Managed.ObjectBase.md)

The new object.

### <a id="VM_Managed_Document3D_RenameInterface_System_String_"></a> RenameInterface\(string\)

Rename interface.

```csharp
public void RenameInterface(string strXml)
```

#### Parameters

`strXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The interface information.

### <a id="VM_Managed_Document3D_Repair"></a> Repair\(\)

```csharp
public void Repair()
```

### <a id="VM_Managed_Document3D_RepairImpl"></a> RepairImpl\(\)

Repair a document.

```csharp
protected virtual void RepairImpl()
```

### <a id="VM_Managed_Document3D_ReplaceCADBody_VM_Managed_CAD_BuilderImport___"></a> ReplaceCADBody\(BuilderImport\[\]\)

Replaces the CAD body.

```csharp
public virtual void ReplaceCADBody(BuilderImport[] arBuilder)
```

#### Parameters

`arBuilder` [BuilderImport](VM.Managed.CAD.BuilderImport.md)\[\]

The builder object array.

### <a id="VM_Managed_Document3D_ResetFacesetSurfaceType"></a> ResetFacesetSurfaceType\(\)

```csharp
public void ResetFacesetSurfaceType()
```

### <a id="VM_Managed_Document3D_RunPredefinedOperation"></a> RunPredefinedOperation\(\)

Run pre-defined operation.

```csharp
public virtual void RunPredefinedOperation()
```

### <a id="VM_Managed_Document3D_Save_System_Xml_XmlWriter_"></a> Save\(XmlWriter\)

Save document [Not Implemented].

```csharp
protected virtual void Save(XmlWriter A_0)
```

#### Parameters

`A_0` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

### <a id="VM_Managed_Document3D_Save_System_String_"></a> Save\(string\)

Save document.

```csharp
public override sealed void Save(string strPath)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path to save.

### <a id="VM_Managed_Document3D_Save_System_String_System_Boolean_System_Collections_Generic_Dictionary_System_String_System_String__"></a> Save\(string, bool, Dictionary<string, string\>\)

```csharp
public void Save(string strPath, bool bAutoSave, Dictionary<string, string> mapSubPath)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`bAutoSave` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`mapSubPath` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Managed_Document3D_Save_System_String_System_Boolean_System_Boolean_"></a> Save\(string, bool, bool\)

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

### <a id="VM_Managed_Document3D_Save_System_String_System_Boolean_"></a> Save\(string, bool\)

save document with autosave.

```csharp
public void Save(string strPath, bool bAutoSave)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path.

`bAutoSave` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The auto save state.

### <a id="VM_Managed_Document3D_SaveDocument_System_String_System_Collections_Generic_Dictionary_System_String_System_String__"></a> SaveDocument\(string, Dictionary<string, string\>\)

```csharp
public void SaveDocument(string strPath, Dictionary<string, string> mapSubPath)
```

#### Parameters

`strPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`mapSubPath` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Managed_Document3D_SaveTemplateBasedXml_System_Xml_XmlWriter_"></a> SaveTemplateBasedXml\(XmlWriter\)

Saves the XML for template based document.

```csharp
protected virtual void SaveTemplateBasedXml(XmlWriter A_0)
```

#### Parameters

`A_0` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

### <a id="VM_Managed_Document3D_SetData_System_Xml_XmlNode_"></a> SetData\(XmlNode\)

Sets the analysis document information data.

```csharp
public override void SetData(XmlNode reader)
```

#### Parameters

`reader` [XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)

The reader.

### <a id="VM_Managed_Document3D_SetHandle_System_UIntPtr_"></a> SetHandle\(UIntPtr\)

Set document handle.

```csharp
protected override void SetHandle(UIntPtr pDocHandle)
```

#### Parameters

`pDocHandle` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The document handle.

### <a id="VM_Managed_Document3D_SetPickFromUnderCursor_System_UInt64_"></a> SetPickFromUnderCursor\(ulong\)

Set picked object.

```csharp
public void SetPickFromUnderCursor(ulong keyObject)
```

#### Parameters

`keyObject` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

The object will be picked.

### <a id="VM_Managed_Document3D_SetRenderingMode_VM_Managed_Document3D_enRenderingMode_"></a> SetRenderingMode\(enRenderingMode\)

```csharp
public void SetRenderingMode(Document3D.enRenderingMode mode)
```

#### Parameters

`mode` [Document3D](VM.Managed.Document3D.md).[enRenderingMode](VM.Managed.Document3D.enRenderingMode.md)

### <a id="VM_Managed_Document3D_SetSelectFromUnderCursor_System_UInt64_"></a> SetSelectFromUnderCursor\(ulong\)

Set selected object.

```csharp
public void SetSelectFromUnderCursor(ulong keyObject)
```

#### Parameters

`keyObject` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

The object will be selected.

### <a id="VM_Managed_Document3D_SetSelectFromUnderCursor_VM_Managed_ObjectBase_"></a> SetSelectFromUnderCursor\(ObjectBase\)

Set selected object.

```csharp
public void SetSelectFromUnderCursor(ObjectBase objUnderCursor)
```

#### Parameters

`objUnderCursor` [ObjectBase](VM.Managed.ObjectBase.md)

The object will be selected.

### <a id="VM_Managed_Document3D_SetSelectionObject_System_Collections_Generic_List_VM_Managed_ObjectBase__"></a> SetSelectionObject\(List<ObjectBase\>\)

```csharp
public virtual void SetSelectionObject(List<ObjectBase> lstObj)
```

#### Parameters

`lstObj` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

### <a id="VM_Managed_Document3D_SetUnselectFromUnderCursor_System_UInt64_"></a> SetUnselectFromUnderCursor\(ulong\)

Set unselected object.

```csharp
public void SetUnselectFromUnderCursor(ulong keyObject)
```

#### Parameters

`keyObject` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

The object will be unselected.

### <a id="VM_Managed_Document3D_ShowHideObjectBases_System_Boolean_System_Collections_Generic_List_VM_Managed_ObjectBase__"></a> ShowHideObjectBases\(bool, List<ObjectBase\>\)

```csharp
public bool ShowHideObjectBases(bool bShow, List<ObjectBase> lstSel)
```

#### Parameters

`bShow` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

`lstSel` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[ObjectBase](VM.Managed.ObjectBase.md)\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_ShowHideWithSelectionObjects_System_Boolean_"></a> ShowHideWithSelectionObjects\(bool\)

show hide with Selection Objects.

```csharp
public bool ShowHideWithSelectionObjects(bool bShow)
```

#### Parameters

`bShow` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_SkipAddToDSDLWithCategory_System_String_"></a> SkipAddToDSDLWithCategory\(string\)

```csharp
public virtual bool SkipAddToDSDLWithCategory(string strCategory)
```

#### Parameters

`strCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_SkipAddToDSDLWithEntity_VM_Managed_ObjectBase_"></a> SkipAddToDSDLWithEntity\(ObjectBase\)

```csharp
public virtual bool SkipAddToDSDLWithEntity(ObjectBase ob)
```

#### Parameters

`ob` [ObjectBase](VM.Managed.ObjectBase.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_SkipDelete_VM_Managed_ObjectBase_"></a> SkipDelete\(ObjectBase\)

Skips the delete.

```csharp
protected virtual bool SkipDelete(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The obj.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_SkipObjectInWriting_VM_Managed_ObjectBase_"></a> SkipObjectInWriting\(ObjectBase\)

Skip object in writing template.

```csharp
protected virtual bool SkipObjectInWriting(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_SkipShowHide_VM_Managed_ObjectBase_"></a> SkipShowHide\(ObjectBase\)

Skips the show hide.

```csharp
protected virtual bool SkipShowHide(ObjectBase obj)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The obj.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_StartBasicOp_VM_Managed_Document3D_BasicOpType_"></a> StartBasicOp\(BasicOpType\)

Start basic operation.

```csharp
public void StartBasicOp(Document3D.BasicOpType type)
```

#### Parameters

`type` [Document3D](VM.Managed.Document3D.md).[BasicOpType](VM.Managed.Document3D.BasicOpType.md)

The type of basic operation.

### <a id="VM_Managed_Document3D_StartCADImportLog_System_String_"></a> StartCADImportLog\(string\)

Starts the CAD import log.

```csharp
protected virtual void StartCADImportLog(string strLogPath)
```

#### Parameters

`strLogPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The log path.

### <a id="VM_Managed_Document3D_ToggleCuttingPlane_VM_Managed_OMatrix_"></a> ToggleCuttingPlane\(OMatrix\)

```csharp
public void ToggleCuttingPlane(OMatrix matOri)
```

#### Parameters

`matOri` [OMatrix](VM.Managed.OMatrix.md)

### <a id="VM_Managed_Document3D_ToggleCuttingPlane"></a> ToggleCuttingPlane\(\)

```csharp
public void ToggleCuttingPlane()
```

### <a id="VM_Managed_Document3D_UpdateEnable_VM_Managed_ObjectBase_System_Boolean_"></a> UpdateEnable\(ObjectBase, bool\)

Update object to enable or disable.

```csharp
public override void UpdateEnable(ObjectBase obj, bool bEnabled)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

`bEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether object is enable.

### <a id="VM_Managed_Document3D_UpdateInterface_VM_Managed_ObjectBase_System_Boolean_"></a> UpdateInterface\(ObjectBase, bool\)

Update interface.

```csharp
public override void UpdateInterface(ObjectBase obj, bool bInterfaced)
```

#### Parameters

`obj` [ObjectBase](VM.Managed.ObjectBase.md)

The object.

`bInterfaced` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether object is interfaced.

### <a id="VM_Managed_Document3D_VerifyAllEntity"></a> VerifyAllEntity\(\)

verify all entity.

```csharp
public bool VerifyAllEntity()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Document3D_WriteCategoryToXml_System_String_System_String_System_Xml_XmlWriter_"></a> WriteCategoryToXml\(string, string, XmlWriter\)

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

### <a id="VM_Managed_Document3D_WriteMessageForShowHide"></a> WriteMessageForShowHide\(\)

Writes the message for show hide.

```csharp
protected virtual void WriteMessageForShowHide()
```

### <a id="VM_Managed_Document3D_XmlDocumentReLoad_System_Xml_XmlReader_"></a> XmlDocumentReLoad\(XmlReader\)

Reload documnet.

```csharp
public virtual void XmlDocumentReLoad(XmlReader reader)
```

#### Parameters

`reader` [XmlReader](https://learn.microsoft.com/dotnet/api/system.xml.xmlreader)

The reader.

