# Example Test002.cpp undefined

<a id="_test002_8cpp-example"></a>

/// <script src='./ansys261/nexus/viewer-loader.js'></script>
/// <ansys-adr-viewer src='TestLightedTextured.avz' aspect_ratio=1.777></ansys-adr-viewer>
///





Textured sphere with custom shaders and legends.





This example creates a banded texture with 5 bands of color, and uses this texture to color a spherical object and to color several legends.





No camera is created or added to the scene. This causes the ANSYSViewer to use the min and max values of the POSITION attribute to create a viewing transformation that encompasses the entire scene. The min and max values are not provided for the POSITION attribute, using the SetMinMax method, so the range of the POSITION is automatically calculated by the GLTFWriter API.





The texture coordinates for the sphere range from the minimum Z value, -0.5, to the maximum Z value, 0.5. This range is used for the legends that are created with the identical texture as the sphere. The legends then correctly show the colors on the sphere, and agree with the tooltip.





This example uses a non-default or custom shader. This shows the steps involved to connect the material to the technique and to the shader program.





This example also shows the usage of the Repack class. This is how a single large mesh with unsigned integer indices and be converted into multiple sub-meshes with unsigned short indices. 
```
/*
 * COPYRIGHT ANSYS, ALL RIGHTS RESERVED
 *
 * @author Glenn Wettlaufer
 * @version $Revision$4
 * @date $Date$
 * $Id$
 */
#include <vector>
#include <cmath>
#include <sstream>
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

// Lighted sphere with custom shaders
TESTFUNC(CustomShaders)
{
    GLTFWriter::GLTF *gltf = GLTFWriter::GLTF::Create("MyApp", "1.0", functionName.c_str(), type);
    if (!gltf)
        throw std::runtime_error("Can't create GLTF");

    float mn = -0.5; // have to change shader if these values change
    float mx = 0.5;
    float range = mx - mn;

    // TEXTURE
    std::vector<unsigned char> colors;
    colors.push_back(0); colors.push_back(0); colors.push_back(255); // blue
    colors.push_back(0); colors.push_back(255); colors.push_back(255); // cyan
    colors.push_back(0); colors.push_back(255); colors.push_back(0); // green
    colors.push_back(255); colors.push_back(255); colors.push_back(0); // yellow
    colors.push_back(255); colors.push_back(0); colors.push_back(0); // red
    GLTFWriter::Texture *rainbowGradientTexture = GLTFWriter::Texture::Create(gltf, GLTFWriter::Texture::TF_RGB, (unsigned int)colors.size() / 3, &colors[0], false);

    // SCENE
    GLTFWriter::Scene *scene = GLTFWriter::Scene::Create(gltf, "Testscene", "m", 1.0F, GLTFWriter::Scene::BT_TB, 0.42F, 0.55F, 0.871F, 1, 1, 1);
    if (!scene) {
        GLTFWriter::GLTF::Destroy(gltf);
        throw std::runtime_error("Can't create scene");
    }

    // generate vertices, normals, and texture coordinates for a ball
    std::vector<float> vertices;
    std::vector<unsigned int> lines;
    std::vector<unsigned int> triangles;
    GLTFWriter::Test::MakeSphere(0, 0, mn + range / 2.0F, range / 2.0F, 64, vertices, lines, triangles);
    const unsigned int numVertices = (unsigned int)vertices.size() / 3;
    const unsigned int numLines = (unsigned int)lines.size() / 2;
    const unsigned int numTriangles = (unsigned int)triangles.size() / 3;
    std::vector<float> vertexNormals(3 * numVertices);
    GLTFWriter::Utils::ComputeVertexNormals3(numVertices, &vertices[0], numTriangles, 3, &triangles[0], &vertexNormals[0]);
    std::vector<float> textureCoords(numVertices);
    for (unsigned int i = 0; i < numVertices; ++i)
        textureCoords[i] = vertices[3 * i + 2]; // coordinates go from mn to mx

    // NO CAMERA

    // NO LIGHTS - they are done in custom shader

    // NODE
    {
        // BUFFER - combine attributes into a single buffer
        GLTFWriter::Buffer *buffer = GLTFWriter::Buffer::Create(gltf);

        GLTFWriter::Node *node = GLTFWriter::Node::CreateMesh(gltf, "3D Ball");
        if (!node || !scene->AppendMesh(node)) {
            GLTFWriter::GLTF::Destroy(gltf);
            throw std::runtime_error("Can't create mesh node");
        }

        // MESH NODE
        GLTFWriter::Node *facesNode = GLTFWriter::Node::CreateMesh(gltf, "Faces");
        if (!facesNode || !node->AppendChild(facesNode)) {
            GLTFWriter::GLTF::Destroy(gltf);
            throw std::runtime_error("Can't create mesh");
        }

        // MESH
        GLTFWriter::Mesh *mesh = GLTFWriter::Mesh::Create(gltf);
        if (!mesh || !facesNode->AppendMesh(mesh)) {
            GLTFWriter::GLTF::Destroy(gltf);
            throw std::runtime_error("Can't create mesh");
        }

        // VERTEX SHADER
        std::ostringstream vsText;
        vsText.precision(6);
        vsText << std::showpoint;
        vsText << "precision highp float;\n";
        vsText << "uniform mat4 u_projectionMatrix;\n";
        vsText << "uniform mat4 u_modelViewMatrix;\n";
        vsText << "attribute vec3 a_position;\n";
        vsText << "uniform mat3 u_normalMatrix;\n";
        vsText << "attribute vec3 a_normal;\n";
        vsText << "varying vec3 v_eyePosition;\n";
        vsText << "varying vec3 v_normal;\n";
        vsText << "attribute float a_texCoord0;\n";
        vsText << "varying float v_texCoord0;\n";
        vsText << "void main() {\n";
        vsText << "vec4 l_position = vec4(a_position, 1.0);\n";
        vsText << "vec4 l_eyePosition = u_modelViewMatrix * l_position;\n";
        vsText << "v_eyePosition = l_eyePosition.xyz / l_eyePosition.w;\n";
        vsText << "v_normal = u_normalMatrix * a_normal;\n";
        vsText << "v_texCoord0 = (a_texCoord0 - " << mn << ") / " << range << ";\n";
        vsText << "v_texCoord0 = clamp(v_texCoord0, 0.0, 1.0);\n";
        vsText << "gl_Position = u_projectionMatrix * l_eyePosition;\n";
        vsText << "}\n";
        std::vector<const char *> uVertex;
        uVertex.push_back("u_modelViewMatrix");
        uVertex.push_back("u_projectionMatrix");
        uVertex.push_back("u_normalMatrix");
        std::vector<const char *> aVertex;
        aVertex.push_back("a_position");
        aVertex.push_back("a_normal");
        aVertex.push_back("a_texCoord0");
        GLTFWriter::Shader *vertexShader = GLTFWriter::Shader::Create(gltf, vsText.str().c_str(), (unsigned int)aVertex.size(), &aVertex[0], (unsigned int)uVertex.size(), &uVertex[0]);

        // FRAGMENT SHADER
        std::string fsText(std::string("precision highp float;\n") +
                                        "uniform vec4 u_diffuse;\n" +
                                        "uniform vec3 u_light0Position;\n" +
                                        "uniform vec3 u_light1Ambient;\n" +
                                        "uniform sampler2D u_texture0;\n" +
                                        "varying vec3 v_eyePosition;\n" +
                                        "varying vec3 v_normal;\n" +
                                        "varying float v_texCoord0;\n" +
                                        "void main() {\n" +
                                        "vec4 l_color = u_diffuse;\n" +
                                        "vec3 l_normal = normalize(v_normal);\n" +
                                        "vec2 l_texCoord = vec2(v_texCoord0, 0);\n" +
                                        "vec4 l_texelColor = texture2D(u_texture0, l_texCoord);\n" +
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
        uFragment.push_back("u_diffuse");
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
            !technique->AppendParameter(GLTFWriter::Parameter::Create(gltf, "u_diffuse", "diffuse", GLTFWriter::Parameter::PT_FLOAT_VEC4, GLTFWriter::Value::Create(gltf, "", 1.0, 1.0, 1.0, 1.0))) ||
            !technique->AppendParameter(GLTFWriter::Parameter::Create(gltf, "u_light0Position", "light0Position", GLTFWriter::Parameter::PT_FLOAT_VEC3, GLTFWriter::Value::Create(gltf, "", 0.0, 0.0, 1.0))) ||
            !technique->AppendParameter(GLTFWriter::Parameter::Create(gltf, "u_light1Ambient", "light1Ambient", GLTFWriter::Parameter::PT_FLOAT_VEC3, GLTFWriter::Value::Create(gltf, "", 0.0, 0.0, 0.0))) ||
            !technique->AppendParameter(GLTFWriter::Parameter::CreateModelViewMatrix(gltf, "u_modelViewMatrix")) ||
            !technique->AppendParameter(GLTFWriter::Parameter::CreateProjectionMatrix(gltf, "u_projectionMatrix")) ||
            !technique->AppendParameter(GLTFWriter::Parameter::CreateNormalMatrix(gltf, "u_normalMatrix")) ||
            !technique->AppendParameter(GLTFWriter::Parameter::Create(gltf, "u_texture0", "texture0", GLTFWriter::Parameter::PT_SAMPLER_2D)) ||
            !technique->AppendParameter(GLTFWriter::Parameter::Create(gltf, "a_position", "POSITION", GLTFWriter::Parameter::PT_FLOAT_VEC3)) ||
            !technique->AppendParameter(GLTFWriter::Parameter::Create(gltf, "a_normal", "NORMAL", GLTFWriter::Parameter::PT_FLOAT_VEC3)) ||
            !technique->AppendParameter(GLTFWriter::Parameter::Create(gltf, "a_texCoord0", "TEXCOORD0", GLTFWriter::Parameter::PT_FLOAT)) ||
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
            !material->AppendValue(GLTFWriter::Value::Create(gltf, "diffuse", 1.0, 1.0, 1.0, 1.0)) ||
            !material->AppendValue(GLTFWriter::Value::Create(gltf, "light0Position", 100.0, 100.0, 100.0)) ||
            !material->AppendValue(GLTFWriter::Value::Create(gltf, "light1Ambient", 0.3, 0.3, 0.3)) ||
            !material->AppendValue(GLTFWriter::Value::Create(gltf, "texture0", rainbowGradientTexture->GetID())) ||
            // this is a solid object, that we want to have an interior color so when it is clipped we see the solid interior color
            !material->AppendValue(GLTFWriter::Value::Create(gltf, "solidColor", 1.0, 0.0, 1.0, 1.0))) {
            GLTFWriter::GLTF::Destroy(gltf);
            throw std::runtime_error("Can't create material");
        }

        // repack unsigned int indices into multiple sets of unsigned short indices
        GLTFWriter::Utils::Repack *repack = GLTFWriter::Utils::Repack::Create(numTriangles, 3, &triangles[0]);
        if (!repack) {
            GLTFWriter::GLTF::Destroy(gltf);
            throw std::runtime_error("Can't create repack");
        }
        for (unsigned int i = 0; i < repack->NumPacks(); ++i) {
            const float *packedData;
            unsigned int numAttributes = repack->NumAttributes(i);

            // POSITION ATTRIBUTE
            packedData = repack->ConstructRepackAttribute(&triangles[0], 3, &vertices[0], i);
            GLTFWriter::Attribute *vertex = GLTFWriter::Attribute::Create(gltf, "POSITION", GLTFWriter::Attribute::AT_FLOAT_VEC3, numAttributes, packedData, buffer);

            // TEXCOORD ATTRIBUTE
            packedData = repack->ConstructRepackAttribute(&triangles[0], 1, &textureCoords[0], i);
            GLTFWriter::Attribute *texture = GLTFWriter::Attribute::Create(gltf, "TEXCOORD0", GLTFWriter::Attribute::AT_FLOAT, numAttributes, packedData, buffer);

            // NORMAL ATTRIBUTE
            packedData = repack->ConstructRepackAttribute(&triangles[0], 3, &vertexNormals[0], i);
            GLTFWriter::Attribute *normal = GLTFWriter::Attribute::Create(gltf, "NORMAL", GLTFWriter::Attribute::AT_FLOAT_VEC3, numAttributes, packedData, buffer);

            // INDICES
            unsigned int numIndices = 3U * repack->NumElements(i);
            const unsigned short *packedIndex = repack->ConstructRepackIndex(&triangles[0], i);
            GLTFWriter::Index *index = GLTFWriter::Index::Create(gltf, numIndices, packedIndex, buffer);
            if (!index) {
                GLTFWriter::Utils::Repack::Destroy(repack);
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create index");
            }

            // PRIMITIVE
            GLTFWriter::Primitive *primitive = GLTFWriter::Primitive::Create(gltf, GLTFWriter::Primitive::PT_TRIANGLES, material, index);
            if (!primitive ||
                !primitive->AppendAttribute(vertex) ||
                !primitive->AppendAttribute(normal) ||
                !primitive->AppendAttribute(texture) ||
                !mesh->AppendPrimitive(primitive)) {
                GLTFWriter::Utils::Repack::Destroy(repack);
                GLTFWriter::GLTF::Destroy(gltf);
                throw std::runtime_error("Can't create primitive");
            }
        }

        GLTFWriter::Utils::Repack::Destroy(repack);
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