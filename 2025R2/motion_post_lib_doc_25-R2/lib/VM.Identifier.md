# Struct Identifier

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```python
public struct Identifier : IIdentifier
```

#### Implements

[IIdentifier](VM.IIdentifier.md)

## Properties

### Initial

```python
public static Identifier Initial { get; }
```

#### Property Value

 [Identifier](VM.Identifier.md)

## Methods

### CompareTo\(Identifier\)

```python
public int CompareTo(Identifier other)
```

#### Parameters

`other` [Identifier](VM.Identifier.md)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CompareTo\(object\)

```python
public int CompareTo(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Equals\(Identifier\)

```python
public bool Equals(Identifier other)
```

#### Parameters

`other` [Identifier](VM.Identifier.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Equals\(object\)

```python
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetHashCode\(\)

```python
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetNextIdentifier\(Identifier\)

```python
public static Identifier GetNextIdentifier(Identifier other)
```

#### Parameters

`other` [Identifier](VM.Identifier.md)

#### Returns

 [Identifier](VM.Identifier.md)

### ToString\(\)

```python
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Operators

### operator ==\(Identifier, Identifier\)

```python
public static bool operator ==(Identifier left, Identifier right)
```

#### Parameters

`left` [Identifier](VM.Identifier.md)

`right` [Identifier](VM.Identifier.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator \>\(Identifier, Identifier\)

```python
public static bool operator >(Identifier left, Identifier right)
```

#### Parameters

`left` [Identifier](VM.Identifier.md)

`right` [Identifier](VM.Identifier.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator \>=\(Identifier, Identifier\)

```python
public static bool operator >=(Identifier left, Identifier right)
```

#### Parameters

`left` [Identifier](VM.Identifier.md)

`right` [Identifier](VM.Identifier.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator \!=\(Identifier, Identifier\)

```python
public static bool operator !=(Identifier left, Identifier right)
```

#### Parameters

`left` [Identifier](VM.Identifier.md)

`right` [Identifier](VM.Identifier.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator <\(Identifier, Identifier\)

```python
public static bool operator <(Identifier left, Identifier right)
```

#### Parameters

`left` [Identifier](VM.Identifier.md)

`right` [Identifier](VM.Identifier.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator <=\(Identifier, Identifier\)

```python
public static bool operator <=(Identifier left, Identifier right)
```

#### Parameters

`left` [Identifier](VM.Identifier.md)

`right` [Identifier](VM.Identifier.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


