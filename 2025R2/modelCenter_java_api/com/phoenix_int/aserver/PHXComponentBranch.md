# Class: PHXComponentBranch

**Package:** `com.phoenix_int.aserver`

**Class Hierarchy**
```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.PHXComponentBranch
```

**Declaration**
```java
public class PHXComponentBranch
extends java.lang.Object
```

This class represents a branch on a revision history tree for a version controlled component. Includes functionality for reading/writing XML branch descriptions.

## Constructor Summary
| Constructor and Description |
|----------------------------|
| `PHXComponentBranch()`<br>Constructs an empty branch |
| `PHXComponentBranch(org.w3c.dom.Element branchElement)`<br>Constructs a branch based on an XML branch node |
| `PHXComponentBranch(java.lang.String name)`<br>Constructs an empty named branch |

## Method Summary
| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `addVersion(PHXComponentVersion v)`<br>Adds a version to this branch |
| `PHXComponentBranch` | `findBranch(java.lang.String name)`<br>Finds any sub-branch that is part of any version in this branch by name |
| `PHXComponentVersion` | `findVersion(java.lang.String name)`<br>Finds a sub-version by the specified name |
| `void` | `fromXML(java.lang.String xmlString)`<br>Reads in an XML description of a branch into this object |
| `java.lang.String` | `getName()`<br>Gets the name of this branch |
| `int` | `getNumVersions()`<br>Returns how many versions there are in this branch |
| `PHXComponentVersion` | `getParent()`<br>Retrieves the parent version |
| `PHXComponentVersion` | `getVersion(int i)`<br>Gets the i'th version |
| `java.util.Iterator` | `getVersions()`<br>Returns an Iterator over the sub-versions |
| `void` | `insertVersion(PHXComponentVersion v, int location)`<br>Inserts a version to this branch at a particular location |
| `void` | `setName(java.lang.String name)`<br>Changes the branch name |
| `java.lang.String` | `toXML()`<br>Converts this branch into an XML String |

### Methods inherited from class java.lang.Object
`clone`, `equals`, `finalize`, `getClass`, `hashCode`, `notify`, `notifyAll`, `toString`, `wait`, `wait`, `wait`

## Constructor Detail

### PHXComponentBranch
```java
public PHXComponentBranch()
```
Constructs an empty branch

### PHXComponentBranch
```java
public PHXComponentBranch(java.lang.String name)
```
Constructs an empty named branch

### PHXComponentBranch
```java
public PHXComponentBranch(org.w3c.dom.Element branchElement)
        throws java.io.IOException
```
Constructs a branch based on an XML branch node

**Throws:**
- `java.io.IOException`

## Method Detail

### getParent
```java
public PHXComponentVersion getParent()
```
Retrieves the parent version

### setName
```java
public void setName(java.lang.String name)
```
Changes the branch name

### getName
```java
public java.lang.String getName()
```
Gets the name of this branch

### addVersion
```java
public void addVersion(PHXComponentVersion v)
```
Adds a version to this branch

### insertVersion
```java
public void insertVersion(PHXComponentVersion v,
                          int location)
```
Inserts a version to this branch at a particular location

### getNumVersions
```java
public int getNumVersions()
```
Returns how many versions there are in this branch

### getVersions
```java
public java.util.Iterator getVersions()
```
Returns an Iterator over the sub-versions

### getVersion
```java
public PHXComponentVersion getVersion(int i)
```
Gets the i'th version

### findVersion
```java
public PHXComponentVersion findVersion(java.lang.String name)
```
Finds a sub-version by the specified name

### findBranch
```java
public PHXComponentBranch findBranch(java.lang.String name)
```
Finds any sub-branch that is part of any version in this branch by name

### fromXML
```java
public void fromXML(java.lang.String xmlString)
             throws javax.xml.parsers.ParserConfigurationException,
                    org.xml.sax.SAXException,
                    java.io.IOException
```
Reads in an XML description of a branch into this object

**Throws:**
- `javax.xml.parsers.ParserConfigurationException`
- `org.xml.sax.SAXException`
- `java.io.IOException`

### toXML
```java
public java.lang.String toXML()
```
Converts this branch into an XML String