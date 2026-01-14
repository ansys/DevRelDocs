# Example Test012.cpp undefined

<a id="_test012_8cpp-example"></a>

/// <script src='./ansys261/nexus/viewer-loader.js'></script>
/// <ansys-adr-viewer src='TestMarkup.avz' aspect_ratio=1.777></ansys-adr-viewer>
///





Clipping plane.





This example demonstrates a clipping plane attached to the scene.





The clipping plane is created from three points, that are specified in object space coordinates. 
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

#include "GLTFWriter.h"
#include "test.h"

using namespace ANSYS::AVZ;

// Lighted solid colored sphere
TESTFUNC(ClipPlane)
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

    // CLIP PLANE
    scene->SetClipPlane(0, 0, 0.2F,  1, 0, 0.2F,  1, 1, 0.2F);

    // LIGHTS
    {
        // LIGHT NODE
        GLTFWriter::Node *lightNode = GLTFWriter::Node::CreateLight(gltf);
        if (!lightNode || !scene->SetLight(lightNode)) {
            GLTFWriter::GLTF::Destroy(gltf);
            throw std::runtime_error("Can't create light");
        }

        // LIGHTS
        GLTFWriter::Light *light1 = GLTFWriter::Light::CreateAmbient(gltf);
        lightNode->AppendLight(light1);

        GLTFWriter::Light *light2 = GLTFWriter::Light::CreateDirectional(gltf, 1, 1, 1, -1, -1, -3);
        lightNode->AppendLight(light2);
    }

    // CAMERA
    {
        // CAMERA
        GLTFWriter::Camera *camera = GLTFWriter::Camera::CreatePerspective(gltf);
        // CAMERA NODE
        std::vector<double> mat(16);
        mat[0] = 1;
        mat[1] = 0;
        mat[2] = 0;
        mat[3] = 0;
        mat[4] = 0;
        mat[5] = 1;
        mat[6] = 0;
        mat[7] = 0;
        mat[8] = 0;
        mat[9] = 0;
        mat[10] = 1;
        mat[11] = 0;
        mat[12] = 0;
        mat[13] = 0;
        mat[14] = 0;
        mat[15] = 1;
        GLTFWriter::Node *cameraNode = GLTFWriter::Node::CreateCamera(gltf, camera, "TestCamera", &mat[0]);
        scene->SetCamera(cameraNode);
    }

    // MESH NODE
    {
        // NODE
        GLTFWriter::Node *node = GLTFWriter::Node::CreateMesh(gltf, "3D Sphere");
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

        // PRIMITIVE
        std::pair<GLTFWriter::Primitive *, GLTFWriter::Material *> pm = GLTFWriter::Test::CreateSolidColoredSpherePrimitive(gltf,  0, 0, 0,  0.5,  16,  1.0, 0.0, 0.0, 1.0);
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