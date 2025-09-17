# PHXScriptObject

## @PHXClassDecorator(PHXTException_Decorator)
## class PHXScriptObject(PHXSimpleType)

The ModelCenter type for object variable. This class adds the following features to the [`PHXSimpleType`](PHXSimpleType.md):

- `className`: string

 
#### `def __init__(self, varName)`

Create a data object.

The internal script object still needs to be initialized via initialize method

- `@param varName`: the name of the variable already declared in the wrapper to reference
- `@type varName`: string
- `@rtype`: void

```python
varName = checkIsInstance(varName, str)
self.mcName = varName
```
 
#### `def toString(self)`

converts the variable to a string

- `@rtype`: string

```python
return phxPython.objToString(self.mcName)
```
 
#### `def fromString(self, val)`

converts a String representation to the internal value

- `@param val`: the value to convert
- `@type val`: string
- `@rtype`: void

```python
val = checkIsInstance(val, str)
phxPython.objFromString(self.mcName, val)
```
 
#### `def getClassURL(self)`

return the class URL

- `@rtype`: string

```python
return phxPython.objGetClassURL(self.mcName)
```
 
#### `def getMemberValueAsString(self, mIndex)`

return member value

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@rtype`: string

```python
mIndex = checkIsInstance(mIndex, str)
return phxPython.objGetMemberValueAsString(self.mcName, mIndex)
```
 
#### `def getDoubleMemberValue(self, mIndex)`

return member value

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@rtype`: double

```python
mIndex = checkIsInstance(mIndex, str)
return phxPython.objGetDoubleMemberValue(self.mcName, mIndex)
```
 
#### `def getIntMemberValue(self, mIndex)`

return member value

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@rtype`: int

```python
mIndex = checkIsInstance(mIndex, str)
return phxPython.objGetIntMemberValue(self.mcName, mIndex)
```
 
#### `def getBooleanMemberValue(self, mIndex)`

return member value

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@rtype`: boolean

```python
mIndex = checkIsInstance(mIndex, str)
return phxPython.objGetBooleanMemberValue(self.mcName, mIndex)
```
 
#### `def getStringMemberValue(self, mIndex)`

return member value

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@rtype`: string

```python
mIndex = checkIsInstance(mIndex, str)
return phxPython.objGetStringMemberValue(self.mcName, mIndex)
```
 
#### `def getDoubleArrayMemberValue(self, mIndex, index)`

return member value

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param index`: Index to an array element
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@rtype`: double

```python
mIndex = checkIsInstance(mIndex, str)
return phxPython.objGetDoubleArrayMemberValue(self.mcName, mIndex, indexListToCSV(index))
```
 
#### `def getIntArrayMemberValue(self, mIndex, index)`

return member value

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param index`: Index to an array element
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@rtype`: int

```python
mIndex = checkIsInstance(mIndex, str)
return phxPython.objGetIntArrayMemberValue(self.mcName, mIndex, indexListToCSV(index))
```
 
#### `def getBooleanArrayMemberValue(self, mIndex, index)`

return member value

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param index`: Index to an array element
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@rtype`: boolean

```python
mIndex = checkIsInstance(mIndex, str)
return phxPython.objGetBooleanArrayMemberValue(self.mcName, mIndex, indexListToCSV(index))
```
 
#### `def getStringArrayMemberValue(self, mIndex, index)`

return member value

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param index`: Index to an array element
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@rtype`: string

```python
mIndex = checkIsInstance(mIndex, str)
return phxPython.objGetStringArrayMemberValue(self.mcName, mIndex, indexListToCSV(index))
```
 
#### `def setMemberValueFromString(self, mIndex, value)`

set value of a member

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param value`: value of the member
- `@type value`: string
- `@rtype`: void

```python
mIndex = checkIsInstance(mIndex, str)
value = checkIsInstance(value, str)
phxPython.objSetMemberValueFromString(self.mcName, mIndex, value)
```
 
#### `def setDoubleMemberValue(self, mIndex, value)`

set value of a double member

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param value`: value of the member
- `@type value`: double
- `@rtype`: void

```python
mIndex = checkIsInstance(mIndex, str)
value = checkIsInstance(value, float)
phxPython.objSetDoubleMemberValue(self.mcName, mIndex, value)
```
 
#### `def setIntMemberValue(self, mIndex, value)`

set value of a double member

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param value`: value of the member
- `@type value`: int
- `@rtype`: void

```python
mIndex = checkIsInstance(mIndex, str)
value = checkIsInstance(value, int)
phxPython.objSetIntMemberValue(self.mcName, mIndex, value)
```
 
#### `def setBooleanMemberValue(self, mIndex, value)`

