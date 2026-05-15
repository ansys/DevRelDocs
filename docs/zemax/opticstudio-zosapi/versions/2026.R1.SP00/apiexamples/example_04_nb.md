# Example 04 - Mathematica

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
NotebookDataLength[     99486,       2209]
NotebookOptionsPosition[     94059,       2067]
NotebookOutlinePosition[     94401,       2082]
CellTagsIndexPosition[     94358,       2079]
WindowFrame->Normal*)

(* Beginning of Notebook Content *)
Notebook[{

Cell[CellGroupData[{
Cell["Mathematica Standalone Example 04", "Title",
 CellChangeTimes->{{3.839688029061371*^9, 3.839688029333041*^9}, {
  3.839688063060649*^9, 3.839688078509552*^9}, {3.8396914797351103`*^9, 
  3.839691482944421*^9}, {3.83969464010014*^9, 3.83969464022024*^9}, {
  3.8402928698207445`*^9, 
  3.8402928699009123`*^9}},ExpressionUUID->"6b486536-c28c-4dfd-b075-\
08d85104d265"],

Cell[CellGroupData[{

Cell["Pull data from the FFT MTF", "Chapter",
 CellChangeTimes->{{3.8396881035725594`*^9, 3.839688112297448*^9}, {
  3.8396914862400026`*^9, 3.8396914901911945`*^9}, {3.839694643021407*^9, 
  3.839694647527952*^9}, {3.84029287422497*^9, 
  3.8402928781242685`*^9}},ExpressionUUID->"5d97f93d-a827-4cc0-b56b-\
51a80bf56d26"],

Cell["\<\
A sample file (\[Ellipsis]\\Sequential\\Objectives\\Cooke 40 degree \
field.zmx) is loaded and a new FFT MTF analysis window is opened. The maximum \
frequency and sampling is modified. Results are retrieved and the data series \
are plotted; the OpticStudio FFT MTF plot is recreated.\
\>", "Text",
 CellChangeTimes->{{3.8396881291975994`*^9, 3.8396881300308065`*^9}, {
   3.839688228998783*^9, 3.839688243597742*^9}, 3.839691532616377*^9, 
   3.839694658135377*^9, 
   3.840292919530076*^9},ExpressionUUID->"c5d9a1e1-cbc3-48ac-8273-\
efadfc2fe8af"],

Cell[CellGroupData[{

Cell["1. Set up the interface", "Section",
 CellChangeTimes->{{3.8396882595581264`*^9, 
  3.8396882638859687`*^9}},ExpressionUUID->"88a46f0f-7f83-4e82-9452-\
76677d7cd1fb"],

Cell[CellGroupData[{

Cell["Install Mathematica\[CloseCurlyQuote]s NETLink context", "Subsection",
 CellChangeTimes->{{3.8396882777989693`*^9, 
  3.8396882855614657`*^9}},ExpressionUUID->"3c110287-a70c-439b-b3a5-\
99d93856b147"],

Cell[BoxData[
 RowBox[{"Needs", "[", "\"\<NETLink`\>\"", "]"}]], "Input",
 CellFrame->True,
 CellMargins->{{30, 0}, {15, 0}},
 CellChangeTimes->{{3.839688289624405*^9, 3.8396883024261284`*^9}},
 Background->GrayLevel[
  0.85],ExpressionUUID->"2a9e5d94-60b0-463a-9f3a-3ef382227da6"]
}, Open  ]],

Cell[CellGroupData[{

Cell["\<\
Set a default directory and define the path to the ZOS-API libraries\
\>", "Subsection",
 CellChangeTimes->{{3.8396883515947313`*^9, 
  3.839688361481258*^9}},ExpressionUUID->"6e79cf68-9f67-4805-b77f-\
4fac7c5cd154"],

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
  0.85],ExpressionUUID->"0d9534f7-5ff5-456b-ac4a-71a190e410dd"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Initialize the connection", "Subsection",
 CellChangeTimes->{{3.839688395302744*^9, 
  3.8396883991473007`*^9}},ExpressionUUID->"01302f0e-e11a-4322-8efb-\
aeb339a76897"],

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
  0.85],ExpressionUUID->"d0086b3f-5a55-4246-b353-5ce44b54f51f"],

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
  0.85],ExpressionUUID->"51716171-3c97-4d97-8831-795c9ba895a5"],

Cell[BoxData[
 RowBox[{"{", "\<\"Found OpticStudio at: c:\\\\program files\\\\zemax \
opticstudio 21.3.1\"\>", "}"}]], "Output",
 CellChangeTimes->{
  3.843920769793024*^9, 3.84392085119652*^9, 3.8439212906899757`*^9, 
   3.84392137334933*^9, {3.8439217596654644`*^9, 3.84392178265172*^9}, 
   3.845734234733555*^9},ExpressionUUID->"25090c82-6eca-4cb4-b3fb-\
2da98c6a54ff"]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell["Load assemblies", "Subsection",
 CellChangeTimes->{{3.8396884196575794`*^9, 
  3.839688422125188*^9}},ExpressionUUID->"35f3a73f-e058-4afe-8824-\
63bde12cf5c8"],

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
  0.85],ExpressionUUID->"0c86066e-5a79-497c-a857-4a4f48c8c37e"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Open connection and create the application", "Subsection",
 CellChangeTimes->{{3.839688440804923*^9, 
  3.839688449586424*^9}},ExpressionUUID->"3ed8b4c4-7383-417f-bd86-\
c6a6884687ac"],

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
  0.85],ExpressionUUID->"c1b538f2-36f0-4459-bd8f-4a8bbbaa4139"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Perform final checks regarding the connection", "Subsection",
 CellChangeTimes->{{3.839688440804923*^9, 3.839688449586424*^9}, {
  3.843920456492786*^9, 
  3.84392046597336*^9}},ExpressionUUID->"8289388f-0be8-4bf7-9371-\
e414d6e5d44f"],

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
  0.85],ExpressionUUID->"a768b2e1-1be4-4edf-80e3-a1f3a32cfc53"]
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
  0.85],ExpressionUUID->"f9c0fd7a-cf26-4065-8b95-d6b1c7731f46"]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell["3. Open file and analyse the MTF", "Section",
 CellChangeTimes->{{3.8402929884461393`*^9, 
  3.8402929960699334`*^9}},ExpressionUUID->"6e212a70-e53d-454c-8076-\
48ef005c6241"],

Cell[CellGroupData[{

Cell["Set up a primary optical system and open a sample file", "Subsection",
 CellChangeTimes->{{3.8402930156051064`*^9, 
  3.8402930261802387`*^9}},ExpressionUUID->"1d06c621-ed43-4d37-a0a0-\
ad54ee6f5422"],

Cell[BoxData[
 RowBox[{
  RowBox[{"theSystem", "=", 
   RowBox[{"theApplication", "@", 
    RowBox[{"PrimarySystem", "[", "]"}]}]}], ";"}]], "Input",
 CellChangeTimes->{{3.840293058745802*^9, 3.8402930970666895`*^9}, 
   3.840293325012896*^9},ExpressionUUID->"868bc189-ebde-429c-99a8-\
7ccb0dd4bc54"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{
   "Open", " ", "a", " ", "sample", " ", "file", " ", "from", " ", "the", " ",
     "Zemax", " ", "samples", " ", "directory"}], "*)"}], 
  "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{
    RowBox[{
    "lensname", " ", "=", " ", 
     "\"\<\\\\Sequential\\\\Objectives\\\\Cooke 40 degree field.zmx\>\""}], 
    ";"}], "\n", 
   RowBox[{
    RowBox[{"lensFile", "=", 
     RowBox[{"FileNameJoin", "[", 
      RowBox[{"{", 
       RowBox[{"samplesDir", ",", "lensname"}], "}"}], "]"}]}], ";"}], "\n", 
   RowBox[{
    RowBox[{"theSystem", "@", 
     RowBox[{"LoadFile", "[", 
      RowBox[{"lensFile", ",", "False"}], "]"}]}], ";"}]}]}]], "Input",
 CellChangeTimes->{{3.8402930992716455`*^9, 3.8402931567939415`*^9}, 
   3.840293338885953*^9},ExpressionUUID->"07ac697c-7725-4e9e-a9a5-\
a1848c6d3180"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Confirm the file opened by displaying the current LDE", "Subsection",
 CellChangeTimes->{{3.8402934087165685`*^9, 
  3.8402934159490204`*^9}},ExpressionUUID->"d569d9f9-84cb-4b81-87c4-\
11c4fb5545ee"],

Cell[BoxData[
 RowBox[{
  RowBox[{"theLDE", " ", "=", " ", 
   RowBox[{"theSystem", "@", "LDE"}]}], ";"}]], "Input",ExpressionUUID->\
"e4e244a5-2036-4f04-899e-e7d2c57c060f"],

Cell[CellGroupData[{

Cell[BoxData["displayLDE"], "Input",
 CellFrame->True,
 CellMargins->{{66, 10}, {0, 8}},
 CellChangeTimes->{{3.7687432644016266`*^9, 3.7687432659112825`*^9}},
 TextAlignment->
  AlignmentMarker,ExpressionUUID->"9c05e1c4-cb02-4592-8a69-3227071be270"],

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
     {"1", "\<\"Standard\"\>", "\<\"\"\>", "22.013592508427536`", "0.`", 
      "3.25895583`", "\<\"SK16\"\>", "\<\"AR\"\>", "9.5`"},
     {"2", "\<\"Standard\"\>", "\<\"\"\>", 
      RowBox[{"-", "435.76043616830793`"}], "0.`", 
      "6.0075511`", "\<\"\"\>", "\<\"AR\"\>", "9.5`"},
     {"3", "\<\"Standard\"\>", "\<\"\"\>", 
      RowBox[{"-", "22.213277182315093`"}], "0.`", 
      "0.999974567`", "\<\"F2\"\>", "\<\"AR\"\>", "5.`"},
     {"4", "\<\"Standard\"\>", "\<\"\"\>", "20.291924125273336`", "0.`", 
      "4.75040893`", "\<\"\"\>", "\<\"AR\"\>", "5.`"},
     {"5", "\<\"Standard\"\>", "\<\"\"\>", "79.68360255049363`", "0.`", 
      "2.95207564`", "\<\"SK16\"\>", "\<\"AR\"\>", "7.5`"},
     {"6", "\<\"Standard\"\>", "\<\"\"\>", 
      RowBox[{"-", "18.395332603040327`"}], "0.`", 
      "42.2077801`", "\<\"\"\>", "\<\"AR\"\>", "7.5`"},
     {"7", "\<\"Standard\"\>", "\<\"\"\>", "\[Infinity]", "0.`", 
      "\[Infinity]", "\<\"\"\>", "\<\"\"\>", "18.172658345021212`"}
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
  3.8396945691331325`*^9, 3.8402934424078817`*^9, 3.840298603129737*^9, 
  3.8457327796272173`*^9, 3.8457342391098375`*^9},
 TextAlignment->AlignmentMarker,
 Background->RGBColor[
  0.854902, 0.85098, 
   0.843137],ExpressionUUID->"c2c7badf-cdc5-492d-8ecc-13e0abb21567"]
}, Open  ]]
}, Open  ]],

Cell[CellGroupData[{

Cell["Open the FFT MTF and change the settings", "Subsection",
 CellChangeTimes->{{3.8402934627963653`*^9, 
  3.8402934687794003`*^9}},ExpressionUUID->"e52e9fca-320c-4204-81b2-\
8d4072f9228c"],

Cell[BoxData[
 RowBox[{
  RowBox[{"fftMTF", " ", "=", " ", 
   RowBox[{"theSystem", "@", 
    RowBox[{"Analyses", "@", 
     RowBox[{"NewUFftMtf", "[", "]"}]}]}]}], ";"}]], "Input",
 CellChangeTimes->{{3.840293472264248*^9, 
  3.840293515859892*^9}},ExpressionUUID->"cd8c0fa8-c780-4795-9d2d-\
51c4f5de5a14"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{"Modify", " ", "the", " ", "settings"}], "*)"}], 
  "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{"mtfSettings", " ", "=", " ", 
    RowBox[{"fftMTF", "@", 
     RowBox[{"GetSettings", "[", "]"}]}]}], ";"}]}]], "Input",
 CellChangeTimes->{{3.840293519289222*^9, 
  3.8402935467795334`*^9}},ExpressionUUID->"cda67f80-c6ae-4620-aaff-\
cad0a395d89b"],

Cell[BoxData[{
 RowBox[{
  RowBox[{"LoadNETType", "[", "\"\<ZOSAPI.Analysis.SampleSizes\>\"", "]"}], 
  ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{
   RowBox[{"mtfSettings", "@", "MaximumFrequency"}], " ", "=", " ", "50"}], 
  ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{
   RowBox[{"mtfSettings", "@", "SampleSize"}], " ", "=", " ", 
   "SampleSizes`SU256x256"}], ";"}]}], "Input",
 CellChangeTimes->{{3.8402935507924805`*^9, 
  3.8402936272266912`*^9}},ExpressionUUID->"69f4b37f-8e62-433c-b8f5-\
77ffbe3118ce"]
}, Open  ]],

Cell[CellGroupData[{

Cell["Run the analysis and get the results for plotting", "Subsection",
 CellChangeTimes->{{3.8402936552686214`*^9, 
  3.8402936669586477`*^9}},ExpressionUUID->"34771b37-87aa-4a47-b331-\
612980001b54"],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{"Apply", " ", "the", " ", "settings", " ", "and", " ", "run"}], 
   "*)"}], "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{"fftMTF", "@", 
    RowBox[{"ApplyAndWaitForCompletion", "[", "]"}]}], ";"}]}]], "Input",
 CellChangeTimes->{{3.8402936699672933`*^9, 
  3.8402936915687566`*^9}},ExpressionUUID->"35df2261-f9f0-4197-a2d1-\
32fb15bab7c8"],

