# Class AnonymousDisposable

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```python
public sealed class AnonymousDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ??
[AnonymousDisposable](VM.AnonymousDisposable.md)

## Constructors

### AnonymousDisposable\(Action\)

```python
public AnonymousDisposable(Action dispose)
```

#### Parameters

`dispose` [Action](https://learn.microsoft.com/dotnet/api/system.action)

## Properties

### IsDisposed

```python
public bool IsDisposed { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### Create\(Action\)

```python
public static IDisposable Create(Action dispose)
```

#### Parameters

`dispose` [Action](https://learn.microsoft.com/dotnet/api/system.action)

#### Returns

 [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

### Dispose\(\)

```python
public void Dispose()
```


