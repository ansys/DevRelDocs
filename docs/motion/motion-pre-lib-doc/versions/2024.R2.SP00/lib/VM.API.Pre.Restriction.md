# Struct Restriction

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This struct represents the Restriction

```csharp
public struct Restriction
```

## Constructors

### Restriction\(\)

Default constructor

```csharp
public Restriction()
```

### Restriction\(ExpressionValueVariable, ExpressionValueVariable\)

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

### Minus

The value for the minus. The default value is 0.

```csharp
public ExpressionValueVariable Minus { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### Plus

The value for the plus. The default value is 0.

```csharp
public ExpressionValueVariable Plus { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable


