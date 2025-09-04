#  Class ShowSimulationInShaftSet

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Show simulation in shaftset

```csharp
public class ShowSimulationInShaftSet : ShowSimulationBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
SimulationRun ← 
ShowSimulationDlg ← 
[ShowSimulationBase](VM.Managed.DAFUL.GearTrain.Operation.ShowSimulationBase.md) ← 
[ShowSimulationInShaftSet](VM.Managed.DAFUL.GearTrain.Operation.ShowSimulationInShaftSet.md)

#### Implements

IOperation

#### Inherited Members

[ShowSimulationBase.Execute\(\)](VM.Managed.DAFUL.GearTrain.Operation.ShowSimulationBase.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_ShowSimulationBase\_Execute), 
[ShowSimulationBase.PrepareForm\(SimulationFormBase\)](VM.Managed.DAFUL.GearTrain.Operation.ShowSimulationBase.md\#VM\_Managed\_DAFUL\_GearTrain\_Operation\_ShowSimulationBase\_PrepareForm\_VM\_Managed\_DAFUL\_Pre\_Forms\_SimulationFormBase\_), 
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

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ShowSimulationInShaftSet__ctor_VM_Managed_Document_System_String_System_String_System_String_"></a> ShowSimulationInShaftSet\(Document, string, string, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.ShowSimulationInShaftSet" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ShowSimulationInShaftSet(Document doc, string strAnalType, string strMaximumNumberOfNode, string strFileName)
```

#### Parameters

`doc` Document

The document.

`strAnalType` [string](https://learn.microsoft.com/dotnet/api/system.string)

Type of the string anal.

`strMaximumNumberOfNode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string maximum number of node.

`strFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string file name.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ShowSimulationInShaftSet__ctor_VM_Managed_Operation_JournalParameter_"></a> ShowSimulationInShaftSet\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.ShowSimulationInShaftSet" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ShowSimulationInShaftSet(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ShowSimulationInShaftSet_Name"></a> Name

Gets the name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ShowSimulationInShaftSet_Execute"></a> Execute\(\)

Executes this instance.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ShowSimulationInShaftSet_PrepareForm_VM_Managed_DAFUL_Pre_Forms_SimulationFormBase_"></a> PrepareForm\(SimulationFormBase\)

Prepares the form.

```csharp
protected override void PrepareForm(SimulationFormBase form)
```

#### Parameters

`form` SimulationFormBase

The form.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ShowSimulationInShaftSet_ReadExtraJournal_System_Xml_XmlElement_"></a> ReadExtraJournal\(XmlElement\)

```csharp
public override void ReadExtraJournal(XmlElement nodeArg)
```

#### Parameters

`nodeArg` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ShowSimulationInShaftSet_SimulationRunImpl_System_Boolean_"></a> SimulationRunImpl\(bool\)

Simulations the run [implementation].

```csharp
protected override void SimulationRunImpl(bool bWriteDFG)
```

#### Parameters

`bWriteDFG` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [write DFG].

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ShowSimulationInShaftSet_WriteExtraJournal_System_Xml_XmlWriter_"></a> WriteExtraJournal\(XmlWriter\)

```csharp
public override void WriteExtraJournal(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

