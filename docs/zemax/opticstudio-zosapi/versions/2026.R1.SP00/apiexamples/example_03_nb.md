# Example 03 - Mathematica

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
NotebookDataLength[     51281,       1430]
NotebookOptionsPosition[     44132,       1248]
NotebookOutlinePosition[     44477,       1263]
CellTagsIndexPosition[     44434,       1260]
WindowFrame->Normal*)

(* Beginning of Notebook Content *)
Notebook[{

Cell[CellGroupData[{
Cell["Mathematica Standalone Example 03", "Title",
 CellChangeTimes->{{3.839688029061371*^9, 3.839688029333041*^9}, {
  3.839688063060649*^9, 3.839688078509552*^9}, {3.8396914797351103`*^9, 
  3.839691482944421*^9}, {3.83969464010014*^9, 
  3.83969464022024*^9}},ExpressionUUID->"adcdcb2e-e3aa-4968-afb9-\
c9a0bf176f4e"],

Cell[CellGroupData[{

Cell["Open File and Optimize", "Chapter",
 CellChangeTimes->{{3.8396881035725594`*^9, 3.839688112297448*^9}, {
  3.8396914862400026`*^9, 3.8396914901911945`*^9}, {3.839694643021407*^9, 
  3.839694647527952*^9}},ExpressionUUID->"af09c4e4-b16a-4b4b-8296-\
2d4ea364bd93"],

Cell["\<\
An API file \
(\[Ellipsis]\\Samples\\API\\[language]\\e01_new_file_and_quickfocus.zmx) is \
opened, and some surfaces and radii are made variable. A merit function which \
constrains air and material thicknesses, and targets astigmatism and coma, is \
generated manually by inserting operands and adjusting parameter values. The \
local optimizer is run to completion, and then the hammer optimizer is run \
for 10 seconds.\
\>", "Text",
 CellChangeTimes->{{3.8396881291975994`*^9, 3.8396881300308065`*^9}, {
   3.839688228998783*^9, 3.839688243597742*^9}, 3.839691532616377*^9, 
   3.839694658135377*^9},ExpressionUUID->"031406de-3a3b-44d4-b1e5-\
4ed8b4ea7dd3"],

Cell[CellGroupData[{

Cell["1. Set up the interface", "Section",
 CellChangeTimes->{{3.8396882595581264`*^9, 
  3.8396882638859687`*^9}},ExpressionUUID->"53ae55f3-0e50-44c9-9688-\
80ca29e89ad8"],

Cell[CellGroupData[{

Cell["Install Mathematica\[CloseCurlyQuote]s NETLink context", "Subsection",
 CellChangeTimes->{{3.8396882777989693`*^9, 
  3.8396882855614657`*^9}},ExpressionUUID->"61de9353-63b2-4af6-8cb3-\
30e4378af483"],

Cell[BoxData[
 RowBox[{"Needs", "[", "\"\<NETLink`\>\"", "]"}]], "Input",
 CellFrame->True,
 CellMargins->{{30, 0}, {15, 0}},
 CellChangeTimes->{{3.839688289624405*^9, 3.8396883024261284`*^9}},
 Background->GrayLevel[
  0.85],ExpressionUUID->"26cf0808-5fbc-4682-ae80-f02f71329fc6"]
}, Open  ]],

Cell[CellGroupData[{

Cell["\<\
Set a default directory and define the path to the ZOS-API libraries\
\>", "Subsection",
 CellChangeTimes->{{3.8396883515947313`*^9, 
  3.839688361481258*^9}},ExpressionUUID->"4162094d-fdad-4946-be08-\
06b049674ecc"],

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
  0.85],ExpressionUUID->"54385ac0-f9be-4cb4-b287-85428b1a075a"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Initialize the connection", "Subsection",
 CellChangeTimes->{{3.839688395302744*^9, 
  3.8396883991473007`*^9}},ExpressionUUID->"139baf7b-e384-4b06-a46c-\
d568840fec98"],

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
  0.85],ExpressionUUID->"5cf4330c-b82c-4c0d-a89e-6ed15bb6b72d"],

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
  0.85],ExpressionUUID->"7a41d7e6-815b-4c28-8622-11755d6f8fe6"],

Cell[BoxData[
 RowBox[{"{", "\<\"Found OpticStudio at: c:\\\\program files\\\\zemax \
opticstudio 21.3.1\"\>", "}"}]], "Output",
 CellChangeTimes->{
  3.843920769793024*^9, 3.84392085119652*^9, 3.8439212906899757`*^9, 
   3.84392137334933*^9, {3.8439217596654644`*^9, 3.84392178265172*^9}, 
   3.8457342085647526`*^9},ExpressionUUID->"d5b6864f-c73f-4389-9feb-\
5b564fee3343"]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell["Load assemblies", "Subsection",
 CellChangeTimes->{{3.8396884196575794`*^9, 
  3.839688422125188*^9}},ExpressionUUID->"5027ec65-7844-440a-9957-\
32e528754b72"],

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
  0.85],ExpressionUUID->"685d49d6-f355-423d-951d-aca7f06ab9a7"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Open connection and create the application", "Subsection",
 CellChangeTimes->{{3.839688440804923*^9, 
  3.839688449586424*^9}},ExpressionUUID->"86745ed3-03a5-4718-9345-\
10d7835595e0"],

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
  0.85],ExpressionUUID->"90915513-4d1f-4687-b85d-f3e4e3702fe6"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Perform final checks regarding the connection", "Subsection",
 CellChangeTimes->{{3.839688440804923*^9, 3.839688449586424*^9}, {
  3.843920456492786*^9, 
  3.84392046597336*^9}},ExpressionUUID->"fd7b2876-5282-423b-83ea-\
de0751781626"],

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
  0.85],ExpressionUUID->"3a07743c-5a36-457a-88e7-c2d8189e0971"]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell["2. Import Modules", "Section",
 CellChangeTimes->{{3.8396886714301157`*^9, 
  3.8396886750288715`*^9}},ExpressionUUID->"35d9530a-8a27-4d91-a844-\
e88e593606d6"],

Cell[CellGroupData[{

Cell["Module to view the LDE information", "Subsection",
 CellChangeTimes->{{3.8396886879175005`*^9, 
  3.8396887081567287`*^9}},ExpressionUUID->"f6e9a53a-a89d-42d5-b3a4-\
b1483f62b928"],

Cell[BoxData[
 RowBox[{"displayLDE", ":=", 
  RowBox[{"Module", "[", 
   RowBox[{
    RowBox[{"{", 
     RowBox[{"numberofsurfaces", ",", "LDEdata", ",", "tempsurf"}], "}"}], 
    ",", "\[IndentingNewLine]", 
    RowBox[{
     RowBox[{"numberofsurfaces", "=", 
      RowBox[{"theLDE", "@", "NumberOfSurfaces"}]}], ";", 
     "\[IndentingNewLine]", 
     RowBox[{"LDEdata", " ", "=", " ", 
      RowBox[{"Table", "[", 
       RowBox[{",", 
        RowBox[{"{", 
         RowBox[{"a", ",", "1", ",", "numberofsurfaces"}], "}"}], ",", 
        RowBox[{"{", 
         RowBox[{"b", ",", "1", ",", "9"}], "}"}]}], "]"}]}], ";", 
     "\[IndentingNewLine]", 
     RowBox[{"Do", "[", "\[IndentingNewLine]", 
      RowBox[{
       RowBox[{
        RowBox[{"tempsurf", " ", "=", " ", 
         RowBox[{"theLDE", "@", 
          RowBox[{"GetSurfaceAt", "[", "j", "]"}]}]}], ";", 
        "\[IndentingNewLine]", 
        RowBox[{
         RowBox[{"LDEdata", "[", 
          RowBox[{"[", 
           RowBox[{
            RowBox[{"j", "+", "1"}], ",", "1"}], "]"}], "]"}], "=", 
         RowBox[{"tempsurf", "@", "SurfaceNumber"}]}], ";", 
        "\[IndentingNewLine]", 
        RowBox[{
         RowBox[{"LDEdata", "[", 
          RowBox[{"[", 
           RowBox[{
            RowBox[{"j", "+", "1"}], ",", "2"}], "]"}], "]"}], "=", 
         RowBox[{"tempsurf", "@", 
          RowBox[{"Type", "@", 
           RowBox[{"ToString", "[", "\"\<\>\"", "]"}]}]}]}], ";", 
        "\[IndentingNewLine]", 
        RowBox[{
         RowBox[{"LDEdata", "[", 
          RowBox[{"[", 
           RowBox[{
            RowBox[{"j", "+", "1"}], ",", "3"}], "]"}], "]"}], "=", 
         RowBox[{"tempsurf", "@", "Comment"}]}], ";", "\[IndentingNewLine]", 
        RowBox[{
         RowBox[{"LDEdata", "[", 
          RowBox[{"[", 
           RowBox[{
            RowBox[{"j", "+", "1"}], ",", "4"}], "]"}], "]"}], "=", 
         RowBox[{"tempsurf", "@", "Radius"}]}], ";", "\[IndentingNewLine]", 
        RowBox[{
         RowBox[{"LDEdata", "[", 
          RowBox[{"[", 
           RowBox[{
            RowBox[{"j", "+", "1"}], ",", "5"}], "]"}], "]"}], "=", 
         RowBox[{"tempsurf", "@", "Conic"}]}], ";", "\[IndentingNewLine]", 
        RowBox[{
         RowBox[{"LDEdata", "[", 
          RowBox[{"[", 
           RowBox[{
            RowBox[{"j", "+", "1"}], ",", "6"}], "]"}], "]"}], "=", 
         RowBox[{"tempsurf", "@", "Thickness"}]}], ";", "\[IndentingNewLine]", 
        RowBox[{
         RowBox[{"LDEdata", "[", 
          RowBox[{"[", 
           RowBox[{
            RowBox[{"j", "+", "1"}], ",", "7"}], "]"}], "]"}], "=", 
         RowBox[{"tempsurf", "@", "Material"}]}], ";", "\[IndentingNewLine]", 
        RowBox[{
         RowBox[{"LDEdata", "[", 
          RowBox[{"[", 
           RowBox[{
            RowBox[{"j", "+", "1"}], ",", "8"}], "]"}], "]"}], "=", 
         RowBox[{"tempsurf", "@", "Coating"}]}], ";", "\[IndentingNewLine]", 
        RowBox[{
         RowBox[{"LDEdata", "[", 
          RowBox[{"[", 
           RowBox[{
            RowBox[{"j", "+", "1"}], ",", "9"}], "]"}], "]"}], "=", 
         RowBox[{"tempsurf", "@", "SemiDiameter"}]}]}], "\[IndentingNewLine]",
        ",", 
       RowBox[{"{", 
        RowBox[{"j", ",", "0", ",", 
         RowBox[{"numberofsurfaces", "-", "1"}], ",", "1"}], "}"}]}], "]"}], 
     ";", "\[IndentingNewLine]", 
     RowBox[{"TableForm", "[", 
      RowBox[{"LDEdata", ",", 
       RowBox[{"TableHeadings", "\[Rule]", 
        RowBox[{"{", 
         RowBox[{"None", ",", 
          RowBox[{"{", 
           RowBox[{
           "\"\<surface #\>\"", ",", "\"\<surface type\>\"", ",", 
            "\"\<comment\>\"", ",", "\"\<ROC\>\"", ",", "\"\<conic\>\"", ",", 
            "\"\<thickness\>\"", ",", "\"\<material\>\"", ",", 
            "\"\<coating\>\"", ",", "\"\<semi-diameter\>\""}], "}"}]}], 
         "}"}]}]}], "]"}]}]}], "\[IndentingNewLine]", "]"}]}]], "Input",
 CellFrame->True,
 CellMargins->{{30, 0}, {0, 0}},
 TextAlignment->AlignmentMarker,
 Background->GrayLevel[
  0.85],ExpressionUUID->"fd18320c-a42c-415a-9d08-66324e7d9cb6"]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell["3. Open file and map surfaces", "Section",
 CellChangeTimes->{{3.8396948427743645`*^9, 3.8396948460147085`*^9}, {
  3.8396950334375963`*^9, 
  3.839695036349848*^9}},ExpressionUUID->"fb149073-a264-435d-b0e2-\
d746160eb176"],

Cell[CellGroupData[{

Cell["Generate a Mathematica API folder", "Subsection",
 CellChangeTimes->{{3.839695085951501*^9, 
  3.839695090625388*^9}},ExpressionUUID->"58364639-b51b-47ab-9dd0-\
83f69add2d67"],

Cell[BoxData[{
 RowBox[{
  RowBox[{"apiDir", "=", 
   RowBox[{"FileNameJoin", "[", 
    RowBox[{"{", 
     RowBox[{"samplesDir", ",", " ", "\"\<\\\\API\\\\Mathematica\>\""}], 
     "}"}], "]"}]}], ";"}], "\[IndentingNewLine]", 
 RowBox[{"If", "[", 
  RowBox[{
   RowBox[{
    RowBox[{"DirectoryQ", "[", "apiDir", "]"}], "\[Equal]", "False"}], ",", 
   " ", 
   RowBox[{"CreateDirectory", "[", "apiDir", "]"}]}], "]"}]}], "Input",
 CellChangeTimes->{{3.839689080870589*^9, 
  3.8396890811783457`*^9}},ExpressionUUID->"f35c7965-8e95-41d5-b4c9-\
fcfef77d990f"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Set up primary optical system and open file", "Subsection",
 CellChangeTimes->{{3.8396951008367195`*^9, 
  3.8396951162900267`*^9}},ExpressionUUID->"d154a861-caa4-4f98-986e-\
08f24b7577f6"],

Cell[BoxData[
 RowBox[{
  RowBox[{"theSystem", "=", 
   RowBox[{"theApplication", "@", 
    RowBox[{"PrimarySystem", "[", "]"}]}]}], ";"}]], "Input",ExpressionUUID->\
"aedf5ad3-fba2-40a6-b7ea-da1c6d89122b"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{
   "Try", " ", "to", " ", "open", " ", "the", " ", "file", " ", "from", " ", 
    "Example", " ", "1"}], "*)"}], "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{
    RowBox[{"testFile", " ", "=", " ", 
     RowBox[{"FileNameJoin", "[", 
      RowBox[{"{", 
       RowBox[{
       "apiDir", ",", " ", "\"\<e01_new_file_and_quickfocus.zmx\>\""}], "}"}],
       "]"}]}], ";"}], "\[IndentingNewLine]", 
   RowBox[{"If", "[", 
    RowBox[{
     RowBox[{
      RowBox[{"FileExistsQ", "[", "testFile", "]"}], "\[Equal]", "False"}], 
     ",", " ", 
     RowBox[{"(", 
      RowBox[{
       RowBox[{
       "Print", "[", 
        "\"\<You need to run Example 01 before running this example\>\"", 
        "]"}], ";", "\[IndentingNewLine]", 
       RowBox[{"theApplication", "@", 
        RowBox[{"CloseApplication", "[", "]"}]}], ";", "\[IndentingNewLine]", 
       RowBox[{"Abort", "[", "]"}], ";"}], ")"}]}], "]"}]}]}]], "Input",
 CellChangeTimes->{{3.8396951854730997`*^9, 3.83969528934449*^9}, {
  3.8396953336859703`*^9, 3.839695348448591*^9}, {3.839695468888833*^9, 
  3.8396954999504395`*^9}, {3.839695532713868*^9, 3.8396955388353806`*^9}, {
  3.8396955853667445`*^9, 3.839695643427434*^9}, {3.8396957315246267`*^9, 
  3.839695744336132*^9}, {3.83969577906583*^9, 
  3.839695808014777*^9}},ExpressionUUID->"69e910cb-384d-4ac1-a2d0-\
9f4ffe8c3618"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{
    RowBox[{"If", " ", "the", " ", "file", " ", "is", " ", "found"}], ",", 
    " ", 
    RowBox[{"load", " ", "it"}]}], "*)"}], "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{
    RowBox[{"theSystem", "@", 
     RowBox[{"LoadFile", "[", 
      RowBox[{"testFile", ",", " ", "False"}], "]"}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"lensFile", " ", "=", " ", 
     RowBox[{"FileNameJoin", "[", 
      RowBox[{"{", 
       RowBox[{"apiDir", ",", " ", "\"\<e03_open_file_and_optimise.zmx\>\""}],
        "}"}], "]"}]}], ";"}], "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"theSystem", "@", 
     RowBox[{"SaveAs", "[", "lensFile", "]"}]}], ";"}]}]}]], "Input",
 CellChangeTimes->{{3.839695862067868*^9, 
  3.839696050103665*^9}},ExpressionUUID->"7c300fff-56a9-4783-8c31-\
2cd45a6490a0"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{"Pull", " ", "surfaces", " ", "into", " ", "API"}], "*)"}], 
  "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{"theLDE", " ", "=", " ", 
    RowBox[{"theSystem", "@", "LDE"}]}], ";"}]}]], "Input",
 CellChangeTimes->{{3.839696058338149*^9, 
  3.8396960885603247`*^9}},ExpressionUUID->"e1439ee7-c69d-4e9c-89db-\
90662d71c072"],

Cell[CellGroupData[{

Cell[BoxData["displayLDE"], "Input",
 CellFrame->True,
 CellMargins->{{66, 10}, {0, 8}},
 CellChangeTimes->{{3.7687432644016266`*^9, 3.7687432659112825`*^9}},
 TextAlignment->
  AlignmentMarker,ExpressionUUID->"8489b7a5-b5db-4551-981c-42dd4cad4982"],

Cell[BoxData[
 TagBox[
  TagBox[GridBox[{
     {
      TagBox["\<\"surface #\"\>",
       HoldForm], 
      TagBox["\<\"surface type\"\>",
       HoldForm], 
      TagBox["\<\"comment\"\>",
       HoldForm], 
      TagBox["\<\"ROC\"\>",
       HoldForm], 
      TagBox["\<\"conic\"\>",
       HoldForm], 
      TagBox["\<\"thickness\"\>",
       HoldForm], 
      TagBox["\<\"material\"\>",
       HoldForm], 
      TagBox["\<\"coating\"\>",
       HoldForm], 
      TagBox["\<\"semi-diameter\"\>",
       HoldForm]},
     {"0", "\<\"Standard\"\>", "\<\"\"\>", "\[Infinity]", "0.`", 
      "\[Infinity]", "\<\"\"\>", "\<\"\"\>", "\[Infinity]"},
     {"1", "\<\"Standard\"\>", "\<\"Stop is free to move\"\>", "\[Infinity]", 
      "0.`", "50.`", "\<\"\"\>", "\<\"\"\>", "20.`"},
     {"2", "\<\"Standard\"\>", "\<\"Front of lens\"\>", "100.`", "0.`", 
      "10.`", "\<\"N-BK7\"\>", "\<\"\"\>", "24.644271308340777`"},
     {"3", "\<\"Standard\"\>", "\<\"Rear of lens\"\>", "187.10333506602882`", 
      "0.`", "376.8096884835882`", "\<\"\"\>", "\<\"\"\>", 
      "24.39439421910087`"},
     {"4", "\<\"Standard\"\>", "\<\"\"\>", "\[Infinity]", "0.`", 
      "\[Infinity]", "\<\"\"\>", "\<\"\"\>", "34.03848404004736`"}
    },
    GridBoxAlignment->{
     "Columns" -> {{Left}}, "ColumnsIndexed" -> {}, "Rows" -> {{Baseline}}, 
      "RowsIndexed" -> {}},
    GridBoxDividers->{
     "Columns" -> {{False}}, "ColumnsIndexed" -> {}, 
      "Rows" -> {False, True, {False}, False}, "RowsIndexed" -> {}},
    GridBoxSpacings->{"Columns" -> {
        Offset[0.27999999999999997`], {
         Offset[2.0999999999999996`]}, 
        Offset[0.27999999999999997`]}, "ColumnsIndexed" -> {}, "Rows" -> {
        Offset[0.2], {
         Offset[0.4]}, 
        Offset[0.2]}, "RowsIndexed" -> {}}],
   {None, OutputFormsDump`HeadedColumns}],
  Function[BoxForm`e$, 
   TableForm[
   BoxForm`e$, 
    TableHeadings -> {
     None, {
      "surface #", "surface type", "comment", "ROC", "conic", "thickness", 
       "material", "coating", "semi-diameter"}}]]]], "Output",
 CellFrame->True,
 CellMargins->{{66, 10}, {12, 0}},
 CellChangeTimes->{
  3.768743266989798*^9, 3.7687452099422946`*^9, 3.7687452660911894`*^9, 
   3.7690318506843057`*^9, 3.7690381241115108`*^9, 3.7690381894261456`*^9, 
   3.7690383002104435`*^9, 3.7691074530834055`*^9, 3.76910832773925*^9, 
   3.769108505428296*^9, 3.769108965218915*^9, 3.7691093645549984`*^9, 
   3.7691095158535037`*^9, 3.769109658819937*^9, 3.769111013477272*^9, 
   3.7691143191602373`*^9, 3.769114625776077*^9, 3.7748958287705812`*^9, 
   3.7748959627118645`*^9, 3.7748961368826046`*^9, 3.778438620134506*^9, 
   3.7784386727747736`*^9, 3.8396905446298037`*^9, 3.839691163500985*^9, 
   3.8396922541366854`*^9, 3.839692295872362*^9, 3.8396945691331325`*^9, 
   3.839696137011492*^9, {3.839696928091839*^9, 3.839696985265033*^9}, 
   3.8396975995041738`*^9, 3.8396978605980225`*^9, 3.8396979814961147`*^9, 
   3.8396980350318413`*^9, 3.8396985753534803`*^9, 3.8457325515092783`*^9, 
   3.8457342131087694`*^9},
 TextAlignment->AlignmentMarker,
 Background->RGBColor[
  0.854902, 0.85098, 
   0.843137],ExpressionUUID->"55a1864d-b709-4c38-b113-622fba887aa6"]
}, Open  ]],

Cell[BoxData[{
 RowBox[{
  RowBox[{"surf1", " ", "=", " ", 
   RowBox[{"theLDE", "@", 
    RowBox[{"GetSurfaceAt", "[", "1", "]"}]}]}], ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{"surf2", " ", "=", " ", 
   RowBox[{"theLDE", "@", 
    RowBox[{"GetSurfaceAt", "[", "2", "]"}]}]}], ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{"surf3", " ", "=", " ", 
   RowBox[{"theLDE", "@", 
    RowBox[{"GetSurfaceAt", "[", "3", "]"}]}]}], ";"}]}], "Input",
 CellChangeTimes->{{3.8396961441210327`*^9, 
  3.8396961873953543`*^9}},ExpressionUUID->"461ab2e2-ae50-4488-9fd1-\
8b3fc1b1c075"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{
   "Make", " ", "thickness", " ", "and", " ", "radii", " ", "variable"}], 
   "*)"}], "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{
    RowBox[{"surf1", "@", 
     RowBox[{"ThicknessCell", "@", 
      RowBox[{"MakeSolveVariable", "[", "]"}]}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"surf2", "@", 
     RowBox[{"ThicknessCell", "@", 
      RowBox[{"MakeSolveVariable", "[", "]"}]}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"surf2", "@", 
     RowBox[{"RadiusCell", "@", 
      RowBox[{"MakeSolveVariable", "[", "]"}]}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"surf3", "@", 
     RowBox[{"ThicknessCell", "@", 
      RowBox[{"MakeSolveVariable", "[", "]"}]}]}], ";"}]}]}]], "Input",
 CellChangeTimes->{{3.839696193781109*^9, 
  3.8396962583181906`*^9}},ExpressionUUID->"02031cec-c15f-4b04-9651-\
6c9629b89d06"]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell["4. Edit the Merit Function", "Section",
 CellChangeTimes->{{3.8396962903284464`*^9, 
  3.8396963007310963`*^9}},ExpressionUUID->"689ed499-bdb5-44fd-963b-\
3e1dee029a0f"],

Cell[CellGroupData[{

Cell["Access the MFE to add operands", "Subsection",
 CellChangeTimes->{{3.839696306987582*^9, 
  3.839696335627136*^9}},ExpressionUUID->"d2904322-4b9e-4472-815e-\
0518898c0590"],

Cell[BoxData[
 RowBox[{
  RowBox[{"theMFE", " ", "=", " ", 
   RowBox[{"theSystem", "@", "MFE"}]}], ";"}]], "Input",
 CellChangeTimes->{{3.8396963378844337`*^9, 
  3.8396963752772074`*^9}},ExpressionUUID->"222d6b32-3adb-4564-8f32-\
e4af7fb79939"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Begin adding operands to the Merit Function Editor", "Subsection",
 CellChangeTimes->{{3.839696347895248*^9, 
  3.8396963653347816`*^9}},ExpressionUUID->"25f436a4-ec9c-41fc-af2c-\
dab186cc21ea"],

Cell[BoxData[
 RowBox[{
  RowBox[{
  "LoadNETType", "[", "\"\<ZOSAPI.Editors.MFE.MeritOperandType\>\"", "]"}], 
  ";"}]], "Input",
 CellChangeTimes->{{3.83969636708532*^9, 3.8396963863989153`*^9}, 
   3.839696489725381*^9, {3.839697707975333*^9, 3.839697722083042*^9}, {
   3.839697754876647*^9, 3.839697755694847*^9}, {3.839697839708581*^9, 
   3.8396978398920317`*^9}},ExpressionUUID->"bb6a8942-2d7e-422e-b2d9-\
9c3385c57d2e"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{"Operand", " ", "to", " ", "control", " ", "astigmatism"}], "*)"}],
   "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{
    RowBox[{"op1", " ", "=", " ", 
     RowBox[{"theMFE", "@", 
      RowBox[{"GetOperandAt", "[", "1", "]"}]}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"op1", "@", 
     RowBox[{"ChangeType", "[", "MeritOperandType`ASTI", "]"}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op1", "@", "Target"}], " ", "=", " ", "0.0"}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op1", "@", "Weight"}], " ", "=", " ", "10.0"}], 
    ";"}]}]}]], "Input",
 CellChangeTimes->{{3.8396964948664036`*^9, 
  3.8396965630656595`*^9}},ExpressionUUID->"5e8acf5c-9e28-4fa0-a0c6-\
aa6c7d2a71e4"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{"Operand", " ", "to", " ", "control", " ", "coma"}], "*)"}], 
  "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{
    RowBox[{"op2", " ", "=", " ", 
     RowBox[{"theMFE", "@", 
      RowBox[{"InsertNewOperandAt", "[", "2", "]"}]}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"op2", "@", 
     RowBox[{"ChangeType", "[", "MeritOperandType`COMA", "]"}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op2", "@", "Target"}], " ", "=", " ", "0.0"}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op2", "@", "Weight"}], " ", "=", " ", "1.0"}], 
    ";"}]}]}]], "Input",
 CellChangeTimes->{{3.839696566006926*^9, 3.8396966270030384`*^9}, {
  3.8396966639218407`*^9, 3.839696664192365*^9}, {3.83969700693433*^9, 
  3.8396970097500596`*^9}, {3.8396974678384485`*^9, 3.8396974715978026`*^9}, {
  3.8396975549070234`*^9, 3.8396975562164288`*^9}, {3.839697964443158*^9, 
  3.839697970990511*^9}},ExpressionUUID->"7a4677a9-9b21-482f-b30c-\
607464464708"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{
   "Boundary", " ", "operands", " ", "for", " ", "constraining", " ", "air", 
    " ", "and", " ", "glass"}], "*)"}], "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{
    RowBox[{"op3", " ", "=", " ", 
     RowBox[{"theMFE", "@", 
      RowBox[{"InsertNewOperandAt", "[", "3", "]"}]}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"op3", "@", 
     RowBox[{"ChangeType", "[", "MeritOperandType`MNCA", "]"}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op3", "@", "Target"}], " ", "=", " ", "0.5"}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op3", "@", "Weight"}], " ", "=", " ", "1.0"}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op3", "@", 
      RowBox[{
       RowBox[{"GetCellAt", "[", "2", "]"}], "@", "IntegerValue"}]}], " ", 
     "=", " ", "1"}], ";"}], "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op3", "@", 
      RowBox[{
       RowBox[{"GetCellAt", "[", "3", "]"}], "@", "IntegerValue"}]}], " ", 
     "=", " ", "3"}], ";"}], "\[IndentingNewLine]", "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"op4", " ", "=", " ", 
     RowBox[{"theMFE", "@", 
      RowBox[{"InsertNewOperandAt", "[", "4", "]"}]}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"op4", "@", 
     RowBox[{"ChangeType", "[", "MeritOperandType`MXCA", "]"}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op4", "@", "Target"}], " ", "=", " ", "1000"}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op4", "@", "Weight"}], " ", "=", " ", "1.0"}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op4", "@", 
      RowBox[{
       RowBox[{"GetCellAt", "[", "2", "]"}], "@", "IntegerValue"}]}], " ", 
     "=", " ", "1"}], ";"}], "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op4", "@", 
      RowBox[{
       RowBox[{"GetCellAt", "[", "3", "]"}], "@", "IntegerValue"}]}], " ", 
     "=", " ", "3"}], ";"}], "\[IndentingNewLine]", "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"op5", "=", " ", 
     RowBox[{"theMFE", "@", 
      RowBox[{"InsertNewOperandAt", "[", "5", "]"}]}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"op5", "@", 
     RowBox[{"ChangeType", "[", "MeritOperandType`MNEA", "]"}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op5", "@", "Target"}], " ", "=", " ", "0.5"}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op5", "@", "Weight"}], " ", "=", " ", "1.0"}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op5", "@", 
      RowBox[{
       RowBox[{"GetCellAt", "[", "2", "]"}], "@", "IntegerValue"}]}], " ", 
     "=", " ", "1"}], ";"}], "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op5", "@", 
      RowBox[{
       RowBox[{"GetCellAt", "[", "3", "]"}], "@", "IntegerValue"}]}], " ", 
     "=", " ", "3"}], ";"}], "\[IndentingNewLine]", "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"op6", " ", "=", " ", 
     RowBox[{"theMFE", "@", 
      RowBox[{"InsertNewOperandAt", "[", "6", "]"}]}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"op6", "@", 
     RowBox[{"ChangeType", "[", "MeritOperandType`MNCG", "]"}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op6", "@", "Target"}], " ", "=", " ", "3.0"}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op6", "@", "Weight"}], " ", "=", " ", "1.0"}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op6", "@", 
      RowBox[{
       RowBox[{"GetCellAt", "[", "2", "]"}], "@", "IntegerValue"}]}], " ", 
     "=", " ", "1"}], ";"}], "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op6", "@", 
      RowBox[{
       RowBox[{"GetCellAt", "[", "3", "]"}], "@", "IntegerValue"}]}], " ", 
     "=", " ", "3"}], ";"}], "\[IndentingNewLine]", "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"op7", "=", " ", 
     RowBox[{"theMFE", "@", 
      RowBox[{"InsertNewOperandAt", "[", "7", "]"}]}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"op7", "@", 
     RowBox[{"ChangeType", "[", "MeritOperandType`MXCG", "]"}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op7", "@", "Target"}], " ", "=", " ", "15.0"}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op7", "@", "Weight"}], " ", "=", " ", "1.0"}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op7", "@", 
      RowBox[{
       RowBox[{"GetCellAt", "[", "2", "]"}], "@", "IntegerValue"}]}], " ", 
     "=", " ", "1"}], ";"}], "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op7", "@", 
      RowBox[{
       RowBox[{"GetCellAt", "[", "3", "]"}], "@", "IntegerValue"}]}], " ", 
     "=", " ", "3"}], ";"}], "\[IndentingNewLine]", "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"op8", " ", "=", " ", 
     RowBox[{"theMFE", "@", 
      RowBox[{"InsertNewOperandAt", "[", "8", "]"}]}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"op8", "@", 
     RowBox[{"ChangeType", "[", "MeritOperandType`MNEG", "]"}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op8", "@", "Target"}], " ", "=", " ", "3.0"}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op8", "@", "Weight"}], " ", "=", " ", "1.0"}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op8", "@", 
      RowBox[{
       RowBox[{"GetCellAt", "[", "2", "]"}], "@", "IntegerValue"}]}], " ", 
     "=", " ", "1"}], ";"}], "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"op8", "@", 
      RowBox[{
       RowBox[{"GetCellAt", "[", "3", "]"}], "@", "IntegerValue"}]}], " ", 
     "=", " ", "3"}], ";"}]}]}]], "Input",
 CellChangeTimes->{{3.839696566006926*^9, 3.839696888043726*^9}, {
  3.839697119074359*^9, 3.8396971245286055`*^9}, {3.839697558708663*^9, 
  3.8396975784734344`*^9}, {3.8396978108921423`*^9, 
  3.839697831475945*^9}},ExpressionUUID->"910e481b-e8fe-469b-8e26-\
4e6d46697c8c"]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell["5. Optimize the system", "Section",
 CellChangeTimes->{{3.8396980955317373`*^9, 
  3.8396981033571453`*^9}},ExpressionUUID->"3baab05c-f250-4b57-8d6a-\
34dc6280db73"],

Cell[CellGroupData[{

Cell["Perform a local optimization until completion", "Subsection",
 CellChangeTimes->{{3.839698119953179*^9, 
  3.8396981320835085`*^9}},ExpressionUUID->"4ff9c41f-96f7-49ca-ae09-\
a48d74bb5859"],

