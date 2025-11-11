# Struct Restriction
<a id="VM_API_Pre_Restriction"></a>

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

`plus` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The plus.

`minus` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The minus.

## Properties

### <a id="VM_API_Pre_Restriction_Minus"></a> Minus

The value for the minus. The default value is 0.

```csharp
public ExpressionValueVariable Minus { readonly get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_API_Pre_Restriction_Plus"></a> Plus

The value for the plus. The default value is 0.

```csharp
public ExpressionValueVariable Plus { readonly get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

