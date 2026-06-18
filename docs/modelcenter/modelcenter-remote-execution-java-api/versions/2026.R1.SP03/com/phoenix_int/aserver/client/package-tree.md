# Hierarchy For Package com.phoenix_int.aserver.client

**Package Hierarchies:**
- [All Packages](./../../../../overview-tree.md)

## Class Hierarchy

- java.lang.Object
    - java.util.EventObject (implements java.io.Serializable)
        - com.phoenix_int.aserver.client.[PHXAnalysisClientEvent](PHXAnalysisClientEvent.md)
        - com.phoenix_int.aserver.client.[PHXAnalysisClientExceptionEvent](PHXAnalysisClientExceptionEvent.md)
    - com.phoenix_int.aserver.client.[PHXAnalysisClient](PHXAnalysisClient.md)
    - com.phoenix_int.aserver.client.[PHXPropertyValue](PHXPropertyValue.md)
    - java.lang.Throwable (implements java.io.Serializable)
        - java.lang.Exception
            - com.phoenix_int.aserver.client.[PHXNoSuchResponseException](PHXNoSuchResponseException.md)
            - com.phoenix_int.aserver.client.[PHXServerSideException](PHXServerSideException.md)
            - java.lang.RuntimeException
                - com.phoenix_int.aserver.client.[PHXResponseTypeMismatchException](PHXResponseTypeMismatchException.md)

## Interface Hierarchy

- java.util.EventListener
    - com.phoenix_int.aserver.client.[IPHXAnalysisClientListener](IPHXAnalysisClientListener.md)