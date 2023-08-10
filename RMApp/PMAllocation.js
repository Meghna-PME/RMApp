<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
	  <link rel="stylesheet" href="/sites/Development/Site%20Assets/RMApp/PageloadRef/bootstrap.min.css">
	<link rel="stylesheet" href="/sites/Development/Site%20Assets/RMApp/PageloadRef/kendo.common.min.css"/>
	<link rel="stylesheet" href="/sites/Development/Site%20Assets/RMApp/PageloadRef/kendo.rtl.min.css"/>
	<link rel="stylesheet" href="/sites/Development/Site%20Assets/RMApp/PageloadRef/kendo.silver.min.css"/>
	<link  rel="stylesheet" href="/sites/Development/Site%20Assets/RMApp/PageloadRef/kendo.mobile.all.min.css"/>
	<link rel="stylesheet" href="/sites/Development/Site%20Assets/RMApp/PageloadRef/kendo.custom.css"/>       
	<script type="text/javascript" src="/sites/Development/Site%20Assets/RMApp/PageloadRef/jquery-1.12.4.js"></script>
	<script type="text/javascript" src="/sites/Development/Site%20Assets/RMApp/PageloadRef/jquery-ui.js"></script>
	<script type="text/javascript" src="/sites/Development/Site%20Assets/RMApp/PageloadRef/2019.1.220.kendo.all.min.js"></script>
	<script type="text/javascript"  src="/sites/Development/Site%20Assets/RMApp/PageloadRef/2018.2.516.kendo.all.min.js"></script>
	<script type="text/javascript"  src="/sites/Development/Site%20Assets/RMApp/PageloadRef/jquery.blockUI.js"></script>	
	<script src="/sites/Development/Site%20Assets/RMApp/PageloadRef/chosen.jquery.min.js"></script> 
	<link rel="stylesheet" href="/sites/Development/Site%20Assets/RMApp/PageloadRef/chosen.min.css"> 
	<script src="/sites/Development/Site%20Assets/RMApp/PageloadRef/loadingoverlay.min.js"></script> 
	<script type="text/javascript" src="/sites/Development/Site%20Assets/RMApp/PageloadRef/bootstrap.min.js"></script>
	<script src="/sites/Development/Site%20Assets/RMApp/PageloadRef/bootstrap-multiselect.js"></script>
    <link rel="stylesheet" href="/sites/Development/Site%20Assets/RMApp/PageloadRef/bootstrap-multiselect.css">
</head>
<body>  
	<style>
	/*.k-alt{
		//*background-color:lightgrey !important;
		 background-color: white !important;
		color: darkgrey !important;
	}*/
	.k-grid-header th.k-header {
		padding:0.2em 0.2em !important;
	}
	
	.CIcolor{
		color: #fdda0d;
	}
	#PMLoadgrid{
		/*width: 1006px !important;*/
		    border-left: 0px;
			border-top: 0;

	}
	.ms-rtestate-field p,{   
		white-space: nowrap;	
	}

	.k-i-filter{
		padding-left: 17px !important;
	}

	#pageStatusBar{
		margin-top: 32px;
	}
.k-multiselect-wrap{
	height:27px !important;
}
	.k-grid td {
		padding: 0.2em 0.2em !important;
		font-family: "Segoe UI", Segoe, Tahoma, Helvetica, Arial, sans-serif;
		font-size: 13px;
		font-weight: 400;
	}
	.ms-rtestate-field p, p.ms-rteElement-P {
		margin: 0px 0px 0px 0px !important;
	}
	.k-list-item.k-selected, .k-selected.k-list-optionlabel {
		color: #fff !important;
		background-color: #88918f !important;
	}

	#DeltaPlaceHolderMain {
		font-family: "Segoe UI", Segoe, Tahoma, Helvetica, Arial, sans-serif;
		font-size: 13px;
		font-weight: 400;
	}

	 .thumbnail {
					padding:0px;
				}
				.panel {
					position:relative;
				}
				.panel>.panel-heading:after,.panel>.panel-heading:before{
					position:absolute;
					top:11px;left:-16px;
					right:100%;
					width:0;
					height:0;
					display:block;
					content:" ";
					border-color:transparent;
					border-style:solid solid outset;
					pointer-events:none;
				}
				.panel>.panel-heading:after{
					border-width:7px;
					border-right-color:#f7f7f7;
					margin-top:1px;
					margin-left:2px;
				}
				.panel>.panel-heading:before{
					border-right-color:#ddd;
					border-width:8px;
				}
				.panel {
					margin-bottom: 4px !important;
				}
				#drp_resources_chosen{			
						margin-left: 15px;
				}
				
			/*.k-state-selected, .k-state-selected:link, .k-state-selected:visited, .k-tool.k-state-selected, .k-list > .k-state-selected, .k-list > .k-state-highlight, .k-panel > .k-state-selected, .k-ghost-splitbar-vertical, .k-ghost-splitbar-horizontal, .k-draghandle.k-state-selected:hover, .k-scheduler .k-scheduler-toolbar .k-state-selected, .k-scheduler .k-today.k-state-selected, .k-marquee-color {
					background-color: transparent;
					color: #003f59;
					background-image: none;
				}*/
			.k-grid tr.k-state-selected:hover, .k-grid td.k-state-selected:hover {
					background-color: transparent;
					color: #003f59;
			}
			/* .k-state-selected{
				background-color: none !important;
					color: #003f59;
			} */
			
			.k-state-selected, .k-state-selected:link{
				/*background-color: transparent;*/
				background-color: #0d6a92;
				background-image: none;
			}
			#PMLoadgrid .k-state-selected, .k-state-selected:link{
				background-color: transparent;
				color: rgb(0, 63, 89);
			}
			
			
			.k-multiselect-clearable .k-input {
		/* overflow: hidden; */
		/* text-overflow: ellipsis; */
	   
	}
		
		.k-button {
	   // border-radius: 0px;
	   // border-color: white;
		color: #515967;
	  //  background-color: white;
		background-position: 50% 50%;
		background-image: url(textures/highlight.png);
		background-image: none,linear-gradient(to bottom,rgba(255,255,255,.2) 0,rgba(255,255,255,0) 100%);
	}

	.k-button.k-state-hover, .k-button:hover {
		
	   // border-color: white;
	 //   background-color: white;
		background-position: 50% 50%;
		background-image: none,linear-gradient(to bottom,rgba(255,255,255,.2) 0,rgba(255,255,255,0) 100%);
	}


		
		.k-multiselect {
		position: relative;
	}

	.k-multiselect:after {
		content: "\25BC";
		position: absolute;
		top: 31% !important;
		right: 20px;
		font-size: 10px;
		
	}

	.k-multiselect.opened:after {
		content: "\25C0";
	}
	.k-multiselect-wrap>.k-i-close {
		right: calc(1em - 7px);
		top: 31%;
	}
	input {
		/*caret-color: rgba(0,0,0,0);*/
	}

	.k-multiselect-wrap>.k-i-close {
		font-size: 94%;
		display: none;
		position: absolute;
		cursor: pointer;
	}
	.Sticky{
		position: sticky;
		top: 0px;
		padding:0px;
		z-index: 1000;
		background-color: white;
		border-bottom: 1px solid;
		border-bottom-color: #a3d0e4;
		
	}
	.k-grid-header {
		position: sticky;
		top: 0px;
		 padding-right: 0 !important;
		z-index: 999;
		background-color: white;
		/*outline: 1px solid;
		outline-color: #a3d0e4;*/
		/* border-top: 1px solid;
		border-top-color: #a3d0e4; */

	}
	.dropdown-check-list {
	  display: inline-block;
	  position: absolute;
	  top:46%
	}

	.dropdown-check-list .sortingtypeListanchor {
	  position: relative;
	  cursor: pointer;
	  display: inline-block;
	  padding: 5px 50px 5px 10px;
	  /*border: 1px solid #ccc;*/
	}

	.dropdown-check-list .sortingtypeListanchor:after {
	  position: absolute;
	  /*content: "";*/
	  border-left: 2px solid black;
	  border-top: 2px solid black;
	  padding: 5px;
	  right: 10px;
	  top: 20%;
	  -moz-transform: rotate(-135deg);
	  -ms-transform: rotate(-135deg);
	  -o-transform: rotate(-135deg);
	  -webkit-transform: rotate(-135deg);
	  transform: rotate(-135deg);
	}

	.dropdown-check-list .sortingtypeListanchor:active:after {
	  right: 8px;
	  top: 21%;
	}

	.dropdown-check-list ul.sortingtypeListitems {
	  padding: 2px;
	  display: none;
	  margin: 0;
	  border: 1px solid #ccc;
	  border-top: 1px solid #cc;

	}

	.dropdown-check-list ul.sortingtypeListitems li {
	  list-style: none;
	  padding: 6px 6px 4px 4px;
	  cursor: pointer
	}
	.dropdown-check-list ul.sortingtypeListitems li:hover {
	  background-color: #ddd;/*#dedee0;*/
	  background-image: none, linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 0px, rgba(255, 255, 255, 0) 100%);
	}

	.dropdown-check-list.visible .sortingtypeListanchor {
	  color: #0094ff;
		
	}

	.dropdown-check-list.visible .sortingtypeListitems {
		display: block;
		position: absolute;
		background: #f5f5f5;
		font-size: 13px;
		font-family: "Segoe UI", Segoe, Tahoma, Helvetica, Arial, sans-serif;
		font-stretch: 100%;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		transform: translateY(0px);
		border-radius: 0 0 4px 4px;
		box-shadow: 0 2px 2px 0 rgb(0 0 0 / 30%);
		
	}
    .backgroundBlur {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: none;
}
	.ttesting {    padding-left: 82px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    height: 123px;
    padding-left: 1px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    padding: 20px;
    padding-right: 0px;
    padding-left: 40px;
    display: none;
}
.row {
    margin-right: -2px !important;
    margin-left: -15px;
}

#Daterangebox{
      margin-top: 6px;
    display: inline;
    top: 146px;
    padding-top: 6px;
   
    position: sticky;
  
    height: 23px;
}
#Daterange{
    margin-bottom: 10px;
    padding: 0px 5px;
    font-size: 13px;
    font-weight: normal;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 10px 0;
}
#Daterange:hover{
      color: #0b3d51;

}

.mybox{
	display:flex
}

.OkbuttonDate{
	    margin: 10px;
    left: 300px;
    top: 83px;
    margin-top: -12px;
    position: absolute;
    background-color: #8dd8f7;
    padding: 2px 11px 2px 11px;
}
.crossi{
	    top: 36px;
    margin: 10px;
    right: 40px;
    margin-top: 15px;
    position: relative;
}
.btn-group{
	  margin-left:15px;
	}
	.input-group-addon{
	  dispaly:none !important;
	}
	.multiselect-reset{
	 padding:1px 1px !important;
	 min-width:4em !important;
	 margin-left:5px !important;
	 border-radius:4px;
	 float: right;
	}
	.multiselect-apply{
	 padding: 1px 1px !important;
    min-width: 4em !important;
    margin-right: 5px !important;
    border-radius: 4px;
    float: right;
	background-color:#a3d0e5 !important;
	}
	.k-auto-scrollable{
		overflow:visible;
		overflow-x:visible;
		overflow-y:visible;
	}
	.multiselect-container > li:first-of-type { 
	  position: sticky!important; 
	  top: 0px!important; 
	  z-index: 1!important;
      background-color: white;
      padding: 2px;
	}
	.multiselect-container > li:last-of-type { 
	position: sticky!important;
    bottom: 0 !important;
    display: block;
    background: white!important;
    right: 0;
    float: right;
    width: 100% !important;
    padding: 4px;
	}
	</style>
    <div class="backgroundBlur"></div>
	<div id='Welcomepage' style="padding-bottom:23px;display:none;">
	  <span style="font-size: 20px;font-weight: 500;">Welcome</span><br>
	  <p>Use the Project Allocation page to plan and request resources for your project.  Check out the project using the ribbon to get started!</p>
	</div>
<!--<table id='Welcomepage'  style="width:100%;" cellpadding="0" cellspacing="0">
        <tr class="">
            <td align="left">
                <div id="welcostGrid">
                   <span style="font-size: 30px;font-weight: bold;">Welcome</span>
				   <p>Use the Project Allocation page to plan and request resources for your project.  Check out the project using the ribbon to get started!</p>
                </div>
            </td>
        </tr>
    </table>-->
	<div class = "ttesting">
			<label>Start:</label> <input id="start" />
            <label style="margin-left: 10px;" >End:</label><input style="margin-right: -28px;" id="end"  />
				<div class="k-button OkbuttonDate">Apply</div>
				<div class="k-button crossi ">Cancel</div>
			<!--2107/2020  <select id="drp_resources" data-placeholder="Select Resource" class="chosen-select"   tabindex="4"  style="height:30px;width:150px; border-radius:5px;">
				<option value="0" selected>Select Resources</option>
			 </select>
			 <a role="button" class="k-button k-button-icontext k-grid-cancel-changes hide"  id="btn_add" href="#" onclick='AddtoTablecopy();' ><span class="k-icon k-i-plus-circle"></span>Add</a>---> 
			<a role="button" class="k-button k-button-icontext k-grid-cancel-changes gRefresh"  style="display:none" id="btn_addEngagement" href="#" onclick='GetData();' ><span class="k-icon k-i-refresh"></span>Refresh</a>
			<a role="button" class="k-button k-button-icontext k-grid-cancel-changes gRefresh DreEndc" id="btn_MSaveEngagement" href="#" onclick='saveFilterEngagements();' ><span class="k-icon k-i-copy"></span>Save</a>
			<!-- <a role="button" class="k-button k-button-icontext k-grid-cancel-changes gCreateRefresh"  id="btn_CEngagement" href="#" onclick='CEngagementPgae();' ><span class="k-icon k-i-plus"></span>Create New</a>
			<a role="button" class="k-button k-button-icontext k-grid-cancel-changes"  id="btn_cancel" href="#" onclick='Cancel();' ><span class="k-icon k-i-cancel"></span>Cancel Creation</a>                    -->
		</div>

        <div id="MainDiv" class="Sticky">

		<!--<div class="row cEngNew" style='margin-top: -60px !important;'>
			<a role="button" class="k-button k-button-icontext k-grid-cancel-changes"  id="btn_cancel" href="#" onclick='Cancel();' ><span class="k-icon k-i-cancel"></span>Cancel Creation</a>
			<a role="button" class="k-button k-button-icontext k-grid-cancel-changes"  id="btn_ItemSave" href="#" onclick='CreteEng();' ><span class="k-icon k-i-save"></span>Creation Engagement</a>
		</div> cEngNew cEngNewLen-->
		<div  class="row  " id='cEngNewLenrow' style="margin-top:0px;width:fit-content;position: sticky;left: -15px">                    	 
			<div  class="row Fil" style='margin-bottom: 10px;'>
				<div class='col-sm-12'>			 
					<div class='col-sm-2'>
						<input id="CTypeRes" style="width: 100%;" />
					</div>
					<div class='col-sm-3'>
						<select id="ddnlocation" multiple="multiple">
							<option value="0" selected>Select Location</option>
						</select>
					</div>
					<div class='col-sm-3'>
						<select id="ddnSkillset" multiple="multiple">
							<option value="0" selected>Select Skill Set</option>
						</select>
					</div>
				</div>
			</div>
		
			<div class="row DreEnd" style='margin-left: 18px;width:fit-content'>
				<table class='cEngNewLen'style='margin-left: -3px;'>
					<tr id="fileroptionRows_Labels">
					</tr>
					<tr id="fileroptionRows">
						<td id="rrole" style="width: 55px;">
							<label> Filters: </label>
						</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	
						<td id="TypeDD">
						  <select id="typeIsNamed"  multiple="multiple" data-placeholder="Type" ></select> 
					   </td>
					</tr>		   
				</table>
			</div>
			 
			<span class ='cEngNewLen' id="resorceList" style="float: left; padding-left: 15px; ">
				<!--<input class="" type="Checkbox" style='display: none; margin-top: -3px;margin-left: 12px;width: 23px;height: 16px;'  name="ResTypes" id="chkResourcetype" onchange="resetDataLU()" value="Generic"/>
				<select id="drp_resources" data-placeholder="Select Resource" multiple class="chosen-select "   tabindex="4"  style="margin-left: 15px;height:30px;width:150px; border-radius:5px;">
					<option value="0" selected>Select Resources</option>
				</select>-->
				<label style='margin-left: 15px;'>Resources: <span  id='ResourceCount'></span></label><br>
				<div class='mybox' style='width: 1300px; margin-bottom: 7px; margin-left: -14px;'>	<select id="drp_resources"  multiple="multiple" data-placeholder="Select Resource" style="margin-left: 15px;height:30px;width:150px; border-radius:5px;"></select>
				<!--<select id="required" multiple="multiple" data-placeholder="Select attendees...">
			    <option>Steven White</option>
			    <option>Nancy King</option>
			    <option>Nancy Davolio</option>
			    <option>Robert Davolio</option>
			    <option>Michael Leverling</option>
			    <option>Andrew Callahan</option>
			    <option>Michael Suyama</option>
			    <option selected>Anne King</option>
			    <option>Laura Peacock</option>
			    <option>Robert Fuller</option>
			    <option>Janet White</option>
			    <option>Nancy Leverling</option>
			    <option>Robert Buchanan</option>
			    <option>Margaret Buchanan</option>
			    <option selected>Andrew Fuller</option>
			    <option>Anne Davolio</option>
			    <option>Andrew Suyama</option>
			    <option>Nige Buchanan</option>
			    <option>Laura Fuller</option>
			</select>-->
			</span>
			<span style="float: left;margin-top: 0px;">
				<label class='cEngNewLen'>Start:</label> <input id="start_datepicker"  class='cEngNewLen' style='height: 24px;' />
				<label  class='cEngNewLen'>End:</label><input id="end_datepicker"  class='cEngNewLen' style='height: 24px;' />
			
				<input type="text" id="txt_unit"  class='cEngNewLen'  onkeypress="return isNumberKeyDesPoint(event)" placeholder="(0% to 100%)" title='(0% to 100%)'style="height:22px;border-radius: 5px;width:99px;" />
				<a role="button" class="k-button k-button-icontext k-grid-cancel-changes cEngNewLen"  id="btn_add" href="#" onclick='AddtoTablecopy();' >
					<span class="k-icon k-i-plus-circle"></span>Add
				</a>
			</span>		
            <div id = "Daterangebox"></div>	
		</div>
		</div>
		<div><span id="addItemChk" style="color: red;"></span>
	</div>
	</div>
	  
      
      
      	<!--<div id="NewItemsgrid" class="cEngNewLen" style='display: none !important;'></div> -->
	<div id="window" style="display:none"> 
		<div class="panel panel-default">    
			<div class="panel-body overflow-auto" style='height: 203px;overflow-y: auto;'>
				<span id='textvalue'> </span> 
			</div>
			<div class="panel-footer">
				<input type="text" style='width: 90%; height: 30px; border-radius: 0px;resize: none;' class="" id="comment">
				<a role="button" style='padding: 9px; color: blue; margin-left: -4px; border-radius: 0px !important;' class="k-button k-button-icontext k-grid-cancel-changes"  id="btn_sendcomm" href="#" onclick='SendComents();' >
					<span class="k-icon k-i-button"></span>
				</a>
		   </div>
		</div>	
	</div> 
	<div id="example" style="left: 2px;z-index: 999;position: sticky;">
	<div id="PMLoadgrid" class="cEngView"  ></div> <!-- style="margin-top:5px;"-->
	</div>


</body>
<script>


    $('#Daterangebox').append(`<p id="Daterange">Grid Date Range</p>`);

var RM_ResourceFilter = []
var RM_ResourceFiltername = []
var Res_data = [];


var monthNamesFull = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var GProjectName="";	
var locationres = "";	
var gname = null	
var Ddatalength =[]
	var datalength =[]
var naval  = false

var  RM_Chat = false;
var  RM_Delete =false
var RM_Commit = false;
var RM_Reject = false;
var PM_AutoSave = false;
	var addtrue = false;
	var getodataR;
	var keysOdataR;
	var RM_ResourceDisplayField;
	var RM_ResourceDisplayField_N;
	var globalRes = [];
	
	var listdataRM ;
var locationDrop = [];
var globalValDropFilter = [];
var globalValDrop = [];
var GenericResUID = [];
var keynames = []
var ResGenericAr = [];
var ResActiveAr = []
var resGetProject;
//M var Resdata;
var pagechk =false;
//ExecuteOrDelayUntilScriptLoaded(loadMain, "sp.js");
function loadMain(){
	var mainDiv_height = $('#MainDiv').height()
	if(ResFilter.length == 0){
		if($('input[title="Project Name"]').length ==0){
			if($('#fullscreenmode').is(":visible")){
				mainDiv_height = mainDiv_height + 22;
			}
			else{
				mainDiv_height = mainDiv_height + 22;
			}
			
		}
		else{				
			if($('#fullscreenmode').is(":visible")){
				mainDiv_height = mainDiv_height + 19;
			}
			else{
				mainDiv_height = mainDiv_height + 19;
			}
		}		
	}
	else{
		if($('input[title="Project Name"]').length ==0){
			if($('#fullscreenmode').is(":visible")){
				mainDiv_height = mainDiv_height + 22;
			}
			else{
				mainDiv_height = mainDiv_height + 22;
			}
			
		}
		else{				
			if($('#fullscreenmode').is(":visible")){
				mainDiv_height = 148//mainDiv_height + 19;
			}
			else{
				mainDiv_height = 148//mainDiv_height + 19;
			}
		}
	}
}
 var AGGetProject;
 var mainResordata;
 var siteAbsoluteUrl = _spPageContextInfo.siteAbsoluteUrl
