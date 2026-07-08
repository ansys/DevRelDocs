# IVariableHolder

interface [IVariableHolder](index.md) : [IHolder](./../-i-holder/index.md)

This is an interface for ModelCenter components

#### Author

Woyak, 10-01

#### Inheritors

| |
|---|
| [Assembly](./../-assembly/index.md) |
| [Component](./../-component/index.md) |
| [Group](./../-group/index.md) |
| [Assembly](./../-assembly/index.md) |
| [Component](./../-component/index.md) |
| [Group](./../-group/index.md) |

## Functions

| Name | Summary |
|---|---|
| [getFullName](./../-i-holder/get-full-name.md) | abstract fun [getFullName](./../-i-holder/get-full-name.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the full name of the current object, e.g. |
| [getGroup](get-group.md) | abstract fun [getGroup](get-group.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [Group](./../-group/index.md)<br>abstract fun [getGroup](get-group.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Group](./../-group/index.md)<br>gets the specified group |
| [getName](./../-i-holder/get-name.md) | abstract fun [getName](./../-i-holder/get-name.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>gets the name of the current object, e.g. |
| [getNumGroups](get-num-groups.md) | abstract fun [getNumGroups](get-num-groups.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>get the number of groups stored in this object |
| [getNumVariables](get-num-variables.md) | abstract fun [getNumVariables](get-num-variables.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>get the number of variables stored in this object |
| [getVariable](get-variable.md) | abstract fun [getVariable](get-variable.md)(index: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [Variable](./../-variable/index.md)<br>abstract fun [getVariable](get-variable.md)(name: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)): [Variable](./../-variable/index.md)<br>gets the specified variable |
