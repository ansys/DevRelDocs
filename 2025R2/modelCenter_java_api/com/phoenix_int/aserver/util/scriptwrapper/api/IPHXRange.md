# Interface: IPHXRange

**Package:** `com.phoenix_int.aserver.util.scriptwrapper.api`

**Interface Hierarchy**

```
↳ com.phoenix_int.aserver.util.scriptwrapper.api.IPHXRange
```

**All Known Implementing Classes:**
[PHXCAERange](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/PHXCAERange.html), [PHXRowFieldRange](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/PHXRowFieldRange.html)

--- 
**Declaration**

```java
public interface IPHXRange
```

## Method Summary

| Modifier and Type      | Method and Description                |
|-----------------------|---------------------------------------|
| `void`                | `assertEquals(IPHXRange other)`        |
| `void`                | `fromString(java.lang.String str)`     |
| `java.lang.String`    | `getPageName()`                        |
| `java.lang.String`    | `toString()`                           |
| `java.lang.String`    | `toString(boolean fullName)`           |

## Method Detail

### fromString

```java
void fromString(java.lang.String str)
```

### toString

```java
java.lang.String toString()
```

**Overrides:**
`toString` in class `java.lang.Object`

### toString

```java
java.lang.String toString(boolean fullName)
```

### assertEquals

```java
void assertEquals(IPHXRange other)
           throws java.lang.Exception
```

**Throws:**
`java.lang.Exception`

### getPageName

```java
java.lang.String getPageName()
```