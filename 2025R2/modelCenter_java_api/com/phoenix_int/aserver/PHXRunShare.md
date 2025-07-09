# Class: PHXRunShare

**Package:** `com.phoenix_int.aserver`

**Class Hierarchy**
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.PHXRunShare
```

**Implemented Interfaces**
- [`IPHXMonitorable`](IPHXMonitorable.md), `com.phoenix_int.aserver.trace.IPHXTraceGenerator`

**Declaration**
```
public class PHXRunShare 
extends java.lang.Object 
implements IPHXMonitorable, com.phoenix_int.aserver.trace.IPHXTraceGenerator
```

This class handles runshare capabilities for any component which needs it. It can create temp directories, deal w/ auto-copy and auto-delete of important files, return errors and block until it is safe to run. It also handles providing monitors for stdout and stderr as well as for monitoring started processes.

This class can only handle one single process running at a time. If you need to run multiple processes, use multiple instances of this class. You can use this same object over and over by calling `lock()` and `unlock()` multiple times.

## Nested Class Summary

| Modifier and Type | Class and Description |
|------------------|----------------------|
| class            | [`PHXRunShare.RunInfo`](PHXRunShare.RunInfo.md)<br>Data structure used to hold info about a currently running command |

## Field Summary

| Modifier and Type | Field and Description |
|-------------------|----------------------|
| `static int` | `DEL_AUTO`<br>delete the directory only if an error did not occur while running the wrapper. |
| `static int` | `DEL_FALSE`<br>do not delete the directory. |
| `static int` | `DEL_TRUE`<br>delete the directory. |
| `static int` | `MODE_ERROR`<br>When a user tries to run a component that is already running, this option generates an error message and instructs the user to try again later. |
| `static int` | `MODE_NONE`<br>This option performs no run sharing. |
| `static int` | `MODE_SHARE`<br>When two or more users attempt to run a component simultaneously, the FileWrapper creates separate directories that hold unique input and output files for every user. |
| `static int` | `MODE_WAIT`<br>When the component is running, this option ensures that no one else will be able to run it. |

## Constructor Summary

| Constructor and Description |
|---------------------|
| `PHXRunShare(java.lang.String baseDir, java.lang.String wrapperID)`  |  

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `addFileToCopy(java.lang.String file)` |
| `void` | `addRunDirChangedListener(com.phoenix_int.aserver.IPHXRunDirChangedListener rdl)`<br>Adds a listener which will receive events when the run directory is changed. |
| `void` | `addTraceListener(com.phoenix_int.aserver.trace.IPHXTraceListener listener)`<br>Adds a listener to trace events |
| `void` | `cleanTempDir()`<br>cleans up the temporary run directory if one has been created. |
| `void` | `finalize()` |
| `boolean` | `getAutoChangeDir()`<br>Gets the `AutoChangeDir` flag |
| `int` | `getAutoDelete()`<br>Gets the auto-delete mode |
| `java.lang.String` | `getBaseDirectory()`<br>Gets the base dir which was passed in to the constructor. |
| `java.util.Map` | `getDictionary()` |
| `java.lang.String` | `getDirectory()`<br>Returns the current directory being used by the runshare system. |
| `boolean` | `getIgnoreErrors()`<br>Gets the `IgnoreErrors` flag |
| `int` | `getMode()`<br>Gets the runshare mode |
| `java.lang.Object` | `getMonitor(java.lang.String m)`<br>Returns any available monitors by name. |
| `java.lang.String` | `getShell()`<br>Gets the shell used to execute commands. |
| `java.lang.String` | `getWrapperID()`<br>Returns the wrapper ID being used for locking. |
| `void` | `halt()`<br>halts any running process |
| `java.lang.String[]` | `listMonitorableFiles()`<br>Lists available "monitors". |
| `PHXProcessInfo[]` | `listProcesses()`<br>Lists any running processes |
| `void` | `lock()`<br>Causes the run-share mode to be implemented. |
| `void` | `removeRunDirChangedListener(com.phoenix_int.aserver.IPHXRunDirChangedListener rdl)`<br>Removes a listener for run directory changed events. |
| `void` | `removeTraceListener(com.phoenix_int.aserver.trace.IPHXTraceListener listener)`<br>Removes a listener from trace events |
| `void` | `reset()`<br>Reset the `ProcessStruct` back to initial state for possible use in another run request. |
| `void` | `run(java.lang.String cmd)`<br>Runs a command. |
| `void` | `run(java.lang.String cmd, boolean ignoreErrors, boolean autoChangeDir, java.lang.String shell)`<br>Runs a command. |
| `void` | `run(java.lang.String cmd, boolean ignoreErrors, java.lang.String autoChangeDir, java.lang.String shell)`<br>Runs a command. |
| `int` | `run2(java.lang.String cmd, boolean ignoreErrors, java.lang.String autoChangeDir, java.lang.String shell)`<br>Runs a command. |
| `void` | `setAutoChangeDir(boolean flag)`<br>Sets the `AutoChangeDir` flag. |
| `void` | `setAutoDelete(int autoDelete)`<br>Sets the auto-delete mode for runshare mode MODE_SHARE. |
| `PHXRunShare` | `setDictionary(java.util.Map dict)` |
| `void` | `setDirectTransfer(boolean flag)`<br>Set whether or not this runShare is involved in direct transfer of files |
| `void` | `setFilesToCopy(java.lang.String files)`<br>Sets the files which need to be copied when runshare mode is MODE_SHARE. |
| `void` | `setIgnoreErrors(boolean flag)`<br>Sets the `IgnoreErrors` flag. |
| `void` | `setMode(int mode)`<br>Sets the runshare mode. |
| `void` | `setRunDirectory(java.lang.String runDirectory)` |
| `void` | `setRunReplacer(com.phoenix_int.aserver.util.PHXRunReplacer replacer)`<br>Sets the run replacer object which is used to transform $VAR type specifications before running commands |
| `void` | `setShell(java.lang.String shell)`<br>Sets the shell used to execute commands. |
| `void` | `timeout()`<br>Cleans up a run that has timed out |
| `void` | `unlock()`<br>Unlocks the runshare mechanisms. |

### Methods inherited from class java.lang.Object
`clone`, `equals`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Field Detail

### MODE_NONE
```
public static final int MODE_NONE
```
This option performs no run sharing. This means that when two users attempt to run the same component simultaneously, ModelCenter Remote Execution will take no action to ensure that input and output files are not overwritten.

**See Also:**

[`Constant Field Values`](../../../constant-values.md)

### MODE_ERROR
```
public static final int MODE_ERROR
```
When a user tries to run a component that is already running, this option generates an error message and instructs the user to try again later.

**See Also:**

[`Constant Field Values`](../../../constant-values.md#com.phoenix_int.aserver.PHXRunShare.MODE_ERROR)

### MODE_WAIT
```
public static final int MODE_WAIT
```
When the component is running, this option ensures that no one else will be able to run it. A second user will not be able to read or write files until the first user is done with them. When the first user's object has retrieved all of the output information it needs from the component's files, the second user's object can now run; it overwrites the current input and output files in doing so. This is the default run sharing mechanism of FileWrapper components.

**See Also:**

[`Constant Field Values`](../../../constant-values.md#com.phoenix_int.aserver.PHXRunShare.MODE_WAIT)

### MODE_SHARE
```
public static final int MODE_SHARE
```
When two or more users attempt to run a component simultaneously, the FileWrapper creates separate directories that hold unique input and output files for every user. Thus, all users can run the component simultaneously without file conflicts.

**See Also:**

[`Constant Field Values`](../../../constant-values.md#com.phoenix_int.aserver.PHXRunShare.MODE_SHARE)

### DEL_AUTO
```
public static final int DEL_AUTO
```
delete the directory only if an error did not occur while running the wrapper. If an error did occur, then the directory is preserved and a file named exception.log is created in the directory to record the error. If no error occurs, the directory is deleted when the component is ended or when it's run again. This the default setting.

**See Also:**

[`Constant Field Values`](../../../constant-values.md#com.phoenix_int.aserver.PHXRunShare.DEL_AUTO)

### DEL_FALSE
```
public static final int DEL_FALSE
```
do not delete the directory.

**See Also:**

[`Constant Field Values`](../../../constant-values.md#com.phoenix_int.aserver.PHXRunShare.DEL_FALSE)

### DEL_TRUE
```
public static final int DEL_TRUE
```
delete the directory.

**See Also:**

[`Constant Field Values`](../../../constant-values.md#com.phoenix_int.aserver.PHXRunShare.DEL_TRUE)

## Constructor Detail

### PHXRunShare
```
public PHXRunShare(java.lang.String baseDir,
                   java.lang.String wrapperID)
