//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[IDataExplorerPlugIn](index.md)/[construct](construct.md)

# construct


abstract fun [construct](construct.md)(dhid: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), freeDaX: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), dialogParent: [JFrame](https://docs.oracle.com/javase/8/docs/api/javax/swing/JFrame.html), pluginid: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), dh: [DataHistory](../-data-history/index.md), mc: [ModelCenter](../-model-center/index.md), context: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Container](https://docs.oracle.com/javase/8/docs/api/java/awt/Container.html)

Construct your plug-in.

#### Parameters



| | |
|---|---|
| dhid | The unique Data History ID. Will be unique per instance of ModelCenter |
| freeDaX | True if this is the standalone Data Explorer product and running without a license. |
| dialogParent | A JFrame to use as a parent to any dialog boxes |
| pluginid | A unique ID for your plugin instance that won't change |
| dh | The Data History object. Do not call this object on the Swing Event Dispatch Thread |
| mc | The ModelCenter object. Do not call this object on the Swing Event Dispatch Thread |
| context | This is the name of the plug-in, such as &quot;2D Line&quot;. This is useful if you have a single plug-in with multiple behaviors. |
