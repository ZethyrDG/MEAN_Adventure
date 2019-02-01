(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _house_house_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./house/house.component */ "./src/app/house/house.component.ts");
/* harmony import */ var _castle_castle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./castle/castle.component */ "./src/app/castle/castle.component.ts");
/* harmony import */ var _space_space_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./space/space.component */ "./src/app/space/space.component.ts");
/* harmony import */ var _house_front_room_front_room_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./house/front-room/front-room.component */ "./src/app/house/front-room/front-room.component.ts");
/* harmony import */ var _house_garage_garage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./house/garage/garage.component */ "./src/app/house/garage/garage.component.ts");
/* harmony import */ var _house_kitchen_kitchen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./house/kitchen/kitchen.component */ "./src/app/house/kitchen/kitchen.component.ts");
/* harmony import */ var _house_library_library_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./house/library/library.component */ "./src/app/house/library/library.component.ts");
/* harmony import */ var _house_bathroom_bathroom_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./house/bathroom/bathroom.component */ "./src/app/house/bathroom/bathroom.component.ts");
/* harmony import */ var _house_basement_basement_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./house/basement/basement.component */ "./src/app/house/basement/basement.component.ts");
/* harmony import */ var _house_parlor_parlor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./house/parlor/parlor.component */ "./src/app/house/parlor/parlor.component.ts");
/* harmony import */ var _house_master_bedroom_master_bedroom_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./house/master-bedroom/master-bedroom.component */ "./src/app/house/master-bedroom/master-bedroom.component.ts");
/* harmony import */ var _house_my_bedroom_my_bedroom_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./house/my-bedroom/my-bedroom.component */ "./src/app/house/my-bedroom/my-bedroom.component.ts");
/* harmony import */ var _house_upstairs_landing_upstairs_landing_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./house/upstairs-landing/upstairs-landing.component */ "./src/app/house/upstairs-landing/upstairs-landing.component.ts");
/* harmony import */ var _house_attic_attic_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./house/attic/attic.component */ "./src/app/house/attic/attic.component.ts");
/* harmony import */ var _house_backyard_backyard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./house/backyard/backyard.component */ "./src/app/house/backyard/backyard.component.ts");
/* harmony import */ var _house_shed_shed_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./house/shed/shed.component */ "./src/app/house/shed/shed.component.ts");
/* harmony import */ var _castle_tower_tower_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./castle/tower/tower.component */ "./src/app/castle/tower/tower.component.ts");
/* harmony import */ var _castle_towerpuzzle_towerpuzzle_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./castle/towerpuzzle/towerpuzzle.component */ "./src/app/castle/towerpuzzle/towerpuzzle.component.ts");
/* harmony import */ var _castle_mainroom_mainroom_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./castle/mainroom/mainroom.component */ "./src/app/castle/mainroom/mainroom.component.ts");
/* harmony import */ var _castle_hallway_hallway_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./castle/hallway/hallway.component */ "./src/app/castle/hallway/hallway.component.ts");
/* harmony import */ var _castle_hallwaypuzzle_hallwaypuzzle_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./castle/hallwaypuzzle/hallwaypuzzle.component */ "./src/app/castle/hallwaypuzzle/hallwaypuzzle.component.ts");
/* harmony import */ var _castle_hallwaysecret_hallwaysecret_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./castle/hallwaysecret/hallwaysecret.component */ "./src/app/castle/hallwaysecret/hallwaysecret.component.ts");
/* harmony import */ var _castle_hallwayescape_hallwayescape_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./castle/hallwayescape/hallwayescape.component */ "./src/app/castle/hallwayescape/hallwayescape.component.ts");
/* harmony import */ var _castle_hallwayescapepuzzle_hallwayescapepuzzle_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./castle/hallwayescapepuzzle/hallwayescapepuzzle.component */ "./src/app/castle/hallwayescapepuzzle/hallwayescapepuzzle.component.ts");
/* harmony import */ var _castle_hallwayduel_hallwayduel_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./castle/hallwayduel/hallwayduel.component */ "./src/app/castle/hallwayduel/hallwayduel.component.ts");
/* harmony import */ var _castle_hallwaywand_hallwaywand_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./castle/hallwaywand/hallwaywand.component */ "./src/app/castle/hallwaywand/hallwaywand.component.ts");
/* harmony import */ var _castle_dungeonroom1_dungeonroom1_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./castle/dungeonroom1/dungeonroom1.component */ "./src/app/castle/dungeonroom1/dungeonroom1.component.ts");
/* harmony import */ var _castle_dungeonroom1puzzle_dungeonroom1puzzle_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./castle/dungeonroom1puzzle/dungeonroom1puzzle.component */ "./src/app/castle/dungeonroom1puzzle/dungeonroom1puzzle.component.ts");
/* harmony import */ var _castle_dungeonroom2_dungeonroom2_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./castle/dungeonroom2/dungeonroom2.component */ "./src/app/castle/dungeonroom2/dungeonroom2.component.ts");
/* harmony import */ var _castle_dungeonroom2puzzle_dungeonroom2puzzle_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./castle/dungeonroom2puzzle/dungeonroom2puzzle.component */ "./src/app/castle/dungeonroom2puzzle/dungeonroom2puzzle.component.ts");
/* harmony import */ var _castle_dungeonroom3_dungeonroom3_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./castle/dungeonroom3/dungeonroom3.component */ "./src/app/castle/dungeonroom3/dungeonroom3.component.ts");
/* harmony import */ var _castle_dungeonroom3puzzle_dungeonroom3puzzle_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./castle/dungeonroom3puzzle/dungeonroom3puzzle.component */ "./src/app/castle/dungeonroom3puzzle/dungeonroom3puzzle.component.ts");
/* harmony import */ var _castle_dungeonspellbook_dungeonspellbook_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./castle/dungeonspellbook/dungeonspellbook.component */ "./src/app/castle/dungeonspellbook/dungeonspellbook.component.ts");
/* harmony import */ var _castle_lab_lab_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./castle/lab/lab.component */ "./src/app/castle/lab/lab.component.ts");
/* harmony import */ var _castle_lablockpuzzle_lablockpuzzle_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./castle/lablockpuzzle/lablockpuzzle.component */ "./src/app/castle/lablockpuzzle/lablockpuzzle.component.ts");
/* harmony import */ var _castle_labguardianpuzzle_labguardianpuzzle_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./castle/labguardianpuzzle/labguardianpuzzle.component */ "./src/app/castle/labguardianpuzzle/labguardianpuzzle.component.ts");
/* harmony import */ var _castle_labbookpuzzle_labbookpuzzle_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./castle/labbookpuzzle/labbookpuzzle.component */ "./src/app/castle/labbookpuzzle/labbookpuzzle.component.ts");
/* harmony import */ var _castle_labcombinepuzzle_labcombinepuzzle_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./castle/labcombinepuzzle/labcombinepuzzle.component */ "./src/app/castle/labcombinepuzzle/labcombinepuzzle.component.ts");
/* harmony import */ var _castle_labpotion_labpotion_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./castle/labpotion/labpotion.component */ "./src/app/castle/labpotion/labpotion.component.ts");
/* harmony import */ var _space_spaceroom_spaceroom_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./space/spaceroom/spaceroom.component */ "./src/app/space/spaceroom/spaceroom.component.ts");
/* harmony import */ var _space_spaceroompuzzle_spaceroompuzzle_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./space/spaceroompuzzle/spaceroompuzzle.component */ "./src/app/space/spaceroompuzzle/spaceroompuzzle.component.ts");
/* harmony import */ var _space_controlcenter_controlcenter_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./space/controlcenter/controlcenter.component */ "./src/app/space/controlcenter/controlcenter.component.ts");
/* harmony import */ var _space_navigationroom_navigationroom_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./space/navigationroom/navigationroom.component */ "./src/app/space/navigationroom/navigationroom.component.ts");
/* harmony import */ var _space_navigationpuzzle1_navigationpuzzle1_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./space/navigationpuzzle1/navigationpuzzle1.component */ "./src/app/space/navigationpuzzle1/navigationpuzzle1.component.ts");
/* harmony import */ var _space_navigationroom2_navigationroom2_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./space/navigationroom2/navigationroom2.component */ "./src/app/space/navigationroom2/navigationroom2.component.ts");
/* harmony import */ var _space_navigationpuzzle2_navigationpuzzle2_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./space/navigationpuzzle2/navigationpuzzle2.component */ "./src/app/space/navigationpuzzle2/navigationpuzzle2.component.ts");
/* harmony import */ var _space_navigationroom3_navigationroom3_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./space/navigationroom3/navigationroom3.component */ "./src/app/space/navigationroom3/navigationroom3.component.ts");
/* harmony import */ var _space_navigationpuzzle3_navigationpuzzle3_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./space/navigationpuzzle3/navigationpuzzle3.component */ "./src/app/space/navigationpuzzle3/navigationpuzzle3.component.ts");
/* harmony import */ var _space_navigationsuccess_navigationsuccess_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./space/navigationsuccess/navigationsuccess.component */ "./src/app/space/navigationsuccess/navigationsuccess.component.ts");
/* harmony import */ var _space_dataroom1_dataroom1_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./space/dataroom1/dataroom1.component */ "./src/app/space/dataroom1/dataroom1.component.ts");
/* harmony import */ var _space_dataroom2_dataroom2_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./space/dataroom2/dataroom2.component */ "./src/app/space/dataroom2/dataroom2.component.ts");
/* harmony import */ var _space_dataroom3_dataroom3_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./space/dataroom3/dataroom3.component */ "./src/app/space/dataroom3/dataroom3.component.ts");
/* harmony import */ var _space_datapuzzle1_datapuzzle1_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./space/datapuzzle1/datapuzzle1.component */ "./src/app/space/datapuzzle1/datapuzzle1.component.ts");
/* harmony import */ var _space_datapuzzle2_datapuzzle2_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./space/datapuzzle2/datapuzzle2.component */ "./src/app/space/datapuzzle2/datapuzzle2.component.ts");
/* harmony import */ var _space_datapuzzle3_datapuzzle3_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./space/datapuzzle3/datapuzzle3.component */ "./src/app/space/datapuzzle3/datapuzzle3.component.ts");
/* harmony import */ var _space_datasuccess_datasuccess_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./space/datasuccess/datasuccess.component */ "./src/app/space/datasuccess/datasuccess.component.ts");
/* harmony import */ var _space_engineroom_engineroom_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./space/engineroom/engineroom.component */ "./src/app/space/engineroom/engineroom.component.ts");
/* harmony import */ var _space_fixpartpuzzle1_fixpartpuzzle1_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./space/fixpartpuzzle1/fixpartpuzzle1.component */ "./src/app/space/fixpartpuzzle1/fixpartpuzzle1.component.ts");
/* harmony import */ var _space_fixpartpuzzle2_fixpartpuzzle2_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./space/fixpartpuzzle2/fixpartpuzzle2.component */ "./src/app/space/fixpartpuzzle2/fixpartpuzzle2.component.ts");
/* harmony import */ var _space_fixpartpuzzle3_fixpartpuzzle3_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./space/fixpartpuzzle3/fixpartpuzzle3.component */ "./src/app/space/fixpartpuzzle3/fixpartpuzzle3.component.ts");
/* harmony import */ var _space_enginerepaired_enginerepaired_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./space/enginerepaired/enginerepaired.component */ "./src/app/space/enginerepaired/enginerepaired.component.ts");
/* harmony import */ var _space_captainsroom_captainsroom_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./space/captainsroom/captainsroom.component */ "./src/app/space/captainsroom/captainsroom.component.ts");
/* harmony import */ var _temple_temple_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./temple/temple.component */ "./src/app/temple/temple.component.ts");
/* harmony import */ var _temple_staircase_staircase_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./temple/staircase/staircase.component */ "./src/app/temple/staircase/staircase.component.ts");
/* harmony import */ var _temple_templeentrance_templeentrance_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./temple/templeentrance/templeentrance.component */ "./src/app/temple/templeentrance/templeentrance.component.ts");
/* harmony import */ var _temple_entrancepuzzle_entrancepuzzle_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./temple/entrancepuzzle/entrancepuzzle.component */ "./src/app/temple/entrancepuzzle/entrancepuzzle.component.ts");
/* harmony import */ var _temple_halls_halls_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./temple/halls/halls.component */ "./src/app/temple/halls/halls.component.ts");
/* harmony import */ var _temple_bluebridge_bluebridge_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./temple/bluebridge/bluebridge.component */ "./src/app/temple/bluebridge/bluebridge.component.ts");
/* harmony import */ var _temple_bluebridgepuzzle_bluebridgepuzzle_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./temple/bluebridgepuzzle/bluebridgepuzzle.component */ "./src/app/temple/bluebridgepuzzle/bluebridgepuzzle.component.ts");
/* harmony import */ var _temple_bluedoor_bluedoor_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./temple/bluedoor/bluedoor.component */ "./src/app/temple/bluedoor/bluedoor.component.ts");
/* harmony import */ var _temple_bluedoorpuzzle_bluedoorpuzzle_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./temple/bluedoorpuzzle/bluedoorpuzzle.component */ "./src/app/temple/bluedoorpuzzle/bluedoorpuzzle.component.ts");
/* harmony import */ var _temple_blueflame_blueflame_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./temple/blueflame/blueflame.component */ "./src/app/temple/blueflame/blueflame.component.ts");
/* harmony import */ var _temple_bluepassage_bluepassage_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./temple/bluepassage/bluepassage.component */ "./src/app/temple/bluepassage/bluepassage.component.ts");
/* harmony import */ var _temple_redpassage_redpassage_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./temple/redpassage/redpassage.component */ "./src/app/temple/redpassage/redpassage.component.ts");
/* harmony import */ var _temple_redfire_redfire_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./temple/redfire/redfire.component */ "./src/app/temple/redfire/redfire.component.ts");
/* harmony import */ var _temple_redfirepuzzle_redfirepuzzle_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./temple/redfirepuzzle/redfirepuzzle.component */ "./src/app/temple/redfirepuzzle/redfirepuzzle.component.ts");
/* harmony import */ var _temple_redwind_redwind_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./temple/redwind/redwind.component */ "./src/app/temple/redwind/redwind.component.ts");
/* harmony import */ var _temple_redwindpuzzle_redwindpuzzle_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./temple/redwindpuzzle/redwindpuzzle.component */ "./src/app/temple/redwindpuzzle/redwindpuzzle.component.ts");
/* harmony import */ var _temple_redflame_redflame_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./temple/redflame/redflame.component */ "./src/app/temple/redflame/redflame.component.ts");
/* harmony import */ var _temple_purplepassage_purplepassage_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./temple/purplepassage/purplepassage.component */ "./src/app/temple/purplepassage/purplepassage.component.ts");
/* harmony import */ var _temple_purplefire_purplefire_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./temple/purplefire/purplefire.component */ "./src/app/temple/purplefire/purplefire.component.ts");
/* harmony import */ var _temple_purplefirepuzzle_purplefirepuzzle_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./temple/purplefirepuzzle/purplefirepuzzle.component */ "./src/app/temple/purplefirepuzzle/purplefirepuzzle.component.ts");
/* harmony import */ var _temple_purplesand_purplesand_component__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./temple/purplesand/purplesand.component */ "./src/app/temple/purplesand/purplesand.component.ts");
/* harmony import */ var _temple_purplesandpuzzle_purplesandpuzzle_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./temple/purplesandpuzzle/purplesandpuzzle.component */ "./src/app/temple/purplesandpuzzle/purplesandpuzzle.component.ts");
/* harmony import */ var _temple_purplewater_purplewater_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./temple/purplewater/purplewater.component */ "./src/app/temple/purplewater/purplewater.component.ts");
/* harmony import */ var _temple_purplewaterpuzzle_purplewaterpuzzle_component__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./temple/purplewaterpuzzle/purplewaterpuzzle.component */ "./src/app/temple/purplewaterpuzzle/purplewaterpuzzle.component.ts");
/* harmony import */ var _temple_purpleair_purpleair_component__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./temple/purpleair/purpleair.component */ "./src/app/temple/purpleair/purpleair.component.ts");
/* harmony import */ var _temple_purpleairpuzzle_purpleairpuzzle_component__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./temple/purpleairpuzzle/purpleairpuzzle.component */ "./src/app/temple/purpleairpuzzle/purpleairpuzzle.component.ts");
/* harmony import */ var _temple_treasure_treasure_component__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./temple/treasure/treasure.component */ "./src/app/temple/treasure/treasure.component.ts");
/* harmony import */ var _temple_youwin_youwin_component__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./temple/youwin/youwin.component */ "./src/app/temple/youwin/youwin.component.ts");





























































































var routes = [
    { path: 'house', component: _house_house_component__WEBPACK_IMPORTED_MODULE_3__["HouseComponent"], children: [
            { path: 'frontroom', component: _house_front_room_front_room_component__WEBPACK_IMPORTED_MODULE_6__["FrontRoomComponent"] },
            { path: 'garage', component: _house_garage_garage_component__WEBPACK_IMPORTED_MODULE_7__["GarageComponent"] },
            { path: 'kitchen', component: _house_kitchen_kitchen_component__WEBPACK_IMPORTED_MODULE_8__["KitchenComponent"] },
            { path: 'library', component: _house_library_library_component__WEBPACK_IMPORTED_MODULE_9__["LibraryComponent"] },
            { path: 'bathroom', component: _house_bathroom_bathroom_component__WEBPACK_IMPORTED_MODULE_10__["BathroomComponent"] },
            { path: 'basement', component: _house_basement_basement_component__WEBPACK_IMPORTED_MODULE_11__["BasementComponent"] },
            { path: 'parlor', component: _house_parlor_parlor_component__WEBPACK_IMPORTED_MODULE_12__["ParlorComponent"] },
            { path: 'masterbedroom', component: _house_master_bedroom_master_bedroom_component__WEBPACK_IMPORTED_MODULE_13__["MasterBedroomComponent"] },
            { path: 'mybedroom', component: _house_my_bedroom_my_bedroom_component__WEBPACK_IMPORTED_MODULE_14__["MyBedroomComponent"] },
            { path: 'upstairslanding', component: _house_upstairs_landing_upstairs_landing_component__WEBPACK_IMPORTED_MODULE_15__["UpstairsLandingComponent"] },
            { path: 'attic', component: _house_attic_attic_component__WEBPACK_IMPORTED_MODULE_16__["AtticComponent"] },
            { path: 'backyard', component: _house_backyard_backyard_component__WEBPACK_IMPORTED_MODULE_17__["BackyardComponent"] },
            { path: 'shed', component: _house_shed_shed_component__WEBPACK_IMPORTED_MODULE_18__["ShedComponent"] },
        ] },
    { path: 'castle', component: _castle_castle_component__WEBPACK_IMPORTED_MODULE_4__["CastleComponent"], children: [
            { path: 'tower', component: _castle_tower_tower_component__WEBPACK_IMPORTED_MODULE_19__["TowerComponent"] },
            { path: 'towerpuzzle', component: _castle_towerpuzzle_towerpuzzle_component__WEBPACK_IMPORTED_MODULE_20__["TowerpuzzleComponent"] },
            { path: 'mainroom', component: _castle_mainroom_mainroom_component__WEBPACK_IMPORTED_MODULE_21__["MainroomComponent"] },
            { path: 'hallway', component: _castle_hallway_hallway_component__WEBPACK_IMPORTED_MODULE_22__["HallwayComponent"] },
            { path: 'hallwaypuzzle', component: _castle_hallwaypuzzle_hallwaypuzzle_component__WEBPACK_IMPORTED_MODULE_23__["HallwaypuzzleComponent"] },
            { path: 'hallwaysecret', component: _castle_hallwaysecret_hallwaysecret_component__WEBPACK_IMPORTED_MODULE_24__["HallwaysecretComponent"] },
            { path: 'hallwayescape', component: _castle_hallwayescape_hallwayescape_component__WEBPACK_IMPORTED_MODULE_25__["HallwayescapeComponent"] },
            { path: 'hallwayescapepuzzle', component: _castle_hallwayescapepuzzle_hallwayescapepuzzle_component__WEBPACK_IMPORTED_MODULE_26__["HallwayescapepuzzleComponent"] },
            { path: 'hallwayduel', component: _castle_hallwayduel_hallwayduel_component__WEBPACK_IMPORTED_MODULE_27__["HallwayduelComponent"] },
            { path: 'hallwaywand', component: _castle_hallwaywand_hallwaywand_component__WEBPACK_IMPORTED_MODULE_28__["HallwaywandComponent"] },
            { path: 'dungeonroom1', component: _castle_dungeonroom1_dungeonroom1_component__WEBPACK_IMPORTED_MODULE_29__["Dungeonroom1Component"] },
            { path: 'dungeonroom1puzzle', component: _castle_dungeonroom1puzzle_dungeonroom1puzzle_component__WEBPACK_IMPORTED_MODULE_30__["Dungeonroom1puzzleComponent"] },
            { path: 'dungeonroom2', component: _castle_dungeonroom2_dungeonroom2_component__WEBPACK_IMPORTED_MODULE_31__["Dungeonroom2Component"] },
            { path: 'dungeonroom2puzzle', component: _castle_dungeonroom2puzzle_dungeonroom2puzzle_component__WEBPACK_IMPORTED_MODULE_32__["Dungeonroom2puzzleComponent"] },
            { path: 'dungeonroom3', component: _castle_dungeonroom3_dungeonroom3_component__WEBPACK_IMPORTED_MODULE_33__["Dungeonroom3Component"] },
            { path: 'dungeonroom3puzzle', component: _castle_dungeonroom3puzzle_dungeonroom3puzzle_component__WEBPACK_IMPORTED_MODULE_34__["Dungeonroom3puzzleComponent"] },
            { path: 'dungeonspellbook', component: _castle_dungeonspellbook_dungeonspellbook_component__WEBPACK_IMPORTED_MODULE_35__["DungeonspellbookComponent"] },
            { path: 'lab', component: _castle_lab_lab_component__WEBPACK_IMPORTED_MODULE_36__["LabComponent"] },
            { path: 'lablockpuzzle', component: _castle_lablockpuzzle_lablockpuzzle_component__WEBPACK_IMPORTED_MODULE_37__["LablockpuzzleComponent"] },
            { path: 'labguardianpuzzle', component: _castle_labguardianpuzzle_labguardianpuzzle_component__WEBPACK_IMPORTED_MODULE_38__["LabguardianpuzzleComponent"] },
            { path: 'labbookpuzzle', component: _castle_labbookpuzzle_labbookpuzzle_component__WEBPACK_IMPORTED_MODULE_39__["LabbookpuzzleComponent"] },
            { path: 'labcombinepuzzle', component: _castle_labcombinepuzzle_labcombinepuzzle_component__WEBPACK_IMPORTED_MODULE_40__["LabcombinepuzzleComponent"] },
            { path: 'labpotion', component: _castle_labpotion_labpotion_component__WEBPACK_IMPORTED_MODULE_41__["LabpotionComponent"] },
        ] },
    { path: 'space', component: _space_space_component__WEBPACK_IMPORTED_MODULE_5__["SpaceComponent"], children: [
            { path: 'spaceroom', component: _space_spaceroom_spaceroom_component__WEBPACK_IMPORTED_MODULE_42__["SpaceroomComponent"] },
            { path: 'spaceroompuzzle', component: _space_spaceroompuzzle_spaceroompuzzle_component__WEBPACK_IMPORTED_MODULE_43__["SpaceroompuzzleComponent"] },
            { path: 'controlcenter', component: _space_controlcenter_controlcenter_component__WEBPACK_IMPORTED_MODULE_44__["ControlcenterComponent"] },
            { path: 'navigationroom', component: _space_navigationroom_navigationroom_component__WEBPACK_IMPORTED_MODULE_45__["NavigationroomComponent"] },
            { path: 'navigationpuzzle1', component: _space_navigationpuzzle1_navigationpuzzle1_component__WEBPACK_IMPORTED_MODULE_46__["Navigationpuzzle1Component"] },
            { path: 'navigationroom2', component: _space_navigationroom2_navigationroom2_component__WEBPACK_IMPORTED_MODULE_47__["Navigationroom2Component"] },
            { path: 'navigationpuzzle2', component: _space_navigationpuzzle2_navigationpuzzle2_component__WEBPACK_IMPORTED_MODULE_48__["Navigationpuzzle2Component"] },
            { path: 'navigationroom3', component: _space_navigationroom3_navigationroom3_component__WEBPACK_IMPORTED_MODULE_49__["Navigationroom3Component"] },
            { path: 'navigationpuzzle3', component: _space_navigationpuzzle3_navigationpuzzle3_component__WEBPACK_IMPORTED_MODULE_50__["Navigationpuzzle3Component"] },
            { path: 'navigationsuccess', component: _space_navigationsuccess_navigationsuccess_component__WEBPACK_IMPORTED_MODULE_51__["NavigationsuccessComponent"] },
            { path: 'dataroom1', component: _space_dataroom1_dataroom1_component__WEBPACK_IMPORTED_MODULE_52__["Dataroom1Component"] },
            { path: 'dataroom2', component: _space_dataroom2_dataroom2_component__WEBPACK_IMPORTED_MODULE_53__["Dataroom2Component"] },
            { path: 'dataroom3', component: _space_dataroom3_dataroom3_component__WEBPACK_IMPORTED_MODULE_54__["Dataroom3Component"] },
            { path: 'datapuzzle1', component: _space_datapuzzle1_datapuzzle1_component__WEBPACK_IMPORTED_MODULE_55__["Datapuzzle1Component"] },
            { path: 'datapuzzle2', component: _space_datapuzzle2_datapuzzle2_component__WEBPACK_IMPORTED_MODULE_56__["Datapuzzle2Component"] },
            { path: 'datapuzzle3', component: _space_datapuzzle3_datapuzzle3_component__WEBPACK_IMPORTED_MODULE_57__["Datapuzzle3Component"] },
            { path: 'datasuccess', component: _space_datasuccess_datasuccess_component__WEBPACK_IMPORTED_MODULE_58__["DatasuccessComponent"] },
            { path: 'engineroom', component: _space_engineroom_engineroom_component__WEBPACK_IMPORTED_MODULE_59__["EngineroomComponent"] },
            { path: 'fixpartpuzzle1', component: _space_fixpartpuzzle1_fixpartpuzzle1_component__WEBPACK_IMPORTED_MODULE_60__["Fixpartpuzzle1Component"] },
            { path: 'fixpartpuzzle2', component: _space_fixpartpuzzle2_fixpartpuzzle2_component__WEBPACK_IMPORTED_MODULE_61__["Fixpartpuzzle2Component"] },
            { path: 'fixpartpuzzle3', component: _space_fixpartpuzzle3_fixpartpuzzle3_component__WEBPACK_IMPORTED_MODULE_62__["Fixpartpuzzle3Component"] },
            { path: 'enginerepaired', component: _space_enginerepaired_enginerepaired_component__WEBPACK_IMPORTED_MODULE_63__["EnginerepairedComponent"] },
            { path: 'captainsroom', component: _space_captainsroom_captainsroom_component__WEBPACK_IMPORTED_MODULE_64__["CaptainsroomComponent"] },
        ] },
    { path: 'temple', component: _temple_temple_component__WEBPACK_IMPORTED_MODULE_65__["TempleComponent"], children: [
            { path: 'staircase', component: _temple_staircase_staircase_component__WEBPACK_IMPORTED_MODULE_66__["StaircaseComponent"] },
            { path: 'entrance', component: _temple_templeentrance_templeentrance_component__WEBPACK_IMPORTED_MODULE_67__["TempleentranceComponent"] },
            { path: 'entrancepuzzle', component: _temple_entrancepuzzle_entrancepuzzle_component__WEBPACK_IMPORTED_MODULE_68__["EntrancepuzzleComponent"] },
            { path: 'halls', component: _temple_halls_halls_component__WEBPACK_IMPORTED_MODULE_69__["HallsComponent"] },
            { path: 'bluepassage', component: _temple_bluepassage_bluepassage_component__WEBPACK_IMPORTED_MODULE_75__["BluepassageComponent"] },
            { path: 'bluebridge', component: _temple_bluebridge_bluebridge_component__WEBPACK_IMPORTED_MODULE_70__["BluebridgeComponent"] },
            { path: 'bluebridgepuzzle', component: _temple_bluebridgepuzzle_bluebridgepuzzle_component__WEBPACK_IMPORTED_MODULE_71__["BluebridgepuzzleComponent"] },
            { path: 'bluedoor', component: _temple_bluedoor_bluedoor_component__WEBPACK_IMPORTED_MODULE_72__["BluedoorComponent"] },
            { path: 'bluedoorpuzzle', component: _temple_bluedoorpuzzle_bluedoorpuzzle_component__WEBPACK_IMPORTED_MODULE_73__["BluedoorpuzzleComponent"] },
            { path: 'blueflame', component: _temple_blueflame_blueflame_component__WEBPACK_IMPORTED_MODULE_74__["BlueflameComponent"] },
            { path: 'redpassage', component: _temple_redpassage_redpassage_component__WEBPACK_IMPORTED_MODULE_76__["RedpassageComponent"] },
            { path: 'redfire', component: _temple_redfire_redfire_component__WEBPACK_IMPORTED_MODULE_77__["RedfireComponent"] },
            { path: 'redfirepuzzle', component: _temple_redfirepuzzle_redfirepuzzle_component__WEBPACK_IMPORTED_MODULE_78__["RedfirepuzzleComponent"] },
            { path: 'redwind', component: _temple_redwind_redwind_component__WEBPACK_IMPORTED_MODULE_79__["RedwindComponent"] },
            { path: 'redwindpuzzle', component: _temple_redwindpuzzle_redwindpuzzle_component__WEBPACK_IMPORTED_MODULE_80__["RedwindpuzzleComponent"] },
            { path: 'redflame', component: _temple_redflame_redflame_component__WEBPACK_IMPORTED_MODULE_81__["RedflameComponent"] },
            { path: 'purplepassage', component: _temple_purplepassage_purplepassage_component__WEBPACK_IMPORTED_MODULE_82__["PurplepassageComponent"] },
            { path: 'purplefire', component: _temple_purplefire_purplefire_component__WEBPACK_IMPORTED_MODULE_83__["PurplefireComponent"] },
            { path: 'purplefirepuzzle', component: _temple_purplefirepuzzle_purplefirepuzzle_component__WEBPACK_IMPORTED_MODULE_84__["PurplefirepuzzleComponent"] },
            { path: 'purplesand', component: _temple_purplesand_purplesand_component__WEBPACK_IMPORTED_MODULE_85__["PurplesandComponent"] },
            { path: 'purplesandpuzzle', component: _temple_purplesandpuzzle_purplesandpuzzle_component__WEBPACK_IMPORTED_MODULE_86__["PurplesandpuzzleComponent"] },
            { path: 'purplewater', component: _temple_purplewater_purplewater_component__WEBPACK_IMPORTED_MODULE_87__["PurplewaterComponent"] },
            { path: 'purplewaterpuzzle', component: _temple_purplewaterpuzzle_purplewaterpuzzle_component__WEBPACK_IMPORTED_MODULE_88__["PurplewaterpuzzleComponent"] },
            { path: 'purpleair', component: _temple_purpleair_purpleair_component__WEBPACK_IMPORTED_MODULE_89__["PurpleairComponent"] },
            { path: 'purpleairpuzzle', component: _temple_purpleairpuzzle_purpleairpuzzle_component__WEBPACK_IMPORTED_MODULE_90__["PurpleairpuzzleComponent"] },
            { path: 'treasure', component: _temple_treasure_treasure_component__WEBPACK_IMPORTED_MODULE_91__["TreasureComponent"] },
            { path: 'youwin', component: _temple_youwin_youwin_component__WEBPACK_IMPORTED_MODULE_92__["YouwinComponent"] },
        ] },
    { path: '**', redirectTo: '/' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"gamestart == 0\" style=\"text-align:center\">\r\n  <h1>Welcome to {{ title }}!</h1>\r\n  <button (click)=\"onClickParam(0)\">New</button><button (click)=\"onClickParam(1)\">Load</button>\r\n  <p style=\"color:red\" *ngIf=\"usertaken == 1\">That user name is already taken!</p>\r\n</div>\r\n<router-outlet></router-outlet>\r\n<div *ngIf=\"gamestart != 0\" style=\"text-align:center\">\r\n<button (click)=\"onClickParam(2)\">Save</button>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.title = 'MEAN Adventure';
        this.gamestart = 0;
        this.usertaken = 0;
    }
    AppComponent.prototype.onClickParam = function (type) {
        var _this = this;
        if (type == 0) {
            var user = window.prompt("Please enter a new username");
            this._httpService.user.username = user;
            this._httpService.user.location = "/house/frontroom";
            var observe = this._httpService.create(this._httpService.user);
            observe.subscribe(function (data) {
                if (data.errmsg != undefined) {
                    _this.usertaken = 1;
                    _this._router.navigate(['/']);
                }
                else {
                    _this.usertaken = 0;
                    console.log(data);
                    _this.gamestart = 1;
                    _this._httpService.user = data;
                    _this._router.navigate(['/house/frontroom']); //put back in when all buttons have been placed
                }
            });
        }
        if (type == 1) {
            var user = window.prompt("Please enter your username");
            var observe = this._httpService.getOne(user);
            observe.subscribe(function (data) {
                _this.usertaken = 0;
                _this._httpService.user = data[0];
                var location = data[0].location;
                _this.gamestart = 1;
                _this._router.navigate([location]);
            });
        }
        if (type == 2) {
            this._httpService.user.location = this._router.url;
            var observe = this._httpService.update(this._httpService.user);
            observe.subscribe(function (data) {
                console.log(data);
            });
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _house_house_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./house/house.component */ "./src/app/house/house.component.ts");
/* harmony import */ var _castle_castle_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./castle/castle.component */ "./src/app/castle/castle.component.ts");
/* harmony import */ var _space_space_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./space/space.component */ "./src/app/space/space.component.ts");
/* harmony import */ var _house_front_room_front_room_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./house/front-room/front-room.component */ "./src/app/house/front-room/front-room.component.ts");
/* harmony import */ var _house_garage_garage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./house/garage/garage.component */ "./src/app/house/garage/garage.component.ts");
/* harmony import */ var _house_kitchen_kitchen_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./house/kitchen/kitchen.component */ "./src/app/house/kitchen/kitchen.component.ts");
/* harmony import */ var _house_library_library_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./house/library/library.component */ "./src/app/house/library/library.component.ts");
/* harmony import */ var _house_bathroom_bathroom_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./house/bathroom/bathroom.component */ "./src/app/house/bathroom/bathroom.component.ts");
/* harmony import */ var _house_basement_basement_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./house/basement/basement.component */ "./src/app/house/basement/basement.component.ts");
/* harmony import */ var _house_parlor_parlor_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./house/parlor/parlor.component */ "./src/app/house/parlor/parlor.component.ts");
/* harmony import */ var _house_master_bedroom_master_bedroom_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./house/master-bedroom/master-bedroom.component */ "./src/app/house/master-bedroom/master-bedroom.component.ts");
/* harmony import */ var _house_my_bedroom_my_bedroom_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./house/my-bedroom/my-bedroom.component */ "./src/app/house/my-bedroom/my-bedroom.component.ts");
/* harmony import */ var _house_upstairs_landing_upstairs_landing_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./house/upstairs-landing/upstairs-landing.component */ "./src/app/house/upstairs-landing/upstairs-landing.component.ts");
/* harmony import */ var _house_attic_attic_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./house/attic/attic.component */ "./src/app/house/attic/attic.component.ts");
/* harmony import */ var _house_backyard_backyard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./house/backyard/backyard.component */ "./src/app/house/backyard/backyard.component.ts");
/* harmony import */ var _house_shed_shed_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./house/shed/shed.component */ "./src/app/house/shed/shed.component.ts");
/* harmony import */ var _castle_tower_tower_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./castle/tower/tower.component */ "./src/app/castle/tower/tower.component.ts");
/* harmony import */ var _castle_towerpuzzle_towerpuzzle_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./castle/towerpuzzle/towerpuzzle.component */ "./src/app/castle/towerpuzzle/towerpuzzle.component.ts");
/* harmony import */ var _castle_mainroom_mainroom_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./castle/mainroom/mainroom.component */ "./src/app/castle/mainroom/mainroom.component.ts");
/* harmony import */ var _castle_hallway_hallway_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./castle/hallway/hallway.component */ "./src/app/castle/hallway/hallway.component.ts");
/* harmony import */ var _castle_hallwaypuzzle_hallwaypuzzle_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./castle/hallwaypuzzle/hallwaypuzzle.component */ "./src/app/castle/hallwaypuzzle/hallwaypuzzle.component.ts");
/* harmony import */ var _castle_hallwaysecret_hallwaysecret_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./castle/hallwaysecret/hallwaysecret.component */ "./src/app/castle/hallwaysecret/hallwaysecret.component.ts");
/* harmony import */ var _castle_hallwayescape_hallwayescape_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./castle/hallwayescape/hallwayescape.component */ "./src/app/castle/hallwayescape/hallwayescape.component.ts");
/* harmony import */ var _castle_hallwayescapepuzzle_hallwayescapepuzzle_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./castle/hallwayescapepuzzle/hallwayescapepuzzle.component */ "./src/app/castle/hallwayescapepuzzle/hallwayescapepuzzle.component.ts");
/* harmony import */ var _castle_hallwayduel_hallwayduel_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./castle/hallwayduel/hallwayduel.component */ "./src/app/castle/hallwayduel/hallwayduel.component.ts");
/* harmony import */ var _castle_hallwaywand_hallwaywand_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./castle/hallwaywand/hallwaywand.component */ "./src/app/castle/hallwaywand/hallwaywand.component.ts");
/* harmony import */ var _castle_dungeonroom1_dungeonroom1_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./castle/dungeonroom1/dungeonroom1.component */ "./src/app/castle/dungeonroom1/dungeonroom1.component.ts");
/* harmony import */ var _castle_dungeonroom1puzzle_dungeonroom1puzzle_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./castle/dungeonroom1puzzle/dungeonroom1puzzle.component */ "./src/app/castle/dungeonroom1puzzle/dungeonroom1puzzle.component.ts");
/* harmony import */ var _castle_dungeonroom2_dungeonroom2_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./castle/dungeonroom2/dungeonroom2.component */ "./src/app/castle/dungeonroom2/dungeonroom2.component.ts");
/* harmony import */ var _castle_dungeonroom2puzzle_dungeonroom2puzzle_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./castle/dungeonroom2puzzle/dungeonroom2puzzle.component */ "./src/app/castle/dungeonroom2puzzle/dungeonroom2puzzle.component.ts");
/* harmony import */ var _castle_dungeonroom3_dungeonroom3_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./castle/dungeonroom3/dungeonroom3.component */ "./src/app/castle/dungeonroom3/dungeonroom3.component.ts");
/* harmony import */ var _castle_dungeonroom3puzzle_dungeonroom3puzzle_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./castle/dungeonroom3puzzle/dungeonroom3puzzle.component */ "./src/app/castle/dungeonroom3puzzle/dungeonroom3puzzle.component.ts");
/* harmony import */ var _castle_dungeonspellbook_dungeonspellbook_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./castle/dungeonspellbook/dungeonspellbook.component */ "./src/app/castle/dungeonspellbook/dungeonspellbook.component.ts");
/* harmony import */ var _castle_lab_lab_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./castle/lab/lab.component */ "./src/app/castle/lab/lab.component.ts");
/* harmony import */ var _castle_lablockpuzzle_lablockpuzzle_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./castle/lablockpuzzle/lablockpuzzle.component */ "./src/app/castle/lablockpuzzle/lablockpuzzle.component.ts");
/* harmony import */ var _castle_labguardianpuzzle_labguardianpuzzle_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./castle/labguardianpuzzle/labguardianpuzzle.component */ "./src/app/castle/labguardianpuzzle/labguardianpuzzle.component.ts");
/* harmony import */ var _castle_labbookpuzzle_labbookpuzzle_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./castle/labbookpuzzle/labbookpuzzle.component */ "./src/app/castle/labbookpuzzle/labbookpuzzle.component.ts");
/* harmony import */ var _castle_labcombinepuzzle_labcombinepuzzle_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./castle/labcombinepuzzle/labcombinepuzzle.component */ "./src/app/castle/labcombinepuzzle/labcombinepuzzle.component.ts");
/* harmony import */ var _castle_labpotion_labpotion_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./castle/labpotion/labpotion.component */ "./src/app/castle/labpotion/labpotion.component.ts");
/* harmony import */ var _space_spaceroom_spaceroom_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./space/spaceroom/spaceroom.component */ "./src/app/space/spaceroom/spaceroom.component.ts");
/* harmony import */ var _space_spaceroompuzzle_spaceroompuzzle_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./space/spaceroompuzzle/spaceroompuzzle.component */ "./src/app/space/spaceroompuzzle/spaceroompuzzle.component.ts");
/* harmony import */ var _space_controlcenter_controlcenter_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./space/controlcenter/controlcenter.component */ "./src/app/space/controlcenter/controlcenter.component.ts");
/* harmony import */ var _space_navigationroom_navigationroom_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./space/navigationroom/navigationroom.component */ "./src/app/space/navigationroom/navigationroom.component.ts");
/* harmony import */ var _space_navigationpuzzle1_navigationpuzzle1_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./space/navigationpuzzle1/navigationpuzzle1.component */ "./src/app/space/navigationpuzzle1/navigationpuzzle1.component.ts");
/* harmony import */ var _space_navigationroom2_navigationroom2_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./space/navigationroom2/navigationroom2.component */ "./src/app/space/navigationroom2/navigationroom2.component.ts");
/* harmony import */ var _space_navigationpuzzle2_navigationpuzzle2_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./space/navigationpuzzle2/navigationpuzzle2.component */ "./src/app/space/navigationpuzzle2/navigationpuzzle2.component.ts");
/* harmony import */ var _space_navigationroom3_navigationroom3_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./space/navigationroom3/navigationroom3.component */ "./src/app/space/navigationroom3/navigationroom3.component.ts");
/* harmony import */ var _space_navigationpuzzle3_navigationpuzzle3_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./space/navigationpuzzle3/navigationpuzzle3.component */ "./src/app/space/navigationpuzzle3/navigationpuzzle3.component.ts");
/* harmony import */ var _space_navigationsuccess_navigationsuccess_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./space/navigationsuccess/navigationsuccess.component */ "./src/app/space/navigationsuccess/navigationsuccess.component.ts");
/* harmony import */ var _space_dataroom1_dataroom1_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./space/dataroom1/dataroom1.component */ "./src/app/space/dataroom1/dataroom1.component.ts");
/* harmony import */ var _space_dataroom2_dataroom2_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./space/dataroom2/dataroom2.component */ "./src/app/space/dataroom2/dataroom2.component.ts");
/* harmony import */ var _space_dataroom3_dataroom3_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./space/dataroom3/dataroom3.component */ "./src/app/space/dataroom3/dataroom3.component.ts");
/* harmony import */ var _space_datapuzzle1_datapuzzle1_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./space/datapuzzle1/datapuzzle1.component */ "./src/app/space/datapuzzle1/datapuzzle1.component.ts");
/* harmony import */ var _space_datapuzzle2_datapuzzle2_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./space/datapuzzle2/datapuzzle2.component */ "./src/app/space/datapuzzle2/datapuzzle2.component.ts");
/* harmony import */ var _space_datapuzzle3_datapuzzle3_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./space/datapuzzle3/datapuzzle3.component */ "./src/app/space/datapuzzle3/datapuzzle3.component.ts");
/* harmony import */ var _space_datasuccess_datasuccess_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./space/datasuccess/datasuccess.component */ "./src/app/space/datasuccess/datasuccess.component.ts");
/* harmony import */ var _space_engineroom_engineroom_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./space/engineroom/engineroom.component */ "./src/app/space/engineroom/engineroom.component.ts");
/* harmony import */ var _space_fixpartpuzzle1_fixpartpuzzle1_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./space/fixpartpuzzle1/fixpartpuzzle1.component */ "./src/app/space/fixpartpuzzle1/fixpartpuzzle1.component.ts");
/* harmony import */ var _space_fixpartpuzzle2_fixpartpuzzle2_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./space/fixpartpuzzle2/fixpartpuzzle2.component */ "./src/app/space/fixpartpuzzle2/fixpartpuzzle2.component.ts");
/* harmony import */ var _space_fixpartpuzzle3_fixpartpuzzle3_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./space/fixpartpuzzle3/fixpartpuzzle3.component */ "./src/app/space/fixpartpuzzle3/fixpartpuzzle3.component.ts");
/* harmony import */ var _space_enginerepaired_enginerepaired_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./space/enginerepaired/enginerepaired.component */ "./src/app/space/enginerepaired/enginerepaired.component.ts");
/* harmony import */ var _space_captainsroom_captainsroom_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./space/captainsroom/captainsroom.component */ "./src/app/space/captainsroom/captainsroom.component.ts");
/* harmony import */ var _temple_temple_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./temple/temple.component */ "./src/app/temple/temple.component.ts");
/* harmony import */ var _temple_staircase_staircase_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./temple/staircase/staircase.component */ "./src/app/temple/staircase/staircase.component.ts");
/* harmony import */ var _temple_templeentrance_templeentrance_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./temple/templeentrance/templeentrance.component */ "./src/app/temple/templeentrance/templeentrance.component.ts");
/* harmony import */ var _temple_entrancepuzzle_entrancepuzzle_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./temple/entrancepuzzle/entrancepuzzle.component */ "./src/app/temple/entrancepuzzle/entrancepuzzle.component.ts");
/* harmony import */ var _temple_halls_halls_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./temple/halls/halls.component */ "./src/app/temple/halls/halls.component.ts");
/* harmony import */ var _temple_bluebridge_bluebridge_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./temple/bluebridge/bluebridge.component */ "./src/app/temple/bluebridge/bluebridge.component.ts");
/* harmony import */ var _temple_bluebridgepuzzle_bluebridgepuzzle_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./temple/bluebridgepuzzle/bluebridgepuzzle.component */ "./src/app/temple/bluebridgepuzzle/bluebridgepuzzle.component.ts");
/* harmony import */ var _temple_bluedoor_bluedoor_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./temple/bluedoor/bluedoor.component */ "./src/app/temple/bluedoor/bluedoor.component.ts");
/* harmony import */ var _temple_bluedoorpuzzle_bluedoorpuzzle_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./temple/bluedoorpuzzle/bluedoorpuzzle.component */ "./src/app/temple/bluedoorpuzzle/bluedoorpuzzle.component.ts");
/* harmony import */ var _temple_blueflame_blueflame_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./temple/blueflame/blueflame.component */ "./src/app/temple/blueflame/blueflame.component.ts");
/* harmony import */ var _temple_bluepassage_bluepassage_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./temple/bluepassage/bluepassage.component */ "./src/app/temple/bluepassage/bluepassage.component.ts");
/* harmony import */ var _temple_redpassage_redpassage_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./temple/redpassage/redpassage.component */ "./src/app/temple/redpassage/redpassage.component.ts");
/* harmony import */ var _temple_redfire_redfire_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./temple/redfire/redfire.component */ "./src/app/temple/redfire/redfire.component.ts");
/* harmony import */ var _temple_redfirepuzzle_redfirepuzzle_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./temple/redfirepuzzle/redfirepuzzle.component */ "./src/app/temple/redfirepuzzle/redfirepuzzle.component.ts");
/* harmony import */ var _temple_redwind_redwind_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./temple/redwind/redwind.component */ "./src/app/temple/redwind/redwind.component.ts");
/* harmony import */ var _temple_redwindpuzzle_redwindpuzzle_component__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./temple/redwindpuzzle/redwindpuzzle.component */ "./src/app/temple/redwindpuzzle/redwindpuzzle.component.ts");
/* harmony import */ var _temple_redflame_redflame_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./temple/redflame/redflame.component */ "./src/app/temple/redflame/redflame.component.ts");
/* harmony import */ var _temple_purplepassage_purplepassage_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./temple/purplepassage/purplepassage.component */ "./src/app/temple/purplepassage/purplepassage.component.ts");
/* harmony import */ var _temple_purplefire_purplefire_component__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./temple/purplefire/purplefire.component */ "./src/app/temple/purplefire/purplefire.component.ts");
/* harmony import */ var _temple_purplefirepuzzle_purplefirepuzzle_component__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./temple/purplefirepuzzle/purplefirepuzzle.component */ "./src/app/temple/purplefirepuzzle/purplefirepuzzle.component.ts");
/* harmony import */ var _temple_purplesand_purplesand_component__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./temple/purplesand/purplesand.component */ "./src/app/temple/purplesand/purplesand.component.ts");
/* harmony import */ var _temple_purplesandpuzzle_purplesandpuzzle_component__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./temple/purplesandpuzzle/purplesandpuzzle.component */ "./src/app/temple/purplesandpuzzle/purplesandpuzzle.component.ts");
/* harmony import */ var _temple_purplewater_purplewater_component__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./temple/purplewater/purplewater.component */ "./src/app/temple/purplewater/purplewater.component.ts");
/* harmony import */ var _temple_purplewaterpuzzle_purplewaterpuzzle_component__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./temple/purplewaterpuzzle/purplewaterpuzzle.component */ "./src/app/temple/purplewaterpuzzle/purplewaterpuzzle.component.ts");
/* harmony import */ var _temple_purpleair_purpleair_component__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./temple/purpleair/purpleair.component */ "./src/app/temple/purpleair/purpleair.component.ts");
/* harmony import */ var _temple_purpleairpuzzle_purpleairpuzzle_component__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ./temple/purpleairpuzzle/purpleairpuzzle.component */ "./src/app/temple/purpleairpuzzle/purpleairpuzzle.component.ts");
/* harmony import */ var _temple_treasure_treasure_component__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ./temple/treasure/treasure.component */ "./src/app/temple/treasure/treasure.component.ts");
/* harmony import */ var _temple_youwin_youwin_component__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ./temple/youwin/youwin.component */ "./src/app/temple/youwin/youwin.component.ts");


































































































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _house_house_component__WEBPACK_IMPORTED_MODULE_8__["HouseComponent"],
                _castle_castle_component__WEBPACK_IMPORTED_MODULE_9__["CastleComponent"],
                _space_space_component__WEBPACK_IMPORTED_MODULE_10__["SpaceComponent"],
                _house_front_room_front_room_component__WEBPACK_IMPORTED_MODULE_11__["FrontRoomComponent"],
                _house_garage_garage_component__WEBPACK_IMPORTED_MODULE_12__["GarageComponent"],
                _house_kitchen_kitchen_component__WEBPACK_IMPORTED_MODULE_13__["KitchenComponent"],
                _house_library_library_component__WEBPACK_IMPORTED_MODULE_14__["LibraryComponent"],
                _house_bathroom_bathroom_component__WEBPACK_IMPORTED_MODULE_15__["BathroomComponent"],
                _house_basement_basement_component__WEBPACK_IMPORTED_MODULE_16__["BasementComponent"],
                _house_parlor_parlor_component__WEBPACK_IMPORTED_MODULE_17__["ParlorComponent"],
                _house_master_bedroom_master_bedroom_component__WEBPACK_IMPORTED_MODULE_18__["MasterBedroomComponent"],
                _house_my_bedroom_my_bedroom_component__WEBPACK_IMPORTED_MODULE_19__["MyBedroomComponent"],
                _house_upstairs_landing_upstairs_landing_component__WEBPACK_IMPORTED_MODULE_20__["UpstairsLandingComponent"],
                _house_attic_attic_component__WEBPACK_IMPORTED_MODULE_21__["AtticComponent"],
                _house_backyard_backyard_component__WEBPACK_IMPORTED_MODULE_22__["BackyardComponent"],
                _house_shed_shed_component__WEBPACK_IMPORTED_MODULE_23__["ShedComponent"],
                _castle_tower_tower_component__WEBPACK_IMPORTED_MODULE_24__["TowerComponent"],
                _castle_towerpuzzle_towerpuzzle_component__WEBPACK_IMPORTED_MODULE_25__["TowerpuzzleComponent"],
                _castle_mainroom_mainroom_component__WEBPACK_IMPORTED_MODULE_26__["MainroomComponent"],
                _castle_hallway_hallway_component__WEBPACK_IMPORTED_MODULE_27__["HallwayComponent"],
                _castle_hallwaypuzzle_hallwaypuzzle_component__WEBPACK_IMPORTED_MODULE_28__["HallwaypuzzleComponent"],
                _castle_hallwaysecret_hallwaysecret_component__WEBPACK_IMPORTED_MODULE_29__["HallwaysecretComponent"],
                _castle_hallwayescape_hallwayescape_component__WEBPACK_IMPORTED_MODULE_30__["HallwayescapeComponent"],
                _castle_hallwayduel_hallwayduel_component__WEBPACK_IMPORTED_MODULE_32__["HallwayduelComponent"],
                _castle_hallwaywand_hallwaywand_component__WEBPACK_IMPORTED_MODULE_33__["HallwaywandComponent"],
                _castle_dungeonroom1_dungeonroom1_component__WEBPACK_IMPORTED_MODULE_34__["Dungeonroom1Component"],
                _castle_dungeonroom1puzzle_dungeonroom1puzzle_component__WEBPACK_IMPORTED_MODULE_35__["Dungeonroom1puzzleComponent"],
                _castle_dungeonroom2_dungeonroom2_component__WEBPACK_IMPORTED_MODULE_36__["Dungeonroom2Component"],
                _castle_dungeonroom2puzzle_dungeonroom2puzzle_component__WEBPACK_IMPORTED_MODULE_37__["Dungeonroom2puzzleComponent"],
                _castle_dungeonroom3_dungeonroom3_component__WEBPACK_IMPORTED_MODULE_38__["Dungeonroom3Component"],
                _castle_dungeonroom3puzzle_dungeonroom3puzzle_component__WEBPACK_IMPORTED_MODULE_39__["Dungeonroom3puzzleComponent"],
                _castle_dungeonspellbook_dungeonspellbook_component__WEBPACK_IMPORTED_MODULE_40__["DungeonspellbookComponent"],
                _castle_lab_lab_component__WEBPACK_IMPORTED_MODULE_41__["LabComponent"],
                _castle_lablockpuzzle_lablockpuzzle_component__WEBPACK_IMPORTED_MODULE_42__["LablockpuzzleComponent"],
                _castle_labguardianpuzzle_labguardianpuzzle_component__WEBPACK_IMPORTED_MODULE_43__["LabguardianpuzzleComponent"],
                _castle_labbookpuzzle_labbookpuzzle_component__WEBPACK_IMPORTED_MODULE_44__["LabbookpuzzleComponent"],
                _castle_labcombinepuzzle_labcombinepuzzle_component__WEBPACK_IMPORTED_MODULE_45__["LabcombinepuzzleComponent"],
                _castle_labpotion_labpotion_component__WEBPACK_IMPORTED_MODULE_46__["LabpotionComponent"],
                _space_spaceroom_spaceroom_component__WEBPACK_IMPORTED_MODULE_47__["SpaceroomComponent"],
                _space_spaceroompuzzle_spaceroompuzzle_component__WEBPACK_IMPORTED_MODULE_48__["SpaceroompuzzleComponent"],
                _space_controlcenter_controlcenter_component__WEBPACK_IMPORTED_MODULE_49__["ControlcenterComponent"],
                _space_navigationroom_navigationroom_component__WEBPACK_IMPORTED_MODULE_50__["NavigationroomComponent"],
                _space_navigationpuzzle1_navigationpuzzle1_component__WEBPACK_IMPORTED_MODULE_51__["Navigationpuzzle1Component"],
                _space_navigationroom2_navigationroom2_component__WEBPACK_IMPORTED_MODULE_52__["Navigationroom2Component"],
                _space_navigationpuzzle2_navigationpuzzle2_component__WEBPACK_IMPORTED_MODULE_53__["Navigationpuzzle2Component"],
                _space_navigationroom3_navigationroom3_component__WEBPACK_IMPORTED_MODULE_54__["Navigationroom3Component"],
                _space_navigationpuzzle3_navigationpuzzle3_component__WEBPACK_IMPORTED_MODULE_55__["Navigationpuzzle3Component"],
                _space_navigationsuccess_navigationsuccess_component__WEBPACK_IMPORTED_MODULE_56__["NavigationsuccessComponent"],
                _space_dataroom1_dataroom1_component__WEBPACK_IMPORTED_MODULE_57__["Dataroom1Component"],
                _space_dataroom2_dataroom2_component__WEBPACK_IMPORTED_MODULE_58__["Dataroom2Component"],
                _space_dataroom3_dataroom3_component__WEBPACK_IMPORTED_MODULE_59__["Dataroom3Component"],
                _space_datapuzzle1_datapuzzle1_component__WEBPACK_IMPORTED_MODULE_60__["Datapuzzle1Component"],
                _space_datapuzzle2_datapuzzle2_component__WEBPACK_IMPORTED_MODULE_61__["Datapuzzle2Component"],
                _space_datapuzzle3_datapuzzle3_component__WEBPACK_IMPORTED_MODULE_62__["Datapuzzle3Component"],
                _space_datasuccess_datasuccess_component__WEBPACK_IMPORTED_MODULE_63__["DatasuccessComponent"],
                _space_engineroom_engineroom_component__WEBPACK_IMPORTED_MODULE_64__["EngineroomComponent"],
                _space_fixpartpuzzle1_fixpartpuzzle1_component__WEBPACK_IMPORTED_MODULE_65__["Fixpartpuzzle1Component"],
                _space_fixpartpuzzle2_fixpartpuzzle2_component__WEBPACK_IMPORTED_MODULE_66__["Fixpartpuzzle2Component"],
                _space_fixpartpuzzle3_fixpartpuzzle3_component__WEBPACK_IMPORTED_MODULE_67__["Fixpartpuzzle3Component"],
                _space_enginerepaired_enginerepaired_component__WEBPACK_IMPORTED_MODULE_68__["EnginerepairedComponent"],
                _space_captainsroom_captainsroom_component__WEBPACK_IMPORTED_MODULE_69__["CaptainsroomComponent"],
                _castle_hallwayescapepuzzle_hallwayescapepuzzle_component__WEBPACK_IMPORTED_MODULE_31__["HallwayescapepuzzleComponent"],
                _temple_temple_component__WEBPACK_IMPORTED_MODULE_70__["TempleComponent"],
                _temple_staircase_staircase_component__WEBPACK_IMPORTED_MODULE_71__["StaircaseComponent"],
                _temple_templeentrance_templeentrance_component__WEBPACK_IMPORTED_MODULE_72__["TempleentranceComponent"],
                _temple_entrancepuzzle_entrancepuzzle_component__WEBPACK_IMPORTED_MODULE_73__["EntrancepuzzleComponent"],
                _temple_bluebridge_bluebridge_component__WEBPACK_IMPORTED_MODULE_75__["BluebridgeComponent"],
                _temple_bluebridgepuzzle_bluebridgepuzzle_component__WEBPACK_IMPORTED_MODULE_76__["BluebridgepuzzleComponent"],
                _temple_bluedoor_bluedoor_component__WEBPACK_IMPORTED_MODULE_77__["BluedoorComponent"],
                _temple_bluedoorpuzzle_bluedoorpuzzle_component__WEBPACK_IMPORTED_MODULE_78__["BluedoorpuzzleComponent"],
                _temple_blueflame_blueflame_component__WEBPACK_IMPORTED_MODULE_79__["BlueflameComponent"],
                _temple_bluepassage_bluepassage_component__WEBPACK_IMPORTED_MODULE_80__["BluepassageComponent"],
                _temple_redpassage_redpassage_component__WEBPACK_IMPORTED_MODULE_81__["RedpassageComponent"],
                _temple_redfire_redfire_component__WEBPACK_IMPORTED_MODULE_82__["RedfireComponent"],
                _temple_redfirepuzzle_redfirepuzzle_component__WEBPACK_IMPORTED_MODULE_83__["RedfirepuzzleComponent"],
                _temple_redwind_redwind_component__WEBPACK_IMPORTED_MODULE_84__["RedwindComponent"],
                _temple_redwindpuzzle_redwindpuzzle_component__WEBPACK_IMPORTED_MODULE_85__["RedwindpuzzleComponent"],
                _temple_redflame_redflame_component__WEBPACK_IMPORTED_MODULE_86__["RedflameComponent"],
                _temple_purplepassage_purplepassage_component__WEBPACK_IMPORTED_MODULE_87__["PurplepassageComponent"],
                _temple_purplefire_purplefire_component__WEBPACK_IMPORTED_MODULE_88__["PurplefireComponent"],
                _temple_purplefirepuzzle_purplefirepuzzle_component__WEBPACK_IMPORTED_MODULE_89__["PurplefirepuzzleComponent"],
                _temple_purplesand_purplesand_component__WEBPACK_IMPORTED_MODULE_90__["PurplesandComponent"],
                _temple_purplesandpuzzle_purplesandpuzzle_component__WEBPACK_IMPORTED_MODULE_91__["PurplesandpuzzleComponent"],
                _temple_purplewater_purplewater_component__WEBPACK_IMPORTED_MODULE_92__["PurplewaterComponent"],
                _temple_purplewaterpuzzle_purplewaterpuzzle_component__WEBPACK_IMPORTED_MODULE_93__["PurplewaterpuzzleComponent"],
                _temple_purpleair_purpleair_component__WEBPACK_IMPORTED_MODULE_94__["PurpleairComponent"],
                _temple_purpleairpuzzle_purpleairpuzzle_component__WEBPACK_IMPORTED_MODULE_95__["PurpleairpuzzleComponent"],
                _temple_treasure_treasure_component__WEBPACK_IMPORTED_MODULE_96__["TreasureComponent"],
                _temple_youwin_youwin_component__WEBPACK_IMPORTED_MODULE_97__["YouwinComponent"],
                _temple_halls_halls_component__WEBPACK_IMPORTED_MODULE_74__["HallsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/castle/castle.component.css":
/*!*********************************************!*\
  !*** ./src/app/castle/castle.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nspan{\r\n    display: inline-block;\r\n}\r\n.inventory{\r\n    width: 800px;\r\n    outline: 3px solid black;\r\n    height: 41px;\r\n    \r\n}\r\n.item{\r\n    display: inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzdGxlL2Nhc3RsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixZQUFZOztBQUVoQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY2FzdGxlL2Nhc3RsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnNwYW57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmludmVudG9yeXtcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIG91dGxpbmU6IDNweCBzb2xpZCBibGFjaztcclxuICAgIGhlaWdodDogNDFweDtcclxuICAgIFxyXG59XHJcbi5pdGVte1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/castle/castle.component.html":
/*!**********************************************!*\
  !*** ./src/app/castle/castle.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container\">\r\n        <p>Wizard's Castle</p>\r\n    \r\n    <div class=\"inventory\">\r\n        <div *ngFor=\"let item of allItems | keyvalue\" class=\"item\">\r\n                <pre *ngIf=\"item.value\" >{{item.key}}, </pre>\r\n        </div>\r\n    </div>\r\n\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/castle/castle.component.ts":
/*!********************************************!*\
  !*** ./src/app/castle/castle.component.ts ***!
  \********************************************/
/*! exports provided: CastleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastleComponent", function() { return CastleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



var CastleComponent = /** @class */ (function () {
    function CastleComponent(_httpService) {
        this._httpService = _httpService;
        this.allItems = this._httpService.user.inventory;
    }
    CastleComponent.prototype.ngOnInit = function () {
        console.log(this.allItems);
    };
    CastleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-castle',
            template: __webpack_require__(/*! ./castle.component.html */ "./src/app/castle/castle.component.html"),
            styles: [__webpack_require__(/*! ./castle.component.css */ "./src/app/castle/castle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], CastleComponent);
    return CastleComponent;
}());



/***/ }),

/***/ "./src/app/castle/dungeonroom1/dungeonroom1.component.css":
/*!****************************************************************!*\
  !*** ./src/app/castle/dungeonroom1/dungeonroom1.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.door{\r\n    position: absolute;\r\n    left:320px;\r\n    top: 470px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(250, 215, 162), rgb(202, 157, 31));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzdGxlL2R1bmdlb25yb29tMS9kdW5nZW9ucm9vbTEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0kseUVBQXlFO0lBQ3pFLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Nhc3RsZS9kdW5nZW9ucm9vbTEvZHVuZ2VvbnJvb20xLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbn1cclxuLmRvb3J7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjMyMHB4O1xyXG4gICAgdG9wOiA0NzBweDtcclxufVxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIHJnYigyNTAsIDIxNSwgMTYyKSwgcmdiKDIwMiwgMTU3LCAzMSkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/castle/dungeonroom1/dungeonroom1.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/castle/dungeonroom1/dungeonroom1.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Castle Dungeon</p>\r\n<img src=\"./assets/img/dungeon.png\" alt=\"engineroomimg\">\r\n<button class=\"door\" [routerLink] = \"['../dungeonroom1puzzle']\">Inspect the door</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/castle/dungeonroom1/dungeonroom1.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/castle/dungeonroom1/dungeonroom1.component.ts ***!
  \***************************************************************/
/*! exports provided: Dungeonroom1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dungeonroom1Component", function() { return Dungeonroom1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var Dungeonroom1Component = /** @class */ (function () {
    function Dungeonroom1Component(_httpService) {
        this._httpService = _httpService;
    }
    Dungeonroom1Component.prototype.ngOnInit = function () {
        if (this._httpService.user.progress.dungeonfail == false) {
            this.description = "The wand reacts violently as it dispels the seal on the door. As you quickly move through the doorway, you feel as if something isn't right. Moving a little further into the room, the door suddenly slams behind you. Nothing you try will open the door. The only way to go now, is forward.";
            this._httpService.user.progress.dungeon == true;
        }
        if (this._httpService.user.progress.dungeonfail == true) {
            this.description = "As the final X fills in on the door, the room starts to fade, and you suddenly find yourself back in the first room of the dungeon, all three seals still active!";
            this._httpService.user.progress.dungeonfail = false;
        }
    };
    Dungeonroom1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dungeonroom1',
            template: __webpack_require__(/*! ./dungeonroom1.component.html */ "./src/app/castle/dungeonroom1/dungeonroom1.component.html"),
            styles: [__webpack_require__(/*! ./dungeonroom1.component.css */ "./src/app/castle/dungeonroom1/dungeonroom1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], Dungeonroom1Component);
    return Dungeonroom1Component;
}());



/***/ }),

/***/ "./src/app/castle/dungeonroom1puzzle/dungeonroom1puzzle.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/castle/dungeonroom1puzzle/dungeonroom1puzzle.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n.door{\r\n    position: absolute;\r\n    left:320px;\r\n    top: 470px;\r\n    background-image: linear-gradient( rgb(250, 215, 162), rgb(202, 157, 31));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzdGxlL2R1bmdlb25yb29tMXB1enpsZS9kdW5nZW9ucm9vbTFwdXp6bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLHlFQUF5RTtJQUN6RSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jYXN0bGUvZHVuZ2VvbnJvb20xcHV6emxlL2R1bmdlb25yb29tMXB1enpsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3h7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG59XHJcbi5vbntcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4uZG9vcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6MzIwcHg7XHJcbiAgICB0b3A6IDQ3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCByZ2IoMjUwLCAyMTUsIDE2MiksIHJnYigyMDIsIDE1NywgMzEpKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/castle/dungeonroom1puzzle/dungeonroom1puzzle.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/castle/dungeonroom1puzzle/dungeonroom1puzzle.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Dungeon</p>\r\n<img *ngIf=\"life == 3\" src=\"./assets/img/dungeon.png\" alt=\"dungeonimg\">\r\n<img *ngIf=\"life == 2\" src=\"./assets/img/dungeon1.png\" alt=\"dungeonimg\">\r\n<img *ngIf=\"life == 1\" src=\"./assets/img/dungeon2.png\" alt=\"dungeonimg\">\r\n<button class=\"door\" [ngClass]=\"{ 'on': switch }\" [routerLink] = \"['../dungeonroom2']\">Open the door</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n<div [ngClass]=\"{ 'on': switch1 }\">\r\n    <p [innerHTML]=\"question\"></p>\r\n    <div *ngFor=\"let answer of answers; let i = index\">\r\n        <button (click)=\"onClick(i)\" [innerHTML]=\"answer\"></button>\r\n        <br>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/castle/dungeonroom1puzzle/dungeonroom1puzzle.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/castle/dungeonroom1puzzle/dungeonroom1puzzle.component.ts ***!
  \***************************************************************************/
/*! exports provided: Dungeonroom1puzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dungeonroom1puzzleComponent", function() { return Dungeonroom1puzzleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Dungeonroom1puzzleComponent = /** @class */ (function () {
    function Dungeonroom1puzzleComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.count = 0;
        this.life = 3;
        this.switch = true;
        this.switch1 = false;
    }
    Dungeonroom1puzzleComponent.prototype.ngOnInit = function () {
        this.description = "The door to the next room blocks your way. There are three seals on the door, and a question appears.";
        this.getQuestion();
    };
    Dungeonroom1puzzleComponent.prototype.shuffle = function (arr) {
        var x = arr.length - 1;
        var temp;
        while (x != 0) {
            var y = Math.floor(Math.random() * x);
            temp = arr[y];
            arr[y] = arr[x];
            arr[x] = temp;
            x--;
        }
    };
    Dungeonroom1puzzleComponent.prototype.getQuestion = function () {
        var _this = this;
        var observe = this._httpService.getMediumHistory();
        observe.subscribe(function (data) {
            data.results[0].incorrect_answers.push(data.results[0].correct_answer);
            _this.shuffle(data.results[0].incorrect_answers);
            _this.question = data.results[0].question;
            _this.answers = data.results[0].incorrect_answers;
            _this.correct = data.results[0].correct_answer;
        });
    };
    Dungeonroom1puzzleComponent.prototype.onClick = function (index) {
        if (this.answers[index] == this.correct) {
            this.count++;
            if (this.count == 3) {
                this.description = "The final seal is gone, and you hear a click. The door unlocks.";
                this.switch1 = true;
                this.switch = false;
            }
            else {
                if (this.count == 1) {
                    this.description = "One of the seals disappear. Two to go.";
                    this.getQuestion();
                }
                if (this.count == 2) {
                    this.description = "Another seal vanishes. Just one more!";
                    this.getQuestion();
                }
            }
        }
        else {
            if (this.life == 3) {
                this.description = "In the center of the three seals, an X appears. It looks like there is only room for 2 more. Best not to find out what happens if you get any more wrong...";
                this.life--;
                this.getQuestion();
            }
            else if (this.life == 2) {
                this.description = "Another X appears in the center. There's only room for one more...";
                this.life--;
                this.getQuestion();
            }
            else if (this.life == 1) {
                this._httpService.user.progress.dungeonfail = true;
                this._router.navigate(['/castle/dungeonroom1']);
            }
        }
    };
    Dungeonroom1puzzleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dungeonroom1puzzle',
            template: __webpack_require__(/*! ./dungeonroom1puzzle.component.html */ "./src/app/castle/dungeonroom1puzzle/dungeonroom1puzzle.component.html"),
            styles: [__webpack_require__(/*! ./dungeonroom1puzzle.component.css */ "./src/app/castle/dungeonroom1puzzle/dungeonroom1puzzle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Dungeonroom1puzzleComponent);
    return Dungeonroom1puzzleComponent;
}());



/***/ }),

/***/ "./src/app/castle/dungeonroom2/dungeonroom2.component.css":
/*!****************************************************************!*\
  !*** ./src/app/castle/dungeonroom2/dungeonroom2.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.door{\r\n    position: absolute;\r\n    left:320px;\r\n    top: 470px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(250, 215, 162), rgb(202, 157, 31));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzdGxlL2R1bmdlb25yb29tMi9kdW5nZW9ucm9vbTIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0kseUVBQXlFO0lBQ3pFLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Nhc3RsZS9kdW5nZW9ucm9vbTIvZHVuZ2VvbnJvb20yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbn1cclxuLmRvb3J7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjMyMHB4O1xyXG4gICAgdG9wOiA0NzBweDtcclxufVxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIHJnYigyNTAsIDIxNSwgMTYyKSwgcmdiKDIwMiwgMTU3LCAzMSkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/castle/dungeonroom2/dungeonroom2.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/castle/dungeonroom2/dungeonroom2.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Dungeon</p>\r\n<img src=\"./assets/img/dungeon.png\" alt=\"engineroomimg\">\r\n<button class=\"door\" [routerLink] = \"['../dungeonroom2puzzle']\">Check the next door</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/castle/dungeonroom2/dungeonroom2.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/castle/dungeonroom2/dungeonroom2.component.ts ***!
  \***************************************************************/
/*! exports provided: Dungeonroom2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dungeonroom2Component", function() { return Dungeonroom2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var Dungeonroom2Component = /** @class */ (function () {
    function Dungeonroom2Component(_httpService) {
        this._httpService = _httpService;
    }
    Dungeonroom2Component.prototype.ngOnInit = function () {
        this.description = "As you solve the puzzle and move into the next room, you hear the familiar sound of the door slamming behind you. Nothing to do but continue on.";
    };
    Dungeonroom2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dungeonroom2',
            template: __webpack_require__(/*! ./dungeonroom2.component.html */ "./src/app/castle/dungeonroom2/dungeonroom2.component.html"),
            styles: [__webpack_require__(/*! ./dungeonroom2.component.css */ "./src/app/castle/dungeonroom2/dungeonroom2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], Dungeonroom2Component);
    return Dungeonroom2Component;
}());



/***/ }),

/***/ "./src/app/castle/dungeonroom2puzzle/dungeonroom2puzzle.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/castle/dungeonroom2puzzle/dungeonroom2puzzle.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n.door{\r\n    position: absolute;\r\n    left:320px;\r\n    top: 640px;\r\n    background-image: linear-gradient( rgb(250, 215, 162), rgb(202, 157, 31));\r\n    border-radius: 3px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzdGxlL2R1bmdlb25yb29tMnB1enpsZS9kdW5nZW9ucm9vbTJwdXp6bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLHlFQUF5RTtJQUN6RSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jYXN0bGUvZHVuZ2VvbnJvb20ycHV6emxlL2R1bmdlb25yb29tMnB1enpsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3h7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG59XHJcbi5vbntcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4uZG9vcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6MzIwcHg7XHJcbiAgICB0b3A6IDY0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCByZ2IoMjUwLCAyMTUsIDE2MiksIHJnYigyMDIsIDE1NywgMzEpKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/castle/dungeonroom2puzzle/dungeonroom2puzzle.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/castle/dungeonroom2puzzle/dungeonroom2puzzle.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Dungeon</p>\r\n<img *ngIf=\"life == 3\" src=\"./assets/img/dungeon.png\" alt=\"dungeonimg\">\r\n<img *ngIf=\"life == 2\" src=\"./assets/img/dungeon1.png\" alt=\"dungeonimg\">\r\n<img *ngIf=\"life == 1\" src=\"./assets/img/dungeon2.png\" alt=\"dungeonimg\">\r\n<button class=\"door\" [ngClass]=\"{ 'on': switch }\" [routerLink] = \"['../dungeonroom3']\">Open the door</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n<div [ngClass]=\"{ 'on': switch1 }\">\r\n    <p [innerHTML]=\"question\"></p>\r\n    <div *ngFor=\"let answer of answers; let i = index\">\r\n        <button (click)=\"onClick(i)\" [innerHTML]=\"answer\"></button>\r\n        <br>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/castle/dungeonroom2puzzle/dungeonroom2puzzle.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/castle/dungeonroom2puzzle/dungeonroom2puzzle.component.ts ***!
  \***************************************************************************/
/*! exports provided: Dungeonroom2puzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dungeonroom2puzzleComponent", function() { return Dungeonroom2puzzleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Dungeonroom2puzzleComponent = /** @class */ (function () {
    function Dungeonroom2puzzleComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.count = 0;
        this.life = 3;
        this.switch = true;
        this.switch1 = false;
    }
    Dungeonroom2puzzleComponent.prototype.ngOnInit = function () {
        this.description = "Once again, the door has three seals, and a question appears.";
        this.getQuestion();
    };
    Dungeonroom2puzzleComponent.prototype.shuffle = function (arr) {
        var x = arr.length - 1;
        var temp;
        while (x != 0) {
            var y = Math.floor(Math.random() * x);
            temp = arr[y];
            arr[y] = arr[x];
            arr[x] = temp;
            x--;
        }
    };
    Dungeonroom2puzzleComponent.prototype.getQuestion = function () {
        var _this = this;
        var observe = this._httpService.getMediumScience();
        observe.subscribe(function (data) {
            data.results[0].incorrect_answers.push(data.results[0].correct_answer);
            _this.shuffle(data.results[0].incorrect_answers);
            _this.question = data.results[0].question;
            _this.answers = data.results[0].incorrect_answers;
            _this.correct = data.results[0].correct_answer;
        });
    };
    Dungeonroom2puzzleComponent.prototype.onClick = function (index) {
        if (this.answers[index] == this.correct) {
            this.count++;
            if (this.count == 3) {
                this.description = "The final seal is gone, and you hear a click. The door unlocks.";
                this.switch1 = true;
                this.switch = false;
            }
            else {
                if (this.count == 1) {
                    this.description = "One of the seals disappear. Two to go.";
                    this.getQuestion();
                }
                if (this.count == 2) {
                    this.description = "Another seal vanishes. Just one more!";
                    this.getQuestion();
                }
            }
        }
        else {
            if (this.life == 3) {
                this.description = "In the center of the three seals, an X appears. It looks like there is only room for 2 more. Best not to find out what happens if you get any more wrong...";
                this.life--;
                this.getQuestion();
            }
            else if (this.life == 2) {
                this.description = "Another X appears in the center. There's only room for one more...";
                this.life--;
                this.getQuestion();
            }
            else if (this.life == 1) {
                this._httpService.user.progress.dungeonfail = true;
                this._router.navigate(['/castle/dungeonroom1']);
            }
        }
    };
    Dungeonroom2puzzleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dungeonroom2puzzle',
            template: __webpack_require__(/*! ./dungeonroom2puzzle.component.html */ "./src/app/castle/dungeonroom2puzzle/dungeonroom2puzzle.component.html"),
            styles: [__webpack_require__(/*! ./dungeonroom2puzzle.component.css */ "./src/app/castle/dungeonroom2puzzle/dungeonroom2puzzle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Dungeonroom2puzzleComponent);
    return Dungeonroom2puzzleComponent;
}());



/***/ }),

/***/ "./src/app/castle/dungeonroom3/dungeonroom3.component.css":
/*!****************************************************************!*\
  !*** ./src/app/castle/dungeonroom3/dungeonroom3.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.barrier{\r\n    position: absolute;\r\n    left:320px;\r\n    top: 640px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(250, 215, 162), rgb(202, 157, 31));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzdGxlL2R1bmdlb25yb29tMy9kdW5nZW9ucm9vbTMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0kseUVBQXlFO0lBQ3pFLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Nhc3RsZS9kdW5nZW9ucm9vbTMvZHVuZ2VvbnJvb20zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbn1cclxuLmJhcnJpZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjMyMHB4O1xyXG4gICAgdG9wOiA2NDBweDtcclxufVxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIHJnYigyNTAsIDIxNSwgMTYyKSwgcmdiKDIwMiwgMTU3LCAzMSkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/castle/dungeonroom3/dungeonroom3.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/castle/dungeonroom3/dungeonroom3.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Dungeon Spellbook</p>\r\n<img src=\"./assets/img/dungeonspellbook.png\" alt=\"engineroomimg\">\r\n<button class=\"barrier\" [routerLink] = \"['../dungeonroom3puzzle']\">Try to dispel the barrier</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/castle/dungeonroom3/dungeonroom3.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/castle/dungeonroom3/dungeonroom3.component.ts ***!
  \***************************************************************/
/*! exports provided: Dungeonroom3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dungeonroom3Component", function() { return Dungeonroom3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var Dungeonroom3Component = /** @class */ (function () {
    function Dungeonroom3Component(_httpService) {
        this._httpService = _httpService;
    }
    Dungeonroom3Component.prototype.ngOnInit = function () {
        this.description = "Once more, the door slams behind you. This time, you're not greeted by more doors, but by a large book, enclosed inside a magical barrier.";
    };
    Dungeonroom3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dungeonroom3',
            template: __webpack_require__(/*! ./dungeonroom3.component.html */ "./src/app/castle/dungeonroom3/dungeonroom3.component.html"),
            styles: [__webpack_require__(/*! ./dungeonroom3.component.css */ "./src/app/castle/dungeonroom3/dungeonroom3.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], Dungeonroom3Component);
    return Dungeonroom3Component;
}());



/***/ }),

/***/ "./src/app/castle/dungeonroom3puzzle/dungeonroom3puzzle.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/castle/dungeonroom3puzzle/dungeonroom3puzzle.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n.barrier{\r\n    position: absolute;\r\n    left:320px;\r\n    top: 470px;\r\n    background-image: linear-gradient( rgb(250, 215, 162), rgb(202, 157, 31));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzdGxlL2R1bmdlb25yb29tM3B1enpsZS9kdW5nZW9ucm9vbTNwdXp6bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLHlFQUF5RTtJQUN6RSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jYXN0bGUvZHVuZ2VvbnJvb20zcHV6emxlL2R1bmdlb25yb29tM3B1enpsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3h7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG59XHJcbi5vbntcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4uYmFycmllcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6MzIwcHg7XHJcbiAgICB0b3A6IDQ3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCByZ2IoMjUwLCAyMTUsIDE2MiksIHJnYigyMDIsIDE1NywgMzEpKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/castle/dungeonroom3puzzle/dungeonroom3puzzle.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/castle/dungeonroom3puzzle/dungeonroom3puzzle.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Dungeon Spellbook</p>\r\n<img *ngIf=\"life == 3\" src=\"./assets/img/dungeonspellbook.png\" alt=\"dungeonimg\">\r\n<img *ngIf=\"life == 2\" src=\"./assets/img/dungeonspellbook1.png\" alt=\"dungeonimg\">\r\n<img *ngIf=\"life == 1\" src=\"./assets/img/dungeonspellbook2.png\" alt=\"dungeonimg\">\r\n<button class=\"barrier\" [ngClass]=\"{ 'on': switch }\" [routerLink] = \"['../dungeonspellbook']\">Dispel the barrier</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n<div [ngClass]=\"{ 'on': switch1 }\">\r\n    <p [innerHTML]=\"question\"></p>\r\n    <div *ngFor=\"let answer of answers; let i = index\">\r\n        <button (click)=\"onClick(i)\" [innerHTML]=\"answer\"></button>\r\n        <br>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/castle/dungeonroom3puzzle/dungeonroom3puzzle.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/castle/dungeonroom3puzzle/dungeonroom3puzzle.component.ts ***!
  \***************************************************************************/
/*! exports provided: Dungeonroom3puzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dungeonroom3puzzleComponent", function() { return Dungeonroom3puzzleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Dungeonroom3puzzleComponent = /** @class */ (function () {
    function Dungeonroom3puzzleComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.count = 0;
        this.life = 3;
        this.switch = true;
        this.switch1 = false;
    }
    Dungeonroom3puzzleComponent.prototype.ngOnInit = function () {
        this.description = "This time, the seals surround the magical barrier. There are four of them.";
        this.getQuestion();
    };
    Dungeonroom3puzzleComponent.prototype.shuffle = function (arr) {
        var x = arr.length - 1;
        var temp;
        while (x != 0) {
            var y = Math.floor(Math.random() * x);
            temp = arr[y];
            arr[y] = arr[x];
            arr[x] = temp;
            x--;
        }
    };
    Dungeonroom3puzzleComponent.prototype.getQuestion = function () {
        var _this = this;
        var observe = this._httpService.getMediumMyth();
        observe.subscribe(function (data) {
            data.results[0].incorrect_answers.push(data.results[0].correct_answer);
            _this.shuffle(data.results[0].incorrect_answers);
            _this.question = data.results[0].question;
            _this.answers = data.results[0].incorrect_answers;
            _this.correct = data.results[0].correct_answer;
        });
    };
    Dungeonroom3puzzleComponent.prototype.onClick = function (index) {
        if (this.answers[index] == this.correct) {
            this.count++;
            if (this.count == 4) {
                this.description = "All four seals are gone, and the barrier appears to be fading...";
                this.switch1 = true;
                this.switch = false;
            }
            else {
                if (this.count == 1) {
                    this.description = "One of the seals disappear. Three to go.";
                    this.getQuestion();
                }
                if (this.count == 2) {
                    this.description = "Another seal vanishes. Two more.";
                    this.getQuestion();
                }
                if (this.count == 3) {
                    this.description = "The third seal fades. Only one to go.";
                    this.getQuestion();
                }
            }
        }
        else {
            if (this.life == 3) {
                this.description = "Above the barrier, an X appears.";
                this.life--;
                this.getQuestion();
            }
            else if (this.life == 2) {
                this.description = "Another X appears. Best to avoid any more wrong answers.";
                this.life--;
                this.getQuestion();
            }
            else if (this.life == 1) {
                this._httpService.user.progress.dungeonfail = true;
                this._router.navigate(['/castle/dungeonroom1']);
            }
        }
    };
    Dungeonroom3puzzleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dungeonroom3puzzle',
            template: __webpack_require__(/*! ./dungeonroom3puzzle.component.html */ "./src/app/castle/dungeonroom3puzzle/dungeonroom3puzzle.component.html"),
            styles: [__webpack_require__(/*! ./dungeonroom3puzzle.component.css */ "./src/app/castle/dungeonroom3puzzle/dungeonroom3puzzle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Dungeonroom3puzzleComponent);
    return Dungeonroom3puzzleComponent;
}());



/***/ }),

/***/ "./src/app/castle/dungeonspellbook/dungeonspellbook.component.css":
/*!************************************************************************!*\
  !*** ./src/app/castle/dungeonspellbook/dungeonspellbook.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.book{\r\n    position: absolute;\r\n    left:320px;\r\n    top: 640px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(250, 215, 162), rgb(202, 157, 31));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzdGxlL2R1bmdlb25zcGVsbGJvb2svZHVuZ2VvbnNwZWxsYm9vay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7SUFDSSx5RUFBeUU7SUFDekUsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY2FzdGxlL2R1bmdlb25zcGVsbGJvb2svZHVuZ2VvbnNwZWxsYm9vay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3h7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG59XHJcbi5ib29re1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDozMjBweDtcclxuICAgIHRvcDogNjQwcHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCByZ2IoMjUwLCAyMTUsIDE2MiksIHJnYigyMDIsIDE1NywgMzEpKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/castle/dungeonspellbook/dungeonspellbook.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/castle/dungeonspellbook/dungeonspellbook.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Dungeon Spellbook</p>\r\n<img src=\"./assets/img/dungeonspellbook.png\" alt=\"dungeonimg\">\r\n<button class=\"book\" (click)=\"onClick(0)\">Get the book!</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/castle/dungeonspellbook/dungeonspellbook.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/castle/dungeonspellbook/dungeonspellbook.component.ts ***!
  \***********************************************************************/
/*! exports provided: DungeonspellbookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DungeonspellbookComponent", function() { return DungeonspellbookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DungeonspellbookComponent = /** @class */ (function () {
    function DungeonspellbookComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    DungeonspellbookComponent.prototype.ngOnInit = function () {
        this.description = "Solving the final room's puzzle, the barrier surrounding the book collapses. As you prepare to grab it, you can feel the power radiating from the book. Who knows what will happen when you grab it...";
    };
    DungeonspellbookComponent.prototype.onClick = function (type) {
        if (type == 0) {
            this._httpService.user.inventory.spellbook = true;
            this._router.navigate(['/castle/mainroom']);
        }
    };
    DungeonspellbookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dungeonspellbook',
            template: __webpack_require__(/*! ./dungeonspellbook.component.html */ "./src/app/castle/dungeonspellbook/dungeonspellbook.component.html"),
            styles: [__webpack_require__(/*! ./dungeonspellbook.component.css */ "./src/app/castle/dungeonspellbook/dungeonspellbook.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DungeonspellbookComponent);
    return DungeonspellbookComponent;
}());



/***/ }),

/***/ "./src/app/castle/hallway/hallway.component.css":
/*!******************************************************!*\
  !*** ./src/app/castle/hallway/hallway.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.statue{\r\n    position: absolute;\r\n    left:270px;\r\n    top: 530px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(250, 215, 162), rgb(202, 157, 31));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzdGxlL2hhbGx3YXkvaGFsbHdheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7SUFDSSx5RUFBeUU7SUFDekUsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY2FzdGxlL2hhbGx3YXkvaGFsbHdheS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3h7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG59XHJcbi5zdGF0dWV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjI3MHB4O1xyXG4gICAgdG9wOiA1MzBweDtcclxufVxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIHJnYigyNTAsIDIxNSwgMTYyKSwgcmdiKDIwMiwgMTU3LCAzMSkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/castle/hallway/hallway.component.html":
/*!*******************************************************!*\
  !*** ./src/app/castle/hallway/hallway.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Castle Hallway!</p>\r\n<img src=\"./assets/img/hallway.png\" alt=\"dungeonimg\">\r\n<button class=\"statue\" [routerLink] = \"['../hallwaypuzzle']\">Inspect Statue</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/castle/hallway/hallway.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/castle/hallway/hallway.component.ts ***!
  \*****************************************************/
/*! exports provided: HallwayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HallwayComponent", function() { return HallwayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var HallwayComponent = /** @class */ (function () {
    function HallwayComponent(_httpService) {
        this._httpService = _httpService;
    }
    HallwayComponent.prototype.ngOnInit = function () {
        this.description = "As you move down the hallway, you see a suspicious looking statue that looks to have been moved in the past.";
    };
    HallwayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hallway',
            template: __webpack_require__(/*! ./hallway.component.html */ "./src/app/castle/hallway/hallway.component.html"),
            styles: [__webpack_require__(/*! ./hallway.component.css */ "./src/app/castle/hallway/hallway.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], HallwayComponent);
    return HallwayComponent;
}());



/***/ }),

/***/ "./src/app/castle/hallwayduel/hallwayduel.component.css":
/*!**************************************************************!*\
  !*** ./src/app/castle/hallwayduel/hallwayduel.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 600px;\r\n    border: 2px solid gray;\r\n}\r\n.continue{\r\n    position: absolute;\r\n    left: 200px;\r\n    top: 200px;\r\n    background-image: linear-gradient( rgb(250, 215, 162), rgb(202, 157, 31));\r\n    border-radius: 3px;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzdGxlL2hhbGx3YXlkdWVsL2hhbGx3YXlkdWVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YseUVBQXlFO0lBQ3pFLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY2FzdGxlL2hhbGx3YXlkdWVsL2hhbGx3YXlkdWVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbn1cclxuLmNvbnRpbnVle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjAwcHg7XHJcbiAgICB0b3A6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCByZ2IoMjUwLCAyMTUsIDE2MiksIHJnYigyMDIsIDE1NywgMzEpKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4ub257XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/castle/hallwayduel/hallwayduel.component.html":
/*!***************************************************************!*\
  !*** ./src/app/castle/hallwayduel/hallwayduel.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>BRAIN DUEL</p>\r\n<img src=\"./assets/img/evilwizard.jpg\" alt=\"wizardimg\">\r\n<button class=\"continue\" [ngClass]=\"{ 'on': switch }\" [routerLink] = \"['../hallwaywand']\">Continue</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n<div [ngClass]=\"{ 'on': switch1 }\">\r\n    <p [innerHTML]=\"question\"></p>\r\n    <div *ngFor=\"let answer of answers; let i = index\">\r\n        <button (click)=\"onClick(i)\" [innerHTML]=\"answer\"></button>\r\n        <br>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/castle/hallwayduel/hallwayduel.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/castle/hallwayduel/hallwayduel.component.ts ***!
  \*************************************************************/
/*! exports provided: HallwayduelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HallwayduelComponent", function() { return HallwayduelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var HallwayduelComponent = /** @class */ (function () {
    function HallwayduelComponent(_httpService) {
        this._httpService = _httpService;
        this.count = 0;
        this.life = 3;
        this.switch = true;
        this.switch1 = false;
    }
    HallwayduelComponent.prototype.ngOnInit = function () {
        this.description = "'You'll never defeat me!' he screams, and out of his wand, a math problem flys at you. Solve it to defeat him!";
        this.getQuestion();
    };
    HallwayduelComponent.prototype.shuffle = function (arr) {
        var x = arr.length - 1;
        var temp;
        while (x != 0) {
            var y = Math.floor(Math.random() * x);
            temp = arr[y];
            arr[y] = arr[x];
            arr[x] = temp;
            x--;
        }
    };
    HallwayduelComponent.prototype.getQuestion = function () {
        var _this = this;
        var observe = this._httpService.getMediumMath();
        observe.subscribe(function (data) {
            data.results[0].incorrect_answers.push(data.results[0].correct_answer);
            _this.shuffle(data.results[0].incorrect_answers);
            _this.question = data.results[0].question;
            _this.answers = data.results[0].incorrect_answers;
            _this.correct = data.results[0].correct_answer;
        });
    };
    HallwayduelComponent.prototype.onClick = function (index) {
        if (this.answers[index] == this.correct) {
            this.count++;
            if (this.count == 3) {
                this.description = "'NO! How could you have defeated me?!' he yells, as he falls to floor. He appears to be unconscious.";
                this.switch1 = true;
                this.switch = false;
            }
            else {
                if (this.count == 1) {
                    this.description = "'You're smarter than I thought, but can you handle THIS!?'";
                    this.getQuestion();
                }
                if (this.count == 2) {
                    this.description = "'How are you doing this?! You'll never withstand this one!'";
                    this.getQuestion();
                }
            }
        }
        else {
            this.description = "You feel drained, as if part of your very lifeforce has vanished. 'Haha, none can withstand my mathematical power!'";
            this.life--;
            this.getQuestion();
            if (this.life == 0) {
                this.description = "You've been defeated! However, it's not over for you yet, you find yourself transported back in time, and the duel starts again!";
                this.life = 3;
                this.count = 0;
            }
        }
    };
    HallwayduelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hallwayduel',
            template: __webpack_require__(/*! ./hallwayduel.component.html */ "./src/app/castle/hallwayduel/hallwayduel.component.html"),
            styles: [__webpack_require__(/*! ./hallwayduel.component.css */ "./src/app/castle/hallwayduel/hallwayduel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], HallwayduelComponent);
    return HallwayduelComponent;
}());



/***/ }),

/***/ "./src/app/castle/hallwayescape/hallwayescape.component.css":
/*!******************************************************************!*\
  !*** ./src/app/castle/hallwayescape/hallwayescape.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 600px;\r\n    border: 2px solid gray;\r\n}\r\n.duel{\r\n    position: absolute;\r\n    left: 200px;\r\n    top: 200px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(250, 215, 162), rgb(202, 157, 31));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzdGxlL2hhbGx3YXllc2NhcGUvaGFsbHdheWVzY2FwZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7SUFDSSx5RUFBeUU7SUFDekUsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY2FzdGxlL2hhbGx3YXllc2NhcGUvaGFsbHdheWVzY2FwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3h7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG59XHJcbi5kdWVse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjAwcHg7XHJcbiAgICB0b3A6IDIwMHB4O1xyXG59XHJcbmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggcmdiKDI1MCwgMjE1LCAxNjIpLCByZ2IoMjAyLCAxNTcsIDMxKSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/castle/hallwayescape/hallwayescape.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/castle/hallwayescape/hallwayescape.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Secret room with Wizard</p>\r\n<img src=\"./assets/img/evilwizard.jpg\" alt=\"wizardimg\">\r\n<button class=\"duel\" [routerLink] = \"['../hallwayduel']\">BRAIN DUEL!</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/castle/hallwayescape/hallwayescape.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/castle/hallwayescape/hallwayescape.component.ts ***!
  \*****************************************************************/
/*! exports provided: HallwayescapeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HallwayescapeComponent", function() { return HallwayescapeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var HallwayescapeComponent = /** @class */ (function () {
    function HallwayescapeComponent(_httpService) {
        this._httpService = _httpService;
    }
    HallwayescapeComponent.prototype.ngOnInit = function () {
        this.description = "As you finally escape from your prison, the figure you saw in the great hall steps out of the shadows. 'How did you escape my trap?!' He asks, in a far more menacing tone than you remember. 'No matter, you won't get be able to defeat me...' Suddenly, he attacks you...WITH MATH PROBLEMS!";
    };
    HallwayescapeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hallwayescape',
            template: __webpack_require__(/*! ./hallwayescape.component.html */ "./src/app/castle/hallwayescape/hallwayescape.component.html"),
            styles: [__webpack_require__(/*! ./hallwayescape.component.css */ "./src/app/castle/hallwayescape/hallwayescape.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], HallwayescapeComponent);
    return HallwayescapeComponent;
}());



/***/ }),

/***/ "./src/app/castle/hallwayescapepuzzle/hallwayescapepuzzle.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/castle/hallwayescapepuzzle/hallwayescapepuzzle.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.escape{\r\n    position: absolute;\r\n    left:210px;\r\n    top: 570px;\r\n    background-image: linear-gradient( rgb(250, 215, 162), rgb(202, 157, 31));\r\n    border-radius: 3px;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzdGxlL2hhbGx3YXllc2NhcGVwdXp6bGUvaGFsbHdheWVzY2FwZXB1enpsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLHlFQUF5RTtJQUN6RSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Nhc3RsZS9oYWxsd2F5ZXNjYXBlcHV6emxlL2hhbGx3YXllc2NhcGVwdXp6bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcclxufVxyXG4uZXNjYXBle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDoyMTBweDtcclxuICAgIHRvcDogNTcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIHJnYigyNTAsIDIxNSwgMTYyKSwgcmdiKDIwMiwgMTU3LCAzMSkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi5vbntcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/castle/hallwayescapepuzzle/hallwayescapepuzzle.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/castle/hallwayescapepuzzle/hallwayescapepuzzle.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Secret Room</p>\r\n<img src=\"./assets/img/hallwaysecret.png\" alt=\"dungeonimg\">\r\n<button class=\"escape\" [ngClass]=\"{ 'on': switch }\" [routerLink] = \"['../hallwayescape']\">Escape the trap!</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n<div [ngClass]=\"{ 'on': switch1 }\">\r\n    <p [innerHTML]=\"question\"></p>\r\n    <div *ngFor=\"let answer of answers; let i = index\">\r\n        <button (click)=\"onClick(i)\" [innerHTML]=\"answer\"></button>\r\n        <br>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/castle/hallwayescapepuzzle/hallwayescapepuzzle.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/castle/hallwayescapepuzzle/hallwayescapepuzzle.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HallwayescapepuzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HallwayescapepuzzleComponent", function() { return HallwayescapepuzzleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var HallwayescapepuzzleComponent = /** @class */ (function () {
    function HallwayescapepuzzleComponent(_httpService) {
        this._httpService = _httpService;
        this.count = 0;
        this.switch = true;
        this.switch1 = false;
    }
    HallwayescapepuzzleComponent.prototype.ngOnInit = function () {
        this.description = "The symbols on one side of your prison come into focus...";
        this.getQuestion();
    };
    HallwayescapepuzzleComponent.prototype.shuffle = function (arr) {
        var x = arr.length - 1;
        var temp;
        while (x != 0) {
            var y = Math.floor(Math.random() * x);
            temp = arr[y];
            arr[y] = arr[x];
            arr[x] = temp;
            x--;
        }
    };
    HallwayescapepuzzleComponent.prototype.getQuestion = function () {
        var _this = this;
        var observe = this._httpService.getEasyScience();
        observe.subscribe(function (data) {
            data.results[0].incorrect_answers.push(data.results[0].correct_answer);
            _this.shuffle(data.results[0].incorrect_answers);
            _this.question = data.results[0].question;
            _this.answers = data.results[0].incorrect_answers;
            _this.correct = data.results[0].correct_answer;
        });
    };
    HallwayescapepuzzleComponent.prototype.onClick = function (index) {
        if (this.answers[index] == this.correct) {
            this.count++;
            if (this.count == 4) {
                this.description = "The symbols on all four sides have vanished, and you can now escape.";
                this.switch1 = true;
                this.switch = false;
            }
            else {
                this.description = "More symbols appear on another side of your prison.";
                this.getQuestion();
            }
        }
        else {
            this.description = "Nothing happens. That must not be right.";
        }
    };
    HallwayescapepuzzleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hallwayescapepuzzle',
            template: __webpack_require__(/*! ./hallwayescapepuzzle.component.html */ "./src/app/castle/hallwayescapepuzzle/hallwayescapepuzzle.component.html"),
            styles: [__webpack_require__(/*! ./hallwayescapepuzzle.component.css */ "./src/app/castle/hallwayescapepuzzle/hallwayescapepuzzle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], HallwayescapepuzzleComponent);
    return HallwayescapepuzzleComponent;
}());



/***/ }),

/***/ "./src/app/castle/hallwaypuzzle/hallwaypuzzle.component.css":
/*!******************************************************************!*\
  !*** ./src/app/castle/hallwaypuzzle/hallwaypuzzle.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.continue{\r\n    position: absolute;\r\n    left:270px;\r\n    top: 530px;\r\n    background-image: linear-gradient( rgb(250, 215, 162), rgb(202, 157, 31));\r\n    border-radius: 3px;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzdGxlL2hhbGx3YXlwdXp6bGUvaGFsbHdheXB1enpsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLHlFQUF5RTtJQUN6RSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Nhc3RsZS9oYWxsd2F5cHV6emxlL2hhbGx3YXlwdXp6bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcclxufVxyXG4uY29udGludWV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjI3MHB4O1xyXG4gICAgdG9wOiA1MzBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggcmdiKDI1MCwgMjE1LCAxNjIpLCByZ2IoMjAyLCAxNTcsIDMxKSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLm9ue1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/castle/hallwaypuzzle/hallwaypuzzle.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/castle/hallwaypuzzle/hallwaypuzzle.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Statue in Hallway</p>\r\n<img src=\"./assets/img/hallway.png\" alt=\"dungeonimg\">\r\n<button class=\"continue\" [ngClass]=\"{ 'on': switch }\" [routerLink] = \"['../hallwaysecret']\">Continue</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n<div [ngClass]=\"{ 'on': switch1 }\">\r\n    <p [innerHTML]=\"question\"></p>\r\n    <div *ngFor=\"let answer of answers; let i = index\">\r\n        <button (click)=\"onClick(i)\" [innerHTML]=\"answer\"></button>\r\n        <br>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/castle/hallwaypuzzle/hallwaypuzzle.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/castle/hallwaypuzzle/hallwaypuzzle.component.ts ***!
  \*****************************************************************/
/*! exports provided: HallwaypuzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HallwaypuzzleComponent", function() { return HallwaypuzzleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var HallwaypuzzleComponent = /** @class */ (function () {
    function HallwaypuzzleComponent(_httpService) {
        this._httpService = _httpService;
        this.count = 0;
        this.switch = true;
        this.switch1 = false;
    }
    HallwaypuzzleComponent.prototype.ngOnInit = function () {
        this.description = "The statue moves slightly, and asks you a question.";
        this.getQuestion();
    };
    HallwaypuzzleComponent.prototype.shuffle = function (arr) {
        var x = arr.length - 1;
        var temp;
        while (x != 0) {
            var y = Math.floor(Math.random() * x);
            temp = arr[y];
            arr[y] = arr[x];
            arr[x] = temp;
            x--;
        }
    };
    HallwaypuzzleComponent.prototype.getQuestion = function () {
        var _this = this;
        var observe = this._httpService.getEasyMyth();
        observe.subscribe(function (data) {
            data.results[0].incorrect_answers.push(data.results[0].correct_answer);
            _this.shuffle(data.results[0].incorrect_answers);
            _this.question = data.results[0].question;
            _this.answers = data.results[0].incorrect_answers;
            _this.correct = data.results[0].correct_answer;
        });
    };
    HallwaypuzzleComponent.prototype.onClick = function (index) {
        if (this.answers[index] == this.correct) {
            this.count++;
            if (this.count == 3) {
                this.description = "The statue stops moving, and returns to its original state.";
                this.switch1 = true;
                this.switch = false;
            }
            else {
                this.description = "It asks you another question.";
                this.getQuestion();
            }
        }
        else {
            this.description = "It glares at you. Clearly, that was not right.";
        }
    };
    HallwaypuzzleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hallwaypuzzle',
            template: __webpack_require__(/*! ./hallwaypuzzle.component.html */ "./src/app/castle/hallwaypuzzle/hallwaypuzzle.component.html"),
            styles: [__webpack_require__(/*! ./hallwaypuzzle.component.css */ "./src/app/castle/hallwaypuzzle/hallwaypuzzle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], HallwaypuzzleComponent);
    return HallwaypuzzleComponent;
}());



/***/ }),

/***/ "./src/app/castle/hallwaysecret/hallwaysecret.component.css":
/*!******************************************************************!*\
  !*** ./src/app/castle/hallwaysecret/hallwaysecret.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.escape{\r\n    position: absolute;\r\n    left:210px;\r\n    top: 570px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(250, 215, 162), rgb(202, 157, 31));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzdGxlL2hhbGx3YXlzZWNyZXQvaGFsbHdheXNlY3JldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7SUFDSSx5RUFBeUU7SUFDekUsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY2FzdGxlL2hhbGx3YXlzZWNyZXQvaGFsbHdheXNlY3JldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3h7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG59XHJcbi5lc2NhcGV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjIxMHB4O1xyXG4gICAgdG9wOiA1NzBweDtcclxufVxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIHJnYigyNTAsIDIxNSwgMTYyKSwgcmdiKDIwMiwgMTU3LCAzMSkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/castle/hallwaysecret/hallwaysecret.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/castle/hallwaysecret/hallwaysecret.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Secret Room</p>\r\n<img src=\"./assets/img/hallwaysecret.png\" alt=\"dungeonimg\">\r\n<button class=\"escape\" [routerLink] = \"['../hallwayescapepuzzle']\">ESCAPE</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/castle/hallwaysecret/hallwaysecret.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/castle/hallwaysecret/hallwaysecret.component.ts ***!
  \*****************************************************************/
/*! exports provided: HallwaysecretComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HallwaysecretComponent", function() { return HallwaysecretComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var HallwaysecretComponent = /** @class */ (function () {
    function HallwaysecretComponent(_httpService) {
        this._httpService = _httpService;
    }
    HallwaysecretComponent.prototype.ngOnInit = function () {
        this.description = "The statue slides out of the way, revealing a secret room. You move inside and, looking around, it seems to be some kind of office area. Many magical objects are scattered around the room. Suddenly, you hit a wall, but there's nothing in the way. Any direction you try to move, you're unable to escape. Symbols appear all around you, and you realize you're trapped.";
    };
    HallwaysecretComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hallwaysecret',
            template: __webpack_require__(/*! ./hallwaysecret.component.html */ "./src/app/castle/hallwaysecret/hallwaysecret.component.html"),
            styles: [__webpack_require__(/*! ./hallwaysecret.component.css */ "./src/app/castle/hallwaysecret/hallwaysecret.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], HallwaysecretComponent);
    return HallwaysecretComponent;
}());



/***/ }),

/***/ "./src/app/castle/hallwaywand/hallwaywand.component.css":
/*!**************************************************************!*\
  !*** ./src/app/castle/hallwaywand/hallwaywand.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.wand{\r\n    position: absolute;\r\n    left: 50px;\r\n    top: 635px;\r\n}\r\n.main{\r\n    position: absolute;\r\n    left: 50px;\r\n    top: 635px;\r\n}\r\n.save{\r\n    position: absolute;\r\n    left: 150px;\r\n    top: 635px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(250, 215, 162), rgb(202, 157, 31));\r\n    border-radius: 3px;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzdGxlL2hhbGx3YXl3YW5kL2hhbGx3YXl3YW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0lBQ0kseUVBQXlFO0lBQ3pFLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY2FzdGxlL2hhbGx3YXl3YW5kL2hhbGx3YXl3YW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbn1cclxuLndhbmR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MHB4O1xyXG4gICAgdG9wOiA2MzVweDtcclxufVxyXG4ubWFpbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwcHg7XHJcbiAgICB0b3A6IDYzNXB4O1xyXG59XHJcbi5zYXZle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTUwcHg7XHJcbiAgICB0b3A6IDYzNXB4O1xyXG59XHJcbmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggcmdiKDI1MCwgMjE1LCAxNjIpLCByZ2IoMjAyLCAxNTcsIDMxKSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLm9ue1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/castle/hallwaywand/hallwaywand.component.html":
/*!***************************************************************!*\
  !*** ./src/app/castle/hallwaywand/hallwaywand.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Trapped Wizard</p>\r\n<img src=\"./assets/img/hallwaywand.png\" alt=\"wizardimg\">\r\n<button class=\"wand\" [ngClass]=\"{ 'on': switch }\" (click)=\"onClick(0)\">Pick up the wand!</button>\r\n<button class=\"main\" [ngClass]=\"{ 'on': switch1 }\" (click)=\"onClick(0)\">Go back to the main hall</button>\r\n<button class=\"save\" [ngClass]=\"{ 'on': switch2 }\" (click)=\"onClick(1)\">Save the wizard!</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/castle/hallwaywand/hallwaywand.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/castle/hallwaywand/hallwaywand.component.ts ***!
  \*************************************************************/
/*! exports provided: HallwaywandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HallwaywandComponent", function() { return HallwaywandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HallwaywandComponent = /** @class */ (function () {
    function HallwaywandComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.switch = false;
        this.switch1 = true;
        this.switch2 = true;
    }
    HallwaywandComponent.prototype.ngOnInit = function () {
        if (this._httpService.user.inventory.wand == false) {
            this.description = "Having defeated the evil math wizard, you make for the far door. As you step through the doorway, you're greeted by a man, trapped in what looks like a giant glowing bubble. 'Please, you must free me. I am the true wizard of this castle. That imposter trapped me, and I can only be freed with the help of a potion of unsealing, and a spell from the forbidden book hidden in the dungeon of this castle. Please, take the false wizard's wand and unseal the doors to the potion lab and the dungeon, retrieve that which I seek, and return to free me!'";
        }
        if (this._httpService.user.inventory.wand == true) {
            this.description = "You return to the wizard's room, where he is still imprisoned. You still need to gather the items to free him!";
            this.switch = true;
            this.switch1 = false;
        }
        if (this._httpService.user.inventory.wand == true && this._httpService.user.inventory.potion == true && this._httpService.user.inventory.spellbook == true) {
            this.description = "You have everything you need to save the wizard!";
            this.switch = true;
            this.switch1 = false;
            this.switch2 = false;
        }
    };
    HallwaywandComponent.prototype.onClick = function (type) {
        if (type == 0) {
            this._httpService.user.inventory.wand = true;
            this._router.navigate(['/castle/mainroom']);
        }
        if (type == 1) {
            this._httpService.user.progress.savedthewizard = true;
            this._httpService.user.progress.castledone = true;
            this._router.navigate(['/house/backyard']);
        }
    };
    HallwaywandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hallwaywand',
            template: __webpack_require__(/*! ./hallwaywand.component.html */ "./src/app/castle/hallwaywand/hallwaywand.component.html"),
            styles: [__webpack_require__(/*! ./hallwaywand.component.css */ "./src/app/castle/hallwaywand/hallwaywand.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HallwaywandComponent);
    return HallwaywandComponent;
}());



/***/ }),

/***/ "./src/app/castle/lab/lab.component.css":
/*!**********************************************!*\
  !*** ./src/app/castle/lab/lab.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.main{\r\n    position: absolute;\r\n    left:200px;\r\n    top: 640px;\r\n}\r\n.cupboard{\r\n    position: absolute;\r\n    left:310px;\r\n    top: 160px;\r\n}\r\n.tools{\r\n    position: absolute;\r\n    left:145px;\r\n    top: 400px;\r\n}\r\n.book{\r\n    position: absolute;\r\n    left:610px;\r\n    top: 550px;\r\n}\r\n.combine{\r\n    position: absolute;\r\n    left:45px;\r\n    top: 350px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(250, 215, 162), rgb(202, 157, 31));\r\n    border-radius: 3px;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzdGxlL2xhYi9sYWIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLHlFQUF5RTtJQUN6RSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Nhc3RsZS9sYWIvbGFiLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbn1cclxuLm1haW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjIwMHB4O1xyXG4gICAgdG9wOiA2NDBweDtcclxufVxyXG4uY3VwYm9hcmR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjMxMHB4O1xyXG4gICAgdG9wOiAxNjBweDtcclxufVxyXG4udG9vbHN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjE0NXB4O1xyXG4gICAgdG9wOiA0MDBweDtcclxufVxyXG4uYm9va3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6NjEwcHg7XHJcbiAgICB0b3A6IDU1MHB4O1xyXG59XHJcbi5jb21iaW5le1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDo0NXB4O1xyXG4gICAgdG9wOiAzNTBweDtcclxufVxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIHJnYigyNTAsIDIxNSwgMTYyKSwgcmdiKDIwMiwgMTU3LCAzMSkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi5vbntcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/castle/lab/lab.component.html":
/*!***********************************************!*\
  !*** ./src/app/castle/lab/lab.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Potions Lab!</p>\r\n<img *ngIf=\"imgSwap == false\"  src=\"./assets/img/lab.png\" alt=\"engineroomimg\">\r\n<img *ngIf=\"imgSwap == true\"  src=\"./assets/img/lab-guardiangone.png\" alt=\"engineroomimg\">\r\n<button class=\"main\" [routerLink] = \"['../mainroom']\">Back to main room</button>\r\n<button class=\"cupboard\" [ngClass]=\"{ 'on': switch3 }\" [routerLink] = \"['../lablockpuzzle']\">Cupboard of Ingredients</button>\r\n<button class=\"tools\" [ngClass]=\"{ 'on': switch2 }\" [routerLink] = \"['../labguardianpuzzle']\">Potion making tools</button>\r\n<button class=\"book\" [ngClass]=\"{ 'on': switch1 }\" [routerLink] = \"['../labbookpuzzle']\">Potion recipe book</button>\r\n<button class=\"combine\" [ngClass]=\"{ 'on': switch }\" (click)=\"onClick(0)\">Brew the potion!</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/castle/lab/lab.component.ts":
/*!*********************************************!*\
  !*** ./src/app/castle/lab/lab.component.ts ***!
  \*********************************************/
/*! exports provided: LabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabComponent", function() { return LabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LabComponent = /** @class */ (function () {
    function LabComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.switch = true;
        this.switch1 = false;
        this.switch2 = false;
        this.switch3 = false;
        this.imgSwap = false;
    }
    LabComponent.prototype.ngOnInit = function () {
        if (this._httpService.user.progress.labpuzzle1 == true) {
            this.switch1 = true;
        }
        if (this._httpService.user.progress.labpuzzle2 == true) {
            this.switch2 = true;
            this.imgSwap = true;
        }
        if (this._httpService.user.progress.labpuzzle3 == true) {
            this.switch3 = true;
        }
        if (this._httpService.user.progress.labpuzzle1 == true && this._httpService.user.progress.labpuzzle2 == true && this._httpService.user.progress.labpuzzle3 == true && this._httpService.user.inventory.potion == false) {
            this.description = "You have everything you need to brew the potion of unsealing! Time to combine them all!";
            this.switch = false;
            this.imgSwap = true;
        }
        if (this._httpService.user.inventory.potion == true && this.switch == true) {
            this.description = "You've brewed the potion of unsealing, and have no further need of anything in this room.";
        }
        if (this._httpService.user.progress.lab == false) {
            this.description = "The wand reacts to the seal on the door, unlocking it. Stepping into the room, you see ingredients and recipes for potions everywhere. It looks like you'll have to search the room for what you need.";
            this._httpService.user.progress.lab = true;
        }
        else if (this._httpService.user.progress.lab == true && this.switch == true && this._httpService.user.inventory.potion == false) {
            this.description = "It doesn't look like you have enough ingredients to brew the potion of unsealing. Keep looking around.";
        }
    };
    LabComponent.prototype.onClick = function (type) {
        if (type == 0) {
            this._router.navigate(['/castle/labcombinepuzzle']);
        }
    };
    LabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lab',
            template: __webpack_require__(/*! ./lab.component.html */ "./src/app/castle/lab/lab.component.html"),
            styles: [__webpack_require__(/*! ./lab.component.css */ "./src/app/castle/lab/lab.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LabComponent);
    return LabComponent;
}());



/***/ }),

/***/ "./src/app/castle/labbookpuzzle/labbookpuzzle.component.css":
/*!******************************************************************!*\
  !*** ./src/app/castle/labbookpuzzle/labbookpuzzle.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzdGxlL2xhYmJvb2twdXp6bGUvbGFiYm9va3B1enpsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Nhc3RsZS9sYWJib29rcHV6emxlL2xhYmJvb2twdXp6bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLm9ue1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/castle/labbookpuzzle/labbookpuzzle.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/castle/labbookpuzzle/labbookpuzzle.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Book in the Potion Lab</p>\r\n<button [ngClass]=\"{ 'on': switch }\" [routerLink] = \"['../lab']\">Grab the book</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n<div [ngClass]=\"{ 'on': switch1 }\">\r\n    <p [innerHTML]=\"question\"></p>\r\n    <div *ngFor=\"let answer of answers; let i = index\">\r\n        <button (click)=\"onClick(i)\" [innerHTML]=\"answer\"></button>\r\n        <br>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/castle/labbookpuzzle/labbookpuzzle.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/castle/labbookpuzzle/labbookpuzzle.component.ts ***!
  \*****************************************************************/
/*! exports provided: LabbookpuzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabbookpuzzleComponent", function() { return LabbookpuzzleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var LabbookpuzzleComponent = /** @class */ (function () {
    function LabbookpuzzleComponent(_httpService) {
        this._httpService = _httpService;
        this.count = 0;
        this.switch = true;
        this.switch1 = false;
    }
    LabbookpuzzleComponent.prototype.ngOnInit = function () {
        this.description = "You pick up the recipe book, but it won't open. It appears to be testing you.";
        this.getQuestion();
    };
    LabbookpuzzleComponent.prototype.shuffle = function (arr) {
        var x = arr.length - 1;
        var temp;
        while (x != 0) {
            var y = Math.floor(Math.random() * x);
            temp = arr[y];
            arr[y] = arr[x];
            arr[x] = temp;
            x--;
        }
    };
    LabbookpuzzleComponent.prototype.getQuestion = function () {
        var _this = this;
        var observe = this._httpService.getEasyHistory();
        observe.subscribe(function (data) {
            data.results[0].incorrect_answers.push(data.results[0].correct_answer);
            _this.shuffle(data.results[0].incorrect_answers);
            _this.question = data.results[0].question;
            _this.answers = data.results[0].incorrect_answers;
            _this.correct = data.results[0].correct_answer;
        });
    };
    LabbookpuzzleComponent.prototype.onClick = function (index) {
        if (this.answers[index] == this.correct) {
            this.count++;
            if (this.count == 3) {
                this.description = "The book opens, and as you search through it, you find the recipe for the potion of unsealing!";
                this.switch1 = true;
                this.switch = false;
                this._httpService.user.progress.labpuzzle1 = true;
            }
            else {
                this.description = "The book still won't open. Another question appears.";
                this.getQuestion();
            }
        }
        else {
            this.description = "Nothing happened. Maybe that wasn't the correct answer?";
        }
    };
    LabbookpuzzleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-labbookpuzzle',
            template: __webpack_require__(/*! ./labbookpuzzle.component.html */ "./src/app/castle/labbookpuzzle/labbookpuzzle.component.html"),
            styles: [__webpack_require__(/*! ./labbookpuzzle.component.css */ "./src/app/castle/labbookpuzzle/labbookpuzzle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], LabbookpuzzleComponent);
    return LabbookpuzzleComponent;
}());



/***/ }),

/***/ "./src/app/castle/labcombinepuzzle/labcombinepuzzle.component.css":
/*!************************************************************************!*\
  !*** ./src/app/castle/labcombinepuzzle/labcombinepuzzle.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzdGxlL2xhYmNvbWJpbmVwdXp6bGUvbGFiY29tYmluZXB1enpsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Nhc3RsZS9sYWJjb21iaW5lcHV6emxlL2xhYmNvbWJpbmVwdXp6bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLm9ue1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/castle/labcombinepuzzle/labcombinepuzzle.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/castle/labcombinepuzzle/labcombinepuzzle.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Brewing the Potion</p>\r\n<button [ngClass]=\"{ 'on': switch }\" [routerLink] = \"['../labpotion']\">Get the potion!</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n<div [ngClass]=\"{ 'on': switch1 }\">\r\n    <p [innerHTML]=\"question\"></p>\r\n    <div *ngFor=\"let answer of answers; let i = index\">\r\n        <button (click)=\"onClick(i)\" [innerHTML]=\"answer\"></button>\r\n        <br>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/castle/labcombinepuzzle/labcombinepuzzle.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/castle/labcombinepuzzle/labcombinepuzzle.component.ts ***!
  \***********************************************************************/
/*! exports provided: LabcombinepuzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabcombinepuzzleComponent", function() { return LabcombinepuzzleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var LabcombinepuzzleComponent = /** @class */ (function () {
    function LabcombinepuzzleComponent(_httpService) {
        this._httpService = _httpService;
        this.count = 0;
        this.switch = true;
        this.switch1 = false;
    }
    LabcombinepuzzleComponent.prototype.ngOnInit = function () {
        this.description = "In order to follow this recipe, you're going to have to follow some complex calculations. You should make sure to get this right!";
        this.getQuestion();
    };
    LabcombinepuzzleComponent.prototype.shuffle = function (arr) {
        var x = arr.length - 1;
        var temp;
        while (x != 0) {
            var y = Math.floor(Math.random() * x);
            temp = arr[y];
            arr[y] = arr[x];
            arr[x] = temp;
            x--;
        }
    };
    LabcombinepuzzleComponent.prototype.getQuestion = function () {
        if (this.count == 0) {
            this.question = "1/2 + 3/2";
            this.answers = [2, 5, 4, 3, 0];
            this.correct = 2;
        }
        if (this.count == 1) {
            this.question = "(1/2) / (1/6)";
            this.answers = [3, 5, 1, 10, 6];
            this.correct = 3;
        }
        if (this.count == 2) {
            this.question = "(2/5) - (7/5)";
            this.answers = [5, 4, -1, 0, 1];
            this.correct = -1;
        }
        if (this.count == 3) {
            this.question = "(1/3) * ((7/6) - (1/5))";
            this.answers = ["61/152", "1/63", "29/90", "1 + (1/24)", "-(3/16)"];
            this.correct = "29/90";
        }
    };
    LabcombinepuzzleComponent.prototype.onClick = function (index) {
        if (this.answers[index] == this.correct) {
            this.count++;
            if (this.count == 4) {
                this.description = "That should be everything! You've worked out everything you need to brew the potion and, after a few minutes of putting it all together, it definitely looks ready.";
                this.switch1 = true;
                this.switch = false;
            }
            else {
                if (this.count == 1) {
                    this.description = "That seems right. The next step in the recipe reads as follows:";
                    this.getQuestion();
                }
                if (this.count == 2) {
                    this.description = "You're pretty sure you got that one. The third step looks a little more complex:";
                    this.getQuestion();
                }
                if (this.count == 3) {
                    this.description = "The final step, this one looks challenging!";
                    this.getQuestion();
                }
            }
        }
        else {
            this.description = "Hmm, that doesn't seem right. Maybe you should rethink that one?";
        }
    };
    LabcombinepuzzleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-labcombinepuzzle',
            template: __webpack_require__(/*! ./labcombinepuzzle.component.html */ "./src/app/castle/labcombinepuzzle/labcombinepuzzle.component.html"),
            styles: [__webpack_require__(/*! ./labcombinepuzzle.component.css */ "./src/app/castle/labcombinepuzzle/labcombinepuzzle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], LabcombinepuzzleComponent);
    return LabcombinepuzzleComponent;
}());



/***/ }),

/***/ "./src/app/castle/labguardianpuzzle/labguardianpuzzle.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/castle/labguardianpuzzle/labguardianpuzzle.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzdGxlL2xhYmd1YXJkaWFucHV6emxlL2xhYmd1YXJkaWFucHV6emxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY2FzdGxlL2xhYmd1YXJkaWFucHV6emxlL2xhYmd1YXJkaWFucHV6emxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5vbntcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/castle/labguardianpuzzle/labguardianpuzzle.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/castle/labguardianpuzzle/labguardianpuzzle.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Banishing the Guardian</p>\r\n<button [ngClass]=\"{ 'on': switch }\" [routerLink] = \"['../lab']\">Look around the lab</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n<div [ngClass]=\"{ 'on': switch1 }\">\r\n    <p [innerHTML]=\"question\"></p>\r\n    <input type=\"text\" name=\"answerinput\" [(ngModel)]=\"answer\" />\r\n        <button (click)=\"onClick()\">Guess!</button>\r\n        <br>\r\n</div>"

/***/ }),

/***/ "./src/app/castle/labguardianpuzzle/labguardianpuzzle.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/castle/labguardianpuzzle/labguardianpuzzle.component.ts ***!
  \*************************************************************************/
/*! exports provided: LabguardianpuzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabguardianpuzzleComponent", function() { return LabguardianpuzzleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var LabguardianpuzzleComponent = /** @class */ (function () {
    function LabguardianpuzzleComponent(_httpService) {
        this._httpService = _httpService;
        this.answer = "";
        this.count = 0;
        this.switch = true;
        this.switch1 = false;
    }
    LabguardianpuzzleComponent.prototype.ngOnInit = function () {
        this.description = "A small creature is guarding the tools you need to make the potion. 'If you want to use these, you'll have to answer my riddles.'";
        this.getQuestion();
    };
    LabguardianpuzzleComponent.prototype.shuffle = function (arr) {
        var x = arr.length - 1;
        var temp;
        while (x != 0) {
            var y = Math.floor(Math.random() * x);
            temp = arr[y];
            arr[y] = arr[x];
            arr[x] = temp;
            x--;
        }
    };
    LabguardianpuzzleComponent.prototype.getQuestion = function () {
        if (this.count == 0) {
            this.question = "The more you take, the more you leave behind. What am I?";
            this.correct = "footsteps";
            this.correct2 = "steps";
        }
        if (this.count == 1) {
            this.question = "What has a head, a tail, is brown, and has no legs?";
            this.correct = "penny";
            this.correct2 = "a penny";
        }
        if (this.count == 2) {
            this.question = "What comes once in a minute, twice in a moment, but never in a thousand years?";
            this.correct = "m";
            this.correct2 = "letter m";
        }
    };
    LabguardianpuzzleComponent.prototype.onClick = function () {
        if (this.answer == this.correct || this.answer == this.correct2) {
            this.count++;
            if (this.count == 3) {
                this.description = "'Well done, you may use these tools any time'. And with that, he vanishes.";
                this.switch1 = true;
                this.switch = false;
                this._httpService.user.progress.labpuzzle2 = true;
            }
            else {
                if (this.count == 1) {
                    this.description = "'Very good, but do you know this one?'";
                    this.getQuestion();
                    this.answer = "";
                }
                if (this.count == 2) {
                    this.description = "'You're good at this, here's my final riddle.'";
                    this.getQuestion();
                    this.answer = "";
                }
            }
        }
        else {
            this.description = "'That's not right...'";
        }
    };
    LabguardianpuzzleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-labguardianpuzzle',
            template: __webpack_require__(/*! ./labguardianpuzzle.component.html */ "./src/app/castle/labguardianpuzzle/labguardianpuzzle.component.html"),
            styles: [__webpack_require__(/*! ./labguardianpuzzle.component.css */ "./src/app/castle/labguardianpuzzle/labguardianpuzzle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], LabguardianpuzzleComponent);
    return LabguardianpuzzleComponent;
}());



/***/ }),

/***/ "./src/app/castle/lablockpuzzle/lablockpuzzle.component.css":
/*!******************************************************************!*\
  !*** ./src/app/castle/lablockpuzzle/lablockpuzzle.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzdGxlL2xhYmxvY2twdXp6bGUvbGFibG9ja3B1enpsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2Nhc3RsZS9sYWJsb2NrcHV6emxlL2xhYmxvY2twdXp6bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLm9ue1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/castle/lablockpuzzle/lablockpuzzle.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/castle/lablockpuzzle/lablockpuzzle.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Unlocking the Cupboard</p>\r\n<button [ngClass]=\"{ 'on': switch }\" [routerLink] = \"['../lab']\">Grab some ingredients</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n<div [ngClass]=\"{ 'on': switch1 }\">\r\n    <p [innerHTML]=\"question\"></p>\r\n    <div *ngFor=\"let answer of answers; let i = index\">\r\n        <button (click)=\"onClick(i)\" [innerHTML]=\"answer\"></button>\r\n        <br>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/castle/lablockpuzzle/lablockpuzzle.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/castle/lablockpuzzle/lablockpuzzle.component.ts ***!
  \*****************************************************************/
/*! exports provided: LablockpuzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LablockpuzzleComponent", function() { return LablockpuzzleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var LablockpuzzleComponent = /** @class */ (function () {
    function LablockpuzzleComponent(_httpService) {
        this._httpService = _httpService;
        this.count = 0;
        this.switch = true;
        this.switch1 = false;
    }
    LablockpuzzleComponent.prototype.ngOnInit = function () {
        this.description = "As you inspect the lock, it looks like you have to determine the value of x to open the cupboard.";
        this.getQuestion();
    };
    LablockpuzzleComponent.prototype.shuffle = function (arr) {
        var x = arr.length - 1;
        var temp;
        while (x != 0) {
            var y = Math.floor(Math.random() * x);
            temp = arr[y];
            arr[y] = arr[x];
            arr[x] = temp;
            x--;
        }
    };
    LablockpuzzleComponent.prototype.getQuestion = function () {
        if (this.count == 0) {
            this.question = "x - 9 = -7";
            this.answers = [-11, 2, 0, -3, 16];
            this.correct = 2;
        }
        if (this.count == 1) {
            this.question = "-4x + 7 = 3";
            this.answers = [14, -5, 1, -1, 2];
            this.correct = 1;
        }
        if (this.count == 2) {
            this.question = "-x + 5 = -14";
            this.answers = [19, 5, 6, 13, -5];
            this.correct = 19;
        }
    };
    LablockpuzzleComponent.prototype.onClick = function (index) {
        if (this.answers[index] == this.correct) {
            this.count++;
            if (this.count == 3) {
                this.description = "The lock pops open, and you grab some ingredients from the cupboard.";
                this._httpService.user.progress.labpuzzle3 = true;
                this.switch1 = true;
                this.switch = false;
            }
            else {
                this.description = "Again, solve for x.";
                this.getQuestion();
            }
        }
        else {
            this.description = "Nothing happened. Try again.";
        }
    };
    LablockpuzzleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lablockpuzzle',
            template: __webpack_require__(/*! ./lablockpuzzle.component.html */ "./src/app/castle/lablockpuzzle/lablockpuzzle.component.html"),
            styles: [__webpack_require__(/*! ./lablockpuzzle.component.css */ "./src/app/castle/lablockpuzzle/lablockpuzzle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], LablockpuzzleComponent);
    return LablockpuzzleComponent;
}());



/***/ }),

/***/ "./src/app/castle/labpotion/labpotion.component.css":
/*!**********************************************************!*\
  !*** ./src/app/castle/labpotion/labpotion.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzdGxlL2xhYnBvdGlvbi9sYWJwb3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY2FzdGxlL2xhYnBvdGlvbi9sYWJwb3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/castle/labpotion/labpotion.component.html":
/*!***********************************************************!*\
  !*** ./src/app/castle/labpotion/labpotion.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Got the potion!</p>\r\n<button [routerLink] = \"['../lab']\">Potion Lab</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/castle/labpotion/labpotion.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/castle/labpotion/labpotion.component.ts ***!
  \*********************************************************/
/*! exports provided: LabpotionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabpotionComponent", function() { return LabpotionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var LabpotionComponent = /** @class */ (function () {
    function LabpotionComponent(_httpService) {
        this._httpService = _httpService;
    }
    LabpotionComponent.prototype.ngOnInit = function () {
        this.description = "You've successfully brewed the potion of unsealing!";
        this._httpService.user.inventory.potion = true;
    };
    LabpotionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-labpotion',
            template: __webpack_require__(/*! ./labpotion.component.html */ "./src/app/castle/labpotion/labpotion.component.html"),
            styles: [__webpack_require__(/*! ./labpotion.component.css */ "./src/app/castle/labpotion/labpotion.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], LabpotionComponent);
    return LabpotionComponent;
}());



/***/ }),

/***/ "./src/app/castle/mainroom/mainroom.component.css":
/*!********************************************************!*\
  !*** ./src/app/castle/mainroom/mainroom.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.hall{\r\n    position: absolute;\r\n    left:612px;\r\n    top: 315px;\r\n}\r\n.potion{\r\n    position: absolute;\r\n    left:75px;\r\n    top: 315px;\r\n}\r\n.dungeon{\r\n    position: absolute;\r\n    left:345px;\r\n    top: 290px;\r\n}\r\n.figure{\r\n    position: absolute;\r\n    left:470px;\r\n    top: 605px;\r\n}\r\n.wizard{\r\n    position: absolute;\r\n    left:572px;\r\n    top: 315px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(250, 215, 162), rgb(202, 157, 31));\r\n    border-radius: 3px;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzdGxlL21haW5yb29tL21haW5yb29tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7SUFDSSx5RUFBeUU7SUFDekUsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jYXN0bGUvbWFpbnJvb20vbWFpbnJvb20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcclxufVxyXG4uaGFsbHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6NjEycHg7XHJcbiAgICB0b3A6IDMxNXB4O1xyXG59XHJcbi5wb3Rpb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0Ojc1cHg7XHJcbiAgICB0b3A6IDMxNXB4O1xyXG59XHJcbi5kdW5nZW9ue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDozNDVweDtcclxuICAgIHRvcDogMjkwcHg7XHJcbn1cclxuLmZpZ3VyZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6NDcwcHg7XHJcbiAgICB0b3A6IDYwNXB4O1xyXG59XHJcbi53aXphcmR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjU3MnB4O1xyXG4gICAgdG9wOiAzMTVweDtcclxufVxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIHJnYigyNTAsIDIxNSwgMTYyKSwgcmdiKDIwMiwgMTU3LCAzMSkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi5vbntcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/castle/mainroom/mainroom.component.html":
/*!*********************************************************!*\
  !*** ./src/app/castle/mainroom/mainroom.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Main Castle Room</p>\r\n<img *ngIf=\"imgSwap == false\"  src=\"./assets/img/mainroom2.png\" alt=\"mainroomimg\">\r\n<img *ngIf=\"imgSwap == true\"  src=\"./assets/img/mainroom.png\" alt=\"mainroomimg\">\r\n<button class=\"hall\" [ngClass]=\"{ 'on': switch2 }\" [routerLink] = \"['../hallway']\">Hallway</button>\r\n<button class=\"potion\" (click)=\"onClick(2)\">Potion Lab</button>\r\n<button class=\"dungeon\" [ngClass]=\"{ 'on': switch1 }\" (click)=\"onClick(1)\">Dungeon</button>\r\n<button class=\"figure\" [ngClass]=\"{ 'on': switch }\" (click)=\"onClick(0)\">Approach the figure</button>\r\n<button class=\"wizard\" [ngClass]=\"{ 'on': switch3 }\" [routerLink] = \"['../hallwaywand']\">Go to the wizard's room</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/castle/mainroom/mainroom.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/castle/mainroom/mainroom.component.ts ***!
  \*******************************************************/
/*! exports provided: MainroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainroomComponent", function() { return MainroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MainroomComponent = /** @class */ (function () {
    function MainroomComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.switch = false;
        this.switch1 = false;
        this.switch2 = false;
        this.switch3 = true;
        this.imgSwap = false;
    }
    MainroomComponent.prototype.ngOnInit = function () {
        if (this._httpService.user.progress.mainroom == true && this._httpService.user.inventory.wand == false) {
            this.description = "You've returned to the great hall.";
            this.switch = true;
            this.imgSwap = true;
        }
        if (this._httpService.user.progress.mainroom == false) {
            this.description = "You've successfully opened the door and escaped the tower! Heading downstairs and into what could only be described as a great hall, you are greeted by a partially faded figure that beckons you over.";
            this._httpService.user.progress.mainroom = true;
        }
        if (this._httpService.user.inventory.wand == true && this._httpService.user.progress.gotwand == true) {
            this.description = "You've returned to the great hall.";
            this.switch = true;
            this.imgSwap = true;
            this.switch3 = false;
            this.switch2 = true;
        }
        if (this._httpService.user.inventory.wand == true && this._httpService.user.progress.gotwand == false) {
            this.description = "After picking up the wand, you go through the secret door, down the hallway, and end up back in the main hall";
            this.switch = true;
            this.imgSwap = true;
            this.switch3 = false;
            this.switch2 = true;
            this._httpService.user.progress.gotwand = true;
        }
        if (this._httpService.user.progress.dungeon == true) {
            this.switch1 == true;
            this.imgSwap = true;
        }
    };
    MainroomComponent.prototype.onClick = function (type) {
        if (type == 0) {
            this.description = "'Young human, I don't know how you came here, but you have managed to escape the tower, and may have what it takes to free me from my prison. Please, head down the hallway and solve the puzzle to open the door to my prison.' He then beckons you towards a dark hallway.";
            this.switch = true;
        }
        if (type == 1) {
            if (this._httpService.user.inventory.wand == false) {
                this.description = "As hard as you try, you can't open the door to the dungeon. It seems to be magically sealed.";
            }
            if (this._httpService.user.inventory.spellbook == true) {
                this.description = "The door doesn't seem to budge. The book's power must have sealed the dungeon off completely.";
            }
            if (this._httpService.user.inventory.spellbook == false && this._httpService.user.inventory.wand == true) {
                this._router.navigate(['/castle/dungeonroom1']);
            }
        }
        if (type == 2) {
            if (this._httpService.user.inventory.wand == false) {
                this.description = "As hard as you try, you can't open the door to the potion lab. It seems to be magically sealed.";
            }
            else {
                this._router.navigate(['/castle/lab']);
            }
        }
    };
    MainroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mainroom',
            template: __webpack_require__(/*! ./mainroom.component.html */ "./src/app/castle/mainroom/mainroom.component.html"),
            styles: [__webpack_require__(/*! ./mainroom.component.css */ "./src/app/castle/mainroom/mainroom.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MainroomComponent);
    return MainroomComponent;
}());



/***/ }),

/***/ "./src/app/castle/tower/tower.component.css":
/*!**************************************************!*\
  !*** ./src/app/castle/tower/tower.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.door{\r\n    position: absolute;\r\n    left:613px;\r\n    top: 407px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(250, 215, 162), rgb(202, 157, 31));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzdGxlL3Rvd2VyL3Rvd2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7QUFDQTtJQUNJLHlFQUF5RTtJQUN6RSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jYXN0bGUvdG93ZXIvdG93ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcclxufVxyXG4uZG9vcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6NjEzcHg7XHJcbiAgICB0b3A6IDQwN3B4O1xyXG59XHJcbmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggcmdiKDI1MCwgMjE1LCAxNjIpLCByZ2IoMjAyLCAxNTcsIDMxKSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/castle/tower/tower.component.html":
/*!***************************************************!*\
  !*** ./src/app/castle/tower/tower.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Tower Room</p>\r\n<img src=\"./assets/img/tower.png\" alt=\"engineroomimg\">\r\n<button class=\"door\" [routerLink] = \"['../towerpuzzle']\">Inspect Door</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/castle/tower/tower.component.ts":
/*!*************************************************!*\
  !*** ./src/app/castle/tower/tower.component.ts ***!
  \*************************************************/
/*! exports provided: TowerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TowerComponent", function() { return TowerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var TowerComponent = /** @class */ (function () {
    function TowerComponent(_httpService) {
        this._httpService = _httpService;
    }
    TowerComponent.prototype.ngOnInit = function () {
        this.description = "After stepping through the strange glowing archway, you arrive in a small room made of stone. Looking around, you notice a window. As you peer out the window, you see a huge castle, which you seem to be inside of. Perplexed, you turn around and notice a door with what appears to be a seal on it.";
    };
    TowerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tower',
            template: __webpack_require__(/*! ./tower.component.html */ "./src/app/castle/tower/tower.component.html"),
            styles: [__webpack_require__(/*! ./tower.component.css */ "./src/app/castle/tower/tower.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], TowerComponent);
    return TowerComponent;
}());



/***/ }),

/***/ "./src/app/castle/towerpuzzle/towerpuzzle.component.css":
/*!**************************************************************!*\
  !*** ./src/app/castle/towerpuzzle/towerpuzzle.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzdGxlL3Rvd2VycHV6emxlL3Rvd2VycHV6emxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY2FzdGxlL3Rvd2VycHV6emxlL3Rvd2VycHV6emxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5vbntcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/castle/towerpuzzle/towerpuzzle.component.html":
/*!***************************************************************!*\
  !*** ./src/app/castle/towerpuzzle/towerpuzzle.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Unsealing the Door</p>\r\n<button [ngClass]=\"{ 'on': switch }\" [routerLink] = \"['../mainroom']\">Main Room</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n<div [ngClass]=\"{ 'on': switch1 }\">\r\n    <p [innerHTML]=\"question\"></p>\r\n    <div *ngFor=\"let answer of answers; let i = index\">\r\n        <button (click)=\"onClick(i)\" [innerHTML]=\"answer\"></button>\r\n        <br>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/castle/towerpuzzle/towerpuzzle.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/castle/towerpuzzle/towerpuzzle.component.ts ***!
  \*************************************************************/
/*! exports provided: TowerpuzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TowerpuzzleComponent", function() { return TowerpuzzleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var TowerpuzzleComponent = /** @class */ (function () {
    function TowerpuzzleComponent(_httpService) {
        this._httpService = _httpService;
        this.count = 0;
        this.switch = true;
        this.switch1 = false;
    }
    TowerpuzzleComponent.prototype.ngOnInit = function () {
        this.description = "As you examine the seal, you notice an unfinished equation. You must have to solve it!";
        this.getQuestion();
    };
    TowerpuzzleComponent.prototype.shuffle = function (arr) {
        var x = arr.length - 1;
        var temp;
        while (x != 0) {
            var y = Math.floor(Math.random() * x);
            temp = arr[y];
            arr[y] = arr[x];
            arr[x] = temp;
            x--;
        }
    };
    TowerpuzzleComponent.prototype.getQuestion = function () {
        var _this = this;
        var observe = this._httpService.getEasyMath();
        observe.subscribe(function (data) {
            data.results[0].incorrect_answers.push(data.results[0].correct_answer);
            _this.shuffle(data.results[0].incorrect_answers);
            _this.question = data.results[0].question;
            _this.answers = data.results[0].incorrect_answers;
            _this.correct = data.results[0].correct_answer;
        });
    };
    TowerpuzzleComponent.prototype.onClick = function (index) {
        if (this.answers[index] == this.correct) {
            this.count++;
            if (this.count == 3) {
                this.description = "You've successfully solved the door puzzle, and removed the seal.";
                this.switch1 = true;
                this.switch = false;
            }
            else {
                this.description = "Another equation appears in its place.";
                this.getQuestion();
            }
        }
        else {
            this.description = "The seal didn't respond. You must have the incorrect answer.";
        }
    };
    TowerpuzzleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-towerpuzzle',
            template: __webpack_require__(/*! ./towerpuzzle.component.html */ "./src/app/castle/towerpuzzle/towerpuzzle.component.html"),
            styles: [__webpack_require__(/*! ./towerpuzzle.component.css */ "./src/app/castle/towerpuzzle/towerpuzzle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], TowerpuzzleComponent);
    return TowerpuzzleComponent;
}());



/***/ }),

/***/ "./src/app/house/attic/attic.component.css":
/*!*************************************************!*\
  !*** ./src/app/house/attic/attic.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n.device{\r\n    position: absolute;\r\n    left:400px;\r\n    top: 590px;\r\n}\r\n.upstairs{\r\n    position: absolute;\r\n    left:130px;\r\n    top: 660px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(154, 226, 187), rgb(32, 172, 95));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG91c2UvYXR0aWMvYXR0aWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0ksd0VBQXdFO0lBQ3hFLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2hvdXNlL2F0dGljL2F0dGljLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbn1cclxuLm9ue1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5kZXZpY2V7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjQwMHB4O1xyXG4gICAgdG9wOiA1OTBweDtcclxufVxyXG4udXBzdGFpcnN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjEzMHB4O1xyXG4gICAgdG9wOiA2NjBweDtcclxufVxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIHJnYigxNTQsIDIyNiwgMTg3KSwgcmdiKDMyLCAxNzIsIDk1KSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/house/attic/attic.component.html":
/*!**************************************************!*\
  !*** ./src/app/house/attic/attic.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>In the Attic</h3>\r\n<img *ngIf=\"imgSwap == false\" src=\"./assets/img/attic.png\" alt=\"atticimg\">\r\n<img *ngIf=\"imgSwap == true\" src=\"./assets/img/attic-devicegone.png\" alt=\"atticimg2\">\r\n<button class=\"upstairs\" [routerLink]=\"['../upstairslanding']\">Upstairs Landing</button>\r\n\r\n<button class=\"device\" [ngClass]=\"{ 'on': switch }\" (click)=\"param(0)\">Pick up Device</button>\r\n\r\n<div class=\"textbox\">\r\n        <p>{{description}}</p>\r\n    </div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/house/attic/attic.component.ts":
/*!************************************************!*\
  !*** ./src/app/house/attic/attic.component.ts ***!
  \************************************************/
/*! exports provided: AtticComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtticComponent", function() { return AtticComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var AtticComponent = /** @class */ (function () {
    function AtticComponent(_httpService) {
        this._httpService = _httpService;
        this.switch = false;
        this.imgSwap = false;
    }
    AtticComponent.prototype.ngOnInit = function () {
        if (this._httpService.user.inventory.aliendevice == false) {
            this.description = "the Attic is a cramped dusty room. You see the source of that weird light from earlier. It is a very strange looking machine the size of a brick.";
        }
        else {
            this.description = "There's nothing of interest in the dusty old attic.";
            this.switch = true;
            this.imgSwap = true;
        }
    };
    AtticComponent.prototype.param = function (num) {
        if (num == 0) {
            this.description = "You pick up the Device which ejects a marble sized sphere and says a message you cannot understand. Maybe you could research foreign languages?";
            this._httpService.user.inventory.aliendevice = true;
            this.switch = true;
            this.imgSwap = true;
        }
    };
    AtticComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-attic',
            template: __webpack_require__(/*! ./attic.component.html */ "./src/app/house/attic/attic.component.html"),
            styles: [__webpack_require__(/*! ./attic.component.css */ "./src/app/house/attic/attic.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], AtticComponent);
    return AtticComponent;
}());



/***/ }),

/***/ "./src/app/house/backyard/backyard.component.css":
/*!*******************************************************!*\
  !*** ./src/app/house/backyard/backyard.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.shed{\r\n    position: absolute;\r\n    left:170px;\r\n    top: 300px;\r\n}\r\n.frontroom{\r\n    position: absolute;\r\n    left:720px;\r\n    top: 670px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(174, 200, 255), rgb(98, 147, 253));\r\n    border-radius: 3px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG91c2UvYmFja3lhcmQvYmFja3lhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7QUFDQTtJQUNJLHlFQUF5RTtJQUN6RSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9ob3VzZS9iYWNreWFyZC9iYWNreWFyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3h7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG59XHJcbi5zaGVke1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDoxNzBweDtcclxuICAgIHRvcDogMzAwcHg7XHJcbn1cclxuLmZyb250cm9vbXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6NzIwcHg7XHJcbiAgICB0b3A6IDY3MHB4O1xyXG59XHJcbmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggcmdiKDE3NCwgMjAwLCAyNTUpLCByZ2IoOTgsIDE0NywgMjUzKSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/house/backyard/backyard.component.html":
/*!********************************************************!*\
  !*** ./src/app/house/backyard/backyard.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>In the Backyard</h3>\r\n<img src=\"./assets/img/backyard.png\" alt=\"backyardimg\">\r\n<button class=\"frontroom\" [routerLink]=\"['../frontroom']\">Front Room</button>\r\n<button class=\"shed\" (click)=\"param(0)\">Shed</button>\r\n\r\n\r\n\r\n<div class=\"textbox\">\r\n        <p>{{description}}</p>\r\n    </div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/house/backyard/backyard.component.ts":
/*!******************************************************!*\
  !*** ./src/app/house/backyard/backyard.component.ts ***!
  \******************************************************/
/*! exports provided: BackyardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackyardComponent", function() { return BackyardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var BackyardComponent = /** @class */ (function () {
    function BackyardComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    BackyardComponent.prototype.ngOnInit = function () {
        if (this._httpService.user.progress.savedAlien == false) {
            this.description = "You step out into the large backyard.  There is a gardening shed in the back. You also notice a feeble glow of strange light from the attic window.";
        }
        if (this._httpService.user.progress.savedAlien == true && this._httpService.user.progress.spacedone == false && this._httpService.user.progress.castledone == false) {
            this.description = "You step out into the large backyard.  There is a gardening shed in the back.";
        }
        if (this._httpService.user.progress.savedAlien == false && this._httpService.user.progress.castledone == true) {
            this.description = "The wizard falls to the floor, free of his prison. Slowly, he stands up. 'Thank you, young wizard. You've saved me from my imposter, and freed my from his prison. I have no further interest in staying in this place. I sense you are not from this world. Let me return you to your home.' The wizard begins to cast a spell, and you feel yourself being pulled from the castle. Suddenly, you look around, and you're back in your backyard. As you glance behind you, something seems off about the old shed, but you can't quite tell what it might be...That glow in the attic is still there, and it doesn't seem like much time has passed since you were transported here from the basement...";
            this._httpService.user.progress.castledone = false;
        }
        if (this._httpService.user.progress.savedthewizard == false && this._httpService.user.progress.spacedone == true) {
            this.description = "After stopping for ice cream, the alien drops you off in your backyard. The glow in the attic is gone, and it's starting to get darker, but your parents still aren't home. You thought you caught a glimpse of something behind you, but as you turn around, there's nothing there but the old shed. You never did find out what was in the basement of this house...";
            this._httpService.user.progress.spacedone = false;
        }
        if (this._httpService.user.progress.savedthewizard == true && this._httpService.user.progress.savedAlien == true && this._httpService.user.progress.castledone == true) {
            this.description = "The wizard falls to the floor, free of his prison. Slowly, he stands up. 'Thank you, young wizard. You've saved me from my imposter, and freed my from his prison. I have no further interest in staying in this place. I sense you are not from this world. Let me return you to your home.' The wizard begins to cast a spell, and you feel yourself being pulled from the castle. Suddenly, you look around, and you're back in your backyard. It doesn't seem like much time has passed since you were transported here from the basement. Suddenly, you hear a loud sound coming from inside the old shed.";
            this._httpService.user.progress.castledone = false;
        }
        else if (this._httpService.user.progress.savedthewizard == true && this._httpService.user.progress.savedAlien == true && this._httpService.user.progress.spacedone == true) {
            this.description = "After stopping for ice cream, the alien drops you off in your backyard. The glow in the attic is gone, and it's starting to get darker, but your parents still aren't home. Suddenly, you hear a loud sound coming from inside the old shed.";
            this._httpService.user.progress.spacedone = false;
        }
    };
    BackyardComponent.prototype.param = function (num) {
        if (num == 0) {
            if (this._httpService.user.inventory.shedkey == false) {
                this.description = "the shed is locked. You remeber you saw some keys earlier today but can't remember where. They have to be in the house somewhere...";
            }
            else {
                this._router.navigate(['/house/shed']);
            }
        }
    };
    BackyardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-backyard',
            template: __webpack_require__(/*! ./backyard.component.html */ "./src/app/house/backyard/backyard.component.html"),
            styles: [__webpack_require__(/*! ./backyard.component.css */ "./src/app/house/backyard/backyard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BackyardComponent);
    return BackyardComponent;
}());



/***/ }),

/***/ "./src/app/house/basement/basement.component.css":
/*!*******************************************************!*\
  !*** ./src/app/house/basement/basement.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n.frontroom{\r\n    position: absolute;\r\n    left:140px;\r\n    top: 312px;\r\n}\r\n.portal{\r\n    position: absolute;\r\n    left:530px;\r\n    top: 490px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(154, 226, 187), rgb(32, 172, 95));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG91c2UvYmFzZW1lbnQvYmFzZW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0ksd0VBQXdFO0lBQ3hFLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2hvdXNlL2Jhc2VtZW50L2Jhc2VtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbn1cclxuLm9ue1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5mcm9udHJvb217XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjE0MHB4O1xyXG4gICAgdG9wOiAzMTJweDtcclxufVxyXG4ucG9ydGFse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDo1MzBweDtcclxuICAgIHRvcDogNDkwcHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCByZ2IoMTU0LCAyMjYsIDE4NyksIHJnYigzMiwgMTcyLCA5NSkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/house/basement/basement.component.html":
/*!********************************************************!*\
  !*** ./src/app/house/basement/basement.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>In the basement</h3>\r\n<img *ngIf=\"imgSwap == false\" src=\"./assets/img/basement.png\" alt=\"basementimg\">\r\n<img *ngIf=\"imgSwap == true\" src=\"./assets/img/basement-noarchway.png\" alt=\"basementimg2\">\r\n<button class=\"frontroom\" [routerLink]=\"['../frontroom']\">Front Room</button>\r\n<button class=\"portal\" [ngClass]=\"{ 'on': switch }\" [routerLink]=\"['../../castle/tower']\">Step into portal!</button>\r\n\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/house/basement/basement.component.ts":
/*!******************************************************!*\
  !*** ./src/app/house/basement/basement.component.ts ***!
  \******************************************************/
/*! exports provided: BasementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasementComponent", function() { return BasementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var BasementComponent = /** @class */ (function () {
    function BasementComponent(_httpService) {
        this._httpService = _httpService;
        this.switch = false;
        this.imgSwap = false;
    }
    BasementComponent.prototype.ngOnInit = function () {
        if (this._httpService.user.progress.savedthewizard == false) {
            this.description = "You finally made it into the mysterious basement.  It looks failry normal except for the stone archway that is glowing.  Should you walk through it?";
        }
        if (this._httpService.user.progress.savedthewizard == true) {
            this.description = "The basement leaves no evidence that anything out of the ordinary happened here.";
            this.switch = true;
            this.imgSwap = true;
        }
    };
    BasementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basement',
            template: __webpack_require__(/*! ./basement.component.html */ "./src/app/house/basement/basement.component.html"),
            styles: [__webpack_require__(/*! ./basement.component.css */ "./src/app/house/basement/basement.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], BasementComponent);
    return BasementComponent;
}());



/***/ }),

/***/ "./src/app/house/bathroom/bathroom.component.css":
/*!*******************************************************!*\
  !*** ./src/app/house/bathroom/bathroom.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.sink{\r\n    position: absolute;\r\n    left:300px;\r\n    top: 370px;\r\n}\r\n.upstairs{\r\n    position: absolute;\r\n    left:700px;\r\n    top: 620px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(174, 200, 255), rgb(98, 147, 253));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG91c2UvYmF0aHJvb20vYmF0aHJvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7QUFDQTtJQUNJLHlFQUF5RTtJQUN6RSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9ob3VzZS9iYXRocm9vbS9iYXRocm9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3h7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG59XHJcbi5zaW5re1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDozMDBweDtcclxuICAgIHRvcDogMzcwcHg7XHJcbn1cclxuLnVwc3RhaXJze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDo3MDBweDtcclxuICAgIHRvcDogNjIwcHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCByZ2IoMTc0LCAyMDAsIDI1NSksIHJnYig5OCwgMTQ3LCAyNTMpKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/house/bathroom/bathroom.component.html":
/*!********************************************************!*\
  !*** ./src/app/house/bathroom/bathroom.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>In the Bathroom</h3>\r\n<img src=\"./assets/img/bathroom.png\" alt=\"bathroomimg\">\r\n<button class=\"upstairs\" [routerLink]=\"['../upstairslanding']\">Upstairs Landing</button>\r\n\r\n<button class=\"sink\" (click)=\"param(0)\">Use Sink</button>\r\n\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/house/bathroom/bathroom.component.ts":
/*!******************************************************!*\
  !*** ./src/app/house/bathroom/bathroom.component.ts ***!
  \******************************************************/
/*! exports provided: BathroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BathroomComponent", function() { return BathroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var BathroomComponent = /** @class */ (function () {
    function BathroomComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    BathroomComponent.prototype.ngOnInit = function () {
        this.description = "Its a bathroom";
    };
    BathroomComponent.prototype.param = function (num) {
        if (num == 0) {
            if (this._httpService.user.progress.translate == true && this._httpService.user.progress.savedAlien == false) {
                this._router.navigate(['/space/spaceroom']);
            }
            else {
                this.description = "You washed your hands, good job. Hygiene is important!";
            }
        }
    };
    BathroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bathroom',
            template: __webpack_require__(/*! ./bathroom.component.html */ "./src/app/house/bathroom/bathroom.component.html"),
            styles: [__webpack_require__(/*! ./bathroom.component.css */ "./src/app/house/bathroom/bathroom.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BathroomComponent);
    return BathroomComponent;
}());



/***/ }),

/***/ "./src/app/house/front-room/front-room.component.css":
/*!***********************************************************!*\
  !*** ./src/app/house/front-room/front-room.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.parlor{\r\n    position: absolute;\r\n    left:15px;\r\n    top: 610px;\r\n}\r\n.kitchen{\r\n    position: absolute;\r\n    left:550px;\r\n    top: 660px;\r\n}\r\n.garage{\r\n    position: absolute;\r\n    left:380px;\r\n    top: 420px;\r\n}\r\n.backyard{\r\n    position: absolute;\r\n    left:620px;\r\n    top: 420px;\r\n}\r\n.upstairs{\r\n    position: absolute;\r\n    left:30px;\r\n    top: 350px;\r\n}\r\n.basement{\r\n    position: absolute;\r\n    left:180px;\r\n    top: 660px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(154, 226, 187), rgb(32, 172, 95));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG91c2UvZnJvbnQtcm9vbS9mcm9udC1yb29tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0ksd0VBQXdFO0lBQ3hFLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2hvdXNlL2Zyb250LXJvb20vZnJvbnQtcm9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3h7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG59XHJcbi5wYXJsb3J7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjE1cHg7XHJcbiAgICB0b3A6IDYxMHB4O1xyXG59XHJcbi5raXRjaGVue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDo1NTBweDtcclxuICAgIHRvcDogNjYwcHg7XHJcbn1cclxuLmdhcmFnZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6MzgwcHg7XHJcbiAgICB0b3A6IDQyMHB4O1xyXG59XHJcbi5iYWNreWFyZHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6NjIwcHg7XHJcbiAgICB0b3A6IDQyMHB4O1xyXG59XHJcbi51cHN0YWlyc3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6MzBweDtcclxuICAgIHRvcDogMzUwcHg7XHJcbn1cclxuLmJhc2VtZW50e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDoxODBweDtcclxuICAgIHRvcDogNjYwcHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCByZ2IoMTU0LCAyMjYsIDE4NyksIHJnYigzMiwgMTcyLCA5NSkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/house/front-room/front-room.component.html":
/*!************************************************************!*\
  !*** ./src/app/house/front-room/front-room.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h3>In the Front Room</h3>\r\n    <img src=\"./assets/img/front-room.png\" alt=\"frontroomimg\">\r\n    <button class=\"parlor\" [routerLink]=\"['../parlor']\">Parlor</button>\r\n    <button class=\"kitchen\" [routerLink]=\"['../kitchen']\">kitchen</button>\r\n    <button class=\"garage\" [routerLink]=\"['../garage']\">garage</button>\r\n    <button class=\"backyard\" [routerLink]=\"['../backyard']\">backyard</button>\r\n    <button class=\"upstairs\" [routerLink]=\"['../upstairslanding']\">Upstairs</button>\r\n\r\n    <button class=\"basement\" (click)=\"param(0)\" >basement</button>\r\n\r\n    <div class=\"textbox\">\r\n        <p>{{description}}</p>\r\n    </div>\r\n\r\n</div>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/house/front-room/front-room.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/house/front-room/front-room.component.ts ***!
  \**********************************************************/
/*! exports provided: FrontRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontRoomComponent", function() { return FrontRoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var FrontRoomComponent = /** @class */ (function () {
    function FrontRoomComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    FrontRoomComponent.prototype.ngOnInit = function () {
        if (this._httpService.user.progress.frontroom == false) {
            this.description = "Welcome to your new house! Your parents are out and asked you to start unpacking your room. Better get started!";
            this._httpService.user.progress.frontroom = true;
        }
        else {
            this.description = "Back in the front room. There are many rooms to choose from, or you could go upstairs";
        }
    };
    FrontRoomComponent.prototype.param = function (num) {
        if (num == 0) {
            if (this._httpService.user.inventory.basementkey == true) {
                this._router.navigate(['/house/basement']);
            }
            else {
                this.description = "the Basement is locked";
            }
        }
    };
    FrontRoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-front-room',
            template: __webpack_require__(/*! ./front-room.component.html */ "./src/app/house/front-room/front-room.component.html"),
            styles: [__webpack_require__(/*! ./front-room.component.css */ "./src/app/house/front-room/front-room.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FrontRoomComponent);
    return FrontRoomComponent;
}());



/***/ }),

/***/ "./src/app/house/garage/garage.component.css":
/*!***************************************************!*\
  !*** ./src/app/house/garage/garage.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.frontroom{\r\n    position: absolute;\r\n    left:25px;\r\n    top: 500px;\r\n}\r\n.ladder{\r\n    position: absolute;\r\n    left:530px;\r\n    top: 640px;\r\n}\r\n.keys{\r\n    position: absolute;\r\n    left:113px;\r\n    top: 450px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(174, 200, 255), rgb(98, 147, 253));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG91c2UvZ2FyYWdlL2dhcmFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7QUFDQTtJQUNJLHlFQUF5RTtJQUN6RSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9ob3VzZS9nYXJhZ2UvZ2FyYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbn1cclxuLmZyb250cm9vbXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6MjVweDtcclxuICAgIHRvcDogNTAwcHg7XHJcbn1cclxuLmxhZGRlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6NTMwcHg7XHJcbiAgICB0b3A6IDY0MHB4O1xyXG59XHJcbi5rZXlze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDoxMTNweDtcclxuICAgIHRvcDogNDUwcHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCByZ2IoMTc0LCAyMDAsIDI1NSksIHJnYig5OCwgMTQ3LCAyNTMpKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/house/garage/garage.component.html":
/*!****************************************************!*\
  !*** ./src/app/house/garage/garage.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>In Garage</h3>\r\n<img *ngIf=\"imgSwap == 0\" src=\"./assets/img/garage.png\" alt=\"garageimg\">\r\n<img *ngIf=\"imgSwap == 1\" src=\"./assets/img/garage-nokey.png\" alt=\"garageimg2\">\r\n<img *ngIf=\"imgSwap == 2\" src=\"./assets/img/garage-noladder.png\" alt=\"garageimg2\">\r\n<img *ngIf=\"imgSwap == 3\" src=\"./assets/img/garage-nokeynoladder.png\" alt=\"garageimg2\">\r\n<button class=\"frontroom\" [routerLink]=\"['../frontroom']\">Front Room</button>\r\n\r\n\r\n<button class=\"ladder\" (click)=\"param(0)\">Check ladders</button>\r\n<button class=\"keys\" (click)=\"param(1)\">Check Keys</button>\r\n\r\n<div class=\"textbox\">\r\n        <p>{{description}}</p>\r\n    </div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/house/garage/garage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/house/garage/garage.component.ts ***!
  \**************************************************/
/*! exports provided: GarageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GarageComponent", function() { return GarageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var GarageComponent = /** @class */ (function () {
    function GarageComponent(_httpService) {
        this._httpService = _httpService;
        this.imgSwap = 0;
    }
    GarageComponent.prototype.ngOnInit = function () {
        this.description = "You enter the garage, its filled with tools, knick knacks, and a set of small ladders.  On the far wall you see some keys hanging, the basement key is missing";
        if (this._httpService.user.inventory.ladder == true && this._httpService.user.inventory.shedkey == true) {
            this.imgSwap = 3;
        }
        if (this._httpService.user.inventory.ladder == false && this._httpService.user.inventory.shedkey == true) {
            this.imgSwap = 1;
        }
        if (this._httpService.user.inventory.ladder == true && this._httpService.user.inventory.shedkey == false) {
            this.imgSwap = 2;
        }
    };
    GarageComponent.prototype.param = function (num) {
        if (num == 0) {
            if (this._httpService.user.inventory.ladder == false) {
                this.description = "You find a small step ladder that isnt to bulky so you decide to carry it";
                this._httpService.user.inventory.ladder = true;
                if (this._httpService.user.inventory.shedkey == true) {
                    this.imgSwap = 3;
                }
                else {
                    this.imgSwap = 2;
                }
            }
            else {
                this.description = "You can't carry any more ladders! Don't be greedy";
            }
        }
        if (num == 1) {
            if (this._httpService.user.inventory.shedkey == false) {
                this.description = "You look over the keys, the basement key is missing but see there is a key labeled shed key and grab it just in case";
                this._httpService.user.inventory.shedkey = true;
                if (this._httpService.user.inventory.ladder == true) {
                    this.imgSwap = 3;
                }
                else {
                    this.imgSwap = 1;
                }
            }
            else {
                this.description = "You have no need for any other key here.";
            }
        }
    };
    GarageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-garage',
            template: __webpack_require__(/*! ./garage.component.html */ "./src/app/house/garage/garage.component.html"),
            styles: [__webpack_require__(/*! ./garage.component.css */ "./src/app/house/garage/garage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], GarageComponent);
    return GarageComponent;
}());



/***/ }),

/***/ "./src/app/house/house.component.css":
/*!*******************************************!*\
  !*** ./src/app/house/house.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nspan{\r\n    display: inline-block;\r\n}\r\n.inventory{\r\n    width: 800px;\r\n    outline: 3px solid black;\r\n    height: 41px;\r\n}\r\n.item{\r\n    display: inline-block;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG91c2UvaG91c2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvaG91c2UvaG91c2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5zcGFue1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5pbnZlbnRvcnl7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBvdXRsaW5lOiAzcHggc29saWQgYmxhY2s7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbn1cclxuLml0ZW17XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/house/house.component.html":
/*!********************************************!*\
  !*** ./src/app/house/house.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h3>At the House</h3>\r\n    \r\n    <div class=\"inventory\">\r\n        <div *ngFor=\"let item of allItems | keyvalue\" class=\"item\">\r\n                <pre *ngIf=\"item.value\" >{{item.key}}, </pre>\r\n        </div>\r\n    </div>\r\n    \r\n    \r\n\r\n    <router-outlet ></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/house/house.component.ts":
/*!******************************************!*\
  !*** ./src/app/house/house.component.ts ***!
  \******************************************/
/*! exports provided: HouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseComponent", function() { return HouseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



var HouseComponent = /** @class */ (function () {
    function HouseComponent(_httpService) {
        this._httpService = _httpService;
        this.allItems = this._httpService.user.inventory;
    }
    HouseComponent.prototype.ngOnInit = function () {
        console.log(this.allItems);
    };
    HouseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-house',
            template: __webpack_require__(/*! ./house.component.html */ "./src/app/house/house.component.html"),
            styles: [__webpack_require__(/*! ./house.component.css */ "./src/app/house/house.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], HouseComponent);
    return HouseComponent;
}());



/***/ }),

/***/ "./src/app/house/kitchen/kitchen.component.css":
/*!*****************************************************!*\
  !*** ./src/app/house/kitchen/kitchen.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.sink{\r\n    position: absolute;\r\n    left:650px;\r\n    top: 450px;\r\n}\r\n.frontroom{\r\n    position: absolute;\r\n    left:90px;\r\n    top: 650px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(174, 200, 255), rgb(98, 147, 253));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG91c2Uva2l0Y2hlbi9raXRjaGVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSx5RUFBeUU7SUFDekUsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaG91c2Uva2l0Y2hlbi9raXRjaGVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbn1cclxuLnNpbmt7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjY1MHB4O1xyXG4gICAgdG9wOiA0NTBweDtcclxufVxyXG4uZnJvbnRyb29te1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDo5MHB4O1xyXG4gICAgdG9wOiA2NTBweDtcclxufVxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIHJnYigxNzQsIDIwMCwgMjU1KSwgcmdiKDk4LCAxNDcsIDI1MykpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/house/kitchen/kitchen.component.html":
/*!******************************************************!*\
  !*** ./src/app/house/kitchen/kitchen.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>In the Kitchen</h3>\r\n<img src=\"./assets/img/kitchen.png\" alt=\"kitchenimg\">\r\n<button class=\"frontroom\" [routerLink]=\"['../frontroom']\">Front Room</button>\r\n\r\n\r\n<button class=\"sink\" (click)=\"param(0)\">use sink</button>\r\n\r\n<div class=\"textbox\">\r\n        <p>{{description}}</p>\r\n    </div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/house/kitchen/kitchen.component.ts":
/*!****************************************************!*\
  !*** ./src/app/house/kitchen/kitchen.component.ts ***!
  \****************************************************/
/*! exports provided: KitchenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenComponent", function() { return KitchenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var KitchenComponent = /** @class */ (function () {
    function KitchenComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    KitchenComponent.prototype.ngOnInit = function () {
        this.description = "Its a kitchen";
    };
    KitchenComponent.prototype.param = function (num) {
        if (num == 0) {
            if (this._httpService.user.progress.translate == true && this._httpService.user.progress.savedAlien == false) {
                this._router.navigate(['/space/spaceroom']);
            }
            else {
                this.description = "You washed your hands, good job. Hygiene is important!";
            }
        }
    };
    KitchenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kitchen',
            template: __webpack_require__(/*! ./kitchen.component.html */ "./src/app/house/kitchen/kitchen.component.html"),
            styles: [__webpack_require__(/*! ./kitchen.component.css */ "./src/app/house/kitchen/kitchen.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], KitchenComponent);
    return KitchenComponent;
}());



/***/ }),

/***/ "./src/app/house/library/library.component.css":
/*!*****************************************************!*\
  !*** ./src/app/house/library/library.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.medArch{\r\n    position: absolute;\r\n    left:170px;\r\n    top: 365px;\r\n}\r\n.language{\r\n    position: absolute;\r\n    left:110px;\r\n    top: 490px;\r\n}\r\n.upstairs{\r\n    position: absolute;\r\n    left:650px;\r\n    top: 650px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(174, 200, 255), rgb(98, 147, 253));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG91c2UvbGlicmFyeS9saWJyYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0kseUVBQXlFO0lBQ3pFLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2hvdXNlL2xpYnJhcnkvbGlicmFyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3h7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG59XHJcbi5tZWRBcmNoe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDoxNzBweDtcclxuICAgIHRvcDogMzY1cHg7XHJcbn1cclxuLmxhbmd1YWdle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDoxMTBweDtcclxuICAgIHRvcDogNDkwcHg7XHJcbn1cclxuLnVwc3RhaXJze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDo2NTBweDtcclxuICAgIHRvcDogNjUwcHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCByZ2IoMTc0LCAyMDAsIDI1NSksIHJnYig5OCwgMTQ3LCAyNTMpKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/house/library/library.component.html":
/*!******************************************************!*\
  !*** ./src/app/house/library/library.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>In the Library</h3>\r\n<img  src=\"./assets/img/library.png\" alt=\"upstairsimg\">\r\n<button class=\"upstairs\" [routerLink]=\"['../upstairslanding']\">Upstairs Landing</button>\r\n\r\n<button class=\"medArch\" (click)=\"param(0)\">Medieval Architecture book</button>\r\n<button class=\"language\" (click)=\"param(1)\">Language book</button>\r\n\r\n<div class=\"textbox\">\r\n        <p>{{description}}</p>\r\n    </div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/house/library/library.component.ts":
/*!****************************************************!*\
  !*** ./src/app/house/library/library.component.ts ***!
  \****************************************************/
/*! exports provided: LibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryComponent", function() { return LibraryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var LibraryComponent = /** @class */ (function () {
    function LibraryComponent(_httpService) {
        this._httpService = _httpService;
    }
    LibraryComponent.prototype.ngOnInit = function () {
        this.description = "This is a large room filled wall to wall with books. There is a stack of a few books on the table that look interesting";
    };
    LibraryComponent.prototype.param = function (num) {
        if (num == 0) {
            if (this._httpService.user.progress.knight == true && this._httpService.user.inventory.basementkey == false) {
                this.description = "You open the book titled 'Medieval Architecture', and out falls a key. Its the Basement key!";
                this._httpService.user.inventory.basementkey = true;
            }
            else {
                this.description = "This book looks boring";
            }
        }
        if (num == 1) {
            if (this._httpService.user.inventory.aliendevice == true) {
                this.description = "You find a translation: 'This teleporter's energy source is too dirty, please clean with H2O'";
                this._httpService.user.progress.translate = true;
            }
            else {
                this.description = "This book is full of different languages. Maybe you could read it later when you have free time.";
            }
        }
    };
    LibraryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-library',
            template: __webpack_require__(/*! ./library.component.html */ "./src/app/house/library/library.component.html"),
            styles: [__webpack_require__(/*! ./library.component.css */ "./src/app/house/library/library.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], LibraryComponent);
    return LibraryComponent;
}());



/***/ }),

/***/ "./src/app/house/master-bedroom/master-bedroom.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/house/master-bedroom/master-bedroom.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdXNlL21hc3Rlci1iZWRyb29tL21hc3Rlci1iZWRyb29tLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/house/master-bedroom/master-bedroom.component.html":
/*!********************************************************************!*\
  !*** ./src/app/house/master-bedroom/master-bedroom.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>In the Master Bedroom</h3>\r\n\r\n<button [routerLink]=\"['../upstairslanding']\">Upstairs Landing</button>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/house/master-bedroom/master-bedroom.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/house/master-bedroom/master-bedroom.component.ts ***!
  \******************************************************************/
/*! exports provided: MasterBedroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterBedroomComponent", function() { return MasterBedroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MasterBedroomComponent = /** @class */ (function () {
    function MasterBedroomComponent() {
    }
    MasterBedroomComponent.prototype.ngOnInit = function () {
    };
    MasterBedroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-master-bedroom',
            template: __webpack_require__(/*! ./master-bedroom.component.html */ "./src/app/house/master-bedroom/master-bedroom.component.html"),
            styles: [__webpack_require__(/*! ./master-bedroom.component.css */ "./src/app/house/master-bedroom/master-bedroom.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MasterBedroomComponent);
    return MasterBedroomComponent;
}());



/***/ }),

/***/ "./src/app/house/my-bedroom/my-bedroom.component.css":
/*!***********************************************************!*\
  !*** ./src/app/house/my-bedroom/my-bedroom.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.upstairs{\r\n    position: absolute;\r\n    left: 60px;\r\n    top: 670px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(174, 200, 255), rgb(98, 147, 253));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG91c2UvbXktYmVkcm9vbS9teS1iZWRyb29tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7QUFDQTtJQUNJLHlFQUF5RTtJQUN6RSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9ob3VzZS9teS1iZWRyb29tL215LWJlZHJvb20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcclxufVxyXG4udXBzdGFpcnN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA2MHB4O1xyXG4gICAgdG9wOiA2NzBweDtcclxufVxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIHJnYigxNzQsIDIwMCwgMjU1KSwgcmdiKDk4LCAxNDcsIDI1MykpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/house/my-bedroom/my-bedroom.component.html":
/*!************************************************************!*\
  !*** ./src/app/house/my-bedroom/my-bedroom.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>In My Bedroom</h3>\r\n<img src=\"./assets/img/my-bedroom.png\" alt=\"mybedimg\">\r\n<button class=\"upstairs\" [routerLink]=\"['../upstairslanding']\">Upstairs Landing</button>\r\n\r\n<div class=\"textbox\">\r\n        <p>{{description}}</p>\r\n    </div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/house/my-bedroom/my-bedroom.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/house/my-bedroom/my-bedroom.component.ts ***!
  \**********************************************************/
/*! exports provided: MyBedroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyBedroomComponent", function() { return MyBedroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var MyBedroomComponent = /** @class */ (function () {
    function MyBedroomComponent(_httpService) {
        this._httpService = _httpService;
    }
    MyBedroomComponent.prototype.ngOnInit = function () {
        if (this._httpService.user.progress.myBedroom == false) {
            this.description = "You start unpacking.  You drop your bowling trophy which knocks a floor board loose and you find a mysterious note.  It reads, 'Something in the basement is not normal! To find the key to the basement door you must say the password to the noble knight in the Parlor. the password is...' The rest of the note is illegible";
            this._httpService.user.progress.myBedroom = true;
        }
        else {
            this.description = "It's your bedroom. It's kind of a mess. Maybe when you're done adventuring, you should clean up.";
        }
    };
    MyBedroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-bedroom',
            template: __webpack_require__(/*! ./my-bedroom.component.html */ "./src/app/house/my-bedroom/my-bedroom.component.html"),
            styles: [__webpack_require__(/*! ./my-bedroom.component.css */ "./src/app/house/my-bedroom/my-bedroom.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], MyBedroomComponent);
    return MyBedroomComponent;
}());



/***/ }),

/***/ "./src/app/house/parlor/parlor.component.css":
/*!***************************************************!*\
  !*** ./src/app/house/parlor/parlor.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.frontroom{\r\n    position: absolute;\r\n    left: 400px;\r\n    top: 670px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(174, 200, 255), rgb(98, 147, 253));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG91c2UvcGFybG9yL3Bhcmxvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7SUFDSSx5RUFBeUU7SUFDekUsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaG91c2UvcGFybG9yL3Bhcmxvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3h7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG59XHJcbi5mcm9udHJvb217XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA0MDBweDtcclxuICAgIHRvcDogNjcwcHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCByZ2IoMTc0LCAyMDAsIDI1NSksIHJnYig5OCwgMTQ3LCAyNTMpKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/house/parlor/parlor.component.html":
/*!****************************************************!*\
  !*** ./src/app/house/parlor/parlor.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>In the Parlor</h3>\r\n<img *ngIf=\"imgSwap == false\" src=\"./assets/img/parlor.png\" alt=\"upstairsimg\">\r\n<img *ngIf=\"imgSwap == true\" src=\"./assets/img/parlor-password.png\" alt=\"upstairsimg2\">\r\n<button class=\"frontroom\" [routerLink]=\"['../frontroom']\">Front Room</button>\r\n\r\n<div class=\"textbox\">\r\n        <p>{{description}}</p>\r\n    </div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/house/parlor/parlor.component.ts":
/*!**************************************************!*\
  !*** ./src/app/house/parlor/parlor.component.ts ***!
  \**************************************************/
/*! exports provided: ParlorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParlorComponent", function() { return ParlorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var ParlorComponent = /** @class */ (function () {
    function ParlorComponent(_httpService) {
        this._httpService = _httpService;
        this.imgSwap = false;
    }
    ParlorComponent.prototype.ngOnInit = function () {
        if (this._httpService.user.progress.myBedroom == false || this._httpService.user.progress.knight == true) {
            this.description = "The Parlor is a very fancy looking room.  Not much to do in here. Try not to break anything.";
        }
        else if (this._httpService.user.progress.myBedroom == true && this._httpService.user.progress.shed == false) {
            this.description = "You see a small suit of armor statue. You do not know what the password is but it seems the knight was recently covered in dirt. Does he like gardening?";
        }
        else if (this._httpService.user.progress.shed == true) {
            this.imgSwap = true;
            this.description = "You pick up the suit of armor figurine and say 'Alohamora.  He shakes in your hand before raising his sword and saying 'Medieval Architecture!' You think that doesnt make much sense, maybe you should do some research";
            this._httpService.user.progress.knight = true;
        }
    };
    ParlorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parlor',
            template: __webpack_require__(/*! ./parlor.component.html */ "./src/app/house/parlor/parlor.component.html"),
            styles: [__webpack_require__(/*! ./parlor.component.css */ "./src/app/house/parlor/parlor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], ParlorComponent);
    return ParlorComponent;
}());



/***/ }),

/***/ "./src/app/house/shed/shed.component.css":
/*!***********************************************!*\
  !*** ./src/app/house/shed/shed.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.backyard{\r\n    position: absolute;\r\n    left:400px;\r\n    top: 650px;\r\n}\r\n.hook{\r\n    position: absolute;\r\n    left:660px;\r\n    top: 463px;\r\n}\r\n.temple{\r\n    position: absolute;\r\n    left:300px;\r\n    top: 550px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(174, 200, 255), rgb(98, 147, 253));\r\n    border-radius: 3px;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG91c2Uvc2hlZC9zaGVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0kseUVBQXlFO0lBQ3pFLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaG91c2Uvc2hlZC9zaGVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbn1cclxuLmJhY2t5YXJke1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDo0MDBweDtcclxuICAgIHRvcDogNjUwcHg7XHJcbn1cclxuLmhvb2t7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjY2MHB4O1xyXG4gICAgdG9wOiA0NjNweDtcclxufVxyXG4udGVtcGxle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDozMDBweDtcclxuICAgIHRvcDogNTUwcHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCByZ2IoMTc0LCAyMDAsIDI1NSksIHJnYig5OCwgMTQ3LCAyNTMpKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4ub257XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/house/shed/shed.component.html":
/*!************************************************!*\
  !*** ./src/app/house/shed/shed.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  At the shed\r\n</p>\r\n<img *ngIf=\"imgSwap == 0\" src=\"./assets/img/shed.png\" alt=\"shedimg\">\r\n<img *ngIf=\"imgSwap == 1\" src=\"./assets/img/shed-nohook.png\" alt=\"shedimg2\">\r\n<img *ngIf=\"imgSwap == 2\" src=\"./assets/img/shed-templeopen.png\" alt=\"shedimg3\">\r\n<button class=\"backyard\" [routerLink]=\"['../backyard']\">backyard</button>\r\n<button class=\"hook\" [ngClass]=\"{ 'on': switch1 }\" (click)=\"param(0)\">Grab Hook</button>\r\n<button class=\"temple\" [ngClass]=\"{ 'on': switch }\" [routerLink]=\"['../../temple/staircase']\">Descend...</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/house/shed/shed.component.ts":
/*!**********************************************!*\
  !*** ./src/app/house/shed/shed.component.ts ***!
  \**********************************************/
/*! exports provided: ShedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShedComponent", function() { return ShedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var ShedComponent = /** @class */ (function () {
    function ShedComponent(_httpService) {
        this._httpService = _httpService;
        this.switch = true;
        this.switch1 = false;
        this.imgSwap = 0;
    }
    ShedComponent.prototype.ngOnInit = function () {
        if (this._httpService.user.progress.savedAlien == false || this._httpService.user.progress.savedthewizard == false) {
            this.description = "You step in the small dusty shed. There are a lot of gardening tools, including a long rope with a hook on the end. You see a word etched into the wall, 'Alohamora'";
            this._httpService.user.progress.shed = true;
        }
        if (this._httpService.user.inventory.hook == true) {
            this.switch1 = true;
            this.imgSwap = 1;
        }
        if (this._httpService.user.progress.savedAlien == true && this._httpService.user.progress.savedthewizard == true) {
            this.description = "One of the large shelves inside the shed has fallen, revealing a small trapdoor! Moving the fallen junk around the trapdoor, you open it. There's a very tight staircase leading down...";
            this.switch = false;
            this.imgSwap = 2;
        }
    };
    ShedComponent.prototype.param = function (num) {
        if (num == 0) {
            this.description = "You grab the hook and think this might be useful later.";
            this._httpService.user.inventory.hook = true;
            this.switch1 = true;
            this.imgSwap = 1;
        }
    };
    ShedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shed',
            template: __webpack_require__(/*! ./shed.component.html */ "./src/app/house/shed/shed.component.html"),
            styles: [__webpack_require__(/*! ./shed.component.css */ "./src/app/house/shed/shed.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], ShedComponent);
    return ShedComponent;
}());



/***/ }),

/***/ "./src/app/house/upstairs-landing/upstairs-landing.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/house/upstairs-landing/upstairs-landing.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.library{\r\n    position: absolute;\r\n    left:400px;\r\n    top: 340px;\r\n}\r\n.bathroom{\r\n    position: absolute;\r\n    left:610px;\r\n    top: 390px;\r\n}\r\n.master{\r\n    position: absolute;\r\n    left:707px;\r\n    top: 550px;\r\n}\r\n.mybedroom{\r\n    position: absolute;\r\n    left:113px;\r\n    top: 370px;\r\n}\r\n.attic{\r\n    position: absolute;\r\n    left:350px;\r\n    top: 180px;\r\n}\r\n.downstairs{\r\n    position: absolute;\r\n    left:350px;\r\n    top: 650px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(174, 200, 255), rgb(98, 147, 253));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG91c2UvdXBzdGFpcnMtbGFuZGluZy91cHN0YWlycy1sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0kseUVBQXlFO0lBQ3pFLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2hvdXNlL3Vwc3RhaXJzLWxhbmRpbmcvdXBzdGFpcnMtbGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3h7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG59XHJcbi5saWJyYXJ5e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDo0MDBweDtcclxuICAgIHRvcDogMzQwcHg7XHJcbn1cclxuLmJhdGhyb29te1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDo2MTBweDtcclxuICAgIHRvcDogMzkwcHg7XHJcbn1cclxuLm1hc3RlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6NzA3cHg7XHJcbiAgICB0b3A6IDU1MHB4O1xyXG59XHJcbi5teWJlZHJvb217XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjExM3B4O1xyXG4gICAgdG9wOiAzNzBweDtcclxufVxyXG4uYXR0aWN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjM1MHB4O1xyXG4gICAgdG9wOiAxODBweDtcclxufVxyXG4uZG93bnN0YWlyc3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6MzUwcHg7XHJcbiAgICB0b3A6IDY1MHB4O1xyXG59XHJcbmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggcmdiKDE3NCwgMjAwLCAyNTUpLCByZ2IoOTgsIDE0NywgMjUzKSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/house/upstairs-landing/upstairs-landing.component.html":
/*!************************************************************************!*\
  !*** ./src/app/house/upstairs-landing/upstairs-landing.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>On the Upstairs landing</h3>\r\n<img *ngIf=\"imgSwap == false\" src=\"./assets/img/upstairs-landing.png\" alt=\"upstairsimg\">\r\n<img *ngIf=\"imgSwap == true\" src=\"./assets/img/upstairs-landing-ladder.png\" alt=\"upstairsimg2\">\r\n<button class=\"library\" [routerLink]=\"['../library']\">library</button>\r\n<button class=\"bathroom\" [routerLink]=\"['../bathroom']\">bathroom</button>\r\n<button class=\"master\" (click)=\"param(1)\">Master bedroom</button>\r\n<button class=\"mybedroom\" [routerLink]=\"['../mybedroom']\">My Bedroom</button>\r\n<button class=\"attic\" (click)=\"param(0)\">attic</button>\r\n<button class=\"downstairs\" [routerLink]=\"['../frontroom']\">Downstairs</button>\r\n\r\n<div class=\"textbox\">\r\n        <p>{{description}}</p>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/house/upstairs-landing/upstairs-landing.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/house/upstairs-landing/upstairs-landing.component.ts ***!
  \**********************************************************************/
/*! exports provided: UpstairsLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpstairsLandingComponent", function() { return UpstairsLandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UpstairsLandingComponent = /** @class */ (function () {
    function UpstairsLandingComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.imgSwap = false;
    }
    UpstairsLandingComponent.prototype.ngOnInit = function () {
        if (this._httpService.user.inventory.aliendevice == false) {
            this.description = "You step onto the upstairs landing.  Many rooms to choose from to explore.  You also notice a door to the Attic on the ceiling.  It is high up and out of reach but you hear a faint humming from it.";
        }
        else {
            this.description = "You step onto the upstairs landing.  Many rooms to choose from to explore.  You also notice a door to the Attic on the ceiling.";
            this.imgSwap = true;
        }
    };
    UpstairsLandingComponent.prototype.param = function (num) {
        if (num == 0) {
            if (this._httpService.user.inventory.hook == true && this._httpService.user.inventory.ladder == true) {
                this._router.navigate(['/house/attic']);
            }
            else if (this._httpService.user.inventory.hook == true) {
                this.description = "You stretch to reach the Attic handle with the hook but just barely still can't reach";
            }
            else if (this._httpService.user.inventory.ladder == true) {
                this.description = "You step on the ladder to reach the Attic door but it is still just out of reach.";
            }
            else {
                this.description = "the attic door is way to high for you, maybe you can find something to help you reach";
            }
        }
        if (num == 1) {
            this.description = "Hmm, it seems like your parents locked the door. They probably have the key. There's no way in to this room.";
        }
    };
    UpstairsLandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upstairs-landing',
            template: __webpack_require__(/*! ./upstairs-landing.component.html */ "./src/app/house/upstairs-landing/upstairs-landing.component.html"),
            styles: [__webpack_require__(/*! ./upstairs-landing.component.css */ "./src/app/house/upstairs-landing/upstairs-landing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UpstairsLandingComponent);
    return UpstairsLandingComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
        this.user = {
            username: "",
            location: "",
            progress: {
                frontroom: false,
                myBedroom: false,
                parlor: false,
                shed: false,
                knight: false,
                translate: false,
                navigation: false,
                engine: false,
                data: false,
                savedAlien: false,
                spacedone: false,
                mainroom: false,
                gotwand: false,
                lab: false,
                labpuzzle1: false,
                labpuzzle2: false,
                labpuzzle3: false,
                dungeon: false,
                savedthewizard: false,
                castledone: false,
                dungeonfail: false,
                blueflame: false,
                redflame: false,
            },
            inventory: {
                hook: false,
                ladder: false,
                basementkey: false,
                shedkey: false,
                aliendevice: false,
                fixedpart1: false,
                fixedpart2: false,
                fixedpart3: false,
                wand: false,
                potion: false,
                spellbook: false,
                blueflame: false,
                redflame: false,
            }
        };
    }
    HttpService.prototype.getOne = function (user) {
        return this._http.get("/api/players/" + user);
    };
    HttpService.prototype.create = function (obj) {
        return this._http.post('/api/players', obj);
    };
    HttpService.prototype.update = function (obj) {
        return this._http.put("/api/players/" + obj._id, obj);
    };
    HttpService.prototype.getCountry = function (region) {
        return this._http.get('https://restcountries.eu/rest/v2/region/' + region);
    };
    HttpService.prototype.getOneCountry = function (code) {
        return this._http.get('https://restcountries.eu/rest/v2/alpha/' + code);
    };
    HttpService.prototype.getQ = function (level, category) {
        return this._http.get("https://opentdb.com/api.php?amount=1&category=" + category + "&difficulty=" + level + "&type=multiple");
    };
    HttpService.prototype.getEasyMath = function () {
        return this._http.get('https://opentdb.com/api.php?amount=1&category=19&difficulty=easy&type=multiple');
    };
    HttpService.prototype.getMediumMath = function () {
        return this._http.get('https://opentdb.com/api.php?amount=1&category=19&difficulty=medium&type=multiple');
    };
    HttpService.prototype.getEasyMyth = function () {
        return this._http.get('https://opentdb.com/api.php?amount=1&category=20&difficulty=easy&type=multiple');
    };
    HttpService.prototype.getMediumMyth = function () {
        return this._http.get('https://opentdb.com/api.php?amount=1&category=20&difficulty=medium&type=multiple');
    };
    HttpService.prototype.getEasyScience = function () {
        return this._http.get('https://opentdb.com/api.php?amount=1&category=17&difficulty=easy&type=multiple');
    };
    HttpService.prototype.getMediumScience = function () {
        return this._http.get('https://opentdb.com/api.php?amount=1&category=17&difficulty=medium&type=multiple');
    };
    HttpService.prototype.getEasyHistory = function () {
        return this._http.get('https://opentdb.com/api.php?amount=1&category=23&difficulty=easy&type=multiple');
    };
    HttpService.prototype.getMediumHistory = function () {
        return this._http.get('https://opentdb.com/api.php?amount=1&category=23&difficulty=medium&type=multiple');
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/space/captainsroom/captainsroom.component.css":
/*!***************************************************************!*\
  !*** ./src/app/space/captainsroom/captainsroom.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.home{\r\n    position: absolute;\r\n    left:500px;\r\n    top: 630px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(159, 216, 199), rgb(69, 207, 166));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BhY2UvY2FwdGFpbnNyb29tL2NhcHRhaW5zcm9vbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7SUFDSSx5RUFBeUU7SUFDekUsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc3BhY2UvY2FwdGFpbnNyb29tL2NhcHRhaW5zcm9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3h7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG59XHJcbi5ob21le1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDo1MDBweDtcclxuICAgIHRvcDogNjMwcHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCByZ2IoMTU5LCAyMTYsIDE5OSksIHJnYig2OSwgMjA3LCAxNjYpKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/space/captainsroom/captainsroom.component.html":
/*!****************************************************************!*\
  !*** ./src/app/space/captainsroom/captainsroom.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  In the Captains room!\r\n</h3>\r\n<img src=\"./assets/img/captainsroom.png\" alt=\"navigationroomimg\">\r\n<button class=\"home\" [routerLink]=\"['../../house/backyard']\">Go Home!</button>\r\n\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/space/captainsroom/captainsroom.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/space/captainsroom/captainsroom.component.ts ***!
  \**************************************************************/
/*! exports provided: CaptainsroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptainsroomComponent", function() { return CaptainsroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var CaptainsroomComponent = /** @class */ (function () {
    function CaptainsroomComponent(_httpService) {
        this._httpService = _httpService;
    }
    CaptainsroomComponent.prototype.ngOnInit = function () {
        this.description = "You did it! I knew you could! You are a savior to my people! Let me drop you off back home, maybe we could get some icecream on the way";
        this._httpService.user.progress.savedAlien = true;
        this._httpService.user.progress.spacedone = true;
    };
    CaptainsroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-captainsroom',
            template: __webpack_require__(/*! ./captainsroom.component.html */ "./src/app/space/captainsroom/captainsroom.component.html"),
            styles: [__webpack_require__(/*! ./captainsroom.component.css */ "./src/app/space/captainsroom/captainsroom.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], CaptainsroomComponent);
    return CaptainsroomComponent;
}());



/***/ }),

/***/ "./src/app/space/controlcenter/controlcenter.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/space/controlcenter/controlcenter.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.nav{\r\n    position: absolute;\r\n    left:100px;\r\n    top: 175px;\r\n}\r\n.engine{\r\n    position: absolute;\r\n    left:178px;\r\n    top: 309px;\r\n}\r\n.data{\r\n    position: absolute;\r\n    left:640px;\r\n    top: 340px;\r\n}\r\n.captain{\r\n    position: absolute;\r\n    left:360px;\r\n    top: 285px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(159, 216, 199), rgb(69, 207, 166));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BhY2UvY29udHJvbGNlbnRlci9jb250cm9sY2VudGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7QUFDQTtJQUNJLHlFQUF5RTtJQUN6RSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9zcGFjZS9jb250cm9sY2VudGVyL2NvbnRyb2xjZW50ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcclxufVxyXG4ubmF2e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDoxMDBweDtcclxuICAgIHRvcDogMTc1cHg7XHJcbn1cclxuLmVuZ2luZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6MTc4cHg7XHJcbiAgICB0b3A6IDMwOXB4O1xyXG59XHJcbi5kYXRhe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDo2NDBweDtcclxuICAgIHRvcDogMzQwcHg7XHJcbn1cclxuLmNhcHRhaW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjM2MHB4O1xyXG4gICAgdG9wOiAyODVweDtcclxufVxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIHJnYigxNTksIDIxNiwgMTk5KSwgcmdiKDY5LCAyMDcsIDE2NikpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/space/controlcenter/controlcenter.component.html":
/*!******************************************************************!*\
  !*** ./src/app/space/controlcenter/controlcenter.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  Control Center of space ship\r\n</h3>\r\n<img src=\"./assets/img/controlroom.png\" alt=\"controlroomimg\">\r\n<button class=\"nav\" (click)=\"param(1)\">To Navigation Room</button>\r\n<button class=\"engine\" (click)=\"param(2)\">To Engine Room</button>\r\n<button class=\"data\" (click)=\"param(3)\">To Data Room</button>\r\n\r\n<button class=\"captain\" (click)=\"param(0)\">Go to the Captain</button>\r\n\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/space/controlcenter/controlcenter.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/space/controlcenter/controlcenter.component.ts ***!
  \****************************************************************/
/*! exports provided: ControlcenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlcenterComponent", function() { return ControlcenterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ControlcenterComponent = /** @class */ (function () {
    function ControlcenterComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    ControlcenterComponent.prototype.ngOnInit = function () {
        if (this._httpService.user.progress.navigation == false && this._httpService.user.progress.engine == false && this._httpService.user.progress.data == false) {
            this.description = "You step out into an amazing control center of an alien space ship. A small green alien comes up to you and says in an excited voice, 'You solved the door puzzle! you must be very smart! please help me, I am stranded after collecting data for my people so we can better understand you and live in peace. Please use your great intellegence to help me get home. The navigation is broken, some engine parts need repairing, and the data I collected needs sorting. I'll be in my captain's quarters. come get me when you are done! Thank you!'";
        }
        else if (this._httpService.user.progress.navigation == true && this._httpService.user.progress.engine == true && this._httpService.user.progress.data == true) {
            this.description = "You repaired everything! Hurry go tell the captain, he'll be so excited!";
        }
        else {
            this.description = "You are doing it! keep working!";
        }
    };
    ControlcenterComponent.prototype.param = function (num) {
        if (num == 0) {
            if (this._httpService.user.progress.navigation == false && this._httpService.user.progress.engine == false && this._httpService.user.progress.data == false) {
                this.description = "You knock on the door and the captain responds, 'Thank you again for helping. I'm busy doing other repairs in here. Come back when you finish with Navigation, Engine, and Data!";
            }
            else if (this._httpService.user.progress.navigation == true && this._httpService.user.progress.engine == false && this._httpService.user.progress.data == false) {
                this.description = "Two more to go! Engine and Data! You are doing Great!";
            }
            else if (this._httpService.user.progress.navigation == false && this._httpService.user.progress.engine == true && this._httpService.user.progress.data == false) {
                this.description = "Two more to go! Navigation and Data! You are doing Great!";
            }
            else if (this._httpService.user.progress.navigation == false && this._httpService.user.progress.engine == false && this._httpService.user.progress.data == true) {
                this.description = "Two more to go! Engine and Navigation! You are doing Great!";
            }
            else if (this._httpService.user.progress.navigation == false) {
                this.description = "You are amazing! Just one more to do! Please fix the Navigation!";
            }
            else if (this._httpService.user.progress.engine == false) {
                this.description = "You are amazing! Just one more to do! Please repair the Engine!";
            }
            else if (this._httpService.user.progress.data == false) {
                this.description = "You are amazing! Just one more to do! Please Sort the Data!";
            }
            else {
                this._router.navigate(['/space/captainsroom']);
            }
        }
        if (num == 1) {
            if (this._httpService.user.progress.navigation == false) {
                this._router.navigate(['/space/navigationroom']);
            }
            else {
                this.description = "You don't need to go here, you've already Fixed the Navigation!";
            }
        }
        if (num == 2) {
            if (this._httpService.user.progress.engine == false) {
                this._router.navigate(['/space/engineroom']);
            }
            else {
                this.description = "You don't need to go here, you've already repaired the Engine!";
            }
        }
        if (num == 3) {
            if (this._httpService.user.progress.data == false) {
                this._router.navigate(['/space/dataroom1']);
            }
            else {
                this.description = "You don't need to go here, you've already sorted the data!";
            }
        }
    };
    ControlcenterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-controlcenter',
            template: __webpack_require__(/*! ./controlcenter.component.html */ "./src/app/space/controlcenter/controlcenter.component.html"),
            styles: [__webpack_require__(/*! ./controlcenter.component.css */ "./src/app/space/controlcenter/controlcenter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ControlcenterComponent);
    return ControlcenterComponent;
}());



/***/ }),

/***/ "./src/app/space/datapuzzle1/datapuzzle1.component.css":
/*!*************************************************************!*\
  !*** ./src/app/space/datapuzzle1/datapuzzle1.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    width: 150px;\r\n}\r\n.countrybox{\r\n    background-color: lightgrey;\r\n}\r\n.textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BhY2UvZGF0YXB1enpsZTEvZGF0YXB1enpsZTEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zcGFjZS9kYXRhcHV6emxlMS9kYXRhcHV6emxlMS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbi5jb3VudHJ5Ym94e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG59XHJcbi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/space/datapuzzle1/datapuzzle1.component.html":
/*!**************************************************************!*\
  !*** ./src/app/space/datapuzzle1/datapuzzle1.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  Doing the first data puzzle\r\n</h3>\r\n\r\n\r\n\r\n<img src=\"{{correctCountry.flag}}\" alt=\"flag\">\r\n\r\n\r\n\r\n<button (click)=\"param(0)\">Iceland</button>\r\n<button (click)=\"param(1)\">Denmark</button>\r\n<button (click)=\"param(2)\">Germany</button>\r\n<button (click)=\"param(3)\">Spain</button>\r\n<button (click)=\"param(4)\">Ireland</button>\r\n\r\n<p></p>\r\n\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/space/datapuzzle1/datapuzzle1.component.ts":
/*!************************************************************!*\
  !*** ./src/app/space/datapuzzle1/datapuzzle1.component.ts ***!
  \************************************************************/
/*! exports provided: Datapuzzle1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Datapuzzle1Component", function() { return Datapuzzle1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Datapuzzle1Component = /** @class */ (function () {
    function Datapuzzle1Component(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.correctCountry = {
            flag: ""
        };
        this.codes = ['is', 'dk', 'de', 'es', 'ie'];
    }
    Datapuzzle1Component.prototype.ngOnInit = function () {
        this.ind = Math.floor(Math.random() * Math.floor(5));
        this.getOneCountry(this.codes[this.ind]);
        this.description = "A note from the captain reads, 'Oops, I mixed up some of these flags. Please tell me which country this flag belongs to!'";
    };
    Datapuzzle1Component.prototype.getOneCountry = function (code) {
        var _this = this;
        var obs = this._httpService.getOneCountry(code);
        obs.subscribe(function (data) {
            console.log(data);
            _this.correctCountry = data;
        });
    };
    Datapuzzle1Component.prototype.param = function (num) {
        if (num == this.ind) {
            this._router.navigate(['/space/dataroom2']);
        }
        else {
            this.description = "Sorry wrong answer, try again";
        }
    };
    Datapuzzle1Component.prototype.getCountryInfo = function (region) {
        var _this = this;
        var obs = this._httpService.getCountry(region);
        obs.subscribe(function (data) {
            console.log(data);
            _this.countries = data;
        });
    };
    Datapuzzle1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-datapuzzle1',
            template: __webpack_require__(/*! ./datapuzzle1.component.html */ "./src/app/space/datapuzzle1/datapuzzle1.component.html"),
            styles: [__webpack_require__(/*! ./datapuzzle1.component.css */ "./src/app/space/datapuzzle1/datapuzzle1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Datapuzzle1Component);
    return Datapuzzle1Component;
}());



/***/ }),

/***/ "./src/app/space/datapuzzle2/datapuzzle2.component.css":
/*!*************************************************************!*\
  !*** ./src/app/space/datapuzzle2/datapuzzle2.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    width: 150px;\r\n}\r\n.countrybox{\r\n    background-color: grey;\r\n}\r\n.textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BhY2UvZGF0YXB1enpsZTIvZGF0YXB1enpsZTIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zcGFjZS9kYXRhcHV6emxlMi9kYXRhcHV6emxlMi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbi5jb3VudHJ5Ym94e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxufVxyXG4udGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/space/datapuzzle2/datapuzzle2.component.html":
/*!**************************************************************!*\
  !*** ./src/app/space/datapuzzle2/datapuzzle2.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  Doing the second data puzzle\r\n</h3>\r\n\r\n<img src=\"{{correctCountry.flag}}\" alt=\"flag\">\r\n<p></p>\r\n<button (click)=\"param(0)\">Panama</button>\r\n<button (click)=\"param(1)\">Brazil</button>\r\n<button (click)=\"param(2)\">Chile</button>\r\n<button (click)=\"param(3)\">Canada</button>\r\n<button (click)=\"param(4)\">Barbados</button>\r\n\r\n\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n\r\n\r\n<p></p>\r\n<button (click)=\"getCountryInfo('europe')\">europe</button>\r\n<button (click)=\"getCountryInfo('americas')\">americas</button>\r\n<button (click)=\"getCountryInfo('africa')\">africa</button>\r\n<button (click)=\"getCountryInfo('asia')\">asia</button>\r\n<button (click)=\"getCountryInfo('oceania')\">oceania</button>\r\n<div class=\"countrybox\" *ngFor=\"let country of countries\">\r\n    {{country.name}}\r\n    <img src=\"{{country.flag}}\" alt=\"flag\">\r\n  </div>"

/***/ }),

/***/ "./src/app/space/datapuzzle2/datapuzzle2.component.ts":
/*!************************************************************!*\
  !*** ./src/app/space/datapuzzle2/datapuzzle2.component.ts ***!
  \************************************************************/
/*! exports provided: Datapuzzle2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Datapuzzle2Component", function() { return Datapuzzle2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Datapuzzle2Component = /** @class */ (function () {
    function Datapuzzle2Component(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.correctCountry = {
            flag: ""
        };
        this.codes = ['pa', 'br', 'cl', 'ca', 'bb'];
    }
    Datapuzzle2Component.prototype.ngOnInit = function () {
        this.ind = Math.floor(Math.random() * Math.floor(5));
        this.getOneCountry(this.codes[this.ind]);
        this.description = "You find another note from the captain, 'Uh oh, it happened again. This time these flags are from the Americas'";
    };
    Datapuzzle2Component.prototype.getOneCountry = function (code) {
        var _this = this;
        var obs = this._httpService.getOneCountry(code);
        obs.subscribe(function (data) {
            console.log(data);
            _this.correctCountry = data;
        });
    };
    Datapuzzle2Component.prototype.param = function (num) {
        if (num == this.ind) {
            this._router.navigate(['/space/dataroom3']);
        }
        else {
            this.description = "Sorry wrong answer, try again";
        }
    };
    Datapuzzle2Component.prototype.getCountryInfo = function (region) {
        var _this = this;
        var obs = this._httpService.getCountry(region);
        obs.subscribe(function (data) {
            console.log(data);
            _this.countries = data;
        });
    };
    Datapuzzle2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-datapuzzle2',
            template: __webpack_require__(/*! ./datapuzzle2.component.html */ "./src/app/space/datapuzzle2/datapuzzle2.component.html"),
            styles: [__webpack_require__(/*! ./datapuzzle2.component.css */ "./src/app/space/datapuzzle2/datapuzzle2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Datapuzzle2Component);
    return Datapuzzle2Component;
}());



/***/ }),

/***/ "./src/app/space/datapuzzle3/datapuzzle3.component.css":
/*!*************************************************************!*\
  !*** ./src/app/space/datapuzzle3/datapuzzle3.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    width: 150px;\r\n}\r\n.countrybox{\r\n    background-color: grey;\r\n}\r\n.textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BhY2UvZGF0YXB1enpsZTMvZGF0YXB1enpsZTMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zcGFjZS9kYXRhcHV6emxlMy9kYXRhcHV6emxlMy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbi5jb3VudHJ5Ym94e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxufVxyXG4udGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/space/datapuzzle3/datapuzzle3.component.html":
/*!**************************************************************!*\
  !*** ./src/app/space/datapuzzle3/datapuzzle3.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  Doing the third data puzzle\r\n</h3>\r\n\r\n<img src=\"{{correctCountry.flag}}\" alt=\"flag\">\r\n<p></p>\r\n<button (click)=\"param(0)\">South Korea</button>\r\n<button (click)=\"param(1)\">Cambodia</button>\r\n<button (click)=\"param(2)\">Nepal</button>\r\n<button (click)=\"param(3)\">U.A.E.</button>\r\n<button (click)=\"param(4)\">Indonesia</button>\r\n\r\n\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/space/datapuzzle3/datapuzzle3.component.ts":
/*!************************************************************!*\
  !*** ./src/app/space/datapuzzle3/datapuzzle3.component.ts ***!
  \************************************************************/
/*! exports provided: Datapuzzle3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Datapuzzle3Component", function() { return Datapuzzle3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Datapuzzle3Component = /** @class */ (function () {
    function Datapuzzle3Component(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.correctCountry = {
            flag: ""
        };
        this.codes = ['kr', 'kh', 'np', 'ae', 'id'];
    }
    Datapuzzle3Component.prototype.ngOnInit = function () {
        this.ind = Math.floor(Math.random() * Math.floor(5));
        this.getOneCountry(this.codes[this.ind]);
        this.description = "A note from the captain reads, 'Oops, I did it again. Here are some from Asia'";
    };
    Datapuzzle3Component.prototype.getOneCountry = function (code) {
        var _this = this;
        var obs = this._httpService.getOneCountry(code);
        obs.subscribe(function (data) {
            console.log(data);
            _this.correctCountry = data;
        });
    };
    Datapuzzle3Component.prototype.param = function (num) {
        if (num == this.ind) {
            this._router.navigate(['/space/datasuccess']);
        }
        else {
            this.description = "Sorry wrong answer, try again";
        }
    };
    Datapuzzle3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-datapuzzle3',
            template: __webpack_require__(/*! ./datapuzzle3.component.html */ "./src/app/space/datapuzzle3/datapuzzle3.component.html"),
            styles: [__webpack_require__(/*! ./datapuzzle3.component.css */ "./src/app/space/datapuzzle3/datapuzzle3.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Datapuzzle3Component);
    return Datapuzzle3Component;
}());



/***/ }),

/***/ "./src/app/space/dataroom1/dataroom1.component.css":
/*!*********************************************************!*\
  !*** ./src/app/space/dataroom1/dataroom1.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.data{\r\n    position: absolute;\r\n    left:17px;\r\n    top: 350px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(159, 216, 199), rgb(69, 207, 166));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BhY2UvZGF0YXJvb20xL2RhdGFyb29tMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSx5RUFBeUU7SUFDekUsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc3BhY2UvZGF0YXJvb20xL2RhdGFyb29tMS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3h7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG59XHJcbi5kYXRhe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDoxN3B4O1xyXG4gICAgdG9wOiAzNTBweDtcclxufVxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIHJnYigxNTksIDIxNiwgMTk5KSwgcmdiKDY5LCAyMDcsIDE2NikpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/space/dataroom1/dataroom1.component.html":
/*!**********************************************************!*\
  !*** ./src/app/space/dataroom1/dataroom1.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  First data room\r\n</h3>\r\n<img src=\"./assets/img/dataroom1.png\" alt=\"upstairsimg\">\r\n<button class=\"data\" [routerLink]=\"['../datapuzzle1']\">Fix Data</button>\r\n\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/space/dataroom1/dataroom1.component.ts":
/*!********************************************************!*\
  !*** ./src/app/space/dataroom1/dataroom1.component.ts ***!
  \********************************************************/
/*! exports provided: Dataroom1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dataroom1Component", function() { return Dataroom1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var Dataroom1Component = /** @class */ (function () {
    function Dataroom1Component(_httpService) {
        this._httpService = _httpService;
    }
    Dataroom1Component.prototype.ngOnInit = function () {
        this.description = "You walk into the room labeled DATA. There are three large computer screens. Two are black and one is flashing 'DATA CORRUPTED'";
    };
    Dataroom1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dataroom1',
            template: __webpack_require__(/*! ./dataroom1.component.html */ "./src/app/space/dataroom1/dataroom1.component.html"),
            styles: [__webpack_require__(/*! ./dataroom1.component.css */ "./src/app/space/dataroom1/dataroom1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], Dataroom1Component);
    return Dataroom1Component;
}());



/***/ }),

/***/ "./src/app/space/dataroom2/dataroom2.component.css":
/*!*********************************************************!*\
  !*** ./src/app/space/dataroom2/dataroom2.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.data{\r\n    position: absolute;\r\n    left:200px;\r\n    top: 520px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(159, 216, 199), rgb(69, 207, 166));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BhY2UvZGF0YXJvb20yL2RhdGFyb29tMi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7SUFDSSx5RUFBeUU7SUFDekUsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc3BhY2UvZGF0YXJvb20yL2RhdGFyb29tMi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3h7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG59XHJcbi5kYXRhe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDoyMDBweDtcclxuICAgIHRvcDogNTIwcHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCByZ2IoMTU5LCAyMTYsIDE5OSksIHJnYig2OSwgMjA3LCAxNjYpKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/space/dataroom2/dataroom2.component.html":
/*!**********************************************************!*\
  !*** ./src/app/space/dataroom2/dataroom2.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  Data room, one screen working\r\n</h3>\r\n<img src=\"./assets/img/dataroom2.png\" alt=\"dataroomimg\">\r\n<button class=\"data\"  [routerLink]=\"['../datapuzzle2']\">Fix this data</button>\r\n\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/space/dataroom2/dataroom2.component.ts":
/*!********************************************************!*\
  !*** ./src/app/space/dataroom2/dataroom2.component.ts ***!
  \********************************************************/
/*! exports provided: Dataroom2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dataroom2Component", function() { return Dataroom2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var Dataroom2Component = /** @class */ (function () {
    function Dataroom2Component(_httpService) {
        this._httpService = _httpService;
    }
    Dataroom2Component.prototype.ngOnInit = function () {
        this.description = "The screen you were just working on is now fully functional.  The middel screen is now flashing 'DATA CORRUPTED'";
    };
    Dataroom2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dataroom2',
            template: __webpack_require__(/*! ./dataroom2.component.html */ "./src/app/space/dataroom2/dataroom2.component.html"),
            styles: [__webpack_require__(/*! ./dataroom2.component.css */ "./src/app/space/dataroom2/dataroom2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], Dataroom2Component);
    return Dataroom2Component;
}());



/***/ }),

/***/ "./src/app/space/dataroom3/dataroom3.component.css":
/*!*********************************************************!*\
  !*** ./src/app/space/dataroom3/dataroom3.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.data{\r\n    position: absolute;\r\n    left:573px;\r\n    top: 560px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(159, 216, 199), rgb(69, 207, 166));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BhY2UvZGF0YXJvb20zL2RhdGFyb29tMy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7SUFDSSx5RUFBeUU7SUFDekUsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc3BhY2UvZGF0YXJvb20zL2RhdGFyb29tMy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3h7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG59XHJcbi5kYXRhe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDo1NzNweDtcclxuICAgIHRvcDogNTYwcHg7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCByZ2IoMTU5LCAyMTYsIDE5OSksIHJnYig2OSwgMjA3LCAxNjYpKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/space/dataroom3/dataroom3.component.html":
/*!**********************************************************!*\
  !*** ./src/app/space/dataroom3/dataroom3.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  Data room, two working screens\r\n</h3>\r\n<img src=\"./assets/img/dataroom3.png\" alt=\"dataroomimg\">\r\n<button class=\"data\" [routerLink]=\"['../datapuzzle3']\">Fix this one too</button>\r\n\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/space/dataroom3/dataroom3.component.ts":
/*!********************************************************!*\
  !*** ./src/app/space/dataroom3/dataroom3.component.ts ***!
  \********************************************************/
/*! exports provided: Dataroom3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dataroom3Component", function() { return Dataroom3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var Dataroom3Component = /** @class */ (function () {
    function Dataroom3Component(_httpService) {
        this._httpService = _httpService;
    }
    Dataroom3Component.prototype.ngOnInit = function () {
        this.description = "The first two screens are now both running with no errors.  The third and final screen has now begun flashing 'DATA CORRUPTED'";
    };
    Dataroom3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dataroom3',
            template: __webpack_require__(/*! ./dataroom3.component.html */ "./src/app/space/dataroom3/dataroom3.component.html"),
            styles: [__webpack_require__(/*! ./dataroom3.component.css */ "./src/app/space/dataroom3/dataroom3.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], Dataroom3Component);
    return Dataroom3Component;
}());



/***/ }),

/***/ "./src/app/space/datasuccess/datasuccess.component.css":
/*!*************************************************************!*\
  !*** ./src/app/space/datasuccess/datasuccess.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.control{\r\n    position: absolute;\r\n    left:380px;\r\n    top: 360px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(159, 216, 199), rgb(69, 207, 166));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BhY2UvZGF0YXN1Y2Nlc3MvZGF0YXN1Y2Nlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0kseUVBQXlFO0lBQ3pFLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3NwYWNlL2RhdGFzdWNjZXNzL2RhdGFzdWNjZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbn1cclxuLmNvbnRyb2x7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjM4MHB4O1xyXG4gICAgdG9wOiAzNjBweDtcclxufVxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIHJnYigxNTksIDIxNiwgMTk5KSwgcmdiKDY5LCAyMDcsIDE2NikpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/space/datasuccess/datasuccess.component.html":
/*!**************************************************************!*\
  !*** ./src/app/space/datasuccess/datasuccess.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  You fixed all the data\r\n</h3>\r\n<img src=\"./assets/img/dataroom4.png\" alt=\"dataroomimg\">\r\n<button class=\"control\" [routerLink]=\"['../controlcenter']\">Control Center</button>\r\n\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/space/datasuccess/datasuccess.component.ts":
/*!************************************************************!*\
  !*** ./src/app/space/datasuccess/datasuccess.component.ts ***!
  \************************************************************/
/*! exports provided: DatasuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasuccessComponent", function() { return DatasuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var DatasuccessComponent = /** @class */ (function () {
    function DatasuccessComponent(_httpService) {
        this._httpService = _httpService;
    }
    DatasuccessComponent.prototype.ngOnInit = function () {
        this.description = "All three screens are working! You hear a notification from a speaker that says, 'All data computers are fully functional'";
        this._httpService.user.progress.data = true;
    };
    DatasuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-datasuccess',
            template: __webpack_require__(/*! ./datasuccess.component.html */ "./src/app/space/datasuccess/datasuccess.component.html"),
            styles: [__webpack_require__(/*! ./datasuccess.component.css */ "./src/app/space/datasuccess/datasuccess.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], DatasuccessComponent);
    return DatasuccessComponent;
}());



/***/ }),

/***/ "./src/app/space/enginerepaired/enginerepaired.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/space/enginerepaired/enginerepaired.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.control{\r\n    position: absolute;\r\n    left:540px;\r\n    top: 666px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(159, 216, 199), rgb(69, 207, 166));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BhY2UvZW5naW5lcmVwYWlyZWQvZW5naW5lcmVwYWlyZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0kseUVBQXlFO0lBQ3pFLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3NwYWNlL2VuZ2luZXJlcGFpcmVkL2VuZ2luZXJlcGFpcmVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbn1cclxuLmNvbnRyb2x7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjU0MHB4O1xyXG4gICAgdG9wOiA2NjZweDtcclxufVxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIHJnYigxNTksIDIxNiwgMTk5KSwgcmdiKDY5LCAyMDcsIDE2NikpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/space/enginerepaired/enginerepaired.component.html":
/*!********************************************************************!*\
  !*** ./src/app/space/enginerepaired/enginerepaired.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  You repaired the engine!\r\n</h3>\r\n<img src=\"./assets/img/engineroom2.png\" alt=\"engineroomimg\">\r\n<button class=\"control\" [routerLink]=\"['../controlcenter']\">Control Room</button>\r\n\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/space/enginerepaired/enginerepaired.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/space/enginerepaired/enginerepaired.component.ts ***!
  \******************************************************************/
/*! exports provided: EnginerepairedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnginerepairedComponent", function() { return EnginerepairedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var EnginerepairedComponent = /** @class */ (function () {
    function EnginerepairedComponent(_httpService) {
        this._httpService = _httpService;
    }
    EnginerepairedComponent.prototype.ngOnInit = function () {
        this.description = "You repaired the engine! Everything looks to be working as it should, at least you think it does";
        this._httpService.user.progress.engine = true;
    };
    EnginerepairedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-enginerepaired',
            template: __webpack_require__(/*! ./enginerepaired.component.html */ "./src/app/space/enginerepaired/enginerepaired.component.html"),
            styles: [__webpack_require__(/*! ./enginerepaired.component.css */ "./src/app/space/enginerepaired/enginerepaired.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], EnginerepairedComponent);
    return EnginerepairedComponent;
}());



/***/ }),

/***/ "./src/app/space/engineroom/engineroom.component.css":
/*!***********************************************************!*\
  !*** ./src/app/space/engineroom/engineroom.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.control{\r\n    position: absolute;\r\n    left:540px;\r\n    top: 666px;\r\n}\r\n.part1{\r\n    position: absolute;\r\n    left:20px;\r\n    top: 350px;\r\n}\r\n.part2{\r\n    position: absolute;\r\n    left:255px;\r\n    top: 625px;\r\n}\r\n.part3{\r\n    position: absolute;\r\n    left:326px;\r\n    top: 315px;\r\n}\r\n.finish{\r\n    position: absolute;\r\n    left:700px;\r\n    top: 440px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(159, 216, 199), rgb(69, 207, 166));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BhY2UvZW5naW5lcm9vbS9lbmdpbmVyb29tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7SUFDSSx5RUFBeUU7SUFDekUsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc3BhY2UvZW5naW5lcm9vbS9lbmdpbmVyb29tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbn1cclxuLmNvbnRyb2x7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjU0MHB4O1xyXG4gICAgdG9wOiA2NjZweDtcclxufVxyXG4ucGFydDF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjIwcHg7XHJcbiAgICB0b3A6IDM1MHB4O1xyXG59XHJcbi5wYXJ0MntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6MjU1cHg7XHJcbiAgICB0b3A6IDYyNXB4O1xyXG59XHJcbi5wYXJ0M3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6MzI2cHg7XHJcbiAgICB0b3A6IDMxNXB4O1xyXG59XHJcbi5maW5pc2h7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjcwMHB4O1xyXG4gICAgdG9wOiA0NDBweDtcclxufVxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIHJnYigxNTksIDIxNiwgMTk5KSwgcmdiKDY5LCAyMDcsIDE2NikpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/space/engineroom/engineroom.component.html":
/*!************************************************************!*\
  !*** ./src/app/space/engineroom/engineroom.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  In the Engine Room\r\n</h3>\r\n<img src=\"./assets/img/engineroom.png\" alt=\"engineroomimg\">\r\n<button class=\"control\" [routerLink]=\"['../controlcenter']\">back to control room</button>\r\n\r\n<button class=\"part1\" (click)=\"param(1)\">Fix dangling chords</button>\r\n<button class=\"part2\" (click)=\"param(2)\">Fix spinning machine</button>\r\n<button class=\"part3\" (click)=\"param(3)\">Fix connected orbs</button>\r\n<button class=\"finish\" (click)=\"param(0)\">Restart Computer</button>\r\n\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/space/engineroom/engineroom.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/space/engineroom/engineroom.component.ts ***!
  \**********************************************************/
/*! exports provided: EngineroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineroomComponent", function() { return EngineroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EngineroomComponent = /** @class */ (function () {
    function EngineroomComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    EngineroomComponent.prototype.ngOnInit = function () {
        if (this._httpService.user.inventory.fixedpart1 == false && this._httpService.user.inventory.fixedpart2 == false && this._httpService.user.inventory.fixedpart3 == false) {
            this.description = "You enter a room with a lot of machinery. You see three small machines that are labeled, 'Please Repair and restart computer'";
        }
        else if (this._httpService.user.inventory.fixedpart1 == true && this._httpService.user.inventory.fixedpart2 == true && this._httpService.user.inventory.fixedpart3 == true) {
            this.description = "You fixed the three parts! Hurry and restart the computer";
        }
        else {
            this.description = "Good job! Keep it going!";
        }
    };
    EngineroomComponent.prototype.param = function (num) {
        if (num == 0) {
            if (this._httpService.user.inventory.fixedpart1 == true && this._httpService.user.inventory.fixedpart2 == true && this._httpService.user.inventory.fixedpart3 == true) {
                this._router.navigate(['/space/enginerepaired']);
                this._httpService.user.inventory.fixedpart1 = false;
                this._httpService.user.inventory.fixedpart2 = false;
                this._httpService.user.inventory.fixedpart3 = false;
            }
            else {
                this.description = "You need to repair all three parts before you restart the computer!";
            }
        }
        if (num == 1) {
            if (this._httpService.user.inventory.fixedpart1 == true) {
                this.description = "You have repaired this part already! Try another or restart the computer";
            }
            else {
                this._router.navigate(['/space/fixpartpuzzle1']);
            }
        }
        if (num == 2) {
            if (this._httpService.user.inventory.fixedpart2 == true) {
                this.description = "You have repaired this part already! Try another or restart the computer";
            }
            else {
                this._router.navigate(['/space/fixpartpuzzle2']);
            }
        }
        if (num == 3) {
            if (this._httpService.user.inventory.fixedpart3 == true) {
                this.description = "You have repaired this part already! Try another or restart the computer";
            }
            else {
                this._router.navigate(['/space/fixpartpuzzle3']);
            }
        }
    };
    EngineroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-engineroom',
            template: __webpack_require__(/*! ./engineroom.component.html */ "./src/app/space/engineroom/engineroom.component.html"),
            styles: [__webpack_require__(/*! ./engineroom.component.css */ "./src/app/space/engineroom/engineroom.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EngineroomComponent);
    return EngineroomComponent;
}());



/***/ }),

/***/ "./src/app/space/fixpartpuzzle1/fixpartpuzzle1.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/space/fixpartpuzzle1/fixpartpuzzle1.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BhY2UvZml4cGFydHB1enpsZTEvZml4cGFydHB1enpsZTEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc3BhY2UvZml4cGFydHB1enpsZTEvZml4cGFydHB1enpsZTEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/space/fixpartpuzzle1/fixpartpuzzle1.component.html":
/*!********************************************************************!*\
  !*** ./src/app/space/fixpartpuzzle1/fixpartpuzzle1.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  Doing the first engine puzzle\r\n</h3>\r\n<h5>Correct answers: {{count}}</h5>\r\n\r\n<h3 [innerHTML]=\"oneQ[0].question\"></h3>\r\n<p></p>\r\n\r\n<div *ngFor=\"let choices of answers\">\r\n  <button (click)=\"param(choices)\" [innerHTML]=\"choices\"></button>\r\n</div>\r\n\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n\r\n<p></p>\r\n<button *ngIf=\"count>2\" (click)=\"param(0)\">Part is repaired</button>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/space/fixpartpuzzle1/fixpartpuzzle1.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/space/fixpartpuzzle1/fixpartpuzzle1.component.ts ***!
  \******************************************************************/
/*! exports provided: Fixpartpuzzle1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fixpartpuzzle1Component", function() { return Fixpartpuzzle1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Fixpartpuzzle1Component = /** @class */ (function () {
    function Fixpartpuzzle1Component(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.questions = [{ question: "" }];
        this.oneQ = [{ question: "" }];
    }
    Fixpartpuzzle1Component.prototype.ngOnInit = function () {
        this.getQ("easy", '30');
        this.description = "To fix these engine parts you need knowledge of technology and gadgets!";
        this.count = 0;
    };
    Fixpartpuzzle1Component.prototype.getQ = function (level, category) {
        var _this = this;
        var obs = this._httpService.getQ(level, category);
        obs.subscribe(function (data) {
            _this.oneQ = data;
            _this.oneQ = _this.oneQ.results;
            _this.answers = _this.oneQ[0].incorrect_answers;
            _this.answers.push(_this.oneQ[0].correct_answer);
            _this.shuffle(_this.answers);
            _this.correct = _this.oneQ[0].correct_answer;
            console.log(_this.correct);
        });
    };
    Fixpartpuzzle1Component.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    Fixpartpuzzle1Component.prototype.param = function (num) {
        if (num == 0) {
            this._httpService.user.inventory.fixedpart1 = true;
            this._router.navigate(['/space/engineroom']);
        }
        if (num == this.correct) {
            this.count += 1;
            console.log(this.count);
            this.description = "Thats it! Keep it up! Three correct answers are needed to repair this";
            this.getQ('easy', '30');
        }
        else {
            this.description = "Hmm Looks like the correct answer was " + this.correct + ". Lets try another";
            this.getQ('easy', '30');
        }
        if (this.count == 3) {
            this.description = "You answered enough correctly! you can move on now or keep playing if you like";
        }
    };
    Fixpartpuzzle1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fixpartpuzzle1',
            template: __webpack_require__(/*! ./fixpartpuzzle1.component.html */ "./src/app/space/fixpartpuzzle1/fixpartpuzzle1.component.html"),
            styles: [__webpack_require__(/*! ./fixpartpuzzle1.component.css */ "./src/app/space/fixpartpuzzle1/fixpartpuzzle1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Fixpartpuzzle1Component);
    return Fixpartpuzzle1Component;
}());



/***/ }),

/***/ "./src/app/space/fixpartpuzzle2/fixpartpuzzle2.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/space/fixpartpuzzle2/fixpartpuzzle2.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BhY2UvZml4cGFydHB1enpsZTIvZml4cGFydHB1enpsZTIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc3BhY2UvZml4cGFydHB1enpsZTIvZml4cGFydHB1enpsZTIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/space/fixpartpuzzle2/fixpartpuzzle2.component.html":
/*!********************************************************************!*\
  !*** ./src/app/space/fixpartpuzzle2/fixpartpuzzle2.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  Doing the second engine puzzle\r\n</h3>\r\n<h5>Correct answers: {{count}}</h5>\r\n\r\n<h3 [innerHTML]=\"oneQ[0].question\"></h3>\r\n<p></p>\r\n\r\n<div *ngFor=\"let choices of answers\">\r\n  <button (click)=\"param(choices)\" [innerHTML]=\"choices\"></button>\r\n</div>\r\n\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n\r\n<button *ngIf=\"count>2\" (click)=\"param(0)\">Part is repaired</button>"

/***/ }),

/***/ "./src/app/space/fixpartpuzzle2/fixpartpuzzle2.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/space/fixpartpuzzle2/fixpartpuzzle2.component.ts ***!
  \******************************************************************/
/*! exports provided: Fixpartpuzzle2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fixpartpuzzle2Component", function() { return Fixpartpuzzle2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Fixpartpuzzle2Component = /** @class */ (function () {
    function Fixpartpuzzle2Component(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.questions = [{ question: "" }];
        this.oneQ = [{ question: "" }];
    }
    Fixpartpuzzle2Component.prototype.ngOnInit = function () {
        this.getQ("easy", '18');
        this.description = "To fix these engine parts you need knowledge of technology and gadgets!";
        this.count = 0;
    };
    Fixpartpuzzle2Component.prototype.getQ = function (level, category) {
        var _this = this;
        var obs = this._httpService.getQ(level, category);
        obs.subscribe(function (data) {
            _this.oneQ = data;
            _this.oneQ = _this.oneQ.results;
            _this.answers = _this.oneQ[0].incorrect_answers;
            _this.answers.push(_this.oneQ[0].correct_answer);
            _this.shuffle(_this.answers);
            _this.correct = _this.oneQ[0].correct_answer;
            console.log(_this.correct);
        });
    };
    Fixpartpuzzle2Component.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    Fixpartpuzzle2Component.prototype.param = function (num) {
        if (num == 0) {
            this._httpService.user.inventory.fixedpart2 = true;
            this._router.navigate(['/space/engineroom']);
        }
        if (num == this.correct) {
            this.count += 1;
            console.log(this.count);
            this.description = "Thats it! Keep it up! Three correct answers are needed to repair this";
            this.getQ('easy', '18');
        }
        else {
            this.description = "Hmm Looks like the correct answer was " + this.correct + ". Lets try another";
            this.getQ('easy', '18');
        }
        if (this.count == 3) {
            this.description = "You answered enough correctly! you can move on now or keep playing if you like";
        }
    };
    Fixpartpuzzle2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fixpartpuzzle2',
            template: __webpack_require__(/*! ./fixpartpuzzle2.component.html */ "./src/app/space/fixpartpuzzle2/fixpartpuzzle2.component.html"),
            styles: [__webpack_require__(/*! ./fixpartpuzzle2.component.css */ "./src/app/space/fixpartpuzzle2/fixpartpuzzle2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Fixpartpuzzle2Component);
    return Fixpartpuzzle2Component;
}());



/***/ }),

/***/ "./src/app/space/fixpartpuzzle3/fixpartpuzzle3.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/space/fixpartpuzzle3/fixpartpuzzle3.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BhY2UvZml4cGFydHB1enpsZTMvZml4cGFydHB1enpsZTMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc3BhY2UvZml4cGFydHB1enpsZTMvZml4cGFydHB1enpsZTMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/space/fixpartpuzzle3/fixpartpuzzle3.component.html":
/*!********************************************************************!*\
  !*** ./src/app/space/fixpartpuzzle3/fixpartpuzzle3.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  Doing the third engine puzzle\r\n</h3>\r\n\r\n<h5>Correct answers: {{count}}</h5>\r\n\r\n<h3 [innerHTML]=\"oneQ[0].question\"></h3>\r\n<p></p>\r\n\r\n<div *ngFor=\"let choices of answers\">\r\n  <button (click)=\"param(choices)\" [innerHTML]=\"choices\"></button>\r\n</div>\r\n\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n\r\n\r\n<button *ngIf=\"count>4\"  (click)=\"param(0)\">Part is repaired</button>"

/***/ }),

/***/ "./src/app/space/fixpartpuzzle3/fixpartpuzzle3.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/space/fixpartpuzzle3/fixpartpuzzle3.component.ts ***!
  \******************************************************************/
/*! exports provided: Fixpartpuzzle3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fixpartpuzzle3Component", function() { return Fixpartpuzzle3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Fixpartpuzzle3Component = /** @class */ (function () {
    function Fixpartpuzzle3Component(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.questions = [{ question: "" }];
        this.oneQ = [{ question: "" }];
    }
    Fixpartpuzzle3Component.prototype.ngOnInit = function () {
        this.getQ("medium", '18');
        this.description = "To fix these engine parts you need knowledge of technology and gadgets!";
        this.count = 0;
    };
    Fixpartpuzzle3Component.prototype.getQ = function (level, category) {
        var _this = this;
        var obs = this._httpService.getQ(level, category);
        obs.subscribe(function (data) {
            _this.oneQ = data;
            _this.oneQ = _this.oneQ.results;
            _this.answers = _this.oneQ[0].incorrect_answers;
            _this.answers.push(_this.oneQ[0].correct_answer);
            _this.shuffle(_this.answers);
            _this.correct = _this.oneQ[0].correct_answer;
            console.log(_this.correct);
        });
    };
    Fixpartpuzzle3Component.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    Fixpartpuzzle3Component.prototype.param = function (num) {
        if (num == 0) {
            this._httpService.user.inventory.fixedpart3 = true;
            this._router.navigate(['/space/engineroom']);
        }
        if (num == this.correct) {
            this.count += 1;
            console.log(this.count);
            this.description = "Thats it! Keep it up! You need a count of 5 correct to fully repair the part";
            this.getQ('medium', '18');
        }
        else {
            if (this.count < 5) {
                this.description = "Hmm looks like the correct answer was " + this.correct + ". The Computer sparked and undid some of your progress :(";
                this.count -= 1;
            }
            else {
                this.description = "Hmm looks like the correct answer was " + this.correct + ".";
            }
            this.getQ('medium', '18');
        }
        if (this.count == 5) {
            this.description = "You answered enough correctly! you can move on now or keep playing if you like";
        }
    };
    Fixpartpuzzle3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fixpartpuzzle3',
            template: __webpack_require__(/*! ./fixpartpuzzle3.component.html */ "./src/app/space/fixpartpuzzle3/fixpartpuzzle3.component.html"),
            styles: [__webpack_require__(/*! ./fixpartpuzzle3.component.css */ "./src/app/space/fixpartpuzzle3/fixpartpuzzle3.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], Fixpartpuzzle3Component);
    return Fixpartpuzzle3Component;
}());



/***/ }),

/***/ "./src/app/space/navigationpuzzle1/navigationpuzzle1.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/space/navigationpuzzle1/navigationpuzzle1.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BhY2UvbmF2aWdhdGlvbnB1enpsZTEvbmF2aWdhdGlvbnB1enpsZTEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc3BhY2UvbmF2aWdhdGlvbnB1enpsZTEvbmF2aWdhdGlvbnB1enpsZTEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/space/navigationpuzzle1/navigationpuzzle1.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/space/navigationpuzzle1/navigationpuzzle1.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<h3 [innerHTML]=\"oneQ[0].question\"></h3>\r\n<p></p>\r\n<div *ngFor=\"let choices of answers\">\r\n    <button (click)=\"param(choices)\" [innerHTML]=\"choices\"></button>\r\n  </div>\r\n  \r\n  <div class=\"textbox\">\r\n      <p>{{description}}</p>\r\n  </div>\r\n\r\n\r\n<p></p>\r\n\r\n<button *ngIf=\"count>0\" [routerLink]=\"['../navigationroom2']\">move to the next navigation room</button>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/space/navigationpuzzle1/navigationpuzzle1.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/space/navigationpuzzle1/navigationpuzzle1.component.ts ***!
  \************************************************************************/
/*! exports provided: Navigationpuzzle1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigationpuzzle1Component", function() { return Navigationpuzzle1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var Navigationpuzzle1Component = /** @class */ (function () {
    function Navigationpuzzle1Component(_httpService) {
        this._httpService = _httpService;
        this.questions = [{ question: "" }];
        this.oneQ = [{ question: "" }];
    }
    Navigationpuzzle1Component.prototype.ngOnInit = function () {
        this.getQ("medium", '22');
        this.description = "Please recalibrate my navigation system by Answering a question correctly";
        this.count = 0;
    };
    Navigationpuzzle1Component.prototype.getQ = function (level, category) {
        var _this = this;
        var obs = this._httpService.getQ(level, category);
        obs.subscribe(function (data) {
            _this.oneQ = data;
            _this.oneQ = _this.oneQ.results;
            _this.answers = _this.oneQ[0].incorrect_answers;
            _this.answers.push(_this.oneQ[0].correct_answer);
            _this.shuffle(_this.answers);
            _this.correct = _this.oneQ[0].correct_answer;
            console.log(_this.correct);
        });
    };
    Navigationpuzzle1Component.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    Navigationpuzzle1Component.prototype.param = function (num) {
        if (num == this.correct) {
            this.count += 1;
            console.log(this.count);
            this.description = "You got it! You can access the next room! But be careful, the next rooms wont be as easy.";
            this.getQ('medium', '22');
        }
        else {
            this.description = "Hmm Looks like the correct answer was " + this.correct + ". Lets try another";
            this.getQ('medium', '22');
        }
    };
    Navigationpuzzle1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigationpuzzle1',
            template: __webpack_require__(/*! ./navigationpuzzle1.component.html */ "./src/app/space/navigationpuzzle1/navigationpuzzle1.component.html"),
            styles: [__webpack_require__(/*! ./navigationpuzzle1.component.css */ "./src/app/space/navigationpuzzle1/navigationpuzzle1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], Navigationpuzzle1Component);
    return Navigationpuzzle1Component;
}());



/***/ }),

/***/ "./src/app/space/navigationpuzzle2/navigationpuzzle2.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/space/navigationpuzzle2/navigationpuzzle2.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BhY2UvbmF2aWdhdGlvbnB1enpsZTIvbmF2aWdhdGlvbnB1enpsZTIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc3BhY2UvbmF2aWdhdGlvbnB1enpsZTIvbmF2aWdhdGlvbnB1enpsZTIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/space/navigationpuzzle2/navigationpuzzle2.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/space/navigationpuzzle2/navigationpuzzle2.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h5>Correct answers: {{count}}</h5>\r\n<h3 [innerHTML]=\"oneQ[0].question\"></h3>\r\n<p></p>\r\n\r\n<div *ngFor=\"let choices of answers\">\r\n  <button (click)=\"param(choices)\" [innerHTML]=\"choices\"></button>\r\n</div>\r\n\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n\r\n<button *ngIf=\"count>2\" [routerLink]=\"['../navigationroom3']\">move to the 3rd navigation room</button>"

/***/ }),

/***/ "./src/app/space/navigationpuzzle2/navigationpuzzle2.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/space/navigationpuzzle2/navigationpuzzle2.component.ts ***!
  \************************************************************************/
/*! exports provided: Navigationpuzzle2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigationpuzzle2Component", function() { return Navigationpuzzle2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var Navigationpuzzle2Component = /** @class */ (function () {
    function Navigationpuzzle2Component(_httpService) {
        this._httpService = _httpService;
        this.questions = [{ question: "" }];
        this.oneQ = [{ question: "" }];
    }
    Navigationpuzzle2Component.prototype.ngOnInit = function () {
        this.getQ("medium", '22');
        this.description = "Please recalibrate my navigation system by Answering 3 questions correctly";
        this.count = 0;
    };
    Navigationpuzzle2Component.prototype.getQ = function (level, category) {
        var _this = this;
        var obs = this._httpService.getQ(level, category);
        obs.subscribe(function (data) {
            _this.oneQ = data;
            _this.oneQ = _this.oneQ.results;
            _this.answers = _this.oneQ[0].incorrect_answers;
            _this.answers.push(_this.oneQ[0].correct_answer);
            _this.shuffle(_this.answers);
            _this.correct = _this.oneQ[0].correct_answer;
            console.log(_this.correct);
        });
    };
    Navigationpuzzle2Component.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    Navigationpuzzle2Component.prototype.param = function (num) {
        if (num == this.correct) {
            this.count += 1;
            console.log(this.count);
            this.description = "Thats it! Keep it up!";
            this.getQ('medium', '22');
        }
        else {
            this.description = "Hmm Looks like the correct answer was " + this.correct + ". Lets try another";
            this.getQ('medium', '22');
        }
        if (this.count == 3) {
            this.description = "You answered enough correctly! you can move on now or keep playing if you like";
        }
    };
    Navigationpuzzle2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigationpuzzle2',
            template: __webpack_require__(/*! ./navigationpuzzle2.component.html */ "./src/app/space/navigationpuzzle2/navigationpuzzle2.component.html"),
            styles: [__webpack_require__(/*! ./navigationpuzzle2.component.css */ "./src/app/space/navigationpuzzle2/navigationpuzzle2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], Navigationpuzzle2Component);
    return Navigationpuzzle2Component;
}());



/***/ }),

/***/ "./src/app/space/navigationpuzzle3/navigationpuzzle3.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/space/navigationpuzzle3/navigationpuzzle3.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BhY2UvbmF2aWdhdGlvbnB1enpsZTMvbmF2aWdhdGlvbnB1enpsZTMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc3BhY2UvbmF2aWdhdGlvbnB1enpsZTMvbmF2aWdhdGlvbnB1enpsZTMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/space/navigationpuzzle3/navigationpuzzle3.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/space/navigationpuzzle3/navigationpuzzle3.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>Correct answers: {{count}}</h5>\r\n<h3 [innerHTML]=\"oneQ[0].question\"></h3>\r\n<p></p>\r\n\r\n<div *ngFor=\"let choices of answers\">\r\n  <button (click)=\"param(choices)\" [innerHTML]=\"choices\"></button>\r\n</div>\r\n\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n\r\n<button *ngIf=\"count>4\" [routerLink]=\"['../navigationsuccess']\">completed the third puzzle</button>"

/***/ }),

/***/ "./src/app/space/navigationpuzzle3/navigationpuzzle3.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/space/navigationpuzzle3/navigationpuzzle3.component.ts ***!
  \************************************************************************/
/*! exports provided: Navigationpuzzle3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigationpuzzle3Component", function() { return Navigationpuzzle3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var Navigationpuzzle3Component = /** @class */ (function () {
    function Navigationpuzzle3Component(_httpService) {
        this._httpService = _httpService;
        this.questions = [{ question: "" }];
        this.oneQ = [{ question: "" }];
    }
    Navigationpuzzle3Component.prototype.ngOnInit = function () {
        this.getQ('easy', '22');
        this.description = "Please recalibrate my navigation system by Answering 5 questions correctly with no mistakes";
        this.count = 0;
    };
    Navigationpuzzle3Component.prototype.getQ = function (level, category) {
        var _this = this;
        var obs = this._httpService.getQ(level, category);
        obs.subscribe(function (data) {
            _this.oneQ = data;
            _this.oneQ = _this.oneQ.results;
            _this.answers = _this.oneQ[0].incorrect_answers;
            _this.answers.push(_this.oneQ[0].correct_answer);
            _this.shuffle(_this.answers);
            _this.correct = _this.oneQ[0].correct_answer;
            console.log(_this.correct);
        });
    };
    Navigationpuzzle3Component.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    Navigationpuzzle3Component.prototype.param = function (num) {
        if (num == this.correct) {
            this.count += 1;
            console.log(this.count);
            this.description = "Thats it! Keep it up!";
            this.getQ('easy', '22');
        }
        else {
            if (this.count < 5) {
                this.description = "Hmm Looks like the correct answer was " + this.correct + ". Oh no! The correct answer count has reset!";
                this.count = 0;
            }
            else {
                this.description = "Hmm Looks like the correct answer was " + this.correct + ".";
            }
            this.getQ('easy', '22');
        }
        if (this.count == 5) {
            this.description = "You answered enough correctly in a row! You can move on now or keep playing if you like";
        }
    };
    Navigationpuzzle3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigationpuzzle3',
            template: __webpack_require__(/*! ./navigationpuzzle3.component.html */ "./src/app/space/navigationpuzzle3/navigationpuzzle3.component.html"),
            styles: [__webpack_require__(/*! ./navigationpuzzle3.component.css */ "./src/app/space/navigationpuzzle3/navigationpuzzle3.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], Navigationpuzzle3Component);
    return Navigationpuzzle3Component;
}());



/***/ }),

/***/ "./src/app/space/navigationroom/navigationroom.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/space/navigationroom/navigationroom.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.puzzle{\r\n    position: absolute;\r\n    left:150px;\r\n    top: 255px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(159, 216, 199), rgb(69, 207, 166));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BhY2UvbmF2aWdhdGlvbnJvb20vbmF2aWdhdGlvbnJvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0kseUVBQXlFO0lBQ3pFLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3NwYWNlL25hdmlnYXRpb25yb29tL25hdmlnYXRpb25yb29tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbn1cclxuLnB1enpsZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6MTUwcHg7XHJcbiAgICB0b3A6IDI1NXB4O1xyXG59XHJcbmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggcmdiKDE1OSwgMjE2LCAxOTkpLCByZ2IoNjksIDIwNywgMTY2KSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/space/navigationroom/navigationroom.component.html":
/*!********************************************************************!*\
  !*** ./src/app/space/navigationroom/navigationroom.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  First navigation room\r\n</h3>\r\n<img src=\"./assets/img/navigationroom.png\" alt=\"navigationroomimg\">\r\n<button class=\"puzzle\" [routerLink]=\"['../navigationpuzzle1']\">Check Computer</button>\r\n\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/space/navigationroom/navigationroom.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/space/navigationroom/navigationroom.component.ts ***!
  \******************************************************************/
/*! exports provided: NavigationroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationroomComponent", function() { return NavigationroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var NavigationroomComponent = /** @class */ (function () {
    function NavigationroomComponent(_httpService) {
        this._httpService = _httpService;
    }
    NavigationroomComponent.prototype.ngOnInit = function () {
        this.description = "You walk into the room labeled navigation. There is a computer flashing a warning sign that says, 'Door to further navigation rooms currently unavailable,please resolve problem to move forward'";
    };
    NavigationroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigationroom',
            template: __webpack_require__(/*! ./navigationroom.component.html */ "./src/app/space/navigationroom/navigationroom.component.html"),
            styles: [__webpack_require__(/*! ./navigationroom.component.css */ "./src/app/space/navigationroom/navigationroom.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], NavigationroomComponent);
    return NavigationroomComponent;
}());



/***/ }),

/***/ "./src/app/space/navigationroom2/navigationroom2.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/space/navigationroom2/navigationroom2.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.puzzle{\r\n    position: absolute;\r\n    left:150px;\r\n    top: 255px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(159, 216, 199), rgb(69, 207, 166));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BhY2UvbmF2aWdhdGlvbnJvb20yL25hdmlnYXRpb25yb29tMi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7SUFDSSx5RUFBeUU7SUFDekUsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc3BhY2UvbmF2aWdhdGlvbnJvb20yL25hdmlnYXRpb25yb29tMi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3h7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG59XHJcbi5wdXp6bGV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjE1MHB4O1xyXG4gICAgdG9wOiAyNTVweDtcclxufVxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIHJnYigxNTksIDIxNiwgMTk5KSwgcmdiKDY5LCAyMDcsIDE2NikpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/space/navigationroom2/navigationroom2.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/space/navigationroom2/navigationroom2.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  Second navigation room\r\n</h3>\r\n<img src=\"./assets/img/navigationroom.png\" alt=\"navigationroomimg\">\r\n<button class=\"puzzle\" [routerLink]=\"['../navigationpuzzle2']\">Resolve this error</button>\r\n\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/space/navigationroom2/navigationroom2.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/space/navigationroom2/navigationroom2.component.ts ***!
  \********************************************************************/
/*! exports provided: Navigationroom2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigationroom2Component", function() { return Navigationroom2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var Navigationroom2Component = /** @class */ (function () {
    function Navigationroom2Component(_httpService) {
        this._httpService = _httpService;
    }
    Navigationroom2Component.prototype.ngOnInit = function () {
        this.description = "You continue on and arrive in a room that looks just like the first. Another computer is flashing a warning message. 'Door to go even further is currently unavailable,please resolve error to move forward'";
    };
    Navigationroom2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigationroom2',
            template: __webpack_require__(/*! ./navigationroom2.component.html */ "./src/app/space/navigationroom2/navigationroom2.component.html"),
            styles: [__webpack_require__(/*! ./navigationroom2.component.css */ "./src/app/space/navigationroom2/navigationroom2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], Navigationroom2Component);
    return Navigationroom2Component;
}());



/***/ }),

/***/ "./src/app/space/navigationroom3/navigationroom3.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/space/navigationroom3/navigationroom3.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.puzzle{\r\n    position: absolute;\r\n    left:150px;\r\n    top: 255px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(159, 216, 199), rgb(69, 207, 166));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BhY2UvbmF2aWdhdGlvbnJvb20zL25hdmlnYXRpb25yb29tMy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7SUFDSSx5RUFBeUU7SUFDekUsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc3BhY2UvbmF2aWdhdGlvbnJvb20zL25hdmlnYXRpb25yb29tMy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3h7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxufVxyXG5pbWd7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG59XHJcbi5wdXp6bGV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjE1MHB4O1xyXG4gICAgdG9wOiAyNTVweDtcclxufVxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIHJnYigxNTksIDIxNiwgMTk5KSwgcmdiKDY5LCAyMDcsIDE2NikpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/space/navigationroom3/navigationroom3.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/space/navigationroom3/navigationroom3.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  third navigation room\r\n</h3>\r\n<img src=\"./assets/img/navigationroom.png\" alt=\"navigationroomimg\">\r\n<button class=\"puzzle\" [routerLink]=\"['../navigationpuzzle3']\">Do the 3rd Puzzle</button>\r\n\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/space/navigationroom3/navigationroom3.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/space/navigationroom3/navigationroom3.component.ts ***!
  \********************************************************************/
/*! exports provided: Navigationroom3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigationroom3Component", function() { return Navigationroom3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var Navigationroom3Component = /** @class */ (function () {
    function Navigationroom3Component(_httpService) {
        this._httpService = _httpService;
    }
    Navigationroom3Component.prototype.ngOnInit = function () {
        this.description = "This third room looks identical to the first two rooms and has yet another error message, 'Door to final navigation room is currently unavailable,please resolve error to move forward'";
    };
    Navigationroom3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigationroom3',
            template: __webpack_require__(/*! ./navigationroom3.component.html */ "./src/app/space/navigationroom3/navigationroom3.component.html"),
            styles: [__webpack_require__(/*! ./navigationroom3.component.css */ "./src/app/space/navigationroom3/navigationroom3.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], Navigationroom3Component);
    return Navigationroom3Component;
}());



/***/ }),

/***/ "./src/app/space/navigationsuccess/navigationsuccess.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/space/navigationsuccess/navigationsuccess.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.control{\r\n    position: absolute;\r\n    left:619px;\r\n    top: 286px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(159, 216, 199), rgb(69, 207, 166));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BhY2UvbmF2aWdhdGlvbnN1Y2Nlc3MvbmF2aWdhdGlvbnN1Y2Nlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0kseUVBQXlFO0lBQ3pFLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3NwYWNlL25hdmlnYXRpb25zdWNjZXNzL25hdmlnYXRpb25zdWNjZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbn1cclxuLmNvbnRyb2x7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjYxOXB4O1xyXG4gICAgdG9wOiAyODZweDtcclxufVxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIHJnYigxNTksIDIxNiwgMTk5KSwgcmdiKDY5LCAyMDcsIDE2NikpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/space/navigationsuccess/navigationsuccess.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/space/navigationsuccess/navigationsuccess.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  Completely fixed the Navigation!\r\n</h3>\r\n\r\n<img src=\"./assets/img/navigationroom2.png\" alt=\"navigationroomimg\">\r\n<button class=\"puzzle\" class=\"control\" [routerLink]=\"['../controlcenter']\">Go back to cotrol center</button>\r\n\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/space/navigationsuccess/navigationsuccess.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/space/navigationsuccess/navigationsuccess.component.ts ***!
  \************************************************************************/
/*! exports provided: NavigationsuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationsuccessComponent", function() { return NavigationsuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var NavigationsuccessComponent = /** @class */ (function () {
    function NavigationsuccessComponent(_httpService) {
        this._httpService = _httpService;
    }
    NavigationsuccessComponent.prototype.ngOnInit = function () {
        this.description = "You fixed the Navigation! Good Job!";
        this._httpService.user.progress.navigation = true;
    };
    NavigationsuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigationsuccess',
            template: __webpack_require__(/*! ./navigationsuccess.component.html */ "./src/app/space/navigationsuccess/navigationsuccess.component.html"),
            styles: [__webpack_require__(/*! ./navigationsuccess.component.css */ "./src/app/space/navigationsuccess/navigationsuccess.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], NavigationsuccessComponent);
    return NavigationsuccessComponent;
}());



/***/ }),

/***/ "./src/app/space/space.component.css":
/*!*******************************************!*\
  !*** ./src/app/space/space.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nspan{\r\n    display: inline-block;\r\n}\r\n.inventory{\r\n    width: 800px;\r\n    outline: 3px solid black;\r\n    height: 41px;\r\n    \r\n}\r\n.item{\r\n    display: inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BhY2Uvc3BhY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3NwYWNlL3NwYWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuc3BhbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uaW52ZW50b3J5e1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgb3V0bGluZTogM3B4IHNvbGlkIGJsYWNrO1xyXG4gICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgXHJcbn1cclxuLml0ZW17XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/space/space.component.html":
/*!********************************************!*\
  !*** ./src/app/space/space.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container\">\r\n    <p>On the Spaceship</p>\r\n\r\n<div class=\"inventory\">\r\n    <div *ngFor=\"let item of allItems | keyvalue\" class=\"item\">\r\n            <pre *ngIf=\"item.value\" >{{item.key}}, </pre>\r\n    </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/space/space.component.ts":
/*!******************************************!*\
  !*** ./src/app/space/space.component.ts ***!
  \******************************************/
/*! exports provided: SpaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceComponent", function() { return SpaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");



var SpaceComponent = /** @class */ (function () {
    function SpaceComponent(_httpService) {
        this._httpService = _httpService;
        this.allItems = this._httpService.user.inventory;
    }
    SpaceComponent.prototype.ngOnInit = function () {
        console.log(this.allItems);
    };
    SpaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-space',
            template: __webpack_require__(/*! ./space.component.html */ "./src/app/space/space.component.html"),
            styles: [__webpack_require__(/*! ./space.component.css */ "./src/app/space/space.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], SpaceComponent);
    return SpaceComponent;
}());



/***/ }),

/***/ "./src/app/space/spaceroom/spaceroom.component.css":
/*!*********************************************************!*\
  !*** ./src/app/space/spaceroom/spaceroom.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin-left: 200px;\r\n}\r\nimg{\r\n    width: 800px;\r\n    border: 2px solid gray;\r\n}\r\n.door{\r\n    position: absolute;\r\n    left:270px;\r\n    top: 370px;\r\n}\r\n.window{\r\n    position: absolute;\r\n    left:644px;\r\n    top: 494px;\r\n}\r\nbutton{\r\n    background-image: linear-gradient( rgb(159, 216, 199), rgb(69, 207, 166));\r\n    border-radius: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BhY2Uvc3BhY2Vyb29tL3NwYWNlcm9vbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7QUFDZDtBQUNBO0lBQ0kseUVBQXlFO0lBQ3pFLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3NwYWNlL3NwYWNlcm9vbS9zcGFjZXJvb20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcclxufVxyXG4uZG9vcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6MjcwcHg7XHJcbiAgICB0b3A6IDM3MHB4O1xyXG59XHJcbi53aW5kb3d7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjY0NHB4O1xyXG4gICAgdG9wOiA0OTRweDtcclxufVxyXG5idXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIHJnYigxNTksIDIxNiwgMTk5KSwgcmdiKDY5LCAyMDcsIDE2NikpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/space/spaceroom/spaceroom.component.html":
/*!**********************************************************!*\
  !*** ./src/app/space/spaceroom/spaceroom.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  In the mysterious room with a window that overlooks earth\r\n</h3>\r\n<img src=\"./assets/img/spaceroom.png\" alt=\"spaceroomimg\">\r\n<button class=\"door\" [routerLink]=\"['../spaceroompuzzle']\">Try to unlock door</button>\r\n<button class=\"window\" (click)=\"param(0)\">Look out Window</button>\r\n\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/space/spaceroom/spaceroom.component.ts":
/*!********************************************************!*\
  !*** ./src/app/space/spaceroom/spaceroom.component.ts ***!
  \********************************************************/
/*! exports provided: SpaceroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceroomComponent", function() { return SpaceroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var SpaceroomComponent = /** @class */ (function () {
    function SpaceroomComponent(_httpService) {
        this._httpService = _httpService;
    }
    SpaceroomComponent.prototype.ngOnInit = function () {
        this.description = "Immediately after cleaning the power sauce in the sink, there was a bright light. Now you are standing in a metalic room with one window and one door. The window shows a very starry black sky";
    };
    SpaceroomComponent.prototype.param = function (num) {
        if (num == 0) {
            this.description = "You look out the window and are shocked to see the earth! Where are you?!?!";
        }
    };
    SpaceroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spaceroom',
            template: __webpack_require__(/*! ./spaceroom.component.html */ "./src/app/space/spaceroom/spaceroom.component.html"),
            styles: [__webpack_require__(/*! ./spaceroom.component.css */ "./src/app/space/spaceroom/spaceroom.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], SpaceroomComponent);
    return SpaceroomComponent;
}());



/***/ }),

/***/ "./src/app/space/spaceroompuzzle/spaceroompuzzle.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/space/spaceroompuzzle/spaceroompuzzle.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BhY2Uvc3BhY2Vyb29tcHV6emxlL3NwYWNlcm9vbXB1enpsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zcGFjZS9zcGFjZXJvb21wdXp6bGUvc3BhY2Vyb29tcHV6emxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/space/spaceroompuzzle/spaceroompuzzle.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/space/spaceroompuzzle/spaceroompuzzle.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<h3 [innerHTML]=\"oneQ[0].question\"></h3>\r\n<p></p>\r\n\r\n<div *ngFor=\"let choices of answers\">\r\n  <button (click)=\"param(choices)\" [innerHTML]=\"choices\"></button>\r\n</div>\r\n\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n\r\n\r\n<button *ngIf=\"count>0\" [routerLink]=\"['../controlcenter']\">go through door</button>"

/***/ }),

/***/ "./src/app/space/spaceroompuzzle/spaceroompuzzle.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/space/spaceroompuzzle/spaceroompuzzle.component.ts ***!
  \********************************************************************/
/*! exports provided: SpaceroompuzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceroompuzzleComponent", function() { return SpaceroompuzzleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SpaceroompuzzleComponent = /** @class */ (function () {
    function SpaceroompuzzleComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
        this.questions = [{ question: "" }];
        this.oneQ = [{ question: "" }];
    }
    SpaceroompuzzleComponent.prototype.ngOnInit = function () {
        this.getQ("easy", '15');
        this.description = "This door is locked and seems to only open if you can answer a question";
        this.count = 0;
    };
    SpaceroompuzzleComponent.prototype.getQ = function (level, category) {
        var _this = this;
        var obs = this._httpService.getQ(level, category);
        obs.subscribe(function (data) {
            _this.oneQ = data;
            _this.oneQ = _this.oneQ.results;
            _this.answers = _this.oneQ[0].incorrect_answers;
            _this.answers.push(_this.oneQ[0].correct_answer);
            _this.shuffle(_this.answers);
            _this.correct = _this.oneQ[0].correct_answer;
            console.log(_this.correct);
        });
    };
    SpaceroompuzzleComponent.prototype.shuffle = function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    SpaceroompuzzleComponent.prototype.param = function (num) {
        if (num == this.correct) {
            this.count += 1;
            this.description = "You got it right! Good thing you play so many video games. And your parents said they weren't good for you. You heard a click and you can now open the door... Or you can play around with more questions, you're in no hurry";
            this.getQ('easy', '15');
        }
        else {
            this.description = "Hmm looks like the correct answer was " + this.correct + ". Why don't you try again?";
            this.getQ('easy', '15');
        }
    };
    SpaceroompuzzleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spaceroompuzzle',
            template: __webpack_require__(/*! ./spaceroompuzzle.component.html */ "./src/app/space/spaceroompuzzle/spaceroompuzzle.component.html"),
            styles: [__webpack_require__(/*! ./spaceroompuzzle.component.css */ "./src/app/space/spaceroompuzzle/spaceroompuzzle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SpaceroompuzzleComponent);
    return SpaceroompuzzleComponent;
}());



/***/ }),

/***/ "./src/app/temple/bluebridge/bluebridge.component.css":
/*!************************************************************!*\
  !*** ./src/app/temple/bluebridge/bluebridge.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxlL2JsdWVicmlkZ2UvYmx1ZWJyaWRnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsZS9ibHVlYnJpZGdlL2JsdWVicmlkZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLm9ue1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/temple/bluebridge/bluebridge.component.html":
/*!*************************************************************!*\
  !*** ./src/app/temple/bluebridge/bluebridge.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>bluebridge works!</p>\r\n<button [ngClass]=\"{ 'on': switch }\"[routerLink] = \"['../bluedoor']\">Proceed</button>\r\n<button [ngClass]=\"{ 'on': switch1 }\"[routerLink] = \"['../bluebridgepuzzle']\">Examine the stone</button>\r\n<div class=\"textbox\">\r\n  <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/temple/bluebridge/bluebridge.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/temple/bluebridge/bluebridge.component.ts ***!
  \***********************************************************/
/*! exports provided: BluebridgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluebridgeComponent", function() { return BluebridgeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var BluebridgeComponent = /** @class */ (function () {
    function BluebridgeComponent(_httpService) {
        this._httpService = _httpService;
        this.switch = false;
        this.switch1 = true;
    }
    BluebridgeComponent.prototype.ngOnInit = function () {
        if (this._httpService.user.inventory.blueflame == false) {
            this.description = "As you continue along the passageway, it opens into a large room, covered in water. The blue light from the fires that surround the room flickers off the surface. There's a bridge across the water, just wide enough to cross to the other side. The door on the other side is open.";
        }
        else {
            this.description = "After making it past the earthen door, you return to the water room. Looking out to the water, you notice the bridge is gone! You can't swim, or your fire will go out. In the place of where you expected the first steps of the bridge to be, there's a stone with writing on it...";
            this.switch = true;
            this.switch1 = false;
        }
    };
    BluebridgeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bluebridge',
            template: __webpack_require__(/*! ./bluebridge.component.html */ "./src/app/temple/bluebridge/bluebridge.component.html"),
            styles: [__webpack_require__(/*! ./bluebridge.component.css */ "./src/app/temple/bluebridge/bluebridge.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], BluebridgeComponent);
    return BluebridgeComponent;
}());



/***/ }),

/***/ "./src/app/temple/bluebridgepuzzle/bluebridgepuzzle.component.css":
/*!************************************************************************!*\
  !*** ./src/app/temple/bluebridgepuzzle/bluebridgepuzzle.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxlL2JsdWVicmlkZ2VwdXp6bGUvYmx1ZWJyaWRnZXB1enpsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsZS9ibHVlYnJpZGdlcHV6emxlL2JsdWVicmlkZ2VwdXp6bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLm9ue1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/temple/bluebridgepuzzle/bluebridgepuzzle.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/temple/bluebridgepuzzle/bluebridgepuzzle.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>bluebridgepuzzle works!</p>\r\n<button [ngClass]=\"{ 'on': switch }\" [routerLink] = \"['../halls']\">Return to the hall</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n<div [ngClass]=\"{ 'on': switch1 }\">\r\n    <p [innerHTML]=\"question\"></p>\r\n    <input type=\"text\" name=\"answerinput\" [(ngModel)]=\"answer\" />\r\n        <button (click)=\"onClick()\">Guess!</button>\r\n        <br>\r\n</div>"

/***/ }),

/***/ "./src/app/temple/bluebridgepuzzle/bluebridgepuzzle.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/temple/bluebridgepuzzle/bluebridgepuzzle.component.ts ***!
  \***********************************************************************/
/*! exports provided: BluebridgepuzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluebridgepuzzleComponent", function() { return BluebridgepuzzleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var BluebridgepuzzleComponent = /** @class */ (function () {
    function BluebridgepuzzleComponent(_httpService) {
        this._httpService = _httpService;
        this.answer = "";
        this.count = 0;
        this.switch = true;
        this.switch1 = false;
    }
    BluebridgepuzzleComponent.prototype.ngOnInit = function () {
        this.description = "The stone has three riddles on it. You hear a voice, and it asks you to speak the answers to three riddles. The first one reads:";
        this.getQuestion();
    };
    BluebridgepuzzleComponent.prototype.getQuestion = function () {
        if (this.count == 0) {
            this.question = "Poor people have it. Rich people need it. If you eat it you die. what is it?";
            this.correct = "nothing";
            this.correct2 = "Nothing";
        }
        if (this.count == 1) {
            this.question = "You have me today, tomorrow you'll have more; As your time passes, I'm not easy to store; I don't take up space, but I'm only in one place; I am what you saw, but not what you see. What am I?";
            this.correct = "memory";
            this.correct2 = "memories";
        }
        if (this.count == 2) {
            this.question = "What runs around the whole yard without moving?";
            this.correct = "fence";
            this.correct2 = "a fence";
        }
    };
    BluebridgepuzzleComponent.prototype.onClick = function () {
        if (this.answer == this.correct || this.answer == this.correct2) {
            this.count++;
            if (this.count == 3) {
                this.description = "As you speak the final answer, the pieces of the bridge raise from the water, and reform a path to the halls.";
                this.switch1 = true;
                this.switch = false;
            }
            else {
                if (this.count == 1) {
                    this.description = "'Correct', the voice answers.";
                    this.getQuestion();
                    this.answer = "";
                }
                if (this.count == 2) {
                    this.description = "'Correct', the voice answers again";
                    this.getQuestion();
                    this.answer = "";
                }
            }
        }
        else {
            this.description = "'Incorrect'";
        }
    };
    BluebridgepuzzleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bluebridgepuzzle',
            template: __webpack_require__(/*! ./bluebridgepuzzle.component.html */ "./src/app/temple/bluebridgepuzzle/bluebridgepuzzle.component.html"),
            styles: [__webpack_require__(/*! ./bluebridgepuzzle.component.css */ "./src/app/temple/bluebridgepuzzle/bluebridgepuzzle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], BluebridgepuzzleComponent);
    return BluebridgepuzzleComponent;
}());



/***/ }),

/***/ "./src/app/temple/bluedoor/bluedoor.component.css":
/*!********************************************************!*\
  !*** ./src/app/temple/bluedoor/bluedoor.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxlL2JsdWVkb29yL2JsdWVkb29yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdGVtcGxlL2JsdWVkb29yL2JsdWVkb29yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5vbntcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/temple/bluedoor/bluedoor.component.html":
/*!*********************************************************!*\
  !*** ./src/app/temple/bluedoor/bluedoor.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>bluedoor works!</p>\r\n<button [ngClass]=\"{ 'on': switch }\" [routerLink] = \"['../blueflame']\">Proceed</button>\r\n<button [ngClass]=\"{ 'on': switch1 }\" [routerLink] = \"['../bluedoorpuzzle']\">Examine the writing</button>\r\n<div class=\"textbox\">\r\n  <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/temple/bluedoor/bluedoor.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/temple/bluedoor/bluedoor.component.ts ***!
  \*******************************************************/
/*! exports provided: BluedoorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluedoorComponent", function() { return BluedoorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var BluedoorComponent = /** @class */ (function () {
    function BluedoorComponent(_httpService) {
        this._httpService = _httpService;
        this.switch = false;
        this.switch1 = true;
    }
    BluedoorComponent.prototype.ngOnInit = function () {
        if (this._httpService.user.inventory.blueflame == false) {
            this.description = "You crossed the bridge, and walked through the door on the other side. You enter a small, yet very tall room. Once again, this room is covered in blue flame, all too high to reach. There's another door not far from you.";
        }
        else {
            this.description = "As you exit the blue flame temple, blue flames in hand, the doors in the small room suddenly shut, sealing you in a wall of earth and stone. On the door, some writing appears...";
            this.switch = true;
            this.switch1 = false;
        }
    };
    BluedoorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bluedoor',
            template: __webpack_require__(/*! ./bluedoor.component.html */ "./src/app/temple/bluedoor/bluedoor.component.html"),
            styles: [__webpack_require__(/*! ./bluedoor.component.css */ "./src/app/temple/bluedoor/bluedoor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], BluedoorComponent);
    return BluedoorComponent;
}());



/***/ }),

/***/ "./src/app/temple/bluedoorpuzzle/bluedoorpuzzle.component.css":
/*!********************************************************************!*\
  !*** ./src/app/temple/bluedoorpuzzle/bluedoorpuzzle.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxlL2JsdWVkb29ycHV6emxlL2JsdWVkb29ycHV6emxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdGVtcGxlL2JsdWVkb29ycHV6emxlL2JsdWVkb29ycHV6emxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5vbntcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/temple/bluedoorpuzzle/bluedoorpuzzle.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/temple/bluedoorpuzzle/bluedoorpuzzle.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>bluedoorpuzzle works!</p>\r\n<button [ngClass]=\"{ 'on': switch }\" [routerLink] = \"['../bluebridge']\">Enter the next room</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n<div [ngClass]=\"{ 'on': switch1 }\">\r\n    <p [innerHTML]=\"question\"></p>\r\n    <input type=\"text\" name=\"answerinput\" [(ngModel)]=\"answer\" />\r\n        <button (click)=\"onClick()\">Guess!</button>\r\n        <br>\r\n</div>"

/***/ }),

/***/ "./src/app/temple/bluedoorpuzzle/bluedoorpuzzle.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/temple/bluedoorpuzzle/bluedoorpuzzle.component.ts ***!
  \*******************************************************************/
/*! exports provided: BluedoorpuzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluedoorpuzzleComponent", function() { return BluedoorpuzzleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var BluedoorpuzzleComponent = /** @class */ (function () {
    function BluedoorpuzzleComponent(_httpService) {
        this._httpService = _httpService;
        this.answer = "";
        this.count = 0;
        this.switch = true;
        this.switch1 = false;
    }
    BluedoorpuzzleComponent.prototype.ngOnInit = function () {
        this.description = "It's a riddle. You'll have to solve it.";
        this.getQuestion();
    };
    BluedoorpuzzleComponent.prototype.getQuestion = function () {
        if (this.count == 0) {
            this.question = "Re-arrange the letters, O O U S W T D N E J R to spell just one word.";
            this.correct = "just one word";
            this.correct2 = "justoneword";
        }
        if (this.count == 1) {
            this.question = "What has six faces, But does not wear makeup. It also has twenty-one eyes, But cannot see?";
            this.correct = "die";
            this.correct2 = "dice";
        }
        if (this.count == 2) {
            this.question = "Before Mount Everest was discovered, what was the highest mountain on Earth?";
            this.correct = "mount everest";
            this.correct2 = "Mount Everest";
        }
    };
    BluedoorpuzzleComponent.prototype.onClick = function () {
        if (this.answer == this.correct || this.answer == this.correct2) {
            this.count++;
            if (this.count == 3) {
                this.description = "The final riddle fades, and the door starts to open.";
                this.switch1 = true;
                this.switch = false;
            }
            else {
                if (this.count == 1) {
                    this.description = "Another riddle appears.";
                    this.getQuestion();
                    this.answer = "";
                }
                if (this.count == 2) {
                    this.description = "Yet another riddle, your torch won't last forever...";
                    this.getQuestion();
                    this.answer = "";
                }
            }
        }
        else {
            this.description = "Nothing happens.";
        }
    };
    BluedoorpuzzleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bluedoorpuzzle',
            template: __webpack_require__(/*! ./bluedoorpuzzle.component.html */ "./src/app/temple/bluedoorpuzzle/bluedoorpuzzle.component.html"),
            styles: [__webpack_require__(/*! ./bluedoorpuzzle.component.css */ "./src/app/temple/bluedoorpuzzle/bluedoorpuzzle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], BluedoorpuzzleComponent);
    return BluedoorpuzzleComponent;
}());



/***/ }),

/***/ "./src/app/temple/blueflame/blueflame.component.css":
/*!**********************************************************!*\
  !*** ./src/app/temple/blueflame/blueflame.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxlL2JsdWVmbGFtZS9ibHVlZmxhbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC90ZW1wbGUvYmx1ZWZsYW1lL2JsdWVmbGFtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3h7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4ub257XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/temple/blueflame/blueflame.component.html":
/*!***********************************************************!*\
  !*** ./src/app/temple/blueflame/blueflame.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>blueflame works!</p>\r\n<button  (click)=\"onClick(0)\">Grab the torch, and light it with the blue flame!</button>\r\n<button [ngClass]=\"{ 'on': switch }\" [routerLink] = \"['../bluedoor']\">Back to earth room</button>\r\n<div class=\"textbox\">\r\n  <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/temple/blueflame/blueflame.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/temple/blueflame/blueflame.component.ts ***!
  \*********************************************************/
/*! exports provided: BlueflameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlueflameComponent", function() { return BlueflameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var BlueflameComponent = /** @class */ (function () {
    function BlueflameComponent(_httpService) {
        this._httpService = _httpService;
        this.switch = true;
    }
    BlueflameComponent.prototype.ngOnInit = function () {
        this.description = "You enter the next room, and are greeted by a temple, leading up to a shrine, with a giant blue flame in the center. This time, you can reach it, and there are unlit torches lining the walls around the shrine.";
    };
    BlueflameComponent.prototype.onClick = function (type) {
        if (type == 0) {
            if (this._httpService.user.inventory.blueflame == false) {
                this.description = "You grab the torch and set it ablaze with blue fire. Finally, you can bring it back to the temple halls.";
                this._httpService.user.inventory.blueflame = true;
                this._httpService.user.progress.blueflame = true;
                this.switch = false;
            }
            else {
                this.description = "You're already holding the fire, get moving to the temple halls!";
            }
        }
    };
    BlueflameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blueflame',
            template: __webpack_require__(/*! ./blueflame.component.html */ "./src/app/temple/blueflame/blueflame.component.html"),
            styles: [__webpack_require__(/*! ./blueflame.component.css */ "./src/app/temple/blueflame/blueflame.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], BlueflameComponent);
    return BlueflameComponent;
}());



/***/ }),

/***/ "./src/app/temple/bluepassage/bluepassage.component.css":
/*!**************************************************************!*\
  !*** ./src/app/temple/bluepassage/bluepassage.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxlL2JsdWVwYXNzYWdlL2JsdWVwYXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsZS9ibHVlcGFzc2FnZS9ibHVlcGFzc2FnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3h7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/temple/bluepassage/bluepassage.component.html":
/*!***************************************************************!*\
  !*** ./src/app/temple/bluepassage/bluepassage.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>bluepassage works!</p>\r\n<button [routerLink] = \"['../bluebridge']\">Proceed</button>\r\n<div class=\"textbox\">\r\n  <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/temple/bluepassage/bluepassage.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/temple/bluepassage/bluepassage.component.ts ***!
  \*************************************************************/
/*! exports provided: BluepassageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BluepassageComponent", function() { return BluepassageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var BluepassageComponent = /** @class */ (function () {
    function BluepassageComponent(_httpService) {
        this._httpService = _httpService;
    }
    BluepassageComponent.prototype.ngOnInit = function () {
        this.description = "The passageway is lined with blue flames, all much too high to reach. There's no way to use it, except to light your way. There's nothing to do but continue onward.";
    };
    BluepassageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bluepassage',
            template: __webpack_require__(/*! ./bluepassage.component.html */ "./src/app/temple/bluepassage/bluepassage.component.html"),
            styles: [__webpack_require__(/*! ./bluepassage.component.css */ "./src/app/temple/bluepassage/bluepassage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], BluepassageComponent);
    return BluepassageComponent;
}());



/***/ }),

/***/ "./src/app/temple/entrancepuzzle/entrancepuzzle.component.css":
/*!********************************************************************!*\
  !*** ./src/app/temple/entrancepuzzle/entrancepuzzle.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxlL2VudHJhbmNlcHV6emxlL2VudHJhbmNlcHV6emxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdGVtcGxlL2VudHJhbmNlcHV6emxlL2VudHJhbmNlcHV6emxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5vbntcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/temple/entrancepuzzle/entrancepuzzle.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/temple/entrancepuzzle/entrancepuzzle.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>entrancepuzzle works!</p>\r\n<button [ngClass]=\"{ 'on': switch }\" [routerLink] = \"['../halls']\">Step into the temple</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n<div [ngClass]=\"{ 'on': switch1 }\">\r\n    <p [innerHTML]=\"question\"></p>\r\n    <input type=\"text\" name=\"answerinput\" [(ngModel)]=\"answer\" />\r\n        <button (click)=\"onClick()\">Guess!</button>\r\n        <br>\r\n</div>"

/***/ }),

/***/ "./src/app/temple/entrancepuzzle/entrancepuzzle.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/temple/entrancepuzzle/entrancepuzzle.component.ts ***!
  \*******************************************************************/
/*! exports provided: EntrancepuzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrancepuzzleComponent", function() { return EntrancepuzzleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var EntrancepuzzleComponent = /** @class */ (function () {
    function EntrancepuzzleComponent(_httpService) {
        this._httpService = _httpService;
        this.answer = "";
        this.count = 0;
        this.switch = true;
        this.switch1 = false;
    }
    EntrancepuzzleComponent.prototype.ngOnInit = function () {
        this.description = "The entrance is sealed, and three riddles appear. The first reads:";
        this.getQuestion();
    };
    EntrancepuzzleComponent.prototype.getQuestion = function () {
        if (this.count == 0) {
            this.question = "What belongs to you, but other people use it more than you?";
            this.correct = "name";
            this.correct2 = "my name";
        }
        if (this.count == 1) {
            this.question = "Tall I am young, Short I am old, While with life I glow, Wind is my foe. What am I?";
            this.correct = "candle";
            this.correct2 = "a candle";
        }
        if (this.count == 2) {
            this.question = "What is black when you buy it, red when you use it, and gray when you throw it away?";
            this.correct = "charcoal";
            this.correct2 = "coal";
        }
    };
    EntrancepuzzleComponent.prototype.onClick = function () {
        if (this.answer == this.correct || this.answer == this.correct2) {
            this.count++;
            if (this.count == 3) {
                this.description = "The final riddle fades, and the door starts to open.";
                this.switch1 = true;
                this.switch = false;
            }
            else {
                if (this.count == 1) {
                    this.description = "The first riddle vanishes. The second riddle is:";
                    this.getQuestion();
                    this.answer = "";
                }
                if (this.count == 2) {
                    this.description = "The second riddle disappears. Now for the final riddle:";
                    this.getQuestion();
                    this.answer = "";
                }
            }
        }
        else {
            this.description = "Nothing happens.";
        }
    };
    EntrancepuzzleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entrancepuzzle',
            template: __webpack_require__(/*! ./entrancepuzzle.component.html */ "./src/app/temple/entrancepuzzle/entrancepuzzle.component.html"),
            styles: [__webpack_require__(/*! ./entrancepuzzle.component.css */ "./src/app/temple/entrancepuzzle/entrancepuzzle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], EntrancepuzzleComponent);
    return EntrancepuzzleComponent;
}());



/***/ }),

/***/ "./src/app/temple/halls/halls.component.css":
/*!**************************************************!*\
  !*** ./src/app/temple/halls/halls.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxlL2hhbGxzL2hhbGxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsZS9oYWxscy9oYWxscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3h7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/temple/halls/halls.component.html":
/*!***************************************************!*\
  !*** ./src/app/temple/halls/halls.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>halls works!</p>\r\n<button (click)=\"onClick(0)\">Blue passage</button>\r\n<button (click)=\"onClick(1)\">Red passage</button>\r\n<button (click)=\"onClick(2)\">Purple passage</button>\r\n<div class=\"textbox\">\r\n  <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/temple/halls/halls.component.ts":
/*!*************************************************!*\
  !*** ./src/app/temple/halls/halls.component.ts ***!
  \*************************************************/
/*! exports provided: HallsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HallsComponent", function() { return HallsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HallsComponent = /** @class */ (function () {
    function HallsComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    HallsComponent.prototype.ngOnInit = function () {
        if (this._httpService.user.progress.blueflame == false && this._httpService.user.progress.redflame == false) {
            this.description = "After opening the door to the temple, you step into the main halls of the temple. Three passages stand out, each marked with a different colored flame. The blue and red passages are open, each marked by its own flame. The purple passage, however, remains shut, two large torches stand on either side, untouched by the fire you know must have been there long ago.";
        }
        if (this._httpService.user.inventory.blueflame == true && this._httpService.user.progress.redflame == false) {
            this.description = "You've successfully brought the blue flame to the temple halls. As you approach the large torches near the purple passage, the flame seems to be drawing you to the left. You move your blue fire towards the torch on the left. Your torch goes out, and blue flame erupts from the large torch on the floor. It's time to get the red flame.";
            this._httpService.user.inventory.blueflame = false;
        }
        if (this._httpService.user.inventory.redflame == true && this._httpService.user.progress.blueflame == false) {
            this.description = "You've successfully brought the red flame to the temple halls. As you approach the large torches near the purple passage, the flame seems to be drawing you to the right. You move your red fire towards the torch on the right. Your torch goes out, and red flame erupts from the large torch on the floor. It's time to get the blue flame.";
            this._httpService.user.inventory.redflame = false;
        }
        if (this._httpService.user.inventory.blueflame == true && this._httpService.user.progress.redflame == true) {
            this.description = "You've successfully brought the blue flame to the temple halls. As you approach the large torches near the purple passage, the flame seems to be drawing you to the left. You move your blue fire towards the torch on the left. Your torch goes out, and blue flame erupts from the large torch on the floor. With both the red and blue torches lit, the door slowly, but loudly, opens.";
            this._httpService.user.inventory.blueflame = false;
        }
        if (this._httpService.user.inventory.redflame == true && this._httpService.user.progress.blueflame == true) {
            this.description = "You've successfully brought the red flame to the temple halls. As you approach the large torches near the purple passage, the flame seems to be drawing you to the right. You move your red fire towards the torch on the right. Your torch goes out, and red flame erupts from the large torch on the floor. With both the red and blue torches lit, the door slowly, but loudly, opens.";
            this._httpService.user.inventory.redflame = false;
        }
    };
    HallsComponent.prototype.onClick = function (type) {
        if (type == 0) {
            if (this._httpService.user.progress.blueflame == false) {
                this._router.navigate(['/temple/bluepassage']);
            }
            else {
                this.description = "You've already recovered the blue flame, you have no reason to go through this passage again.";
            }
        }
        if (type == 1) {
            if (this._httpService.user.progress.redflame == false) {
                this._router.navigate(['/temple/redpassage']);
            }
            else {
                this.description = "You've already recovered the red flame, you have no reason to go through this passage again.";
            }
        }
        if (type == 2) {
            if (this._httpService.user.progress.blueflame == false || this._httpService.user.progress.redflame == false) {
                this.description = "The door to the purple passage is shut, and nothing you do can open it. Maybe if you lit both flames, you could unlock the door? You seem to remember the two flames, merging, that guard the door to the treasure.";
            }
            else {
                this._router.navigate(['/temple/purplepassage']);
            }
        }
    };
    HallsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-halls',
            template: __webpack_require__(/*! ./halls.component.html */ "./src/app/temple/halls/halls.component.html"),
            styles: [__webpack_require__(/*! ./halls.component.css */ "./src/app/temple/halls/halls.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HallsComponent);
    return HallsComponent;
}());



/***/ }),

/***/ "./src/app/temple/purpleair/purpleair.component.css":
/*!**********************************************************!*\
  !*** ./src/app/temple/purpleair/purpleair.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxlL3B1cnBsZWFpci9wdXJwbGVhaXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdGVtcGxlL3B1cnBsZWFpci9wdXJwbGVhaXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/temple/purpleair/purpleair.component.html":
/*!***********************************************************!*\
  !*** ./src/app/temple/purpleair/purpleair.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>purpleair works!</p>\r\n<button [routerLink] = \"['../purpleairpuzzle']\">Examine the door</button>\r\n<div class=\"textbox\">\r\n  <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/temple/purpleair/purpleair.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/temple/purpleair/purpleair.component.ts ***!
  \*********************************************************/
/*! exports provided: PurpleairComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurpleairComponent", function() { return PurpleairComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var PurpleairComponent = /** @class */ (function () {
    function PurpleairComponent(_httpService) {
        this._httpService = _httpService;
    }
    PurpleairComponent.prototype.ngOnInit = function () {
        this.description = "The fountains form a kind of water bridge. Though wary, you attempt to climb the stairs made of nothing but flowing water. They seem to support your weight, so you climb higher. Reaching the door, you enter the next room. Finally, this room seems completely normal, with no sign of danger, and only a closed door blocking your path. As you make your way to the door, the path behind you closes, and you start to hear the sound of air flowing out of the chamber. Better hurry...";
    };
    PurpleairComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purpleair',
            template: __webpack_require__(/*! ./purpleair.component.html */ "./src/app/temple/purpleair/purpleair.component.html"),
            styles: [__webpack_require__(/*! ./purpleair.component.css */ "./src/app/temple/purpleair/purpleair.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], PurpleairComponent);
    return PurpleairComponent;
}());



/***/ }),

/***/ "./src/app/temple/purpleairpuzzle/purpleairpuzzle.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/temple/purpleairpuzzle/purpleairpuzzle.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxlL3B1cnBsZWFpcnB1enpsZS9wdXJwbGVhaXJwdXp6bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC90ZW1wbGUvcHVycGxlYWlycHV6emxlL3B1cnBsZWFpcnB1enpsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3h7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4ub257XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/temple/purpleairpuzzle/purpleairpuzzle.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/temple/purpleairpuzzle/purpleairpuzzle.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>purpleairpuzzle works!</p>\r\n<button [ngClass]=\"{ 'on': switch }\" [routerLink] = \"['../treasure']\">Breathe deep, and step through the door</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n<div [ngClass]=\"{ 'on': switch1 }\">\r\n    <p [innerHTML]=\"question\"></p>\r\n    <input type=\"text\" name=\"answerinput\" [(ngModel)]=\"answer\" />\r\n        <button (click)=\"onClick()\">Guess!</button>\r\n        <br>\r\n</div>"

/***/ }),

/***/ "./src/app/temple/purpleairpuzzle/purpleairpuzzle.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/temple/purpleairpuzzle/purpleairpuzzle.component.ts ***!
  \*********************************************************************/
/*! exports provided: PurpleairpuzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurpleairpuzzleComponent", function() { return PurpleairpuzzleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var PurpleairpuzzleComponent = /** @class */ (function () {
    function PurpleairpuzzleComponent(_httpService) {
        this._httpService = _httpService;
        this.answer = "";
        this.switch = true;
        this.switch1 = false;
    }
    PurpleairpuzzleComponent.prototype.ngOnInit = function () {
        this.description = "You see a riddle start to form on the door...";
        this.getQuestion();
    };
    PurpleairpuzzleComponent.prototype.getQuestion = function () {
        this.question = "Voiceless it cries, wingless flutters, toothless bites, mouthless mutters.";
        this.correct = "wind";
        this.correct2 = "the wind";
    };
    PurpleairpuzzleComponent.prototype.onClick = function () {
        if (this.answer == this.correct || this.answer == this.correct2) {
            this.description = "The air reverses, and starts to return to the room. You feel much better.";
            this.switch1 = true;
            this.switch = false;
        }
        else {
            this.description = "Nothing happens.";
        }
    };
    PurpleairpuzzleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purpleairpuzzle',
            template: __webpack_require__(/*! ./purpleairpuzzle.component.html */ "./src/app/temple/purpleairpuzzle/purpleairpuzzle.component.html"),
            styles: [__webpack_require__(/*! ./purpleairpuzzle.component.css */ "./src/app/temple/purpleairpuzzle/purpleairpuzzle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], PurpleairpuzzleComponent);
    return PurpleairpuzzleComponent;
}());



/***/ }),

/***/ "./src/app/temple/purplefire/purplefire.component.css":
/*!************************************************************!*\
  !*** ./src/app/temple/purplefire/purplefire.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxlL3B1cnBsZWZpcmUvcHVycGxlZmlyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC90ZW1wbGUvcHVycGxlZmlyZS9wdXJwbGVmaXJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/temple/purplefire/purplefire.component.html":
/*!*************************************************************!*\
  !*** ./src/app/temple/purplefire/purplefire.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>purplefire works!</p>\r\n<button [routerLink] = \"['../purplefirepuzzle']\">Look more closely...</button>\r\n<div class=\"textbox\">\r\n  <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/temple/purplefire/purplefire.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/temple/purplefire/purplefire.component.ts ***!
  \***********************************************************/
/*! exports provided: PurplefireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurplefireComponent", function() { return PurplefireComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var PurplefireComponent = /** @class */ (function () {
    function PurplefireComponent(_httpService) {
        this._httpService = _httpService;
    }
    PurplefireComponent.prototype.ngOnInit = function () {
        this.description = "You enter a room, that you could only describe as a fire wall. There is quite literally, a wall of purple flame barring your passage. You can make out patterns in the flame...";
    };
    PurplefireComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purplefire',
            template: __webpack_require__(/*! ./purplefire.component.html */ "./src/app/temple/purplefire/purplefire.component.html"),
            styles: [__webpack_require__(/*! ./purplefire.component.css */ "./src/app/temple/purplefire/purplefire.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], PurplefireComponent);
    return PurplefireComponent;
}());



/***/ }),

/***/ "./src/app/temple/purplefirepuzzle/purplefirepuzzle.component.css":
/*!************************************************************************!*\
  !*** ./src/app/temple/purplefirepuzzle/purplefirepuzzle.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxlL3B1cnBsZWZpcmVwdXp6bGUvcHVycGxlZmlyZXB1enpsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsZS9wdXJwbGVmaXJlcHV6emxlL3B1cnBsZWZpcmVwdXp6bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLm9ue1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/temple/purplefirepuzzle/purplefirepuzzle.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/temple/purplefirepuzzle/purplefirepuzzle.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>purplefirepuzzle works!</p>\r\n<button [ngClass]=\"{ 'on': switch }\" [routerLink] = \"['../purplesand']\">Continue</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n<div [ngClass]=\"{ 'on': switch1 }\">\r\n    <p [innerHTML]=\"question\"></p>\r\n    <input type=\"text\" name=\"answerinput\" [(ngModel)]=\"answer\" />\r\n        <button (click)=\"onClick()\">Guess!</button>\r\n        <br>\r\n</div>"

/***/ }),

/***/ "./src/app/temple/purplefirepuzzle/purplefirepuzzle.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/temple/purplefirepuzzle/purplefirepuzzle.component.ts ***!
  \***********************************************************************/
/*! exports provided: PurplefirepuzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurplefirepuzzleComponent", function() { return PurplefirepuzzleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var PurplefirepuzzleComponent = /** @class */ (function () {
    function PurplefirepuzzleComponent(_httpService) {
        this._httpService = _httpService;
        this.answer = "";
        this.switch = true;
        this.switch1 = false;
    }
    PurplefirepuzzleComponent.prototype.ngOnInit = function () {
        this.description = "You see a riddle start to form...";
        this.getQuestion();
    };
    PurplefirepuzzleComponent.prototype.getQuestion = function () {
        this.question = "I am not alive, but I grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?";
        this.correct = "fire";
        this.correct2 = "flame";
    };
    PurplefirepuzzleComponent.prototype.onClick = function () {
        if (this.answer == this.correct || this.answer == this.correct2) {
            this.description = "The flame slowly fades, and the pass across is safe.";
            this.switch1 = true;
            this.switch = false;
        }
        else {
            this.description = "Nothing happens.";
        }
    };
    PurplefirepuzzleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purplefirepuzzle',
            template: __webpack_require__(/*! ./purplefirepuzzle.component.html */ "./src/app/temple/purplefirepuzzle/purplefirepuzzle.component.html"),
            styles: [__webpack_require__(/*! ./purplefirepuzzle.component.css */ "./src/app/temple/purplefirepuzzle/purplefirepuzzle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], PurplefirepuzzleComponent);
    return PurplefirepuzzleComponent;
}());



/***/ }),

/***/ "./src/app/temple/purplepassage/purplepassage.component.css":
/*!******************************************************************!*\
  !*** ./src/app/temple/purplepassage/purplepassage.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxlL3B1cnBsZXBhc3NhZ2UvcHVycGxlcGFzc2FnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC90ZW1wbGUvcHVycGxlcGFzc2FnZS9wdXJwbGVwYXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/temple/purplepassage/purplepassage.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/temple/purplepassage/purplepassage.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>purplepassage works!</p>\r\n<button [routerLink] = \"['../purplefire']\">Proceed</button>\r\n<div class=\"textbox\">\r\n  <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/temple/purplepassage/purplepassage.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/temple/purplepassage/purplepassage.component.ts ***!
  \*****************************************************************/
/*! exports provided: PurplepassageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurplepassageComponent", function() { return PurplepassageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var PurplepassageComponent = /** @class */ (function () {
    function PurplepassageComponent(_httpService) {
        this._httpService = _httpService;
    }
    PurplepassageComponent.prototype.ngOnInit = function () {
        this.description = "You move through the purple passage. Purple flames, clearly formed of both red and blue, line the passageway.";
    };
    PurplepassageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purplepassage',
            template: __webpack_require__(/*! ./purplepassage.component.html */ "./src/app/temple/purplepassage/purplepassage.component.html"),
            styles: [__webpack_require__(/*! ./purplepassage.component.css */ "./src/app/temple/purplepassage/purplepassage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], PurplepassageComponent);
    return PurplepassageComponent;
}());



/***/ }),

/***/ "./src/app/temple/purplesand/purplesand.component.css":
/*!************************************************************!*\
  !*** ./src/app/temple/purplesand/purplesand.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxlL3B1cnBsZXNhbmQvcHVycGxlc2FuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC90ZW1wbGUvcHVycGxlc2FuZC9wdXJwbGVzYW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/temple/purplesand/purplesand.component.html":
/*!*************************************************************!*\
  !*** ./src/app/temple/purplesand/purplesand.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>purplesand works!</p>\r\n<button [routerLink] = \"['../purplesandpuzzle']\">Try to answer the voice</button>\r\n<div class=\"textbox\">\r\n  <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/temple/purplesand/purplesand.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/temple/purplesand/purplesand.component.ts ***!
  \***********************************************************/
/*! exports provided: PurplesandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurplesandComponent", function() { return PurplesandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var PurplesandComponent = /** @class */ (function () {
    function PurplesandComponent(_httpService) {
        this._httpService = _httpService;
    }
    PurplesandComponent.prototype.ngOnInit = function () {
        this.description = "You make your way into the next room. This time, the floor is covered in sand, but it doesn't look like ordinary sand. This is quicksand! You'll need to find a way across. This time, a voice rings out, demanding an answer...";
    };
    PurplesandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purplesand',
            template: __webpack_require__(/*! ./purplesand.component.html */ "./src/app/temple/purplesand/purplesand.component.html"),
            styles: [__webpack_require__(/*! ./purplesand.component.css */ "./src/app/temple/purplesand/purplesand.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], PurplesandComponent);
    return PurplesandComponent;
}());



/***/ }),

/***/ "./src/app/temple/purplesandpuzzle/purplesandpuzzle.component.css":
/*!************************************************************************!*\
  !*** ./src/app/temple/purplesandpuzzle/purplesandpuzzle.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxlL3B1cnBsZXNhbmRwdXp6bGUvcHVycGxlc2FuZHB1enpsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsZS9wdXJwbGVzYW5kcHV6emxlL3B1cnBsZXNhbmRwdXp6bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLm9ue1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/temple/purplesandpuzzle/purplesandpuzzle.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/temple/purplesandpuzzle/purplesandpuzzle.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>purplesandpuzzle works!</p>\r\n<button [ngClass]=\"{ 'on': switch }\" [routerLink] = \"['../purplewater']\">Wait to see what happens</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n<div [ngClass]=\"{ 'on': switch1 }\">\r\n    <p [innerHTML]=\"question\"></p>\r\n    <input type=\"text\" name=\"answerinput\" [(ngModel)]=\"answer\" />\r\n        <button (click)=\"onClick()\">Guess!</button>\r\n        <br>\r\n</div>"

/***/ }),

/***/ "./src/app/temple/purplesandpuzzle/purplesandpuzzle.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/temple/purplesandpuzzle/purplesandpuzzle.component.ts ***!
  \***********************************************************************/
/*! exports provided: PurplesandpuzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurplesandpuzzleComponent", function() { return PurplesandpuzzleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var PurplesandpuzzleComponent = /** @class */ (function () {
    function PurplesandpuzzleComponent(_httpService) {
        this._httpService = _httpService;
        this.answer = "";
        this.switch = true;
        this.switch1 = false;
    }
    PurplesandpuzzleComponent.prototype.ngOnInit = function () {
        this.description = "After speaking the riddle, it falls silent.";
        this.getQuestion();
    };
    PurplesandpuzzleComponent.prototype.getQuestion = function () {
        this.question = "What has roots as nobody sees, is taller than trees, up, up it goes, dnd yet never grows?";
        this.correct = "mountain";
        this.correct2 = "a mountain";
    };
    PurplesandpuzzleComponent.prototype.onClick = function () {
        if (this.answer == this.correct || this.answer == this.correct2) {
            this.description = "The sand begins to swirl...";
            this.switch1 = true;
            this.switch = false;
        }
        else {
            this.description = "Nothing happens.";
        }
    };
    PurplesandpuzzleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purplesandpuzzle',
            template: __webpack_require__(/*! ./purplesandpuzzle.component.html */ "./src/app/temple/purplesandpuzzle/purplesandpuzzle.component.html"),
            styles: [__webpack_require__(/*! ./purplesandpuzzle.component.css */ "./src/app/temple/purplesandpuzzle/purplesandpuzzle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], PurplesandpuzzleComponent);
    return PurplesandpuzzleComponent;
}());



/***/ }),

/***/ "./src/app/temple/purplewater/purplewater.component.css":
/*!**************************************************************!*\
  !*** ./src/app/temple/purplewater/purplewater.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxlL3B1cnBsZXdhdGVyL3B1cnBsZXdhdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsZS9wdXJwbGV3YXRlci9wdXJwbGV3YXRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3h7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/temple/purplewater/purplewater.component.html":
/*!***************************************************************!*\
  !*** ./src/app/temple/purplewater/purplewater.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>purplewater works!</p>\r\n<button [routerLink] = \"['../purplewaterpuzzle']\">Try to answer the voice</button>\r\n<div class=\"textbox\">\r\n  <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/temple/purplewater/purplewater.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/temple/purplewater/purplewater.component.ts ***!
  \*************************************************************/
/*! exports provided: PurplewaterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurplewaterComponent", function() { return PurplewaterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var PurplewaterComponent = /** @class */ (function () {
    function PurplewaterComponent(_httpService) {
        this._httpService = _httpService;
    }
    PurplewaterComponent.prototype.ngOnInit = function () {
        this.description = "The sand hardens, and you walk across the room to the next door. In the next room, you can hear water. As you enter, you see giant fountains. The door is above you, with seemingly no way to reach it. The ominous voice speaks once again...";
    };
    PurplewaterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purplewater',
            template: __webpack_require__(/*! ./purplewater.component.html */ "./src/app/temple/purplewater/purplewater.component.html"),
            styles: [__webpack_require__(/*! ./purplewater.component.css */ "./src/app/temple/purplewater/purplewater.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], PurplewaterComponent);
    return PurplewaterComponent;
}());



/***/ }),

/***/ "./src/app/temple/purplewaterpuzzle/purplewaterpuzzle.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/temple/purplewaterpuzzle/purplewaterpuzzle.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxlL3B1cnBsZXdhdGVycHV6emxlL3B1cnBsZXdhdGVycHV6emxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdGVtcGxlL3B1cnBsZXdhdGVycHV6emxlL3B1cnBsZXdhdGVycHV6emxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5vbntcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/temple/purplewaterpuzzle/purplewaterpuzzle.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/temple/purplewaterpuzzle/purplewaterpuzzle.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>purplewaterpuzzle works!</p>\r\n<button [ngClass]=\"{ 'on': switch }\" [routerLink] = \"['../purpleair']\">Watch what happens...</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n<div [ngClass]=\"{ 'on': switch1 }\">\r\n    <p [innerHTML]=\"question\"></p>\r\n    <input type=\"text\" name=\"answerinput\" [(ngModel)]=\"answer\" />\r\n        <button (click)=\"onClick()\">Guess!</button>\r\n        <br>\r\n</div>"

/***/ }),

/***/ "./src/app/temple/purplewaterpuzzle/purplewaterpuzzle.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/temple/purplewaterpuzzle/purplewaterpuzzle.component.ts ***!
  \*************************************************************************/
/*! exports provided: PurplewaterpuzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurplewaterpuzzleComponent", function() { return PurplewaterpuzzleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var PurplewaterpuzzleComponent = /** @class */ (function () {
    function PurplewaterpuzzleComponent(_httpService) {
        this._httpService = _httpService;
        this.answer = "";
        this.switch = true;
        this.switch1 = false;
    }
    PurplewaterpuzzleComponent.prototype.ngOnInit = function () {
        this.description = "It speaks only the riddle, then is silent.";
        this.getQuestion();
    };
    PurplewaterpuzzleComponent.prototype.getQuestion = function () {
        this.question = "Three lives have I, gentle enough to soothe the skin";
        this.correct = "water";
        this.correct2 = "water";
    };
    PurplewaterpuzzleComponent.prototype.onClick = function () {
        if (this.answer == this.correct || this.answer == this.correct2) {
            this.description = "The fountains start to change...";
            this.switch1 = true;
            this.switch = false;
        }
        else {
            this.description = "Nothing happens.";
        }
    };
    PurplewaterpuzzleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purplewaterpuzzle',
            template: __webpack_require__(/*! ./purplewaterpuzzle.component.html */ "./src/app/temple/purplewaterpuzzle/purplewaterpuzzle.component.html"),
            styles: [__webpack_require__(/*! ./purplewaterpuzzle.component.css */ "./src/app/temple/purplewaterpuzzle/purplewaterpuzzle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], PurplewaterpuzzleComponent);
    return PurplewaterpuzzleComponent;
}());



/***/ }),

/***/ "./src/app/temple/redfire/redfire.component.css":
/*!******************************************************!*\
  !*** ./src/app/temple/redfire/redfire.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxlL3JlZGZpcmUvcmVkZmlyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsZS9yZWRmaXJlL3JlZGZpcmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLm9ue1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/temple/redfire/redfire.component.html":
/*!*******************************************************!*\
  !*** ./src/app/temple/redfire/redfire.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>redfire works!</p>\r\n<button [ngClass]=\"{ 'on': switch }\"[routerLink] = \"['../redwind']\">Proceed</button>\r\n<button [ngClass]=\"{ 'on': switch1 }\"[routerLink] = \"['../redfirepuzzle']\">Examine the floor</button>\r\n<div class=\"textbox\">\r\n  <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/temple/redfire/redfire.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/temple/redfire/redfire.component.ts ***!
  \*****************************************************/
/*! exports provided: RedfireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedfireComponent", function() { return RedfireComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var RedfireComponent = /** @class */ (function () {
    function RedfireComponent(_httpService) {
        this._httpService = _httpService;
        this.switch = false;
        this.switch1 = true;
    }
    RedfireComponent.prototype.ngOnInit = function () {
        if (this._httpService.user.inventory.redflame == false) {
            this.description = "Reaching the end of this passage, you enter a room, covered in square tiles, each with a hole in it. It looks ominous, but nothing else is happening. Nothing to do but cross the room to the door on the other side.";
        }
        else {
            this.description = "You've made it past the torrential winds without putting out your flame. As you step into the room, the tiles explode in giant flames. There's no way across, but you see a puzzle on the floor...";
            this.switch = true;
            this.switch1 = false;
        }
    };
    RedfireComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-redfire',
            template: __webpack_require__(/*! ./redfire.component.html */ "./src/app/temple/redfire/redfire.component.html"),
            styles: [__webpack_require__(/*! ./redfire.component.css */ "./src/app/temple/redfire/redfire.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], RedfireComponent);
    return RedfireComponent;
}());



/***/ }),

/***/ "./src/app/temple/redfirepuzzle/redfirepuzzle.component.css":
/*!******************************************************************!*\
  !*** ./src/app/temple/redfirepuzzle/redfirepuzzle.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxlL3JlZGZpcmVwdXp6bGUvcmVkZmlyZXB1enpsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsZS9yZWRmaXJlcHV6emxlL3JlZGZpcmVwdXp6bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLm9ue1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/temple/redfirepuzzle/redfirepuzzle.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/temple/redfirepuzzle/redfirepuzzle.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>redfirepuzzle works!</p>\r\n<button [ngClass]=\"{ 'on': switch }\" [routerLink] = \"['../halls']\">Return to the halls</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n<div [ngClass]=\"{ 'on': switch1 }\">\r\n    <p [innerHTML]=\"question\"></p>\r\n    <input type=\"text\" name=\"answerinput\" [(ngModel)]=\"answer\" />\r\n        <button (click)=\"onClick()\">Guess!</button>\r\n        <br>\r\n</div>"

/***/ }),

/***/ "./src/app/temple/redfirepuzzle/redfirepuzzle.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/temple/redfirepuzzle/redfirepuzzle.component.ts ***!
  \*****************************************************************/
/*! exports provided: RedfirepuzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedfirepuzzleComponent", function() { return RedfirepuzzleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var RedfirepuzzleComponent = /** @class */ (function () {
    function RedfirepuzzleComponent(_httpService) {
        this._httpService = _httpService;
        this.answer = "";
        this.count = 0;
        this.switch = true;
        this.switch1 = false;
    }
    RedfirepuzzleComponent.prototype.ngOnInit = function () {
        this.description = "Three more riddles.";
        this.getQuestion();
    };
    RedfirepuzzleComponent.prototype.getQuestion = function () {
        if (this.count == 0) {
            this.question = "Tool of thief, toy of queen. Always used to be unseen. Sign of joy, sign of sorrow. Giving all likeness borrowed. What am I?";
            this.correct = "mask";
            this.correct2 = "a mask";
        }
        if (this.count == 1) {
            this.question = "I am the beginning of the end, and the end of time and space. I am essential to creation, and I surround every place. What am I?";
            this.correct = "e";
            this.correct2 = "letter e";
        }
        if (this.count == 2) {
            this.question = "What are moving left to right, right now?";
            this.correct = "eyes";
            this.correct2 = "my eyes";
        }
    };
    RedfirepuzzleComponent.prototype.onClick = function () {
        if (this.answer == this.correct || this.answer == this.correct2) {
            this.count++;
            if (this.count == 3) {
                this.description = "The final answer shuts off the flames as quickly as they appeared. While still hot, the room is safe to cross.";
                this.switch1 = true;
                this.switch = false;
            }
            else {
                if (this.count == 1) {
                    this.description = "'Correct', the voice answers.";
                    this.getQuestion();
                    this.answer = "";
                }
                if (this.count == 2) {
                    this.description = "'Correct', the voice answers again";
                    this.getQuestion();
                    this.answer = "";
                }
            }
        }
        else {
            this.description = "'Incorrect'";
        }
    };
    RedfirepuzzleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-redfirepuzzle',
            template: __webpack_require__(/*! ./redfirepuzzle.component.html */ "./src/app/temple/redfirepuzzle/redfirepuzzle.component.html"),
            styles: [__webpack_require__(/*! ./redfirepuzzle.component.css */ "./src/app/temple/redfirepuzzle/redfirepuzzle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], RedfirepuzzleComponent);
    return RedfirepuzzleComponent;
}());



/***/ }),

/***/ "./src/app/temple/redflame/redflame.component.css":
/*!********************************************************!*\
  !*** ./src/app/temple/redflame/redflame.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxlL3JlZGZsYW1lL3JlZGZsYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvdGVtcGxlL3JlZGZsYW1lL3JlZGZsYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5vbntcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/temple/redflame/redflame.component.html":
/*!*********************************************************!*\
  !*** ./src/app/temple/redflame/redflame.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>redflame works!</p>\r\n<button  (click)=\"onClick(0)\">Grab the torch, and light it with the redflame!</button>\r\n<button [ngClass]=\"{ 'on': switch }\" [routerLink] = \"['../redwind']\">Back to grate room</button>\r\n<div class=\"textbox\">\r\n  <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/temple/redflame/redflame.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/temple/redflame/redflame.component.ts ***!
  \*******************************************************/
/*! exports provided: RedflameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedflameComponent", function() { return RedflameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var RedflameComponent = /** @class */ (function () {
    function RedflameComponent(_httpService) {
        this._httpService = _httpService;
        this.switch = true;
    }
    RedflameComponent.prototype.ngOnInit = function () {
        this.description = "You enter the next room, and are greeted by a temple, leading up to a shrine, with a giant red flame in the center. This time, you can reach it, and there are unlit torches lining the walls around the shrine.";
    };
    RedflameComponent.prototype.onClick = function (type) {
        if (type == 0) {
            if (this._httpService.user.inventory.redflame == false) {
                this.description = "You grab the torch and set it ablaze with red fire. Finally, you can bring it back to the temple halls.";
                this._httpService.user.inventory.redflame = true;
                this._httpService.user.progress.redflame = true;
                this.switch = false;
            }
            else {
                this.description = "You're already holding the fire, get moving to the temple halls!";
            }
        }
    };
    RedflameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-redflame',
            template: __webpack_require__(/*! ./redflame.component.html */ "./src/app/temple/redflame/redflame.component.html"),
            styles: [__webpack_require__(/*! ./redflame.component.css */ "./src/app/temple/redflame/redflame.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], RedflameComponent);
    return RedflameComponent;
}());



/***/ }),

/***/ "./src/app/temple/redpassage/redpassage.component.css":
/*!************************************************************!*\
  !*** ./src/app/temple/redpassage/redpassage.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxlL3JlZHBhc3NhZ2UvcmVkcGFzc2FnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC90ZW1wbGUvcmVkcGFzc2FnZS9yZWRwYXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/temple/redpassage/redpassage.component.html":
/*!*************************************************************!*\
  !*** ./src/app/temple/redpassage/redpassage.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>redpassage works!</p>\r\n<button [routerLink] = \"['../redfire']\">Proceed</button>\r\n<div class=\"textbox\">\r\n  <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/temple/redpassage/redpassage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/temple/redpassage/redpassage.component.ts ***!
  \***********************************************************/
/*! exports provided: RedpassageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedpassageComponent", function() { return RedpassageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var RedpassageComponent = /** @class */ (function () {
    function RedpassageComponent(_httpService) {
        this._httpService = _httpService;
    }
    RedpassageComponent.prototype.ngOnInit = function () {
        this.description = "The passageway is lined with red flames, all much too high to reach. There's no way to use it, except to light your way. There's nothing to do but continue onward.";
    };
    RedpassageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-redpassage',
            template: __webpack_require__(/*! ./redpassage.component.html */ "./src/app/temple/redpassage/redpassage.component.html"),
            styles: [__webpack_require__(/*! ./redpassage.component.css */ "./src/app/temple/redpassage/redpassage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], RedpassageComponent);
    return RedpassageComponent;
}());



/***/ }),

/***/ "./src/app/temple/redwind/redwind.component.css":
/*!******************************************************!*\
  !*** ./src/app/temple/redwind/redwind.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxlL3JlZHdpbmQvcmVkd2luZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsZS9yZWR3aW5kL3JlZHdpbmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLm9ue1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/temple/redwind/redwind.component.html":
/*!*******************************************************!*\
  !*** ./src/app/temple/redwind/redwind.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>redwind works!</p>\r\n<button [ngClass]=\"{ 'on': switch }\" [routerLink] = \"['../redflame']\">Proceed</button>\r\n<button [ngClass]=\"{ 'on': switch1 }\" [routerLink] = \"['../redwindpuzzle']\">Examine the writing</button>\r\n<div class=\"textbox\">\r\n  <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/temple/redwind/redwind.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/temple/redwind/redwind.component.ts ***!
  \*****************************************************/
/*! exports provided: RedwindComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedwindComponent", function() { return RedwindComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var RedwindComponent = /** @class */ (function () {
    function RedwindComponent(_httpService) {
        this._httpService = _httpService;
        this.switch = false;
        this.switch1 = true;
    }
    RedwindComponent.prototype.ngOnInit = function () {
        if (this._httpService.user.inventory.redflame == false) {
            this.description = "Entering this new room, you see grates along both walls. While the room is covered in red flames too high to reach, behind the grates is darkness, and you can't tell what's beyond them. Fortunately, they seem sturdy enough to hold anything that might try to come through. A door on the far side is open.";
        }
        else {
            this.description = "This time when you enter the room, there are extremely loud wooshing sounds coming from one side of the room. It looks like a massive fan is blowing air from one side to the other. Testing the wind, you know that trying to cross will put out your red flame torch in seconds. You'll have to find a way to shut it off. On the wall, writing appears...";
            this.switch = true;
            this.switch1 = false;
        }
    };
    RedwindComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-redwind',
            template: __webpack_require__(/*! ./redwind.component.html */ "./src/app/temple/redwind/redwind.component.html"),
            styles: [__webpack_require__(/*! ./redwind.component.css */ "./src/app/temple/redwind/redwind.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], RedwindComponent);
    return RedwindComponent;
}());



/***/ }),

/***/ "./src/app/temple/redwindpuzzle/redwindpuzzle.component.css":
/*!******************************************************************!*\
  !*** ./src/app/temple/redwindpuzzle/redwindpuzzle.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n.on{\r\n    visibility: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxlL3JlZHdpbmRwdXp6bGUvcmVkd2luZHB1enpsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsZS9yZWR3aW5kcHV6emxlL3JlZHdpbmRwdXp6bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLm9ue1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/temple/redwindpuzzle/redwindpuzzle.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/temple/redwindpuzzle/redwindpuzzle.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>redwindpuzzle works!</p>\r\n<button [ngClass]=\"{ 'on': switch }\" [routerLink] = \"['../redfire']\">Head into the tile room</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>\r\n<div [ngClass]=\"{ 'on': switch1 }\">\r\n    <p [innerHTML]=\"question\"></p>\r\n    <input type=\"text\" name=\"answerinput\" [(ngModel)]=\"answer\" />\r\n        <button (click)=\"onClick()\">Guess!</button>\r\n        <br>\r\n</div>"

/***/ }),

/***/ "./src/app/temple/redwindpuzzle/redwindpuzzle.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/temple/redwindpuzzle/redwindpuzzle.component.ts ***!
  \*****************************************************************/
/*! exports provided: RedwindpuzzleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedwindpuzzleComponent", function() { return RedwindpuzzleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var RedwindpuzzleComponent = /** @class */ (function () {
    function RedwindpuzzleComponent(_httpService) {
        this._httpService = _httpService;
        this.answer = "";
        this.count = 0;
        this.switch = true;
        this.switch1 = false;
    }
    RedwindpuzzleComponent.prototype.ngOnInit = function () {
        this.description = "Once again, the voice rings out. 'Speak the answers to pass.'";
        this.getQuestion();
    };
    RedwindpuzzleComponent.prototype.getQuestion = function () {
        if (this.count == 0) {
            this.question = "I'm white, and used for cutting and grinding. When I'm damaged, humans usually remove me or fill me. For most animals I am a useful tool. What am I?";
            this.correct = "tooth";
            this.correct2 = "a tooth";
        }
        if (this.count == 1) {
            this.question = "You use a knife to slice my head and weep beside me when I am dead. What am I?";
            this.correct = "onion";
            this.correct2 = "an onion";
        }
        if (this.count == 2) {
            this.question = "If you have me, you want to share me. If you share me, you haven't got me. What am I?";
            this.correct = "secret";
            this.correct2 = "a secret";
        }
    };
    RedwindpuzzleComponent.prototype.onClick = function () {
        if (this.answer == this.correct || this.answer == this.correct2) {
            this.count++;
            if (this.count == 3) {
                this.description = "Upon giving the final answer, the wind stops, and your path to the next room is safe.";
                this.switch1 = true;
                this.switch = false;
            }
            else {
                if (this.count == 1) {
                    this.description = "'Correct', the voice answers.";
                    this.getQuestion();
                    this.answer = "";
                }
                if (this.count == 2) {
                    this.description = "'Correct', the voice answers again";
                    this.getQuestion();
                    this.answer = "";
                }
            }
        }
        else {
            this.description = "'Incorrect'";
        }
    };
    RedwindpuzzleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-redwindpuzzle',
            template: __webpack_require__(/*! ./redwindpuzzle.component.html */ "./src/app/temple/redwindpuzzle/redwindpuzzle.component.html"),
            styles: [__webpack_require__(/*! ./redwindpuzzle.component.css */ "./src/app/temple/redwindpuzzle/redwindpuzzle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], RedwindpuzzleComponent);
    return RedwindpuzzleComponent;
}());



/***/ }),

/***/ "./src/app/temple/staircase/staircase.component.css":
/*!**********************************************************!*\
  !*** ./src/app/temple/staircase/staircase.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxlL3N0YWlyY2FzZS9zdGFpcmNhc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdGVtcGxlL3N0YWlyY2FzZS9zdGFpcmNhc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/temple/staircase/staircase.component.html":
/*!***********************************************************!*\
  !*** ./src/app/temple/staircase/staircase.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>staircase works!</p>\r\n<button [routerLink] = \"['../entrance']\">Descend further...</button>\r\n<div class=\"textbox\">\r\n  <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/temple/staircase/staircase.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/temple/staircase/staircase.component.ts ***!
  \*********************************************************/
/*! exports provided: StaircaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaircaseComponent", function() { return StaircaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var StaircaseComponent = /** @class */ (function () {
    function StaircaseComponent(_httpService) {
        this._httpService = _httpService;
    }
    StaircaseComponent.prototype.ngOnInit = function () {
        this.description = "As you jump into the trapdoor and descend the staircase, it seems to be getting larger the further down the you go. It just keeps going...";
    };
    StaircaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-staircase',
            template: __webpack_require__(/*! ./staircase.component.html */ "./src/app/temple/staircase/staircase.component.html"),
            styles: [__webpack_require__(/*! ./staircase.component.css */ "./src/app/temple/staircase/staircase.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], StaircaseComponent);
    return StaircaseComponent;
}());



/***/ }),

/***/ "./src/app/temple/temple.component.css":
/*!*********************************************!*\
  !*** ./src/app/temple/temple.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsZS90ZW1wbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/temple/temple.component.html":
/*!**********************************************!*\
  !*** ./src/app/temple/temple.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>temple works!</p>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/temple/temple.component.ts":
/*!********************************************!*\
  !*** ./src/app/temple/temple.component.ts ***!
  \********************************************/
/*! exports provided: TempleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempleComponent", function() { return TempleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TempleComponent = /** @class */ (function () {
    function TempleComponent() {
    }
    TempleComponent.prototype.ngOnInit = function () {
    };
    TempleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-temple',
            template: __webpack_require__(/*! ./temple.component.html */ "./src/app/temple/temple.component.html"),
            styles: [__webpack_require__(/*! ./temple.component.css */ "./src/app/temple/temple.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TempleComponent);
    return TempleComponent;
}());



/***/ }),

/***/ "./src/app/temple/templeentrance/templeentrance.component.css":
/*!********************************************************************!*\
  !*** ./src/app/temple/templeentrance/templeentrance.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxlL3RlbXBsZWVudHJhbmNlL3RlbXBsZWVudHJhbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsZS90ZW1wbGVlbnRyYW5jZS90ZW1wbGVlbnRyYW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3h7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/temple/templeentrance/templeentrance.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/temple/templeentrance/templeentrance.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>templeentrance works!</p>\r\n<button [routerLink] = \"['../entrancepuzzle']\">Approach the door...</button>\r\n<div class=\"textbox\">\r\n    <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/temple/templeentrance/templeentrance.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/temple/templeentrance/templeentrance.component.ts ***!
  \*******************************************************************/
/*! exports provided: TempleentranceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempleentranceComponent", function() { return TempleentranceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var TempleentranceComponent = /** @class */ (function () {
    function TempleentranceComponent(_httpService) {
        this._httpService = _httpService;
    }
    TempleentranceComponent.prototype.ngOnInit = function () {
        this.description = "You finally reach the bottom of the massive staircase, which leads out into an even more massive underground cavern. It's dark, but you can clearly see a huge structure not far from you. It looks to be some kind of temple...You can just make out what looks to be the entrance from this end of the cavern. As you approach, one of the walls depicts what you think is a treasure in the innermost depths of the temple, guarded by two flames that become one. You can't find any way into the temple from here, but the door seems to have some writing on it...";
    };
    TempleentranceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-templeentrance',
            template: __webpack_require__(/*! ./templeentrance.component.html */ "./src/app/temple/templeentrance/templeentrance.component.html"),
            styles: [__webpack_require__(/*! ./templeentrance.component.css */ "./src/app/temple/templeentrance/templeentrance.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], TempleentranceComponent);
    return TempleentranceComponent;
}());



/***/ }),

/***/ "./src/app/temple/treasure/treasure.component.css":
/*!********************************************************!*\
  !*** ./src/app/temple/treasure/treasure.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxlL3RyZWFzdXJlL3RyZWFzdXJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsZS90cmVhc3VyZS90cmVhc3VyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRib3h7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/temple/treasure/treasure.component.html":
/*!*********************************************************!*\
  !*** ./src/app/temple/treasure/treasure.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>treasure works!</p>\r\n<button [routerLink] = \"['../youwin']\">Look into the purple flames...</button>\r\n<div class=\"textbox\">\r\n  <p>{{description}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/temple/treasure/treasure.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/temple/treasure/treasure.component.ts ***!
  \*******************************************************/
/*! exports provided: TreasureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreasureComponent", function() { return TreasureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var TreasureComponent = /** @class */ (function () {
    function TreasureComponent(_httpService) {
        this._httpService = _httpService;
    }
    TreasureComponent.prototype.ngOnInit = function () {
        this.description = "You've finally arrived. This is it, the treasure room. You look around, but to your dismay, you don't see any treasure. In fact, this room looks very simiiar to the red and blue shrines you saw before. The only difference, is this time, it's a giant purple flame.";
    };
    TreasureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-treasure',
            template: __webpack_require__(/*! ./treasure.component.html */ "./src/app/temple/treasure/treasure.component.html"),
            styles: [__webpack_require__(/*! ./treasure.component.css */ "./src/app/temple/treasure/treasure.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], TreasureComponent);
    return TreasureComponent;
}());



/***/ }),

/***/ "./src/app/temple/youwin/youwin.component.css":
/*!****************************************************!*\
  !*** ./src/app/temple/youwin/youwin.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textbox{\r\n    width: 400px;\r\n    background-color: lightgrey;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxlL3lvdXdpbi95b3V3aW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdGVtcGxlL3lvdXdpbi95b3V3aW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0Ym94e1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/temple/youwin/youwin.component.html":
/*!*****************************************************!*\
  !*** ./src/app/temple/youwin/youwin.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>youwin works!</p>\r\n<div class=\"textbox\">\r\n  <p>{{description}}</p>\r\n</div>\r\n<div class=\"textbox\">\r\n  <p>{{victorytext}}</p>\r\n</div>"

/***/ }),

/***/ "./src/app/temple/youwin/youwin.component.ts":
/*!***************************************************!*\
  !*** ./src/app/temple/youwin/youwin.component.ts ***!
  \***************************************************/
/*! exports provided: YouwinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YouwinComponent", function() { return YouwinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http.service */ "./src/app/http.service.ts");



var YouwinComponent = /** @class */ (function () {
    function YouwinComponent(_httpService) {
        this._httpService = _httpService;
    }
    YouwinComponent.prototype.ngOnInit = function () {
        this.description = "Suddenly, you realize you're in the basement of your house, and everything seems normal. You can hear your parents in the house above you.";
        this.victorytext = "Congratulations, you've completed the MEAN Adventure! What was the treasure, you ask? The knowledge you gained along the way! Well done!";
    };
    YouwinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-youwin',
            template: __webpack_require__(/*! ./youwin.component.html */ "./src/app/temple/youwin/youwin.component.html"),
            styles: [__webpack_require__(/*! ./youwin.component.css */ "./src/app/temple/youwin/youwin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], YouwinComponent);
    return YouwinComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\banol\OneDrive\Desktop\Coding Dojo\Projects\MEAN\MEAN_Adventure\game\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map