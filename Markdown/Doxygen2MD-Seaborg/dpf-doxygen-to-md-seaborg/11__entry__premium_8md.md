<a id="11__entry__premium_8md"></a>
# File 11\_entry\_premium.md

![][Markdown]

**Location**: `cpp\_doc/11\_entry\_premium.md`





## Source

```markdown
/** @defgroup group_11 Using DPF Context
 @ingroup group_4_how_tos

## Entry and Premium capabilities

Two main licensing states are available in DPF:
- Premium: default state. Allows DPF to perform license checkouts, allowing licensed DPF operators to run.
- Entry: does not allow DPF to perform any license checkout, meaning that licensed DPF operators' execution will fail.

Refer to the **Operators** section, select an operator and see the **Scripting** section to know if an operator requires a license to be checkout. 

## DPF context

The **Context** class defines the licensing logic a server starts with and should be provided to the LibraryHandle constructor.

The **Context** is composed of the following information:
- EDpfContext enum value: sets DPF default operator capabilities and defines whether DPF capabilities requiring a license checkout are allowed. 
- setup_file_path string: is optional and sets DPF default operator capabilities (plugins that are defaultly loaded) if EpfContext::eUserDefined enum value is used.

For example:
- use "EDpfContext::eEntry" to prevent license checkout and have plugins defined in DataProcessingCore.xml loaded
- use "EDpfContext::eDefault" to allow license checkout (Premium) and have plugins defined in DataProcessingCore.xml loaded
- use "EDpfContext::eStandalone" to allow license checkout and have plugins defined in DpfCoreStandalone.xml loaded

## Instantiate LibraryHandle with specific DPF context

The following code instantiates a LibraryHandle object using an Entry context: 

```
ansys::dpf::LibraryHandle* lib = new ansys::dpf::LibraryHandle(ansys::dpf::Context::entryContext());
```

The following code instantiates a LibraryHandle object using a Premium state and using DpfCoreStandalone.xml to load the default plugins:

```
ansys::dpf::LibraryHandle* lib = new ansys::dpf::LibraryHandle(ansys::dpf::Context::premiumContext());
```

Refer to the @ref group_06_1 section to learn more about the use the LibraryHandle to use DPF capabilities. 

```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)