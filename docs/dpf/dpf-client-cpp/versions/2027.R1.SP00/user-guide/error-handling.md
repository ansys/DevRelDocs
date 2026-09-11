# Handling errors in DPF HGP operators and plugins

This page explains how to raise and catch errors using the public DPF C++ HGP API.

Use this page when writing an operator that must signal a failure, or when writing client code that must diagnose why an operator failed.

For runtime observability that is unrelated to failures, see [Logging in DPF operators and plugins](logging-in-dpf.md).

## API overview

The error API is available in `ansys::dpf` and declared in `dpf_api_base.h`.

- Client-side exception type caught around DPF calls: `DpfException`.
- Nature of the error, as a stable enum: `DpfException::nature()` returning `DpfError::ErrorNature`.
- Human-readable message: `DpfException::what()`.
- Structured message with the full nested cause chain, as JSON: `DpfException::message()`.
- Base class to raise typed errors from an operator ``run()``: `HgpDpfException`.

All errors raised on the server side surface to client code as `ansys::dpf::DpfException`, whether they originated in the framework, in an operator, or in the C Layer. The structured chain in `message()` preserves the layer where the error occurred and any typed data attached at the throw site.

## Catching errors around DPF calls

Wrap any call that can trigger operator or workflow execution in a `try/catch` block on `ansys::dpf::DpfException`:

```cpp
#include "dpf_api.h"
#include "dpf_api_base.h"

ansys::dpf::Operator op("add");

try {
    op.run();
} catch (const ansys::dpf::DpfException& e) {
    std::cerr << e.what() << std::endl;
}
```

- `e.what()` returns a short human-readable string suitable for display to an end user.
- `e.nature()` returns a stable `DpfError::ErrorNature` enum (for example `eFileNotFound`, `eRuntimeError`, `eUnimplemented`) that client code can branch on.
- `e.origin()` returns the API entry point where the exception was raised.

## Inspecting the structured error chain

`DpfException::message()` returns a JSON document that encodes every layer the error passed through, from the innermost cause to the outermost frame. Use the standard DPF `json_to_data_tree` operator to parse it:

```cpp
try {
    op.run();
} catch (const ansys::dpf::DpfException& e) {
    ansys::dpf::Operator json2dt("json_to_data_tree");
    json2dt.connect(0, std::string(e.message()));

    auto dt      = json2dt.getOutputDataTree(0);
    auto frames  = dt.getSubByName("frames");

    // Frames are indexed as strings from "0" (innermost cause) upwards.
    auto root_cause = frames.getSubByName("0");
    std::cout << root_cause.getStringAttribute("what") << std::endl;
}
```

Each frame carries at least:

- `type` - a stable string identifying the error category (for example `opframe`, `kernel_clayer`, or the custom type of an `HgpDpfException` subclass).
- `what` - the frame-level message.

Higher-level frames may add typed attributes. For example the operator frame carries `operator_name` and `operator_id`, allowing client code to identify which operator inside a workflow failed:

```cpp
auto op_frame = frames.getSubByName("1");
std::string failing_op = op_frame.getStringAttribute("operator_name");
```

## Raising errors from an operator

Inside an operator ``run()`` method, throw an `ansys::dpf::HgpDpfException`. The framework catches it, tags it with the current operator frame, forwards it through the C Layer, and re-raises it on the client side as a `DpfException`.

The `HgpDpfException` constructor takes:

1. A `type` string - a short, stable identifier for the error category.
2. A `what` string - the human-readable message.
3. An initializer list of key/value pairs - typed attributes preserved end-to-end.

```cpp
#include "dpf_api.h"
#include "dpf_api_base.h"

struct MyOperator
{
    static std::string name() { return "my_operator"; }

    static void run(ansys::dpf::OperatorMain& main)
    {
        if (!main.testInput<bool>(0)) {
            throw ansys::dpf::HgpDpfException(
                "missing_input",
                "Missing boolean on pin 0.",
                { { "pin_index", "0" }, { "expected_type", "bool" } });
        }
        // ...
    }

    static ansys::dpf::OperatorSpecification specification() { return {}; }
};
```

