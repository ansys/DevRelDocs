#  Class CreateCurvesetByColor

Namespace: [VM.Managed.Operation](VM.Managed.Operation.md)  
Assembly: VMOP.dll  

The create curveset by color operation

```csharp
public class CreateCurvesetByColor : Create, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[Create](VM.Managed.Operation.Create.md) ← 
[CreateCurvesetByColor](VM.Managed.Operation.CreateCurvesetByColor.md)

#### Implements

IOperation

#### Inherited Members

[Create.m\_strInitializerXml](VM.Managed.Operation.Create.md\#VM\_Managed\_Operation\_Create\_m\_strInitializerXml), 
[Create.Execute\(\)](VM.Managed.Operation.Create.md\#VM\_Managed\_Operation\_Create\_Execute), 
[Create.PostExecute\(\)](VM.Managed.Operation.Create.md\#VM\_Managed\_Operation\_Create\_PostExecute), 
[Create.ExecutePickOperation\(XmlDocument, string\[\], string\[\], int, int\)](VM.Managed.Operation.Create.md\#VM\_Managed\_Operation\_Create\_ExecutePickOperation\_System\_Xml\_XmlDocument\_System\_String\_\_\_System\_String\_\_\_System\_Int32\_System\_Int32\_), 
[Create.Name](VM.Managed.Operation.Create.md\#VM\_Managed\_Operation\_Create\_Name), 
[Create.IsHistoryMerge](VM.Managed.Operation.Create.md\#VM\_Managed\_Operation\_Create\_IsHistoryMerge), 
[Create.UseMacro](VM.Managed.Operation.Create.md\#VM\_Managed\_Operation\_Create\_UseMacro), 
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

### <a id="VM_Managed_Operation_CreateCurvesetByColor__ctor"></a> CreateCurvesetByColor\(\)

Initializes a new instance of the <xref href="VM.Managed.Operation.CreateCurvesetByColor" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CreateCurvesetByColor()
```

### <a id="VM_Managed_Operation_CreateCurvesetByColor__ctor_System_String_"></a> CreateCurvesetByColor\(string\)

Initializes a new instance of the <xref href="VM.Managed.Operation.CreateCurvesetByColor" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CreateCurvesetByColor(string strInitializerXml)
```

#### Parameters

`strInitializerXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The STR initializer XML.

## Methods

### <a id="VM_Managed_Operation_CreateCurvesetByColor_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