var azurewebsites = "https://appcgdev.azurewebsites.net";
$(document).ready(function () {
	/*$( window ).resize(function() {
  $('#PMLoadgrid').width($(window).width()-226);
   $('#MainDiv').width(1140);
});
	$("#required").width(250).kendoMultiSelect({
                autoClose: false,
                tagMode: "single"
            });*/
	pagechk =true;
	//var urlGetProject = azurewebsites+'/api/Allocation/SPWithSinglePara/AG_ProjectList/123'	                  
	resGetProject = '';//getAjex(urlGetProject);
	var AGtable = azurewebsites+"/api/Allocation/SPWithSinglePara/AG_ResourceList_All/123"
	AGGetProject = getAjex(AGtable);
	/*var url = siteAbsoluteUrl+"/_api/web/lists/getByTitle('RM%20App%20Resources')/items?$top=4998&$select=ID,Title,ResourceID,Resource_x0020_Manager/Id,Resource_x0020_Manager/Name,Resource_x0020_Manager/Title&$expand=Resource_x0020_Manager/Id&$orderby= Title asc"
	var mResdata = getAjex(url);
	var LiResdata = mResdata.value;	    
	$.each(LiResdata, function (indxL, Ldata) {
	  $.each(AGGetProject, function (indxA, AGdata) {
		if(Ldata.ResourceID  == AGdata.ResourceId){
		  Ldata.ResourceIsGeneric = AGdata.ResourceIsGeneric
		  Ldata.ResourceIsActive = AGdata.ResourceIsActive
		  Ldata.PrimaryJobRole = AGdata.PrimaryJobRole
		}
	  });
	});
	debugger
	//ResourceIsGeneric,ResourceIsActive,PrimaryJobRole
	Resdata = LiResdata;
	mainResordata = LiResdata*/
	if($('input[title="Project Name"]').length ==0){
	  GProjectName=$('.ms-formlabel:contains(Name)').closest('td').next().text().trim()	
	  $('#btn_MSaveEngagement').hide();
	  $('.cEngNewLen').hide();
	  setTimeout(function(){
	    let grid = gridID.data('kendoGrid');
	    grid.setOptions({
		  editable: false
	    });
	  },1000);
	}else{		
	  GProjectName=$('input[title="Project Name"]').val()
	}
	$('.cEngView').hide()
	$('.cEngNew').hide()
	$("#start").kendoDatePicker({
	 // change: changeDate,
	  previousStart: "",
	  start: "year",
	  depth: "year",
	  format: "MMMM yyyy",
	  value :"MM YYYY",
	  //select:chckval,
	});
	$("#end").kendoDatePicker({
	//  change: changeDate,
	  previousEnd: "",
	  start: "year",
      depth: "year",
	  format: "MMMM yyyy",
	  value :"MM YYYY"
	});
	   
	    $("#start_datepicker").kendoDatePicker({
				//change: changeDate,
				  start: "year",
				depth: "year",
				  format: "MMMM yyyy",
				value :"MM YYYY"
		   });
		 $("#end_datepicker").kendoDatePicker({
				//change: changeDate,
				  start: "year",
				depth: "year",
				  format: "MMMM yyyy",
				value :"MM YYYY"
		   });
		 
	    var date=new Date();
		var Startdate= setDate(date);
		var Enddate = new Date(date.setMonth(date.getMonth() + 11));
		var enddatevalue=setDate(Enddate);
		if(JSON.parse(sessionStorage.getItem('dateItems')) != undefined){
			date=new Date(JSON.parse(sessionStorage.getItem('dateItems'))[0])
			Startdate= setDate(date)
			Enddate=new Date(JSON.parse(sessionStorage.getItem('dateItems'))[1])
			enddatevalue=setDate(Enddate);
		}
		$("#start").val(Startdate);
		$("#end").val(enddatevalue);
		$('#start_datepicker').val(Startdate)
		 $('#end_datepicker').val(enddatevalue)
		 $('#txt_unit').val('0')
	
	//Gdatavalstart =Startdate;
	//GdatavalEnd =enddatevalue;
		
		getd();
   
});

function chckval(e){
	alert('')
}
function countDecimals(value) {
			if (Math.floor(value) !== value)
				return value.toString().split(".")[1].length || 0;
			return 0;
		}

var RM_ResourceDisplayFieldType;
var ResFilter = [{

Display: true,
Formula: null,
FormulaNumber: 0,
ID: 0,
Id: 0,
ProjectFilter: "ResourceIsGeneric",
ProjectFilterValue: null,
Title: "Resource Filter",
}];
var Inactive_Res = [];
var ResFilterArr = [];
function getd(){
	Inactive_Res = [];
$('.Fil').hide();


       //locationres = mainResordata;//getAjex(urlRM);
	  
	    var urlodataR = azurewebsites+"/api/Allocation/SPWithSinglePara/AG_ResourceList_All/123"
		var getodataRC = getAjex(urlodataR)
    // var getodataRC = getAjex(urlodataR);
	 globalRes = getodataRC;
		var sm = {}
		    sm.value =[] //ResourceId
		 getodataR=sm
	  for (var j = 0; j < getodataRC.length; j++) {
				//for (var i = 0; i < locationres.length; i++) {
					   //if(locationres[i].Title == getodataRC[j].ResourceName){
						//if(locationres[i].ResourceID == getodataRC[j].ResourceId){
							if(getodataRC[j].ResourceIsActive == "True"){
						    	getodataR.value.push(getodataRC[j]);
								
							}
							else{
								var rn = getodataRC[j].ResourceIsActive;
						        var ri = getodataRC[j].ResourceID
								var rt = getodataRC[j].Title
								Inactive_Res.push({"ResourceId":ri,"Title":rt,"ResourceIsActive":rn})
								//Inactive_Res.push(locationres[i].Title)
							}
						//}
				 // }
				 
		  }
	 keysOdataR = Object.keys(getodataRC[0]);
 
	    var urlM = siteAbsoluteUrl+"/_api/web/lists/getByTitle('RM%20App%20Settings')/items?$top=4998&$select=ID,Formula,FormulaNumber,Title,ProjectFilter,Display,ProjectFilterValue"//,FliterAndOr"
		 var resM = getAjex(urlM);
		 
 var RF = []
 RM_ResourceFiltername =[]
ResFilter = [];
 ResFilterArr = [];
 RM_ResourceFilter =[]
		 
		 $.each(resM.value, function (indx, MGrid) {					
					if(MGrid.Title == 'Chat'){	
								RM_Chat=MGrid.Display
					}
					if(MGrid.Title == 'Auto Save'){	
								PM_AutoSave=MGrid.Display
					}
					
					
					if(MGrid.Title == 'Delete'){	
								RM_Delete=MGrid.Display
					}
					if(MGrid.Title == 'Allocation Commitment'){	
								RM_Commit=MGrid.Display
					}	
					if(MGrid.Title == 'Allocation Rejection'){	
								RM_Reject=MGrid.Display
					}
					
					/*if(MGrid.Title == 'Resource Filter'){
								if(MGrid.Display){
									//if(keysOdataR.indexOf(MGrid.ProjectFilter) != -1){
										RF.push(MGrid)
									//}
								}
					}
					if(MGrid.Title == 'Resource Display Field'){
						if(MGrid.Display){						
							RM_ResourceDisplayField = MGrid.ProjectFilter.replace(/\s+/g, '');
						}
					}*/
					
					if(MGrid.Title == 'Resource Filter'){
						if(MGrid.Display){
							if(ResFilterArr.indexOf(MGrid.ProjectFilter)){
								ResFilterArr.push(MGrid.ProjectFilter);
								ResFilter.push(MGrid)
							}
						}
						if(ResFilter.length > 0){
							ResFilter.sort(function(a, b) { 
							  return a.FormulaNumber - b.FormulaNumber
							});	

						}
					}
					if(MGrid.Title == 'Resource Display Field'){
						if(MGrid.Display){						
							RM_ResourceDisplayField = MGrid.ProjectFilter.replace(/\s+/g, '');
							RM_ResourceDisplayField_N = MGrid.ProjectFilter;
							RM_ResourceDisplayFieldType = MGrid.ProjectFilterValue;
						}
					}
			});
		  RF.sort(function(a, b) { 
				  return a.FormulaNumber - b.FormulaNumber;
				});
		for (j = 0; j < RF.length; j++) {
			if(keysOdataR.indexOf(RF[j].ProjectFilter.replace(/\s+/g, '')) != -1){
				if(RM_ResourceFilter.length <4){
					RM_ResourceFiltername.push(RF[j].ProjectFilter)
					RM_ResourceFilter.push(RF[j].ProjectFilter.replace(/\s+/g, ''))
				}
			}
		}
		for (var i = 0; i < getodataR.value.length; i++) {
				for (var j = 0; j < RM_ResourceFilter.length; j++) {
						var f = RM_ResourceFilter[j]
						if(getodataR.value[i][f] == null){
							getodataR.value[i][f] ="Empty"
						}						
				  }
		  }
		  
		  if(ResFilter.length ==0){
			  $('.DreEnd').hide();
		  }
			
			globalValDropFilter = getodataR.value;
			/*var dataSourceF = new kendo.data.DataSource({
  data: RM_ResourceFilter
});
var multiselectT = $("#FilterResources").data("kendoMultiSelect");
multiselectT.setDataSource(dataSourceF); */


$('.DD1').hide();
$('.DD2').hide();
$('.DD3').hide();
$('.DD4').hide();
$('.DD5').hide();

	
			
			 

	


	 GetData();
}



var getAjexRes =function(URL){ 
	var data;
	$.LoadingOverlay("show");
	  $.ajax({
			  url: URL,
			  type: 'GET',
			  async: false,
			  processData: false,
			  cache: false,  
			  contentType: false,
			  dataType: 'json',
			//  success: onQuerySucceeded,
              //error: onQueryFailed
			 success: function (success) {
				   		 $.LoadingOverlay("hide");	 
					data = success
					
			  },
			  error: function (error) {
				   $.LoadingOverlay("hide");
					data= error;
					
			  }
		  });
		 
  return data;

}
var getAjexResT =function(URL){ 
	var data;
	$.LoadingOverlay("show");
	  $.ajax({
			  url: URL,
			  type: 'GET',
			  async: false,
			  processData: false,
			  cache: false,  
			  contentType: false,
			  dataType: 'json',
			//  success: onQuerySucceeded,
              //error: onQueryFailed
			 success: function (success) {
					$.LoadingOverlay("hide");				 
					data = success;		
					respT = JSON.parse(data);
									
			  },
			  error: function (error) {
				   $.LoadingOverlay("hide");
					data= error;
					
			  }
		  });
		 
 // return data;
  }
  var respT = [];
 var getAjex =function(URL){ 
	var data;
	// $.LoadingOverlay("show");
	  $.ajax({
			  url: URL,
			  type: 'GET',
			  async: false,
			  processData: false,
			  cache: false,  
			  contentType: false,
			  dataType: 'json',
			//  success: onQuerySucceeded,
              //error: onQueryFailed
			 success: function (success) {
				   		 $.LoadingOverlay("hide");	 
					data = success
					
			  },
			  error: function (error) {
				   $.LoadingOverlay("hide");
					data= error;
					
			  }
		  });
		 
  return data;

}
var savedata = function(SaveEngData,url){
	var data;
	 var allData = JSON.stringify(SaveEngData);
	  $.LoadingOverlay("show");
                 $.ajax({
                     type: "POST",
                     url: url,
                     data: JSON.stringify(allData),
                     contentType: "application/json; charset=utf-8",
                     dataType: "json",
                     success: function (data) {					
						//return data
						$.LoadingOverlay("hide");						
						Cancel()
						//GetData()
						getd()
						 
					},
					error: function(error) {
						 $.LoadingOverlay("hide");
				  }
					 
			 });
}

var monthNames = [
                      "Jan", "Feb", "Mar",
                      "Apr", "May", "Jun", "Jul",
                      "Aug", "Sep", "Oct",
                      "Nov", "Dec"
         ];
		 var gridID=$("#PMLoadgrid");
var drpResID=$("#drp_resources");
var resorceListId=$("#resorceList");
function resorceDrop(){
	var resData=[];
	for (j = 0; j < globalValDrop.length; j++) {
	  gridID.find('tbody').find('tr').each(function(i){
		var resrID =gridID.find('td').eq(1).text();
        if(resrID != globalValDrop[j].ResourceId){		
	      var ri = globalValDrop[j].ResourceId
		  var rt = globalValDrop[j].Resourcename;
		  //resData.push({"text":rt,"value":ri})
		  resData.push({"lable":rt,"value":ri})
		}
	  });
	}
	drpResID.multiselect({
      includeSelectAllOption: true,
      enableFiltering:true,
      includeFilterClearBtn: true,
	  numberDisplayed: 0,
	  enableCaseInsensitiveFiltering:true,
	  nonSelectedText:'Select Resource',
	  nSelectedText: 'Resource',
	  allSelectedText: 'Resource',
	  selectAllValue: 'All',
	  templates: {
        filter: '<li class="multiselect-item filter"><div class="input-group"><input class="form-control multiselect-search" type="text"></div></li>',
      },onDropdownShown: function(event) {
		if($("div.open").find('ul.multiselect-container div.buttonOpt').length==0){
		  $("div.open").find('ul.multiselect-container').append('<li class="multiselect-item multiselect-buttons"><div class="buttonOpt"><input type="button" value="Clear" id="resReset" class="multiselect-reset"/><input type="button" value="Apply" id="resApply" class="multiselect-apply"/></div></li>');
		}
      }
	});
	drpResID.multiselect('dataprovider', resData);
  }
  
function CreteEng (){
	 var gridDataArray = $('#NewItemsgrid').data('kendoGrid')._data;
	   var SaveEngData = [];
	   if(gridDataArray.length != 0){
	   var projectcode = getParameterByName('projuid');
		  for (i = 0; i < gridDataArray.length; i++){
			  
			  var obj = {};
				 obj.Description = 'CODE TEST';
				 obj.Projectuid = projectcode;
				 obj.Projectname = GProjectName;
				 obj.Resourceuid = gridDataArray[i].ID;
				 obj.Resourcename = gridDataArray[i].Resourcename;
				 obj.Role = '';
				 obj.Start = (monthNamesFull.indexOf(gridDataArray[i].Startdate.split(' ')[0]) + 1) + "/05/" + gridDataArray[i].Startdate.split(' ')[1];
				 obj.Finish = (monthNamesFull.indexOf(gridDataArray[i].Enddate.split(' ')[0]) + 1) + "/05/" + gridDataArray[i].Enddate.split(' ')[1];
				 obj.Unit = gridDataArray[i].units;
				 obj.Status = "Committed";
				 SaveEngData.push(obj);
		   }
		   
		   var url = azurewebsites+"/api/Allocation/AddTask";
		   var getSaveRes = savedata(SaveEngData,url)
		   debugger
		   
	   }
	  
}


function Cancel (){
	 var e =[]
	datagrid(e);
	 $('#NewItemsgrid').empty()
	 $('.cEngNewLen').hide()
	$('.cEngView').show()
	$('.cEngNew').hide()
	$('.gCreateRefresh').show()
	$('#btn_cancel').hide()
	 arraySec=[]
	 
	
}

function GetData(){
    $.LoadingOverlay("show");
	$("#MainDiv").hide();
$('#btn_MSaveEngagement').hide();
gridchanged = false;
if($('input[title="Project Name"]').length ==0){			
			setTimeout(function(){
				let grid = gridID.data('kendoGrid');
				 grid.setOptions({
					editable: false
				});
				/*grid.hideColumn(3); */
				},1000);
		}
		
	$('.gCreateRefresh').show()
	$('#btn_cancel').hide()
	
  var YearS= $("#start").val().split(' ')[1];
  var MonthS= monthNamesFull.indexOf($("#start").val().split(' ')[0]);
  
  var YearF= $("#end").val().split(' ')[1];
  var MonthF= monthNamesFull.indexOf($("#end").val().split(' ')[0]);

  var val1 =new Date(YearS,MonthS,5);
  var val2 =new Date(YearF,MonthF,5);
 /*  globalStrtDt = val1;
  globalFinDt = val2; */
	var val3 = new Date();
  var startDate = val1.getMonth() + 1 + ' ' + val1.getFullYear();
  var EndDate = val2.getMonth() + 1 + ' ' + val2.getFullYear();
  var WelcomeDate = val3.getMonth() + 1 + ' ' + val3.getFullYear();
  var projectcode = getParameterByName('projuid');
  
   var url = azurewebsites+"/api/AllocationTimePhasewithComment/"+projectcode+'/'+startDate+'/'+EndDate//azurewebsites+"/api/Allocation/"+projectcode+'/'+startDate+'/'+EndDate

   var urlT = azurewebsites+"/api/AllocationTimePhasewithEmpty/"+projectcode+'/'+WelcomeDate+'/'+WelcomeDate
   var resT = getAjexResT(urlT);
	var res = getAjexRes(url);
	paageLoad(res)					
	//resetDataLU();
    $.LoadingOverlay("hide");
}
/* var globalStrtDt = '';
var globalFinDt = ''; */
var AllResourceList;
var totalarray;
var dataRList;

