# Class CreateSubEntity
<a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity"></a>

Namespace: [VM.Managed.DAFUL.Operation.Util](VM.Managed.DAFUL.Operation.Util.md)  
Assembly: VMOpCore.dll  

The utility class for the sub-entity creation.

```csharp
public class CreateSubEntity
```

#### Inheritance

object ← 
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

`size` int

The number of array size.

`isInterface` bool

The flag of interface.

#### Returns

 [Array](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSP/Array.cs)

The new array.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateArray_VM_Managed_Document3D_System_Int32_System_Boolean_System_String_"></a> CreateArray\(Document3D, int, bool, string\)

Create the array.

```csharp
public static Array CreateArray(Document3D activeDocument, int nSize, bool bInterface, string strName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`nSize` int

The number of array size.

`bInterface` bool

The flag of interface.

`strName` string

The array name.

#### Returns

 [Array](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSP/Array.cs)

The new array.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateDifferential1Equation_VM_Managed_Document3D_VM_Managed_DAFUL_Function_System_Double_System_Double_VM_Managed_DAFUL_Equation_EquationFunctionDiff_FunctionEquType_System_String_"></a> CreateDifferential1Equation\(Document3D, Function, double, double, FunctionEquType, string\)

Create the variable equation.

```csharp
public static Differential1 CreateDifferential1Equation(Document3D activeDocument, Function function, double initialDisplacement, double initialVelocity, EquationFunctionDiff.FunctionEquType differentialFunctionType, string name)
```

#### Parameters

`activeDocument` Document3D

The active document.

`function` [Function](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Function.cs)

The function.

`initialDisplacement` double

The initial value.

`initialVelocity` double

The initial velocity.

`differentialFunctionType` [EquationFunctionDiff](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDEq/Differential1.cs).[FunctionEquType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDEq/Differential1.cs)

The differential function type.

`name` string

The variable equation name.

#### Returns

 [Differential1](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDEq/Differential1.cs)

The new variable equation.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateDifferential1Equation_VM_Managed_Document3D_VM_Managed_DAFUL_UserSubroutine_System_Double_System_Double_VM_Managed_DAFUL_Equation_EquationFunctionDiff_FunctionEquType_System_String_"></a> CreateDifferential1Equation\(Document3D, UserSubroutine, double, double, FunctionEquType, string\)

Create the variable equation.

```csharp
public static Differential1 CreateDifferential1Equation(Document3D activeDocument, UserSubroutine userSubroutine, double initialDisplacement, double initialVelocity, EquationFunctionDiff.FunctionEquType differentialFunctionType, string name)
```

#### Parameters

`activeDocument` Document3D

The active document.

`userSubroutine` [UserSubroutine](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSP/UserSubroutine.cs)

The function.

`initialDisplacement` double

The initial value.

`initialVelocity` double

The initial velocity.

`differentialFunctionType` [EquationFunctionDiff](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDEq/Differential1.cs).[FunctionEquType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDEq/Differential1.cs)

The differential function type.

`name` string

The variable equation name.

#### Returns

 [Differential1](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDEq/Differential1.cs)

The new variable equation.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateDifferential2Equation_VM_Managed_Document3D_VM_Managed_DAFUL_Function_System_Double_System_Double_VM_Managed_DAFUL_Equation_EquationFunctionDiff_FunctionEquType_System_String_"></a> CreateDifferential2Equation\(Document3D, Function, double, double, FunctionEquType, string\)

Create the variable equation.

```csharp
public static Differential2 CreateDifferential2Equation(Document3D activeDocument, Function function, double initialDisplacement, double initialVelocity, EquationFunctionDiff.FunctionEquType differentialFunctionType, string name)
```

#### Parameters

`activeDocument` Document3D

The active document.

`function` [Function](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Function.cs)

The function.

`initialDisplacement` double

The initial value.

`initialVelocity` double

The initial velocity.

`differentialFunctionType` [EquationFunctionDiff](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDEq/Differential1.cs).[FunctionEquType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDEq/Differential1.cs)

The differential function type.

`name` string

The variable equation name.

#### Returns

 [Differential2](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDEq/Differential2.cs)

The new variable equation.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateDifferential2Equation_VM_Managed_Document3D_VM_Managed_DAFUL_UserSubroutine_System_Double_System_Double_VM_Managed_DAFUL_Equation_EquationFunctionDiff_FunctionEquType_System_String_"></a> CreateDifferential2Equation\(Document3D, UserSubroutine, double, double, FunctionEquType, string\)

Create the variable equation.

```csharp
public static Differential2 CreateDifferential2Equation(Document3D activeDocument, UserSubroutine userSubroutine, double initialDisplacement, double initialVelocity, EquationFunctionDiff.FunctionEquType differentialFunctionType, string name)
```

#### Parameters

`activeDocument` Document3D

The active document.

`userSubroutine` [UserSubroutine](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSP/UserSubroutine.cs)

The function.

`initialDisplacement` double

The initial value.

`initialVelocity` double

The initial velocity.

`differentialFunctionType` [EquationFunctionDiff](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDEq/Differential1.cs).[FunctionEquType](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDEq/Differential1.cs)

The differential function type.

`name` string

The variable equation name.

#### Returns

 [Differential2](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDEq/Differential2.cs)

The new variable equation.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateFunction_VM_Managed_Document3D_System_String_VM_Models_Pre_IArgument___System_String_System_Boolean_"></a> CreateFunction\(Document3D, string, IArgument\[\], string, bool\)

Create the function.

```csharp
public static Function CreateFunction(Document3D document, string expression, IArgument[] arguments, string name, bool getNewEntityName = false)
```

#### Parameters

`document` Document3D

`expression` string

`arguments` IArgument\[\]

`name` string

`getNewEntityName` bool

Flag for creating a new entity if there is already an entity with the same name

#### Returns

 [Function](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Function.cs)

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateFunction_VM_Managed_Document3D_System_String_System_String_"></a> CreateFunction\(Document3D, string, string\)

Create the function.

```csharp
public static Function CreateFunction(Document3D document, string expression, string name)
```

#### Parameters

`document` Document3D

`expression` string

`name` string

#### Returns

 [Function](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Function.cs)

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateFunctionSimple_VM_Managed_Document_System_String_System_Boolean_System_String_System_Boolean_"></a> CreateFunctionSimple\(Document, string, bool, string, bool\)

Create the function.

```csharp
public static Function CreateFunctionSimple(Document document, string strExpression, bool bInterface, string strName, bool getNewEntityName = false)
```

#### Parameters

`document` Document

The active document.

`strExpression` string

The expression of function.

`bInterface` bool

The flag of interface.

`strName` string

The function name.

`getNewEntityName` bool

Flag for creating a new entity if there is already an entity with the same name

#### Returns

 [Function](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Function.cs)

The new function.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateFunctionSimple_VM_Managed_Document3D_System_String_System_Boolean_System_String_System_String_"></a> CreateFunctionSimple\(Document3D, string, bool, string, string\)

Create the function.

```csharp
public static Function CreateFunctionSimple(Document3D activeDocument, string strExpression, bool bInterface, string strName, string strMatchName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`strExpression` string

The expression of function.

`bInterface` bool

The flag of interface.

`strName` string

The function name.

`strMatchName` string

Name of the STR match.

#### Returns

 [Function](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Function.cs)

The new function.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateFunctionWithArguments_VM_Managed_Document_System_String_System_Collections_Generic_IEnumerable_VM_Models_Pre_IArgument__System_Boolean_System_String_System_Boolean_"></a> CreateFunctionWithArguments\(Document, string, IEnumerable<IArgument\>, bool, string, bool\)

Create the function.

```csharp
public static Function CreateFunctionWithArguments(Document document, string strExpression, IEnumerable<IArgument> lstArgument, bool bInterface, string strName, bool getNewEntityName = false)
```

#### Parameters

`document` Document

The active document.

`strExpression` string

The expression of function.

`lstArgument` IEnumerable<IArgument\>

The list of argument.

`bInterface` bool

The flag of interface.

`strName` string

The function name.

`getNewEntityName` bool

Flag for creating a new entity if there is already an entity with the same name

#### Returns

 [Function](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Function.cs)

The new function.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateFunctionWithArguments_VM_Managed_Document_System_String_System_Collections_Generic_IEnumerable_System_ValueTuple_System_String_VM_Models_Pre_IArgument___System_Boolean_System_String_System_Boolean_"></a> CreateFunctionWithArguments\(Document, string, IEnumerable<\(string, IArgument\)\>, bool, string, bool\)

Create the function with argument for python.

```csharp
public static Function CreateFunctionWithArguments(Document document, string strExpression, IEnumerable<(string, IArgument)> lstArgument, bool bInterface, string strName, bool getNewEntityName = false)
```

#### Parameters

`document` Document

The active document.

`strExpression` string

The expression of function.

`lstArgument` IEnumerable<\(string, IArgument\)\>

The list of argument.

`bInterface` bool

The flag of interface.

`strName` string

The function name.

`getNewEntityName` bool

Flag for creating a new entity if there is already an entity with the same name

#### Returns

 [Function](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Function.cs)

The new function.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateGroup_VM_Managed_Document3D_System_String_"></a> CreateGroup\(Document3D, string\)

Create the Group.

```csharp
public static Group CreateGroup(Document3D docSub, string strName)
```

#### Parameters

`docSub` Document3D

The active document

`strName` string

The group name

#### Returns

 [Group](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Group.cs)

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateScenario_VM_Managed_Document_VM_Managed_Simulation_Scenario_Sensor_VM_Managed_Simulation_Scenario_Sign_VM_Managed_Simulation_Scenario_Action_System_Double_VM_Managed_ObjectBase_System_Double_System_String_VM_Managed_ObjectBase_VM_Managed_Simulation_Scenario_Motion_System_String_"></a> CreateScenario\(Document, Sensor, Sign, Action, double, ObjectBase, double, string, ObjectBase, Motion, string\)

Create scenario

```csharp
public static Scenario CreateScenario(Document document, Scenario.Sensor sensor, Scenario.Sign sign, Scenario.Action action, double dActionValue, ObjectBase function, double dValue, string strICFPath, ObjectBase objEnableTarget, Scenario.Motion targetOfMotion, string strPrefixName)
```

#### Parameters

`document` Document

The document

`sensor` [Scenario](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs).[Sensor](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs)

The sensor

`sign` [Scenario](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs).[Sign](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs)

The sign

`action` [Scenario](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs).[Action](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs)

The action

`dActionValue` double

The action value

`function` ObjectBase

The function

`dValue` double

The value

`strICFPath` string

The icf path

`objEnableTarget` ObjectBase

The enable target

`targetOfMotion` [Scenario](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs).[Motion](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs)

The motion

`strPrefixName` string

The prefix name

#### Returns

 [Scenario](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDFBase/Scenario.cs)

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateSpline_VM_Managed_Document3D_System_Collections_Generic_IEnumerable_VM_DataPoint__System_String_"></a> CreateSpline\(Document3D, IEnumerable<DataPoint\>, string\)

```csharp
public static Spline CreateSpline(Document3D document, IEnumerable<DataPoint> dataPoints, string name)
```

#### Parameters

`document` Document3D

The active document.

`dataPoints` IEnumerable<DataPoint\>

The spline data

`name` string

The spline name.

#### Returns

 [Spline](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Spline.cs)

The new spline.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateSpline_VM_Managed_Document3D_VM_Managed_DAFUL_SplineValue_System_String_"></a> CreateSpline\(Document3D, SplineValue, string\)

```csharp
public static Spline CreateSpline(Document3D document, SplineValue splineValue, string name)
```

#### Parameters

`document` Document3D

The active document.

`splineValue` [SplineValue](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Spline.cs)

The spline value

`name` string

The spline name.

#### Returns

 [Spline](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Spline.cs)

The new spline.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateSplineFromFile_VM_Managed_Document3D_System_String_System_String_"></a> CreateSplineFromFile\(Document3D, string, string\)

```csharp
public static Spline CreateSplineFromFile(Document3D activeDocument, string strDataFilePath, string strName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`strDataFilePath` string

The path of spline data file.

`strName` string

The spline name.

#### Returns

 [Spline](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Spline.cs)

The new spline.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateSplineFromValue_VM_Managed_Document3D_System_Collections_Generic_List_System_String____System_String_System_Boolean_"></a> CreateSplineFromValue\(Document3D, List<string\[\]\>, string, bool\)

```csharp
public static Spline CreateSplineFromValue(Document3D activeDocument, List<string[]> points, string strName, bool getNewEntityName = false)
```

#### Parameters

`activeDocument` Document3D

The active document.

`points` List<string\[\]\>

The data of spline value.

`strName` string

The spline name.

`getNewEntityName` bool

Flag for creating a new entity if there is already an entity with the same name

#### Returns

 [Spline](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Spline.cs)

The new spline.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateStringValue_VM_Managed_Document3D_System_String_System_Boolean_"></a> CreateStringValue\(Document3D, string, bool\)

Create the stringValue.

```csharp
public static StringValue CreateStringValue(Document3D document, string stringValue, bool isInterface)
```

#### Parameters

`document` Document3D

The document.

`stringValue` string

The string value.

`isInterface` bool

The flag of interface.

#### Returns

 [StringValue](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSP/StringValue.cs)

The new string value.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateStringValue_VM_Managed_Document3D_System_String_System_Boolean_System_String_"></a> CreateStringValue\(Document3D, string, bool, string\)

Create the stringValue.

```csharp
public static StringValue CreateStringValue(Document3D activeDocument, string stringValue, bool bInterface, string strName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`stringValue` string

The number of array size.

`bInterface` bool

The flag of interface.

`strName` string

The array name.

#### Returns

 [StringValue](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSP/StringValue.cs)

The new array.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateUserSubroutine_VM_Managed_Document3D_System_String_System_String_System_Int32_System_String_System_Boolean_System_String_"></a> CreateUserSubroutine\(Document3D, string, string, int, string, bool, string\)

Create the user-subroutine.

```csharp
public static UserSubroutine CreateUserSubroutine(Document3D document, string dllName, string functionName, int resultValue, string expression, bool @interface, string name)
```

#### Parameters

`document` Document3D

The active document.

`dllName` string

The DLL file name.

`functionName` string

The function name.

`resultValue` int

The number of result value.

`expression` string

The expression of user-subroutine.

`interface` bool

The flag of interface.

`name` string

The user-subroutine name.

#### Returns

 [UserSubroutine](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSP/UserSubroutine.cs)

The new user-subroutine.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateUserSubroutineWithArguments_VM_Managed_Document_System_String_System_String_System_Int32_System_String_System_Collections_Generic_IEnumerable_VM_Models_Pre_IArgument__System_Boolean_System_String_System_Boolean_"></a> CreateUserSubroutineWithArguments\(Document, string, string, int, string, IEnumerable<IArgument\>, bool, string, bool\)

Create the user-subroutine.

```csharp
public static UserSubroutine CreateUserSubroutineWithArguments(Document document, string dllName, string functionName, int resultValue, string expression, IEnumerable<IArgument> arguments, bool @interface, string name, bool addToDocument = true)
```

#### Parameters

`document` Document

The active document.

`dllName` string

The DLL file name.

`functionName` string

The function name.

`resultValue` int

The number of result value.

`expression` string

The expression of user-subroutine.

`arguments` IEnumerable<IArgument\>

The list of argument.

`interface` bool

The flag of interface.

`name` string

The user-subroutine name.

`addToDocument` bool

Flag for add created element to document.

#### Returns

 [UserSubroutine](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSP/UserSubroutine.cs)

The new user-subroutine.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateVariableEquation_VM_Managed_Document3D_VM_Managed_DAFUL_Function_System_Double_System_String_"></a> CreateVariableEquation\(Document3D, Function, double, string\)

Create the variable equation.

```csharp
public static VariableEq CreateVariableEquation(Document3D activeDocument, Function function, double dInitialValue, string strName)
```

#### Parameters

`activeDocument` Document3D

The active document.

`function` [Function](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSB/Function.cs)

The function.

`dInitialValue` double

The intial value.

`strName` string

The variable equation name.

#### Returns

 [VariableEq](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDEq/VariableEq.cs)

The new variable equation.

### <a id="VM_Managed_DAFUL_Operation_Util_CreateSubEntity_CreateVariableEquation_VM_Managed_Document3D_VM_Managed_DAFUL_UserSubroutine_System_Double_System_String_"></a> CreateVariableEquation\(Document3D, UserSubroutine, double, string\)

Create the variable equation.

```csharp
public static VariableEq CreateVariableEquation(Document3D document, UserSubroutine userSubroutine, double initialValue, string name)
```

#### Parameters

`document` Document3D

The active document.

`userSubroutine` [UserSubroutine](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDSP/UserSubroutine.cs)

The UserSubroutine.

`initialValue` double

The intial value.

`name` string

The variable equation name.

#### Returns

 [VariableEq](https://github.com/AnsysVirtualMotion/DAFUL/blob/9110677a5f6a53d7604f8dfd35b4c5fceb59e8e0/DAFUL/ClassicPre/Data/VMDEq/VariableEq.cs)

The new variable equation.

