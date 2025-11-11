# Class OperationStatusEventArgs
<a id="VM_Managed_Operation_OperationStatusEventArgs"></a>

Namespace: [VM.Managed.Operation](VM.Managed.Operation.md)  
Assembly: VMAppCore.dll  

This class is to represent the evnet argument that has a operation status.

```csharp
public class OperationStatusEventArgs : EventArgs
```

#### Inheritance

object ← 
EventArgs ← 
[OperationStatusEventArgs](VM.Managed.Operation.OperationStatusEventArgs.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Operation_OperationStatusEventArgs__ctor_VM_Managed_Operation_OperationStatus_VM_Managed_Operation_OperationStatus_"></a> OperationStatusEventArgs\(OperationStatus, OperationStatus\)

Initializes a new instance of the <xref href="VM.Managed.Operation.OperationStatusEventArgs" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OperationStatusEventArgs(OperationStatus status, OperationStatus statusPrev)
```

#### Parameters

`status` [OperationStatus](VM.Managed.Operation.OperationStatus.md)

The operation status.

`statusPrev` [OperationStatus](VM.Managed.Operation.OperationStatus.md)

The previous operation status.

## Properties

### <a id="VM_Managed_Operation_OperationStatusEventArgs_PreviousStatus"></a> PreviousStatus

Gets the previous operation status.

```csharp
public OperationStatus PreviousStatus { get; }
```

#### Property Value

 [OperationStatus](VM.Managed.Operation.OperationStatus.md)

### <a id="VM_Managed_Operation_OperationStatusEventArgs_Status"></a> Status

Gets the operation status.

```csharp
public OperationStatus Status { get; }
```

#### Property Value

 [OperationStatus](VM.Managed.Operation.OperationStatus.md)

