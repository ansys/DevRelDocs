# Class: PHXGroup

**Package:** `com.phoenix_int.aserver`

**Class Hierarchy**
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.PHXGroup
```

**Declaration**
```
public class PHXGroup
extends java.lang.Object
```

A utility class for holding sub-variables. Internally used to manage groups of variables within the [`PHXSimpleSelfManager`](PHXSimpleSelfManager.md) class. To create your own groups, use the [`PHXSimpleSelfManager.addVariable`](PHXSimpleSelfManager.md) function.

**See Also:**
- [`PHXSimpleSelfManager`](PHXSimpleSelfManager.md)

## Constructor Summary
| Constructor and Description |
|----------------------------|
| `PHXGroup(java.lang.String name)` |

## Method Summary
| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `addGroup(PHXGroup group)`<br>Adds a child group to the group |
| `void` | `addVariable(PHXVariableInfo varInfo)`<br>Stores a variable in the group. |
| `boolean` | `contains(PHXVariableInfo varInfo)`<br>Checks to see if a variable exists in this group |
| `boolean` | `contains(java.lang.String varName)`<br>Checks to see if a variable exists in this group. |
| [`PHXGroup`](PHXGroup.md) | `getGroup(java.lang.String childName)`<br>Retrieves a child group. |
| [`PHXGroup`](PHXGroup.md) | `getGroup2(java.lang.String childName)`<br>Retrieves a child group. |
| `java.util.Enumeration` | `getGroups()`<br>Retrieves the Enumeration of subgroups in the group. |
| `java.util.Iterator<PHXGroup>` | `getGroups2()`<br>Retrieves all the subgroups in the group |
| `java.lang.String` | `getName()`<br>Retrieves the name of the group |
| `int` | `getNumGroups()`<br>Retrieves the number of subgroups in the group. |
| `int` | `getNumVariables()`<br>Retrieves the number of variables in the group. |
| [`PHXVariableInfo`](PHXVariableInfo.md) | `getVariableInfo(java.lang.String varName)`<br>Retrieves a variable from the group. |
| [`PHXVariableInfo`](PHXVariableInfo.md) | `getVariableInfo2(java.lang.String varName)`<br>Retrieves a variable from the group. |
| `java.util.Enumeration` | `getVariables()`<br>Retrieves the Enumeration of variables in the group. |
| `java.util.Iterator<PHXVariableInfo>` | `getVariables2()`<br>Retrieves all of the variables in the group. |
| [`PHXGroup`](PHXGroup.md) | `makeGroup(java.lang.String childName)`<br>Creates a child group. |
| `void` | `removeAllGroups()`<br>Removes all groups from the group |
| `void` | `removeAllVariables()`<br>Removes all variables from the group |
| `void` | `removeGroup(java.lang.String childName)`<br>Removes a child group. |
| `void` | `removeVariable(PHXVariableInfo varInfo)`<br>Removes a variable |
| `java.lang.String` | `toString()`<br>Converts this to a string |

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXGroup
```
public PHXGroup(java.lang.String name)
         throws PHXInvalidNameException
```

**Parameters:**
- `name` - the name of the group

**Throws:**
- `PHXInvalidNameException`

## Method Detail

### getName
```
public java.lang.String getName()
```
retrieves the name of the group

**Returns:**
- the name of the group

### addGroup
```
public void addGroup(PHXGroup group)
              throws PHXNameAlreadyInUseException,
                     PHXInvalidNameException
```
adds a child group to the group

**Parameters:**
- `group`- the child group

**Throws:**
- PHXNameAlreadyInUseException
- PHXInvalidNameException

### getGroup
```
public PHXGroup getGroup(java.lang.String childName)
                  throws PHXNoSuchObjectException
```
retrieves a child group.

**Parameters:**
- `childName`- the name of the child group

**Returns:**
- the child group

**Throws:**
- `PHXNoSuchObjectException` - thrown if the child group is not found

### getGroup2
```
public PHXGroup getGroup2(java.lang.String childName)
```
retrieves a child group. Does not throw an exception on failure.

**Parameters:**
- `childName`- the name of the child group

**Returns:**
- the child group. Returns null on failure

### makeGroup
```
public PHXGroup makeGroup(java.lang.String childName)
                   throws PHXNameAlreadyInUseException,
                          PHXInvalidNameException
