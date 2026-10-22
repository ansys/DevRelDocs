# Control::Common {#control_common .sone-topic}

Common control operators.

|Operator Name|Description|
|-------------|-----------|
|[CheckRange](common_checkrange.md)|Returns whether a value is within an interval.|
|[CheckSlope](common_checkslope.md)|Returns whether the absolute value of the input flow slope is less than a maximal value.|
|[IsIncreasing](common_isincreasing.md)|Returns whether the input flow is increasing.|
|[IsDecreasing](common_isdecreasing.md)|Returns whether the input flow is decreasing.|
|[HitCrossing](common_hitcrossing.md)|Returns whether the input flow crosses a value in a given direction or both.|
|[ZeroCrossing](common_zerocrossing.md)|Returns whether the input flow crosses zero in a given direction or both.|
|[IntegratorForward](common_integratorsforward.md)|Approximates the integral value of a signal using the Forward Euler method, applying the current input value over the sampling period.|
|[IntegratorBackward](common_integrators.md)|Approximates the integral value of a signal using the Backward Euler method, applying the input value from the end of the sampling period.|
|[IntegratorTrapezoid](common_integratorstrapezoid.md)|Approximates the integral value of a signal using the trapezoid method, applying the average of the current and previous input values.|
|[Derivative](common_derivative.md)|Returns a discrete-time derivative of the input.|
|[SaturatedIntegratorForward](common_saturatedintegratorforward.md)|Approximates the integral value of a signal using the Forward Euler method, applying the current input value over the sampling period and limits the output to configured bounds.|
|[SaturatedIntegratorBackward](common_saturatedintegratorBackward.md)|Approximates the integral value of a signal using the Backward Euler method, applying the input value from the end of the sampling period and limits the output to configured bounds.|
|[SaturatedIntegratorTrapezoid](common_saturatedintegratortrapezoid.md)|Approximates the integral value of a signal using the trapezoid method, applying the average of the current and previous input values and limits the output to configured bounds.|

