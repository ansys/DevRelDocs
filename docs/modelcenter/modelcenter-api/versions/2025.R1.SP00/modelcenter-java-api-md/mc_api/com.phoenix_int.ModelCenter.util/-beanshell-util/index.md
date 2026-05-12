# BeanshellUtil


public class [BeanshellUtil](index.md)

Utility class to execute any arbitrary Beanshell script from native code and return an object that can be accessed via JNI.

#### Author

mbelcher

## Constructors

| | |
|---|---|
| [BeanshellUtil](-beanshell-util.md) | constructor() |

## Functions

| Name | Summary |
|---|---|
| [runScript](run-script.md) | public [runScript](run-script.md)(bshScript: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), arg: [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)): [Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)<br>Run the specified string as a beanshell script TODO in future: support passing in more than one argument. |
