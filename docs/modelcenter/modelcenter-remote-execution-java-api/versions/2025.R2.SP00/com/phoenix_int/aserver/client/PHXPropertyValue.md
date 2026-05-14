# Class: PHXPropertyValue

**Package:** `com.phoenix_int.aserver.client`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.client.PHXPropertyValue
```

**Declaration**

```java
public class PHXPropertyValue
extends java.lang.Object
```

## Field Summary

| Modifier and Type | Field and Description |
|-------------------|----------------------|
| `PHXPropertyDescriptor` | `_prop` |
| `PHXPropertyValue[]` | `subProps` |

### Fields inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Constructor Summary

| Constructor and Description |
|----------------------------|
| `PHXPropertyValue()` |
| `PHXPropertyValue(PHXPropertyDescriptor prop, java.lang.String val)` |
| `PHXPropertyValue(PHXPropertyValue val)` |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `java.lang.String` | `getValue()` |

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Field Detail

### _prop
```java
public PHXPropertyDescriptor _prop
```

### subProps
```java
public PHXPropertyValue[] subProps
```

## Constructor Detail

### PHXPropertyValue
```java
public PHXPropertyValue()
```

### PHXPropertyValue
```java
public PHXPropertyValue(PHXPropertyValue val)
```

### PHXPropertyValue
```java
public PHXPropertyValue(PHXPropertyDescriptor prop, 
                        java.lang.String val)
```

## Method Detail

### getValue
```java
public java.lang.String getValue()
```