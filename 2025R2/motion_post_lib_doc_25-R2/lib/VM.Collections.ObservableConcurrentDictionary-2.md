#  Class ObservableConcurrentDictionary<TKey, TValue\>

Namespace: [VM.Collections](VM.Collections.md)  
Assembly: VM.dll  

```python
public class ObservableConcurrentDictionary<TKey, TValue>
```

#### Type Parameters

`TKey` 

`TValue` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ObservableConcurrentDictionary<TKey, TValue\>](VM.Collections.ObservableConcurrentDictionary\-2.md)

## Constructors

### <a id="VM_Collections_ObservableConcurrentDictionary_2__ctor"></a> ObservableConcurrentDictionary\(\)

```python
public ObservableConcurrentDictionary()
```

## Properties

### <a id="VM_Collections_ObservableConcurrentDictionary_2_Count"></a> Count

```python
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Collections_ObservableConcurrentDictionary_2_IsReadOnly"></a> IsReadOnly

```python
public bool IsReadOnly { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Collections_ObservableConcurrentDictionary_2_Keys"></a> Keys

```python
public ICollection<TKey> Keys { get; }
```

#### Property Value

 [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<TKey\>

### <a id="VM_Collections_ObservableConcurrentDictionary_2_Values"></a> Values

```python
public ICollection<TValue> Values { get; }
```

#### Property Value

 [ICollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection\-1)<TValue\>

### <a id="VM_Collections_ObservableConcurrentDictionary_2_Item__0_"></a> this\[TKey\]

```python
public TValue this[TKey key] { get; set; }
```

#### Property Value

 TValue

## Methods

### <a id="VM_Collections_ObservableConcurrentDictionary_2___OnPropertyChanged_System_ComponentModel_PropertyChangedEventArgs_"></a> <\>OnPropertyChanged\(PropertyChangedEventArgs\)

```python
protected void <>OnPropertyChanged(PropertyChangedEventArgs eventArgs)
```

#### Parameters

`eventArgs` [PropertyChangedEventArgs](https://learn.microsoft.com/dotnet/api/system.componentmodel.propertychangedeventargs)

### <a id="VM_Collections_ObservableConcurrentDictionary_2_Add__0__1_"></a> Add\(TKey, TValue\)

```python
public void Add(TKey key, TValue value)
```

#### Parameters

`key` TKey

`value` TValue

### <a id="VM_Collections_ObservableConcurrentDictionary_2_Clear"></a> Clear\(\)

```python
public void Clear()
```

### <a id="VM_Collections_ObservableConcurrentDictionary_2_Contains_System_Collections_Generic_KeyValuePair__0__1__"></a> Contains\(KeyValuePair<TKey, TValue\>\)

```python
public bool Contains(KeyValuePair<TKey, TValue> item)
```

#### Parameters

`item` [KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair\-2)<TKey, TValue\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Collections_ObservableConcurrentDictionary_2_ContainsKey__0_"></a> ContainsKey\(TKey\)

```python
public bool ContainsKey(TKey key)
```

#### Parameters

`key` TKey

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Collections_ObservableConcurrentDictionary_2_CopyTo_System_Collections_Generic_KeyValuePair__0__1____System_Int32_"></a> CopyTo\(KeyValuePair<TKey, TValue\>\[\], int\)

```python
public void CopyTo(KeyValuePair<TKey, TValue>[] array, int arrayIndex)
```

#### Parameters

`array` [KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair\-2)<TKey, TValue\>\[\]

`arrayIndex` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Collections_ObservableConcurrentDictionary_2_GetEnumerator"></a> GetEnumerator\(\)

```python
public IEnumerator GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.ienumerator)

### <a id="VM_Collections_ObservableConcurrentDictionary_2_Remove__0_"></a> Remove\(TKey\)

```python
public bool Remove(TKey key)
```

#### Parameters

`key` TKey

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Collections_ObservableConcurrentDictionary_2_TryGetValue__0__1__"></a> TryGetValue\(TKey, out TValue\)

```python
public bool TryGetValue(TKey key, out TValue value)
```

#### Parameters

`key` TKey

`value` TValue

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Collections_ObservableConcurrentDictionary_2_CollectionChanged"></a> CollectionChanged

```python
public event NotifyCollectionChangedEventHandler CollectionChanged
```

#### Event Type

 [NotifyCollectionChangedEventHandler](https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedeventhandler)

### <a id="VM_Collections_ObservableConcurrentDictionary_2_PropertyChanged"></a> PropertyChanged

```python
public event PropertyChangedEventHandler PropertyChanged
```

#### Event Type

 [PropertyChangedEventHandler](https://learn.microsoft.com/dotnet/api/system.componentmodel.propertychangedeventhandler)


