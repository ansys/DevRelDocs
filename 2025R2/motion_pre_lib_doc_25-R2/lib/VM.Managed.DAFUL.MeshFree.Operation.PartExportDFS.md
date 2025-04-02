#  Class PartExportDFS

Namespace: [VM.Managed.DAFUL.MeshFree.Operation](VM.Managed.DAFUL.MeshFree.Operation.md)  
Assembly: VMOpMeshFree.dll  

The export post dfs file operation

```csharp
public class PartExportDFS : SimulateForPartComponentEigenvalue, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
SimulationRun ← 
[SimulateForPartComponentEigenvalue](VM.Managed.DAFUL.MeshFree.Operation.SimulateForPartComponentEigenvalue.md) ← 
[PartExportDFS](VM.Managed.DAFUL.MeshFree.Operation.PartExportDFS.md)

#### Implements

IOperation

#### Inherited Members

[SimulateForPartComponentEigenvalue.m\_param](VM.Managed.DAFUL.MeshFree.Operation.SimulateForPartComponentEigenvalue.md\#VM\_Managed\_DAFUL\_MeshFree\_Operation\_SimulateForPartComponentEigenvalue\_m\_param), 
[SimulateForPartComponentEigenvalue.Execute\(\)](VM.Managed.DAFUL.MeshFree.Operation.SimulateForPartComponentEigenvalue.md\#VM\_Managed\_DAFUL\_MeshFree\_Operation\_SimulateForPartComponentEigenvalue\_Execute), 
[SimulateForPartComponentEigenvalue.ReadExtraJournal\(XmlElement\)](VM.Managed.DAFUL.MeshFree.Operation.SimulateForPartComponentEigenvalue.md\#VM\_Managed\_DAFUL\_MeshFree\_Operation\_SimulateForPartComponentEigenvalue\_ReadExtraJournal\_System\_Xml\_XmlElement\_), 
[SimulateForPartComponentEigenvalue.WriteExtraJournal\(XmlWriter\)](VM.Managed.DAFUL.MeshFree.Operation.SimulateForPartComponentEigenvalue.md\#VM\_Managed\_DAFUL\_MeshFree\_Operation\_SimulateForPartComponentEigenvalue\_WriteExtraJournal\_System\_Xml\_XmlWriter\_), 
[SimulateForPartComponentEigenvalue.SimulationRunImpl\(bool\)](VM.Managed.DAFUL.MeshFree.Operation.SimulateForPartComponentEigenvalue.md\#VM\_Managed\_DAFUL\_MeshFree\_Operation\_SimulateForPartComponentEigenvalue\_SimulationRunImpl\_System\_Boolean\_), 
[SimulateForPartComponentEigenvalue.AutoSetEigenvalueObject\(\)](VM.Managed.DAFUL.MeshFree.Operation.SimulateForPartComponentEigenvalue.md\#VM\_Managed\_DAFUL\_MeshFree\_Operation\_SimulateForPartComponentEigenvalue\_AutoSetEigenvalueObject), 
[SimulateForPartComponentEigenvalue.Name](VM.Managed.DAFUL.MeshFree.Operation.SimulateForPartComponentEigenvalue.md\#VM\_Managed\_DAFUL\_MeshFree\_Operation\_SimulateForPartComponentEigenvalue\_Name), 
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

### <a id="VM_Managed_DAFUL_MeshFree_Operation_PartExportDFS__ctor_VM_Managed_Document_"></a> PartExportDFS\(Document\)

```csharp
public PartExportDFS(Document doc)
```

#### Parameters

`doc` Document

### <a id="VM_Managed_DAFUL_MeshFree_Operation_PartExportDFS__ctor_VM_Managed_Operation_JournalParameter_"></a> PartExportDFS\(JournalParameter\)

```csharp
public PartExportDFS(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

## Properties

### <a id="VM_Managed_DAFUL_MeshFree_Operation_PartExportDFS_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_MeshFree_Operation_PartExportDFS_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_MeshFree_Operation_PartExportDFS_SimulationRunImpl_System_Boolean_"></a> SimulationRunImpl\(bool\)

```csharp
protected override void SimulationRunImpl(bool bWriteDFG)
```

#### Parameters

`bWriteDFG` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

