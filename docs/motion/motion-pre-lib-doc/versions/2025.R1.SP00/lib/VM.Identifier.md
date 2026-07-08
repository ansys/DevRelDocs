#  Struct Identifier

Namespace: [VM](VM.md)  
Assembly: VM.dll  

```csharp
public struct Identifier : IIdentifier
```

#### Implements

[IIdentifier](VM.IIdentifier.md)

## Properties

### <a id="VM_Identifier_Initial"></a> Initial

```csharp
public static Identifier Initial { get; }
```

#### Property Value

 [Identifier](VM.Identifier.md)

## Methods

### <a id="VM_Identifier_CompareTo_VM_Identifier_"></a> CompareTo\(Identifier\)

```csharp
public int CompareTo(Identifier other)
```

#### Parameters

`other` [Identifier](VM.Identifier.md)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Identifier_CompareTo_System_Object_"></a> CompareTo\(object\)

```csharp
public int CompareTo(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Identifier_Equals_VM_Identifier_"></a> Equals\(Identifier\)

```csharp
public bool Equals(Identifier other)
```

#### Parameters

`other` [Identifier](VM.Identifier.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Identifier_Equals_System_Object_"></a> Equals\(object\)

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Identifier_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="VM_Identifier_GetNextIdentifier_VM_Identifier_"></a> GetNextIdentifier\(Identifier\)

```csharp
public static Identifier GetNextIdentifier(Identifier other)
```

#### Parameters

`other` [Identifier](VM.Identifier.md)

#### Returns

 [Identifier](VM.Identifier.md)

### <a id="VM_Identifier_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Operators

### <a id="VM_Identifier_op_Equality_VM_Identifier_VM_Identifier_"></a> operator ==\(Identifier, Identifier\)

```csharp
public static bool operator ==(Identifier left, Identifier right)
```

#### Parameters

`left` [Identifier](VM.Identifier.md)

`right` [Identifier](VM.Identifier.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Identifier_op_GreaterThan_VM_Identifier_VM_Identifier_"></a> operator \>\(Identifier, Identifier\)

```csharp
public static bool operator >(Identifier left, Identifier right)
```

#### Parameters

`left` [Identifier](VM.Identifier.md)

`right` [Identifier](VM.Identifier.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Identifier_op_GreaterThanOrEqual_VM_Identifier_VM_Identifier_"></a> operator \>=\(Identifier, Identifier\)

```csharp
public static bool operator >=(Identifier left, Identifier right)
```

#### Parameters

`left` [Identifier](VM.Identifier.md)

`right` [Identifier](VM.Identifier.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Identifier_op_Inequality_VM_Identifier_VM_Identifier_"></a> operator \!=\(Identifier, Identifier\)

```csharp
public static bool operator !=(Identifier left, Identifier right)
```

#### Parameters

`left` [Identifier](VM.Identifier.md)

`right` [Identifier](VM.Identifier.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Identifier_op_LessThan_VM_Identifier_VM_Identifier_"></a> operator <\(Identifier, Identifier\)

```csharp
public static bool operator <(Identifier left, Identifier right)
```

#### Parameters

`left` [Identifier](VM.Identifier.md)

`right` [Identifier](VM.Identifier.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="VM_Identifier_op_LessThanOrEqual_VM_Identifier_VM_Identifier_"></a> operator <=\(Identifier, Identifier\)

```csharp
public static bool operator <=(Identifier left, Identifier right)
```

#### Parameters

`left` [Identifier](VM.Identifier.md)

`right` [Identifier](VM.Identifier.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

