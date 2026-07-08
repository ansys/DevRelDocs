# Class DocumentAnalysis

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This class is to represent the analysis document.

```csharp
public abstract class DocumentAnalysis : Document3D, IObservableObject, IDisposableObject, ILinkable, ILinkContainerEvent, IVerifiable, IEnableManager, IRelatedDocument, IHistorySupport, ITemplateDocument, ITreatValidObject, IDocumentAnalysis, IDocument3D, IHandledDocument, IDocument, IObject, IEventProvider, IContainer, ILinkContainer, IOwned, IHasID, IDocumentOwner
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
[DocumentAnalysis](VM.Managed.DAFUL.DocumentAnalysis.md)

#### Derived

[PartDocument](VM.Managed.DAFUL.PartDocument.md), 
[SubSystemDocument](VM.Managed.DAFUL.SubSystemDocument.md)

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

### DocumentAnalysis\(UIntPtr\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.DocumentAnalysis" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DocumentAnalysis(UIntPtr docCore)
```

#### Parameters

`docCore` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The document handle.

## Fields

### m\_bSkipGravity

The flag to skip gravity

```csharp
protected bool m_bSkipGravity
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### ActiveSimulationConfiguration

Gets or sets the active simulation configuration.

```csharp
public Configuration ActiveSimulationConfiguration { get; set; }
```

#### Property Value

 [Configuration](VM.Managed.Simulation.Configuration.md)

### Configurations

Gets or sets the configurations.

```csharp
public Configuration[] Configurations { get; set; }
```

#### Property Value

 [Configuration](VM.Managed.Simulation.Configuration.md)\[\]

### CountOfMFLinearStaticSimulationConfigurations

Gets the count of mf linear static simulation configurations.

```csharp
public int CountOfMFLinearStaticSimulationConfigurations { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Gravity

Gets or sets the gravity.

```csharp
public Gravity Gravity { get; set; }
```

#### Property Value

 Gravity

### IconSize

Sets the size of the icon.

```csharp
public override double IconSize { set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### IncrementTime

Gets or sets the increment time.

```csharp
public double IncrementTime { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

### SimulationScenarioTypeName

Gets the name of the simulation scenario type.

```csharp
public virtual string SimulationScenarioTypeName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### UseIncrementTime

Gets or sets the use increment time.

```csharp
public bool UseIncrementTime { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UseToolkitSubsystem

Determines whether this used toolkit subsystem.

```csharp
public virtual bool UseToolkitSubsystem { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### AddConfiguration\(Configuration\)

Adds the configuration.

```csharp
public bool AddConfiguration(Configuration config)
```

#### Parameters

`config` [Configuration](VM.Managed.Simulation.Configuration.md)

The configuration.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CheckBeforeSave\(\)

Check before save.

```csharp
protected override void CheckBeforeSave()
```

### ClearConfiguration\(\)

Clears the configuration.

```csharp
protected void ClearConfiguration()
```

### ClearDocument\(\)

Clears the document.

```csharp
protected override void ClearDocument()
```

### GetAllArgumentList\(\)

Get all argument list

```csharp
public override List<KeyValuePair<string, string>> GetAllArgumentList()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

The argument list

### GetBodyAndTransformation\(ref List<ExportBodyInfo\>\)

Get body and transformation information.

```csharp
public override void GetBodyAndTransformation(ref List<Document3D.ExportBodyInfo> lstBodyInfo)
```

#### Parameters

`lstBodyInfo` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Document3D.ExportBodyInfo\>

The body information.

### GetData\(XmlNode\)

Gets the analysis document information data.

```csharp
public override void GetData(XmlNode writer)
```

#### Parameters

`writer` [XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)

The writer.

### GetDefaultMaterial\(\)

Gets the default material.

```csharp
public IMaterial GetDefaultMaterial()
```

#### Returns

 IMaterial

### GetDefaultMaterial\(bool\)

Gets the default material.

```csharp
public IMaterial GetDefaultMaterial(bool bAdd)
```

#### Parameters

`bAdd` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The [add to document] flag.

#### Returns

 IMaterial

### GetEntityRequest\(\)

Gets entity request

```csharp
public Dictionary<IObjectBase, bool> GetEntityRequest()
```

#### Returns

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary\-2)<IObjectBase, [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### GetSimulationConfigurationType\(\)

Gets the type of the simulation configuration.

```csharp
public virtual string GetSimulationConfigurationType()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The simulation configuration type.

### GetStateFromActiveSimulationScenarioMap\(Scenario\)

Gets the state from active simulation scenario map.

```csharp
public bool GetStateFromActiveSimulationScenarioMap(Scenario ss)
```

#### Parameters

`ss` [Scenario](VM.Managed.Simulation.Scenario.md)

The ss.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### InitializeSimParam\(\)

Initializes the simulation parameter.

```csharp
protected abstract void InitializeSimParam()
```

### IsContainSimulationScenarioInMap\(Scenario\)

Determines whether [is contain simulation scenario in map] [the specified ss].

```csharp
public bool IsContainSimulationScenarioInMap(Scenario ss)
```

#### Parameters

`ss` [Scenario](VM.Managed.Simulation.Scenario.md)

The ss.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### IsEnabledImpl\(ObjectBase\)

Determines whether is enabled [the specified object] [implementation].

```csharp
protected override bool IsEnabledImpl(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if is enabled [the specified object]; otherwise, <code>false</code>.

### IsExistDefaultMaterial\(\)

Determines whether [is exist default material].

```csharp
public bool IsExistDefaultMaterial()
```

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

### OnPostMakeDocument\(DocCreateInfo\)

Called when [post make document].

```csharp
protected override sealed void OnPostMakeDocument(DocCreateInfo info)
```

#### Parameters

`info` DocCreateInfo

The [document create information].

### OnPostMakeDocumentImpl\(DocCreateAnalysisInfo\)

Called when [post make document] [implementation].

```csharp
protected virtual void OnPostMakeDocumentImpl(DocCreateAnalysisInfo info)
```

#### Parameters

`info` DocCreateAnalysisInfo

The [analysis document create information].

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

### PostOpenDocumentAfterErrCheckEvent\(\)

called after open document

```csharp
public override void PostOpenDocumentAfterErrCheckEvent()
```

### PostOpenDocumentAfterHookEvent\(\)

Call when post [open document] after hook event.

```csharp
public override void PostOpenDocumentAfterHookEvent()
```

### ReAssemblyImpl\(ObjectBase\)

Reassembly [implementation].

```csharp
protected override bool ReAssemblyImpl(ObjectBase ob)
```

#### Parameters

`ob` ObjectBase

The object.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if success; otherwise, <code>false</code>.

### RegisterAddon\(\)

Register addon

```csharp
protected override void RegisterAddon()
```

### RemoveConfiguration\(Configuration\)

Removes the configuration.

```csharp
public bool RemoveConfiguration(Configuration config)
```

#### Parameters

`config` [Configuration](VM.Managed.Simulation.Configuration.md)

The configuration.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SetData\(XmlNode\)

Sets the analysis document information data.

```csharp
public override void SetData(XmlNode reader)
```

#### Parameters

`reader` [XmlNode](https://learn.microsoft.com/dotnet/api/system.xml.xmlnode)

The reader.

### SetEnableImpl\(ObjectBase, bool\)

Sets the enable [implementation].

```csharp
protected override void SetEnableImpl(ObjectBase ob, bool bEnable)
```

#### Parameters

`ob` ObjectBase

The object.

`bEnable` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> enable.

### SetStateFromActiveSimulationScenarioMap\(Scenario, bool\)

Sets the state from active simulation scenario map.

```csharp
public void SetStateFromActiveSimulationScenarioMap(Scenario ss, bool bActive)
```

#### Parameters

`ss` [Scenario](VM.Managed.Simulation.Scenario.md)

The ss.

`bActive` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SkipDelete\(ObjectBase\)

Skips the delete.

```csharp
protected override bool SkipDelete(ObjectBase obj)
```

#### Parameters

`obj` ObjectBase

The obj.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SkipObjectInWriting\(ObjectBase\)

Skips the object in writing.

```csharp
protected override bool SkipObjectInWriting(ObjectBase obj)
```

#### Parameters

`obj` ObjectBase

The obj.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


