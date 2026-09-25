# Getting started

## Overview

This guide helps you choose between the ModelCenter COM API and the ModelCenter Java API and take your first programmatic steps with ModelCenter 2027 R1.

For API reference, see the [ModelCenter COM API](modelcenter-api-md/index.md) and [ModelCenter Java API](modelcenter-java-api-md/index.md).

## Prerequisites

- ModelCenter 2027 R1 installed and licensed on a Windows machine
- For COM API: any language with COM automation support (Python with `pywin32`, MATLAB, C#, VBScript, and others)
- For Java API: a supported JDK and the ModelCenter Java API JARs from your installation

## Choose an API

| API | Best for |
|-----|----------|
| [COM API](modelcenter-api-md/index.md) | Scripting and automation from Windows applications that support COM |
| [Java API](modelcenter-java-api-md/index.md) | Java applications, plug-ins, and integrations that need typed Java bindings |

Both APIs expose the same core ModelCenter object model for workflows, components, variables, and trade studies.

## Your first connection (COM)

1. Start ModelCenter or ensure a licensed installation is available.
1. Create a COM `Application` object in your host language.
1. Open or create a workflow model and access components through the object model.

See the [Application](modelcenter-api-md/classModelCenter_1_1Application.md) class in the COM API reference for available methods.

## Your first connection (Java)

1. Add the ModelCenter Java API JARs from your installation to your project classpath.
1. Import `com.phoenix_int.ModelCenter` types.
1. Connect to a running ModelCenter instance or launch one programmatically.

See the [Java API overview](modelcenter-java-api-md/index.md) for package summaries.

## Next steps

- Browse the COM or Java API reference from the table of contents.
- Review the [changelog](changelog.md) for release-specific notes.
