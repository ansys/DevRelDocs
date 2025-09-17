# How to Implement Capability Properties

The algorithm capability properties are used by the Algorithm Selection Wizard to help the user select algorithms appropriate for their problem definition.

- [`MaxNumberOfObjectives`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#MaxNumberOfObjectives) - the maximum number of objectives that the algorithm can handle. If the algorithm has no limit to the number of objectives, then return -1.

- [`NumModelEvaluations`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#NumModelEvaluations) - this is a general evaluation of how many model evaluations are required for convergence and it is of the [AlgorithmNumModelEvaluations](../api/Namespaces/NamespaceList/Phoenix/optimization.md#AlgorithmNumModelEvaluations) enum type.

- [`SupportsConstraints`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#SupportsConstraints) - whether the algorithm supports constraints. The property is of the [FuzzyBoolean](../api/Namespaces/NamespaceList/Phoenix/optimization.md#FuzzyBoolean) enum type. The algorithm can specify that it does or does not support discrete variables, or that it can handle constraints, but not very well.

- [`SupportsDiscreteVariables`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#SupportsDiscreteVariables) - whether the algorithm supports discrete variables. The property is of the [FuzzyBoolean](../api/Namespaces/NamespaceList/Phoenix/optimization.md#FuzzyBoolean) enum type. The algorithm can specify that it does or does not support discrete variables, or that it can handle discrete variables, but not very well.

- [`SupportsMinMax`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#SupportsMinMax) - whether the algorithm supports the minimizing or maximizing the objective. The property is of the [FuzzyBoolean](../api/Namespaces/NamespaceList/Phoenix/optimization.md#FuzzyBoolean) enum type. The algorithm can specify that it does or does not support discrete variables, or that it can handle minimizing and maximizing objectives, but not very well.

- [`SupportsMultipleObjectives`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#SupportsMultipleObjectives) - whether the algorithm supports multiple objectives. The algorithm can specify whether or not it directly supports multiple objectives. If the algorithm does not support multiple objectives, the infrastructure will create a single objective as a weighted sum of all of the objectives.

- [`SupportsNonSmoothResponses`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#SupportsNonSmoothResponses) - whether the algorithm supports non-smooth responses (objectives and constraints). The property is of the [FuzzyBoolean](../api/Namespaces/NamespaceList/Phoenix/optimization.md#FuzzyBoolean) enum type. The algorithm can specify that it does or does not support non-smooth responses, or that it can handle non-smooth responses, but not very well.

- [`SupportsSolveFor`](../api/Namespaces/NamespaceList/Phoenix/Optimization/IAlgorithm.md#SupportsSolveFor) - whether the algorithm supports solving an objective for a specific value. The property is of the [FuzzyBoolean](../api/Namespaces/NamespaceList/Phoenix/optimization.md#FuzzyBoolean) enum type. The algorithm can specify that it does or does not support discrete variables, or that it can handle solving for a value, but not very well. If the algorithm does not support solving for a value, the infrastructure will create an objective to minimize the difference between the objective and the solve for value.


