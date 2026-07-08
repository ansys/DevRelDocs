# Class SubSystemDocument
<a id="VM_Managed_DAFUL_SubSystemDocument"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the document for sub system.

```csharp
public class SubSystemDocument : DocumentAnalysis, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IEnableManager, IRelatedDocument, IHistorySupport, ITemplateDocument, ITreatValidObject, ISubSystemDocument, IDocumentAnalysis, IDocument3D, IHandledDocument, IDocument, IObject, IEventProvider, IContainer, ILinkContainer, IOwned, IHasID, IDocumentOwner, IInterfaceSupport, IApplyInitialVelocity
```

#### Inheritance

object ← 
ObservableObject ← 
[LinkableBase](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/LinkableBase.cs) ← 
LinkContainer ← 
Container ← 
Document ← 
HandledDocument ← 
Document3D ← 
[DocumentAnalysis](VM.Managed.DAFUL.DocumentAnalysis.md) ← 
[SubSystemDocument](VM.Managed.DAFUL.SubSystemDocument.md)

#### Derived

[HiddenDocument](VM.Managed.DAFUL.HiddenDocument.md)

#### Implements

IObservableObject, 
IDisposableObject, 
ILinkable, 
ILinkContainerEvent, 
IVerifiable, 
IEnableManager, 
IRelatedDocument, 
[IHistorySupport](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMHist/Interfaces.cs), 
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
[IApplyInitialVelocity](VM.Managed.DAFUL.IApplyInitialVelocity.md)

#### Inherited Members

