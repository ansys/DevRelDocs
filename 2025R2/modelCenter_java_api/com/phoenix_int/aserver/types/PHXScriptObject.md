# Class PHXScriptObject


**Package:** `com.phoenix_int.aserver.types`
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.types.PHXSimpleType
    ↳ com.phoenix_int.aserver.types.PHXScriptObject
```

**All Implemented Interfaces:**
- [IPHXType](IPHXType.md), [IPHXType2](IPHXType2.md), [IPHXUnits](IPHXUnits.md)

---

**Declaration:**
```
public class PHXScriptObject
extends PHXSimpleType
```
The type for object variables. 
 
This class holds an instance of `PHXObjectHost` that wraps around a Java or Python object, and uses introspection to get and set values of the internal object.

## Nested Class Summary

### Nested classes/interfaces inherited from interface com.phoenix_int.aserver.types.[IPHXType2](IPHXType2.md)
`IPHXType2.IVisitor<T>`


## Constructor Summary

| Constructor and Description |
| --- |
| `PHXScriptObject()`Creates a new instance of PHXScriptObject |

### Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `<T> T` | `Accept(IPHXType2.IVisitor<T> visitor)`<br>Accept a Visitor. |
| `java.lang.Object` | `callMethod(java.lang.String method)`<br>call a method |
| `PHXSimpleType` | `createCopy()`<br>Create a copy of this instance, including the value and metadata. |
| `void` | `deleteAllMembers()`<br>delete all members for non-strict type object. |
| `void` | `deleteMember(java.lang.String mIndex)`<br>delete a member for non-strict type object. |
| `boolean` | `equalsNatural(PHXSimpleTypetoCompare)`<br>Compare this PHXSimpleType to another PHXSimpleType. |
| `void` | `fromFile(java.lang.String mIndex)`<br>load a file into a file member. |
| `void` | `fromFile(java.lang.String mIndex, java.lang.String fileName)`<br>load a file into a file member |
| `void` | `fromObject(java.lang.Object toRead)`<br>Load the value of this object from the specified object. |
| `void` | `fromString(java.lang.String value)`<br>update object using the XML value |
| `void` | `fromString2(PHXStringBuffervalue)`<br>update object using the XML value |
| `void` | `fromXML(java.lang.String xmlStr)<br>`update the object from an XML string |
| `boolean` | `getBooleanArrayMemberValue(java.lang.String mIndex, int index)`<br>get the value of an 1D boolean array element |
| `boolean` | `getBooleanArrayMemberValue(java.lang.String mIndex, int[] index)`<br>get the value of a boolean array element |
| `boolean` | `getBooleanMemberValue(java.lang.String mIndex)`<br>gets the value of boolean member |
| `java.lang.String` | `getClassURL()`<br>get the class type. |
| `double` | `getDoubleArrayMemberValue(java.lang.String mIndex, int index)`<br>get the value of an 1D double array element |
| `double` | `getDoubleArrayMemberValue(java.lang.String mIndex, int[] index)`<br>get the value of a double array element |
| `double` | `getDoubleMemberValue(java.lang.String mIndex)`<br>gets the value of a double member |
| `java.lang.String` | `getFileName(java.lang.String mIndex)`<br>return name of the data source file |
| `int` | `getIntArrayMemberValue(java.lang.String mIndex, int index)`<br>get the value of an 1D integer array element |
| `int` | `getIntArrayMemberValue(java.lang.String mIndex, int[] index)`<br>get the value of an integer array element |
| `java.lang.Object` | `getInternalObject()`<br>get internal Java object that represent the data |
| `int` | `getIntMemberValue(java.lang.String mIndex)`<br>gets the value of an integer member |
| `boolean` | `getIsBinary(java.lang.String mIndex)`<br>return true if the file member contains a binary file |
| `java.lang.String` | `getMemberDescription(java.lang.String mIndex)`<br>get description of the member |
| `int[]` | `getMemberDimensions(java.lang.String mIndex)`<br>get dimensions and size of an array member |
| `java.lang.String` | `getMemberEnumAliases(java.lang.String mIndex)`<br>get enum aliases of the member |
| `java.lang.String` | `getMemberEnumValues(java.lang.String mIndex)`<br>return enum values of the member |
| `int` | `getMemberLength(java.lang.String mIndex)`<br>get length of an 1D array member |
| `int` | `getMemberLength(java.lang.String mIndex, int dimension)`<br>get length of an array member |
| `java.lang.String[]` | `getMemberList(java.lang.String mIndex)`<br>get a list of child members. |
| `java.lang.String` | `getMemberLowerBound(java.lang.String mIndex)`<br>get lowerBound of a member |
| `int` | `getMemberNumDimensions(java.lang.String mIndex)`<br>get number of dimensions of an array member |
| `java.lang.String` | `getMemberProperty(java.lang.String mIndex, java.lang.String propertyName)`<br>get value of a property of the member |
| `java.lang.String` | `getMemberType(java.lang.String mIndex)`<br>return type of the member |
| `java.lang.String` | `getMemberUnits(java.lang.String mIndex)`<br>get units of the member |
| `java.lang.String` | `getMemberUpperBound(java.lang.String mIndex)`<br>return upperBound of the member |
| `java.lang.String` | `getMemberValueAsString(java.lang.String mIndex)`<br>gets the value of a member as a string |
| `java.lang.String[]` | `getMethodList()`<br>get a list of methods |
| `java.lang.String` | `getStringArrayMemberValue(java.lang.String mIndex, int index)`<br>get the value of an 1D String array element |
| `java.lang.String` | `getStringArrayMemberValue(java.lang.String mIndex, int[] index)`<br>get the value of a string array element |
| `java.lang.String` | `getStringMemberValue(java.lang.String mIndex)`<br>gets the value of string member |
| `boolean` | `hasMember(java.lang.String mIndex)`<br>check if a member exists |
| `boolean` | `hasMemberLowerBound(java.lang.String mIndex)`<br>check if a member has lower bound defined |
| `boolean` | `hasMemberUpperBound(java.lang.String mIndex)`<br>check if a member has lower bound defined |
| `void` | `initialize(com.phoenix_int.object.PHXDataObjectClass pClass)`<br>initialize object variable with the specified class |
| `boolean` | `isNonStrictType()`<br>check whether a class is a non-strict type |
| `void` | `setBaseName(java.lang.String mIndex, java.lang.String baseName)`<br>set base name for the data source file |
| `void` | `setBooleanArrayMemberValue(java.lang.String mIndex, int[] index, boolean value)`<br>sets the value of a boolean array member |
| `void` | `setBooleanArrayMemberValue(java.lang.String mIndex, int index, boolean value)`<br>sets the value of an 1D boolean array member |
| `void` | `setBooleanMemberValue(java.lang.String mIndex, boolean value)`<br>sets the value of a boolean member |
| `void` | `setDoubleArrayMemberValue(java.lang.String mIndex, int[] index, double value)`<br>sets the value of a double array member |
| `void` | `setDoubleArrayMemberValue(java.lang.String mIndex, int index, double value)`<br>sets the value of a 1D double array member |
| `void` | `setDoubleMemberValue(java.lang.String mIndex, double value)`<br>sets the value of a double member |
| `void` | `setFileExtension(java.lang.String mIndex, java.lang.String fileExtension)`<br>set file extesion of the data source file |
| `void` | `setFileName(java.lang.String mIndex, java.lang.String fileName)`<br>set name of the data source file |
| `void` | `setIntArrayMemberValue(java.lang.String mIndex, int[] index, int value)`<br>sets the value of an integer array member |
| `void` | `setIntArrayMemberValue(java.lang.String mIndex, int index, int value)`<br>sets the value of an 1D integer array member |
| `void` | `setIntMemberValue(java.lang.String mIndex, int value)`<br>sets the value of an integer member |
| `void` | `setIsBinary(java.lang.String mIndex, boolean isBinary)`<br>set binary flag for a file member |
| `void` | `setMember(java.lang.String mIndex, java.lang.String value, java.lang.String type)`<br>sets the value of a member. |
| `void` | `setMemberDescription(java.lang.String mIndex, java.lang.String description)`<br>set description of the member |
| `void` | `setMemberDimensions(java.lang.String mIndex, int[] dims)`<br>set dimensions of an array member |
| `void` | `setMemberEnumAliases(java.lang.String mIndex, java.lang.String enumAliases)`<br>set enum aliases of the member |
| `void` | `setMemberEnumValues(java.lang.String mIndex, java.lang.String enumValues)`<br>set enum values of the member |
| `void` | `setMemberLength(java.lang.String mIndex, int length)`<br>set length of an 1D array member |
| `void` | `setMemberLength(java.lang.String mIndex, int length, int dimension)`<br>set length of an array member |
| `void` | `setMemberLowerBound(java.lang.String mIndex, java.lang.String lowerBound)`<br>set lowerBound of the member |
| `void` | `setMemberProperty(java.lang.String mIndex, java.lang.String propertyName, java.lang.String propertyValue)`<br>set value of a property of the member |
| `void` | `setMemberUnits(java.lang.String mIndex, java.lang.String units)`<br>set units of the member |
| `void` | `setMemberUpperBound(java.lang.String mIndex, java.lang.String upperBound)`<br>set upperBound of the member |
| `void` | `setMemberValueFromString(java.lang.String mIndex, java.lang.String value)`<br>sets the value of a member from string |
| `void` | `setStringArrayMemberValue(java.lang.String mIndex, int[] index, java.lang.String value)`<br>sets the value of a string array member |
| `void` | `setStringArrayMemberValue(java.lang.String mIndex, int index, java.lang.String value)`<br>sets the value of a 1D string array member |
| `void` | `setStringMemberValue(java.lang.String mIndex, java.lang.String value)`<br>sets the value of a string member |
| `void` | `toFile(java.lang.String mIndex)`<br>write a file member to a file file name must have been specified |
| `void` | `toFile(java.lang.String mIndex, java.lang.String fileName)`<br>write a file member to a file |
| `java.lang.String` | `toString()`<br>get XML representation of the object variable |
| `PHXStringBuffer` | `toString2()`<br>converts the variable to a PHXStringBuffer |
| `java.lang.String` | `toXML()`<br>get XML representation of the object |

### Methods inherited from class com.phoenix_int.aserver.types.[PHXSimpleType](PHXSimpleType.md)
`_copyMetadataFromOther`, `addPropertyChangeListener`, `getDescription`, `getEnumTokens`, `getHasChanged`, `getUnits`, `removePropertyChangeListener`, `setDescription`, `setHasChanged`, `setUnits`

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`
### Constructor Detail

