# Introduction

This guide describes Discovery's .NET extensibility API for managed add-ins. It explains how to create and load add-ins using XML manifests, add commands and customize the ribbon, tools, and custom tree, and use the geometry API.

## Add-in requirements

Discovery loads an add-in assembly described by a manifest file. Add-ins implement the `IExtensibility` interface; ribbon customizations can also use the `ICommandExtensibility` and `IRibbonExtensibility` interfaces. See [Creating manifest files](UDA/add_api/creating_addin_apps/topics/c_disco_api_manifest.md) to configure an add-in.

## API versions

Examples in this 2027 R1 guide use the `SpaceClaim.Api.V271` and `Discovery.Api.V271` assemblies. The 2025 R1 changelog marks API V22 as deprecated. The release changelogs identify 2026 R1 as V261 and 2027 R1 as V271; the 2027 R1 changelog documents breaking changes from V261 and says compiled add-ins built against V261 must be recompiled. These version identifiers are not interchangeable: use the API assemblies shipped with the Discovery release you target, and review its changelog before upgrading.

## Programming language

The API can be called from .NET languages; all examples in this guide use C#.

## Conventions

Words in **bold** indicate types or members in the API.
