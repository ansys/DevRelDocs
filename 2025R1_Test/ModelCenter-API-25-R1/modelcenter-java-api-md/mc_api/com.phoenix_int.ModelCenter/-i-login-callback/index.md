# ILoginCallback


interface [ILoginCallback](index.md)

Interface for handling login requests from ModelCenter.

#### Author

acook

## Functions

| Name | Summary |
|---|---|
| [loginSucceeded](login-succeeded.md) | abstract fun [loginSucceeded](login-succeeded.md)(uri: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), username: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), password: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), savePassword: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>Called when ModelCenter succeeds in authentication. |
| [requestAuthCredentials](request-auth-credentials.md) | abstract fun [requestAuthCredentials](request-auth-credentials.md)(uri: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), isFailedAttempt: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html), username: [ValueHolder](../../com.phoenix_int.ModelCenter.util/-value-holder/index.md)&lt;[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)&gt;, password: [ValueHolder](../../com.phoenix_int.ModelCenter.util/-value-holder/index.md)&lt;[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)&gt;, savePassword: [ValueHolder](../../com.phoenix_int.ModelCenter.util/-value-holder/index.md)&lt;[Boolean](https://docs.oracle.com/javase/8/docs/api/java/lang/Boolean.html)&gt;): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Called when ModelCenter needs to request a username and password. |
| [verifySslWarning](verify-ssl-warning.md) | abstract fun [verifySslWarning](verify-ssl-warning.md)(uri: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)<br>Called when ModelCenter needs an SSL warning to be verified/accepted. |
