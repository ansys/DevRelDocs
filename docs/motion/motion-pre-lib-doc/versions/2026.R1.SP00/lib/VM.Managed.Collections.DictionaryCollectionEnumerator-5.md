# Class DictionaryCollectionEnumerator<T, TValue, TLink, TValueWrapper, TValueConverter\>
<a id="VM_Managed_Collections_DictionaryCollectionEnumerator_5"></a>

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

object ← 
[DictionaryCollectionEnumerator<T, TValue, TLink, TValueWrapper, TValueConverter\>](VM.Managed.Collections.DictionaryCollectionEnumerator\-5.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_Collections_DictionaryCollectionEnumerator_5__ctor_System_Collections_IEnumerator_"></a> DictionaryCollectionEnumerator\(IEnumerator\)

```csharp
public DictionaryCollectionEnumerator(IEnumerator enumerator)
```

#### Parameters

`enumerator` IEnumerator

## Properties

### <a id="VM_Managed_Collections_DictionaryCollectionEnumerator_5_Current"></a> Current

```csharp
public virtual KeyValuePair<T, TValue> Current { get; }
```

#### Property Value

 KeyValuePair<T, TValue\>

### <a id="VM_Managed_Collections_DictionaryCollectionEnumerator_5_CurrentImp"></a> CurrentImp

```csharp
override sealed object CurrentImp { get; }
```

#### Property Value

 object

## Methods

### <a id="VM_Managed_Collections_DictionaryCollectionEnumerator_5_Dispose_System_Boolean_"></a> Dispose\(bool\)

```csharp
protected virtual void Dispose(bool A_0)
```

#### Parameters

`A_0` bool

### <a id="VM_Managed_Collections_DictionaryCollectionEnumerator_5_Dispose"></a> Dispose\(\)

```csharp
public override sealed void Dispose()
```

### <a id="VM_Managed_Collections_DictionaryCollectionEnumerator_5_Finalize"></a> \~DictionaryCollectionEnumerator\(\)

```csharp
protected ~DictionaryCollectionEnumerator()
```

### <a id="VM_Managed_Collections_DictionaryCollectionEnumerator_5_MoveNext"></a> MoveNext\(\)

```csharp
public virtual bool MoveNext()
```

#### Returns

 bool

### <a id="VM_Managed_Collections_DictionaryCollectionEnumerator_5_Reset"></a> Reset\(\)

```csharp
public virtual void Reset()
```

