# MaxIterationsException Class

**Namespace:** `Phoenix.Optimization`

## Overview

The maximum number of iterations was reached before an optimum was found.  
 

## Inheritance

![MaxIterationsException](../../../../graphics/class_phoenix_1_1_optimization_1_1_max_iterations_exception.png)

## Declaration

```csharp
class MaxIterationsException
```

## Description

The maximum number of iterations was reached before an optimum was found.  
 


## Public Member Functions

|Name|Description|
|-----|-----|
| |`MaxIterationsException ()`<br>Initializes a new instance of the MaxIterationsException class. |
| |`MaxIterationsException (string msg)`<br>Initializes a new instance of the MaxIterationsException class with a specified error message. |
| |`MaxIterationsException (string msg, Exception inner)`<br>Initializes a new instance of the MaxIterationsException class with a specified error message and a reference to the inner exception that is the cause of this exception. |

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

### MaxIterationsException()
```csharp
MaxIterationsException ( )
```

Initializes a new instance of the MaxIterationsException class.

### MaxIterationsException()
```csharp
MaxIterationsException ( string msg)
```

Initializes a new instance of the MaxIterationsException class with a specified error message.

**Parameters:**

- `msg` - Message for the exception

### MaxIterationsException()
```csharp
MaxIterationsException ( string msg, Exception inner )
```

Initializes a new instance of the MaxIterationsException class with a specified error message and a reference to the inner exception that is the cause of this exception.

**Parameters:**

- `msg` - The error message that explains the reason for the exception.
- `inner` - The exception that is the cause of the current exception, or a null reference (Nothing in Visual Basic) if no inner exception is specified.

### MaxIterationsException()
```csharp
MaxIterationsException ( `SerializationInfo` info, `StreamingContext` context )
```

Initializes a new instance of the MaxIterationsException class with serialized data.

**Parameters:**

- `info` - The `SerializationInfo` that holds the serialized object data about the exception being thrown.
- `context` - The `StreamingContext` that contains contextual information about the source or destination.

## Property Documentation

### MaxIterationsException()
```csharp
MaxIterationsException ( )
```

Initializes a new instance of the MaxIterationsException class.

### MaxIterationsException()
```csharp
MaxIterationsException ( string msg)
```

Initializes a new instance of the MaxIterationsException class with a specified error message.

### MaxIterationsException()
```csharp
MaxIterationsException ( string msg, Exception inner )
```

Initializes a new instance of the MaxIterationsException class with a specified error message and a reference to the inner exception that is the cause of this exception.

### MaxIterationsException()
```csharp
MaxIterationsException ( `SerializationInfo` info, `StreamingContext` context )
```

Initializes a new instance of the MaxIterationsException class with serialized data.
