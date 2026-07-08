# Interface ILinkable

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

```csharp
public interface ILinkable
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Properties

### WhenNotifyDestroyed

```csharp
IObservable<object> WhenNotifyDestroyed { get; }
```

#### Property Value

 [IObservable](https://learn.microsoft.com/dotnet/api/system.iobservable\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)\>

### WhenRequestReplace

```csharp
IObservable<object> WhenRequestReplace { get; }
```

#### Property Value

 [IObservable](https://learn.microsoft.com/dotnet/api/system.iobservable\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)\>

## Methods

### Destroyed\(object\)

```csharp
void Destroyed(object caller)
```

#### Parameters

`caller` [object](https://learn.microsoft.com/dotnet/api/system.object)

### Initialize\(\)

```csharp
void Initialize()
```

### RequestReplace\(object\)

```csharp
void RequestReplace(object newValue)
```

#### Parameters

`newValue` [object](https://learn.microsoft.com/dotnet/api/system.object)


