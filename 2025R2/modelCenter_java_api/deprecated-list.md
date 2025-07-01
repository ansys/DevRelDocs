# Deprecated API

<a id="deprecated-interfaces"></a>

## Deprecated Interfaces
| Interface and Description |
| --- |
| [com.phoenix_int.pacz.api.IComponentConfig](com/phoenix_int/pacz/api/IComponentConfig.html)<br>see [com.phoenix_int.pacz.api.v2.IComponentConfig](com/phoenix_int/pacz/api/v2/IComponentConfig.md) |
| [com.phoenix_int.pacz.api.IInstanceFile](com/phoenix_int/pacz/api/IInstanceFile.html)<br>see [com.phoenix_int.pacz.api.v2.IInstanceFile](com/phoenix_int/pacz/api/v2/IInstanceFile.md) |
| [com.phoenix_int.aserver.library.IPHXFactory](com/phoenix_int/aserver/library/IPHXFactory.html)<br>It is preferred to use [`IPHXFactory2`](com/phoenix_int/aserver/library/IPHXFactory2.md), as this class has methods that can leak resources |
| [com.phoenix_int.aserver.library.IPHXLibrarian](com/phoenix_int/aserver/library/IPHXLibrarian.html)<br>It is preferred to use [`IPHXLibrarian2`](com/phoenix_int/aserver/library/IPHXLibrarian2.md) as this class uses methods that can leak resources. |
| [com.phoenix_int.aserver.library.IPHXVersionedLibrarian](com/phoenix_int/aserver/library/IPHXVersionedLibrarian.html)<br>It is preferred to use [`IPHXVersionedLibrarian3`](com/phoenix_int/aserver/library/IPHXVersionedLibrarian3.md) as this class has methods that can leak resources |
| [com.phoenix_int.aserver.library.IPHXVersionedLibrarian2](com/phoenix_int/aserver/library/IPHXVersionedLibrarian2.html)<br>It is preferred to use [`IPHXVersionedLibrarian3`](com/phoenix_int/aserver/library/IPHXVersionedLibrarian3.md) as this class supports methods that can cause file leaks. |
| [com.phoenix_int.pacz.api.IRuntimeVariable](com/phoenix_int/pacz/api/IRuntimeVariable.html)<br>see [com.phoenix_int.pacz.api.v2.IRuntimeVariable](com/phoenix_int/pacz/api/v2/IRuntimeVariable.md) |
| [com.phoenix_int.aserver.util.scriptwrapper.api.OutputFile](com/phoenix_int/aserver/util/scriptwrapper/api/OutputFile.html)<br>in favor of [OutputFile2](com/phoenix_int/aserver/util/scriptwrapper/api/OutputFile2.md) |

<a id="deprecated-classes"></a>

## Deprecated Classes
| Class and Description |
| --- |
| [com.phoenix_int.pacz.api.Environment](com/phoenix_int/pacz/api/Environment.html)<br>see [com.phoenix_int.pacz.api.v2.Environment](com/phoenix_int/pacz/api/v2/Environment.md) |
| [com.phoenix_int.aserver.client.PHXAnalysisClient](com/phoenix_int/aserver/client/PHXAnalysisClient.html)<br>Use [AnalysisServerClient](com/phoenix_int/aserver/client/v2/AnalysisServerClient.md) instead. |
| [com.phoenix_int.aserver.types.PHXFile](com/phoenix_int/aserver/types/PHXFile.html) |
| [com.phoenix_int.aserver.types.PHXInteger](com/phoenix_int/aserver/types/PHXInteger.html) |

<a id="deprecated-enums"></a>

## Deprecated Enums
| Enum and Description |
| --- |
| [com.phoenix_int.pacz.api.RunFolderPreference](com/phoenix_int/pacz/api/RunFolderPreference.html)<br>see [`com.phoenix_int.pacz.api.v2.RunFolderPreference`](com/phoenix_int/pacz/api/v2/RunFolderPreference.md) |
| [com.phoenix_int.pacz.api.VariableDataType](com/phoenix_int/pacz/api/VariableDataType.html) IRuntimeVariables are now using the canonical PHX type identifiers which are literal strings (see [`com.phoenix_int.pacz.api.v2`](com/phoenix_int/pacz/api/v2/package-summary.md)) |

<a id="deprecated-fields"></a>

