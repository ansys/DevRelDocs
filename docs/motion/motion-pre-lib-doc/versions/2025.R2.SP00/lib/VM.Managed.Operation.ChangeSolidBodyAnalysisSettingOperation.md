#  Class ChangeSolidBodyAnalysisSettingOperation

Namespace: [VM.Managed.Operation](VM.Managed.Operation.md)  
Assembly: VMOP.dll  

Change SolidBody AnalysisSetting Operation

```csharp
public class ChangeSolidBodyAnalysisSettingOperation : OperationBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[ChangeSolidBodyAnalysisSettingOperation](VM.Managed.Operation.ChangeSolidBodyAnalysisSettingOperation.md)

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

### <a id="VM_Managed_Operation_ChangeSolidBodyAnalysisSettingOperation__ctor_VM_Managed_DAFUL_SolidBody_VM_Managed_DAFUL_BodyAnalysisType_"></a> ChangeSolidBodyAnalysisSettingOperation\(SolidBody, BodyAnalysisType\)

Initializes a new instance of the <xref href="VM.Managed.Operation.ChangeSolidBodyAnalysisSettingOperation" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ChangeSolidBodyAnalysisSettingOperation(SolidBody solidBody, BodyAnalysisType type)
```

#### Parameters

`solidBody` SolidBody

The nodal body.

`type` BodyAnalysisType

The type of nodal body.

### <a id="VM_Managed_Operation_ChangeSolidBodyAnalysisSettingOperation__ctor_VM_Managed_Operation_JournalParameter_"></a> ChangeSolidBodyAnalysisSettingOperation\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.Operation.ChangeSolidBodyAnalysisSettingOperation" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ChangeSolidBodyAnalysisSettingOperation(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

## Properties

### <a id="VM_Managed_Operation_ChangeSolidBodyAnalysisSettingOperation_Name"></a> Name

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_Operation_ChangeSolidBodyAnalysisSettingOperation_Execute"></a> Execute\(\)

Execute Operation

```csharp
public override void Execute()
```

### <a id="VM_Managed_Operation_ChangeSolidBodyAnalysisSettingOperation_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

