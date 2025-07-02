# Class: PHXComponentDescription

**Package:** `com.phoenix_int.aserver`

**Class Hierarchy**
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.PHXComponentDescription
```

**Declaration**
```java
public class PHXComponentDescription
extends java.lang.Object
```

A class for holding description information about a component class.

## Field Summary
| Modifier and Type | Field and Description |
|-------------------|----------------------|
| `static int` | `VI_AVAILABLE` |
| `static int` | `VI_UNAVAILABLE` |
| `static int` | `VI_UNKNOWN` |

## Constructor Summary
| Constructor and Description |
|----------------------------|
| `PHXComponentDescription()` |

## Method Summary
| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `java.lang.String` | `getAuthor()` |
| `long` | `getChecksum()` |
| `boolean` | `getDelayLoadSetupAllowed()` |
| `java.lang.String` | `getDescription()` |
| `boolean` | `getDriver()` |
| `boolean` | `getHasIcon()` |
| `int` | `getHasVersionInfo()` |
| `java.lang.String` | `getHelpURL()` |
| `PHXIcon` | `getIcon()` |
| `java.lang.String` | `getKeywords()` |
| `java.lang.String` | `getRedirectURL()` |
| `java.lang.String` | `getRequirements()`<br>Get the comma separated list of unquoted requirements. |
| `java.util.Date` | `getTimeStamp()` |
| `java.lang.String` | `getVersion()` |
| `void` | `setAuthor(java.lang.String a)` |
| `void` | `setChecksum(long d)` |
| `void` | `setDelayLoadSetupAllowed(boolean f)` |
| `void` | `setDescription(java.lang.String d)` |
| `void` | `setDriver(boolean f)` |
| `void` | `setHasIcon(boolean f)` |
| `void` | `setHasVersionInfo(int vi)` |
| `void` | `setHelpURL(java.lang.String v)` |
| `void` | `setIcon(PHXIcon i)` |
| `void` | `setIconFile(java.lang.String i)` |
| `void` | `setKeywords(java.lang.String v)` |
| `void` | `setRedirectURL(java.lang.String r)` |
| `void` | `setRequirements(java.lang.String v)`<br>Set the requirements via comma separated list. |
| `void` | `setTimeStamp(java.util.Date d)` |
| `void` | `setVersion(java.lang.String v)` |

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Field Detail

### VI_UNKNOWN
```
public static final int VI_UNKNOWN
```

**See Also:**
[Constant Field Values](../../../constant-values.html#com.phoenix_int.aserver.PHXComponentDescription.VI_UNKNOWN)

### VI_AVAILABLE
```
public static final int VI_AVAILABLE
```

**See Also:**
[Constant Field Values](../../../constant-values.html#com.phoenix_int.aserver.PHXComponentDescription.VI_AVAILABLE)

### VI_UNAVAILABLE
```
public static final int VI_UNAVAILABLE
```

**See Also:**
[Constant Field Values](../../../constant-values.html#com.phoenix_int.aserver.PHXComponentDescription.VI_UNAVAILABLE)

## Constructor Detail

### PHXComponentDescription
```java
public PHXComponentDescription()
```

## Method Detail

### setRedirectURL
```java
public void setRedirectURL(java.lang.String r)
```

### getRedirectURL
```java
public java.lang.String getRedirectURL()
```

### setDescription
```java
public void setDescription(java.lang.String d)
```

### getDescription
```java
public java.lang.String getDescription()
```

### setAuthor
```java
public void setAuthor(java.lang.String a)
```

### getAuthor
```java
public java.lang.String getAuthor()
```

### setVersion
```java
public void setVersion(java.lang.String v)
```

### getVersion
```java
public java.lang.String getVersion()
```

### setHelpURL
```java
public void setHelpURL(java.lang.String v)
```

### getHelpURL
```java
public java.lang.String getHelpURL()
```

### setKeywords
```java
public void setKeywords(java.lang.String v)
```

### getKeywords
```java
public java.lang.String getKeywords()
```

### setRequirements
```java
public void setRequirements(java.lang.String v)
```
Set the requirements via comma separated list.

**Parameters:**
: `v`- comma separated list of requirements

### getRequirements
```java
public java.lang.String getRequirements()
```
Get the comma separated list of unquoted requirements.

**Returns:**
- comma separated list of unquoted requirements

### setDriver
```java
public void setDriver(boolean f)
```

### getDriver
```java
public boolean getDriver()
```

### setHasIcon
```java
public void setHasIcon(boolean f)
```

### getHasIcon
```java
public boolean getHasIcon()
```

### setIconFile
```java
public void setIconFile(java.lang.String i)
```

### getIcon
```java
public PHXIcon getIcon()
```

### setIcon
```java
public void setIcon(PHXIcon i)
```

### getTimeStamp
```java
public java.util.Date getTimeStamp()
```

### setTimeStamp
```java
public void setTimeStamp(java.util.Date d)
```

### getChecksum
```java
public long getChecksum()
```

### setChecksum
```java
public void setChecksum(long d)
```

### setHasVersionInfo
```java
public void setHasVersionInfo(int vi)
```

### getHasVersionInfo
```java
public int getHasVersionInfo()
```

### setDelayLoadSetupAllowed
```java
public void setDelayLoadSetupAllowed(boolean f)
```

### getDelayLoadSetupAllowed
```java
public boolean getDelayLoadSetupAllowed()
```