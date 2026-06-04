# Class EquationAPI

Namespace: [VM.API.Pre](VM.API.Pre.md)  
Assembly: VM.API.Pre.dll  

```csharp
public static class EquationAPI
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EquationAPI](VM.API.Pre.EquationAPI.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Methods

### CreateFirstOrderDifferentialEquation\(SubSystemDocument, FunctionEquType, Obj, ExpressionValueVariable?, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Equation.Differential1" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "function" })]
public static Obj CreateFirstOrderDifferentialEquation(this SubSystemDocument document, EquationFunctionDiff.FunctionEquType diffType, Obj function, ExpressionValueVariable? initialDisp = null, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`document` SubSystemDocument

The document to create the 1st differential equation.

`diffType` EquationFunctionDiff.FunctionEquType

The solving method type of the 1st differential equation.

`function` [Obj](VM.API.Pre.Obj.md)

The function of the 1st differential equation.

`initialDisp` ExpressionValueVariable?

The initial displacement of the 1st differential equation.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the 1st differential equation.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Equation.Differential1" data-throw-if-not-resolved="false"></xref>

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.Equation.Differential1" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'function' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'function' is not equal to <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.UserSubroutine" data-throw-if-not-resolved="false"></xref>.

### CreateSecondOrderDifferentialEquation\(SubSystemDocument, FunctionEquType, Obj, ExpressionValueVariable?, ExpressionValueVariable?, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Equation.Differential2" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "function" })]
public static Obj CreateSecondOrderDifferentialEquation(this SubSystemDocument document, EquationFunctionDiff.FunctionEquType diffType, Obj function, ExpressionValueVariable? initialDisp = null, ExpressionValueVariable? initialVel = null, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`document` SubSystemDocument

The document to create the 2nd differential equation.

`diffType` EquationFunctionDiff.FunctionEquType

The solving method type of the 2nd differential equation.

`function` [Obj](VM.API.Pre.Obj.md)

The function of the 2nd differential equation.

`initialDisp` ExpressionValueVariable?

The initial displacement of the 2nd differential equation.

`initialVel` ExpressionValueVariable?

The initial velocity of the 2nd differential equation.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the 2nd differential equation.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Equation.Differential2" data-throw-if-not-resolved="false"></xref>

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.Equation.Differential2" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'function' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'function' is not equal to <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.UserSubroutine" data-throw-if-not-resolved="false"></xref>.

### CreateVariableEquation\(SubSystemDocument, Obj, ExpressionValueVariable?, string, SymmetricType\)

Create <xref href="VM.Managed.DAFUL.Equation.VariableEq" data-throw-if-not-resolved="false"></xref>.

```csharp
[NotNull(new string[] { "document" })]
[NotNullObj(new string[] { "function" })]
public static Obj CreateVariableEquation(this SubSystemDocument document, Obj function, ExpressionValueVariable? initialDisp = null, string name = "", SymmetricType symmetricType = SymmetricType.None)
```

#### Parameters

`document` SubSystemDocument

The document to create a variable equation.

`function` [Obj](VM.API.Pre.Obj.md)

The function of a variable equation.

`initialDisp` ExpressionValueVariable?

The initial displacement of a variable equation.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of a variable equation.

`symmetricType` SymmetricType

The symmetric type of the new <xref href="VM.Managed.DAFUL.Equation.VariableEq" data-throw-if-not-resolved="false"></xref>

#### Returns

 [Obj](VM.API.Pre.Obj.md)

The new <xref href="VM.Managed.DAFUL.Equation.VariableEq" data-throw-if-not-resolved="false"></xref> object that is created by this API.

#### Exceptions

 [ArgumentNullException](https://learn.microsoft.com/dotnet/api/system.argumentnullexception)

Will be thrown if 'document', 'function' argument is null.

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

Will be thrown if 'function' is not equal to <xref href="VM.Managed.DAFUL.Function" data-throw-if-not-resolved="false"></xref> and <xref href="VM.Managed.DAFUL.UserSubroutine" data-throw-if-not-resolved="false"></xref>.


