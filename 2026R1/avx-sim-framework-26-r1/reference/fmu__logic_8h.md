# File fmu_logic.h

![][C++]

**Location**: `core/lifecycle/fmu_activity/fmu_logic.h`





## Classes

* [simulation_framework::core::lifecycle::FmuLogic](classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic.md#classsimulation__framework_1_1core_1_1lifecycle_1_1FmuLogic)

## Namespaces

* [fmi4cpp](namespacefmi4cpp.md#namespacefmi4cpp)
* [fmi4cpp::fmi2](namespacefmi4cpp_1_1fmi2.md#namespacefmi4cpp_1_1fmi2)
* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)
* [simulation_framework::core::lifecycle](namespacesimulation__framework_1_1core_1_1lifecycle.md#namespacesimulation__framework_1_1core_1_1lifecycle)

## Includes

* core/lifecycle/fmu_activity/fmu_state.h
* [core/lifecycle/fmu_activity/i_fmu_logic.h](i__fmu__logic_8h.md#i__fmu__logic_8h)
* <memory>
* <set>




## Source


```cpp


#pragma once

#include "core/lifecycle/fmu_activity/fmu_state.h"
#include "core/lifecycle/fmu_activity/i_fmu_logic.h"
#include <memory>
#include <set>

namespace fmi4cpp
{
namespace fmi2
{
class fmu;
class cs_fmu;
class cs_slave;
}  // namespace fmi2
enum class status;
}  // namespace fmi4cpp

namespace simulation_framework
{
namespace core
{

namespace lifecycle
{

class FmuLogicImpl;

namespace fmi = fmi4cpp::fmi2;

class FmuLogic : public IFmuLogic
{
  public:
    FmuLogic(const std::string& fmu_path);

    virtual ~FmuLogic() override;
    FmuLogic(FmuLogic&&) noexcept;
    FmuLogic& operator=(FmuLogic&&) noexcept;

    void SetupExperiment(double start = 0, double stop = 0, double tolerance = 0) override;

    void EnterInitialization() override;

    void ExitInitialization() override;

    void Setup(double start = 0, double stop = 0, double tolerance = 0) override;

    FmuInOutMap InitInOutMap(std::set<std::string> variable_names) override;

    bool Step(double step_size, const FmuInOutMap& input) override;

    bool Step(double step_size) override;

    void SetInitializationParams(const FmuInOutMap& params) override;

    void SetInputs(const FmuInOutMap& inputs) override;

    template <typename T>
    void SetValue(const std::string& variable_name, const T& value);

    template <typename T>
    T GetOutput(const std::string& variable_name) const;

    FmuInOutMap GetOutputs() const override;

    void GetOutputs(FmuInOutMap& requested_outputs) const override;

    double GetSimulationTime() const;

    fmi4cpp::status GetLastStatus() const;

    const fmi::fmu* GetFmuPtr() const;

    const fmi::cs_fmu* GetCsFmuPtr() const;

    const fmi::cs_slave* GetFmuInstancePtr() const;

    FmuState GetFmuState() const override;

  private:
    std::unique_ptr<FmuLogicImpl> impl_;
};

}  // namespace lifecycle
}  // namespace core
}  // namespace simulation_framework
```


[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)