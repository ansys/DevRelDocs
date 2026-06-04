# Example 05 - Mathematica

```mathematica
(* Content-type: application/vnd.wolfram.mathematica *)

(*** Wolfram Notebook File ***)
(* http://www.wolfram.com/nb *)

(* CreatedBy='Mathematica 11.1' *)

(*CacheID: 234*)
(* Internal cache information:
NotebookFileLineBreakTest
NotebookFileLineBreakTest
NotebookDataPosition[       158,          7]
NotebookDataLength[    300863,       5556]
NotebookOptionsPosition[    283473,       5185]
NotebookOutlinePosition[    283848,       5201]
CellTagsIndexPosition[    283805,       5198]
WindowFrame->Normal*)

(* Beginning of Notebook Content *)
Notebook[{

Cell[CellGroupData[{
Cell["Mathematica Standalone Example 05", "Title",
 CellChangeTimes->{{3.839688029061371*^9, 3.839688029333041*^9}, {
  3.839688063060649*^9, 3.839688078509552*^9}, {3.8396914797351103`*^9, 
  3.839691482944421*^9}, {3.839691627466945*^9, 3.8396916276038036`*^9}, {
  3.8402988574885764`*^9, 
  3.840298857816474*^9}},ExpressionUUID->"82d02cdb-c8e6-455a-98e7-\
fde95b761af6"],

Cell[CellGroupData[{

Cell["Read ZRD File", "Chapter",
 CellChangeTimes->{{3.8396881035725594`*^9, 3.839688112297448*^9}, {
  3.8396914862400026`*^9, 3.8396914901911945`*^9}, {3.8396916311269445`*^9, 
  3.8396916332778873`*^9}, {3.8402988734405174`*^9, 
  3.840298875327737*^9}},ExpressionUUID->"cae790c9-403b-439b-872f-\
400a3c7b2a91"],

Cell["\<\
A sample file (..\\Non-sequential) is opened, a ray trace is performed while \
saving the ZRD file, the ZRD file is opened and all ray segment data is read.\
\>", "Text",
 CellChangeTimes->{{3.8396881291975994`*^9, 3.8396881300308065`*^9}, {
   3.839688228998783*^9, 3.839688243597742*^9}, 3.839691532616377*^9, 
   3.839691644607731*^9, 
   3.840298870839403*^9},ExpressionUUID->"aa1caaa5-76bb-4421-9c62-\
6b54072f5b5e"],

Cell[CellGroupData[{

Cell["1. Set up the interface", "Section",
 CellChangeTimes->{{3.8396882595581264`*^9, 
  3.8396882638859687`*^9}},ExpressionUUID->"e1950f23-fb0d-4198-b712-\
f8af8e5754a8"],

Cell[CellGroupData[{

Cell["Install Mathematica\[CloseCurlyQuote]s NETLink context", "Subsection",
 CellChangeTimes->{{3.8396882777989693`*^9, 
  3.8396882855614657`*^9}},ExpressionUUID->"a8008a9a-dfb3-4f8d-80a9-\
4fb7e1e763f9"],

Cell[BoxData[
 RowBox[{"Needs", "[", "\"\<NETLink`\>\"", "]"}]], "Input",
 CellFrame->True,
 CellMargins->{{30, 0}, {15, 0}},
 CellChangeTimes->{{3.839688289624405*^9, 3.8396883024261284`*^9}},
 Background->GrayLevel[
  0.85],ExpressionUUID->"e3e2ff02-c5c9-429f-8e8a-2d34e73aa5d8"]
}, Open  ]],

Cell[CellGroupData[{

Cell["\<\
Set a default directory and define the path to the ZOS-API libraries\
\>", "Subsection",
 CellChangeTimes->{{3.8396883515947313`*^9, 
  3.839688361481258*^9}},ExpressionUUID->"edd2739d-eec9-42a2-a6d7-\
14261ad04150"],

Cell[BoxData[{
 RowBox[{
  RowBox[{"LoadNETType", "[", "\"\<Microsoft.Win32.Registry\>\"", "]"}], 
  ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{"zemaxData", " ", "=", " ", 
   RowBox[{"Registry`GetValue", "[", 
    RowBox[{
    "\"\<HKEY_CURRENT_USER\\\\Software\\\\Zemax\>\"", ",", " ", 
     "\"\<ZemaxRoot\>\"", ",", " ", 
     RowBox[{"-", "1"}]}], "]"}]}], ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{"samplesDir", "=", 
   RowBox[{"FileNameJoin", "[", 
    RowBox[{"{", 
     RowBox[{"zemaxData", ",", " ", "\"\<\\\\Samples\>\""}], "}"}], "]"}]}], 
  ";"}]}], "Input",
 CellFrame->True,
 CellMargins->{{30, 0}, {15, 0}},
 CellChangeTimes->{{3.839688289624405*^9, 3.8396883024261284`*^9}, 
   3.8396886173866596`*^9},
 Background->GrayLevel[
  0.85],ExpressionUUID->"6ed5eabf-e32e-4a78-9aa6-cba43edac3a7"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Initialize the connection", "Subsection",
 CellChangeTimes->{{3.839688395302744*^9, 
  3.8396883991473007`*^9}},ExpressionUUID->"eff99d4b-4e4f-4c0d-87f3-\
ddc8f337caa4"],

Cell[BoxData[{
 RowBox[{
  RowBox[{"netHelper", " ", "=", " ", 
   RowBox[{"FileNameJoin", "[", 
    RowBox[{"{", 
     RowBox[{
     "zemaxData", ",", " ", 
      "\"\<\\\\ZOS-API\\\\Libraries\\\\ZOSAPI_NetHelper.dll\>\""}], "}"}], 
    "]"}]}], ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{
   RowBox[{"LoadNETAssembly", "[", "netHelper", "]"}], ";"}], 
  "\[IndentingNewLine]"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{
  "LoadNETType", "[", "\"\<ZOSAPI_NetHelper.ZOSAPI_Initializer\>\"", "]"}], 
  ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{
   RowBox[{"success", " ", "=", " ", 
    RowBox[{"ZOSAPIUInitializer`Initialize", "[", "]"}]}], ";"}], 
  "\[IndentingNewLine]", 
  RowBox[{"(*", 
   RowBox[{
    RowBox[{"Note", " ", "--"}], " ", "uncomment", " ", "the", " ", 
    "following", " ", "line", " ", "to", " ", "use", " ", "a", " ", "custom", 
    " ", "initialization", " ", "path"}], "*)"}]}], "\n", 
 RowBox[{
  RowBox[{"(*", 
   RowBox[{
    RowBox[{"success", " ", "=", " ", 
     RowBox[{
     "ZOSAPIUInitializer`Initialize", "[", 
      "\"\<C:\\\\Program Files\\\\OpticStudio\>\"", "]"}]}], ";"}], 
   "*)"}]}]}], "Input",
 CellFrame->True,
 CellMargins->{{30, 0}, {15, 0}},
 CellChangeTimes->CompressedData["
1:eJwdzlkowwEAx/FNjkc5XiTHyrQHWv5W7mPI/isNf4Y8TMyRTITQHDmSuaXF
CLmfPIwHuYqtSSZXItKMeKD+I+SI/uX/+z98+7x+BUVVVIkTj8fzZ4POklfJ
oDstTffQxMMYFbk/501L7X5KK6z+aSi4Zn0ibZzhanFYQxAtrcvdS4T8neEU
OLYQI4M7F8898NBN2Qejhm7eYL1G9gkV/pZfqBOMeDeyZtTeCWH+5UowTDOO
jMIQp+NJaPG0LED+y9YSPA1q3oDZJv4mvLW7XEBdU4QNTrsW3kNf5fIjHDPE
0pAQTDlg+dniO4zMa/6C3zelPlpWayETAFcPHMEw1ZAugsWmjjCo7PchoIhg
EqC50pgMeUw7CVt7JxSQ6K7Mgx8nKjUMFK6WteHz8YhzoPOhZZZVq/JqhVTS
YBdsjF7nrGkaN0NTzjanXkzoKSEtvdIy8/BdvrYB62d2tyH1lxmaxbpL9sdB
fdS5DGoqdHL4DxfM5Zo=
  "],
 TextAlignment->AlignmentMarker,
 Background->GrayLevel[
  0.85],ExpressionUUID->"388dfa2c-87b4-4452-9c3c-923ddf574d38"],

Cell[CellGroupData[{

Cell[BoxData[
 RowBox[{"If", "[", 
  RowBox[{
   RowBox[{"success", " ", "\[Equal]", " ", "True"}], ",", 
   RowBox[{"{", "\[IndentingNewLine]", 
    RowBox[{
     RowBox[{"found", "=", "\"\<Found OpticStudio at: \>\""}], ";", 
     "\[IndentingNewLine]", 
     RowBox[{"location", "=", 
      RowBox[{"ToString", "[", 
       RowBox[{"ZOSAPIUInitializer`GetZemaxDirectory", "[", "]"}], "]"}]}], 
     ";", "\[IndentingNewLine]", 
     RowBox[{"found", "<>", "location"}]}], "\[IndentingNewLine]", "}"}], ",",
    " ", "\"\<Failed to connect!\>\""}], "]"}]], "Input",
 CellFrame->True,
 CellMargins->{{30, 0}, {15, 0}},
 CellChangeTimes->{{3.766252021260979*^9, 3.76625203846459*^9}, {
   3.7689155751212254`*^9, 3.7689156132860904`*^9}, {3.7690273461510496`*^9, 
   3.7690273494975615`*^9}, 3.769032225376509*^9, {3.7776643069851527`*^9, 
   3.7776644478785586`*^9}, {3.777664478956308*^9, 3.7776645110639772`*^9}, {
   3.7776645846413746`*^9, 3.7776645987933607`*^9}, {3.777664639080394*^9, 
   3.77766475072039*^9}, {3.777664890569967*^9, 3.777664899544757*^9}},
 TextAlignment->AlignmentMarker,
 Background->GrayLevel[
  0.85],ExpressionUUID->"c7eef740-1dcd-4764-887b-8f389140dde7"],

Cell[BoxData[
 RowBox[{"{", "\<\"Found OpticStudio at: c:\\\\program files\\\\zemax \
opticstudio 21.3.1\"\>", "}"}]], "Output",
 CellChangeTimes->{
  3.843920769793024*^9, 3.84392085119652*^9, 3.8439212906899757`*^9, 
   3.84392137334933*^9, {3.8439217596654644`*^9, 3.84392178265172*^9}, 
   3.8457342535068965`*^9},ExpressionUUID->"d7242e20-46a8-4b11-bf60-\
54318e74c5f3"]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell["Load assemblies", "Subsection",
 CellChangeTimes->{{3.8396884196575794`*^9, 
  3.839688422125188*^9}},ExpressionUUID->"1164d52a-0292-406d-bf2b-\
2f231976c0a6"],

Cell[BoxData[{
 RowBox[{
  RowBox[{"zosapi", "=", 
   RowBox[{"LoadNETAssembly", "[", 
    RowBox[{"FileNameJoin", "[", 
     RowBox[{"{", 
      RowBox[{"location", ",", " ", "\"\<\\\\ZOSAPI.dll\>\""}], "}"}], "]"}], 
    "]"}]}], ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{"interfaces", "=", 
   RowBox[{"LoadNETAssembly", "[", 
    RowBox[{"FileNameJoin", "[", 
     RowBox[{"{", 
      RowBox[{"location", ",", " ", "\"\<\\\\ZOSAPI_Interfaces.dll\>\""}], 
      "}"}], "]"}], "]"}]}], ";"}]}], "Input",
 CellFrame->True,
 CellMargins->{{30, 0}, {15, 0}},
 CellChangeTimes->{{3.766252021260979*^9, 3.76625203846459*^9}, {
   3.7689155751212254`*^9, 3.7689156132860904`*^9}, {3.7690273461510496`*^9, 
   3.7690273494975615`*^9}, 3.769032225376509*^9, {3.7776647722745123`*^9, 
   3.777664779816164*^9}, {3.7776648220254173`*^9, 3.7776648750010605`*^9}, {
   3.777664906297093*^9, 3.77766495188325*^9}, {3.7776650686907253`*^9, 
   3.777665069416005*^9}, {3.7776652098156643`*^9, 3.777665266344265*^9}, {
   3.7776655899029236`*^9, 3.7776655942636356`*^9}},
 TextAlignment->AlignmentMarker,
 Background->GrayLevel[
  0.85],ExpressionUUID->"1e4ea968-62d2-4fc7-adf0-c4d6e19c9f23"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Open connection and create the application", "Subsection",
 CellChangeTimes->{{3.839688440804923*^9, 
  3.839688449586424*^9}},ExpressionUUID->"66ef9a70-ae2a-4b30-8612-\
21d270c9c062"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{
   "Open", " ", "connection", " ", "and", " ", "create", " ", "an", " ", 
    "application"}], "*)"}], "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{
    RowBox[{"theConnection", "=", 
     RowBox[{"NETNew", "[", "\"\<ZOSAPI.ZOSAPI_Connection\>\"", "]"}]}], 
    ";"}], "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"theApplication", "=", 
     RowBox[{"theConnection", "@", 
      RowBox[{"CreateNewApplication", "[", "]"}]}]}], ";"}]}]}]], "Input",
 CellFrame->True,
 CellMargins->{{30, 0}, {15, 0}},
 CellChangeTimes->{{3.7662520483944936`*^9, 3.7662520734968863`*^9}, {
  3.768915627725685*^9, 3.768915643519889*^9}, {3.7772185086530094`*^9, 
  3.777218518629236*^9}, {3.7772294462356577`*^9, 3.777229452653195*^9}, {
  3.77730155688553*^9, 3.7773015575657034`*^9}, {3.7773020419798145`*^9, 
  3.777302042756255*^9}, {3.777664956463653*^9, 3.7776649571358194`*^9}, {
  3.777665070624301*^9, 3.777665071288994*^9}},
 TextAlignment->AlignmentMarker,
 Background->GrayLevel[
  0.85],ExpressionUUID->"cd6c69ec-8c19-480f-bb7b-63d6749a90cc"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Perform final checks regarding the connection", "Subsection",
 CellChangeTimes->{{3.839688440804923*^9, 3.839688449586424*^9}, {
  3.843920456492786*^9, 
  3.84392046597336*^9}},ExpressionUUID->"406edd0f-0136-46f0-941c-\
08eed4580c45"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{
   "Check", " ", "that", " ", "a", " ", "connection", " ", "was", " ", 
    "established"}], "*)"}], "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{"If", "[", 
    RowBox[{
     RowBox[{
      RowBox[{"NETObjectQ", "[", "theApplication", "]"}], " ", "\[Equal]", 
      " ", "False"}], ",", " ", 
     "\"\<An unknown connection error occurred!\>\"", ",", " ", 
     RowBox[{"\"\<\>\"", ";"}]}], "]"}], "\[IndentingNewLine]", 
   RowBox[{"(*", 
    RowBox[{"Check", " ", "license", " ", "status"}], "*)"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"If", "[", 
     RowBox[{
      RowBox[{
       RowBox[{"theApplication", "@", "IsValidLicenseForAPI"}], "\[Equal]", 
       " ", "False"}], ",", " ", 
      RowBox[{"{", "\[IndentingNewLine]", 
       RowBox[{
        RowBox[{"theApplication", "@", 
         RowBox[{"CloseApplication", "[", "]"}]}], ";", 
        "\[IndentingNewLine]", "\"\<License check failed!\>\""}], "}"}], ",", 
      " ", "\"\<\>\""}], "]"}], ";"}]}]}]], "Input",
 CellFrame->True,
 CellMargins->{{30, 0}, {15, 0}},
 CellChangeTimes->{{3.7662520483944936`*^9, 3.7662520734968863`*^9}, {
  3.768915627725685*^9, 3.768915643519889*^9}, {3.7772185086530094`*^9, 
  3.777218518629236*^9}, {3.7772294462356577`*^9, 3.777229452653195*^9}, {
  3.77730155688553*^9, 3.7773015575657034`*^9}, {3.7773020419798145`*^9, 
  3.777302042756255*^9}, {3.777664956463653*^9, 3.7776649571358194`*^9}, {
  3.777665070624301*^9, 3.777665071288994*^9}, {3.843920470808078*^9, 
  3.843920479987147*^9}, {3.843920675890939*^9, 3.8439207507653284`*^9}, {
  3.843920860815098*^9, 3.8439208866187506`*^9}, {3.843920930850752*^9, 
  3.8439209876787605`*^9}, {3.84392132838673*^9, 3.8439213378825197`*^9}, {
  3.8439213956365037`*^9, 3.8439214804519625`*^9}, {3.8439215543612347`*^9, 
  3.8439215970057573`*^9}, {3.843921738136207*^9, 3.843921739947053*^9}},
 TextAlignment->AlignmentMarker,
 Background->GrayLevel[
  0.85],ExpressionUUID->"c3967e90-2df2-4ec1-bda4-69cb575fd205"]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell["2. Open a sample file and run a ray trace", "Section",
 CellChangeTimes->{{3.8396917040564833`*^9, 
  3.8396917243783107`*^9}},ExpressionUUID->"4598f291-8e9f-47ee-b63b-\
cd27df0ec6ab"],

Cell[CellGroupData[{

Cell["Set up the primary optical system and open the file", "Subsection",
 CellChangeTimes->{{3.8396918205487456`*^9, 3.8396918253079386`*^9}, {
  3.840299244786928*^9, 
  3.840299246554096*^9}},ExpressionUUID->"68309f63-3ae0-4cde-a310-\
cf6ca76329d8"],

Cell[BoxData[
 RowBox[{
  RowBox[{"theSystem", " ", "=", " ", 
   RowBox[{"theApplication", "@", 
    RowBox[{"PrimarySystem", "[", "]"}]}]}], ";"}]], "Input",
 CellChangeTimes->{{3.839691829153617*^9, 
  3.839691865650504*^9}},ExpressionUUID->"b413be63-52f3-484a-9f03-\
15b56f5501cd"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{
   "Open", " ", "a", " ", "sample", " ", "file", " ", "from", " ", "the", " ",
     "Zemax", " ", "samples", " ", "directory"}], "*)"}], 
  "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{
    RowBox[{"testFile", " ", "=", " ", 
     RowBox[{"FileNameJoin", "[", 
      RowBox[{"{", 
       RowBox[{
       "samplesDir", ",", 
        "\"\<Non-sequential\\\\Miscellaneous\\\\Digital_projector_flys_eye_\
homogenizer.zmx\>\""}], "}"}], "]"}]}], ";"}], "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"theSystem", "@", 
     RowBox[{"LoadFile", "[", 
      RowBox[{"testFile", ",", " ", "False"}], "]"}]}], ";"}]}]}]], "Input",
 CellChangeTimes->{{3.8396918698966465`*^9, 
  3.83969197882255*^9}},ExpressionUUID->"5268a20b-6f98-4514-9f18-\
6571163e9fdd"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", " ", 
   RowBox[{
   "Set", " ", "the", " ", "number", " ", "of", " ", "Analysis", " ", "Rays", 
    " ", "to", " ", "10", " ", "for", " ", "our", " ", "source"}], "*)"}], 
  "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{
    RowBox[{
    "LoadNETType", "[", "\"\<ZOSAPI.Editors.NCE.ObjectColumn\>\"", "]"}], 
    ";"}], "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"theSystem", "@", 
      RowBox[{"NCE", "@", 
       RowBox[{
        RowBox[{"GetObjectAt", "[", "1", "]"}], "@", 
        RowBox[{
         RowBox[{"GetObjectCell", "[", "ObjectColumn`Par2", "]"}], "@", 
         "IntegerValue"}]}]}]}], " ", "=", " ", "10"}], ";"}]}]}]], "Input",
 CellChangeTimes->{{3.840299255669051*^9, 3.840299273953961*^9}, {
  3.8402994298614607`*^9, 
  3.8402994885400677`*^9}},ExpressionUUID->"840042ab-acc7-4965-9494-\
14af89981c1b"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Create a ray trace", "Subsection",
 CellChangeTimes->{{3.8396920958341923`*^9, 
  3.839692099347971*^9}},ExpressionUUID->"eead7ec4-71dc-4e4a-bb3d-\
fe04fe6114f3"],

Cell[BoxData[
 RowBox[{
  RowBox[{"nscRayTrace", " ", "=", " ", 
   RowBox[{"theSystem", "@", 
    RowBox[{"Tools", "@", 
     RowBox[{"OpenNSCRayTrace", "[", "]"}]}]}]}], ";"}]], "Input",
 CellChangeTimes->{{3.839692551390864*^9, 
  3.8396925639408307`*^9}},ExpressionUUID->"0a1857cc-19f1-4bc3-9bc3-\
35eef9289714"],

