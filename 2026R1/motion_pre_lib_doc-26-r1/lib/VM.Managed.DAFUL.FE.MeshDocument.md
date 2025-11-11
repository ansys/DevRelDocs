# Class MeshDocument
<a id="VM_Managed_DAFUL_FE_MeshDocument"></a>

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

This class is to represent the mesh document.

```csharp
public class MeshDocument : DocumentAnalysis, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IEnableManager, IRelatedDocument, IHistorySupport, ITemplateDocument, ITreatValidObject, IDocumentAnalysis, IDocument3D, IHandledDocument, IDocument, IObject, IEventProvider, IContainer, ILinkContainer, IOwned, IHasID, IDocumentOwner, IInterfaceSupport
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
[DocumentAnalysis](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs) ← 
[MeshDocument](VM.Managed.DAFUL.FE.MeshDocument.md)

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
IInterfaceSupport

#### Inherited Members

[DocumentAnalysis.m\_bSkipGravity](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.RegisterAddon\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.IsContainSimulationScenarioInMap\(Scenario\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.GetStateFromActiveSimulationScenarioMap\(Scenario\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.SetStateFromActiveSimulationScenarioMap\(Scenario, bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.AddConfiguration\(Configuration\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.RemoveConfiguration\(Configuration\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.ClearConfiguration\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.GetDefaultMaterial\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.GetDefaultMaterial\(bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.IsExistDefaultMaterial\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.LinkRequestUpdate\(object, LinkEventArgs\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.GetBodyAndTransformation\(ref List<Document3D.ExportBodyInfo\>\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.IsEnabledImpl\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.SetEnableImpl\(ObjectBase, bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.SkipObjectInWriting\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.OnPostMakeDocument\(DocCreateInfo\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.OnPostMakeDocumentImpl\(DocCreateAnalysisInfo\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.InitializeSimParam\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.GetData\(XmlNode\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.SetData\(XmlNode\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.PostOpenDocument\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.GetAllArgumentList\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.GetEntityRequest\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.GetSimulationConfigurationType\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.OnDeserialization\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.CheckBeforeSave\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.PostOpenDocumentAfterHookEvent\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.ClearDocument\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.ReAssemblyImpl\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.SkipDelete\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.PostOpenDocumentAfterErrCheckEvent\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.PostCloseDocument\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.Configurations](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.CountOfMFLinearStaticSimulationConfigurations](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.ActiveSimulationConfiguration](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.Gravity](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.UseIncrementTime](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.IncrementTime](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.IconSize](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.SimulationScenarioTypeName](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
[DocumentAnalysis.UseToolkitSubsystem](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/DocumentAnalysis.cs), 
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

### <a id="VM_Managed_DAFUL_FE_MeshDocument__ctor_System_UIntPtr_"></a> MeshDocument\(UIntPtr\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.MeshDocument" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MeshDocument(UIntPtr pDoc)
```

#### Parameters

`pDoc` UIntPtr

The document handle.

## Fields

### <a id="VM_Managed_DAFUL_FE_MeshDocument_g_bSkipDisplayModeShape"></a> g\_bSkipDisplayModeShape

```csharp
public static bool g_bSkipDisplayModeShape
```

#### Field Value

 bool

### <a id="VM_Managed_DAFUL_FE_MeshDocument_m_pDocMesh"></a> m\_pDocMesh

The mesh document pointer of kernel.

```csharp
protected IDocumentMesh* m_pDocMesh
```

#### Field Value

 IDocumentMesh\*

## Properties

### <a id="VM_Managed_DAFUL_FE_MeshDocument_InitialCategories"></a> InitialCategories

Gets the initialize categories.

```csharp
protected override List<string> InitialCategories { get; }
```

#### Property Value

 List<string\>

### <a id="VM_Managed_DAFUL_FE_MeshDocument_Interfaces"></a> Interfaces

Gets the interface manager.

```csharp
public virtual InterfaceManager Interfaces { get; set; }
```

#### Property Value

 [InterfaceManager](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/InterfaceManager.cs)

### <a id="VM_Managed_DAFUL_FE_MeshDocument_KeepOldKernelUnit"></a> KeepOldKernelUnit

Keep old kernel unit during convert ACIS to Parasolid

