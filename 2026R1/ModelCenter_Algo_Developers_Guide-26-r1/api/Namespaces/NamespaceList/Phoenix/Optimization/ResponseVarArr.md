# ResponseVarArr Class

**Namespace:** `Phoenix.Optimization`

## Overview

summary> Get/set flag indicatining if response variable array has error /summary>

## Inheritance

![ResponseVarArr](../../../../graphics/class_phoenix_1_1_optimization_1_1_response_var_arr.png)

## Declaration

```csharp
class ResponseVarArr
```

## Description

summary> Get/set flag indicatining if response variable array has error /summary>


## Public Member Functions

|Name|Description|
|-----|-----|
|[ResponseVariable]() |`AddNew (string name, bool isInMC, bool isItOutput)`<br> |
|bool |`CheckIndexAndDuplicatedNames (bool doPopulateErrText)`<br> |
|void |`Clear ()`<br> |
|void |`CopyTo (ResponseVarArr arrTo)`<br> |
|[ResponseVariable]() |`FindByName (string name)`<br> |
|[ResponseVariable]() |`FindOrCreateNewVar (string name, bool isInMC=true, bool isItOutput=true)`<br> |
|IEnumerator< ResponseVariable > |`GetEnumerator ()`<br> |
|bool |`IsEqualTo (ResponseVarArr varArrToCompare)`<br> |
|ResponseVarArr |`MakeCopy ()`<br> |
|bool |`RemoveVar (int varIndex, bool doRebuildIndexAndCheckName=true)`<br> |
|bool |`RemoveVar (ResponseVariable var, bool doRebuildIndexAndCheckName=true)`<br> |
| |`ResponseVarArr ()`<br>summary> Get/set flag indicatining if response variable array has error /summary> |

## Properties
|Name|Description|
|-----|-----|
|int | `Count [get]`<br> |
|string | `ErrText [get, set]`<br>summary> Gets "Count" /summary> |
|bool | `HasErrors [get, set]`<br>summary> Get/Set Error text /summary> |
|[ResponseVariable]() | `this[int index] [get]`<br> |
|[ResponseVariable]() | `this[string name] [get]`<br>Return the first occurence of the |

## Constructor & Destructor Documentation

### ResponseVarArr()
```csharp
ResponseVarArr ( )
```

summary> Get/set flag indicatining if response variable array has error /summary>

## Member Function Documentation

### CheckIndexAndDuplicatedNames
```csharp
bool CheckIndexAndDuplicatedNames ( bool doPopulateErrText)
```

**Returns:**

- true if there is duplicated names otherwise returns false

### ErrText
```csharp
string ErrText
```

summary> Gets "Count" /summary>

### HasErrors
```csharp
bool HasErrors
```

summary> Get/Set Error text /summary>

### this
```csharp
ResponseVariable this[string name]
```

Return the first occurence of the

**Parameters:**

- `name` - 

## Property Documentation

### ErrText
```csharp
string ErrText
```

summary> Gets "Count" /summary>

### HasErrors
```csharp
bool HasErrors
```

summary> Get/Set Error text /summary>

### this
```csharp
ResponseVariable this[string name]
```

Return the first occurence of the
