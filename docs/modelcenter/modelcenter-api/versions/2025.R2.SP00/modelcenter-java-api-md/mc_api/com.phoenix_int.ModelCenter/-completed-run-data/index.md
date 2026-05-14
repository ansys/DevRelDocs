# CompletedRunData


public class [CompletedRunData](index.md)

Structure that contains information about completed runs.

#### Author

mbelcher

## Constructors

| | |
|---|---|
| [CompletedRunData](-completed-run-data.md) | constructor(runIDs: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)&gt;, errorIDs: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)&gt;, errorMessages: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)&gt;, variableValues: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)&gt;&gt;, endSequenceNumber: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html), nextSequenceNumber: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html))<br>Creates a new CompletedRunData object. |

## Functions

| Name | Summary |
|---|---|
| [getEndSequenceNumber](get-end-sequence-number.md) | public [getEndSequenceNumber](get-end-sequence-number.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>Gets the end sequence number. |
| [getErrorIDs](get-error-i-ds.md) | public [getErrorIDs](get-error-i-ds.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)&gt;<br>Gets an array of errorIDs for each corresponding run in runIDs. |
| [getErrorMessages](get-error-messages.md) | public [getErrorMessages](get-error-messages.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)&gt;<br>Gets an array of error messages for each corresponding run in runIDs. |
| [getNextSequenceNumber](get-next-sequence-number.md) | public [getNextSequenceNumber](get-next-sequence-number.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)<br>Gets the next sequence number, which can be used as the value of startSequenceNumber in the next subsequent call to getCompletedRunData. |
| [getRunIDs](get-run-i-ds.md) | public [getRunIDs](get-run-i-ds.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)&gt;<br>Gets an array of the IDs of the runs that have completed. |
| [getVariableValues](get-variable-values.md) | public [getVariableValues](get-variable-values.md)(): [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Any](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-any/index.html)&gt;&gt;<br>Gets a multi-dimensional array of variable values. |
