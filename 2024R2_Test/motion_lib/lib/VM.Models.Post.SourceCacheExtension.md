# <a id="VM_Models_Post_SourceCacheExtension"></a> Class SourceCacheExtension

Namespace: [VM.Models.Post](VM.Models.Post.md)  
Assembly: VM.Models.Post.dll  

```csharp
public static class SourceCacheExtension
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SourceCacheExtension](VM.Models.Post.SourceCacheExtension.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_Models_Post_SourceCacheExtension_GetConnectableObservable__2_DynamicData_IObservableCache___0___1__System_Boolean_"></a> GetConnectableObservable<TObject, TKey\>\(IObservableCache<TObject, TKey\>, bool\)

```csharp
public static IConnectableObservable<IChangeSet<TObject, TKey>> GetConnectableObservable<TObject, TKey>(this IObservableCache<TObject, TKey> sourceCache, bool isReplay = true)
```

#### Parameters

`sourceCache` IObservableCache<TObject, TKey\>

`isReplay` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 IConnectableObservable<IChangeSet<TObject, TKey\>\>

#### Type Parameters

`TObject` 

`TKey` 

### <a id="VM_Models_Post_SourceCacheExtension_TryGetItem__2_DynamicData_IObservableCache___0___1____1___0__"></a> TryGetItem<TObject, TKey\>\(IObservableCache<TObject, TKey\>, TKey, out TObject\)

```csharp
public static bool TryGetItem<TObject, TKey>(this IObservableCache<TObject, TKey> sourceCache, TKey key, out TObject @object)
```

#### Parameters

`sourceCache` IObservableCache<TObject, TKey\>

`key` TKey

`object` TObject

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TObject` 

`TKey` 

