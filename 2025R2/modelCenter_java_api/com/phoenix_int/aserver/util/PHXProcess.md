# Class: PHXProcess

**Package:** `com.phoenix_int.aserver.util`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ java.lang.Process
    ↳ com.phoenix_int.aserver.util.PHXProcess
```

**Implemented Interfaces**

- `com.phoenix_int.aserver.util.IPHXStreamRegExListener`

--- 

**Declaration**

```java
public class PHXProcess
extends java.lang.Process
implements com.phoenix_int.aserver.util.IPHXStreamRegExListener
```

This is a utility class that extends `java.lang.Process` with a system dependent process ID. This is combined with the phxspawn and phxps utilities to provide information on sub-processes in a semi-platform independent way.

## Constructor Summary

| Constructor and Description |
|----------------------------|
| `PHXProcess(java.lang.Process p)`<br>Constructs a PHXProcess out of a regular process but does not provide extended functionality because the process ID will not be known. |
| `PHXProcess(java.lang.Process p, boolean readPID, java.lang.String jobIdRegex, java.lang.String jobNodeRegex, com.phoenix_int.aserver.util.IPHXProcessJobInfoListener listener)` |
| `PHXProcess(java.lang.Process p, boolean readPID, java.lang.String jobIdRegex, java.lang.String jobNodeRegex, com.phoenix_int.aserver.util.IPHXProcessJobInfoListener listener, java.lang.String fname)`<br>Constructs a PHXProcess out of a process and optionally reads the PID of the sub-process. |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `destroy()` |
| `int` | `exitValue()` |
| `java.io.InputStream` | `getErrorStream()` |
| `java.io.InputStream` | `getInputStream()` |
| `java.lang.String` | `getJobID()` |
| `java.lang.String` | `getJobNode()` |
| `java.io.OutputStream` | `getOutputStream()` |
| `java.lang.Process` | `getProcess()`<br>Returns the java Process instance for this PHXProcess |
| `int` | `getProcessID()`<br>Returns the platform dependent process ID associated with this process. |
| `java.lang.String` | `getTempScriptFileName()` |
| `PHXProcessInfo[]` | `listProcesses()`<br>This function lists all the processes and sub-processes of this PHXProcess. |
| `boolean` | `matchFound(int patNum, Pattern pat, java.lang.String line, MatchResult match)`<br>Signals that a match was found. |
| `int` | `waitFor()` |
| `com.phoenix_int.aserver.util.PHXStreamRegExMonitor` | `wrapErrorStream(com.phoenix_int.aserver.util.IPHXStreamRegExListener l)` |
| `com.phoenix_int.aserver.util.PHXStreamRegExMonitor` | `wrapInputStream(com.phoenix_int.aserver.util.IPHXStreamRegExListener l)` |

### Methods inherited from class java.lang.Process
`destroyForcibly`, `isAlive`, `waitFor`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, toString, wait, `wait`, `wait`

## Constructor Detail

### PHXProcess

```java
public PHXProcess(java.lang.Process p, 
                  boolean readPID, 
                  java.lang.String jobIdRegex, 
                  java.lang.String jobNodeRegex, 
                  com.phoenix_int.aserver.util.IPHXProcessJobInfoListener listener, 
                  java.lang.String fname)
```
Constructs a `PHXProcess` out of a process and optionally reads the PID of the sub-process. Typically you do not create instances of this class yourself, but use `PHXRuntime.exec2()` to generate instances.

**Parameters:**
- `readPID` - If true, the PID of this process will be read off of the process's standard output. The pid should be a number and should be on the very first line of output all by itself.

### PHXProcess

```java
public PHXProcess(java.lang.Process p, 
                  boolean readPID, 
                  java.lang.String jobIdRegex, 
                  java.lang.String jobNodeRegex, 
                  com.phoenix_int.aserver.util.IPHXProcessJobInfoListener listener)
```

### PHXProcess

```java
public PHXProcess(java.lang.Process p)
```
Constructs a PHXProcess out of a regular process but does not provide extended functionality because the process ID will not be known. Use PHXRuntime to execute processes and automatically generate correct `PHXProcess` instances.

## Method Detail 

### matchFound

```java
public boolean matchFound(int patNum, 
                          Pattern pat, 
                          java.lang.String line, 
                          MatchResult match)
```
Description copied from interface: `com.phoenix_int.aserver.util.IPHXStreamRegExListener`.

 Signals that a match was found.

**Specified by:**
- `matchFound` in interface `com.phoenix_int.aserver.util.IPHXStreamRegExListener`

**Parameters:**
- `patNum` - The index of the pattern that matched
- `pat` - The matching pattern
- `line` - The matching line
- `match` - The MatchResult object which describes the match

**Returns:**
- `true` to continue searching for this pattern, `false` to remove the pattern from the pattern list.

### getJobID

```java
public java.lang.String getJobID()
```

### getJobNode

```java
public java.lang.String getJobNode()
```

### getProcess

```java
public java.lang.Process getProcess()
```
Returns the java Process instance for this PHXProcess

### getProcessID

```java
public int getProcessID() throws java.io.IOException
```
Returns the platform dependent process ID associated with this process. If there was any error reading the process ID, or there is no process ID, an exception explaining the problem will be thrown (every time you call this function).

**Throws:**
- `java.io.IOException`

### listProcesses

```java
public PHXProcessInfo[] listProcesses() throws java.io.IOException
```
This function lists all the processes and sub-processes of this PHXProcess. This is a suitable list to return from `IPHXMonitorable.listProcesses()`.

**Throws:**
- `java.io.IOException`

### destroy

```java
public void destroy()
```

**Specified by:**
- `destroy` in class `java.lang.Process`

### exitValue

```java
public int exitValue()
```

**Specified by:**
- `exitValue` in class `java.lang.Process`

### waitFor

```java
public int waitFor() throws java.lang.InterruptedException
```

**Specified by:**
- `waitFor` in class `java.lang.Process`

**Throws:**
- `java.lang.InterruptedException`

### wrapInputStream

```java
public com.phoenix_int.aserver.util.PHXStreamRegExMonitor wrapInputStream(com.phoenix_int.aserver.util.IPHXStreamRegExListener l)
```

### wrapErrorStream

```java
public com.phoenix_int.aserver.util.PHXStreamRegExMonitor wrapErrorStream(com.phoenix_int.aserver.util.IPHXStreamRegExListener l)
```

### getInputStream

```java
public java.io.InputStream getInputStream()
```

**Specified by:**
- `getInputStream` in class `java.lang.Process`

### getErrorStream

```java
public java.io.InputStream getErrorStream()
```

**Specified by:**
- `getErrorStream` in class `java.lang.Process`

### getOutputStream

```java
public java.io.OutputStream getOutputStream()
```

**Specified by:**
- `getOutputStream` in class `java.lang.Process`

### getTempScriptFileName

```java
public java.lang.String getTempScriptFileName()
```