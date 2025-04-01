# Class OperationDelegateNoJournal

Namespace: [VM.Managed.Operation](VM.Managed.Operation.md)  
Assembly: VMAppCore.dll  

This class is to represent the operation using delegate without journal.

```csharp
public class OperationDelegateNoJournal : OperationDelegate, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OperationBase](VM.Managed.Operation.OperationBase.md) ← 
[OperationDelegate](VM.Managed.Operation.OperationDelegate.md) ← 
[OperationDelegateNoJournal](VM.Managed.Operation.OperationDelegateNoJournal.md)

#### Implements

IOperation

#### Inherited Members

[OperationDelegate.Execute\(\)](VM.Managed.Operation.OperationDelegate.md\#VM\_Managed\_Operation\_OperationDelegate\_Execute), 
[OperationDelegate.UseMacro](VM.Managed.Operation.OperationDelegate.md\#VM\_Managed\_Operation\_OperationDelegate\_UseMacro), 
[OperationDelegate.Name](VM.Managed.Operation.OperationDelegate.md\#VM\_Managed\_Operation\_OperationDelegate\_Name), 
[OperationBase.g\_bRedrawKernel](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_g\_bRedrawKernel), 
[OperationBase.g\_bVerify](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_g\_bVerify), 
[OperationBase.g\_bSkipAddEvent](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_g\_bSkipAddEvent), 
[OperationBase.g\_bDupicateMsg](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_g\_bDupicateMsg), 
[OperationBase.m\_bIsHistoryMerge](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_m\_bIsHistoryMerge), 
[OperationBase.Execute\(\)](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_Execute), 
[OperationBase.PostExecute\(\)](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_PostExecute), 
[OperationBase.GetInformation\(XmlWriter\)](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_GetInformation\_System\_Xml\_XmlWriter\_), 
[OperationBase.Create\(string, View, object\)](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_Create\_System\_String\_VM\_Managed\_View\_System\_Object\_), 
[OperationBase.Create\(string, IDocument, object\)](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_Create\_System\_String\_VM\_Models\_Pre\_IDocument\_System\_Object\_), 
[OperationBase.Create\(string, object\)](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_Create\_System\_String\_System\_Object\_), 
[OperationBase.Create\(string\)](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_Create\_System\_String\_), 
[OperationBase.StartSession\(\)](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_StartSession), 
[OperationBase.StartSession\(OperationBase, OperationBase.PostOperation\)](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_StartSession\_VM\_Managed\_Operation\_OperationBase\_VM\_Managed\_Operation\_OperationBase\_PostOperation\_), 
[OperationBase.StartSession\(OperationBase\)](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_StartSession\_VM\_Managed\_Operation\_OperationBase\_), 
[OperationBase.StartSessionAndWait\(\)](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_StartSessionAndWait), 
[OperationBase.StartSessionAndWait\(OperationBase, OperationBase.PostOperation\)](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_StartSessionAndWait\_VM\_Managed\_Operation\_OperationBase\_VM\_Managed\_Operation\_OperationBase\_PostOperation\_), 
[OperationBase.StartSessionAndWait\(OperationBase\)](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_StartSessionAndWait\_VM\_Managed\_Operation\_OperationBase\_), 
[OperationBase.Initialize\(OperationBase.ShowVerifyResult\)](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_Initialize\_VM\_Managed\_Operation\_OperationBase\_ShowVerifyResult\_), 
[OperationBase.RecordJournal\(OperationBase\)](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_RecordJournal\_VM\_Managed\_Operation\_OperationBase\_), 
[OperationBase.UseSession\(string\)](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_UseSession\_System\_String\_), 
[OperationBase.raise\_OnOperationStatusChanged\(object, OperationStatusEventArgs\)](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_raise\_OnOperationStatusChanged\_System\_Object\_VM\_Managed\_Operation\_OperationStatusEventArgs\_), 
[OperationBase.raise\_OnEndOperation\(object, EventArgs\)](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_raise\_OnEndOperation\_System\_Object\_System\_EventArgs\_), 
[OperationBase.ClearCurrentMark\(string\)](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_ClearCurrentMark\_System\_String\_), 
[OperationBase.ClearCurrentMark\(IDocument\)](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_ClearCurrentMark\_VM\_Models\_Pre\_IDocument\_), 
[OperationBase.ClearCurrentMark\(\)](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_ClearCurrentMark), 
[OperationBase.GlobalOverride](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_GlobalOverride), 
[OperationBase.IsDoingThread](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_IsDoingThread), 
[OperationBase.ExecuteMacro](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_ExecuteMacro), 
[OperationBase.SimStatus](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_SimStatus), 
[OperationBase.Status](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_Status), 
[OperationBase.autoEvents](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_autoEvents), 
[OperationBase.IsHistoryMerge](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_IsHistoryMerge), 
[OperationBase.SkipClearTemporaryLinkContainer](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_SkipClearTemporaryLinkContainer), 
[OperationBase.PostExecuteClearTemporaryLinkContainer](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_PostExecuteClearTemporaryLinkContainer), 
[OperationBase.SkipEndOperation](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_SkipEndOperation), 
[OperationBase.UseMacro](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_UseMacro), 
[OperationBase.MarkStatus](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_MarkStatus), 
[OperationBase.UseThread](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_UseThread), 
[OperationBase.Name](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_Name), 
[OperationBase.ExecutableOnHold](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_ExecutableOnHold), 
[OperationBase.Override](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_Override), 
[OperationBase.Parameter](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_Parameter), 
[OperationBase.View](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_View), 
[OperationBase.Document](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_Document), 
[OperationBase.OnEndOperation](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_OnEndOperation), 
[OperationBase.OnOperationStatusChanged](VM.Managed.Operation.OperationBase.md\#VM\_Managed\_Operation\_OperationBase\_OnOperationStatusChanged)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### OperationDelegateNoJournal\(OpCore1, object, View\)

Initializes a new instance of the <xref href="VM.Managed.Operation.OperationDelegateNoJournal" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OperationDelegateNoJournal(OperationDelegate.OpCore1 op, object param, View view)
```

