# loadClass


public [loadClass](load-class.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Class](https://docs.oracle.com/javase/8/docs/api/java/lang/Class.html)

Loads a local class first, if that fails continue with the ClassLoader.loadClass() parent delegation.

#### Return

The resulting `Class` object

#### Parameters



| | |
|---|---|
| name | The [binary name](#name) of the class |

#### Throws

| | |
|---|---|
| [ClassNotFoundException](https://docs.oracle.com/javase/8/docs/api/java/lang/ClassNotFoundException.html) | If the class was not found |
