//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[DoubleVariable](index.md)/[toFormattedString](to-formatted-string.md)

# toFormattedString


public [toFormattedString](to-formatted-string.md)(): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

converts the variable value to a formatted string representation. If the variable is not currently valid, it is first validated.

#### Return

the formatted string value of the variable

#### Throws

| | |
|---|---|
| [RuntimeException](https://docs.oracle.com/javase/8/docs/api/java/lang/RuntimeException.html) | thrown if an error occurs while trying to validate or retrieve the value of the variable. Note that this is a run time exception because Object.toString() cannot be overridden to throw an exception. |
