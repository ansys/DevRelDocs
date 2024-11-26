# requestAuthCredentials


abstract fun [requestAuthCredentials](request-auth-credentials.md)(uri: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), isFailedAttempt: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), username: [ValueHolder](../../com.phoenix_int.ModelCenter.util/-value-holder/index.md)&lt;[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)&gt;, password: [ValueHolder](../../com.phoenix_int.ModelCenter.util/-value-holder/index.md)&lt;[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)&gt;, savePassword: [ValueHolder](../../com.phoenix_int.ModelCenter.util/-value-holder/index.md)&lt;[Boolean](https://docs.oracle.com/javase/8/docs/api/java/lang/Boolean.html)&gt;): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)

Called when ModelCenter needs to request a username and password.

#### Return

true if username/password is submitted, false otherwise

#### Parameters



| | |
|---|---|
| uri | URI authenticating to |
| isFailedAttempt | true if request is due to previous failed attempt, false otherwise |
| username | username to use (inout) |
| password | password to use (inout) |
| savePassword | true if password should be saved, false otherwise (inout) |

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
