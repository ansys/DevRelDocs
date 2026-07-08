# Example WorkflowExamples.cpp

<a id="WorkflowExamples_8cpp-example"></a>
Examples of DPF workflows that compute data. 
```
//
// COPYRIGHT ANSYS. ALL RIGHTS RESERVED.
//
#include "dpf_api.h"
#include <limits>
#ifdef EXAMPLE
#include "Example.h"
#else
#include <gtest/gtest.h>
#endif

TEST(WorkflowExample, TotalDeformation)
{
    // This elementary workflow allows the user to simply read a displacement vector from an analysis and compute its norm.

    // set the result file path to the right path
    std::string fileName("../../../testfiles/mapdl_files/TwoSolids.rst");
    ansys::dpf::DataSources my_data_sources;
    my_data_sources.addResultFile(fileName);

    ansys::dpf::Operator u_op("U");
    u_op.connect(ansys::dpf::eDataSourcesPin, my_data_sources);

    ansys::dpf::Operator norm_op("norm_fc");
    norm_op.connect(u_op);

    ansys::dpf::FieldsContainer my_u_norm = norm_op.getOutputFieldsContainer(0);
}

TEST(WorkflowExample, MinMaxOverTimeOfVonMisesStress)
{
    // This workflow allows users to read the stress tensors for a range of time 
    // steps from an analysis, to implicitly average those elemental nodal tensors to a 
    // nodal location, to compute its Von Mises equivalent and finally, to compute the 
    // minimum and the maximum over time for each component of the nodal equivalent tensors. 
    // This workflow is an example use case of the time scoping pin. This pin expects a scoping 
    // in input and allows the user to choose the time or frequency sets of his results.

    // set the result file path to the right path
    std::string fileName("../../../testfiles/mapdl_files/TwoSolids.rst");
    ansys::dpf::DataSources my_data_sources;
    my_data_sources.addResultFile(fileName);

    ansys::dpf::Operator stress_op("S");
    stress_op.connect(ansys::dpf::eDataSourcesPin, my_data_sources);
    stress_op.connect(ansys::dpf::eTimeScopPin, { 1 });
    stress_op.connect(ansys::dpf::eLocationPin, ansys::dpf::locations::nodal);

    ansys::dpf::Operator eqv_op("eqv_fc");
    eqv_op.connect(stress_op);

    ansys::dpf::Operator min_max_op("min_max_fc");
    min_max_op.connect(eqv_op);

    ansys::dpf::Field my_min = min_max_op.getOutputField(0);
    ansys::dpf::Field my_max = min_max_op.getOutputField(1);
}

TEST(WorkflowExample, StrainTensorsScopedOnNamedSelection)
{
    // This workflow is an example use case of the mesh scoping in input of a result reader. 
    // Here, the user can extract a mesh scoping (a set of spatial entities: node or elements for example) 
    // from a named selection created in mechanical or mapdl. This mesh scoping is then used as an input 
    // of a strain tensors reader. The output of this workflow is the strain tensors scoped only on the 
    // named selection. Two different versions of this workflow is available: the first one extracts the elements 
    // of the named selection and returns an elemental nodal field, the second extracts the nodes of the named 
    // selection, the strain reader will consequently average the tensors on the node to take into account the 
    // nodal mesh scoping in input.

    // set the result file path to the right path
    std::string fileName("../../../testfiles/mapdl_files/TwoSolids.rst");
    ansys::dpf::DataSources my_data_sources;
    my_data_sources.addResultFile(fileName);

    ansys::dpf::Operator strain_op("EPEL");
    strain_op.connect(ansys::dpf::eDataSourcesPin, my_data_sources);
    strain_op.connect(ansys::dpf::eLocationPin, ansys::dpf::locations::nodal);

    ansys::dpf::Operator meshProvider("MeshProvider");
    meshProvider.connect(ansys::dpf::eDataSourcesPin, my_data_sources);
    ansys::dpf::MeshedRegion mesh = meshProvider.getOutputMeshedRegion(0);
    std::vector<std::string> available_named_sel = mesh.availableNamedSelections();

    ansys::dpf::Operator ns_op("scoping_provider_by_ns");
    ns_op.connect(ansys::dpf::eDataSourcesPin, my_data_sources);
    ns_op.connect(0, ansys::dpf::locations::elemental);
    ns_op.connect(1, available_named_sel[0]);

    strain_op.connect(ansys::dpf::eMeshScopPin, ns_op, 0);

    ansys::dpf::FieldsContainer my_nodal_strains = strain_op.getOutputFieldsContainer(0);
}

TEST(WorkflowExample, StressTensorsScopedOnOneElementType)
{
    // This workflow is another example of use of the mesh scoping in input of a result reader. 
    // Here, the user requests a mesh scoping including all the elements of mapdl element type 186. 
    // This mesh scoping is then used as an input of a stress tensors reader. The output of this workflow 
    // is the stress tensors on all the elements of element type 186.

    // set the result file path to the right path
    std::string fileName("../../../testfiles/mapdl_files/TwoSolids.rst");
    ansys::dpf::DataSources my_data_sources;
    my_data_sources.addResultFile(fileName);

    ansys::dpf::Operator stress_op("S");
    stress_op.connect(ansys::dpf::eDataSourcesPin, my_data_sources);

    ansys::dpf::Operator scop_extract_op("scoping_provider_by_prop");
    scop_extract_op.connect(ansys::dpf::eDataSourcesPin, my_data_sources);
    scop_extract_op.connect(0, ansys::dpf::locations::elemental);
    scop_extract_op.connect(1, std::string("mapdl_element_type"));
    scop_extract_op.connect(2, 186);

    stress_op.connect(ansys::dpf::eMeshScopPin, scop_extract_op, 0);

    ansys::dpf::FieldsContainer my_elemental_nodal_stress = stress_op.getOutputFieldsContainer(0);
}

TEST(WorkflowExample, HighPassFilteringOnElementalStress)
{
    // This advanced workflow computes the normal ZZ stress averaged on element
    // sand apply a high pass filter keeping all the stress values higher than 
    // 0.5 * maximum stress.
    // This example requires a license. 

    // set the result file path to the right path
    std::string fileName("../../../testfiles/mapdl_files/TwoSolids.rst");
    ansys::dpf::DataSources my_data_sources;
    my_data_sources.addResultFile(fileName);

    ansys::dpf::Operator s("S");
    s.connect(ansys::dpf::eDataSourcesPin, my_data_sources);

    ansys::dpf::Operator to_elemental("entity_average_fc");
    to_elemental.connect(s);

    ansys::dpf::Operator comp("component_selector_fc");
    comp.connect(to_elemental);
    comp.connect(1, 2); //ZZ comp of stress

    ansys::dpf::Operator min_max("min_max_over_label_fc");
    min_max.connect(comp);
    min_max.connect(1, ansys::dpf::labels::time);

    ansys::dpf::Operator scale("scale");
    scale.connect(min_max);
    scale.connect(1, 0.5);

    ansys::dpf::Operator high_pass("core::field::high_pass_fc");
    high_pass.connect(comp);
    high_pass.connect(1, scale, 0);

    // uncomment this line to run the workflow.
    // this requires a license.
    //ansys::dpf::FieldsContainer fields = high_pass.getOutputFieldsContainer(0);
}

TEST(WorkflowExample, StressMultiBodySimulation)
{
    // Stress calculation on a multibody simulation without averaging across bodies
    // This workflow shows the computation of stresses in a multibody simulation without 
    // doing averaging across the different bodies.

    // set the result file path to the right path
    std::string fileName("../../../testfiles/mapdl_files/TwoSolids.rst");
    ansys::dpf::DataSources my_data_sources;
    my_data_sources.addResultFile(fileName);

    ansys::dpf::Operator tfreq_op("time_freq_support_provider");
    tfreq_op.connect(4, my_data_sources);
    ansys::dpf::TimeFreqSupport tfreq_support = tfreq_op.getOutput<ansys::dpf::TimeFreqSupport>(0);
    ansys::dpf::Field tfreq = tfreq_support.frequencies();

    ansys::dpf::Operator mesh_op("mesh_provider");
    mesh_op.connect(4, my_data_sources);
    ansys::dpf::MeshedRegion mesh = mesh_op.getOutput<ansys::dpf::MeshedRegion>(0);

    ansys::dpf::Operator spm_op("scoping::by_property");
    spm_op.connect(7, mesh);
    spm_op.connect(13, std::string("mat"));
    ansys::dpf::ScopingsContainer mesh_scoping = spm_op.getOutput<ansys::dpf::ScopingsContainer>(0);

    ansys::dpf::Operator stress_op("SZ");
    stress_op.connect(0, tfreq);
    stress_op.connect(1, mesh_scoping);
    stress_op.connect(4, my_data_sources);
    stress_op.connect(9, ansys::dpf::locations::nodal);

    ansys::dpf::FieldsContainer my_stresses = stress_op.getOutputFieldsContainer(0);
}
```

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)