#  Class GetBoundingBoxOp

Namespace: [VM.Managed.CAD](VM.Managed.CAD.md)  
Assembly: VMAppCore.dll  

This class is to represent the [Get Bounding Box] Operation.

```csharp
public class GetBoundingBoxOp : OperationBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OperationBase](VM.Managed.Operation.OperationBase.md) ← 
[GetBoundingBoxOp](VM.Managed.CAD.GetBoundingBoxOp.md)

#### Implements

IOperation

#### Inherited Members

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

### <a id="VM_Managed_CAD_GetBoundingBoxOp__ctor_VM_Managed_CAD_Body_VM_Managed_TMatrix_VM_Managed_CAD_BoxingMode_"></a> GetBoundingBoxOp\(Body, TMatrix, BoxingMode\)

```csharp
public GetBoundingBoxOp(Body body, TMatrix matT, BoxingMode boxingMode)
```

#### Parameters

`body` [Body](VM.Managed.CAD.Body.md)

`matT` [TMatrix](VM.Managed.TMatrix.md)

`boxingMode` [BoxingMode](VM.Managed.CAD.BoxingMode.md)

## Properties

### <a id="VM_Managed_CAD_GetBoundingBoxOp_MaxPt"></a> MaxPt

Gets the direction.

```csharp
public VectorBase MaxPt { get; }
```

#### Property Value

 [VectorBase](VM.Managed.VectorBase.md)

### <a id="VM_Managed_CAD_GetBoundingBoxOp_MinPt"></a> MinPt

Gets the point.

```csharp
public VectorBase MinPt { get; }
```

#### Property Value

 [VectorBase](VM.Managed.VectorBase.md)

### <a id="VM_Managed_CAD_GetBoundingBoxOp_Name"></a> Name

Gets the name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_CAD_GetBoundingBoxOp_Result"></a> Result

Gets the result.

```csharp
public bool Result { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_CAD_GetBoundingBoxOp_Execute"></a> Execute\(\)

Executes this instance.

```csharp
public override void Execute()
```

