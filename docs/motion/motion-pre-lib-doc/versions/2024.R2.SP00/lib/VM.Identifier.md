# Struct Identifier

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public struct Identifier : IIdentifier
```

#### Implements

[IIdentifier](VM.IIdentifier.md)

## Properties

### Initial

```csharp
public static Identifier Initial { get; }
```

#### Property Value

 [Identifier](VM.Identifier.md)

## Methods

### CompareTo\(Identifier\)

```csharp
public int CompareTo(Identifier other)
```

#### Parameters

`other` [Identifier](VM.Identifier.md)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CompareTo\(object\)

```csharp
public int CompareTo(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Equals\(Identifier\)

```csharp
public bool Equals(Identifier other)
```

#### Parameters

`other` [Identifier](VM.Identifier.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Equals\(object\)

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GetNextIdentifier\(Identifier\)

```csharp
public static Identifier GetNextIdentifier(Identifier other)
```

#### Parameters

`other` [Identifier](VM.Identifier.md)

#### Returns

 [Identifier](VM.Identifier.md)

### ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Operators

### operator ==\(Identifier, Identifier\)

```csharp
public static bool operator ==(Identifier left, Identifier right)
```

#### Parameters

`left` [Identifier](VM.Identifier.md)

`right` [Identifier](VM.Identifier.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator \>\(Identifier, Identifier\)

```csharp
public static bool operator >(Identifier left, Identifier right)
```

#### Parameters

`left` [Identifier](VM.Identifier.md)

`right` [Identifier](VM.Identifier.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator \>=\(Identifier, Identifier\)

```csharp
public static bool operator >=(Identifier left, Identifier right)
```

#### Parameters

`left` [Identifier](VM.Identifier.md)

`right` [Identifier](VM.Identifier.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator \!=\(Identifier, Identifier\)

```csharp
public static bool operator !=(Identifier left, Identifier right)
```

#### Parameters

`left` [Identifier](VM.Identifier.md)

`right` [Identifier](VM.Identifier.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator <\(Identifier, Identifier\)

```csharp
public static bool operator <(Identifier left, Identifier right)
```

#### Parameters

`left` [Identifier](VM.Identifier.md)

`right` [Identifier](VM.Identifier.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### operator <=\(Identifier, Identifier\)

```csharp
public static bool operator <=(Identifier left, Identifier right)
```

#### Parameters

`left` [Identifier](VM.Identifier.md)

`right` [Identifier](VM.Identifier.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


