# Class: AnalysisServerVersion

**Package:** `com.phoenix_int.aserver.client.v2`

**Class Hierarchy**

```java
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.client.v2.AnalysisServerVersion
```

**Implemented Interfaces**

- `java.lang.Comparable<AnalysisServerVersion>`

--- 

**Declaration**

```java
public class AnalysisServerVersion
extends java.lang.Object
implements java.lang.Comparable<AnalysisServerVersion>
```

Server protocol version. Useful for determining if a server supports specific features.

## Constructor Summary

| Constructor and Description |
| --- |
| `AnalysisServerVersion(int major, int minor, int build)`<br>Constructor. |

## Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `int` | `compareTo(AnalysisServerVersion o)` |
| `boolean` | `equals(java.lang.Object obj)` |
| `int` | `getBuild()`<br>Get the build. |
| `int` | `getMajor()`<br>Get the major version. |
| `int` | `getMinor()`<br>Get the minor version. |
| `int` | `hashCode()` |
| `java.lang.String` | `toString()` |

### Methods inherited from class java.lang.Object
`clone`, `finalize`, `getClass`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

## Constructor Detail

### AnalysisServerVersion

```java
public AnalysisServerVersion(int major,
                             int minor,
                             int build)
```

Constructor.

**Parameters:**
- `major` - the major version
- `minor` - the minor version
- `build` - the build number

## Method Detail

### getMajor

```java
public int getMajor()
```

Get the major version.

### getMinor

```java
public int getMinor()
```

Get the minor version.

### getBuild

```java
public int getBuild()
```

Get the build.

### hashCode

```java
public int hashCode()
```

**Overrides:**
- `hashCode` in class `java.lang.Object`

### equals

```java
public boolean equals(java.lang.Object obj)
```

**Overrides:**
- `equals` in class `java.lang.Object`

### compareTo

```java
public int compareTo(AnalysisServerVersion o)
```

**Specified by:**
- `compareTo` in interface `java.lang.Comparable<AnalysisServerVersion>`

### toString

```java
public java.lang.String toString()
```

**Overrides:**
- `toString` in class `java.lang.Object`