set value of a double member

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param value`: value of the member
- `@type value`: boolean
- `@rtype`: void

```python
mIndex = checkIsInstance(mIndex, str)
value = checkIsInstance(value, bool)
phxPython.objSetBooleanMemberValue(self.mcName, mIndex, value)
```
 
#### `def setStringMemberValue(self, mIndex, value)`

set value of a double member

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param value`: value of the member
- `@type value`: string
- `@rtype`: void

```python
mIndex = checkIsInstance(mIndex, str)
value = checkIsInstance(value, str)
phxPython.objSetStringMemberValue(self.mcName, mIndex, value)
```
 
#### `def setDoubleArrayMemberValue(self, mIndex, index, value)`

set value of a double member

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param index`: Index to an array element
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@param value`: value of the member
- `@type value`: double
- `@rtype`: void

```python
mIndex = checkIsInstance(mIndex, str)
value = checkIsInstance(value, float)
phxPython.objSetDoubleArrayMemberValue(
self.mcName, mIndex, indexListToCSV(index), value)
```
 
#### `def setIntArrayMemberValue(self, mIndex, index, value)`

set value of a double member

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param index`: Index to an array element
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@param value`: value of the member
- `@type value`: int
- `@rtype`: void

```python
mIndex = checkIsInstance(mIndex, str)
value = checkIsInstance(value, int)
phxPython.objSetIntArrayMemberValue(
self.mcName, mIndex, indexListToCSV(index), value)
```
 
#### `def setBooleanArrayMemberValue(self, mIndex, index, value)`

set value of a double member

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param index`: Index to an array element
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@param value`: value of the member
- `@type value`: boolean
- `@rtype`: void

```python
mIndex = checkIsInstance(mIndex, str)
value = checkIsInstance(value, bool)
phxPython.objSetBooleanArrayMemberValue(
self.mcName, mIndex, indexListToCSV(index), value)
```
 
#### `def setStringArrayMemberValue(self, mIndex, index, value)`

set value of a double member

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param index`: Index to an array element
- `@type index`: string (as a comma-separated list of indices), int[], or int
- `@param value`: value of the member
- `@type value`: string
- `@rtype`: void

```python
mIndex = checkIsInstance(mIndex, str)
value = checkIsInstance(value, str)
phxPython.objSetStringArrayMemberValue(
self.mcName, mIndex, indexListToCSV(index), value)
```
 
#### `def setMember(self, mIndex, value, typeStr)`

set member. Create a member if not exists.

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param value`: value of the member
- `@type value`: string
- `@param typeStr`: type of the member
- `@type typeStr`: string
- `@rtype`: void

```python
mIndex = checkIsInstance(mIndex, str)
value = checkIsInstance(value, str)
typeStr = checkIsInstance(typeStr, str)
phxPython.objSetMember(self.mcName, mIndex, value, typeStr)
```
 
#### `def deleteMember(self, mIndex)`

delete a member

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@rtype`: void

```python
mIndex = checkIsInstance(mIndex, str)
phxPython.objDeleteMember(self.mcName, mIndex)
```
 
#### `def deleteAllMembers(self)`

delete all members

- `@rtype`: void

```python
phxPython.objDeleteAllMembers(self.mcName)
```
 
#### `def callMethod(self, method)`

call an object method

- `@param method`: name of the method
- `@type method`: string
- `@rtype`: void

```python
method = checkIsInstance(method, str)
return phxPython.objCallMethod(self.mcName, method)
```
 
#### `def isNonStrictType(self)`

return true if the object is a non-strict type

- `@rtype`: bool

```python
return phxPython.objIsNonStrictType(self.mcName)
```
 
#### `def toXML(self)`

return XML representation of the object

- `@rtype`: string

```python
return phxPython.objToXML(self.mcName)
```
 
#### `def fromXML(self, xmlStr)`

set the content of the object from the XML string

- `@param xmlStr`: XML representation of object
- `@type xmlStr`: string
- `@rtype`: void

```python
xmlStr = checkIsInstance(xmlStr, str)
phxPython.objFromXML(self.mcName, xmlStr)
```
 
#### `def hasMember(self, mIndex)`

return true if the member exists

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@rtype`: bool

```python
mIndex = checkIsInstance(mIndex, str)
return phxPython.objHasMember(self.mcName, mIndex)
```
 
#### `def getMemberLength(self, mIndex, dim=0)`

return length of an ND array

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param dim`: specified dimension
- `@type dim`: int
- `@rtype`: int or list of int

```python
mIndex = checkIsInstance(mIndex, str)
dim = checkIsInstance(dim, int)
return phxPython.objGetMemberLength(self.mcName, mIndex, dim)
```
 
#### `def setMemberLength(self, mIndex, length, dim=0)`

return length of an ND array

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param length`: size of the dimension
- `@type length`: int
- `@param dim`: specified dimension
- `@type dim`: int
- `@rtype`: void

