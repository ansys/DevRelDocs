# Class ReGenerateSprocketOperation
<a id="VM_Managed_CAD_Sprocket_ReGenerateSprocketOperation"></a>

Namespace: [VM.Managed.CAD.Sprocket](VM.Managed.CAD.Sprocket.md)  
Assembly: VMDSprocket.dll  

Re-Generate Sprocket Operation

```csharp
public class ReGenerateSprocketOperation : OperationBase, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[ReGenerateSprocketOperation](VM.Managed.CAD.Sprocket.ReGenerateSprocketOperation.md)

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

### <a id="VM_Managed_CAD_Sprocket_ReGenerateSprocketOperation__ctor_System_Xml_XmlDocument_VM_Managed_CAD_Sprocket_BuilderSingleSprocketSimple_System_Boolean_"></a> ReGenerateSprocketOperation\(XmlDocument, BuilderSingleSprocketSimple, bool\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Sprocket.ReGenerateSprocketOperation" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ReGenerateSprocketOperation(XmlDocument dom, BuilderSingleSprocketSimple sprocketBody, bool bBuilder)
```

#### Parameters

`dom` XmlDocument

The DOM.

`sprocketBody` [BuilderSingleSprocketSimple](VM.Managed.CAD.Sprocket.BuilderSingleSprocketSimple.md)

The sprocket body.

`bBuilder` bool

if set to <code>true</code> [b builder].

### <a id="VM_Managed_CAD_Sprocket_ReGenerateSprocketOperation__ctor_VM_Managed_Operation_JournalParameter_"></a> ReGenerateSprocketOperation\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.CAD.Sprocket.ReGenerateSprocketOperation" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ReGenerateSprocketOperation(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Properties

### <a id="VM_Managed_CAD_Sprocket_ReGenerateSprocketOperation_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

### <a id="VM_Managed_CAD_Sprocket_ReGenerateSprocketOperation_ResultBody"></a> ResultBody

Gets the result body.

```csharp
public ObjectBase ResultBody { get; }
```

#### Property Value

 ObjectBase

## Methods

### <a id="VM_Managed_CAD_Sprocket_ReGenerateSprocketOperation_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Managed_CAD_Sprocket_ReGenerateSprocketOperation_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

Gets the information.

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

The writer.

