# Interface IIdentifierResolver

Namespace: [VM](VM.md)  
Assembly: VM.dll  

Provides the ability to find and return an object by its identifier.

```csharp
public interface IIdentifierResolver
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### TryResolve\(string, out object\)

Finds and returns the destination object associated with the specified identifier.

```csharp
bool TryResolve(string identifier, out object target)
```

#### Parameters

`identifier` [string](https://learn.microsoft.com/dotnet/api/system.string)

The identifier of the target to find.

`target` [object](https://learn.microsoft.com/dotnet/api/system.object)

When this method returns, it contains the target associated with the specified identifier, if any,
            otherwise it contains the default value for the format of the <code class="paramref">target</code> parameter. This parameter is passed uninitialized.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

(true)[https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool] if the element with the specified identifier is found; otherwise, (false)[https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool].

### TryResolve\(UIntPtr, out object\)

Finds and returns the targets associated with the specified key.

```csharp
bool TryResolve(UIntPtr key, out object target)
```

#### Parameters

`key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

The key of the target to find.

`target` [object](https://learn.microsoft.com/dotnet/api/system.object)

When this method returns, it contains the target associated with the specified key, if any,
            otherwise it contains the default value for the format of the <code class="paramref">target</code> parameter. This parameter is passed uninitialized.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

(true)[https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool] if the element with the specified key is found; otherwise, (false)[https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool].


