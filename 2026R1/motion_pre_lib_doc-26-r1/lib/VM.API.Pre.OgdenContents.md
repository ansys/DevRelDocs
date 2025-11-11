# Struct OgdenContents
<a id="VM_API_Pre_OgdenContents"></a>

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

`mu` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The Mu.

`alpha` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The Alpha.

`d` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The D.

## Properties

### <a id="VM_API_Pre_OgdenContents_Alpha"></a> Alpha

The value for the Alpha. The default value is 1.0.

```csharp
public ExpressionValueVariable Alpha { readonly get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_API_Pre_OgdenContents_D"></a> D

The value for the D. The default value is 1.0.

```csharp
public ExpressionValueVariable D { readonly get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_API_Pre_OgdenContents_Mu"></a> Mu

The value for the Mu. The default value is 1.0.

```csharp
public ExpressionValueVariable Mu { readonly get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

