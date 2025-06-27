# Interface: IPHXHaltableComponent

**Package:** `com.phoenix_int.aserver`

**Declaration**
```java
public interface IPHXHaltableComponent
```

This is a specialized interface for the ModelCenter Remote Execution. If a component implements this interface, the MCRE will call this method if a connection is lost prior to ending the component. The method is useful to halt components that are currently running when a connection is lost.

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `halt()`<br>Notifies the component to stop doing whatever it is currently doing. |

## Method Detail

### halt
```java
void halt()
    throws java.lang.Exception
```
Notifies the component to stop doing whatever it is currently doing.

**Throws:**
- `java.lang.Exception` - thrown if the function does not complete successfully