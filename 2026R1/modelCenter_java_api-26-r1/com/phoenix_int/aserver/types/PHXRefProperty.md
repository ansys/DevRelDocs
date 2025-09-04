# Class PHXRefProperty


**Package:** `com.phoenix_int.aserver.types`
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.types.PHXRefProperty
```

**All Implemented Interfaces:**
- [IPHXDescription](IPHXDescription.md), [IPHXRefPropInfo](IPHXRefPropInfo.md)

---

**Declaration:**

```java
public class PHXRefProperty
extends java.lang.Object
implements IPHXRefPropInfo
```

This is a class for holding properties of a reference object

- **type**: String
- **enumValues**: String[]
- **description**: String
- **title**: String
- **input**: boolean

where type may be any of the following:

- "long"
- "double"
- "boolean"
- "string"


## Constructor Summary

| Constructor and Description |
| --- |
| `PHXRefProperty(java.lang.String name, java.lang.String type)`<br>constructor |

## Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `void` | `enumValuesFromString(java.lang.String enumValues)`<br>sets the enum values from a comma-separated list of values |
| `java.lang.String` | `getDescription()`<br>retrieves a description of the ref prop |
| `java.lang.String[]` | `getEnumValues()`<br>lists enum values |
| `boolean` | `getInput()`<br>retrieves an indicator of whether the ref prop is an input or an output. |
| `java.lang.String` | `getName()`<br>retrieves the name of the variable |
| `java.lang.String` | `getTitle()`<br>retrieves a title of the ref prop. |
| `java.lang.String` | `getType()`<br>retrieves the current type of the variable |
| `java.lang.String` | `getValue()`<br>retrieves the current value of the variable |
| `void` | `setDescription(java.lang.String value)`<br>sets a description of the ref prop |
| `void` | `setEnumValues(java.lang.String[] enumValues)`<br>sets the enum values |
| `void` | `setInput(boolean value)`<br>sets an indicator for the ref prop |
| `void` | `setTitle(java.lang.String value)`<br>sets a title of the ref prop |
| `void` | `setValue(java.lang.String v)`<br>sets the value for the variable |

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXRefProperty

```java
public PHXRefProperty(java.lang.String name,
                      java.lang.String type)
```

Constructor

**Parameters:**
- `name` - the name of the property
- `type` - the type of the property

### Method Detail

### getName

```java
public java.lang.String getName()
```

Retrieves the name of the variable

**Specified by:**
- `getName` in interface [`IPHXRefPropInfo`](IPHXRefPropInfo.md)

**Returns:**
- the name of the variable

### getDescription

```java
public java.lang.String getDescription()
```

Retrieves a description of the ref prop

**Specified by:**
- `getDescription` in interface [`IPHXDescription`](IPHXDescription.md)

**Returns:**
- a description of the ref prop

### setDescription

```java
public void setDescription(java.lang.String value)
```

Sets a description of the ref prop

**Specified by:**
- `setDescription` in interface [`IPHXDescription`](IPHXDescription.md)

**Parameters:**
- `value` - a description of the ref prop

### getTitle

```java
public java.lang.String getTitle()
```

Retrieves a title of the ref prop. Used by ModelCenter when displaying the variable in certain dialogs

**Specified by:**
- `getTitle` in interface [`IPHXRefPropInfo`](IPHXRefPropInfo.md)

**Returns:**
- a title for the ref prop

### setTitle

```java
public void setTitle(java.lang.String value)
```

Sets a title of the ref prop

**Specified by:**
- `setTitle` in interface [`IPHXRefPropInfo`](IPHXRefPropInfo.md)

**Parameters:**
- `value` - a title for the ref prop

### getInput

```java
public boolean getInput()
```

Retrieves an indicator of whether the ref prop is an input or an output. If it's an output, the driver component will calculate a value for it.

**Specified by:**
- `getInput` in interface [`IPHXRefPropInfo`](IPHXRefPropInfo.md)

**Returns:**
- an indicator if the ref prop is an input

### setInput

```java
public void setInput(boolean value)
```

Sets an indicator for the ref prop

**Specified by:**
- `setInput` in interface [`IPHXRefPropInfo`](IPHXRefPropInfo.md)

**Parameters:**
- `value` - an indicator for the ref prop

### getValue

```java
public java.lang.String getValue()
                          throws PHXTypeMismatchException
```

Retrieves the current value of the variable

**Returns:**
- the value of the variable

**Throws:**
- `PHXTypeMismatchException`

### setValue

```java
public void setValue(java.lang.String v)
```

Sets the value for the variable

**Parameters:**
- `v` - the value

### getType

```java
public java.lang.String getType()
```

Retrieves the current type of the variable

**Specified by:**
- `getType` in interface [`IPHXRefPropInfo`](IPHXRefPropInfo.md)

**Returns:**
- the value of the variable

### getEnumValues

```java
public java.lang.String[] getEnumValues()
```

Lists enum values

**Specified by:**
- `getEnumValues` in interface [`IPHXRefPropInfo`](IPHXRefPropInfo.md)

**Returns:**
- enum values

### setEnumValues

```java
public void setEnumValues(java.lang.String[] enumValues)
```

Sets the enum values

**Specified by:**
- `setEnumValues` in interface [`IPHXRefPropInfo`](IPHXRefPropInfo.md)

**Parameters:**
- `enumValues` - an array enum values

### enumValuesFromString

```java
public void enumValuesFromString(java.lang.String enumValues)
```

Sets the enum values from a comma-separated list of values

**Specified by:**
- `enumValuesFromString` in interface [`IPHXRefPropInfo`](IPHXRefPropInfo.md)

**Parameters:**
- `enumValues` - a comma-separated list of values
