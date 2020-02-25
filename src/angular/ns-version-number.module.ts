import { NgModule } from "@angular/core";

import { DIRECTIVES } from "./ns-version-number.directives";

@NgModule({
    declarations: [DIRECTIVES],
    exports: [DIRECTIVES],
})
export class NsVersionNumberModule { }
