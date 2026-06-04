#  Class CreateSubEntity

Namespace: [VM.Managed.DAFUL.Operation.Util](VM.Managed.DAFUL.Operation.Util.md)  
Assembly: VMOpCore.dll  

The utility class for the sub-entity creation.

```csharp
public class CreateSubEntity
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CreateSubEntity](VM.Managed.DAFUL.Operation.Util.CreateSubEntity.md)

#### Extension Methods

[LinkPropertyItemCache.GetLinkProperties\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkProperties\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkPropertiesAndValues\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkPropertiesAndValues\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_), 
[LinkPropertyItemCache.GetLinkedObjects<T\>\(object, LinkPropertyType\)](VM.Models.Pre.Cache.LinkPropertyItemCache.md\#VM\_Models\_Pre\_Cache\_LinkPropertyItemCache\_GetLinkedObjects\_\_1\_System\_Object\_VM\_Models\_Pre\_LinkPropertyType\_)

## Constructors

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity__ctor"></a> CreateSubEntity\(\)

```csharp
public CreateSubEntity()
```

## Methods

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateArray_VM_Managed_Document3D_System_Int32_System_Boolean_"></a> CreateArray\(Document3D, int, bool\)

Create the array.

```csharp
public static Array CreateArray(Document3D document, int size, bool isInterface)
```

#### Parameters

`document` Document3D

The document.

`size` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of array size.

`isInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of interface.

#### Returns

 Array

The new array.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateArray_VM_Managed_Document3D_System_Int32_System_Boolean_System_String_"></a> CreateArray\(Document3D, int, bool, string\)

Create the array.

```csharp
public static Array CreateArray(Document3D activeDocument, int nSize, bool bInterface, string strName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`nSize` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of array size.

`bInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of interface.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The array name.

#### Returns

 Array

The new array.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateDifferential1Equation_VM_Managed_Document3D_VM_Managed_DAFUL_Function_System_Double_System_Double_VM_Managed_DAFUL_Equation_EquationFunctionDiff_FunctionEquType_System_String_"></a> CreateDifferential1Equation\(Document3D, Function, double, double, FunctionEquType, string\)

Create the variable equation.

```csharp
public static Differential1 CreateDifferential1Equation(Document3D activeDocument, Function function, double initialDisplacement, double initialVelocity, EquationFunctionDiff.FunctionEquType differentialFunctionType, string name)
```

#### Parameters

`activeDocument` Document3D

The active document.

`function` Function

The function.

