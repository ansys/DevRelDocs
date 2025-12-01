# Class EquationAPI
<a id="VM_API_Pre_EquationAPI"></a>

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

```csharp
public static class EquationAPI
```

#### Inheritance

object ← 
[EquationAPI](VM.API.Pre.EquationAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### <a id="VM_API_Pre_EquationAPI_CreateFirstOrderDifferentialEquation_VM_Managed_DAFUL_SubSystemDocument_VM_Managed_DAFUL_Equation_EquationFunctionDiff_FunctionEquType_VM_API_Pre_Obj_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_VM_Managed_SymmetricType_"></a> CreateFirstOrderDifferentialEquation\(SubSystemDocument, FunctionEquType, Obj, ExpressionValueVariable?, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Equation.Differential1" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "function" })]
public static Obj CreateFirstOrderDifferentialEquation(this SubSystemDocument document, EquationFunctionDiff.FunctionEquType diffType, Obj function, ExpressionValueVariable? initialDisp = null, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The document to create the 1st differential equation.

`diffType` [EquationFunctionDiff](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDEq/Differential1.cs).[FunctionEquType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDEq/Differential1.cs)

The solving method type of the 1st differential equation.

`function` [Obj](VM.API.Pre.Obj.md)

The function of the 1st differential equation.

`initialDisp` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The initial displacement of the 1st differential equation.

`name` string

The name of the 1st differential equation.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Equation.Differential1" data-throw-if-not-resolved="false"></xref>

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.Equation.Differential1" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document', 'function' argument is null.

 ArgumentException

Will be thrown if 'function' is not equal to <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.UserSubroutine" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_EquationAPI_CreateSecondOrderDifferentialEquation_VM_Managed_DAFUL_SubSystemDocument_VM_Managed_DAFUL_Equation_EquationFunctionDiff_FunctionEquType_VM_API_Pre_Obj_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_VM_Managed_SymmetricType_"></a> CreateSecondOrderDifferentialEquation\(SubSystemDocument, FunctionEquType, Obj, ExpressionValueVariable?, ExpressionValueVariable?, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Equation.Differential2" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "function" })]
public static Obj CreateSecondOrderDifferentialEquation(this SubSystemDocument document, EquationFunctionDiff.FunctionEquType diffType, Obj function, ExpressionValueVariable? initialDisp = null, ExpressionValueVariable? initialVel = null, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The document to create the 2nd differential equation.

`diffType` [EquationFunctionDiff](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDEq/Differential1.cs).[FunctionEquType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDEq/Differential1.cs)

The solving method type of the 2nd differential equation.

`function` [Obj](VM.API.Pre.Obj.md)

The function of the 2nd differential equation.

`initialDisp` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The initial displacement of the 2nd differential equation.

`initialVel` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The initial velocity of the 2nd differential equation.

`name` string

The name of the 2nd differential equation.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Equation.Differential2" data-throw-if-not-resolved="false"></xref>

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.Equation.Differential2" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document', 'function' argument is null.

 ArgumentException

Will be thrown if 'function' is not equal to <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.UserSubroutine" data-throw-if-not-resolved="false"></xref>.

### <a id="VM_API_Pre_EquationAPI_CreateVariableEquation_VM_Managed_DAFUL_SubSystemDocument_VM_API_Pre_Obj_System_Nullable_VM_Models_Pre_ExpressionValueVariable__System_String_VM_Managed_SymmetricType_"></a> CreateVariableEquation\(SubSystemDocument, Obj, ExpressionValueVariable?, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Equation.VariableEq" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "function" })]
public static Obj CreateVariableEquation(this SubSystemDocument document, Obj function, ExpressionValueVariable? initialDisp = null, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`document` [SubSystemDocument](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/SubSystemDocument.cs)

The document to create a variable equation.

`function` [Obj](VM.API.Pre.Obj.md)

The function of a variable equation.

`initialDisp` [ExpressionValueVariable](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/Pre/Data/VM.Models.Pre/Models/ExpressionValueVariable.cs)?

The initial displacement of a variable equation.

`name` string

The name of a variable equation.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Equation.VariableEq" data-throw-if-not-resolved="false"></xref>

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.Equation.VariableEq" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 ArgumentNullException

Will be thrown if 'document', 'function' argument is null.

 ArgumentException

Will be thrown if 'function' is not equal to <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.UserSubroutine" data-throw-if-not-resolved="false"></xref>.

