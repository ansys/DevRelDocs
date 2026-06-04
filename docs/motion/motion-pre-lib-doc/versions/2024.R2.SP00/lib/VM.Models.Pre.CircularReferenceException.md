# Class CircularReferenceException

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

```csharp
public class CircularReferenceException : InvalidOperationException
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Exception](https://learn.microsoft.com/dotnet/api/system.exception) ← 
[SystemException](https://learn.microsoft.com/dotnet/api/system.systemexception) ← 
[InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception) ← 
[CircularReferenceException](VM.Models.Pre.CircularReferenceException.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### CircularReferenceException\(object\)

```csharp
public CircularReferenceException(object problem)
```

#### Parameters

`problem` [object](https://learn.microsoft.com/dotnet/api/system.object)

### CircularReferenceException\(object, IEnumerable\)

```csharp
public CircularReferenceException(object problem, IEnumerable objectChain)
```

#### Parameters

`problem` [object](https://learn.microsoft.com/dotnet/api/system.object)

`objectChain` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

## Properties

### ObjectsChain

```csharp
public IEnumerable ObjectsChain { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

### Problem

```csharp
public object Problem { get; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)


