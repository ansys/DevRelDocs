# Class: PHXProcessInfo

**Package:** `com.phoenix_int.aserver.util`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.util.PHXProcessInfo
```
---
**Declaration**

```java
public class PHXProcessInfo
extends java.lang.Object
```

This class represents information about a running process on the system. It includes static members for listing all processes. This is done in a semi-platform independent way by using an external program which is platform dependent (although fairly consistent on UNIX systems, ps). See [`PHXRuntime`](PHXRuntime.md) and [`PHXProcess`](PHXProcess.md) for other convenient ways to use this information. Note that not all platforms will have all information available.

## Constructor Summary

| Modifier    | Constructor and Description |
|-------------|----------------------------|
| `protected` | `PHXProcessInfo()`<br>Constructs an empty process |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `java.lang.String` | `getCommand()`<br>Returns the command name of this process |
| `long` | `getElapsedTime()`<br>Returns the wall clock time for this process, if available |
| `long` | `getMemUsage()`<br>Gets the memory usage of this process, if available |
| `int` | `getParentProcessID()`<br>Gets the parent process ID of this process |
| `float` | `getPercentCPU()`<br>Gets the percentage of the CPU usage, if available |
| `static PHXProcessInfo[]` | `getProcesses()`<br>Lists all processes on the system |
| `static PHXProcessInfo[]` | `getProcesses(int parent)`<br>Lists the specified process' children. |
| `int` | `getProcessID()`<br>Gets the platform dependent process ID number |
| `long` | `getTime()`<br>Returns the amount of CPU time this process has used, if available. |
| `static void` | `main(java.lang.String[] args)` |
| `java.lang.String` | `toString()`<br>Converts this process info into a one-line readable string |
| `java.lang.String` | `toXML()`<br>Converts this process information into a usable XML description |

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXProcessInfo

```java
protected PHXProcessInfo()
```

Constructs an empty process

## Method Detail

### getProcesses

```java
public static PHXProcessInfo[] getProcesses(int parent) 
                                     throws java.io.IOException
```

Lists the specified process' children.

**Throws:**
- `java.io.IOException`

### getProcesses

```java
public static PHXProcessInfo[] getProcesses() 
                                     throws java.io.IOException
```

Lists all processes on the system

**Throws:**
- `java.io.IOException`

### getCommand

```java
public java.lang.String getCommand()
```

Returns the command name of this process

### getProcessID

```java
public int getProcessID()
```

Gets the platform dependent process ID number

### getParentProcessID

```java
public int getParentProcessID()
```

Gets the parent process ID of this process

### getPercentCPU

```java
public float getPercentCPU()
```

Gets the percentage of the CPU usage, if available

### getMemUsage

```java
public long getMemUsage()
```

Gets the memory usage of this process, if available

### getTime

```java
public long getTime()
```

Returns the amount of CPU time this process has used, if available.

### getElapsedTime

```java
public long getElapsedTime()
```

Returns the wall clock time for this process, if available

### toXML

```java
public java.lang.String toXML()
```

Converts this process information into a usable XML description

### toString

```java
public java.lang.String toString()
```

Converts this process info into a one-line readable string

**Overrides:**
- `toString` in class `java.lang.Object`

### main

```java
public static void main(java.lang.String[] args) 
                 throws java.io.IOException
```

**Throws:**
- `java.io.IOException`