# Introduction

This article outlines the lifecycle of an algorithm from its creation to its final disposal.

## Algorithm Lifecycle

1. [Algorithm created](create_algorithm.md)
2. [IAlgorithmHost](api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithmHost.md) set (see [SetHost(IAlgorithmHost)](api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#SetHost))
3. [Options](api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#Options) are set
4. [Objective](api/Namespaces/NamespaceList/Phoenix/Optimization/Objective.md)s are set (see [SetObjectives(List<Objective>)](api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#SetObjectives))
5. [OptConstraint](api/Namespaces/NamespaceList/Phoenix/Optimization/OptConstraint.md)s are set (see [SetConstraints(List<OptConstraint>)](api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#SetConstraints))
6. [DesignVariable](api/Namespaces/NamespaceList/Phoenix/Optimization/DesignVariable.md)s are set (see [SetDesignVariables(List<DesignVariable>)](api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#SetDesignVariables))
7. [Options](api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#Options) are read for changes made by algorithm (warning status message notifying the user of the change should be sent by the algorithm) so updated options can be displayed on the output form)
8. Checkpoint restored if one is specified (see [RestoreCheckPoint(String)](api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#RestoreCheckPoint))
9. [Run](api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#Run) called
10. [ResultsReport](api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#ResultsReport) retrieved (see note below)
11. [DetailsReport](api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#DetailsReport) retrieved (see note below)
12. Algorithm disposed (see [Dispose](api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#Dispose))

**Note:** Both `ResultsReport` and `DetailsReport` can be called during the run to update the output form, so these properties must be thread safe. The `ResultsReport` can but is not required to update during the run, but the `DetailsReport` is expected to update during the algorithm's run to allow the user to monitor progress.



