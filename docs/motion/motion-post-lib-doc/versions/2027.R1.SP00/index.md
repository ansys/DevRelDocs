# Introduction

The Ansys Motion Standalone Postprocessor C# Library provides scripting and automation interfaces for Ansys Motion Standalone Postprocessor workflows. The library is divided into two APIs with different execution models.

| API | Description |
|---|---|
| **[Operation API](document/operation-api/overview/overview_operation_api.md)** | Automates operations in a running Postprocessor, including loading result files, creating pages and views, controlling animations, and managing chart data. |
| **[Result File Reader API](document/result-file-reader/overview/overview_result_file_reader_api.md)** | Opens result files and reads or exports analysis data without creating an interactive Postprocessor page or view. |

Both APIs use the same documentation structure.

- **Overview** describes the API purpose and links to its capability areas.
- **Getting Started** explains the runtime requirements, entry point, basic setup, and first complete operations.
- **Feature** describes each capability area and its observable results.
- **Example** provides complete scripts for common operations when examples are available.
- **Troubleshooting** records known issues and their solutions.
- **Changelog** records additions, changes, and deprecated API behavior between Postprocessor versions.

The **API Reference** documents the public classes, interfaces, methods, and properties exposed by the library. It is divided into three sections to reflect the API assemblies and shared types.

- **Operation** — types used to control and interact with a running Postprocessor, including [`ApplicationHandler`](lib/VM.API.Post.Operations.ApplicationHandler.md), page and view interfaces, and operation interfaces.
- **Result File Reader** — types that open and process result files, including [`OutputReader`](lib/VM.Post.API.OutputReader.OutputReader.md) and its associated data types.
- **Miscellaneous** — enumerations, data models, and interfaces that support both APIs.

## Downloads

The API modules, result files, and example scripts will be made available shortly before FCA.