function getUnique(array){
	 var uniqueArray = [];
        
        // Loop through array values
        for(i=0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
}
var getResources;
var GetListR;
var UListnames =[]
 function CEngagementPgae(){    

  
       //  $('#start_datepicker').val('')
       //  $('#end_datepicker').val('')
        // $('#txt_unit').val('')
       // $('.cEngView').hide()	   
	   $('.gCreateRefresh').hide()
	    
		//$(".chosen-select").val('').trigger("chosen:updated");
		//$("#drp_resources").text("");
         var restype = $("#chkResourcetype").is(":checked");
         var objResource=[];	
	     var radioGNBValue = $("input[name='GNB']:checked").val();	
		 var userID   = _spPageContextInfo.userId;//975
		// var url = siteAbsoluteUrl+"/_api/web/lists/getByTitle('RM%20App%20Resources')/items?$top=4998&$select=ID,Title,ResourceIsGeneric,ResourceIsActive,ResourceID,PrimaryJobRole,Resource_x0020_Manager/Id,Resource_x0020_Manager/Name,Resource_x0020_Manager/Title&$expand=Resource_x0020_Manager/Id&$orderby= Title asc"//&$filter=Resource_x0020_Manager/Id eq "+userID
		 var strOptions="";
		 var usersfil = []
	     var uniqueuser;
		 for (var j = 0; j < totalarray.length; j++) {
				 usersfil.push(totalarray[j].Resourceuid);
				 var uniqueSet = new Set(usersfil);
				// uniqueuser = Array.from(uniqueSet);
				  //Array.from(uniqueSet);

			 }
			 uniqueuser =  getUnique(usersfil);
        var res = AGGetProject;
         //var res = mainResordata;M//getAjex(url);
		 //GetListR = res;M//.value
		 globalValDrop = []
			for (j = 0; j < globalValDropFilter.length; j++) {
				if(uniqueuser.indexOf(globalValDropFilter[j].ResourceId) == -1){
					globalValDrop.push(globalValDropFilter[j])
				}
			}		 
		 getResources = res;//.value; 
		objResource = res;//.value; 
		dataRList = []; 
		//console.log(objResource.length)
		 if(uniqueuser != undefined){
			for( var i=objResource.length - 1; i>=0; i--){
				// for (i = 0; i < objResource.length; i++) {
						objResource[i].Role = objResource[i].PrimaryJobRole
							objResource[i].Name = objResource[i].Title
							objResource[i].Id = objResource[i].ResourceID	
				      dataRList.push(objResource[i])
					for( var j=0; j<uniqueuser.length; j++){
							//objResource[i].IsGeneric = objResource[i].ResourceIsGeneric == "False" ? false:true
													
						if(objResource[i] && (objResource[i].Id === uniqueuser[j])){
							//console.log(objResource[i].Name +'|'+uniqueuser[j]  +'|'+ i)
							objResource.splice(i, 1);
						}
					}
				}			
				
			}
			else{
				for( var i=objResource.length - 1; i>=0; i--){
					// for (i = 0; i < objResource.length; i++) {
					dataRList.push(objResource[i])
							//objResource[i].IsGeneric = objResource[i].ResourceIsGeneric == "False" ? false:true
							objResource[i].Role = objResource[i].PrimaryJobRole
							objResource[i].Name = objResource[i].Title
							objResource[i].Id = objResource[i].ResourceID										
				   }
			}
			
		//var resNew = getAjex(url);
		 //getResources = mainResordata;M//resNew.value; 
		 getResources = AGGetProject;
		AllResourceList=objResource;
		
		
		var newdata = []
		var tydata = []
		for (j = 0; j < datalength.length; j++) {
			if(uniqueuser.indexOf(datalength[j].Resourcename) == -1){
				newdata.push(datalength[j])
				if(tydata.indexOf(datalength[j].ResourceIsGeneric) == -1){
						tydata.push(datalength[j].ResourceIsGeneric)				
				}
			}				
			
		}
		
		for (j = 0; j < AllResourceList.length; j++) {
				if(AllResourceList[j].ResourceIsActive == 'True'){
					if(tydata.indexOf(AllResourceList[j].ResourceIsGeneric) == -1){
							tydata.push(AllResourceList[j].ResourceIsGeneric)				
					}	
				}
			
		}
		console.log(tydata)
		console.log('4749')
		/*if(tydata.length ==1){
			for (j = 0; j < tydata.length; j++) {
				if(tydata[j] == 'False'){
						
						var dataSourceType = new kendo.data.DataSource({
								  data: ['Named'],
								});
							
						var multiselect = $("#typeIsNamed").data("kendoMultiSelect");
						multiselect.setDataSource(dataSourceType);
				}
			}
		}*/
		
		
			   for (j = 0; j < newdata.length; j++) {
				if (newdata.length > 0) {
						//if (restype && objResource[j].IsGeneric == true) {
							//strOptions = strOptions + "<option  value='" + newdata[j].ResourceId + "' >" + newdata[j].ResourceName + "</option>";
						/*}
						if (!restype && objResource[j].IsGeneric == false) {
							strOptions = strOptions + "<option  value='" + objResource[j].Id + "' >" + objResource[j].Title + "</option>";
						}*/
						var ri = newdata[j].ResourceId
		                var rt = newdata[j].Resourcename;
		                Res_data.push({"label":rt,"value":ri});
					}
				}
			//$("#drp_resources").data("kendoMultiSelect").setDataSource(Res_data);
         //strOptions="<option  value=''></option>" + strOptions;
        // $("#drp_resources").text('');
        // $("#drp_resources").append('').trigger('chosen:updated');
         //$(".chosen-select").chosen({no_results_text: "Oops, nothing found!",width: "17%",});
		//	 $(".chosen-select,.chosen-multiple-select").chosen({search_contains: true});
		$('.cEngNew').show()
		var cob = []
		datagrid (cob)
	    arraySec=[]
		// dynamicgriddatadrop()
		//callgriddatadrop()
		$('#NewItemsgrid').empty()
		$('.cEngNewLen').show()
		if(pagechk){
			
		}
		if($('input[title="Project Name"]').length ==0){			
			$('.cEngNewLen').hide();
			$('#ResourceCount').html(newdata.length)
		}else{	
      
			if(pagechk){
				
				pagechk =false;				
				gload= true;
				//Resload(globalValDrop)
			   createResourceFilterdropdowns();
			   resorceDrop();
			  // Resloadpp(globalValDrop)
			   $('td[name="td_filter"]').show();
			  
			}
			else{
			  // Resload(globalValDrop)
			  if(addDelete){
				  addDelete =false;
			    selectedTypeFilterDropdown();
			  }
			}
		}
		$('#btn_cancel').show()
		
 }
 var gload= false
 var addDelete =false;
 
 
 //var keynames = []
	 function bindValue() {
                 $("#txt_unit").val($("#drp_commitment").val());
		 }
		 
	 function resetDataLU(){
             var restype = $("#chkResourcetype").is(":checked");
            drpResID.text("");
             var strOptions = "";
             if (AllResourceList.length > 0) {
               //  var rowdata = AllResourceList.split('|')
         var rowdata = AllResourceList;
                 for (j = 0; j < rowdata.length; j++) {
                     if (rowdata.length > 0) {
                          if (restype && rowdata[j].ResourceIsGeneric == 'True') {
                                   // strOptions = strOptions + "<option  value='" + rowdata[j].Id + "' >" + rowdata[j].Name + "</option>";
								   var ri = rowdata[j].Id
		                var rt = rowdata[j].Name;
		                Res_data.push({"label":rt,"value":ri});
                                }
                                if (!restype  && rowdata[j].ResourceIsGeneric == 'False') {
                                    //strOptions = strOptions + "<option  value='" + rowdata[j].Id + "' >" + rowdata[j].Name + "</option>";
									var ri = rowdata[j].Id
		                var rt = rowdata[j].Name;
		                Res_data.push({"label":rt,"value":ri});
                                }
                                
                     }
         
                 }
				 		//$("#drp_resources").data("kendoMultiSelect").setDataSource(Res_data);
                  /*strOptions="<option  value='0'>Select Resource</option>" + strOptions;
                 $('#drp_resources').append(strOptions).trigger('chosen:updated');;
				 // $(".chosen-select").chosen({no_results_text: "Oops, nothing found!",width: "17%",});
				   $(".chosen-select,.chosen-multiple-select").chosen({search_contains: true});*/
             }
			 callgriddatadrop();
         }	 
		 
	function getRole(data) {
		//debugger
		//return data.items[0].Role;       
	}
	function getRoleWithName(data){
		//debugger
		if(data.items[0].Role == null || data.items[0].Role == ''){
			return "_"+data.items[0].Name;
		}
		else{
			return data.items[0].Role+data.items[0].Name;
		}		
	}
	  
	  function getClass(data){
		//console.log(data);
		if(data <= 0 || data >= 100){
		 return "critical";
		}else{
			return "ok";
		}
	}
	function findOdd(para) {
  var count = {};
  para.forEach(function(para) {
  count[para] = (count[para] || 0) + 1;
  });
  return count;
}
	function getClassfolter(data){
		//console.log(data);
		if(data < 0){
		 return "critical";
		}
		else if(data == 0){
		 return "green";
		}
		else if(data >= 100){
		 return "green";
		}else{
			return "ok";
		}
	}
		 var Sectotalarray;
	var JsonFor
	var allocationStatusT = [];
	   function editNumber(container, options) {
                  $('<input data-bind="value:' + options.field + '"/>')
                      .appendTo(container)
                      .kendoNumericTextBox({
                         spinners : false,
						  min: 0
                      });
              }
			  
	var Rpalcececk;
	var Sectotalarray;
	var JsonFor;
	var newurlP = ""
	var newgetProjectsdatainfo;
	var allocationStatus = []
	var gridcolums = []
	var Globalresponded = [];
	var GlobalresName = [];
	var inactivUserIdn = false;
	var inactivUserIdn3 = false;
	function paageLoad(response,a){
		//$.LoadingOverlay("show");
		//globalfilterI = [];
		allocationStatusT = [];
		
	var resP = resGetProject;//getAjex(urlP);		
	var getProjectsdatainfo = resP;//.value;
		
		JsonFor = response;		
		$('.cEngView').show()
		$('.cEngNew').hide()
		response = JSON.parse(response);
		var newAr = [];
		
		/* if(respT.length == 0){
			if($('input[title="Project Name"]').length ==0){	
				$("#Welcomepage").show();
				$(".cEngView").hide();
			}
		} */
		
		
		for (var i = 0; i < response.length; i++) {	
			var obj = {};
			var objj = {};
			for(var key in response[i]) {
				if(key.indexOf('_Status') == -1){
				   obj[key] =  response[i][key];
				}
				else{
					objj[key] =  response[i][key];
				}
			}
			objj.AllocationUID = response[i].AllocationUID;
			newAr.push(obj);
			allocationStatusT.push(objj);			
		}
		response = newAr;
		
		totalarray = response;
		CEngagementPgae()
		if(respT.length == 0){
			if($('input[title="Project Name"]').length ==0){	
				$("#Welcomepage").show();
				$(".cEngView").hide();
			}
		}
		if($('input[title="Project Name"]').length !=0){
			$("#MainDiv").show();
		}
		if(response.length == 0){
		  gridID.empty();
		  gridID.hide();
		$('#MainDiv').css('border-bottom-color','white');
		  if($('input[title="Project Name"]').length ==0){			
				/* $("#Welcomepage").show();
				$(".cEngView").hide(); */			           
          }return;	
		}
		else{
			$('#MainDiv').css('border-bottom-color','#a3d0e4');
		}
		for (var i = 0; i < response.length; i++) {			
				/* for (var j = 0; j < dataRList.length; j++) {
					//console.log(response[i].Resourcename +'|'+ dataRList[j].Title)
					if(response[i].Resourcename == dataRList[j].Title){
					        response[i].Role = dataRList[j].PrimaryJobRole;
					  }					
			   }			 */
			   var item = globalRes.filter(function(x){
							return x.ResourceId == response[i].Resourceuid
						});
			if(item.length != 0){
				if(item[0]['Display1'] != undefined){
					
					var dachk
					if(RM_ResourceDisplayFieldType =="Number" || RM_ResourceDisplayFieldType == "number"){
									 dachk =item[0]['Display1'] != '' && item[0]['Display1'] != 0 && item[0]['Display1'] != null ? parseInt(item[0]['Display1']):"0";
									response[i].Role = response[i].Resourcename+" ("+dachk+")";
									}
									else if(RM_ResourceDisplayFieldType =="Currency" || RM_ResourceDisplayFieldType == "currency"){
											 dachk =item[0]['Display1'] != '' && item[0]['Display1'] != 0 && item[0]['Display1'] != null ? formatter.format(item[0]['Display1']):"$0";
											response[i].Role = response[i].Resourcename+" ("+dachk+")";
										} 
										
										else if(Object.is(parseInt(item[0]['Display1']),NaN) == false || Object.is(parseInt(item[0]['Display1']),NaN) == "false")
										{
											var val = item[0]['Display1'] != null && item[0]['Display1'] != '' ?parseFloat(item[0]['Display1']):0;
											var lengthN = countDecimals(val)
											response[i].Role =   response[i].Resourcename+" ("+val+")";
										}										
									else{
										dachk = item[0]['Display1']
					
									response[i].Role = response[i].Resourcename+" ("+dachk+")";
									}
					
					Object.assign(response[i], {originalRole:dachk});
					//response[i].ResourceMaxUnits =resReName[j].ResourceMaxUnits
					/* if(sortingApply && (sortingType == 3 ||sortingType == 4)){
							if(item[0][RM_ResourceDisplayField] != null){
								response[i].Role = item[0][RM_ResourceDisplayField]+"|"+ response[i].Resourcename+" ("+item[0][RM_ResourceDisplayField]+")";
							}
							else{
								response[i].Role = "_|"+ response[i].Resourcename+" ("+item[0][RM_ResourceDisplayField]+")";
							}
							
						} */
				}
				else{
					response[i].Role = response[i].Resourcename
					Object.assign(response[i], {originalRole: ''});
					/* if(sortingApply && (sortingType == 3 ||sortingType == 4)){
						response[i].Role = "_|"+response[i].Resourcename
					} */
				}
			}
			else{
				response[i].Role = response[i].Resourcename
				Object.assign(response[i], {originalRole: ''});
				/* if(sortingApply && (sortingType == 3 ||sortingType == 4)){
						response[i].Role = "_|"+response[i].Resourcename
					} */
			}
		  }
		/*for (var i = 0; i < response.length; i++) {			
				for (var j = 0; j < resReName.length; j++) {					
					 response[i].Role =resReName[j].PrimaryJobRole
					 if(response[i].Projectname == null || response[i].Projectname == ''){
							if(response[i].Resourceuid == resReName[j].ResourceId){
								response[i].Projectname =resReName[j].Title						
								response[i].Resourcename ='No Allocation'
							}
						}
			   }
				
		}*/
		
	/*	for (var i = 0; i < response.length; i++) {			
				for (var j = 0; j < resReName.length; j++) {					    
					   if(response[i].Projectname == null || response[i].Projectname == ''){
							if(response[i].Resourceuid == resReName[j].ResourceId){
								response[i].Projectname =resReName[j].Title						
								response[i].Resourcename ='No Allocation'
							}
						}
						
						if(response[i].Projectname == resReName[j].Title){
							response[i].Role =resReName[j].PrimaryJobRole
						}
			     }				
		}*/
			
		if($('input[title="Project Name"]').length ==0){			
			RM_Delete= false;
			//RM_Chat = false;
		}
		
		Sectotalarray = response;
		
		var data = []		
		var headers =["Resourcename",];
		var AValue = [ { field: "Resourcename", aggregate: "count" }]
		
		
		var datasum=["#= value # (#=getRole(data)#)</td><td></td>"]		
				if(a == '1'){
					datasum=["#= value # (#=getRole(data)#)</td><td> </td>"]
				  }
		/* if(sortingApply && (sortingType == 3|| sortingType == 4)){
				datasum=["#=getRoleWithName(data)# (#=getRole(data)#)</td><td></td>"]		
				if(a == '1'){
					datasum=["#=getRoleWithName(data)# (#=getRole(data)#)</td><td> </td>"]
				  }
		} */
	    var keys = Object.keys(response[0]);
		var keysar = [];
		for(i=0;i<keys.length;i++){
			if(keys[i] != 'originalRole'){
				keysar.push(keys[i]);
			}
		}
		
		    keysHeader = Object.keys(response[0]);
			keys = keysar;
			keysHeader = keysar;			
			 for (var i = 13; i < keys.length; i++) {
				/* if(keys[i] == 'originalRole'){
					continue;
				} */
				 headers.push(keys[i]);
				  var col = "<td class='#=getClass(aggregates."+keys[i]+".sum)#'>#:aggregates."+keys[i]+".sum #%</td>"
				  if(keys.length == i+1){
				     col = "<td class='#=getClass(aggregates."+keys[i]+".sum)#'>#:aggregates."+keys[i]+".sum #%"
				  }
				 AValue.push({ field: keys[i], aggregate: "sum" }),
				 datasum.push(col);
			 }
				datasum = datasum.toString() 
				for (var i = 0; i < keys.length; i++) {
					datasum = datasum.replace(',','')
				}
				//datasum =
//"Projectname: #= value #</td><td><span style='float:left;color:blue;'>#:aggregates.Mar_2020.sum #</td><td><span style='float:left;color:blue;'>#:aggregates.Feb_2021.sum #</td><td><span style='float:left;color:blue;'>#:aggregates.Apr_2020.sum #</td><td><span style='float:left;color:blue;'>#:aggregates.Aug_2020.sum #</td><td><span style='float:left;color:blue;'>#:aggregates.Dec_2020.sum #</td><td><span style='float:left;color:blue;'>#:aggregates.Jan_2021.sum #</td><td><span style='float:left;color:blue;'>#:aggregates.Jul_2020.sum #</td><td><span style='float:left;color:blue;'>#:aggregates.Jun_2020.sum #</td><td><span style='float:left;color:blue;'>#:aggregates.May_2020.sum #</td><td><span style='float:left;color:blue;'>#:aggregates.Nov_2020.sum #</td><td><span style='float:left;color:blue;'>#:aggregates.Oct_2020.sum #</td><td><span style='float:left;color:blue;'>#:aggregates.Sep_2020.sum #"
			    var seen = {};
				var	ret_arr;
				if(a == '1'){
					ret_arr = [{
						field: "Projectname",
						//editable: true,
						title: 'Project Manager',
						format: "",
						width: 300,
						editor: formTypeDropDownEditor,
						//hidden: true,
						// groupHeaderTemplate:datasum,
						 filterable: {
							multi: true,
							search: true
							}
						},{
						field: "Resourceuid",
						editable: true,
						title: 'Resourceuid',
						format: "",
						width: 300,
						hidden: true,
						// groupHeaderTemplate:datasum,
						},{
						field: "Role",
						editable: true,
						title: 'Resource',
						format: "",
						width: 300,
						//groupFooterTemplate: "<span style='float:right;'>Availability</span>",
						filterable: {
							multi: true,
							search: true
							}
						}];
				}else{
					
					 if(RM_Chat &&  RM_Delete){
						
					ret_arr = [{
						field: "Projectname",
						editable: true,
						title: 'Project Manager',
						format: "",
						width: 300,
						hidden: true,
						// groupHeaderTemplate:datasum,
						},{
						field: "Resourceuid",
						editable: true,
						title: 'Resourceuid',
						format: "",
						width: 300,
						hidden: true,
						// groupHeaderTemplate:datasum,
						},{
						field: "Role",
						editable: true,
						title: 'Resource',
						format: "",
						width: 300,
						//groupFooterTemplate: "<span style='float:right;'>Availability</span>",
						filterable: {
							multi: true,
							search: true
							}
						},{
								field:'Chat',
								title: '.',
									headerTemplate:'<label style=" color:#f3f3f4 ;" class=""></label>',
								filterable: false,
								editable: true,
								width: 30,
								template: function(dataItem) {
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
										 value =  '<span class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										if(dataItem.CommentRead =='1'){
											 value =  '<span id="'+dataItem.AllocationUID+'" class="pointer CIcolor" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										} 
									}

								  return value;
								}
								//template:'<span class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
								
						},{
								field:'Delete',
								title: '.',
									headerTemplate:'<label style=" color:#f3f3f4 ;" class=""></label>',
								filterable: false,
								editable: true,
								width: 30,
								template:'<span class="pointer" style="float: center;" onclick="DeleteItem()" title="Click to delete"><span class="k-icon k-i-trash	k-i-delete"></span></span>'
								
						},];
					 } else if(RM_Chat){
						 ret_arr = [{
						field: "Projectname",
						editable: true,
						title: 'Project Manager',
						format: "",
						width: 300,
						hidden: true,
						 groupHeaderTemplate:datasum,
						},{
						field: "Resourceuid",
						editable: true,
						title: 'Resourceuid',
						format: "",
						width: 300,
						hidden: true,
						// groupHeaderTemplate:datasum,
						},{
						field: "Role",
						editable: true,
						title: 'Resource',
						format: "",
						width: 300,
						groupFooterTemplate:function(dataItem) {
									var value = 0
								
									return "<span style='float:right;'>Availability </span>";
								
								 // return "<span style='float:right;'>Availability (Max :"+value.group.items[0].ResourceMaxUnits+"%)</span>";
								},
						
						//groupFooterTemplate: "<span style='float:right;'>Availability (Max Units:)</span>",
						filterable: {
							multi: true,
							search: true
							}
						},{
								field:'Chat',
								title: '.',
									headerTemplate:'<label style=" color:#f3f3f4 ;" class=""></label>',
								filterable: false,
								sortable: false,
								editable: true,
								width: 30,
								template: function(dataItem) {
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
										 value =  '<span class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										if(dataItem.CommentRead =='1'){
											 value =  '<span id="'+dataItem.AllocationUID+'" class="pointer CIcolor" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										} 
									}

								  return value;
								}
								/*template: function(dataItem) {
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value =  '<span class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
									}

								  return value;
								}	*/
								
								//template:'<span class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
								
						},];
					 }
					 else if(RM_Delete){
						ret_arr = [{
						field: "Projectname",
						editable: true,
						title: 'Project Manager',
						format: "",
						width: 300,
						hidden: true,
						 groupHeaderTemplate:datasum,
						},{
						field: "Resourceuid",
						editable: true,
						title: 'Resourceuid',
						format: "",
						width: 300,
						hidden: true,
						// groupHeaderTemplate:datasum,
						},{
						field: "Role",
						editable: true,
						title: 'Resource',
						format: "",
						width: 300,
						groupFooterTemplate:function(dataItem) {
								
									return "<span style='float:right;'>Availability </span>";
								
								 // return "<span style='float:right;'>Availability (Max :"+value.group.items[0].ResourceMaxUnits+"%)</span>";
								},
						
						//groupFooterTemplate: "<span style='float:right;'>Availability (Max Units:)</span>",
						filterable: {
							multi: true,
							search: true
							}
						},{
								field:'Delete',
								title: '.',
								headerTemplate:'<label style=" color:#f3f3f4 ;" class=""></label>',
								filterable: false,
								sortable: false,
								editable: true,
								width: 30,
								template: function(dataItem) {
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value = '<span class="pointer" style="float: center;" onclick="DeleteItem()" title="Click to delete"><span class="k-icon k-i-trash	k-i-delete"></span></span>'
									}

								  return value;
								}
								//template:'<span class="pointer" style="float: center;" onclick="DeleteItem()" title="Click to delete"><span class="k-icon k-i-trash	k-i-delete"></span></span>'
								
						},];
					}else
						{
						ret_arr = [{
						field: "Projectname",
						editable: true,
						title: 'Project Manager',
						format: "",
						width: 300,
						hidden: true,
						 groupHeaderTemplate:datasum,
						},{
						field: "Resourceuid",
						editable: true,
						title: 'Resourceuid',
						format: "",
						width: 300,
						hidden: true,
						// groupHeaderTemplate:datasum,
						},{
						field: "Role",
						editable: true,
						title: 'Resource',
						format: "",
						width: 300,
						groupFooterTemplate:function(dataItem) {
								
									return "<span style='float:right;'>Availability </span>";
								
								 // return "<span style='float:right;'>Availability (Max :"+value.group.items[0].ResourceMaxUnits+"%)</span>";
								},
						
						//groupFooterTemplate: "<span style='float:right;'>Availability (Max Units:)</span>",
						filterable: {
							multi: true,
							search: true
							}
						}];
					}
				}
				var fildata = []
				var titleLen = []
				for (var i = 13; i < keys.length; i++) {
					titleLen.push(keys[i].split("_")[1]);
				}
				
				var filterkey = findOdd(titleLen);
				var cont = 1
				if(keys.length == 13){
					for (var i = 13; i < keys.length; i++) {
					   if (!(keys[i].split("_")[1] in seen)) {
							fildata.push({
									field: keys[i],
									width: 65,
									title: keys[i].split("_")[0],
									filterable: false,
									editor: editNumber,
									//template: '#=' + keys[i] + '#%',
									 template: "#= (" + keys[i] + " == null) ? '0' : " + keys[i] + " #%",
									groupFooterTemplate: "<span class='#=getClassfolter(100-sum)#'>#= 100-sum #%</span>",
								})	
								//var fsd = [fildata]
								ret_arr.push({
									title: keys[i].split("_")[1],
								columns:fildata});
							}
					}
				}
				else{
				for (var i = 13; i < keys.length; i++) {
					if (!(keys[i].split("_")[1] in seen)) {
						var valcoutti = filterkey[keys[i].split("_")[1]]
						if(valcoutti != 1){
						cont = 1
						fildata = []
							fildata.push({
								field: keys[i],
								width: 65,
								title: keys[i].split("_")[0],
								filterable: false,
								editor: editNumber,
								//template: '#=' + keys[i] + '#%',
								 template: "#= (" + keys[i] + " == null) ? '0' : " + keys[i] + " #%",
								//groupFooterTemplate: "#= sum-100 #",
								groupFooterTemplate: "<span class='#=getClassfolter(100-sum)#'>#= 100-sum #%</span>",
							})
							ret_arr.push({
							title: keys[i].split("_")[1],
							columns: [fildata]});
						
						//ret_arr.push({title:keys[i].split("_")[1],colspan: cont});
						seen[keys[i].split("_")[1]] = true;
						}else{
							fildata = []
							fildata.push({
								field: keys[i],
								width: 65,
								title: keys[i].split("_")[0],
								filterable: false,
								editor: editNumber,
								 template: "#= (" + keys[i] + " == null) ? '0' : " + keys[i] + " #%",
								//template: '#=' + keys[i] + '#%',
								//groupFooterTemplate: "#= sum-100 #",
								groupFooterTemplate: "<span class='#=getClassfolter(100-sum)#'>#= 100-sum #%</span>",
							})
							ret_arr.push({
							title: keys[i].split("_")[1],
							columns: fildata});
						
						//ret_arr.push({title:keys[i].split("_")[1],colspan: cont});
						seen[keys[i].split("_")[1]] = true;
						}
						/*cont = 1
						fildata = []
							fildata.push({
								field: keys[i],
								width: 65,
								title: keys[i].split("_")[0],
								filterable: false,
								template: '#=' + keys[i] + '#%',
								//groupFooterTemplate: "#= sum-100 #",
								groupFooterTemplate: "<span class='#=getClassfolter(100-sum)#'>#= 100-sum #%</span>",
							})
							ret_arr.push({
							title: keys[i].split("_")[1],
							columns: [fildata]});
						
						//ret_arr.push({title:keys[i].split("_")[1],colspan: cont});
						seen[keys[i].split("_")[1]] = true;*/
						
					}
					else if ((keys[i].split("_")[1] in seen)) {
						cont++
						fildata.push({
								field: keys[i],
								width: 65,
								title: keys[i].split("_")[0],
								filterable: false,
								editor: editNumber,
								 template: "#= (" + keys[i] + " == null) ? '0' : " + keys[i] + " #%",
								//template: '#=' + keys[i] + '#%',
								groupFooterTemplate: "<span class='#=getClassfolter(100-sum)#'>#= 100-sum #%</span>",
							})							
						for (var j = 0; j < ret_arr.length; j++) {
							if(keys[i].split("_")[1] == ret_arr[j].title){
								ret_arr[j].columns =fildata;
							}
						}
					}
					
				}
				
	}
	fildata.push({
		field: keys[1],
		width: 10,
		title: 'UID',
		hidden: true
	},
	{
		field: 'Status',
		width: 10,
		title: 'Status',
		hidden: true} );
	/* ret_arr.push({field: AllocationUID,
								width: 65,
	title: "UID"}) */
		// var dynHeaders = gColumns(headers)
		/* for(i=0;i<response.length;i++){
			response[i].itemStatus =  response[i].Status
		} */
		response.filter(function (item, idx) {
			return item.AllocationStatus = item.AllocationUID+'^'+item.Resourcename;  //+'^'+item.Resourceuid+
			});
		/*response.filter(function (item, idx) {
			return item.Projectname = '<span>'+item.Projectname+'<br></span>'+'<span>Devloper</span>';  //+'^'+item.Resourceuid+
			});*/
		/*	response.filter(function (item, idx) {
				getProjectsdatainfo.filter(function (items, idxs) {
					//if(item.Projectuid.toLowerCase() == items.ProjectId.toLowerCase()){
					/*	return item.Resourcename = item.Resourcename+'('+items.ProjectNumber+')'; 
					}*/
		/*			if(item.Resourcename == items.ProjectName){
						var num = items.ProjectNumber != null?items.ProjectNumber:'*Blank'
						return item.Resourcename = item.Resourcename+' ('+num+')'; 
					}
				});
			});  */
			
			
			
		gridID.empty();
		gridID.show();
		$("#Welcomepage").hide();
		 var dataSourc = new kendo.data.DataSource({
			  data:response,
			 // group: { field: "Projectname" }
			   //group: { field: "Projectname", aggregates: AValue}
			   change: function(e) {
					//var data = this.data();
					if(e.action == 'itemchange'){
						gridchanged = true;
					}
					
				}
			});
			if(globalfilterI == null || globalfilterI.length == 0){
					
			}
			else if(globalfilterI.filters.length > 0){
				dataSourc._filter = globalfilterI;
				//ds._view = globalfilterV
			}
			RedataId = [];
		var grid = gridID.kendoGrid({
			dataSource: dataSourc,
			navigatable: true,
			change: function (e) {
						var cell = this.select();
						rowIndx = cell.closest('tr').index();
						 var dataItem = this.dataItem(cell.closest("tr"));
						if(DeletedataItem){
							DeletedataItem = false;
							var acheck =false;
							//if(dataIdPP.length !=0){
							var CROWUchanges = false
							if(dataIdPP.length !=0){								
								 $.each(dataIdPP, function (indx, AUID) {
									 if(AUID != dataItem.AllocationUID){
										 CROWUchanges = true;
									 }
								 })
							}
							if(CROWUchanges){
								acheck = confirm('Are you sure you want to delete this item?  You have unsaved changes.  Press OK to continue with your item deletion, which will lose any unsaved changes.  Press Cancel to cancel this item deletion.')
							}else{
								acheck =true;
							}
							if(acheck){
								
								
								if(dataItem.Resourcename != "No Allocation"){
								var Chktrue = confirm("Are you sure you want to delete this entry?");
									if(Chktrue){
										
											addDelete =true;
									  getItemID(dataItem)
									}
								}
							}
						}
						if(ChatdataItem){	
							ChatdataItem = false;
							if(dataItem.Resourcename != "No Allocation"){
							//var Chktrue = confirm("Are you sure you want to delete this entry?");
								//if(Chktrue){
								  sendSelectedEngagements(dataItem)
								//}
							}else{
								alert("No Allocation this entry?");
							}
						}
						/* if(cell.css("background-color") == 'rgb(19, 104, 140)'){
							if(rowIndx % 2 == 0){
								cell.css("background-color","white")
							}
							else{
								cell.css("background-color","#e6f2f8")
							}
						}						 */
				},
			edit: function (e) {
			 var inputHT=$("#PMLoadgrid td").height()-10;
			 $('#PMLoadgrid_active_cell').find('.k-input').css("height", inputHT);
			 $('#PMLoadgrid_active_cell').find('.k-input').css("margin-top", -6);
			 var backColor="white";
			 $('#PMLoadgrid_active_cell').find('.k-numeric-wrap').css("background-color", backColor);
			 $('#PMLoadgrid_active_cell').find('.k-numerictextbox').css("background-color", backColor);
			 $('#PMLoadgrid_active_cell').find('.k-numerictextbox').css("margin-top", -3);
			 
					if(e.model.Resourcename == "No Allocation"){
						e.model.Resourcename				  
						this.closeCell()
					}else{
						dataId.push(e.model.AllocationUID);
						RedataId.push(e.model.AllocationUID);
						PPID = e.model.AllocationUID;
						 var cell = this.select();
						   idxG = cell.closest("tr").index()+2
					       namePNam = $('#PMLoadgrid tr:eq(' +idxG + ') td:eq(2)').text()
						    iRes = $('#PMLoadgrid tr:eq(' +idxG + ') td:eq(2)').html().indexOf('Inactive Resource')
						 var input = e.container.find(".k-input");
						  input.keydown(function(){
							  dataIdPP.push(PPID);
							  if(iRes != -1){
								  $('#PMLoadgrid tr:eq(' + idxG + ') td:eq(2)').html(namePNam+'<span  style="padding-left: 10px;"class="k-icon k-i-error" style="float: center;" title="Inactive Resource"></span> <span style="color: orange;" title="You have unsaved changes" class="k-icon k-i-radiobutton-checked"></span>')
							  }else{							  
									$('#PMLoadgrid tr:eq(' + idxG + ') td:eq(2)').html(namePNam+'<span style="color: orange;" title="You have unsaved changes" class="k-icon k-i-radiobutton-checked"></span>')
							  }
						 });
						 Gdatavalstart =new Date($("#start").val())
						GdatavalEnd =new Date($("#end").val())
						setTimeout(function () {
							e.container.find("input").select();
						})
						e.container.css("background-image", "none");e.container.css("color", "#003f59");
						
						/* if(e.container.css("background-color") == 'rgb(19, 104, 140)'){
							e.container.css("background-color","none")
						} */
						/* if(e.container.css('background-color') != 'rgb(19, 104, 140)'){
							e.container.css("background-image", "none");e.container.css("color", "#003f59");
						}
						else{
							if(e.container.closest('tr').index() % 2 == 0){
							e.container.css("background-color", 'white');e.container.css("color", "#003f59");	
							}
							else{
							e.container.css("background-color", '#bbdceb');e.container.css("color", "#003f59");	
							}
							
						} */
					}
					//if(e.container.length != 0){e.container.css("background-image", "none");e.container.css("color", "#003f59");}
					
				},
			 save: function () {
                  var grid = this;
                  setTimeout(function () {
                    //grid.refresh();
					if(PM_AutoSave){
						saveFilterEngagements();
					}
                    //alert('');
                  }, 60000)
                },
			editable: true,
			selectable: "multiple, cell",
			//sortable: true,
			filterable: true,
			filter: function(e) {
				console.log(e);
				filteredGrid = true;
				globalfilterI = e.filter;
			},
			filterMenuInit: function(e) {
				 $('.k-animation-container').eq(1).show();				
				if($('.sortingtypeListitems').is(":visible")){
					$('.sortingtypeListanchor').click();
				}
				$('#PMLoadgrid_active_cell').find('a').click(function(e){
					if($('.sortingtypeListitems').is(":visible")){
						$('.sortingtypeListanchor').click();
					}
				});
				$('.k-reset.k-multicheck-wrap').find('li').each(function(x){
					$(this).find('[type="checkbox"]').css('margin-top','-3px')
				})
				return false;					
			  },
			resizable: true,
			// toolbar: ["cancel"],
			columns: ret_arr,
			dataBound: function(e){
					if(filteredGrid = true){
						globalfilterV = e.sender.dataSource._view
						filteredGrid = false;
					}
					var firstCell = e.sender.element.find(".k-grouping-row td:first-child");
					firstCell.attr("colspan", 2);
					commitAllocations();						
					//if(RM_Reject){rejectAllocations();}
					setInactiveResIcon();
					/* var mainDiv_height = $('#MainDiv').height()
					
					if($('input[title="Project Name"]').length ==0){
						if(ResFilter.length == 0){
							if($('#fullscreenmode').is(":visible")){
								mainDiv_height = mainDiv_height + 80.5;
							}
							else{
								mainDiv_height = mainDiv_height + 80.5; //80.5
							}
						}
						else{
							if($('#fullscreenmode').is(":visible")){
								mainDiv_height = mainDiv_height + 24;
							}
							else{
								mainDiv_height = mainDiv_height + 25;
							}
						}
					}
					else{
						if(ResFilter.length == 0){
							if($('#fullscreenmode').is(":visible")){
								mainDiv_height = mainDiv_height + 24;
							}
							else{
								mainDiv_height = mainDiv_height + 23; //80.5
							}
						}
						else{
							if($('#fullscreenmode').is(":visible")){
								mainDiv_height = mainDiv_height + 20;
							}
							else{
								mainDiv_height = mainDiv_height + 19;
							}
						}
					}
					
					$('.k-grid-header').css('top', mainDiv_height+'px'); */
					$("#PMLoadgrid .k-grid-content").css({
						//"overflow-y": "hidden"
					});
					/******** Freeze Column ********/
					
					
					
						loadMain();
					
					if($('th[data-title="Resource"]').find('div#sortingtypeList').length == 0){
						sortOptionConfig();
					}
					var headerRow = $('.k-grid-header-wrap ').find('thead').find('tr').eq(0);
					/*headerRow.find('th').eq(5).css("display","none");
                    var tableRow = $('.k-grid-header-wrap ').find('thead').find('tr').eq(1);
					tableRow.find('th').eq(0).css("display","none");
					$('.k-grid-content').find('tbody').find('tr').each(function(x){
					  $(this).find('td').eq(5).css("display","none");
					});*/
					if($('input[title="Project Name"]').length ==0){
						headerRow.find('th').eq(2).css('position','sticky') 
						headerRow.find('th').eq(2).css('left','0')
						$('.k-grid-content').find('tbody').find('tr').each(function(x){
							//debugger
							var td = $(this).find('td').eq(2)
							var bak = $(this).css('background-color')
							if(bak == 'rgba(0, 0, 0, 0)'){
								bak = 'white'
							}
							td.css('position','sticky') 
							td.css('left','0')
							td.css('background',bak) 
						})
					}
					else{
						var countYear = 2;
						headerRow.find('th').each(function(x){
							//debugger
							var result = /^-?\d+$/.test($(this).text());
							if(result){
							   countYear = $(this).index();
								return false;
							}
						});
						
						/* headerRow.find('th').eq(2).css('position','sticky') 
						headerRow.find('th').eq(2).css('left','0') */
						var sumHw = 0;
						headerRow.find('th:lt('+countYear+'):gt(1)').each(function(x){
							var td = $(this);
							td.css('position','sticky') 
							td.css('left',sumHw+'px') 
							sumHw = sumHw+parseFloat(td.css('width'));
							
						});
						
						$('.k-grid-content').find('tbody').find('tr').each(function(x){
							//debugger
							var sumCw = 0;
							var bak = $(this).css('background-color')
							if(bak == 'rgba(0, 0, 0, 0)'){
								bak = 'white'
							}
							$(this).find('td:lt('+countYear+'):gt(1)').each(function(y){
								var td = $(this);
								td.css('position','sticky') 
								td.css('left',sumCw+'px'); 
								td.css('background',bak);
								sumCw = sumCw+parseFloat(td.css('width'));
							})
							/* var td = $(this).find('td').eq(2)
							var bak = $(this).css('background-color')
							if(bak == 'rgba(0, 0, 0, 0)'){
								bak = 'white'
							}
							td.css('position','sticky') 
							td.css('left','0')
							td.css('background',bak)  */
						})
					}
			}
			 }).find("table").on("keydown", onGridKeydown);
		//}).data("kendoGrid");
			//$('#PMLoadgrid').width($(window).width()-226);
		//grid.bind("change", grid_change);
         if($('input[title="Project Name"]').length == 0){
							var grid = gridID.data("kendoGrid");
							grid.hideColumn(3);
						}
		 var ds = gridID.data("kendoGrid").dataSource;
			
			ds.sort({ field: "Resourcename", dir: "asc" });
			if(sortingApply && (sortingType == 0|| sortingType == 1)){
				ds.sort({ field: "Resourcename", dir: "asc" });
			}
			if(sortingApply && sortingType == 2 ){ //originalRole
				ds.sort({ field: "Resourcename", dir: "desc" });
			}
			if(sortingApply && sortingType == 3){
				ds.sort({ field: "originalRole", dir: "asc" });
			}
			if(sortingApply && sortingType == 4){
				ds.sort({ field: "originalRole", dir: "desc" });
			}
				
			dataId = [];
			dataIdPP = []
			$('.k-grid-content').animate({
					scrollTop: scrollTop
			
				})
			$('#PMLoadgrid .k-grid-content').scroll(function () { 
						scrollTop =$('.k-grid-content').scrollTop();
				});
			
					/*if(gload){						
						gload= false;
						 setTimeout(function () {
						Resloadpp(globalValDrop)
						}, 6000)
					}*/
					////////////////// Project Ribbon click ////////////////////
					$('.ms-cui-tt-span').eq(1).click();
					//$.LoadingOverlay("hide");
		$('.k-grid-filter').eq(2).click(function(x){
			if(!initailize_filter){
				if(gridchanged){
					$(".k-filter-menu.k-popup.k-group.k-reset.k-state-border-down").hide()
					alert('You have unsaved changes. Filtering your visible projects will lose these changes. Save your changes before applying a project filter.');		
				}
				else{
					//$(".k-filter-menu.k-popup.k-group.k-reset.k-state-border-down").show()
					//$('#PMLoadgrid').data("kendoGrid")._events.filterMenuInit[0](initailize_filter_e);
				}
			}
			else{
				
			}
			initailize_filter = false;
		});	
		
        $("#PMLoadgrid th,#Daterange").click(function(){ if($(this).text()!== "ProjectAscending by Resource Name Descending by Resource Name Ascending by Last Modified  Descending by Last Modified  " && $(this).text()!=="" ){ $('.ttesting').css("display","block");
              $('.backgroundBlur').fadeIn();
cstart = $('#start').val()
cend = $('#end').val()
              
              }})

							var boxwidth = $("#PMLoadgrid").css("width"); $(".mybox").css("width", boxwidth );



