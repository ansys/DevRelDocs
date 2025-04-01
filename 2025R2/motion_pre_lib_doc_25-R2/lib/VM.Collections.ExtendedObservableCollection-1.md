# Class ExtendedObservableCollection<T\>

Namespace: [VM.Collections](VM.Collections.md)  
Assembly: VM.dll  

```csharp
public class ExtendedObservableCollection<T> : ObservableCollection<T>
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Collection<T\>](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.collection\-1) ← 
[ObservableCollection<T\>](https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.observablecollection\-1) ← 
[ExtendedObservableCollection<T\>](VM.Collections.ExtendedObservableCollection\-1.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### ExtendedObservableCollection\(bool\)

```csharp
public ExtendedObservableCollection(bool isResetToRemove = false)
```

#### Parameters

`isResetToRemove` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

### IsResetToRemove

```csharp
public bool IsResetToRemove { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### AddRange\(IEnumerable<T\>\)

```csharp
public void AddRange(IEnumerable<T> collection)
```

#### Parameters

`collection` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<T\>

### ClearItems\(\)

```csharp
protected override void ClearItems()
```

### OnCollectionChanged\(NotifyCollectionChangedEventArgs\)

```csharp
protected override void OnCollectionChanged(NotifyCollectionChangedEventArgs e)
```

#### Parameters

`e` [NotifyCollectionChangedEventArgs](https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedeventargs)

### SuspendNotifications\(\)

```csharp
public IDisposable SuspendNotifications()
```

#### Returns

 [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

### CollectionChanged

```csharp
public override event NotifyCollectionChangedEventHandler CollectionChanged
```

#### Event Type

 [NotifyCollectionChangedEventHandler](https://learn.microsoft.com/dotnet/api/system.collections.specialized.notifycollectionchangedeventhandler)