#### PHXScriptObject

```
public PHXScriptObject()
```
Creates a new instance of PHXScriptObject

### Method Detail

#### initialize

```
public void initialize(com.phoenix_int.object.PHXDataObjectClass pClass)
                throws java.io.IOException
```
initialize object variable with the specified class

**Parameters:**
- `pClass` - class information

**Throws:**
- `java.io.IOException`

#### toString

```
public java.lang.String toString()
```
get XML representation of the object variable

**Specified by:**
- `toString` in interface [`IPHXType`](IPHXType.md)

**Overrides:**
- `toString` in class `java.lang.Object`

**Returns:**
- XML string

#### fromString

```
public void fromString(java.lang.String value)
```
update object using the XML value

**Parameters:**
- `value` - XML string for the object

#### toString2

```
public PHXStringBuffer toString2()
```
converts the variable to a PHXStringBuffer

**Returns:**
- the PHXStringBuffer representation of the variable

#### fromString2

```
public void fromString2(PHXStringBuffer value)
```
update object using the XML value

**Parameters:**
- `value` - the value to convert

#### getClassURL

```
public java.lang.String getClassURL()
```
get the class type. The class type is defined in a URL format

**Returns:**
- class type

#### getMemberValueAsString

```
public java.lang.String getMemberValueAsString(java.lang.String mIndex)
```
gets the value of a member as a string