Cell[BoxData[{
 RowBox[{
  RowBox[{
   RowBox[{"nscRayTrace", "@", "SplitNSCRays"}], " ", "=", " ", "True"}], 
  ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{
   RowBox[{"nscRayTrace", "@", "ScatterNSCRays"}], " ", "=", " ", "False"}], 
  ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{
   RowBox[{"nscRayTrace", "@", "UsePolarization"}], " ", "=", " ", "True"}], 
  ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{
   RowBox[{"nscRayTrace", "@", "IgnoreErrors"}], " ", "=", " ", "True"}], 
  ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{
   RowBox[{"nscRayTrace", "@", "SaveRays"}], " ", "=", " ", "True"}], 
  ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{
   RowBox[{"nscRayTrace", "@", "SaveRaysFile"}], " ", "=", " ", 
   "\"\<Digital_projector_flys_eye_homogenizer.ZRD\>\""}], 
  ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{"nscRayTrace", "@", 
   RowBox[{"ClearDetectors", "[", "0", "]"}]}], ";"}]}], "Input",
 CellChangeTimes->{{3.839692567997283*^9, 3.839692631294183*^9}, {
  3.8402996147498684`*^9, 
  3.840299652481776*^9}},ExpressionUUID->"237abce8-b1be-4666-9b38-\
ca68fb11c724"],

Cell[BoxData[{
 RowBox[{
  RowBox[{"runRayTrace", " ", ":=", 
   RowBox[{"nscRayTrace", "@", 
    RowBox[{"RunAndWaitForCompletion", "[", "]"}]}]}], 
  ";"}], "\[IndentingNewLine]", 
 RowBox[{"runRayTrace", ";"}]}], "Input",
 CellChangeTimes->{{3.8396926617955647`*^9, 
  3.8396926840586276`*^9}},ExpressionUUID->"7bb1b1e5-4add-47e5-894b-\
b681ca199c31"],

Cell[BoxData[
 RowBox[{
  RowBox[{"nscRayTrace", "@", 
   RowBox[{"Close", "[", "]"}]}], ";"}]], "Input",
 CellChangeTimes->{{3.8396926918305044`*^9, 
  3.83969275220726*^9}},ExpressionUUID->"0dec5292-9300-409a-96f4-\
1045e79093ee"]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell["3. Open ZRD Reader and read data", "Section",
 CellChangeTimes->{{3.8396927724591455`*^9, 3.839692777846248*^9}, {
  3.8402996930011053`*^9, 
  3.8402996975218945`*^9}},ExpressionUUID->"ac7e960e-07f1-4ab0-936d-\
f54502e557bf"],

Cell[CellGroupData[{

Cell["Open the ZRD Reader and load the file from the ray trace", "Subsection",
 CellChangeTimes->{{3.840299867671586*^9, 
  3.840299877341798*^9}},ExpressionUUID->"50607b94-2451-48ee-afaa-\
c9b00bea3456"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{"Open", " ", "the", " ", "tool"}], "*)"}], "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{"zrdReader", " ", "=", " ", 
    RowBox[{"theSystem", "@", 
     RowBox[{"Tools", "@", 
      RowBox[{"OpenRayDatabaseReader", "[", "]"}]}]}]}], ";"}]}]], "Input",
 CellChangeTimes->{{3.8402998802624207`*^9, 
  3.8402999179356346`*^9}},ExpressionUUID->"3aefb6f5-1029-42a8-9f83-\
a9fb3e83822b"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", " ", 
   RowBox[{"Update", " ", "and", " ", "apply", " ", "the", " ", "settings"}], 
   "*)"}], "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{
    RowBox[{"rayFile", " ", "=", " ", 
     RowBox[{"FileNameJoin", "[", 
      RowBox[{"{", 
       RowBox[{
       "samplesDir", ",", " ", 
        "\"\<\\\\Non-sequential\\\\Miscellaneous\\\\Digital_projector_flys_\
eye_homogenizer.ZRD\>\""}], "}"}], "]"}]}], ";"}], "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"zrdReader", "@", "ZRDFile"}], " ", "=", " ", "rayFile"}], ";"}],
    "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"zrdReader", "@", 
     RowBox[{"RunAndWaitForCompletion", "[", "]"}]}], ";"}]}]}]], "Input",
 CellChangeTimes->{{3.8402999002698507`*^9, 
  3.84029999090699*^9}},ExpressionUUID->"3bfefb66-d139-4038-a771-\
e54d9cfc8b59"],

Cell[CellGroupData[{

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{
   "Check", " ", "to", " ", "make", " ", "sure", " ", "the", " ", "ZRD", " ", 
    "Reader", " ", "ran", " ", "as", " ", "expected"}], "*)"}], 
  "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{
    RowBox[{"If", "[", 
     RowBox[{
      RowBox[{
       RowBox[{"zrdReader", "@", "Succeeded"}], "\[Equal]", "False"}], ",", 
      " ", "\[IndentingNewLine]", 
      RowBox[{"{", 
       RowBox[{
        RowBox[{"Print", "[", "\"\<Raytracing failed!\>\"", "]"}], ";", " ", 
        RowBox[{"Print", "[", 
         RowBox[{"zrdReader", "@", "ErrorMessage"}], "]"}], ";"}], "}"}], ",",
       " ", "\[IndentingNewLine]", 
      RowBox[{"Print", "[", "\"\<Raytracing completed!\>\"", "]"}]}], "]"}], 
    ";"}], "\[IndentingNewLine]"}]}]], "Input",
 CellChangeTimes->{{3.8402999931719728`*^9, 3.8403000487866983`*^9}, {
  3.8403000895305147`*^9, 3.840300127793925*^9}, {3.840300239497059*^9, 
  3.8403004060735893`*^9}, {3.840301147882887*^9, 
  3.840301176986076*^9}},ExpressionUUID->"80a1f7e4-cec6-4055-9c12-\
dd29309842d0"],

Cell[BoxData["\<\"Raytracing completed!\"\>"], "Print",
 CellChangeTimes->{
  3.840564094327428*^9, 3.841500548372837*^9, 3.8415007712207365`*^9, 
   3.8415008604386635`*^9, 3.84150150947902*^9, {3.841501778625486*^9, 
   3.8415017966632576`*^9}, 3.8415018572672005`*^9, 3.841502154019645*^9, 
   3.841502206131068*^9, 3.841502287928094*^9, 3.841502478755309*^9, 
   3.84150256329424*^9, 3.841502631145505*^9, 3.84150268573955*^9, 
   3.8415027403119135`*^9, 3.841502893501275*^9, 3.841502949352047*^9, 
   3.841502994602246*^9, 3.8415030407376676`*^9, {3.8415031188491507`*^9, 
   3.841503139995102*^9}, 3.8415031862102613`*^9, {3.8415032263796043`*^9, 
   3.8415033311455607`*^9}, {3.841503436380859*^9, 3.8415034484426317`*^9}, 
   3.8415035079805593`*^9, {3.8415035819334993`*^9, 3.8415036068370333`*^9}, 
   3.841503699412774*^9, {3.841503748938017*^9, 3.8415037755156107`*^9}, 
   3.841503827403862*^9, {3.8415038665902853`*^9, 3.8415039042365303`*^9}, 
   3.841503939404456*^9, {3.8415041399483414`*^9, 3.841504165331995*^9}, 
   3.8415043359867263`*^9, 3.8415043902995872`*^9, 3.8415044480137916`*^9, 
   3.841504506604978*^9, 3.841504622230582*^9, 3.8457328544854364`*^9, 
   3.8457342594476233`*^9},ExpressionUUID->"669adfbc-5c6a-4d31-a37a-\
e6b413c6c977"]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell["Read the results of the ZRD", "Subsection",
 CellChangeTimes->{{3.8403004368399715`*^9, 
  3.840300441631569*^9}},ExpressionUUID->"de2fd799-78fd-4767-af78-\
31b9abdb26c2"],

Cell[BoxData[
 RowBox[{
  RowBox[{"zrdResults", " ", "=", " ", 
   RowBox[{"zrdReader", "@", 
    RowBox[{"GetResults", "[", "]"}]}]}], ";"}]], "Input",
 CellChangeTimes->{{3.840300449594145*^9, 3.840300461750567*^9}, {
  3.840301346188362*^9, 3.840301372560566*^9}, {3.841502687252462*^9, 
  3.841502689315878*^9}},ExpressionUUID->"137ec083-32d5-4126-9c77-\
c8a8f66955b2"],

Cell[CellGroupData[{

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{
   "Define", " ", "the", " ", "commands", " ", "for", " ", "pulling", " ", 
    "ray", " ", "and", " ", "segment", " ", "data"}], "*)"}], 
  "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{
    RowBox[{"successNextResult", ":=", 
     RowBox[{"zrdResults", "@", 
      RowBox[{"ReadNextResult", "[", 
       RowBox[{
       "rayNumber", ",", " ", "waveIndex", ",", " ", "wavelengthUM", ",", " ",
         "numSegments"}], "]"}]}]}], ";"}], "\[IndentingNewLine]", 
   RowBox[{"segmentData", ":=", " ", 
    RowBox[{"zrdResults", "@", 
     RowBox[{"ReadNextSegmentFull", "[", 
      RowBox[{
      "segmentLevel", ",", "segmentParent", ",", "hitObj", ",", "hitFace", 
       ",", "insideOf", ",", "status", ",", "x", ",", "y", ",", "z", ",", "l",
        ",", "m", ",", "n", ",", "exr", ",", "exi", ",", "eyr", ",", "eyi", 
       ",", "ezr", ",", "ezi", ",", "intensity", ",", "pathLength", ",", 
       "xybin", ",", "lmbin", ",", "xNorm", ",", "yNorm", ",", "zNorm", ",", 
       "index", ",", "startingPhase", ",", "phaseOf", ",", "phaseAt"}], 
      "]"}]}]}], "\[IndentingNewLine]", "\[IndentingNewLine]", 
   RowBox[{"(*", 
    RowBox[{
    "Use", " ", "the", " ", "definitions", " ", "above", " ", "to", " ", 
     "run", " ", "a", " ", "WHILE", " ", 
     RowBox[{"loop", ".", " ", "The"}], " ", "loop", " ", "will", " ", 
     "analyze", " ", "all", " ", "rays", " ", "and", " ", "segments", " ", 
     "as", " ", "long", " ", "as", " ", "data", " ", "is", " ", "available"}],
     "*)"}], "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"While", "[", 
     RowBox[{
      RowBox[{"successNextResult", "\[Equal]", "True"}], ",", 
      RowBox[{"{", "\[IndentingNewLine]", 
       RowBox[{
        RowBox[{
         RowBox[{"Print", "[", 
          RowBox[{"\"\<Success! Ray Number: \>\"", ",", "  ", "rayNumber"}], 
          "]"}], ";", 
         RowBox[{"Print", "[", 
          RowBox[{
          "\"\<\\tWave Index: \>\"", ",", " ", "waveIndex", ",", " ", 
           "\"\<\\t Ray Wavelength: \>\"", ",", " ", "wavelengthUM", ",", 
           " ", "\"\<\\t Number of segments: \>\"", ",", " ", "numSegments"}],
           "]"}], ";", "\[IndentingNewLine]", 
         RowBox[{"(*", 
          RowBox[{
           RowBox[{"Read", " ", "the", " ", "ray", " ", "segment"}], "-", 
           "by", "-", "segment"}], "*)"}], "\[IndentingNewLine]", 
         RowBox[{"While", "[", 
          RowBox[{
           RowBox[{"segmentData", " ", "\[Equal]", " ", "True"}], ",", " ", 
           RowBox[{"{", "\[IndentingNewLine]", 
            RowBox[{
             RowBox[{"Print", "[", 
              RowBox[{
              "\"\<Success! Segment Level: \>\"", ",", " ", "segmentLevel"}], 
              "]"}], ";", "\[IndentingNewLine]", 
             RowBox[{"Print", "[", 
              RowBox[{
              "\"\<\\tParent: \>\"", ",", " ", "segmentParent", ",", " ", 
               "\"\<\\t hitObj: \>\"", ",", " ", "hitObj", ",", " ", 
               "\"\<\\t hitFace: \>\"", ",", " ", "hitFace", ",", " ", 
               "\"\<\\t insideOf: \>\"", ",", " ", "insideOf", ",", " ", 
               "\"\<\\t Status: \>\"", ",", " ", 
               RowBox[{"status", "@", 
                RowBox[{"ToString", "[", "\"\<\>\"", "]"}]}], ",", " ", 
               "\"\<\\t X: \>\"", ",", " ", "x", ",", " ", "\"\<\\t Y: \>\"", 
               ",", " ", "y", ",", " ", "\"\<\\t Z: \>\"", ",", " ", "z", ",",
                " ", "\"\<\\t L: \>\"", ",", " ", "l", ",", " ", 
               "\"\<\\t M: \>\"", ",", " ", "m", ",", " ", "\"\<\\t N: \>\"", 
               ",", " ", "n", ",", " ", "\"\<\\t exr: \>\"", ",", " ", "exr", 
               ",", " ", "\"\<\\t exi: \>\"", ",", " ", "exi", ",", " ", 
               "\"\<\\t eyr: \>\"", ",", " ", "eyr", ",", " ", 
               "\"\<\\t eyi: \>\"", ",", " ", "eyi", ",", " ", 
               "\"\<\\t ezr: \>\"", ",", " ", "ezr", ",", " ", 
               "\"\<\\t ezi: \>\"", ",", " ", "ezi", ",", " ", 
               "\"\<\\t Intensity: \>\"", ",", " ", "intensity", ",", " ", 
               "\"\<\\t Path Length: \>\"", ",", " ", "pathLength", ",", " ", 
               "\"\<\\t XYBin: \>\"", ",", " ", "xybin", ",", " ", 
               "\"\<\\t LMBin: \>\"", ",", " ", "lmbin", ",", " ", 
               "\"\<\\t X Normal: \>\"", ",", " ", "xNorm", ",", " ", 
               "\"\<\\t Y Normal: \>\"", ",", " ", "yNorm", ",", " ", 
               "\"\<\\t Z Normal: \>\"", ",", " ", "zNorm", ",", " ", 
               "\"\<\\t Index: \>\"", ",", " ", "index", ",", " ", 
               "\"\<\\t Starting Phase: \>\"", ",", " ", "startingPhase", ",",
                " ", "\"\<\\t Phase Of: \>\"", ",", " ", "phaseOf", ",", " ", 
               "\"\<\\t Phase At: \>\"", ",", " ", "phaseAt"}], "]"}], ";"}], 
            "\[IndentingNewLine]", "}"}]}], "]"}]}], ",", 
        "\[IndentingNewLine]", 
        RowBox[{
         RowBox[{"Print", "[", "\"\<\\n\>\"", "]"}], ";"}]}], 
       "\[IndentingNewLine]", "}"}]}], "]"}], ";"}], "\[IndentingNewLine]", 
   "\[IndentingNewLine]", 
   RowBox[{"(*", 
    RowBox[{
    "Close", " ", "the", " ", "tool", " ", "once", " ", "the", " ", "data", 
     " ", "has", " ", "been", " ", "read"}], "*)"}], "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"zrdReader", "@", 
     RowBox[{"Close", "[", "]"}]}], ";"}]}]}]], "Input",
 CellChangeTimes->{{3.8403004946272964`*^9, 3.8403005874479694`*^9}, {
   3.840300633550488*^9, 3.8403006380253706`*^9}, {3.8403008388359203`*^9, 
   3.8403008745162544`*^9}, {3.8403010620829277`*^9, 3.840301098081959*^9}, {
   3.8403011925804844`*^9, 3.840301202657715*^9}, {3.8403012421655726`*^9, 
   3.840301246576861*^9}, {3.8403012953874207`*^9, 3.840301334322487*^9}, {
   3.840301376599045*^9, 3.840301402409676*^9}, {3.8403014914401655`*^9, 
   3.8403015067063494`*^9}, {3.8403016435685673`*^9, 3.840301730377405*^9}, 
   3.840301771903984*^9, {3.840302290748497*^9, 3.8403024382465453`*^9}, {
   3.8403076195621786`*^9, 3.840307659246668*^9}, {3.8415013758147936`*^9, 
   3.8415014081104407`*^9}, {3.8415015609632463`*^9, 
   3.8415017558119035`*^9}, {3.8415018162325745`*^9, 
   3.8415021489087873`*^9}, {3.8415021856452646`*^9, 
   3.8415021913926744`*^9}, {3.841502247072009*^9, 3.8415022811313353`*^9}, {
   3.841502446521308*^9, 3.8415024548517776`*^9}, 3.841502538257106*^9, {
   3.8415025889629874`*^9, 3.8415026248365135`*^9}, {3.841502668240019*^9, 
   3.8415026801179724`*^9}, {3.8415027317240505`*^9, 
   3.8415027352363324`*^9}, {3.8415031446685424`*^9, 3.841503180029771*^9}, {
   3.8415032142215757`*^9, 3.841503323837758*^9}, {3.8415033814076033`*^9, 
   3.8415035034354243`*^9}, {3.8415035698989053`*^9, 3.841503601072813*^9}, {
   3.8415036535939493`*^9, 3.8415036932700586`*^9}, {3.841503736846011*^9, 
   3.8415037910301266`*^9}, {3.841503848991789*^9, 3.841503936385356*^9}, {
   3.8415041320927715`*^9, 3.8415041629023485`*^9}, {3.841504283387735*^9, 
   3.841504332193653*^9}, {3.8415043697349663`*^9, 3.841504378023046*^9}, {
   3.8415044356735244`*^9, 3.841504443603956*^9}, {3.8415044869117637`*^9, 
   3.841504503667823*^9}, {3.8415045588555813`*^9, 
   3.841504598927513*^9}},ExpressionUUID->"89694b72-db48-4735-b870-\
1a1c53649d14"],

Cell[CellGroupData[{

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Ray Number: \"\>", "\[InvisibleSpace]", "1"}],
  SequenceForm["Success! Ray Number: ", 1],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342595602417`*^9},ExpressionUUID->"5ca570a4-24be-4356-bb60-\
da57a4dceafe"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tWave Index: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t Ray Wavelength: \"\>", "\[InvisibleSpace]", 
   "0.550000011920929`", 
   "\[InvisibleSpace]", "\<\"\\t Number of segments: \"\>", 
   "\[InvisibleSpace]", "2"}],
  SequenceForm[
  "\tWave Index: ", 1, "\t Ray Wavelength: ", 0.550000011920929, 
   "\t Number of segments: ", 2],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342595612392`*^9},ExpressionUUID->"6323b0c9-7df6-49f1-a364-\
a77ea200a5b0"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "0"}],
  SequenceForm["Success! Segment Level: ", 0],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259563236*^9},ExpressionUUID->"ae5c6712-20ad-4380-bf03-\
41032993cf69"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Parent\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   "0.08565133810043335`", "\[InvisibleSpace]", "\<\"\\t Y: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.17065885663032532`"}], 
   "\[InvisibleSpace]", "\<\"\\t Z: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.13524220883846283`"}], 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.32027769088745117`"}], 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   "0.049810443073511124`", "\[InvisibleSpace]", "\<\"\\t N: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.9460132718086243`"}], 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.6212288737297058`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   "0.7416026592254639`", "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.43090343475341797`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   "0.5143983960151672`", "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", 
   "\[InvisibleSpace]", "0.18763190507888794`", 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.22398880124092102`"}], 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.471560001373291`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Index: \"\>", 
   "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 0, "\t hitObj: ", 1, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Parent", "\t X: ", 0.08565133810043335, 
   "\t Y: ", -0.17065885663032532`, "\t Z: ", -0.13524220883846283`, 
   "\t L: ", -0.32027769088745117`, "\t M: ", 0.049810443073511124`, 
   "\t N: ", -0.9460132718086243, "\t exr: ", -0.6212288737297058, "\t exi: ",
    0.7416026592254639, "\t eyr: ", -0.43090343475341797`, "\t eyi: ", 
   0.5143983960151672, "\t ezr: ", 0.18763190507888794`, 
   "\t ezi: ", -0.22398880124092102`, "\t Intensity: ", 1.471560001373291, 
   "\t Path Length: ", 0., "\t XYBin: ", 0, "\t LMBin: ", 0, "\t X Normal: ", 
   0., "\t Y Normal: ", 0., "\t Z Normal: ", 0., "\t Index: ", 1., 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259566226*^9},ExpressionUUID->"e1982152-1c8b-4b68-9405-\
dbc8769a4b2f"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "1"}],
  SequenceForm["Success! Segment Level: ", 1],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.84573425956822*^9},ExpressionUUID->"243dc354-25b8-4264-84fc-\
c8bee1704842"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Terminated\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "6.944444179534912`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y: \"\>", "\[InvisibleSpace]", 
   "0.9226803779602051`", "\[InvisibleSpace]", "\<\"\\t Z: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "20.90023422241211`"}], 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.32027769088745117`"}], 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   "0.049810443073511124`", "\[InvisibleSpace]", "\<\"\\t N: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.9460132718086243`"}], 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.6212288737297058`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   "0.7416026592254639`", "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.43090343475341797`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   "0.5143983960151672`", "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", 
   "\[InvisibleSpace]", "0.18763190507888794`", 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.22398880124092102`"}], 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.471560001373291`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Index: \"\>", 
   "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 0, "\t hitObj: ", 0, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Terminated", "\t X: ", -6.944444179534912, "\t Y: ", 
   0.9226803779602051, "\t Z: ", -20.90023422241211, 
   "\t L: ", -0.32027769088745117`, "\t M: ", 0.049810443073511124`, 
   "\t N: ", -0.9460132718086243, "\t exr: ", -0.6212288737297058, "\t exi: ",
    0.7416026592254639, "\t eyr: ", -0.43090343475341797`, "\t eyi: ", 
   0.5143983960151672, "\t ezr: ", 0.18763190507888794`, 
   "\t ezi: ", -0.22398880124092102`, "\t Intensity: ", 1.471560001373291, 
   "\t Path Length: ", 0., "\t XYBin: ", 0, "\t LMBin: ", 0, "\t X Normal: ", 
   0., "\t Y Normal: ", 0., "\t Z Normal: ", 0., "\t Index: ", 1., 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342595702147`*^9},ExpressionUUID->"92b1470e-14d5-44ce-b519-\
b5d7596da32e"],

