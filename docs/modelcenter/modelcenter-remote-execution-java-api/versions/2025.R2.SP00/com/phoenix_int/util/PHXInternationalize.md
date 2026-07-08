# Class: PHXInternationalize

**Package:** `com.phoenix_int.util`

**Class Hierarchy**

```java
↳ java.lang.Object
  ↳ com.phoenix_int.util.PHXInternationalize
```

--- 
**Declaration**

```java
public class PHXInternationalize
extends java.lang.Object
```

Helper class to do internationalization.

## Nested Class Summary

|Modifier and Type	|Class and Description|
|-----|-----|
| `static interface`| `PHXInternationalize.InternationalizedMessage`<br>Interface for a lazily computed translation message.|

## Constructor Summary

| Constructor and Description |
|---------------------------|
| `PHXInternationalize(java.lang.Class relC)` |
| `PHXInternationalize(java.lang.Object rel)`<br>Creates a new instance of PHXInternationalize |

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `static void` | `setTestMode()`<br>In test mode it automatically prefixes all translations with some consistent garbage so that we can test that translating doesn't break anything. |
| `java.lang.String` | `tr(java.lang.String id)` |
| `java.lang.String` | `tr(java.lang.String id, java.lang.Object... args)` |
| `PHXInternationalize.InternationalizedMessage` | `trLazy(java.lang.String id)`<br>Return a lazily instantiated translation message that can be computed only if needed. |
| `PHXInternationalize.InternationalizedMessage` | `trLazy(java.lang.String id, java.lang.Object... args)`<br>Return a lazily instantiated translation message that can be computed only if needed. |

### Methods inherited from class java.lang.Object

`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXInternationalize

```java
public PHXInternationalize(java.lang.Class relC)
```

### PHXInternationalize

```java
public PHXInternationalize(java.lang.Object rel)
```

Creates a new instance of PHXInternationalize

## Method Detail

### setTestMode

```java
public static void setTestMode()
```

In test mode it automatically prefixes all translations with some consistent garbage so that we can test that translating doesn't break anything.

### tr

```java
public java.lang.String tr(java.lang.String id)
```

### tr

```java
public java.lang.String tr(java.lang.String id, 
                           java.lang.Object... args)
```

### trLazy

```java
public PHXInternationalize.InternationalizedMessage trLazy(java.lang.String id)
```

Return a lazily instantiated translation message that can be computed only if needed.

**Parameters:**
- `id` - The translation key

**Returns:**
- An object which can be evaluated to compute the translation message

### trLazy

```java
public PHXInternationalize.InternationalizedMessage trLazy(java.lang.String id, 
                                                           java.lang.Object... args)
```

Return a lazily instantiated translation message that can be computed only if needed.

**Parameters:**
- `id` - The translation key
- `args` - The arguments to the translation message

**Returns:**
- An object which can be evaluated to compute the translation message