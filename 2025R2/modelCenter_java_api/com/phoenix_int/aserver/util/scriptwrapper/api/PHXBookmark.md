# Class: PHXBookmark

**Package:** `com.phoenix_int.aserver.util.scriptwrapper.api`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.util.scriptwrapper.api.PHXBookmark
```
--- 

**Declaration**

```java
public class PHXBookmark
    extends java.lang.Object
```

## Field Summary

| Modifier and Type | Field and Description |
|-------------------|----------------------|
| `java.lang.Object` | `owner` |

## Constructor Summary

| Constructor and Description |
|----------------------------|
| `PHXBookmark(java.lang.String name, PHXRowFieldRange range)`<br>Constructor |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `assertEquals(PHXBookmark other)`<br>Test comparison function. |
| `static java.lang.String` | `correctName(java.lang.String tempName)` |
| `java.util.Vector<PHXBookmark>` | `getChildren(java.util.Vector<PHXBookmark> bookmarks, boolean immOnly)` |
| `java.lang.String` | `getName()` |
| `PHXRowFieldRange` | `getRange()` |
| `void` | `setName(java.lang.String name)` |
| `void` | `setRange(PHXRowFieldRange range)` |

### Methods inherited from class java.lang.Object

`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Field Detail

### owner

```java
public java.lang.Object owner
```

## Constructor Detail

### PHXBookmark

```java
public PHXBookmark(java.lang.String name,
                   PHXRowFieldRange range)
```

**Parameters:**
- `name` - a unique bookmark name
- `range` - the range identifying the bookmark

## Method Detail

### getName

```java
public java.lang.String getName()
```

### setName

```java
public void setName(java.lang.String name)
```

### getRange

```java
public PHXRowFieldRange getRange()
```

### setRange

```java
public void setRange(PHXRowFieldRange range)
```

### getChildren

```java
public java.util.Vector<PHXBookmark> getChildren(java.util.Vector<PHXBookmark> bookmarks,
                                                 boolean immOnly)
```

### assertEquals

```java
public void assertEquals(PHXBookmark other)
                  throws java.lang.Exception
```
Test comparison function. If the two objects are not equal, an exception is thrown

**Parameters:**
- `other` - the data model to compare this to

**Throws:**
- `java.lang.Exception` - thrown if the data models do not match

### correctName

```java
public static java.lang.String correctName(java.lang.String tempName)
```