Cell[BoxData["\<\"\\n\"\>"], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342595732374`*^9},ExpressionUUID->"429864b3-1cc1-49e8-b5ba-\
3f90f75d2579"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Ray Number: \"\>", "\[InvisibleSpace]", "2"}],
  SequenceForm["Success! Ray Number: ", 2],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342595761995`*^9},ExpressionUUID->"f3db9233-639d-4e99-93ef-\
ef280f7f46dc"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tWave Index: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t Ray Wavelength: \"\>", "\[InvisibleSpace]", 
   "0.550000011920929`", 
   "\[InvisibleSpace]", "\<\"\\t Number of segments: \"\>", 
   "\[InvisibleSpace]", "2"}],
  SequenceForm[
  "\tWave Index: ", 1, "\t Ray Wavelength: ", 0.550000011920929, 
   "\t Number of segments: ", 2],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342595781937`*^9},ExpressionUUID->"c0612cbd-7d46-4c36-b211-\
5f3de6c905a6"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "0"}],
  SequenceForm["Success! Segment Level: ", 0],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342595801883`*^9},ExpressionUUID->"e79de7b2-5855-42d4-9173-\
f076510b03c4"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Parent\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.01440146192908287`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y: \"\>", "\[InvisibleSpace]", 
   "0.10436703264713287`", "\[InvisibleSpace]", "\<\"\\t Z: \"\>", 
   "\[InvisibleSpace]", "0.22238701581954956`", 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.5756572484970093`"}], 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   "0.4076290428638458`", "\[InvisibleSpace]", "\<\"\\t N: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.7088422179222107`"}], 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.07856888324022293`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.01506834290921688`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "1.056984543800354`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.20271390676498413`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.5440263152122498`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.10433615744113922`"}], 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.471560001373291`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Index: \"\>", 
   "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 0, "\t hitObj: ", 1, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Parent", "\t X: ", -0.01440146192908287, "\t Y: ", 
   0.10436703264713287`, "\t Z: ", 0.22238701581954956`, 
   "\t L: ", -0.5756572484970093, "\t M: ", 0.4076290428638458, 
   "\t N: ", -0.7088422179222107, "\t exr: ", -0.07856888324022293, 
   "\t exi: ", -0.01506834290921688, "\t eyr: ", -1.056984543800354, 
   "\t eyi: ", -0.20271390676498413`, "\t ezr: ", -0.5440263152122498, 
   "\t ezi: ", -0.10433615744113922`, "\t Intensity: ", 1.471560001373291, 
   "\t Path Length: ", 0., "\t XYBin: ", 0, "\t LMBin: ", 0, "\t X Normal: ", 
   0., "\t Y Normal: ", 0., "\t Z Normal: ", 0., "\t Index: ", 1., 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342595824823`*^9},ExpressionUUID->"f5fbd760-cec0-45a1-b682-\
471c97b9b666"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "1"}],
  SequenceForm["Success! Segment Level: ", 1],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259585077*^9},ExpressionUUID->"433fd72e-1c0b-4b62-b0f8-\
d23e5f6a724b"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Terminated\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "12.650077819824219`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y: \"\>", "\[InvisibleSpace]", 
   "9.051824569702148`", "\[InvisibleSpace]", "\<\"\\t Z: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "15.336700439453125`"}], 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.5756572484970093`"}], 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   "0.4076290428638458`", "\[InvisibleSpace]", "\<\"\\t N: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.7088422179222107`"}], 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.07856888324022293`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.01506834290921688`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "1.056984543800354`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.20271390676498413`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.5440263152122498`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.10433615744113922`"}], 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.471560001373291`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Index: \"\>", 
   "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 0, "\t hitObj: ", 0, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Terminated", "\t X: ", -12.650077819824219`, "\t Y: ", 
   9.051824569702148, "\t Z: ", -15.336700439453125`, 
   "\t L: ", -0.5756572484970093, "\t M: ", 0.4076290428638458, 
   "\t N: ", -0.7088422179222107, "\t exr: ", -0.07856888324022293, 
   "\t exi: ", -0.01506834290921688, "\t eyr: ", -1.056984543800354, 
   "\t eyi: ", -0.20271390676498413`, "\t ezr: ", -0.5440263152122498, 
   "\t ezi: ", -0.10433615744113922`, "\t Intensity: ", 1.471560001373291, 
   "\t Path Length: ", 0., "\t XYBin: ", 0, "\t LMBin: ", 0, "\t X Normal: ", 
   0., "\t Y Normal: ", 0., "\t Z Normal: ", 0., "\t Index: ", 1., 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342595878043`*^9},ExpressionUUID->"9d7e0cc8-43da-4391-9930-\
09091ab5e0eb"],

Cell[BoxData["\<\"\\n\"\>"], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342595915985`*^9},ExpressionUUID->"3d3e69c1-8e9b-4044-8289-\
0a6eba18bb8a"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Ray Number: \"\>", "\[InvisibleSpace]", "3"}],
  SequenceForm["Success! Ray Number: ", 3],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259593135*^9},ExpressionUUID->"469a28c0-d4f0-4b7d-981f-\
a85aa1201940"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tWave Index: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t Ray Wavelength: \"\>", "\[InvisibleSpace]", 
   "0.550000011920929`", 
   "\[InvisibleSpace]", "\<\"\\t Number of segments: \"\>", 
   "\[InvisibleSpace]", "8"}],
  SequenceForm[
  "\tWave Index: ", 1, "\t Ray Wavelength: ", 0.550000011920929, 
   "\t Number of segments: ", 8],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259595096*^9},ExpressionUUID->"072274d5-ef0f-45b7-9759-\
80960a98d4c8"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "0"}],
  SequenceForm["Success! Segment Level: ", 0],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259598089*^9},ExpressionUUID->"5ce1dee1-5e47-49ae-adea-\
79e73bbe90e3"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Parent\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   "0.04198729619383812`", "\[InvisibleSpace]", "\<\"\\t Y: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.1766071915626526`"}], 
   "\[InvisibleSpace]", "\<\"\\t Z: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.01571500301361084`"}], 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.7615184187889099`"}], 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   "0.2883288264274597`", "\[InvisibleSpace]", "\<\"\\t N: \"\>", 
   "\[InvisibleSpace]", "0.5804792642593384`", 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   "0.14029863476753235`", "\[InvisibleSpace]", "\<\"\\t exi: \"\>", 
   "\[InvisibleSpace]", "0.3787759840488434`", 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   "0.39708665013313293`", "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", 
   "\[InvisibleSpace]", "1.0720480680465698`", 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.013181406073272228`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.035586945712566376`"}], 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.471560001373291`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Index: \"\>", 
   "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 0, "\t hitObj: ", 1, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Parent", "\t X: ", 0.04198729619383812, 
   "\t Y: ", -0.1766071915626526, "\t Z: ", -0.01571500301361084, 
   "\t L: ", -0.7615184187889099, "\t M: ", 0.2883288264274597, "\t N: ", 
   0.5804792642593384, "\t exr: ", 0.14029863476753235`, "\t exi: ", 
   0.3787759840488434, "\t eyr: ", 0.39708665013313293`, "\t eyi: ", 
   1.0720480680465698`, "\t ezr: ", -0.013181406073272228`, 
   "\t ezi: ", -0.035586945712566376`, "\t Intensity: ", 1.471560001373291, 
   "\t Path Length: ", 0., "\t XYBin: ", 0, "\t LMBin: ", 0, "\t X Normal: ", 
   0., "\t Y Normal: ", 0., "\t Z Normal: ", 0., "\t Index: ", 1., 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342596002035`*^9},ExpressionUUID->"27d11c52-b638-4f90-bea3-\
b5a4ba6dc532"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "1"}],
  SequenceForm["Success! Segment Level: ", 1],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342596028037`*^9},ExpressionUUID->"76dff9e7-bc02-45e5-a1cb-\
833155288c2a"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "2", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Reflected\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "16.432369232177734`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y: \"\>", "\[InvisibleSpace]", 
   "6.060972690582275`", "\[InvisibleSpace]", "\<\"\\t Z: \"\>", 
   "\[InvisibleSpace]", "12.542119979858398`", 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.7615184187889099`"}], 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   "0.2883288264274597`", "\[InvisibleSpace]", "\<\"\\t N: \"\>", 
   "\[InvisibleSpace]", "0.5804792642593384`", 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.37711217999458313`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   "0.14471124112606049`", "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "1.0673390626907349`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   "0.4095756411552429`", "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", 
   "\[InvisibleSpace]", "0.035430628806352615`", 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.013595981523394585`"}], 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.471560001373291`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "21.633563995361328`", 
   "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.83448725938797`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", "\[InvisibleSpace]", 
   "0.3077951967716217`", "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.457048237323761`"}], 
   "\[InvisibleSpace]", "\<\"\\t Index: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 0, "\t hitObj: ", 2, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Reflected", "\t X: ", -16.432369232177734`, "\t Y: ", 
   6.060972690582275, "\t Z: ", 12.542119979858398`, 
   "\t L: ", -0.7615184187889099, "\t M: ", 0.2883288264274597, "\t N: ", 
   0.5804792642593384, "\t exr: ", -0.37711217999458313`, "\t exi: ", 
   0.14471124112606049`, "\t eyr: ", -1.0673390626907349`, "\t eyi: ", 
   0.4095756411552429, "\t ezr: ", 0.035430628806352615`, 
   "\t ezi: ", -0.013595981523394585`, "\t Intensity: ", 1.471560001373291, 
   "\t Path Length: ", 21.633563995361328`, "\t XYBin: ", 0, "\t LMBin: ", 0, 
   "\t X Normal: ", -0.83448725938797, "\t Y Normal: ", 0.3077951967716217, 
   "\t Z Normal: ", -0.457048237323761, "\t Index: ", 1., 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259605432*^9},ExpressionUUID->"f1bd863d-53a3-4340-b373-\
27115f16764f"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "2"}],
  SequenceForm["Success! Segment Level: ", 2],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259608801*^9},ExpressionUUID->"3f14d9e2-7229-4217-9a14-\
dfb4ca26ee34"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "4", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Transmitted\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "16.31590461730957`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y: \"\>", "\[InvisibleSpace]", 
   "6.215071201324463`", "\[InvisibleSpace]", "\<\"\\t Z: \"\>", 
   "\[InvisibleSpace]", "39.`", "\[InvisibleSpace]", "\<\"\\t L: \"\>", 
   "\[InvisibleSpace]", "0.004401776473969221`", 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   "0.00582414073869586`", "\[InvisibleSpace]", "\<\"\\t N: \"\>", 
   "\[InvisibleSpace]", "0.9999733567237854`", 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.35877060890197754`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   "0.26677316427230835`", "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.9160057306289673`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   "0.6290664672851562`", "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", 
   "\[InvisibleSpace]", "0.0069143581204116344`", 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.004838176537305117`"}], 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.4347466230392456`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "26.45858383178711`", 
   "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", "\[InvisibleSpace]", "6412", 
   "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", "\[InvisibleSpace]", "5050", 
   "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Index: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "3.4102251529693604`"}]}],
  SequenceForm[
  "\tParent: ", 1, "\t hitObj: ", 4, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Transmitted", "\t X: ", -16.31590461730957, "\t Y: ", 
   6.215071201324463, "\t Z: ", 39., "\t L: ", 0.004401776473969221, "\t M: ",
    0.00582414073869586, "\t N: ", 0.9999733567237854, 
   "\t exr: ", -0.35877060890197754`, "\t exi: ", 0.26677316427230835`, 
   "\t eyr: ", -0.9160057306289673, "\t eyi: ", 0.6290664672851562, 
   "\t ezr: ", 0.0069143581204116344`, "\t ezi: ", -0.004838176537305117, 
   "\t Intensity: ", 1.4347466230392456`, "\t Path Length: ", 
   26.45858383178711, "\t XYBin: ", 6412, "\t LMBin: ", 5050, "\t X Normal: ",
    0., "\t Y Normal: ", 0., "\t Z Normal: ", 1., "\t Index: ", 1., 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., 
   "\t Phase At: ", -3.4102251529693604`],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342596117926`*^9},ExpressionUUID->"38be04c4-37b3-4124-aba3-\
2ecc22f90eaa"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "3"}],
  SequenceForm["Success! Segment Level: ", 3],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342596137877`*^9},ExpressionUUID->"7c0a6c28-39c6-4161-825c-\
fb4e0cda6c0f"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "2", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "5", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Transmitted\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "16.13475799560547`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y: \"\>", "\[InvisibleSpace]", 
   "6.4547529220581055`", "\[InvisibleSpace]", "\<\"\\t Z: \"\>", 
   "\[InvisibleSpace]", "80.15205383300781`", 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   "0.004401776473969221`", "\[InvisibleSpace]", "\<\"\\t M: \"\>", 
   "\[InvisibleSpace]", "0.00582414073869586`", 
   "\[InvisibleSpace]", "\<\"\\t N: \"\>", "\[InvisibleSpace]", 
   "0.9999733567237854`", "\[InvisibleSpace]", "\<\"\\t exr: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.44489628076553345`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   "0.0441763810813427`", "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "1.1091195344924927`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   "0.06815454363822937`", "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", 
   "\[InvisibleSpace]", "0.00841822661459446`", 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.000591411953791976`"}], 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.4347466230392456`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "41.15315246582031`", 
   "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.10856912285089493`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", "\[InvisibleSpace]", 
   "0.054703399538993835`", "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.9925826191902161`"}], 
   "\[InvisibleSpace]", "\<\"\\t Index: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 2, "\t hitObj: ", 5, "\t hitFace: ", 1, "\t insideOf: ", 0, 
   "\t Status: ", "Transmitted", "\t X: ", -16.13475799560547, "\t Y: ", 
   6.4547529220581055`, "\t Z: ", 80.15205383300781, "\t L: ", 
   0.004401776473969221, "\t M: ", 0.00582414073869586, "\t N: ", 
   0.9999733567237854, "\t exr: ", -0.44489628076553345`, "\t exi: ", 
   0.0441763810813427, "\t eyr: ", -1.1091195344924927`, "\t eyi: ", 
   0.06815454363822937, "\t ezr: ", 0.00841822661459446, 
   "\t ezi: ", -0.000591411953791976, "\t Intensity: ", 1.4347466230392456`, 
   "\t Path Length: ", 41.15315246582031, "\t XYBin: ", 0, "\t LMBin: ", 0, 
   "\t X Normal: ", -0.10856912285089493`, "\t Y Normal: ", 
   0.054703399538993835`, "\t Z Normal: ", -0.9925826191902161, "\t Index: ", 
   1., "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259615782*^9},ExpressionUUID->"2569f68e-71ee-4973-8bac-\
627824c8f962"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "4"}],
  SequenceForm["Success! Segment Level: ", 4],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259618774*^9},ExpressionUUID->"ec31cb14-6336-4485-8fe1-\
eac03c8f361a"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "3", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "5", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "2", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "5", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Transmitted\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "15.978997230529785`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y: \"\>", "\[InvisibleSpace]", 
   "6.39658260345459`", "\[InvisibleSpace]", "\<\"\\t Z: \"\>", 
   "\[InvisibleSpace]", "84.`", "\[InvisibleSpace]", "\<\"\\t L: \"\>", 
   "\[InvisibleSpace]", "0.040441326797008514`", 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.015103181824088097`"}], 
   "\[InvisibleSpace]", "\<\"\\t N: \"\>", "\[InvisibleSpace]", 
   "0.9990677833557129`", "\[InvisibleSpace]", "\<\"\\t exr: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.19283628463745117`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   "0.4035359025001526`", "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.5164057016372681`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   "0.9838915467262268`", "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "8.159828439602279`*^-7"}], 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.0014609951758757234`"}], 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.4347466230392456`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "3.851534605026245`", 
   "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "1.`"}], "\[InvisibleSpace]", "\<\"\\t Index: \"\>", 
   "\[InvisibleSpace]", "1.524986982345581`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 3, "\t hitObj: ", 5, "\t hitFace: ", 2, "\t insideOf: ", 5, 
   "\t Status: ", "Transmitted", "\t X: ", -15.978997230529785`, "\t Y: ", 
   6.39658260345459, "\t Z: ", 84., "\t L: ", 0.040441326797008514`, 
   "\t M: ", -0.015103181824088097`, "\t N: ", 0.9990677833557129, 
   "\t exr: ", -0.19283628463745117`, "\t exi: ", 0.4035359025001526, 
   "\t eyr: ", -0.5164057016372681, "\t eyi: ", 0.9838915467262268, 
   "\t ezr: ", -8.159828439602279*^-7, "\t ezi: ", -0.0014609951758757234`, 
   "\t Intensity: ", 1.4347466230392456`, "\t Path Length: ", 
   3.851534605026245, "\t XYBin: ", 0, "\t LMBin: ", 0, "\t X Normal: ", 0., 
   "\t Y Normal: ", 0., "\t Z Normal: ", -1., "\t Index: ", 1.524986982345581,
    "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342596207685`*^9},ExpressionUUID->"b625c640-89eb-4e8a-a094-\
ee2889658e86"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "5"}],
  SequenceForm["Success! Segment Level: ", 5],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259628748*^9},ExpressionUUID->"bf2ba543-0926-4b12-9dc9-\
94c4f4ff52db"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "4", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "6", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Transmitted\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "15.232220649719238`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y: \"\>", "\[InvisibleSpace]", 
   "6.117691993713379`", "\[InvisibleSpace]", "\<\"\\t Z: \"\>", 
   "\[InvisibleSpace]", "96.08247375488281`", 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   "0.06167249381542206`", "\[InvisibleSpace]", "\<\"\\t M: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.023032154887914658`"}], 
   "\[InvisibleSpace]", "\<\"\\t N: \"\>", "\[InvisibleSpace]", 
   "0.9978306293487549`", "\[InvisibleSpace]", "\<\"\\t exr: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.40072163939476013`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   "0.19853858649730682`", "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "1.0134832859039307`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   "0.4556289613246918`", "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", 
   "\[InvisibleSpace]", "0.0013737765839323401`", 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.0017540573608130217`"}], 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.4347466230392456`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "12.108741760253906`", 
   "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.12185776233673096`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", "\[InvisibleSpace]", 
   "0.048941537737846375`", "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.9913402199745178`"}], 
   "\[InvisibleSpace]", "\<\"\\t Index: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 4, "\t hitObj: ", 6, "\t hitFace: ", 1, "\t insideOf: ", 0, 
   "\t Status: ", "Transmitted", "\t X: ", -15.232220649719238`, "\t Y: ", 
   6.117691993713379, "\t Z: ", 96.08247375488281, "\t L: ", 
   0.06167249381542206, "\t M: ", -0.023032154887914658`, "\t N: ", 
   0.9978306293487549, "\t exr: ", -0.40072163939476013`, "\t exi: ", 
   0.19853858649730682`, "\t eyr: ", -1.0134832859039307`, "\t eyi: ", 
   0.4556289613246918, "\t ezr: ", 0.0013737765839323401`, 
   "\t ezi: ", -0.0017540573608130217`, "\t Intensity: ", 1.4347466230392456`,
    "\t Path Length: ", 12.108741760253906`, "\t XYBin: ", 0, "\t LMBin: ", 0,
    "\t X Normal: ", -0.12185776233673096`, "\t Y Normal: ", 
   0.048941537737846375`, "\t Z Normal: ", -0.9913402199745178, "\t Index: ", 
   1., "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259630742*^9},ExpressionUUID->"6a8cd8ff-3160-4049-afca-\
fa4d8f572264"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "6"}],
  SequenceForm["Success! Segment Level: ", 6],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342596337347`*^9},ExpressionUUID->"439161d2-62a3-410b-a570-\
e6f7d0f0b6b1"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "5", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "6", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "2", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "6", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Transmitted\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "14.619258880615234`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y: \"\>", "\[InvisibleSpace]", 
   "5.880031585693359`", "\[InvisibleSpace]", "\<\"\\t Z: \"\>", 
   "\[InvisibleSpace]", "103.5028305053711`", 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   "0.0822831317782402`", "\[InvisibleSpace]", "\<\"\\t M: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.03190319240093231`"}], 
   "\[InvisibleSpace]", "\<\"\\t N: \"\>", "\[InvisibleSpace]", 
   "0.9960982203483582`", "\[InvisibleSpace]", "\<\"\\t exr: \"\>", 
   "\[InvisibleSpace]", "0.4143345057964325`", 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.16770243644714355`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   "1.0442622900009155`", "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.37782207131385803`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.0007804885390214622`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   "0.0017521890113130212`", "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", 
   "\[InvisibleSpace]", "1.433034062385559`", 
   "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", "\[InvisibleSpace]", 
   "7.449424743652344`", "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", 
   "\[InvisibleSpace]", "0.11695406585931778`", 
   "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.04704025387763977`"}], 
   "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.9920226335525513`"}], 
   "\[InvisibleSpace]", "\<\"\\t Index: \"\>", "\[InvisibleSpace]", 
   "1.5185223817825317`", "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>",
    "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>",
    "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>",
    "\[InvisibleSpace]", "0.`"}],
  SequenceForm[
  "\tParent: ", 5, "\t hitObj: ", 6, "\t hitFace: ", 2, "\t insideOf: ", 6, 
   "\t Status: ", "Transmitted", "\t X: ", -14.619258880615234`, "\t Y: ", 
   5.880031585693359, "\t Z: ", 103.5028305053711, "\t L: ", 
   0.0822831317782402, "\t M: ", -0.03190319240093231, "\t N: ", 
   0.9960982203483582, "\t exr: ", 0.4143345057964325, 
   "\t exi: ", -0.16770243644714355`, "\t eyr: ", 1.0442622900009155`, 
   "\t eyi: ", -0.37782207131385803`, "\t ezr: ", -0.0007804885390214622, 
   "\t ezi: ", 0.0017521890113130212`, "\t Intensity: ", 1.433034062385559, 
   "\t Path Length: ", 7.449424743652344, "\t XYBin: ", 0, "\t LMBin: ", 0, 
   "\t X Normal: ", 0.11695406585931778`, 
   "\t Y Normal: ", -0.04704025387763977, 
   "\t Z Normal: ", -0.9920226335525513, "\t Index: ", 1.5185223817825317`, 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342596357293`*^9},ExpressionUUID->"92b1c3f3-a6da-4021-bac1-\
f4d82ace397a"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "7"}],
  SequenceForm["Success! Segment Level: ", 7],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259638723*^9},ExpressionUUID->"1fbcbfb1-bad3-4896-88ff-\
44c15746dcbf"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "6", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "7", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Terminated\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   "6.760210990905762`", "\[InvisibleSpace]", "\<\"\\t Y: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "2.5129740238189697`"}], 
   "\[InvisibleSpace]", "\<\"\\t Z: \"\>", "\[InvisibleSpace]", "215.`", 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   "0.18780571222305298`", "\[InvisibleSpace]", "\<\"\\t M: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.07372748106718063`"}], 
   "\[InvisibleSpace]", "\<\"\\t N: \"\>", "\[InvisibleSpace]", 
   "0.9794352054595947`", "\[InvisibleSpace]", "\<\"\\t exr: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.2370762676000595`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   "0.3788113594055176`", "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.6234155893325806`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   "0.9190592169761658`", "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.001468787551857531`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.0034540516790002584`"}], 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.433034062385559`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "113.83822631835938`", 
   "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", "\[InvisibleSpace]", "4172", 
   "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", "\[InvisibleSpace]", "4171", 
   "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Index: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "5.061423301696777`"}]}],
  SequenceForm[
  "\tParent: ", 6, "\t hitObj: ", 7, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Terminated", "\t X: ", 6.760210990905762, 
   "\t Y: ", -2.5129740238189697`, "\t Z: ", 215., "\t L: ", 
   0.18780571222305298`, "\t M: ", -0.07372748106718063, "\t N: ", 
   0.9794352054595947, "\t exr: ", -0.2370762676000595, "\t exi: ", 
   0.3788113594055176, "\t eyr: ", -0.6234155893325806, "\t eyi: ", 
   0.9190592169761658, "\t ezr: ", -0.001468787551857531, 
   "\t ezi: ", -0.0034540516790002584`, "\t Intensity: ", 1.433034062385559, 
   "\t Path Length: ", 113.83822631835938`, "\t XYBin: ", 4172, "\t LMBin: ", 
   4171, "\t X Normal: ", 0., "\t Y Normal: ", 0., "\t Z Normal: ", 1., 
   "\t Index: ", 1., "\t Starting Phase: ", 0., "\t Phase Of: ", 0., 
   "\t Phase At: ", -5.061423301696777],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259640716*^9},ExpressionUUID->"67179eaa-587f-4942-ada7-\
6e01517805b6"],

Cell[BoxData["\<\"\\n\"\>"], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342596427107`*^9},ExpressionUUID->"10492a1f-2bd2-4b2c-91df-\
ce89d1108a09"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Ray Number: \"\>", "\[InvisibleSpace]", "4"}],
  SequenceForm["Success! Ray Number: ", 4],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342596447053`*^9},ExpressionUUID->"2d6b41e8-59b9-4b91-9751-\
2764b7ea9e35"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tWave Index: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t Ray Wavelength: \"\>", "\[InvisibleSpace]", 
   "0.550000011920929`", 
   "\[InvisibleSpace]", "\<\"\\t Number of segments: \"\>", 
   "\[InvisibleSpace]", "3"}],
  SequenceForm[
  "\tWave Index: ", 1, "\t Ray Wavelength: ", 0.550000011920929, 
   "\t Number of segments: ", 3],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342596467*^9},ExpressionUUID->"22d7c633-fbe3-4580-92f2-91ac610c7698"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "0"}],
  SequenceForm["Success! Segment Level: ", 0],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342596476974`*^9},ExpressionUUID->"703f4d38-ccd9-475f-b5b0-\
85e7f14936b5"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Parent\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.06400173157453537`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y: \"\>", "\[InvisibleSpace]", 
   "0.1625286340713501`", "\[InvisibleSpace]", "\<\"\\t Z: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.24428978562355042`"}], 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.17703993618488312`"}], 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   "0.3580058217048645`", "\[InvisibleSpace]", "\<\"\\t N: \"\>", 
   "\[InvisibleSpace]", "0.9167817234992981`", 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.2646770477294922`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.652057409286499`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   "0.3259996771812439`", "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", 
   "\[InvisibleSpace]", "0.8031315803527832`", 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.17841562628746033`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.43954411149024963`"}], 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.471560001373291`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Index: \"\>", 
   "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 0, "\t hitObj: ", 1, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Parent", "\t X: ", -0.06400173157453537, "\t Y: ", 
   0.1625286340713501, "\t Z: ", -0.24428978562355042`, 
   "\t L: ", -0.17703993618488312`, "\t M: ", 0.3580058217048645, "\t N: ", 
   0.9167817234992981, "\t exr: ", -0.2646770477294922, 
   "\t exi: ", -0.652057409286499, "\t eyr: ", 0.3259996771812439, "\t eyi: ",
    0.8031315803527832, "\t ezr: ", -0.17841562628746033`, 
   "\t ezi: ", -0.43954411149024963`, "\t Intensity: ", 1.471560001373291, 
   "\t Path Length: ", 0., "\t XYBin: ", 0, "\t LMBin: ", 0, "\t X Normal: ", 
   0., "\t Y Normal: ", 0., "\t Z Normal: ", 0., "\t Index: ", 1., 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259650689*^9},ExpressionUUID->"6ac67529-35d4-4df6-988a-\
f4c5c250e342"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "1"}],
  SequenceForm["Success! Segment Level: ", 1],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342596526833`*^9},ExpressionUUID->"fdcb4cc3-d777-4e58-8311-\
6ae4a2fe4aa7"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "4", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Transmitted\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "7.6424760818481445`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y: \"\>", "\[InvisibleSpace]", 
   "15.487533569335938`", "\[InvisibleSpace]", "\<\"\\t Z: \"\>", 
   "\[InvisibleSpace]", "39.`", "\[InvisibleSpace]", "\<\"\\t L: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.17703993618488312`"}], 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   "0.3580058217048645`", "\[InvisibleSpace]", "\<\"\\t N: \"\>", 
   "\[InvisibleSpace]", "0.9167817234992981`", 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.6792683601379395`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.1839219331741333`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   "0.8366470336914062`", "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", 
   "\[InvisibleSpace]", "0.22653453052043915`", 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.4578866958618164`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.12397957593202591`"}], 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.471560001373291`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "42.80657958984375`", 
   "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", "\[InvisibleSpace]", "8532", 
   "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", "\[InvisibleSpace]", "6144", 
   "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Index: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "5.577641010284424`"}]}],
  SequenceForm[
  "\tParent: ", 0, "\t hitObj: ", 4, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Transmitted", "\t X: ", -7.6424760818481445`, "\t Y: ", 
   15.487533569335938`, "\t Z: ", 39., "\t L: ", -0.17703993618488312`, 
   "\t M: ", 0.3580058217048645, "\t N: ", 0.9167817234992981, 
   "\t exr: ", -0.6792683601379395, "\t exi: ", -0.1839219331741333, 
   "\t eyr: ", 0.8366470336914062, "\t eyi: ", 0.22653453052043915`, 
   "\t ezr: ", -0.4578866958618164, "\t ezi: ", -0.12397957593202591`, 
   "\t Intensity: ", 1.471560001373291, "\t Path Length: ", 42.80657958984375,
    "\t XYBin: ", 8532, "\t LMBin: ", 6144, "\t X Normal: ", 0., 
   "\t Y Normal: ", 0., "\t Z Normal: ", 1., "\t Index: ", 1., 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., 
   "\t Phase At: ", -5.577641010284424],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259655676*^9},ExpressionUUID->"02ba8660-0c20-406e-9825-\
dda8aaf5a935"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "2"}],
  SequenceForm["Success! Segment Level: ", 2],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342596586685`*^9},ExpressionUUID->"0adcb802-c5c3-4632-a058-\
fab291348a01"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Terminated\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "11.528502464294434`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y: \"\>", "\[InvisibleSpace]", 
   "23.345762252807617`", "\[InvisibleSpace]", "\<\"\\t Z: \"\>", 
   "\[InvisibleSpace]", "59.12335968017578`", 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.17703993618488312`"}], 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   "0.3580058217048645`", "\[InvisibleSpace]", "\<\"\\t N: \"\>", 
   "\[InvisibleSpace]", "0.9167817234992981`", 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.6792683601379395`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.1839219331741333`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   "0.8366470336914062`", "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", 
   "\[InvisibleSpace]", "0.22653453052043915`", 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.4578866958618164`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.12397957593202591`"}], 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.471560001373291`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Index: \"\>", 
   "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 1, "\t hitObj: ", 0, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Terminated", "\t X: ", -11.528502464294434`, "\t Y: ", 
   23.345762252807617`, "\t Z: ", 59.12335968017578, 
   "\t L: ", -0.17703993618488312`, "\t M: ", 0.3580058217048645, "\t N: ", 
   0.9167817234992981, "\t exr: ", -0.6792683601379395, 
   "\t exi: ", -0.1839219331741333, "\t eyr: ", 0.8366470336914062, 
   "\t eyi: ", 0.22653453052043915`, "\t ezr: ", -0.4578866958618164, 
   "\t ezi: ", -0.12397957593202591`, "\t Intensity: ", 1.471560001373291, 
   "\t Path Length: ", 0., "\t XYBin: ", 0, "\t LMBin: ", 0, "\t X Normal: ", 
   0., "\t Y Normal: ", 0., "\t Z Normal: ", 0., "\t Index: ", 1., 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342596606627`*^9},ExpressionUUID->"91b6b8a4-698b-4511-8671-\
eee8d7a1ea2f"],

