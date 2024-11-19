//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[VariableMetaDataProvider](index.md)

# VariableMetaDataProvider


public class [VariableMetaDataProvider](index.md) : [PHXCOMObject](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/index.md)

Metadata provider for variable data.

#### Author

Dave

## Functions

| Name | Summary |
|---|---|
| [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md) | public [disableGC](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/disable-g-c.md)(gc: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>If true, prevents releaseObjects from doing anything. |
| [getAllVariableMetaData](get-all-variable-meta-data.md) | public [getAllVariableMetaData](get-all-variable-meta-data.md)(path: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[DHVariable](../-d-h-variable/index.md)&gt;<br>Get the metadata of all variables within a specified path. |
| [getVariableMetaData](get-variable-meta-data.md) | public [getVariableMetaData](get-variable-meta-data.md)(fullName: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [DHVariable](../-d-h-variable/index.md)<br>Get the metadata about a variable. |
| [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md) | public [release](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release.md)()<br>Releases the COM reference to ModelCenter for this object. |
| [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md) | public [releaseObjects](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/release-objects.md)()<br>This function attempts to release any COM resources left behind from objects which have been finalized but release() was never called on them. |
| [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md) | public [setReferenceDebugMode](../../com.phoenix_int.ModelCenter.util/-p-h-x-c-o-m-object/set-reference-debug-mode.md)(on: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>When set to true, the system will keep a list of active COM objects that are allocated but not yet released since this method was invoked. |
