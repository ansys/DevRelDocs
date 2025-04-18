#  Class AnonymousDisposable

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```python
public sealed class AnonymousDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AnonymousDisposable](VM.AnonymousDisposable.md)

## Constructors

### <a id="VM_AnonymousDisposable__ctor_System_Action_"></a> AnonymousDisposable\(Action\)

```python
public AnonymousDisposable(Action dispose)
```

#### Parameters

`dispose` [Action](https://learn.microsoft.com/dotnet/api/system.action)

## Properties

### <a id="VM_AnonymousDisposable_IsDisposed"></a> IsDisposed

```python
public bool IsDisposed { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="VM_AnonymousDisposable_Create_System_Action_"></a> Create\(Action\)

```python
public static IDisposable Create(Action dispose)
```

#### Parameters

`dispose` [Action](https://learn.microsoft.com/dotnet/api/system.action)

#### Returns

 [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

### <a id="VM_AnonymousDisposable_Dispose"></a> Dispose\(\)

```python
public void Dispose()
```


