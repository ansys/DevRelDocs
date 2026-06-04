#  Class UniteConnector

Namespace: [VM.Managed.DAFUL.Operation](VM.Managed.DAFUL.Operation.md)  
Assembly: VMOpCore.dll  

Unite connector

```csharp
public class UniteConnector : OperationBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[UniteConnector](VM.Managed.DAFUL.Operation.UniteConnector.md)

#### Derived

[GroupAutoConnector](VM.Managed.DAFUL.Operation.GroupAutoConnector.md)

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

### <a id="VM_Managed_DAFUL_Operation_UniteConnector__ctor"></a> UniteConnector\(\)

```csharp
public UniteConnector()
```

### <a id="VM_Managed_DAFUL_Operation_UniteConnector__ctor_VM_Managed_Document_"></a> UniteConnector\(Document\)

```csharp
public UniteConnector(Document doc)
```

#### Parameters

`doc` Document

### <a id="VM_Managed_DAFUL_Operation_UniteConnector__ctor_VM_Models_Pre_IDocument_System_Collections_Generic_IEnumerable_VM_Models_Pre_IObject__"></a> UniteConnector\(IDocument, IEnumerable<IObject\>\)

```csharp
public UniteConnector(IDocument doc, IEnumerable<IObject> selectedBody)
```

#### Parameters

`doc` IDocument

`selectedBody` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IObject\>

### <a id="VM_Managed_DAFUL_Operation_UniteConnector__ctor_VM_Models_Pre_IDocument_System_Collections_Generic_IEnumerable_VM_Models_Pre_IObject__System_Double_"></a> UniteConnector\(IDocument, IEnumerable<IObject\>, double\)

```csharp
public UniteConnector(IDocument doc, IEnumerable<IObject> selectedBody, double dTolerance)
```

#### Parameters

`doc` IDocument

`selectedBody` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IObject\>

`dTolerance` [double](https://learn.microsoft.com/dotnet/api/system.double)

### <a id="VM_Managed_DAFUL_Operation_UniteConnector__ctor_VM_Managed_Operation_JournalParameter_"></a> UniteConnector\(JournalParameter\)

```csharp
public UniteConnector(JournalParameter jp)
```

#### Parameters

`jp` JournalParameter

## Fields

### <a id="VM_Managed_DAFUL_Operation_UniteConnector_m_bSkipWriteJournal"></a> m\_bSkipWriteJournal

```csharp
protected bool m_bSkipWriteJournal
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### <a id="VM_Managed_DAFUL_Operation_UniteConnector_CreatedEntities"></a> CreatedEntities

```csharp
public IEnumerable<IHasID> CreatedEntities { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IHasID\>

### <a id="VM_Managed_DAFUL_Operation_UniteConnector_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_Operation_UniteConnector_SelectedBody"></a> SelectedBody

```csharp
public IList<IObject> SelectedBody { get; set; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<IObject\>

### <a id="VM_Managed_DAFUL_Operation_UniteConnector_Tolerance"></a> Tolerance

```csharp
public double Tolerance { get; set; }
```

#### Property Value

 [double](https://learn.microsoft.com/dotnet/api/system.double)

## Methods

### <a id="VM_Managed_DAFUL_Operation_UniteConnector_Execute"></a> Execute\(\)

Execute the operation.

```csharp
public override void Execute()
```

### <a id="VM_Managed_DAFUL_Operation_UniteConnector_GetInformation_System_Xml_XmlWriter_"></a> GetInformation\(XmlWriter\)

```csharp
public override void GetInformation(XmlWriter writer)
```

#### Parameters

`writer` [XmlWriter](https://learn.microsoft.com/dotnet/api/system.xml.xmlwriter)

### <a id="VM_Managed_DAFUL_Operation_UniteConnector_Unite"></a> Unite\(\)

```csharp
protected void Unite()
```

### <a id="VM_Managed_DAFUL_Operation_UniteConnector_UniteSameBase"></a> UniteSameBase\(\)

```csharp
protected void UniteSameBase()
```

