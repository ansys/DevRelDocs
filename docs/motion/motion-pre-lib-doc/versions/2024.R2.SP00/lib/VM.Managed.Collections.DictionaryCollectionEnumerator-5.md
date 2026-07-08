# Class DictionaryCollectionEnumerator<T, TValue, TLink, TValueWrapper, TValueConverter\>

Namespace: [VM.Managed.Collections](VM.Managed.Collections.md)  
Assembly: VMAppCore.dll  

```csharp
public class DictionaryCollectionEnumerator<T, TValue, TLink, TValueWrapper, TValueConverter> where T : class, ObjectBase where TLink : ILink where TValueConverter : struct, ILinkDictionaryValueConverter<TValue, TValueWrapper>
```

#### Type Parameters

`T` 

`TValue` 

`TLink` 

`TValueWrapper` 

`TValueConverter` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DictionaryCollectionEnumerator<T, TValue, TLink, TValueWrapper, TValueConverter\>](VM.Managed.Collections.DictionaryCollectionEnumerator\-5.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### DictionaryCollectionEnumerator\(IEnumerator\)

```csharp
public DictionaryCollectionEnumerator(IEnumerator enumerator)
```

#### Parameters

`enumerator` [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.ienumerator)

## Properties

### Current

```csharp
public virtual KeyValuePair<T, TValue> Current { get; }
```

#### Property Value

 [KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair\-2)<T, TValue\>

### CurrentImp

```csharp
override sealed object CurrentImp { get; }
```

#### Property Value

 [object](https://learn.microsoft.com/dotnet/api/system.object)

## Methods

### Dispose\(bool\)

```csharp
protected virtual void Dispose(bool A_0)
```

#### Parameters

`A_0` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Dispose\(\)

```csharp
public override sealed void Dispose()
```

### \~DictionaryCollectionEnumerator\(\)

```csharp
protected ~DictionaryCollectionEnumerator()
```

### MoveNext\(\)

```csharp
public virtual bool MoveNext()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Reset\(\)

```csharp
public virtual void Reset()
```


