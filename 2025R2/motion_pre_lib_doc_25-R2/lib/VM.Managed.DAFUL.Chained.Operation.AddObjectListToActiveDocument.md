#  Class AddObjectListToActiveDocument

Namespace: [VM.Managed.DAFUL.Chained.Operation](VM.Managed.DAFUL.Chained.Operation.md)  
Assembly: VMOpChained.dll  

Add ObjectList To ActiveDocument Operation

```csharp
public class AddObjectListToActiveDocument : OperationBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[AddObjectListToActiveDocument](VM.Managed.DAFUL.Chained.Operation.AddObjectListToActiveDocument.md)

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

### <a id="VM_Managed_DAFUL_Chained_Operation_AddObjectListToActiveDocument__ctor_VM_Managed_ObjectBase___VM_Managed_Document_"></a> AddObjectListToActiveDocument\(ObjectBase\[\], Document\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Chained.Operation.AddObjectListToActiveDocument" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AddObjectListToActiveDocument(ObjectBase[] lstObj, Document doc)
```

#### Parameters

`lstObj` ObjectBase\[\]

The LST object.

`doc` Document

The document.

### <a id="VM_Managed_DAFUL_Chained_Operation_AddObjectListToActiveDocument__ctor_System_Collections_Generic_List_VM_Managed_ObjectBase__VM_Managed_Document_"></a> AddObjectListToActiveDocument\(List<ObjectBase\>, Document\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Chained.Operation.AddObjectListToActiveDocument" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AddObjectListToActiveDocument(List<ObjectBase> lstObj, Document doc)
```

#### Parameters

`lstObj` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<ObjectBase\>

The LST object.

`doc` Document

The document.

### <a id="VM_Managed_DAFUL_Chained_Operation_AddObjectListToActiveDocument__ctor_VM_Managed_Operation_JournalParameter_"></a> AddObjectListToActiveDocument\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Chained.Operation.AddObjectListToActiveDocument" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AddObjectListToActiveDocument(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Properties

### <a id="VM_Managed_DAFUL_Chained_Operation_AddObjectListToActiveDocument_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_Chained_Operation_AddObjectListToActiveDocument_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_Chained_Operation_AddObjectListToActiveDocument_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

Gets the information.

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

