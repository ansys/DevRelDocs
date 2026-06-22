# getDirectTransfer


public [getDirectTransfer](get-direct-transfer.md)(): [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html)

Gets the directTransfer flag. When true, if this file an input to an AnalysisServer component and if this file is linked to the output of another AnalysisServer component, then the file will be transfered directly between the two AnalysisServers.

#### Return

true if the directTransfer flag is true

#### Throws

| |
|---|
| [ModelCenterException](./../-model-center-exception/index.md) |
