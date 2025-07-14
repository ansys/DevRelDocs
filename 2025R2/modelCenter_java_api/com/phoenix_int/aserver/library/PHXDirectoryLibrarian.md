# Class: PHXDirectoryLibrarian

**Package:** `com.phoenix_int.aserver.library`

**Class Hierarchy**

```
↳ java.lang.Object
  ↳ com.phoenix_int.aserver.library.PHXDirectoryLibrarian
```

**Implemented Interfaces**

- [`IPHXLibrarian`](./IPHXLibrarian.md)

---
**Declaration**

```java
public class PHXDirectoryLibrarian
extends java.lang.Object
implements IPHXLibrarian
```

This class implements a librarian that uses a directory on disk to store and retrieve files. It provides methods for adding, removing, and finding files in the directory, as well as for managing categories and associations.

## Field Summary

| Modifier and Type | Field and Description |
|-------------------|----------------------|
| `private java.io.File` | `directory`<br>The directory used by this librarian. |
| `private java.util.Map` | `categories`<br>Map of categories managed by this librarian. |

## Constructor Summary

| Constructor and Description |
|---------------------|
| `PHXDirectoryLibrarian(java.io.File directory)`  |  

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `addFile(java.io.File file)`<br>Adds a file to the directory. |
| `void` | `removeFile(java.io.File file)`<br>Removes a file from the directory. |
| `java.io.File` | `findFile(java.lang.String name)`<br>Finds a file by name. |
| `void` | `addCategory(java.lang.String category)`<br>Adds a category. |
| `void` | `removeCategory(java.lang.String category)`<br>Removes a category. |
| `java.util.List` | `listCategories()`<br>Lists all categories. |
| `void` | `addAssociation(java.lang.String key, java.lang.String value)`<br>Adds an association. |
| `void` | `removeAssociation(java.lang.String key)`<br>Removes an association. |
| `java.lang.String` | `findAssociation(java.lang.String key)`<br>Finds an association by key. |

## Field Detail

### directory

```java
private java.io.File directory
```

The directory used by this librarian.

### categories

```java
private java.util.Map categories
```

Map of categories managed by this librarian.

## Constructor Detail

### PHXDirectoryLibrarian

```java
public PHXDirectoryLibrarian(java.io.File directory)
```

**Parameters:**
- `directory` - The directory to be used by this librarian.

## Method Detail

### addFile

```java
public void addFile(java.io.File file)
```

Adds a file to the directory.

**Parameters:**
- `file` - The file to add.

### removeFile

```java
public void removeFile(java.io.File file)
```

Removes a file from the directory.

**Parameters:**
- `file` - The file to remove.

### findFile

```java
public java.io.File findFile(java.lang.String name)
```

Finds a file by name.

**Parameters:**
- `name` - The name of the file to find.

**Returns:**
- The file if found, or null otherwise.

### addCategory

```java
public void addCategory(java.lang.String category)
```

Adds a category.

**Parameters:**
- `category` - The category to add.

### removeCategory

```java
public void removeCategory(java.lang.String category)
```

Removes a category.

**Parameters:**
- `category` - The category to remove.

### listCategories

```java
public java.util.List listCategories()
```

Lists all categories.

**Returns:**
- A list of all categories.

### addAssociation

```java
public void addAssociation(java.lang.String key, 
                           java.lang.String value)
```

Adds an association.

**Parameters:**
- `key` - The key for the association.
- `value` - The value for the association.

### removeAssociation

```java
public void removeAssociation(java.lang.String key)
```

Removes an association.

**Parameters:**
- `key` - The key for the association to remove.

### findAssociation

```java
public java.lang.String findAssociation(java.lang.String key)
```

Finds an association by key.

**Parameters:**
- `key` - The key for the association to find.

**Returns:**
- The value associated with the key, or null if not found.

