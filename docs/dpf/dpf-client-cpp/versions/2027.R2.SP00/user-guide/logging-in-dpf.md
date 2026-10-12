# Logging in DPF operators and plugins

This page explains how to use the DPF logging API from C++ operators and plugins.

Use logging to make operator and plugin behavior observable in production-like runs, not only while debugging.

## API overview

The logging API is available in `ansys::dpf::core::logging`.

- Log levels: `eLogLevel::Trace`, `Debug`, `Info`, `Warn`, `Error`, `Critical`
- Sinks: `eLoggerSink::Stdout`, `eLoggerSink::File`
- Logger configuration: `LoggerConfig`
- Logger lifecycle: `registerLogger()`, `getLogger()`, `flushAllLoggers()`

`registerLogger()` currently registers by name and uses default server-side configuration.

## Recommended usage pattern

1. Register a logger once for your operator family or plugin.
2. Reuse that logger in `run()`.
3. Use levels consistently:
   - `Trace` and `Debug`: verbose technical details
   - `Info`: high-level progress and key decisions
   - `Warn`: recoverable issues
   - `Error` and `Critical`: failures
4. Flush explicitly at deterministic points when needed.

## Naming recommendations

Use stable, explicit logger names so entries can be filtered by component.

- Operator-level: `dpf.operator.<operator_name>`
- Plugin-level: `dpf.plugin.<plugin_name>`

Avoid dynamic names per execution (for example by timestamp or random suffix), because they make aggregation harder.

## Example: get or register logger

```cpp
#include "dpf_api.h"

namespace dpflog = ansys::dpf::core::logging;

inline dpflog::Logger get_or_register_logger()
{
    const std::string logger_name = "dpf.operator.custom_sort";

    auto logger = dpflog::getLogger(logger_name);
    if (logger.valid()) {
        return logger;
    }

    logger = dpflog::registerLogger(logger_name);
    if (!logger.valid()) {
        // No-op logger may be returned. Calls remain safe.
        return logger;
    }

    return logger;
}
```

## Example: logging inside an operator run method

```cpp
static void run(ansys::dpf::OperatorMain& main)
{
    auto logger = get_or_register_logger();
    logger.info("custom_sort started");

    ansys::dpf::Field to_sort = main.getInputField(0);

    std::vector<double> data;
    to_sort.getData(data);
    logger.debug(std::string("input size=") + std::to_string(data.size()));

    std::sort(data.begin(), data.end());

    ansys::dpf::Field sorted = to_sort.deep_copy();
    sorted.setData(data);
    main.setOutput(0, sorted);
    main.setSuccessed();

    logger.info("custom_sort completed");
    logger.flush();
}
```

## Behavior of invalid loggers

By design, logging does not throw errors to the caller.

- `registerLogger()` can return an invalid logger (for example duplicate name or invalid name).
- `getLogger()` can return an invalid logger when the logger is not found.
- Calling `log()`, `info()`, `error()`, `flush()`, and similar methods on an invalid logger is safe and acts as a no-op.

Always check `logger.valid()` if your code depends on logger initialization success.

## Logging API vs debugging trace APIs

Use the logging API for application and operator observability.

For investigation-oriented traces of operator and workflow execution, see [Debugging in DPF](debugging-dpf.md), which documents:

- `DATAPROCESSING_DEBUG` and DebugTrace
- Chrome trace event outputs