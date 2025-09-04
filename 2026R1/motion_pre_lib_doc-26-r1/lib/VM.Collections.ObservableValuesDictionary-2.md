#  Class ObservableValuesDictionary<TKey, TValue\>

Namespace: [VM.Collections](VM.Collections.md)  
Assembly: VM.dll  

```csharp
public class ObservableValuesDictionary<TKey, TValue>
```

#### Type Parameters

`TKey` 

`TValue` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ObservableValuesDictionary<TKey, TValue\>](VM.Collections.ObservableValuesDictionary\-2.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Collections_ObservableValuesDictionary_2__ctor"></a> ObservableValuesDictionary\(\)

```csharp
public ObservableValuesDictionary()
```

## Properties

### <a id="VM_Collections_ObservableValuesDictionary_2_Count"></a> Count

```csharp
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Collections_ObservableValuesDictionary_2_IsReadOnly"></a> IsReadOnly

```csharp
public bool IsReadOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Collections_ObservableValuesDictionary_2_Keys"></a> Keys

```csharp
public ICollection<TKey> Keys { get; }
```

#### Property Value

 [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<TKey\>

### <a id="VM_Collections_ObservableValuesDictionary_2_Values"></a> Values

```csharp
public ReadOnlyObservableCollection<TValue> Values { get; }
```

#### Property Value

 [ReadOnlyObservableCollection](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlyobservablecollection\-1)<TValue\>

### <a id="VM_Collections_ObservableValuesDictionary_2_Item__0_"></a> this\[TKey\]

```csharp
public TValue this[TKey key] { get; set; }
```

#### Property Value

 TValue

## Methods

### <a id="VM_Collections_ObservableValuesDictionary_2_Add__0__1_"></a> Add\(TKey, TValue\)

```csharp
public void Add(TKey key, TValue value)
```

#### Parameters

`key` TKey

`value` TValue

### <a id="VM_Collections_ObservableValuesDictionary_2_Clear"></a> Clear\(\)

```csharp
public void Clear()
```

### <a id="VM_Collections_ObservableValuesDictionary_2_Contains_System_Collections_Generic_KeyValuePair__0__1__"></a> Contains\(KeyValuePair<TKey, TValue\>\)

```csharp
public bool Contains(KeyValuePair<TKey, TValue> item)
```

#### Parameters

`item` [KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair\-2)<TKey, TValue\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Collections_ObservableValuesDictionary_2_ContainsKey__0_"></a> ContainsKey\(TKey\)

```csharp
public bool ContainsKey(TKey key)
```

#### Parameters

`key` TKey

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Collections_ObservableValuesDictionary_2_ContainsValue__1_"></a> ContainsValue\(TValue\)

```csharp
public bool ContainsValue(TValue value)
```

#### Parameters

`value` TValue

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Collections_ObservableValuesDictionary_2_CopyTo_System_Collections_Generic_KeyValuePair__0__1____System_Int32_"></a> CopyTo\(KeyValuePair<TKey, TValue\>\[\], int\)

```csharp
public void CopyTo(KeyValuePair<TKey, TValue>[] array, int arrayIndex)
```

#### Parameters

`array` [KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair\-2)<TKey, TValue\>\[\]

`arrayIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Collections_ObservableValuesDictionary_2_GetEnumerator"></a> GetEnumerator\(\)

```csharp
public IEnumerator GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.ienumerator)

### <a id="VM_Collections_ObservableValuesDictionary_2_Remove__0_"></a> Remove\(TKey\)

```csharp
public virtual bool Remove(TKey key)
```

#### Parameters

`key` TKey

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Collections_ObservableValuesDictionary_2_TryGetValue__0__1__"></a> TryGetValue\(TKey, out TValue\)

```csharp
public bool TryGetValue(TKey key, out TValue value)
```

#### Parameters

`key` TKey

`value` TValue

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