Cell[CellGroupData[{

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{"Extract", " ", "the", " ", "results"}], "*)"}], 
  "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{
    RowBox[{"mtfResults", " ", "=", " ", 
     RowBox[{"fftMTF", "@", 
      RowBox[{"GetResults", "[", "]"}]}]}], ";"}], "\[IndentingNewLine]", 
   RowBox[{"numSeries", " ", "=", " ", 
    RowBox[{"mtfResults", "@", "NumberOfDataSeries"}]}]}]}]], "Input",
 CellChangeTimes->{{3.840293695223635*^9, 3.8402937158981133`*^9}, {
  3.840293755833878*^9, 3.840293770233836*^9}, {3.840293875131195*^9, 
  3.8402938857388663`*^9}, {3.8402940516405106`*^9, 3.8402940637883863`*^9}, {
  3.84029431281048*^9, 
  3.8402943136637373`*^9}},ExpressionUUID->"065b4421-33ad-4a42-836e-\
fa12f4050025"],

Cell[BoxData["3"], "Output",
 CellChangeTimes->{3.8402940649558334`*^9, 3.840294314575281*^9, 
  3.84029860356003*^9, 3.8457327799884343`*^9, 
  3.845734239490178*^9},ExpressionUUID->"6fa5724b-cad0-407e-a5c5-\
c70b20faf9b1"]
}, Open  ]],

Cell[BoxData[
 RowBox[{
  RowBox[{"(*", 
   RowBox[{
    RowBox[{
    "Data", " ", "Series", " ", "typically", " ", "represent", " ", "2"}], 
    "-", 
    RowBox[{"3", " ", "column", " ", "results", " ", "in", " ", "the", " ", 
     RowBox[{"GUI", ".", " ", "Use"}], " ", "these", " ", "series", " ", "to",
      " ", "plot", " ", "in", " ", "Mathematica"}]}], "*)"}], 
  "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{"dataAllFields", " ", "=", " ", 
    RowBox[{"Table", "[", " ", 
     RowBox[{",", "\[IndentingNewLine]", 
      RowBox[{"{", 
       RowBox[{"i", ",", " ", "1", ",", " ", "2"}], "}"}], ",", " ", 
      RowBox[{"{", 
       RowBox[{"j", ",", " ", "1", ",", " ", "numSeries"}], "}"}]}], "]"}]}], 
   ";"}]}]], "Input",
 CellChangeTimes->{{3.8402963400596333`*^9, 3.8402963599266005`*^9}, {
  3.8402965375736537`*^9, 3.840296550630498*^9}, {3.84029701783649*^9, 
  3.840297024163862*^9}, {3.840297117256653*^9, 3.840297118567215*^9}, {
  3.8402985599148445`*^9, 
  3.840298574779538*^9}},ExpressionUUID->"08e87564-d856-4d48-861c-\
736d39d5eda6"],

Cell[BoxData[
 RowBox[{"Do", "[", "\[IndentingNewLine]", 
  RowBox[{
   RowBox[{
    RowBox[{"xData", " ", "=", " ", 
     RowBox[{"mtfResults", "@", 
      RowBox[{
       RowBox[{"GetDataSeries", "[", "dataSeries", "]"}], "@", 
       RowBox[{"XData", "@", "Data"}]}]}]}], ";", "\[IndentingNewLine]", 
    RowBox[{"yData", " ", "=", " ", 
     RowBox[{"mtfResults", "@", 
      RowBox[{
       RowBox[{"GetDataSeries", "[", "dataSeries", "]"}], "@", 
       RowBox[{"YData", "@", "Data"}]}]}]}], ";", "\[IndentingNewLine]", 
    RowBox[{"tan", " ", "=", " ", 
     RowBox[{"Thread", "@", 
      RowBox[{"{", 
       RowBox[{"xData", ",", " ", 
        RowBox[{"yData", "[", 
         RowBox[{"[", 
          RowBox[{"All", ",", " ", "1"}], "]"}], "]"}]}], "}"}]}]}], ";", 
    "\[IndentingNewLine]", 
    RowBox[{"sag", " ", "=", " ", 
     RowBox[{"Thread", "@", 
      RowBox[{"{", 
       RowBox[{"xData", ",", " ", 
        RowBox[{"yData", "[", 
         RowBox[{"[", 
          RowBox[{"All", ",", " ", "2"}], "]"}], "]"}]}], "}"}]}]}], ";", 
    "\[IndentingNewLine]", 
    RowBox[{
     RowBox[{"dataAllFields", "[", 
      RowBox[{"[", 
       RowBox[{"1", ",", " ", 
        RowBox[{"dataSeries", " ", "+", " ", "1"}]}], "]"}], "]"}], " ", "=", 
     " ", "tan"}], ";", "\[IndentingNewLine]", 
    RowBox[{
     RowBox[{"dataAllFields", "[", 
      RowBox[{"[", 
       RowBox[{"2", ",", " ", 
        RowBox[{"dataSeries", " ", "+", " ", "1"}]}], "]"}], "]"}], "=", 
     "sag"}], ";"}], "\[IndentingNewLine]", ",", " ", 
   RowBox[{"{", 
    RowBox[{"dataSeries", ",", " ", "0", ",", " ", 
     RowBox[{"numSeries", " ", "-", "1"}], ",", " ", "1"}], "}"}]}], 
  "]"}]], "Input",
 CellChangeTimes->{{3.84029636141704*^9, 3.8402964172934647`*^9}, {
  3.8402964578288703`*^9, 
  3.840296468388842*^9}},ExpressionUUID->"3d30425c-21f4-477e-83e0-\
1b85bfeb9532"],

Cell[BoxData[{
 RowBox[{
  RowBox[{"field1", " ", "=", " ", 
   RowBox[{"ListLinePlot", "[", 
    RowBox[{
     RowBox[{"{", 
      RowBox[{
       RowBox[{"dataAllFields", "[", 
        RowBox[{"[", 
         RowBox[{"1", ",", "1"}], "]"}], "]"}], ",", 
       RowBox[{"dataAllFields", "[", 
        RowBox[{"[", 
         RowBox[{"2", ",", "1"}], "]"}], "]"}]}], "}"}], ",", " ", 
     RowBox[{"ColorFunction", "\[Rule]", " ", 
      RowBox[{"{", 
       RowBox[{"Blue", ",", " ", "Blue"}], "}"}]}], ",", " ", 
     RowBox[{"PlotStyle", "\[Rule]", " ", 
      RowBox[{"{", 
       RowBox[{"Solid", ",", " ", "Dashed"}], "}"}]}]}], "]"}]}], 
  ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{"field2", " ", "=", " ", 
   RowBox[{"ListLinePlot", "[", 
    RowBox[{
     RowBox[{"{", 
      RowBox[{
       RowBox[{"dataAllFields", "[", 
        RowBox[{"[", 
         RowBox[{"1", ",", " ", "2"}], "]"}], "]"}], ",", " ", 
       RowBox[{"dataAllFields", "[", 
        RowBox[{"[", 
         RowBox[{"2", ",", "2"}], "]"}], "]"}]}], "}"}], ",", " ", 
     RowBox[{"ColorFunction", "\[Rule]", " ", 
      RowBox[{"{", 
       RowBox[{"Green", ",", " ", "Green"}], "}"}]}], ",", " ", 
     RowBox[{"PlotStyle", "\[Rule]", " ", 
      RowBox[{"{", 
       RowBox[{"Solid", ",", " ", "Dashed"}], "}"}]}]}], "]"}]}], 
  ";"}], "\[IndentingNewLine]", 
 RowBox[{
  RowBox[{"field3", " ", "=", " ", 
   RowBox[{"ListLinePlot", "[", 
    RowBox[{
     RowBox[{"{", 
      RowBox[{
       RowBox[{"dataAllFields", "[", 
        RowBox[{"[", 
         RowBox[{"1", ",", "3"}], "]"}], "]"}], ",", " ", 
       RowBox[{"dataAllFields", "[", 
        RowBox[{"[", 
         RowBox[{"2", ",", " ", "3"}], "]"}], "]"}]}], "}"}], ",", " ", 
     RowBox[{"ColorFunction", "\[Rule]", " ", 
      RowBox[{"{", 
       RowBox[{"Red", ",", " ", "Red"}], "}"}]}], ",", " ", 
     RowBox[{"PlotStyle", "\[Rule]", " ", 
      RowBox[{"{", 
       RowBox[{"Solid", ",", " ", "Dashed"}], "}"}]}], " ", ",", " ", 
     RowBox[{"PlotLabels", "\[Rule]", " ", 
      RowBox[{"{", 
       RowBox[{"\"\<Test\>\"", ",", " ", "\"\<Test1\>\""}], "}"}]}]}], 
    "]"}]}], ";"}]}], "Input",
 CellChangeTimes->{{3.8402964757526875`*^9, 3.84029649409365*^9}, {
   3.840296558455192*^9, 3.840296580645381*^9}, {3.8402967039151287`*^9, 
   3.8402967800766845`*^9}, {3.840296948981781*^9, 3.8402969636456394`*^9}, {
   3.8402970029489017`*^9, 3.8402971344875455`*^9}, {3.840297185534982*^9, 
   3.840297197270131*^9}, {3.8402972863382187`*^9, 3.840297406835165*^9}, {
   3.8402975264782887`*^9, 3.8402976062215843`*^9}, {3.8402977849727883`*^9, 
   3.8402978060770454`*^9}, 
   3.840298509460077*^9},ExpressionUUID->"95208949-d638-4782-9ff9-\
d6e0dd7d5354"],