**Parameters:**
- `mIndex` - member index (e.g., `member1, grp1.member1, member1[1], member1[1,2]`)

**Returns:**
- the value of the variable

#### getDoubleMemberValue

```
public double getDoubleMemberValue(java.lang.String mIndex)
```
gets the value of a double member

**Parameters:**
- `mIndex` - member index

**Returns:**
- the value of the variable

#### getIntMemberValue

```
public int getIntMemberValue(java.lang.String mIndex)
```
gets the value of an integer member

**Parameters:**
- `mIndex` - member index

**Returns:**
- the value of the variable

#### getBooleanMemberValue

```
public boolean getBooleanMemberValue(java.lang.String mIndex)
```
gets the value of boolean member

**Parameters:**
- `mIndex` - member index

**Returns:**
- the value of the variable

#### getStringMemberValue

```
public java.lang.String getStringMemberValue(java.lang.String mIndex)
```
gets the value of string member

**Parameters:**
- `mIndex` - member index

**Returns:**
- the value of the variable

#### getDoubleArrayMemberValue

```
public double getDoubleArrayMemberValue(java.lang.String mIndex,
                                        int index)
```
get the value of an 1D double array element

**Parameters:**
- `mIndex` - member index

**Returns:**
- the value of the variable

#### getDoubleArrayMemberValue

