#  Struct OgdenContents

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This struct represents the Ogden Contents

```csharp
public struct OgdenContents
```

## Constructors

### <a id="VM_API_Pre_OgdenContents__ctor"></a> OgdenContents\(\)

Default constructor

```csharp
public OgdenContents()
```

### <a id="VM_API_Pre_OgdenContents__ctor_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_"></a> OgdenContents\(ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable\)

Initializes a new instance of the <xref href="VM.API.Pre.OgdenContents" data-throw-if-not-resolved="false"></xref> struct.

```csharp
public OgdenContents(ExpressionValueVariable mu, ExpressionValueVariable alpha, ExpressionValueVariable d)
```

#### Parameters

`mu` ExpressionValueVariable

The Mu.

`alpha` ExpressionValueVariable

The Alpha.

`d` ExpressionValueVariable

The D.

## Properties

### <a id="VM_API_Pre_OgdenContents_Alpha"></a> Alpha

The value for the Alpha. The default value is 1.0.

```csharp
public ExpressionValueVariable Alpha { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_OgdenContents_D"></a> D

The value for the D. The default value is 1.0.

```csharp
public ExpressionValueVariable D { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

### <a id="VM_API_Pre_OgdenContents_Mu"></a> Mu

The value for the Mu. The default value is 1.0.

```csharp
public ExpressionValueVariable Mu { readonly get; set; }
```

#### Property Value

 ExpressionValueVariable

