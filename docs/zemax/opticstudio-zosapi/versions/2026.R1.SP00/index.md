# Introduction

This documentation contains all the classes, methods, properties, and enumerated variables exposed through the ZOS-API. It is intended to demonstrate the usage of the ZOS-API in each of the four available languages (C#, C++, MATLAB, Python). 
Along with a full listing of the objects available, also included are a series of standalone example files. Short snippets from these sample files are shown throughout the documentation. These snippets/files are translated for each language, and are intended to explicitly demonstrate implementation of a wide range of the available API functionality. 

## How to Navigate the ZOS-API Interface Documentation
By navigating to any namespace or class via the tabs or ‘Contents’ sidebar, you can see all classes contained as well as any enumerated variables, properties, etc. available in list form. From there, clicking on an interface will bring the user into that interface’s subpage, which in turn holds all interfaces, properties, etc. contained there. Instead, clicking on an enumeration, property, or method will direct the user to the documentation for that particular object, which also includes an example snippet demonstrating its implementation translated in all 4 languages (where available). 
In addition to contextual snippets, users can also navigate the full, standalone example files in which the snippets are contained. These can be accessed through the ‘Contents’ sidebar, or via the ‘Examples’ tab. Direct links to the relevant example file are also available wherever snippets are shown. These example files were generated within the boilerplate templates and are ready for execution as-is; they can be used as starting points for user analyses, etc.
Lastly, like the normal OpticStudio Help Files, the ZOS-API Interface Documentation is searchable through the ‘Search’ tab in the left pane. Both the object tree pages and example files are visible to the search.

## Getting Started

This is the main class, equivalent to a single ZMX file: [IOpticalSystem](reference/interface_z_o_s_a_p_i_1_1_i_optical_system.md#interface_z_o_s_a_p_i_1_1_i_optical_system)

The 'application' allows to create one or more IOpticalSystem classes: [IZOSAPI_Application](reference/interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___application)

All ZOS-API extensions must first connect to an existing instance of OpticStudio, or start a server instance in the background: [IZOSAPI_Connection](reference/interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection)

See the following to connect to an existing instance of OpticStudio (for User Analysis or User Extension): [IZOSAPI_Connection.ConnectToApplication](reference/interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection.md#interface_z_o_s_a_p_i_1_1_i_z_o_s_a_p_i___connection_1a1fb4aeea3a2d1e610defd84ca777dcaa)

## Remarks
Please note that not every interface/method/property is explicitly implemented in the examples files contained here; for a given interface, there may be several methods and properties, only one or a few of which are demonstrated. These examples are designed to be a helpful guide to provide users with fundamental understanding of how to use the ZOS-API. Using these examples as a starting point, we hope users will be able to gain the knowledge needed to implement the full range of ZOS-API functionality. 

Also note that while Zemax Support will be able to answer specific questions regarding this document or the ZOS-API, debugging user-generated code is not covered by the Support license.

In addition to this documentation, supplemental materials for API support are available through this Knowledgebase article ( [https://support.zemax.com/hc/en-us/articles/1500005577322-Sample-code-for-ZOS-API-users](https://support.zemax.com/hc/en-us/articles/1500005577322-Sample-code-for-ZOS-API-users) ). This article contains information on the boilerplate template, the different modes available, as well as a links to few more examples and resources. 

As Extension are an older technology and are now deprecated, ZOS-API should be used for all new projects. In order to help translate old DDE scripts into ZOS-API, please use this Knowledgebase article ( [https://support.zemax.com/hc/en-us/articles/1500005488881-Mapping-DDE-data-items-to-ZOS-API-methods-](https://support.zemax.com/hc/en-us/articles/1500005488881-Mapping-DDE-data-items-to-ZOS-API-methods-) ) as a reference.
