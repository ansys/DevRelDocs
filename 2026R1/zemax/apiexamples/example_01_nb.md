# Example 01 - Mathematica

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
NotebookDataLength[     50130,       1385]
NotebookOptionsPosition[     42915,       1199]
NotebookOutlinePosition[     43260,       1214]
CellTagsIndexPosition[     43217,       1211]
WindowFrame->Normal*)

(* Beginning of Notebook Content *)
Notebook[{

Cell[CellGroupData[{
Cell["Mathematica Standalone Example 01", "Title",
 CellChangeTimes->{{3.839688029061371*^9, 3.839688029333041*^9}, {
  3.839688063060649*^9, 3.839688078509552*^9}, {3.8396914797351103`*^9, 
  3.839691482944421*^9}},ExpressionUUID->"a08b22cf-f99a-42ff-ad2d-\
e999221be01b"],

Cell[CellGroupData[{

Cell["New file and Quick Focus", "Chapter",
 CellChangeTimes->{{3.8396881035725594`*^9, 3.839688112297448*^9}, {
  3.8396914862400026`*^9, 
  3.8396914901911945`*^9}},ExpressionUUID->"f9c0b5e2-1985-4710-a48c-\
30ae38fbdeaa"],

Cell["\<\
New lens file is created and saved in samples directory.

Changes are made to aperture value, field point is added, and wavelength \
preset for FdC is selected. Comments, thicknesses, and radii are changed in \
the LDE; an F# solve is placed on the last surface\[CloseCurlyQuote]s radius. \
Finally, the quick focus tool is opened, executed, and closed.\
\>", "Text",
 CellChangeTimes->{{3.8396881291975994`*^9, 3.8396881300308065`*^9}, {
   3.839688228998783*^9, 3.839688243597742*^9}, 
   3.839691532616377*^9},ExpressionUUID->"505e9e76-8b58-4850-93c8-\
549e8ef99217"],

Cell[CellGroupData[{

Cell["1. Set up the interface", "Section",
 CellChangeTimes->{{3.8396882595581264`*^9, 
  3.8396882638859687`*^9}},ExpressionUUID->"d787219d-85f8-49b4-84c1-\
c39773cd44b7"],

Cell[CellGroupData[{

Cell["Install Mathematica\[CloseCurlyQuote]s NETLink context", "Subsection",
 CellChangeTimes->{{3.8396882777989693`*^9, 
  3.8396882855614657`*^9}},ExpressionUUID->"fe7d1dca-805e-4f95-9d0e-\
25602c735a7d"],

Cell[BoxData[
 RowBox[{"Needs", "[", "\"\<NETLink`\>\"", "]"}]], "Input",
 CellFrame->True,
 CellMargins->{{30, 0}, {15, 0}},
 CellChangeTimes->{{3.839688289624405*^9, 3.8396883024261284`*^9}},
 Background->GrayLevel[
  0.85],ExpressionUUID->"b2e11d2a-f5bb-4a79-b7eb-6f7ecd56203d"]
}, Open  ]],

Cell[CellGroupData[{

Cell["\<\
Set a default directory and define the path to the ZOS-API libraries\
\>", "Subsection",
 CellChangeTimes->{{3.8396883515947313`*^9, 
  3.839688361481258*^9}},ExpressionUUID->"417c9345-bda1-412d-b836-\
64afc6b8148e"],

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
  0.85],ExpressionUUID->"af68f627-4bd9-4558-9d67-8667918e6be3"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Initialize the connection", "Subsection",
 CellChangeTimes->{{3.839688395302744*^9, 
  3.8396883991473007`*^9}},ExpressionUUID->"fcec0d3b-8461-4dbe-8e29-\
a2488947bb06"],

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
  0.85],ExpressionUUID->"d08d2fb7-67ba-4c5c-8b0e-8b9e4ba6dc72"],

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
  0.85],ExpressionUUID->"535dd54b-4517-4c27-988b-3e38692c8424"],

Cell[BoxData[
 RowBox[{"{", "\<\"Found OpticStudio at: c:\\\\program files\\\\zemax \
opticstudio 21.3.1\"\>", "}"}]], "Output",
 CellChangeTimes->{
  3.843920769793024*^9, 3.84392085119652*^9, 3.8439212906899757`*^9, 
   3.84392137334933*^9, {3.8439217596654644`*^9, 3.84392178265172*^9}, 
   3.845734172402504*^9},ExpressionUUID->"6f23adab-51a8-4bc4-adf6-\
a45bc16806b8"]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell["Load assemblies", "Subsection",
 CellChangeTimes->{{3.8396884196575794`*^9, 
  3.839688422125188*^9}},ExpressionUUID->"81680ac0-d3f6-4dd9-9322-\
57db8a8e4700"],

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
  0.85],ExpressionUUID->"869de14f-800d-497b-8184-7a9725dda15b"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Open connection and create the application", "Subsection",
 CellChangeTimes->{{3.839688440804923*^9, 
  3.839688449586424*^9}},ExpressionUUID->"a3ee36a0-dfa3-4bee-8ecc-\
7b8d6d3c4eab"],

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
  0.85],ExpressionUUID->"790d336e-bfee-4dc5-8d6b-f78966400f5d"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Perform final checks regarding the connection", "Subsection",
 CellChangeTimes->{{3.839688440804923*^9, 3.839688449586424*^9}, {
  3.843920456492786*^9, 
  3.84392046597336*^9}},ExpressionUUID->"7fccc460-e2d5-464d-b47e-\
ee7ee2a49357"],

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
  0.85],ExpressionUUID->"0f555edb-630b-4daf-85aa-4e366485e387"]
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
  0.85],ExpressionUUID->"512f86a9-0c42-4d1a-9527-e9e488a606a5"]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell["3. Create and set up a new file", "Section",
 CellChangeTimes->{{3.8396888508724346`*^9, 
  3.8396888548861465`*^9}},ExpressionUUID->"64ea51cc-4c74-4406-ae9d-\
64d35d9e7216"],

Cell[CellGroupData[{

Cell["Generate a Mathematica API folder", "Subsection",
 CellMargins->{{30, 0}, {5, 15}},
 CellChangeTimes->{{3.8396888641435747`*^9, 3.839688869745624*^9}, {
  3.8396889610022497`*^9, 
  3.8396889687134495`*^9}},ExpressionUUID->"c373aec0-97d3-497f-9e76-\
be8d5eb6f1ac"],

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
  3.8396890811783457`*^9}},ExpressionUUID->"aa9a9577-60a3-4812-aae0-\
8b73f3a3f0f6"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Set up a primary optical system and make a new file", "Subsection",
 CellMargins->{{30, 0}, {5, 15}},
 CellChangeTimes->{{3.8396888641435747`*^9, 3.839688869745624*^9}, {
  3.8396889610022497`*^9, 3.8396889687134495`*^9}, {3.8396890878719964`*^9, 
  3.8396890894900384`*^9}, {3.839690855879406*^9, 3.8396908593155165`*^9}, {
  3.839690922242832*^9, 
  3.839690925937853*^9}},ExpressionUUID->"0077a9be-88d0-4b46-8459-\
742cebf90032"],

Cell[BoxData[{
 RowBox[{
  RowBox[{"theSystem", "=", 
   RowBox[{"theApplication", "@", 
    RowBox[{"PrimarySystem", "[", "]"}]}]}], ";"}], "\n", 
 RowBox[{
  RowBox[{"lensname", "=", "\"\<e01_new_file_and_quickfocus.zmx\>\""}], 
  ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{"lensFile", "=", 
   RowBox[{"FileNameJoin", "[", 
    RowBox[{"{", 
     RowBox[{"apiDir", ",", "lensname"}], "}"}], "]"}]}], 
  ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{"theSystem", "@", 
   RowBox[{"New", "[", "False", "]"}]}], ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{"theSystem", "@", 
   RowBox[{"SaveAs", "[", "lensFile", "]"}]}], ";"}]}], "Input",
 CellChangeTimes->{{3.8396908848720417`*^9, 3.8396908861659174`*^9}, {
  3.8396909473655686`*^9, 
  3.839691003955614*^9}},ExpressionUUID->"68669788-9684-44df-8297-\
135b7acb23d7"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Set up system preferences", "Subsection",
 CellMargins->{{30, 0}, {5, 15}},
 CellChangeTimes->{{3.8396888641435747`*^9, 3.839688869745624*^9}, {
  3.8396889610022497`*^9, 3.8396889687134495`*^9}, {3.8396890878719964`*^9, 
  3.839689106316992*^9}},ExpressionUUID->"5e64f9ce-6f9d-4104-b619-\
e45c7f4629ee"],

Cell[BoxData[
 RowBox[{
  RowBox[{"systemData", "=", 
   RowBox[{"theSystem", "@", "SystemData"}]}], ";"}]], "Input",ExpressionUUID-\
>"18076e36-faee-4dcb-b7d5-7f3cb659c959"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{"Add", " ", "a", " ", "Material", " ", "Catalog"}], "*)"}], 
  "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{"systemData", "@", 
    RowBox[{"MaterialCatalogs", "@", 
     RowBox[{"AddCatalog", "[", "\"\<SCHOTT\>\"", "]"}]}]}], ";"}]}]], "Input",
 CellChangeTimes->{{3.8396910294605474`*^9, 
  3.8396910948451557`*^9}},ExpressionUUID->"a75f5db4-6a46-44b2-888d-\
6dc84dc93e53"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{
   "Change", " ", "the", " ", "system", " ", "aperture", " ", "to", " ", "40",
     " ", "lens", " ", "units"}], "*)"}], "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{
    RowBox[{"systemData", "@", 
     RowBox[{"Aperture", "@", "ApertureValue"}]}], "=", "40"}], 
   ";"}]}]], "Input",
 CellChangeTimes->{{3.83968982201978*^9, 3.8396898323865814`*^9}, {
  3.839691078298629*^9, 
  3.8396910811086397`*^9}},ExpressionUUID->"baed72ba-c8cc-42d7-80fe-\
26a48e27d987"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{
    RowBox[{"Add", " ", "one", " ", "off"}], "-", 
    RowBox[{"axis", " ", "field"}]}], "*)"}], "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{
    RowBox[{"field1", "=", 
     RowBox[{"systemData", "@", 
      RowBox[{"Fields", "@", 
       RowBox[{"GetField", "[", "1", "]"}]}]}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"newField2", "=", 
     RowBox[{"systemData", "@", 
      RowBox[{"Fields", "@", 
       RowBox[{"AddField", "[", 
        RowBox[{"0", ",", " ", "5.0", ",", " ", "1.0"}], "]"}]}]}]}], 
    ";"}]}]}]], "Input",ExpressionUUID->"2e7595d7-a64b-4994-8c1a-\
a44099862bc9"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{
    RowBox[{"Define", " ", "the", " ", "d"}], "-", 
    RowBox[{
    "line", " ", "as", " ", "the", " ", "system", " ", "wavelength"}]}], 
   "*)"}], "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{"primaryWavelength", "=", 
    RowBox[{"systemData", "@", 
     RowBox[{"Wavelengths", "@", 
      RowBox[{"SelectWavelengthPreset", "[", 
       RowBox[{
        RowBox[{"ZOSAPI", "@", 
         RowBox[{"SystemData", "@", 
          RowBox[{"WavelengthPreset", "@", "d_"}]}]}], "0", "p587"}], 
       "]"}]}]}]}], ";"}]}]], "Input",
 CellChangeTimes->{{3.77489565797472*^9, 
  3.7748956779473944`*^9}},ExpressionUUID->"24ff3cb8-9156-4b9c-99b2-\
32f39b5a566b"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Display the current LDE", "Subsection",
 CellChangeTimes->{{3.8396901353915668`*^9, 
  3.8396901392957335`*^9}},ExpressionUUID->"1e7dfad2-4eae-4dc7-8ce4-\
dbc4b7291c99"],

Cell[BoxData[
 RowBox[{
  RowBox[{"theLDE", " ", "=", " ", 
   RowBox[{"theSystem", "@", "LDE"}]}], ";"}]], "Input",
 CellChangeTimes->{{3.8396901413018456`*^9, 3.8396901467099113`*^9}, {
  3.839691142068884*^9, 
  3.8396911467489195`*^9}},ExpressionUUID->"053d9d58-bf8c-41b0-bf57-\
a6171a795ce8"],

Cell[CellGroupData[{

Cell[BoxData["displayLDE"], "Input",
 CellFrame->True,
 CellMargins->{{66, 10}, {0, 8}},
 CellChangeTimes->{{3.7687432644016266`*^9, 3.7687432659112825`*^9}},
 TextAlignment->
  AlignmentMarker,ExpressionUUID->"0d903506-c0f1-4b00-9e38-ae62d5b597a4"],

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
     {"1", "\<\"Standard\"\>", "\<\"\"\>", "\[Infinity]", "0.`", 
      "0.`", "\<\"\"\>", "\<\"\"\>", "20.`"},
     {"2", "\<\"Standard\"\>", "\<\"\"\>", "\[Infinity]", "0.`", 
      "\[Infinity]", "\<\"\"\>", "\<\"\"\>", "20.`"}
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
 CellChangeTimes->{3.768743266989798*^9, 3.7687452099422946`*^9, 
  3.7687452660911894`*^9, 3.7690318506843057`*^9, 3.7690381241115108`*^9, 
  3.7690381894261456`*^9, 3.7690383002104435`*^9, 3.7691074530834055`*^9, 
  3.76910832773925*^9, 3.769108505428296*^9, 3.769108965218915*^9, 
  3.7691093645549984`*^9, 3.7691095158535037`*^9, 3.769109658819937*^9, 
  3.769111013477272*^9, 3.7691143191602373`*^9, 3.769114625776077*^9, 
  3.7748958287705812`*^9, 3.7748959627118645`*^9, 3.7748961368826046`*^9, 
  3.778438620134506*^9, 3.7784386727747736`*^9, 3.8396905446298037`*^9, 
  3.839691163500985*^9, 3.8396922541366854`*^9, 3.839692295872362*^9, 
  3.8396945691331325`*^9, 3.8454066496131697`*^9, 3.8457323722432985`*^9, 
  3.8457341775826974`*^9},
 TextAlignment->AlignmentMarker,
 Background->RGBColor[
  0.854902, 0.85098, 
   0.843137],ExpressionUUID->"4881ce8b-c17a-4efe-bdb0-597a3b5393b3"]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell["Add the singlet", "Subsection",
 CellChangeTimes->{{3.839691177088766*^9, 
  3.839691178862774*^9}},ExpressionUUID->"7ea3a12e-bb83-46ed-8f3b-\
b0ccfa3d554e"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{"Add", " ", "two", " ", "new", " ", "surfaces"}], "*)"}], 
  "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{
    RowBox[{"theLDE", "@", 
     RowBox[{"InsertNewSurfaceAt", "[", "2", "]"}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"theLDE", "@", 
     RowBox[{"InsertNewSurfaceAt", "[", "2", "]"}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"surf0", "=", 
     RowBox[{"theLDE", "@", 
      RowBox[{"GetSurfaceAt", "[", "0", "]"}]}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"surf1", "=", 
     RowBox[{"theLDE", "@", 
      RowBox[{"GetSurfaceAt", "[", "1", "]"}]}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"surf2", "=", 
     RowBox[{"theLDE", "@", 
      RowBox[{"GetSurfaceAt", "[", "2", "]"}]}]}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"surf3", "=", 
     RowBox[{"theLDE", "@", 
      RowBox[{"GetSurfaceAt", "[", "3", "]"}]}]}], ";"}]}]}]], "Input",Express\
