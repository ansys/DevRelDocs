#  Class HiddenShaftSetDocument

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

The hidden shaft set document

```csharp
public class HiddenShaftSetDocument : HiddenDocumentForGearTrain, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IEnableManager, IRelatedDocument, IHistorySupport, ITemplateDocument, ITreatValidObject, ISubSystemDocument, IDocumentAnalysis, IDocument3D, IHandledDocument, IDocument, IObject, IEventProvider, IContainer, ILinkContainer, IOwned, IHasID, IDocumentOwner, IInterfaceSupport, IApplyInitialVelocity, IHiddenDocument, IHasComponent
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
HiddenDocument ← 
[HiddenDocumentForGearTrain](VM.Managed.DAFUL.GearTrain.HiddenDocumentForGearTrain.md) ← 
[HiddenShaftSetDocument](VM.Managed.DAFUL.GearTrain.HiddenShaftSetDocument.md)

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
IDocumentOwner, 
IInterfaceSupport, 
IApplyInitialVelocity, 
IHiddenDocument, 
[IHasComponent](VM.Managed.DAFUL.GearTrain.IHasComponent.md)

#### Inherited Members

[HiddenDocumentForGearTrain.Find\(string\)](VM.Managed.DAFUL.GearTrain.HiddenDocumentForGearTrain.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenDocumentForGearTrain\_Find\_System\_String\_), 
[HiddenDocumentForGearTrain.CloseDocumentCore\(\)](VM.Managed.DAFUL.GearTrain.HiddenDocumentForGearTrain.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenDocumentForGearTrain\_CloseDocumentCore), 
[HiddenDocumentForGearTrain.CheckActiveDocument\(Document3D, Document3D\)](VM.Managed.DAFUL.GearTrain.HiddenDocumentForGearTrain.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenDocumentForGearTrain\_CheckActiveDocument\_VM\_Managed\_Document3D\_VM\_Managed\_Document3D\_), 
HiddenDocument.m\_canvas, 
HiddenDocument.ClearDocument\(\), 
HiddenDocument.InitializeSimParam\(\), 
HiddenDocument.OnPostMakeDocumentImpl\(DocCreateAnalysisInfo\), 
HiddenDocument.DrawCoordinate\(double\), 
HiddenDocument.HideSubData\(string\), 
HiddenDocument.DrawCoordinateCore\(VectorBase, double\), 
HiddenDocument.CloseDocumentCore\(\), 
HiddenDocument.SetData\(XmlNode\), 
HiddenDocument.FindLocal\(string\), 
HiddenDocument.TargetDesign, 
HiddenDocument.TargetDocument, 
HiddenDocument.RenderingMode, 
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
SubSystemDocument.ReAssembleForChangeAssembly\(ChangeAssemblyType, string, string, List<string\>\), 
SubSystemDocument.GetRemovedConnectorForChangeAssembly\(ChangeAssemblyType, string, string, List<string\>\), 
SubSystemDocument.SkipDelete\(ObjectBase\), 
SubSystemDocument.FindObjectForSelection\(ObjectBase, Document3D.OperationTypeForSelection\), 
SubSystemDocument.FindBodyFromCADBody\(ObjectBase\), 
SubSystemDocument.SkipShowHide\(ObjectBase\), 
SubSystemDocument.WriteMessageForShowHide\(\), 
SubSystemDocument.PostOpenDocument\(\), 
SubSystemDocument.PostOpenDocumentAfterErrCheckEvent\(\), 
SubSystemDocument.InitialCategories, 
SubSystemDocument.ApplyInitialVelocityImpl, 
SubSystemDocument.InitialVelocityImpl, 
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
Document3D.BeforePostDeserialized\(\), 
Document3D.SkipAddToDSDLWithCategory\(string\), 
Document3D.SkipAddToDSDLWithEntity\(ObjectBase\), 
Document3D.GetObjectsForChangeAssembly\(\), 
Document3D.BeforeDelete\(ObjectBase\), 
Document3D.AfterDelete\(\), 
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

### <a id="VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument__ctor_System_UIntPtr_"></a> HiddenShaftSetDocument\(UIntPtr\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.HiddenShaftSetDocument" data-throw-if-not-resolved="false"></xref> class.

```csharp
public HiddenShaftSetDocument(UIntPtr docCore)
```

#### Parameters

`docCore` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The document core.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_InitialCategories"></a> InitialCategories

Gets the initial categories.

```csharp
protected override List<string> InitialCategories { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_RenderingMode"></a> RenderingMode

Gets the rendering mode.

```csharp
public override View3D.RenderingMode RenderingMode { get; }
```

#### Property Value

 View3D.RenderingMode

### <a id="VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_ShaftSet"></a> ShaftSet

Gets or sets the shaft set.

```csharp
public ShaftSet ShaftSet { get; set; }
```

#### Property Value

 [ShaftSet](VM.Managed.DAFUL.GearTrain.ShaftSet.md)

### <a id="VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_TargetDesign"></a> TargetDesign

Gets the target design.

```csharp
public override IOpenDesigner TargetDesign { get; }
```

#### Property Value

 IOpenDesigner

### <a id="VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_VisibleDimension"></a> VisibleDimension

Gets or sets a value indicating whether [visible dimension].

```csharp
public bool VisibleDimension { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_ClearDocument"></a> ClearDocument\(\)

Clears the document.

```csharp
protected override void ClearDocument()
```

### <a id="VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_CreateAssemblyImpl"></a> CreateAssemblyImpl\(\)

Creates the assembly implementation.

```csharp
protected override Assembly CreateAssemblyImpl()
```

#### Returns

 Assembly

#### Exceptions

 [NotImplementedException](https://learn.microsoft.com/dotnet/api/system.notimplementedexception)

### <a id="VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_CreateViewCore_System_UIntPtr_"></a> CreateViewCore\(UIntPtr\)

Create view [Core].

```csharp
protected override View CreateViewCore(UIntPtr pView)
```

#### Parameters

`pView` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The view handle.

#### Returns

 View

### <a id="VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_DrawCoordinate_System_Double_"></a> DrawCoordinate\(double\)

Draws the coordinate.

```csharp
public override void DrawCoordinate(double dIconSize)
```

#### Parameters

`dIconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_FindCategory_System_String_"></a> FindCategory\(string\)

Finds the category.

```csharp
public override string FindCategory(string strType)
```

#### Parameters

`strType` [string](https://learn.microsoft.com/dotnet/api/system.string)

Type of the string.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_GetAllGears"></a> GetAllGears\(\)

Gets all gears.

```csharp
public ObjectBase[] GetAllGears()
```

#### Returns

 ObjectBase\[\]

### <a id="VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_InitializeCategoryInfo_System_String_"></a> InitializeCategoryInfo\(string\)

Initializes the category information.

```csharp
public static void InitializeCategoryInfo(string strCategoryName)
```

#### Parameters

`strCategoryName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string category.

### <a id="VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_LinkRequestDestroying_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroying\(object, LinkEventArgs\)

Links the request destroying.

```csharp
protected override void LinkRequestDestroying(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The object notifier.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_ModifyDimension"></a> ModifyDimension\(\)

Modifies the dimension.

```csharp
public void ModifyDimension()
```

### <a id="VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

### <a id="VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_RefreshChildNameInNav"></a> RefreshChildNameInNav\(\)

Refreshes the child name in nav.

```csharp
public void RefreshChildNameInNav()
```

### <a id="VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_RefreshSectionInNav"></a> RefreshSectionInNav\(\)

Refreshes the section in nav.

```csharp
public void RefreshSectionInNav()
```

### <a id="VM_Managed_DAFUL_GearTrain_HiddenShaftSetDocument_ShowHideDimension"></a> ShowHideDimension\(\)

Shows the hide dimension.

```csharp
public void ShowHideDimension()
```

