# Class OperationNotFoundException

Namespace: [VM.Managed.Operation](VM.Managed.Operation.md)  
Assembly: VMAppCore.dll  

This class is to represent the operation not found exception.

```csharp
public class OperationNotFoundException : Exception
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Exception](https://learn.microsoft.com/dotnet/api/system.exception) ← 
[OperationNotFoundException](VM.Managed.Operation.OperationNotFoundException.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### OperationNotFoundException\(string, Exception\)

Initializes a new instance of the <xref href="VM.Managed.Operation.OperationNotFoundException" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OperationNotFoundException(string strType, Exception innerException)
```

#### Parameters

`strType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The type of operation that does not founded.

`innerException` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The inner exception.

### OperationNotFoundException\(string\)

Initializes a new instance of the <xref href="VM.Managed.Operation.OperationNotFoundException" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OperationNotFoundException(string strType)
```

#### Parameters

`strType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The type of operation that does not founded.

## Properties

### Message

Gets the exception information.

```csharp
public override string Message { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)


