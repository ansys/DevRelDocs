# Class AnonymousDisposable
<a id="VM_AnonymousDisposable"></a>

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public sealed class AnonymousDisposable
```

#### Inheritance

object ← 
[AnonymousDisposable](VM.AnonymousDisposable.md)

## Constructors

### <a id="VM_AnonymousDisposable__ctor_System_Action_"></a> AnonymousDisposable\(Action\)

```csharp
public AnonymousDisposable(Action dispose)
```

#### Parameters

`dispose` Action

## Properties

### <a id="VM_AnonymousDisposable_IsDisposed"></a> IsDisposed

```csharp
public bool IsDisposed { get; }
```

#### Property Value

 bool

## Methods

### <a id="VM_AnonymousDisposable_Create_System_Action_"></a> Create\(Action\)

```csharp
public static IDisposable Create(Action dispose)
```

#### Parameters

`dispose` Action

#### Returns

 IDisposable

### <a id="VM_AnonymousDisposable_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

