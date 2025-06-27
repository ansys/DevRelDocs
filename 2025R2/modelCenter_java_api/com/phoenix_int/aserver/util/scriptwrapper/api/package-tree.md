# Hierarchy For Package com.phoenix_int.aserver.util.scriptwrapper.api
**Package Hierarchies:**
- [All Packages](../../../../../../overview-tree.html)

## Class Hierarchy

- java.lang.Object
    - com.phoenix_int.aserver.util.scriptwrapper.api.[AbstractFile](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/AbstractFile.html)(implements java.io.Closeable, com.phoenix_int.aserver.util.scriptwrapper.api.[ParseableFile](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/ParseableFile.html))
        - com.phoenix_int.aserver.util.scriptwrapper.api.[CAEOutputFile](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/CAEOutputFile.html)(implements com.phoenix_int.aserver.util.scriptwrapper.api.[OutputFile2](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/OutputFile2.html))
        - com.phoenix_int.aserver.util.scriptwrapper.api.[PHXRowFieldFile](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/PHXRowFieldFile.html)(implements com.phoenix_int.aserver.util.scriptwrapper.api.[InputFile](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/InputFile.html), com.phoenix_int.aserver.util.scriptwrapper.api.[OutputFile](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/OutputFile.html), com.phoenix_int.aserver.util.scriptwrapper.api.[OutputFile2](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/OutputFile2.html))
        - com.phoenix_int.aserver.util.scriptwrapper.api.[XPathFile](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/XPathFile.html)(implements com.phoenix_int.aserver.util.scriptwrapper.api.[InputFile](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/InputFile.html), com.phoenix_int.aserver.util.scriptwrapper.api.[OutputFile](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/OutputFile.html), com.phoenix_int.aserver.util.scriptwrapper.api.[OutputFile2](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/OutputFile2.html))
    - com.phoenix_int.aserver.util.scriptwrapper.api.[PHXBookmark](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/PHXBookmark.html)
    - com.phoenix_int.aserver.util.scriptwrapper.api.[PHXCAERange](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/PHXCAERange.html)(implements com.phoenix_int.aserver.util.scriptwrapper.api.[IPHXRange](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/IPHXRange.html))
    - com.phoenix_int.aserver.util.scriptwrapper.api.[PHXRowFieldRange](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/PHXRowFieldRange.html)(implements com.phoenix_int.aserver.util.scriptwrapper.api.[IPHXRange](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/IPHXRange.html))
    - com.phoenix_int.aserver.[PHXRunShare](../../../../../../com/phoenix_int/aserver/PHXRunShare.html)(implements com.phoenix_int.aserver.[IPHXMonitorable](../../../../../../com/phoenix_int/aserver/IPHXMonitorable.html), com.phoenix_int.aserver.trace.IPHXTraceGenerator)
        - com.phoenix_int.aserver.util.scriptwrapper.api.[PHXRunShareContext](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/PHXRunShareContext.html)
    - com.phoenix_int.aserver.util.scriptwrapper.api.[PHXScriptWrapperObject](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/PHXScriptWrapperObject.html)
    - com.phoenix_int.aserver.util.scriptwrapper.api.[PHXSection](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/PHXSection.html)(implements java.lang.Cloneable)
    - java.lang.Throwable (implements java.io.Serializable)
        - java.lang.Exception
            - com.phoenix_int.aserver.util.scriptwrapper.api.[PHXBookmarkNotFoundException](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/PHXBookmarkNotFoundException.html)
            - com.phoenix_int.aserver.util.scriptwrapper.api.[PHXScriptWrapperAPIException](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/PHXScriptWrapperAPIException.html)
            - com.phoenix_int.aserver.util.scriptwrapper.api.[PHXSectionNotFoundException](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/PHXSectionNotFoundException.html)
            - com.phoenix_int.aserver.util.scriptwrapper.api.[PHXVersionException](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/PHXVersionException.html)

## Interface Hierarchy

- com.phoenix_int.aserver.util.scriptwrapper.api.[IPHXRange](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/IPHXRange.html)
- com.phoenix_int.aserver.util.scriptwrapper.api.[IPHXRangeChangeListener](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/IPHXRangeChangeListener.html)
- com.phoenix_int.aserver.util.scriptwrapper.api.[OutputFile2](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/OutputFile2.html)
- com.phoenix_int.aserver.util.scriptwrapper.api.[ParseableFile](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/ParseableFile.html)
    - com.phoenix_int.aserver.util.scriptwrapper.api.[InputFile](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/InputFile.html)
    - com.phoenix_int.aserver.util.scriptwrapper.api.[OutputFile](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/OutputFile.html)

## Enum Hierarchy

- java.lang.Object
    - java.lang.Enum`<E>` (implements java.lang.Comparable`<T>`, java.io.Serializable)
        - com.phoenix_int.aserver.util.scriptwrapper.api.[ParseableFile.Mode](../../../../../../com/phoenix_int/aserver/util/scriptwrapper/api/ParseableFile.Mode.html)