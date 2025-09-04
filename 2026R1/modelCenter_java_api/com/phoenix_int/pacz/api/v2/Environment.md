# Class: Environment

**Package:** `com.phoenix_int.pacz.api.v2`

**Class Hierarchy**

```java
↳ java.lang.Object
  ↳ java.util.AbstractMap<K,V>
    ↳ java.util.HashMap<java.lang.String,java.lang.String>
      ↳ com.phoenix_int.pacz.api.v2.Environment
```

**Implemented Interfaces**
- `java.io.Serializable`, `java.lang.Cloneable`, `java.util.Map<java.lang.String,java.lang.String>`

--- 

**Declaration**

```java
public class Environment
extends java.util.HashMap<java.lang.String,java.lang.String>
```

Environment variables for component configuration

**See Also:**
- [Serialized Form](../../../../../serialized-form.md)

## Nested Class Summary

### Nested classes/interfaces inherited from class java.util.AbstractMap
```java.util.AbstractMap.SimpleEntry<K,V>`, `java.util.AbstractMap.SimpleImmutableEntry<K,V>`

### Nested classes/interfaces inherited from interface java.util.Map
```java.util.Map.Entry<K,V>`

## Field Summary

| Modifier and Type | Field and Description |
|-------------------|----------------------|
| `static java.lang.String` | `COMPONENT_DIR`<br>Pre-defined component directory environment variable |

## Constructor Summary

| Constructor and Description |
|----------------------------|
| `Environment()`<br>Constructor |
| `Environment(java.util.Map<java.lang.String,java.lang.String> dictionary)`<br>Copy constructor |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `java.lang.String` | `evaluateKey(java.lang.String key)`<br>Get the value for the specified environment variable |
| `java.lang.String` | `evaluateString(java.lang.String str)`<br>Substitute environment variables in specified string with corresponding environment values |

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

Pre-defined component directory environment variable

**See Also:**
- [Constant Field Values](../../../../../constant-values.md)

## Constructor Detail

### Environment

```java
public Environment()
```

Constructor

### Environment

```java
public Environment(java.util.Map<java.lang.String,java.lang.String> dictionary)
```

Copy constructor

**Parameters:**
- `dictionary` - dictionary to copy; if null, an empty map will be used

## Method Detail

### evaluateString

```java
public java.lang.String evaluateString(java.lang.String str)
```

Substitute environment variables in specified string with corresponding environment values

**Parameters:**
- `str` - string on which to perform substitutions

**Returns:**
- string with substituted environment values

### evaluateKey

```java
public java.lang.String evaluateKey(java.lang.String key)
```

Get the value for the specified environment variable

**Parameters:**
- `key` - environment variable for which to get value

**Returns:**
- value of environment variable; null if not found