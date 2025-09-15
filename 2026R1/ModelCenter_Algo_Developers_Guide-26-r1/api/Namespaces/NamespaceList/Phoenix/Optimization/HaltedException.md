# HaltedException Class

**Namespace:** `Phoenix.Optimization`

## Overview

This can be thrown from the algorithm when the algorithm is halted.  
 

## Inheritance

![HaltedException](../../../../graphics/class_phoenix_1_1_optimization_1_1_halted_exception.png)

## Declaration

```csharp
class HaltedException
```

## Description

This can be thrown from the algorithm when the algorithm is halted.  
 


## Public Member Functions

|Name|Description|
|-----|-----|
| |`HaltedException ()`<br>Initializes a new instance of the HaltedException class. |
| |`HaltedException (string msg)`<br>Initializes a new instance of the HaltedException class with a specified error message. |
| |`HaltedException (string msg, Exception inner)`<br>Initializes a new instance of the HaltedException class with a specified error message and a reference to the inner exception that is the cause of this exception. |

### Public Member Functions inherited from [OptimizationException]()
|Name|Description|
|-----|-----|
| |`OptimizationException ()`<br>Initializes a new instance of the OptimizationException class. |
| |`OptimizationException (string msg)`<br>Initializes a new instance of the OptimizationException class with a specified error message. |
| |`OptimizationException (string msg, Exception inner)`<br>Initializes a new instance of the OptimizationException class with a specified error message and a reference to the inner exception that is the cause of this exception. |

## Constructor & Destructor Documentation

### HaltedException()
```csharp
HaltedException ( )
```

Initializes a new instance of the HaltedException class.

### HaltedException()
```csharp
HaltedException ( string msg)
```

Initializes a new instance of the HaltedException class with a specified error message.

**Parameters:**

- `msg` - Message for the exception

### HaltedException()
```csharp
HaltedException ( string msg, Exception inner )
```

Initializes a new instance of the HaltedException class with a specified error message and a reference to the inner exception that is the cause of this exception.

**Parameters:**

- `msg` - The error message that explains the reason for the exception.
- `inner` - The exception that is the cause of the current exception, or a null reference (Nothing in Visual Basic) if no inner exception is specified.

### HaltedException()
```csharp
HaltedException ( `SerializationInfo` info, `StreamingContext` context )
```

Initializes a new instance of the HaltedException class with serialized data.

**Parameters:**

- `info` - The `SerializationInfo` that holds the serialized object data about the exception being thrown.
- `context` - The `StreamingContext` that contains contextual information about the source or destination.

## Property Documentation

### HaltedException()
```csharp
HaltedException ( )
```

Initializes a new instance of the HaltedException class.

### HaltedException()
```csharp
HaltedException ( string msg)
```

Initializes a new instance of the HaltedException class with a specified error message.

### HaltedException()
```csharp
HaltedException ( string msg, Exception inner )
```

Initializes a new instance of the HaltedException class with a specified error message and a reference to the inner exception that is the cause of this exception.

### HaltedException()
```csharp
HaltedException ( `SerializationInfo` info, `StreamingContext` context )
```

Initializes a new instance of the HaltedException class with serialized data.