## Deprecated Fields
| Field and Description |
| --- |
| [com.phoenix_int.aserver.util.PHXFileParser.AUTOMATIC](com/phoenix_int/aserver/util/PHXFileParser.html#AUTOMATIC)<br>in favor of [Parser.Mode.AUTOMATIC](com/phoenix_int/aserver/util/Parser.Mode.md#AUTOMATIC) |
| [com.phoenix_int.aserver.util.PHXFileParser.BUFFERED](com/phoenix_int/aserver/util/PHXFileParser.html#BUFFERED)<br>in favor of [Parser.Mode.BUFFERED](com/phoenix_int/aserver/util/Parser.Mode.md#BUFFERED) |
| [com.phoenix_int.aserver.util.PHXFileParser.FILE_SIZE_LIMIT](com/phoenix_int/aserver/util/PHXFileParser.html#FILE_SIZE_LIMIT)<br>in favor of [Parser.Mode.FILE_SIZE_LIMIT](com/phoenix_int/aserver/util/Parser.Mode.md#FILE_SIZE_LIMIT) |
| [com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldFile.GENERATE](com/phoenix_int/aserver/util/scriptwrapper/api/PHXRowFieldFile.html#GENERATE)<br>in favor of [ParseableFile.Mode.GENERATE](com/phoenix_int/aserver/util/scriptwrapper/api/ParseableFile.Mode.md#GENERATE) |
| [com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldFile.PARSE](com/phoenix_int/aserver/util/scriptwrapper/api/PHXRowFieldFile.html#PARSE)<br>in favor of [ParseableFile.Mode.PARSE](com/phoenix_int/aserver/util/scriptwrapper/api/ParseableFile.Mode.md#PARSE) |
| [com.phoenix_int.aserver.util.PHXFileParser.RANDOM_ACCESS](com/phoenix_int/aserver/util/PHXFileParser.html#RANDOM_ACCESS)<br>in favor of [Parser.Mode.RANDOM](com/phoenix_int/aserver/util/Parser.Mode.md#RANDOM) |
| [com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldFile.READ_TEMPLATE](com/phoenix_int/aserver/util/scriptwrapper/api/PHXRowFieldFile.html#READ_TEMPLATE)<br>in favor of [ParseableFile.Mode.READ_TEMPLATE](com/phoenix_int/aserver/util/scriptwrapper/api/ParseableFile.Mode.md#READ_TEMPLATE) |

<a id="deprecated-methods"></a>

## Deprecated Methods
| Method and Description |
| --- |
| [com.phoenix_int.aserver.types.PHXTypeFactory.allocateArray(String)](com/phoenix_int/aserver/types/PHXTypeFactory.html#allocateArray-java.lang.String-)<br>Prefer [PHXTypeFactory.allocateVariable2(java.lang.String)](com/phoenix_int/aserver/types/PHXTypeFactory.md#allocateVariable2-java.lang.String-) which can properly differentiate between arrays and non-array types. |
| [com.phoenix_int.aserver.types.PHXTypeFactory.allocateVariable(String)](com/phoenix_int/aserver/types/PHXTypeFactory.html#allocateVariable-java.lang.String-)<br>Prefer [PHXTypeFactory.allocateVariable2(java.lang.String)](com/phoenix_int/aserver/types/PHXTypeFactory.md#allocateVariable2-java.lang.String-) which can properly differentiate between arrays and non-array types. |
| [com.phoenix_int.aserver.types.PHXString.arrayToString(String[])](com/phoenix_int/aserver/types/PHXString.html#arrayToString-java.lang.String:A-) |
| [com.phoenix_int.aserver.types.PHXInteger.getHasFormat()](com/phoenix_int/aserver/types/PHXInteger.html#getHasFormat--)<br>in favor of [PHXInteger.hasFormat()](com/phoenix_int/aserver/types/PHXInteger.md#hasFormat--) |
| [com.phoenix_int.aserver.types.PHXLong.getHasFormat()](com/phoenix_int/aserver/types/PHXLong.html#getHasFormat--)<br>in favor of [PHXLong.hasFormat()](com/phoenix_int/aserver/types/PHXLong.md#hasFormat--) |
| [com.phoenix_int.aserver.types.PHXRawFile.getValueStream()](com/phoenix_int/aserver/types/PHXRawFile.html#getValueStream--)<br>using `toString2().getInputStream()` is prefered. |
| [com.phoenix_int.aserver.library.IPHXFactory.instantiate(File, String, String)](com/phoenix_int/aserver/library/IPHXFactory.html#instantiate-java.io.File-java.lang.String-java.lang.String-)<br>It is preferred to use [`IPHXFactory2.instantiateManaged(java.io.File, java.lang.String, java.lang.String)`](com/phoenix_int/aserver/library/IPHXFactory2.md#instantiateManaged-java.io.File-java.lang.String-java.lang.String-) as this method can lead to resource leaks. |
| [com.phoenix_int.aserver.library.IPHXLibrarian.instantiate(String, String)](com/phoenix_int/aserver/library/IPHXLibrarian.html#instantiate-java.lang.String-java.lang.String-) |
| [com.phoenix_int.aserver.library.IPHXLibrarian.instantiate(String, String, String, String)](com/phoenix_int/aserver/library/IPHXLibrarian.html#instantiate-java.lang.String-java.lang.String-java.lang.String-java.lang.String-) |

<a id="deprecated-constructors"></a>

## Deprecated Construtors
| Constructor and Description |
| --- |
| [com.phoenix_int.aserver.util.PHXFileParser(String, int)](com/phoenix_int/aserver/util/PHXFileParser.html#PHXFileParser-java.lang.String-int-)<br>in favor of [PHXFileParser.PHXFileParser(String, Parser.Mode)](com/phoenix_int/aserver/util/PHXFileParser.md#PHXFileParser-java.lang.String-com.phoenix_int.aserver.util.Parser.Mode-) |
| [com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldFile(PHXScriptWrapperObject, int)](com/phoenix_int/aserver/util/scriptwrapper/api/PHXRowFieldFile.html#PHXRowFieldFile-com.phoenix_int.aserver.util.scriptwrapper.api.PHXScriptWrapperObject-int-)<br>in favor of [PHXRowFieldFile.PHXRowFieldFile(PHXScriptWrapperObject, ParseableFile.Mode)](com/phoenix_int/aserver/util/scriptwrapper/api/PHXRowFieldFile.md#PHXRowFieldFile-com.phoenix_int.aserver.util.scriptwrapper.api.PHXScriptWrapperObject-com.phoenix_int.aserver.util.scriptwrapper.api.ParseableFile.Mode-) |