# MaxGenerationsException Class

**Namespace:** `Phoenix.Optimization`

## Overview

The maximum number of generations was reached before an optimimum value was found.  
 

## Inheritance

![MaxGenerationsException](../../../../graphics/class_phoenix_1_1_optimization_1_1_max_generations_exception.png)

## Declaration

```csharp
class MaxGenerationsException
```

## Description

The maximum number of generations was reached before an optimimum value was found.  
 


## Public Member Functions

|Name|Description|
|-----|-----|
| |`MaxGenerationsException ()`<br>Initializes a new instance of the MaxGenerationsException class. |
| |`MaxGenerationsException (string msg)`<br>Initializes a new instance of the MaxGenerationsException class with a specified error message. |
| |`MaxGenerationsException (string msg, Exception inner)`<br>Initializes a new instance of the MaxGenerationsException class with a specified error message and a reference to the inner exception that is the cause of this exception. |

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

### MaxGenerationsException()
```csharp
MaxGenerationsException ( )
```

Initializes a new instance of the MaxGenerationsException class.

### MaxGenerationsException()
```csharp
MaxGenerationsException ( string msg)
```

Initializes a new instance of the MaxGenerationsException class with a specified error message.

**Parameters:**

- `msg` - Message for the exception

### MaxGenerationsException()
```csharp
MaxGenerationsException ( string msg, Exception inner )
```

Initializes a new instance of the MaxGenerationsException class with a specified error message and a reference to the inner exception that is the cause of this exception.

**Parameters:**

- `msg` - The error message that explains the reason for the exception.
- `inner` - The exception that is the cause of the current exception, or a null reference (Nothing in Visual Basic) if no inner exception is specified.

### MaxGenerationsException()
```csharp
MaxGenerationsException ( `SerializationInfo` info, `StreamingContext` context )
```

Initializes a new instance of the MaxGenerationsException class with serialized data.

**Parameters:**

- `info` - The `SerializationInfo` that holds the serialized object data about the exception being thrown.
- `context` - The `StreamingContext` that contains contextual information about the source or destination.

## Property Documentation

### MaxGenerationsException()
```csharp
MaxGenerationsException ( )
```

Initializes a new instance of the MaxGenerationsException class.

### MaxGenerationsException()
```csharp
MaxGenerationsException ( string msg)
```

Initializes a new instance of the MaxGenerationsException class with a specified error message.

### MaxGenerationsException()
```csharp
MaxGenerationsException ( string msg, Exception inner )
```

Initializes a new instance of the MaxGenerationsException class with a specified error message and a reference to the inner exception that is the cause of this exception.

### MaxGenerationsException()
```csharp
MaxGenerationsException ( `SerializationInfo` info, `StreamingContext` context )
```

Initializes a new instance of the MaxGenerationsException class with serialized data.
