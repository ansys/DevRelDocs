#  Class ExtendedObservableCollection<T\>

Namespace: [VM.Collections](VM.Collections.md)  
Assembly: VM.dll  

```python
public class ExtendedObservableCollection<T> : ObservableCollection<T>
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Collection<T\>](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection\-1) ← 
[ObservableCollection<T\>](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection\-1) ← 
[ExtendedObservableCollection<T\>](VM.Collections.ExtendedObservableCollection\-1.md)

## Constructors

### <a id="VM_Collections_ExtendedObservableCollection_1__ctor_System_Boolean_"></a> ExtendedObservableCollection\(bool\)

```python
public ExtendedObservableCollection(bool isResetToRemove = false)
```

#### Parameters

`isResetToRemove` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### <a id="VM_Collections_ExtendedObservableCollection_1_IsResetToRemove"></a> IsResetToRemove

```python
public bool IsResetToRemove { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_Collections_ExtendedObservableCollection_1_AddRange_System_Collections_Generic_IEnumerable__0__"></a> AddRange\(IEnumerable<T\>\)

```python
public void AddRange(IEnumerable<T> collection)
```

#### Parameters

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

### <a id="VM_Collections_ExtendedObservableCollection_1_ClearItems"></a> ClearItems\(\)

```python
protected override void ClearItems()
```

### <a id="VM_Collections_ExtendedObservableCollection_1_OnCollectionChanged_System_Collections_Specialized_NotifyCollectionChangedEventArgs_"></a> OnCollectionChanged\(NotifyCollectionChangedEventArgs\)

```python
protected override void OnCollectionChanged(NotifyCollectionChangedEventArgs e)
```

#### Parameters

`e` [NotifyCollectionChangedEventArgs](https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedeventargs)

### <a id="VM_Collections_ExtendedObservableCollection_1_SuspendNotifications"></a> SuspendNotifications\(\)

```python
public IDisposable SuspendNotifications()
```

#### Returns

 [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

### <a id="VM_Collections_ExtendedObservableCollection_1_CollectionChanged"></a> CollectionChanged

```python
public override event NotifyCollectionChangedEventHandler CollectionChanged
```

#### Event Type

 [NotifyCollectionChangedEventHandler](https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedeventhandler)