$("#PMLoadgrid th,#Daterange").hover(function(){ if($(this).text()!== "ProjectAscending by Resource Name Descending by Resource Name Ascending by Last Modified  Descending by Last Modified  " && $(this).text()!=="" ){ $(this).css("cursor","pointer");
              }})

							function Funoverlay(){  $.LoadingOverlay("show"); }

						    $(".OkbuttonDate").off("click");
$(".OkbuttonDate").click(async function () {
  var Isvalid = true;
  var previous = null;
  var Calert = false;

  var startDate = new Date($('#start').val()); // Convert start date string to a date object
  var endDate = new Date($('#end').val()); // Convert end date string to a date object

  if (startDate > endDate) {
    Isvalid = false;
  }

  if (Isvalid == true) {
    if (dataIdPP.length != 0) {
      Calert = confirm(
        "Are you sure you want to change your grid date range? You have unsaved changes. Press OK to continue with your grid date change, which will lose any unsaved changes. Press Cancel to cancel this grid date change."
      );

      if (Calert) {
        Funoverlay();
        await new Promise((resolve) => setTimeout(resolve, 100)); // add a small delay to ensure overlay is shown
        changeDateNew(startDate, endDate);
      }
    } else {
      Funoverlay();
      await new Promise((resolve) => setTimeout(resolve, 100)); // add a small delay to ensure overlay is shown
      changeDateNew(startDate, endDate);
    }
  }

  if (Isvalid == false) {
   alert("Invalid Date Range");
  }
});


  $(".crossi").click(function(){
       $("#start").data("kendoDatePicker").value(cstart);
$("#end").data("kendoDatePicker").value(cend);
          $('.ttesting').css("display","none");
              $('.backgroundBlur').fadeOut();
  })
	 
   sdate = $('#start').val();
   fdate = $('#end').val(); 
   sarr = sdate.split(" "); 
   farr = fdate.split(" "); 
   schar = sarr[0].split('');
   fchar = farr[0].split('');
   schar1 = sarr[1].split('');
   fchar2 = farr[1].split('');
   startMonthVal = schar[0]+schar[1]+schar[2];
   EndMonthVal = fchar[0]+fchar[1]+fchar[2];
  startYearVal = schar1[2]+schar1[3];
  EndYearVal = fchar2[2]+fchar2[3];
	$('#Daterange').text(startMonthVal +' 20'+startYearVal+ " - " + EndMonthVal +' 20'+EndYearVal )

