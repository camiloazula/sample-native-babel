// this import should be first in order to load some required settings (like globals and reflect-metadata)
import 'reflect-metadata'
import '@angular/platform-browser'
import '@angular/platform-browser-dynamic'
import '@angular/core'
import '@angular/common'
import '@angular/forms'
import '@angular/http'
import '@angular/router'

import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core"; 
import { AppComponent } from "./app.component";

Error['stackTraceLimit'] = Infinity

@NgModule({
    imports: [
        NativeScriptModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule)