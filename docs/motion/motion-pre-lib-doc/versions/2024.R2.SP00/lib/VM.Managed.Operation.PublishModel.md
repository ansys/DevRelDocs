# Class PublishModel

Namespace: [VM.Managed.Operation](VM.Managed.Operation.md)  
Assembly: VMOP.dll  

The publish model operation

```csharp
public class PublishModel : DialogOperation, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
DialogOperation ← 
[PublishModel](VM.Managed.Operation.PublishModel.md)

#### Implements

IOperation

#### Inherited Members

DialogOperation.Execute\(\), 
DialogOperation.OnApply\(object, CancelEventArgs\), 
DialogOperation.IsConainOpenedDic\(Document\), 
DialogOperation.Name, 
DialogOperation.OpDialog, 
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

### PublishModel\(\)

```csharp
public PublishModel()
```

### PublishModel\(Document\)

```csharp
public PublishModel(Document doc)
```

#### Parameters

`doc` Document

## Properties

### Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### Execute\(string, string, string, string\)

Execute Operation for API.

```csharp
public void Execute(string strDocPath, string strExportPath, string strWorkName, string strModelName)
```

#### Parameters

`strDocPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The document path.

`strExportPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The export path.

`strWorkName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The work name.

`strModelName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The model name.

### Execute\(string, string\)

```csharp
public void Execute(string strDocPath, string strExportPath)
```

#### Parameters

`strDocPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

`strExportPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

### OnApply\(object, CancelEventArgs\)

Called when [apply].

```csharp
protected override void OnApply(object sender, CancelEventArgs arg)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object)

The sender.

`arg` [CancelEventArgs](https://learn.microsoft.com/dotnet/api/system.componentmodel.canceleventargs)

The <xref href="System.ComponentModel.CancelEventArgs" data-throw-if-not-resolved="false"></xref> instance containing the event data.

### UpdateUI\(IUIUpdate, Document\)

Updates the UI.

```csharp
public static void UpdateUI(IUIUpdate updater, Document doc)
```

#### Parameters

`updater` IUIUpdate

The updater.

`doc` Document

The doc.


