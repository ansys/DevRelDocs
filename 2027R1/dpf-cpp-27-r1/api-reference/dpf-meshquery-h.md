<a id="dpf__meshQuery_8h"></a>
# File dpf\_meshQuery.h

![][C++]

**Location**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/helpers/dpf\_meshQuery.h`

## Classes

* [ansys::dpf::MeshQuery](classansys_1_1dpf_1_1MeshQuery.md#classansys_1_1dpf_1_1MeshQuery)

## Namespaces

* [ansys](namespaceansys.md#namespaceansys)
* [ansys::dpf](namespaceansys_1_1dpf.md#namespaceansys_1_1dpf)

## Includes

* [dpf_api.h](dpf__api_8h.md#dpf__api_8h)

## Included by

* [D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/helpers/dpf_model.h](dpf__model_8h.md#dpf__model_8h)

## Source

```cpp
//
// COPYRIGHT ANSYS. ALL RIGHTS RESERVED.
//
#pragma once
#include "dpf_api.h"

namespace ansys {
    namespace dpf
    {
        class MeshQuery
        {
        public:
            virtual ~MeshQuery() {}
            MeshQuery(Operator &mesh_provider 
            )
            {
                init(mesh_provider);
            }
            
            inline Scoping GetNodesByNamedSelection(const char *named_selection, 
                DpfError &error 
            ) {
                return GetByNamedSelection(true, named_selection, error);
            }
            inline Scoping GetNodesByMaterialId(dp_id materialId, 
                DpfError &error 
            ) {
                return GetByMaterialId(true, materialId, error);
            }
            inline Scoping GetNodesByElementType(const ElementDescriptor &element_type, 
                DpfError &error 
            ) {
                return GetByPropertyType(true, "eltype", element_type.id, error);
            }
            inline Scoping GetNodesBySolverElementType(int element_type, 
                DpfError &error 
            ) {
                return GetByPropertyType(true, "apdl_element_type", element_type, error);
            }

            inline Scoping GetElementsByNamedSelection(const char *named_selection, 
                bool inclusive, 
                DpfError &error 
            ) {
                return GetByNamedSelection(false, named_selection, error, inclusive);
            }
            inline Scoping GetElementsByMaterialId(dp_id materialId, 
                DpfError &error 
            ) {
                return GetByMaterialId(false, materialId, error);
            }
            inline Scoping GetElementsByElementType(const ElementDescriptor &element_type, 
                DpfError &error 
            ) {
                return GetByPropertyType(false, "eltype", element_type.id, error);
            }
            inline Scoping GetElementsBySolverElementType(int element_type, 
                DpfError &error 
            ) {
                return GetByPropertyType(false, "apdl_element_type", element_type, error);
            }

            inline Scoping GetSkinElements(DpfError &error 
            )
            {
                return GetElements(std::string("skin_elements"), error);
            }

            inline Scoping GetBeamElements(DpfError &error 
            )
            {
                return GetElements(std::string("beam_elements"), error);
            }

            inline Scoping GetSolidElements(DpfError &error 
            )
            {
                return GetElements(std::string("solid_elements"), error);
            }

            inline Scoping GetPointElements(DpfError &error 
            )
            {
                return GetElements(std::string("point_elements"), error);
            }

            inline Scoping GetShellElements(DpfError &error 
            )
            {
                return GetElements(std::string("shell_elements"), error);
            }

        private:
            Operator _meshProvider;

            void init(Operator &mesh_provider)
            {
                _meshProvider = mesh_provider;
            }

            Scoping GetElements(std::string const &element_type, DpfError &error)
            {
                Operator scopingOp = Operator("meshscoping_provider_by_prop");
                scopingOp.connect(0, locations::elemental);
                scopingOp.connect(1, element_type);
                scopingOp.connect(eMeshRegionPin, _meshProvider, 0);
                return scopingOp.getOutputScoping(0, error);
            }
            inline Scoping GetByNamedSelection(bool wantNodes, const char *named_selection, DpfError &error, bool inclusive = false);
            inline Scoping GetByMaterialId(bool wantNodes, dp_id materialId, DpfError &error);
            inline Scoping GetByPropertyType(bool wantNodes, const char *property_name, int element_type, DpfError &error);
        };

        Scoping MeshQuery::GetByNamedSelection(bool wantNodes, const char *named_selection, DpfError &error, bool inclusive)
        {
            if (!named_selection) {
                std::string msg = "bad named selection";
                error = DpfError(DpfError::eFailure, "", msg);
                return Scoping();
            }

            auto mesh = _meshProvider.getOutputMeshedRegion(0, error);
            if (!error.isOk()) {
                return Scoping();
            }
            auto scoping = mesh.namedSelection(named_selection);
            if (!scoping.empty()) {
                if ((wantNodes && scoping.location() != locations::nodal) ||
                    (!wantNodes && scoping.location() != locations::elemental)) {
                    Operator transposeScoping = Operator("transpose_scoping");
                    transposeScoping.connect(0, scoping);
                    transposeScoping.connect(1, _meshProvider, 0);
                    int iinclusive = inclusive ? 1 : 0;
                    transposeScoping.connect(2, iinclusive);
                    scoping = transposeScoping.getOutputScoping(0, error);
                    if (!error.isOk()) {
                        return Scoping();
                    }
                    if (scoping.empty() || scoping.size() == 0) {
                        std::string msg = "no nodes in named selection :" + std::string(named_selection);
                        error = DpfError(DpfError::eFailure, "", msg);
                        return Scoping();
                    }
                }
            }

            return scoping;
        }
        Scoping MeshQuery::GetByMaterialId(bool wantNodes, dp_id materialId, DpfError &error)
        {
            Operator scopingOp = Operator("meshscoping_provider_by_prop");
            if (wantNodes)
                scopingOp.connect(0, locations::nodal);
            else
                scopingOp.connect(0, locations::elemental);
            scopingOp.connect(1, std::string("material"));
            scopingOp.connect(2, materialId);
            scopingOp.connect(eMeshRegionPin, _meshProvider, 0);
            return scopingOp.getOutputScoping(0, error);
        }
        Scoping MeshQuery::GetByPropertyType(bool wantNodes, const char *property_name, int property_value, DpfError &error)
        {
            Operator scopingOp = Operator("meshscoping_provider_by_prop");
            if (wantNodes)
                scopingOp.connect(0, locations::nodal);
            else
                scopingOp.connect(0, locations::elemental);
            scopingOp.connect(1, std::string(property_name));
            scopingOp.connect(2, property_value);
            scopingOp.connect(eMeshRegionPin, _meshProvider, 0);
            return scopingOp.getOutputScoping(0, error);
        }

    } // end of namespace dpf
} // end of namepsace ansys
```

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)