# File dpf\_model.h

<a id="dpf-model-h"></a>

![][C++]

**Location**: `dpf/include/helpers`





## Classes

* [ansys::dpf::Model](classansys-dpf-model.md#classansys-dpf-model)

## Namespaces

* [ansys](namespaceansys.md#namespaceansys)
* [ansys::dpf](namespaceansys-dpf.md#namespaceansys-dpf)

## Includes

* [dpf_api.h](dpf-api-h.md#dpf-api-h)
* [dpf_result.h](dpf-result-h.md#dpf-result-h)
* [dpf_meshQuery.h](dpf-meshquery-h.md#dpf-meshquery-h)

## Source


```cpp
//
// COPYRIGHT ANSYS. ALL RIGHTS RESERVED.
//
#pragma once
#include "dpf_api.h"
#include "dpf_result.h"
#include "dpf_meshQuery.h"

namespace ansys {
    namespace dpf
    {
        class Model
        {
        public:
            virtual ~Model() {}
            Model(const std::string &filePath 
            )
            {
                DataSources ds;
                ds.addResultFile(filePath);
                init(ds);
            }
            Model(const DataSources &data_sources 
            )
            {
                init(data_sources);
            }

            inline MeshedRegion getMesh(int timestep = 0 
            );


            inline MeshesContainer getMeshesContainer();

            inline TimeFreqSupport getTimeFreqSupport();

            inline ResultInfo getResultInfo();

            inline Result CreateResultEvaluationWorkflow(const char* res_name, 
                Scoping meshScoping = Scoping(), 
                Location requested_location = Location(), 
                int cs_id = 0 
            );

            inline Result CreateResultEvaluationWorkflow(const char* res_name, 
                const char * named_selection, 
                Location requested_location = Location(), 
                bool bInclusive = true, 
                int cs_id = 0 
            );

            MeshQuery CreateMeshQuery() {
                return MeshQuery(_mesh_provider);
            }

            void ReleaseHandles() {
                auto streams_out = _stream_provider.getOutputStreams(0);
                streams_out.releaseFiles();
            }

        private:
            inline void init(const DataSources &data_sources);
            Operator _mesh_provider;
            Operator _timefreq_support_provider;
            Operator _stream_provider;
            Operator _result_info_provider;
        };

        void Model::init(const DataSources &data_sources)
        {
            _stream_provider = Operator("stream_provider");
            if (!_stream_provider.empty()) {

                _stream_provider.connect(eDataSourcesPin, data_sources);

                _mesh_provider = Operator("MeshProvider");
                _mesh_provider.connect(eStreamPin, _stream_provider, 0);

                _timefreq_support_provider = Operator("TimeFreqSupportProvider");
                _timefreq_support_provider.connect(eStreamPin, _stream_provider, 0);

                _result_info_provider = Operator("ResultInfoProvider");
                _result_info_provider.connect(eStreamPin, _stream_provider, 0);
            }
        }


        MeshedRegion Model::getMesh(int /*timestep*/)
        {
            auto mesh = _mesh_provider.getOutputMeshedRegion(0);
            return mesh;
        }

        TimeFreqSupport Model::getTimeFreqSupport()
        {
            auto timeFreq = _timefreq_support_provider.getOutputTimeFreqSupport(0);
            return timeFreq;
        }
        ResultInfo Model::getResultInfo()
        {
            auto resInfo = _result_info_provider.getOutputResultInfo(0);
            return resInfo;
        }
        Result Model::CreateResultEvaluationWorkflow(const char* res_name, Scoping meshScoping, Location requested_location, int cs_id)
        {
            return Result(res_name, _stream_provider, _timefreq_support_provider, meshScoping, requested_location, cs_id);
        }
        Result Model::CreateResultEvaluationWorkflow(const char* res_name, const char * named_selection, Location requested_location, bool bInclusive, int cs_id)
        {
            return Result(res_name, _stream_provider, _timefreq_support_provider, _mesh_provider, named_selection, requested_location, bInclusive, cs_id);
        }



    } // end of namespace dpf
} // end of namepsace ansys
```


[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)