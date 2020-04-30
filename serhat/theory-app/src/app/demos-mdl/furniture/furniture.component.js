"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const Furniture = __importStar(require("../models/furniture"));
let FurnitureComponent = class FurnitureComponent {
    constructor() { }
    getClass() {
        if (this.someFurniture instanceof Furniture.UFormSofa) {
            this.description = 'This is a UFormSofa';
            return 'UFormSofa';
        }
        else if (this.someFurniture instanceof Furniture.Sofa) {
            this.description = 'This is a Sofa';
            return 'Sofa';
        }
    }
    ngOnInit() {
        console.log('Furniture :>> ', Furniture);
    }
};
__decorate([
    core_1.Input()
], FurnitureComponent.prototype, "someFurniture", void 0);
__decorate([
    core_1.Input()
], FurnitureComponent.prototype, "myCouch", void 0);
__decorate([
    core_1.Input()
], FurnitureComponent.prototype, "myTable", void 0);
__decorate([
    core_1.Input()
], FurnitureComponent.prototype, "angleCouch", void 0);
__decorate([
    core_1.Input()
], FurnitureComponent.prototype, "uSofa", void 0);
__decorate([
    core_1.Input()
], FurnitureComponent.prototype, "myFurniture", void 0);
FurnitureComponent = __decorate([
    core_1.Component({
        selector: 'app-furniture',
        templateUrl: './furniture.component.html',
        styleUrls: ['./furniture.component.css']
    })
], FurnitureComponent);
exports.FurnitureComponent = FurnitureComponent;
