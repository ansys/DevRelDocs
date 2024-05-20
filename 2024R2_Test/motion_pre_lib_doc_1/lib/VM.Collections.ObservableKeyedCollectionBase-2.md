# Class ObservableKeyedCollectionBase<TKey, TItem\>

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

### ObservableKeyedCollectionBase\(\)

```csharp
protected ObservableKeyedCollectionBase()
```

## Methods

### <\>OnPropertyChanged\(PropertyChangedEventArgs\)

```csharp
protected void <>OnPropertyChanged(PropertyChangedEventArgs eventArgs)
```

#### Parameters

`eventArgs` [PropertyChangedEventArgs](https://learn.microsoft.com/dotnet/api/system.componentmodel.propertychangedeventargs)

### AddRange\(IEnumerable<TItem\>\)

```csharp
public void AddRange(IEnumerable<TItem> items)
```

#### Parameters

`items` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<TItem\>

### ClearItems\(\)

```csharp
protected override void ClearItems()
```

### InsertItem\(int, TItem\)

```csharp
protected override void InsertItem(int index, TItem item)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`item` TItem

### OnCollectionChanged\(NotifyCollectionChangedEventArgs\)

```csharp
protected virtual void OnCollectionChanged(NotifyCollectionChangedEventArgs e)
```

#### Parameters

`e` [NotifyCollectionChangedEventArgs](https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedeventargs)

### RemoveItem\(int\)

```csharp
protected override void RemoveItem(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### SetItem\(int, TItem\)

```csharp
protected override void SetItem(int index, TItem newitem)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`newitem` TItem

### TryGetValue\(TKey, out TItem\)

```csharp
public bool TryGetValue(TKey key, out TItem item)
```

#### Parameters

`key` TKey

`item` TItem

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### CollectionChanged

```csharp
public event NotifyCollectionChangedEventHandler CollectionChanged
```

#### Event Type

 [NotifyCollectionChangedEventHandler](https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedeventhandler)

### PropertyChanged

```csharp
public event PropertyChangedEventHandler PropertyChanged
```

#### Event Type

 [PropertyChangedEventHandler](https://learn.microsoft.com/dotnet/api/system.componentmodel.propertychangedeventhandler)


