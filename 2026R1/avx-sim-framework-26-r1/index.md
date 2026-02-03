# Introduction

Simulation Framework stands at the forefront of autonomous driving simulation, providing developers and researchers with advanced capabilities for precise KPI evaluations, cloud-enabled scalability, open standard support, rapid software iteration, and flexible integration. With Simulation Framework as a foundational tool, technical experts can drive the development of safer, more efficient, and highly optimized systems using simulation.

## Concepts and architecture

One of Simulation Framework's key strengths lies in its deterministic KPI evaluations. By providing event-driven scheduling mechanism, Simulation Framework enables precise assessment of autonomous driving algorithms. This feature is vital for evaluating system capabilities, identifying areas for improvement, and ensuring reliable and predictable behavior in various scenarios.

Simulation Framework is built with cloud readiness in mind, allowing users to harness the power of cloud computing for scalable and resource-efficient simulations. This scalability is particularly useful for accelerating development cycles and conducting large-scale testing and validating.

Open standard support is another highlight of Simulation Framework. The framework embraces [ASAM standards](https://www.asam.net/), including the [Open Simulation Interface (OSI)](https://github.com/OpenSimulationInterface), [OpenScenario](https://www.asam.net/standards/detail/openscenario/), [OpenDrive](https://www.asam.net/standards/detail/opendrive/). This support ensures interoperability and facilitates collaboration within the autonomous driving community. Simulation Framework can seamlessly integrate with other simulation tools, allowing for efficient data exchange and fostering a unified approach to simulation.

Simulation Framework excels at facilitating a faster software iteration process. Its streamlined workflows and intuitive interfaces empower developers to iterate and refine their algorithms rapidly. This capability is crucial for reducing development timelines, adapting to changing requirements, and achieving high standards of safety and performance in autonomous driving systems.

Flexibility is a core aspect of Simulation Framework, enabling seamless integration and deployment. The framework features a modular architecture that can integrate with existing software stacks and simulation platforms. This flexibility allows developers to customize and adapt Simulation Framework to suit their specific project requirements, whether it involves integrating proprietary algorithms or deploying simulations across distributed computing resources.

![Software Layers in Simulation Framework](images/software_layers_in_simulation_framework.png)

## Activity and simulation mode

To participate in the simulation as a distinct entity with specific logic, an `Activity` serves as the fundamental component. This `Activity` can publish/subscribe to messages through topics in the communication channel and can be scheduled according to user configurations. The Simulation Framework offers interfaces enabling users to implement custom logic within an `Activity`, facilitating the customization of simulation applications based on their specific requirements.

Your simulation can be configured in various modes based on different combinations of activities. You can use different simulation modes or a hybrid of the two modes described below. The provided `built-in` activities in the reference simulation can be directly executed in the centralized simulation mode. Any custom `standalone` activity can be incorporated into the simulation after implementation and then used in a "Hybrid-mode" along with the reference simulation.

![Simulation in hybrid mode](images/simulation_hybrid_mode.png)

## Centralized simulation mode

All activities run within the same process as the `simfwk_cli`. Activities in this mode are referred to as type `built-in` in the scheduling configuration. Communication between activities in this mode is optimized, resulting in the best stability and performance. Currently, the extension of `built-in` activities by users is not supported. However, in the future, users will be able to add custom activities using the Simulation Framework libraries, register them with the activity factory, and recompile the library.

## Distributed simulation mode

Users can create `standalone` activities using the `StandaloneActivityService` interfaces provided with the Simulation Framework. Activities in this mode are referred to as type `standalone` in the scheduling configuration. These standalone activities operate in a distributed mode, serving specific simulation requests. In this mode, significant benefits arise if the activity is independently deployed into an environment containing specific resources or hardware, without affecting other activities or the simulation core process. Standalone activities can be easily iterated, compiled, and deployed individually without changing the core library or affecting other components. Communication is ensured via DDS communication, even in distributed scenarios.

For implementation details, refer to [how to implement and use customized standalone activity](user-guide/customized_activity.md)

## Evaluation

The primary objective of native support for validation on the customer's System Under Test (SUT) guides the Simulation Framework. It furnishes a standardized KPI message format and evaluator interfaces, empowering users to seamlessly employ reference KPIs or incorporate new, customized KPI logic. This flexibility enables users to conduct thorough validation of their SUT using the AVxcelerate toolchain. For in-depth information, please consult [how to create customized KPIs and utilize them as evaluator activities](user-guide/customized_kpi_evaluator.md)
