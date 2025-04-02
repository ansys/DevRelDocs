#  Class CalculatePulleyStiffness

Namespace: [VM.Managed.DAFUL.CPlacingConnector.Operation](VM.Managed.DAFUL.CPlacingConnector.Operation.md)  
Assembly: VMOpCPlacingConnector.dll  

Calculate pulley stiffness

```csharp
public class CalculatePulleyStiffness : OperationBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[CalculatePulleyStiffness](VM.Managed.DAFUL.CPlacingConnector.Operation.CalculatePulleyStiffness.md)

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

### <a id="VM_Managed_DAFUL_CPlacingConnector_Operation_CalculatePulleyStiffness__ctor_System_String_System_String_System_String_"></a> CalculatePulleyStiffness\(string, string, string\)

Calculate pin stiffness

```csharp
public CalculatePulleyStiffness(string strFilePath, string strPulleyName, string strPinFilePath)
```

#### Parameters

`strFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file path

`strPulleyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The pulley name

`strPinFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The pin file path

### <a id="VM_Managed_DAFUL_CPlacingConnector_Operation_CalculatePulleyStiffness__ctor_VM_Managed_Operation_JournalParameter_"></a> CalculatePulleyStiffness\(JournalParameter\)

Calculate pin stiffness

```csharp
public CalculatePulleyStiffness(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

The journal parameter

## Properties

### <a id="VM_Managed_DAFUL_CPlacingConnector_Operation_CalculatePulleyStiffness_Name"></a> Name

Gets the name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_CPlacingConnector_Operation_CalculatePulleyStiffness_CreateReferenceMarker_VM_Managed_Document3D_VM_Managed_ObjectBase_VM_Managed_TMatrix_"></a> CreateReferenceMarker\(Document3D, ObjectBase, TMatrix\)

Create reference marker

```csharp
public void CreateReferenceMarker(Document3D document3D, ObjectBase body, TMatrix matT)
```

#### Parameters

`document3D` Document3D

The document

`body` ObjectBase

The parent body

`matT` TMatrix

The matrix

### <a id="VM_Managed_DAFUL_CPlacingConnector_Operation_CalculatePulleyStiffness_Execute"></a> Execute\(\)

Execute

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_CPlacingConnector_Operation_CalculatePulleyStiffness_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

Gets the information.

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

The writer.

### <a id="VM_Managed_DAFUL_CPlacingConnector_Operation_CalculatePulleyStiffness_Result"></a> Result\(\)

Results this instance.

```csharp
public List<double[]> Result()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[double](https://learn.microsoft.com/dotnet/api/system.double)\[\]\>

### <a id="VM_Managed_DAFUL_CPlacingConnector_Operation_CalculatePulleyStiffness_Success"></a> Success\(\)

success flag

```csharp
public bool Success()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

