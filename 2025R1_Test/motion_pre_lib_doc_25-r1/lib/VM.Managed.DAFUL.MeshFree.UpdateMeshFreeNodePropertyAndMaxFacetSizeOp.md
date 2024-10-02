#  Class UpdateMeshFreeNodePropertyAndMaxFacetSizeOp

Namespace: [VM.Managed.DAFUL.MeshFree](VM.Managed.DAFUL.MeshFree.md)  
Assembly: VMDMeshFree.dll  

UpdateMeshFreeNodePropertyAndMaxFacetSizeOp

```csharp
public class UpdateMeshFreeNodePropertyAndMaxFacetSizeOp : OperationBase, IOperation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
OperationBase ← 
[UpdateMeshFreeNodePropertyAndMaxFacetSizeOp](VM.Managed.DAFUL.MeshFree.UpdateMeshFreeNodePropertyAndMaxFacetSizeOp.md)

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

### <a id="VM_Managed_DAFUL_MeshFree_UpdateMeshFreeNodePropertyAndMaxFacetSizeOp__ctor"></a> UpdateMeshFreeNodePropertyAndMaxFacetSizeOp\(\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MeshFree.UpdateMeshFreeNodePropertyAndMaxFacetSizeOp" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UpdateMeshFreeNodePropertyAndMaxFacetSizeOp()
```

### <a id="VM_Managed_DAFUL_MeshFree_UpdateMeshFreeNodePropertyAndMaxFacetSizeOp__ctor_VM_Managed_IAttributeContainer_"></a> UpdateMeshFreeNodePropertyAndMaxFacetSizeOp\(IAttributeContainer\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MeshFree.UpdateMeshFreeNodePropertyAndMaxFacetSizeOp" data-throw-if-not-resolved="false"></xref> class.

```csharp
public UpdateMeshFreeNodePropertyAndMaxFacetSizeOp(IAttributeContainer container)
```

#### Parameters

`container` IAttributeContainer

The container.

## Properties

### <a id="VM_Managed_DAFUL_MeshFree_UpdateMeshFreeNodePropertyAndMaxFacetSizeOp_IsHistoryMerge"></a> IsHistoryMerge

Gets the history merge flag.

```csharp
public override bool IsHistoryMerge { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Managed_DAFUL_MeshFree_UpdateMeshFreeNodePropertyAndMaxFacetSizeOp_Name"></a> Name

Gets the Name.

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="VM_Managed_DAFUL_MeshFree_UpdateMeshFreeNodePropertyAndMaxFacetSizeOp_Success"></a> Success

Gets the success flag.

```csharp
public bool Success { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Managed_DAFUL_MeshFree_UpdateMeshFreeNodePropertyAndMaxFacetSizeOp_Execute"></a> Execute\(\)

Executes this instance.

```csharp
public override void Execute()
```

