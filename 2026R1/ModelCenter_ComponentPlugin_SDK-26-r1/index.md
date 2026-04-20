# Software Developer's Guide (SDK) for writing component plug-ins for the PACZ format

Welcome to the parametric analysis component zipped (PACZ) component plug-in 2026R1 SDK documentation. This guide is intended to help plug-in developers extend the capabilities of Ansys products by adding connections to external data and analysis tools such as Excel, databases, CAD systems, and other engineering applications.

This plug-in framework is intended to cover analyses that take a design point as inputs and produce the resultant outputs. For co-simulation, time, ordinary differential equations (ODE), and eventing based systems, use the much more complex FMI standard.

## What is a component plug-in?

A component plug-in is a software extension framework that allows you to integrate external tools and data sources into Ansys workflows. By creating a plug-in, you enable:

- Execution of external applications as part of an automated workflow
- Exchange of data between an automated workflow and external tools
- Creation of reusable analysis components that can be shared across teams

## Key concepts

PACZ Component plug-ins consist of two main parts:

1. **Runner**: The non-UI portion responsible for batch execution. This is where the actual computation or external tool invocation happens.

2. **Builder UI**: The user interface portion that allows users to configure the component. This is optional but recommended for user-friendly plug-ins.

## Who should use this SDK?

This SDK is designed for:

- Software developers who need to integrate proprietary or third-party tools with Ansys workflows
- Engineering teams who want to automate workflows involving external applications
- Organizations looking to standardize their analysis processes across multiple tools

## Prerequisites

Before you begin developing component plug-ins, you should have:

- **Development Environment**: Visual Studio 2019 or later (VS 2022 recommended), or a Java development environment
- **Programming Knowledge**: Familiarity with .NET Framework 4.6.2 or Java
- **SDK Access**: Access to the SDK ZIP file which contains the `Phoenix.ComponentPlugInSDK` NuGet package and optionally the Visual Studio template extension

### Obtaining SDK access

To obtain access to the ModelCenter Component Plug-In SDK, please contact Ansys ModelCenter support.

## What you'll learn

This documentation covers:

- Setting up your development environment
- Creating your first component plug-in
- Understanding the plug-in architecture and lifecycle
- Working with variables, files, and external tools
- Testing and debugging your plug-ins
- Advanced topics like threading and session management
- Common issues and solutions
- API reference documentation

## Next steps

Ready to get started? Head over to the [Getting Started](started.md) guide to set up your development environment and create your first plug-in.

If you're new to PACZ component plug-ins, review the [Glossary](glossary.md) to familiarize yourself with key terminology.

## Additional resources

- [Example plug-ins](examples.md): Sample code demonstrating common patterns
- [FAQ](faq.md): Answers to frequently asked questions
- [Threading guide](threading.md): Understanding thread safety in plug-in development

## Support

For questions or issues not covered in this documentation, please contact Ansys support.
