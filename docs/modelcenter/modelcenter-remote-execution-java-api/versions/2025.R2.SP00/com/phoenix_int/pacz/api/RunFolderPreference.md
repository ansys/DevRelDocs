# Enum: RunFolderPreference

**Package:** `com.phoenix_int.pacz.api`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ java.lang.Enum<RunFolderPreference>
    ↳ com.phoenix_int.pacz.api.RunFolderPreference
```

**Implemented Interfaces**
- `java.io.Serializable`, `java.lang.Comparable<RunFolderPreference>`

---

**Deprecated.**

See [`com.phoenix_int.pacz.api.v2.RunFolderPreferece`](v2/RunFolderPreference.md)

```java
@Deprecated
public enum RunFolderPreference
extends java.lang.Enum<RunFolderPreference>
```

Preference for how files within the .pacz should be handled when running a component.

## Enum Constant Summary

| Enum Constant and Description |
|------------------------------|
| `PER_PROCESS`<br>**Deprecated.**<br>New run directory should be created for each process of a component. |
| `PER_RUN`<br>**Deprecated.**

New run directory should be created for each run of a component. |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `java.lang.String` | `toString()`<br>**Deprecated.**<br>Get value of enumeration |
| `static RunFolderPreference` | `valueOf(java.lang.String name)`<br>**Deprecated.**<br>Returns the enum constant of this type with the specified name. |
| `static RunFolderPreference[]` | `values()`<br>**Deprecated.**<br>Returns an array containing the constants of this enum type, in the order they are declared. |

### Methods inherited from class `java.lang.Enum`
`clone`, `compareTo`, `equals`, `finalize`, `getDeclaringClass`, `hashCode`, `name`, `ordinal`, `valueOf`

### Methods inherited from class `java.lang.Object`
`getClass`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

## Enum Constant Detail

### PER_RUN

```java
public static final RunFolderPreference PER_RUN
```

**Deprecated.**

New run directory should be created for each run of a component. If one process is used to execute multiple runs of a component, each run will have a separate directory to keep its files. This preference should be used when needing result capture, or if a component modifies files during its execution (including log files).

### PER_PROCESS

```java
public static final RunFolderPreference PER_PROCESS
```

**Deprecated.**

New run directory should be created for each process of a component. If one process is used to execute multiple runs of a component, only one directory will be created for all runs to use. This preference should be used when result capture is not needed, or if a component does not modify files during its execution (including log files). This mode should be chosen if unsure which mode a component should use.

## Method Detail

### values

```java
public static RunFolderPreference[] values()
```

**Deprecated.**

Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows:

```java
for (RunFolderPreference c : RunFolderPreference.values())
    System.out.println(c);
```

**Returns:**
- an array containing the constants of this enum type, in the order they are declared

### valueOf

```java
public static RunFolderPreference valueOf(java.lang.String name)
```

**Deprecated.**

Returns the enum constant of this type with the specified name. The string must match *exactly* an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)

**Parameters:**
- `name` - the name of the enum constant to be returned.

**Returns:**
- the enum constant with the specified name

**Throws:**
- `java.lang.IllegalArgumentException` - if this enum type has no constant with the specified name
- `java.lang.NullPointerException` - if the argument is null

### toString

```java
public java.lang.String toString()
```

**Deprecated.**

Get value of enumeration

**Overrides:**
- `toString` in class `java.lang.Enum<RunFolderPreference>`

**Returns:**
- enumeration value