Do not raise raw `std::exception` or `std::runtime_error` to signal domain errors. Those types are still forwarded and end up as a generic `DpfException` on the client side, but with no `type` and no structured attributes, which forces client code to fall back to string parsing.

## Defining a custom exception type

For error categories that recur across operators, define a subclass of `HgpDpfException` and set the `type` string once. Callers can then filter on `type` or read the typed attributes directly.

```cpp
class MissingInputException : public ansys::dpf::HgpDpfException
{
public:
    MissingInputException(const std::string& what, const std::string& advice)
        : ansys::dpf::HgpDpfException(
              "missing_input",
              what,
              { { "advice", advice } }) {}

    std::string advice() const { return kvals().at("advice"); }
};
```

Throw it from `run()`:

```cpp
throw MissingInputException(
    "Missing boolean on pin 0 of my_operator.",
    "Connect a boolean value to input pin 0.");
```

Client code recognizes it by its `type`:

```cpp
try {
    op.run();
} catch (const ansys::dpf::DpfException& e) {
    ansys::dpf::Operator json2dt("json_to_data_tree");
    json2dt.connect(0, std::string(e.message()));
    auto frames = json2dt.getOutputDataTree(0).getSubByName("frames");

    auto op_frame = frames.getSubByName("1");
    if (op_frame.getStringAttribute("type") == "missing_input") {
        std::cerr << "advice: " << op_frame.getStringAttribute("advice") << std::endl;
    }
}
```

## Selectively absorbing an expected error from a child operator

When your operator composes other operators and one of them can raise an error that is **not** a real failure in your context (for example, a distributed data source where a given partition legitimately holds no data), inspect the child error's `type` before re-throwing.

The pattern in a `run()` that iterates over chunks:

```cpp
for (const auto& chunk : chunks) {
    ansys::dpf::Operator child("read_from_chunk");
    child.connect(0, chunk);
    try {
        auto data = child.getOutputField(0);
        merge(data);
    } catch (const ansys::dpf::DpfException& e) {
        ansys::dpf::Operator json2dt("json_to_data_tree");
        json2dt.connect(0, std::string(e.message()));
        auto frames = json2dt.getOutputDataTree(0).getSubByName("frames");

        // The innermost frame carries the child operator's exception type.
        auto root_cause = frames.getSubByName("0");
        if (root_cause.getStringAttribute("type") == "result_not_found") {
            continue;   // expected: this chunk simply has nothing to contribute
        }
        throw;          // any other type is a real failure - propagate
    }
}
```

Do:

- **Match on the child's stable `type` string**, never on a substring of `what()` or `message()`.
- Read the innermost frame (`frames["0"]`) - that is the actual child error, before any wrapping frame the framework may have added.
- Keep the `try/catch` scoped to the smallest region where the absorbable error can legitimately be raised.

Do not:

- Swallow `DpfException` without inspecting its `type`. A blanket `catch` hides genuine failures.
- Rely on the human-readable `what()` string to decide - it is not part of the API contract.

Consider this a last-resort pattern. If the child operator can distinguish "no data" from "failure" via a boolean query or an explicit output pin, use that path instead of the exception path.

## Guidelines for operator authors

- Prefer a `type` string that is stable across releases. Client code branches on it.
- Keep the `what` string user-facing: describe **what** failed and, when possible, **why**.
- Put remediation hints in a dedicated attribute (for example `advice` or `suggestion`) rather than concatenating them into `what`.
- Attach typed attributes for anything a caller may want to filter on or display separately (pin index, expected type, file path). Values are strings.
- Do not embed the operator name or ID in the message. The framework attaches them automatically to the operator frame.
- Do not swallow lower-level exceptions silently. If you need to translate one, catch it and throw an `HgpDpfException` from the catch block so the original cause is preserved in the frame chain. If you need to intentionally absorb one, follow the pattern above and match on the child's `type`.

## Guidelines for client code

- Always catch `ansys::dpf::DpfException` around calls that trigger operator or workflow execution.
- Use `what()` for logging or display, and `nature()` for coarse branching.
- Use `message()` with `json_to_data_tree` when you need to identify the failing operator inside a chained workflow, or when you need the typed attributes carried by a custom exception type.
- Frame `"0"` is the innermost cause. The highest-indexed frame is the outermost boundary the error crossed.
