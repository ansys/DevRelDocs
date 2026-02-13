<a id="dpf__result_8h"></a>
# File dpf\_result.h

![][C++]

**Location**: `D:/ANSYSDev/Sandbox/DPF/Ans.Dpf.Hgp/helpers/dpf\_result.h`

## Classes

* [ansys::dpf::Result](classansys_1_1dpf_1_1Result.md#classansys_1_1dpf_1_1Result)

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

namespace ansys {    namespace dpf    {
class Result
{
public:

    Result(const char* res_name, 
        Operator &stream_provider, 
        Operator &timefreq_support_provider 
    )
    {
        init(res_name, stream_provider, timefreq_support_provider, Scoping(), Location(), 0);
    }

    Result(const char* res_name, 
        Operator &stream_provider, 
        Operator &timefreq_support_provider, 
        Scoping meshScoping 
    )
    {
        init(res_name, stream_provider, timefreq_support_provider, meshScoping, Location(), 0);
    }

    Result(const char* res_name, 
        Operator &stream_provider, 
        Operator &timefreq_support_provider, 
        Scoping meshScoping, 
        Location requested_location, 
        int cs_id 
    )
    {
        init(res_name, stream_provider, timefreq_support_provider, meshScoping, requested_location, cs_id);
    }
    
    Result(const char* res_name, 
        Operator &stream_provider, 
        Operator &timefreq_support_provider, 
        Operator &mesh_provider, 
        const char *named_selection, 
        Location requested_location, 
        bool bInclusive, 
        int cs_id 
    )
    {
        init(res_name, stream_provider, timefreq_support_provider, mesh_provider, named_selection, requested_location, bInclusive, cs_id);
    }
    
    virtual ~Result() {}

    FieldsContainer EvaluateAtGivenTime(double dTime, 
        DpfError &error 
    ) {return EvaluateOutputAtGivenTime(dTime, 0.0, "res_source", error);}
    inline FieldsContainer EvaluateAtGivenTimeIndex(dp_int iSet, 
        DpfError &error 
    ) {return EvaluateOutputAtGivenSetIndex(iSet, 0.0, "res_source", error);}
    inline FieldsContainer EvaluateAtGivenStepIndexAndSubStep(dp_int iStep, 
        dp_int iSubStep, 
        DpfError &error 
    ) {return EvaluateOutputAtGivenStepIndexAndSubStep(iStep, iSubStep, 0.0, "res_source", error);}
     
    //FieldsContainer EvaluateImagAtGivenTime(double dTime, DpfError &error);
    //FieldsContainer EvaluateImagAtGivenSet(int iSet, DpfError &error);
    //FieldsContainer EvaluateImagAtGivenStepAndSubStep(int iStep, int iSubStep, DpfError &error);     
    
    FieldsContainer EvaluateAmplitudeAtGivenTime(double dTime, 
        DpfError &error 
    ) {return EvaluateOutputAtGivenTime(dTime, 0.0, "res_amplitude", error); }
    FieldsContainer EvaluateAmplitudeAtGivenTimeIndex(int iSet, 
        DpfError &error 
    ) {return EvaluateOutputAtGivenSetIndex(iSet, 0.0, "res_amplitude", error);}
    FieldsContainer EvaluateAmplitudeAtGivenStepIndexAndSubStep(int iStep, 
        int iSubStep, 
        DpfError &error 
    ) {return EvaluateOutputAtGivenStepIndexAndSubStep(iStep, iSubStep, 0.0, "res_amplitude", error);}
     
    FieldsContainer EvaluateWithPhaseAtGivenTime(double dTime, 
        double dPhase, 
        DpfError &error 
    ) { return EvaluateOutputAtGivenTime(dTime, dPhase, "res_phase", error); }
    FieldsContainer EvaluateWithPhaseAtGivenTimeIndex(int iSet, 
        double dPhase, 
        DpfError &error 
    ) { return EvaluateOutputAtGivenSetIndex(iSet, dPhase, "res_phase", error); }
    FieldsContainer EvaluateWithPhaseAtGivenStepIndexAndSubStep(int iStep, 
        int iSubStep, 
        double dPhase, 
        DpfError &error 
    ) { return EvaluateOutputAtGivenStepIndexAndSubStep(iStep, iSubStep, dPhase, "res_phase", error); }
    

private:

    inline FieldsContainer EvaluateOutputAtGivenTime(double dTime, double dPhase, const char*output, DpfError &error);
    inline FieldsContainer EvaluateOutputAtGivenSetIndex(dp_int iSet, double dPhase, const char*output, DpfError &error);
    inline FieldsContainer EvaluateOutputAtGivenStepIndexAndSubStep(dp_int iStep, dp_int iSubStep, double dPhase, const char*output, DpfError &error);

    void init(const char* res_name, Operator &stream_provider, Operator &timefreq_support_provider, Scoping meshScoping, Location requested_location, int /*cs_id*/)
    {
        /*
            The diagram bellow shows the result workflow
            
            Exposed input and output pins:
                 -Input pins:
                     -"time" : allows to evaluate at given time/freq, set, step-substep
                     -"phase": allows to evaluate at a given sweeping phase (unit deg)
                 -Output pins:
                     -"contour"  : allows to access the result
                     -"amplitude" : allows to get the amplitude when working on complex results
                     -"phase"    : allows to evaluate the result at a given sweeping phase

            No-exposed input pins (specified once when a result is created)
                - mesh scoping
                - requested location
                - cs_id 

                        _______     __ "res_source"      __________ 
               "time" -|       |___|____________________|          |__ "res_amplitude"
                       |source |   |                    |amplitude |
                       |_______|   |                    |__________|
                                   |
                                   |                     ______________
                                   |____________________|              |__ "res_phase"
                                                        |sweeping phase|
                                               "phase" -|______________|

        */
        Operator res_provider(res_name);
        if (0 != meshScoping.size())
            res_provider.connect(eMeshScopPin, meshScoping);
        if (requested_location != Location())
            res_provider.connect(eLocationPin, requested_location);

        res_provider.connect(eStreamPin, stream_provider, 0);

        if (!timefreq_support_provider.empty()) {
            _workflow.add(timefreq_support_provider);
            _workflow.nameOutputPin(timefreq_support_provider, 0, "time_freq_support");
        }
        _workflow.add(res_provider);
        _workflow.nameInputPin("time", eTimeScopPin, res_provider);
        _workflow.nameOutputPin(res_provider, 0, "res_source");

        Operator amplitude("amplitude_fc");
        amplitude.connect(res_provider);
        _workflow.nameOutputPin(amplitude, 0, "res_amplitude");

        Operator phase("sweeping_phase_fc");
        std::string unit = "deg";
        phase.connect(3, unit);
        phase.connect(res_provider);
        _workflow.nameInputPin("phase", 2, phase);
        _workflow.nameOutputPin(phase, 0, "res_phase");

    }
    
    inline void init(const char* res_name, Operator &stream_provider, Operator &timefreq_support_provider, Operator &mesh_provider, const char *named_selection, Location requested_location, bool bInclusive, int cs_id);
    Workflow _workflow;
    DpfError _dpfError;
};

FieldsContainer
Result::EvaluateOutputAtGivenTime(double dTime, double dPhase, const char* output, DpfError &error)
{
    if (!_dpfError.isOk()) {
        error = _dpfError;
        return FieldsContainer();
    }
    _workflow.connect("time", dTime);
    _workflow.connect("phase", dPhase);
    auto fields = _workflow.getOutputFieldsContainer(output, error);
    return fields;
}

FieldsContainer
Result::EvaluateOutputAtGivenSetIndex(dp_int iSetIndex, double dPhase, const char* output, DpfError &error)
{
    if (!_dpfError.isOk()) {
        error = _dpfError;
        return FieldsContainer();
    }
    _workflow.connect("time", iSetIndex+1);
    if (dPhase > 0.0)
        _workflow.connect("phase", dPhase);
    auto fields = _workflow.getOutputFieldsContainer(output, error);
    return fields;
}

FieldsContainer
Result::EvaluateOutputAtGivenStepIndexAndSubStep(dp_int iStep, dp_int iSubStep, double dPhase, const char* output, DpfError &error)
{
    if (!_dpfError.isOk()) {
        error = _dpfError;
        return FieldsContainer();
    }

    if (!_workflow.hasOutputPin("time_freq_support"))
    {
        error = DpfError(DpfError::eUnexpectedVoidEntity, "", "time_freq_support expected to get a set from a step and sub_step");
        return FieldsContainer();
    }

    TimeFreqSupport timeFreq = _workflow.getOutputTimeFreqSupport("time_freq_support", error);
    if (!error.isOk())
        return FieldsContainer();

    auto iSet = timeFreq.getSetIndexByStepIndexAndSubStep(iStep, iSubStep);

    return this->EvaluateOutputAtGivenSetIndex(iSet, dPhase, output, error);
}

void
Result::init(const char* res_name, Operator &stream_provider, Operator &timefreq_support_provider, Operator &mesh_provider, const char *named_selection, Location requested_location, bool bInclusive, int cs_id)
{
    auto mesh = mesh_provider.getOutputMeshedRegion(0, _dpfError);
    if (!_dpfError.isOk())
        return;
    auto scoping = mesh.namedSelection(named_selection);
    if (!scoping.empty()) {
        if (!requested_location.empty() && scoping.location() != requested_location) {
            Operator transposeScoping = Operator("transpose_scoping");
            transposeScoping.connect(0, scoping);
            transposeScoping.connect(1, mesh_provider, 0);
            if (!bInclusive)
                transposeScoping.connect(2, 1);// connect only if con-inclusive, only take the elements which have all their nodes in the named selection

            scoping = transposeScoping.getOutputScoping(0, _dpfError);
            if (!_dpfError.isOk())
                return;
        }
        if (!scoping.empty() && scoping.size() > 0)
        init(res_name, stream_provider, timefreq_support_provider, scoping, requested_location, cs_id);
    else {
            std::string error = "converting named selection: " + std::string(named_selection) + " to requested location: " + std::string(requested_location) + " retrieves empty scoping";
            _dpfError = DpfError(DpfError::eFailure, "", error);
        }
    }
    else {
        std::string error = "named selection not found :" + std::string(named_selection);
        _dpfError = DpfError(DpfError::eFailure, "", error);
    }
}

}
}
```

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)