# IRunDataAction


interface [IRunDataAction](index.md)

This is the interface to handle Design Viewer (geometry tooltip) events delegated to certain types of Data Explorer Plug-Ins such as Data Visualizer

## Functions

| Name | Summary |
|---|---|
| [getComparisonInfoHTMLString](get-comparison-info-h-t-m-l-string.md) | abstract fun [getComparisonInfoHTMLString](get-comparison-info-h-t-m-l-string.md)(runIDs: [Array](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-array/index.html)&lt;[Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html)&gt;, detailLevel: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>get HTML string to compare designs |
| [getRunInfoHTMLString](get-run-info-h-t-m-l-string.md) | abstract fun [getRunInfoHTMLString](get-run-info-h-t-m-l-string.md)(runID: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), detailLevel: [Int](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-int/index.html)): [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)<br>get run info such as brush preference info |
| [passHTMLEvent](pass-h-t-m-l-event.md) | abstract fun [passHTMLEvent](pass-h-t-m-l-event.md)(elementID: [String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html), designViewerID: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), runID: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html))<br>pass HTML event to Data Visualizer Java codes |
| [updateHighlight](update-highlight.md) | abstract fun [updateHighlight](update-highlight.md)(runID: [Long](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html), highlight: [Boolean](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html))<br>update highlighted design |
