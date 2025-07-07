# IComponentPlugIn


interface [IComponentPlugIn](index.md)

This is the interface that must be implemented by all Java plug-ins for ModelCenter. Please note that due to an issue in Java 8, we do not explicitly override [toString](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#toString--) here, but you still need to implement it.

## Functions

| Name | Summary |
|---|---|
| [construct](construct.md) | abstract fun [construct](construct.md)(mc: [ModelCenter](../-model-center/index.md), atm: [AddToModel](../-add-to-model/index.md))<br>called when the plug-in is launched from ModelCenter |
| [fromString](from-string.md) | abstract fun [fromString](from-string.md)(state: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html))<br>Called to restore the state of a Plug-In. |
| [onEnd](on-end.md) | abstract fun [onEnd](on-end.md)()<br>called when the plug-in is about to be deleted. |
| [run](run.md) | abstract fun [run](run.md)()<br>called when the plug-in should run |
| [show](show.md) | abstract fun [show](show.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>called to display the plug-in |