Cell[BoxData[
 RowBox[{
  RowBox[{"localOpt", " ", "=", " ", 
   RowBox[{"theSystem", "@", 
    RowBox[{"Tools", "@", 
     RowBox[{"OpenLocalOptimization", "[", "]"}]}]}]}], ";"}]], "Input",
 CellChangeTimes->{{3.839698138418665*^9, 
  3.8396981606179028`*^9}},ExpressionUUID->"a923775e-4434-48d6-ab00-\
7f63b1279074"],

Cell[BoxData[{
 RowBox[{
  RowBox[{
  "LoadNETType", "[", 
   "\"\<ZOSAPI.Tools.Optimization.OptimizationAlgorithm\>\"", "]"}], 
  ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{
  "LoadNETType", "[", "\"\<ZOSAPI.Tools.Optimization.OptimizationCycles\>\"", 
   "]"}], ";"}]}], "Input",
 CellChangeTimes->{{3.8396981914353046`*^9, 
  3.8396982115346966`*^9}},ExpressionUUID->"168ba3bb-1471-4e12-9bcb-\
ca47bb710f55"],

Cell[BoxData[{
 RowBox[{
  RowBox[{
   RowBox[{"localOpt", "@", "Algorithm"}], " ", "=", " ", 
   "OptimizationAlgorithm`DampedLeastSquares"}], ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{
   RowBox[{"localOpt", "@", "Cycles"}], " ", "=", " ", 
   "OptimizationCycles`Automatic"}], ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{
   RowBox[{"localOpt", "@", "NumberOfCores"}], " ", "=", " ", "8"}], 
  ";"}]}], "Input",
 CellChangeTimes->{{3.839698163186371*^9, 3.8396981692650537`*^9}, {
  3.839698222016061*^9, 
  3.8396982670908823`*^9}},ExpressionUUID->"d9f0c701-e893-45bf-88ac-\
78be979f6f9c"],

