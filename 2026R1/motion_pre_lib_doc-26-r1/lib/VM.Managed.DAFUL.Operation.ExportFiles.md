# Class ExportFiles
<a id="VM_Managed_DAFUL_Operation_ExportFiles"></a>

Namespace: [VM.Managed.DAFUL.Operation](VM.Managed.DAFUL.Operation.md)  
Assembly: VMOpCore.dll  

The export files operation

```csharp
public class ExportFiles : SimulationRun, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[SimulationRun](VM.Managed.DAFUL.Operation.SimulationRun.md) ← 
[ExportFiles](VM.Managed.DAFUL.Operation.ExportFiles.md)

#### Implements

IOperation

#### Inherited Members

[SimulationRun.m\_strSimulationConfiguration](VM.Managed.DAFUL.Operation.SimulationRun.md\#VM\_Managed\_DAFUL\_Operation\_SimulationRun\_m\_strSimulationConfiguration), 
[SimulationRun.m\_strFilePath](VM.Managed.DAFUL.Operation.SimulationRun.md\#VM\_Managed\_DAFUL\_Operation\_SimulationRun\_m\_strFilePath), 
[SimulationRun.m\_strUserDefinedScenarioTypeName](VM.Managed.DAFUL.Operation.SimulationRun.md\#VM\_Managed\_DAFUL\_Operation\_SimulationRun\_m\_strUserDefinedScenarioTypeName), 
[SimulationRun.Execute\(\)](VM.Managed.DAFUL.Operation.SimulationRun.md\#VM\_Managed\_DAFUL\_Operation\_SimulationRun\_Execute), 
[SimulationRun.GetInformation\(XmlWriter\)](VM.Managed.DAFUL.Operation.SimulationRun.md\#VM\_Managed\_DAFUL\_Operation\_SimulationRun\_GetInformation\_System\_Xml\_XmlWriter\_), 
[SimulationRun.ReadExtraJournal\(XmlElement\)](VM.Managed.DAFUL.Operation.SimulationRun.md\#VM\_Managed\_DAFUL\_Operation\_SimulationRun\_ReadExtraJournal\_System\_Xml\_XmlElement\_), 
[SimulationRun.WriteExtraJournal\(XmlWriter\)](VM.Managed.DAFUL.Operation.SimulationRun.md\#VM\_Managed\_DAFUL\_Operation\_SimulationRun\_WriteExtraJournal\_System\_Xml\_XmlWriter\_), 
[SimulationRun.UpdateUI\(IUIUpdate, Document\)](VM.Managed.DAFUL.Operation.SimulationRun.md\#VM\_Managed\_DAFUL\_Operation\_SimulationRun\_UpdateUI\_VM\_Managed\_UI\_IUIUpdate\_VM\_Managed\_Document\_), 
[SimulationRun.SimulationRunImpl\(bool\)](VM.Managed.DAFUL.Operation.SimulationRun.md\#VM\_Managed\_DAFUL\_Operation\_SimulationRun\_SimulationRunImpl\_System\_Boolean\_), 
[SimulationRun.PrepareSimulationSetting\(\)](VM.Managed.DAFUL.Operation.SimulationRun.md\#VM\_Managed\_DAFUL\_Operation\_SimulationRun\_PrepareSimulationSetting), 
[SimulationRun.ShowDialog\(\)](VM.Managed.DAFUL.Operation.SimulationRun.md\#VM\_Managed\_DAFUL\_Operation\_SimulationRun\_ShowDialog), 
[SimulationRun.PrepareForm\(SimulationFormBase\)](VM.Managed.DAFUL.Operation.SimulationRun.md\#VM\_Managed\_DAFUL\_Operation\_SimulationRun\_PrepareForm\_VM\_Managed\_DAFUL\_Pre\_Forms\_SimulationFormBase\_), 
[SimulationRun.ApplySimulation\(SimulationFormBase\)](VM.Managed.DAFUL.Operation.SimulationRun.md\#VM\_Managed\_DAFUL\_Operation\_SimulationRun\_ApplySimulation\_VM\_Managed\_DAFUL\_Pre\_Forms\_SimulationFormBase\_), 
[SimulationRun.ExecuteImpl\(\)](VM.Managed.DAFUL.Operation.SimulationRun.md\#VM\_Managed\_DAFUL\_Operation\_SimulationRun\_ExecuteImpl), 
[SimulationRun.ExecuteImplNotPrePareSimulation\(\)](VM.Managed.DAFUL.Operation.SimulationRun.md\#VM\_Managed\_DAFUL\_Operation\_SimulationRun\_ExecuteImplNotPrePareSimulation), 
[SimulationRun.WriteJournalCore\(string\)](VM.Managed.DAFUL.Operation.SimulationRun.md\#VM\_Managed\_DAFUL\_Operation\_SimulationRun\_WriteJournalCore\_System\_String\_), 
[SimulationRun.Name](VM.Managed.DAFUL.Operation.SimulationRun.md\#VM\_Managed\_DAFUL\_Operation\_SimulationRun\_Name), 
[SimulationRun.SimulationForm](VM.Managed.DAFUL.Operation.SimulationRun.md\#VM\_Managed\_DAFUL\_Operation\_SimulationRun\_SimulationForm), 
[SimulationRun.NotPrePareSimulation](VM.Managed.DAFUL.Operation.SimulationRun.md\#VM\_Managed\_DAFUL\_Operation\_SimulationRun\_NotPrePareSimulation), 
[SimulationRun.FormResult](VM.Managed.DAFUL.Operation.SimulationRun.md\#VM\_Managed\_DAFUL\_Operation\_SimulationRun\_FormResult), 
[SimulationRun.SimParam](VM.Managed.DAFUL.Operation.SimulationRun.md\#VM\_Managed\_DAFUL\_Operation\_SimulationRun\_SimParam), 
[SimulationRun.SkipCheckDirectory](VM.Managed.DAFUL.Operation.SimulationRun.md\#VM\_Managed\_DAFUL\_Operation\_SimulationRun\_SkipCheckDirectory), 
[SimulationRun.FilePath](VM.Managed.DAFUL.Operation.SimulationRun.md\#VM\_Managed\_DAFUL\_Operation\_SimulationRun\_FilePath), 
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

### <a id="VM_Managed_DAFUL_Operation_ExportFiles__ctor_VM_Managed_Document3D_System_String_System_Boolean_System_Boolean_System_Boolean_System_Boolean_"></a> ExportFiles\(Document3D, string, bool, bool, bool, bool\)

```csharp
public ExportFiles(Document3D doc, string strFilePath, bool bWriteDFS, bool bWriteXML, bool bWriteDFG, bool bIncludeReferenceFiles)
```

#### Parameters

`doc` Document3D

`strFilePath` string

`bWriteDFS` bool

`bWriteXML` bool

`bWriteDFG` bool

`bIncludeReferenceFiles` bool

### <a id="VM_Managed_DAFUL_Operation_ExportFiles__ctor_VM_Managed_Operation_JournalParameter_"></a> ExportFiles\(JournalParameter\)

```csharp
public ExportFiles(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

## Fields

### <a id="VM_Managed_DAFUL_Operation_ExportFiles_m_bIncludeReferenceFiles"></a> m\_bIncludeReferenceFiles

```csharp
protected bool m_bIncludeReferenceFiles
```

#### Field Value

 bool

### <a id="VM_Managed_DAFUL_Operation_ExportFiles_m_bWriteDFG"></a> m\_bWriteDFG

```csharp
protected bool m_bWriteDFG
```

#### Field Value

 bool

### <a id="VM_Managed_DAFUL_Operation_ExportFiles_m_bWriteDFS"></a> m\_bWriteDFS

```csharp
protected bool m_bWriteDFS
```

#### Field Value

 bool

### <a id="VM_Managed_DAFUL_Operation_ExportFiles_m_bWriteXML"></a> m\_bWriteXML

```csharp
protected bool m_bWriteXML
```

#### Field Value

 bool

## Properties

### <a id="VM_Managed_DAFUL_Operation_ExportFiles_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_Operation_ExportFiles_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_Operation_ExportFiles_ReadExtraJournal_System_Xml_XmlElement_"></a> ReadExtraJournal\(XmlElement\)

```csharp
public override void ReadExtraJournal(XmlElement nodeArg)
```

#### Parameters

`nodeArg` XmlElement

### <a id="VM_Managed_DAFUL_Operation_ExportFiles_WriteExtraJournal_System_Xml_XmlWriter_"></a> WriteExtraJournal\(XmlWriter\)

```csharp
public override void WriteExtraJournal(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

