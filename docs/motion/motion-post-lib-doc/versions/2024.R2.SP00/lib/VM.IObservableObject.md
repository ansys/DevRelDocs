# Interface IObservableObject

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public interface IObservableObject : IDisposableObject
```

#### Implements

[IDisposableObject](VM.IDisposableObject.md)

## Methods

### RaisePropertyChanged\(string\)

```csharp
void RaisePropertyChanged(string propertyName)
```

#### Parameters

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### RaisePropertyChanged\(string, object, object\)

```csharp
void RaisePropertyChanged(string propertyName, object oldValue, object newValue)
```

#### Parameters

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`oldValue` [object](https://learn.microsoft.com/dotnet/api/system.object)

`newValue` [object](https://learn.microsoft.com/dotnet/api/system.object)


