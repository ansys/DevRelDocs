# Class DFException

Namespace: [VM.Managed](VM.Managed.md)  
Assembly: VMAppCore.dll  

This class is to represent the daful object exception.

```csharp
public class DFException : Exception
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Exception](https://learn.microsoft.com/dotnet/api/system.exception) ← 
[DFException](VM.Managed.DFException.md)

#### Derived

[Body.BuildCADException](VM.Managed.CAD.Body.BuildCADException.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### DFException\(string\)

Initializes a new instance of the <xref href="VM.Managed.DFException" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DFException(string strMessage)
```

#### Parameters

`strMessage` [string](https://learn.microsoft.com/dotnet/api/system.string)

The exception message.

### DFException\(string, Exception\)

Initializes a new instance of the <xref href="VM.Managed.DFException" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DFException(string strMessage, Exception inner)
```

#### Parameters

`strMessage` [string](https://learn.microsoft.com/dotnet/api/system.string)

The exception message.

`inner` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The inner exception.

### DFException\(\)

Initializes a new instance of the <xref href="VM.Managed.DFException" data-throw-if-not-resolved="false"></xref> class.

```csharp
protected DFException()
```