```
**Parameters:**
- `baseDir` - The directory on disk where the files associated w/ this component are located.
- `wrapperID` - A unique ID which identifies this component. This is used to synchronize runshare access across multiple instances of the same component. Typically the full path on disk to the component's main file is used for this ID.

## Method Detail

### finalize
```
public void finalize()
```
**Overrides::**
- `finalize` in class `java.lang.Object`

### getWrapperID
```
public java.lang.String getWrapperID()
```
Returns the wrapper ID being used for locking. This ID should be the full path to the main file on disk for the associated wrapper.

### setDictionary
```
public PHXRunShare setDictionary(java.util.Map dict)
```

### getDictionary
```
public java.util.Map getDictionary()
```

### setRunReplacer
```
public void setRunReplacer(com.phoenix_int.aserver.util.PHXRunReplacer replacer)
```
Sets the run replacer object which is used to transform $VAR type specifications before running commands

### addRunDirChangedListener
```
public void addRunDirChangedListener(com.phoenix_int.aserver.IPHXRunDirChangedListener rdl)
```
Adds a listener which will receive events when the run directory is changed.

### removeRunDirChangedListener
```
public void removeRunDirChangedListener(com.phoenix_int.aserver.IPHXRunDirChangedListener rdl)
```
Removes a listener for run directory changed events.

### getBaseDirectory
```
public java.lang.String getBaseDirectory()
```
Gets the base dir which was passed in to the constructor.

### getDirectory
```
public java.lang.String getDirectory()
```
Returns the current directory being used by the runshare system. This may be the base directory, or it may be a temp directory created underneath there to implement run sharing.

### lock
```
public void lock()
    throws java.io.IOException
