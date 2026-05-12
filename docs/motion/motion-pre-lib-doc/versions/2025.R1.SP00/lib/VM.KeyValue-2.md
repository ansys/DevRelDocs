#  Class KeyValue<TKey, TValue\>

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public class KeyValue<TKey, TValue> : ObservableObject, IObservableObject, IDisposableObject
```

#### Type Parameters

`TKey` 

`TValue` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ObservableObject](VM.ObservableObject.md) ← 
[KeyValue<TKey, TValue\>](VM.KeyValue\-2.md)

#### Implements

[IObservableObject](VM.IObservableObject.md), 
[IDisposableObject](VM.IDisposableObject.md)

#### Inherited Members

[ObservableObject.Dispose\(\)](VM.ObservableObject.md\#VM\_ObservableObject\_Dispose), 
[ObservableObject.RaisePropertyChanged\(string\)](VM.ObservableObject.md\#VM\_ObservableObject\_RaisePropertyChanged\_System\_String\_), 
[ObservableObject.RaisePropertyChanged\(string, object, object\)](VM.ObservableObject.md\#VM\_ObservableObject\_RaisePropertyChanged\_System\_String\_System\_Object\_System\_Object\_), 
[ObservableObject.Dispose\(bool\)](VM.ObservableObject.md\#VM\_ObservableObject\_Dispose\_System\_Boolean\_), 
[ObservableObject.DisposeManagedResources\(\)](VM.ObservableObject.md\#VM\_ObservableObject\_DisposeManagedResources), 
[ObservableObject.DisposeUnmanagedResources\(\)](VM.ObservableObject.md\#VM\_ObservableObject\_DisposeUnmanagedResources), 
[ObservableObject.IsDisposed](VM.ObservableObject.md\#VM\_ObservableObject\_IsDisposed), 
[ObservableObject.TryDisposing](VM.ObservableObject.md\#VM\_ObservableObject\_TryDisposing), 
[ObservableObject.Disposed](VM.ObservableObject.md\#VM\_ObservableObject\_Disposed), 
[ObservableObject.Disposing](VM.ObservableObject.md\#VM\_ObservableObject\_Disposing), 
[ObservableObject.PropertyChanged](VM.ObservableObject.md\#VM\_ObservableObject\_PropertyChanged)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_KeyValue_2__ctor__0__1_"></a> KeyValue\(TKey, TValue\)

```csharp
public KeyValue(TKey key, TValue value)
```

#### Parameters

`key` TKey

`value` TValue

## Properties

### <a id="VM_KeyValue_2_Key"></a> Key

```csharp
public TKey Key { get; set; }
```

#### Property Value

 TKey

### <a id="VM_KeyValue_2_Value"></a> Value

```csharp
public TValue Value { get; set; }
```

#### Property Value

 TValue

