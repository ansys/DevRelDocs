# Class OperationStatusEventArgs

Namespace: [VM.Managed.Operation](VM.Managed.Operation.md)  
Assembly: VMAppCore.dll  

This class is to represent the evnet argument that has a operation status.

```csharp
public class OperationStatusEventArgs : EventArgs
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventArgs](https://learn.microsoft.com/dotnet/api/system.eventargs) ← 
[OperationStatusEventArgs](VM.Managed.Operation.OperationStatusEventArgs.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### OperationStatusEventArgs\(OperationStatus, OperationStatus\)

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

### PreviousStatus

Gets the previous operation status.

```csharp
public OperationStatus PreviousStatus { get; }
```

#### Property Value

 [OperationStatus](VM.Managed.Operation.OperationStatus.md)

### Status

Gets the operation status.

```csharp
public OperationStatus Status { get; }
```

#### Property Value

 [OperationStatus](VM.Managed.Operation.OperationStatus.md)


