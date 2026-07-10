# Class: PHXStringReplacer

**Package:** `com.phoenix_int.aserver.util`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.util.PHXStringReplacer
```
--- 

**Declaration**

```java
public class PHXStringReplacer
extends java.lang.Object
```

This is a utility class for replacing fields within a string.

Sample Usage:

```java
   PHXVariableReplacer vr = new PHXVariableReplacer( _wrapper );
   PHXStringReplacer r = new PHXStringReplacer( vr );

   String s = "user/woyak/$file";
   String n = r.replace( s );
```

## Constructor Summary

| `Constructor and Description` |
|-----------------------------|
| `PHXStringReplacer(IPHXStringReplacer r)` |

## Method Summary

| `Modifier and Type` | Method and Description |
|---------------------|----------------------|
| `static void` | `main(java.lang.String[] args)` |
| `java.lang.String` | `replace(java.lang.String s)` <br>replaces all names starting with "$" with values looked up from the replacer object. |

### Methods inherited from class java.lang.Object

`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXStringReplacer

```java
public PHXStringReplacer(IPHXStringReplacer r)
```

## Method Detail

### replace

```java
public java.lang.String replace(java.lang.String s)
```

Replaces all names starting with "$" with values looked up from the replacer object. If no match is found, the original value is retained.

**Parameters:**

- `s` - the String to replace tokens in

**Returns:**

- the modified string

### main

```java
public static void main(java.lang.String[] args)
```