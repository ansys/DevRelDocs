# EarlyTerminationException Class

**Namespace:** `Phoenix.Optimization`

## Overview

Represents a class of cases where the solver terminated early due to some maximum option being hit, but the optimum value has probably not been found.  
 

## Inheritance

![EarlyTerminationException](../../../../graphics/class_phoenix_1_1_optimization_1_1_early_termination_exception.png)

## Declaration

```csharp
class EarlyTerminationException
```

## Description

Represents a class of cases where the solver terminated early due to some maximum option being hit, but the optimum value has probably not been found.  
 


## Public Member Functions

|Name|Description|
|-----|-----|
| |`EarlyTerminationException ()`<br>Initializes a new instance of the `EarlyTerminationException` class. |
| |`EarlyTerminationException (string msg)`<br>Initializes a new instance of the `EarlyTerminationException` class with a specified error message. |
| |`EarlyTerminationException (string msg, Exception inner)`<br>Initializes a new instance of the `EarlyTerminationException` class with a specified error message and a reference to the inner exception that is the cause of this exception. |

### Public Member Functions inherited from [OptimizationException]()
|Name|Description|
|-----|-----|
| |`OptimizationException ()`<br>Initializes a new instance of the `OptimizationException` class. |
| |`OptimizationException (string msg)`<br>Initializes a new instance of the `OptimizationException` class with a specified error message. |
| |`OptimizationException (string msg, Exception inner)`<br>Initializes a new instance of the `OptimizationException` class with a specified error message and a reference to the inner exception that is the cause of this exception. |

## Constructor & Destructor Documentation

### EarlyTerminationException()
```csharp
EarlyTerminationException ( )
```

Initializes a new instance of the `EarlyTerminationException` class.

### EarlyTerminationException()
```csharp
EarlyTerminationException ( string msg)
```

Initializes a new instance of the `EarlyTerminationException` class with a specified error message.

**Parameters:**

- `msg` - Message for the exception

### EarlyTerminationException()
```csharp
EarlyTerminationException ( string msg, Exception inner )
```

Initializes a new instance of the `EarlyTerminationException` class with a specified error message and a reference to the inner exception that is the cause of this exception.

**Parameters:**

- `msg` - The error message that explains the reason for the exception.
- `inner` - The exception that is the cause of the current exception, or a null reference (Nothing in Visual Basic) if no inner exception is specified.

### EarlyTerminationException()
```csharp
EarlyTerminationException ( `SerializationInfo` info, `StreamingContext` context )
```

Initializes a new instance of the `EarlyTerminationException` class with serialized data.

**Parameters:**

- `info` - The `SerializationInfo` that holds the serialized object data about the exception being thrown.
- `context` - The `StreamingContext` that contains contextual information about the source or destination.