$("#Daterangebox").css("left","91.5%");


	mainDiv_height = $('#MainDiv').height()

	$('.k-grid-header').css('top', (mainDiv_height)+'px');

		$("#MainDiv").show();
                  
	}
	var initailize_filter = false;
	var globalfilterI = [];
	var globalfilterV = [];
	var filteredGrid = false;
	var scrollTop = 0;
	var rowIndx;
	var idxG;
	var namePNam;
	var dataIdPP = []
	var PPID = null
	var iRes;
	
	function DeleteItem(){
		DeletedataItem = true;
		
	}
	
	function ChatItem(){
		ChatdataItem = true;
	}
	
	function getItemIDchat(data){
		alert(data.AllocationUID);
	}
	
	var myWindow = $("#window");

                    myWindow.kendoWindow({
                        width: "650px",
                        height: "340px",
                        title: "Messages History",
                        actions: ["Close"],
						resizable: false,
                    });
	function SendComents(){
			var singleObj = []; 
			var commentUser = $('#comment').val()			
			if(commentUser != null && commentUser != ''){
				var ModifiedBy =_spPageContextInfo.userDisplayName;
				var ModifiedbyLoginName = _spPageContextInfo.userLoginName;
				singleObj.push({'ID': 001, 'AllocationUID': UIDCopy, 'Comments': commentUser, 'Modifiedby': ModifiedBy, 'Modified':  "2018-08-19T08:39:09.22", 'ModifiedbyLoginName': ModifiedbyLoginName })
				
				var UpconJson = JSON.stringify(singleObj);
				debugger
				jQuery.ajax({
					type: "POST",
					url: azurewebsites+"/api/AllocationChat/SaveCommnets",
					data: JSON.stringify(UpconJson),
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					success: function (data) {
						$('#comment').val('')
						sendSelectedEngagementssecfun();
					},
					error: function(error) {
						console.log('Commented Failed')
					}
				});
			}
		}
		var NameCopy = null
		var UIDCopy = null;
		
	function ConvertDateToMMDDYYYY (dDate) {
			
			if (dDate != undefined) {
				if (dDate != null) {
					
					var months = new Array(12);
						months[0] = "null";
						months[1] = "Jan";
						months[2] = "Feb";
						months[3] = "Mar";
						months[4] = "Apr";
						months[5] = "May";
						months[6] = "Jun";
						months[7] = "Jul";
						months[8] = "Aug";
						months[9] = "Sep";
						months[10] = "Oct";
						months[11] = "Nov";
						months[12] = "Dec";
					var SplitdDate = dDate.split('T')[0]
					var year = SplitdDate.split("-")[0]
					var Month;
					if(SplitdDate.split("-")[1] <10){						
						Month =SplitdDate.split("-")[1].slice(1, 2);
					}else{
					     Month= SplitdDate.split("-")[1]
					  }
						Month = months[Month]
					var day = SplitdDate.split("-")[2]
					
					var time = dDate.split('T')[1].slice(0,5);
					
					var dateformate = day+"."+Month+"."+year+" ("+time+")"
					
					return dateformate;//new Date(dDate).format("dd-MMM-yyyy");
				}
			}
		}
		function sendSelectedEngagementssecfun(){			 
			   	UIDCopy = UIDCopy
				NameCopy =NameCopy;
					var Num =99
						$.ajax({
					   url: azurewebsites+'/api/AllocationChat/Comments/'+UIDCopy+'/'+Num,
                         type: 'GET',
                         async: false,
                         processData: false,
                         cache: false,
         
                         contentType: false,
                         dataType: 'json',
                         success: function (data) {  
							var singleObj = []	
                             if (data!="[]") {		
								var textva = ''
								 var CommentEng = JSON.parse(data);
									for (var i = 0; i < CommentEng.length;i++){
										var htg = ''
										var sacimg = "https://outlook.office.com/owa/service.svc/s/GetPersonaPhoto?email="+CommentEng[i].ModifiedbyLoginName+"&amp;UA=0&amp;size=HR96x96&amp;sc=1597845509128"
	
	
										if(_spPageContextInfo.userLoginName == CommentEng[i].ModifiedbyLoginName){
										//htg = "<div style='text-align: end;background-color: lightgray;'><span style='font-weight: bold;'>"+CommentEng[i].ModifiedbyLoginName+' '+ ConvertDateToMMDDYYYY(CommentEng[i].Modified)+"</span><br><p>"+CommentEng[i].Comments+"</p></div> "
										/*htg = '<div style="width: 60%; background-color: #6da9c5;  color: white; margin-left: 230px;" class="panel panel-default"><img src="'+sacimg+'" alt="" data-themekey="#" style="margin-left: -14px; width: 8%; border-radius: 13px;"><span class="k-icon k-i-arrow-60-right" style=" margin-left: 340px; color: #6da9c5;font-size: 18px;"></span><div  style="padding-top: 0px;" class="panel-body">'+CommentEng[i].Comments+' <div style="text-align: end;font-size: 11px;">'+CommentEng[i].ModifiedbyLoginName+' </div><div style="text-align: end;font-size: 11px;">'+ConvertDateToMMDDYYYY(CommentEng[i].Modified)+' </div></div></div>'
										}
										else{
											//htg = "<div ><spanstyle='font-weight: bold;'>"+CommentEng[i].ModifiedbyLoginName+' '+ ConvertDateToMMDDYYYY(CommentEng[i].Modified)+"</span><br><p>"+CommentEng[i].Comments+"</p></div> "
											htg =  '<div style="width: 60%;background-color: #84e684; color: white;" class="panel panel-default"><img src="'+sacimg+'" alt="" data-themekey="#" style="margin-left: -14px; width: 8%; border-radius: 13px;"><span class="k-icon k-i-arrow-60-left" style=" margin-left: -13px; color: #84e684;font-size: 18px;"></span><div style="padding-top: 0px;" class="panel-body">'+CommentEng[i].Comments+' <div style="text-align: end;font-size: 11px;">'+CommentEng[i].ModifiedbyLoginName+' </div><div style="text-align: end;font-size: 11px;">'+ConvertDateToMMDDYYYY(CommentEng[i].Modified)+' </div></div></div>'
										}*/
										/*	htg = '<div style="width: 60%; background-color: #6da9c5;  color: white; margin-left: 198px;" class="panel panel-default"><img src="'+sacimg+'" alt="" data-themekey="#" style="margin-left: 352px; width: 8%; border-radius: 13px;"><span class="k-icon k-i-arrow-60-right" style=" margin-left: 340px; color: #6da9c5;font-size: 18px;margin-top: -38px;"></span><div style="padding-top: 0px;" class="panel-body">'+CommentEng[i].Comments+' <div style="text-align: end;font-size: 11px;">'+CommentEng[i].ModifiedbyLoginName+' </div><div style="text-align: end;font-size: 11px;">'+ConvertDateToMMDDYYYY(CommentEng[i].Modified)+' </div></div></div>'
										}
										else{
											//htg = "<div ><spanstyle='font-weight: bold;'>"+CommentEng[i].ModifiedbyLoginName+' '+ ConvertDateToMMDDYYYY(CommentEng[i].Modified)+"</span><br><p>"+CommentEng[i].Comments+"</p></div> "
											htg =  '<div style="width: 60%;margin-left: 23px;background-color: #84e684; color: white;" class="panel panel-default"><img src="'+sacimg+'" alt="" data-themekey="#" style="margin-left: -35px; width: 8%; border-radius: 13px;"><span class="k-icon k-i-arrow-60-left" style=" margin-left: -6px; color: #84e684;font-size: 18px;"></span><div style="padding-top: 0px;" class="panel-body">'+CommentEng[i].Comments+' <div style="text-align: end;font-size: 11px;">'+CommentEng[i].ModifiedbyLoginName+' </div><div style="text-align: end;font-size: 11px;">'+ConvertDateToMMDDYYYY(CommentEng[i].Modified)+' </div></div></div>'
										}*/
										/*htg = '<div style="width: 60%; background-color: #c3dbe6;  color: black; margin-left: 198px;" class="panel panel-default"><img src="'+sacimg+'" alt="" data-themekey="#" style="margin-left: 368px;background-color: lightgray; width: 8%; border-radius: 13px;"><span class="k-icon k-i-arrow-60-right" style=" margin-left: 356px; color: #c3dbe6;font-size: 18px;margin-top: -47px;"></span><div style="padding-top: 0px;" class=""><p style="font-size: 11px;font-weight: bold;padding-top: -12px;margin-left: 8px;margin-top: -36px;">'+CommentEng[i].Modifiedby+'  '+ConvertDateToMMDDYYYY(CommentEng[i].Modified)+'</p><p style="margin-top: -7px;font-size: 12px; margin-left: 7px;">'+CommentEng[i].Comments+'</p></div></div>'
										}
										else{
											//htg = "<div ><spanstyle='font-weight: bold;'>"+CommentEng[i].ModifiedbyLoginName+' '+ ConvertDateToMMDDYYYY(CommentEng[i].Modified)+"</span><br><p>"+CommentEng[i].Comments+"</p></div> "
											htg =  '<div style="width: 60%;margin-left: 23px;background-color: #bee29a; color: black;" class="panel panel-default"><img src="'+sacimg+'" alt="" data-themekey="#" style="margin-left: -35px;background-color: lightgray; width: 8%; border-radius: 13px;"><span class="k-icon k-i-arrow-60-left" style=" margin-left: -6px; color: #bee29a;font-size: 18px;"></span><div style="padding-top: 0px;" class=""><p style="font-size: 11px;padding-top: -12px; font-weight: bold;margin-left: 8px;margin-top: -23px;">'+CommentEng[i].Modifiedby+'  '+ConvertDateToMMDDYYYY(CommentEng[i].Modified)+'</p><p style="margin-top: -7px;font-size: 12px; margin-left: 7px;">'+CommentEng[i].Comments+'</p></div></div>'
										}*/
										var checkr = '<span class="k-icon k-i-check" style="margin-top: -5px;"></span>'
											if(CommentEng[i].CommentRead == "Yes"){
												checkr = '<span class="k-icon k-i-check" style="margin-top: -5px;color: blue;"><span class="k-icon k-i-check"></span></span>'
											}
											if(nameReso == _spPageContextInfo.userDisplayName){
												if(CommentEng[i].CommentRead != 'Yes'){
												  singleObj.push({ 'ID': CommentEng[i].ID, 'CommentRead': "Yes"});
												}
												checkr = '<span class="k-icon k-i-check" style="margin-top: -5px;color: blue;"><span class="k-icon k-i-check"></span></span>'
											}
										htg = '<div style="width: 60%; background-color: #c3dbe6;  color: black; margin-left: 227px;" class="panel panel-default"><span class="k-icon k-i-arrow-60-right" style="margin-left: 346px;color: #c3dbe6;font-size: 18px;margin-top: -8px;"></span><div style="padding-top: 0px;" class=""><p style="font-size: 11px;font-weight: bold;padding-top: -12px;margin-left: 8px;margin-top: -15px;">'+CommentEng[i].Modifiedby+'  '+ConvertDateToMMDDYYYY(CommentEng[i].Modified)+' '+checkr+'</p><p style="margin-top: -7px;font-size: 12px; margin-left: 7px;">'+CommentEng[i].Comments+'</p></div></div>'
										
										}
										else{
											if(nameReso == _spPageContextInfo.userDisplayName){
												if(CommentEng[i].CommentRead != 'Yes'){
												  singleObj.push({ 'ID': CommentEng[i].ID, 'CommentRead': "Yes"});
												}
											}
											//htg = "<div ><spanstyle='font-weight: bold;'>"+CommentEng[i].ModifiedbyLoginName+' '+ ConvertDateToMMDDYYYY(CommentEng[i].Modified)+"</span><br><p>"+CommentEng[i].Comments+"</p></div> "
											//htg =  '<div style="width: 60%;margin-left: 23px;background-color: #bee29a; color: black;" class="panel panel-default"><img src="'+sacimg+'" alt="" data-themekey="#" style="margin-left: -35px; background-color: lightgray;width: 8%; border-radius: 13px;"><span class="k-icon k-i-arrow-60-left" style=" margin-left: -23px; color: #bee29a;font-size: 18px;"></span><div style="padding-top: 0px;" class=""><p style="font-size: 11px;padding-top: -12px; font-weight: bold;margin-left: 8px;margin-top: -13px;">'+CommentEng[i].Modifiedby+'  '+ConvertDateToMMDDYYYY(CommentEng[i].Modified)+'</p><p style="margin-top: -7px;font-size: 12px; margin-left: 7px;">'+CommentEng[i].Comments+'</p></div></div>'
											htg =  '<div style="width: 60%;margin-left: -4px;background-color: #bee29a; color: black;" class="panel panel-default"><span class="k-icon k-i-arrow-60-left" style=" margin-left: -13px; color: #bee29a;font-size: 18px;"></span><div style="padding-top: 0px;" class=""><p style="font-size: 11px;padding-top: -12px; font-weight: bold;margin-left: 8px;margin-top: -13px;">'+CommentEng[i].Modifiedby+'  '+ConvertDateToMMDDYYYY(CommentEng[i].Modified)+' <span class="k-icon k-i-check" style="margin-top: -5px;color: blue;"><span class="k-icon k-i-check"></span></span></p><p style="margin-top: -7px;font-size: 12px; margin-left: 7px;">'+CommentEng[i].Comments+'</p></div></div>'
										}
										if(textva != ''){
											textva = textva+htg;
										}else{
											textva = htg;
										}
									 }
									  if(singleObj.length !=0){
										  var readChatJson = JSON.stringify(singleObj);
											ureadMultidata(readChatJson);
									   }
							    $('#textvalue').html(textva);					
								$('.panel-body').animate({ scrollTop: 10000 }, 'fast');
							 }
						},
						error: function(error) {
							console.log('Commented Failed')
						}
					});
			
			 
			
			
		}
		
		var nameReso;
		function sendSelectedEngagements(data){			 
			 //  var sN = eid.split('|')			 
				   UIDCopy = data.AllocationUID;
				   NameCopy =  data.Resourcename;
					nameReso =  data.Resourcename				   
					var Num =99
					if(nameReso == _spPageContextInfo.userDisplayName){
						$("#"+UIDCopy).removeClass( "CIcolor" )
					}
					$.ajax({
					   url:azurewebsites+'/api/AllocationChat/Comments/'+UIDCopy+'/'+Num,
                         type: 'GET',
                         async: false,
                         processData: false,
                         cache: false,
         
                         contentType: false,
                         dataType: 'json',
                         success: function (data) {   
							var textva = ''
							var singleObj = []; 
                             if (data!="[]") {		
								
								 var CommentEng = JSON.parse(data);
									for (var i = 0; i < CommentEng.length;i++){
										var htg = ''
										var sacimg = "https://outlook.office.com/owa/service.svc/s/GetPersonaPhoto?email="+CommentEng[i].ModifiedbyLoginName+"&amp;UA=0&amp;size=HR96x96&amp;sc=1597845509128"
	
										if(_spPageContextInfo.userLoginName == CommentEng[i].ModifiedbyLoginName){
											var checkr = '<span class="k-icon k-i-check" style="margin-top: -5px;"></span>'
											if(CommentEng[i].CommentRead == "Yes"){												
												checkr = '<span class="k-icon k-i-check" style="margin-top: -5px;color: blue;"><span class="k-icon k-i-check"></span></span>'
											}	
											if(nameReso == _spPageContextInfo.userDisplayName){
												if(CommentEng[i].CommentRead != 'Yes'){
												  singleObj.push({ 'ID': CommentEng[i].ID, 'CommentRead': "Yes"});
												}
												checkr = '<span class="k-icon k-i-check" style="margin-top: -5px;color: blue;"><span class="k-icon k-i-check"></span></span>'
											}
											//htg = "<div style='text-align: end;background-color: lightgray;'><span style='font-weight: bold;'>"+CommentEng[i].ModifiedbyLoginName+' '+ ConvertDateToMMDDYYYY(CommentEng[i].Modified)+"</span><br><p>"+CommentEng[i].Comments+"</p></div> "
											
										//htg = '<div style="width: 60%; background-color: #c3dbe6;  color: black; margin-left: 198px;" class="panel panel-default"><img src="'+sacimg+'" alt="" data-themekey="#" style="margin-left: 352px;background-color: lightgray; width: 8%; border-radius: 13px;"><span class="k-icon k-i-arrow-60-right" style=" margin-left: 340px; color: #c3dbe6;font-size: 18px;margin-top: -38px;"></span><div style="padding-top: 0px;" class=""><p style="font-size: 11px;font-weight: bold;padding-top: -12px;margin-left: 8px;margin-top: -36px;">'+CommentEng[i].Modifiedby+'  '+ConvertDateToMMDDYYYY(CommentEng[i].Modified)+'</p><p style="margin-top: -7px;font-size: 12px; margin-left: 7px;">'+CommentEng[i].Comments+'</p></div></div>'
										//htg = '<div style="width: 60%; background-color: #c3dbe6;  color: black; margin-left: 198px;" class="panel panel-default"><img src="'+sacimg+'" alt="" data-themekey="#" style="margin-left: 368px;background-color: lightgray; width: 8%; border-radius: 13px;"><span class="k-icon k-i-arrow-60-right" style=" margin-left: 356px; color: #c3dbe6;font-size: 18px;margin-top: -40px;"></span><div style="padding-top: 0px;" class=""><p style="font-size: 11px;font-weight: bold;padding-top: -12px;margin-left: 8px;margin-top: -28px;">'+CommentEng[i].Modifiedby+'  '+ConvertDateToMMDDYYYY(CommentEng[i].Modified)+'</p><p style="margin-top: -7px;font-size: 12px; margin-left: 7px;">'+CommentEng[i].Comments+'</p></div></div>'
										htg = '<div style="width: 60%; background-color: #c3dbe6;  color: black; margin-left: 227px;" class="panel panel-default"><span class="k-icon k-i-arrow-60-right" style="margin-left: 346px;color: #c3dbe6;font-size: 18px;margin-top: -8px;"></span><div style="padding-top: 0px;" class=""><p style="font-size: 11px;font-weight: bold;padding-top: -12px;margin-left: 8px;margin-top: -15px;">'+CommentEng[i].Modifiedby+'  '+ConvertDateToMMDDYYYY(CommentEng[i].Modified)+' '+checkr+'</p><p style="margin-top: -7px;font-size: 12px; margin-left: 7px;">'+CommentEng[i].Comments+'</p></div></div>'
										
										}
										else{
											var checkr = '<span class="k-icon k-i-check" style="margin-top: -5px;"></span>'
											if(CommentEng[i].CommentRead == "Yes"){												
												checkr = '<span class="k-icon k-i-check" style="margin-top: -5px;color: blue;"><span class="k-icon k-i-check"></span></span>'
											}
											if(nameReso == _spPageContextInfo.userDisplayName){
												if(CommentEng[i].CommentRead != 'Yes'){
												  singleObj.push({ 'ID': CommentEng[i].ID, 'CommentRead': "Yes"});
												}
											}
											//htg = "<div ><spanstyle='font-weight: bold;'>"+CommentEng[i].ModifiedbyLoginName+' '+ ConvertDateToMMDDYYYY(CommentEng[i].Modified)+"</span><br><p>"+CommentEng[i].Comments+"</p></div> "
											//htg =  '<div style="width: 60%;margin-left: 23px;background-color: #bee29a; color: black;" class="panel panel-default"><img src="'+sacimg+'" alt="" data-themekey="#" style="margin-left: -35px; background-color: lightgray;width: 8%; border-radius: 13px;"><span class="k-icon k-i-arrow-60-left" style=" margin-left: -23px; color: #bee29a;font-size: 18px;"></span><div style="padding-top: 0px;" class=""><p style="font-size: 11px;padding-top: -12px; font-weight: bold;margin-left: 8px;margin-top: -13px;">'+CommentEng[i].Modifiedby+'  '+ConvertDateToMMDDYYYY(CommentEng[i].Modified)+'</p><p style="margin-top: -7px;font-size: 12px; margin-left: 7px;">'+CommentEng[i].Comments+'</p></div></div>'
											htg =  '<div style="width: 60%;margin-left: -4px;background-color: #bee29a; color: black;" class="panel panel-default"><span class="k-icon k-i-arrow-60-left" style=" margin-left: -13px; color: #bee29a;font-size: 18px;"></span><div style="padding-top: 0px;" class=""><p style="font-size: 11px;padding-top: -12px; font-weight: bold;margin-left: 8px;margin-top: -13px;">'+CommentEng[i].Modifiedby+'  '+ConvertDateToMMDDYYYY(CommentEng[i].Modified)+' '+checkr+'</p><p style="margin-top: -7px;font-size: 12px; margin-left: 7px;">'+CommentEng[i].Comments+'</p></div></div>'
										}
										if(textva != ''){
											textva = textva+htg;
										}else{
											textva = htg;
										}
									 }
									
							   
							/*	setTimeout(function () {
									sendSelectedEngagementssecfun()
									}, 10)*/
							 }
							 if(singleObj.length !=0){
							      var readChatJson = JSON.stringify(singleObj);
									ureadMultidata(readChatJson);
							   }
							   var GProjectName= ''
							    if($('input[title="Project Name"]').length ==0)
									{
										GProjectName=$('.ms-formlabel:contains(Name)').first().closest('td').next().text().trim()		
									}
								else
									{
										GProjectName=$('input[title="Project Name"]').val()
									}
							  $('#textvalue').html(textva);					
								 myWindow.data("kendoWindow").center();
								 myWindow.data("kendoWindow").open();
								 $('.panel-body').animate({ scrollTop: 10000 }, 'fast');
								// $('.k-window-title').text(NameCopy +' / '+GProjectName)
								//$('.k-window-title').html("<b>" +NameCopy+"</b>" +"<i>("+GProjectName+")</i>")
								$('.k-window-title').html(NameCopy+" | "+GProjectName)
						},
						error: function(error) {
							console.log('Commented Failed')
						}
					});
			
			 
			
			
		}
	function ureadMultidata(param) {
         
            jQuery.ajax({
                type: "POST",
                url: azurewebsites+"/Api/AllocationChat/SaveCommnetsSeen",
                data: JSON.stringify(param),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                 debugger
                },
				 error: function (error) {
					console.log('Error save chat read')
                }
            });
         
         
         }
	function getItemID(data){
		//alert(data.AllocationUID)
		var LSDfilter =RM_ResourceFilter;
		if(LSDfilter.length ==1){
				var multiselect = $("#DD1").data("kendoMultiSelect");
				multiselect.value('');
			}
			else if(LSDfilter.length ==2){
				var multiselect = $("#DD1").data("kendoMultiSelect");
				multiselect.value('');
				var multiselect = $("#DD2").data("kendoMultiSelect");
				multiselect.value('');
			
			}
			else if(LSDfilter.length ==3){
				var multiselect = $("#DD1").data("kendoMultiSelect");
				multiselect.value('');
				var multiselect = $("#DD2").data("kendoMultiSelect");
				multiselect.value('');
				var multiselect = $("#DD3").data("kendoMultiSelect");
				multiselect.value('');
			}
			else if(LSDfilter.length ==4){
			
			}
			else if(LSDfilter.length ==5){
			
			}
		var url =azurewebsites+'/api/Allocation/Delete/';
			
			       var singleObj = {};	
				   var listOfObjects=[];
				   singleObj.Resourceuid = data.AllocationUID;				   
				   listOfObjects.push(singleObj);		   
				   getDeleteData(listOfObjects,url);
	}
	
	function getDeleteData(obj,baseUrl){
		  
            var listOfObjects = "";
            listOfObjects = (obj);
			console.log(listOfObjects);
            var allData ="'"+ JSON.stringify(obj)+"'";
			 $.LoadingOverlay("show");	 
            $.ajax({
                type: "PUT",
                url: baseUrl,
                data: allData,//JSON.stringify(allData),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                   // return data;
				   $.LoadingOverlay("hide");
				// GetData();
				getd()
                },
                error: function (error) {
					 $.LoadingOverlay("hide");	 
                     return error;
                }
            });
       }
	
var DeletedataItem = false;
var ChatdataItem = false
	/*function isNumberKeyDesPoint(evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode;
	//alert(charCode);
	if (charCode != 46 &&
		(charCode < 48 || charCode > 57))
		return false;

	return true;
}*/
	
	 function grid_change(e) {
		var grid = gridID.data("kendoGrid");
	   var selectedCells = this.select();
	   var cellIndex = selectedCells[0].cellIndex;
		var column = this.columns[cellIndex];
		var dataItems = this.dataItem(selectedCells.closest("tr"));
		if (column.field == "Edit") {
		}else{
		   var selectedDataItems = [];
		   for (var i = 0; i < selectedCells.length; i++) {
						var dataItem = this.dataItem(selectedCells[i].parentNode);
						if ($.inArray(dataItem, selectedDataItems) < 0) {	
						     dataId.push(dataItem.Id);
						  selectedDataItems.push(dataItem);
						}
		   }
		}
	 } 
	 var dataId = [];
	 
	 
	  function saveFilterEngagements(e) {  
					
					var unqval=	unique(dataId);			
			
			var griddatabind =  gridID.data("kendoGrid").dataSource._data
			var datafilter = []
			var getgridvales = unqval.filter(function (PSitem, Psidx) {
						return griddatabind.filter(function (Litem, Lixd) {
							if(Litem.AllocationUID == PSitem){								
								datafilter.push(Litem);
								return true;
							}
							return false;
						}).length != 0
					 });
			debugger
			
			if(datafilter.length != 0){
				var singleObj = {};
				 var listOfObjects=[];
				var arr = datafilter
				 var gData = "";
				singleObj.url = "CODE TEST";
				singleObj.projectuid ="";
				 var sdate = $('#start').val();
					 var sdatePart = sdate.split(' ');
					 var MonthNum = mL.indexOf(sdatePart[0]) + 1;
					 singleObj.start = MonthNum + " " + sdatePart[1];

					 var fdate = $('#end').val();
					 var fdatePart = fdate.split(' ');
					 var FMonthNum = mL.indexOf(fdatePart[0]) + 1;
					 singleObj.end = FMonthNum + " " + fdatePart[1];
				for (var i = 0, l = arr.length; i < l; i++) {
					  var keys = Object.keys(arr[i]);
					  var keysar = [];
					  for(j=0;j<keys.length;j++){
							if(keys[j] != 'originalRole'){
								keysar.push(keys[j]);
							}
						}
						keys = keysar;
					  for (var j = 13, k = keys.length-3; j < k; j++) {
						 if(j==14){continue;}else{
						  if(gData.toString() == ''){
							   gData = arr[i]['AllocationStatus']//arr[i][keys[j]]
						  }
						  else if(gData.endsWith('|')){
							  gData = gData + arr[i]['AllocationStatus']//arr[i][keys[j]]
						  }
						  else{
							gData = gData + '^' + arr[i][keys[j]]
						  }
					  }
						//console.log("Key:" + keys[j] + "  Value:" + arr[i][keys[j]]);
					  }
					  gData=gData.replaceAll("null",0)
					   gData =gData + '|' ;
					}
					
					singleObj.DataPush = (gData).slice(0, -1);
					singleObj.ModifiedBy = _spPageContextInfo.userDisplayName;
					singleObj.Source = 'Project Allocation';
					listOfObjects.push(singleObj);
					debugger
				   var retValue = saveMultiData(listOfObjects);
				
			}
					
				
				  debugger
                                              
	  };  
	  
	  
	
                                                     

	   function saveMultiData(obj){
            var listOfObjects = "";
            listOfObjects = (obj);
            var baseUrl = azurewebsites+'/api/Allocation/UpdateCommitPDP';
            var allData = JSON.stringify(obj);
			 $.LoadingOverlay("show");	 
            $.ajax({
                type: "PUT",
                url: baseUrl,
                data: JSON.stringify(allData),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                   // return data;
				   $.LoadingOverlay("hide");
				   //GetData()
				   gridchanged = false;
				   getd()
                },
                error: function (error) {
					 $.LoadingOverlay("hide");	 
                     return error;
					 gridchanged = false;
                }
            });
       }
                                                     

