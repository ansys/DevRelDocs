# Interface: IPHXSelfManager3

**Package:** `com.phoenix_int.aserver`

**Superinterfaces**
- [`IPHXSelfManager`](IPHXSelfManager.md), [`IPHXSelfManager2`](IPHXSelfManager2.md)

**Known Implementing Classes**
- [`PHXSimpleSelfManager3`](PHXSimpleSelfManager3.md)

**Declaration**
```java
public interface IPHXSelfManager3
    extends IPHXSelfManager2
```

This interface extends [`IPHXSelfManager2`](IPHXSelfManager2.md) and provides a new invoke that enables getting more information back from invoked methods.

**See Also:**
- [`IPHXSelfManager`](IPHXSelfManager.md)

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `PHXInvokeReturn` | `invoke2(java.lang.String methodName)`<br>Invokes the named method. |

### Methods inherited from interface `com.phoenix_int.aserver.IPHXSelfManager2`
`getValue2`, `setValue2`

### Methods inherited from interface `com.phoenix_int.aserver.IPHXSelfManager`
`getMethodDescriptors`, `getPropertyDescriptors`, `getValue`, `invoke`, `setValue`

## Method Detail

### invoke2
```java
PHXInvokeReturn invoke2(java.lang.String methodName)
                 throws java.lang.Exception
```

Invokes the named method.

**Parameters:**
- `methodName` - the name of the method to invoke on obj

**Returns:**
- the return object from the invocation

**Throws:**
- `java.lang.Exception` - an exception that may occur