`initialDisplacement` [double](https://learn.microsoft.com/dotnet/api/system.double)

The initial value.

`initialVelocity` [double](https://learn.microsoft.com/dotnet/api/system.double)

The initial velocity.

`differentialFunctionType` EquationFunctionDiff.FunctionEquType

The differential function type.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The variable equation name.

#### Returns

 Differential1

The new variable equation.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateDifferential1Equation_VM_Managed_Document3D_VM_Managed_DAFUL_UserSubroutine_System_Double_System_Double_VM_Managed_DAFUL_Equation_EquationFunctionDiff_FunctionEquType_System_String_"></a> CreateDifferential1Equation\(Document3D, UserSubroutine, double, double, FunctionEquType, string\)

Create the variable equation.

```csharp
public static Differential1 CreateDifferential1Equation(Document3D activeDocument, UserSubroutine userSubroutine, double initialDisplacement, double initialVelocity, EquationFunctionDiff.FunctionEquType differentialFunctionType, string name)
```

#### Parameters

`activeDocument` Document3D

The active document.

`userSubroutine` UserSubroutine

The function.

`initialDisplacement` [double](https://learn.microsoft.com/dotnet/api/system.double)

The initial value.

`initialVelocity` [double](https://learn.microsoft.com/dotnet/api/system.double)

The initial velocity.

`differentialFunctionType` EquationFunctionDiff.FunctionEquType

The differential function type.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The variable equation name.

#### Returns

 Differential1

The new variable equation.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateDifferential2Equation_VM_Managed_Document3D_VM_Managed_DAFUL_Function_System_Double_System_Double_VM_Managed_DAFUL_Equation_EquationFunctionDiff_FunctionEquType_System_String_"></a> CreateDifferential2Equation\(Document3D, Function, double, double, FunctionEquType, string\)

Create the variable equation.

```csharp
public static Differential2 CreateDifferential2Equation(Document3D activeDocument, Function function, double initialDisplacement, double initialVelocity, EquationFunctionDiff.FunctionEquType differentialFunctionType, string name)
```

#### Parameters

`activeDocument` Document3D

The active document.

`function` Function

The function.

`initialDisplacement` [double](https://learn.microsoft.com/dotnet/api/system.double)

The initial value.

`initialVelocity` [double](https://learn.microsoft.com/dotnet/api/system.double)

The initial velocity.

`differentialFunctionType` EquationFunctionDiff.FunctionEquType

The differential function type.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The variable equation name.

#### Returns

 Differential2

The new variable equation.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateDifferential2Equation_VM_Managed_Document3D_VM_Managed_DAFUL_UserSubroutine_System_Double_System_Double_VM_Managed_DAFUL_Equation_EquationFunctionDiff_FunctionEquType_System_String_"></a> CreateDifferential2Equation\(Document3D, UserSubroutine, double, double, FunctionEquType, string\)

Create the variable equation.

```csharp
public static Differential2 CreateDifferential2Equation(Document3D activeDocument, UserSubroutine userSubroutine, double initialDisplacement, double initialVelocity, EquationFunctionDiff.FunctionEquType differentialFunctionType, string name)
```

#### Parameters

`activeDocument` Document3D

The active document.

`userSubroutine` UserSubroutine

The function.

`initialDisplacement` [double](https://learn.microsoft.com/dotnet/api/system.double)

The initial value.

`initialVelocity` [double](https://learn.microsoft.com/dotnet/api/system.double)

The initial velocity.

`differentialFunctionType` EquationFunctionDiff.FunctionEquType

The differential function type.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The variable equation name.

#### Returns

 Differential2

The new variable equation.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateFunction_VM_Managed_Document3D_System_String_VM_Models_Pre_IArgument___System_String_System_Boolean_"></a> CreateFunction\(Document3D, string, IArgument\[\], string, bool\)

Create the function.

```csharp
public static Function CreateFunction(Document3D document, string expression, IArgument[] arguments, string name, bool getNewEntityName = false)
```

#### Parameters

`document` Document3D

`expression` [string](https://learn.microsoft.com/dotnet/api/system.string)

`arguments` IArgument\[\]

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`getNewEntityName` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Flag for creating a new entity if there is already an entity with the same name

#### Returns

 Function

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateFunction_VM_Managed_Document3D_System_String_System_String_"></a> CreateFunction\(Document3D, string, string\)

Create the function.

```csharp
public static Function CreateFunction(Document3D document, string expression, string name)
```

#### Parameters

`document` Document3D

`expression` [string](https://learn.microsoft.com/dotnet/api/system.string)

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 Function

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateFunctionSimple_VM_Managed_Document_System_String_System_Boolean_System_String_System_Boolean_"></a> CreateFunctionSimple\(Document, string, bool, string, bool\)

Create the function.

```csharp
public static Function CreateFunctionSimple(Document document, string strExpression, bool bInterface, string strName, bool getNewEntityName = false)
```

#### Parameters

`document` Document

The active document.

`strExpression` [string](https://learn.microsoft.com/dotnet/api/system.string)

The expression of function.

`bInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of interface.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The function name.

`getNewEntityName` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Flag for creating a new entity if there is already an entity with the same name

#### Returns

 Function

The new function.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateFunctionSimple_VM_Managed_Document3D_System_String_System_Boolean_System_String_System_String_"></a> CreateFunctionSimple\(Document3D, string, bool, string, string\)

Create the function.

```csharp
public static Function CreateFunctionSimple(Document3D activeDocument, string strExpression, bool bInterface, string strName, string strMatchName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`strExpression` [string](https://learn.microsoft.com/dotnet/api/system.string)

The expression of function.

`bInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of interface.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The function name.

`strMatchName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the STR match.

#### Returns

 Function

The new function.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateFunctionWithArguments_VM_Managed_Document_System_String_System_Collections_Generic_IEnumerable_VM_Models_Pre_IArgument__System_Boolean_System_String_System_Boolean_"></a> CreateFunctionWithArguments\(Document, string, IEnumerable<IArgument\>, bool, string, bool\)

Create the function.

```csharp
public static Function CreateFunctionWithArguments(Document document, string strExpression, IEnumerable<IArgument> lstArgument, bool bInterface, string strName, bool getNewEntityName = false)
```

#### Parameters

`document` Document

The active document.

`strExpression` [string](https://learn.microsoft.com/dotnet/api/system.string)

The expression of function.

`lstArgument` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IArgument\>

The list of argument.

`bInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of interface.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The function name.

`getNewEntityName` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Flag for creating a new entity if there is already an entity with the same name

#### Returns

 Function

The new function.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateFunctionWithArguments_VM_Managed_Document_System_String_System_Collections_Generic_IEnumerable_System_ValueTuple_System_String_VM_Models_Pre_IArgument___System_Boolean_System_String_System_Boolean_"></a> CreateFunctionWithArguments\(Document, string, IEnumerable<\(string, IArgument\)\>, bool, string, bool\)

Create the function with argument for python.

```csharp
public static Function CreateFunctionWithArguments(Document document, string strExpression, IEnumerable<(string, IArgument)> lstArgument, bool bInterface, string strName, bool getNewEntityName = false)
```

#### Parameters

`document` Document

The active document.

`strExpression` [string](https://learn.microsoft.com/dotnet/api/system.string)

The expression of function.

`lstArgument` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<\([string](https://learn.microsoft.com/dotnet/api/system.string), IArgument\)\>

The list of argument.

`bInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of interface.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The function name.

`getNewEntityName` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Flag for creating a new entity if there is already an entity with the same name

#### Returns

 Function

The new function.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateGroup_VM_Managed_Document3D_System_String_"></a> CreateGroup\(Document3D, string\)

Create the Group.

```csharp
public static Group CreateGroup(Document3D docSub, string strName)
```

#### Parameters

`docSub` Document3D

The active document

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The group name

#### Returns

 Group

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateScenario_VM_Managed_Document_VM_Managed_Simulation_Scenario_Sensor_VM_Managed_Simulation_Scenario_Sign_VM_Managed_Simulation_Scenario_Action_System_Double_VM_Managed_ObjectBase_System_Double_System_String_VM_Managed_ObjectBase_VM_Managed_Simulation_Scenario_Motion_System_String_"></a> CreateScenario\(Document, Sensor, Sign, Action, double, ObjectBase, double, string, ObjectBase, Motion, string\)

Create scenario

```csharp
public static Scenario CreateScenario(Document document, Scenario.Sensor sensor, Scenario.Sign sign, Scenario.Action action, double dActionValue, ObjectBase function, double dValue, string strICFPath, ObjectBase objEnableTarget, Scenario.Motion targetOfMotion, string strPrefixName)
```

#### Parameters

`document` Document

The document

`sensor` Scenario.Sensor

The sensor

`sign` Scenario.Sign

The sign

`action` Scenario.Action

The action

`dActionValue` [double](https://learn.microsoft.com/dotnet/api/system.double)

The action value

`function` ObjectBase

The function

`dValue` [double](https://learn.microsoft.com/dotnet/api/system.double)

The value

`strICFPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The icf path

`objEnableTarget` ObjectBase

The enable target

`targetOfMotion` Scenario.Motion

The motion

`strPrefixName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The prefix name

#### Returns

 Scenario

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateSpline_VM_Managed_Document3D_System_Collections_Generic_IEnumerable_VM_DataPoint__System_String_"></a> CreateSpline\(Document3D, IEnumerable<DataPoint\>, string\)

```csharp
public static Spline CreateSpline(Document3D document, IEnumerable<DataPoint> dataPoints, string name)
```

#### Parameters

`document` Document3D

The active document.

`dataPoints` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<DataPoint\>

The spline data

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The spline name.

#### Returns

 Spline

The new spline.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateSpline_VM_Managed_Document3D_VM_Managed_DAFUL_SplineValue_System_String_"></a> CreateSpline\(Document3D, SplineValue, string\)

```csharp
public static Spline CreateSpline(Document3D document, SplineValue splineValue, string name)
```

#### Parameters

`document` Document3D

The active document.

`splineValue` SplineValue

The spline value

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The spline name.

#### Returns

 Spline

The new spline.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateSplineFromFile_VM_Managed_Document3D_System_String_System_String_"></a> CreateSplineFromFile\(Document3D, string, string\)

```csharp
public static Spline CreateSplineFromFile(Document3D activeDocument, string strDataFilePath, string strName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`strDataFilePath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path of spline data file.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The spline name.

#### Returns

 Spline

The new spline.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateSplineFromValue_VM_Managed_Document3D_System_Collections_Generic_List_System_String____System_String_System_Boolean_"></a> CreateSplineFromValue\(Document3D, List<string\[\]\>, string, bool\)

```csharp
public static Spline CreateSplineFromValue(Document3D activeDocument, List<string[]> points, string strName, bool getNewEntityName = false)
```

#### Parameters

`activeDocument` Document3D

The active document.

`points` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\[\]\>

The data of spline value.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The spline name.

`getNewEntityName` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Flag for creating a new entity if there is already an entity with the same name

#### Returns

 Spline

The new spline.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateStringValue_VM_Managed_Document3D_System_String_System_Boolean_"></a> CreateStringValue\(Document3D, string, bool\)

Create the stringValue.

```csharp
public static StringValue CreateStringValue(Document3D document, string stringValue, bool isInterface)
```

#### Parameters

`document` Document3D

The document.

`stringValue` [string](https://learn.microsoft.com/dotnet/api/system.string)

The string value.

`isInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of interface.

#### Returns

 StringValue

The new string value.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateStringValue_VM_Managed_Document3D_System_String_System_Boolean_System_String_"></a> CreateStringValue\(Document3D, string, bool, string\)

Create the stringValue.

```csharp
public static StringValue CreateStringValue(Document3D activeDocument, string stringValue, bool bInterface, string strName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`stringValue` [string](https://learn.microsoft.com/dotnet/api/system.string)

The number of array size.

`bInterface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of interface.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The array name.

#### Returns

 StringValue

The new array.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateUserSubroutine_VM_Managed_Document3D_System_String_System_String_System_Int32_System_String_System_Boolean_System_String_"></a> CreateUserSubroutine\(Document3D, string, string, int, string, bool, string\)

Create the user-subroutine.

```csharp
public static UserSubroutine CreateUserSubroutine(Document3D document, string dllName, string functionName, int resultValue, string expression, bool @interface, string name)
```

#### Parameters

`document` Document3D

The active document.

`dllName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The DLL file name.

`functionName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The function name.

`resultValue` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of result value.

`expression` [string](https://learn.microsoft.com/dotnet/api/system.string)

The expression of user-subroutine.

`interface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of interface.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The user-subroutine name.

#### Returns

 UserSubroutine

The new user-subroutine.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateUserSubroutineWithArguments_VM_Managed_Document_System_String_System_String_System_Int32_System_String_System_Collections_Generic_IEnumerable_VM_Models_Pre_IArgument__System_Boolean_System_String_System_Boolean_"></a> CreateUserSubroutineWithArguments\(Document, string, string, int, string, IEnumerable<IArgument\>, bool, string, bool\)

Create the user-subroutine.

```csharp
public static UserSubroutine CreateUserSubroutineWithArguments(Document document, string dllName, string functionName, int resultValue, string expression, IEnumerable<IArgument> arguments, bool @interface, string name, bool addToDocument = true)
```

#### Parameters

`document` Document

The active document.

`dllName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The DLL file name.

`functionName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The function name.

`resultValue` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of result value.

`expression` [string](https://learn.microsoft.com/dotnet/api/system.string)

The expression of user-subroutine.

`arguments` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IArgument\>

The list of argument.

`interface` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

The flag of interface.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The user-subroutine name.

`addToDocument` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Flag for add created element to document.

#### Returns

 UserSubroutine

The new user-subroutine.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateVariableEquation_VM_Managed_Document3D_VM_Managed_DAFUL_Function_System_Double_System_String_"></a> CreateVariableEquation\(Document3D, Function, double, string\)

Create the variable equation.

```csharp
public static VariableEq CreateVariableEquation(Document3D activeDocument, Function function, double dInitialValue, string strName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`function` Function

The function.

`dInitialValue` [double](https://learn.microsoft.com/dotnet/api/system.double)

The intial value.

`strName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The variable equation name.

#### Returns

 VariableEq

The new variable equation.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateVariableEquation_VM_Managed_Document3D_VM_Managed_DAFUL_UserSubroutine_System_Double_System_String_"></a> CreateVariableEquation\(Document3D, UserSubroutine, double, string\)

Create the variable equation.

```csharp
public static VariableEq CreateVariableEquation(Document3D document, UserSubroutine userSubroutine, double initialValue, string name)
```

#### Parameters

`document` Document3D

The active document.

`userSubroutine` UserSubroutine

The UserSubroutine.

`initialValue` [double](https://learn.microsoft.com/dotnet/api/system.double)

The intial value.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The variable equation name.

#### Returns

 VariableEq

The new variable equation.

