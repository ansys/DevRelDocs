# Enum: AnalysisServerResponseType

**Package:** `com.phoenix_int.aserver.client.v2`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ java.lang.Enum<AnalysisServerResponseType>
    ↳ com.phoenix_int.aserver.client.v2.AnalysisServerResponseType
```

**Implemented Interfaces**

- `java.io.Serializable`, `java.lang.Comparable<AnalysisServerResponseType>`

--- 

**Declaration**

```java
public enum AnalysisServerResponseType
extends java.lang.Enum<AnalysisServerResponseType>
```

Enumeration representing response type.

## Enum Constant Summary

| Enum Constant and Description |
| --- |
| `ConnectionError`<br>A connection error. |
| `Extended`<br>An extended, hybrid string+binary response. |
| `Icon`<br>An icon. |
| `Normal`<br>A normal, string-based response. |
| `ServerError`<br>A server error. |
| `Unknown`<br>An unknown response type (default for new response objects). |

## Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `static AnalysisServerResponseType` | `valueOf(java.lang.String name)`<br>Returns the enum constant of this type with the specified name. |
| `static AnalysisServerResponseType[]` | `values()`<br>Returns an array containing the constants of this enum type, in the order they are declared. |

### Methods inherited from class java.lang.Enum
`clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `toString`, `valueOf`

### Methods inherited from class java.lang.Object
`getClass`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

## Enum Constant Detail

### Normal

```java
public static final AnalysisServerResponseType Normal
```

A normal, string-based response.

### Extended

```java
public static final AnalysisServerResponseType Extended
```

An extended, hybrid string+binary response.

### ServerError

```java
public static final AnalysisServerResponseType ServerError
```

A server error.

### Icon

```java
public static final AnalysisServerResponseType Icon
```

An icon.

### ConnectionError

```java
public static final AnalysisServerResponseType ConnectionError
```

A connection error.

### Unknown

```java
public static final AnalysisServerResponseType Unknown
```

An unknown response type (default for new response objects).

## Method Detail

### values

```java
public static AnalysisServerResponseType[] values()
```

Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows:

```java
for (AnalysisServerResponseType c : AnalysisServerResponseType.values())
    System.out.println(c);
```

**Returns:**
- an array containing the constants of this enum type, in the order they are declared

### valueOf

```java
public static AnalysisServerResponseType valueOf(java.lang.String name)
```

Returns the enum constant of this type with the specified name. The string must match exactly an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

**Parameters:**
- `name` - the name of the enum constant to be returned.

**Returns:**
- the enum constant with the specified name

**Throws:**
- `java.lang.IllegalArgumentException` - if this enum type has no constant with the specified name
- `java.lang.NullPointerException` - if the argument is null