
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
	<script src="/sites/Development/Site%20Assets/RMApp/PageloadRef/jexcel.js"></script>
    <script src="/sites/Development/Site%20Assets/RMApp/PageloadRef/jsuites.js"></script>
    <link rel="stylesheet" href="/sites/Development/Site%20Assets/RMApp/PageloadRef/jsuites.css" type="text/css" />
    <link rel="stylesheet" href="/sites/Development/Site%20Assets/RMApp/PageloadRef/jexcel.css" type="text/css" />	   
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

#sideNavBox{
	/*display:none;*/
}
#s4-workspace {
   /* overflow: hidden !important;*/
	
}
.backgroundBlur {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: none;
}

.k-grid td {
    padding: 0.1em 0.1em !important;
	font-family: "Segoe UI", Segoe, Tahoma, Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 400;	
	cursor:pointer;
}


.mybox{
	display:flex
}


#Daterangebox{
	display:none;
	        top: 177px;
    left: 91.5%;
    position: sticky;
    height: 15px;
}

.OkbuttonDate{
  color: black !important; 
	}


#Daterange{

	    /* background-color: #dbedf4; */
    color: #00435e;
    /* border: 1px; */
    margin-top: 49px;
    margin-bottom: 10px;
    /* border-width: 1px; */
    /* border-style: solid; */
    padding: -29px 9px;
    font-size: 13px;
    font-weight: normal;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    /* margin: 10px 0; */
    border-radius: 4px;
    border-color: #a3d0e4;
}
#Daterange:hover{
      color: #001117;
 
}
.ttesting {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
	padding-bottom: 10px;
  display: none;
}
.ms-rtestate-field p,{   
    white-space: nowrap;	
}
#DeltaPlaceHolderMain {
	font-family: "Segoe UI", Segoe, Tahoma, Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 400;
}
.ms-rtestate-field p, p.ms-rteElement-P {
    margin: 0px 0px 0px 0px !important;
}

.k-grid-header th.k-header {
	padding:0.2em 0.2em !important;
}
.k-i-filter{
	padding-left: 17px !important;
}
.change-background {
            background-color: #fdda0d;
        }
		.change-background2 {
            background-color: #ff6e69;
        }
	.change-background3 {
            background-color: none;
        }
		
.critical {	
	color: red !important;
  }
  .green{
	  color: rgb(65, 189, 70) !important;
  }
  .k-datepicker{
	 /* width: 17% !important;*/
  }
  .glyphicon {
    position: relative;
    top: 1px;
    display: inline-block;
    font-family: "Glyphicons Halflings";
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
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
				margin-bottom: 0px !important;
			}
			
			
</style>
 <style>
        /* The Modal (background) */
        .modal {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 2001; /* Sit on top */
            padding-top: 100px; /* Location of the box */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
        }

        .modal-header {
            /*background-color: rgb(216, 216, 216);*/
            background-image: none, linear-gradient(to bottom, rgba(255, 255, 255, 0.45) 0px, rgba(255, 255, 255, 0) 100%);
            background-position: 50% 50%;
            background-color: #d9ecf5 !important;
            color: #00435e !important;
            margin: auto;
            padding: 20px;
            border: 1px solid #bbdceb;
            width: 30%;
            border-bottom-width: 0px;
            font-size: 20px;
            font-weight: 600;
        }
        /* Modal Content */
        .modal-content {
            background-color:#fff;
            color: #00435e !important;
            margin: auto;
            padding: 20px;
            border: 1px solid #bbdceb;
            width: 30%;
        }

        /* The Close Button */
        .close {
            color: #00435e;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
        }

            .close:hover,
            .close:focus {
                color: #000;
                text-decoration: none;
                cursor: pointer;
            }
			
			.btnc{
			background-color: #f3f3f4 !important;
				color: #515967 !important;
				border: 1px #f2f2f2 !important;
			}
			.btncH{
			background-color: #f3f3f4 !important;				
				border: 1px #f3f3f4 !important;
			}
			.hideL {font-weight: bold;}
			
			
			.NumcheckFY {
				color: black !important;
				background: rgb(247 247 150) !important;
			}
			.jexcel_content{
				max-height: 236px !important;
			}
			
			
			.k-multiselect:after {
				/*content: "\25BC";*/
				position: absolute;
				top: 31%;
				right: 25px;
				font-size: 12px;
			}
.k-state-focused,.k-grid-header th.k-state-focused {
  box-shadow: none !important;
}
/*
.k-grid-content, .k-auto-scrollable{
	overflow-y: none !important;
}*/

	.k-multiselect-clearable .k-multiselect-wrap {
    padding-right: 1em !important;
}

.k-multiselect-wrap li {   
    padding: 2px 8px;
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
    top: -36px;
   /* padding: 10px 0px;*/
    z-index: 1000;
    background-color: white;
}
.k-grid-header {
	position: sticky;
    top: 75px;
    padding-right: 0 !important;
    z-index: 1000;
    background-color: white;
	outline: 1px solid;
	outline-color: #a3d0e4;
    }
	.ttfont{
		padding: 0.1em 0.1em !important;
    font-family: "Segoe UI", Segoe, Tahoma, Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 400;
	
	}
	.dropdown-check-list {
  display: inline-block;
  position: absolute;
  top:46%
}
.k-i-comment{
	margin-top: -9px;
    margin-left: -1px;
}
.CIcolor{
	color: #f09609;
    background-color: #fdda08;
    border-radius: 10%;
    height: 12px;
    display: block;
    width: 14px;	
}
.CIcolorEmpty{
	color: #3fa379;
	background-color:#3fc48d;
	border-radius: 10%;
    height: 12px;
    display: block;
    width: 14px;
}
.CIcolorFill{
	color: #3fa379;
	background-color:#bbdceb;
	border-radius: 10%;
    height: 12px;
    display: block;
    width: 14px;
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
[aria-label="delete"]{
	position:initial !important;
}
	.btn-default{
		    text-align: center;
	}
	div.k-window-content{
	  padding:0 !important;
	}
	.panel{
	  border:0 !important;
	  border-radius:0 !important;
	}
	.dropdown-menu{min-width:186px !important;}
	.multiselect{width:200px !important;height:28px !important;}
	.btn-group{margin-top:-5px !important;}
	.k-auto-scrollable{
		overflow:visible;
		overflow-x:visible;
		overflow-y:visible;
	}
	.multiselect-search{
	width: 157px !important;
	}
	.multiselect-container > li:first-of-type { 
	  position: sticky!important; 
	  top: 0px!important; 
	  z-index: 1!important;
      background-color: white;
      padding: 2px;
	}
	.multiselect-container > li:last-of-type { 
	  /*position: sticky!important;
    z-index: 1!important;
    background-color: white!important;
    padding: 6px!important;
    height: 35px!important;
    top: 0!important;
	width:100% !important;
    position:fixed !important;
    bottom:0 !important;
    display: table-row !important;
    background: lightgray !important;*/
	position: sticky!important;
    bottom: 0 !important;
    display: block;
    background: white!important;
    right: 0;
    float: right;
    width: 100% !important;
    padding: 4px;
	}
	//.multiselect-filter { position: sticky !important; top: 5px !important; z-index: 1!important; }
    </style>
<div id="MainDiv"  class="Sticky">	
	<div id="div_Load"  class="cEngView" style='margin-bottom: 10px;'>
	<!-- <select id="drp_projects"  class="chosen-select" multiple   data-placeholder="Select Resource" onchange="GetData()" tabindex="0" ></select> 
	 <select id="required" multiple="multiple" data-placeholder="Select Resource..."></select> -->
	  <div class='col-sm-12' style='margin-left: -1px; margin-top: 21px;background: white;'>  
	  <div class='col-sm-1 reEng'> 
		 <a role="button" class="k-button k-button-icontext k-grid-cancel-changes"  id="btn_replace" href="#" onclick='Cancel();' ><span style='margin-right: 9px;    margin-bottom: 5px;' class="glyphicon glyphicon-home"></span>Home</a>
	   </div> 	
	   <!-- <div class='col-sm-2 DreEnd' >      
		 <input id="drp_RResourceM"  style='margin-bottom: 5px;' Onchange="roleEngagementload()" > 
	  </div>  -->
	  <!--<div class='col-sm-3 DreEnd' >      
		 <input id="drp_Role"  style='margin-bottom: 5px;' Onchange="roleEngagementload()" > 
	  </div>  -->
	   <div class="row DreEnd" style='margin-left: -12px;'>
	   <table /*style="position: sticky;left: 0;"*/>
	   <tr id="fileroptionRows_Labels">
		<!--	<td id="rrole">
				<label> Filters: </label>
			</td>
			<td id="rrole">
				<label> Location: </label>
			</td>
			<td id="rrole">
				<label> Location: </label>
			</td> -->
	   </tr>
	   <tr id="fileroptionRows">
	   <td id="rrole" style="width: 55px;">
				<label> Filters: </label>
			</td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			
	   <td id="rrole">
		  <input id="drp_Role"  style='margin-bottom: 5px;' Onchange="getManagers()"  > 
		  <input id="drp_RoleRead"  disabled style='margin-bottom: 5px; border-radius: 3px;  height: 29px; width: 255px;'  > 
	   </td>
	   <td id="multirrole"  style="padding-left:6px;display:none">
		   <input id="drp_RoleManager"  style='margin-bottom: 5px;' >
	   </td>
	   <td  style="padding-left:6px;display:none">
		 <a role="button" class="k-button k-button-icontext k-grid-cancel-changes gRefresh shsel chktwodata"  id="btn_Seleted" href="#" onclick='SelectedEngagementload();' >Selected Resources</a>
	   </td>
	   <td  style="padding-left:6px;display:none">
		  <a role="button" class="k-button k-button-icontext k-grid-cancel-changes gRefresh chktwodata"  id="btn_All" href="#" onclick='roleEngagementload();' >Show All Resources</a>
	   </td>

		<td id="_filterAllocation_td" style="width:167px"> 
			<select id="_filterAllocation" multiple="multiple"  data-placeholder="Allocation Status" style="top:-3px;width:170px">
		</td>
		
		</tr></table>
	  </div>
	  <!-- <div class="row DreEnd" style='margin-left: 0px;'>
		<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
		</div>
		<div class="col-lg-5 col-md-6 col-sm-6 col-xs-6 rolesel">
		</div>
		<div class="col-lg-4 col-md-3 col-sm-3 col-xs-3 rolesel">
		 <a role="button" class="k-button k-button-icontext k-grid-cancel-changes gRefresh shsel DreEndc"  id="btn_Seleted" href="#" onclick='SelectedEngagementload();' >Selected Resources</a>
		 <a role="button" class="k-button k-button-icontext k-grid-cancel-changes gRefresh DreEndc"  id="btn_All" href="#" onclick='roleEngagementload();' >Show All Resources</a>
		</div>
	  </div> -->
	  <div class='mybox' style='margin-bottom: 7px; margin-left: -14px;'> 
	  <table style="position: sticky;left: 0;"><tr>
	  <td id="1">
	  <a role="button" class="k-button k-button-icontext hideadmin hideadminMList"  id="btn_AddNonProjectName" href="#" onclick='AddNonProjectName();' ><span class="k-icon k-i-add"></span>Add Non-Project Item</a>
	  </td>
	  <td id="2"  style="padding-left:6px;">
	   <a role="button" class="k-button k-button-icontext hideadmin  hideadminMList"  id="btn_ManageNonProject" href="#" onclick='clickManageNonProject();' >Manage Non-Project Items</a>
	  </td>
	  <td  style="padding-left:6px;">
	  <a role="button" class="k-button k-button-icontext k-grid-cancel-changes rolesels gRefresh DreEndc"  id="btn_MSaveEngagement" href="#" onclick='saveFilterEngagements();' ><span class="k-icon k-i-copy"></span>Save</a>
	  </td>
	  <td  style="padding-left:6px;">
	  <a role="button" class="k-button k-button-icontext k-grid-cancel-changes rolesels gRefresh DreEndc"  id="btn_RepEngagement" href="#" onclick='ReplaceEngagementPage();' ><span class="k-icon k-i-arrows-swap"></span>Replace </a>
	  </td>
	  <td  style="padding-left:6px;">
	  <a role="button" class="k-button k-button-icontext k-grid-cancel-changes reEng"  id="btn_ReEngagement" href="#" onclick='RepEngagementPage();' ><span class="k-icon k-i-refresh"></span>Refresh</a>
	  </td>
	  <td  style="padding-left:6px;"><a role="button" class="k-button k-button-icontext k-grid-cancel-changes reEng reEngCopy"  id="btn_ReSaveEngagement" href="#" onclick='savereplaceEngagements();' ><span class="k-icon k-i-check"></span>Save Replace</a>
	  </td>
	  <td  style="padding-left:6px;">
	  <a role="button" class="k-button k-button-icontext k-grid-cancel-changes reEng reEngCopy"  id="btn_cancelRes" href="#" onclick='CancelReplaceRes();' ><span class="k-icon k-i-cancel"></span>Cancel</a>
	  </td>
	  
	  <!--<a role="button" class="k-button k-button-icontext k-grid-cancel-changes gRefresh DreEndc"  id="btn_addEngagement" href="#" onclick='roleEngagementload();' ><span class="k-icon k-i-refresh"></span>Refresh</a>-->
	  
	

	  </tr> </table>
	  
	  <table  class="ttesting">
		<tr>
	  <td id="3"  style="padding-left:6px;">
	   <label class='DreEnd'>Start:</label>
	  </td>
	  <td> <input id="start" class='DreEnd' />
	  </td>
	  <td  style="padding-left:6px;">
	  <label class='DreEnd'>End:</label>
	  </td>
	  <td>
	   <input id="end"  class='DreEnd' /></td>
		 </tr>
		 <tr>   
		   <td>	<div class="k-button OkbuttonDate" style="margin: 10px; left: 260px; margin-top: -12px; position: absolute; background-color: #8dd8f7; padding: 2px 11px 2px 11px;">Apply</div>  </td>
			   <td>	<div class="k-button crossi " style=" margin: 10px; right: -268px; margin-top: 15px; position: relative;">Cancel</div>  </td>
		 </tr> 
		</table>
		<div class="backgroundBlur"></div>

		<div id = "Daterangebox"></div>
	  </div>
	<!--  <div class='col-sm-10'>  
	   <input id="dropdownlist"  style='margin-bottom: 5px;' Onchange="GetData()"  > 
	  </div>  -->
	  </div>
	 <!--  <label>Start:</label> <input id="start" />
	  <label>End:</label><input id="end"  />
	  <a role="button" class="k-button k-button-icontext k-grid-cancel-changes gRefresh"  id="btn_addEngagement" href="#" onclick='roleEngagementload();' ><span class="k-icon k-i-refresh"></span>Refresh</a>
	  <a role="button" class="k-button k-button-icontext k-grid-cancel-changes gRefresh"  id="btn_MSaveEngagement" href="#" onclick='saveFilterEngagements();' ><span class="k-icon k-i-copy"></span>Save Resource</a>
	  <a role="button" class="k-button k-button-icontext k-grid-cancel-changes gRefresh"  id="btn_addEngagement" href="#" onclick='CEngagementPgae();' ><span class="k-icon k-i-plus"></span>Create New</a>-->
							
	</div>
</div>

	<!--
	 <div class="col-sm-12 row cEngNew" style='margin-left: -31px; margin-top: 21px;'>
		<div class='col-sm-2'> 
		 <a role="button" class="k-button k-button-icontext k-grid-cancel-changes"  id="btn_cancel" href="#" onclick='Cancel();' ><span style='margin-right: 9px;    margin-bottom: 5px;' class="glyphicon glyphicon-home"></span>Home</a>
	   </div> 	
		<div class='col-sm-2'> 
		 <input id="drp_GetProjects"  style='margin-bottom: 5px;width: 350px;' Onchange="GetDataSecPageload()" > 
	  </div> 
	  <div class='col-sm-8' > 
		 <label>Start:</label> <input id="startP" />
		 <label>End:</label><input id="endP"  />
		<a role="button" class="k-button k-button-icontext k-grid-cancel-changes gRefSec"  id="btn_gRefSec" href="#" onclick='GetDataSecPageload();' ><span class="k-icon k-i-refresh"></span>Refresh</a>
		 <a role="button" class="k-button k-button-icontext k-grid-cancel-changes gCreateCreNewP"  id="btn_CEngagement" href="#" onclick='CEngagementPgae();' ><span class="k-icon k-i-plus"></span>Create New</a>
		
		<a role="button" class="k-button k-button-icontext k-grid-cancel-changes valhide"  id="btn_CreateNew" href="#" onclick='CreteEng();' ><span class="k-icon k-i-save"></span>Creation Engagement</a>
	 </div>
	</div> -->



	<div class="container-fluid cEngNew" style='margin-left: -17px; margin-top: 21px;'>
	  <div class="row">
		<div class="col-sm-1">
		  <a role="button" class="k-button k-button-icontext k-grid-cancel-changes"  style='width:93px'  id="btn_cancel" href="#" onclick='Cancel();' ><span style='margin-right: 9px;    margin-bottom: 0px;' class="k-icon k-i-indent-decrease k-i-outdent"></span>Go Back</a>
	   </div> 
		<div class="col-sm-4">
		   <input id="drp_GetProjects"  style='margin-bottom: 5px;' Onchange="GetDataSecPageload()" > 
		</div>
		<div class="col-sm-6">
		  <label>Start:</label> <input id="startP" />
		 <label>End:</label><input id="endP"  />
		<a role="button" class="k-button k-button-icontext k-grid-cancel-changes gRefSec"  id="btn_gRefSec" href="#" onclick='GetDataSecPageload();' ><span class="k-icon k-i-refresh"></span>Refresh</a>
		<!-- <a role="button" class="k-button k-button-icontext k-grid-cancel-changes gCreateCreNewP"  id="btn_CEngagement" href="#" onclick='CEngagementPgae();' ><span class="k-icon k-i-plus"></span>Create New</a>-->
		
		</div>
	  </div>
	</div>




	 <div class='col-sm-12 valhide' style='margin-bottom: 5px;' > 
	 <div  class="row" style="">                    
		 <input class="ResALL" type="Checkbox" style='margin-top: 0px;'  name="ResTypes" id="chkResourcetype" onchange="resetDataLU()" value="Generic"/> <label>Generic</label> 
		  <select id="drp_resources" data-placeholder="Select Resource" class="chosen-select"   tabindex="4"  style="height:30px;width:150px; border-radius:5px;">
			<option value="0" selected>Select Resources</option>
		 </select>
		 <label>Start:</label> <input id="start_datepicker" style='height: 24px;' />
		 <label>End:</label><input id="end_datepicker" style='height: 24px;' />
		<!-- <select id="drp_commitment" style="height:26px;width:100px;; border-radius:5px;" onchange="bindValue()">
			<option value="0" selected>Select Commitment</option>
			<option value="25">S</option>
			<option value="50">M</option>
			<option value="75">L</option>
			<option value="100">XL</option>
		 </select> -->
		  <input type="text" id="txt_unit" placeholder="(0% to 100%)" title='(0% to 100%)'style="height:29px;border-radius: 5px;width:99px;" />
		   <a role="button" class="k-button k-button-icontext k-grid-cancel-changes"  id="btn_add" href="#" onclick='AddtoTablecopy();' ><span class="k-icon k-i-plus-circle"></span>Add</a>
			 <!--
		  <a role="button" class="k-button k-button-icontext k-grid-cancel-changes hide"  id="btn_add" href="#" onclick='AddtoTable();' ><span class="k-icon k-i-plus-circle"></span>Add</a>
			  -->          
	  </div>
	 </div>
	<div class='col-sm-12 error' style="position: sticky !important;"> 
	<span id='ErroeMessage' style='color:red'></span>
	<span id='ErroeMessage2' style='color:red;dsiplay;none;'></span>
	<div id="PMLoadgrid" class="cEngViewG" style='margin-left: -15px;'></div>
	</div>

	<div class='col-sm-12' style='margin-top: 10px;'> 
	<div id="RePMLoadgrid" class="RePMload" style='margin-left: -15px;'></div>
	</div>



	<div class='col-sm-12'> 
	<div id="NewItemsgrid" class="cEngNewLen"></div>
	</div>

	<div class='col-sm-12'> 
	<div id="PMLoadgridSec" class="cEngProLen" style='margin-left: -15px;'></div>
	</div>

	<div id="window" style="display:none"> 
		 <div class="panel panel-default">    
			<div class="panel-body overflow-auto" style='height: 203px;overflow-y: auto;'>
				<span id='textvalue'> </span> 
			</div>
			<div class="panel-footer">
			<input type="text" style='width: 90%; height: 30px; border-radius: 0px;resize: none;' class="" id="comment">
			<input type="hidden" style='' class="" id="prouser" >
			<!--<textarea class="" style='width: 90%; height: 30px; border-radius: 0px;resize: none;' rows="5" id="comment"></textarea> -->
			<a role="button" style='padding: 9px; color: blue; margin-left: -4px; border-radius: 0px !important;' class="k-button k-button-icontext k-grid-cancel-changes"  id="btn_sendcomm" href="#" onclick='SendComents();' ><span class="k-icon k-i-button"></span></a>
		   </div>
		</div>	
		<!--<div class="">
		   <a role="button" style='margin-left: 92%;' class=""  id="btn_sendcomm" href="#" onclick='sendSelectedEngagementssecfun();' ><span class="k-icon k-i-refresh"></span></a>
		</div> -->
		
	</div> 

	<div id="windowAdd" style="display:none"> 
		 <div class="panel panel-default">    
			<div class="panel-body overflow-auto" style='height: 150px;overflow-y: auto;'>
			
				<div class="form-horizontal">
					<div class="form-group">
						<div class="col-sm-1 no-padding">
							<label for="Projects">Projects</label>
						</div>
						<div class="col-sm-10 no-padding">						
							<input id="drp_GetProjectsWindow" multiple="multiple"> 
						</div>
					</div>
					<!--<div class="form-group">
						<div class="col-sm-1 no-padding">
							<label for="StartDate">Start</label>
						</div>
						<div class="col-sm-2 no-padding">						
							<input id="start_datepickerW" style='height: 24px;' />
						</div>
						<div class="col-sm-1 no-padding">
							<label for="Enddate" style="padding-left: 20px;">End</label>
						</div>
						<div class="col-sm-3 no-padding">						
							<input id="end_datepickerW" style='height: 24px;' />
						</div>
						<div class="col-sm-2 no-padding">						
							<input type="text" id="txt_unitW" placeholder="(0% to 100%)" title='(0% to 100%)' style="height:20px;border-radius: 5px;" />
						</div>
					</div>	 -->			
				</div>			
			</div>
			<div class="panel-footer" style='height: 31px;'>
			<button type="button" id="ResetFCPForecost" style="float: right;margin-right: 10px; background-color: #015991 !important; width: 12%; color: #fff !important;" class="btn btn-default btn_FCP" onclick="AddProjectmulti();">Add</button>
			<button type="button" id="addgridProjectName" style="float: right;margin-right: 15px; background-color: #015991 !important; width: 12%; color: #fff !important;" class="btn btn-default btn_FCP" onclick="clickgridprojectNonName();">Close</button>
		   </div>
		</div>	
	</div>
	<div id="windowAddSorting" style="display:none;width: 419px;"> 
		 <div class="panel panel-default">    
			<div class="panel-body overflow-auto" style='height: 150px;overflow-y: auto;'>
			
				<div class="form-horizontal">
					<div class="form-group">
						<div class="col-sm-1 no-padding">
							<label for="OrderList">Order List</label>
						</div>
						<div class="col-sm-10 no-padding" id="div_sortoption">						
							 <input id="drp_sortorder"> 
						</div>
					</div>			
				</div>			
			</div>
			<div class="panel-footer" style='height: 31px;'>
			<button type="button" id="applyProjectSorting" style="float: right;margin-right: 15px; background-color: #015991 !important; width: 12%; color: #fff !important;" class="btn btn-default btn_FCP" onclick="clickapplyrescsorting();">Apply</button>
		   </div>
		</div>	
	</div>  

	 <!-- The Modal -->
	 
	 
	 <div id="windowAddNonProject" style="display:none"> 
		 <div class="panel panel-default">    
			<div class="panel-body overflow-auto" style='height: 187px;overflow-y: auto;overflow-x: hidden;padding:0'>
			
				<div class="form-horizontal">
				<!--<div class="form-group">
						<div class="col-sm-2 no-padding">
							<label for="txtPrefix">Prefix</label>
						</div>
						<div class="col-sm-8 no-padding">						
							<input type="text" id="txtPrefix" autocomplete="off" class='form-control' /><br>
							<span id="msgerror2" style="display: inline;color: red;"></span>
						</div>
				</div> -->
				<div class="form-group" style= "left: 19px;top:20px;position:relative;">
						<div class="col-sm-2 no-padding">
							<label for="txtNonProjectName">Non-Project Name</label>
						</div>
						<div class="col-sm-8 no-padding">						
							<input type="text" id="txtNonProjectName" onchange='checkfill();' autocomplete="off" class='form-control' /><br>
							<span id="msgerror" style="display: inline;color: red;"></span>
							
						</div>
				</div>
					<!--<div class="form-group">
						<div class="col-sm-2 no-padding">
							<label for="Postfix">Postfix</label>
						</div>
						<div class="col-sm-8 no-padding">						
							<input type="text" id="Postfix" autocomplete="off" class='form-control' /><br>	
							<span id="msgerror3" style="display: inline;color: red;"></span>						
						</div>
					</div>
						
				</div>	-->		
			</div>
			<div class="panel-footer" style='height: 31px;position:relative;top:62px'>
			<div class="col-sm-6 no-padding">
							<span id="spanInsertCatMessages"></span>
						</div>
						<div class="col-sm-5 no-padding">						
							<button type="button" id="AddtxtNonProjectName" style="float: right;margin: -3px 2px 0 0; background-color: #015991 !important; width: 12%; color: #fff !important;" class="btn btn-default btn_FCP" onclick="AddtxtNonProjectName();">Add</button>
							<button type="button" id="addcloseNonProjectName" style="float: right;margin: -3px 2px 0 0; background-color: #015991 !important; width: 12%; color: #fff !important;" class="btn btn-default btn_FCP" onclick="clickCloseNonName();">Close</button>
						</div>
		   </div>
		</div>	
	</div> 


	<div id="windowManageNonProject" style="display:none"> 
		 <div class="panel panel-default">    
			<div class="panel-body overflow-auto" style='height: 255px;overflow-y: auto;margin-left: 15px;'>
			
				<div class="form-horizontal">
					<div class="form-group">
						
							<div id="spreadsheetCate"></div>
						
					</div>
						
				</div>			
			</div>
			<div class="panel-footer" style='height: 31px;'>
						<div class="col-sm-5 no-padding">
							<span id="spanInsertCatMessages"></span>
						</div>
						<div class="col-sm-5 no-padding" style="margin-top:-4px;">						
							<button type="button" id="AddtxtNonProjectName" style="float: right;margin-right: -30px; background-color: #015991 !important; width: 12%; color: #fff !important;" class="btn btn-default btn_FCP" onclick="clickNonProjectName();">Save</button>
							<button type="button" id="CloseNonProjectName" style="float: right;margin-right: 2px; background-color: #015991 !important; width: 12%; color: #fff !important;" class="btn btn-default btn_FCP" onclick="clickCloseNonProjectName();">Close</button>
						</div>
		   </div>
		</div>	
	</div> 

<script>
$('#Daterangebox').append(`<p id="Daterange"></p>`);
 var customFieldName = "" 

var addnewnp=false;
var ActionFlag = false;
function checkfill (){
	addnewnp = true;
	
}
/*  function FilterInput (event) {
        var keyCode = ('which' in event) ? event.which : event.keyCode;

        isNumeric = (keyCode == 191 || keyCode == 107 || keyCode == 222 || keyCode == 187);
        modifiers = (event.altKey || event.ctrlKey || event.shiftKey);
        return !isNumeric || !modifiers;
    } */
	
	     var inputBox = document.getElementById("txtNonProjectName");
			var invalidChars = [".", "/", "`", ";", "|", "?", "'", "<", ">", "*", "#", "~",	"%", "+","{", "}", "&", ",","\\","`"];
			inputBox.addEventListener("keydown", function(e) {
			  if (invalidChars.includes(e.key)) {
				  $("#msgerror").show();$("#msgerror").text("The "+e.key+" character is not allowed.")
				  e.preventDefault();
			  }
			  else
			  {
				  $("#msgerror").hide(); 
			  }
			});
			
			$('#txtNonProjectName').on('input', function(e) {
				  $(this).val(function(i, v) {
				return v.replace(/[./;|?'<>*#%+{}&,`\\~]/g, '');
				  });
			});
			
			/* var inputBox2 = document.getElementById("txtPrefix");
			var invalidChars2 = [".", "/", ":", ";", "|", "?", "'", "<", ">", "*", "#", "~",	"%", "+","{", "}", "&", ",","\\","`"];
			inputBox2.addEventListener("keydown", function(e) {
			  if (invalidChars2.includes(e.key)) {
				  $("#msgerror2").show();$("#msgerror2").text("The "+e.key+" character is not allowed.")
				  e.preventDefault();
			  }
			  else
			  {
				  $("#msgerror2").hide(); 
			  }
			});
			
			$('#txtPrefix').on('input', function(e) {
				  $(this).val(function(i, v) {
				return v.replace(/[./:;|?'<>*#%+{}&,`\\~]/g, '');
				  });
			}); */
			
			/*  var inputBox3 = document.getElementById("Postfix");
			var invalidChars3 = [".", "/", ":", ";", "|", "?", "'", "<", ">", "*", "#", "~",	"%", "+","{", "}", "&", ",","\\","`"];
			inputBox3.addEventListener("keydown", function(e) {
			  if (invalidChars3.includes(e.key)) {
				  $("#msgerror3").show();$("#msgerror3").text("The "+e.key+" character is not allowed.")
				  e.preventDefault();
			  }
			  else
			  {
				  $("#msgerror3").hide(); 
			  }
			});
			   
			$('#Postfix').on('input', function(e) {
				  $(this).val(function(i, v) {
				return v.replace(/[./:;|?'<>*#%+{}&,`\\~]/g, '');
				  });
			});  */


var myWindowAddNonProject = $("#windowAddNonProject");	
	 myWindowAddNonProject.kendoWindow({
                        width: "800px",
                        //height: "210px",
                        title: "Add Non-Project Item",
                        actions: ["Close"],
						resizable: false,
			});
			
			
			var myWindowManageNonProject = $("#windowManageNonProject");	
	 myWindowManageNonProject.kendoWindow({
                        width: "655px",
                        height: "360px",
                        title: "Manage Non-Project Items",
                        //actions: ["Close"],
						resizable: false,
			});
			
			function clickCloseNonName(){
				if(addnewnp){
				var check = confirm("Are you sure you wish to leave?  Changes you made will not be saved.")
				if(check){
					myWindowAddNonProject.data("kendoWindow").center();
					myWindowAddNonProject.data("kendoWindow").close();
				}
				}else{
					myWindowAddNonProject.data("kendoWindow").center();
					myWindowAddNonProject.data("kendoWindow").close();
				}
			}
			
			
			function clickCloseNonProjectName(){
				
				if(chkwindownon){
				var check = confirm("Are you sure you wish to leave?  Changes you made will not be saved.")
				if(check){
					myWindowManageNonProject.data("kendoWindow").center();
					myWindowManageNonProject.data("kendoWindow").close();
				}
				}else{
					myWindowManageNonProject.data("kendoWindow").center();
					myWindowManageNonProject.data("kendoWindow").close();
				}
			}
			
			
			

 	//$("#NonProjectName").click(function () {
	var chkwindownon =false;
	 function clickNonProjectName(){
	 
	 var username = _spPageContextInfo.userDisplayName;
	 var apiBaseUrl = azurewebsites+"/api/";
			MGridcheckNewchanges = false
							var rows = jExcelCostGridCateg.rows;
							var headers = jExcelCostGridCateg.getHeaders().split(',');
							var data_push = []
							var Exits = false
							for (var z = 0; z < cellchangeRow.length; z++) {
									var rowdata = jExcelCostGridCateg.getRowData(cellchangeRow[z]);
									
									var objsec = {};
										objsec.Category_UID = rowdata[3];
										objsec.Category = rowdata[1] != ''?rowdata[1]:rowdata[0];
										objsec.AddedBy = username;
										objsec.Active = rowdata[2] == false?"1":"0";
										data_push.push(objsec)	

											if(ExitCate.indexOf(rowdata[1]) != -1){
												Exits =true
											}
							}
							if(Exits){
								alert("This name is already used.  Please enter a unique name.");
								return;
							}
							console.log(data_push)
							
							
							if(data_push.length != 0){
								
								 $.ajax({
										url: apiBaseUrl+"UpdateNonProjects",
										dataType: 'json',
										type: 'post',
										contentType: 'application/json',
										data: JSON.stringify(data_push),//{ "Category":nch, "AddedBy": username,"Active":text,'Category_UID':$("#ddlEditCategories :selected").val()}),
										processData: false,
										success: function (resp) {
											var msg ='Successfully Updated.';
										  
											if(resp){
												$("#spanInsertCatMessages").css('color','#015991')
											}											
											$("#spanInsertCatMessages").html(msg);
											window.setTimeout(function () {
												$("#spanInsertCatMessages").html('');
												 if(seltrue){
													SelectedEngagementload()
												}else{
													roleEngagementload();
												}
												
												myWindowManageNonProject.data("kendoWindow").center();
												myWindowManageNonProject.data("kendoWindow").close();
											}, 2000);

										},
										error: function (jqXhr, textStatus, errorThrown) {
											$("#spanInsertCatMessages").html('Failed adding category.');
											$("#spanInsertCatMessages").css('color','red')											
											window.setTimeout(function () {
												$("#spanInsertCatMessages").html('');
											}, 2000);
											console.log(errorThrown);
										}
									});
							}else{
								myWindowManageNonProject.data("kendoWindow").center();
						myWindowManageNonProject.data("kendoWindow").close();
							}
	 
	 }
	var ExitCate = []
		var cellchange = []
			var cellchangeRow = []
			var jExcelCostGridCateg = null 
			// $("#btnEditCategory").click(function () {
			
  function clickManageNonProject(){
	var acheck =false;
	if(dataIdPP.length !=0){					
	  acheck = confirm('Are you sure you want to manage non-project items?  You have unsaved changes.  Press OK to continue with your non-project item modification, which will lose any unsaved changes.  Press Cancel to cancel this non-project item modification.')
	}else{
	  acheck =true;
	}
	if(acheck){
	  MGridcheckNewchanges = false;
	  $("div.k-window").css( "height", "fit-content" );
	  $(".k-window-title").text("Manage Non-Project Items")
	  var apiBaseUrl = azurewebsites+"/api/";
	  var urlNon = apiBaseUrl+"AllNonProjects";
	  var resNon = getAjexNon(urlNon);
	  var getResMtdNon = resNon;//.value;
	  var data = [];
	  $.each(getResMtdNon, function (indx, cat) {	
		if(cat.Category != 'Project Level'){
		  var active = cat.Active == true ?false:true;
		  data.push([cat.Category,'',active,cat.Category_UID])
		  ExitCate.push(cat.Category);
		}
	  });
	  $("#spreadsheetCate").html('');
	  //$('.k-window').css('height','345px');
	  jExcelCostGridCateg = jexcel(document.getElementById('spreadsheetCate'), {
		data:data,
		tableOverflow:true,
		columns: [{
		  type: 'text',
		  title:'Non-Project Name',
		  width:200,
		  readOnly:true,
		},{ 
		  type: 'text',
		  title:'New Non-Project Name',
		  width:300
		},{
		  type: 'checkbox',
		  title:'Active',
		  width:100
		},{
		  type: 'text',
		  title:'UID',
		  width:100
		},
		],
		updateTable: function (el, cell, x, y, source, value, id) {										
		  if(x<2){
			$(cell).css('text-align', 'left'); 
		  }
		},
		onchange: function (instance, cell, col, row, val, label, cellName) {
		  chkwindownon =true;
		  cellchange.push(row)
		  if (cellchangeRow.indexOf(($(cell).closest('tr').find('td').eq(0).text() - 1)) == -1) {
			if (($(cell).closest('tr').find('td').eq(0).text() - 1) >= 0) {
			  cellchangeRow.push($(cell).closest('tr').find('td').eq(0).text() - 1)
			}
		  }
		},
	  });
	  jExcelCostGridCateg.hideIndex(0);
	  jExcelCostGridCateg.hideColumn(3)
	  $('#spreadsheetCate').find('table').find('tbody').find('tr').each(function (index) {
	    $(this).find('td').eq(1).css('white-space', 'normal');
	  });
	  $('.k-window-actions').css('display','none');
	  if($("#windowAddNonProject").kendoWindow().data("kendoWindow").options.visible==true){
		clickCloseNonName();
	  }
	  myWindowManageNonProject.data("kendoWindow").center();
	  myWindowManageNonProject.data("kendoWindow").open();
	  chkwindownon =false;
	  $('input[name=c2]').change(function(e) {
	    if(this.checked){
	      alert('Reactivating a non-project item will allow users to create new allocations for this non-project item in the Resource Management grid going forward.  Press OK to proceed.')
	    }else{
	      alert('Inactivating a non-project item will prevent users from creating any new allocations to this non-project item in the Resource Management grid going forward.  It will not affect allocations that have already been entered against this item.  Press OK to proceed.')
	    }
	    MGridcheckNewchanges = true 
	  });
    }
  };
				var MGridcheckNewchanges = false
				$(document).on("paste keypress", "#spreadsheetCate tr td:not(:first)", function (e) {
						
						 MGridcheckNewchanges = true
			  });
	
	function AddtxtNonProjectName(){
		
		
			       $("#spanInsertCatMessages").html('');
				 if ($("#txtNonProjectName").val().trim() == "") {
					  $("#spanInsertCatMessages").html('Please enter Non-Project Name.');
					  $("#spanInsertCatMessages").css('color','red')
					 return;
				 }
				  
                 var username = _spPageContextInfo.userDisplayName;
				 var apiBaseUrl = azurewebsites+"/api/";
                if ($("#txtNonProjectName").val().trim() != "") {
					var vale = $("#txtNonProjectName").val()
				 /* if ($("#txtPrefix").val().trim() != "") {
						vale = $("#txtPrefix").val().trim()+" "+vale
					}
					if ($("#Postfix").val().trim() != "") {
						vale = vale+" "+$(Postfix).val().trim()
					}  */
					
					
                    $.ajax({
                        url: apiBaseUrl+"AddNonProjects",
                        dataType: 'json',
                        type: 'post',
                        contentType: 'application/json',
                        data: JSON.stringify({ "Category": vale, "AddedBy": username }),
                        processData: false,
                        success: function (resp) {
                            var msg = resp != '' ? 'Successfully added Non-Project Name.' : 'This Non-Project Name is already used.  Please enter a unique name.';
							if(resp){
								$("#spanCostGridMessage").css('color','#015991')
							}
                            if (resp) {
                                //categories = [];
                                //loadCategories();
                            }
                            $("#spanInsertCatMessages").html(msg);
							if(msg != 'This Non-Project name is already used.  Please enter a unique name.'){
								 $("#spanInsertCatMessages").css('color','#015991');
								 
								 window.setTimeout(function () {
										if(msg == 'Successfully added Non-Project Name.'){
										myWindowAddNonProject.data("kendoWindow").center();
										myWindowAddNonProject.data("kendoWindow").close();
										}
										$("#spanInsertCatMessages").html('');
										$("#txtNonProjectName").val('');
										
									}, 2000);
								}
                           else{
							
						   }

                        },
                        error: function (jqXhr, textStatus, errorThrown) {
                            $("#spanInsertCatMessages").html('Failed adding Non-Project Name.');
							$("#spanCostGridMessage").css('color','red')
                            
							window.setTimeout(function () {
                                $("#spanInsertCatMessages").html('');
                                $("#txtNonProjectName").val('');
                            }, 2000);
                            console.log(errorThrown);
                        }
                    });
                }
	
	}
	function AddNonProjectName(){
	  if($("#windowManageNonProject").kendoWindow().data("kendoWindow").options.visible==true){
		clickCloseNonProjectName();
	  }
	  $("div.k-window").css( "height", "fit-content" );
	  $(".k-window-title").text("Add Non-Project Item")
	  $("#spanInsertCatMessages").html('');
	  $("#txtNonProjectName").val('');
	  $("#txtPrefix").val('');
	  $("#Postfix").val('');
	  //$('.k-i-close').css('display','none');
	  $('.k-window-actions').css('display','none');
	  addnewnp =false;
	  myWindowAddNonProject.data("kendoWindow").center();
	  myWindowAddNonProject.data("kendoWindow").open();
	};
			
			var monthNamesFull = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];




function toDateTime(newd){
	var t = newd.getFullYear()+"-"+("0" + (newd.getMonth()+1)).slice(-2)+"-"+("0" + newd.getDate()).slice(-2)+"T"+("0" + newd.getHours()).slice(-2)   + ":" + ("0" + newd.getMinutes()).slice(-2) + ":" + ("0" + newd.getSeconds()).slice(-2);
	return t;
}


function commitAllocations(){
		$("#PMLoadgrid").find('tbody').find('tr').each(function(i){
			var resrID = $(this).find('td').eq(-2).text();
			var filterCommitArray = allocationStatus.filter(function(x){return x.AllocationUID == resrID;})
			var monthNum = new Date().getMonth()+1;
			var yearInd = 4;
			
			$(this).find('td').each( function(x){
				var ind = $(this).index();
				if(ind >3){				
					var header = $("#PMLoadgrid").find('table').find('tr').eq(1).find('th').eq(ind-4).text()				
					if(mS[0] == header && $("#PMLoadgrid").find('table').find('tr').eq(1).find('th').eq(ind-4).index()>0){
						yearInd = yearInd+1;
					}
					var yearRange = $("#PMLoadgrid").find('table').find('tr').eq(0).find('th').eq(yearInd).text();
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
		$("#PMLoadgrid").find('tbody').find('tr').each(function(i){
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
	
var  Non_Projects = false;
var  RM_Chat = false;
var  RM_Delete =false
var RM_MaxUnites =false
var RM_Commit = false;
var RM_Reject = false;
var RM_colorCode1 = [];
var RM_colorCode2 = [];
var  FotColor = []
var FotColor2 = [];
var  HedColor = []
var ResFilter = [];
var ResFilterArr = [];
var RM_ResourceDisplayField;
var RM_ResourceDisplayFieldType;
var RM_ResourceDisplayField_N;                       
var filterString_CustomFieldName = "";
 var filterString_CustomFieldVal = [];
 var filterString_operator = []; 
var filterString_condition = []; 
var ProjectDisplayFieldType;
var filterString;
var resGetProject;
var resGetProject_string;
var  resNonNOnProjects;
var resGetResources;
var nonProjectUID = [];
var apiBaseUrlNon = "https://appcgdev.azurewebsites.net/api/";
var filterApplied_forvisiblitu = false;
var siteAbsoluteUrl = _spPageContextInfo.siteAbsoluteUrl
var azurewebsites = "https://appcgdev.azurewebsites.net";
var AGGetResources = [];
var	cstart;
 var	cend;
$(document).ready(function () {
	filterApplied_forvisiblitu = false;
	$('#_filterAllocation_td').hide();
	$('.cEngView').hide()
	$('.cEngViewG').hide()
	$('.reEng').hide()
	
	var apiBaseUrl = azurewebsites+"/api/";
		var urlNon = apiBaseUrl+"AllNonProjects";
		 resNonNOnProjects = getAjexNon(urlNon);
		  nonProjectUID = [];
		for(i=0;i<resNonNOnProjects.length;i++){			 
			nonProjectUID.push(resNonNOnProjects[i].Category_GUID);
		}
		
	
	var AGprojects = azurewebsites+"/api/Allocation/SPWithSinglePara/AG_ProjectList/123"
	 AGGetProjects = getAjex(AGprojects);
	 resGetProject = AGGetProjects;
	 resGetProject_string = JSON.stringify(AGGetProjects)
	 var AGResources = azurewebsites+"/api/Allocation/SPWithSinglePara/AG_ResourceList_All/123"
	 AGGetResources = getAjex(AGResources)
	resGetResources = AGGetResources;//getAjex(urlGetResources);
	for(r=0;r<AGGetProjects.length;r++)
	 {
		 arr_AGGetProject_ID.push(AGGetProjects[r].ResourceId);
		 arr_AGGetProject_Generic.push(AGGetProjects[r].ResourceIsGeneric);
		 arr_AGGetProject_Active.push(AGGetProjects[r].ResourceIsActive);
		 arr_AGGetProject.push(AGGetProjects[r]);
	 }
	var filter1_Arr = [];
	var display1_Arr = [];
	for(i=0;i<resGetProject.length;i++){
		/* if(filter1_Arr.indexOf(resGetProject[i].Filter1) == -1 && (resGetProject[i].Filter1 != null && resGetProject[i].Filter1 != "")){
			filter1_Arr.push(resGetProject[i].Filter1);
		} */
		var item_resG =  resGetProject[i];
		for(k in item_resG){
			if(k.includes("Filter")){
				var validDate  = item_resG[k] != null?(new Date(item_resG[k]) == 'Invalid Date'?false:true):false;
				var FilterVal = ''
				if(validDate){
							FilterVal = formatDateF( new Date(item_resG[k]))
						}
						else{
							FilterVal = item_resG[k]
						}
				if(filter1_Arr.indexOf(FilterVal) == -1){
					
					filter1_Arr.push(FilterVal);
				}
			}
		}
		if(display1_Arr.indexOf(resGetProject[i].Display1) == -1 && (resGetProject[i].Display1 != null && resGetProject[i].Display1 != "")){
			display1_Arr.push(resGetProject[i].Display1);
		}
	}
	var keysProjects = Object.keys(resGetProject[0]);
	 var urlM = siteAbsoluteUrl+"/_api/web/lists/getByTitle('RM%20App%20Settings')/items?$top=4998&$select=ID,Formula,FormulaNumber,Title,ProjectFilter,Display,ProjectFilterValue"//,FliterAndOr"
		 var resM = getAjex(urlM);
		 ResFilterArr = [];
		 $.each(resM.value, function (indx, MGrid) {	
					if(MGrid.Title == 'Project Display Field'){	
						if(MGrid.Display){
							//var keynamecheck  = display1_Arr.indexOf(MGrid.ProjectFilterValue)
							if(display1_Arr.length > 0){
								customFieldName = MGrid.ProjectFilter;
								ProjectDisplayFieldType =  MGrid.ProjectFilterValue;
								customFieldName = customFieldName != null || customFieldName != ''?customFieldName.replace(/[&\/\\#, +()$~%.'":*?<>{}-]/g, ''):null;
							}
							else{
								customFieldName = null;
							}
							/* var keynamecheck = keysProjects.indexOf(customFieldName)
							if(keynamecheck == -1){
								customFieldName = null;
							}	 */			
						}
					}
					
				if(MGrid.Title ==  'Project Filter')
				{
					if(MGrid.Display){							
						//var keynamecheck = keysProjects.indexOf(MGrid.ProjectFilter.replace(/\s+/g, ''))
						var date = MGrid.ProjectFilterValue
						var validDate  =   date != null ?(new Date(date)  == 'Invalid Date'?false:true):false;
						var FilterVal = ''
						if(validDate){
							FilterVal = formatDateF(new Date(MGrid.ProjectFilterValue))
						}
						else{
							FilterVal = MGrid.ProjectFilterValue
						}
						var keynamecheck  = filter1_Arr.indexOf(FilterVal)
						if(keynamecheck != -1){
							filterString_CustomFieldName = MGrid.ProjectFilter;							
							filterString_CustomFieldName = filterString_CustomFieldName != null && filterString_CustomFieldName != ''?filterString_CustomFieldName.replace(/[&\/\\#, +()$~%.'":*?<>{}-]/g, ''):null;							
						//	if(FilterVal != ''){
								if(MGrid.ProjectFilterValue == 'False'){
									filterString_CustomFieldVal.push(false);
								}
								else if(MGrid.ProjectFilterValue == 'True'){
									filterString_CustomFieldVal.push(true);
								}
								else{
									filterString_CustomFieldVal.push(FilterVal);
								}
									
						//	}
							//if(MGrid.FliterAndOr != null){
								//filterString_operator.push(MGrid.FliterAndOr);
							//}
							if(MGrid.Formula != null){
								filterString_condition.push(MGrid.Formula);
							}
						}
							
					}
					
				}
					
					if(MGrid.Title == 'Non Projects'){	
								Non_Projects=MGrid.Display
					}
					if(MGrid.Title == 'Chat'){	
								RM_Chat=MGrid.Display
					}
					if(MGrid.Title == 'Max Units'){	
								RM_MaxUnites=MGrid.Display
					}
					if(MGrid.Title == 'Delete'){	
								RM_Delete=MGrid.Display
					}
					if(MGrid.Title == 'Allocation'){
							if(MGrid.Display){
								FotColor.push(MGrid)
							}
							FotColor2.push(MGrid)
					}
					if(MGrid.Title == 'RM Total'){	
								if(MGrid.Display){
								HedColor.push(MGrid)
								}
					}
					if(MGrid.Title == 'Allocation Commitment'){	
								RM_Commit=MGrid.Display
					}	
					if(MGrid.Title == 'Allocation Rejection'){	
								RM_Reject=MGrid.Display
					}
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
							RM_ResourceDisplayField_N  = MGrid.ProjectFilter;
							RM_ResourceDisplayFieldType =  MGrid.ProjectFilterValue;
						}
					}					
			});
	//RM_MaxUnites =false
		FotColor.sort(function(a, b) { 
		  return a.FormulaNumber - b.FormulaNumber
		});	
		/* ResFilter.sort(function(a, b) { 
		  return a.FormulaNumber - b.FormulaNumber
		}); */
		//createResourceFilterdropdowns();
	//$('#DeltaPlaceHolderPageTitleInTitleArea').text('Resource Multi Load')
	$('#DeltaPlaceHolderPageTitleInTitleArea').text('Resource Allocation')
		$('.cEngNew').hide()
		
		$('.valhide').hide()
	$("#start").kendoDatePicker({
			//change: changeDate,
			  start: "year",
			depth: "year",
			  format: "MMMM yyyy",
			value :"MM YYYY"
	   });
	 $("#end").kendoDatePicker({
			//change: changeDate,
			  start: "year",
			depth: "year",
			  format: "MMMM yyyy",
			value :"MM YYYY"
	   });
	   
	   $("#startP").kendoDatePicker({
			change: changeDate,
			  start: "year",
			depth: "year",
			  format: "MMMM yyyy",
			value :"MM YYYY"
	   });
	 $("#endP").kendoDatePicker({
			change: changeDate,
			  start: "year",
			depth: "year",
			  format: "MMMM yyyy",
			value :"MM YYYY"
	   });
	   
	    $("#start_datepicker").kendoDatePicker({
				change: changeDate,
				  start: "year",
				depth: "year",
				  format: "MMMM yyyy",
				value :"MM YYYY"
		   });
		 $("#end_datepicker").kendoDatePicker({
				change: changeDate,
				  start: "year",
				depth: "year",
				  format: "MMMM yyyy",
				value :"MM YYYY"
		   });
		   
		   $("#drp_GetProjectsWindow").kendoMultiSelect({
				filter: 'contains',
				optionLabel: "Select Project..",
				dataTextField: "ProjectName",
				//dataValueField: "ProjectId",
				dataSource:[],
				index: 0,
				//width:350px,		
				
			});
			$("#drp_sortorder").kendoDropDownList({                  
                    optionLabel: "Select order...",
                    dataTextField: "value",
                    dataValueField: "id"
			});

		   
		    $("#start_datepickerW").kendoDatePicker({
				change: changeDate,
				  start: "year",
				depth: "year",
				  format: "MMMM yyyy",
				value :"MM YYYY"
		   });
		 $("#end_datepickerW").kendoDatePicker({
				change: changeDate,
				  start: "year",
				depth: "year",
				  format: "MMMM yyyy",
				value :"MM YYYY"
		   });
		   $("#start").closest("span.k-datepicker").width(150);
		    $("#end").closest("span.k-datepicker").width(150);
	   // var required = $("#required").kendoMultiSelect().data("kendoMultiSelect");
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
		$("#startP").val(Startdate);
		$("#endP").val(enddatevalue);
		
		var Secman = [] //width(620)
			 $("#drp_RoleManager").kendoMultiSelect({
				filter: 'contains',
				placeholder: "Filter Resources...",
				dataTextField: "Title",
				dataValueField: "Resourceuid",
				dataSource:Secman,
				index: 0,
			});
		//$('td#_filterAllocation_td').find('ul.multiselect-container').append('<div><input type="button" value="Reset" id="resReset" class="multiselect-reset" onclick="Reset()"/><input type="button" value="Apply" id="resApply" class="multiselect-apply" onclick="Apply()"/></div>');
		//$('#_filterAllocation').append($("<option></option>").attr("value",value.employee_id).text(value.employee_name)); 
		var filterAllocation = $('#_filterAllocation').multiselect({
		  includeSelectAllOption: true,
          enableFiltering:true,
          includeFilterClearBtn: true,
		  numberDisplayed: 0,
		  enableCaseInsensitiveFiltering:true,
		  nonSelectedText:'Allocation Status',
		  nSelectedText: 'Allocation Status',
		  allSelectedText: 'Allocation Status',
		  selectAllValue: 'All',
		  templates: {
            filter: '<li class="multiselect-item filter"><div class="input-group"><input class="form-control multiselect-search" type="text"></div></li>',
          },onDropdownShown: function(event) {
			/*if($('#_filterAllocation_td').find('ul.multiselect-container div.buttonOpt').length==0){
			  $('#_filterAllocation_td').find('ul.multiselect-container').append('<div class="buttonOpt"></div>');
			  $('#_filterAllocation_td').find('ul.multiselect-container div.buttonOpt').append('<input type="button" value="Reset" id="resReset" class="multiselect-reset" onclick="Reset()"/><input type="button" value="Apply" id="resApply" class="multiselect-apply" onclick="Apply()"/>');
			}*/
			if($("div.open").find('ul.multiselect-container div.buttonOpt').length==0){
									  $("div.open").find('ul.multiselect-container').append('<li class="multiselect-item multiselect-buttons"><div class="buttonOpt"><input type="button" value="Clear" id="resReset" class="multiselect-reset" onclick="Reset()"/><input type="button" value="Apply" id="resApply" class="multiselect-apply" onclick="Apply()"/></div></li>');
			                          //$("div.open").find('ul.multiselect-container div.buttonOpt').append('');
									}
          },dataBound: function(e) {
			console.log(e)
		  }
		});
		ExecuteOrDelayUntilScriptLoaded(IsCurrentUserMemberOfGroup, "sp.js");
		customFieldName = customFieldName != null || customFieldName == '' ?customFieldName.replace(/[&\/\\#, +()$~%.'":*?<>{}-]/g, ''):null;
		newgetProjectsdatainfo = resGetProject;//newresP.value;
		filterString = mergeFilterQuery();
      })



function mergeFilterQuery(){
	
var txt = "";
				/*	if(filterString_operator[0] == null)
					{
						filterString_operator.length = 0;
					}
					filterString_operator[i-1]
					filterString_operator[i-1]
					filterString_operator[i-1]
					filterString_operator.length == filterString_CustomFieldVal.length-1 && 
					*/
				
	if(filterString_condition.length == filterString_CustomFieldVal.length){
		var pi=1;
		for(i=0;i<filterString_CustomFieldVal.length;i++){
			
				if(i == 0){
					if(isNaN(filterString_CustomFieldVal[0])){
						var dt = new Date(filterString_CustomFieldVal[0]);
						if( dt instanceof Date && !isNaN(dt)){
							var covertedDateTime = toDateTime(dt);
							txt = 'x.Filter'+pi+" "+filterString_condition[0].split("|")[1]+" "+"DateTime'"+covertedDateTime+"'";
						}
						else{
							txt = 'x.Filter'+pi+" "+filterString_condition[0].split("|")[1]+" "+"'"+filterString_CustomFieldVal[0]+"'";
						}
					}
					else{
						txt = 'x.Filter'+pi+" "+filterString_condition[0].split("|")[1]+" "+filterString_CustomFieldVal[0];
					}
				}
				else{
					var filterString_operatorOr = '||'
					if(isNaN(filterString_CustomFieldVal[i])){
						var dt = new Date(filterString_CustomFieldVal[i]);
						if( dt instanceof Date && !isNaN(dt)){
							var covertedDateTime = toDateTime(dt);
							txt = txt +" "+filterString_operatorOr +" "+'x.Filter'+pi+" "+filterString_condition[0].split("|")[1]+" "+"'"+covertedDateTime+"'";
						}
						else{
							txt = txt +" "+filterString_operatorOr +" "+'x.Filter'+pi+" "+filterString_condition[i].split("|")[1]+" "+"'"+filterString_CustomFieldVal[i]+"'";
						}
					}
					else{
						txt = txt +" "+filterString_operatorOr +" "+'x.Filter'+pi+" "+filterString_condition[i].split("|")[1]+" "+filterString_CustomFieldVal[i];
					}
				}
				
			pi++;
		}
	}
	else{
		txt = ""
	}
	if(txt.includes(' eq ')){
		txt = txt.replaceAll(' eq ',' == ')  //eq,gt,ge,lt,le
	}
	else if(txt.includes(' gt ')){
		txt = txt.replaceAll(' gt ',' > ')  //eq,gt,ge,lt,le
	}
	else if(txt.includes(' ge ')){
		txt = txt.replaceAll(' ge ',' >= ')  //eq,gt,ge,lt,le
	}
	else if(txt.includes(' lt ')){
		txt = txt.replaceAll(' lt ',' < ')  //eq,gt,ge,lt,le
	}
	else if(txt.includes(' le ')){
		txt = txt.replaceAll(' le ',' <= ')  //eq,gt,ge,lt,le
	}
	
	return txt;
	
}
/* ---------------First pge ----------*/

var datachkBLK;
var arr_datachkBLK=[];
var arr_TID_datachkBLK=[];		  
var datadropdd;


var userInGroup;


function IsCurrentUserMemberOfGroup() {
var  mygroup  = "RM Grid Administrators";//Allocation Admin";
        var currentContext = new SP.ClientContext.get_current();

        var currentWeb = currentContext.get_web();

        var currentUser = currentContext.get_web().get_currentUser();

        currentContext.load(currentUser);

        var allGroups = currentWeb.get_siteGroups();

        currentContext.load(allGroups);

        var group = allGroups.getByName(mygroup);

        currentContext.load(group);

        var groupUsers = group.get_users();

        currentContext.load(groupUsers);

        currentContext.executeQueryAsync(OnSuccess, OnFailure);

        function OnSuccess(sender, args) {

            var groupUserEnumerator = groupUsers.getEnumerator();

            while (groupUserEnumerator.moveNext()) {

                var groupUser = groupUserEnumerator.get_current();

                if (groupUser.get_id() == currentUser.get_id()) {

                    userInGroup = true;

                    break;

                }

            }

            if (userInGroup) {
			
			var userID   = _spPageContextInfo.userId;
				setTimeout(function(){
					$("#drp_Role").data("kendoDropDownList").value(userID);
				$("#drp_Role").change();
				
				}, 10);
				
				GetRoleEngagementPgae();
					$('.hideadminMList').hide()
					if(Non_Projects){
						$('.hideadminMList').show()
					}
					$("#drp_RoleRead").hide();
					/*  setTimeout(function(){// $("div.k-multiselect-wrap").css('width','500px') ;
						$('td[name="td_filter"]').each(function(x){
							$(this).find('div.k-multiselect-wrap').css('width','150px');
						})
					 },10); */
			
			}
            else { 
					userInGroup = false;
					
					$('.hideadmin').hide();
					 $('.hideadminMList').hide()
					if(Non_Projects){
						//$('.hideadminMList').show()
					}
					GetRoleEngagementPgae()
					var d = $("#drp_Role").data("kendoDropDownList");
						d.wrapper.hide();
						$("#drp_RoleRead").hide();
						//$("#rrole").hide();
							$("#rrole").css('padding-bottom','9px')
				  $('#1').hide();
				  $('#2').hide();
				  $('#3').css('padding-left','0px')
				  $('#multirrole').css('padding-left','0px')
				 /*  setTimeout(function(){// $("div.k-multiselect-wrap").css('width','500px'); 
					$('td[name="td_filter"]').each(function(x){
						$(this).find('div.k-multiselect-wrap').css('width','150px');
					})			  
				  },10); */
				}
		   
		}
		
         function OnFailure(sender, args) {
			 $('.hideadmin').hide();
			 //userInGroup = false;
			 userInGroup = false;
			 $('.hideadmin').hide();
			  $('.hideadminMList').hide()
			if(Non_Projects){
				$('.hideadminMList').show()
			}
			  //$('.hideadmin').show();
			GetRoleEngagementPgae()
			var d = $("#drp_Role").data("kendoDropDownList");
				d.wrapper.hide();
				$("#drp_RoleRead").show()
        }

}

var listdataRM ;
var locationDrop = [];
var globalValDrop = [];
var GenericResUID = [];
var keynames = []
var ResGenericAr = [];
var ResActiveAr = []
var AGGetProject;
var arr_AGGetProject=[];
var arr_AGGetProject_ID=[];
var arr_AGGetProject_Generic=[]
var arr_AGGetProject_Active=[]							  
function GetRoleEngagementPgae(){
		inactivUserIdn2 = true;
		
		
		
		//---------------
		GenericResUID = [];
       
			// var AGtable = azurewebsites+"/api/Allocation/SPWithSinglePara/AG_ResourceList_All/123"
	         AGGetProject = AGGetResources;//getAjex(AGtable);
			
			 var urllitget=siteAbsoluteUrl+"/_api/web/lists/getByTitle('RM%20App%20Resources')/items?$top=4998&$select=ID,Title,ResourceID,Resource_x0020_Manager/Id,Resource_x0020_Manager/Name,Resource_x0020_Manager/Title&$expand=Resource_x0020_Manager/Id";		
			var getallRmlistdata = getAjex(urllitget);
			 $.each(getallRmlistdata.value, function (indxL, Ldata) {
			 $.each(AGGetProject, function (indxA, AGdata) {
					   if(Ldata.ResourceID  == AGdata.ResourceId){
						   Ldata.ResourceIsGeneric = AGdata.ResourceIsGeneric
						   Ldata.ResourceIsActive = AGdata.ResourceIsActive
						   Ldata.PrimaryJobRole = AGdata.PrimaryJobRole
						   Ldata.ResourceMaxUnits  =AGdata.ResourceMaxUnits
					   }
				   });
	   })
	   debugger
		//	ResourceIsActive,ResourceIsGeneric,ResourceMaxUnits,ResourceID,PrimaryJobRole,			
			var userID   = _spPageContextInfo.userId;
			//var url = siteAbsoluteUrl+"/_api/web/lists/getByTitle('RM%20App%20Resources')/items?$top=4998&$select=ID,Title,ResourceIsActive,ResourceIsGeneric,ResourceID,ResourceMaxUnits,PrimaryJobRole,Resource_x0020_Manager/Id,Resource_x0020_Manager/Name,Resource_x0020_Manager/Title&$expand=Resource_x0020_Manager/Id&$filter=ResourceIsActive eq true and Resource_x0020_Manager/Id eq "+userID//+"&$orderby=Title desc"
			var checkR;
			if(userInGroup){
				
				
				  var sm = {}
						sm.value =[] //ResourceId
					   checkR=sm
					  for (var j = 0; j < getallRmlistdata.value.length; j++) {						
								if(getallRmlistdata.value[j].ResourceIsActive == "True"){
									checkR.value.push(getallRmlistdata.value[j]);
								}								
						  }
			}else{
				
					   var sm = {}
						sm.value =[] //ResourceId
					   checkR=sm
					  for (var j = 0; j < getallRmlistdata.value.length; j++) {						
								if(getallRmlistdata.value[j].ResourceIsActive == "True"){
									if(getallRmlistdata.value[j].Resource_x0020_Manager != undefined){
									 for (var i = 0; i < getallRmlistdata.value[j].Resource_x0020_Manager.length; i++) {
											if(getallRmlistdata.value[j].Resource_x0020_Manager[i].Id == userID){
											checkR.value.push(getallRmlistdata.value[j]);
											}
									 }
									}
								}								
						  }
			}

		var strOptions="";		
         var res = checkR;
		//-----------
		
		
		
		 listdataRM = [] 
		 locationDrop = [];
		 for (var j = 0; j < getallRmlistdata.value.length; j++) {
			   getallRmlistdata.value[j].Resourceuid =getallRmlistdata.value[j].ResourceID;
			   getallRmlistdata.value[j].Id =getallRmlistdata.value[j].ResourceID;
			    getallRmlistdata.value[j].ResourceId =getallRmlistdata.value[j].ResourceID;
			   if(getallRmlistdata.value[j].PrimaryJobRole == null){
				   getallRmlistdata.value[j].PrimaryJobRole ='*Blank'
			    }
				 listdataRM.push(getallRmlistdata.value[j]);
				if(locationDrop.indexOf(getallRmlistdata.value[j].Location) == -1 && getallRmlistdata.value[j].Location != null){
					locationDrop.push(getallRmlistdata.value[j].Location);
				}
					if(getallRmlistdata.value[j].ResourceIsGeneric == 'True'){
						GenericResUID.push(getallRmlistdata.value[j].Title);
						ResGenericAr.push(getallRmlistdata.value[j].ResourceID);
					}
					if(getallRmlistdata.value[j].ResourceIsActive == 'True'){
						ResActiveAr.push(getallRmlistdata.value[j].ResourceID);
					}
			 }
			/*  for(k in getallRmlistdata.value[0]){
				 keynames.push(k);
			 } */
		 
		 
		//debugger
		 datachkBLK = []
		arr_datachkBLK=[];
		 arr_TID_datachkBLK=[]				
		 datadropdd = res.value;
		   for (var j = 0; j < res.value.length; j++) {
			   res.value[j].Resourceuid =res.value[j].ResourceID;
			   res.value[j].Id =res.value[j].ResourceID;
			    res.value[j].ResourceId =res.value[j].ResourceID;
			   if(res.value[j].PrimaryJobRole == null){
				   res.value[j].PrimaryJobRole ='*Blank'
			    }
				 datachkBLK.push(res.value[j]);
				 arr_TID_datachkBLK.push(res.value[j].Title+res.value[j].ResourceID)
				 arr_datachkBLK.push(res.value[j].ResourceID)							 
			 }
		 var seen = {}
		 var data = []
		   for (j = 0; j < datachkBLK.length; j++) {
			   if (!(datachkBLK[j].PrimaryJobRole in seen)) {
				   strOptions = strOptions + "<option  value='" + datachkBLK[j].PrimaryJobRole + "' >" + datachkBLK[j].PrimaryJobRole + "</option>";
				   data.push(datachkBLK[j]);
				   seen[datachkBLK[j].PrimaryJobRole] = true;
				   
			   }
		   }
		   
		   
		    var seend = {}
		 var datad = []
		   for (var j = 0; j < datachkBLK.length; j++) {
			   	 if(datachkBLK[j].Resource_x0020_Manager != undefined){
				 for (var i = 0; i < datachkBLK[j].Resource_x0020_Manager.length; i++) {				
					   if (!(datachkBLK[j].Resource_x0020_Manager[i].Title in seend)) {
						   datachkBLK[j].Resource_x0020_Manager[i].Resourceuid = datachkBLK[j].ResourceID;
						   datad.push(datachkBLK[j].Resource_x0020_Manager[i]);
						   seend[datachkBLK[j].Resource_x0020_Manager[i].Title] = true;
						   
					   }
					 }
				  }
		    }
			if(!userInGroup){
			var username = _spPageContextInfo.userDisplayName;
			for( var j = 0; j < datad.length; j++){
				if(username != datad[j].Title){
					datad.splice(i, 1);
				}
			 }
			}
				   
		  strOptions="<option  value=''></option>" + strOptions;
		  $('.error').css('margin-top','0px')
		  if(datad.length == 0){
			  $('#ErroeMessage2').text('You are not the defined resource manager for any resource.  Please contact your administrator for assistance with mapping your resources.');
			  $('#ErroeMessage2').show();
			  $('.error').css('margin-top','62px')
			  return
		  }
		  else
		  {
		   $('#ErroeMessage2').hide();
		  }
		  datad.sort(function(a, b) { 
			  return a.ID - b.ID  ||  a.Title.localeCompare(b.Title);
			});//.width(247)
		   $("#drp_Role").width(250).kendoDropDownList({
				filter: 'contains',
				optionLabel: "Select Resource Manager...",
				dataTextField: "Title",
				dataValueField: "Id",
				dataSource:datad,
				open: function(e) {
										 if(dataIdPP.length !=0){	
											alert("You have unsaved changes. Changing your filters will lose these changes. Press OK to go back. Then save your changes before adjusting your filters.")
										 }
				},
				index: 0,
			});
			
			
			/*$("#drp_RResourceM").kendoDropDownList({
				filter: 'contains',
				optionLabel: "Select Resource..",
				dataTextField: "Title",
				dataValueField: "Resourceuid",
				dataSource:datadropdd,
				index: 0,
			});*/
				
			 $('.rolesels').hide()
			
			 $("#dropdownlist").kendoMultiSelect({
					index: 0,
					dataTextField: "ResourceName",
					dataValueField: "ResourceId",
					dataSource:[],
				});
		  
        /* $("#drp_Role").text("");
         $("#drp_Role").append(strOptions);
         $(".chosen-selectRole").chosen({no_results_text: "Oops, nothing found!",width: "17%",}); */
		$('.cEngView').show()
		$('.cEngViewG').show()
		$('.cEngNew').hide()
		$('.valhide').hide()
		
		if(!userInGroup){
				var userID   = _spPageContextInfo.userId;
			  var multiSelect = $("#drp_Role").data("kendoDropDownList")
			      multiSelect.readonly();
				  multiSelect.value([userID])
				// roleEngagementload()
				
				$("#drp_RoleRead").val(_spPageContextInfo.userDisplayName);
				 
				// roleEngagementload()
				 getManagers();
			  }else{
				$(".rolesel").hide();
				
				
			  }
		//createResourceFilterdropdowns();
		
 }
 
 function getManagersmadmin(){
	  
 }
 
function getManagers(){
	initailize_filter = false;
	gridchanged = false;
	repacedEng = false;
	filteredGrid = false;
	filteredreturn = false;          
	globalfilterI = [];
	collapseRows();
	role_for_sort_array = [];
	sortingApply = false;
	sortingType = 1;
	expand_collapse_className = ""
	filterApplied_forvisiblitu = false;
	/* arrColp = [];
	arrColpName = []; */
	countfilterOp = 0;
	var acheck =false;
			/*if(dataId.length !=0){					
				acheck = confirm('Are you sure you want to update your filters?  You have unsaved changes.  Press OK to continue with your filter change, which will lose any unsaved changes.  Press Cancel to cancel this filter change.')
			}else{*/
				acheck =true;
			//}
		if(acheck){
	Filterseries = [];
	globalstickfil = [];
	inactivUserIdn = false;
	inactivUserIdn2 = false;
	globalFilterAr = [];
	if(!userInGroup){
		var resourceName =_spPageContextInfo.userId.toString();
	  
		var Secman = []
		for (var j = 0; j < datachkBLK.length; j++) {
			if(datachkBLK[j].Resource_x0020_Manager != undefined){
				for (var i = 0; i < datachkBLK[j].Resource_x0020_Manager.length; i++) {								  
					if (datachkBLK[j].Resource_x0020_Manager[i].Id.toString() == resourceName) {
						   Secman.push(datachkBLK[j]);
					}
				}
			}
		}
	   
		Secman.sort(function(a, b) { 
		  return a.Title - b.Title  ||  a.Title.localeCompare(b.Title);
		});
		$(".rolesel").show();
	 //  $("#drp_RoleManager").empty();
	  
		var dataSource = new kendo.data.DataSource({
		  data: Secman
		});
		var dropdownlistM = $("#drp_RoleManager").data("kendoMultiSelect");
		dropdownlistM.setDataSource(dataSource);
		createdfilters = false;
		filterApplied = false;
		roleEngagementload()
	}	  
	else{
		createdfilters = false;
		filterApplied = false;
		var resourceName =$("#drp_Role").data("kendoDropDownList").value();
	
		var Secman = []
		for (var j = 0; j < datachkBLK.length; j++) {
			if(datachkBLK[j].Resource_x0020_Manager != undefined){
				for (var i = 0; i < datachkBLK[j].Resource_x0020_Manager.length; i++) {								  
					if (datachkBLK[j].Resource_x0020_Manager[i].Id.toString() == resourceName) {
						   Secman.push(datachkBLK[j]);
					}
				}
			}
		}
		/* if(filterSwitch && multiarList.length >0){
			var filterSecman = Secman.filter(function(x){
				return multiarList.includes(x[multiFiltertype]);
			})
			Secman = filterSecman;
			GLSecman = filterSecman;
			//setotherdropdown(Secman);
		} */
			
		Secman.sort(function(a, b) { 
			return a.Title - b.Title  ||  a.Title.localeCompare(b.Title);
		});
		$(".rolesel").show();
	 //  $("#drp_RoleManager").empty();
	  
		var dataSource = new kendo.data.DataSource({
		  data: Secman
		});
		var dropdownlistM = $("#drp_RoleManager").data("kendoMultiSelect");
		dropdownlistM.setDataSource(dataSource);
			
			
		roleEngagementload()
	}
 
 
		}
 }
	var seltrue = false
	var GLSecman = []
	var resReName_len = 0;
	function SelectedEngagementload(){
		seltrue = true
		$.LoadingOverlay("show");
			$('#ErroeMessage').text('')
			$('.DreEndc').show()
			$('.chktwodata').show()
			$('.reEngCopy').hide()
		var msl = $("#drp_RoleManager").data("kendoMultiSelect").value()
		
		if(msl.length == 0 || msl == null || msl == ''){
			$.LoadingOverlay("hide");
			 $("#PMLoadgrid").empty();
			 //if(!userInGroup){
			 $('.rolesels').hide()
			// }
						$("#PMLoadgrid").hide();
		}
		else{
			$('.rolesels').show()
			var res = [];
			var rolare = null;
			resReName =[]
			for (var j = 0; j < datachkBLK.length; j++) {
				 for (var i = 0; i < msl.length; i++) {								  
					if (datachkBLK[j].Resourceuid == msl[i]) {
						   res.push(datachkBLK[j]);
						   resReName.push(datachkBLK[j]);
					   }
				  }
				 
		   }
		   
			datadropdd = resReName;
			for (var j = 0; j < res.length; j++) {
				if(rolare == null){
						rolare =res[j].ResourceID
					}else{
					rolare = rolare+res[j].ResourceID
					}
				rolare =rolare+'|'
			}			
			if(res.length != 0 && res.length != '' && res.length != null && res.length != undefined){
				var YearS= $("#start").val().split(' ')[1];
				var MonthS= monthNamesFull.indexOf($("#start").val().split(' ')[0]);
			  
				var YearF= $("#end").val().split(' ')[1];
				var MonthF= monthNamesFull.indexOf($("#end").val().split(' ')[0]);

				var val1 =new Date(YearS,MonthS,5);
				var val2 =new Date(YearF,MonthF,5);

				var startDate = val1.getMonth() + 1 + ' ' + val1.getFullYear();
				var EndDate = val2.getMonth() + 1 + ' ' + val2.getFullYear();
			  
				var projectcode=rolare.slice(0, -1);//"e46f6e40-5bb1-4bcb-b635-deb57bdb021f|0c7cd3f8-a0be-e111-9f1e-00155d022681";
				
				// var url =azurewebsites+'/api/Allocation/MultiResources/'+startDate+'/'+EndDate;
				
				 //var url =azurewebsites+'/api/Allocation/MultiResourcesTimephase/'+startDate+'/'+EndDate; MultiResourcesTimephaseSetting
				var url =azurewebsites+'/api/Allocation/MultiResourcesTimephaseSettingComment/'+startDate+'/'+EndDate+'/true';
				 
				 
				var singleObj = {};	
				var listOfObjects=[];
				singleObj.Resourceuid = rolare.slice(0, -1);				   
				listOfObjects.push(singleObj);	
						   // console.log(url);				   
				var retValue = getMultiData(listOfObjects,url);
				
				//var res = getAjex(url);
					
			}
			else{
				$("#PMLoadgrid").empty();
				$("#PMLoadgrid").hide();
			}	
		}
	}
 var resReName = [];
 var chkfil;
 var Globalvar_resourceName = ""
function roleEngagementload(gd,selAll){
	
//inactivUserIdn2 = true;	
		Globalvar_resourceName = "";
		seltrue = false
		$('#ErroeMessage').text('')
		$('.DreEndc').show()
		$('.chktwodata').show()
	    $('.reEngCopy').hide()
		//var resourceName = $("#drp_Role").data("kendoDropDownList").value();//$("#drp_Role").data("kendoDropDownList").text();
		
		var resourceName =''
		if(!userInGroup){
		  resourceName  = _spPageContextInfo.userId.toString();			  
		}else{
		   resourceName =$("#drp_Role").data("kendoDropDownList").value();
		}	
		var res = [];
		/*var datDD = $("#dropdownlist").data("kendoMultiSelect").value()
		if(datDD.length != 0){
		var ddl = $("#dropdownlist").data("kendoMultiSelect")
				ddl.dataSource.data({}); // clears dataSource
				//ddl.text(""); // clears visible text
				//ddl.value("");
		}*/
		var rolare = null
		resReName =[]
		/*for (var j = 0; j < datadropdd.length; j++) {
			if(resourceName.toString() == datadropdd[j].PrimaryJobRole){
				res.push(datadropdd[j]);
				resReName.push(datadropdd[j]);
				
			}
		}*/
		
		
			 //for (var y = 0; y < selectdata.length; y++) {
					/*for (var j = 0; j < datachkBLK.length; j++) {
						if(datachkBLK[j].Resource_x0020_Manager != undefined){
							 for (var i = 0; i < datachkBLK[j].Resource_x0020_Manager.length; i++) {								  
										if (datachkBLK[j].Resource_x0020_Manager[i].Id.toString() == resourceName) {
											   res.push(datachkBLK[j]);
											   resReName.push(datachkBLK[j]);
										   }
									  }
				         }
			       }*/
		      //}
			 
			  
		for (var j = 0; j < listdataRM.length; j++) {
			if(listdataRM[j].Resource_x0020_Manager != undefined){
				for (var i = 0; i < listdataRM[j].Resource_x0020_Manager.length; i++) {								  
					if (listdataRM[j].Resource_x0020_Manager[i].Id.toString() == resourceName) {
					   res.push(listdataRM[j]);
					   resReName.push(listdataRM[j]);
					}
				}
			}
		}
		Globalvar_resourceName = 	resourceName;  
		/* if(resourceName != "" && !createdfilters && !filterApplied){
			$('td[name="td_filter"]').remove()
			globalValDrop = [];
			for(i=0;i<resReName.length;i++){
				var item = resGetResources.filter(function(x){
					return x.ResourceId == resReName[i].ResourceId
				});
				if(item.length != 0){
					globalValDrop.push(item[0]);
				}
				
			}
			for(k in globalValDrop[0]){
				 keynames.push(k);
			 }
			createResourceFilterdropdowns();		 
			$('td[name="td_filter"]').show();					
		} */
	
		datadropdd = resReName;
		var filterres
		/* if(filterSwitch && multiarList.length >0){
			for(i=0;i<res.length;i++){
			if(res[i][multiFiltertype] == "Empty"){
				res[i][multiFiltertype] = null
			}
			}
			if(Finalmultival.length>0){
				filterres = Finalmultival;
			}
			else{
				
				filterres = res.filter(function(x){							
					return multiarList.includes(x[multiFiltertype]);
				});
				if(filterGrid){
					filterres = gd;
				}
				/* if(globalcount == 1){
					chkfil = filterres;
				}
				if(globalcount > 1){
					filterres = chkfil.filter(function(x){							
						return multiarList.includes(x[multiFiltertype]);
					});
				} */
			/*}
			filteredAr = filterres;
			res = filterres;
		} */
	/* 	if(Globalresponded.length > 0 && GlobalresName.length >0 && inactivUserIdn){
			var inacItm = GlobalresName.filter(function(x){
				return x.ResourceIsActive != "True";
			})
			for(i = 0; i<inacItm.length; i++){
				var it = Globalresponded.filter(function(x){
					return x.Projectuid == inacItm[i].ResourceId;
				})
				if(it.length > 0){
					inactivUserIdn = true;
				}
			}
			 if(inacItm.length > 0){
				inactivUserIdn = true;
			} 
			for(i=0;i<GlobalresName.length;i++){
				if(GlobalresName[i].ResourceIsActive == "True"){
					 //newResar.push(GlobalresName[i]);
				}
				else{
					
					var item = Globalresponded.filter(function(x){
						   return x.Projectuid == GlobalresName[i].ResourceId
					})
					for(j=0;j<item.length;j++){
						if(item[j].Resourcename == ""){
							continue;
						}
						for(k in item[j]){
							if(k.includes("_Status")){
								if(item[j][k] != 0){
									
									inactivUserIdn = false;
								}
							}
						}		  
				   }
				}
			}
		} */
		
		
		
		
		
		
		/* 
		if(gd != undefined && inactivUserIdn && inactivUserIdn2){
			filterres = [];
			for(i=0;i<gd.length;i++){
				var item = resReName.filter(function(x){
					return x.ResourceId == gd[i].ResourceId
				});
				if(item.length != 0){
					filterres.push(item[0]);
				}
			}
			//filteredAr = filterres;
			res = filterres;
		} */		
		if( gd != undefined && filterGrid){
			filterres = [];
			globalstickfil = []
			for(i=0;i<gd.length;i++){
				var item = resReName.filter(function(x){
					return x.ResourceId == gd[i].ResourceId
				});
				if(item.length != 0){
					filterres.push(item[0]);
				}
			}
			//filteredAr = filterres;
			res = filterres;
			globalstickfil = filterres;
		}				
		if(filterApplied && gd == undefined ){
			
				res = [];
				selectedFilterDropdown("","","");
				for(i=0;i<stickFilter.length;i++){
					var item = resReName.filter(function(x){
						return x.ResourceId == stickFilter[i].ResourceId
					});
					if(item.length != 0){
						res.push(item[0]);
					}
				}	
		}						
		for (var j = 0; j < res.length; j++) {
			if(rolare == null){
					rolare =res[j].ResourceID
				}else{
				rolare = rolare+res[j].ResourceID
				}
			rolare =rolare+'|'
		}
		
		
		if(res.length != 0 && res.length != '' && res.length != null && res.length != undefined){
		var YearS= $("#start").val().split(' ')[1];
		  var MonthS= monthNamesFull.indexOf($("#start").val().split(' ')[0]);
		  
		  var YearF= $("#end").val().split(' ')[1];
		  var MonthF= monthNamesFull.indexOf($("#end").val().split(' ')[0]);

		  var val1 =new Date(YearS,MonthS,5);
		  var val2 =new Date(YearF,MonthF,5);

		  var startDate = val1.getMonth() + 1 + ' ' + val1.getFullYear();
		  var EndDate = val2.getMonth() + 1 + ' ' + val2.getFullYear();
		  
			 var projectcode=rolare.slice(0, -1);//"e46f6e40-5bb1-4bcb-b635-deb57bdb021f|0c7cd3f8-a0be-e111-9f1e-00155d022681";
			// var url ='/Api/Allocation/Resources/'+projectcode+'/'+startDate+'/'+EndDate;
			 //  var url = azurewebsites+"/api/AllocationTimePhase/"+projectcode+'/'+startDate+'/'+EndDate
			// var url =azurewebsites+'/api/Allocation/MultiResources/'+startDate+'/'+EndDate;
			
			 //var url =azurewebsites+'/api/Allocation/MultiResourcesTimephase/'+startDate+'/'+EndDate; MultiResourcesTimephaseSetting
			 var url =azurewebsites+'/api/Allocation/MultiResourcesTimephaseSettingComment/'+startDate+'/'+EndDate+'/true';
			
			
			
			       var singleObj = {};	
				   var listOfObjects=[];
				   singleObj.Resourceuid = rolare.slice(0, -1);				   
				   listOfObjects.push(singleObj);	
                       // console.log(url);				   
				var retValue = getMultiData(listOfObjects,url,selAll);
			
			//var res = getAjex(url);
				
		 }else{
			 $("#PMLoadgrid").empty();
					$("#PMLoadgrid").hide();
		 }	
		/*objResource = res; 
		
		AllResourceList=objResource;	
			var ddl = $("#dropdownlist").data("kendoMultiSelect")
				ddl.dataSource.data(objResource); 
		/* $("#dropdownlist").kendoMultiSelect({
					index: 0,
					dataTextField: "ResourceName",
					dataValueField: "ResourceId",
					dataSource:objResource,
				});*/
		
		
		
 }
 var globalstickfil = [];
 function getMultiData(obj,baseUrl,selAll){
            var listOfObjects = "";
            listOfObjects = (obj);
            var allData ="'"+ JSON.stringify(obj)+"'";
			 $.LoadingOverlay("show");	
console.log("2347 Ajax Started:  "+ new Date() + "  ----------" + baseUrl)			 
            $.ajax({
                type: "PUT",
                url: baseUrl,
                data: allData,//JSON.stringify(allData),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                   // return data;
				   console.log("2347 Ajax Success:  "+ new Date())	
				   $("#PMLoadgrid").empty();
					$("#PMLoadgrid").hide();
				   $.LoadingOverlay("hide");
				   if(data != "Value was either too large or too small for a Decimal.Couldn't store <1E+45> in Feb_2022 Column.  Expected type is Decimal."){
				  paageLoad(data,'',selAll)
				 // inactivUserIdn2 = true
				   }else{
					    $.LoadingOverlay("hide");
				   }
                },
                error: function (error) {
					 $.LoadingOverlay("hide");	 
                     return error;
                }
            });
       }

function getProjectDropdownsa() {            
            var serurl = azurewebsites+"/api/Engagementv2/Resources";
			 $.LoadingOverlay("show");
            jQuery.ajax({
                url: serurl,
                type: "GET",
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    var sharedDataSource = "";
                  //  $('#drp_projects').text('')
						var myVar = JSON.parse(data)
						if (myVar.length > 0) {
							/*var tablesttr = "<option value=''></option>";
							for (i = 0; i < myVar.length; i++) {
								//tablesttr= tablesttr +"<tr><td><input type='checkbox' data-idr='"+ myVar[i].EngagementUID +"' ></input></td><td>"+ myVar[i].EngagementUID +"</td><td>"+ myVar[i].Projectname +"</td><td>"+ myVar[i].Resourcename +"</td><td>"+ myVar[i].Status +"</td><td>"+ myVar[i].Start +"</td><td>"+ myVar[i].Finish +"</td><td>"+ myVar[i].TotalUnit +"</td></tr>"
								var count = parseInt(myVar[i].Counts);
								var unitss = parseFloat(myVar[i].TotalUnit)
								var avgunits = (unitss / count).toFixed(2)
								tablesttr = tablesttr + "<option value='" + myVar[i].Resourceuid + "'>" + myVar[i].Resourcename + "</option>";
							}
							$('#drp_projects').append(tablesttr);
							$(".chosen-select").chosen({disable_search_threshold: 0,no_results_text: "Nada encontrado!",allow_single_deselect: true,width: "20%",}); 
							
							
							//$('#required').append(tablesttr);
						 $("#required").kendoDropDownList({
								  dataTextField: "Resourcename",
								  dataValueField: "Resourceuid",
								  dataSource:myVar,
								});*/
								 $("#dropdownlist").kendoMultiSelect({
										index: 0,
										dataTextField: "Resourcename",
										dataValueField: "Resourceuid",
										dataSource:myVar,
										/*select:function(e){
											   GetData();
											  },*/
									});
									 $.LoadingOverlay("hide");
						}
						$('.cEngView').show()
						$('.cEngViewG').show()
							$('.cEngNew').hide()
							$('.valhide').hide()
					
					},
				  error: function (error) {
					   $.LoadingOverlay("hide");
						//console.log(error);
				  }
				
            });				 
}
 var getAjex =function(URL){ 
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
				// console.log(success)
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

 var getAjexNon =function(URL){ 
	var data;
	 $.LoadingOverlay("show");
	 
	  $.ajax({
		url: URL,//+"AllCategories",
		type: 'get',
		contentType: 'application/json',
		processData: false,
	    async: false,
		success: function (resp) {
			$.LoadingOverlay("hide");	 
					data = resp
		},
		 error: function (error) {
				   $.LoadingOverlay("hide");
					data= error;
			  }
		  });
		 
  return data;

}

function Cancel (){
	//roleEngagementload();
	
	// var e =[]
	 //datagrid(e);
	 $("#drp_Role").data("kendoDropDownList").text('')
	$("#PMLoadgrid").empty();
	GetRoleEngagementPgae()
	 $('.cEngNewLen').hide()
	 $('.cEngProLen').hide()
	 
	$('.cEngView').show()
	$('.cEngViewG').hide()
	$('.cEngNew').hide()
	
	$('.valhide').hide()
	$('.reEng').hide()
	 $('.DreEnd').show()
	 $('.RePMload').hide()
	 
	 /* $("#drp_Role").data("kendoDropDownList").value(drpvalue);
setTimeout(function(){
getManagers();
},1000); */
	
}

function GetData(){
	
  var YearS= $("#start").val().split(' ')[1];
  var MonthS= monthNamesFull.indexOf($("#start").val().split(' ')[0]);
  
  var YearF= $("#end").val().split(' ')[1];
  var MonthF= monthNamesFull.indexOf($("#end").val().split(' ')[0]);

  var val1 =new Date(YearS,MonthS,5);
  var val2 =new Date(YearF,MonthF,5);

  var startDate = val1.getMonth() + 1 + ' ' + val1.getFullYear();
  var EndDate = val2.getMonth() + 1 + ' ' + val2.getFullYear();
  // var dataRes = '1'//$("#drp_projects").val();
   var dropdownlist = $("#dropdownlist").data("kendoMultiSelect").value();
      // dropdownlist.value()
 if(dropdownlist.length != 0 && dropdownlist.length != '' && dropdownlist.length != null && dropdownlist.length != undefined){
		var repsav = dropdownlist.toString();
		for (var i = 0; i < dropdownlist.length; i++) {
			repsav = repsav.replace(',','|')
		}
     var projectcode=repsav;//"e46f6e40-5bb1-4bcb-b635-deb57bdb021f|0c7cd3f8-a0be-e111-9f1e-00155d022681";
	 //var url =azurewebsites+'/api/Allocation/Resources/'+projectcode+'/'+startDate+'/'+EndDate;
	  var url = azurewebsites+"/api/AllocationTimePhase/"+projectcode+'/'+startDate+'/'+EndDate//azurewebsites+"/api/Allocation/"+projectcode+'/'+startDate+'/'+EndDate
	
	var res = getAjex(url);
	paageLoad(res)	
 }else{
	 $("#PMLoadgrid").empty();
			$("#PMLoadgrid").hide();
 }	
				
}

//var drpvalue = $("#drp_Role").data("kendoDropDownList").value();
var ProjectsDataInfo;


var AllResourceList;
var totalarray = [];
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
function CEngagementPgae(){    
        // $('#start_datepicker').val('')
       //  $('#end_datepicker').val('')
        // $('#txt_unit').val('')
        $('.cEngView').hide()
		$('.cEngViewG').hide()
		
		//$('.cEngNew').hide()
		
         var restype = $("#chkResourcetype").is(":checked");
         var objResource=[];	
	     var radioGNBValue = $("input[name='GNB']:checked").val();	
		
		 var strOptions="";
		 var usersfil = []
	     var uniqueuser;
		 for (var j = 0; j < totalarraySec.length; j++) {
				 usersfil.push(totalarraySec[j].Resourcename);
				 var uniqueSet = new Set(usersfil);
				 //uniqueuser = Array.from(uniqueSet);
				// uniqueuser =  getUnique(uniqueSet);//Array.from(uniqueSet);

			 }
        uniqueuser =  getUnique(usersfil);
		objResource = datachkBLK; 
		if(uniqueuser != undefined){
			for( var i=objResource.length - 1; i>=0; i--){
					for( var j=0; j<uniqueuser.length; j++){
						if(objResource[i] && (objResource[i].Title === uniqueuser[j])){
							objResource.splice(i, 1);
						}
					}
				}
			}
		AllResourceListSec=objResource;
		objResource.sort(function(a, b) { 
			  return a.Id - b.Id  ||  a.Title.localeCompare(b.Title);
			});
			   for (j = 0; j < objResource.length; j++) {
				if (objResource.length > 0) {
						if (restype && objResource[j].ResourceIsGeneric == 'True') {
							strOptions = strOptions + "<option  value='" + objResource[j].Id + "' >" + objResource[j].Title + "</option>";
						}
						if (!restype && objResource[j].ResourceIsGeneric == 'False') {
							strOptions = strOptions + "<option  value='" + objResource[j].Id + "' >" + objResource[j].Title + "</option>";
						}
						
					}
				}
			 strOptions="<option  value=''></option>" + strOptions;
			 $("#drp_resources").text("");
			 $("#drp_resources").append(strOptions).trigger('chosen:updated');
			 $(".chosen-select").chosen({no_results_text: "Oops, nothing found!",width: "17%",});
			 
			 $('.valhide').show()
			 $('.gCreateCreNewP').hide()
		
 }

 
	 function bindValue() {
                 $("#txt_unit").val($("#drp_commitment").val());
		 }
		 
	 function resetDataLU(){
             var restype = $("#chkResourcetype").is(":checked");
            $("#drp_resources").text("");
             var strOptions = "";
             if (AllResourceListSec.length > 0) {
               //  var rowdata = AllResourceList.split('|')
         var rowdata = AllResourceListSec;
				rowdata.sort(function(a, b) { 
			  return a.Id - b.Id  ||  a.Title.localeCompare(b.Title);
			});
                 for (j = 0; j < rowdata.length; j++) {
                     if (rowdata.length > 0) {
                          if (restype && rowdata[j].ResourceIsGeneric == 'True') {
                                    strOptions = strOptions + "<option  value='" + rowdata[j].Id + "' >" + rowdata[j].Title + "</option>";
                                }
                                if (!restype  && rowdata[j].ResourceIsGeneric == 'False') {
                                    strOptions = strOptions + "<option  value='" + rowdata[j].Id + "' >" + rowdata[j].Title + "</option>";
                                }
                                
                     }
         
                 }
                  strOptions="<option  value='0'>Select Resource</option>" + strOptions;
                 $('#drp_resources').append(strOptions).trigger('chosen:updated');;
				  $(".chosen-select").chosen({no_results_text: "Oops, nothing found!",width: "17%",});
             }
         }	 
	var keysHeader;
	
	
	function getRole(data) {
		
		if(RM_ResourceDisplayFieldType == "Number" || RM_ResourceDisplayFieldType == 'number'){
			if(data.items[0].Role == null || data.items[0].Role == 0 || data.items[0].Role == ""){
				return "(0)"; 
			}
			else{
				return "("+data.items[0].Role+")"; 
			} 
		}else{
			if(data.items[0].Role == null || data.items[0].Role == 0 || data.items[0].Role == ""){
				return "";
			}
			else{
				return "("+data.items[0].Role+")"; 
			} 
		}		
    }
	function getResID(data){
		return data.items[0].Projectuid;
	}
	function getRName(data) {        
			return data.items[0].Projectname; 
		   
    }
	var role_for_sort_array = []
	function getRoleSort(data) {
		
		
		if(data.items[0].Role == null || data.items[0].Role == 0 || data.items[0].Role == ""){
			//return "_";
			if(role_for_sort_array.indexOf("_") == -1){
				role_for_sort_array.push("_")
			}
			
		}
		else{
			if(role_for_sort_array.indexOf(data.items[0].Role) == -1){
				role_for_sort_array.push(data.items[0].Role)
			}
		} 
		return '';			
    }
	var GriddataRName = []
	function getProjectuid(data) {
	 //+"?"+data.items[0].Projectname
		GriddataRName.push({RId:data.items[0].Projectuid,Rname:data.items[0].originalProjectName,RData:data.items,PId:data.items[0].Resourceuid})
		return (data.items[0].Projectuid).toString();
	
	}
	var HClas= []
	var HClasc = []
	var numgridloa = 0
	var lengthc = 0
	  
	function getClassfolterlab(da){
		 // //debugger;
		 
		  
		  if(RM_MaxUnites){
			  var valuemax = 0
		  if($('#PMLoadgrid').data('kendoGrid').dataSource._view.length > numgridloa){
				var viewr = $('#PMLoadgrid').data('kendoGrid').dataSource._view[numgridloa].value
				
				for (var j = 0; j < resReName.length; j++) {											  												
							if(viewr == resReName[j].Title){						
								valuemax =resReName[j].ResourceMaxUnits
							}
					 }
				}
			 return valuemax-da;
		  }else{
			   return 100-da;
		  }
	  }
	function getClass(data){
		
		if(Fotter){			
			Fotter =false;
			Fdata = [];
			HClas= []
			HClasc = []
			numgridloa++; 
			lengthc++;
			
			if($('#PMLoadgrid').data('kendoGrid').dataSource._view.length == numgridloa){
				numgridloa = 0;
			}
		}
			var valuemax = null
			
			/*if($('#PMLoadgrid').data('kendoGrid').dataSource._view.length ==lengthc+1){
				return;
			}*/
		 if(RM_MaxUnites){		
		if($('#PMLoadgrid').data('kendoGrid').dataSource._view.length > numgridloa){
				var viewr = $('#PMLoadgrid').data('kendoGrid').dataSource._view[numgridloa].value
				  var sviewr = viewr.split('|').length ==2? viewr.split('|')[1]:null;
				for (var j = 0; j < resReName.length; j++) {											  												
							if(sviewr == resReName[j].ResourceId){						
								valuemax =resReName[j].ResourceMaxUnits != null ?resReName[j].ResourceMaxUnits:0;
							}
					 }
				}
		 }
		
		
		
		
		
		HClas.push(data)
		var SCJ ='ok'	
		if(FotColor.length != 0){
			
			var chtrue = false
			 $.each(FotColor, function (indx, MGrid) {
				 
				 if(chtrue){
					 return;
				 }
			
				if(MGrid.Formula == 'Less than|lt'){
					$('.Lessthan').css('color', MGrid.ProjectFilter);
					if(MGrid.ProjectFilterValue != null){
						var nLs = parseInt(MGrid.ProjectFilterValue)
							if(valuemax != null){
								nLs = (valuemax*nLs)/100
							}
						if(data < nLs){
							chtrue =true;
							 var hcol = MGrid.ProjectFilter
							 if(MGrid.ProjectFilter.indexOf('#') != -1){
								 hcol =MGrid.ProjectFilter.replace("#", "")
								 hcol = hcol.trim()
							 }
							 
							 SCJ = "DC"+hcol;
							// SCJ = "DC"+MGrid.ProjectFilter;//"Lessthan";
							 HClasc.push(SCJ)
						}
					}
					
				}			
			   if(MGrid.Formula == 'Less than or equal to|le'){
					$('.Lessthanorequalto').css('color', MGrid.ProjectFilter);
					if(MGrid.ProjectFilterValue != null){
						var nLs = parseInt(MGrid.ProjectFilterValue)
						if(valuemax != null){
								nLs = (valuemax*nLs)/100
							}
						if(data <= nLs){
							chtrue =true;
							 var hcol = MGrid.ProjectFilter
							 if(MGrid.ProjectFilter.indexOf('#') != -1){
								 hcol =MGrid.ProjectFilter.replace("#", "")
								 hcol = hcol.trim()
							 }
							 
							 SCJ = "DC"+hcol;
							 //SCJ = "DC"+MGrid.ProjectFilter;//"Lessthanorequalto";
							  HClasc.push(SCJ)
						}
					}
				}
				
				if(MGrid.Formula == 'Equal to|eq'){
					$('.Equalto').css('color', MGrid.ProjectFilter);
					if(MGrid.ProjectFilterValue != null){
						var nLs = parseInt(MGrid.ProjectFilterValue)
						if(valuemax != null){
								nLs = (valuemax*nLs)/100
							}
						if(data == nLs){
							chtrue =true;
							 var hcol = MGrid.ProjectFilter
							 if(MGrid.ProjectFilter.indexOf('#') != -1){
								 hcol =MGrid.ProjectFilter.replace("#", "")
								 hcol = hcol.trim()
							 }
							 
							 SCJ = "DC"+hcol;
							 //SCJ =  "DC"+MGrid.ProjectFilter;//"Equalto";
							  HClasc.push(SCJ)
						}
					}
				}
				if(MGrid.Formula == 'Greater than or equal to|ge'){
					$('.Greaterthanorequalto').css('color', MGrid.ProjectFilter);
					if(MGrid.ProjectFilterValue != null){						
						var nLs = parseInt(MGrid.ProjectFilterValue)
						if(valuemax != null){
								nLs = (valuemax*nLs)/100
							}
						if(data >= nLs){
							chtrue =true;
							 //SCJ= "DC"+MGrid.ProjectFilter;//"Greaterthanorequalto";
							 //"Lessthanorequalto";
							 var hcol = MGrid.ProjectFilter
							 if(MGrid.ProjectFilter.indexOf('#') != -1){
								 hcol =MGrid.ProjectFilter.replace("#", "")
								 hcol = hcol.trim()
							 }
							 
							 SCJ = "DC"+hcol;
							  HClasc.push(SCJ)
						}
					}
				}
				if(MGrid.Formula == 'Greater than|gt'){
					$('.Greaterthan').css('color', MGrid.ProjectFilter);
					if(MGrid.ProjectFilterValue != null){
						var nLs = parseInt(MGrid.ProjectFilterValue)
						if(valuemax != null){
								nLs = (valuemax*nLs)/100
							}
						if(data > nLs){
							chtrue =true;
							 var hcol = MGrid.ProjectFilter
							 if(MGrid.ProjectFilter.indexOf('#') != -1){
								 hcol =MGrid.ProjectFilter.replace("#", "")
								 hcol = hcol.trim()
							 }
							 
							 SCJ = "DC"+hcol;
							 //SCJ= "DC"+MGrid.ProjectFilter;//"Greaterthan";
							  HClasc.push(SCJ)
						}
					}
				}
				
				if(MGrid.Formula == 'Between'){
					if(MGrid.ProjectFilterValue != null){
						if(MGrid.ProjectFilterValue.indexOf('-') != -1){
							var ifnb1 = parseInt(MGrid.ProjectFilterValue.split('-')[0])
							var ifnb2 = parseInt(MGrid.ProjectFilterValue.split('-')[1])							
							if(data > ifnb1 && data < ifnb2){
								chtrue =true;
								 SCJ= "Between"+MGrid.FormulaNumber.toString();
							}
						}
					}
				}
				
				
				
					
			 });
			 if(SCJ == 'ok'){
			 HClasc.push(SCJ)
			 }

			return 'No' ;
		}	
		
		//console.log(data);
		/*if(data == 0){
		 return "green";
		}
		else if(data <= 0 || data >= 100){
		 return "critical";
		}else{
			return "ok";
		}*/
	}
	var Fotter = false;
	var Fdata = []
	function getClassfolter(data){
		//console.log(data);
		
	
		Fotter = true
		Fdata.push(data)
		var SCJ = HClasc[Fdata.length-1]
		
		return 'No' ;
		//if()
			
		
		/*
		var SCJ ='ok'	
		if(FotColor.length != 0){
			var chtrue = false
			 $.each(FotColor, function (indx, MGrid) {
				 
				 if(chtrue){
					 return;
				 }
				if(MGrid.Formula == 'Less than|lt'){
					$('.Lessthan').css('color', MGrid.ProjectFilter);
					if(MGrid.ProjectFilterValue != null){
						var nLs = parseInt(MGrid.ProjectFilterValue)
						if(data < nLs){
							chtrue =true;
							 SCJ = "DC"+MGrid.ProjectFilter;//"Lessthan";
						}
					}
					
				}
				
				if(MGrid.Formula == 'Less than or equal to|le'){
					$('.Lessthanorequalto').css('color', MGrid.ProjectFilter);
					if(MGrid.ProjectFilterValue != null){
						var nLs = parseInt(MGrid.ProjectFilterValue)
						if(data <= nLs){
							chtrue =true;
							 SCJ = "DC"+MGrid.ProjectFilter;//"Lessthanorequalto";
						}
					}
				}
				
				if(MGrid.Formula == 'Equal to|eq'){
					$('.Equalto').css('color', MGrid.ProjectFilter);
					if(MGrid.ProjectFilterValue != null){
						var nLs = parseInt(MGrid.ProjectFilterValue)
						if(data == nLs){
							chtrue =true;
							 SCJ =  "DC"+MGrid.ProjectFilter;//"Equalto";
						}
					}
				}
				if(MGrid.Formula == 'Greater than|gt'){
					$('.Greaterthan').css('color', MGrid.ProjectFilter);
					if(MGrid.ProjectFilterValue != null){
						var nLs = parseInt(MGrid.ProjectFilterValue)
						if(data > nLs){
							chtrue =true;
							 SCJ= "DC"+MGrid.ProjectFilter;//"Greaterthan";
						}
					}
				}
				if(MGrid.Formula == 'Greater than or equal to|ge'){
					$('.Greaterthanorequalto').css('color', MGrid.ProjectFilter);
					if(MGrid.ProjectFilterValue != null){						
						var nLs = parseInt(MGrid.ProjectFilterValue)
						if(data >= nLs){
							chtrue =true;
							 SCJ= "DC"+MGrid.ProjectFilter;//"Greaterthanorequalto";
						}
					}
				}
				
				if(MGrid.Formula == 'Between'){
					if(MGrid.ProjectFilterValue != null){
						if(MGrid.ProjectFilterValue.indexOf('-') != -1){
							var ifnb1 = parseInt(MGrid.ProjectFilterValue.split('-')[0])
							var ifnb2 = parseInt(MGrid.ProjectFilterValue.split('-')[1])							
							if(data > ifnb1 && data < ifnb2){
								chtrue =true;
								 SCJ= "Between"+MGrid.FormulaNumber.toString();
							}
						}
					}
				}
				
				
				
					
			 });

			return SCJ ;
		}	*/
		/*if(data <= 0){
		 return "critical";
		}
		else if(data == 0){
		 return "green";
		}
		else if(data >= 100){
		 return "green";
		}else{
			return "ok";
		}*/
	}
	
	function formTypeDropDownEditor(container, options) {
		/*datadropdd.sort(function(a, b) { 
			  return a.Title - b.Title  ||  a.Title.localeCompare(b.Title);
			});*/
		var Resrname = options.model.Projectname	
		var griddatabind =  $("#PMLoadgrid").data("kendoGrid").dataSource._data
		var filterDrop = []
		
			for( var i=griddatabind.length - 1; i>=0; i--){
						if(griddatabind[i] && (griddatabind[i].Resourceuid === options.model.Resourceuid)){
							filterDrop.push(griddatabind[i]);
						}
					}
		datadropdd.sort(function(a, b) { 
			  return a.Title - b.Title  ||  a.Title.localeCompare(b.Title);
			});
			
			
		/*if(replaceRName){
			for( var j=0; j<datadropdd.length; j++){
					if(datadropdd[j] && (datadropdd[j].Title === options.model.Projectname)){
						datadropdd.splice(j, 1);
					}
				}
		//}*/
		var filterdropnames = []
		for( var i=datadropdd.length - 1; i>=0; i--){
			filterdropnames.push(datadropdd[i]);
			
		}
		filterdropnames.sort(function(a, b) { 
			  return a.Title - b.Title  ||  a.Title.localeCompare(b.Title);
			});
			for( var i=filterdropnames.length - 1; i>=0; i--){
						for( var j=0; j<filterDrop.length; j++){
							//if(filterdropnames[i] && (filterdropnames[i].Title === filterDrop[j].Projectname)){
							if(filterdropnames[i] && (filterdropnames[i].ResourceId === filterDrop[j].Projectuid)){
								filterdropnames.splice(i, 1);
							}
							if(filterdropnames[i] && (filterdropnames[i].ResourceIsActive != 'True')){
								filterdropnames.splice(i, 1);
							}
						}
					}
        $('<input name="' + options.field + '"/>')
			.appendTo(container)
			.kendoDropDownList({
				filter: 'contains',
				dataTextField: "Title",
				dataValueField: "ResourceId", //ResourceId
				valuePrimitive: true,
				autoBind: false,
				dataSource: {
					data: filterdropnames
				},
				change: dropdownOnChange
			});
		$('#PMLoadgrid_active_cell').find('span.k-input').text(Resrname);
		//current_dropvalues =  options.model.Projectname	
    }
	var current_dropvalues = "";
	var RedataId =[]
	function dropdownOnChange(e){
		console.log(e);
		var currentRow = $("#PMLoadgrid").data("kendoGrid").dataSource._data.filter(function(x){
							return x.uid == $(e.sender.element).closest('tr').attr('data-uid');
						});
		if(currentRow.length > 0){
			currentRow[0].Projectuid = $(e.sender.element).val();
			currentRow[0].Projectname = $(e.sender.element).prev('span').find('.k-input').text();
		}
	}
	function savereplaceEngagements (){
		collapseRows();
		if(RedataId.length == 0){			
			return;
		}		
		var unqval=	unique(RedataId);			
		var griddatabind =  $("#PMLoadgrid").data("kendoGrid").dataSource._data
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
		if(datafilter.length == 0){			
			return;
		}
		
		var datafilterchange = []
		var getgridvaleschange = datafilter.filter(function (PSitem, Psidx) {
					return Sectotalarray.filter(function (Litem, Lixd) {
						if(Litem.AllocationUID == PSitem.AllocationUID && Litem.Projectuid != PSitem.Projectuid){								
							datafilterchange.push(PSitem);
							return true;						  
						}
						return false;
					}).length != 0
			 });
				 
	//	console.log(datafilterchange);
		
		datafilterchange.filter(function (PSitem, Psidx) {
					return datadropdd.filter(function (Litem, Lixd) {
						if(Litem.ResourceId == PSitem.Projectuid){	
							//console.log(PSitem.Resourceuid)
							PSitem.Resourceuid = Litem.ResourceID
							//console.log('Chang'+PSitem.Resourceuid)
							//datafilterchange.push(PSitem);
							return true;						  
						}
						return false;
					}).length != 0
			 });
		
		//console.log(datafilterchange);
		
		 var singleObj = []; 
		 datafilterchange.filter(function (PSitem, Psidx) {
			  singleObj.push({'EngagementUID': PSitem.AllocationUID, 'ResourceID': PSitem.Resourceuid, 'ResourceName': PSitem.Projectname });
		 });
         //console.log(singleObj);
         var ApproveUpconJson = JSON.stringify(singleObj);
         UpdateReplacementMulti(ApproveUpconJson);
		
	}
	
	  
         function UpdateReplacementMulti(param) {
         
            jQuery.ajax({
                type: "POST",
                url: azurewebsites+"/api/Allocation/ReplaceEngagementsStatus",// azurewebsites+"/api/Allocation/ReplaceEngagements",
                data: JSON.stringify(param),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                  $('#ErroeMessage').text('') 
				 // roleEngagementload();
				 if(seltrue){
										SelectedEngagementload()
									}else{
										roleEngagementload();
									}
				// saveFilterEngagements();
				  $('.DreEndc').show()
				  $('.chktwodata').show()
		          $('.reEngCopy').hide()
					//Cancel ()
                },
				 error: function (error) {
					$('#ErroeMessage').text('Error Replace Engagement')
                }
            });
         
         
         }
	function RepEngagementPage (){	
		$('#ErroeMessage').text('')
		if($("#drp_Role").data("kendoDropDownList").text() == "Select Role.."){
			$('#ErroeMessage').text('*Please Select Role....')
			return;
		}
		
		if(Sectotalarray.length == 0){
			$("#RePMLoadgrid").empty();
			$("#RePMLoadgrid").hide();
			return;
		}	
		  RedataId =[]
		  
		  
		  
		   
		$('.reEng').show()
		$('.DreEnd').hide()
		$("#PMLoadgrid").empty();
		$("#PMLoadgrid").hide();
		//$('.valhide').hide()
		$("#RePMLoadgrid").empty();
		$("#RePMLoadgrid").show();
		 var dataSourc = new kendo.data.DataSource({
			  data:Sectotalarray,
			   group: { field: "Resourcename"}
			});
			
		 var grid = $("#RePMLoadgrid").kendoGrid({
			 dataSource: dataSourc,
			 navigatable: true,
			 edit: function (e) {
				 /*var inputHT=$("#PMLoadgrid td").height()-10;
			 $('#PMLoadgrid_active_cell').find('.k-input').css("height", inputHT);
			 $('#PMLoadgrid_active_cell').find('.k-input').css("margin-top", -6);
			 var backColor="white";
			 $('#PMLoadgrid_active_cell').find('.k-numeric-wrap').css("background-color", backColor);
			 $('#PMLoadgrid_active_cell').find('.k-numerictextbox').css("background-color", backColor);
			 $('#PMLoadgrid_active_cell').find('.k-numerictextbox').css("margin-top", -3);*/
				 if(e.model.Resourcename == "No Allocation"){
				  e.model.Resourcename				  
				  this.closeCell()
			      }else{
					  
					  var usersfil = []
						 var uniqueuser;
						 for (var j = 0; j < Sectotalarray.length; j++) {
								if(e.model.Resourcename  == Sectotalarray[j].Resourcename){
									 usersfil.push(Sectotalarray[j].Projectname);
									 var uniqueSet = new Set(usersfil);
									 //uniqueuser = Array.from(uniqueSet);
									// uniqueuser =  getUnique(uniqueSet);//Array.from(uniqueSet);
								}

							 }
							 
							 uniqueuser =  getUnique(usersfil);
						
						if(uniqueuser != undefined){
							for( var i=datadropdd.length - 1; i>=0; i--){
									for( var j=0; j<uniqueuser.length; j++){
										if(datadropdd[i] && (datadropdd[i].Title === uniqueuser[j])){
											datadropdd.splice(i, 1);
										}
									}
								}
							}
					  
					  
					  
				  RedataId.push(e.model.AllocationUID);
				 setTimeout(function () {
					 e.container.find("input").select();
				 })
			   }
			 },
			 save: function () {
                  var grid = this;
                  setTimeout(function () {
                    grid.refresh();
						$('#ErroeMessage').text('*Unsaved Data is there. Please click on save button before leaving.')
                    //alert('');
                  }, 5000)
                },
			 editable:  true,
			 selectable: "multiple, cell",
			// sortable: true,
			 filterable: true,
			 resizable: true,
			 columns: [{
						field: "Projectname",
						//editable: true,
						title: 'Resource',
						format: "",
						width: 120,
						editor: formTypeDropDownEditor,
						},{
						field: "Resourcename",
						editable: true,
						title: 'Project',
						format: "",
						width: 300,
						filterable: {
							multi: true,
							search: true
							}
						},{
						field: "Role",
						editable: true,
						title: 'Role',
						format: "",
						width: 300,
						filterable: {
							multi: true,
							search: true
							}
						}]
			 
		 });
         
		  /* var ds = $("#RePMLoadgrid").data("kendoGrid").dataSource;
		     ds.sort({ field: "Resourcename", dir: "asc" }); */
		
	}
	function findOdd(para) {
  var count = {};
  para.forEach(function(para) {
  count[para] = (count[para] || 0) + 1;
  });
  return count;
}

	function ReplaceEngagementPage(){
		repacedEng = true;
		collapseRows();
		var acheck =false;
			if(dataIdPP.length !=0){					
				acheck = confirm(' Are you sure you want to replace an allocation?  You have unsaved changes.  Press OK to continue with your allocation replacement, which will lose any unsaved changes.  Press Cancel to cancel this allocation replacement.')
			}else{
				acheck =true;
			}
		if(acheck){
		$('.DreEndc').hide()
		$('.reEngCopy').show()	
		paageLoad(JsonFor,'1')
		}
	}
	function removeDuplicates(originalArray, prop) {
		 var newArray = [];
		 var lookupObject  = {};

		 for(var i in originalArray) {
			lookupObject[originalArray[i][prop]] = originalArray[i];
		 }

		 for(i in lookupObject) {
			 newArray.push(lookupObject[i]);
		 }
		  return newArray;
	 }
	function AddProjectmulti(){
		collapseRows();
		var PUid= $("#drp_GetProjectsWindow").data("kendoMultiSelect").value();
		if(PUid.length != 0){
			
			
			var uniqueArrayRS = removeDuplicates(GriddataRName, "RId");
			var RnameFilter;
			var RIdFilter;
			uniqueArrayRS.filter(function (itemR, idx) {
						if(itemR.RId == GRUIDGrid){
							RnameFilter = itemR.Rname;
							RIdFilter = itemR.RId;	
						}
					});
			var dataP = []
			PUid.filter(function (itemf, idxf) {
				ProjectsDataInfo.filter(function (item, idx) {					
					if(item.ProjectId == itemf.ProjectId){
								item.RName = RnameFilter;
								item.RID = RIdFilter;
								dataP.push(item);
					}
				});
		  });	
		  
		  //debugger
			
	     var txtMaxunitMonth = '';//$('#txt_unitW').val();
		var resourceName = ''
         var sdate = $('#start').val();   //start_datepickerW
         var sdatePart = sdate.split(' ');
         var MonthNum = mL.indexOf(sdatePart[0]) + 1;
         var startd = MonthNum + " " + sdatePart[1];
         
         var fdate = $('#end').val(); //end_datepickerW
         var fdatePart = fdate.split(' ');
         var FMonthNum = mL.indexOf(fdatePart[0]) + 1;
         var finishd = FMonthNum + " " + fdatePart[1];
         /*$('#addItemChk').text("");		
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
         }*/
	 dataP.filter(function (item, idx) {
			item.ResourceName=item.RName
			item.Startdate= sdate
			item.Enddate =fdate
			item.units= txtMaxunitMonth
			item.ID=item.RID
		});
		
		var getSaveResEDS = savedataAdd(dataP)
		 //debugger
		}
		
	}
	
	
	var savedataAdd = function(SaveEngData){
	var url = azurewebsites+"/api/Allocation/AddTaskRM";//AddTask";
	var data;
	var clitem = SaveEngData.length
	for (i = 0; i < SaveEngData.length; i++){
			var cidx = i+1
		  var SaveEngDataNew = [];
				  var obj = {};
					 obj.Description = 'CODE TEST';
					 obj.Projectuid = SaveEngData[i].ProjectId;
					 obj.Projectname = SaveEngData[i].ProjectNamecopy;//ProjectName;
					 obj.Resourceuid = SaveEngData[i].ID;
					 obj.Resourcename = SaveEngData[i].ResourceName;
					 obj.Role = '';
					 obj.Start = (monthNamesFull.indexOf(SaveEngData[i].Startdate.split(' ')[0]) + 1) + "/05/" + SaveEngData[i].Startdate.split(' ')[1];
					 obj.Finish = (monthNamesFull.indexOf(SaveEngData[i].Enddate.split(' ')[0]) + 1) + "/05/" + SaveEngData[i].Enddate.split(' ')[1];
					 obj.Unit = '0';//SaveEngData[i].units;
					 obj.Status = "Committed";
					 SaveEngDataNew.push(obj);
			   
	 var allData = JSON.stringify(SaveEngDataNew);
	 
	 console.log(allData)
	  $.LoadingOverlay("show");
                 $.ajax({
                     type: "POST",
                     url: url,
                     data: JSON.stringify(allData),
                     contentType: "application/json; charset=utf-8",
                     dataType: "json",
                     success: function (data) {
						 if(clitem == cidx){
							 $.LoadingOverlay("hide");
							 roleEngagementload()	
							  myWindowAdd.data("kendoWindow").center();
								myWindowAdd.data("kendoWindow").close();
								
						 }
					},
					error: function(error) {
						 $.LoadingOverlay("hide");
				  }
					 
			 });
			 
	}
}
	var GRUIDGrid;
	
	var c = 1
	var datamulti =[];
	
	
	function AddNewItem(val){
		
		
		var acheck =false;
			if(dataIdPP.length !=0){					
				acheck = confirm('Are you sure you want to add a project allocation?  You have unsaved changes.  Press OK to continue with your project allocation, which will lose any unsaved changes.  Press Cancel to cancel this project allocation.')
			}else{
				acheck =true;
			}
		if(acheck){
		console.log(val);
		//alert(data)
		GRUIDGrid = val
		
		var uniqueArrayRS = removeDuplicates(GriddataRName, "RId");
			var RnameFilter;
			var RIdFilter;
			var RDataFilter
			uniqueArrayRS.filter(function (itemR, idx) {
						if(itemR.RId == val){
							RnameFilter = itemR.Rname;
							RIdFilter = itemR.RId;	
							RDataFilter = itemR.RData
						}
					});
					
					$(".k-window-title").text(RnameFilter)
		//var IdP =data.split('?')[0]
		//var NameP =data.split('?')[1]
		//var url = azurewebsites+"/api/Allocation/SPWithSinglePara/AG_ProjectList/123"
		var res1 = [];
		var getResMtd1 = [];
		var new_resGetProject = JSON.parse(resGetProject_string);
		var new_resGetProject_len = new_resGetProject.length
		for(op=0;op<new_resGetProject_len;op++){
			var item_resop = new_resGetProject[op];
			for(k in item_resop){
				if(k.includes('Filter')){
					var validDate  =  item_resop[k] != null?(new Date(item_resop[k]) == 'Invalid Date' ?false:true):false;
					var FilterVal = ''
					if(validDate){
								FilterVal = formatDateF( new Date(item_resop[k]))
					}
					else{
						FilterVal = new_resGetProject[op][k]
					} 
					new_resGetProject[op][k] = FilterVal;
				}
			}
		}
		if(filterString_CustomFieldName != ""){
			if(filterString != ""){
				  res1 = new_resGetProject.filter(function(x){
					 return eval(filterString);
				 })
				 
				 getResMtd1 = res1
			}
			else{
				//url = azurewebsites+"/api/Allocation/SPWithSinglePara/AG_ProjectList/123"
				getResMtd1 = new_resGetProject;
			}
		}
		else{
			//url = azurewebsites+"/api/Allocation/SPWithSinglePara/AG_ProjectList/123"
			getResMtd1 = new_resGetProject;
		}
	
		
		//var res1 = getAjex(url);	
		//var getResMtd1 = res1.value;
		datamulti = [];
		c = 1
	    
		
	
		getResMtd1 = getResMtd1.concat(datamulti);//.concat(getResMtd3);
			
		var NonProjectsName = getResMtd1;//res.value;
		/*var apiBaseUrl = azurewebsites+"/api/";
		var urlNon = apiBaseUrl+"AllNonProjects";
		var resNon = getAjexNon(urlNon);*/
		var urlNon = apiBaseUrlNon+"AllNonProjects";
		 resNonNOnProjects = getAjexNon(urlNon);
		var getResMtdNon = resNonNOnProjects;//.value;
		
			for( var j=0; j<NonProjectsName.length; j++){
				NonProjectsName[j].copyPName = NonProjectsName[j].ProjectName
				
			}
			var getResMtd = []
			for( var j=0; j<getResMtdNon.length; j++){
				if(getResMtdNon[j].Active != "1"){
							var nonJson ={}
						nonJson.ProjectId = getResMtdNon[j].Category_GUID
						nonJson.ProjectName=getResMtdNon[j].Category;	
						nonJson.copyPName=getResMtdNon[j].Category;//+" (Non-Project)"
						getResMtd.push(nonJson);
						//getResMtd.push(nonJson);
					}
				}
			/*ProjectId: "2fe11e91-0a12-eb11-bf95-00155dac2022"
ProjectName:	Category: "Consulting Services"
Category_UID: 30 */
		NonProjectsName.sort(function(a, b) { 
				  return a.ProjectId - b.ProjectId  ||  a.ProjectName.localeCompare(b.ProjectName);
				});
			
		getResMtd.sort(function(a, b) { 
				  return a.ProjectId - b.ProjectId  ||  a.ProjectName.localeCompare(b.ProjectName);
				});
				for( var j=0; j<NonProjectsName.length; j++){
					getResMtd.push(NonProjectsName[j]);
				}
				
			getResMtd.filter(function (item, idx) {
				// var number = item.ProjectNumber != null ?item.ProjectNumber:'*Blank';
				 item.ProjectNamecopy = item.ProjectName;
				//item.ProjectName = '('+number+') '+item.ProjectName;
				item.ProjectName = item.ProjectName;
			});
		ProjectsDataInfo = getResMtd; 
		
		
		//.width(350)
	/*$("#drp_GetProjectsWindow").kendoMultiSelect({
				filter: 'contains',
				optionLabel: "Select Project..",
				dataTextField: "ProjectName",
				dataValueField: "ProjectId",
				dataSource:getResMtd,
				index: 0,
				//width:350px,		
				
			});*/
			var NewDropData = []
			/*getResMtd.filter(function (itemP, idxP) {
						RDataFilter.filter(function (itemG, idxG) {
						if(itemP.ProjectId == itemG.Resourceuid){
							getResMtd.splice(idxP, 1)
						}
					});
			});*/
			
			if(RDataFilter != undefined){
							//for( var i=getResMtd.length - 1; i>=0; i--){
								for( var i=0; i<getResMtd.length; i++){
									for( var j=0; j<RDataFilter.length; j++){
										if(getResMtd[i] && (getResMtd[i].ProjectId === RDataFilter[j].Resourceuid)){
											getResMtd.splice(i, 1);
										}
									}
								}
				}
			//var newar = []
			customFieldName = customFieldName != null || customFieldName == '' ?customFieldName.replace(/[&\/\\#, +()$~%.'":*?<>{}-]/g, ''):null;;//replaceAll(" ","")
			for(i=0;i<getResMtd.length;i++){
				var item = newgetProjectsdatainfo.filter(function(x){
					return x.ProjectId === getResMtd[i].ProjectId
				})
				if(item.length > 0){
					if(item[0]['Display1'] != null){
						
						if(customFieldName.search("Date") != -1 || ProjectDisplayFieldType == 'Date' || ProjectDisplayFieldType == 'date'){
						getResMtd[i].ProjectName = getResMtd[i].ProjectName+"  ("+ formatDate(item[0]['Display1'])+")"
						}
						else if(ProjectDisplayFieldType =="Number" || ProjectDisplayFieldType == "number"){
									var nch = item[0]['Display1'] != '' && item[0]['Display1'] != null  && item[0]['Display1'] != 0 ? parseFloat(item[0]['Display1']).toFixed(2):0
										getResMtd[i].ProjectName =  getResMtd[i].ProjectName+"  ("+nch+")"
							}
						else if(ProjectDisplayFieldType =="currency" || ProjectDisplayFieldType == "Currency"){
									var nch = item[0]['Display1'] != '' && item[0]['Display1'] != null  && item[0]['Display1'] != 0 ? formatter.format(item[0]['Display1']):"$0"
										getResMtd[i].ProjectName =  getResMtd[i].ProjectName+"  ("+nch+")"
							}
						else if(Object.is(parseInt(item[0]['Display1']),NaN) == false || Object.is(parseInt(item[0]['Display1']),NaN) == "false")
										{
							var val = item[0]['Display1'] != null && item[0]['Display1'] != '' ?parseFloat(item[0]['Display1']):0;
							var lengthN = countDecimals(val)
							getResMtd[i].ProjectName = getResMtd[i].ProjectName+"  ("+val+")"
						}
						else{
							getResMtd[i].ProjectName = getResMtd[i].ProjectName+"  ("+ item[0]['Display1']+")"
						}
					}
				}
			}
			
			var dataSource = new kendo.data.DataSource({
				  data: getResMtd
				});
				var multiselect = $("#drp_GetProjectsWindow").data("kendoMultiSelect");
				multiselect.setDataSource(dataSource);
				multiselect.value([]);
				multiselect.refresh();
	//$("#drp_GetProjectsWindow").data("kendoMultiSelect").text('')
		
	  $('#start_datepickerW').val('')
	  $('#end_datepickerW').val('')
	  $('#txt_unitW').val('')
	//	$('#textvalueAdd').html(RnameFilter);					
		 myWindowAdd.data("kendoWindow").center();
		 myWindowAdd.data("kendoWindow").open();
			}
	}
	
	function clickgridprojectNonName (){
				myWindowAdd.data("kendoWindow").center();
					myWindowAdd.data("kendoWindow").close();
			}
	
	function myEditorFunction (container, options) {
    $('<input name="' + options.field + '" />')
        .appendTo(container)
        .kendoNumericTextBox({
            min: 0,
			spinners : false,
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
	var Globalresponded2 = []
	var GlobalresName2 = []
	var Globalresponded3 = [];
	var Globalresponded4 = [];
	var newResar = []
	var validProjects = [];
		var newResarID = []
		var getCapcity  =[]
		var arr_getCapcity_Project=[]
	var arr_ResourceId=[]
	var arr_ResourceIsActive=[]	
	var arr_ResourceIsGeneric=[]
	var arr_Title=[]
	var arr_ResourceMaxUnits=[]						
	function paageLoad(responsed,a,selAll){
		Globalresponded2 = []
		GlobalresName2 = []
		
		arr_ResourceId=[]
		arr_ResourceIsActive=[]	
		arr_ResourceIsGeneric=[]
		arr_Title=[]
		arr_ResourceMaxUnits=[]
		customFieldName = customFieldName != null || customFieldName == '' ?customFieldName.replace(/[&\/\\#, +()$~%.'":*?<>{}-]/g, ''):null;
		Rpalcececk = a;
		Globalresponded3 = responsed;
		var resP = resGetProject;//getAjex(urlP);		
		var getProjectsdatainfo = resP;	
		if(!statusFilter || !filterApplied){
			Globalresponded4 = responsed;
		}
		JsonFor = responsed;
		responsed = JSON.parse(responsed);
		if(statusFilter || filterApplied){
			var al_filterval = $('#_filterAllocation').val();
			selectedFilter_status(al_filterval,Globalresponded3,selAll);
			responsed = Globalresponded4;
		}
		var responsed_len = responsed.length;
		if(Globalvar_resourceName != "" && !createdfilters && !filterApplied){
			Globalresponded = responsed
			GlobalresName = resReName
		}
		Globalresponded2 = responsed
			GlobalresName2 = resReName
		newResar = []
		newResarID = []
		inactivUserIdn = false;
		var resReNameG = [];
	
		var resReNameG = [];
	
		var inacItm = resReName.filter(function(x){
			return x.ResourceIsActive != "True";
		})
		for(i = 0; i<inacItm.length; i++){
			var it = responsed.filter(function(x){
				return x.Projectuid == inacItm[i].ResourceId;
			})
			if(it.length > 0){
				inactivUserIdn = true;
			}
		}
		for(i=0;i<resReName_len;i++){
			arr_ResourceId.push(resReName[i].ResourceId)
			arr_ResourceIsActive.push(resReName[i].ResourceIsActive)	
			arr_ResourceIsGeneric.push(resReName[i].ResourceIsGeneric)
			arr_Title.push(resReName[i].Title)
			arr_ResourceMaxUnits.push(resReName[i].ResourceMaxUnits)
			if(resReName[i].ResourceIsActive != "True"){
				 newResar.push(resReName[i]);
			}
			
		}
		var newresponse = []
		gridcolums = []
		var keyp = []
		var keysnames = Object.keys(responsed[0]);
		var keynames_len = keysnames.length;
		for(i=0;i<keynames_len;i++){
			if(keysnames[i].indexOf('_Status') == -1){
				keyp.push(keysnames[i])
				gridcolums.push(keysnames[i])
			}
		}
		
		
		/**********************************************/
		if((Globalvar_resourceName != "" && !createdfilters && !filterApplied)){
			inactivUserIdn = false;
			inactivUserIdn2 = false;
			$('td[name="td_filter"]').remove()
			globalValDrop = [];
			for(i=0;i<resReName.length;i++){
				var item = resGetResources.filter(function(x){
					return x.ResourceId == resReName[i].ResourceId
				});
				if(item.length != 0){
					globalValDrop.push(item[0]);
				}
				
			}
			var ar_globalValDrop = []
			var repar_globalValDrop = []
			 
			for(i=0;i<responsed_len;i++){
				
						
				//if(responsed[i].Projectname != ""){
					var item = globalValDrop.filter(function(x){
						return x.ResourceId == responsed[i].Projectuid 
					})
				//	debugger
					
					if(item.length > 0){
						
					   if(repar_globalValDrop.indexOf(item[0].ResourceId) == -1){
						 ar_globalValDrop.push(item[0])
					   }
						repar_globalValDrop.push(item[0].ResourceId)
						
					}
				//}
			}
			
			 for (var j = 0; j < getCapcity.length; j++) {
					if(arr_ResourceId.indexOf(getCapcity[j].Projectuid)!=-1){
					 var ridx= arr_ResourceId.indexOf(getCapcity[j].Projectuid);
					 getCapcity[j].ResourceIsActive=arr_ResourceIsActive[ridx];
					 getCapcity[j].ResourceIsGeneric=arr_ResourceIsGeneric[ridx];
					}
						/*for (var i = 0; i < resReName.length; i++) {											  												
									if(getCapcity[j].Projectuid == resReName[i].ResourceId){										
										getCapcity[j].ResourceIsActive =resReName[i].ResourceIsActive;
										getCapcity[j].ResourceIsGeneric =resReName[i].ResourceIsGeneric;
									}
						 }*/
				 }
			
			
			
			globalValDrop = ar_globalValDrop;
			var itemg = globalValDrop[0];
			for(k in itemg){
				 keynames.push(k);
			 }
			createResourceFilterdropdowns();		 
			//$('td[name="td_filter"]').show();					
		}
		
		//globalFilterAr = [];
		
		/**********************************************/
		getCapcity  =[]
		arr_getCapcity_Project=[]				   
		
		for (var i = 0; i < responsed.length; i++) {
			if(responsed[i].AllocationStatus =="Capacity"){
				getCapcity.push(responsed[i])
				arr_getCapcity_Project.push(responsed[i].Projectuid)										
			}
			var obj = {};
			var objj = {};
			for(var key in responsed[i]) {
				if(key.indexOf('_Status') == -1){
				   obj[key] =  responsed[i][key];
				}
				else{
					objj[key] =  responsed[i][key];
				}
				if(responsed[i].Projectname == "" && key.indexOf('_Status') != -1){
					responsed[i][key] = "0"
					responsed[i].AllocationStatus = "Non"
					responsed[i].Status = "0"
				}
			}
			objj.AllocationUID = responsed[i].AllocationUID;			
			allocationStatus.push(objj);			
		}
		//debugger
		if(filterString_CustomFieldName != ""){
			var responsed_len = responsed.length
			for(i=0;i<responsed_len;i++){
				 $.each(getProjectsdatainfo	, function (indx, PGrid) {				 
					 if(responsed[i].Resourceuid == PGrid.ProjectId){
						 //responsed[i].Status = PGrid['Filter1'];//PGrid.ProjectStatus
						// responsed[i].gridorder = 'B'
						//var c=1;
						for(k in PGrid){
							if(k.includes("Filter")){
								
								var validDate  = PGrid[k] != null?(new Date(PGrid[k]) == 'Invalid Date'  ?false:true):false;
								var FilterVal = ''
								if(validDate){
									FilterVal = formatDateF( new Date(PGrid[k]))
								}
								else{
									FilterVal = PGrid[k]
								}
								if(filterString_CustomFieldVal.indexOf(FilterVal) != -1){
									responsed[i].Status = FilterVal;//PGrid.ProjectStatus
								}
																
								
							}
							//c++;
						}
					 }else{
						 // responsed[i].gridorder = 'A'
						 if(responsed[i].Projectname == "" && responsed[i].Status == '0'){
							 responsed[i].Status = filterString_CustomFieldVal[0];
						 }
					 }				 
				 })						
			}
		}
		
		
		
		
	//	$.each(resNonNOnProjects, function (indx, NonGrid) {				 
		//					 if(NonGrid.Category_GUID == responsed[i].Resourceuid){
		
		
		for (var i = 0; i < responsed.length; i++) {			
			//	for (var j = 0; j < resReName.length; j++) {					    
				{
						 var ridx= arr_ResourceId.indexOf(responsed[i].Projectuid );
						 var L_R_Id =arr_ResourceId[ridx];
						 var L_R_Title =arr_Title[ridx];
						 var L_R_IsActive =arr_ResourceIsActive[ridx];
						 var L_R_IsGeneric =arr_ResourceIsGeneric[ridx];
					   if(responsed[i].Projectname == null || responsed[i].Projectname == ''){
							if(responsed[i].Projectuid == L_R_Id){ //resReName[j].ResourceId){
								responsed[i].Projectname =L_R_Title //resReName[j].Title
								var namecheck = false;
								$.each(resNonNOnProjects, function (indx, NonGrid) {				 
									 if(NonGrid.Category_GUID == responsed[i].Resourceuid){
										 namecheck = true;
									 }
								});
								if(!namecheck){
								responsed[i].Resourcename ='No Allocation'
								}
								//response[i].ResourceMaxUnits =resReName[j].ResourceMaxUnits
								
							}
							else if(responsed[i].Projectuid == L_R_Id){ //resReName[j].ResourceId){
								responsed[i].Projectname = L_R_Title // resReName[j].Title						
								responsed[i].Resourcename ='No Allocation'
								//response[i].ResourceMaxUnits =resReName[j].ResourceMaxUnits
								
							}
						}
						
											
						if(responsed[i].Projectname == L_R_Title){ //resReName[j].Title){
							var item = resGetResources.filter(function(x){
								return x.ResourceId == responsed[i].Projectuid
							});
							if(item.length != 0){
								if(item[0]['Display1'] != undefined){
									if(RM_ResourceDisplayFieldType =="Number" || RM_ResourceDisplayFieldType == "number"){
										responsed[i].Role =item[0]['Display1'] != '' && item[0]['Display1'] != 0 && item[0]['Display1'] != null ? parseFloat(item[0]['Display1']).toFixed(2):"0";
									}
									else if(RM_ResourceDisplayFieldType =="Currency" || RM_ResourceDisplayFieldType == "currency"){
											responsed[i].Role =item[0]['Display1'] != '' && item[0]['Display1'] != 0 && item[0]['Display1'] != null ? formatter.format(item[0]['Display1']):"$0";
										} 
									else if(Object.is(parseInt(item[0]['Display1']),NaN) == false || Object.is(parseInt(item[0]['Display1']),NaN) == "false")
										{
											var val = item[0]['Display1'] != null && item[0]['Display1'] != '' ?parseFloat(item[0]['Display1']):0;
											var lengthN = countDecimals(val)
											responsed[i].Role =val
										}
										
									else{
									responsed[i].Role =item[0]['Display1'];
									//response[i].ResourceMaxUnits =resReName[j].ResourceMaxUnits
									}
								}						
							}
							
						}
			     }				
		}
		var response =[]
		var Rname = []
		var totalrnames = []
		var numvalchk = ['ID', 'AllocationUID', 'Description', 'Projectuid', 'Projectname', 'Resourceuid', 'Resourcename', 'Role', 'Start', 'Finish', 'TotalUnit', 'Status']
		var count_criteria = 0;
		var criteria_arr1 = [];
		var criteria_arr2 = [];
		var criteria_arr3 = [];
		var criteria_arr4 = [];
		var al_filterval = $('#_filterAllocation').val();
		if(!statusFilter && !filterApplied){
			validProjects = [];
		}
		
		if(filterString_CustomFieldVal.length != 0){	
			var responsed_len = responsed.length;
			for(i=0;i<responsed_len;i++){
				var Projtuid = responsed[i].Projectuid;
				var Projtname = responsed[i].Projectname;
				var restuid = responsed[i].Resourceuid
				count_criteria = 0
				if(totalrnames.indexOf(Projtuid) == -1){
					totalrnames.push(Projtuid)
				  }
				  
				  
				  if(responsed[i].Resourcename =='No Allocation' && ResActiveAr.indexOf(Projtuid) != -1){
					if(arr_TID_datachkBLK.indexOf(responsed[i].Projectname+responsed[i].Projectuid)!=-1 )
					  {
						  response.push(responsed[i])
					  }
					/*  datachkBLK.filter(function(act) {
								if(act.Title == Projtname && act.ResourceId == Projtuid){
									response.push(responsed[i])					   
								}
					  });*/
					   Rname.push(Projtuid);
				  }
				  else{
					$.each(filterString_CustomFieldVal, function (indx, PGrid) {				 
						 if(PGrid == responsed[i].Status){
							if(!statusFilter && !filterApplied){
									validProjects.push(responsed[i].Resourceuid);
							}
							if(Rname.indexOf(Projtuid) == -1){
								Rname.push(Projtuid);
							}
							var ResourceIsActive = false;
							if(arr_ResourceId.indexOf(responsed[i].Projectuid)!=-1)
							{
								var ridx= arr_ResourceId.indexOf(responsed[i].Projectuid);
								var l_rid=arr_ResourceId[ridx];
								var l_Act=arr_ResourceIsActive[ridx];
								var l_Title=L_R_Title[ridx];	
								if(l_Title == responsed[i].Projectname && l_rid == responsed[i].Projectuid){									
									if(l_Act == 'False' || l_Act == 'false'){
										ResourceIsActive = true;
									}
								}
								
							}
							/*resReName.filter(function(act) {
								if(act.Title == Projtname && act.ResourceId == Projtuid){									
									if(act.ResourceIsActive == 'False' || act.ResourceIsActive == 'false'){
										ResourceIsActive = true;
									}
								}
							});*/
							
							if(ResourceIsActive){
								var chknumval =false;
								var kc = Object.keys(responsed[i])
									kc.filter(function(val3){
										if(numvalchk.indexOf(val3) == -1){
											if(responsed[i][val3] != 0 && responsed[i][val3] != null){
												chknumval =true;
											}
										}
									});
									if(chknumval){
										response.push(responsed[i])
										if(criteria_arr3.indexOf(Projtuid) == -1){
											criteria_arr3.push(Projtuid);
											criteria_arr4.push(responsed[i]);
										}
									}
						 
							}else{
								response.push(responsed[i])
								if(criteria_arr3.indexOf(Projtuid) == -1){
									criteria_arr3.push(Projtuid);
									criteria_arr4.push(responsed[i]);
								}
							}
							  count_criteria++
						}
						
						
					 })		
					if(count_criteria == 0){
						/* responsed[i].Resourcename = 'No Allocation'
						datachkBLK.filter(function(act) {
								if(act.Title == Projtname){
									response.push(responsed[i])					   
								}
						});
						Rname.push(Projtname);
						response.push(responsed[i]); */
						if(criteria_arr1.indexOf(Projtuid) == -1 && nonProjectUID.indexOf(restuid) == -1 && responsed[i].Status != "Capacity"){
							criteria_arr1.push(Projtuid);
							criteria_arr2.push(responsed[i]);
						}
					} 
					  $.each(resNonNOnProjects, function (indx, NonGrid) {
							
							
							 if(NonGrid.Category_GUID == restuid){
								  if(Rname.indexOf(Projtuid) == -1){
									 Rname.push(Projtuid);
									 }
									 
									 var ResourceIsActive = false;
									/*if(L_R_Title.indexOf(responsed[i].Projectname) !=-1)
									 {
										 var l_Title=L_R_Title.indexOf(responsed[i].Projectname)
										 var l_Act=arr_ResourceIsActive[l_Title];
										 if(l_Act == 'False' || l_Act == 'false'){
												ResourceIsActive = true;
											}
									 } */
									resReName.filter(function(act) {
										if(act.Title == Projtname){									
											if(act.ResourceIsActive == 'False' || act.ResourceIsActive == 'false'){
												ResourceIsActive = true;
											}
										}
									});
									
									if(ResourceIsActive){
										var chknumval =false;
										var kc = Object.keys(responsed[i])
											kc.filter(function(val3){
												if(numvalchk.indexOf(val3) == -1){
													if(responsed[i][val3] != 0 && responsed[i][val3] != null){
														chknumval =true;
													}
												}
											});
											if(chknumval){
												response.push(responsed[i])
											}
								 
									}else{
										response.push(responsed[i])
									}
								  //response.push(responsed[i])
							 }				 
						 })	
					 
				  }
				 
			}
			var checkDuplicate = [];
			var criteria_arr4_len = criteria_arr4.length;
			for(c=0;c<criteria_arr4_len;c++){
				for(b=0;b<criteria_arr2.length;b++){
					if(criteria_arr4[c].Projectuid == criteria_arr2[b].Projectuid){
						criteria_arr2.splice(b,1)
					}
				}
			}
			var criteria_arr2_len = criteria_arr2.length;
			for(c=0;c<criteria_arr2_len;c++){
				
					checkDuplicate.push(criteria_arr2[c].Projectuid);
					criteria_arr2[c].Resourcename = 'No Allocation'
					criteria_arr2[c].Resourceuid = criteria_arr2[c].Projectuid
					var itemI = criteria_arr2[c];
					for(k in itemI){
						if(k.includes("_Status")){
							var r = k.replace('_Status','')
							criteria_arr2[c][r] = 0;
						}
					}
					var item = response.filter(function(x){
						return x.Projectuid == criteria_arr2[c].Projectuid;
					})
					if(item.length == 0){
						response.push(criteria_arr2[c]);
					}
				
			} 
			totalrnames = totalrnames.filter(function(val) {
				  return Rname.indexOf(val) == -1;
				});
		var alarray = ['AllocationUID', 'Description', 'Projectuid', 'Projectname','Role', 'Start', 'Finish', 'Status']
		var chkfill =[];
		
			totalrnames.filter(function(val1) {
				
					responsed.filter(function(val2) {
						if(chkfill.indexOf(val2.Projectuid) != -1){							
							return;							
						}
						if(val2.Projectuid == val1){
							datachkBLK.filter(function(act) {
								if(act.Title == val1){
									var kc = Object.keys(val2)
									kc.filter(function(val3){
										if(alarray.indexOf(val3) == -1){
											val2[val3] = 0
										}
										if('Resourcename' == val3){
											val2.Resourcename= "No Allocation"
										}
										if('Resourceuid' == val3){
											val2.Resourceuid= val2.Projectuid
										}
									});
									chkfill.push(val2.Projectuid);
									var item = response.filter(function(x){
										return x.Projectuid == val2.Projectuid;
									})
									if(item.length == 0){
										response.push(val2);
									}
									
								}
							});
						}
						
					});
			});
		}else{
			for(i=0;i<responsed.length;i++){
				if(responsed[i].Status != 'Capacity'){
					response.push(responsed[i])						 
				}
				  
			}
		}
		
		
		
		
		for(i=0;i<response.length;i++){		
			var item = newgetProjectsdatainfo.filter(function(x){
				return x.ProjectId === response[i].Resourceuid
			})
			if( item.length > 0){
				if(item[0]['Display1'] != null){
					
					if(customFieldName.search("Date") != -1 || ProjectDisplayFieldType == 'Date' || ProjectDisplayFieldType == 'date'){
						response[i].Resourcename= response[i].Resourcename+" ("+formatDate(item[0]['Display1'])+")"
						}else if(ProjectDisplayFieldType =="Number" || ProjectDisplayFieldType == "number"){
							
							var nch = item[0]['Display1'] != '' && item[0]['Display1'] != null && item[0]['Display1'] != 0 ? parseFloat(item[0]['Display1']).toFixed(2):0
							response[i].Resourcename=response[i].Resourcename+"  ("+nch+")"
						}
						else if(ProjectDisplayFieldType =="Currency" || ProjectDisplayFieldType == "currency"){
							
							var nch = item[0]['Display1'] != '' && item[0]['Display1'] != null && item[0]['Display1'] != 0 ? formatter.format(item[0]['Display1']):"$0"
							response[i].Resourcename=response[i].Resourcename+"  ("+nch+")"
						}
						else if(Object.is(parseInt(item[0]['Display1']),NaN) == false || Object.is(parseInt(item[0]['Display1']),NaN) == "false")
										{
							var val = item[0]['Display1'] != null && item[0]['Display1'] != '' ?parseFloat(item[0]['Display1']):0;
							var lengthN = countDecimals(val)
							response[i].Resourcename=response[i].Resourcename+"  ("+val+")"
						}						
						else{
							response[i].Resourcename= response[i].Resourcename+" ("+item[0]['Display1']+")"
						}						
					
				}
			}
			//newresponse.push(response[i]);
			
		}
	
		//response = newresponse
		 var Filteredrsponse = [];
		var FilterresId = [];
		var FilterresIdNoAllo = [];
		var FilterresIdNoAlloId = [];
		if(!filterApplied_forvisiblitu){
			for(i=0;i<response.length;i++){
				if(ResActiveAr.indexOf(response[i].Projectuid) != -1){
					Filteredrsponse.push(response[i]);
				}
				else{
					if(response[i].Resourcename == "No Allocation"){
						continue;
					}
					var item_rsp = response[i];
					for(k in item_rsp){
						if(k.includes("_Status")){
							if(item_rsp[k] != 0){
								if(FilterresId.indexOf(response[i].AllocationUID) == -1){
									FilterresId.push(response[i].AllocationUID);
									Filteredrsponse.push(response[i]);
								}
							}
						}
					}
				}
			} 
			response = Filteredrsponse;
		}		
		/*if(FilterresIdNoAllo.length > 0){
			
			//if(FilterresIdNoAllo.length == 1){
				for(a=0;a<FilterresIdNoAllo.length;a++){
					FilterresIdNoAllo[a].Projectname = '';
					FilterresIdNoAllo[a].Resourceuid = FilterresIdNoAllo[a].Projectuid;
					/* if(FilterresId.indexOf(FilterresIdNoAllo[a].AllocationUID) == -1){
						FilterresId.push(FilterresIdNoAllo[a].AllocationUID);
						Filteredrsponse.push(FilterresIdNoAllo[a]);
					} 
				}
			//}
			/* else{
				for(a=0;a<FilterresIdNoAllo.length - (FilterresIdNoAllo.length-1);a++){
					FilterresIdNoAllo[a].Projectname = '';
					FilterresIdNoAllo[a].Resourceuid = FilterresIdNoAllo[a].Projectuid;
					if(FilterresId.indexOf(FilterresIdNoAllo[a].AllocationUID) == -1){
						FilterresId.push(FilterresIdNoAllo[a].AllocationUID);
						Filteredrsponse.push(FilterresIdNoAllo[a]);
					}
				}
			} 
		} */
		
		
	
		totalarray = response;
		if(response.length == 0){
			$("#PMLoadgrid").empty();
			$("#PMLoadgrid").hide();
			 $.LoadingOverlay("hide");
			return;
		} 
		var allocation_status = []		
		
		for (var i = 0; i < response.length; i++) {			
			for (var j = 0; j < resReName.length; j++) {					    
			   if(response[i].Projectname == null || response[i].Projectname == ''){
					if(response[i].Resourceuid == resReName[j].ResourceId){
						response[i].Projectname =resReName[j].Title						
						response[i].Resourcename ='No Allocation'
						//response[i].ResourceMaxUnits =resReName[j].ResourceMaxUnits
						
					}
				}
					
				if(response[i].Projectname == resReName[j].Title){
					var item = resGetResources.filter(function(x){
						return x.ResourceId == response[i].Projectuid
					});
					if(item.length != 0){
						if(item[0]['Display1'] != undefined){
							if(RM_ResourceDisplayFieldType =="Number" || RM_ResourceDisplayFieldType == "number"){
										response[i].Role =item[0]['Display1'] != 0 && item[0]['Display1'] != '' && item[0]['Display1'] != null ? parseFloat(item[0]['Display1']).toFixed(2):'0';
							}
							else if(RM_ResourceDisplayFieldType =="Currency" || RM_ResourceDisplayFieldType == "currency"){
									response[i].Role =item[0]['Display1'] != '' && item[0]['Display1'] != 0 && item[0]['Display1'] != null ? formatter.format(item[0]['Display1']):'$0';
								}
							else if(Object.is(parseInt(item[0]['Display1']),NaN) == false || Object.is(parseInt(item[0]['Display1']),NaN) == "false")
								{
									var val = item[0]['Display1'] != null && item[0]['Display1'] != '' ?parseFloat(item[0]['Display1']):0;
									var lengthN = countDecimals(val)
									response[i].Role =val
								}
							else{
								response[i].Role =item[0]['Display1'];
							}
						}						
					}						
				}
			}
			for(k in response[i]){
				if(k.includes("_Status")){
					if(response[i][k] != 'Capacity' && response[i][k] != 'non'&& response[i][k] != '' && response[i][k] != '0'){
						if(allocation_status.indexOf(response[i][k]) == -1){
							//allocation_status.push(response[i][k]) //bug3837 2nd Issue
							allocation_status.push(response[i]['AllocationStatus'])
							
						}
					}
				}
			}
		}
		var allocation_statusF=[];
		if(!createdfilters){
		  var arr_AllocationStatus=[];
		  allocation_statusF=removeDuplicates(allocation_status);//bug3837 2nd Issue
	      for (j = 0; j < allocation_statusF.length; j++) {
	        if (allocation_statusF.length > 0) {
		      var ri = j;
		      var rt = allocation_statusF[j];
		      arr_AllocationStatus.push({"label":rt,"value":rt})
	        }
	      }
		  $("#_filterAllocation").multiselect('dataprovider', arr_AllocationStatus);
			/*var dataSource = new kendo.data.DataSource({
				  data: allocation_status
			});
			var multiselect = $("#_filterAllocation").data("kendoMultiSelect");
			multiselect.setDataSource(dataSource);
			
			multiselect.value([]);
			multiselect.refresh();*/
			//multiselect.value(dropval_new);
			var nmsp = $("#_filterAllocation").attr('data-placeholder');
			var cc =$("#_filterAllocation").find(":selected").length;
			var li_ar =  $("#_filterAllocation").prev().find('li');
			li_ar.text(nmsp+ " ("+cc+")");
			if($("#_filterAllocation").val() != null){						
				$("#_filterAllocation").prev().find('input').css('margin-top','-25px');
				li_ar.css('border-radius','0px');
				li_ar.css('border-color','white');
				li_ar.css('background-color','white');
			}else{
				$("#_filterAllocation").prev().find('input').css('margin-top','0px');
			}
			$('td[name="td_filter"]').show();
			$('#_filterAllocation_td').show();
			createdfilters = true;			
		}
		if(ActionFlag &&  !filterApplied){
			var multiar = $('#_filterAllocation').val();
			loadstatusFilterVal(response,multiar,selAll)
		}		
		
		Sectotalarray = response;
		for(i=0;i<Sectotalarray.length;i++){
			Object.assign(Sectotalarray[i], {originalProjectName: Sectotalarray[i].Projectname});
			if(Sectotalarray[i].Role == '' || Sectotalarray[i].Role == null || Sectotalarray[i].Role == 0){
				Sectotalarray[i].Projectname = Sectotalarray[i].Projectname+'|'+Sectotalarray[i].Projectuid
			}
			else{
				Sectotalarray[i].Projectname = Sectotalarray[i].Projectname+" ("+Sectotalarray[i].Role+")"+'|'+Sectotalarray[i].Projectuid
			}
			
		}
		originalDatasource = Sectotalarray;
		var data = []		
		var headers =["Resourcename",];
		var AValue = [ { field: "Resourcename", aggregate: "count" },{ field: "Capacity", aggregate: "average" }]
		GriddataRName = [] //getRName(data)
		if((sortingApply && (sortingType == 1 || sortingType == 2)) || sortingType == 0){
			var datasum=["#= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td>"]		
			if(RM_Chat &&  RM_Delete && RM_Commit && RM_Reject){
				datasum=["#= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td><td></td><td></td><td></td>"]		
			}
			else if(RM_Chat &&  RM_Delete && RM_Commit && !RM_Reject){
				datasum=["#= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td><td></td><td></td>"]		
			}
			else if(RM_Chat &&  RM_Delete && !RM_Commit && RM_Reject){
				datasum=["#= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td><td></td><td></td>"]		
			}
			else if(RM_Chat &&  !RM_Delete && RM_Commit && RM_Reject){
				datasum=["#= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td><td></td><td></td>"]		
			}
			else if(!RM_Chat &&  RM_Delete && RM_Commit && RM_Reject){
				datasum=["#= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td><td></td><td></td>"]		
			}
			
			
			
			else if(RM_Chat &&  RM_Delete && !RM_Commit && !RM_Reject){
				datasum=["#= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td><td></td>"]		
			}
			else if(RM_Chat &&  !RM_Delete && RM_Commit && !RM_Reject){
				datasum=["#= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td><td></td>"]		
			}
			else if(!RM_Chat &&  RM_Delete && RM_Commit && !RM_Reject){
				datasum=["#= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td><td></td>"]		
			}
			
			else if(RM_Chat &&  !RM_Delete && !RM_Commit && RM_Reject){
				datasum=["#= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td><td></td>"]		
			}
			else if(!RM_Chat &&  RM_Delete && !RM_Commit && RM_Reject){
				datasum=["#= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td><td></td>"]		
			}
			
			else if(!RM_Chat &&  !RM_Delete && RM_Commit && RM_Reject){
				datasum=["#= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td><td></td>"]		
			}
			else if (!RM_Chat &&  !RM_Delete && !RM_Reject && RM_Commit){
				datasum=["#= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td>"]		
			}
			else if (!RM_Chat &&  !RM_Delete && RM_Reject && !RM_Commit){
				datasum=["#= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td>"]		
			}
			else if (!RM_Chat &&  !RM_Delete && !RM_Reject && !RM_Commit){
				datasum=["#= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td>"]		
			}
			else if (!RM_Chat &&  RM_Delete && !RM_Reject && !RM_Commit){
				datasum=["#= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td>"]		
			}
			else if (RM_Chat ||  RM_Delete || RM_Commit || RM_Reject){
				datasum=["#= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td>"]		
			}
		
			if(a == '1'){
				datasum=["#= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span></td><td> </td>"]
			}
		}
		else{
			var datasum=["#=getRoleSort(data)# #= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span> <span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td>"]		
				if(RM_Chat &&  RM_Delete && RM_Commit && RM_Reject){
					datasum=["#=getRoleSort(data)# #= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span> <span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td><td></td><td></td><td></td>"]		
				}
				else if(RM_Chat &&  RM_Delete && RM_Commit && !RM_Reject){
					datasum=["#=getRoleSort(data)# #= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td><td></td><td></td>"]		
				}
				else if(RM_Chat &&  RM_Delete && !RM_Commit && RM_Reject){
					datasum=["#=getRoleSort(data)# #= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td><td></td><td></td>"]		
				}
				else if(RM_Chat &&  !RM_Delete && RM_Commit && RM_Reject){
					datasum=["#=getRoleSort(data)# #= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td><td></td><td></td>"]		
				}
				else if(!RM_Chat &&  RM_Delete && RM_Commit && RM_Reject){
					datasum=["#=getRoleSort(data)# #= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td><td></td><td></td>"]		
				}
				
				
				
				else if(RM_Chat &&  RM_Delete && !RM_Commit && !RM_Reject){
					datasum=["#=getRoleSort(data)# #= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td><td></td>"]		
				}
				else if(RM_Chat &&  !RM_Delete && RM_Commit && !RM_Reject){
					datasum=["#=getRoleSort(data)# #= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td><td></td>"]		
				}
				else if(!RM_Chat &&  RM_Delete && RM_Commit && !RM_Reject){
					datasum=["#=getRoleSort(data)# #= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td><td></td>"]		
				}
				
				else if(RM_Chat &&  !RM_Delete && !RM_Commit && RM_Reject){
					datasum=["#=getRoleSort(data)# #= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td><td></td>"]		
				}
				else if(!RM_Chat &&  RM_Delete && !RM_Commit && RM_Reject){
					datasum=["#=getRoleSort(data)# #= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td><td></td>"]		
				}
				
				else if(!RM_Chat &&  !RM_Delete && RM_Commit && RM_Reject){
					datasum=["#=getRoleSort(data)# #= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td><td></td>"]		
				}
				else if (!RM_Chat &&  !RM_Delete && !RM_Reject && RM_Commit){
					datasum=["#=getRoleSort(data)# #= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td>"]		
				}
				else if (!RM_Chat &&  !RM_Delete && RM_Reject && !RM_Commit){
					datasum=["#=getRoleSort(data)# #= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td>"]		
				}
				else if (!RM_Chat &&  !RM_Delete && !RM_Reject && !RM_Commit){
					datasum=["#=getRoleSort(data)# #= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td>"]		
				}
				else if (!RM_Chat &&  RM_Delete && !RM_Reject && !RM_Commit){
					datasum=["#=getRoleSort(data)# #= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td>"]		
				}
				else if (RM_Chat ||  RM_Delete || RM_Commit || RM_Reject){
					datasum=["#=getRoleSort(data)# #= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span><span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td>"]		
				}
			
				if(a == '1'){
					datasum=["#=getRoleSort(data)# #= value # #=getRole(data)# <span id='resId_grid' style = 'display:none'>#=getResID(data)#</span></td><td> </td>"]
				}
		}
		//datasum=["#= value # #=getRole(data)# <span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td><td></td><td></td><td></td>"]		
	//	datasum=["#= getRole(data) # #=getRole(data)# <span class='pointer' style='float: center;' onclick="+'AddNewItem('+"'#=getProjectuid(data)#'"+')'+" title='Add Projects'><span class='pointer k-icon k-i-plus'></span></span></td><td></td><td></td><td></td><td></td><td></td>"]		
	    var keys = keyp;//Object.keys(response[0]);
		    keysHeader =keyp;// Object.keys(response[0]);	
			 for (var i = 18; i < keys.length; i++) {					
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
				rpistrue = false;
				if(a == '1'){
					rpistrue = true;
					ret_arr = [{
						field: "Projectname",
						//editable: true,
						title: 'Resource',
						format: "",
						width: 300,
						editor: formTypeDropDownEditor,
						//hidden: true,
						groupHeaderTemplate:datasum,
						 filterable: {
							multi: true,
							search: true
							}
						},{
						field: "Resourcename",
						editable: true,
						title: 'Project',
						format: "",
						width: 300,
						//groupFooterTemplate: "<span style='float:right;'>Availability (Max Units:)</span>",
						
						 groupFooterTemplate:function(dataItem) {
									var value = 0
									
									if(RM_MaxUnites){
											/*for (var j = 0; j < getCapcity.length; j++) {	
												//if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
												if(dataItem.Resourcename["group"].items[0].Projectuid == getCapcity[j].Projectuid){
													value = getCapcity[j].TotalUnit != ''  && getCapcity[j].TotalUnit != null ?getCapcity[j].TotalUnit:0;
												}
											}
											return "<span style='float:right;'>Availability (Max: "+value+"%)</span>";*/
											
											var GResourceIsGeneric = null
										var GResourceIsActive = null
										for (var j = 0; j < AGGetProject.length; j++) {
								
												if(dataItem.Resourcename["group"].items[0].Projectuid== AGGetProject[j].ResourceId){
													GResourceIsGeneric = AGGetProject[j].ResourceIsGeneric;
													GResourceIsActive = AGGetProject[j].ResourceIsActive;
												}
												
											}
										if(GResourceIsGeneric == 'False' && GResourceIsActive == "True"){
											for (var j = 0; j < getCapcity.length; j++) {	
												//if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
												if(dataItem.Resourcename["group"].items[0].Projectuid == getCapcity[j].Projectuid){
													value = getCapcity[j].TotalUnit != ''  && getCapcity[j].TotalUnit != null ?getCapcity[j].TotalUnit:0;
												}
											}
											
											return "<span style='float:right;'>Availability (Max: "+value+"%)</span>";
											}
											else{
												return "<span style='float:right;'>Availability (Max: 0%)</span>";
											}
									}else{
										return "<span style='float:right;'>Availability </span>";
									}
									/*if(dataItem.ResourceMaxUnits != 0){  
									  value = dataItem.ResourceMaxUnits; .group.items[0].ResourceMaxUnits
									}*/
									
									/**/
									
								/*if(RM_MaxUnites){
									 for (var j = 0; j < resReName.length; j++) {											  												
												if(dataItem.Resourcename["group"].value == resReName[j].ResourceId){
													
													value =resReName[j].ResourceMaxUnits
												}
										 }
									return "<span style='float:right;'>Availability (Max: "+value+"%)</span>";
								}
								else{
									for (var j = 0; j < getCapcity.length; j++) {	
										if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
											for (var i = 0; i < resReName.length; i++) {											  												
														if(getCapcity[j].Projectuid == resReName[i].ResourceId){
															if(resReName[i].ResourceIsActive == "True" && resReName[i].ResourceIsGeneric == 'False'){
															   value =100;
															}
														}
												 }
												 
									     }
												/*if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
													
													value =getCapcity[j].TotalUnit
												}*/
									//	 }
									// return "<span style='float:right;'>Availability (Max:"+value+"%)</span>";
								/*	return "<span style='float:right;'>Availability </span>";
								}*/

								  
								},
						filterable: {
							multi: true,
							search: true
							}
						}];
				}else{
					
					 if(RM_Chat &&  RM_Delete && RM_Commit && RM_Reject){
						 
						  ret_arr = [{
						field: "Projectname",
						editable: true,
						title: 'Project Manager',
						format: "",
						width: 300,
						hidden: true,
						 groupHeaderTemplate:datasum,
						},{
						field: "Resourcename",
						editable: true,
						title: 'Project',
						format: "",
						width: 300,
						groupFooterTemplate:function(dataItem) {
									var value = 0
									if(RM_MaxUnites){
										var GResourceIsGeneric = null
										var GResourceIsActive = null
										for (var j = 0; j < AGGetProject.length; j++) {
								
												if(dataItem.Resourcename["group"].items[0].Projectuid== AGGetProject[j].ResourceId){
													GResourceIsGeneric = AGGetProject[j].ResourceIsGeneric;
													GResourceIsActive = AGGetProject[j].ResourceIsActive;
												}
												
											}
										if(GResourceIsGeneric == 'False' && GResourceIsActive == "True"){
											for (var j = 0; j < getCapcity.length; j++) {	
												//if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
												if(dataItem.Resourcename["group"].items[0].Projectuid == getCapcity[j].Projectuid){
													value = getCapcity[j].TotalUnit != ''  && getCapcity[j].TotalUnit != null ?getCapcity[j].TotalUnit:0;
												}
											}
											
											return "<span style='float:right;'>Availability (Max: "+value+"%)</span>";
											}
											else{
												return "<span style='float:right;'>Availability (Max: 0%)</span>";
											}
									}else{
										return "<span style='float:right;'>Availability </span>";
									}
									
									/*	if(RM_MaxUnites){
										 for (var j = 0; j < resReName.length; j++) {											  												
													if(dataItem.Resourcename["group"].value == resReName[j].ResourceId){
														
														value =resReName[j].ResourceMaxUnits
													}
											 }
										return "<span style='float:right;'>Availability (Max:"+value+"%)</span>";
										
									}
									else{
										for (var j = 0; j < getCapcity.length; j++) {	
													if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
															for (var i = 0; i < resReName.length; i++) {											  												
																if(getCapcity[j].Projectuid == resReName[i].ResourceId){
																	if(resReName[i].ResourceIsActive == "True" && resReName[i].ResourceIsGeneric == 'False'){
																	value =100;
																	}
																}
														 }
													}
												/*if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
													
													value =getCapcity[j].TotalUnit
												}*/
										/*	 }
										// return "<span style='float:right;'>Availability (Max: "+value+"%)</span>";
										return "<span style='float:right;'>Availability </span>";
									}*/
									/*if(dataItem.ResourceMaxUnits != 0){
									  value = dataItem.ResourceMaxUnits; .group.items[0].ResourceMaxUnits
									}*/
									
									
								/*	for (var j = 0; j < resReName.length; j++) {											  												
												if(dataItem.Resourcename["group"].value == resReName[j].ResourceId){
													
													value =resReName[j].ResourceMaxUnits
												}
										 }	
								if(RM_MaxUnites){
									return "<span style='float:right;'>Availability (Max: "+value+"%)</span>";
								}
								else{
									return "<span style='float:right;'>Availability </span>";
								}	*/
								//  return "<span style='float:right;'>Availability (Max :"+value.group.items[0].ResourceMaxUnits+"%)</span>";
								
						
						          //groupFooterTemplate: "<span style='float:right;'>Availability (Max Units:)</span>",
									
								},
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
										 value =  '<span id="'+dataItem.AllocationUID+'" class="pointer CIcolorFill" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										if(dataItem.CommentRead =='1'){
											 value =  '<span id="'+dataItem.AllocationUID+'" class="pointer CIcolor" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										}else if(dataItem.CommentRead =='2'){
										  value =  '<span id="'+dataItem.AllocationUID+'" class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
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
								
						},{
								field:'Commitment',
								title: '.',
								headerTemplate:'<label style=" color:#f3f3f4 ;" class=""></label>',
								filterable: false,
								sortable: false,
								editable: true,
								width: 30,
								template: function(dataItem) {
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value = '<span class="pointer" style="float: center;" onclick="CommittedItem()" title="Click to commit."><span class="k-icon k-i-track-changes-accept"></span></span>'
									}

								  return value;
								}
								//template:'<span class="pointer" style="float: center;" onclick="DeleteItem()" title="Click to delete"><span class="k-icon k-i-trash	k-i-delete"></span></span>'
								
						},{
								field:'Reject',
								title: '.',
								headerTemplate:'<label style=" color:#f3f3f4 ;" class=""></label>',
								filterable: false,
								sortable: false,
								editable: true,
								width: 30,
								template: function(dataItem) {
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value = '<span class="pointer" style="float: center;" onclick="rejectItem()" title="Click to reject"><span class="k-icon k-i-track-changes-reject"></span></span>'
									}

								  return value;
								}
								//template:'<span class="pointer" style="float: center;" onclick="DeleteItem()" title="Click to delete"><span class="k-icon k-i-trash	k-i-delete"></span></span>'
								
						},];
						 
					 }
					  else if(RM_Chat &&  RM_Delete && RM_Commit && !RM_Reject){
						   ret_arr = [/*{
						field: "Projectuid",
						editable: true,
						title: 'ProjectID',
						format: "",
						width: 300,
						hidden: true,
						 groupHeaderTemplate:datasum,
						},*/{
						field: "Projectname",
						editable: true,
						title: 'Project Manager',
						format: "",
						width: 300,
						hidden: true,
						 groupHeaderTemplate:datasum,
						},{
						field: "Resourcename",
						editable: true,
						title: 'Project',
						format: "",
						width: 300,
						groupFooterTemplate:function(dataItem) {
									var value = 0
									if(RM_MaxUnites){
											var GResourceIsGeneric = null
										var GResourceIsActive = null
										for (var j = 0; j < AGGetProject.length; j++) {
								
												if(dataItem.Resourcename["group"].items[0].Projectuid== AGGetProject[j].ResourceId){
													GResourceIsGeneric = AGGetProject[j].ResourceIsGeneric;
													GResourceIsActive = AGGetProject[j].ResourceIsActive;
												}
												
											}
										if(GResourceIsGeneric == 'False' && GResourceIsActive == "True"){
											for (var j = 0; j < getCapcity.length; j++) {	
												//if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
												if(dataItem.Resourcename["group"].items[0].Projectuid == getCapcity[j].Projectuid){
													value = getCapcity[j].TotalUnit != ''  && getCapcity[j].TotalUnit != null ?getCapcity[j].TotalUnit:0;
												}
											}
											
											return "<span style='float:right;'>Availability (Max: "+value+"%)</span>";
											}
											else{
												return "<span style='float:right;'>Availability (Max: 0%)</span>";
											}
									}else{
										return "<span style='float:right;'>Availability </span>";
									}
									/*if(RM_MaxUnites){
									 for (var j = 0; j < resReName.length; j++) {											  												
												if(dataItem.Resourcename["group"].value == resReName[j].ResourceId){
													
													value =resReName[j].ResourceMaxUnits
												}
										 }
									return "<span style='float:right;'>Availability (Max:"+value+"%)</span>";
								}
								else{
									for (var j = 0; j < getCapcity.length; j++) {
if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){										
												for (var i = 0; i < resReName.length; i++) {											  												
														if(getCapcity[j].Projectuid == resReName[i].ResourceId){
															if(resReName[i].ResourceIsActive == "True" && resReName[i].ResourceIsGeneric == 'False'){
															value =100;
															}
														}
												 }
}
												/*if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
													
													value =getCapcity[j].TotalUnit
												}*/
										/* }
									 //return "<span style='float:right;'>Availability (Max:"+value+"%)</span>";
									return "<span style='float:right;'>Availability </span>";
								}*/
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
									/*var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value =  '<span class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
									}*/
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
										 value =  '<span id="'+dataItem.AllocationUID+'" class="pointer CIcolorFill" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										if(dataItem.CommentRead =='1'){
											 value =  '<span id="'+dataItem.AllocationUID+'" class="pointer CIcolor" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										} else if(dataItem.CommentRead =='2'){
										  value =  '<span id="'+dataItem.AllocationUID+'" class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
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
								
						},{
								field:'Commitment',
								title: '.',
								headerTemplate:'<label style=" color:#f3f3f4 ;" class=""></label>',
								filterable: false,
								sortable: false,
								editable: true,
								width: 30,
								template: function(dataItem) {
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value = '<span class="pointer" style="float: center;" onclick="CommittedItem()" title="Click to commit."><span class="k-icon k-i-track-changes-accept"></span></span>'
									}

								  return value;
								}
								//template:'<span class="pointer" style="float: center;" onclick="DeleteItem()" title="Click to delete"><span class="k-icon k-i-trash	k-i-delete"></span></span>'
								
						},];
						 
					 }
					  else if(RM_Chat &&  RM_Delete && !RM_Commit && RM_Reject){
					   ret_arr = [{
						field: "Projectname",
						editable: true,
						title: 'Project Manager',
						format: "",
						width: 300,
						hidden: true,
						 groupHeaderTemplate:datasum,
						},{
						field: "Resourcename",
						editable: true,
						title: 'Project',
						format: "",
						width: 300,
						groupFooterTemplate:function(dataItem) {
									var value = 0
									if(RM_MaxUnites){
											var GResourceIsGeneric = null
										var GResourceIsActive = null
										for (var j = 0; j < AGGetProject.length; j++) {
								
												if(dataItem.Resourcename["group"].items[0].Projectuid== AGGetProject[j].ResourceId){
													GResourceIsGeneric = AGGetProject[j].ResourceIsGeneric;
													GResourceIsActive = AGGetProject[j].ResourceIsActive;
												}
												
											}
										if(GResourceIsGeneric == 'False' && GResourceIsActive == "True"){
											for (var j = 0; j < getCapcity.length; j++) {	
												//if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
												if(dataItem.Resourcename["group"].items[0].Projectuid == getCapcity[j].Projectuid){
													value = getCapcity[j].TotalUnit != ''  && getCapcity[j].TotalUnit != null ?getCapcity[j].TotalUnit:0;
												}
											}
											
											return "<span style='float:right;'>Availability (Max: "+value+"%)</span>";
											}
											else{
												return "<span style='float:right;'>Availability (Max: 0%)</span>";
											}
									}else{
										return "<span style='float:right;'>Availability </span>";
									}
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
								/*	var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value =  '<span class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
									}*/
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
										 value =  '<span id="'+dataItem.AllocationUID+'" class="pointer CIcolorFill" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										if(dataItem.CommentRead =='1'){
											 value =  '<span id="'+dataItem.AllocationUID+'" class="pointer CIcolor" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										} else if(dataItem.CommentRead =='2'){
										  value =  '<span id="'+dataItem.AllocationUID+'" class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
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
								
						} ,{
								field:'Reject',
								title: '.',
								headerTemplate:'<label style=" color:#f3f3f4 ;" class=""></label>',
								filterable: false,
								sortable: false,
								editable: true,
								width: 30,
								template: function(dataItem) {
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value = '<span class="pointer" style="float: center;" onclick="rejectItem()" title="Click to reject"><span class="k-icon k-i-track-changes-reject"></span></span>'
									}

								  return value;
								}
								//template:'<span class="pointer" style="float: center;" onclick="DeleteItem()" title="Click to delete"><span class="k-icon k-i-trash	k-i-delete"></span></span>'
								
						}, ];
						 
					 }
					  else if(RM_Chat &&  !RM_Delete && RM_Commit && RM_Reject){
						   ret_arr = [{
						field: "Projectname",
						editable: true,
						title: 'Project Manager',
						format: "",
						width: 300,
						hidden: true,
						 groupHeaderTemplate:datasum,
						},{
						field: "Resourcename",
						editable: true,
						title: 'Project',
						format: "",
						width: 300,
						groupFooterTemplate:function(dataItem) {
									var value = 0
									if(RM_MaxUnites){
										var GResourceIsGeneric = null
										var GResourceIsActive = null
										for (var j = 0; j < AGGetProject.length; j++) {
								
												if(dataItem.Resourcename["group"].items[0].Projectuid== AGGetProject[j].ResourceId){
													GResourceIsGeneric = AGGetProject[j].ResourceIsGeneric;
													GResourceIsActive = AGGetProject[j].ResourceIsActive;
												}
												
											}
										if(GResourceIsGeneric == 'False' && GResourceIsActive == "True"){
											for (var j = 0; j < getCapcity.length; j++) {	
												//if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
												if(dataItem.Resourcename["group"].items[0].Projectuid == getCapcity[j].Projectuid){
													value = getCapcity[j].TotalUnit != ''  && getCapcity[j].TotalUnit != null ?getCapcity[j].TotalUnit:0;
												}
											}
											
											return "<span style='float:right;'>Availability (Max: "+value+"%)</span>";
											}
											else{
												return "<span style='float:right;'>Availability (Max: 0%)</span>";
											}
										/*	for (var j = 0; j < getCapcity.length; j++) {	
												//if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
												if(dataItem.Resourcename["group"].items[0].Projectuid == getCapcity[j].Projectuid){
													value = getCapcity[j].TotalUnit != ''  && getCapcity[j].TotalUnit != null ?getCapcity[j].TotalUnit:0;
												}
											}
											return "<span style='float:right;'>Availability (Max: "+value+"%)</span>";*/
									}else{
										return "<span style='float:right;'>Availability </span>";
									}
									/*if(RM_MaxUnites){
									 for (var j = 0; j < resReName.length; j++) {											  												
												if(dataItem.Resourcename["group"].value == resReName[j].ResourceId){
													
													value =resReName[j].ResourceMaxUnits
												}
										 }
									return "<span style='float:right;'>Availability (Max:"+value+"%)</span>";
								}
								else{
									for (var j = 0; j < getCapcity.length; j++) {
if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){										
												for (var i = 0; i < resReName.length; i++) {											  												
														if(getCapcity[j].Projectuid == resReName[i].ResourceId){
															if(resReName[i].ResourceIsActive == "True" && resReName[i].ResourceIsGeneric == 'False'){
															value =100;
															}
														}
												 }
}
												/*if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
													
													value =getCapcity[j].TotalUnit
												}*/
									/*	 }
									// return "<span style='float:right;'>Availability (Max:"+value+"%)</span>";
									return "<span style='float:right;'>Availability </span>";
								}*/
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
									/*var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value =  '<span class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
									}*/
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
										 value =  '<span id="'+dataItem.AllocationUID+'" class="pointer CIcolorFill" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										if(dataItem.CommentRead =='1'){
											 value =  '<span id="'+dataItem.AllocationUID+'" class="pointer CIcolor" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										} else if(dataItem.CommentRead =='2'){
										  value =  '<span id="'+dataItem.AllocationUID+'" class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										} 
									}

								  return value;
								}	
								
								//template:'<span class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
								
						},{
								field:'Commitment',
								title: '.',
								headerTemplate:'<label style=" color:#f3f3f4 ;" class=""></label>',
								filterable: false,
								sortable: false,
								editable: true,
								width: 30,
								template: function(dataItem) {
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value = '<span class="pointer" style="float: center;" onclick="CommittedItem()" title="Click to commit."><span class="k-icon k-i-track-changes-accept"></span></span>'
									}

								  return value;
								}
								//template:'<span class="pointer" style="float: center;" onclick="DeleteItem()" title="Click to delete"><span class="k-icon k-i-trash	k-i-delete"></span></span>'
								
						},{
								field:'Reject',
								title: '.',
								headerTemplate:'<label style=" color:#f3f3f4 ;" class=""></label>',
								filterable: false,
								sortable: false,
								editable: true,
								width: 30,
								template: function(dataItem) {
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value = '<span class="pointer" style="float: center;" onclick="rejectItem()" title="Click to reject"><span class="k-icon k-i-track-changes-reject"></span></span>'
									}

								  return value;
								}
								//template:'<span class="pointer" style="float: center;" onclick="DeleteItem()" title="Click to delete"><span class="k-icon k-i-trash	k-i-delete"></span></span>'
								
						},];
						 
					 }
				     else if(!RM_Chat &&  RM_Delete && RM_Commit && RM_Reject){
						  ret_arr = [{
						field: "Projectname",
						editable: true,
						title: 'Project Manager',
						format: "",
						width: 300,
						hidden: true,
						 groupHeaderTemplate:datasum,
						},{
						field: "Resourcename",
						editable: true,
						title: 'Project',
						format: "",
						width: 300,
						groupFooterTemplate:function(dataItem) {
									var value = 0
									if(RM_MaxUnites){
											var GResourceIsGeneric = null
										var GResourceIsActive = null
										for (var j = 0; j < AGGetProject.length; j++) {
								
												if(dataItem.Resourcename["group"].items[0].Projectuid== AGGetProject[j].ResourceId){
													GResourceIsGeneric = AGGetProject[j].ResourceIsGeneric;
													GResourceIsActive = AGGetProject[j].ResourceIsActive;
												}
												
											}
										if(GResourceIsGeneric == 'False' && GResourceIsActive == "True"){
											for (var j = 0; j < getCapcity.length; j++) {	
												//if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
												if(dataItem.Resourcename["group"].items[0].Projectuid == getCapcity[j].Projectuid){
													value = getCapcity[j].TotalUnit != ''  && getCapcity[j].TotalUnit != null ?getCapcity[j].TotalUnit:0;
												}
											}
											
											return "<span style='float:right;'>Availability (Max: "+value+"%)</span>";
											}
											else{
												return "<span style='float:right;'>Availability (Max: 0%)</span>";
											}
									}else{
										return "<span style='float:right;'>Availability </span>";
									}
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
								
						},{
								field:'Commitment',
								title: '.',
								headerTemplate:'<label style=" color:#f3f3f4 ;" class=""></label>',
								filterable: false,
								sortable: false,
								editable: true,
								width: 30,
								template: function(dataItem) {
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value = '<span class="pointer" style="float: center;" onclick="CommittedItem()" title="Click to commit."><span class="k-icon k-i-track-changes-accept"></span></span>'
									}

								  return value;
								}
								//template:'<span class="pointer" style="float: center;" onclick="DeleteItem()" title="Click to delete"><span class="k-icon k-i-trash	k-i-delete"></span></span>'
								
						},{
								field:'Reject',
								title: '.',
								headerTemplate:'<label style=" color:#f3f3f4 ;" class=""></label>',
								filterable: false,
								sortable: false,
								editable: true,
								width: 30,
								template: function(dataItem) {
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value = '<span class="pointer" style="float: center;" onclick="rejectItem()" title="Click to reject"><span class="k-icon k-i-track-changes-reject"></span></span>'
									}

								  return value;
								}
								//template:'<span class="pointer" style="float: center;" onclick="DeleteItem()" title="Click to delete"><span class="k-icon k-i-trash	k-i-delete"></span></span>'
								
						},];
						 
					 }
					 
					  else if(RM_Chat &&  RM_Delete && !RM_Commit && !RM_Reject){
						   ret_arr = [{
						field: "Projectname",
						editable: true,
						title: 'Project Manager',
						format: "",
						width: 300,
						hidden: true,
						 groupHeaderTemplate:datasum,
						},{
						field: "Resourcename",
						editable: true,
						title: 'Project',
						format: "",
						width: 300,
						groupFooterTemplate:function(dataItem) {
									var value = 0
									if(RM_MaxUnites){
											var GResourceIsGeneric = null
										var GResourceIsActive = null
										for (var j = 0; j < AGGetProject.length; j++) {
								
												if(dataItem.Resourcename["group"].items[0].Projectuid== AGGetProject[j].ResourceId){
													GResourceIsGeneric = AGGetProject[j].ResourceIsGeneric;
													GResourceIsActive = AGGetProject[j].ResourceIsActive;
												}
												
											}
										if(GResourceIsGeneric == 'False' && GResourceIsActive == "True"){
											for (var j = 0; j < getCapcity.length; j++) {	
												//if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
												if(dataItem.Resourcename["group"].items[0].Projectuid == getCapcity[j].Projectuid){
													value = getCapcity[j].TotalUnit != ''  && getCapcity[j].TotalUnit != null ?getCapcity[j].TotalUnit:0;
												}
											}
											
											return "<span style='float:right;'>Availability (Max: "+value+"%)</span>";
											}
											else{
												return "<span style='float:right;'>Availability (Max: 0%)</span>";
											}
									}else{
										return "<span style='float:right;'>Availability </span>";
									}
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
									/*var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value =  '<span class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
									}*/
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
										 value =  '<span id="'+dataItem.AllocationUID+'" class="pointer CIcolorFill" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										if(dataItem.CommentRead =='1'){
											 value =  '<span id="'+dataItem.AllocationUID+'" class="pointer CIcolor" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										} else if(dataItem.CommentRead =='2'){
										  value =  '<span id="'+dataItem.AllocationUID+'" class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
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
						 
					 }
					  else if(RM_Chat &&  !RM_Delete && RM_Commit && !RM_Reject){
						   ret_arr = [{
						field: "Projectname",
						editable: true,
						title: 'Project Manager',
						format: "",
						width: 300,
						hidden: true,
						 groupHeaderTemplate:datasum,
						},{
						field: "Resourcename",
						editable: true,
						title: 'Project',
						format: "",
						width: 300,
						groupFooterTemplate:function(dataItem) {
									var value = 0
									if(RM_MaxUnites){
											var GResourceIsGeneric = null
										var GResourceIsActive = null
										for (var j = 0; j < AGGetProject.length; j++) {
								
												if(dataItem.Resourcename["group"].items[0].Projectuid== AGGetProject[j].ResourceId){
													GResourceIsGeneric = AGGetProject[j].ResourceIsGeneric;
													GResourceIsActive = AGGetProject[j].ResourceIsActive;
												}
												
											}
										if(GResourceIsGeneric == 'False' && GResourceIsActive == "True"){
											for (var j = 0; j < getCapcity.length; j++) {	
												//if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
												if(dataItem.Resourcename["group"].items[0].Projectuid == getCapcity[j].Projectuid){
													value = getCapcity[j].TotalUnit != ''  && getCapcity[j].TotalUnit != null ?getCapcity[j].TotalUnit:0;
												}
											}
											
											return "<span style='float:right;'>Availability (Max: "+value+"%)</span>";
											}
											else{
												return "<span style='float:right;'>Availability (Max: 0%)</span>";
											}
									}else{
										return "<span style='float:right;'>Availability </span>";
									}
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
									/*var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value =  '<span class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
									}*/
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
										 value =  '<span id="'+dataItem.AllocationUID+'" class="pointer CIcolorFill" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										if(dataItem.CommentRead =='1'){
											 value =  '<span id="'+dataItem.AllocationUID+'" class="pointer CIcolor" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										}else if(dataItem.CommentRead =='2'){
										  value =  '<span id="'+dataItem.AllocationUID+'" class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										}
									}

								  return value;
								}	
								
								//template:'<span class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
								
						},{
								field:'Commitment',
								title: '.',
								headerTemplate:'<label style=" color:#f3f3f4 ;" class=""></label>',
								filterable: false,
								sortable: false,
								editable: true,
								width: 30,
								template: function(dataItem) {
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value = '<span class="pointer" style="float: center;" onclick="CommittedItem()" title="Click to commit."><span class="k-icon k-i-track-changes-accept"></span></span>'
									}

								  return value;
								}
								//template:'<span class="pointer" style="float: center;" onclick="DeleteItem()" title="Click to delete"><span class="k-icon k-i-trash	k-i-delete"></span></span>'
								
						},];
						 
					 }
					  else if(!RM_Chat &&  RM_Delete && RM_Commit && !RM_Reject){
						   ret_arr = [{
						field: "Projectname",
						editable: true,
						title: 'Project Manager',
						format: "",
						width: 300,
						hidden: true,
						 groupHeaderTemplate:datasum,
						},{
						field: "Resourcename",
						editable: true,
						title: 'Project',
						format: "",
						width: 300,
						groupFooterTemplate:function(dataItem) {
									var value = 0
									if(RM_MaxUnites){
											var GResourceIsGeneric = null
										var GResourceIsActive = null
										for (var j = 0; j < AGGetProject.length; j++) {
								
												if(dataItem.Resourcename["group"].items[0].Projectuid== AGGetProject[j].ResourceId){
													GResourceIsGeneric = AGGetProject[j].ResourceIsGeneric;
													GResourceIsActive = AGGetProject[j].ResourceIsActive;
												}
												
											}
										if(GResourceIsGeneric == 'False' && GResourceIsActive == "True"){
											for (var j = 0; j < getCapcity.length; j++) {	
												//if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
												if(dataItem.Resourcename["group"].items[0].Projectuid == getCapcity[j].Projectuid){
													value = getCapcity[j].TotalUnit != ''  && getCapcity[j].TotalUnit != null ?getCapcity[j].TotalUnit:0;
												}
											}
											
											return "<span style='float:right;'>Availability (Max: "+value+"%)</span>";
											}
											else{
												return "<span style='float:right;'>Availability (Max: 0%)</span>";
											}
									}else{
										return "<span style='float:right;'>Availability </span>";
									}
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
								
						},{
								field:'Commitment',
								title: '.',
								headerTemplate:'<label style=" color:#f3f3f4 ;" class=""></label>',
								filterable: false,
								sortable: false,
								editable: true,
								width: 30,
								template: function(dataItem) {
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value = '<span class="pointer" style="float: center;" onclick="CommittedItem()" title="Click to commit."><span class="k-icon k-i-track-changes-accept"></span></span>'
									}

								  return value;
								}
								//template:'<span class="pointer" style="float: center;" onclick="DeleteItem()" title="Click to delete"><span class="k-icon k-i-trash	k-i-delete"></span></span>'
								
						},];
						 
					 }
					 else if(RM_Chat &&  RM_Delete && !RM_Reject &&  !RM_Commit ){
						 ret_arr = [{
						field: "Projectname",
						editable: true,
						title: 'Project Manager',
						format: "",
						width: 300,
						hidden: true,
						 groupHeaderTemplate:datasum,
						},{
						field: "Resourcename",
						editable: true,
						title: 'Project',
						format: "",
						width: 300,
						groupFooterTemplate:function(dataItem) {
									var value = 0
									if(RM_MaxUnites){
											var GResourceIsGeneric = null
										var GResourceIsActive = null
										for (var j = 0; j < AGGetProject.length; j++) {
								
												if(dataItem.Resourcename["group"].items[0].Projectuid== AGGetProject[j].ResourceId){
													GResourceIsGeneric = AGGetProject[j].ResourceIsGeneric;
													GResourceIsActive = AGGetProject[j].ResourceIsActive;
												}
												
											}
										if(GResourceIsGeneric == 'False' && GResourceIsActive == "True"){
											for (var j = 0; j < getCapcity.length; j++) {	
												//if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
												if(dataItem.Resourcename["group"].items[0].Projectuid == getCapcity[j].Projectuid){
													value = getCapcity[j].TotalUnit != ''  && getCapcity[j].TotalUnit != null ?getCapcity[j].TotalUnit:0;
												}
											}
											
											return "<span style='float:right;'>Availability (Max: "+value+"%)</span>";
											}
											else{
												return "<span style='float:right;'>Availability (Max: 0%)</span>";
											}
									}else{
										return "<span style='float:right;'>Availability </span>";
									}
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
									/*var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value =  '<span class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
									}*/
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
										 value =  '<span id="'+dataItem.AllocationUID+'" class="pointer CIcolorFill" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										if(dataItem.CommentRead =='1'){
											 value =  '<span id="'+dataItem.AllocationUID+'" class="pointer CIcolor" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										} else if(dataItem.CommentRead =='2'){
										  value =  '<span id="'+dataItem.AllocationUID+'" class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
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
								
						},{
								field:'Commitment',
								title: '.',
								headerTemplate:'<label style=" color:#f3f3f4 ;" class=""></label>',
								filterable: false,
								sortable: false,
								editable: true,
								width: 30,
								template: function(dataItem) {
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value = '<span class="pointer" style="float: center;" onclick="CommittedItem()" title="Click to commit."><span class="k-icon k-i-track-changes-accept"></span></span>'
									}

								  return value;
								}
								//template:'<span class="pointer" style="float: center;" onclick="DeleteItem()" title="Click to delete"><span class="k-icon k-i-trash	k-i-delete"></span></span>'
								
						},{
								field:'Reject',
								title: '.',
								headerTemplate:'<label style=" color:#f3f3f4 ;" class=""></label>',
								filterable: false,
								sortable: false,
								editable: true,
								width: 30,
								template: function(dataItem) {
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value = '<span class="pointer" style="float: center;" onclick="rejectItem()" title="Click to reject"><span class="k-icon k-i-track-changes-reject"></span></span>'
									}

								  return value;
								}
								//template:'<span class="pointer" style="float: center;" onclick="DeleteItem()" title="Click to delete"><span class="k-icon k-i-trash	k-i-delete"></span></span>'
								
						},];
					 }
					  else if(RM_Commit && RM_Reject && !RM_Chat &&  !RM_Delete ){
						  ret_arr = [{
						field: "Projectname",
						editable: true,
						title: 'Project Manager',
						format: "",
						width: 300,
						hidden: true,
						 groupHeaderTemplate:datasum,
						},{
						field: "Resourcename",
						editable: true,
						title: 'Project',
						format: "",
						width: 300,
						groupFooterTemplate:function(dataItem) {
									var value = 0
									if(RM_MaxUnites){
											var GResourceIsGeneric = null
										var GResourceIsActive = null
										for (var j = 0; j < AGGetProject.length; j++) {
								
												if(dataItem.Resourcename["group"].items[0].Projectuid== AGGetProject[j].ResourceId){
													GResourceIsGeneric = AGGetProject[j].ResourceIsGeneric;
													GResourceIsActive = AGGetProject[j].ResourceIsActive;
												}
												
											}
										if(GResourceIsGeneric == 'False' && GResourceIsActive == "True"){
											for (var j = 0; j < getCapcity.length; j++) {	
												//if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
												if(dataItem.Resourcename["group"].items[0].Projectuid == getCapcity[j].Projectuid){
													value = getCapcity[j].TotalUnit != ''  && getCapcity[j].TotalUnit != null ?getCapcity[j].TotalUnit:0;
												}
											}
											
											return "<span style='float:right;'>Availability (Max: "+value+"%)</span>";
											}
											else{
												return "<span style='float:right;'>Availability (Max: 0%)</span>";
											}
									}else{
										return "<span style='float:right;'>Availability </span>";
									}
								},
						
						//groupFooterTemplate: "<span style='float:right;'>Availability (Max Units:)</span>",
						filterable: {
							multi: true,
							search: true
							}
						},{
								field:'Commitment',
								title: '.',
								headerTemplate:'<label style=" color:#f3f3f4 ;" class=""></label>',
								filterable: false,
								sortable: false,
								editable: true,
								width: 30,
								template: function(dataItem) {
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value = '<span class="pointer" style="float: center;" onclick="CommittedItem()" title="Click to commit."><span class="k-icon k-i-track-changes-accept"></span></span>'
									}

								  return value;
								}
								//template:'<span class="pointer" style="float: center;" onclick="DeleteItem()" title="Click to delete"><span class="k-icon k-i-trash	k-i-delete"></span></span>'
								
						},{
								field:'Reject',
								title: '.',
								headerTemplate:'<label style=" color:#f3f3f4 ;" class=""></label>',
								filterable: false,
								sortable: false,
								editable: true,
								width: 30,
								template: function(dataItem) {
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value = '<span class="pointer" style="float: center;" onclick="rejectItem()" title="Click to reject"><span class="k-icon k-i-track-changes-reject"></span></span>'
									}

								  return value;
								}
								//template:'<span class="pointer" style="float: center;" onclick="DeleteItem()" title="Click to delete"><span class="k-icon k-i-trash	k-i-delete"></span></span>'
								
						},];
						 
					 }
					 else if(RM_Chat && !RM_Commit && !RM_Delete && !RM_Reject){
						 ret_arr = [{
						field: "Projectname",
						editable: true,
						title: 'Project Manager',
						format: "",
						width: 300,
						hidden: true,
						 groupHeaderTemplate:datasum,
						},{
						field: "Resourcename",
						editable: true,
						title: 'Project',
						format: "",
						width: 300,
						groupFooterTemplate:function(dataItem) {
									var value = 0
									
									if(RM_MaxUnites){
											var GResourceIsGeneric = null
										var GResourceIsActive = null
										for (var j = 0; j < AGGetProject.length; j++) {
								
												if(dataItem.Resourcename["group"].items[0].Projectuid== AGGetProject[j].ResourceId){
													GResourceIsGeneric = AGGetProject[j].ResourceIsGeneric;
													GResourceIsActive = AGGetProject[j].ResourceIsActive;
												}
												
											}
										if(GResourceIsGeneric == 'False' && GResourceIsActive == "True"){
											for (var j = 0; j < getCapcity.length; j++) {	
												//if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
												if(dataItem.Resourcename["group"].items[0].Projectuid == getCapcity[j].Projectuid){
													value = getCapcity[j].TotalUnit != ''  && getCapcity[j].TotalUnit != null ?getCapcity[j].TotalUnit:0;
												}
											}
											
											return "<span style='float:right;'>Availability (Max: "+value+"%)</span>";
											}
											else{
												return "<span style='float:right;'>Availability (Max: 0%)</span>";
											}
									}else{
										return "<span style='float:right;'>Availability </span>";
									}
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
								/*	var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value =  '<span class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
									}*/
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
										 value =  '<span id="'+dataItem.AllocationUID+'" class="pointer CIcolorFill" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										if(dataItem.CommentRead =='1'){
											 value =  '<span id="'+dataItem.AllocationUID+'" class="pointer CIcolor" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										} else if(dataItem.CommentRead =='2'){
										  value =  '<span id="'+dataItem.AllocationUID+'" class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										} 
									}

								  return value;
								}	
								
								//template:'<span class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
								
						},];
					 }
					 else if(RM_Chat && RM_Commit && !RM_Delete && !RM_Reject){
						 ret_arr = [{
						field: "Projectname",
						editable: true,
						title: 'Project Manager',
						format: "",
						width: 300,
						hidden: true,
						 groupHeaderTemplate:datasum,
						},{
						field: "Resourcename",
						editable: true,
						title: 'Project',
						format: "",
						width: 300,
						groupFooterTemplate:function(dataItem) {
									var value = 0
									if(RM_MaxUnites){
											var GResourceIsGeneric = null
										var GResourceIsActive = null
										for (var j = 0; j < AGGetProject.length; j++) {
								
												if(dataItem.Resourcename["group"].items[0].Projectuid== AGGetProject[j].ResourceId){
													GResourceIsGeneric = AGGetProject[j].ResourceIsGeneric;
													GResourceIsActive = AGGetProject[j].ResourceIsActive;
												}
												
											}
										if(GResourceIsGeneric == 'False' && GResourceIsActive == "True"){
											for (var j = 0; j < getCapcity.length; j++) {	
												//if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
												if(dataItem.Resourcename["group"].items[0].Projectuid == getCapcity[j].Projectuid){
													value = getCapcity[j].TotalUnit != ''  && getCapcity[j].TotalUnit != null ?getCapcity[j].TotalUnit:0;
												}
											}
											
											return "<span style='float:right;'>Availability (Max: "+value+"%)</span>";
											}
											else{
												return "<span style='float:right;'>Availability (Max: 0%)</span>";
											}
									}else{
										return "<span style='float:right;'>Availability </span>";
									}
								
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
									/*var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value =  '<span class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
									}*/
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
										 value =  '<span id="'+dataItem.AllocationUID+'" class="pointer CIcolorFill" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										if(dataItem.CommentRead =='1'){
											 value =  '<span id="'+dataItem.AllocationUID+'" class="pointer CIcolor" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										} else if(dataItem.CommentRead =='2'){
											 value =  '<span id="'+dataItem.AllocationUID+'" class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										}
									}

								  return value;
								}	
								
								//template:'<span class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
								
						},{
								field:'Commitment',
								title: '.',
								headerTemplate:'<label style=" color:#f3f3f4 ;" class=""></label>',
								filterable: false,
								sortable: false,
								editable: true,
								width: 30,
								template: function(dataItem) {
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value = '<span class="pointer" style="float: center;" onclick="CommittedItem()" title="Click to commit."><span class="k-icon k-i-track-changes-accept"></span></span>'
									}

								  return value;
								}
								//template:'<span class="pointer" style="float: center;" onclick="DeleteItem()" title="Click to delete"><span class="k-icon k-i-trash	k-i-delete"></span></span>'
								
						}];
					 }
					 else if(RM_Chat && RM_Reject && !RM_Delete && !RM_Commit){
						 ret_arr = [{
						field: "Projectname",
						editable: true,
						title: 'Project Manager',
						format: "",
						width: 300,
						hidden: true,
						 groupHeaderTemplate:datasum,
						},{
						field: "Resourcename",
						editable: true,
						title: 'Project',
						format: "",
						width: 300,
						groupFooterTemplate:function(dataItem) {
									var value = 0
									
									if(RM_MaxUnites){
											var GResourceIsGeneric = null
										var GResourceIsActive = null
										for (var j = 0; j < AGGetProject.length; j++) {
								
												if(dataItem.Resourcename["group"].items[0].Projectuid== AGGetProject[j].ResourceId){
													GResourceIsGeneric = AGGetProject[j].ResourceIsGeneric;
													GResourceIsActive = AGGetProject[j].ResourceIsActive;
												}
												
											}
										if(GResourceIsGeneric == 'False' && GResourceIsActive == "True"){
											for (var j = 0; j < getCapcity.length; j++) {	
												//if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
												if(dataItem.Resourcename["group"].items[0].Projectuid == getCapcity[j].Projectuid){
													value = getCapcity[j].TotalUnit != ''  && getCapcity[j].TotalUnit != null ?getCapcity[j].TotalUnit:0;
												}
											}
											
											return "<span style='float:right;'>Availability (Max: "+value+"%)</span>";
											}
											else{
												return "<span style='float:right;'>Availability (Max: 0%)</span>";
											}
									}else{
										return "<span style='float:right;'>Availability </span>";
									}
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
									/*var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value =  '<span class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
									}*/
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
										 value =  '<span id="'+dataItem.AllocationUID+'" class="pointer CIcolorFill" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										if(dataItem.CommentRead =='1'){
											 value =  '<span id="'+dataItem.AllocationUID+'" class="pointer CIcolor" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										} else if(dataItem.CommentRead =='2'){
											 value =  '<span id="'+dataItem.AllocationUID+'" class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
										}
									}

								  return value;
								}	
								
								//template:'<span class="pointer" style="float: center;" onclick="ChatItem()" title="Click to View chat"><span class="k-icon k-i-comment"></span></span>'
								
						},{
								field:'Reject',
								title: '.',
								headerTemplate:'<label style=" color:#f3f3f4 ;" class=""></label>',
								filterable: false,
								sortable: false,
								editable: true,
								width: 30,
								template: function(dataItem) {
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value = '<span class="pointer" style="float: center;" onclick="rejectItem()" title="Click to reject"><span class="k-icon k-i-track-changes-reject"></span></span>'
									}

								  return value;
								}
								//template:'<span class="pointer" style="float: center;" onclick="DeleteItem()" title="Click to delete"><span class="k-icon k-i-trash	k-i-delete"></span></span>'
								
						},];
					 }
					 else if(RM_Delete && !RM_Commit && !RM_Delete && !RM_Reject){
						 ret_arr = [{
						field: "Projectname",
						editable: true,
						title: 'Project Manager',
						format: "",
						width: 300,
						hidden: true,
						 groupHeaderTemplate:datasum,
						},{
						field: "Resourcename",
						editable: true,
						title: 'Project',
						format: "",
						width: 300,
						groupFooterTemplate:function(dataItem) {
								
								var value = 0
								if(RM_MaxUnites){
											var GResourceIsGeneric = null
										var GResourceIsActive = null
										for (var j = 0; j < AGGetProject.length; j++) {
								
												if(dataItem.Resourcename["group"].items[0].Projectuid== AGGetProject[j].ResourceId){
													GResourceIsGeneric = AGGetProject[j].ResourceIsGeneric;
													GResourceIsActive = AGGetProject[j].ResourceIsActive;
												}
												
											}
										if(GResourceIsGeneric == 'False' && GResourceIsActive == "True"){
											for (var j = 0; j < getCapcity.length; j++) {	
												//if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
												if(dataItem.Resourcename["group"].items[0].Projectuid == getCapcity[j].Projectuid){
													value = getCapcity[j].TotalUnit != ''  && getCapcity[j].TotalUnit != null ?getCapcity[j].TotalUnit:0;
												}
											}
											
											return "<span style='float:right;'>Availability (Max: "+value+"%)</span>";
											}
											else{
												return "<span style='float:right;'>Availability (Max: 0%)</span>";
											}
									}else{
										return "<span style='float:right;'>Availability </span>";
									}
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
					 }
					 else if(RM_Commit && !RM_Chat &&  !RM_Delete && !RM_Reject){
						  ret_arr = [{
						field: "Projectname",
						editable: true,
						title: 'Project Manager',
						format: "",
						width: 300,
						hidden: true,
						 groupHeaderTemplate:datasum,
						},{
						field: "Resourcename",
						editable: true,
						title: 'Project',
						format: "",
						width: 300,
						groupFooterTemplate:function(dataItem) {
									var value = 0
									if(RM_MaxUnites){
											var GResourceIsGeneric = null
										var GResourceIsActive = null
										for (var j = 0; j < AGGetProject.length; j++) {
								
												if(dataItem.Resourcename["group"].items[0].Projectuid== AGGetProject[j].ResourceId){
													GResourceIsGeneric = AGGetProject[j].ResourceIsGeneric;
													GResourceIsActive = AGGetProject[j].ResourceIsActive;
												}
												
											}
										if(GResourceIsGeneric == 'False' && GResourceIsActive == "True"){
											for (var j = 0; j < getCapcity.length; j++) {	
												//if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
												if(dataItem.Resourcename["group"].items[0].Projectuid == getCapcity[j].Projectuid){
													value = getCapcity[j].TotalUnit != ''  && getCapcity[j].TotalUnit != null ?getCapcity[j].TotalUnit:0;
												}
											}
											
											return "<span style='float:right;'>Availability (Max: "+value+"%)</span>";
											}
											else{
												return "<span style='float:right;'>Availability (Max: 0%)</span>";
											}
									}else{
										return "<span style='float:right;'>Availability </span>";
									}
								},
						
						//groupFooterTemplate: "<span style='float:right;'>Availability (Max Units:)</span>",
						filterable: {
							multi: true,
							search: true
							}
						},{
								field:'Commitment',
								title: '.',
								headerTemplate:'<label style=" color:#f3f3f4 ;" class=""></label>',
								filterable: false,
								sortable: false,
								editable: true,
								width: 30,
								template: function(dataItem) {
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value = '<span class="pointer" style="float: center;" onclick="CommittedItem()" title="Click to commit."><span class="k-icon k-i-track-changes-accept"></span></span>'
									}

								  return value;
								}
								//template:'<span class="pointer" style="float: center;" onclick="DeleteItem()" title="Click to delete"><span class="k-icon k-i-trash	k-i-delete"></span></span>'
								
						}];
						 
					 }
					  else if(RM_Reject && !RM_Chat &&  !RM_Delete && !RM_Commit){
						  ret_arr = [{
						field: "Projectname",
						editable: true,
						title: 'Project Manager',
						format: "",
						width: 300,
						hidden: true,
						 groupHeaderTemplate:datasum,
						},{
						field: "Resourcename",
						editable: true,
						title: 'Project',
						format: "",
						width: 300,
						groupFooterTemplate:function(dataItem) {
									var value = 0
									if(RM_MaxUnites){
											var GResourceIsGeneric = null
										var GResourceIsActive = null
										for (var j = 0; j < AGGetProject.length; j++) {
								
												if(dataItem.Resourcename["group"].items[0].Projectuid== AGGetProject[j].ResourceId){
													GResourceIsGeneric = AGGetProject[j].ResourceIsGeneric;
													GResourceIsActive = AGGetProject[j].ResourceIsActive;
												}
												
											}
										if(GResourceIsGeneric == 'False' && GResourceIsActive == "True"){
											for (var j = 0; j < getCapcity.length; j++) {	
												//if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
												if(dataItem.Resourcename["group"].items[0].Projectuid == getCapcity[j].Projectuid){
													value = getCapcity[j].TotalUnit != ''  && getCapcity[j].TotalUnit != null ?getCapcity[j].TotalUnit:0;
												}
											}
											
											return "<span style='float:right;'>Availability (Max: "+value+"%)</span>";
											}
											else{
												return "<span style='float:right;'>Availability (Max: 0%)</span>";
											}
									}else{
										return "<span style='float:right;'>Availability </span>";
									}
								},
						
						//groupFooterTemplate: "<span style='float:right;'>Availability (Max Units:)</span>",
						filterable: {
							multi: true,
							search: true
							}
						},{
								field:'Reject',
								title: '.',
								headerTemplate:'<label style=" color:#f3f3f4 ;" class=""></label>',
								filterable: false,
								sortable: false,
								editable: true,
								width: 30,
								template: function(dataItem) {
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value = '<span class="pointer" style="float: center;" onclick="rejectItem()" title="Click to reject"><span class="k-icon k-i-track-changes-reject"></span></span>'
									}

								  return value;
								}
								//template:'<span class="pointer" style="float: center;" onclick="DeleteItem()" title="Click to delete"><span class="k-icon k-i-trash	k-i-delete"></span></span>'
								
						},];
						 
					 }
					 else if(!RM_Chat &&  RM_Delete && !RM_Commit && RM_Reject){
						  ret_arr = [{
						field: "Projectname",
						editable: true,
						title: 'Project Manager',
						format: "",
						width: 300,
						hidden: true,
						 groupHeaderTemplate:datasum,
						},{
						field: "Resourcename",
						editable: true,
						title: 'Project',
						format: "",
						width: 300,
						groupFooterTemplate:function(dataItem) {
									var value = 0
									if(RM_MaxUnites){
											var GResourceIsGeneric = null
										var GResourceIsActive = null
										for (var j = 0; j < AGGetProject.length; j++) {
								
												if(dataItem.Resourcename["group"].items[0].Projectuid== AGGetProject[j].ResourceId){
													GResourceIsGeneric = AGGetProject[j].ResourceIsGeneric;
													GResourceIsActive = AGGetProject[j].ResourceIsActive;
												}
												
											}
										if(GResourceIsGeneric == 'False' && GResourceIsActive == "True"){
											for (var j = 0; j < getCapcity.length; j++) {	
												//if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
												if(dataItem.Resourcename["group"].items[0].Projectuid == getCapcity[j].Projectuid){
													value = getCapcity[j].TotalUnit != ''  && getCapcity[j].TotalUnit != null ?getCapcity[j].TotalUnit:0;
												}
											}
											
											return "<span style='float:right;'>Availability (Max: "+value+"%)</span>";
											}
											else{
												return "<span style='float:right;'>Availability (Max: 0%)</span>";
											}
									}else{
										return "<span style='float:right;'>Availability </span>";
									}
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
								
						},{
								field:'Reject',
								title: '.',
								headerTemplate:'<label style=" color:#f3f3f4 ;" class=""></label>',
								filterable: false,
								sortable: false,
								editable: true,
								width: 30,
								template: function(dataItem) {
									var value = ''
									if(dataItem.Resourcename != 'No Allocation'){
									  value = '<span class="pointer" style="float: center;" onclick="rejectItem()" title="Click to reject"><span class="k-icon k-i-track-changes-reject"></span></span>'
									}

								  return value;
								}
								//template:'<span class="pointer" style="float: center;" onclick="DeleteItem()" title="Click to delete"><span class="k-icon k-i-trash	k-i-delete"></span></span>'
								
						},];
						 
					 }
					  else if(!RM_Chat &&  RM_Delete && !RM_Commit && !RM_Reject){
						  ret_arr = [{
						field: "Projectname",
						editable: true,
						title: 'Project Manager',
						format: "",
						width: 300,
						hidden: true,
						 groupHeaderTemplate:datasum,
						},{
						field: "Resourcename",
						editable: true,
						title: 'Project',
						format: "",
						width: 300,
						groupFooterTemplate:function(dataItem) {
									var value = 0
									if(RM_MaxUnites){
										var GResourceIsGeneric = null
										var GResourceIsActive = null
										for (var j = 0; j < AGGetProject.length; j++) {
								
												if(dataItem.Resourcename["group"].items[0].Projectuid== AGGetProject[j].ResourceId){
													GResourceIsGeneric = AGGetProject[j].ResourceIsGeneric;
													GResourceIsActive = AGGetProject[j].ResourceIsActive;
												}
												
											}
										if(GResourceIsGeneric == 'False' && GResourceIsActive == "True"){
											for (var j = 0; j < getCapcity.length; j++) {	
												//if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
												if(dataItem.Resourcename["group"].items[0].Projectuid == getCapcity[j].Projectuid){
													value = getCapcity[j].TotalUnit != ''  && getCapcity[j].TotalUnit != null ?getCapcity[j].TotalUnit:0;
												}
											}
											
											return "<span style='float:right;'>Availability (Max: "+value+"%)</span>";
											}
											else{
												return "<span style='float:right;'>Availability (Max: 0%)</span>";
											}
									}else{
										return "<span style='float:right;'>Availability </span>";
									}
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
								
						}];
						 
					 }
					 else{
						 ret_arr = [{
						field: "Projectname",
						editable: true,
						title: 'Project Manager',
						format: "",
						width: 300,
						hidden: true,
						 groupHeaderTemplate:datasum,
						},{
						field: "Resourcename",
						editable: true,
						title: 'Project',
						format: "",
						width: 300,
						groupFooterTemplate:function(dataItem) {
								var value = 0
								if(RM_MaxUnites){
											var GResourceIsGeneric = null
										var GResourceIsActive = null
										for (var j = 0; j < AGGetProject.length; j++) {
								
												if(dataItem.Resourcename["group"].items[0].Projectuid== AGGetProject[j].ResourceId){
													GResourceIsGeneric = AGGetProject[j].ResourceIsGeneric;
													GResourceIsActive = AGGetProject[j].ResourceIsActive;
												}
												
											}
										if(GResourceIsGeneric == 'False' && GResourceIsActive == "True"){
											for (var j = 0; j < getCapcity.length; j++) {	
												//if(dataItem.Resourcename["group"].value == getCapcity[j].Projectuid){
												if(dataItem.Resourcename["group"].items[0].Projectuid == getCapcity[j].Projectuid){
													value = getCapcity[j].TotalUnit != ''  && getCapcity[j].TotalUnit != null ?getCapcity[j].TotalUnit:0;
												}
											}
											
											return "<span style='float:right;'>Availability (Max: "+value+"%)</span>";
											}
											else{
												return "<span style='float:right;'>Availability (Max: 0%)</span>";
											}
									}else{
										return "<span style='float:right;'>Availability </span>";
									}
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
				for (var i = 18; i < keys.length; i++) {
					titleLen.push(keys[i].split("_")[1]);
				}
				
				var filterkey = findOdd(titleLen);
				var cont = 1
				if(keys.length == 14){
					for (var i = 18; i < keys.length; i++) {
					   if (!(keys[i].split("_")[1] in seen)) {
							fildata.push({
									field: keys[i],
									width: 65,
									title: keys[i].split("_")[0],
									filterable: false,
									sortable: false,
									//validation: { max: 12 },
									editor: myEditorFunction,
									//template: '#=' + keys[i] + '#%',
									 template: "#= (" + keys[i] + " == null) ? '0' : " + keys[i] + " #%",
									groupFooterTemplate: "<span class='#=getClassfolter(100-sum)#'>#= getClassfolterlab(sum)#%</span>",
								})	
								//var fsd = [fildata]
								ret_arr.push({
									title: keys[i].split("_")[1],
								columns:fildata});
							}
					}
				}
				else{
				for (var i = 18; i < keys.length; i++) {
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
								sortable: false,
								editor: myEditorFunction,
								//validation: { max: 12 },
								//template: '#=' + keys[i] + '#%',
							     template: "#= (" + keys[i] + " == null) ? '0' : " + keys[i] + " #%",
								//template: "#= mycellFunc(data,"+'<span class='+keys[i]+'>' +keys[i]+ '+</span>,' + keys[i] + ") #",
								//  template: function(e) {return mycellFunc(e, keys[i],i)},
								/*template: function(e) {
									var value = ''
									if(dataItem[keys[i]] == '' || dataItem[keys[i]] == null){
									  value = '0'
									}

								  return value;
								},*/
								//groupFooterTemplate: "#= sum-100 #",
								groupFooterTemplate: "<span class='#=getClassfolter(100-sum)#'>#= getClassfolterlab(sum) #%</span>",
								/*groupFooterTemplate:function(dataItem) {
								
								var value = 0
									for (var j = 0; j < resReName.length; j++) {											  												
													if(dataItem.Resourcename["group"].value == resReName[j].Title){
														
														value =resReName[j].ResourceMaxUnits
													}
											 }	
											 debugger
									if(RM_MaxUnites){
										return  "<span class='#=getClassfolter(100-sum)#'>#= 100-sum #%</span>";
									}
									else{
										return "<span class='#=getClassfolter(100-sum)#'>#= 100-sum #%</span>";
									}	
										
									},*/
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
								sortable: false,
								//validation: { max: 12 },
								editor: myEditorFunction,
								//template: '#=' + keys[i] + '#%',
								 template: "#= (" + keys[i] + " == null) ? '0' : " + keys[i] + " #%",
								/*template: function(dataItem) {
									var value = ''
									if(dataItem[keys[i]] == '' || dataItem[keys[i]] == null){
									  value = '0'
									}

								  return value;
								},*/
								 //template: function(e) {return mycellFunc(e, ret_arr.length);},
								//groupFooterTemplate: "#= sum-100 #",
								groupFooterTemplate: "<span class='#=getClassfolter(100-sum)#'>#= getClassfolterlab(sum) #%</span>",
								/*groupFooterTemplate:function(dataItem) {
								
									var value = 0
									for (var j = 0; j < resReName.length; j++) {											  												
													if(dataItem.Resourcename["group"].value == resReName[j].Title){
														
														value =resReName[j].ResourceMaxUnits
													}
											 }	
											 debugger
									if(RM_MaxUnites){
										return  "<span class='#=getClassfolter(100-sum)#'>#= 100-sum #%</span>";
									}
									else{
										return "<span class='#=getClassfolter(100-sum)#'>#= 100-sum #%</span>";
									}	
										
									},*/
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
								sortable: false,							
								//attributes: {  "class": keys[i]+"_Status" } }
							   
								//validation: { max: 12 },
								editor: myEditorFunction,
								//template: '#=' + keys[i] + '#%',
								/*template: function(dataItem) {
									var value = ''
									if(dataItem[keys[i]] == '' || dataItem[keys[i]] == null){
									  value = '0'
									}

								  return value;
								},*/
								 template: "#= (" + keys[i] + " == null) ? '0' : " + keys[i] + " #%",
								groupFooterTemplate: "<span class='#=getClassfolter(100-sum)#'>#= getClassfolterlab(sum) #%</span>",
							})							
						for (var j = 0; j < ret_arr.length; j++) {
							if(keys[i].split("_")[1] == ret_arr[j].title){
								ret_arr[j].columns =fildata;
							}
						}
					}
				}
				fildata.push({
								field: keys[1],
								width: 65,
								title: 'UID',
								hidden: true
							},
							{
								field: keys[13],
								width: 65,
								title: 'IsRejected',
								hidden: true
							},
							{
								field: keys[14],
								width: 65,
								title: 'IsCommitted',
								hidden: true
							},
							{
								field: keys[15],
								width: 65,
								title: 'date1',
								hidden: true
							},
							{
								field: keys[16],
								width: 65,
								title: 'date2',
								hidden: true
							});
	}
		// var dynHeaders = gColumns(headers)
		response.filter(function (item, idx) {
			var itemK = newgetProjectsdatainfo.filter(function(x){
				return x.ProjectId === item.Resourceuid
			})
			if(itemK.length > 0){
				return item.Status = item.AllocationUID+'^'+itemK[0].ProjectName;
				
				
			}
			else{
				return item.Status = item.AllocationUID+'^'+item.Resourcename;
			}
			  //+'^'+item.Resourceuid+
			});
			/*response.filter(function (item, idx) {			
				return item.Projectname = item.Projectname+'|'+item.Projectuid;
			})*/
		/*response.filter(function (item, idx) {
			return item.Projectname = '<span>'+item.Projectname+'<br></span>'+'<span>Devloper</span>';  //+'^'+item.Resourceuid+
			});*/
			/*response.filter(function (item, idx) { 
				getProjectsdatainfo.filter(function (items, idxs) {
					//if(item.Projectuid.toLowerCase() == items.ProjectId.toLowerCase()){
					/*	return item.Resourcename = item.Resourcename+'('+items.ProjectNumber+')'; 
					}*/
					/*if(item.Resourcename == items.ProjectName){
						var num = items.ProjectNumber != null?items.ProjectNumber:'*Blank'
						return item.Resourcename = item.Resourcename+' ('+num+')'; 
					}
				});
			});*/
			
			response.sort(function(a, b) { 
				  return a.Resourceuid - b.Resourceuid  ||  a.Resourcename.localeCompare(b.Resourcename);
				});
			var tsc = false
			for(i=0;i<response.length;i++){
				tsc = false
					 $.each(getProjectsdatainfo, function (indx, PGrid) {	
						if(tsc){
							return;
						}
						 if(response[i].Resourceuid == PGrid.ProjectId){
							 response[i].gridorder = 'B'
							 tsc = true
						 }else{
							  response[i].gridorder = 'A'
						 }				 
					 })
								
				}
				if(!userInGroup && a != '1'){ 
				$('.DreEndc').show()
				}
			
		 $.LoadingOverlay("hide");	
		$("#PMLoadgrid").empty();
		$("#PMLoadgrid").show();
		AValueDuplicat = AValue;
		 var dataSourc = new kendo.data.DataSource({
			  data:response,
			  //data:newresponse.length > 0? newresponse:response,
			 // group: { field: "Projectname" }
			 
			   group: [
					// group by "category" and then by "subcategory"
					// { field: "Role" },Projectname Projectuid
					{ field: "Projectname", aggregates: AValue , dir: "asc" ,compare: function(a, b) {
						console.log('')
					}}       
				  ],
				    groupable: {
				sort: {
						dir: "desc"
					}
				},
				change: function(e) {
					//var data = this.data();
					if(e.action == 'itemchange'){
						gridchanged = true;
					}
					
				}
			});
			//if(filteredGrid ){
				//dataSourc.filter(globalfilterI);
				if(globalfilterI == null || globalfilterI.length == 0){
					
				}
				else if(globalfilterI.filters.length > 0){
					dataSourc._filter = globalfilterI;
				}
				
				filteredGrid = false;
			//}
			if(sortingApply && sortingType != 0){
				if(sortingType == '1'){
					dataSourc._group[0].field = 'Projectname'
					dataSourc._group[0].dir = 'asc'
				}
				else if(sortingType == '2'){
					dataSourc._group[0].field = 'Projectname'
					dataSourc._group[0].dir = 'desc'
				}
				else if(sortingType == '3'){
					dataSourc._group[0].field = 'Projectname'
					dataSourc._group[0].dir = 'asc'
					for(i=0;i<dataSourc.options.data.length;i++){
						if(dataSourc.options.data[i].Role == null || dataSourc.options.data[i].Role == 0 || dataSourc.options.data[i].Role == ""){ 
							dataSourc.options.data[i].Projectname = '_'+'|'+ dataSourc.options.data[i].Projectname					
						}
						else{
							dataSourc.options.data[i].Projectname = dataSourc.options.data[i].Role +'|'+ dataSourc.options.data[i].Projectname
						}
						
					}
				}
				else if(sortingType == '4'){
					dataSourc._group[0].field = 'Projectname'
					dataSourc._group[0].dir = 'desc'
					dataSourc._group[0].compare = function (a, b) {
													console.log(a);
												}
					for(i=0;i<dataSourc.options.data.length;i++){
						if(dataSourc.options.data[i].Role == null || dataSourc.options.data[i].Role == 0 || dataSourc.options.data[i].Role == ""){ 
							dataSourc.options.data[i].Projectname = '_'+'|'+  dataSourc.options.data[i].Projectname					
						}
						else{
							var item = dataSourc.options.data.filter(function(x){
										return x.Role == dataSourc.options.data[i].Role
									});
							var rt = [];
							for(j=0;j<item.length;j++){
								if(rt.indexOf(item[j].originalProjectName) == -1){
									rt.push(item[j].originalProjectName)
								}							
							}
							rt = rt.sort();
							var rt_len = rt.length-1;
							var indxVal = rt.indexOf(dataSourc.options.data[i].originalProjectName);
							dataSourc.options.data[i].Projectname = dataSourc.options.data[i].Role + rt[rt_len-indxVal] +'|'+ dataSourc.options.data[i].Projectname
						}
					}
				}
			} 
			RedataId = [];
			numgridloa = 0;
			Fotter =false;
			Fdata = [];
			HClas= []
			HClasc = []
			$('.k-button').attr('disabled', false);
			$('#ErroeMessage').text('')
		 var grid = $("#PMLoadgrid").kendoGrid({
			 dataSource: dataSourc,
			 navigatable: true,
			  change: function (e) {
						var cell = this.select();
						 var dataItem = this.dataItem(cell.closest("tr"));
						 var cellIndex = cell[0].cellIndex;
						  var column = this.columns[cellIndex];
						
						var mc = false;
						if(DeletedataItem){	
							mc = true;
							DeletedataItem = false;
							var acheck =false;
							var CROWUchanges = false
							if(dataIdPP.length !=0){								
								 $.each(dataIdPP	, function (indx, AUID) {
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
								  getItemID(dataItem)
								}
							}else{
								alert("No Allocation this entry?");
							}
							
						   }
						}
						if(rejectdataItem){
							mc = true;
							rejectdataItem = false
							if(dataItem.Resourcename != "No Allocation"){
								var acheck =false;
									//if(dataIdPP.length !=0){	
								var CROWUchanges = false
								if(dataIdPP.length !=0){								
									 $.each(dataIdPP	, function (indx, AUID) {
										 if(AUID != dataItem.AllocationUID){
											 CROWUchanges = true;
										 }
									 })
								}
								if(CROWUchanges){
										acheck = confirm('Are you sure you want to reject this item?  You have unsaved changes.  Press OK to continue with your item rejection, which will lose any unsaved changes.  Press Cancel to cancel this item rejection.')
									}else{
										acheck =true;
									}
									if(acheck){
										var exists = Object.keys(dataItem).some(function(k) {
											return dataItem[k] === 'Proposed';
										});
										
										var Chktrue = true;
										/* if(!exists){
											Chktrue = confirm("Are you sure you want to reject this entry?");
										} */
										Chktrue = confirm("Are you sure you want to reject this entry?");
										if(Chktrue){
										  //getItemID(dataItem)
										  ActionFlag = true;
										  rejectFilterEngagements(dataItem);
										}
									}
							}else{
								alert("No Allocation this entry?");
							}
						}
						
						if(CommitteddataItem){
							mc = true;
							CommitteddataItem = false;
							if(dataItem.Resourcename != "No Allocation"){
								
								var acheck =false;
									//if(dataIdPP.length !=0){	
								var CROWUchanges = false
									if(dataIdPP.length !=0){								
										 $.each(dataIdPP	, function (indx, AUID) {
											 if(AUID != dataItem.AllocationUID){
												 CROWUchanges = true;
											 }
										 })
									}
									if(CROWUchanges){
										acheck = confirm('Are you sure you want to commit this item?  You have unsaved changes.  Press OK to continue with your item commitment, which will lose any unsaved changes.  Press Cancel to cancel this item commitment.')
									}else{
										acheck =true;
									}
									if(acheck){
							//var Chktrue = confirm("Are you sure you want to Committed this entry?");
								/* var exists = Object.keys(dataItem).some(function(k) {
									
									return (dataItem[k] === 'Proposed' || dataItem[k] === 'Rejected') && k != 'AllocationStatus';
								 });*/
								var count = 0;

								// loop through each key/value
								for(let key in dataItem) {
									if((dataItem[key] === 'Proposed' ||dataItem[key] === 'Rejected')  && key != 'AllocationStatus'){
										 count++;
									}
									// increase the count
								   
								}
								 
								
								var Chktrue = true;
								if(count != dataItem.IsCommitted){
									Chktrue = confirm("Are you sure you want to commit?  This resource has allocations spanning from "+dataItem.ConditionDate1.replace(' 12:00AM','').replace(' 5 ','')+" to "+dataItem.ConditionDate2.replace(' 12:00AM','').replace(' 5 ','')+", some of which are outside of your grid's current date range.  Press OK to commit this resource.  Press Cancel to cancel your commitment.");
								}
								if(Chktrue){
									//getItemID(dataItem)
									ActionFlag = true;
									saveFilterEngagementsCommit(dataItem);
								}
							  }
							}else{
								alert("No Allocation this entry?");
							}
						}
						if(ChatdataItem){
							 mc = true;
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
						/*if(!mc){
						 if(column.field != "Projectname" && column.field != "Resourcename" &&column.field != "Chat" &&column.field != "Delete" && column.field != "Commitment" &&column.field != "Reject"){
							  var idx = cell.closest("tr").index()+2
							  var namer = $('#PMLoadgrid tr:eq(' +idx + ') td:eq(2)').text()
							// $('#PMLoadgrid tr:eq(' + idx + ') td:eq(2)').html(namer+'<span style="color: orange;"class="k-icon k-i-radiobutton-checked"></span>')
						 }
						}*/
						
						$('#PMLoadgrid').find('.k-state-selected').removeClass('k-state-selected')
								 
				},
			 edit: function (e) {
				 var inputHT=$("#PMLoadgrid td.k-group-cell").height()-10;
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
						/* dataId.push(e.model.ID);
						RedataId.push(e.model.ID); */
						dataId.push(e.model.AllocationUID);
						
						RedataId.push(e.model.AllocationUID);
						PPID = e.model.AllocationUID;
						Gdatavalstart =new Date($("#start").val())
						GdatavalEnd =new Date($("#end").val())
						var cell = this.select();
						//var uid = cell.data("uid");
						//var tr_first=$('[data-uid="'+uid+'"] td:first').text();
						//alert(tr_first);
						   idxG =$('[data-uid="'+e.model.uid+'"] td').closest("tr").index()+2//cell.closest("tr").index()+4
					       namePNam = $('#PMLoadgrid tr:eq(' +idxG + ') td:eq(2)').text()
						 var input = e.container.find(".k-input");
						  input.keydown(function(){
							  //var $('[data-uid="'+idxG+'"] td')[2]
							  $('.k-i-close').hide();
							  dataIdPP.push(PPID);
							$('#PMLoadgrid tr:eq(' + idxG + ') td:eq(2)').html(namePNam+'<span style="color: orange;"  title="You have unsaved changes"class="k-icon k-i-radiobutton-checked"></span>')
						  });
					  //  $('#PMLoadgrid tr:eq(' + idx + ') td:eq(2)').html(namer+'<span style="color: orange;"class="k-icon k-i-radiobutton-checked"></span>')
						setTimeout(function () {
							e.container.find("input").select();
						})
						if(e.container.find('span').find('input')[0].title != 0.00){
							e.container.css("background-image", "none");e.container.css("color", "#003f59");
						}
					}
				  
				  
				/*  else{
				  dataId.push(e.model.ID);
				  RedataId.push(e.model.ID);
				 setTimeout(function () {
					 e.container.find("input").select();
				 })
			   }*/
			 },
			 save: function () {
                  var grid = this;
                  setTimeout(function () {
					  if(Rpalcececk != "1"){
					//  saveFilterEngagements();
					  }
                   // grid.refresh();
					//$('#ErroeMessage').text('*Unsaved Data is there. Please click on save button before leaving.')
                    //alert('');
                  }, 60000)
                },
			 editable: true,
			 selectable: "multiple, cell",
			//sortable: true,
			 filterable: true,
			 filter: function(e) {
				 console.log(e);
				/* var akcheck = false
				if(gridchanged){
					akcheck = false;
				
				}else{
					akcheck =true;
				} */
				//if(akcheck){
					filteredGrid = true;
					 /*******************/
					globalfilterI = e.filter;
						 
					collapseRows(); 
					clickapplyrescsorting(sortingType);
					// $("#PMLoadgrid").data("kendoGrid").setDataSource(dataS);
					 /********************/
					 
					// setInactiveResIcon();
					//sortOptionConfig();
				/* }
				else{
					e.filter = null;
					filteredreturn = true;          
				} */
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
				initailize_filter_e = e;
				console.log(e);
				e.preventDefault();
				$('.k-animation-container').eq(1).css('display','none !important');
				initailize_filter = true;
				if(gridchanged){
					e.container = ""
					//$(".k-filter-menu.k-popup.k-group.k-reset.k-state-border-up").hide()
					$('.k-animation-container').eq(1).hide();
					alert('You have unsaved changes. Filtering your visible projects will lose these changes. Save your changes before applying a project filter.');		
				}
				else{
					//$(".k-filter-menu.k-popup.k-group.k-reset.k-state-border-up").show()
					/* $('.k-animation-container').eq(1).show();				
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
					}) */
				}
								
			  },
			/* filterMenuOpen: function(e) {
				console.log(e);
				$(".k-filter-menu.k-popup.k-group.k-reset.k-state-border-up").hide();
			}, */
			  
			// nullable: true,
			  //height: window.innerHeight,
				
			 // scrollable: true,
				resizable: true,
			// toolbar: ["cancel"],
			 columns: ret_arr,
			 dataBound:onDataBound,		  
			 /*function(e){
				  var firstCell = e.sender.element.find(".k-grouping-row td:first-child");
				  firstCell.attr("colspan", 2);
				//  commitAllocations();		onDataBound,				
				//	if(RM_Reject){rejectAllocations();}	
				}*/
			 }).find("table").on("keydown", onGridKeydown);
			 
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
  console.log(startMonthVal +' '+startYearVal)
  console.log(EndMonthVal +' '+EndYearVal)

  //}).data("kendoGrid");

$("#Daterangebox").css("display","inline");

$('#Daterange').text(startMonthVal +' 20'+startYearVal+ " - " + EndMonthVal +' 20'+EndYearVal )
       $("#PMLoadgrid th,#Daterange").click(function(){ if($(this).text()!== "ProjectAscending by Resource Name Descending by Resource Name Ascending by Last Modified  Descending by Last Modified  " && $(this).text()!=="" ){ $('.ttesting').css("display","block");
              $('.backgroundBlur').fadeIn();
cstart = $('#start').val()
cend = $('#end').val()
              
              }})

$("#PMLoadgrid th,#Daterange").hover(function(){ if($(this).text()!== "ProjectAscending by Resource Name Descending by Resource Name Ascending by Last Modified  Descending by Last Modified  " && $(this).text()!=="" ){ $(this).css("cursor","pointer");
              }})
                  
          $(".OkbuttonDate").off("click");
$(".OkbuttonDate").click(function(){
          changeDateNew($('#start').val(), $('#end').val())
  })

  $(".crossi").click(function(){
       $("#start").data("kendoDatePicker").value(cstart);
$("#end").data("kendoDatePicker").value(cend);
          $('.ttesting').css("display","none");
              $('.backgroundBlur').fadeOut();
  })
  			//$('#PMLoadgrid').width($(window).width()-270);
			$('#PMLoadgrid').find('thead').find('tr').find('th:first').css('border-color','#e3f1f8')
			//$('#PMLoadgrid').find('thead').find('tr').find('th:first').removeClass("k-group-cell");
			$('#PMLoadgrid').find('thead').find('tr').find('th:first').removeClass("k-header");
		//grid.bind("change", grid_change);
			$($('[role="grid"]')[0]).find('tr').eq(0).find('th').eq(0).css('background-color', 'rgb(227, 241, 248)');
			$($('[role="grid"]')[0]).find('tr').eq(1).find('th').eq(0).css('background-color', 'rgb(227, 241, 248)');
			$($('[role="grid"]')[0]).find('tr').eq(0).find('th').eq(0).hover(
				function(){
					$(this).css('background-color', 'rgb(227, 241, 248)');
					//$(this).css('border-color', 'red !important');
					$('#PMLoadgrid').find('thead').find('tr').find('th:first').css('border-color','transparent');
				},
				function(){
					$(this).css('background-color', 'rgb(227, 241, 248)');
					//$(this).css('border-color', 'red !important');
					$('#PMLoadgrid').find('thead').find('tr').find('th:first').css('border-color','transparent');
			});
			$($('[role="grid"]')[0]).find('tr').eq(1).find('th').eq(0).hover(
				function(){
					$(this).css('background-color', 'rgb(227, 241, 248)');
					//$(this).css('border-color', 'red !important');
					$('#PMLoadgrid').find('thead').find('tr').find('th:first').css('border-color','transparent');
				},
				function(){
					$(this).css('background-color', 'rgb(227, 241, 248)');
					//$(this).css('border-color', 'red !important');
					$('#PMLoadgrid').find('thead').find('tr').find('th:first').css('border-color','transparent');
			});
         
		 var ds = $("#PMLoadgrid").data("kendoGrid").dataSource;
		    // ds.sort({ field: "gridorder", dir: "asc" });
			 dataId = [];
			 dataIdPP = []
			 var colchk = []
		  /* $.each(FotColor, function (indx, MGrid) {
			 var cls= MGrid.ProjectFilter
			
				if(MGrid.Formula == 'Less than|lt'){
					if(MGrid.ProjectFilter.indexOf('#') != -1){
								var hcol =MGrid.ProjectFilter.replace("#", "")
								 cls = hcol.trim();
							 }
					$('.DC'+cls).css('color', MGrid.ProjectFilter);					
				}				
				if(MGrid.Formula == 'Less than or equal to|le'){
					if(MGrid.ProjectFilter.indexOf('#') != -1){
								var hcol =MGrid.ProjectFilter.replace("#", "")
								 cls = hcol.trim();
							 }
					$('.DC'+cls).css('color', MGrid.ProjectFilter);
					
				}
				
				if(MGrid.Formula == 'Equal to|eq'){
					if(MGrid.ProjectFilter.indexOf('#') != -1){
								var hcol =MGrid.ProjectFilter.replace("#", "")
								 cls = hcol.trim();
							 }
					$('.DC'+cls).css('color', MGrid.ProjectFilter);
					
				}
				if(MGrid.Formula == 'Greater than|gt'){
					if(MGrid.ProjectFilter.indexOf('#') != -1){
								var hcol =MGrid.ProjectFilter.replace("#", "")
								 cls = hcol.trim();
							 }
					$('.DC'+cls).css('color', MGrid.ProjectFilter);
					
				}
				if(MGrid.Formula == 'Greater than or equal to|ge'){
					
					
							 if(MGrid.ProjectFilter.indexOf('#') != -1){
								var hcol =MGrid.ProjectFilter.replace("#", "")
								 cls = hcol.trim();
							 }
					$('.DC'+cls).css('color', MGrid.ProjectFilter);
					
				}
				if(MGrid.Formula == 'Between'){
					var vdc = MGrid.FormulaNumber.toString()
					$(".Between"+vdc).css('color', MGrid.ProjectFilter);					
				}
					
			 }); */
			 SsetRes = response;
			 //	$("#PMLoadgrid").css("width", $('#DeltaPlaceHolderMain').width());
			//resizeGrid(response);
			$('#s4-workspace').animate({
					scrollTop: scrollTop
			
				})
			/*$('#PMLoadgrid .k-grid-content').scroll(function () { 
						scrollTop =$('.k-grid-content').scrollTop();
				});*/
				
				$('#s4-workspace').scroll(function () { 
						scrollTop =$('#s4-workspace').scrollTop();
						if($('.sortingtypeListitems').is(":visible")){
								$('.sortingtypeListanchor').click();
						}
				});
				
				/* $("#PMLoadgrid").kendoTooltip({
					  filter: ".k-header span", //this filter selects the second column's cells
					  position: "right",
					  content: function(e){
						var dataItem = $("#PMLoadgrid").data("kendoGrid").dataItem(e.target.closest("tr"));
						var content = dataItem.Text;
						return content;
					  }
					}).data("kendoTooltip");*/
					/* var Cellindex = 0;
					$('.k-grouping-row').eq(0).find('td').each(function(x){								
						var val = $(this).text().replace('-','');
						var result=/^\d+(\.\d+)?%$/.test(val);

						if(result){
							Cellindex  =  $(this).index();
							return false;
						}
					}) */
					
				var grid = $("#PMLoadgrid").data("kendoGrid");
				  var tooltip = grid.tbody.kendoTooltip({
						filter: "td",
						position: "right",
						show: function(e){						
							if(hshow){
									this.content.parent().css("visibility", "hidden"); 
							}else{								
								this.content.parent().css("visibility", "visible");
							} 
						  },
						beforeShow: function(e){
							if(e.target.closest('tr').attr('class') != 'k-group-footer'){
								  e.preventDefault();
							} 
							var val = e.target.text();
							val = val.replace('-','')
							var result=/^\d+(\.\d+)?%$/.test(val);
							if(!result){
								e.preventDefault();
							}
							console.log(e);
						},
						content: function (e) {
							var tdval = e.target.text().replace('-','');
							var tdval_result=/^\d+(\.\d+)?%$/.test(tdval);
							var Availabilityn = -1
							if(tdval_result){
								Availabilityn = 0;
							}
							else{
								hshow = true;
								return;
							}
						   // var eAvailability  = e.target.closest('tr').nextAll('tr.k-group-footer').eq(0).text();//e.target.closest("tr").find('td').text()
							//var Availabilityn =  eAvailability.indexOf('Availability')	
							var rowindex= e.target.closest("tr").index();
							var Cellindex = 0;//e.target.index();
							e.target.closest('tr').find('td').each(function(x){								
								var val = $(this).text().replace('-','');
								var result=/^\d+(\.\d+)?%$/.test(val);
								if(result){
									Cellindex++;
									if(this == e.target[0]){
										return false;
									}
								}
							})
						   Cellindex = Cellindex-1;
							//var Rname = e.target.closest('tr').prevAll('tr.k-grouping-row').eq(0).find('td').eq(0).find('span#resId_grid').text();
							//e.target.closest("tr").prev('tr').children('td:nth-child(2)').text();	
							var Rname = e.target.closest('tr').prevAll('tr.k-grouping-row').eq(0).find('td').eq(0).find('span#resId_grid').text()
							if(e.target.closest('tr').attr('class') == 'k-grouping-row'){
								Rname = e.target.closest('tr').find('td').eq(0).find('span#resId_grid').text();
							}
							
							
							var hNam = $('.k-auto-scrollable').eq(0).find('table').find('thead').find('tr').eq(1).find('th[role="columnheader"]:visible').eq(Cellindex).attr("data-field");//$("#PMLoadgrid").data("kendoGrid").thead.find('tr').next('tr').find('th')[e.target.index()-7].getAttribute("data-field");
							var Capacity =0
							if(RM_MaxUnites){
								for (var j = 0; j < getCapcity.length; j++) {											  												
									if(Rname == getCapcity[j].Projectuid){													
										Capacity =getCapcity[j][hNam];
									}
								}
								}else{								 
								 for (var j = 0; j < getCapcity.length; j++) {	
											if(Rname == getCapcity[j].Projectuid){
												for (var i = 0; i < resReName.length; i++) {											  												
															if(getCapcity[j].Projectuid == resReName[i].ResourceId){
																if(resReName[i].ResourceIsActive == "True" && resReName[i].ResourceIsGeneric == 'False'){
																   Capacity =100;
																}
															}
													 }
													 
											 }
								 }
							  }
							 
							 var target = e.target;
								if(Availabilityn == -1){
										hshow = true;
								}else{		
									if($(target).text().trim() ==''){
										hshow = true;
									}
									else if($(target).text().trim().indexOf('Max') !=-1){
										hshow = true;
									}else{
									hshow = false;
									}
								} 
								var valAv = $(target).text()
								//var  valAll = -(parseFloat($(target).text()))+ parseFloat(Capacity);//valAv
								var indxxx = e.target.index();
								var valAll = parseFloat(e.target.closest('tr').prevAll('tr.k-grouping-row').eq(0).find('td').eq(indxxx-2).text());
								if(rpistrue){
									valAll = parseFloat(e.target.closest('tr').prevAll('tr.k-grouping-row').eq(0).find('td').eq(indxxx-1).text());
								}
								//     i - (i * 2)//$("#PMLoadgrid").data("kendoGrid").dataSource._data[rowindex-2].Projectname
								var availblity= parseFloat(Capacity)-parseFloat(valAll);
							
							 return '<div  class="ttfont" style="text-align:left;"><span style="">Capacity: '+Capacity+'%</span> <br><span style="">Allocation: '+valAll+'%</span> <br><span style="">Availability: '+availblity+'%</span></div>';						 
							},
						   width: 150,
					  });
			kendo.ui.Tooltip.fn._show = function (show) {
				return function (target) {
					var e = {
						sender: this,
						target: target,
						preventDefault: function () {
							this.isDefaultPrevented = true;
						}
					};

					if (typeof this.options.beforeShow === "function") {
						this.options.beforeShow.call(this, e);
					}
					if (!e.isDefaultPrevented) {
						// only show the tooltip if preventDefault() wasn't called..
						show.call(this, target);
					}
				};
			}(kendo.ui.Tooltip.fn._show);
			colorSet();
			//setInactiveResIcon();
			$('.k-i-collapse').click(function(e){
				collapseEvent = true;
			});
			$('.k-i-expand').click(function(e){
				collapseEvent = true;
			});
			/* if(arrColp.length > 0){
				var grid = $("#PMLoadgrid").data("kendoGrid");
				$('.k-grouping-row').each(function(x){
					/* if(arrColp.indexOf($(this).index('.k-grouping-row')) != -1){
						grid.collapseRow(this);
					} 
					if(arrColpName.indexOf($(this).eq(0).find('p').text().replace(/\s+/g, '')) != -1){
						grid.collapseRow(this);
					} 
				})
			} */
			if(expand_collapse_className != ''){
				if(expand_collapse_className == 'k-icon k-i-expand custom'){
					$('.k-group-cell').eq(1).append("<a class='"+expand_collapse_className+"' title='Expand All'</a>");
				}
				else{
					$('.k-group-cell').eq(1).append("<a class='"+expand_collapse_className+"' title='Collapse All'</a>");
				}
			}
			else{
				$('.k-group-cell').eq(1).append("<a class='k-icon k-i-collapse custom' title='Collapse All'</a>");
			}
			$('.k-grid-filter').eq(1).click(function(x){
				if(!initailize_filter){
					if(gridchanged){
						$(".k-filter-menu.k-popup.k-group.k-reset.k-state-border-up").hide()
						alert('You have unsaved changes. Filtering your visible projects will lose these changes. Save your changes before applying a project filter.');		
					}
					else{
						//$(".k-filter-menu.k-popup.k-group.k-reset.k-state-border-up").show()
						//$('#PMLoadgrid').data("kendoGrid")._events.filterMenuInit[0](initailize_filter_e);
					}
				}
				else{
					
				}
				initailize_filter = false;
			});			
	}
	var initailize_filter = false;
	var initailize_filter_e = [];
	var idxG;
	var namePNam;
	var SsetRes;
	var dataIdPP = []
	var PPID = null
	var hshow = false;
	$('#fullscreenmodebox').click(function(e){
		/*var grid = $("#PMLoadgrid").data("kendoGrid");
			$('.k-grouping-row').each(function(x){
				grid.expandRow(this);
			});
		var cls = $('#fullscreenmodebox').attr('class')
		if(cls.indexOf('RsizeGrid') == -1){
			$('#fullscreenmodebox').addClass( "RsizeGrid" );			
		}else{
		   $('#fullscreenmodebox').removeClass( "RsizeGrid" );
		}	  */
		//	$("#PMLoadgrid").css("width", $('#DeltaPlaceHolderMain').width());
	});
	function removeDuplicates(arr) {
        var unique = [];
        arr.forEach(element => {
            if (!unique.includes(element)) {
                unique.push(element);
            }
        });
        return unique;
    }
	var scrollTop = 0;
	function colorSet(){
		var footercon = '';
		var colindxcheck = [];
		var columnmap = [];
		var obj = {}
		var rowV;
		$.each(FotColor, function (indx, MGrid) {
			obj = {};
			if(MGrid.Display){
				var cls= MGrid.ProjectFilter				  
					if(MGrid.Formula == 'Less than|lt'){
						/* if(MGrid.ProjectFilter.indexOf('#') != -1){
							var hcol =MGrid.ProjectFilter.replace("#", "")
							 cls = hcol.trim();
						 } */
						//$('.DC'+cls).css('color', MGrid.ProjectFilter);
						$("#PMLoadgrid").find('tbody').find('tr.k-grouping-row').each(function(x){
							
							var rwindx = $(this).index('.k-grouping-row');
							rowV = rwindx;
							var stringmx = $("#PMLoadgrid").find('tbody').find('tr.k-group-footer').eq(rwindx).find('td').eq(2).text();
							var resID = $(this).find('#resId_grid').text();
							/* if(RM_MaxUnites){
								mxV = parseFloat(stringmx.match(/(\d+)/)[0]);	
							}
							else{
								mxV = 100
							} */
							var ResourceIsGeneric = 'False'
							var ResourceIsActive = 'False'
							if(arr_AGGetProject_ID.indexOf(resID)!=-1)
							{
								var lidx=arr_AGGetProject_ID.indexOf(resID)
								ResourceIsGeneric = arr_AGGetProject_Generic[lidx];
								ResourceIsActive = arr_AGGetProject_Active[lidx]
							}
						/*	for (var j = 0; j < AGGetProject.length; j++) {
								
								if(resID== AGGetProject[j].ResourceId){
									ResourceIsGeneric = AGGetProject[j].ResourceIsGeneric;
									ResourceIsActive = AGGetProject[j].ResourceIsActive
								}
								
							}*/
							var capacityResArr= [];
							mxV = 0;
							if(RM_MaxUnites){
							for (var j = 0; j < getCapcity.length; j++) {											  												
									if(resID == getCapcity[j].Projectuid){													
										//mxV = getCapcity[j][columnMonname];
										capacityResArr.push(getCapcity[j]);									
									}
								}
							}
							else{
								if(ResGenericAr.indexOf(resID) == -1 && ResActiveAr.indexOf(resID) != -1){
									mxV = 100;
								}
							}
							
							footercon = $("#PMLoadgrid").find('tbody').find('tr.k-group-footer').eq(rwindx);
							obj.row = rwindx;
							obj.col = ''
							columnmap.push(obj);
							var columnC = 0;
							var yearIndx = 7;
							$(this).find('td').each(function(y){
								var yearC = $('[role="rowgroup"]').eq(0).find('tr').eq(0).find('th').eq(yearIndx).text();
								var ind =$(this).index()
								if(!isNaN(parseInt($(this).text()))){//ind>4){
									columnC++;
									var monthname = $('[role="rowgroup"]').eq(0).find('tr').eq(1).find('th').eq(columnC).text();
									if(monthname == 'Dec'){
										yearIndx++;
									}
									var columnMonname = monthname+'_'+yearC;//Apr_2023
									
									if(RM_MaxUnites){
										if(capacityResArr.length > 0){
											mxV = capacityResArr[0][columnMonname];
										}
										/* for (var j = 0; j < getCapcity.length; j++) {											  												
											if(resID == getCapcity[j].Projectuid){													
												mxV = getCapcity[j][columnMonname];
											}
										} */
									}
									else{
										mxV = mxV;
									}
									var TotalallocationUnit = parseFloat($(this).text().replace('%',''));
									var filteredcolumn = columnmap.filter(function(x){return x.row == rowV})/* [columnmap.filter(function(x){return x.row == rowV}).length-1]; */
								//	var calc = (mxV * MGrid.ProjectFilterValue)/100;
																		
									var calc =ResourceIsGeneric == 'True' || ResourceIsActive == 'False'? 0:(mxV * MGrid.ProjectFilterValue)/100
									if(RM_MaxUnites){
										calc =ResourceIsGeneric == 'True'? 0:(RM_MaxUnites == true? (mxV * MGrid.ProjectFilterValue)/100:MGrid.ProjectFilterValue);
									}
									//(RM_MaxUnites == true? (mxV * MGrid.ProjectFilterValue)/100:MGrid.ProjectFilterValue);
									//var allv = TotalallocationUnit && filteredcolumn.filter(function(x){return x.col == ind}).length == 0
									if(TotalallocationUnit != 0 && calc != 0 || TotalallocationUnit > 0 && calc == 0){
									if(TotalallocationUnit  < parseFloat(calc)&& filteredcolumn.filter(function(x){return x.col == ind}).length == 0){
										$(this).css('color',cls)
										if(rpistrue){
											footercon.find('td').eq(ind+1).css('color',cls)
											footercon.find('td').eq(ind+1).find('span').css('color',cls)
										}
										else{
											footercon.find('td').eq(ind+2).css('color',cls)
											footercon.find('td').eq(ind+2).find('span').css('color',cls)
										}
										objj = {};
										objj.col = ind;
										objj.row = rowV;
										columnmap.push(objj);
									}
									 else if(filteredcolumn.filter(function(x){return x.col == ind}).length != 0){
										
										} 
										else{
											$(this).css('color','black')
											if(rpistrue){
												footercon.find('td').eq(ind+1).css('color','black')
												footercon.find('td').eq(ind+1).find('span').css('color','black')
											}
											else{
												footercon.find('td').eq(ind+2).css('color','black')
												footercon.find('td').eq(ind+2).find('span').css('color','black')
											}
										}
									}else{
											$(this).css('color','black')
											if(rpistrue){
												footercon.find('td').eq(ind+1).css('color','black')
												footercon.find('td').eq(ind+1).find('span').css('color','black')
											}
											else{
												footercon.find('td').eq(ind+2).css('color','black')
												footercon.find('td').eq(ind+2).find('span').css('color','black')
											}
										}
								}				
							});
						});
					}				
					if(MGrid.Formula == 'Less than or equal to|le'){
						/* if(MGrid.ProjectFilter.indexOf('#') != -1){
									var hcol =MGrid.ProjectFilter.replace("#", "")
									 cls = hcol.trim();
								 }
						$('.DC'+cls).css('color', MGrid.ProjectFilter); */
						$("#PMLoadgrid").find('tbody').find('tr.k-grouping-row').each(function(x){
							
							var rwindx = $(this).index('.k-grouping-row');
							rowV = rwindx;
							var stringmx = $("#PMLoadgrid").find('tbody').find('tr.k-group-footer').eq(rwindx).find('td').eq(2).text();
							var resID = $(this).find('#resId_grid').text();
							/* if(RM_MaxUnites){
								mxV = parseFloat(stringmx.match(/(\d+)/)[0]);	
							}
							else{
								mxV = 100
							} */
							var ResourceIsGeneric = 'False'
							var ResourceIsActive = 'False'
							if(arr_AGGetProject_ID.indexOf(resID)!=-1)
							{
								var lidx=arr_AGGetProject_ID.indexOf(resID)
								ResourceIsGeneric = arr_AGGetProject_Generic[lidx];
								ResourceIsActive = arr_AGGetProject_Active[lidx]
							}
							/*for (var j = 0; j < AGGetProject.length; j++) {
								
								if(resID== AGGetProject[j].ResourceId){
									ResourceIsGeneric = AGGetProject[j].ResourceIsGeneric;
									ResourceIsActive = AGGetProject[j].ResourceIsActive
								}
								
							}*/
							var capacityResArr= [];
							mxV = 0;
							if(RM_MaxUnites){
							for (var j = 0; j < getCapcity.length; j++) {											  												
									if(resID == getCapcity[j].Projectuid){													
										//mxV = getCapcity[j][columnMonname];
										capacityResArr.push(getCapcity[j]);									
									}
								}
							}
							else{
								if(ResGenericAr.indexOf(resID) == -1 && ResActiveAr.indexOf(resID) != -1){
									mxV = 100;
								}
							}
							footercon = $("#PMLoadgrid").find('tbody').find('tr.k-group-footer').eq(rwindx);
							obj.row = rwindx;
							obj.col = ''
							columnmap.push(obj);
							var columnC = 0;
							var yearIndx = 7;
							$(this).find('td').each(function(y){
								var yearC = $('[role="rowgroup"]').eq(0).find('tr').eq(0).find('th').eq(yearIndx).text();
								var ind =$(this).index()
								if(!isNaN(parseInt($(this).text()))){//ind>4){
									columnC++;
									var monthname = $('[role="rowgroup"]').eq(0).find('tr').eq(1).find('th').eq(columnC).text();
									if(monthname == 'Dec'){
										yearIndx++;
									}
									var columnMonname = monthname+'_'+yearC;//Apr_2023
									
									if(RM_MaxUnites){
										if(capacityResArr.length > 0){
											mxV = capacityResArr[0][columnMonname];
										}
										/* for (var j = 0; j < getCapcity.length; j++) {											  												
											if(resID == getCapcity[j].Projectuid){													
												mxV = getCapcity[j][columnMonname];
											}
										} */
									}
									else{
										mxV = mxV;
									}
									var TotalallocationUnit = parseFloat($(this).text().replace('%',''));
									var filteredcolumn = columnmap.filter(function(x){return x.row == rowV})/* [columnmap.filter(function(x){return x.row == rowV}).length-1]; */
								//	var calc = (mxV * MGrid.ProjectFilterValue)/100;
									var calc =ResourceIsGeneric == 'True' || ResourceIsActive == 'False'? 0:(mxV * MGrid.ProjectFilterValue)/100
									if(RM_MaxUnites){
										calc =ResourceIsGeneric == 'True'? 0:(RM_MaxUnites == true? (mxV * MGrid.ProjectFilterValue)/100:MGrid.ProjectFilterValue);
									}
									//(RM_MaxUnites == true? (mxV * MGrid.ProjectFilterValue)/100:MGrid.ProjectFilterValue);
									if(TotalallocationUnit != 0 && calc != 0 || TotalallocationUnit > 0 && calc == 0){
									if(TotalallocationUnit <= parseFloat(calc) && filteredcolumn.filter(function(x){return x.col == ind}).length == 0){
										$(this).css('color',cls)
										if(rpistrue){
											footercon.find('td').eq(ind+1).css('color',cls)
											footercon.find('td').eq(ind+1).find('span').css('color',cls)
										}
										else{
											footercon.find('td').eq(ind+2).css('color',cls)
											footercon.find('td').eq(ind+2).find('span').css('color',cls)
										}
										objj = {};
										objj.col = ind;
										objj.row = rowV;
										columnmap.push(objj);
									}
									 else if(filteredcolumn.filter(function(x){return x.col == ind}).length != 0){
										
									} 
									else{
										$(this).css('color','black')
										if(rpistrue){
											footercon.find('td').eq(ind+1).css('color','black')
											footercon.find('td').eq(ind+1).find('span').css('color','black')
										}
										else{
											footercon.find('td').eq(ind+2).css('color','black')
											footercon.find('td').eq(ind+2).find('span').css('color','black')
										}
									}
									}
									else{
										$(this).css('color','black')
										if(rpistrue){
											footercon.find('td').eq(ind+1).css('color','black')
											footercon.find('td').eq(ind+1).find('span').css('color','black')
										}
										else{
											footercon.find('td').eq(ind+2).css('color','black')
											footercon.find('td').eq(ind+2).find('span').css('color','black')
										}
									}
								}				
							});
						});						
					}
					
					if(MGrid.Formula == 'Equal to|eq'){
						/* if(MGrid.ProjectFilter.indexOf('#') != -1){
									var hcol =MGrid.ProjectFilter.replace("#", "")
									 cls = hcol.trim();
								 }
						$('.DC'+cls).css('color', MGrid.ProjectFilter); */
						$("#PMLoadgrid").find('tbody').find('tr.k-grouping-row').each(function(x){
							
							var rwindx = $(this).index('.k-grouping-row');
							rowV = rwindx;
							var stringmx = $("#PMLoadgrid").find('tbody').find('tr.k-group-footer').eq(rwindx).find('td').eq(2).text();
							var resID = $(this).find('#resId_grid').text();
							/* if(RM_MaxUnites){
								mxV = parseFloat(stringmx.match(/(\d+)/)[0]);	
							}
							else{
								mxV = 100
							} */
							var ResourceIsGeneric = 'False'
							var ResourceIsActive = 'False'
							if(arr_AGGetProject_ID.indexOf(resID)!=-1)
							{
								var lidx=arr_AGGetProject_ID.indexOf(resID)
								ResourceIsGeneric = arr_AGGetProject_Generic[lidx];
								ResourceIsActive = arr_AGGetProject_Active[lidx]
							}
							/*for (var j = 0; j < AGGetProject.length; j++) {
								
								if(resID== AGGetProject[j].ResourceId){
									ResourceIsGeneric = AGGetProject[j].ResourceIsGeneric;
									ResourceIsActive = AGGetProject[j].ResourceIsActive
								}
								
							}*/
							var capacityResArr= [];
							mxV = 0;
							if(RM_MaxUnites){
							for (var j = 0; j < getCapcity.length; j++) {											  												
									if(resID == getCapcity[j].Projectuid){													
										//mxV = getCapcity[j][columnMonname];
										capacityResArr.push(getCapcity[j]);									
									}
								}
							}
							else{
								if(ResGenericAr.indexOf(resID) == -1 && ResActiveAr.indexOf(resID) != -1){
									mxV = 100;
								}
							}
							footercon = $("#PMLoadgrid").find('tbody').find('tr.k-group-footer').eq(rwindx);
							obj.row = rwindx;
							obj.col = ''
							columnmap.push(obj);
							var columnC = 0;
							var yearIndx = 7;
							$(this).find('td').each(function(y){
								var yearC = $('[role="rowgroup"]').eq(0).find('tr').eq(0).find('th').eq(yearIndx).text();
								var ind =$(this).index()
								if(!isNaN(parseInt($(this).text()))){//ind>4){
									columnC++;
									var monthname = $('[role="rowgroup"]').eq(0).find('tr').eq(1).find('th').eq(columnC).text();
									if(monthname == 'Dec'){
										yearIndx++;
									}
									var columnMonname = monthname+'_'+yearC;//Apr_2023
									
									if(RM_MaxUnites){
										if(capacityResArr.length > 0){
											mxV = capacityResArr[0][columnMonname];
										}
										/* for (var j = 0; j < getCapcity.length; j++) {											  												
											if(resID == getCapcity[j].Projectuid){													
												mxV = getCapcity[j][columnMonname];
											}
										} */
									}
									else{
										mxV = mxV;
									}
									
									var TotalallocationUnit = parseFloat($(this).text().replace('%',''));
									var filteredcolumn = columnmap.filter(function(x){return x.row == rowV})/* [columnmap.filter(function(x){return x.row == rowV}).length-1]; */
									//var calc = (mxV * MGrid.ProjectFilterValue)/100;
									var calc =ResourceIsGeneric == 'True' || ResourceIsActive == 'False'? 0:(mxV * MGrid.ProjectFilterValue)/100;
									if(RM_MaxUnites){
										calc =ResourceIsGeneric == 'True'? 0:(RM_MaxUnites == true? (mxV * MGrid.ProjectFilterValue)/100:MGrid.ProjectFilterValue);
									}
									//(RM_MaxUnites == true? (mxV * MGrid.ProjectFilterValue)/100:MGrid.ProjectFilterValue);
									if(TotalallocationUnit != 0 && calc != 0 || TotalallocationUnit > 0 && calc == 0){
									if(parseFloat(calc) == TotalallocationUnit && filteredcolumn.filter(function(x){return x.col == ind}).length == 0){
										$(this).css('color',cls)
										if(rpistrue){
											footercon.find('td').eq(ind+1).css('color',cls)
											footercon.find('td').eq(ind+1).find('span').css('color',cls)
										}
										else{
											footercon.find('td').eq(ind+2).css('color',cls)
											footercon.find('td').eq(ind+2).find('span').css('color',cls)
										}
										objj = {};
										objj.col = ind;
										objj.row = rowV;
										columnmap.push(objj);
									}
									 else if(filteredcolumn.filter(function(x){return x.col == ind}).length != 0){
										
									} 
									else{
										$(this).css('color','black')
										if(rpistrue){
											footercon.find('td').eq(ind+1).css('color','black')
											footercon.find('td').eq(ind+1).find('span').css('color','black')
										}
										else{
											footercon.find('td').eq(ind+2).css('color','black')
											footercon.find('td').eq(ind+2).find('span').css('color','black')
										}
									}
									}else{
										$(this).css('color','black')
										if(rpistrue){
											footercon.find('td').eq(ind+1).css('color','black')
											footercon.find('td').eq(ind+1).find('span').css('color','black')
										}
										else{
											footercon.find('td').eq(ind+2).css('color','black')
											footercon.find('td').eq(ind+2).find('span').css('color','black')
										}
									}
								}				
							});
						});
					}
					if(MGrid.Formula == 'Greater than|gt'){
					/* 	if(MGrid.ProjectFilter.indexOf('#') != -1){
									var hcol =MGrid.ProjectFilter.replace("#", "")
									 cls = hcol.trim();
								 }
						$('.DC'+cls).css('color', MGrid.ProjectFilter); */
						$("#PMLoadgrid").find('tbody').find('tr.k-grouping-row').each(function(x){
							
							var rwindx = $(this).index('.k-grouping-row');
							rowV = rwindx;
							var stringmx = $("#PMLoadgrid").find('tbody').find('tr.k-group-footer').eq(rwindx).find('td').eq(2).text();
							/*(if(RM_MaxUnites){
								mxV = parseFloat(stringmx.match(/(\d+)/)[0]);	
							}
							else{
								mxV = 100
							}*/
							var resID = $(this).find('#resId_grid').text();	
							var ResourceIsGeneric = 'False'
							var ResourceIsActive = 'False'
							if(arr_AGGetProject_ID.indexOf(resID)!=-1)
							{
								var lidx=arr_AGGetProject_ID.indexOf(resID)
								ResourceIsGeneric = arr_AGGetProject_Generic[lidx];
								ResourceIsActive = arr_AGGetProject_Active[lidx]
							}
							/*for (var j = 0; j < AGGetProject.length; j++) {
								
								if(resID== AGGetProject[j].ResourceId){
									ResourceIsGeneric = AGGetProject[j].ResourceIsGeneric;
									ResourceIsActive = AGGetProject[j].ResourceIsActive
								}
								
							}*/
							var capacityResArr= [];
							mxV = 0;
							if(RM_MaxUnites){
							for (var j = 0; j < getCapcity.length; j++) {											  												
									if(resID == getCapcity[j].Projectuid){													
										//mxV = getCapcity[j][columnMonname];
										capacityResArr.push(getCapcity[j]);									
									}
								}
							}
							else{
								if(ResGenericAr.indexOf(resID) == -1 && ResActiveAr.indexOf(resID) != -1){
									mxV = 100;
								}
							}
							footercon = $("#PMLoadgrid").find('tbody').find('tr.k-group-footer').eq(rwindx);
							obj.row = rwindx;
							obj.col = ''
							columnmap.push(obj);
							var columnC = 0;
							var yearIndx = 7;
							$(this).find('td').each(function(y){
								var yearC = $('[role="rowgroup"]').eq(0).find('tr').eq(0).find('th').eq(yearIndx).text();
								var ind =$(this).index()
								if(!isNaN(parseInt($(this).text()))){//ind>4){
									columnC++;
									var monthname = $('[role="rowgroup"]').eq(0).find('tr').eq(1).find('th').eq(columnC).text();
									if(monthname == 'Dec'){
										yearIndx++;
									}
									var columnMonname = monthname+'_'+yearC;//Apr_2023
									
									if(RM_MaxUnites){
										if(capacityResArr.length > 0){
											mxV = capacityResArr[0][columnMonname];
										}
										/* for (var j = 0; j < getCapcity.length; j++) {											  												
											if(resID == getCapcity[j].Projectuid){													
												mxV = getCapcity[j][columnMonname];
											}
										} */
									}
									else{
										mxV = mxV;
									}
									
									var TotalallocationUnit = parseFloat($(this).text().replace('%',''));
									var filteredcolumn = columnmap.filter(function(x){return x.row == rowV})/* [columnmap.filter(function(x){return x.row == rowV}).length-1]; */
									//var calc = (mxV * MGrid.ProjectFilterValue)/100;
									var calc =ResourceIsGeneric == 'True' || ResourceIsActive == 'False'? 0:(mxV * MGrid.ProjectFilterValue)/100;
									if(RM_MaxUnites){
										calc =ResourceIsGeneric == 'True'? 0:(RM_MaxUnites == true? (mxV * MGrid.ProjectFilterValue)/100:MGrid.ProjectFilterValue);
									}
									//(RM_MaxUnites == true? (mxV * MGrid.ProjectFilterValue)/100:MGrid.ProjectFilterValue);
									if(TotalallocationUnit != 0 && calc != 0 || TotalallocationUnit > 0 && calc == 0){
									if(TotalallocationUnit > parseFloat(calc) && filteredcolumn.filter(function(x){return x.col == ind}).length == 0){
										$(this).css('color',cls)
										if(rpistrue){
											footercon.find('td').eq(ind+1).css('color',cls)
											footercon.find('td').eq(ind+1).find('span').css('color',cls)
										}
										else{
											footercon.find('td').eq(ind+2).css('color',cls)
											footercon.find('td').eq(ind+2).find('span').css('color',cls)
										}
										objj = {};
										objj.col = ind;
										objj.row = rowV;
										columnmap.push(objj);
									}
									 else if(filteredcolumn.filter(function(x){return x.col == ind}).length != 0){
										
									} 
									else{
										$(this).css('color','black')
										if(rpistrue){
											footercon.find('td').eq(ind+1).css('color','black')
											footercon.find('td').eq(ind+1).find('span').css('color','black')
										}
										else{
											footercon.find('td').eq(ind+2).css('color','black')
											footercon.find('td').eq(ind+2).find('span').css('color','black')
										}
									}
									}
									else{
										$(this).css('color','black')
										if(rpistrue){
											footercon.find('td').eq(ind+1).css('color','black')
											footercon.find('td').eq(ind+1).find('span').css('color','black')
										}
										else{
											footercon.find('td').eq(ind+2).css('color','black')
											footercon.find('td').eq(ind+2).find('span').css('color','black')
										}
									}

							
								}				
							});
						});
						
					}
					if(MGrid.Formula == 'Greater than or equal to|ge'){
						
						
								/*  if(MGrid.ProjectFilter.indexOf('#') != -1){
									var hcol =MGrid.ProjectFilter.replace("#", "")
									 cls = hcol.trim();
								 }
								 
								
						$('.DC'+cls).css('color', MGrid.ProjectFilter); */
						
						$("#PMLoadgrid").find('tbody').find('tr.k-grouping-row').each(function(x){
							
							var rwindx = $(this).index('.k-grouping-row');
							rowV = rwindx;
							var stringmx = $("#PMLoadgrid").find('tbody').find('tr.k-group-footer').eq(rwindx).find('td').eq(2).text();
							var resID = $(this).find('#resId_grid').text();
							/* if(RM_MaxUnites){
								mxV = parseFloat(stringmx.match(/(\d+)/)[0]);	
							}
							else{
								mxV = 100
							} */
							var ResourceIsGeneric = 'False'
							var ResourceIsActive = 'False'
							if(arr_AGGetProject_ID.indexOf(resID)!=-1)
							{
								var lidx=arr_AGGetProject_ID.indexOf(resID)
								ResourceIsGeneric = arr_AGGetProject_Generic[lidx];
								ResourceIsActive = arr_AGGetProject_Active[lidx]
							}
							/*for (var j = 0; j < AGGetProject.length; j++) {
								
								if(resID== AGGetProject[j].ResourceId){
									ResourceIsGeneric = AGGetProject[j].ResourceIsGeneric;
									ResourceIsActive = AGGetProject[j].ResourceIsActive
								}
								
							}*/
							var capacityResArr= [];
							
							mxV = 0;
							
							if(RM_MaxUnites){
							for (var j = 0; j < getCapcity.length; j++) {											  												
									if(resID == getCapcity[j].Projectuid){													
										//mxV = getCapcity[j][columnMonname];
										capacityResArr.push(getCapcity[j]);									
									}
								}
							}
							else{
								if(ResGenericAr.indexOf(resID) == -1 && ResActiveAr.indexOf(resID) != -1){
									mxV = 100;
								}
							}
							footercon = $("#PMLoadgrid").find('tbody').find('tr.k-group-footer').eq(rwindx);
							obj.row = rwindx;
							obj.col = ''
							columnmap.push(obj);
							var columnC = 0;
							var yearIndx = 7;
							$(this).find('td').each(function(y){
								var yearC = $('[role="rowgroup"]').eq(0).find('tr').eq(0).find('th').eq(yearIndx).text();
								var ind =$(this).index();								
								if(!isNaN(parseInt($(this).text()))){//ind>4){
									columnC++;
									var monthname = $('[role="rowgroup"]').eq(0).find('tr').eq(1).find('th').eq(columnC).text();
									if(monthname == 'Dec'){
										yearIndx++;
									}
									var columnMonname = monthname+'_'+yearC;//Apr_2023
									
									if(RM_MaxUnites){
										if(capacityResArr.length > 0){
											mxV = capacityResArr[0][columnMonname];
										}
										/* for (var j = 0; j < getCapcity.length; j++) {											  												
											if(resID == getCapcity[j].Projectuid){													
												mxV = getCapcity[j][columnMonname];
											}
										} */
									}
									else{
										mxV = mxV;
									}
									var TotalallocationUnit = parseFloat($(this).text().replace('%',''));
									var filteredcolumn = columnmap.filter(function(x){return x.row == rowV})/* [columnmap.filter(function(x){return x.row == rowV}).length-1]; */
									var calc =ResourceIsGeneric == 'True' || ResourceIsActive == 'False'? 0: (mxV * MGrid.ProjectFilterValue)/100
									if(RM_MaxUnites){
										calc =ResourceIsGeneric == 'True'? 0:(RM_MaxUnites == true? (mxV * MGrid.ProjectFilterValue)/100:MGrid.ProjectFilterValue);
									}
									//(RM_MaxUnites == true? (mxV * MGrid.ProjectFilterValue)/100:MGrid.ProjectFilterValue);
									if(TotalallocationUnit != 0 && calc != 0 || TotalallocationUnit > 0 && calc == 0){		
									if(TotalallocationUnit >= parseFloat(calc) && filteredcolumn.filter(function(x){return x.col == ind}).length == 0){										
										$(this).css('color',cls)
										if(rpistrue){
											footercon.find('td').eq(ind+1).css('color',cls)
											footercon.find('td').eq(ind+1).find('span').css('color',cls)
										}
										else{
											footercon.find('td').eq(ind+2).css('color',cls)
											footercon.find('td').eq(ind+2).find('span').css('color',cls)
										}
										objj = {};
										objj.col = ind;
										objj.row = rowV;
										columnmap.push(objj);
									}
									else if(filteredcolumn.filter(function(x){return x.col == ind}).length != 0){
										
									} 
									else{
										$(this).css('color','black')
										if(rpistrue){
											footercon.find('td').eq(ind+1).css('color','black')
											footercon.find('td').eq(ind+1).find('span').css('color','black')
										}
										else{
											footercon.find('td').eq(ind+2).css('color','black')
											footercon.find('td').eq(ind+2).find('span').css('color','black')
										}
									}
									}else{
										$(this).css('color','black')
										if(rpistrue){
											footercon.find('td').eq(ind+1).css('color','black')
											footercon.find('td').eq(ind+1).find('span').css('color','black')
										}
										else{
											footercon.find('td').eq(ind+2).css('color','black')
											footercon.find('td').eq(ind+2).find('span').css('color','black')
										}
									}
								}				
							});
						});
					}
					if(MGrid.Formula == 'Between2'){
						/* var vdc = MGrid.FormulaNumber.toString()
						$(".Between"+vdc).css('color', MGrid.ProjectFilter);	 */	
						var ifnb1 = parseInt(MGrid.ProjectFilterValue.split('-')[0])
						var ifnb2 = parseInt(MGrid.ProjectFilterValue.split('-')[1])
						$("#PMLoadgrid").find('tbody').find('tr.k-grouping-row').each(function(x){
							
							var rwindx = $(this).index('.k-grouping-row');
							rowV = rwindx;
							var stringmx = $("#PMLoadgrid").find('tbody').find('tr.k-group-footer').eq(rwindx).find('td').eq(2).text();
							if(RM_MaxUnites){
								mxV = parseFloat(stringmx.match(/(\d+)/)[0]);	
							}
							else{
								mxV = 100
							}
							footercon = $("#PMLoadgrid").find('tbody').find('tr.k-group-footer').eq(rwindx);
							obj.row = rwindx;
							obj.col = ''
							columnmap.push(obj);
							$(this).find('td').each(function(y){
								var ind =$(this).index()
								if(!isNaN(parseInt($(this).text()))){//ind>4){
									var TotalallocationUnit = parseFloat($(this).text().replace('%',''));
									var filteredcolumn = columnmap.filter(function(x){return x.row == rowV})/* [columnmap.filter(function(x){return x.row == rowV}).length-1]; */
									var calc = (mxV * MGrid.ProjectFilterValue)/100;
									var ifnb1 = (mxV*parseInt(MGrid.ProjectFilterValue.split('-')[0]))/100;
									var ifnb2 = (mxV*parseInt(MGrid.ProjectFilterValue.split('-')[1]))/100;
									if((ifnb2 > TotalallocationUnit && ifnb1 < TotalallocationUnit)&& filteredcolumn.filter(function(x){return x.col == ind}).length == 0){
										$(this).css('color',cls)
										if(rpistrue){
											footercon.find('td').eq(ind+1).css('color',cls)
											footercon.find('td').eq(ind+1).find('span').css('color',cls)
										}
										else{
											footercon.find('td').eq(ind+2).css('color',cls)
											footercon.find('td').eq(ind+2).find('span').css('color',cls)
										}
										objj = {};
										objj.col = ind;
										objj.row = rowV;
										columnmap.push(objj);
									}
									 else if(filteredcolumn.filter(function(x){return x.col == ind}).length != 0){
										
									} 
									else{
										$(this).css('color','black')
										if(rpistrue){
											footercon.find('td').eq(ind+1).css('color','black')
											footercon.find('td').eq(ind+1).find('span').css('color','black')
										}
										else{
											footercon.find('td').eq(ind+2).css('color','black')
											footercon.find('td').eq(ind+2).find('span').css('color','black')
										}
									}																												
								}				
							});
						});
					}
				
				}				
			});
		}
	
	function mycellFunc(data,field,name) {
		//debugger
	}
	var singleProposed = false;
	var singleRejected = false;
	var rpistrue = false;
	var runonce = true;
	var Proposedcolumexsist = true;
	function onDataBound(e) {
		if(filteredGrid){
			return;
		}
		/* if(filteredreturn){
			filteredreturn = false
			$('#PMLoadgrid').data("kendoGrid").dataSource.filter({});
			
		} */
			setInactiveResIcon();
			removeSpecial();
            var grid = $("#PMLoadgrid").data("kendoGrid");
            var data = grid.dataSource.data();
			var yname = []
			var Yindex=[]
			var gc= 7
			var gtc= 8
			if(rpistrue){
				gc= 2
				gtc= 3
			}
			for (var i = 0; i < grid.columns.length; i++) {
				if(isNaN(parseInt(grid.columns[i].title))){ //"Chat", "Delete", "Commitment"
					continue;
				}
				 for (var j = 0; j < grid.columns[i].columns.length; j++) {
				 //Yindex.push(i)
				 yname.push(grid.columns[i].columns[j].field)
				 }
			 }
			 
//debugger			 
			var firstCell = e.sender.element.find(".k-grouping-row td:first-child");
			firstCell.attr("colspan", 2);
			if(RM_Chat && RM_Delete && RM_Commit && RM_Reject){

			}
			if(rpistrue){	  //e.sender.element.find(".k-grouping-row").find('td').eq(0).text(e.sender.element.find(".k-grouping-row").find('td').eq(0).text().split('^')[0])
				var flag = true;
			var getCapcity_len = getCapcity.length;
			 $.each(data, function (i, row) {					
					var element = $('#PMLoadgrid tr[data-uid="' + row.uid + '"] ');
					singleProposed = false;
					singleRejected = false;
					var count = 0;
					var commitIndx = 0;
					var rejctIndx = 0;
					
					var findtd_element = $(element).find('td');
					var tr_data_uid_len = findtd_element.length;
					for (var i = 0; i < tr_data_uid_len; i++) {
						if(findtd_element.eq(i).html().indexOf('CommittedItem()') != -1) {
							commitIndx = i;
						}
						if(findtd_element.eq(i).html().indexOf('rejectItem()') != -1) {
							rejctIndx = i;
						}
						
						var tdVal = findtd_element[i];
						var tdVal_txt = $(tdVal).text();
						if(isNaN(tdVal_txt.replace('%','')) || tdVal_txt.trim() == '' ){
							count++;
							continue;
						}
						
						if(row.Resourcename != 'No Allocation'){
							var monthcell = yname[i-count]
							var gethname = yname[i-count]+'_Status'
							var Capacity =0
							if(RM_MaxUnites){
								if(arr_getCapcity_Project.indexOf(row.Projectuid )!=-1)
								{
									var c_idx=arr_getCapcity_Project.indexOf(row.Projectuid )
									Capacity =getCapcity[c_idx][monthcell];
								}
								/*for (var j = 0; j < getCapcity.length; j++){
									if(row.Projectuid == getCapcity[j].Projectuid){													
										Capacity =getCapcity[j][monthcell];
									}
								}*/
							  }
							else{
								for (var j = 0; j < getCapcity.length; j++) {
									if(row.Projectuid == getCapcity[j].Projectuid){													
										/* if(getCapcity[j].ResourceIsActive == "True" && getCapcity[j].ResourceIsGeneric == 'False'){
										   Capacity =100;
										} */
										if(ResGenericAr.indexOf(getCapcity[j].Projectuid) == -1 && ResActiveAr.indexOf(getCapcity[j].Projectuid) != -1){
											Capacity = 100;
										} 
									}
								}
							}
							
							if(row[gethname] == "Proposed" && RM_Commit){
								var tdclass = findtd_element[i]
								$(tdclass).addClass("change-background");
								//$(tdclass).prop( "disabled", true )
								singleProposed = true;
								singleRejected = true;
							}	
								
							
							if(row[gethname] == "Rejected" && RM_Reject){
								var tdclass = findtd_element[i];
								var tdclass_txt = $(tdclass).text();
								$(tdclass).addClass("change-background2");
								//$(tdclass).prop( "disabled", true )
								singleProposed = true;
								var currentUnit = parseFloat($(tdclass).text().replace('%',''));
								var allocationUnit = parseFloat($($(tdclass).closest('tr').prevAll('tr.k-grouping-row:first').find('td')[i-1]).text().replace('%',''));
								var availableUnit = parseFloat($($(tdclass).closest('tr').nextAll('tr.k-group-footer:first').find('td')[i]).text().replace('%',''));
								var TotalallocationUnit = allocationUnit - currentUnit;
								//var TotalavailableUnit = availableUnit+currentUnit;
								var TotalavailableUnit = Capacity-TotalallocationUnit//;availableUnit+currentUnit;
								$($(tdclass).closest('tr').prevAll('tr.k-grouping-row:first').find('td')[i-1]).text(TotalallocationUnit+'%'); 
								$($(tdclass).closest('tr').nextAll('tr.k-group-footer:first').find('td')[i]).text(TotalavailableUnit+'%');								
							}else{
								var tdclass = findtd_element[i];								
								var currentUnit = parseFloat($(tdclass).text().replace('%',''));
								var allocationUnit = parseFloat($($(tdclass).closest('tr').prevAll('tr.k-grouping-row:first').find('td')[i-1]).text().replace('%',''));
								var availableUnit = parseFloat($($(tdclass).closest('tr').nextAll('tr.k-group-footer:first').find('td')[i]).text().replace('%',''));
								var TotalallocationUnit = allocationUnit - currentUnit;
								//var TotalavailableUnit = availableUnit+currentUnit;
								var TotalavailableUnit = Capacity-allocationUnit//;availableUnit+currentUnit;
								//$($(tdclass).closest('tr').prevAll('tr.k-grouping-row:first').find('td')[i-3]).text(TotalallocationUnit+'%'); 
								$($(tdclass).closest('tr').nextAll('tr.k-group-footer:first').find('td')[i]).text(TotalavailableUnit+'%');
							}	
							if(row[gethname] == "Committed"){
								var tdclass = findtd_element[i];
								$(tdclass).addClass("change-background3");
								//$(tdclass).prop( "disabled", true )
								singleRejected = true;
							}
						}
					}
					/*}
					else if(row.AllocationStatus  == "Rejected"){
						 var element = $('tr[data-uid="' + row.uid + '"] ');
						$(element).addClass("change-background2");
					}*/
					/* if(!singleProposed){
						$(element).find('td').eq(5).html('');
					}
					 if(!singleRejected){
						$(element).find('td').eq(6).html('');
					}  */
					//var uid_Res = findtd_element.eq(1).text()
					if(RM_Reject){
						if(findtd_element.eq(-4).text() == 0 || ResGenericAr.indexOf(row.Projectuid) != -1){
							findtd_element.eq(rejctIndx).html('');
						}
					}
					if(RM_Commit){
						if(findtd_element.eq(-3).text() == 0 || ResGenericAr.indexOf(row.Projectuid) != -1){
							findtd_element.eq(commitIndx).html('');
						}
					}
				});
            
			}else{
				var flag = true;
				var getCapcity_len = getCapcity.length;
				$.each(data, function (i, row) {					
					var element = $('#PMLoadgrid tr[data-uid="' + row.uid + '"] ');
					singleProposed = false;
					singleRejected = false;
					var count = 0;
					var commitIndx = 0;
					var rejctIndx = 0;
					
					var findtd_element = $(element).find('td');
					var tr_data_uid_len = findtd_element.length;
					for (var i = 0; i < tr_data_uid_len; i++) {
						if(findtd_element.eq(i).html().indexOf('CommittedItem()') != -1) {
							commitIndx = i;
						}
						if(findtd_element.eq(i).html().indexOf('rejectItem()') != -1) {
							rejctIndx = i;
						}
						
						var tdVal = findtd_element[i];
						var tdVal_txt = $(tdVal).text();
						if(isNaN(tdVal_txt.replace('%','')) || tdVal_txt.trim() == '' ){
							count++;
							continue;
						}
						
							if(row.Resourcename != 'No Allocation'){
								var monthcell = yname[i-count]
								var gethname = yname[i-count]+'_Status'
								var Capacity =0
								if(RM_MaxUnites){
									if(arr_getCapcity_Project.indexOf(row.Projectuid )!=-1)
								{
									var c_idx=arr_getCapcity_Project.indexOf(row.Projectuid )
									Capacity =getCapcity[c_idx][monthcell];
								}
									/*for (var j = 0; j < getCapcity.length; j++){
										if(row.Projectuid == getCapcity[j].Projectuid){													
											Capacity =getCapcity[j][monthcell];
										}
									}*/
								  }
								else{
									for (var j = 0; j < getCapcity.length; j++) {
										if(row.Projectuid == getCapcity[j].Projectuid){													
											/* if(getCapcity[j].ResourceIsActive == "True" && getCapcity[j].ResourceIsGeneric == 'False'){
											   Capacity =100;
											} */
											if(ResGenericAr.indexOf(getCapcity[j].Projectuid) == -1 && ResActiveAr.indexOf(getCapcity[j].Projectuid) != -1){
												Capacity = 100;
											} 
										}
									}
								}
								
								if(row[gethname] == "Proposed" && RM_Commit){
									var tdclass = findtd_element[i]
									$(tdclass).addClass("change-background");
									//$(tdclass).prop( "disabled", true )
									singleProposed = true;
									singleRejected = true;
								}	
								
								if(row[gethname] == "Rejected" && RM_Reject){
									var tdclass = findtd_element[i];
									var tdclass_txt = $(tdclass).text();
									$(tdclass).addClass("change-background2");
									//$(tdclass).prop( "disabled", true )
									singleProposed = true;
									var currentUnit = parseFloat($(tdclass).text().replace('%',''));
									var allocationUnit = parseFloat($($(tdclass).closest('tr').prevAll('tr.k-grouping-row:first').find('td')[i-2]).text().replace('%',''));
									var availableUnit = parseFloat($($(tdclass).closest('tr').nextAll('tr.k-group-footer:first').find('td')[i]).text().replace('%',''));
									var TotalallocationUnit = allocationUnit - currentUnit;
									//var TotalavailableUnit = availableUnit+currentUnit;
									var TotalavailableUnit = Capacity-TotalallocationUnit//;availableUnit+currentUnit;
									$($(tdclass).closest('tr').prevAll('tr.k-grouping-row:first').find('td')[i-2]).text(TotalallocationUnit+'%'); 
									$($(tdclass).closest('tr').nextAll('tr.k-group-footer:first').find('td')[i]).text(TotalavailableUnit+'%');
									//$($(tdclass).closest('tr').nextAll('tr.k-group-footer:first').find('td')[i]).addClass("green");
								}else{
									var tdclass = findtd_element[i];								
									var currentUnit = parseFloat($(tdclass).text().replace('%',''));
									var allocationUnit = parseFloat($($(tdclass).closest('tr').prevAll('tr.k-grouping-row:first').find('td')[i-2]).text().replace('%',''));
									var availableUnit = parseFloat($($(tdclass).closest('tr').nextAll('tr.k-group-footer:first').find('td')[i]).text().replace('%',''));
									var TotalallocationUnit = allocationUnit - currentUnit;
									//var TotalavailableUnit = availableUnit+currentUnit;
									var TotalavailableUnit = Capacity-allocationUnit//;availableUnit+currentUnit;
									//$($(tdclass).closest('tr').prevAll('tr.k-grouping-row:first').find('td')[i-3]).text(TotalallocationUnit+'%'); 
									$($(tdclass).closest('tr').nextAll('tr.k-group-footer:first').find('td')[i]).text(TotalavailableUnit+'%');
								//	$($(tdclass).closest('tr').nextAll('tr.k-group-footer:first').find('td')[i]).addClass("green");
								}	
								if(row[gethname] == "Committed"){
									var tdclass = findtd_element[i];	
									$(tdclass).addClass("change-background3");
									//$(tdclass).prop( "disabled", true )
									singleRejected = true;
								}
							}
						}
					/*}
					else if(row.AllocationStatus  == "Rejected"){
						 var element = $('tr[data-uid="' + row.uid + '"] ');
						$(element).addClass("change-background2");
					}*/
					/* if(!singleProposed){
						$(element).find('td').eq(5).html('');
					}
					 if(!singleRejected){
						$(element).find('td').eq(6).html('');
					}  */
					if(RM_Reject){
						if(findtd_element.eq(-4).text() == 0 || ResGenericAr.indexOf(row.Projectuid) != -1){
							findtd_element.eq(rejctIndx).html('');
						}
					}
					if(RM_Commit){
						if(findtd_element.eq(-3).text() == 0 || ResGenericAr.indexOf(row.Projectuid) != -1){
							findtd_element.eq(commitIndx).html('');
						}
					}
				});
			}
		   
		   if(runonce){
			   getCoumnNames(); 
		   }
		  runonce = false;
		  /* $('th[data-field="Resourcename"] > a.k-link').text('')
		  $('th[data-field="Resourcename"] > a.k-link').append('<span class="pointer" onclick="getsortopt()">Project</span>')  */
		  /* $('th[data-field="Resourcename"]').text('')
		  $('th[data-field="Resourcename"]').append('<a class="pointer"><span class="pointer" onclick="getsortopt()">Project</span></a>')  */		 
			if($('th[data-field="Resourcename"]').find('div#sortingtypeList').length == 0){
				sortOptionConfig();
			}
			if(arrColpName.length > 0){
				var grid = $("#PMLoadgrid").data("kendoGrid");
				
				$('.k-grouping-row').each(function(x){
					/* if(arrColp.indexOf($(this).index('.k-grouping-row')) != -1){
						grid.collapseRow(this);
					} */
					var nmID = $(this).eq(0).find('p').find('#resId_grid').text();
					if(arrColpName.indexOf(nmID) != -1){
						grid.collapseRow(this);
					} 
				})
			}			
			/* $("#PMLoadgrid .k-grid-content").css({
				"overflow-y": "hidden"
			}); */
			//setInactiveResIcon();
			if(filteredGrid){
				$('.k-grid-header-wrap.k-auto-scrollable').css('position','initial');
			}
			filteredGrid = false;			
			for(i=0;i<$("#PMLoadgrid").data("kendoGrid").dataSource._data.length;i++){
				//var newNM = $("#PMLoadgrid").data("kendoGrid").dataSource._data[i].Projectname.split('|')[0];
				$("#PMLoadgrid").data("kendoGrid").dataSource._data[i].Projectname = $("#PMLoadgrid").data("kendoGrid").dataSource._data[i].originalProjectName;
			}
			var mainDiv_height = $('.col-sm-12').height();	
			if($('#fullscreenmode').is(":visible")){
				mainDiv_height = mainDiv_height - 20;
			}
			else{
				mainDiv_height = mainDiv_height - 20;
			}		
			$('.k-grid-header').css('top', mainDiv_height+'px');
			var headerRow = $('.k-grid-header-wrap ').find('thead').find('tr').eq(0);
			/*$('.k-grid-header-wrap ').find('thead').find('tr:eq(1)').find('th:eq(1)').remove();
            $('.k-grid-header-wrap ').find('thead').find('tr:eq(0)').find('th:eq(7)').remove();
$('.k-grid-content').find('tbody').find('tr.k-grouping-row').each(function(x){
  //$(this).find('td').eq(5).css("display","none");
  $(this).children("td:eq(5)").remove();
  
});
  $('.k-grid-content').find('tbody').find('tr:not(.k-grouping-row)').each(function(x){
    //$(this).find('td').eq(7).css("display","none");
	$(this).children("td:eq(7)").remove();
  });
  $('.k-grid-content').find('tbody').find('tr.k-group-footer').each(function(x){
	//$(this).find('td').eq(2).after('<td></td>');
	//$(this).find('td').eq(19).css("display","none");
  });*/
			var countYear = 2;
			headerRow.find('th').each(function(x){
				//debugger
				var result = /^-?\d+$/.test($(this).text());
				if(result){
				   countYear = $(this).index();
					return false;
				}
			});
			
			
			var sumHw = 7;
			headerRow.find('th:lt('+countYear+'):gt(1)').each(function(x){
				var td = $(this);
				td.css('position','sticky') 
				td.css('left',sumHw+'px') 
				sumHw = sumHw+parseFloat(td.css('width'));
				
			});
			var gridcontent = $('.k-grid-content').find('tbody').find('tr');
			gridcontent.each(function(x){
				//debugger
				var cls = $(this).attr('class');
				var sumCw = 5;
				var bak = $(this).css('background-color')
				if(bak == 'rgba(0, 0, 0, 0)'){
					bak = 'white'
				}
                if(cls == 'k-grouping-row'){
					  var sumCwg = sumCw+(-28);
                      $(this).find('td:lt('+(countYear-2)+')').each(function(y){
    					var td = $(this);
						var baktd = $(this).css('background-color')
    					td.css('position','sticky') 
    					td.css('left',sumCwg+'px'); 
    					td.css('background',baktd);
    					sumCwg = sumCwg+parseFloat(td.css('width'));
    				 })
                }
                else{
                      $(this).find('td:lt('+countYear+'):gt(1)').each(function(y){
    					var td = $(this);
    					td.css('position','sticky') 
    					td.css('left',sumCw+'px'); 
    					td.css('background',bak);
    					sumCw = sumCw+parseFloat(td.css('width'));
    				 })  
                }
				
			}) 
		}
	var filteredreturn = false;          
	var filteredGrid = false;     
	var originalDatasource = [];
	var AValueDuplicat = [];		  
	var conSize = true;
	var pagloadsizCFOut = null;
	var pagloadsizCFIn = null
	  /*var cms = $('#fullscreenmode').attr('style')	
		//alert($('#s4-workspace').height())
		if(cms != '' & cms != undefined){
			pagloadsizCFOut = $('#s4-workspace').height();
		}else{
		  pagloadsizCFIn = $('#s4-workspace').height();
		}*/
	var psizemain =null;;
		
    function resizeGrid(dms) {
		var cms = $('#fullscreenmode').attr('style')		
		if(cms != '' & cms != undefined){
				//alert('p OUT'+pagloadsizCFOut+"P In"+ pagloadsizCFIn)
				 var gridElement = $("#PMLoadgrid");
				  //var ch = pagloadsizCFIn+50
			 var mainScheight =$('#s4-workspace').height();//psizemain+108;// pagloadsizCFOut !=null?pagloadsizCFOut:ch;// $('#s4-workspace').height();		
			if(mainScheight-100 > $('#PMLoadgrid').find('tbody').height()){
				var ng = $('#PMLoadgrid').find('tbody').height()+ 52;
				$("#PMLoadgrid").css("height", ng);	
					console.log("a"+ng);
					console.log("a"+psizemain);
			}else{
				var h = psizemain-40
					h = mainScheight-150
					console.log("b"+h);
					console.log("b"+psizemain);
				$("#PMLoadgrid").css("height",h);
			}
			//$("#PMLoadgrid").css("width", $('#DeltaPlaceHolderMain').width());
			$('#PMLoadgrid').find('tbody').height()
			  gridElement.data("kendoGrid").resize();
			
				
				
				/*var ng = $('#PMLoadgrid').find('tbody').height()+52;
			var pages =  $('#DeltaPlaceHolderMain').height()
			var mainScheight = $('#s4-bodyContainer').height();//- $('#DeltaPlaceHolderMain').height();
					if(ng > mainScheight){
						ng = mainScheight - 100;
					}
					
					$("#PMLoadgrid").css("height", ng);
				
				//$("#PMLoadgrid").css("height", mainScheight - 150);
				$("#PMLoadgrid").css("width", $('#DeltaPlaceHolderMain').width());
				$('#PMLoadgrid').find('tbody').height()
				var gridElement = $("#PMLoadgrid");
				gridElement.data("kendoGrid").resize();*/
		}
		else{
			console.log("C");
		//alert('p OUT'+pagloadsizCFOut+"P In"+ pagloadsizCFIn)
	
		/* var mainScheight = psizemain+58;//pagloadsizCFIn !=null?pagloadsizCFIn:pagloadsizCFOut-50;//$('#s4-workspace').height();		
		if(mainScheight - 250 > $('#PMLoadgrid').find('tbody').height()){
			var ng = $('#PMLoadgrid').find('tbody').height()+ 52;
			console.log("D" +ng);
			console.log("d"+psizemain);
			$("#PMLoadgrid").css("height", ng);			
		}else{
			var h =mainScheight - 200			
			console.log("E" +h);
			console.log("e"+psizemain);
			$("#PMLoadgrid").css("height", h);
		}*/
		var pkl = $('#s4-workspace').height()
		if(paglodhset == null){
			paglodhset =pkl
		}
		 var gridElement = $("#PMLoadgrid");
		 var mainScheight = paglodhset- $('#fileroptionRows').height();
			$("#PMLoadgrid").css("height", mainScheight - 200);
			if(mainScheight - 250 > $('#PMLoadgrid').find('tbody').height()){
					var ng = $('#PMLoadgrid').find('tbody').height()+ 52;
					if($('[role="columnheader"]').length > 25){
						ng = $('#PMLoadgrid').find('tbody').height()+ 82;
					}	
				$("#PMLoadgrid").css("height", ng);
			}
		//$("#PMLoadgrid").css("width", $('#DeltaPlaceHolderMain').width());
		$('#PMLoadgrid').find('tbody').height()
          gridElement.data("kendoGrid").resize();
		
		}
    } 
	var paglodhset = null
	var resizeTimeout;
/*$(window).resize(function(){
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function(){
		var grid = $("#PMLoadgrid").data("kendoGrid");
			$('.k-grouping-row').each(function(x){
				grid.expandRow(this);
			});
        getManagers()
    }, 500);
	$('#btn_AddNonProjectName').css('min-width','167px');
	$('#btn_ManageNonProject').css('min-width','183px');
});*/
   
	 function resizeGrida() {
			var gridElement = $("#PMLoadgrid").data("kendoGrid").resize();

			var newHeight = gridElement.height();

			var headerHeight = $(".k-grid-header").height();
			var rowHeight = $("#PMLoadgrid tr:last").height();

			var numberOfRows = Math.round((newHeight - headerHeight)/ rowHeight);

			gridElement.data("kendoGrid").dataSource.pageSize(numberOfRows);
			gridElement.data("kendoGrid").refresh();
		  }

	function DeleteItem(){
		collapseRows();
		DeletedataItem = true;
	}
	
	function CommittedItem(){
		collapseRows();
		CommitteddataItem = true;
	}
	function rejectItem(){
		collapseRows();
		rejectdataItem = true;
	}
	function ChatItem(){
		ChatdataItem = true;
	}
	
	function getItemIDchat(data){
		alert(data.AllocationUID);
	}
	
	
	var myWindowAdd = $("#windowAdd");	
	 myWindowAdd.kendoWindow({
                        width: "850px",
                        height: "260px",
                        title: "Add",
                        actions: ["Close"],
						resizable: false,
			});
	var myWindowSort = $("#windowAddSorting");	
	myWindowSort.kendoWindow({
                        width: "419px",
                        height: "260px",
                        title: "Sort Order",
                        actions: ["Close"],
						resizable: false,
			});
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
				//debugger
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
                            var CReadData = []						 
                            var nameReso=$("#prouser").val();							 
                             if (data!="[]") {		
								var textva = ''
								 var CommentEng = JSON.parse(data);
									for (var i = 0; i < CommentEng.length;i++){
										var htg = ''
										var sacimg = "https://outlook.office.com/owa/service.svc/s/GetPersonaPhoto?email="+CommentEng[i].ModifiedbyLoginName+"&amp;UA=0&amp;size=HR96x96&amp;sc=1597845509128"
	                                    /*$("#"+UIDCopy).addClass( "CIcolor" );
										//$("#"+UIDCopy).removeClass( "CIcolorEmpty" );
										$("#"+UIDCopy).removeClass( "CIcolorFill" );*/
	                                    var checkr = '<span class="k-icon k-i-check" style="margin-top: -5px;"></span>';
										if(CommentEng[i].CommentRead == "Yes"){												
										  checkr = '<span class="k-icon k-i-check" style="margin-top: -5px;color: blue;"><span class="k-icon k-i-check"></span></span>'
										  $("#"+UIDCopy).addClass( "CIcolorFill" );
										}else{
										  if(nameReso == _spPageContextInfo.userDisplayName){
											checkr = '<span class="k-icon k-i-check" style="margin-top: -5px;color: blue;"><span class="k-icon k-i-check"></span></span>'  
											$("#"+UIDCopy).addClass( "CIcolorFill" );
											if(nameReso == _spPageContextInfo.userDisplayName){
											  CReadData.push({"ID":CommentEng[i].ID,"CommentRead":"Yes"})
									        }
										  }else{
											var checkr = '<span class="k-icon k-i-check" style="margin-top: -5px;"></span>'  
											$("#"+UIDCopy).addClass( "CIcolor" );
										  }
										}
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
										
										
										htg = '<div style="width: 60%; background-color: #c3dbe6;  color: black; margin-left: 227px;" class="panel panel-default"><span class="k-icon k-i-arrow-60-right" style="margin-left: 346px;color: #c3dbe6;font-size: 18px;margin-top: -8px;"></span><div style="padding-top: 0px;" class=""><p style="font-size: 11px;font-weight: bold;padding-top: -12px;margin-left: 8px;margin-top: -15px;">'+CommentEng[i].Modifiedby+'  '+ConvertDateToMMDDYYYY(CommentEng[i].Modified)+' '+checkr+'</p><p style="margin-top: -7px;font-size: 12px; margin-left: 7px;">'+CommentEng[i].Comments+'</p></div></div>'
										
										}
										else{
											/*if(CommentEng[i].CommentRead==0){
											if(nameReso == _spPageContextInfo.userDisplayName){
											  checkr = '<span class="k-icon k-i-check" style="margin-top: -5px;color: blue;"><span class="k-icon k-i-check"></span></span>'
											}else{
											  checkr = '<span class="k-icon k-i-check" style="margin-top: -5px;"></span>'  
											}	
										  }else if(CommentEng[i].CommentRead==1){
											checkr = '<span class="k-icon k-i-check" style="margin-top: -5px;color: blue;"><span class="k-icon k-i-check"></span></span>'	
										  }*/
											//htg = "<div ><spanstyle='font-weight: bold;'>"+CommentEng[i].ModifiedbyLoginName+' '+ ConvertDateToMMDDYYYY(CommentEng[i].Modified)+"</span><br><p>"+CommentEng[i].Comments+"</p></div> "
											//htg =  '<div style="width: 60%;margin-left: 23px;background-color: #bee29a; color: black;" class="panel panel-default"><img src="'+sacimg+'" alt="" data-themekey="#" style="margin-left: -35px; background-color: lightgray;width: 8%; border-radius: 13px;"><span class="k-icon k-i-arrow-60-left" style=" margin-left: -23px; color: #bee29a;font-size: 18px;"></span><div style="padding-top: 0px;" class=""><p style="font-size: 11px;padding-top: -12px; font-weight: bold;margin-left: 8px;margin-top: -13px;">'+CommentEng[i].Modifiedby+'  '+ConvertDateToMMDDYYYY(CommentEng[i].Modified)+'</p><p style="margin-top: -7px;font-size: 12px; margin-left: 7px;">'+CommentEng[i].Comments+'</p></div></div>'
											/* comment task4589 htg =  '<div style="width: 60%;margin-left: -4px;background-color: #bee29a; color: black;" class="panel panel-default"><span class="k-icon k-i-arrow-60-left" style=" margin-left: -13px; color: #bee29a;font-size: 18px;"></span><div style="padding-top: 0px;" class=""><p style="font-size: 11px;padding-top: -12px; font-weight: bold;margin-left: 8px;margin-top: -13px;">'+CommentEng[i].Modifiedby+'  '+ConvertDateToMMDDYYYY(CommentEng[i].Modified)+' '+checkr+'</p><p style="margin-top: -7px;font-size: 12px; margin-left: 7px;">'+CommentEng[i].Comments+'</p></div></div>'*/
											htg =  '<div style="width: 60%;margin-left: -4px;background-color: #bee29a; color: black;" class="panel panel-default"><span class="k-icon k-i-arrow-60-left" style=" margin-left: -13px; color: #bee29a;font-size: 18px;"></span><div style="padding-top: 0px;" class=""><p style="font-size: 11px;padding-top: -12px; font-weight: bold;margin-left: 8px;margin-top: -13px;">'+CommentEng[i].Modifiedby+'  '+ConvertDateToMMDDYYYY(CommentEng[i].Modified)+' '+checkr+'</p><p style="margin-top: -7px;font-size: 12px; margin-left: 7px;">'+CommentEng[i].Comments+'</p></div></div>'
											
										}
										if(textva != ''){
											textva = textva+htg;
										}else{
											textva = htg;
										}
										
					
									 }
								//$("#"+UIDCopy).addClass( "CIcolor" );	 
							    $('#textvalue').html(textva);					
								$('.panel-body').animate({ scrollTop: 10000 }, 'fast');
								saveMultiDataUnreaddata(CReadData);
							 }
						},
						error: function(error) {
							console.log('Commented Failed')
						}
					});
			
			 
			
			
		}
		
		var Rnamepage = null
		function sendSelectedEngagements(data){			 
			 //  var sN = eid.split('|')			 
				   UIDCopy = data.AllocationUID;
				   NameCopy =  data.Resourcename;
				   Rnamepage = data.Projectname
					var nameReso = data.Projectname
					var  bname = data.Status.split('^')[1]
					var Num =99
					if(nameReso == _spPageContextInfo.userDisplayName){
					  $("#"+UIDCopy).removeClass( "CIcolor" )
					  if(data.CommentRead!=2){
					    $("#"+UIDCopy).addClass( "CIcolorFill" )
					  }
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
                            $("#prouser").val(nameReso);							 
							var textva = ''
							var CReadData = []
                             if (data!="[]") {		
								
								 var CommentEng = JSON.parse(data);
									for (var i = 0; i < CommentEng.length;i++){
										var htg = ''
										var sacimg = "https://outlook.office.com/owa/service.svc/s/GetPersonaPhoto?email="+CommentEng[i].ModifiedbyLoginName+"&amp;UA=0&amp;size=HR96x96&amp;sc=1597845509128"
	                                    var checkr = '<span class="k-icon k-i-check" style="margin-top: -5px;"></span>';
										if(CommentEng[i].CommentRead == "Yes"){												
										  checkr = '<span class="k-icon k-i-check" style="margin-top: -5px;color: blue;"><span class="k-icon k-i-check"></span></span>'
										}else{
										  if(nameReso == _spPageContextInfo.userDisplayName){
											checkr = '<span class="k-icon k-i-check" style="margin-top: -5px;color: blue;"><span class="k-icon k-i-check"></span></span>' 
                                            if(Rnamepage == _spPageContextInfo.userDisplayName){
											  CReadData.push({"ID":CommentEng[i].ID,"CommentRead":"Yes"})
									        }											
										  }else{
											var checkr = '<span class="k-icon k-i-check" style="margin-top: -5px;"></span>'  
										  }
										}
										if(_spPageContextInfo.userLoginName == CommentEng[i].ModifiedbyLoginName){
										  //htg = "<div style='text-align: end;background-color: lightgray;'><span style='font-weight: bold;'>"+CommentEng[i].ModifiedbyLoginName+' '+ ConvertDateToMMDDYYYY(CommentEng[i].Modified)+"</span><br><p>"+CommentEng[i].Comments+"</p></div> "
										  //htg = '<div style="width: 60%; background-color: #c3dbe6;  color: black; margin-left: 198px;" class="panel panel-default"><img src="'+sacimg+'" alt="" data-themekey="#" style="margin-left: 352px;background-color: lightgray; width: 8%; border-radius: 13px;"><span class="k-icon k-i-arrow-60-right" style=" margin-left: 340px; color: #c3dbe6;font-size: 18px;margin-top: -38px;"></span><div style="padding-top: 0px;" class=""><p style="font-size: 11px;font-weight: bold;padding-top: -12px;margin-left: 8px;margin-top: -36px;">'+CommentEng[i].Modifiedby+'  '+ConvertDateToMMDDYYYY(CommentEng[i].Modified)+'</p><p style="margin-top: -7px;font-size: 12px; margin-left: 7px;">'+CommentEng[i].Comments+'</p></div></div>'
										  //htg = '<div style="width: 60%; background-color: #c3dbe6;  color: black; margin-left: 198px;" class="panel panel-default"><img src="'+sacimg+'" alt="" data-themekey="#" style="margin-left: 368px;background-color: lightgray; width: 8%; border-radius: 13px;"><span class="k-icon k-i-arrow-60-right" style=" margin-left: 356px; color: #c3dbe6;font-size: 18px;margin-top: -40px;"></span><div style="padding-top: 0px;" class=""><p style="font-size: 11px;font-weight: bold;padding-top: -12px;margin-left: 8px;margin-top: -28px;">'+CommentEng[i].Modifiedby+'  '+ConvertDateToMMDDYYYY(CommentEng[i].Modified)+'</p><p style="margin-top: -7px;font-size: 12px; margin-left: 7px;">'+CommentEng[i].Comments+'</p></div></div>'
										  htg = '<div style="width: 60%; background-color: #c3dbe6;  color: black; margin-left: 227px;" class="panel panel-default"><span class="k-icon k-i-arrow-60-right" style="margin-left: 356px;color: #c3dbe6;font-size: 18px;margin-top: 0px;"></span><div style="padding-top: 0px;" class=""><p style="font-size: 11px;font-weight: bold;padding-top: -12px;margin-left: 8px;margin-top: -15px;">'+CommentEng[i].Modifiedby+'  '+ConvertDateToMMDDYYYY(CommentEng[i].Modified)+' '+checkr+'</p><p style="margin-top: -7px;font-size: 12px; margin-left: 7px;">'+CommentEng[i].Comments+'</p></div></div>'
										}else{
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
							        }
							        var GProjectName= ''
							        $('#textvalue').html(textva);					
								    myWindow.data("kendoWindow").center();
								    myWindow.data("kendoWindow").open();
								    $('.panel-body').animate({ scrollTop: 10000 }, 'fast');
								    $('.k-i-close').css('display','');
								// $('.k-window-title').text(NameCopy +' / '+GProjectName)
								//$('.k-window-title').html("<b>" +NameCopy+"</b>" +"<i>("+nameReso+")</i>")
								var title=nameReso+" | "+bname;
								if(title.length>83){
							      var $title = $('.k-window-title');
                                  var content = title.replace('|',' | <br>');
                                  $title.html(content);		
							    }else{
								  $('.k-window-title').html(nameReso+" | "+bname)	
								}
								saveMultiDataUnreaddata(CReadData);
								
								
						},
						error: function(error) {
							console.log('Commented Failed')
						}
					});
			
			 
			
			
		}
		
		
		 function saveMultiDataUnreaddata(obj){           
            var baseUrl = azurewebsites+'/api/AllocationChat/SaveCommnetsSeen';
            var allData = JSON.stringify(obj);
				$.ajax({
					type: "POST",
					url: baseUrl,
					data: JSON.stringify(allData),
					headers: {
						"Accept": "application/json;odata=verbose",
						"Content-Type": "application/json;odata=verbose",
						"X-RequestDigest": $("#__REQUESTDIGEST").val(),
						"X-HTTP-Method": "POST"
					},
					success: function (data) { 
						debugger
					},
					error: function (error) {
							debugger
					}
				});
       }
	
	function getItemID(data){
		//alert(data.AllocationUID)
		var url =azurewebsites+'/api/Allocation/DeleteRM/';
			
			       var singleObj = {};	
				   var listOfObjects=[];
				   singleObj.Resourceuid = data.AllocationUID;
				   singleObj.ModifiedBy = _spPageContextInfo.userDisplayName;	
				   singleObj.Source = "ResourceManager"					   
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
				 //roleEngagementload();
				 if(seltrue){
										SelectedEngagementload()
									}else{
										roleEngagementload();
									}
                },
                error: function (error) {
					 $.LoadingOverlay("hide");	 
                     return error;
                }
            });
       }
	
var DeletedataItem = false;
var ChatdataItem = false
	var CommitteddataItem = false;
	var rejectdataItem = false;
	 function grid_change(e) {
		var grid = $("#PMLoadgrid").data("kendoGrid");
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
						     dataId.push(dataItem.AllocationUID);
						  selectedDataItems.push(dataItem);
						}
		   }
		}
	 } 
	 var dataId = [];
	function rejectFilterEngagements(data) {
		
			$('.k-button').attr('disabled', true);
					
			var datafilter = data
			//debugger
			var lcount = false;
			$("#ErroeMessage").html("");
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
					 singleObj.ModifiedBy = _spPageContextInfo.userDisplayName;
					 singleObj.Source ="ResourceManager";
					 var lop =false;
					//gridcolums = gridcolums.slice('AllocationStatus',-1)
				//for (var i = 0, l = arr.length; i < l; i++) {
					 arr.Status = arr.Status.split('^')[0]+'^'+'Rejected'
					  var keys = gridcolums;//Object.keys(arr[i]);
					  
					  for (var j = 12, k = keys.length; j < k; j++) {
						  var s = keys[j]
						  if (s == "AllocationStatus"){
							  keys[j] ='Status'								 
						  }
						  
						  if(gData == ''){
							   gData = arr[keys[j]]
							   //gData =gData
						  }
						  else if(gData.endsWith('|')){
								  gData = gData + arr[keys[j]]
							  
						  }
						  else{
							  if(arr[keys[j]] == null || arr[keys[j]] == '' || arr[keys[j]] == '0'){
								   gData = gData + '^' + 0
							  }else{
								gData = gData + '^' + arr[keys[j]]
							
									var numc = arr[keys[j]].toString()
									if(numc.length >15){
									//if(arr[i][keys[j] >15){
										lcount =true;
									//}
									}
							  }
								
						  }
						//console.log("Key:" + keys[j] + "  Value:" + arr[i][keys[j]]);
						if(j == 12){
							j = 17;
						}
					  }
					 // gData = gData.slice(0, -2)
					gData=gData.replaceAll("null",0)
					   gData =gData + '|' ;
					   lop =false;
					//}
					
					singleObj.DataPush = (gData).slice(0, -1);
					singleObj.Para1 = 'All';
					singleObj.Para2 = '';
					singleObj.Para3 = '';
					singleObj.Para4 = '';
					singleObj.Para5 = '';
					singleObj.Para6 = '';
					listOfObjects.push(singleObj);
					//debugger
					if(lcount){
					 $("#ErroeMessage").html("You have exceeded the maximum character length for this field. Please limit to 16 characters, including decimals.");
						 $("#ErroeMessage").css('color','red')
						 $('.k-button').attr('disabled', false);
						return;
					}else{
				   var retValue = saveCommitMultiData(listOfObjects);
				   
					}
				
			}else{
				$('.k-button').attr('disabled', false);
			}
					
				
				  //debugger
		
	}
	 
	 
	   function saveFilterEngagements(e) {
		   gridchanged = false;
		   $('.k-i-close').show();
				collapseRows();		   
					$('.k-button').attr('disabled', true);
					var unqval=	unique(dataId);			
			
			var griddatabind =  $("#PMLoadgrid").data("kendoGrid").dataSource._data
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
			//debugger
			var lcount = false;
			$("#ErroeMessage").html("");
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
					 singleObj.ModifiedBy = _spPageContextInfo.userDisplayName;
					 singleObj.Source ="ResourceManager";
					 var lop =false;
					//gridcolums = gridcolums.slice('AllocationStatus',-1)
				for (var i = 0, l = arr.length; i < l; i++) {
					if(ResGenericAr.indexOf(arr[i].Projectuid) != -1){
						arr[i].Status = arr[i].Status.split('^')[0]+'^'+'Proposed'
					}
					else{
						arr[i].Status = arr[i].Status.split('^')[0]+'^'+'Committed'
					}
					  var keys = gridcolums;//Object.keys(arr[i]);
					  
					  for (var j = 12, k = keys.length; j < k; j++) {
						  if(j==17){continue;}else{
						  var s = keys[j]
						  if (s == "AllocationStatus"){
							  keys[j] ='Status'								 
						  }
						  
						  if(gData == ''){
							   gData = arr[i][keys[j]]
							   //gData =gData
						  }
						  else if(gData.endsWith('|')){
								  gData = gData + arr[i][keys[j]]
							  
						  }
						  else{
							  if(arr[i][keys[j]] == null || arr[i][keys[j]] == '' || arr[i][keys[j]] == '0'){
								   gData = gData + '^' + 0
							  }else{
								gData = gData + '^' + arr[i][keys[j]]
							
									var numc = arr[i][keys[j]].toString()
									if(numc.length >15){
									//if(arr[i][keys[j] >15){
										lcount =true;
									//}
									}
							  }
								
						  }
						//console.log("Key:" + keys[j] + "  Value:" + arr[i][keys[j]]);
						if(j == 12){
							j = 16;
						}
						  }
					  }
					 // gData = gData.slice(0, -2)
					 gData=gData.replaceAll("null",0)
					   gData =gData + '|' ;
					   lop =false;
					}
					
					singleObj.DataPush = (gData).slice(0, -1);
					listOfObjects.push(singleObj);
					//debugger
					if(lcount){
					 $("#ErroeMessage").html("You have exceeded the maximum character length for this field. Please limit to 16 characters, including decimals.");
						 $("#ErroeMessage").css('color','red')
						 $('.k-button').attr('disabled', false);
						return;
					}else{
				   var retValue = saveMultiData(listOfObjects);
				   
					}
				
			}else{
				$('.k-button').attr('disabled', false);
			}
					
				
				  //debugger
                                              
	  };  
	  function saveFilterEngagementsCommit(data) {  
					$('.k-button').attr('disabled', true);
					
			var datafilter = data
			//debugger
			var lcount = false;
			$("#ErroeMessage").html("");
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
					 singleObj.ModifiedBy = _spPageContextInfo.userDisplayName;
					 singleObj.Source ="ResourceManager";
					 var lop =false;
					//gridcolums = gridcolums.slice('AllocationStatus',-1)
				//for (var i = 0, l = arr.length; i < l; i++) {
					 arr.Status = arr.Status.split('^')[0]+'^'+'Committed'
					  var keys = gridcolums;//Object.keys(arr[i]);
					  
					  for (var j = 12, k = keys.length; j < k; j++) {
						  var s = keys[j]
						  if (s == "AllocationStatus"){
							  keys[j] ='Status'								 
						  }
						  
						  if(gData == ''){
							   gData = arr[keys[j]]
							   //gData =gData
						  }
						  else if(gData.endsWith('|')){
								  gData = gData + arr[keys[j]]
							  
						  }
						  else{
							  if(arr[keys[j]] == null || arr[keys[j]] == '' || arr[keys[j]] == '0'){
								   gData = gData + '^' + 0
							  }else{
								gData = gData + '^' + arr[keys[j]]
							
									var numc = arr[keys[j]].toString()
									if(numc.length >15){
									//if(arr[i][keys[j] >15){
										lcount =true;
									//}
									}
							  }
								
						  }
						//console.log("Key:" + keys[j] + "  Value:" + arr[i][keys[j]]);
						if(j == 12){
							j = 16;
						}
					  }
					 // gData = gData.slice(0, -2)
					 gData=gData.replaceAll("null",0)
					   gData =gData + '|' ;
					   lop =false;
					//}
					
					singleObj.DataPush = (gData).slice(0, -1);
					singleObj.Para1 = 'All';
					singleObj.Para2 = '';
					singleObj.Para3 = '';
					singleObj.Para4 = '';
					singleObj.Para5 = '';
					singleObj.Para6 = '';
					listOfObjects.push(singleObj);
					//debugger
					if(lcount){
					 $("#ErroeMessage").html("You have exceeded the maximum character length for this field. Please limit to 16 characters, including decimals.");
						 $("#ErroeMessage").css('color','red')
						 $('.k-button').attr('disabled', false);
						return;
					}else{
				   var retValue = saveCommitMultiData(listOfObjects);
				   
					}
				
			}else{
				$('.k-button').attr('disabled', false);
			}
					
				
				  //debugger
                                              
	  }; 
	  
	
                                                     

	   function saveMultiData(obj){
            var listOfObjects = "";
            listOfObjects = (obj);
            var baseUrl = azurewebsites+'/api/Allocation/UpdateDynamicStatus';//UpdateCommitStatus';//UpdateCommit';
            var allData = JSON.stringify(obj);
			 //$.LoadingOverlay("show");
			 
            $.ajax({
                type: "PUT",
                url: baseUrl,
                data: JSON.stringify(allData),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                   // return data;
				  /// $.LoadingOverlay("hide");
				   $('#ErroeMessage').text('')
				   $('.k-button').attr('disabled', false);
				  // GetData()
				  //roleEngagementload();
					if(seltrue){
						SelectedEngagementload()
					}
					else{
						roleEngagementload();
					}
                },
                error: function (error) {
					//$.LoadingOverlay("hide");	 
					return error;
                }
            });
       }
	   function saveCommitMultiData(obj){
            var listOfObjects = "";
            listOfObjects = (obj);
            var baseUrl = azurewebsites+'/api/Allocation/UpdateCompleteStatus';//UpdateCommitStatus';//UpdateCommit';
            var allData = JSON.stringify(obj);
			//$.LoadingOverlay("show");			 
            $.ajax({
                type: "PUT",
                url: baseUrl,
                data: JSON.stringify(allData),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                   // return data;
				  /// $.LoadingOverlay("hide");
				   $('#ErroeMessage').text('')
				   $('.k-button').attr('disabled', false);
				  // GetData()
				  //roleEngagementload();
					if(seltrue){
						SelectedEngagementload()
					}
					else{
						roleEngagementload();
					}
                },
                error: function (error) {
					// $.LoadingOverlay("hide");	 
					return error;
                }
            });
       }
      
function CancelReplaceRes(){
	collapseRows();
	 if(seltrue){
			SelectedEngagementload()
		}else{
			roleEngagementload();
		}
}	  

function unique(list) {
	 var result = [];
	 $.each(list, function(i, e) {
					if ($.inArray(e, result) == -1) result.push(e);
	 });
	 return result;
  }
	 
	 function onGridKeydown(e) {
                 if (e.key >=0 && e.key<10) {                   
                     return true;
                 }
                 if (e.keyCode == 8 || e.keyCode == 9 || e.keyCode == 46 || e.keyCode == 39 || e.keyCode == 37) {
                    
                     return true;
                 }
			 return false;
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
         var txtMaxunitMonth = txtMaxunitMonth =$('#txt_unit').val();
            
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
         if (txtMaxunitMonth > 100) {
             $('#addItemChk').text("*Max Unit (0% to 100%).");
             return;
         }
		  for (var i = arraySec.length - 1; i >= 0; i--) {
             if (arraySec[i].ResourceName === resourceName) {
                 arraySec.splice(i, 1);
             }
         }
		 arraySec.push({ ResourceName: resourceName , Startdate: sdate, Enddate: fdate, units: txtMaxunitMonth, ID: resourceid,})
		  $('.cEngNewLen').hide()
		  $('.cEngProLen').hide()
		 if(arraySec.length != 0){
		// $('.cEngNewLen').show()
         //datagrid(arraySec);
		 }
}
var arraySec=[];

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
         //sortable: true,
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
		  width:120,
         format: "{0:MMMM yyyy}",
          template:"#=(Startdate == null) ? ' ':((kendo.toString(kendo.parseDate(Startdate, 'MMMM yyyy'), 'MMMM yyyy') == null) ? ' ':kendo.toString(kendo.parseDate(Startdate, 'MMMM yyyy'), 'MMMM yyyy'))#",
         
         }, {
         field: "Enddate",
         title: "End Date",
		 width:120,
         format: "{0:MMMM yyyy}",
          template:"#=(Enddate == null) ? ' ':((kendo.toString(kendo.parseDate(Enddate, 'MMMM yyyy'), 'MMMM yyyy') == null) ? ' ':kendo.toString(kendo.parseDate(Enddate, 'MMMM yyyy'), 'MMMM yyyy'))#",
         
         }, {
         field: "units",
         title: "Unit",
		  width:100,         
         },{
         field: "ID",
         title: "ID",         
         },],
         });
 }
function getParameterByName(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search.toLowerCase());
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}
function changeDateold(e) {
	inactivUserIdn2 = true;
	
	var curElemID = e.sender.element.context.id ;
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
	if(!$("#btn_gRefSec").is(':visible')) { /* getManagers(); */ roleEngagementload()}
  }
  
  function changeDateNew(startValue, endValue) {
	$('.ttesting').css("display", "none");
	$('.backgroundBlur').fadeOut();
	collapseRows();
  
	var previous = null;
	var Calert = false;
	if(dataIdPP.length != 0 && !gcm) {	
		Calert = confirm('Are you sure you want to change your grid date range? You have unsaved changes. Press OK to continue with your grid date change, which will lose any unsaved changes. Press Cancel to cancel this grid date change.');
	} else {
		Calert = true;
	}
	
	if(!Calert) {
		gcm = false;
		return;
	} else {
		gcm = false;
		inactivUserIdn2 = true;
	}
	
	var darray = [startValue, endValue];
	Gdatavalstart = startValue;
	GdatavalEnd = endValue;
	sessionStorage.setItem('dateItems', JSON.stringify(darray));
  
	$("#start").data("kendoDatePicker").value(startValue);
	$("#end").data("kendoDatePicker").value(endValue);
  

	roleEngagementload();
	getManagers();
}



function changeDate(e) {
	$('.ttesting').css("display","none");
					$('.backgroundBlur').fadeOut();	
	collapseRows();
	var curElemID = e.sender.element.context.id ;
	var previous = null;
	var Calert = false;
	if(dataIdPP.length !=0){	
		if(!gcm){
			gcm =false
		Calert = confirm(' Are you sure you want to change your grid date range?  You have unsaved changes.  Press OK to continue with your grid date change, which will lose any unsaved changes.  Press Cancel to cancel this grid date change.')
		}
	}else{
		Calert = true;
	}
	
	if(!Calert){
		gcm =false
	}
	if(Calert){
		gcm =false;;
		inactivUserIdn2 = true;
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
	if(!$("#btn_gRefSec").is(':visible')) { /* getManagers(); */ roleEngagementload()}
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


/*--------------1st Page  ----------*/

var projectcodeCopy
var GProjectNameCopy = '';
function GetDataSecPageload(){	
//$("#PMLoadgrid").show();
$("#PMLoadgrid").hide();	
	$('.valhide').hide();
  var YearS= $("#startP").val().split(' ')[1];
  var MonthS= monthNamesFull.indexOf($("#startP").val().split(' ')[0]);
  
  var YearF= $("#endP").val().split(' ')[1];
  var MonthF= monthNamesFull.indexOf($("#endP").val().split(' ')[0]);

  var val1 =new Date(YearS,MonthS,5);
  var val2 =new Date(YearF,MonthF,5);

  var startDate = val1.getMonth() + 1 + ' ' + val1.getFullYear();
  var EndDate = val2.getMonth() + 1 + ' ' + val2.getFullYear();
 // var projectcode = getParameterByName('projuid');
  
    projectcodeCopy = $("#drp_GetProjects").data("kendoDropDownList").value();
    //GProjectNameCopy =  $("#drp_GetProjects").data("kendoDropDownList").text()
	
	
		ProjectsDataInfo.filter(function (item, idx) {
			if(item.ProjectId == projectcodeCopy){
				GProjectNameCopy =item.ProjectNamecopy;
			}			 
		});
		//alert(GProjectNameCopy);
  var url = azurewebsites+"/api/Allocation/"+projectcodeCopy+'/'+startDate+'/'+EndDate
	var res = getAjex(url);
	paageLoadSec(res)	
	
				
}

var AllResourceListSec;
var totalarraySec;
function paageLoadSec(response){		
		response = JSON.parse(response);
		totalarraySec = response;
		CEngagementPgae();
		if(response.length == 0){
			$("#PMLoadgridSec").empty();
			$("#PMLoadgridSec").hide();
			return;
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
						title: 'Resource',
						format: "",
						width: 315,
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
						}];
				var fildata = []
				var titleLen = []
				for (var i = 12; i < keys.length; i++) {
					titleLen.push(keys[i].split("_")[1]);
				}
				
				var filterkey = findOdd(titleLen);
				var cont = 1
				for (var i = 12; i < keys.length; i++) {
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
								template: '#=' + keys[i] + '#%',
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
								template: '#=' + keys[i] + '#%',
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
								width: 55,
								title: keys[i].split("_")[0],
								filterable: false,
								template: '#=' + keys[i] + '#%'
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
								width: 55,
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
				$("#PMLoadgridSec").show();
				 $("#PMLoadgridSec").empty();
		// var dynHeaders = gColumns(headers)
		 var grid = $("#PMLoadgridSec").kendoGrid({
			 dataSource: response,
			 navigatable: true,
			 edit: function (e) {
				 setTimeout(function () {
					 e.container.find("input").select();
				 })
			 },
			 editable: false,
			 selectable: "multiple, cell",
			// sortable: true,
			 filterable: true,
			 resizable: true,
			// toolbar: ["cancel"],
			 columns: ret_arr         
			 }).find("table").on("keydown", onGridKeydown);
		//}).data("kendoGrid");
		$('#PMLoadgridSec').width($(window).width()-270);
		grid.bind("change", grid_change);
         $('#PMLoadgridSec').find('tbody').css('background-color','white')
		 $('#PMLoadgridSec').find('tbody').css('color','darkgrey')
		 //$('.k-alt').css('background-color','lightgrey !important')
		 
		
		 var ds = $("#PMLoadgridSec").data("kendoGrid").dataSource;
		     ds.sort({ field: "Resourcename", dir: "asc" });
	}
	
	
function AddtoTablecopy(){
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
		arraySec = []
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
             if (arraySec[i].ResourceName === resourceName) {
                 arraySec.splice(i, 1);
             }
         }
		 arraySec.push({ ResourceName: resourceName , Startdate: sdate, Enddate: fdate, units: txtMaxunitMonth, ID: resourceid,})
		  $('.cEngNewLen').hide()
		 if(arraySec.length != 0){
		// $('.cEngNewLen').show()
         CreteEngclickadd(arraySec);
		 }
}

function CreteEngclickadd (arraySec){
	 var gridDataArray = arraySec;
	   var SaveEngData = [];
	   if(gridDataArray.length != 0){
	   var projectcode = projectcodeCopy;
		  for (i = 0; i < gridDataArray.length; i++){
			  
			  var obj = {};
				 obj.Description = 'CODE TEST';
				 obj.Projectuid = projectcode;
				 obj.Projectname = GProjectNameCopy;
				 obj.Resourceuid = gridDataArray[i].ID;
				 obj.Resourcename = gridDataArray[i].ResourceName;
				 obj.Role = '';
				 obj.Start = (monthNamesFull.indexOf(gridDataArray[i].Startdate.split(' ')[0]) + 1) + "/05/" + gridDataArray[i].Startdate.split(' ')[1];
				 obj.Finish = (monthNamesFull.indexOf(gridDataArray[i].Enddate.split(' ')[0]) + 1) + "/05/" + gridDataArray[i].Enddate.split(' ')[1];
				 obj.Unit = gridDataArray[i].units;
				 obj.Status = "Committed";
				 SaveEngData.push(obj);
		   }
		   
		   var url = azurewebsites+"/api/Allocation/AddTaskRM";//AddTask";
		   var getSaveRes = savedata(SaveEngData,url)
		   
	   }
	  
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
						 $.LoadingOverlay("hide");
						GetDataSecPageload()						 
					},
					error: function(error) {
						 $.LoadingOverlay("hide");
				  }
					 
			 });
}



function formatDate(date) {
     var lan = _spPageContextInfo.currentCultureName;
	

  var format = {
    "af-ZA": "yyyy/MM/dd",
    "am-ET": "d/M/yyyy",
    "ar-AE": "dd/MM/yyyy",
    "ar-BH": "dd/MM/yyyy",
    "ar-DZ": "dd-MM-yyyy",
    "ar-EG": "dd/MM/yyyy",
    "ar-IQ": "dd/MM/yyyy",
    "ar-JO": "dd/MM/yyyy",
    "ar-KW": "dd/MM/yyyy",
    "ar-LB": "dd/MM/yyyy",
    "ar-LY": "dd/MM/yyyy",
    "ar-MA": "dd-MM-yyyy",
    "ar-OM": "dd/MM/yyyy",
    "ar-QA": "dd/MM/yyyy",
    "ar-SA": "dd/MM/yy",
    "ar-SY": "dd/MM/yyyy",
    "ar-TN": "dd-MM-yyyy",
    "ar-YE": "dd/MM/yyyy",
    "arn-CL": "dd-MM-yyyy",
    "as-IN": "dd-MM-yyyy",
    "az-Cyrl-AZ": "dd.MM.yyyy",
    "az-Latn-AZ": "dd.MM.yyyy",
    "ba-RU": "dd.MM.yy",
    "be-BY": "dd.MM.yyyy",
    "bg-BG": "dd.M.yyyy",
    "bn-BD": "dd-MM-yy",
    "bn-IN": "dd-MM-yy",
    "bo-CN": "yyyy/M/d",
    "br-FR": "dd/MM/yyyy",
    "bs-Cyrl-BA": "d.M.yyyy",
    "bs-Latn-BA": "d.M.yyyy",
    "ca-ES": "dd/MM/yyyy",
    "co-FR": "dd/MM/yyyy",
    "cs-CZ": "d.M.yyyy",
    "cy-GB": "dd/MM/yyyy",
    "da-DK": "dd-MM-yyyy",
    "de-AT": "dd.MM.yyyy",
    "de-CH": "dd.MM.yyyy",
    "de-DE": "dd.MM.yyyy",
    "de-LI": "dd.MM.yyyy",
    "de-LU": "dd.MM.yyyy",
    "dsb-DE": "d. M. yyyy",
    "dv-MV": "dd/MM/yy",
    "el-GR": "d/M/yyyy",
    "en-029": "MM/dd/yyyy",
    "en-AU": "d/MM/yyyy",
    "en-BZ": "dd/MM/yyyy",
   // "en-CA": "dd/MM/yyyy",
    "en-CA": "yyyy-MM-dd",
    "en-GB": "dd/MM/yyyy",
    "en-IE": "dd/MM/yyyy",
    "en-IN": "dd-MM-yyyy",
    "en-JM": "dd/MM/yyyy",
    "en-MY": "d/M/yyyy",
    "en-NZ": "d/MM/yyyy",
    "en-PH": "M/d/yyyy",
    "en-SG": "d/M/yyyy",
    "en-TT": "dd/MM/yyyy",
    "en-US": "M/d/yyyy",
    "en-ZA": "yyyy/MM/dd",
    "en-ZW": "M/d/yyyy",
    "es-AR": "dd/MM/yyyy",
    "es-BO": "dd/MM/yyyy",
    "es-CL": "dd-MM-yyyy",
    "es-CO": "dd/MM/yyyy",
    "es-CR": "dd/MM/yyyy",
    "es-DO": "dd/MM/yyyy",
    "es-EC": "dd/MM/yyyy",
    "es-ES": "dd/MM/yyyy",
    "es-GT": "dd/MM/yyyy",
    "es-HN": "dd/MM/yyyy",
    "es-MX": "dd/MM/yyyy",
    "es-NI": "dd/MM/yyyy",
    "es-PA": "MM/dd/yyyy",
    "es-PE": "dd/MM/yyyy",
    "es-PR": "dd/MM/yyyy",
    "es-PY": "dd/MM/yyyy",
    "es-SV": "dd/MM/yyyy",
    "es-US": "M/d/yyyy",
    "es-UY": "dd/MM/yyyy",
    "es-VE": "dd/MM/yyyy",
    "et-EE": "d.MM.yyyy",
    "eu-ES": "yyyy/MM/dd",
    "fa-IR": "MM/dd/yyyy",
    "fi-FI": "d.M.yyyy",
    "fil-PH": "M/d/yyyy",
    "fo-FO": "dd-MM-yyyy",
    "fr-BE": "d/MM/yyyy",
    "fr-CA": "yyyy-MM-dd",
    "fr-CH": "dd.MM.yyyy",
    "fr-FR": "dd/MM/yyyy",
    "fr-LU": "dd/MM/yyyy",
    "fr-MC": "dd/MM/yyyy",
    "fy-NL": "d-M-yyyy",
    "ga-IE": "dd/MM/yyyy",
    "gd-GB": "dd/MM/yyyy",
    "gl-ES": "dd/MM/yy",
    "gsw-FR": "dd/MM/yyyy",
    "gu-IN": "dd-MM-yy",
    "ha-Latn-NG": "d/M/yyyy",
    "he-IL": "dd/MM/yyyy",
    "hi-IN": "dd-MM-yyyy",
    "hr-BA": "d.M.yyyy.",
    "hr-HR": "d.M.yyyy",
    "hsb-DE": "d. M. yyyy",
    "hu-HU": "yyyy. MM. dd.",
    "hy-AM": "dd.MM.yyyy",
    "id-ID": "dd/MM/yyyy",
    "ig-NG": "d/M/yyyy",
    "ii-CN": "yyyy/M/d",
    "is-IS": "d.M.yyyy",
    "it-CH": "dd.MM.yyyy",
    "it-IT": "dd/MM/yyyy",
    "iu-Cans-CA": "d/M/yyyy",
    "iu-Latn-CA": "d/MM/yyyy",
    "ja-JP": "yyyy/MM/dd",
    "ka-GE": "dd.MM.yyyy",
    "kk-KZ": "dd.MM.yyyy",
    "kl-GL": "dd-MM-yyyy",
    "km-KH": "yyyy-MM-dd",
    "kn-IN": "dd-MM-yy",
    "ko-KR": "yyyy-MM-dd",
    "kok-IN": "dd-MM-yyyy",
    "ky-KG": "dd.MM.yy",
    "lb-LU": "dd/MM/yyyy",
    "lo-LA": "dd/MM/yyyy",
    "lt-LT": "yyyy.MM.dd",
    "lv-LV": "yyyy.MM.dd.",
    "mi-NZ": "dd/MM/yyyy",
    "mk-MK": "dd.MM.yyyy",
    "ml-IN": "dd-MM-yy",
    "mn-MN": "yy.MM.dd",
    "mn-Mong-CN": "yyyy/M/d",
    "moh-CA": "M/d/yyyy",
    "mr-IN": "dd-MM-yyyy",
    "ms-BN": "dd/MM/yyyy",
    "ms-MY": "dd/MM/yyyy",
    "mt-MT": "dd/MM/yyyy",
    "nb-NO": "dd.MM.yyyy",
    "ne-NP": "M/d/yyyy",
    "nl-BE": "d/MM/yyyy",
    "nl-NL": "d-M-yyyy",
    "nn-NO": "dd.MM.yyyy",
    "nso-ZA": "yyyy/MM/dd",
    "oc-FR": "dd/MM/yyyy",
    "or-IN": "dd-MM-yy",
    "pa-IN": "dd-MM-yy",
    "pl-PL": "yyyy-MM-dd",
    "prs-AF": "dd/MM/yy",
    "ps-AF": "dd/MM/yy",
    "pt-BR": "d/M/yyyy",
    "pt-PT": "dd-MM-yyyy",
    "qut-GT": "dd/MM/yyyy",
    "quz-BO": "dd/MM/yyyy",
    "quz-EC": "dd/MM/yyyy",
    "quz-PE": "dd/MM/yyyy",
    "rm-CH": "dd/MM/yyyy",
    "ro-RO": "dd.MM.yyyy",
    "ru-RU": "dd.MM.yyyy",
    "rw-RW": "M/d/yyyy",
    "sa-IN": "dd-MM-yyyy",
    "sah-RU": "MM.dd.yyyy",
    "se-FI": "d.M.yyyy",
    "se-NO": "dd.MM.yyyy",
    "se-SE": "yyyy-MM-dd",
    "si-LK": "yyyy-MM-dd",
    "sk-SK": "d. M. yyyy",
    "sl-SI": "d.M.yyyy",
    "sma-NO": "dd.MM.yyyy",
    "sma-SE": "yyyy-MM-dd",
    "smj-NO": "dd.MM.yyyy",
    "smj-SE": "yyyy-MM-dd",
    "smn-FI": "d.M.yyyy",
    "sms-FI": "d.M.yyyy",
    "sq-AL": "yyyy-MM-dd",
    "sr-Cyrl-BA": "d.M.yyyy",
    "sr-Cyrl-CS": "d.M.yyyy",
    "sr-Cyrl-ME": "d.M.yyyy",
    "sr-Cyrl-RS": "d.M.yyyy",
    "sr-Latn-BA": "d.M.yyyy",
    "sr-Latn-CS": "d.M.yyyy",
    "sr-Latn-ME": "d.M.yyyy",
    "sr-Latn-RS": "d.M.yyyy",
    "sv-FI": "d.M.yyyy",
    "sv-SE": "yyyy-MM-dd",
    "sw-KE": "M/d/yyyy",
    "syr-SY": "dd/MM/yyyy",
    "ta-IN": "dd-MM-yyyy",
    "te-IN": "dd-MM-yy",
    "tg-Cyrl-TJ": "dd.MM.yy",
    "th-TH": "d/M/yyyy",
    "tk-TM": "dd.MM.yy",
    "tn-ZA": "yyyy/MM/dd",
    "tr-TR": "dd.MM.yyyy",
    "tt-RU": "dd.MM.yyyy",
    "tzm-Latn-DZ": "dd-MM-yyyy",
    "ug-CN": "yyyy-M-d",
    "uk-UA": "dd.MM.yyyy",
    "ur-PK": "dd/MM/yyyy",
    "uz-Cyrl-UZ": "dd.MM.yyyy",
    "uz-Latn-UZ": "dd/MM yyyy",
    "vi-VN": "dd/MM/yyyy",
    "wo-SN": "dd/MM/yyyy",
    "xh-ZA": "yyyy/MM/dd",
    "yo-NG": "d/M/yyyy",
    "zh-CN": "yyyy/M/d",
    "zh-HK": "d/M/yyyy",
    "zh-MO": "d/M/yyyy",
    "zh-SG": "d/M/yyyy",
    "zh-TW": "yyyy/M/d",
    "zu-ZA": "yyyy/MM/dd",
  };
  
    var sep = {
    "af-ZA": "/",
    "am-ET": "/",
    "ar-AE": "/",
    "ar-BH": "/",
    "ar-DZ": "-",
    "ar-EG": "/",
    "ar-IQ": "/",
    "ar-JO": "/",
    "ar-KW": "/",
    "ar-LB": "/",
    "ar-LY": "/",
    "ar-MA": "-",
    "ar-OM": "/",
    "ar-QA": "/",
    "ar-SA": "/",
    "ar-SY": "/",
    "ar-TN": "-",
    "ar-YE": "/",
    "arn-CL": "-",
    "as-IN": "-",
    "az-Cyrl-AZ": ".",
    "az-Latn-AZ": ".",
    "ba-RU": ".",
    "be-BY": ".",
    "bg-BG": ".",
    "bn-BD": "-",
    "bn-IN": "-",
    "bo-CN": "/",
    "br-FR": "/",
    "bs-Cyrl-BA": ".",
    "bs-Latn-BA": ".",
    "ca-ES": "/",
    "co-FR": "/",
    "cs-CZ": ".",
    "cy-GB": "/",
    "da-DK": "-",
    "de-AT": ".",
    "de-CH": ".",
    "de-DE": ".",
    "de-LI": ".",
    "de-LU": ".",
    "dsb-DE": ".",
    "dv-MV": "/",
    "el-GR": "/",
    "en-029": "/",
    "en-AU": "/",
    "en-BZ": "/",
   // "en-CA": "/",
   "en-CA": "-",
    "en-GB": "/",
    "en-IE": "/",
    "en-IN": "-",
    "en-JM": "/",
    "en-MY": "/",
    "en-NZ": "/",
    "en-PH": "/",
    "en-SG": "/",
    "en-TT": "/",
    "en-US": "/",
    "en-ZA": "/",
    "en-ZW": "/",
    "es-AR": "/",
    "es-BO": "/",
    "es-CL": "-",
    "es-CO": "/",
    "es-CR": "/",
    "es-DO": "/",
    "es-EC": "/",
    "es-ES": "/",
    "es-GT": "/",
    "es-HN": "/",
    "es-MX": "/",
    "es-NI": "/",
    "es-PA": "/",
    "es-PE": "/",
    "es-PR": "/",
    "es-PY": "/",
    "es-SV": "/",
    "es-US": "/",
    "es-UY": "/",
    "es-VE": "/",
    "et-EE": ".",
    "eu-ES": "/",
    "fa-IR": "/",
    "fi-FI": ".",
    "fil-PH": "/",
    "fo-FO": "-",
    "fr-BE": "/",
    "fr-CA": "-",
    "fr-CH": "d.",
    "fr-FR": "/",
    "fr-LU": "/",
    "fr-MC": "/",
    "fy-NL": "-",
    "ga-IE": "/",
    "gd-GB": "/",
    "gl-ES": "/",
    "gsw-FR": "/",
    "gu-IN": "-",
    "ha-Latn-NG": "/",
    "he-IL": "/",
    "hi-IN": "-",
    "hr-BA": ".",
    "hr-HR": ".",
    "hsb-DE": ".",
    "hu-HU": ".",
    "hy-AM": ".",
    "id-ID": "/",
    "ig-NG": "/",
    "ii-CN": "/",
    "is-IS": ".",
    "it-CH": ".",
    "it-IT": "/",
    "iu-Cans-CA": "/",
    "iu-Latn-CA": "/",
    "ja-JP": "/",
    "ka-GE": ".",
    "kk-KZ": ".",
    "kl-GL": "-",
    "km-KH": "-",
    "kn-IN": "-",
    "ko-KR": "-",
    "kok-IN": "-",
    "ky-KG": ".",
    "lb-LU": "/",
    "lo-LA": "/",
    "lt-LT": ".",
    "lv-LV": ".",
    "mi-NZ": "/",
    "mk-MK": ".",
    "ml-IN": "-",
    "mn-MN": ".",
    "mn-Mong-CN": "/",
    "moh-CA": "/",
    "mr-IN": "-",
    "ms-BN": "/",
    "ms-MY": "/",
    "mt-MT": "/",
    "nb-NO": ".",
    "ne-NP": "/",
    "nl-BE": "/",
    "nl-NL": "-",
    "nn-NO": ".",
    "nso-ZA": "/",
    "oc-FR": "/",
    "or-IN": "-",
    "pa-IN": "-",
    "pl-PL": "-",
    "prs-AF": "/",
    "ps-AF": "/",
    "pt-BR": "/",
    "pt-PT": "-",
    "qut-GT": "/",
    "quz-BO": "/",
    "quz-EC": "/",
    "quz-PE": "/",
    "rm-CH": "/",
    "ro-RO": ".",
    "ru-RU": ".",
    "rw-RW": "/",
    "sa-IN": "-",
    "sah-RU": ".",
    "se-FI": ".",
    "se-NO": ".",
    "se-SE": "-",
    "si-LK": "-",
    "sk-SK": ".",
    "sl-SI": ".",
    "sma-NO": ".",
    "sma-SE": "-",
    "smj-NO": ".",
    "smj-SE": "-",
    "smn-FI": ".",
    "sms-FI": ".",
    "sq-AL": "-",
    "sr-Cyrl-BA": ".",
    "sr-Cyrl-CS": ".",
    "sr-Cyrl-ME": ".",
    "sr-Cyrl-RS": ".",
    "sr-Latn-BA": ".",
    "sr-Latn-CS": ".",
    "sr-Latn-ME": ".",
    "sr-Latn-RS": ".",
    "sv-FI": ".",
    "sv-SE": "-",
    "sw-KE": "/",
    "syr-SY": "/",
    "ta-IN": "-",
    "te-IN": "-",
    "tg-Cyrl-TJ": ".",
    "th-TH": "/",
    "tk-TM": ".",
    "tn-ZA": "/",
    "tr-TR": ".",
    "tt-RU": ".",
    "tzm-Latn-DZ": "-",
    "ug-CN": "-",
    "uk-UA": ".",
    "ur-PK": "/",
    "uz-Cyrl-UZ": ".",
    "uz-Latn-UZ": "/",
    "vi-VN": "/",
    "wo-SN": "/",
    "xh-ZA": "/",
    "yo-NG": "/",
    "zh-CN": "/",
    "zh-HK": "/",
    "zh-MO": "/",
    "zh-SG": "/",
    "zh-TW": "/",
    "zu-ZA": "/",
  };
  

 var d = new Date(date);
      var   month = (d.getMonth() + 1).toString() ;
      var  day = d.getDate().toString() ;
      var  year = d.getFullYear();
	  var strmonth = '';
	  var strday = '';
	  if (month.length < 2) { month = '0' + month.toString();}
      if (day.length < 2)	{  day = '0' + day.toString();}
	  
	  var newfirmat =  format[lan].split(sep[lan]);
	  var first;
	  var second;
	  var third;

if(newfirmat[0].toLowerCase().indexOf('m') != -1)
{
	first = month;
}
if(newfirmat[0].toLowerCase().indexOf('d') != -1)
{
	first = day;
}
if(newfirmat[0].toLowerCase().indexOf('y') != -1)
{
	first = year;
}

if(newfirmat[1].toLowerCase().indexOf('m') != -1)
{
	second = month;
}
if(newfirmat[1].toLowerCase().indexOf('d') != -1)
{
	second = day;
}
if(newfirmat[1].toLowerCase().indexOf('y') != -1)
{
	second = year;
}

if(newfirmat[2].toLowerCase().indexOf('m') != -1)
{
	third = month;
}
if(newfirmat[2].toLowerCase().indexOf('d') != -1)
{
	third = day;
}
if(newfirmat[2].toLowerCase().indexOf('y') != -1)
{
	third = year;
}


	
var finaldate = first+  sep[lan]+ second +sep[lan] + third;

  return finaldate;

}
var columnDateNames = [];
 function getCoumnNames(){
	 columnDateNames = [];
	 $("#PMLoadgrid").find('tbody').find('tr').each(function(i){			
			var yearInd = 7;			
			$(this).find('td').each( function(x){
				var ind = $(this).index();
				if(ind >4){				
					var header = $("#PMLoadgrid").find('table').find('tr').eq(1).find('th').eq(ind-4).text()				
					if(mS[0] == header && $("#PMLoadgrid").find('table').find('tr').eq(1).find('th').eq(ind-4).index()>0){
						yearInd = yearInd+1;
					}
					var yearRange = $("#PMLoadgrid").find('table').find('tr').eq(0).find('th').eq(yearInd).text();
					var keyName = header+"_"+yearRange+"_Status";//Apr_2022_Status
					columnDateNames.push(keyName);
				}				
			})
			return false;
		})
 }
		var filterApplied = false;
		var global_onchangeEle = ""
		var global_onchangeEle_2 = "";
		var lock = true;
		$('#s4-workspace').click(function(e){
		  //alert( "Handler for .click() called." );
			if(e.target.className != 'k-multiselect-wrap k-floatwrap' || global_onchangeEle != $(e.target).find('ul')[0].id.replace("_taglist","") ){
				if(global_onchangeEle != ""){
					lock = false;
					$('#'+global_onchangeEle).trigger("change");
					lock = true;
					global_onchangeEle_2 = global_onchangeEle
					global_onchangeEle = ''
				}
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
		var countfilterOp = 0;
		function createResourceFilterdropdowns(){
			var resLen = AGGetResources.length;
			//filterSwitch = true
			
			conSize = true;
			var counter = 0;
			var po = 1;
			 if(ResFilter.length > 0){
			
			//var chtrue = false
				$.each(ResFilter, function (indx, MGrid) {
					var resFilter_ar = [];
					if(counter < 4){
						for(fi=0;fi<resLen;fi++){
							if(resFilter_ar.indexOf(AGGetResources[fi]['Filter'+po]) == -1 && (AGGetResources[fi]['Filter'+po] != null && AGGetResources[fi]['Filter'+po] != "")){
								resFilter_ar.push(AGGetResources[fi]['Filter'+po]);
							}
						}
						//if(keynames.indexOf(MGrid.ProjectFilter.replace(/\s+/g, '')) != -1){
						if(resFilter_ar.length > 0){
							var filId="optionalFilter"+po;
							//if(MGrid.Display){
								$('#fileroptionRows').append('<td name = "td_filter" style="display:none;"><select id="optionalFilter'+po+'" multiple="multiple"  data-placeholder="'+MGrid.ProjectFilter+'"></td>');
								//$('#fileroptionRows_Labels').append('<td><label>'+MGrid.ProjectFilter+':</label></td>')
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
								  selectAllValue: MGrid.ProjectFilter,
								  templates: {
                                    filter: '<li class="multiselect-item filter"><div class="input-group"><input class="form-control multiselect-search" type="text"></div></li>',
                                  },onDropdownShown: function(event) {
									var dropDownId=$("div.open").prev().attr('id');
									var numPo=dropDownId.match(/\d+/);
									if($("div.open").find('ul.multiselect-container div.buttonOpt').length==0){
									  $("div.open").find('ul.multiselect-container').append('<li class="multiselect-item multiselect-buttons"><div class="buttonOpt"><input type="button" id="resetOptional" class="multiselect-reset" value="Clear" onclick="myFunction('+numPo+')"/><input type="button" value="Apply" id="applyOptional" class="multiselect-apply" onclick="otherApply('+numPo+')"/></div></li>');
			                          //$("div.open").find('ul.multiselect-container div.buttonOpt').append('');
									}
			                      }
								});
								var arr = [];
								if(filteredAr.length>0){
									globalValDrop = filteredAr;
								}
								for(i=0;i<globalValDrop.length;i++){
									if(arr.indexOf(globalValDrop[i]['Filter'+po]) == -1){
										
										arr.push(globalValDrop[i]['Filter'+po])
									}
									
								}
								for(i=0;i<arr.length;i++){
									if(arr[i] == null){
										arr[i] = "Empty"
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
					$('[name="filterlb"]').css('margin-left','1px');

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
				  //createdfilters = true;
		}
		function Reset(){
		  var dropId=$('#_filterAllocation');
		  dropId.multiselect('deselectAll', false);
          dropId.multiselect('updateButtonText');
          paageLoad(Globalresponded3,'','');		  
		}
		function Apply(){
		  var acheck =false;
			if(dataIdPP.length !=0){					
				acheck = confirm(' Are you sure you want to replace an allocation?  You have unsaved changes.  Press OK to continue with your allocation replacement, which will lose any unsaved changes.  Press Cancel to cancel this allocation replacement.')
			}else{
				acheck =true;
			}
		if(acheck){
		  var selAll;
		  var selectedValues = [];
          $('#_filterAllocation').next().find('input[type=checkbox]:checked').each(function(i,e){
            selectedValues.push(e.value);
          });
		  if ($.inArray('All', selectedValues) >= 0) {
            selAll=true;
          } else {
            selAll=false; 
          }
		  $.LoadingOverlay("show");
          filterApplied =  true;			
		  statusFilter = true;
	      paageLoad(Globalresponded3,'',selAll);
		  statusFilter = false						
		  if(collapseEvent){
			collapseRowsFilter();
			collapseEvent = false;
		  }	
		$.LoadingOverlay("hide");}
		}
		function myFunction(id){
		  var dropId=$('#optionalFilter'+id);
		  dropId.multiselect('deselectAll', false);
          dropId.multiselect('updateButtonText');	
		  var col_nm ='Filter'+id;	
          var dropIdi ='optional'+col_nm;
		  var multiar = [];
	      var selections = [];
          $("#"+dropIdi+" option:selected").each(function(){
            var optionText = $(this).text();
            selections.push(optionText);
          });
          multiar = selections;
	      selectedFilterDropdown(multiar,col_nm,'');
		}
		function otherApply(id){
		  var acheck =false;
		  if(dataIdPP.length !=0){					
			acheck = confirm(' Are you sure you want to replace an allocation?  You have unsaved changes.  Press OK to continue with your allocation replacement, which will lose any unsaved changes.  Press Cancel to cancel this allocation replacement.')
		  }else{
			acheck =true;
		  }
		  global_onchangeEle = 'optionalFilter'+id;
		  var selAll;
		  var selectedValues = [];
          $("#"+global_onchangeEle).next().find('input[type=checkbox]:checked').each(function(i,e){
            selectedValues.push(e.value);
          });
		  if ($.inArray('All', selectedValues) >= 0) {
            selAll=true;
          } else {
            selAll=false; 
          }
		  var drp_id = 'optionalFilter'+id;
		  var col_nm = drp_id.replace('optional',''); 
		  var multiar = [];
		  filterApplied =  true;
		  //var item = e.item;
		  var selections = [];
          $("#"+global_onchangeEle+" option:selected").each(function(){
            var optionText = $(this).text();
            selections.push(optionText);
          });
		  var text = selections;
		  var id = $("#"+drp_id);
		  if(id.val() == null){multiar = [];}
		  multiar = text;
		  inactivUserIdn3 = true
		  if(acheck){
		  selectedFilterDropdown(multiar,col_nm,selAll);
	      lastselected = col_nm;
		  lastselectedAr = multiar;
		  if(collapseEvent){
			collapseRowsFilter();
			collapseEvent = false;
		  }	}					
		}
		var lastselected = "";
		var lastselectedAr = [];
		var multiarList = [];
		var multiFiltertype;
		var filterSwitch = false;
		var createdfilters = false;
		var filteredAr = [];
		var filterGrid = false;
		var inactivUserIdn2 = false;
		var Filterseries = [];
		var Filterseries_copy = '[]'
		var statusFilter = false;
		var resAr_new = [];
		function loadstatusFilterVal(rsp,multiar,selAll){
			
			
			var global_parse = rsp;//JSON.parse(rsp)
			var global_len = global_parse.length;
			
			var filteredstatus_ar = [];
			var filtererd = [];
			for(i=0;i<global_len;i++){	
				
				if(validProjects.indexOf(global_parse[i].Resourceuid) != -1){
					for(k in global_parse[i]){
						if(k.includes("_Status")){
							if(global_parse[i][k] == 'Proposed' || global_parse[i][k] == 'Rejected' || global_parse[i][k] == 'Committed' ){
								if(filtererd.indexOf(global_parse[i][k]) == -1){
									filtererd.push(global_parse[i][k]);//bug3837 2nd bug
									//filtererd.push(global_parse[i]['AllocationStatus']);
								}							
								
							}
							
						}
					}
				}
			}
			var filtererdF=[];
			var arr_AllocationStatus=[];
			filtererdF=removeDuplicates(filtererd);//bug3837 2nd bug
	      for (j = 0; j < filtererdF.length; j++) {
	        if (filtererdF.length > 0) {
		      var ri = j;
		      var rt = filtererdF[j];
		      arr_AllocationStatus.push({"label":rt,"value":rt})
	        }
	      }
		  $("#_filterAllocation").multiselect('dataprovider', arr_AllocationStatus);
		  var dropval =  multiar
		  $("#_filterAllocation").val(dropval);
		  var checkbox_li = $("#_filterAllocation").data("multiselect");
		  /*var this_All = checkbox_li.$ul.find('[value="All"]');
          if(selAll==true){
			this_All.prop('checked', true);
			this_All.closest('li').attr('class','active');	  
		  }	*/
          //if($("#_filterAllocation").children('option').length==dropval.length && $("#_filterAllocation").val()!=null){
		  if(dropval != null){
		  if($("#_filterAllocation").children('option').length==dropval.length){
            var this_All = checkbox_li.$ul.find('[value="All"]');
            this_All.prop('checked', true);
            this_All.closest('li').attr('class','active');	
          }	
		  }		  
		  var ity_len_cnt = 0;
		  
		  if(multiar!=null){
			for(j=0;j<dropval.length;j++){
			  var this_li = checkbox_li.$ul.find('[value="'+dropval[j]+'"]'); 
		      this_li.prop('checked', true);
			  this_li.closest('li').attr('class','active')
			  
		    }
		  }
			var nmsp = $("#_filterAllocation").attr('data-placeholder');
			var selectedValues=[];
			$('#_filterAllocation').next().find('input[type=checkbox]:checked').each(function(i,e){
            selectedValues.push(e.value);
			ity_len_cnt++
          });
		  if ($.inArray('All', selectedValues) >= 0) {
            ity_len_cnt--;
          } else {
            ity_len_cnt; 
          }
			//checkbox_li.$button.find('.multiselect-selected-text').text(nmsp+"("+ity_len_cnt+")")
			if(ity_len_cnt != 0){
			  checkbox_li.$button.find('.multiselect-selected-text').text(nmsp+"("+ity_len_cnt+")");
			}
			
			/*var dataSource = new kendo.data.DataSource({
				  data: filtererd
			});
			var multiselect = $("#_filterAllocation").data("kendoMultiSelect");
			multiselect.setDataSource(dataSource);
			
			//multiselect.value([]);
			multiselect.refresh();*/
			//multiselect.value(dropval_new);
			
			var cc =$("#_filterAllocation").find(":selected").length;
			var li_ar =  $("#_filterAllocation").prev().find('li');
			li_ar.text(nmsp+ " ("+cc+")");
			if($("#_filterAllocation").val() != null){						
				$("#_filterAllocation").prev().find('input').css('margin-top','-25px');
				li_ar.css('border-radius','0px');
				li_ar.css('border-color','white');
				li_ar.css('background-color','white');
			}else{
				$("#_filterAllocation").prev().find('input').css('margin-top','0px');
			}
		}
		function selectedFilter_status(multiar,mft,selAll){
			if(multiar == null){
				var len = 0;
			}
			else{
				var len = multiar.length;
			}
			
			var filtererd = [];
			var filtererd_res = [];
			var global_parse = JSON.parse(mft);
			//statusFilter = true;
			var allo_Id = [];
			if(len == 0){
				filtererd= global_parse;
				filtererd_res = global_parse;
			}
			if(len == 1){
				var global_len = global_parse.length;
				var filteredstatus_ar = [];
				for(i=0;i<global_len;i++){	
					
					if(global_parse[i].Projectname != "" && global_parse[i].Resourcename != ""){
						for(k in global_parse[i]){
							if(k.includes("_Status")){
								if(global_parse[i][k] == multiar[0] && validProjects.indexOf(global_parse[i].Resourceuid) != -1){
									filtererd.push(global_parse[i]);
									var rsID = global_parse[i].Projectuid
									
									for(j=0;j<global_len;j++){
										if(rsID == global_parse[j].Projectuid && allo_Id.indexOf(global_parse[j].AllocationUID) == -1){
											allo_Id.push(global_parse[j].AllocationUID);
											filtererd_res.push(global_parse[j]);
										}									
									}
									break;
								}
							}
						}
					}
				}
			} 
			
			
			if(len == 2){
				/* filtererd = global_parse.filter(function(x){
					return x.AllocationStatus == multiar[0] || x.AllocationStatus == multiar[1] || x.AllocationStatus == 'Capacity';
				}) */
				var global_len = global_parse.length;
				var filteredstatus_ar = [];
				for(i=0;i<global_len;i++){	
					if(global_parse[i].AllocationStatus == 'Capacity'){
						filtererd.push(global_parse[i]);
					}
					if(global_parse[i].Projectname != "" && global_parse[i].Resourcename != ""){
						for(k in global_parse[i]){
							if(k.includes("_Status")){
								if((global_parse[i][k] == multiar[0] || global_parse[i][k] == multiar[1]) && (validProjects.indexOf(global_parse[i].Resourceuid) != -1)){
									filtererd.push(global_parse[i]);
									var rsID = global_parse[i].Projectuid
									
									for(j=0;j<global_len;j++){
										if(rsID == global_parse[j].Projectuid && allo_Id.indexOf(global_parse[j].AllocationUID) == -1){
											allo_Id.push(global_parse[j].AllocationUID);
											filtererd_res.push(global_parse[j]);
										}									
									}
									break;
								}
							}
						}
					}
				}
			}
			if(len == 3){
				
				var global_len = global_parse.length;
				var filteredstatus_ar = [];
				for(i=0;i<global_len;i++){	
					if(global_parse[i].AllocationStatus == 'Capacity'){
						filtererd.push(global_parse[i]);
					}
					if(global_parse[i].Projectname != "" && global_parse[i].Resourcename != ""){
						for(k in global_parse[i]){
							if(k.includes("_Status")){
								if((global_parse[i][k] == multiar[0] || global_parse[i][k] == multiar[1] || global_parse[i][k] == multiar[2]) && (validProjects.indexOf(global_parse[i].Resourceuid) != -1)){
									filtererd.push(global_parse[i]);
									var rsID = global_parse[i].Projectuid
									
									for(j=0;j<global_len;j++){
										if(rsID == global_parse[j].Projectuid && allo_Id.indexOf(global_parse[j].AllocationUID) == -1){
											allo_Id.push(global_parse[j].AllocationUID);
											filtererd_res.push(global_parse[j]);
										}									
									}
									break;
								}
							}
						}
					}
				}
			}
			var new_filtererd = [];
			if(filtererd.length > 0){
				
			}
			Globalresponded4 = filtererd_res//filtererd;
			
			var Filterseries_copy1 = JSON.parse(Filterseries_copy)
			var filtererd_len = filtererd.length;
			resAr_new = [];
			var test_ar = [];
			for(f=0;f<filtererd_len;f++){
				if(filtererd[f].AllocationStatus != 'Capacity'){
					var resrce = AGGetResources.filter(function(d){
						return d.ResourceId == filtererd[f].Projectuid
					})[0];
					if(test_ar.indexOf(resrce.ResourceId) == -1){
						test_ar.push(resrce.ResourceId);
						resAr_new.push(resrce);
					}					
				}
			}
			if(Filterseries.length == 0 ){
				loadstatusFilterVal(global_parse,multiar,selAll);
			}
			else{
				loadstatusFilterVal(global_parse,multiar,selAll);
				
			}
			
				
			var po_len = ResFilter.length+1;
				 
			var d = resAr_new;
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
					
				}
				else{
					var nm = ($(this).find('select')[0].id).replace('optional','');
					var nmsp = $(this).find('select').attr('data-placeholder');
					var dropval = $(this).find('select').val();
					
					
			
					var arr = [];
					var arr2 = [];//c = filterSecman;
						
					if(nm == global_onchangeEle_2.replace('optional','')){
						//c = filterSecman;
						
						return true; 
						
					}	
				
					if(Filterseries.length == 1 && len == 0){//if(globalcount == 3 && nm != mft){
					  c = globalValDrop;
					}else{//if(globalcount == 3 && nm != mft){
						var count = 0;
						c = resAr_new;
					
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
								//count ++;
							}
						/////
						
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
					var this_All = checkbox_li.$ul.find('[value="All"]');
					if(selAll==true){
					  this_All.prop('checked', true);
				      this_All.closest('li').attr('class','active');
				    }
					//$(this).find('select').data("kendoMultiSelect").value([]);
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
							this_li.closest('li').attr('class','active');
                          }
					    }
					  }
					}
					if(ity_len_cnt != 0){checkbox_li.$button.find('.multiselect-selected-text').text(nmsp+"("+ity_len_cnt+")");}
				    $(this).find('select').val(dropval_new);
					//$(this).find('select').data("kendoMultiSelect").value(dropval_new);
					
					var cc =$("#optional"+nm).find(":selected").length;
				    $("#optional"+nm).prev().find('li').text(nmsp+ " ("+cc+")");
				   
				   if($("#optional"+nm).val() != null){						
					    $("#optional"+nm).prev().find('input').css('margin-top','-25px');
						$("#optional"+nm).prev().find('li').css('border-radius','0px');
						$("#optional"+nm).prev().find('li').css('border-color','white');
						$("#optional"+nm).prev().find('li').css('background-color','white');
					}
					else
					{
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
		function selectedFilterDropdown(multiar,mft,selAll){
			filterApplied_forvisiblitu = true;
			var nullDropdowns_count = 0
			$('td[name="td_filter"]').each(function(x){
				if($(this).find('select').val() == null){
					nullDropdowns_count ++;
				}
			});
			var totalDropdowns = $('td[name="td_filter"]').length;
			if(nullDropdowns_count == totalDropdowns){
				filterApplied_forvisiblitu = false;
			}
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
			
			
			filterSwitch = false;
			
			var fu = globalValDrop;
			
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
			
			
				setotherdropdown(globalValDrop,fu,mft,multiar,selAll);
			
			stickFilter = fu;
			
			roleEngagementload(fu,selAll);
			filterGrid = false;
		}
		var stickFilter = [];
		var globalStikyFil = []; 
		function setotherdropdown(Secman,fut,mft,multiar,selAll){
			//Finalmultival = [];
			var fu = fut//globalValDrop;
			
			
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
			
			var d = filterSecman;
			globalStikyFil = filterSecman;
			if(d.length == globalValDrop.length){
				//d = fut
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
					
					//multiarList = Secman;
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
					
				}
				else{
					
					var nm = ($(this).find('select')[0].id).replace('optional','');
					var nmsp = $(this).find('select').attr('data-placeholder');
					var dropval = $(this).find('select').val();
					
					
			
					var arr = [];
					var arr2 = [];
				
					if(nm == mft){
						//c = filterSecman;
						return true; 
						
					}
					if(Filterseries.length == 1){//if(globalcount == 3 && nm != mft){
						c = globalValDrop;
					}
					else {//if(globalcount == 3 && nm != mft){
						var count = 0;
						c = globalValDrop;
					
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
								//count ++;
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
					var this_All = checkbox_li.$ul.find('[value="All"]');
					if(selAll==true){
					  this_All.prop('checked', true);
					  this_All.closest('li').attr('class','active');	
					}
					//$(this).find('select').data("kendoMultiSelect").value([]);
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
						  if(item.length > 0){
							for(k=0;k<item.length;k++){
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
					  }
					}
					if(ity_len_cnt != 0){checkbox_li.$button.find('.multiselect-selected-text').text(nmsp+"("+ity_len_cnt+")");}
				    $(this).find('select').val(dropval_new);
					//$(this).find('select').data("kendoMultiSelect").value(dropval_new);
					
					var cc =$("#optional"+nm).find(":selected").length;
				    $("#optional"+nm).prev().find('li').text(nmsp+ " ("+cc+")");
				   
				   if($("#optional"+nm).val() != null){						
					    $("#optional"+nm).prev().find('input').css('margin-top','-25px');
						$("#optional"+nm).prev().find('li').css('border-radius','0px');
						$("#optional"+nm).prev().find('li').css('border-color','white');
						$("#optional"+nm).prev().find('li').css('background-color','white');
					}
					else
					{
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
		var sortingType = 0;
		var gridchanged = false;
		function clickapplyrescsorting(vv){
			var akcheck =false;
			if(gridchanged){
				akcheck = confirm('You have unsaved changes. Changing your sort order will lose these changes. Save your changes before adjusting your sort order.');
			
			}else{
				akcheck =true;
			}
			
			if(akcheck){
				//saveFilterEngagements();
				gridchanged = false;
				collapseRows();
				var val = "0";
				if(vv == undefined){
					val = "0";
				}
				else{
					val = vv;
				}
				
				if(val != '' || val == 0){
					sortingType = val;
					sortingApply = true;
					roleEngagementload();
					/* setTimeout(function () {
						sortingApply = false;
					}, 1000);	 */		
				}
			}
			//myWindowSort.data("kendoWindow").close();
			
		}
		
				
		function setInactiveResIcon(){
			for(i=0;i<newResar.length;i++){
				var coun = 0;
				var nmUID = ''
				$(".k-grouping-row").each(function(x){
					/* if(sortingType == 0 || sortingType == 1  || sortingType == 2){
						if($(this).eq(coun).find('p').text().replace(/\s+/g, '').split('|')[1].split('(')[0]==newResar[i].ResourceID){
							$(this).find('.k-i-plus').attr('class', 'k-icon k-i-error');
							$(this).find('.pointer').prop("onclick", null).off("click");
							$(this).find('.pointer').prop("title", "Inactive Resource")
						}
					}
					else{
						if($(this).eq(coun).find('p').text().replace(/\s+/g, '').split('|')[2].split('(')[0]==newResar[i].ResourceID){
							$(this).find('.k-i-plus').attr('class', 'k-icon k-i-error');
							$(this).find('.pointer').prop("onclick", null).off("click");
							$(this).find('.pointer').prop("title", "Inactive Resource")
						}
					} */
					nmUID = $(this).find('p.k-reset').find('#resId_grid').text();
					if(nmUID == newResar[i].ResourceID){
						$(this).find('.k-i-plus').attr('class', 'k-icon k-i-error');
						$(this).find('.pointer').prop("onclick", null).off("click");
						$(this).find('.pointer').prop("title", "Inactive Resource")
					}					
				})
			}
		}
		
		window.onbeforeunload = function () {
     
	 if(dataIdPP.length !=0){
			return 'Are you sure you want to leave this page?  You have unsaved changes.  Press OK to leave the page, which will lose any unsaved changes.  Press Cancel to stay on this page.';  
	  }
    }
	var arrColp = [];
	var arrColpName = [];
	var expand_collapse_className = ""
	function collapseRows(){
		expand_collapse_className = $('.k-group-cell').eq(1).find('.custom').attr('class');
		/* arrColp = [];
		arrColpName = []; */
		//var coun = 0;
		$('.k-grouping-row').each(function(x){			
			var indx = $(this).index('.k-grouping-row');
			var name = $(this).eq(0).find('p').find('#resId_grid').text();//$(this).eq(0).find('p').text().replace(/\s+/g, '');
			if($(this).find('p.k-reset').find('a').attr('class') != 'k-icon k-i-collapse'){
				if(arrColp.indexOf(indx) == -1){
					arrColp.push(indx);
				}
				if(arrColpName.indexOf(name) == -1){
					arrColpName.push(name)
				}
			}
			else{
				for(i=0;i<arrColp.length;i++){
					if(arrColp[i] == indx){
						arrColp.splice(i,1);
					}
				}
				for(i=0;i<arrColpName.length;i++){
					if(arrColpName[i] == name){
						arrColpName.splice(i,1);
					}
				}
			}
		})
	}
	function collapseRowsFilter(){
		expand_collapse_className = $('.k-group-cell').eq(1).find('.custom').attr('class');
		//var coun = 0;
		$('.k-grouping-row').each(function(x){
			var indx = $(this).index('.k-grouping-row');
			var name = $(this).eq(0).find('p').find('#resId_grid').text();//$(this).eq(0).find('p').text().replace(/\s+/g, '');
			if($(this).find('p.k-reset').find('a').attr('class') != 'k-icon k-i-collapse'){
				if(arrColp.indexOf(indx) == -1){
					arrColp.push(indx);
				}
				if(arrColpName.indexOf(name) == -1){
					arrColpName.push(name)
				}
			}
			else{
				for(i=0;i<arrColp.length;i++){
					if(arrColp[i] == indx){
						arrColp.splice(i,1);
					}
				}
				for(i=0;i<arrColpName.length;i++){
					if(arrColpName[i] == name){
						arrColpName.splice(i,1);
					}
				}
			}			
		})
	}
	var collapseEvent = false;
	
	$(document).on('click', "a.k-i-collapse.custom", function() {
		var grid = $("#PMLoadgrid").data("kendoGrid");
		$('.k-i-collapse.custom').attr('title', 'Expand All');
		$('.k-i-collapse.custom').attr('class', 'k-icon k-i-expand custom');		
		$('.k-grouping-row').each(function(x){
			grid.collapseRow(this);
		});     
			//resizeGrid()
	});
	$(document).on('click', "a.k-i-expand.custom", function() {
		var grid = $("#PMLoadgrid").data("kendoGrid");
		$('.k-i-expand.custom').attr('title', 'Collapse All');
		$('.k-i-expand.custom').attr('class', 'k-icon k-i-collapse custom');		
		$('.k-grouping-row').each(function(x){
			grid.expandRow(this);
		});
		
	});
			
		
	/* $('#fullscreenmode').click(function(x){

		var mainDiv_height = $('.col-sm-12').height();	
		if($('#fullscreenmode').is(":visible")){
			mainDiv_height = mainDiv_height - 14;
		}
		else{
			mainDiv_height = mainDiv_height - 14;
		}		
		$('.k-grid-header').css('top', mainDiv_height+'px');
	})

	$('#exitfullscreenmode').click(function(x){
	  // $('#s4-workspace').css('height', s4_workspace_height);
	  var mainDiv_height = $('.col-sm-12').height();	
		if($('#fullscreenmode').is(":visible")){
			mainDiv_height = mainDiv_height - 14;
		}
		else{
			mainDiv_height = mainDiv_height - 14;
		}	
		$('.k-grid-header').css('top', mainDiv_height+'px');
	})  */
	function removeSpecial(){
			if( filteredGrid ){
				return;
			} 
		
			$('#PMLoadgrid .k-grouping-row').each(function(x){
				if(sortingApply && (sortingType == 3 || sortingType == 4)){
					var newNM = $(this).find('p.k-reset').text().split('|')[1];
					var spn = $(this).find('p.k-reset').find('span');
					var spnn = spn.eq(1).append(spn.eq(2));
					var anch = $(this).find('p.k-reset').find('a');
					$(this).find('p.k-reset').html('');
					$(this).find('p.k-reset').append(anch).append(newNM).append(spn[0]).append(spnn);
				}
				else{
					var newNM = $(this).find('p.k-reset').text().split('|')[0];
					var spn = $(this).find('p.k-reset').find('span');
					var spnn = spn.eq(1).append(spn.eq(2));
					var anch = $(this).find('p.k-reset').find('a');
					$(this).find('p.k-reset').html('');
					$(this).find('p.k-reset').append(anch).append(newNM).append(spn[0]).append(spnn);
				}
				
			});
			if(repacedEng){
				var rowRID = "";
				var filterID = "";
				$('#PMLoadgrid').find('table.k-selectable').find('tr').each(function(x){
					
					if($(this).attr('class') == 'k-grouping-row'){
						if(sortingType == 0 || sortingType == 1 || sortingType == 2){
							rowRID = $(this).next('tr').find('td').eq(1).text().split('|')[1];
						}
						else{
							rowRID = $(this).next('tr').find('td').eq(1).text().split('|')[2];
						}
						filterID = resReName.filter(function(x){
							return x.ResourceID == rowRID
						})[0].Title;
						 return;
					}
					if($(this).attr('class') == 'k-group-footer'){
						return;
					}
					$(this).find('td').eq(1).text(filterID)   
				});
				repacedEng = false;
			}
		
	 
	}
	function sortOptionConfig(){
		$('th[data-field="Resourcename"]').contents().filter(function(){
			return this.nodeType === 3;
		}).remove();
		
		 $('th[data-field="Resourcename"]').append('<div id="sortingtypeList" class="dropdown-check-list" tabindex="100"><span class="sortingtypeListanchor">Project</span><ul class="sortingtypeListitems"></ul></div>');		
		$('.k-grid-header-wrap.k-auto-scrollable').css('position','initial')
		$('.sortingtypeListitems').append('<li onclick="clickapplyrescsorting(1)" id="1">Ascending by Resource Name </li>').append('<li id="2" onclick="clickapplyrescsorting(2)">Descending by Resource Name </li>');
		if(RM_ResourceDisplayField_N != undefined){
			$('.sortingtypeListitems').append('<li id="3" onclick="clickapplyrescsorting(3)">Ascending by '+RM_ResourceDisplayField_N+' </li>').append('<li id="4" onclick="clickapplyrescsorting(4)">Descending by '+RM_ResourceDisplayField_N+' </li>');
		}
		//$('.sortingtypeListitems').append('<div style = "padding-top: 23px;"><button onclick="clickapplyrescsorting();return false;" class="k-button k-primary" id=sortaplybtn>Apply</button></div>');
		
		
		/*********************************/
		var checkList = document.getElementById('sortingtypeList');
		checkList.getElementsByClassName('sortingtypeListanchor')[0].onclick = function(evt) {
			if(gridchanged){				
				alert('You have unsaved changes. Changing your sort order will lose these changes. Save your changes before adjusting your sort order.');	
				return false;				
			}
					
		  if (checkList.classList.contains('visible')){
			checkList.classList.remove('visible');
		  }
		  else{
				/* $('.sortingtypeListitems').find('input[type=checkbox]').each(function(x){
					if($(this).attr('id') == sortingType){
						$(this).prop("checked", true);
					}
				}) */
				
				$('.sortingtypeListitems').find('li').each(function(x){
					if($(this).attr('id') == sortingType){
						$(this).css("background", "#ccc");
					}
				})
				checkList.classList.add('visible');
			}
		}
		/* $('#sortingtypeList').click(function() {
			$('.sortingtypeListitems').html('')
			$('.sortingtypeListitems').append('<li><input type="checkbox" />Ascending by Resource Name </li>').append('<li id=2><input type="checkbox" />Descending by Resource Name </li>');
			if(RM_ResourceDisplayField_N != undefined){
				$('.sortingtypeListitems').append('<li id=3><input type="checkbox" />Ascending by '+RM_ResourceDisplayField_N+' </li>').append('<li id=4><input type="checkbox" />Descending by '+RM_ResourceDisplayField_N+' </li>');
			}
		}) */
		/* $('.sortingtypeListitems').find('input[type=checkbox]').click(function() {
			var chck = $(this).attr('id');
			$('.sortingtypeListitems').find('input[type=checkbox]').each(function(x){
				if($(this).attr('id') != chck){
					$(this).prop("checked", false);
				}
			})
			clickapplyrescsorting();
		}); */
		
		
	}
	function countDecimals(value) {
			if (Math.floor(value) !== value)
				return value.toString().split(".")[1].length || 0;
			return 0;
		}
	var formatter = new Intl.NumberFormat('en-US', {
		  style: 'currency',
		  currency: 'USD',
		  // These options are needed to round to whole numbers if that's what you want.
		  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
		  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
		});
	
	function formatDateF(dt){
		 
		return dt.getFullYear()+'-'+("0" + (dt.getMonth() + 1)).slice(-2)+'-'+("0" + (dt.getDay() + 1)).slice(-2);//+'T17:00:00'
	}
</script>
</body>
</html>