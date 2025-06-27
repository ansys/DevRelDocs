# Class: PHXComponentVersion

**Package:** `com.phoenix_int.aserver`

**Class Hierarchy**
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.PHXComponentVersion
```

**Declaration**
```java
public class PHXComponentVersion
extends java.lang.Object
```

This class represents a version on a revision history tree for a version controlled component. Includes functionality for reading/writing XML version descriptions.

## Constructor Summary
| Constructor and Description |
|----------------------------|
| `PHXComponentVersion(org.w3c.dom.Element versionNode)`<br>Constructs a version based on information in an XML Element |
| `PHXComponentVersion(java.lang.String name)`<br>Constructs a version with a given name |
| `PHXComponentVersion(java.lang.String name, java.lang.String author, java.lang.String description, java.util.Date date)`<br>Constructs a version with the specified meta data |

## Method Summary
| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `addBranch(PHXComponentBranch b)`<br>Adds a sub-branch to this version. |
| `java.lang.String` | `getAuthor()`<br>Gets the version author |
| `PHXComponentBranch` | `getBranch(int i)`<br>Returns the i'th sub-branch |
| `java.util.Iterator` | `getBranches()`<br>Returns an Iterator over the sub-branches |
| `java.util.Date` | `getDate()`<br>Gets the version date |
| `java.lang.String` | `getDescription()`<br>Gets the version description |
| `java.lang.String` | `getName()`<br>Gets the version name |
| `int` | `getNumBranches()`<br>Gets the number of sub-branches |
| `PHXComponentBranch` | `getParent()`<br>Gets our parent branch |
| `void` | `setAuthor(java.lang.String author)`<br>Sets the version author |
| `void` | `setDate(java.util.Date date)`<br>Sets the version date |
| `void` | `setDescription(java.lang.String description)`<br>Sets the version description |
| `void` | `setName(java.lang.String name)`<br>Sets the version name |

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXComponentVersion
```java
public PHXComponentVersion(java.lang.String name)
```
Constructs a version with a given name

### PHXComponentVersion
```java
public PHXComponentVersion(java.lang.String name, java.lang.String author, java.lang.String description, java.util.Date date)
```
Constructs a version with the specified meta data
**Parameters:**
- `name` - The version name
- `author` - The version author
- `description` - The version description
- `date` - The date of the version

### PHXComponentVersion
```java
public PHXComponentVersion(org.w3c.dom.Element versionNode)
        throws java.io.IOException
```
Constructs a version based on information in an XML Element

**Throws:**
- `java.io.IOException`