# Example 22 - Mathematica

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
NotebookDataLength[    225428,       4321]
NotebookOptionsPosition[    218356,       4141]
NotebookOutlinePosition[    218703,       4156]
CellTagsIndexPosition[    218660,       4153]
WindowFrame->Normal*)

(* Beginning of Notebook Content *)
Notebook[{

Cell[CellGroupData[{
Cell["Mathematica Standalone Example 22", "Title",
 CellChangeTimes->{{3.839688029061371*^9, 3.839688029333041*^9}, {
  3.839688063060649*^9, 3.839688078509552*^9}, {3.845124261011256*^9, 
  3.845124265480819*^9}},ExpressionUUID->"a4651d83-5ff2-4f29-95af-\
b6f8d182179b"],

Cell[CellGroupData[{

Cell["Sequential Analysis", "Chapter",
 CellChangeTimes->{{3.8396881035725594`*^9, 3.839688112297448*^9}, 
   3.843920266306694*^9, {3.8451242799353237`*^9, 
   3.8451242823686814`*^9}},ExpressionUUID->"3e48f354-9336-4747-8fb2-\
5d1e486836a2"],

Cell["\<\
A batch ray trace is run in a sequential sample file. A list of 315 rays is \
generated and passed to ZOS-API for tracing in a single operation. This \
greatly reduces overhead when tracing a large number of rays. Resulting ray \
data is stored and displayed outside of OpticStudio. Using the native \
OpticStudio spot diagram analysis, geometric and RMS spot radius are \
retrieved, and are also displayed.\
\>", "Text",
 CellChangeTimes->{{3.8396881291975994`*^9, 3.8396881300308065`*^9}, {
   3.839688228998783*^9, 3.839688243597742*^9}, 
   3.8451243006535225`*^9},ExpressionUUID->"c45244e2-f4e9-468f-bcac-\
08e58e5ab4dc"],

Cell[CellGroupData[{

Cell["1. Set up the interface", "Section",
 CellChangeTimes->{{3.8396882595581264`*^9, 
  3.8396882638859687`*^9}},ExpressionUUID->"30b4d763-6568-441a-b20f-\
0a4579888bda"],

Cell[CellGroupData[{

Cell["Install Mathematica\[CloseCurlyQuote]s NETLink context", "Subsection",
 CellChangeTimes->{{3.8396882777989693`*^9, 
  3.8396882855614657`*^9}},ExpressionUUID->"68a27b01-c6e3-4ca7-893b-\
fbd64bf4cdc6"],

Cell[BoxData[
 RowBox[{"Needs", "[", "\"\<NETLink`\>\"", "]"}]], "Input",
 CellFrame->True,
 CellMargins->{{30, 0}, {15, 0}},
 CellChangeTimes->{{3.839688289624405*^9, 3.8396883024261284`*^9}},
 Background->GrayLevel[
  0.85],ExpressionUUID->"c66e03b5-c956-4caa-bf16-75e82002646c"]
}, Open  ]],

Cell[CellGroupData[{

Cell["\<\
Set a default directory and define the path to the ZOS-API libraries\
\>", "Subsection",
 CellChangeTimes->{{3.8396883515947313`*^9, 
  3.839688361481258*^9}},ExpressionUUID->"74c5d70b-6d68-4fea-be86-\
d6a38c5e5d46"],

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
  0.85],ExpressionUUID->"ffe34d81-d9a5-4d08-8526-6a470edb51af"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Initialize the connection", "Subsection",
 CellChangeTimes->{{3.839688395302744*^9, 
  3.8396883991473007`*^9}},ExpressionUUID->"5c92b9cd-ca57-4cb9-984e-\
9a3c135985f6"],

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
  0.85],ExpressionUUID->"0a9e1b8b-ac81-4212-a701-0d9d61b9dc8c"],

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
  0.85],ExpressionUUID->"ae0887c2-33da-48c2-b0d1-0daf4cecc82c"],

Cell[BoxData[
 RowBox[{"{", "\<\"Found OpticStudio at: c:\\\\program files\\\\zemax \
opticstudio 21.3.1\"\>", "}"}]], "Output",
 CellChangeTimes->{
  3.843920769793024*^9, 3.84392085119652*^9, 3.8439212906899757`*^9, 
   3.84392137334933*^9, {3.8439217596654644`*^9, 3.84392178265172*^9}, 
   3.8457342787753916`*^9},ExpressionUUID->"56ed3eaf-4ca4-4328-bd52-\
7d3ba033ce27"]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell["Load assemblies", "Subsection",
 CellChangeTimes->{{3.8396884196575794`*^9, 
  3.839688422125188*^9}},ExpressionUUID->"76064fd6-1983-4c0e-995e-\
c82aa14ff8d7"],

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
  0.85],ExpressionUUID->"d7c01417-69ef-4d4a-8bde-5533345e1679"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Open connection and create the application", "Subsection",
 CellChangeTimes->{{3.839688440804923*^9, 
  3.839688449586424*^9}},ExpressionUUID->"2505e593-5f0f-44b2-8202-\
82fdb851e764"],

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
  0.85],ExpressionUUID->"05ae85f0-8e13-4af1-bdb5-9b2f7e569be4"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Perform final checks regarding the connection", "Subsection",
 CellChangeTimes->{{3.839688440804923*^9, 3.839688449586424*^9}, {
  3.843920456492786*^9, 
  3.84392046597336*^9}},ExpressionUUID->"5aff5792-b434-489b-928c-\
3df83ba479d6"],

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
  0.85],ExpressionUUID->"10510aff-7969-4b81-8112-42307b455aaa"]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell["2. Import Modules", "Section",
 CellChangeTimes->{{3.8396886714301157`*^9, 
  3.8396886750288715`*^9}},ExpressionUUID->"1cc92522-3648-4051-bc73-\
e25c5bf2f46b"],

Cell[CellGroupData[{

Cell["Module to view the LDE information", "Subsection",
 CellChangeTimes->{{3.8396886879175005`*^9, 
  3.8396887081567287`*^9}},ExpressionUUID->"9bcdfb58-5568-42c3-bf52-\
fde3a2483472"],

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
  0.85],ExpressionUUID->"873d9be6-9e71-44e4-88cd-362d02de3ff7"]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell["3. Open file and set up Batch Ray Trace", "Section",
 CellChangeTimes->{{3.8396948427743645`*^9, 3.8396948460147085`*^9}, {
  3.8396950334375963`*^9, 3.839695036349848*^9}, {3.8451243740865793`*^9, 
  3.8451243781865945`*^9}},ExpressionUUID->"9b846f90-ea86-4753-98dc-\
7673dda77667"],

Cell[CellGroupData[{

Cell["Generate a Mathematica API folder", "Subsection",
 CellChangeTimes->{{3.839695085951501*^9, 
  3.839695090625388*^9}},ExpressionUUID->"5a6a37f4-56b3-41fa-af19-\
9253eec28fa8"],

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
  3.8396890811783457`*^9}},ExpressionUUID->"e093a2aa-3c46-481f-9359-\
b750b25635cf"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Set up primary optical system and open file", "Subsection",
 CellChangeTimes->{{3.8396951008367195`*^9, 
  3.8396951162900267`*^9}},ExpressionUUID->"9cc3746f-bda8-4590-b4dc-\
7bccd59bb5f8"],

Cell[BoxData[
 RowBox[{
  RowBox[{"LoadNETType", "[", "\"\<ZOSAPI.SystemType\>\"", "]"}], 
  ";"}]], "Input",
 CellChangeTimes->{{3.845124468965783*^9, 
  3.8451244945362887`*^9}},ExpressionUUID->"bdcb48f8-b31a-406f-bb60-\
1dea893b622c"],

Cell[BoxData[
 RowBox[{
  RowBox[{"theSystem", " ", "=", " ", 
   RowBox[{"theApplication", "@", 
    RowBox[{"CreateNewSystem", "[", "SystemType`Sequential", "]"}]}]}], 
  ";"}]], "Input",
 CellChangeTimes->{{3.845124390319867*^9, 3.845124405623246*^9}, {
   3.845124498882807*^9, 3.845124513694007*^9}, 3.8451247544270163`*^9, {
   3.845124804206115*^9, 
   3.8451248118871393`*^9}},ExpressionUUID->"13405fc2-708d-4846-a9cc-\
617550661939"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{"Open", " ", "a", " ", "sample", " ", "file"}], "*)"}], 
  "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{
    RowBox[{"testFile", " ", "=", " ", 
     RowBox[{"FileNameJoin", "[", 
      RowBox[{"{", 
       RowBox[{
       "samplesDir", ",", " ", 
        "\"\<\\\\Sequential\\\\Objectives\\\\Double Gauss 28 degree field.zmx\
\>\""}], "}"}], "]"}]}], ";"}], "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"theSystem", "@", 
     RowBox[{"LoadFile", "[", 
      RowBox[{"testFile", ",", " ", "False"}], "]"}]}], ";"}]}]}]], "Input",
 CellChangeTimes->{{3.8396951854730997`*^9, 3.83969528934449*^9}, {
   3.8396953336859703`*^9, 3.839695348448591*^9}, {3.839695468888833*^9, 
   3.8396954999504395`*^9}, {3.839695532713868*^9, 3.8396955388353806`*^9}, {
   3.8396955853667445`*^9, 3.839695643427434*^9}, {3.8396957315246267`*^9, 
   3.839695744336132*^9}, {3.83969577906583*^9, 3.839695808014777*^9}, {
   3.845124643014086*^9, 3.845124709630871*^9}, 3.845124746054338*^9, {
   3.845124817516636*^9, 
   3.8451248183738446`*^9}},ExpressionUUID->"80db1097-c95e-4649-9fc5-\
594e1eeb45d5"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{"Pull", " ", "surfaces", " ", "into", " ", "API"}], "*)"}], 
  "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{"theLDE", " ", "=", " ", 
    RowBox[{"theSystem", "@", "LDE"}]}], ";"}]}]], "Input",
 CellChangeTimes->{{3.839696058338149*^9, 
  3.8396960885603247`*^9}},ExpressionUUID->"391cdc68-b17c-4d59-90c9-\
9e38f24de63e"],

Cell[CellGroupData[{

Cell[BoxData["displayLDE"], "Input",
 CellFrame->True,
 CellMargins->{{66, 10}, {0, 8}},
 CellChangeTimes->{{3.7687432644016266`*^9, 3.7687432659112825`*^9}},
 TextAlignment->
  AlignmentMarker,ExpressionUUID->"feddfd7c-9b76-4133-9f27-11fb0a8bb120"],

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
     {"1", "\<\"Standard\"\>", "\<\"\"\>", "54.153246165737905`", "0.`", 
      "8.74665785`", "\<\"SK2\"\>", "\<\"AR\"\>", "29.22529777011097`"},
     {"2", "\<\"Standard\"\>", "\<\"\"\>", "152.52192094011102`", "0.`", 
      "0.5`", "\<\"\"\>", "\<\"AR\"\>", "28.140954030672997`"},
     {"3", "\<\"Standard\"\>", "\<\"\"\>", "35.950624450484796`", "0.`", 
      "14.`", "\<\"SK16\"\>", "\<\"AR\"\>", "24.295812438740228`"},
     {"4", "\<\"Standard\"\>", "\<\"\"\>", "\[Infinity]", "0.`", 
      "3.77696589`", "\<\"F5\"\>", "\<\"\"\>", "21.297190923506164`"},
     {"5", "\<\"Standard\"\>", "\<\"\"\>", "22.269924618009487`", "0.`", 
      "14.2530593`", "\<\"\"\>", "\<\"AR\"\>", "14.919352562527735`"},
     {"6", "\<\"Standard\"\>", "\<\"\"\>", "\[Infinity]", "0.`", 
      "12.4281291`", "\<\"\"\>", "\<\"\"\>", "10.228835190999837`"},
     {"7", "\<\"Standard\"\>", "\<\"\"\>", 
      RowBox[{"-", "25.685033030460865`"}], "0.`", 
      "3.77696589`", "\<\"F5\"\>", "\<\"AR\"\>", "13.187758485617573`"},
     {"8", "\<\"Standard\"\>", "\<\"\"\>", "\[Infinity]", "0.`", 
      "10.8339285`", "\<\"SK16\"\>", "\<\"\"\>", "16.468122395121842`"},
     {"9", "\<\"Standard\"\>", "\<\"\"\>", 
      RowBox[{"-", "36.9802207286324`"}], "0.`", 
      "0.5`", "\<\"\"\>", "\<\"AR\"\>", "18.929567529182133`"},
     {"10", "\<\"Standard\"\>", "\<\"\"\>", "196.41733409650806`", "0.`", 
      "6.85817491`", "\<\"SK16\"\>", "\<\"AR\"\>", "21.310764716560268`"},
     {"11", "\<\"Standard\"\>", "\<\"\"\>", 
      RowBox[{"-", "67.14755002373626`"}], "0.`", 
      "57.314537905`", "\<\"\"\>", "\<\"AR\"\>", "21.64625843268155`"},
     {"12", "\<\"Standard\"\>", "\<\"\"\>", "\[Infinity]", "0.`", 
      "\[Infinity]", "\<\"\"\>", "\<\"\"\>", "24.570533089041824`"}
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
   3.8396980350318413`*^9, 3.8396985753534803`*^9, {3.8451246993749*^9, 
   3.845124724943128*^9}, 3.8451248235350914`*^9, 3.845129254912836*^9, 
   3.845130130049406*^9, 3.8451311985444417`*^9, 3.8451320970256195`*^9, 
   3.8451326409268827`*^9, 3.8451357577040987`*^9, 3.8451440276371527`*^9, 
   3.8451440758976336`*^9, 3.8451443282014484`*^9, 3.845732952535026*^9, 
   3.845734283385374*^9},
 TextAlignment->AlignmentMarker,
 Background->RGBColor[
  0.854902, 0.85098, 
   0.843137],ExpressionUUID->"b4315b91-103a-45b9-b672-cd75f45b9456"]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell["Open Batch Ray Trace and set up the analysis", "Subsection",
 CellChangeTimes->{{3.8396951008367195`*^9, 3.8396951162900267`*^9}, {
  3.845132063643154*^9, 
  3.84513206950941*^9}},ExpressionUUID->"e2194595-0025-49b4-9e82-\
87ded17eadcd"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{
   "Open", " ", "Batch", " ", "Ray", " ", "Trace", " ", "and", " ", "load", 
    " ", "enumuerators", " ", "we", " ", "will", " ", "need"}], "*)"}], 
  "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{
    RowBox[{"raytrace", " ", "=", " ", 
     RowBox[{"theSystem", "@", 
      RowBox[{"Tools", "@", 
       RowBox[{"OpenBatchRayTrace", "[", "]"}]}]}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
    "LoadNETType", "[", "\"\<ZOSAPI.Tools.RayTrace.RaysType\>\"", "]"}], 
    ";"}], "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
    "LoadNETType", "[", "\"\<ZOSAPI.Tools.RayTrace.OPDMode\>\"", "]"}], 
    ";"}]}]}]], "Input",
 CellChangeTimes->{{3.839696193781109*^9, 3.8396962583181906`*^9}, {
  3.845124832736068*^9, 3.84512493214981*^9}, {3.8451250651492558`*^9, 
  3.845125120757868*^9}},ExpressionUUID->"c403abf7-19f5-4272-bbd1-\
a45c17ead886"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{
   "Define", " ", "constants", " ", "for", " ", "the", " ", "ray", " ", 
    "trace"}], "*)"}], "\[IndentingNewLine]", 
  RowBox[{"(*", 
   RowBox[{
    RowBox[{
    "We", " ", "want", " ", "general", " ", "information", " ", "about", " ", 
     "the", " ", "system", " ", "such", " ", "as", " ", "number", " ", "of", 
     " ", "surfaces"}], ",", " ", 
    RowBox[{"number", " ", "wavelengths"}], ",", " ", 
    RowBox[{"number", " ", "fields"}], ",", " ", 
    RowBox[{"max", " ", "field"}]}], "*)"}], "\[IndentingNewLine]", 
  RowBox[{"(*", 
   RowBox[{
    RowBox[{"In", " ", "addition"}], ",", " ", 
    RowBox[{
    "we", " ", "also", " ", "want", " ", "to", " ", "declare", " ", "the", 
     " ", "field", " ", "X", " ", "and", " ", "Y", " ", "normalization", " ", 
     RowBox[{"values", ".", " ", "In"}], " ", "this", " ", "file"}], ",", " ", 
    RowBox[{
     RowBox[{
      RowBox[{"there", " ", "are", " ", "only", " ", "Y"}], "-", 
      RowBox[{"fields", " ", "so", " ", "hx"}]}], " ", "\[Equal]", " ", 
     RowBox[{
     "0", " ", "and", " ", "hy", " ", "will", " ", "be", " ", "populated", 
      " ", "with", " ", "the", " ", "normalization", " ", "values"}]}]}], 
   "*)"}], "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{
    RowBox[{"nsur", " ", "=", " ", 
     RowBox[{"theSystem", "@", 
      RowBox[{"LDE", "@", "NumberOfSurfaces"}]}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"maxRays", " ", "=", " ", "30"}], ";"}], "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"normUnPolData", "=", 
     RowBox[{"raytrace", "@", 
      RowBox[{"CreateNormUnpol", "[", 
       RowBox[{
        RowBox[{"(", 
         RowBox[{
          RowBox[{"(", 
           RowBox[{"maxRays", " ", "+", " ", "1"}], ")"}], " ", 
          RowBox[{"(", 
           RowBox[{"maxRays", " ", "+", " ", "1"}], ")"}]}], ")"}], ",", " ", 
        "RaysType`Real", ",", " ", "nsur"}], "]"}]}]}], ";"}]}]}]], "Input",
 CellChangeTimes->{{3.8451249373097334`*^9, 3.8451249537580004`*^9}, {
  3.8451250204393096`*^9, 3.8451250613858747`*^9}, {3.8451251244375305`*^9, 
  3.8451251514755745`*^9}, {3.8451291483322873`*^9, 3.845129168921615*^9}, {
  3.845129320532695*^9, 
  3.8451293580827723`*^9}},ExpressionUUID->"4b62c801-e34c-4625-a054-\
9e9bafaeb3ab"],

