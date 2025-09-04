# Interface: IRuntimeVariable

**Package:** `com.phoenix_int.pacz.api.v2`

**All Superinterfaces**

- [IPHXType](../../../aserver/types/IPHXType.md)
- [IPHXType2](../../../aserver/types/IPHXType2.md)
- [IPHXUnits](../../../aserver/types/IPHXUnits.md)
- com.phoenix_int.pacz.api.v2.IRuntimeVariableMetadata

---
**Declaration:**
```java
public interface IRuntimeVariable
extends IPHXType2, IPHXUnits, com.phoenix_int.pacz.api.v2.IRuntimeVariableMetadata
```

Component variable interface

## Nested Class Summary

### Nested classes/interfaces inherited from interface com.phoenix_int.aserver.types.[IPHXType2](../../../aserver/types/IPHXType2.md)
`IPHXType2.IVisitor<T>`

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `IRuntimeVariable` | `createCopy()`<br>Get a clone of this variable, including its metadata and value. |
| `java.lang.String` | `getDescription()`<br>Get variable description |
| `java.util.Map<java.lang.String,java.lang.String>` | `getMetaData()`<br>Get additional variable meta data |
| `java.lang.String` | `getType()`<br>Get variable data type |
| `java.lang.String` | `getVariableName()`<br>Get variable name |
| `boolean` | `isArray()`<br>Whether or not variable is an array type |
| `boolean` | `isEnum()`<br>Whether or not variable is an enumerated type |
| `boolean` | `isNumeric()`<br>Whether or not variable is a numeric type |
| `void` | `setDescription(java.lang.String description)`<br>Set variable description |
| `void` | `setMetaData(java.lang.String key, java.lang.String value)`<br>Set meta data property; will create a new entry if it does not exist |
| `void` | `setVariableName(java.lang.String name)`<br>Set variable name |
| `PHXSimpleType` | `toPHXSimpleType()`<br>Get the PHXSimpleType version of variable |

#### Methods inherited from interface com.phoenix_int.aserver.types.[IPHXType2](../../../aserver/types/IPHXType2.md)
`Accept`, `fromString2`, `toString2`

#### Methods inherited from interface com.phoenix_int.aserver.types.[IPHXType](../../../aserver/types/IPHXType.md)
`fromString`, `toString`

#### Methods inherited from interface com.phoenix_int.aserver.types.[IPHXUnits](../../../aserver/types/IPHXUnits.md)
`getUnits`, `setUnits`

#### Methods inherited from interface com.phoenix_int.pacz.api.v2.IRuntimeVariableMetadata
`getOptionalEnumAliases`, `getOptionalEnumValues`, `getOptionalFormat`, `getOptionalLowerBound`, `getOptionalUpperBound`

## Method Detail

### getVariableName

```java
java.lang.String getVariableName()
```

Get variable name

**Returns:**
- variable name

### setVariableName

```java
void setVariableName(java.lang.String name)
```

Set variable name

**Parameters:**
- `name` - variable name to use

### getDescription

```java
java.lang.String getDescription()
```

Get variable description

**Returns:**
- description of variable

### setDescription

```java
void setDescription(java.lang.String description)
```

Set variable description

**Parameters:**
- `description` - description of variable to use

### getType

```java
java.lang.String getType()
```

Get variable data type

**Returns:**
- variable data type

**See Also:**
- [PHXTypeFactory.getVarType(java.lang.String)](../../../aserver/types/PHXTypeFactory.md)

### getMetaData

```java
java.util.Map<java.lang.String,java.lang.String> getMetaData()
```

Get additional variable meta data

**Returns:**
- key-value pair of variable meta data

### setMetaData

```java
void setMetaData(java.lang.String key, 
                 java.lang.String value)
          throws java.lang.IllegalArgumentException
```

Set meta data property; will create a new entry if it does not exist

**Parameters:**
- `key` - meta data property for which to set value
- `value` - value to set

**Throws:**
- `java.lang.IllegalArgumentException` - if key is null or empty

### isNumeric

```java
boolean isNumeric()
```

Whether or not variable is a numeric type

**Returns:**
- `true` if numeric type, `false` otherwise

### isArray

```java
boolean isArray()
```

Whether or not variable is an array type

**Returns:**
- `true` if array type, `false` otherwise

### isEnum

```java
boolean isEnum()
```

Whether or not variable is an enumerated type

**Returns:**
- `true` if enumerated type, `false` otherwise

### toPHXSimpleType

```java
PHXSimpleType toPHXSimpleType()
```

Get the PHXSimpleType version of variable

**Returns:**
- PHXSimpleType version of variable

### createCopy

```java
IRuntimeVariable createCopy()
```

Get a clone of this variable, including its metadata and value.

**Returns:**
- a newly constructed clone of the instance.