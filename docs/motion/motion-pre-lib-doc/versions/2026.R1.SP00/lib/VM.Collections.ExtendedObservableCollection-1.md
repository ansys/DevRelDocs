# Class ExtendedObservableCollection<T\>
<a id="VM_Collections_ExtendedObservableCollection_1"></a>

Namespace: [VM.Collections](VM.Collections.md)  
Assembly: VM.dll  

```csharp
public class ExtendedObservableCollection<T> : ObservableCollection<T>
```

#### Type Parameters

`T` 

#### Inheritance

object ← 
Collection<T\> ← 
ObservableCollection<T\> ← 
[ExtendedObservableCollection<T\>](VM.Collections.ExtendedObservableCollection\-1.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Collections_ExtendedObservableCollection_1__ctor_System_Boolean_"></a> ExtendedObservableCollection\(bool\)

```csharp
public ExtendedObservableCollection(bool isResetToRemove = false)
```

#### Parameters

`isResetToRemove` bool

## Properties

### <a id="VM_Collections_ExtendedObservableCollection_1_IsResetToRemove"></a> IsResetToRemove

```csharp
public bool IsResetToRemove { get; set; }
```

#### Property Value

 bool

## Methods

### <a id="VM_Collections_ExtendedObservableCollection_1_AddRange_System_Collections_Generic_IEnumerable__0__"></a> AddRange\(IEnumerable<T\>\)

```csharp
public void AddRange(IEnumerable<T> collection)
```

#### Parameters

`collection` IEnumerable<T\>

### <a id="VM_Collections_ExtendedObservableCollection_1_ClearItems"></a> ClearItems\(\)

```csharp
protected override void ClearItems()
```

### <a id="VM_Collections_ExtendedObservableCollection_1_OnCollectionChanged_System_Collections_Specialized_NotifyCollectionChangedEventArgs_"></a> OnCollectionChanged\(NotifyCollectionChangedEventArgs\)

```csharp
protected override void OnCollectionChanged(NotifyCollectionChangedEventArgs e)
```

#### Parameters

`e` NotifyCollectionChangedEventArgs

### <a id="VM_Collections_ExtendedObservableCollection_1_SuspendNotifications"></a> SuspendNotifications\(\)

```csharp
public IDisposable SuspendNotifications()
```

#### Returns

 IDisposable

### <a id="VM_Collections_ExtendedObservableCollection_1_CollectionChanged"></a> CollectionChanged

```csharp
public override event NotifyCollectionChangedEventHandler CollectionChanged
```

#### Event Type

 NotifyCollectionChangedEventHandler

