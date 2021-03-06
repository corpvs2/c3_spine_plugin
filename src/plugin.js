"use strict";
{

    const PLUGIN_ID = "Gritsenko_Spine";
    const PLUGIN_VERSION = "1.6.0";
    const PLUGIN_CATEGORY = "general";

    const PLUGIN_CLASS = SDK.Plugins.Gritsenko_Spine = class SpinePlugin extends SDK.IPluginBase {
        constructor() {
            super(PLUGIN_ID);

            SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());

            this._info.SetName(lang(".name"));
            this._info.SetDescription(lang(".description"));
            this._info.SetVersion(PLUGIN_VERSION);
            this._info.SetCategory(PLUGIN_CATEGORY);
            this._info.SetAuthor("Gritsenko");
            this._info.SetHelpUrl(lang(".help-url"));
            this._info.SetPluginType("world"); // mark as world plugin, which can draw
            this._info.SetIsResizable(true); // allow to be resized
            this._info.SetIsRotatable(true); // allow to be rotated
            this._info.SetHasImage(true);
            this._info.SetSupportsEffects(true); // allow effects
            this._info.SetMustPreDraw(true);
            this._info.AddCommonPositionACEs();
            this._info.AddCommonAngleACEs();
            this._info.AddCommonAppearanceACEs();
            this._info.AddCommonZOrderACEs();
            this._info.AddCommonSizeACEs();
            this._info.SetIsTiled(false);
            this._info.SetIsSingleGlobal(false);
            this._info.SetIsDeprecated(false);
            this._info.SetCanBeBundled(true);


            // this._info.AddFileDependency({
            //     filename: "c3runtime/spine-webgl.js",
            //     type: "external-dom-script"
            // });

            this._info.SetDOMSideScripts(["c3runtime/spine-webgl.js"]);


            this._info.SetSupportedRuntimes(["c3"]);

            SDK.Lang.PushContext(".properties");

            this._info.SetProperties([
                new SDK.PluginProperty("text", "json", ""),
                new SDK.PluginProperty("text", "atlas", ""),
                new SDK.PluginProperty("text", "png", ""),
                new SDK.PluginProperty("text", "skin", "default"),
                new SDK.PluginProperty("text", "animation", "idle"),
                new SDK.PluginProperty("text", "skeleton", ""),
                new SDK.PluginProperty("float", "scale", 1),
                new SDK.PluginProperty("check", "pre-mult-alpha", false),
                new SDK.PluginProperty("check", "collisions", true),
                new SDK.PluginProperty("float", "default-mix", 0.0)
            ]);
            SDK.Lang.PopContext(); //.properties
            SDK.Lang.PopContext();
        }
    };

    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}