Cell[BoxData["\<\"\\n\"\>"], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342596626577`*^9},ExpressionUUID->"881f45a8-aa20-40f9-aba9-\
a5f3962bb70c"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Ray Number: \"\>", "\[InvisibleSpace]", "5"}],
  SequenceForm["Success! Ray Number: ", 5],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259664652*^9},ExpressionUUID->"588ac63c-cf81-4c94-ab48-\
198445a28aa9"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tWave Index: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t Ray Wavelength: \"\>", "\[InvisibleSpace]", 
   "0.550000011920929`", 
   "\[InvisibleSpace]", "\<\"\\t Number of segments: \"\>", 
   "\[InvisibleSpace]", "8"}],
  SequenceForm[
  "\tWave Index: ", 1, "\t Ray Wavelength: ", 0.550000011920929, 
   "\t Number of segments: ", 8],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259666647*^9},ExpressionUUID->"5d4c8c51-04fb-49e1-867c-\
614e87bbac6c"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "0"}],
  SequenceForm["Success! Segment Level: ", 0],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259667644*^9},ExpressionUUID->"da926014-2f0d-4ecf-9fbb-\
cf8e00055079"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Parent\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.08751263469457626`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.09759591519832611`"}], 
   "\[InvisibleSpace]", "\<\"\\t Z: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.1450270563364029`"}], 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.1400204449892044`"}], 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.7773873209953308`"}], 
   "\[InvisibleSpace]", "\<\"\\t N: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.6132399439811707`"}], 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   "0.22067926824092865`", "\[InvisibleSpace]", "\<\"\\t exi: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.2626449763774872`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.4876806139945984`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   "0.5804209113121033`", "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", 
   "\[InvisibleSpace]", "0.5678317546844482`", 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.6758140325546265`"}], 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.471560001373291`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Index: \"\>", 
   "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 0, "\t hitObj: ", 1, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Parent", "\t X: ", -0.08751263469457626, 
   "\t Y: ", -0.09759591519832611, "\t Z: ", -0.1450270563364029, 
   "\t L: ", -0.1400204449892044, "\t M: ", -0.7773873209953308, 
   "\t N: ", -0.6132399439811707, "\t exr: ", 0.22067926824092865`, 
   "\t exi: ", -0.2626449763774872, "\t eyr: ", -0.4876806139945984, 
   "\t eyi: ", 0.5804209113121033, "\t ezr: ", 0.5678317546844482, 
   "\t ezi: ", -0.6758140325546265, "\t Intensity: ", 1.471560001373291, 
   "\t Path Length: ", 0., "\t XYBin: ", 0, "\t LMBin: ", 0, "\t X Normal: ", 
   0., "\t Y Normal: ", 0., "\t Z Normal: ", 0., "\t Index: ", 1., 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342596716337`*^9},ExpressionUUID->"2f6f74c3-92d8-4a51-8a3f-\
87504d8fe9de"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "1"}],
  SequenceForm["Success! Segment Level: ", 1],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259673628*^9},ExpressionUUID->"6999884e-a734-4d32-990b-\
c1bf561ce94b"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "2", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Reflected\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.8406546115875244`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "4.2790069580078125`"}], 
   "\[InvisibleSpace]", "\<\"\\t Z: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "3.4435222148895264`"}], 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.1400204449892044`"}], 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.7773873209953308`"}], 
   "\[InvisibleSpace]", "\<\"\\t N: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.6132399439811707`"}], 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   "0.054371852427721024`", "\[InvisibleSpace]", "\<\"\\t exi: \"\>", 
   "\[InvisibleSpace]", "0.3387114107608795`", 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.12015673518180847`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.7485206723213196`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   "0.1399046927690506`", "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", 
   "\[InvisibleSpace]", "0.8715412616729736`", 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.471560001373291`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "5.378799915313721`", 
   "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.0840584859251976`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.4278651773929596`"}], 
   "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.8999252915382385`"}], 
   "\[InvisibleSpace]", "\<\"\\t Index: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 0, "\t hitObj: ", 2, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Reflected", "\t X: ", -0.8406546115875244, 
   "\t Y: ", -4.2790069580078125`, "\t Z: ", -3.4435222148895264`, 
   "\t L: ", -0.1400204449892044, "\t M: ", -0.7773873209953308, 
   "\t N: ", -0.6132399439811707, "\t exr: ", 0.054371852427721024`, 
   "\t exi: ", 0.3387114107608795, "\t eyr: ", -0.12015673518180847`, 
   "\t eyi: ", -0.7485206723213196, "\t ezr: ", 0.1399046927690506, 
   "\t ezi: ", 0.8715412616729736, "\t Intensity: ", 1.471560001373291, 
   "\t Path Length: ", 5.378799915313721, "\t XYBin: ", 0, "\t LMBin: ", 0, 
   "\t X Normal: ", -0.0840584859251976, "\t Y Normal: ", -0.4278651773929596,
    "\t Z Normal: ", -0.8999252915382385, "\t Index: ", 1., 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342596766205`*^9},ExpressionUUID->"f193f34a-a318-45a6-88c2-\
a7f7b93f4d7b"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "2"}],
  SequenceForm["Success! Segment Level: ", 2],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342596786146`*^9},ExpressionUUID->"514cb2fc-9871-453f-9448-\
e490948950ae"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "4", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Transmitted\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.38834434747695923`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "4.72186803817749`"}], "\[InvisibleSpace]", "\<\"\\t Z: \"\>",
    "\[InvisibleSpace]", "39.`", "\[InvisibleSpace]", "\<\"\\t L: \"\>", 
   "\[InvisibleSpace]", "0.010655570775270462`", 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.010432972572743893`"}], 
   "\[InvisibleSpace]", "\<\"\\t N: \"\>", "\[InvisibleSpace]", 
   "0.9998887777328491`", "\[InvisibleSpace]", "\<\"\\t exr: \"\>", 
   "\[InvisibleSpace]", "0.23104259371757507`", 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   "0.10689224302768707`", "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "1.086840271949768`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.37326398491859436`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.01380239985883236`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.005033810622990131`"}], 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.3855702877044678`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "42.4482421875`", 
   "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", "\[InvisibleSpace]", "3949", 
   "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", "\[InvisibleSpace]", "4950", 
   "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Index: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "3.6970036029815674`"}]}],
  SequenceForm[
  "\tParent: ", 1, "\t hitObj: ", 4, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Transmitted", "\t X: ", -0.38834434747695923`, 
   "\t Y: ", -4.72186803817749, "\t Z: ", 39., "\t L: ", 
   0.010655570775270462`, "\t M: ", -0.010432972572743893`, "\t N: ", 
   0.9998887777328491, "\t exr: ", 0.23104259371757507`, "\t exi: ", 
   0.10689224302768707`, "\t eyr: ", -1.086840271949768, 
   "\t eyi: ", -0.37326398491859436`, "\t ezr: ", -0.01380239985883236, 
   "\t ezi: ", -0.005033810622990131, "\t Intensity: ", 1.3855702877044678`, 
   "\t Path Length: ", 42.4482421875, "\t XYBin: ", 3949, "\t LMBin: ", 4950, 
   "\t X Normal: ", 0., "\t Y Normal: ", 0., "\t Z Normal: ", 1., 
   "\t Index: ", 1., "\t Starting Phase: ", 0., "\t Phase Of: ", 0., 
   "\t Phase At: ", -3.6970036029815674`],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342596816063`*^9},ExpressionUUID->"d9e9d3aa-37d6-457d-9ae4-\
0456a04f9a99"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "3"}],
  SequenceForm["Success! Segment Level: ", 3],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259683601*^9},ExpressionUUID->"9d153ce4-1db7-436d-93d2-\
92be0e5d0559"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "2", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "5", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Transmitted\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   "0.04859204962849617`", "\[InvisibleSpace]", "\<\"\\t Y: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "5.14967679977417`"}], "\[InvisibleSpace]", "\<\"\\t Z: \"\>",
    "\[InvisibleSpace]", "80.0008773803711`", 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   "0.010655570775270462`", "\[InvisibleSpace]", "\<\"\\t M: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.010432972572743893`"}], 
   "\[InvisibleSpace]", "\<\"\\t N: \"\>", "\[InvisibleSpace]", 
   "0.9998887777328491`", "\[InvisibleSpace]", "\<\"\\t exr: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.04246007651090622`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.25100553035736084`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   "0.3066035211086273`", "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", 
   "\[InvisibleSpace]", "1.1074936389923096`", 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   "0.003651628503575921`", "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", 
   "\[InvisibleSpace]", "0.014230639673769474`", 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.3855702877044678`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "41.00543975830078`", 
   "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", "\[InvisibleSpace]", 
   "0.0023703440092504025`", "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", 
   "\[InvisibleSpace]", "0.008958856575191021`", 
   "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.9999570846557617`"}], 
   "\[InvisibleSpace]", "\<\"\\t Index: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 2, "\t hitObj: ", 5, "\t hitFace: ", 1, "\t insideOf: ", 0, 
   "\t Status: ", "Transmitted", "\t X: ", 0.04859204962849617, 
   "\t Y: ", -5.14967679977417, "\t Z: ", 80.0008773803711, "\t L: ", 
   0.010655570775270462`, "\t M: ", -0.010432972572743893`, "\t N: ", 
   0.9998887777328491, "\t exr: ", -0.04246007651090622, 
   "\t exi: ", -0.25100553035736084`, "\t eyr: ", 0.3066035211086273, 
   "\t eyi: ", 1.1074936389923096`, "\t ezr: ", 0.003651628503575921, 
   "\t ezi: ", 0.014230639673769474`, "\t Intensity: ", 1.3855702877044678`, 
   "\t Path Length: ", 41.00543975830078, "\t XYBin: ", 0, "\t LMBin: ", 0, 
   "\t X Normal: ", 0.0023703440092504025`, "\t Y Normal: ", 
   0.008958856575191021, "\t Z Normal: ", -0.9999570846557617, "\t Index: ", 
   1., "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259686595*^9},ExpressionUUID->"c4b04b42-0192-438a-ab21-\
59a88c79f9d2"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "4"}],
  SequenceForm["Success! Segment Level: ", 4],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259690583*^9},ExpressionUUID->"070b3e7f-6d44-4651-8f21-\
3f9e899878c2"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "3", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "5", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "2", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "5", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Transmitted\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   "0.07327337563037872`", "\[InvisibleSpace]", "\<\"\\t Y: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "5.18937349319458`"}], "\[InvisibleSpace]", "\<\"\\t Z: \"\>",
    "\[InvisibleSpace]", "84.`", "\[InvisibleSpace]", "\<\"\\t L: \"\>", 
   "\[InvisibleSpace]", "0.0061712670139968395`", 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.009925671853125095`"}], 
   "\[InvisibleSpace]", "\<\"\\t N: \"\>", "\[InvisibleSpace]", 
   "0.9999316930770874`", "\[InvisibleSpace]", "\<\"\\t exr: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.21269488334655762`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.13991032540798187`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   "1.0196596384048462`", "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", 
   "\[InvisibleSpace]", "0.5299832224845886`", 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   "0.011434185318648815`", "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", 
   "\[InvisibleSpace]", "0.006124281790107489`", 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.3855702877044678`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "3.9993929862976074`", 
   "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "1.`"}], "\[InvisibleSpace]", "\<\"\\t Index: \"\>", 
   "\[InvisibleSpace]", "1.524986982345581`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 3, "\t hitObj: ", 5, "\t hitFace: ", 2, "\t insideOf: ", 5, 
   "\t Status: ", "Transmitted", "\t X: ", 0.07327337563037872, 
   "\t Y: ", -5.18937349319458, "\t Z: ", 84., "\t L: ", 
   0.0061712670139968395`, "\t M: ", -0.009925671853125095, "\t N: ", 
   0.9999316930770874, "\t exr: ", -0.21269488334655762`, 
   "\t exi: ", -0.13991032540798187`, "\t eyr: ", 1.0196596384048462`, 
   "\t eyi: ", 0.5299832224845886, "\t ezr: ", 0.011434185318648815`, 
   "\t ezi: ", 0.006124281790107489, "\t Intensity: ", 1.3855702877044678`, 
   "\t Path Length: ", 3.9993929862976074`, "\t XYBin: ", 0, "\t LMBin: ", 0, 
   "\t X Normal: ", 0., "\t Y Normal: ", 0., "\t Z Normal: ", -1., 
   "\t Index: ", 1.524986982345581, "\t Starting Phase: ", 0., 
   "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342596925774`*^9},ExpressionUUID->"06f171ae-70bf-49ce-8a70-\
a8d73eb238d4"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "5"}],
  SequenceForm["Success! Segment Level: ", 5],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342596955705`*^9},ExpressionUUID->"da695192-eb46-4fcb-b386-\
712a5cf41935"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "4", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "6", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Transmitted\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   "0.17789435386657715`", "\[InvisibleSpace]", "\<\"\\t Y: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "5.357642650604248`"}], 
   "\[InvisibleSpace]", "\<\"\\t Z: \"\>", "\[InvisibleSpace]", 
   "95.11499786376953`", "\[InvisibleSpace]", "\<\"\\t L: \"\>", 
   "\[InvisibleSpace]", "0.00941110122948885`", 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.015136519446969032`"}], 
   "\[InvisibleSpace]", "\<\"\\t N: \"\>", "\[InvisibleSpace]", 
   "0.9998411536216736`", "\[InvisibleSpace]", "\<\"\\t exr: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.07358379662036896`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   "0.24366478621959686`", "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", 
   "\[InvisibleSpace]", "0.21786774694919586`", 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "1.1282399892807007`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   "0.003990897908806801`", "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.019373858347535133`"}], 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.3855702877044678`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "11.1167631149292`", 
   "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", "\[InvisibleSpace]", 
   "0.0014231548411771655`", "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.04286114126443863`"}], 
   "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.9990800023078918`"}], 
   "\[InvisibleSpace]", "\<\"\\t Index: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 4, "\t hitObj: ", 6, "\t hitFace: ", 1, "\t insideOf: ", 0, 
   "\t Status: ", "Transmitted", "\t X: ", 0.17789435386657715`, 
   "\t Y: ", -5.357642650604248, "\t Z: ", 95.11499786376953, "\t L: ", 
   0.00941110122948885, "\t M: ", -0.015136519446969032`, "\t N: ", 
   0.9998411536216736, "\t exr: ", -0.07358379662036896, "\t exi: ", 
   0.24366478621959686`, "\t eyr: ", 0.21786774694919586`, 
   "\t eyi: ", -1.1282399892807007`, "\t ezr: ", 0.003990897908806801, 
   "\t ezi: ", -0.019373858347535133`, "\t Intensity: ", 1.3855702877044678`, 
   "\t Path Length: ", 11.1167631149292, "\t XYBin: ", 0, "\t LMBin: ", 0, 
   "\t X Normal: ", 0.0014231548411771655`, 
   "\t Y Normal: ", -0.04286114126443863, 
   "\t Z Normal: ", -0.9990800023078918, "\t Index: ", 1., 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259697564*^9},ExpressionUUID->"f2d674aa-0a72-48aa-8095-\
18de73675d79"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "6"}],
  SequenceForm["Success! Segment Level: ", 6],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259700556*^9},ExpressionUUID->"882af694-7644-46f3-bec2-\
ba1e6627c2fb"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "5", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "6", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "2", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "6", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Transmitted\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   "0.23084712028503418`", "\[InvisibleSpace]", "\<\"\\t Y: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "5.314208030700684`"}], 
   "\[InvisibleSpace]", "\<\"\\t Z: \"\>", "\[InvisibleSpace]", 
   "104.38677215576172`", "\[InvisibleSpace]", "\<\"\\t L: \"\>", 
   "\[InvisibleSpace]", "0.005711023695766926`", 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   "0.004684451036155224`", "\[InvisibleSpace]", "\<\"\\t N: \"\>", 
   "\[InvisibleSpace]", "0.9999727010726929`", 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.09129266440868378`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.23758633434772491`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   "0.519366443157196`", "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", 
   "\[InvisibleSpace]", "1.0241941213607788`", 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.001911624101921916`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.003441019682213664`"}], 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.3835121393203735`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "9.272028923034668`", 
   "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.0018467770423740149`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", "\[InvisibleSpace]", 
   "0.042513664811849594`", "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.9990941882133484`"}], 
   "\[InvisibleSpace]", "\<\"\\t Index: \"\>", "\[InvisibleSpace]", 
   "1.5185223817825317`", "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>",
    "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>",
    "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>",
    "\[InvisibleSpace]", "0.`"}],
  SequenceForm[
  "\tParent: ", 5, "\t hitObj: ", 6, "\t hitFace: ", 2, "\t insideOf: ", 6, 
   "\t Status: ", "Transmitted", "\t X: ", 0.23084712028503418`, 
   "\t Y: ", -5.314208030700684, "\t Z: ", 104.38677215576172`, "\t L: ", 
   0.005711023695766926, "\t M: ", 0.004684451036155224, "\t N: ", 
   0.9999727010726929, "\t exr: ", -0.09129266440868378, 
   "\t exi: ", -0.23758633434772491`, "\t eyr: ", 0.519366443157196, 
   "\t eyi: ", 1.0241941213607788`, "\t ezr: ", -0.001911624101921916, 
   "\t ezi: ", -0.003441019682213664, "\t Intensity: ", 1.3835121393203735`, 
   "\t Path Length: ", 9.272028923034668, "\t XYBin: ", 0, "\t LMBin: ", 0, 
   "\t X Normal: ", -0.0018467770423740149`, "\t Y Normal: ", 
   0.042513664811849594`, "\t Z Normal: ", -0.9990941882133484, "\t Index: ", 
   1.5185223817825317`, "\t Starting Phase: ", 0., "\t Phase Of: ", 0., 
   "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259702551*^9},ExpressionUUID->"ab529002-1de6-43cf-bfd8-\
c4d4397097ce"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "7"}],
  SequenceForm["Success! Segment Level: ", 7],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342597055435`*^9},ExpressionUUID->"1798d049-6002-4268-a3c7-\
89d15f37ce9c"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "6", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "7", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Terminated\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   "1.0844058990478516`", "\[InvisibleSpace]", "\<\"\\t Y: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "2.0833418369293213`"}], 
   "\[InvisibleSpace]", "\<\"\\t Z: \"\>", "\[InvisibleSpace]", "215.`", 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   "0.007713087368756533`", "\[InvisibleSpace]", "\<\"\\t M: \"\>", 
   "\[InvisibleSpace]", "0.029195358976721764`", 
   "\[InvisibleSpace]", "\<\"\\t N: \"\>", "\[InvisibleSpace]", 
   "0.9995439648628235`", "\[InvisibleSpace]", "\<\"\\t exr: \"\>", 
   "\[InvisibleSpace]", "0.25157418847084045`", 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.0398249514400959`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "1.1094880104064941`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   "0.2944079637527466`", "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", 
   "\[InvisibleSpace]", "0.03046537935733795`", 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.008291954174637794`"}], 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.3835121393203735`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "110.6636962890625`", 
   "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", "\[InvisibleSpace]", "4353", 
   "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", "\[InvisibleSpace]", "5350", 
   "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Index: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "5.961612224578857`"}]}],
  SequenceForm[
  "\tParent: ", 6, "\t hitObj: ", 7, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Terminated", "\t X: ", 1.0844058990478516`, 
   "\t Y: ", -2.0833418369293213`, "\t Z: ", 215., "\t L: ", 
   0.007713087368756533, "\t M: ", 0.029195358976721764`, "\t N: ", 
   0.9995439648628235, "\t exr: ", 0.25157418847084045`, 
   "\t exi: ", -0.0398249514400959, "\t eyr: ", -1.1094880104064941`, 
   "\t eyi: ", 0.2944079637527466, "\t ezr: ", 0.03046537935733795, 
   "\t ezi: ", -0.008291954174637794, "\t Intensity: ", 1.3835121393203735`, 
   "\t Path Length: ", 110.6636962890625, "\t XYBin: ", 4353, "\t LMBin: ", 
   5350, "\t X Normal: ", 0., "\t Y Normal: ", 0., "\t Z Normal: ", 1., 
   "\t Index: ", 1., "\t Starting Phase: ", 0., "\t Phase Of: ", 0., 
   "\t Phase At: ", -5.961612224578857],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259707537*^9},ExpressionUUID->"929a5006-456a-4eee-bde0-\
74fa644a3e91"],

Cell[BoxData["\<\"\\n\"\>"], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259709532*^9},ExpressionUUID->"19560ef2-04b8-4546-a019-\
a0120d569898"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Ray Number: \"\>", "\[InvisibleSpace]", "6"}],
  SequenceForm["Success! Ray Number: ", 6],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259711526*^9},ExpressionUUID->"ef6cd179-75df-40b6-885c-\
274af8cc82d2"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tWave Index: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t Ray Wavelength: \"\>", "\[InvisibleSpace]", 
   "0.550000011920929`", 
   "\[InvisibleSpace]", "\<\"\\t Number of segments: \"\>", 
   "\[InvisibleSpace]", "8"}],
  SequenceForm[
  "\tWave Index: ", 1, "\t Ray Wavelength: ", 0.550000011920929, 
   "\t Number of segments: ", 8],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259713521*^9},ExpressionUUID->"0624abea-5cbf-450b-b566-\
a7627b517671"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "0"}],
  SequenceForm["Success! Segment Level: ", 0],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259715516*^9},ExpressionUUID->"e13849d7-1b69-456d-9872-\
07781782a97b"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Parent\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.19617117941379547`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.06102984398603439`"}], 
   "\[InvisibleSpace]", "\<\"\\t Z: \"\>", "\[InvisibleSpace]", 
   "0.11073743551969528`", "\[InvisibleSpace]", "\<\"\\t L: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.7828813195228577`"}], 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   "0.4047832489013672`", "\[InvisibleSpace]", "\<\"\\t N: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.47249066829681396`"}], 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.3093225657939911`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.12132731825113297`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "1.0232735872268677`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.4013642966747284`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.3641153573989868`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.14281900227069855`"}], 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.471560001373291`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Index: \"\>", 
   "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 0, "\t hitObj: ", 1, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Parent", "\t X: ", -0.19617117941379547`, 
   "\t Y: ", -0.06102984398603439, "\t Z: ", 0.11073743551969528`, 
   "\t L: ", -0.7828813195228577, "\t M: ", 0.4047832489013672, 
   "\t N: ", -0.47249066829681396`, "\t exr: ", -0.3093225657939911, 
   "\t exi: ", -0.12132731825113297`, "\t eyr: ", -1.0232735872268677`, 
   "\t eyi: ", -0.4013642966747284, "\t ezr: ", -0.3641153573989868, 
   "\t ezi: ", -0.14281900227069855`, "\t Intensity: ", 1.471560001373291, 
   "\t Path Length: ", 0., "\t XYBin: ", 0, "\t LMBin: ", 0, "\t X Normal: ", 
   0., "\t Y Normal: ", 0., "\t Z Normal: ", 0., "\t Index: ", 1., 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342597175107`*^9},ExpressionUUID->"a20e306d-dc4b-47fe-8f6a-\
1eaa72a3bb35"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "1"}],
  SequenceForm["Success! Segment Level: ", 1],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259720503*^9},ExpressionUUID->"81aa6de6-1f54-4a42-b5ca-\
ffcf6614bcd9"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "2", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Reflected\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "4.99730920791626`"}], "\[InvisibleSpace]", "\<\"\\t Y: \"\>",
    "\[InvisibleSpace]", "2.4213645458221436`", 
   "\[InvisibleSpace]", "\<\"\\t Z: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "2.7868831157684326`"}], 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.7828813195228577`"}], 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   "0.4047832489013672`", "\[InvisibleSpace]", "\<\"\\t N: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.47249066829681396`"}], 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.07104576379060745`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   "0.32458168268203735`", "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.23502731323242188`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   "1.0737524032592773`", "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.08363067358732224`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   "0.3820774555206299`", "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", 
   "\[InvisibleSpace]", "1.471560001373291`", 
   "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", "\[InvisibleSpace]", 
   "6.132651329040527`", "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.4725472033023834`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", "\[InvisibleSpace]", 
   "0.22896504402160645`", "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.8510429859161377`"}], 
   "\[InvisibleSpace]", "\<\"\\t Index: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 0, "\t hitObj: ", 2, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Reflected", "\t X: ", -4.99730920791626, "\t Y: ", 
   2.4213645458221436`, "\t Z: ", -2.7868831157684326`, 
   "\t L: ", -0.7828813195228577, "\t M: ", 0.4047832489013672, 
   "\t N: ", -0.47249066829681396`, "\t exr: ", -0.07104576379060745, 
   "\t exi: ", 0.32458168268203735`, "\t eyr: ", -0.23502731323242188`, 
   "\t eyi: ", 1.0737524032592773`, "\t ezr: ", -0.08363067358732224, 
   "\t ezi: ", 0.3820774555206299, "\t Intensity: ", 1.471560001373291, 
   "\t Path Length: ", 6.132651329040527, "\t XYBin: ", 0, "\t LMBin: ", 0, 
   "\t X Normal: ", -0.4725472033023834, "\t Y Normal: ", 
   0.22896504402160645`, "\t Z Normal: ", -0.8510429859161377, "\t Index: ", 
   1., "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259722498*^9},ExpressionUUID->"6806067c-8ac6-461e-a5eb-\
4abaada4b163"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "2"}],
  SequenceForm["Success! Segment Level: ", 2],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342597254896`*^9},ExpressionUUID->"df1d1e8a-47e3-4b16-8975-\
9c02e3dc095d"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "4", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Transmitted\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "3.559807538986206`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y: \"\>", "\[InvisibleSpace]", 
   "2.789030075073242`", "\[InvisibleSpace]", "\<\"\\t Z: \"\>", 
   "\[InvisibleSpace]", "39.`", "\[InvisibleSpace]", "\<\"\\t L: \"\>", 
   "\[InvisibleSpace]", "0.03437911719083786`", 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   "0.008793041110038757`", "\[InvisibleSpace]", "\<\"\\t N: \"\>", 
   "\[InvisibleSpace]", "0.9993701577186584`", 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   "0.007429631892591715`", "\[InvisibleSpace]", "\<\"\\t exi: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.11401625722646713`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.2862209677696228`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "1.1419947147369385`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   "0.0022627536673098803`", "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", 
   "\[InvisibleSpace]", "0.01397018413990736`", 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.3993295431137085`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "41.81321716308594`", 
   "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", "\[InvisibleSpace]", "5641", 
   "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", "\[InvisibleSpace]", "5051", 
   "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Index: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "1.1232389211654663`"}]}],
  SequenceForm[
  "\tParent: ", 1, "\t hitObj: ", 4, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Transmitted", "\t X: ", -3.559807538986206, "\t Y: ", 
   2.789030075073242, "\t Z: ", 39., "\t L: ", 0.03437911719083786, "\t M: ", 
   0.008793041110038757, "\t N: ", 0.9993701577186584, "\t exr: ", 
   0.007429631892591715, "\t exi: ", -0.11401625722646713`, 
   "\t eyr: ", -0.2862209677696228, "\t eyi: ", -1.1419947147369385`, 
   "\t ezr: ", 0.0022627536673098803`, "\t ezi: ", 0.01397018413990736, 
   "\t Intensity: ", 1.3993295431137085`, "\t Path Length: ", 
   41.81321716308594, "\t XYBin: ", 5641, "\t LMBin: ", 5051, "\t X Normal: ",
    0., "\t Y Normal: ", 0., "\t Z Normal: ", 1., "\t Index: ", 1., 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., 
   "\t Phase At: ", -1.1232389211654663`],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342597274837`*^9},ExpressionUUID->"79f9c3f1-6668-4ec8-a169-\
d3aa374f89ec"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "3"}],
  SequenceForm["Success! Segment Level: ", 3],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259730476*^9},ExpressionUUID->"d7ce0c04-81be-4fc0-86f9-\
c2c1d0e7e4bb"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "2", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "5", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Transmitted\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "2.1414904594421387`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y: \"\>", "\[InvisibleSpace]", 
   "3.1517884731292725`", "\[InvisibleSpace]", "\<\"\\t Z: \"\>", 
   "\[InvisibleSpace]", "80.22920989990234`", 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   "0.03437911719083786`", "\[InvisibleSpace]", "\<\"\\t M: \"\>", 
   "\[InvisibleSpace]", "0.008793041110038757`", 
   "\[InvisibleSpace]", "\<\"\\t N: \"\>", "\[InvisibleSpace]", 
   "0.9993701577186584`", "\[InvisibleSpace]", "\<\"\\t exr: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.04598764330148697`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   "0.10459466278553009`", "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.12173986434936523`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   "1.1710054874420166`", "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", 
   "\[InvisibleSpace]", "0.002653149189427495`", 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.013901326805353165`"}], 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.3993295431137085`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "41.25519561767578`", 
   "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.10446294397115707`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.10641681402921677`"}], 
   "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.9888189435005188`"}], 
   "\[InvisibleSpace]", "\<\"\\t Index: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 2, "\t hitObj: ", 5, "\t hitFace: ", 1, "\t insideOf: ", 0, 
   "\t Status: ", "Transmitted", "\t X: ", -2.1414904594421387`, "\t Y: ", 
   3.1517884731292725`, "\t Z: ", 80.22920989990234, "\t L: ", 
   0.03437911719083786, "\t M: ", 0.008793041110038757, "\t N: ", 
   0.9993701577186584, "\t exr: ", -0.04598764330148697, "\t exi: ", 
   0.10459466278553009`, "\t eyr: ", -0.12173986434936523`, "\t eyi: ", 
   1.1710054874420166`, "\t ezr: ", 0.002653149189427495, 
   "\t ezi: ", -0.013901326805353165`, "\t Intensity: ", 1.3993295431137085`, 
   "\t Path Length: ", 41.25519561767578, "\t XYBin: ", 0, "\t LMBin: ", 0, 
   "\t X Normal: ", -0.10446294397115707`, 
   "\t Y Normal: ", -0.10641681402921677`, 
   "\t Z Normal: ", -0.9888189435005188, "\t Index: ", 1., 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259733468*^9},ExpressionUUID->"37bb3d57-b901-48fa-94e7-\
6fcee4a810a3"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "4"}],
  SequenceForm["Success! Segment Level: ", 4],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342597364607`*^9},ExpressionUUID->"9139ef90-1d8c-4836-9869-\
07f26c4e8963"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "3", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "5", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "2", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "5", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Transmitted\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "1.9196434020996094`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y: \"\>", "\[InvisibleSpace]", 
   "3.312757968902588`", "\[InvisibleSpace]", "\<\"\\t Z: \"\>", 
   "\[InvisibleSpace]", "84.`", "\[InvisibleSpace]", "\<\"\\t L: \"\>", 
   "\[InvisibleSpace]", "0.05867822468280792`", 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   "0.042576178908348083`", "\[InvisibleSpace]", "\<\"\\t N: \"\>", 
   "\[InvisibleSpace]", "0.9973686337471008`", 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.10742343962192535`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   "0.03296002000570297`", "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.9617896676063538`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   "0.6771026849746704`", "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", 
   "\[InvisibleSpace]", "0.047377415001392365`", 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.030843641608953476`"}], 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.3993295431137085`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "3.7807374000549316`", 
   "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "1.`"}], "\[InvisibleSpace]", "\<\"\\t Index: \"\>", 
   "\[InvisibleSpace]", "1.524986982345581`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 3, "\t hitObj: ", 5, "\t hitFace: ", 2, "\t insideOf: ", 5, 
   "\t Status: ", "Transmitted", "\t X: ", -1.9196434020996094`, "\t Y: ", 
   3.312757968902588, "\t Z: ", 84., "\t L: ", 0.05867822468280792, "\t M: ", 
   0.042576178908348083`, "\t N: ", 0.9973686337471008, 
   "\t exr: ", -0.10742343962192535`, "\t exi: ", 0.03296002000570297, 
   "\t eyr: ", -0.9617896676063538, "\t eyi: ", 0.6771026849746704, 
   "\t ezr: ", 0.047377415001392365`, "\t ezi: ", -0.030843641608953476`, 
   "\t Intensity: ", 1.3993295431137085`, "\t Path Length: ", 
   3.7807374000549316`, "\t XYBin: ", 0, "\t LMBin: ", 0, "\t X Normal: ", 0.,
    "\t Y Normal: ", 0., "\t Z Normal: ", -1., "\t Index: ", 
   1.524986982345581, "\t Starting Phase: ", 0., "\t Phase Of: ", 0., 
   "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342597384553`*^9},ExpressionUUID->"6efdc480-d690-4d35-9ee9-\
9aef7a77dad2"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "5"}],
  SequenceForm["Success! Segment Level: ", 5],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342597404494`*^9},ExpressionUUID->"aaf001d1-bff6-46f9-805b-\
9dfb202ddacc"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "4", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "6", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Transmitted\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.923078715801239`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y: \"\>", "\[InvisibleSpace]", 
   "4.035852909088135`", "\[InvisibleSpace]", "\<\"\\t Z: \"\>", 
   "\[InvisibleSpace]", "95.0685806274414`", 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   "0.08948352187871933`", "\[InvisibleSpace]", "\<\"\\t M: \"\>", 
   "\[InvisibleSpace]", "0.06492811441421509`", 
   "\[InvisibleSpace]", "\<\"\\t N: \"\>", "\[InvisibleSpace]", 
   "0.9938697218894958`", "\[InvisibleSpace]", "\<\"\\t exr: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.07410874962806702`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.08162041008472443`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "1.0238138437271118`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.575802206993103`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   "0.07355674356222153`", "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", 
   "\[InvisibleSpace]", "0.04496508464217186`", 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.3993295431137085`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "11.13685131072998`", 
   "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.007384629920125008`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", "\[InvisibleSpace]", 
   "0.03228682279586792`", "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.9994513392448425`"}], 
   "\[InvisibleSpace]", "\<\"\\t Index: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 4, "\t hitObj: ", 6, "\t hitFace: ", 1, "\t insideOf: ", 0, 
   "\t Status: ", "Transmitted", "\t X: ", -0.923078715801239, "\t Y: ", 
   4.035852909088135, "\t Z: ", 95.0685806274414, "\t L: ", 
   0.08948352187871933, "\t M: ", 0.06492811441421509, "\t N: ", 
   0.9938697218894958, "\t exr: ", -0.07410874962806702, 
   "\t exi: ", -0.08162041008472443, "\t eyr: ", -1.0238138437271118`, 
   "\t eyi: ", -0.575802206993103, "\t ezr: ", 0.07355674356222153, 
   "\t ezi: ", 0.04496508464217186, "\t Intensity: ", 1.3993295431137085`, 
   "\t Path Length: ", 11.13685131072998, "\t XYBin: ", 0, "\t LMBin: ", 0, 
   "\t X Normal: ", -0.007384629920125008, "\t Y Normal: ", 
   0.03228682279586792, "\t Z Normal: ", -0.9994513392448425, "\t Index: ", 
   1., "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342597434416`*^9},ExpressionUUID->"0d551283-7068-4dcc-91d9-\
