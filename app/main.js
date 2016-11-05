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