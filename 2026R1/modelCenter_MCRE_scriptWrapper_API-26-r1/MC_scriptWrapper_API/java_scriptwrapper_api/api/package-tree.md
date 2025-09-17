# Hierarchy For Package com.phoenix_int.aserver.util.scriptwrapper.api

## Class Hierarchy

- java.lang.Object
    - com.phoenix_int.aserver.util.scriptwrapper.api.[AbstractFile](AbstractFile.md) (implements java.io.Closeable, com.phoenix_int.aserver.util.scriptwrapper.api.[ParseableFile](ParseableFile.md))
        - com.phoenix_int.aserver.util.scriptwrapper.api.[CAEOutputFile](CAEOutputFile.md) (implements com.phoenix_int.aserver.util.scriptwrapper.api.[OutputFile2](OutputFile2.md))
        - com.phoenix_int.aserver.util.scriptwrapper.api.[PHXRowFieldFile](PHXRowFieldFile.md) (implements com.phoenix_int.aserver.util.scriptwrapper.api.[InputFile](InputFile.md), com.phoenix_int.aserver.util.scriptwrapper.api.[OutputFile](OutputFile.md), com.phoenix_int.aserver.util.scriptwrapper.api.[OutputFile2](OutputFile2.md))
        - com.phoenix_int.aserver.util.scriptwrapper.api.[XPathFile](XPathFile.md) (implements com.phoenix_int.aserver.util.scriptwrapper.api.[InputFile](InputFile.md), com.phoenix_int.aserver.util.scriptwrapper.api.[OutputFile](OutputFile.md), com.phoenix_int.aserver.util.scriptwrapper.api.[OutputFile2](OutputFile2.md))
    - com.phoenix_int.aserver.util.scriptwrapper.api.[PHXBookmark](PHXBookmark.md)
    - com.phoenix_int.aserver.util.scriptwrapper.api.[PHXCAERange](PHXCAERange.md) (implements com.phoenix_int.aserver.util.scriptwrapper.api.[IPHXRange](IPHXRange.md))
    - com.phoenix_int.aserver.util.scriptwrapper.api.[PHXRowFieldRange](PHXRowFieldRange.md) (implements com.phoenix_int.aserver.util.scriptwrapper.api.[IPHXRange](IPHXRange.md))
    - com.phoenix_int.aserver.PHXRunShare (implements com.phoenix_int.aserver.IPHXMonitorable, com.phoenix_int.aserver.trace.IPHXTraceGenerator)
        - com.phoenix_int.aserver.util.scriptwrapper.api.[PHXRunShareContext](PHXRunShareContext.md)
    - com.phoenix_int.aserver.util.scriptwrapper.api.[PHXScriptWrapperObject](PHXScriptWrapperObject.md)
    - com.phoenix_int.aserver.util.scriptwrapper.api.[PHXSection](PHXSection.md) (implements java.lang.Cloneable)
    - java.lang.Throwable (implements java.io.Serializable)
        - java.lang.Exception
            - com.phoenix_int.aserver.util.scriptwrapper.api.[PHXBookmarkNotFoundException](PHXBookmarkNotFoundException.md)
            - com.phoenix_int.aserver.util.scriptwrapper.api.[PHXScriptWrapperAPIException](PHXScriptWrapperAPIException.md)
            - com.phoenix_int.aserver.util.scriptwrapper.api.[PHXSectionNotFoundException](PHXSectionNotFoundException.md)
            - com.phoenix_int.aserver.util.scriptwrapper.api.[PHXVersionException](PHXVersionException.md)

## Interface Hierarchy

- com.phoenix_int.aserver.util.scriptwrapper.api.[IPHXRange](IPHXRange.md)
- com.phoenix_int.aserver.util.scriptwrapper.api.[IPHXRangeChangeListener](IPHXRangeChangeListener.md)
- com.phoenix_int.aserver.util.scriptwrapper.api.[OutputFile2](OutputFile2.md)
- com.phoenix_int.aserver.util.scriptwrapper.api.[ParseableFile](ParseableFile.md)
    - com.phoenix_int.aserver.util.scriptwrapper.api.[InputFile](InputFile.md)
    - com.phoenix_int.aserver.util.scriptwrapper.api.[OutputFile](OutputFile.md)

## Enum Hierarchy

- java.lang.Object
    - java.lang.Enum`<E>` (implements java.lang.Comparable`<T>`, java.io.Serializable)
        - com.phoenix_int.aserver.util.scriptwrapper.api.[ParseableFile.Mode](ParseableFile.Mode.md)