80368148873f"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "6"}],
  SequenceForm["Success! Segment Level: ", 6],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342597454357`*^9},ExpressionUUID->"eee6e9b0-bdb3-4772-85a6-\
b9388cdf5638"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "5", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "6", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "2", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "6", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Transmitted\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.3466609716415405`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y: \"\>", "\[InvisibleSpace]", 
   "4.332894802093506`", "\[InvisibleSpace]", "\<\"\\t Z: \"\>", 
   "\[InvisibleSpace]", "104.42440032958984`", 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   "0.06146314740180969`", "\[InvisibleSpace]", "\<\"\\t M: \"\>", 
   "\[InvisibleSpace]", "0.031673457473516464`", 
   "\[InvisibleSpace]", "\<\"\\t N: \"\>", "\[InvisibleSpace]", 
   "0.9976066946983337`", "\[InvisibleSpace]", "\<\"\\t exr: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.028802573680877686`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.10949420183897018`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.6346679925918579`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.9897814989089966`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   "0.021924901753664017`", "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", 
   "\[InvisibleSpace]", "0.03817101567983627`", 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.397227168083191`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "9.378266334533691`", 
   "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", "\[InvisibleSpace]", 
   "0.002773287706077099`", "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.034663159400224686`"}], 
   "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.9993951916694641`"}], 
   "\[InvisibleSpace]", "\<\"\\t Index: \"\>", "\[InvisibleSpace]", 
   "1.5185223817825317`", "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>",
    "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>",
    "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>",
    "\[InvisibleSpace]", "0.`"}],
  SequenceForm[
  "\tParent: ", 5, "\t hitObj: ", 6, "\t hitFace: ", 2, "\t insideOf: ", 6, 
   "\t Status: ", "Transmitted", "\t X: ", -0.3466609716415405, "\t Y: ", 
   4.332894802093506, "\t Z: ", 104.42440032958984`, "\t L: ", 
   0.06146314740180969, "\t M: ", 0.031673457473516464`, "\t N: ", 
   0.9976066946983337, "\t exr: ", -0.028802573680877686`, 
   "\t exi: ", -0.10949420183897018`, "\t eyr: ", -0.6346679925918579, 
   "\t eyi: ", -0.9897814989089966, "\t ezr: ", 0.021924901753664017`, 
   "\t ezi: ", 0.03817101567983627, "\t Intensity: ", 1.397227168083191, 
   "\t Path Length: ", 9.378266334533691, "\t XYBin: ", 0, "\t LMBin: ", 0, 
   "\t X Normal: ", 0.002773287706077099, 
   "\t Y Normal: ", -0.034663159400224686`, 
   "\t Z Normal: ", -0.9993951916694641, "\t Index: ", 1.5185223817825317`, 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259749426*^9},ExpressionUUID->"51487432-6486-4025-8e22-\
e10bf43318a0"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "7"}],
  SequenceForm["Success! Segment Level: ", 7],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342597544117`*^9},ExpressionUUID->"11517de8-a380-45b0-a4b7-\
30c0d1e57d02"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "6", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "7", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Terminated\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   "10.18541145324707`", "\[InvisibleSpace]", "\<\"\\t Y: \"\>", 
   "\[InvisibleSpace]", "7.674077033996582`", 
   "\[InvisibleSpace]", "\<\"\\t Z: \"\>", "\[InvisibleSpace]", "215.`", 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   "0.0947757139801979`", "\[InvisibleSpace]", "\<\"\\t M: \"\>", 
   "\[InvisibleSpace]", "0.030066531151533127`", 
   "\[InvisibleSpace]", "\<\"\\t N: \"\>", "\[InvisibleSpace]", 
   "0.9950445294380188`", "\[InvisibleSpace]", "\<\"\\t exr: \"\>", 
   "\[InvisibleSpace]", "0.09831579774618149`", 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.05581887438893318`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   "0.7943620085716248`", "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.8667919635772705`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.033367007970809937`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   "0.031507838517427444`", "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", 
   "\[InvisibleSpace]", "1.397227168083191`", 
   "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", "\[InvisibleSpace]", 
   "111.12628173828125`", "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", 
   "\[InvisibleSpace]", "7583", "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", 
   "\[InvisibleSpace]", "5360", "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>",
    "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>",
    "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>",
    "\[InvisibleSpace]", "1.`", "\[InvisibleSpace]", "\<\"\\t Index: \"\>", 
   "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "3.142083168029785`"}]}],
  SequenceForm[
  "\tParent: ", 6, "\t hitObj: ", 7, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Terminated", "\t X: ", 10.18541145324707, "\t Y: ", 
   7.674077033996582, "\t Z: ", 215., "\t L: ", 0.0947757139801979, "\t M: ", 
   0.030066531151533127`, "\t N: ", 0.9950445294380188, "\t exr: ", 
   0.09831579774618149, "\t exi: ", -0.05581887438893318, "\t eyr: ", 
   0.7943620085716248, "\t eyi: ", -0.8667919635772705, 
   "\t ezr: ", -0.033367007970809937`, "\t ezi: ", 0.031507838517427444`, 
   "\t Intensity: ", 1.397227168083191, "\t Path Length: ", 
   111.12628173828125`, "\t XYBin: ", 7583, "\t LMBin: ", 5360, 
   "\t X Normal: ", 0., "\t Y Normal: ", 0., "\t Z Normal: ", 1., 
   "\t Index: ", 1., "\t Starting Phase: ", 0., "\t Phase Of: ", 0., 
   "\t Phase At: ", -3.142083168029785],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342597574043`*^9},ExpressionUUID->"3b47c6d0-1681-4c66-a2b9-\
b54ec056408d"],

