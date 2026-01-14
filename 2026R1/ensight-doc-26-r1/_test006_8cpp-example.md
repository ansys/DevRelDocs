# Example Test006.cpp undefined

<a id="_test006_8cpp-example"></a>

/// <script src='./ansys261/nexus/viewer-loader.js'></script>
/// <ansys-adr-viewer src='TestTextured2DQuad.avz' aspect_ratio=1.777></ansys-adr-viewer>
///





Animation.





This example shows how to add animation to a scene. Animations involve creating samplers that describe values of properties at defined times. The ANSYSViewer interpolates the property to generate values at times that fall between the defined times. The samplers are added to the animation as channels. The channels defined which property to animate.





Only some properties can be animated: 
* node - matrix

* node - visible

* material - Any value

In this example the matrix property and visible property of nodes are changed along with the color value of a material. 
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

// Simple creation of animated lighted solid color box
TESTFUNC(Animation)
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

    GLTFWriter::Animation *animation = GLTFWriter::Animation::Create(gltf, "My Animation");
    if (!animation) {
        GLTFWriter::GLTF::Destroy(gltf);
        throw std::runtime_error("Can't create animation");
    }

    // create a reusable time
    GLTFWriter::Attribute *time1  = 0;
    {
        float _time[3];
        unsigned int i = 0;
        _time[i++] = 0; // time 0
        _time[i++] = 9; // time 1
        _time[i++] = 18; // time 2
        time1 = GLTFWriter::Attribute::Create(gltf, "TIME", GLTFWriter::Attribute::AT_FLOAT, 3, _time);
    }

    // ANIMATION SAMPLER1 for sampling matrix
    GLTFWriter::AnimationSampler *sampler1 = 0;
    {
        float _mat[3 * 16];
        unsigned int i = 0;

        // time 0
        GLTFWriter::Test::Matrix4 m1; // identity
        for (unsigned int j = 0; j < 16; ++j)
            _mat[i++] = (float)m1[j];

        // time 1
        GLTFWriter::Test::Matrix4 m2; // identity
        GLTFWriter::Test::Matrix4 t2;
        t2.LoadTranslate(GLTFWriter::Test::Vector3(0, 0, 0));
        m2 *= t2;
        GLTFWriter::Test::Matrix4 r2;
        r2.LoadRotation(GLTFWriter::Test::Vector3(-1, 0, 0), GLTFWriter::Test::Vector3(-1, 0, 1), DegreesToRadians(-45));
        m2 *= r2;
        GLTFWriter::Test::Matrix4 s2;
        s2.LoadScale(GLTFWriter::Test::Vector3(1, 1, 1));
        m2 *= s2;
        for (unsigned int j = 0; j < 16; ++j)
            _mat[i++] = (float)m2[j];

        // time 2
        GLTFWriter::Test::Matrix4 m3; // identity
        GLTFWriter::Test::Matrix4 t3;
        t3.LoadTranslate(GLTFWriter::Test::Vector3(0, 0, 0));
        m3 *= t3;
        GLTFWriter::Test::Matrix4 r3;
        r3.LoadRotation(GLTFWriter::Test::Vector3(-1, 0, 0), GLTFWriter::Test::Vector3(-1, 0, 1), DegreesToRadians(-90));
        m3 *= r3;
        GLTFWriter::Test::Matrix4 s3;
        s3.LoadScale(GLTFWriter::Test::Vector3(1, 1, 1));
        m3 *= s3;
        for (unsigned int j = 0; j < 16; ++j)
            _mat[i++] = (float)m3[j];

        GLTFWriter::Attribute *matrix = GLTFWriter::Attribute::Create(gltf, "MATRIX", GLTFWriter::Attribute::AT_FLOAT_MAT4, 3, _mat);

        sampler1 = GLTFWriter::AnimationSampler::Create(gltf, time1, matrix);
    }
    // ANIMATION SAMPLER2 for sampling matrix
    GLTFWriter::AnimationSampler *sampler2 = 0;
    {
        float _mat[3 * 16];
        unsigned int i = 0;

        // time 0
        GLTFWriter::Test::Matrix4 m0; // identity
        for (unsigned int j = 0; j < 16; ++j)
            _mat[i++] = (float)m0[j];

        // time 1
        GLTFWriter::Test::Matrix4 m1; // identity
        GLTFWriter::Test::Matrix4 t1;
        t1.LoadTranslate(GLTFWriter::Test::Vector3(0, 0, 0));
        m1 *= t1;
        GLTFWriter::Test::Matrix4 r1;
        r1.LoadRotation(GLTFWriter::Test::Vector3(0, 0, 0), GLTFWriter::Test::Vector3(0, 0, 1), DegreesToRadians(45));
        m1 *= r1;
        GLTFWriter::Test::Matrix4 s1;
        s1.LoadScale(GLTFWriter::Test::Vector3(3, 3, 3));
        m1 *= s1;
        for (unsigned int j = 0; j < 16; ++j)
            _mat[i++] = (float)m1[j];

        // time 2
        GLTFWriter::Test::Matrix4 m2; // identity
        GLTFWriter::Test::Matrix4 t2;
        t2.LoadTranslate(GLTFWriter::Test::Vector3(0, 0, 0));
        m2 *= t2;
        GLTFWriter::Test::Matrix4 r2;
        r2.LoadRotation(GLTFWriter::Test::Vector3(0, 0, 0), GLTFWriter::Test::Vector3(0, 0, 1), DegreesToRadians(90));
        m2 *= r2;
        GLTFWriter::Test::Matrix4 s2;
        s2.LoadScale(GLTFWriter::Test::Vector3(1, 1, 1));
        m2 *= s2;
        for (unsigned int j = 0; j < 16; ++j)
            _mat[i++] = (float)m2[j];

        GLTFWriter::Attribute *matrix = GLTFWriter::Attribute::Create(gltf, "MATRIX", GLTFWriter::Attribute::AT_FLOAT_MAT4, 3, _mat);

        sampler2 = GLTFWriter::AnimationSampler::Create(gltf, time1, matrix);
    }
    // ANIMATION SAMPLER3 for sampling color
    GLTFWriter::AnimationSampler *sampler3 = 0;
    {
        float _time[3];
        unsigned int i = 0;
        _time[i++] = 4; // time 0
        _time[i++] = 9; // time 1
        _time[i++] = 14; // time 2
        GLTFWriter::Attribute *time = GLTFWriter::Attribute::Create(gltf, "TIME", GLTFWriter::Attribute::AT_FLOAT, 3, _time);

        float _col[3 * 4];
        i = 0;

        // time 0
        _col[i++] = 1;
        _col[i++] = 0;
        _col[i++] = 0;
        _col[i++] = 0.5;

        // time 1
        _col[i++] = 1;
        _col[i++] = 1;
        _col[i++] = 0;
        _col[i++] = 0.75;

        // time 2
        _col[i++] = 0;
        _col[i++] = 1;
        _col[i++] = 0;
        _col[i++] = 1;

        GLTFWriter::Attribute *color = GLTFWriter::Attribute::Create(gltf, "COLOR", GLTFWriter::Attribute::AT_FLOAT_VEC4, 3, _col);

        sampler3 = GLTFWriter::AnimationSampler::Create(gltf, time, color);
    }
    // ANIMATION SAMPLER4 for sampling visibility
    GLTFWriter::AnimationSampler *sampler4 = 0;
    {
        float _time[2];
        unsigned int i = 0;
        _time[i++] = 3; // time 0
        _time[i++] = 15; // time 1
        GLTFWriter::Attribute *time = GLTFWriter::Attribute::Create(gltf, "TIME", GLTFWriter::Attribute::AT_FLOAT, 2, _time);

        int _vis[2];
        i = 0;

        // time 0
        _vis[i++] = 1;

        // time 1
        _vis[i++] = 0;

        GLTFWriter::Attribute *visibility = GLTFWriter::Attribute::Create(gltf, "VISIBILITY", GLTFWriter::Attribute::AT_INT, 2, _vis);

        sampler4 = GLTFWriter::AnimationSampler::Create(gltf, time, visibility);
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

        GLTFWriter::Light *light2 = GLTFWriter::Light::CreateDirectional(gltf, 1, 1, 1, -1, -1, -3);
        lightNode->AppendLight(light2);
    }

    // CAMERA
    {
        // CAMERA
        GLTFWriter::Camera *camera = GLTFWriter::Camera::CreateOrthographic(gltf);
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
        GLTFWriter::Node *node = GLTFWriter::Node::CreateMesh(gltf, "3D Box 1 with an extremely really long meaningless name", false, &mat[0]);
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
        std::pair<GLTFWriter::Primitive *, GLTFWriter::Material *> pm = GLTFWriter::Test::CreateSolidColoredBoxPrimitive(gltf,   -1, 0, 0,   1, 1, 1,   1, 0, 0, 0.5);
        mesh->AppendPrimitive(pm.first);

        animation->AppendChannel(sampler1, node, "matrix");
        animation->AppendChannel(sampler3, pm.second, "color");
        animation->AppendChannel(sampler4, node, "visible");
    }

    // MESH NODE
    {
        GLTFWriter::Test::Matrix4 mat; // identity
        mat.LoadTranslate(GLTFWriter::Test::Vector3(1, 0, 0));

        // NODE
        GLTFWriter::Node *node = GLTFWriter::Node::CreateMesh(gltf, "3D Box 2", true, &(mat.Get())[0]);
        if (!node || !scene->AppendMesh(node)) {
            GLTFWriter::GLTF::Destroy(gltf);
            throw std::runtime_error("Can't create mesh node");
        }

        {
            // NODE
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
            GLTFWriter::Node *n = GLTFWriter::Node::CreateMesh(gltf, "", true, &mat[0]);
            if (!n || !node->AppendChild(n)) {
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create mesh node");
            }

            // MESH
            GLTFWriter::Mesh *mesh = GLTFWriter::Mesh::Create(gltf);
            if (!mesh || !n->AppendMesh(mesh)) {
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create mesh node");
            }

            // PRIMITIVE
            std::pair<GLTFWriter::Primitive *, GLTFWriter::Material *> pm = GLTFWriter::Test::CreateSolidColoredBoxPrimitive(gltf,   0, 0, 0,   1, 1, 1,   0, 0, 1, 0.5);
            mesh->AppendPrimitive(pm.first);

            animation->AppendChannel(sampler2, n, "matrix");
        }
    }

    // MESH NODE
    {
        // NODE
        GLTFWriter::Node *node = GLTFWriter::Node::CreateMesh(gltf, "3D Box 3");
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
        std::pair<GLTFWriter::Primitive *, GLTFWriter::Material *> pm = GLTFWriter::Test::CreateSolidColoredBoxPrimitive(gltf, 0, 0, 0, 3, 1, 2, 1, 0.5, 0, 0.25);
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