======== START OF CLASS DATA ========
com.phoenix_int.aserver.types
## Class PHXRefArrayProperty
- java.lang.Object
- - com.phoenix_int.aserver.types.PHXRefArrayProperty
- **All Implemented Interfaces:**
: [IPHXDescription](../../../../com/phoenix_int/aserver/types/IPHXDescription.html),[IPHXRefPropInfo](../../../../com/phoenix_int/aserver/types/IPHXRefPropInfo.html)

---

```java
public class PHXRefArrayProperty
extends java.lang.Object
implements IPHXRefPropInfo
```
This is a class for holding properties of a reference
 object
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
**Author:**
: Woyak- ========== METHOD SUMMARY ===========
- ### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| Modifier and Type | Method and Description |
| `void` | `enumValuesFromString(java.lang.String enumValues)`sets the enum values from a comma-separated list of values |
| `java.lang.String` | `getDescription()`retrieves a description of the ref prop |
| `java.lang.String[]` | `getEnumValues()`lists enum values |
| `boolean` | `getInput()`retrieves an indicator of whether the ref prop is an input
 or an output. |
| `java.lang.String` | `getName()`retrieves the name of the variable |
| `java.lang.String` | `getTitle()`retrieves a title of the ref prop. |
| `java.lang.String` | `getType()`retrieves the current type of the variable |
| `java.lang.String` | `getValues(int index)`gets the value at an index |
| `void` | `setDescription(java.lang.String value)`sets a description of the ref prop |
| `void` | `setEnumValues(java.lang.String[] enumValues)`sets the enum values |
| `void` | `setInput(boolean value)`sets an indicator for the ref prop |
| `void` | `setTitle(java.lang.String value)`sets a title of the ref prop |
| `void` | `setValues(int index,
         java.lang.String v)`sets the value for the variable |

- ### Methods inherited from class java.lang.Object
`clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`- ============ METHOD DETAIL ==========
- ### Method Detail

- #### getName

```java
public java.lang.String getName()
```
retrieves the name of the variable
**Specified by:**
: `getName`in interface`IPHXRefPropInfo`
**Returns:**
: the name of the variable

- #### getDescription

```java
public java.lang.String getDescription()
```
retrieves a description of the ref prop
**Specified by:**
: `getDescription`in interface`IPHXDescription`
**Returns:**
: a description of the ref prop

- #### setDescription

```java
public void setDescription(java.lang.String value)
```
sets a description of the ref prop
**Specified by:**
: `setDescription`in interface`IPHXDescription`
**Parameters:**
: `value`- a description of the ref prop

- #### getTitle

```java
public java.lang.String getTitle()
```
retrieves a title of the ref prop. Used by ModelCenter when
 displaying the variable in certain dialogs
**Specified by:**
: `getTitle`in interface`IPHXRefPropInfo`
**Returns:**
: a title for the ref prop

- #### setTitle

```java
public void setTitle(java.lang.String value)
```
sets a title of the ref prop
**Specified by:**
: `setTitle`in interface`IPHXRefPropInfo`
**Parameters:**
: `value`- a title for the ref prop

- #### getInput

```java
public boolean getInput()
```
retrieves an indicator of whether the ref prop is an input
 or an output. If it's an output, the driver component
 will calculate a value for it.
**Specified by:**
: `getInput`in interface`IPHXRefPropInfo`
**Returns:**
: an indicator if the ref prop is an input

- #### setInput

```java
public void setInput(boolean value)
```
sets an indicator for the ref prop
**Specified by:**
: `setInput`in interface`IPHXRefPropInfo`
**Parameters:**
: `value`- an indicator for the ref prop

- #### getValues

```java
public java.lang.String getValues(int index)
```
gets the value at an index
**Parameters:**
: `index`- the desired index

- #### setValues

```java
public void setValues(int index,
                      java.lang.String v)
```
sets the value for the variable
**Parameters:**
: `v`- the value

- #### getType

```java
public java.lang.String getType()
```
retrieves the current type of the variable
**Specified by:**
: `getType`in interface`IPHXRefPropInfo`
**Returns:**
: the value of the variable

- #### getEnumValues

```java
public java.lang.String[] getEnumValues()
```
lists enum values
**Specified by:**
: `getEnumValues`in interface`IPHXRefPropInfo`
**Returns:**
: enum values

- #### setEnumValues

```java
public void setEnumValues(java.lang.String[] enumValues)
```
sets the enum values
**Specified by:**
: `setEnumValues`in interface`IPHXRefPropInfo`
**Parameters:**
: `enumValues`- an array enum values

- #### enumValuesFromString

```java
public void enumValuesFromString(java.lang.String enumValues)
```
sets the enum values from a comma-separated list of values
**Specified by:**
: `enumValuesFromString`in interface`IPHXRefPropInfo`
**Parameters:**
: `enumValues`- a comma-separated list of values
========= END OF CLASS DATA =========