# <a id="VM_AnonymousDisposable"></a> Class AnonymousDisposable

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public sealed class AnonymousDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnonymousDisposable](VM.AnonymousDisposable.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_AnonymousDisposable__ctor_System_Action_"></a> AnonymousDisposable\(Action\)

```csharp
public AnonymousDisposable(Action dispose)
```

#### Parameters

`dispose` [Action](https://learn.microsoft.com/dotnet/api/system.action)

## Properties

### <a id="VM_AnonymousDisposable_IsDisposed"></a> IsDisposed

```csharp
public bool IsDisposed { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_AnonymousDisposable_Create_System_Action_"></a> Create\(Action\)

```csharp
public static IDisposable Create(Action dispose)
```

#### Parameters

`dispose` [Action](https://learn.microsoft.com/dotnet/api/system.action)

#### Returns

 [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

### <a id="VM_AnonymousDisposable_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

