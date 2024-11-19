//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[Variable](index.md)/[toStringAbsolute](to-string-absolute.md)

# toStringAbsolute


public [toStringAbsolute](to-string-absolute.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

Converts the variable value to a string representation. If the variable is not currently valid, it is NOT validated.

#### Return

the string value of the variable. If the variable is an array, it will to be of the form &quot;1, 2, 3&quot; for one-dimensional arrays or &quot;bounds[3,3] {1, 2, 3, 4, 5, 6, 7, 8, 9}&quot; for multi-dimensional arrays.

#### Throws

| |
|---|
| [ModelCenterException](../-model-center-exception/index.md) |
