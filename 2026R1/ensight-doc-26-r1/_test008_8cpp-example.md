# Example Test008.cpp undefined

<a id="_test008_8cpp-example"></a>

/// <script src='./ansys261/nexus/viewer-loader.js'></script>
/// <ansys-adr-viewer src='TestInstancing.avz' aspect_ratio=1.777></ansys-adr-viewer>
///





Animated textured sphere.





See [Test006.cpp](_test006_8cpp-example.html) for more information about animations.





This is another animation example that simply transforms a node matrix over a period of time. The underlying code in the ANSYSViewer extracts a quaternion from the matrix and interpolates between quaternions at the defined times.





The animation in this example merely rotates the sphere about its Z axis.





A custom shader is used that demonstrates the usage of a 2D texture coordinate. The 2D texture coordinates in this example are similar to latitude and longitude. 
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

// Lighted Textured Sphere
TESTFUNC(LightedTexturedSphere)
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

    // ANIMATION
    GLTFWriter::Animation *animation = GLTFWriter::Animation::Create(gltf, "My Animation");
    // create a reusable time
    GLTFWriter::Attribute *time = 0;
    {
        float _time[4];
        unsigned int i = 0;
        _time[i++] = 0; // time 0
        _time[i++] = 10; // time 1
        _time[i++] = 20; // time 2
        _time[i++] = 30; // time 3
        time = GLTFWriter::Attribute::Create(gltf, "TIME", GLTFWriter::Attribute::AT_FLOAT, 4, _time);
    }

    // ANIMATION SAMPLER for sampling matrix
    GLTFWriter::AnimationSampler *sampler = 0;
    {
        float _mat[4 * 16];
        unsigned int i = 0;

        // time 0
        GLTFWriter::Test::Matrix4 m0; // identity
        for (unsigned int j = 0; j < 16; ++j)
            _mat[i++] = (float)m0[j];

        // time 1
        GLTFWriter::Test::Matrix4 m1; // identity
        GLTFWriter::Test::Matrix4 r1;
        r1.LoadRotation(GLTFWriter::Test::Vector3(0, 0, 0), GLTFWriter::Test::Vector3(0, 1, 0), DegreesToRadians(120));
        m1 *= r1;
        for (unsigned int j = 0; j < 16; ++j)
            _mat[i++] = (float)m1[j];

        // time 2
        GLTFWriter::Test::Matrix4 m2; // identity
        GLTFWriter::Test::Matrix4 r2;
        r2.LoadRotation(GLTFWriter::Test::Vector3(0, 0, 0), GLTFWriter::Test::Vector3(0, 1, 0), DegreesToRadians(240));
        m2 *= r2;
        for (unsigned int j = 0; j < 16; ++j)
            _mat[i++] = (float)m2[j];

        // time 3
        GLTFWriter::Test::Matrix4 m3; // identity
        GLTFWriter::Test::Matrix4 r3;
        r3.LoadRotation(GLTFWriter::Test::Vector3(0, 0, 0), GLTFWriter::Test::Vector3(0, 1, 0), DegreesToRadians(360));
        m3 *= r3;
        for (unsigned int j = 0; j < 16; ++j)
            _mat[i++] = (float)m3[j];

        GLTFWriter::Attribute *matrix = GLTFWriter::Attribute::Create(gltf, "MATRIX", GLTFWriter::Attribute::AT_FLOAT_MAT4, 4, _mat);

        sampler = GLTFWriter::AnimationSampler::Create(gltf, time, matrix);
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

        GLTFWriter::Light *light2 = GLTFWriter::Light::CreateDirectional(gltf, 1, 1, 1, -1, -1, -1);
        lightNode->AppendLight(light2);
    }

    // CAMERA
    {
        // CAMERA
        GLTFWriter::Camera *camera = GLTFWriter::Camera::CreatePerspective(gltf);
        // CAMERA NODE
        std::vector<double> mat(16);
        mat[0] = 0.5;
        mat[1] = 0;
        mat[2] = 0;
        mat[3] = 0;
        mat[4] = 0;
        mat[5] = 0.5;
        mat[6] = 0;
        mat[7] = 0;
        mat[8] = 0;
        mat[9] = 0;
        mat[10] = 0.5;
        mat[11] = 0;
        mat[12] = 0;
        mat[13] = 0;
        mat[14] = 0;
        mat[15] = 1;
        GLTFWriter::Node *cameraNode = GLTFWriter::Node::CreateCamera(gltf, camera, "TestCamera", &mat[0]);
        scene->SetCamera(cameraNode);
    }

    // generate vertices, normals, and texture coordinates for a ball
    std::vector<float> vertices;
    std::vector<float> normals;
    std::vector<float> texCoords;
    std::vector<unsigned short> triangles;
    GLTFWriter::Test::MakeTexturedSphere(0, 0, 0, 0.5, 64, vertices, normals, texCoords, triangles);

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
        GLTFWriter::Node *node = GLTFWriter::Node::CreateMesh(gltf, "Sphere", true, &mat[0]);
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

        // TEXTURE
        GLTFWriter::Texture *texture = GLTFWriter::Test::CreateTexture(gltf, "earth.png");

        // VERTEX SHADER
        std::string vsText(std::string("precision highp float;\n") +
            "uniform mat4 u_projectionMatrix;\n" +
            "uniform mat4 u_modelViewMatrix;\n" +
            "attribute vec3 a_position;\n" +
            "uniform mat3 u_normalMatrix;\n" +
            "attribute vec3 a_normal;\n" +
            "varying vec3 v_eyePosition;\n" +
            "varying vec3 v_normal;\n" +
            "attribute vec2 a_texCoord0;\n" +
            "varying vec2 v_texCoord0;\n" +
            "void main() {\n" +
            "vec4 l_position = vec4(a_position, 1.0);\n" +
            "vec4 l_eyePosition = u_modelViewMatrix * l_position;\n" +
            "v_eyePosition = l_eyePosition.xyz / l_eyePosition.w;\n" +
            "v_normal = u_normalMatrix * a_normal;\n" +
            "v_texCoord0 = a_texCoord0;\n" +
            "gl_Position = u_projectionMatrix * l_eyePosition;\n" +
            "}\n");
        std::vector<const char *> uVertex;
        uVertex.push_back("u_modelViewMatrix");
        uVertex.push_back("u_projectionMatrix");
        uVertex.push_back("u_normalMatrix");
        std::vector<const char *> aVertex;
        aVertex.push_back("a_position");
        aVertex.push_back("a_normal");
        aVertex.push_back("a_texCoord0");
        GLTFWriter::Shader *vertexShader = GLTFWriter::Shader::Create(gltf, vsText.c_str(), (unsigned int)aVertex.size(), &aVertex[0], (unsigned int)uVertex.size(), &uVertex[0]);

        // FRAGMENT SHADER
        std::string fsText(std::string("precision highp float;\n") +
            "uniform vec3 u_light0Position;\n" +
            "uniform vec3 u_light1Ambient;\n" +
            "uniform sampler2D u_texture0;\n" +
            "varying vec3 v_eyePosition;\n" +
            "varying vec3 v_normal;\n" +
            "varying vec2 v_texCoord0;\n" +
            "void main() {\n" +
            "vec4 l_color = vec4(1.0, 1.0, 1.0, 1.0);\n" +
            "vec3 l_normal = normalize(v_normal);\n" +
            "vec4 l_texelColor = texture2D(u_texture0, v_texCoord0);\n" +
            "l_color *= l_texelColor;\n" +
            "vec3 l_frontAmbient = u_light1Ambient * l_color.rgb;\n" +
            "vec3 l_frontDiffuse = vec3(0.0, 0.0, 0.0);\n" +
            "vec3 l_frontSpecular = vec3(0.0, 0.0, 0.0);\n" +
            "vec3 l_VP = normalize(u_light0Position - v_eyePosition);\n" +
            "float l_nDotVP = dot(l_normal, l_VP);\n" +
            "if (!gl_FrontFacing)\n" + // two sided lighting
            "l_nDotVP = -l_nDotVP;\n" +
            "if (l_nDotVP > 0.0) {\n" + // front faced
            "l_frontDiffuse += l_nDotVP * l_color.rgb;\n" +
            "vec3 l_halfVector = normalize(l_VP + vec3(0.0, 0.0, 1.0));\n" + // eye is always looking down Z axis
            "float l_nDotHV = dot(l_normal, l_halfVector);\n" +
            "if (!gl_FrontFacing)\n" + // two sided lighting
            "l_nDotHV = -l_nDotHV;\n"
            "if (l_nDotHV > 0.0)\n" + // specular
            "l_frontSpecular += pow(l_nDotHV, 100.0) * vec3(1.0, 1.0, 1.0);\n" +
            "}\n" +  // front faced
            "l_color = vec4(l_frontAmbient + l_frontDiffuse + l_frontSpecular, l_color.a);\n" +
            "l_color = clamp(l_color, 0.0, 1.0);\n" +
            "gl_FragColor = l_color;\n" +
            "}\n");
        std::vector<const char *> uFragment;
        uFragment.push_back("u_light0Position");
        uFragment.push_back("u_light1Ambient");
        uFragment.push_back("u_texture0");
        GLTFWriter::Shader *fragmentShader = GLTFWriter::Shader::Create(gltf, fsText.c_str(), 0, 0, (unsigned int)uFragment.size(), &uFragment[0]);

        // PROGRAM
        GLTFWriter::Program *program = GLTFWriter::Program::Create(gltf, vertexShader, fragmentShader);

        // TECHNIQUE
        GLTFWriter::Technique *technique = GLTFWriter::Technique::Create(gltf, program);
        if (!technique ||
            // TECHNIQUE PARAMETERS
            !technique->AppendParameter(GLTFWriter::Parameter::Create(gltf, "u_light0Position", "light0Position", GLTFWriter::Parameter::PT_FLOAT_VEC3, GLTFWriter::Value::Create(gltf, "", 0.0, 0.0, 1.0))) ||
            !technique->AppendParameter(GLTFWriter::Parameter::Create(gltf, "u_light1Ambient", "light1Ambient", GLTFWriter::Parameter::PT_FLOAT_VEC3, GLTFWriter::Value::Create(gltf, "", 0.0, 0.0, 0.0))) ||
            !technique->AppendParameter(GLTFWriter::Parameter::CreateModelViewMatrix(gltf, "u_modelViewMatrix")) ||
            !technique->AppendParameter(GLTFWriter::Parameter::CreateProjectionMatrix(gltf, "u_projectionMatrix")) ||
            !technique->AppendParameter(GLTFWriter::Parameter::CreateNormalMatrix(gltf, "u_normalMatrix")) ||
            !technique->AppendParameter(GLTFWriter::Parameter::Create(gltf, "u_texture0", "texture0", GLTFWriter::Parameter::PT_SAMPLER_2D)) ||
            !technique->AppendParameter(GLTFWriter::Parameter::Create(gltf, "a_position", "POSITION", GLTFWriter::Parameter::PT_FLOAT_VEC3)) ||
            !technique->AppendParameter(GLTFWriter::Parameter::Create(gltf, "a_normal", "NORMAL", GLTFWriter::Parameter::PT_FLOAT_VEC3)) ||
            !technique->AppendParameter(GLTFWriter::Parameter::Create(gltf, "a_texCoord0", "TEXCOORD0", GLTFWriter::Parameter::PT_FLOAT_VEC2)) ||
            // TECHNIQUE STATES
            !technique->AppendState(GLTFWriter::State::Create(gltf, GLTFWriter::State::ST_BLENDENABLE, 1)) ||
            !technique->AppendState(GLTFWriter::State::Create(gltf, GLTFWriter::State::ST_DEPTHTESTENABLE, 1))) {
            GLTFWriter::GLTF::Destroy(gltf);
            throw std::runtime_error("Can't create technique");
        }

        // MATERIAL
        GLTFWriter::Material *material = GLTFWriter::Material::Create(gltf, technique);
        if (!material ||
            // MATERIAL UNIFORM VALUES
            !material->AppendValue(GLTFWriter::Value::Create(gltf, "light0Position", 100.0, 100.0, 100.0)) ||
            !material->AppendValue(GLTFWriter::Value::Create(gltf, "light1Ambient", 0.3, 0.3, 0.3)) ||
            !material->AppendValue(GLTFWriter::Value::Create(gltf, "texture0", texture->GetID())) ||
            // this is a solid object, that we want to have an interior color so when it is clipped we see the solid interior color
            !material->AppendValue(GLTFWriter::Value::Create(gltf, "solidColor", 0.6, 0.4, 0.2, 1.0))) {
            GLTFWriter::GLTF::Destroy(gltf);
            throw std::runtime_error("Can't create material");
        }

        // POSITION ATTRIBUTE
        const unsigned int numVertices = (unsigned int)vertices.size() / 3;
        GLTFWriter::Attribute *vertex = GLTFWriter::Attribute::Create(gltf, "POSITION", GLTFWriter::Attribute::AT_FLOAT_VEC3, numVertices, &vertices[0]);

        // INDICES
        GLTFWriter::Index *index = GLTFWriter::Index::Create(gltf, (unsigned int)triangles.size(), &triangles[0]);

        // TEXCOORD ATTRIBUTE
        GLTFWriter::Attribute *texCoord = GLTFWriter::Attribute::Create(gltf, "TEXCOORD0", GLTFWriter::Attribute::AT_FLOAT_VEC2, numVertices, &texCoords[0]);

        // NORMAL ATTRIBUTE
        GLTFWriter::Attribute *normal = GLTFWriter::Attribute::Create(gltf, "NORMAL", GLTFWriter::Attribute::AT_FLOAT_VEC3, numVertices, &normals[0]);

        // PRIMITIVE
        GLTFWriter::Primitive *primitive = GLTFWriter::Primitive::Create(gltf, GLTFWriter::Primitive::PT_TRIANGLES, material, index);
        if (!primitive ||
            !primitive->AppendAttribute(vertex) ||
            !primitive->AppendAttribute(normal) ||
            !primitive->AppendAttribute(texCoord) ||
            !mesh->AppendPrimitive(primitive)) {
            GLTFWriter::GLTF::Destroy(gltf);
            throw std::runtime_error("Can't create primitive");
        }

        animation->AppendChannel(sampler, node, "matrix");
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