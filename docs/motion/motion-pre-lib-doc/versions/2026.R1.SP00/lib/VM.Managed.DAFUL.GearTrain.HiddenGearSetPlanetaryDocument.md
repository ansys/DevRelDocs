# Class HiddenGearSetPlanetaryDocument
<a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetPlanetaryDocument"></a>

Namespace: [VM.Managed.DAFUL.GearTrain](VM.Managed.DAFUL.GearTrain.md)  
Assembly: VMDGearTrain.dll  

The hidden planetary gear set document

```csharp
public class HiddenGearSetPlanetaryDocument : HiddenGearSetDocumentBase, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IEnableManager, IRelatedDocument, IHistorySupport, ITemplateDocument, ITreatValidObject, ISubSystemDocument, IDocumentAnalysis, IDocument3D, IHandledDocument, IDocument, IObject, IEventProvider, IContainer, ILinkContainer, IOwned, IHasID, IDocumentOwner, IInterfaceSupport, IApplyInitialVelocity, IHiddenDocument
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
[SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs) ← 
[HiddenDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/HiddenDocument.cs) ← 
[HiddenDocumentForGearTrain](VM.Managed.DAFUL.GearTrain.HiddenDocumentForGearTrain.md) ← 
[HiddenGearSetDocumentBase](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md) ← 
[HiddenGearSetPlanetaryDocument](VM.Managed.DAFUL.GearTrain.HiddenGearSetPlanetaryDocument.md)

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
IApplyInitialVelocity, 
IHiddenDocument

#### Inherited Members

[HiddenGearSetDocumentBase.m\_bShow2D](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_m\_bShow2D), 
[HiddenGearSetDocumentBase.m\_bHideLOA](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_m\_bHideLOA), 
[HiddenGearSetDocumentBase.CreateAssemblyImpl\(\)](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_CreateAssemblyImpl), 
[HiddenGearSetDocumentBase.LinkRequestUpdate\(object, LinkEventArgs\)](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_LinkRequestUpdate\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[HiddenGearSetDocumentBase.LinkRequestDestroying\(object, LinkEventArgs\)](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_LinkRequestDestroying\_System\_Object\_VM\_Managed\_LinkEventArgs\_), 
[HiddenGearSetDocumentBase.GetCenterY\(double\[\]\)](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_GetCenterY\_System\_Double\_\_\_), 
[HiddenGearSetDocumentBase.GetExternalState\(bool\[\]\)](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_GetExternalState\_System\_Boolean\_\_\_), 
[HiddenGearSetDocumentBase.ModifiedToothStiffness\(GearGeometryInfo\)](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_ModifiedToothStiffness\_VM\_Managed\_DAFUL\_GearTrain\_GearGeometryInfo\_), 
[HiddenGearSetDocumentBase.SerializeResult\(PropertyGearSetBase, ref string\[\], ref List<GearShapeBase.InvolutePoint\>\[\], ref List<GearShapeBase.InvolutePoint\>\[\], ref List<Vector\>\[\]\)](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_SerializeResult\_VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_System\_String\_\_\_\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_InvolutePoint\_\_\_\_\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_InvolutePoint\_\_\_\_\_System\_Collections\_Generic\_List\_VM\_Managed\_Vector\_\_\_\_\_), 
[HiddenGearSetDocumentBase.DeserializeResult\(PropertyGearSetBase, string\[\], List<GearShapeBase.InvolutePoint\>\[\], List<GearShapeBase.InvolutePoint\>\[\], List<Vector\>\[\]\)](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_DeserializeResult\_VM\_Managed\_DAFUL\_GearTrain\_PropertyGearSetBase\_System\_String\_\_\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_InvolutePoint\_\_\_\_System\_Collections\_Generic\_List\_VM\_Managed\_DAFUL\_GearTrain\_GearShapeBase\_InvolutePoint\_\_\_\_System\_Collections\_Generic\_List\_VM\_Managed\_Vector\_\_\_\_), 
[HiddenGearSetDocumentBase.CalculateToothStiffness\(IGearSet, List<\(bool, int, string, string\)\>\)](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_CalculateToothStiffness\_VM\_Managed\_DAFUL\_GearTrain\_IGearSet\_System\_Collections\_Generic\_List\_System\_ValueTuple\_System\_Boolean\_System\_Int32\_System\_String\_System\_String\_\_\_), 
[HiddenGearSetDocumentBase.CalculateToothStiffnessInContactAnalysis\(HiddenGearSetDocumentBase, int\)](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_CalculateToothStiffnessInContactAnalysis\_VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_System\_Int32\_), 
[HiddenGearSetDocumentBase.CalculateToothStiffness\(IGearSet\)](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_CalculateToothStiffness\_VM\_Managed\_DAFUL\_GearTrain\_IGearSet\_), 
[HiddenGearSetDocumentBase.CheckToothStiffness\(HiddenGearSetDocumentBase\)](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_CheckToothStiffness\_VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_), 
[HiddenGearSetDocumentBase.Show2Dimension\(bool\)](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_Show2Dimension\_System\_Boolean\_), 
[HiddenGearSetDocumentBase.Show2DimensionCore\(int, bool\[\], double\[\], double\[\]\)](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_Show2DimensionCore\_System\_Int32\_System\_Boolean\_\_\_System\_Double\_\_\_System\_Double\_\_\_), 
[HiddenGearSetDocumentBase.DrawLOAForExternal\(string, double, double, double, double, OMatrix\)](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_DrawLOAForExternal\_System\_String\_System\_Double\_System\_Double\_System\_Double\_System\_Double\_VM\_Managed\_OMatrix\_), 
[HiddenGearSetDocumentBase.DrawLOAForInternal\(string, double, double, double, OMatrix\)](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_DrawLOAForInternal\_System\_String\_System\_Double\_System\_Double\_System\_Double\_VM\_Managed\_OMatrix\_), 
[HiddenGearSetDocumentBase.GetData\(XmlNode\)](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_GetData\_System\_Xml\_XmlNode\_), 
[HiddenGearSetDocumentBase.SetData\(XmlNode\)](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_SetData\_System\_Xml\_XmlNode\_), 
[HiddenGearSetDocumentBase.MakeXmlForDocumentPropertyGrid\(XmlDocument, ref string\)](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_MakeXmlForDocumentPropertyGrid\_System\_Xml\_XmlDocument\_System\_String\_\_), 
[HiddenGearSetDocumentBase.MakeXmlForDocumentPropertyGridForLOA\(XmlDocument, ref string, StringBuilder\)](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_MakeXmlForDocumentPropertyGridForLOA\_System\_Xml\_XmlDocument\_System\_String\_\_System\_Text\_StringBuilder\_), 
[HiddenGearSetDocumentBase.GetInfoFromDocumentPropertyGrid\(XmlDocument, XmlDocument\)](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_GetInfoFromDocumentPropertyGrid\_System\_Xml\_XmlDocument\_System\_Xml\_XmlDocument\_), 
[HiddenGearSetDocumentBase.DrawCoordinate\(double\)](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_DrawCoordinate\_System\_Double\_), 
[HiddenGearSetDocumentBase.RefreshGearBodyInNav\(\)](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_RefreshGearBodyInNav), 
[HiddenGearSetDocumentBase.CreateStiffness\(\)](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_CreateStiffness), 
[HiddenGearSetDocumentBase.NumberOfLOA](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_NumberOfLOA), 
[HiddenGearSetDocumentBase.HideLOA](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_HideLOA), 
[HiddenGearSetDocumentBase.HideBCD](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_HideBCD), 
[HiddenGearSetDocumentBase.GearSet](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_GearSet), 
[HiddenGearSetDocumentBase.\_GearSet](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_\_GearSet), 
[HiddenGearSetDocumentBase.Show2D](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_Show2D), 
[HiddenGearSetDocumentBase.DoingContactAnalysis](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_DoingContactAnalysis), 
[HiddenGearSetDocumentBase.TargetDesign](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_TargetDesign), 
[HiddenGearSetDocumentBase.AddToPropertyAllGear](VM.Managed.DAFUL.GearTrain.HiddenGearSetDocumentBase.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenGearSetDocumentBase\_AddToPropertyAllGear), 
[HiddenDocumentForGearTrain.Find\(string\)](VM.Managed.DAFUL.GearTrain.HiddenDocumentForGearTrain.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenDocumentForGearTrain\_Find\_System\_String\_), 
[HiddenDocumentForGearTrain.CloseDocumentCore\(\)](VM.Managed.DAFUL.GearTrain.HiddenDocumentForGearTrain.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenDocumentForGearTrain\_CloseDocumentCore), 
[HiddenDocumentForGearTrain.CheckActiveDocument\(Document3D, Document3D\)](VM.Managed.DAFUL.GearTrain.HiddenDocumentForGearTrain.md\#VM\_Managed\_DAFUL\_GearTrain\_HiddenDocumentForGearTrain\_CheckActiveDocument\_VM\_Managed\_Document3D\_VM\_Managed\_Document3D\_), 
[HiddenDocument.m\_canvas](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/HiddenDocument.cs), 
[HiddenDocument.ClearDocument\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/HiddenDocument.cs), 
[HiddenDocument.InitializeSimParam\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/HiddenDocument.cs), 
[HiddenDocument.OnPostMakeDocumentImpl\(DocCreateAnalysisInfo\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/HiddenDocument.cs), 
[HiddenDocument.DrawCoordinate\(double\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/HiddenDocument.cs), 
[HiddenDocument.HideSubData\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/HiddenDocument.cs), 
[HiddenDocument.DrawCoordinateCore\(VectorBase, double\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/HiddenDocument.cs), 
[HiddenDocument.CloseDocumentCore\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/HiddenDocument.cs), 
[HiddenDocument.SetData\(XmlNode\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/HiddenDocument.cs), 
[HiddenDocument.FindLocal\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/HiddenDocument.cs), 
[HiddenDocument.TargetDesign](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/HiddenDocument.cs), 
[HiddenDocument.TargetDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/HiddenDocument.cs), 
[HiddenDocument.RenderingMode](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/HiddenDocument.cs), 
[SubSystemDocument.OnPostMakeDocumentImpl\(DocCreateAnalysisInfo\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.OnDeserialization\(object\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.InitializeSimParam\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.CreateAssemblyImpl\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.RenameEntityImpl\(string, ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.RegisterAddon\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.FindCategory\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.InitializeCategoryInfo\(string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.PossibleToImport\(SubSystemDocument, out string, out string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.PossibleDifferentUnit\(SubSystemDocument, out string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.PossibleDifferentUnit\(out string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.InitializeInterface\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.SaveTemplateBasedXml\(XmlWriter\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.SaveTemplateBasedXml\(XmlWriter, bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.LoadTemplateBasedXml\(XmlReader\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.LoadTemplateBasedXml\(XmlReader, bool\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.HideObjectInReading\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.SkipObjectInWriting\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.CheckMassPropForCADImport\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.ImportCADBody\(BuilderImport\[\]\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.ReplaceCADBody\(BuilderImport\[\]\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.GetCADBodyNameAttribute\(ref List<string\>\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.GetImportCADBody\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.ReAssemblyImpl\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.ReInitInterfaceForAssembly\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.GetReference\(ObjectBase, ref List<Reference\>, ref List<ObjectBase\>\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.GetReferDocument\(ref List<Document3D\>\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.GetSimulationConfigurationType\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.ClearDocument\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.GetTransformationOfGlobal\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.GetTransformationOfGlobal\(ObjectBase, string\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.ReAssembleForChangeAssembly\(ChangeAssemblyType, string, string, List<string\>\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.GetRemovedConnectorForChangeAssembly\(ChangeAssemblyType, string, string, List<string\>\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.SkipDelete\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.FindObjectForSelection\(ObjectBase, Document3D.OperationTypeForSelection\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.FindBodyFromCADBody\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.SkipShowHide\(ObjectBase\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.WriteMessageForShowHide\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.PostOpenDocument\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.PostOpenDocumentAfterErrCheckEvent\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.InitialCategories](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.ApplyInitialVelocityImpl](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.InitialVelocityImpl](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.Interfaces](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.SkipBindInterfaceWhenOpen](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.TemplateXmlVersion](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.DocumentSessionOverride](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.SetDocumentSessionOverride](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.ChangeNewFilePath](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.ChangeOldFilePath](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.ChangeNewFilePaths](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
[SubSystemDocument.ChangeOldFilePaths](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs), 
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

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetPlanetaryDocument__ctor_System_UIntPtr_"></a> HiddenGearSetPlanetaryDocument\(UIntPtr\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.HiddenGearSetPlanetaryDocument" data-throw-if-not-resolved="false"></xref> class.

```csharp
public HiddenGearSetPlanetaryDocument(UIntPtr docCore)
```

#### Parameters

`docCore` UIntPtr

The document handle.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetPlanetaryDocument_InitialCategories"></a> InitialCategories

Gets the initial categories.

```csharp
protected override List<string> InitialCategories { get; }
```

#### Property Value

 List<string\>

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetPlanetaryDocument_NumberOfLOA"></a> NumberOfLOA

Gets number of LOA.

```csharp
protected override int NumberOfLOA { get; }
```

#### Property Value

 int

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetPlanetaryDocument_FindCategory_System_String_"></a> FindCategory\(string\)

Finds the category.

```csharp
public override string FindCategory(string strType)
```

#### Parameters

`strType` string

Type of the string.

#### Returns

 string

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetPlanetaryDocument_GetCenterY_System_Double___"></a> GetCenterY\(double\[\]\)

Get y coordinate of center.

```csharp
protected override void GetCenterY(double[] ardCenterY)
```

#### Parameters

`ardCenterY` double\[\]

The y coordinate of center.

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetPlanetaryDocument_GetExternalState_System_Boolean___"></a> GetExternalState\(bool\[\]\)

Get external state.

```csharp
protected override void GetExternalState(bool[] arbExternal)
```

#### Parameters

`arbExternal` bool\[\]

The external state array.

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetPlanetaryDocument_InitializeCategoryInfo_System_String_"></a> InitializeCategoryInfo\(string\)

Initializes the category information.

```csharp
public static void InitializeCategoryInfo(string strCategoryName)
```

#### Parameters

`strCategoryName` string

Name of the string category.

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetPlanetaryDocument_MakeXmlForDocumentPropertyGridForLOA_System_Xml_XmlDocument_System_String__System_Text_StringBuilder_"></a> MakeXmlForDocumentPropertyGridForLOA\(XmlDocument, ref string, StringBuilder\)

Makes the LOA XML for document property grid.

```csharp
protected override void MakeXmlForDocumentPropertyGridForLOA(XmlDocument xmlDom, ref string strGroupName, StringBuilder sb)
```

#### Parameters

`xmlDom` XmlDocument

The XML DOM.

`strGroupName` string

Name of the string group.

`sb` StringBuilder

The string builder.

### <a id="VM_Managed_DAFUL_GearTrain_HiddenGearSetPlanetaryDocument_Show2DimensionCore_System_Int32_System_Boolean___System_Double___System_Double___"></a> Show2DimensionCore\(int, bool\[\], double\[\], double\[\]\)

Show2s the dimension core.

```csharp
protected override void Show2DimensionCore(int nCount, bool[] ardExternal, double[] ardCenterY, double[] ardBCDR)
```

#### Parameters

`nCount` int

the count.

`ardExternal` bool\[\]

external state array.

`ardCenterY` double\[\]

center array.

`ardBCDR` double\[\]

BCDR array.

