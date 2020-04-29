"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const time_component_1 = require("./time/time.component");
const card_component_1 = require("./card/card.component");
const demo_overview_component_1 = require("./demo-overview/demo-overview.component");
const furniture_component_1 = require("./furniture/furniture.component");
let DemosMdlModule = class DemosMdlModule {
};
DemosMdlModule = __decorate([
    core_1.NgModule({
        declarations: [time_component_1.TimeComponent, card_component_1.CardComponent, demo_overview_component_1.DemoOverviewComponent, furniture_component_1.FurnitureComponent],
        imports: [
            common_1.CommonModule
        ],
        bootstrap: [demo_overview_component_1.DemoOverviewComponent, furniture_component_1.FurnitureComponent],
        exports: [
            demo_overview_component_1.DemoOverviewComponent,
            furniture_component_1.FurnitureComponent
        ]
    })
], DemosMdlModule);
exports.DemosMdlModule = DemosMdlModule;
