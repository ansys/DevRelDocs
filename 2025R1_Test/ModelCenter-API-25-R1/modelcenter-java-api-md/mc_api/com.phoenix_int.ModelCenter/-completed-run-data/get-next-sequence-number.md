//[mc_api](../../../index.md)/[com.phoenix_int.ModelCenter](../index.md)/[CompletedRunData](index.md)/[getNextSequenceNumber](get-next-sequence-number.md)

# getNextSequenceNumber


public [getNextSequenceNumber](get-next-sequence-number.md)(): [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)

Gets the next sequence number, which can be used as the value of startSequenceNumber in the next subsequent call to getCompletedRunData. This value may be greater than (startSequenceNumber + runs) if a given run completed multiple times due to re-runs.

#### Return

the next sequence number
