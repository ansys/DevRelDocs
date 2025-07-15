# Interface: IPHXRunQueue

**Package:** `com.phoenix_int.aserver`

**Declaration**
```java
public interface IPHXRunQueue
```

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `setRunQueue(java.lang.String connector, java.lang.String queue)`<br>Sets the run queue for a component. |

## Method Detail

### setRunQueue
```java
void setRunQueue(java.lang.String connector, 
                 java.lang.String queue)
          throws java.lang.Exception
```

Sets the run queue for a component. It is important that this class throws [PHXNoSuchCategoryException](library/PHXNoSuchCategoryException.md) and [ClassNotFoundException](../util/PHXClassNotFoundException.md) in the appropriate cases as they are handled in special ways by the [PHXLibrarianMounter](library/PHXLibrarianMounter.md) and [PHXLibrarianCombiner](library/PHXLibrarianCombiner.md).

**Parameters:**
- `connector` - The name of the selected connector
- `queue` - The name of the selected queue

**Throws:**
- [`ClassNotFoundException`](../util/PHXClassNotFoundException.md) - If compClass doesn't indicate a valid class for the specified directory
- `java.lang.Exception` - If anything goes wrong
- [`PHXNoSuchCategoryException`](library/PHXNoSuchCategoryException.md) - If an invalid category is specified

**See Also:**
- [PHXLibrarianMounter](library/PHXLibrarianMounter.md)
- [PHXLibrarianCombiner](library/PHXLibrarianCombiner.md)
- [PHXNoSuchCategoryException](library/PHXNoSuchCategoryException.md)
- [PHXClassNotFoundException](../util/PHXClassNotFoundException.md)