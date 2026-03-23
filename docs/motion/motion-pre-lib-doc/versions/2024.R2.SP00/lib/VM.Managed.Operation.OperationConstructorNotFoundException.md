# Class OperationConstructorNotFoundException

Namespace: [VM.Managed.Operation](VM.Managed.Operation.md)  
Assembly: VMAppCore.dll  

This class is to represent the operation constructor not found exception.

```csharp
public class OperationConstructorNotFoundException : Exception
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Exception](https://learn.microsoft.com/dotnet/api/system.exception) ← 
[OperationConstructorNotFoundException](VM.Managed.Operation.OperationConstructorNotFoundException.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### OperationConstructorNotFoundException\(string, Exception\)

Initializes a new instance of the <xref href="VM.Managed.Operation.OperationConstructorNotFoundException" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OperationConstructorNotFoundException(string strType, Exception innerException)
```

#### Parameters

`strType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The type of operation that does not founded.

`innerException` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The inner exception.

### OperationConstructorNotFoundException\(string\)

Initializes a new instance of the <xref href="VM.Managed.Operation.OperationConstructorNotFoundException" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OperationConstructorNotFoundException(string strType)
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


