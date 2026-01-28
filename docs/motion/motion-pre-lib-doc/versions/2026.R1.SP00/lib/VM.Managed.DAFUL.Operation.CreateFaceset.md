# Class CreateFaceset
<a id="VM_Managed_DAFUL_Operation_CreateFaceset"></a>

Namespace: [VM.Managed.DAFUL.Operation](VM.Managed.DAFUL.Operation.md)  
Assembly: VMOpCore.dll  

The faceset creation operation

```csharp
public class CreateFaceset : OperationBase, IOperation
```

#### Inheritance

object ← 
OperationBase ← 
[CreateFaceset](VM.Managed.DAFUL.Operation.CreateFaceset.md)

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

### <a id="VM_Managed_DAFUL_Operation_CreateFaceset__ctor_VM_Managed_Document_"></a> CreateFaceset\(Document\)

```csharp
public CreateFaceset(Document doc)
```

#### Parameters

`doc` Document

### <a id="VM_Managed_DAFUL_Operation_CreateFaceset__ctor_VM_Managed_Operation_JournalParameter_"></a> CreateFaceset\(JournalParameter\)

```csharp
public CreateFaceset(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

## Properties

### <a id="VM_Managed_DAFUL_Operation_CreateFaceset_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 string

## Methods

### <a id="VM_Managed_DAFUL_Operation_CreateFaceset_CreateSetFace_VM_Managed_Document3D_System_Collections_Generic_List_System_Int32__VM_Managed_ObjectBase_"></a> CreateSetFace\(Document3D, List<int\>, ObjectBase\)

```csharp
public static SetFace CreateSetFace(Document3D document, List<int> lstPID, ObjectBase objParent)
```

#### Parameters

`document` Document3D

`lstPID` List<int\>

`objParent` ObjectBase

#### Returns

 [SetFace](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SetFace.cs)

### <a id="VM_Managed_DAFUL_Operation_CreateFaceset_CreateSetFace_VM_Managed_Document3D_System_String_System_Collections_Generic_List_System_Int32__VM_Managed_ObjectBase_"></a> CreateSetFace\(Document3D, string, List<int\>, ObjectBase\)

```csharp
public static SetFace CreateSetFace(Document3D document, string strName, List<int> lstPID, ObjectBase objParent)
```

#### Parameters

`document` Document3D

`strName` string

`lstPID` List<int\>

`objParent` ObjectBase

#### Returns

 [SetFace](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SetFace.cs)

### <a id="VM_Managed_DAFUL_Operation_CreateFaceset_CreateSetFaceWithFaceIndex_VM_Managed_Document3D_System_Collections_Generic_List_System_Int32__VM_Managed_ObjectBase_"></a> CreateSetFaceWithFaceIndex\(Document3D, List<int\>, ObjectBase\)

```csharp
public static SetFace CreateSetFaceWithFaceIndex(Document3D document, List<int> lstFaceIndex, ObjectBase objParent)
```

#### Parameters

`document` Document3D

`lstFaceIndex` List<int\>

`objParent` ObjectBase

#### Returns

 [SetFace](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SetFace.cs)

### <a id="VM_Managed_DAFUL_Operation_CreateFaceset_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_Operation_CreateFaceset_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` XmlWriter

