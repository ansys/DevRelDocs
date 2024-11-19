//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter.util](../index.md)/[PHXCOMObject](index.md)

# PHXCOMObject

public class [PHXCOMObject](index.md)

This is a base class for Java objects that mirror ModelCenter COM objects

#### Author

Woyak, 10/2001

#### Inheritors

| |
|---|
| [AddToModel](../../com.phoenix_int.ModelCenter/-add-to-model/index.md) |
| [Assembly](../../com.phoenix_int.ModelCenter/-assembly/index.md) |
| [CachePin](../../com.phoenix_int.ModelCenter/-cache-pin/index.md) |
| [Component](../../com.phoenix_int.ModelCenter/-component/index.md) |
| [CustomDesignPoint](../../com.phoenix_int.ModelCenter/-custom-design-point/index.md) |
| [DataCollector](../../com.phoenix_int.ModelCenter/-data-collector/index.md) |
| [DataExplorer](../../com.phoenix_int.ModelCenter/-data-explorer/index.md) |
| [PHXDEKeepalive](../../com.phoenix_int.ModelCenter/-data-explorer/-p-h-x-d-e-keepalive/index.md) |
| [DataHistory](../../com.phoenix_int.ModelCenter/-data-history/index.md) |
| [DataMonitor](../../com.phoenix_int.ModelCenter/-data-monitor/index.md) |
| [DHVariable](../../com.phoenix_int.ModelCenter/-d-h-variable/index.md) |
| [Feature](../../com.phoenix_int.ModelCenter/-feature/index.md) |
| [FileSystemInfo](../../com.phoenix_int.ModelCenter/-file-system-info/index.md) |
| [Format](../../com.phoenix_int.ModelCenter/-format/index.md) |
| [GlobalParameters](../../com.phoenix_int.ModelCenter/-global-parameters/index.md) |
| [Group](../../com.phoenix_int.ModelCenter/-group/index.md) |
| [JobManager](../../com.phoenix_int.ModelCenter/-job-manager/index.md) |
| [ModelCenter](../../com.phoenix_int.ModelCenter/-model-center/index.md) |
| [RefArrayProp](../../com.phoenix_int.ModelCenter/-ref-array-prop/index.md) |
| [RefProp](../../com.phoenix_int.ModelCenter/-ref-prop/index.md) |
| [SaveContext](../../com.phoenix_int.ModelCenter/-save-context/index.md) |
| [TradeStudy](../../com.phoenix_int.ModelCenter/-trade-study/index.md) |
| [Variable](../../com.phoenix_int.ModelCenter/-variable/index.md) |
| [VariableDescription](../../com.phoenix_int.ModelCenter/-variable-description/index.md) |
| [VariableLink](../../com.phoenix_int.ModelCenter/-variable-link/index.md) |
| [VariableLinks](../../com.phoenix_int.ModelCenter/-variable-links/index.md) |
| [VariableMetaDataProvider](../../com.phoenix_int.ModelCenter/-variable-meta-data-provider/index.md) |
| [Variables](../../com.phoenix_int.ModelCenter/-variables/index.md) |
| [AddToModel](../../com.phoenix_int.ModelCenter/-add-to-model/index.md) |
| [Assembly](../../com.phoenix_int.ModelCenter/-assembly/index.md) |
| [CachePin](../../com.phoenix_int.ModelCenter/-cache-pin/index.md) |
| [Component](../../com.phoenix_int.ModelCenter/-component/index.md) |
| [CustomDesignPoint](../../com.phoenix_int.ModelCenter/-custom-design-point/index.md) |
| [DataCollector](../../com.phoenix_int.ModelCenter/-data-collector/index.md) |
| [DataExplorer](../../com.phoenix_int.ModelCenter/-data-explorer/index.md) |
| [PHXDEKeepalive](../../com.phoenix_int.ModelCenter/-data-explorer/-p-h-x-d-e-keepalive/index.md) |
| [DataHistory](../../com.phoenix_int.ModelCenter/-data-history/index.md) |
| [DataMonitor](../../com.phoenix_int.ModelCenter/-data-monitor/index.md) |
| [DHVariable](../../com.phoenix_int.ModelCenter/-d-h-variable/index.md) |
| [Feature](../../com.phoenix_int.ModelCenter/-feature/index.md) |
| [FileSystemInfo](../../com.phoenix_int.ModelCenter/-file-system-info/index.md) |
| [Format](../../com.phoenix_int.ModelCenter/-format/index.md) |
| [GlobalParameters](../../com.phoenix_int.ModelCenter/-global-parameters/index.md) |
| [Group](../../com.phoenix_int.ModelCenter/-group/index.md) |
| [JobManager](../../com.phoenix_int.ModelCenter/-job-manager/index.md) |
| [ModelCenter](../../com.phoenix_int.ModelCenter/-model-center/index.md) |
| [RefArrayProp](../../com.phoenix_int.ModelCenter/-ref-array-prop/index.md) |
| [RefProp](../../com.phoenix_int.ModelCenter/-ref-prop/index.md) |
| [SaveContext](../../com.phoenix_int.ModelCenter/-save-context/index.md) |
| [TradeStudy](../../com.phoenix_int.ModelCenter/-trade-study/index.md) |
| [Variable](../../com.phoenix_int.ModelCenter/-variable/index.md) |
| [VariableDescription](../../com.phoenix_int.ModelCenter/-variable-description/index.md) |
| [VariableLink](../../com.phoenix_int.ModelCenter/-variable-link/index.md) |
| [VariableLinks](../../com.phoenix_int.ModelCenter/-variable-links/index.md) |
| [VariableMetaDataProvider](../../com.phoenix_int.ModelCenter/-variable-meta-data-provider/index.md) |
| [Variables](../../com.phoenix_int.ModelCenter/-variables/index.md) |
| [Logger](../../com.phoenix_int.ModelCenter.logging/-logger/index.md) |
| [Logger](../../com.phoenix_int.ModelCenter.logging/-logger/index.md) |

## Functions

| Name | Summary |
|---|---|
| [disableGC](disable-g-c.md) | public [disableGC](disable-g-c.md)(gc: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>If true, prevents releaseObjects from doing anything. |
| [release](release.md) | public [release](release.md)()<br>Releases the COM reference to ModelCenter for this object. |
| [releaseObjects](release-objects.md) | public [releaseObjects](release-objects.md)()<br>This function attempts to release any COM resources left behind from objects which have been finalized but release() was never called on them. |
| [setReferenceDebugMode](set-reference-debug-mode.md) | public [setReferenceDebugMode](set-reference-debug-mode.md)(on: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>When set to true, the system will keep a list of active COM objects that are allocated but not yet released since this method was invoked. |
