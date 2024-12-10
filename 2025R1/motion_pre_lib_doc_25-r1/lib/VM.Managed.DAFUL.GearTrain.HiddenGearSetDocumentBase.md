#  Class HiddenGearSetDocumentBase

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

The hidden gear set document base

```csharp
public abstract class HiddenGearSetDocumentBase : HiddenDocumentForGearTrain, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IEnableManager, IRelatedDocument, IHistorySupport, ITemplateDocument, ITreatValidObject, ISubSystemDocument, IDocumentAnalysis, IDocument3D, IHandledDocument, IDocument, IObject, IEventProvider, IContainer, ILinkContainer, IOwned, IHasID, IDocumentOwner, IInterfaceSupport, IApplyInitialVelocity, IHiddenDocument
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
[HiddenGearSetDocumentBase](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md)

#### Derived

[HiddenGearSetCrossHelicalDocument](VM.Managed.DAFUL.GearTrain.HiddenGearSetCrossHelicalDocument.md), 
[HiddenGearSetCustomDocument](VM.Managed.DAFUL.GearTrain.HiddenGearSetCustomDocument.md), 
[HiddenGearSetCycloidPinDocument](VM.Managed.DAFUL.GearTrain.HiddenGearSetCycloidPinDocument.md), 
[HiddenGearSetDocument](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocument.md), 
[HiddenGearSetInternalDocument](VM.Managed.DAFUL.GearTrain.HiddenGearSetInternalDocument.md), 
[HiddenGearSetPlanetaryDPDocument](VM.Managed.DAFUL.GearTrain.HiddenGearSetPlanetaryDPDocument.md), 
[HiddenGearSetPlanetaryDocument](VM.Managed.DAFUL.GearTrain.HiddenGearSetPlanetaryDocument.md), 
[HiddenGearSetPlanetaryTSDocument](VM.Managed.DAFUL.GearTrain.HiddenGearSetPlanetaryTSDocument.md), 
[HiddenGearSetRackAndPinionDocument](VM.Managed.DAFUL.GearTrain.HiddenGearSetRackAndPinionDocument.md), 
[HiddenGearSetWormAndWormWheelDocument](VM.Managed.DAFUL.GearTrain.HiddenGearSetWormAndWormWheelDocument.md)

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
IHiddenDocument

#### Inherited Members

[HiddenDocumentForGearTrain.Find\(string\)](VM.Managed.DAFUL.GearTrain.HiddenDocumentForGearTrain.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenDocumentForGearTrain\_Find\_System\_String\_), 
[HiddenDocumentForGearTrain.CloseDocumentCore\(\)](VM.Managed.DAFUL.GearTrain.HiddenDocumentForGearTrain.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenDocumentForGearTrain\_CloseDocumentCore), 
[HiddenDocumentForGearTrain.CheckActiveDocument\(Document3D, Document3D\)](VM.Managed.DAFUL.GearTrain.HiddenDocumentForGearTrain.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenDocumentForGearTrain\_CheckActiveDocument\_VM\_Managed\_Document3D\_VM\_Managed\_Document3D\_), 
HiddenDocument.m\_canvas, 
HiddenDocument.ClearDocument\(\), 
HiddenDocument.InitializeSimParam\(\), 
HiddenDocument.OnPostMakeDocumentImpl\(DocCreateAnalysisInfo\), 
HiddenDocument.DrawCoordinate\(double\), 
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
SubSystemDocument.ReAssembleForChangeAssembly\(ChangeAssemblyType, List<string\>, List<string\>\), 
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

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase__ctor_System_UIntPtr_"></a> HiddenGearSetDocumentBase\(UIntPtr\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase" data-throw-if-not-resolved="false"></xref> class.

```csharp
public HiddenGearSetDocumentBase(UIntPtr docCore)
```

#### Parameters

`docCore` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The document handle.

## Fields

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_m_bHideLOA"></a> m\_bHideLOA

The LOA hide flag

```csharp
protected List<bool> m_bHideLOA
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_m_bShow2D"></a> m\_bShow2D

The show2d flag

