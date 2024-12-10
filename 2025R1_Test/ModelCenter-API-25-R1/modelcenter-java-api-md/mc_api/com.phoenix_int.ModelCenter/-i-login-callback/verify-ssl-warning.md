# verifySslWarning


abstract fun [verifySslWarning](verify-ssl-warning.md)(uri: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)

Called when ModelCenter needs an SSL warning to be verified/accepted.

#### Return

true if ModelCenter should proceed, false otherwse

#### Parameters



| | |
|---|---|
| uri | URI that has SSL warning |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
