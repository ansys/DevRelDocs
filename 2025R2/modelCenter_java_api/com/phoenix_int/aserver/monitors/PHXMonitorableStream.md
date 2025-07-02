# Class: PHXMonitorableStream

**Package:** `com.phoenix_int.aserver.monitors`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.monitors.PHXMonitorableStream
```

---

**Declaration**

```java
public class PHXMonitorableStream
extends java.lang.Object
```

This class represents a stream of data which may be monitored by a client which supports progress monitors. To use this class, implement the `IPHXMonitorable` interface and return instances of this class.

```java
 public class monitorableComp implements IPHXAnalysis, IPHXMonitorable
 {
   private PHXMonitorableStream mon1 = new PHXMonitorableStream();
   private PHXMonitorableStream mon2 = new PHXMonitorableStream();
   ...
   public execute() throws Exception
   {
     //Do Stuff
     mon1.clear();
     mon2.clear();
     mon1.append("Starting");
     Writer w = mon2.getWriter();
     w.write("Beginning first phase");
     ...
   }
   public PHXProcessInfo[] listProcesses() throws IOException
   {
     throws IOException("Not supported");
   }
   public String[] listMonitorableFiles() throws IOException;
   {
     String[] mons = new String[2];
     mons[0] = "monitor1";
     mons[1] = "monitor2";
     return mons;
   }
   public Object getMonitor(String m)
      throws PHXNoSuchObjectException;
   {
      if ( "monitor1".equals(m) )
         return mon1;
      if ( "monitor2".equals(m) )
         return mon2;
      throw new PHXNoSuchObjectException(m);
   }
 }
```

## Nested Class Summary

### Nested classes

| Modifier and Type | Class and Description |
| --- | --- |
| `class` | [PHXMonitorableStream.MonitorWriter](PHXMonitorableStream.MonitorWriter.md) |

## Constructor Summary

| Constructor and Description |
| --- |
| `PHXMonitorableStream()`<br>Default Constructor |

## Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `addMonitorListener(IPHXFileCallback cb)`<br>Adds a listener which gets events based on changes to this monitor |
| `void` | `append(java.lang.String text)`<br>Appends a string to this monitor |
| `void` | `clear()`<br>Clears the contents of this monitor |
| `java.lang.String` | `getString()`<br>Gets the current contents of the stream |
| `java.io.Writer` | `getWriter()`<br>Gets a java.io.Writer which when written to appends onto this monitor |
| `void` | `removeMonitorListener(IPHXFileCallback cb)`<br>Removes a listener from this monitor |

### Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

## Constructor Detail

### PHXMonitorableStream

```java
public PHXMonitorableStream()
```
Default Constructor

## Method Detail

### addMonitorListener

```java
public void addMonitorListener(IPHXFileCallback cb)
```
Adds a listener which gets events based on changes to this monitor

### removeMonitorListener

```java
public void removeMonitorListener(IPHXFileCallback cb)
```
Removes a listener from this monitor

### getWriter

```java
public java.io.Writer getWriter()
```
Gets a java.io.Writer which when written to appends onto this monitor

### clear

```java
public void clear()
```
Clears the contents of this monitor

### getString

```java
public java.lang.String getString()
```
Gets the current contents of the stream

### append

```java
public void append(java.lang.String text)
```
Appends a string to this monitor