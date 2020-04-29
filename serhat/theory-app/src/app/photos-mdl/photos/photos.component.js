"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const Photo_1 = __importDefault(require("../models/Photo"));
let PhotosComponent = class PhotosComponent {
    constructor() { }
    ngOnInit() {
        fetch('https://jsonplaceholder.typicode.com/photos/1')
            .then(jsonstring => jsonstring.json())
            .then(object => {
            this.myPhoto = new Photo_1.default(object.albumId, object.id, object.title, object.url, object.thumbnailUrl);
        });
    }
};
PhotosComponent = __decorate([
    core_1.Component({
        selector: 'app-photos',
        templateUrl: './photos.component.html',
        styleUrls: ['./photos.component.css']
    })
], PhotosComponent);
exports.PhotosComponent = PhotosComponent;
