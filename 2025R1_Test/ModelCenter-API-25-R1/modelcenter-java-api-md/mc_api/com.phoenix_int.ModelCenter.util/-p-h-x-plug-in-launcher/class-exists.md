# classExists


public [classExists](class-exists.md)(jarFile: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), className: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)

Utility method to determine if a class exists in a JAR file.

#### Return

true if the class exists, false if not

#### Parameters



| | |
|---|---|
| jarFile | the path to the JAR file |
| className | the fully-qualified name of the class to load |

#### Throws

| | |
|---|---|
| [IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html) | if the path is invalid |
