# Class: Environment

**Package:** `com.phoenix_int.pacz.api`

**Class Hierarchy**

```java
↳ java.lang.Object
  ↳ java.util.AbstractMap<K,V>
    ↳ java.util.HashMap<java.lang.String,java.lang.String>
      ↳ com.phoenix_int.pacz.api.Environment
```

**Implemented Interfaces**

- `java.io.Serializable`, `java.lang.Cloneable`, `java.util.Map<java.lang.String,java.lang.String>`

---
**Deprecated:** see [`com.phoenix_int.pacz.api.v2.Environment`](v2/Environment.md)

```java
@Deprecated
public class Environment
extends java.util.HashMap<java.lang.String,java.lang.String>
```

Environment variables for component configuration

## Nested Class Summary

### Nested classes/interfaces inherited from class java.util.AbstractMap
```java.util.AbstractMap.SimpleEntry<K,V>`, `java.util.AbstractMap.SimpleImmutableEntry<K,V>`

### Nested classes/interfaces inherited from interface java.util.Map
```java.util.Map.Entry<K,V>`

## Field Summary

| Modifier and Type | Field and Description |
|-------------------|----------------------|
| `static java.lang.String` | `COMPONENT_DIR`<br>**Deprecated.** Pre-defined component directory environment variable |

## Constructor Summary

| Constructor and Description |
|----------------------------|
| `Environment()`<br>**Deprecated.** Constructor |
| `Environment(java.util.Map<java.lang.String,java.lang.String> dictionary)`<br>**Deprecated.** Copy constructor |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `java.lang.String` | `evaluateKey(java.lang.String key)`<br>**Deprecated.** Get the value for the specified environment variable |
| `java.lang.String` | `evaluateString(java.lang.String str)`<br>**Deprecated.** Substitute environment variables in specified string with corresponding environment values |

### Methods inherited from class java.util.HashMap
`clear`, `clone`, `compute`, `computeIfAbsent`, `computeIfPresent`, `containsKey`, `containsValue`, `entrySet`, `forEach`, `get`, `getOrDefault`, `isEmpty`, `keySet`, `merge`, `put`, `putAll`, `putIfAbsent`, `remove`, `remove`, `replace`, `replace`, `replaceAll`, `size`, `values`

### Methods inherited from class java.util.AbstractMap
`equals`, `hashCode`, `toString`

### Methods inherited from class java.lang.Object
`finalize`, `getClass`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

### Methods inherited from interface java.util.Map
`equals`, `hashCode`

## Field Detail

### COMPONENT_DIR

```java
public static final java.lang.String COMPONENT_DIR
```

**Deprecated.** Pre-defined component directory environment variable

**See Also:**
- [Constant Field Values](./../../../../constant-values.md)

## Constructor Detail

### Environment

```java
public Environment()
```

**Deprecated.** Constructor

### Environment

```java
public Environment(java.util.Map<java.lang.String,java.lang.String> dictionary)
```

**Deprecated.** Copy constructor

**Parameters:**
- `dictionary` - dictionary to copy; if null, an empty map will be used

## Method Detail

### evaluateString

```java
public java.lang.String evaluateString(java.lang.String str)
```

**Deprecated.** Substitute environment variables in specified string with corresponding environment values

**Parameters:**
- `str` - string on which to perform substitutions

**Returns:**
- string with substituted environment values

### evaluateKey

```java
public java.lang.String evaluateKey(java.lang.String key)
```

**Deprecated.** Get the value for the specified environment variable

**Parameters:**
- `key` - environment variable for which to get value

**Returns:**
- value of environment variable; null if not found