```python
mIndex = checkIsInstance(mIndex, str)
length = checkIsInstance(length, int)
dim = checkIsInstance(dim, int)
return phxPython.objSetMemberLength(self.mcName, mIndex, length, dim)
```
 
#### `def setMemberDimensions(self, mIndex, dim)`

Sets the dimensions of an array member.

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param dim`: the new dimensions for the array
- `@type dim`: int[]
- `@rtype`: void

```python
mIndex = checkIsInstance(mIndex, str)
phxPython.objSetMemberDimensions(
self.mcName, mIndex, indexListToCSV(dim))
```
 
#### `def getMemberNumDimensions(self, mIndex)`

Gets the number of dimensions of an array member

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@rtype`: int

```python
mIndex = checkIsInstance(mIndex, str)
return phxPython.objGetMemberNumDimensions(self.mcName, mIndex)
```
 
#### `def getMemberDimensions(self, mIndex)`

gets the dimensions of an array member

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@rtype`: int[]

```python
mIndex = checkIsInstance(mIndex, str)

dims = phxPython.objGetMemberDimensions(self.mcName, mIndex).split(', ')
try:
    for i in range(len(dims))`
        dims[i] = int(dims[i])
except RuntimeError:
    pass
return dims
```
 
#### `def getMemberType(self, mIndex)`

return member type

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@rtype`: string

```python
mIndex = checkIsInstance(mIndex, str)
return phxPython.objGetMemberType(self.mcName, mIndex)
```
 
#### `def hasMemberLowerBound(self, mIndex)`

return true if the member has `lowerbound` defined

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@rtype`: bool

```python
mIndex = checkIsInstance(mIndex, str)
return phxPython.objHasMemberLowerBound(self.mcName, mIndex)
```
 
#### `def hasMemberUpperBound(self, mIndex)`

return true if the member has `upperbound` defined

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@rtype`: bool

```python
mIndex = checkIsInstance(mIndex, str)
return phxPython.objHasMemberUpperBound(self.mcName, mIndex)
```
 
#### `def getMemberLowerBound(self, mIndex)`

return member's lower bound

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@rtype`: string

```python
mIndex = checkIsInstance(mIndex, str)
return phxPython.objGetMemberLowerBound(self.mcName, mIndex)
```
 
#### `def setMemberLowerBound(self, mIndex, lowerBound)`

set member's lower bound

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param lowerBound`: lower bound
- `@type lowerBound`: string
- `@rtype`: void

```python
mIndex = checkIsInstance(mIndex, str)
checkIsInstance(lowerBound, str)
phxPython.objSetMemberLowerBound(self.mcName, mIndex, lowerBound)
```
 
#### `def getMemberUpperBound(self, mIndex)`

return member's upper bound

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@rtype`: string

```python
mIndex = checkIsInstance(mIndex, str)
return phxPython.objGetMemberUpperBound(self.mcName, mIndex)
```
 
#### `def setMemberUpperBound(self, mIndex, upperBound)`

set member's upper bound

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param upperBound`: upper bound
- `@type upperBound`: string
- `@rtype`: void

```python
mIndex = checkIsInstance(mIndex, str)
upperBound = checkIsInstance(upperBound, str)
phxPython.objSetMemberUpperBound(self.mcName, mIndex, upperBound)
```
 
#### `def getMemberEnumValues(self, mIndex)`

return member's enum values

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@rtype`: string

```python
mIndex = checkIsInstance(mIndex, str)
return phxPython.objGetMemberEnumValues(self.mcName, mIndex)
```
 
#### `def setMemberEnumValues(self, mIndex, enumValues)`

set member's enum values

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param enumValues`: enum values
- `@type enumValues`: string
- `@rtype`: void

```python
mIndex = checkIsInstance(mIndex, str)
enumValues = checkIsInstance(enumValues, str)
phxPython.objSetMemberEnumValues(self.mcName, mIndex, enumValues)
```
 
#### `def getMemberEnumAliases(self, mIndex)`

return member's enum aliases

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@rtype`: string

```python
mIndex = checkIsInstance(mIndex, str)
return phxPython.objGetMemberEnumAliases(self.mcName, mIndex)
```
 
#### `def setMemberEnumAliases(self, mIndex, enumAliases)`

set member's enum aliases

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param enumAliases`: enum aliases
- `@type enumAliases`: string
- `@rtype`: void

```python
mIndex = checkIsInstance(mIndex, str)
enumAliases = checkIsInstance(enumAliases, str)
phxPython.objSetMemberEnumAliases(self.mcName, mIndex, enumAliases)
```
 
#### `def getMemberDescription(self, mIndex)`

return member's description

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@rtype`: string

