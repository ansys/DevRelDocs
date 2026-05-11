# Structure sysc::SolutionControl

![][C++]
![][public]

**Definition**: `CommonTypes.hpp` (line 58)

Provide a structure containing solution control.



## Members

* [maximumIterations](structsysc_1_1SolutionControl.md#structsysc_1_1SolutionControl_1a0c973b27756ebeaf6fbe6d456c13b697)
* [minimumIterations](structsysc_1_1SolutionControl.md#structsysc_1_1SolutionControl_1a6c84cc77b261df44b0f7f339f77a526b)

## Public attributes

<a id="structsysc_1_1SolutionControl_1a6c84cc77b261df44b0f7f339f77a526b"></a>
### Variable minimumIterations

![][public]

**Definition**: `CommonTypes.hpp` (line 59)

```cpp
int sysc::SolutionControl::minimumIterations {0}
```



Min iterations (per time step, if transient).



**Type**: int

<a id="structsysc_1_1SolutionControl_1a0c973b27756ebeaf6fbe6d456c13b697"></a>
### Variable maximumIterations

![][public]

**Definition**: `CommonTypes.hpp` (line 60)

```cpp
int sysc::SolutionControl::maximumIterations {0}
```



Max iterations (per time step, if transient).



**Type**: int

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)