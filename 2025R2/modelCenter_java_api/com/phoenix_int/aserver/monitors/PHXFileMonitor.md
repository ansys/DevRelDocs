======== START OF CLASS DATA ========
com.phoenix_int.aserver.monitors
## Class PHXFileMonitor
- java.lang.Object
- - com.phoenix_int.aserver.monitors.PHXFileMonitor
- ---

```java
public class PHXFileMonitor
extends java.lang.Object
```
This class monitors a File for data by polling.  It
 reads off the stream in the normal manner until EOF, then
 it enters a polling loop waiting for more data to become
 available.  This is akin to tail -f in UNIX, except that
 it starts at the beginning of the file intead of near
 the end.
This class is not designed to be re-used after ending
 the current monitor.
**Version:**
: 2001 Oct
**Author:**
: Nathan P Sharp
**See Also:**
: [IPHXFileCallback](../../../../com/phoenix_int/aserver/monitors/IPHXFileCallback.html)- ======== NESTED CLASS SUMMARY ========
- ### Nested Class Summary

| Modifier and Type | Class and Description |
| --- | --- |
| Modifier and Type | Class and Description |
| `class` | `PHXFileMonitor.FileMonitorChangeException` |
======== CONSTRUCTOR SUMMARY ========
- ### Constructor Summary

| Constructor and Description |
| --- |
| Constructor and Description |
| `PHXFileMonitor(PHXRawFilemonitor,IPHXFileCallbackcallback)` |
| `PHXFileMonitor(java.lang.String monitor,IPHXFileCallbackcallback)`Create a monitor |
========== METHOD SUMMARY ===========
- ### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| Modifier and Type | Method and Description |
| `void` | `doMonitor()`Begin monitoring. |
| `void` | `endMonitor()`Signals this monitor to stop monitoring and return
 as soon as possible. |
| `long` | `getPollDelay()` |
| `void` | `setPollDelay(long pd)`Poll Delay is how long to sleep in milliseconds between polling the
 file for more data. |
| `void` | `signalFileChange()`Tells the thread to stop monitoring but to send an
 error to the client saying that the file has been
 changed. |
| `void` | `waitForMonitorDeath()` |

- ### Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`- ========= CONSTRUCTOR DETAIL ========
- ### Constructor Detail

- #### PHXFileMonitor

```java
public PHXFileMonitor(java.lang.String monitor,
                      IPHXFileCallback callback)
```
Create a monitor
**Parameters:**
: `monitor`- The filename of the file to monitor
: `callback`- The callback to call as data becomes
   available

- #### PHXFileMonitor

```java
public PHXFileMonitor(PHXRawFile monitor,
                      IPHXFileCallback callback)
```
============ METHOD DETAIL ==========
- ### Method Detail

- #### setPollDelay

```java
public void setPollDelay(long pd)
                  throws java.lang.IllegalArgumentException
```
Poll Delay is how long to sleep in milliseconds between polling the
 file for more data.  1 second by default and cannot be set to under
 0.5 seconds.
**Throws:**
: `java.lang.IllegalArgumentException`

- #### getPollDelay

```java
public long getPollDelay()
```

- #### endMonitor

```java
public void endMonitor()
```
Signals this monitor to stop monitoring and return
 as soon as possible.

- #### waitForMonitorDeath

```java
public void waitForMonitorDeath()
```

- #### signalFileChange

```java
public void signalFileChange()
```
Tells the thread to stop monitoring but to send an
 error to the client saying that the file has been
 changed.
This class WAITS for the monitor to stop monitoring
 on the sub-thread before it returns.

- #### doMonitor

```java
public void doMonitor()
               throws java.io.IOException
```
Begin monitoring.  Does not return until the monitor
 is halted.
**Throws:**
: `java.io.IOException`
========= END OF CLASS DATA =========