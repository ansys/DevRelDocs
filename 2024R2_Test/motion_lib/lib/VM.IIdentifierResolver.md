# <a id="VM_IIdentifierResolver"></a> Interface IIdentifierResolver

Namespace: [VM](VM.md)  
Assembly: VM.dll  

식별자로 대상을 찾아 반환하는 기능을 제공합니다.

```csharp
public interface IIdentifierResolver
```

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_IIdentifierResolver_TryResolve_System_String_System_Object__"></a> TryResolve\(string, out object\)

지정한 식별자와 연결된 대상을 찾아 반환합니다.

```csharp
bool TryResolve(string identifier, out object target)
```

#### Parameters

`identifier` [string](https://learn.microsoft.com/dotnet/api/system.string)

가져올 대상의 식별자 입니다.

`target` [object](https://learn.microsoft.com/dotnet/api/system.object)

이 메서드가 반환될 때 지정된 식별자가 있으면 해당 식별자와 연결된 대상을 포함하고,
            그렇지 않으면 <code class="paramref">target</code> 매개 변수의 형식에 대한 기본값을 포함합니다. 이 매개 변수는 초기화되지 않은 상태로 전달됩니다.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

지정한 식별자가 있는 요소가 포함되어 있으면 <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a>이고, 그렇지 않으면 <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>입니다.

### <a id="VM_IIdentifierResolver_TryResolve_System_UIntPtr_System_Object__"></a> TryResolve\(UIntPtr, out object\)

지정한 key와 연결된 대상을 찾아 반환합니다.

```csharp
bool TryResolve(UIntPtr key, out object target)
```

#### Parameters

`key` [UIntPtr](https://learn.microsoft.com/dotnet/api/system.uintptr)

가져올 대상의 key 입니다.

`target` [object](https://learn.microsoft.com/dotnet/api/system.object)

이 메서드가 반환될 때 지정된 식별자가 있으면 해당 식별자와 연결된 대상을 포함하고,
            그렇지 않으면 <code class="paramref">target</code> 매개 변수의 형식에 대한 기본값을 포함합니다. 이 매개 변수는 초기화되지 않은 상태로 전달됩니다.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

key로 가져올 수 있는 요소가 포함되어 있으면 <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a>이고, 그렇지 않으면 <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>입니다.