```csharp
protected override sealed bool KeepOldKernelUnit { get; }
```

#### Property Value

 bool

### <a id="VM_Managed_DAFUL_FE_MeshDocument_NodalFilePath"></a> NodalFilePath

Gets the file path for nodal.

```csharp
public string NodalFilePath { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_FE_MeshDocument_UseDFMFForNodal"></a> UseDFMFForNodal

Gets the flag about whether to use dfmf for nodal.

```csharp
public bool UseDFMFForNodal { get; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Managed_DAFUL_FE_MeshDocument_AfterDelete"></a> AfterDelete\(\)

```csharp
public override void AfterDelete()
```

### <a id="VM_Managed_DAFUL_FE_MeshDocument_AppendHashInformation_System_IO_BinaryWriter_System_String_System_String_"></a> AppendHashInformation\(BinaryWriter, string, string\)

```csharp
public static long AppendHashInformation(BinaryWriter binaryWriter, string categoryName, string strTextForHash)
```

#### Parameters

`binaryWriter` BinaryWriter

`categoryName` string

`strTextForHash` string

#### Returns

 long

### <a id="VM_Managed_DAFUL_FE_MeshDocument_BeforeDelete_VM_Managed_ObjectBase_"></a> BeforeDelete\(ObjectBase\)

```csharp
public override void BeforeDelete(ObjectBase obj)
```

#### Parameters

`obj` ObjectBase

### <a id="VM_Managed_DAFUL_FE_MeshDocument_BeforePostDeserialized"></a> BeforePostDeserialized\(\)

```csharp
public override void BeforePostDeserialized()
```

### <a id="VM_Managed_DAFUL_FE_MeshDocument_ClearDocument"></a> ClearDocument\(\)

Clears the document.

```csharp
protected override void ClearDocument()
```

### <a id="VM_Managed_DAFUL_FE_MeshDocument_CreateAssemblyImpl"></a> CreateAssemblyImpl\(\)

Creates the assembly [implementation].

```csharp
protected override Assembly CreateAssemblyImpl()
```

#### Returns

 Assembly

The assembly.

### <a id="VM_Managed_DAFUL_FE_MeshDocument_CreateEdgeset_System_Tuple_System_UInt32_System_UInt32____System_String_"></a> CreateEdgeset\(Tuple<uint, uint\>\[\], string\)

```csharp
public SetEdge CreateEdgeset(Tuple<uint, uint>[] edges, string strName)
```

#### Parameters

`edges` Tuple<uint, uint\>\[\]

`strName` string

#### Returns

 [SetEdge](VM.Managed.DAFUL.FE.SetEdge.md)

### <a id="VM_Managed_DAFUL_FE_MeshDocument_CreateEdgeset_System_Tuple_System_UInt32_System_UInt32____"></a> CreateEdgeset\(Tuple<uint, uint\>\[\]\)

```csharp
public SetEdge CreateEdgeset(Tuple<uint, uint>[] edges)
```

#### Parameters

`edges` Tuple<uint, uint\>\[\]

#### Returns

 [SetEdge](VM.Managed.DAFUL.FE.SetEdge.md)

### <a id="VM_Managed_DAFUL_FE_MeshDocument_CreateEdgeset_System_UInt32___"></a> CreateEdgeset\(uint\[\]\)

Create edgeset.

```csharp
public SetEdge CreateEdgeset(uint[] arNodeIndex)
```

#### Parameters

`arNodeIndex` uint\[\]

node index.

#### Returns

 [SetEdge](VM.Managed.DAFUL.FE.SetEdge.md)

The edgeset.

### <a id="VM_Managed_DAFUL_FE_MeshDocument_CreateInterfaceManager"></a> CreateInterfaceManager\(\)

Create interface manager.

```csharp
virtual void CreateInterfaceManager()
```

### <a id="VM_Managed_DAFUL_FE_MeshDocument_CreateMarkerOnNode_VM_Managed_DAFUL_FE_PointOnNode_VM_Managed_OrientationBase_"></a> CreateMarkerOnNode\(PointOnNode, OrientationBase\)

Create marker on node.

```csharp
public MarkerOnNode CreateMarkerOnNode(PointOnNode point, OrientationBase orientation)
```

#### Parameters

`point` [PointOnNode](VM.Managed.DAFUL.FE.PointOnNode.md)

point on node.

`orientation` OrientationBase

orientation.

#### Returns

 [MarkerOnNode](VM.Managed.DAFUL.FE.MarkerOnNode.md)

The marker on node.

### <a id="VM_Managed_DAFUL_FE_MeshDocument_CreateNodeset_System_UInt32___System_String_"></a> CreateNodeset\(uint\[\], string\)

Create nodeset.

```csharp
public SetNode CreateNodeset(uint[] nodes, string strName)
```

#### Parameters

`nodes` uint\[\]

node indexes.

`strName` string

Name.

#### Returns

 [SetNode](VM.Managed.DAFUL.FE.SetNode.md)

The nodeset.

### <a id="VM_Managed_DAFUL_FE_MeshDocument_CreateNodeset_System_UInt32___"></a> CreateNodeset\(uint\[\]\)

Create nodeset.

```csharp
public SetNode CreateNodeset(uint[] nodes)
```

#### Parameters

`nodes` uint\[\]

node indexes.

#### Returns

 [SetNode](VM.Managed.DAFUL.FE.SetNode.md)

The nodeset.

### <a id="VM_Managed_DAFUL_FE_MeshDocument_CreatePatchset_VM_Managed_DAFUL_FE_Patch___System_String_"></a> CreatePatchset\(Patch\[\], string\)

Create patchset.

```csharp
public SetPatch CreatePatchset(Patch[] patches, string strName)
```

#### Parameters

`patches` [Patch](VM.Managed.DAFUL.FE.Patch.md)\[\]

patch informations.

`strName` string

Name.

#### Returns

 [SetPatch](VM.Managed.DAFUL.FE.SetPatch.md)

The patchset.

### <a id="VM_Managed_DAFUL_FE_MeshDocument_CreatePatchset_VM_Managed_DAFUL_FE_Patch___"></a> CreatePatchset\(Patch\[\]\)

Create patchset.

```csharp
public SetPatch CreatePatchset(Patch[] patches)
```

#### Parameters

`patches` [Patch](VM.Managed.DAFUL.FE.Patch.md)\[\]

patch informations.

#### Returns

 [SetPatch](VM.Managed.DAFUL.FE.SetPatch.md)

The patchset.

### <a id="VM_Managed_DAFUL_FE_MeshDocument_DisplayModeShape_System_Int32_System_Double_"></a> DisplayModeShape\(int, double\)

Display mode shape with scale factor.

```csharp
public override void DisplayModeShape(int nModeSeq, double dScale)
```

#### Parameters

`nModeSeq` int

The sequence of mode.

`dScale` double

The scale factor.

### <a id="VM_Managed_DAFUL_FE_MeshDocument_EnableModeShape_System_Boolean_"></a> EnableModeShape\(bool\)

Disable the mode shape displaying.

```csharp
public override void EnableModeShape(bool bEnable)
```

#### Parameters

`bEnable` bool

The enable flag.

### <a id="VM_Managed_DAFUL_FE_MeshDocument_FindCategory_System_String_"></a> FindCategory\(string\)

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

### <a id="VM_Managed_DAFUL_FE_MeshDocument_FindLocal_System_String_"></a> FindLocal\(string\)

Finds an object that matches a specified name in local.

```csharp
public override IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` string

Name to search for.

#### Returns

 IObjectBase

An object that matches a specified name.

### <a id="VM_Managed_DAFUL_FE_MeshDocument_GetActiveMesh"></a> GetActiveMesh\(\)

Gets the active mesh.

```csharp
public Mesh GetActiveMesh()
```

#### Returns

 [Mesh](VM.Managed.DAFUL.FE.Mesh.md)

The active mesh.

### <a id="VM_Managed_DAFUL_FE_MeshDocument_GetData_System_Xml_XmlNode_"></a> GetData\(XmlNode\)

Gets the analysis document information data.

```csharp
public override void GetData(XmlNode writer)
```

#### Parameters

`writer` XmlNode

The writer.

### <a id="VM_Managed_DAFUL_FE_MeshDocument_GetHashFromDFMF_System_String_"></a> GetHashFromDFMF\(string\)

```csharp
public static string GetHashFromDFMF(string strDFMFFilePath)
```

#### Parameters

`strDFMFFilePath` string

#### Returns

 string

### <a id="VM_Managed_DAFUL_FE_MeshDocument_GetMeshFileType_System_String_"></a> GetMeshFileType\(string\)

Gets the mesh file type.

```csharp
public static uint GetMeshFileType(string strMeshFile)
```

#### Parameters

`strMeshFile` string

The mesh file path.

#### Returns

 uint

BDF, DAT(Nastran) = 1, DAT(ANSYS), INP, CDB = 2, UDFF = 4, DFMF = 5

### <a id="VM_Managed_DAFUL_FE_MeshDocument_GetObjectsForChangeAssembly"></a> GetObjectsForChangeAssembly\(\)

Gets objects for assembly changing.

```csharp
public override List<ObjectBase> GetObjectsForChangeAssembly()
```

#### Returns

 List<ObjectBase\>

### <a id="VM_Managed_DAFUL_FE_MeshDocument_GetUsedNodes"></a> GetUsedNodes\(\)

Get used nodes.

```csharp
public uint[] GetUsedNodes()
```

#### Returns

 uint\[\]

used node indexes.

### <a id="VM_Managed_DAFUL_FE_MeshDocument_ImportMesh_System_String_System_Drawing_Color_System_String_VM_Unit_System_Boolean_System_Boolean_"></a> ImportMesh\(string, Color, string, Unit, bool, bool\)

Import mesh.

```csharp
public void ImportMesh(string strMeshFile, Color color, string strModalFile, Unit unit, bool bDropOffHighOrder, bool bModalOnly)
```

#### Parameters

`strMeshFile` string

The mesh file path.

`color` Color

The mesh color.

`strModalFile` string

The modal file path.

`unit` Unit

The unit convert factor.

`bDropOffHighOrder` bool

The drop off high order flag.

`bModalOnly` bool

The modal only flag.

### <a id="VM_Managed_DAFUL_FE_MeshDocument_ImportMesh_System_String_System_Drawing_Color_System_String_VM_Unit_"></a> ImportMesh\(string, Color, string, Unit\)

Import mesh.

```csharp
public virtual void ImportMesh(string strMeshFile, Color color, string strModalFile, Unit unit)
```

#### Parameters

`strMeshFile` string

The mesh file path.

`color` Color

The mesh color.

`strModalFile` string

The modal file path.

`unit` Unit

The unit convert factor.

### <a id="VM_Managed_DAFUL_FE_MeshDocument_ImportMesh_System_String_System_String_VM_Unit_"></a> ImportMesh\(string, string, Unit\)

Import mesh.

```csharp
public void ImportMesh(string strMeshFile, string strModalFile, Unit unit)
```

#### Parameters

`strMeshFile` string

The mesh file path.

`strModalFile` string

The modal file path.

`unit` Unit

The unit convert factor.

### <a id="VM_Managed_DAFUL_FE_MeshDocument_ImportMesh_System_String_System_Drawing_Color_VM_Unit_System_Boolean_System_Boolean_VM_Models_Pre_FE_CreateSetData_System_String_System_String_"></a> ImportMesh\(string, Color, Unit, bool, bool, CreateSetData, string, string\)

Import mesh.

```csharp
public Mesh ImportMesh(string strMeshFile, Color color, Unit unit, bool bDropOffHighOrder, bool bModalOnly, CreateSetData createSet, string strRunDllPath, string strNF2DFPath)
```

#### Parameters

`strMeshFile` string

The mesh file path.

`color` Color

The mesh color.

`unit` Unit

The unit convert factor.

`bDropOffHighOrder` bool

The drop off high order flag.

`bModalOnly` bool

The modal only flag.

`createSet` CreateSetData

Create set.

`strRunDllPath` string

The rundll exe path.

`strNF2DFPath` string

The nfedf dll path.

#### Returns

 [Mesh](VM.Managed.DAFUL.FE.Mesh.md)

### <a id="VM_Managed_DAFUL_FE_MeshDocument_ImportMesh_System_String_System_Drawing_Color_VM_Unit_System_Boolean_System_Boolean_VM_Models_Pre_FE_CreateSetData_"></a> ImportMesh\(string, Color, Unit, bool, bool, CreateSetData\)

Import mesh.

```csharp
public Mesh ImportMesh(string strMeshFile, Color color, Unit unit, bool bDropOffHighOrder, bool bModalOnly, CreateSetData createSet)
```

#### Parameters

`strMeshFile` string

The mesh file path.

`color` Color

The mesh color.

`unit` Unit

The unit convert factor.

`bDropOffHighOrder` bool

The drop off high order flag.

`bModalOnly` bool

The modal only flag.

`createSet` CreateSetData

Create set.

#### Returns

 [Mesh](VM.Managed.DAFUL.FE.Mesh.md)

### <a id="VM_Managed_DAFUL_FE_MeshDocument_ImportMesh_System_String_System_Drawing_Color_VM_Unit_System_Boolean_System_Boolean_"></a> ImportMesh\(string, Color, Unit, bool, bool\)

Import mesh.

```csharp
public Mesh ImportMesh(string strMeshFile, Color color, Unit unit, bool bDropOffHighOrder, bool bModalOnly)
```

#### Parameters

`strMeshFile` string

The mesh file path.

`color` Color

The mesh color.

`unit` Unit

The unit convert factor.

`bDropOffHighOrder` bool

The drop off high order flag.

`bModalOnly` bool

The modal only flag.

#### Returns

 [Mesh](VM.Managed.DAFUL.FE.Mesh.md)

### <a id="VM_Managed_DAFUL_FE_MeshDocument_ImportMesh_System_String_System_Drawing_Color_VM_Unit_"></a> ImportMesh\(string, Color, Unit\)

Import mesh.

```csharp
public Mesh ImportMesh(string strMeshFile, Color color, Unit unit)
```

#### Parameters

`strMeshFile` string

The mesh file path.

`color` Color

The mesh color.

`unit` Unit

The unit convert factor.

#### Returns

 [Mesh](VM.Managed.DAFUL.FE.Mesh.md)

### <a id="VM_Managed_DAFUL_FE_MeshDocument_ImportMesh_System_String_VM_Unit_System_String_System_String_"></a> ImportMesh\(string, Unit, string, string\)

Import mesh.

```csharp
public Mesh ImportMesh(string strMeshFile, Unit unit, string strRunDll, string strNF2DF)
```

#### Parameters

`strMeshFile` string

The mesh file path.

`unit` Unit

The unit convert factor.

`strRunDll` string

The rundll exe path.

`strNF2DF` string

The nfedf dll path.

#### Returns

 [Mesh](VM.Managed.DAFUL.FE.Mesh.md)

### <a id="VM_Managed_DAFUL_FE_MeshDocument_ImportMesh_System_String_VM_Unit_"></a> ImportMesh\(string, Unit\)

Import mesh.

```csharp
public Mesh ImportMesh(string strMeshFile, Unit unit)
```

#### Parameters

`strMeshFile` string

The mesh file path.

`unit` Unit

The unit convert factor.

#### Returns

 [Mesh](VM.Managed.DAFUL.FE.Mesh.md)

### <a id="VM_Managed_DAFUL_FE_MeshDocument_InitializeCategoryInfo_System_String_"></a> InitializeCategoryInfo\(string\)

Initializes the category information.

```csharp
public static void InitializeCategoryInfo(string strCategoryName)
```

#### Parameters

`strCategoryName` string

The category name.

### <a id="VM_Managed_DAFUL_FE_MeshDocument_InitializeSimParam"></a> InitializeSimParam\(\)

Initializes the simulation parameter.

```csharp
protected override void InitializeSimParam()
```

### <a id="VM_Managed_DAFUL_FE_MeshDocument_IsExistMesh"></a> IsExistMesh\(\)

Determines whether is [exist mesh].

```csharp
public bool IsExistMesh()
```

#### Returns

 bool

<code>true</code> if is [exist mesh]; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_FE_MeshDocument_IsPatchsetMakeable"></a> IsPatchsetMakeable\(\)

Determines whether is [makeable patchset].

```csharp
public bool IsPatchsetMakeable()
```

#### Returns

 bool

<code>true</code> if is [makeable patchset]; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_FE_MeshDocument_LinkRequestUpdate_System_Object_VM_Managed_LinkEventArgs_"></a> LinkRequestUpdate\(object, LinkEventArgs\)

Request for update the linked object.

```csharp
protected override void LinkRequestUpdate(object obNotifier, LinkEventArgs arg)
```

#### Parameters

`obNotifier` object

The linked object.

`arg` LinkEventArgs

The <xref href="VM.Managed.LinkEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### <a id="VM_Managed_DAFUL_FE_MeshDocument_ModifyModal_System_String_VM_Unit_System_Boolean_"></a> ModifyModal\(string, Unit, bool\)

modify modal.

```csharp
public virtual void ModifyModal(string strModalFile, Unit unit, bool bOnlyDelete)
```

#### Parameters

`strModalFile` string

The modal file path.

`unit` Unit

The unit convert factor.

`bOnlyDelete` bool

### <a id="VM_Managed_DAFUL_FE_MeshDocument_OnDeserialization_System_Object_"></a> OnDeserialization\(object\)

Called when [deserialization].

```csharp
protected override void OnDeserialization(object sender)
```

#### Parameters

`sender` object

The sender.

### <a id="VM_Managed_DAFUL_FE_MeshDocument_OnPostMakeDocumentImpl_VM_Managed_DocCreateAnalysisInfo_"></a> OnPostMakeDocumentImpl\(DocCreateAnalysisInfo\)

Called when [post make document] [implementation].

```csharp
public override void OnPostMakeDocumentImpl(DocCreateAnalysisInfo docCreateAnalysisInfo)
```

#### Parameters

`docCreateAnalysisInfo` [DocCreateAnalysisInfo](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/DocCreate3DInfo.cs)

### <a id="VM_Managed_DAFUL_FE_MeshDocument_PostOpenDocument"></a> PostOpenDocument\(\)

Call when post [open document].

```csharp
public override void PostOpenDocument()
```

### <a id="VM_Managed_DAFUL_FE_MeshDocument_PostOpenDocumentAfterErrCheckEvent"></a> PostOpenDocumentAfterErrCheckEvent\(\)

Posts the open document after err check event.

```csharp
public override void PostOpenDocumentAfterErrCheckEvent()
```

### <a id="VM_Managed_DAFUL_FE_MeshDocument_RegisterAddon"></a> RegisterAddon\(\)

Register addon

```csharp
protected override void RegisterAddon()
```

### <a id="VM_Managed_DAFUL_FE_MeshDocument_SetAcitveMesh_System_UIntPtr_"></a> SetAcitveMesh\(UIntPtr\)

Sets the acitve mesh.

```csharp
public void SetAcitveMesh(UIntPtr pProxyMesh)
```

#### Parameters

`pProxyMesh` UIntPtr

The mesh proxy.

### <a id="VM_Managed_DAFUL_FE_MeshDocument_SetData_System_Xml_XmlNode_"></a> SetData\(XmlNode\)

Sets the analysis document information data.

```csharp
public override void SetData(XmlNode reader)
```

#### Parameters

`reader` XmlNode

The reader.

### <a id="VM_Managed_DAFUL_FE_MeshDocument_SetHandle_System_UIntPtr_"></a> SetHandle\(UIntPtr\)

Sets the document handle.

```csharp
protected override void SetHandle(UIntPtr pDocHandle)
```

#### Parameters

`pDocHandle` UIntPtr

The document handle.

### <a id="VM_Managed_DAFUL_FE_MeshDocument_SkipDelete_VM_Managed_ObjectBase_"></a> SkipDelete\(ObjectBase\)

Skips the delete.

```csharp
protected override bool SkipDelete(ObjectBase obj)
```

#### Parameters

`obj` ObjectBase

The obj.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_FE_MeshDocument_UpdateNavigatorForReference_VM_Managed_DAFUL_FE_Mesh_System_Boolean_"></a> UpdateNavigatorForReference\(Mesh, bool\)

Updates the navigator for reference.

```csharp
public void UpdateNavigatorForReference(Mesh mesh, bool bRemove)
```

#### Parameters

`mesh` [Mesh](VM.Managed.DAFUL.FE.Mesh.md)

The mesh.

`bRemove` bool

if set to <code>true</code> [b remove].

