# Deprecated API

<a id="deprecated-interfaces"></a>

## Deprecated Interfaces
| Interface and Description |
| --- |
| [com.phoenix_int.pacz.api.IComponentConfig](com/phoenix_int/pacz/api/IComponentConfig.md)<br>see [com.phoenix_int.pacz.api.v2.IComponentConfig](com/phoenix_int/pacz/api/v2/IComponentConfig.md) |
| [com.phoenix_int.pacz.api.IInstanceFile](com/phoenix_int/pacz/api/IInstanceFile.md)<br>see [com.phoenix_int.pacz.api.v2.IInstanceFile](com/phoenix_int/pacz/api/v2/IInstanceFile.md) |
| [com.phoenix_int.aserver.library.IPHXFactory](com/phoenix_int/aserver/library/IPHXFactory.md)<br>It is preferred to use [`IPHXFactory2`](com/phoenix_int/aserver/library/IPHXFactory2.md), as this class has methods that can leak resources |
| [com.phoenix_int.aserver.library.IPHXLibrarian](com/phoenix_int/aserver/library/IPHXLibrarian.md)<br>It is preferred to use [`IPHXLibrarian2`](com/phoenix_int/aserver/library/IPHXLibrarian2.md) as this class uses methods that can leak resources. |
| [com.phoenix_int.aserver.library.IPHXVersionedLibrarian](com/phoenix_int/aserver/library/IPHXVersionedLibrarian.md)<br>It is preferred to use [`IPHXVersionedLibrarian3`](com/phoenix_int/aserver/library/IPHXVersionedLibrarian3.md) as this class has methods that can leak resources |
| [com.phoenix_int.aserver.library.IPHXVersionedLibrarian2](com/phoenix_int/aserver/library/IPHXVersionedLibrarian2.md)<br>It is preferred to use [`IPHXVersionedLibrarian3`](com/phoenix_int/aserver/library/IPHXVersionedLibrarian3.md) as this class supports methods that can cause file leaks. |
| [com.phoenix_int.pacz.api.IRuntimeVariable](com/phoenix_int/pacz/api/IRuntimeVariable.md)<br>see [com.phoenix_int.pacz.api.v2.IRuntimeVariable](com/phoenix_int/pacz/api/v2/IRuntimeVariable.md) |
| [com.phoenix_int.aserver.util.scriptwrapper.api.OutputFile](com/phoenix_int/aserver/util/scriptwrapper/api/OutputFile.md)<br>in favor of [OutputFile2](com/phoenix_int/aserver/util/scriptwrapper/api/OutputFile2.md) |

<a id="deprecated-classes"></a>

## Deprecated Classes
| Class and Description |
| --- |
| [com.phoenix_int.pacz.api.Environment](com/phoenix_int/pacz/api/Environment.md)<br>see [com.phoenix_int.pacz.api.v2.Environment](com/phoenix_int/pacz/api/v2/Environment.md) |
| [com.phoenix_int.aserver.client.PHXAnalysisClient](com/phoenix_int/aserver/client/PHXAnalysisClient.md)<br>Use [AnalysisServerClient](com/phoenix_int/aserver/client/v2/AnalysisServerClient.md) instead. |
| [com.phoenix_int.aserver.types.PHXFile](com/phoenix_int/aserver/types/PHXFile.md) |
| [com.phoenix_int.aserver.types.PHXInteger](com/phoenix_int/aserver/types/PHXInteger.md) |

<a id="deprecated-enums"></a>

## Deprecated Enums
| Enum and Description |
| --- |
| [com.phoenix_int.pacz.api.RunFolderPreference](com/phoenix_int/pacz/api/RunFolderPreference.md)<br>see [`com.phoenix_int.pacz.api.v2.RunFolderPreference`](com/phoenix_int/pacz/api/v2/RunFolderPreference.md) |
| [com.phoenix_int.pacz.api.VariableDataType](com/phoenix_int/pacz/api/VariableDataType.md) IRuntimeVariables are now using the canonical PHX type identifiers which are literal strings (see [`com.phoenix_int.pacz.api.v2`](com/phoenix_int/pacz/api/v2/package-summary.md)) |

<a id="deprecated-fields"></a>

