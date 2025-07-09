# Class: PHXRuntime

**Package:** `com.phoenix_int.aserver.util`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.util.PHXRuntime
```
--- 
**Declaration**

```
public class PHXRuntime
extends java.lang.Object
```

This is a utility class for running processes. The class wraps the user's desired process in a script that first switches to the desired directory.

## Field Summary

| Modifier and Type | Field and Description |
|-------------------|----------------------|
| static java.lang.String | DEFAULT_SHELL |

## Constructor Summary

| Constructor and Description |
|----------------------------|
| PHXRuntime() |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `java.lang.Process` | `exec(java.lang.String cmd, java.lang.String baseDir)`<br> runs the specified command. |
| `PHXProcess` | `exec2(java.lang.String cmd, java.lang.String baseDir, boolean addErrorChecks)`<br> runs the specified command. |
| `com.phoenix_int.aserver.util.IPHXProcessJobInfoListener` | `getJobListener()` |
| `java.lang.String` | `getShell()` <br> returns the shell used to run programs |
| `static void` | main(java.lang.String[] args) |
| `PHXRuntime` | `setJobListener(com.phoenix_int.aserver.util.IPHXProcessJobInfoListener jobListener)` |
| `void` | `setShell(java.lang.String shell)` <br> sets the shell to use when running commands (applies to UNIX only) |

## Field Detail

### DEFAULT_SHELL

```
public static final java.lang.String DEFAULT_SHELL
```

**See Also:**

[Constant Field Values](../../../../constant-values.md)

## Constructor Detail

### PHXRuntime

```
public PHXRuntime()
```

## Method Detail 

### setShell

```
public void setShell(java.lang.String shell)
```

Sets the shell to use when running commands (applies to UNIX only)

**Parameters:**

- `shell` - the shell to use. E.g. "csh". If null is specified, then the command is issued directly without a shell

### getShell

```
public java.lang.String getShell()
```

Returns the shell used to run programs

### setJobListener

```
public PHXRuntime setJobListener(com.phoenix_int.aserver.util.IPHXProcessJobInfoListener jobListener)
```

### getJobListener

```
public com.phoenix_int.aserver.util.IPHXProcessJobInfoListener getJobListener()
```

### exec

```
public java.lang.Process exec(java.lang.String cmd,
                              java.lang.String baseDir)
                       throws java.io.IOException
```

Runs the specified command. The function first switches to the proper directory.

**Parameters:**

- `cmd` - the command to run
- `baseDir` - the directory to run it in.

**Throws:**

- `java.io.IOException` - thrown if the command cannot be executed

### exec2

```
public PHXProcess exec2(java.lang.String cmd,
                        java.lang.String baseDir,
                        boolean addErrorChecks)
                 throws java.io.IOException
```

Runs the specified command. The function first switches to the proper directory. The PHXProcess which is returned has the ability to track the process and sub-processes in a somewhat platform independent way.

**Parameters:**

- `cmd` - the command to run
- `baseDir` - the directory to run it in.
- `addErrorChecks` - Whether to insert error checks after each command in multi-line commands.

**Throws:**

- `java.io.IOException` - thrown if the command cannot be executed

### main

```
public static void main(java.lang.String[] args)
```