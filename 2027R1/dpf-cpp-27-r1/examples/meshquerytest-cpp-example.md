# Example MeshQueryTest.cpp

<a id="MeshQueryTest_8cpp-example"></a>
Examples showing how to access mesh data in an RST file. 
```
#ifdef EXAMPLE
#include "Example.h"
#else
#include <gtest/gtest.h>
#endif

#include <math.h>
#include "helpers/dpf_meshQuery.h"
#include "helpers/dpf_model.h"
#include "Plugin.h"

using namespace ansys::dpf;

TEST(MeshQuery, GetSolidElements)
{
    std::string fileName("../../../testfiles/mapdl_files/SolidSurfaceBeam.rst");
    ansys::dpf::Model model(fileName);

    MeshQuery meshQuery = model.CreateMeshQuery();

    std::vector<int> ids;
    ansys::dpf::DpfError error;

    auto elements = meshQuery.GetSolidElements(error);
    elements.getIds(ids);
    EXPECT_EQ(ids.size(), 81);
}

TEST(MeshQuery, GetShellElements)
{
    std::string fileName("../../../testfiles/mapdl_files/SolidSurfaceBeam.rst");
    ansys::dpf::Model model(fileName);

    MeshQuery meshQuery = model.CreateMeshQuery();

    std::vector<int> ids;
    ansys::dpf::DpfError error;

    auto elements = meshQuery.GetShellElements(error);
    elements.getIds(ids);
    EXPECT_EQ(ids.size(), 459);
}

TEST(MeshQuery, GetBeamElements)
{
    std::string fileName("../../../testfiles/mapdl_files/SolidSurfaceBeam.rst");
    ansys::dpf::Model model(fileName);

    MeshQuery meshQuery = model.CreateMeshQuery();

    std::vector<int> ids;
    ansys::dpf::DpfError error;

    auto elements = meshQuery.GetBeamElements(error);
    elements.getIds(ids);
    EXPECT_EQ(ids.size(), 45);
}

TEST(MeshQuery, GetSkinElements)
{
    std::string fileName("../../../testfiles/mapdl_files/SolidSurfaceBeam.rst");
    ansys::dpf::Model model(fileName);

    MeshQuery meshQuery = model.CreateMeshQuery();

    std::vector<int> ids;
    ansys::dpf::DpfError error;

    auto elements = meshQuery.GetSkinElements(error);
    elements.getIds(ids);
    EXPECT_EQ(ids.size(), 18);
}

TEST(MeshQuery, GetPointElements)
{
    std::string fileName("../../../testfiles/mapdl_files/SolidSurfaceBeam.rst");
    ansys::dpf::Model model(fileName);

    MeshQuery meshQuery = model.CreateMeshQuery();

    std::vector<int> ids;
    ansys::dpf::DpfError error;

    auto elements = meshQuery.GetPointElements(error);
    elements.getIds(ids);
    EXPECT_EQ(ids.size(), 3);
}

TEST(MeshQuery, GetNodesByNamedSelection)
{
    std::string fileName("../../../testfiles/Cube.rst");
    ansys::dpf::Model model(fileName);

    MeshQuery meshQuery = model.CreateMeshQuery();

    std::vector<int> ids;
    ansys::dpf::DpfError error;

    auto nodes = meshQuery.GetNodesByNamedSelection("WHOLE_THING", error);
    nodes.getIds(ids);
    EXPECT_EQ(ids.size(), 27);

    nodes = meshQuery.GetNodesByNamedSelection("TOP", error);
    nodes.getIds(ids);
    EXPECT_EQ(ids.size(), 9);
}

TEST(MeshQuery, GetNodesByMaterialId)
{
    std::string fileName("../../../testfiles/mapdl_files/SolidSurfaceBeam.rst");
    ansys::dpf::Model model(fileName);

    MeshQuery meshQuery = model.CreateMeshQuery();

    std::vector<int> ids;
    ansys::dpf::DpfError error;

    auto nodes = meshQuery.GetNodesByMaterialId(1, error);
    nodes.getIds(ids);
    EXPECT_EQ(ids.size(), 180);

    nodes = meshQuery.GetNodesByMaterialId(4, error);
    nodes.getIds(ids);
    EXPECT_EQ(ids.size(), 16);

    nodes = meshQuery.GetNodesByMaterialId(7, error);
    nodes.getIds(ids);
    EXPECT_EQ(ids.size(), 544);
}

TEST(MeshQuery, GetNodesByElementType)
{
    std::string fileName("../../../testfiles/mapdl_files/SolidSurfaceBeam.rst");
    ansys::dpf::Model model(fileName);

    MeshQuery meshQuery = model.CreateMeshQuery();

    std::vector<int> ids;
    ansys::dpf::DpfError error;

    auto nodes = meshQuery.GetNodesByElementType(elements::line2, error);
    nodes.getIds(ids);
    EXPECT_EQ(ids.size(), 48);

    nodes = meshQuery.GetNodesByElementType(elements::point1, error);
    nodes.getIds(ids);
    EXPECT_EQ(ids.size(), 1);

    nodes = meshQuery.GetNodesByElementType(elements::quad4, error);
    nodes.getIds(ids);
    EXPECT_EQ(ids.size(), 540);

    nodes = meshQuery.GetNodesByElementType(elements::quad8, error);
    nodes.getIds(ids);
    EXPECT_EQ(ids.size(), 58);

    nodes = meshQuery.GetNodesByElementType(elements::hex20, error);
    nodes.getIds(ids);
    EXPECT_EQ(ids.size(), 544);
}
TEST(MeshQuery, GetNodesBySolverElementType)
{
    std::string fileName("../../../testfiles/mapdl_files/SolidSurfaceBeam.rst");
    ansys::dpf::Model model(fileName);

    MeshQuery meshQuery = model.CreateMeshQuery();

    std::vector<int> ids;
    ansys::dpf::DpfError error;

    //- 3 - D 20 - Node Structural Solid
    auto nodes = meshQuery.GetNodesBySolverElementType(186, error);
    nodes.getIds(ids);
    EXPECT_EQ(ids.size(), 544);

    //- 3 - D 2 - Node Beam
    nodes = meshQuery.GetNodesBySolverElementType(188, error);
    nodes.getIds(ids);
    EXPECT_EQ(ids.size(), 48);

    //- 3 - D Target Segment
    nodes = meshQuery.GetNodesBySolverElementType(170, error);
    nodes.getIds(ids);
    EXPECT_EQ(ids.size(), 74);

    //- 3 - D 8 - Node Surface - to - Surface Contact
    nodes = meshQuery.GetNodesBySolverElementType(174, error);
    nodes.getIds(ids);
    EXPECT_EQ(ids.size(), 74);

    //- 4 - Node Structural Shell
    nodes = meshQuery.GetNodesBySolverElementType(181, error);
    nodes.getIds(ids);
    EXPECT_EQ(ids.size(), 540);

    //- Follower Load
    nodes = meshQuery.GetNodesBySolverElementType(201, error);
    nodes.getIds(ids);
    EXPECT_EQ(ids.size(), 1);
}

TEST(MeshQuery, GetElementsByNamedSelection)
{
    std::string fileName("../../../testfiles/Cube.rst");
    ansys::dpf::Model model(fileName);

    MeshQuery meshQuery = model.CreateMeshQuery();

    std::vector<int> ids;
    ansys::dpf::DpfError error;

    auto elements = meshQuery.GetElementsByNamedSelection("WHOLE_THING", false, error);
    elements.getIds(ids);
    EXPECT_EQ(ids.size(), 8);

    elements = meshQuery.GetElementsByNamedSelection("WHOLE_THING", true, error);
    elements.getIds(ids);
    EXPECT_EQ(ids.size(), 8);

    elements = meshQuery.GetElementsByNamedSelection("TOP", true, error);
    elements.getIds(ids);
    EXPECT_EQ(ids.size(), 4);

    elements = meshQuery.GetElementsByNamedSelection("TOP", false, error);
    elements.getIds(ids);
    EXPECT_EQ(ids.size(), 0);
}

TEST(MeshQuery, GetElementsByMaterialId)
{
    std::string fileName("../../../testfiles/mapdl_files/SolidSurfaceBeam.rst");
    ansys::dpf::Model model(fileName);

    MeshQuery meshQuery = model.CreateMeshQuery();

    std::vector<int> ids;
    ansys::dpf::DpfError error;

    auto nodes = meshQuery.GetElementsByMaterialId(1, error);
    nodes.getIds(ids);
    EXPECT_EQ(ids.size(), 153);

    nodes = meshQuery.GetElementsByMaterialId(4, error);
    nodes.getIds(ids);
    EXPECT_EQ(ids.size(), 15);

    nodes = meshQuery.GetElementsByMaterialId(7, error);
    nodes.getIds(ids);
    EXPECT_EQ(ids.size(), 81);
}

TEST(MeshQuery, GetElementsByElementType)
{
    std::string fileName("../../../testfiles/mapdl_files/SolidSurfaceBeam.rst");
    ansys::dpf::Model model(fileName);

    MeshQuery meshQuery = model.CreateMeshQuery();

    std::vector<int> ids;
    ansys::dpf::DpfError error;

    auto elements = meshQuery.GetElementsByElementType(elements::line2, error);
    elements.getIds(ids);
    EXPECT_EQ(ids.size(), 45);

    elements = meshQuery.GetElementsByElementType(elements::point1, error);
    elements.getIds(ids);
    EXPECT_EQ(ids.size(), 3);

    elements = meshQuery.GetElementsByElementType(elements::quad4, error);
    elements.getIds(ids);
    EXPECT_EQ(ids.size(), 471);

    elements = meshQuery.GetElementsByElementType(elements::quad8, error);
    elements.getIds(ids);
    EXPECT_EQ(ids.size(), 24);

    elements = meshQuery.GetElementsByElementType(elements::hex20, error);
    elements.getIds(ids);
    EXPECT_EQ(ids.size(), 81);
}

TEST(MeshQuery, GetElementsBySolverElementType)
{
    std::string fileName("../../../testfiles/mapdl_files/SolidSurfaceBeam.rst");
    ansys::dpf::Model model(fileName);

    MeshQuery meshQuery = model.CreateMeshQuery();

    std::vector<int> ids;
    ansys::dpf::DpfError error;

    //- 3 - D 20 - Node Structural Solid
    auto nodes = meshQuery.GetElementsBySolverElementType(186, error);
    nodes.getIds(ids);
    EXPECT_EQ(ids.size(), 81);

    //- 3 - D 2 - Node Beam
    nodes = meshQuery.GetElementsBySolverElementType(188, error);
    nodes.getIds(ids);
    EXPECT_EQ(ids.size(), 45);

    //- 3 - D Target Segment
    nodes = meshQuery.GetElementsBySolverElementType(170, error);
    nodes.getIds(ids);
    EXPECT_EQ(ids.size(), 18);

    //- 3 - D 8 - Node Surface - to - Surface Contact
    nodes = meshQuery.GetElementsBySolverElementType(174, error);
    nodes.getIds(ids);
    EXPECT_EQ(ids.size(), 18);

    //- 4 - Node Structural Shell
    nodes = meshQuery.GetElementsBySolverElementType(181, error);
    nodes.getIds(ids);
    EXPECT_EQ(ids.size(), 459);

    //- Follower Load
    nodes = meshQuery.GetElementsBySolverElementType(201, error);
    nodes.getIds(ids);
    EXPECT_EQ(ids.size(), 3);
}
```

[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[private]: https://img.shields.io/badge/-private-red (private)
[public]: https://img.shields.io/badge/-public-brightgreen (public)
[static]: https://img.shields.io/badge/-static-lightgrey (static)