# Implement Results Properties

Algorithms have two properties with which they can report back their results to the Optimization Tool.

- [`DetailsReport`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#detailsreport) - Returns a report detailing the progress of the algorithm, potentially expanding on the information provided by the SetStatusMessage method.

- [`ResultsReport`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#resultsreport) - Returns a report summarizing the results of the run.

Both of these properties can be accessed during the run, so they should be threadsafe. At a minimum, the DetailsReport should be updated during the run so that the user can examine the details of the algorithm progress while the algorithm is still running.

**NOTE:** The report can either be a simple string, or it can be in HTML format. If HTML format is used, then the starting and ending `<html>` tags must be defined.




