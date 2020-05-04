# Ablauf, Vadzim

## M000 | WARMING UP

- [x] Greeter
- [x] Visual Studio Code [homepage](https://code.visualstudio.com/)
- [x] [vsc-shortcuts.md](SHORTCUTS-VSCODE.md)
- [x] Git [homepage](https://git-scm.com)
- [x] [git-commands.md](GIT-COMMANDS.md)
- [x] [textEditorShortcuts.md](SHORTCUTS-EDITOR.md)

[commit](https://github.com/ppedvAG/20200427-TS-NG-VC/commit/98345aa5aba68a880369da1c6a0fac4e8876083e)
<!-- 
Die Links in VSC sind nicht case-sensitive und funktionieren auch mit Backslash statt Slash.
Auf GitHub sind sie aber case-sensitive und nur mit Slash!
-->

## M001 | GETTING STARTED

- [x] intro
- [x] node & npm [npm home](https://www.npmjs.com/)
- [x] tsc
- [x] [TS.md getting started](typescript.md#ts--getting-started)
- [x] [M001-Demo](M001-Demo-Helloworld/greeter.ts)
- [x] [M001-Lab](M001-Lab-LoginForm/login.ts)
- [x] [js Dom Traversing](M001-Demo-Helloworld/jsDOMtraversing.html)
- [x] [emmet](M001-Demo-Helloworld/emmet.html)

[commit](https://github.com/ppedvAG/20200427-TS-NG-VC/commit/e86c47429af1e1183417de869f3daa0757ffc7bb)

## M002 | TYPES

- [x] [primitives, type object, typeof, casting](M002-Demo-Types/types.ts)
- [x] [assertion](M002-Demo-Types/assertion.ts)
- [x] [any vs. unknown](M002-Demo-Types/anyVsUnknown.ts)
- [x] [Ü Taschenrechner](M001-Lab-Rechner/rechner.ts)

[commit](https://github.com/ppedvAG/20200427-TS-NG-VC/commit/2ae266de1c01f27b519694877f1afd63592a131b)

## M003 | FUNCTION

- [x] return type
- [x] function type
- [x] generic function
- [x] [demo](M003-Demo-Functions/functions.ts)

[commit](https://github.com/ppedvAG/20200427-TS-NG-VC/commit/1c26e146afb3b36b31e6cd1e0aa5586d78579e48)

## M004 | DATA STRUCTURES

- [x] [arrays](M004-Demo-DataStructures/arrays.ts)
- [x] [Ü arrays](M004-Lab-DataStructures/genericFctNArrays.ts)
- [x] [tuple / Tupel](M004-Demo-DataStructures/tuples.ts)

[commit](https://github.com/ppedvAG/20200427-TS-NG-VC/commit/d182a88062a0732b4209339d5756ef9e5ad32804)

## M005 | UNION TYPE & LITERAL TYPE

- [x] [union type & string literal type](M005-Demo-UnionTypeNLiteralType/unionTypeNLiteralType.ts)
- [x] [enums](M005-Demo-UnionTypeNLiteralType/enums.ts)
- [x] [Ü Pizzabestellung](M005-Lab-PizzaBestellung/pizza.ts)

[commit](https://github.com/ppedvAG/20200427-TS-NG-VC/commit/f49df29e1d6980ea2e04cca3a5d078172e962eb9)

## M006 | INTERFACES

- [x] [interfaces](M006-Demo-Interfaces/interfaces.ts)
- [x] [Ü Todos](M006-Lab-TodoListe/todos.ts)

[commit](https://github.com/ppedvAG/20200427-TS-NG-VC/commit/f902ae6c1ad48109b2d71fba2778553d7f311f55)

<!-- type narrowing & type guards -->

<!-- promise -->

## M007 | NG GETTING STARTED

- [x] intro
- [x] project structure
- [x] ecosystem
- [x] ng cli
- [x] components, selectors
- [x] class-props [props.component.html](theory-app/src/app/demos-mdl/props/props.component.html)

commit

## M008 | NG MODULES

- [x] ng modules
- [x] js/ts modules
- [x] node modules
- [x] [demos mdl](theory-app/src/app/demos-mdl/demos-mdl.module.ts)

commit

## M009 | COMPONENTS INTRO

- [x] component template
- [x] component selector
- [x] imports of components
- [x] [demo time](theory-app/src/app/demos-mdl/time/time.component.ts)
- [x] inputs [demo card](theory-app/src/app/demos-mdl/card/card.component.ts)
- [x] [Ü rating](theory-app/src/app/photos-mdl/rating/rating.component.ts)

<!-- LAB:
in photos-mdl eine komponente rating
mit zwei Props Input-starsNumber & starsString

starsString = '*'.repeat(starsNumber);

photos-mdl hat auch eine Overview-Komponente
rating-Komponente wird über Overview gerendert
 -->

 [commit](https://github.com/ppedvAG/20200427-TS-NG-VC/commit/156e41d15678508b4fa39e8ae2bce09334365486)

## M010 | NG & CSS

- [x] :host
- [x] style-object [card.component.html](theory-app/src/app/demos-mdl/card/card.component.html)
- [x] class-object [events.component.html](theory-app/src/app/demos-mdl/events/events.component.html)
- [x] ngStyle
- [x] ngClass [furniture.component.html](theory-app/src/app/demos-mdl/furniture/furniture.component.html)
- [x] className

[commit](https://github.com/ppedvAG/20200427-TS-NG-VC/commit/2daa149dcee8c592eb6adf66c74582f6e308c542)

## M011 | DIRECTIVES

- [x] directive, directive types
- [x] ngFor, ngIf, ngSwitch
- [x] ng-template [roman-number.component.html](theory-app/src/app/demos-mdl/roman-number/roman-number.component.html)
- [ ] [Ü photos](theory-app/src/app/photos-mdl/photo-album/photo-album.component.ts)

<!-- 
LAB
15 Bilder holen
in ein Array diese 15 Bilder packen
Array durchiterieren und dabei soll die 
Komponente Photo wiederholt werden -->

[commit](https://github.com/ppedvAG/20200427-TS-NG-VC/commit/52ae71708d3f288786f17eed0a00d9b47e03036e)

## M012 | COMPONENTS & LIFECYCLE

- [x] templates & 'inline-template'
- [x] 'inline-styles'
- [x] class fields / props & template variables
- [x] components lifecycle & lifecycle hooks
- [x] [pipes](theory-app/src/app/demos-mdl/pipes/pipes.component.html)

[commit](https://github.com/ppedvAG/20200427-TS-NG-VC/commit/c72f79939d97399e5086e62915fb9439e72dacf3)

## M013 | EVENTS

- [x] event binding über runde Klammern
- [x] event object, event.target, event types
- [x] [demo events](theory-app/src/app/demos-mdl/events/events.component.ts)
- [x] [demo outputs](theory-app/src/app/demos-mdl/outputs/outputs.component.ts)

commit

## M014 | FORMS

- [x] FormsModule
- [x] ngModel
- [x] ngForm
- [x] two way data binding [(ngModel)]
- [x] [demo ngform](theory-app/src/app/demos-mdl/ngform/ngform.component.ts)
- [x] [Ü login form](theory-app/src/app/photos-mdl/login-form/login-form.component.ts)

[commit](https://github.com/ppedvAG/20200427-TS-NG-VC/commit/3bf09841bc636d5cb81fe32bf00b3b0cb16e6309)

## M015 | ROUTING

- [x] RoutingModule & RouterModule [routing.module.ts](theory-app/src/app/app-routing.module.ts)
- [x] Routes & Route [routing.module.ts](theory-app/src/app/app-routing.module.ts)
- [x] Paths, Endpoints, Redirections [routing.module.ts](theory-app/src/app/app-routing.module.ts)
- [x] router-outlet & routerLink [app.component.html](theory-app/src/app/app.component.html)

[commit](https://github.com/ppedvAG/20200427-TS-NG-VC/commit/fb24445d2a20e04ad257bf0040703f34fa5d435a)

## M016 | SERVICES

- [ ] dependency injection
- [ ] service & @Injectable()
- [ ] HttpClienModule & HttpClient
- [ ] rxjs & observables
- [ ] [photos.service.ts](theory-app/src/app/photos-mdl/services/photos.service.ts)

[commit](https://github.com/ppedvAG/20200427-TS-NG-VC/commit/9a7f10d8c107b5481f385f80592ec9ec6b049db0)

## M017 | MATERIAL

- [ ] [material.angular.io](https://material.angular.io/)
- [ ] [mat-slider](theory-app/src/app/demos-mdl/material/material.component.html)

[commit](https://github.com/ppedvAG/20200427-TS-NG-VC/commit/d2ffba0ac8dc6272901684ed61d7684b537d9895)