Cell[BoxData["\<\"\\n\"\>"], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342597623906`*^9},ExpressionUUID->"c8adbd43-a3d5-476d-ac1f-\
4eca903dfaa2"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Ray Number: \"\>", "\[InvisibleSpace]", "7"}],
  SequenceForm["Success! Ray Number: ", 7],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259764385*^9},ExpressionUUID->"6beb98bb-59d7-4329-8da8-\
cc2711eb71a4"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tWave Index: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t Ray Wavelength: \"\>", "\[InvisibleSpace]", 
   "0.550000011920929`", 
   "\[InvisibleSpace]", "\<\"\\t Number of segments: \"\>", 
   "\[InvisibleSpace]", "8"}],
  SequenceForm[
  "\tWave Index: ", 1, "\t Ray Wavelength: ", 0.550000011920929, 
   "\t Number of segments: ", 8],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342597663794`*^9},ExpressionUUID->"93e3d163-dff0-4285-b50b-\
7edbd871d21c"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "0"}],
  SequenceForm["Success! Segment Level: ", 0],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342597683764`*^9},ExpressionUUID->"b6e064ab-50e0-4ba8-93a4-\
22fd16dab8bf"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Parent\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   "0.15866033732891083`", "\[InvisibleSpace]", "\<\"\\t Y: \"\>", 
   "\[InvisibleSpace]", "0.13352684676647186`", 
   "\[InvisibleSpace]", "\<\"\\t Z: \"\>", "\[InvisibleSpace]", 
   "0.06376883387565613`", "\[InvisibleSpace]", "\<\"\\t L: \"\>", 
   "\[InvisibleSpace]", "0.7510417699813843`", 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.02587266080081463`"}], 
   "\[InvisibleSpace]", "\<\"\\t N: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.6597475409507751`"}], 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   "0.6579155921936035`", "\[InvisibleSpace]", "\<\"\\t exi: \"\>", 
   "\[InvisibleSpace]", "0.18157927691936493`", 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.5821483731269836`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.16066814959049225`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   "0.7717857956886292`", "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", 
   "\[InvisibleSpace]", "0.21300652623176575`", 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.471560001373291`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Index: \"\>", 
   "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 0, "\t hitObj: ", 1, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Parent", "\t X: ", 0.15866033732891083`, "\t Y: ", 
   0.13352684676647186`, "\t Z: ", 0.06376883387565613, "\t L: ", 
   0.7510417699813843, "\t M: ", -0.02587266080081463, 
   "\t N: ", -0.6597475409507751, "\t exr: ", 0.6579155921936035, "\t exi: ", 
   0.18157927691936493`, "\t eyr: ", -0.5821483731269836, 
   "\t eyi: ", -0.16066814959049225`, "\t ezr: ", 0.7717857956886292, 
   "\t ezi: ", 0.21300652623176575`, "\t Intensity: ", 1.471560001373291, 
   "\t Path Length: ", 0., "\t XYBin: ", 0, "\t LMBin: ", 0, "\t X Normal: ", 
   0., "\t Y Normal: ", 0., "\t Z Normal: ", 0., "\t Index: ", 1., 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259771366*^9},ExpressionUUID->"fb0847d7-bdaf-467d-a70d-\
fb4f3f29d804"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "1"}],
  SequenceForm["Success! Segment Level: ", 1],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259773361*^9},ExpressionUUID->"da07dbe1-fd7b-4248-b613-\
bc83d2204359"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "2", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Reflected\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   "4.225012302398682`", "\[InvisibleSpace]", "\<\"\\t Y: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.006555039435625076`"}], 
   "\[InvisibleSpace]", "\<\"\\t Z: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "3.5082905292510986`"}], 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   "0.7510417699813843`", "\[InvisibleSpace]", "\<\"\\t M: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.02587266080081463`"}], 
   "\[InvisibleSpace]", "\<\"\\t N: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.6597475409507751`"}], 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   "0.5364313721656799`", "\[InvisibleSpace]", "\<\"\\t exi: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.4219778776168823`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.47465458512306213`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   "0.3733818531036377`", "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", 
   "\[InvisibleSpace]", "0.6292754411697388`", 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.49501267075538635`"}], 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.471560001373291`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "5.414281845092773`", 
   "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", "\[InvisibleSpace]", 
   "0.42495012283325195`", "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.0006593033322133124`"}], 
   "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.9052165150642395`"}], 
   "\[InvisibleSpace]", "\<\"\\t Index: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 0, "\t hitObj: ", 2, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Reflected", "\t X: ", 4.225012302398682, 
   "\t Y: ", -0.006555039435625076, "\t Z: ", -3.5082905292510986`, "\t L: ", 
   0.7510417699813843, "\t M: ", -0.02587266080081463, 
   "\t N: ", -0.6597475409507751, "\t exr: ", 0.5364313721656799, 
   "\t exi: ", -0.4219778776168823, "\t eyr: ", -0.47465458512306213`, 
   "\t eyi: ", 0.3733818531036377, "\t ezr: ", 0.6292754411697388, 
   "\t ezi: ", -0.49501267075538635`, "\t Intensity: ", 1.471560001373291, 
   "\t Path Length: ", 5.414281845092773, "\t XYBin: ", 0, "\t LMBin: ", 0, 
   "\t X Normal: ", 0.42495012283325195`, 
   "\t Y Normal: ", -0.0006593033322133124, 
   "\t Z Normal: ", -0.9052165150642395, "\t Index: ", 1., 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259776353*^9},ExpressionUUID->"2c8d5fd7-042e-406d-bcbb-\
d5a26d65b4e9"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "2"}],
  SequenceForm["Success! Segment Level: ", 2],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259778348*^9},ExpressionUUID->"bcb91f88-d3be-4ceb-a4be-\
717a1b57740f"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "4", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Transmitted\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   "3.0426559448242188`", "\[InvisibleSpace]", "\<\"\\t Y: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "1.0557172298431396`"}], 
   "\[InvisibleSpace]", "\<\"\\t Z: \"\>", "\[InvisibleSpace]", "39.`", 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.02779551036655903`"}], 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.02466430701315403`"}], 
   "\[InvisibleSpace]", "\<\"\\t N: \"\>", "\[InvisibleSpace]", 
   "0.9993093013763428`", "\[InvisibleSpace]", "\<\"\\t exr: \"\>", 
   "\[InvisibleSpace]", "0.7230742573738098`", 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   "0.719630241394043`", "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.3980330228805542`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.4341157376766205`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   "0.010288114659488201`", "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", 
   "\[InvisibleSpace]", "0.009301749989390373`", 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.387783169746399`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "42.53767013549805`", 
   "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", "\[InvisibleSpace]", "4756", 
   "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", "\[InvisibleSpace]", "4949", 
   "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Index: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "3.681567907333374`"}]}],
  SequenceForm[
  "\tParent: ", 1, "\t hitObj: ", 4, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Transmitted", "\t X: ", 3.0426559448242188`, 
   "\t Y: ", -1.0557172298431396`, "\t Z: ", 39., 
   "\t L: ", -0.02779551036655903, "\t M: ", -0.02466430701315403, "\t N: ", 
   0.9993093013763428, "\t exr: ", 0.7230742573738098, "\t exi: ", 
   0.719630241394043, "\t eyr: ", -0.3980330228805542, 
   "\t eyi: ", -0.4341157376766205, "\t ezr: ", 0.010288114659488201`, 
   "\t ezi: ", 0.009301749989390373, "\t Intensity: ", 1.387783169746399, 
   "\t Path Length: ", 42.53767013549805, "\t XYBin: ", 4756, "\t LMBin: ", 
   4949, "\t X Normal: ", 0., "\t Y Normal: ", 0., "\t Z Normal: ", 1., 
   "\t Index: ", 1., "\t Starting Phase: ", 0., "\t Phase Of: ", 0., 
   "\t Phase At: ", -3.681567907333374],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259780343*^9},ExpressionUUID->"6c598412-81f3-4d7d-b309-\
a545231de3e1"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "3"}],
  SequenceForm["Success! Segment Level: ", 3],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342597833347`*^9},ExpressionUUID->"f01b7ce8-dd6d-4ab8-8cac-\
931931e92551"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "2", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "5", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Transmitted\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   "1.8968724012374878`", "\[InvisibleSpace]", "\<\"\\t Y: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "2.0724267959594727`"}], 
   "\[InvisibleSpace]", "\<\"\\t Z: \"\>", "\[InvisibleSpace]", 
   "80.19342803955078`", "\[InvisibleSpace]", "\<\"\\t L: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.02779551036655903`"}], 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.02466430701315403`"}], 
   "\[InvisibleSpace]", "\<\"\\t N: \"\>", "\[InvisibleSpace]", 
   "0.9993093013763428`", "\[InvisibleSpace]", "\<\"\\t exr: \"\>", 
   "\[InvisibleSpace]", "0.20202550292015076`", 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   "0.9999448657035828`", "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.09012935310602188`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.5820338726043701`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   "0.003394768573343754`", "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", 
   "\[InvisibleSpace]", "0.013447803445160389`", 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.387783169746399`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "41.22189712524414`", 
   "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", "\[InvisibleSpace]", 
   "0.09253036230802536`", "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.10109399259090424`"}], 
   "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.9905645847320557`"}], 
   "\[InvisibleSpace]", "\<\"\\t Index: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 2, "\t hitObj: ", 5, "\t hitFace: ", 1, "\t insideOf: ", 0, 
   "\t Status: ", "Transmitted", "\t X: ", 1.8968724012374878`, 
   "\t Y: ", -2.0724267959594727`, "\t Z: ", 80.19342803955078, 
   "\t L: ", -0.02779551036655903, "\t M: ", -0.02466430701315403, "\t N: ", 
   0.9993093013763428, "\t exr: ", 0.20202550292015076`, "\t exi: ", 
   0.9999448657035828, "\t eyr: ", -0.09012935310602188, 
   "\t eyi: ", -0.5820338726043701, "\t ezr: ", 0.003394768573343754, 
   "\t ezi: ", 0.013447803445160389`, "\t Intensity: ", 1.387783169746399, 
   "\t Path Length: ", 41.22189712524414, "\t XYBin: ", 0, "\t LMBin: ", 0, 
   "\t X Normal: ", 0.09253036230802536, 
   "\t Y Normal: ", -0.10109399259090424`, 
   "\t Z Normal: ", -0.9905645847320557, "\t Index: ", 1., 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342597853293`*^9},ExpressionUUID->"e0199dd5-edeb-4547-8962-\
f3ffbc5d11c8"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "4"}],
  SequenceForm["Success! Segment Level: ", 4],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342597883215`*^9},ExpressionUUID->"481fc584-e467-4483-b1ee-\
963f3e28a333"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "3", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "5", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "2", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "5", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Transmitted\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   "1.7051562070846558`", "\[InvisibleSpace]", "\<\"\\t Y: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "2.0005340576171875`"}], 
   "\[InvisibleSpace]", "\<\"\\t Z: \"\>", "\[InvisibleSpace]", "84.`", 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.05029180273413658`"}], 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   "0.01885923184454441`", "\[InvisibleSpace]", "\<\"\\t N: \"\>", 
   "\[InvisibleSpace]", "0.9985564947128296`", 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.9883280992507935`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   "0.24503862857818604`", "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", 
   "\[InvisibleSpace]", "0.5776861906051636`", 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.11546248197555542`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.060687124729156494`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   "0.014521931298077106`", "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", 
   "\[InvisibleSpace]", "1.387783169746399`", 
   "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", "\[InvisibleSpace]", 
   "3.8120760917663574`", "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", 
   "\[InvisibleSpace]", "1.`", "\[InvisibleSpace]", "\<\"\\t Index: \"\>", 
   "\[InvisibleSpace]", "1.524986982345581`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 3, "\t hitObj: ", 5, "\t hitFace: ", 2, "\t insideOf: ", 5, 
   "\t Status: ", "Transmitted", "\t X: ", 1.7051562070846558`, 
   "\t Y: ", -2.0005340576171875`, "\t Z: ", 84., 
   "\t L: ", -0.05029180273413658, "\t M: ", 0.01885923184454441, "\t N: ", 
   0.9985564947128296, "\t exr: ", -0.9883280992507935, "\t exi: ", 
   0.24503862857818604`, "\t eyr: ", 0.5776861906051636, 
   "\t eyi: ", -0.11546248197555542`, "\t ezr: ", -0.060687124729156494`, 
   "\t ezi: ", 0.014521931298077106`, "\t Intensity: ", 1.387783169746399, 
   "\t Path Length: ", 3.8120760917663574`, "\t XYBin: ", 0, "\t LMBin: ", 0, 
   "\t X Normal: ", 0., "\t Y Normal: ", 0., "\t Z Normal: ", 1., 
   "\t Index: ", 1.524986982345581, "\t Starting Phase: ", 0., 
   "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259790316*^9},ExpressionUUID->"78999988-1281-4858-ad73-\
facf55773889"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "5"}],
  SequenceForm["Success! Segment Level: ", 5],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259794306*^9},ExpressionUUID->"809e2230-1071-4d27-a042-\
9f4a165aec93"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "4", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "6", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Transmitted\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   "0.8575760722160339`", "\[InvisibleSpace]", "\<\"\\t Y: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "1.682694673538208`"}], 
   "\[InvisibleSpace]", "\<\"\\t Z: \"\>", "\[InvisibleSpace]", 
   "95.01426696777344`", "\[InvisibleSpace]", "\<\"\\t L: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.07669433951377869`"}], 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   "0.02876008301973343`", "\[InvisibleSpace]", "\<\"\\t N: \"\>", 
   "\[InvisibleSpace]", "0.9966397881507874`", 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   "1.0161662101745605`", "\[InvisibleSpace]", "\<\"\\t exi: \"\>", 
   "\[InvisibleSpace]", "0.0009820539271458983`", 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.5876866579055786`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.027520187199115753`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   "0.09515586495399475`", "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", 
   "\[InvisibleSpace]", "0.0008697233279235661`", 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.387783169746399`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "11.051403999328613`", 
   "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", "\[InvisibleSpace]", 
   "0.006860608235001564`", "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.01346155721694231`"}], 
   "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.9998858571052551`"}], 
   "\[InvisibleSpace]", "\<\"\\t Index: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 4, "\t hitObj: ", 6, "\t hitFace: ", 1, "\t insideOf: ", 0, 
   "\t Status: ", "Transmitted", "\t X: ", 0.8575760722160339, 
   "\t Y: ", -1.682694673538208, "\t Z: ", 95.01426696777344, 
   "\t L: ", -0.07669433951377869, "\t M: ", 0.02876008301973343, "\t N: ", 
   0.9966397881507874, "\t exr: ", 1.0161662101745605`, "\t exi: ", 
   0.0009820539271458983, "\t eyr: ", -0.5876866579055786, 
   "\t eyi: ", -0.027520187199115753`, "\t ezr: ", 0.09515586495399475, 
   "\t ezi: ", 0.0008697233279235661, "\t Intensity: ", 1.387783169746399, 
   "\t Path Length: ", 11.051403999328613`, "\t XYBin: ", 0, "\t LMBin: ", 0, 
   "\t X Normal: ", 0.006860608235001564, 
   "\t Y Normal: ", -0.01346155721694231, 
   "\t Z Normal: ", -0.9998858571052551, "\t Index: ", 1., 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342597963*^9},ExpressionUUID->"c1197053-dba8-4f43-a4d2-df85e430b56a"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "6"}],
  SequenceForm["Success! Segment Level: ", 6],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342597992916`*^9},ExpressionUUID->"ca68e93c-6cd9-41fa-ad18-\
50227a71a280"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "5", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "6", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "2", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "6", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Transmitted\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   "0.3558677136898041`", "\[InvisibleSpace]", "\<\"\\t Y: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "1.4592013359069824`"}], 
   "\[InvisibleSpace]", "\<\"\\t Z: \"\>", "\[InvisibleSpace]", 
   "104.49097442626953`", "\[InvisibleSpace]", "\<\"\\t L: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.05285251513123512`"}], 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   "0.023543933406472206`", "\[InvisibleSpace]", "\<\"\\t N: \"\>", 
   "\[InvisibleSpace]", "0.9983247518539429`", 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.7415990233421326`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   "0.6961807012557983`", "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", 
   "\[InvisibleSpace]", "0.44711893796920776`", 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.38279855251312256`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.04980574920773506`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   "0.045884352177381516`", "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", 
   "\[InvisibleSpace]", "1.385672688484192`", 
   "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", "\[InvisibleSpace]", 
   "9.492609977722168`", "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.0028469418175518513`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", "\[InvisibleSpace]", 
   "0.011673610657453537`", "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.999927818775177`"}], 
   "\[InvisibleSpace]", "\<\"\\t Index: \"\>", "\[InvisibleSpace]", 
   "1.5185223817825317`", "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>",
    "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>",
    "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>",
    "\[InvisibleSpace]", "0.`"}],
  SequenceForm[
  "\tParent: ", 5, "\t hitObj: ", 6, "\t hitFace: ", 2, "\t insideOf: ", 6, 
   "\t Status: ", "Transmitted", "\t X: ", 0.3558677136898041, 
   "\t Y: ", -1.4592013359069824`, "\t Z: ", 104.49097442626953`, 
   "\t L: ", -0.05285251513123512, "\t M: ", 0.023543933406472206`, "\t N: ", 
   0.9983247518539429, "\t exr: ", -0.7415990233421326, "\t exi: ", 
   0.6961807012557983, "\t eyr: ", 0.44711893796920776`, 
   "\t eyi: ", -0.38279855251312256`, "\t ezr: ", -0.04980574920773506, 
   "\t ezi: ", 0.045884352177381516`, "\t Intensity: ", 1.385672688484192, 
   "\t Path Length: ", 9.492609977722168, "\t XYBin: ", 0, "\t LMBin: ", 0, 
   "\t X Normal: ", -0.0028469418175518513`, "\t Y Normal: ", 
   0.011673610657453537`, "\t Z Normal: ", -0.999927818775177, "\t Index: ", 
   1.5185223817825317`, "\t Starting Phase: ", 0., "\t Phase Of: ", 0., 
   "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342598012867`*^9},ExpressionUUID->"6f62afb6-b888-4994-8d52-\
adc1dc3592c2"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "7"}],
  SequenceForm["Success! Segment Level: ", 7],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259803282*^9},ExpressionUUID->"2dfa231f-0684-4483-8a3e-\
963599700372"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "6", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "7", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Terminated\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "8.715328216552734`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y: \"\>", "\[InvisibleSpace]", 
   "3.1824538707733154`", "\[InvisibleSpace]", "\<\"\\t Z: \"\>", 
   "\[InvisibleSpace]", "215.`", "\[InvisibleSpace]", "\<\"\\t L: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.08173882216215134`"}], 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   "0.041825070977211`", "\[InvisibleSpace]", "\<\"\\t N: \"\>", 
   "\[InvisibleSpace]", "0.9957758188247681`", 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.9960716366767883`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.19226552546024323`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   "0.5709277391433716`", "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", 
   "\[InvisibleSpace]", "0.13763299584388733`", 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.10574349761009216`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.021563155576586723`"}], 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.385672688484192`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "110.97781372070312`", 
   "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", "\[InvisibleSpace]", "6020", 
   "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", "\[InvisibleSpace]", "5440", 
   "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Index: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "3.203423261642456`"}]}],
  SequenceForm[
  "\tParent: ", 6, "\t hitObj: ", 7, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Terminated", "\t X: ", -8.715328216552734, "\t Y: ", 
   3.1824538707733154`, "\t Z: ", 215., "\t L: ", -0.08173882216215134, 
   "\t M: ", 0.041825070977211, "\t N: ", 0.9957758188247681, 
   "\t exr: ", -0.9960716366767883, "\t exi: ", -0.19226552546024323`, 
   "\t eyr: ", 0.5709277391433716, "\t eyi: ", 0.13763299584388733`, 
   "\t ezr: ", -0.10574349761009216`, "\t ezi: ", -0.021563155576586723`, 
   "\t Intensity: ", 1.385672688484192, "\t Path Length: ", 
   110.97781372070312`, "\t XYBin: ", 6020, "\t LMBin: ", 5440, 
   "\t X Normal: ", 0., "\t Y Normal: ", 0., "\t Z Normal: ", 1., 
   "\t Index: ", 1., "\t Starting Phase: ", 0., "\t Phase Of: ", 0., 
   "\t Phase At: ", -3.203423261642456],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342598062735`*^9},ExpressionUUID->"128733fc-8de3-4e2b-94b7-\
79385b71cbc2"],

Cell[BoxData["\<\"\\n\"\>"], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342598095093`*^9},ExpressionUUID->"c9adceb6-bf6d-435e-8953-\
020ba7943396"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Ray Number: \"\>", "\[InvisibleSpace]", "8"}],
  SequenceForm["Success! Ray Number: ", 8],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342598105063`*^9},ExpressionUUID->"b781ed44-0125-4556-af9e-\
314d8f1b4012"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tWave Index: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t Ray Wavelength: \"\>", "\[InvisibleSpace]", 
   "0.550000011920929`", 
   "\[InvisibleSpace]", "\<\"\\t Number of segments: \"\>", 
   "\[InvisibleSpace]", "2"}],
  SequenceForm[
  "\tWave Index: ", 1, "\t Ray Wavelength: ", 0.550000011920929, 
   "\t Number of segments: ", 2],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342598125005`*^9},ExpressionUUID->"087d12b5-e927-4dab-a926-\
ca113f9d4636"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "0"}],
  SequenceForm["Success! Segment Level: ", 0],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259814495*^9},ExpressionUUID->"04f43629-0146-46ba-a1e5-\
0391ed1f67c3"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Parent\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.18575063347816467`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y: \"\>", "\[InvisibleSpace]", 
   "0.11872084438800812`", "\[InvisibleSpace]", "\<\"\\t Z: \"\>", 
   "\[InvisibleSpace]", "0.17813684046268463`", 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   "0.14291921257972717`", "\[InvisibleSpace]", "\<\"\\t M: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.1499152034521103`"}], 
   "\[InvisibleSpace]", "\<\"\\t N: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.9783146381378174`"}], 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.04443391039967537`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.9427794814109802`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   "0.03391958400607109`", "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", 
   "\[InvisibleSpace]", "0.7196910977363586`", 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.011689001694321632`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.24801218509674072`"}], 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.471560001373291`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Index: \"\>", 
   "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 0, "\t hitObj: ", 1, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Parent", "\t X: ", -0.18575063347816467`, "\t Y: ", 
   0.11872084438800812`, "\t Z: ", 0.17813684046268463`, "\t L: ", 
   0.14291921257972717`, "\t M: ", -0.1499152034521103, 
   "\t N: ", -0.9783146381378174, "\t exr: ", -0.04443391039967537, 
   "\t exi: ", -0.9427794814109802, "\t eyr: ", 0.03391958400607109, 
   "\t eyi: ", 0.7196910977363586, "\t ezr: ", -0.011689001694321632`, 
   "\t ezi: ", -0.24801218509674072`, "\t Intensity: ", 1.471560001373291, 
   "\t Path Length: ", 0., "\t XYBin: ", 0, "\t LMBin: ", 0, "\t X Normal: ", 
   0., "\t Y Normal: ", 0., "\t Z Normal: ", 0., "\t Index: ", 1., 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259817487*^9},ExpressionUUID->"41169f23-e8a8-470d-ab4c-\
886df6b53d18"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "1"}],
  SequenceForm["Success! Segment Level: ", 1],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259819482*^9},ExpressionUUID->"480d75df-8150-40cf-9c8c-\
5f59b0294263"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Terminated\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   "2.9513261318206787`", "\[InvisibleSpace]", "\<\"\\t Y: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "3.1719179153442383`"}], 
   "\[InvisibleSpace]", "\<\"\\t Z: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "21.295869827270508`"}], 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   "0.14291921257972717`", "\[InvisibleSpace]", "\<\"\\t M: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.1499152034521103`"}], 
   "\[InvisibleSpace]", "\<\"\\t N: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.9783146381378174`"}], 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.04443391039967537`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.9427794814109802`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   "0.03391958400607109`", "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", 
   "\[InvisibleSpace]", "0.7196910977363586`", 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.011689001694321632`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.24801218509674072`"}], 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.471560001373291`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Index: \"\>", 
   "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 0, "\t hitObj: ", 0, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Terminated", "\t X: ", 2.9513261318206787`, 
   "\t Y: ", -3.1719179153442383`, "\t Z: ", -21.295869827270508`, "\t L: ", 
   0.14291921257972717`, "\t M: ", -0.1499152034521103, 
   "\t N: ", -0.9783146381378174, "\t exr: ", -0.04443391039967537, 
   "\t exi: ", -0.9427794814109802, "\t eyr: ", 0.03391958400607109, 
   "\t eyi: ", 0.7196910977363586, "\t ezr: ", -0.011689001694321632`, 
   "\t ezi: ", -0.24801218509674072`, "\t Intensity: ", 1.471560001373291, 
   "\t Path Length: ", 0., "\t XYBin: ", 0, "\t LMBin: ", 0, "\t X Normal: ", 
   0., "\t Y Normal: ", 0., "\t Z Normal: ", 0., "\t Index: ", 1., 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342598224735`*^9},ExpressionUUID->"8e188458-75ef-48d0-bd37-\
d1cdb963f317"],

Cell[BoxData["\<\"\\n\"\>"], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259825494*^9},ExpressionUUID->"fc9707bc-28dd-44bc-855b-\
d016d9c3a684"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Ray Number: \"\>", "\[InvisibleSpace]", "9"}],
  SequenceForm["Success! Ray Number: ", 9],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259827462*^9},ExpressionUUID->"b82d5ecc-a2c3-40e6-956f-\
7f4c4cadb4ba"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tWave Index: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t Ray Wavelength: \"\>", "\[InvisibleSpace]", 
   "0.550000011920929`", 
   "\[InvisibleSpace]", "\<\"\\t Number of segments: \"\>", 
   "\[InvisibleSpace]", "2"}],
  SequenceForm[
  "\tWave Index: ", 1, "\t Ray Wavelength: ", 0.550000011920929, 
   "\t Number of segments: ", 2],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342598294554`*^9},ExpressionUUID->"4fc117d0-0f98-4299-9b31-\
248bd9ccd614"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "0"}],
  SequenceForm["Success! Segment Level: ", 0],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342598314495`*^9},ExpressionUUID->"c156c3ea-1f52-468e-bed7-\
4c58c0e483a2"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Parent\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.0025897803716361523`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y: \"\>", "\[InvisibleSpace]", 
   "0.20548968017101288`", "\[InvisibleSpace]", "\<\"\\t Z: \"\>", 
   "\[InvisibleSpace]", "0.06489501148462296`", 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.02244577556848526`"}], 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.7042453289031982`"}], 
   "\[InvisibleSpace]", "\<\"\\t N: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.7096017599105835`"}], 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.7162365317344666`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.5447170734405518`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.44814637303352356`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.3408273160457611`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   "0.46741920709609985`", "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", 
   "\[InvisibleSpace]", "0.35548481345176697`", 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.471560001373291`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Index: \"\>", 
   "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 0, "\t hitObj: ", 1, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Parent", "\t X: ", -0.0025897803716361523`, "\t Y: ", 
   0.20548968017101288`, "\t Z: ", 0.06489501148462296, 
   "\t L: ", -0.02244577556848526, "\t M: ", -0.7042453289031982, 
   "\t N: ", -0.7096017599105835, "\t exr: ", -0.7162365317344666, 
   "\t exi: ", -0.5447170734405518, "\t eyr: ", -0.44814637303352356`, 
   "\t eyi: ", -0.3408273160457611, "\t ezr: ", 0.46741920709609985`, 
   "\t ezi: ", 0.35548481345176697`, "\t Intensity: ", 1.471560001373291, 
   "\t Path Length: ", 0., "\t XYBin: ", 0, "\t LMBin: ", 0, "\t X Normal: ", 
   0., "\t Y Normal: ", 0., "\t Z Normal: ", 0., "\t Index: ", 1., 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342598334446`*^9},ExpressionUUID->"c1f39bdc-6cb7-4f36-b3ed-\
79089fbcee82"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "1"}],
  SequenceForm["Success! Segment Level: ", 1],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259835439*^9},ExpressionUUID->"26970e83-cce4-4d9b-b4da-\
86e8c210c269"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Terminated\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.4952745735645294`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "15.25269603729248`"}], 
   "\[InvisibleSpace]", "\<\"\\t Z: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "15.5108642578125`"}], "\[InvisibleSpace]", "\<\"\\t L: \"\>",
    "\[InvisibleSpace]", 
   RowBox[{"-", "0.02244577556848526`"}], 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.7042453289031982`"}], 
   "\[InvisibleSpace]", "\<\"\\t N: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.7096017599105835`"}], 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.7162365317344666`"}], 
   "\[InvisibleSpace]", "\<\"\\t exi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.5447170734405518`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.44814637303352356`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.3408273160457611`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   "0.46741920709609985`", "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", 
   "\[InvisibleSpace]", "0.35548481345176697`", 
   "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", "\[InvisibleSpace]", 
   "1.471560001373291`", "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", 
   "\[InvisibleSpace]", "0", "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", 
   "\[InvisibleSpace]", "0.`", "\[InvisibleSpace]", "\<\"\\t Index: \"\>", 
   "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 0, "\t hitObj: ", 0, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Terminated", "\t X: ", -0.4952745735645294, 
   "\t Y: ", -15.25269603729248, "\t Z: ", -15.5108642578125, 
   "\t L: ", -0.02244577556848526, "\t M: ", -0.7042453289031982, 
   "\t N: ", -0.7096017599105835, "\t exr: ", -0.7162365317344666, 
   "\t exi: ", -0.5447170734405518, "\t eyr: ", -0.44814637303352356`, 
   "\t eyi: ", -0.3408273160457611, "\t ezr: ", 0.46741920709609985`, 
   "\t ezi: ", 0.35548481345176697`, "\t Intensity: ", 1.471560001373291, 
   "\t Path Length: ", 0., "\t XYBin: ", 0, "\t LMBin: ", 0, "\t X Normal: ", 
   0., "\t Y Normal: ", 0., "\t Z Normal: ", 0., "\t Index: ", 1., 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342598384323`*^9},ExpressionUUID->"55411b17-28b0-43a6-9b69-\
20f3c7391300"],

