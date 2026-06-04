#  Class ExportDFS

Namespace: [VM.Managed.DAFUL.Linear.Operation](VM.Managed.DAFUL.Linear.Operation.md)  
Assembly: VMOpLinear.dll  

The export solver dfs file operation

```csharp
public class ExportDFS : SimulateForComponentEigenvalue, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
SimulationRun ← 
[SimulateForComponentEigenvalue](VM.Managed.DAFUL.Linear.Operation.SimulateForComponentEigenvalue.md) ← 
[ExportDFS](VM.Managed.DAFUL.Linear.Operation.ExportDFS.md)

#### Implements

IOperation

#### Inherited Members

[SimulateForComponentEigenvalue.m\_lstObjEigen](VM.Managed.DAFUL.Linear.Operation.SimulateForComponentEigenvalue.md\#VM\_Managed\_DAFUL\_Linear\_Operation\_SimulateForComponentEigenvalue\_m\_lstObjEigen), 
[SimulateForComponentEigenvalue.m\_param](VM.Managed.DAFUL.Linear.Operation.SimulateForComponentEigenvalue.md\#VM\_Managed\_DAFUL\_Linear\_Operation\_SimulateForComponentEigenvalue\_m\_param), 
[SimulateForComponentEigenvalue.Execute\(\)](VM.Managed.DAFUL.Linear.Operation.SimulateForComponentEigenvalue.md\#VM\_Managed\_DAFUL\_Linear\_Operation\_SimulateForComponentEigenvalue\_Execute), 
[SimulateForComponentEigenvalue.ReadExtraJournal\(XmlElement\)](VM.Managed.DAFUL.Linear.Operation.SimulateForComponentEigenvalue.md\#VM\_Managed\_DAFUL\_Linear\_Operation\_SimulateForComponentEigenvalue\_ReadExtraJournal\_System\_Xml\_XmlElement\_), 
[SimulateForComponentEigenvalue.WriteExtraJournal\(XmlWriter\)](VM.Managed.DAFUL.Linear.Operation.SimulateForComponentEigenvalue.md\#VM\_Managed\_DAFUL\_Linear\_Operation\_SimulateForComponentEigenvalue\_WriteExtraJournal\_System\_Xml\_XmlWriter\_), 
[SimulateForComponentEigenvalue.SimulationRunImpl\(bool\)](VM.Managed.DAFUL.Linear.Operation.SimulateForComponentEigenvalue.md\#VM\_Managed\_DAFUL\_Linear\_Operation\_SimulateForComponentEigenvalue\_SimulationRunImpl\_System\_Boolean\_), 
[SimulateForComponentEigenvalue.AutoSetEigenvalueObject\(\)](VM.Managed.DAFUL.Linear.Operation.SimulateForComponentEigenvalue.md\#VM\_Managed\_DAFUL\_Linear\_Operation\_SimulateForComponentEigenvalue\_AutoSetEigenvalueObject), 
[SimulateForComponentEigenvalue.Success](VM.Managed.DAFUL.Linear.Operation.SimulateForComponentEigenvalue.md\#VM\_Managed\_DAFUL\_Linear\_Operation\_SimulateForComponentEigenvalue\_Success), 
[SimulateForComponentEigenvalue.Name](VM.Managed.DAFUL.Linear.Operation.SimulateForComponentEigenvalue.md\#VM\_Managed\_DAFUL\_Linear\_Operation\_SimulateForComponentEigenvalue\_Name), 
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

### <a id="VM_Managed_DAFUL_Linear_Operation_ExportDFS__ctor_VM_Managed_Document_"></a> ExportDFS\(Document\)

```csharp
public ExportDFS(Document doc)
```

#### Parameters

`doc` Document

### <a id="VM_Managed_DAFUL_Linear_Operation_ExportDFS__ctor_VM_Managed_Document_VM_Managed_ObjectBase_"></a> ExportDFS\(Document, ObjectBase\)

```csharp
public ExportDFS(Document doc, ObjectBase objSingle)
```

#### Parameters

`doc` Document

`objSingle` ObjectBase

### <a id="VM_Managed_DAFUL_Linear_Operation_ExportDFS__ctor_VM_Managed_Operation_JournalParameter_"></a> ExportDFS\(JournalParameter\)

```csharp
public ExportDFS(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

## Properties

### <a id="VM_Managed_DAFUL_Linear_Operation_ExportDFS_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_Linear_Operation_ExportDFS_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_Linear_Operation_ExportDFS_SimulationRunImpl_System_Boolean_"></a> SimulationRunImpl\(bool\)

```csharp
protected override void SimulationRunImpl(bool bWriteDFG)
```

#### Parameters

`bWriteDFG` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