ionUUID->"b0185e74-c061-4c8a-abfd-f882352619cc"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{"Edit", " ", "the", " ", "surface", " ", "parameters"}], "*)"}], 
  "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{
    RowBox[{
     RowBox[{"surf1", "@", "Thickness"}], "=", "50.0"}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"surf1", "@", "Comment"}], "=", "\"\<Stop is free to move\>\""}],
     ";"}], "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"surf2", "@", "Radius"}], "=", "100.0"}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"surf2", "@", "Thickness"}], "=", "10.0"}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"surf2", "@", "Comment"}], "=", "\"\<Front of lens\>\""}], ";"}],
    "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"surf2", "@", "Material"}], "=", "\"\<N-BK7\>\""}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"surf3", "@", "Comment"}], "=", "\"\<Rear of lens\>\""}], 
    ";"}]}]}]], "Input",
 CellChangeTimes->{
  3.839691231397273*^9, {3.8396912658369083`*^9, 
   3.8396912943911333`*^9}},ExpressionUUID->"852b83a1-97fa-461f-a3fd-\
c1a344de560f"],

Cell[BoxData[
 RowBox[{"(*", 
  RowBox[{"View", " ", "the", " ", "updated", " ", "LDE"}], "*)"}]], "Input",
 CellChangeTimes->{{3.8396912380741444`*^9, 
  3.839691243038931*^9}},ExpressionUUID->"8eaab1d9-9662-4ab8-ad32-\
dab95116f727"],

Cell[CellGroupData[{

Cell[BoxData["displayLDE"], "Input",
 CellFrame->True,
 CellMargins->{{66, 10}, {0, 8}},
 CellChangeTimes->{{3.7687432644016266`*^9, 3.7687432659112825`*^9}},
 TextAlignment->
  AlignmentMarker,ExpressionUUID->"3b2cbddd-ce81-43a9-980a-f3bf276d7c8a"],

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
     {"3", "\<\"Standard\"\>", "\<\"Rear of lens\"\>", "\[Infinity]", "0.`", 
      "0.`", "\<\"\"\>", "\<\"\"\>", "24.44127332845521`"},
     {"4", "\<\"Standard\"\>", "\<\"\"\>", "\[Infinity]", "0.`", 
      "\[Infinity]", "\<\"\"\>", "\<\"\"\>", "24.44127332845521`"}
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
   3.7691143191602373`*^9, 3.769114625776077*^9, 3.7748959883268623`*^9, 
   3.774896153221017*^9, 3.778438620355625*^9, 3.778438672984215*^9, 
   3.8396905448018465`*^9, {3.8396912495887184`*^9, 3.8396912992020993`*^9}, 
   3.8396922542104855`*^9, 3.8396922959505043`*^9, 3.839694569197633*^9, 
   3.8454066496774716`*^9, 3.8457323723051357`*^9, 3.845734177658432*^9},
 TextAlignment->AlignmentMarker,
 Background->RGBColor[
  0.854902, 0.85098, 
   0.843137],ExpressionUUID->"b536e038-7c17-45b0-a1c6-bd138dca59ba"]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell["Apply a solve in the LDE", "Subsection",
 CellChangeTimes->{{3.8396913167036676`*^9, 
  3.839691326709589*^9}},ExpressionUUID->"2b44b6d5-374e-4d12-a27c-\
aa5fb7f569c2"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{
   "Load", " ", "enumeration", " ", "data", " ", "to", " ", "help", " ", "us",
     " ", "pick", " ", "the", " ", "solve", " ", "type"}], "*)"}], 
  "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{"LoadNETType", "[", "\"\<ZOSAPI.Editors.SolveType\>\"", "]"}], 
   ";"}]}]], "Input",
 CellChangeTimes->{{3.774896189734271*^9, 3.774896208968252*^9}, {
  3.8396913350121346`*^9, 
  3.8396913613740745`*^9}},ExpressionUUID->"aa4ff7c2-1e25-4250-b151-\
75ad3376f90d"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{
    RowBox[{"Apply", " ", "F"}], "-", 
    RowBox[{"Number", " ", "solve", " ", "to", " ", "surface", " ", "3"}]}], 
   "*)"}], "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{
    RowBox[{"solver", "=", 
     RowBox[{"surf3", "@", 
      RowBox[{"RadiusCell", "@", 
       RowBox[{"CreateSolveType", "[", "SolveType`FNumber", "]"}]}]}]}], 
    ";"}], "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{
     RowBox[{"solver", "@", "FNumber"}], "=", "10"}], ";"}], 
   "\[IndentingNewLine]", 
   RowBox[{
    RowBox[{"surf3", "@", 
     RowBox[{"RadiusCell", "@", 
      RowBox[{"SetSolveData", "[", "solver", "]"}]}]}], ";"}]}]}]], "Input",
 CellChangeTimes->{{3.774896232629739*^9, 
  3.7748962333860507`*^9}},ExpressionUUID->"377eef02-e723-4975-87c3-\
c9fe0bb53af2"],

Cell[CellGroupData[{

Cell[BoxData["displayLDE"], "Input",
 CellFrame->True,
 CellMargins->{{66, 10}, {0, 8}},
 CellChangeTimes->{{3.7687432644016266`*^9, 3.7687432659112825`*^9}},
 TextAlignment->
  AlignmentMarker,ExpressionUUID->"1394d985-1615-4fd0-aeff-b6be8b743d5a"],

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
      "0.`", "0.`", "\<\"\"\>", "\<\"\"\>", "24.39439421910087`"},
     {"4", "\<\"Standard\"\>", "\<\"\"\>", "\[Infinity]", "0.`", 
      "\[Infinity]", "\<\"\"\>", "\<\"\"\>", "24.35740724758031`"}
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
   3.7691143191602373`*^9, 3.769114625776077*^9, 3.7748959883268623`*^9, 
   3.774896153221017*^9, 3.778438620355625*^9, 3.778438672984215*^9, 
   3.8396905448018465`*^9, {3.8396912495887184`*^9, 3.8396912992020993`*^9}, {
   3.8396913559609113`*^9, 3.8396913665035257`*^9}, 3.839692254282161*^9, 
   3.8396922960329075`*^9, 3.8396945692765617`*^9, 3.8454066497592883`*^9, 
   3.845732372386998*^9, 3.845734177731671*^9},
 TextAlignment->AlignmentMarker,
 Background->RGBColor[
  0.854902, 0.85098, 
   0.843137],ExpressionUUID->"dba68860-fa68-4e98-a896-033cedfd1bf4"]
}, Open  ]]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell["4. Run Quick Focus", "Section",
 CellChangeTimes->{{3.8396913783685584`*^9, 
  3.8396913811518064`*^9}},ExpressionUUID->"4639fbd7-b719-4908-9121-\
fb481da3ddbf"],

