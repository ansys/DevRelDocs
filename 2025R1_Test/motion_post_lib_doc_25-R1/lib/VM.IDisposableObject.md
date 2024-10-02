#  Interface IDisposableObject

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public interface IDisposableObject
```

## Properties

### <a id="VM_IDisposableObject_IsDisposed"></a> IsDisposed

```csharp
bool IsDisposed { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_IDisposableObject_TryDisposing"></a> TryDisposing

```csharp
bool TryDisposing { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_IDisposableObject_Disposed"></a> Disposed

```csharp
event EventHandler Disposed
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

### <a id="VM_IDisposableObject_Disposing"></a> Disposing

```csharp
event EventHandler Disposing
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