function unique(list) {
	 var result = [];
	 $.each(list, function(i, e) {
					if ($.inArray(e, result) == -1) result.push(e);
	 });
	 return result;
  }
		 
	/*function paageLoad(response){
		debugger
		$('.cEngView').show()
		$('.cEngNew').hide()
		response = JSON.parse(response);
		totalarray = response;
		CEngagementPgae()
		if(response.length == 0){
			$("#PMLoadgrid").empty();
			$("#PMLoadgrid").hide();
			return;
		}		
		for (var i = 0; i < response.length; i++) {			
				for (var j = 0; j < dataRList.length; j++) {
					console.log(response[i].Resourcename +'|'+ dataRList[j].Title)
					if(response[i].Resourcename == dataRList[j].Title){
					        response[i].Role =dataRList[j].PrimaryJobRole
					  }					
			   }			
		  }
		var data = []		
		var headers =["Resourcename",];
		var keys = Object.keys(response[0]);
			 for (var i = 12; i < keys.length; i++) {					
				 headers.push(keys[i]);
			 }
			 
			    var seen = {};
				var	ret_arr = [{
						field: "Resourcename",
						editable: true,
						title: 'Resource Name',
						format: "",
						width: 200,
						template: function(dataItem) {
								  var values = '';
								  if(dataItem.Resourcename != null){
									  values = "<span style='color:#656565'>" + dataItem.Resourcename + "</span>";
								  }								  
								  return values;
								},
						filterable: {
							multi: true,
							search: true
							}
						},{
						field: "Role",
						editable: true,
						title: 'Role',
						format: "",
						width: 200,
						template: function(dataItem) {
								  var values = '';
								  if(dataItem.Role != null){
									  values = "<span style='color:#656565'>" + dataItem.Role + "</span>";
								  }								  
								  return values;
								},
						filterable: {
							multi: true,
							search: true
							}
						}];
				var fildata = []
				var cont = 1
				for (var i = 12; i < keys.length; i++) {
					if (!(keys[i].split("_")[1] in seen)) {
						cont = 1
						fildata = []
							fildata.push({
								field: keys[i],
								width: 65,
								title: keys[i].split("_")[0],
								filterable: false,
								template: '#=' + keys[i] + '#%'
							})
							ret_arr.push({
							title: keys[i].split("_")[1],
							columns: [fildata]});
						
						//ret_arr.push({title:keys[i].split("_")[1],colspan: cont});
						seen[keys[i].split("_")[1]] = true;
					}
					else if ((keys[i].split("_")[1] in seen)) {
						cont++
						fildata.push({
								field: keys[i],
								width: 65,
								title: keys[i].split("_")[0],
								filterable: false,
								template: '#=' + keys[i] + '#%'
							})							
						for (var j = 0; j < ret_arr.length; j++) {
							if(keys[i].split("_")[1] == ret_arr[j].title){
								ret_arr[j].columns =fildata;
							}
						}
					}
				}
				 $("#PMLoadgrid").empty();
		// var dynHeaders = gColumns(headers)
		 var grid = $("#PMLoadgrid").kendoGrid({
			 dataSource: response,
			 navigatable: true,
			 edit: function (e) {
				 setTimeout(function () {
					 e.container.find("input").select();
				 })
			 },
			 editable: false,
			 selectable: "multiple, cell",
			 sortable: true,
			 filterable: true,
			 resizable: true,
			// toolbar: ["cancel"],
			 columns: ret_arr         
			 }).find("table").on("keydown", onGridKeydown);
		//}).data("kendoGrid");
		//$('#PMLoadgrid').width($(window).width()-270);
		grid.bind("change", grid_change);
         $('#PMLoadgrid').find('tbody').css('background-color','white')
		 $('#PMLoadgrid').find('tbody').css('color','darkgrey')
		 //$('.k-alt').css('background-color','lightgrey !important')
		 
		
		 var ds = $("#PMLoadgrid").data("kendoGrid").dataSource;
		     ds.sort({ field: "Resourcename", dir: "asc" });
	}  */
	
	 function onGridKeydown(e) {
                 if (e.key >=0 && e.key<10) {                   
                     return true;
                 }
                 if (e.keyCode == 8 || e.keyCode == 9 || e.keyCode == 46 || e.keyCode == 39 || e.keyCode == 37) {
                    
                     return true;
                 }
			 return false;
	 }
	 function grid_changedup(e) {
		var grid = $("#grid1").data("kendoGrid");
	   var selectedCells = this.select();
	   var cellIndex = selectedCells[0].cellIndex;
		var column = this.columns[cellIndex];
		var dataItems = this.dataItem(selectedCells.closest("tr"));
		if (column.field == "Edit") {
		}else{
		   var selectedDataItems = [];
		   for (var i = 0; i < selectedCells.length; i++) {
						var dataItem = this.dataItem(selectedCells[i].parentNode);
						if ($.inArray(dataItem, selectedDataItems) < 0) {									   
						  selectedDataItems.push(dataItem);
						}
		   }
		}
	 } 
	function gColumns(response) {
		var columnNames = response;
		return columnNames.map(function (name) {
				var colName = name.replace(/[^a-z0-9\s]/gi, ' ').replace(/[_\s]/g, ' ');
				if (name == "Resourcename") {
					return {
						field: name,
						editable: true,
						title: 'Resource Name',
						format: "",
						width: 315,
						filterable: {
							multi: true,
							search: true
						},
					};
				} else {
					var resColumns = name.split("_");
					if (resColumns.length == 2) {
						var year = resColumns[1];
						var Month = resColumns[0];
						return {
							title: year,
							columns: [{
								field: name,
								width: 65,
								title: Month,
								filterable: false,
								template: '#=' + name + '# %'
							}]
						};

					} else {
						return {
							field: name,
							title: colName,
							format: "",
							width: 100,
							filterable: false
						};
					}
				}
			})
		}
var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

function AddtoTable(){
	     var resourceid = $('#drp_resources option:selected')[0].value
         var resourceName = $('#drp_resources option:selected').text();
		 //var selCapndExp = $('#drp_commitment').find(':selected').text() != '-Select-' ? $('#drp_commitment').find(':selected').text():'';
         var txtMaxunitMonth = $('#txt_unit').val();
            
         var sdate = $('#start_datepicker').val();
         var sdatePart = sdate.split(' ');
         var MonthNum = mL.indexOf(sdatePart[0]) + 1;
         var startd = MonthNum + " " + sdatePart[1];
         
         var fdate = $('#end_datepicker').val();
         var fdatePart = fdate.split(' ');
         var FMonthNum = mL.indexOf(fdatePart[0]) + 1;
         var finishd = FMonthNum + " " + fdatePart[1];
         $('#addItemChk').text("");

         if (resourceName == null || resourceName == '' || sdate == null || sdate == '' || fdate == null || fdate == '' || txtMaxunitMonth == null || txtMaxunitMonth == '') {
             
             $('#addItemChk').text("*Please fill all the required fields.");
             return;
         }
		 
		 var  chkstartdate= "01/" +MonthNum+ "/" + sdatePart[1];
              chkstartdate = new Date(chkstartdate)
         var  chkEnddate= "01/" +FMonthNum+ "/" + fdatePart[1];
             chkEnddate = new Date(chkEnddate)
             if (chkEnddate < chkstartdate) {
                 $('#addItemChk').text("*Start date can't be less then End date.");
                 return;
             }
			 var numChk = parseFloat(txtMaxunitMonth);
         if (numChk > 100 || numChk < 0 || numChk == NaN  || numChk == 'NaN' || numChk == null || numChk == undefined) {
             $('#addItemChk').text("*Max Unit (0% to 100%).");
             return;
         }
		  for (var i = arraySec.length - 1; i >= 0; i--) {
             if (arraySec[i].Resourcename === resourceName) {
                 arraySec.splice(i, 1);
             }
         }
		 arraySec.push({ Resourcename: resourceName , Startdate: sdate, Enddate: fdate, units: txtMaxunitMonth, ID: resourceid,})
		  $('.cEngNewLen').hide()
		 if(arraySec.length != 0){
		 $('.cEngNewLen').show()
         datagrid(arraySec);
		 }
}
var arraySec=[];
function isNumberKeyDesPoint(evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode;
	//alert(charCode);
	if (charCode != 46 && charCode != 44 &&
		(charCode < 48 || charCode > 57))
		return false;

	return true;
}
  function datagrid (e){
         $("#NewItemsgrid").kendoGrid({
         dataSource:  new kendo.data.DataSource({
         //pageSize: 100,
         data: e,
         schema: {
         model: {
				 fields: {
					 'Startdate': {
						type: "string",									
					 },
					 'Enddate': {
						 type: "string",
					 },
					}
				}
			   }
         }),
         sortable: true,
			filterable: {
					extra: false,
					operators: { 
						string: {   
							contains: "Contains",								
						},
					
					}
				},
         resizable: true,         
         columns: [{
         field: "ResourceName",
         title: "Resource",
         }, {
         field: "Startdate",
         title: "Start Date",
		//  width:120,
         format: "{0:MMMM yyyy}",
          template:"#=(Startdate == null) ? ' ':((kendo.toString(kendo.parseDate(Startdate, 'MMMM yyyy'), 'MMMM yyyy') == null) ? ' ':kendo.toString(kendo.parseDate(Startdate, 'MMMM yyyy'), 'MMMM yyyy'))#",
         
         }, {
         field: "Enddate",
         title: "End Date",
		// width:120,
         format: "{0:MMMM yyyy}",
          template:"#=(Enddate == null) ? ' ':((kendo.toString(kendo.parseDate(Enddate, 'MMMM yyyy'), 'MMMM yyyy') == null) ? ' ':kendo.toString(kendo.parseDate(Enddate, 'MMMM yyyy'), 'MMMM yyyy'))#",
         
         }, {
         field: "units",
         title: "Unit",
		  //width:,         
         },],
         });
 }
function getParameterByName(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search.toLowerCase());
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}
function changeDate(e) {
	var curElemID = e.sender.element.context.id ;
	var previous = null;
	var Calert = false;
	if(dataIdPP.length !=0){	
		if(!gcm){
			gcm =false
		Calert = confirm('Are you sure you want to change your grid date range?  You have unsaved changes.  Press OK to continue with your grid date change, which will lose any unsaved changes.  Press Cancel to cancel this grid date change.')
		}
	}else{
		Calert = true;
	}
	if(!Calert){
		gcm =false
	}
	
	if(Calert){
		gcm =false;;
	switch(curElemID)
	{
		case "start" || "end":
		if ($(this.element).is("#start")) {
		   $("#end").data("kendoDatePicker").setOptions({ min: this.value() });
		}
		else 
		{
			$("#start").data("kendoDatePicker").setOptions({ max: this.value() });
		}
		break;						
		default: break;
	}
	var darray = []
	
		 if(curElemID == 'start'){
				Gdatavalstart = this.value()
				darray = [this.value(),$('#end').val()]
			}else if(curElemID =="end"){
				GdatavalEnd = this.value()
				darray = [$('#start').val(),this.value()]
			}
			sessionStorage.setItem('dateItems', JSON.stringify(darray))
	 GetData()
	 }
	 else{
		 var chcksam =false;
		 if(curElemID == 'start'){
				if(Gdatavalstart == this.value()){
					chcksam =true;
				}
			}else if(curElemID =="end"){
				if(GdatavalEnd == this.value()){
					chcksam =true;
				}
			}
		if(!chcksam){
			var dval;
			 if(curElemID == 'start'){
				dval =Gdatavalstart;
			}else if(curElemID =="end"){
				dval =GdatavalEnd;
			}
			gcm =true;
			setdateInDP(curElemID,dval)
		}
	}
	 
	}
    function changeDateNew(startDate, endDate) {


        $.LoadingOverlay("hide");
        
         $("#start").data("kendoDatePicker").value(startDate);
           $("#end").data("kendoDatePicker").value(endDate);
           
           // Save date range to session storage
           var darray = [startDate, endDate];
           sessionStorage.setItem('dateItems', JSON.stringify(darray));
           
           // Load grid data
           GetData();
   
            $('.ttesting').css("display","none");
                 $('.backgroundBlur').fadeOut();
   }

   
   
	var gcm = false;
  var Gdatavalstart;
	var GdatavalEnd;
  function setdateInDP(ID,datev) {
    var datePicker = $("#"+ID).data("kendoDatePicker");
    datePicker.value(datev);
    $("#"+ID).data("kendoDatePicker").trigger("change");
}
  
  
  function setDate (dDate) {
	  if (dDate != undefined) {
		  if (dDate != null) {
		   return new Date(dDate).format("MMMM yyyy");
		   }
		}
	 }   


function AddtoTablecopy(){
	//$('#resorceList').css('height', '');
	var acheck =false;
			if(dataIdPP.length !=0){					
				acheck = confirm('Are you sure you want to add a resource allocation?  You have unsaved changes.  Press OK to continue with your new resource allocation, which will lose any unsaved changes.  Press Cancel to cancel this new resource allocation.')
			}else{
				acheck =true;
			}
		if(acheck){
	    // var resourceid = $('#drp_resources option:selected')[0].value || resourceName == null || resourceName == ''
       //  var resourceName = $('#drp_resources option:selected').text();
		 var resourceids = drpResID.val();
		 addDelete = true
		 //var selCapndExp = $('#drp_commitment').find(':selected').text() != '-Select-' ? $('#drp_commitment').find(':selected').text():'';
         var txtMaxunitMonth = $('#txt_unit').val();
            
         var sdate = $('#start_datepicker').val();
         var sdatePart = sdate.split(' ');
         var MonthNum = mL.indexOf(sdatePart[0]) + 1;
         var startd = MonthNum + " " + sdatePart[1];
         
         var fdate = $('#end_datepicker').val();
         var fdatePart = fdate.split(' ');
         var FMonthNum = mL.indexOf(fdatePart[0]) + 1;
         var finishd = FMonthNum + " " + fdatePart[1];
         $('#addItemChk').text("");
		arraySec = [];
         if (resourceids == null || resourceids == "" || sdate == null || sdate == '' || fdate == null || fdate == '' || txtMaxunitMonth == null || txtMaxunitMonth == '') {
             
             $('#addItemChk').text("*Please fill all the required fields.");
             return;
         }
		 
		 var  chkstartdate= "01/" +MonthNum+ "/" + sdatePart[1];
              chkstartdate = new Date(chkstartdate)
         var  chkEnddate= "01/" +FMonthNum+ "/" + fdatePart[1];
             chkEnddate = new Date(chkEnddate)
             if (chkEnddate < chkstartdate) {
                 $('#addItemChk').text("*Start date can't be less then End date.");
                 return;
             }
			 var numChk = parseFloat(txtMaxunitMonth);
         if (numChk > 100 || numChk < 0 || numChk == NaN  || numChk == 'NaN' || numChk == null || numChk == undefined) {
             $('#addItemChk').text("*Max Unit (0% to 100%).");
             return;
         }
		 
		 
		 for (j = 0; j < resourceids.length; j++) {
		 
		 var resourceName = null
			/*for (z = 0; z < AGGetProject.length; z++) {
					if(resourceids[j] == AGGetProject[z].ResourceID){
						resourceId = AGGetProject[z].ResourceID;
						resourceName = AGGetProject[z].Title;
					}
			}M//*/
			for (z = 0; z < AGGetProject.length; z++) {
					if(resourceids[j] == AGGetProject[z].ResourceId){
						resourceId = AGGetProject[z].ResourceId;
						resourceName = AGGetProject[z].Resourcename;
					}
			}
			  for (var i = arraySec.length - 1; i >= 0; i--) {
				 if (arraySec[i].ResourceId === resourceId) {
					 arraySec.splice(i, 1);
				 }
			 }
		 arraySec.push({ ResourceName: resourceName , Startdate: sdate, Enddate: fdate, units: txtMaxunitMonth, ID: resourceids[j],})
		 
		 }
		 
		 
		  $('.cEngNewLen').hide()
		  /*var RLSArr = []
		  Res_data=[]
		  for (j = 0; j < datalength.length; j++) {
			  
			  if(datalength[j].ResourceId != resourceid){
				  RLSArr.push(datalength[j])
			  }			  
		  }
		  for (j = 0; j < RLSArr.length; j++) {
			if (RLSArr.length > 0) {
			  var ri = RLSArr[j].ResourceId
		      var rt = RLSArr[j].ResourceName;
		      Res_data.push({"text":rt,"value":ri})
			}
		  }
		  var multiselect = $("#drp_resources").data("kendoMultiSelect");
          multiselect.setDataSource(Res_data);*/
		  
		/*  var RLSArr = []
		  for (j = 0; j < datalength.length; j++) {
			  
			  if(datalength[j].ResourceId != resourceid){
				  RLSArr.push(datalength[j])
			  }			  
		  }
		   var strOptions;
			  for (j = 0; j < RLSArr.length; j++) {
					if (RLSArr.length > 0) {
								strOptions = strOptions + "<option  value='" + RLSArr[j].ResourceId + "' >" + RLSArr[j].ResourceName + "</option>";
						}
					}
			 strOptions="<option  value=''></option>" + strOptions;
			 $("#drp_resources").text("");
			 $("#drp_resources").append(strOptions).trigger('chosen:updated');
			 $(".chosen-select").chosen({no_results_text: "Oops, nothing found!",width: "17%",}); */	
		 if(arraySec.length != 0){
		// $('.cEngNewLen').show()
         CreteEngclickadd(arraySec);
		 }
}
}


