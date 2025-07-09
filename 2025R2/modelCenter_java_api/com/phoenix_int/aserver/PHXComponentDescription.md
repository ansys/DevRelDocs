# Class: PHXComponentDescription

**Package:** `com.phoenix_int.aserver`

**Class Hierarchy**
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.PHXComponentDescription
```

**Declaration**
```
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
[Constant Field Values](../../../constant-values.md)

### VI_AVAILABLE
```
public static final int VI_AVAILABLE
```

**See Also:**
[Constant Field Values](../../../constant-values.md)

### VI_UNAVAILABLE
```
public static final int VI_UNAVAILABLE
```

**See Also:**
[Constant Field Values](../../../constant-values.md)

## Constructor Detail

### PHXComponentDescription
```
public PHXComponentDescription()
```

## Method Detail

### setRedirectURL
```
public void setRedirectURL(java.lang.String r)
```

### getRedirectURL
```
public java.lang.String getRedirectURL()
```

### setDescription
```
public void setDescription(java.lang.String d)
```

### getDescription
```
public java.lang.String getDescription()
```

### setAuthor
```
public void setAuthor(java.lang.String a)
```

### getAuthor
```
public java.lang.String getAuthor()
```

### setVersion
```
public void setVersion(java.lang.String v)
```

### getVersion
```
public java.lang.String getVersion()
```

### setHelpURL
```
public void setHelpURL(java.lang.String v)
```

### getHelpURL
```
public java.lang.String getHelpURL()
```

### setKeywords
```
public void setKeywords(java.lang.String v)
```

### getKeywords
```
public java.lang.String getKeywords()
```

### setRequirements
```
public void setRequirements(java.lang.String v)
```
Set the requirements via comma separated list.

**Parameters:**
: `v`- comma separated list of requirements

### getRequirements
```
public java.lang.String getRequirements()
```
Get the comma separated list of unquoted requirements.

**Returns:**
- comma separated list of unquoted requirements

### setDriver
```
public void setDriver(boolean f)
```

### getDriver
```
public boolean getDriver()
```

### setHasIcon
```
public void setHasIcon(boolean f)
```

### getHasIcon
```
public boolean getHasIcon()
```

### setIconFile
```
public void setIconFile(java.lang.String i)
```

### getIcon
```
public PHXIcon getIcon()
```

### setIcon
```
public void setIcon(PHXIcon i)
```

### getTimeStamp
```
public java.util.Date getTimeStamp()
```

### setTimeStamp
```
public void setTimeStamp(java.util.Date d)
```

### getChecksum
```
public long getChecksum()
```

### setChecksum
```
public void setChecksum(long d)
```

### setHasVersionInfo
```
public void setHasVersionInfo(int vi)
```

### getHasVersionInfo
```
public int getHasVersionInfo()
```

### setDelayLoadSetupAllowed
```
public void setDelayLoadSetupAllowed(boolean f)
```

### getDelayLoadSetupAllowed
```
public boolean getDelayLoadSetupAllowed()
```