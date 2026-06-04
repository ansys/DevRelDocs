#  Class GroupAutoConnector

Namespace: [VM.Managed.DAFUL.Operation](VM.Managed.DAFUL.Operation.md)  
Assembly: VMOpCore.dll  

The group auto connector operation

```csharp
public class GroupAutoConnector : UniteConnector, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[UniteConnector](VM.Managed.DAFUL.Operation.UniteConnector.md) ← 
[GroupAutoConnector](VM.Managed.DAFUL.Operation.GroupAutoConnector.md)

#### Implements

IOperation

#### Inherited Members

[UniteConnector.m\_bSkipWriteJournal](VM.Managed.DAFUL.Operation.UniteConnector.md\#VM\_Managed\_DAFUL\_Operation\_UniteConnector\_m\_bSkipWriteJournal), 
[UniteConnector.Execute\(\)](VM.Managed.DAFUL.Operation.UniteConnector.md\#VM\_Managed\_DAFUL\_Operation\_UniteConnector\_Execute), 
[UniteConnector.GetInformation\(XmlWriter\)](VM.Managed.DAFUL.Operation.UniteConnector.md\#VM\_Managed\_DAFUL\_Operation\_UniteConnector\_GetInformation\_System\_Xml\_XmlWriter\_), 
[UniteConnector.Unite\(\)](VM.Managed.DAFUL.Operation.UniteConnector.md\#VM\_Managed\_DAFUL\_Operation\_UniteConnector\_Unite), 
[UniteConnector.UniteSameBase\(\)](VM.Managed.DAFUL.Operation.UniteConnector.md\#VM\_Managed\_DAFUL\_Operation\_UniteConnector\_UniteSameBase), 
[UniteConnector.CreatedEntities](VM.Managed.DAFUL.Operation.UniteConnector.md\#VM\_Managed\_DAFUL\_Operation\_UniteConnector\_CreatedEntities), 
[UniteConnector.Name](VM.Managed.DAFUL.Operation.UniteConnector.md\#VM\_Managed\_DAFUL\_Operation\_UniteConnector\_Name), 
[UniteConnector.SelectedBody](VM.Managed.DAFUL.Operation.UniteConnector.md\#VM\_Managed\_DAFUL\_Operation\_UniteConnector\_SelectedBody), 
[UniteConnector.Tolerance](VM.Managed.DAFUL.Operation.UniteConnector.md\#VM\_Managed\_DAFUL\_Operation\_UniteConnector\_Tolerance), 
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

### <a id="VM_Managed_DAFUL_Operation_GroupAutoConnector__ctor_VM_Managed_Document_"></a> GroupAutoConnector\(Document\)

```csharp
public GroupAutoConnector(Document doc)
```

#### Parameters

`doc` Document

### <a id="VM_Managed_DAFUL_Operation_GroupAutoConnector__ctor_VM_Managed_Document_System_Collections_Generic_IEnumerable_System_String__"></a> GroupAutoConnector\(Document, IEnumerable<string\>\)

```csharp
public GroupAutoConnector(Document doc, IEnumerable<string> groupNames)
```

#### Parameters

`doc` Document

`groupNames` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="VM_Managed_DAFUL_Operation_GroupAutoConnector__ctor_VM_Managed_Operation_JournalParameter_"></a> GroupAutoConnector\(JournalParameter\)

```csharp
public GroupAutoConnector(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

## Properties

### <a id="VM_Managed_DAFUL_Operation_GroupAutoConnector_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_Operation_GroupAutoConnector_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_Operation_GroupAutoConnector_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