```csharp
protected bool m_bShow2D
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_AddToPropertyAllGear"></a> AddToPropertyAllGear

Gets the flag whether this instance add to property or not.

```csharp
public virtual bool AddToPropertyAllGear { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_DoingContactAnalysis"></a> DoingContactAnalysis

Gets a value indicating contact analysis execute flag.

```csharp
public static bool DoingContactAnalysis { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_GearSet"></a> GearSet

Gets or sets the gear set.

```csharp
public IGearSet GearSet { get; set; }
```

#### Property Value

 [IGearSet](VM.Managed.DAFUL.GearTrain.IGearSet.md)

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_HideBCD"></a> HideBCD

Gets the value whether bcd is hidden or not

```csharp
protected virtual bool HideBCD { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_HideLOA"></a> HideLOA

Gets the value whether loa is hidden or not

```csharp
protected virtual bool HideLOA { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_NumberOfLOA"></a> NumberOfLOA

Gets number of LOA.

```csharp
protected virtual int NumberOfLOA { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_Show2D"></a> Show2D

Gets a value indicating whether [show2 d].

```csharp
public bool Show2D { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_TargetDesign"></a> TargetDesign

Gets the target design.

```csharp
public override IOpenDesigner TargetDesign { get; }
```

#### Property Value

 IOpenDesigner

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase__GearSet"></a> \_GearSet

Gets or sets the _ gear set.

```csharp
public Linker<IGearSet> _GearSet { get; set; }
```

#### Property Value

 Linker<[IGearSet](VM.Managed.DAFUL.GearTrain.IGearSet.md)\>

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_CalculateToothStiffness_VM_Managed_DAFUL_GearTrain_IGearSet_System_Collections_Generic_List_System_ValueTuple_System_Boolean_System_Int32_System_String_System_String___"></a> CalculateToothStiffness\(IGearSet, List<\(bool, int, string, string\)\>\)

Calculate tooth stiffness

```csharp
public static void CalculateToothStiffness(IGearSet gearSet, List<(bool, int, string, string)> lstToothInfo)
```

#### Parameters

`gearSet` [IGearSet](VM.Managed.DAFUL.GearTrain.IGearSet.md)

The gearset

`lstToothInfo` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<\([bool](https://learn.microsoft.com/dotnet/api/system.boolean), [int](https://learn.microsoft.com/dotnet/api/system.int32), [string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\)\>

The tooth information

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_CalculateToothStiffness_VM_Managed_DAFUL_GearTrain_IGearSet_"></a> CalculateToothStiffness\(IGearSet\)

Calculate tooth stiffness

```csharp
public static void CalculateToothStiffness(IGearSet gearSet)
```

#### Parameters

`gearSet` [IGearSet](VM.Managed.DAFUL.GearTrain.IGearSet.md)

The gearset

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_CalculateToothStiffnessInContactAnalysis_VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_System_Int32_"></a> CalculateToothStiffnessInContactAnalysis\(HiddenGearSetDocumentBase, int\)

Calculate tooth stiffness in contact analysis

```csharp
public static void CalculateToothStiffnessInContactAnalysis(HiddenGearSetDocumentBase docGearset, int nGearIdx)
```

#### Parameters

`docGearset` [HiddenGearSetDocumentBase](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md)

The gearset hidden document

`nGearIdx` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The gear index

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_CheckToothStiffness_VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_"></a> CheckToothStiffness\(HiddenGearSetDocumentBase\)

Check tooth stiffness

```csharp
public static void CheckToothStiffness(HiddenGearSetDocumentBase docGearset)
```

#### Parameters

`docGearset` [HiddenGearSetDocumentBase](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md)

The gearset hidden document

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_CreateAssemblyImpl"></a> CreateAssemblyImpl\(\)

Creates the assembly implementation.

```csharp
protected override Assembly CreateAssemblyImpl()
```

#### Returns

 Assembly

#### Exceptions

 [NotImplementedException](https://learn.microsoft.com/dotnet/api/system.notimplementedexception)

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_CreateStiffness"></a> CreateStiffness\(\)

Creates the stiffness.

```csharp
public void CreateStiffness()
```

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_DeserializeResult_VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_System_String___System_Collections_Generic_List_VM_Managed_DAFUL_GearTrain_GearShapeBase_InvolutePoint____System_Collections_Generic_List_VM_Managed_DAFUL_GearTrain_GearShapeBase_InvolutePoint____System_Collections_Generic_List_VM_Managed_Vector____"></a> DeserializeResult\(PropertyGearSetBase, string\[\], List<InvolutePoint\>\[\], List<InvolutePoint\>\[\], List<Vector\>\[\]\)

Deserialize result

```csharp
public static void DeserializeResult(PropertyGearSetBase pgs, string[] arRsult, List<GearShapeBase.InvolutePoint>[] arInvolutePoints, List<GearShapeBase.InvolutePoint>[] arGraphicInvolutePoints, List<Vector>[] arMBCD)
```

#### Parameters

`pgs` [PropertyGearSetBase](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md)

The property

`arRsult` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The result

`arInvolutePoints` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[GearShapeBase](VM.Managed.DAFUL.GearTrain.GearShapeBase.md).[InvolutePoint](VM.Managed.DAFUL.GearTrain.GearShapeBase.InvolutePoint.md)\>\[\]

The involute points

`arGraphicInvolutePoints` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[GearShapeBase](VM.Managed.DAFUL.GearTrain.GearShapeBase.md).[InvolutePoint](VM.Managed.DAFUL.GearTrain.GearShapeBase.InvolutePoint.md)\>\[\]

The graphic involute points

`arMBCD` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Vector\>\[\]

The MBCD

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_DrawCoordinate_System_Double_"></a> DrawCoordinate\(double\)

Draws the coordinate.

```csharp
public override void DrawCoordinate(double dIconSize)
```

#### Parameters

`dIconSize` [double](https://learn.microsoft.com/dotnet/api/system.double)

Size of the d icon.

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_DrawLOAForExternal_System_String_System_Double_System_Double_System_Double_System_Double_VM_Managed_OMatrix_"></a> DrawLOAForExternal\(string, double, double, double, double, OMatrix\)

draw loa for external gear.

```csharp
protected void DrawLOAForExternal(string strCanvasName, double dR1, double dR2, double curCenterY, double preCenterY, OMatrix matO)
```

#### Parameters

`strCanvasName` [string](https://learn.microsoft.com/dotnet/api/system.string)

canvas name.

`dR1` [double](https://learn.microsoft.com/dotnet/api/system.double)

first radius .

`dR2` [double](https://learn.microsoft.com/dotnet/api/system.double)

second radius.

`curCenterY` [double](https://learn.microsoft.com/dotnet/api/system.double)

current center.

`preCenterY` [double](https://learn.microsoft.com/dotnet/api/system.double)

previous conter.

`matO` OMatrix

orientation of LOA.

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_DrawLOAForInternal_System_String_System_Double_System_Double_System_Double_VM_Managed_OMatrix_"></a> DrawLOAForInternal\(string, double, double, double, OMatrix\)

draw loa for internal gear.

```csharp
protected void DrawLOAForInternal(string strCanvasName, double dR1, double dR2, double CenterY, OMatrix matO)
```

#### Parameters

`strCanvasName` [string](https://learn.microsoft.com/dotnet/api/system.string)

canvas name.

`dR1` [double](https://learn.microsoft.com/dotnet/api/system.double)

first radius .

`dR2` [double](https://learn.microsoft.com/dotnet/api/system.double)

second radius.

`CenterY` [double](https://learn.microsoft.com/dotnet/api/system.double)

center Y.

`matO` OMatrix

orientation of LOA.

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_GetCenterY_System_Double___"></a> GetCenterY\(double\[\]\)

Get y coordinate of center.

```csharp
protected virtual void GetCenterY(double[] ardCenterY)
```

#### Parameters

`ardCenterY` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

The y coordinate of center.

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_GetData_System_Xml_XmlNode_"></a> GetData\(XmlNode\)

Gets the analysis document information data.

```csharp
public override void GetData(XmlNode writer)
```

#### Parameters

`writer` [XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)

The writer.

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_GetExternalState_System_Boolean___"></a> GetExternalState\(bool\[\]\)

Get external state.

```csharp
protected virtual void GetExternalState(bool[] arbExternal)
```

#### Parameters

`arbExternal` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\[\]

The exteranl array.

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_GetInfoFromDocumentPropertyGrid_System_Xml_XmlDocument_System_Xml_XmlDocument_"></a> GetInfoFromDocumentPropertyGrid\(XmlDocument, XmlDocument\)

Gets the information from document property grid.

```csharp
public override void GetInfoFromDocumentPropertyGrid(XmlDocument xmlTarget, XmlDocument xmlTool)
```

#### Parameters

`xmlTarget` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XML target.

`xmlTool` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XML tool.

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_LinkRequestDestroying_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestDestroying\(object, LinkEventArgs\)

The destroying event occured from the linked object.

```csharp
protected override void LinkRequestDestroying(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The destroy event information.

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

The update event occured from the linked object.

```csharp
protected override void LinkRequestUpdate(object objNotifier, LinkEventArgs arg)
```

#### Parameters

`objNotifier` [object](https://learn.microsoft.com/dotnet/api/system.object)

The linked object.

`arg` LinkEventArgs

The update event information.

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_MakeXmlForDocumentPropertyGrid_System_Xml_XmlDocument_System_String__"></a> MakeXmlForDocumentPropertyGrid\(XmlDocument, ref string\)

Makes the XML for document property grid.

```csharp
public override string MakeXmlForDocumentPropertyGrid(XmlDocument xmlDom, ref string strGroupName)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XML DOM.

`strGroupName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string group.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_MakeXmlForDocumentPropertyGridForLOA_System_Xml_XmlDocument_System_String__System_Text_StringBuilder_"></a> MakeXmlForDocumentPropertyGridForLOA\(XmlDocument, ref string, StringBuilder\)

Makes the LOA XML for document property grid.

```csharp
protected virtual void MakeXmlForDocumentPropertyGridForLOA(XmlDocument xmlDom, ref string strGroupName, StringBuilder sb)
```

#### Parameters

`xmlDom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The XML DOM.

`strGroupName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the string group.

`sb` [StringBuilder](https://learn.microsoft.com/dotnet/api/system.text.stringbuilder)

The string builder.

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_ModifiedToothStiffness_VM_Managed_DAFUL_GearTrain_GearGeometryInfo_"></a> ModifiedToothStiffness\(GearGeometryInfo\)

Whether this instance is modified by tooth stiffness or not.

```csharp
public (bool, PseudoGearGeometry) ModifiedToothStiffness(GearGeometryInfo gearGeometryInfo)
```

#### Parameters

`gearGeometryInfo` [GearGeometryInfo](VM.Managed.DAFUL.GearTrain.GearGeometryInfo.md)

The gear geometry information

#### Returns

 \([bool](https://learn.microsoft.com/dotnet/api/system.boolean), [PseudoGearGeometry](VM.Managed.DAFUL.GearTrain.CAD.PseudoGearGeometry.md)\)

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_RefreshGearBodyInNav"></a> RefreshGearBodyInNav\(\)

Refreshes the gear body in nav.

```csharp
public void RefreshGearBodyInNav()
```

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_SerializeResult_VM_Managed_DAFUL_GearTrain_PropertyGearSetBase_System_String____System_Collections_Generic_List_VM_Managed_DAFUL_GearTrain_GearShapeBase_InvolutePoint_____System_Collections_Generic_List_VM_Managed_DAFUL_GearTrain_GearShapeBase_InvolutePoint_____System_Collections_Generic_List_VM_Managed_Vector_____"></a> SerializeResult\(PropertyGearSetBase, ref string\[\], ref List<InvolutePoint\>\[\], ref List<InvolutePoint\>\[\], ref List<Vector\>\[\]\)

Serialize result

```csharp
public static void SerializeResult(PropertyGearSetBase pgs, ref string[] arRsult, ref List<GearShapeBase.InvolutePoint>[] arInvolutePoints, ref List<GearShapeBase.InvolutePoint>[] arGraphicInvolutePoints, ref List<Vector>[] arMBCD)
```

#### Parameters

`pgs` [PropertyGearSetBase](VM.Managed.DAFUL.GearTrain.PropertyGearSetBase.md)

The gear property

`arRsult` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The result

`arInvolutePoints` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[GearShapeBase](VM.Managed.DAFUL.GearTrain.GearShapeBase.md).[InvolutePoint](VM.Managed.DAFUL.GearTrain.GearShapeBase.InvolutePoint.md)\>\[\]

The involute points

`arGraphicInvolutePoints` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[GearShapeBase](VM.Managed.DAFUL.GearTrain.GearShapeBase.md).[InvolutePoint](VM.Managed.DAFUL.GearTrain.GearShapeBase.InvolutePoint.md)\>\[\]

The graphic involute points

`arMBCD` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Vector\>\[\]

The MBCD

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_SetData_System_Xml_XmlNode_"></a> SetData\(XmlNode\)

Sets the analysis document information data.

```csharp
public override void SetData(XmlNode reader)
```

#### Parameters

`reader` [XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)

The reader.

#### Exceptions

 [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_Show2Dimension_System_Boolean_"></a> Show2Dimension\(bool\)

Show2s the dimension.

```csharp
public void Show2Dimension(bool isRefresh)
```

#### Parameters

`isRefresh` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [is refresh].

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetDocumentBase_Show2DimensionCore_System_Int32_System_Boolean___System_Double___System_Double___"></a> Show2DimensionCore\(int, bool\[\], double\[\], double\[\]\)

Show2s the dimension core.

```csharp
protected virtual void Show2DimensionCore(int nCount, bool[] ardExternal, double[] ardCenterY, double[] ardBCDR)
```

#### Parameters

`nCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

the count.

`ardExternal` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\[\]

external state array.

`ardCenterY` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

center array.

`ardBCDR` [double](https://learn.microsoft.com/dotnet/api/system.double)\[\]

BCDR array.

