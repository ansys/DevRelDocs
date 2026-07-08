# toString


public [toString](to-string.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

Converts the variable value to a string representation. If the variable is not currently valid, it is first validated.

#### Return

the string value of the variable. If the variable is an array, it will to be of the form &quot;1, 2, 3&quot; for one-dimensional arrays or &quot;bounds[3,3] {1, 2, 3, 4, 5, 6, 7, 8, 9}&quot; for multi-dimensional arrays.

#### Throws

| | |
|---|---|
| [RuntimeException](https://docs.oracle.com/javase/8/docs/api/java/lang/RuntimeException.html) | thrown if an error occurs while trying to validate or retrieve the value of the variable. Note that this is a run time exception because Object.toString() cannot be overridden to throw an exception. |