```
Causes the run-share mode to be implemented. This creates sub-dirs, waits or errors as appropriate.

Once in "locked" mode, calling `lock()` again has no effect.

**Throws:**
- `java.io.IOException`

### unlock
```
public void unlock()
```
Unlocks the runshare mechanisms. This will unblock other components which are waiting for us to finish.

Calling `unlock()` when not in "locked" mode has no effect.

### setDirectTransfer
```
public void setDirectTransfer(boolean flag)
```
Set whether or not this runShare is involved in direct transfer of files

**Parameters:**
- `flag` - boolean flag

### cleanTempDir
```
public void cleanTempDir()
    throws java.io.IOException
```
cleans up the temporary run directory if one has been created. In general, wrappers and end users should **not** use this function unless you have manually created your own runshare object. Doing so will prevent proper delayed transfer of direct file transfer (DFT) files.

**Throws:**
- `java.io.IOException`

### setRunDirectory
```
public void setRunDirectory(java.lang.String runDirectory)
                     throws com.phoenix_int.aserver.PHXCannotSetRunDirectoryException
```
**Throws:**
- `com.phoenix_int.aserver.PHXCannotSetRunDirectoryException`

### setMode
```
public void setMode(int mode)
```
Sets the runshare mode.

### getMode
```
public int getMode()
```
Gets the runshare mode

### addFileToCopy
```
public void addFileToCopy(java.lang.String file)
```

### setFilesToCopy
```
public void setFilesToCopy(java.lang.String files)
```
Sets the files which need to be copied when runshare mode is MODE_SHARE.

### setAutoDelete
```
public void setAutoDelete(int autoDelete)
```
Sets the auto-delete mode for runshare mode MODE_SHARE. If DEL_TRUE, the created sub-dir is always deleted. If DEL_FALSE, it is never deleted. If DEL_AUTO, it is only deleted when no errors occur during the run. Deletion occurs when the component is ended or when the component is run again.

### getAutoDelete
```
public int getAutoDelete()
```
Gets the auto-delete mode

### setIgnoreErrors
```
public void setIgnoreErrors(boolean flag)
```
Sets the `IgnoreErrors` flag. By default this code will throw an exception if the spawned process returns a non-zero errorlevel. Occasionally a program will return an errorlevel even if it succeeds. This option allows you to igore the errorlevel.

**Parameters:**
- `flag` - true to ignore errors

### getIgnoreErrors
```
public boolean getIgnoreErrors()
```
Gets the `IgnoreErrors` flag

**Returns:**
- the `IgnoreErrors` flag

### setAutoChangeDir
```
public void setAutoChangeDir(boolean flag)
```
Sets the `AutoChangeDir` flag. This flag indicates whether to change the current working directory to the run directory (see `getDirectory`) before running the code. Changing directories occasionally causes problems with other command line programs. True by default.

**Parameters:**
- `flag` - false to not change folders.

### getAutoChangeDir
```
public boolean getAutoChangeDir()
```
Gets the `AutoChangeDir` flag

**Returns:**
- the `AutoChangeDir` flag

### setShell
```
public void setShell(java.lang.String shell)
```
Sets the shell used to execute commands. This only applies to UNIX hosts. By default "sh" is used.

**Parameters:**
- `shell` - The shell used to invoke the run command

### getShell
```
public java.lang.String getShell()
```
Gets the shell used to execute commands.

**Returns:**
- the command shell

### run
```
public void run(java.lang.String cmd)
         throws java.lang.Exception
```
Runs a command. Command may be relative to the run directory, see getDirectory().

This function will not return until the sub-process has finished. It will collect stdout and stderr and provide progress monitors.

If the command is halted (via [`halt()`](#halt) or [`timeout()`](#timeout)) and `ignoreError` is `false`, this method will throw a [`ProcessHaltedException`](ProcessHaltedException.md).

**Parameters:**
- `cmd` - The command to run.

**Throws:**
- `java.io.IOException` - Either the command cannot be executed, or an I/O error occurred while reading standard error or standard out from the command
- [`ProcessHaltedException`](ProcessHaltedException.md) - The running script was halted via the [`halt()`](#halt) or [`timeout()`](#timeout).
- `java.lang.Exception`

### run
```
public void run(java.lang.String cmd,
                boolean ignoreErrors,
                boolean autoChangeDir,
                java.lang.String shell)
         throws java.lang.Exception
