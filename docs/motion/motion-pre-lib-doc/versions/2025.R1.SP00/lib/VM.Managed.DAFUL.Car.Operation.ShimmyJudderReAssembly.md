#  Class ShimmyJudderReAssembly

Namespace: [VM.Managed.DAFUL.Car.Operation](VM.Managed.DAFUL.Car.Operation.md)  
Assembly: VMOpFullCar.dll  

The shimmy-judder reassembly operation

```csharp
public class ShimmyJudderReAssembly : FullCarReAssembly, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
DialogOperation ← 
[FullCarReAssembly](VM.Managed.DAFUL.Car.Operation.FullCarReAssembly.md) ← 
[ShimmyJudderReAssembly](VM.Managed.DAFUL.Car.Operation.ShimmyJudderReAssembly.md)

#### Implements

IOperation

#### Inherited Members

[FullCarReAssembly.m\_strAssemblyInfo](VM.Managed.DAFUL.Car.Operation.FullCarReAssembly.md\#VM\_Managed\_DAFUL\_Car\_Operation\_FullCarReAssembly\_m\_strAssemblyInfo), 
[FullCarReAssembly.m\_bIsFullCarExceptWheel](VM.Managed.DAFUL.Car.Operation.FullCarReAssembly.md\#VM\_Managed\_DAFUL\_Car\_Operation\_FullCarReAssembly\_m\_bIsFullCarExceptWheel), 
[FullCarReAssembly.Execute\(\)](VM.Managed.DAFUL.Car.Operation.FullCarReAssembly.md\#VM\_Managed\_DAFUL\_Car\_Operation\_FullCarReAssembly\_Execute), 
[FullCarReAssembly.SetDialog\(\)](VM.Managed.DAFUL.Car.Operation.FullCarReAssembly.md\#VM\_Managed\_DAFUL\_Car\_Operation\_FullCarReAssembly\_SetDialog), 
[FullCarReAssembly.UpdateUI\(IUIUpdate, Document\)](VM.Managed.DAFUL.Car.Operation.FullCarReAssembly.md\#VM\_Managed\_DAFUL\_Car\_Operation\_FullCarReAssembly\_UpdateUI\_VM\_Managed\_UI\_IUIUpdate\_VM\_Managed\_Document\_), 
[FullCarReAssembly.OnApply\(object, CancelEventArgs\)](VM.Managed.DAFUL.Car.Operation.FullCarReAssembly.md\#VM\_Managed\_DAFUL\_Car\_Operation\_FullCarReAssembly\_OnApply\_System\_Object\_System\_ComponentModel\_CancelEventArgs\_), 
[FullCarReAssembly.Name](VM.Managed.DAFUL.Car.Operation.FullCarReAssembly.md\#VM\_Managed\_DAFUL\_Car\_Operation\_FullCarReAssembly\_Name), 
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

### <a id="VM_Managed_DAFUL_Car_Operation_ShimmyJudderReAssembly__ctor_VM_Managed_Document_"></a> ShimmyJudderReAssembly\(Document\)

```csharp
public ShimmyJudderReAssembly(Document doc)
```

#### Parameters

`doc` Document

## Properties

### <a id="VM_Managed_DAFUL_Car_Operation_ShimmyJudderReAssembly_Name"></a> Name

Gets the operation name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="VM_Managed_DAFUL_Car_Operation_ShimmyJudderReAssembly_SetDialog"></a> SetDialog\(\)

```csharp
protected override void SetDialog()
```

