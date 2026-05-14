# Class: PHXFileName

**Package:** `com.phoenix_int.aserver.util`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.util.PHXFileName
```

---

**Declaration**

```java
public class PHXFileName
extends java.lang.Object
```

This is a utility class for easily managing file names. The class lets you specify a name, and optionally a base name. If the name fully specifies the file, then the base name is ignored. If not, then the base name may be modified to find the file in different locations.

e.g.:

```
    name                  set base name to       resulting fullName
    -----------           ------------------     --------------------
    /usr/bin              /users/woyak           /usr/bin
    c:/usr/bin            d:/users/woyak         c:/usr/bin
    usr/bin               /home/woyak            /home/woyak/usr/bin      
```

A `PHXStringReplacer` may be specified for use in forming the fullName. If a replacer is specified, both the name and base name will be passed through it before trying to form the fullName.

## Constructor Summary

| Constructor and Description |
|----------------------------|
| `PHXFileName()` |
| `PHXFileName(java.lang.String baseName, java.lang.String name)` |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `java.lang.String` | `getBaseName()` |
| `java.lang.String` | `getFullName()`<br>returns the full file name. |
| `java.lang.String` | `getFullNameCoded()`<br>returns the full file name in coded form, i.e. |
| `java.lang.String` | `getName()` |
| `void` | `setBaseName(java.lang.String baseName)`<br>sets the base name for the file. |
| `void` | `setName(java.lang.String name)`<br>sets the name for the file |
| `void` | `setStringReplacer(PHXStringReplacer r)`<br>sets the string replacer for the forming the real file name |

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXFileName

```java
public PHXFileName()
```

### PHXFileName

```java
public PHXFileName(java.lang.String baseName, 
                   java.lang.String name)
```

## Method Detail

### setStringReplacer

```java
public void setStringReplacer(PHXStringReplacer r)
```

sets the string replacer for the forming the real file name

### setName

```java
public void setName(java.lang.String name)
```

sets the name for the file

### getName

```java
public java.lang.String getName()
```

### setBaseName

```java
public void setBaseName(java.lang.String baseName)
```

sets the base name for the file. If the file was fully specified, then this function does nothing

**Parameters:**
- `baseName` - the new baseName

### getBaseName

```java
public java.lang.String getBaseName()
```

### getFullName

```java
public java.lang.String getFullName()
```

returns the full file name. This is the combination of the base name and name parts, unless the name part is fully specified. In that case it is just the name part.

### getFullNameCoded

```java
public java.lang.String getFullNameCoded()
```

returns the full file name in coded form, i.e. variables have not been substituted into it.