# Struct MultiObjectTarget

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This struct is to represent the object target for multi.

```csharp
public struct MultiObjectTarget
```

## Constructors

### MultiObjectTarget\(ObjectBase, ObjectBase\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MultiObjectTarget" data-throw-if-not-resolved="false"></xref> struct.

```csharp
public MultiObjectTarget(ObjectBase obBase, ObjectBase obAction)
```

#### Parameters

`obBase` ObjectBase

The base object.

`obAction` ObjectBase

The action object.

### MultiObjectTarget\(ObjectBase, ObjectBase, bool\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MultiObjectTarget" data-throw-if-not-resolved="false"></xref> struct.

```csharp
public MultiObjectTarget(ObjectBase obBase, ObjectBase obAction, bool bSwapBaseAction)
```

#### Parameters

`obBase` ObjectBase

The base object.

`obAction` ObjectBase

The action object.

`bSwapBaseAction` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

if set to <code>true</code> [swap base action].

## Fields

### ActionObject

Get action object.

```csharp
public ObjectBase ActionObject
```

#### Field Value

 ObjectBase

### BaseObject

Get base object.

```csharp
public ObjectBase BaseObject
```

#### Field Value

 ObjectBase

## Methods

### Equals\(object\)

Determines whether the specified <xref href="System.Object" data-throw-if-not-resolved="false"></xref> is equal to this instance.

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

The <xref href="System.Object" data-throw-if-not-resolved="false"></xref> to compare with this instance.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if the specified <xref href="System.Object" data-throw-if-not-resolved="false"></xref> is equal to this instance; otherwise, <code>false</code>.

### GetHashCode\(\)

Returns a hash code for this instance.

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

A hash code for this instance, suitable for use in hashing algorithms and data structures like a hash table.

## Operators

### operator ==\(MultiObjectTarget, MultiObjectTarget\)

Implements the operator ==.

```csharp
public static bool operator ==(MultiObjectTarget left, MultiObjectTarget right)
```

#### Parameters

`left` [MultiObjectTarget](VM.Managed.DAFUL.MultiObjectTarget.md)

The left.

`right` [MultiObjectTarget](VM.Managed.DAFUL.MultiObjectTarget.md)

The right.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The result of the operator.

### operator \!=\(MultiObjectTarget, MultiObjectTarget\)

Implements the operator !=.

```csharp
public static bool operator !=(MultiObjectTarget left, MultiObjectTarget right)
```

#### Parameters

`left` [MultiObjectTarget](VM.Managed.DAFUL.MultiObjectTarget.md)

The left.

`right` [MultiObjectTarget](VM.Managed.DAFUL.MultiObjectTarget.md)

The right.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The result of the operator.


