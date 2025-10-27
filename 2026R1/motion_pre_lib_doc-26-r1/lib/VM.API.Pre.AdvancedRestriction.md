# Struct AdvancedRestriction
<a id="VM_API_Pre_AdvancedRestriction"></a>

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

This struct represents the Advanced Restriction

```csharp
public struct AdvancedRestriction
```

## Constructors

### <a id="VM_API_Pre_AdvancedRestriction__ctor"></a> AdvancedRestriction\(\)

Default constructor

```csharp
public AdvancedRestriction()
```

### <a id="VM_API_Pre_AdvancedRestriction__ctor_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_VM_Models_Pre_ExpressionValueVariable_"></a> AdvancedRestriction\(ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable, ExpressionValueVariable\)

Initializes a new instance of the advanced restriction class.

```csharp
public AdvancedRestriction(ExpressionValueVariable stiffnessCoefficient, ExpressionValueVariable exponentOfPenetration, ExpressionValueVariable maxDampingCoefficient, ExpressionValueVariable boundaryPenetration)
```

#### Parameters

`stiffnessCoefficient` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The stiffnessCoefficient.

`exponentOfPenetration` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The exponentOfPenetration.

`maxDampingCoefficient` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The maxDampingCoefficient.

`boundaryPenetration` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

The boundaryPenetration.

## Properties

### <a id="VM_API_Pre_AdvancedRestriction_BoundaryPenetration"></a> BoundaryPenetration

The value for the boundary penetration. The default value is 0.01.

```csharp
public ExpressionValueVariable BoundaryPenetration { readonly get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_API_Pre_AdvancedRestriction_ExponentOfPenetration"></a> ExponentOfPenetration

The value for the exponent of penetration. The default value is 1.5.

```csharp
public ExpressionValueVariable ExponentOfPenetration { readonly get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_API_Pre_AdvancedRestriction_MaxDampingCoefficient"></a> MaxDampingCoefficient

The value for the max damping coefficient. The default value is 10000.

```csharp
public ExpressionValueVariable MaxDampingCoefficient { readonly get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

### <a id="VM_API_Pre_AdvancedRestriction_StiffnessCoefficient"></a> StiffnessCoefficient

The value for the stiffness coefficient. The default value is 3500000000.

```csharp
public ExpressionValueVariable StiffnessCoefficient { readonly get; set; }
```

#### Property Value

 [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)

