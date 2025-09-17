# MaxFunctionEvaluationsException Class

**Namespace:** `Phoenix.Optimization`

## Overview

If a solver hits the maximum number of function evaluations before finding a solution it can throw this exception.  
 

## Inheritance

![MaxFunctionEvaluationsException](../../../../graphics/class_phoenix_1_1_optimization_1_1_max_function_evaluations_exception.png)

## Declaration

```csharp
class MaxFunctionEvaluationsException
```

## Description

If a solver hits the maximum number of function evaluations before finding a solution it can throw this exception.  
 


## Public Member Functions

|Name|Description|
|-----|-----|
| |`MaxFunctionEvaluationsException ()`<br>Initializes a new instance of the MaxFunctionEvaluationsException class. |
| |`MaxFunctionEvaluationsException (string msg)`<br>Initializes a new instance of the MaxFunctionEvaluationsException class with a specified error message. |
| |`MaxFunctionEvaluationsException (string msg, Exception inner)`<br>Initializes a new instance of the MaxFunctionEvaluationsException class with a specified error message and a reference to the inner exception that is the cause of this exception. |

### Public Member Functions inherited from [EarlyTerminationException]()
|Name|Description|
|-----|-----|
| |`EarlyTerminationException ()`<br>Initializes a new instance of the EarlyTerminationException class. |
| |`EarlyTerminationException (string msg)`<br>Initializes a new instance of the EarlyTerminationException class with a specified error message. |
| |`EarlyTerminationException (string msg, Exception inner)`<br>Initializes a new instance of the EarlyTerminationException class with a specified error message and a reference to the inner exception that is the cause of this exception. |

### Public Member Functions inherited from [OptimizationException]()
|Name|Description|
|-----|-----|
| |`OptimizationException ()`<br>Initializes a new instance of the OptimizationException class. |
| |`OptimizationException (string msg)`<br>Initializes a new instance of the OptimizationException class with a specified error message. |
| |`OptimizationException (string msg, Exception inner)`<br>Initializes a new instance of the OptimizationException class with a specified error message and a reference to the inner exception that is the cause of this exception. |

## Constructor & Destructor Documentation

### MaxFunctionEvaluationsException()
```csharp
MaxFunctionEvaluationsException ( )
```

Initializes a new instance of the MaxFunctionEvaluationsException class.

### MaxFunctionEvaluationsException()
```csharp
MaxFunctionEvaluationsException ( string msg)
```

Initializes a new instance of the MaxFunctionEvaluationsException class with a specified error message.

**Parameters:**

- `msg` - Message for the exception

### MaxFunctionEvaluationsException()
```csharp
MaxFunctionEvaluationsException ( string msg, Exception inner )
```

Initializes a new instance of the MaxFunctionEvaluationsException class with a specified error message and a reference to the inner exception that is the cause of this exception.

**Parameters:**

- `msg` - The error message that explains the reason for the exception.
- `inner` - The exception that is the cause of the current exception, or a null reference (Nothing in Visual Basic) if no inner exception is specified.

### MaxFunctionEvaluationsException()
```csharp
MaxFunctionEvaluationsException ( `SerializationInfo` info, `StreamingContext` context )
```

Initializes a new instance of the MaxFunctionEvaluationsException class with serialized data.

**Parameters:**

- `info` - The `SerializationInfo` that holds the serialized object data about the exception being thrown.
- `context` - The `StreamingContext` that contains contextual information about the source or destination.

## Property Documentation

### MaxFunctionEvaluationsException()
```csharp
MaxFunctionEvaluationsException ( )
```

Initializes a new instance of the MaxFunctionEvaluationsException class.

### MaxFunctionEvaluationsException()
```csharp
MaxFunctionEvaluationsException ( string msg)
```

Initializes a new instance of the MaxFunctionEvaluationsException class with a specified error message.

### MaxFunctionEvaluationsException()
```csharp
MaxFunctionEvaluationsException ( string msg, Exception inner )
```

Initializes a new instance of the MaxFunctionEvaluationsException class with a specified error message and a reference to the inner exception that is the cause of this exception.

### MaxFunctionEvaluationsException()
```csharp
MaxFunctionEvaluationsException ( `SerializationInfo` info, `StreamingContext` context )
```

Initializes a new instance of the MaxFunctionEvaluationsException class with serialized data.
