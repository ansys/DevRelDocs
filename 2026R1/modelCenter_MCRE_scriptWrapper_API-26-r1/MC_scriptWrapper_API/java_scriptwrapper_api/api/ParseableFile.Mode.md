# Enum: ParseableFile.Mode

**Package:** `com.phoenix_int.aserver.util.scriptwrapper.api`

**Enclosing interface:**

- [`ParseableFile`](ParseableFile.md)

**Class Hierarchy**

```java
↳ java.lang.Object
  ↳ java.lang.Enum<ParseableFile.Mode>
    ↳ com.phoenix_int.aserver.util.scriptwrapper.api.ParseableFile.Mode
```

**Implemented Interfaces**

- `java.io.Serializable`, 
- `java.lang.Comparable<ParseableFile.Mode>`

--- 
**Declaration**

```java
public static enum ParseableFile.Mode
extends java.lang.Enum<ParseableFile.Mode>
```

File mode. Moved to type-safe enum from legacy integer constants.

## Enum Constant Summary

| Enum Constant and Description |
|-----------------------------|
| `GENERATE` |
| `PARSE` |
| `READ_TEMPLATE` |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `static ParseableFile.Mode` | `fromCode(int code)`<br>Utility function for determining the enum from the legacy integer code |
| `int` | `getCode()` <br>Retrieve the legacy integer code assigned to this mode |
| `com.phoenix_int.aserver.trace.PHXTraceFileEvent.Type` | `getEventType()` |
| `static ParseableFile.Mode` | `valueOf(java.lang.String name)` <br>Returns the enum constant of this type with the specified name. |
| `static ParseableFile.Mode[]` | `values()` <br>Returns an array containing the constants of this enum type, in the order they are declared. |

### Methods inherited from class java.lang.Enum

`clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

### Methods inherited from class java.lang.Object

`getClass`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

## Enum Constant Detail

### GENERATE
```java
public static final ParseableFile.Mode GENERATE
```

### PARSE
```java
public static final ParseableFile.Mode PARSE
```

### READ_TEMPLATE
```java
public static final ParseableFile.Mode READ_TEMPLATE
```
## Method Detail

### values

```java
public static ParseableFile.Mode[] values()
```

Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows:

```java
for (ParseableFile.Mode c : ParseableFile.Mode.values())
    System.out.println(c);
```

**Returns:**
- an array containing the constants of this enum type, in the order they are declared

### valueOf

```java
public static ParseableFile.Mode valueOf(java.lang.String name)
```

Returns the enum constant of this type with the specified name. The string must match exactly an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

**Parameters:**
- `name` - the name of the enum constant to be returned.

**Returns:**
- the enum constant with the specified name

**Throws:**
- `java.lang.IllegalArgumentException` - if this enum type has no constant with the specified name
- `java.lang.NullPointerException` - if the argument is null

### getEventType

```java
public com.phoenix_int.aserver.trace.PHXTraceFileEvent.Type getEventType()
```

### getCode

```java
public int getCode()
```

Retrieve the legacy integer code assigned to this mode

**Returns:**
- code

### fromCode

```java
public static ParseableFile.Mode fromCode(int code)
```

Utility function for determining the enum from the legacy integer code

**Parameters:**
- `code` -

**Returns:**