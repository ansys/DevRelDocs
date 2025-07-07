# Class: PHXSection

**Package:** `com.phoenix_int.aserver.util.scriptwrapper.api`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.util.scriptwrapper.api.PHXSection
```

**Implemented Interfaces**

- `java.lang.Cloneable`
---
**Declaration**

```java
public class PHXSection
extends java.lang.Object
implements java.lang.Cloneable
```

## Field Summary

| Modifier and Type | Field and Description |
|-------------------|----------------------|
| `java.lang.Object` | `owner` |

## Constructor Summary

| Constructor and Description |
|---------------------|
| `PHXSection(java.lang.String name, PHXBookmark start, PHXBookmark end, java.lang.String delimiters)`<br>Creates a new instance of PHXSection |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `assertEquals(PHXSection other)`<br>Test comparison function. |
| `PHXSection` | `copy()` |
| `java.lang.String` | `getDelimiters()` |
| `PHXBookmark` | `getEnd()` |
| `java.lang.String` | `getName()` |
| `PHXBookmark` | `getStart()` |
| `void` | `setDelimiters(java.lang.String delimiters)` |
| `void` | `setEnd(PHXBookmark end)` |
| `void` | `setName(java.lang.String name)` |
| `void` | `setStart(PHXBookmark start)` |

### Methods inherited from class java.lang.Object

`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Field Detail

### owner

```java
public java.lang.Object owner
```

## Constructor Detail

### PHXSection

```java
public PHXSection(java.lang.String name,
                  PHXBookmark start,
                  PHXBookmark end,
                  java.lang.String delimiters)
```
Creates a new instance of `PHXSection`

## Method Detail

### copy

```java
public PHXSection copy()
```

### getName

```java
public java.lang.String getName()
```

### setName

```java
public void setName(java.lang.String name)
```

### getStart

```java
public PHXBookmark getStart()
```

### setStart

```java
public void setStart(PHXBookmark start)
```

### getEnd

```java
public PHXBookmark getEnd()
```

### setEnd

```java
public void setEnd(PHXBookmark end)
```

### getDelimiters

```java
public java.lang.String getDelimiters()
```

### setDelimiters

```java
public void setDelimiters(java.lang.String delimiters)
```

### assertEquals

```java
public void assertEquals(PHXSection other)
                  throws java.lang.Exception
```
Test comparison function. If the two objects are not equal, an exception is thrown

**Parameters:**
- `other`- the data model to compare this to

**Throws:**
- `java.lang.Exception`- thrown if the data models do not match