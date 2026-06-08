# Class: PHXNameDivider

**Package:** `com.phoenix_int.aserver.util`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.util.PHXNameDivider
```

--- 

**Declaration**

```java
public class PHXNameDivider
extends java.lang.Object
```

This is a utility class for breaking down names into smaller parts.

Usage:
```java
String fullName = "phoenix/NAVY/IBHVG2";
String category = PHXNameDivider.getPathPart(fullName);
String name = PHXNameDivider.getNamePart(fullName);
```

## Constructor Summary

| Constructor and Description |
|----------------------------|
| `PHXNameDivider()` |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `static java.lang.String` | `getNamePart(java.lang.String fullName)`<br>Retrieves the name part from a full name |
| `static java.lang.String` | `getPathPart(java.lang.String fullName)`<br>Retrieves the path part from a full name |
| `static void` | `main(java.lang.String[] args)` |

### Methods inherited from class java.lang.Object

`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXNameDivider

```java
public PHXNameDivider()
```

## Method Detail

### getPathPart

```java
public static java.lang.String getPathPart(java.lang.String fullName)
```

Retrieves the path part from a full name.

**Parameters:**
- `fullName` - the full name

**Returns:**
- only the path part of the full name, separator not included

### getNamePart

```java
public static java.lang.String getNamePart(java.lang.String fullName)
```

Retrieves the name part from a full name.

**Parameters:**
- `fullName` - the full name

**Returns:**
- only the name part of the full name

### main

```java
public static void main(java.lang.String[] args)
```