```
creates a child group. If the group already exists, it is retrieved

**Parameters:**
- `childName`- the name of the child group

**Returns:**
- the child group

**Throws:**
- `PHXNameAlreadyInUseException`
- `PHXInvalidNameException`

### removeGroup
```
public void removeGroup(java.lang.String childName)
                 throws java.lang.Exception
```
remove a child group. If the group doesn't exist, it just returns

**Parameters:**
- `childName`- the name of the child group

**Throws:**
- `java.lang.Exception`

### getNumGroups
```
public int getNumGroups()
```
retrieves the number of subgroups in the group.

**Returns:**
- the number of subgroups

### getGroups
```
public java.util.Enumeration getGroups()
```
retrieves the Enumeration of subgroups in the group.

**Returns:**
- an Enumeration of [`PHXGroup`](PHXGroup.md) objects

### getGroups2
```
public java.util.Iterator<PHXGroup> getGroups2()
```
retrieves all the subgroups in the group

**Returns:**
- an Iterator of all the [`PHXGroup`](PHXGroup.md) objects.

### addVariable
```
public void addVariable(PHXVariableInfo varInfo)
                 throws PHXNameAlreadyInUseException,
                        PHXInvalidNameException
```
stores a variable in the group.

**Parameters:**
- `varInfo`- the variable info structure

**Throws:**
- [`PHXNameAlreadyInUseException`](PHXNameAlreadyInUseException.md)
- [`PHXInvalidNameException`](PHXInvalidNameException.md)

### getVariableInfo
```
public PHXVariableInfo getVariableInfo(java.lang.String varName)
                                throws PHXNoSuchObjectException
```
retrieves a variable from the group.

**Parameters:**
- `varName`- the name of the variable to get

**Returns:**
- the variable info structure

**Throws:**
- [`PHXNoSuchObjectException`](PHXNoSuchObjectException.md) - thrown if the specified variable is not found

### getVariableInfo2
```
public PHXVariableInfo getVariableInfo2(java.lang.String varName)
```
retrieves a variable from the group. Does not throw an Exception on failure.

**Parameters:**
- `varName`- the name of the variable to get

**Returns:**
- the variable info structure, or null if not found

### contains
```
public boolean contains(PHXVariableInfo varInfo)
```
checks to see if a variable exists in this group

**Parameters:**
- `varInfo`- the variable to check, must be an exact match (not just name)

**Returns:**
- true if the variable is in this group

### contains
```
public boolean contains(java.lang.String varName)
```
Checks to see if a variable exists in this group.

**Parameters:**
- `varName`- the name of the variable to check.

**Returns:**
- true if the variable is in this group.

### getNumVariables
```
public int getNumVariables()
```
retrieves the number of variables in the group.

**Returns:**
- the number of variables

### getVariables
```
public java.util.Enumeration getVariables()
```
retrieves the Enumeration of variables in the group.

**Returns:**
- an Enumeration of [`PHXVariableInfo`](PHXVariableInfo.md) objects

### getVariables2
```
public java.util.Iterator<PHXVariableInfo> getVariables2()
```
retrieves all of the variables in the group.

**Returns:**
- an Iterator of all the [`PHXVariableInfo`](PHXVariableInfo.md) objects

### removeAllVariables
```
public void removeAllVariables()
```
removes all variables from the group

### removeAllGroups
```
public void removeAllGroups()
```
remove all groups from the group

### removeVariable
```
public void removeVariable(PHXVariableInfo varInfo)
```
removes a variable

**Parameters:**
- `varInfo`- the variable structure to remove

### toString
```
public java.lang.String toString()
```
Converts this to a string

**Overrides:**
- `toString` in class `java.lang.Object`

**Returns:**
- the string "Group: " with the name of the group appended.