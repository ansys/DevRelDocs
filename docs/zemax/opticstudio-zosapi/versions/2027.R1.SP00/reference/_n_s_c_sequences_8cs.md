# File NSCSequences.cs

<a id="_n_s_c_sequences_8cs"></a>

![][C#]


## Classes

* [ZOSAPI::NSC::INSCSequences](interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences.md#interface_z_o_s_a_p_i_1_1_n_s_c_1_1_i_n_s_c_sequences)

## Namespaces

* [ZOSAPI](namespace_z_o_s_a_p_i.md#namespace_z_o_s_a_p_i)
* [ZOSAPI::NSC](namespace_z_o_s_a_p_i_1_1_n_s_c.md#namespace_z_o_s_a_p_i_1_1_n_s_c)

## Source


```csharp
using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using ZOSAPI.Tools.Sequences;

namespace ZOSAPI.NSC
{
    [Guid("B3D7F2A1-4C8E-4B56-9D3F-E1A20C5F8B34")]
    [ComVisible(true)]
    [InterfaceType(ComInterfaceType.InterfaceIsDual)]
    public interface INSCSequences
    {
        int NumberOfSequences { get; }

        bool ContainsSequenceName(string name);

        int GetIndexOfSequenceByName(string name);

        ISequence GetSequenceAt(int index);

        ISequence FindSequenceByName(string name);

#if true // NSC_SEQUENCES_GROUPING
        int NumberOfGroups { get; }

        List<string> GroupNames { get; }

        string GetGroupNameAt(int index);

        bool ContainsGroup(string groupName);

        ISequenceGroup GetSequenceGroup(string groupName);
#endif
    }
}
```


[public]: https://img.shields.io/badge/-public-brightgreen (public)
[C#]: https://img.shields.io/badge/language-C%23-blue (C#)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[private]: https://img.shields.io/badge/-private-red (private)
[package]: https://img.shields.io/badge/-package-blueviolet (package)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