Cell[CellGroupData[{

Cell[BoxData[{
 RowBox[{
  RowBox[{"hx", " ", "=", " ", "0"}], ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{"maxWave", " ", "=", " ", 
   RowBox[{"theSystem", "@", 
    RowBox[{"SystemData", "@", 
     RowBox[{"Wavelengths", "@", "NumberOfWavelengths"}]}]}]}], 
  ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{"numFields", " ", "=", " ", 
   RowBox[{"theSystem", "@", 
    RowBox[{"SystemData", "@", 
     RowBox[{"Fields", "@", "NumberOfFields"}]}]}]}], 
  ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{"fieldArray", " ", "=", " ", 
   RowBox[{"Table", "[", 
    RowBox[{
     RowBox[{"theSystem", "@", 
      RowBox[{"SystemData", "@", 
       RowBox[{"Fields", "@", 
        RowBox[{
         RowBox[{"GetField", "[", "i", "]"}], "@", "Y"}]}]}]}], ",", " ", 
     RowBox[{"{", 
      RowBox[{"i", ",", " ", "1", ",", " ", "numFields"}], "}"}]}], "]"}]}], 
  ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{"maxField", " ", "=", " ", 
   RowBox[{"Max", "[", "fieldArray", "]"}]}], ";"}], "\[IndentingNewLine]", 
 RowBox[{"hyArray", " ", "=", " ", 
  RowBox[{"Table", "[", 
   RowBox[{
    RowBox[{
     RowBox[{"fieldArray", "[", 
      RowBox[{"[", "i", "]"}], "]"}], "/", "maxField"}], ",", " ", 
    RowBox[{"{", 
     RowBox[{"i", ",", " ", "1", ",", " ", "numFields"}], "}"}]}], 
   "]"}]}]}], "Input",
 CellChangeTimes->{{3.8451251665135193`*^9, 3.845125192693988*^9}, {
   3.845125232028839*^9, 3.845125237888641*^9}, 3.845125358645509*^9, {
   3.8451279093485384`*^9, 3.8451279895342293`*^9}, {3.845128024436369*^9, 
   3.8451280384621058`*^9}, {3.845128102069024*^9, 3.8451282050382557`*^9}, {
   3.8451282427020435`*^9, 3.8451284293448963`*^9}, {3.845128549918951*^9, 
   3.8451285706525307`*^9}, {3.845128626133321*^9, 3.845128688636835*^9}, {
   3.8451287335725374`*^9, 3.8451287373625355`*^9}, {3.845128856237508*^9, 
   3.8451289043987985`*^9}, {3.8451289486682158`*^9, 
   3.8451289521570454`*^9}, {3.8451290753306837`*^9, 
   3.8451290920672927`*^9}, {3.845129176724243*^9, 3.8451292309626694`*^9}, {
   3.845129264973425*^9, 3.845129269356489*^9}, 
   3.8451293666838574`*^9},ExpressionUUID->"7f204aa9-eec3-455b-ba3b-\
35d91a528b79"],

Cell[BoxData[
 RowBox[{"{", 
  RowBox[{"0.`", ",", "0.7142857142857142`", ",", "1.`"}], "}"}]], "Output",
 CellChangeTimes->{{3.8451292134450283`*^9, 3.845129231699455*^9}, {
   3.8451292620017447`*^9, 3.845129269944569*^9}, 3.845129370138399*^9, 
   3.8451301301424875`*^9, 3.845131198632207*^9, 3.8451320334775686`*^9, 
   3.8451320971246176`*^9, 3.8451326409807386`*^9, 3.845135145876475*^9, {
   3.8451357395992775`*^9, 3.8451357577830644`*^9}, 3.8451411908913774`*^9, 
   3.8451440277315416`*^9, 3.8451440759913673`*^9, 3.845144328297378*^9, 
   3.8457329526078854`*^9, 
   3.8457342834492025`*^9},ExpressionUUID->"13532369-6f3f-4959-8208-\
5a4462ddf67a"]
}, Open  ]],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{"Declare", " ", "arrays", " ", "to", " ", "hold", " ", 
    RowBox[{"x", "/", "y"}], " ", "image", " ", "plane", " ", "data"}], 
   "*)"}], "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{
    RowBox[{"numFields", " ", "=", " ", 
     RowBox[{"theSystem", "@", 
      RowBox[{"SystemData", "@", 
       RowBox[{"Fields", "@", "NumberOfFields"}]}]}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"xAry", " ", "=", " ", 
     RowBox[{"Table", "[", 
      RowBox[{"0", ",", " ", "numFields", ",", " ", "maxWave", ",", " ", 
       RowBox[{"(", 
        RowBox[{
         RowBox[{"(", 
          RowBox[{"maxRays", " ", "+", " ", "1"}], ")"}], " ", 
         RowBox[{"(", 
          RowBox[{"maxRays", "+", "1"}], ")"}]}], ")"}]}], "]"}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"yAry", " ", "=", " ", 
     RowBox[{"Table", "[", 
      RowBox[{"0", ",", " ", "numFields", ",", " ", "maxWave", ",", " ", 
       RowBox[{"(", 
        RowBox[{
         RowBox[{"(", 
          RowBox[{"maxRays", " ", "+", " ", "1"}], ")"}], " ", 
         RowBox[{"(", 
          RowBox[{"maxRays", "+", "1"}], ")"}]}], ")"}]}], "]"}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{"(*", 
    RowBox[{
     RowBox[{"xAry", " ", "=", " ", 
      RowBox[{"Table", "[", 
       RowBox[{
       "0", ",", " ", "numFields", ",", " ", "maxWave", ",", " ", "10"}], 
       "]"}]}], ";", "\[IndentingNewLine]", 
     RowBox[{"yAry", " ", "=", " ", 
      RowBox[{"Table", "[", 
       RowBox[{
       "0", ",", " ", "numFields", ",", " ", "maxWave", ",", " ", "10"}], 
       "]"}]}], ";"}], "*)"}]}]}]], "Input",
 CellChangeTimes->{{3.8451253800278435`*^9, 3.8451254006130486`*^9}, {
  3.8451256476769886`*^9, 3.845125772716871*^9}, {3.845135098859866*^9, 
  3.845135140666943*^9}, {3.845135777434623*^9, 3.845135783938998*^9}, {
  3.845141176523947*^9, 
  3.8451411855447273`*^9}},ExpressionUUID->"9ab4154d-caf7-404f-bb0c-\
1076a729b6f9"]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell["4. Run the Batch Ray Trace and plot the values", "Section",
 CellChangeTimes->{{3.8396948427743645`*^9, 3.8396948460147085`*^9}, {
  3.8396950334375963`*^9, 3.839695036349848*^9}, {3.8451243740865793`*^9, 
  3.8451243781865945`*^9}, {3.845129445922617*^9, 
  3.845129454898679*^9}},ExpressionUUID->"55bb44ff-ead7-44cb-9b46-\
ca6656329a7e"],

Cell[CellGroupData[{

Cell["Run the Batch Ray Trace, storing data to our X and Y arrays", \
"Subsection",
 CellChangeTimes->{{3.839695085951501*^9, 3.839695090625388*^9}, {
  3.845129470669815*^9, 
  3.8451294845780396`*^9}},ExpressionUUID->"50a5803c-0a02-47d5-93e5-\
ee9424ccde56"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{
   "Define", " ", "the", " ", "commands", " ", "for", " ", "pulling", " ", 
    "the", " ", "ray", " ", 
    RowBox[{"results", ".", " ", "We"}], " ", "will", " ", "use", " ", "this",
     " ", "later"}], "*)"}], "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{"successNextResult", ":=", 
    RowBox[{"normUnPolData", "@", 
     RowBox[{"ReadNextResult", "[", 
      RowBox[{
      "rayNumber", ",", " ", "errCode", ",", " ", "vigCode", ",", " ", "x", 
       ",", " ", "y", ",", " ", "dummyVal", ",", " ", "dummyVal", ",", " ", 
       "dummyVal", ",", " ", "dummyVal", ",", " ", "dummyVal", ",", " ", 
       "dummyVal", ",", " ", "dummyVal", ",", " ", "dummyVal", ",", " ", 
       "dummyVal"}], "]"}]}]}], ";"}]}]], "Input",
 CellChangeTimes->{{3.845131583193448*^9, 
  3.845131713824003*^9}},ExpressionUUID->"a299ebcf-4534-4ef3-95ce-\
0319094a17ff"],

Cell[BoxData[
 RowBox[{"For", "[", 
  RowBox[{
   RowBox[{"field", " ", "=", " ", "1"}], ",", " ", 
   RowBox[{"field", " ", "\[LessEqual]", " ", "numFields"}], ",", " ", 
   RowBox[{"field", "++"}], ",", " ", "\[IndentingNewLine]", 
   RowBox[{"For", "[", 
    RowBox[{
     RowBox[{"wave", " ", "=", " ", "1"}], ",", " ", 
     RowBox[{"wave", "\[LessEqual]", " ", "maxWave"}], ",", " ", 
     RowBox[{"wave", "++"}], ",", " ", "\[IndentingNewLine]", 
     RowBox[{
      RowBox[{"normUnPolData", "@", 
       RowBox[{"ClearData", "[", "]"}]}], ";", "\[IndentingNewLine]", 
      RowBox[{"waveNumber", " ", "=", " ", "wave"}], ";", 
      "\[IndentingNewLine]", 
      RowBox[{"For", "[", 
       RowBox[{
        RowBox[{"ray", " ", "=", " ", "1"}], ",", " ", 
        RowBox[{"ray", "\[LessEqual]", 
         RowBox[{"(", 
          RowBox[{
           RowBox[{"(", 
            RowBox[{"maxRays", "+", "1"}], ")"}], " ", 
           RowBox[{"(", 
            RowBox[{"maxRays", "+", "1"}], ")"}]}], ")"}]}], ",", " ", 
        RowBox[{"ray", "++"}], ",", " ", "\[IndentingNewLine]", 
        RowBox[{
         RowBox[{"px", " ", "=", " ", 
          RowBox[{
           RowBox[{
            RowBox[{"RandomReal", "[", "]"}], "*", "2"}], " ", "-", " ", 
           "1"}]}], ";", "\[IndentingNewLine]", 
         RowBox[{"py", " ", "=", " ", 
          RowBox[{
           RowBox[{
            RowBox[{"RandomReal", "[", "]"}], "*", "2"}], " ", "-", " ", 
           "1"}]}], ";", "\[IndentingNewLine]", 
         RowBox[{"While", "[", 
          RowBox[{
           RowBox[{"(", 
            RowBox[{
             RowBox[{
              SuperscriptBox["px", "2"], "+", 
              SuperscriptBox["py", "2"]}], " ", ">", " ", "1"}], ")"}], ",", 
           " ", 
           RowBox[{"py", "=", " ", 
            RowBox[{
             RowBox[{
              RowBox[{"RandomReal", "[", "]"}], "*", "2"}], " ", "-", " ", 
             "1"}]}]}], "]"}], ";", "\[IndentingNewLine]", 
         RowBox[{"normUnPolData", "@", 
          RowBox[{"AddRay", "[", 
           RowBox[{"waveNumber", ",", " ", "hx", ",", " ", 
            RowBox[{"hyArray", "[", 
             RowBox[{"[", "field", "]"}], "]"}], ",", " ", "px", ",", " ", 
            "py", ",", " ", "OPDMode`None"}], "]"}]}], ";"}]}], 
       "\[IndentingNewLine]", "]"}], ";", "\[IndentingNewLine]", 
      RowBox[{"raytrace", "@", 
       RowBox[{"RunAndWaitForCompletion", "[", "]"}]}], ";", 
      "\[IndentingNewLine]", "\[IndentingNewLine]", 
      RowBox[{"(*", 
       RowBox[{
        RowBox[{"Begin", " ", "reading", " ", 
         RowBox[{"results", ".", " ", "We"}], " ", "can", " ", "utilize", " ",
          "the", " ", "already"}], "-", 
        RowBox[{
        "built", " ", "field", " ", "and", " ", "wave", " ", "loops", " ", 
         "for", " ", "this"}]}], "*)"}], "\[IndentingNewLine]", 
      RowBox[{"normUnPolData", "@", 
       RowBox[{"StartReadingResults", "[", "]"}]}], ";", 
      "\[IndentingNewLine]", 
      RowBox[{"While", "[", 
       RowBox[{
        RowBox[{"successNextResult", "\[Equal]", "True"}], ",", " ", 
        RowBox[{"{", "\[IndentingNewLine]", 
         RowBox[{"If", "[", 
          RowBox[{
           RowBox[{"(", 
            RowBox[{
             RowBox[{"(", 
              RowBox[{"errCode", "\[Equal]", "0"}], ")"}], "&&", 
             RowBox[{"(", 
              RowBox[{"vigCode", "\[Equal]", "0"}], ")"}]}], ")"}], ",", 
           "\[IndentingNewLine]", 
           RowBox[{
            RowBox[{
             RowBox[{"xAry", "[", 
              RowBox[{"[", 
               RowBox[{"field", ",", " ", "wave", ",", " ", "rayNumber"}], 
               "]"}], "]"}], "=", "x"}], ";", "\[IndentingNewLine]", 
            RowBox[{
             RowBox[{"yAry", "[", 
              RowBox[{"[", 
               RowBox[{"field", ",", " ", "wave", ",", " ", "rayNumber"}], 
               "]"}], "]"}], "=", "y"}]}]}], "]"}], "\[IndentingNewLine]", 
         "}"}]}], "]"}], ";"}]}], "\[IndentingNewLine]", "]"}]}], 
  "\[IndentingNewLine]", "]"}]], "Input",
 CellChangeTimes->{{3.839689080870589*^9, 3.8396890811783457`*^9}, {
   3.8451295036587667`*^9, 3.845129529879651*^9}, {3.8451295618295193`*^9, 
   3.8451297818025713`*^9}, {3.845129900205944*^9, 3.8451299360253906`*^9}, {
   3.8451299932994213`*^9, 3.845130059108921*^9}, {3.8451302267757497`*^9, 
   3.84513025861635*^9}, 3.8451304072598658`*^9, {3.845130468269723*^9, 
   3.845130498852914*^9}, {3.845130708399833*^9, 3.8451307106302443`*^9}, {
   3.845130842162941*^9, 3.8451308530146556`*^9}, {3.8451309730800633`*^9, 
   3.8451310358567047`*^9}, {3.8451312075957704`*^9, 
   3.8451312375859632`*^9}, {3.8451313205460525`*^9, 3.845131333583824*^9}, {
   3.8451313892417154`*^9, 3.8451314813051167`*^9}, {3.8451315158273387`*^9, 
   3.8451315692248616`*^9}, {3.8451317292498693`*^9, 3.845131909442631*^9}, {
   3.8451319624281626`*^9, 3.845131972038929*^9}, {3.8451321072268*^9, 
   3.8451321550502396`*^9}, {3.8451326719708796`*^9, 3.845132672147399*^9}, {
   3.8451340106601257`*^9, 3.845134037475815*^9}, {3.8451351568673077`*^9, 
   3.8451351569314456`*^9}, {3.845141151819253*^9, 
   3.845141162642931*^9}},ExpressionUUID->"45b0429c-cb9c-433b-b875-\
00aef69183e4"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{"Close", " ", "the", " ", "tool"}], "*)"}], "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{"raytrace", "@", 
    RowBox[{"Close", "[", "]"}]}], ";"}]}]], "Input",
 CellChangeTimes->{{3.8451320161446686`*^9, 3.8451320210967693`*^9}, {
  3.845134596824237*^9, 
  3.845134609912408*^9}},ExpressionUUID->"1876926f-f9f5-4a57-ae97-\
c1e13e3bf4ef"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Plot the data", "Subsection",
 CellChangeTimes->{{3.839695085951501*^9, 3.839695090625388*^9}, {
  3.845129470669815*^9, 3.8451294845780396`*^9}, {3.8451346155025644`*^9, 
  3.845134617031674*^9}, {3.845138178358055*^9, 
  3.845138187670453*^9}},ExpressionUUID->"9562d2f6-064a-426b-a9ef-\
848c4aa7324b"],

