#  Class ContactAnalysis

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Contact Analysis

```csharp
public class ContactAnalysis : OperationBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[ContactAnalysis](VM.Managed.DAFUL.GearTrain.Operation.ContactAnalysis.md)

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

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ContactAnalysis__ctor_System_String_System_String_System_String_System_String_System_Int32___System_String_System_Int32_System_Int32_System_Boolean_System_String_System_String_System_String_"></a> ContactAnalysis\(string, string, string, string, int\[\], string, int, int, bool, string, string, string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.ContactAnalysis" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ContactAnalysis(string strDocInfo, string strSpeed, string strTorque, string strRatio, int[] arnIndex, string strResultFileName, int nSamplingFrequency, int nGearPairIndex, bool bOpenPost, string strInput, string strOutput, string strAlignType)
```

#### Parameters

`strDocInfo` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string document information.

`strSpeed` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string speed.

`strTorque` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string torque.

`strRatio` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string torque.

`arnIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

Index.

`strResultFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string result file name.

`nSamplingFrequency` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The sampling frequency.

`nGearPairIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The gear pair index.

`bOpenPost` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The post open flag.

`strInput` [string](https://learn.microsoft.com/dotnet/api/system.string)

The input type.

`strOutput` [string](https://learn.microsoft.com/dotnet/api/system.string)

The output type.

`strAlignType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The align type.

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ContactAnalysis__ctor_VM_Managed_Operation_JournalParameter_"></a> ContactAnalysis\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.ContactAnalysis" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ContactAnalysis(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Properties

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ContactAnalysis_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ContactAnalysis_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_GearTrain_Operation_ContactAnalysis_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

Gets the information.

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