Cell[BoxData[
 RowBox[{
  RowBox[{"localOpt", "@", 
   RowBox[{"RunAndWaitForCompletion", "[", "]"}]}], ";"}]], "Input",
 CellChangeTimes->{{3.839698269537122*^9, 
  3.839698277740673*^9}},ExpressionUUID->"4640cadc-1f9f-46f4-be2d-\
321b4c71189a"],

Cell[BoxData[
 RowBox[{
  RowBox[{"localOpt", "@", 
   RowBox[{"Close", "[", "]"}]}], ";"}]], "Input",
 CellChangeTimes->{{3.839698280464808*^9, 
  3.8396982858195186`*^9}},ExpressionUUID->"14904af2-afae-4938-a582-\
3aa55bd02944"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Run Hammer optimization for 10 seconds", "Subsection",
 CellChangeTimes->{{3.839698293237858*^9, 
  3.8396983004347954`*^9}},ExpressionUUID->"bcf2ab10-9f2c-4b3e-9742-\
3d5dd207cef7"],

Cell[BoxData[
 RowBox[{
  RowBox[{"hammerOpt", " ", "=", " ", 
   RowBox[{"theSystem", "@", 
    RowBox[{"Tools", "@", 
     RowBox[{"OpenHammerOptimization", "[", "]"}]}]}]}], ";"}]], "Input",
 CellChangeTimes->{{3.839698363257116*^9, 
  3.839698377702568*^9}},ExpressionUUID->"70472cf6-c2fc-461e-9fc1-\
3ad3bd231763"],