Cell[BoxData[
 RowBox[{"(*", 
  RowBox[{
  "Create", " ", "an", " ", "array", " ", "to", " ", "hold", " ", "combined", 
   " ", 
   RowBox[{"{", 
    RowBox[{"x", ",", "y"}], "}"}], " ", "data"}], "*)"}]], "Input",
 CellChangeTimes->{{3.845142760151913*^9, 
  3.8451427725519176`*^9}},ExpressionUUID->"ea405bdc-acb6-4633-91ae-\
0c32d690e435"],

Cell[BoxData[
 RowBox[{
  RowBox[{"fullDataSet", "=", 
   RowBox[{"Table", "[", 
    RowBox[{"0", ",", "3", ",", "3"}], "]"}]}], ";"}]], "Input",
 CellChangeTimes->{{3.84514078603955*^9, 3.8451408449946623`*^9}, {
   3.8451408856054525`*^9, 3.845140898771833*^9}, 
   3.845141135472744*^9},ExpressionUUID->"6607e3b7-3048-4ea7-8e1b-\
392b421c2c28"],

Cell[BoxData[
 RowBox[{"For", "[", 
  RowBox[{
   RowBox[{"field", " ", "=", " ", "1"}], ",", " ", 
   RowBox[{"field", "\[LessEqual]", " ", "numFields"}], ",", " ", 
   RowBox[{"field", "++"}], ",", "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"For", "[", 
     RowBox[{
      RowBox[{"wave", "=", "1"}], ",", " ", 
      RowBox[{"wave", "\[LessEqual]", " ", "maxWave"}], ",", " ", 
      RowBox[{"wave", "++"}], ",", "\[IndentingNewLine]", 
      RowBox[{
       RowBox[{"thatArrayTho", "=", 
        RowBox[{"Partition", "[", 
         RowBox[{
          RowBox[{"Riffle", "[", 
           RowBox[{
            RowBox[{"Flatten", "[", 
             RowBox[{"xAry", "[", 
              RowBox[{"[", 
               RowBox[{"field", ",", " ", "wave"}], "]"}], "]"}], "]"}], ",", 
            " ", 
            RowBox[{"Flatten", "[", 
             RowBox[{"yAry", "[", 
              RowBox[{"[", 
               RowBox[{"field", ",", "wave"}], "]"}], "]"}], "]"}]}], "]"}], 
          ",", " ", "2"}], "]"}]}], ";", "\[IndentingNewLine]", 
       RowBox[{
        RowBox[{"fullDataSet", "[", 
         RowBox[{"[", 
          RowBox[{"field", ",", " ", "wave"}], "]"}], "]"}], "=", 
        "thatArrayTho"}]}]}], "\[IndentingNewLine]", "]"}], ";"}]}], 
  "\[IndentingNewLine]", "]"}]], "Input",
 CellChangeTimes->{{3.8451391190584536`*^9, 3.8451393093294187`*^9}, {
  3.845139403787015*^9, 3.845139572746167*^9}, {3.8451396075070744`*^9, 
  3.845139614441995*^9}, {3.8451396714522853`*^9, 3.8451397084043083`*^9}, {
  3.845139875611199*^9, 3.8451398758102713`*^9}, {3.845139954683265*^9, 
  3.8451399769239335`*^9}, {3.8451405072847853`*^9, 3.8451405091292715`*^9}, {
  3.845140626835594*^9, 3.845140644867016*^9}, {3.8451407541624126`*^9, 
  3.8451407567438116`*^9}, {3.845140888646431*^9, 3.8451408911072907`*^9}, {
  3.8451409379811764`*^9, 3.8451409452501316`*^9}, {3.8451409849434633`*^9, 
  3.8451409936919374`*^9}, {3.845141049435508*^9, 
  3.8451411103356986`*^9}},ExpressionUUID->"f380fdc4-38b6-4e30-b459-\
cd064fcf3b34"],

Cell[BoxData[{
 RowBox[{
  RowBox[{"field1", " ", "=", " ", 
   RowBox[{"ListPlot", "[", 
    RowBox[{
     RowBox[{"{", 
      RowBox[{
       RowBox[{"fullDataSet", "[", 
        RowBox[{"[", 
         RowBox[{"1", ",", "1"}], "]"}], "]"}], ",", " ", 
       RowBox[{"fullDataSet", "[", 
        RowBox[{"[", 
         RowBox[{"1", ",", "2"}], "]"}], "]"}], ",", " ", 
       RowBox[{"fullDataSet", "[", 
        RowBox[{"[", 
         RowBox[{"1", ",", "3"}], "]"}], "]"}]}], "}"}], ",", " ", 
     RowBox[{"ColorFunction", "\[Rule]", 
      RowBox[{"{", 
       RowBox[{"Blue", ",", " ", "Green", ",", " ", "Red"}], "}"}]}], ",", 
     " ", 
     RowBox[{"PlotLabel", "\[Rule]", " ", "\"\<Field 1\>\""}]}], "]"}]}], 
  ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{"field2", " ", "=", " ", 
   RowBox[{"ListPlot", "[", 
    RowBox[{
     RowBox[{"{", 
      RowBox[{
       RowBox[{"fullDataSet", "[", 
        RowBox[{"[", 
         RowBox[{"2", ",", "1"}], "]"}], "]"}], ",", " ", 
       RowBox[{"fullDataSet", "[", 
        RowBox[{"[", 
         RowBox[{"2", ",", "2"}], "]"}], "]"}], ",", " ", 
       RowBox[{"fullDataSet", "[", 
        RowBox[{"[", 
         RowBox[{"2", ",", "3"}], "]"}], "]"}]}], "}"}], ",", " ", 
     RowBox[{"ColorFunction", "\[Rule]", 
      RowBox[{"{", 
       RowBox[{"Blue", ",", " ", "Green", ",", " ", "Red"}], "}"}]}], ",", 
     " ", 
     RowBox[{"PlotLabel", "\[Rule]", " ", "\"\<Field 2\>\""}]}], "]"}]}], 
  ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{"field3", "=", 
   RowBox[{"ListPlot", "[", 
    RowBox[{
     RowBox[{"{", 
      RowBox[{
       RowBox[{"fullDataSet", "[", 
        RowBox[{"[", 
         RowBox[{"3", ",", "1"}], "]"}], "]"}], ",", " ", 
       RowBox[{"fullDataSet", "[", 
        RowBox[{"[", 
         RowBox[{"3", ",", "2"}], "]"}], "]"}], ",", " ", 
       RowBox[{"fullDataSet", "[", 
        RowBox[{"[", 
         RowBox[{"3", ",", "3"}], "]"}], "]"}]}], "}"}], ",", " ", 
     RowBox[{"ColorFunction", "\[Rule]", 
      RowBox[{"{", 
       RowBox[{"Blue", ",", " ", "Green", ",", " ", "Red"}], "}"}]}], ",", 
     " ", 
     RowBox[{"PlotLabel", "\[Rule]", "\"\<Field 3\>\""}]}], "]"}]}], 
  ";"}]}], "Input",
 CellChangeTimes->{{3.845142916026019*^9, 3.8451429766755877`*^9}, {
   3.845143092934331*^9, 3.8451430949388447`*^9}, 3.8451432264450293`*^9, {
   3.8451434000122657`*^9, 3.845143424282778*^9}, {3.8451434607326384`*^9, 
   3.845143496019183*^9}},ExpressionUUID->"efce3107-276a-467f-be07-\
d6856e22af41"],

Cell[CellGroupData[{

Cell[BoxData[
 RowBox[{"GraphicsRow", "[", 
  RowBox[{
   RowBox[{"{", 
    RowBox[{"field1", ",", " ", "field2", ",", " ", "field3"}], "}"}], ",", 
   " ", 
   RowBox[{"ImageSize", "\[Rule]", "Full"}]}], "]"}]], "Input",
 CellChangeTimes->{{3.845143244146869*^9, 3.845143253445936*^9}, {
  3.8451434282126255`*^9, 3.84514342935966*^9}, {3.8451435527170086`*^9, 
  3.845143577090585*^9}, {3.8451436269790306`*^9, 
  3.845143629963144*^9}},ExpressionUUID->"741e4fe2-58e7-4071-82fe-\
940eb32b57e7"],

