# Interface IDisposableObject

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public interface IDisposableObject
```

## Properties

### IsDisposed

```csharp
bool IsDisposed { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### TryDisposing

```csharp
bool TryDisposing { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Disposed

```csharp
event EventHandler Disposed
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)

### Disposing

```csharp
event EventHandler Disposing
```

#### Event Type

 [EventHandler](https://learn.microsoft.com/dotnet/api/system.eventhandler)


