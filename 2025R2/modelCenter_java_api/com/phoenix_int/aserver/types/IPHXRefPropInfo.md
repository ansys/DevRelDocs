# Interface: IPHXRefPropInfo

**Package:** `com.phoenix_int.aserver.types`

**All Superinterfaces:**
- [IPHXDescription](IPHXDescription.md)

**All Known Implementing Classes:**
- [PHXRefArrayProperty](PHXRefArrayProperty.md)
- [PHXRefProperty](PHXRefProperty.md)

--- 

**Declaration**

```java
public interface IPHXRefPropInfo
extends IPHXDescription
```

This interface provides information about a reference property:
- **name**: String
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

## Method Summary

| Modifier and Type      | Method and Description                                                        |
|-----------------------|-------------------------------|
| `void`                | `enumValuesFromString(java.lang.String enumValues)`|
| `java.lang.String[]`  | `getEnumValues()` <br>lists enum values |
| `boolean`             | `getInput()` <br>retrieves an indicator of whether the ref prop is an input or an output. |
| `java.lang.String`    | `getName()` <br>retrieves the name of the variable|
| `java.lang.String`    | `getTitle()` <br>retrieves a title of the ref prop.|
| `java.lang.String`    | `getType()` <br>retrieves the current type of the variable|
| `void`                | `setEnumValues(java.lang.String[] enumValues)` <br>sets the enum values|
| `void`                | `setInput(boolean value)` <br>sets an indicator for the ref prop|
| `void`                | `setTitle(java.lang.String value)` <br>sets a title of the ref prop|

### Methods inherited from interface com.phoenix_int.aserver.types.IPHXDescription
`getDescription`, `setDescription`

## Method Detail

### getName

```java
java.lang.String getName()
```

retrieves the name of the variable

**Returns:**
- the name of the variable

### getType

```java
java.lang.String getType()
```

retrieves the current type of the variable

**Returns:**
- the value of the variable

### getTitle

```java
java.lang.String getTitle()
```

retrieves a title of the ref prop. Used by ModelCenter when displaying the variable in certain dialogs

**Returns:**
- a title for the ref prop

### setTitle

```java
void setTitle(java.lang.String value)
```

sets a title of the ref prop

**Parameters:**
- `value` - a title for the ref prop

### getInput

```java
boolean getInput()
```

retrieves an indicator of whether the ref prop is an input or an output. If it's an output, the driver component will calculate a value for it.

**Returns:**
- an indicator if the ref prop is an input

### setInput

```java
void setInput(boolean value)
```

sets an indicator for the ref prop

**Parameters:**
- `value` - an indicator for the ref prop

### getEnumValues

```java
java.lang.String[] getEnumValues()
```

lists enum values

**Returns:**
- an array of enum values

### setEnumValues

```java
void setEnumValues(java.lang.String[] enumValues)
```

sets the enum values

**Parameters:**
- `enumValues` - an array of enum values

### enumValuesFromString

```java
void enumValuesFromString(java.lang.String enumValues)
```