Cell[BoxData["\<\"\\n\"\>"], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259841423*^9},ExpressionUUID->"b1e08f1c-01c1-48ac-b33b-\
3e8ed33d7ea2"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Ray Number: \"\>", "\[InvisibleSpace]", "10"}],
  SequenceForm["Success! Ray Number: ", 10],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342598444166`*^9},ExpressionUUID->"3b2634a5-79c7-4cab-bbb4-\
fc420c001b5f"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tWave Index: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t Ray Wavelength: \"\>", "\[InvisibleSpace]", 
   "0.550000011920929`", 
   "\[InvisibleSpace]", "\<\"\\t Number of segments: \"\>", 
   "\[InvisibleSpace]", "2"}],
  SequenceForm[
  "\tWave Index: ", 1, "\t Ray Wavelength: ", 0.550000011920929, 
   "\t Number of segments: ", 2],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342598464103`*^9},ExpressionUUID->"949c79b8-a9b5-4115-8478-\
4c0e90521971"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "0"}],
  SequenceForm["Success! Segment Level: ", 0],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259848405*^9},ExpressionUUID->"cb061b8d-ee4f-489f-bff8-\
71319b60a6fc"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "1", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Parent\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   "0.16386178135871887`", "\[InvisibleSpace]", "\<\"\\t Y: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.13407456874847412`"}], 
   "\[InvisibleSpace]", "\<\"\\t Z: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.15070657432079315`"}], 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.6365246772766113`"}], 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.3221965432167053`"}], 
   "\[InvisibleSpace]", "\<\"\\t N: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.7007322311401367`"}], 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   "0.2537457048892975`", "\[InvisibleSpace]", "\<\"\\t exi: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.8543739914894104`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   "0.007965155877172947`", "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.02681906521320343`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.23415756225585938`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   "0.788419783115387`", "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", 
   "\[InvisibleSpace]", "1.471560001373291`", 
   "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", "\[InvisibleSpace]", 
   "0", "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Index: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 0, "\t hitObj: ", 1, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Parent", "\t X: ", 0.16386178135871887`, 
   "\t Y: ", -0.13407456874847412`, "\t Z: ", -0.15070657432079315`, 
   "\t L: ", -0.6365246772766113, "\t M: ", -0.3221965432167053, 
   "\t N: ", -0.7007322311401367, "\t exr: ", 0.2537457048892975, 
   "\t exi: ", -0.8543739914894104, "\t eyr: ", 0.007965155877172947, 
   "\t eyi: ", -0.02681906521320343, "\t ezr: ", -0.23415756225585938`, 
   "\t ezi: ", 0.788419783115387, "\t Intensity: ", 1.471560001373291, 
   "\t Path Length: ", 0., "\t XYBin: ", 0, "\t LMBin: ", 0, "\t X Normal: ", 
   0., "\t Y Normal: ", 0., "\t Z Normal: ", 0., "\t Index: ", 1., 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342598513966`*^9},ExpressionUUID->"ecfd5a58-9a3f-4fc8-8f71-\
c6928e599acc"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"Success! Segment Level: \"\>", "\[InvisibleSpace]", "1"}],
  SequenceForm["Success! Segment Level: ", 1],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342598533916`*^9},ExpressionUUID->"3d7960fe-c2ca-4e6b-a33b-\
59b8d692cf2a"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"\\tParent: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t hitObj: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t hitFace: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t insideOf: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t Status: \"\>", 
   "\[InvisibleSpace]", "\<\"Terminated\"\>", 
   "\[InvisibleSpace]", "\<\"\\t X: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "13.807855606079102`"}], 
   "\[InvisibleSpace]", "\<\"\\t Y: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "7.206288814544678`"}], 
   "\[InvisibleSpace]", "\<\"\\t Z: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "15.531779289245605`"}], 
   "\[InvisibleSpace]", "\<\"\\t L: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.6365246772766113`"}], 
   "\[InvisibleSpace]", "\<\"\\t M: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.3221965432167053`"}], 
   "\[InvisibleSpace]", "\<\"\\t N: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.7007322311401367`"}], 
   "\[InvisibleSpace]", "\<\"\\t exr: \"\>", "\[InvisibleSpace]", 
   "0.2537457048892975`", "\[InvisibleSpace]", "\<\"\\t exi: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.8543739914894104`"}], 
   "\[InvisibleSpace]", "\<\"\\t eyr: \"\>", "\[InvisibleSpace]", 
   "0.007965155877172947`", "\[InvisibleSpace]", "\<\"\\t eyi: \"\>", 
   "\[InvisibleSpace]", 
   RowBox[{"-", "0.02681906521320343`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezr: \"\>", "\[InvisibleSpace]", 
   RowBox[{"-", "0.23415756225585938`"}], 
   "\[InvisibleSpace]", "\<\"\\t ezi: \"\>", "\[InvisibleSpace]", 
   "0.788419783115387`", "\[InvisibleSpace]", "\<\"\\t Intensity: \"\>", 
   "\[InvisibleSpace]", "1.471560001373291`", 
   "\[InvisibleSpace]", "\<\"\\t Path Length: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t XYBin: \"\>", "\[InvisibleSpace]", 
   "0", "\[InvisibleSpace]", "\<\"\\t LMBin: \"\>", "\[InvisibleSpace]", "0", 
   "\[InvisibleSpace]", "\<\"\\t X Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Y Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Z Normal: \"\>", "\[InvisibleSpace]", "0.`", 
   "\[InvisibleSpace]", "\<\"\\t Index: \"\>", "\[InvisibleSpace]", "1.`", 
   "\[InvisibleSpace]", "\<\"\\t Starting Phase: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase Of: \"\>", "\[InvisibleSpace]", 
   "0.`", "\[InvisibleSpace]", "\<\"\\t Phase At: \"\>", "\[InvisibleSpace]", 
   "0.`"}],
  SequenceForm[
  "\tParent: ", 0, "\t hitObj: ", 0, "\t hitFace: ", 0, "\t insideOf: ", 0, 
   "\t Status: ", "Terminated", "\t X: ", -13.807855606079102`, 
   "\t Y: ", -7.206288814544678, "\t Z: ", -15.531779289245605`, 
   "\t L: ", -0.6365246772766113, "\t M: ", -0.3221965432167053, 
   "\t N: ", -0.7007322311401367, "\t exr: ", 0.2537457048892975, 
   "\t exi: ", -0.8543739914894104, "\t eyr: ", 0.007965155877172947, 
   "\t eyi: ", -0.02681906521320343, "\t ezr: ", -0.23415756225585938`, 
   "\t ezi: ", 0.788419783115387, "\t Intensity: ", 1.471560001373291, 
   "\t Path Length: ", 0., "\t XYBin: ", 0, "\t LMBin: ", 0, "\t X Normal: ", 
   0., "\t Y Normal: ", 0., "\t Z Normal: ", 0., "\t Index: ", 1., 
   "\t Starting Phase: ", 0., "\t Phase Of: ", 0., "\t Phase At: ", 0.],
  Editable->False]], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.845734259857381*^9},ExpressionUUID->"b2f364d9-38ca-4a73-b0f0-\
58860f80cb89"],

Cell[BoxData["\<\"\\n\"\>"], "Print",
 CellChangeTimes->{{3.841503168827924*^9, 3.841503190267582*^9}, {
   3.841503228852542*^9, 3.8415033342546215`*^9}, {3.8415034390798264`*^9, 
   3.841503450720231*^9}, 3.8415035109399223`*^9, {3.841503584888919*^9, 
   3.841503609483729*^9}, 3.841503701648828*^9, {3.8415037516392813`*^9, 
   3.841503777795978*^9}, 3.8415038303889804`*^9, {3.8415038690943947`*^9, 
   3.8415039070857944`*^9}, 3.8415039427386217`*^9, {3.841504142727693*^9, 
   3.8415041680972776`*^9}, 3.8415043381241474`*^9, 3.8415043924626064`*^9, 
   3.841504450778296*^9, 3.8415045095103335`*^9, 3.8415046265113335`*^9, 
   3.8457328545355396`*^9, 
   3.8457342598603735`*^9},ExpressionUUID->"e222d7fc-3062-438a-85ae-\
46427cfa7615"]
}, Open  ]]
}, Open  ]]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell["Close the application", "Section",
 CellChangeTimes->{{3.839688474058258*^9, 
  3.8396884761375017`*^9}},ExpressionUUID->"57164ee3-d71d-43df-97af-\
c2c8107e09ac"],

Cell[BoxData[
 RowBox[{
  RowBox[{"theApplication", "@", 
   RowBox[{"CloseApplication", "[", "]"}]}], ";"}]], "Input",
 CellChangeTimes->{{3.839688478377141*^9, 
  3.8396884894719977`*^9}},ExpressionUUID->"b2204731-dfa0-4c37-9991-\
a00b581c012e"]
}, Open  ]]
}, Open  ]]
}, Open  ]]
},
WindowSize->{958, 988},
WindowMargins->{{Automatic, -3024}, {Automatic, 0}},
Magnification:>0.9 Inherited,
FrontEndVersion->"11.1 for Microsoft Windows (64-bit) (April 18, 2017)",
StyleDefinitions->"Default.nb"
]
(* End of Notebook Content *)

