# PHXRunShareObject

## @PHXClassDecorator(PHXTException_Decorator)

### class PHXRunShareContext:
This class handles runshare capabilities for any component which needs it. It can create temp directorys, deal w/ auto-copy and auto-delete of important files, return errors and block until it is safe to run. It also handles providing monitors for stdout and stderr as well as for monitoring started processes.

This class can only handle one single process running at a time. If you need to run multiple processes, use multiple instances of this class. You can use this same object over and over by calling `lock()` and `unlock()` multiple times.
   
```python
   DEL_AUTO = 14
   DEL_FALSE = 15
   DEL_TRUE = 16
   MODE_NONE = 0
   MODE_ERROR = 1
   MODE_WAIT = 2
   MODE_SHARE = 3
```

#### `def __init__(self)`

- `@rtype`: void

```python
  self.data = 0
```

#### `def cleanTempDir(self)`

cleans up the temporary run directory if one has been created.

- `@rtype`: void

```python
  phxPython.runShareCleanTempDir()
```

#### `def getBaseDirectory(self)`

Gets the base dir which was passed in to the constructor.

- `@rtype`: string

```python
  return phxPython.runShareGetBaseDirectory()
```

#### `def getDirectory(self)`

Returns the current directory being used by the runshare system.

This may be the base directory, or it may be a temp directory created underneath there to implement run sharing.

- `@rtype`: string

```python
  return phxPython.runShareGetDirectory()
```

#### `def halt(self)`

halts any running process

- `@rtype`: void

```python
  phxPython.runShareHalt()
```

#### `def lock(self)`

Causes the run-share mode to be implemented. This creates sub-dirs, waits, or errors as appropriate.

Once in "locked" mode, calling `lock()` again has no effect.

- `@rtype`: void

```python
  phxPython.runShareLock()
```

#### `def run(self, cmd, ignoreErrors=False, autoChangeDir=True, shell='sh')`

Runs a command. Command may be relative to the run directory, see `getDirectory()`.

This function will not return until the sub-process has finished. It will collect `stdout` and `stderr` and provide progress monitors.

- `@param cmd`: The command to run.
- `@type cmd`: string
- `@param ignoreErrors`: By default this code will throw an exception if the spawned process returns a non-zero `errorlevel`. Occasionally a program will return an `errorlevel` even if it succeeds. This option allows you to igore the `errorlevel`.
- `@type ignoreErrors`: boolean
- `@param autoChangeDir`: Whether to change the current working directory to the run directory (see `getDirectory`) before running the code. "True" by default.
- `@type autoChangeDir`: boolean
- `@param shell`: On UNIX you can specify which shell to use to launch the program. By default "sh" is used.
- `@type shell`: string
- `@rtype`: void

```python
  cmd = checkIsInstance(cmd, str)
  ignoreErrors = checkIsInstance(ignoreErrors, bool)
  autoChangeDir = checkIsInstance(autoChangeDir, bool)
  shell = checkIsInstance(shell, str)

  phxPython.runShareRun(cmd, ignoreErrors, autoChangeDir, shell)
```

#### `def setAutoDelete(self, flag)`

Sets the auto-delete mode for runshare mode `MODE_SHARE`. If `DEL_TRUE`, the created sub-dir is always deleted. If `DEL_FALSE`, it is never deleted. If `DEL_AUTO`, it is only deleted when no errors occur during the run.

- `@type flag`: int
- `@rtype`: void

```python
  flag = checkIsInstance(flag, int)
  phxPython.runShareSetAutoDelete(flag)
```

#### `def setFilesToCopy(self, files)`

Sets the files which need to be copied when runshare mode is `MODE_SHARE`.

- `@type files`: string
- `@rtype`: void

```python
  files = checkIsInstance(files, str)
  phxPython.runShareSetFilesToCopy(files)
```

#### `def setMode(self, mode)`

Sets the runshare mode.

- `@type mode`: int
- `@rtype`: void

```python
  mode = checkIsInstance(mode, int)
  phxPython.runShareSetMode(mode)
```

#### `def unlock(self)`

Unlocks the runshare mechanisms. This will unblock other components which are waiting for us to finish.

Calling `unlock()` when not in "locked" mode has no effect.

- `@rtype`: void

```python
  phxPython.runShareUnlock()
```
