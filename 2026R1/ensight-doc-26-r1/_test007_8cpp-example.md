# Example Test007.cpp undefined

<a id="_test007_8cpp-example"></a>

/// <script src='./ansys261/nexus/viewer-loader.js'></script>
/// <ansys-adr-viewer src='TestAnimation.avz' aspect_ratio=1.777></ansys-adr-viewer>
///





Instancing.





This example demonstrates a couple of different ways to do instancing. They both involve the re-using of Mesh object. 
* Create a node and add it to a parent node, then add the parent node to its parent, ... 

* Create a node and add it to a parent node, then create another node and add it to the same parent node, ...

The visibility selector in the first case will be multiple levels deep, and only a single level deep in the second case.





In either case the matrix associated with each node must be different so that the nodes do not draw in the same location as an other node. 
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
#include <sstream>

#include "GLTFWriter.h"
#include "test.h"

using namespace ANSYS::AVZ;

// Replicated nodes
TESTFUNC(Instancing)
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

        GLTFWriter::Light *light2 = GLTFWriter::Light::CreateDirectional(gltf, 1, 1, 1, 0, 0, -1);
        lightNode->AppendLight(light2);
    }

    // CAMERA
    {
        // CAMERA
        GLTFWriter::Camera *camera = GLTFWriter::Camera::CreatePerspective(gltf);
        // CAMERA NODE
        std::vector<double> mat(16);
        mat[0] = 3;
        mat[1] = 0;
        mat[2] = 0;
        mat[3] = 0;
        mat[4] = 0;
        mat[5] = 3;
        mat[6] = 0;
        mat[7] = 0;
        mat[8] = 0;
        mat[9] = 0;
        mat[10] = 3;
        mat[11] = 0;
        mat[12] = 0;
        mat[13] = 0;
        mat[14] = 0;
        mat[15] = 1;
        GLTFWriter::Node *cameraNode = GLTFWriter::Node::CreateCamera(gltf, camera, "TestCamera", &mat[0]);
        scene->SetCamera(cameraNode);
    }

    // CENTER
    {
        // NODE
        GLTFWriter::Node *node = GLTFWriter::Node::CreateMesh(gltf, "Center");
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
        std::pair<GLTFWriter::Primitive *, GLTFWriter::Material *> pm = GLTFWriter::Test::CreateSolidColoredSpherePrimitive(gltf, 0, 0, 0, 0.05F, 16, 1, 1, 1, 1);
        mesh->AppendPrimitive(pm.first);
    }

    const unsigned int numInstances = 6;

    // ONE WAY TO DO INSTANCING
    {
        // MESH
        GLTFWriter::Mesh *mesh = GLTFWriter::Mesh::Create(gltf);
        {
            // PRIMITIVE
            std::pair<GLTFWriter::Primitive *, GLTFWriter::Material *> pm = GLTFWriter::Test::CreateColoredSpherePrimitive(gltf, 1, 0, 0, 0.5, 6);
            if (!pm.first || !pm.second || !mesh->AppendPrimitive(pm.first)) {
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't CreateColoredSpherePrimitive");
            }

            // this is a solid object, that we want to have an interior color so when it is clipped we see the solid interior color
            pm.second->AppendValue(GLTFWriter::Value::Create(gltf, "solidColor", 0.4, 0.2, 0.4, 1.0));
        }

        GLTFWriter::Node *lastNode = 0;
        for (unsigned int i = numInstances; i > 0; --i) {
            GLTFWriter::Test::Matrix4 mat; // identity
            GLTFWriter::Test::Matrix4 rot;
            if (i > 1) {
                rot.LoadRotation(GLTFWriter::Test::Vector3(0, 0, 0), GLTFWriter::Test::Vector3(0, 0, 1), DegreesToRadians(360.0 / numInstances));
                mat *= rot;
            }

            std::ostringstream oss;
            oss << "Node " << i << " + ";
            const std::string name = oss.str();
            GLTFWriter::Node *node = GLTFWriter::Node::CreateMesh(gltf, name.c_str(), true, &(mat.Get())[0]);
            if (!node || !node->AppendMesh(mesh)) {
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create mesh node");
            }
            if (i != numInstances)
                node->AppendChild(lastNode);

            lastNode = node;
        }

        // NODE
        GLTFWriter::Node *node = GLTFWriter::Node::CreateMesh(gltf, "INSTANCING 1");
        if (!node || !scene->AppendMesh(node)) {
            GLTFWriter::GLTF::Destroy(gltf);
            throw std::runtime_error("Can't create mesh node");
        }
        node->AppendChild(lastNode);
    }

    // ANOTHER WAY TO DO INSTANCING
    {
        // NODE
        GLTFWriter::Node *node = GLTFWriter::Node::CreateMesh(gltf, "INSTANCING 2");
        if (!node || !scene->AppendMesh(node)) {
            GLTFWriter::GLTF::Destroy(gltf);
            throw std::runtime_error("Can't create mesh node");
        }

        GLTFWriter::Mesh *mesh = GLTFWriter::Mesh::Create(gltf);
        if (!mesh) {
            GLTFWriter::GLTF::Destroy(gltf);
            throw std::runtime_error("Can't create mesh");
        }
        {
            // PRIMITIVE
            std::pair<GLTFWriter::Primitive *, GLTFWriter::Material *> pm = GLTFWriter::Test::CreateColoredSpherePrimitive(gltf,   2, 0, 0,   0.5, 6);
            if (!pm.first || !pm.second || !mesh->AppendPrimitive(pm.first)) {
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't CreateColoredSpherePrimitive");
            }

            // this is a solid object, that we want to have an interior color so when it is clipped we see the solid interior color
            pm.second->AppendValue(GLTFWriter::Value::Create(gltf, "solidColor", 0.5, 0.5, 0.5, 1.0));
        }

        GLTFWriter::Test::Matrix4 mat; // identity
        GLTFWriter::Test::Matrix4 rot;
        rot.LoadRotation(GLTFWriter::Test::Vector3(0, 0, 0), GLTFWriter::Test::Vector3(0, 0, 1), DegreesToRadians(360.0 / numInstances));
        for (unsigned int i = 0; i < numInstances; ++i) {
            if (i > 0)
                mat *= rot;

            std::ostringstream oss;
            oss << "Node " << i + 1;
            const std::string name = oss.str();
            GLTFWriter::Node *lastNode = GLTFWriter::Node::CreateMesh(gltf, name.c_str(), true, &(mat.Get())[0]);
            if (!lastNode || !node->AppendChild(lastNode) || !lastNode->AppendMesh(mesh)) {
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create mesh");
            }
        }
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