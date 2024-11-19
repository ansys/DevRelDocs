//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[IModelCenter](index.md)/[removeDataMonitor](remove-data-monitor.md)

# removeDataMonitor


abstract fun [removeDataMonitor](remove-data-monitor.md)(component: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), index: [Variant](../-variant/index.md)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)

remove a specific data monitor associated with a particular component

#### Return

whether the data monitor was successfully found and deleted

#### Parameters



| | |
|---|---|
| component | the name of the component under which to find the data monitor for deletion |
| index | the integer index (0-based index) or string title of the data monitor being removed |
