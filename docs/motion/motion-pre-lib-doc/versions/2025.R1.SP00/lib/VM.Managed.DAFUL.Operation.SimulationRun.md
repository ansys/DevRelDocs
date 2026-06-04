#  Class SimulationRun

Namespace: [VM.Managed.DAFUL.Operation](VM.Managed.DAFUL.Operation.md)  
Assembly: VMOpCore.dll  

The run simulation operation

```csharp
public class SimulationRun : OperationBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[SimulationRun](VM.Managed.DAFUL.Operation.SimulationRun.md)

#### Derived

[ConfigModify](VM.Managed.DAFUL.Operation.ConfigModify.md), 
[ExportDFG](VM.Managed.DAFUL.Operation.ExportDFG.md), 
[ExportDFS](VM.Managed.DAFUL.Operation.ExportDFS.md), 
[ExportXML](VM.Managed.DAFUL.Operation.ExportXML.md), 
[ShowSimulationDlg](VM.Managed.DAFUL.Operation.ShowSimulationDlg.md)

#### Implements

IOperation

#### Inherited Members

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

### <a id="VM_Managed_DAFUL_Operation_SimulationRun__ctor"></a> SimulationRun\(\)

```csharp
public SimulationRun()
```

### <a id="VM_Managed_DAFUL_Operation_SimulationRun__ctor_VM_Managed_Document_"></a> SimulationRun\(Document\)

```csharp
public SimulationRun(Document doc)
```

#### Parameters

`doc` Document

### <a id="VM_Managed_DAFUL_Operation_SimulationRun__ctor_VM_Managed_Operation_JournalParameter_"></a> SimulationRun\(JournalParameter\)

```csharp
public SimulationRun(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

### <a id="VM_Managed_DAFUL_Operation_SimulationRun__ctor_VM_Managed_Document_System_String_"></a> SimulationRun\(Document, string\)

```csharp
public SimulationRun(Document doc, string strSimPar)
```

#### Parameters

`doc` Document

`strSimPar` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Operation_SimulationRun__ctor_VM_Managed_Document_System_String_System_String_"></a> SimulationRun\(Document, string, string\)

```csharp
public SimulationRun(Document doc, string strSimPar, string strScenarioTypeName)
```

#### Parameters

`doc` Document

`strSimPar` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strScenarioTypeName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Operation_SimulationRun__ctor_VM_Managed_Document_VM_Managed_DAFUL_Operation_SimulationRun_SimulationParameter_"></a> SimulationRun\(Document, SimulationParameter\)

```csharp
public SimulationRun(Document doc, SimulationRun.SimulationParameter param)
```

#### Parameters

`doc` Document

`param` [SimulationRun](VM.Managed.DAFUL.Operation.SimulationRun.md).[SimulationParameter](VM.Managed.DAFUL.Operation.SimulationRun.SimulationParameter.md)

## Fields

### <a id="VM_Managed_DAFUL_Operation_SimulationRun_m_strFilePath"></a> m\_strFilePath

```csharp
protected string m_strFilePath
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Operation_SimulationRun_m_strSimulationConfiguration"></a> m\_strSimulationConfiguration

```csharp
protected string m_strSimulationConfiguration
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Operation_SimulationRun_m_strUserDefinedScenarioTypeName"></a> m\_strUserDefinedScenarioTypeName

```csharp
protected string m_strUserDefinedScenarioTypeName
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Managed_DAFUL_Operation_SimulationRun_FilePath"></a> FilePath

```csharp
public string FilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Operation_SimulationRun_FormResult"></a> FormResult

```csharp
protected SimulationFormBase.Result FormResult { get; set; }
```

#### Property Value

 SimulationFormBase.Result

### <a id="VM_Managed_DAFUL_Operation_SimulationRun_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Operation_SimulationRun_NotPrePareSimulation"></a> NotPrePareSimulation

```csharp
public bool NotPrePareSimulation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Operation_SimulationRun_SimParam"></a> SimParam

```csharp
protected SimulationRun.SimulationParameter SimParam { get; set; }
```

#### Property Value

 [SimulationRun](VM.Managed.DAFUL.Operation.SimulationRun.md).[SimulationParameter](VM.Managed.DAFUL.Operation.SimulationRun.SimulationParameter.md)

### <a id="VM_Managed_DAFUL_Operation_SimulationRun_SimulationForm"></a> SimulationForm

gets the simulation form

```csharp
protected virtual SimulationFormGeneral SimulationForm { get; }
```

#### Property Value

 SimulationFormGeneral

### <a id="VM_Managed_DAFUL_Operation_SimulationRun_SkipCheckDirectory"></a> SkipCheckDirectory

```csharp
public bool SkipCheckDirectory { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_DAFUL_Operation_SimulationRun_ApplySimulation_VM_Managed_DAFUL_Pre_Forms_SimulationFormBase_"></a> ApplySimulation\(SimulationFormBase\)

```csharp
protected virtual bool ApplySimulation(SimulationFormBase form)
```

#### Parameters

`form` SimulationFormBase

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Operation_SimulationRun_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_Operation_SimulationRun_ExecuteImpl"></a> ExecuteImpl\(\)

Executes the impl.

```csharp
protected virtual void ExecuteImpl()
```

### <a id="VM_Managed_DAFUL_Operation_SimulationRun_ExecuteImplNotPrePareSimulation"></a> ExecuteImplNotPrePareSimulation\(\)

```csharp
protected virtual void ExecuteImplNotPrePareSimulation()
```

### <a id="VM_Managed_DAFUL_Operation_SimulationRun_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

### <a id="VM_Managed_DAFUL_Operation_SimulationRun_PrepareForm_VM_Managed_DAFUL_Pre_Forms_SimulationFormBase_"></a> PrepareForm\(SimulationFormBase\)

```csharp
protected virtual void PrepareForm(SimulationFormBase form)
```

#### Parameters

`form` SimulationFormBase

### <a id="VM_Managed_DAFUL_Operation_SimulationRun_PrepareSimulationSetting"></a> PrepareSimulationSetting\(\)

```csharp
protected virtual void PrepareSimulationSetting()
```

### <a id="VM_Managed_DAFUL_Operation_SimulationRun_ReadExtraJournal_System_Xml_XmlElement_"></a> ReadExtraJournal\(XmlElement\)

```csharp
public virtual void ReadExtraJournal(XmlElement nodeArg)
```

#### Parameters

`nodeArg` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

### <a id="VM_Managed_DAFUL_Operation_SimulationRun_ShowDialog"></a> ShowDialog\(\)

```csharp
protected virtual void ShowDialog()
```

### <a id="VM_Managed_DAFUL_Operation_SimulationRun_SimulationRunImpl_System_Boolean_"></a> SimulationRunImpl\(bool\)

```csharp
protected virtual void SimulationRunImpl(bool bWriteDFG)
```

#### Parameters

`bWriteDFG` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_Operation_SimulationRun_UpdateUI_VM_Managed_UI_IUIUpdate_VM_Managed_Document_"></a> UpdateUI\(IUIUpdate, Document\)

```csharp
public static void UpdateUI(IUIUpdate updater, Document doc)
```

#### Parameters

`updater` IUIUpdate

`doc` Document

### <a id="VM_Managed_DAFUL_Operation_SimulationRun_WriteExtraJournal_System_Xml_XmlWriter_"></a> WriteExtraJournal\(XmlWriter\)

```csharp
public virtual void WriteExtraJournal(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

