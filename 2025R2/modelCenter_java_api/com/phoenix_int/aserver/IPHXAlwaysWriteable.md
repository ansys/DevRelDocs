# Interface: IPHXAlwaysWriteable

**Package:** `com.phoenix_int.aserver`

**Known Implementing Classes**
- [`PHXReference`](../types/PHXReference.md), [`PHXReferenceArray`](../types/PHXReferenceArray.md)

**Related Classes**
- [`PHXPropertyDescriptor`](PHXPropertyDescriptor.md)

**Declaration**
```
public interface IPHXAlwaysWriteable
```

This is a specialized interface for ModelCenter Remote Execution. If an object implements this interface, its writeable properties will be writeable regardless of whether any parent properties are writeable or not. Normally a property is only writeable if it is writeable and all of its parent objects are also writeable.