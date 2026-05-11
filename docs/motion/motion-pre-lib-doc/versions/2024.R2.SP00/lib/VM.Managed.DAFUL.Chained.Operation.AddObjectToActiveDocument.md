# Class AddObjectToActiveDocument

Namespace: [VM.Managed.DAFUL.Chained.Operation](VM.Managed.DAFUL.Chained.Operation.md)  
Assembly: VMOpChained.dll  

Add Object To ActiveDocument Operation

```csharp
public class AddObjectToActiveDocument : OperationBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[AddObjectToActiveDocument](VM.Managed.DAFUL.Chained.Operation.AddObjectToActiveDocument.md)

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

### AddObjectToActiveDocument\(int, int, string\[\], List<TransformBase\>, List<Document3D\>, Document, bool\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Chained.Operation.AddObjectToActiveDocument" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AddObjectToActiveDocument(int nShare, int nRepeatSegment, string[] arPreFixed, List<TransformBase> lstTansform, List<Document3D> lstSegmentDoc, Document Activedoc, bool bCreate)
```

#### Parameters

`nShare` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The n share.

`nRepeatSegment` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The n repeat segment.

`arPreFixed` [string](https://learn.microsoft.com/dotnet/api/system.string)\[\]

The ar pre fixed.

`lstTansform` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<TransformBase\>

The LST tansform.

`lstSegmentDoc` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<Document3D\>

The LST segment document.

`Activedoc` Document

The activedoc.

`bCreate` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The create flag.

### AddObjectToActiveDocument\(JournalParameter\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.Chained.Operation.AddObjectToActiveDocument" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AddObjectToActiveDocument(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The jp.

## Properties

### Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### Segment

Gets the segment.

```csharp
public List<ObjectBase> Segment { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<ObjectBase\>

## Methods

### Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### GetInformation\(XmlWriter\)

Gets the information.

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.


