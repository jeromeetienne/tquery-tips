requirejs.config({
	"paths": {
		"build": "../../../build",
		"plugins": "../../../plugins",
		"threex": "../../../vendor/threex",
		"three.js": "../../../vendor/three.js"
	},
	"map": {
		"*": {
			"tquery.cannonjs": "plugins/cannonjs/tquery.object3d.cannonjs",
			"tquery.car": "plugins/requirejs/confrequire/car.initrequire",
			"tquery.checkerboard": "plugins/checkerboard/tquery.checkerboard",
			"tquery.controls": "plugins/controls/tquery.controlstween",
			"tquery.csg": "plugins/csg/tquery.geometry.csg",
			"tquery.datguituner": "plugins/datguituner/tquery.datguituner",
			"tquery.deviceorientation": "plugins/deviceorientation/tquery.deviceorientation",
			"tquery.domevent": "plugins/domevent/tquery.domevent",
			"tquery.fireball": "plugins/fireball/tquery.fireballmaterial",
			"tquery.fog": "plugins/fog/tquery.world.createfog",
			"tquery.grassground": "plugins/requirejs/confrequire/grassground.initrequire",
			"tquery.gsvpano": "plugins/gsvpano/tquery.gsvpano",
			"tquery.headtrackr": "plugins/headtrackr/tquery.headtrackr",
			"tquery.keyboard": "plugins/keyboard/tquery.keyboard",
			"tquery.lavamaterial": "plugins/requirejs/confrequire/lavamaterial.initrequire",
			"tquery.lensflare": "plugins/requirejs/confrequire/lensflare.initrequire",
			"tquery.shadowmap": "plugins/shadowmap/tquery.light.shadowmap",
			"tquery.lightsaber": "plugins/lightsaber/tquery.lightsaber",
			"tquery.linkify": "plugins/linkify/tquery.mesh.linkify",
			"tquery.loaders": "plugins/loaders/tquery.loaders",
			"tquery.md2character": "plugins/requirejs/confrequire/md2character.initrequire",
			"tquery.minecraft": "plugins/requirejs/confrequire/minecraft.initrequire",
			"tquery.modifiers": "plugins/modifiers/tquery.geometry.smooth",
			"tquery.montainarena": "plugins/montainarena/tquery.montainarena",
			"tquery.objectcoord": "plugins/objectcoord/tquery.object3d.coordinate",
			"tquery.physics": "plugins/physics/tquery.physijs",
			"tquery.planets": "plugins/requirejs/confrequire/planets.initrequire",
			"tquery.poolball": "plugins/poolball/tquery.poolball",
			"tquery.pproc": "plugins/pproc/tquery.effectcomposer",
			"tquery.shape": "plugins/shape/tquery.shape",
			"tquery.simplemaze": "plugins/simplemaze/tquery.simplemaze",
			"tquery.skymap": "plugins/skymap/tquery.skymap",
			"tquery.statsplus": "plugins/statsplus/tquery.statsplus",
			"tquery.text": "plugins/text/tquery.text",
			"tquery.text.allfonts": "plugins/text/fonts/droid/droid_serif_regular.typeface",
			"tquery.tweenjs": "plugins/tweenjs/tquery.tween",
			"tquery.videos": "plugins/videos/tquery.createvideotexture",
			"tquery.virtualjoystick": "plugins/virtualjoystick/vendor/virtualjoystick",
			"tquery.webaudio": "plugins/requirejs/confrequire/webaudio.initrequire",
			"webgl-inspector": "plugins/requirejs/confrequire/webglinspector.initrequire",
			"domReady": "plugins/requirejs/vendor/domReady",
			"tquery.whammy": "plugins/requirejs/confrequire/whammy.initrequire"
		}
	},
	"shim": {
		"plugins/cannonjs/tquery.object3d.cannonjs": [
			"plugins/cannonjs/tquery.world.cannonjs",
			"plugins/cannonjs/vendor/cannon.js/build/cannon"
		],
		"plugins/requirejs/confrequire/car.initrequire": [
			"plugins/car/tquery.car",
			"plugins/car/Car",
			"plugins/car/tquery.car.keyboard",
			"plugins/car/tquery.car.cameracontrols",
			"plugins/car/tquery.car.deviceorientation"
		],
		"plugins/car/tquery.car.deviceorientation": [
			"plugins/car/tquery.car"
		],
		"plugins/car/tquery.car.cameracontrols": [
			"plugins/car/tquery.car"
		],
		"plugins/car/tquery.car.keyboard": [
			"plugins/car/tquery.car"
		],
		"plugins/controls/tquery.controlstween": [
			"plugins/controls/tquery.controlswrapper",
			"three.js/controls/FirstPersonControls",
			"three.js/controls/OrbitControls",
			"three.js/controls/PointerLockControls",
			"three.js/controls/TrackballControls",
			"three.js/controls/FlyControls",
			"three.js/controls/PathControls",
			"three.js/controls/RollControls"
		],
		"plugins/csg/tquery.geometry.csg": [
			"plugins/csg/csg",
			"plugins/csg/ThreeCSG",
			"plugins/csg/tquery.object3d.csg"
		],
		"plugins/datguituner/tquery.datguituner": [
			"plugins/assets/vendor/dat.gui/dat.gui",
			"plugins/assets/vendor/dat.gui/dat.color"
		],
		"plugins/deviceorientation/tquery.deviceorientation": [
			"threex/THREEx.DeviceOrientationState"
		],
		"plugins/domevent/tquery.domevent": [
			"plugins/domevent/threex.domevent"
		],
		"plugins/gsvpano/tquery.gsvpano": [
			"plugins/gsvpano/vendor/GSVPano"
		],
		"plugins/headtrackr/tquery.headtrackr": [
			"plugins/headtrackr/vendor/headtrackr"
		],
		"plugins/keyboard/tquery.keyboard": [
			"threex/THREEx.KeyboardState"
		],
		"plugins/linkify/tquery.mesh.linkify": [
			"tquery.domevent"
		],
		"plugins/loaders/tquery.loaders": [
			"three.js/loaders/BinaryLoader",
			"three.js/loaders/MTLLoader",
			"three.js/loaders/OBJMTLLoader",
			"three.js/loaders/STLLoader",
			"three.js/loaders/VTKLoader",
			"three.js/loaders/ColladaLoader",
			"three.js/loaders/OBJLoader",
			"three.js/loaders/PDBLoader",
			"three.js/loaders/UTF8Loader"
		],
		"plugins/requirejs/confrequire/md2character.initrequire": [
			"plugins/md2character/tquery.md2character",
			"plugins/md2character/tquery.md2character.cameracontrols",
			"plugins/md2character/tquery.md2character.ratamahatta",
			"plugins/md2character/tquery.md2character.ratamahatta.keyboard"
		],
		"plugins/md2character/tquery.md2character.cameracontrols": [
			"plugins/md2character/tquery.md2character"
		],
		"plugins/md2character/tquery.md2character.ratamahatta": [
			"plugins/md2character/tquery.md2character"
		],
		"plugins/md2character/tquery.md2character.ratamahatta.keyboard": [
			"plugins/md2character/tquery.md2character.ratamahatta"
		],
		"plugins/requirejs/confrequire/minecraft.initrequire": [
			"plugins/minecraft/tquery.midikeytween",
			"plugins/minecraft/tquery.minecraftchar",
			"plugins/minecraft/tquery.minecraftchar.keyboard2",
			"tquery.keyboard",
			"plugins/minecraft/tquery.camerafpscontrols",
			"plugins/minecraft/tquery.spritesheet",
			"plugins/minecraft/tquery.minecraftcharanimations",
			"plugins/minecraft/tquery.minecraftcharheadanimations"
		],
		"plugins/minecraft/tquery.minecraftcharanimations": [
			"plugins/minecraft/tquery.animations"
		],
		"plugins/minecraft/tquery.minecraftcharheadanimations": [
			"plugins/minecraft/tquery.animations"
		],
		"plugins/minecraft/tquery.animations": [
			"plugins/minecraft/tquery.animation"
		],
		"plugins/modifiers/tquery.geometry.smooth": [
			"three.js/modifiers/ExplodeModifier",
			"three.js/modifiers/SubdivisionModifier",
			"three.js/modifiers/TessellateModifier"
		],
		"plugins/physics/tquery.physijs": [
			"plugins/physics/vendor/physijs/physi"
		],
		"plugins/requirejs/confrequire/planets.initrequire": [
			"plugins/planets/tquery.createplanet"
		],
		"plugins/pproc/tquery.effectcomposer": [
			"three.js/shaders/BleachBypassShader",
			"three.js/shaders/BlendShader",
			"three.js/shaders/CopyShader",
			"three.js/shaders/ColorifyShader",
			"three.js/shaders/ConvolutionShader",
			"three.js/shaders/FilmShader",
			"three.js/shaders/FXAAShader",
			"three.js/shaders/HorizontalBlurShader",
			"three.js/shaders/SepiaShader",
			"three.js/shaders/VerticalBlurShader",
			"three.js/shaders/VignetteShader",
			"three.js/postprocessing/EffectComposer",
			"three.js/postprocessing/BloomPass",
			"three.js/postprocessing/DotScreenPass",
			"three.js/postprocessing/FilmPass",
			"three.js/postprocessing/MaskPass",
			"three.js/postprocessing/RenderPass",
			"three.js/postprocessing/SavePass",
			"three.js/postprocessing/ShaderPass",
			"three.js/postprocessing/TexturePass"
		],
		"plugins/shadowmap/tquery.light.shadowmap": [
			"plugins/shadowmap/tquery.world.shadowmap"
		],
		"plugins/shape/tquery.shape": [
			"plugins/shape/tquery.shape.create"
		],
		"plugins/simplemaze/tquery.simplemaze": [
			"plugins/simplemaze/tquery.simplemaze.pathfinding",
			"plugins/simplemaze/vendor/pathfinding-browser"
		],
		"plugins/skymap/tquery.skymap": [
			"plugins/skymap/tquery.cubetexture"
		],
		"plugins/statsplus/tquery.statsplus": [
			"plugins/statsplus/statsdelay",
			"plugins/statsplus/statsmemory",
			"plugins/statsplus/statsthreejswebgl"
		],
		"plugins/text/tquery.text": [
			"plugins/text/fonts/droid/droid_serif_bold.typeface"
		],
		"plugins/text/fonts/droid/droid_serif_regular.typeface": [
			"plugins/text/fonts/gentilis_bold.typeface",
			"plugins/text/fonts/gentilis_regular.typeface",
			"plugins/text/fonts/optimer_bold.typeface",
			"plugins/text/fonts/optimer_regular.typeface",
			"plugins/text/fonts/helvetiker_bold.typeface",
			"plugins/text/fonts/helvetiker_regular.typeface",
			"plugins/text/fonts/droid/droid_sans_regular.typeface",
			"plugins/text/fonts/droid/droid_sans_bold.typeface",
			"plugins/text/fonts/droid/droid_serif_bold.typeface"
		],
		"plugins/tweenjs/tquery.tween": [
			"plugins/tweenjs/vendor/Tween"
		],
		"plugins/videos/tquery.createvideotexture": [
			"plugins/videos/tquery.audiovideotexture",
			"plugins/videos/tquery.createwebcamtexture",
			"plugins/videos/tquery.createtvsnowtexture"
		],
		"plugins/requirejs/confrequire/webaudio.initrequire": [
			"plugins/webaudio/vendor/webaudio-bundle",
			"plugins/webaudio/vendor/webaudio.sound.jsfx",
			"plugins/webaudio/vendor/jsfx/jsfx",
			"plugins/webaudio/vendor/jsfx/jsfxlib"
		],
		"plugins/webaudio/vendor/webaudio.sound.jsfx": [
			"plugins/webaudio/vendor/webaudio-bundle"
		],
		"plugins/webaudio/vendor/jsfx/jsfx": [
			"plugins/webaudio/vendor/jsfx/audio"
		],
		"plugins/webaudio/vendor/jsfx/jsfxlib": [
			"plugins/webaudio/vendor/jsfx/jsfx"
		],
		"plugins/requirejs/confrequire/whammy.initrequire": [
			"plugins/whammy/vendor/whammy",
			"plugins/whammy/tquery.whammy",
			"plugins/whammy/tquery.whammy.bindkeyboard",
			"plugins/whammy/tquery.whammyUI"
		],
		"plugins/whammy/tquery.whammy.bindkeyboard": [
			"plugins/whammy/tquery.whammy"
		]
	}
});