[DocumentAnalysis.m\_bSkipGravity](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_m\_bSkipGravity), 
[DocumentAnalysis.RegisterAddon\(\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_RegisterAddon), 
[DocumentAnalysis.IsContainSimulationScenarioInMap\(Scenario\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_IsContainSimulationScenarioInMap\_VM\_Managed\_Simulation\_Scenario\_), 
[DocumentAnalysis.GetStateFromActiveSimulationScenarioMap\(Scenario\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_GetStateFromActiveSimulationScenarioMap\_VM\_Managed\_Simulation\_Scenario\_), 
[DocumentAnalysis.SetStateFromActiveSimulationScenarioMap\(Scenario, bool\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_SetStateFromActiveSimulationScenarioMap\_VM\_Managed\_Simulation\_Scenario\_System\_Boolean\_), 
[DocumentAnalysis.AddConfiguration\(Configuration\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_AddConfiguration\_VM\_Managed\_Simulation\_Configuration\_), 
[DocumentAnalysis.RemoveConfiguration\(Configuration\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_RemoveConfiguration\_VM\_Managed\_Simulation\_Configuration\_), 
[DocumentAnalysis.ClearConfiguration\(\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_ClearConfiguration), 
[DocumentAnalysis.GetDefaultMaterial\(\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_GetDefaultMaterial), 
[DocumentAnalysis.GetDefaultMaterial\(bool\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_GetDefaultMaterial\_System\_Boolean\_), 
[DocumentAnalysis.IsExistDefaultMaterial\(\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_IsExistDefaultMaterial), 
[DocumentAnalysis.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[DocumentAnalysis.GetBodyAndTransformation\(ref List<Document3D.ExportBodyInfo\>\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_GetBodyAndTransformation\_System\_Collections\_Generic\_List\_VM\_Managed\_Document3D\_ExportBodyInfo\_\_\_), 
[DocumentAnalysis.IsEnabledImpl\(ObjectBase\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_IsEnabledImpl\_VM\_Managed\_ObjectBase\_), 
[DocumentAnalysis.SetEnableImpl\(ObjectBase, bool\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_SetEnableImpl\_VM\_Managed\_ObjectBase\_System\_Boolean\_), 
[DocumentAnalysis.SkipObjectInWriting\(ObjectBase\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_SkipObjectInWriting\_VM\_Managed\_ObjectBase\_), 
[DocumentAnalysis.OnPostMakeDocument\(DocCreateInfo\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_OnPostMakeDocument\_VM\_Managed\_DocCreateInfo\_), 
[DocumentAnalysis.OnPostMakeDocumentImpl\(DocCreateAnalysisInfo\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_OnPostMakeDocumentImpl\_VM\_Managed\_DocCreateAnalysisInfo\_), 
[DocumentAnalysis.InitializeSimParam\(\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_InitializeSimParam), 
[DocumentAnalysis.GetData\(XmlNode\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_GetData\_System\_Xml\_XmlNode\_), 
[DocumentAnalysis.SetData\(XmlNode\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_SetData\_System\_Xml\_XmlNode\_), 
[DocumentAnalysis.PostOpenDocument\(\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_PostOpenDocument), 
[DocumentAnalysis.GetAllArgumentList\(\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_GetAllArgumentList), 
[DocumentAnalysis.GetEntityRequest\(\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_GetEntityRequest), 
[DocumentAnalysis.GetSimulationConfigurationType\(\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_GetSimulationConfigurationType), 
[DocumentAnalysis.OnDeserialization\(object\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_OnDeserialization\_System\_Object\_), 
[DocumentAnalysis.CheckBeforeSave\(\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_CheckBeforeSave), 
[DocumentAnalysis.PostOpenDocumentAfterHookEvent\(\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_PostOpenDocumentAfterHookEvent), 
[DocumentAnalysis.ClearDocument\(\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_ClearDocument), 
[DocumentAnalysis.ReAssemblyImpl\(ObjectBase\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_ReAssemblyImpl\_VM\_Managed\_ObjectBase\_), 
[DocumentAnalysis.SkipDelete\(ObjectBase\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_SkipDelete\_VM\_Managed\_ObjectBase\_), 
[DocumentAnalysis.PostOpenDocumentAfterErrCheckEvent\(\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_PostOpenDocumentAfterErrCheckEvent), 
[DocumentAnalysis.PostCloseDocument\(\)](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_PostCloseDocument), 
[DocumentAnalysis.Configurations](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_Configurations), 
[DocumentAnalysis.CountOfMFLinearStaticSimulationConfigurations](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_CountOfMFLinearStaticSimulationConfigurations), 
[DocumentAnalysis.ActiveSimulationConfiguration](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_ActiveSimulationConfiguration), 
[DocumentAnalysis.Gravity](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_Gravity), 
[DocumentAnalysis.UseIncrementTime](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_UseIncrementTime), 
[DocumentAnalysis.IncrementTime](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_IncrementTime), 
[DocumentAnalysis.IconSize](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_IconSize), 
[DocumentAnalysis.SimulationScenarioTypeName](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_SimulationScenarioTypeName), 
[DocumentAnalysis.UseToolkitSubsystem](VM.Managed.DAFUL.DocumentAnalysis.md\#VM\_Managed\_DAFUL\_DocumentAnalysis\_UseToolkitSubsystem), 
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
Document3D.ExportCADBody\(string, List<Document3D.ExportBodyInfo\>, string, string, string, string, string\), 
Document3D.ExportCADBody\(string, List<Document3D.ExportBodyInfo\>, string\), 
Document3D.ExportCADFile\(string, string, string, string, string, string\), 
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
Document3D.LoadCADFile\(string, Document3D.CadImportColorType, Color, Document3D.CadImportResultType, Document3D.CadImportUnitType, string, string, string, string\), 
Document3D.LoadCADFile\(string, Document3D.CadImportResultType, string, string, string, string\), 
Document3D.PreloadCADFile\(string, Document3D.CadImportColorType, Color, Document3D.CadImportResultType, Document3D.CadImportUnitType, string, string, string, string, ref BuilderImport\[\]\), 
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

### <a id="VM_Managed_DAFUL_SubSystemDocument__ctor_System_UIntPtr_"></a> SubSystemDocument\(UIntPtr\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.SubSystemDocument" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SubSystemDocument(UIntPtr docCore)
```

#### Parameters

`docCore` UIntPtr

The document handle.

## Properties

### <a id="VM_Managed_DAFUL_SubSystemDocument_ApplyInitialVelocityImpl"></a> ApplyInitialVelocityImpl

Whether InitialVelocity is applicable or not

```csharp
protected virtual bool ApplyInitialVelocityImpl { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_SubSystemDocument_ChangeNewFilePath"></a> ChangeNewFilePath

Gets or sets the change new file path.

```csharp
[Obsolete]
public string ChangeNewFilePath { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_SubSystemDocument_ChangeNewFilePaths"></a> ChangeNewFilePaths

Gets or sets the change new file paths.

```csharp
public List<string> ChangeNewFilePaths { get; set; }
```

#### Property Value

 List<string\>

### <a id="VM_Managed_DAFUL_SubSystemDocument_ChangeOldFilePath"></a> ChangeOldFilePath

Gets or sets the change old file path.

```csharp
[Obsolete]
public string ChangeOldFilePath { get; set; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_SubSystemDocument_ChangeOldFilePaths"></a> ChangeOldFilePaths

Gets or sets the change old file paths.

```csharp
public List<string> ChangeOldFilePaths { get; set; }
```

#### Property Value

 List<string\>

### <a id="VM_Managed_DAFUL_SubSystemDocument_DocumentSessionOverride"></a> DocumentSessionOverride

Gets the document session override.

```csharp
public override SessionOverride DocumentSessionOverride { get; }
```

#### Property Value

 SessionOverride

### <a id="VM_Managed_DAFUL_SubSystemDocument_InitialCategories"></a> InitialCategories

Gets the initialize categories.

```csharp
protected override List<string> InitialCategories { get; }
```

#### Property Value

 List<string\>

### <a id="VM_Managed_DAFUL_SubSystemDocument_InitialVelocityImpl"></a> InitialVelocityImpl

Gets the initial velocity

```csharp
protected virtual double InitialVelocityImpl { get; }
```

#### Property Value

 double

### <a id="VM_Managed_DAFUL_SubSystemDocument_Interfaces"></a> Interfaces

Gets the interface manager.

```csharp
protected virtual InterfaceManager Interfaces { get; }
```

#### Property Value

 [InterfaceManager](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InterfaceManager.cs)

### <a id="VM_Managed_DAFUL_SubSystemDocument_SetDocumentSessionOverride"></a> SetDocumentSessionOverride

Sets the set document session override.

```csharp
public SessionOverride SetDocumentSessionOverride { set; }
```

#### Property Value

 SessionOverride

### <a id="VM_Managed_DAFUL_SubSystemDocument_SkipBindInterfaceWhenOpen"></a> SkipBindInterfaceWhenOpen

Gets the [skip binding interface when open].

```csharp
protected virtual bool SkipBindInterfaceWhenOpen { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_SubSystemDocument_TemplateXmlVersion"></a> TemplateXmlVersion

Gets the version of template XML.

```csharp
public string TemplateXmlVersion { get; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_SubSystemDocument_CheckMassPropForCADImport"></a> CheckMassPropForCADImport\(\)

Check mass property for CAD Import.

```csharp
public override string CheckMassPropForCADImport()
```

#### Returns

 string

### <a id="VM_Managed_DAFUL_SubSystemDocument_ClearDocument"></a> ClearDocument\(\)

Clears the document.

```csharp
protected override void ClearDocument()
```

### <a id="VM_Managed_DAFUL_SubSystemDocument_CreateAssemblyImpl"></a> CreateAssemblyImpl\(\)

Creates the assembly [implementation].

```csharp
protected override Assembly CreateAssemblyImpl()
```

#### Returns

 Assembly

The assembly.

### <a id="VM_Managed_DAFUL_SubSystemDocument_FindBodyFromCADBody_VM_Managed_ObjectBase_"></a> FindBodyFromCADBody\(ObjectBase\)

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

### <a id="VM_Managed_DAFUL_SubSystemDocument_FindCategory_System_String_"></a> FindCategory\(string\)

Finds the category.

```csharp
public override string FindCategory(string strType)
```

#### Parameters

`strType` string

The fullname of type.

#### Returns

 string

The category.

### <a id="VM_Managed_DAFUL_SubSystemDocument_FindObjectForSelection_VM_Managed_ObjectBase_VM_Managed_Document3D_OperationTypeForSelection_"></a> FindObjectForSelection\(ObjectBase, OperationTypeForSelection\)

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

### <a id="VM_Managed_DAFUL_SubSystemDocument_GetCADBodyNameAttribute_System_Collections_Generic_List_System_String___"></a> GetCADBodyNameAttribute\(ref List<string\>\)

Gets the CAD body name attributes.

```csharp
public override void GetCADBodyNameAttribute(ref List<string> lstName)
```

#### Parameters

`lstName` List<string\>

The output CAD body name attributes.

### <a id="VM_Managed_DAFUL_SubSystemDocument_GetImportCADBody"></a> GetImportCADBody\(\)

Gets the Import CAD body.

```csharp
public override List<ObjectBase> GetImportCADBody()
```

#### Returns

 List<ObjectBase\>

### <a id="VM_Managed_DAFUL_SubSystemDocument_GetReferDocument_System_Collections_Generic_List_VM_Managed_Document3D___"></a> GetReferDocument\(ref List<Document3D\>\)

Gets the refer document.

```csharp
public override void GetReferDocument(ref List<Document3D> lstDocument)
```

#### Parameters

`lstDocument` List<Document3D\>

The refer document container.

### <a id="VM_Managed_DAFUL_SubSystemDocument_GetReference_VM_Managed_ObjectBase_System_Collections_Generic_List_VM_Managed_Reference___System_Collections_Generic_List_VM_Managed_ObjectBase___"></a> GetReference\(ObjectBase, ref List<Reference\>, ref List<ObjectBase\>\)

Gets the reference of subsystem.

```csharp
public override void GetReference(ObjectBase obSub, ref List<Reference> lstRef, ref List<ObjectBase> lstOther)
```

#### Parameters

`obSub` ObjectBase

The sub system object.

`lstRef` List<Reference\>

The reference container.

`lstOther` List<ObjectBase\>

The other container for assembled body.

### <a id="VM_Managed_DAFUL_SubSystemDocument_GetRemovedConnectorForChangeAssembly_VM_Managed_DAFUL_ChangeAssemblyType_System_String_System_String_System_Collections_Generic_List_System_String__"></a> GetRemovedConnectorForChangeAssembly\(ChangeAssemblyType, string, string, List<string\>\)

Re-assemble for change assembly.

```csharp
public Dictionary<string, SortedSet<string>> GetRemovedConnectorForChangeAssembly(ChangeAssemblyType assmType, string strTargetName, string oldAssemblyPath, List<string> lstNewAssemblyPath)
```

#### Parameters

`assmType` [ChangeAssemblyType](VM.Managed.DAFUL.ChangeAssemblyType.md)

Type of the assembly.

`strTargetName` string

The target name.

`oldAssemblyPath` string

The old assembly path.

`lstNewAssemblyPath` List<string\>

The new assembly path list.

#### Returns

 Dictionary<string, SortedSet<string\>\>

### <a id="VM_Managed_DAFUL_SubSystemDocument_GetSimulationConfigurationType"></a> GetSimulationConfigurationType\(\)

Gets the type of the simulation configuration.

```csharp
public override string GetSimulationConfigurationType()
```

#### Returns

 string

The type of the simulation configuration.

### <a id="VM_Managed_DAFUL_SubSystemDocument_GetTransformationOfGlobal_VM_Managed_ObjectBase_"></a> GetTransformationOfGlobal\(ObjectBase\)

Gets the transformation of global.

```csharp
public TMatrix GetTransformationOfGlobal(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The object.

#### Returns

 TMatrix

### <a id="VM_Managed_DAFUL_SubSystemDocument_GetTransformationOfGlobal_VM_Managed_ObjectBase_System_String_"></a> GetTransformationOfGlobal\(ObjectBase, string\)

Gets the transformation of global.

```csharp
public TMatrix GetTransformationOfGlobal(ObjectBase ob, string strSubsystemName)
```

#### Parameters

`ob` ObjectBase

The object.

`strSubsystemName` string

The subsystem name.

#### Returns

 TMatrix

### <a id="VM_Managed_DAFUL_SubSystemDocument_HideObjectInReading"></a> HideObjectInReading\(\)

Hides the object in reading.

```csharp
protected override void HideObjectInReading()
```

### <a id="VM_Managed_DAFUL_SubSystemDocument_ImportCADBody_VM_Managed_CAD_BuilderImport___"></a> ImportCADBody\(BuilderImport\[\]\)

Imports the CAD body.

```csharp
protected override void ImportCADBody(BuilderImport[] arBuild)
```

#### Parameters

`arBuild` BuilderImport\[\]

The build object array.

### <a id="VM_Managed_DAFUL_SubSystemDocument_InitializeCategoryInfo_System_String_"></a> InitializeCategoryInfo\(string\)

Initializes the category information.

```csharp
public static void InitializeCategoryInfo(string strCategoryName)
```

#### Parameters

`strCategoryName` string

The category name.

### <a id="VM_Managed_DAFUL_SubSystemDocument_InitializeInterface"></a> InitializeInterface\(\)

Initializes the interface.

```csharp
protected virtual void InitializeInterface()
```

### <a id="VM_Managed_DAFUL_SubSystemDocument_InitializeSimParam"></a> InitializeSimParam\(\)

Initializes the simulation parameter.

```csharp
protected override void InitializeSimParam()
```

### <a id="VM_Managed_DAFUL_SubSystemDocument_LoadTemplateBasedXml_System_Xml_XmlReader_"></a> LoadTemplateBasedXml\(XmlReader\)

Loads the XML for template based document.

```csharp
protected override void LoadTemplateBasedXml(XmlReader reader)
```

#### Parameters

`reader` XmlReader

The reader.

### <a id="VM_Managed_DAFUL_SubSystemDocument_LoadTemplateBasedXml_System_Xml_XmlReader_System_Boolean_"></a> LoadTemplateBasedXml\(XmlReader, bool\)

Loads the XML for template based document.

```csharp
protected void LoadTemplateBasedXml(XmlReader reader, bool bAssembly)
```

#### Parameters

`reader` XmlReader

The reader.

`bAssembly` bool

if set to <code>true</code> [assembly].

### <a id="VM_Managed_DAFUL_SubSystemDocument_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

### <a id="VM_Managed_DAFUL_SubSystemDocument_OnPostMakeDocumentImpl_VM_Managed_DocCreateAnalysisInfo_"></a> OnPostMakeDocumentImpl\(DocCreateAnalysisInfo\)

Called when [post make document] [implementation].

```csharp
protected override void OnPostMakeDocumentImpl(DocCreateAnalysisInfo info)
```

#### Parameters

`info` [DocCreateAnalysisInfo](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/DocCreate3DInfo.cs)

The [analysis document create information].

### <a id="VM_Managed_DAFUL_SubSystemDocument_PossibleDifferentUnit_VM_Managed_DAFUL_SubSystemDocument_System_String__"></a> PossibleDifferentUnit\(SubSystemDocument, out string\)

Possible different unit.

```csharp
public bool PossibleDifferentUnit(SubSystemDocument document, out string strImportedDoc)
```

#### Parameters

`document` [SubSystemDocument](VM.Managed.DAFUL.SubSystemDocument.md)

The document to import.

`strImportedDoc` string

The imported document type name.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_SubSystemDocument_PossibleDifferentUnit_System_String__"></a> PossibleDifferentUnit\(out string\)

Possible different unit.

```csharp
public bool PossibleDifferentUnit(out string strSimulatedDoc)
```

#### Parameters

`strSimulatedDoc` string

The simulated document type name.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_SubSystemDocument_PossibleToImport_VM_Managed_DAFUL_SubSystemDocument_System_String__System_String__"></a> PossibleToImport\(SubSystemDocument, out string, out string\)

Possible to import subsystem.

```csharp
public virtual bool PossibleToImport(SubSystemDocument document, out string strDocBase, out string strDocNew)
```

#### Parameters

`document` [SubSystemDocument](VM.Managed.DAFUL.SubSystemDocument.md)

The document to import.

`strDocBase` string

The base document type name.

`strDocNew` string

The new document type name.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_SubSystemDocument_PostOpenDocument"></a> PostOpenDocument\(\)

Posts the open document.

```csharp
public override void PostOpenDocument()
```

### <a id="VM_Managed_DAFUL_SubSystemDocument_PostOpenDocumentAfterErrCheckEvent"></a> PostOpenDocumentAfterErrCheckEvent\(\)

Posts the open document after err check event.

```csharp
public override void PostOpenDocumentAfterErrCheckEvent()
```

### <a id="VM_Managed_DAFUL_SubSystemDocument_ReAssembleForChangeAssembly_VM_Managed_DAFUL_ChangeAssemblyType_System_String_System_String_System_Collections_Generic_List_System_String__"></a> ReAssembleForChangeAssembly\(ChangeAssemblyType, string, string, List<string\>\)

Re-assemble for change assembly.

```csharp
public void ReAssembleForChangeAssembly(ChangeAssemblyType assmType, string strTargetName, string oldAssemblyPath, List<string> lstNewAssemblyPath)
```

#### Parameters

`assmType` [ChangeAssemblyType](VM.Managed.DAFUL.ChangeAssemblyType.md)

Type of the assembly.

`strTargetName` string

The target name.

`oldAssemblyPath` string

The old assembly path.

`lstNewAssemblyPath` List<string\>

The new assembly path list.

### <a id="VM_Managed_DAFUL_SubSystemDocument_ReAssemblyImpl_VM_Managed_ObjectBase_"></a> ReAssemblyImpl\(ObjectBase\)

Reassembly [implementation].

```csharp
protected override bool ReAssemblyImpl(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The object.

#### Returns

 bool

<code>true</code> if success; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_SubSystemDocument_ReInitInterfaceForAssembly"></a> ReInitInterfaceForAssembly\(\)

Re initialize interface for assembly.

```csharp
public override void ReInitInterfaceForAssembly()
```

### <a id="VM_Managed_DAFUL_SubSystemDocument_RegisterAddon"></a> RegisterAddon\(\)

Register addon

```csharp
protected override void RegisterAddon()
```

### <a id="VM_Managed_DAFUL_SubSystemDocument_RenameEntityImpl_System_String_VM_Managed_ObjectBase_"></a> RenameEntityImpl\(string, ObjectBase\)

Rename entity [Implementation].

```csharp
protected override void RenameEntityImpl(string strOldName, ObjectBase namedObj)
```

#### Parameters

`strOldName` string

The old name.

`namedObj` ObjectBase

The new object.

### <a id="VM_Managed_DAFUL_SubSystemDocument_ReplaceCADBody_VM_Managed_CAD_BuilderImport___"></a> ReplaceCADBody\(BuilderImport\[\]\)

Replaces the CAD body.

```csharp
public override void ReplaceCADBody(BuilderImport[] arBuilder)
```

#### Parameters

`arBuilder` BuilderImport\[\]

The builder object array.

### <a id="VM_Managed_DAFUL_SubSystemDocument_SaveTemplateBasedXml_System_Xml_XmlWriter_"></a> SaveTemplateBasedXml\(XmlWriter\)

Saves the XML for template based document.

```csharp
protected override void SaveTemplateBasedXml(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

The writer.

### <a id="VM_Managed_DAFUL_SubSystemDocument_SaveTemplateBasedXml_System_Xml_XmlWriter_System_Boolean_"></a> SaveTemplateBasedXml\(XmlWriter, bool\)

Saves the XML for template based document.

```csharp
protected void SaveTemplateBasedXml(XmlWriter writer, bool bAssembly)
```

#### Parameters

`writer` XmlWriter

The writer.

`bAssembly` bool

if set to <code>true</code> [assembly].

### <a id="VM_Managed_DAFUL_SubSystemDocument_SkipDelete_VM_Managed_ObjectBase_"></a> SkipDelete\(ObjectBase\)

Skips the delete.

```csharp
protected override bool SkipDelete(ObjectBase obj)
```

#### Parameters

`obj` ObjectBase

The obj.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_SubSystemDocument_SkipObjectInWriting_VM_Managed_ObjectBase_"></a> SkipObjectInWriting\(ObjectBase\)

Skips the object in writing.

```csharp
protected override bool SkipObjectInWriting(ObjectBase obj)
```

#### Parameters

`obj` ObjectBase

The obj.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_SubSystemDocument_SkipShowHide_VM_Managed_ObjectBase_"></a> SkipShowHide\(ObjectBase\)

Skips the show hide.

```csharp
protected override bool SkipShowHide(ObjectBase obj)
```

#### Parameters

`obj` ObjectBase

The obj.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_SubSystemDocument_WriteMessageForShowHide"></a> WriteMessageForShowHide\(\)

Writes the message for show hide.

```csharp
protected override void WriteMessageForShowHide()
```

