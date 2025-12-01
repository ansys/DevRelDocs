# Class AddBearingToRBEInFE
<a id="VM_Managed_DAFUL_GearTrain_Operation_AddBearingToRBEInFE"></a>

Namespace: [VM.Managed.DAFUL.GearTrain.Operation](VM.Managed.DAFUL.GearTrain.Operation.md)  
Assembly: VMOpGearTrain.dll  

Add bearing to rbe operation in FE

```csharp
public class AddBearingToRBEInFE : Create, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[Create](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOP/CreateObject.cs) ← 
[AddBearingToRBEInFE](VM.Managed.DAFUL.GearTrain.Operation.AddBearingToRBEInFE.md)

#### Implements

IOperation

#### Inherited Members

[Create.m\_strInitializerXml](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOP/CreateObject.cs), 
[Create.Execute\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOP/CreateObject.cs), 
[Create.PostExecute\(\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOP/CreateObject.cs), 
[Create.ExecutePickOperation\(XmlDocument, string\[\], string\[\], int, int\)](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOP/CreateObject.cs), 
[Create.Name](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOP/CreateObject.cs), 
[Create.IsHistoryMerge](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOP/CreateObject.cs), 
[Create.UseMacro](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Operations/VMOP/CreateObject.cs), 
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

### <a id="VM_Managed_DAFUL_GearTrain_Operation_AddBearingToRBEInFE__ctor"></a> AddBearingToRBEInFE\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.AddBearingToRBEInFE" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AddBearingToRBEInFE()
```

### <a id="VM_Managed_DAFUL_GearTrain_Operation_AddBearingToRBEInFE__ctor_System_String_"></a> AddBearingToRBEInFE\(string\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.GearTrain.Operation.AddBearingToRBEInFE" data-throw-if-not-resolved="false"></xref> class.

```csharp
public AddBearingToRBEInFE(string strInitializerXml)
```

#### Parameters

`strInitializerXml` string

The STR initializer XML.

## Methods

### <a id="VM_Managed_DAFUL_GearTrain_Operation_AddBearingToRBEInFE_ExecutePickOperation_System_Xml_XmlDocument_System_String___System_String___System_Int32_System_Int32_"></a> ExecutePickOperation\(XmlDocument, string\[\], string\[\], int, int\)

Executes the pick operation.

```csharp
protected override bool ExecutePickOperation(XmlDocument dom, string[] arPickResult, string[] arPickOp, int start, int end)
```

#### Parameters

`dom` XmlDocument

The DOM.

`arPickResult` string\[\]

The ar pick result.

`arPickOp` string\[\]

The ar pick op.

`start` int

The start.

`end` int

The end.

#### Returns

 bool

### <a id="VM_Managed_DAFUL_GearTrain_Operation_AddBearingToRBEInFE_UpdateUI_VM_Managed_UI_IUIUpdate_VM_Managed_Document_"></a> UpdateUI\(IUIUpdate, Document\)

Updates the UI.

```csharp
public static void UpdateUI(IUIUpdate updater, Document doc)
```

#### Parameters

`updater` IUIUpdate

The updater.

`doc` Document

The document.

