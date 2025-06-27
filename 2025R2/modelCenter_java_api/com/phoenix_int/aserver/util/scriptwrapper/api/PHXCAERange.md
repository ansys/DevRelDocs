# Class: PHXCAERange

**Package:**
- `com.phoenix_int.aserver.util.scriptwrapper.api`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.util.scriptwrapper.api.PHXCAERange
```

**Implemented Interfaces**

- [IPHXRange](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/IPHXRange.html)

----

**Declaration**

```java
public class PHXCAERange
extends java.lang.Object
implements IPHXRange
```

## Field Summary

| Modifier and Type | Field and Description |
|-------------------|----------------------|
| `static java.lang.String` | `NAME_SEPARATOR` |

## Constructor Summary

| Constructor and Description |
|----------------------------|
| `PHXCAERange()` |
| `PHXCAERange(java.lang.String str)` |
| `PHXCAERange(java.lang.String pageName, java.lang.String str)` |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `assertEquals(IPHXRange other)` |
| `void` | `fromString(java.lang.String str)` |
| `java.lang.String` | `getPageName()` |
| `void` | `setPageName(java.lang.String pageName)` |
| `java.lang.String` | `toString()` |
| `java.lang.String` | `toString(boolean fullName)` |

### Methods inherited from class java.lang.Object

`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

## Field Detail

### NAME_SEPARATOR

```java
public static final java.lang.String NAME_SEPARATOR
```

**See Also:**
- [Constant Field Values](../../../../../../constant-values.html#com.phoenix_int.aserver.util.scriptwrapper.api.PHXCAERange.NAME_SEPARATOR)

## Constructor Detail

### PHXCAERange

```java
public PHXCAERange()
```

### PHXCAERange

```java
public PHXCAERange(java.lang.String str)
```

### PHXCAERange

```java
public PHXCAERange(java.lang.String pageName, 
                   java.lang.String str)
```

## Method Detail

### fromString

```java
public void fromString(java.lang.String str)
```

**Specified by:**
- `fromString` in interface `IPHXRange`

### toString

```java
public java.lang.String toString()
```

**Specified by:**
- `toString` in interface `IPHXRange`

**Overrides:**
- `toString` in class `java.lang.Object`

### toString

```java
public java.lang.String toString(boolean fullName)
```

**Specified by:**
- `toString` in interface `IPHXRange`

### assertEquals

```java
public void assertEquals(IPHXRange other)
                  throws java.lang.Exception
```

**Specified by:**
- `assertEquals` in interface `IPHXRange`

**Throws:**
- `java.lang.Exception`

### setPageName

```java
public void setPageName(java.lang.String pageName)
```

### getPageName

```java
public java.lang.String getPageName()
```

**Specified by:**
- `getPageName` in interface `IPHXRange`