```
public double getDoubleArrayMemberValue(java.lang.String mIndex,
                                        int[] index)
```
get the value of a double array element

**Parameters:**
- `mIndex` - member index
- `index` - array index

**Returns:**
- the value of the variable

#### getIntArrayMemberValue

```
public int getIntArrayMemberValue(java.lang.String mIndex,
                                  int index)
```
get the value of an 1D integer array element

**Parameters:**
- `mIndex` - member index
- `index` - array index

**Returns:**
- the value of the variable

#### getIntArrayMemberValue

```
public int getIntArrayMemberValue(java.lang.String mIndex,
                                  int[] index)
```
get the value of an integer array element

**Parameters:**
- `mIndex` - member index
- `index` - array index

**Returns:**
- the value of the variable

#### getBooleanArrayMemberValue

```
public boolean getBooleanArrayMemberValue(java.lang.String mIndex,
                                          int index)
```
get the value of an 1D boolean array element

**Parameters:**
- `mIndex` - member index
- `index` - array index

**Returns:**
- the value of the variable

#### getBooleanArrayMemberValue

```
public boolean getBooleanArrayMemberValue(java.lang.String mIndex,
                                          int[] index)
```
get the value of a boolean array element

**Parameters:**
- `mIndex` - member index
- `index` - array index

**Returns:**
- the value of the variable

#### getStringArrayMemberValue

```
public java.lang.String getStringArrayMemberValue(java.lang.String mIndex,
                                                  int index)
```
get the value of an 1D String array element

**Parameters:**
- `mIndex` - member index
- `index` - array index

**Returns:**
- the value of the variable

#### getStringArrayMemberValue

```
public java.lang.String getStringArrayMemberValue(java.lang.String mIndex,
                                                  int[] index)
```
get the value of a string array element

**Parameters:**
- `mIndex` - member index
- `index` - array index

**Returns:**
- the value of the variable

#### setMemberValueFromString

```
public void setMemberValueFromString(java.lang.String mIndex,
                                     java.lang.String value)
```
sets the value of a member from string

**Parameters:**
- `mIndex` - member index
- `value` - the value of the member

#### setDoubleMemberValue

```
public void setDoubleMemberValue(java.lang.String mIndex,
                                 double value)
```
sets the value of a double member

**Parameters:**
- `mIndex` - member index
- `value` - value of the member

#### setIntMemberValue

```
public void setIntMemberValue(java.lang.String mIndex,
                              int value)
```
sets the value of an integer member

**Parameters:**
- `mIndex` - member index
- `value` - value of the member

#### setBooleanMemberValue

```
public void setBooleanMemberValue(java.lang.String mIndex,
                                  boolean value)
```
sets the value of a boolean member

**Parameters:**
- `mIndex` - member index
- `value` - value of the member

#### setStringMemberValue

```
public void setStringMemberValue(java.lang.String mIndex,
                                 java.lang.String value)
```
sets the value of a string member

**Parameters:**
- `mIndex` - member index
- `value` - value of the member

#### setDoubleArrayMemberValue

```
public void setDoubleArrayMemberValue(java.lang.String mIndex,
                                      int index,
                                      double value)
```
sets the value of a 1D double array member

**Parameters:**
- `mIndex` - member index
- `index` - array index
- `value` - value of the member

#### setDoubleArrayMemberValue

```
public void setDoubleArrayMemberValue(java.lang.String mIndex,
                                      int[] index,
                                      double value)
```
sets the value of a double array member

**Parameters:**
- `mIndex` - member index
- `index` - array index
- `value` - value of the member

#### setIntArrayMemberValue

```
public void setIntArrayMemberValue(java.lang.String mIndex,
                                   int index,
                                   int value)
```
sets the value of an 1D integer array member

**Parameters:**
- `mIndex` - member index
- `index` - array index
- `value` - value of the member

#### setIntArrayMemberValue

```
public void setIntArrayMemberValue(java.lang.String mIndex,
                                   int[] index,
                                   int value)
```
sets the value of an integer array member

