#  Class ObservableKeyedCollection<TKey, TItem\>

Namespace: [VM.Collections](VM.Collections.md)  
Assembly: VM.dll  

```csharp
public class ObservableKeyedCollection<TKey, TItem> : ObservableKeyedCollectionBase<TKey, TItem>
```

#### Type Parameters

`TKey` 

`TItem` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Collection<TItem\>](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection\-1) ← 
[KeyedCollection<TKey, TItem\>](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.keyedcollection\-2) ← 
[ObservableKeyedCollectionBase<TKey, TItem\>](VM.Collections.ObservableKeyedCollectionBase\-2.md) ← 
[ObservableKeyedCollection<TKey, TItem\>](VM.Collections.ObservableKeyedCollection\-2.md)

#### Inherited Members

[ObservableKeyedCollectionBase<TKey, TItem\>.AddRange\(IEnumerable<TItem\>\)](VM.Collections.ObservableKeyedCollectionBase\-2.md\#VM\_Collections\_ObservableKeyedCollectionBase\_2\_AddRange\_System\_Collections\_Generic\_IEnumerable\_\_1\_\_), 
[ObservableKeyedCollectionBase<TKey, TItem\>.TryGetValue\(TKey, out TItem\)](VM.Collections.ObservableKeyedCollectionBase\-2.md\#VM\_Collections\_ObservableKeyedCollectionBase\_2\_TryGetValue\_\_0\_\_1\_\_), 
[ObservableKeyedCollectionBase<TKey, TItem\>.ClearItems\(\)](VM.Collections.ObservableKeyedCollectionBase\-2.md\#VM\_Collections\_ObservableKeyedCollectionBase\_2\_ClearItems), 
[ObservableKeyedCollectionBase<TKey, TItem\>.InsertItem\(int, TItem\)](VM.Collections.ObservableKeyedCollectionBase\-2.md\#VM\_Collections\_ObservableKeyedCollectionBase\_2\_InsertItem\_System\_Int32\_\_1\_), 
[ObservableKeyedCollectionBase<TKey, TItem\>.OnCollectionChanged\(NotifyCollectionChangedEventArgs\)](VM.Collections.ObservableKeyedCollectionBase\-2.md\#VM\_Collections\_ObservableKeyedCollectionBase\_2\_OnCollectionChanged\_System\_Collections\_Specialized\_NotifyCollectionChangedEventArgs\_), 
[ObservableKeyedCollectionBase<TKey, TItem\>.RemoveItem\(int\)](VM.Collections.ObservableKeyedCollectionBase\-2.md\#VM\_Collections\_ObservableKeyedCollectionBase\_2\_RemoveItem\_System\_Int32\_), 
[ObservableKeyedCollectionBase<TKey, TItem\>.SetItem\(int, TItem\)](VM.Collections.ObservableKeyedCollectionBase\-2.md\#VM\_Collections\_ObservableKeyedCollectionBase\_2\_SetItem\_System\_Int32\_\_1\_), 
[ObservableKeyedCollectionBase<TKey, TItem\>.<\>OnPropertyChanged\(PropertyChangedEventArgs\)](VM.Collections.ObservableKeyedCollectionBase\-2.md\#VM\_Collections\_ObservableKeyedCollectionBase\_2\_\_\_OnPropertyChanged\_System\_ComponentModel\_PropertyChangedEventArgs\_), 
[ObservableKeyedCollectionBase<TKey, TItem\>.CollectionChanged](VM.Collections.ObservableKeyedCollectionBase\-2.md\#VM\_Collections\_ObservableKeyedCollectionBase\_2\_CollectionChanged), 
[ObservableKeyedCollectionBase<TKey, TItem\>.PropertyChanged](VM.Collections.ObservableKeyedCollectionBase\-2.md\#VM\_Collections\_ObservableKeyedCollectionBase\_2\_PropertyChanged)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Collections_ObservableKeyedCollection_2__ctor_System_Func__1__0__"></a> ObservableKeyedCollection\(Func<TItem, TKey\>\)

```csharp
public ObservableKeyedCollection(Func<TItem, TKey> getKeyForItem)
```

#### Parameters

`getKeyForItem` [Func](https://learn.microsoft.com/dotnet/api/system.func\-2)<TItem, TKey\>

## Methods

### <a id="VM_Collections_ObservableKeyedCollection_2_GetKeyForItem__1_"></a> GetKeyForItem\(TItem\)

```csharp
protected override TKey GetKeyForItem(TItem item)
```

#### Parameters

`item` TItem

#### Returns

 TKey

