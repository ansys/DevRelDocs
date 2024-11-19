//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[IModelCenter](index.md)/[startGUIMode](start-g-u-i-mode.md)

# startGUIMode


abstract fun [startGUIMode](start-g-u-i-mode.md)(showDialogs: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))

THIS FUNCTION IS A BETA CAPABILITY Normally when invoked via COM, ModelCenter is in &quot;server&quot; mode and it hides all GUI and dialogs. This method can be invoked immediately after instantiating the ModelCenter object to cause the GUI to be displayed. Calling this method at any other time than immediately after creating the ModelCenter object is NOT SUPPORTED. Strange behavior or even crashes will likely ensue if it is called at any other time. Once this method is invoked, ModelCenter may pop up GUI dialogs requiring user interation at any time. This means your script may hang indefinitely if a user is not there to click through. For example, if a component fails to load on model load, the user would be prompted with the failed component dialog and the loadModel() api function would hang until the user answered the dialog.

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