Cell[BoxData[{
 RowBox[{
  RowBox[{"hammerOpt", "@", 
   RowBox[{"RunAndWaitWithTimeout", "[", "10", "]"}]}], 
  ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{"hammerOpt", "@", 
   RowBox[{"Cancel", "[", "]"}]}], ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{"hammerOpt", "@", 
   RowBox[{"WaitForCompletion", "[", "]"}]}], ";"}]}], "Input",
 CellChangeTimes->{{3.8396983796064186`*^9, 
  3.839698429846568*^9}},ExpressionUUID->"20347636-ae55-469a-a533-\
936b9025ac76"],

Cell[BoxData[
 RowBox[{
  RowBox[{"hammerOpt", "@", 
   RowBox[{"Close", "[", "]"}]}], ";"}]], "Input",
 CellChangeTimes->{{3.839698413166522*^9, 
  3.8396984370124416`*^9}},ExpressionUUID->"c1d59925-c129-48a3-a1d8-\
f70f578df893"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Observe the effects of the optimization", "Subsection",
 CellChangeTimes->{{3.8396985571210003`*^9, 
  3.8396985625710044`*^9}},ExpressionUUID->"1b0dedd1-cf94-4b45-beda-\
c00238ec66dc"],

Cell[CellGroupData[{

Cell[BoxData["displayLDE"], "Input",
 CellFrame->True,
 CellMargins->{{66, 10}, {0, 8}},
 CellChangeTimes->{{3.7687432644016266`*^9, 3.7687432659112825`*^9}},
 TextAlignment->
  AlignmentMarker,ExpressionUUID->"c195f4c7-5d3f-4088-a2a1-aeb7f42f1239"],

Cell[BoxData[
 TagBox[
  TagBox[GridBox[{
     {
      TagBox["\<\"surface #\"\>",
       HoldForm], 
      TagBox["\<\"surface type\"\>",
       HoldForm], 
      TagBox["\<\"comment\"\>",
       HoldForm], 
      TagBox["\<\"ROC\"\>",
       HoldForm], 
      TagBox["\<\"conic\"\>",
       HoldForm], 
      TagBox["\<\"thickness\"\>",
       HoldForm], 
      TagBox["\<\"material\"\>",
       HoldForm], 
      TagBox["\<\"coating\"\>",
       HoldForm], 
      TagBox["\<\"semi-diameter\"\>",
       HoldForm]},
     {"0", "\<\"Standard\"\>", "\<\"\"\>", "\[Infinity]", "0.`", 
      "\[Infinity]", "\<\"\"\>", "\<\"\"\>", "\[Infinity]"},
     {"1", "\<\"Standard\"\>", "\<\"Stop is free to move\"\>", "\[Infinity]", 
      "0.`", "132.19078318694494`", "\<\"\"\>", "\<\"\"\>", "20.`"},
     {"2", "\<\"Standard\"\>", "\<\"Front of lens\"\>", 
      "1.6238934618805982`*^16", "0.`", 
      "6.213029301585804`", "\<\"N-BK7\"\>", "\<\"\"\>", 
      "31.565194951471003`"},
     {"3", "\<\"Standard\"\>", "\<\"Rear of lens\"\>", 
      RowBox[{"-", "206.72001380023795`"}], "0.`", 
      "397.2360681077867`", "\<\"\"\>", "\<\"\"\>", "31.781688487836533`"},
     {"4", "\<\"Standard\"\>", "\<\"\"\>", "\[Infinity]", "0.`", 
      "\[Infinity]", "\<\"\"\>", "\<\"\"\>", "34.97782468480779`"}
    },
    GridBoxAlignment->{
     "Columns" -> {{Left}}, "ColumnsIndexed" -> {}, "Rows" -> {{Baseline}}, 
      "RowsIndexed" -> {}},
    GridBoxDividers->{
     "Columns" -> {{False}}, "ColumnsIndexed" -> {}, 
      "Rows" -> {False, True, {False}, False}, "RowsIndexed" -> {}},
    GridBoxSpacings->{"Columns" -> {
        Offset[0.27999999999999997`], {
         Offset[2.0999999999999996`]}, 
        Offset[0.27999999999999997`]}, "ColumnsIndexed" -> {}, "Rows" -> {
        Offset[0.2], {
         Offset[0.4]}, 
        Offset[0.2]}, "RowsIndexed" -> {}}],
   {None, OutputFormsDump`HeadedColumns}],
  Function[BoxForm`e$, 
   TableForm[
   BoxForm`e$, 
    TableHeadings -> {
     None, {"surface #", "surface type", "comment", "ROC", "conic", 
       "thickness", "material", "coating", "semi-diameter"}}]]]], "Output",
 CellFrame->True,
 CellMargins->{{66, 10}, {12, 0}},
 CellChangeTimes->{
  3.768743266989798*^9, 3.7687452099422946`*^9, 3.7687452660911894`*^9, 
   3.7690318506843057`*^9, 3.7690381241115108`*^9, 3.7690381894261456`*^9, 
   3.7690383002104435`*^9, 3.7691074530834055`*^9, 3.76910832773925*^9, 
   3.769108505428296*^9, 3.769108965218915*^9, 3.7691093645549984`*^9, 
   3.7691095158535037`*^9, 3.769109658819937*^9, 3.769111013477272*^9, 
   3.7691143191602373`*^9, 3.769114625776077*^9, 3.7748958287705812`*^9, 
   3.7748959627118645`*^9, 3.7748961368826046`*^9, 3.778438620134506*^9, 
   3.7784386727747736`*^9, 3.8396905446298037`*^9, 3.839691163500985*^9, 
   3.8396922541366854`*^9, 3.839692295872362*^9, 3.8396945691331325`*^9, 
   3.839696137011492*^9, {3.839696928091839*^9, 3.839696985265033*^9}, 
   3.8396975995041738`*^9, 3.8396978605980225`*^9, 3.8396979814961147`*^9, 
   3.8396980350318413`*^9, 3.8396985878562317`*^9, 3.8457325634788485`*^9, 
   3.845734225069013*^9},
 TextAlignment->AlignmentMarker,
 Background->RGBColor[
  0.854902, 0.85098, 
   0.843137],ExpressionUUID->"02261723-683e-4e0e-817b-2f8b8f82e125"]
}, Open  ]]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell["5. Save the file", "Section",
 CellChangeTimes->{{3.8396922140012035`*^9, 
  3.8396922157735577`*^9}},ExpressionUUID->"fc2c83cc-04c0-43e8-a5a2-\
8a24bb26d936"],

Cell[BoxData[
 RowBox[{
  RowBox[{"theSystem", "@", 
   RowBox[{"Save", "[", "]"}]}], ";"}]], "Input",
 CellMargins->{{66, 10}, {5, 10}},
 CellChangeTimes->{{3.768744844841243*^9, 3.7687448592927485`*^9}, {
  3.769024012012724*^9, 3.769024021137352*^9}, {3.769031995005757*^9, 
  3.7690319962188597`*^9}, {3.7690391527312164`*^9, 3.769039153363533*^9}, {
  3.8396960085249276`*^9, 3.8396960123001366`*^9}},
 TextAlignment->
  AlignmentMarker,ExpressionUUID->"44d95a15-cb87-48a9-93c3-5ed3b7cc7b32"]
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
 CellChangeTimes->{{3.839688478377141*^9, 3.8396884894719977`*^9}, {
  3.8396956032627416`*^9, 3.8396956092235527`*^9}, {3.839695725114539*^9, 
  3.8396957264476547`*^9}},ExpressionUUID->"49ae66ba-6c60-4029-a0a6-\
3e09a324b9cc"]
}, Open  ]]
}, Open  ]]
}, Open  ]]
},
WindowSize->{958, 988},
WindowMargins->{{Automatic, -3024}, {Automatic, 0}},
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
Cell[580, 22, 320, 5, 101, "Title", "ExpressionUUID" -> \
"adcdcb2e-e3aa-4968-afb9-c9a0bf176f4e"],
Cell[CellGroupData[{
Cell[925, 31, 268, 4, 72, "Chapter", "ExpressionUUID" -> \
"af09c4e4-b16a-4b4b-8296-2d4ea364bd93"],
Cell[1196, 37, 672, 12, 87, "Text", "ExpressionUUID" -> \
"031406de-3a3b-44d4-b1e5-4ed8b4ea7dd3"],
Cell[CellGroupData[{
Cell[1893, 53, 172, 3, 70, "Section", "ExpressionUUID" -> \
"53ae55f3-0e50-44c9-9688-80ca29e89ad8"],
Cell[CellGroupData[{
Cell[2090, 60, 206, 3, 49, "Subsection", "ExpressionUUID" -> \
"61de9353-63b2-4af6-8cb3-30e4378af483"],
Cell[2299, 65, 281, 6, 48, "Input", "ExpressionUUID" -> \
"26cf0808-5fbc-4682-ae80-f02f71329fc6"]
}, Open  ]],
Cell[CellGroupData[{
Cell[2617, 76, 226, 5, 49, "Subsection", "ExpressionUUID" -> \
"4162094d-fdad-4946-be08-06b049674ecc"],
Cell[2846, 83, 825, 22, 87, "Input", "ExpressionUUID" -> \
"54385ac0-f9be-4cb4-b287-85428b1a075a"]
}, Open  ]],
Cell[CellGroupData[{
Cell[3708, 110, 175, 3, 49, "Subsection", "ExpressionUUID" -> \
"139baf7b-e384-4b06-a46c-d568840fec98"],
Cell[3886, 115, 1885, 50, 163, "Input", "ExpressionUUID" -> \
"5cf4330c-b82c-4c0d-a89e-6ed15bb6b72d"],
Cell[CellGroupData[{
Cell[5796, 169, 1186, 24, 125, "Input", "ExpressionUUID" -> \
"7a41d7e6-815b-4c28-8622-11755d6f8fe6"],
Cell[6985, 195, 375, 7, 63, "Output", "ExpressionUUID" -> \
"d5b6864f-c73f-4389-9feb-5b564fee3343"]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[7409, 208, 165, 3, 49, "Subsection", "ExpressionUUID" -> \
"5027ec65-7844-440a-9957-32e528754b72"],
Cell[7577, 213, 1187, 26, 68, "Input", "ExpressionUUID" -> \
"685d49d6-f355-423d-951d-aca7f06ab9a7"]
}, Open  ]],
Cell[CellGroupData[{
Cell[8801, 244, 190, 3, 49, "Subsection", "ExpressionUUID" -> \
"86745ed3-03a5-4718-9345-10d7835595e0"],
Cell[8994, 249, 1094, 25, 87, "Input", "ExpressionUUID" -> \
"90915513-4d1f-4687-b85d-f3e4e3702fe6"]
}, Open  ]],
Cell[CellGroupData[{
Cell[10125, 279, 241, 4, 49, "Subsection", "ExpressionUUID" -> \
"fd7b2876-5282-423b-83ea-de0751781626"],
Cell[10369, 285, 2036, 44, 144, "Input", "ExpressionUUID" -> \
"3a07743c-5a36-457a-88e7-c2d8189e0971"]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[12454, 335, 166, 3, 70, "Section", "ExpressionUUID" -> \
"35d9530a-8a27-4d91-a844-e88e593606d6"],
Cell[CellGroupData[{
Cell[12645, 342, 186, 3, 49, "Subsection", "ExpressionUUID" -> \
"f6e9a53a-a89d-42d5-b3a4-b1483f62b928"],
Cell[12834, 347, 4098, 105, 376, "Input", "ExpressionUUID" -> \
"fd18320c-a42c-415a-9d08-66324e7d9cb6"]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[16981, 458, 229, 4, 70, "Section", "ExpressionUUID" -> \
"fb149073-a264-435d-b0e2-d746160eb176"],
Cell[CellGroupData[{
Cell[17235, 466, 181, 3, 49, "Subsection", "ExpressionUUID" -> \
"58364639-b51b-47ab-9dd0-83f69add2d67"],
Cell[17419, 471, 557, 15, 50, "Input", "ExpressionUUID" -> \
"f35c7965-8e95-41d5-b4c9-fcfef77d990f"]
}, Open  ]],
Cell[CellGroupData[{
Cell[18013, 491, 195, 3, 49, "Subsection", "ExpressionUUID" -> \
"d154a861-caa4-4f98-986e-08f24b7577f6"],
Cell[18211, 496, 206, 5, 30, "Input", "ExpressionUUID" -> \
"aedf5ad3-fba2-40a6-b7ea-da1c6d89122b"],
Cell[18420, 503, 1398, 34, 107, "Input", "ExpressionUUID" -> \
"69e910cb-384d-4ac1-a2d0-9f4ffe8c3618"],
Cell[19821, 539, 861, 24, 88, "Input", "ExpressionUUID" -> \
"7c300fff-56a9-4783-8c31-2cd45a6490a0"],
Cell[20685, 565, 374, 10, 50, "Input", "ExpressionUUID" -> \
"e1439ee7-c69d-4e9c-89db-90662d71c072"],
Cell[CellGroupData[{
Cell[21084, 579, 249, 5, 41, "Input", "ExpressionUUID" -> \
"8489b7a5-b5db-4551-981c-42dd4cad4982"],
Cell[21336, 586, 3190, 74, 130, "Output", "ExpressionUUID" -> \
"55a1864d-b709-4c38-b113-622fba887aa6"]
}, Open  ]],
Cell[24541, 663, 587, 15, 69, "Input", "ExpressionUUID" -> \
"461ab2e2-ae50-4488-9fd1-8b3fc1b1c075"],
Cell[25131, 680, 928, 28, 107, "Input", "ExpressionUUID" -> \
"02031cec-c15f-4b04-9651-6c9629b89d06"]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[26108, 714, 175, 3, 70, "Section", "ExpressionUUID" -> \
"689ed499-bdb5-44fd-963b-3e1dee029a0f"],
Cell[CellGroupData[{
Cell[26308, 721, 178, 3, 49, "Subsection", "ExpressionUUID" -> \
"d2904322-4b9e-4472-815e-0518898c0590"],
Cell[26489, 726, 246, 6, 30, "Input", "ExpressionUUID" -> \
"222d6b32-3adb-4564-8f32-e4af7fb79939"]
}, Open  ]],
Cell[CellGroupData[{
Cell[26772, 737, 200, 3, 49, "Subsection", "ExpressionUUID" -> \
"25f436a4-ec9c-41fc-af2c-dab186cc21ea"],
Cell[26975, 742, 428, 9, 30, "Input", "ExpressionUUID" -> \
"bb6a8942-2d7e-422e-b2d9-9c3385c57d2e"],
Cell[27406, 753, 821, 25, 107, "Input", "ExpressionUUID" -> \
"5e8acf5c-9e28-4fa0-a0c6-aa6c7d2a71e4"],
Cell[28230, 780, 1067, 28, 107, "Input", "ExpressionUUID" -> \
"7a4677a9-9b21-482f-b30c-607464464708"],
Cell[29300, 810, 6206, 185, 810, "Input", "ExpressionUUID" -> \
"910e481b-e8fe-469b-8e26-4e6d46697c8c"]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[35555, 1001, 171, 3, 70, "Section", "ExpressionUUID" -> \
"3baab05c-f250-4b57-8d6a-34dc6280db73"],
Cell[CellGroupData[{
Cell[35751, 1008, 195, 3, 49, "Subsection", "ExpressionUUID" -> \
"4ff9c41f-96f7-49ca-ae09-a48d74bb5859"],
Cell[35949, 1013, 319, 8, 30, "Input", "ExpressionUUID" -> \
"a923775e-4434-48d6-ab00-7f63b1279074"],
Cell[36271, 1023, 419, 12, 50, "Input", "ExpressionUUID" -> \
"168ba3bb-1471-4e12-9bcb-ca47bb710f55"],
Cell[36693, 1037, 609, 16, 69, "Input", "ExpressionUUID" -> \
"d9f0c701-e893-45bf-88ac-78be979f6f9c"],
Cell[37305, 1055, 246, 6, 30, "Input", "ExpressionUUID" -> \
"4640cadc-1f9f-46f4-be2d-321b4c71189a"],
Cell[37554, 1063, 230, 6, 30, "Input", "ExpressionUUID" -> \
"14904af2-afae-4938-a582-3aa55bd02944"]
}, Open  ]],
Cell[CellGroupData[{
Cell[37821, 1074, 188, 3, 49, "Subsection", "ExpressionUUID" -> \
"bcf2ab10-9f2c-4b3e-9742-3d5dd207cef7"],
Cell[38012, 1079, 319, 8, 30, "Input", "ExpressionUUID" -> \
"70472cf6-c2fc-461e-9fc1-3ad3bd231763"],
Cell[38334, 1089, 479, 13, 69, "Input", "ExpressionUUID" -> \
"20347636-ae55-469a-a533-936b9025ac76"],
Cell[38816, 1104, 231, 6, 30, "Input", "ExpressionUUID" -> \
"c1d59925-c129-48a3-a1d8-f70f578df893"]
}, Open  ]],
Cell[CellGroupData[{
Cell[39084, 1115, 191, 3, 49, "Subsection", "ExpressionUUID" -> \
"1b0dedd1-cf94-4b45-beda-c00238ec66dc"],
Cell[CellGroupData[{
Cell[39300, 1122, 249, 5, 41, "Input", "ExpressionUUID" -> \
"c195f4c7-5d3f-4088-a2a1-aeb7f42f1239"],
Cell[39552, 1129, 3258, 75, 132, "Output", "ExpressionUUID" -> \
"02261723-683e-4e0e-817b-2f8b8f82e125"]
}, Open  ]]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[42871, 1211, 165, 3, 70, "Section", "ExpressionUUID" -> \
"fc2c83cc-04c0-43e8-a5a2-8a24bb26d936"],
Cell[43039, 1216, 497, 10, 30, "Input", "ExpressionUUID" -> \
"44d95a15-cb87-48a9-93c3-5ed3b7cc7b32"]
}, Open  ]],
Cell[CellGroupData[{
Cell[43573, 1231, 168, 3, 70, "Section", "ExpressionUUID" -> \
"57164ee3-d71d-43df-97af-c2c8107e09ac"],
Cell[43744, 1236, 348, 7, 30, "Input", "ExpressionUUID" -> \
"49ae66ba-6c60-4029-a0a6-3e09a324b9cc"]
}, Open  ]]
}, Open  ]]
}, Open  ]]
}
]
*)


```
