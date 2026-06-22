# Getting started

## Overview

This guide helps Java developers set up a project that uses the ModelCenter Remote Execution Java API. The API lets you connect to ModelCenter Remote Execution (MCRE), run analyses programmatically, and work with PACZ component configuration.

For package summaries and API organization, see the [Overview](overview-summary.md).

## Prerequisites

- A supported Java development kit (JDK) for your ModelCenter Remote Execution installation
- ModelCenter Remote Execution installed and licensed on the target machine, or reachable over the network
- The ModelCenter Remote Execution Java API JAR files from your installation (typically under the MCRE `lib` directory or SDK distribution)

## Add the API to your classpath

1. Locate the Java API JAR files provided with your ModelCenter Remote Execution installation or SDK package.
2. Add those JARs to your project classpath (IDE module dependencies, Maven `system` scope, or Gradle `files()` dependency, depending on your build).
3. Import the client classes you need, for example `com.phoenix_int.aserver.client.v2.AnalysisServerClient`.

## Connect to ModelCenter Remote Execution

Use [`AnalysisServerClient`](com/phoenix_int/aserver/client/v2/AnalysisServerClient.md) as the primary entry point:

- **Embedded:** Call `connectEmbedded()` to connect to an in-process MCRE instance.
- **Remote:** Call `connect(URI)` with an MCRE URI (for example, `mcre://hostname`).
- **Authentication:** Use the `connect` overloads that accept a username and password when your server requires credentials.

See the [com.phoenix_int.aserver.client](com/phoenix_int/aserver/client/package-summary.md) and [com.phoenix_int.aserver.client.v2](com/phoenix_int/aserver/client/v2/package-summary.md) package summaries for related client types.

## Next steps

- Browse the [package overview](overview-summary.md) to find types for analyses, components, monitoring, and PACZ configuration.
- Review the [Reference](reference-all.md) for an alphabetic index of all classes and methods.