## Deprecated Fields
| Field and Description |
| --- |
| [com.phoenix_int.aserver.util.PHXFileParser.AUTOMATIC](com/phoenix_int/aserver/util/PHXFileParser.md)<br>in favor of [Parser.Mode.AUTOMATIC](com/phoenix_int/aserver/util/Parser.Mode.md) |
| [com.phoenix_int.aserver.util.PHXFileParser.BUFFERED](com/phoenix_int/aserver/util/PHXFileParser.md)<br>in favor of [Parser.Mode.BUFFERED](com/phoenix_int/aserver/util/Parser.Mode.md) |
| [com.phoenix_int.aserver.util.PHXFileParser.FILE_SIZE_LIMIT](com/phoenix_int/aserver/util/PHXFileParser.md)<br>in favor of [Parser.Mode.FILE_SIZE_LIMIT](com/phoenix_int/aserver/util/Parser.Mode.md) |
| [com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldFile.GENERATE](com/phoenix_int/aserver/util/scriptwrapper/api/PHXRowFieldFile.md)<br>in favor of [ParseableFile.Mode.GENERATE](com/phoenix_int/aserver/util/scriptwrapper/api/ParseableFile.Mode.md) |
| [com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldFile.PARSE](com/phoenix_int/aserver/util/scriptwrapper/api/PHXRowFieldFile.md)<br>in favor of [ParseableFile.Mode.PARSE](com/phoenix_int/aserver/util/scriptwrapper/api/ParseableFile.Mode.md) |
| [com.phoenix_int.aserver.util.PHXFileParser.RANDOM_ACCESS](com/phoenix_int/aserver/util/PHXFileParser.md)<br>in favor of [Parser.Mode.RANDOM](com/phoenix_int/aserver/util/Parser.Mode.md) |
| [com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldFile.READ_TEMPLATE](com/phoenix_int/aserver/util/scriptwrapper/api/PHXRowFieldFile.md)<br>in favor of [ParseableFile.Mode.READ_TEMPLATE](com/phoenix_int/aserver/util/scriptwrapper/api/ParseableFile.Mode.md) |

<a id="deprecated-methods"></a>

## Deprecated Methods
| Method and Description |
| --- |
| [com.phoenix_int.aserver.types.PHXTypeFactory.allocateArray(String)](com/phoenix_int/aserver/types/PHXTypeFactory.md)<br>Prefer [PHXTypeFactory.allocateVariable2(java.lang.String)](com/phoenix_int/aserver/types/PHXTypeFactory.md) which can properly differentiate between arrays and non-array types. |
| [com.phoenix_int.aserver.types.PHXTypeFactory.allocateVariable(String)](com/phoenix_int/aserver/types/PHXTypeFactory.md)<br>Prefer [PHXTypeFactory.allocateVariable2(java.lang.String)](com/phoenix_int/aserver/types/PHXTypeFactory.md) which can properly differentiate between arrays and non-array types. |
| [com.phoenix_int.aserver.types.PHXString.arrayToString(String[])](com/phoenix_int/aserver/types/PHXString.md) |
| [com.phoenix_int.aserver.types.PHXInteger.getHasFormat()](com/phoenix_int/aserver/types/PHXInteger.md)<br>in favor of [PHXInteger.hasFormat()](com/phoenix_int/aserver/types/PHXInteger.md) |
| [com.phoenix_int.aserver.types.PHXLong.getHasFormat()](com/phoenix_int/aserver/types/PHXLong.md)<br>in favor of [PHXLong.hasFormat()](com/phoenix_int/aserver/types/PHXLong.md) |
| [com.phoenix_int.aserver.types.PHXRawFile.getValueStream()](com/phoenix_int/aserver/types/PHXRawFile.md)<br>using `toString2().getInputStream()` is prefered. |
| [com.phoenix_int.aserver.library.IPHXFactory.instantiate(File, String, String)](com/phoenix_int/aserver/library/IPHXFactory.md)<br>It is preferred to use [`IPHXFactory2.instantiateManaged(java.io.File, java.lang.String, java.lang.String)`](com/phoenix_int/aserver/library/IPHXFactory2.md) as this method can lead to resource leaks. |
| [com.phoenix_int.aserver.library.IPHXLibrarian.instantiate(String, String)](com/phoenix_int/aserver/library/IPHXLibrarian.md) |
| [com.phoenix_int.aserver.library.IPHXLibrarian.instantiate(String, String, String, String)](com/phoenix_int/aserver/library/IPHXLibrarian.md) |

<a id="deprecated-constructors"></a>

## Deprecated Construtors
| Constructor and Description |
| --- |
| [com.phoenix_int.aserver.util.PHXFileParser(String, int)](com/phoenix_int/aserver/util/PHXFileParser.md)<br>in favor of [PHXFileParser.PHXFileParser(String, Parser.Mode)](com/phoenix_int/aserver/util/PHXFileParser.md) |
| [com.phoenix_int.aserver.util.scriptwrapper.api.PHXRowFieldFile(PHXScriptWrapperObject, int)](com/phoenix_int/aserver/util/scriptwrapper/api/PHXRowFieldFile.md)<br>in favor of [PHXRowFieldFile.PHXRowFieldFile(PHXScriptWrapperObject, ParseableFile.Mode)](com/phoenix_int/aserver/util/scriptwrapper/api/PHXRowFieldFile.md) |