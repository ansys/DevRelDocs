#  Class CreateChainedPlacing

Namespace: [VM.Managed.DAFUL.Chained.Operation](VM.Managed.DAFUL.Chained.Operation.md)  
Assembly: VMOpChained.dll  

Create Chained placing object.

```csharp
public class CreateChainedPlacing : OperationBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[CreateChainedPlacing](VM.Managed.DAFUL.Chained.Operation.CreateChainedPlacing.md)

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

### <a id="VM_Managed_DAFUL_Chained_Operation_CreateChainedPlacing__ctor"></a> CreateChainedPlacing\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Chained.Operation.CreateChainedPlacing" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CreateChainedPlacing()
```

### <a id="VM_Managed_DAFUL_Chained_Operation_CreateChainedPlacing__ctor_System_String_"></a> CreateChainedPlacing\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Chained.Operation.CreateChainedPlacing" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CreateChainedPlacing(string strInitializerXml)
```

#### Parameters

`strInitializerXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The STR initializer XML.

## Properties

### <a id="VM_Managed_DAFUL_Chained_Operation_CreateChainedPlacing_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_Chained_Operation_CreateChainedPlacing_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_Chained_Operation_CreateChainedPlacing_ExecutePickOperation_System_String___System_String___System_Int32_System_Int32_"></a> ExecutePickOperation\(string\[\], string\[\], int, int\)

Execute the operation.
<param name="arPickResult">pick result array.</param><param name="arPickOp">pick operation array.</param><param name="start">The start.</param><param name="end">The end.</param>

```csharp
protected virtual bool ExecutePickOperation(string[] arPickResult, string[] arPickOp, int start, int end)
```

#### Parameters

`arPickResult` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

`arPickOp` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

`start` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`end` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

