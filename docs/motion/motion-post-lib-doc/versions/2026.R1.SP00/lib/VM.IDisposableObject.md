# Interface IDisposableObject
<a id="VM_IDisposableObject"></a>

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

 bool

### <a id="VM_IDisposableObject_TryDisposing"></a> TryDisposing

```csharp
bool TryDisposing { get; }
```

#### Property Value

 bool

### <a id="VM_IDisposableObject_Disposed"></a> Disposed

```csharp
event EventHandler Disposed
```

#### Event Type

 EventHandler

### <a id="VM_IDisposableObject_Disposing"></a> Disposing

```csharp
event EventHandler Disposing
```

#### Event Type

 EventHandler

