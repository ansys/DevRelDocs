# loginSucceeded


abstract fun [loginSucceeded](login-succeeded.md)(uri: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), username: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), password: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), savePassword: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))

Called when ModelCenter succeeds in authentication.

#### Parameters



| | |
|---|---|
| uri | URI successfully authenticated to |
| username | username that successfully authenticated |
| password | password that successfully authenticated |
| savePassword | true if password should be saved, false otherwise |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
