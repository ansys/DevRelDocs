# Interface: IPHXDescription

**Package:** `com.phoenix_int.aserver.types`

**All Known Subinterfaces:**
- [IPHXRefPropInfo](IPHXRefPropInfo.md)

**All Known Implementing Classes:**
- [PHXRefArrayProperty](PHXRefArrayProperty.md), [PHXRefProperty](PHXRefProperty.md)

--- 

**Declaration**

```
public interface IPHXDescription
```

Interface for types with descriptions

Example usage:

```
 IPHXType var = wrapper.getVariable("myVar");
 if (var instanceof IPHXDescription)
 {
    ((IPHXDescription)var).setDescription("my variable");
 }
```

## Method Summary

| Modifier and Type | Method and Description |
| --- | --- |
| `java.lang.String` | `getDescription()`<br>Get the variable description |
| `void` | `setDescription(java.lang.String desc)`<br>Set the variable description. |

## Method Detail

### getDescription

```
java.lang.String getDescription()
```
Get the variable description

**Returns:**
- description

### setDescription

```
void setDescription(java.lang.String desc)
```
Set the variable description. This should be a short, one-line description.

**Parameters:**
- `desc` - the description