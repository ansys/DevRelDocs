#  Class MFConfigModify

Namespace: [VM.Managed.DAFUL.MeshFree.Operation](VM.Managed.DAFUL.MeshFree.Operation.md)  
Assembly: VMOpMeshFree.dll  

The modify MF solver config operation

```csharp
public class MFConfigModify : ShowMeshFreeSimulationDlg, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
SimulationRun ← 
ShowSimulationDlg ← 
[ShowMeshFreeSimulationDlg](VM.Managed.DAFUL.MeshFree.Operation.ShowMeshFreeSimulationDlg.md) ← 
[MFConfigModify](VM.Managed.DAFUL.MeshFree.Operation.MFConfigModify.md)

#### Implements

IOperation

#### Inherited Members

[ShowMeshFreeSimulationDlg.ShowDialog\(\)](VM.Managed.DAFUL.MeshFree.Operation.ShowMeshFreeSimulationDlg.md\#VM\_Managed\_DAFUL\_MeshFree\_Operation\_ShowMeshFreeSimulationDlg\_ShowDialog), 
[ShowMeshFreeSimulationDlg.PrepareForm\(SimulationFormBase\)](VM.Managed.DAFUL.MeshFree.Operation.ShowMeshFreeSimulationDlg.md\#VM\_Managed\_DAFUL\_MeshFree\_Operation\_ShowMeshFreeSimulationDlg\_PrepareForm\_VM\_Managed\_DAFUL\_Pre\_Forms\_SimulationFormBase\_), 
[ShowMeshFreeSimulationDlg.ExecuteImplNotPrePareSimulation\(\)](VM.Managed.DAFUL.MeshFree.Operation.ShowMeshFreeSimulationDlg.md\#VM\_Managed\_DAFUL\_MeshFree\_Operation\_ShowMeshFreeSimulationDlg\_ExecuteImplNotPrePareSimulation), 
[ShowMeshFreeSimulationDlg.UpdateUI\(IUIUpdate, Document\)](VM.Managed.DAFUL.MeshFree.Operation.ShowMeshFreeSimulationDlg.md\#VM\_Managed\_DAFUL\_MeshFree\_Operation\_ShowMeshFreeSimulationDlg\_UpdateUI\_VM\_Managed\_UI\_IUIUpdate\_VM\_Managed\_Document\_), 
[ShowMeshFreeSimulationDlg.Name](VM.Managed.DAFUL.MeshFree.Operation.ShowMeshFreeSimulationDlg.md\#VM\_Managed\_DAFUL\_MeshFree\_Operation\_ShowMeshFreeSimulationDlg\_Name), 
ShowSimulationDlg.Execute\(\), 
ShowSimulationDlg.SimulationRunImpl\(bool\), 
ShowSimulationDlg.ExecuteImpl\(\), 
ShowSimulationDlg.Name, 
SimulationRun.m\_strSimulationConfiguration, 
SimulationRun.m\_strFilePath, 
SimulationRun.m\_strUserDefinedScenarioTypeName, 
SimulationRun.Execute\(\), 
SimulationRun.GetInformation\(XmlWriter\), 
SimulationRun.ReadExtraJournal\(XmlElement\), 
SimulationRun.WriteExtraJournal\(XmlWriter\), 
SimulationRun.UpdateUI\(IUIUpdate, Document\), 
SimulationRun.SimulationRunImpl\(bool\), 
SimulationRun.PrepareSimulationSetting\(\), 
SimulationRun.ShowDialog\(\), 
SimulationRun.PrepareForm\(SimulationFormBase\), 
SimulationRun.ApplySimulation\(SimulationFormBase\), 
SimulationRun.ExecuteImpl\(\), 
SimulationRun.ExecuteImplNotPrePareSimulation\(\), 
SimulationRun.Name, 
SimulationRun.SimulationForm, 
SimulationRun.NotPrePareSimulation, 
SimulationRun.FormResult, 
SimulationRun.SimParam, 
SimulationRun.SkipCheckDirectory, 
SimulationRun.FilePath, 
OperationBase.g\_bRedrawKernel, 
OperationBase.g\_bVerify, 
OperationBase.g\_bSkipAddEvent, 
OperationBase.g\_bDupicateMsg, 
OperationBase.m\_bIsHistoryMerge, 
OperationBase.Execute\(\), 
OperationBase.PostExecute\(\), 
OperationBase.GetInformation\(XmlWriter\), 
OperationBase.Create\(string, View, object\), 
OperationBase.Create\(string, IDocument, object\), 
OperationBase.Create\(string, object\), 
OperationBase.Create\(string\), 
OperationBase.StartSession\(\), 
OperationBase.StartSession\(OperationBase, OperationBase.PostOperation\), 
OperationBase.StartSession\(OperationBase\), 
OperationBase.StartSessionAndWait\(\), 
OperationBase.StartSessionAndWait\(OperationBase, OperationBase.PostOperation\), 
OperationBase.StartSessionAndWait\(OperationBase\), 
OperationBase.Initialize\(OperationBase.ShowVerifyResult\), 
OperationBase.RecordJournal\(OperationBase\), 
OperationBase.UseSession\(string\), 
OperationBase.raise\_OnOperationStatusChanged\(object, OperationStatusEventArgs\), 
OperationBase.raise\_OnEndOperation\(object, EventArgs\), 
OperationBase.ClearCurrentMark\(string\), 
OperationBase.ClearCurrentMark\(IDocument\), 
OperationBase.ClearCurrentMark\(\), 
OperationBase.GlobalOverride, 
OperationBase.IsDoingThread, 
OperationBase.ExecuteMacro, 
OperationBase.SimStatus, 
OperationBase.Status, 
OperationBase.autoEvents, 
OperationBase.IsHistoryMerge, 
OperationBase.SkipClearTemporaryLinkContainer, 
OperationBase.PostExecuteClearTemporaryLinkContainer, 
OperationBase.SkipEndOperation, 
OperationBase.UseMacro, 
OperationBase.MarkStatus, 
OperationBase.UseThread, 
OperationBase.Name, 
OperationBase.ExecutableOnHold, 
OperationBase.Override, 
OperationBase.Parameter, 
OperationBase.View, 
OperationBase.Document, 
OperationBase.OnEndOperation, 
OperationBase.OnOperationStatusChanged

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_MeshFree_Operation_MFConfigModify__ctor_VM_Managed_Document_"></a> MFConfigModify\(Document\)

```csharp
public MFConfigModify(Document doc)
```

#### Parameters

`doc` Document

### <a id="VM_Managed_DAFUL_MeshFree_Operation_MFConfigModify__ctor_VM_Managed_Operation_JournalParameter_"></a> MFConfigModify\(JournalParameter\)

```csharp
public MFConfigModify(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

## Properties

### <a id="VM_Managed_DAFUL_MeshFree_Operation_MFConfigModify_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_MeshFree_Operation_MFConfigModify_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_MeshFree_Operation_MFConfigModify_PrepareForm_VM_Managed_DAFUL_Pre_Forms_SimulationFormBase_"></a> PrepareForm\(SimulationFormBase\)

```csharp
protected override void PrepareForm(SimulationFormBase form)
```

#### Parameters

`form` SimulationFormBase

### <a id="VM_Managed_DAFUL_MeshFree_Operation_MFConfigModify_UpdateUI_VM_Managed_UI_IUIUpdate_VM_Managed_Document_"></a> UpdateUI\(IUIUpdate, Document\)

```csharp
public static void UpdateUI(IUIUpdate updater, Document doc)
```

#### Parameters

`updater` IUIUpdate

`doc` Document

