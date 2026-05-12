#  Struct Restriction

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This struct represents the Restriction

```csharp
public struct Restriction
```

## Constructors

### <a id="VM_API_Pre_Restriction__ctor"></a> Restriction\(\)

Default constructor

```csharp
public Restriction()
```

### <a id="VM_API_Pre_Restriction__ctor_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_"></a> Restriction\(ExpressionValueVariable, ExpressionValueVariable\)

Initializes a new instance of the restriction class.

```csharp
public Restriction(ExpressionValueVariable plus, ExpressionValueVariable minus)
```

#### Parameters

`plus` ExpressionValueVariable

The plus.

`minus` ExpressionValueVariable

The minus.

## Properties

### <a id="VM_API_Pre_Restriction_Minus"></a> Minus

The value for the minus. The default value is 0.

```csharp
public ExpressionValueVariable Minus { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_Restriction_Plus"></a> Plus

The value for the plus. The default value is 0.

```csharp
public ExpressionValueVariable Plus { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

