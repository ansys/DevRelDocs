# Interface: IPHXComponent

**Package:** `com.phoenix_int.aserver`

**Known Subinterfaces**
- `IPHXAnalysis`, `IPHXDriver`

**Known Implementing Classes**
- `PHXSimpleSelfManager`, `PHXSimpleSelfManager2`, `PHXSimpleSelfManager3`

**Declaration**
```java
public interface IPHXComponent
```

This is a common base interface for things served on the ModelCenter Remote Execution.

In addition to the functions specified by this interface, the following static functions may also be defined to provide additional information about a component:
- `public static String getVersion()` — retrieves the version of the component.
- `public static String getAuthor()` — retrieves the author of the component.
- `public static String getDescription()` — retrieves a one-line description of the component.
- `public static String getHelpURL()` — retrieves a URL associated with the component.
- `public static String getKeywords()` — retrieves keywords associated with the component.
- `public static String getIconFile()` — retrieves the name of a 64x64 bmp file used to represent the component as an icon in graphical environments.

The above functions are used by the "describe" command in the ModelCenter Remote Execution. If not defined, default values are used. The functions are all static so that they may be called without instantiating the component.

## Method Summary

| Modifier and Type | Method and Description |
|-------------------|----------------------|
| `void` | `end()`<br>Notifies the driver that it has ended. |

## Method Detail

### end
```java
void end()
    throws java.lang.Exception
```
Notifies the driver that it has ended. The driver should perform any necessary shutdown functions.

**Throws:**
- `java.lang.Exception` - thrown if the function does not complete successfully