**Parameters:**
- `mIndex` - member index
- `index` - array index
- `value` - value of the member

#### setBooleanArrayMemberValue

```
public void setBooleanArrayMemberValue(java.lang.String mIndex,
                                       int index,
                                       boolean value)
```
sets the value of an 1D boolean array member

**Parameters:**
- `mIndex` - member index
- `index` - array index
- `value` - value of the member

#### setBooleanArrayMemberValue

```
public void setBooleanArrayMemberValue(java.lang.String mIndex,
                                       int[] index,
                                       boolean value)
```
sets the value of a boolean array member

**Parameters:**
- `mIndex` - member index
- `index` - array index
- `value` - value of the member

#### setStringArrayMemberValue

```
public void setStringArrayMemberValue(java.lang.String mIndex,
                                      int index,
                                      java.lang.String value)
```
sets the value of a 1D string array member

**Parameters:**
- `mIndex` - member index
- `index` - array index
- `value` - value of the member

#### setStringArrayMemberValue

```
public void setStringArrayMemberValue(java.lang.String mIndex,
                                      int[] index,
                                      java.lang.String value)
```
sets the value of a string array member

**Parameters:**
- `mIndex` - member index
- `index` - array index
- `value` - value of the member

#### setMember

```
public void setMember(java.lang.String mIndex,
                      java.lang.String value,
                      java.lang.String type)
```
sets the value of a member. A new member will be create if the member does not exist or the current type is not the same as the type specified.

**Parameters:**
- `mIndex` - member index
- `value` - the value of the member
- `type` - type of the member

#### deleteMember

```
public void deleteMember(java.lang.String mIndex)
```
delete a member for non-strict type object. An exception will be thrown for strict types

**Parameters:**
- `mIndex` - member index

#### deleteAllMembers

```
public void deleteAllMembers()
```
delete all members for non-strict type object. An exception will be thrown for strict types

#### callMethod

```
public java.lang.Object callMethod(java.lang.String method)
```
call a method

**Parameters:**
- `method` - name of the method

**Returns:**
- primitives object (e.g., `java.lang.Double`) or array of primitives (e.g., `double[]`)

#### isNonStrictType

```
public boolean isNonStrictType()
```
check whether a class is a non-strict type

**Returns:**
- true if the class is a non-strict type

#### toXML

```
public java.lang.String toXML()
```
get XML representation of the object

**Returns:**
- XML representation of the object

#### fromXML

```
public void fromXML(java.lang.String xmlStr)
```
update the object from an XML string

**Parameters:**
- `xmlStr` - content of an object in XML format

#### hasMember

```
public boolean hasMember(java.lang.String mIndex)
```
check if a member exists

**Parameters:**
- `mIndex` - member name

**Returns:**
- `true` if the member exists

#### getMemberLength

```
public int getMemberLength(java.lang.String mIndex,
                           int dimension)
```
get length of an array member

**Parameters:**
- `mIndex` - name of the member
- `dimension` - dimension id of the array member

**Returns:**
- length of the array member

#### getMemberLength

```
public int getMemberLength(java.lang.String mIndex)
```
get length of an 1D array member

**Parameters:**
- `mIndex` - name of the member

**Returns:**
- length of the array member

#### setMemberLength

```
public void setMemberLength(java.lang.String mIndex,
                            int length,
                            int dimension)
```
set length of an array member

**Parameters:**
- `mIndex` - name of the member
- `length` - of the array
- `dimension` - dimension id of the array member

#### setMemberLength

```
public void setMemberLength(java.lang.String mIndex,
                            int length)
```
set length of an 1D array member

**Parameters:**
- `mIndex` - name of the member
- `length` - of the array

#### setMemberDimensions

```
public void setMemberDimensions(java.lang.String mIndex,
                                int[] dims)
```
set dimensions of an array member

**Parameters:**
- `mIndex` - name of the member
- `dims` - length of the array

#### getMemberNumDimensions

```
public int getMemberNumDimensions(java.lang.String mIndex)
```
get number of dimensions of an array member

**Parameters:**
- `mIndex` - name of the member

#### getMemberDimensions

```
public int[] getMemberDimensions(java.lang.String mIndex)
```
get dimensions and size of an array member

**Parameters:**
- `mIndex` - name of the member

#### getMemberList

```
public java.lang.String[] getMemberList(java.lang.String mIndex)
```
get a list of child members.

