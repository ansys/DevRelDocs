#  Class Create

Namespace: [VM.Managed.Operation](VM.Managed.Operation.md)  
Assembly: VMOP.dll  

The generic opject creation operation

```csharp
public class Create : OperationBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[Create](VM.Managed.Operation.Create.md)

#### Derived

[CreateAssembly](VM.Managed.Operation.CreateAssembly.md), 
[CreateCurvesetByColor](VM.Managed.Operation.CreateCurvesetByColor.md), 
[CreateFacesetByColor](VM.Managed.Operation.CreateFacesetByColor.md)

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

### <a id="VM_Managed_Operation_Create__ctor"></a> Create\(\)

Initializes a new instance of the <xref href="VM.Managed.Operation.Create" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Create()
```

### <a id="VM_Managed_Operation_Create__ctor_System_String_"></a> Create\(string\)

Initializes a new instance of the <xref href="VM.Managed.Operation.Create" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Create(string strInitializerXml)
```

#### Parameters

`strInitializerXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The STR initializer XML.

## Fields

### <a id="VM_Managed_Operation_Create_m_strInitializerXml"></a> m\_strInitializerXml

```csharp
protected string m_strInitializerXml
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="VM_Managed_Operation_Create_IsHistoryMerge"></a> IsHistoryMerge

Gets the history merge flag.

```csharp
public override bool IsHistoryMerge { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Operation_Create_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_Operation_Create_UseMacro"></a> UseMacro

Gets a value indicating whether [use macro].

```csharp
public override bool UseMacro { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_Operation_Create_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Managed_Operation_Create_ExecutePickOperation_System_Xml_XmlDocument_System_String___System_String___System_Int32_System_Int32_"></a> ExecutePickOperation\(XmlDocument, string\[\], string\[\], int, int\)

Executes the pick operation.

```csharp
protected virtual bool ExecutePickOperation(XmlDocument dom, string[] arPickResult, string[] arPickOp, int start, int end)
```

#### Parameters

`dom` [XmlDocument](https://learn.microsoft.com/dotnet/api/system.xml.xmldocument)

The DOM.

`arPickResult` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The ar pick result.

`arPickOp` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The ar pick op.

`start` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The start.

`end` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The end.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_Operation_Create_PostExecute"></a> PostExecute\(\)

PostExecute the operation.

```csharp
public override void PostExecute()
```

