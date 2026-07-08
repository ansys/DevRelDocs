#  Interface IIdentifierResolver

Namespace: [VM](VM.md)  
Assembly: VM.dll  

Provides the ability to find and return an object by its identifier.

```csharp
public interface IIdentifierResolver
```

## Methods

### <a id="VM_IIdentifierResolver_TryResolve_System_String_System_Object__"></a> TryResolve\(string, out object\)

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

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the element with the specified identifier is found; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

### <a id="VM_IIdentifierResolver_TryResolve_System_UIntPtr_System_Object__"></a> TryResolve\(UIntPtr, out object\)

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

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the element with the specified key is found; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.