Cell[CellGroupData[{

Cell["Apply settings and run the tool", "Subsection",
 CellChangeTimes->{{3.8396913924204903`*^9, 
  3.839691398927729*^9}},ExpressionUUID->"685728dd-0ceb-4fc3-ab01-\
04502810bf12"],

Cell[BoxData[
 RowBox[{
  RowBox[{
  "LoadNETType", "[", "\"\<ZOSAPI.Tools.General.QuickFocusCriterion\>\"", 
   "]"}], ";"}]], "Input",
 CellChangeTimes->{{3.7643435404135647`*^9, 3.76434359553121*^9}, {
   3.764344601758454*^9, 3.764344616254414*^9}, {3.7643447294962826`*^9, 
   3.7643447298862724`*^9}, 
   3.774896298430417*^9},ExpressionUUID->"c09fa931-5be7-4c06-9552-\
77e917985260"],

Cell[BoxData[{
 RowBox[{
  RowBox[{"quickFocus", "=", 
   RowBox[{"theSystem", "@", 
    RowBox[{"Tools", "@", 
     RowBox[{"OpenQuickFocus", "[", "]"}]}]}]}], ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{
   RowBox[{"quickFocus", "@", "Criterion"}], "=", 
   "QuickFocusCriterion`SpotSizeRadial"}], ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{
   RowBox[{"quickFocus", "@", "UseCentroid"}], "=", "True"}], 
  ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{"runQF", ":=", 
   RowBox[{"quickFocus", "@", 
    RowBox[{"RunAndWaitForCompletion", "[", "]"}]}]}], 
  ";"}], "\[IndentingNewLine]", 
 RowBox[{"runQF", ";"}]}], "Input",
 CellChangeTimes->{{3.7748963131647725`*^9, 
  3.774896316284902*^9}},ExpressionUUID->"81cd5505-04fb-4567-9a10-\
259695001680"],

Cell[BoxData[
 RowBox[{
  RowBox[{"quickFocus", "@", 
   RowBox[{"Close", "[", "]"}]}], ";"}]], "Input",
 CellChangeTimes->{{3.839692703549769*^9, 
  3.8396927078733873`*^9}},ExpressionUUID->"ff19e0a8-c16e-400e-b297-\
ddd89216149d"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Confirm the tool has run by observing LDE", "Subsection",
 CellChangeTimes->{{3.8396914363504896`*^9, 
  3.8396914511630774`*^9}},ExpressionUUID->"57218785-fb5a-4d59-a82a-\
51da3757329f"],

