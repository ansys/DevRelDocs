# File console_logger.h

![][C++]

**Location**: `core/logging/console_logger.h`





## Classes

* [simulation_framework::core::logging::ConsoleLogger](classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger.md#classsimulation__framework_1_1core_1_1logging_1_1ConsoleLogger)

## Namespaces

* [simulation_framework](namespacesimulation__framework.md#namespacesimulation__framework)
* [simulation_framework::core](namespacesimulation__framework_1_1core.md#namespacesimulation__framework_1_1core)
* [simulation_framework::core::logging](namespacesimulation__framework_1_1core_1_1logging.md#namespacesimulation__framework_1_1core_1_1logging)

## Includes

* [core/logging/i_logger.h](i__logger_8h.md#i__logger_8h)
* <chrono>
* <iomanip>
* <iostream>
* <sstream>
* <string_view>
* <unistd.h>




## Included by

* [logging.h](logging_8h.md#logging_8h)




## Source


```cpp


#pragma once
#include "core/logging/i_logger.h"
#include <chrono>
#include <iomanip>
#include <iostream>
#include <sstream>
#include <string_view>

// Platform-specific includes for TTY detection
#ifdef _WIN32
#include <io.h>
#include <stdio.h>
#else
#include <unistd.h>
#endif

namespace simulation_framework
{
namespace core
{
namespace logging
{

class ConsoleLogger : public ILogger
{
  public:
    virtual ~ConsoleLogger() = default;

    void SetCurrentLogLevel(LogLevel log_level) final { log_level_ = log_level; }

    [[nodiscard]] LogLevel GetCurrentLogLevel() const final { return log_level_; }

    void Log(LogLevel level, std::string_view log_message) final
    {
        if (level < GetCurrentLogLevel())
        {
            return;
        }

        const auto timestamp = GetCurrentTimestamp();

        switch (level)
        {
            case LogLevel::kDebug:
            {
                // Debug: Dim timestamp, cyan log level, default message
                if (ShouldUseColorsForStdout())
                {
                    std::cout << "\033[90m[" << timestamp << "]\033[0m\033[36m[DEBUG] \033[0m" << log_message
                              << std::endl;
                }
                else
                {
                    std::cout << "[" << timestamp << "][DEBUG] " << log_message << std::endl;
                }
                break;
            }
            case LogLevel::kInfo:
            {
                // Info: Dim timestamp, green log level, default message
                if (ShouldUseColorsForStdout())
                {
                    std::cout << "\033[90m[" << timestamp << "]\033[0m\033[32m[INFO ] \033[0m" << log_message
                              << std::endl;
                }
                else
                {
                    std::cout << "[" << timestamp << "][INFO ] " << log_message << std::endl;
                }
                break;
            }
            case LogLevel::kWarning:
            {
                // Warning: Dim timestamp, bright yellow log level, default message
                if (ShouldUseColorsForStdout())
                {
                    std::cout << "\033[90m[" << timestamp << "]\033[0m\033[93m[WARN ] \033[0m" << log_message
                              << std::endl;
                }
                else
                {
                    std::cout << "[" << timestamp << "][WARN ] " << log_message << std::endl;
                }
                break;
            }
            case LogLevel::kError:
            {
                // Error: Dim timestamp, bright red log level, default message
                if (ShouldUseColorsForStderr())
                {
                    std::cerr << "\033[90m[" << timestamp << "]\033[0m\033[91m[ERROR] \033[0m" << log_message
                              << std::endl;
                }
                else
                {
                    std::cerr << "[" << timestamp << "][ERROR] " << log_message << std::endl;
                }
                break;
            }
            default:
            {
                break;
            }
        }
    }

  private:
    [[nodiscard]] bool ShouldUseColorsForStdout() const
    {
#ifdef _WIN32
        return _isatty(_fileno(stdout)) != 0;
#else
        return isatty(STDOUT_FILENO) != 0;
#endif
    }

    [[nodiscard]] bool ShouldUseColorsForStderr() const
    {
#ifdef _WIN32
        return _isatty(_fileno(stderr)) != 0;
#else
        return isatty(STDERR_FILENO) != 0;
#endif
    }

    std::string GetCurrentTimestamp() const
    {
        const auto now = std::chrono::system_clock::now();
        const auto time_t = std::chrono::system_clock::to_time_t(now);
        const auto ms = std::chrono::duration_cast<std::chrono::milliseconds>(now.time_since_epoch()) % 1000;

        std::stringstream ss;
        ss << std::put_time(std::localtime(&time_t), "%Y-%m-%d %H:%M:%S");
        ss << "." << std::setfill('0') << std::setw(3) << ms.count();
        return ss.str();
    }

    LogLevel log_level_{LogLevel::kDebug};
};

}  // namespace logging
}  // namespace core
}  // namespace simulation_framework
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)