**Parameters:**
- `mIndex` - name of the parent member

**Returns:**
- String array of child names

#### getMemberType

```
public java.lang.String getMemberType(java.lang.String mIndex)
```
return type of the member

**Parameters:**
- `mIndex` - name of the member

#### getMethodList

```
public java.lang.String[] getMethodList()
```
get a list of methods

**Returns:**
- String array of methods

#### hasMemberLowerBound

```
public boolean hasMemberLowerBound(java.lang.String mIndex)
```
check if a member has lower bound defined

**Parameters:**
- `mIndex` - name of the member

**Returns:**
- `true` if the member has lower bound defined

#### hasMemberUpperBound

```
public boolean hasMemberUpperBound(java.lang.String mIndex)
```
check if a member has upper bound defined

**Parameters:**
- `mIndex` - name of the member

**Returns:**
- `true` if the member has upper bound defined

#### getMemberLowerBound

```
public java.lang.String getMemberLowerBound(java.lang.String mIndex)
```
get `lowerBound` of a member

**Parameters:**
- `mIndex` - name of the member

**Returns:**
- lowerBound of the member

#### setMemberLowerBound

```
public void setMemberLowerBound(java.lang.String mIndex,
                                java.lang.String lowerBound)
```
set `lowerBound` of the member

**Parameters:**
- `mIndex` - name of the member
- `lowerBound` - lower bound

#### getMemberUpperBound

```
public java.lang.String getMemberUpperBound(java.lang.String mIndex)
```
return `upperBound` of the member

**Parameters:**
- `mIndex` - name of the member

#### setMemberUpperBound

```
public void setMemberUpperBound(java.lang.String mIndex,
                                java.lang.String upperBound)
```
set `upperBound` of the member

**Parameters:**
- `mIndex` - name of the member
- `upperBound` - upper bound

#### getMemberEnumValues

```
public java.lang.String getMemberEnumValues(java.lang.String mIndex)
```
return enum values of the member

**Parameters:**
- `mIndex` - name of the member

**Returns:**
- enum values of the member as a comma separated string

#### setMemberEnumValues

```
public void setMemberEnumValues(java.lang.String mIndex,
                                java.lang.String enumValues)
```
set enum values of the member

**Parameters:**
- `mIndex` - name of the member
- `enumValues` - enumerated values as a comma separated string

#### getMemberEnumAliases

```
public java.lang.String getMemberEnumAliases(java.lang.String mIndex)
```
get enum aliases of the member

**Parameters:**
- `mIndex` - name of the member

**Returns:**
- enum aliases of the member as a comma separated string

#### setMemberEnumAliases

```
public void setMemberEnumAliases(java.lang.String mIndex,
                                 java.lang.String enumAliases)
```
set enum aliases of the member

**Parameters:**
- `mIndex` - name of the member
- `enumAliases` - enumerated aliases as a comma separated string

#### getMemberDescription

```
public java.lang.String getMemberDescription(java.lang.String mIndex)
```
get description of the member

**Parameters:**
- `mIndex` - name of the member

**Returns:**
- description of the member

#### setMemberDescription

```
public void setMemberDescription(java.lang.String mIndex,
                                 java.lang.String description)
```
set description of the member

**Parameters:**
- `mIndex` - name of the member
- `description` -

#### getMemberUnits

```
public java.lang.String getMemberUnits(java.lang.String mIndex)
```
get units of the member

**Parameters:**
- `mIndex` - name of the member

**Returns:**
- units of the member

#### setMemberUnits

```
public void setMemberUnits(java.lang.String mIndex,
                           java.lang.String units)
```
set units of the member

**Parameters:**
- `mIndex` - name of the member
- `units` -

#### getMemberProperty

```
public java.lang.String getMemberProperty(java.lang.String mIndex,
                                          java.lang.String propertyName)
```
get value of a property of the member

**Parameters:**
- `mIndex` - name of the member
- `propertyName` - name of the property

**Returns:**
- value of a property of the member

#### setMemberProperty

```
public void setMemberProperty(java.lang.String mIndex,
                              java.lang.String propertyName,
                              java.lang.String propertyValue)
```
set value of a property of the member

**Parameters:**
- `mIndex` - name of the member
- `propertyName` - name of the property
- `propertyValue` - value of the property

#### fromFile