(* Internal cache information *)
(*CellTagsOutline
CellTagsIndex->{}
*)
(*CellTagsIndex
CellTagsIndex->{}
*)
(*NotebookFileOutline
Notebook[{
Cell[CellGroupData[{
Cell[580, 22, 375, 6, 91, "Title", "ExpressionUUID" -> \
"82d02cdb-c8e6-455a-98e7-fde95b761af6"],
Cell[CellGroupData[{
Cell[980, 32, 314, 5, 67, "Chapter", "ExpressionUUID" -> \
"cae790c9-403b-439b-872f-400a3c7b2a91"],
Cell[1297, 39, 431, 8, 47, "Text", "ExpressionUUID" -> \
"aa1caaa5-76bb-4421-9c62-6b54072f5b5e"],
Cell[CellGroupData[{
Cell[1753, 51, 172, 3, 62, "Section", "ExpressionUUID" -> \
"e1950f23-fb0d-4198-b712-f8af8e5754a8"],
Cell[CellGroupData[{
Cell[1950, 58, 206, 3, 45, "Subsection", "ExpressionUUID" -> \
"a8008a9a-dfb3-4f8d-80a9-4fb7e1e763f9"],
Cell[2159, 63, 281, 6, 44, "Input", "ExpressionUUID" -> \
"e3e2ff02-c5c9-429f-8e8a-2d34e73aa5d8"]
}, Open  ]],
Cell[CellGroupData[{
Cell[2477, 74, 226, 5, 45, "Subsection", "ExpressionUUID" -> \
"edd2739d-eec9-42a2-a6d7-14261ad04150"],
Cell[2706, 81, 825, 22, 81, "Input", "ExpressionUUID" -> \
"6ed5eabf-e32e-4a78-9aa6-cba43edac3a7"]
}, Open  ]],
Cell[CellGroupData[{
Cell[3568, 108, 175, 3, 45, "Subsection", "ExpressionUUID" -> \
"eff99d4b-4e4f-4c0d-87f3-ddc8f337caa4"],
Cell[3746, 113, 1885, 50, 153, "Input", "ExpressionUUID" -> \
"388dfa2c-87b4-4452-9c3c-923ddf574d38"],
Cell[CellGroupData[{
Cell[5656, 167, 1186, 24, 117, "Input", "ExpressionUUID" -> \
"c7eef740-1dcd-4764-887b-8f389140dde7"],
Cell[6845, 193, 375, 7, 28, "Output", "ExpressionUUID" -> \
"d7242e20-46a8-4b11-bf60-54318e74c5f3"]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[7269, 206, 165, 3, 45, "Subsection", "ExpressionUUID" -> \
"1164d52a-0292-406d-bf2b-2f231976c0a6"],
Cell[7437, 211, 1187, 26, 63, "Input", "ExpressionUUID" -> \
"1e4ea968-62d2-4fc7-adf0-c4d6e19c9f23"]
}, Open  ]],
Cell[CellGroupData[{
Cell[8661, 242, 190, 3, 45, "Subsection", "ExpressionUUID" -> \
"66ef9a70-ae2a-4b30-8612-21d270c9c062"],
Cell[8854, 247, 1094, 25, 81, "Input", "ExpressionUUID" -> \
"cd6c69ec-8c19-480f-bb7b-63d6749a90cc"]
}, Open  ]],
Cell[CellGroupData[{
Cell[9985, 277, 241, 4, 45, "Subsection", "ExpressionUUID" -> \
"406edd0f-0136-46f0-941c-08eed4580c45"],
Cell[10229, 283, 2036, 44, 135, "Input", "ExpressionUUID" -> \
"c3967e90-2df2-4ec1-bda4-69cb575fd205"]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[12314, 333, 190, 3, 62, "Section", "ExpressionUUID" -> \
"4598f291-8e9f-47ee-b63b-cd27df0ec6ab"],
Cell[CellGroupData[{
Cell[12529, 340, 252, 4, 45, "Subsection", "ExpressionUUID" -> \
"68309f63-3ae0-4cde-a310-cf6ca76329d8"],
Cell[12784, 346, 285, 7, 28, "Input", "ExpressionUUID" -> \
"b413be63-52f3-484a-9f03-15b56f5501cd"],
Cell[13072, 355, 803, 22, 65, "Input", "ExpressionUUID" -> \
"5268a20b-6f98-4514-9f18-6571163e9fdd"],
Cell[13878, 379, 884, 24, 65, "Input", "ExpressionUUID" -> \
"840042ab-acc7-4965-9494-14af89981c1b"]
}, Open  ]],
Cell[CellGroupData[{
Cell[14799, 408, 168, 3, 45, "Subsection", "ExpressionUUID" -> \
"eead7ec4-71dc-4e4a-bb3d-fe04fe6114f3"],
Cell[14970, 413, 316, 8, 28, "Input", "ExpressionUUID" -> \
"0a1857cc-19f1-4bc3-9bc3-35eef9289714"],
Cell[15289, 423, 1124, 32, 137, "Input", "ExpressionUUID" -> \
"237abce8-b1be-4666-9b38-ca68fb11c724"],
Cell[16416, 457, 354, 9, 47, "Input", "ExpressionUUID" -> \
"7bb1b1e5-4add-47e5-894b-b681ca199c31"],
Cell[16773, 468, 232, 6, 28, "Input", "ExpressionUUID" -> \
"0dec5292-9300-409a-96f4-1045e79093ee"]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[17054, 480, 232, 4, 62, "Section", "ExpressionUUID" -> \
"ac7e960e-07f1-4ab0-936d-f54502e557bf"],
Cell[CellGroupData[{
Cell[17311, 488, 204, 3, 45, "Subsection", "ExpressionUUID" -> \
"50607b94-2451-48ee-afaa-c9b00bea3456"],
Cell[17518, 493, 434, 11, 47, "Input", "ExpressionUUID" -> \
"3aefb6f5-1029-42a8-9f83-a9fb3e83822b"],
Cell[17955, 506, 853, 23, 83, "Input", "ExpressionUUID" -> \
"3bfefb66-d139-4038-a771-e54d9cfc8b59"],
Cell[CellGroupData[{
Cell[18833, 533, 1074, 26, 101, "Input", "ExpressionUUID" -> \
"80a1f7e4-cec6-4055-9c12-dd29309842d0"],
Cell[19910, 561, 1266, 18, 21, "Print", "ExpressionUUID" -> \
"669adfbc-5c6a-4d31-a37a-e6b413c6c977"]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[21225, 585, 177, 3, 45, "Subsection", "ExpressionUUID" -> \
"de2fd799-78fd-4767-af78-31b9abdb26c2"],
Cell[21405, 590, 373, 8, 28, "Input", "ExpressionUUID" -> \
"137ec083-32d5-4126-9c77-c8a8f66955b2"],
Cell[CellGroupData[{
Cell[21803, 602, 7255, 132, 515, "Input", "ExpressionUUID" -> \
"89694b72-db48-4735-b870-1a1c53649d14"],
Cell[CellGroupData[{
Cell[29083, 738, 885, 15, 21, "Print", "ExpressionUUID" -> \
"5ca570a4-24be-4356-bb60-da57a4dceafe"],
Cell[29971, 755, 1146, 21, 21, "Print", "ExpressionUUID" -> \
"6323b0c9-7df6-49f1-a364-a77ea200a5b0"],
Cell[31120, 778, 889, 15, 21, "Print", "ExpressionUUID" -> \
"ae5c6712-20ad-4380-bf03-41032993cf69"],
Cell[32012, 795, 4062, 67, 73, "Print", "ExpressionUUID" -> \
"e1982152-1c8b-4b68-9405-dbc8769a4b2f"],
Cell[36077, 864, 888, 15, 21, "Print", "ExpressionUUID" -> \
"243dc354-25b8-4264-84fc-c8bee1704842"],
Cell[36968, 881, 4060, 67, 73, "Print", "ExpressionUUID" -> \
"92b1470e-14d5-44ce-b519-b5d7596da32e"],
Cell[41031, 950, 744, 11, 39, "Print", "ExpressionUUID" -> \
"429864b3-1cc1-49e8-b5ba-3f90f75d2579"],
Cell[41778, 963, 885, 15, 21, "Print", "ExpressionUUID" -> \
"f3db9233-639d-4e99-93ef-ef280f7f46dc"],
Cell[42666, 980, 1146, 21, 21, "Print", "ExpressionUUID" -> \
"c0612cbd-7d46-4c36-b211-5f3de6c905a6"],
Cell[43815, 1003, 891, 15, 21, "Print", "ExpressionUUID" -> \
"e79de7b2-5855-42d4-9173-f076510b03c4"],
Cell[44709, 1020, 4087, 67, 73, "Print", "ExpressionUUID" -> \
"f5fbd760-cec0-45a1-b682-471c97b9b666"],
Cell[48799, 1089, 889, 15, 21, "Print", "ExpressionUUID" -> \
"433fd72e-1c0b-4b62-b0f8-d23e5f6a724b"],
Cell[49691, 1106, 4107, 68, 73, "Print", "ExpressionUUID" -> \
"9d7e0cc8-43da-4391-9930-09091ab5e0eb"],
Cell[53801, 1176, 744, 11, 39, "Print", "ExpressionUUID" -> \
"3d3e69c1-8e9b-4044-8289-0a6eba18bb8a"],
Cell[54548, 1189, 883, 15, 21, "Print", "ExpressionUUID" -> \
"469a28c0-d4f0-4b7d-981f-a85aa1201940"],
Cell[55434, 1206, 1144, 21, 21, "Print", "ExpressionUUID" -> \
"072274d5-ef0f-45b7-9759-80960a98d4c8"],
Cell[56581, 1229, 889, 15, 21, "Print", "ExpressionUUID" -> \
"5ce1dee1-5e47-49ae-adea-79e73bbe90e3"],
Cell[57473, 1246, 4020, 65, 73, "Print", "ExpressionUUID" -> \
"27d11c52-b638-4f90-bea3-b5a4ba6dc532"],
Cell[61496, 1313, 891, 15, 21, "Print", "ExpressionUUID" -> \
"76dff9e7-bc02-45e5-a1cb-833155288c2a"],
Cell[62390, 1330, 4191, 69, 73, "Print", "ExpressionUUID" -> \
"f1bd863d-53a3-4340-b373-27115f16764f"],
Cell[66584, 1401, 889, 15, 21, "Print", "ExpressionUUID" -> \
"3f14d9e2-7229-4217-9a14-dfb4ca26ee34"],
Cell[67476, 1418, 4076, 65, 73, "Print", "ExpressionUUID" -> \
"38be04c4-37b3-4124-aba3-2ecc22f90eaa"],
Cell[71555, 1485, 891, 15, 21, "Print", "ExpressionUUID" -> \
"7c0a6c28-39c6-4161-825c-fb4e0cda6c0f"],
Cell[72449, 1502, 4191, 69, 73, "Print", "ExpressionUUID" -> \
"2569f68e-71ee-4973-8bac-627824c8f962"],
Cell[76643, 1573, 889, 15, 21, "Print", "ExpressionUUID" -> \
"ec31cb14-6336-4485-8fe1-eac03c8f361a"],
Cell[77535, 1590, 4105, 67, 75, "Print", "ExpressionUUID" -> \
"b625c640-89eb-4e8a-a094-ee2889658e86"],
Cell[81643, 1659, 889, 15, 21, "Print", "ExpressionUUID" -> \
"bf2ba543-0926-4b12-9dc9-94c4f4ff52db"],
Cell[82535, 1676, 4224, 70, 73, "Print", "ExpressionUUID" -> \
"6a8cd8ff-3160-4049-afca-fa4d8f572264"],
Cell[86762, 1748, 891, 15, 21, "Print", "ExpressionUUID" -> \
"439161d2-62a3-410b-a570-e6f7d0f0b6b1"],
Cell[87656, 1765, 4244, 70, 73, "Print", "ExpressionUUID" -> \
"92b1c3f3-a6da-4021-bac1-f4d82ace397a"],
Cell[91903, 1837, 889, 15, 21, "Print", "ExpressionUUID" -> \
"1fbcbfb1-bad3-4896-88ff-44c15746dcbf"],
Cell[92795, 1854, 4111, 68, 73, "Print", "ExpressionUUID" -> \
"67179eaa-587f-4942-ada7-6e01517805b6"],
Cell[96909, 1924, 744, 11, 39, "Print", "ExpressionUUID" -> \
"10492a1f-2bd2-4b2c-91df-ce89d1108a09"],
Cell[97656, 1937, 885, 15, 21, "Print", "ExpressionUUID" -> \
"2d6b41e8-59b9-4b91-9751-2764b7ea9e35"],
Cell[98544, 1954, 1140, 20, 21, "Print", "ExpressionUUID" -> \
"22d7c633-fbe3-4580-92f2-91ac610c7698"],
Cell[99687, 1976, 891, 15, 21, "Print", "ExpressionUUID" -> \
"703f4d38-ccd9-475f-b5b0-85e7f14936b5"],
Cell[100581, 1993, 4045, 66, 73, "Print", "ExpressionUUID" -> \
"6ac67529-35d4-4df6-988a-f4c5c250e342"],
Cell[104629, 2061, 891, 15, 21, "Print", "ExpressionUUID" -> \
"fdcb4cc3-d777-4e58-8311-6ae4a2fe4aa7"],
Cell[105523, 2078, 4096, 66, 73, "Print", "ExpressionUUID" -> \
"02ba8660-0c20-406e-9825-dda8aaf5a935"],
Cell[109622, 2146, 891, 15, 21, "Print", "ExpressionUUID" -> \
"0adcb802-c5c3-4632-a058-fab291348a01"],
Cell[110516, 2163, 4032, 65, 73, "Print", "ExpressionUUID" -> \
"91b6b8a4-698b-4511-8671-eee8d7a1ea2f"],
Cell[114551, 2230, 744, 11, 39, "Print", "ExpressionUUID" -> \
"881f45a8-aa20-40f9-aba9-a5f3962bb70c"],
Cell[115298, 2243, 883, 15, 21, "Print", "ExpressionUUID" -> \
"588ac63c-cf81-4c94-ab48-198445a28aa9"],
Cell[116184, 2260, 1144, 21, 21, "Print", "ExpressionUUID" -> \
"5d4c8c51-04fb-49e1-867c-614e87bbac6c"],
Cell[117331, 2283, 889, 15, 21, "Print", "ExpressionUUID" -> \
"da926014-2f0d-4ecf-9fbb-cf8e00055079"],
Cell[118223, 2300, 4078, 67, 73, "Print", "ExpressionUUID" -> \
"2f6f74c3-92d8-4a51-8a3f-87504d8fe9de"],
Cell[122304, 2369, 889, 15, 21, "Print", "ExpressionUUID" -> \
"6999884e-a734-4d32-990b-c1bf561ce94b"],
Cell[123196, 2386, 4257, 70, 73, "Print", "ExpressionUUID" -> \
"f193f34a-a318-45a6-88c2-a7f7b93f4d7b"],
Cell[127456, 2458, 891, 15, 21, "Print", "ExpressionUUID" -> \
"514cb2fc-9871-453f-9448-e490948950ae"],
Cell[128350, 2475, 4123, 66, 73, "Print", "ExpressionUUID" -> \
"d9e9d3aa-37d6-457d-9ae4-0456a04f9a99"],
Cell[132476, 2543, 889, 15, 21, "Print", "ExpressionUUID" -> \
"9d153ce4-1db7-436d-93d2-92be0e5d0559"],
Cell[133368, 2560, 4178, 68, 73, "Print", "ExpressionUUID" -> \
"c4b04b42-0192-438a-ab21-59a88c79f9d2"],
Cell[137549, 2630, 889, 15, 21, "Print", "ExpressionUUID" -> \
"070b3e7f-6d44-4651-8f21-3f9e899878c2"],
Cell[138441, 2647, 4074, 66, 73, "Print", "ExpressionUUID" -> \
"06f171ae-70bf-49ce-8a70-a8d73eb238d4"],
Cell[142518, 2715, 891, 15, 21, "Print", "ExpressionUUID" -> \
"da695192-eb46-4fcb-b386-712a5cf41935"],
Cell[143412, 2732, 4223, 71, 73, "Print", "ExpressionUUID" -> \
"f2d674aa-0a72-48aa-8095-18de73675d79"],
Cell[147638, 2805, 889, 15, 21, "Print", "ExpressionUUID" -> \
"882af694-7644-46f3-bec2-ba1e6627c2fb"],
Cell[148530, 2822, 4255, 70, 90, "Print", "ExpressionUUID" -> \
"ab529002-1de6-43cf-bfd8-c4d4397097ce"],
Cell[152788, 2894, 891, 15, 21, "Print", "ExpressionUUID" -> \
"1798d049-6002-4268-a3c7-89d15f37ce9c"],
Cell[153682, 2911, 4073, 65, 73, "Print", "ExpressionUUID" -> \
"929a5006-456a-4eee-bde0-74fa644a3e91"],
Cell[157758, 2978, 742, 11, 39, "Print", "ExpressionUUID" -> \
"19560ef2-04b8-4546-a019-a0120d569898"],
Cell[158503, 2991, 883, 15, 21, "Print", "ExpressionUUID" -> \
"ef6cd179-75df-40b6-885c-274af8cc82d2"],
Cell[159389, 3008, 1144, 21, 21, "Print", "ExpressionUUID" -> \
"0624abea-5cbf-450b-b566-a7627b517671"],
Cell[160536, 3031, 889, 15, 21, "Print", "ExpressionUUID" -> \
"e13849d7-1b69-456d-9872-07781782a97b"],
Cell[161428, 3048, 4109, 68, 73, "Print", "ExpressionUUID" -> \
"a20e306d-dc4b-47fe-8f6a-1eaa72a3bb35"],
Cell[165540, 3118, 889, 15, 21, "Print", "ExpressionUUID" -> \
"81aa6de6-1f54-4a42-b5ca-ffcf6614bcd9"],
Cell[166432, 3135, 4232, 71, 73, "Print", "ExpressionUUID" -> \
"6806067c-8ac6-461e-a5eb-4abaada4b163"],
Cell[170667, 3208, 891, 15, 21, "Print", "ExpressionUUID" -> \
"df1d1e8a-47e3-4b16-8975-9c02e3dc095d"],
Cell[171561, 3225, 4076, 65, 73, "Print", "ExpressionUUID" -> \
"79f9c3f1-6668-4ec8-a169-d3aa374f89ec"],
Cell[175640, 3292, 889, 15, 21, "Print", "ExpressionUUID" -> \
"d7ce0c04-81be-4fc0-86f9-c2c1d0e7e4bb"],
Cell[176532, 3309, 4218, 70, 73, "Print", "ExpressionUUID" -> \
"37bb3d57-b901-48fa-94e7-6fcee4a810a3"],
Cell[180753, 3381, 891, 15, 21, "Print", "ExpressionUUID" -> \
"9139ef90-1d8c-4836-9869-07f26c4e8963"],
Cell[181647, 3398, 4070, 66, 73, "Print", "ExpressionUUID" -> \
"6efdc480-d690-4d35-9ee9-9aef7a77dad2"],
Cell[185720, 3466, 891, 15, 21, "Print", "ExpressionUUID" -> \
"aaf001d1-bff6-46f9-805b-9dfb202ddacc"],
Cell[186614, 3483, 4195, 69, 73, "Print", "ExpressionUUID" -> \
"0d551283-7068-4dcc-91d9-80368148873f"],
Cell[190812, 3554, 891, 15, 21, "Print", "ExpressionUUID" -> \
"eee6e9b0-bdb3-4772-85a6-b9388cdf5638"],
Cell[191706, 3571, 4248, 70, 90, "Print", "ExpressionUUID" -> \
"51487432-6486-4025-8e22-e10bf43318a0"],
Cell[195957, 3643, 891, 15, 21, "Print", "ExpressionUUID" -> \
"11517de8-a380-45b0-a4b7-30c0d1e57d02"],
Cell[196851, 3660, 4053, 65, 73, "Print", "ExpressionUUID" -> \
"3b47c6d0-1681-4c66-a2b9-b54ec056408d"],
Cell[200907, 3727, 744, 11, 39, "Print", "ExpressionUUID" -> \
"c8adbd43-a3d5-476d-ac1f-4eca903dfaa2"],
Cell[201654, 3740, 883, 15, 21, "Print", "ExpressionUUID" -> \
"6beb98bb-59d7-4329-8da8-cc2711eb71a4"],
Cell[202540, 3757, 1146, 21, 21, "Print", "ExpressionUUID" -> \
"93e3d163-dff0-4285-b50b-7edbd871d21c"],
Cell[203689, 3780, 891, 15, 21, "Print", "ExpressionUUID" -> \
"b6e064ab-50e0-4ba8-93a4-22fd16dab8bf"],
Cell[204583, 3797, 3996, 64, 73, "Print", "ExpressionUUID" -> \
"fb0847d7-bdaf-467d-a70d-fb4f3f29d804"],
Cell[208582, 3863, 889, 15, 21, "Print", "ExpressionUUID" -> \
"da07dbe1-fd7b-4248-b613-bc83d2204359"],
Cell[209474, 3880, 4241, 72, 73, "Print", "ExpressionUUID" -> \
"2c8d5fd7-042e-406d-bcbb-d5a26d65b4e9"],
Cell[213718, 3954, 889, 15, 21, "Print", "ExpressionUUID" -> \
"bcb91f88-d3be-4ceb-a4be-717a1b57740f"],
Cell[214610, 3971, 4082, 66, 73, "Print", "ExpressionUUID" -> \
"6c598412-81f3-4d7d-b309-a545231de3e1"],
Cell[218695, 4039, 891, 15, 21, "Print", "ExpressionUUID" -> \
"f01b7ce8-dd6d-4ab8-8cac-931931e92551"],
Cell[219589, 4056, 4214, 71, 73, "Print", "ExpressionUUID" -> \
"e0199dd5-edeb-4547-8962-f3ffbc5d11c8"],
Cell[223806, 4129, 891, 15, 21, "Print", "ExpressionUUID" -> \
"481fc584-e467-4483-b1ee-963f3e28a333"],
Cell[224700, 4146, 4066, 66, 73, "Print", "ExpressionUUID" -> \
"78999988-1281-4858-ad73-facf55773889"],
Cell[228769, 4214, 889, 15, 21, "Print", "ExpressionUUID" -> \
"809e2230-1071-4d27-a042-9f4a165aec93"],
Cell[229661, 4231, 4194, 69, 73, "Print", "ExpressionUUID" -> \
"c1197053-dba8-4f43-a4d2-df85e430b56a"],
Cell[233858, 4302, 891, 15, 21, "Print", "ExpressionUUID" -> \
"ca68e93c-6cd9-41fa-ad18-50227a71a280"],
Cell[234752, 4319, 4256, 71, 90, "Print", "ExpressionUUID" -> \
"6f62afb6-b888-4994-8d52-adc1dc3592c2"],
Cell[239011, 4392, 889, 15, 21, "Print", "ExpressionUUID" -> \
"2dfa231f-0684-4483-8a3e-963599700372"],
Cell[239903, 4409, 4103, 66, 73, "Print", "ExpressionUUID" -> \
"128733fc-8de3-4e2b-94b7-79385b71cbc2"],
Cell[244009, 4477, 744, 11, 39, "Print", "ExpressionUUID" -> \
"c9adceb6-bf6d-435e-8953-020ba7943396"],
Cell[244756, 4490, 885, 15, 21, "Print", "ExpressionUUID" -> \
"b781ed44-0125-4556-af9e-314d8f1b4012"],
Cell[245644, 4507, 1146, 21, 21, "Print", "ExpressionUUID" -> \
"087d12b5-e927-4dab-a926-ca113f9d4636"],
Cell[246793, 4530, 889, 15, 21, "Print", "ExpressionUUID" -> \
"04f43629-0146-46ba-a1e5-0391ed1f67c3"],
Cell[247685, 4547, 4057, 66, 73, "Print", "ExpressionUUID" -> \
"41169f23-e8a8-470d-ab4c-886df6b53d18"],
Cell[251745, 4615, 889, 15, 21, "Print", "ExpressionUUID" -> \
"480d75df-8150-40cf-9c8c-5f59b0294263"],
Cell[252637, 4632, 4081, 67, 73, "Print", "ExpressionUUID" -> \
"8e188458-75ef-48d0-bd37-d1cdb963f317"],
Cell[256721, 4701, 742, 11, 39, "Print", "ExpressionUUID" -> \
"fc9707bc-28dd-44bc-855b-d016d9c3a684"],
Cell[257466, 4714, 883, 15, 21, "Print", "ExpressionUUID" -> \
"b82d5ecc-a2c3-40e6-956f-7f4c4cadb4ba"],
Cell[258352, 4731, 1146, 21, 21, "Print", "ExpressionUUID" -> \
"4fc117d0-0f98-4299-9b31-248bd9ccd614"],
Cell[259501, 4754, 891, 15, 21, "Print", "ExpressionUUID" -> \
"c156c3ea-1f52-468e-bed7-4c58c0e483a2"],
Cell[260395, 4771, 4074, 66, 73, "Print", "ExpressionUUID" -> \
"c1f39bdc-6cb7-4f36-b3ed-79089fbcee82"],
Cell[264472, 4839, 889, 15, 21, "Print", "ExpressionUUID" -> \
"26970e83-cce4-4d9b-b4da-86e8c210c269"],
Cell[265364, 4856, 4100, 67, 73, "Print", "ExpressionUUID" -> \
"55411b17-28b0-43a6-9b69-20f3c7391300"],
Cell[269467, 4925, 742, 11, 39, "Print", "ExpressionUUID" -> \
"b1e08f1c-01c1-48ac-b33b-3e8ed33d7ea2"],
Cell[270212, 4938, 887, 15, 21, "Print", "ExpressionUUID" -> \
"3b2634a5-79c7-4cab-bbb4-fc420c001b5f"],
Cell[271102, 4955, 1146, 21, 21, "Print", "ExpressionUUID" -> \
"949c79b8-a9b5-4115-8478-4c0e90521971"],
Cell[272251, 4978, 889, 15, 21, "Print", "ExpressionUUID" -> \
"cb061b8d-ee4f-489f-bff8-71319b60a6fc"],
Cell[273143, 4995, 4071, 67, 73, "Print", "ExpressionUUID" -> \
"ecfd5a58-9a3f-4fc8-8f71-c6928e599acc"],
Cell[277217, 5064, 891, 15, 21, "Print", "ExpressionUUID" -> \
"3d7960fe-c2ca-4e6b-a33b-59b8d692cf2a"],
Cell[278111, 5081, 4084, 67, 73, "Print", "ExpressionUUID" -> \
"b2f364d9-38ca-4a73-b0f0-58860f80cb89"],
Cell[282198, 5150, 744, 11, 39, "Print", "ExpressionUUID" -> \
"e222d7fc-3062-438a-85ae-46427cfa7615"]
}, Open  ]]
}, Open  ]]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[283015, 5169, 168, 3, 62, "Section", "ExpressionUUID" -> \
"57164ee3-d71d-43df-97af-c2c8107e09ac"],
Cell[283186, 5174, 247, 6, 28, "Input", "ExpressionUUID" -> \
"b2204731-dfa0-4c37-9991-a00b581c012e"]
}, Open  ]]
}, Open  ]]
}, Open  ]]
}
]
*)


```
