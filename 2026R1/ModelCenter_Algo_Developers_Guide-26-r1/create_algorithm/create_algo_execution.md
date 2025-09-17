# Implement Algorithm Execution

The Optimization Tool calls the [`Run()`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#run) method to start the execution of the algorithm.

When the `Run` method has been called, the problem definition has already been passed to the algorithm. It is recommended that the algorithm verify that the problem definition pass is suitable for the algorithm, and if it is not, an exception explaining the problem should be thrown.

When the algorithm requires a model evaluation from ModelCenter, it should call the [`EvaluateModel(Object[])`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithmHost.md#evaluatemodel) method. It is recommended to use the multi-dimensional `EvaluateModel` method whenever possible because it allows ModelCenter to run model evaluations in parallel. Before each `EvaluateModel` call the [`Halt`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithmHost.md#halt) property to see whether a halt has been requested by ModelCenter.

For single objective problems, the algorithm should call [`UpdateBestDesign(Object[])`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithmHost.md#updatebestdesign) as the optimization progresses so that the designs can be plotted in the convergence history. For multiobjective problems, the Pareto front of designs should be reported back to the Optimization Tool using the `UpdateBestDesigns` method.

### See Also

- [`IAlgorithmHost`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithmHost.md)
- [`SetStatusMessage(String)`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithmHost.md#setstatusmessage)
- [`SetStatusMessage(String, MessageType)`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithmHost.md#setstatusmessage)