Cell[CellGroupData[{

Cell[BoxData[{
 RowBox[{
  RowBox[{
   RowBox[{"plot", " ", "=", " ", 
    RowBox[{"Show", "[", 
     RowBox[{
      RowBox[{"{", 
       RowBox[{"field1", ",", " ", "field2", ",", " ", "field3"}], "}"}], ",",
       " ", 
      RowBox[{"PlotLabel", "\[Rule]", " ", "\"\<FFT MTF\>\""}], ",", " ", 
      RowBox[{"Frame", "\[Rule]", " ", "True"}], ",", " ", 
      RowBox[{"FrameLabel", "\[Rule]", " ", 
       RowBox[{"{", 
        RowBox[{
        "\"\<Spatial Frequency in cycles per mm\>\"", ",", " ", 
         "\"\<Modulus of the OTF\>\""}], "}"}]}], ",", " ", 
      RowBox[{"ImageSize", "\[Rule]", " ", "550"}], ",", " ", 
      RowBox[{"FrameTicks", "\[Rule]", " ", 
       RowBox[{"{", 
        RowBox[{
         RowBox[{"{", 
          RowBox[{"True", ",", " ", "False"}], "}"}], ",", 
         RowBox[{"{", 
          RowBox[{"True", ",", " ", "False"}], "}"}]}], "}"}]}]}], "]"}]}], 
   ";"}], "\[IndentingNewLine]", 
  RowBox[{"(*", 
   RowBox[{"Legended", "[", 
    RowBox[{"plot", ",", 
     RowBox[{"LineLegend", "[", 
      RowBox[{
       RowBox[{"{", 
        RowBox[{"Blue", ",", " ", "Green", ",", "Red"}], "}"}], ",", 
       RowBox[{"{", 
        RowBox[{
        "\"\<0\[Degree] Field\>\"", ",", "\"\<14\[Degree] Field\>\"", ",", 
         "\"\<20\[Degree] Field\>\""}], "}"}]}], "]"}]}], "]"}], 
   "*)"}]}], "\[IndentingNewLine]", 
 RowBox[{"Legended", "[", 
  RowBox[{"plot", ",", 
   RowBox[{"LineLegend", "[", 
    RowBox[{
     RowBox[{"{", 
      RowBox[{"Blue", ",", 
       RowBox[{"Directive", "[", 
        RowBox[{"Blue", ",", " ", "Dashed"}], "]"}], ",", " ", "Green", ",", 
       " ", 
       RowBox[{"Directive", "[", 
        RowBox[{"Green", ",", " ", "Dashed"}], "]"}], ",", "Red", ",", " ", 
       RowBox[{"Directive", "[", 
        RowBox[{"Red", ",", " ", "Dashed"}], "]"}]}], "}"}], ",", 
     RowBox[{"{", 
      RowBox[{
      "\"\<0\[Degree] tangential\>\"", ",", "\"\<0\[Degree] sagittal\>\"", 
       ",", "\"\<14\[Degree] tangential\>\"", ",", " ", 
       "\"\<14\[Degree] sagittal\>\"", ",", "\"\<20\[Degree] tangential\>\"", 
       ",", " ", "\"\<20\[Degree] sagittal\>\""}], "}"}]}], "]"}]}], 
  "]"}]}], "Input",
 CellChangeTimes->{{3.8402971697802367`*^9, 3.8402971770637903`*^9}, {
  3.840297610398287*^9, 3.8402977487331977`*^9}, {3.840297840284542*^9, 
  3.8402979142343903`*^9}, {3.8402979523374567`*^9, 3.840297967929061*^9}, {
  3.8402980750963593`*^9, 3.840298081600542*^9}, {3.840298119913312*^9, 
  3.840298180944083*^9}, {3.840298237230715*^9, 3.8402983071976995`*^9}, {
  3.840298377724642*^9, 3.8402984259887466`*^9}, {3.840298456060032*^9, 
  3.8402985022111864`*^9}},ExpressionUUID->"5ee25857-f232-45bd-9ac0-\
ff310f614b98"],

Cell[BoxData[
 TemplateBox[{GraphicsBox[{{{}, 
      GraphicsComplexBox[CompressedData["
1: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
f84J2gk=
       "], {{{}, {}, {
          Hue[0.67, 0.6, 0.6], 
          Directive[
           PointSize[0.011111111111111112`], 
           RGBColor[0.368417, 0.506779, 0.709798], 
           AbsoluteThickness[1.6]], 
          LineBox[CompressedData["
1:eJwl1FO4EAYYBuBzsm2dTrZdW7WsZbtVy3bLtWxr2bat5WVjyzZXrfc8u3i/
//a7+f7gJu2rtAsMCAjIJEJuKEIThrCEIzwRiEgkIhOFqEQjOjGISSxiE4e4
xCM+CUhIIhKThKQkI4jkBJOClKQiNWlISzrSk4GMIX3JTBayko3s5CAnuchN
HvKSj/wUoCCF+IEfKUwRivITxShOCUpSitKUoSzlKE8FfqYilahMFapSjerU
oCa1qE0d6lKP+jSgIY1oTBN+oSnNaM6vtKAlrWhNG9rSjvZ0oCOd6EwXutKN
7vSgJ73ozW/0oS/96M8ABjKIwQzhd4YyjOGMYCSjGM0YxjKO8UxgIpOYzBSm
Mo3pzGAms5jNH8xhLvOYzwIWsojFLGEpy1jOClayitWsYS3rWM8GNrKJzWxh
K9vYzg52sovd7GEv+9jPAQ5yiMMc4U+OcozjnOAkpzjNX5zhLOc4zwUuconL
XOEq17jODW5yi9v8zT/c4S73uM8DHvKIxzzhKc94zgte8orXvOEt73jPBz7y
ic/8yxe+8o3/CBl/IKEITRjCEo7wRCAikYhMFKISjejEICaxiE0c4hKP+CQg
IYlITBKSkowgkhNMClKSitSkIS3pSE8GMgb+/6++Az6VhWw=
           "], VertexColors -> Automatic]}, {
          Hue[0.9060679774997897, 0.6, 0.6], 
          Directive[
           PointSize[0.011111111111111112`], 
           RGBColor[0.880722, 0.611041, 0.142051], 
           AbsoluteThickness[1.6], 
           Dashing[{Small, Small}]], 
          LineBox[CompressedData["
1:eJwV0OeDDwQAgOHfUUYysjcno3D23uPseZvsvSkrm7IpK2RTCNkre5a9lb2V
WUb25vHhef+AN7h5l/DOQYFAILeEkIe85CM/BShIIQpThKIUozglKEkpSlOG
spSjPBWoSCiVqEwVqlKN6tSgJrWoTR3qEkY4EUQSRTQx1KM+X9CAhjSiMU1o
SjOa04KWtKI1bWhLO9rTgY504v2MLnzJV3SlG93pQU++phe96UNf+tGfAQxk
EN/wLYMZwlCGMZwRjGQUo/mO7xnDWMYxngn8wEQmMZkfmcJUpjGdGcxkFrOZ
w0/8zFzmMZ9fWMBCFvEri1nCUpaxnBWsZBWrWcNafmMd69nARjaxmS1sZRvb
2cFOfucPdrGbPexlH/s5wEEOcZgjHOUYx/mTvzjBSU5xmjOc5RznucBFLnGZ
K1zlb/7hGte5wU1ucZt/+Y873OUe9/mfBzzkEY95wlOe8ZwXvOQVr3nDWwKx
AoEgYhGbD/iQOMQlHvH5iAR8TEISkZgkfEJSkpGcFKQkFalJQ1rSkZ4MZCQT
mQkmC5+SlWxkJwef8Tk5yUVuQshDXvKRnwIUpBCFKUJRilGcEpSkFKUpQ1nK
UZ4KVCSUSlSmClWpRnVqUJNa1KYOdQkjnAgiiSKaGOrxDgpPjlQ=
           "], VertexColors -> Automatic]}}}, VertexColors -> CompressedData["
1:eJztyLENABAUQMEfJjGJHVRqidrqRmABA0juFa+4MlabKSL6XY5Xu3LOOeec
c84555xzzjnnnHPOOeecc84555xzzjnnnHPOOef8Xz8BGshP
        "]], {}, {}, {{}, {}}, {{}, {}}}, {{}, 
      GraphicsComplexBox[CompressedData["
1:eJxl2Hdcze/7B3BZGSVSSYtUNFA0NdxXO6NEyYqksouMltAgm4bIJyFKKLRp
SxntvUud9jwlWWn8Oud7u/zx69GDx9HpvN/v+76u13V7iu87tsVu8qRJk7ZP
/MH6++/XOPurnwzJ9GnfO/CBXG39U6n78+/rCqIhLdJvzOwnzo2OX2O5m0hK
jPmspta/P28jSbEr+pJr+4njqYP+5zO7ScrzZwqPiv6+f4BMlcg1MM3qJwkX
Xi98mjxIBnjHEm4k/P397yRKXrZl+dN+srpI9vB1vl8kP9E5RDzw7+cNk5lc
srKnvfoJ67dPOIwS4T0PZmg6/P38SbBo/6/QG9v7iUCs78XlthwQLCwzzVP7
7/Umw3vF081yMv1k67bCl4vmTYVScTJ0n+fv9afBqnfz9jYNMUnAyOxK3vTp
IDQ/+NlYNZPezwxItFlfMJrCJKWh68amHZkJJlZiGYwQJr2/WZDcwh8UdY5J
5hpeWvp7ARdoBN9q3ruHSe+XG1zbTU2naDHJpt5sk97sObDy4NLkICEmvf+5
YHn8tOjSn33kk5FnSv/bucC/u+dyTGkffZ55IHDSrUr7ZR/ZL/xo0yEeXihK
Dclr8Omjz8cLi1JdJa9b9ZFpzPSWZrv58M0oh89ctY8+Lx/Elj1jaM7pI2Hv
GpwtU/ngh9PlSuPWXvr8/CAttH7JzaReosdeAAHoi96XOPVmL10PAci0CTj8
1rqXtNixbmABdAsy10Yr9dL1EYSen0/Uv03vJV5q6ko5GYKgONINl6t76Hot
hKnJz3mdnvcQ8dk7PusICEH4JN4jWa49dP2EYI1GxkzndT0kk3V7R4XBqDP/
4V3BHrqeIjA2IvxRrqOb7I2+M6CcJQI6+c8F1RO66fqKgnhaukqOVzcZ92Kt
iBjcDZHLbNzUTddbDPaeCba6INJNHmwtF5Q5vgjqv9hHpXV20fVfDJrXe+b6
x3eRRbddLTbbLIaHP7aXcnp00f1YDDeOEzWpDV3EYfTy4ptzxGFShvKNAf4u
uj/i8DJeavHxpk6Svj+oOzdJHMp85Na+eNFJ92sJPJ58em74qU4ypzgintNu
CRyMUzuzf20n3b8l4Bl2QnOIs5PsXvPmnN5cCXBZ4jvVvKSD7qcEuPn99L72
Xwd5+fjjxB1JgI6Kw8lHNh10fyUhY4m4a9DyDsLerv2SAGbcXK7f2+l+S8Io
x6wrhuntZOPptvrheVLQrOu0Yealdrr/UjBm138qa1M7uf9l6KlqmhTY1XLM
OSPYTuthKRS/t12kzGgjPYZTJ7ZsKQSWpF//8byN1sdSEC//OZp1oo1oxMyf
+F4GX38FLXis0UbrZRm4bLX3DJzaRq4JSUw80jJ4ZHSr4nFBK60faUjwFrlV
eKeV1Hqz/kUaGkOnDInsbaX1JA2fdTpn+cu0Ell2ucrAjZ0+cau+tdD6koEa
D6fS8dQWwtq9sHcyEPehesOkSy203mRB7VD6NNXNLSQnY+8KxhFZcNy/qChC
uIXWnyx4aV5QsWhvJgtljv8UXSAHu1LUvPVjmmk9yoHHYFK1i3szYb1753s5
KCqbvembYTOtz+Vwpdtr9M38ZvL2z81rd+2Xw4IzIaM5jQxar8th8M5Cy+VR
DDLDjlWBK2CvURKD4cKg9bsCQvf7zu3TZxD2dmavAIM2jaOm8xm0nldC/uh/
x+YwmkiEalqX8bGVMDwc7CTzuonW90qYMriw8snZJvLjUX7cVSF5KIrhyDm/
sYnWuzwsvnTOPEO4iRjMqj/76YM8rLT+c+9zZSOtfwX4vYmjrcmpkeQlfZfw
UlOAWo2OaXkLGmk/KMBIQ93pq0lfyEl2AygAz6+oW0ssv9D+UICHRx3X3hlv
IOztbVGAM01neDufNNB+WQWM+pUXhdY1kPdVXGa716yC5MffC+X762n/rILA
xM9zZO/Uk4limFjCVeBUMst69tp62k+rQDjpZFpFex3h1RYR/a91FVhXWFdf
9a2j/bUa7tXfX7pco44ks25ffTV45q0YTG6vpf22Gl4dfbJLLaCW7Hsh11F5
azUcnrVgXTjU0v5bDW33D/tP7q8hM60UJ1pk9cT1lteZPqih/agIp57d9/U1
qSHs8tZQhHmlVdzvx6tpfyqC1aL1T9tiqgmr2mJ9FcEmMC7gj2017VdFELuZ
kDNlYTXhOLv+jGm7IhSWFE4fK6ii/asEUp87y7u8q8jzVVuamBpKcHvbxZCP
6lW0n5Wg5TpkBQxWEtP2Hfo3/JRgqrfzA9PIStrfSlDLXHZ2xLaS/PrPeuIJ
J37Omx92Z1El7XdlKIg+PlusroKwVitXUxlEIufs9btbQftfGfL5Q9f0m1cQ
I1Z7+ytDuPyIrMr8CpoHyhBiuj3NtrScDLx1qZneqQyvAnQdXf3LaT6ogMrS
reknzMrJXXuPteFaKnDPeNNvE/5ymhcqYO5iY8JVXUbIkstPdANUgA9Mcp8F
l9H8UIHT2up2S/aWkYnNmdHcqQJ5Vod5nKXKaJ6owqPAX7FhPaXk1jXWFVSh
Y5bu8uexpTRfVKH44XRDL7dSogoPS8Vuq0IkR1rKCt1SmjeqMNOkaNVzrlLC
fpwuVRhdsVV/sLKE5o8aBMzY4TP9cQnxef7q/i6iBkEP+Fxa7EtoHqnBooW7
7/iol5CVexI5hm+rwU4hie19nCU0n9RAq/yrPH9lMWHtVlC3Glhrdfr8CSum
ebUGQl1fvw05VUzOffqQpwJrYI0vt9hvvWKaX2tgLe8e7tkCxWSpe4FCReAa
2PP944vQoiKaZ2vAQoHT49apIsL66cmeNRA068LyWqEimm/qkPrHBtzfFxL2
dmurwyxHe/3jRwpp3qmDVuusd9H8hWSieayi76jDliJvUMssoPmnDidmWdpw
OBSQDyasQFGH/pyNOdNFCmgeaoAQ96b5unn5xH4Kq2I04OLLrNboM/k0HzVA
xvpN6/oV+YSPHYAaEGTOmTq7KY/mpQaYnp68lBmQR1KPsj5AA6xT1nb3GuXR
/NSEwStqVZPHc4kt+4E0wfnVh/eyibk0TzVB2mn+VSuHXMLFXmBN2ODnM//+
slyar5qgG9C2u46RQ+KvsjZcE7bKeF0VDMmheasF0l45uSY7csgudgFqwfKn
LttdBXJo/mrBj05wCSj/TNiPd08Lks/nugQFfKZ5rAUPuaYleJt9JpHPWA2q
BY63TMJN+T7TfF4LK6UbGocrPhEzdmCsBVep49zngj7RvF4LPOXLWip2fSJ/
5rECbC3sCzwrPrboE83vtXBxnmPgYOtH8oQVF/1rocsvS/L1i480zwlI9lg0
yzt+JKz02KFPoHnA8NtxtY803wlEffUNcJj0kQzKb9/w67+J1yNmC6VyPtC8
J+BnPrPH1/8DYW//AJnIByfXV5YfaP4D5CoZqLot+0BCWZeTAIj0nh88MJhN
5wHAvIU5UnMyssl3VvsYA1gM7ttfdC2bzgcAvk0/RhR2ZJN1rHHgAuAnt+CB
/LJsOi8Avr6fr/75exYJYW8AwPZ6z/2/srPo/ACQFubsTLudRb4qZ5lvKwR4
nMFzU8Aui84TgMKY4BWTVLKIHrtgAHrLzke7cGbR+aINo+F608/VvCesafFd
QhseZv9O4456T+eNNjhKXW+RPP+esJfbRBvmbM+69G7Lezp/tMHJRy+vYel7
wo4PV23wvPO50vVPJp1H2lC4c0G1X3EmYT9umDYU7z+3TOJpJp1P2hChKJoo
555JOs1YiaEN1mnz459vyaTzShtITdSOYJlMoskOkInrNwl0j03KpPNLB7Ti
ud+WVr8jvhPpVyypA1YfC0X4Y97ReaYDjsJXj2VfeUdam1mBpwMKFyM4G/e9
o/NNB9bILjax0XxH1Fjl5qYDHntyYzcJvKPzTgem7Dlnps/IIOz4DNeBuKtF
WxPuZND5pwMiGRZOvRszCLscinWAe0vJSMeUDDoPdSBRdZJZeEo6UWQPFB1g
fNTMEz+VTuejLqzbdSBq54p0wurmKCld2CKorW3ckUbnpS5ovVWt/RGaRuom
sQagLlS7RZSb706j81MX/vzYEGG7MI3Is9+gC5e1HlRJVKbSeaoL9ZkS0r4B
qcSbfcO6ELx1Ec+zzal0vk58nkHb7sNzU0kVa3wU68J4qXJLRVEKnbe6MGtr
tU/XrRQix95QXahknDEIM02h81cPtGw4RKfxppDz7ALTgw/TtEVmlyfTeawH
Tr+MSuLvJJMyMVYF6EGGpvmf8R3JdD7rgbvWg7Eu0WTCfnx3PZAusbY73pxE
57UevI1fleQbkUTcyoInRpAeLCgw8DSyT6LzWw/4Le/qBSomEXbclOgBl+UV
z1PDb+k814OdaddXt2a+/d/4HNGDYy1R3C1X3tL5rg9t8lIjx7a8JU77lk18
60PituPNV4Tf0nmvD/Lf9jyRb3tDcjVZCaYP/z3XXbT39Rs6//XBp1FfScjt
DRFbwNoBfTCfKpBmqf+Gngf0wfZpzoWl896QE6zyiNAHY9nNak4NifR8oA+F
oo3H1r9IJB8nptvDUn1YqFObGOqcSM8L+hD+9EqAm34iEWL/910fLGy5r5TN
T6TnBwNQ8TBYFNmcQNjHB2kDkJaM7B+PSaDnCQMIXPfiabFnApkYJhMdbQAd
sm9+CG9JoOcLA7B2in/StCSB8CuzEs8AhlOb80SH4ul5wwA2DqzMLP0QT1ir
EfnMAJwvKVSM3Y2n5w8DyA+/uif0cDxht0+ZAYwWHIxO0oqn5xED0FLyEjOc
F08mNmdiYhvAzuXw06gtjp5PDCHfu943PSmOsMeNjCG8mB3NF3Ezjp5XDMGv
+rYBh20cSWIth5khnGROfpy3Jo6eXwxB8MuUp1PnxhFu9gAxhL0Fj4tftMfS
84wh1G9rDUtNiyXWE9Pc57khfMrKCFYLjKXnG0OQ1NGaImofSxI4WXdgCL0Z
38YO6MfS844hNIylFywQiyXseBk3BLPesQVyP2Po+ccINgrlhz4qjiGW7AFt
BNwu04WdX8TQ85ARPAhvffnyQgxhj1tzI0hodFuvZxVDz0dGkNfqraGhHkPY
5XLeCLzl9qT588fQ85IR2HYukdvwNZqwppP1CyMQshtSsS2IpucnI1BdZ9TZ
+DyaTDTPxBHHCGZsNLJ64xNNz1NGcIt/vsUPm2jyP61aBzyMlw0+2n9f/3+/
0guwkAn8/c+vTgFTTuDbP79yFxBhOPT+86vTA53i19r++VXmFb3PFl/++VWR
1u/ItMp/fjWUNxYRWfjPrywZ6ce5P/7zq0N5exeWp/7zK6ExFbvfsf/8Kip9
h/v5Z//8KuO3/K2jIf/86qE3n8Ynv39+5SzXO/3OxX9+tUVzsXmjyz+/yrn5
+sqzI/3oV14peV9+7O5Hv8qYfZWvcFM/+lX2GauTCtr96Fe/fR6fX7S6H/1K
1HNqePCSfvSrMxYpOWG8/ehXZ3uuC2pM7ke/2nDSvG7PVyb61bDOOpO5TUz0
qyPzsno3FTLRrx6/tXwjlspEv3pj6d179jkT/WrWoYEMhztM9CuF8Jkhg15M
9Ct/YwHF2ceY6FfXBU/qJe9kol9NmtZ/k8OAiX4VKP6koFmBiX7Fo8TxxEqY
iX7FcIx54DqNiX61jXue2er+PvQr2RVrLa5V96FfzWnLUvPJ7EO/eurQeFby
RR/61Syz+yEH/PvQr37eMp632a0P/ar0qPvOZus+9Cs++/PTRNf1oV8xX0mE
TlboQ7/icT6dclugD/3q5ZH7zeUjvehX25/+Cstu7kW/WnLQL9Ducy/61XLG
DdOkl73oVzyTRh0z/XvRr7o2yt8+79yLfmWrqrX5+65e9KvN33V1JaEX/Upa
3GrqHMle9KtjypEr4zl70a+ajTUtBXt60K+UuWYv0yzsQb/amjQiLR7Tg36l
HDU4/DmgB/1q0yx3JWWnHvSriFda9ge296BfHb1dpGmt3oN+NU08W11SpAf9
yn61xUjMaDf6VcAmQX6uxm70qxeM9YJK77rRrzQ5Vt+VC+1GvzLqeCc25NmN
fuUMrhq39nWjX1k5fHEd0+lGvxIRTbbTlehGv8o10b1qNaX7n1/dvn/CvKUL
/cq4r++5RFYX+pXXWFZS4eMu9Ct+Y1HJbV5d6FdXz3IeSLfuQr+SDcocmabd
hX612X/KbvnFXehXtQXq4xrjnehXwkOMnSu+dKJfMQ/v75ia1ol+VbWTQyQ7
uBP96qPGvkNH3TrRr1T17mqMb+9EvxI5Nj58VrUT/WqZ2s3Z3fyd6Fe/LHcV
6Q11oF/1t2Y+u1XagX5VuaP8d150B/qVa4mD1J+bHehXdaeELorZd6BftbQq
H1Dd0IF+FffKZ4GhTAf61eQMgWYTzg70qxlSvDymbe3oV4vXLm3ZkNWOfjV5
1+bHuqHt6Fc1yzx81c63o1+ZzfjZK7e7Hf3K90YYU0yjHf1qYanjZ96F7ehX
+856vZzxsw39arrHgRKOijb0K1VrTrvx2Db0K1fps76T/drQr2bv33ia61gb
+tXQtX2KYsZt6Fc3tskw1OTa0K8iLCbf2D2zDf3qslSq3o2OVvSrGXLuAjkf
WtGvPFLDeXjDWtGvTjxJ1jjk1Yp+JZe/6nHR3lb0K+dHO/UMSCv6lZuHhmih
aCv61ePpJxcdHGlBv1pqaK/BX9eCfqV232BvZVIL+lXvYWfXqKAW9Cs/9+uO
Qc4t6FeRSksVgy1a0K8YAoyIBOUW9KuqvEtRnXwt6FeHOM15lIea0a+k5zbe
DS5rRr/izTrELRrXjH4VxryqkuzfjH7F8+lbzckTzehX8ff00tdvaUa/0liz
4wVZ3Yx+Nao9bmPG24x+5bjWJsxnkIF+tezrGd7aUgb61fFubzOTOAb6Vdmt
BK7WAAb6lYn95pbgUwz0q15ZT3enrQz0q/KB6LOnVBjoV9PPHbl2ZwED/Wrf
kIBew68m9Cv3u2Nq62qb0K+Gxfm+1qY0oV85GQ8w/UOa0K8u7A6IdzzfhH5V
cOVUtrN1E/qVm0rmw3DdJvSrl34O2X+kmtCvqtPdX7rNaEK/+qEXfk+/shH9
ajSlQaIruBH9Ksv9U1GTdSP61fZDAwdWSDeiX60P/x1TxPyCfmWvW3Pic8IX
9KslHa4Ogme/oF9VnLh28J3eF/SrocSXvJlcX9CvOl7wzxOuaEC/2m0ay1kU
0oB+1RV94U7D/gb0q8L1nesMFRrQr8o/3XjINVyPfqX71YVvZXY9+lVc4Nxl
UTfr0a+m8PEYX9pRj36ls3dkIEOyHv1KMiDX1WKgDv3qkAi/yYbUOvQrrn1H
yx9crkO/CpkXb795ax36lbLJ5WM2S+rQr/YrV8hV9NeiX+03tRl4mlaLftUh
7D5cfa0W/Ur/TLPrkZ216FcglRi8R6YW/aqHp/x67K8a9Ku2xdluBz7XoF+d
N/7tezaoBv0q7OeZr0MHa9CvvlnFRhesqUG/+nAqvI5zdg361SPePS5P6qvR
r579EL3+6FU1+lXQFH+RcY9q9CsOJ0n5DLNq9KuGBJecpqXV6FdHVc4P2AxX
oV891VQONSqsQr864DEp6+bjKvQrv0z7lSrOVehX95c+e7t2YxX6lcmPZNVn
4lXoV9+Wr/c88bMS/SrK0vFISEEl+lWM6qNi6bBK9KuVK2/f5DtTiX7FM++R
594tlehX9T2WLlyylehXdyzUlAQnV6JfWTRddvKurUC/Gs7zGDeOq0C/Gl3n
7e58vQL9qn9L8PVxuwr0K7thvoI2UoF+9ejGhVoZoQr0q0iJKxvyhsrRr6KK
WyNzisrRr+aWBXtJRpajX4XcGr9S51OOfsU7e/0z5r5y9Cv71515u0k5+tXk
xJtN0iLl6FdFP8dLNv0uQ79S+JR3rbSyDP3Kd9T/R3R8GfqV2NdXT7v9y9Cv
sq/PbTrnWIZ+xVT/VXTUtAz9yuwpb0ScfBn6VXeZbOAWnjL0q7bYhblG/aXo
V22fPE8GFpWiX9mWnOpSjS5Fv/IMuxQt71eKfmUbfXiH+4lS9CvB6X+OiZqX
ol9Jde05x6tSin5V7y7GtUuwFP1q26+I0B/DJehXXfKDb1obStCvbhfap0hm
lqBf/fn+RiAxrAT96r0Mv0rQ5RL0K83mPRdzj5agX/0Mvn184+YS9Kucdpu9
oiol6FdSMyFVU7gE/ersQZeB55NK0K+O7A+2tm0vRr8au5pveyS/GP1K6lbc
+vTYYvQri4rbtpb3itGvbPUGp+h7FKNfFS0pd3I+UIx+1a70eMY3k2L0qyeu
J8cTVYrRr1wVFV6/FytGv5qTvfseP2cx+pWtjEbcnsYi9CvRw278i2KK0K/K
VIX9jngXoV/dKEi10bUoQr/yjCzNCZcpQr/yKtOf6j9aiH41JnHfkLO0EP0q
sdDWcGpEIfrVE8k2nUvuhehXI0oydje3FKJf1bzOrl0gU4h+lRyVkis+qRD9
yrNdas+LqgL0K7c50WmvXxegX0XWcsxRuFyAfhUfaxopY12AfuUs2G4WrF6A
fqXo+nHAm68A/SpdUNaumZmPfiVpcfpOQk4++lXo2NVDI2H56FdK1gPvEzzy
0a+cOjZdabLMR79awMcddGZNPvrVMwXO6IsC+ehXzy3lXEa/5aFfrSmVu8oo
yUO/2spUdlWIzkO/Clr5o7rzZh76VenPfM2ZDnnoV19WOaj7GuehX0Wu3+jg
viIP/UpsVNA7nzsP/WpqRMSq88xc9KuU66KKAUW56FfbPF85cMbkol+93H50
qNY/F/1qcDFHDdfpXPQrj1VWMve35aJfTdW+1HNJPRf9SuSo2bIi0Vz0Kx7H
3j/HOXLRr6ZbHWAeactBv1oR9bTnXU4O+pXf9++Kh17loF85Vsp9PR6Qg351
tOmrR5ZLDvk/92qoGQ==
       "], {{{}, {}, {
          Hue[0.67, 0.6, 0.6], 
          Directive[
           PointSize[0.008333333333333333], 
           RGBColor[0.368417, 0.506779, 0.709798], 
           AbsoluteThickness[1.6]], 
          LineBox[CompressedData["
1:eJwl1FO4EAYYBuBzsm2dTrZdW7WsZbtVy3bLtWxr2bat5WVjyzZXrfc8u3i/
//a7+f7gJu2rtAsMCAjIJEJuKEIThrCEIzwRiEgkIhOFqEQjOjGISSxiE4e4
xCM+CUhIIhKThKQkI4jkBJOClKQiNWlISzrSk4GMIX3JTBayko3s5CAnuchN
HvKSj/wUoCCF+IEfKUwRivITxShOCUpSitKUoSzlKE8FfqYilahMFapSjerU
oCa1qE0d6lKP+jSgIY1oTBN+oSnNaM6vtKAlrWhNG9rSjvZ0oCOd6EwXutKN
7vSgJ73ozW/0oS/96M8ABjKIwQzhd4YyjOGMYCSjGM0YxjKO8UxgIpOYzBSm
Mo3pzGAms5jNH8xhLvOYzwIWsojFLGEpy1jOClayitWsYS3rWM8GNrKJzWxh
K9vYzg52sovd7GEv+9jPAQ5yiMMc4U+OcozjnOAkpzjNX5zhLOc4zwUuconL
XOEq17jODW5yi9v8zT/c4S73uM8DHvKIxzzhKc94zgte8orXvOEt73jPBz7y
ic/8yxe+8o3/CBl/IKEITRjCEo7wRCAikYhMFKISjejEICaxiE0c4hKP+CQg
IYlITBKSkowgkhNMClKSitSkIS3pSE8GMgb+/6++Az6VhWw=
           "], VertexColors -> Automatic]}, {
          Hue[0.9060679774997897, 0.6, 0.6], 
          Directive[
           PointSize[0.008333333333333333], 
           RGBColor[0.880722, 0.611041, 0.142051], 
           AbsoluteThickness[1.6], 
           Dashing[{Small, Small}]], 
          LineBox[CompressedData["
1:eJwV0OeDDwQAgOHfUUYysjcno3D23uPseZvsvSkrm7IpK2RTCNkre5a9lb2V
WUb25vHhef+AN7h5l/DOQYFAILeEkIe85CM/BShIIQpThKIUozglKEkpSlOG
spSjPBWoSCiVqEwVqlKN6tSgJrWoTR3qEkY4EUQSRTQx1KM+X9CAhjSiMU1o
SjOa04KWtKI1bWhLO9rTgY504v2MLnzJV3SlG93pQU++phe96UNf+tGfAQxk
EN/wLYMZwlCGMZwRjGQUo/mO7xnDWMYxngn8wEQmMZkfmcJUpjGdGcxkFrOZ
w0/8zFzmMZ9fWMBCFvEri1nCUpaxnBWsZBWrWcNafmMd69nARjaxmS1sZRvb
2cFOfucPdrGbPexlH/s5wEEOcZgjHOUYx/mTvzjBSU5xmjOc5RznucBFLnGZ
K1zlb/7hGte5wU1ucZt/+Y873OUe9/mfBzzkEY95wlOe8ZwXvOQVr3nDWwKx
AoEgYhGbD/iQOMQlHvH5iAR8TEISkZgkfEJSkpGcFKQkFalJQ1rSkZ4MZCQT
mQkmC5+SlWxkJwef8Tk5yUVuQshDXvKRnwIUpBCFKUJRilGcEpSkFKUpQ1nK
UZ4KVCSUSlSmClWpRnVqUJNa1KYOdQkjnAgiiSKaGOrxDgpPjlQ=
           "], VertexColors -> Automatic]}}}, VertexColors -> CompressedData["
1:eJztyKENACEQAMELVEIl9IBCk6BpnRJA8xV8MitWTBmrzRQR/S7H264f4pxz
zjnnnHPOOeecc84555xzzjnnnHPOOeecc84555xzzvnv/AAzpMhP
        "]], {}, {}, {{}, {}}, {{}, {}}}, {{}, 
      GraphicsComplexBox[CompressedData["
1:eJxl2Hc81e/7B/BUpEiUlBEKmWVH1n3Zs1L4NIxK6UNFhUJFRVJUNPWhKJWG
ErJFHOtkb7LPsbemlPJzzvfuPn/8PDz04Kz3+76v63rdPdc6H9vhMn/evHm7
5n4w/v37Ncv8mkBfZcf0//u3GKlUaERf+PH390YUduS5av/kBPLpOvEpZWk3
un5ybxTP0N/H+xD3Xif1tu4JdMLb9ea5gmHULeqfodDy9/mTaIo94E5P1QRK
u/hGMD77MxqymBDuKfr7+m9osSldXjB7AqlUyx2+yv8DaYdb+JxL/Pt+P5GA
2n47kbgJxHi1p8dvpKD4Ru/n7b/vPw/YvMUiJEImkEBKRLDCQTbwWLuk8pHv
38+bDy1sDsZn3SaQ3c6q12J8C4FfjWaftfvv57PDR9+COEfzCXRrhqtpeR4H
GMm4hRzV/Hs9nEBx+C4+sH4C1T0y/8N+ZDEkW/3aVsn/9/qWwMmrZeFi8ycQ
r2nI+ulV3DBTYXS2c3wcX+9S+Lj2y7slbeNo22jR1tEiHtBPfev7tGQcXz8v
uEW6cyYlj6NSsws5E5m8ICq+oUz+/ji+Hz6wGam+IHRpHB0SfrjNbdlySCi7
4BNwbBzf33LI5ggf3b1rHLGP5/XQXVbAr5TOtW9gHN8vP6h1LdY4LzOOnuR3
+Di844eIXFfN6mXj+P5XwtNlloox38eQEXMBBOC+ZrT4RPsYXg8B2HRJbl4R
ZQz1uDAuYBX0tEwniD4fw+uzGqZDExewXRtDgZpaah/er4Z4rk3dR0+M4fUS
BE3xr5wH7cbQWq7dVAMBIbCqt9Eb1BzD6ycEpyOk9H8Jj6ECxuUdFQZl2vf6
mD+jeD1FgH/lksqG7lG0L+nupHqhCFjr3xSIpYzi9V0DMsclI2Yfj6LZQMaK
iMLvzMYVPy6O4vUWBSpd72yoyyiKsWtYLXtcDPoPiD3JNB7F6y8Ok8lrXC5K
jSKx237/bD8gDq/rrl+dWDiK90McBIp3t/7qGUEevy+LX+dZC9ZWXIIJlBG8
P2thu3HJ6tmHIyjv0L3hsqy1kLwj9/l0wAjer3XAplgRed9hBPHUPEtd5LIO
BpdXvRnaPIL3bx3Er5JIpguMIMfNGQFGvBIgzau958qXYbyfEjDjr3qiq3oY
vY4rmbsiCVh2Z6KkP2EY768kvOVPUXwUMoyY23VIEkrkrnrxHhjG+y0J5qUP
TDbpDSOrk33tP/mk4LLrNXt+wWG8/1Jw9cvng6++DKH7nV/jNXKl4NefwwLz
qoZwPawHq2U+8nzPh9CI6cK5LVsPWfO0DtEuDOH6WA+PpCghnvZDSDt5xdy3
NBif7dhWojaE60UaVk0eDOhcOoTChCTmbkka3l3trXvXP4jrRwYy53dyH3g/
iFqDGH+RgcV/FLvqIgdxPcnApYZFn5YeH0RyzHKVhcvvU8dWmg3i+pKFvR4W
QaNig4ixe0/yZWE4N3LvrakBXG9yoJQspcRdPYA+vN+3gXZEDgxPb4jbFT+A
608OcmotDpz2H0CCssen1qySh/ub3dd62Q7gepQHywSLMCP5AcR49h6KPIwE
BttOsg3g+lQAWx49Vd+WfpT563pYpLsCdIm21nUk9uN6VQDvrdcb1wX3I04X
RgVuAOdktTYz+35cvxvAk/Nr0HblfsTczqINMNZXfExvUT+u543gtjdEj6+j
Dz3TyB3acmwjUJevCC9P6cP1vRGySxxmPS73oe8PK96GCinCd1PKxt+Ofbje
FcEpuCXPR7UPmSxp9y8tVoT8T7d2dHP24fpXgktOK65qdvai8qxvEoGaSvAm
qZA98G0v7gcl4NzjaJN3uRd5MRtACTrLBTkmHHtxfyhBUgBn4krVXsTc3h4l
+H2Kt1WVsxf3izJ0WfestuzoQZRmbhvHzcqgcF75p0NKD+4fZfDyuc1zJKQH
zRXD3BIqwzxE7T/l0IP7SRlGY38vD1TuQcv1RdZE9SrDhe5NYtc5enB/qcD2
RIWb99voKJtx+VoqUECNGE9MouN+UwFTiE4uCaYj55fyA03hKmCR9nxX3x46
7j8VWPBz3X5uJTpavFd1rkVUQCk/0EyXnY77URWqV3aH+bXSELO8tVWBO3jZ
E8obGu5PVeh/JbxAKJiGGNWWEqEKZjtShC7soeF+VYUf3eccphVpiM3f4ox1
vyo4Gp7TushOw/2rBsLBKVISbd3ohfKO7nFtNTA1ErjanNSN+1kN9pxMbYm7
1I2s+3cbX7uhBr46wycuOXTj/laDI/YXk4JUutGPqP1zd6gGMT4FI9Gc3bjf
1eHz/v7vD3O7EGO1ynTUQc8vwcv4cBfuf3WYMWpaKLOqC5kx2vumOtgH2DtZ
FnXieaAO3a6myiknOtFkpu9HjkF14IlMkdwr1onnwyZQ5RUstq3sQJHu5/We
6m6CNZd4bt4504HnxSY48PwNp6RcB0LrLj82vLUJVlmJxM//2I7nxyZYcsdw
UPVyO5rbHE764CY4Vla3JVujHc8TDfB4cXLnvYE2FB7G+AQNWBvjEFAT2Ybn
iwZY3mEXczFrQxoQWyd6WwN0vyWH7JpuxfNGAxSf3+J8/bIVMW9nSANGVC+M
HXRoxfNHE2xK6vwDeVrRpReJ9+2RJmzvGvm1qOAjnkeawJmQ8nLK6yPa6JTO
9vO2Jjxff7DARvojnk+acOCpu4NoWwti7Na9YU0oPi0fvDu8Bc+rzWCZYWO2
yKgFBZQWl2+CzfCWopMuO92M59dmMOMZplESm9H6s5VKjXc2Q4wdtaPhYDOe
Z5vh07X57/cLNyPGo14jm4EqJB9xpK4JzzctOGzEof31ShNibre+FpgK0y//
1m/C804LqmSN9K78bERzzbM36a4WRBkpiv33thHPPy04XfJ7YqN7Iyreyhgo
WtCX9NvLSroRz0NtqDp65sQXWgNyX8CoGG1w1Kl+KfWgAc9HbVg+m1bUu6sB
8TMHoDY8eWVtprKyAc9LbdhhWZa7rK4evTvKeANtOO7t+TogvB7PTx24vePt
w/Nb6tFB5g3pwOVwPslV3PV4nupAyKHzJYbldYibucA6sNQzjJczrA7PVx2o
5Yzf52JZh1JDGRuuAxeOvpx24K7D81YXOk+P8U5W1iJ7ZgHqgnnGrzKxiFo8
f3Wh68NdNLajFjFv7z9dEJLRC9ktUIvnsS4cachJd2mtQQnPGQ2qC4dfSLcu
j63B81kPIo7Fznc+WINsmANDD1y2PT5tK1eD57Ue3J12cm6mVaNffIwBpgeN
iSvW7Dhejee3HnTGXZ0WnleNHjPGxYQeHD4bQdW4UYXnOYLbhtldzySqEGN6
7DZG4BXffdQ9oxLPdwRsugGTl60q0WfFXZY/ohCstWvO+EmvwPMewYaOqQnK
6QrE3P5JBI3+HkW0FRV4/gOEOlfe2JlYjh4xPk4C4PMZ8JCyKMd5AGBTXXrf
aqAMfWO0zxYAg083/qkKLsP5AGA95vs6QaoMmTPiwBcgllfSva/kA84LAFdz
S62zbh/QA+YGALi9u3Xm+NIPOD8Avhbn+lNSqOiTeqHtziqAnGsXL3jupuI8
AeDYHJZzno2KjJgFM/e4iYrd2MtSnC/6YPN+fFemXSlipMU3CX1Y3zcRRmMr
xXmjDw9sn191fVOCmMu9VR/kLt/PsHIqwfmjDwY3602u8ZQg5vjw04eYW/ou
svnFOI/0YaCjWkHcqxgxb/eJPpQ5CsYfly7G+aQPPipHcgQ7itCgDWNi6MPq
XA5JodtFOK/04Wt52O/jVkVIhzlA9CEsPfnGGo4inF8GsF3QUUCsoBBFzE2/
GkkDEGyKfOPtX4jzzAAKH2h7rNEuRL10xsAzgNQwKevVPyk43wzgeLAH/8Fs
CtJklNtpA8jzvbLpzxkKzjsD2LV3Y1CPHgUxx+dTA3jprJLGu4CC888AnKf+
eARSCxCzHGoM4KEbp7Z6eAHOw7nrW7suTGpnAVJlBooBiLnHlmwTL8D5aAj3
FA7mJw3nI0Y3v5IyhAa6xWHj9Hycl4YQdPfY1SVB+ahtHiMADSE3623bjHU+
zk9D6BoqmVotno8UmU8whPOZoc3p3e9xnhqCsbb/7gtB71EQ84INQaUlpOuK
zHucr3PPH7zkQK3OQ82M+KgxhNHu6C1qfnk4bw2hjCcptUgyD8kzN9QQstVk
fI/X5eL8NYKpPZ+cNgbmonPMAjMC/2MTy7+p5uI8NgKrf8VlcgbeoXpRRgUY
wTHdrat9HrzD+WwELr5OO8Xs3iHm7Z81gkdZn2++5HmH89oIwhVvNS0ry0Gn
66PnIsgIXINvSpmE5OD8NoLRGPGzRiY5iDluao3AnKZNYVuUg/PcCHZJNlK9
P2T/Lz5njODcYX/329eycb4bw5nhkLs7bbLRKWfpuW9jaLpSGpUqlI3z3hii
jw42PuzJQmU6jAlmDGIvH1zhS8zC+W8MR4xCl834ZSHRVYwdMIYrgivz7Eyz
8HnAGG7ZmVJXCGQhT0Z5PDOG9bzcq+T7M/H5YO71OWKvIjIyUclcusXWGcPM
bb8FWqGZ+LxgDM2CP9TXOGUiIeZ/342hla02Q0k1E58fTIDf8KrE0cWZiHl8
kDGB8cjsDGp3Bj5PmIBI+u9xlJWB5sJkrqNN4P1mZb/ymxn4fGECQUZUHRf3
DLRSnTHxTMCQN1tukXkGPm+YwJ/DbuiFVAZirEbCcxNYwr7/jP6CDHz+MAHP
ctPpYlo6YrZPvQnwXPq+bENBOj6PmMAj3tf/uD9KR3ObM5fYJlAi8DrWPzAd
n09Mwane1/6fg+mIGTeypmDfdWfPJ5N0fF4xBdOUAqqZXDrKYiyHjSm0mpdy
7ORJx+cXU7jlvTBV4EsaWsoMEFPwi+1/FdiShs8zpvD46H/xd/LS0P65NL/0
whRWvPC3sniahs83pjDf9qFX9NU0lLaIcQWmYHZlwfqL3mn4vGMKmW4icbMO
aYg5XmZN4ayWwr7FJmn4/GMGqTkHZR8opiEHZkCbwfsZbp4MwTR8HjKDy21T
/9gsTEPMuLU1Axund74eE6n4fGQGp+1DONjbUhGzXM6Zgd6abfkrSlPxeckM
nK7rvol8m4oY6bT/pRk8XSLmf+1hKj4/mUFtfpny12upaK555o44ZvDZ3HlB
0ZlUfJ4yA5WHV75wHE5F/9Mqc9BVsBB9sevv7//fr06uRolnpll+9UQp4wX9
M8uvajUXgvgoy6+e7DLLFetj+RX3dlHPig6WXwXqBjzha2L5Vc9+rVetlSy/
4ndeuIW/mOVX1AfLE5JyWH6lLLx6W0Iyy69sZp5eWvSM5VexHFY+5dEsv7qf
mqD0O5zlV0utmihxQSy/qjF+mVVwiuVXW1Ttfzi5sfxKqjY2J8Ce5Veytfuj
Jbaw/EqL1je1VY/lV+qadG82RZZfOe7jCNUSmyB+VXafr2+aZ4L41fh3AUf0
h+VXkm10ypIxll/NDO/jc2hj+VWL7lSO6geWX4lmTd66mc7yq347wX1+j1l+
NcutJjgUzvKroFwjvp4zLL/K+27zyvVfll89/7PN8syOceJXivdOW4rojhO/
SnYMmbKSHid+Fb2e4yoP3zjxK832+ZbOP1l+Vcut6Wfew/KrAzcybYvLWX41
nV7M2/yW5VdlKSkfz0Wz/OpgR2JXfuAY8asbs37O0W5jxK/oo/lveK3HiF/V
HrEVWLdpjPhVAGdHb43wGPErdmNzN1G2MZZfyQt+4+pn+dVTHf++qDKWX7GH
/omtSGT5VXx4eUTczVHiV5b3/pERPTVK/EotvL0Zdo8Sv8o/YM7LrTNK/GrS
Isbggugo8atrhye7Hs0bJX61Os7e/hid5Vexs2cVRwpHiF8JXUnuFHg6Qvyq
Iu3J+JfgEeJXd5Q29wUdGiF+FXnPxIxqMkL8KjHj4QPK+hHiV9o9ZYe9OUaI
X42e2KDe1TdM/Erm/M8LC4uHiV/9axrU3vd4mPjVN/7PTRcDh4lfZdQfWdiz
b5j41YlhxR9saJj41SkrD9MekWHiV/EKCpcv/xwifuX655z1l+Yh4lduDt6b
pNKGWH5FPVktdnOI+JUIl2Zyr8cQ8au6vDbvk5ZDxK+uw+m39dJDxK/6oybZ
2RYOEb9SEhVkn+0aJH71yKLKvDpnkPiVc9rYUa/IQeJXiR2xi8Y8B4lfNeX9
fqu7dZD4FdVrxdJ/ZQeJX1kfUnp9eOEg8SudUMWNFl0DxK+s+Giyi7IHiF9t
S1DXenx7gPhVzOYvP8SODRC/ehQfNxNgPkD8Kiuht7FAYoD41bcVuvzDv/uJ
Xz15tc90urmf+FVYpe+fyeR+4ldNYarUurB+4ldvQ4xVH7r0E79qX5tQtQf1
E79yzH8kvVCwn/hV5tBR6oPPfcSvaNZyWrIVfcSvPtnv4Xj+tI/4lfkr+XTh
c33Er+w419cE7+ojfsV/hdIwoNxH/GoqoNHQkKuP+JXY4vh7//X2Er+yoV0y
Hc3tJX6V+/xcgU5kL/ErQVUT36vHe4lfSV806Wg37yV+dcr72X5FiV7iV9zC
4t7BMz3Erxz6jM53N/YQvxouax/Vf9ND/Co0XVM44XIP8Sv3zka3Nc49xK/S
p5dqRGn3EL+iq27rWreyh/iVwJpDeZnjdOJXZlG3lBypdOJXn5aIR/DF0Ylf
Dfzes6H5DJ341Y0QN/M3dnTiVzs+7V4brUgnfmVXpvcpejGd+JWa9M+vKT00
4leVe4Jdabk04ld1ko9CZO7RiF+1CXpfv+JJI34Vei45nX0LjfjVRBKbbIw0
jfhVdFXSQtv5NOJXMf7zXGU6uolf0SoST4hkdhO/omgAKN/qJn61gPufz/96
dBO/ut3gE19g3k38SqSlywdJdRO/6rC9502f1038in5VQ3tnVhfxK5eNsy0a
J7qIX330Lk92le0ifrXCqytthNZJ/CppuriBEtVJ/OpdlPzPCZtO4ldOp25z
n1zaSfwq+8XnLpvSDuJXN75L6l6/0EH8KvamQL+UTgfxq8txWaEiU+3Er7r2
sjd5pbQTv7Jnq/TY4NFO/OpLWdkvC7l24lfBdQmiVf1txK8KHmu4ZD5uI34l
5+RtwbW/jfjV1YBOC6poG/Grc8GWHZPtrcSvfhg7OF6KbiV+1Zb7TCR0Tyvx
q9nv391/C7YSv0p8bfGQ9vEj8Su1WLevGlEfiV/xiSlEs9l/JH51IiCyEIl8
JH61vUzuvy8dLcSvkvfdNRJ92EL8qnhfe2e+cwvxq/UNQt7tUi3Er1zZuXg8
h5qJX53miHsc+LqZ+JXnog8rl3k2E7/ysFLRX63RTPzKI911fuxME/GretOo
TU8oTcSvSqa4s2SuNBG/2kDZvHuDdRPxq12faDUpq5qIX0kaS5ZkdTUSv+Iq
4KoxeN5I/Eog/W7g1hONxK/KTsx4dmg1Er8KmDeuPrmwkfjV4n12+0KqG4hf
XUk7e+lxVAPxK36vREXjQw3Erzx9XPKOqjQQvxL7ZHtOaLae+FWGsce7rRX1
xK+iuHflL46qJ34VohPSaOlaT/wq+FiRyUqNeuJXL1/SnA5x1BO/iuzZfAQ1
1RG/+r5f8NnD+DriV44wrBTqU0f86sdMoOCMWR3xq8H/Yry+C9URv/J9csTU
b6yW+BUMB4VczK8lfrUxTH3t6tu1xK/UesLmq7nWEr+690WGt0WnlvgVNf3H
6oXLa4lfHdis2ZExUEP8ylEiW+9Lbg3xK/iz1y79dg3xqykVIWO2ozXEr7Zw
n9/YYFhD/GosQEFFUaSG+NWn4YxWyeFq4leFOsLtv+5XE79aVXjkPd26mviV
j0yDbAt7NfGrmTU7rrXmVBG/euaXuHfQs4r41X4uaYF58lXEr6a0F0iJ91YS
vyp9MX/WJKaS+JWhd9dpr92VxK9C9/IlPFlZSfzqyl7lVx/rKohfGQTGh/Ld
qCB+JdoQoWdpXUH8asuRhKxg3griV+Mczf3va8uJX8Wcbzj/41Y58SuD8CH5
jTvLiV89PSIdule4nPjVszVNumHdZcSv1jh6Db2JLyN+1fN+uVyFexnxq/a6
mAud6mXErzZ6Ljre9+cD8St2a5V9XdQPxK8kLIpvlt36QPzqvmG54tO9H4hf
5T0ZP+Cu8IH4lU/foz1rf1KJX+n+UtV+T6USv+o4nittfI9K/MpvX7VcsiuV
+BVlzV13Ni0q8SuZSD53NW4q8at3pwLbzLpKiV81Cew/qPu2lPjVln3KSbyX
S4lfDY3PdylwLCV+xWNDl9iqVkr86kvSn3tpXKXErzgPf1H+3lNC/OpC0LH4
pbklxK/qdq/eMX23hPhV0KB9ePqJEuJXZ39uyjTYUkL8ys3VWDJatoT4Vf6b
cxtyOUqIX2lL35CL7y0mfiVq1BpoU1hM/OpVTglnYVwx8au+/bE5nwOLWX4V
ueV+94Fi4ldKExovQo2LiV/poi7auHQx8Svue7bGXFzFxK/u8RTUdYwXEb+i
m4YFH6wvIn61xUpX9UFmEfErEz+f28ExRcSvOsKQlXBwEfGr/pyCT/ZHi4hf
ceUJiBrbFhG/UgyqcWvQKSJ+FRx34+ii9UXEr05MW75rW1ZE/IqiovZn689C
4ld686w6nfoKiV/VBwauXFxbSPzK5W5imGVuIfEr9a4ia8mXhcSvtJa7Hr8x
F6F//WqPeviniOBC4lfVd1a2insXEr8SiXbfgA4UEr/qPSU0MrSjkPhV2g6/
FWKGhcSvFHXz49tVC4lf9aamO4tLFRK/2iPzvWxAoJD41ezNQlulxYXEr9LW
+fpP/aIQv/KVO12iNUEhfkXbUf1+ik4hfrXhETuXQjOF+JW3SMGzhnIK8auk
Dwc8JvMpxK+kE/jlfdMpxK8y+7iDvV9RiF/FPSk5Xx9HQf8Hg96iFw==
       "], {{{}, {}, {
          Hue[0.67, 0.6, 0.6], 
          Directive[
           PointSize[0.008333333333333333], 
           RGBColor[0.368417, 0.506779, 0.709798], 
           AbsoluteThickness[1.6]], 
          LineBox[CompressedData["
1:eJwl1FO4EAYYBuBzsm2dTrZdW7WsZbtVy3bLtWxr2bat5WVjyzZXrfc8u3i/
//a7+f7gJu2rtAsMCAjIJEJuKEIThrCEIzwRiEgkIhOFqEQjOjGISSxiE4e4
xCM+CUhIIhKThKQkI4jkBJOClKQiNWlISzrSk4GMIX3JTBayko3s5CAnuchN
HvKSj/wUoCCF+IEfKUwRivITxShOCUpSitKUoSzlKE8FfqYilahMFapSjerU
oCa1qE0d6lKP+jSgIY1oTBN+oSnNaM6vtKAlrWhNG9rSjvZ0oCOd6EwXutKN
7vSgJ73ozW/0oS/96M8ABjKIwQzhd4YyjOGMYCSjGM0YxjKO8UxgIpOYzBSm
Mo3pzGAms5jNH8xhLvOYzwIWsojFLGEpy1jOClayitWsYS3rWM8GNrKJzWxh
K9vYzg52sovd7GEv+9jPAQ5yiMMc4U+OcozjnOAkpzjNX5zhLOc4zwUuconL
XOEq17jODW5yi9v8zT/c4S73uM8DHvKIxzzhKc94zgte8orXvOEt73jPBz7y
ic/8yxe+8o3/CBl/IKEITRjCEo7wRCAikYhMFKISjejEICaxiE0c4hKP+CQg
IYlITBKSkowgkhNMClKSitSkIS3pSE8GMgb+/6++Az6VhWw=
           "], VertexColors -> Automatic]}, {
          Hue[0.9060679774997897, 0.6, 0.6], 
          Directive[
           PointSize[0.008333333333333333], 
           RGBColor[0.880722, 0.611041, 0.142051], 
           AbsoluteThickness[1.6], 
           Dashing[{Small, Small}]], 
          LineBox[CompressedData["
1:eJwV0OeDDwQAgOHfUUYysjcno3D23uPseZvsvSkrm7IpK2RTCNkre5a9lb2V
WUb25vHhef+AN7h5l/DOQYFAILeEkIe85CM/BShIIQpThKIUozglKEkpSlOG
spSjPBWoSCiVqEwVqlKN6tSgJrWoTR3qEkY4EUQSRTQx1KM+X9CAhjSiMU1o
SjOa04KWtKI1bWhLO9rTgY504v2MLnzJV3SlG93pQU++phe96UNf+tGfAQxk
EN/wLYMZwlCGMZwRjGQUo/mO7xnDWMYxngn8wEQmMZkfmcJUpjGdGcxkFrOZ
w0/8zFzmMZ9fWMBCFvEri1nCUpaxnBWsZBWrWcNafmMd69nARjaxmS1sZRvb
2cFOfucPdrGbPexlH/s5wEEOcZgjHOUYx/mTvzjBSU5xmjOc5RznucBFLnGZ
K1zlb/7hGte5wU1ucZt/+Y873OUe9/mfBzzkEY95wlOe8ZwXvOQVr3nDWwKx
AoEgYhGbD/iQOMQlHvH5iAR8TEISkZgkfEJSkpGcFKQkFalJQ1rSkZ4MZCQT
mQkmC5+SlWxkJwef8Tk5yUVuQshDXvKRnwIUpBCFKUJRilGcEpSkFKUpQ1nK
UZ4KVCSUSlSmClWpRnVqUJNa1KYOdQkjnAgiiSKaGOrxDgpPjlQ=
           "], VertexColors -> Automatic]}}}, VertexColors -> CompressedData["
1:eJztyKENwCAARcGfMgmTdAcUmgTN6ozQGlwXaHJPPHF1rDavJP1dyWnf+Yxz
zjnnnHPOOeecc84555xzzjnnnHPOOeecc84555xzzjnnf/QHZi7ITw==
        "]], {{}, {}}, {{{{{
           GraphicsGroupBox[{{
              Directive[
               AbsoluteThickness[4], 
               GrayLevel[1], 
               Opacity[
                NCache[
                 Rational[2, 3], 0.6666666666666666]]], 
              CapForm["Butt"], 
              JoinForm["Round"], 
              BSplineCurveBox[{
                Offset[{0, 0}, {51.041666666666664`, 0.07947785367484612}], 
                Offset[{0, 0}, {51.041666666666664`, 0.07947785367484612}], 
                Offset[{0., 0.}, {51.541666666666664`, 0.07947785367484612}], 
                Offset[{0., 0.}, {51.541666666666664`, 0.07947785367484612}], 
                Offset[{0., 0.}, {52.041666666666664`, 0.07947785367484612}], 
                Offset[{0, 0}, {53.268419913895094`, 0.06595612096422408}], 
                
                Offset[{5., 1.1102230246251565`*^-15}, {53.268419913895094`, 
                 0.06595612096422408}], 
                
                Offset[{10., 2.220446049250313*^-15}, {53.268419913895094`, 
                 0.06595612096422408}], 
                
                Offset[{10., 2.220446049250313*^-15}, {53.268419913895094`, 
                 0.06595612096422408}]}]}, {
              RGBColor[
              0.6666666666666666, 0.6666666666666666, 0.6666666666666666], 
              BSplineCurveBox[{
                Offset[{0, 0}, {51.041666666666664`, 0.07947785367484612}], 
                Offset[{0, 0}, {51.041666666666664`, 0.07947785367484612}], 
                Offset[{0., 0.}, {51.541666666666664`, 0.07947785367484612}], 
                Offset[{0., 0.}, {51.541666666666664`, 0.07947785367484612}], 
                Offset[{0., 0.}, {52.041666666666664`, 0.07947785367484612}], 
                Offset[{0, 0}, {53.268419913895094`, 0.06595612096422408}], 
                
                Offset[{5., 1.1102230246251565`*^-15}, {53.268419913895094`, 
                 0.06595612096422408}], 
                
                Offset[{10., 2.220446049250313*^-15}, {53.268419913895094`, 
                 0.06595612096422408}], 
                
                Offset[{10., 2.220446049250313*^-15}, {53.268419913895094`, 
                 0.06595612096422408}]}]}, {
              Directive[
               GrayLevel[1], 
               Opacity[
                NCache[
                 Rational[2, 3], 0.6666666666666666]]], 
              EdgeForm[], 
              PolygonBox[{
                
                Offset[{36., 6.500000000000008}, {53.268419913895094`, 
                 0.06595612096422408}], 
                
                Offset[{36., -6.499999999999992}, {53.268419913895094`, 
                 0.06595612096422408}], 
                
                Offset[{10.000000000000002`, -6.499999999999997}, {
                 53.268419913895094`, 0.06595612096422408}], 
                
                Offset[{9.999999999999998, 6.500000000000003}, {
                 53.268419913895094`, 0.06595612096422408}]}]}, {
              EdgeForm[], 
              RGBColor[
              0.6666666666666666, 0.6666666666666666, 
               0.6666666666666666]}, {}, 
             InsetBox[
              FormBox[
               StyleBox[
                RotationBox["\"Test\"", BoxRotation -> 0.], {}, StripOnInput -> 
                False], TraditionalForm], 
              
              Offset[{23., 5.10702591327572*^-15}, {53.268419913895094`, 
               0.06595612096422408}], {0, 0}]}], 
           GraphicsGroupBox[{{
              Directive[
               AbsoluteThickness[4], 
               GrayLevel[1], 
               Opacity[
                NCache[
                 Rational[2, 3], 0.6666666666666666]]], 
              CapForm["Butt"], 
              JoinForm["Round"], 
              BSplineCurveBox[{
                Offset[{0, 0}, {51.041666666666664`, 0.14559406078231968`}], 
                Offset[{0, 0}, {51.041666666666664`, 0.14559406078231968`}], 
                Offset[{0., 0.}, {51.541666666666664`, 0.14559406078231968`}], 
                Offset[{0., 0.}, {51.541666666666664`, 0.14559406078231968`}], 
                Offset[{0., 0.}, {52.041666666666664`, 0.14559406078231968`}], 
                Offset[{0, 0}, {53.268419913895094`, 0.15919925561602538`}], 
                
                Offset[{5., 1.1102230246251565`*^-15}, {53.268419913895094`, 
                 0.15919925561602538`}], 
                
                Offset[{10., 2.220446049250313*^-15}, {53.268419913895094`, 
                 0.15919925561602538`}], 
                
                Offset[{10., 2.220446049250313*^-15}, {53.268419913895094`, 
                 0.15919925561602538`}]}]}, {
              RGBColor[
              0.6666666666666666, 0.6666666666666666, 0.6666666666666666], 
              BSplineCurveBox[{
                Offset[{0, 0}, {51.041666666666664`, 0.14559406078231968`}], 
                Offset[{0, 0}, {51.041666666666664`, 0.14559406078231968`}], 
                Offset[{0., 0.}, {51.541666666666664`, 0.14559406078231968`}], 
                Offset[{0., 0.}, {51.541666666666664`, 0.14559406078231968`}], 
                Offset[{0., 0.}, {52.041666666666664`, 0.14559406078231968`}], 
                Offset[{0, 0}, {53.268419913895094`, 0.15919925561602538`}], 
                
                Offset[{5., 1.1102230246251565`*^-15}, {53.268419913895094`, 
                 0.15919925561602538`}], 
                
                Offset[{10., 2.220446049250313*^-15}, {53.268419913895094`, 
                 0.15919925561602538`}], 
                
                Offset[{10., 2.220446049250313*^-15}, {53.268419913895094`, 
                 0.15919925561602538`}]}]}, {
              Directive[
               GrayLevel[1], 
               Opacity[
                NCache[
                 Rational[2, 3], 0.6666666666666666]]], 
              EdgeForm[], 
              PolygonBox[{
                
                Offset[{42., 6.500000000000009}, {53.268419913895094`, 
                 0.15919925561602538`}], 
                
                Offset[{42., -6.499999999999991}, {53.268419913895094`, 
                 0.15919925561602538`}], 
                
                Offset[{10.000000000000002`, -6.499999999999998}, {
                 53.268419913895094`, 0.15919925561602538`}], 
                
                Offset[{10., 6.500000000000002}, {53.268419913895094`, 
                 0.15919925561602538`}]}]}, {
              EdgeForm[], 
              RGBColor[
              0.6666666666666666, 0.6666666666666666, 
               0.6666666666666666]}, {}, 
             InsetBox[
              FormBox[
               StyleBox[
                RotationBox["\"Test1\"", BoxRotation -> 0.], {}, StripOnInput -> 
                False], TraditionalForm], 
              
              Offset[{26., 5.773159728050814*^-15}, {53.268419913895094`, 
               0.15919925561602538`}], {0, 
              0}]}]}}}}, {{{}}}}, {{}, {}}, {{}, {}}}}, {
    PlotLabel -> FormBox["\"FFT MTF\"", TraditionalForm], Frame -> True, 
     FrameLabel -> {
       FormBox["\"Spatial Frequency in cycles per mm\"", TraditionalForm], 
       FormBox["\"Modulus of the OTF\"", TraditionalForm]}, ImageSize -> 550, 
     FrameTicks -> {{True, False}, {True, False}}, DisplayFunction -> 
     Identity, PlotRangePadding -> {{
        Scaled[0.02], 
        Scaled[0.02]}, {
        Scaled[0.02], 
        Scaled[0.05]}}, AxesOrigin -> {0, 0}, 
     PlotRange -> {{0, 50.}, {0, 0.9999999999999999}}, PlotRangeClipping -> 
     True, ImagePadding -> All, DisplayFunction -> Identity, AspectRatio -> 
     NCache[GoldenRatio^(-1), 0.6180339887498948], Axes -> {True, True}, 
     AxesLabel -> {None, None}, AxesOrigin -> {0, 0}, DisplayFunction :> 
     Identity, Frame -> {{False, False}, {False, False}}, 
     FrameLabel -> {{None, None}, {None, None}}, 
     FrameTicks -> {{Automatic, Automatic}, {Automatic, Automatic}}, 
     GridLines -> {None, None}, GridLinesStyle -> Directive[
       GrayLevel[0.5, 0.4]], 
     Method -> {"CoordinatesToolOptions" -> {"DisplayFunction" -> ({
           (Identity[#]& )[
            Part[#, 1]], 
           (Identity[#]& )[
            Part[#, 2]]}& ), "CopiedValueFunction" -> ({
           (Identity[#]& )[
            Part[#, 1]], 
           (Identity[#]& )[
            Part[#, 2]]}& )}}, 
     PlotRange -> {{0, 50.}, {0, 0.9999999999999999}}, PlotRangeClipping -> 
     True, PlotRangePadding -> {{
        Scaled[0.02], 
        Scaled[0.02]}, {
        Scaled[0.02], 
        Scaled[0.05]}}, Ticks -> {Automatic, Automatic}}],FormBox[
    FormBox[
     TemplateBox[{
      "\"0\[Degree] tangential\"", "\"0\[Degree] sagittal\"", 
       "\"14\[Degree] tangential\"", "\"14\[Degree] sagittal\"", 
       "\"20\[Degree] tangential\"", "\"20\[Degree] sagittal\""}, 
      "LineLegend", DisplayFunction -> (FormBox[
        StyleBox[
         StyleBox[
          PaneBox[
           TagBox[
            GridBox[{{
               TagBox[
                GridBox[{{
                   GraphicsBox[{{
                    Directive[
                    EdgeForm[
                    Directive[
                    Opacity[0.3], 
                    GrayLevel[0]]], 
                    PointSize[0.5], 
                    AbsoluteThickness[1.6], 
                    RGBColor[0, 0, 1]], {
                    LineBox[{{0, 10}, {40, 10}}]}}, {
                    Directive[
                    EdgeForm[
                    Directive[
                    Opacity[0.3], 
                    GrayLevel[0]]], 
                    PointSize[0.5], 
                    AbsoluteThickness[1.6], 
                    RGBColor[0, 0, 1]], {}}}, AspectRatio -> Full, 
                    ImageSize -> {40, 10}, PlotRangePadding -> None, 
                    ImagePadding -> Automatic, 
                    BaselinePosition -> (Scaled[0.1] -> Baseline)], #}, {
                   GraphicsBox[{{
                    Directive[
                    EdgeForm[
                    Directive[
                    Opacity[0.3], 
                    GrayLevel[0]]], 
                    PointSize[0.5], 
                    AbsoluteThickness[1.6], 
                    RGBColor[0, 0, 1], 
                    Dashing[{Small, Small}]], {
                    LineBox[{{0, 10}, {40, 10}}]}}, {
                    Directive[
                    EdgeForm[
                    Directive[
                    Opacity[0.3], 
                    GrayLevel[0]]], 
                    PointSize[0.5], 
                    AbsoluteThickness[1.6], 
                    RGBColor[0, 0, 1], 
                    Dashing[{Small, Small}]], {}}}, AspectRatio -> Full, 
                    ImageSize -> {40, 10}, PlotRangePadding -> None, 
                    ImagePadding -> Automatic, 
                    BaselinePosition -> (Scaled[0.1] -> Baseline)], #2}, {
                   GraphicsBox[{{
                    Directive[
                    EdgeForm[
                    Directive[
                    Opacity[0.3], 
                    GrayLevel[0]]], 
                    PointSize[0.5], 
                    AbsoluteThickness[1.6], 
                    RGBColor[0, 1, 0]], {
                    LineBox[{{0, 10}, {40, 10}}]}}, {
                    Directive[
                    EdgeForm[
                    Directive[
                    Opacity[0.3], 
                    GrayLevel[0]]], 
                    PointSize[0.5], 
                    AbsoluteThickness[1.6], 
                    RGBColor[0, 1, 0]], {}}}, AspectRatio -> Full, 
                    ImageSize -> {40, 10}, PlotRangePadding -> None, 
                    ImagePadding -> Automatic, 
                    BaselinePosition -> (Scaled[0.1] -> Baseline)], #3}, {
                   GraphicsBox[{{
                    Directive[
                    EdgeForm[
                    Directive[
                    Opacity[0.3], 
                    GrayLevel[0]]], 
                    PointSize[0.5], 
                    AbsoluteThickness[1.6], 
                    RGBColor[0, 1, 0], 
                    Dashing[{Small, Small}]], {
                    LineBox[{{0, 10}, {40, 10}}]}}, {
                    Directive[
                    EdgeForm[
                    Directive[
                    Opacity[0.3], 
                    GrayLevel[0]]], 
                    PointSize[0.5], 
                    AbsoluteThickness[1.6], 
                    RGBColor[0, 1, 0], 
                    Dashing[{Small, Small}]], {}}}, AspectRatio -> Full, 
                    ImageSize -> {40, 10}, PlotRangePadding -> None, 
                    ImagePadding -> Automatic, 
                    BaselinePosition -> (Scaled[0.1] -> Baseline)], #4}, {
                   GraphicsBox[{{
                    Directive[
                    EdgeForm[
                    Directive[
                    Opacity[0.3], 
                    GrayLevel[0]]], 
                    PointSize[0.5], 
                    AbsoluteThickness[1.6], 
                    RGBColor[1, 0, 0]], {
                    LineBox[{{0, 10}, {40, 10}}]}}, {
                    Directive[
                    EdgeForm[
                    Directive[
                    Opacity[0.3], 
                    GrayLevel[0]]], 
                    PointSize[0.5], 
                    AbsoluteThickness[1.6], 
                    RGBColor[1, 0, 0]], {}}}, AspectRatio -> Full, 
                    ImageSize -> {40, 10}, PlotRangePadding -> None, 
                    ImagePadding -> Automatic, 
                    BaselinePosition -> (Scaled[0.1] -> Baseline)], #5}, {
                   GraphicsBox[{{
                    Directive[
                    EdgeForm[
                    Directive[
                    Opacity[0.3], 
                    GrayLevel[0]]], 
                    PointSize[0.5], 
                    AbsoluteThickness[1.6], 
                    RGBColor[1, 0, 0], 
                    Dashing[{Small, Small}]], {
                    LineBox[{{0, 10}, {40, 10}}]}}, {
                    Directive[
                    EdgeForm[
                    Directive[
                    Opacity[0.3], 
                    GrayLevel[0]]], 
                    PointSize[0.5], 
                    AbsoluteThickness[1.6], 
                    RGBColor[1, 0, 0], 
                    Dashing[{Small, Small}]], {}}}, AspectRatio -> Full, 
                    ImageSize -> {40, 10}, PlotRangePadding -> None, 
                    ImagePadding -> Automatic, 
                    BaselinePosition -> (Scaled[0.1] -> Baseline)], #6}}, 
                 GridBoxAlignment -> {
                  "Columns" -> {Center, Left}, "Rows" -> {{Baseline}}}, 
                 AutoDelete -> False, 
                 GridBoxDividers -> {
                  "Columns" -> {{False}}, "Rows" -> {{False}}}, 
                 GridBoxItemSize -> {"Columns" -> {{All}}, "Rows" -> {{All}}},
                  GridBoxSpacings -> {
                  "Columns" -> {{0.5}}, "Rows" -> {{0.8}}}], "Grid"]}}, 
             GridBoxAlignment -> {"Columns" -> {{Left}}, "Rows" -> {{Top}}}, 
             AutoDelete -> False, 
             GridBoxItemSize -> {
              "Columns" -> {{Automatic}}, "Rows" -> {{Automatic}}}, 
             GridBoxSpacings -> {"Columns" -> {{1}}, "Rows" -> {{0}}}], 
            "Grid"], Alignment -> Left, AppearanceElements -> None, 
           ImageMargins -> {{5, 5}, {5, 5}}, ImageSizeAction -> 
           "ResizeToFit"], LineIndent -> 0, StripOnInput -> False], {
         FontFamily -> "Arial"}, Background -> Automatic, StripOnInput -> 
         False], TraditionalForm]& ), 
      InterpretationFunction :> (RowBox[{"LineLegend", "[", 
         RowBox[{
           RowBox[{"{", 
             RowBox[{
               InterpretationBox[
                ButtonBox[
                 TooltipBox[
                  GraphicsBox[{{
                    GrayLevel[0], 
                    RectangleBox[{0, 0}]}, {
                    GrayLevel[0], 
                    RectangleBox[{1, -1}]}, {
                    RGBColor[0, 0, 1], 
                    RectangleBox[{0, -1}, {2, 1}]}}, AspectRatio -> 1, Frame -> 
                   True, FrameStyle -> RGBColor[0., 0., 0.6666666666666666], 
                   FrameTicks -> None, PlotRangePadding -> None, ImageSize -> 
                   Dynamic[{
                    Automatic, 1.35 CurrentValue["FontCapHeight"]/
                    AbsoluteCurrentValue[Magnification]}]], 
                  "RGBColor[0, 0, 1]"], Appearance -> None, BaseStyle -> {}, 
                 BaselinePosition -> Baseline, DefaultBaseStyle -> {}, 
                 ButtonFunction :> With[{Typeset`box$ = EvaluationBox[]}, 
                   If[
                    Not[
                    AbsoluteCurrentValue["Deployed"]], 
                    SelectionMove[Typeset`box$, All, Expression]; 
                    FrontEnd`Private`$ColorSelectorInitialAlpha = 1; 
                    FrontEnd`Private`$ColorSelectorInitialColor = 
                    RGBColor[0, 0, 1]; 
                    FrontEnd`Private`$ColorSelectorUseMakeBoxes = True; 
                    MathLink`CallFrontEnd[
                    FrontEnd`AttachCell[Typeset`box$, 
                    FrontEndResource["RGBColorValueSelector"], {
                    0, {Left, Bottom}}, {Left, Top}, 
                    "ClosingActions" -> {
                    "SelectionDeparture", "ParentChanged", 
                    "EvaluatorQuit"}]]]], BaseStyle -> Inherited, Evaluator -> 
                 Automatic, Method -> "Preemptive"], 
                RGBColor[0, 0, 1], Editable -> False, Selectable -> False], 
               ",", 
               RowBox[{"Directive", "[", 
                 RowBox[{
                   InterpretationBox[
                    ButtonBox[
                    TooltipBox[
                    GraphicsBox[{{
                    GrayLevel[0], 
                    RectangleBox[{0, 0}]}, {
                    GrayLevel[0], 
                    RectangleBox[{1, -1}]}, {
                    RGBColor[0, 0, 1], 
                    RectangleBox[{0, -1}, {2, 1}]}}, AspectRatio -> 1, Frame -> 
                    True, FrameStyle -> RGBColor[0., 0., 0.6666666666666666], 
                    FrameTicks -> None, PlotRangePadding -> None, ImageSize -> 
                    Dynamic[{
                    Automatic, 1.35 CurrentValue["FontCapHeight"]/
                    AbsoluteCurrentValue[Magnification]}]], 
                    "RGBColor[0, 0, 1]"], Appearance -> None, BaseStyle -> {},
                     BaselinePosition -> Baseline, DefaultBaseStyle -> {}, 
                    ButtonFunction :> With[{Typeset`box$ = EvaluationBox[]}, 
                    If[
                    Not[
                    AbsoluteCurrentValue["Deployed"]], 
                    SelectionMove[Typeset`box$, All, Expression]; 
                    FrontEnd`Private`$ColorSelectorInitialAlpha = 1; 
                    FrontEnd`Private`$ColorSelectorInitialColor = 
                    RGBColor[0, 0, 1]; 
                    FrontEnd`Private`$ColorSelectorUseMakeBoxes = True; 
                    MathLink`CallFrontEnd[
                    FrontEnd`AttachCell[Typeset`box$, 
                    FrontEndResource["RGBColorValueSelector"], {
                    0, {Left, Bottom}}, {Left, Top}, 
                    "ClosingActions" -> {
                    "SelectionDeparture", "ParentChanged", 
                    "EvaluatorQuit"}]]]], BaseStyle -> Inherited, Evaluator -> 
                    Automatic, Method -> "Preemptive"], 
                    RGBColor[0, 0, 1], Editable -> False, Selectable -> 
                    False], ",", 
                   RowBox[{"Dashing", "[", 
                    RowBox[{"{", 
                    RowBox[{"Small", ",", "Small"}], "}"}], "]"}]}], "]"}], 
               ",", 
               InterpretationBox[
                ButtonBox[
                 TooltipBox[
                  GraphicsBox[{{
                    GrayLevel[0], 
                    RectangleBox[{0, 0}]}, {
                    GrayLevel[0], 
                    RectangleBox[{1, -1}]}, {
                    RGBColor[0, 1, 0], 
                    RectangleBox[{0, -1}, {2, 1}]}}, AspectRatio -> 1, Frame -> 
                   True, FrameStyle -> RGBColor[0., 0.6666666666666666, 0.], 
                   FrameTicks -> None, PlotRangePadding -> None, ImageSize -> 
                   Dynamic[{
                    Automatic, 1.35 CurrentValue["FontCapHeight"]/
                    AbsoluteCurrentValue[Magnification]}]], 
                  "RGBColor[0, 1, 0]"], Appearance -> None, BaseStyle -> {}, 
                 BaselinePosition -> Baseline, DefaultBaseStyle -> {}, 
                 ButtonFunction :> With[{Typeset`box$ = EvaluationBox[]}, 
                   If[
                    Not[
                    AbsoluteCurrentValue["Deployed"]], 
                    SelectionMove[Typeset`box$, All, Expression]; 
                    FrontEnd`Private`$ColorSelectorInitialAlpha = 1; 
                    FrontEnd`Private`$ColorSelectorInitialColor = 
                    RGBColor[0, 1, 0]; 
                    FrontEnd`Private`$ColorSelectorUseMakeBoxes = True; 
                    MathLink`CallFrontEnd[
                    FrontEnd`AttachCell[Typeset`box$, 
                    FrontEndResource["RGBColorValueSelector"], {
                    0, {Left, Bottom}}, {Left, Top}, 
                    "ClosingActions" -> {
                    "SelectionDeparture", "ParentChanged", 
                    "EvaluatorQuit"}]]]], BaseStyle -> Inherited, Evaluator -> 
                 Automatic, Method -> "Preemptive"], 
                RGBColor[0, 1, 0], Editable -> False, Selectable -> False], 
               ",", 
               RowBox[{"Directive", "[", 
                 RowBox[{
                   InterpretationBox[
                    ButtonBox[
                    TooltipBox[
                    GraphicsBox[{{
                    GrayLevel[0], 
                    RectangleBox[{0, 0}]}, {
                    GrayLevel[0], 
                    RectangleBox[{1, -1}]}, {
                    RGBColor[0, 1, 0], 
                    RectangleBox[{0, -1}, {2, 1}]}}, AspectRatio -> 1, Frame -> 
                    True, FrameStyle -> RGBColor[0., 0.6666666666666666, 0.], 
                    FrameTicks -> None, PlotRangePadding -> None, ImageSize -> 
                    Dynamic[{
                    Automatic, 1.35 CurrentValue["FontCapHeight"]/
                    AbsoluteCurrentValue[Magnification]}]], 
                    "RGBColor[0, 1, 0]"], Appearance -> None, BaseStyle -> {},
                     BaselinePosition -> Baseline, DefaultBaseStyle -> {}, 
                    ButtonFunction :> With[{Typeset`box$ = EvaluationBox[]}, 
                    If[
                    Not[
                    AbsoluteCurrentValue["Deployed"]], 
                    SelectionMove[Typeset`box$, All, Expression]; 
                    FrontEnd`Private`$ColorSelectorInitialAlpha = 1; 
                    FrontEnd`Private`$ColorSelectorInitialColor = 
                    RGBColor[0, 1, 0]; 
                    FrontEnd`Private`$ColorSelectorUseMakeBoxes = True; 
                    MathLink`CallFrontEnd[
                    FrontEnd`AttachCell[Typeset`box$, 
                    FrontEndResource["RGBColorValueSelector"], {
                    0, {Left, Bottom}}, {Left, Top}, 
                    "ClosingActions" -> {
                    "SelectionDeparture", "ParentChanged", 
                    "EvaluatorQuit"}]]]], BaseStyle -> Inherited, Evaluator -> 
                    Automatic, Method -> "Preemptive"], 
                    RGBColor[0, 1, 0], Editable -> False, Selectable -> 
                    False], ",", 
                   RowBox[{"Dashing", "[", 
                    RowBox[{"{", 
                    RowBox[{"Small", ",", "Small"}], "}"}], "]"}]}], "]"}], 
               ",", 
               InterpretationBox[
                ButtonBox[
                 TooltipBox[
                  GraphicsBox[{{
                    GrayLevel[0], 
                    RectangleBox[{0, 0}]}, {
                    GrayLevel[0], 
                    RectangleBox[{1, -1}]}, {
                    RGBColor[1, 0, 0], 
                    RectangleBox[{0, -1}, {2, 1}]}}, AspectRatio -> 1, Frame -> 
                   True, FrameStyle -> RGBColor[0.6666666666666666, 0., 0.], 
                   FrameTicks -> None, PlotRangePadding -> None, ImageSize -> 
                   Dynamic[{
                    Automatic, 1.35 CurrentValue["FontCapHeight"]/
                    AbsoluteCurrentValue[Magnification]}]], 
                  "RGBColor[1, 0, 0]"], Appearance -> None, BaseStyle -> {}, 
                 BaselinePosition -> Baseline, DefaultBaseStyle -> {}, 
                 ButtonFunction :> With[{Typeset`box$ = EvaluationBox[]}, 
                   If[
                    Not[
                    AbsoluteCurrentValue["Deployed"]], 
                    SelectionMove[Typeset`box$, All, Expression]; 
                    FrontEnd`Private`$ColorSelectorInitialAlpha = 1; 
                    FrontEnd`Private`$ColorSelectorInitialColor = 
                    RGBColor[1, 0, 0]; 
                    FrontEnd`Private`$ColorSelectorUseMakeBoxes = True; 
                    MathLink`CallFrontEnd[
                    FrontEnd`AttachCell[Typeset`box$, 
                    FrontEndResource["RGBColorValueSelector"], {
                    0, {Left, Bottom}}, {Left, Top}, 
                    "ClosingActions" -> {
                    "SelectionDeparture", "ParentChanged", 
                    "EvaluatorQuit"}]]]], BaseStyle -> Inherited, Evaluator -> 
                 Automatic, Method -> "Preemptive"], 
                RGBColor[1, 0, 0], Editable -> False, Selectable -> False], 
               ",", 
               RowBox[{"Directive", "[", 
                 RowBox[{
                   InterpretationBox[
                    ButtonBox[
                    TooltipBox[
                    GraphicsBox[{{
                    GrayLevel[0], 
                    RectangleBox[{0, 0}]}, {
                    GrayLevel[0], 
                    RectangleBox[{1, -1}]}, {
                    RGBColor[1, 0, 0], 
                    RectangleBox[{0, -1}, {2, 1}]}}, AspectRatio -> 1, Frame -> 
                    True, FrameStyle -> RGBColor[0.6666666666666666, 0., 0.], 
                    FrameTicks -> None, PlotRangePadding -> None, ImageSize -> 
                    Dynamic[{
                    Automatic, 1.35 CurrentValue["FontCapHeight"]/
                    AbsoluteCurrentValue[Magnification]}]], 
                    "RGBColor[1, 0, 0]"], Appearance -> None, BaseStyle -> {},
                     BaselinePosition -> Baseline, DefaultBaseStyle -> {}, 
                    ButtonFunction :> With[{Typeset`box$ = EvaluationBox[]}, 
                    If[
                    Not[
                    AbsoluteCurrentValue["Deployed"]], 
                    SelectionMove[Typeset`box$, All, Expression]; 
                    FrontEnd`Private`$ColorSelectorInitialAlpha = 1; 
                    FrontEnd`Private`$ColorSelectorInitialColor = 
                    RGBColor[1, 0, 0]; 
                    FrontEnd`Private`$ColorSelectorUseMakeBoxes = True; 
                    MathLink`CallFrontEnd[
                    FrontEnd`AttachCell[Typeset`box$, 
                    FrontEndResource["RGBColorValueSelector"], {
                    0, {Left, Bottom}}, {Left, Top}, 
                    "ClosingActions" -> {
                    "SelectionDeparture", "ParentChanged", 
                    "EvaluatorQuit"}]]]], BaseStyle -> Inherited, Evaluator -> 
                    Automatic, Method -> "Preemptive"], 
                    RGBColor[1, 0, 0], Editable -> False, Selectable -> 
                    False], ",", 
                   RowBox[{"Dashing", "[", 
                    RowBox[{"{", 
                    RowBox[{"Small", ",", "Small"}], "}"}], "]"}]}], "]"}]}], 
             "}"}], ",", 
           RowBox[{"{", 
             RowBox[{#, ",", #2, ",", #3, ",", #4, ",", #5, ",", #6}], 
             "}"}]}], "]"}]& ), Editable -> True], TraditionalForm], 
    TraditionalForm]},
  "Legended",
  DisplayFunction->(GridBox[{{
      TagBox[
       ItemBox[
        PaneBox[
         TagBox[#, "SkipImageSizeLevel"], Alignment -> {Center, Baseline}, 
         BaselinePosition -> Baseline], DefaultBaseStyle -> "Labeled"], 
       "SkipImageSizeLevel"], 
      ItemBox[#2, DefaultBaseStyle -> "LabeledLabel"]}}, 
    GridBoxAlignment -> {"Columns" -> {{Center}}, "Rows" -> {{Center}}}, 
    AutoDelete -> False, GridBoxItemSize -> Automatic, 
    BaselinePosition -> {1, 1}]& ),
  Editable->True,
  InterpretationFunction->(RowBox[{"Legended", "[", 
     RowBox[{#, ",", 
       RowBox[{"Placed", "[", 
         RowBox[{#2, ",", "After"}], "]"}]}], "]"}]& )]], "Output",
 CellChangeTimes->{
  3.840297178352446*^9, 3.840297365212985*^9, 3.8402974812806854`*^9, {
   3.8402976265283747`*^9, 3.840297649491034*^9}, {3.840297688537037*^9, 
   3.840297749899499*^9}, {3.840297871076274*^9, 3.840297892929929*^9}, 
   3.8402979688267612`*^9, {3.840298139975895*^9, 3.8402981823745227`*^9}, 
   3.840298307889537*^9, {3.840298402245512*^9, 3.840298426764054*^9}, 
   3.840298503072756*^9, 3.8402986041604123`*^9, 3.845732780593376*^9, 
   3.8457342397101326`*^9},ExpressionUUID->"78058f7d-4236-4e91-ae16-\
f0d404c6e3ef"]
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
 CellChangeTimes->{{3.839688478377141*^9, 3.8396884894719977`*^9}, {
  3.8396956032627416`*^9, 3.8396956092235527`*^9}, {3.839695725114539*^9, 
  3.8396957264476547`*^9}},ExpressionUUID->"9e7355c9-2513-4434-a97e-\
889c16000132"]
}, Open  ]]
}, Open  ]]
}, Open  ]]
},
WindowSize->{730, 731},
WindowMargins->{{Automatic, -7}, {Automatic, 0}},
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
Cell[580, 22, 373, 6, 101, "Title", "ExpressionUUID" -> \
"6b486536-c28c-4dfd-b075-08d85104d265"],
Cell[CellGroupData[{
Cell[978, 32, 322, 5, 72, "Chapter", "ExpressionUUID" -> \
"5d97f93d-a827-4cc0-b56b-51a80bf56d26"],
Cell[1303, 39, 560, 10, 68, "Text", "ExpressionUUID" -> \
"c5d9a1e1-cbc3-48ac-8273-efadfc2fe8af"],
Cell[CellGroupData[{
Cell[1888, 53, 172, 3, 70, "Section", "ExpressionUUID" -> \
"88a46f0f-7f83-4e82-9452-76677d7cd1fb"],
Cell[CellGroupData[{
Cell[2085, 60, 206, 3, 49, "Subsection", "ExpressionUUID" -> \
"3c110287-a70c-439b-b3a5-99d93856b147"],
Cell[2294, 65, 281, 6, 48, "Input", "ExpressionUUID" -> \
"2a9e5d94-60b0-463a-9f3a-3ef382227da6"]
}, Open  ]],
Cell[CellGroupData[{
Cell[2612, 76, 226, 5, 49, "Subsection", "ExpressionUUID" -> \
"6e79cf68-9f67-4805-b77f-4fac7c5cd154"],
Cell[2841, 83, 825, 22, 87, "Input", "ExpressionUUID" -> \
"0d9534f7-5ff5-456b-ac4a-71a190e410dd"]
}, Open  ]],
Cell[CellGroupData[{
Cell[3703, 110, 175, 3, 49, "Subsection", "ExpressionUUID" -> \
"01302f0e-e11a-4322-8efb-aeb339a76897"],
Cell[3881, 115, 1885, 50, 163, "Input", "ExpressionUUID" -> \
"d0086b3f-5a55-4246-b353-5ce44b54f51f"],
Cell[CellGroupData[{
Cell[5791, 169, 1186, 24, 125, "Input", "ExpressionUUID" -> \
"51716171-3c97-4d97-8831-795c9ba895a5"],
Cell[6980, 195, 373, 7, 30, "Output", "ExpressionUUID" -> \
"25090c82-6eca-4cb4-b3fb-2da98c6a54ff"]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[7402, 208, 165, 3, 49, "Subsection", "ExpressionUUID" -> \
"35f3a73f-e058-4afe-8824-63bde12cf5c8"],
Cell[7570, 213, 1187, 26, 68, "Input", "ExpressionUUID" -> \
"0c86066e-5a79-497c-a857-4a4f48c8c37e"]
}, Open  ]],
Cell[CellGroupData[{
Cell[8794, 244, 190, 3, 49, "Subsection", "ExpressionUUID" -> \
"3ed8b4c4-7383-417f-bd86-c6a6884687ac"],
Cell[8987, 249, 1094, 25, 87, "Input", "ExpressionUUID" -> \
"c1b538f2-36f0-4459-bd8f-4a8bbbaa4139"]
}, Open  ]],
Cell[CellGroupData[{
Cell[10118, 279, 241, 4, 49, "Subsection", "ExpressionUUID" -> \
"8289388f-0be8-4bf7-9371-e414d6e5d44f"],
Cell[10362, 285, 2036, 44, 144, "Input", "ExpressionUUID" -> \
"a768b2e1-1be4-4edf-80e3-a1f3a32cfc53"]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[12447, 335, 166, 3, 70, "Section", "ExpressionUUID" -> \
"35d9530a-8a27-4d91-a844-e88e593606d6"],
Cell[CellGroupData[{
Cell[12638, 342, 186, 3, 49, "Subsection", "ExpressionUUID" -> \
"f6e9a53a-a89d-42d5-b3a4-b1483f62b928"],
Cell[12827, 347, 4098, 105, 395, "Input", "ExpressionUUID" -> \
"f9c0fd7a-cf26-4065-8b95-d6b1c7731f46"]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[16974, 458, 181, 3, 70, "Section", "ExpressionUUID" -> \
"6e212a70-e53d-454c-8076-48ef005c6241"],
Cell[CellGroupData[{
Cell[17180, 465, 206, 3, 49, "Subsection", "ExpressionUUID" -> \
"1d06c621-ed43-4d37-a0a0-ad54ee6f5422"],
Cell[17389, 470, 300, 7, 30, "Input", "ExpressionUUID" -> \
"868bc189-ebde-429c-99a8-7ccb0dd4bc54"],
Cell[17692, 479, 853, 24, 88, "Input", "ExpressionUUID" -> \
"07ac697c-7725-4e9e-a9a5-a1848c6d3180"]
}, Open  ]],
Cell[CellGroupData[{
Cell[18582, 508, 205, 3, 49, "Subsection", "ExpressionUUID" -> \
"d569d9f9-84cb-4b81-87c4-11c4fb5545ee"],
Cell[18790, 513, 173, 4, 30, "Input", "ExpressionUUID" -> \
"e4e244a5-2036-4f04-899e-e7d2c57c060f"],
Cell[CellGroupData[{
Cell[18988, 521, 249, 5, 41, "Input", "ExpressionUUID" -> \
"9c05e1c4-cb02-4592-8a69-3227071be270"],
Cell[19240, 528, 3433, 78, 181, "Output", "ExpressionUUID" -> \
"c2c7badf-cdc5-492d-8ecc-13e0abb21567"]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[22722, 612, 192, 3, 49, "Subsection", "ExpressionUUID" -> \
"e52e9fca-320c-4204-81b2-8d4072f9228c"],
Cell[22917, 617, 307, 8, 30, "Input", "ExpressionUUID" -> \
"cd8c0fa8-c780-4795-9d2d-51c4f5de5a14"],
Cell[23227, 627, 399, 11, 50, "Input", "ExpressionUUID" -> \
"cda67f80-c6ae-4620-aaff-cad0a395d89b"],
Cell[23629, 640, 527, 14, 69, "Input", "ExpressionUUID" -> \
"69f4b37f-8e62-433c-b8f5-77ffbe3118ce"]
}, Open  ]],
Cell[CellGroupData[{
Cell[24193, 659, 201, 3, 49, "Subsection", "ExpressionUUID" -> \
"34771b37-87aa-4a47-b331-612980001b54"],
Cell[24397, 664, 393, 10, 50, "Input", "ExpressionUUID" -> \
"35df2261-f9f0-4197-a2d1-32fb15bab7c8"],
Cell[CellGroupData[{
Cell[24815, 678, 735, 17, 69, "Input", "ExpressionUUID" -> \
"065b4421-33ad-4a42-836e-fa12f4050025"],
Cell[25553, 697, 224, 4, 30, "Output", "ExpressionUUID" -> \
"6fa5724b-cad0-407e-a5c5-c70b20faf9b1"]
}, Open  ]],
Cell[25792, 704, 1062, 25, 88, "Input", "ExpressionUUID" -> \
"08e87564-d856-4d48-861c-736d39d5eda6"],
Cell[26857, 731, 1870, 49, 164, "Input", "ExpressionUUID" -> \
"3d30425c-21f4-477e-83e0-1b85bfeb9532"],
Cell[28730, 782, 2717, 69, 145, "Input", "ExpressionUUID" -> \
"95208949-d638-4782-9ff9-d6e0dd7d5354"],
Cell[CellGroupData[{
Cell[31472, 855, 2699, 64, 202, "Input", "ExpressionUUID" -> \
"5ee25857-f232-45bd-9ac0-ff310f614b98"],
Cell[34174, 921, 59265, 1122, 385, "Output", "ExpressionUUID" -> \
"78058f7d-4236-4e91-ae16-f0d404c6e3ef"]
}, Open  ]]
}, Open  ]]
}, Open  ]],
Cell[CellGroupData[{
Cell[93500, 2050, 168, 3, 70, "Section", "ExpressionUUID" -> \
"57164ee3-d71d-43df-97af-c2c8107e09ac"],
Cell[93671, 2055, 348, 7, 63, "Input", "ExpressionUUID" -> \
"9e7355c9-2513-4434-a97e-889c16000132"]
}, Open  ]]
}, Open  ]]
}, Open  ]]
}
]
*)


```