```python
mIndex = checkIsInstance(mIndex, str)
return phxPython.objGetMemberDescription(self.mcName, mIndex)
```
 
#### `def setMemberDescription(self, mIndex, description)`

set member's enum aliases

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param description`: description
- `@type description`: string
- `@rtype`: void

```python
mIndex = checkIsInstance(mIndex, str)
description = checkIsInstance(description, str)
phxPython.objSetMemberDescription(self.mcName, mIndex, description)
```
 
#### `def getMemberUnits(self, mIndex)`

return member's units

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@rtype`: string

```python
mIndex = checkIsInstance(mIndex, str)
return phxPython.objGetMemberUnits(self.mcName, mIndex)
```
 
#### `def setMemberUnits(self, mIndex, units)`

set member's units

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param units`: units
- `@type units`: string
- `@rtype`: void

```python
mIndex = checkIsInstance(mIndex, str)
units = checkIsInstance(units, str)
phxPython.objSetMemberUnits(self.mcName, mIndex, units)
```
 
#### `def getMemberProperty(self, mIndex, propertyName)`

return member's property

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param propertyName`: name of the property
- `@type propertyName`: string
- `@rtype`: string

```python
mIndex = checkIsInstance(mIndex, str)
propertyName = checkIsInstance(propertyName, str)
return phxPython.objGetMemberProperty(self.mcName, mIndex, propertyName)
```
 
#### `def setMemberProperty(self, mIndex, propertyName, propertyValue)`

set member's property

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param propertyName`: property name
- `@type propertyName`: string
- `@param propertyValue`: property value
- `@type propertyValue`: string
- `@rtype`: void

```python
mIndex = checkIsInstance(mIndex, str)
propertyName = checkIsInstance(propertyName, str)
propertyValue = checkIsInstance(propertyValue, str)
phxPython.objSetMemberProperty(
self.mcName, mIndex, propertyName, propertyValue)
```
 
#### `def fromFile(self, mIndex, fileName="")`

set content of a file or file array member from a file

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param fileName`: file name
- `@rtype`: fileName`: string
- `@rtype`: void

```python
mIndex = checkIsInstance(mIndex, str)
fileName = checkIsInstance(fileName, str)
phxPython.objFromFile(self.mcName, mIndex, fileName)
```
 
#### `def toFile(self, mIndex, fileName="")`

write content of a file or file array member to a file

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param fileName`: file name
- `@rtype`: fileName`: string
- `@rtype`: void

```python
mIndex = checkIsInstance(mIndex, str)
fileName = checkIsInstance(fileName, str)
phxPython.objToFile(self.mcName, mIndex, fileName)
```
 
#### `def getIsBinary(self, mIndex)`

return `True` if the file or file array member contains a binary file

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@rtype`: boolean

```python
mIndex = checkIsInstance(mIndex, str)
return phxPython.objGetIsBinary(self.mcName, mIndex)
```
 
#### `def setIsBinary(self, mIndex, isBinary)`

set whether the file or file array member contains a binary file

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param isBinary`: whether it is a binary or not
- `@type isBinary`: boolean
- `@rtype`: void

```python
mIndex = checkIsInstance(mIndex, str)
isBinary = checkIsInstance(isBinary, bool)
phxPython.objSetIsBinary(self.mcName, mIndex, isBinary)
```
 
#### `def getFileName(self, mIndex)`

return file name of the file or file array member

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@rtype`: string

```python
mIndex = checkIsInstance(mIndex, str)
return phxPython.objGetFileName(self.mcName, mIndex)
```
 
#### `def setFileName(self, mIndex, fileName)`

set file name for file or file array member

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param fileName`: file name
- `@rtype`: fileName`: string
- `@rtype`: void

```python
mIndex = checkIsInstance(mIndex, str)
fileName = checkIsInstance(fileName, str)
phxPython.objSetFileName(self.mcName, mIndex, fileName)
```
 
#### `def setFileExtension(self, mIndex, fileExtension)`

set file extension for file or file array member

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param fileExtension`: file extension
- `@type fileExtension`: string
- `@rtype`: void

```python
mIndex = checkIsInstance(mIndex, str)
fileExtension = checkIsInstance(fileExtension, str)
phxPython.objSetFileExtension(self.mcName, mIndex, fileExtension)
```
 
#### `def setBaseName(self, mIndex, baseName)`

set base directory for file or file array member

- `@param mIndex`: index of the member
- `@type mIndex`: string
- `@param baseName`: base directory
- `@type baseName`: string
- `@rtype`: void

```python
mIndex = checkIsInstance(mIndex, str)
baseName = checkIsInstance(baseName, str)
phxPython.objSetBaseName(self.mcName, mIndex, baseName)
```
