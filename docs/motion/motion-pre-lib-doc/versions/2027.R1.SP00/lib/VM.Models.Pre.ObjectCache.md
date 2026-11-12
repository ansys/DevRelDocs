# Class ObjectCache
<a id="VM_Models_Pre_ObjectCache"></a>

Namespace: [VM.Models.Pre](VM.Models.Pre.md)  
Assembly: VM.Models.Pre.dll  

```csharp
public static class ObjectCache
```

#### Inheritance

object ← 
[ObjectCache](VM.Models.Pre.ObjectCache.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Pre_ObjectCache_Add_System_UIntPtr_System_Object_"></a> Add\(UIntPtr, object\)

```csharp
public static void Add(UIntPtr key, object value)
```

#### Parameters

`key` UIntPtr

`value` object

### <a id="VM_Models_Pre_ObjectCache_Contains_System_UIntPtr_"></a> Contains\(UIntPtr\)

```csharp
public static bool Contains(UIntPtr key)
```

#### Parameters

`key` UIntPtr

#### Returns

 bool

### <a id="VM_Models_Pre_ObjectCache_GetValue_System_UIntPtr_"></a> GetValue\(UIntPtr\)

```csharp
public static object GetValue(UIntPtr key)
```

#### Parameters

`key` UIntPtr

#### Returns

 object

### <a id="VM_Models_Pre_ObjectCache_Remove_System_UIntPtr_"></a> Remove\(UIntPtr\)

```csharp
public static void Remove(UIntPtr key)
```

#### Parameters

`key` UIntPtr

### <a id="VM_Models_Pre_ObjectCache_TryGetValue_System_UIntPtr_System_Object__"></a> TryGetValue\(UIntPtr, out object\)

```csharp
public static bool TryGetValue(UIntPtr key, out object value)
```

#### Parameters

`key` UIntPtr

`value` object

#### Returns

 bool

### <a id="VM_Models_Pre_ObjectCache_TryGetValue__1_System_UIntPtr___0__"></a> TryGetValue<T\>\(UIntPtr, out T\)

```csharp
public static bool TryGetValue<T>(UIntPtr key, out T value)
```

#### Parameters

`key` UIntPtr

`value` T

#### Returns

 bool

#### Type Parameters

`T` 

