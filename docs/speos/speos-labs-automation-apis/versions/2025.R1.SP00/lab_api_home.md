# Introduction

## General description 

With Automation, you can communicate with any Windows application. Automation can replace the old specific macro way method for writing script.

With automation you can:

- Write script using any language compatible with Automation \(VB Script, C++\),
- Directly access results data without knowing specific format \(like XMP file\),
- Write your own HTML reports that automatically analyze the results,
- Write your own optimization code.

## Technical description 

Automation is based on COM \(Component Object Model\). This is a standard way to describe the interface exposed by a Windows application to other Windows applications.

The interface is described using the IDL \(Interface Description Language\). This interface is used to give the description of all data and functions \(and their parameters\) that can be called from another application.

The exposed data are called Properties.

The exposed functions are called Methods.

## Development tools 

If you want to use Automation, you need to decide which language to use depending on your needs.

For basic needs, the VB Script or VBA language is the easiest to understand and to use. When writing a macro with this software, the VB Script language is used. The macro can mix CAD VB Script or VBA instructions and Virtual Photometric Lab VB Script instructions: using your own merit function you have your own optimization tool.

For more complex needs, you may use C++, which is a more difficult language to learn for non-developers.

## Before starting

As automation is an application that is handled by the Windows registry, be aware that the software version that is used is based on the version that is currently registered (the last version you launched).
If you have multiple versions of Speos Labs installed, make sure to register the version of the viewer/editor you want to use for automation.
To do so, right-click the viewer/editor in the version to use for automation and click Run as administrator.

For API functions using Variant variables as input, Iron Python is not supported.
