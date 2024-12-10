#  Class AddGearToRBEInFE

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Add gear to rbe operation in FE

```csharp
public class AddGearToRBEInFE : Create, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
Create ← 
[AddGearToRBEInFE](VM.Managed.DAFUL.GearTrain.Operation.AddGearToRBEInFE.md)

#### Implements

IOperation

#### Inherited Members

Create.m\_strInitializerXml, 
Create.Execute\(\), 
Create.PostExecute\(\), 
Create.ExecutePickOperation\(XmlDocument, string\[\], string\[\], int, int\), 
Create.Name, 
Create.IsHistoryMerge, 
Create.UseMacro, 
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

### <a id="VM_Managed_DAFUL_GearTrain_Operation_AddGearToRBEInFE__ctor"></a> AddGearToRBEInFE\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.AddGearToRBEInFE" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AddGearToRBEInFE()
```

### <a id="VM_Managed_DAFUL_GearTrain_Operation_AddGearToRBEInFE__ctor_System_String_"></a> AddGearToRBEInFE\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.AddGearToRBEInFE" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AddGearToRBEInFE(string strInitializerXml)
```

#### Parameters

`strInitializerXml` [string](https://learn.microsoft.com/dotnet/api/system.string)

The STR initializer XML.

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Operation_AddGearToRBEInFE_ExecutePickOperation_System_Xml_XmlDocument_System_String___System_String___System_Int32_System_Int32_"></a> ExecutePickOperation\(XmlDocument, string\[\], string\[\], int, int\)

Executes the pick operation.

```csharp
protected override bool ExecutePickOperation(XmlDocument dom, string[] arPickResult, string[] arPickOp, int start, int end)
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

### <a id="VM_Managed_DAFUL_GearTrain_Operation_AddGearToRBEInFE_UpdateUI_VM_Managed_UI_IUIUpdate_VM_Managed_Document_"></a> UpdateUI\(IUIUpdate, Document\)

Updates the UI.

```csharp
public static void UpdateUI(IUIUpdate updater, Document doc)
```

#### Parameters

`updater` IUIUpdate

The updater.

`doc` Document

The document.

