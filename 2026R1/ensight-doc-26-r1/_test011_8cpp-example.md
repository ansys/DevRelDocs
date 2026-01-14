# Example Test011.cpp undefined

<a id="_test011_8cpp-example"></a>

/// <script src='./ansys261/nexus/viewer-loader.js'></script>
/// <ansys-adr-viewer src='TestPrimitiveTypes.avz' aspect_ratio=1.777></ansys-adr-viewer>
///





Markup.





This example demonstrates the two different types of markups, 2D and 3D.





2D markups are positioned in the scene by viewport coordinates. Viewport coordinates range from 0 to 1 from left to right and top to bottom. In addition to the viewport location, you can specify how the text string is anchored to the viewport location. The 2D markup in this example locates the markup at 0.5,0.1 and the anchor at N. This means that the text is centered in the XY direction and the top of the text is at 0.1 from the top of the window.





3D markups are positioned in object space coordinates, and require and XYZ location. The anchor works as in the 2D case. The 3D markup can be positioned relative to the object location in pixels. A line is drawn from the offset location to the object location. If a path is provided with the markup, the markup can be transformed with the object. The path is simply the nodeIDs of all nodes from the topmost node, to the node that the markup is attached to, concatenated and separated by ';' (as in Node1;Node2;NodeWithMarkup). 
```
/*
 * Copyright 2018-2021 ANSYS, Inc. Unauthorized use, distribution, or duplication is prohibited.
 * 
 * Restricted Rights Legend
 *
 * Use, duplication, or disclosure of this
 * software and its documentation by the
 * Government is subject to restrictions as
 * set forth in subdivision [(b)(3)(ii)] of
 * the Rights in Technical Data and Computer
 * Software clause at 52.227-7013.
 */
#include <vector>
#include <cmath>
#ifdef _WIN32
#include <codecvt>
#endif

#include "GLTFWriter.h"
#include "test.h"

using namespace ANSYS::AVZ;

namespace {
#ifdef _WIN32
    std::string 
    ConvertToUtf8String(const std::wstring& wstr)
    {
        std::wstring_convert<std::codecvt_utf8<wchar_t>> myconv;
        return myconv.to_bytes(wstr);
    }
#endif
};

// Markup
TESTFUNC(Markup)
{
    GLTFWriter::GLTF *gltf = GLTFWriter::GLTF::Create("MyApp", "1.0", functionName.c_str(), type);
    if (!gltf)
        throw std::runtime_error("Can't create GLTF");

    // SCENE
    GLTFWriter::Scene *scene = GLTFWriter::Scene::Create(gltf, "TestScene", "m", 1.0, GLTFWriter::Scene::BT_SOLID, 0.5, 0.5, 0.5);
    if (!scene) {
        GLTFWriter::GLTF::Destroy(gltf);
        throw std::runtime_error("Can't create scene");
    }

    // MARKUP TITLE
    scene->Add2DText(gltf, "3D BOX", 0.5F, 0.1F, GLTFWriter::Markup::MTAT_N); // MTAT_N -> centered in horizontal, top is 0.1 down
    // because we are making a box that is centered at 0,0,0 with dimensions 1,1,1 the corners are at 0.5,0.5,0.5, ...
    // MARKUP OBJECT
#ifdef _WIN32
    scene->Add3DText(gltf, ConvertToUtf8String(L"Ḉὀrṉḝr").c_str(), 0.5, 0.5, 0.5, GLTFWriter::Markup::MTAT_AUTO,
#else
    scene->Add3DText(gltf, "Corner", 0.5, 0.5, 0.5, GLTFWriter::Markup::MTAT_AUTO,
#endif
                        12, "serif", 25, -25, GLTFWriter::Markup::MLT_ARROW);

    // MESH NODE
    {
        // NODE
        GLTFWriter::Node *node = GLTFWriter::Node::CreateMesh(gltf, "3D Box");
        if (!node || !scene->AppendMesh(node)) {
            GLTFWriter::GLTF::Destroy(gltf);
            throw std::runtime_error("Can't create mesh node");
        }

        // MESH
        GLTFWriter::Mesh *mesh = GLTFWriter::Mesh::Create(gltf);
        if (!mesh || !node->AppendMesh(mesh)) {
            GLTFWriter::GLTF::Destroy(gltf);
            throw std::runtime_error("Can't create mesh");
        }

        // create box centered at 0,0,0 with dimensions 1,1,1 
        GLTFWriter::Test::PrimMat pm = GLTFWriter::Test::CreateColoredBoxPrimitive(gltf, 0, 0, 0, 1, 1, 1);
        mesh->AppendPrimitive(pm.first);
    }

    if (!gltf->Write()) {
        GLTFWriter::GLTF::Destroy(gltf);
        throw std::runtime_error("Error creating file");
    }

    GLTFWriter::GLTF::GLTFError error = gltf->GetError();

    GLTFWriter::GLTF::Destroy(gltf);

    if (error != GLTFWriter::GLTF::GLTF_ERROR_NONE)
        throw std::runtime_error("Error creating file");
}
```

[public]: https://img.shields.io/badge/-public-brightgreen (public)
[protected]: https://img.shields.io/badge/-protected-yellow (protected)
[static]: https://img.shields.io/badge/-static-lightgrey (static)
[C++]: https://img.shields.io/badge/language-C%2B%2B-blue (C++)
[Python]: https://img.shields.io/badge/language-Python-blue (Python)
[private]: https://img.shields.io/badge/-private-red (private)
[const]: https://img.shields.io/badge/-const-lightblue (const)
[Markdown]: https://img.shields.io/badge/language-Markdown-blue (Markdown)