Cell[BoxData[
 GraphicsBox[{{}, {InsetBox[
     GraphicsBox[{{}, {{}, 
        {RGBColor[0.368417, 0.506779, 0.709798], PointSize[
         0.003666666666666667], AbsoluteThickness[1.6], 
         PointBox[CompressedData["
1:eJwdW3k8VN8bvklFX4lSJMskSpGGpFGYCSGyhOw0loRkzxIxiUiUnRaZhGxp
iiLZkiKpJJU9pCgqSZKk33N/f81nzL3nvOd5n+d533Putc7J2/QQF0EQDxYS
BPlJSD1QvONxtI4oEygbM4+sI3LbjxcTJ+uI0b0sTqkbneDuFvO0tKAT5re3
XVsVQCfUs97fXhJJJ8oNzGl5R+nETwHFPmX/OiIovtGjnVVHJIrudIw4SSdE
3KUr2iTqCPOgLu7IcDqh48XveusQftc5rDBpX0dQT5/y22lQR2hnhvYvMa0j
greMefj40AmV2SoxuWN0IupI6JANi060rdwu5hReR7T9u6mv5E0nCvq/ua50
pBOUAekn64/QCSvePP2MCDohV3hejepPJ3K7t1g6BNIJKcmmEC7fOmJCIN7X
y4ZOjGrs+Mhi0om5t0KdU/i73qrtlQmIt0RDa1UE1ss4eSo/WbSOGC59rucb
UkewZzenSfnVEcyj2n9OGtEJRmjetuPWdcT94wIqXMDJJOaGjJg7ncgMfqll
4oX11Nud/c+jjohl3lzi6EEnKo/dlvvPE+t9NdBQi/hSK5R1qcCpur+hrBHz
aZcljfGpYx0OUdeJE4gvqWjosjnG+e+S/+P9dQQr7Y0Ba1SDGOj3vfIc4wRL
NFXvtaojMhNcf41gnMvKSwWF8Mmk1VVt3YZ4Jp8mqeP3iWNqAhHH6girU7yV
dfhdVtCf5gK89JxiXsUgPpHRsJRkzBdMax4dQN4DfmTtaQ2qIzpNma2CwDdT
+XmkAvLKPjDn8vw4nWCOOrQ9wGf5fr57B03x95eeRZ2YJ/3E5xPBEYhXMUMy
O4hOzCzLqW4OoRM+j2xWTloDL77S/4aNkS8r5dwizNf7Jyfwpx/GSxJ55o44
TCS8/LzBp/JCQ9Zj8EDtxsrofIwTJv3szdFQ4Jd50Z5vRx1hV86+FIq88ki2
Xnt6vI6oj1Z1muFCvhxMHnaq0Ynm4q/186HAVXDzuYsuwHsq6EQP8sHj07fg
oHcd4daTn8oHPGSpxqOBWsBFexFXmT6dkF3fve/cKToRoGhbPo/48rn7BQKR
9/gE9/ITYdBBeqVmMjnvoSm2PvLJ81+FQgXyEDu31fgXrl/aLbt2tWsd0VxJ
/ewOHCc4yp8+g1dTvtJPiwPqiILuK129jnVEw8EHZ5IQn5RzY4FCMPIn17wo
n4n4009EswzrCJeMVtM+4B6lXXh7JXjvWV6w8SJ45xNh8/RXGJ2weObZrA2+
XPw933cL4yfuS3QsBO5q6VemaxFfgapj4U+MK32yrI0ct01C1K3CBPyZ32P5
WAV4R9hMbDBD3oRyb+etqiPmUkaUwpCn+N2NMmuc6ASrJc67wQt6fT2veOYg
+BgtosDvBpwLUqkudvjevpKaA/0ln/GfpiEuN9eDYiNYf+76f9Wz2+EPojyC
ifAHtekKfRp8ofU7zwlN6D/2yyvJZODG/WjURsiXTiTKOW3Nxzxv9odsXHoY
64nwvpVK+gXPpjXl4INbIHf0Cz3wVOeI0n6sZ/EReZXkE3UEsWLB6zxJrOd9
rWy0MvzgqPNVB3vwLP+wvL4mdMNF8AkhvxwzP4mazfCDaK7i61iXnunZiALM
U3/gjJgIfGSeO0+f6lxHiHWO3CfwvdK/SOWvCa67kh4XAxyV/S623oL/nK7d
ue0P8tCZnZnWEYh8rVkcpoVP4uHzvX8P1BFFKeYx+8GT1tbEkTxSHyVJ8iUY
h3klz/v3EcSpvl12HLrrXOT2ygb5fRPNaxWP/IUn7OWKBj9nyh69aEf+ZE8d
uLoH11k53RzQPYw8/L6/zN4Y8bbw+i0Dfyd03fv84Ded7ZFe0yRO1QoitRp0
Ip1+uX0tvgeLee18jXW2Lb0SfQfzDjC2hJvaALefy0JOIf4bckHZecgXQ7Qo
zh66Cf580NjSFfxSfKsTBb23mfvtPe2E3/tPD6YCF+Lsfn1rXjpBSFKaRHZj
HdZ/Zv6o0onqtHvjPeCTXonLKTryOvFTYK0d/Ix7aiZYEnmjfaJZaMLXY1u4
nY9a0glXyX7/CvBgatmeD6tckCcnNv0B8KOMruzaaAXca60tHjuDV36frxoq
wAc56zZ9RZ64+rZSvHCf3uWMvr8OiGNAsVMF/mpV0zh8EOuhVdHLZZWhq6aK
guUawO9ihpwH9DATGv6tFnoNE2/WU0V+nJxqY7OhU6GH8kfWYF6TOzf1zkJ/
M577Dr5zryNsZy46j5vTiZglcfx/wAMitfSphSLi2ZWxI3cv6oFPUE5NMOrQ
f+9vVqFu0SSXcywwHnvtRp8jwElP/NoOSxLXd86iLsi/9m8ehf/XQ7lbr/T3
Yxw+1UdM8JLYUHFUch90tyCBKgT9sHM/lG/Cfex6u1Q95G2i5WLPlF4dMb6+
R/7jPqz/lYHcNtQVzn+iwjwMfBbfaJIAryotFUe/Im7OSHqIMNbbvLz/RBlw
iY1dUtOL+ZOOPe56g3GX/bjpW2IBX2BUbr+AcZitualLUWfFVG8IHZLC31PT
n36B397Of7pzHfg3ebGcIwkeiMW83aGH6wOqnro5yiH+Hb3HRLGOgWj7cZld
qBd9I3NCyJfAspK/3fCXZg++v7LwK3Z1CWUTxskXCfBaDp96W12y9hjwyYy0
u78dfmBn/VBBAbpn+ix5ewLrpaiVefMeohNGfSXyQdCDQJrq3T/wTYL2b6ny
01qCYD7vvjBXSzDdN/c+Ae6EzuCOWdQLxqRM2HfwiCmmErVbGvi9CNFaC93w
nLfJ5N+A6+4skU8DjhT/A4lbtHH97/jQFPiOXkTE7l/fNQhO4UJBLugo8WGM
kxPq69brNeEeqK9x/Em78n3Am828Hw+AxyP7lupqIY8TDQ8OP8V1nLfUTBvo
UFZSOzsQ9aheer1sOPgbZmJ42gE6GHap4khCT8HVjEWz4IvQrzF5LdQDEZuz
RT749HGmahUj7uZPFNEV4OfFC0Wy2agLSuUqy9YA7yExZuIo+gqfqiUsReAU
e3Xyvy12WB/XzUVZ8MnhbUPsxbg+U2GJ+U7kOzEl7kcAfGJI79oqEeB9SDoo
7jfyvtPie987jN9VNJGlrgN/3yGUzwt/2NC4SzEU62C9raFuZwAX5jUf2fXQ
T2a0FNm/aNeenGxGXyBbs8jfFfMXOMqflod+ZvteVxlvh67d9jkm4zqaXOci
Y8QV/GU6QAFxTZR93yKFvtC1OcHoBa7/WvXHoBL6f2Xv2VIL/FiN1/L4sH6W
M3u4Qw14/PWZm4JeefzE4njgQ5Q1y5e1mMGvzii9e4f+wOqGTBIN62qTFhwO
BZ+qLXoGxaHLSJH00hnkObOMz28JfErgZcUDfVzXEfVYpgzzC616+1UJv2sW
JopZYr39RTl/P5DXh4oL2kIHVquMXA9hHCp/szQffm+2pf3dQ4XvHTsbXoB5
LKZuf1gHPhLVXdsDZUjeeLhsQl3hYa8Wa3WoIzx0DPZJIc+iVI+hBk/kx/DJ
iS+4L5V9v2sj/m6itvbKOgPcT/y+GrMUn5NrV8/f1iAEgl0WNpC4513fGor+
5ByvQONN8IOpHG+VDh9g2f+zvIK6lnnl/elxjNvYv9D5DPoUE9uNp06ibyXW
pPh3QRexi6/Fs2zriMqEi8WL0EcklpxkWqE+CPPbfemBfhbWpMmfQL2inF5E
C0deWbGdZnv2oB5OC/9ho/+iqWd9MQV/KK/Ch+6j7lBfnvxscgC6ztGr6Md9
Pm9tfB8D10TZGYkwzG/+1uHOL7LfLiksVwK+And68jfAl2bMhAcayD5hPGtJ
Dvgc2XJDPQ984e/6UtUFPjDjnW+cRz9oIhMe+QzXxVu/Ll8Bv6BtDTwqcAr5
N/l7Mx95j3oZdVEJdTq2eeMjXfjIgCJF/wL4X+80/+fZUbKuPKv4Cr+jbGuZ
TiB1d6VLyxR9IWv9JDMLeeqUunZsArpmVbmNi5L9z4j5c9lNiLcr+JwGfKKz
u+FhN/o6duTKlwtRd1l8YZUULeSpxiKDAr7p8b51CAGuo01VufexPp6kmAWV
2qi3V3ijRyyh111Dxc/Bm8sppeGrEb+VDxfhB5zVQi1EraGzgk1j5v2os2w7
m48L4e+sTCle6gb47M58h4eoL+mt/CZfyf50t7iAPvTG4kg1+0/VEs3Ki0U1
kW+G+9LsSugit6W8diuu41NlFXIB34D36kU/wKdcc+32lSLI13CY4QL4P/Hk
Yok11s/Mlzn7A/1u/T1i2QPo+4r1AR5X+PaVyBvGVRins41zSAS4C8zmXlME
H03Wte/vQR7r+65nf6Wi737VwNMBHsivPF5sBfzD3huXKIIfIp/X6b6Fj2Sm
yJ2uRf46q1Us6agPnD7VwmeoM5WJhPUQ9CB7NuXjA/RjsiJX5NUwb/0cpaUU
+w2GkFHRRyXwdc/cjcaF+OSfKV4gjPUU+Xl8g3/LqpYUpwI3U7bHhXD0ba4v
mjM4WGf5+vprvOg/x6trOjZAF+nT7r/Z0EH81JZ4XrL+xc9/E0L/OXP99g0n
7O94omzEDsBXal3DZzegDneIvLvaDZ1XDicKJeE+bYug/D7cJ5Ihqx8CPrNu
PJwuVwR+hSmcW0uQLx6jmqPoi5hvrv66sB7rPfaK3wv563UyYXaQ+4LTY7O8
wCGs7Fk7uX+rp7yzOIN5GHnpjnLAoV7twMQfrEevtOE/CnAmTi9fcBPjMVp2
L/gE/yPuM5YNIm/ECOWjtxB4pi5QKIn4fJ6GfrqF9W9WKon5AL512OnEP4EP
jXLP1a/Aukwmi27v1oUP9ESLDmK9IoyhitfQ6eiNgpwh+HJzmGDcJcQTfF1p
ZQ7myzz6q94M/O0Z3JFshPU6ddpfpaFOT02WmLdoov+/p1G1F/1OU8QxOTbu
2zoz+3UA48aeD/Rgo09gdTr9W4P9L7Vrc9AP8Ib5ZXZt40b4gfGAZSuuo2hc
u1mFOtf2fHeyPXju9kr/OA/4xv33u3IPcFCr/VPdCd1X7pWmUYBHXLXjt+/Q
camBzJ4p6OT2l7pBAvENXNPdP4/+oN65OKADdURou9CiIvSTuWurbJ4j//lp
j7sZqJt3iw67f8Y6mk99WvoA49M2v4zoRV/dK/nyZzbirRZPDDuMvk/+6oWI
x+BLotbyWTnEveHQ5VlV8NBBZpvhML7zSBnbGpC8SXO/oiMBHXx+rzOCdYRN
nvGtIPmwVua8CuqTnqn1she477rzdfEQzBOg+IXLAvG23Xx9QQm+wkhoTfba
CT+8fW70H+L1eXx6vhV5KNkxwV2KfS+F//RXHeRv8fDRPe7wqxkrORNpct6G
gqQI3D9DKCqywBu3Me0zHsgDlRno/g98YXvnRfJD/9z9N/42g+8lpzNpsuif
XT667ppHv1lwr/QtuV/i8Y07GmsLP430PP8TOqTNFc6Lw19danknWjAvq7Yn
+BBw7c5oNk2Bf989JrVWELgTh5lbn6HvZulUm2hiPbfFb+X8AX6pWdlJdeCf
69zz48noczJTGaeXYV7mUSWeg1jfAF+N3hXsh1Pddl3KBv6ybrc+7oOeTB49
m3yKdc1fCmtOAG69IkUvziI+2cgCNhP7AGWV3s6d2P9lWm155Y96Q9GX6uBG
faLdb3N8CLyoh5fuGAMv6gfszFUFoZfaS9cOA/fLqfxKWthnyZ8TcOHAn5Rr
Ptmnw9dFbijsmQcfCjqKdt3AfYlcunv5gW+ldN/dZB3U3QGzFQXQBYdZO7yA
9H+pinEq+lmWrXxclRL0cszwdSD8uvfZoO8djE98UDs9ifx3hu5oXA+fY3kT
uTt3gO+Cj6ZK4aczG2e+FiE/nM3cFs1knNkqTcY05H93keAXafDnhGkQB+NQ
dv8d4wPPBxb/y3VA/+jTO2TTDz4btAxsuwt8lGTyTz2B35YXDOWHwP/VfpmK
FiHOgH87BEOh/4CNGsP3yHODk2dFCjGfQNtwYzzya+XfYzCNceu3GFz/hL6+
eZ1g0kZ853C5aWaCD5PlNSsVkKdcWlNWOfTNylG+WgIeUz9X5xjBB9gHU170
a5H7C9EzVfqIa7BVnB/7pQED6c3i6GvbJHcL/ATvOCVHwtZgP892bRcpCIK/
Pvp79DPGr35y324Zee7ydt7ZDP0UR9hqBXlOQ3PZ1mOJ+l4uvF6yGHgSE4s/
kn0Vkalxc1IBcagdyvCEfy5eENa0GOv36g9V/gG+W5WVhs4j/7JP8pS8UU/n
Fcd8WKj7g6dHlMMY5P7r+8sO8IXpvCPZHjwjDPdVpqDPqZTheu5K8t2l45I5
WedZrSkX4Dci/dvXtMGXKf2rx3aBH5wLWaUT0B+Tl6p4Vx48E/7xxBD48iXz
hPZg3oE1v+u1wc+ZW7w/WuGzrDcf6pnQGTuNK6RTFHib6Y2qgf/MfTJRH8GL
UesYlynwy+3AdYo9mZfoKUlTrLdN5MrQM/S549fMctIxXi9xe4U16riJaaB8
NnCiXQl5F4l9xkXJB3sbwY9Mzoc3g6iLlS7mKmzSZx92SDiA/2rdvddF0cdU
MwfMxRBH8Hr7s+rkeYBD8fch5INRq9DpgX1ZbExOYRh5PmEjUesPfBgVtfqX
UU8DD2t89YN+bR5mH7iMPGUOnjdTJ3nKv6G6Eb7eOsfR3L2XTphL9k/vga9M
p9t2paB+UW2OZSTBJ5n1iqEt6GdEHtEX8JDnEWODa4/bAY83Ly2G0G/p0Ixz
H2N94cLh17TAE+XL3VvFgY/sBamI9Vj/6J7+dYbwXapZYy8P+mAi7+PsArIv
OVZ34qoueEYTP7gS66s35lngsgQ++9Pj8C/gwHoivFwMftyx+vlmP+jB5zAr
R4zslwQ6FDajHzM5J/tpkPSrH/5tueBZ4rZe5wvAg+uelx6Jd2DKugfk+aTC
/iiLA6eQN7WgS9vJdf84cz4FeN1eERMtDl4x1J+0e+3G/AtsrmbYgEfnnlwl
z3UzkwyDVUg+to+17wGeUxodTibYr9FWcW+swfewb49Mv4F37DHnCB/wkh3V
IcmP/YCVnqmUOnAzfaehWoLrYrvTW97jugLxz9/jgFu/w+BmXfjI9ccvruqC
Jxz+z++jERf1VpBe7nLgJnGu2xn9p+zamX5Z+KE0y4YrFPVlTYi27XbgKOC8
fa0K/I1H1ffOE+jQ6qT0r/0m5DyOmSnguYhvzs5m+GPrWEV/MVl/+UzEZbB/
mAg/0WcIPlye6SsshF8KDRtpGiJP7HZf1Wn4MvX+3iPT8HvGjJltDXyCIaO5
jbMdn9FpmvrQCcPuglkWfE3v8Zt7ruBh87LAVXvg38w0/mhL+L6Pi4FMGMZR
5mSdaoae3coDQ7o1oHu/8yv4gS/rRMSYO3QpsIn3TCx40db04Y4XfMhn2ZE6
DvgVXPJV6gfqE9ETGuIMPg78KRNeRu4vhX7WlYDvscvuPyhGveIJNT/zFvol
5Mr27QQO/uPPnpoBL66XIwMe4Isat7/kbvgaTTm95jh8T09AeGY59FWvzNtW
hvwNyL+kn18JHEXjRixNwQfT49uSkW9O9E4dKX0ShwnHPvDDRzCxn7MH/vMj
vIk8vzQS75N6Qu7nH3lyj5H+sHe29i7iYHC15hpTwNfu5JmYHeR5jMufRvRx
nO0LLxpsg09G9Vjnfa8l6tvvc4yQl4KzxXanka/g96tb3gDHmU+Lb60n62nG
FvOEXeCP4Pm5Wawj7PSxswT2GZyHLoriwHXp9pi7ReBJuMB1nngLOiFopnW3
IZI8Hw8c+ymKdYy3rJgh9bXuzM4G7L8G5OP5umiof2dGVsRi/BlupwthmM9u
2fnGn6j3svuK+1wwDysylBKD9aQaDyUtRZ6sb/1OTode1hjuSKsyw/puualo
zdYSDNN3d5nq8CfPRzF/4OP6vqYLtNH3SodJ3TgFfYrysN8MgeciCTJt3Nhf
lOsGF42SPhRqfyMR+3Yiet3xNcBXw4/3rKo5eKtM2ZsI/Zm8W/D5LVmfand9
UwVejAenQ77AR9tCY3v4sb+kNh159ZY8385cm2yJvl+Tq9UoCnrYID90MRF4
6q0sHd0EH7CwUAtMBT+5Kd19Sfiup7jgBwd1tpfhYr+T7AdPJwYu+1NL5J7a
q3crDDq7yce9HLzp6EvwXwRdWYW820qgftYXbilsJn00PObCQuA5IGst2ot8
TYg9NNM9iDiOdmluhc4mlugyKt0R37Ex5aPwmU7J8wtOIu+sv7vkj+C7wMZK
ylrgdSdtJJeKeI67Ka0/CB43M0yukfs6nrNPb7nCLxNVqglj0s8sOthM8OzN
633u5eizMvfky6xAXqgdJ3r7gkhccpech455zJQ8/LFu7u57PnvRH4gYZH8Q
Rx2h+UfR9OBXPt89hsIwzsBQ01QwP9afeKYpGPka13zaIYbfKVnynuaoq0yP
h1a72jSI2JyBSTfyPOiPb90r6CagMCJDBfrV+0Tz/QA/9FlgyTuBOpS41ECy
dSv4fWVtiAsd+pHZuekb9MMeNntNnk8R8a+ny8ET5oImLin4TKK3vk8T8J0N
PhtpDl57yyafXIT1tF2OOReL9UQmf4t5ST6fuM6euon5WK/71XehX2YOLsrX
AZ9YzFUJr+BHLVef6ryFL8jmWVdTwfeCTSWeIs7Iz7O12YEq8OsgvdmP0KlY
4p4JOnxtQlgqitQZMbo4pg19zML7zltuIv+mAjuni1DfKsQKy+bQr0a+bR+s
BM+H+atWV4K3JlV3VUPk6gjxB+F+l6HrLS/4DpYHknp+4fATPHI7GeeyBnGJ
ePxn04g+QoXfbF0H4m4V8R4kn2/qHS7rO0nimjgVe4LAfd/TLFdr04mb44M2
hVi3qvWFM17Id8GbvR2ymE8s3EVsOfLZ+GwsMh1xS8V+VN+AvFNLht8qoy4w
aDs3L8d4ndRzcY7gn9v0J85q8CaxZUtsDsZrNj+csRX6Yzjs9hygg5cdN/vk
4LeJBo1+PtAVf9f982nQw+2/ImG5qOerpC1KGoD3QICmdQv5nG9uVK4YfFdT
tHguD34MT9DsCOi/yPB69Rv0mW9O2DkGIy6FmKwmR/K5FOGwaTe+W5nqrszU
QFyXUt85Yv8WH7LNbAJ+InDvxFEz8rmHmsHlM6jfl8WX/YgGn+qHJU50gEec
rfd+RcDP1DbrxfhDP4wS+gdFzCsSEbfTGvM1LxCYv44+ZWZg6NZXMv8xxaKu
3mR/Qz18BHWGQr80uwJ4eCoIl5G84dnH9/Yh1uX56OpRYfBsX9qQUiHmtyq4
tp48hxdwcs24AN8cKJdYPQM98+wT+qUEXoqIboqMBT/4HkQWKKA+FkgIzSli
vGDLcNMM7KPrX65enCuMvmdTZPULffTtS17Mf0WcbGqb0CH4USI99ZWgDHRR
9MFkAD5rFdlbXIz+z2o1lXUVcUiXith8Rx6JvZRYKj4FZe5NvSb7YoVfcQT4
d3nDEks18vnwuvRd+uhXLtAV2sPAI4FjJ0/tgm5pgZ8tRhBfs8AZBW57xPHv
QcQh+DfLQyTyBHlu9eDuUuN9GM9+wd1Y6NaE58pSDdwnO/PJ/tkK5Ms7O9EN
ujHysFu8AetvHqWk1sNfK7l/H623ha+k91dpwP8GfpqIPQGfOIT4nR/IIydv
U3Ua/Iv9/LZeA67PvD0Sex082efx5LsBcHZwetocxyTP5TImpbG/SP177NI5
1BORJZORT8nnhhrHtNaAlwKyijlsxE3tv9HiYoS6k6V5fDFw4SueWmgTAX8y
6Q8dgJ6ob2KPs9DfMGWa8vXwPXO2qfE8cBLwcX7rRdZfh9oofuTNZ2657Xf4
h4tS7LVQxBX+a2IvOc/qdYMefqRPtlQExMGnZwq6LMuBg8tkvXENfI66Ulg3
ADj6qKjd0kK9ZFkaafCRz4GUsye9BZEfmb3nTmE/Gexk33CY9Nn5LN5G8Jgv
+2/WRuDt5tizwQA4ET89q43+ahCEqPn17xJ0InnOpjUZvjHaNfVFBPu1uBYt
z4PAR9NDRvsgyduXpaeKgRPnSZn9DvCeyeMg4CYEvMWKOnyxr67vNdn8BOtj
0PLvfIHfhUsffM2N/K/+eNBgBvtlIs3l8yj6dLvo3sdL0K9MtP0dmQafEwWS
hcnzHJMbMfZy5Plelz62B9BFSWVsBfLKWJZ5SQ5+0nHl8mQtee7221L4gSp4
te2SbjN5Xnvsv9rv8B0W16EhkTVYl2eUe8xW6FfYOU4+HP55Z88hYcSXdMvx
Yh7meyz9RdiEPO+9dv+9Ge6bNuTZpAsdtCzT+PmU9FfvXb4M1HcW/cW4HAVx
yyf3PxWDLwjGVE2i/82Ud6ccQb+ueVAw3hd5/yij5/0E97mnLwobBb4BO+zc
0qAHjv2Db/uMSb0H3d8APc3K7f3VAf4uH9aUKYZOOBSG/WX4D6O6vucrxh1d
tqN0BeK7pXPeyBt9o5cXt+4UqY9uP6oJfGXO/mzaMtQru/ifm15iXSV1xx8P
Iv5+uta6L+CtSTJ3tg76h80LhRv343eKt/6qHPDCSipxsyni4Q/e+9MOOuOj
f6j7ie/UfPHRm4i/PKr3QCLqDmdsoY4X9oX1ickpP7C+8sMJORcR93iTxcGb
8JP5ptvhCdDn+LWJi2vBE07sFP9D1CmW10N+8rnRzGkDU1LXbu0lwVcR76+8
GG8tzJew/7WFPvwvyDFHjxd1J735oHILvlN0MwW+Yz/NGm7QZumiL/rxrPI9
4lb+tFF2E/LDuKxoawH/KR/fY60LHHi+W254Cp/imI5PUYFD5jkDlTLENZxh
Zn4IeqFEXgjPBh6hKvppq4FjbH3tsC3wLZiqzYiG/karvsxtgM56awS6t0Hf
3H7/yh+gjsXGJ5cmIx+0SvYKEayf2tnvMoz+O3F+W8XQfviG0x3f/Xrw5biY
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
          "]]}, 
        {RGBColor[0.880722, 0.611041, 0.142051], PointSize[
         0.003666666666666667], AbsoluteThickness[1.6], 
         PointBox[CompressedData["
1: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
a/AP1GS+KOpx2v8AEfSMIA==
          "]]}, 
        {RGBColor[0.560181, 0.691569, 0.194885], PointSize[
         0.003666666666666667], AbsoluteThickness[1.6], 
         PointBox[CompressedData["
1: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
VBEXT6W7K7qAO77HuTlOyJOydu+tVNQFHw29+XLoEbuTW+sx8N1W8ntPGeKr
rSeQ7o+4j/eWz9VgH8pnL75+1AfOyNBeOvr2uNf2LF454FruRn4y7GU4JrUr
CgHXKULiRcifohDjjxn5/Pnq9o6F5Dy8J+vze/SLhNBzOYMR1NemjAdU8jlB
lFlvO/SkUEV80THEc6iZO4h8790lv9FAFnni8DPCCfDssselS8XQ85gdUdKk
/5Q3Ip8KyOezC6y+SCCOnqX0KH/Ei6LScZh8vqA4e+f//tEV7qXMk+9VTWo6
dFXYxIbKp/x/oNMDWd/V/FE3aQfPENXwX0C4vbANOGAOnt9Kvv9tirnTvwI4
kqyq1lUFfzJVhjVLwMe+1pjJndBxrQVUYSHYy7JM/03WO8V+IwN+6Ftul1eB
APodT5Vb1yJgH3OTk+pT8vxC7HeqD/Qs7lFzYxHypGB7ge8L4k2ZO/t9MXlO
WLhJYTHqUOGROONsUpdGBU110LcRtxX//QUvaDzei4Nk4b9KGs806kN+7o5F
fsCVwmXx2gbyPXLidgte2NumenoxHXonkPLonR3mR/o23xoe1KNqm7Nm5Pmv
LLO5B/74njOZHR0LOyttLq+8iDlO7KLg3ZPoB6cXvQt8hf6Fc+qlgQ10gJLx
yKDbATr7e6hwB+rVzB8TgyCsJzt5x6ZRB/4vGw2Nxz5E5L365YjH3O932l3I
j2mbaIAb+uTMkrHS07g/IrXA+Rx5Pil+NUdaAPcvKOs9boj8ffozN4n8mO66
2MWNvj9uW25/PuKydb92xyrEj/KKrfIc9lIWCFUkwc7C84pcj8g547Xok/kt
iHMk528T+h0Li3/74qBDaf3fMlWwX+G+9NUZB9hEeJ2sbQL5HHBjefgc8EsX
N7wyCXy3Lc4T9xNAP6zxJy8a329KNFclz8GnnXl4W5o87yr8L1GDH3z5yLXO
EvsT2414rpLnLdd5lmfBTyv95982o246FRox/ZEH46CF2V3AgYiu3rdh4LGt
+8lDXeBhRlRl5W3UcfHtUScs0LdVP3YOKIGOHygKGFhDnj9/7fRpkDzvvuBY
mgHsb3vvprtEEHo1ezNWhnwv/XN6kIDe05+pmF5AvSuUlNolRs5fR/U1LpP8
WtSktoU896N15po47Lr+Rff9uBbu+/uEywr1MinbmKsddus+/ye8C/3TjF+O
Wzx5buCOy7jKZipR8fptaXcoed55/e8AxDHi2dOSENghab8j9wF0QpvFrxAD
vNqeTgkhn4tp/zoTdBXx1+mY/yKMOPnn3rhoBdxRHv2a2gp8yTIvN+yFvouf
jN2Zh7msbeF7yRTk3dhO2uog+q6KwU+cauwf13ifWo3PbjZVS3YDb64eYcIl
mOsY37aeawD/wkccZ3+S5+Haii8JY66ouCNuR4fe8xVcP1dKnkdT8z00TsN+
dZOKk8bQU8mbfH9xLbUeKgyG/mW9+3X8Iam7TloL88A7zrIWmYN/9ImXDfa/
vq6nEj+6Dp9zQ77prlVJf4Ar8fOf/74HvwVe8r0Jgj/E+e6hFXTo0dOTjqr4
nvljlf4sPs/ouCSoAp+mMjnG6uT7khPLO8k5KDOpcmYN+Ouie1eoA3nydGgT
IftfU/ejr/8gP0OUc7p86B89q3uUVqMO2a0zFFyM/NsJPNRVxLpW3kd9S9AX
h373bpxAXuOcI4NLUccL29zXh0DXMqt/GfVi3dBvsQJ96Ff6zyX4SaA/vvlX
NzmDPF8g3UU1QR1ZE1UxV4M+Lj/ItcwCnymFRhn+wJ/iL9dbLzaziTDXxoxv
4GdgcJeTEHSExTw1th/456Nx8/0BX/mCFZeWwa9BekNqOOZaTmuZZRr2Kbze
kWMCe7qmH0yIACdDUvUHq6GzencvfnsLPkV31vN/tMK81vk0gmNC+td9cQ15
3kVdcF0Q6qPn7W+uAeivY3JPqTKBCwpdZBn5/oQvXTZoF+rrlL9pG/nclhj2
G1sE3rRNDDgbIe+KsVf+2iI+49P2s0fQv8raPp1QAo8pQ9WV1uTcEey3VQk8
ZJrsiX2A9Rz8FNs8caWOb7V8ij5007D6/Xvk3PRN6Vg9eS7x4OonEeDpJ855
rtvoT3s+rVwbQe6fn/FXgnwfo3FTVQH2+ivVzFwl8a4R4vOOfG629cJHFcw3
4es2KLaQ/7/1RKnzLfLarzCzYxx+08LLh55qYb0P1RFrwBf6ARH1JPTz9FmT
wSCyTohrHm1F3gR2fw7wQRw8rd9a/4Ae0LgznZTJczsC2ewfqEd7FXR33oWe
/75v7GuNfJQ3ytbdQhxMF+psXglc82kmSX5D/6F81NtvrQGVqEpewq0B3TY0
OGphA94siGZftYZui1kecJDG3/ve/zp9A3F9o/8nQIU8Z19kIpqHded+3O5Z
GUKe+1z07A95HkI66C83eZ7J6arNMOwPzBg8NUAnzxEEPJZaDPtq30cVoK9p
y/v7x4b8PxHFLwwV7CfuLh1G/r/TUEHMiJga7rcJOUQ+l7SLVV5hhL5r3O27
P/le2+S7x9k5rO/Ep5t4kuSVgJjlLvK9gJmtOBd+Rwx0iL36Wku42g80jmK+
/ib1+/cd5EO2jyfsK3SF0HOz6NeGLvZyNfpgLicWrZu3RL/6/cOmfxeBX4+2
dcEW6GfHY5yfvoCfm3rNnnxH3oZ+OFyPIt9f/vb22IM4Moiwdgb5/GVG3uwn
+r2Mv4ZM4/1soq4pa2UW/ClWHlemQXecFsxVxYMHxVr/aiyQD/+T264Ykc+p
GgdWl6Je+xe5mRiQ56wevn9rTOKj05THF/VR3sFwJy95Hvdy77pp1LUI9z0b
w8WpBP+rAVVfxE37CS/fA+gC3aXMxQz9ma3t8eMOsI91O8PZAfGRkeAaNYAf
VTcUnl0ArrIuxbGXIh79r1lKK2DPpqgdx+5gnTNydNpC/O6lz9SrEeDJULmP
NTGmT3A+tn6XIetV3Ill+4Fj7Yp9O8+i3gjyLXpeDD8oeTf8m4DjLCWfhbPg
UWivWh0FOljRufEf+bxLocmM6IZupCZKB2WvgZ4ovbjHjX5ng8l7Rjt4Ezdx
znIM+DeNFDXaBfuGEswD1OG/wIP2H5WY3xmRevXJ8F8g9Kd5GexSbvG8SAMP
5S29U8lz3XndffeNyPdlryyL1jDIc09Hn/xBX9x//VNzE/l/LF+OOAYC5znN
vAK3yT4uvutJJ/SrUIovXQFxkIyJbkoCviXnCs7thD1El8n8E+DYzuZVnzHq
ouTrbV2SOuRce2zwC/neTT2kexZXutHttno7KlF02OJQOvx7nD+2R3sPlbg/
MZi5AesYVgVbHoZOWLmYfQ+HztJGr+ypQz8buW/0Eg++P31tbvBJNPl/aNue
bUR+FIvWT4FrhOH5QwFesCuc3q0hBzzrHvrWshn+5kQHXlQPIc87nM3gR38U
92Cl/SfUCdWGZYol4OPu9aFRGqiTtDmdmBnynMISLkMt4LG0oWXokyn87cn9
eI/8f8+mW/xDqAtZlcxtrxWgA29eCnmS81rX0k225Lnt/ReeWYaT9eqLTiT6
hfDKeffd6BflP02X2CJ+VgmyTq/gT5nnfdoN4OsTd4HWWdgdeDnGbfEJ6v8A
4eBajQ==
          "]]}, {}}, {}, {}, {{}, {}}, {{}, {}}},
      AspectRatio->NCache[GoldenRatio^(-1), 0.6180339887498948],
      Axes->{True, True},
      AxesLabel->{None, None},
      AxesOrigin->{0, 0},
      DisplayFunction->Identity,
      Frame->{{False, False}, {False, False}},
      FrameLabel->{{None, None}, {None, None}},
      FrameTicks->{{Automatic, Automatic}, {Automatic, Automatic}},
      GridLines->{None, None},
      GridLinesStyle->Directive[
        GrayLevel[0.5, 0.4]],
      ImagePadding->All,
      Method->{"CoordinatesToolOptions" -> {"DisplayFunction" -> ({
            (Identity[#]& )[
             Part[#, 1]], 
            (Identity[#]& )[
             Part[#, 2]]}& ), "CopiedValueFunction" -> ({
            (Identity[#]& )[
             Part[#, 1]], 
            (Identity[#]& )[
             Part[#, 2]]}& )}},
      PlotLabel->FormBox["\"Field 1\"", TraditionalForm],
      PlotRange->{{-0.01663321164007847, 
       0.016642304103367422`}, {-0.016262141451909073`, 0.01614593877656212}},
      PlotRangeClipping->True,
      PlotRangePadding->{{
         Scaled[0.02], 
         Scaled[0.02]}, {
         Scaled[0.05], 
         Scaled[0.05]}},
      Ticks->{Automatic, Automatic}], {193.5, -116.80842387373012}, 
     ImageScaled[{0.5, 0.5}], {360., 222.49223594996212}], InsetBox[
     GraphicsBox[{{}, {{}, 
        {RGBColor[0.368417, 0.506779, 0.709798], PointSize[
         0.003666666666666667], AbsoluteThickness[1.6], 
         PointBox[CompressedData["
1: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
RdpYy2cqlQXstf20X5YnynBL7jzwj95/n2cfzA==
          "]]}, 
        {RGBColor[0.880722, 0.611041, 0.142051], PointSize[
         0.003666666666666667], AbsoluteThickness[1.6], 
         PointBox[CompressedData["
1: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
AG8vCmFzJeQ2GfMjimS8n+1RzRVCfsowttbMCHVrfslTJtY/cdt7330KfslV
cSkN8N2wzYo1BX+YP007RfS3xq3qLAm4VyPnE9xft2+J54MEPO9v/6wY9su7
k5/bFl2rfWF9kBgvufhYjwUdSRc3XnaH/cXlLMZIYzGdj98GIT4/vPeOTMcf
/7z/7AX4au8ZGVFvnJpyickC7Kl0fp+AGHqTm1lwDvBP3o5TkQlISfLlJUSs
b3KuMSE0Gm1N3ivZCvdjtOjg44dC/lMNVQZ8kImvCcVjk7E8Ouy3n3KcWScG
Pd3o3ZIP9rTuwNjKceRS1KbLToyXoaD39HIEKrhoy3CQmM9g98WSslBkx3S5
nBvOX2eD9xkDJG6y/jyMZ+KZXqMYgS83tUpchfNc/vlb2Rw1kzQzYD8VR445
bg7CTWcSr1jBfpwDyLNkpB8xJDpIzEdhPjVV16KR6f/GDEP80s2uuRmKiljq
HtsDPuXtrJzWRIbZRdn2EH8KHa3UQnDXzdAyuF+vvE18OnSktHhq4TrY18E4
2duqOPwS5fQEMV699YfhfdHI5OM5Gy7AG8mHRDy8cKH9vsPB8P3Nn+0jiYjE
piVBBnzFxqWw2QKtF75SfBjWZ7fYd4iO7TffyO+CeCcj8/21A0oZrRGZIdaj
ybfvbbEKkrRJu4eJdo5jcsbkYGyzrbSulZivYvFFvbgX7jdh4/QE/z5puG1Z
Eim/az0F/sDgHANNwQ63/n4mbkS0r3W8rM5JRTdX+U6ZAd4ys3XQdUUctc65
NPh+tJU099e/bDxAA//K/8T2SB4NFebxmoE9cmhv1JxQw4JvOZUWwD7isn1H
AvDyXnd+TaKdKar7CDcNf4uiOIC+avK0vh6RQsbfH7duIvrTpp8uNbtg6nyd
iA6cd85R3dsOSHOQnxP8caCy6laPRGRaXmwM+Ifz5K3YpWhseUL81ywhVxeV
3/t73tInuuTAf1ZYnPg8E4VY1o0xnod4fuSNipgTLvRSHvhKyCZCu3f70HD1
WPl5wGeiD25E9QXiPFL9dzqcd7DuqoMhXs6SWLOTWI9S29cMdAglH7f0niXW
W3IeM4pF4vJn8dcYIF50en3RmmgyvZRvpkaMby2RUnLeB3keTOA3BLzzzK9d
wQJPC/M8vUGMJ63SUBeViJZS7x+D/LCM3KCXqoKWByOaIP+xcBKKqndGEdvv
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
0xA9mO80+GevIl7GtZ7YbEwom6hn/Q+SHm0Q
          "]]}, 
        {RGBColor[0.560181, 0.691569, 0.194885], PointSize[
         0.003666666666666667], AbsoluteThickness[1.6], 
         PointBox[CompressedData["
1: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
          "]]}, {}}, {}, {}, {{}, {}}, {{}, {}}},
      AspectRatio->NCache[GoldenRatio^(-1), 0.6180339887498948],
      Axes->{True, True},
      AxesLabel->{None, None},
      AxesOrigin->{0, 17.417657860599196`},
      DisplayFunction->Identity,
      Frame->{{False, False}, {False, False}},
      FrameLabel->{{None, None}, {None, None}},
      FrameTicks->{{Automatic, Automatic}, {Automatic, Automatic}},
      GridLines->{None, None},
      GridLinesStyle->Directive[
        GrayLevel[0.5, 0.4]],
      ImagePadding->All,
      Method->{"CoordinatesToolOptions" -> {"DisplayFunction" -> ({
            (Identity[#]& )[
             Part[#, 1]], 
            (Identity[#]& )[
             Part[#, 2]]}& ), "CopiedValueFunction" -> ({
            (Identity[#]& )[
             Part[#, 1]], 
            (Identity[#]& )[
             Part[#, 2]]}& )}},
      PlotLabel->FormBox["\"Field 2\"", TraditionalForm],
      PlotRange->{{-0.011268793953963296`, 0.011242976785197811`}, {
       17.42016906014102, 17.470393050977485`}},
      PlotRangeClipping->True,
      PlotRangePadding->{{
         Scaled[0.02], 
         Scaled[0.02]}, {
         Scaled[0.05], 
         Scaled[0.05]}},
      Ticks->{Automatic, Automatic}], {580.5, -116.80842387373012}, 
     ImageScaled[{0.5, 0.5}], {360., 222.49223594996212}], InsetBox[
     GraphicsBox[{{}, {{}, 
        {RGBColor[0.368417, 0.506779, 0.709798], PointSize[
         0.003666666666666667], AbsoluteThickness[1.6], 
         PointBox[CompressedData["
1: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
lNVVLnktrL/8/ijgs27j4HBjL+xd8qAI9KH9Z9srahBeen2GG+JfRc3ms5yO
qMZs/7pNgMcd3lp46aFl6ae9gnA+JPv0kgPujNxKC/KICa1zEfJDscPTtoA/
NBUPzqvuRRyMw/8J/x/fMuwSs8Y3creNXwd/JH7pmr4y9v5ad7sDaNt9NOdP
oTS6v8PBZP+a8eTphGy0Nly9p5bQbAvby2j3YH/dYnpmwk9/24zXKhAHFvv1
0hL657vCrbcj0fUPQ87gf4bSmzi3uqJGWp10Z3K+rMLSpdJ0dGeN3Xsn4Ku4
i5IDvviPw6MYfcJf95VWrTwJD71ZDuOBeEWbs8Z8CJ1TXlsZJbRj0k4fIQHk
y856dxriS+58YdwhXKJdtGUU8sN3F8LE96OACyIiueR+wvgfPGHzx6kKWqyA
DwcWChwOJuOZAa6zlYTfN8qQri4HneAdotsP+UjcJ/1SC/R5UqoM6icjXT88
3hqgayZN7g9AfhWnh+MccaakI2UF4vFYtmqRGWJSl4h2hXpBVOfZIy7YtFX1
lz/4N6+utCZ3FEWrauYJ35PU1TrkgFZrQj+mEPpvt1x9fBH+FdHIMAb5xPbt
N5ACTnPSSWoh548JNz6ka47Cr1g0QXycXD2xSp+Pf3/j3D5O/MNn+Xgj90gs
uQ73AX5p9lU6/9sR8da4fLwN/iKooJbJHd9kSdkJ91XrJif2xBnZRO8WAX8p
EFH/9awFZnn+9RYidJza8bfzOXjfZqElTyIP2YU3M1qHsPK+p8OAz6g9V9dF
cqL8T3In5sD+SkRklb2w5P0ICuiXWfLzn0ze//CKgv3/6y+Ph59MZOItnreu
bQR88d+Ig54xEuKakboF/vuL3pHPWfiOp4JaMfmedtOGxmBdlNRpNbQC9RFz
v20zCZhBKIU2CeKNZLoMnT2Oji1w3gh4ecCBKdoUF+nzVUK8F67PFEyIRY5D
mr53CL/AT+VJFxOc+fN4Hx/4q9mu4SJ73M3epnGS8Ke8OH1A1BOdpDD6p0H8
7T7tbZKD9z5SZQom+evWu1xCnCG4SqbPvpfw08hqRNO6YcPCO8fewHm2+F+9
Z4UGe9tGIT8U75N/1xmJBR6MCAD+89Z63vzCB5UatoS9J/zp6/N6BRNxRxTt
o0TI95KuJ7tao32tYz1wX91cNYz6QfjLa3pOsBczAyn9GRdswXgsso+MKwrS
0D3yRHXIb2kI/NF7r8cd8qhGvcovFvzHHa49g+bIl7/KFOp9slraAtpH0V+6
bXY1gA82MukNyOKqWtl4C/APy5XWvLJY9phyIfjnrDoU8t0LMeR8HxYH/3Js
5WeHB/qiX+8L+KLX947AoitKUG1vgvolZe3F4TfGKKjtGEsm2e+VMe1w0Jl/
+nv3uhvRZ00ef3+tffjO/PtqJcDnZno3ZgKwdnvBHNhr/cjWlaxjSFM1jQni
m/hOFdeScLSpxez5ekKn/qq+h/IQ64VVxxLiP/fIx65PyEPPVTZ8bCO02dvr
B1rMMcOY9584cn9MIrKSrKX4MafozSoyXiGdYTIljDuPbvc5B/o02iW/eS8q
Uh1jgXzJjFvgWPFB/NA0bRTqQe0Oua8FvdDyVKoa5A9ZQldlPhxCoqZiymtg
L3P62338kXYNo68e2IM8zyMfN6TiIHu1FeY/qux46IwGeLnsBghdtMWOV9oL
7/BL4YL8JIZ5IkdZEv+cUGx6QM4zeSJ/zjEbOU3J2I0AnrjwZ3nLXnzuiaoZ
4JuwqL6pnR7IusRR1wTwcWHmlHc2LkscOwH5OEuIQrvEAZSmVJ18mKzXfNpZ
MTgQfd16sLcc9IcSNffdAmW3N3GNQ3yiZhQriCNlXUXvgyDvOyGT1j6o7aBz
CfBXSKejH4l44fW6kqtgn9mOl2Is0UUBt7E1wO92z/JO2qJJz+PToG/TV7P2
eXjgGumg8MfgP1+ysJ9IQ9ePFujLkvun7N3I7CaL7LgHlZQJ/6voYN60ROxK
PxZaD/JqrhvoUEJfIs4enQI8YsW89M8/hqtQj0E9o2L6dsgLXhTAbJbOC/hz
Puxz6THcP3u6YJDwcyU57/9nj2YMHaUQz2K689cZa6OnIdvLosi4btuzk7Up
aLOS6HwAWa9o0OMOawoStf98Lw7uz+JS00851GDHbGVL1qf8PhSb74/MTtXz
0ZDxw08byotKsFLyMa8Rok/PSl5+un8Ci+YqOoF/bG8tztrhhGisrKXvEf5h
mlnPu0X4yyGXuEvEfyjaFFLVwzDTmoYz+I/edJP3g64oc5H39Uawn4J3K6+c
8Llb9owD4K9OS7Z4iiJJtW2u4uQ8aXtcBlwc0IeGDEVzMs777uhoRzFaFh74
vZ2c58yzg79ZknFuT6ecHdnP6vNWv35L1DrmYjAI5/sSoiPzD280TO0G/Uv5
Q/PnX34vFH3zzVtCi+pQpH8l4uY/bwMmyHoD1Jnbm+1xsLnsRjU4b5ZTSDQV
Rwsu58H8kdwrLc5uOCGmSOos4DN1b2zqin9aG3yAejzLbKSFKDce0jGUdiTy
D+p+lvzmAPbv2v4R5Nt+yOnRcXo0T02M6AB8ls3WnkhFVsMB3ZCfBd29adKq
g3k5RAodCH99TfqEngvOM2f/f72aYrgoFLjW5u0j6nUK6hnpixLijniblf8E
1N94tfLVVILwCzWJW9/Bv9ZnDCI3nBNwi7UT4t+r88UPVts2MzpRIV5SKg18
VOiQqK873wbA04yhG95L4zz1Rjl10Ke+Jb8/bMiY2+LBbjL+SvbOzxVWtEo1
fA71eE3u7eMjFJx2Tiv9CXzvKFvyVi1kqnP1azehdUapFZE5OEZoM/U5ka94
wEKqiSu6krXLywn2v3urTskbWzzbJAj5oe6SRWj5GVTDOXZ3htwny9PwH62B
2Ol31tACxOOI8KrlbOTc+FMa7D+du142/yjaoCRyVhrwtynjJld5dNfx8ns7
yI+XRr88dkFJFqF+YnCfeYVW2sb4eMSNPsAjXEud/su+iIF+6iQLjF/p6q8X
xDtqt7XZk/MbmtDukDqIJ8fXqh9CfvMoYGOFOGbpqm10BX+okmpkZIWUruy6
Cv6C8tjQbZYdpT26aNYMeNRIJiMIYaVIUTsGQksZ5Q+e0EM1V3a4JkA/IGOR
mUML/4zwZvYBeccsnxs5gG01OwLPEH62VLHc3UfxYTuem+D/eD9+luAOwh+m
x08A3gwyzS1mOo2GHrPk26SD/M/Y7vRDDUkMQX8hvnQ+OoUC0YO1/5ZXCS1h
N1GXVYKDtU8XRhD58l6sWa6WQLpNNLGQn+axz5zmj8GX/nTdAnukrBjp/8Nz
u6pxFNhj+8veSiZ1fKOvpdKQnK/ery5omw06M/zcD/INynPKG6l/+domFT8m
wLsDVnK1Drg94pA34El3OnRCIgQpa3j80oP+yJsMMWE9vPuv/XsZkF9NmXZn
CqbR1t0O/cig4o89Rw6hsYKUCycgf3+n3yiSjO8MOg1YkvO3R1CKpK2x7bp3
U3sh3nDzv2fKwHTzPkegfvn2cLBHfhFSOcnazUL8cUrVte5KT9Sv95BlgvDv
qazxjC5GEUcGjF6Q9UaeOY63eiLhHfmlkP/HiB2e4BDFM3unD3lCfOivGXJ8
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
xy60tID/4WruTT7oizYLPIwk/v1/N2mQnQ==
          "]]}, 
        {RGBColor[0.880722, 0.611041, 0.142051], PointSize[
         0.003666666666666667], AbsoluteThickness[1.6], 
         PointBox[CompressedData["
1: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
          "]]}, 
        {RGBColor[0.560181, 0.691569, 0.194885], PointSize[
         0.003666666666666667], AbsoluteThickness[1.6], 
         PointBox[CompressedData["
1:eJwlW3k81k0QR5RKkuQoFZIo5T7DupKznOX2uO/r8eCp5A4hIZXkSkJeRYiS
WsmVJEdypJJcSaWoVOhtp7+ez3x2f7uzs7Mz3zkeQSd/U1cmBgaGhysYGMgv
w8CBb2xpoaikdjv7m2RFdYYADVa1RUcUH3grRzHtL53RpX5qwQF59Lx3Onvm
L505JtrxPRQ3rna8V0lo8yuszE9dUVPK2N3spL/0yJGB5UgK6ooVqRkh6zFY
6d/n5kBC5+Kfvkv5S0eqPXi2XhyF75kv+kS+D3gRXhUdjNNFty3pkPnqbErs
N0IxJe9ehzChDU26fv8+hHrDR44znv1L226qlyl1RQKDK3fXkv3yP+pdX+WO
xT5kDeSQ+fmOAdJ2LrjB61yoLaFlDe8OrTuGHrh6UZ3IfsL8wsFqQbgw7fzF
R+R70WbBD8bO2MM9/XN+KjnPad2VXjY4jv4qax35nq6WWzJERc0J791VCc3M
mu5+RRo1lKm37yfrCdx/1TLvibVXFTTD+dTZcll6nZC5hMNbazLf9jtrrjkN
27NOPrpH9mvgrZEwMkItjJwH68n4hQNnY+uj0a9CvnUXyHrG5m0dUlT0UEN+
5CehJS+lPgsLxnJtfAl5IP+A5EtJNBQ/JRz8lKxHcT+ULe+Eii4dfqhF1jP+
da9LLhDHva7beJHQlOUj28s0MfNEYrIqkV/mSOmfXDoeUExrDCfjAktVlEw/
vJDgtTGOnJ/hTaTyMT1EkQx/u0jGhXU0nk46ITMOgU7YryEn2ULiADplJLJu
mpyXV3HzQQYftHdl/5EJMp6BVIqnI5HyrpsZtwi/tgfPXac64/aHcmfzyPhs
hp2egQW6L6VllEb4Cdgjcq/tJFKWnbU+Q/ZrCD3Wg6KRi0TPRn5CRw4OcyqY
oemCemd/sl5T3ZTZbxpObz3Vz0v2H7vT5fwmEE0M/Ng2SMZjg+u9+OXxjYNr
uuzI9208XfsdjdCLlCWpDLL/1IByxGs/7Lav5i0mtOz61m1dVJShnDL9nNAV
RUxyr5xQT2rLZl2y3pqIK+FrHZHzumcRi4Tfke/CF6K8kMDSmAudvI+xW19c
j7riT9GH97wn+1lu9V9r7Y+UK62MLMn8fdafuddGYTGjATsxsl51g5t8iw1q
4/VprSb07KWBA7EeiM9WwHs/+X5++0zeCTqOmrZmMiH0c6r2Vys37EJRftRM
+GOIOP8t3ghZbTggbUbGffSV9gk7owdvAiQ+wP0kn99IscCGF+xOeIL8HEZ3
1HBh7bt1/JJEXg1CYn3t1phLKz7TiIx77JP/8NQNP1nOXD1I7p/elqYhbIbH
GFK/HSb8c5XMpgeF4qCnXsk+ZD5bzuq5hoNYRHDMtAf2u+jAcT4UPU4v3/cH
9HH1+4sL6uj+omOtDzkfh1atvK8zzg98Mgj3qzvlm9Hjgzn2+azdTmgOAY0H
xm7I7dOzrbOEv+oeTamUg5iJU76rhKynu2okTt8QT1CVvq4i86dW1HsvULFX
EWeTMtxH1pVlP31c8TRmlyMZn3k0fPSSI3aJuvL+HPlecoFbYd4P//JjKtMF
e3SRPe6FLW4s/DztAe+t+dDrF07oTdRIRwHIY2//+9FgtNtzwrwLziO/q0DK
Hs/a1Y02E/7Ytj4u7aXh666b5oIJTeeKWhUehDg6Pp7VhvVNAs79OIoXBSuy
08n3Kjd4VjOYIMpuyz+BRL6Kst19lonYVXsu+RPomybvXLEbSuCMTAX9G0hM
yb0YjJejDF1NyXwBd+s8CU7McjfuSxas/4t++40HNlTW+2RN+C9xG1kS98Km
bY1D7YQfy8qKh/e08PS+PVFDZD6T4HytUQD2Vtul5gb2Nmzz/lwfLBF6f9MU
2c/2zc3Y3eZIPlNPC/gZTjij0khHD18bTBuQ9RavpNlyhOJkal3BGrLesOrb
L/6h6NAn5YZksDc6a5qxP/rpavt6mNBcRTnvLbyxwKrbfRcILc4gNzHCg9e5
s02Gk/NQIvXja+VQuu3T1BtkP+NTdhfsKUh4IXxNLuiTl8fRaVdU80I0LAL0
/3MthTsI3eg3rO4g4/Xnex75UJC2xdw+4JfBgZbs64Cn6r7OWpD52v3fjE/6
Y1P+kS9LhP+AcclTgcGI/XHXTXawd54DTP3WKJWHRSOB6E+GoJDeIR9k2+W+
pRjsj37/1h8aKEe9fJcV2K/svhQDV2x8/crIf2Q/ZpauUjlnZNZbtL2GnEf0
t3uabQJyZvysJwbrO44bDIZg+f28h8Eepr4Qu2IRigTHmLTtQb+aWvOlXFCQ
ji/dBO7jDGK23IUVOfDK22S++t4Mrfsn8MHp63KiZDzcfPtqeUk8NpOwRpPQ
lj928uo4YfbIwLlbYE8bisW7/PAp6/ueXwlNlxvMH6IjwweP3oM/7HrBeGzc
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
/Q/4kL97
          "]]}, {}}, {}, {}, {{}, {}}, {{}, {}}},
      AspectRatio->NCache[GoldenRatio^(-1), 0.6180339887498948],
      Axes->{True, True},
      AxesLabel->{None, None},
      AxesOrigin->{0, 24.52180924396045},
      DisplayFunction->Identity,
      Frame->{{False, False}, {False, False}},
      FrameLabel->{{None, None}, {None, None}},
      FrameTicks->{{Automatic, Automatic}, {Automatic, Automatic}},
      GridLines->{None, None},
      GridLinesStyle->Directive[
        GrayLevel[0.5, 0.4]],
      ImagePadding->All,
      Method->{"CoordinatesToolOptions" -> {"DisplayFunction" -> ({
            (Identity[#]& )[
             Part[#, 1]], 
            (Identity[#]& )[
             Part[#, 2]]}& ), "CopiedValueFunction" -> ({
            (Identity[#]& )[
             Part[#, 1]], 
            (Identity[#]& )[
             Part[#, 2]]}& )}},
      PlotLabel->FormBox["\"Field 3\"", TraditionalForm],
      PlotRange->{{-0.019247445801893637`, 0.01889587571719309}, {
       24.524323577367134`, 24.574610245500853`}},
      PlotRangeClipping->True,
      PlotRangePadding->{{
         Scaled[0.02], 
         Scaled[0.02]}, {
         Scaled[0.05], 
         Scaled[0.05]}},
      Ticks->{Automatic, Automatic}], {967.5, -116.80842387373012}, 
     ImageScaled[{0.5, 0.5}], {360., 222.49223594996212}]}, {}},
  ContentSelectable->True,
  ImageSize->Full,
  PlotRangePadding->{6, 5}]], "Output",
 CellChangeTimes->{
  3.8451432541112585`*^9, 3.845143430606984*^9, 3.8451435033216047`*^9, 
   3.8451435592136126`*^9, 3.8451436323085423`*^9, 3.845144034727005*^9, {
   3.8451443065260124`*^9, 3.8451443355347853`*^9}, 3.8457329597085214`*^9, 
   3.845734290463318*^9},ExpressionUUID->"7521dd22-a929-4b6a-8a93-\
e8184aa03b82"]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell["\<\
Compare these results with the numeric output of the Spot Diagram\
\>", "Subsection",
 CellChangeTimes->{{3.839695085951501*^9, 3.839695090625388*^9}, {
  3.845129470669815*^9, 3.8451294845780396`*^9}, {3.8451346155025644`*^9, 
  3.845134617031674*^9}, {3.845138178358055*^9, 3.845138187670453*^9}, {
  3.845143688748455*^9, 
  3.8451436994741125`*^9}},ExpressionUUID->"d9535591-5958-4afd-ae78-\
2b4d96936f63"],

Cell[BoxData[{
 RowBox[{
  RowBox[{"LoadNETType", "[", "\"\<ZOSAPI.Analysis.AnalysisIDM\>\"", "]"}], 
  ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{
  "LoadNETType", "[", "\"\<ZOSAPI.Analysis.Settings.Spot.Reference\>\"", 
   "]"}], ";"}]}], "Input",
 CellChangeTimes->{{3.8451437215322623`*^9, 3.845143736954012*^9}, {
  3.8451438292998905`*^9, 
  3.8451438427382965`*^9}},ExpressionUUID->"823c17db-2bb5-498f-8b2a-\
ec44725b0402"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{
   "Open", " ", "the", " ", "Spot", " ", "Diagram", " ", "and", " ", "apply", 
    " ", "our", " ", "settings"}], "*)"}], "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{
    RowBox[{"spot", "=", 
     RowBox[{"theSystem", "@", 
      RowBox[{"Analyses", "@", 
       RowBox[{"NewUAnalysis", "[", "AnalysisIDM`StandardSpot", "]"}]}]}]}], 
    ";"}], "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"spotSettings", " ", "=", " ", 
     RowBox[{"spot", "@", 
      RowBox[{"GetSettings", "[", "]"}]}]}], ";"}], "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"spotSettings", "@", 
     RowBox[{"Field", "@", 
      RowBox[{"SetFieldNumber", "[", "0", "]"}]}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"spotSettings", "@", 
     RowBox[{"Wavelength", "@", 
      RowBox[{"SetWavelengthNumber", "[", "0", "]"}]}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"spotSettings", "@", "ReferTo"}], "=", "Reference`Centroid"}], 
    ";"}]}]}]], "Input",
 CellChangeTimes->{{3.8451437084853067`*^9, 3.8451437737165413`*^9}, {
  3.8451438068988757`*^9, 3.8451438729245634`*^9}, {3.84514399722476*^9, 
  3.8451440003249445`*^9}, {3.845144053477111*^9, 
  3.8451441090956783`*^9}},ExpressionUUID->"d3318d04-72a1-4415-a4ec-\
4f412cceda42"],

Cell[BoxData[{
 RowBox[{
  RowBox[{"spot", "@", 
   RowBox[{"ApplyAndWaitForCompletion", "[", "]"}]}], 
  ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{"spotResults", " ", "=", " ", 
   RowBox[{"spot", "@", 
    RowBox[{"GetResults", "[", "]"}]}]}], ";"}]}], "Input",
 CellChangeTimes->{{3.8451438786333027`*^9, 
  3.8451439055576487`*^9}},ExpressionUUID->"11822a4b-383f-4c00-9415-\
0e71d83216c9"],

Cell[CellGroupData[{

Cell[BoxData[{
 RowBox[{"Print", "[", 
  RowBox[{"\"\<RMS radius: \>\"", ",", " ", 
   RowBox[{"spotResults", "@", 
    RowBox[{"SpotData", "@", 
     RowBox[{"GetRMSSpotSizeFor", "[", 
      RowBox[{"1", ",", "1"}], "]"}]}]}], ",", " ", "\"\< \>\"", ",", " ", 
   RowBox[{"spotResults", "@", 
    RowBox[{"SpotData", "@", 
     RowBox[{"GetRMSSpotSizeFor", "[", 
      RowBox[{"2", ",", "1"}], "]"}]}]}], ",", " ", "\"\< \>\"", ",", " ", 
   RowBox[{"spotResults", "@", 
    RowBox[{"SpotData", "@", 
     RowBox[{"GetRMSSpotSizeFor", "[", 
      RowBox[{"3", ",", "1"}], "]"}]}]}]}], "]"}], "\[IndentingNewLine]", 
 RowBox[{"Print", "[", 
  RowBox[{"\"\<GEO radius: \>\"", ",", " ", 
   RowBox[{"spotResults", "@", 
    RowBox[{"SpotData", "@", 
     RowBox[{"GetGeoSpotSizeFor", "[", 
      RowBox[{"1", ",", "1"}], "]"}]}]}], ",", " ", "\"\< \>\"", ",", " ", 
   RowBox[{"spotResults", "@", 
    RowBox[{"SpotData", "@", 
     RowBox[{"GetGeoSpotSizeFor", "[", 
      RowBox[{"2", ",", "1"}], "]"}]}]}], ",", " ", "\"\< \>\"", ",", " ", 
   RowBox[{"spotResults", "@", 
    RowBox[{"SpotData", "@", 
     RowBox[{"GetGeoSpotSizeFor", "[", 
      RowBox[{"3", ",", "1"}], "]"}]}]}]}], "]"}]}], "Input",
 CellChangeTimes->{{3.845143915674776*^9, 3.8451439722453337`*^9}, {
  3.845144119907793*^9, 
  3.84514416255587*^9}},ExpressionUUID->"affad0d7-e91a-43e3-bc8a-\
585bbf652e0d"],

Cell[CellGroupData[{

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"RMS radius: \"\>", "\[InvisibleSpace]", "8.500623360965522`", 
   "\[InvisibleSpace]", "\<\" \"\>", "\[InvisibleSpace]", 
   "9.353258522297711`", "\[InvisibleSpace]", "\<\" \"\>", 
   "\[InvisibleSpace]", "11.49626538629196`"}],
  SequenceForm[
  "RMS radius: ", 8.500623360965522, " ", 9.353258522297711, " ", 
   11.49626538629196],
  Editable->False]], "Print",
 CellChangeTimes->{{3.845143973509899*^9, 3.8451439800795107`*^9}, 
   3.8451440348581266`*^9, {3.8451441132104435`*^9, 3.845144118035636*^9}, 
   3.845144149309754*^9, {3.845144310453847*^9, 3.845144335720397*^9}, 
   3.8457329598667297`*^9, 
   3.845734290593665*^9},ExpressionUUID->"bfa022bf-f21b-42f5-a47d-\
586a44ea90af"],

Cell[BoxData[
 InterpretationBox[
  RowBox[{"\<\"GEO radius: \"\>", "\[InvisibleSpace]", "16.872410755169135`", 
   "\[InvisibleSpace]", "\<\" \"\>", "\[InvisibleSpace]", 
   "29.988542325729213`", "\[InvisibleSpace]", "\<\" \"\>", 
   "\[InvisibleSpace]", "38.21434176065144`"}],
  SequenceForm[
  "GEO radius: ", 16.872410755169135`, " ", 29.988542325729213`, " ", 
   38.21434176065144],
  Editable->False]], "Print",
 CellChangeTimes->{{3.845143973509899*^9, 3.8451439800795107`*^9}, 
   3.8451440348581266`*^9, {3.8451441132104435`*^9, 3.845144118035636*^9}, 
   3.845144149309754*^9, {3.845144310453847*^9, 3.845144335720397*^9}, 
   3.8457329598667297`*^9, 
   3.8457342905956593`*^9},ExpressionUUID->"36905872-197d-44a4-beb5-\
32329c7e5f0c"]
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
  3.8396884894719977`*^9}},ExpressionUUID->"509f8919-35f5-4589-86c0-\
8ef70e3cb372"]
}, Open  ]]
}, Open  ]]
}, Open  ]]
},
WindowSize->{1447, 736},
WindowMargins->{{2330, Automatic}, {Automatic, 286}},
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
Cell[580, 22, 271, 4, 101, "Title", "ExpressionUUID" -> \
"a4651d83-5ff2-4f29-95af-b6f8d182179b"],
Cell[CellGroupData[{
Cell[876, 30, 243, 4, 72, "Chapter", "ExpressionUUID" -> \
"3e48f354-9336-4747-8fb2-5d1e486836a2"],
Cell[1122, 36, 636, 11, 106, "Text", "ExpressionUUID" -> \
"c45244e2-f4e9-468f-bcac-08e58e5ab4dc"],
Cell[CellGroupData[{
Cell[1783, 51, 172, 3, 70, "Section", "ExpressionUUID" -> \
"30b4d763-6568-441a-b20f-0a4579888bda"],
Cell[CellGroupData[{
Cell[1980, 58, 206, 3, 49, "Subsection", "ExpressionUUID" -> \
"68a27b01-c6e3-4ca7-893b-fbd64bf4cdc6"],
Cell[2189, 63, 281, 6, 48, "Input", "ExpressionUUID" -> \
"c66e03b5-c956-4caa-bf16-75e82002646c"]
}, Open  ]],
Cell[CellGroupData[{
Cell[2507, 74, 226, 5, 49, "Subsection", "ExpressionUUID" -> \
"74c5d70b-6d68-4fea-be86-d6a38c5e5d46"],
Cell[2736, 81, 825, 22, 87, "Input", "ExpressionUUID" -> \
"ffe34d81-d9a5-4d08-8526-6a470edb51af"]
}, Open  ]],
Cell[CellGroupData[{
Cell[3598, 108, 175, 3, 49, "Subsection", "ExpressionUUID" -> \
"5c92b9cd-ca57-4cb9-984e-9a3c135985f6"],
Cell[3776, 113, 1885, 50, 163, "Input", "ExpressionUUID" -> \
"0a9e1b8b-ac81-4212-a701-0d9d61b9dc8c"],
Cell[CellGroupData[{
Cell[5686, 167, 1186, 24, 125, "Input", "ExpressionUUID" -> \
"ae0887c2-33da-48c2-b0d1-0daf4cecc82c"],
Cell[6875, 193, 375, 7, 63, "Output", "ExpressionUUID" -> \
"56ed3eaf-4ca4-4328-bd52-7d3ba033ce27"]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[7299, 206, 165, 3, 49, "Subsection", "ExpressionUUID" -> \
"76064fd6-1983-4c0e-995e-c82aa14ff8d7"],
Cell[7467, 211, 1187, 26, 68, "Input", "ExpressionUUID" -> \
"d7c01417-69ef-4d4a-8bde-5533345e1679"]
}, Open  ]],
Cell[CellGroupData[{
Cell[8691, 242, 190, 3, 49, "Subsection", "ExpressionUUID" -> \
"2505e593-5f0f-44b2-8202-82fdb851e764"],
Cell[8884, 247, 1094, 25, 87, "Input", "ExpressionUUID" -> \
"05ae85f0-8e13-4af1-bdb5-9b2f7e569be4"]
}, Open  ]],
Cell[CellGroupData[{
Cell[10015, 277, 241, 4, 49, "Subsection", "ExpressionUUID" -> \
"5aff5792-b434-489b-928c-3df83ba479d6"],
Cell[10259, 283, 2036, 44, 144, "Input", "ExpressionUUID" -> \
"10510aff-7969-4b81-8112-42307b455aaa"]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[12344, 333, 166, 3, 70, "Section", "ExpressionUUID" -> \
"1cc92522-3648-4051-bc73-e25c5bf2f46b"],
Cell[CellGroupData[{
Cell[12535, 340, 186, 3, 49, "Subsection", "ExpressionUUID" -> \
"9bcdfb58-5568-42c3-bf52-fde3a2483472"],
Cell[12724, 345, 4098, 105, 395, "Input", "ExpressionUUID" -> \
"873d9be6-9e71-44e4-88cd-362d02de3ff7"]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[16871, 456, 289, 4, 70, "Section", "ExpressionUUID" -> \
"9b846f90-ea86-4753-98dc-7673dda77667"],
Cell[CellGroupData[{
Cell[17185, 464, 181, 3, 49, "Subsection", "ExpressionUUID" -> \
"5a6a37f4-56b3-41fa-af19-9253eec28fa8"],
Cell[17369, 469, 557, 15, 50, "Input", "ExpressionUUID" -> \
"e093a2aa-3c46-481f-9359-b750b25635cf"]
}, Open  ]],
Cell[CellGroupData[{
Cell[17963, 489, 195, 3, 49, "Subsection", "ExpressionUUID" -> \
"9cc3746f-bda8-4590-b4dc-7bccd59bb5f8"],
Cell[18161, 494, 237, 6, 30, "Input", "ExpressionUUID" -> \
"bdcb48f8-b31a-406f-bb60-1dea893b622c"],
Cell[18401, 502, 442, 10, 30, "Input", "ExpressionUUID" -> \
"13405fc2-708d-4846-a9cc-617550661939"],
Cell[18846, 514, 1139, 26, 107, "Input", "ExpressionUUID" -> \
"80db1097-c95e-4649-9fc5-594e1eeb45d5"],
Cell[19988, 542, 374, 10, 50, "Input", "ExpressionUUID" -> \
"391cdc68-b17c-4d59-90c9-9e38f24de63e"],
Cell[CellGroupData[{
Cell[20387, 556, 249, 5, 41, "Input", "ExpressionUUID" -> \
"feddfd7c-9b76-4133-9f27-11fb0a8bb120"],
Cell[20639, 563, 4664, 95, 266, "Output", "ExpressionUUID" -> \
"b4315b91-103a-45b9-b672-cd75f45b9456"]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[25352, 664, 244, 4, 49, "Subsection", "ExpressionUUID" -> \
"e2194595-0025-49b4-9e82-87ded17eadcd"],
Cell[25599, 670, 922, 25, 88, "Input", "ExpressionUUID" -> \
"c403abf7-19f5-4272-bbd1-a45c17ead886"],
Cell[26524, 697, 2315, 55, 221, "Input", "ExpressionUUID" -> \
"4b62c801-e34c-4625-a054-9e9bafaeb3ab"],
Cell[CellGroupData[{
Cell[28864, 756, 2171, 51, 145, "Input", "ExpressionUUID" -> \
"7f204aa9-eec3-455b-ba3b-35d91a528b79"],
Cell[31038, 809, 660, 11, 30, "Output", "ExpressionUUID" -> \
"13532369-6f3f-4959-8208-5a4462ddf67a"]
}, Open  ]],
Cell[31713, 823, 2000, 52, 126, "Input", "ExpressionUUID" -> \
"9ab4154d-caf7-404f-bb0c-1076a729b6f9"]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[33762, 881, 345, 5, 70, "Section", "ExpressionUUID" -> \
"55bb44ff-ead7-44cb-9b46-ca6656329a7e"],
Cell[CellGroupData[{
Cell[34132, 890, 260, 5, 49, "Subsection", "ExpressionUUID" -> \
"50a5803c-0a02-47d5-93e5-ee9424ccde56"],
Cell[34395, 897, 905, 20, 88, "Input", "ExpressionUUID" -> \
"a299ebcf-4534-4ef3-95ce-0319094a17ff"],
Cell[35303, 919, 5247, 114, 461, "Input", "ExpressionUUID" -> \
"45b0429c-cb9c-433b-b875-00aef69183e4"],
Cell[40553, 1035, 392, 10, 50, "Input", "ExpressionUUID" -> \
"1876926f-f9f5-4a57-ae97-c1e13e3bf4ef"]
}, Open  ]],
Cell[CellGroupData[{
Cell[40982, 1050, 309, 5, 49, "Subsection", "ExpressionUUID" -> \
"9562d2f6-064a-426b-a9ef-848c4aa7324b"],
Cell[41294, 1057, 342, 9, 30, "Input", "ExpressionUUID" -> \
"ea405bdc-acb6-4633-91ae-0c32d690e435"],
Cell[41639, 1068, 347, 8, 30, "Input", "ExpressionUUID" -> \
"6607e3b7-3048-4ea7-8e1b-392b421c2c28"],
Cell[41989, 1078, 2035, 44, 164, "Input", "ExpressionUUID" -> \
"f380fdc4-38b6-4e30-b459-cd064fcf3b34"],
Cell[44027, 1124, 2508, 68, 126, "Input", "ExpressionUUID" -> \
"efce3107-276a-467f-be07-d6856e22af41"],
Cell[CellGroupData[{
Cell[46560, 1196, 496, 11, 30, "Input", "ExpressionUUID" -> \
"741e4fe2-58e7-4071-82fe-940eb32b57e7"],
Cell[47059, 1209, 165199, 2759, 296, "Output", "ExpressionUUID" -> \
"7521dd22-a929-4b6a-8a93-e8184aa03b82"]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[212307, 3974, 420, 8, 49, "Subsection", "ExpressionUUID" -> \
"d9535591-5958-4afd-ae78-2b4d96936f63"],
Cell[212730, 3984, 438, 11, 50, "Input", "ExpressionUUID" -> \
"823c17db-2bb5-498f-8b2a-ec44725b0402"],
Cell[213171, 3997, 1325, 35, 126, "Input", "ExpressionUUID" -> \
"d3318d04-72a1-4415-a4ec-4f412cceda42"],
Cell[214499, 4034, 402, 11, 50, "Input", "ExpressionUUID" -> \
"11822a4b-383f-4c00-9415-0e71d83216c9"],
Cell[CellGroupData[{
Cell[214926, 4049, 1381, 32, 50, "Input", "ExpressionUUID" -> \
"affad0d7-e91a-43e3-bc8a-585bbf652e0d"],
Cell[CellGroupData[{
Cell[216332, 4085, 741, 15, 22, "Print", "ExpressionUUID" -> \
"bfa022bf-f21b-42f5-a47d-586a44ea90af"],
Cell[217076, 4102, 749, 15, 22, "Print", "ExpressionUUID" -> \
"36905872-197d-44a4-beb5-32329c7e5f0c"]
}, Open  ]]
}, Open  ]]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[217898, 4125, 168, 3, 70, "Section", "ExpressionUUID" -> \
"57164ee3-d71d-43df-97af-c2c8107e09ac"],
Cell[218069, 4130, 247, 6, 30, "Input", "ExpressionUUID" -> \
"509f8919-35f5-4589-86c0-8ef70e3cb372"]
}, Open  ]]
}, Open  ]]
}, Open  ]]
}
]
*)


```
