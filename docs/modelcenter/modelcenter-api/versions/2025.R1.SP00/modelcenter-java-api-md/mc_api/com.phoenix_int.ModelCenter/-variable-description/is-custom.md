# isCustom


public [isCustom](is-custom.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)

indicates if the variable is a custom variable, i.e. not directly part of the Model. Custom variables are used to represent design variables for trade studies and may actually be equations of other variables. If the variable is custom, the getName() function will return the label used to identify the variable.

#### Return

true or false.

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
