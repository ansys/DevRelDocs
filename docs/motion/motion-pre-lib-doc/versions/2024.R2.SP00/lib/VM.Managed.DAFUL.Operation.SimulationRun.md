# Class SimulationRun

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

### SimulationRun\(\)

```csharp
public SimulationRun()
```

### SimulationRun\(Document\)

```csharp
public SimulationRun(Document doc)
```

#### Parameters

`doc` Document

### SimulationRun\(JournalParameter\)

```csharp
public SimulationRun(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

### SimulationRun\(Document, string\)

```csharp
public SimulationRun(Document doc, string strSimPar)
```

#### Parameters

`doc` Document

`strSimPar` [string](https://learn.microsoft.com/dotnet/api/system.string)

### SimulationRun\(Document, string, string\)

```csharp
public SimulationRun(Document doc, string strSimPar, string strScenarioTypeName)
```

#### Parameters

`doc` Document

`strSimPar` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strScenarioTypeName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### SimulationRun\(Document, SimulationParameter\)

```csharp
public SimulationRun(Document doc, SimulationRun.SimulationParameter param)
```

#### Parameters

`doc` Document

`param` [SimulationRun](VM.Managed.DAFUL.Operation.SimulationRun.md).[SimulationParameter](VM.Managed.DAFUL.Operation.SimulationRun.SimulationParameter.md)

## Fields

### m\_strFilePath

```csharp
protected string m_strFilePath
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### m\_strSimulationConfiguration

```csharp
protected string m_strSimulationConfiguration
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### m\_strUserDefinedScenarioTypeName

```csharp
protected string m_strUserDefinedScenarioTypeName
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### FilePath

```csharp
public string FilePath { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### FormResult

```csharp
protected SimulationFormBase.Result FormResult { get; set; }
```

#### Property Value

 SimulationFormBase.Result

### Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### NotPrePareSimulation

```csharp
public bool NotPrePareSimulation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SimParam

```csharp
protected SimulationRun.SimulationParameter SimParam { get; set; }
```

#### Property Value

 [SimulationRun](VM.Managed.DAFUL.Operation.SimulationRun.md).[SimulationParameter](VM.Managed.DAFUL.Operation.SimulationRun.SimulationParameter.md)

### SimulationForm

gets the simulation form

```csharp
protected virtual SimulationFormGeneral SimulationForm { get; }
```

#### Property Value

 SimulationFormGeneral

### SkipCheckDirectory

```csharp
public bool SkipCheckDirectory { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### ApplySimulation\(SimulationFormBase\)

```csharp
protected virtual bool ApplySimulation(SimulationFormBase form)
```

#### Parameters

`form` SimulationFormBase

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### ExecuteImpl\(\)

Executes the impl.

```csharp
protected virtual void ExecuteImpl()
```

### ExecuteImplNotPrePareSimulation\(\)

```csharp
protected virtual void ExecuteImplNotPrePareSimulation()
```

### GetInformation\(XmlWriter\)

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

### PrepareForm\(SimulationFormBase\)

```csharp
protected virtual void PrepareForm(SimulationFormBase form)
```

#### Parameters

`form` SimulationFormBase

### PrepareSimulationSetting\(\)

```csharp
protected virtual void PrepareSimulationSetting()
```

### ReadExtraJournal\(XmlElement\)

```csharp
public virtual void ReadExtraJournal(XmlElement nodeArg)
```

#### Parameters

`nodeArg` [XmlElement](https://learn.microsoft.com/dotnet/api/system.xml.xmlelement)

### ShowDialog\(\)

```csharp
protected virtual void ShowDialog()
```

### SimulationRunImpl\(bool\)

```csharp
protected virtual void SimulationRunImpl(bool bWriteDFG)
```

#### Parameters

`bWriteDFG` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UpdateUI\(IUIUpdate, Document\)

```csharp
public static void UpdateUI(IUIUpdate updater, Document doc)
```

#### Parameters

`updater` IUIUpdate

`doc` Document

### WriteExtraJournal\(XmlWriter\)

```csharp
public virtual void WriteExtraJournal(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)