```
public void fromFile(java.lang.String mIndex,
                     java.lang.String fileName)
```
load a file into a file member

**Parameters:**
- `mIndex` - name of the member
- `fileName` - source file name

#### fromFile

```
public void fromFile(java.lang.String mIndex)
```
load a file into a file member. The file name must have been specified by `setFileName`.

**Parameters:**
- `mIndex` - name of the member

#### toFile

```
public void toFile(java.lang.String mIndex,
                   java.lang.String fileName)
```
write a file member to a file

**Parameters:**
- `mIndex` - name of the member
- `fileName` - destination file name

#### toFile

```
public void toFile(java.lang.String mIndex)
```
write a file member to a file. File name must have been specified

**Parameters:**
- `mIndex` - name of the member

#### getIsBinary

```
public boolean getIsBinary(java.lang.String mIndex)
```
return true if the file member contains a binary file

**Parameters:**
- `mIndex` - name of the member

#### setIsBinary

```
public void setIsBinary(java.lang.String mIndex,
                        boolean isBinary)
```
set binary flag for a file member

**Parameters:**
- `mIndex` - name of the member
- `isBinary` - binary flag

#### getFileName

```
public java.lang.String getFileName(java.lang.String mIndex)
```
return name of the data source file

**Parameters:**
- `mIndex` - name of the member

#### setFileName

```
public void setFileName(java.lang.String mIndex,
                        java.lang.String fileName)
```
set name of the data source file

**Parameters:**
- `mIndex` - name of the member
- `fileName` - file name

#### setFileExtension

```
public void setFileExtension(java.lang.String mIndex,
                             java.lang.String fileExtension)
```
set file extesion of the data source file

**Parameters:**
- `mIndex` - name of the member
- `fileExtension` - file extension

#### setBaseName

```
public void setBaseName(java.lang.String mIndex,
                        java.lang.String baseName)
```
set base name for the data source file

**Parameters:**
- `mIndex` - name of the member
- `baseName` - the new base name

#### getInternalObject

```
public java.lang.Object getInternalObject()
```
get internal Java object that represent the data

**Returns:**
- internal Java object that represent the actual data

#### equalsNatural

```
public boolean equalsNatural(PHXSimpleType toCompare)
                      throws PHXTypeMismatchException
```
Compare this PHXSimpleType to another PHXSimpleType. This type of comparison is different than `Comparable` in that it does a natural comparison between numbers. It is not designed, nor suited, for use in things such as sets, and may behave oddly if put in those circumstances.

**Specified by:**
- `equalsNatural` in class [`PHXSimpleType`](PHXSimpleType.md)

**Parameters:**
- `toCompare` -

**Returns:**
- a negative number if this object is less than `toCompare`, a positive number if this object is greater than `toCompare`, and zero if these two objects are equal.

**Throws:**
- `PHXTypeMismatchException` - if the given PHXSimpleType cannot be compared with this object.

#### fromObject

```
public void fromObject(java.lang.Object toRead)
                throws PHXInvalidTypeException
```
Load the value of this object from the specified object. This will read the object and attempt to convert it if it is a known type. If the type isn't recognized, it will throw a [PHXInvalidTypeException](PHXInvalidTypeException.md). If there is an error in conversion, it will also throw a [PHXInvalidTypeException](PHXInvalidTypeException.md)

 NOTE: while it might be logical to think you can create a `PHX(Type)Array` from, say, an array of `java.lang.(Type)`, that is not currently supported. You MUST use the PHX string array formatting style.

**Specified by:**
- `fromObject` in class [`PHXSimpleType`](PHXSimpleType.md)

**Parameters:**
- `toRead` - to object from which to load this objects value.

**Throws:**
- [`PHXInvalidTypeException`](PHXInvalidTypeException.md)- if the specified object is of an invalid type or there is an error in conversion.

#### Accept

```
public <T> T Accept(IPHXType2.IVisitor<T> visitor)
```
Accept a Visitor.

**Type Parameters:**
- `T` - Type of the result of the visit.

**Parameters:**
- `visitor` - The visitor to accept.

**Returns:**
- The results of the visit.

#### createCopy

```
public PHXSimpleType createCopy()
```
Create a copy of this instance, including the value and metadata.

**Specified by:**
- `createCopy` in class [`PHXSimpleType`](PHXSimpleType.md)

**Returns:**
- a newly constructed copy of this instance.