Cell[CellGroupData[{

Cell[BoxData["displayLDE"], "Input",
 CellFrame->True,
 CellMargins->{{66, 10}, {0, 8}},
 CellChangeTimes->{{3.7687432644016266`*^9, 3.7687432659112825`*^9}},
 TextAlignment->
  AlignmentMarker,ExpressionUUID->"94fc1bd8-c114-4928-bdfc-d74e61411446"],

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
   3.7691143191602373`*^9, 3.769114625776077*^9, 3.7748959883268623`*^9, 
   3.774896153221017*^9, 3.778438620355625*^9, 3.778438672984215*^9, 
   3.8396905448018465`*^9, {3.8396912495887184`*^9, 3.8396912992020993`*^9}, {
   3.8396913559609113`*^9, 3.8396913665035257`*^9}, 3.839691457444555*^9, 
   3.839692254330844*^9, 3.8396922960957384`*^9, 3.8396945693345113`*^9, 
   3.84540664982857*^9, 3.845732372455301*^9, 3.845734177808395*^9},
 TextAlignment->AlignmentMarker,
 Background->RGBColor[
  0.854902, 0.85098, 
   0.843137],ExpressionUUID->"a296c151-5756-4bcf-a7c1-02e676f469cb"]
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
  3.839696104375512*^9, 3.8396961061321416`*^9}},
 TextAlignment->
  AlignmentMarker,ExpressionUUID->"5ebdd5a6-2bc9-45ee-8ae5-10b05690b075"]
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
  3.8396884894719977`*^9}},ExpressionUUID->"b4cd7c5a-6e7e-4eb5-8e83-\
bbaf9cf79b2f"]
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
Cell[580, 22, 273, 4, 101, "Title", "ExpressionUUID" -> \
"a08b22cf-f99a-42ff-ad2d-e999221be01b"],
Cell[CellGroupData[{
Cell[878, 30, 224, 4, 72, "Chapter", "ExpressionUUID" -> \
"f9c0b5e2-1985-4710-a48c-30ae38fbdeaa"],
Cell[1105, 36, 580, 11, 106, "Text", "ExpressionUUID" -> \
"505e9e76-8b58-4850-93c8-549e8ef99217"],
Cell[CellGroupData[{
Cell[1710, 51, 172, 3, 70, "Section", "ExpressionUUID" -> \
"d787219d-85f8-49b4-84c1-c39773cd44b7"],
Cell[CellGroupData[{
Cell[1907, 58, 206, 3, 49, "Subsection", "ExpressionUUID" -> \
"fe7d1dca-805e-4f95-9d0e-25602c735a7d"],
Cell[2116, 63, 281, 6, 48, "Input", "ExpressionUUID" -> \
"b2e11d2a-f5bb-4a79-b7eb-6f7ecd56203d"]
}, Open  ]],
Cell[CellGroupData[{
Cell[2434, 74, 226, 5, 49, "Subsection", "ExpressionUUID" -> \
"417c9345-bda1-412d-b836-64afc6b8148e"],
Cell[2663, 81, 825, 22, 87, "Input", "ExpressionUUID" -> \
"af68f627-4bd9-4558-9d67-8667918e6be3"]
}, Open  ]],
Cell[CellGroupData[{
Cell[3525, 108, 175, 3, 49, "Subsection", "ExpressionUUID" -> \
"fcec0d3b-8461-4dbe-8e29-a2488947bb06"],
Cell[3703, 113, 1885, 50, 163, "Input", "ExpressionUUID" -> \
"d08d2fb7-67ba-4c5c-8b0e-8b9e4ba6dc72"],
Cell[CellGroupData[{
Cell[5613, 167, 1186, 24, 125, "Input", "ExpressionUUID" -> \
"535dd54b-4517-4c27-988b-3e38692c8424"],
Cell[6802, 193, 373, 7, 30, "Output", "ExpressionUUID" -> \
"6f23adab-51a8-4bc4-adf6-a45bc16806b8"]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[7224, 206, 165, 3, 49, "Subsection", "ExpressionUUID" -> \
"81680ac0-d3f6-4dd9-9322-57db8a8e4700"],
Cell[7392, 211, 1187, 26, 68, "Input", "ExpressionUUID" -> \
"869de14f-800d-497b-8184-7a9725dda15b"]
}, Open  ]],
Cell[CellGroupData[{
Cell[8616, 242, 190, 3, 49, "Subsection", "ExpressionUUID" -> \
"a3ee36a0-dfa3-4bee-8ecc-7b8d6d3c4eab"],
Cell[8809, 247, 1094, 25, 87, "Input", "ExpressionUUID" -> \
"790d336e-bfee-4dc5-8d6b-f78966400f5d"]
}, Open  ]],
Cell[CellGroupData[{
Cell[9940, 277, 241, 4, 49, "Subsection", "ExpressionUUID" -> \
"7fccc460-e2d5-464d-b47e-ee7ee2a49357"],
Cell[10184, 283, 2036, 44, 144, "Input", "ExpressionUUID" -> \
"0f555edb-630b-4daf-85aa-4e366485e387"]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[12269, 333, 166, 3, 70, "Section", "ExpressionUUID" -> \
"35d9530a-8a27-4d91-a844-e88e593606d6"],
Cell[CellGroupData[{
Cell[12460, 340, 186, 3, 49, "Subsection", "ExpressionUUID" -> \
"f6e9a53a-a89d-42d5-b3a4-b1483f62b928"],
Cell[12649, 345, 4098, 105, 376, "Input", "ExpressionUUID" -> \
"512f86a9-0c42-4d1a-9527-e9e488a606a5"]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[16796, 456, 180, 3, 70, "Section", "ExpressionUUID" -> \
"64ea51cc-4c74-4406-ae9d-64d35d9e7216"],
Cell[CellGroupData[{
Cell[17001, 463, 270, 5, 49, "Subsection", "ExpressionUUID" -> \
"c373aec0-97d3-497f-9e76-be8d5eb6f1ac"],
Cell[17274, 470, 557, 15, 50, "Input", "ExpressionUUID" -> \
"aa9a9577-60a3-4812-aae0-8b73f3a3f0f6"]
}, Open  ]],
Cell[CellGroupData[{
Cell[17868, 490, 438, 7, 49, "Subsection", "ExpressionUUID" -> \
"0077a9be-88d0-4b46-8459-742cebf90032"],
Cell[18309, 499, 840, 23, 107, "Input", "ExpressionUUID" -> \
"68669788-9684-44df-8297-135b7acb23d7"]
}, Open  ]],
Cell[CellGroupData[{
Cell[19186, 527, 310, 5, 49, "Subsection", "ExpressionUUID" -> \
"5e64f9ce-6f9d-4104-b619-e45c7f4629ee"],
Cell[19499, 534, 174, 4, 30, "Input", "ExpressionUUID" -> \
"18076e36-faee-4dcb-b7d5-7f3cb659c959"],
Cell[19676, 540, 428, 11, 50, "Input", "ExpressionUUID" -> \
"a75f5db4-6a46-44b2-888d-6dc84dc93e53"],
Cell[20107, 553, 517, 14, 50, "Input", "ExpressionUUID" -> \
"baed72ba-c8cc-42d7-80fe-26a48e27d987"],
Cell[20627, 569, 664, 20, 69, "Input", "ExpressionUUID" -> \
"2e7595d7-a64b-4994-8c1a-a44099862bc9"],
Cell[21294, 591, 709, 20, 50, "Input", "ExpressionUUID" -> \
"24ff3cb8-9156-4b9c-99b2-32f39b5a566b"]
}, Open  ]],
Cell[CellGroupData[{
Cell[22040, 616, 175, 3, 49, "Subsection", "ExpressionUUID" -> \
"1e7dfad2-4eae-4dc7-8ce4-dbc4b7291c99"],
Cell[22218, 621, 297, 7, 30, "Input", "ExpressionUUID" -> \
"053d9d58-bf8c-41b0-bf57-a6171a795ce8"],
Cell[CellGroupData[{
Cell[22540, 632, 249, 5, 41, "Input", "ExpressionUUID" -> \
"0d903506-c0f1-4b00-9e38-ae62d5b597a4"],
Cell[22792, 639, 2655, 65, 96, "Output", "ExpressionUUID" -> \
"4881ce8b-c17a-4efe-bdb0-597a3b5393b3"]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[25496, 710, 163, 3, 49, "Subsection", "ExpressionUUID" -> \
"7ea3a12e-bb83-46ed-8f3b-b0ccfa3d554e"],
Cell[25662, 715, 1064, 33, 145, "Input", "ExpressionUUID" -> \
"b0185e74-c061-4c8a-abfd-f882352619cc"],
Cell[26729, 750, 1178, 37, 164, "Input", "ExpressionUUID" -> \
"852b83a1-97fa-461f-a3fd-c1a344de560f"],
Cell[27910, 789, 235, 5, 30, "Input", "ExpressionUUID" -> \
"8eaab1d9-9662-4ab8-ad32-dab95116f727"],
Cell[CellGroupData[{
Cell[28170, 798, 249, 5, 41, "Input", "ExpressionUUID" -> \
"3b2cbddd-ce81-43a9-980a-f3bf276d7c8a"],
Cell[28422, 805, 2975, 69, 130, "Output", "ExpressionUUID" -> \
"b536e038-7c17-45b0-a1c6-bd138dca59ba"]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[31446, 880, 174, 3, 49, "Subsection", "ExpressionUUID" -> \
"2b44b6d5-374e-4d12-a27c-aa5fb7f569c2"],
Cell[31623, 885, 512, 13, 50, "Input", "ExpressionUUID" -> \
"aa4ff7c2-1e25-4250-b151-75ad3376f90d"],
Cell[32138, 900, 817, 24, 88, "Input", "ExpressionUUID" -> \
"377eef02-e723-4975-87c3-c9fe0bb53af2"],
Cell[CellGroupData[{
Cell[32980, 928, 249, 5, 41, "Input", "ExpressionUUID" -> \
"1394d985-1615-4fd0-aeff-b6be8b743d5a"],
Cell[33232, 935, 3035, 70, 130, "Output", "ExpressionUUID" -> \
"dba68860-fa68-4e98-a896-033cedfd1bf4"]
}, Open  ]]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[36328, 1012, 167, 3, 70, "Section", "ExpressionUUID" -> \
"4639fbd7-b719-4908-9121-fb481da3ddbf"],
Cell[CellGroupData[{
Cell[36520, 1019, 181, 3, 49, "Subsection", "ExpressionUUID" -> \
"685728dd-0ceb-4fc3-ab01-04502810bf12"],
Cell[36704, 1024, 390, 9, 30, "Input", "ExpressionUUID" -> \
"c09fa931-5be7-4c06-9552-77e917985260"],
Cell[37097, 1035, 774, 22, 107, "Input", "ExpressionUUID" -> \
"81cd5505-04fb-4567-9a10-259695001680"],
Cell[37874, 1059, 232, 6, 30, "Input", "ExpressionUUID" -> \
"ff19e0a8-c16e-400e-b297-ddd89216149d"]
}, Open  ]],
Cell[CellGroupData[{
Cell[38143, 1070, 193, 3, 49, "Subsection", "ExpressionUUID" -> \
"57218785-fb5a-4d59-a82a-51da3757329f"],
Cell[CellGroupData[{
Cell[38361, 1077, 249, 5, 41, "Input", "ExpressionUUID" -> \
"94fc1bd8-c114-4928-bdfc-d74e61411446"],
Cell[38613, 1084, 3083, 72, 130, "Output", "ExpressionUUID" -> \
"a296c151-5756-4bcf-a7c1-02e676f469cb"]
}, Open  ]]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[41757, 1163, 165, 3, 70, "Section", "ExpressionUUID" -> \
"fc2c83cc-04c0-43e8-a5a2-8a24bb26d936"],
Cell[41925, 1168, 495, 10, 30, "Input", "ExpressionUUID" -> \
"5ebdd5a6-2bc9-45ee-8ae5-10b05690b075"]
}, Open  ]],
Cell[CellGroupData[{
Cell[42457, 1183, 168, 3, 70, "Section", "ExpressionUUID" -> \
"57164ee3-d71d-43df-97af-c2c8107e09ac"],
Cell[42628, 1188, 247, 6, 30, "Input", "ExpressionUUID" -> \
"b4cd7c5a-6e7e-4eb5-8e83-bbaf9cf79b2f"]
}, Open  ]]
}, Open  ]]
}, Open  ]]
}
]
*)


```
