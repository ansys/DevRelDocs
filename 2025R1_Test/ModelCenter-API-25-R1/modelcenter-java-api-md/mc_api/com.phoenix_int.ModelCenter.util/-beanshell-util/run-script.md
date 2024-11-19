//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter.util](../index.md)/[BeanshellUtil](index.md)/[runScript](run-script.md)

# runScript


public [runScript](run-script.md)(bshScript: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), arg: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)

Run the specified string as a beanshell script TODO in future: support passing in more than one argument.

#### Return

An object containing the result of the script.

#### Parameters



| | |
|---|---|
| bshScript | the string to run through the BSH interpreter. |
| arg | An argument to be passed in to the script. Should be referred to in the script by the name &quot;arg&quot;. |

#### Throws

| | |
|---|---|
| [Exception](https://docs.oracle.com/javase/8/docs/api/java/lang/Exception.html) | if something goes wrong while executing the script |
