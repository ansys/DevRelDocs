# Class EventInfo
<a id="VM_Managed_DAFUL_Chained_Operation_EventInfo"></a>

Namespace: [VM.Managed.DAFUL.Chained.Operation](VM.Managed.DAFUL.Chained.Operation.md)  
Assembly: VMOpChained.dll  

Event Info Operation

```csharp
public class EventInfo : OperationBase, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[EventInfo](VM.Managed.DAFUL.Chained.Operation.EventInfo.md)

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

### <a id="VM_Managed_DAFUL_Chained_Operation_EventInfo__ctor_System_Object_System_Windows_Forms_DataGridViewCellEventArgs_"></a> EventInfo\(object, DataGridViewCellEventArgs\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Chained.Operation.EventInfo" data-throw-if-not-resolved="false"></xref> class.

```csharp
public EventInfo(object sender, DataGridViewCellEventArgs e)
```

#### Parameters

`sender` object

The sender.

`e` DataGridViewCellEventArgs

The <xref href="System.Windows.Forms.DataGridViewCellEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

## Properties

### <a id="VM_Managed_DAFUL_Chained_Operation_EventInfo_E"></a> E

Gets the e.

```csharp
public DataGridViewCellEventArgs E { get; }
```

#### Property Value

 DataGridViewCellEventArgs

### <a id="VM_Managed_DAFUL_Chained_Operation_EventInfo_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

### <a id="VM_Managed_DAFUL_Chained_Operation_EventInfo_Sender"></a> Sender

Gets the sender.

```csharp
public object Sender { get; }
```

#### Property Value

 object

## Methods

### <a id="VM_Managed_DAFUL_Chained_Operation_EventInfo_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

#### Exceptions

 NotImplementedException

### <a id="VM_Managed_DAFUL_Chained_Operation_EventInfo_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

Gets the information.

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

The writer.

