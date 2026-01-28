# Class ObservableValuesDictionary<TKey, TValue\>
<a id="VM_Collections_ObservableValuesDictionary_2"></a>

Namespace: [VM.Collections](VM.Collections.md)  
Assembly: VM.dll  

```csharp
public class ObservableValuesDictionary<TKey, TValue>
```

#### Type Parameters

`TKey` 

`TValue` 

#### Inheritance

object ← 
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

 int

### <a id="VM_Collections_ObservableValuesDictionary_2_IsReadOnly"></a> IsReadOnly

```csharp
public bool IsReadOnly { get; }
```

#### Property Value

 bool

### <a id="VM_Collections_ObservableValuesDictionary_2_Keys"></a> Keys

```csharp
public ICollection<TKey> Keys { get; }
```

#### Property Value

 ICollection<TKey\>

### <a id="VM_Collections_ObservableValuesDictionary_2_Values"></a> Values

```csharp
public ReadOnlyObservableCollection<TValue> Values { get; }
```

#### Property Value

 ReadOnlyObservableCollection<TValue\>

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

`item` KeyValuePair<TKey, TValue\>

#### Returns

 bool

### <a id="VM_Collections_ObservableValuesDictionary_2_ContainsKey__0_"></a> ContainsKey\(TKey\)

```csharp
public bool ContainsKey(TKey key)
```

#### Parameters

`key` TKey

#### Returns

 bool

### <a id="VM_Collections_ObservableValuesDictionary_2_ContainsValue__1_"></a> ContainsValue\(TValue\)

```csharp
public bool ContainsValue(TValue value)
```

#### Parameters

`value` TValue

#### Returns

 bool

### <a id="VM_Collections_ObservableValuesDictionary_2_CopyTo_System_Collections_Generic_KeyValuePair__0__1____System_Int32_"></a> CopyTo\(KeyValuePair<TKey, TValue\>\[\], int\)

```csharp
public void CopyTo(KeyValuePair<TKey, TValue>[] array, int arrayIndex)
```

#### Parameters

`array` KeyValuePair<TKey, TValue\>\[\]

`arrayIndex` int

### <a id="VM_Collections_ObservableValuesDictionary_2_GetEnumerator"></a> GetEnumerator\(\)

```csharp
public IEnumerator GetEnumerator()
```

#### Returns

 IEnumerator

### <a id="VM_Collections_ObservableValuesDictionary_2_Remove__0_"></a> Remove\(TKey\)

```csharp
public virtual bool Remove(TKey key)
```

#### Parameters

`key` TKey

#### Returns

 bool

### <a id="VM_Collections_ObservableValuesDictionary_2_TryGetValue__0__1__"></a> TryGetValue\(TKey, out TValue\)

```csharp
public bool TryGetValue(TKey key, out TValue value)
```

#### Parameters

`key` TKey

`value` TValue

#### Returns

 bool

