# Struct MultiObjectTarget
<a id="VM_Managed_DAFUL_MultiObjectTarget"></a>

Namespace: [VM.Managed.DAFUL](VM.Managed.DAFUL.md)  
Assembly: VMDFBase.dll  

This struct is to represent the object target for multi.

```csharp
public struct MultiObjectTarget
```

## Constructors

### <a id="VM_Managed_DAFUL_MultiObjectTarget__ctor_VM_Managed_ObjectBase_VM_Managed_ObjectBase_"></a> MultiObjectTarget\(ObjectBase, ObjectBase\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MultiObjectTarget" data-throw-if-not-resolved="false"></xref> struct.

```csharp
public MultiObjectTarget(ObjectBase obBase, ObjectBase obAction)
```

#### Parameters

`obBase` ObjectBase

The base object.

`obAction` ObjectBase

The action object.

### <a id="VM_Managed_DAFUL_MultiObjectTarget__ctor_VM_Managed_ObjectBase_VM_Managed_ObjectBase_System_Boolean_"></a> MultiObjectTarget\(ObjectBase, ObjectBase, bool\)

Initializes a new instance of the <xref href="VM.Managed.DAFUL.MultiObjectTarget" data-throw-if-not-resolved="false"></xref> struct.

```csharp
public MultiObjectTarget(ObjectBase obBase, ObjectBase obAction, bool bSwapBaseAction)
```

#### Parameters

`obBase` ObjectBase

The base object.

`obAction` ObjectBase

The action object.

`bSwapBaseAction` bool

if set to <code>true</code> [swap base action].

## Fields

### <a id="VM_Managed_DAFUL_MultiObjectTarget_ActionObject"></a> ActionObject

Get action object.

```csharp
public ObjectBase ActionObject
```

#### Field Value

 ObjectBase

### <a id="VM_Managed_DAFUL_MultiObjectTarget_BaseObject"></a> BaseObject

Get base object.

```csharp
public ObjectBase BaseObject
```

#### Field Value

 ObjectBase

## Methods

### <a id="VM_Managed_DAFUL_MultiObjectTarget_Equals_System_Object_"></a> Equals\(object\)

Determines whether the specified <xref href="System.Object" data-throw-if-not-resolved="false"></xref> is equal to this instance.

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` object

The <xref href="System.Object" data-throw-if-not-resolved="false"></xref> to compare with this instance.

#### Returns

 bool

<code>true</code> if the specified <xref href="System.Object" data-throw-if-not-resolved="false"></xref> is equal to this instance; otherwise, <code>false</code>.

### <a id="VM_Managed_DAFUL_MultiObjectTarget_GetHashCode"></a> GetHashCode\(\)

Returns a hash code for this instance.

```csharp
public override int GetHashCode()
```

#### Returns

 int

A hash code for this instance, suitable for use in hashing algorithms and data structures like a hash table.

## Operators

### <a id="VM_Managed_DAFUL_MultiObjectTarget_op_Equality_VM_Managed_DAFUL_MultiObjectTarget_VM_Managed_DAFUL_MultiObjectTarget_"></a> operator ==\(MultiObjectTarget, MultiObjectTarget\)

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

 bool

The result of the operator.

### <a id="VM_Managed_DAFUL_MultiObjectTarget_op_Inequality_VM_Managed_DAFUL_MultiObjectTarget_VM_Managed_DAFUL_MultiObjectTarget_"></a> operator \!=\(MultiObjectTarget, MultiObjectTarget\)

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

 bool

The result of the operator.

