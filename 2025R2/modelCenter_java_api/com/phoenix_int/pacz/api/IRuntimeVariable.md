# Interface: IRuntimeVariable

**Package:** `com.phoenix_int.pacz.api`

---
**Deprecated:** see [`com.phoenix_int.pacz.api.v2.IRuntimeVariable`](v2/IRuntimeVariable.md)

```java
@Deprecated
public interface IRuntimeVariable
```

Component variable interface

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `java.lang.Object` | `getDefaultValue()`<br>**Deprecated.** Get default value of variable |
| `java.lang.String` | `getDescription()`<br>**Deprecated.** Get variable description |
| `java.lang.String[]` | `getEnumAliases()`<br>**Deprecated.** Get names/aliases for the enumerated type |
| `java.lang.Object[]` | `getEnumValues()`<br>**Deprecated.** Get values for the enumerated type |
| `java.lang.String` | `getFormat()`<br>**Deprecated.** Get variable format string |
| `java.lang.Number` | `getLowerBound()`<br>**Deprecated.** Get lower bound of variable; may be null |
| `java.util.Map<java.lang.String,java.lang.String>` | `getMetaData()`<br>**Deprecated.** Get additional variable meta data |
| `java.lang.String` | `getName()`<br>**Deprecated.** Get variable name |
| `VariableDataType` | `getType()`<br>**Deprecated.** Get variable data type |
| `java.lang.String` | `getUnits()`<br>**Deprecated.** Get variable units |
| `java.lang.Number` | `getUpperBound()`<br>**Deprecated.** Get upper bound of variable; may be null |
| `boolean` | `isArray()`<br>**Deprecated.** Whether or not variable is an array type |
| `boolean` | `isEnum()`<br>**Deprecated.** Whether or not variable is an enumerated type |
| `boolean` | `isNumeric()`<br>**Deprecated.** Whether or not variable is a numeric type |
| `void` | `setDefaultValue(java.lang.Object defaultValue)`<br>**Deprecated.** Set default value of variable |
| `void` | `setDescription(java.lang.String description)`<br>**Deprecated.** Set variable description |
| `void` | `setEnums(java.lang.String[] enumAliases, java.lang.Object[] enumValues)`<br>**Deprecated.** Set the names/aliases and corresponding values for the enumerated type |
| `void` | `setFormat(java.lang.String format)`<br>**Deprecated.** Set variable format string |
| `void` | `setLowerBound(java.lang.Number lowerBound)`<br>**Deprecated.** Set lower bound of variable; may be null |
| `void` | `setMetaData(java.lang.String key, java.lang.String value)`<br>**Deprecated.** Set meta data property; will create a new entry it does not exist |
| `void` | `setName(java.lang.String name)`<br>**Deprecated.** Set variable name |
| `void` | `setUnits(java.lang.String units)`<br>**Deprecated.** Set variable units |
| `void` | `setUpperBound(java.lang.Number upperBound)`<br>**Deprecated.** Set upper bound of variable; may be null |

## Method Detail

### getName

```java
java.lang.String getName()
```

**Deprecated.** Get variable name

**Returns:**
- variable name

### setName

```java
void setName(java.lang.String name)
```

**Deprecated.** Set variable name

**Parameters:**
- `name` - variable name to use

### getType

```java
VariableDataType getType()
```

**Deprecated.** Get variable data type

**Returns:**
- variable data type

**See Also:**
- [VariableDataType](/VariableDataType.md)

### getFormat

```java
java.lang.String getFormat()
```

**Deprecated.** Get variable format string

**Returns:**
- variable format string

### setFormat

```java
void setFormat(java.lang.String format)
```

**Deprecated.** Set variable format string

**Parameters:**
- `format` - format string to use

### getUnits

```java
java.lang.String getUnits()
```

**Deprecated.** Get variable units

**Returns:**
- variable units

### setUnits

```java
void setUnits(java.lang.String units)
```

**Deprecated.** Set variable units

**Parameters:**
- `units` - units to use

### getDescription

```java
java.lang.String getDescription()
```

**Deprecated.** Get variable description

**Returns:**
- variable description

### setDescription

```java
void setDescription(java.lang.String description)
```

**Deprecated.** Set variable description

**Parameters:**
- `description` - description to use

### getDefaultValue

```java
java.lang.Object getDefaultValue()
```

**Deprecated.** Get default value of variable

**Returns:**
- variable default value

### setDefaultValue

```java
void setDefaultValue(java.lang.Object defaultValue)
```

**Deprecated.** Set default value of variable

**Parameters:**
- `defaultValue` - default value to use

### getUpperBound

```java
java.lang.Number getUpperBound()
```

**Deprecated.** Get upper bound of variable; may be null

Only applicable to variables of numeric type

**Returns:**
- variable upper bound or null if no upper bound

### setUpperBound

```java
void setUpperBound(java.lang.Number upperBound)
```

**Deprecated.** Set upper bound of variable; may be null

Only applicable to variables of numeric type

**Parameters:**
- `upperBound` - upper bound to use; null for none

### getLowerBound

```java
java.lang.Number getLowerBound()
```

**Deprecated.** Get lower bound of variable; may be null

Only applicable to variables of numeric type

**Returns:**
- variable lower bound or null if no lower bound

### setLowerBound

```java
void setLowerBound(java.lang.Number lowerBound)
```

**Deprecated.** Set lower bound of variable; may be null

Only applicable to variables of numeric type

**Parameters:**
- `lowerBound` - lower bound to use; null for none

### getEnumValues

```java
java.lang.Object[] getEnumValues()
```

**Deprecated.** Get values for the enumerated type

**Returns:**
- array of values for the enumerated type or null if variable is not an enumerated type

### getEnumAliases

```java
java.lang.String[] getEnumAliases()
```

**Deprecated.** Get names/aliases for the enumerated type

**Returns:**
- array of names/aliases for the enumerated type or null if variable is not an enumerated type

### setEnums

```java
void setEnums(java.lang.String[] enumAliases, 
              java.lang.Object[] enumValues)
```

**Deprecated.** Set the names/aliases and corresponding values for the enumerated type

**Parameters:**
- `enumAliases` - array of names/aliases of enumerated type; must have same length as values
- `enumValues` - array of values of enumerated type; must have same length as aliases

**Throws:**
- `java.lang.IllegalArgumentException` - if aliases and values are not of same length

### getMetaData

```java
java.util.Map<java.lang.String,java.lang.String> getMetaData()
```

**Deprecated.** Get additional variable meta data

**Returns:**
- key-value pair of variable meta data

### setMetaData

```java
void setMetaData(java.lang.String key, 
                 java.lang.String value) 
          throws java.lang.IllegalArgumentException
```

**Deprecated.** Set meta data property; will create a new entry it does not exist

**Parameters:**
- `key` - meta data property for which to set value
- `value` - value to set

**Throws:**
- `java.lang.IllegalArgumentException` - if key is null or empty

### isNumeric

```java
boolean isNumeric()
```

**Deprecated.** Whether or not variable is a numeric type

**Returns:**
- true if numeric type, false otherwise

### isArray

```java
boolean isArray()
```

**Deprecated.** Whether or not variable is an array type

**Returns:**
- true if array type, false otherwise

### isEnum

```java
boolean isEnum()
```

**Deprecated.** Whether or not variable is an enumerated type

**Returns:**
- true if enumerated type, false otherwise