function CreteEngclickadd (arraySec){
		addtrue =true;
	 var gridDataArray = arraySec;
	   var SaveEngData = [];
	   if(gridDataArray.length != 0){
	   var projectcode = getParameterByName('projuid');
		  for (i = 0; i < gridDataArray.length; i++){
			  
			  var obj = {};
				 obj.Description = 'CODE TEST';
				 obj.Projectuid = projectcode;
				 obj.Projectname = GProjectName;
				 obj.Resourceuid = gridDataArray[i].ID;
				 obj.Resourcename = gridDataArray[i].ResourceName;
				 obj.Role = '';
				 obj.Start = (monthNamesFull.indexOf(gridDataArray[i].Startdate.split(' ')[0]) + 1) + "/05/" + gridDataArray[i].Startdate.split(' ')[1];
				 obj.Finish = (monthNamesFull.indexOf(gridDataArray[i].Enddate.split(' ')[0]) + 1) + "/05/" + gridDataArray[i].Enddate.split(' ')[1];
				 obj.Unit = gridDataArray[i].units;
				 obj.Status = "Committed";
				 obj.ModifiedBy = _spPageContextInfo.userDisplayName;
				 obj.Source = 'Project Allocation'
				 SaveEngData.push(obj);
		   }
		   
		   var url = azurewebsites+"/api/Allocation/AddTask";
		   var getSaveRes = savedata(SaveEngData,url)
		     $('.gCreateRefresh').show()	
			 $('.cEngNew').hide()
			 
		   debugger
		   
	   }
	  
}
	function commitAllocations(){
		gridID.find('tbody').find('tr').each(function(i){
			var resrID = $(this).find('td').eq(-2).text();
			var filterCommitArray = allocationStatusT.filter(function(x){return x.AllocationUID == resrID;})
			var monthNum = new Date().getMonth()+1;
			var yearInd = 4;
			var indxxx = 0;
			var getyr = 0;
			gridID.find('table').find('tr').eq(0).find('th').each(function(x){
				var yr = $(this).text();
				if(!isNaN(parseInt(yr))){
					indxxx = $(this).index()
					getyr = $(this).text();
					yearInd = indxxx;
					return false;
				}
			})
			$(this).find('td').each( function(x){
				var ind = $(this).index();
				if(ind >1 && !isNaN(parseInt($(this).text()))){				
					var header = gridID.find('table').find('tr').eq(1).find('th').eq(ind-indxxx).text()				
					if(mS[0] == header && gridID.find('table').find('tr').eq(1).find('th').eq(ind-indxxx).index()>0){
						yearInd = yearInd+1;
					}
					var yearRange = gridID.find('table').find('tr').eq(0).find('th').eq(yearInd).text();
					var keyName = header+"_"+yearRange+"_Status";//Apr_2022_Status
					if(filterCommitArray[0][keyName] == "Proposed" && RM_Commit){
						$(this).css("background-color", "#fdda0d");
					}
					if(filterCommitArray[0][keyName] == "Rejected" && RM_Reject){
						$(this).css("background-color", "#ff6e69");
					}
				}				
			})
		})
	}
	function rejectAllocations(){
		gridID.find('tbody').find('tr').each(function(i){
			var rejectRow = $(this).find('td').eq(-1).text();
			if(rejectRow == 'Rejected'){
				$(this).find('td').each( function(x){
					var ind = $(this).index();
					if(ind >3){	
						$(this).css("background-color", "#ff6e69");
					}				
				});
			}
		});
	}
	var conSize = true;
     
	
	var sscount =0;
	$(document).bind('mousemove',function(e){      
		if(sscount==0){
			if($('a[aria-describedby="Ribbon.Tabs.PDP.Home.Project.Save_ToolTip"]').length==1){
				sscount=1
				$('a[aria-describedby="Ribbon.Tabs.PDP.Home.Project.Save_ToolTip"]').bind("click", function(){
				if($("#notificationArea").length > 0) {
				//$("#notificationArea").hide();
				}
				//setTimeout(function(){$("#notificationArea").hide();},10);
					saveFilterEngagements();
					return true;
				})
			}
		}
	});
	var filterApplied = false;
		var global_onchangeEle = ""
		var lock = true;
		$('#s4-workspace').click(function(e){
		  //alert( "Handler for .click() called." );
		  if(e.target.className != 'k-multiselect-wrap k-floatwrap' || global_onchangeEle != $(e.target).find('ul')[0].id.replace("_taglist","") ){
			  if(global_onchangeEle != ""){
				  lock = false;
				  $('#'+global_onchangeEle).trigger("change");
				  //$('#'+global_onchangeEle).data("kendoMultiSelect").trigger("change");
				  lock = true;
				  global_onchangeEle = ''
			  }
		  }else{
			  
		  }
		  if(e.target.className != 'sortingtypeListanchor' ){
				if($(e.target).closest('ul')[0] != undefined){
					if($(e.target).closest('ul')[0].className != "sortingtypeListitems"){
						if($('.sortingtypeListitems').is(":visible")){
							$('.sortingtypeListanchor').click();
						}
					}
				}
				else{
					if($('.sortingtypeListitems').is(":visible")){
						$('.sortingtypeListanchor').click();
					}
				}				
			}
		  
		});
		$('#s4-workspace').scroll(function () { 
			if($('.sortingtypeListitems').is(":visible")){
					$('.sortingtypeListanchor').click();
			}
		});
	
  function createResourceFilterdropdowns(){
	var resLen = AGGetProject.length;
	conSize = true;
	var counter = 0;
	var po = 1;
	var allSelected = false;
    if(ResFilter.length > 0){
	  var dataName = [{label:'Generic',value:'Generic'},{label:'Named',value:'Named'}];
	  $('#typeIsNamed').multiselect({
		includeSelectAllOption: true,
        enableFiltering:true,
        includeFilterClearBtn: true,
		numberDisplayed: 0,
		enableCaseInsensitiveFiltering:true,
		nonSelectedText:'Select Type',
		nSelectedText: 'Type',
		allSelectedText: 'Type',
		selectAllValue: 'All',
		templates: {
		  filter: '<li class="multiselect-item filter"><div class="input-group"><input class="form-control multiselect-search" type="text"></div></li>',
        },onDropdownShown: function(event) {
		  if($("div.open").find('ul.multiselect-container div.buttonOpt').length==0){
			$("div.open").find('ul.multiselect-container').append('<li class="multiselect-item multiselect-buttons"><div class="buttonOpt"><input type="button" value="Clear" id="typeReset" class="multiselect-reset" onclick="Reset()"/><input type="button" value="Apply" id="typeApply" class="multiselect-apply" onclick="Apply()"/></div></li>');
		  }
        }
	  });
	  $('#typeIsNamed').multiselect('dataprovider', dataName);
	  $.each(ResFilter, function (indx, MGrid) {
		var resFilter_ar = [];
		if(counter < 4){
		  for(fi=0;fi<resLen;fi++){
			if(resFilter_ar.indexOf(AGGetProject[fi]['Filter'+po]) == -1 && (AGGetProject[fi]['Filter'+po] != null && AGGetProject[fi]['Filter'+po] != "")){
			  resFilter_ar.push(AGGetProject[fi]['Filter'+po]);
			}
		  }
		  if(resFilter_ar.length > 0){
			var filId="optionalFilter"+po;
			var resetId="reset_optionalFilter"+po;
			$('#fileroptionRows').append('<td name = "td_filter" style="display:none;"><select id="optionalFilter'+po+'" multiple="multiple"  data-placeholder="'+MGrid.ProjectFilter+'"></td>');
			counter ++;
			var optional = $("#optional"+['Filter'+po]).multiselect({
			  includeSelectAllOption: true,
              enableFiltering:true,
              includeFilterClearBtn: true,
		      numberDisplayed: 0,
		      enableCaseInsensitiveFiltering:true,
		      nonSelectedText:MGrid.ProjectFilter,
		      nSelectedText: MGrid.ProjectFilter,
		      allSelectedText: MGrid.ProjectFilter,
			  selectAllValue: 'All',
			  templates: {
                filter: '<li class="multiselect-item filter"><div class="input-group"><input class="form-control multiselect-search" type="text"></div></li>',
              },onDropdownShown: function(event) {
				var dropDownId=$("div.open").prev().attr('id');
				var numPo=dropDownId.match(/\d+/);
				if($("div.open").find('ul.multiselect-container div.buttonOpt').length==0){
				  $("div.open").find('ul.multiselect-container').append('<li class="multiselect-item multiselect-buttons"><div class="buttonOpt"><input type="button" id="resetOptional" class="multiselect-reset" value="Clear" onclick="myFunction('+numPo+')"/><input type="button" value="Apply" id="applyOptional" class="multiselect-apply" onclick="otherApply('+numPo+')"/></div></li>');
			    }
			  }
			});
			var arr = [];
								/*if(filteredAr.length>0){
									globalValDrop = filteredAr;
								}*/
								var filtrTypedata = []
								var TypeDD =$('td[id="TypeDD"]').find('select').val()
								
									if(TypeDD != null && TypeDD.length == 1){
										var gname = TypeDD.toString() == 'Generic'?'True':'False'
										for(i=0;i<globalValDrop.length;i++){
												if(globalValDrop[i].ResourceIsGeneric == gname){
														if(arr.indexOf(globalValDrop[i]['Filter'+po]) == -1){															
															arr.push(globalValDrop[i]['Filter'+po])
														}
												}
										}
										}
										else{
												for(i=0;i<globalValDrop.length;i++){
													if(arr.indexOf(globalValDrop[i]['Filter'+po]) == -1){
														
														arr.push(globalValDrop[i]['Filter'+po])
													}													
												}
										}
								
								for(i=0;i<arr.length;i++){
									if(arr[i] == null){
										arr[i] = "Empty"
									}
									if(arr[i] == true){
										arr[i] = "true"
									}
									if(arr[i] == false){
										arr[i] = "false"
									}
								}
								arr = arr.sort();
								var finalArr=[];
	                      for (j = 0; j < arr.length; j++) {
	  if (arr.length > 0) {
		var ri = j;
		var rt = arr[j];
		finalArr.push({"label":rt,"value":rt})
	  }
	}
	$("#optional"+['Filter'+po]).multiselect('dataprovider', finalArr);
						}
						
					}
					
					po++;
				});
				
			}
				//filterSwitch = false;
				 setTimeout(function(){// $("div.k-multiselect-wrap").css('width','500px'); 
					$('td[name="td_filter"]').each(function(x){
						$(this).find('div.k-multiselect-wrap').css('width','200px');
						$(this).find(".k-multiselect-clearable").css('margin-top','-7px'); //margin-left: 23px;
						$(this).find(".k-multiselect-clearable").css('margin-left','1px');
					});
					$('[name="filterlb"]').css('margin-top','-61px');	
					//$('[name="filterlb"]').css('margin-left','6px');
					
					//$('[name="TypeDD"]').css('margin-top','-7px');	
					//$('[name="TypeDD"]').css('margin-left','6px');
					$('td[id="TypeDD"]').each(function(x){
						$(this).find('div.k-multiselect-wrap').css('width','120px');
						$(this).find(".k-multiselect-clearable").css('margin-top','-7px'); //margin-left: 23px;
						//$(this).find(".k-multiselect-clearable").css('margin-left','6px');
					});
					$($('td[id="TypeDD"]')).find('div').on('click', function() { 
						var a = $(this).find('select').attr('data-placeholder'); 
						//$(this).find('select').prev().find('input').prop('readOnly',true)
						$(this).find('select').prev().find('input').css('width','180px').css('color','#a2a2a2'); 
						$(this).find('select').prev().find('input').val(a);
					});
						
					$($('td[name="td_filter"]')[0]).find('div').on('click', function() { 
						var a = $(this).find('select').attr('data-placeholder'); 
						//$(this).find('select').prev().find('input').prop('readOnly',true)
						$(this).find('select').prev().find('input').css('width','180px').css('color','#a2a2a2'); 
						$(this).find('select').prev().find('input').val(a);
					});
					$($('td[name="td_filter"]')[1]).find('div').on('click', function() { 
						var a = $(this).find('select').attr('data-placeholder'); 
						$(this).find('select').prev().find('input').css('width','180px').css('color','#a2a2a2'); 
						$(this).find('select').prev().find('input').val(a);
					});
					$($('td[name="td_filter"]')[2]).find('div').on('click', function() { 
						var a = $(this).find('select').attr('data-placeholder'); 
						$(this).find('select').prev().find('input').css('width','180px').css('color','#a2a2a2'); 
						$(this).find('select').prev().find('input').val(a);
					});
					$($('td[name="td_filter"]')[3]).find('div').on('click', function() { 
						var a = $(this).find('select').attr('data-placeholder'); 
						$(this).find('select').prev().find('input').css('width','180px').css('color','#a2a2a2'); 
						$(this).find('select').prev().find('input').val(a);
					});					
				  },10);
				  createdfilters = true;
				  if(gload){						
						gload= false;
						 setTimeout(function () {
						Resloadpp(globalValDrop)
						}, 10)
					}
				 
		}

		function Reset(){
		  $('#typeIsNamed').multiselect('deselectAll', false);
          $('#typeIsNamed').multiselect('updateButtonText');  
		  selectedTypeFilterDropdown();
		  $('td[name="td_filter"]').each(function(x){
		    if($(this).find('select').val() != null){
			  var filterId=$(this).find('select').attr("id");
              var col_nm = filterId.replace('optional','');
			  var selections = [];
              $("#"+filterId+" option:selected").each(function(){
                var optionText = $(this).text();
                selections.push(optionText);
              });
              selectedFilterDropdown(selections,col_nm);			  
		    }
		  });
		  if(drpResID.val()!=null){
			setTimeout(function(){
			 drpResID.prev().find('li').text('Resource'+ " ("+drpResID.val().length+")")
			},10);
		  }else{
			drpResID.prev().find('li').text('Resource')
		  }		  
		}
		function Apply(){
		  selectedTypeFilterDropdown();
		  $('td[name="td_filter"]').each(function(x){
		    if($(this).find('select').val() != null){
			  var filterId=$(this).find('select').attr("id");
              var col_nm = filterId.replace('optional','');
			  var selections = [];
              $("#"+filterId+" option:selected").each(function(){
                var optionText = $(this).text();
                selections.push(optionText);
              });
              selectedFilterDropdown(selections,col_nm);			  
		    }
		  });
		  if(drpResID.val()!=null){
			setTimeout(function(){
			 drpResID.prev().find('li').text('Resource'+ " ("+drpResID.val().length+")")
			},10);
		  }else{
			drpResID.prev().find('li').text('Resource')
		  }
		}
		function myFunction(id) {
		  var dropId=$('#optionalFilter'+id);
		  dropId.multiselect('deselectAll', false);
          dropId.multiselect('updateButtonText'); 
          var col_nm ='Filter'+id;	
          var dropId ='optional'+col_nm;
		  //if(!lock){
		    var multiar = [];
	        var selections = [];
            $("#"+dropId+" option:selected").each(function(){
              var optionText = $(this).text();
              selections.push(optionText);
            });
            multiar = selections;
	        selectedFilterDropdown(multiar,col_nm);
		  //}
		}
		function otherApply(id){
		  global_onchangeEle = ""
		  global_onchangeEle = 'optionalFilter'+id;;
		  var drp_id = 'optionalFilter'+id;
		  var col_nm = drp_id.replace('optional','');
		  //if(!lock){
			var multiar = [];
	        var selections = [];
            $("#"+global_onchangeEle+" option:selected").each(function(){
              var optionText = $(this).text();
              selections.push(optionText);
            });
			multiar = selections;
			selectedFilterDropdown(multiar,col_nm);
		  //}
		}
		function ResetResource(){
		  alert("Test");
		}
		function ApplyResource(){
		  if(drpResID.val()!=null){
	        var cc = drpResID.val().length;
		    setTimeout(function(){
		      drpResID.prev().find('li').text('Resource'+ " ("+cc+")")
		    },10);
		  }else{
		    drpResID.prev().find('li').text('Resource');
		  }
		}
		function selectedTypeFilterDropdown(){
		  var resLen =  AGGetProject.length;
		  counter = 0;
		  var po = 1;
		  var dropVal;
		  $.each(ResFilter, function (indx, MGrid) {
			var resFilter_ar = [];
			if(counter < 4){
			  for(fi=0;fi<resLen;fi++){
				if(resFilter_ar.indexOf(AGGetProject[fi]['Filter'+po]) == -1 && (AGGetProject[fi]['Filter'+po] != null && AGGetProject[fi]['Filter'+po] != "")){
				  resFilter_ar.push(AGGetProject[fi]['Filter'+po]);
				}
			  }
			  if(resFilter_ar.length > 0){
				dropVal=$("#optionalFilter"+po).val();
				counter ++;
				var arr = [];
				var filtrTypedata = []
				var TypeDD =$('td[id="TypeDD"]').find('select').val()
				if(TypeDD != null){
				  /*var gname = TypeDD.toString() == 'Generic'?'True':'False'
				  for(i=0;i<globalValDrop.length;i++){
					if(globalValDrop[i].ResourceIsGeneric == gname){
					  if(arr.indexOf(globalValDrop[i]['Filter'+po]) == -1){															
						arr.push(globalValDrop[i]['Filter'+po])
					  }
					}
				  }*/
				  for(i=0;i<globalValDrop.length;i++){
					for(j=0;j<TypeDD.length;j++){
					  var gname = TypeDD[j].toString() == 'Generic'?'True':'False'
					  if(globalValDrop[i].ResourceIsGeneric == gname){
					    if(arr.indexOf(globalValDrop[i]['Filter'+po]) == -1){
					      arr.push(globalValDrop[i]['Filter'+po])
					    }
					  }
					}													
				  }
				  var nmType = $("#typeIsNamed").attr('data-placeholder');
                  var checkbox_liType = $("#typeIsNamed").data("multiselect");
                  var ity_len_cntTy = 0;
                  for(j=0;j<TypeDD.length;j++){
                    var this_liTY = checkbox_liType.$ul.find('[value="'+TypeDD[j]+'"]'); 
                    this_liTY.prop('checked', true);
                    this_liTY.closest('li').attr('class','active');
                    ity_len_cntTy++;
                  }
				  if($('td[id="TypeDD"]').find('select').children('option').length==TypeDD.length && $("#typeIsNamed").val()!=null){
					var this_All = checkbox_liType.$ul.find('[value="All"]');
					this_All.prop('checked', true);
			        this_All.closest('li').attr('class','active');	
				  }
                  if(ity_len_cntTy != 0){checkbox_liType.$button.find('.multiselect-selected-text').text(nmType+" ("+ity_len_cntTy+")");}
                  $("#typeIsNamed").val(TypeDD);
				}else{
				  for(i=0;i<globalValDrop.length;i++){
					if(arr.indexOf(globalValDrop[i]['Filter'+po]) == -1){
					  arr.push(globalValDrop[i]['Filter'+po])
					}													
				  }
				  var dataName = [{label:'Generic',value:'Generic'},{label:'Named',value:'Named'}];
                  $('#typeIsNamed').multiselect('dataprovider', dataName);
				}
				
				for(i=0;i<arr.length;i++){
				  if(arr[i] == null){
					arr[i] = "Empty"
				  }
				  if(arr[i] == true){
					arr[i] = "true"
				  }
				  if(arr[i] == false){
					arr[i] = "false"
				  }
				}
				arr = arr.sort();
				var finalArr=[];
	            for (j = 0; j < arr.length; j++) {
	              if (arr.length > 0) {
		            var ri = j;
		            var rt = arr[j];
		            finalArr.push({"label":rt,"value":rt})
	              }
	            }
	            $("#optionalFilter"+po).multiselect('dataprovider', finalArr);
				$("#optionalFilter"+po).val(dropVal);
				/*var checkbox_li = $("#optionalFilter"+po).data("multiselect");
		        var ity_len_cnt = 0;
		        if(dropVal!=null){
			      for(j=0;j<dropval.length;j++){
			        var this_li = checkbox_li.$ul.find('[value="'+dropval[j]+'"]'); 
		            this_li.prop('checked', true);
			        this_li.closest('li').attr('class','active')
			      }
		        }
			    var nmsp = $("#optionalFilter"+po).attr('data-placeholder');
			    var selectedValues=[];
			    $("#optionalFilter"+po).next().find('input[type=checkbox]:checked').each(function(i,e){
                  selectedValues.push(e.value);
			      ity_len_cnt++
                });
		        if(ity_len_cnt != 0){
			       checkbox_li.$button.find('.multiselect-selected-text').text(nmsp+" ("+ity_len_cnt+")");
			    }
			    $("#optionalFilter"+po).val(dropval);*/
				var resChk=checkValue(dropVal, finalArr);
				if($("#optionalFilter"+po).val()!=null && resChk=="Exist"){
				  var dropVal=$("#optionalFilter"+po).val();
				}
				var nmsp = $("#optionalFilter"+po).attr('data-placeholder');
				var checkbox_li = $("#optionalFilter"+po).data("multiselect");
				var ity_len_cnt = 0;
				if(dropVal!=null && resChk=="Exist"){
				  for(j=0;j<dropVal.length;j++){
			        var this_li = checkbox_li.$ul.find('[value="'+dropVal[j]+'"]'); 
		            this_li.prop('checked', true);
			        this_li.closest('li').attr('class','active');
					ity_len_cnt++;
			      }
				}
				if($("#optionalFilter"+po).children('option').length==finalArr.length && $("#optionalFilter"+po).val()!=null){
                  var this_All = checkbox_li.$ul.find('[value="All"]');
                  this_All.prop('checked', true);
                  this_All.closest('li').attr('class','active');	
                }
			    if(ity_len_cnt != 0){checkbox_li.$button.find('.multiselect-selected-text').text(nmsp+" ("+ity_len_cnt+")");}
				
				var cc = $("#optionalFilter"+po).find(":selected").length;
			    var ccm = $("#optionalFilter"+po).find('select').attr('data-placeholder');
			    $("#optionalFilter"+po).prev().find('li').text(ccm+ " ("+cc+")");
			    if($("#optionalFilter"+po).val() != null){						
				  $("#optionalFilter"+po).prev().find('input').css('margin-top','-25px');
				  $("#optionalFilter"+po).prev().find('li').css('border-radius','0px');
				  $("#optionalFilter"+po).prev().find('li').css('border-color','white');
				  $("#optionalFilter"+po).prev().find('li').css('background-color','white');
				}else{
				  $("#optionalFilter"+po).prev().find('input').css('margin-top','0px');
				} 
			  }
			} po++;
		  });
							if(ResFilter.length != 0){
								if(changedrop != ''){
								var nameglobal_onchangeEle = changedrop;// ResFilter[0].ProjectFilter.replace(/\s+/g, '')
								lock = false;
								$('#'+nameglobal_onchangeEle).trigger("change");
								lock = true;
								}/*else{
									Resloadpp(globalValDrop)
								}*/
								Resloadpp(globalValDrop);
							}
							 
		
		}
		var changedrop = ''
		var lastselected = "";
		var lastselectedAr = [];
		var multiarList = [];
		var multiFiltertype;
		var filterSwitch = false;
		var createdfilters = false;
		var filteredAr = [];
		var filterGrid = false;
		var inactivUserIdn2 = true;
		var Filterseries = [];
		function selectedFilterDropdown(multiar,mft){
			if(Filterseries.indexOf(mft) == -1){
				Filterseries.push(mft);
				clearF = true;
			}
			
			if(multiar.length == 0){
				for( var i = 0; i < Filterseries.length; i++){    
					if ( Filterseries[i] === mft) { 				
						Filterseries.splice(i, 1); 
					}				
				}
			}
			//console.log(multiar);
			filterSwitch = true
			/* for(i=0;i<multiar.length;i++){
				if(multiar[i] == "Empty"){
					multiar[i] = null;
				}
			}
			multiarList = multiar;
			
			multiFiltertype =mft; */
			//getManagers();
			
			filterSwitch = false;
			var arr2 = []
			var TypeDD =$('td[id="TypeDD"]').find('select').val()
								
				if(TypeDD != null){
					for(i=0;i<globalValDrop.length;i++){
					for(j=0;j<TypeDD.length;j++){
					  var gname = TypeDD[j].toString() == 'Generic'?'True':'False'
					  if(globalValDrop[i].ResourceIsGeneric == gname){
					    arr2.push(globalValDrop[i])
					  }
					}													
				  }
				  var nmType = $("#typeIsNamed").attr('data-placeholder');
                  var checkbox_liType = $("#typeIsNamed").data("multiselect");
                  var ity_len_cntTy = 0;
                  for(j=0;j<TypeDD.length;j++){
                    var this_liTY = checkbox_liType.$ul.find('[value="'+TypeDD[j]+'"]'); 
                    this_liTY.prop('checked', true);
                    this_liTY.closest('li').attr('class','active');
                    ity_len_cntTy++;
                  }
				  if($('td[id="TypeDD"]').find('select').children('option').length==TypeDD.length && $("#typeIsNamed").val()!=null){
					var this_All = checkbox_liType.$ul.find('[value="All"]');
					this_All.prop('checked', true);
			        this_All.closest('li').attr('class','active');	
				  }
                  if(ity_len_cntTy != 0){checkbox_liType.$button.find('.multiselect-selected-text').text(nmType+" ("+ity_len_cntTy+")");}
                  $("#typeIsNamed").val(TypeDD);
						/*var gname = TypeDD.toString() == 'Generic'?'True':'False'
						for(i=0;i<globalValDrop.length;i++){
								if(globalValDrop[i].ResourceIsGeneric == gname){																							
											arr2.push(globalValDrop[i])
								}
						}*/
					}
					else{
							for(i=0;i<globalValDrop.length;i++){									
									arr2.push(globalValDrop[i])	
							}
					}
			
			var fu = arr2;
			
			filterGrid = false;
			selectedList = [];
			selectedList_Field = [];
			$('td[name="td_filter"]').each(function(x){
				if($(this).find('select').val() != null){
					filterGrid = true;
					var nm = ($(this).find('select')[0].id).replace('optional','');
					var dropval = $(this).find('select').val();
					var obj = {};
					obj.id = nm;
					obj.filter = dropval
					selectedList.push(obj)
					//selectedList_Field.push()
					for(i=0;i<dropval.length;i++){
						if(dropval[i] == "Empty"){
							dropval[i] = null;
						}
						if(dropval[i] == "true"){
							dropval[i] = true;
						}
						if(dropval[i] == "false"){
							dropval[i] = false;
						}
					}
					var filterSecman = fu.filter(function(x){
						return dropval.includes(x[nm]);
					});
					fu = filterSecman
					//multiarList = Secman;
				}
				
			})
			if(fu.length == 0){
				var it = selectedList.filter(function(x){
						return x.id == mft;
					});
				if(it.length > 0){
					var filterSecman = globalValDrop.filter(function(x){
						return it[0].filter.includes(x[mft]);
					});
				fu = filterSecman;
				}
				
			}			
			setotherdropdown(globalValDrop,fu,mft,multiar);			
			stickFilter = fu;			
			Resload(fu);
			filterGrid = false;
		}
		
  function Resloadpp(RLSArrpp){
	 Res_data=[]
	var arr2 = []
    var TypeDD =$('td[id="TypeDD"]').find('select').val()
	if(TypeDD != null && TypeDD.length == 1){
	  var gname = TypeDD.toString() == 'Generic'?'True':'False'
	  for(i=0;i<RLSArrpp.length;i++){
		if(RLSArrpp[i].ResourceIsGeneric == gname){																							
		  arr2.push(RLSArrpp[i])
		}
	  }
	}else{
	  for(i=0;i<RLSArrpp.length;i++){									
		arr2.push(RLSArrpp[i])	
	  }
	}
	datalength =arr2;
	var strOptions;
	datalength.sort(function(a, b) { 
	  return a.ResourceId - b.ResourceId  ||  a.Resourcename.localeCompare(b.Resourcename);
	});
	for (j = 0; j < datalength.length; j++) {
	  if (datalength.length > 0) {
		var ri = datalength[j].ResourceId
		var rt = datalength[j].Resourcename;
		Res_data.push({"label":rt,"value":ri});
		//Res_data.push({"text":rt,"value":ri})
		//strOptions = strOptions + "<option  value='" + datalength[j].ResourceId + "' >" + datalength[j].ResourceName + "</option>";
	  }
	}
	$('#ResourceCount').html(datalength.length)
	/*$("#drp_resources").width(150).kendoMultiSelect({ //kendoDropDownList
	  dataSource: Res_data,
	  autoClose: false,
	  tagMode: "single",
	  filter: "contains",
	  dataTextField: "text",
      dataValueField: "value",
	  change: function(e){
		global_onchangeEle = ""
		global_onchangeEle = this.element[0].id;
		var ProjectFilterN = global_onchangeEle;//"Type"
		if($("#"+ProjectFilterN.replace(/\s+/g, '')).val() != null){
		  var cc = $("#"+ProjectFilterN.replace(/\s+/g, '')).val().length;
		  $("#"+global_onchangeEle).prev().find('li').text('Resources'+ " ("+cc+")")
		  $("#"+ProjectFilterN.replace(/\s+/g, '')).prev().find('input').css('margin-top','-27px');
		  $("#"+ProjectFilterN.replace(/\s+/g, '')).prev().find('li').css('border-radius','0px');
		  $("#"+ProjectFilterN.replace(/\s+/g, '')).prev().find('li').css('border-color','white');
		  $("#"+ProjectFilterN.replace(/\s+/g, '')).prev().find('li').css('background-color','white');
		  $("#"+ProjectFilterN.replace(/\s+/g, '')).prev().find('span').show();
		} else{ 
		  $("#"+ProjectFilterN.replace(/\s+/g, '')).prev().find('input').css('margin-top','0px');
		  $("#"+ProjectFilterN.replace(/\s+/g, '')).prev().find('input').css('width','170px');
		  $("#"+ProjectFilterN.replace(/\s+/g, '')).prev().find('input').val('Resource')
		  $('.k-i-close').hide()
		}
	  },select: function(e) {
	  }
	}).data("kendoMultiSelect");*/
	drpResID.multiselect('dataprovider', Res_data);
	setTimeout(function(){
	  $("#resReset").bind("click", function () {            
        drpResID.multiselect('deselectAll', false);
        drpResID.multiselect('updateButtonText'); 
        if(drpResID.val()!=null){
	      var cc = drpResID.val().length;
		  setTimeout(function(){
		    drpResID.prev().find('li').text('Resource'+ " ("+cc+")")
		  },10);
		}else{
		  drpResID.prev().find('li').text('Resource');
		}		
      }); 
	  $("#resApply").bind("click", function () {            
        if(drpResID.val()!=null){
	      var cc = drpResID.val().length;
		  setTimeout(function(){
		    drpResID.prev().find('li').text('Resource'+ " ("+cc+")")
		  },10);
		}else{
		  drpResID.prev().find('li').text('Resource');
		}		
      }); 
	},10);
	//var multiselect = drpResID.data("kendoMultiSelect");
//multiselect.setDataSource(Res_data);

	/*strOptions="<option  value=''></option>" + strOptions;
	$("#drp_resources").text("");
    $("#drp_resources").append(strOptions).trigger('chosen:updated');
	// $(".chosen-select").chosen({no_results_text: "Oops, nothing found!",width: "17%",}); 
	$(".chosen-select,.chosen-multiple-select").chosen({search_contains: true});
	$("#drp_resources").data("kendoMultiSelect").setDataSource(Res_data);*/
  }
		
  function Resload(RLSArr){
	Res_data=[]
	datalength =[];
	var musersfil = [];
	for (var j = 0; j < totalarray.length; j++) {
	  musersfil.push(totalarray[j].Resourcename);
	}
    var mteluniqueuser =  getUnique(musersfil);
	for (j = 0; j < RLSArr.length; j++) {
	  if(mteluniqueuser.indexOf(RLSArr[j].Resourcename) == -1){
		datalength.push(RLSArr[j])
	  }
	}
	var strOptions;
	datalength.sort(function(a, b) { 
	  return a.ResourceId - b.ResourceId  ||  a.Resourcename.localeCompare(b.Resourcename);
	});
	for (j = 0; j < datalength.length; j++) {
	  if (datalength.length > 0) {
		var ri = datalength[j].ResourceId
		var rt = datalength[j].Resourcename;
		//Res_data.push({"text":rt,"value":ri})
		Res_data.push({"label":rt,"value":ri});
		//strOptions = strOptions + "<option  value='" + datalength[j].ResourceId + "' >" + datalength[j].ResourceName + "</option>";
	  }
	}
	$('#ResourceCount').html(datalength.length)
	drpResID.multiselect('dataprovider', Res_data);
	setTimeout(function(){
	  $("#resReset").bind("click", function () {            
        drpResID.multiselect('deselectAll', false);
        drpResID.multiselect('updateButtonText'); 
        if(drpResID.val()!=null){
	      var cc = drpResID.val().length;
		  setTimeout(function(){
		    drpResID.prev().find('li').text('Resource'+ " ("+cc+")")
		  },10);
		}else{
		  drpResID.prev().find('li').text('Resource');
		}		
      }); 
	  $("#resApply").bind("click", function () {            
        if(drpResID.val()!=null){
	      var cc = drpResID.val().length;
		  setTimeout(function(){
		    drpResID.prev().find('li').text('Resource'+ " ("+cc+")")
		  },10);
		}else{
		  drpResID.prev().find('li').text('Resource');
		}		
      });
	},10);
	/*var multiselect = drpResID.data("kendoMultiSelect");
    multiselect.setDataSource(Res_data);
					 /*strOptions="<option  value=''></option>" + strOptions;
					 $("#drp_resources").text("");
					 $("#drp_resources").append(strOptions).trigger('chosen:updated');
					// $(".chosen-select").chosen({no_results_text: "Oops, nothing found!",width: "17%",}); 
					  $(".chosen-select,.chosen-multiple-select").chosen({search_contains: true});
					  $("#drp_resources").data("kendoMultiSelect").setDataSource(Res_data);*/
  }
		var stickFilter = [];
		var globalStikyFil = []; 
  function setotherdropdown(Secman,fut,mft,multiar){
	var typArr=fut.filter((a, i) => fut.findIndex((s) => a.ResourceIsGeneric === s.ResourceIsGeneric) === i);
	var resType=[];
	var typeVal=$("#typeIsNamed").val();
	var filterCount=0;
	$('td[name="td_filter"]').each(function(x){
	  if($(this).find('select').val() != null){
		filterCount++;
	  }
	});
	if(filterCount>0){
	  for(k=0;k<typArr.length;k++){
	    if (typArr.length > 0) {
		  if(typArr[k].ResourceIsGeneric=='False'){
		    var ri = "Named";	
		  }else{
		    var ri = "Generic";
		  }
		  resType.push({"label":ri,"value":ri});
	    }
	  }
	  $('#typeIsNamed').multiselect('dataprovider', resType);
	}else{
	  var resType = [{label:'Generic',value:'Generic'},{label:'Named',value:'Named'}];
      $('#typeIsNamed').multiselect('dataprovider', resType);
	}
	$("#typeIsNamed").val(typeVal);
	var resType=checkValue(typeVal, resType);
	if($("#typeIsNamed").val()!=null && resType=="Exist"){
	  var typeVal=$("#typeIsNamed").val();
	}
	var nmType = $("#typeIsNamed").attr('data-placeholder');
	var checkbox_liType = $("#typeIsNamed").data("multiselect");
	var ity_len_cntTy = 0;
	if(typeVal!=null && resType=="Exist"){
	  for(j=0;j<typeVal.length;j++){
	    var this_liTY = checkbox_liType.$ul.find('[value="'+typeVal[j]+'"]'); 
		this_liTY.prop('checked', true);
		this_liTY.closest('li').attr('class','active');
		ity_len_cntTy++;
	  }
	  if($('td[id="TypeDD"]').find('select').children('option').length==typeVal.length && $("#typeIsNamed").val()!=null){
					var this_All = checkbox_liType.$ul.find('[value="All"]');
					this_All.prop('checked', true);
			        this_All.closest('li').attr('class','active');	
				  }
	}
	if(ity_len_cntTy != 0){checkbox_liType.$button.find('.multiselect-selected-text').text(nmType+" ("+ity_len_cntTy+")");}
	
	Res_data=[];
	for (j = 0; j < fut.length; j++) {
	  if (fut.length > 0) {
		var ri = fut[j].ResourceId
		var rt = fut[j].Resourcename;
		Res_data.push({"label":rt,"value":ri});
	  }
	}
	drpResID.multiselect('dataprovider', Res_data);
	setTimeout(function(){
	  $("#resReset").bind("click", function () {            
        drpResID.multiselect('deselectAll', false);
        drpResID.multiselect('updateButtonText'); 
        if(drpResID.val()!=null){
	      var cc = drpResID.val().length;
		  setTimeout(function(){
		    drpResID.prev().find('li').text('Resource'+ " ("+cc+")")
		  },10);
		}else{
		  drpResID.prev().find('li').text('Resource');
		}		
      }); 
	  $("#resApply").bind("click", function () {            
        if(drpResID.val()!=null){
	      var cc = drpResID.val().length;
		  setTimeout(function(){
		    drpResID.prev().find('li').text('Resource'+ " ("+cc+")")
		  },10);
		}else{
		  drpResID.prev().find('li').text('Resource');
		}		
      });
	},10);
	var fu = fut;
	globalcount = 0;
	for(i=0;i<multiar.length;i++){
	  if(multiar[i] == "Empty"){
		multiar[i] = null;
	  }
	  if(multiar[i] == "true"){
		multiar[i] = true;
	  }
	  if(multiar[i] == "false"){
		multiar[i] = false;
	  }
	}
	var filterSecman = fu.filter(function(x){
	  return multiar.includes(x[mft]);
	});
	var d = filterSecman
	globalStikyFil = filterSecman
	if(d.length == globalValDrop.length){
	}
	if(IsStrNullOrEmpty(multiar)){
	  d = fut;
	}
	if(IsStrNullOrEmpty(multiar)){
	  d = fut;
	  globalStikyFil = fut;
	}
	$('td[name="td_filter"]').each(function(x){
	  if($(this).find('select').val() == null){
		globalcount ++;
	  }
	});
	var c = d;
	$('td[name="td_filter"]').each(function(x){
	  if($(this).find('select').val() == null){
		var nm = ($(this).find('select')[0].id).replace('optional','');
		var dropval = $(this).find('select').val();
		var arr = []; 
		for(i=0;i<d.length;i++){
		  if(d[i][nm] == null){
			d[i][nm] = "Empty";
		  }
		  if(d[i][nm] == true){
			d[i][nm] = "true";
		  }
		  if(d[i][nm] == false){
			d[i][nm] = "false";
		  }
		  if(arr.indexOf(d[i][nm]) == -1 && d[i][nm] != undefined){
			arr.push(d[i][nm])
		  }
		}
		for(i=0;i<arr.length;i++){
		  if(arr[i][nm] == null){
			arr[i][nm] = "Empty";
		  } 
		  if(arr[i][nm] == true){
			arr[i][nm] = "true";
		  }
		  if(arr[i][nm] == false){
			arr[i][nm] = "false";
		  }
		}
		arr = arr.sort();
		var finalArr=[];
	    for (j = 0; j < arr.length; j++) {
	      if (arr.length > 0) {
		    var ri = j;
		    var rt = arr[j];
		    finalArr.push({"label":rt,"value":rt})
	      }
	    }
	    $(this).find('select').multiselect('dataprovider', finalArr);
		for(i=0;i<d.length;i++){
		  if(d[i][nm] == "Empty"){
			d[i][nm] = null;
		  }
		  if(d[i][nm] == "true"){
			d[i][nm] = true;
		  }
		  if(d[i][nm] == "false"){
			d[i][nm] = false;
		  }
		}
	  }else{
		var nm = ($(this).find('select')[0].id).replace('optional','');
		var nmsp = $(this).find('select').attr('data-placeholder');
		var dropval = $(this).find('select').val();
		var arr = [];
		var arr2 = [];
		if(nm == mft){
		  return true; 
		}
		var arr2 = []
		var TypeDD =$('td[id="TypeDD"]').find('select').val()							
		if(TypeDD != null && TypeDD.length == 1){
			var gname = TypeDD.toString() == 'Generic'?'True':'False'
			for(i=0;i<globalValDrop.length;i++){
				if(globalValDrop[i].ResourceIsGeneric == gname){																							
					arr2.push(globalValDrop[i])
				}
			}
		}else{
		  for(i=0;i<globalValDrop.length;i++){									
		    arr2.push(globalValDrop[i])	
		  }
		}
		if(Filterseries.length == 1){
		  c = arr2;
		}else{
		  var count = 0;
		  c = arr2;
		  var pack = [];
		  for( var i = 0; i < Filterseries.length; i++){    
			if ( Filterseries[i] != nm) { 							
			  pack.push(Filterseries[i]); 
			}   
		  }
		  for(i=0;i<pack.length;i++){
			var valar = $("#optional"+pack[i-count]).val();
			for(j=0;j<valar.length;j++){
			  if(valar[j] == "Empty"){
				valar[j] = null;
			  }
				if(valar[j] == "true"){
				valar[j] = true;
			  }
				if(valar[j] == "false"){
				valar[j] = false;
			  }			  
		  }
			var fil = pack[i-count];
			var filterSecman = c.filter(function(x){
			  return valar.includes(x[fil]);
			});
		  c = filterSecman;
		  }
		}
		for(i=0;i<c.length;i++){
		  if(c[i][nm] == null){
			c[i][nm] = "Empty";
		  } 
		  if(c[i][nm] == true){
			c[i][nm] = "true";
		  }
		  if(c[i][nm] == false){
			c[i][nm] = "false";
		  }
		  if(arr.indexOf(c[i][nm]) == -1 && c[i][nm] != undefined){
			arr.push(c[i][nm])
		  }
		}
		for(i=0;i<arr.length;i++){
		  if(arr[i][nm] == null){
			arr[i][nm] = "Empty";
		  } 
		   if(arr[i][nm] == true){
			arr[i][nm] = "true";
		  }
		   if(arr[i][nm] == false){
			arr[i][nm] = "false";
		  }
		}
		arr = arr.sort();
		var finalArr=[];
	                      for (j = 0; j < arr.length; j++) {
	  if (arr.length > 0) {
		var ri = j;
		var rt = arr[j];
		finalArr.push({"label":rt,"value":rt})
	  }
	}
	$(this).find('select').multiselect('dataprovider', finalArr);
	var checkbox_li = $(this).find('select').data("multiselect");
	var dropval_new = [];
    var dropval_new2 = [];
	var ity_len_cnt = 0;
	for(j=0;j<dropval.length;j++){
	  var this_li = checkbox_li.$ul.find('[value="'+dropval[j]+'"]');
	  var item = c.filter(function(x){
	    return x[nm] == dropval[j];
	  });
	  var ity_len = item.length;
	  if(ity_len > 0){
		for(k=0;k<ity_len;k++){
		  if(item[k][nm] == dropval[j]){
			dropval_new.push(dropval[j]);
			if(dropval_new2.indexOf(dropval[j]) == -1){
			  dropval_new2.push(dropval[j]);
			  if(this_li.length > 0){
				ity_len_cnt++
			  }
			}
			this_li.prop('checked', true);
			this_li.closest('li').attr('class','active')
		  }
		}
	  }
	}
	if(ity_len_cnt != 0){checkbox_li.$button.find('.multiselect-selected-text').text(nmsp+" ("+ity_len_cnt+")");}
	$(this).find('select').val(dropval_new);
	var cc =$("#optional"+nm).find(":selected").length;
	$("#optional"+nm).prev().find('li').text(nmsp+ " ("+cc+")");
	if($("#optional"+nm).val() != null){						
	  $("#optional"+nm).prev().find('input').css('margin-top','-25px');
	  $("#optional"+nm).prev().find('li').css('border-radius','0px');
	  $("#optional"+nm).prev().find('li').css('border-color','white');
	  $("#optional"+nm).prev().find('li').css('background-color','white');
	}else{
	  $("#optional"+nm).prev().find('input').css('margin-top','0px');
	} 
  }
	  for(i=0;i<c.length;i++){
		if(c[i][nm] == "Empty"){
		  c[i][nm] = null;
		}
        if(c[i][nm] == "true"){
		  c[i][nm] = true;
		}
        if(c[i][nm] == "false"){
		  c[i][nm] = false;
		}		
	  }
	})    
  }	

		var globalcount = 0;
		var Finalmultival = [];
		
		
		function getsortopt(){
			var dataS = [
					{id:1,value:"Ascending by Resource"},
					{id:2,value:"Descending by Resource"}
					];
			if(RM_ResourceDisplayField != undefined){
				dataS.push(
					{id:3,value:"Ascending by "+RM_ResourceDisplayField},
					{id:4,value:"Descending by "+RM_ResourceDisplayField}						
				)
			}
			var dataSource = new kendo.data.DataSource({
				  data: dataS
				});
				
			var select = $('#drp_sortorder').data("kendoDropDownList");
			select.setDataSource(dataSource);
			select.value([]);
			select.refresh();
			$('[aria-owns="drp_sortorder_listbox"]').css('width','370px');
			myWindowSort.data("kendoWindow").center();
			myWindowSort.data("kendoWindow").open();
		}
		var sortingApply = false;
		var sortingType = 1;
		function clickapplyrescsorting(){
			var val = $('#drp_sortorder').data("kendoDropDownList").value();
			if(val != ''){
				sortingType = val;
				sortingApply = true;
				roleEngagementload();	
			}
			myWindowSort.data("kendoWindow").close();
		}
	function removeInactiveRes(newResar){
			var counter = 0;
			if(globalValDrop.length == newResar.length){
				//return;
			}
			var newglbar = [];
			for(i=0;i<newResar.length;i++){
				var item = resGetResources.value.filter(function(x){
					return x.ResourceId == resReName[i].ResourceId
				});
				if(item.length != 0){
					newglbar.push(item[0]);
				}
				
			}
			$('td[name="td_filter"]').each(function(x){
				var nm = ($(this).find('select')[0].id).replace('optional','');
				var ddl = $(this).find('select').data("kendoMultiSelect")//.setDataSource(arr);
				var oldData = ddl.dataSource.data();
				if(oldData[0] == null){
					oldData[0] = "Empty"
				}
				for(i=0;i<oldData.length;i++){
					if(oldData[i] == "Empty"){
						oldData[i] = null;
					}
					var itm = newglbar.filter(function(x){
						return x[nm] == oldData[i]
					})
					if(oldData[i] == null){
							oldData[i] = "Empty";
						}
					if(itm.length == 0){
						/* if(oldData[i] == null){
							oldData[i] = "Empty";
						} */
						ddl.dataSource.data().remove(oldData[i]);
					}
					else{
						//ddl.dataSource.data().remove(itm[0]);
						/* if(ddl.dataSource.data().indexOf(oldData[i]) == -1){
							ddl.dataSource.data().push(oldData[i]);
						} */
						
					}
				}
				/* if(lastselected == nm ){
					
					var filt = newglbar.filter(function(x){
						return lastselectedAr.includes(x[nm]);
					})
					for(j=0;j<filt.length;j++){
						if(filt[j][nm] == null){
							filt[j][nm] = "Empty";
						}
						if(ddl.dataSource.data().indexOf(filt[j][nm]) == -1){
								ddl.dataSource.data().push(filt[j][nm]);
						}
					}
				} */
				for(j=0;j<newglbar.length;j++){
						if(newglbar[j][nm] == null){
							newglbar[j][nm] = "Empty";
						}
						if(ddl.dataSource.data().indexOf(newglbar[j][nm]) == -1){
								ddl.dataSource.data().push(newglbar[j][nm]);
						}
					}
	  if($(this).find('select').val() == null){
		counter++;
	  }
	})
	if(counter == 4 ){
	  //roleEngagementload(newglbar);
	}
	globalFilterAr = newglbar;
  }
  var globalFilterAr = [];
  window.onbeforeunload = function () {
    if(dataIdPP.length !=0){
	  return 'Are you sure you want to leave this page?  You have unsaved changes.  Press OK to leave the page, which will lose any unsaved changes.  Press Cancel to stay on this page.';  
	}
  }
  function  setInactiveResIcon(){
	for(i=0;i<Inactive_Res.length;i++){
	  $('[role="row"]').each(function(x){
		var nm =  $(this).find('td').eq(2).text()//ResourceTitle
		if(nm != ''){
		  var rId =  $(this).find('td').eq(1).text() //ResourceId
          if((Inactive_Res[i].ResourceId == rId) && (Inactive_Res[i].ResourceIsActive != 'True')){
			if(nm.replace(/\s+/g, '').startsWith(Inactive_Res[i].Title.replace(/\s+/g, ''))){
			  $(this).find('td').eq(2).append('<span class="k-icon k-i-error" style="float: center;" title="Inactive Resource"></span>'); 
			}
		  }			
		}
	  })  
	}
  }
  var s4_workspace_height = 0;
  function sortOptionConfig(){
	$('th[data-title="Resource"]').contents().filter(function(){
	  return this.nodeType === 3;
    }).remove();
	$('th[data-title="Resource"]').append('<div id="sortingtypeList" class="dropdown-check-list" tabindex="100"><span class="sortingtypeListanchor">Resource</span><ul class="sortingtypeListitems"></ul></div>');		
    $('.k-grid-header-wrap.k-auto-scrollable').css('position','initial')
	$('.sortingtypeListitems').append('<li onclick="clickapplyrescsorting(1)" id="1">Ascending by Resource Name </li>').append('<li id="2" onclick="clickapplyrescsorting(2)">Descending by Resource Name </li>');
	if(RM_ResourceDisplayField_N != undefined){
	  $('.sortingtypeListitems').append('<li id="3" onclick="clickapplyrescsorting(3)">Ascending by '+RM_ResourceDisplayField_N+' </li>').append('<li id="4" onclick="clickapplyrescsorting(4)">Descending by '+RM_ResourceDisplayField_N+' </li>');
    }
	/*********************************/
	var checkList = document.getElementById('sortingtypeList');
	checkList.getElementsByClassName('sortingtypeListanchor')[0].onclick = function(evt) {
	  if(gridchanged){				
		alert('You have unsaved changes. Changing your sort order will lose these changes. Save your changes before adjusting your sort order.');	
		return false;				
	  }
	  if (checkList.classList.contains('visible')){
		checkList.classList.remove('visible');
	  }else{
		$('.sortingtypeListitems').find('li').each(function(x){
		  if($(this).attr('id') == sortingType){
			$(this).css("background", "#ccc");
		  }
		})
		checkList.classList.add('visible');
	  }
	}
  }
  var gridchanged = false;
  function clickapplyrescsorting(vv){
	var akcheck =false;
	if(gridchanged){
	  akcheck = confirm('You have unsaved changes. Changing your sort order will lose these changes. Save your changes before adjusting your sort order.');
	}else{
	  akcheck =true;
	}
	if(akcheck){
	  gridchanged = false;
	  var val = "0";
	  if(vv == undefined){
		val = "0";
	  }else{
		val = vv;
	  }
	  if(val != '' || val == 0){
		sortingType = val;
		sortingApply = true;
		GetData();	
	  }
	}
  }
  function checkValue(value, arr) {
    var status = 'Not exist';
	if(value!=null){
    for(var j=0;j<value.length;j++){
      for(var i = 0; i < arr.length; i++) {
        if(arr[i].value == value[j]) {
          status = 'Exist';
          break;
        }
      }
	}}
    return status;
  }
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
	currency: 'USD',
  });
</script>
</html>