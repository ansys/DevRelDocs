# Class HiddenDocument
<a id="VM_Managed_DAFUL_HiddenDocument"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the hidden document.

```csharp
public abstract class HiddenDocument : SubSystemDocument, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IEnableManager, IRelatedDocument, IHistorySupport, ITemplateDocument, ITreatValidObject, ISubSystemDocument, IDocumentAnalysis, IDocument3D, IHandledDocument, IDocument, IObject, IEventProvider, IContainer, ILinkContainer, IOwned, IHasID, IDocumentOwner, IInterfaceSupport, IApplyInitialVelocity, IHiddenDocument
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
[SubSystemDocument](VM.Managed.DAFUL.SubSystemDocument.md) ← 
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
[IApplyInitialVelocity](VM.Managed.DAFUL.IApplyInitialVelocity.md), 
IHiddenDocument

#### Inherited Members

[SubSystemDocument.OnPostMakeDocumentImpl\(DocCreateAnalysisInfo\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_OnPostMakeDocumentImpl\_VM\_Managed\_DocCreateAnalysisInfo\_), 
[SubSystemDocument.OnDeserialization\(object\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_OnDeserialization\_System\_Object\_), 
[SubSystemDocument.InitializeSimParam\(\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_InitializeSimParam), 
[SubSystemDocument.CreateAssemblyImpl\(\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_CreateAssemblyImpl), 
[SubSystemDocument.RenameEntityImpl\(string, ObjectBase\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_RenameEntityImpl\_System\_String\_VM\_Managed\_ObjectBase\_), 
[SubSystemDocument.RegisterAddon\(\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_RegisterAddon), 
[SubSystemDocument.FindCategory\(string\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_FindCategory\_System\_String\_), 
[SubSystemDocument.InitializeCategoryInfo\(string\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_InitializeCategoryInfo\_System\_String\_), 
[SubSystemDocument.PossibleToImport\(SubSystemDocument, out string, out string\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_PossibleToImport\_VM\_Managed\_DAFUL\_SubSystemDocument\_System\_String\_\_System\_String\_\_), 
[SubSystemDocument.PossibleDifferentUnit\(SubSystemDocument, out string\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_PossibleDifferentUnit\_VM\_Managed\_DAFUL\_SubSystemDocument\_System\_String\_\_), 
[SubSystemDocument.PossibleDifferentUnit\(out string\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_PossibleDifferentUnit\_System\_String\_\_), 
[SubSystemDocument.InitializeInterface\(\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_InitializeInterface), 
[SubSystemDocument.SaveTemplateBasedXml\(XmlWriter\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_SaveTemplateBasedXml\_System\_Xml\_XmlWriter\_), 
[SubSystemDocument.SaveTemplateBasedXml\(XmlWriter, bool\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_SaveTemplateBasedXml\_System\_Xml\_XmlWriter\_System\_Boolean\_), 
[SubSystemDocument.LoadTemplateBasedXml\(XmlReader\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_LoadTemplateBasedXml\_System\_Xml\_XmlReader\_), 
[SubSystemDocument.LoadTemplateBasedXml\(XmlReader, bool\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_LoadTemplateBasedXml\_System\_Xml\_XmlReader\_System\_Boolean\_), 
[SubSystemDocument.HideObjectInReading\(\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_HideObjectInReading), 
[SubSystemDocument.SkipObjectInWriting\(ObjectBase\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_SkipObjectInWriting\_VM\_Managed\_ObjectBase\_), 
[SubSystemDocument.CheckMassPropForCADImport\(\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_CheckMassPropForCADImport), 
[SubSystemDocument.ImportCADBody\(BuilderImport\[\]\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_ImportCADBody\_VM\_Managed\_CAD\_BuilderImport\_\_\_), 
[SubSystemDocument.ReplaceCADBody\(BuilderImport\[\]\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_ReplaceCADBody\_VM\_Managed\_CAD\_BuilderImport\_\_\_), 
[SubSystemDocument.GetCADBodyNameAttribute\(ref List<string\>\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_GetCADBodyNameAttribute\_System\_Collections\_Generic\_List\_System\_String\_\_\_), 
[SubSystemDocument.GetImportCADBody\(\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_GetImportCADBody), 
[SubSystemDocument.ReAssemblyImpl\(ObjectBase\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_ReAssemblyImpl\_VM\_Managed\_ObjectBase\_), 
[SubSystemDocument.ReInitInterfaceForAssembly\(\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_ReInitInterfaceForAssembly), 
[SubSystemDocument.GetReference\(ObjectBase, ref List<Reference\>, ref List<ObjectBase\>\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_GetReference\_VM\_Managed\_ObjectBase\_System\_Collections\_Generic\_List\_VM\_Managed\_Reference\_\_\_System\_Collections\_Generic\_List\_VM\_Managed\_ObjectBase\_\_\_), 
[SubSystemDocument.GetReferDocument\(ref List<Document3D\>\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_GetReferDocument\_System\_Collections\_Generic\_List\_VM\_Managed\_Document3D\_\_\_), 
[SubSystemDocument.GetSimulationConfigurationType\(\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_GetSimulationConfigurationType), 
[SubSystemDocument.ClearDocument\(\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_ClearDocument), 
[SubSystemDocument.GetTransformationOfGlobal\(ObjectBase\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_GetTransformationOfGlobal\_VM\_Managed\_ObjectBase\_), 
[SubSystemDocument.GetTransformationOfGlobal\(ObjectBase, string\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_GetTransformationOfGlobal\_VM\_Managed\_ObjectBase\_System\_String\_), 
[SubSystemDocument.ReAssembleForChangeAssembly\(ChangeAssemblyType, string, string, List<string\>\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_ReAssembleForChangeAssembly\_VM\_Managed\_DAFUL\_ChangeAssemblyType\_System\_String\_System\_String\_System\_Collections\_Generic\_List\_System\_String\_\_), 
[SubSystemDocument.GetRemovedConnectorForChangeAssembly\(ChangeAssemblyType, string, string, List<string\>\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_GetRemovedConnectorForChangeAssembly\_VM\_Managed\_DAFUL\_ChangeAssemblyType\_System\_String\_System\_String\_System\_Collections\_Generic\_List\_System\_String\_\_), 
[SubSystemDocument.SkipDelete\(ObjectBase\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_SkipDelete\_VM\_Managed\_ObjectBase\_), 
[SubSystemDocument.FindObjectForSelection\(ObjectBase, Document3D.OperationTypeForSelection\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_FindObjectForSelection\_VM\_Managed\_ObjectBase\_VM\_Managed\_Document3D\_OperationTypeForSelection\_), 
[SubSystemDocument.FindBodyFromCADBody\(ObjectBase\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_FindBodyFromCADBody\_VM\_Managed\_ObjectBase\_), 
[SubSystemDocument.SkipShowHide\(ObjectBase\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_SkipShowHide\_VM\_Managed\_ObjectBase\_), 
[SubSystemDocument.WriteMessageForShowHide\(\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_WriteMessageForShowHide), 
[SubSystemDocument.PostOpenDocument\(\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_PostOpenDocument), 
[SubSystemDocument.PostOpenDocumentAfterErrCheckEvent\(\)](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_PostOpenDocumentAfterErrCheckEvent), 
[SubSystemDocument.InitialCategories](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_InitialCategories), 
[SubSystemDocument.ApplyInitialVelocityImpl](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_ApplyInitialVelocityImpl), 
[SubSystemDocument.InitialVelocityImpl](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_InitialVelocityImpl), 
[SubSystemDocument.Interfaces](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_Interfaces), 
[SubSystemDocument.SkipBindInterfaceWhenOpen](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_SkipBindInterfaceWhenOpen), 
[SubSystemDocument.TemplateXmlVersion](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_TemplateXmlVersion), 
[SubSystemDocument.DocumentSessionOverride](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_DocumentSessionOverride), 
[SubSystemDocument.SetDocumentSessionOverride](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_SetDocumentSessionOverride), 
[SubSystemDocument.ChangeNewFilePath](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_ChangeNewFilePath), 
[SubSystemDocument.ChangeOldFilePath](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_ChangeOldFilePath), 
[SubSystemDocument.ChangeNewFilePaths](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_ChangeNewFilePaths), 
[SubSystemDocument.ChangeOldFilePaths](VM.Managed.DAFUL.SubSystemDocument.md\#VM\_Managed\_DAFUL\_SubSystemDocument\_ChangeOldFilePaths), 
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

### <a id="VM_Managed_DAFUL_HiddenDocument__ctor_System_UIntPtr_"></a> HiddenDocument\(UIntPtr\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.HiddenDocument" data-throw-if-not-resolved="false"></xref> class.

```csharp
public HiddenDocument(UIntPtr docCore)
```

#### Parameters

`docCore` UIntPtr

The document handle.

## Fields

### <a id="VM_Managed_DAFUL_HiddenDocument_m_canvas"></a> m\_canvas

The m_canvas

```csharp
protected Canvas m_canvas
```

#### Field Value

 [Canvas](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VM.CAD.Kernel/Render/Canvas.cs)

## Properties

### <a id="VM_Managed_DAFUL_HiddenDocument_RenderingMode"></a> RenderingMode

The rendering mode

```csharp
public virtual View3D.RenderingMode RenderingMode { get; }
```

#### Property Value

 View3D.RenderingMode

### <a id="VM_Managed_DAFUL_HiddenDocument_TargetDesign"></a> TargetDesign

Gets the target design.

```csharp
public virtual IOpenDesigner TargetDesign { get; }
```

#### Property Value

 IOpenDesigner

### <a id="VM_Managed_DAFUL_HiddenDocument_TargetDocument"></a> TargetDocument

Gets the target document.

```csharp
public virtual Document TargetDocument { get; }
```

#### Property Value

 Document

## Methods

### <a id="VM_Managed_DAFUL_HiddenDocument_ClearDocument"></a> ClearDocument\(\)

Clears the document.

```csharp
protected override void ClearDocument()
```

### <a id="VM_Managed_DAFUL_HiddenDocument_CloseDocumentCore"></a> CloseDocumentCore\(\)

Close document.

```csharp
protected virtual void CloseDocumentCore()
```

### <a id="VM_Managed_DAFUL_HiddenDocument_DrawCoordinate_System_Double_"></a> DrawCoordinate\(double\)

Draws the coordinate.

```csharp
public virtual void DrawCoordinate(double dIconSize)
```

#### Parameters

`dIconSize` double

Size of the d icon.

### <a id="VM_Managed_DAFUL_HiddenDocument_DrawCoordinateCore_VM_Managed_VectorBase_System_Double_"></a> DrawCoordinateCore\(VectorBase, double\)

Draws the coordinate.

```csharp
protected void DrawCoordinateCore(VectorBase vecStartPoint, double dIconSize)
```

#### Parameters

`vecStartPoint` VectorBase

`dIconSize` double

### <a id="VM_Managed_DAFUL_HiddenDocument_FindLocal_System_String_"></a> FindLocal\(string\)

Finds the local.

```csharp
public override IObjectBase FindLocal(string strName)
```

#### Parameters

`strName` string

Name of the string.

#### Returns

 IObjectBase

### <a id="VM_Managed_DAFUL_HiddenDocument_HideSubData_System_String_"></a> HideSubData\(string\)

Hide sub data.

```csharp
public virtual bool HideSubData(string strName)
```

#### Parameters

`strName` string

The sub data name.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_HiddenDocument_InitializeSimParam"></a> InitializeSimParam\(\)

Initializes the simulation parameter.

```csharp
protected override void InitializeSimParam()
```

### <a id="VM_Managed_DAFUL_HiddenDocument_OnPostMakeDocumentImpl_VM_Managed_DocCreateAnalysisInfo_"></a> OnPostMakeDocumentImpl\(DocCreateAnalysisInfo\)

Called when [post make document] [implementation].

```csharp
protected override void OnPostMakeDocumentImpl(DocCreateAnalysisInfo info)
```

#### Parameters

`info` [DocCreateAnalysisInfo](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMObjBase/DocCreate3DInfo.cs)

The [analysis document create information].

### <a id="VM_Managed_DAFUL_HiddenDocument_SetData_System_Xml_XmlNode_"></a> SetData\(XmlNode\)

Sets the analysis document information data.

```csharp
public override void SetData(XmlNode reader)
```

#### Parameters

`reader` XmlNode

The reader.