#### Parameters

`op` [OperationDelegate](VM.Managed.Operation.OperationDelegate.md).[OpCore1](VM.Managed.Operation.OperationDelegate.OpCore1.md)

The operation.

`param` [object](https://learn.microsoft.com/dotnet/api/system.object)

The operation parameter.

`view` [View](VM.Managed.View.md)

The operation parameter that is to represent the view.

### OperationDelegateNoJournal\(OpCore1, object, Document\)

Initializes a new instance of the <xref href="VM.Managed.Operation.OperationDelegateNoJournal" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OperationDelegateNoJournal(OperationDelegate.OpCore1 op, object param, Document doc)
```

#### Parameters

`op` [OperationDelegate](VM.Managed.Operation.OperationDelegate.md).[OpCore1](VM.Managed.Operation.OperationDelegate.OpCore1.md)

The operation.

`param` [object](https://learn.microsoft.com/dotnet/api/system.object)

The operation parameter.

`doc` [Document](VM.Managed.Document.md)

The operation parameter that is to represent the document.

### OperationDelegateNoJournal\(OpCore1, object\)

Initializes a new instance of the <xref href="VM.Managed.Operation.OperationDelegateNoJournal" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OperationDelegateNoJournal(OperationDelegate.OpCore1 op, object param)
```

#### Parameters

`op` [OperationDelegate](VM.Managed.Operation.OperationDelegate.md).[OpCore1](VM.Managed.Operation.OperationDelegate.OpCore1.md)

The operation.

`param` [object](https://learn.microsoft.com/dotnet/api/system.object)

The operation parameter.

### OperationDelegateNoJournal\(OpCore, View\)

Initializes a new instance of the <xref href="VM.Managed.Operation.OperationDelegateNoJournal" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OperationDelegateNoJournal(OperationDelegate.OpCore op, View view)
```

#### Parameters

`op` [OperationDelegate](VM.Managed.Operation.OperationDelegate.md).[OpCore](VM.Managed.Operation.OperationDelegate.OpCore.md)

The operation.

`view` [View](VM.Managed.View.md)

The operation parameter that is to represent the view.

### OperationDelegateNoJournal\(OpCore, Document\)

Initializes a new instance of the <xref href="VM.Managed.Operation.OperationDelegateNoJournal" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OperationDelegateNoJournal(OperationDelegate.OpCore op, Document doc)
```

#### Parameters

`op` [OperationDelegate](VM.Managed.Operation.OperationDelegate.md).[OpCore](VM.Managed.Operation.OperationDelegate.OpCore.md)

The operation.

`doc` [Document](VM.Managed.Document.md)

The operation parameter that is to represent the document.

### OperationDelegateNoJournal\(OpCore, bool\)

Initializes a new instance of the <xref href="VM.Managed.Operation.OperationDelegateNoJournal" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OperationDelegateNoJournal(OperationDelegate.OpCore op, bool bIsHistoryMerge)
```

#### Parameters

`op` [OperationDelegate](VM.Managed.Operation.OperationDelegate.md).[OpCore](VM.Managed.Operation.OperationDelegate.OpCore.md)

The operation.

`bIsHistoryMerge` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The history merge flag.

### OperationDelegateNoJournal\(OpCore\)

Initializes a new instance of the <xref href="VM.Managed.Operation.OperationDelegateNoJournal" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OperationDelegateNoJournal(OperationDelegate.OpCore op)
```

#### Parameters

`op` [OperationDelegate](VM.Managed.Operation.OperationDelegate.md).[OpCore](VM.Managed.Operation.OperationDelegate.OpCore.md)

The operation.


