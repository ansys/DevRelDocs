# Class: PHXPropertyValue

**Package:** `com.phoenix_int.aserver.client`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.client.PHXPropertyValue
```

**Declaration**

```
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
```
public PHXPropertyDescriptor _prop
```

### subProps
```
public PHXPropertyValue[] subProps
```

## Constructor Detail

### PHXPropertyValue
```
public PHXPropertyValue()
```

### PHXPropertyValue
```
public PHXPropertyValue(PHXPropertyValue val)
```

### PHXPropertyValue
```
public PHXPropertyValue(PHXPropertyDescriptor prop, 
                        java.lang.String val)
```

## Method Detail

### getValue
```
public java.lang.String getValue()
```