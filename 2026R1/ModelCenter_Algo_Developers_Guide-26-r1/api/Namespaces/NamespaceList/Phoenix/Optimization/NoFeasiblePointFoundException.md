# NoFeasiblePointFoundException Class

**Namespace:** `Phoenix.Optimization`

## Overview

This can be thrown from the algorithm when the algorithm is unable to find a feasible optimum.  
 

## Inheritance

![NoFeasiblePointFoundException](../../../../graphics/class_phoenix_1_1_optimization_1_1_no_feasible_point_found_exception.png)

## Declaration

```csharp
class NoFeasiblePointFoundException
```

## Description

This can be thrown from the algorithm when the algorithm is unable to find a feasible optimum.  
 


## Public Member Functions

|Name|Description|
|-----|-----|
| |`NoFeasiblePointFoundException ()`<br>Initializes a new instance of the NoFeasiblePointFoundException class. |
| |`NoFeasiblePointFoundException (string msg)`<br>Initializes a new instance of the NoFeasiblePointFoundException class with a specified error message. |
| |`NoFeasiblePointFoundException (string msg, Exception inner)`<br>Initializes a new instance of the NoFeasiblePointFoundException class with a specified error message and a reference to the inner exception that is the cause of this exception. |

### Public Member Functions inherited from [OptimizationException]()
|Name|Description|
|-----|-----|
| |`OptimizationException ()`<br>Initializes a new instance of the OptimizationException class. |
| |`OptimizationException (string msg)`<br>Initializes a new instance of the OptimizationException class with a specified error message. |
| |`OptimizationException (string msg, Exception inner)`<br>Initializes a new instance of the OptimizationException class with a specified error message and a reference to the inner exception that is the cause of this exception. |

## Constructor & Destructor Documentation

### NoFeasiblePointFoundException()
```csharp
NoFeasiblePointFoundException ( )
```

Initializes a new instance of the NoFeasiblePointFoundException class.

### NoFeasiblePointFoundException()
```csharp
NoFeasiblePointFoundException ( string msg)
```

Initializes a new instance of the NoFeasiblePointFoundException class with a specified error message.

**Parameters:**

- `msg` - Message for the exception

### NoFeasiblePointFoundException()
```csharp
NoFeasiblePointFoundException ( string msg, Exception inner )
```

Initializes a new instance of the NoFeasiblePointFoundException class with a specified error message and a reference to the inner exception that is the cause of this exception.

**Parameters:**

- `msg` - The error message that explains the reason for the exception.
- `inner` - The exception that is the cause of the current exception, or a null reference (Nothing in Visual Basic) if no inner exception is specified.

### NoFeasiblePointFoundException()
```csharp
NoFeasiblePointFoundException ( `SerializationInfo` info, `StreamingContext` context )
```

Initializes a new instance of the NoFeasiblePointFoundException class with serialized data.

**Parameters:**

- `info` - The `SerializationInfo` that holds the serialized object data about the exception being thrown.
- `context` - The `StreamingContext` that contains contextual information about the source or destination.

## Property Documentation

### NoFeasiblePointFoundException()
```csharp
NoFeasiblePointFoundException ( )
```

Initializes a new instance of the NoFeasiblePointFoundException class.

### NoFeasiblePointFoundException()
```csharp
NoFeasiblePointFoundException ( string msg)
```

Initializes a new instance of the NoFeasiblePointFoundException class with a specified error message.

### NoFeasiblePointFoundException()
```csharp
NoFeasiblePointFoundException ( string msg, Exception inner )
```

Initializes a new instance of the NoFeasiblePointFoundException class with a specified error message and a reference to the inner exception that is the cause of this exception.

### NoFeasiblePointFoundException()
```csharp
NoFeasiblePointFoundException ( `SerializationInfo` info, `StreamingContext` context )
```

Initializes a new instance of the NoFeasiblePointFoundException class with serialized data.
