# Hierarchy For Package com.phoenix_int.aserver.types

**Package Hierarchies:**
- [All Packages](../../../../overview-tree.md)

## Class Hierarchy

- java.lang.Object
    - com.phoenix_int.aserver.types.[PHXAppearance](PHXAppearance.md)
    - com.phoenix_int.aserver.types.[PHXDataCollector](PHXDataCollector.md)
    - com.phoenix_int.aserver.types.[PHXGeomInfo](PHXGeomInfo.md)
    - com.phoenix_int.aserver.types.[PHXMassProperties](PHXMassProperties.md)
    - com.phoenix_int.aserver.types.[PHXOrientation](PHXOrientation.md)
    - com.phoenix_int.aserver.types.[PHXRefArrayProperty](PHXRefArrayProperty.md) (implements com.phoenix_int.aserver.types.[IPHXRefPropInfo](IPHXRefPropInfo.md))
    - com.phoenix_int.aserver.types.[PHXReference](PHXReference.md) (implements com.phoenix_int.aserver.[IPHXAlwaysWriteable](../IPHXAlwaysWriteable.md), com.phoenix_int.aserver.types.[IPHXType2](IPHXType2.md))
    - com.phoenix_int.aserver.types.[PHXReferenceArray](PHXReferenceArray.md) (implements com.phoenix_int.aserver.[IPHXAlwaysWriteable](../IPHXAlwaysWriteable.md))
    - com.phoenix_int.aserver.types.[PHXRefProperty](PHXRefProperty.md) (implements com.phoenix_int.aserver.types.[IPHXRefPropInfo](IPHXRefPropInfo.md))
    - com.phoenix_int.aserver.types.[PHXSimpleType](PHXSimpleType.md) (implements com.phoenix_int.aserver.types.[IPHXType2](IPHXType2.md), com.phoenix_int.aserver.types.[IPHXUnits](IPHXUnits.md))
        - com.phoenix_int.aserver.types.[PHXBoolean](PHXBoolean.md)
        - com.phoenix_int.aserver.types.[PHXDouble](PHXDouble.md) (implements com.phoenix_int.aserver.types.[IPHXFormat](IPHXFormat.md))
        - com.phoenix_int.aserver.types.[PHXFile](PHXFile.md)
        - com.phoenix_int.aserver.types.[PHXGeometry](PHXGeometry.md)
        - com.phoenix_int.aserver.types.[PHXInteger](PHXInteger.md) (implements com.phoenix_int.aserver.types.[IPHXFormat](IPHXFormat.md))
        - com.phoenix_int.aserver.types.[PHXLong](PHXLong.md) (implements com.phoenix_int.aserver.types.[IPHXFormat](IPHXFormat.md))
        - com.phoenix_int.aserver.types.[PHXRawFile](PHXRawFile.md) (implements java.lang.AutoCloseable, com.phoenix_int.aserver.types.[IPHXType2](IPHXType2.md))
        - com.phoenix_int.aserver.types.[PHXScriptObject](PHXScriptObject.md)
        - com.phoenix_int.aserver.types.[PHXSimpleArray](PHXSimpleArray.md)`<T>` (implements com.phoenix_int.aserver.types.[IPHXType2](IPHXType2.md), java.lang.Iterable`<T>`)
            - com.phoenix_int.aserver.types.[PHXBooleanArray](PHXBooleanArray.md)
            - com.phoenix_int.aserver.types.[PHXDoubleArray](PHXDoubleArray.md) (implements com.phoenix_int.aserver.types.[IPHXFormat](IPHXFormat.md))
            - com.phoenix_int.aserver.types.[PHXLongArray](PHXLongArray.md) (implements com.phoenix_int.aserver.types.[IPHXFormat](IPHXFormat.md))
            - com.phoenix_int.aserver.types.[PHXObjectArray](PHXObjectArray.md)
            - com.phoenix_int.aserver.types.[PHXRawFileArray](PHXRawFileArray.md)
            - com.phoenix_int.aserver.types.[PHXStringArray](PHXStringArray.md)
        - com.phoenix_int.aserver.types.[PHXString](PHXString.md)
    - com.phoenix_int.aserver.types.[PHXTypeFactory](PHXTypeFactory.md)
    - java.lang.Throwable (implements java.io.Serializable)
        - java.lang.Exception
            - com.phoenix_int.aserver.types.[PHXInvalidTypeException](PHXInvalidTypeException.md)
            - com.phoenix_int.aserver.types.[PHXNumberFormatException](PHXNumberFormatException.md)
            - com.phoenix_int.aserver.types.[PHXTypeMismatchException](PHXTypeMismatchException.md)

## Interface Hierarchy

- com.phoenix_int.aserver.types.[IPHXDescription](IPHXDescription.md)
    - com.phoenix_int.aserver.types.[IPHXRefPropInfo](IPHXRefPropInfo.md)
- com.phoenix_int.aserver.types.[IPHXFormat](IPHXFormat.md)
- com.phoenix_int.aserver.types.[IPHXType](IPHXType.md)
    - com.phoenix_int.aserver.types.[IPHXType2](IPHXType2.md)
- com.phoenix_int.aserver.types.[IPHXType2.IVisitor](IPHXType2.IVisitor.md)`<T>`
- com.phoenix_int.aserver.types.[IPHXUnits](IPHXUnits.md)