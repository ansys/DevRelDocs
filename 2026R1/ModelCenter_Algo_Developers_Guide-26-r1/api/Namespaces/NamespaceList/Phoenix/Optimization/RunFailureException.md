# RunFailureException Class

**Namespace:** `Phoenix.Optimization`

## Overview

This can be thrown from the algorithm when the algorithm receives a failed run and it does not support failed runs.  
 

## Inheritance

![RunFailureException](../../../../graphics/class_phoenix_1_1_optimization_1_1_run_failure_exception.png)

## Declaration

```csharp
class RunFailureException
```

## Description

This can be thrown from the algorithm when the algorithm receives a failed run and it does not support failed runs.  
 


## Public Member Functions

|Name|Description|
|-----|-----|
| |`RunFailureException ()`<br>Initializes a new instance of the RunFailureException class. |
| |`RunFailureException (string msg)`<br>Initializes a new instance of the RunFailureException class with a specified error message. |
| |`RunFailureException (string msg, Exception inner)`<br>Initializes a new instance of the RunFailureException class with a specified error message and a reference to the inner exception that is the cause of this exception. |

### Public Member Functions inherited from [OptimizationException]()
|Name|Description|
|-----|-----|
| |`OptimizationException ()`<br>Initializes a new instance of the OptimizationException class. |
| |`OptimizationException (string msg)`<br>Initializes a new instance of the OptimizationException class with a specified error message. |
| |`OptimizationException (string msg, Exception inner)`<br>Initializes a new instance of the OptimizationException class with a specified error message and a reference to the inner exception that is the cause of this exception. |

## Constructor & Destructor Documentation

### RunFailureException()
```csharp
RunFailureException ( )
```

Initializes a new instance of the RunFailureException class.

### RunFailureException()
```csharp
RunFailureException ( string msg)
```

Initializes a new instance of the RunFailureException class with a specified error message.

**Parameters:**

- `msg` - Message for the exception

### RunFailureException()
```csharp
RunFailureException ( string msg, Exception inner )
```

Initializes a new instance of the RunFailureException class with a specified error message and a reference to the inner exception that is the cause of this exception.

**Parameters:**

- `msg` - The error message that explains the reason for the exception.
- `inner` - The exception that is the cause of the current exception, or a null reference (Nothing in Visual Basic) if no inner exception is specified.

### RunFailureException()
```csharp
RunFailureException ( `SerializationInfo` info, `StreamingContext` context )
```

Initializes a new instance of the RunFailureException class with serialized data.

**Parameters:**

- `info` - The `SerializationInfo` that holds the serialized object data about the exception being thrown.
- `context` - The `StreamingContext` that contains contextual information about the source or destination.

## Property Documentation

### RunFailureException()
```csharp
RunFailureException ( )
```

Initializes a new instance of the RunFailureException class.

### RunFailureException()
```csharp
RunFailureException ( string msg)
```

Initializes a new instance of the RunFailureException class with a specified error message.

### RunFailureException()
```csharp
RunFailureException ( string msg, Exception inner )
```

Initializes a new instance of the RunFailureException class with a specified error message and a reference to the inner exception that is the cause of this exception.

### RunFailureException()
```csharp
RunFailureException ( `SerializationInfo` info, `StreamingContext` context )
```

Initializes a new instance of the RunFailureException class with serialized data.
