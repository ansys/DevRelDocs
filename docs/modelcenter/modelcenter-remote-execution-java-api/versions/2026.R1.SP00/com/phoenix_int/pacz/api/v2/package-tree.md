# Hierarchy For Package com.phoenix_int.pacz.api.v2

**Package Hierarchies:**
- [All Packages](./../../../../../overview-tree.md)

## Class Hierarchy

- java.lang.Object
    - java.util.AbstractMap`<K,V>` (implements java.util.Map`<K,V>`)
        - java.util.HashMap`<K,V>` (implements java.lang.Cloneable, java.util.Map`<K,V>`, java.io.Serializable)
            - com.phoenix_int.pacz.api.v2.[Environment](Environment.md)

## Interface Hierarchy

- com.phoenix_int.pacz.api.v2.[IComponentConfig](IComponentConfig.md)
- com.phoenix_int.pacz.api.v2.[IInstanceFile](IInstanceFile.md)
- com.phoenix_int.aserver.types.[IPHXType](./../../../aserver/types/IPHXType.md)
    - com.phoenix_int.aserver.types.[IPHXType2](./../../../aserver/types/IPHXType2.md)
        - com.phoenix_int.pacz.api.v2.[IRuntimeVariable](IRuntimeVariable.md)(also extends com.phoenix_int.aserver.types.[IPHXUnits](./../../../aserver/types/IPHXUnits.md), com.phoenix_int.pacz.api.v2.IRuntimeVariableMetadata)
- com.phoenix_int.aserver.types.[IPHXUnits](./../../../aserver/types/IPHXUnits.md)
    - com.phoenix_int.pacz.api.v2.[IRuntimeVariable](IRuntimeVariable.md)(also extends com.phoenix_int.aserver.types.[IPHXType2](./../../../aserver/types/IPHXType2.md), com.phoenix_int.pacz.api.v2.IRuntimeVariableMetadata)
- com.phoenix_int.pacz.api.v2.IRuntimeVariableMetadata
    - com.phoenix_int.pacz.api.v2.[IRuntimeVariable](IRuntimeVariable.md)(also extends com.phoenix_int.aserver.types.[IPHXType2](./../../../aserver/types/IPHXType2.md), com.phoenix_int.aserver.types.[IPHXUnits](./../../../aserver/types/IPHXUnits.md))

## Enum Hierarchy

- java.lang.Object
    - java.lang.Enum`<E>` (implements java.lang.Comparable`<T>`, java.io.Serializable)
        - com.phoenix_int.pacz.api.v2.[RunFolderPreference](RunFolderPreference.md)