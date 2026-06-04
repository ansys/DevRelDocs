# Interface IObservableObject
<a id="VM_IObservableObject"></a>

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public interface IObservableObject : IDisposableObject
```

#### Implements

[IDisposableObject](VM.IDisposableObject.md)

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

