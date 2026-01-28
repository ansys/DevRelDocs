# Class MeshPropertyApplyOperation
<a id="VM_Managed_DAFUL_FE_MeshPropertyApplyOperation"></a>

Namespace: [VM.Managed.DAFUL.FE](VM.Managed.DAFUL.FE.md)  
Assembly: VMFE.dll  

Pre Apply Operation

```csharp
public class MeshPropertyApplyOperation : OperationBase, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[MeshPropertyApplyOperation](VM.Managed.DAFUL.FE.MeshPropertyApplyOperation.md)

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

### <a id="VM_Managed_DAFUL_FE_MeshPropertyApplyOperation__ctor"></a> MeshPropertyApplyOperation\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.FE.MeshPropertyApplyOperation" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MeshPropertyApplyOperation()
```

## Fields

### <a id="VM_Managed_DAFUL_FE_MeshPropertyApplyOperation_GetResult"></a> GetResult

Get result event

```csharp
public MeshPropertyApplyOperation.GetResultCallback GetResult
```

#### Field Value

 [MeshPropertyApplyOperation](VM.Managed.DAFUL.FE.MeshPropertyApplyOperation.md).[GetResultCallback](VM.Managed.DAFUL.FE.MeshPropertyApplyOperation.GetResultCallback.md)

## Properties

### <a id="VM_Managed_DAFUL_FE_MeshPropertyApplyOperation_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_FE_MeshPropertyApplyOperation_Success"></a> Success

Gets the success flag.

```csharp
public bool Success { get; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Managed_DAFUL_FE_MeshPropertyApplyOperation_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

