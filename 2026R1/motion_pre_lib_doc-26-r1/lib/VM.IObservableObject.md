# Interface IObservableObject
<a id="VM_IObservableObject"></a>

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public interface IObservableObject : IDisposableObject
```

#### Implements

[IDisposableObject](VM.IDisposableObject.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_IObservableObject_RaisePropertyChanged_System_String_"></a> RaisePropertyChanged\(string\)

```csharp
void RaisePropertyChanged(string propertyName)
```

#### Parameters

`propertyName` string

### <a id="VM_IObservableObject_RaisePropertyChanged_System_String_System_Object_System_Object_"></a> RaisePropertyChanged\(string, object, object\)

```csharp
void RaisePropertyChanged(string propertyName, object oldValue, object newValue)
```

#### Parameters

`propertyName` string

`oldValue` object

`newValue` object

