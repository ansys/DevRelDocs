# Class GearTrainDocument

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

The gear train document

```csharp
public class GearTrainDocument : SubSystemDocument, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IEnableManager, IRelatedDocument, IHistorySupport, ITemplateDocument, ITreatValidObject, IInterfaceSupport, IGearTrainDocument, ISubSystemDocument, IDocumentAnalysis, IDocument3D, IHandledDocument, IDocument, IObject, IEventProvider, IContainer, ILinkContainer, IOwned, IHasID, IDocumentOwner
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
ObservableObject ← 
LinkableBase ← 
LinkContainer ← 
Container ← 
Document ← 
HandledDocument ← 
Document3D ← 
DocumentAnalysis ← 
SubSystemDocument ← 
[GearTrainDocument](VM.Managed.DAFUL.GearTrain.GearTrainDocument.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
IEnableManager, 
IRelatedDocument, 
IHistorySupport, 
ITemplateDocument, 
ITreatValidObject, 
IInterfaceSupport, 
IGearTrainDocument, 
ISubSystemDocument, 
IDocumentAnalysis, 
IDocument3D, 
IHandledDocument, 
IDocument, 
IObject, 
IEventProvider, 
IContainer, 
ILinkContainer, 
IOwned, 
IHasID, 
IDocumentOwner

#### Inherited Members

SubSystemDocument.OnPostMakeDocumentImpl\(DocCreateAnalysisInfo\), 
SubSystemDocument.OnDeserialization\(object\), 
SubSystemDocument.InitializeSimParam\(\), 
SubSystemDocument.CreateAssemblyImpl\(\), 
SubSystemDocument.RenameEntityImpl\(string, ObjectBase\), 
SubSystemDocument.RegisterAddon\(\), 
SubSystemDocument.FindCategory\(string\), 
SubSystemDocument.InitializeCategoryInfo\(string\), 
SubSystemDocument.PossibleToImport\(SubSystemDocument, out string, out string\), 
SubSystemDocument.PossibleDifferentUnit\(SubSystemDocument, out string\), 
SubSystemDocument.PossibleDifferentUnit\(out string\), 
SubSystemDocument.InitializeInterface\(\), 
SubSystemDocument.SaveTemplateBasedXml\(XmlWriter\), 
SubSystemDocument.SaveTemplateBasedXml\(XmlWriter, bool\), 
SubSystemDocument.LoadTemplateBasedXml\(XmlReader\), 
SubSystemDocument.LoadTemplateBasedXml\(XmlReader, bool\), 
SubSystemDocument.HideObjectInReading\(\), 
SubSystemDocument.SkipObjectInWriting\(ObjectBase\), 
SubSystemDocument.CheckMassPropForCADImport\(\), 
SubSystemDocument.ImportCADBody\(BuilderImport\[\]\), 
SubSystemDocument.ReplaceCADBody\(BuilderImport\[\]\), 
SubSystemDocument.GetCADBodyNameAttribute\(ref List<string\>\), 
SubSystemDocument.GetImportCADBody\(\), 
SubSystemDocument.ReAssemblyImpl\(ObjectBase\), 
SubSystemDocument.ReInitInterfaceForAssembly\(\), 
SubSystemDocument.GetReference\(ObjectBase, ref List<Reference\>, ref List<ObjectBase\>\), 
SubSystemDocument.GetReferDocument\(ref List<Document3D\>\), 
SubSystemDocument.GetSimulationConfigurationType\(\), 
SubSystemDocument.ClearDocument\(\), 
SubSystemDocument.GetTransformationOfGlobal\(ObjectBase\), 
SubSystemDocument.GetTransformationOfGlobal\(ObjectBase, string\), 
SubSystemDocument.ReAssembleForChangeAssembly\(ChangeAssemblyType, List<string\>, List<string\>\), 
SubSystemDocument.SkipDelete\(ObjectBase\), 
SubSystemDocument.FindObjectForSelection\(ObjectBase, Document3D.OperationTypeForSelection\), 
SubSystemDocument.FindBodyFromCADBody\(ObjectBase\), 
SubSystemDocument.SkipShowHide\(ObjectBase\), 
SubSystemDocument.WriteMessageForShowHide\(\), 
SubSystemDocument.PostOpenDocument\(\), 
SubSystemDocument.PostOpenDocumentAfterErrCheckEvent\(\), 
SubSystemDocument.InitialCategories, 
SubSystemDocument.Interfaces, 
SubSystemDocument.SkipBindInterfaceWhenOpen, 
SubSystemDocument.TemplateXmlVersion, 
SubSystemDocument.DocumentSessionOverride, 
SubSystemDocument.SetDocumentSessionOverride, 
SubSystemDocument.ChangeNewFilePath, 
SubSystemDocument.ChangeOldFilePath, 
SubSystemDocument.ChangeNewFilePaths, 
SubSystemDocument.ChangeOldFilePaths, 
DocumentAnalysis.m\_bSkipGravity, 
DocumentAnalysis.RegisterAddon\(\), 
DocumentAnalysis.IsContainSimulationScenarioInMap\(Scenario\), 
DocumentAnalysis.GetStateFromActiveSimulationScenarioMap\(Scenario\), 
DocumentAnalysis.SetStateFromActiveSimulationScenarioMap\(Scenario, bool\), 
DocumentAnalysis.AddConfiguration\(Configuration\), 
DocumentAnalysis.RemoveConfiguration\(Configuration\), 
DocumentAnalysis.ClearConfiguration\(\), 
DocumentAnalysis.GetDefaultMaterial\(\), 
DocumentAnalysis.GetDefaultMaterial\(bool\), 
DocumentAnalysis.IsExistDefaultMaterial\(\), 
DocumentAnalysis.LinkRequestUpdate\(object, LinkEventArgs\), 
DocumentAnalysis.GetBodyAndTransformation\(ref List<Document3D.ExportBodyInfo\>\), 
DocumentAnalysis.IsEnabledImpl\(ObjectBase\), 
DocumentAnalysis.SetEnableImpl\(ObjectBase, bool\), 
DocumentAnalysis.SkipObjectInWriting\(ObjectBase\), 
DocumentAnalysis.OnPostMakeDocument\(DocCreateInfo\), 
DocumentAnalysis.OnPostMakeDocumentImpl\(DocCreateAnalysisInfo\), 
DocumentAnalysis.InitializeSimParam\(\), 
DocumentAnalysis.GetData\(XmlNode\), 
DocumentAnalysis.SetData\(XmlNode\), 
DocumentAnalysis.PostOpenDocument\(\), 
DocumentAnalysis.GetAllArgumentList\(\), 
DocumentAnalysis.GetEntityRequest\(\), 
DocumentAnalysis.GetSimulationConfigurationType\(\), 
DocumentAnalysis.OnDeserialization\(object\), 
DocumentAnalysis.CheckBeforeSave\(\), 
DocumentAnalysis.PostOpenDocumentAfterHookEvent\(\), 
DocumentAnalysis.ClearDocument\(\), 
DocumentAnalysis.ReAssemblyImpl\(ObjectBase\), 
DocumentAnalysis.SkipDelete\(ObjectBase\), 
DocumentAnalysis.PostOpenDocumentAfterErrCheckEvent\(\), 
DocumentAnalysis.PostCloseDocument\(\), 
DocumentAnalysis.Configurations, 
DocumentAnalysis.CountOfMFLinearStaticSimulationConfigurations, 
DocumentAnalysis.ActiveSimulationConfiguration, 
DocumentAnalysis.Gravity, 
DocumentAnalysis.UseIncrementTime, 
DocumentAnalysis.IncrementTime, 
DocumentAnalysis.IconSize, 
DocumentAnalysis.SimulationScenarioTypeName, 
DocumentAnalysis.UseToolkitSubsystem, 
Document3D.RibbonGalleryIndex, 
Document3D.m\_lstAssem, 
Document3D.m\_bReload, 
Document3D.m\_strVersion, 
Document3D.g\_dRenderingType, 
Document3D.m\_dicCategory, 
Document3D.m\_dicCategoryCollection, 
Document3D.IsContainsCategoryName\(string\), 
Document3D.GetNearestUnderCursorObject\(\), 
Document3D.SetSelectFromUnderCursor\(ulong\), 
Document3D.SetSelectFromUnderCursor\(ObjectBase\), 
Document3D.SetUnselectFromUnderCursor\(ulong\), 
Document3D.IsSelectFromUnderCursor\(ulong\), 
Document3D.SetPickFromUnderCursor\(ulong\), 
Document3D.Activate\(\), 
Document3D.CreateAssembly\(\), 
Document3D.StartBasicOp\(Document3D.BasicOpType\), 
Document3D.RefreshAllViews\(\), 
Document3D.InitCategory\(\), 
Document3D.AddAssembly\(Assembly\), 
Document3D.AddNewReference\(ObjectBase\[\], string\), 
Document3D.AddNewReference\(ObjectBase\), 
Document3D.GetAssembly\(\), 
Document3D.DeleteWithSelectionObjects\(ref DestroyType, bool\), 
Document3D.DeleteWithSelectionObjects\(ref DestroyType\), 
Document3D.DeleteWithSelectionObjects\(\), 
Document3D.DeleteObjectBases\(ref DestroyType, IEnumerable<ObjectBase\>, bool\), 
Document3D.DeleteObjectBases\(ref DestroyType, IEnumerable<ObjectBase\>\), 
Document3D.OpenPropertyWithSelectionObjects\(\), 
Document3D.OpenPropertyWithFirstSelectionObject\(\), 
Document3D.OpenPropertyObjectBases\(List<ObjectBase\>\), 
Document3D.ShowHideWithSelectionObjects\(bool\), 
Document3D.ShowHideObjectBases\(bool, List<ObjectBase\>\), 
Document3D.IsMatchSelectObjectAndUnderCursorObject\(\), 
Document3D.Save\(XmlWriter\), 
Document3D.Save\(string\), 
Document3D.Save\(string, bool, Dictionary<string, string\>\), 
Document3D.Save\(string, bool, bool\), 
Document3D.Save\(string, bool\), 
Document3D.SaveDocument\(string, Dictionary<string, string\>\), 
Document3D.VerifyAllEntity\(\), 
Document3D.InitializeKernelUnit\(\), 
Document3D.ChangeKernelUnitWithScale\(string\), 
Document3D.DeleteCore\(List<ObjectBase\>, List<DestroyEventArgs\>\), 
Document3D.ContainsEntityToEntityDictionary\(ObjectBase\), 
Document3D.RemoveEntityForReplace\(ObjectBase\), 
Document3D.WriteCategoryToXml\(string, string, XmlWriter\), 
Document3D.ReadCategoryXml\(string, string, XmlReader\), 
Document3D.GetReplaceableInfo\(BuilderImport\[\]\), 
Document3D.PostSave\(List<Document\>, bool\), 
Document3D.CreateView\(UIntPtr\), 
Document3D.FindLocal\(string\), 
Document3D.GetUnnamedObjectName\(object\), 
Document3D.Add\(ObjectBase, ObjectBase\), 
Document3D.Add\(ObjectBase\), 
Document3D.IsTypeSupported\(Type\), 
Document3D.UpdateEnable\(ObjectBase, bool\), 
Document3D.UpdateInterface\(ObjectBase, bool\), 
Document3D.GetData\(XmlNode\), 
Document3D.SetData\(XmlNode\), 
Document3D.PostOpenDocumentAndInitLayer\(\), 
Document3D.DisplayModeShape\(int, double\), 
Document3D.EnableModeShape\(bool\), 
Document3D.FindCategory\(string\), 
Document3D.MakeXmlForDocumentPropertyGrid\(XmlDocument, ref string\), 
Document3D.GetInfoFromDocumentPropertyGrid\(XmlDocument, XmlDocument\), 
Document3D.ReplaceCADBody\(BuilderImport\[\]\), 
Document3D.GetCADBodyNameAttribute\(ref List<string\>\), 
Document3D.GetImportCADBody\(\), 
Document3D.PostOpenDocument\(\), 
Document3D.PostCloseDocument\(\), 
Document3D.GetAllArgumentList\(\), 
Document3D.FindObjectForSelection\(ObjectBase, Document3D.OperationTypeForSelection\), 
Document3D.ChangeTopologyForVMPID\(\), 
Document3D.SkipAddToDSDLWithCategory\(string\), 
Document3D.SkipAddToDSDLWithEntity\(ObjectBase\), 
Document3D.CreateViewCore\(UIntPtr\), 
Document3D.RenameEntityImpl\(string, ObjectBase\), 
Document3D.CreateAssemblyImpl\(\), 
Document3D.SetHandle\(UIntPtr\), 
Document3D.SaveTemplateBasedXml\(XmlWriter\), 
Document3D.OnDeserialization\(object\), 
Document3D.GetOwnedDocuments\(LinkedList<IDocument\>\), 
Document3D.LoadTemplateBasedXml\(XmlReader\), 
Document3D.Load\(XmlReader\), 
Document3D.OnPostMakeDocument\(DocCreateInfo\), 
Document3D.EraseAllDisplayObject\(\), 
Document3D.ImportCADBody\(BuilderImport\[\]\), 
Document3D.ReAssemblyCore\(\), 
Document3D.ReAssemblyImpl\(ObjectBase\), 
Document3D.StartCADImportLog\(string\), 
Document3D.EndCADImportLog\(\), 
Document3D.ClearDocument\(\), 
Document3D.SkipDelete\(ObjectBase\), 
Document3D.RepairImpl\(\), 
Document3D.SkipObjectInWriting\(ObjectBase\), 
Document3D.HideObjectInReading\(\), 
Document3D.MappingEntity\(\), 
Document3D.GetBodies\(ref List<ObjectBase\>\), 
Document3D.CheckBeforeSave\(\), 
Document3D.LinkRequestUpdate\(object, LinkEventArgs\), 
Document3D.FindBodyFromCADBody\(ObjectBase\), 
Document3D.ExportCADBody\(string, List<Document3D.ExportBodyInfo\>, string, string\), 
Document3D.ExportCADBody\(string, List<Document3D.ExportBodyInfo\>, string\), 
Document3D.ExportCADFile\(string, string, string\), 
Document3D.GetBodyAndTransformation\(ref List<Document3D.ExportBodyInfo\>\), 
Document3D.SkipShowHide\(ObjectBase\), 
Document3D.WriteMessageForShowHide\(\), 
Document3D.Repair\(\), 
Document3D.AddInterface\(string\), 
Document3D.RemoveInterface\(string\), 
Document3D.RenameInterface\(string\), 
Document3D.RemoveAssembly\(Assembly\), 
Document3D.ClearAssembly\(\), 
Document3D.ChildAdd\(ObjectBase, string\), 
Document3D.ChildRemove\(ObjectBase, string\), 
Document3D.ChildUpdate\(ObjectBase, string\), 
Document3D.ChildRename\(ObjectBase, string\), 
Document3D.LoadCADFile\(string, Document3D.CadImportColorType, Color, Document3D.CadImportResultType, Document3D.CadImportUnitType, string\), 
Document3D.LoadCADFile\(string, Document3D.CadImportResultType, Document3D.CadImportUnitType\), 
Document3D.LoadCADFile\(string, Color, Document3D.CadImportResultType\), 
Document3D.LoadCADFile\(string, Document3D.CadImportResultType, string\), 
Document3D.LoadCADFile\(string, Document3D.CadImportResultType\), 
Document3D.PreloadCADFile\(string, Document3D.CadImportColorType, Color, Document3D.CadImportResultType, Document3D.CadImportUnitType, string, ref BuilderImport\[\]\), 
Document3D.SetSelectionObject\(List<ObjectBase\>\), 
Document3D.ExistUnderCursor\(\), 
Document3D.ActiveObject\(List<ObjectBase\>\), 
Document3D.RegisterFaceset\(UIntPtr, UIntPtr, bool\), 
Document3D.RegisterCurveset\(UIntPtr, UIntPtr, bool\), 
Document3D.ActiveFaceset\(UIntPtr, bool\), 
Document3D.ActiveCurveset\(UIntPtr, bool\), 
Document3D.FindFaceset\(UIntPtr, bool\), 
Document3D.FindCurveset\(UIntPtr, bool\), 
Document3D.CreateCanvas\(bool\), 
Document3D.CreateCanvas\(\), 
Document3D.GetCategoryChildren\(string\), 
Document3D.ActivateDocument\(\), 
Document3D.CheckMassPropForCADImport\(\), 
Document3D.GetReference\(ObjectBase, ref List<Reference\>, ref List<ObjectBase\>\), 
Document3D.GetReferDocument\(ref List<Document3D\>\), 
Document3D.ReInitInterfaceForAssembly\(\), 
Document3D.XmlDocumentReLoad\(XmlReader\), 
Document3D.RunPredefinedOperation\(\), 
Document3D.IncreaseReferedDocumentCount\(\), 
Document3D.DecreaseReferedDocumentCount\(\), 
Document3D.GetReferedDocumentCount\(\), 
Document3D.RedrawCuttingPlane\(\), 
Document3D.ToggleCuttingPlane\(OMatrix\), 
Document3D.ToggleCuttingPlane\(\), 
Document3D.GetCuttingPlane\(\), 
Document3D.IsCuttingPlaneSelected\(\), 
Document3D.SetRenderingMode\(Document3D.enRenderingMode\), 
Document3D.LoadCategoryFiles\(string\), 
Document3D.LoadCategoryInfoFromFile\(string, Dictionary<string, string\>, List<string\>\), 
Document3D.RegisterLoadingException\(Exception\), 
Document3D.ResetFacesetSurfaceType\(\), 
Document3D.Dispose\(bool\), 
Document3D.LoadingExceptions, 
Document3D.CategoryInfo, 
Document3D.InitialCategories, 
Document3D.VersionInfo, 
Document3D.ChangeReference, 
Document3D.VisibleTarget, 
Document3D.CustomPerformanceIndexList, 
Document3D.CustomDesignParameterList, 
Document3D.AssembledBodyList, 
Document3D.NodalBodyList, 
Document3D.MessageWhenLoad, 
Document3D.DoingCreateEntityOperation, 
Document3D.DoingTemplateBasedXml, 
Document3D.NodalOutputCandidateObjects, 
Document3D.CountOfUnderCursorPickableObject, 
Document3D.UnderCursorPickableObjects, 
Document3D.CommentOfDocument, 
Document3D.CountOfUnderCursorObject, 
Document3D.UnderCursorObjects, 
Document3D.CountOfSelectionObject, 
Document3D.SelectionObjects, 
Document3D.LayerManager, 
Document3D.IsPropertySupport, 
Document3D.ExtensionName, 
Document3D.ToolKitName, 
Document3D.Format, 
Document3D.TemplatePath, 
Document3D.FromTemplate, 
Document3D.Categories, 
Document3D.this\[string\], 
Document3D.IconSize, 
Document3D.UseMultipleAddition, 
Document3D.SkipUIUpdating, 
Document3D.IsAdvancedMode, 
Document3D.UseSymmetric, 
Document3D.SymmetricPlane, 
Document3D.CurrentBasicOp, 
Document3D.CanClose, 
Document3D.Modified, 
HandledDocument.AddToSelectionList\(ObjectBase\), 
HandledDocument.CancelSelection\(bool, bool\), 
HandledDocument.ExitCommandMode\(\), 
HandledDocument.CancelSelectedFaceset\(bool\), 
HandledDocument.SetHandle\(UIntPtr\), 
HandledDocument.OnDeserialization\(object\), 
HandledDocument.FromHandle\(UIntPtr\), 
HandledDocument.PostOpenDocument\(\), 
HandledDocument.Dispose\(bool\), 
HandledDocument.DoNotCheckHandleWhenCreate, 
HandledDocument.Handle, 
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
Document.Initialize\(Document.OpenDoc, Document.BrowseFile, Document.IsOpenDoc, Document.GetDocFromOpenedDoc, Document.ActiveDocChange\), 
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

### GearTrainDocument\(UIntPtr\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.GearTrainDocument" data-throw-if-not-resolved="false"></xref> class.

```csharp
public GearTrainDocument(UIntPtr docCore)
```

#### Parameters

`docCore` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The document handle.

## Properties

### AssembledBodyList

Gets or sets the assembled body list.

```csharp
public override ObjectBase[] AssembledBodyList { get; }
```

#### Property Value

 ObjectBase\[\]

### AssemblyManager

Gets or sets the assembly manager.

```csharp
public AssemblyManager AssemblyManager { get; set; }
```

#### Property Value

 [AssemblyManager](VM.Managed.DAFUL.GearTrain.AssemblyManager.md)

### CustomDesignParameterList

Gets or sets the custom design parameter list.

```csharp
public override ObjectBase[] CustomDesignParameterList { get; }
```

#### Property Value

 ObjectBase\[\]

### CustomPerformanceIndexList

Gets or sets the custom performance index list.

```csharp
public override ObjectBase[] CustomPerformanceIndexList { get; }
```

#### Property Value

 ObjectBase\[\]

### DirectionOfShaft

Gets or sets the direction of shaft.

```csharp
public DirectionBase DirectionOfShaft { get; set; }
```

#### Property Value

 DirectionBase

### InitialCategories

Gets the initial categories.

```csharp
protected override List<string> InitialCategories { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### NodalBodyList

Gets the nodal body list.

```csharp
public override ObjectBase[] NodalBodyList { get; }
```

#### Property Value

 ObjectBase\[\]

### SimulationScenarioTypeName

Gets the name of the simulation scenario type.

```csharp
public override string SimulationScenarioTypeName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### SkipUI

Gets or sets the skip UI.

```csharp
public static bool SkipUI { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseToolkitSubsystem

Determines whether this used toolkit subsystem.

```csharp
public override bool UseToolkitSubsystem { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### VehicleSimulationDataSet

Vehicle Simulation DataSet

```csharp
public string VehicleSimulationDataSet { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### VehicleSimulatorProcessId

Vehicle simulator process id

```csharp
public int VehicleSimulatorProcessId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### VisibleTarget

Gets or sets the visible target.

```csharp
public override ObjectBase[] VisibleTarget { get; }
```

#### Property Value

 ObjectBase\[\]

## Methods

### AddParentToDictionary\(GeometryInfoBase, IOpenDesignerForGearTrain\)

Adds the parent to dictionary.

```csharp
public bool AddParentToDictionary(GeometryInfoBase geomInfo, IOpenDesignerForGearTrain openDes)
```

#### Parameters

`geomInfo` [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md)

The geom information.

`openDes` [IOpenDesignerForGearTrain](VM.Managed.DAFUL.GearTrain.IOpenDesignerForGearTrain.md)

The open DES.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### AddParentToDictionary\(GeometryInfoBase, IOpenDesignerForGearTrain, GeometryInfoBase\)

Adds the parent to dictionary.

```csharp
public bool AddParentToDictionary(GeometryInfoBase geomInfo, IOpenDesignerForGearTrain openDes, GeometryInfoBase bearingInfo)
```

#### Parameters

`geomInfo` [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md)

The geom information.

`openDes` [IOpenDesignerForGearTrain](VM.Managed.DAFUL.GearTrain.IOpenDesignerForGearTrain.md)

The open DES.

`bearingInfo` [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md)

The bearing information.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ClearDocument\(\)

Clears the document.

```csharp
protected override void ClearDocument()
```

### DeleteWithSelectionObjects\(\)

Deletes the with selection objects.

```csharp
public override bool DeleteWithSelectionObjects()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Find\(string\)

Finds the specified string name.

```csharp
public override IObjectBase Find(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string.

#### Returns

 IObjectBase

### FindBodyFromCADBody\(ObjectBase\)

Finds the body form CAD body.

```csharp
public override ObjectBase FindBodyFromCADBody(ObjectBase obj)
```

#### Parameters

`obj` ObjectBase

The CAD body.

#### Returns

 ObjectBase

The body such as solid body, assembled body.

### FindCategory\(string\)

Finds the category.

```csharp
public override string FindCategory(string strType)
```

#### Parameters

`strType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The fullname of type.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The category.

### FindLocal\(string\)

Finds the local.

```csharp
public override IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string.

#### Returns

 IObjectBase

### FindObjectForSelection\(ObjectBase, OperationTypeForSelection\)

Finds the object for selecion.

```csharp
public override ObjectBase FindObjectForSelection(ObjectBase obj, Document3D.OperationTypeForSelection enType)
```

#### Parameters

`obj` ObjectBase

The obj.

`enType` Document3D.OperationTypeForSelection

Type of the operation for selection.

#### Returns

 ObjectBase

### GetAllGear\(string, GearGeometryInfo\)

Gets all gear.

```csharp
public List<IGearBuilder> GetAllGear(string strExistShaftsetName, GearGeometryInfo addedGearInfo)
```

#### Parameters

`strExistShaftsetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string exist shaftset.

`addedGearInfo` [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

The added gear information.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[IGearBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGearBuilder.md)\>

### GetAssemblyInfoForOutputUsub\(ref IConnectable\)

Gets the assembly information for output usub.

```csharp
public void GetAssemblyInfoForOutputUsub(ref IConnectable con)
```

#### Parameters

`con` IConnectable

The con.

### GetBodies\(ref List<ObjectBase\>\)

Get Bodies.

```csharp
protected override void GetBodies(ref List<ObjectBase> lstBody)
```

#### Parameters

`lstBody` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<ObjectBase\>

The body container.

### GetData\(XmlNode\)

Gets the analysis document information data.

```csharp
public override void GetData(XmlNode writer)
```

#### Parameters

`writer` [XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)

The writer.

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

### GetExtraInfoInDictionary\(GeometryInfoBase\)

Gets the extra information in dictionary.

```csharp
public GeometryInfoBase GetExtraInfoInDictionary(GeometryInfoBase geomInfo)
```

#### Parameters

`geomInfo` [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md)

The geom information.

#### Returns

 [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md)

### GetGearsWithSameAxis\(string, VectorBase, VectorBase, GearGeometryInfo\)

Gets the gears with same axis.

```csharp
public List<IGearBuilder> GetGearsWithSameAxis(string strExistShaftsetName, VectorBase vecPoint, VectorBase vecAxis, GearGeometryInfo addedGearInfo)
```

#### Parameters

`strExistShaftsetName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string exist shaftset.

`vecPoint` VectorBase

The vec point.

`vecAxis` VectorBase

The vec axis.

`addedGearInfo` [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

The added gear information.

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[IGearBuilder](VM.Managed.DAFUL.GearTrain.CAD.IGearBuilder.md)\>

### GetGeometryInfo\(IOpenDesignerForGearTrain, GeometryType\)

Gets the geometry information.

```csharp
public GeometryInfoBase[] GetGeometryInfo(IOpenDesignerForGearTrain od, GeometryInfoBase.GeometryType typeGeom)
```

#### Parameters

`od` [IOpenDesignerForGearTrain](VM.Managed.DAFUL.GearTrain.IOpenDesignerForGearTrain.md)

The od.

`typeGeom` [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md).[GeometryType](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.GeometryType.md)

The type geom.

#### Returns

 [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md)\[\]

### GetOMatrixWithReferenceDir\(VectorBase\)

Gets the o matrix with reference dir.

```csharp
public OMatrix GetOMatrixWithReferenceDir(VectorBase vecZ)
```

#### Parameters

`vecZ` VectorBase

The vec z.

#### Returns

 OMatrix

### GetParentInDictionary\(GeometryInfoBase\)

Gets the parent in dictionary.

```csharp
public IOpenDesignerForGearTrain GetParentInDictionary(GeometryInfoBase geomInfo)
```

#### Parameters

`geomInfo` [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md)

The geom information.

#### Returns

 [IOpenDesignerForGearTrain](VM.Managed.DAFUL.GearTrain.IOpenDesignerForGearTrain.md)

### GetUnnamedObjectName\(object\)

Gets the name of the unnamed object.

```csharp
public override string GetUnnamedObjectName(object obUnnamed)
```

#### Parameters

`obUnnamed` [object](https://learn.microsoft.com/dotnet/api/system.object)

The ob unnamed.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The unnamed object name.

### InitializeCategoryInfo\(string\)

Initializes the category information.

```csharp
public static void InitializeCategoryInfo(string strCategoryName)
```

#### Parameters

`strCategoryName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string category.

### InitializeSimParam\(\)

Initializes the simulation parameter.

```csharp
protected override void InitializeSimParam()
```

### IsAssmbldPairForBearing\(RacewayGeometryInfo\)

Determines whether [is assmbld pair for bearing] [the specified information].

```csharp
public bool IsAssmbldPairForBearing(RacewayGeometryInfo info)
```

#### Parameters

`info` [RacewayGeometryInfo](VM.Managed.DAFUL.GearTrain.RacewayGeometryInfo.md)

The information.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsPairForBearing\(GeometryInfoBase\)

Determines whether [is pair for bearing] [the specified od].

```csharp
public bool IsPairForBearing(GeometryInfoBase info)
```

#### Parameters

`info` [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md)

The information.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LinkRequestUpdate\(object, LinkEventArgs\)

The update event occured from the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The update event information.

### OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### OnPostMakeDocumentImpl\(DocCreateAnalysisInfo\)

Called when [post make document] [implementation].

```csharp
protected override void OnPostMakeDocumentImpl(DocCreateAnalysisInfo info)
```

#### Parameters

`info` DocCreateAnalysisInfo

The [analysis document create information].

### PossibleToImport\(SubSystemDocument, out string, out string\)

Possible to import subsystem.

```csharp
public override bool PossibleToImport(SubSystemDocument document, out string strDocBase, out string strDocNew)
```

#### Parameters

`document` SubSystemDocument

The document to import.

`strDocBase` [string](https://learn.microsoft.com/dotnet/api/system.string)

The base document type name.

`strDocNew` [string](https://learn.microsoft.com/dotnet/api/system.string)

The new document type name.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### PostCloseDocument\(\)

Called after close document

```csharp
public override void PostCloseDocument()
```

### PostOpenDocument\(\)

Posts the open document.

```csharp
public override void PostOpenDocument()
```

### PostOpenDocumentAfterSetFilePath\(\)

Call when post [open document] after set file path.

```csharp
public override void PostOpenDocumentAfterSetFilePath()
```

### ReAssemblyCore\(\)

Reassembly

```csharp
protected override bool ReAssemblyCore()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### ReAssemblyHousing\(IMeshEntity\)

Re-assembly housing.

```csharp
public void ReAssemblyHousing(IMeshEntity housing)
```

#### Parameters

`housing` [IMeshEntity](VM.Managed.DAFUL.GearTrain.IMeshEntity.md)

### RemoveParentFromDictionary\(GeometryInfoBase, HiddenDocument\)

Removes the parent from dictionary.

```csharp
public bool RemoveParentFromDictionary(GeometryInfoBase geomInfo, HiddenDocument docHidden)
```

#### Parameters

`geomInfo` [GeometryInfoBase](VM.Managed.DAFUL.GearTrain.GeometryInfoBase.md)

The geom information.

`docHidden` HiddenDocument

The document hidden.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### RemoveParentFromDictionary\(IOpenDesignerForGearTrain\)

Removes the parent from dictionary.

```csharp
public void RemoveParentFromDictionary(IOpenDesignerForGearTrain openDes)
```

#### Parameters

`openDes` [IOpenDesignerForGearTrain](VM.Managed.DAFUL.GearTrain.IOpenDesignerForGearTrain.md)

The open DES.

### SetData\(XmlNode\)

Sets the analysis document information data.

```csharp
public override void SetData(XmlNode reader)
```

#### Parameters

`reader` [XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)

The reader.

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

### SkipAddToDSDLWithCategory\(string\)

Skip [add to DSDL] with category.

```csharp
public override bool SkipAddToDSDLWithCategory(string strCategory)
```

#### Parameters

`strCategory` [string](https://learn.microsoft.com/dotnet/api/system.string)

The category name.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SkipAddToDSDLWithEntity\(ObjectBase\)

Skip [add to DSDL] with entity.

```csharp
public override bool SkipAddToDSDLWithEntity(ObjectBase @object)
```

#### Parameters

`object` ObjectBase

The entity.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