```
Runs a command. Command may be relative to the run directory, see getDirectory().

This function will not return until the sub-process has finished. It will collect stdout and stderr and provide progress monitors.

If the command is halted (via [`halt()`](../../../com/phoenix_int/aserver/PHXRunShare.md#halt--) or [`timeout()`](../../../com/phoenix_int/aserver/PHXRunShare.md#timeout--)) and `ignoreError` is `false`, this method will throw a [`ProcessHaltedException`](../../../com/phoenix_int/aserver/ProcessHaltedException.md "class in com.phoenix_int.aserver").

**Parameters:**
- `cmd` - The command to run.

**Throws:**
- `java.io.IOException` - Either the command cannot be executed, or an I/O error occurred while reading standard error or standard out from the command
- [`ProcessHaltedException`](../../../com/phoenix_int/aserver/ProcessHaltedException.md "class in com.phoenix_int.aserver") - The running script was halted via the [`halt()`](../../../com/phoenix_int/aserver/PHXRunShare.md#halt--) or [`timeout()`](../../../com/phoenix_int/aserver/PHXRunShare.md#timeout--).
- `java.lang.Exception`

### run
```
public void run(java.lang.String cmd,
                boolean ignoreErrors,
                java.lang.String autoChangeDir,
                java.lang.String shell)
         throws java.lang.Exception
```
Runs a command. Command may be relative to the run directory, see `getDirectory()`.

This function will not return until the sub-process has finished. It will collect stdout and stderr and provide progress monitors.

If the command is halted (via `halt()` or `timeout()`) and `ignoreError` is false, this method will throw a `ProcessHaltedException`. If `ignoreError` is true, this method will return one (1).

**Parameters:**
- `cmd` - The command to run.
- `ignoreErrors` - By default this code will throw an exception if the spawned process returns a non-zero errorlevel. Occasionally a program will return an errorlevel even if it succeeds. This option allows you to ignore the errorlevel.
- `autoChangeDir` - If non-empty, the directory will be changed to this before running the program.
- `shell` - On UNIX you can specify which shell to use to launch the program. By default "sh" is used.

**Returns:**
- the cmd exit status (`errorlevel`). Will be 0 unless `ignoreErrors` is true

**Throws:**
- `java.io.IOException` - Either the command cannot be executed, or an I/O error occurred while reading standard error or standard out from the command
- `ProcessHaltedException` - The running script was halted via the `halt()` or `timeout()`.
- `java.lang.Exception`

### halt
```
public void halt()
```
halts any running process

### timeout
```
public void timeout()
```
Cleans up a run that has timed out

### reset
```
public void reset()
```
Reset the `ProcessStruct` back to initial state for possible use in another run request.

### listProcesses
```
public PHXProcessInfo[] listProcesses() throws java.io.IOException
```
Lists any running processes

**Specified by:**
- `listProcesses` in interface `IPHXMonitorable`

**Throws:**
- `java.io.IOException` - If there was a problem reading information about running processes

### listMonitorableFiles
```
public java.lang.String[] listMonitorableFiles() 
                                        throws java.io.IOException
```
Lists available "monitors". This will be "stdout" and "stderr".

**Specified by:**
- `listMonitorableFiles` in interface `IPHXMonitorable`

**Throws:**
- `java.io.IOException`

### getMonitor
```
public java.lang.Object getMonitor(java.lang.String m) 
                            throws PHXNoSuchObjectException
```
Returns any available monitors by name.

**Specified by:**
- `getMonitor` in interface [`IPHXMonitorable`](IPHXMonitorable.md)

**Returns:**
- either a PHXRawFile or a PHXMonitorableStream object

**Throws:**
- [`PHXNoSuchObjectException`](PHXNoSuchObjectException.md)

### addTraceListener
```
public void addTraceListener(com.phoenix_int.aserver.trace.IPHXTraceListener listener)
```
Adds a listener to trace events

**Specified by:**
- `addTraceListener` in interface `com.phoenix_int.aserver.trace.IPHXTraceGenerator`

**Parameters:**
- `listener` - the listener

### removeTraceListener
```
public void removeTraceListener(com.phoenix_int.aserver.trace.IPHXTraceListener listener)
```
Removes a listener from trace events

**Specified by:**
- `removeTraceListener` in interface `com.phoenix_int.aserver.trace.IPHXTraceGenerator`

**Parameters:**
- `listener` - the listener