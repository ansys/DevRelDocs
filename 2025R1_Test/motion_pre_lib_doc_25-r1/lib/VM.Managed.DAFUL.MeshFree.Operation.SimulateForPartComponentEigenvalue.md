#  Class SimulateForPartComponentEigenvalue

Namespace: [VM.Managed.DAFUL.MeshFree.Operation](VM.Managed.DAFUL.MeshFree.Operation.md)  
Assembly: VMOpMeshFree.dll  

This Class is SimulateForPartComponentEigenvalue

```csharp
public class SimulateForPartComponentEigenvalue : SimulationRun, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
SimulationRun ← 
[SimulateForPartComponentEigenvalue](VM.Managed.DAFUL.MeshFree.Operation.SimulateForPartComponentEigenvalue.md)

#### Derived

[PartExportDFG](VM.Managed.DAFUL.MeshFree.Operation.PartExportDFG.md), 
[PartExportDFS](VM.Managed.DAFUL.MeshFree.Operation.PartExportDFS.md), 
[PartExportXML](VM.Managed.DAFUL.MeshFree.Operation.PartExportXML.md)

#### Implements

IOperation

#### Inherited Members

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

### <a id="VM_Managed_DAFUL_MeshFree_Operation_SimulateForPartComponentEigenvalue__ctor_VM_Managed_Document_"></a> SimulateForPartComponentEigenvalue\(Document\)

```csharp
public SimulateForPartComponentEigenvalue(Document doc)
```

#### Parameters

`doc` Document

### <a id="VM_Managed_DAFUL_MeshFree_Operation_SimulateForPartComponentEigenvalue__ctor_VM_Managed_Operation_JournalParameter_"></a> SimulateForPartComponentEigenvalue\(JournalParameter\)

```csharp
public SimulateForPartComponentEigenvalue(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

## Fields

### <a id="VM_Managed_DAFUL_MeshFree_Operation_SimulateForPartComponentEigenvalue_m_param"></a> m\_param

```csharp
protected SimulationScenarioEigenvalue.SolvingParam m_param
```

#### Field Value

 SimulationScenarioEigenvalue.SolvingParam

## Properties

### <a id="VM_Managed_DAFUL_MeshFree_Operation_SimulateForPartComponentEigenvalue_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_MeshFree_Operation_SimulateForPartComponentEigenvalue_AutoSetEigenvalueObject"></a> AutoSetEigenvalueObject\(\)

```csharp
protected bool AutoSetEigenvalueObject()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_MeshFree_Operation_SimulateForPartComponentEigenvalue_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_MeshFree_Operation_SimulateForPartComponentEigenvalue_ReadExtraJournal_System_Xml_XmlElement_"></a> ReadExtraJournal\(XmlElement\)

```csharp
public override void ReadExtraJournal(XmlElement nodeArg)
```

#### Parameters

`nodeArg` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

### <a id="VM_Managed_DAFUL_MeshFree_Operation_SimulateForPartComponentEigenvalue_SimulationRunImpl_System_Boolean_"></a> SimulationRunImpl\(bool\)

```csharp
protected override void SimulationRunImpl(bool bWriteDFG)
```

#### Parameters

`bWriteDFG` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_MeshFree_Operation_SimulateForPartComponentEigenvalue_WriteExtraJournal_System_Xml_XmlWriter_"></a> WriteExtraJournal\(XmlWriter\)

```csharp
public override void WriteExtraJournal(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

