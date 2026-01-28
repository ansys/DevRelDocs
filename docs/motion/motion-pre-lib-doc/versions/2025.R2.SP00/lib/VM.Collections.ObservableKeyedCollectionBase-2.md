#  Class ObservableKeyedCollectionBase<TKey, TItem\>

Namespace: [VM.Collections](VM.Collections.md)  
Assembly: VM.dll  

```csharp
public abstract class ObservableKeyedCollectionBase<TKey, TItem> : KeyedCollection<TKey, TItem>
```

#### Type Parameters

`TKey` 

`TItem` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Collection<TItem\>](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection\-1) ← 
[KeyedCollection<TKey, TItem\>](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.keyedcollection\-2) ← 
[ObservableKeyedCollectionBase<TKey, TItem\>](VM.Collections.ObservableKeyedCollectionBase\-2.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Collections_ObservableKeyedCollectionBase_2__ctor"></a> ObservableKeyedCollectionBase\(\)

```csharp
protected ObservableKeyedCollectionBase()
```

## Methods

### <a id="VM_Collections_ObservableKeyedCollectionBase_2___OnPropertyChanged_System_ComponentModel_PropertyChangedEventArgs_"></a> <\>OnPropertyChanged\(PropertyChangedEventArgs\)

```csharp
protected void <>OnPropertyChanged(PropertyChangedEventArgs eventArgs)
```

#### Parameters

`eventArgs` [PropertyChangedEventArgs](https://learn.microsoft.com/dotnet/api/system.componentmodel.propertychangedeventargs)

### <a id="VM_Collections_ObservableKeyedCollectionBase_2_AddRange_System_Collections_Generic_IEnumerable__1__"></a> AddRange\(IEnumerable<TItem\>\)

```csharp
public void AddRange(IEnumerable<TItem> items)
```

#### Parameters

`items` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<TItem\>

### <a id="VM_Collections_ObservableKeyedCollectionBase_2_ClearItems"></a> ClearItems\(\)

```csharp
protected override void ClearItems()
```

### <a id="VM_Collections_ObservableKeyedCollectionBase_2_InsertItem_System_Int32__1_"></a> InsertItem\(int, TItem\)

```csharp
protected override void InsertItem(int index, TItem item)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`item` TItem

### <a id="VM_Collections_ObservableKeyedCollectionBase_2_OnCollectionChanged_System_Collections_Specialized_NotifyCollectionChangedEventArgs_"></a> OnCollectionChanged\(NotifyCollectionChangedEventArgs\)

```csharp
protected virtual void OnCollectionChanged(NotifyCollectionChangedEventArgs e)
```

#### Parameters

`e` [NotifyCollectionChangedEventArgs](https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedeventargs)

### <a id="VM_Collections_ObservableKeyedCollectionBase_2_RemoveItem_System_Int32_"></a> RemoveItem\(int\)

```csharp
protected override void RemoveItem(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Collections_ObservableKeyedCollectionBase_2_SetItem_System_Int32__1_"></a> SetItem\(int, TItem\)

```csharp
protected override void SetItem(int index, TItem newitem)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`newitem` TItem

### <a id="VM_Collections_ObservableKeyedCollectionBase_2_TryGetValue__0__1__"></a> TryGetValue\(TKey, out TItem\)

```csharp
public bool TryGetValue(TKey key, out TItem item)
```

#### Parameters

`key` TKey

`item` TItem

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Collections_ObservableKeyedCollectionBase_2_CollectionChanged"></a> CollectionChanged

```csharp
public event NotifyCollectionChangedEventHandler CollectionChanged
```

#### Event Type

 [NotifyCollectionChangedEventHandler](https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedeventhandler)

### <a id="VM_Collections_ObservableKeyedCollectionBase_2_PropertyChanged"></a> PropertyChanged

```csharp
public event PropertyChangedEventHandler PropertyChanged
```

#### Event Type

 [PropertyChangedEventHandler](https://learn.microsoft.com/dotnet/api/system.componentmodel.propertychangedeventhandler)

